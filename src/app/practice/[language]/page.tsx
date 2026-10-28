'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Play,
  Lock,
  Compass,
  Layers,
  Code2,
  ChevronRight,
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

  // View Mode: 'roadmap' (2번) | 'list' (3번) | 'studio' (4번)
  type ViewMode = 'roadmap' | 'list' | 'studio';
  const [viewMode, setViewMode] = useState<ViewMode>('roadmap');
  const [selectedLevelNum, setSelectedLevelNum] = useState<number>(2);

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

  // Sync selected level with active level when loaded
  useEffect(() => {
    if (currentActiveLevel) {
      setSelectedLevelNum(currentActiveLevel);
    }
  }, [currentActiveLevel]);

  // Selected level details for Studio View
  const selectedLevelInfo = useMemo(() => {
    for (const sec of sections) {
      for (const lvl of sec.levels) {
        if (lvl.levelNumber === selectedLevelNum) {
          return {
            section: sec,
            level: lvl,
            isCleared: userProgress.clearedLevels.has(lvl.levelNumber),
            isCurrent: !userProgress.clearedLevels.has(lvl.levelNumber) && (lvl.levelNumber === currentActiveLevel),
            isLocked: !userProgress.clearedLevels.has(lvl.levelNumber) && (lvl.levelNumber !== currentActiveLevel),
          };
        }
      }
    }
    const firstSec = sections[0];
    const firstLvl = firstSec?.levels[0];
    return {
      section: firstSec,
      level: firstLvl,
      isCleared: userProgress.clearedLevels.has(1),
      isCurrent: currentActiveLevel === 1,
      isLocked: false,
    };
  }, [sections, selectedLevelNum, userProgress, currentActiveLevel]);

  const clearedCount = userProgress.clearedLevels.size;
  const progressPercent = totalLevelsCount > 0 ? Math.min(100, Math.round((clearedCount / totalLevelsCount) * 100)) : 0;

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '36px 24px 100px' }}>
      {/* Responsive Grid & Calm Active Card Style */}
      <style>{`
        .current-level-active {
          border-width: 2.5px !important;
          border-color: #38bdf8 !important;
          box-shadow: 0 4px 20px -2px rgba(2, 132, 199, 0.35) !important;
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

      {/* View Switcher Controls (Option 2: Roadmap, Option 3: List, Option 4: Studio) */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '26px',
          flexWrap: 'wrap',
          gap: '14px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#334155' }}>
            {isEn ? 'Curriculum Layout' : '레이아웃 보기'}:
          </span>
        </div>

        {/* Segmented Control Pill */}
        <div
          style={{
            display: 'inline-flex',
            background: 'rgba(255, 255, 255, 0.9)',
            padding: '4px',
            borderRadius: '14px',
            border: '1.5px solid #cbd5e1',
            boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
            gap: '4px',
          }}
        >
          <button
            type="button"
            onClick={() => setViewMode('roadmap')}
            style={{
              padding: '8px 16px',
              borderRadius: '10px',
              border: 'none',
              background: viewMode === 'roadmap' ? '#0284c7' : 'transparent',
              color: viewMode === 'roadmap' ? '#ffffff' : '#475569',
              fontSize: '0.84rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.15s ease',
              boxShadow: viewMode === 'roadmap' ? '0 2px 8px rgba(2, 132, 199, 0.35)' : 'none',
            }}
          >
            <Compass size={15} />
            <span>{isEn ? 'Roadmap (Option 2)' : '로드맵 뷰 (2번)'}</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode('list')}
            style={{
              padding: '8px 16px',
              borderRadius: '10px',
              border: 'none',
              background: viewMode === 'list' ? '#0284c7' : 'transparent',
              color: viewMode === 'list' ? '#ffffff' : '#475569',
              fontSize: '0.84rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.15s ease',
              boxShadow: viewMode === 'list' ? '0 2px 8px rgba(2, 132, 199, 0.35)' : 'none',
            }}
          >
            <Layers size={15} />
            <span>{isEn ? 'List (Option 3)' : '리스트 뷰 (3번)'}</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode('studio')}
            style={{
              padding: '8px 16px',
              borderRadius: '10px',
              border: 'none',
              background: viewMode === 'studio' ? '#0284c7' : 'transparent',
              color: viewMode === 'studio' ? '#ffffff' : '#475569',
              fontSize: '0.84rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.15s ease',
              boxShadow: viewMode === 'studio' ? '0 2px 8px rgba(2, 132, 199, 0.35)' : 'none',
            }}
          >
            <Code2 size={15} />
            <span>{isEn ? 'Studio (Option 4)' : '스튜디오 뷰 (4번)'}</span>
          </button>
        </div>
      </div>

      {/* ====================================================================
          VIEW 1: ROADMAP TIMELINE (OPTION 2 - DEFAULT)
          ==================================================================== */}
      {viewMode === 'roadmap' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '38px' }}>
          {sections.map((section) => {
            const sectionClearedCount = section.levels.filter((l) => userProgress.clearedLevels.has(l.levelNumber)).length;
            const isSectionComplete = sectionClearedCount === section.levels.length && section.levels.length > 0;

            return (
              <div key={section.id}>
                {/* Section Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '20px',
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

                {/* Timeline Track & Cards */}
                <div style={{ position: 'relative', paddingLeft: '52px' }}>
                  {/* Continuous Vertical Line */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '18px',
                      top: '20px',
                      bottom: '24px',
                      width: '2px',
                      background: '#cbd5e1',
                      zIndex: 0,
                    }}
                  />

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {section.levels.map((level) => {
                      const isCleared = userProgress.clearedLevels.has(level.levelNumber);
                      const isCurrent = !isCleared && (level.levelNumber === currentActiveLevel);
                      const isLocked = !isCleared && !isCurrent;
                      const isHovered = hoveredLevelNum === level.levelNumber;

                      return (
                        <div key={level.levelNumber} style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                          {/* Node Icon on Timeline */}
                          <div
                            style={{
                              position: 'absolute',
                              left: '-52px',
                              width: '38px',
                              height: '38px',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              background: isCleared
                                ? '#0284c7'
                                : isCurrent
                                ? '#0284c7'
                                : '#e2e8f0',
                              color: isCleared || isCurrent ? '#ffffff' : '#94a3b8',
                              border: isCurrent
                                ? '3px solid #38bdf8'
                                : isCleared
                                ? '2px solid #7dd3fc'
                                : '2px solid #cbd5e1',
                              boxShadow: isCurrent
                                ? '0 0 16px rgba(56, 189, 248, 0.65)'
                                : isCleared
                                ? '0 2px 6px rgba(2, 132, 199, 0.25)'
                                : 'none',
                              zIndex: 2,
                              transition: 'all 0.2s ease',
                            }}
                          >
                            {isCleared ? (
                              <CheckCircle2 size={18} />
                            ) : isCurrent ? (
                              <Play size={15} fill="currentColor" />
                            ) : (
                              <Lock size={14} />
                            )}
                          </div>

                          {/* Horizontal Level Card */}
                          <Link
                            href={isLocked ? '#' : `/practice/${rawLang}/${level.levelNumber}`}
                            onClick={(e) => {
                              if (isLocked) e.preventDefault();
                            }}
                            onMouseEnter={() => !isLocked && setHoveredLevelNum(level.levelNumber)}
                            onMouseLeave={() => setHoveredLevelNum(null)}
                            style={{
                              flex: 1,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              padding: '16px 24px',
                              borderRadius: '16px',
                              textDecoration: 'none',
                              opacity: isLocked ? 0.72 : 1,
                              background: isHovered && !isLocked
                                ? (isCurrent
                                    ? 'linear-gradient(135deg, #0369a1 0%, #075985 100%)'
                                    : isCleared
                                    ? '#f0f9ff'
                                    : '#ffffff')
                                : isCurrent
                                ? 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)'
                                : isCleared
                                ? '#ffffff'
                                : 'rgba(255, 255, 255, 0.65)',
                              border: isHovered && !isLocked
                                ? (isCurrent ? '2px solid #7dd3fc' : '1.5px solid #0284c7')
                                : isCurrent
                                ? '2px solid #38bdf8'
                                : isCleared
                                ? '1.5px solid #cbd5e1'
                                : '1px dashed #cbd5e1',
                              boxShadow: isHovered && !isLocked
                                ? '0 8px 20px -2px rgba(2, 132, 199, 0.25)'
                                : isCurrent
                                ? '0 6px 18px -2px rgba(2, 132, 199, 0.3)'
                                : '0 2px 6px rgba(15, 23, 42, 0.03)',
                              transform: isHovered && !isLocked ? 'translateX(4px)' : 'translateX(0)',
                              cursor: isLocked ? 'not-allowed' : 'pointer',
                              transition: 'all 0.18s ease',
                              flexWrap: 'wrap',
                              gap: '12px',
                            }}
                          >
                            {/* Left: Level Number + Title */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                              <span
                                style={{
                                  fontFamily: 'var(--font-mono)',
                                  fontSize: '0.8rem',
                                  fontWeight: 800,
                                  color: isCurrent ? '#bae6fd' : isCleared ? '#0284c7' : '#94a3b8',
                                  letterSpacing: '0.04em',
                                  padding: '3px 8px',
                                  borderRadius: '6px',
                                  background: isCurrent ? 'rgba(255, 255, 255, 0.12)' : isCleared ? '#e0f2fe' : '#e2e8f0',
                                }}
                              >
                                LV {level.levelNumber.toString().padStart(2, '0')}
                              </span>

                              <h3
                                style={{
                                  fontSize: '1rem',
                                  fontWeight: 800,
                                  color: isCurrent ? '#ffffff' : isLocked ? '#64748b' : '#0f172a',
                                  margin: 0,
                                  lineHeight: 1.4,
                                }}
                              >
                                {isEn ? level.title_en : level.title_ko}
                              </h3>

                              {/* Syntax Tags */}
                              {level.syntaxTags && level.syntaxTags.length > 0 && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginLeft: '6px' }}>
                                  {level.syntaxTags.map((tag, tIdx) => (
                                    <span
                                      key={tIdx}
                                      style={{
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.72rem',
                                        fontWeight: 700,
                                        color: isCurrent ? '#0369a1' : isLocked ? '#64748b' : '#475569',
                                        background: isCurrent ? '#ffffff' : isLocked ? '#e2e8f0' : '#f8fafc',
                                        border: isCurrent ? '1px solid #7dd3fc' : '1px solid #cbd5e1',
                                        padding: '2px 6px',
                                        borderRadius: '5px',
                                      }}
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>

                            {/* Right: Action Button */}
                            <div>
                              {isCurrent ? (
                                <span
                                  style={{
                                    padding: '6px 14px',
                                    borderRadius: '8px',
                                    background: '#38bdf8',
                                    color: '#082f49',
                                    fontSize: '0.78rem',
                                    fontWeight: 800,
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    boxShadow: '0 2px 6px rgba(56, 189, 248, 0.4)',
                                  }}
                                >
                                  <Play size={12} fill="currentColor" />
                                  <span>{isEn ? 'Start Level' : '도전하기'}</span>
                                </span>
                              ) : isCleared ? (
                                <span
                                  style={{
                                    padding: '6px 12px',
                                    borderRadius: '8px',
                                    background: '#ffffff',
                                    color: '#0284c7',
                                    border: '1px solid #7dd3fc',
                                    fontSize: '0.78rem',
                                    fontWeight: 700,
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                  }}
                                >
                                  <CheckCircle2 size={13} />
                                  <span>{isEn ? 'Review' : '복습하기'}</span>
                                </span>
                              ) : (
                                <span
                                  style={{
                                    padding: '6px 12px',
                                    borderRadius: '8px',
                                    background: '#e2e8f0',
                                    color: '#94a3b8',
                                    fontSize: '0.76rem',
                                    fontWeight: 700,
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                  }}
                                >
                                  <Lock size={12} />
                                  <span>{isEn ? 'Locked' : '잠김'}</span>
                                </span>
                              )}
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ====================================================================
          VIEW 2: CURRICULUM LIST (OPTION 3)
          ==================================================================== */}
      {viewMode === 'list' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {sections.map((section) => {
            const sectionClearedCount = section.levels.filter((l) => userProgress.clearedLevels.has(l.levelNumber)).length;
            const isSectionComplete = sectionClearedCount === section.levels.length && section.levels.length > 0;

            return (
              <div
                key={section.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  border: '1.5px solid #cbd5e1',
                  boxShadow: '0 4px 16px -2px rgba(15, 23, 42, 0.05)',
                  overflow: 'hidden',
                }}
              >
                {/* Section Header Row */}
                <div
                  style={{
                    padding: '16px 24px',
                    background: '#f8fafc',
                    borderBottom: '1.5px solid #cbd5e1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '12px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span
                      style={{
                        padding: '3px 9px',
                        borderRadius: '6px',
                        background: isSectionComplete ? '#dcfce7' : '#e0f2fe',
                        color: isSectionComplete ? '#15803d' : '#0284c7',
                        border: `1px solid ${isSectionComplete ? '#86efac' : '#7dd3fc'}`,
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.76rem',
                        fontWeight: 800,
                      }}
                    >
                      SECTION 0{section.sectionNumber}
                    </span>
                    <h3 style={{ fontSize: '1.08rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                      {isEn ? section.title_en : section.title_ko}
                    </h3>
                  </div>

                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748b' }}>
                    {sectionClearedCount} / {section.levels.length} {isEn ? 'Cleared' : '완료'}
                  </span>
                </div>

                {/* Level Rows */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {section.levels.map((level, lIdx) => {
                    const isCleared = userProgress.clearedLevels.has(level.levelNumber);
                    const isCurrent = !isCleared && (level.levelNumber === currentActiveLevel);
                    const isLocked = !isCleared && !isCurrent;
                    const isLast = lIdx === section.levels.length - 1;

                    return (
                      <Link
                        key={level.levelNumber}
                        href={isLocked ? '#' : `/practice/${rawLang}/${level.levelNumber}`}
                        onClick={(e) => {
                          if (isLocked) e.preventDefault();
                        }}
                        style={{
                          padding: '15px 24px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          textDecoration: 'none',
                          borderBottom: isLast ? 'none' : '1px solid #f1f5f9',
                          background: isCurrent ? '#f0f9ff' : '#ffffff',
                          opacity: isLocked ? 0.6 : 1,
                          transition: 'background 0.15s ease',
                          cursor: isLocked ? 'not-allowed' : 'pointer',
                          flexWrap: 'wrap',
                          gap: '12px',
                        }}
                        onMouseEnter={(e) => {
                          if (!isLocked && !isCurrent) e.currentTarget.style.background = '#f8fafc';
                        }}
                        onMouseLeave={(e) => {
                          if (!isLocked && !isCurrent) e.currentTarget.style.background = '#ffffff';
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                          {/* Status Icon */}
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '22px' }}>
                            {isCleared ? (
                              <CheckCircle2 size={18} color="#0284c7" />
                            ) : isCurrent ? (
                              <Play size={16} color="#0284c7" fill="#0284c7" />
                            ) : (
                              <Lock size={15} color="#94a3b8" />
                            )}
                          </div>

                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.8rem',
                              fontWeight: 800,
                              color: isCurrent ? '#0284c7' : '#64748b',
                            }}
                          >
                            LEVEL {level.levelNumber.toString().padStart(2, '0')}
                          </span>

                          <span style={{ fontSize: '0.96rem', fontWeight: 700, color: isLocked ? '#64748b' : '#0f172a' }}>
                            {isEn ? level.title_en : level.title_ko}
                          </span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          {level.syntaxTags && level.syntaxTags.length > 0 && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                              {level.syntaxTags.map((tag, tIdx) => (
                                <span
                                  key={tIdx}
                                  style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.72rem',
                                    fontWeight: 700,
                                    color: '#475569',
                                    background: '#f1f5f9',
                                    border: '1px solid #cbd5e1',
                                    padding: '2px 6px',
                                    borderRadius: '5px',
                                  }}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}

                          <ChevronRight size={16} color={isCurrent ? '#0284c7' : '#94a3b8'} />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ====================================================================
          VIEW 3: STUDIO SPLIT (OPTION 4)
          ==================================================================== */}
      {viewMode === 'studio' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(320px, 380px) 1fr', gap: '24px', alignItems: 'start' }}>
          {/* Left: Level Selector Tree */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              border: '1.5px solid #cbd5e1',
              padding: '20px',
              boxShadow: '0 4px 16px -2px rgba(15, 23, 42, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              maxHeight: 'calc(100vh - 140px)',
              overflowY: 'auto',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid #e2e8f0' }}>
              <span style={{ fontSize: '0.86rem', fontWeight: 800, color: '#334155' }}>
                {isEn ? 'Level Directory' : '레벨 목차 목록'}
              </span>
              <span style={{ fontSize: '0.78rem', color: '#64748b' }}>
                {clearedCount} / {totalLevelsCount} 완료
              </span>
            </div>

            {sections.map((section) => (
              <div key={section.id}>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748b', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  SECTION 0{section.sectionNumber}: {isEn ? section.title_en : section.title_ko}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {section.levels.map((level) => {
                    const isCleared = userProgress.clearedLevels.has(level.levelNumber);
                    const isCurrent = !isCleared && (level.levelNumber === currentActiveLevel);
                    const isLocked = !isCleared && !isCurrent;
                    const isSelected = selectedLevelNum === level.levelNumber;

                    return (
                      <button
                        key={level.levelNumber}
                        type="button"
                        onClick={() => setSelectedLevelNum(level.levelNumber)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '10px 14px',
                          borderRadius: '10px',
                          border: isSelected ? '1.5px solid #0284c7' : '1px solid transparent',
                          background: isSelected ? '#e0f2fe' : isCurrent ? '#f0f9ff' : 'transparent',
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.15s ease',
                          opacity: isLocked ? 0.6 : 1,
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
                          {isCleared ? (
                            <CheckCircle2 size={16} color="#0284c7" style={{ flexShrink: 0 }} />
                          ) : isCurrent ? (
                            <Play size={14} color="#0284c7" fill="#0284c7" style={{ flexShrink: 0 }} />
                          ) : (
                            <Lock size={14} color="#94a3b8" style={{ flexShrink: 0 }} />
                          )}
                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.78rem',
                              fontWeight: 800,
                              color: isSelected || isCurrent ? '#0284c7' : '#64748b',
                              flexShrink: 0,
                            }}
                          >
                            LV {level.levelNumber.toString().padStart(2, '0')}
                          </span>
                          <span
                            style={{
                              fontSize: '0.86rem',
                              fontWeight: isSelected ? 800 : 600,
                              color: isSelected ? '#0369a1' : isLocked ? '#64748b' : '#0f172a',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {isEn ? level.title_en : level.title_ko}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Mission Studio Preview Card */}
          {selectedLevelInfo.level && (
            <div
              style={{
                position: 'sticky',
                top: '24px',
                background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                borderRadius: '24px',
                border: '2px solid #38bdf8',
                padding: '36px 40px',
                color: '#ffffff',
                boxShadow: '0 16px 36px -4px rgba(2, 132, 199, 0.35)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
                <span
                  style={{
                    padding: '4px 12px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.15)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    color: '#bae6fd',
                    letterSpacing: '0.04em',
                  }}
                >
                  LEVEL {selectedLevelInfo.level.levelNumber.toString().padStart(2, '0')}
                </span>

                <span
                  style={{
                    padding: '4px 12px',
                    borderRadius: '8px',
                    background: selectedLevelInfo.isCleared
                      ? '#ffffff'
                      : selectedLevelInfo.isCurrent
                      ? '#38bdf8'
                      : 'rgba(255, 255, 255, 0.12)',
                    color: selectedLevelInfo.isCleared
                      ? '#0284c7'
                      : selectedLevelInfo.isCurrent
                      ? '#082f49'
                      : '#cbd5e1',
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                  }}
                >
                  {selectedLevelInfo.isCleared ? (
                    <>
                      <CheckCircle2 size={13} />
                      <span>{isEn ? 'Cleared' : '완료된 레벨'}</span>
                    </>
                  ) : selectedLevelInfo.isCurrent ? (
                    <>
                      <Play size={11} fill="currentColor" />
                      <span>{isEn ? 'Current Target' : '현재 도전 레벨'}</span>
                    </>
                  ) : (
                    <>
                      <Lock size={12} />
                      <span>{isEn ? 'Locked' : '잠긴 레벨'}</span>
                    </>
                  )}
                </span>
              </div>

              <div style={{ fontSize: '0.86rem', color: '#bae6fd', fontWeight: 700, marginBottom: '6px' }}>
                SECTION 0{selectedLevelInfo.section?.sectionNumber}: {isEn ? selectedLevelInfo.section?.title_en : selectedLevelInfo.section?.title_ko}
              </div>

              <h2 style={{ fontSize: '1.65rem', fontWeight: 800, margin: '0 0 16px 0', lineHeight: 1.35 }}>
                {isEn ? selectedLevelInfo.level.title_en : selectedLevelInfo.level.title_ko}
              </h2>

              <p style={{ fontSize: '0.94rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, marginBottom: '28px' }}>
                {isEn 
                  ? (selectedLevelInfo.level.description_en || 'Learn fundamental concepts and practical coding patterns with hands-on typing exercises.')
                  : (selectedLevelInfo.level.description_ko || '핵심 문법과 제어 구조의 원리를 직접 손끝으로 타자 치며 완벽하게 체득하는 실전 학습 스테이지입니다.')}
              </p>

              {/* Syntax Keyword Tags */}
              {selectedLevelInfo.level.syntaxTags && selectedLevelInfo.level.syntaxTags.length > 0 && (
                <div style={{ marginBottom: '32px' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#bae6fd', marginBottom: '8px' }}>
                    {isEn ? 'Syntax Concepts to Master:' : '학습 핵심 문법:'}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {selectedLevelInfo.level.syntaxTags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          color: '#0369a1',
                          background: '#ffffff',
                          border: '1.5px solid #7dd3fc',
                          padding: '4px 10px',
                          borderRadius: '8px',
                          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.12)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Button */}
              {selectedLevelInfo.isLocked ? (
                <div
                  style={{
                    padding: '14px 24px',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#cbd5e1',
                    fontSize: '0.94rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    cursor: 'not-allowed',
                  }}
                >
                  <Lock size={16} />
                  <span>{isEn ? 'Complete previous levels to unlock' : '이전 레벨을 완료하여 잠금을 해제하세요'}</span>
                </div>
              ) : (
                <Link
                  href={`/practice/${rawLang}/${selectedLevelInfo.level.levelNumber}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '15px 28px',
                    borderRadius: '14px',
                    background: '#38bdf8',
                    color: '#082f49',
                    fontSize: '1rem',
                    fontWeight: 800,
                    textDecoration: 'none',
                    boxShadow: '0 4px 16px rgba(56, 189, 248, 0.45)',
                    transition: 'all 0.18s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.background = '#7dd3fc';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.background = '#38bdf8';
                  }}
                >
                  <Play size={18} fill="currentColor" />
                  <span>
                    {selectedLevelInfo.isCleared
                      ? (isEn ? `Review Level ${selectedLevelInfo.level.levelNumber}` : `Level ${selectedLevelInfo.level.levelNumber} 복습하기`)
                      : (isEn ? `Start Level ${selectedLevelInfo.level.levelNumber}` : `Level ${selectedLevelInfo.level.levelNumber} 학습 시작하기`)}
                  </span>
                </Link>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
