'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Terminal, 
  Code2, 
  Sparkles,
  ChevronRight,
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
              ? 'Just type along. Before you know it, you’re coding.'
              : '일단 따라 치다 보면, 어느새 내 코드가 됩니다.'}
          </p>
        </section>

        {/* =================================================================
            2. NOVEL CURRICULUM COMMAND DECK (Second Screen)
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
