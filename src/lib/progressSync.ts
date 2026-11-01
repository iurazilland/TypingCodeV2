import type { User } from '@supabase/supabase-js';
import { createClient } from '@/lib/supabase/client';
import { isSupabaseConfigured } from '@/lib/supabase/env';
import type {
  SectionDifficultyRating,
  UserClearedLevelRow,
  UserProfile,
  UserSpeedRecordRow,
} from '@/lib/supabase/types';

export const PROGRESS_SYNCED_EVENT = 'typingcode-progress-synced';

function dispatchProgressSynced() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(PROGRESS_SYNCED_EVENT));
  }
}

export function normalizeTrackKey(rawLang: string): string {
  const clean = rawLang.trim().toLowerCase();
  if (clean === 'python' || clean === 'python_basic') return 'py-basic';
  if (clean === 'c') return 'c-basic';
  if (clean === 'web') return 'web-html';
  return clean;
}

function getTodayKstDateString(): string {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(new Date());
  const y = parts.find((p) => p.type === 'year')?.value || '2026';
  const m = parts.find((p) => p.type === 'month')?.value || '01';
  const d = parts.find((p) => p.type === 'day')?.value || '01';
  return `${y}-${m}-${d}`;
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

export function normalizeProfileRow(
  raw: Record<string, unknown>,
  fallbackUser?: User
): UserProfile {
  const cleared = Number(raw.cleared_levels_count ?? 0) || 0;
  const solved = Number(raw.solved_problems_count ?? 0) || 0;
  const totalDays = Number(raw.total_attendance_days ?? 0) || 0;
  const longestStreak = Number(raw.longest_streak ?? 0) || 0;
  const computedScore =
    Number(raw.activity_score ?? 0) ||
    cleared * 100 + solved * 150 + totalDays * 30 + longestStreak * 50;

  return {
    id: String(raw.id || fallbackUser?.id || ''),
    username: typeof raw.username === 'string' ? raw.username : null,
    display_name:
      typeof raw.display_name === 'string' && raw.display_name.trim()
        ? raw.display_name
        : fallbackUser
        ? deriveDisplayName(fallbackUser)
        : 'Coder',
    avatar_preset:
      typeof raw.avatar_preset === 'string' && raw.avatar_preset.trim()
        ? raw.avatar_preset
        : 'fox',
    avatar_url: typeof raw.avatar_url === 'string' ? raw.avatar_url : null,
    primary_language:
      typeof raw.primary_language === 'string' && raw.primary_language.trim()
        ? raw.primary_language
        : 'Python',
    cleared_levels_count: cleared,
    solved_problems_count: solved,
    current_streak: Number(raw.current_streak ?? 0) || 0,
    longest_streak: longestStreak,
    total_attendance_days: totalDays,
    last_attended_date:
      typeof raw.last_attended_date === 'string' ? raw.last_attended_date : null,
    activity_score: computedScore,
    best_typing_cpm: Number(raw.best_typing_cpm ?? raw.best_cpm ?? 0) || 0,
    best_typing_accuracy: Number(raw.best_typing_accuracy ?? raw.avg_accuracy ?? 0) || 0,
    created_at:
      typeof raw.created_at === 'string'
        ? raw.created_at
        : fallbackUser?.created_at || new Date().toISOString(),
    updated_at:
      typeof raw.updated_at === 'string' ? raw.updated_at : new Date().toISOString(),
  };
}

export function buildFallbackProfile(user: User): UserProfile {
  const meta = user.user_metadata || {};
  return normalizeProfileRow(
    {
      id: user.id,
      username: typeof meta.login_id === 'string' ? meta.login_id : null,
      display_name: deriveDisplayName(user),
      avatar_preset: typeof meta.avatar_preset === 'string' ? meta.avatar_preset : 'fox',
      avatar_url: typeof meta.avatar_url === 'string' ? meta.avatar_url : null,
    },
    user
  );
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
    return normalizeProfileRow(data as Record<string, unknown>, user);
  }

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
    return normalizeProfileRow(inserted as Record<string, unknown>, user);
  }

  return fallback;
}

/**
 * Records today's attendance (KST) once per day for the signed-in user.
 */
export async function recordDailyAttendance(userId: string): Promise<void> {
  if (typeof window === 'undefined' || !isSupabaseConfigured()) return;

  const todayKst = getTodayKstDateString();
  const cacheKey = `attendance_checked_${userId}_${todayKst}`;
  if (localStorage.getItem(cacheKey) === '1') return;

  try {
    const supabase = createClient();
    const { error } = await supabase.from('user_attendance').upsert(
      {
        user_id: userId,
        attended_date: todayKst,
      },
      { onConflict: 'user_id,attended_date', ignoreDuplicates: true }
    );

    if (!error) {
      localStorage.setItem(cacheKey, '1');
    }
  } catch {
    // Non-fatal if migration SQL is not applied yet
  }
}

export function getClearedLevelsLocal(rawLang: string): number[] {
  if (typeof window === 'undefined') return [];
  const trackId = normalizeTrackKey(rawLang);
  try {
    const raw = localStorage.getItem(`cleared_levels_${trackId}`);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .map((n) => Number(n))
      .filter((n) => Number.isInteger(n) && n >= 1)
      .sort((a, b) => a - b);
  } catch {
    return [];
  }
}

function setClearedLevelsLocal(trackId: string, levels: Iterable<number>): void {
  if (typeof window === 'undefined') return;
  const uniqueSorted = Array.from(new Set(levels))
    .filter((n) => Number.isInteger(n) && n >= 1)
    .sort((a, b) => a - b);
  localStorage.setItem(`cleared_levels_${trackId}`, JSON.stringify(uniqueSorted));
}

export function isLevelClearedLocal(rawLang: string, levelNum: number): boolean {
  return getClearedLevelsLocal(rawLang).includes(levelNum);
}

function purgeLegacyStepKeys(): void {
  if (typeof window === 'undefined') return;
  const keysToRemove: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key) continue;
    if (
      key.startsWith('unlocked_step_') ||
      key.startsWith('hearts_') ||
      key.startsWith('unlocked_level_')
    ) {
      keysToRemove.push(key);
    }
  }
  keysToRemove.forEach((k) => localStorage.removeItem(k));
}

/**
 * Syncs `public.user_cleared_levels`, `public.section_feedbacks`, and today's attendance on login.
 */
export async function syncProgressOnLogin(user: User): Promise<void> {
  if (typeof window === 'undefined' || !isSupabaseConfigured()) return;

  try {
    purgeLegacyStepKeys();
    await ensureUserProfile(user);
    await recordDailyAttendance(user.id);

    const supabase = createClient();

    // 1) Sync cleared levels bidirectionally
    const { data: cloudRows, error } = await supabase
      .from('user_cleared_levels')
      .select('user_id, track_id, level_number, cleared_at')
      .eq('user_id', user.id);

    if (!error && cloudRows) {
      const byTrack = new Map<string, Set<number>>();

      for (const row of cloudRows as UserClearedLevelRow[]) {
        const tKey = normalizeTrackKey(row.track_id);
        if (!byTrack.has(tKey)) byTrack.set(tKey, new Set());
        byTrack.get(tKey)!.add(row.level_number);
      }

      const rowsToPush: Array<{
        user_id: string;
        track_id: string;
        level_number: number;
      }> = [];

      const prefix = 'cleared_levels_';
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!key || !key.startsWith(prefix)) continue;
        const trackId = normalizeTrackKey(key.slice(prefix.length));
        const localNums = getClearedLevelsLocal(trackId);
        const cloudSet = byTrack.get(trackId) || new Set<number>();

        for (const lvl of localNums) {
          if (!cloudSet.has(lvl)) {
            rowsToPush.push({
              user_id: user.id,
              track_id: trackId,
              level_number: lvl,
            });
            cloudSet.add(lvl);
          }
        }
        byTrack.set(trackId, cloudSet);
      }

      byTrack.forEach((lvlSet, trackId) => {
        setClearedLevelsLocal(trackId, lvlSet);
      });

      if (rowsToPush.length > 0) {
        await supabase
          .from('user_cleared_levels')
          .upsert(rowsToPush, { onConflict: 'user_id,track_id,level_number' });
      }
    }

    // 2) Cache which section surveys this user already submitted so we never re-prompt
    const { data: feedbackRows } = await supabase
      .from('section_feedbacks')
      .select('track_id, section_number')
      .eq('user_id', user.id);

    if (feedbackRows) {
      for (const fb of feedbackRows as Array<{ track_id: string; section_number: number }>) {
        const tKey = normalizeTrackKey(fb.track_id);
        localStorage.setItem(`section_feedback_${tKey}_${fb.section_number}`, '1');
      }
    }

    dispatchProgressSynced();
  } catch {
    // Non-fatal background sync
  }
}

/**
 * Records a completely cleared level (only called when all questions of a level are solved).
 */
export async function recordLevelCleared(
  rawLang: string,
  levelNum: number
): Promise<void> {
  const trackId = normalizeTrackKey(rawLang);
  if (levelNum < 1) return;

  if (typeof window !== 'undefined') {
    const existing = getClearedLevelsLocal(trackId);
    if (!existing.includes(levelNum)) {
      setClearedLevelsLocal(trackId, [...existing, levelNum]);
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

    await recordDailyAttendance(user.id);
    const { error } = await supabase.from('user_cleared_levels').upsert(
      {
        user_id: user.id,
        track_id: trackId,
        level_number: levelNum,
      },
      { onConflict: 'user_id,track_id,level_number' }
    );
    if (!error) {
      dispatchProgressSynced();
    }
  } catch {
    // Non-fatal
  }
}

export function hasSubmittedSectionFeedbackLocal(
  rawLang: string,
  sectionNumber: number
): boolean {
  if (typeof window === 'undefined') return false;
  const trackId = normalizeTrackKey(rawLang);
  return localStorage.getItem(`section_feedback_${trackId}_${sectionNumber}`) === '1';
}

export interface SubmitSectionFeedbackInput {
  rawLang: string;
  sectionNumber: number;
  rating: number;
  difficulty: SectionDifficultyRating;
  tags: string[];
  comment?: string;
}

export async function submitSectionFeedback(
  input: SubmitSectionFeedbackInput
): Promise<boolean> {
  const trackId = normalizeTrackKey(input.rawLang);
  if (typeof window !== 'undefined') {
    localStorage.setItem(`section_feedback_${trackId}_${input.sectionNumber}`, '1');
  }

  if (!isSupabaseConfigured()) return true;

  try {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return false;

    const cleanComment = input.comment?.trim()
      ? input.comment.trim().slice(0, 500)
      : null;

    const { error } = await supabase.from('section_feedbacks').upsert(
      {
        user_id: user.id,
        track_id: trackId,
        section_number: input.sectionNumber,
        rating: Math.min(5, Math.max(1, Math.round(input.rating))),
        difficulty: input.difficulty,
        tags: input.tags,
        comment: cleanComment,
      },
      { onConflict: 'user_id,track_id,section_number' }
    );

    return !error;
  } catch {
    return false;
  }
}

export async function fetchUserSpeedRecords(): Promise<
  Record<string, UserSpeedRecordRow>
> {
  if (!isSupabaseConfigured()) return {};
  try {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return {};

    const { data, error } = await supabase
      .from('user_speed_records')
      .select('*')
      .eq('user_id', user.id);

    if (error || !data) return {};
    const map: Record<string, UserSpeedRecordRow> = {};
    for (const row of data as UserSpeedRecordRow[]) {
      map[row.snippet_id] = row;
    }
    return map;
  } catch {
    return {};
  }
}

export async function saveSpeedCodingRecord(input: {
  snippetId: string;
  language: string;
  cpm: number;
  accuracy: number;
}): Promise<boolean> {
  if (!isSupabaseConfigured()) return false;
  try {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return false;

    await recordDailyAttendance(user.id);

    const safeCpm = Math.min(3000, Math.max(0, Math.round(input.cpm)));
    const safeAcc = Math.min(100, Math.max(0, Number(input.accuracy.toFixed(2))));

    const { data: existing } = await supabase
      .from('user_speed_records')
      .select('best_cpm, best_accuracy')
      .eq('user_id', user.id)
      .eq('snippet_id', input.snippetId)
      .maybeSingle();

    const prevCpm = Number(existing?.best_cpm ?? 0);
    const prevAcc = Number(existing?.best_accuracy ?? 0);

    const isNewBest =
      !existing ||
      safeCpm > prevCpm ||
      (safeCpm === prevCpm && safeAcc > prevAcc);

    if (!isNewBest) {
      return false;
    }

    const { error } = await supabase.from('user_speed_records').upsert(
      {
        user_id: user.id,
        snippet_id: input.snippetId,
        language: input.language,
        best_cpm: safeCpm,
        best_accuracy: safeAcc,
      },
      { onConflict: 'user_id,snippet_id' }
    );
    if (error) return false;
    dispatchProgressSynced();
    return true;
  } catch {
    return false;
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

    await recordDailyAttendance(user.id);
    const { error } = await supabase.from('user_problem_solves').upsert(
      {
        user_id: user.id,
        problem_id: problemId,
        language,
      },
      { onConflict: 'user_id,problem_id' }
    );
    if (!error) {
      dispatchProgressSynced();
    }
  } catch {
    // Non-fatal
  }
}
