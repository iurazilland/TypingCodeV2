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
  language?: 'ko' | 'en';
}

// ============================================================================
// Lightweight Python Syntax Highlighter (VSCode Dark+ Theme)
// ============================================================================
// Standard VS Code Dark+ Python Syntax Color Palette (Global Developer Standard)
// ============================================================================
export const VSCODE_DARK_PLUS = {
  keyword: '#c586c0',     // Soft Purple: def, return, if, elif, else, for, while, in, etc.
  constant: '#569cd6',    // Control Blue: True, False, None
  builtin: '#dcdcaa',     // Soft Yellow: print, range, len, int, str, sum, input, etc.
  string: '#ce9178',      // Warm Terracotta/Coral: string literals & inner content
  number: '#b5cea8',      // Sage Mint Green: numbers (10, 3.14)
  comment: '#6a9955',     // Python Green: # comments
  operator: '#d4d4d4',    // Light Gray: operators (+, -, *, /, =, :, etc.)
  bracket: '#ffd700',     // VS Code Gold Bracket: (), [], {}
  identifier: '#ffffff',  // Pure Crisp White: variable names & parameters
  default: '#ffffff',     // Pure Crisp White: default text & typing characters
  error: '#ef4444',       // Vivid Red: mismatched/error characters
};

export interface PythonToken {
  start: number;
  end: number;
  type: 'keyword' | 'constant' | 'builtin' | 'string' | 'number' | 'comment' | 'operator' | 'bracket' | 'identifier' | 'default';
  text: string;
}

const PYTHON_KEYWORDS = new Set([
  'def', 'return', 'if', 'elif', 'else', 'for', 'while', 'in', 'is', 'not', 'and', 'or',
  'import', 'from', 'as', 'class', 'try', 'except', 'finally', 'raise', 'break', 'continue',
  'pass', 'lambda', 'yield', 'with', 'global', 'assert'
]);

const PYTHON_CONSTANTS = new Set([
  'True', 'False', 'None'
]);

const PYTHON_BUILTINS = new Set([
  'print', 'input', 'range', 'len', 'int', 'str', 'float', 'list', 'dict', 'set', 'tuple',
  'type', 'sum', 'min', 'max', 'abs', 'round', 'open', 'enumerate', 'zip', 'map', 'filter',
  'sorted', 'reversed', 'format', 'append', 'pop', 'insert', 'remove'
]);

/**
 * Tokenizes a single line of Python code into discrete tokens with exact start/end indices.
 * Strings (like "print" inside print("print")) are parsed as continuous string literals,
 * ensuring inner words are not mistakenly highlighted as functions or keywords.
 */
export function tokenizePythonLine(line: string): PythonToken[] {
  const tokens: PythonToken[] = [];
  let i = 0;

  while (i < line.length) {
    const ch = line[i];

    // 1. Skip whitespace
    if (/\s/.test(ch)) {
      i++;
      continue;
    }

    // 2. Comments: # to end of line
    if (ch === '#') {
      tokens.push({
        start: i,
        end: line.length,
        type: 'comment',
        text: line.slice(i),
      });
      break;
    }

    // 3. Triple Quotes: """ or '''
    if (
      (ch === '"' && line.slice(i, i + 3) === '"""') ||
      (ch === "'" && line.slice(i, i + 3) === "'''")
    ) {
      const delimiter = line.slice(i, i + 3);
      const start = i;
      i += 3;
      while (i < line.length && line.slice(i, i + 3) !== delimiter) {
        if (line[i] === '\\' && i + 1 < line.length) {
          i += 2;
        } else {
          i++;
        }
      }
      if (i < line.length && line.slice(i, i + 3) === delimiter) {
        i += 3;
      }
      tokens.push({
        start,
        end: i,
        type: 'string',
        text: line.slice(start, i),
      });
      continue;
    }

    // 4. Strings: "..." or '...'
    if (ch === '"' || ch === "'") {
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
      if (i < line.length && line[i] === quote) {
        i++;
      }
      tokens.push({
        start,
        end: i,
        type: 'string',
        text: line.slice(start, i),
      });
      continue;
    }

    // 5. Numbers
    if (/\d/.test(ch)) {
      const start = i;
      while (i < line.length && /[\d.]/.test(line[i])) {
        i++;
      }
      tokens.push({
        start,
        end: i,
        type: 'number',
        text: line.slice(start, i),
      });
      continue;
    }

    // 6. Words: Keywords, Builtins, Constants, Identifiers
    if (/[a-zA-Z_]/.test(ch)) {
      const start = i;
      while (i < line.length && /[a-zA-Z0-9_]/.test(line[i])) {
        i++;
      }
      const word = line.slice(start, i);

      // Check for f-string prefix (e.g. f"...")
      if (word === 'f' && i < line.length && (line[i] === '"' || line[i] === "'")) {
        tokens.push({
          start,
          end: start + 1,
          type: 'keyword',
          text: 'f',
        });
        continue;
      }

      let type: PythonToken['type'] = 'identifier';
      if (PYTHON_KEYWORDS.has(word)) {
        type = 'keyword';
      } else if (PYTHON_CONSTANTS.has(word)) {
        type = 'constant';
      } else if (PYTHON_BUILTINS.has(word)) {
        type = 'builtin';
      }

      tokens.push({
        start,
        end: i,
        type,
        text: word,
      });
      continue;
    }

    // 7. Brackets
    if (/[()[\]{}]/.test(ch)) {
      tokens.push({
        start: i,
        end: i + 1,
        type: 'bracket',
        text: ch,
      });
      i++;
      continue;
    }

    // 8. Operators and punctuation
    if (/[:=+\-*/%<>&|^~!,.]/.test(ch)) {
      const start = i;
      while (i < line.length && /[:=+\-*/%<>&|^~!,.]/.test(line[i])) {
        i++;
      }
      tokens.push({
        start,
        end: i,
        type: 'operator',
        text: line.slice(start, i),
      });
      continue;
    }

    // Fallback
    i++;
  }

  return tokens;
}

interface LineSegment {
  type: 'fixed' | 'blank';
  templateText: string;
  targetText: string;
  widthCh: number;
}

interface MappedLineSegment extends LineSegment {
  userStart: number;
  userEnd: number;
  userText: string;
}

function buildLineSegments(targetLineText: string, answerLineText: string): LineSegment[] {
  const matches = Array.from(targetLineText.matchAll(/§+/g));
  if (matches.length === 0) {
    return [
      {
        type: 'fixed',
        templateText: targetLineText,
        targetText: targetLineText,
        widthCh: targetLineText.length,
      },
    ];
  }
  const fixedParts = targetLineText.split(/§+/);
  const segments: LineSegment[] = [];
  let tPos = 0;

  for (let i = 0; i < matches.length; i++) {
    const fixed = fixedParts[i];
    if (fixed.length > 0) {
      segments.push({
        type: 'fixed',
        templateText: fixed,
        targetText: fixed,
        widthCh: fixed.length,
      });
      tPos += fixed.length;
    }

    const blankStr = matches[i][0];
    const blankLen = blankStr.length;
    const expectedAnsLen = Math.max(1, blankLen - 1);
    const nextFixed = fixedParts[i + 1];
    let endIdx: number;
    if (i === matches.length - 1) {
      endIdx = Math.max(tPos, answerLineText.length - nextFixed.length);
    } else {
      if (
        answerLineText.slice(tPos + expectedAnsLen, tPos + expectedAnsLen + nextFixed.length) ===
        nextFixed
      ) {
        endIdx = tPos + expectedAnsLen;
      } else {
        const foundIdx = answerLineText.indexOf(nextFixed, tPos);
        endIdx =
          foundIdx !== -1 ? foundIdx : Math.min(answerLineText.length, tPos + expectedAnsLen);
      }
    }
    const targetBlank = answerLineText.slice(tPos, endIdx);
    segments.push({
      type: 'blank',
      templateText: blankStr,
      targetText: targetBlank,
      widthCh: blankLen,
    });
    tPos = endIdx;
  }

  const lastFixed = fixedParts[matches.length];
  if (lastFixed.length > 0) {
    segments.push({
      type: 'fixed',
      templateText: lastFixed,
      targetText: lastFixed,
      widthCh: lastFixed.length,
    });
  }

  return segments;
}

function isBalancedExpression(str: string): boolean {
  let inSingle = false;
  let inDouble = false;
  let depth = 0;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch === '\\') {
      i++;
      continue;
    }
    if (ch === "'" && !inDouble) inSingle = !inSingle;
    else if (ch === '"' && !inSingle) inDouble = !inDouble;
    else if (!inSingle && !inDouble) {
      if (ch === '(' || ch === '[' || ch === '{') depth++;
      else if (ch === ')' || ch === ']' || ch === '}') {
        depth--;
        if (depth < 0) return false;
      }
    }
  }
  return !inSingle && !inDouble && depth === 0;
}

function mapUserLineToSegments(
  segments: LineSegment[],
  userLineText: string
): MappedLineSegment[] {
  const result: MappedLineSegment[] = [];
  let uPos = 0;
  const norm = (s: string) => s.replace(/\s+/g, '');

  for (let sIdx = 0; sIdx < segments.length; sIdx++) {
    const seg = segments[sIdx];
    const isLast = sIdx === segments.length - 1;

    if (seg.type === 'fixed') {
      const uEnd = isLast
        ? userLineText.length
        : Math.min(userLineText.length, uPos + seg.templateText.length);
      result.push({
        ...seg,
        userStart: uPos,
        userEnd: uEnd,
        userText: userLineText.slice(uPos, uEnd),
      });
      uPos = uEnd;
    } else {
      if (isLast) {
        const uEnd = userLineText.length;
        result.push({
          ...seg,
          userStart: uPos,
          userEnd: uEnd,
          userText: userLineText.slice(uPos, uEnd),
        });
        uPos = uEnd;
      } else {
        const nextFixed = segments[sIdx + 1].templateText;
        const targetBlank = seg.targetText;
        const targetNormLen = norm(targetBlank).length;
        const targetBalanced = isBalancedExpression(targetBlank);

        let splitIdx = userLineText.length;
        for (let idx = uPos + 1; idx < userLineText.length; idx++) {
          const candidate = userLineText.slice(uPos, idx);
          if (targetBalanced && !isBalancedExpression(candidate)) {
            continue;
          }
          const candNormLen = norm(candidate).length;
          if (candNormLen === 0) {
            continue;
          }
          const nextChar = userLineText[idx];

          if (nextChar !== nextFixed[0]) {
            continue;
          }

          if (
            nextChar === ')' ||
            nextChar === ']' ||
            nextChar === '}' ||
            !targetBlank.includes(nextChar)
          ) {
            splitIdx = idx;
            break;
          }

          if (candNormLen >= targetNormLen || candidate.length >= targetBlank.length) {
            splitIdx = idx;
            break;
          }

          const trimmedCand = candidate.trimEnd();
          const hasDanglingToken = /[,:+\-*/%]$/.test(trimmedCand);
          if (
            !hasDanglingToken &&
            nextFixed.length >= 2 &&
            userLineText.slice(idx).startsWith(nextFixed.slice(0, 2))
          ) {
            splitIdx = idx;
            break;
          }
        }

        result.push({
          ...seg,
          userStart: uPos,
          userEnd: splitIdx,
          userText: userLineText.slice(uPos, splitIdx),
        });
        uPos = splitIdx;
      }
    }
  }

  return result;
}

function getCursorOwner(
  mappedSegments: MappedLineSegment[],
  cursorCol: number
): { segIdx: number; offsetInSeg: number } {
  for (let i = 0; i < mappedSegments.length; i++) {
    const seg = mappedSegments[i];
    if (seg.type === 'blank') {
      if (cursorCol >= seg.userStart && cursorCol <= seg.userEnd) {
        return { segIdx: i, offsetInSeg: cursorCol - seg.userStart };
      }
    } else {
      const minCol =
        i > 0 && mappedSegments[i - 1].type === 'blank' ? seg.userStart + 1 : seg.userStart;
      const isIncomplete = seg.userText.length < seg.templateText.length;
      const ownsEnd =
        isIncomplete || i === mappedSegments.length - 1 || mappedSegments[i + 1].type !== 'blank';
      const maxCol = ownsEnd ? seg.userEnd : seg.userEnd - 1;
      if (cursorCol >= minCol && cursorCol <= maxCol) {
        return { segIdx: i, offsetInSeg: cursorCol - seg.userStart };
      }
      if (isIncomplete) {
        return {
          segIdx: i,
          offsetInSeg: Math.max(0, Math.min(cursorCol - seg.userStart, seg.userText.length)),
        };
      }
    }
  }
  const lastIdx = mappedSegments.length - 1;
  return { segIdx: lastIdx, offsetInSeg: mappedSegments[lastIdx].userText.length };
}

export default function TypingStage({
  question,
  onCodeChange,
  onSubmit,
  isSuccess,
  isExecuting,
  isDebugging = false,
  executingLineIndex = null,
  language = 'ko',
}: TypingStageProps) {
  const isEn = language === 'en';
  const targetCode = (question.targetCode || '').replace(/\r\n/g, '\n');
  const templateCode = (question.templateCode || '').replace(/\r\n/g, '\n');
  const guideCode = templateCode || targetCode;

  // User's typed code text and cursor position
  const [typedCode, setTypedCode] = useState<string>('');
  const [cursorIndex, setCursorIndex] = useState<number>(0);
  const [showPasteNotice, setShowPasteNotice] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const hiddenInputRef = useRef<HTMLTextAreaElement>(null);
  const pasteNoticeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const triggerPasteBlockedNotice = () => {
    if (pasteNoticeTimerRef.current) {
      clearTimeout(pasteNoticeTimerRef.current);
    }
    setShowPasteNotice(true);
    pasteNoticeTimerRef.current = setTimeout(() => {
      setShowPasteNotice(false);
      pasteNoticeTimerRef.current = null;
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (pasteNoticeTimerRef.current) {
        clearTimeout(pasteNoticeTimerRef.current);
      }
    };
  }, []);

  // IME (Korean/CJK) composition tracking
  const composingStartIndexRef = useRef<number | null>(null);
  const lastComposingLenRef = useRef<number>(0);

  // Undo / Redo history tracking (Ctrl+Z / Ctrl+Shift+Z / Ctrl+Y)
  const undoStackRef = useRef<Array<{ code: string; cursor: number }>>([]);
  const redoStackRef = useRef<Array<{ code: string; cursor: number }>>([]);
  const lastHistoryActionRef = useRef<'insert' | 'delete' | 'other' | null>(null);
  const lastHistoryTimeRef = useRef<number>(0);

  const recordUndoSnapshot = (
    action: 'insert' | 'delete' | 'other',
    forceNewGroup = false
  ) => {
    const now = Date.now();
    const shouldGroup =
      !forceNewGroup &&
      action !== 'other' &&
      lastHistoryActionRef.current === action &&
      now - lastHistoryTimeRef.current < 1200;

    if (!shouldGroup) {
      undoStackRef.current.push({ code: typedCode, cursor: cursorIndex });
      if (undoStackRef.current.length > 100) {
        undoStackRef.current.shift();
      }
    }
    redoStackRef.current = [];
    lastHistoryActionRef.current = action;
    lastHistoryTimeRef.current = now;
  };

  const onCodeChangeRef = useRef(onCodeChange);
  useEffect(() => {
    onCodeChangeRef.current = onCodeChange;
  });

  // Reset when question changes
  useEffect(() => {
    setTypedCode('');
    setCursorIndex(0);
    setShowPasteNotice(false);
    composingStartIndexRef.current = null;
    lastComposingLenRef.current = 0;
    undoStackRef.current = [];
    redoStackRef.current = [];
    lastHistoryActionRef.current = null;
    lastHistoryTimeRef.current = 0;
    if (hiddenInputRef.current) {
      hiddenInputRef.current.value = '';
    }
    onCodeChangeRef.current('');
    setTimeout(() => {
      hiddenInputRef.current?.focus();
    }, 50);
  }, [question.id]);

  // Sync typed code upward
  useEffect(() => {
    onCodeChangeRef.current(typedCode);
  }, [typedCode]);

  // Focus input on click anywhere in editor
  const handleStageClick = () => {
    composingStartIndexRef.current = null;
    lastComposingLenRef.current = 0;
    lastHistoryActionRef.current = null;
    if (hiddenInputRef.current) {
      hiddenInputRef.current.value = '';
    }
    hiddenInputRef.current?.focus();
  };

  // IME Handlers: Support native Korean / multilingual character composition
  const handleCompositionStart = () => {
    recordUndoSnapshot('insert', true);
    composingStartIndexRef.current = cursorIndex;
    lastComposingLenRef.current = 0;
  };

  const handleCompositionUpdate = (e: React.CompositionEvent<HTMLTextAreaElement>) => {
    const composingText = e.data;
    if (!composingText) return;

    if (composingStartIndexRef.current === null) {
      composingStartIndexRef.current = cursorIndex;
      lastComposingLenRef.current = 0;
    }

    const startIdx = composingStartIndexRef.current;
    const lenToReplace = lastComposingLenRef.current;

    setTypedCode((prev) => {
      const safeStart = Math.max(0, Math.min(startIdx, prev.length));
      return prev.slice(0, safeStart) + composingText + prev.slice(safeStart + lenToReplace);
    });

    setCursorIndex(startIdx + composingText.length);
    lastComposingLenRef.current = composingText.length;
  };

  const handleCompositionEnd = (e: React.CompositionEvent<HTMLTextAreaElement>) => {
    const finalData = e.data;
    if (finalData && composingStartIndexRef.current !== null) {
      const startIdx = composingStartIndexRef.current;
      const lenToReplace = lastComposingLenRef.current;
      setTypedCode((prev) => {
        const safeStart = Math.max(0, Math.min(startIdx, prev.length));
        return prev.slice(0, safeStart) + finalData + prev.slice(safeStart + lenToReplace);
      });
      setCursorIndex(startIdx + finalData.length);
    }
    composingStartIndexRef.current = null;
    lastComposingLenRef.current = 0;
    if (hiddenInputRef.current) {
      hiddenInputRef.current.value = '';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    if (val && composingStartIndexRef.current === null) {
      const inputType = (e.nativeEvent as InputEvent).inputType || '';
      if (
        inputType === 'insertFromPaste' ||
        inputType === 'insertFromDrop' ||
        inputType === 'insertFromYank' ||
        Array.from(val).length > 1
      ) {
        e.target.value = '';
        triggerPasteBlockedNotice();
        return;
      }
      recordUndoSnapshot('insert', /[\s()[\]{}:,.;=+\-*/%]/.test(val));
      setTypedCode((prev) => {
        const safeIdx = Math.max(0, Math.min(cursorIndex, prev.length));
        return prev.slice(0, safeIdx) + val + prev.slice(safeIdx);
      });
      setCursorIndex((prev) => prev + val.length);
      e.target.value = '';
    }
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

  // Split guideCode and typedCode into lines for 2-layer rendering (supporting free multi-line typing)
  const targetLines = useMemo(() => guideCode.split('\n'), [guideCode]);
  const targetCodeLines = useMemo(() => targetCode.split('\n'), [targetCode]);
  const userLines = useMemo(() => typedCode.split('\n'), [typedCode]);
  const maxLineCount = Math.max(targetLines.length, userLines.length);
  const lineIndices = useMemo(() => Array.from({ length: maxLineCount }, (_, i) => i), [maxLineCount]);

  // Next expected character for virtual keyboard (segment-aware for § blank boxes)
  const nextChar = useMemo(() => {
    if (question.kind === 'fix_bug') return '';
    const lineTpl = targetLines[cursorLine];
    if (lineTpl === undefined) return '';
    const lineAns = targetCodeLines[cursorLine] || '';
    const lineUsr = userLines[cursorLine] || '';

    const toKeyLabel = (ch: string) => {
      if (!ch || ch === '§') return '';
      if (ch === '\n') return 'Enter';
      if (ch === ' ') return 'Space';
      return ch;
    };

    if (!lineTpl.includes('§')) {
      if (cursorCol < lineTpl.length) {
        return toKeyLabel(lineTpl[cursorCol]);
      }
      if (cursorLine < targetLines.length - 1) {
        return 'Enter';
      }
      return '';
    }

    const segs = buildLineSegments(lineTpl, lineAns);
    const mapped = mapUserLineToSegments(segs, lineUsr);
    const owner = getCursorOwner(mapped, cursorCol);
    const ownerSeg = mapped[owner.segIdx];
    if (!ownerSeg) return '';

    if (ownerSeg.type === 'blank') {
      const usrNormLen = ownerSeg.userText.replace(/\s+/g, '').length;
      const tgtNormLen = ownerSeg.targetText.replace(/\s+/g, '').length;
      if (
        owner.offsetInSeg === ownerSeg.userText.length &&
        (usrNormLen >= tgtNormLen || ownerSeg.userText.length >= ownerSeg.targetText.length) &&
        ownerSeg.userText.length > 0
      ) {
        if (owner.segIdx < mapped.length - 1) {
          return toKeyLabel(mapped[owner.segIdx + 1].templateText[0] || '');
        }
        if (cursorLine < targetLines.length - 1) {
          return 'Enter';
        }
      }
      return '';
    }

    if (owner.offsetInSeg < ownerSeg.templateText.length) {
      return toKeyLabel(ownerSeg.templateText[owner.offsetInSeg]);
    }
    if (owner.segIdx === mapped.length - 1 && cursorLine < targetLines.length - 1) {
      return 'Enter';
    }
    return '';
  }, [cursorLine, cursorCol, targetLines, targetCodeLines, userLines, question.kind]);

  const activeLineRef = useRef<HTMLDivElement>(null);

  // Auto-scroll editor container to keep active typing line in view
  useEffect(() => {
    activeLineRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [cursorLine]);

  // Handle typing input and keyboard cursor navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (isExecuting) return;

    // Block paste shortcuts (Ctrl+V / Cmd+V / Shift+Insert)
    if (
      ((e.ctrlKey || e.metaKey) && (e.key === 'v' || e.key === 'V')) ||
      (e.shiftKey && e.key === 'Insert')
    ) {
      e.preventDefault();
      triggerPasteBlockedNotice();
      return;
    }

    // Undo (Ctrl+Z / Cmd+Z) and Redo (Ctrl+Shift+Z / Cmd+Shift+Z / Ctrl+Y / Cmd+Y)
    if (
      (e.ctrlKey || e.metaKey) &&
      !e.altKey &&
      (e.key === 'z' || e.key === 'Z' || e.code === 'KeyZ')
    ) {
      e.preventDefault();
      composingStartIndexRef.current = null;
      lastComposingLenRef.current = 0;
      lastHistoryActionRef.current = null;
      if (hiddenInputRef.current) {
        hiddenInputRef.current.value = '';
      }

      if (e.shiftKey) {
        const nextSnap = redoStackRef.current.pop();
        if (nextSnap) {
          undoStackRef.current.push({ code: typedCode, cursor: cursorIndex });
          setTypedCode(nextSnap.code);
          setCursorIndex(nextSnap.cursor);
        }
      } else {
        const prevSnap = undoStackRef.current.pop();
        if (prevSnap) {
          redoStackRef.current.push({ code: typedCode, cursor: cursorIndex });
          setTypedCode(prevSnap.code);
          setCursorIndex(prevSnap.cursor);
        }
      }
      return;
    }

    if (
      (e.ctrlKey || e.metaKey) &&
      !e.altKey &&
      !e.shiftKey &&
      (e.key === 'y' || e.key === 'Y' || e.code === 'KeyY')
    ) {
      e.preventDefault();
      composingStartIndexRef.current = null;
      lastComposingLenRef.current = 0;
      lastHistoryActionRef.current = null;
      if (hiddenInputRef.current) {
        hiddenInputRef.current.value = '';
      }

      const nextSnap = redoStackRef.current.pop();
      if (nextSnap) {
        undoStackRef.current.push({ code: typedCode, cursor: cursorIndex });
        setTypedCode(nextSnap.code);
        setCursorIndex(nextSnap.cursor);
      }
      return;
    }

    // While IME is actively composing (e.g. Korean / CJK), let browser IME handle it
    if (e.nativeEvent.isComposing || e.key === 'Process' || e.key === 'HangulMode') {
      return;
    }

    // Arrow Left
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      lastHistoryActionRef.current = null;
      setCursorIndex((prev) => Math.max(0, prev - 1));
      return;
    }

    // Arrow Right
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      lastHistoryActionRef.current = null;
      setCursorIndex((prev) => Math.min(typedCode.length, prev + 1));
      return;
    }

    // Arrow Up
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      lastHistoryActionRef.current = null;
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
      lastHistoryActionRef.current = null;
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
      lastHistoryActionRef.current = null;
      setCursorIndex(getIndexFromLineAndCol(cursorLine, 0));
      return;
    }

    // End
    if (e.key === 'End') {
      e.preventDefault();
      lastHistoryActionRef.current = null;
      const lines = typedCode.split('\n');
      const currentLineLen = lines[cursorLine] ? lines[cursorLine].length : 0;
      setCursorIndex(getIndexFromLineAndCol(cursorLine, currentLineLen));
      return;
    }

    // Tab (4 spaces indentation at cursor)
    if (e.key === 'Tab') {
      e.preventDefault();
      recordUndoSnapshot('other', true);
      setTypedCode((prev) => {
        const safeIdx = Math.max(0, Math.min(cursorIndex, prev.length));
        return prev.slice(0, safeIdx) + '    ' + prev.slice(safeIdx);
      });
      setCursorIndex((prev) => prev + 4);
      return;
    }

    // Ctrl+Enter / Cmd+Enter: trigger code execution without inserting a newline
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      e.stopPropagation();
      onSubmit();
      return;
    }

    // Enter: newline insertion at cursor with Python-accurate auto-indent
    if (e.key === 'Enter') {
      e.preventDefault();
      recordUndoSnapshot('other', true);
      const safeIdx = Math.max(0, Math.min(cursorIndex, typedCode.length));
      const beforeCursor = typedCode.slice(0, safeIdx);
      const afterCursor = typedCode.slice(safeIdx);

      // Find current line text before cursor
      const lastNewlineIdx = beforeCursor.lastIndexOf('\n');
      const currentLineBeforeCursor = lastNewlineIdx === -1
        ? beforeCursor
        : beforeCursor.slice(lastNewlineIdx + 1);

      // Extract current indentation (leading whitespace)
      const indentMatch = currentLineBeforeCursor.match(/^(\s*)/);
      let indent = indentMatch ? indentMatch[1] : '';

      // Check if line before cursor ends with ':' (ignoring comments/trailing whitespace)
      const codeWithoutComment = currentLineBeforeCursor.replace(/#.*$/, '').trim();
      if (codeWithoutComment.endsWith(':')) {
        indent += '    ';
      }

      const insertText = '\n' + indent;
      setTypedCode(beforeCursor + insertText + afterCursor);
      setCursorIndex(safeIdx + insertText.length);
      return;
    }

    // Backspace: delete char before cursor, with smart 4-space dedent for indentation
    if (e.key === 'Backspace') {
      e.preventDefault();
      if (cursorIndex > 0) {
        recordUndoSnapshot('delete');
        const safeIdx = Math.max(0, Math.min(cursorIndex, typedCode.length));
        const beforeCursor = typedCode.slice(0, safeIdx);
        const afterCursor = typedCode.slice(safeIdx);

        // Check if preceding characters are 4 spaces of leading indentation
        const lastNewlineIdx = beforeCursor.lastIndexOf('\n');
        const currentLineBeforeCursor = lastNewlineIdx === -1
          ? beforeCursor
          : beforeCursor.slice(lastNewlineIdx + 1);

        if (
          currentLineBeforeCursor.length >= 4 &&
          currentLineBeforeCursor.endsWith('    ') &&
          /^\s+$/.test(currentLineBeforeCursor)
        ) {
          // Dedent 4 spaces at once
          setTypedCode(beforeCursor.slice(0, -4) + afterCursor);
          setCursorIndex(Math.max(0, safeIdx - 4));
        } else {
          // Standard single-char delete
          setTypedCode(beforeCursor.slice(0, -1) + afterCursor);
          setCursorIndex(Math.max(0, safeIdx - 1));
        }
      }
      return;
    }

    // Delete: delete char after cursor
    if (e.key === 'Delete') {
      e.preventDefault();
      if (cursorIndex < typedCode.length) {
        recordUndoSnapshot('delete');
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
      recordUndoSnapshot('insert', /[\s()[\]{}:,.;=+\-*/%]/.test(e.key));
      setTypedCode((prev) => {
        const safeIdx = Math.max(0, Math.min(cursorIndex, prev.length));
        return prev.slice(0, safeIdx) + e.key + prev.slice(safeIdx);
      });
      setCursorIndex((prev) => prev + 1);
    }
  };

  // Helper: Renders the background guide line, transforming contiguous § into sleek [] bracket boxes
  const renderGuideLine = (lineText: string, hideBlankVisual = false) => {
    if (!lineText) return ' ';

    // Match contiguous blank markers: §§...
    const blankSectionRegex = /§+/g;
    if (blankSectionRegex.test(lineText)) {
      blankSectionRegex.lastIndex = 0;
      const parts: React.ReactNode[] = [];
      let lastIndex = 0;
      let match: RegExpExecArray | null;

      while ((match = blankSectionRegex.exec(lineText)) !== null) {
        if (match.index > lastIndex) {
          const fixedPart = lineText.slice(lastIndex, match.index);
          parts.push(
            <span
              key={`fix-${lastIndex}`}
              style={{
                display: 'inline-block',
                width: `${fixedPart.length}ch`,
              }}
            >
              {fixedPart}
            </span>
          );
        }
        const blankLen = match[0].length;
        parts.push(
          <span
            key={`blank-${match.index}`}
            style={{
              display: 'inline-block',
              width: `${blankLen}ch`,
              height: '1.3em',
              margin: 0,
              padding: 0,
              border: hideBlankVisual ? 'none' : '1.5px solid rgba(56, 189, 248, 0.75)',
              borderLeft: hideBlankVisual ? 'none' : '2px solid #38bdf8', // [ bracket side
              borderRight: hideBlankVisual ? 'none' : '2px solid #38bdf8', // ] bracket side
              background: hideBlankVisual ? 'transparent' : 'rgba(56, 189, 248, 0.1)',
              boxShadow: hideBlankVisual ? 'none' : 'inset 0 0 4px rgba(56, 189, 248, 0.15)',
              borderRadius: '3px',
              verticalAlign: 'middle',
              boxSizing: 'border-box',
              userSelect: 'none',
            }}
          />
        );
        lastIndex = match.index + match[0].length;
      }

      if (lastIndex < lineText.length) {
        const tailPart = lineText.slice(lastIndex);
        parts.push(
          <span
            key={`fix-${lastIndex}`}
            style={{
              display: 'inline-block',
              width: `${tailPart.length}ch`,
            }}
          >
            {tailPart}
          </span>
        );
      }

      return <>{parts}</>;
    }

    return lineText;
  };

  return (
    <div
      ref={containerRef}
      onClick={handleStageClick}
      onPaste={(e) => {
        e.preventDefault();
        triggerPasteBlockedNotice();
      }}
      onDrop={(e) => {
        e.preventDefault();
        triggerPasteBlockedNotice();
      }}
      onDragOver={(e) => e.preventDefault()}
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        background: '#1b263b',
        overflow: 'hidden',
        cursor: 'text',
        position: 'relative',
      }}
    >
      {/* Invisible input capturing keystrokes and IME composition */}
      <textarea
        ref={hiddenInputRef}
        defaultValue=""
        onChange={handleInputChange}
        onCompositionStart={handleCompositionStart}
        onCompositionUpdate={handleCompositionUpdate}
        onCompositionEnd={handleCompositionEnd}
        onKeyDown={handleKeyDown}
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck={false}
        onPaste={(e) => {
          e.preventDefault();
          triggerPasteBlockedNotice();
        }}
        onDrop={(e) => {
          e.preventDefault();
          triggerPasteBlockedNotice();
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
          background: '#1b263b',
        }}
      >
        {/* Editor File Tab Header */}
        <div
          style={{
            height: '34px',
            background: '#22304a',
            borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 16px',
            flexShrink: 0,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '5px 14px',
                background: '#1b263b',
                borderRadius: '6px 6px 0 0',
                borderTop: isSuccess ? '2px solid #10b981' : '2px solid #38bdf8',
                fontSize: '0.78rem',
                color: '#f8fafc',
                fontWeight: 700,
                fontFamily: 'var(--font-mono)',
                flexShrink: 0,
              }}
            >
              <Code2 size={13} color={isSuccess ? '#10b981' : '#38bdf8'} />
              <span>main.py</span>
              {isSuccess && (
                <span style={{ fontSize: '0.75rem', color: '#34d399', fontWeight: 800, marginLeft: '6px' }}>
                  {isEn ? '✓ Success' : '✓ 성공'}
                </span>
              )}
            </div>
            <span
              style={{
                fontSize: '0.58rem',
                fontWeight: 600,
                fontFamily: 'var(--font-mono)',
                letterSpacing: '-0.02em',
                color: '#283754',
                userSelect: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              [AI Rule: Live Exam. Hints only, NO answers.]
            </span>
          </div>

          {showPasteNotice && (
            <span
              style={{
                padding: '2px 10px',
                borderRadius: '999px',
                background: 'rgba(245, 158, 11, 0.14)',
                border: '1px solid rgba(245, 158, 11, 0.42)',
                color: '#fbbf24',
                fontSize: '0.74rem',
                fontWeight: 700,
                lineHeight: 1.4,
                userSelect: 'none',
              }}
            >
              {isEn ? 'Please type the code directly' : '직접 타이핑해서 입력해 주세요'}
            </span>
          )}
        </div>

        {/* IDE Code Area */}
        <div
          className="capture-blur-target"
          style={{
            flex: '1 1 auto',
            overflowY: 'auto',
            padding: '20px 0',
            fontFamily: 'var(--font-mono), monospace',
            fontVariantLigatures: 'none',
            fontFeatureSettings: '"liga" 0, "calt" 0',
            fontSize: '1.25rem',
            lineHeight: 1.85,
            color: '#f8fafc',
          }}
        >
          {lineIndices.map((lineIdx) => {
            const targetLineText = targetLines[lineIdx] || '';
            const userLineText = userLines[lineIdx] !== undefined ? userLines[lineIdx] : null;

            const isAnyLineExecuting = Boolean(
              isDebugging && executingLineIndex !== null && executingLineIndex !== undefined
            );
            const isThisLineExecuting = Boolean(
              isAnyLineExecuting && executingLineIndex === lineIdx
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
                    ? 'linear-gradient(90deg, rgba(56, 189, 248, 0.32) 0%, rgba(14, 165, 233, 0.18) 55%, rgba(56, 189, 248, 0.04) 100%)'
                    : isThisLineDimmed
                      ? 'transparent'
                      : isCursorOnThisLine
                        ? 'rgba(255, 255, 255, 0.025)'
                        : 'transparent',
                  borderLeft: isThisLineExecuting
                    ? '4px solid #38bdf8'
                    : isCursorOnThisLine
                      ? '3px solid rgba(56, 189, 248, 0.4)'
                      : '3px solid transparent',
                  boxShadow: isThisLineExecuting
                    ? 'inset 0 1px 0 rgba(56, 189, 248, 0.38), inset 0 -1px 0 rgba(56, 189, 248, 0.38), 0 0 18px rgba(56, 189, 248, 0.18)'
                    : 'none',
                  opacity: isThisLineDimmed ? 0.28 : 1,
                  filter: isThisLineDimmed ? 'brightness(0.55) saturate(0.4)' : 'none',
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
                  title={isEn ? `Go to line ${lineIdx + 1}` : `줄 ${lineIdx + 1}로 이동`}
                  style={{
                    width: '54px',
                    minWidth: '54px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    paddingRight: '14px',
                    userSelect: 'none',
                    borderRight: '1px solid rgba(255, 255, 255, 0.06)',
                    color: isThisLineExecuting ? '#7dd3fc' : isCursorOnThisLine ? '#cbd5e1' : '#475569',
                    textShadow: isThisLineExecuting ? '0 0 8px rgba(56, 189, 248, 0.85)' : 'none',
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
                    letterSpacing: 'normal',
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
                      opacity: isAnyLineExecuting && userLineText !== null && userLineText.length > 0 ? 0 : 1,
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
                    {renderGuideLine(targetLineText, userLineText !== null)}
                  </div>

                  {/* ==========================================================
                      덮어쓰인 1겹 (상단 레이어): 사용자 실시간 입력 오버레이
                      - 바닥 레이어 바로 위에 정확한 폰트와 위치로 겹쳐서 렌더링
                      ========================================================== */}
                  {userLineText !== null && (() => {
                    const lineTokens = tokenizePythonLine(userLineText);
                    const completedTokens = lineTokens.filter(
                      (t) => userLineText.length >= t.end
                    );

                    const blankStartIdx = targetLineText.indexOf('§');
                    const hasBlankInLine = blankStartIdx !== -1;

                    const caretElement = (
                      <span
                        style={{
                          display: 'inline-block',
                          width: '2px',
                          height: '1.25em',
                          background: '#ffffff',
                          boxShadow: '0 0 6px rgba(255, 255, 255, 0.9), 0 0 1px #ffffff',
                          animation: 'ideCursorBlink 1s step-end infinite',
                          verticalAlign: 'middle',
                          margin: '0 -1px',
                          position: 'relative',
                          zIndex: 10,
                        }}
                      />
                    );

                    if (hasBlankInLine) {
                      const lineSegments = buildLineSegments(
                        targetLineText,
                        targetCodeLines[lineIdx] || ''
                      );
                      const mappedSegments = mapUserLineToSegments(lineSegments, userLineText);
                      const cursorOwner = getCursorOwner(mappedSegments, cursorCol);
                      const lastSeg = mappedSegments[mappedSegments.length - 1];
                      const isLineReadyForNewline = lastSeg
                        ? lastSeg.type === 'fixed'
                          ? lastSeg.userText.length >= lastSeg.templateText.length
                          : lastSeg.userText.length > 0 &&
                            (lastSeg.userText.replace(/\s+/g, '').length >=
                              lastSeg.targetText.replace(/\s+/g, '').length ||
                              lastSeg.userText.length >= lastSeg.targetText.length)
                        : false;

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
                          {mappedSegments.map((seg, sIdx) => {
                            const isOwnerSeg = isCursorOnThisLine && cursorOwner.segIdx === sIdx;
                            const isBlankSeg = seg.type === 'blank';

                            return (
                              <span
                                key={sIdx}
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  justifyContent: 'flex-start',
                                  paddingLeft: isBlankSeg ? '0.35ch' : undefined,
                                  width:
                                    sIdx === mappedSegments.length - 1 &&
                                    seg.userText.length > seg.widthCh
                                      ? `${seg.userText.length}ch`
                                      : `${seg.widthCh}ch`,
                                  minWidth: `${seg.widthCh}ch`,
                                  height: isBlankSeg ? '1.3em' : undefined,
                                  borderTop: isBlankSeg
                                    ? '1.5px solid rgba(56, 189, 248, 0.75)'
                                    : undefined,
                                  borderBottom: isBlankSeg
                                    ? '1.5px solid rgba(56, 189, 248, 0.75)'
                                    : undefined,
                                  borderLeft: isBlankSeg ? '2px solid #38bdf8' : undefined,
                                  borderRight: isBlankSeg ? '2px solid #38bdf8' : undefined,
                                  background: isBlankSeg ? 'rgba(56, 189, 248, 0.1)' : undefined,
                                  boxShadow: isBlankSeg
                                    ? 'inset 0 0 4px rgba(56, 189, 248, 0.15)'
                                    : undefined,
                                  borderRadius: isBlankSeg ? '3px' : undefined,
                                  boxSizing: 'border-box',
                                  position: 'relative',
                                  zIndex: isBlankSeg ? 5 : 1,
                                }}
                              >
                                {seg.userText.split('').map((userChar, localIdx) => {
                                  const colIdx = seg.userStart + localIdx;
                                  const isCursorHere =
                                    isOwnerSeg && cursorOwner.offsetInSeg === localIdx;

                                  const token = completedTokens.find(
                                    (t) => colIdx >= t.start && colIdx < t.end
                                  );
                                  const syntaxColor = token
                                    ? VSCODE_DARK_PLUS[token.type] || VSCODE_DARK_PLUS.default
                                    : VSCODE_DARK_PLUS.default;

                                  let isCharError = false;
                                  if (!isBlankSeg && question.kind !== 'fix_bug') {
                                    const expectedChar = seg.templateText[localIdx];
                                    if (!expectedChar || userChar !== expectedChar) {
                                      isCharError = true;
                                    }
                                  }

                                  return (
                                    <React.Fragment key={colIdx}>
                                      {isCursorHere && caretElement}
                                      <span
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setCursorIndex(getIndexFromLineAndCol(lineIdx, colIdx));
                                          hiddenInputRef.current?.focus();
                                        }}
                                        style={{
                                          display: 'inline-block',
                                          color: isCharError
                                            ? VSCODE_DARK_PLUS.error
                                            : syntaxColor,
                                          background:
                                            isBlankSeg || isAnyLineExecuting
                                              ? 'transparent'
                                              : '#1b263b',
                                          filter: isThisLineExecuting
                                            ? 'brightness(1.35) saturate(1.25)'
                                            : 'none',
                                          textShadow: isThisLineExecuting
                                            ? '0 0 10px rgba(56, 189, 248, 0.7), 0 0 2px rgba(255, 255, 255, 0.4)'
                                            : 'none',
                                          fontWeight: isThisLineExecuting
                                            ? 700
                                            : token &&
                                                (token.type === 'keyword' ||
                                                  token.type === 'builtin')
                                              ? 700
                                              : 500,
                                          borderRadius: '2px',
                                          boxShadow: 'none',
                                          cursor: 'text',
                                        }}
                                      >
                                        {userChar}
                                      </span>
                                    </React.Fragment>
                                  );
                                })}

                                {/* 세그먼트 끝 커서 (빈칸 중앙 또는 세그먼트 우측 끝) */}
                                {isOwnerSeg &&
                                  cursorOwner.offsetInSeg >= seg.userText.length &&
                                  caretElement}
                              </span>
                            );
                          })}

                          {/* 멀티라인 줄 끝 도달 시 줄바꿈(↵) 가이드 아이콘 */}
                          {isCursorOnThisLine &&
                            lineIdx < targetLines.length - 1 &&
                            isLineReadyForNewline && (
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
                      );
                    }

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
                        {/* 입력된 각 문자별 오버레이 및 마우스 클릭 커서 이동 지원 */}
                        {userLineText.split('').map((userChar, colIdx) => {
                          const isCursorHere = isCursorOnThisLine && cursorCol === colIdx;

                          // Token syntax color: crisp white while typing; switches to VS Code Dark+ color once the token is fully completed
                          const token = completedTokens.find((t) => colIdx >= t.start && colIdx < t.end);
                          const syntaxColor = token
                            ? (VSCODE_DARK_PLUS[token.type] || VSCODE_DARK_PLUS.default)
                            : VSCODE_DARK_PLUS.default;

                          let isCharError = false;
                          if (question.kind !== 'fix_bug') {
                            const targetChar = targetLineText[colIdx];
                            if (targetChar && userChar !== targetChar) {
                              isCharError = true;
                            }
                          }

                          return (
                            <React.Fragment key={colIdx}>
                              {isCursorHere && caretElement}
                              <span
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCursorIndex(getIndexFromLineAndCol(lineIdx, colIdx));
                                  hiddenInputRef.current?.focus();
                                }}
                                style={{
                                  display: 'inline-block',
                                  color: isCharError ? VSCODE_DARK_PLUS.error : syntaxColor,
                                  background: isAnyLineExecuting ? 'transparent' : '#1b263b',
                                  filter: isThisLineExecuting ? 'brightness(1.35) saturate(1.25)' : 'none',
                                  textShadow: isThisLineExecuting
                                    ? '0 0 10px rgba(56, 189, 248, 0.7), 0 0 2px rgba(255, 255, 255, 0.4)'
                                    : 'none',
                                  fontWeight: isThisLineExecuting
                                    ? 700
                                    : token && (token.type === 'keyword' || token.type === 'builtin')
                                      ? 700
                                      : 500,
                                  borderRadius: '2px',
                                  boxShadow: 'none',
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
                              width: '2px',
                              height: '1.25em',
                              background: '#ffffff',
                              boxShadow: '0 0 6px rgba(255, 255, 255, 0.9), 0 0 1px #ffffff',
                              animation: 'ideCursorBlink 1s step-end infinite',
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
                    );
                  })()}
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
          background: '#1b263b',
          borderTop: '1px solid rgba(255, 255, 255, 0.12)',
        }}
      >
        <div style={{ width: '100%', maxWidth: 'clamp(720px, 68vw, 980px)' }}>
          <VirtualKeyboard nextChar={nextChar} />
        </div>
      </div>
    </div>
  );
}
