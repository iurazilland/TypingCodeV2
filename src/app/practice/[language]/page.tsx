'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Play, 
  Lock, 
  ChevronRight,
  Moon,
  Sun,
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

  // Theme Mode: 'dark' (Plan A: Dimmed Dark) | 'light' (Plan B: Premium White)
  type ThemeMode = 'dark' | 'light';
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');
  const isDark = themeMode === 'dark';

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

  // Dynamic body background based on theme mode
  useEffect(() => {
    document.body.style.backgroundColor = isDark ? '#0b1120' : '#e2eff6';
    document.body.style.transition = 'background-color 0.25s ease';
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.transition = '';
    };
  }, [isDark]);

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
      {/* Top Header Bar: Back Link + Theme Comparison Switcher */}
      <div 
        style={{ 
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '14px',
        }}
      >
        <Link
          href="/languages"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: isDark ? '#cbd5e1' : '#475569',
            fontSize: '0.92rem',
            fontWeight: 700,
            transition: 'color 0.15s ease',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
          onMouseLeave={(e) => (e.currentTarget.style.color = isDark ? '#cbd5e1' : '#475569')}
        >
          <ArrowLeft size={16} />
          <span>{isEn ? 'Back to All Curriculum' : '전체 언어 학습과정으로 돌아가기'}</span>
        </Link>

        {/* Live Theme Switcher Pill (Plan A vs Plan B) */}
        <div
          style={{
            display: 'inline-flex',
            background: isDark ? '#172033' : '#ffffff',
            padding: '4px',
            borderRadius: '12px',
            border: isDark ? '1px solid #334155' : '1.5px solid #cbd5e1',
            boxShadow: isDark ? '0 4px 12px rgba(0, 0, 0, 0.3)' : '0 2px 8px rgba(15, 23, 42, 0.05)',
            gap: '4px',
            transition: 'all 0.2s ease',
          }}
        >
          <button
            type="button"
            onClick={() => setThemeMode('dark')}
            style={{
              padding: '6px 14px',
              borderRadius: '8px',
              border: 'none',
              background: isDark ? '#0284c7' : 'transparent',
              color: isDark ? '#ffffff' : '#64748b',
              fontSize: '0.82rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.15s ease',
              boxShadow: isDark ? '0 2px 8px rgba(2, 132, 199, 0.4)' : 'none',
            }}
          >
            <Moon size={14} />
            <span>{isEn ? 'Dimmed Dark (Plan A)' : '🌙 딤드 다크 (방안 A)'}</span>
          </button>

          <button
            type="button"
            onClick={() => setThemeMode('light')}
            style={{
              padding: '6px 14px',
              borderRadius: '8px',
              border: 'none',
              background: !isDark ? '#0284c7' : 'transparent',
              color: !isDark ? '#ffffff' : '#94a3b8',
              fontSize: '0.82rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.15s ease',
              boxShadow: !isDark ? '0 2px 8px rgba(2, 132, 199, 0.4)' : 'none',
            }}
          >
            <Sun size={14} />
            <span>{isEn ? 'Premium White (Plan B)' : '☀️ 프리미엄 화이트 (방안 B)'}</span>
          </button>
        </div>
      </div>

      {/* Course Overview Bento Pod with Learning Progress */}
      <div
        style={{
          padding: '28px 32px',
          borderRadius: '24px',
          background: isDark 
            ? 'linear-gradient(135deg, #172033 0%, #0f172a 100%)' 
            : 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
          border: isDark ? '1.5px solid #273549' : '2px solid #bae6fd',
          boxShadow: isDark 
            ? '0 12px 30px -4px rgba(0, 0, 0, 0.45)' 
            : '0 10px 25px -4px rgba(2, 132, 199, 0.08), 0 4px 12px rgba(15, 23, 42, 0.04)',
          marginBottom: '36px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
          transition: 'all 0.25s ease',
        }}
      >
        {/* Left: Language Icon + Title + Description */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1, minWidth: '300px' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '18px',
              background: isDark ? '#0f172a' : '#ffffff',
              border: isDark ? '1.5px solid #334155' : '1.5px solid #cbd5e1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: isDark ? '0 4px 12px rgba(0, 0, 0, 0.3)' : '0 4px 12px rgba(15, 23, 42, 0.06)',
              flexShrink: 0,
            }}
          >
            <LanguageIcon language={matchedTrack.id} size={38} />
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
              <h1 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.75rem)', fontWeight: 800, color: isDark ? '#ffffff' : '#0f172a', margin: 0 }}>
                {isEn ? matchedModule.title_en : matchedModule.title_ko}
              </h1>
              <span
                style={{
                  padding: '3px 10px',
                  borderRadius: '10px',
                  background: isDark ? '#0f172a' : '#ffffff',
                  color: isDark ? '#94a3b8' : '#334155',
                  border: isDark ? '1px solid #334155' : '1.5px solid #cbd5e1',
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
                  background: isDark ? 'rgba(16, 185, 129, 0.15)' : '#ffffff',
                  color: matchedModule.difficultyColor || '#10b981',
                  border: isDark 
                    ? `1px solid ${matchedModule.difficultyColor || '#34d399'}` 
                    : `1.5px solid ${matchedModule.difficultyColor || '#10b981'}`,
                  fontSize: '0.78rem',
                  fontWeight: 800,
                }}
              >
                {matchedModule.difficulty}
              </span>
            </div>
            <p style={{
              color: isDark ? '#94a3b8' : '#475569',
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
            background: isDark ? '#0f172a' : '#ffffff',
            padding: '16px 22px',
            borderRadius: '18px',
            border: isDark ? '1.5px solid #273549' : '1.5px solid #cbd5e1',
            boxShadow: isDark ? '0 4px 12px rgba(0, 0, 0, 0.3)' : '0 2px 8px rgba(15, 23, 42, 0.04)',
            flexShrink: 0,
            minWidth: '220px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.76rem', color: isDark ? '#94a3b8' : '#64748b', fontWeight: 700, letterSpacing: '0.04em' }}>
              {isEn ? 'CURRICULUM PROGRESS' : '학습 달성률'}
            </span>
            <span style={{ fontSize: '0.88rem', color: isDark ? '#ffffff' : '#0f172a', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
              {clearedCount} / {totalLevelsCount} ({progressPercent}%)
            </span>
          </div>
          <div style={{ width: '100%', height: '8px', background: isDark ? '#1e293b' : '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
            <div
              style={{
                width: `${progressPercent}%`,
                height: '100%',
                background: progressPercent === 100 ? '#10b981' : 'linear-gradient(90deg, #0284c7, #38bdf8)',
                borderRadius: '4px',
                transition: 'width 0.3s ease',
              }}
            />
          </div>
        </div>
      </div>

      {/* Curriculum Sections List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', maxWidth: '1120px', margin: '0 auto' }}>
        {sections.map((section) => {
          const sectionClearedCount = section.levels.filter((l) => userProgress.clearedLevels.has(l.levelNumber)).length;
          const totalSectionLevels = section.levels.length;
          const isSectionComplete = sectionClearedCount === totalSectionLevels && totalSectionLevels > 0;
          const hasActiveLevel = section.levels.some((l) => l.levelNumber === currentActiveLevel);

          return (
            <div
              key={section.id}
              style={{
                background: isDark ? '#172033' : '#ffffff',
                borderRadius: '20px',
                border: isDark 
                  ? (hasActiveLevel ? '2px solid #38bdf8' : '1.5px solid #273549') 
                  : (hasActiveLevel ? '2px solid #0284c7' : '1.5px solid #cbd5e1'),
                boxShadow: isDark
                  ? (hasActiveLevel 
                      ? '0 12px 30px -4px rgba(2, 132, 199, 0.3), 0 4px 12px rgba(0, 0, 0, 0.3)' 
                      : '0 6px 20px -2px rgba(0, 0, 0, 0.25)')
                  : (hasActiveLevel 
                      ? '0 10px 25px -4px rgba(2, 132, 199, 0.12), 0 4px 12px rgba(15, 23, 42, 0.05)' 
                      : '0 4px 16px -2px rgba(15, 23, 42, 0.05)'),
                overflow: 'hidden',
                transition: 'all 0.25s ease',
              }}
            >
              {/* Section Header Row */}
              <div
                style={{
                  padding: '16px 24px',
                  background: isDark
                    ? (hasActiveLevel ? 'linear-gradient(135deg, rgba(2, 132, 199, 0.2) 0%, #0f172a 100%)' : '#0f172a')
                    : (hasActiveLevel ? 'linear-gradient(135deg, rgba(2, 132, 199, 0.06) 0%, rgba(255, 255, 255, 0.95) 100%)' : '#f8fafc'),
                  borderBottom: isDark ? '1.5px solid #273549' : '1.5px solid #cbd5e1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span
                    style={{
                      padding: '4px 10px',
                      borderRadius: '8px',
                      background: isDark
                        ? (isSectionComplete ? 'rgba(16, 185, 129, 0.15)' : hasActiveLevel ? 'rgba(56, 189, 248, 0.15)' : 'rgba(148, 163, 184, 0.1)')
                        : (isSectionComplete ? '#dcfce7' : hasActiveLevel ? '#e0f2fe' : '#f1f5f9'),
                      color: isDark
                        ? (isSectionComplete ? '#34d399' : hasActiveLevel ? '#38bdf8' : '#94a3b8')
                        : (isSectionComplete ? '#15803d' : hasActiveLevel ? '#0284c7' : '#64748b'),
                      border: isDark
                        ? `1px solid ${isSectionComplete ? 'rgba(16, 185, 129, 0.4)' : hasActiveLevel ? 'rgba(56, 189, 248, 0.4)' : '#334155'}`
                        : `1.5px solid ${isSectionComplete ? '#86efac' : hasActiveLevel ? '#7dd3fc' : '#e2e8f0'}`,
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.76rem',
                      fontWeight: 800,
                      letterSpacing: '0.04em',
                    }}
                  >
                    SECTION {section.sectionNumber < 10 ? `0${section.sectionNumber}` : section.sectionNumber}
                  </span>
                  <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: isDark ? '#ffffff' : '#0f172a', margin: 0 }}>
                    {isEn ? section.title_en : section.title_ko}
                  </h2>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: isSectionComplete ? (isDark ? '#34d399' : '#15803d') : (isDark ? '#94a3b8' : '#64748b') }}>
                    {sectionClearedCount} / {totalSectionLevels} {isEn ? 'Cleared' : '완료'}
                  </span>
                  {isSectionComplete && (
                    <span
                      style={{
                        padding: '3px 8px',
                        borderRadius: '6px',
                        background: isDark ? 'rgba(16, 185, 129, 0.15)' : '#dcfce7',
                        color: isDark ? '#34d399' : '#15803d',
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        border: isDark ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid #86efac',
                      }}
                    >
                      <CheckCircle2 size={13} />
                      {isEn ? 'Complete' : '완료'}
                    </span>
                  )}
                </div>
              </div>

              {/* Level Rows */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {section.levels.map((level, lIdx) => {
                  const isCleared = userProgress.clearedLevels.has(level.levelNumber);
                  const isCurrent = !isCleared && (level.levelNumber === currentActiveLevel);
                  const isLocked = !isCleared && !isCurrent;
                  const isLast = lIdx === section.levels.length - 1;
                  const isHovered = hoveredLevelNum === level.levelNumber;

                  const rowContent = (
                    <div
                      onMouseEnter={() => setHoveredLevelNum(level.levelNumber)}
                      onMouseLeave={() => setHoveredLevelNum(null)}
                      style={{
                        padding: '16px 24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderBottom: isLast ? 'none' : (isDark ? '1px solid #222f44' : '1px solid #f1f5f9'),
                        background: isDark
                          ? (isCurrent 
                              ? (isHovered ? '#1c314e' : '#14253d') 
                              : (isHovered && !isLocked ? '#1e2b44' : '#172033'))
                          : (isCurrent 
                              ? (isHovered ? '#e0f2fe' : '#f0f9ff') 
                              : (isHovered && !isLocked ? '#f8fafc' : '#ffffff')),
                        opacity: isLocked ? (isDark ? 0.75 : 0.6) : 1,
                        transition: 'all 0.15s ease',
                        cursor: isLocked ? 'not-allowed' : 'pointer',
                        position: 'relative',
                        flexWrap: 'wrap',
                        gap: '12px',
                      }}
                    >
                      {/* Left active marker stripe if current */}
                      {isCurrent && (
                        <div
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            bottom: 0,
                            width: '4px',
                            background: '#38bdf8',
                          }}
                        />
                      )}

                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', minWidth: 0, flex: 1 }}>
                        {/* Status Icon */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', flexShrink: 0 }}>
                          {isCleared ? (
                            <CheckCircle2 size={20} color={isDark ? '#38bdf8' : '#0284c7'} />
                          ) : isCurrent ? (
                            <Play size={18} color="#38bdf8" fill="#38bdf8" />
                          ) : (
                            <Lock size={16} color={isDark ? '#64748b' : '#94a3b8'} />
                          )}
                        </div>

                        {/* Level badge */}
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.8rem',
                            fontWeight: 800,
                            padding: '3px 8px',
                            borderRadius: '6px',
                            background: isDark
                              ? (isCurrent ? '#0284c7' : isCleared ? 'rgba(56, 189, 248, 0.15)' : '#0f172a')
                              : (isCurrent ? '#0284c7' : isCleared ? '#e0f2fe' : '#f1f5f9'),
                            color: isDark
                              ? (isCurrent ? '#ffffff' : isCleared ? '#38bdf8' : '#94a3b8')
                              : (isCurrent ? '#ffffff' : isCleared ? '#0369a1' : '#94a3b8'),
                            border: isDark 
                              ? (isCleared ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid #273549') 
                              : (isCleared ? '1px solid #bae6fd' : '1px solid #e2e8f0'),
                            flexShrink: 0,
                          }}
                        >
                          LV {level.levelNumber.toString().padStart(2, '0')}
                        </span>

                        {/* Title */}
                        <span
                          style={{
                            fontSize: '0.96rem',
                            fontWeight: isCurrent ? 800 : 700,
                            color: isDark 
                              ? (isLocked ? '#94a3b8' : isCurrent ? '#ffffff' : '#f1f5f9') 
                              : (isLocked ? '#64748b' : '#0f172a'),
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {isEn ? level.title_en : level.title_ko}
                        </span>

                        {/* Syntax tags */}
                        {level.syntaxTags && level.syntaxTags.length > 0 && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                            {level.syntaxTags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                style={{
                                  fontFamily: 'var(--font-mono)',
                                  fontSize: '0.72rem',
                                  fontWeight: 600,
                                  color: isDark 
                                    ? (isLocked ? '#64748b' : isCurrent ? '#7dd3fc' : '#94a3b8') 
                                    : (isLocked ? '#94a3b8' : '#0284c7'),
                                  background: isDark ? '#0f172a' : (isLocked ? '#f1f5f9' : '#f0f9ff'),
                                  border: isDark 
                                    ? (isCurrent ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid #273549') 
                                    : (isLocked ? '1px solid #e2e8f0' : '1px solid #bae6fd'),
                                  padding: '2px 7px',
                                  borderRadius: '4px',
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Right Action */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
                        {isCurrent ? (
                          <span
                            style={{
                              padding: '6px 14px',
                              borderRadius: '10px',
                              background: '#0284c7',
                              color: '#ffffff',
                              fontSize: '0.8rem',
                              fontWeight: 800,
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              boxShadow: '0 2px 10px rgba(2, 132, 199, 0.45)',
                            }}
                          >
                            <Play size={13} fill="#ffffff" />
                            <span>{isEn ? 'Start Level' : '도전하기'}</span>
                          </span>
                        ) : isCleared ? (
                          <span
                            style={{
                              padding: '5px 12px',
                              borderRadius: '10px',
                              background: isDark ? 'rgba(56, 189, 248, 0.12)' : '#e0f2fe',
                              color: isDark ? '#38bdf8' : '#0284c7',
                              border: isDark ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid #bae6fd',
                              fontSize: '0.78rem',
                              fontWeight: 700,
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                            }}
                          >
                            <CheckCircle2 size={13} />
                            <span>{isEn ? 'Cleared' : '완료'}</span>
                          </span>
                        ) : (
                          <span
                            style={{
                              padding: '5px 10px',
                              borderRadius: '10px',
                              background: isDark ? '#0f172a' : '#f1f5f9',
                              color: isDark ? '#64748b' : '#94a3b8',
                              border: isDark ? '1px solid #273549' : '1px solid #e2e8f0',
                              fontSize: '0.76rem',
                              fontWeight: 600,
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                            }}
                          >
                            <Lock size={12} />
                            <span>{isEn ? 'Locked' : '잠김'}</span>
                          </span>
                        )}

                        {!isLocked && (
                          <ChevronRight
                            size={18}
                            color={isCurrent ? '#38bdf8' : (isDark ? '#64748b' : '#94a3b8')}
                            style={{
                              transform: isHovered ? 'translateX(3px)' : 'none',
                              transition: 'transform 0.15s ease',
                            }}
                          />
                        )}
                      </div>
                    </div>
                  );

                  if (isLocked) {
                    return <div key={level.levelNumber}>{rowContent}</div>;
                  }

                  return (
                    <Link
                      key={level.levelNumber}
                      href={`/practice/${rawLang}/${level.levelNumber}`}
                      style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                    >
                      {rowContent}
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
