'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Gauge,
  RotateCcw,
  Shuffle,
  Sparkles,
  Target,
  Timer,
  Trophy,
  Zap,
} from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { useAuth } from '@/lib/AuthContext';
import {
  SPEED_CODING_LANGUAGES,
  SPEED_CODING_SNIPPETS,
  type SpeedCodingLanguage,
} from '@/data/speedCodingSnippets';
import {
  fetchUserSpeedRecords,
  saveSpeedCodingRecord,
} from '@/lib/progressSync';
import type { UserSpeedRecordRow } from '@/lib/supabase/types';

export default function SpeedCodingPage() {
  const { language } = useLanguage();
  const { refreshProfile } = useAuth();
  const isKo = language === 'ko';

  const [selectedLang, setSelectedLang] = useState<'all' | SpeedCodingLanguage>('python');
  const [snippetIndex, setSnippetIndex] = useState<number>(0);

  const [typedText, setTypedText] = useState<string>('');
  const [autoIndentChars, setAutoIndentChars] = useState<number>(0);
  const [startTimeMs, setStartTimeMs] = useState<number | null>(null);
  const [elapsedSec, setElapsedSec] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [isNewRecord, setIsNewRecord] = useState<boolean>(false);
  const [bestRecords, setBestRecords] = useState<Record<string, UserSpeedRecordRow>>({});
  const [isFocused, setIsFocused] = useState<boolean>(true);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const pool = useMemo(() => {
    if (selectedLang === 'all') return SPEED_CODING_SNIPPETS;
    return SPEED_CODING_SNIPPETS.filter((s) => s.language === selectedLang);
  }, [selectedLang]);

  const currentSnippet = pool[snippetIndex % pool.length] || SPEED_CODING_SNIPPETS[0];
  const targetCode = currentSnippet.code;

  useEffect(() => {
    fetchUserSpeedRecords().then((map) => setBestRecords(map));
  }, []);

  const resetTypingState = useCallback(() => {
    setTypedText('');
    setAutoIndentChars(0);
    setStartTimeMs(null);
    setElapsedSec(0);
    setIsCompleted(false);
    setIsNewRecord(false);
    requestAnimationFrame(() => {
      textareaRef.current?.focus();
    });
  }, []);

  useEffect(() => {
    resetTypingState();
  }, [currentSnippet.id, resetTypingState]);

  // Live timer while typing
  useEffect(() => {
    if (!startTimeMs || isCompleted) return;
    const interval = setInterval(() => {
      setElapsedSec((performance.now() - startTimeMs) / 1000);
    }, 100);
    return () => clearInterval(interval);
  }, [startTimeMs, isCompleted]);

  // Compute live CPM & accuracy
  const stats = useMemo(() => {
    const len = typedText.length;
    if (len === 0) {
      return { cpm: 0, accuracy: 100, progress: 0, correctChars: 0, errorChars: 0 };
    }

    let correct = 0;
    let errors = 0;
    for (let i = 0; i < len; i++) {
      if (typedText[i] === targetCode[i]) {
        correct++;
      } else {
        errors++;
      }
    }

    // Exclude auto-inserted indentation spaces from speed calculation so CPM stays honest
    const manualCorrect = Math.max(0, correct - autoIndentChars);
    const manualTotal = Math.max(1, len - autoIndentChars);
    const accuracy = Number(((manualCorrect / manualTotal) * 100).toFixed(1));
    const minutes = Math.max(elapsedSec / 60, 0.02);
    const cpm = startTimeMs ? Math.min(2000, Math.round(manualCorrect / minutes)) : 0;
    const progress = Math.min(100, Math.round((len / targetCode.length) * 100));

    return { cpm, accuracy, progress, correctChars: correct, errorChars: errors };
  }, [typedText, targetCode, autoIndentChars, elapsedSec, startTimeMs]);

  const finishSnippet = useCallback(
    async (finalText: string, finalAutoIndent: number, startedAt: number) => {
      const finalElapsedSec = Math.max(0.5, (performance.now() - startedAt) / 1000);
      setElapsedSec(finalElapsedSec);
      setIsCompleted(true);

      let correct = 0;
      for (let i = 0; i < finalText.length; i++) {
        if (finalText[i] === targetCode[i]) correct++;
      }
      const manualCorrect = Math.max(1, correct - finalAutoIndent);
      const manualTotal = Math.max(1, finalText.length - finalAutoIndent);
      const finalAcc = Number(((manualCorrect / manualTotal) * 100).toFixed(2));
      const finalCpm = Math.min(
        2000,
        Math.round(manualCorrect / (finalElapsedSec / 60))
      );

      const beatRecord = await saveSpeedCodingRecord({
        snippetId: currentSnippet.id,
        language: currentSnippet.language,
        cpm: finalCpm,
        accuracy: finalAcc,
      });

      if (beatRecord) {
        setIsNewRecord(true);
        const updatedMap = await fetchUserSpeedRecords();
        setBestRecords(updatedMap);
        await refreshProfile();
      }
    },
    [currentSnippet.id, currentSnippet.language, targetCode, refreshProfile]
  );

  const applyNextTyped = (nextVal: string, addedAutoIndent = 0) => {
    if (isCompleted) return;
    const clamped = nextVal.slice(0, targetCode.length);

    let activeStart = startTimeMs;
    if (!activeStart && clamped.length > 0) {
      activeStart = performance.now();
      setStartTimeMs(activeStart);
    }

    const nextAuto = Math.max(0, autoIndentChars + addedAutoIndent);
    if (addedAutoIndent !== 0) {
      setAutoIndentChars(nextAuto);
    }
    setTypedText(clamped);

    if (clamped.length >= targetCode.length && activeStart) {
      void finishSnippet(clamped, nextAuto, activeStart);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (isCompleted) {
      if (e.key === 'Enter') {
        e.preventDefault();
        setSnippetIndex((prev) => (prev + 1) % pool.length);
      }
      return;
    }

    // Smart Enter: insert '\n' plus matching leading spaces of the next target line
    if (e.key === 'Enter') {
      e.preventDefault();
      const pos = typedText.length;
      if (pos >= targetCode.length) return;

      let insertStr = '\n';
      let autoSpaces = 0;
      if (targetCode[pos] === '\n') {
        let look = pos + 1;
        while (look < targetCode.length && targetCode[look] === ' ') {
          insertStr += ' ';
          autoSpaces++;
          look++;
        }
      }
      applyNextTyped(typedText + insertStr, autoSpaces);
      return;
    }

    // Tab inserts 4 spaces cleanly instead of moving focus out of the editor
    if (e.key === 'Tab') {
      e.preventDefault();
      applyNextTyped(typedText + '    ');
    }
  };

  const rotateNext = () => {
    setSnippetIndex((prev) => (prev + 1) % pool.length);
  };

  const rotatePrev = () => {
    setSnippetIndex((prev) => (prev - 1 + pool.length) % pool.length);
  };

  const rotateRandom = () => {
    if (pool.length <= 1) {
      resetTypingState();
      return;
    }
    let next = snippetIndex;
    while (next === snippetIndex) {
      next = Math.floor(Math.random() * pool.length);
    }
    setSnippetIndex(next);
  };

  const personalBest = bestRecords[currentSnippet.id];

  return (
    <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '36px 24px 100px', color: '#f8fafc' }}>
      {/* Top Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '26px',
        }}
      >
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 14px',
              borderRadius: '18px',
              background: 'rgba(56, 189, 248, 0.14)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              color: '#38bdf8',
              fontSize: '0.76rem',
              fontWeight: 800,
              marginBottom: '10px',
            }}
          >
            <Zap size={14} />
            <span>PURE CODE TYPING ARENA · NO EXECUTION</span>
          </div>
          <h1 style={{ fontSize: '2.05rem', fontWeight: 900, margin: '0 0 6px' }}>
            {isKo ? '⌨️ 코드타자' : '⌨️ Code Typing'}
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '0.94rem', margin: 0 }}>
            {isKo
              ? '컴파일·실행 부담 없이 실전 코드 25종을 로테이션하며 순수 코딩 타수(CPM)와 손끝 리듬을 끌어올리세요.'
              : 'Practice pure code typing speed and accuracy across 25 rotating real-world code snippets.'}
          </p>
        </div>

        <Link
          href="/ranking?tab=speed"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '7px',
            padding: '10px 16px',
            borderRadius: '12px',
            background: 'rgba(245, 158, 11, 0.14)',
            border: '1px solid rgba(245, 158, 11, 0.35)',
            color: '#fbbf24',
            fontSize: '0.84rem',
            fontWeight: 800,
            textDecoration: 'none',
          }}
        >
          <Trophy size={15} />
          <span>{isKo ? '코드타자 랭킹 보기' : 'View Typing Ranking'}</span>
        </Link>
      </div>

      {/* Language Selector Tabs */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '18px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            background: 'rgba(15, 23, 42, 0.8)',
            border: '1px solid rgba(148, 163, 184, 0.16)',
            padding: '6px',
            borderRadius: '14px',
          }}
        >
          {SPEED_CODING_LANGUAGES.map((langTab) => {
            const active = selectedLang === langTab.id;
            return (
              <button
                key={langTab.id}
                type="button"
                onClick={() => {
                  setSelectedLang(langTab.id);
                  setSnippetIndex(0);
                }}
                style={{
                  padding: '8px 14px',
                  borderRadius: '10px',
                  border: active
                    ? `1px solid ${langTab.color}66`
                    : '1px solid transparent',
                  background: active ? `${langTab.color}22` : 'transparent',
                  color: active ? '#ffffff' : '#94a3b8',
                  fontSize: '0.84rem',
                  fontWeight: active ? 800 : 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span>{langTab.badge}</span>
                <span>{isKo ? langTab.labelKo : langTab.labelEn}</span>
              </button>
            );
          })}
        </div>

        {/* Rotation Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            type="button"
            onClick={rotatePrev}
            title={isKo ? '이전 예제' : 'Previous Snippet'}
            style={{
              padding: '8px 11px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#cbd5e1',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            <ChevronLeft size={16} />
          </button>

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.84rem',
              fontWeight: 800,
              color: '#38bdf8',
              padding: '0 6px',
            }}
          >
            {(snippetIndex % pool.length) + 1} / {pool.length}
          </span>

          <button
            type="button"
            onClick={rotateNext}
            title={isKo ? '다음 예제' : 'Next Snippet'}
            style={{
              padding: '8px 11px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#cbd5e1',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            <ChevronRight size={16} />
          </button>

          <button
            type="button"
            onClick={rotateRandom}
            style={{
              padding: '8px 13px',
              borderRadius: '10px',
              background: 'rgba(56, 189, 248, 0.14)',
              border: '1px solid rgba(56, 189, 248, 0.35)',
              color: '#38bdf8',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Shuffle size={14} />
            <span>{isKo ? '랜덤 예제' : 'Random'}</span>
          </button>

          <button
            type="button"
            onClick={resetTypingState}
            style={{
              padding: '8px 13px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#cbd5e1',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <RotateCcw size={14} />
            <span>{isKo ? '초기화' : 'Reset'}</span>
          </button>
        </div>
      </div>

      {/* Live Metrics Bar */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '12px',
          marginBottom: '18px',
        }}
      >
        <div
          style={{
            background: '#131f37',
            border: '1px solid rgba(56, 189, 248, 0.28)',
            borderRadius: '16px',
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 700 }}>
              {isKo ? '현재 타수 (CPM)' : 'Speed (CPM)'}
            </div>
            <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>
              {stats.cpm}
            </div>
          </div>
          <Gauge size={24} color="#38bdf8" style={{ opacity: 0.8 }} />
        </div>

        <div
          style={{
            background: '#131f37',
            border: '1px solid rgba(16, 185, 129, 0.28)',
            borderRadius: '16px',
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 700 }}>
              {isKo ? '정확도' : 'Accuracy'}
            </div>
            <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#34d399', fontFamily: 'var(--font-mono)' }}>
              {stats.accuracy}%
            </div>
          </div>
          <Target size={24} color="#34d399" style={{ opacity: 0.8 }} />
        </div>

        <div
          style={{
            background: '#131f37',
            border: '1px solid rgba(167, 139, 250, 0.28)',
            borderRadius: '16px',
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 700 }}>
              {isKo ? '경과 시간' : 'Elapsed Time'}
            </div>
            <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#c4b5fd', fontFamily: 'var(--font-mono)' }}>
              {elapsedSec.toFixed(1)}s
            </div>
          </div>
          <Timer size={24} color="#c4b5fd" style={{ opacity: 0.8 }} />
        </div>

        <div
          style={{
            background: '#131f37',
            border: '1px solid rgba(245, 158, 11, 0.28)',
            borderRadius: '16px',
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 700 }}>
              {isKo ? '이 예제 내 최고 기록' : 'Personal Best'}
            </div>
            <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#fbbf24', fontFamily: 'var(--font-mono)' }}>
              {personalBest ? `${personalBest.best_cpm} CPM` : '-'}
            </div>
          </div>
          <Trophy size={22} color="#fbbf24" style={{ opacity: 0.8 }} />
        </div>
      </div>

      {/* Main Code Typing Box */}
      <div
        onClick={() => textareaRef.current?.focus()}
        style={{
          background: '#0b1221',
          border: isFocused
            ? '2px solid rgba(56, 189, 248, 0.55)'
            : '2px solid rgba(148, 163, 184, 0.2)',
          borderRadius: '22px',
          overflow: 'hidden',
          boxShadow: '0 24px 50px rgba(0, 0, 0, 0.5)',
          cursor: 'text',
          position: 'relative',
        }}
      >
        {/* Top Editor Bar */}
        <div
          style={{
            padding: '14px 22px',
            background: '#131f37',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <span
              style={{
                padding: '3px 10px',
                borderRadius: '8px',
                background: 'rgba(56, 189, 248, 0.16)',
                color: '#38bdf8',
                fontSize: '0.76rem',
                fontWeight: 800,
              }}
            >
              {currentSnippet.languageLabel}
            </span>
            <span style={{ fontWeight: 800, fontSize: '0.96rem', color: '#ffffff' }}>
              {isKo ? currentSnippet.titleKo : currentSnippet.titleEn}
            </span>
            <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
              — {isKo ? currentSnippet.descKo : currentSnippet.descEn}
            </span>
          </div>

          <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
            {stats.progress}% ({typedText.length}/{targetCode.length})
          </span>
        </div>

        {/* Progress Bar */}
        <div style={{ height: '4px', background: 'rgba(255, 255, 255, 0.05)' }}>
          <div
            style={{
              width: `${stats.progress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #38bdf8, #10b981)',
              transition: 'width 0.08s linear',
            }}
          />
        </div>

        {/* Hidden Input Capturing Keystrokes */}
        <textarea
          ref={textareaRef}
          value={typedText}
          onChange={(e) => applyNextTyped(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          spellCheck={false}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          aria-label="Speed coding typing input"
          style={{
            position: 'absolute',
            opacity: 0,
            pointerEvents: 'none',
            width: '1px',
            height: '1px',
          }}
        />

        {/* Character-by-Character Code Overlay */}
        <div style={{ padding: '26px 28px', overflowX: 'auto' }}>
          <pre
            style={{
              margin: 0,
              fontFamily: 'var(--font-mono), Consolas, Monaco, monospace',
              fontSize: '1.04rem',
              lineHeight: 1.75,
              whiteSpace: 'pre',
              userSelect: 'none',
            }}
          >
            {Array.from(targetCode).map((char, idx) => {
              const isTyped = idx < typedText.length;
              const isCurrent = idx === typedText.length && !isCompleted;
              const isCorrect = isTyped && typedText[idx] === char;
              const isWrong = isTyped && typedText[idx] !== char;

              if (char === '\n') {
                return (
                  <React.Fragment key={idx}>
                    {isCurrent && (
                      <span
                        style={{
                          display: 'inline-block',
                          padding: '0 4px',
                          borderRadius: '4px',
                          background: 'rgba(56, 189, 248, 0.28)',
                          color: '#38bdf8',
                          fontSize: '0.8rem',
                        }}
                      >
                        ↵
                      </span>
                    )}
                    {isWrong && (
                      <span
                        style={{
                          display: 'inline-block',
                          padding: '0 4px',
                          borderRadius: '4px',
                          background: 'rgba(239, 68, 68, 0.35)',
                          color: '#fecaca',
                          fontSize: '0.8rem',
                        }}
                      >
                        ↵
                      </span>
                    )}
                    {'\n'}
                  </React.Fragment>
                );
              }

              return (
                <span
                  key={idx}
                  style={{
                    color: isCorrect
                      ? '#f8fafc'
                      : isWrong
                      ? '#fecaca'
                      : isCurrent
                      ? '#ffffff'
                      : '#475569',
                    backgroundColor: isWrong
                      ? 'rgba(239, 68, 68, 0.38)'
                      : isCurrent && isFocused
                      ? 'rgba(56, 189, 248, 0.32)'
                      : 'transparent',
                    borderBottom: isCurrent && isFocused
                      ? '2px solid #38bdf8'
                      : isWrong
                      ? '2px solid #ef4444'
                      : 'none',
                    borderRadius: isWrong || isCurrent ? '2px' : undefined,
                  }}
                >
                  {char}
                </span>
              );
            })}
          </pre>

          {!isFocused && !isCompleted && (
            <div
              style={{
                marginTop: '16px',
                fontSize: '0.82rem',
                color: '#38bdf8',
                fontWeight: 700,
              }}
            >
              {isKo
                ? '💡 코드 영역을 클릭한 뒤 타이핑을 시작하세요! (Enter 입력 시 다음 줄 들여쓰기가 자동 적용됩니다)'
                : '💡 Click the code box above and start typing! (Enter auto-indents the next line)'}
            </div>
          )}
        </div>
      </div>

      {/* Completion Banner */}
      {isCompleted && (
        <div
          style={{
            marginTop: '22px',
            background: 'linear-gradient(135deg, #13233f 0%, #0f1b31 100%)',
            border: '1.5px solid rgba(16, 185, 129, 0.45)',
            borderRadius: '22px',
            padding: '24px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '18px',
            boxShadow: '0 16px 36px rgba(0, 0, 0, 0.4)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '16px',
                background: 'rgba(16, 185, 129, 0.16)',
                border: '1.5px solid #10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <CheckCircle2 size={28} color="#10b981" />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, margin: 0, color: '#ffffff' }}>
                  {isKo ? '예제 완주 성공!' : 'Snippet Complete!'}
                </h3>
                {isNewRecord && (
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '3px 9px',
                      borderRadius: '10px',
                      background: 'rgba(245, 158, 11, 0.2)',
                      border: '1px solid rgba(245, 158, 11, 0.45)',
                      color: '#fbbf24',
                      fontSize: '0.74rem',
                      fontWeight: 800,
                    }}
                  >
                    <Sparkles size={12} />
                    {isKo ? '최고 기록 경신!' : 'NEW PERSONAL BEST!'}
                  </span>
                )}
              </div>
              <div style={{ fontSize: '0.9rem', color: '#cbd5e1', marginTop: '4px' }}>
                {isKo
                  ? `최종 타수 ${stats.cpm} CPM · 정확도 ${stats.accuracy}% · 소요 시간 ${elapsedSec.toFixed(1)}초`
                  : `Final Speed: ${stats.cpm} CPM · Accuracy: ${stats.accuracy}% · Time: ${elapsedSec.toFixed(1)}s`}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={resetTypingState}
              style={{
                padding: '11px 16px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                color: '#e2e8f0',
                fontSize: '0.86rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <RotateCcw size={15} />
              <span>{isKo ? '다시 치기' : 'Retry'}</span>
            </button>

            <button
              type="button"
              onClick={rotateNext}
              className="tactile-btn tactile-btn-primary"
              style={{
                padding: '11px 18px',
                borderRadius: '12px',
                fontSize: '0.88rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span>{isKo ? '다음 예제로 이동 (Enter ↵)' : 'Next Snippet (Enter ↵)'}</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

