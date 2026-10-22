'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Trophy, Medal, Flame, Star, Crown, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

interface LeaderboardUser {
  rank: number;
  name: string;
  avatar: string;
  badge: string;
  badgeColor: string;
  language: string;
  langColor: string;
  cpm: number;
  accuracy: number;
  completedQuests: number;
}

const MOCK_LEADERBOARD: LeaderboardUser[] = [
  {
    rank: 1,
    name: '파이썬마스터_은우',
    avatar: '🦊',
    badge: '👑 그랜드마스터',
    badgeColor: '#f59e0b',
    language: 'Python',
    langColor: '#3b82f6',
    cpm: 684,
    accuracy: 99.4,
    completedQuests: 50,
  },
  {
    rank: 2,
    name: '빛의타자_소피아',
    avatar: '🦄',
    badge: '💎 다이아몬드',
    badgeColor: '#38bdf8',
    language: 'Web (JS)',
    langColor: '#f97316',
    cpm: 642,
    accuracy: 98.8,
    completedQuests: 48,
  },
  {
    rank: 3,
    name: 'GCC_컴파일러장인',
    avatar: '⚡',
    badge: '🔥 루비 챌린저',
    badgeColor: '#ec4899',
    language: 'C언어',
    langColor: '#06b6d4',
    cpm: 615,
    accuracy: 99.1,
    completedQuests: 45,
  },
  {
    rank: 4,
    name: '코딩꿈나무_민준',
    avatar: '🐱',
    badge: '⭐ 플래티넘',
    badgeColor: '#a78bfa',
    language: 'Python',
    langColor: '#3b82f6',
    cpm: 588,
    accuracy: 97.9,
    completedQuests: 42,
  },
  {
    rank: 5,
    name: '키보드요정_지우',
    avatar: '🐰',
    badge: '⭐ 골드 1',
    badgeColor: '#facc15',
    language: 'Web (HTML)',
    langColor: '#f97316',
    cpm: 554,
    accuracy: 98.2,
    completedQuests: 39,
  },
  {
    rank: 6,
    name: '코드러너_현우',
    avatar: '🚀',
    badge: '⭐ 골드 2',
    badgeColor: '#facc15',
    language: 'Python',
    langColor: '#3b82f6',
    cpm: 521,
    accuracy: 96.7,
    completedQuests: 36,
  },
  {
    rank: 7,
    name: '버그슬레이어_하은',
    avatar: '🦁',
    badge: '⭐ 실버 1',
    badgeColor: '#cbd5e1',
    language: 'C언어',
    langColor: '#06b6d4',
    cpm: 495,
    accuracy: 97.4,
    completedQuests: 32,
  },
  {
    rank: 8,
    name: '알고리즘초보_도윤',
    avatar: '🐼',
    badge: '⭐ 실버 2',
    badgeColor: '#cbd5e1',
    language: 'Python',
    langColor: '#3b82f6',
    cpm: 472,
    accuracy: 95.8,
    completedQuests: 28,
  },
];

export default function RankingPage() {
  const { language } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'python' | 'web' | 'c'>('all');

  const filteredUsers = MOCK_LEADERBOARD.filter((user) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'python') return user.language.includes('Python');
    if (selectedFilter === 'web') return user.language.includes('Web');
    if (selectedFilter === 'c') return user.language.includes('C');
    return true;
  });

  return (
    <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 32px 100px' }}>
      {/* Header Banner */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
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
            fontSize: '0.86rem',
            fontWeight: 800,
            marginBottom: '16px',
          }}
        >
          <Trophy size={16} />
          <span>HALL OF FAME & LEADERBOARD</span>
        </div>
        <h1 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#f8fafc', marginBottom: '14px' }}>
          {language === 'ko' ? '실시간 코딩 타자 명예의 전당' : 'Live Coding Typing Hall of Fame'}
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1.08rem', maxWidth: '640px', margin: '0 auto' }}>
          {language === 'ko'
            ? '정확하고 빠른 손끝으로 완성한 실전 샌드박스 코딩 타수 순위입니다. 매주 새로운 주간 챔피언이 탄생해요!'
            : 'Top rankings of coders who type with blazing speed and unmatched accuracy. New champions crowned every week!'}
        </p>
      </div>

      {/* Top 3 Podium Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '56px',
        }}
      >
        {/* 2nd Place */}
        <div
          style={{
            background: '#131e33',
            border: '2px solid rgba(56, 189, 248, 0.4)',
            borderRadius: '24px',
            padding: '32px 24px',
            textAlign: 'center',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.3)',
            order: 1,
          }}
        >
          <div style={{ fontSize: '2.4rem', marginBottom: '6px' }}>🥈</div>
          <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{MOCK_LEADERBOARD[1].avatar}</div>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
            {MOCK_LEADERBOARD[1].name}
          </h3>
          <div style={{ color: '#38bdf8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '14px' }}>
            {MOCK_LEADERBOARD[1].badge}
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 900, color: '#38bdf8' }}>
            {MOCK_LEADERBOARD[1].cpm} <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>CPM</span>
          </div>
          <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '6px' }}>
            정확도: {MOCK_LEADERBOARD[1].accuracy}% · {MOCK_LEADERBOARD[1].language}
          </div>
        </div>

        {/* 1st Place */}
        <div
          style={{
            background: '#15203b',
            border: '2px solid rgba(245, 158, 11, 0.6)',
            borderRadius: '26px',
            padding: '38px 24px',
            textAlign: 'center',
            boxShadow: '0 16px 40px rgba(245, 158, 11, 0.15)',
            transform: 'scale(1.03)',
            order: 0,
          }}
        >
          <div style={{ fontSize: '2.8rem', marginBottom: '6px' }}>👑</div>
          <div style={{ fontSize: '3rem', marginBottom: '10px' }}>{MOCK_LEADERBOARD[0].avatar}</div>
          <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
            {MOCK_LEADERBOARD[0].name}
          </h3>
          <div style={{ color: '#f59e0b', fontWeight: 800, fontSize: '0.88rem', marginBottom: '14px' }}>
            {MOCK_LEADERBOARD[0].badge}
          </div>
          <div style={{ fontSize: '2.3rem', fontWeight: 900, color: '#f59e0b' }}>
            {MOCK_LEADERBOARD[0].cpm} <span style={{ fontSize: '0.95rem', color: '#cbd5e1' }}>CPM</span>
          </div>
          <div style={{ fontSize: '0.88rem', color: '#cbd5e1', marginTop: '6px' }}>
            정확도: {MOCK_LEADERBOARD[0].accuracy}% · {MOCK_LEADERBOARD[0].language}
          </div>
        </div>

        {/* 3rd Place */}
        <div
          style={{
            background: '#131e33',
            border: '2px solid rgba(249, 115, 22, 0.4)',
            borderRadius: '24px',
            padding: '32px 24px',
            textAlign: 'center',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.3)',
            order: 2,
          }}
        >
          <div style={{ fontSize: '2.4rem', marginBottom: '6px' }}>🥉</div>
          <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{MOCK_LEADERBOARD[2].avatar}</div>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
            {MOCK_LEADERBOARD[2].name}
          </h3>
          <div style={{ color: '#ec4899', fontWeight: 700, fontSize: '0.85rem', marginBottom: '14px' }}>
            {MOCK_LEADERBOARD[2].badge}
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 900, color: '#f97316' }}>
            {MOCK_LEADERBOARD[2].cpm} <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>CPM</span>
          </div>
          <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '6px' }}>
            정확도: {MOCK_LEADERBOARD[2].accuracy}% · {MOCK_LEADERBOARD[2].language}
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <div style={{ display: 'flex', gap: '8px', background: 'rgba(255, 255, 255, 0.05)', padding: '4px', borderRadius: '12px' }}>
          {(['all', 'python', 'web', 'c'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                border: 'none',
                background: selectedFilter === filter ? 'rgba(56, 189, 248, 0.2)' : 'transparent',
                color: selectedFilter === filter ? '#38bdf8' : '#94a3b8',
                fontWeight: selectedFilter === filter ? 700 : 500,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              {filter === 'all' && (language === 'ko' ? '전체 언어' : 'All Tracks')}
              {filter === 'python' && '🐍 Python'}
              {filter === 'web' && '🌐 Web'}
              {filter === 'c' && '⚡ C언어'}
            </button>
          ))}
        </div>

        <Link
          href="/practice/python/1"
          className="tactile-btn tactile-btn-primary"
          style={{ padding: '10px 18px', fontSize: '0.88rem' }}
        >
          <Sparkles size={15} />
          <span>{language === 'ko' ? '지금 랭킹 도전하기' : 'Join Leaderboard Now'}</span>
        </Link>
      </div>

      {/* Table */}
      <div
        style={{
          background: 'rgba(15, 23, 42, 0.8)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '70px 2fr 1.2fr 1fr 1fr 1fr',
            padding: '16px 24px',
            background: 'rgba(255, 255, 255, 0.03)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            fontSize: '0.84rem',
            fontWeight: 700,
            color: '#94a3b8',
          }}
        >
          <div>순위</div>
          <div>러너 (닉네임)</div>
          <div>주요 언어</div>
          <div style={{ textAlign: 'right' }}>타수 (CPM)</div>
          <div style={{ textAlign: 'right' }}>정확도</div>
          <div style={{ textAlign: 'right' }}>완료 퀘스트</div>
        </div>

        {filteredUsers.map((user) => (
          <div
            key={user.rank}
            style={{
              display: 'grid',
              gridTemplateColumns: '70px 2fr 1.2fr 1fr 1fr 1fr',
              padding: '16px 24px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              alignItems: 'center',
              fontSize: '0.92rem',
              transition: 'background 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            <div style={{ fontWeight: 800, color: user.rank <= 3 ? '#f59e0b' : '#64748b' }}>
              #{user.rank}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.4rem' }}>{user.avatar}</span>
              <div>
                <div style={{ fontWeight: 700, color: '#f8fafc' }}>{user.name}</div>
                <div style={{ fontSize: '0.75rem', color: user.badgeColor }}>{user.badge}</div>
              </div>
            </div>
            <div>
              <span
                style={{
                  padding: '3px 10px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: user.langColor,
                  border: `1px solid ${user.langColor}40`,
                }}
              >
                {user.language}
              </span>
            </div>
            <div style={{ textAlign: 'right', fontWeight: 800, color: '#38bdf8' }}>
              {user.cpm} <span style={{ fontSize: '0.75rem', color: '#64748b' }}>CPM</span>
            </div>
            <div style={{ textAlign: 'right', fontWeight: 600, color: '#10b981' }}>
              {user.accuracy}%
            </div>
            <div style={{ textAlign: 'right', color: '#cbd5e1' }}>
              {user.completedQuests} / 50
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
