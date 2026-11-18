'use client';

import React, { Suspense, useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { BookOpen, Flame, RefreshCw, Sparkles, Zap } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { useAuth } from '@/lib/AuthContext';
import { createClient } from '@/lib/supabase/client';
import { isSupabaseConfigured } from '@/lib/supabase/env';
import type { UserProfile } from '@/lib/supabase/types';
import {
  normalizeProfileRow,
  PROGRESS_SYNCED_EVENT,
} from '@/lib/progressSync';
import { getRepresentativeBadge } from '@/lib/badges';
import UserAvatar from '@/components/UserAvatar';
import type { SpeedCodingLanguage } from '@/data/speedCodingSnippets';

type SpeedLangFilter = 'all' | SpeedCodingLanguage;

const SPEED_FILTER_TABS: ReadonlyArray<{
  id: SpeedLangFilter;
  labelKo: string;
  labelEn: string;
}> = [
  { id: 'all', labelKo: '전체', labelEn: 'All' },
  { id: 'python', labelKo: 'Python', labelEn: 'Python' },
  { id: 'javascript', labelKo: 'JavaScript', labelEn: 'JavaScript' },
  { id: 'c', labelKo: 'C언어', labelEn: 'C' },
  { id: 'java', labelKo: 'Java', labelEn: 'Java' },
  { id: 'sql', labelKo: 'SQL', labelEn: 'SQL' },
];

function formatSpeedLangLabel(raw: string): string {
  const lower = raw.trim().toLowerCase();
  if (lower === 'python') return 'Python';
  if (lower === 'javascript' || lower === 'js' || lower.includes('web')) return 'JavaScript';
  if (lower === 'c' || lower === 'c언어') return 'C언어';
  if (lower === 'java') return 'Java';
  if (lower === 'sql') return 'SQL';
  return raw || 'Python';
}

function getLangColor(lang: string): string {
  const lower = lang.toLowerCase();
  if (lower.includes('python')) return '#2563eb';
  if (lower.includes('web') || lower.includes('js') || lower.includes('javascript')) return '#d97706';
  if (lower.includes('c')) return '#0891b2';
  if (lower.includes('java')) return '#dc2626';
  if (lower.includes('sql')) return '#059669';
  return '#0284c7';
}

interface SpeedLeaderEntry extends UserProfile {
  display_cpm: number;
  display_accuracy: number;
  display_language: string;
}

function RankingPageContent() {
  const searchParams = useSearchParams();
  const { language } = useLanguage();
  const { user, profile } = useAuth();
  const isKo = language === 'ko';

  const initialTab = searchParams.get('tab') === 'speed' ? 'speed' : 'learning';
  const [activeTab, setActiveTab] = useState<'learning' | 'speed'>(initialTab);
  const [speedLangFilter, setSpeedLangFilter] = useState<SpeedLangFilter>('all');

  const [learningLeaders, setLearningLeaders] = useState<UserProfile[]>([]);
  const [speedLeaders, setSpeedLeaders] = useState<SpeedLeaderEntry[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [dbError, setDbError] = useState<string | null>(null);

  const fetchLeaderboards = useCallback(
    async (langFilter: SpeedLangFilter, silent = false) => {
      if (!isSupabaseConfigured()) {
        setIsLoading(false);
        return;
      }

      if (silent) {
        setIsRefreshing(true);
      } else {
        setIsLoading(true);
      }
      setDbError(null);

      try {
        const supabase = createClient();

        const learningPromise = supabase
          .from('profiles')
          .select('*')
          .gt('activity_score', 0)
          .order('activity_score', { ascending: false })
          .order('cleared_levels_count', { ascending: false })
          .order('longest_streak', { ascending: false })
          .order('solved_problems_count', { ascending: false })
          .limit(100);

        const overallSpeedPromise = supabase
          .from('profiles')
          .select('*')
          .gt('best_typing_cpm', 0)
          .order('best_typing_cpm', { ascending: false })
          .order('best_typing_accuracy', { ascending: false })
          .limit(100);

        if (langFilter === 'all') {
          const [learningRes, speedRes] = await Promise.all([
            learningPromise,
            overallSpeedPromise,
          ]);
          if (learningRes.error) throw learningRes.error;
          if (speedRes.error) throw speedRes.error;

          setLearningLeaders(
            ((learningRes.data as Array<Record<string, unknown>>) || []).map(
              (r) => normalizeProfileRow(r)
            )
          );

          setSpeedLeaders(
            ((speedRes.data as Array<Record<string, unknown>>) || []).map((r) => {
              const p = normalizeProfileRow(r);
              return {
                ...p,
                display_cpm: p.best_typing_cpm,
                display_accuracy: p.best_typing_accuracy,
                display_language: formatSpeedLangLabel(
                  p.best_typing_language || p.primary_language
                ),
              };
            })
          );
        } else {
          // Per-language query via security_invoker view `speed_language_leaderboard` (with fallback if view not yet migrated)
          const [learningRes, langSpeedRes] = await Promise.all([
            learningPromise,
            supabase
              .from('speed_language_leaderboard')
              .select('*')
              .eq('language', langFilter)
              .order('best_cpm', { ascending: false })
              .order('best_accuracy', { ascending: false })
              .limit(100),
          ]);

          if (learningRes.error) throw learningRes.error;

          setLearningLeaders(
            ((learningRes.data as Array<Record<string, unknown>>) || []).map(
              (r) => normalizeProfileRow(r)
            )
          );

          if (!langSpeedRes.error && langSpeedRes.data) {
            setSpeedLeaders(
              (langSpeedRes.data as Array<Record<string, unknown>>).map((r) => {
                const p = normalizeProfileRow(r);
                return {
                  ...p,
                  display_cpm: Number(r.best_cpm ?? p.best_typing_cpm ?? 0) || 0,
                  display_accuracy:
                    Number(r.best_accuracy ?? p.best_typing_accuracy ?? 0) || 0,
                  display_language: formatSpeedLangLabel(
                    typeof r.language === 'string' ? r.language : langFilter
                  ),
                };
              })
            );
          } else {
            // Graceful fallback before V2.2 SQL migration is applied
            const fallbackRes = await overallSpeedPromise;
            if (fallbackRes.error) throw fallbackRes.error;
            const targetLabel = formatSpeedLangLabel(langFilter).toLowerCase();
            const filtered = (
              (fallbackRes.data as Array<Record<string, unknown>>) || []
            )
              .map((r) => {
                const p = normalizeProfileRow(r);
                const langLabel = formatSpeedLangLabel(
                  p.best_typing_language || p.primary_language
                );
                return {
                  ...p,
                  display_cpm: p.best_typing_cpm,
                  display_accuracy: p.best_typing_accuracy,
                  display_language: langLabel,
                };
              })
              .filter(
                (entry) => entry.display_language.toLowerCase() === targetLabel
              );
            setSpeedLeaders(filtered);
          }
        }
      } catch (err: unknown) {
        const msg =
          err instanceof Error
            ? err.message
            : '리더보드 데이터를 불러오지 못했습니다.';
        setDbError(msg);
      } finally {
        setIsLoading(false);
        setIsRefreshing(false);
      }
    },
    []
  );

  useEffect(() => {
    void fetchLeaderboards(speedLangFilter, false);
  }, [fetchLeaderboards, speedLangFilter]);

  useEffect(() => {
    if (typeof window === 'undefined' || !isSupabaseConfigured()) return;

    const handleProgressSync = () => {
      void fetchLeaderboards(speedLangFilter, true);
    };
    window.addEventListener(PROGRESS_SYNCED_EVENT, handleProgressSync);

    const supabase = createClient();
    const channel = supabase
      .channel('public-profiles-leaderboard')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'profiles' },
        () => {
          void fetchLeaderboards(speedLangFilter, true);
        }
      )
      .subscribe();

    return () => {
      window.removeEventListener(PROGRESS_SYNCED_EVENT, handleProgressSync);
      void supabase.removeChannel(channel);
    };
  }, [fetchLeaderboards, speedLangFilter]);

  const displayList: Array<UserProfile | SpeedLeaderEntry> =
    activeTab === 'learning' ? learningLeaders : speedLeaders;

  const myRankIndex = user
    ? displayList.findIndex((entry) => entry.id === user.id)
    : -1;

  const firstPlace = displayList[0] || null;
  const secondPlace = displayList[1] || null;
  const thirdPlace = displayList[2] || null;

  return (
    <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '28px 24px 90px', color: '#0f172a' }}>
      {/* Minimal Single-Row Header: Title + Mode Switcher + Refresh + CTA */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '14px',
          marginBottom: '20px',
        }}
      >
        <h1 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>
          {isKo ? '리더보드' : 'Leaderboard'}
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <div
            style={{
              display: 'inline-flex',
              gap: '4px',
              padding: '4px',
              borderRadius: '13px',
              background: '#ffffff',
              border: '1.5px solid #cbd5e1',
              boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
            }}
          >
            <button
              type="button"
              onClick={() => setActiveTab('learning')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 15px',
                borderRadius: '9px',
                border: 'none',
                background:
                  activeTab === 'learning' ? 'rgba(8, 145, 178, 0.14)' : 'transparent',
                color: activeTab === 'learning' ? '#0891b2' : '#475569',
                fontWeight: 800,
                fontSize: '0.86rem',
                cursor: 'pointer',
              }}
            >
              <BookOpen size={14} />
              <span>{isKo ? '학습 랭킹' : 'Learning'}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('speed')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 15px',
                borderRadius: '9px',
                border: 'none',
                background:
                  activeTab === 'speed' ? 'rgba(124, 58, 237, 0.12)' : 'transparent',
                color: activeTab === 'speed' ? '#7c3aed' : '#475569',
                fontWeight: 800,
                fontSize: '0.86rem',
                cursor: 'pointer',
              }}
            >
              <Zap size={14} />
              <span>{isKo ? '코드타자 랭킹' : 'Code Typing'}</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => void fetchLeaderboards(speedLangFilter, true)}
            disabled={isLoading || isRefreshing}
            title={isKo ? '새로고침' : 'Refresh'}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '11px',
              border: '1.5px solid #cbd5e1',
              background: '#ffffff',
              color: '#475569',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: isLoading || isRefreshing ? 'default' : 'pointer',
              opacity: isLoading || isRefreshing ? 0.6 : 1,
            }}
          >
            <RefreshCw size={15} />
          </button>

          <Link
            href={activeTab === 'learning' ? '/languages' : '/code-typing'}
            className="tactile-btn tactile-btn-primary"
            style={{ padding: '9px 16px', fontSize: '0.86rem', textDecoration: 'none' }}
          >
            <Sparkles size={14} />
            <span>
              {activeTab === 'learning'
                ? isKo
                  ? '학습하기'
                  : 'Learn'
                : isKo
                ? '코드타자'
                : 'Code Typing'}
            </span>
          </Link>
        </div>
      </div>

      {/* Per-Language Filter Strip (Speed Coding Tab Only) */}
      {activeTab === 'speed' && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            flexWrap: 'wrap',
            marginBottom: '18px',
          }}
        >
          {SPEED_FILTER_TABS.map((item) => {
            const active = speedLangFilter === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSpeedLangFilter(item.id)}
                style={{
                  padding: '6px 13px',
                  borderRadius: '10px',
                  border: active ? '1.5px solid #7c3aed' : '1.5px solid #cbd5e1',
                  background: active ? 'rgba(124, 58, 237, 0.12)' : '#ffffff',
                  color: active ? '#7c3aed' : '#475569',
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                }}
              >
                {isKo ? item.labelKo : item.labelEn}
              </button>
            );
          })}
        </div>
      )}

      {/* Signed-in User Summary Bar */}
      {user && profile && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            padding: '12px 20px',
            marginBottom: '22px',
            borderRadius: '16px',
            background: '#ffffff',
            border: '1.5px solid #cbd5e1',
            boxShadow: '0 2px 10px rgba(15, 23, 42, 0.04)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <UserAvatar
              avatarUrl={profile.avatar_url}
              avatarPreset={profile.avatar_preset}
              size={32}
              alt={profile.display_name}
            />
            <span style={{ fontWeight: 800, fontSize: '0.9rem', color: '#0f172a' }}>
              {profile.display_name}
            </span>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 800,
                padding: '2px 8px',
                borderRadius: '8px',
                background: 'rgba(8, 145, 178, 0.12)',
                color: '#0891b2',
              }}
            >
              {myRankIndex >= 0
                ? `#${myRankIndex + 1}`
                : isKo
                ? '순위 외'
                : 'Unranked'}
            </span>
          </div>

          <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#334155', fontFamily: 'var(--font-mono)' }}>
            {activeTab === 'learning'
              ? isKo
                ? `${profile.cleared_levels_count}레벨 · ${profile.current_streak}일 연속 · ${profile.solved_problems_count}문제 · ${profile.activity_score.toLocaleString()} PT`
                : `${profile.cleared_levels_count} lvls · ${profile.current_streak}d · ${profile.solved_problems_count} probs · ${profile.activity_score.toLocaleString()} PT`
              : myRankIndex >= 0 && 'display_cpm' in displayList[myRankIndex]
              ? `${(displayList[myRankIndex] as SpeedLeaderEntry).display_cpm} CPM · ${Number(
                  (displayList[myRankIndex] as SpeedLeaderEntry).display_accuracy || 0
                ).toFixed(1)}%`
              : profile.best_typing_cpm > 0 && speedLangFilter === 'all'
              ? `${profile.best_typing_cpm} CPM · ${Number(profile.best_typing_accuracy || 0).toFixed(1)}%`
              : isKo
              ? '해당 부문 기록 없음'
              : 'No record'}
          </div>
        </div>
      )}

      {/* Top 3 Podium */}
      {!isLoading && displayList.length > 0 && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
            marginBottom: '26px',
          }}
        >
          {[
            { entry: secondPlace, medal: '🥈', rank: 2, border: '#38bdf8', accent: '#0284c7', bg: '#ffffff', order: 1 },
            { entry: firstPlace, medal: '👑', rank: 1, border: '#f59e0b', accent: '#d97706', bg: '#fffdf5', order: 0 },
            { entry: thirdPlace, medal: '🥉', rank: 3, border: '#fb923c', accent: '#ea580c', bg: '#ffffff', order: 2 },
          ]
            .filter((p) => p.entry !== null)
            .map((podium) => {
              const u = podium.entry!;
              const repBadge = getRepresentativeBadge(u, isKo);
              const speedEntry = u as SpeedLeaderEntry;
              return (
                <div
                  key={`${u.id}-${speedLangFilter}`}
                  style={{
                    background: podium.bg,
                    border: `2px solid ${podium.border}`,
                    borderRadius: '22px',
                    padding: podium.rank === 1 ? '26px 22px' : '24px 20px',
                    textAlign: 'center',
                    boxShadow: '0 8px 26px -4px rgba(15, 23, 42, 0.08)',
                    order: podium.order,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ fontSize: '1.9rem', marginBottom: '8px' }}>{podium.medal}</div>
                  <UserAvatar
                    avatarUrl={u.avatar_url}
                    avatarPreset={u.avatar_preset}
                    size={podium.rank === 1 ? 62 : 56}
                    borderColor={podium.border}
                    alt={u.display_name}
                  />
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '10px 0 3px', color: '#0f172a' }}>
                    {u.display_name}
                  </h3>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, color: repBadge.color, marginBottom: '10px' }}>
                    {repBadge.label}
                  </div>

                  {activeTab === 'learning' ? (
                    <>
                      <div style={{ fontSize: '1.75rem', fontWeight: 900, color: podium.accent }}>
                        {u.activity_score.toLocaleString()}{' '}
                        <span style={{ fontSize: '0.82rem', color: '#64748b' }}>PT</span>
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#475569', marginTop: '4px', fontWeight: 600 }}>
                        {isKo
                          ? `${u.cleared_levels_count}레벨 · 🔥 ${u.current_streak}일 · ${u.solved_problems_count}문제`
                          : `${u.cleared_levels_count} lvls · 🔥 ${u.current_streak}d · ${u.solved_problems_count} probs`}
                      </div>
                    </>
                  ) : (
                    <>
                      <div style={{ fontSize: '1.75rem', fontWeight: 900, color: podium.accent }}>
                        {speedEntry.display_cpm}{' '}
                        <span style={{ fontSize: '0.82rem', color: '#64748b' }}>CPM</span>
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#475569', marginTop: '4px', fontWeight: 600 }}>
                        {`${Number(speedEntry.display_accuracy || 0).toFixed(1)}% · ${speedEntry.display_language}`}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
        </div>
      )}

      {/* Full Leaderboard Table */}
      <div
        style={{
          background: '#ffffff',
          border: '1.5px solid #cbd5e1',
          borderRadius: '20px',
          overflowX: 'auto',
          boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
        }}
      >
        {activeTab === 'learning' ? (
          <div style={{ minWidth: '680px' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '70px 2.2fr 1fr 1fr 1fr 1.1fr',
                padding: '14px 24px',
                background: '#f8fafc',
                borderBottom: '1px solid #e2e8f0',
                fontSize: '0.82rem',
                fontWeight: 800,
                color: '#475569',
              }}
            >
              <div>{isKo ? '순위' : 'Rank'}</div>
              <div>{isKo ? '사용자' : 'User'}</div>
              <div style={{ textAlign: 'right' }}>{isKo ? '완료 레벨' : 'Levels'}</div>
              <div style={{ textAlign: 'right' }}>{isKo ? '연속 출석' : 'Streak'}</div>
              <div style={{ textAlign: 'right' }}>{isKo ? '문제풀이' : 'Problems'}</div>
              <div style={{ textAlign: 'right' }}>{isKo ? '점수' : 'Score'}</div>
            </div>

            {isLoading ? (
              <div style={{ padding: '40px 24px', textAlign: 'center', color: '#64748b', fontWeight: 600 }}>
                {isKo ? '불러오는 중...' : 'Loading...'}
              </div>
            ) : dbError ? (
              <div style={{ padding: '40px 24px', textAlign: 'center', color: '#dc2626', fontWeight: 600 }}>
                {dbError}
              </div>
            ) : learningLeaders.length === 0 ? (
              <div style={{ padding: '44px 24px', textAlign: 'center', color: '#64748b', fontWeight: 600 }}>
                {isKo ? '등록된 학습 기록이 없습니다.' : 'No learning records yet.'}
              </div>
            ) : (
              learningLeaders.map((entry, idx) => {
                const rank = idx + 1;
                const isMe = Boolean(user && entry.id === user.id);
                const badge = getRepresentativeBadge(entry, isKo);

                return (
                  <div
                    key={entry.id}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '70px 2.2fr 1fr 1fr 1fr 1.1fr',
                      padding: '13px 24px',
                      borderBottom: '1px solid #f1f5f9',
                      alignItems: 'center',
                      fontSize: '0.9rem',
                      background: isMe ? 'rgba(8, 145, 178, 0.08)' : 'transparent',
                    }}
                  >
                    <div style={{ fontWeight: 900, color: rank <= 3 ? '#d97706' : '#64748b' }}>
                      #{rank}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
                      <UserAvatar
                        avatarUrl={entry.avatar_url}
                        avatarPreset={entry.avatar_preset}
                        size={36}
                        alt={entry.display_name}
                      />
                      <div style={{ minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 800, color: '#0f172a' }}>
                          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {entry.display_name}
                          </span>
                          {isMe && (
                            <span
                              style={{
                                fontSize: '0.66rem',
                                padding: '1px 6px',
                                borderRadius: '6px',
                                background: 'rgba(8, 145, 178, 0.16)',
                                color: '#0891b2',
                                fontWeight: 800,
                              }}
                            >
                              ME
                            </span>
                          )}
                        </div>
                        <div style={{ fontSize: '0.74rem', color: badge.color, fontWeight: 800 }}>
                          {badge.label}
                        </div>
                      </div>
                    </div>

                    <div style={{ textAlign: 'right', fontWeight: 800, color: '#334155' }}>
                      {entry.cleared_levels_count}
                    </div>

                    <div
                      style={{
                        textAlign: 'right',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        gap: '4px',
                        color: entry.current_streak > 0 ? '#ea580c' : '#64748b',
                        fontWeight: 700,
                      }}
                    >
                      <Flame size={14} />
                      <span>
                        {entry.current_streak}
                        {isKo ? '일' : 'd'}
                      </span>
                    </div>

                    <div style={{ textAlign: 'right', fontWeight: 800, color: '#059669' }}>
                      {entry.solved_problems_count}
                    </div>

                    <div style={{ textAlign: 'right', fontWeight: 900, color: '#0284c7', fontFamily: 'var(--font-mono)' }}>
                      {entry.activity_score.toLocaleString()} PT
                    </div>
                  </div>
                );
              })
            )}
          </div>
        ) : (
          <div style={{ minWidth: '640px' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '70px 2.2fr 1.1fr 1.1fr 1.1fr',
                padding: '14px 24px',
                background: '#f8fafc',
                borderBottom: '1px solid #e2e8f0',
                fontSize: '0.82rem',
                fontWeight: 800,
                color: '#475569',
              }}
            >
              <div>{isKo ? '순위' : 'Rank'}</div>
              <div>{isKo ? '사용자' : 'User'}</div>
              <div>{isKo ? '언어' : 'Language'}</div>
              <div style={{ textAlign: 'right' }}>{isKo ? '최고 타수' : 'Best CPM'}</div>
              <div style={{ textAlign: 'right' }}>{isKo ? '정확도' : 'Accuracy'}</div>
            </div>

            {isLoading ? (
              <div style={{ padding: '40px 24px', textAlign: 'center', color: '#64748b', fontWeight: 600 }}>
                {isKo ? '불러오는 중...' : 'Loading...'}
              </div>
            ) : dbError ? (
              <div style={{ padding: '40px 24px', textAlign: 'center', color: '#dc2626', fontWeight: 600 }}>
                {dbError}
              </div>
            ) : speedLeaders.length === 0 ? (
              <div style={{ padding: '44px 24px', textAlign: 'center', color: '#64748b', fontWeight: 600 }}>
                {isKo ? '등록된 코드타자 기록이 없습니다.' : 'No code typing records yet.'}
              </div>
            ) : (
              speedLeaders.map((entry, idx) => {
                const rank = idx + 1;
                const isMe = Boolean(user && entry.id === user.id);
                const badge = getRepresentativeBadge(entry, isKo);
                const langColor = getLangColor(entry.display_language);

                return (
                  <div
                    key={`${entry.id}-${entry.display_language}`}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '70px 2.2fr 1.1fr 1.1fr 1.1fr',
                      padding: '13px 24px',
                      borderBottom: '1px solid #f1f5f9',
                      alignItems: 'center',
                      fontSize: '0.9rem',
                      background: isMe ? 'rgba(124, 58, 237, 0.07)' : 'transparent',
                    }}
                  >
                    <div style={{ fontWeight: 900, color: rank <= 3 ? '#d97706' : '#64748b' }}>
                      #{rank}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <UserAvatar
                        avatarUrl={entry.avatar_url}
                        avatarPreset={entry.avatar_preset}
                        size={36}
                        alt={entry.display_name}
                      />
                      <div>
                        <div style={{ fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span>{entry.display_name}</span>
                          {isMe && (
                            <span
                              style={{
                                fontSize: '0.66rem',
                                padding: '1px 6px',
                                borderRadius: '6px',
                                background: 'rgba(124, 58, 237, 0.14)',
                                color: '#7c3aed',
                                fontWeight: 800,
                              }}
                            >
                              ME
                            </span>
                          )}
                        </div>
                        <div style={{ fontSize: '0.74rem', color: badge.color, fontWeight: 800 }}>
                          {badge.label}
                        </div>
                      </div>
                    </div>

                    <div>
                      <span
                        style={{
                          padding: '3px 10px',
                          borderRadius: '10px',
                          background: `${langColor}14`,
                          border: `1px solid ${langColor}40`,
                          color: langColor,
                          fontSize: '0.78rem',
                          fontWeight: 800,
                        }}
                      >
                        {entry.display_language}
                      </span>
                    </div>

                    <div style={{ textAlign: 'right', fontWeight: 900, color: '#7c3aed', fontFamily: 'var(--font-mono)' }}>
                      {entry.display_cpm} CPM
                    </div>

                    <div style={{ textAlign: 'right', fontWeight: 800, color: '#059669' }}>
                      {Number(entry.display_accuracy || 0).toFixed(1)}%
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function RankingPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '70vh' }} />}>
      <RankingPageContent />
    </Suspense>
  );
}
