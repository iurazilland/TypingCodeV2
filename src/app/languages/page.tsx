'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Sparkles, 
  Compass, 
  Search, 
  BookOpen, 
  Layers, 
  CheckCircle2,
  Code2, 
  Cpu, 
  Globe, 
  Database,
  Flame,
  X,
} from 'lucide-react';
import { CURRICULUM_TRACKS, LanguageTrack, CourseModule, DIFFICULTY_COLORS, DIFFICULTY_ORDER } from '@/lib/curriculum';
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

  // Load real cleared-level counts from synced storage (updates live when cloud DB sync finishes)
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
            if (!mod.practiceUrl.startsWith('/practice/')) continue;
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
      } catch { }
    };

    recomputeProgress();
    window.addEventListener(PROGRESS_SYNCED_EVENT, recomputeProgress);
    return () => window.removeEventListener(PROGRESS_SYNCED_EVENT, recomputeProgress);
  }, [user]);

  // Dynamic matte soft ice-cyan body background for glare-free comfort
  useEffect(() => {
    document.body.style.backgroundColor = '#e2eff6';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  const [selectedTrackId, setSelectedTrackId] = useState<string>('all');
  const [hoveredTrackId, setHoveredTrackId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  // Compute total courses and levels
  const stats = useMemo(() => {
    let totalModules = 0;
    let totalLevels = 0;
    CURRICULUM_TRACKS.forEach((track) => {
      totalModules += track.modules.length;
      track.modules.forEach((mod) => {
        totalLevels += mod.totalLevels;
      });
    });
    return { totalModules, totalLevels, totalTracks: CURRICULUM_TRACKS.length };
  }, []);

  // Filtered tracks and modules
  const filteredTracks = useMemo(() => {
    return CURRICULUM_TRACKS.map((track) => {
      // If track filter is active and doesn't match, return null
      if (selectedTrackId !== 'all' && track.id !== selectedTrackId) {
        return null;
      }

      // Filter modules within track
      const matchingModules = track.modules.filter((mod) => {
        // Difficulty filter
        if (selectedDifficulty !== 'all' && mod.difficulty !== selectedDifficulty) {
          return false;
        }

        // Search query filter
        if (searchQuery.trim()) {
          const query = searchQuery.toLowerCase().trim();
          const matchTitle = mod.title_ko.toLowerCase().includes(query) || mod.title_en.toLowerCase().includes(query);
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
  }, [selectedTrackId, searchQuery, selectedDifficulty]);

  const difficultyOptions = ['all', '입문', '중급', '심화'];
  const getDifficultyLabel = (diff: string) => {
    if (diff === 'all') return isEn ? 'All Levels' : '전체 난이도';
    if (diff === '입문') return isEn ? 'Beginner' : '입문';
    if (diff === '중급') return isEn ? 'Intermediate' : '중급';
    if (diff === '심화') return isEn ? 'Advanced' : '심화';
    return diff;
  };

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '36px 20px 100px' }}>
      {/* Hero Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 18px',
          borderRadius: '24px',
          background: '#ffffff',
          border: '1.5px solid #cbd5e1',
          color: '#0284c7',
          fontSize: '0.85rem',
          fontWeight: 700,
          marginBottom: '18px',
          letterSpacing: '0.05em',
          boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
        }}>
          <Compass size={16} />
          <span>CURRICULUM ARCHITECTURE</span>
        </div>

        <h1 style={{ 
          fontSize: 'clamp(2rem, 4vw, 2.8rem)', 
          fontWeight: 800, 
          color: '#0f172a', 
          marginBottom: '14px',
          letterSpacing: '-0.02em',
          lineHeight: 1.2
        }}>
          {isEn ? 'Official Curriculum & Learning Tracks' : '언어별 정규 학습과정'}
        </h1>

        <p style={{ 
          color: '#475569', 
          fontSize: 'clamp(1rem, 2vw, 1.15rem)', 
          maxWidth: '820px', 
          margin: '0 auto 24px',
          lineHeight: 1.6,
          wordBreak: 'keep-all',
        }}>
          {isEn ? (
            <>
              From Python, C, Web (HTML/CSS), JavaScript, Java, to SQL —<br />
              An interactive, hands-on curriculum where code <strong>comes alive as you type and execute</strong>.
            </>
          ) : (
            <>
              파이썬, C언어, 웹(HTML/CSS), 자바스크립트, 자바, SQL까지 —<br />
              지루한 이론 주입 대신 <strong>직접 코드를 타이핑하며 실행하는</strong> 단계별 실전 커리큘럼입니다.
            </>
          )}
        </p>

        {/* Aggregate Stats Badges */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '20px',
          padding: '12px 28px',
          borderRadius: '20px',
          background: '#ffffff',
          border: '1.5px solid #cbd5e1',
          boxShadow: '0 4px 16px -2px rgba(15, 23, 42, 0.06)',
          fontSize: '0.92rem',
          color: '#334155',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Layers size={18} color="#0284c7" />
            <span><strong style={{ color: '#0f172a', fontWeight: 800 }}>{stats.totalTracks}</strong> {isEn ? 'Tracks' : '개 언어 트랙'}</span>
          </div>
          <span style={{ color: '#cbd5e1' }}>•</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BookOpen size={18} color="#10b981" />
            <span><strong style={{ color: '#0f172a', fontWeight: 800 }}>{stats.totalModules}</strong> {isEn ? 'Courses' : '개 전문 코스'}</span>
          </div>
          <span style={{ color: '#cbd5e1' }}>•</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={18} color="#f59e0b" />
            <span><strong style={{ color: '#0f172a', fontWeight: 800 }}>{stats.totalLevels}+</strong> {isEn ? 'Stages' : '개 실전 타자 단계'}</span>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div style={{
        background: '#ffffff',
        borderRadius: '24px',
        padding: '22px 24px',
        border: '1.5px solid #cbd5e1',
        marginBottom: '36px',
        boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
      }}>
        {/* Language Tabs Row: Square Icon Buttons */}
        <div style={{
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
        }}>
          {/* ALL Tracks Button: Expands smoothly on hover */}
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
                <div style={{
                  maxWidth: isExpanded ? '100px' : '0px',
                  opacity: isExpanded ? 1 : 0,
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.22s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  pointerEvents: 'none',
                }}>
                  <span style={{ fontWeight: 800, fontSize: '0.9rem', color: isSelected ? '#0891b2' : '#0f172a' }}>
                    {isEn ? 'All' : '전체'}
                  </span>
                  <span style={{
                    fontSize: '0.72rem',
                    padding: '2px 6px',
                    borderRadius: '6px',
                    background: isSelected ? 'rgba(8, 145, 178, 0.2)' : '#e2e8f0',
                    color: isSelected ? '#0e7490' : '#475569',
                    fontWeight: 700,
                  }}>
                    {stats.totalModules}
                  </span>
                </div>
              </button>
            );
          })()}

          {/* Each Language Track Button: Selected stays expanded, click again deselects to 'all' */}
          {CURRICULUM_TRACKS.map((track) => {
            const isSelected = selectedTrackId === track.id;
            const isHovered = hoveredTrackId === track.id;
            const isExpanded = isSelected || isHovered;

            const pillLabel = track.id === 'vb'
              ? 'Visual Basic'
              : track.id === 'linux'
              ? 'Linux'
              : track.id === 'csharp'
              ? 'C#'
              : track.id === 'swift'
              ? 'Swift'
              : track.id === 'javascript'
              ? 'JavaScript'
              : track.id === 'c'
              ? (isEn ? 'C' : 'C언어')
              : track.id === 'cpp'
              ? 'C++'
              : track.id === 'python'
              ? 'Python'
              : track.id === 'java'
              ? 'Java'
              : track.id === 'sql'
              ? 'SQL'
              : track.id === 'go'
              ? 'Go'
              : track.id === 'rust'
              ? 'Rust'
              : track.id === 'web'
              ? 'Web'
              : (isEn ? getTrackName(track, true) : track.name.split(' ')[0]);

            return (
              <button
                key={track.id}
                onClick={() => setSelectedTrackId(selectedTrackId === track.id ? 'all' : track.id)}
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
                  pointerEvents: 'none',
                }}>
                  <span style={{ fontWeight: 800, fontSize: '0.9rem', color: isSelected ? track.color : '#0f172a' }}>
                    {pillLabel}
                  </span>
                  <span style={{
                    fontSize: '0.72rem',
                    padding: '2px 6px',
                    borderRadius: '6px',
                    background: isSelected ? `${track.color}25` : '#e2e8f0',
                    color: isSelected ? '#0f172a' : '#475569',
                    fontWeight: 700,
                  }}>
                    {track.modules.length}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Search & Difficulty Controls Row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          flexWrap: 'wrap',
        }}>
          {/* Search Box */}
          <div style={{
            position: 'relative',
            flex: '1 1 300px',
            maxWidth: '500px',
          }}>
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
              placeholder={isEn ? "Search courses, topics, keywords (e.g. pointer, Flexbox, machine learning, SQL...)" : "코스명, 세부 주제, 기술 키워드 검색 (예: 포인터, Flexbox, 머신러닝, SQL...)"}
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
                boxShadow: '0 1px 3px rgba(15, 23, 42, 0.04)',
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

          {/* Difficulty Filter Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.84rem', color: '#475569', marginRight: '4px', fontWeight: 700 }}>
              {isEn ? 'Difficulty:' : '난이도:'}
            </span>
            {difficultyOptions.map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                style={{
                  padding: '7px 14px',
                  borderRadius: '10px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  background: selectedDifficulty === diff ? '#0891b2' : '#f8fafc',
                  color: selectedDifficulty === diff ? '#ffffff' : '#475569',
                  border: selectedDifficulty === diff ? '1.5px solid #0891b2' : '1.5px solid #cbd5e1',
                  boxShadow: selectedDifficulty === diff ? '0 2px 8px rgba(8, 145, 178, 0.3)' : 'none',
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
        <div style={{
          textAlign: 'center',
          padding: '80px 20px',
          background: '#ffffff',
          borderRadius: '24px',
          border: '1.5px solid #cbd5e1',
          boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
        }}>
          <p style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '8px', fontWeight: 800 }}>
            {isEn ? 'No matching courses found.' : '검색 결과와 일치하는 코스가 없습니다.'}
          </p>
          <p style={{ fontSize: '0.95rem', color: '#64748b', marginBottom: '20px' }}>
            {isEn ? 'Try searching with different keywords or reset your filters.' : '다른 검색어를 입력하시거나 필터를 초기화해 보세요.'}
          </p>
          <button
            onClick={() => {
              setSelectedTrackId('all');
              setSearchQuery('');
              setSelectedDifficulty('all');
            }}
            className="tactile-btn tactile-btn-primary"
            style={{ padding: '10px 20px', fontSize: '0.9rem', borderRadius: '12px' }}
          >
            <span>{isEn ? 'View All Courses' : '모든 과정 전체보기'}</span>
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          {filteredTracks.map((track) => (
            <section key={track.id} id={`track-${track.id}`}>
              {/* Track Section Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '16px',
                padding: '0 4px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '14px',
                    background: '#ffffff',
                    border: '1.5px solid #cbd5e1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 6px rgba(15, 23, 42, 0.04)',
                    flexShrink: 0,
                  }}>
                    <LanguageIcon language={track.id} size={28} />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.01em', margin: 0 }}>
                        {getTrackName(track, isEn)}
                      </h2>
                      <span style={{
                        padding: '2px 8px',
                        borderRadius: '6px',
                        background: '#f1f5f9',
                        border: '1.5px solid #cbd5e1',
                        color: '#475569',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                      }}>
                        {track.badge}
                      </span>
                    </div>
                    <p style={{ color: '#64748b', fontSize: '0.85rem', marginTop: '3px', margin: 0, fontWeight: 500 }}>
                      {isEn ? track.tagline_en : track.tagline_ko}
                    </p>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#ffffff',
                  padding: '5px 12px',
                  borderRadius: '10px',
                  border: '1.5px solid #cbd5e1',
                  fontSize: '0.8rem',
                  color: '#475569',
                  boxShadow: '0 1px 3px rgba(15, 23, 42, 0.04)',
                }}>
                  <span>{isEn ? `Total ${track.modules.length} Courses` : <>총 <strong style={{ color: '#0f172a', fontWeight: 800 }}>{track.modules.length}개</strong> 과정</>}</span>
                </div>
              </div>

              {/* Course Modules Grid: 4-Column Layout */}
              <div className="curriculum-4col-grid">
                {[...track.modules]
                  .sort((a, b) => (DIFFICULTY_ORDER[a.difficulty] || 99) - (DIFFICULTY_ORDER[b.difficulty] || 99))
                  .map((module) => {
                    const completedLevels = progressByModule[module.id] || 0;
                    const progressPercent = Math.min(
                      100,
                      Math.round((completedLevels / Math.max(1, module.totalLevels)) * 100)
                    );
                    const isStarted = progressPercent > 0;
                    const diffColor = DIFFICULTY_COLORS[module.difficulty] || '#10b981';

                    return (
                      <Link
                        key={module.id}
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
                        {/* In-progress glowing indicator badge */}
                        {isStarted && (
                          <div style={{
                            position: 'absolute',
                            top: '-9px',
                            right: '14px',
                            zIndex: 10,
                            padding: '2px 8px',
                            borderRadius: '8px',
                            background: diffColor,
                            color: '#ffffff',
                            fontSize: '0.66rem',
                            fontWeight: 800,
                            letterSpacing: '0.02em',
                            boxShadow: `0 3px 8px ${diffColor}45`,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '3px',
                            whiteSpace: 'nowrap',
                          }}>
                            <span>🔥 {isEn ? 'In Progress' : '진행 중'}</span>
                          </div>
                        )}

                        <div>
                          {/* Top Badges Row */}
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '6px',
                            marginBottom: '8px',
                          }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', flexWrap: 'wrap' }}>
                              {/* Difficulty Badge */}
                              <span style={{
                                padding: '2px 7px',
                                borderRadius: '6px',
                                background: `${diffColor}18`,
                                color: diffColor,
                                border: `1px solid ${diffColor}45`,
                                fontSize: '0.7rem',
                                fontWeight: 800,
                                letterSpacing: '0.02em',
                                display: 'inline-flex',
                                alignItems: 'center',
                              }}>
                                {getDifficultyLabel(module.difficulty)}
                              </span>

                              {/* Category Badge */}
                              <span style={{
                                padding: '2px 7px',
                                borderRadius: '6px',
                                background: '#f1f5f9',
                                color: '#475569',
                                border: '1px solid #cbd5e1',
                                fontSize: '0.7rem',
                                fontWeight: 700,
                              }}>
                                {getCategoryName(module.category, isEn)}
                              </span>
                            </div>

                            {/* Popular Badge & Level Count */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                              {module.isPopular && (
                                <span style={{
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
                                }}>
                                  <Flame size={10} />
                                  {isEn ? 'Hot' : '인기'}
                                </span>
                              )}
                              <span style={{
                                fontSize: '0.7rem',
                                color: '#64748b',
                                fontWeight: 600,
                              }}>
                                {module.totalLevels}{isEn ? ' Stages' : '단계'}
                              </span>
                            </div>
                          </div>

                          {/* Course Title */}
                          <h3 style={{
                            fontSize: '0.96rem',
                            fontWeight: 800,
                            color: '#0f172a',
                            marginBottom: '10px',
                            lineHeight: 1.35,
                            letterSpacing: '-0.01em',
                            wordBreak: 'keep-all',
                          }}>
                            {isEn ? module.title_en : module.title_ko}
                          </h3>

                          {/* Original Key Skills Box */}
                          <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '5px',
                            marginBottom: '14px',
                            padding: '10px 12px',
                            borderRadius: '12px',
                            background: '#f8fafc',
                            border: '1.5px solid #e2e8f0',
                          }}>
                            <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700, marginBottom: '2px' }}>
                              {isEn ? 'Key Skills:' : '핵심 습득 기술:'}
                            </div>
                            {module.skills.map((skill, idx) => (
                              <div
                                key={idx}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '6px',
                                  fontSize: '0.76rem',
                                  color: '#334155',
                                  fontWeight: 500,
                                }}
                              >
                                <CheckCircle2 size={13} color={diffColor} style={{ flexShrink: 0 }} />
                                <span>{getSkillName(skill, isEn)}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Bottom Action Area: Full-width Progress Gauge Bar with Direct Click Feedback */}
                        <div style={{
                          paddingTop: '10px',
                          borderTop: '1px solid #f1f5f9',
                        }}>
                          {/* Progress Gauge */}
                          <div>
                            <div style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              marginBottom: '5px',
                            }}>
                              <span style={{
                                fontSize: '0.72rem',
                                color: isStarted ? diffColor : '#475569',
                                fontWeight: 700,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px',
                              }}>
                                <span>
                                  {isStarted 
                                    ? (isEn ? `Progress ${progressPercent}%` : `진행도 ${progressPercent}%`) 
                                    : (isEn ? 'Start Learning' : '학습 시작')}
                                </span>
                                <ArrowRight size={12} color={isStarted ? diffColor : '#64748b'} />
                              </span>
                              <span style={{
                                fontSize: '0.68rem',
                                color: '#94a3b8',
                                fontWeight: 600,
                                fontFamily: 'var(--font-mono)',
                              }}>
                                {completedLevels} / {module.totalLevels}{isEn ? ' Stages' : '단계'}
                              </span>
                            </div>

                            {/* Gauge Track */}
                            <div style={{
                              width: '100%',
                              height: '5px',
                              borderRadius: '3px',
                              background: '#e2e8f0',
                              overflow: 'hidden',
                            }}>
                              {/* Gauge Fill */}
                              <div style={{
                                width: `${progressPercent}%`,
                                height: '100%',
                                borderRadius: '3px',
                                background: isStarted ? diffColor : 'transparent',
                                transition: 'width 0.4s ease',
                              }} />
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
