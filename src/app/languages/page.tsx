'use client';

import React, { useState, useMemo } from 'react';
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

export default function LanguagesPage() {
  const { language } = useLanguage();
  const isEn = language === 'en';

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
    <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '40px 24px 100px' }}>
      {/* Hero Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 18px',
          borderRadius: '24px',
          background: 'rgba(56, 189, 248, 0.12)',
          border: '1px solid rgba(56, 189, 248, 0.25)',
          color: '#38bdf8',
          fontSize: '0.85rem',
          fontWeight: 700,
          marginBottom: '18px',
          letterSpacing: '0.05em',
        }}>
          <Compass size={16} />
          <span>CURRICULUM ARCHITECTURE</span>
        </div>

        <h1 style={{ 
          fontSize: 'clamp(2rem, 4vw, 2.8rem)', 
          fontWeight: 800, 
          color: '#f8fafc', 
          marginBottom: '14px',
          letterSpacing: '-0.02em',
          lineHeight: 1.2
        }}>
          {isEn ? 'Official Curriculum & Learning Tracks' : '언어별 정규 학습과정'}
        </h1>

        <p style={{ 
          color: '#94a3b8', 
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
            <span><strong>{stats.totalTracks}</strong> {isEn ? 'Tracks' : '개 언어 트랙'}</span>
          </div>
          <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <BookOpen size={16} color="#10b981" />
            <span><strong>{stats.totalModules}</strong> {isEn ? 'Courses' : '개 전문 코스'}</span>
          </div>
          <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={16} color="#f59e0b" />
            <span><strong>{stats.totalLevels}+</strong> {isEn ? 'Stages' : '개 실전 타자 단계'}</span>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div style={{
        background: 'var(--bg-surface, #1e293b)',
        borderRadius: '20px',
        padding: '20px',
        border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.08))',
        marginBottom: '36px',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
      }}>
        {/* Language Tabs Row: Square Icon Buttons */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          overflowX: 'auto',
          paddingBottom: '14px',
          marginBottom: '16px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
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
                    ? 'rgba(56, 189, 248, 0.22)' 
                    : isHovered 
                    ? 'rgba(56, 189, 248, 0.12)'
                    : 'rgba(255, 255, 255, 0.04)',
                  border: isSelected 
                    ? '2px solid #38bdf8' 
                    : isHovered
                    ? '1.5px solid rgba(56, 189, 248, 0.4)'
                    : '1.5px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isSelected ? '0 6px 20px rgba(56, 189, 248, 0.45)' : 'none',
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
                  <span style={{ fontWeight: 800, fontSize: '0.9rem', color: '#ffffff' }}>
                    {pillLabel}
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
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#f8fafc',
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
                  color: '#94a3b8',
                  padding: '4px',
                }}
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Difficulty Filter Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.82rem', color: '#64748b', marginRight: '4px', fontWeight: 600 }}>
              {isEn ? 'Difficulty:' : '난이도:'}
            </span>
            {difficultyOptions.map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '8px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  background: selectedDifficulty === diff ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                  color: selectedDifficulty === diff ? '#38bdf8' : '#94a3b8',
                  border: selectedDifficulty === diff ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid rgba(255, 255, 255, 0.06)',
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
          background: 'var(--bg-surface, #1e293b)',
          borderRadius: '24px',
          border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.08))',
        }}>
          <p style={{ fontSize: '1.2rem', color: '#f8fafc', marginBottom: '8px', fontWeight: 700 }}>
            {isEn ? 'No matching courses found.' : '검색 결과와 일치하는 코스가 없습니다.'}
          </p>
          <p style={{ fontSize: '0.95rem', color: '#94a3b8', marginBottom: '20px' }}>
            {isEn ? 'Try searching with different keywords or reset your filters.' : '다른 검색어를 입력하시거나 필터를 초기화해 보세요.'}
          </p>
          <button
            onClick={() => {
              setSelectedTrackId('all');
              setSearchQuery('');
              setSelectedDifficulty('all');
            }}
            className="tactile-btn tactile-btn-primary"
            style={{ padding: '10px 20px', fontSize: '0.9rem' }}
          >
            <span>{isEn ? 'View All Courses' : '모든 과정 전체보기'}</span>
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {filteredTracks.map((track) => (
            <section key={track.id} id={`track-${track.id}`}>
              {/* Track Header Card */}
              <div style={{
                background: 'var(--bg-surface, #1e293b)',
                border: `1px solid ${track.color}45`,
                borderRadius: '20px',
                padding: '24px 28px',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: 'rgba(15, 23, 42, 0.7)',
                    border: `1px solid ${track.color}60`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 4px 16px ${track.color}30`,
                  }}>
                    <LanguageIcon language={track.id} size={36} />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                      <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#f8fafc' }}>
                        {getTrackName(track, isEn)}
                      </h2>
                      <span style={{
                        padding: '3px 10px',
                        borderRadius: '10px',
                        background: 'rgba(15, 23, 42, 0.6)',
                        border: `1px solid ${track.color}60`,
                        color: track.color,
                        fontSize: '0.75rem',
                        fontWeight: 700,
                      }}>
                        {track.badge}
                      </span>
                    </div>
                    <p style={{ color: '#cbd5e1', fontSize: '0.92rem', marginTop: '4px' }}>
                      {isEn ? track.tagline_en : track.tagline_ko}
                    </p>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'rgba(15, 23, 42, 0.5)',
                  padding: '6px 14px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  fontSize: '0.85rem',
                  color: '#cbd5e1',
                }}>
                  <span>{isEn ? `Total ${track.modules.length} Courses` : <>총 <strong>{track.modules.length}개</strong> 과정 개설</>}</span>
                </div>
              </div>

              {/* Course Modules Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
                gap: '22px',
              }}>
                {[...track.modules]
                  .sort((a, b) => (DIFFICULTY_ORDER[a.difficulty] || 99) - (DIFFICULTY_ORDER[b.difficulty] || 99))
                  .map((module) => {
                    // Simulated or stored progress: py-basic 36%, web-html 20%, c-basic 8%, etc.
                    const defaultProgress: Record<string, number> = {
                      'py-basic': 9,
                      'web-html': 5,
                      'c-basic': 2,
                    };
                    const completedLevels = defaultProgress[module.id] || 0;
                    const progressPercent = Math.round((completedLevels / module.totalLevels) * 100);
                    const isStarted = progressPercent > 0;
                    const diffColor = DIFFICULTY_COLORS[module.difficulty] || '#10b981';

                    return (
                      <div
                        key={module.id}
                        className="quest-card"
                        style={{
                          padding: '24px',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          background: '#131e33',
                          border: isStarted
                            ? '1.5px solid rgba(56, 189, 248, 0.45)'
                            : '1px solid rgba(255, 255, 255, 0.08)',
                          boxShadow: isStarted 
                            ? '0 8px 24px rgba(56, 189, 248, 0.12)' 
                            : '0 4px 14px rgba(0, 0, 0, 0.2)',
                          transition: 'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
                          position: 'relative',
                          overflow: 'visible',
                          marginTop: '8px',
                        }}
                      >
                        {/* In-progress glowing indicator badge */}
                        {isStarted && (
                          <div style={{
                            position: 'absolute',
                            top: '-11px',
                            right: '20px',
                            zIndex: 10,
                            padding: '3px 12px',
                            borderRadius: '12px',
                            background: '#0284c7',
                            color: '#ffffff',
                            fontSize: '0.74rem',
                            fontWeight: 800,
                            letterSpacing: '0.02em',
                            boxShadow: '0 4px 12px rgba(2, 132, 199, 0.45)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            whiteSpace: 'nowrap',
                          }}>
                            <span>🔥 {isEn ? 'In Progress' : '학습 진행 중'}</span>
                          </div>
                        )}

                        <div>
                          {/* Top Badges Row */}
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '8px',
                            marginBottom: '14px',
                            flexWrap: 'wrap',
                          }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              {/* Category Badge */}
                              <span style={{
                                padding: '4px 10px',
                                borderRadius: '8px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                color: '#94a3b8',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                fontSize: '0.78rem',
                                fontWeight: 700,
                              }}>
                                {getCategoryName(module.category, isEn)}
                              </span>

                              {/* Difficulty Badge */}
                              <span style={{
                                padding: '4px 10px',
                                borderRadius: '8px',
                                background: `${diffColor}18`,
                                color: diffColor,
                                border: `1px solid ${diffColor}50`,
                                fontSize: '0.78rem',
                                fontWeight: 800,
                                letterSpacing: '0.02em',
                                display: 'inline-flex',
                                alignItems: 'center',
                              }}>
                                {getDifficultyLabel(module.difficulty)}
                              </span>
                            </div>

                            {/* Popular Badge or Level Count */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              {module.isPopular && (
                                <span style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '4px',
                                  padding: '2px 8px',
                                  borderRadius: '6px',
                                  background: 'rgba(239, 68, 68, 0.15)',
                                  color: '#f87171',
                                  fontSize: '0.72rem',
                                  fontWeight: 800,
                                  border: '1px solid rgba(239, 68, 68, 0.3)',
                                }}>
                                  <Flame size={12} />
                                  {isEn ? 'Popular' : '인기'}
                                </span>
                              )}
                              <span style={{
                                fontSize: '0.78rem',
                                color: '#94a3b8',
                                fontWeight: 600,
                              }}>
                                {module.totalLevels}{isEn ? ' Stages' : '단계'}
                              </span>
                            </div>
                          </div>

                          {/* Course Title */}
                          <h3 style={{
                            fontSize: '1.18rem',
                            fontWeight: 800,
                            color: '#f8fafc',
                            marginBottom: isEn ? '12px' : '4px',
                            lineHeight: 1.35,
                          }}>
                            {isEn ? module.title_en : module.title_ko}
                          </h3>
                          {!isEn && (
                            <div style={{
                              fontSize: '0.78rem',
                              color: '#64748b',
                              fontWeight: 600,
                              marginBottom: '12px',
                            }}>
                              {module.title_en}
                            </div>
                          )}

                          {/* Description */}
                          <p style={{
                            fontSize: '0.88rem',
                            color: '#94a3b8',
                            lineHeight: 1.55,
                            marginBottom: '16px',
                            minHeight: '44px',
                          }}>
                            {isEn ? module.description_en : module.description_ko}
                          </p>

                          {/* Key Skills Pills */}
                          <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '6px',
                            marginBottom: '20px',
                            padding: '12px',
                            borderRadius: '12px',
                            background: 'rgba(15, 23, 42, 0.5)',
                            border: '1px solid rgba(255, 255, 255, 0.04)',
                          }}>
                            <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700, marginBottom: '2px' }}>
                              {isEn ? 'Key Skills:' : '핵심 습득 기술:'}
                            </div>
                            {module.skills.map((skill, idx) => (
                              <div
                                key={idx}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '6px',
                                  fontSize: '0.8rem',
                                  color: '#cbd5e1',
                                }}
                              >
                                <CheckCircle2 size={13} color="#38bdf8" style={{ flexShrink: 0 }} />
                                <span>{getSkillName(skill, isEn)}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Bottom Action Area: Replaced '실시간 코드 샌드박스' with Progress Gauge Bar */}
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          paddingTop: '16px',
                          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                          gap: '12px',
                        }}>
                          {/* Progress Gauge */}
                          <div style={{ flex: '1 1 auto', minWidth: 0 }}>
                            <div style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              marginBottom: '6px',
                            }}>
                              <span style={{
                                fontSize: '0.76rem',
                                color: isStarted ? '#38bdf8' : '#64748b',
                                fontWeight: 700,
                              }}>
                                {isStarted 
                                  ? (isEn ? `Progress ${progressPercent}%` : `진행도 ${progressPercent}%`) 
                                  : (isEn ? 'Not Started' : '학습 대기')}
                              </span>
                              <span style={{
                                fontSize: '0.72rem',
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
                              height: '7px',
                              borderRadius: '4px',
                              background: 'rgba(255, 255, 255, 0.08)',
                              overflow: 'hidden',
                            }}>
                              {/* Gauge Fill */}
                              <div style={{
                                width: `${progressPercent}%`,
                                height: '100%',
                                borderRadius: '4px',
                                background: isStarted ? '#0ea5e9' : 'transparent',
                                transition: 'width 0.4s ease',
                              }} />
                            </div>
                          </div>

                          {/* Action Button */}
                          <Link
                            href={module.practiceUrl}
                            className="tactile-btn tactile-btn-primary"
                            style={{
                              padding: '9px 18px',
                              fontSize: '0.88rem',
                              whiteSpace: 'nowrap',
                              flexShrink: 0,
                            }}
                          >
                            <span>{isStarted ? (isEn ? 'Continue' : '이어하기') : (isEn ? 'Start' : '학습 시작')}</span>
                            <ArrowRight size={15} />
                          </Link>
                        </div>
                      </div>
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
