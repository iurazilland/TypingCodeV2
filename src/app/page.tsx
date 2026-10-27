'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Terminal, 
  Code2, 
  Sparkles,
  Check
} from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { CURRICULUM_TRACKS, LanguageTrack } from '@/lib/curriculum';
import { getCourseSections, LevelSection } from '@/lib/curriculumSections';

// Signature sample code for each track
const TRACK_SIGNATURE_CODE: Record<string, { filename: string; code: string; highlight: string }> = {
  python: {
    filename: 'solution.py',
    code: `# CPython 3.10 Runtime\ndef calculate_sum(n):\n    return sum(range(1, n + 1))\n\nresult = calculate_sum(10)\nprint(f"Result: {result}")`,
    highlight: 'CPython 3.10',
  },
  c: {
    filename: 'main.c',
    code: `// GCC 13.2 System Compiler\n#include <stdio.h>\n\nint main() {\n    int target = 10;\n    printf("Memory Target: %d\\n", target);\n    return 0;\n}`,
    highlight: 'GCC 13.2',
  },
  web: {
    filename: 'index.html',
    code: `<!-- Real-time HTML5 / CSS3 DOM -->\n<div class="card-grid">\n  <header class="hero-title">\n    <h1>Just Type It.</h1>\n  </header>\n</div>`,
    highlight: 'HTML5 & CSS3',
  },
  javascript: {
    filename: 'app.js',
    code: `// V8 JavaScript Engine\nconst processData = async (items) => {\n  const results = items.map(x => x * 2);\n  return results.filter(n => n > 10);\n};`,
    highlight: 'V8 / ES2024',
  },
  cpp: {
    filename: 'vector_demo.cpp',
    code: `// Modern C++20\n#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> nums = {3, 1, 4, 1, 5};\n    std::sort(nums.begin(), nums.end());\n    return 0;\n}`,
    highlight: 'Modern C++20',
  },
  java: {
    filename: 'Main.java',
    code: `// OpenJDK 21 LTS\npublic class Main {\n    public static void main(String[] args) {\n        var message = "TypingCode Enterprise";\n        System.out.println(message);\n    }\n}`,
    highlight: 'OpenJDK 21',
  },
  rust: {
    filename: 'main.rs',
    code: `// Rust 1.76 Memory Safe\nfn main() {\n    let mut vector = vec![1, 2, 3];\n    vector.push(4);\n    println!("Vector: {:?}", vector);\n}`,
    highlight: 'Rust 1.76',
  },
  go: {
    filename: 'server.go',
    code: `// Go 1.22 Goroutine Concurrency\npackage main\nimport "fmt"\n\nfunc main() {\n    ch := make(chan int)\n    go func() { ch <- 42 }()\n    fmt.Println(<-ch)\n}`,
    highlight: 'Go 1.22',
  },
  csharp: {
    filename: 'Program.cs',
    code: `// .NET 8 C# Modern\nvar items = Enumerable.Range(1, 10)\n    .Where(x => x % 2 == 0)\n    .ToList();\nConsole.WriteLine($"Count: {items.Count}");`,
    highlight: '.NET 8 C#',
  },
  swift: {
    filename: 'App.swift',
    code: `// Swift 5.10\nlet numbers = [10, 20, 30]\nlet doubled = numbers.map { $0 * 2 }\nprint("Swift Result: \\(doubled)")`,
    highlight: 'Swift 5.10',
  },
  sql: {
    filename: 'query.sql',
    code: `-- SQLite / PostgreSQL Engine\nSELECT user_id, COUNT(*) AS solved_count\nFROM practice_logs\nWHERE status = 'SUCCESS'\nGROUP BY user_id\nORDER BY solved_count DESC;`,
    highlight: 'ANSI SQL',
  },
  linux: {
    filename: 'script.sh',
    code: `#!/bin/bash\n# Linux CLI Bash Shell\necho "Current Kernel: $(uname -r)"\nfind . -name "*.py" -type f | wc -l`,
    highlight: 'Bash CLI',
  },
  vba: {
    filename: 'Macro.bas',
    code: `' Excel VBA Automation\nSub AutomateReport()\n    Dim ws As Worksheet\n    Set ws = ThisWorkbook.Sheets(1)\n    ws.Range("A1").Value = "Completed"\nEnd Sub`,
    highlight: 'Excel VBA',
  },
};

export default function HomePage() {
  const { language } = useLanguage();
  const isEn = language === 'en';

  // Active track selection (default to Python)
  const [activeTrackId, setActiveTrackId] = useState<string>('python');

  // Dynamic light body background for Brilliant Editorial Theme on homepage
  useEffect(() => {
    document.body.style.backgroundColor = '#f8fafc';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  // Currently selected track metadata
  const currentTrack: LanguageTrack = React.useMemo(() => {
    return CURRICULUM_TRACKS.find((t) => t.id === activeTrackId) || CURRICULUM_TRACKS[0];
  }, [activeTrackId]);

  // Sections for current track
  const currentSections: LevelSection[] = React.useMemo(() => {
    return getCourseSections(currentTrack.id, currentTrack.modules[0]?.id || `${currentTrack.id}-basic`);
  }, [currentTrack]);

  // Signature code preview
  const signature = TRACK_SIGNATURE_CODE[currentTrack.id] || TRACK_SIGNATURE_CODE.python;

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
          padding: '80px 20px 110px',
          minHeight: 'calc(78vh - 70px)',
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
            marginBottom: '32px',
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

          {/* Bottom Foundation Statement (Pure Typography) */}
          <div style={{
            textAlign: 'center',
            maxWidth: '820px',
            margin: '52px auto 0',
            padding: '0 20px',
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 14px',
              borderRadius: '20px',
              background: '#f0fdfa',
              border: '1px solid #ccfbf1',
              color: '#0d9488',
              fontSize: '0.82rem',
              fontWeight: 700,
              marginBottom: '16px',
            }}>
              <Sparkles size={14} />
              <span>{isEn ? 'The TypingCode Solution' : '타이핑코드가 채우는 해답'}</span>
            </div>

            <h3 style={{
              fontSize: 'clamp(1.4rem, 2.8vw, 1.85rem)',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.02em',
              lineHeight: 1.45,
              marginBottom: '14px',
              wordBreak: 'keep-all',
            }}>
              {isEn
                ? 'No thick textbooks, no hard lectures. Just type along, and code flows.'
                : '두꺼운 코딩책도 어려운 강의도 없이,\n따라치다 보면 손이 먼저 코드를 기억합니다.'}
            </h3>

            <p style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.1rem)',
              color: '#64748b',
              lineHeight: 1.7,
              margin: '0 auto',
              maxWidth: '640px',
              wordBreak: 'keep-all',
            }}>
              {isEn
                ? 'TypingCode fills the difficult gap between block coding and real programming through intuitive interactive typing.'
                : '타이핑코드는 블록코딩과 실전 코딩 사이의 거대한 간극을 손끝의 타이핑으로 자연스럽게 채워주는 연습실입니다.'}
            </p>
          </div>
        </section>

        {/* =================================================================
            3. NOVEL CURRICULUM COMMAND DECK (Third Screen)
            ================================================================= */}
        <section id="curriculum" style={{ marginBottom: '96px', scrollMarginTop: '80px' }}>
          
          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 36px' }}>
            <div className="brilliant-badge" style={{ marginBottom: '14px' }}>
              Interactive Language Console
            </div>
            <h2 style={{
              fontSize: '2.2rem',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.02em',
              marginBottom: '10px',
            }}>
              {isEn ? '13 Languages. Real Syllabuses.' : '13개 언어 커리큘럼 콘솔'}
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.02rem', lineHeight: 1.6 }}>
              {isEn
                ? 'Select any language to inspect its compiler engine, signature syntax, and structured syllabus progression.'
                : '언어를 클릭하면 내장 컴파일러 엔진과 시그니처 코드, 단계별 실전 커리큘럼을 즉시 확인할 수 있습니다.'}
            </p>
          </div>

          {/* Interactive Language Chips Dock */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '28px',
          }}>
            {CURRICULUM_TRACKS.map((track) => {
              const isActive = track.id === activeTrackId;
              return (
                <button
                  key={track.id}
                  onClick={() => setActiveTrackId(track.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    padding: '8px 16px',
                    borderRadius: '24px',
                    fontSize: '0.86rem',
                    fontWeight: isActive ? 700 : 500,
                    background: isActive ? '#0f172a' : '#ffffff',
                    color: isActive ? '#ffffff' : '#475569',
                    border: isActive ? '1px solid #0f172a' : '1px solid #e2e8f0',
                    boxShadow: isActive ? '0 4px 14px rgba(15, 23, 42, 0.16)' : '0 1px 2px rgba(0,0,0,0.03)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <span style={{ fontSize: '1rem' }}>{track.icon}</span>
                  <span>{track.name.split(' (')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Main Language Console Workbench */}
          <div style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '24px',
            padding: '36px',
            boxShadow: '0 20px 48px -12px rgba(15, 23, 42, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)',
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(320px, 1fr) minmax(360px, 1.25fr)',
              gap: '36px',
            }}>
              {/* Left Column: Language DNA & Code Preview */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  {/* Track Header */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '2.2rem' }}>{currentTrack.icon}</span>
                      <div>
                        <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                          {currentTrack.name}
                        </h3>
                        <span style={{ fontSize: '0.82rem', color: '#64748b' }}>
                          {currentTrack.modules.length}개 모듈 · 총 {currentTrack.modules.reduce((acc, m) => acc + m.totalLevels, 0)}단계 커리큘럼
                        </span>
                      </div>
                    </div>

                    <span style={{
                      padding: '4px 12px',
                      borderRadius: '8px',
                      background: '#ecfeff',
                      color: '#0891b2',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      fontFamily: 'var(--font-mono)',
                      border: '1px solid #a5f3fc',
                    }}>
                      {currentTrack.badge}
                    </span>
                  </div>

                  {/* Tagline */}
                  <p style={{
                    fontSize: '0.94rem',
                    color: '#475569',
                    lineHeight: 1.6,
                    marginBottom: '22px',
                  }}>
                    {isEn ? currentTrack.tagline_en : currentTrack.tagline_ko}
                  </p>

                  {/* Signature Code Box */}
                  <div style={{
                    background: '#0d1117',
                    borderRadius: '14px',
                    padding: '18px',
                    border: '1px solid #30363d',
                    marginBottom: '20px',
                    fontFamily: 'var(--font-mono)',
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingBottom: '10px',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                      marginBottom: '12px',
                      fontSize: '0.74rem',
                      color: '#8b949e',
                    }}>
                      <div style={{ display: 'flex', gap: '5px' }}>
                        <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#ff5f56' }} />
                        <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#ffbd2e' }} />
                        <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#27c93f' }} />
                      </div>
                      <span>{signature.filename}</span>
                    </div>

                    <pre style={{
                      margin: 0,
                      fontSize: '0.82rem',
                      lineHeight: 1.6,
                      color: '#c9d1d9',
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-all',
                    }}>
                      {signature.code}
                    </pre>
                  </div>
                </div>

                {/* Direct Action Link */}
                <Link
                  href={currentTrack.modules[0]?.practiceUrl || `/practice/${currentTrack.id}/1`}
                  className="brilliant-btn brilliant-btn-primary"
                  style={{
                    padding: '14px 24px',
                    fontSize: '0.98rem',
                    fontWeight: 700,
                    borderRadius: '12px',
                    width: '100%',
                  }}
                >
                  <span>{currentTrack.name.split(' (')[0]} 1단계 실습 시작하기</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Right Column: Progressive Syllabus Stages */}
              <div style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '18px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '18px',
                    paddingBottom: '12px',
                    borderBottom: '1px solid #e2e8f0',
                  }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {currentTrack.name.split(' (')[0]} Roadmap Syllabus
                    </span>
                    <span style={{ fontSize: '0.78rem', color: '#64748b' }}>
                      20 Levels Scaffolding
                    </span>
                  </div>

                  {/* Chapter List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxHeight: '420px', overflowY: 'auto' }}>
                    {currentSections.map((sec, idx) => (
                      <div
                        key={sec.id}
                        style={{
                          background: '#ffffff',
                          border: '1px solid #e2e8f0',
                          borderRadius: '12px',
                          padding: '16px',
                        }}
                      >
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '8px',
                        }}>
                          <span style={{
                            fontSize: '0.78rem',
                            fontWeight: 800,
                            color: '#0891b2',
                            fontFamily: 'var(--font-mono)',
                          }}>
                            CHAPTER 0{idx + 1}
                          </span>
                          <span style={{ fontSize: '0.74rem', color: '#94a3b8' }}>
                            {sec.levels.length}개 레벨
                          </span>
                        </div>

                        <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>
                          {isEn ? sec.title_en : sec.title_ko}
                        </h4>

                        {/* Level tags sample */}
                        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                          {sec.levels.slice(0, 3).map((lvl) => (
                            <Link
                              key={lvl.levelNumber}
                              href={`/practice/${currentTrack.id}/${lvl.levelNumber}`}
                              style={{
                                fontSize: '0.74rem',
                                color: '#475569',
                                background: '#f1f5f9',
                                padding: '3px 8px',
                                borderRadius: '6px',
                                textDecoration: 'none',
                                transition: 'all 0.1s ease',
                              }}
                            >
                              L{lvl.levelNumber}. {isEn ? lvl.title_en.split(' ')[0] : lvl.title_ko.split(' ')[0]}
                            </Link>
                          ))}
                          {sec.levels.length > 3 && (
                            <span style={{ fontSize: '0.72rem', color: '#94a3b8', alignSelf: 'center' }}>
                              +{sec.levels.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footnote */}
                <div style={{
                  paddingTop: '16px',
                  borderTop: '1px solid #e2e8f0',
                  fontSize: '0.78rem',
                  color: '#64748b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <span>브라우저 내장 독립 샌드박스 런타임</span>
                  <span style={{ color: '#10b981', fontWeight: 700 }}>✓ Zero-Installation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
