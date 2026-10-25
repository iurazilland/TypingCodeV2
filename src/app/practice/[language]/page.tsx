'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  Play, 
  Sparkles, 
  Trophy, 
  BookOpen, 
  Code2, 
  CheckCircle2, 
  Layers,
  Flame,
  ArrowRight,
  Puzzle,
  Keyboard,
  Wrench,
  Lock
} from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { CURRICULUM_TRACKS, CourseModule, LanguageTrack } from '@/lib/curriculum';
import { PYTHON_LEVEL_1 } from '@/data/curriculum/python/level1';
import LanguageIcon from '@/components/LanguageIcon';

interface StageSelectPageProps {
  params: {
    language: string;
  };
}

export default function StageSelectPage({ params }: StageSelectPageProps) {
  const { language } = useLanguage();
  const isEn = language === 'en';
  const langParam = params.language.toLowerCase();

  // Find matching track and module from CURRICULUM_TRACKS
  let matchedTrack: LanguageTrack | undefined;
  let matchedModule: CourseModule | undefined;

  for (const track of CURRICULUM_TRACKS) {
    for (const mod of track.modules) {
      if (
        mod.practiceUrl === `/practice/${langParam}` ||
        mod.id.toLowerCase() === langParam ||
        (langParam === 'python_basic' && mod.id === 'py-basic') ||
        (langParam === 'python' && mod.id === 'py-advanced') ||
        (langParam === 'c' && mod.id === 'c-basic') ||
        (langParam === 'web' && mod.id === 'web-html')
      ) {
        matchedTrack = track;
        matchedModule = mod;
        break;
      }
    }
    if (matchedModule) break;
  }

  // Fallback defaults if not found
  if (!matchedTrack || !matchedModule) {
    // Default to Python Basic
    matchedTrack = CURRICULUM_TRACKS[0];
    matchedModule = matchedTrack.modules[0];
  }

  // Generate Stage Cards for the module
  // For python_basic, map directly from PYTHON_LEVEL_1 questions
  const isPythonBasic = langParam === 'python_basic' || matchedModule.id === 'py-basic';

  const stages = isPythonBasic
    ? PYTHON_LEVEL_1.questions.map((q) => {
        let badgeType: 'block' | 'blank' | 'bug' | 'challenge' = 'block';
        if (q.kind === 'fill_blank') badgeType = 'blank';
        else if (q.kind === 'fix_bug') badgeType = 'bug';
        else if (q.type === 'typing') badgeType = 'blank';

        return {
          step: q.step,
          type: badgeType,
          title_ko: q.prompt_ko,
          title_en: q.prompt_en,
          hint_ko: q.hint_ko,
          hint_en: q.hint_en,
          practiceUrl: `/practice/${langParam}/1?step=${q.step}`,
          isAvailable: true,
        };
      })
    : Array.from({ length: 10 }, (_, i) => {
        const stepNum = i + 1;
        const isBlock = stepNum <= 5;
        return {
          step: stepNum,
          type: (isBlock ? 'block' : stepNum === 8 ? 'bug' : 'blank') as 'block' | 'blank' | 'bug' | 'challenge',
          title_ko: `${matchedModule?.title_ko || '코스'} ${stepNum}단계 실전 실습`,
          title_en: `${matchedModule?.title_en || 'Course'} Stage ${stepNum} Practice`,
          hint_ko: '코드를 직접 작성하고 결과를 확인하며 기본기를 다집니다.',
          hint_en: 'Practice hands-on coding and verify live execution.',
          practiceUrl: `/practice/${langParam}/1?step=${stepNum}`,
          isAvailable: stepNum === 1 || isPythonBasic,
        };
      });

  const getBadgeInfo = (type: 'block' | 'blank' | 'bug' | 'challenge') => {
    switch (type) {
      case 'block':
        return {
          icon: <Puzzle size={13} />,
          text_ko: '🧩 블록 코딩',
          text_en: '🧩 Block Coding',
          bg: 'rgba(59, 130, 246, 0.15)',
          color: '#60a5fa',
          border: 'rgba(59, 130, 246, 0.35)',
        };
      case 'blank':
        return {
          icon: <Keyboard size={13} />,
          text_ko: '⌨️ 빈칸 타이핑',
          text_en: '⌨️ Fill Blank',
          bg: 'rgba(16, 185, 129, 0.15)',
          color: '#34d399',
          border: 'rgba(16, 185, 129, 0.35)',
        };
      case 'bug':
        return {
          icon: <Wrench size={13} />,
          text_ko: '🔍 오타 수정',
          text_en: '🔍 Bug Fix',
          bg: 'rgba(239, 68, 68, 0.15)',
          color: '#f87171',
          border: 'rgba(239, 68, 68, 0.35)',
        };
      case 'challenge':
      default:
        return {
          icon: <Trophy size={13} />,
          text_ko: '🏆 실전 챌린지',
          text_en: '🏆 Challenge',
          bg: 'rgba(245, 158, 11, 0.15)',
          color: '#fbbf24',
          border: 'rgba(245, 158, 11, 0.35)',
        };
    }
  };

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '36px 24px 90px' }}>
      {/* Top Back Navigation Link */}
      <Link
        href="/languages"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          color: '#94a3b8',
          fontSize: '0.9rem',
          fontWeight: 600,
          marginBottom: '24px',
          transition: 'color 0.15s ease',
          textDecoration: 'none',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
      >
        <ArrowLeft size={16} />
        <span>{isEn ? 'Back to All Curriculum Courses' : '전체 언어 학습과정으로 돌아가기'}</span>
      </Link>

      {/* Module Hero Header Card */}
      <div
        style={{
          padding: '32px 36px',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, rgba(19, 31, 61, 0.95) 0%, rgba(15, 23, 42, 0.95) 100%)',
          border: `1.5px solid ${matchedTrack.color}50`,
          boxShadow: `0 12px 36px rgba(0, 0, 0, 0.35), 0 0 24px ${matchedTrack.color}15`,
          marginBottom: '40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
          <div
            style={{
              width: '76px',
              height: '76px',
              borderRadius: '20px',
              background: 'rgba(15, 23, 42, 0.8)',
              border: `1.5px solid ${matchedTrack.color}70`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 8px 20px ${matchedTrack.color}35`,
              flexShrink: 0,
            }}
          >
            <LanguageIcon language={matchedTrack.id} size={44} />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
              <h1 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
                {isEn ? matchedModule.title_en : matchedModule.title_ko}
              </h1>
              <span
                style={{
                  padding: '4px 10px',
                  borderRadius: '10px',
                  background: 'rgba(15, 23, 42, 0.7)',
                  color: matchedTrack.color,
                  border: `1px solid ${matchedTrack.color}60`,
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  letterSpacing: '0.03em',
                }}
              >
                {matchedModule.category}
              </span>
            </div>
            <p style={{ color: '#cbd5e1', fontSize: '0.96rem', maxWidth: '680px', lineHeight: 1.55, margin: 0 }}>
              {isEn ? matchedModule.description_en : matchedModule.description_ko}
            </p>
          </div>
        </div>

        {/* Milestone Stats Counter */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            background: 'rgba(11, 19, 41, 0.65)',
            padding: '16px 24px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <Trophy size={32} color="#f59e0b" />
          <div>
            <div style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: 600 }}>
              {isEn ? 'CURRICULUM STAGES' : '도전 스테이지'}
            </div>
            <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#f8fafc' }}>
              {isEn ? `Total ${stages.length} Stages` : `총 ${stages.length}개 스테이지`}
            </div>
          </div>
        </div>
      </div>

      {/* Stage Grid Section Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '22px', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Sparkles size={20} color="#38bdf8" />
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
            {isEn ? 'Phase 1: Basic Output & Foundations (Stages 1 ~ 10)' : 'Phase 1: 기초 출력과 연산 (1단계 ~ 10단계)'}
          </h2>
        </div>
        <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
          {isEn ? 'Click any available stage to start practicing immediately' : '원하는 단계를 클릭하여 바로 실습을 시작할 수 있습니다'}
        </div>
      </div>

      {/* Stage Cards Responsive Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '20px',
        }}
      >
        {stages.map((stage) => {
          const badge = getBadgeInfo(stage.type);
          return (
            <div
              key={stage.step}
              className="quest-card"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '210px',
                background: '#131e33',
                border: stage.isAvailable
                  ? '1px solid rgba(255, 255, 255, 0.12)'
                  : '1px solid rgba(255, 255, 255, 0.04)',
                boxShadow: stage.isAvailable
                  ? '0 6px 18px rgba(0, 0, 0, 0.25)'
                  : 'none',
                opacity: stage.isAvailable ? 1 : 0.65,
                transition: 'all 0.2s ease',
              }}
            >
              <div>
                {/* Stage Header Row: Stage Number + Type Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span
                    style={{
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 800,
                      color: '#38bdf8',
                      letterSpacing: '0.04em',
                    }}
                  >
                    STAGE {stage.step.toString().padStart(2, '0')}
                  </span>

                  <span
                    style={{
                      padding: '3px 10px',
                      borderRadius: '8px',
                      fontSize: '0.76rem',
                      fontWeight: 700,
                      background: badge.bg,
                      color: badge.color,
                      border: `1px solid ${badge.border}`,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    {isEn ? badge.text_en : badge.text_ko}
                  </span>
                </div>

                {/* Stage Title / Prompt */}
                <h3
                  style={{
                    fontSize: '1.12rem',
                    fontWeight: 800,
                    color: '#f8fafc',
                    marginBottom: '8px',
                    lineHeight: 1.4,
                  }}
                >
                  {isEn ? stage.title_en : stage.title_ko}
                </h3>

                {/* Stage Hint / Subtitle */}
                <p
                  style={{
                    fontSize: '0.86rem',
                    color: '#94a3b8',
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {isEn ? stage.hint_en : stage.hint_ko}
                </p>
              </div>

              {/* Bottom Action Button */}
              <div style={{ marginTop: '22px' }}>
                {stage.isAvailable ? (
                  <Link
                    href={stage.practiceUrl}
                    className="tactile-btn tactile-btn-primary"
                    style={{
                      padding: '10px 18px',
                      fontSize: '0.88rem',
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                    }}
                  >
                    <Play size={14} fill="#fff" />
                    <span>{isEn ? 'Start Stage' : '스테이지 시작'}</span>
                  </Link>
                ) : (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      color: '#64748b',
                      fontSize: '0.84rem',
                      padding: '9px',
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '8px',
                    }}
                  >
                    <Lock size={14} />
                    <span>{isEn ? 'Locked' : '준비 중인 스테이지'}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
