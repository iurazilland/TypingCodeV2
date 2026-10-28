'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Play,
  Lock,
} from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { CURRICULUM_TRACKS, CourseModule, LanguageTrack } from '@/lib/curriculum';
import LanguageIcon from '@/components/LanguageIcon';
import { getCategoryName } from '@/lib/curriculumTranslations';
import { getCourseSections, LevelSection, LevelItem } from '@/lib/curriculumSections';

interface StageSelectPageProps {
  params: {
    language: string;
  };
}

export default function StageSelectPage({ params }: StageSelectPageProps) {
  const { language } = useLanguage();
  const isEn = language === 'en';
  const rawLang = params.language.toLowerCase();

  // Hover state tracker for level cards
  const [hoveredLevelNum, setHoveredLevelNum] = useState<number | null>(null);

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

  // Section & Level definitions for this course
  const sections: LevelSection[] = useMemo(() => {
    return getCourseSections(
      matchedTrack.id, 
      matchedModule.id, 
      matchedModule.totalLevels || 20, 
      matchedModule.skills || []
    );
  }, [matchedTrack, matchedModule]);

  // Total levels across all sections
  const totalLevelsCount = useMemo(() => {
    return sections.reduce((sum, s) => sum + s.levels.length, 0);
  }, [sections]);

  // User learning DB progress loaded from localStorage
  const [userProgress, setUserProgress] = useState<{
    clearedLevels: Set<number>;
    highestUnlockedLevel: number;
  }>({
    clearedLevels: new Set([1]), // 1레벨 기본 완료 처리
    highestUnlockedLevel: 2,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const cleared = new Set<number>([1]); // 1레벨 기본 완료 처리
      let maxUnlocked = 2;

      // 1레벨이 localStorage에 없다면 완료 상태(10단계 완료)로 기록
      if (!localStorage.getItem(`unlocked_step_${rawLang}_1`)) {
        localStorage.setItem(`unlocked_step_${rawLang}_1`, '10');
      }

      // Scan per-level steps (each level has 10 steps; if >= 10, marked as cleared)
      for (let lvl = 1; lvl <= 50; lvl++) {
        const stepVal = parseInt(localStorage.getItem(`unlocked_step_${rawLang}_${lvl}`) || '0', 10);
        if (stepVal >= 10) {
          cleared.add(lvl);
          maxUnlocked = Math.max(maxUnlocked, lvl + 1);
        }
      }

      const savedUnlocked = parseInt(localStorage.getItem(`unlocked_level_${rawLang}`) || '2', 10);
      maxUnlocked = Math.max(maxUnlocked, savedUnlocked);

      setUserProgress({
        clearedLevels: cleared,
        highestUnlockedLevel: maxUnlocked,
      });
    } catch (e) {
      console.error(e);
    }
  }, [rawLang]);

  // Dynamic matte soft ice-cyan body background for glare-free comfort (unified with languages page)
  useEffect(() => {
    document.body.style.backgroundColor = '#e2eff6';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  // Current active level: first uncleared level
  const currentActiveLevel = useMemo(() => {
    for (const sec of sections) {
      for (const lvl of sec.levels) {
        if (!userProgress.clearedLevels.has(lvl.levelNumber)) {
          return lvl.levelNumber;
        }
      }
    }
    return 1;
  }, [sections, userProgress]);

  const clearedCount = userProgress.clearedLevels.size;
  const progressPercent = totalLevelsCount > 0 ? Math.min(100, Math.round((clearedCount / totalLevelsCount) * 100)) : 0;

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '36px 24px 100px' }}>
      {/* Dynamic Keyframes for Current Level Animated Border & Responsive Grid */}
      <style>{`
        @keyframes currentLevelPulse {
          0%, 100% {
            border-color: #38bdf8;
            box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.7), 0 8px 24px -2px rgba(2, 132, 199, 0.45);
          }
          50% {
            border-color: #ffffff;
            box-shadow: 0 0 0 5px rgba(56, 189, 248, 0), 0 0 22px 6px rgba(56, 189, 248, 0.8), 0 12px 30px rgba(2, 132, 199, 0.6);
          }
        }

        .current-level-active {
          animation: currentLevelPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite !important;
          border-width: 2.5px !important;
        }

        @media (max-width: 1100px) {
          .stage-select-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 680px) {
          .stage-select-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
      `}</style>

      {/* Top Back Navigation Link (Left-aligned) */}
      <div style={{ marginBottom: '24px' }}>
        <Link
          href="/languages"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#475569',
            fontSize: '0.92rem',
            fontWeight: 700,
            transition: 'color 0.15s ease',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#0284c7')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
        >
          <ArrowLeft size={16} />
          <span>{isEn ? 'Back to All Curriculum' : '전체 언어 학습과정으로 돌아가기'}</span>
        </Link>
      </div>

      {/* Course Overview Bento Pod with Learning Progress */}
      <div
        style={{
          padding: '28px 32px',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, #f0fdfa 0%, #e0f2fe 100%)',
          border: '2px solid #38bdf8',
          boxShadow: '0 8px 24px -4px rgba(8, 145, 178, 0.12), 0 2px 8px rgba(15, 23, 42, 0.04)',
          marginBottom: '36px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
        }}
      >
        {/* Left: Language Icon + Title + Description */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1, minWidth: '300px' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '18px',
              background: '#ffffff',
              border: '1.5px solid #cbd5e1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(15, 23, 42, 0.06)',
              flexShrink: 0,
            }}
          >
            <LanguageIcon language={matchedTrack.id} size={38} />
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
              <h1 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.75rem)', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                {isEn ? matchedModule.title_en : matchedModule.title_ko}
              </h1>
              <span
                style={{
                  padding: '3px 10px',
                  borderRadius: '10px',
                  background: '#ffffff',
                  color: '#334155',
                  border: '1.5px solid #cbd5e1',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  letterSpacing: '0.03em',
                  boxShadow: '0 1px 3px rgba(15, 23, 42, 0.04)',
                }}
              >
                {getCategoryName(matchedModule.category, isEn)}
              </span>
              <span
                style={{
                  padding: '3px 10px',
                  borderRadius: '10px',
                  background: '#ffffff',
                  color: matchedModule.difficultyColor || '#10b981',
                  border: `1.5px solid ${matchedModule.difficultyColor || '#10b981'}`,
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  boxShadow: '0 1px 3px rgba(15, 23, 42, 0.04)',
                }}
              >
                {matchedModule.difficulty}
              </span>
            </div>
            <p style={{
              color: '#475569',
              fontSize: '0.92rem',
              lineHeight: 1.55,
              margin: 0,
              fontWeight: 500,
              wordBreak: 'keep-all',
            }}>
              {isEn ? matchedModule.description_en : matchedModule.description_ko}
            </p>
          </div>
        </div>

        {/* Right: Progress Meter */}
        <div
          style={{
            background: '#ffffff',
            padding: '16px 22px',
            borderRadius: '18px',
            border: '1.5px solid #cbd5e1',
            boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
            flexShrink: 0,
            minWidth: '220px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.76rem', color: '#64748b', fontWeight: 700, letterSpacing: '0.04em' }}>
              {isEn ? 'CURRICULUM PROGRESS' : '학습 달성률'}
            </span>
            <span style={{ fontSize: '0.88rem', color: '#0f172a', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
              {clearedCount} / {totalLevelsCount} ({progressPercent}%)
            </span>
          </div>
          <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
            <div
              style={{
                width: `${progressPercent}%`,
                height: '100%',
                background: progressPercent === 100 ? '#10b981' : 'linear-gradient(90deg, #0284c7, #10b981)',
                borderRadius: '4px',
                transition: 'width 0.3s ease',
              }}
            />
          </div>
        </div>
      </div>

      {/* Exercism-Style Concept Syllabus (Sections & Concept Cards) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '38px' }}>
        {sections.map((section) => {
          const sectionClearedCount = section.levels.filter((l) => userProgress.clearedLevels.has(l.levelNumber)).length;
          const isSectionComplete = sectionClearedCount === section.levels.length && section.levels.length > 0;

          return (
            <div key={section.id}>
              {/* Section Header: Concept Domain Banner */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '18px',
                  paddingBottom: '12px',
                  borderBottom: '2px solid #cbd5e1',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span
                    style={{
                      padding: '4px 11px',
                      borderRadius: '8px',
                      background: isSectionComplete ? '#dcfce7' : '#e0f2fe',
                      color: isSectionComplete ? '#15803d' : '#0284c7',
                      border: `1.5px solid ${isSectionComplete ? '#86efac' : '#7dd3fc'}`,
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      letterSpacing: '0.04em',
                    }}
                  >
                    SECTION 0{section.sectionNumber}
                  </span>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: 0, letterSpacing: '-0.01em' }}>
                    {isEn ? section.title_en : section.title_ko}
                  </h2>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.84rem' }}>
                  {isSectionComplete ? (
                    <span style={{ color: '#15803d', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                      <CheckCircle2 size={15} />
                      <span>{isEn ? 'Section Complete' : '섹션 완료'}</span>
                    </span>
                  ) : (
                    <span style={{ color: '#64748b', fontWeight: 600 }}>
                      {sectionClearedCount} / {section.levels.length} {isEn ? 'Cleared' : '완료'}
                    </span>
                  )}
                </div>
              </div>

              {/* Concept Level Cards Grid: 5-Column Square Layout */}
              <div
                className="stage-select-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
                  gap: '16px',
                }}
              >
                {section.levels.map((level) => {
                  const isCleared = userProgress.clearedLevels.has(level.levelNumber);
                  const isCurrent = !isCleared && (level.levelNumber === currentActiveLevel);
                  const isLocked = !isCleared && !isCurrent;
                  const isHovered = hoveredLevelNum === level.levelNumber;

                  return (
                    <Link
                      key={level.levelNumber}
                      href={isLocked ? '#' : `/practice/${rawLang}/${level.levelNumber}`}
                      onClick={(e) => {
                        if (isLocked) {
                          e.preventDefault();
                        }
                      }}
                      onMouseEnter={() => !isLocked && setHoveredLevelNum(level.levelNumber)}
                      onMouseLeave={() => setHoveredLevelNum(null)}
                      className={`stage-select-card ${isCurrent ? 'current-level-active' : ''}`}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        aspectRatio: '1 / 1',
                        padding: '18px',
                        borderRadius: '20px',
                        textDecoration: 'none',
                        opacity: isLocked ? 0.72 : 1,
                        background: isHovered && !isLocked
                          ? ((isCleared || isCurrent)
                              ? 'linear-gradient(135deg, #0369a1 0%, #075985 100%)'
                              : 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)')
                          : (isCleared || isCurrent)
                          ? 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)'
                          : isLocked
                          ? 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)'
                          : '#ffffff',
                        border: isHovered && !isLocked
                          ? ((isCleared || isCurrent) ? '2.5px solid #7dd3fc' : '2.5px solid #0284c7')
                          : isCurrent
                          ? '2.5px solid #38bdf8'
                          : isCleared
                          ? '2px solid #38bdf8'
                          : isLocked
                          ? '1.5px dashed #94a3b8'
                          : '2px solid #38bdf8',
                        boxShadow: isHovered && !isLocked
                          ? '0 14px 30px -4px rgba(2, 132, 199, 0.45), 0 4px 12px rgba(12, 74, 110, 0.2)'
                          : isCurrent
                          ? '0 12px 28px -2px rgba(2, 132, 199, 0.4), 0 0 16px rgba(56, 189, 248, 0.3)'
                          : isCleared
                          ? '0 10px 24px -2px rgba(2, 132, 199, 0.35), 0 2px 6px rgba(12, 74, 110, 0.15)'
                          : isLocked
                          ? 'none'
                          : '0 4px 16px -2px rgba(56, 189, 248, 0.15), 0 2px 6px rgba(15, 23, 42, 0.04)',
                        transform: isHovered && !isLocked ? 'translateY(-3px)' : 'translateY(0)',
                        cursor: isLocked ? 'not-allowed' : 'pointer',
                        transition: 'all 0.22s cubic-bezier(0.4, 0, 0.2, 1)',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      {/* Top Row: Level Number (+ Lock icon if locked) */}
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.8rem',
                              fontWeight: 800,
                              color: isLocked ? '#64748b' : '#bae6fd',
                              letterSpacing: '0.04em',
                            }}
                          >
                            LEVEL {level.levelNumber.toString().padStart(2, '0')}
                          </span>

                          {isLocked && (
                            <Lock size={13} style={{ color: '#94a3b8' }} />
                          )}
                        </div>

                        {/* Level Title */}
                        <h3
                          style={{
                            fontSize: 'clamp(0.92rem, 1.05vw, 1.02rem)',
                            fontWeight: 800,
                            color: isLocked ? '#64748b' : '#ffffff',
                            lineHeight: 1.4,
                            margin: 0,
                            wordBreak: 'keep-all',
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          }}
                        >
                          {isEn ? level.title_en : level.title_ko}
                        </h3>
                      </div>

                      {/* Bottom Row: Syntax Code Keyword Tags (Exercism Concept Tagging, only if tags exist) */}
                      {level.syntaxTags && level.syntaxTags.length > 0 && (
                        <div
                          style={{
                            marginTop: 'auto',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            flexWrap: 'wrap',
                            borderTop: (isCleared || isCurrent)
                              ? '1px solid rgba(255, 255, 255, 0.22)'
                              : '1px solid #cbd5e1',
                            paddingTop: '8px',
                          }}
                        >
                          {level.syntaxTags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.72rem',
                                fontWeight: 700,
                                color: isLocked ? '#64748b' : '#0369a1',
                                background: isLocked ? '#e2e8f0' : 'rgba(255, 255, 255, 0.95)',
                                border: isLocked
                                  ? '1px solid #cbd5e1'
                                  : '1.5px solid #7dd3fc',
                                padding: '2px 6px',
                                borderRadius: '6px',
                                whiteSpace: 'nowrap',
                                boxShadow: isLocked ? 'none' : '0 1px 3px rgba(15, 23, 42, 0.08)',
                                transition: 'color 0.15s ease',
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
