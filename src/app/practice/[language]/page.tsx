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
                        borderRadius: '20px',
                        textDecoration: 'none',
                        opacity: isLocked ? 0.72 : 1,
                        background: isHovered && !isLocked
                          ? (isCleared
                              ? 'linear-gradient(135deg, #bbf7d0 0%, #86efac 100%)'
                              : isCurrent
                              ? 'linear-gradient(135deg, #bae6fd 0%, #7dd3fc 100%)'
                              : 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)')
                          : isCleared
                          ? 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)'
                          : isCurrent
                          ? 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)'
                          : isLocked
                          ? 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)'
                          : '#ffffff',
                        border: isHovered && !isLocked
                          ? (isCleared ? '2px solid #059669' : '2.5px solid #0284c7')
                          : isCleared
                          ? '2px solid #10b981'
                          : isCurrent
                          ? '2.5px solid #0284c7'
                          : isLocked
                          ? '1.5px dashed #94a3b8'
                          : '2px solid #38bdf8',
                        boxShadow: isHovered && !isLocked
                          ? (isCleared
                              ? '0 12px 28px -4px rgba(16, 185, 129, 0.35), 0 4px 10px rgba(6, 78, 59, 0.1)'
                              : '0 14px 30px -4px rgba(2, 132, 199, 0.4), 0 4px 12px rgba(12, 74, 110, 0.12)')
                          : isCurrent
                          ? '0 12px 26px -2px rgba(2, 132, 199, 0.32), 0 0 16px rgba(56, 189, 248, 0.25)'
                          : isCleared
                          ? '0 8px 22px -2px rgba(16, 185, 129, 0.25), 0 2px 6px rgba(6, 78, 59, 0.06)'
                          : isLocked
                          ? 'none'
                          : '0 4px 16px -2px rgba(56, 189, 248, 0.15), 0 2px 6px rgba(15, 23, 42, 0.04)',
                        transform: isHovered && !isLocked ? 'translateY(-3px)' : 'translateY(0)',
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
                              color: isLocked ? '#64748b' : isCleared ? '#047857' : '#0369a1',
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
                                background: '#059669',
                                color: '#ffffff',
                                border: 'none',
                                fontSize: '0.72rem',
                                fontWeight: 800,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px',
                                boxShadow: '0 2px 6px rgba(5, 150, 105, 0.35)',
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
                                background: '#0284c7',
                                color: '#ffffff',
                                border: 'none',
                                fontSize: '0.72rem',
                                fontWeight: 800,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px',
                                boxShadow: '0 2px 8px rgba(2, 132, 199, 0.4)',
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
                                background: '#cbd5e1',
                                color: '#475569',
                                border: '1px solid #94a3b8',
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
                            color: isLocked ? '#64748b' : isCleared ? '#064e3b' : isCurrent ? '#0c4a6e' : '#0f172a',
                            lineHeight: 1.45,
                            margin: 0,
                            wordBreak: 'keep-all',
                          }}
                        >
                          {isEn ? level.title_en : level.title_ko}
                        </h3>
                      </div>

                      {/* Bottom Row: Syntax Code Keyword Tags (Exercism Concept Tagging, only if tags exist) */}
                      {level.syntaxTags && level.syntaxTags.length > 0 && (
                        <div
                          style={{
                            marginTop: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            flexWrap: 'wrap',
                            borderTop: isCleared
                              ? '1px solid rgba(16, 185, 129, 0.35)'
                              : isCurrent
                              ? '1px solid rgba(2, 132, 199, 0.35)'
                              : '1px solid #cbd5e1',
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
                                color: isLocked ? '#64748b' : isCleared ? '#065f46' : isCurrent ? '#0369a1' : '#334155',
                                background: isLocked ? '#e2e8f0' : '#ffffff',
                                border: isLocked
                                  ? '1px solid #cbd5e1'
                                  : isCleared
                                  ? '1.5px solid #34d399'
                                  : isCurrent
                                  ? '1.5px solid #38bdf8'
                                  : '1px solid #cbd5e1',
                                padding: '2px 7px',
                                borderRadius: '6px',
                                whiteSpace: 'nowrap',
                                boxShadow: isLocked ? 'none' : '0 1px 3px rgba(15, 23, 42, 0.05)',
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
