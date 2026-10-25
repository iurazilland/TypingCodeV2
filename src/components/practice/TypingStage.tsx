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

  // Handle typing input
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
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
      // If code typing is complete or matches targetCode, Enter executes!
      if (typedCode.trim() === targetCode.trim() || typedCode.length >= targetCode.length) {
        onSubmit();
        return;
      }
      // If the next expected character in targetCode is newline '\n', advance line!
      if (targetCode[typedCode.length] === '\n') {
        setTypedCode((prev) => prev + '\n');
        return;
      }
      // Otherwise allow newline as typo or submit if close
      if (typedCode.length >= targetCode.length - 1) {
        onSubmit();
      } else {
        setTypedCode((prev) => prev + '\n');
      }
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

  // Compute multi-line metadata for the IDE layout
  const lineData = useMemo(() => {
    const rawLines = targetCode.split('\n');
    let charAcc = 0;
    return rawLines.map((lineText, idx) => {
      const start = charAcc;
      const end = charAcc + lineText.length;
      const hasNewline = idx < rawLines.length - 1;
      charAcc = end + (hasNewline ? 1 : 0);
      return {
        idx,
        lineText,
        start,
        end,
        hasNewline,
      };
    });
  }, [targetCode]);

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
          (Distraction-free: Line Gutter + 2-Layer Code Overlay)
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
              borderTop: '2px solid #38bdf8',
              fontSize: '0.78rem',
              color: '#f8fafc',
              fontWeight: 700,
              fontFamily: 'var(--font-mono)',
            }}
          >
            <Code2 size={13} color="#38bdf8" />
            <span>main.py</span>
          </div>
        </div>

        {/* IDE Code Area */}
        <div
          style={{
            flex: '1 1 auto',
            overflowY: 'auto',
            padding: '20px 0',
            fontFamily: 'var(--font-mono)',
            fontSize: '1.25rem',
            lineHeight: 1.85,
            color: '#f8fafc',
          }}
        >
          {lineData.map((line) => {
            const isThisLineExecuting = Boolean(
              isDebugging && executingLineIndex !== null && executingLineIndex !== undefined && executingLineIndex === line.idx
            );
            const isAnyLineExecuting = Boolean(
              isDebugging && executingLineIndex !== null && executingLineIndex !== undefined
            );
            const isThisLineDimmed = Boolean(isAnyLineExecuting && !isThisLineExecuting);

            // Is cursor on this line?
            const isCursorOnThisLine =
              typedCode.length >= line.start &&
              (line.hasNewline ? typedCode.length <= line.end : typedCode.length >= line.start);

            return (
              <div
                key={line.idx}
                style={{
                  display: 'flex',
                  alignItems: 'stretch',
                  background: isThisLineExecuting
                    ? 'linear-gradient(90deg, rgba(56, 189, 248, 0.22) 0%, rgba(15, 23, 42, 0.95) 100%)'
                    : isThisLineDimmed
                    ? 'rgba(15, 23, 42, 0.35)'
                    : isCursorOnThisLine && !isDebugging
                    ? 'rgba(255, 255, 255, 0.025)'
                    : 'transparent',
                  borderLeft: isThisLineExecuting
                    ? '3px solid #38bdf8'
                    : isCursorOnThisLine && !isDebugging
                    ? '3px solid rgba(56, 189, 248, 0.4)'
                    : '3px solid transparent',
                  opacity: isThisLineDimmed ? 0.35 : 1,
                  transition: 'all 0.15s ease',
                  minHeight: '34px',
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
                  <span>{String(line.idx + 1).padStart(2, '0')}</span>
                </div>

                {/* 2-Layer Code Line Surface */}
                <div
                  style={{
                    flex: 1,
                    padding: '0 20px',
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    whiteSpace: 'pre',
                    wordBreak: 'break-all',
                    letterSpacing: '0.5px',
                  }}
                >
                  {/* Render character by character on this line */}
                  {line.lineText.split('').map((targetChar, col) => {
                    const charIndex = line.start + col;
                    const isTyped = charIndex < typedCode.length;
                    const isCursor = charIndex === typedCode.length;
                    const userChar = isTyped ? typedCode[charIndex] : null;
                    const isCorrect = isTyped && userChar === targetChar;

                    return (
                      <span
                        key={col}
                        style={{
                          position: 'relative',
                          display: 'inline-block',
                          color: !isTyped
                            ? 'rgba(255, 255, 255, 0.28)' // Layer 1: Dimmed ghost text
                            : isCorrect
                            ? '#34d399' // Layer 2: Correct match
                            : '#ef4444', // Layer 2: Typo mismatch
                          background: isTyped && !isCorrect ? 'rgba(239, 68, 68, 0.25)' : 'transparent',
                          borderRadius: '2px',
                          fontWeight: isTyped ? 800 : 500,
                        }}
                      >
                        {/* Caret Blinking Cursor Bar */}
                        {isCursor && (
                          <span
                            style={{
                              position: 'absolute',
                              left: '-1px',
                              top: '12%',
                              bottom: '12%',
                              width: '2px',
                              background: '#38bdf8',
                              boxShadow: '0 0 8px #38bdf8',
                              animation: 'pulse 1s infinite',
                              zIndex: 10,
                            }}
                          />
                        )}
                        {/* The displayed character */}
                        {isTyped ? userChar : targetChar}
                      </span>
                    );
                  })}

                  {/* Cursor at the end of the line (waiting for Enter or end of code) */}
                  {typedCode.length === line.end && (
                    <span
                      style={{
                        position: 'relative',
                        display: 'inline-flex',
                        alignItems: 'center',
                        color: line.hasNewline ? 'rgba(56, 189, 248, 0.6)' : 'rgba(255, 255, 255, 0.3)',
                        fontSize: line.hasNewline ? '0.80em' : '1em',
                        marginLeft: '1px',
                        userSelect: 'none',
                      }}
                    >
                      {/* Caret */}
                      <span
                        style={{
                          position: 'absolute',
                          left: '-1px',
                          top: '12%',
                          bottom: '12%',
                          width: '2px',
                          background: '#38bdf8',
                          boxShadow: '0 0 8px #38bdf8',
                          animation: 'pulse 1s infinite',
                          zIndex: 10,
                        }}
                      />
                      {line.hasNewline ? '↵' : ''}
                    </span>
                  )}

                  {/* Extra typo characters typed beyond this line's length */}
                  {typedCode.length > line.end && !line.hasNewline &&
                    typedCode.slice(line.end).split('').map((extraChar, extraIdx) => (
                      <span
                        key={`extra-${extraIdx}`}
                        style={{
                          color: '#ef4444',
                          background: 'rgba(239, 68, 68, 0.3)',
                          borderRadius: '2px',
                          fontWeight: 800,
                          textDecoration: 'underline wavy #ef4444',
                        }}
                      >
                        {extraChar}
                      </span>
                    ))}
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
          padding: '6px 14px 10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#070b14',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div style={{ width: '100%', maxWidth: '780px' }}>
          <VirtualKeyboard nextChar={nextChar} />
        </div>
      </div>
    </div>
  );
}
