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

  // User's typed code text and cursor position
  const [typedCode, setTypedCode] = useState<string>('');
  const [cursorIndex, setCursorIndex] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const hiddenInputRef = useRef<HTMLTextAreaElement>(null);

  // Reset when question changes
  useEffect(() => {
    setTypedCode('');
    setCursorIndex(0);
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

  // Cursor line and column calculation
  const { cursorLine, cursorCol } = useMemo(() => {
    const safeIndex = Math.max(0, Math.min(cursorIndex, typedCode.length));
    const beforeCursor = typedCode.slice(0, safeIndex);
    const lines = beforeCursor.split('\n');
    const line = lines.length - 1;
    const col = lines[lines.length - 1].length;
    return { cursorLine: line, cursorCol: col };
  }, [typedCode, cursorIndex]);

  // Helper: Convert (line, col) to absolute index in typedCode
  const getIndexFromLineAndCol = (targetLine: number, targetCol: number): number => {
    const lines = typedCode.split('\n');
    const safeLine = Math.max(0, Math.min(targetLine, lines.length - 1));
    let idx = 0;
    for (let i = 0; i < safeLine; i++) {
      idx += lines[i].length + 1; // +1 for newline '\n'
    }
    const lineLen = lines[safeLine] ? lines[safeLine].length : 0;
    const safeCol = Math.max(0, Math.min(targetCol, lineLen));
    return idx + safeCol;
  };

  // Next expected character for virtual keyboard (based on current cursor position)
  const nextChar = useMemo(() => {
    if (cursorIndex < targetCode.length) {
      const ch = targetCode[cursorIndex];
      if (ch === '\n') return 'Enter';
      if (ch === ' ') return 'Space';
      return ch;
    }
    return '';
  }, [cursorIndex, targetCode]);

  // Split targetCode and typedCode into lines for 2-layer rendering (supporting free multi-line typing)
  const targetLines = useMemo(() => targetCode.split('\n'), [targetCode]);
  const userLines = useMemo(() => typedCode.split('\n'), [typedCode]);
  const maxLineCount = Math.max(targetLines.length, userLines.length);
  const lineIndices = useMemo(() => Array.from({ length: maxLineCount }, (_, i) => i), [maxLineCount]);

  const activeLineRef = useRef<HTMLDivElement>(null);

  // Auto-scroll editor container to keep active typing line in view
  useEffect(() => {
    activeLineRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [cursorLine]);

  // Handle typing input and keyboard cursor navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (isExecuting) return;

    // Arrow Left
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setCursorIndex((prev) => Math.max(0, prev - 1));
      return;
    }

    // Arrow Right
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      setCursorIndex((prev) => Math.min(typedCode.length, prev + 1));
      return;
    }

    // Arrow Up
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cursorLine > 0) {
        setCursorIndex(getIndexFromLineAndCol(cursorLine - 1, cursorCol));
      } else {
        setCursorIndex(0);
      }
      return;
    }

    // Arrow Down
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const lines = typedCode.split('\n');
      if (cursorLine < lines.length - 1) {
        setCursorIndex(getIndexFromLineAndCol(cursorLine + 1, cursorCol));
      } else {
        setCursorIndex(typedCode.length);
      }
      return;
    }

    // Home
    if (e.key === 'Home') {
      e.preventDefault();
      setCursorIndex(getIndexFromLineAndCol(cursorLine, 0));
      return;
    }

    // End
    if (e.key === 'End') {
      e.preventDefault();
      const lines = typedCode.split('\n');
      const currentLineLen = lines[cursorLine] ? lines[cursorLine].length : 0;
      setCursorIndex(getIndexFromLineAndCol(cursorLine, currentLineLen));
      return;
    }

    // Tab (4 spaces indentation at cursor)
    if (e.key === 'Tab') {
      e.preventDefault();
      setTypedCode((prev) => {
        const safeIdx = Math.max(0, Math.min(cursorIndex, prev.length));
        return prev.slice(0, safeIdx) + '    ' + prev.slice(safeIdx);
      });
      setCursorIndex((prev) => prev + 4);
      return;
    }

    // Enter: newline insertion at cursor (NOT code execution)
    if (e.key === 'Enter') {
      e.preventDefault();
      setTypedCode((prev) => {
        const safeIdx = Math.max(0, Math.min(cursorIndex, prev.length));
        return prev.slice(0, safeIdx) + '\n' + prev.slice(safeIdx);
      });
      setCursorIndex((prev) => prev + 1);
      return;
    }

    // Backspace: delete char before cursor
    if (e.key === 'Backspace') {
      e.preventDefault();
      if (cursorIndex > 0) {
        setTypedCode((prev) => {
          const safeIdx = Math.max(0, Math.min(cursorIndex, prev.length));
          return prev.slice(0, safeIdx - 1) + prev.slice(safeIdx);
        });
        setCursorIndex((prev) => Math.max(0, prev - 1));
      }
      return;
    }

    // Delete: delete char after cursor
    if (e.key === 'Delete') {
      e.preventDefault();
      if (cursorIndex < typedCode.length) {
        setTypedCode((prev) => {
          const safeIdx = Math.max(0, Math.min(cursorIndex, prev.length));
          return prev.slice(0, safeIdx) + prev.slice(safeIdx + 1);
        });
      }
      return;
    }

    // Normal printable character: insert at cursor
    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      setTypedCode((prev) => {
        const safeIdx = Math.max(0, Math.min(cursorIndex, prev.length));
        return prev.slice(0, safeIdx) + e.key + prev.slice(safeIdx);
      });
      setCursorIndex((prev) => prev + 1);
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
        onPaste={(e) => {
          e.preventDefault();
          const text = e.clipboardData.getData('text');
          if (text) {
            setTypedCode((prev) => {
              const safeIdx = Math.max(0, Math.min(cursorIndex, prev.length));
              return prev.slice(0, safeIdx) + text + prev.slice(safeIdx);
            });
            setCursorIndex((prev) => prev + text.length);
          }
        }}
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
          {lineIndices.map((lineIdx) => {
            const targetLineText = targetLines[lineIdx] || '';
            const userLineText = userLines[lineIdx] !== undefined ? userLines[lineIdx] : null;

            const isThisLineExecuting = Boolean(
              isDebugging && executingLineIndex !== null && executingLineIndex !== undefined && executingLineIndex === lineIdx
            );
            const isAnyLineExecuting = Boolean(
              isDebugging && executingLineIndex !== null && executingLineIndex !== undefined
            );
            const isThisLineDimmed = Boolean(isAnyLineExecuting && !isThisLineExecuting);

            const isCursorOnThisLine = cursorLine === lineIdx && !isDebugging;

            return (
              <div
                key={lineIdx}
                ref={isCursorOnThisLine ? activeLineRef : null}
                onClick={(e) => {
                  e.stopPropagation();
                  const maxCol = (userLines[lineIdx] || '').length;
                  setCursorIndex(getIndexFromLineAndCol(lineIdx, maxCol));
                  hiddenInputRef.current?.focus();
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: isThisLineExecuting
                    ? 'linear-gradient(90deg, rgba(56, 189, 248, 0.22) 0%, rgba(15, 23, 42, 0.95) 100%)'
                    : isThisLineDimmed
                    ? 'rgba(15, 23, 42, 0.35)'
                    : isCursorOnThisLine
                    ? 'rgba(255, 255, 255, 0.025)'
                    : 'transparent',
                  borderLeft: isThisLineExecuting
                    ? '3px solid #38bdf8'
                    : isCursorOnThisLine
                    ? '3px solid rgba(56, 189, 248, 0.4)'
                    : '3px solid transparent',
                  opacity: isThisLineDimmed ? 0.35 : 1,
                  transition: 'all 0.15s ease',
                  minHeight: '38px',
                  cursor: 'text',
                }}
              >
                {/* Gutter: Line Number (Clicking sets cursor to beginning of line) */}
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setCursorIndex(getIndexFromLineAndCol(lineIdx, 0));
                    hiddenInputRef.current?.focus();
                  }}
                  title={`줄 ${lineIdx + 1}로 이동`}
                  style={{
                    width: '54px',
                    minWidth: '54px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    paddingRight: '14px',
                    userSelect: 'none',
                    borderRight: '1px solid rgba(255, 255, 255, 0.06)',
                    color: isThisLineExecuting ? '#38bdf8' : isCursorOnThisLine ? '#cbd5e1' : '#475569',
                    fontSize: '0.88rem',
                    fontWeight: isThisLineExecuting ? 900 : isCursorOnThisLine ? 800 : 600,
                    gap: '4px',
                    cursor: 'pointer',
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
                    onClick={(e) => {
                      e.stopPropagation();
                      const maxCol = (userLines[lineIdx] || '').length;
                      setCursorIndex(getIndexFromLineAndCol(lineIdx, maxCol));
                      hiddenInputRef.current?.focus();
                    }}
                    style={{
                      color: 'rgba(255, 255, 255, 0.32)',
                      userSelect: 'none',
                      whiteSpace: 'pre',
                      fontFamily: 'inherit',
                      fontSize: 'inherit',
                      lineHeight: 'inherit',
                      letterSpacing: 'inherit',
                      cursor: 'text',
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
                        fontFamily: 'inherit',
                        fontSize: 'inherit',
                        lineHeight: 'inherit',
                        letterSpacing: 'inherit',
                        userSelect: 'none',
                      }}
                    >
                      {/* 입력된 각 문자별 오버레이 및 마우스 클릭 커서 이동 지원 */}
                      {userLineText.split('').map((userChar, colIdx) => {
                        const hasTargetChar = colIdx < targetLineText.length;
                        const targetChar = targetLineText[colIdx];
                        const isMatch = hasTargetChar && userChar === targetChar;
                        const isCursorHere = isCursorOnThisLine && cursorCol === colIdx;

                        return (
                          <React.Fragment key={colIdx}>
                            {/* 커서 바 (Blinking Caret): 현재 컬럼 위치에 표시 */}
                            {isCursorHere && (
                              <span
                                style={{
                                  display: 'inline-block',
                                  width: '2.5px',
                                  height: '1.25em',
                                  background: '#38bdf8',
                                  boxShadow: '0 0 8px #38bdf8, 0 0 2px #fff',
                                  animation: 'pulse 1s infinite',
                                  verticalAlign: 'middle',
                                  margin: '0 -1.25px',
                                  position: 'relative',
                                  zIndex: 10,
                                }}
                              />
                            )}
                            <span
                              onClick={(e) => {
                                e.stopPropagation();
                                setCursorIndex(getIndexFromLineAndCol(lineIdx, colIdx));
                                hiddenInputRef.current?.focus();
                              }}
                              style={{
                                display: 'inline-block',
                                color: isMatch ? '#34d399' : hasTargetChar ? '#ef4444' : '#f8fafc',
                                background: isMatch ? '#090e1a' : hasTargetChar ? '#3b1820' : 'transparent',
                                fontWeight: hasTargetChar ? 800 : 600,
                                borderRadius: '2px',
                                boxShadow: hasTargetChar && !isMatch ? '0 0 6px rgba(239, 68, 68, 0.5)' : 'none',
                                cursor: 'text',
                              }}
                            >
                              {userChar}
                            </span>
                          </React.Fragment>
                        );
                      })}

                      {/* 줄 끝 커서 (Blinking Caret) */}
                      {isCursorOnThisLine && cursorCol >= userLineText.length && (
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
                            position: 'relative',
                            zIndex: 10,
                          }}
                        />
                      )}

                      {/* 멀티라인 줄 끝 도달 시 줄바꿈(↵) 가이드 아이콘 */}
                      {isCursorOnThisLine && lineIdx < targetLines.length - 1 && userLineText.length >= targetLineText.length && (
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
