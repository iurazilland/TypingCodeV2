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
          padding: '24px 30px',
          borderRadius: '22px',
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1, minWidth: '300px' }}>
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
                  borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
                  flexWrap: 'wrap',
                  gap: '12px',
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
                      fontSize: '0.78rem',
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
                      <span>{isEn ? 'Section Complete' : '섹션 완료'}</span>
                    </span>
                  ) : (
                    <span style={{ color: '#94a3b8', fontWeight: 600 }}>
                      {sectionClearedCount} / {section.levels.length} {isEn ? 'Cleared' : '완료'}
                    </span>
                  )}
                </div>
              </div>

              {/* Concept Level Cards Grid (Exercism Style: 1 Card = 1 Level, Syntax Keyword Chips, No Button) */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
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
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: '138px',
                        padding: '20px 22px',
                        borderRadius: '18px',
                        textDecoration: 'none',
                        opacity: isLocked ? 0.45 : 1,
                        background: isHovered && !isLocked
                          ? 'rgba(30, 41, 59, 0.85)'
                          : isCleared
                          ? 'rgba(16, 185, 129, 0.03)'
                          : isLocked
                          ? 'rgba(15, 23, 42, 0.4)'
                          : 'var(--bg-surface, #1e293b)',
                        border: isHovered && !isLocked
                          ? `1.5px solid ${matchedTrack.color}`
                          : isCleared
                          ? '1px solid rgba(16, 185, 129, 0.28)'
                          : isCurrent
                          ? `1.5px solid ${matchedTrack.color}75`
                          : isLocked
                          ? '1px solid rgba(255, 255, 255, 0.04)'
                          : '1px solid rgba(255, 255, 255, 0.08)',
                        boxShadow: isHovered && !isLocked
                          ? `0 12px 28px rgba(0, 0, 0, 0.45), 0 0 20px ${matchedTrack.color}25`
                          : isCurrent
                          ? `0 4px 16px ${matchedTrack.color}15`
                          : isLocked
                          ? 'none'
                          : '0 4px 14px rgba(0, 0, 0, 0.2)',
                        transform: isHovered && !isLocked ? 'translateY(-4px)' : 'translateY(0)',
                        cursor: isLocked ? 'not-allowed' : 'pointer',
                        transition: 'all 0.22s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      {/* Top Row: Level Number + Status Badge (완료, 도전, 잠김) */}
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.82rem',
                              fontWeight: 800,
                              color: isLocked ? '#64748b' : isCleared ? '#34d399' : matchedTrack.color,
                              letterSpacing: '0.04em',
                            }}
                          >
                            LEVEL {level.levelNumber.toString().padStart(2, '0')}
                          </span>

                          {/* Status Badge: 완료 / 도전 / 잠김 */}
                          {isCleared ? (
                            <span
                              style={{
                                padding: '3px 8px',
                                borderRadius: '7px',
                                background: 'rgba(16, 185, 129, 0.16)',
                                color: '#34d399',
                                border: '1px solid rgba(16, 185, 129, 0.35)',
                                fontSize: '0.72rem',
                                fontWeight: 800,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px',
                              }}
                            >
                              <CheckCircle2 size={12} />
                              <span>{isEn ? 'Cleared' : '완료'}</span>
                            </span>
                          ) : isCurrent ? (
                            <span
                              style={{
                                padding: '3px 8px',
                                borderRadius: '7px',
                                background: `${matchedTrack.color}20`,
                                color: matchedTrack.color,
                                border: `1px solid ${matchedTrack.color}45`,
                                fontSize: '0.72rem',
                                fontWeight: 800,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px',
                              }}
                            >
                              <Play size={10} fill="currentColor" />
                              <span>{isEn ? 'Current' : '도전'}</span>
                            </span>
                          ) : (
                            <span
                              style={{
                                padding: '3px 8px',
                                borderRadius: '7px',
                                background: 'rgba(255, 255, 255, 0.04)',
                                color: '#64748b',
                                border: '1px solid rgba(255, 255, 255, 0.06)',
                                fontSize: '0.72rem',
                                fontWeight: 700,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px',
                              }}
                            >
                              <Lock size={11} />
                              <span>{isEn ? 'Locked' : '잠김'}</span>
                            </span>
                          )}
                        </div>

                        {/* Level Title */}
                        <h3
                          style={{
                            fontSize: '1.02rem',
                            fontWeight: 800,
                            color: isLocked ? '#64748b' : '#f8fafc',
                            lineHeight: 1.45,
                            margin: 0,
                            wordBreak: 'keep-all',
                          }}
                        >
                          {isEn ? level.title_en : level.title_ko}
                        </h3>
                      </div>

                      {/* Bottom Row: Syntax Code Keyword Tags (Exercism Concept Tagging) */}
                      <div
                        style={{
                          marginTop: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          flexWrap: 'wrap',
                          borderTop: isLocked ? '1px solid rgba(255, 255, 255, 0.03)' : '1px solid rgba(255, 255, 255, 0.05)',
                          paddingTop: '12px',
                        }}
                      >
                        {level.syntaxTags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.74rem',
                              fontWeight: 700,
                              color: isLocked ? '#475569' : isHovered ? '#38bdf8' : '#94a3b8',
                              background: isLocked ? 'rgba(15, 23, 42, 0.4)' : 'rgba(15, 23, 42, 0.7)',
                              border: isLocked ? '1px solid rgba(255, 255, 255, 0.03)' : '1px solid rgba(255, 255, 255, 0.08)',
                              padding: '2px 7px',
                              borderRadius: '6px',
                              whiteSpace: 'nowrap',
                              transition: 'color 0.15s ease',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
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
