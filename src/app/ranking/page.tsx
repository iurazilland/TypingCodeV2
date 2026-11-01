'use client';

import React, { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { BookOpen, Flame, Sparkles, Zap } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { useAuth } from '@/lib/AuthContext';
import { createClient } from '@/lib/supabase/client';
import { isSupabaseConfigured } from '@/lib/supabase/env';
import type { UserProfile } from '@/lib/supabase/types';
import { normalizeProfileRow } from '@/lib/progressSync';
import { getRepresentativeBadge } from '@/lib/badges';
import UserAvatar from '@/components/UserAvatar';

function getLangColor(lang: string): string {
  const lower = lang.toLowerCase();
  if (lower.includes('python')) return '#2563eb';
  if (lower.includes('web') || lower.includes('js')) return '#ea580c';
  if (lower.includes('c')) return '#0891b2';
  if (lower.includes('java')) return '#dc2626';
  if (lower.includes('rust')) return '#d97706';
  if (lower.includes('go')) return '#059669';
  if (lower.includes('sql')) return '#059669';
  return '#0284c7';
}

function RankingPageContent() {
  const searchParams = useSearchParams();
  const { language } = useLanguage();
  const { user } = useAuth();
  const isKo = language === 'ko';

  const initialTab = searchParams.get('tab') === 'speed' ? 'speed' : 'learning';
  const [activeTab, setActiveTab] = useState<'learning' | 'speed'>(initialTab);
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!isSupabaseConfigured()) {
      setIsLoading(false);
      return;
    }

    let mounted = true;
    const fetchProfiles = async () => {
      setIsLoading(true);
      try {
        const supabase = createClient();
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .limit(100);

        if (!mounted) return;
        if (!error && data) {
          const normalized = (data as Array<Record<string, unknown>>).map((r) =>
            normalizeProfileRow(r)
          );
          setProfiles(normalized);
        }
      } catch {
        // Non-fatal
      } finally {
        if (mounted) setIsLoading(false);
      }
    };

    void fetchProfiles();
    return () => {
      mounted = false;
    };
  }, []);

  const sortedUsers = [...profiles].sort((a, b) => {
    if (activeTab === 'learning') {
      if (b.activity_score !== a.activity_score) {
        return b.activity_score - a.activity_score;
      }
      if (b.cleared_levels_count !== a.cleared_levels_count) {
        return b.cleared_levels_count - a.cleared_levels_count;
      }
      if (b.longest_streak !== a.longest_streak) {
        return b.longest_streak - a.longest_streak;
      }
      return b.solved_problems_count - a.solved_problems_count;
    }

    if (b.best_typing_cpm !== a.best_typing_cpm) {
      return b.best_typing_cpm - a.best_typing_cpm;
    }
    return b.best_typing_accuracy - a.best_typing_accuracy;
  });

  const displayList =
    activeTab === 'speed'
      ? sortedUsers.filter((u) => u.best_typing_cpm > 0).length > 0
        ? sortedUsers.filter((u) => u.best_typing_cpm > 0)
        : sortedUsers
      : sortedUsers;

  const firstPlace = displayList[0] || null;
  const secondPlace = displayList[1] || null;
  const thirdPlace = displayList[2] || null;

  return (
    <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '28px 24px 90px', color: '#0f172a' }}>
      {/* Minimal Single-Row Header: Title + Mode Switcher + CTA */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '14px',
          marginBottom: '26px',
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

      {/* Top 3 Podium */}
      {displayList.length > 0 && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
            marginBottom: '30px',
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
              return (
                <div
                  key={u.id}
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
                        {u.best_typing_cpm}{' '}
                        <span style={{ fontSize: '0.82rem', color: '#64748b' }}>CPM</span>
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#475569', marginTop: '4px', fontWeight: 600 }}>
                        {`${Number(u.best_typing_accuracy || 0).toFixed(1)}% · ${u.primary_language}`}
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
              <div style={{ padding: '36px', textAlign: 'center', color: '#64748b', fontWeight: 600 }}>
                {isKo ? '불러오는 중...' : 'Loading...'}
              </div>
            ) : (
              displayList.map((entry, idx) => {
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

            {displayList.map((entry, idx) => {
              const rank = idx + 1;
              const isMe = Boolean(user && entry.id === user.id);
              const badge = getRepresentativeBadge(entry, isKo);
              const langColor = getLangColor(entry.primary_language || 'Python');

              return (
                <div
                  key={entry.id}
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
                      {entry.primary_language || 'Python'}
                    </span>
                  </div>

                  <div style={{ textAlign: 'right', fontWeight: 900, color: '#7c3aed', fontFamily: 'var(--font-mono)' }}>
                    {entry.best_typing_cpm} CPM
                  </div>

                  <div style={{ textAlign: 'right', fontWeight: 800, color: '#059669' }}>
                    {Number(entry.best_typing_accuracy || 0).toFixed(1)}%
                  </div>
                </div>
              );
            })}
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
