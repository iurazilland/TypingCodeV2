'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Search,
  BookOpen,
  Layers,
  CheckCircle2,
  Flame,
  Lock,
  Target,
  X,
} from 'lucide-react';
import {
  CURRICULUM_TRACKS,
  LEARNING_ROADMAPS,
  LanguageTrack,
  CourseModule,
  DIFFICULTY_COLORS,
  DIFFICULTY_ORDER,
  findCurriculumModuleById,
} from '@/lib/curriculum';
import LanguageIcon from '@/components/LanguageIcon';
import { useLanguage } from '@/lib/LanguageContext';
import { getTrackName, getCategoryName, getSkillName } from '@/lib/curriculumTranslations';
import { useAuth } from '@/lib/AuthContext';
import { getClearedLevelsLocal, PROGRESS_SYNCED_EVENT } from '@/lib/progressSync';

export default function LanguagesPage() {
  const { language } = useLanguage();
  const { user } = useAuth();
  const isEn = language === 'en';
  const [progressByModule, setProgressByModule] = useState<Record<string, number>>({});

  // Classification state:
  // - selectedRoadmapId === null -> Default Language-based classification (filtered by selectedTrackId)
  // - selectedRoadmapId !== null -> Learning-Direction Stage-based classification
  const [selectedTrackId, setSelectedTrackId] = useState<string>('all');
  const [selectedRoadmapId, setSelectedRoadmapId] = useState<string | null>(null);
  const [hoveredTrackId, setHoveredTrackId] = useState<string | null>(null);
  const [hoveredRoadmapId, setHoveredRoadmapId] = useState<string | null>(null);

  // Shared filters
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [showUnlockedOnly, setShowUnlockedOnly] = useState<boolean>(false);

  // Load real cleared-level counts from synced storage
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const recomputeProgress = () => {
      if (!user) {
        setProgressByModule({});
        return;
      }
      try {
        const nextProgress: Record<string, number> = {};
        for (const track of CURRICULUM_TRACKS) {
          for (const mod of track.modules) {
            if (mod.isLocked || !mod.practiceUrl.startsWith('/practice/')) continue;
            const rawLang = mod.practiceUrl.replace(/^\/practice\//, '').toLowerCase();
            const clearedCount = getClearedLevelsLocal(rawLang).filter(
              (lvl) => lvl >= 1 && lvl <= mod.totalLevels
            ).length;
            if (clearedCount > 0) {
              nextProgress[mod.id] = clearedCount;
            }
          }
        }
        setProgressByModule(nextProgress);
      } catch {}
    };

    recomputeProgress();
    window.addEventListener(PROGRESS_SYNCED_EVENT, recomputeProgress);
    return () => window.removeEventListener(PROGRESS_SYNCED_EVENT, recomputeProgress);
  }, [user]);

  // Matte soft ice-cyan body background
  useEffect(() => {
    document.body.style.backgroundColor = '#e2eff6';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  const stats = useMemo(() => {
    let totalModules = 0;
    CURRICULUM_TRACKS.forEach((track) => {
      totalModules += track.modules.length;
    });
    return {
      totalTracks: CURRICULUM_TRACKS.length,
      totalRoadmaps: LEARNING_ROADMAPS.length,
      totalModules,
    };
  }, []);

  // Shared module filter predicate (search + difficulty + open-only)
  const matchesModuleFilters = (mod: CourseModule, track: LanguageTrack): boolean => {
    if (showUnlockedOnly && mod.isLocked) {
      return false;
    }
    if (selectedDifficulty !== 'all' && mod.difficulty !== selectedDifficulty) {
      return false;
    }
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      const matchTitle =
        mod.title_ko.toLowerCase().includes(query) ||
        mod.title_en.toLowerCase().includes(query);
      const matchCategory = mod.category.toLowerCase().includes(query);
      const matchDesc = mod.description_ko.toLowerCase().includes(query);
      const matchSkill = mod.skills.some((s) => s.toLowerCase().includes(query));
      const matchTrackName = track.name.toLowerCase().includes(query);
      return matchTitle || matchCategory || matchDesc || matchSkill || matchTrackName;
    }
    return true;
  };

  // 1) Default Language-based classification
  const filteredTracks = useMemo(() => {
    return CURRICULUM_TRACKS.map((track) => {
      if (selectedTrackId !== 'all' && track.id !== selectedTrackId) {
        return null;
      }
      const matchingModules = track.modules.filter((mod) =>
        matchesModuleFilters(mod, track)
      );
      if (matchingModules.length === 0) {
        return null;
      }
      return {
        ...track,
        modules: matchingModules,
      };
    }).filter((t): t is LanguageTrack => t !== null);
  }, [selectedTrackId, searchQuery, selectedDifficulty, showUnlockedOnly]);

  // 2) Learning-Direction Stage-based classification
  const activeRoadmap = useMemo(() => {
    if (!selectedRoadmapId) return null;
    return LEARNING_ROADMAPS.find((r) => r.id === selectedRoadmapId) || null;
  }, [selectedRoadmapId]);

  const filteredRoadmapStages = useMemo(() => {
    if (!activeRoadmap) return [];
    let runningOrder = 0;

    return activeRoadmap.stages
      .map((stage) => {
        const items = stage.moduleIds
          .map((id) => {
            const resolved = findCurriculumModuleById(id);
            if (!resolved) return null;
            runningOrder += 1;
            return {
              ...resolved,
              orderNumber: runningOrder,
            };
          })
          .filter((item): item is NonNullable<typeof item> => item !== null)
          .filter((item) => matchesModuleFilters(item.module, item.track));

        if (items.length === 0) return null;
        return {
          ...stage,
          items,
        };
      })
      .filter((s): s is NonNullable<typeof s> => s !== null);
  }, [activeRoadmap, searchQuery, selectedDifficulty, showUnlockedOnly]);

  const difficultyOptions = ['all', '입문', '중급', '심화'];
  const getDifficultyLabel = (diff: string) => {
    if (diff === 'all') return isEn ? 'All' : '전체';
    if (diff === '입문') return isEn ? 'Beginner' : '입문';
    if (diff === '중급') return isEn ? 'Intermediate' : '중급';
    if (diff === '심화') return isEn ? 'Advanced' : '심화';
    return diff;
  };

  const getShortTrackLabel = (track: LanguageTrack) => {
    if (track.id === 'vb') return 'Visual Basic';
    if (track.id === 'linux') return 'Linux';
    if (track.id === 'csharp') return 'C#';
    if (track.id === 'swift') return 'Swift';
    if (track.id === 'javascript') return 'JavaScript';
    if (track.id === 'c') return isEn ? 'C' : 'C언어';
    if (track.id === 'cpp') return 'C++';
    if (track.id === 'python') return 'Python';
    if (track.id === 'java') return 'Java';
    if (track.id === 'sql') return 'SQL';
    if (track.id === 'go') return 'Go';
    if (track.id === 'rust') return 'Rust';
    if (track.id === 'web') return 'Web';
    return isEn ? getTrackName(track, true) : track.name.split(' ')[0];
  };

  const renderCourseCard = (
    module: CourseModule,
    track: LanguageTrack,
    orderNumber?: number
  ) => {
    const locked = Boolean(module.isLocked);
    const completedLevels = locked ? 0 : progressByModule[module.id] || 0;
    const progressPercent = locked
      ? 0
      : Math.min(100, Math.round((completedLevels / Math.max(1, module.totalLevels)) * 100));
    const isStarted = !locked && progressPercent > 0;
    const diffColor = DIFFICULTY_COLORS[module.difficulty] || '#10b981';

    const cardInner = (
      <>
        {/* Top Floating Status Pill for Unlocked Course */}
        {!locked && (
          <div
            style={{
              position: 'absolute',
              top: '-9px',
              right: '14px',
              zIndex: 10,
              padding: '2px 8px',
              borderRadius: '8px',
              background: isStarted ? diffColor : '#059669',
              color: '#ffffff',
              fontSize: '0.66rem',
              fontWeight: 800,
              letterSpacing: '0.02em',
              boxShadow: `0 3px 8px ${isStarted ? diffColor : '#059669'}40`,
              display: 'flex',
              alignItems: 'center',
              gap: '3px',
              whiteSpace: 'nowrap',
            }}
          >
            <span>
              {isStarted
                ? `🔥 ${isEn ? 'In Progress' : '진행 중'}`
                : isEn
                ? 'Open'
                : '학습 가능'}
            </span>
          </div>
        )}

        <div>
          {/* Recommended Order & Language Header Row (when classified by Learning Direction) */}
          {typeof orderNumber === 'number' && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '8px',
                marginBottom: '10px',
                paddingBottom: '8px',
                borderBottom: '1px solid #e2e8f0',
              }}
            >
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  padding: '2px 8px',
                  borderRadius: '6px',
                  background: locked ? '#e2e8f0' : '#d1fae5',
                  color: locked ? '#475569' : '#047857',
                }}
              >
                {isEn
                  ? `ORDER ${String(orderNumber).padStart(2, '0')}`
                  : `추천 ${String(orderNumber).padStart(2, '0')}`}
              </span>

              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#475569',
                }}
              >
                <LanguageIcon language={track.id} size={16} />
                <span>{getShortTrackLabel(track)}</span>
              </span>
            </div>
          )}

          {/* Top Badges Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '6px',
              marginBottom: '8px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', flexWrap: 'wrap' }}>
              <span
                style={{
                  padding: '2px 7px',
                  borderRadius: '6px',
                  background: locked ? '#e2e8f0' : `${diffColor}18`,
                  color: locked ? '#64748b' : diffColor,
                  border: locked ? '1px solid #cbd5e1' : `1px solid ${diffColor}45`,
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                {getDifficultyLabel(module.difficulty)}
              </span>

              <span
                style={{
                  padding: '2px 7px',
                  borderRadius: '6px',
                  background: '#f1f5f9',
                  color: '#475569',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                }}
              >
                {getCategoryName(module.category, isEn)}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {!locked && module.isPopular && (
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '2px',
                    padding: '2px 5px',
                    borderRadius: '5px',
                    background: 'rgba(239, 68, 68, 0.1)',
                    color: '#dc2626',
                    fontSize: '0.66rem',
                    fontWeight: 800,
                    border: '1px solid rgba(239, 68, 68, 0.25)',
                  }}
                >
                  <Flame size={10} />
                  {isEn ? 'Hot' : '인기'}
                </span>
              )}
              <span
                style={{
                  fontSize: '0.7rem',
                  color: '#64748b',
                  fontWeight: 600,
                }}
              >
                {module.totalLevels}
                {isEn ? ' Stages' : '단계'}
              </span>
            </div>
          </div>

          {/* Course Title */}
          <h3
            style={{
              fontSize: '0.96rem',
              fontWeight: 800,
              color: locked ? '#334155' : '#0f172a',
              marginBottom: '10px',
              lineHeight: 1.35,
              letterSpacing: '-0.01em',
              wordBreak: 'keep-all',
            }}
          >
            {isEn ? module.title_en : module.title_ko}
          </h3>

          {/* Key Skills Box */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              marginBottom: '14px',
              padding: '10px 12px',
              borderRadius: '12px',
              background: locked ? '#f1f5f9' : '#f8fafc',
              border: '1.5px solid #e2e8f0',
            }}
          >
            {module.skills.map((skill, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.76rem',
                  color: locked ? '#64748b' : '#334155',
                  fontWeight: 500,
                }}
              >
                <CheckCircle2
                  size={13}
                  color={locked ? '#94a3b8' : diffColor}
                  style={{ flexShrink: 0 }}
                />
                <span>{getSkillName(skill, isEn)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer Area: Progress Gauge if Unlocked, Lock Status if Locked */}
        <div
          style={{
            paddingTop: '10px',
            borderTop: '1px solid #e2e8f0',
          }}
        >
          {locked ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: '#64748b',
                fontSize: '0.75rem',
                fontWeight: 700,
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <Lock size={13} color="#64748b" />
                <span>{isEn ? 'Coming Soon' : '준비 중'}</span>
              </span>
              <span style={{ fontSize: '0.68rem', color: '#94a3b8', fontWeight: 600 }}>
                {isEn ? 'Sequential Release' : '순차 오픈 예정'}
              </span>
            </div>
          ) : (
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '5px',
                }}
              >
                <span
                  style={{
                    fontSize: '0.74rem',
                    color: isStarted ? diffColor : '#0f172a',
                    fontWeight: 800,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <span>
                    {isStarted
                      ? isEn
                        ? `Continue (${progressPercent}%)`
                        : `이어하기 (${progressPercent}%)`
                      : isEn
                      ? 'Start Learning'
                      : '학습 시작'}
                  </span>
                  <ArrowRight size={12} color={isStarted ? diffColor : '#0891b2'} />
                </span>
                <span
                  style={{
                    fontSize: '0.68rem',
                    color: '#64748b',
                    fontWeight: 600,
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {completedLevels} / {module.totalLevels}
                  {isEn ? ' Stages' : '단계'}
                </span>
              </div>

              <div
                style={{
                  width: '100%',
                  height: '5px',
                  borderRadius: '3px',
                  background: '#e2e8f0',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: `${progressPercent}%`,
                    height: '100%',
                    borderRadius: '3px',
                    background: isStarted ? diffColor : 'transparent',
                    transition: 'width 0.4s ease',
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </>
    );

    if (locked) {
      return (
        <div
          key={`${orderNumber ?? 'lang'}-${module.id}`}
          aria-disabled="true"
          style={{
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            background: '#f8fafc',
            borderRadius: '18px',
            border: '1.5px solid #cbd5e1',
            opacity: 0.82,
            position: 'relative',
            userSelect: 'none',
          }}
        >
          {cardInner}
        </div>
      );
    }

    return (
      <Link
        key={`${orderNumber ?? 'lang'}-${module.id}`}
        href={module.practiceUrl}
        className={`light-mode-card card-diff-${module.difficulty}`}
        style={{
          textDecoration: 'none',
          color: 'inherit',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#ffffff',
          borderRadius: '18px',
          border: `2px solid ${diffColor}`,
          boxShadow: `0 4px 16px -2px ${diffColor}22, 0 2px 6px rgba(15, 23, 42, 0.04)`,
          transition: 'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
          position: 'relative',
          overflow: 'visible',
          cursor: 'pointer',
        }}
      >
        {cardInner}
      </Link>
    );
  };

  const resetAllFilters = () => {
    setSelectedRoadmapId(null);
    setSelectedTrackId('all');
    setSearchQuery('');
    setSelectedDifficulty('all');
    setShowUnlockedOnly(false);
  };

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '32px 20px 100px' }}>
      {/* Clean Page Header */}
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <h1
          style={{
            fontSize: 'clamp(1.85rem, 3.6vw, 2.5rem)',
            fontWeight: 800,
            color: '#0f172a',
            marginBottom: '10px',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
          }}
        >
          {isEn ? 'Official Curriculum & Learning Tracks' : '정규 학습과정'}
        </h1>

        <p
          style={{
            color: '#475569',
            fontSize: '1rem',
            maxWidth: '720px',
            margin: '0 auto 18px',
            lineHeight: 1.55,
            wordBreak: 'keep-all',
          }}
        >
          {isEn
            ? 'Browse by programming language or click a learning direction below to re-organize courses step by step.'
            : '언어별로 살펴보거나 학습 방향을 선택해 단계별 추천 순서로 분류해 보세요.'}
        </p>

        {/* Compact Summary Pills */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '16px',
            padding: '10px 22px',
            borderRadius: '18px',
            background: '#ffffff',
            border: '1.5px solid #cbd5e1',
            boxShadow: '0 2px 10px rgba(15, 23, 42, 0.04)',
            fontSize: '0.88rem',
            color: '#334155',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Layers size={16} color="#0284c7" />
            <span>
              <strong style={{ color: '#0f172a', fontWeight: 800 }}>{stats.totalTracks}</strong>{' '}
              {isEn ? 'Languages' : '개 언어 트랙'}
            </span>
          </div>
          <span style={{ color: '#cbd5e1' }}>•</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Target size={16} color="#0891b2" />
            <span>
              <strong style={{ color: '#0f172a', fontWeight: 800 }}>{stats.totalRoadmaps}</strong>{' '}
              {isEn ? 'Directions' : '개 학습 방향'}
            </span>
          </div>
          <span style={{ color: '#cbd5e1' }}>•</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <BookOpen size={16} color="#10b981" />
            <span>
              <strong style={{ color: '#0f172a', fontWeight: 800 }}>{stats.totalModules}</strong>{' '}
              {isEn ? 'Courses' : '개 정규 코스'}
            </span>
          </div>
        </div>
      </div>

      {/* Unified Selection & Filter Card (Language Icons + 2-Row Learning Direction Buttons + Search/Filters) */}
      <div
        style={{
          background: '#ffffff',
          borderRadius: '24px',
          padding: '22px 24px',
          border: '1.5px solid #cbd5e1',
          marginBottom: '34px',
          boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
        }}
      >
        {/* 1. Language Icon Buttons Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            overflowX: 'auto',
            paddingTop: '4px',
            paddingBottom: '16px',
            paddingLeft: '4px',
            paddingRight: '4px',
            marginBottom: '16px',
            borderBottom: '1.5px solid #e2e8f0',
            scrollbarWidth: 'none',
          }}
        >
          {/* ALL Languages Button */}
          {(() => {
            const isSelected = selectedRoadmapId === null && selectedTrackId === 'all';
            const isHovered = hoveredTrackId === 'all';
            return (
              <button
                onClick={() => {
                  setSelectedRoadmapId(null);
                  setSelectedTrackId('all');
                }}
                onMouseEnter={() => setHoveredTrackId('all')}
                onMouseLeave={() => setHoveredTrackId(null)}
                style={{
                  height: '52px',
                  padding: '0 16px 0 10px',
                  borderRadius: '16px',
                  flexShrink: 0,
                  boxSizing: 'border-box',
                  background: isSelected
                    ? 'rgba(8, 145, 178, 0.12)'
                    : isHovered
                    ? '#f1f5f9'
                    : '#f8fafc',
                  border:
                    isSelected || isHovered
                      ? '1.5px solid #0891b2'
                      : '1.5px solid #cbd5e1',
                  boxShadow: isSelected
                    ? '0 0 0 1px #0891b2, 0 4px 14px rgba(8, 145, 178, 0.22)'
                    : 'none',
                  transition: 'background-color 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  overflow: 'hidden',
                }}
              >
                <LanguageIcon language="all" size={32} />
                <div
                  style={{
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    pointerEvents: 'none',
                  }}
                >
                  <span
                    style={{
                      fontWeight: 800,
                      fontSize: '0.9rem',
                      color: isSelected ? '#0891b2' : '#0f172a',
                    }}
                  >
                    {isEn ? 'All' : '언어 전체'}
                  </span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      padding: '2px 6px',
                      borderRadius: '6px',
                      background: isSelected ? 'rgba(8, 145, 178, 0.2)' : '#e2e8f0',
                      color: isSelected ? '#0e7490' : '#475569',
                      fontWeight: 700,
                    }}
                  >
                    {stats.totalModules}
                  </span>
                </div>
              </button>
            );
          })()}

          {/* Individual Language Track Buttons */}
          {CURRICULUM_TRACKS.map((track) => {
            const isSelected = selectedRoadmapId === null && selectedTrackId === track.id;
            const isHovered = hoveredTrackId === track.id;
            const isExpanded = isSelected || isHovered;
            const hasOpenModule = track.modules.some((m) => !m.isLocked);
            const pillLabel = getShortTrackLabel(track);

            return (
              <button
                key={track.id}
                onClick={() => {
                  setSelectedRoadmapId(null);
                  setSelectedTrackId(
                    selectedRoadmapId === null && selectedTrackId === track.id ? 'all' : track.id
                  );
                }}
                onMouseEnter={() => setHoveredTrackId(track.id)}
                onMouseLeave={() => setHoveredTrackId(null)}
                style={{
                  height: '52px',
                  padding: isExpanded ? '0 16px 0 11px' : '0 11px',
                  borderRadius: '16px',
                  flexShrink: 0,
                  boxSizing: 'border-box',
                  background: isSelected
                    ? `${track.color}18`
                    : isHovered
                    ? `${track.color}0d`
                    : '#f8fafc',
                  border:
                    isSelected || isHovered
                      ? `1.5px solid ${track.color}`
                      : '1.5px solid #cbd5e1',
                  boxShadow: isSelected
                    ? `0 0 0 1px ${track.color}, 0 4px 14px ${track.color}30`
                    : 'none',
                  transition: 'padding 0.22s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: isExpanded ? '8px' : '0px',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  opacity: hasOpenModule || isSelected || isHovered ? 1 : 0.78,
                }}
              >
                <LanguageIcon language={track.id} size={30} />
                <div
                  style={{
                    maxWidth: isExpanded ? '160px' : '0px',
                    opacity: isExpanded ? 1 : 0,
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.22s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    pointerEvents: 'none',
                  }}
                >
                  <span
                    style={{
                      fontWeight: 800,
                      fontSize: '0.9rem',
                      color: isSelected ? track.color : '#0f172a',
                    }}
                  >
                    {pillLabel}
                  </span>
                  {hasOpenModule ? (
                    <span
                      style={{
                        fontSize: '0.72rem',
                        padding: '2px 6px',
                        borderRadius: '6px',
                        background: `${track.color}25`,
                        color: '#0f172a',
                        fontWeight: 700,
                      }}
                    >
                      {track.modules.length}
                    </span>
                  ) : (
                    <Lock size={12} color="#64748b" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* 2. Single-Row Learning Direction Buttons (6 equal columns in 1 row) */}
        <div
          style={{
            paddingBottom: '16px',
            marginBottom: '16px',
            borderBottom: '1.5px solid #e2e8f0',
          }}
        >
          <div className="roadmap-1row-grid" style={{ padding: '2px' }}>
            {LEARNING_ROADMAPS.map((rm) => {
              const isSelected = selectedRoadmapId === rm.id;
              const isHovered = hoveredRoadmapId === rm.id;
              const courseCount = rm.stages.reduce((acc, s) => acc + s.moduleIds.length, 0);

              return (
                <button
                  key={rm.id}
                  onClick={() => {
                    setSelectedTrackId('all');
                    setSelectedRoadmapId((prev) => (prev === rm.id ? null : rm.id));
                  }}
                  onMouseEnter={() => setHoveredRoadmapId(rm.id)}
                  onMouseLeave={() => setHoveredRoadmapId(null)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '11px 13px',
                    borderRadius: '16px',
                    boxSizing: 'border-box',
                    background: isSelected
                      ? `${rm.color}14`
                      : isHovered
                      ? '#ffffff'
                      : '#f8fafc',
                    border:
                      isSelected || isHovered
                        ? `1.5px solid ${rm.color}`
                        : '1.5px solid #cbd5e1',
                    boxShadow: isSelected
                      ? `0 0 0 1px ${rm.color}, 0 4px 12px ${rm.color}24`
                      : isHovered
                      ? '0 3px 10px rgba(15, 23, 42, 0.05)'
                      : 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '4px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '6px',
                      width: '100%',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        minWidth: 0,
                      }}
                    >
                      <span style={{ fontSize: '1.1rem', lineHeight: 1, flexShrink: 0 }}>
                        {rm.icon}
                      </span>
                      <span
                        style={{
                          fontSize: '0.88rem',
                          fontWeight: 800,
                          color: isSelected ? rm.color : '#0f172a',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {isEn ? rm.title_en : rm.title_ko}
                      </span>
                    </div>

                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        padding: '2px 6px',
                        borderRadius: '6px',
                        background: isSelected ? rm.color : '#e2e8f0',
                        color: isSelected ? '#ffffff' : '#475569',
                        flexShrink: 0,
                      }}
                    >
                      {courseCount}
                    </span>
                  </div>

                  <div
                    style={{
                      fontSize: '0.73rem',
                      color: '#64748b',
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      paddingLeft: '2px',
                    }}
                  >
                    {isEn ? rm.target_en : rm.target_ko}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Search & Difficulty / Open-Only Controls Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          {/* Search Box */}
          <div
            style={{
              position: 'relative',
              flex: '1 1 280px',
              maxWidth: '460px',
            }}
          >
            <Search
              size={18}
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#64748b',
              }}
            />
            <input
              type="text"
              placeholder={isEn ? 'Search courses or skills...' : '코스명, 키워드 검색'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 38px 10px 42px',
                borderRadius: '12px',
                background: '#f8fafc',
                border: '1.5px solid #cbd5e1',
                color: '#0f172a',
                fontSize: '0.9rem',
                outline: 'none',
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#64748b',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px',
                }}
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Open-Only Toggle + Difficulty Filter Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setShowUnlockedOnly((prev) => !prev)}
              style={{
                padding: '7px 13px',
                borderRadius: '10px',
                fontSize: '0.82rem',
                fontWeight: 800,
                cursor: 'pointer',
                background: showUnlockedOnly ? '#059669' : '#f8fafc',
                color: showUnlockedOnly ? '#ffffff' : '#047857',
                border: showUnlockedOnly ? '1.5px solid #059669' : '1.5px solid #a7f3d0',
                marginRight: '6px',
              }}
            >
              {isEn ? 'Open Only' : '오픈 과정만'}
            </button>

            {difficultyOptions.map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                style={{
                  padding: '7px 13px',
                  borderRadius: '10px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  background: selectedDifficulty === diff ? '#0891b2' : '#f8fafc',
                  color: selectedDifficulty === diff ? '#ffffff' : '#475569',
                  border:
                    selectedDifficulty === diff
                      ? '1.5px solid #0891b2'
                      : '1.5px solid #cbd5e1',
                  transition: 'all 0.15s ease',
                }}
              >
                {getDifficultyLabel(diff)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* =================================================================
          BOTTOM LISTING:
          - If activeRoadmap !== null -> Classified by Learning Direction Stages
          - Otherwise -> Default Classification by Programming Language
          ================================================================= */}
      {activeRoadmap ? (
        filteredRoadmapStages.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '72px 20px',
              background: '#ffffff',
              borderRadius: '24px',
              border: '1.5px solid #cbd5e1',
            }}
          >
            <p
              style={{
                fontSize: '1.12rem',
                color: '#0f172a',
                marginBottom: '16px',
                fontWeight: 800,
              }}
            >
              {isEn ? 'No matching courses in this direction.' : '조건과 일치하는 코스가 없습니다.'}
            </p>
            <button
              onClick={resetAllFilters}
              className="tactile-btn tactile-btn-primary"
              style={{ padding: '10px 20px', fontSize: '0.88rem', borderRadius: '12px' }}
            >
              <span>{isEn ? 'Reset Filters' : '필터 초기화'}</span>
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {/* Stage Sections (STEP 01 -> STEP 02 -> STEP 03) directly below filter card */}
            {filteredRoadmapStages.map((stage) => (
              <section key={stage.id}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '12px',
                    marginBottom: '16px',
                    padding: '0 4px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '14px',
                        background: `${activeRoadmap.color}15`,
                        border: `1.5px solid ${activeRoadmap.color}55`,
                        color: activeRoadmap.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 900,
                        fontSize: '0.95rem',
                        fontFamily: 'var(--font-mono)',
                        flexShrink: 0,
                      }}
                    >
                      0{stage.stepNumber}
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: '1.3rem',
                          fontWeight: 800,
                          color: '#0f172a',
                          margin: 0,
                        }}
                      >
                        {isEn ? stage.title_en : stage.title_ko}
                      </h3>
                      <p
                        style={{
                          color: '#64748b',
                          fontSize: '0.84rem',
                          margin: '3px 0 0 0',
                          fontWeight: 500,
                        }}
                      >
                        {isEn ? stage.subtitle_en : stage.subtitle_ko}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      background: '#ffffff',
                      padding: '5px 12px',
                      borderRadius: '10px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '0.8rem',
                      color: '#475569',
                      fontWeight: 700,
                    }}
                  >
                    {isEn ? `${stage.items.length} Courses` : `${stage.items.length}개 과정`}
                  </div>
                </div>

                <div className="curriculum-4col-grid">
                  {stage.items.map(({ track, module, orderNumber }) =>
                    renderCourseCard(module, track, orderNumber)
                  )}
                </div>
              </section>
            ))}
          </div>
        )
      ) : filteredTracks.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            padding: '72px 20px',
            background: '#ffffff',
            borderRadius: '24px',
            border: '1.5px solid #cbd5e1',
          }}
        >
          <p
            style={{
              fontSize: '1.12rem',
              color: '#0f172a',
              marginBottom: '16px',
              fontWeight: 800,
            }}
          >
            {isEn ? 'No matching courses found.' : '일치하는 코스가 없습니다.'}
          </p>
          <button
            onClick={resetAllFilters}
            className="tactile-btn tactile-btn-primary"
            style={{ padding: '10px 20px', fontSize: '0.88rem', borderRadius: '12px' }}
          >
            <span>{isEn ? 'Reset Filters' : '필터 초기화'}</span>
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          {filteredTracks.map((track) => {
            const openCount = track.modules.filter((m) => !m.isLocked).length;
            return (
              <section key={track.id} id={`track-${track.id}`}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '12px',
                    marginBottom: '16px',
                    padding: '0 4px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '14px',
                        background: '#ffffff',
                        border: '1.5px solid #cbd5e1',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <LanguageIcon language={track.id} size={28} />
                    </div>
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          flexWrap: 'wrap',
                        }}
                      >
                        <h2
                          style={{
                            fontSize: '1.3rem',
                            fontWeight: 800,
                            color: '#0f172a',
                            margin: 0,
                          }}
                        >
                          {getTrackName(track, isEn)}
                        </h2>
                        <span
                          style={{
                            padding: '2px 8px',
                            borderRadius: '6px',
                            background: '#f1f5f9',
                            border: '1.5px solid #cbd5e1',
                            color: '#475569',
                            fontSize: '0.72rem',
                            fontWeight: 700,
                          }}
                        >
                          {track.badge}
                        </span>
                      </div>
                      <p
                        style={{
                          color: '#64748b',
                          fontSize: '0.84rem',
                          margin: '3px 0 0 0',
                          fontWeight: 500,
                        }}
                      >
                        {isEn ? track.tagline_en : track.tagline_ko}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: '#ffffff',
                      padding: '5px 12px',
                      borderRadius: '10px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '0.8rem',
                      color: '#475569',
                    }}
                  >
                    {openCount > 0 ? (
                      <span style={{ color: '#059669', fontWeight: 800 }}>
                        {isEn
                          ? `${openCount}/${track.modules.length} Open`
                          : `${openCount}/${track.modules.length} 오픈`}
                      </span>
                    ) : (
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          color: '#64748b',
                          fontWeight: 700,
                        }}
                      >
                        <Lock size={12} />
                        {isEn ? 'Coming Soon' : '준비 중'}
                      </span>
                    )}
                  </div>
                </div>

                <div className="curriculum-4col-grid">
                  {[...track.modules]
                    .sort(
                      (a, b) =>
                        (DIFFICULTY_ORDER[a.difficulty] || 99) -
                        (DIFFICULTY_ORDER[b.difficulty] || 99)
                    )
                    .map((module) => renderCourseCard(module, track))}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
