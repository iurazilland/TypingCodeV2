'use client';

import React, { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { BookOpen, Flame, Sparkles, Trophy, Zap } from 'lucide-react';
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
    <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '40px 24px 100px', color: '#0f172a' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 18px',
            borderRadius: '24px',
            background: '#ffffff',
            border: '1.5px solid #cbd5e1',
            color: '#d97706',
            fontSize: '0.84rem',
            fontWeight: 800,
            marginBottom: '16px',
            letterSpacing: '0.04em',
            boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
          }}
        >
          <Trophy size={15} />
          <span>HALL OF FAME & LEADERBOARD</span>
        </div>
        <h1 style={{ fontSize: 'clamp(1.9rem, 3.6vw, 2.45rem)', fontWeight: 900, color: '#0f172a', marginBottom: '12px', letterSpacing: '-0.02em' }}>
          {activeTab === 'learning'
            ? isKo
              ? '꾸준함이 빛나는 코딩 학습 리더보드'
              : 'Learning, Streak & Problem Leaderboard'
            : isKo
            ? '코드타자 명예의 전당'
            : 'Code Typing CPM Leaderboard'}
        </h1>
        <p style={{ color: '#475569', fontSize: '1.02rem', maxWidth: '680px', margin: '0 auto', lineHeight: 1.6, fontWeight: 500 }}>
          {activeTab === 'learning'
            ? isKo
              ? '어디까지 학습을 진행했는지(완료 레벨), 꾸준히 출석했는지(연속·누적 출석), 문제를 얼마나 해결했는지를 종합해 순위를 산정합니다.'
              : 'Ranked by curriculum levels cleared, daily attendance streaks, and coding problems solved.'
            : isKo
            ? '코드타자 모드에서 측정된 순수 장문 코드 타이핑 최고 타수(CPM)와 정확도 순위입니다.'
            : 'Top pure code typing speed (CPM) and accuracy recorded in Code Typing mode.'}
        </p>
      </div>

      {/* Mode Switcher Tabs + CTA */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '14px',
          marginBottom: '32px',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            gap: '6px',
            padding: '5px',
            borderRadius: '14px',
            background: '#ffffff',
            border: '1.5px solid #cbd5e1',
            boxShadow: '0 2px 10px rgba(15, 23, 42, 0.05)',
          }}
        >
          <button
            type="button"
            onClick={() => setActiveTab('learning')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              padding: '10px 18px',
              borderRadius: '10px',
              border: 'none',
              background:
                activeTab === 'learning' ? 'rgba(8, 145, 178, 0.14)' : 'transparent',
              color: activeTab === 'learning' ? '#0891b2' : '#475569',
              fontWeight: 800,
              fontSize: '0.88rem',
              cursor: 'pointer',
            }}
          >
            <BookOpen size={15} />
            <span>{isKo ? '종합 학습 · 출석 · 문제풀이 랭킹' : 'Learning & Streak'}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('speed')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              padding: '10px 18px',
              borderRadius: '10px',
              border: 'none',
              background:
                activeTab === 'speed' ? 'rgba(124, 58, 237, 0.12)' : 'transparent',
              color: activeTab === 'speed' ? '#7c3aed' : '#475569',
              fontWeight: 800,
              fontSize: '0.88rem',
              cursor: 'pointer',
            }}
          >
            <Zap size={15} />
            <span>{isKo ? '코드타자 타수 랭킹' : 'Code Typing CPM'}</span>
          </button>
        </div>

        <Link
          href={activeTab === 'learning' ? '/languages' : '/code-typing'}
          className="tactile-btn tactile-btn-primary"
          style={{ padding: '10px 18px', fontSize: '0.88rem', textDecoration: 'none' }}
        >
          <Sparkles size={15} />
          <span>
            {activeTab === 'learning'
              ? isKo
                ? '학습 이어가고 점수 올리기'
                : 'Continue Learning'
              : isKo
              ? '코드타자 도전하기'
              : 'Play Code Typing'}
          </span>
        </Link>
      </div>

      {/* Top 3 Podium */}
      {displayList.length > 0 && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '22px',
            marginBottom: '40px',
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
                    borderRadius: '24px',
                    padding: podium.rank === 1 ? '32px 24px' : '28px 22px',
                    textAlign: 'center',
                    boxShadow: '0 8px 26px -4px rgba(15, 23, 42, 0.08)',
                    order: podium.order,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ fontSize: '2.1rem', marginBottom: '10px' }}>{podium.medal}</div>
                  <UserAvatar
                    avatarUrl={u.avatar_url}
                    avatarPreset={u.avatar_preset}
                    size={podium.rank === 1 ? 66 : 58}
                    borderColor={podium.border}
                    alt={u.display_name}
                  />
                  <h3 style={{ fontSize: '1.22rem', fontWeight: 800, margin: '12px 0 4px', color: '#0f172a' }}>
                    {u.display_name}
                  </h3>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: repBadge.color, marginBottom: '14px' }}>
                    {repBadge.label}
                  </div>

                  {activeTab === 'learning' ? (
                    <>
                      <div style={{ fontSize: '1.9rem', fontWeight: 900, color: podium.accent }}>
                        {u.activity_score.toLocaleString()}{' '}
                        <span style={{ fontSize: '0.85rem', color: '#64748b' }}>PT</span>
                      </div>
                      <div style={{ fontSize: '0.82rem', color: '#475569', marginTop: '6px', fontWeight: 600 }}>
                        {isKo
                          ? `${u.cleared_levels_count}레벨 완료 · 🔥 ${u.current_streak}일 연속 · ${u.solved_problems_count}문제`
                          : `${u.cleared_levels_count} lvls · 🔥 ${u.current_streak}d · ${u.solved_problems_count} probs`}
                      </div>
                    </>
                  ) : (
                    <>
                      <div style={{ fontSize: '1.9rem', fontWeight: 900, color: podium.accent }}>
                        {u.best_typing_cpm}{' '}
                        <span style={{ fontSize: '0.85rem', color: '#64748b' }}>CPM</span>
                      </div>
                      <div style={{ fontSize: '0.82rem', color: '#475569', marginTop: '6px', fontWeight: 600 }}>
                        {isKo
                          ? `정확도 ${Number(u.best_typing_accuracy || 0).toFixed(1)}% · ${u.primary_language}`
                          : `Acc ${Number(u.best_typing_accuracy || 0).toFixed(1)}% · ${u.primary_language}`}
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
          <div style={{ minWidth: '720px' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '70px 2.2fr 1fr 1.2fr 1fr 1.1fr',
                padding: '15px 24px',
                background: '#f8fafc',
                borderBottom: '1px solid #e2e8f0',
                fontSize: '0.82rem',
                fontWeight: 800,
                color: '#475569',
              }}
            >
              <div>{isKo ? '순위' : 'Rank'}</div>
              <div>{isKo ? '코더 (프로필 & 대표 뱃지)' : 'Coder'}</div>
              <div style={{ textAlign: 'right' }}>{isKo ? '완료 레벨' : 'Cleared'}</div>
              <div style={{ textAlign: 'right' }}>{isKo ? '출석 (연속/누적)' : 'Attendance'}</div>
              <div style={{ textAlign: 'right' }}>{isKo ? '문제풀이' : 'Problems'}</div>
              <div style={{ textAlign: 'right' }}>{isKo ? '종합 점수' : 'Total Score'}</div>
            </div>

            {isLoading ? (
              <div style={{ padding: '36px', textAlign: 'center', color: '#64748b', fontWeight: 600 }}>
                {isKo ? '리더보드 데이터를 불러오는 중...' : 'Loading leaderboard...'}
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
                      gridTemplateColumns: '70px 2.2fr 1fr 1.2fr 1fr 1.1fr',
                      padding: '14px 24px',
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
                        size={38}
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
                        <div style={{ fontSize: '0.75rem', color: badge.color, fontWeight: 800 }}>
                          {badge.label}
                        </div>
                      </div>
                    </div>

                    <div style={{ textAlign: 'right', fontWeight: 800, color: '#334155' }}>
                      {entry.cleared_levels_count} {isKo ? '레벨' : 'lvls'}
                    </div>

                    <div
                      style={{
                        textAlign: 'right',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        gap: '5px',
                        color: entry.current_streak > 0 ? '#ea580c' : '#64748b',
                        fontWeight: 700,
                      }}
                    >
                      <Flame size={14} />
                      <span>
                        {entry.current_streak}
                        {isKo ? '일' : 'd'}{' '}
                        <span style={{ color: '#64748b', fontSize: '0.78rem', fontWeight: 600 }}>
                          ({isKo ? `누적 ${entry.total_attendance_days}일` : `${entry.total_attendance_days}d`})
                        </span>
                      </span>
                    </div>

                    <div style={{ textAlign: 'right', fontWeight: 800, color: '#059669' }}>
                      {entry.solved_problems_count} {isKo ? '문제' : 'solved'}
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
          <div style={{ minWidth: '660px' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '70px 2.2fr 1.1fr 1.1fr 1.1fr',
                padding: '15px 24px',
                background: '#f8fafc',
                borderBottom: '1px solid #e2e8f0',
                fontSize: '0.82rem',
                fontWeight: 800,
                color: '#475569',
              }}
            >
              <div>{isKo ? '순위' : 'Rank'}</div>
              <div>{isKo ? '코더 (프로필)' : 'Coder'}</div>
              <div>{isKo ? '주력 언어' : 'Primary Language'}</div>
              <div style={{ textAlign: 'right' }}>{isKo ? '최고 타수 (CPM)' : 'Best Speed'}</div>
              <div style={{ textAlign: 'right' }}>{isKo ? '최고 정확도' : 'Accuracy'}</div>
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
                    padding: '14px 24px',
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
                      size={38}
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
                      <div style={{ fontSize: '0.75rem', color: badge.color, fontWeight: 800 }}>
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
