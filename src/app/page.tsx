'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  Terminal, 
  Code2, 
  Cpu, 
  Globe, 
  Layers,
  Sparkles,
  Zap,
  Play,
  Check,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import LanguageIcon from '@/components/LanguageIcon';
import { CURRICULUM_TRACKS } from '@/lib/curriculum';
import { getCourseSections, LevelSection, LevelItem } from '@/lib/curriculumSections';

export default function HomePage() {
  const { language } = useLanguage();
  const isEn = language === 'en';

  // Interactive Workbench States
  const [selectedTrack, setSelectedTrack] = useState<'python' | 'c' | 'web'>('python');
  const [selectedLevelNum, setSelectedLevelNum] = useState<number>(1);

  // Dynamic light body background for Brilliant Editorial Theme on homepage
  useEffect(() => {
    document.body.style.backgroundColor = '#f8fafc';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  // Get current sections for selected track
  const currentSections: LevelSection[] = React.useMemo(() => {
    if (selectedTrack === 'python') {
      return getCourseSections('python', 'py-basic');
    }
    if (selectedTrack === 'c') {
      return getCourseSections('c', 'c-basic');
    }
    return getCourseSections('web', 'web-html');
  }, [selectedTrack]);

  // Flatten levels for easy lookup
  const allLevels: LevelItem[] = React.useMemo(() => {
    return currentSections.flatMap((s) => s.levels);
  }, [currentSections]);

  // Currently selected level details
  const activeLevel = React.useMemo(() => {
    return allLevels.find((lvl) => lvl.levelNumber === selectedLevelNum) || allLevels[0];
  }, [allLevels, selectedLevelNum]);

  // Handle track change - reset level to 1
  const handleTrackChange = (track: 'python' | 'c' | 'web') => {
    setSelectedTrack(track);
    setSelectedLevelNum(1);
  };

  return (
    <div style={{
      background: '#f8fafc',
      color: '#0f172a',
      minHeight: '100vh',
      marginTop: '-70px',
      paddingTop: '70px',
      overflowX: 'hidden',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '30px 24px 120px' }}>
        
        {/* =================================================================
            1. HERO SECTION: Direct Slogan & Value Proposition
            ================================================================= */}
        <section style={{
          textAlign: 'center',
          maxWidth: '880px',
          margin: '0 auto',
          padding: '54px 20px 64px',
        }}>
          {/* Main Slogan */}
          <h1 style={{
            fontSize: 'clamp(2.6rem, 5.5vw, 3.8rem)',
            fontWeight: 900,
            letterSpacing: '-0.035em',
            color: '#0f172a',
            lineHeight: 1.15,
            marginBottom: '20px',
            wordBreak: 'keep-all',
          }}>
            JUST TYPE IT,<br />
            <span style={{ color: '#2563eb' }}>AND CODE IT.</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: '1.18rem',
            color: '#475569',
            lineHeight: 1.75,
            maxWidth: '660px',
            margin: '0 auto 34px',
            wordBreak: 'keep-all',
          }}>
            {isEn 
              ? 'Stop memorizing syntax. From visual block logic to real text programming, build real coding muscle at your fingertips.'
              : '눈으로 외우는 문법 대신, 손끝으로 완성하는 진짜 코딩. 블록 조립으로 알고리즘의 뼈대를 세우고, 브라우저에서 1단계부터 차근차근 텍스트 코딩을 체득하세요.'}
          </p>

          {/* Primary Action Button */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '32px' }}>
            <Link
              href="/practice/python/1"
              className="brilliant-btn brilliant-btn-primary"
              style={{
                padding: '16px 36px',
                fontSize: '1.08rem',
                fontWeight: 700,
                borderRadius: '12px',
                boxShadow: '0 4px 14px rgba(37, 99, 235, 0.25)',
              }}
            >
              <span>{isEn ? 'Start Python Level 1 Free' : '파이썬 1단계 무료 시작하기'}</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Core Spec Trust Points */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            fontSize: '0.88rem',
            color: '#64748b',
            flexWrap: 'wrap',
          }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="#10b981" />
              <span>{isEn ? '13 Languages · 20 Levels each' : '13개 언어 · 언어별 20레벨 커리큘럼'}</span>
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="#10b981" />
              <span>{isEn ? 'CPython 3.10 & GCC 13.2' : '실제 브라우저 CPython & GCC 런타임'}</span>
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="#10b981" />
              <span>{isEn ? '100% Free Practice' : '전 과정 무료 실습'}</span>
            </span>
          </div>
        </section>

        {/* =================================================================
            2. ALL COVERED LANGUAGES: What You Can Learn (Second Screen)
            ================================================================= */}
        <section id="languages" style={{ marginBottom: '96px', scrollMarginTop: '80px' }}>
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px' }}>
            <div className="brilliant-badge" style={{ marginBottom: '14px' }}>
              Supported Languages & Frameworks
            </div>
            <h2 style={{
              fontSize: '2.2rem',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.02em',
              marginBottom: '12px',
            }}>
              {isEn ? 'What You Can Learn Across 13 Languages' : '타이핑코드가 다루는 13개 언어 커리큘럼'}
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.65 }}>
              {isEn
                ? 'From beginner-friendly Python to low-level C, modern Web frontends, and enterprise systems. Choose what you want to master.'
                : '초보자를 위한 파이썬부터 시스템 프로그래밍 C언어, 모던 웹 프론트엔드, 데이터 분석, 그리고 리눅스 환경까지. 실무에서 쓰이는 핵심 언어를 모두 손끝으로 연습합니다.'}
            </p>
          </div>

          {/* 13 Languages Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '18px',
          }}>
            {CURRICULUM_TRACKS.map((track) => (
              <Link
                key={track.id}
                href={track.modules[0]?.practiceUrl || `/practice/${track.id}`}
                className="brilliant-card"
                style={{
                  padding: '22px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'all 0.2s ease',
                  border: '1px solid #e2e8f0',
                  background: '#ffffff',
                }}
              >
                <div>
                  {/* Card Header: Icon & Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '1.6rem' }}>{track.icon}</span>
                      <h3 style={{ fontSize: '1.12rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                        {track.name.split(' (')[0]}
                      </h3>
                    </div>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      fontFamily: 'var(--font-mono)',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      background: '#f1f5f9',
                      color: '#475569',
                      border: '1px solid #e2e8f0',
                    }}>
                      {track.badge}
                    </span>
                  </div>

                  {/* Summary / Tagline */}
                  <p style={{
                    fontSize: '0.86rem',
                    color: '#64748b',
                    lineHeight: 1.55,
                    marginBottom: '16px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}>
                    {isEn ? track.tagline_en : track.tagline_ko}
                  </p>
                </div>

                {/* Modules & Level info */}
                <div style={{
                  paddingTop: '12px',
                  borderTop: '1px solid #f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.78rem',
                }}>
                  <span style={{ color: '#2563eb', fontWeight: 700 }}>
                    {track.modules.length}개 모듈 · 총 {track.modules.reduce((acc, m) => acc + m.totalLevels, 0)}레벨
                  </span>
                  <span style={{ color: '#94a3b8', display: 'inline-flex', alignItems: 'center' }}>
                    실습 시작 <ChevronRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* =================================================================
            3. UNIFIED TRANSFORMATION PIPELINE: The 3-Step Engine (Option 3)
            ================================================================= */}
        <section id="how-it-works" style={{ marginBottom: '96px', scrollMarginTop: '80px' }}>
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px' }}>
            <div className="brilliant-badge" style={{ marginBottom: '14px' }}>
              The Learning Mechanism
            </div>
            <h2 style={{
              fontSize: '2.2rem',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.02em',
              marginBottom: '12px',
            }}>
              {isEn ? 'The 3-Step Guided Transformation Pipeline' : '블록에서 텍스트 코딩으로: 3단계 체득 파이프라인'}
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.65 }}>
              {isEn 
                ? 'Not a toy puzzle or a boring typing test. A single integrated flow: snap logic, fill in precision blanks, and verify on a real terminal runtime.'
                : '단순 타자 연습이나 장난감 블록이 아닙니다. 논리를 세우고, 코드를 직접 타이핑하고, 실제 터미널에서 검증하는 하나의 일체형 학습 경험입니다.'}
            </p>
          </div>

          {/* Unified Studio Frame (Continuous 3-Step Flow) */}
          <div style={{
            background: '#0d1117',
            borderRadius: '24px',
            border: '1px solid #30363d',
            padding: '28px',
            boxShadow: '0 24px 56px -12px rgba(15, 23, 42, 0.12)',
            fontFamily: 'var(--font-mono)',
          }}>
            {/* Top Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '16px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#8b949e',
              fontSize: '0.8rem',
              marginBottom: '24px',
              flexWrap: 'wrap',
              gap: '10px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ff5f56' }} />
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ffbd2e' }} />
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#27c93f' }} />
                <span style={{ marginLeft: '10px', color: '#c9d1d9' }}>typingcode_pipeline_studio.py</span>
              </div>
              <div style={{ color: '#58a6ff', fontSize: '0.78rem' }}>
                Visual Logic ──► Keystroke Precision ──► Native Runtime
              </div>
            </div>

            {/* 3 Phases Horizontal Process Flow */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '20px',
            }}>
              {/* Phase 1: Blocks */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '22px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
                <div>
                  <div style={{
                    fontSize: '0.76rem',
                    fontWeight: 800,
                    color: '#34d399',
                    marginBottom: '10px',
                  }}>
                    PHASE 01 · LOGIC LAYOUT
                  </div>
                  <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '14px', fontFamily: 'var(--font-sans)' }}>
                    {isEn ? '1. Block Concept Snapping' : '1. 블록으로 논리 구조화'}
                  </h4>

                  {/* Puzzle Block Visual */}
                  <div style={{
                    background: '#161b22',
                    borderRadius: '12px',
                    padding: '18px 12px',
                    textAlign: 'center',
                    marginBottom: '14px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                  }}>
                    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
                      <div style={{
                        background: '#10b981',
                        color: '#ffffff',
                        padding: '6px 16px',
                        borderRadius: '6px 6px 3px 3px',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        boxShadow: '0 2px 0 #047857',
                      }}>
                        ▶ 시작할 때 (Start)
                      </div>
                      <div style={{
                        background: '#3b82f6',
                        color: '#ffffff',
                        padding: '8px 18px',
                        borderRadius: '3px 3px 6px 6px',
                        fontSize: '0.84rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: '0 3px 0 #1d4ed8',
                      }}>
                        <span>출력하기</span>
                        <span style={{
                          background: '#ffffff',
                          color: '#1e293b',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          fontWeight: 800,
                        }}>
                          10
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p style={{ color: '#8b949e', fontSize: '0.84rem', lineHeight: 1.6, margin: 0, fontFamily: 'var(--font-sans)' }}>
                  {isEn
                    ? 'Snap blocks to form the algorithm structure without syntax error intimidation.'
                    : '도구함에서 블록을 꺼내 연결하면 우측 에디터에 실제 파이썬 코드가 자동으로 그려집니다. 알고리즘의 뼈대를 먼저 이해합니다.'}
                </p>
              </div>

              {/* Phase 2: Typing Blank */}
              <div style={{
                background: 'rgba(56, 189, 248, 0.04)',
                border: '1px solid rgba(56, 189, 248, 0.2)',
                borderRadius: '16px',
                padding: '22px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
                <div>
                  <div style={{
                    fontSize: '0.76rem',
                    fontWeight: 800,
                    color: '#38bdf8',
                    marginBottom: '10px',
                  }}>
                    PHASE 02 · KEYSTROKE PRECISION
                  </div>
                  <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '14px', fontFamily: 'var(--font-sans)' }}>
                    {isEn ? '2. Direct Capsule Typing' : '2. 글자수 맞춤 캡슐 타이핑'}
                  </h4>

                  {/* Typing Blank Visual */}
                  <div style={{
                    background: '#161b22',
                    borderRadius: '12px',
                    padding: '16px 12px',
                    marginBottom: '14px',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                  }}>
                    <div style={{ color: '#8b949e', fontSize: '0.74rem', marginBottom: '6px' }}>
                      # 빈칸을 채워 숫자 10을 화면에 출력해보세요.
                    </div>
                    <div style={{ fontSize: '1.08rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ color: '#dcdcaa' }}>print</span>
                      <span style={{ color: '#d4d4d4' }}>(</span>
                      <span style={{
                        background: '#1e293b',
                        border: '2px solid #38bdf8',
                        color: '#38bdf8',
                        padding: '1px 10px',
                        borderRadius: '5px',
                        fontWeight: 700,
                        boxShadow: '0 0 10px rgba(56, 189, 248, 0.3)',
                      }}>
                        10
                      </span>
                      <span style={{ color: '#d4d4d4' }}>)</span>
                    </div>
                  </div>
                </div>

                <p style={{ color: '#8b949e', fontSize: '0.84rem', lineHeight: 1.6, margin: 0, fontFamily: 'var(--font-sans)' }}>
                  {isEn
                    ? 'Direct typing into fixed-width capsule boxes builds tactile keyboard muscle and muscle memory.'
                    : '글자 수에 딱 맞춘 캡슐 박스에 직접 키를 입력하며 괄호, 따옴표, 들여쓰기 감각과 실전 타수를 완성합니다.'}
                </p>
              </div>

              {/* Phase 3: Runtime */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '22px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
                <div>
                  <div style={{
                    fontSize: '0.76rem',
                    fontWeight: 800,
                    color: '#a78bfa',
                    marginBottom: '10px',
                  }}>
                    PHASE 03 · RUNTIME VERIFICATION
                  </div>
                  <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '14px', fontFamily: 'var(--font-sans)' }}>
                    {isEn ? '3. Live Terminal & Test Pass' : '3. 터미널 실시간 결과 검증'}
                  </h4>

                  {/* Terminal Visual */}
                  <div style={{
                    background: '#161b22',
                    borderRadius: '12px',
                    padding: '14px 12px',
                    marginBottom: '14px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                  }}>
                    <div style={{ color: '#8b949e', fontSize: '0.72rem', marginBottom: '4px' }}>
                      user@typingcode:~$ python3 solution.py
                    </div>
                    <div style={{ fontSize: '1.25rem', color: '#34d399', fontWeight: 700, marginBottom: '6px' }}>
                      10
                    </div>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      background: 'rgba(16, 185, 129, 0.15)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      color: '#34d399',
                      padding: '3px 8px',
                      borderRadius: '5px',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                    }}>
                      <Check size={12} />
                      <span>{isEn ? 'Test Passed! (Expected 10)' : '정답 일치! 기대 출력(10)과 동일합니다.'}</span>
                    </div>
                  </div>
                </div>

                <p style={{ color: '#8b949e', fontSize: '0.84rem', lineHeight: 1.6, margin: 0, fontFamily: 'var(--font-sans)' }}>
                  {isEn
                    ? 'Code executes natively in the browser on CPython 3.10 runtime with instant stdout validation.'
                    : '내가 완성한 코드가 실제 CPython 3.10 엔진에서 즉시 실행되어 실시간 출력과 변수 상자의 값 변화를 검증합니다.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            4. INTERACTIVE CURRICULUM WORKBENCH: Real Syllabus Explorer (Option 2)
            ================================================================= */}
        <section id="syllabus" style={{ marginBottom: '84px', scrollMarginTop: '80px' }}>
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 36px' }}>
            <div className="brilliant-badge" style={{ marginBottom: '14px' }}>
              Interactive Syllabus Explorer
            </div>
            <h2 style={{
              fontSize: '2.2rem',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.02em',
              marginBottom: '12px',
            }}>
              {isEn ? 'Interactive Curriculum Workbench' : '실전 커리큘럼 탐색기 (Syllabus)'}
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.65 }}>
              {isEn
                ? 'Explore real levels, learning goals, and key syntax tags. Click any level to inspect its exercise blueprint.'
                : '1단계부터 20단계까지 실제 학습 목차와 문법 태그, 목표 코드를 확인하세요. 원하는 레벨을 클릭해 바로 실습실로 입장할 수 있습니다.'}
            </p>
          </div>

          {/* Workbench Container */}
          <div className="brilliant-card" style={{ padding: '28px', background: '#ffffff' }}>
            {/* Track Switcher Tabs */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              paddingBottom: '20px',
              borderBottom: '1px solid #e2e8f0',
              marginBottom: '24px',
              flexWrap: 'wrap',
            }}>
              <button
                onClick={() => handleTrackChange('python')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  borderRadius: '10px',
                  fontSize: '0.94rem',
                  fontWeight: selectedTrack === 'python' ? 700 : 500,
                  background: selectedTrack === 'python' ? '#eff6ff' : 'transparent',
                  color: selectedTrack === 'python' ? '#2563eb' : '#64748b',
                  border: selectedTrack === 'python' ? '1px solid #bfdbfe' : '1px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                <span>🐍</span>
                <span>Python (20 레벨)</span>
              </button>

              <button
                onClick={() => handleTrackChange('c')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  borderRadius: '10px',
                  fontSize: '0.94rem',
                  fontWeight: selectedTrack === 'c' ? 700 : 500,
                  background: selectedTrack === 'c' ? '#eff6ff' : 'transparent',
                  color: selectedTrack === 'c' ? '#2563eb' : '#64748b',
                  border: selectedTrack === 'c' ? '1px solid #bfdbfe' : '1px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                <span>⚡</span>
                <span>C Language (20 레벨)</span>
              </button>

              <button
                onClick={() => handleTrackChange('web')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  borderRadius: '10px',
                  fontSize: '0.94rem',
                  fontWeight: selectedTrack === 'web' ? 700 : 500,
                  background: selectedTrack === 'web' ? '#eff6ff' : 'transparent',
                  color: selectedTrack === 'web' ? '#2563eb' : '#64748b',
                  border: selectedTrack === 'web' ? '1px solid #bfdbfe' : '1px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                <span>🌐</span>
                <span>Web Frontend (20 레벨)</span>
              </button>
            </div>

            {/* 2-Panel Split: Left Level List | Right Detail Inspector */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(320px, 1fr) minmax(360px, 1.2fr)',
              gap: '24px',
            }}>
              {/* Left Column: Chapter & Level List */}
              <div style={{
                maxHeight: '480px',
                overflowY: 'auto',
                paddingRight: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}>
                {currentSections.map((sec) => (
                  <div key={sec.id}>
                    <div style={{
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      color: '#94a3b8',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '8px',
                    }}>
                      {sec.sectionNumber}장. {isEn ? sec.title_en : sec.title_ko}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {sec.levels.map((lvl) => {
                        const isSelected = lvl.levelNumber === selectedLevelNum;
                        return (
                          <div
                            key={lvl.levelNumber}
                            onClick={() => setSelectedLevelNum(lvl.levelNumber)}
                            style={{
                              padding: '12px 14px',
                              borderRadius: '10px',
                              background: isSelected ? '#eff6ff' : '#f8fafc',
                              border: isSelected ? '1px solid #3b82f6' : '1px solid #e2e8f0',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              transition: 'all 0.12s ease',
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <span style={{
                                width: '26px',
                                height: '26px',
                                borderRadius: '6px',
                                background: isSelected ? '#2563eb' : '#e2e8f0',
                                color: isSelected ? '#ffffff' : '#64748b',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '0.78rem',
                                fontWeight: 800,
                                fontFamily: 'var(--font-mono)',
                              }}>
                                {lvl.levelNumber}
                              </span>
                              <span style={{
                                fontSize: '0.9rem',
                                fontWeight: isSelected ? 700 : 500,
                                color: isSelected ? '#1e3a8a' : '#1e293b',
                              }}>
                                {isEn ? lvl.title_en : lvl.title_ko}
                              </span>
                            </div>

                            <div style={{ display: 'flex', gap: '4px' }}>
                              {lvl.syntaxTags.slice(0, 1).map((tag) => (
                                <span
                                  key={tag}
                                  style={{
                                    fontSize: '0.72rem',
                                    fontFamily: 'var(--font-mono)',
                                    color: isSelected ? '#2563eb' : '#64748b',
                                    background: isSelected ? 'rgba(37, 99, 235, 0.1)' : '#ffffff',
                                    padding: '2px 6px',
                                    borderRadius: '4px',
                                    border: '1px solid rgba(0,0,0,0.06)',
                                  }}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column: Selected Level Inspector */}
              <div style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
                <div>
                  {/* Inspector Header */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '14px',
                  }}>
                    <span style={{
                      fontSize: '0.76rem',
                      fontWeight: 800,
                      fontFamily: 'var(--font-mono)',
                      color: '#2563eb',
                      background: '#dbeafe',
                      padding: '4px 10px',
                      borderRadius: '6px',
                    }}>
                      {selectedTrack.toUpperCase()} · LEVEL {activeLevel?.levelNumber}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: '#64748b' }}>
                      실습 타수: 약 20~30타
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                    {isEn ? activeLevel?.title_en : activeLevel?.title_ko}
                  </h3>

                  {/* Standard Exercise Prompt */}
                  <div style={{
                    background: '#ffffff',
                    border: '1px solid #cbd5e1',
                    borderRadius: '10px',
                    padding: '14px 16px',
                    fontSize: '0.92rem',
                    color: '#334155',
                    marginBottom: '16px',
                    lineHeight: 1.6,
                  }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748b', marginBottom: '4px' }}>
                      🎯 학습 목표 및 문제 프롬프트:
                    </div>
                    <div>
                      {selectedTrack === 'python' && (
                        activeLevel?.levelNumber === 1 
                          ? '빈칸을 채워 숫자 10을 화면에 출력해보세요.'
                          : `빈칸을 채워 ${activeLevel?.title_ko}의 실습 목표 코드를 완성해보세요.`
                      )}
                      {selectedTrack === 'c' && (
                        `main 함수와 서식 지정자를 사용하여 ${activeLevel?.title_ko} 예제를 완성해보세요.`
                      )}
                      {selectedTrack === 'web' && (
                        `웹 표준 시맨틱 규격에 맞춰 ${activeLevel?.title_ko} 마크업을 완성해보세요.`
                      )}
                    </div>
                  </div>

                  {/* Syntax Tags Chips */}
                  <div style={{ marginBottom: '18px' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748b', marginBottom: '6px' }}>
                      핵심 문법 키워드:
                    </div>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {activeLevel?.syntaxTags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: '0.78rem',
                            fontFamily: 'var(--font-mono)',
                            color: '#0f172a',
                            background: '#ffffff',
                            padding: '4px 10px',
                            borderRadius: '6px',
                            border: '1px solid #cbd5e1',
                            fontWeight: 600,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div style={{ paddingTop: '16px', borderTop: '1px solid #e2e8f0' }}>
                  <Link
                    href={`/practice/${selectedTrack}/${activeLevel?.levelNumber || 1}`}
                    className="brilliant-btn brilliant-btn-primary"
                    style={{
                      width: '100%',
                      padding: '14px',
                      fontSize: '1rem',
                      fontWeight: 700,
                      borderRadius: '10px',
                    }}
                  >
                    <span>{selectedTrack.toUpperCase()} {activeLevel?.levelNumber}레벨 바로 실습하기</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
