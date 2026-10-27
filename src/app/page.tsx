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
              ? 'Simply type. The code will follow.'
              : '그냥 입력하세요. 코드가 완성됩니다.'}
          </p>
        </section>

        {/* =================================================================
            2. THE PROBLEM & THE BRIDGE (Why TypingCode is Essential)
            ================================================================= */}
        <section id="why-typingcode" style={{ marginBottom: '110px' }}>
          
          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
            <div className="brilliant-badge" style={{ marginBottom: '14px' }}>
              Why TypingCode
            </div>
            <h2 style={{
              fontSize: 'clamp(1.9rem, 3.8vw, 2.5rem)',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.02em',
              marginBottom: '14px',
              wordBreak: 'keep-all',
            }}>
              {isEn 
                ? 'Why does learning to code always feel like hitting a wall?' 
                : '코딩, 왜 매번 중간에서 막히고 멈추게 될까요?'}
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: 1.6, wordBreak: 'keep-all', maxWidth: '640px', margin: '0 auto' }}>
              {isEn
                ? 'The problem was never your willpower. It was the way we were taught to learn code.'
                : '당신의 끈기나 재능 탓이 아닙니다. 지금까지 우리가 코딩을 배워온 방식에 결정적인 함정이 있었습니다.'}
            </p>
          </div>

          {/* 2 Problem Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            marginBottom: '32px',
          }}>
            {/* Problem Card 1: Thick Books & Boring Lectures */}
            <div style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '20px',
              padding: '32px',
              boxShadow: '0 4px 20px -4px rgba(15, 23, 42, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <div>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: '#fef2f2',
                  border: '1px solid #fecaca',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                  marginBottom: '18px',
                }}>
                  📖
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
                  PROBLEM 01
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px', wordBreak: 'keep-all' }}>
                  {isEn 
                    ? '800-Page Textbooks & Endless Passive Lectures' 
                    : '두꺼운 문법책과 끝없는 동영상 강의의 늪'}
                </h3>
                <p style={{ fontSize: '0.94rem', color: '#64748b', lineHeight: 1.65, wordBreak: 'keep-all', margin: 0 }}>
                  {isEn
                    ? 'You watch hours of tutorials and read hundreds of pages, yet the moment you face a blank IDE, you freeze. Coding is a physical motor skill—you cannot master it merely by watching someone else code.'
                    : '수백 페이지의 문법 규칙을 읽고 수십 시간짜리 인강을 볼 땐 다 이해한 것 같지만, 막상 빈 화면 앞에 서면 타이핑 한 줄 못 치고 멈춥니다. 코딩은 눈으로 외우는 지식이 아니라, 손으로 익히는 기술입니다.'}
                </p>
              </div>

              <div style={{
                marginTop: '24px',
                paddingTop: '16px',
                borderTop: '1px solid #f1f5f9',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.82rem',
                color: '#ef4444',
                fontWeight: 600,
              }}>
                <span>✕</span>
                <span>눈으로만 보는 수동적 학습의 한계</span>
              </div>
            </div>

            {/* Problem Card 2: The Block Coding Chasm */}
            <div style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '20px',
              padding: '32px',
              boxShadow: '0 4px 20px -4px rgba(15, 23, 42, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <div>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: '#fffbeb',
                  border: '1px solid #fde68a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                  marginBottom: '18px',
                }}>
                  🧩
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
                  PROBLEM 02
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px', wordBreak: 'keep-all' }}>
                  {isEn 
                    ? 'The Huge Chasm Between Block Coding & Real Syntax' 
                    : '블록 코딩은 쉬웠는데, 실제 코딩은 왜 이리 어려울까?'}
                </h3>
                <p style={{ fontSize: '0.94rem', color: '#64748b', lineHeight: 1.65, wordBreak: 'keep-all', margin: 0 }}>
                  {isEn
                    ? 'Dragging puzzle blocks is intuitive, but transitioning to real Python, C, or JavaScript feels like falling off a cliff. Indentation, semicolons, brackets, and syntax errors instantly overwhelm beginners.'
                    : '마우스로 맞추는 블록 코딩(스크래치 등)은 장난감처럼 쉬웠지만, 실제 현업에서 쓰는 파이썬이나 C언어는 완전히 다른 세상입니다. 괄호 하나, 오타 하나에 멈춰버리는 텍스트 코딩의 거대한 절벽을 마주하게 됩니다.'}
                </p>
              </div>

              <div style={{
                marginTop: '24px',
                paddingTop: '16px',
                borderTop: '1px solid #f1f5f9',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.82rem',
                color: '#f59e0b',
                fontWeight: 600,
              }}>
                <span>✕</span>
                <span>장난감 블록과 실제 텍스트 코드 사이의 거대한 단절</span>
              </div>
            </div>
          </div>

          {/* The Solution Bridge Banner with Generated Infographic Image */}
          <div style={{
            background: '#0e121a',
            border: '1.5px solid rgba(6, 182, 212, 0.35)',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.25), 0 0 40px rgba(6, 182, 212, 0.1)',
            position: 'relative',
          }}>
            {/* Visual Image Header */}
            <div style={{
              width: '100%',
              maxHeight: '440px',
              overflow: 'hidden',
              position: 'relative',
              background: '#080c14',
            }}>
              <img 
                src="/images/block_to_code_bridge.jpg" 
                alt="Transition from block coding to real code with TypingCode"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '80px',
                background: 'linear-gradient(to top, #0e121a, transparent)',
                pointerEvents: 'none',
              }} />
            </div>

            {/* Editorial Content Below Image */}
            <div style={{ padding: '36px 40px 44px', color: '#f8fafc' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: '8px',
                background: 'rgba(6, 182, 212, 0.15)',
                border: '1px solid rgba(6, 182, 212, 0.35)',
                color: '#22d3ee',
                fontSize: '0.78rem',
                fontWeight: 800,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}>
                THE TYPINGCODE SOLUTION
              </div>

              <h3 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
                fontWeight: 800,
                lineHeight: 1.3,
                marginBottom: '16px',
                color: '#ffffff',
                wordBreak: 'keep-all',
              }}>
                {isEn
                  ? 'The Missing Bridge: From Visual Intuition to Real Text Syntax'
                  : '블록 코딩의 쉬운 재미와 실전 텍스트 코딩을 잇는 가장 확실한 징검다리'}
              </h3>

              <p style={{
                fontSize: '1.02rem',
                color: '#94a3b8',
                lineHeight: 1.7,
                maxWidth: '780px',
                marginBottom: '32px',
                wordBreak: 'keep-all',
              }}>
                {isEn
                  ? 'TypingCode does not make you memorize abstract theory. By typing authentic code line by line in your browser, your fingers naturally build muscle memory. Zero setup, real feedback—the fastest way to master real code.'
                  : 'TypingCode는 블록 코딩처럼 부담 없이 시작하지만, 다루는 대상은 현업에서 쓰이는 100% 진짜 텍스트 코드입니다. 복잡한 환경 설정이나 IDE 설치 없이, 브라우저에서 화면을 보고 타자 치듯 따라 치기만 하면 손가락이 코드를 먼저 기억합니다.'}
              </p>

              {/* 3 Core Value Pillars */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '20px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(6, 182, 212, 0.15)',
                    color: '#22d3ee',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    flexShrink: 0,
                  }}>
                    ⌨️
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                      손가락 근육 기억 (Muscle Memory)
                    </h4>
                    <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                      머리로 외우려 애쓰지 마세요. 반복 타이핑을 통해 괄호, 들여쓰기, 예약어가 손끝에 자연스럽게 각인됩니다.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: '#34d399',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    flexShrink: 0,
                  }}>
                    ⚡
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                      설치 0초, 즉시 실행 런타임
                    </h4>
                    <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                      파이썬, C, 러스트 등 13개 언어 컴파일러가 브라우저에 내장되어 별도 설치 없이 1초 만에 실행 결과를 확인합니다.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(139, 92, 246, 0.15)',
                    color: '#c084fc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    flexShrink: 0,
                  }}>
                    🎯
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                      실전 13개 언어 단계별 로드맵
                    </h4>
                    <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                      기초 키워드부터 실제 현업 알고리즘·라이브러리 활용까지 20단계 체계적 스캐폴딩으로 실력이 탄탄해집니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
