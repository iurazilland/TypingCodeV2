'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  CheckCircle2, 
} from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { CURRICULUM_TRACKS, CourseModule, LanguageTrack } from '@/lib/curriculum';
import LanguageIcon from '@/components/LanguageIcon';
import { getCategoryName } from '@/lib/curriculumTranslations';
import { getCourseSections, LevelSection } from '@/lib/curriculumSections';

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
  }>({
    clearedLevels: new Set(),
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const cleared = new Set<number>();

      // Scan per-level steps (each level has 10 steps; if >= 10, marked as cleared)
      for (let lvl = 1; lvl <= 50; lvl++) {
        const stepVal = parseInt(localStorage.getItem(`unlocked_step_${rawLang}_${lvl}`) || '0', 10);
        if (stepVal >= 10) {
          cleared.add(lvl);
        }
      }

      setUserProgress({
        clearedLevels: cleared,
      });
    } catch (e) {
      console.error(e);
    }
  }, [rawLang]);

  const clearedCount = userProgress.clearedLevels.size;
  const progressPercent = totalLevelsCount > 0 ? Math.min(100, Math.round((clearedCount / totalLevelsCount) * 100)) : 0;

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '36px 24px 100px' }}>
      {/* Top Back Navigation Link (Left-aligned) */}
      <div style={{ marginBottom: '24px' }}>
        <Link
          href="/languages"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#94a3b8',
            fontSize: '0.88rem',
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

      {/* Course Overview Bento Pod with Learning Progress */}
      <div
        style={{
          padding: '26px 32px',
          borderRadius: '24px',
          background: 'rgba(15, 23, 42, 0.65)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)',
          marginBottom: '36px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
        }}
      >
        {/* Left: Language Icon + Title + Description */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '22px', flex: 1, minWidth: '300px' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '18px',
              background: 'rgba(15, 23, 42, 0.8)',
              border: `1.5px solid ${matchedTrack.color}60`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 6px 20px ${matchedTrack.color}30`,
              flexShrink: 0,
            }}
          >
            <LanguageIcon language={matchedTrack.id} size={38} />
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
              <h1 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.75rem)', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
                {isEn ? matchedModule.title_en : matchedModule.title_ko}
              </h1>
              <span
                style={{
                  padding: '3px 10px',
                  borderRadius: '10px',
                  background: 'rgba(15, 23, 42, 0.7)',
                  color: matchedTrack.color,
                  border: `1px solid ${matchedTrack.color}50`,
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
                  border: `1px solid ${matchedModule.difficultyColor || '#10b981'}45`,
                  fontSize: '0.78rem',
                  fontWeight: 800,
                }}
              >
                {matchedModule.difficulty}
              </span>
            </div>
            <p style={{
              color: '#cbd5e1',
              fontSize: '0.92rem',
              lineHeight: 1.55,
              margin: 0,
              wordBreak: 'keep-all',
            }}>
              {isEn ? matchedModule.description_en : matchedModule.description_ko}
            </p>
          </div>
        </div>

        {/* Right: Progress Meter */}
        <div
          style={{
            background: 'rgba(11, 19, 41, 0.65)',
            padding: '16px 22px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            flexShrink: 0,
            minWidth: '220px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.76rem', color: '#94a3b8', fontWeight: 600, letterSpacing: '0.04em' }}>
              {isEn ? 'CURRICULUM PROGRESS' : '학습 달성률'}
            </span>
            <span style={{ fontSize: '0.88rem', color: '#f8fafc', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
              {clearedCount} / {totalLevelsCount} ({progressPercent}%)
            </span>
          </div>
          <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px', overflow: 'hidden' }}>
            <div
              style={{
                width: `${progressPercent}%`,
                height: '100%',
                background: progressPercent === 100 ? '#10b981' : `linear-gradient(90deg, ${matchedTrack.color}, #10b981)`,
                borderRadius: '4px',
                transition: 'width 0.3s ease',
              }}
            />
          </div>
        </div>
      </div>

      {/* Bento Grid Chapter Containers (Apple / Linear Bento Style) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        {sections.map((section) => {
          const sectionClearedCount = section.levels.filter((l) => userProgress.clearedLevels.has(l.levelNumber)).length;
          const isSectionComplete = sectionClearedCount === section.levels.length && section.levels.length > 0;

          return (
            <div
              key={section.id}
              style={{
                borderRadius: '24px',
                background: 'rgba(15, 23, 42, 0.55)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(16px)',
                padding: '28px 30px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Subtle decorative glow from top-left */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '320px',
                  height: '120px',
                  background: `radial-gradient(ellipse at top left, ${matchedTrack.color}15, transparent 70%)`,
                  pointerEvents: 'none',
                }}
              />

              {/* Section Header Row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                  flexWrap: 'wrap',
                  gap: '12px',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span
                    style={{
                      padding: '4px 11px',
                      borderRadius: '8px',
                      background: isSectionComplete ? 'rgba(16, 185, 129, 0.16)' : `${matchedTrack.color}18`,
                      color: isSectionComplete ? '#34d399' : matchedTrack.color,
                      border: `1px solid ${isSectionComplete ? 'rgba(16, 185, 129, 0.35)' : matchedTrack.color + '35'}`,
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.76rem',
                      fontWeight: 800,
                      letterSpacing: '0.04em',
                    }}
                  >
                    SECTION 0{section.sectionNumber}
                  </span>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f8fafc', margin: 0, letterSpacing: '-0.01em' }}>
                    {isEn ? section.title_en : section.title_ko}
                  </h2>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.84rem' }}>
                  {isSectionComplete ? (
                    <span style={{ color: '#34d399', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                      <CheckCircle2 size={15} />
                      <span>{isEn ? 'Section Cleared' : '섹션 전체 완료'}</span>
                    </span>
                  ) : (
                    <span style={{ color: '#94a3b8', fontWeight: 600 }}>
                      {sectionClearedCount} / {section.levels.length} {isEn ? 'Cleared' : '완료'}
                    </span>
                  )}
                </div>
              </div>

              {/* Level Cells Grid nested cleanly inside Bento Box */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                  gap: '14px',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {section.levels.map((level) => {
                  const isCleared = userProgress.clearedLevels.has(level.levelNumber);
                  const isHovered = hoveredLevelNum === level.levelNumber;

                  return (
                    <Link
                      key={level.levelNumber}
                      href={`/practice/${rawLang}/${level.levelNumber}`}
                      onMouseEnter={() => setHoveredLevelNum(level.levelNumber)}
                      onMouseLeave={() => setHoveredLevelNum(null)}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        minHeight: '106px',
                        padding: '18px 20px',
                        borderRadius: '16px',
                        textDecoration: 'none',
                        background: isHovered
                          ? 'rgba(255, 255, 255, 0.07)'
                          : isCleared
                          ? 'rgba(16, 185, 129, 0.04)'
                          : 'rgba(255, 255, 255, 0.03)',
                        border: isHovered
                          ? `1.5px solid ${matchedTrack.color}`
                          : isCleared
                          ? '1px solid rgba(16, 185, 129, 0.28)'
                          : '1px solid rgba(255, 255, 255, 0.06)',
                        boxShadow: isHovered
                          ? `0 10px 24px rgba(0, 0, 0, 0.4), 0 0 16px ${matchedTrack.color}30`
                          : 'none',
                        transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
                        cursor: 'pointer',
                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      {/* Level Number + Checkmark */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.8rem',
                            fontWeight: 800,
                            color: isCleared ? '#34d399' : matchedTrack.color,
                            letterSpacing: '0.04em',
                          }}
                        >
                          LEVEL {level.levelNumber.toString().padStart(2, '0')}
                        </span>

                        {isCleared && (
                          <span style={{ color: '#34d399', display: 'inline-flex', alignItems: 'center' }}>
                            <CheckCircle2 size={14} />
                          </span>
                        )}
                      </div>

                      {/* Level Title Only */}
                      <h3
                        style={{
                          fontSize: '0.98rem',
                          fontWeight: 800,
                          color: '#f8fafc',
                          lineHeight: 1.45,
                          margin: 0,
                          wordBreak: 'keep-all',
                        }}
                      >
                        {isEn ? level.title_en : level.title_ko}
                      </h3>
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
