'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Sparkles,
  Check
} from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { CURRICULUM_TRACKS } from '@/lib/curriculum';
import LanguageIcon from '@/components/LanguageIcon';

interface MarqueeCardItem {
  trackId: string;
  trackName: string;
  mainTitle: string;
  subTitle: string;
  difficulty: '입문' | '중급' | '심화';
  difficultyLabel: string;
  totalLevels: number;
  practiceUrl: string;
}

const parseCardTitle = (raw: string) => {
  const match = raw.match(/^(.*?)\s*\((.*?)\)$/);
  if (match) {
    return { main: match[1].trim(), sub: match[2].trim() };
  }
  return { main: raw.trim(), sub: '' };
};

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

  // Beginner line modules (Line 1: Right to Left)
  const BEGINNER_MODULES: MarqueeCardItem[] = React.useMemo(() => {
    const list: MarqueeCardItem[] = [];
    CURRICULUM_TRACKS.forEach((track) => {
      track.modules.forEach((mod) => {
        if (mod.difficulty === '입문') {
          const parsed = parseCardTitle(isEn ? mod.title_en : mod.title_ko);
          list.push({
            trackId: track.id,
            trackName: track.name.split(' (')[0],
            mainTitle: parsed.main,
            subTitle: parsed.sub,
            difficulty: mod.difficulty,
            difficultyLabel: isEn ? 'Beginner' : '초급',
            totalLevels: mod.totalLevels,
            practiceUrl: mod.practiceUrl || `/practice/${track.id}/1`,
          });
        }
      });
    });
    return list;
  }, [isEn]);

  // Intermediate & Advanced line modules (Line 2: Left to Right)
  const ADVANCED_MODULES: MarqueeCardItem[] = React.useMemo(() => {
    const list: MarqueeCardItem[] = [];
    CURRICULUM_TRACKS.forEach((track) => {
      track.modules.forEach((mod) => {
        if (mod.difficulty === '중급' || mod.difficulty === '심화') {
          const parsed = parseCardTitle(isEn ? mod.title_en : mod.title_ko);
          list.push({
            trackId: track.id,
            trackName: track.name.split(' (')[0],
            mainTitle: parsed.main,
            subTitle: parsed.sub,
            difficulty: mod.difficulty,
            difficultyLabel: mod.difficulty === '심화' ? (isEn ? 'Adv' : '상급') : (isEn ? 'Int' : '중급'),
            totalLevels: mod.totalLevels,
            practiceUrl: mod.practiceUrl || `/practice/${track.id}/1`,
          });
        }
      });
    });
    return list;
  }, [isEn]);

  // Typewriter live typing effect
  const TYPEWRITER_TARGET = isEn 
    ? 'Just type along, and code becomes second nature.' 
    : '따라치다 보면 손이 먼저 코드를 기억합니다.';
  const [typewriterText, setTypewriterText] = useState('');
  const [typewriterIdx, setTypewriterIdx] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (typewriterIdx < TYPEWRITER_TARGET.length) {
      timer = setTimeout(() => {
        setTypewriterText(TYPEWRITER_TARGET.slice(0, typewriterIdx + 1));
        setTypewriterIdx((prev) => prev + 1);
      }, 75);
    } else {
      timer = setTimeout(() => {
        setTypewriterIdx(0);
        setTypewriterText('');
      }, 3500);
    }
    return () => clearTimeout(timer);
  }, [typewriterIdx, TYPEWRITER_TARGET]);

  const LINE_1_CHARS = 'JUST TYPE IT,'.split('');
  const LINE_2_CHARS = 'THEN CODE IT.'.split('');

  return (
    <div style={{
      background: '#f8fafc',
      color: '#0f172a',
      minHeight: '100vh',
      marginTop: '-70px',
      paddingTop: '70px',
      overflowX: 'hidden',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 120px' }}>
        
        {/* =================================================================
            1. HERO SECTION: Pure Slogan with Live 5 Animation Showcase
            ================================================================= */}
        <section style={{
          textAlign: 'center',
          maxWidth: '960px',
          margin: '0 auto',
          padding: '140px 24px 170px',
          minHeight: 'calc(90vh - 70px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {/* Main Slogan: Exact 13x2 Monospace Geometric Grid with Kinetic Wave Animation */}
          <div style={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '36px',
          }}>
            {/* Slogan Text: Exact 13 Characters on each line in JetBrains Mono */}
            <h1 style={{
              fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
              fontSize: 'clamp(2.4rem, 6vw, 4.6rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '0.06em',
              textAlign: 'center',
              margin: 0,
              userSelect: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              {/* Line 1: 13 characters */}
              <div style={{
                color: '#0f172a',
                whiteSpace: 'nowrap',
              }}>
                {LINE_1_CHARS.map((char, idx) => (
                  <span
                    key={idx}
                    style={{
                      display: 'inline-block',
                      animation: 'kineticWaveCharLine1 3.6s cubic-bezier(0.25, 1, 0.5, 1) infinite',
                      animationDelay: `${idx * 0.03}s`,
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </div>

              {/* Line 2: 13 characters */}
              <div style={{
                color: '#0891b2',
                whiteSpace: 'nowrap',
              }}>
                {LINE_2_CHARS.map((char, idx) => (
                  <span
                    key={idx}
                    style={{
                      display: 'inline-block',
                      animation: 'kineticWaveCharLine2 3.6s cubic-bezier(0.25, 1, 0.5, 1) infinite',
                      animationDelay: `${idx * 0.03}s`,
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </div>
            </h1>
          </div>

          {/* Simple Subtitle */}
          <p style={{
            fontSize: 'clamp(1.15rem, 2.5vw, 1.38rem)',
            color: '#64748b',
            fontWeight: 500,
            lineHeight: 1.6,
            maxWidth: '560px',
            margin: '0 auto',
            wordBreak: 'keep-all',
          }}>
            {isEn 
              ? 'Simply type. The code will follow.'
              : '그냥 입력하세요. 코드가 완성됩니다.'}
          </p>
        </section>

        {/* =================================================================
            2. THE PROBLEM: BLOCK CODING VS REAL CODING
            ================================================================= */}
        <section id="why-typingcode" style={{ marginBottom: '100px' }}>
          
          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 44px' }}>
            <h2 style={{
              fontSize: 'clamp(1.9rem, 3.8vw, 2.5rem)',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.02em',
              marginBottom: '12px',
              wordBreak: 'keep-all',
            }}>
              {isEn 
                ? 'Block coding is easy. Why is real coding so hard?' 
                : '블록코딩은 쉬운데, 코딩은 왜 어려울까요?'}
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.12rem)',
              color: '#64748b',
              lineHeight: 1.6,
              maxWidth: '580px',
              margin: '0 auto',
              wordBreak: 'keep-all',
            }}>
              {isEn
                ? 'The sudden reality wall learners hit when transitioning from visual blocks to real text code.'
                : '블록 맞추기에서 실제 텍스트 코드로 넘어가는 순간 마주치는 현실의 벽.'}
            </p>
          </div>

          {/* 2 Comparison Cards with Center Arrow */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            maxWidth: '1040px',
            margin: '0 auto',
            flexWrap: 'wrap',
          }}>
            {/* Card 1: Block Coding */}
            <div style={{
              flex: '1 1 360px',
              maxWidth: '480px',
              background: '#ffffff',
              border: '1.5px solid #e0f2fe',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 10px 28px -6px rgba(14, 165, 233, 0.08), 0 2px 8px rgba(15, 23, 42, 0.04)',
            }}>
              <div style={{ position: 'relative', width: '100%', height: '280px', overflow: 'hidden', background: '#f0f9ff' }}>
                <img 
                  src="/images/block_coding_fun.jpg" 
                  alt="블록코딩은 쉽고 재밌습니다."
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '5px 12px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.92)',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.08)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: '#0284c7',
                }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981' }} />
                  {isEn ? 'Block Coding' : '블록 코딩'}
                </div>
              </div>

              <div style={{ padding: '24px 28px 28px' }}>
                <h3 style={{
                  fontSize: '1.28rem',
                  fontWeight: 800,
                  color: '#0f172a',
                  marginBottom: '10px',
                  letterSpacing: '-0.01em',
                  wordBreak: 'keep-all',
                }}>
                  {isEn ? 'Block coding is easy and fun.' : '블록코딩은 쉽고 재밌습니다.'}
                </h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#64748b',
                  lineHeight: 1.65,
                  margin: 0,
                  wordBreak: 'keep-all',
                }}>
                  {isEn
                    ? 'Snap blocks together with a mouse to learn logic and computational thinking intuitively. See immediate visual results without the stress of syntax rules or typos.'
                    : '마우스로 블록을 조립하며 프로그래밍의 논리와 알고리즘을 직관적으로 배웁니다. 문법 오타 걱정 없이 원하는 동작을 시각적으로 즉각 확인하며 코딩의 재미를 느낄 수 있습니다.'}
                </p>
              </div>
            </div>

            {/* Middle Connecting Arrow */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              background: '#ffffff',
              border: '1.5px solid #e2e8f0',
              color: '#0284c7',
              boxShadow: '0 4px 14px rgba(15, 23, 42, 0.08)',
              flexShrink: 0,
            }}>
              <ArrowRight size={22} strokeWidth={2.5} />
            </div>

            {/* Card 2: Real Text Code */}
            <div style={{
              flex: '1 1 360px',
              maxWidth: '480px',
              background: '#ffffff',
              border: '1.5px solid #e2e8f0',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 10px 28px -6px rgba(15, 23, 42, 0.08), 0 2px 8px rgba(15, 23, 42, 0.04)',
            }}>
              <div style={{ position: 'relative', width: '100%', height: '280px', overflow: 'hidden', background: '#0e121a' }}>
                <img 
                  src="/images/real_coding_hard.jpg" 
                  alt="실전 코딩은 복잡하고 어렵습니다."
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '5px 12px',
                  borderRadius: '14px',
                  background: 'rgba(15, 23, 42, 0.88)',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: '#f87171',
                }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ef4444' }} />
                  {isEn ? 'Real Coding' : '실전 코딩'}
                </div>
              </div>

              <div style={{ padding: '24px 28px 28px' }}>
                <h3 style={{
                  fontSize: '1.28rem',
                  fontWeight: 800,
                  color: '#0f172a',
                  marginBottom: '10px',
                  letterSpacing: '-0.01em',
                  wordBreak: 'keep-all',
                }}>
                  {isEn ? 'Real coding is complex and difficult.' : '실전 코딩은 복잡하고 어렵습니다.'}
                </h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#64748b',
                  lineHeight: 1.65,
                  margin: 0,
                  wordBreak: 'keep-all',
                }}>
                  {isEn
                    ? 'Stepping into a real code editor brings unfamiliar English keywords and strict syntax rules. A single typo or misplaced bracket halts execution, leaving learners stranded in error messages.'
                    : '하지만 실제 텍스트 에디터로 넘어오는 순간, 낯선 영문 키워드와 복잡한 문법 규칙에 부딪힙니다. 단 한 글자의 사소한 오타나 괄호 실수에도 실행이 멈추고 에러 메시지 앞에서 막막해집니다.'}
                </p>
              </div>
            </div>
          </div>

          {/* Foundation Statement with Typewriter Typing Effect */}
          <div style={{
            maxWidth: '860px',
            margin: '48px auto 0',
            padding: '0 16px',
          }}>
            <div style={{
              position: 'relative',
              textAlign: 'center',
              background: '#ffffff',
              border: '1.5px solid #e2e8f0',
              borderRadius: '24px',
              padding: '48px 36px',
              boxShadow: '0 16px 36px -12px rgba(15, 23, 42, 0.06)',
            }}>
              <h3 style={{
                fontSize: 'clamp(1.35rem, 2.7vw, 1.85rem)',
                fontWeight: 800,
                color: '#0f172a',
                letterSpacing: '-0.02em',
                lineHeight: 1.45,
                marginBottom: '14px',
                wordBreak: 'keep-all',
              }}>
                <span style={{ display: 'block', marginBottom: '6px', color: '#334155' }}>
                  {isEn ? 'No thick textbooks, no hard lectures.' : '두꺼운 코딩책도 어려운 강의도 없이,'}
                </span>
                <span style={{ color: '#0f172a', fontWeight: 800 }}>
                  {typewriterText}
                </span>
                <span
                  style={{
                    display: 'inline-block',
                    width: '3.5px',
                    height: '1.1em',
                    background: '#0891b2',
                    marginLeft: '6px',
                    verticalAlign: 'text-bottom',
                    borderRadius: '2px',
                    animation: 'cursorBlinkGlow 0.9s infinite',
                  }}
                />
              </h3>
              <p style={{
                fontSize: 'clamp(0.98rem, 1.8vw, 1.08rem)',
                color: '#64748b',
                lineHeight: 1.7,
                margin: '0 auto',
                maxWidth: '660px',
                wordBreak: 'keep-all',
              }}>
                {isEn ? (
                  <>
                    Naturally bridge the gap between block coding and real coding{' '}
                    <span style={{
                      color: '#0f172a',
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: '6px',
                      background: '#f0fdfa',
                      border: '1px solid #ccfbf1',
                      display: 'inline-block',
                    }}>
                      just by typing
                    </span>.
                  </>
                ) : (
                  <>
                    블록코딩과 실전 코딩 사이의 거대한 간극을{' '}
                    <span style={{
                      color: '#0f172a',
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: '6px',
                      background: '#f0fdfa',
                      border: '1px solid #ccfbf1',
                      display: 'inline-block',
                    }}>
                      타이핑만으로
                    </span>{' '}
                    자연스럽게 채워줍니다.
                  </>
                )}
              </p>
            </div>
          </div>
        </section>

        {/* =================================================================
            3. NOVEL CURRICULUM COMMAND DECK (Third Screen)
            ================================================================= */}
        {/* =================================================================
            3. DUAL-TRACK DYNAMIC CURRICULUM CONSOLE
            ================================================================= */}
        <section id="curriculum" style={{ marginBottom: '110px', scrollMarginTop: '80px' }}>
          
          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px', padding: '0 20px' }}>
            <h2 style={{
              fontSize: 'clamp(1.9rem, 3.8vw, 2.5rem)',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.02em',
              marginBottom: '12px',
              wordBreak: 'keep-all',
            }}>
              {isEn ? 'Dual-Track Curriculum from Basics to Mastery' : '초급부터 실전 심화까지, 단계별 코딩 코스'}
            </h2>
            <p style={{
              color: '#64748b',
              fontSize: 'clamp(0.98rem, 1.8vw, 1.08rem)',
              lineHeight: 1.6,
              margin: 0,
              wordBreak: 'keep-all',
            }}>
              {isEn
                ? 'Hover any card to pause. Click to jump directly into interactive hands-on code typing practice.'
                : '마우스를 올리면 흐름이 멈추고, 카드를 클릭하면 브라우저에서 바로 실전 타이핑 학습을 시작합니다.'}
            </p>
          </div>

          {/* Marquee Row 1: Beginner Line (Right to Left) */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              maxWidth: '1280px',
              margin: '0 auto 12px',
              padding: '0 24px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '26px',
                  height: '26px',
                  borderRadius: '8px',
                  background: '#ecfdf5',
                  color: '#059669',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  border: '1px solid #a7f3d0',
                }}>
                  01
                </span>
                <span style={{ fontSize: '1.02rem', fontWeight: 800, color: '#0f172a' }}>
                  {isEn ? 'Beginner Foundation Track' : '초급 입문 트랙 (13개 언어 기초 문법)'}
                </span>
              </div>
            </div>

            <div className="curriculum-marquee-row">
              <div className="curriculum-marquee-track marquee-scroll-left">
                {[...BEGINNER_MODULES, ...BEGINNER_MODULES].map((item, idx) => {
                  const isBeginner = item.difficulty === '입문';
                  const isHard = item.difficulty === '심화';
                  const badgeBg = isBeginner ? '#ecfdf5' : isHard ? '#faf5ff' : '#eff6ff';
                  const badgeColor = isBeginner ? '#059669' : isHard ? '#7c3aed' : '#2563eb';
                  const badgeBorder = isBeginner ? '#a7f3d0' : isHard ? '#e9d5ff' : '#bfdbfe';

                  return (
                    <Link
                      key={`begin-${idx}`}
                      href={item.practiceUrl}
                      className="curriculum-square-card"
                    >
                      {/* Top: Language Icon + Track Name */}
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                        <LanguageIcon language={item.trackId} size={38} />
                        <span style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          color: '#64748b',
                          letterSpacing: '0.02em',
                          textTransform: 'uppercase',
                        }}>
                          {item.trackName}
                        </span>
                      </div>

                      {/* Middle: Learning Title (Main & Sub) */}
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '2px',
                        width: '100%',
                        padding: '0 4px',
                      }}>
                        <div style={{
                          fontSize: '0.86rem',
                          fontWeight: 800,
                          color: '#0f172a',
                          lineHeight: 1.25,
                          textAlign: 'center',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          maxWidth: '152px',
                        }}>
                          {item.mainTitle}
                        </div>
                        {item.subTitle && (
                          <div style={{
                            fontSize: '0.72rem',
                            color: '#64748b',
                            lineHeight: 1.2,
                            textAlign: 'center',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            maxWidth: '152px',
                          }}>
                            {item.subTitle}
                          </div>
                        )}
                      </div>

                      {/* Bottom: Difficulty & Level Badge */}
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '3px 10px',
                        borderRadius: '10px',
                        background: badgeBg,
                        color: badgeColor,
                        border: `1px solid ${badgeBorder}`,
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        fontFamily: 'var(--font-mono), monospace',
                      }}>
                        <span>{item.difficultyLabel}</span>
                        <span style={{ opacity: 0.5 }}>·</span>
                        <span>{item.totalLevels}L</span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Marquee Row 2: Intermediate + Advanced Line (Left to Right - Opposite) */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              maxWidth: '1280px',
              margin: '0 auto 12px',
              padding: '0 24px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '26px',
                  height: '26px',
                  borderRadius: '8px',
                  background: '#eff6ff',
                  color: '#2563eb',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  border: '1px solid #bfdbfe',
                }}>
                  02
                </span>
                <span style={{ fontSize: '1.02rem', fontWeight: 800, color: '#0f172a' }}>
                  {isEn ? 'Intermediate & Advanced Practice Track' : '중급 · 상급 실전 트랙 (심화 알고리즘 · OOP · 프레임워크)'}
                </span>
              </div>
            </div>

            <div className="curriculum-marquee-row">
              <div className="curriculum-marquee-track marquee-scroll-right">
                {[...ADVANCED_MODULES, ...ADVANCED_MODULES].map((item, idx) => {
                  const isBeginner = item.difficulty === '입문';
                  const isHard = item.difficulty === '심화';
                  const badgeBg = isBeginner ? '#ecfdf5' : isHard ? '#faf5ff' : '#eff6ff';
                  const badgeColor = isBeginner ? '#059669' : isHard ? '#7c3aed' : '#2563eb';
                  const badgeBorder = isBeginner ? '#a7f3d0' : isHard ? '#e9d5ff' : '#bfdbfe';

                  return (
                    <Link
                      key={`adv-${idx}`}
                      href={item.practiceUrl}
                      className="curriculum-square-card"
                    >
                      {/* Top: Language Icon + Track Name */}
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                        <LanguageIcon language={item.trackId} size={38} />
                        <span style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          color: '#64748b',
                          letterSpacing: '0.02em',
                          textTransform: 'uppercase',
                        }}>
                          {item.trackName}
                        </span>
                      </div>

                      {/* Middle: Learning Title (Main & Sub) */}
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '2px',
                        width: '100%',
                        padding: '0 4px',
                      }}>
                        <div style={{
                          fontSize: '0.86rem',
                          fontWeight: 800,
                          color: '#0f172a',
                          lineHeight: 1.25,
                          textAlign: 'center',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          maxWidth: '152px',
                        }}>
                          {item.mainTitle}
                        </div>
                        {item.subTitle && (
                          <div style={{
                            fontSize: '0.72rem',
                            color: '#64748b',
                            lineHeight: 1.2,
                            textAlign: 'center',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            maxWidth: '152px',
                          }}>
                            {item.subTitle}
                          </div>
                        )}
                      </div>

                      {/* Bottom: Difficulty & Level Badge */}
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '3px 10px',
                        borderRadius: '10px',
                        background: badgeBg,
                        color: badgeColor,
                        border: `1px solid ${badgeBorder}`,
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        fontFamily: 'var(--font-mono), monospace',
                      }}>
                        <span>{item.difficultyLabel}</span>
                        <span style={{ opacity: 0.5 }}>·</span>
                        <span>{item.totalLevels}L</span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Action: Link to all languages */}
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link
              href="/languages"
              className="brilliant-btn brilliant-btn-secondary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                fontSize: '0.94rem',
                fontWeight: 700,
                borderRadius: '16px',
                background: '#ffffff',
                border: '1.5px solid #e2e8f0',
                color: '#0f172a',
                boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
                textDecoration: 'none',
              }}
            >
              <span>{isEn ? 'Browse All 13 Language Curriculums' : '전체 13개 언어 커리큘럼 자세히 보기'}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
