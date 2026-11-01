'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  Gauge,
  RotateCcw,
  Shuffle,
  Sparkles,
  Target,
  Timer,
  Trophy,
} from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { useAuth } from '@/lib/AuthContext';
import VirtualKeyboard from '@/components/VirtualKeyboard';
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

// ============================================================================
// Multi-Language VS Code Light+ Line Tokenizer (Python / JS / C / Java / SQL)
// Crisp high-contrast tokens tailored for #ffffff Light Editorial IDE paper
// ============================================================================
const VSCODE_LIGHT_PLUS = {
  keyword: '#7c3aed',
  constant: '#0284c7',
  builtin: '#b45309',
  string: '#c2410c',
  number: '#059669',
  comment: '#16a34a',
  bracket: '#2563eb',
  operator: '#334155',
  identifier: '#0f172a',
  default: '#0f172a',
  error: '#dc2626',
} as const;

interface CodeToken {
  start: number;
  end: number;
  type: keyof typeof VSCODE_LIGHT_PLUS;
}

const MULTI_KEYWORDS = new Set([
  // Python / JS / C / Java control & declaration keywords
  'def', 'return', 'if', 'elif', 'else', 'for', 'while', 'in', 'of', 'is', 'not', 'and', 'or',
  'import', 'from', 'as', 'class', 'try', 'catch', 'except', 'finally', 'throw', 'throws', 'raise',
  'break', 'continue', 'pass', 'lambda', 'with', 'const', 'let', 'var', 'function', 'async', 'await',
  'new', 'this', 'self', 'public', 'private', 'protected', 'static', 'final', 'void', 'struct',
  'switch', 'case', 'default', 'do', 'include',
  // SQL keywords
  'SELECT', 'FROM', 'WHERE', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'ON', 'AS', 'GROUP', 'BY',
  'HAVING', 'ORDER', 'ASC', 'DESC', 'LIMIT', 'INSERT', 'INTO', 'VALUES', 'CREATE', 'TABLE',
  'PRIMARY', 'KEY', 'NOT', 'DEFAULT', 'CASE', 'WHEN', 'THEN', 'ELSE', 'END', 'AND', 'OR',
]);

const MULTI_CONSTANTS = new Set([
  'True', 'False', 'None', 'true', 'false', 'null', 'undefined', 'NULL', 'TRUE', 'FALSE',
  'int', 'long', 'double', 'float', 'char', 'boolean', 'String', 'INTEGER', 'TEXT', 'Number',
]);

const MULTI_BUILTINS = new Set([
  'print', 'range', 'len', 'sum', 'min', 'max', 'round', 'items', 'filter', 'map', 'join',
  'toFixed', 'toUpperCase', 'toLowerCase', 'log', 'console', 'printf', 'System', 'out', 'println',
  'COUNT', 'AVG', 'SUM', 'ROUND', 'MAX', 'MIN', '__init__', 'constructor', 'main',
]);

function tokenizeCodeLine(line: string, lang: SpeedCodingLanguage): CodeToken[] {
  const tokens: CodeToken[] = [];
  let i = 0;

  while (i < line.length) {
    const ch = line[i];

    if (/\s/.test(ch)) {
      i++;
      continue;
    }

    // Preprocessor directive in C (#include <stdio.h>)
    if (lang === 'c' && ch === '#') {
      let end = i + 1;
      while (end < line.length && /[a-zA-Z_]/.test(line[end])) end++;
      tokens.push({ start: i, end, type: 'keyword' });
      i = end;
      continue;
    }

    // Comments: Python '#', JS/C/Java '//', SQL '--'
    if (
      (lang === 'python' && ch === '#') ||
      ((lang === 'javascript' || lang === 'c' || lang === 'java') && line.slice(i, i + 2) === '//') ||
      (lang === 'sql' && line.slice(i, i + 2) === '--')
    ) {
      tokens.push({ start: i, end: line.length, type: 'comment' });
      break;
    }

    // C header <stdio.h>
    if (lang === 'c' && ch === '<' && line.includes('>', i + 1) && line.trimStart().startsWith('#include')) {
      const closeIdx = line.indexOf('>', i + 1) + 1;
      tokens.push({ start: i, end: closeIdx, type: 'string' });
      i = closeIdx;
      continue;
    }

    // String literals: "...", '...', `...`
    if (ch === '"' || ch === "'" || ch === '`') {
      const quote = ch;
      const start = i;
      i++;
      while (i < line.length && line[i] !== quote) {
        if (line[i] === '\\' && i + 1 < line.length) {
          i += 2;
        } else {
          i++;
        }
      }
      if (i < line.length && line[i] === quote) i++;
      tokens.push({ start, end: i, type: 'string' });
      continue;
    }

    // Numbers
    if (/\d/.test(ch)) {
      const start = i;
      while (i < line.length && /[\d.]/.test(line[i])) i++;
      tokens.push({ start, end: i, type: 'number' });
      continue;
    }

    // Identifiers / Keywords / Builtins
    if (/[a-zA-Z_]/.test(ch)) {
      const start = i;
      while (i < line.length && /[a-zA-Z0-9_]/.test(line[i])) i++;
      const word = line.slice(start, i);

      // Python f-string prefix
      if (lang === 'python' && word === 'f' && i < line.length && (line[i] === '"' || line[i] === "'")) {
        tokens.push({ start, end: start + 1, type: 'keyword' });
        continue;
      }

      const upperWord = lang === 'sql' ? word.toUpperCase() : word;
      let type: keyof typeof VSCODE_LIGHT_PLUS = 'identifier';
      if (MULTI_KEYWORDS.has(word) || (lang === 'sql' && MULTI_KEYWORDS.has(upperWord))) {
        type = 'keyword';
      } else if (MULTI_CONSTANTS.has(word) || (lang === 'sql' && MULTI_CONSTANTS.has(upperWord))) {
        type = 'constant';
      } else if (
        MULTI_BUILTINS.has(word) ||
        (lang === 'sql' && MULTI_BUILTINS.has(upperWord)) ||
        (i < line.length && line[i] === '(')
      ) {
        type = 'builtin';
      }

      tokens.push({ start, end: i, type });
      continue;
    }

    // Brackets
    if (/[()[\]{}]/.test(ch)) {
      tokens.push({ start: i, end: i + 1, type: 'bracket' });
      i++;
      continue;
    }

    // Operators & punctuation
    if (/[:;=+\-*/%<>&|^~!,.?$]/.test(ch)) {
      const start = i;
      while (i < line.length && /[:;=+\-*/%<>&|^~!,.?$]/.test(line[i])) i++;
      tokens.push({ start, end: i, type: 'operator' });
      continue;
    }

    i++;
  }

  return tokens;
}

export default function CodeTypingPage() {
  const { language } = useLanguage();
  const { refreshProfile } = useAuth();
  const isKo = language === 'ko';

  const [selectedLang, setSelectedLang] = useState<'all' | SpeedCodingLanguage>('python');
  const [snippetIndex, setSnippetIndex] = useState<number>(0);

  // 2-Layer Typing State (matching Practice Studio's TypingStage)
  const [typedCode, setTypedCode] = useState<string>('');
  const [cursorIndex, setCursorIndex] = useState<number>(0);
  const [autoIndentChars, setAutoIndentChars] = useState<number>(0);
  const [startTimeMs, setStartTimeMs] = useState<number | null>(null);
  const [elapsedSec, setElapsedSec] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [isNewRecord, setIsNewRecord] = useState<boolean>(false);
  const [bestRecords, setBestRecords] = useState<Record<string, UserSpeedRecordRow>>({});
  const [isFocused, setIsFocused] = useState<boolean>(true);

  const hiddenInputRef = useRef<HTMLTextAreaElement | null>(null);
  const activeLineRef = useRef<HTMLDivElement | null>(null);
  const completedLockRef = useRef<boolean>(false);

  // IME composition tracking (identical to TypingStage)
  const composingStartIndexRef = useRef<number | null>(null);
  const lastComposingLenRef = useRef<number>(0);

  const pool = useMemo(() => {
    if (selectedLang === 'all') return SPEED_CODING_SNIPPETS;
    return SPEED_CODING_SNIPPETS.filter((s) => s.language === selectedLang);
  }, [selectedLang]);

  const currentSnippet = pool[snippetIndex % pool.length] || SPEED_CODING_SNIPPETS[0];
  const targetCode = useMemo(
    () => currentSnippet.code.replace(/\r\n/g, '\n'),
    [currentSnippet.code]
  );
  const targetLines = useMemo(() => targetCode.split('\n'), [targetCode]);
  const userLines = useMemo(() => typedCode.split('\n'), [typedCode]);
  const maxLineCount = Math.max(targetLines.length, userLines.length);
  const lineIndices = useMemo(
    () => Array.from({ length: maxLineCount }, (_, i) => i),
    [maxLineCount]
  );

  useEffect(() => {
    fetchUserSpeedRecords().then((map) => setBestRecords(map));
  }, []);

  const resetTypingState = useCallback(() => {
    completedLockRef.current = false;
    composingStartIndexRef.current = null;
    lastComposingLenRef.current = 0;
    setTypedCode('');
    setCursorIndex(0);
    setAutoIndentChars(0);
    setStartTimeMs(null);
    setElapsedSec(0);
    setIsCompleted(false);
    setIsNewRecord(false);
    if (hiddenInputRef.current) {
      hiddenInputRef.current.value = '';
    }
    requestAnimationFrame(() => {
      hiddenInputRef.current?.focus();
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

  // Cursor (line, col) calculation
  const { cursorLine, cursorCol } = useMemo(() => {
    const safeIndex = Math.max(0, Math.min(cursorIndex, typedCode.length));
    const beforeCursor = typedCode.slice(0, safeIndex);
    const lines = beforeCursor.split('\n');
    return {
      cursorLine: lines.length - 1,
      cursorCol: lines[lines.length - 1].length,
    };
  }, [typedCode, cursorIndex]);

  const getIndexFromLineAndCol = useCallback(
    (targetLine: number, targetCol: number): number => {
      const lines = typedCode.split('\n');
      const safeLine = Math.max(0, Math.min(targetLine, lines.length - 1));
      let idx = 0;
      for (let i = 0; i < safeLine; i++) {
        idx += lines[i].length + 1;
      }
      const lineLen = lines[safeLine] ? lines[safeLine].length : 0;
      const safeCol = Math.max(0, Math.min(targetCol, lineLen));
      return idx + safeCol;
    },
    [typedCode]
  );

  // Auto-scroll active line into view smoothly
  useEffect(() => {
    activeLineRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [cursorLine]);

  // Next expected key for bottom VirtualKeyboard
  const nextChar = useMemo(() => {
    if (isCompleted || !isFocused) return '';
    const tLine = targetLines[cursorLine];
    if (tLine === undefined) return '';
    if (cursorCol < tLine.length) {
      const ch = tLine[cursorCol];
      return ch === ' ' ? 'Space' : ch;
    }
    if (cursorLine < targetLines.length - 1) {
      return 'Enter';
    }
    return '';
  }, [isCompleted, isFocused, targetLines, cursorLine, cursorCol]);

  // Line-by-line accuracy, CPM, and progress calculation
  const computeMetrics = useCallback(
    (codeStr: string, autoIndentCount: number, elapsed: number, started: number | null) => {
      if (codeStr.length === 0) {
        return { cpm: 0, accuracy: 100, progress: 0, correctChars: 0 };
      }

      const uLines = codeStr.split('\n');
      let correct = 0;
      let totalEvaluated = 0;

      for (let l = 0; l < uLines.length; l++) {
        const uLine = uLines[l] || '';
        const tLine = targetLines[l] || '';
        for (let c = 0; c < uLine.length; c++) {
          totalEvaluated++;
          if (c < tLine.length && uLine[c] === tLine[c]) {
            correct++;
          }
        }
        if (l < uLines.length - 1) {
          totalEvaluated++;
          if (l < targetLines.length - 1) {
            correct++;
          }
        }
      }

      const manualCorrect = Math.max(0, correct - autoIndentCount);
      const manualTotal = Math.max(0, totalEvaluated - autoIndentCount);
      if (manualTotal === 0) {
        return { cpm: 0, accuracy: 100, progress: 0, correctChars: correct };
      }

      const accuracy = Number(
        Math.min(100, (manualCorrect / manualTotal) * 100).toFixed(1)
      );
      const minutes = Math.max(elapsed / 60, 0.02);
      const cpm = started ? Math.min(2000, Math.round(manualCorrect / minutes)) : 0;
      const progress = Math.min(
        100,
        Math.round((correct / Math.max(1, targetCode.length)) * 100)
      );

      return { cpm, accuracy, progress, correctChars: correct };
    },
    [targetLines, targetCode.length]
  );

  const stats = useMemo(
    () => computeMetrics(typedCode, autoIndentChars, elapsedSec, startTimeMs),
    [computeMetrics, typedCode, autoIndentChars, elapsedSec, startTimeMs]
  );

  // Check completion whenever typedCode updates
  const finishSnippet = useCallback(
    async (finalCode: string, finalAutoIndent: number, startedAt: number) => {
      if (completedLockRef.current) return;
      completedLockRef.current = true;

      const finalElapsed = Math.max(0.5, (performance.now() - startedAt) / 1000);
      setElapsedSec(finalElapsed);
      setIsCompleted(true);

      const finalMetrics = computeMetrics(
        finalCode,
        finalAutoIndent,
        finalElapsed,
        startedAt
      );

      const beatRecord = await saveSpeedCodingRecord({
        snippetId: currentSnippet.id,
        language: currentSnippet.language,
        cpm: finalMetrics.cpm,
        accuracy: finalMetrics.accuracy,
      });

      if (beatRecord) {
        setIsNewRecord(true);
        const updatedMap = await fetchUserSpeedRecords();
        setBestRecords(updatedMap);
        await refreshProfile();
      }
    },
    [computeMetrics, currentSnippet.id, currentSnippet.language, refreshProfile]
  );

  const updateTypedCode = useCallback(
    (nextCode: string, nextCursor: number, addedAutoIndent = 0) => {
      if (completedLockRef.current) return;

      let activeStart = startTimeMs;
      if (!activeStart && nextCode.length > 0) {
        activeStart = performance.now();
        setStartTimeMs(activeStart);
      }

      const nextAuto = Math.max(0, autoIndentChars + addedAutoIndent);
      if (addedAutoIndent !== 0) {
        setAutoIndentChars(nextAuto);
      }

      setTypedCode(nextCode);
      setCursorIndex(nextCursor);

      // Complete when every target line has reached its required character length
      if (activeStart) {
        const uLines = nextCode.split('\n');
        const allLinesFilled =
          uLines.length >= targetLines.length &&
          targetLines.every(
            (tLine, idx) => tLine.length === 0 || (uLines[idx] || '').length >= tLine.length
          );

        if (allLinesFilled) {
          void finishSnippet(nextCode, nextAuto, activeStart);
        }
      }
    },
    [startTimeMs, autoIndentChars, targetLines, finishSnippet]
  );

  const handleStageClick = () => {
    composingStartIndexRef.current = null;
    lastComposingLenRef.current = 0;
    if (hiddenInputRef.current) {
      hiddenInputRef.current.value = '';
    }
    hiddenInputRef.current?.focus();
  };

  // IME Composition Handlers
  const handleCompositionStart = () => {
    composingStartIndexRef.current = cursorIndex;
    lastComposingLenRef.current = 0;
  };

  const handleCompositionUpdate = (e: React.CompositionEvent<HTMLTextAreaElement>) => {
    if (isCompleted) return;
    const composingText = e.data;
    if (!composingText) return;

    if (composingStartIndexRef.current === null) {
      composingStartIndexRef.current = cursorIndex;
      lastComposingLenRef.current = 0;
    }

    const startIdx = composingStartIndexRef.current;
    const lenToReplace = lastComposingLenRef.current;
    const safeStart = Math.max(0, Math.min(startIdx, typedCode.length));
    const nextCode =
      typedCode.slice(0, safeStart) +
      composingText +
      typedCode.slice(safeStart + lenToReplace);

    lastComposingLenRef.current = composingText.length;
    updateTypedCode(nextCode, safeStart + composingText.length);
  };

  const handleCompositionEnd = (e: React.CompositionEvent<HTMLTextAreaElement>) => {
    if (!isCompleted && e.data && composingStartIndexRef.current !== null) {
      const startIdx = composingStartIndexRef.current;
      const lenToReplace = lastComposingLenRef.current;
      const safeStart = Math.max(0, Math.min(startIdx, typedCode.length));
      const nextCode =
        typedCode.slice(0, safeStart) +
        e.data +
        typedCode.slice(safeStart + lenToReplace);
      updateTypedCode(nextCode, safeStart + e.data.length);
    }
    composingStartIndexRef.current = null;
    lastComposingLenRef.current = 0;
    if (hiddenInputRef.current) {
      hiddenInputRef.current.value = '';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (isCompleted) {
      e.target.value = '';
      return;
    }
    const val = e.target.value;
    if (val && composingStartIndexRef.current === null) {
      const safeIdx = Math.max(0, Math.min(cursorIndex, typedCode.length));
      const nextCode = typedCode.slice(0, safeIdx) + val + typedCode.slice(safeIdx);
      e.target.value = '';
      updateTypedCode(nextCode, safeIdx + val.length);
    }
  };

  const rotateNext = useCallback(() => {
    setSnippetIndex((prev) => (prev + 1) % pool.length);
  }, [pool.length]);

  const rotatePrev = useCallback(() => {
    setSnippetIndex((prev) => (prev - 1 + pool.length) % pool.length);
  }, [pool.length]);

  const rotateRandom = useCallback(() => {
    if (pool.length <= 1) {
      resetTypingState();
      return;
    }
    let next = snippetIndex;
    while (next === snippetIndex) {
      next = Math.floor(Math.random() * pool.length);
    }
    setSnippetIndex(next);
  }, [pool.length, resetTypingState, snippetIndex]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.nativeEvent.isComposing || e.key === 'Process' || e.key === 'HangulMode') {
      return;
    }

    if (isCompleted) {
      if (e.key === 'Enter') {
        e.preventDefault();
        rotateNext();
      }
      return;
    }

    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setCursorIndex((prev) => Math.max(0, prev - 1));
      return;
    }

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      setCursorIndex((prev) => Math.min(typedCode.length, prev + 1));
      return;
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cursorLine > 0) {
        setCursorIndex(getIndexFromLineAndCol(cursorLine - 1, cursorCol));
      } else {
        setCursorIndex(0);
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cursorLine < userLines.length - 1) {
        setCursorIndex(getIndexFromLineAndCol(cursorLine + 1, cursorCol));
      } else {
        setCursorIndex(typedCode.length);
      }
      return;
    }

    if (e.key === 'Home') {
      e.preventDefault();
      setCursorIndex(getIndexFromLineAndCol(cursorLine, 0));
      return;
    }

    if (e.key === 'End') {
      e.preventDefault();
      const currentLineLen = userLines[cursorLine] ? userLines[cursorLine].length : 0;
      setCursorIndex(getIndexFromLineAndCol(cursorLine, currentLineLen));
      return;
    }

    // Tab -> 4 spaces
    if (e.key === 'Tab') {
      e.preventDefault();
      const safeIdx = Math.max(0, Math.min(cursorIndex, typedCode.length));
      const nextCode = typedCode.slice(0, safeIdx) + '    ' + typedCode.slice(safeIdx);
      updateTypedCode(nextCode, safeIdx + 4);
      return;
    }

    // Enter -> newline + auto-skip empty separator lines + smart leading indentation
    if (e.key === 'Enter') {
      e.preventDefault();
      const safeIdx = Math.max(0, Math.min(cursorIndex, typedCode.length));
      const beforeCursor = typedCode.slice(0, safeIdx);
      const afterCursor = typedCode.slice(safeIdx);

      let nextLineIdx = cursorLine + 1;
      let newlines = '\n';
      let skippedBlankNewlines = 0;

      while (
        nextLineIdx < targetLines.length - 1 &&
        targetLines[nextLineIdx] === ''
      ) {
        newlines += '\n';
        skippedBlankNewlines += 1;
        nextLineIdx += 1;
      }

      const nextTargetLine = targetLines[nextLineIdx] ?? '';
      let autoIndent = '';

      if (nextTargetLine.length > 0) {
        const match = nextTargetLine.match(/^( +)/);
        autoIndent = match ? match[1] : '';
      }

      const insertText = newlines + autoIndent;
      updateTypedCode(
        beforeCursor + insertText + afterCursor,
        safeIdx + insertText.length,
        skippedBlankNewlines + autoIndent.length
      );
      return;
    }

    // Backspace -> single char delete or smart 4-space leading indent dedent
    if (e.key === 'Backspace') {
      e.preventDefault();
      if (cursorIndex > 0) {
        const safeIdx = Math.max(0, Math.min(cursorIndex, typedCode.length));
        const beforeCursor = typedCode.slice(0, safeIdx);
        const afterCursor = typedCode.slice(safeIdx);

        const lastNewlineIdx = beforeCursor.lastIndexOf('\n');
        const currentLineBeforeCursor =
          lastNewlineIdx === -1 ? beforeCursor : beforeCursor.slice(lastNewlineIdx + 1);

        if (
          currentLineBeforeCursor.length >= 4 &&
          currentLineBeforeCursor.endsWith('    ') &&
          /^\s+$/.test(currentLineBeforeCursor)
        ) {
          updateTypedCode(
            beforeCursor.slice(0, -4) + afterCursor,
            Math.max(0, safeIdx - 4),
            autoIndentChars >= 4 ? -4 : 0
          );
        } else {
          updateTypedCode(
            beforeCursor.slice(0, -1) + afterCursor,
            Math.max(0, safeIdx - 1)
          );
        }
      }
      return;
    }

    // Delete -> delete char after cursor
    if (e.key === 'Delete') {
      e.preventDefault();
      if (cursorIndex < typedCode.length) {
        const safeIdx = Math.max(0, Math.min(cursorIndex, typedCode.length));
        updateTypedCode(
          typedCode.slice(0, safeIdx) + typedCode.slice(safeIdx + 1),
          safeIdx
        );
      }
      return;
    }

    // Printable ASCII character
    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      const safeIdx = Math.max(0, Math.min(cursorIndex, typedCode.length));
      const nextCode = typedCode.slice(0, safeIdx) + e.key + typedCode.slice(safeIdx);
      updateTypedCode(nextCode, safeIdx + 1);
    }
  };

  const personalBest = bestRecords[currentSnippet.id];

  return (
    <div className="code-typing-studio">
      <style>{`
        .code-typing-studio {
          width: 100%;
          height: calc(100vh - 70px);
          display: grid;
          grid-template-columns: 340px minmax(0, 1fr);
          background: #e2eff6;
          color: #0f172a;
          overflow: hidden;
        }
        @media (max-width: 960px) {
          .code-typing-studio {
            height: auto;
            min-height: calc(100vh - 70px);
            grid-template-columns: 1fr;
            overflow: visible;
          }
        }
      `}</style>

      {/* ====================================================================
          LEFT PANEL (340px): Compact Language Selector, Live Stats & Playlist
          ==================================================================== */}
      <aside
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          background: '#f8fafc',
          borderRight: '1.5px solid #cbd5e1',
          overflow: 'hidden',
        }}
      >
        {/* 1. Compact Studio Title & Ranking Shortcut */}
        <div
          style={{
            height: '48px',
            padding: '0 16px',
            background: '#ffffff',
            borderBottom: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1.05rem' }}>⌨️</span>
            <span style={{ fontSize: '0.98rem', fontWeight: 900, letterSpacing: '-0.3px', color: '#0f172a' }}>
              {isKo ? '코드타자' : 'Code Typing'}
            </span>
          </div>

          <Link
            href="/ranking?tab=speed"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              padding: '5px 10px',
              borderRadius: '8px',
              background: '#fffbeb',
              border: '1px solid #fcd34d',
              color: '#d97706',
              fontSize: '0.75rem',
              fontWeight: 800,
              textDecoration: 'none',
            }}
          >
            <Trophy size={13} />
            <span>{isKo ? '타수 랭킹' : 'Ranking'}</span>
          </Link>
        </div>

        {/* 2. Language Filter Grid (Fixed 2px border -> zero click wobble) */}
        <div
          style={{
            padding: '12px 14px',
            borderBottom: '1px solid #e2e8f0',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '6px',
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
                    padding: '6px 6px',
                    borderRadius: '9px',
                    boxSizing: 'border-box',
                    outline: 'none',
                    border: active
                      ? `2px solid ${langTab.color}`
                      : '2px solid #cbd5e1',
                    background: active ? `${langTab.color}16` : '#ffffff',
                    color: active ? langTab.color : '#475569',
                    fontSize: '0.76rem',
                    fontWeight: active ? 800 : 600,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px',
                    whiteSpace: 'nowrap',
                    transition: 'background-color 0.15s ease, border-color 0.15s ease',
                  }}
                >
                  <span>{langTab.badge}</span>
                  <span>{isKo ? langTab.labelKo : langTab.labelEn}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Live 2x2 Speed & Accuracy Dashboard */}
        <div
          style={{
            padding: '12px 14px',
            borderBottom: '1px solid #e2e8f0',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '8px',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              background: '#ffffff',
              border: '1.5px solid rgba(2, 132, 199, 0.28)',
              borderRadius: '12px',
              padding: '10px 12px',
              boxShadow: '0 2px 6px rgba(15, 23, 42, 0.03)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#64748b', fontSize: '0.72rem', fontWeight: 700 }}>
              <span>{isKo ? '현재 타수' : 'Speed'}</span>
              <Gauge size={13} color="#0284c7" />
            </div>
            <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#0284c7', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>
              {stats.cpm}
              <span style={{ fontSize: '0.72rem', color: '#64748b', marginLeft: '3px' }}>CPM</span>
            </div>
          </div>

          <div
            style={{
              background: '#ffffff',
              border: '1.5px solid rgba(5, 150, 105, 0.28)',
              borderRadius: '12px',
              padding: '10px 12px',
              boxShadow: '0 2px 6px rgba(15, 23, 42, 0.03)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#64748b', fontSize: '0.72rem', fontWeight: 700 }}>
              <span>{isKo ? '정확도' : 'Accuracy'}</span>
              <Target size={13} color="#059669" />
            </div>
            <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#059669', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>
              {stats.accuracy}
              <span style={{ fontSize: '0.72rem', color: '#64748b', marginLeft: '2px' }}>%</span>
            </div>
          </div>

          <div
            style={{
              background: '#ffffff',
              border: '1.5px solid rgba(124, 58, 237, 0.26)',
              borderRadius: '12px',
              padding: '10px 12px',
              boxShadow: '0 2px 6px rgba(15, 23, 42, 0.03)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#64748b', fontSize: '0.72rem', fontWeight: 700 }}>
              <span>{isKo ? '경과 시간' : 'Time'}</span>
              <Timer size={13} color="#7c3aed" />
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#7c3aed', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>
              {elapsedSec.toFixed(1)}s
            </div>
          </div>

          <div
            style={{
              background: '#ffffff',
              border: '1.5px solid rgba(217, 119, 6, 0.3)',
              borderRadius: '12px',
              padding: '10px 12px',
              boxShadow: '0 2px 6px rgba(15, 23, 42, 0.03)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#64748b', fontSize: '0.72rem', fontWeight: 700 }}>
              <span>{isKo ? '내 최고 기록' : 'Best'}</span>
              <Trophy size={13} color="#d97706" />
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#d97706', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>
              {personalBest ? `${personalBest.best_cpm}` : '-'}
              {personalBest && (
                <span style={{ fontSize: '0.7rem', color: '#64748b', marginLeft: '3px' }}>CPM</span>
              )}
            </div>
          </div>
        </div>

        {/* 4. Current Snippet Summary & Rotation Controls */}
        <div
          style={{
            padding: '12px 14px',
            background: '#ffffff',
            borderBottom: '1px solid #e2e8f0',
            flexShrink: 0,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
            <span
              style={{
                padding: '2px 8px',
                borderRadius: '6px',
                background: 'rgba(8, 145, 178, 0.12)',
                color: '#0891b2',
                fontSize: '0.7rem',
                fontWeight: 800,
              }}
            >
              {currentSnippet.languageLabel}
            </span>
            <span style={{ fontSize: '0.74rem', color: '#64748b', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
              {(snippetIndex % pool.length) + 1} / {pool.length}
            </span>
          </div>

          <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
            {isKo ? currentSnippet.titleKo : currentSnippet.titleEn}
          </div>
          <div style={{ fontSize: '0.76rem', color: '#475569', lineHeight: 1.4, marginBottom: '10px' }}>
            {isKo ? currentSnippet.descKo : currentSnippet.descEn}
          </div>

          {/* Progress Bar */}
          <div style={{ height: '6px', borderRadius: '3px', background: '#e2e8f0', overflow: 'hidden', marginBottom: '10px' }}>
            <div
              style={{
                width: `${stats.progress}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #0891b2, #10b981)',
                transition: 'width 0.08s linear',
              }}
            />
          </div>

          {/* Rotation Toolbar */}
          <div style={{ display: 'grid', gridTemplateColumns: '34px 1fr 1fr 34px', gap: '6px' }}>
            <button
              type="button"
              onClick={rotatePrev}
              title={isKo ? '이전 예제' : 'Previous'}
              style={{
                height: '32px',
                borderRadius: '8px',
                background: '#f8fafc',
                border: '1px solid #cbd5e1',
                color: '#334155',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ChevronLeft size={15} />
            </button>

            <button
              type="button"
              onClick={rotateRandom}
              style={{
                height: '32px',
                borderRadius: '8px',
                background: 'rgba(8, 145, 178, 0.12)',
                border: '1px solid rgba(8, 145, 178, 0.35)',
                color: '#0891b2',
                fontSize: '0.76rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
              }}
            >
              <Shuffle size={13} />
              <span>{isKo ? '랜덤' : 'Random'}</span>
            </button>

            <button
              type="button"
              onClick={resetTypingState}
              style={{
                height: '32px',
                borderRadius: '8px',
                background: '#f8fafc',
                border: '1px solid #cbd5e1',
                color: '#334155',
                fontSize: '0.76rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
              }}
            >
              <RotateCcw size={13} />
              <span>{isKo ? '초기화' : 'Reset'}</span>
            </button>

            <button
              type="button"
              onClick={rotateNext}
              title={isKo ? '다음 예제' : 'Next'}
              style={{
                height: '32px',
                borderRadius: '8px',
                background: '#f8fafc',
                border: '1px solid #cbd5e1',
                color: '#334155',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>

        {/* 5. Scrollable Snippet Playlist */}
        <div
          style={{
            flex: '1 1 auto',
            minHeight: 0,
            overflowY: 'auto',
            padding: '10px 12px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          {pool.map((snip, idx) => {
            const isCurrentItem = snip.id === currentSnippet.id;
            const rec = bestRecords[snip.id];
            return (
              <button
                key={snip.id}
                type="button"
                onClick={() => setSnippetIndex(idx)}
                style={{
                  width: '100%',
                  padding: '8px 10px',
                  borderRadius: '10px',
                  boxSizing: 'border-box',
                  outline: 'none',
                  textAlign: 'left',
                  background: isCurrentItem
                    ? 'rgba(8, 145, 178, 0.12)'
                    : '#ffffff',
                  border: isCurrentItem
                    ? '2px solid #0891b2'
                    : '2px solid #e2e8f0',
                  color: isCurrentItem ? '#0f172a' : '#334155',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '8px',
                  transition: 'background-color 0.15s ease, border-color 0.15s ease',
                }}
              >
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div
                    style={{
                      fontSize: '0.79rem',
                      fontWeight: isCurrentItem ? 800 : 600,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span style={{ color: isCurrentItem ? '#0891b2' : '#64748b', fontFamily: 'var(--font-mono)', marginRight: '6px' }}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    {isKo ? snip.titleKo : snip.titleEn}
                  </div>
                </div>
                {rec && (
                  <span
                    style={{
                      flexShrink: 0,
                      fontSize: '0.68rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 800,
                      padding: '2px 6px',
                      borderRadius: '6px',
                      background: 'rgba(16, 185, 129, 0.14)',
                      color: '#059669',
                    }}
                  >
                    {rec.best_cpm}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </aside>

      {/* ====================================================================
          RIGHT PANEL (1fr): Light Editorial 2-Layer IDE Stage + VirtualKeyboard
          ==================================================================== */}
      <section
        onClick={handleStageClick}
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          background: '#ffffff',
          overflow: 'hidden',
          cursor: 'text',
          position: 'relative',
        }}
      >
        {/* Invisible textarea capturing keystrokes & IME composition */}
        <textarea
          ref={hiddenInputRef}
          defaultValue=""
          onChange={handleInputChange}
          onCompositionStart={handleCompositionStart}
          onCompositionUpdate={handleCompositionUpdate}
          onCompositionEnd={handleCompositionEnd}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onPaste={(e) => e.preventDefault()}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          autoFocus
          aria-label="Code typing editor input"
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

        {/* 1. IDE File Tab Bar */}
        <div
          style={{
            height: '38px',
            background: '#f1f5f9',
            borderBottom: '1.5px solid #cbd5e1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 16px',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 14px',
              background: '#ffffff',
              borderRadius: '8px 8px 0 0',
              borderTop: isCompleted ? '2.5px solid #10b981' : '2.5px solid #0891b2',
              borderLeft: '1px solid #cbd5e1',
              borderRight: '1px solid #cbd5e1',
              fontSize: '0.78rem',
              color: '#0f172a',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
              marginBottom: '-1.5px',
            }}
          >
            <Code2 size={13} color={isCompleted ? '#059669' : '#0891b2'} />
            <span>{currentSnippet.fileName}</span>
            {isCompleted && (
              <span style={{ fontSize: '0.74rem', color: '#059669', fontWeight: 800, marginLeft: '6px' }}>
                {isKo ? '✓ 완주' : '✓ Done'}
              </span>
            )}
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '0.76rem',
              color: '#64748b',
              fontFamily: 'var(--font-mono)',
            }}
          >
            {!isFocused && !isCompleted && (
              <span style={{ color: '#0284c7', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>
                {isKo ? '클릭하여 타이핑 계속하기' : 'Click editor to resume typing'}
              </span>
            )}
            <span>
              Ln {String(cursorLine + 1).padStart(2, '0')}/{String(targetLines.length).padStart(2, '0')} · {stats.progress}%
            </span>
          </div>
        </div>

        {/* 2. Upper Area: Line Gutter + True 2-Layer Ghost/User Code Surface */}
        <div
          style={{
            flex: '1 1 auto',
            minHeight: 0,
            overflowY: 'auto',
            padding: '20px 0 28px',
            background: '#ffffff',
            fontFamily: 'var(--font-mono), monospace',
            fontVariantLigatures: 'none',
            fontFeatureSettings: '"liga" 0, "calt" 0',
            fontSize: '1.22rem',
            lineHeight: 1.85,
            color: '#0f172a',
            position: 'relative',
          }}
        >
          {lineIndices.map((lineIdx) => {
            const targetLineText = targetLines[lineIdx] || '';
            const userLineText = userLines[lineIdx] !== undefined ? userLines[lineIdx] : null;
            const isCursorOnThisLine = !isCompleted && cursorLine === lineIdx;
            const rowBg = isCursorOnThisLine ? '#f0f9ff' : '#ffffff';

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
                  background: rowBg,
                  borderLeft: isCursorOnThisLine
                    ? '3px solid #0891b2'
                    : '3px solid transparent',
                  minHeight: '38px',
                  cursor: 'text',
                }}
              >
                {/* Gutter: Line Number */}
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setCursorIndex(getIndexFromLineAndCol(lineIdx, 0));
                    hiddenInputRef.current?.focus();
                  }}
                  style={{
                    width: '54px',
                    minWidth: '54px',
                    alignSelf: 'stretch',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    paddingRight: '14px',
                    userSelect: 'none',
                    background: isCursorOnThisLine ? '#e0f2fe' : '#f8fafc',
                    borderRight: '1px solid #e2e8f0',
                    color: isCursorOnThisLine ? '#0284c7' : '#94a3b8',
                    fontSize: '0.86rem',
                    fontWeight: isCursorOnThisLine ? 800 : 600,
                    cursor: 'pointer',
                  }}
                >
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
                    letterSpacing: 'normal',
                    display: 'flex',
                    alignItems: 'center',
                    whiteSpace: 'pre',
                  }}
                >
                  {/* Layer 1 (Bottom): Soft Slate Ghost Example Code (never pre-lights character 0) */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      const maxCol = (userLines[lineIdx] || '').length;
                      setCursorIndex(getIndexFromLineAndCol(lineIdx, maxCol));
                      hiddenInputRef.current?.focus();
                    }}
                    style={{
                      color: 'rgba(15, 23, 42, 0.28)',
                      userSelect: 'none',
                      whiteSpace: 'pre',
                      fontFamily: 'inherit',
                      fontSize: 'inherit',
                      lineHeight: 'inherit',
                      letterSpacing: 'inherit',
                      cursor: 'text',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {targetLineText || ' '}
                  </div>

                  {/* Layer 2 (Top): User Real-time Typed Code Overlay + Blinking Caret */}
                  {userLineText !== null && (() => {
                    const lineTokens = tokenizeCodeLine(userLineText, currentSnippet.language);
                    const completedTokens = lineTokens.filter(
                      (t) => userLineText.length >= t.end
                    );

                    return (
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
                        {userLineText.split('').map((userChar, colIdx) => {
                          const isCursorHere =
                            isFocused && isCursorOnThisLine && cursorCol === colIdx;
                          const token = completedTokens.find(
                            (t) => colIdx >= t.start && colIdx < t.end
                          );
                          const syntaxColor = token
                            ? VSCODE_LIGHT_PLUS[token.type] || VSCODE_LIGHT_PLUS.default
                            : VSCODE_LIGHT_PLUS.default;

                          const targetChar = targetLineText[colIdx];
                          const isCharError =
                            targetChar === undefined || userChar !== targetChar;

                          return (
                            <React.Fragment key={colIdx}>
                              {isCursorHere && (
                                <span
                                  style={{
                                    display: 'inline-block',
                                    width: '2px',
                                    height: '1.25em',
                                    background: '#0284c7',
                                    boxShadow: '0 0 5px rgba(2, 132, 199, 0.45)',
                                    animation: 'ideCursorBlink 1s step-end infinite',
                                    verticalAlign: 'middle',
                                    margin: '0 -1px',
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
                                  color: isCharError ? VSCODE_LIGHT_PLUS.error : syntaxColor,
                                  background: isCharError ? '#fee2e2' : rowBg,
                                  fontWeight:
                                    token &&
                                    (token.type === 'keyword' || token.type === 'builtin')
                                      ? 700
                                      : 600,
                                  borderRadius: '2px',
                                  cursor: 'text',
                                }}
                              >
                                {userChar}
                              </span>
                            </React.Fragment>
                          );
                        })}

                        {/* Blinking Caret at End of Typed Line (including col 0 before typing) */}
                        {isFocused &&
                          isCursorOnThisLine &&
                          cursorCol >= userLineText.length && (
                            <span
                              style={{
                                display: 'inline-block',
                                width: '2px',
                                height: '1.25em',
                                background: '#0284c7',
                                boxShadow: '0 0 5px rgba(2, 132, 199, 0.45)',
                                animation: 'ideCursorBlink 1s step-end infinite',
                                verticalAlign: 'middle',
                                marginLeft: userLineText.length === 0 ? '0px' : '-1px',
                                position: 'relative',
                                zIndex: 10,
                              }}
                            />
                          )}

                        {/* End-of-line Newline (↵) Guide */}
                        {isCursorOnThisLine &&
                          lineIdx < targetLines.length - 1 &&
                          userLineText.length >= targetLineText.length && (
                            <span
                              style={{
                                color: '#0284c7',
                                fontSize: '0.85em',
                                marginLeft: '4px',
                                userSelect: 'none',
                                fontWeight: 800,
                              }}
                            >
                              ↵
                            </span>
                          )}
                      </div>
                    );
                  })()}
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Completion Result Dock inside Editor Pane */}
        {isCompleted && (
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              margin: '0 20px 12px',
              background: '#f0fdf4',
              border: '2px solid #10b981',
              borderRadius: '16px',
              padding: '14px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '14px',
              boxShadow: '0 10px 28px -4px rgba(15, 23, 42, 0.12)',
              flexShrink: 0,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: '#dcfce7',
                  border: '1.5px solid #10b981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <CheckCircle2 size={22} color="#059669" />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '1rem', fontWeight: 900, color: '#0f172a' }}>
                    {isKo ? '예제 완주 성공!' : 'Snippet Complete!'}
                  </span>
                  {isNewRecord && (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '2px 8px',
                        borderRadius: '8px',
                        background: '#fffbeb',
                        border: '1px solid #fcd34d',
                        color: '#d97706',
                        fontSize: '0.7rem',
                        fontWeight: 800,
                      }}
                    >
                      <Sparkles size={11} />
                      {isKo ? '최고 기록 경신!' : 'NEW BEST!'}
                    </span>
                  )}
                </div>
                <div style={{ fontSize: '0.82rem', color: '#334155', marginTop: '2px', fontWeight: 600 }}>
                  {isKo
                    ? `최종 타수 ${stats.cpm} CPM · 정확도 ${stats.accuracy}% · 소요 시간 ${elapsedSec.toFixed(1)}초`
                    : `${stats.cpm} CPM · ${stats.accuracy}% Accuracy · ${elapsedSec.toFixed(1)}s`}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                onClick={resetTypingState}
                style={{
                  padding: '9px 14px',
                  borderRadius: '10px',
                  background: '#ffffff',
                  border: '1.5px solid #cbd5e1',
                  color: '#334155',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <RotateCcw size={14} />
                <span>{isKo ? '다시 치기' : 'Retry'}</span>
              </button>

              <button
                type="button"
                onClick={rotateNext}
                className="tactile-btn tactile-btn-primary"
                style={{
                  padding: '9px 16px',
                  borderRadius: '10px',
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span>{isKo ? '다음 예제 (Enter)' : 'Next (Enter)'}</span>
                <ChevronRight size={15} />
              </button>
            </div>
          </div>
        )}

        {/* 3. Lower Area: Compact Virtual Keyboard Dock (Light Mechanical Theme) */}
        <div
          style={{
            flex: '0 0 auto',
            padding: '8px 20px 14px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#e2eff6',
            borderTop: '1.5px solid #cbd5e1',
          }}
        >
          <div style={{ width: '100%', maxWidth: 'clamp(700px, 66vw, 960px)' }}>
            <VirtualKeyboard nextChar={nextChar} theme="light" />
          </div>
        </div>
      </section>
    </div>
  );
}
