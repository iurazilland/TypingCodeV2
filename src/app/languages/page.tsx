'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Compass,
  Search,
  BookOpen,
  Layers,
  CheckCircle2,
  Flame,
  Lock,
  Pin,
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
import RoadmapFinderModal from '@/components/RoadmapFinderModal';
import { useLanguage } from '@/lib/LanguageContext';
import { getTrackName, getCategoryName, getSkillName } from '@/lib/curriculumTranslations';
import { useAuth } from '@/lib/AuthContext';
import { getClearedLevelsLocal, PROGRESS_SYNCED_EVENT } from '@/lib/progressSync';

const PINNED_ROADMAP_STORAGE_KEY = 'typingcode_roadmap_v2';

export default function LanguagesPage() {
  const { language } = useLanguage();
  const { user } = useAuth();
  const isEn = language === 'en';
  const [progressByModule, setProgressByModule] = useState<Record<string, number>>({});

  // View mode: 'roadmap' (guided step-by-step order) or 'all' (13-language catalog)
  const [viewMode, setViewMode] = useState<'roadmap' | 'all'>('roadmap');
  const [activeRoadmapId, setActiveRoadmapId] = useState<string>('starter');
  const [pinnedRoadmapId, setPinnedRoadmapId] = useState<string | null>(null);
  const [isFinderOpen, setIsFinderOpen] = useState<boolean>(false);

  // Catalog filters
  const [selectedTrackId, setSelectedTrackId] = useState<string>('all');
  const [hoveredTrackId, setHoveredTrackId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [showUnlockedOnly, setShowUnlockedOnly] = useState<boolean>(false);

  // Load saved roadmap selection from localStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const saved = localStorage.getItem(PINNED_ROADMAP_STORAGE_KEY);
      if (saved && LEARNING_ROADMAPS.some((r) => r.id === saved)) {
        setPinnedRoadmapId(saved);
        setActiveRoadmapId(saved);
      }
    } catch {}
  }, []);

  const handlePinRoadmap = (roadmapId: string) => {
    setPinnedRoadmapId(roadmapId);
    setActiveRoadmapId(roadmapId);
    setViewMode('roadmap');
    try {
      localStorage.setItem(PINNED_ROADMAP_STORAGE_KEY, roadmapId);
    } catch {}
  };

  const handleClearPinnedRoadmap = () => {
    setPinnedRoadmapId(null);
    try {
      localStorage.removeItem(PINNED_ROADMAP_STORAGE_KEY);
    } catch {}
  };

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
    let unlockedModules = 0;
    CURRICULUM_TRACKS.forEach((track) => {
      totalModules += track.modules.length;
      track.modules.forEach((mod) => {
        if (!mod.isLocked) unlockedModules += 1;
      });
    });
    return {
      totalTracks: CURRICULUM_TRACKS.length,
      totalRoadmaps: LEARNING_ROADMAPS.length,
      totalModules,
      unlockedModules,
    };
  }, []);

  const filteredTracks = useMemo(() => {
    return CURRICULUM_TRACKS.map((track) => {
      if (selectedTrackId !== 'all' && track.id !== selectedTrackId) {
        return null;
      }

      const matchingModules = track.modules.filter((mod) => {
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
      });

      if (matchingModules.length === 0) {
        return null;
      }

      return {
        ...track,
        modules: matchingModules,
      };
    }).filter((t): t is LanguageTrack => t !== null);
  }, [selectedTrackId, searchQuery, selectedDifficulty, showUnlockedOnly]);

  const activeRoadmap = useMemo(() => {
    return (
      LEARNING_ROADMAPS.find((r) => r.id === activeRoadmapId) || LEARNING_ROADMAPS[0]
    );
  }, [activeRoadmapId]);

  const activeRoadmapSteps = useMemo(() => {
    return activeRoadmap.moduleIds
      .map((id) => findCurriculumModuleById(id))
      .filter((item): item is NonNullable<typeof item> => item !== null);
  }, [activeRoadmap]);

  const pinnedRoadmap = useMemo(() => {
    if (!pinnedRoadmapId) return null;
    return LEARNING_ROADMAPS.find((r) => r.id === pinnedRoadmapId) || null;
  }, [pinnedRoadmapId]);

  const pyBasicDone = progressByModule['py-basic'] || 0;

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
    stepNumber?: number
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
          {/* Optional Step & Language Header Row (for Goal Roadmap View) */}
          {typeof stepNumber === 'number' && (
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
                STEP {String(stepNumber).padStart(2, '0')}
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
          key={`${stepNumber ?? 'cat'}-${module.id}`}
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
        key={`${stepNumber ?? 'cat'}-${module.id}`}
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

  const hasUnlockedInActiveRoadmap = activeRoadmapSteps.some((s) => !s.module.isLocked);

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
          {isEn ? 'Learning Tracks & Roadmaps' : '정규 학습과정'}
        </h1>

        <p
          style={{
            color: '#475569',
            fontSize: '1rem',
            maxWidth: '680px',
            margin: '0 auto 18px',
            lineHeight: 1.55,
            wordBreak: 'keep-all',
          }}
        >
          {isEn
            ? 'Follow a recommended goal roadmap or browse all 13 language tracks.'
            : '목표별 추천 순서를 따라가거나 원하는 언어를 선택해 학습을 시작하세요.'}
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
            <Target size={16} color="#0891b2" />
            <span>
              <strong style={{ color: '#0f172a', fontWeight: 800 }}>{stats.totalRoadmaps}</strong>{' '}
              {isEn ? 'Roadmaps' : '개 추천 로드맵'}
            </span>
          </div>
          <span style={{ color: '#cbd5e1' }}>•</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Layers size={16} color="#3b82f6" />
            <span>
              <strong style={{ color: '#0f172a', fontWeight: 800 }}>{stats.totalTracks}</strong>{' '}
              {isEn ? 'Languages' : '개 언어 트랙'}
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

      {/* Pinned Personalized Roadmap Strip (if saved) */}
      {pinnedRoadmap && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            padding: '13px 18px',
            borderRadius: '18px',
            background: '#ffffff',
            border: '1.5px solid #0891b2',
            boxShadow: '0 4px 14px rgba(8, 145, 178, 0.1)',
            marginBottom: '18px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '3px 9px',
                borderRadius: '8px',
                background: '#ecfeff',
                color: '#0e7490',
                border: '1px solid #a5f3fc',
                fontSize: '0.75rem',
                fontWeight: 800,
              }}
            >
              <Pin size={12} />
              {isEn ? 'My Roadmap' : '내 로드맵'}
            </span>
            <button
              onClick={() => {
                setActiveRoadmapId(pinnedRoadmap.id);
                setViewMode('roadmap');
              }}
              style={{
                background: 'transparent',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                fontSize: '0.94rem',
                fontWeight: 800,
                color: '#0f172a',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span>{pinnedRoadmap.icon}</span>
              <span>{isEn ? pinnedRoadmap.title_en : pinnedRoadmap.title_ko}</span>
            </button>
            <span style={{ color: '#cbd5e1' }}>|</span>
            <span style={{ fontSize: '0.84rem', color: '#475569', fontWeight: 600 }}>
              {isEn
                ? `Current Open Course: Python Basics (${pyBasicDone}/87)`
                : `현재 오픈 과정: 파이썬 베이직 (${pyBasicDone}/87단계)`}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Link
              href="/practice/python_basic"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '7px 14px',
                borderRadius: '10px',
                background: '#0891b2',
                color: '#ffffff',
                fontSize: '0.82rem',
                fontWeight: 800,
                textDecoration: 'none',
              }}
            >
              <span>
                {pyBasicDone > 0
                  ? isEn
                    ? 'Continue'
                    : '이어하기'
                  : isEn
                  ? 'Start'
                  : '바로 시작'}
              </span>
              <ArrowRight size={14} />
            </Link>
            <button
              onClick={() => setIsFinderOpen(true)}
              style={{
                padding: '7px 12px',
                borderRadius: '10px',
                background: '#f8fafc',
                border: '1px solid #cbd5e1',
                color: '#475569',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              {isEn ? 'Retake' : '변경'}
            </button>
            <button
              onClick={handleClearPinnedRoadmap}
              aria-label="Clear roadmap"
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '9px',
                background: 'transparent',
                border: '1px solid #e2e8f0',
                color: '#64748b',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Primary View Switcher & 10-Second Finder Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '22px',
        }}
      >
        {/* View Tabs */}
        <div
          style={{
            display: 'inline-flex',
            padding: '5px',
            borderRadius: '16px',
            background: '#ffffff',
            border: '1.5px solid #cbd5e1',
            boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
            gap: '4px',
          }}
        >
          <button
            onClick={() => setViewMode('roadmap')}
            style={{
              padding: '9px 18px',
              borderRadius: '12px',
              border: 'none',
              background: viewMode === 'roadmap' ? '#0891b2' : 'transparent',
              color: viewMode === 'roadmap' ? '#ffffff' : '#475569',
              fontSize: '0.88rem',
              fontWeight: 800,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            {isEn ? 'Goal Roadmaps' : '목표별 추천 순서'}
          </button>
          <button
            onClick={() => setViewMode('all')}
            style={{
              padding: '9px 18px',
              borderRadius: '12px',
              border: 'none',
              background: viewMode === 'all' ? '#0891b2' : 'transparent',
              color: viewMode === 'all' ? '#ffffff' : '#475569',
              fontSize: '0.88rem',
              fontWeight: 800,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            {isEn ? `All Languages (${stats.totalTracks})` : `언어별 전체 (${stats.totalTracks})`}
          </button>
        </div>

        {/* 10-Second Course Finder Trigger */}
        <button
          onClick={() => setIsFinderOpen(true)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 18px',
            borderRadius: '14px',
            background: '#ffffff',
            border: '1.5px solid #0891b2',
            color: '#0e7490',
            fontSize: '0.88rem',
            fontWeight: 800,
            cursor: 'pointer',
            boxShadow: '0 3px 10px rgba(8, 145, 178, 0.12)',
            transition: 'all 0.15s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#ecfeff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#ffffff';
          }}
        >
          <Compass size={17} color="#0891b2" />
          <span>{isEn ? 'Not sure where to start? Find My Path' : '어디부터 시작할지 막막하다면? 맞춤 추천'}</span>
        </button>
      </div>

      {/* =================================================================
          VIEW 1: GOAL-BASED RECOMMENDED ROADMAPS
          ================================================================= */}
      {viewMode === 'roadmap' && (
        <div>
          {/* 6 Goal Selector Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(195px, 1fr))',
              gap: '10px',
              marginBottom: '22px',
            }}
          >
            {LEARNING_ROADMAPS.map((rm) => {
              const isSelected = rm.id === activeRoadmap.id;
              return (
                <button
                  key={rm.id}
                  onClick={() => setActiveRoadmapId(rm.id)}
                  style={{
                    textAlign: 'left',
                    padding: '14px 16px',
                    borderRadius: '18px',
                    background: isSelected ? '#ffffff' : '#f8fafc',
                    border: isSelected ? `2px solid ${rm.color}` : '1.5px solid #cbd5e1',
                    boxShadow: isSelected
                      ? `0 6px 18px -4px ${rm.color}30`
                      : '0 1px 3px rgba(15, 23, 42, 0.03)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '1.25rem' }}>{rm.icon}</span>
                    <span
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: 800,
                        color: '#0f172a',
                      }}
                    >
                      {isEn ? rm.title_en : rm.title_ko}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: '0.76rem',
                      color: '#64748b',
                      fontWeight: 600,
                    }}
                  >
                    {isEn ? rm.target_en : rm.target_ko}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Roadmap Overview & Pin Action */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: '22px',
              border: '1.5px solid #cbd5e1',
              padding: '22px 24px',
              marginBottom: '22px',
              boxShadow: '0 4px 18px -2px rgba(15, 23, 42, 0.05)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '1.5rem' }}>{activeRoadmap.icon}</span>
                  <h2
                    style={{
                      fontSize: '1.3rem',
                      fontWeight: 800,
                      color: '#0f172a',
                      margin: 0,
                    }}
                  >
                    {isEn
                      ? `${activeRoadmap.title_en} Learning Order`
                      : `${activeRoadmap.title_ko} 추천 학습 순서`}
                  </h2>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      padding: '3px 9px',
                      borderRadius: '8px',
                      background: '#f1f5f9',
                      border: '1px solid #cbd5e1',
                      color: '#475569',
                    }}
                  >
                    {isEn
                      ? `${activeRoadmapSteps.length} Steps`
                      : `총 ${activeRoadmapSteps.length}단계 코스`}
                  </span>
                </div>
                <p
                  style={{
                    color: '#475569',
                    fontSize: '0.88rem',
                    margin: '6px 0 0 0',
                    fontWeight: 500,
                  }}
                >
                  {isEn ? activeRoadmap.summary_en : activeRoadmap.summary_ko}
                </p>
              </div>

              {pinnedRoadmapId === activeRoadmap.id ? (
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '8px 14px',
                    borderRadius: '12px',
                    background: '#ecfeff',
                    border: '1.5px solid #0891b2',
                    color: '#0e7490',
                    fontSize: '0.82rem',
                    fontWeight: 800,
                  }}
                >
                  <CheckCircle2 size={15} />
                  <span>{isEn ? 'Pinned as My Roadmap' : '내 로드맵으로 설정됨'}</span>
                </span>
              ) : (
                <button
                  onClick={() => handlePinRoadmap(activeRoadmap.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 14px',
                    borderRadius: '12px',
                    background: '#f8fafc',
                    border: '1.5px solid #cbd5e1',
                    color: '#0f172a',
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                  }}
                >
                  <Pin size={14} color="#0891b2" />
                  <span>{isEn ? 'Set as My Roadmap' : '내 로드맵으로 설정'}</span>
                </button>
              )}
            </div>

            {/* Fallback quick-start bar when all steps in the selected roadmap are still locked */}
            {!hasUnlockedInActiveRoadmap && (
              <div
                style={{
                  marginTop: '14px',
                  padding: '11px 14px',
                  borderRadius: '12px',
                  background: '#f0f9ff',
                  border: '1px solid #bae6fd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '10px',
                }}
              >
                <span style={{ fontSize: '0.83rem', color: '#334155', fontWeight: 600 }}>
                  {isEn
                    ? 'Courses in this roadmap are opening soon. Start building core coding habits now with Python Basics.'
                    : '이 트랙의 전용 과정은 순차 오픈 예정입니다. 현재 오픈된 파이썬 베이직으로 코딩 기초를 먼저 시작해보세요.'}
                </span>
                <Link
                  href="/practice/python_basic"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    color: '#0284c7',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <span>{isEn ? 'Start Python Basics' : '파이썬 베이직 바로가기'}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            )}
          </div>

          {/* Ordered STEP 01 -> STEP N Cards */}
          <div className="curriculum-4col-grid">
            {activeRoadmapSteps.map(({ track, module }, idx) =>
              renderCourseCard(module, track, idx + 1)
            )}
          </div>
        </div>
      )}

      {/* =================================================================
          VIEW 2: ALL 13 LANGUAGE TRACKS CATALOG
          ================================================================= */}
      {viewMode === 'all' && (
        <>
          {/* Filter & Search Bar */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: '24px',
              padding: '22px 24px',
              border: '1.5px solid #cbd5e1',
              marginBottom: '32px',
              boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
            }}
          >
            {/* Language Tabs Row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                overflowX: 'auto',
                paddingTop: '6px',
                paddingBottom: '14px',
                paddingLeft: '4px',
                paddingRight: '4px',
                marginBottom: '18px',
                borderBottom: '1.5px solid #e2e8f0',
                scrollbarWidth: 'none',
              }}
            >
              {/* ALL Tracks Button */}
              {(() => {
                const isSelected = selectedTrackId === 'all';
                const isHovered = hoveredTrackId === 'all';
                const isExpanded = isSelected || isHovered;
                return (
                  <button
                    onClick={() => setSelectedTrackId('all')}
                    onMouseEnter={() => setHoveredTrackId('all')}
                    onMouseLeave={() => setHoveredTrackId(null)}
                    style={{
                      height: '52px',
                      padding: isExpanded ? '0 16px 0 10px' : '0 10px',
                      borderRadius: '16px',
                      flexShrink: 0,
                      background: isSelected
                        ? 'rgba(8, 145, 178, 0.12)'
                        : isHovered
                        ? '#f1f5f9'
                        : '#f8fafc',
                      border: isSelected
                        ? '2px solid #0891b2'
                        : isHovered
                        ? '1.5px solid #0891b2'
                        : '1.5px solid #cbd5e1',
                      boxShadow: isSelected ? '0 4px 14px rgba(8, 145, 178, 0.25)' : 'none',
                      transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                      transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: isExpanded ? '8px' : '0px',
                      cursor: 'pointer',
                      overflow: 'hidden',
                    }}
                  >
                    <LanguageIcon language="all" size={32} />
                    <div
                      style={{
                        maxWidth: isExpanded ? '100px' : '0px',
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
                          color: isSelected ? '#0891b2' : '#0f172a',
                        }}
                      >
                        {isEn ? 'All' : '전체'}
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

              {/* Each Language Track Button */}
              {CURRICULUM_TRACKS.map((track) => {
                const isSelected = selectedTrackId === track.id;
                const isHovered = hoveredTrackId === track.id;
                const isExpanded = isSelected || isHovered;
                const hasOpenModule = track.modules.some((m) => !m.isLocked);
                const pillLabel = getShortTrackLabel(track);

                return (
                  <button
                    key={track.id}
                    onClick={() =>
                      setSelectedTrackId(selectedTrackId === track.id ? 'all' : track.id)
                    }
                    onMouseEnter={() => setHoveredTrackId(track.id)}
                    onMouseLeave={() => setHoveredTrackId(null)}
                    style={{
                      height: '52px',
                      padding: isExpanded ? '0 16px 0 11px' : '0 11px',
                      borderRadius: '16px',
                      flexShrink: 0,
                      background: isSelected
                        ? `${track.color}18`
                        : isHovered
                        ? `${track.color}0d`
                        : '#f8fafc',
                      border: isSelected
                        ? `2px solid ${track.color}`
                        : isHovered
                        ? `1.5px solid ${track.color}`
                        : '1.5px solid #cbd5e1',
                      boxShadow: isSelected ? `0 4px 14px ${track.color}35` : 'none',
                      transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                      transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: isExpanded ? '8px' : '0px',
                      cursor: 'pointer',
                      overflow: 'hidden',
                      opacity: hasOpenModule || isSelected || isHovered ? 1 : 0.78,
                      position: 'relative',
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
                            fontSize: '0.7rem',
                            padding: '2px 6px',
                            borderRadius: '6px',
                            background: '#d1fae5',
                            color: '#047857',
                            fontWeight: 800,
                          }}
                        >
                          OPEN
                        </span>
                      ) : (
                        <Lock size={12} color="#64748b" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Search & Difficulty + Open-Only Controls Row */}
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

          {/* Curriculum Tracks Listing */}
          {filteredTracks.length === 0 ? (
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
                onClick={() => {
                  setSelectedTrackId('all');
                  setSearchQuery('');
                  setSelectedDifficulty('all');
                  setShowUnlockedOnly(false);
                }}
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
        </>
      )}

      {/* 10-Second Interactive Course Finder Modal */}
      <RoadmapFinderModal
        isOpen={isFinderOpen}
        isEn={isEn}
        onClose={() => setIsFinderOpen(false)}
        onSelectRoadmap={handlePinRoadmap}
      />
    </div>
  );
}
