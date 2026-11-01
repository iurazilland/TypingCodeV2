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
  if (lower.includes('python')) return '#3b82f6';
  if (lower.includes('web') || lower.includes('js')) return '#f97316';
  if (lower.includes('c')) return '#06b6d4';
  if (lower.includes('java')) return '#ef4444';
  if (lower.includes('rust')) return '#f59e0b';
  if (lower.includes('go')) return '#10b981';
  if (lower.includes('sql')) return '#34d399';
  return '#38bdf8';
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
    <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '40px 24px 100px', color: '#f8fafc' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 18px',
            borderRadius: '20px',
            background: 'rgba(245, 158, 11, 0.15)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            color: '#f59e0b',
            fontSize: '0.84rem',
            fontWeight: 800,
            marginBottom: '14px',
          }}
        >
          <Trophy size={15} />
          <span>HALL OF FAME & LEADERBOARD</span>
        </div>
        <h1 style={{ fontSize: '2.35rem', fontWeight: 900, marginBottom: '10px' }}>
          {activeTab === 'learning'
            ? isKo
              ? '꾸준함이 빛나는 코딩 학습 리더보드'
              : 'Learning, Streak & Problem Leaderboard'
            : isKo
            ? '스피드 코딩 타자 명예의 전당'
            : 'Speed Coding CPM Leaderboard'}
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1rem', maxWidth: '680px', margin: '0 auto' }}>
          {activeTab === 'learning'
            ? isKo
              ? '어디까지 학습을 진행했는지(완료 레벨), 꾸준히 출석했는지(연속·누적 출석), 문제를 얼마나 해결했는지를 종합해 순위를 산정합니다.'
              : 'Ranked by curriculum levels cleared, daily attendance streaks, and coding problems solved.'
            : isKo
            ? '스피드 코딩 모드에서 측정된 순수 장문 코드 타이핑 최고 타수(CPM)와 정확도 순위입니다.'
            : 'Top pure code typing speed (CPM) and accuracy recorded in Speed Coding mode.'}
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
            background: 'rgba(15, 23, 42, 0.85)',
            border: '1px solid rgba(148, 163, 184, 0.18)',
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
                activeTab === 'learning' ? 'rgba(56, 189, 248, 0.2)' : 'transparent',
              color: activeTab === 'learning' ? '#38bdf8' : '#94a3b8',
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
                activeTab === 'speed' ? 'rgba(167, 139, 250, 0.22)' : 'transparent',
              color: activeTab === 'speed' ? '#c4b5fd' : '#94a3b8',
              fontWeight: 800,
              fontSize: '0.88rem',
              cursor: 'pointer',
            }}
          >
            <Zap size={15} />
            <span>{isKo ? '스피드 코딩 타수 랭킹' : 'Speed Coding CPM'}</span>
          </button>
        </div>

        <Link
          href={activeTab === 'learning' ? '/languages' : '/speed-coding'}
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
              ? '스피드 코딩 도전하기'
              : 'Play Speed Coding'}
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
            { entry: secondPlace, medal: '🥈', rank: 2, border: 'rgba(56, 189, 248, 0.4)', accent: '#38bdf8', order: 1 },
            { entry: firstPlace, medal: '👑', rank: 1, border: 'rgba(245, 158, 11, 0.65)', accent: '#f59e0b', order: 0 },
            { entry: thirdPlace, medal: '🥉', rank: 3, border: 'rgba(249, 115, 22, 0.45)', accent: '#fb923c', order: 2 },
          ]
            .filter((p) => p.entry !== null)
            .map((podium) => {
              const u = podium.entry!;
              const repBadge = getRepresentativeBadge(u, isKo);
              return (
                <div
                  key={u.id}
                  style={{
                    background: podium.rank === 1 ? '#15223f' : '#131e33',
                    border: `2px solid ${podium.border}`,
                    borderRadius: '24px',
                    padding: podium.rank === 1 ? '32px 24px' : '28px 22px',
                    textAlign: 'center',
                    boxShadow: '0 14px 36px rgba(0, 0, 0, 0.35)',
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
                    borderColor={podium.accent}
                    alt={u.display_name}
                  />
                  <h3 style={{ fontSize: '1.22rem', fontWeight: 800, margin: '12px 0 4px', color: '#ffffff' }}>
                    {u.display_name}
                  </h3>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: repBadge.color, marginBottom: '14px' }}>
                    {repBadge.label}
                  </div>

                  {activeTab === 'learning' ? (
                    <>
                      <div style={{ fontSize: '1.9rem', fontWeight: 900, color: podium.accent }}>
                        {u.activity_score.toLocaleString()}{' '}
                        <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>PT</span>
                      </div>
                      <div style={{ fontSize: '0.82rem', color: '#cbd5e1', marginTop: '6px' }}>
                        {isKo
                          ? `${u.cleared_levels_count}레벨 완료 · 🔥 ${u.current_streak}일 연속 · ${u.solved_problems_count}문제`
                          : `${u.cleared_levels_count} lvls · 🔥 ${u.current_streak}d · ${u.solved_problems_count} probs`}
                      </div>
                    </>
                  ) : (
                    <>
                      <div style={{ fontSize: '1.9rem', fontWeight: 900, color: podium.accent }}>
                        {u.best_typing_cpm}{' '}
                        <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>CPM</span>
                      </div>
                      <div style={{ fontSize: '0.82rem', color: '#cbd5e1', marginTop: '6px' }}>
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
          background: 'rgba(15, 23, 42, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          overflowX: 'auto',
        }}
      >
        {activeTab === 'learning' ? (
          <div style={{ minWidth: '720px' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '70px 2.2fr 1fr 1.2fr 1fr 1.1fr',
                padding: '15px 24px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                fontSize: '0.82rem',
                fontWeight: 700,
                color: '#94a3b8',
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
              <div style={{ padding: '36px', textAlign: 'center', color: '#94a3b8' }}>
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
                      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                      alignItems: 'center',
                      fontSize: '0.9rem',
                      background: isMe ? 'rgba(56, 189, 248, 0.09)' : 'transparent',
                    }}
                  >
                    <div style={{ fontWeight: 900, color: rank <= 3 ? '#f59e0b' : '#64748b' }}>
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
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 800 }}>
                          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {entry.display_name}
                          </span>
                          {isMe && (
                            <span
                              style={{
                                fontSize: '0.66rem',
                                padding: '1px 6px',
                                borderRadius: '6px',
                                background: 'rgba(56, 189, 248, 0.25)',
                                color: '#38bdf8',
                                fontWeight: 800,
                              }}
                            >
                              ME
                            </span>
                          )}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: badge.color, fontWeight: 700 }}>
                          {badge.label}
                        </div>
                      </div>
                    </div>

                    <div style={{ textAlign: 'right', fontWeight: 800, color: '#e2e8f0' }}>
                      {entry.cleared_levels_count} {isKo ? '레벨' : 'lvls'}
                    </div>

                    <div
                      style={{
                        textAlign: 'right',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        gap: '5px',
                        color: entry.current_streak > 0 ? '#fb923c' : '#94a3b8',
                        fontWeight: 700,
                      }}
                    >
                      <Flame size={14} />
                      <span>
                        {entry.current_streak}
                        {isKo ? '일' : 'd'}{' '}
                        <span style={{ color: '#64748b', fontSize: '0.78rem' }}>
                          ({isKo ? `누적 ${entry.total_attendance_days}일` : `${entry.total_attendance_days}d`})
                        </span>
                      </span>
                    </div>

                    <div style={{ textAlign: 'right', fontWeight: 700, color: '#34d399' }}>
                      {entry.solved_problems_count} {isKo ? '문제' : 'solved'}
                    </div>

                    <div style={{ textAlign: 'right', fontWeight: 900, color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>
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
                background: 'rgba(255, 255, 255, 0.03)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                fontSize: '0.82rem',
                fontWeight: 700,
                color: '#94a3b8',
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
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                    alignItems: 'center',
                    fontSize: '0.9rem',
                    background: isMe ? 'rgba(167, 139, 250, 0.1)' : 'transparent',
                  }}
                >
                  <div style={{ fontWeight: 900, color: rank <= 3 ? '#f59e0b' : '#64748b' }}>
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
                      <div style={{ fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span>{entry.display_name}</span>
                        {isMe && (
                          <span
                            style={{
                              fontSize: '0.66rem',
                              padding: '1px 6px',
                              borderRadius: '6px',
                              background: 'rgba(167, 139, 250, 0.25)',
                              color: '#c4b5fd',
                              fontWeight: 800,
                            }}
                          >
                            ME
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: badge.color, fontWeight: 700 }}>
                        {badge.label}
                      </div>
                    </div>
                  </div>

                  <div>
                    <span
                      style={{
                        padding: '3px 10px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: `1px solid ${langColor}45`,
                        color: langColor,
                        fontSize: '0.78rem',
                        fontWeight: 700,
                      }}
                    >
                      {entry.primary_language || 'Python'}
                    </span>
                  </div>

                  <div style={{ textAlign: 'right', fontWeight: 900, color: '#c4b5fd', fontFamily: 'var(--font-mono)' }}>
                    {entry.best_typing_cpm} CPM
                  </div>

                  <div style={{ textAlign: 'right', fontWeight: 700, color: '#34d399' }}>
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
