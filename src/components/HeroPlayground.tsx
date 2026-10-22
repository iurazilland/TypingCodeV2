'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Play, RotateCcw, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { SupportedLanguage, ExecutionResult } from '@/lib/types';
import { executeCode } from '@/lib/runner';

interface PlaygroundSnippet {
  language: SupportedLanguage;
  emoji: string;
  name: string;
  badge: string;
  badgeBg: string;
  badgeColor: string;
  code: string;
  tip: string;
  link: string;
}

const SNIPPETS: PlaygroundSnippet[] = [
  {
    language: 'python',
    emoji: '🐍',
    name: '파이썬',
    badge: '가장 쉬워요!',
    badgeBg: 'rgba(59, 130, 246, 0.2)',
    badgeColor: '#60a5fa',
    code: 'print("안녕! 나는 미래의 멋진 프로그래머야 ✨")',
    tip: '💡 print("...") 안에 쓰고 싶은 말을 넣으면 컴퓨터가 그대로 말해줘요!',
    link: '/practice/python/1',
  },
  {
    language: 'web',
    emoji: '🌐',
    name: '웹 만들기',
    badge: '눈앞에 짠!',
    badgeBg: 'rgba(249, 115, 22, 0.2)',
    badgeColor: '#fb923c',
    code: '<button style="background: #10b981; color: white; border: none; padding: 14px 24px; border-radius: 12px; font-size: 16px; font-weight: bold; cursor: pointer;">\n  🎈 나만의 마법 버튼 클릭!\n</button>',
    tip: '💡 HTML 코드를 치면 내가 만든 알록달록한 버튼이 진짜로 화면에 나타나요!',
    link: '/practice/web/1',
  },
  {
    language: 'c',
    emoji: '⚡',
    name: 'C언어',
    badge: '로봇 두뇌!',
    badgeBg: 'rgba(6, 182, 212, 0.2)',
    badgeColor: '#22d3ee',
    code: '#include <stdio.h>\n\nint main() {\n    printf("로봇 출동 준비 완료! 🤖\\n");\n    return 0;\n}',
    tip: '💡 C언어는 게임과 로봇을 움직이는 진짜 컴퓨터의 핵심 언어예요!',
    link: '/practice/c/1',
  },
];

export default function HeroPlayground() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const current = SNIPPETS[activeIdx];

  const [typedText, setTypedText] = useState<string>('');
  const [execResult, setExecResult] = useState<ExecutionResult | null>(null);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSelectSnippet = (idx: number) => {
    setActiveIdx(idx);
    setTypedText('');
    setExecResult(null);
  };

  const handleRun = async () => {
    setIsRunning(true);
    const codeToRun = typedText.length > 0 ? typedText : current.code;
    const res = await executeCode(current.language, codeToRun);
    setExecResult(res);
    setIsRunning(false);
  };

  const isCompleted = typedText === current.code;
  const progressPercent = Math.min(100, Math.round((typedText.length / current.code.length) * 100));

  return (
    <div style={{
      width: '100%',
      background: 'rgba(19, 31, 61, 0.95)',
      border: '2px solid rgba(255, 255, 255, 0.14)',
      borderRadius: '28px',
      boxShadow: '0 20px 50px rgba(0, 0, 0, 0.45)',
      overflow: 'hidden',
    }}>
      {/* Top Bar: Playful Large Tabs */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 20px',
        background: 'rgba(11, 19, 41, 0.98)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        flexWrap: 'wrap',
        gap: '12px',
      }}>
        {/* Language Tabs */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {SNIPPETS.map((snippet, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={snippet.language}
                onClick={() => handleSelectSnippet(idx)}
                style={{
                  padding: '9px 18px',
                  borderRadius: '14px',
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: isActive ? snippet.badgeBg : 'rgba(255, 255, 255, 0.04)',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  border: isActive ? `1.5px solid ${snippet.badgeColor}` : '1.5px solid transparent',
                  boxShadow: isActive ? `0 4px 14px ${snippet.badgeColor}35` : 'none',
                  transition: 'all 0.15s ease',
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>{snippet.emoji}</span>
                <span>{snippet.name}</span>
              </button>
            );
          })}
        </div>

        {/* Friendly Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{
            fontSize: '0.8rem',
            fontWeight: 800,
            padding: '4px 12px',
            borderRadius: '16px',
            background: current.badgeBg,
            color: current.badgeColor,
            border: `1px solid ${current.badgeColor}60`,
          }}>
            {current.badge}
          </span>
        </div>
      </div>

      {/* Editor & Output Split Body */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
        background: '#0d162a',
      }}>
        {/* Left: Playful Typing Box */}
        <div
          onClick={() => textareaRef.current?.focus()}
          style={{
            padding: '24px',
            minHeight: '260px',
            position: 'relative',
            cursor: 'text',
            borderRight: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* Hidden input */}
          <textarea
            ref={textareaRef}
            value={typedText}
            onChange={(e) => {
              const val = e.target.value;
              if (val.length <= current.code.length) {
                setTypedText(val);
              }
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: 0,
              cursor: 'text',
              resize: 'none',
              zIndex: 10,
            }}
            spellCheck="false"
            autoCapitalize="none"
          />

          {/* Code Character Rendering in Big, Clear Font */}
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '1.08rem',
            lineHeight: 1.8,
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-all',
            userSelect: 'none',
            color: '#cbd5e1',
          }}>
            {current.code.split('').map((char, i) => {
              const isTyped = i < typedText.length;
              const isCurrent = i === typedText.length;
              const isCorrect = typedText[i] === char;

              let color = '#475569';
              if (isTyped) {
                color = isCorrect ? '#34d399' : '#f43f5e';
              }

              return (
                <span
                  key={i}
                  style={{
                    color,
                    borderBottom: isCurrent ? '3px solid #10b981' : 'none',
                    backgroundColor: isTyped && !isCorrect ? 'rgba(244, 63, 94, 0.25)' : 'transparent',
                    fontWeight: isTyped && isCorrect ? 700 : 400,
                  }}
                >
                  {char}
                </span>
              );
            })}
          </div>

          {/* Typing helper & progress */}
          <div style={{
            marginTop: '20px',
            paddingTop: '14px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <div style={{ fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                padding: '4px 12px',
                borderRadius: '10px',
                background: isCompleted ? 'rgba(16, 185, 129, 0.3)' : 'rgba(59, 130, 246, 0.25)',
                color: isCompleted ? '#34d399' : '#60a5fa',
                fontWeight: 800,
                border: isCompleted ? '1px solid #10b981' : '1px solid rgba(59, 130, 246, 0.4)',
              }}>
                {isCompleted ? '🎉 100% 완성!' : `따라 치기: ${progressPercent}%`}
              </span>
              <span style={{ color: isCompleted ? '#34d399' : '#94a3b8', fontSize: '0.85rem', fontWeight: isCompleted ? 700 : 500 }}>
                {isCompleted ? '👉 이제 오른쪽 초록색 [▶ 실행해보기]를 눌러보세요!' : '화면의 코드를 키보드로 톡톡 따라 쳐보세요!'}
              </span>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setTypedText('');
                setExecResult(null);
                textareaRef.current?.focus();
              }}
              style={{
                fontSize: '0.82rem',
                color: '#94a3b8',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '4px 8px',
                borderRadius: '6px',
                background: 'rgba(255, 255, 255, 0.05)',
              }}
            >
              <RotateCcw size={13} /> 처음부터
            </button>
          </div>
        </div>

        {/* Right: Friendly Output Display */}
        <div style={{
          padding: '24px',
          minHeight: '260px',
          background: 'rgba(11, 19, 41, 0.85)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.2rem' }}>📺</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#e2e8f0' }}>
                  화면에 이렇게 나타나요!
                </span>
              </div>

              {/* Big Playful Run Button */}
              <button
                onClick={handleRun}
                disabled={isRunning}
                className="tactile-btn tactile-btn-primary"
                style={{
                  padding: '8px 20px',
                  fontSize: '0.9rem',
                }}
              >
                <Play size={15} fill="#ffffff" />
                <span>{isRunning ? '컴퓨터 생각 중...' : '▶ 바로 실행해보기!'}</span>
              </button>
            </div>

            {/* Display Output */}
            {current.language === 'web' ? (
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '2px solid rgba(255, 255, 255, 0.1)',
                background: '#131f3d',
                minHeight: '130px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <iframe
                  title="Web DOM Live View"
                  srcDoc={typedText || current.code}
                  sandbox="allow-scripts"
                  style={{ width: '100%', height: '130px', border: 'none' }}
                />
              </div>
            ) : (
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '1rem',
                color: '#f8fafc',
                background: '#070b16',
                padding: '20px',
                borderRadius: '16px',
                border: '2px solid rgba(255, 255, 255, 0.08)',
                minHeight: '130px',
                lineHeight: 1.6,
                whiteSpace: 'pre-wrap',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
                {isRunning && (
                  <div style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                    <span>⏳</span>
                    <span>컴퓨터가 코드를 열심히 읽고 있어요...</span>
                  </div>
                )}
                {!isRunning && !execResult && (
                  <div style={{ color: '#64748b', textAlign: 'center', fontSize: '0.92rem' }}>
                    초록색 <strong style={{ color: '#34d399' }}>[▶ 바로 실행해보기!]</strong> 버튼을 누르면<br />
                    컴퓨터가 실행한 결과가 여기에 짠! 하고 나타나요.
                  </div>
                )}
                {!isRunning && execResult && (
                  <div>
                    {execResult.stdout && (
                      <div style={{ color: '#38bdf8', fontWeight: 700, fontSize: '1.05rem' }}>{execResult.stdout}</div>
                    )}
                    {execResult.stderr && (
                      <div style={{ color: '#fb7185', marginTop: '6px' }}>{execResult.stderr}</div>
                    )}
                    {execResult.exitCode === 0 && (
                      <div style={{ marginTop: '10px', fontSize: '0.85rem', color: '#10b981', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <CheckCircle2 size={16} /> 짝짝짝! 성공적으로 실행되었어요 🎉
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Kid-Friendly Hint Bubble */}
          <div style={{
            marginTop: '16px',
            padding: '12px 16px',
            borderRadius: '14px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            fontSize: '0.88rem',
            color: '#cbd5e1',
            lineHeight: 1.5,
          }}>
            {current.tip}
          </div>
        </div>
      </div>
    </div>
  );
}
