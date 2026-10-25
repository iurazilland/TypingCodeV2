'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { PracticeQuestion } from '@/lib/practiceTypes';
import VirtualKeyboard from '@/components/VirtualKeyboard';
import { Sparkles, CheckCircle2, AlertCircle, Keyboard, Play, RotateCcw } from 'lucide-react';

interface TypingStageProps {
  question: PracticeQuestion;
  onCodeChange: (fullCode: string) => void;
  onSubmit: () => void;
  isSuccess: boolean;
  isExecuting: boolean;
}

export default function TypingStage({
  question,
  onCodeChange,
  onSubmit,
  isSuccess,
  isExecuting,
}: TypingStageProps) {
  const targetCode = question.targetCode || '';
  const blankToken = question.blankToken;

  // Split targetCode into prefix, blankTarget, suffix
  const { prefix, blankTarget, suffix } = useMemo(() => {
    if (!blankToken || !targetCode.includes(blankToken)) {
      return {
        prefix: '',
        blankTarget: targetCode,
        suffix: '',
      };
    }
    const idx = targetCode.indexOf(blankToken);
    return {
      prefix: targetCode.slice(0, idx),
      blankTarget: blankToken,
      suffix: targetCode.slice(idx + blankToken.length),
    };
  }, [targetCode, blankToken]);

  const [typedBlank, setTypedBlank] = useState<string>('');
  const [totalKeyStrokes, setTotalKeyStrokes] = useState<number>(0);
  const [typoCount, setTypoCount] = useState<number>(0);
  const [startTime, setStartTime] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const hiddenInputRef = useRef<HTMLInputElement>(null);

  // Reset when question changes
  useEffect(() => {
    setTypedBlank('');
    setTotalKeyStrokes(0);
    setTypoCount(0);
    setStartTime(null);
    onCodeChange(prefix + suffix);
    setTimeout(() => {
      hiddenInputRef.current?.focus();
    }, 50);
  }, [question.id, prefix, suffix]);

  // Keep full code synced upwards
  useEffect(() => {
    onCodeChange(prefix + typedBlank + suffix);
  }, [typedBlank, prefix, suffix, onCodeChange]);

  // Focus hidden input on click anywhere in stage
  const handleStageClick = () => {
    hiddenInputRef.current?.focus();
  };

  // Compute next expected character for VirtualKeyboard
  const nextChar = useMemo(() => {
    if (typedBlank.length < blankTarget.length) {
      return blankTarget[typedBlank.length];
    }
    return 'Enter';
  }, [typedBlank, blankTarget]);

  // Handle typing input
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit();
      return;
    }

    if (e.key === 'Backspace') {
      e.preventDefault();
      setTypedBlank((prev) => prev.slice(0, -1));
      return;
    }

    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      if (!startTime) {
        setStartTime(Date.now());
      }
      setTotalKeyStrokes((prev) => prev + 1);

      const expectedChar = blankTarget[typedBlank.length];
      if (e.key !== expectedChar) {
        setTypoCount((prev) => prev + 1);
      }

      // Max input length is blankTarget length + 4 (to allow seeing typos)
      if (typedBlank.length < blankTarget.length + 4) {
        setTypedBlank((prev) => prev + e.key);
      }
    }
  };

  // Accuracy calculation
  const accuracy = useMemo(() => {
    if (totalKeyStrokes === 0) return 100;
    const correct = Math.max(0, totalKeyStrokes - typoCount);
    return Math.round((correct / totalKeyStrokes) * 100);
  }, [totalKeyStrokes, typoCount]);

  const isCompleted = typedBlank === blankTarget;

  return (
    <div
      ref={containerRef}
      onClick={handleStageClick}
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        background: 'linear-gradient(180deg, #090e1a 0%, #0d1527 100%)',
        overflow: 'hidden',
        cursor: 'text',
        position: 'relative',
      }}
    >
      {/* Invisible input capturing keystrokes */}
      <input
        ref={hiddenInputRef}
        type="text"
        value={typedBlank}
        onChange={() => {}}
        onKeyDown={handleKeyDown}
        autoFocus
        style={{
          position: 'absolute',
          opacity: 0,
          pointerEvents: 'none',
          top: 0,
          left: 0,
        }}
      />

      {/* ==================================================================
          UPPER HALF: Question Mission Card & Fill-in-the-Blank Code Editor
          ================================================================== */}
      <div
        style={{
          flex: '1 1 54%',
          padding: '24px 32px 16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          background: 'radial-gradient(ellipse at top, rgba(56, 189, 248, 0.05) 0%, transparent 70%)',
        }}
      >
        {/* Top Info Bar */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  background: 'rgba(56, 189, 248, 0.15)',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  color: '#38bdf8',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  letterSpacing: '0.5px',
                }}
              >
                <Keyboard size={14} />
                <span>타이핑 모드 (Step {question.step})</span>
              </span>
              <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#f8fafc' }}>
                {question.title}
              </span>
            </div>

            {/* Quick Accuracy & Typo Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>정확도</span>
                <span style={{ fontWeight: 800, color: accuracy >= 90 ? '#34d399' : accuracy >= 70 ? '#fbbf24' : '#f43f5e' }}>
                  {accuracy}%
                </span>
              </div>
              {typoCount > 0 && (
                <div style={{ fontSize: '0.75rem', color: '#f43f5e', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <AlertCircle size={13} />
                  <span>오타 {typoCount}회</span>
                </div>
              )}
            </div>
          </div>

          <p style={{ margin: '0 0 16px 0', fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.5 }}>
            {question.prompt_ko}
          </p>
        </div>

        {/* Center Stage: Interactive Blank-Fill Code Line */}
        <div
          style={{
            margin: 'auto 0',
            padding: '24px 28px',
            background: 'rgba(15, 23, 42, 0.85)',
            border: isCompleted
              ? '2px solid rgba(16, 185, 129, 0.6)'
              : '2px solid rgba(56, 189, 248, 0.3)',
            borderRadius: '16px',
            boxShadow: isCompleted
              ? '0 8px 30px rgba(16, 185, 129, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              : '0 8px 30px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            fontFamily: 'var(--font-mono)',
            fontSize: '1.45rem',
            lineHeight: 1,
            transition: 'all 0.25s ease',
          }}
        >
          {/* Line Number */}
          <span style={{ fontSize: '0.95rem', color: '#475569', fontWeight: 700, userSelect: 'none' }}>
            01
          </span>

          <div style={{ display: 'inline-flex', alignItems: 'center', flexWrap: 'wrap', gap: '4px' }}>
            {/* Pre-filled Prefix (e.g. "print(") */}
            {prefix && (
              <span style={{ color: '#38bdf8', fontWeight: 800, letterSpacing: '0.5px' }}>
                {prefix}
              </span>
            )}

            {/* Interactive Blank Slot */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '6px 12px',
                borderRadius: '8px',
                background: isCompleted
                  ? 'rgba(16, 185, 129, 0.18)'
                  : 'rgba(59, 130, 246, 0.15)',
                border: isCompleted
                  ? '2px solid #10b981'
                  : '2px dashed #3b82f6',
                boxShadow: isCompleted
                  ? '0 0 16px rgba(16, 185, 129, 0.4)'
                  : '0 0 14px rgba(59, 130, 246, 0.35)',
                minWidth: '50px',
                position: 'relative',
                transition: 'all 0.2s ease',
              }}
            >
              {/* Character by character render inside slot */}
              {blankTarget.split('').map((targetChar, idx) => {
                const userChar = typedBlank[idx];
                const isTyped = idx < typedBlank.length;
                const isCurrent = idx === typedBlank.length;
                const isMatch = isTyped && userChar === targetChar;

                return (
                  <span
                    key={idx}
                    style={{
                      position: 'relative',
                      display: 'inline-block',
                      color: !isTyped
                        ? 'rgba(255, 255, 255, 0.25)' // Dim ghost text
                        : isMatch
                        ? '#34d399' // Vibrant green
                        : '#ef4444', // Red for typo!
                      fontWeight: 900,
                      background: isTyped && !isMatch ? 'rgba(239, 68, 68, 0.25)' : 'transparent',
                      borderRadius: '3px',
                      padding: '0 1px',
                    }}
                  >
                    {isTyped ? userChar : targetChar}

                    {/* Blinking Cursor Bar on current character */}
                    {isCurrent && (
                      <span
                        style={{
                          position: 'absolute',
                          left: '-2px',
                          top: '10%',
                          bottom: '10%',
                          width: '2.5px',
                          background: '#38bdf8',
                          boxShadow: '0 0 8px #38bdf8',
                          animation: 'pulse 1s infinite',
                        }}
                      />
                    )}
                  </span>
                );
              })}

              {/* Extra overflow typos if user typed more characters */}
              {typedBlank.length > blankTarget.length &&
                typedBlank.slice(blankTarget.length).split('').map((extraChar, extraIdx) => (
                  <span
                    key={`extra-${extraIdx}`}
                    style={{
                      color: '#ef4444',
                      fontWeight: 900,
                      background: 'rgba(239, 68, 68, 0.3)',
                      borderRadius: '3px',
                      padding: '0 1px',
                      textDecoration: 'underline wavy #ef4444',
                    }}
                  >
                    {extraChar}
                  </span>
                ))}
            </div>

            {/* Pre-filled Suffix (e.g. ")") */}
            {suffix && (
              <span style={{ color: '#e2e8f0', fontWeight: 800 }}>
                {suffix}
              </span>
            )}
          </div>

          {/* Completion checkmark */}
          {isCompleted && (
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981', fontSize: '0.88rem', fontWeight: 800 }}>
              <CheckCircle2 size={18} />
              <span>완성! Enter를 눌러 실행하세요</span>
            </div>
          )}
        </div>

        {/* Bottom Hint / Action Guide */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.78rem', color: '#64748b' }}>
          <div>
            <span>💡 파란 점선 </span>
            <strong style={{ color: '#60a5fa' }}>[ 빈칸 블록 ]</strong>
            <span>에 알맞은 값을 키보드로 직접 채워 넣어보세요.</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>단축키: </span>
            <kbd style={{ padding: '2px 6px', borderRadius: '4px', background: 'rgba(255,255,255,0.08)', color: '#cbd5e1' }}>Backspace</kbd>
            <span>수정</span>
            <kbd style={{ padding: '2px 6px', borderRadius: '4px', background: 'rgba(255,255,255,0.08)', color: '#cbd5e1' }}>Enter</kbd>
            <span>코드 실행</span>
          </div>
        </div>
      </div>

      {/* ==================================================================
          LOWER HALF: Virtual Keyboard Guidance
          ================================================================== */}
      <div
        style={{
          flex: '1 1 46%',
          padding: '16px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#080d19',
        }}
      >
        <div style={{ width: '100%', maxWidth: '720px' }}>
          <VirtualKeyboard nextChar={nextChar} />
        </div>
      </div>
    </div>
  );
}
