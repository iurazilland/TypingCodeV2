'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Code2,
  Compass,
  Lock,
  Play,
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

  // Default: 'ai-data' (🤖 파이썬 · AI 마스터: 파이썬 베이직 -> 어드밴스 -> 빅데이터 -> 인공지능)
  const [selectedRoadmapId, setSelectedRoadmapId] = useState<string | null>('ai-data');
  const [selectedTrackId, setSelectedTrackId] = useState<string>('python');
  const [isTopBarOpen, setIsTopBarOpen] = useState<boolean>(false);
  const [isSelectHovered, setIsSelectHovered] = useState<boolean>(false);
  const [progressByModule, setProgressByModule] = useState<Record<string, number>>({});

  // Sync progress for unlocked modules
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const recomputeProgress = () => {
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
      } catch {
        setProgressByModule({});
      }
    };

    recomputeProgress();
    window.addEventListener(PROGRESS_SYNCED_EVENT, recomputeProgress);
    return () => window.removeEventListener(PROGRESS_SYNCED_EVENT, recomputeProgress);
  }, [user]);

  // Soft ice-cyan body background
  useEffect(() => {
    document.body.style.backgroundColor = '#e2eff6';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  const getShortTrackLabel = (track: LanguageTrack) => {
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
    if (track.id === 'web') return 'HTML/CSS';
    return isEn ? getTrackName(track, true) : track.name.split(' ')[0];
  };

  const getDifficultyLabel = (diff: CourseModule['difficulty']) => {
    if (diff === '입문') return isEn ? 'Beginner' : '입문';
    if (diff === '중급') return isEn ? 'Intermediate' : '중급';
    if (diff === '심화') return isEn ? 'Advanced' : '심화';
    return diff;
  };

  const activeRoadmap = useMemo(() => {
    if (!selectedRoadmapId) return null;
    return LEARNING_ROADMAPS.find((r) => r.id === selectedRoadmapId) || LEARNING_ROADMAPS[0];
  }, [selectedRoadmapId]);

  const activeLanguageTrack = useMemo(() => {
    if (selectedRoadmapId !== null) return null;
    return CURRICULUM_TRACKS.find((t) => t.id === selectedTrackId) || CURRICULUM_TRACKS[0];
  }, [selectedRoadmapId, selectedTrackId]);

  // Normalize current view into sequential stages
  const sequentialStages = useMemo(() => {
    let runningOrder = 0;

    if (activeRoadmap) {
      return activeRoadmap.stages.map((stage) => {
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
          .filter((item): item is NonNullable<typeof item> => item !== null);

        return {
          id: stage.id,
          stepNumber: stage.stepNumber,
          title: isEn ? stage.title_en : stage.title_ko,
          subtitle: isEn ? stage.subtitle_en : stage.subtitle_ko,
          items,
        };
      });
    }

    if (activeLanguageTrack) {
      const sortedModules = [...activeLanguageTrack.modules].sort(
        (a, b) => (DIFFICULTY_ORDER[a.difficulty] || 99) - (DIFFICULTY_ORDER[b.difficulty] || 99)
      );
      return sortedModules.map((mod, idx) => {
        runningOrder += 1;
        return {
          id: mod.id,
          stepNumber: idx + 1,
          title: `${idx + 1}${isEn ? ' Stage' : '단계'} · ${getCategoryName(mod.category, isEn)}`,
          subtitle: isEn ? mod.description_en : mod.description_ko,
          items: [
            {
              track: activeLanguageTrack,
              module: mod,
              orderNumber: runningOrder,
            },
          ],
        };
      });
    }

    return [];
  }, [activeRoadmap, activeLanguageTrack, isEn]);

  const renderSequentialCourseCard = (
    module: CourseModule,
    track: LanguageTrack,
    orderNumber: number,
    isSingleInStage: boolean
  ) => {
    const locked = Boolean(module.isLocked);
    const completedLevels = locked ? 0 : progressByModule[module.id] || 0;
    const progressPercent = locked
      ? 0
      : Math.min(100, Math.round((completedLevels / Math.max(1, module.totalLevels)) * 100));
    const isStarted = !locked && progressPercent > 0;
    const diffColor = DIFFICULTY_COLORS[module.difficulty] || '#10b981';

    if (isSingleInStage) {
      const innerHorizontal = (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
            width: '100%',
          }}
        >
          {/* Left: Language Icon + Badges + Title + Skills */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', flex: '1 1 320px', minWidth: 0 }}>
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '15px',
                background: locked ? '#f1f5f9' : '#f8fafc',
                border: '1.5px solid #cbd5e1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <LanguageIcon language={track.id} size={30} />
            </div>

            <div style={{ minWidth: 0, flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', marginBottom: '6px' }}>
                <span
                  style={{
                    padding: '2px 8px',
                    borderRadius: '6px',
                    background: locked ? '#e2e8f0' : `${diffColor}18`,
                    color: locked ? '#64748b' : diffColor,
                    border: locked ? '1px solid #cbd5e1' : `1px solid ${diffColor}45`,
                    fontSize: '0.72rem',
                    fontWeight: 800,
                  }}
                >
                  {getDifficultyLabel(module.difficulty)}
                </span>
                <span
                  style={{
                    padding: '2px 8px',
                    borderRadius: '6px',
                    background: '#f1f5f9',
                    color: '#475569',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                  }}
                >
                  {getShortTrackLabel(track)} · {getCategoryName(module.category, isEn)}
                </span>
                <span style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: 700 }}>
                  {module.totalLevels}
                  {isEn ? ' Stages' : '단계'}
                </span>
              </div>

              <h3
                style={{
                  fontSize: '1.08rem',
                  fontWeight: 800,
                  color: locked ? '#334155' : '#0f172a',
                  margin: '0 0 6px 0',
                  lineHeight: 1.3,
                  wordBreak: 'keep-all',
                }}
              >
                {isEn ? module.title_en : module.title_ko}
              </h3>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px' }}>
                {module.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      background: locked ? '#f1f5f9' : '#f8fafc',
                      border: '1px solid #e2e8f0',
                      fontSize: '0.75rem',
                      color: locked ? '#64748b' : '#334155',
                      fontWeight: 600,
                    }}
                  >
                    <CheckCircle2 size={12} color={locked ? '#94a3b8' : diffColor} />
                    <span>{getSkillName(skill, isEn)}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: CTA / Progress or Sequential Lock Status */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              justifyContent: 'center',
              minWidth: '200px',
              flexShrink: 0,
              marginLeft: 'auto',
            }}
          >
            {locked ? (
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 14px',
                  borderRadius: '12px',
                  background: '#f1f5f9',
                  border: '1.5px solid #cbd5e1',
                  color: '#64748b',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                }}
              >
                <Lock size={14} color="#64748b" />
                <span>{isEn ? 'Sequential Release' : '순차 오픈 예정'}</span>
              </div>
            ) : (
              <div style={{ width: '100%', minWidth: '210px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.74rem',
                    color: '#475569',
                    fontWeight: 700,
                    marginBottom: '5px',
                  }}
                >
                  <span>{isEn ? 'Progress' : '달성률'}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#0f172a' }}>
                    {completedLevels} / {module.totalLevels} ({progressPercent}%)
                  </span>
                </div>
                <div
                  style={{
                    width: '100%',
                    height: '6px',
                    borderRadius: '999px',
                    background: '#e2e8f0',
                    overflow: 'hidden',
                    marginBottom: '10px',
                  }}
                >
                  <div
                    style={{
                      width: `${progressPercent}%`,
                      height: '100%',
                      borderRadius: '999px',
                      background: 'linear-gradient(90deg, #10b981 0%, #0891b2 100%)',
                    }}
                  />
                </div>
                <div
                  style={{
                    padding: '10px 16px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #059669 0%, #0891b2 100%)',
                    color: '#ffffff',
                    fontSize: '0.86rem',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    boxShadow: '0 4px 12px rgba(5, 150, 105, 0.25)',
                  }}
                >
                  <Play size={14} fill="#ffffff" />
                  <span>
                    {isStarted
                      ? isEn
                        ? 'Continue Learning'
                        : '이어서 학습하기'
                      : isEn
                      ? 'Start Learning'
                      : '학습 시작하기'}
                  </span>
                  <ArrowRight size={14} />
                </div>
              </div>
            )}
          </div>
        </div>
      );

      if (locked) {
        return (
          <div
            key={module.id}
            style={{
              padding: '20px 24px',
              background: '#f8fafc',
              borderRadius: '20px',
              border: '1.5px solid #cbd5e1',
              opacity: 0.88,
            }}
          >
            {innerHorizontal}
          </div>
        );
      }

      return (
        <Link
          key={module.id}
          href={module.practiceUrl}
          style={{
            textDecoration: 'none',
            color: 'inherit',
            padding: '20px 24px',
            background: '#ffffff',
            borderRadius: '20px',
            border: `2px solid ${diffColor}`,
            boxShadow: `0 8px 22px -4px ${diffColor}24, 0 2px 6px rgba(15, 23, 42, 0.04)`,
            display: 'block',
            transition: 'transform 0.18s ease, box-shadow 0.18s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          {innerHorizontal}
        </Link>
      );
    }

    const cardInner = (
      <>
        <div>
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
                fontSize: '0.7rem',
                fontWeight: 800,
                fontFamily: 'var(--font-mono)',
                padding: '2px 7px',
                borderRadius: '6px',
                background: locked ? '#e2e8f0' : '#d1fae5',
                color: locked ? '#475569' : '#047857',
              }}
            >
              STEP {String(orderNumber).padStart(2, '0')}
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

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span
                style={{
                  padding: '2px 7px',
                  borderRadius: '6px',
                  background: locked ? '#e2e8f0' : `${diffColor}18`,
                  color: locked ? '#64748b' : diffColor,
                  fontSize: '0.7rem',
                  fontWeight: 800,
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
                  fontSize: '0.7rem',
                  fontWeight: 700,
                }}
              >
                {getCategoryName(module.category, isEn)}
              </span>
            </div>
            <span style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 600 }}>
              {module.totalLevels}
              {isEn ? ' Stages' : '단계'}
            </span>
          </div>

          <h3
            style={{
              fontSize: '0.96rem',
              fontWeight: 800,
              color: locked ? '#334155' : '#0f172a',
              marginBottom: '10px',
              lineHeight: 1.35,
              wordBreak: 'keep-all',
            }}
          >
            {isEn ? module.title_en : module.title_ko}
          </h3>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              marginBottom: '12px',
              padding: '10px 12px',
              borderRadius: '12px',
              background: locked ? '#f1f5f9' : '#f8fafc',
              border: '1px solid #e2e8f0',
            }}
          >
            {module.skills.map((skill, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.75rem',
                  color: locked ? '#64748b' : '#334155',
                  fontWeight: 500,
                }}
              >
                <CheckCircle2 size={12} color={locked ? '#94a3b8' : diffColor} style={{ flexShrink: 0 }} />
                <span>{getSkillName(skill, isEn)}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ paddingTop: '10px', borderTop: '1px solid #e2e8f0' }}>
          {locked ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: '#64748b',
                fontSize: '0.74rem',
                fontWeight: 700,
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <Lock size={13} />
                <span>{isEn ? 'Coming Soon' : '준비 중'}</span>
              </span>
              <span style={{ fontSize: '0.68rem', color: '#94a3b8' }}>
                {isEn ? 'Sequential Release' : '순차 오픈 예정'}
              </span>
            </div>
          ) : (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '0.78rem',
                fontWeight: 800,
                color: diffColor,
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <span>
                  {isStarted
                    ? isEn
                      ? `Continue (${progressPercent}%)`
                      : `이어하기 (${progressPercent}%)`
                    : isEn
                    ? 'Start Learning'
                    : '학습 시작'}
                </span>
                <ArrowRight size={13} />
              </span>
              <span style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                {completedLevels}/{module.totalLevels}
              </span>
            </div>
          )}
        </div>
      </>
    );

    if (locked) {
      return (
        <div
          key={module.id}
          style={{
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            background: '#f8fafc',
            borderRadius: '18px',
            border: '1.5px solid #cbd5e1',
            opacity: 0.85,
          }}
        >
          {cardInner}
        </div>
      );
    }

    return (
      <Link
        key={module.id}
        href={module.practiceUrl}
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
          boxShadow: `0 6px 18px -2px ${diffColor}22`,
        }}
      >
        {cardInner}
      </Link>
    );
  };

  const activeAccentColor = activeRoadmap
    ? activeRoadmap.color
    : activeLanguageTrack?.color || '#10b981';

  return (
    <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '28px 20px 96px' }}>
      {/* =====================================================================
          TOP HEADER + SMOOTH PUSH-DOWN COLLAPSIBLE BAR
          (Click the title/header area or bottom handle tab to expand/collapse)
          ===================================================================== */}
      <div
        style={{
          background: '#ffffff',
          borderRadius: '24px',
          border: isTopBarOpen ? `2px solid ${activeAccentColor}` : '1.5px solid #cbd5e1',
          marginBottom: '28px',
          boxShadow: isTopBarOpen
            ? '0 14px 32px -6px rgba(15, 23, 42, 0.1)'
            : '0 6px 20px -4px rgba(15, 23, 42, 0.05)',
          transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
          overflow: 'hidden',
        }}
      >
        {/* Header Row with Tactile Dropdown Select Capsule */}
        <div
          style={{
            padding: '20px 26px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            background: isTopBarOpen ? '#f8fafc' : '#ffffff',
            transition: 'background-color 0.2s ease',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              minWidth: 0,
              flex: 1,
            }}
          >
            {/* Tactile Select Box Capsule: [ 🌱 코딩 첫걸음 | ▾ ] */}
            <button
              type="button"
              onClick={() => setIsTopBarOpen((prev) => !prev)}
              onMouseEnter={() => setIsSelectHovered(true)}
              onMouseLeave={() => setIsSelectHovered(false)}
              aria-expanded={isTopBarOpen}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '8px 10px 8px 12px',
                borderRadius: '16px',
                background: isTopBarOpen
                  ? '#ffffff'
                  : isSelectHovered
                  ? '#f8fafc'
                  : '#f8fafc',
                border:
                  isTopBarOpen || isSelectHovered
                    ? `2px solid ${activeAccentColor}`
                    : '2px solid #94a3b8',
                boxShadow:
                  isTopBarOpen || isSelectHovered
                    ? `0 6px 18px -4px ${activeAccentColor}35, inset 0 1px 0 #ffffff`
                    : '0 3px 8px rgba(15, 23, 42, 0.06), inset 0 1px 0 #ffffff',
                cursor: 'pointer',
                transition: 'all 0.18s ease',
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '11px',
                  background: `${activeAccentColor}16`,
                  border: `1.5px solid ${activeAccentColor}45`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.22rem',
                  flexShrink: 0,
                }}
              >
                {activeRoadmap ? (
                  activeRoadmap.icon
                ) : (
                  <LanguageIcon language={activeLanguageTrack?.id || 'python'} size={22} />
                )}
              </div>

              <span
                style={{
                  fontSize: 'clamp(1.12rem, 2vw, 1.35rem)',
                  fontWeight: 900,
                  color: '#0f172a',
                  letterSpacing: '-0.02em',
                  whiteSpace: 'nowrap',
                }}
              >
                {activeRoadmap
                  ? isEn
                    ? activeRoadmap.title_en
                    : activeRoadmap.title_ko
                  : activeLanguageTrack
                  ? getTrackName(activeLanguageTrack, isEn)
                  : ''}
              </span>

              {/* Select Box Divider + Dropdown Chevron Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  paddingLeft: '10px',
                  marginLeft: '2px',
                  borderLeft: '1.5px solid #cbd5e1',
                }}
              >
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '9px',
                    background:
                      isTopBarOpen || isSelectHovered ? activeAccentColor : '#e2e8f0',
                    color: isTopBarOpen || isSelectHovered ? '#ffffff' : '#334155',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.18s ease',
                  }}
                >
                  <ChevronDown
                    size={17}
                    strokeWidth={2.6}
                    style={{
                      transform: isTopBarOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.28s cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  />
                </div>
              </div>
            </button>

            {/* Target Badge + 1-Line Curriculum Summary */}
            <div style={{ minWidth: '220px', flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                <span
                  style={{
                    padding: '2px 9px',
                    borderRadius: '999px',
                    background: `${activeAccentColor}16`,
                    color: activeAccentColor,
                    fontSize: '0.73rem',
                    fontWeight: 800,
                  }}
                >
                  {activeRoadmap
                    ? isEn
                      ? activeRoadmap.target_en
                      : activeRoadmap.target_ko
                    : activeLanguageTrack?.badge}
                </span>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: '0.86rem',
                  color: '#64748b',
                  fontWeight: 500,
                }}
              >
                {activeRoadmap
                  ? isEn
                    ? activeRoadmap.summary_en
                    : activeRoadmap.summary_ko
                  : isEn
                  ? activeLanguageTrack?.tagline_en
                  : activeLanguageTrack?.tagline_ko}
              </p>
            </div>
          </div>
        </div>

        {/* =================================================================
            SMOOTH PUSH-DOWN ACCORDION PANEL (grid-template-rows: 0fr -> 1fr)
            Pushes down the timeline naturally when opened
            ================================================================= */}
        <div
          style={{
            display: 'grid',
            gridTemplateRows: isTopBarOpen ? '1fr' : '0fr',
            opacity: isTopBarOpen ? 1 : 0,
            transition:
              'grid-template-rows 0.32s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.24s ease',
          }}
        >
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{
                padding: '18px 26px 22px',
                borderTop: '1px solid #e2e8f0',
                background: '#f8fafc',
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
              }}
            >
              {/* 1. Curated Learning Roadmaps Row */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.76rem',
                    fontWeight: 800,
                    color: '#475569',
                    marginBottom: '10px',
                  }}
                >
                  <Compass size={14} color="#0891b2" />
                  <span>{isEn ? 'RECOMMENDED CURRICULUMS' : '추천 커리큘럼'}</span>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                    gap: '8px',
                  }}
                >
                  {LEARNING_ROADMAPS.map((rm) => {
                    const isSelected = selectedRoadmapId === rm.id;
                    return (
                      <button
                        key={rm.id}
                        onClick={() => {
                          setSelectedRoadmapId(rm.id);
                          setIsTopBarOpen(false);
                        }}
                        style={{
                          textAlign: 'left',
                          padding: '10px 12px',
                          borderRadius: '12px',
                          background: isSelected ? `${rm.color}16` : '#ffffff',
                          border: isSelected ? `1.5px solid ${rm.color}` : '1.5px solid #cbd5e1',
                          cursor: 'pointer',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '3px',
                          transition: 'all 0.15s ease',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span style={{ fontSize: '1.05rem' }}>{rm.icon}</span>
                          <span
                            style={{
                              fontSize: '0.84rem',
                              fontWeight: 800,
                              color: isSelected ? rm.color : '#0f172a',
                            }}
                          >
                            {isEn ? rm.title_en : rm.title_ko}
                          </span>
                        </div>
                        <span
                          style={{
                            fontSize: '0.71rem',
                            color: '#64748b',
                            fontWeight: 600,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {isEn ? rm.target_en : rm.target_ko}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Programming Languages Row */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.76rem',
                    fontWeight: 800,
                    color: '#475569',
                    marginBottom: '10px',
                  }}
                >
                  <Code2 size={14} color="#0284c7" />
                  <span>{isEn ? 'BY LANGUAGE' : '언어별 과정'}</span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {CURRICULUM_TRACKS.map((track) => {
                    const isSelected = selectedRoadmapId === null && selectedTrackId === track.id;
                    const hasOpen = track.modules.some((m) => !m.isLocked);
                    return (
                      <button
                        key={track.id}
                        onClick={() => {
                          setSelectedRoadmapId(null);
                          setSelectedTrackId(track.id);
                          setIsTopBarOpen(false);
                        }}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '7px',
                          padding: '7px 12px',
                          borderRadius: '11px',
                          background: isSelected ? `${track.color}18` : '#ffffff',
                          border: isSelected ? `1.5px solid ${track.color}` : '1.5px solid #cbd5e1',
                          cursor: 'pointer',
                          fontSize: '0.8rem',
                          fontWeight: 800,
                          color: isSelected ? track.color : '#0f172a',
                          transition: 'all 0.15s ease',
                        }}
                      >
                        <LanguageIcon language={track.id} size={18} />
                        <span>{getShortTrackLabel(track)}</span>
                        {!hasOpen && <Lock size={11} color="#94a3b8" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Sequential Step Summary Bar (STEP 01 -> STEP 02 -> STEP 03 -> STEP 04) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 26px 14px',
            borderTop: '1px solid #e2e8f0',
            background: '#ffffff',
            overflowX: 'auto',
            scrollbarWidth: 'none',
          }}
        >
          {sequentialStages.map((stage, idx) => {
            const firstMod = stage.items[0]?.module;
            const isOpen = firstMod && !firstMod.isLocked;
            return (
              <React.Fragment key={stage.id}>
                <a
                  href={`#stage-${stage.stepNumber}`}
                  style={{
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 11px',
                    borderRadius: '10px',
                    background: isOpen ? '#ecfdf5' : '#f8fafc',
                    border: isOpen ? '1.5px solid #6ee7b7' : '1px solid #e2e8f0',
                    color: isOpen ? '#047857' : '#475569',
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '6px',
                      background: isOpen ? '#059669' : '#cbd5e1',
                      color: '#ffffff',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    0{stage.stepNumber}
                  </span>
                  <span>
                    {stage.items.length === 1 && firstMod
                      ? getCategoryName(firstMod.category, isEn)
                      : stage.title.replace(/^\d+단계\s*·\s*/, '')}
                  </span>
                </a>
                {idx < sequentialStages.length - 1 && (
                  <ArrowRight size={14} color="#94a3b8" style={{ flexShrink: 0 }} />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* =====================================================================
          MAIN SEQUENTIAL TIMELINE VIEW (STEP 01 ↓ STEP 02 ↓ STEP 03 ↓ STEP 04)
          ===================================================================== */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {sequentialStages.map((stage, idx) => {
          const isLast = idx === sequentialStages.length - 1;
          const hasOpenCourse = stage.items.some((i) => !i.module.isLocked);
          const isSingle = stage.items.length === 1;

          return (
            <div
              key={stage.id}
              id={`stage-${stage.stepNumber}`}
              style={{
                display: 'flex',
                alignItems: 'stretch',
                gap: '20px',
              }}
            >
              {/* Left Vertical Stepper Spine */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '44px',
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '14px',
                    background: hasOpenCourse ? '#059669' : '#ffffff',
                    border: hasOpenCourse ? '2px solid #059669' : '2px solid #cbd5e1',
                    color: hasOpenCourse ? '#ffffff' : '#475569',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 900,
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: hasOpenCourse
                      ? '0 4px 12px rgba(5, 150, 105, 0.28)'
                      : '0 2px 6px rgba(15, 23, 42, 0.04)',
                    flexShrink: 0,
                  }}
                >
                  0{stage.stepNumber}
                </div>

                {!isLast && (
                  <div
                    style={{
                      width: '2.5px',
                      flex: 1,
                      minHeight: '28px',
                      background: hasOpenCourse
                        ? 'linear-gradient(180deg, #10b981 0%, #cbd5e1 100%)'
                        : '#cbd5e1',
                      margin: '6px 0',
                      borderRadius: '999px',
                    }}
                  />
                )}
              </div>

              {/* Right Stage Content + Course Cards */}
              <div
                style={{
                  flex: 1,
                  minWidth: 0,
                  paddingBottom: isLast ? '0px' : '28px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '10px',
                    flexWrap: 'wrap',
                    marginBottom: '12px',
                  }}
                >
                  <h2
                    style={{
                      fontSize: '1.12rem',
                      fontWeight: 800,
                      color: '#0f172a',
                      margin: 0,
                    }}
                  >
                    {stage.title}
                  </h2>
                  <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 500 }}>
                    {stage.subtitle}
                  </span>
                </div>

                {isSingle ? (
                  renderSequentialCourseCard(
                    stage.items[0].module,
                    stage.items[0].track,
                    stage.items[0].orderNumber,
                    true
                  )
                ) : (
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                      gap: '14px',
                    }}
                  >
                    {stage.items.map(({ module, track, orderNumber }) =>
                      renderSequentialCourseCard(module, track, orderNumber, false)
                    )}
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
