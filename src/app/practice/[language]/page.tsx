'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Play, 
  Sparkles, 
  Trophy, 
  BookOpen, 
  Code2, 
  CheckCircle2, 
  Layers,
  ArrowRight,
  Puzzle,
  Keyboard,
  Wrench,
  Compass,
  ChevronRight,
  Flame,
} from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { CURRICULUM_TRACKS, CourseModule, LanguageTrack } from '@/lib/curriculum';
import { PYTHON_LEVEL_1 } from '@/data/curriculum/python/level1';
import LanguageIcon from '@/components/LanguageIcon';
import { getCategoryName, getTrackName, getSkillName } from '@/lib/curriculumTranslations';

interface StageSelectPageProps {
  params: {
    language: string;
  };
}

export default function StageSelectPage({ params }: StageSelectPageProps) {
  const { language } = useLanguage();
  const isEn = language === 'en';
  const rawLang = params.language.toLowerCase();

  // Find matching track
  const matchedTrack = useMemo(() => {
    const cleanLang = rawLang.replace(/_basic$/, '').replace(/_adv$/, '').replace(/_advanced$/, '');
    const found = CURRICULUM_TRACKS.find((t) => 
      t.id === rawLang ||
      t.id === cleanLang ||
      (cleanLang === 'py' && t.id === 'python') ||
      (cleanLang === 'js' && t.id === 'javascript') ||
      (cleanLang === 'html' && t.id === 'web')
    );
    return found || CURRICULUM_TRACKS[0];
  }, [rawLang]);

  // Track hover state for language pill bar
  const [hoveredTrackId, setHoveredTrackId] = useState<string | null>(null);

  // Active module within track
  const [selectedModuleId, setSelectedModuleId] = useState<string>(() => {
    if (rawLang === 'python_basic') return 'py-basic';
    return matchedTrack.modules[0].id;
  });

  // Sync selectedModuleId when switching language tracks
  useEffect(() => {
    if (!matchedTrack.modules.some((m) => m.id === selectedModuleId)) {
      setSelectedModuleId(matchedTrack.modules[0].id);
    }
  }, [matchedTrack, selectedModuleId]);

  const activeModule = useMemo(() => {
    return matchedTrack.modules.find((m) => m.id === selectedModuleId) || matchedTrack.modules[0];
  }, [matchedTrack, selectedModuleId]);

  // Compute total levels for this track
  const totalTrackLevels = useMemo(() => {
    return matchedTrack.modules.reduce((sum, mod) => sum + mod.totalLevels, 0);
  }, [matchedTrack]);

  // Generate Stage Cards for the active module
  const isPythonBasic = (rawLang === 'python_basic' || activeModule.id === 'py-basic') && matchedTrack.id === 'python';

  const stages = useMemo(() => {
    if (isPythonBasic) {
      return PYTHON_LEVEL_1.questions.map((q) => {
        let badgeType: 'block' | 'blank' | 'bug' | 'challenge' = 'block';
        if (q.kind === 'fill_blank') badgeType = 'blank';
        else if (q.kind === 'fix_bug') badgeType = 'bug';
        else if (q.type === 'typing') badgeType = 'blank';

        return {
          step: q.step,
          type: badgeType,
          title_ko: q.prompt_ko,
          title_en: q.prompt_en,
          hint_ko: q.hint_ko,
          hint_en: q.hint_en,
          practiceUrl: `/practice/${rawLang}/1?step=${q.step}`,
          isAvailable: true,
        };
      });
    }

    const totalStages = Math.min(activeModule.totalLevels || 10, 10);
    return Array.from({ length: totalStages }, (_, i) => {
      const stepNum = i + 1;
      const isBlock = stepNum <= 4;
      const isBug = stepNum === 7 || stepNum === 8;
      const isChallenge = stepNum === totalStages;
      const badgeType: 'block' | 'blank' | 'bug' | 'challenge' = isChallenge
        ? 'challenge'
        : isBug
        ? 'bug'
        : isBlock
        ? 'block'
        : 'blank';

      const skillIndex = i % (activeModule.skills.length || 1);
      const skillName = activeModule.skills[skillIndex] || `${matchedTrack.name} 핵심 문법`;

      return {
        step: stepNum,
        type: badgeType,
        title_ko: `${skillName} 실습 (${stepNum}단계)`,
        title_en: `${getSkillName(skillName, isEn)} (Stage ${stepNum})`,
        hint_ko: '코드를 직접 타이핑하고 실시간 런타임에서 실행 결과를 확인합니다.',
        hint_en: 'Type code hands-on and verify real execution output in the sandbox.',
        practiceUrl: `/practice/${rawLang}/1?step=${stepNum}`,
        isAvailable: true,
      };
    });
  }, [isPythonBasic, activeModule, matchedTrack, rawLang, isEn]);

  const getBadgeInfo = (type: 'block' | 'blank' | 'bug' | 'challenge') => {
    switch (type) {
      case 'block':
        return {
          icon: <Puzzle size={13} />,
          text_ko: '🧩 블록 코딩',
          text_en: '🧩 Block Coding',
          bg: 'rgba(59, 130, 246, 0.15)',
          color: '#60a5fa',
          border: 'rgba(59, 130, 246, 0.35)',
        };
      case 'blank':
        return {
          icon: <Keyboard size={13} />,
          text_ko: '⌨️ 빈칸 타이핑',
          text_en: '⌨️ Fill Blank',
          bg: 'rgba(16, 185, 129, 0.15)',
          color: '#34d399',
          border: 'rgba(16, 185, 129, 0.35)',
        };
      case 'bug':
        return {
          icon: <Wrench size={13} />,
          text_ko: '🔍 오타 수정',
          text_en: '🔍 Bug Fix',
          bg: 'rgba(239, 68, 68, 0.15)',
          color: '#f87171',
          border: 'rgba(239, 68, 68, 0.35)',
        };
      case 'challenge':
      default:
        return {
          icon: <Trophy size={13} />,
          text_ko: '🏆 실전 챌린지',
          text_en: '🏆 Challenge',
          bg: 'rgba(245, 158, 11, 0.15)',
          color: '#fbbf24',
          border: 'rgba(245, 158, 11, 0.35)',
        };
    }
  };

  const getPillLabel = (track: LanguageTrack) => {
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

  return (
    <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '36px 24px 100px' }}>
      {/* Top Breadcrumb Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#94a3b8' }}>
          <Link
            href="/languages"
            style={{
              color: '#94a3b8',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'color 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
          >
            <BookOpen size={15} />
            <span>{isEn ? 'Curriculum' : '정규 커리큘럼'}</span>
          </Link>
          <ChevronRight size={14} color="#64748b" />
          <span style={{ color: matchedTrack.color, fontWeight: 700 }}>
            {isEn ? getTrackName(matchedTrack, true) : matchedTrack.name}
          </span>
          <ChevronRight size={14} color="#64748b" />
          <span style={{ color: '#f8fafc', fontWeight: 600 }}>
            {isEn ? 'Level Selection' : '레벨 선택'}
          </span>
        </div>

        <Link
          href="/languages"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#94a3b8',
            fontSize: '0.84rem',
            fontWeight: 600,
            transition: 'all 0.15s ease',
            textDecoration: 'none',
            padding: '6px 14px',
            borderRadius: '10px',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#38bdf8';
            e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#94a3b8';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
          }}
        >
          <ArrowLeft size={14} />
          <span>{isEn ? 'Back to All Curriculum' : '전체 언어 목록으로'}</span>
        </Link>
      </div>

      {/* Hero Header: Cohesive extension of the Curriculum Architecture Header */}
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 18px',
          borderRadius: '24px',
          background: `${matchedTrack.color}18`,
          border: `1px solid ${matchedTrack.color}40`,
          color: matchedTrack.color,
          fontSize: '0.85rem',
          fontWeight: 700,
          marginBottom: '16px',
          letterSpacing: '0.05em',
        }}>
          <Compass size={16} />
          <span>{isEn ? 'STAGE PROGRESSION ROADMAP' : '실전 타자 스테이지 로드맵'}</span>
        </div>

        <h1 style={{ 
          fontSize: 'clamp(2rem, 3.8vw, 2.7rem)', 
          fontWeight: 800, 
          color: '#f8fafc', 
          marginBottom: '14px',
          letterSpacing: '-0.02em',
          lineHeight: 1.25,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '14px',
          flexWrap: 'wrap',
        }}>
          <LanguageIcon language={matchedTrack.id} size={42} />
          <span>{isEn ? getTrackName(matchedTrack, true) : matchedTrack.name}</span>
          <span style={{ color: matchedTrack.color }}>
            {isEn ? 'Practice Stages' : '단계별 실전 타자'}
          </span>
        </h1>

        <p style={{ 
          color: '#94a3b8', 
          fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)', 
          maxWidth: '820px', 
          margin: '0 auto 24px',
          lineHeight: 1.6,
          wordBreak: 'keep-all',
        }}>
          {isEn ? matchedTrack.tagline_en : matchedTrack.tagline_ko}
        </p>

        {/* Milestone Stats Counter Pills */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '20px',
          padding: '10px 24px',
          borderRadius: '16px',
          background: 'rgba(15, 23, 42, 0.6)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(8px)',
          fontSize: '0.9rem',
          color: '#cbd5e1',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Layers size={16} color="#38bdf8" />
            <span><strong>{matchedTrack.modules.length}</strong> {isEn ? 'Courses in Track' : '개 전문 코스'}</span>
          </div>
          <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <BookOpen size={16} color="#10b981" />
            <span><strong>{totalTrackLevels}</strong> {isEn ? 'Total Levels' : '개 전체 타자 레벨'}</span>
          </div>
          <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={16} color="#f59e0b" />
            <span><strong>{stages.length}</strong> {isEn ? 'Stages Ready' : '개 준비된 실전 스테이지'}</span>
          </div>
        </div>
      </div>

      {/* Language Switcher Bar: Enables Seamless Jumping Between All 13 Languages */}
      <div style={{
        background: 'var(--bg-surface, #1e293b)',
        borderRadius: '20px',
        padding: '20px',
        border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.08))',
        marginBottom: '32px',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '12px',
        }}>
          <span style={{ fontSize: '0.84rem', fontWeight: 700, color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Code2 size={16} color="#38bdf8" />
            <span>{isEn ? 'SWITCH LANGUAGE TRACK:' : '학습 언어 트랙 변경:'}</span>
          </span>
          <Link
            href="/languages"
            style={{ fontSize: '0.82rem', color: '#38bdf8', fontWeight: 600, textDecoration: 'none' }}
          >
            {isEn ? 'View All 13 Languages →' : '전체 13개 언어 커리큘럼 보기 →'}
          </Link>
        </div>

        {/* Language Tabs Row: Selected language is expanded, clicking another navigates */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          overflowX: 'auto',
          paddingTop: '8px',
          paddingBottom: '14px',
          paddingLeft: '6px',
          paddingRight: '6px',
          scrollbarWidth: 'none',
        }}>
          {/* ALL Button: Jumps back to /languages */}
          {(() => {
            const isHovered = hoveredTrackId === 'all';
            return (
              <Link
                href="/languages"
                onMouseEnter={() => setHoveredTrackId('all')}
                onMouseLeave={() => setHoveredTrackId(null)}
                style={{
                  height: '52px',
                  padding: isHovered ? '0 16px 0 10px' : '0 10px',
                  borderRadius: '16px',
                  flexShrink: 0,
                  background: isHovered 
                    ? 'rgba(56, 189, 248, 0.12)' 
                    : 'rgba(255, 255, 255, 0.04)',
                  border: isHovered
                    ? '1.5px solid rgba(56, 189, 248, 0.4)'
                    : '1.5px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isHovered ? '0 4px 14px rgba(56, 189, 248, 0.25)' : 'none',
                  transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: isHovered ? '8px' : '0px',
                  textDecoration: 'none',
                  overflow: 'hidden',
                }}
              >
                <LanguageIcon language="all" size={32} />
                <div style={{
                  maxWidth: isHovered ? '100px' : '0px',
                  opacity: isHovered ? 1 : 0,
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.22s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}>
                  <span style={{ fontWeight: 800, fontSize: '0.9rem', color: '#ffffff' }}>
                    {isEn ? 'All' : '전체'}
                  </span>
                  <span style={{
                    fontSize: '0.72rem',
                    padding: '2px 6px',
                    borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.18)',
                    color: '#cbd5e1',
                    fontWeight: 700,
                  }}>
                    {CURRICULUM_TRACKS.length}
                  </span>
                </div>
              </Link>
            );
          })()}

          {CURRICULUM_TRACKS.map((track) => {
            const isSelected = matchedTrack.id === track.id;
            const isHovered = hoveredTrackId === track.id;
            const isExpanded = isSelected || isHovered;

            return (
              <Link
                key={track.id}
                href={`/practice/${track.id}`}
                onMouseEnter={() => setHoveredTrackId(track.id)}
                onMouseLeave={() => setHoveredTrackId(null)}
                style={{
                  height: '52px',
                  padding: isExpanded ? '0 16px 0 11px' : '0 11px',
                  borderRadius: '16px',
                  flexShrink: 0,
                  background: isSelected 
                    ? `${track.color}25` 
                    : isHovered
                    ? `${track.color}15`
                    : 'rgba(255, 255, 255, 0.04)',
                  border: isSelected 
                    ? `2px solid ${track.color}` 
                    : isHovered
                    ? `1.5px solid ${track.color}60`
                    : '1.5px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isSelected ? `0 6px 20px ${track.color}50` : isHovered ? `0 4px 14px ${track.color}30` : 'none',
                  transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: isExpanded ? '8px' : '0px',
                  textDecoration: 'none',
                  overflow: 'hidden',
                }}
              >
                <LanguageIcon language={track.id} size={30} />
                <div style={{
                  maxWidth: isExpanded ? '150px' : '0px',
                  opacity: isExpanded ? 1 : 0,
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.22s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}>
                  <span style={{ fontWeight: 800, fontSize: '0.9rem', color: '#ffffff' }}>
                    {getPillLabel(track)}
                  </span>
                  <span style={{
                    fontSize: '0.72rem',
                    padding: '2px 6px',
                    borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.16)',
                    color: '#cbd5e1',
                    fontWeight: 700,
                  }}>
                    {track.modules.length}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Course Modules Switcher Tabs (If Track has multiple courses) */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <BookOpen size={18} color={matchedTrack.color} />
          <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
            {isEn ? `${getPillLabel(matchedTrack)} Courses & Modules` : `${getPillLabel(matchedTrack)} 코스 선택`}
          </h2>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {matchedTrack.modules.map((mod, idx) => {
            const isModuleActive = mod.id === activeModule.id;
            return (
              <button
                key={mod.id}
                onClick={() => setSelectedModuleId(mod.id)}
                style={{
                  padding: '10px 18px',
                  borderRadius: '12px',
                  background: isModuleActive ? `${matchedTrack.color}25` : 'rgba(255, 255, 255, 0.04)',
                  border: isModuleActive ? `2px solid ${matchedTrack.color}` : '1px solid rgba(255, 255, 255, 0.08)',
                  color: isModuleActive ? '#ffffff' : '#94a3b8',
                  fontWeight: isModuleActive ? 800 : 600,
                  fontSize: '0.88rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  boxShadow: isModuleActive ? `0 4px 16px ${matchedTrack.color}35` : 'none',
                }}
              >
                <span style={{
                  padding: '2px 6px',
                  borderRadius: '6px',
                  background: isModuleActive ? matchedTrack.color : 'rgba(255, 255, 255, 0.1)',
                  color: isModuleActive ? '#09090b' : '#cbd5e1',
                  fontSize: '0.72rem',
                  fontWeight: 900,
                }}>
                  0{idx + 1}
                </span>
                <span>{isEn ? mod.title_en : mod.title_ko}</span>
                <span style={{
                  fontSize: '0.72rem',
                  padding: '2px 6px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#cbd5e1',
                }}>
                  {mod.totalLevels}L
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Module Showcase Card: Matches Curriculum Track Header Architecture */}
      <div
        style={{
          padding: '28px 32px',
          borderRadius: '20px',
          background: 'var(--bg-surface, #1e293b)',
          border: `1.5px solid ${matchedTrack.color}50`,
          boxShadow: `0 8px 30px rgba(0, 0, 0, 0.35), 0 0 20px ${matchedTrack.color}15`,
          marginBottom: '36px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              width: '68px',
              height: '68px',
              borderRadius: '18px',
              background: 'rgba(15, 23, 42, 0.8)',
              border: `1.5px solid ${matchedTrack.color}70`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 6px 18px ${matchedTrack.color}35`,
              flexShrink: 0,
            }}
          >
            <LanguageIcon language={matchedTrack.id} size={40} />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
              <h2 style={{ fontSize: 'clamp(1.35rem, 2.2vw, 1.8rem)', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
                {isEn ? activeModule.title_en : activeModule.title_ko}
              </h2>
              <span
                style={{
                  padding: '3px 10px',
                  borderRadius: '10px',
                  background: 'rgba(15, 23, 42, 0.7)',
                  color: matchedTrack.color,
                  border: `1px solid ${matchedTrack.color}60`,
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  letterSpacing: '0.03em',
                }}
              >
                {getCategoryName(activeModule.category, isEn)}
              </span>
              <span
                style={{
                  padding: '3px 10px',
                  borderRadius: '10px',
                  background: `${activeModule.difficultyColor}20`,
                  color: activeModule.difficultyColor,
                  border: `1px solid ${activeModule.difficultyColor}50`,
                  fontSize: '0.78rem',
                  fontWeight: 800,
                }}
              >
                {activeModule.difficulty}
              </span>
            </div>
            <p style={{ color: '#cbd5e1', fontSize: '0.94rem', maxWidth: '720px', lineHeight: 1.55, margin: 0 }}>
              {isEn ? activeModule.description_en : activeModule.description_ko}
            </p>
          </div>
        </div>

        {/* Milestone Trophy Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            background: 'rgba(11, 19, 41, 0.65)',
            padding: '14px 22px',
            borderRadius: '14px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <Trophy size={28} color="#f59e0b" />
          <div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>
              {isEn ? 'CURRICULUM STAGES' : '도전 스테이지'}
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f8fafc' }}>
              {isEn ? `Total ${stages.length} Stages` : `총 ${stages.length}개 스테이지`}
            </div>
          </div>
        </div>
      </div>

      {/* Stage Grid Section Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Sparkles size={18} color="#38bdf8" />
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
            {isEn 
              ? `Stages for ${activeModule.title_en} (1 ~ ${stages.length})` 
              : `${activeModule.title_ko} 실전 스테이지 (1 ~ ${stages.length}단계)`}
          </h3>
        </div>
        <div style={{ fontSize: '0.84rem', color: '#94a3b8' }}>
          {isEn ? 'Click any stage card to start coding practice immediately' : '원하는 단계를 클릭하여 바로 실습을 시작할 수 있습니다'}
        </div>
      </div>

      {/* Stage Cards Responsive Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))',
          gap: '20px',
        }}
      >
        {stages.map((stage) => {
          const badge = getBadgeInfo(stage.type);
          return (
            <div
              key={stage.step}
              className="quest-card"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '210px',
                background: 'var(--bg-surface, #1e293b)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '18px',
                boxShadow: '0 6px 18px rgba(0, 0, 0, 0.25)',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <div>
                {/* Stage Header Row: Stage Number + Type Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span
                    style={{
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 800,
                      color: '#38bdf8',
                      letterSpacing: '0.04em',
                    }}
                  >
                    STAGE {stage.step.toString().padStart(2, '0')}
                  </span>

                  <span
                    style={{
                      padding: '3px 10px',
                      borderRadius: '8px',
                      fontSize: '0.76rem',
                      fontWeight: 700,
                      background: badge.bg,
                      color: badge.color,
                      border: `1px solid ${badge.border}`,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    {isEn ? badge.text_en : badge.text_ko}
                  </span>
                </div>

                {/* Stage Prompt Title */}
                <h4
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#f8fafc',
                    marginBottom: '8px',
                    lineHeight: 1.45,
                  }}
                >
                  {isEn ? stage.title_en : stage.title_ko}
                </h4>

                {/* Stage Hint/Description */}
                <p
                  style={{
                    fontSize: '0.86rem',
                    color: '#94a3b8',
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {isEn ? stage.hint_en : stage.hint_ko}
                </p>
              </div>

              {/* Card Footer: Action Launch Button */}
              <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <Link
                  href={stage.practiceUrl}
                  className="tactile-btn tactile-btn-primary"
                  style={{
                    width: '100%',
                    padding: '10px 16px',
                    fontSize: '0.88rem',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                    borderRadius: '12px',
                    boxShadow: '0 4px 14px rgba(56, 189, 248, 0.25)',
                  }}
                >
                  <Play size={14} fill="currentColor" />
                  <span>{isEn ? `Start Stage ${stage.step}` : `${stage.step}단계 실습 시작하기`}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
