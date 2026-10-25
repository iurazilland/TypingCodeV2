'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Play, 
  Sparkles, 
  Trophy, 
  ArrowRight,
  Puzzle,
  Keyboard,
  Wrench,
} from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { CURRICULUM_TRACKS, CourseModule, LanguageTrack } from '@/lib/curriculum';
import { PYTHON_LEVEL_1 } from '@/data/curriculum/python/level1';
import LanguageIcon from '@/components/LanguageIcon';
import { getCategoryName, getSkillName } from '@/lib/curriculumTranslations';

interface StageSelectPageProps {
  params: {
    language: string;
  };
}

export default function StageSelectPage({ params }: StageSelectPageProps) {
  const { language } = useLanguage();
  const isEn = language === 'en';
  const rawLang = params.language.toLowerCase();

  // Find matching track and module from CURRICULUM_TRACKS
  const { matchedTrack, matchedModule } = useMemo(() => {
    let tFound: LanguageTrack | undefined;
    let mFound: CourseModule | undefined;

    for (const track of CURRICULUM_TRACKS) {
      for (const mod of track.modules) {
        if (
          mod.practiceUrl === `/practice/${rawLang}` ||
          mod.id.toLowerCase() === rawLang ||
          (rawLang === 'python_basic' && mod.id === 'py-basic') ||
          (rawLang === 'python' && mod.id === 'py-basic') ||
          (rawLang === 'c' && mod.id === 'c-basic') ||
          (rawLang === 'web' && mod.id === 'web-html')
        ) {
          tFound = track;
          mFound = mod;
          break;
        }
      }
      if (mFound) break;
    }

    if (!tFound) {
      const cleanLang = rawLang.replace(/_basic$/, '').replace(/_adv$/, '').replace(/_advanced$/, '');
      tFound = CURRICULUM_TRACKS.find((t) => 
        t.id === rawLang ||
        t.id === cleanLang ||
        (cleanLang === 'py' && t.id === 'python') ||
        (cleanLang === 'js' && t.id === 'javascript') ||
        (cleanLang === 'html' && t.id === 'web')
      ) || CURRICULUM_TRACKS[0];
      mFound = tFound.modules[0];
    } else if (!mFound) {
      mFound = tFound.modules[0];
    }

    return { matchedTrack: tFound, matchedModule: mFound };
  }, [rawLang]);

  // Generate Stage Cards for the module
  const isPythonBasic = (rawLang === 'python_basic' || matchedModule.id === 'py-basic') && matchedTrack.id === 'python';

  const stages = useMemo(() => {
    if (isPythonBasic) {
      return PYTHON_LEVEL_1.questions.map((q) => {
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
          practiceUrl: `/practice/${rawLang}/1?step=${q.step}`,
          isAvailable: true,
        };
      });
    }

    const totalStages = Math.min(matchedModule.totalLevels || 10, 10);
    return Array.from({ length: totalStages }, (_, i) => {
      const stepNum = i + 1;
      const isBlock = stepNum <= 4;
      const isBug = stepNum === 7 || stepNum === 8;
      const isChallenge = stepNum === totalStages;
      const badgeType: 'block' | 'blank' | 'bug' | 'challenge' = isChallenge
        ? 'challenge'
        : isBug
        ? 'bug'
        : isBlock
        ? 'block'
        : 'blank';

      const skillIndex = i % (matchedModule.skills.length || 1);
      const skillName = matchedModule.skills[skillIndex] || `${matchedTrack.name} 핵심 문법`;

      return {
        step: stepNum,
        type: badgeType,
        title_ko: `${skillName} 실습 (${stepNum}단계)`,
        title_en: `${getSkillName(skillName, isEn)} (Stage ${stepNum})`,
        hint_ko: '코드를 직접 타이핑하고 실시간 런타임에서 실행 결과를 확인합니다.',
        hint_en: 'Type code hands-on and verify real execution output in the sandbox.',
        practiceUrl: `/practice/${rawLang}/1?step=${stepNum}`,
        isAvailable: true,
      };
    });
  }, [isPythonBasic, matchedModule, matchedTrack, rawLang, isEn]);

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
    <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '36px 24px 100px' }}>
      {/* Top Back Navigation Link (Left-aligned) */}
      <div style={{ marginBottom: '28px' }}>
        <Link
          href="/languages"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#94a3b8',
            fontSize: '0.9rem',
            fontWeight: 600,
            transition: 'color 0.15s ease',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
        >
          <ArrowLeft size={16} />
          <span>{isEn ? 'Back to All Curriculum' : '전체 언어 학습과정으로 돌아가기'}</span>
        </Link>
      </div>

      {/* Course Header Banner */}
      <div
        style={{
          padding: '28px 32px',
          borderRadius: '22px',
          background: 'var(--bg-surface, #1e293b)',
          border: `1.5px solid ${matchedTrack.color}50`,
          boxShadow: `0 8px 30px rgba(0, 0, 0, 0.35), 0 0 20px ${matchedTrack.color}15`,
          marginBottom: '36px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '22px', flex: 1, minWidth: 0 }}>
          <div
            style={{
              width: '70px',
              height: '70px',
              borderRadius: '18px',
              background: 'rgba(15, 23, 42, 0.8)',
              border: `1.5px solid ${matchedTrack.color}70`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 6px 18px ${matchedTrack.color}35`,
              flexShrink: 0,
            }}
          >
            <LanguageIcon language={matchedTrack.id} size={42} />
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
              <h1 style={{ fontSize: 'clamp(1.4rem, 2.3vw, 1.9rem)', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
                {isEn ? matchedModule.title_en : matchedModule.title_ko}
              </h1>
              <span
                style={{
                  padding: '3px 10px',
                  borderRadius: '10px',
                  background: 'rgba(15, 23, 42, 0.7)',
                  color: matchedTrack.color,
                  border: `1px solid ${matchedTrack.color}60`,
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  letterSpacing: '0.03em',
                }}
              >
                {getCategoryName(matchedModule.category, isEn)}
              </span>
              <span
                style={{
                  padding: '3px 10px',
                  borderRadius: '10px',
                  background: `${matchedModule.difficultyColor || '#10b981'}20`,
                  color: matchedModule.difficultyColor || '#10b981',
                  border: `1px solid ${matchedModule.difficultyColor || '#10b981'}50`,
                  fontSize: '0.78rem',
                  fontWeight: 800,
                }}
              >
                {matchedModule.difficulty}
              </span>
            </div>
            <p style={{
              color: '#cbd5e1',
              fontSize: '0.94rem',
              lineHeight: 1.55,
              margin: 0,
              wordBreak: 'keep-all',
            }}>
              {isEn ? matchedModule.description_en : matchedModule.description_ko}
            </p>
          </div>
        </div>

        {/* Milestone Trophy Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            background: 'rgba(11, 19, 41, 0.65)',
            padding: '14px 22px',
            borderRadius: '14px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            flexShrink: 0,
          }}
        >
          <Trophy size={28} color="#f59e0b" />
          <div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>
              {isEn ? 'CURRICULUM STAGES' : '도전 스테이지'}
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f8fafc' }}>
              {isEn ? `Total ${stages.length} Stages` : `총 ${stages.length}개 스테이지`}
            </div>
          </div>
        </div>
      </div>

      {/* Stage Grid Section Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '22px', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Sparkles size={20} color="#38bdf8" />
          <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
            {isEn 
              ? `${matchedModule.title_en} Stages (1 ~ ${stages.length})` 
              : `${matchedModule.title_ko} 실전 스테이지 (1 ~ ${stages.length}단계)`}
          </h2>
        </div>
        <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
          {isEn ? 'Click any stage card to start coding practice immediately' : '원하는 단계를 클릭하여 바로 실습을 시작할 수 있습니다'}
        </div>
      </div>

      {/* Stage Cards Responsive Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))',
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
                background: 'var(--bg-surface, #1e293b)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '18px',
                boxShadow: '0 6px 18px rgba(0, 0, 0, 0.25)',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
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

                {/* Stage Prompt Title */}
                <h4
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#f8fafc',
                    marginBottom: '8px',
                    lineHeight: 1.45,
                  }}
                >
                  {isEn ? stage.title_en : stage.title_ko}
                </h4>

                {/* Stage Hint/Description */}
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

              {/* Card Footer: Action Launch Button */}
              <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <Link
                  href={stage.practiceUrl}
                  className="tactile-btn tactile-btn-primary"
                  style={{
                    width: '100%',
                    padding: '10px 16px',
                    fontSize: '0.88rem',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                    borderRadius: '12px',
                    boxShadow: '0 4px 14px rgba(56, 189, 248, 0.25)',
                  }}
                >
                  <Play size={14} fill="currentColor" />
                  <span>{isEn ? `Start Stage ${stage.step}` : `${stage.step}단계 실습 시작하기`}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
