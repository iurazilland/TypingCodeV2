import type { User } from '@supabase/supabase-js';
import { createClient } from '@/lib/supabase/client';
import { isSupabaseConfigured } from '@/lib/supabase/env';
import type { UserLevelProgressRow, UserProfile } from '@/lib/supabase/types';
import { getPracticeRound } from '@/lib/practiceData';

export const PROGRESS_SYNCED_EVENT = 'typingcode-progress-synced';

function dispatchProgressSynced() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(PROGRESS_SYNCED_EVENT));
  }
}

export function deriveDisplayName(user: User): string {
  const meta = user.user_metadata || {};
  const raw =
    (typeof meta.name === 'string' && meta.name.trim()) ||
    (typeof meta.full_name === 'string' && meta.full_name.trim()) ||
    (typeof meta.user_name === 'string' && meta.user_name.trim()) ||
    (user.email ? user.email.split('@')[0] : '') ||
    'Coder';
  return raw.slice(0, 40);
}

export function buildFallbackProfile(user: User): UserProfile {
  const meta = user.user_metadata || {};
  return {
    id: user.id,
    display_name: deriveDisplayName(user),
    avatar_emoji: '🦊',
    avatar_url: typeof meta.avatar_url === 'string' ? meta.avatar_url : null,
    primary_language: 'Python',
    best_cpm: 0,
    avg_accuracy: 100,
    cleared_levels_count: 0,
    solved_problems_count: 0,
    created_at: user.created_at || new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
}

export async function ensureUserProfile(user: User): Promise<UserProfile> {
  if (!isSupabaseConfigured()) {
    return buildFallbackProfile(user);
  }

  const supabase = createClient();
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .maybeSingle();

  if (!error && data) {
    return data as UserProfile;
  }

  // If user existed in V1 auth.users before trigger or needs profile row created
  const fallback = buildFallbackProfile(user);
  const { data: inserted, error: insertError } = await supabase
    .from('profiles')
    .upsert(
      {
        id: user.id,
        display_name: fallback.display_name,
        avatar_url: fallback.avatar_url,
      },
      { onConflict: 'id' }
    )
    .select('*')
    .maybeSingle();

  if (!insertError && inserted) {
    return inserted as UserProfile;
  }

  return fallback;
}

/**
 * Bidirectional sync between Supabase `user_level_progress` and browser `localStorage`
 * so existing local progress is preserved and cloud progress hydrates all UI screens.
 */
export async function syncProgressOnLogin(user: User): Promise<void> {
  if (typeof window === 'undefined' || !isSupabaseConfigured()) return;

  try {
    await ensureUserProfile(user);
    const supabase = createClient();

    const { data: cloudRows, error } = await supabase
      .from('user_level_progress')
      .select('*')
      .eq('user_id', user.id);

    if (error) {
      return;
    }

    const cloudMap = new Map<string, UserLevelProgressRow>();
    for (const row of (cloudRows || []) as UserLevelProgressRow[]) {
      const mapKey = `${row.track_id}:${row.level_number}`;
      cloudMap.set(mapKey, row);

      const storageKey = `unlocked_step_${row.track_id}_${row.level_number}`;
      const localStep = parseInt(localStorage.getItem(storageKey) || '0', 10);
      if (row.unlocked_step > localStep) {
        localStorage.setItem(storageKey, String(row.unlocked_step));
      }

      const heartsKey = `hearts_${row.track_id}_${row.level_number}`;
      if (!localStorage.getItem(heartsKey) && typeof row.hearts === 'number') {
        localStorage.setItem(heartsKey, String(row.hearts));
      }
    }

    // Collect local progress entries that exceed cloud progress and push them up
    const rowsToPush: Array<{
      user_id: string;
      track_id: string;
      level_number: number;
      unlocked_step: number;
      total_steps: number;
      is_cleared: boolean;
      hearts: number;
      best_cpm: number;
      best_accuracy: number;
    }> = [];

    const prefix = 'unlocked_step_';
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key || !key.startsWith(prefix)) continue;

      const rest = key.slice(prefix.length);
      const lastUnderscore = rest.lastIndexOf('_');
      if (lastUnderscore <= 0) continue;

      const trackId = rest.slice(0, lastUnderscore).toLowerCase();
      const levelNum = parseInt(rest.slice(lastUnderscore + 1), 10);
      if (!trackId || !Number.isFinite(levelNum) || levelNum < 1) continue;

      const localStep = parseInt(localStorage.getItem(key) || '0', 10);
      if (!Number.isFinite(localStep) || localStep <= 0) continue;

      // Skip auto-seeded default Level 1 unless user actually progressed beyond or cloud is missing
      const round = getPracticeRound(trackId, levelNum);
      const totalSteps =
        round && round.roundNumber === levelNum ? round.questions.length : 10;

      const existingCloud = cloudMap.get(`${trackId}:${levelNum}`);
      if (!existingCloud || localStep > existingCloud.unlocked_step) {
        const mergedStep = Math.max(localStep, existingCloud?.unlocked_step || 0);
        const savedHearts = parseInt(
          localStorage.getItem(`hearts_${trackId}_${levelNum}`) || '5',
          10
        );
        const hearts = Number.isFinite(savedHearts)
          ? Math.min(5, Math.max(0, savedHearts))
          : 5;

        rowsToPush.push({
          user_id: user.id,
          track_id: trackId,
          level_number: levelNum,
          unlocked_step: mergedStep,
          total_steps: totalSteps,
          is_cleared: mergedStep >= totalSteps,
          hearts,
          best_cpm: existingCloud?.best_cpm || 0,
          best_accuracy: existingCloud?.best_accuracy ?? 100,
        });
      }
    }

    if (rowsToPush.length > 0) {
      await supabase
        .from('user_level_progress')
        .upsert(rowsToPush, { onConflict: 'user_id,track_id,level_number' });
    }

    dispatchProgressSynced();
  } catch {
    // Non-fatal background sync
  }
}

export interface SaveStepProgressInput {
  rawLang: string;
  levelNum: number;
  unlockedStep: number;
  totalSteps: number;
  hearts?: number;
  cpm?: number;
  accuracy?: number;
}

export async function saveLevelStepProgress(input: SaveStepProgressInput): Promise<void> {
  const trackId = input.rawLang.toLowerCase();
  const levelNum = input.levelNum;
  const totalSteps = Math.max(1, input.totalSteps);

  let nextUnlockedStep = Math.max(0, input.unlockedStep);

  if (typeof window !== 'undefined') {
    const key = `unlocked_step_${trackId}_${levelNum}`;
    const currentLocal = parseInt(localStorage.getItem(key) || '0', 10);
    nextUnlockedStep = Math.max(currentLocal, nextUnlockedStep);
    if (nextUnlockedStep > currentLocal) {
      localStorage.setItem(key, String(nextUnlockedStep));
    }
    dispatchProgressSynced();
  }

  if (!isSupabaseConfigured()) return;

  try {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;

    const { data: existing } = await supabase
      .from('user_level_progress')
      .select('unlocked_step, is_cleared, best_cpm, best_accuracy, hearts')
      .eq('user_id', user.id)
      .eq('track_id', trackId)
      .eq('level_number', levelNum)
      .maybeSingle();

    const mergedStep = Math.max(nextUnlockedStep, existing?.unlocked_step || 0);
    const mergedCleared = Boolean(existing?.is_cleared) || mergedStep >= totalSteps;
    const incomingCpm = Math.min(3000, Math.max(0, Math.round(input.cpm || 0)));
    const mergedCpm = Math.max(incomingCpm, existing?.best_cpm || 0);
    const incomingAcc =
      typeof input.accuracy === 'number'
        ? Math.min(100, Math.max(0, Number(input.accuracy.toFixed(2))))
        : null;
    const mergedAccuracy =
      incomingAcc !== null
        ? existing?.best_cpm && incomingCpm < existing.best_cpm
          ? Math.max(incomingAcc, Number(existing.best_accuracy ?? 100))
          : incomingAcc
        : Number(existing?.best_accuracy ?? 100);
    const mergedHearts =
      typeof input.hearts === 'number'
        ? Math.min(5, Math.max(0, input.hearts))
        : existing?.hearts ?? 5;

    await supabase.from('user_level_progress').upsert(
      {
        user_id: user.id,
        track_id: trackId,
        level_number: levelNum,
        unlocked_step: mergedStep,
        total_steps: totalSteps,
        is_cleared: mergedCleared,
        hearts: mergedHearts,
        best_cpm: mergedCpm,
        best_accuracy: mergedAccuracy,
      },
      { onConflict: 'user_id,track_id,level_number' }
    );
  } catch {
    // Non-fatal background sync
  }
}

export async function fetchSolvedProblemIds(): Promise<number[]> {
  if (!isSupabaseConfigured()) return [];
  try {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return [];

    const { data, error } = await supabase
      .from('user_problem_solves')
      .select('problem_id')
      .eq('user_id', user.id);

    if (error || !data) return [];
    return data.map((r: { problem_id: number }) => r.problem_id);
  } catch {
    return [];
  }
}

export async function recordProblemSolve(
  problemId: number,
  language = 'python'
): Promise<void> {
  if (!isSupabaseConfigured()) return;
  try {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;

    await supabase.from('user_problem_solves').upsert(
      {
        user_id: user.id,
        problem_id: problemId,
        language,
      },
      { onConflict: 'user_id,problem_id' }
    );
  } catch {
    // Non-fatal
  }
}
