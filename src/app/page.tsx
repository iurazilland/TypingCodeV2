'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Terminal, 
  Code2, 
  Cpu, 
  Globe, 
  ChevronRight, 
  Sparkles,
  Zap,
  ShieldCheck,
  Play
} from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import LanguageIcon from '@/components/LanguageIcon';

export default function HomePage() {
  const { language } = useLanguage();
  const isEn = language === 'en';


  // Dynamic light body background for Brilliant Editorial Theme on homepage
  useEffect(() => {
    document.body.style.backgroundColor = '#f8fafc';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

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
            1. HERO SECTION: Focused Value Proposition
            ================================================================= */}
        <section style={{
          textAlign: 'center',
          maxWidth: '860px',
          margin: '0 auto',
          padding: '44px 20px 72px',
        }}>
          {/* Context Pill */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '20px',
            background: '#eff6ff',
            border: '1px solid #bfdbfe',
            color: '#2563eb',
            fontSize: '0.86rem',
            fontWeight: 700,
            marginBottom: '22px',
          }}>
            <span style={{ fontSize: '1.05rem' }}>🧩</span>
            <span>
              {isEn 
                ? 'The Missing Bridge after Block Coding' 
                : '스크래치·엔트리 다음 단계, 텍스트 코딩으로의 도약'}
            </span>
          </div>

          {/* Main Headline */}
          <h1 style={{
            fontSize: '3.2rem',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#0f172a',
            lineHeight: 1.22,
            marginBottom: '20px',
            wordBreak: 'keep-all',
          }}>
            {isEn ? (
              <>
                Stop memorizing syntax.<br />
                <span style={{ color: '#2563eb' }}>Learn real code by typing.</span>
              </>
            ) : (
              <>
                눈으로 외우는 문법 대신,<br />
                <span style={{ color: '#2563eb' }}>손끝으로 완성하는 진짜 코딩.</span>
              </>
            )}
          </h1>

          {/* Description */}
          <p style={{
            fontSize: '1.15rem',
            color: '#475569',
            lineHeight: 1.72,
            marginBottom: '32px',
            maxWidth: '680px',
            margin: '0 auto 32px',
            wordBreak: 'keep-all',
          }}>
            {isEn 
              ? 'Transition smoothly from visual blocks to text programming. Snap blocks to understand logic, fill in blanks with direct typing, and watch live execution on a real terminal runtime.'
              : '블록 조립으로 알고리즘의 뼈대를 세우고, 직접 타이핑하며 실전 감각을 익히세요. 괄호 하나 오타 하나에 좌절하지 않고, 브라우저에서 1단계부터 차근차근 파이썬과 C언어를 체득합니다.'}
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '32px' }}>
            <Link
              href="/practice/python/1"
              className="brilliant-btn brilliant-btn-primary"
              style={{
                padding: '15px 32px',
                fontSize: '1.05rem',
                fontWeight: 700,
                borderRadius: '12px',
                boxShadow: '0 4px 14px rgba(37, 99, 235, 0.25)',
              }}
            >
              <span>{isEn ? 'Start Python Level 1' : '파이썬 1단계 무료 시작하기'}</span>
              <ArrowRight size={18} />
            </Link>

            <a
              href="#how-it-works"
              className="brilliant-btn"
              style={{
                padding: '15px 26px',
                fontSize: '1.05rem',
                fontWeight: 600,
                borderRadius: '12px',
              }}
            >
              <span>{isEn ? 'How It Works' : '학습 방식 살펴보기'}</span>
            </a>
          </div>

          {/* Trust points */}
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
              <span>{isEn ? 'No Installation Required' : '별도 프로그램 설치 제로'}</span>
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="#10b981" />
              <span>{isEn ? 'CPython 3.10 Runtime' : '실제 파이썬 인터프리터 탑재'}</span>
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="#10b981" />
              <span>{isEn ? '100% Free Practice' : '전 레벨 무료 실습'}</span>
            </span>
          </div>
        </section>

        {/* =================================================================
            2. PROBLEM & SOLUTION: Why Traditional Text Coding Fails Beginners
            ================================================================= */}
        <section style={{
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '24px',
          padding: '54px 44px',
          marginBottom: '84px',
          boxShadow: '0 2px 16px -4px rgba(15, 23, 42, 0.04)',
        }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
            <h2 style={{
              fontSize: '2.2rem',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.02em',
              marginBottom: '12px',
            }}>
              {isEn 
                ? 'Why do so many beginners quit text coding?' 
                : '왜 많은 입문자가 블록 코딩 다음 단계에서 포기할까요?'}
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.65 }}>
              {isEn
                ? 'Scratch is fun, but real Python feels terrifying. TypingCode bridges this exact chasm.'
                : '스크래치는 재밌었는데, 파이썬 책을 펴자마자 수많은 문법과 에러에 막힙니다. 타이핑코드가 이 벽을 허뭅니다.'}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}>
            {/* The Hard Old Way */}
            <div style={{
              background: '#fef2f2',
              border: '1px solid #fecaca',
              borderRadius: '18px',
              padding: '32px 28px',
            }}>
              <div style={{
                color: '#dc2626',
                fontWeight: 800,
                fontSize: '1.15rem',
                marginBottom: '18px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <span>❌</span>
                <span>{isEn ? 'The Frustrating Way' : '기존의 막막했던 학습 방식'}</span>
              </div>
              <ul style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                color: '#7f1d1d',
                fontSize: '0.94rem',
                lineHeight: 1.6,
              }}>
                <li style={{ display: 'flex', gap: '8px' }}>
                  <span>•</span>
                  <span><strong>복잡한 설치 지옥</strong>: 파이썬, VS Code, 환경변수 설정부터 막혀서 포기</span>
                </li>
                <li style={{ display: 'flex', gap: '8px' }}>
                  <span>•</span>
                  <span><strong>지루한 문법 암기</strong>: 영어 단어 외우듯 책만 읽다 보니 실제 코드는 못 침</span>
                </li>
                <li style={{ display: 'flex', gap: '8px' }}>
                  <span>•</span>
                  <span><strong>사소한 오타 좌절</strong>: 괄호나 세미콜론 하나 때문에 나오는 수십 줄의 에러</span>
                </li>
              </ul>
            </div>

            {/* The TypingCode Way */}
            <div style={{
              background: '#f0fdf4',
              border: '1px solid #bbf7d0',
              borderRadius: '18px',
              padding: '32px 28px',
            }}>
              <div style={{
                color: '#16a34a',
                fontWeight: 800,
                fontSize: '1.15rem',
                marginBottom: '18px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <span>✅</span>
                <span>{isEn ? 'The TypingCode Way' : '타이핑코드의 자연스러운 체득'}</span>
              </div>
              <ul style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                color: '#14532d',
                fontSize: '0.94rem',
                lineHeight: 1.6,
              }}>
                <li style={{ display: 'flex', gap: '8px' }}>
                  <span>•</span>
                  <span><strong>설치 없이 브라우저 1초 실행</strong>: 크롬만 켜면 나만의 샌드박스가 즉시 시작</span>
                </li>
                <li style={{ display: 'flex', gap: '8px' }}>
                  <span>•</span>
                  <span><strong>블록 조립으로 개념 선행</strong>: 블록으로 먼저 시각화하고 빈칸 채우기로 타이핑 전이</span>
                </li>
                <li style={{ display: 'flex', gap: '8px' }}>
                  <span>•</span>
                  <span><strong>글자수 맞춤 캡슐 박스</strong>: 흔들림 없는 가이드와 가상 키보드로 오타 공포 극복</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* =================================================================
            3. HOW IT WORKS: The 3-Step Guided Learning Cycle
            ================================================================= */}
        <section id="how-it-works" style={{ marginBottom: '84px' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 44px' }}>
            <div className="brilliant-badge" style={{ marginBottom: '14px' }}>
              Learning Methodology
            </div>
            <h2 style={{
              fontSize: '2.2rem',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.02em',
              marginBottom: '12px',
            }}>
              {isEn ? 'A Guided 3-Step Learning Engine' : '타이핑코드만의 3단계 체득 사이클'}
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6 }}>
              {isEn 
                ? 'Every stage is built with progressive scaffolding from visual logic to raw keyboard proficiency.' 
                : '단순 타자 연습이 아닙니다. 1단계부터 10단계까지 인지 부하를 최소화하며 손끝이 스스로 코드를 기억하게 만듭니다.'}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px',
          }}>
            {/* Step 1 Card: Block Puzzle */}
            <div className="brilliant-card" style={{
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <div>
                {/* Visual Demonstration Window */}
                <div style={{
                  background: '#0d1117',
                  borderRadius: '14px',
                  padding: '18px',
                  border: '1px solid #30363d',
                  marginBottom: '22px',
                  fontFamily: 'var(--font-mono)',
                  minHeight: '185px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                  {/* Window Bar */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: '12px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    color: '#8b949e',
                    fontSize: '0.74rem',
                  }}>
                    <div style={{ display: 'flex', gap: '5px' }}>
                      <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#ff5f56' }} />
                      <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#ffbd2e' }} />
                      <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#27c93f' }} />
                    </div>
                    <span>step_1_blocks.py</span>
                  </div>

                  {/* Puzzle Block Visual */}
                  <div style={{ padding: '10px 0', textAlign: 'center' }}>
                    <div style={{
                      display: 'inline-flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '4px',
                    }}>
                      <div style={{
                        background: '#10b981',
                        color: '#ffffff',
                        padding: '6px 18px',
                        borderRadius: '6px 6px 3px 3px',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        boxShadow: '0 2px 0 #047857',
                      }}>
                        ▶ 시작할 때 (Start)
                      </div>
                      <div style={{
                        background: '#3b82f6',
                        color: '#ffffff',
                        padding: '8px 20px',
                        borderRadius: '3px 3px 6px 6px',
                        fontSize: '0.86rem',
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
                          padding: '2px 10px',
                          borderRadius: '4px',
                          fontWeight: 800,
                        }}>
                          10
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Sub-label */}
                  <div style={{ color: '#8b949e', fontSize: '0.74rem', textAlign: 'center' }}>
                    {isEn ? 'Blocks snap into syntax structure' : '블록 결합으로 파이썬 문법 뼈대 자동 생성'}
                  </div>
                </div>

                {/* Step Metadata & Description */}
                <div style={{
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  color: '#2563eb',
                  fontFamily: 'var(--font-mono)',
                  marginBottom: '8px',
                  display: 'inline-flex',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  background: '#eff6ff',
                }}>
                  STEP 01
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
                  {isEn ? '1. Block Concept Snapping' : '1단계. 블록으로 논리 구조 파악'}
                </h3>
                <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.65, margin: 0 }}>
                  {isEn
                    ? 'Snap function, loop, and variable blocks in the visual canvas. The platform automatically converts visual blocks into standard Python syntax in real time.'
                    : '도구함에서 블록을 꺼내 조립하면 실제 파이썬 코드가 자동으로 그려집니다. 오타 걱정 없이 문법 구조와 알고리즘의 뼈대를 먼저 이해합니다.'}
                </p>
              </div>
            </div>

            {/* Step 2 Card: Blank Typing */}
            <div className="brilliant-card" style={{
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <div>
                {/* Visual Demonstration Window */}
                <div style={{
                  background: '#0d1117',
                  borderRadius: '14px',
                  padding: '18px',
                  border: '1px solid #30363d',
                  marginBottom: '22px',
                  fontFamily: 'var(--font-mono)',
                  minHeight: '185px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                  {/* Window Bar */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: '12px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    color: '#8b949e',
                    fontSize: '0.74rem',
                  }}>
                    <div style={{ display: 'flex', gap: '5px' }}>
                      <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#ff5f56' }} />
                      <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#ffbd2e' }} />
                      <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#27c93f' }} />
                    </div>
                    <span>step_2_typing.py</span>
                  </div>

                  {/* Blank Typing Visual */}
                  <div style={{ padding: '8px 4px' }}>
                    <div style={{ color: '#8b949e', fontSize: '0.74rem', marginBottom: '8px' }}>
                      # 빈칸을 채워 숫자 10을 화면에 출력해보세요.
                    </div>
                    <div style={{
                      fontSize: '1.12rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}>
                      <span style={{ color: '#dcdcaa' }}>print</span>
                      <span style={{ color: '#d4d4d4' }}>(</span>
                      <span style={{
                        background: '#1e293b',
                        border: '2px solid #38bdf8',
                        color: '#38bdf8',
                        padding: '1px 12px',
                        borderRadius: '5px',
                        fontWeight: 700,
                        boxShadow: '0 0 10px rgba(56, 189, 248, 0.3)',
                      }}>
                        10
                      </span>
                      <span style={{ color: '#d4d4d4' }}>)</span>
                    </div>
                  </div>

                  {/* Sub-label */}
                  <div style={{ color: '#38bdf8', fontSize: '0.74rem' }}>
                    {isEn ? 'Direct typing into fixed-width capsule' : '글자수 맞춤 캡슐 박스에 키보드로 직접 입력'}
                  </div>
                </div>

                {/* Step Metadata & Description */}
                <div style={{
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  color: '#2563eb',
                  fontFamily: 'var(--font-mono)',
                  marginBottom: '8px',
                  display: 'inline-flex',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  background: '#eff6ff',
                }}>
                  STEP 02
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
                  {isEn ? '2. Blank Typing & Bug Fixing' : '2단계. 빈칸 타이핑 & 오타 교정'}
                </h3>
                <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.65, margin: 0 }}>
                  {isEn
                    ? 'Transition to the keyboard! Fill in essential code blanks and diagnose real syntax errors. The virtual keyboard lights up with next keys to eliminate hunting.'
                    : '블록에 익숙해지면 타이핑 모드로 전환됩니다. 글자 수에 딱 맞춘 캡슐 박스에 직접 키를 입력하고, 틀린 기호를 수정하며 실전 키보드 타수와 감각을 기릅니다.'}
                </p>
              </div>
            </div>

            {/* Step 3 Card: Terminal Run */}
            <div className="brilliant-card" style={{
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <div>
                {/* Visual Demonstration Window */}
                <div style={{
                  background: '#0d1117',
                  borderRadius: '14px',
                  padding: '18px',
                  border: '1px solid #30363d',
                  marginBottom: '22px',
                  fontFamily: 'var(--font-mono)',
                  minHeight: '185px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                  {/* Window Bar */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: '12px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    color: '#8b949e',
                    fontSize: '0.74rem',
                  }}>
                    <div style={{ display: 'flex', gap: '5px' }}>
                      <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#ff5f56' }} />
                      <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#ffbd2e' }} />
                      <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#27c93f' }} />
                    </div>
                    <span>terminal_run.sh</span>
                  </div>

                  {/* Terminal Visual */}
                  <div style={{ padding: '4px 0' }}>
                    <div style={{ color: '#8b949e', fontSize: '0.74rem', marginBottom: '4px' }}>
                      user@typingcode:~$ python3 solution.py
                    </div>
                    <div style={{
                      fontSize: '1.25rem',
                      color: '#34d399',
                      fontWeight: 700,
                      marginBottom: '8px',
                    }}>
                      10
                    </div>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      background: 'rgba(16, 185, 129, 0.15)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      color: '#34d399',
                      padding: '3px 8px',
                      borderRadius: '5px',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                    }}>
                      <CheckCircle2 size={13} />
                      <span>{isEn ? 'Test Passed! (Expected 10)' : '정답 일치! 기대 출력(10)과 동일합니다.'}</span>
                    </div>
                  </div>

                  {/* Sub-label */}
                  <div style={{ color: '#8b949e', fontSize: '0.74rem' }}>
                    {isEn ? 'Real Pyodide CPython 3.10 runtime' : '브라우저 내장 실제 파이썬 인터프리터 실행'}
                  </div>
                </div>

                {/* Step Metadata & Description */}
                <div style={{
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  color: '#2563eb',
                  fontFamily: 'var(--font-mono)',
                  marginBottom: '8px',
                  display: 'inline-flex',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  background: '#eff6ff',
                }}>
                  STEP 03
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
                  {isEn ? '3. Live Terminal Feedback' : '3단계. 터미널 실시간 결과 검증'}
                </h3>
                <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.65, margin: 0 }}>
                  {isEn
                    ? 'Code runs against real Python interpreters and GCC compilers. Memory boxes show variable states dynamically while standard outputs prove success.'
                    : '내가 완성한 코드가 실제 컴퓨터에서 실행됩니다. 터미널의 실시간 출력과 변수 상자(Memory Storage)의 값 변화를 눈으로 직접 확인하며 성취감을 얻습니다.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            4. CURRICULUM TRACKS: Structured Programming Tracks
            ================================================================= */}
        <section id="tracks" style={{ marginBottom: '84px' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
            <div className="brilliant-badge" style={{ marginBottom: '14px' }}>
              Curriculum Roadmaps
            </div>
            <h2 style={{
              fontSize: '2.2rem',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.02em',
              marginBottom: '12px',
            }}>
              {isEn ? 'Structured Practice Tracks' : '실무와 기본기를 다지는 체계적 코스'}
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6 }}>
              {isEn
                ? 'From friendly Python to low-level C system programming, complete 20 progressive levels in each track.'
                : '직관적인 파이썬부터 모던 웹 프론트엔드, 컴퓨터 과학의 정석인 C언어까지 체계적으로 정복하세요.'}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px',
          }}>
            {/* Track 1: Python */}
            <div className="brilliant-card" style={{
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '360px',
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <LanguageIcon language="python" size={42} />
                  <span style={{
                    padding: '5px 12px',
                    borderRadius: '8px',
                    background: '#eff6ff',
                    color: '#2563eb',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-mono)',
                    border: '1px solid #bfdbfe',
                  }}>
                    CPython 3.10 · 20 Levels
                  </span>
                </div>

                <h3 style={{ fontSize: '1.38rem', fontWeight: 800, color: '#0f172a', margin: '0 0 10px' }}>
                  {isEn ? 'Python Programming' : '파이썬 프로그래밍'}
                </h3>
                <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.65, margin: '0 0 18px' }}>
                  {isEn
                    ? 'Learn variables, arithmetic operators, if-else conditionals, while/for loops, and function abstractions from ground up.'
                    : '가장 인기 있는 프로그래밍 언어입니다. 표준 입출력부터 사칙연산, 변수, 조건문, 반복문, 함수까지 핵심 알고리즘의 기초를 탄탄하게 세웁니다.'}
                </p>

                {/* Skill Chips */}
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '24px' }}>
                  {['#출력', '#사칙연산', '#변수', '#조건문', '#반복문'].map((skill) => (
                    <span key={skill} style={{
                      fontSize: '0.76rem',
                      color: '#64748b',
                      background: '#f1f5f9',
                      padding: '3px 8px',
                      borderRadius: '6px',
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/practice/python/1"
                className="brilliant-btn brilliant-btn-dark"
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  padding: '13px 20px',
                }}
              >
                <span>{isEn ? 'Start Level 1' : '파이썬 1단계 시작하기'}</span>
                <ArrowRight size={17} />
              </Link>
            </div>

            {/* Track 2: Web */}
            <div className="brilliant-card" style={{
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '360px',
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <LanguageIcon language="web" size={42} />
                  <span style={{
                    padding: '5px 12px',
                    borderRadius: '8px',
                    background: '#fff7ed',
                    color: '#c2410c',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-mono)',
                    border: '1px solid #fed7aa',
                  }}>
                    HTML5 / CSS / JS · 20 Levels
                  </span>
                </div>

                <h3 style={{ fontSize: '1.38rem', fontWeight: 800, color: '#0f172a', margin: '0 0 10px' }}>
                  {isEn ? 'Interactive Web Development' : '모던 웹 개발 (HTML/CSS/JS)'}
                </h3>
                <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.65, margin: '0 0 18px' }}>
                  {isEn
                    ? 'Construct semantic web markups, style responsive UI components, and dynamically manipulate DOM elements with JavaScript.'
                    : '내 손으로 직접 웹 페이지를 만듭니다. HTML5 시맨틱 마크업, CSS 레이아웃 스타일링, JavaScript 동적 DOM 제어까지 실시간 웹 뷰로 실습합니다.'}
                </p>

                {/* Skill Chips */}
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '24px' }}>
                  {['#HTML5', '#CSS스타일', '#버튼이벤트', '#DOM제어'].map((skill) => (
                    <span key={skill} style={{
                      fontSize: '0.76rem',
                      color: '#64748b',
                      background: '#f1f5f9',
                      padding: '3px 8px',
                      borderRadius: '6px',
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/practice/web/1"
                className="brilliant-btn brilliant-btn-dark"
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  padding: '13px 20px',
                }}
              >
                <span>{isEn ? 'Start Level 1' : '웹 개발 1단계 시작하기'}</span>
                <ArrowRight size={17} />
              </Link>
            </div>

            {/* Track 3: C Language */}
            <div className="brilliant-card" style={{
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '360px',
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <LanguageIcon language="c" size={42} />
                  <span style={{
                    padding: '5px 12px',
                    borderRadius: '8px',
                    background: '#ecfeff',
                    color: '#0e7490',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-mono)',
                    border: '1px solid #a5f3fc',
                  }}>
                    GCC 13 · 20 Levels
                  </span>
                </div>

                <h3 style={{ fontSize: '1.38rem', fontWeight: 800, color: '#0f172a', margin: '0 0 10px' }}>
                  {isEn ? 'C System Programming' : 'C 시스템 프로그래밍'}
                </h3>
                <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.65, margin: '0 0 18px' }}>
                  {isEn
                    ? 'Explore memory allocation, data types, and hardware architectures in a pure Linux GCC environment.'
                    : '컴퓨터의 메모리와 하드웨어를 직접 제어하는 기본기의 정석입니다. 실제 GCC 환경에서 변수 타입, 포인터, 메모리 원리를 한 줄씩 타이핑하며 익힙니다.'}
                </p>

                {/* Skill Chips */}
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '24px' }}>
                  {['#표준입출력', '#자료형', '#포인터원리', '#시스템메모리'].map((skill) => (
                    <span key={skill} style={{
                      fontSize: '0.76rem',
                      color: '#64748b',
                      background: '#f1f5f9',
                      padding: '3px 8px',
                      borderRadius: '6px',
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/practice/c/1"
                className="brilliant-btn brilliant-btn-dark"
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  padding: '13px 20px',
                }}
              >
                <span>{isEn ? 'Start Level 1' : 'C언어 1단계 시작하기'}</span>
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
