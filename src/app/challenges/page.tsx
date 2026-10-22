'use client';

import React from 'react';
import Link from 'next/link';
import { Flame, Timer, Target, Award, ArrowRight, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function ChallengesPage() {
  const { language } = useLanguage();

  const challengeList = [
    {
      id: 'speed-60s',
      title: language === 'ko' ? '⚡ 60초 코딩 버스트 챌린지' : '⚡ 60-Second Coding Burst',
      desc: language === 'ko'
        ? '1분 동안 오류 없이 최대한 많은 코드를 입력하세요! 실시간 타수와 콤보가 폭발합니다.'
        : 'Type as much code as possible in 60 seconds without errors! Explosive combo and CPM multipliers.',
      badge: '🔥 HOT 챌린지',
      badgeColor: '#ef4444',
      diff: '중급',
      targetCpm: '500+ CPM',
      icon: '⏱️',
      href: '/practice/python/1',
    },
    {
      id: 'accuracy-100',
      title: language === 'ko' ? '🎯 100% 무결점 정확도 챌린지' : '🎯 100% Zero-Bug Accuracy',
      desc: language === 'ko'
        ? '단 하나의 오타도 허용되지 않는 극한의 집중 챌린지! 백스페이스 없이 완벽하게 타이핑하세요.'
        : 'Extreme precision challenge with zero typos allowed! Clear the snippet without backspaces.',
      badge: '⭐ 집중력 강화',
      badgeColor: '#3b82f6',
      diff: '상급',
      targetCpm: '100% 정확도',
      icon: '🎯',
      href: '/practice/python/1',
    },
    {
      id: 'algorithm-speedrun',
      title: language === 'ko' ? '🚀 자료구조 & 알고리즘 스피드런' : '🚀 Algorithm & Data Struct Speedrun',
      desc: language === 'ko'
        ? '정렬, 큐, 스택 등 자주 쓰이는 핵심 알고리즘 코드를 손끝으로 직관적으로 기억해보세요.'
        : 'Type essential algorithms like sorting, queues, and stacks to cement them in muscle memory.',
      badge: '💡 실전 코딩',
      badgeColor: '#10b981',
      diff: '도전',
      targetCpm: '알고리즘 10제',
      icon: '🧩',
      href: '/practice/python/1',
    },
  ];

  return (
    <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 32px 100px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 18px',
            borderRadius: '20px',
            background: 'rgba(239, 68, 68, 0.15)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            color: '#f87171',
            fontSize: '0.86rem',
            fontWeight: 800,
            marginBottom: '16px',
          }}
        >
          <Flame size={16} />
          <span>DAILY CODING SPEED CHALLENGE</span>
        </div>
        <h1 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#f8fafc', marginBottom: '14px' }}>
          {language === 'ko' ? '한계를 뛰어넘는 코딩 타자 챌린지' : 'Push Your Limits with Coding Challenges'}
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1.08rem', maxWidth: '640px', margin: '0 auto' }}>
          {language === 'ko'
            ? '매일 새로운 미션과 스피드 타자 도전에 참여하고 특별 뱃지와 랭킹 포인트를 획득하세요!'
            : 'Participate in daily speedrun missions, earn exclusive badges, and climb the leaderboard!'}
        </p>
      </div>

      {/* Challenge Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {challengeList.map((ch) => (
          <div
            key={ch.id}
            style={{
              background: 'var(--bg-surface, #131f3d)',
              border: '2px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              padding: '32px 36px',
              display: 'grid',
              gridTemplateColumns: 'auto 1fr auto',
              gap: '30px',
              alignItems: 'center',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.2s ease',
            }}
          >
            {/* Big Icon */}
            <div
              style={{
                width: '74px',
                height: '74px',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1.5px solid rgba(255, 255, 255, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '36px',
              }}
            >
              {ch.icon}
            </div>

            {/* Info */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
                <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#f8fafc' }}>{ch.title}</h2>
                <span
                  style={{
                    padding: '3px 10px',
                    borderRadius: '12px',
                    background: `${ch.badgeColor}20`,
                    color: ch.badgeColor,
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    border: `1px solid ${ch.badgeColor}40`,
                  }}
                >
                  {ch.badge}
                </span>
                <span style={{ fontSize: '0.82rem', color: '#f59e0b', fontWeight: 700 }}>
                  목표: {ch.targetCpm}
                </span>
              </div>
              <p style={{ color: '#cbd5e1', fontSize: '0.98rem', lineHeight: 1.5 }}>{ch.desc}</p>
            </div>

            {/* Action */}
            <div>
              <Link
                href={ch.href}
                className="tactile-btn tactile-btn-primary"
                style={{
                  padding: '13px 24px',
                  fontSize: '0.96rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  whiteSpace: 'nowrap',
                }}
              >
                <span>{language === 'ko' ? '챌린지 시작' : 'Start Challenge'}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
