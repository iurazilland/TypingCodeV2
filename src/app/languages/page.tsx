'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Compass,
  Play,
  Sparkles,
  Code2,
  X,
} from 'lucide-react';
import {
  CURRICULUM_TRACKS,
  LEARNING_ROADMAPS,
  LanguageTrack,
  CourseModule,
  DIFFICULTY_COLORS,
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

  const [pythonClearedCount, setPythonClearedCount] = useState<number>(0);
  const [selectedOtherTrackId, setSelectedOtherTrackId] = useState<string | null>(null);
  const [selectedRoadmapId, setSelectedRoadmapId] = useState<string | null>(null);

  const pythonTrack = useMemo(
    () => CURRICULUM_TRACKS.find((t) => t.id === 'python') || CURRICULUM_TRACKS[0],
    []
  );
  const pyBasicModule = useMemo(
    () => pythonTrack.modules.find((m) => m.id === 'py-basic') || pythonTrack.modules[0],
    [pythonTrack]
  );
  const pyNextSteps = useMemo(
    () => pythonTrack.modules.filter((m) => m.id !== 'py-basic'),
    [pythonTrack]
  );
  const otherLanguageTracks = useMemo(
    () => CURRICULUM_TRACKS.filter((t) => t.id !== 'python'),
    []
  );

  // Sync Python Basic progress
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const recomputeProgress = () => {
      try {
        const cleared = getClearedLevelsLocal('python_basic').filter(
          (lvl) => lvl >= 1 && lvl <= pyBasicModule.totalLevels
        ).length;
        setPythonClearedCount(cleared);
      } catch {
        setPythonClearedCount(0);
      }
    };

    recomputeProgress();
    window.addEventListener(PROGRESS_SYNCED_EVENT, recomputeProgress);
    return () => window.removeEventListener(PROGRESS_SYNCED_EVENT, recomputeProgress);
  }, [user, pyBasicModule.totalLevels]);

  // Matte soft ice-cyan body background
  useEffect(() => {
    document.body.style.backgroundColor = '#e2eff6';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  const pyProgressPercent = Math.min(
    100,
    Math.round((pythonClearedCount / Math.max(1, pyBasicModule.totalLevels)) * 100)
  );
  const isPyStarted = pythonClearedCount > 0;

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
    if (track.id === 'web') return 'HTML/CSS';
    return isEn ? getTrackName(track, true) : track.name.split(' ')[0];
  };

  const getDifficultyLabel = (diff: CourseModule['difficulty']) => {
    if (diff === '입문') return isEn ? 'Beginner' : '입문';
    if (diff === '중급') return isEn ? 'Intermediate' : '중급';
    if (diff === '심화') return isEn ? 'Advanced' : '심화';
    return diff;
  };

  const selectedOtherTrack = useMemo(
    () => otherLanguageTracks.find((t) => t.id === selectedOtherTrackId) || null,
    [otherLanguageTracks, selectedOtherTrackId]
  );

  const selectedRoadmap = useMemo(
    () => LEARNING_ROADMAPS.find((r) => r.id === selectedRoadmapId) || null,
    [selectedRoadmapId]
  );

  const stepGoalBadgesKo = ['심화 문법·설계', '데이터 분석·처리', '최종 목표 · AI 모델링'];
  const stepGoalBadgesEn = ['Advanced Design', 'Data Analytics', 'Final Goal · AI & ML'];

  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '28px 20px 96px' }}>
      {/* =====================================================================
          1. HERO SECTION: PYTHON BASICS (START HERE) -> AI 4-STEP MASTER TRACK
          ===================================================================== */}
      <section
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
          borderRadius: '28px',
          border: '2px solid #7dd3fc',
          boxShadow: '0 14px 34px -8px rgba(2, 132, 199, 0.12), 0 4px 12px rgba(15, 23, 42, 0.04)',
          padding: '28px 28px 26px',
          marginBottom: '24px',
        }}
      >
        {/* Section Top Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '20px',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: '999px',
                background: '#ecfdf5',
                border: '1.5px solid #6ee7b7',
                color: '#047857',
                fontSize: '0.78rem',
                fontWeight: 800,
                marginBottom: '8px',
              }}
            >
              <Sparkles size={14} />
              <span>
                {isEn
                  ? 'RECOMMENDED START · PYTHON TO AI SEQUENTIAL TRACK'
                  : '입문 필수 추천 · 파이썬 기초부터 인공지능(AI)까지 순차 성장 코스'}
              </span>
            </div>
            <h1
              style={{
                fontSize: 'clamp(1.45rem, 2.5vw, 1.95rem)',
                fontWeight: 900,
                color: '#0f172a',
                margin: 0,
                letterSpacing: '-0.02em',
                lineHeight: 1.25,
              }}
            >
              {isEn
                ? 'Start with Python Basics, Progress Step-by-Step to AI'
                : '고민 없이 파이썬 베이직부터 시작하세요'}
            </h1>
            <p
              style={{
                margin: '6px 0 0 0',
                fontSize: '0.92rem',
                color: '#475569',
                fontWeight: 500,
              }}
            >
              {isEn
                ? 'Master foundational syntax in Step 1, then advance sequentially through OOP, Big Data, and Machine Learning AI.'
                : '1단계 기초 문법만 차근차근 완주하면 심화 문법 ➔ 빅데이터 분석 ➔ 인공지능(AI) 과정까지 순서대로 이어집니다.'}
            </p>
          </div>
        </div>

        {/* 2-Column Layout: Left = Active STEP 1 Start Card | Right = STEP 2 -> 3 -> 4 AI Path */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px',
            alignItems: 'stretch',
          }}
        >
          {/* LEFT: STEP 1 - PYTHON BASICS PRIMARY START CARD */}
          <Link
            href={pyBasicModule.practiceUrl}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              background: '#ffffff',
              borderRadius: '22px',
              border: '2.5px solid #10b981',
              boxShadow: '0 10px 28px -4px rgba(16, 185, 129, 0.2), 0 2px 8px rgba(15, 23, 42, 0.05)',
              padding: '22px 24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              transition: 'transform 0.18s ease, box-shadow 0.18s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow =
                '0 16px 34px -4px rgba(16, 185, 129, 0.28), 0 4px 12px rgba(15, 23, 42, 0.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow =
                '0 10px 28px -4px rgba(16, 185, 129, 0.2), 0 2px 8px rgba(15, 23, 42, 0.05)';
            }}
          >
            <div>
              {/* Top Row: Step 1 Badge + Status Pill */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '8px',
                  marginBottom: '14px',
                }}
              >
                <span
                  style={{
                    padding: '4px 10px',
                    borderRadius: '8px',
                    background: '#059669',
                    color: '#ffffff',
                    fontSize: '0.75rem',
                    fontWeight: 900,
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.03em',
                  }}
                >
                  {isEn ? 'STEP 01 · START HERE' : 'STEP 01 · 여기서 시작!'}
                </span>

                <span
                  style={{
                    padding: '4px 10px',
                    borderRadius: '8px',
                    background: '#ecfdf5',
                    border: '1px solid #6ee7b7',
                    color: '#047857',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                  }}
                >
                  {isPyStarted
                    ? isEn
                      ? `🔥 In Progress (${pyProgressPercent}%)`
                      : `🔥 학습 중 (${pyProgressPercent}%)`
                    : isEn
                    ? '✅ Open · 87 Levels'
                    : '✅ 바로 학습 가능 · 87레벨'}
                </span>
              </div>

              {/* Icon + Title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '16px',
                    background: '#f8fafc',
                    border: '1.5px solid #cbd5e1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <LanguageIcon language="python" size={34} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#059669', marginBottom: '2px' }}>
                    {isEn ? 'Beginner Friendly · Block + Typing' : '입문자 맞춤형 · 블록 조립 + 코드 타이핑'}
                  </div>
                  <h2
                    style={{
                      fontSize: '1.22rem',
                      fontWeight: 900,
                      color: '#0f172a',
                      margin: 0,
                      lineHeight: 1.3,
                      wordBreak: 'keep-all',
                    }}
                  >
                    {isEn ? 'Python Basics (Lv 1 ~ 87)' : '파이썬 베이직 (Lv 1 ~ 87)'}
                  </h2>
                </div>
              </div>

              {/* Key Skills Summary */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '6px 12px',
                  padding: '12px 14px',
                  borderRadius: '14px',
                  background: '#f8fafc',
                  border: '1.5px solid #e2e8f0',
                  marginBottom: '16px',
                }}
              >
                {pyBasicModule.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.78rem',
                      color: '#334155',
                      fontWeight: 600,
                    }}
                  >
                    <CheckCircle2 size={14} color="#10b981" style={{ flexShrink: 0 }} />
                    <span>{getSkillName(skill, isEn)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Progress & Big CTA Button */}
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '0.76rem',
                  color: '#475569',
                  fontWeight: 700,
                  marginBottom: '6px',
                }}
              >
                <span>{isEn ? 'My Progress' : '나의 학습 진도'}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#0f172a' }}>
                  {pythonClearedCount} / {pyBasicModule.totalLevels} ({pyProgressPercent}%)
                </span>
              </div>
              <div
                style={{
                  width: '100%',
                  height: '7px',
                  borderRadius: '999px',
                  background: '#e2e8f0',
                  overflow: 'hidden',
                  marginBottom: '14px',
                }}
              >
                <div
                  style={{
                    width: `${pyProgressPercent}%`,
                    height: '100%',
                    borderRadius: '999px',
                    background: 'linear-gradient(90deg, #10b981 0%, #0891b2 100%)',
                    transition: 'width 0.35s ease',
                  }}
                />
              </div>

              <div
                style={{
                  width: '100%',
                  padding: '13px 18px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #059669 0%, #0891b2 100%)',
                  color: '#ffffff',
                  fontWeight: 900,
                  fontSize: '0.98rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 6px 16px rgba(5, 150, 105, 0.28)',
                }}
              >
                <Play size={17} fill="#ffffff" />
                <span>
                  {isPyStarted
                    ? isEn
                      ? 'Continue Python Basics'
                      : '파이썬 베이직 이어서 학습하기'
                    : isEn
                    ? 'Start Python Basics Now'
                    : '파이썬 베이직 바로 시작하기'}
                </span>
                <ArrowRight size={17} />
              </div>
            </div>
          </Link>

          {/* RIGHT: SEQUENTIAL AI GROWTH ROADMAP (STEP 2 -> STEP 3 -> STEP 4) */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: '22px',
              border: '1.5px solid #cbd5e1',
              padding: '20px 22px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ marginBottom: '12px' }}>
              <div
                style={{
                  fontSize: '0.76rem',
                  fontWeight: 800,
                  color: '#0284c7',
                  letterSpacing: '0.03em',
                  marginBottom: '3px',
                }}
              >
                {isEn ? 'WHAT COMES NEXT?' : '파이썬 기초를 마스터하면 어디까지 갈 수 있나요?'}
              </div>
              <h3
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  color: '#0f172a',
                  margin: 0,
                }}
              >
                {isEn
                  ? 'Sequential Growth Path to Data Science & AI'
                  : '기초부터 인공지능(AI)까지 이어지는 다음 단계 로드맵'}
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {pyNextSteps.map((mod, idx) => {
                const stepNum = idx + 2;
                const diffColor = DIFFICULTY_COLORS[mod.difficulty] || '#3b82f6';
                const badgeText = isEn
                  ? stepGoalBadgesEn[idx] || mod.category
                  : stepGoalBadgesKo[idx] || mod.category;
                const isFinalAi = mod.id === 'py-ai';

                return (
                  <div
                    key={mod.id}
                    style={{
                      padding: '12px 14px',
                      borderRadius: '16px',
                      background: isFinalAi
                        ? 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)'
                        : '#f8fafc',
                      border: isFinalAi ? '1.5px solid #d8b4fe' : '1.5px solid #e2e8f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '12px',
                          background: `${diffColor}15`,
                          border: `1.5px solid ${diffColor}45`,
                          color: diffColor,
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 900,
                          fontSize: '0.82rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        0{stepNum}
                      </div>

                      <div style={{ minWidth: 0 }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            flexWrap: 'wrap',
                            marginBottom: '2px',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '0.68rem',
                              fontWeight: 800,
                              padding: '1px 7px',
                              borderRadius: '6px',
                              background: `${diffColor}18`,
                              color: diffColor,
                            }}
                          >
                            {badgeText}
                          </span>
                          <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700 }}>
                            {mod.totalLevels}
                            {isEn ? ' Levels' : '레벨'}
                          </span>
                        </div>

                        <div
                          style={{
                            fontSize: '0.92rem',
                            fontWeight: 800,
                            color: '#0f172a',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {isEn ? mod.title_en : mod.title_ko}
                        </div>

                        <div
                          style={{
                            fontSize: '0.75rem',
                            color: '#64748b',
                            fontWeight: 500,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            marginTop: '2px',
                          }}
                        >
                          {mod.skills
                            .slice(0, 3)
                            .map((s) => getSkillName(s, isEn))
                            .join(' · ')}
                        </div>
                      </div>
                    </div>

                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        padding: '4px 9px',
                        borderRadius: '8px',
                        background: isFinalAi ? '#f3e8ff' : '#e2e8f0',
                        color: isFinalAi ? '#7e22ce' : '#475569',
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                      }}
                    >
                      {isEn ? `Step ${stepNum}` : `${stepNum}단계 과정`}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. COMPACT BAR: OTHER PROGRAMMING LANGUAGES (12 LANGUAGES)
          ===================================================================== */}
      <section
        style={{
          background: '#ffffff',
          borderRadius: '22px',
          border: '1.5px solid #cbd5e1',
          padding: '20px 24px',
          marginBottom: '20px',
          boxShadow: '0 4px 14px rgba(15, 23, 42, 0.04)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '14px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Code2 size={18} color="#0284c7" />
            <h2 style={{ fontSize: '1.02rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              {isEn ? 'Explore Other Programming Languages' : '다른 프로그래밍 언어로도 확장할 수 있어요'}
            </h2>
          </div>
          <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>
            {isEn
              ? 'Click a language chip to preview its step-by-step curriculum'
              : '언어를 클릭하면 해당 언어의 단계별 커리큘럼 구성을 미리 볼 수 있습니다'}
          </span>
        </div>

        {/* Compact Language Chips */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap',
          }}
        >
          {otherLanguageTracks.map((track) => {
            const isSelected = selectedOtherTrackId === track.id;
            return (
              <button
                key={track.id}
                onClick={() =>
                  setSelectedOtherTrackId((prev) => (prev === track.id ? null : track.id))
                }
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  padding: '7px 13px',
                  borderRadius: '12px',
                  background: isSelected ? `${track.color}15` : '#f8fafc',
                  border: isSelected ? `1.5px solid ${track.color}` : '1.5px solid #cbd5e1',
                  color: isSelected ? '#0f172a' : '#334155',
                  fontSize: '0.83rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                <LanguageIcon language={track.id} size={18} />
                <span>{getShortTrackLabel(track)}</span>
                <span
                  style={{
                    fontSize: '0.68rem',
                    padding: '1px 5px',
                    borderRadius: '5px',
                    background: isSelected ? `${track.color}25` : '#e2e8f0',
                    color: '#475569',
                    fontWeight: 700,
                  }}
                >
                  {track.modules.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Inline Preview Drawer when a language chip is clicked */}
        {selectedOtherTrack && (
          <div
            style={{
              marginTop: '16px',
              padding: '16px 18px',
              borderRadius: '16px',
              background: '#f8fafc',
              border: `1.5px solid ${selectedOtherTrack.color}55`,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                marginBottom: '12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                <LanguageIcon language={selectedOtherTrack.id} size={22} />
                <strong style={{ fontSize: '0.95rem', color: '#0f172a', fontWeight: 800 }}>
                  {getTrackName(selectedOtherTrack, isEn)}
                </strong>
                <span
                  style={{
                    fontSize: '0.72rem',
                    padding: '2px 8px',
                    borderRadius: '6px',
                    background: '#e2e8f0',
                    color: '#475569',
                    fontWeight: 700,
                  }}
                >
                  {selectedOtherTrack.badge}
                </span>
                <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 500 }}>
                  {isEn ? selectedOtherTrack.tagline_en : selectedOtherTrack.tagline_ko}
                </span>
              </div>

              <button
                onClick={() => setSelectedOtherTrackId(null)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#64748b',
                  cursor: 'pointer',
                  padding: '4px',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
                aria-label="Close preview"
              >
                <X size={16} />
              </button>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '10px',
              }}
            >
              {selectedOtherTrack.modules.map((mod, idx) => {
                const diffColor = DIFFICULTY_COLORS[mod.difficulty] || '#3b82f6';
                return (
                  <div
                    key={mod.id}
                    style={{
                      padding: '12px 14px',
                      borderRadius: '12px',
                      background: '#ffffff',
                      border: '1.5px solid #e2e8f0',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '6px',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '4px',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '0.68rem',
                            fontWeight: 800,
                            padding: '1px 6px',
                            borderRadius: '5px',
                            background: `${diffColor}18`,
                            color: diffColor,
                          }}
                        >
                          STEP 0{idx + 1} · {getDifficultyLabel(mod.difficulty)}
                        </span>
                        <span style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 700 }}>
                          {getCategoryName(mod.category, isEn)} · {mod.totalLevels}
                          {isEn ? 'Lv' : '레벨'}
                        </span>
                      </div>
                      <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0f172a' }}>
                        {isEn ? mod.title_en : mod.title_ko}
                      </div>
                    </div>
                    <div style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: 500 }}>
                      {mod.skills
                        .slice(0, 2)
                        .map((s) => getSkillName(s, isEn))
                        .join(' · ')}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>

      {/* =====================================================================
          3. COMPACT BAR: GOAL-BASED RECOMMENDED CURRICULUM ROADMAPS (5 TRACKS)
          ===================================================================== */}
      <section
        style={{
          background: '#ffffff',
          borderRadius: '22px',
          border: '1.5px solid #cbd5e1',
          padding: '20px 24px',
          boxShadow: '0 4px 14px rgba(15, 23, 42, 0.04)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '14px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Compass size={18} color="#0891b2" />
            <h2 style={{ fontSize: '1.02rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              {isEn ? 'Goal-Based Recommended Roadmaps' : '목표 진로별 추천 학습 커리큘럼'}
            </h2>
          </div>
          <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>
            {isEn
              ? 'Select a career direction to see the recommended course sequence'
              : '관심 분야를 선택하면 어떤 순서로 언어를 조합해 배우면 좋은지 확인할 수 있습니다'}
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
            gap: '10px',
          }}
        >
          {LEARNING_ROADMAPS.map((rm) => {
            const isSelected = selectedRoadmapId === rm.id;
            return (
              <button
                key={rm.id}
                onClick={() => setSelectedRoadmapId((prev) => (prev === rm.id ? null : rm.id))}
                style={{
                  textAlign: 'left',
                  padding: '12px 14px',
                  borderRadius: '14px',
                  background: isSelected ? `${rm.color}12` : '#f8fafc',
                  border: isSelected ? `1.5px solid ${rm.color}` : '1.5px solid #cbd5e1',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '6px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '1.05rem' }}>{rm.icon}</span>
                    <span
                      style={{
                        fontSize: '0.88rem',
                        fontWeight: 800,
                        color: isSelected ? rm.color : '#0f172a',
                      }}
                    >
                      {isEn ? rm.title_en : rm.title_ko}
                    </span>
                  </div>
                  <ChevronRight
                    size={15}
                    color={isSelected ? rm.color : '#94a3b8'}
                    style={{
                      transform: isSelected ? 'rotate(90deg)' : 'none',
                      transition: 'transform 0.15s ease',
                    }}
                  />
                </div>
                <div style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: 600 }}>
                  {isEn ? rm.target_en : rm.target_ko}
                </div>
              </button>
            );
          })}
        </div>

        {/* Inline Preview of 3-Stage Sequence when a Roadmap is clicked */}
        {selectedRoadmap && (
          <div
            style={{
              marginTop: '16px',
              padding: '16px 18px',
              borderRadius: '16px',
              background: '#f8fafc',
              border: `1.5px solid ${selectedRoadmap.color}55`,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                marginBottom: '12px',
              }}
            >
              <div>
                <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0f172a' }}>
                  {selectedRoadmap.icon} {isEn ? selectedRoadmap.title_en : selectedRoadmap.title_ko}
                </span>
                <span style={{ fontSize: '0.8rem', color: '#64748b', marginLeft: '10px' }}>
                  {isEn ? selectedRoadmap.summary_en : selectedRoadmap.summary_ko}
                </span>
              </div>
              <button
                onClick={() => setSelectedRoadmapId(null)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#64748b',
                  cursor: 'pointer',
                  padding: '4px',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
                aria-label="Close roadmap preview"
              >
                <X size={16} />
              </button>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '10px',
              }}
            >
              {selectedRoadmap.stages.map((stage) => {
                const resolvedMods = stage.moduleIds
                  .map((id) => findCurriculumModuleById(id))
                  .filter((item): item is NonNullable<typeof item> => item !== null);

                return (
                  <div
                    key={stage.id}
                    style={{
                      padding: '12px 14px',
                      borderRadius: '12px',
                      background: '#ffffff',
                      border: '1.5px solid #e2e8f0',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 800,
                        color: selectedRoadmap.color,
                        marginBottom: '4px',
                      }}
                    >
                      {isEn ? stage.title_en : stage.title_ko}
                    </div>
                    <div
                      style={{
                        fontSize: '0.74rem',
                        color: '#64748b',
                        marginBottom: '10px',
                      }}
                    >
                      {isEn ? stage.subtitle_en : stage.subtitle_ko}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {resolvedMods.map(({ track, module }) => {
                        const isOpen = !module.isLocked;
                        const pillContent = (
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '5px',
                              padding: '4px 8px',
                              borderRadius: '7px',
                              background: isOpen ? '#ecfdf5' : '#f1f5f9',
                              border: isOpen ? '1px solid #6ee7b7' : '1px solid #cbd5e1',
                              color: isOpen ? '#047857' : '#475569',
                              fontSize: '0.73rem',
                              fontWeight: 700,
                            }}
                          >
                            <LanguageIcon language={track.id} size={13} />
                            <span>
                              {getShortTrackLabel(track)} · {getCategoryName(module.category, isEn)}
                            </span>
                          </span>
                        );

                        return isOpen ? (
                          <Link
                            key={module.id}
                            href={module.practiceUrl}
                            style={{ textDecoration: 'none' }}
                          >
                            {pillContent}
                          </Link>
                        ) : (
                          <React.Fragment key={module.id}>{pillContent}</React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
