'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { PracticeQuestion } from '@/lib/practiceTypes';
import VirtualKeyboard from '@/components/VirtualKeyboard';
import { Code2 } from 'lucide-react';

interface TypingStageProps {
  question: PracticeQuestion;
  onCodeChange: (fullCode: string) => void;
  onSubmit: () => void;
  isSuccess: boolean;
  isExecuting: boolean;
  isDebugging?: boolean;
  executingLineIndex?: number | null;
}

export default function TypingStage({
  question,
  onCodeChange,
  onSubmit,
  isSuccess,
  isExecuting,
  isDebugging = false,
  executingLineIndex = null,
}: TypingStageProps) {
  const targetCode = (question.targetCode || '').replace(/\r\n/g, '\n');

  // User's typed code text
  const [typedCode, setTypedCode] = useState<string>('');

  const containerRef = useRef<HTMLDivElement>(null);
  const hiddenInputRef = useRef<HTMLTextAreaElement>(null);

  // Reset when question changes
  useEffect(() => {
    setTypedCode('');
    onCodeChange('');
    setTimeout(() => {
      hiddenInputRef.current?.focus();
    }, 50);
  }, [question.id, question.targetCode, onCodeChange]);

  // Sync typed code upward
  useEffect(() => {
    onCodeChange(typedCode);
  }, [typedCode, onCodeChange]);

  // Focus input on click anywhere in editor
  const handleStageClick = () => {
    hiddenInputRef.current?.focus();
  };

  // Next expected character for virtual keyboard
  const nextChar = useMemo(() => {
    if (typedCode.length < targetCode.length) {
      const ch = targetCode[typedCode.length];
      if (ch === '\n') return 'Enter';
      if (ch === ' ') return 'Space';
      return ch;
    }
    return 'Enter';
  }, [typedCode, targetCode]);

  // Split targetCode and typedCode into lines for 2-layer rendering
  const targetLines = useMemo(() => targetCode.split('\n'), [targetCode]);
  const userLines = useMemo(() => typedCode.split('\n'), [typedCode]);
  const currentLineIdx = userLines.length - 1;

  // Handle typing input
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (isExecuting) return;

    if (e.key === 'Tab') {
      e.preventDefault();
      // Indentation support: check if next target chars are spaces
      const remainingTarget = targetCode.slice(typedCode.length);
      if (remainingTarget.startsWith('    ')) {
        setTypedCode((prev) => prev + '    ');
      } else if (remainingTarget.startsWith('  ')) {
        setTypedCode((prev) => prev + '  ');
      } else {
        setTypedCode((prev) => prev + '    ');
      }
      return;
    }

    if (e.key === 'Enter') {
      e.preventDefault();

      // 1. If completed or typed matches target: execute!
      if (typedCode.trim() === targetCode.trim() || typedCode.length >= targetCode.length) {
        onSubmit();
        return;
      }

      // 2. Single-line target (no newline in targetCode):
      // Enter runs the code if user typed anything. NEVER append '\n'!
      if (!targetCode.includes('\n')) {
        if (typedCode.trim().length > 0) {
          onSubmit();
        }
        return;
      }

      // 3. Multi-line target:
      // If the next expected character in targetCode is '\n', advance to next line!
      if (targetCode[typedCode.length] === '\n') {
        setTypedCode((prev) => prev + '\n');
        return;
      }

      // If user is on the last line of a multi-line target:
      // Pressing Enter runs the code
      if (currentLineIdx >= targetLines.length - 1) {
        if (typedCode.trim().length > 0) {
          onSubmit();
        }
        return;
      }

      // If user has reached or exceeded current intermediate line length:
      const currentTargetLine = targetLines[currentLineIdx] || '';
      if (userLines[currentLineIdx].length >= currentTargetLine.length) {
        setTypedCode((prev) => prev + '\n');
        return;
      }

      // If user pressed Enter prematurely in the middle of an intermediate line:
      // Do nothing to avoid breaking line alignment and destroying example code!
      return;
    }

    if (e.key === 'Backspace') {
      e.preventDefault();
      setTypedCode((prev) => prev.slice(0, -1));
      return;
    }

    // Normal printable character
    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      // Allow typing up to target length + 8 extra typo chars
      if (typedCode.length < targetCode.length + 8) {
        setTypedCode((prev) => prev + e.key);
      }
    }
  };

  return (
    <div
      ref={containerRef}
      onClick={handleStageClick}
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        background: '#090e1a',
        overflow: 'hidden',
        cursor: 'text',
        position: 'relative',
      }}
    >
      {/* Invisible input capturing keystrokes */}
      <textarea
        ref={hiddenInputRef}
        value=""
        onChange={() => {}}
        onKeyDown={handleKeyDown}
        autoFocus
        style={{
          position: 'absolute',
          opacity: 0,
          pointerEvents: 'none',
          top: 0,
          left: 0,
          width: '1px',
          height: '1px',
        }}
      />

      {/* ==================================================================
          UPPER AREA: Authentic IDE Editor Workspace
          (Distraction-free: Line Gutter + True 2-Layer Code Overlay)
          ================================================================== */}
      <div
        style={{
          flex: '1 1 auto',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          background: '#090e1a',
        }}
      >
        {/* Editor File Tab Header */}
        <div
          style={{
            height: '34px',
            background: '#0d1527',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 16px',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 14px',
              background: '#090e1a',
              borderRadius: '6px 6px 0 0',
              borderTop: isSuccess ? '2px solid #10b981' : '2px solid #38bdf8',
              fontSize: '0.78rem',
              color: '#f8fafc',
              fontWeight: 700,
              fontFamily: 'var(--font-mono)',
            }}
          >
            <Code2 size={13} color={isSuccess ? '#10b981' : '#38bdf8'} />
            <span>main.py</span>
            {isSuccess && (
              <span style={{ fontSize: '0.75rem', color: '#34d399', fontWeight: 800, marginLeft: '6px' }}>
                ✓ 성공
              </span>
            )}
          </div>
        </div>

        {/* IDE Code Area */}
        <div
          style={{
            flex: '1 1 auto',
            overflowY: 'auto',
            padding: '20px 0',
            fontFamily: 'var(--font-mono), monospace',
            fontSize: '1.25rem',
            lineHeight: 1.85,
            color: '#f8fafc',
          }}
        >
          {targetLines.map((targetLineText, lineIdx) => {
            const isThisLineExecuting = Boolean(
              isDebugging && executingLineIndex !== null && executingLineIndex !== undefined && executingLineIndex === lineIdx
            );
            const isAnyLineExecuting = Boolean(
              isDebugging && executingLineIndex !== null && executingLineIndex !== undefined
            );
            const isThisLineDimmed = Boolean(isAnyLineExecuting && !isThisLineExecuting);

            const isUserOnThisLine = currentLineIdx === lineIdx;
            const userLineText = userLines[lineIdx] !== undefined ? userLines[lineIdx] : null;

            return (
              <div
                key={lineIdx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: isThisLineExecuting
                    ? 'linear-gradient(90deg, rgba(56, 189, 248, 0.22) 0%, rgba(15, 23, 42, 0.95) 100%)'
                    : isThisLineDimmed
                    ? 'rgba(15, 23, 42, 0.35)'
                    : isUserOnThisLine && !isDebugging
                    ? 'rgba(255, 255, 255, 0.025)'
                    : 'transparent',
                  borderLeft: isThisLineExecuting
                    ? '3px solid #38bdf8'
                    : isUserOnThisLine && !isDebugging
                    ? '3px solid rgba(56, 189, 248, 0.4)'
                    : '3px solid transparent',
                  opacity: isThisLineDimmed ? 0.35 : 1,
                  transition: 'all 0.15s ease',
                  minHeight: '38px',
                }}
              >
                {/* Gutter: Line Number */}
                <div
                  style={{
                    width: '54px',
                    minWidth: '54px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    paddingRight: '14px',
                    userSelect: 'none',
                    borderRight: '1px solid rgba(255, 255, 255, 0.06)',
                    color: isThisLineExecuting ? '#38bdf8' : '#475569',
                    fontSize: '0.88rem',
                    fontWeight: isThisLineExecuting ? 900 : 600,
                    gap: '4px',
                  }}
                >
                  {isThisLineExecuting && (
                    <span style={{ color: '#38bdf8', fontSize: '0.78rem', animation: 'pulse 1s infinite' }}>▶</span>
                  )}
                  <span>{String(lineIdx + 1).padStart(2, '0')}</span>
                </div>

                {/* 2-Layer Code Surface */}
                <div
                  style={{
                    position: 'relative',
                    flex: 1,
                    padding: '0 20px',
                    fontFamily: 'inherit',
                    fontSize: 'inherit',
                    lineHeight: 'inherit',
                    letterSpacing: '0.5px',
                    display: 'flex',
                    alignItems: 'center',
                    whiteSpace: 'pre',
                  }}
                >
                  {/* ==========================================================
                      1겹 (바닥 레이어): 예제 코드 원본
                      - 항상 100% 온전히 유지되며 절대 사라지지 않는 고스트 텍스트
                      ========================================================== */}
                  <div
                    style={{
                      color: 'rgba(255, 255, 255, 0.32)',
                      userSelect: 'none',
                      whiteSpace: 'pre',
                      fontFamily: 'inherit',
                      fontSize: 'inherit',
                      lineHeight: 'inherit',
                      letterSpacing: 'inherit',
                    }}
                  >
                    {targetLineText || ' '}
                  </div>

                  {/* ==========================================================
                      덮어쓰인 1겹 (상단 레이어): 사용자 실시간 입력 오버레이
                      - 바닥 레이어 바로 위에 정확한 폰트와 위치로 겹쳐서 렌더링
                      ========================================================== */}
                  {userLineText !== null && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: '20px',
                        bottom: 0,
                        display: 'flex',
                        alignItems: 'center',
                        whiteSpace: 'pre',
                        pointerEvents: 'none',
                        fontFamily: 'inherit',
                        fontSize: 'inherit',
                        lineHeight: 'inherit',
                        letterSpacing: 'inherit',
                      }}
                    >
                      {/* 입력된 각 문자별 오버레이 */}
                      {userLineText.split('').map((userChar, colIdx) => {
                        const targetChar = targetLineText[colIdx];
                        const isMatch = userChar === targetChar;

                        return (
                          <span
                            key={colIdx}
                            style={{
                              display: 'inline-block',
                              color: isMatch ? '#34d399' : '#ef4444',
                              background: isMatch ? '#090e1a' : '#3b1820',
                              fontWeight: 800,
                              borderRadius: '2px',
                              boxShadow: !isMatch ? '0 0 6px rgba(239, 68, 68, 0.5)' : 'none',
                            }}
                          >
                            {userChar}
                          </span>
                        );
                      })}

                      {/* 커서 (Blinking Caret): 현재 입력 중인 라인에만 표시 */}
                      {isUserOnThisLine && !isDebugging && (
                        <span
                          style={{
                            display: 'inline-block',
                            width: '2.5px',
                            height: '1.25em',
                            background: '#38bdf8',
                            boxShadow: '0 0 8px #38bdf8, 0 0 2px #fff',
                            animation: 'pulse 1s infinite',
                            verticalAlign: 'middle',
                            marginLeft: userLineText.length === 0 ? '0px' : '-1px',
                          }}
                        />
                      )}

                      {/* 멀티라인 줄 끝 도달 시 줄바꿈(↵) 가이드 아이콘 */}
                      {isUserOnThisLine && lineIdx < targetLines.length - 1 && userLineText.length >= targetLineText.length && (
                        <span
                          style={{
                            color: 'rgba(56, 189, 248, 0.75)',
                            fontSize: '0.85em',
                            marginLeft: '4px',
                            userSelect: 'none',
                            fontWeight: 700,
                          }}
                        >
                          ↵
                        </span>
                      )}

                      {/* 모든 코드 입력 완료 시 Enter 실행 안내 */}
                      {isUserOnThisLine &&
                        lineIdx === targetLines.length - 1 &&
                        userLineText.length >= targetLineText.length && (
                          <span
                            style={{
                              color: '#34d399',
                              fontSize: '0.78em',
                              marginLeft: '8px',
                              userSelect: 'none',
                              fontWeight: 700,
                              opacity: 0.9,
                            }}
                          >
                            ↵ Enter로 실행
                          </span>
                        )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ==================================================================
          LOWER AREA: Compact, Responsively Scaled Virtual Keyboard
          (Tightly fitted to content: flex 0 0 auto, no wasted height)
          ================================================================== */}
      <div
        style={{
          flex: '0 0 auto',
          padding: '8px 20px 14px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#070b14',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div style={{ width: '100%', maxWidth: 'clamp(720px, 68vw, 980px)' }}>
          <VirtualKeyboard nextChar={nextChar} />
        </div>
      </div>
    </div>
  );
}
