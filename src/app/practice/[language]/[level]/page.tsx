'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Heart,
  Lightbulb,
  RotateCcw,
  Terminal as TerminalIcon,
  Code,
  Layers,
  Play,
  CheckCircle2,
  Trash2,
  Box,
  ChevronRight,
  ChevronLeft,
  Lock,
  Copy,
  Edit3,
  Plus,
  CornerDownRight,
  Sparkles,
  Key,
  X,
  Zap,
  Bug,
  Loader2,
  Square
} from 'lucide-react';
import { getPracticeRound } from '@/lib/practiceData';
import { PracticeQuestion } from '@/lib/practiceTypes';
import { executeCode } from '@/lib/runner';
import { CanvasBlockItem } from '@/components/practice/CanvasBlockItem';
import { evaluateBlocksLocally, evaluatePythonLocally, evaluateBlocksWithTrace, evaluatePythonWithTrace, getOrderedCanvasBlocks } from '@/lib/blockEvaluator';
import TypingStage from '@/components/practice/TypingStage';
import {
  PuzzleTab,
  PuzzleNotch,
  HorizontalPuzzleTab,
  HorizontalPuzzleNotch,
  SvgBottomClosingArm,
  GhostSnapBlock,
  GhostMethodBlock,
  GhostCShapeBlock,
} from '@/components/practice/BlockPuzzleShapes';

interface PracticePageProps {
  params: {
    language: string;
    level: string;
  };
  searchParams?: {
    step?: string;
  };
}

// Memory Storage Box Structure (Value inside, Variable name underneath)
interface MemoryBoxItem {
  id: string;
  name: string;      // Variable/Identifier name displayed UNDER the box
  value: string;     // Value displayed INSIDE the box
  fullValue?: string; // Full un-truncated value shown in hover tooltip
  type: string;      // int, float, str, result
  active: boolean;   // glowing when active
}

type BlockType =
  // 시작 블록 (실시간 실행 엔트리포인트)
  | 'start'
  // 함수 / 입출력
  | 'print'
  | 'input'
  | 'len'
  | 'int'
  | 'float'
  | 'str'
  | 'type'
  | 'round'
  | 'abs'
  | 'sum'
  | 'min'
  | 'max'
  | 'open'
  | 'math'
  | 'range'
  | 'map'
  | 'sorted'
  | 'bool'
  | 'iter'
  | 'enumerate'
  | 'zip'
  | 'all'
  | 'any'
  | 'reversed'
  | 'def'
  | 'return'
  // 메서드
  | 'method'
  // 반복 (루프)
  | 'for_range'
  | 'for_in'
  | 'while'
  | 'break'
  | 'continue'
  // 논리 (조건)
  | 'if'
  | 'elif'
  | 'else'
  // 변수 / 자료형
  | 'variable'
  | 'list'
  | 'tuple'
  | 'set'
  | 'dict';

interface DictPair {
  key: string;
  value: string;
}

interface IfBranch {
  id: string;
  kind: 'if' | 'elif' | 'else';
  condition?: string;
  innerBlocks: CanvasBlock[];
}

// Canvas Block Item (Supports Single Statements, ㄷ자 C-blocks, and E-shape Branching Blocks)
interface CanvasBlock {
  id: string;
  type: BlockType;
  varName?: string;
  content?: string;
  items?: string[];
  dictPairs?: DictPair[];
  isIfElse?: boolean;
  hasReturn?: boolean;
  returnVal?: string;
  // Method block properties
  methodName?: string;
  attachedMethodId?: string;   // Attached to right notch (horizontal method chain)
  attachedToBlockId?: string;  // Attached to left tab (target block on left)
  argBlock?: CanvasBlock;      // Inline argument block (nested in function parentheses)
  // C-shape loop inner blocks:
  innerBlocks?: CanvasBlock[];
  // E-shape multi-branch condition branches:
  branches?: IfBranch[];
  x: number;
  y: number;
  // Scratch Stack Linking
  nextBlockId?: string;
  prevBlockId?: string;
  zIndex?: number;
}

interface CustomVariableTemplate {
  id: string;
  name: string;
  kind: 'variable' | 'list' | 'tuple' | 'set' | 'dict';
}

const BLOCK_THEMES: Record<BlockType, { bg: string; shadow: string; border: string }> = {
  // 시작 블록 (실시간 실행 시작점)
  start: { bg: '#059669', shadow: '#047857', border: '#10b981' },

  // 함수 (파랑 계열 통일)
  print: { bg: '#2563eb', shadow: '#1d4ed8', border: '#3b82f6' },
  input: { bg: '#2563eb', shadow: '#1d4ed8', border: '#3b82f6' },
  len: { bg: '#2563eb', shadow: '#1d4ed8', border: '#3b82f6' },
  int: { bg: '#2563eb', shadow: '#1d4ed8', border: '#3b82f6' },
  float: { bg: '#2563eb', shadow: '#1d4ed8', border: '#3b82f6' },
  str: { bg: '#2563eb', shadow: '#1d4ed8', border: '#3b82f6' },
  type: { bg: '#2563eb', shadow: '#1d4ed8', border: '#3b82f6' },
  round: { bg: '#2563eb', shadow: '#1d4ed8', border: '#3b82f6' },
  abs: { bg: '#2563eb', shadow: '#1d4ed8', border: '#3b82f6' },
  sum: { bg: '#2563eb', shadow: '#1d4ed8', border: '#3b82f6' },
  min: { bg: '#2563eb', shadow: '#1d4ed8', border: '#3b82f6' },
  max: { bg: '#2563eb', shadow: '#1d4ed8', border: '#3b82f6' },
  open: { bg: '#2563eb', shadow: '#1d4ed8', border: '#3b82f6' },
  math: { bg: '#2563eb', shadow: '#1d4ed8', border: '#3b82f6' },
  range: { bg: '#2563eb', shadow: '#1d4ed8', border: '#3b82f6' },
  map: { bg: '#2563eb', shadow: '#1d4ed8', border: '#3b82f6' },
  sorted: { bg: '#2563eb', shadow: '#1d4ed8', border: '#3b82f6' },
  bool: { bg: '#2563eb', shadow: '#1d4ed8', border: '#3b82f6' },
  iter: { bg: '#2563eb', shadow: '#1d4ed8', border: '#3b82f6' },
  enumerate: { bg: '#2563eb', shadow: '#1d4ed8', border: '#3b82f6' },
  zip: { bg: '#2563eb', shadow: '#1d4ed8', border: '#3b82f6' },
  all: { bg: '#2563eb', shadow: '#1d4ed8', border: '#3b82f6' },
  any: { bg: '#2563eb', shadow: '#1d4ed8', border: '#3b82f6' },
  reversed: { bg: '#2563eb', shadow: '#1d4ed8', border: '#3b82f6' },
  def: { bg: '#1d4ed8', shadow: '#1e40af', border: '#3b82f6' },
  return: { bg: '#1d4ed8', shadow: '#1e40af', border: '#3b82f6' },

  // 메서드 (보라/바이올렛 계열)
  method: { bg: '#7c3aed', shadow: '#6d28d9', border: '#8b5cf6' },

  // 반복 (에메랄드/초록 계열: for와 while 동일 테마 일원화)
  for_range: { bg: '#059669', shadow: '#047857', border: '#10b981' },
  for_in: { bg: '#059669', shadow: '#047857', border: '#10b981' },
  while: { bg: '#059669', shadow: '#047857', border: '#10b981' },
  break: { bg: '#475569', shadow: '#334155', border: '#64748b' },
  continue: { bg: '#475569', shadow: '#334155', border: '#64748b' },

  // 논리 (호박/골드 계열: if, elif, else 동일한 테마로 완벽 일원화)
  if: { bg: '#d97706', shadow: '#b45309', border: '#f59e0b' },
  elif: { bg: '#d97706', shadow: '#b45309', border: '#f59e0b' },
  else: { bg: '#d97706', shadow: '#b45309', border: '#f59e0b' },

  // 변수 (주황/보라 계열)
  variable: { bg: '#ea580c', shadow: '#c2410c', border: '#f97316' },
  list: { bg: '#0d9488', shadow: '#0f766e', border: '#14b8a6' },
  tuple: { bg: '#4f46e5', shadow: '#4338ca', border: '#6366f1' },
  set: { bg: '#9333ea', shadow: '#7e22ce', border: '#a855f7' },
  dict: { bg: '#c2410c', shadow: '#9a3412', border: '#ea580c' },
};

const getKindLabel = (k: 'variable' | 'list' | 'tuple' | 'set' | 'dict'): string => {
  switch (k) {
    case 'variable': return '변수 (단일 값)';
    case 'list': return '리스트 (List)';
    case 'tuple': return '튜플 (Tuple)';
    case 'set': return '세트 (Set)';
    case 'dict': return '딕셔너리 (Dictionary)';
  }
};

const createDefaultStartBlock = (): CanvasBlock => ({
  id: 'start-block',
  type: 'start',
  x: 40,
  y: 30,
  zIndex: 10,
});

const EMPTY_BLOCK_INPUT_WIDTH = 26; // 빈 입력창 표준 너비 (툴박스와 캔버스 완벽 일치: 26px x 20px)

// Seamless Scratch Puzzle Tab & Notch Components (암수 결합부 너비 20px 균일 일치 및 안정적인 와이드 결합)
const getBlockInputWidth = (val: string | undefined | null, minChars: number = 1): number => {
  const str = val ?? '';
  if (str.length === 0) {
    return EMPTY_BLOCK_INPUT_WIDTH;
  }
  let units = 0;
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if ((code >= 0x1100 && code <= 0x11ff) || (code >= 0x3130 && code <= 0x318f) || (code >= 0xac00 && code <= 0xd7af)) {
      units += 2;
    } else {
      units += 1;
    }
  }
  const effectiveLen = Math.max(minChars, units);
  return Math.round(effectiveLen * 7.5 + 13);
};

// Puzzle notch & tab components are imported from @/components/practice/BlockPuzzleShapes

// Context Menu State (Right Click)
interface ContextMenuState {
  visible: boolean;
  x: number;
  y: number;
  blockId: string | null;
  targetType?: 'block';
}

// Function Parameter Inline Memo (심플 한줄 함수 시그니처 안내)
const FUNC_PARAM_HELPS: Record<string, string> = {
  print: 'print(*values, sep=" ", end="\\n")',
  input: 'input(prompt="")',
  type: 'type(object)',
  int: 'int(x=0, base=10)',
  float: 'float(x=0.0)',
  str: 'str(object="")',
  math: 'math: len, round, abs, sum, min, max 중 함수를 선택하세요',
  len: 'len(s)',
  round: 'round(number, ndigits=None)',
  abs: 'abs(x)',
  sum: 'sum(iterable, start=0)',
  min: 'min(iterable) / min(arg1, arg2, ...)',
  max: 'max(iterable) / max(arg1, arg2, ...)',
  open: 'open(file, mode="r")',
  range: 'range(stop) / range(start, stop, step)',
  map: 'map(function, iterable, ...)',
  sorted: 'sorted(iterable, key=None, reverse=False)',
  bool: 'bool(x=False)',
  iter: 'iter(iterable) / iter(callable, sentinel)',
  enumerate: 'enumerate(iterable, start=0)',
  zip: 'zip(*iterables, strict=False)',
  all: 'all(iterable)',
  any: 'any(iterable)',
  reversed: 'reversed(seq)',
  for_range: 'range(stop) / range(start, stop, step)',
};

// Python Curriculum Methods Definition (커리큘럼에 포함된 핵심 메서드 카테고리별 분류)
const METHOD_CATEGORIES: { category: string; methods: { name: string; label: string; placeholder: string }[] }[] = [
  {
    category: '문자열 (String)',
    methods: [
      { name: 'split', label: 'split() - 분할', placeholder: 'sep' },
      { name: 'strip', label: 'strip() - 양쪽 공백 제거', placeholder: '' },
      { name: 'lstrip', label: 'lstrip() - 왼쪽 공백 제거', placeholder: '' },
      { name: 'rstrip', label: 'rstrip() - 오른쪽 공백 제거', placeholder: '' },
      { name: 'join', label: 'join() - 요소 결합', placeholder: 'iterable' },
      { name: 'upper', label: 'upper() - 대문자 변환', placeholder: '' },
      { name: 'lower', label: 'lower() - 소문자 변환', placeholder: '' },
      { name: 'replace', label: 'replace() - 문자열 치환', placeholder: 'old, new' },
      { name: 'count', label: 'count() - 특정 값 개수', placeholder: 'sub' },
      { name: 'find', label: 'find() - 위치 찾기', placeholder: 'sub' },
      { name: 'startswith', label: 'startswith() - 접두사 확인', placeholder: 'prefix' },
      { name: 'endswith', label: 'endswith() - 접미사 확인', placeholder: 'suffix' },
      { name: 'capitalize', label: 'capitalize() - 첫 글자 대문자', placeholder: '' },
      { name: 'title', label: 'title() - 각 단어 대문자', placeholder: '' },
      { name: 'swapcase', label: 'swapcase() - 대소문자 반전', placeholder: '' },
      { name: 'isdigit', label: 'isdigit() - 숫자 여부 판정', placeholder: '' },
      { name: 'isalpha', label: 'isalpha() - 알파벳 여부 판정', placeholder: '' },
      { name: 'isalnum', label: 'isalnum() - 영숫자 여부 판정', placeholder: '' },
      { name: 'zfill', label: 'zfill() - 앞자리 0 채우기', placeholder: 'width' },
      { name: 'format', label: 'format() - 서식 지정', placeholder: '*args' },
    ],
  },
  {
    category: '리스트 (List)',
    methods: [
      { name: 'append', label: 'append() - 요소 추가', placeholder: 'item' },
      { name: 'pop', label: 'pop() - 마지막 요소 꺼내기', placeholder: 'index' },
      { name: 'sort', label: 'sort() - 정렬', placeholder: 'reverse=True' },
      { name: 'reverse', label: 'reverse() - 뒤집기', placeholder: '' },
      { name: 'remove', label: 'remove() - 값 삭제', placeholder: 'value' },
      { name: 'index', label: 'index() - 위치 인덱스', placeholder: 'value' },
      { name: 'count', label: 'count() - 요소 개수', placeholder: 'value' },
      { name: 'clear', label: 'clear() - 전체 비우기', placeholder: '' },
      { name: 'extend', label: 'extend() - 리스트 확장', placeholder: 'iterable' },
      { name: 'insert', label: 'insert() - 특정 위치 삽입', placeholder: 'index, item' },
      { name: 'copy', label: 'copy() - 얕은 복사', placeholder: '' },
    ],
  },
  {
    category: '딕셔너리 (Dictionary)',
    methods: [
      { name: 'get', label: 'get() - 키 조회 (에러 없음)', placeholder: 'key, default' },
      { name: 'keys', label: 'keys() - 키 목록', placeholder: '' },
      { name: 'values', label: 'values() - 값 목록', placeholder: '' },
      { name: 'items', label: 'items() - 키-값 쌍 목록', placeholder: '' },
      { name: 'pop', label: 'pop() - 키 제거 및 값 반환', placeholder: 'key' },
      { name: 'update', label: 'update() - 딕셔너리 갱신', placeholder: 'dict' },
      { name: 'clear', label: 'clear() - 전체 비우기', placeholder: '' },
      { name: 'copy', label: 'copy() - 얕은 복사', placeholder: '' },
    ],
  },
  {
    category: '세트 (Set)',
    methods: [
      { name: 'add', label: 'add() - 세트에 추가', placeholder: 'element' },
      { name: 'remove', label: 'remove() - 세트에서 제거', placeholder: 'element' },
      { name: 'discard', label: 'discard() - 세트에서 제거 (에러 무시)', placeholder: 'element' },
      { name: 'pop', label: 'pop() - 임의의 요소 꺼내기', placeholder: '' },
      { name: 'clear', label: 'clear() - 전체 비우기', placeholder: '' },
    ],
  },
  {
    category: '파일 (File)',
    methods: [
      { name: 'read', label: 'read() - 파일 내용 읽기', placeholder: 'size' },
      { name: 'readline', label: 'readline() - 한 줄 읽기', placeholder: '' },
      { name: 'readlines', label: 'readlines() - 전체 줄 읽기', placeholder: '' },
      { name: 'write', label: 'write() - 파일에 쓰기', placeholder: 'text' },
      { name: 'close', label: 'close() - 파일 닫기', placeholder: '' },
    ],
  },
];

// Calculate dynamic width for method select based on currently selected method name
const getMethodSelectWidth = (methodName?: string): number => {
  const name = methodName || 'method';
  // Monospace char width (~8.5px) * length + left padding (7px) + arrow reserve (20px) + buffer (10px)
  // 'method' ≈ 88px, 'split' ≈ 80px, 'append' ≈ 88px, 'startswith' ≈ 122px
  return Math.max(76, Math.round(name.length * 8.5 + 37));
};

const FunctionParamSpeechBubble = ({
  funcType,
}: {
  funcType: string;
  onApplyOption?: (val: string) => void;
}) => {
  const signature = FUNC_PARAM_HELPS[funcType];
  if (!signature) return null;

  return (
    <div
      onMouseDown={(e) => e.stopPropagation()}
      style={{
        position: 'absolute',
        top: 'calc(100% + 3px)',
        left: 0,
        width: 'max-content',
        padding: '2px 7px',
        background: 'rgba(15, 23, 42, 0.75)',
        backdropFilter: 'blur(4px)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '4px',
        boxShadow: '0 3px 8px rgba(0, 0, 0, 0.3)',
        zIndex: 1000,
        pointerEvents: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'default',
        userSelect: 'none',
        whiteSpace: 'nowrap',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.69rem',
          color: 'rgba(203, 213, 225, 0.78)',
          letterSpacing: '0.2px',
        }}
      >
        {signature}
      </span>
    </div>
  );
};

function splitTopLevelArgs(str: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuote: string | null = null;
  let parenDepth = 0;
  let bracketDepth = 0;
  let braceDepth = 0;

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (inQuote) {
      current += ch;
      if (ch === inQuote && str[i - 1] !== '\\') {
        inQuote = null;
      }
    } else if (ch === '"' || ch === "'") {
      inQuote = ch;
      current += ch;
    } else if (ch === '(') {
      parenDepth++;
      current += ch;
    } else if (ch === ')') {
      parenDepth = Math.max(0, parenDepth - 1);
      current += ch;
    } else if (ch === '[') {
      bracketDepth++;
      current += ch;
    } else if (ch === ']') {
      bracketDepth = Math.max(0, bracketDepth - 1);
      current += ch;
    } else if (ch === '{') {
      braceDepth++;
      current += ch;
    } else if (ch === '}') {
      braceDepth = Math.max(0, braceDepth - 1);
      current += ch;
    } else if (ch === ',' && parenDepth === 0 && bracketDepth === 0 && braceDepth === 0) {
      result.push(current.trim());
      current = '';
    } else {
      current += ch;
    }
  }
  if (current.trim().length > 0) {
    result.push(current.trim());
  }
  return result;
}

/**
 * Evaluates a range argument string (e.g. '10', '1, 10', '0, 10, 2') into an exact number array.
 */
function evaluateRangeString(argStr: string, scope?: Record<string, any>): number[] {
  const parts = splitTopLevelArgs(argStr).map((s) => {
    const trimmed = s.trim();
    const parsed = parseInt(trimmed, 10);
    if (!isNaN(parsed)) return parsed;
    if (scope && typeof scope[trimmed] === 'number') return scope[trimmed];
    return NaN;
  }).filter((n) => !isNaN(n));
  let start = 0, stop = 0, step = 1;
  if (parts.length === 1) stop = parts[0];
  else if (parts.length === 2) { start = parts[0]; stop = parts[1]; }
  else if (parts.length >= 3) { start = parts[0]; stop = parts[1]; step = parts[2]; }
  const arr: number[] = [];
  if (step > 0) {
    for (let i = start; i < stop && arr.length < 100; i += step) arr.push(i);
  } else if (step < 0) {
    for (let i = start; i > stop && arr.length < 100; i += step) arr.push(i);
  }
  return arr;
}

/**
 * Compares two debug scope snapshots and returns the set of memory keys
 * (e.g. 'x', 'lst[1]', 'range(5)') that were newly created or mutated in the current step.
 */
function getChangedMemoryKeys(prevScope: Record<string, any>, currScope: Record<string, any>): Set<string> {
  const changed = new Set<string>();

  for (const [k, currVal] of Object.entries(currScope)) {
    const prevVal = prevScope[k];

    const isGeneratedSeq =
      k.startsWith('range') ||
      k.startsWith('enumerate') ||
      k.startsWith('zip') ||
      k.startsWith('reversed') ||
      k.startsWith('sorted');

    // 1. Newly created key in this step
    if (!(k in prevScope)) {
      if (Array.isArray(currVal) && !isGeneratedSeq) {
        if (currVal.length === 0) {
          changed.add(k);
        } else {
          currVal.forEach((_, idx) => changed.add(`${k}[${idx}]`));
        }
      } else {
        changed.add(k);
      }
      continue;
    }

    // 2. Existing key: check if value or elements changed
    if (Array.isArray(currVal)) {
      if (isGeneratedSeq) {
        if (!Array.isArray(prevVal) || JSON.stringify(prevVal) !== JSON.stringify(currVal)) {
          changed.add(k);
        }
      } else {
        if (!Array.isArray(prevVal)) {
          currVal.forEach((_, idx) => changed.add(`${k}[${idx}]`));
        } else {
          const maxLen = Math.max(prevVal.length, currVal.length);
          if (currVal.length === 0 && prevVal.length > 0) {
            changed.add(k);
          }
          for (let idx = 0; idx < maxLen; idx++) {
            if (prevVal[idx] !== currVal[idx]) {
              changed.add(`${k}[${idx}]`);
            }
          }
        }
      }
    } else if (typeof currVal === 'object' && currVal !== null) {
      if (JSON.stringify(prevVal) !== JSON.stringify(currVal)) {
        changed.add(k);
      }
    } else {
      if (prevVal !== currVal) {
        changed.add(k);
      }
    }
  }

  return changed;
}

// Pure tree utility functions hoisted to module scope to prevent TDZ ReferenceError
function findBlockInTree(blocks: CanvasBlock[], targetId: string): CanvasBlock | null {
  for (const b of blocks) {
    if (b.id === targetId) return b;
    if (b.argBlock) {
      const found = findBlockInTree([b.argBlock], targetId);
      if (found) return found;
    }
    if (b.innerBlocks && b.innerBlocks.length > 0) {
      const found = findBlockInTree(b.innerBlocks, targetId);
      if (found) return found;
    }
    if (b.branches && b.branches.length > 0) {
      for (const br of b.branches) {
        if (br.innerBlocks && br.innerBlocks.length > 0) {
          const found = findBlockInTree(br.innerBlocks, targetId);
          if (found) return found;
        }
      }
    }
  }
  return null;
}

function updateAnyBlockInTree(
  blocks: CanvasBlock[],
  targetId: string,
  updater: (blk: CanvasBlock) => CanvasBlock
): CanvasBlock[] {
  return blocks.map((b) => {
    if (b.id === targetId) {
      return updater(b);
    }
    let modified = false;
    let newArg = b.argBlock;
    if (b.argBlock) {
      const updatedArg = updateAnyBlockInTree([b.argBlock], targetId, updater);
      if (updatedArg[0] !== b.argBlock) {
        newArg = updatedArg[0];
        modified = true;
      }
    }
    let newInner = b.innerBlocks;
    if (b.innerBlocks && b.innerBlocks.length > 0) {
      newInner = updateAnyBlockInTree(b.innerBlocks, targetId, updater);
      if (newInner !== b.innerBlocks) modified = true;
    }
    let newBranches = b.branches;
    if (b.branches && b.branches.length > 0) {
      newBranches = b.branches.map((br) => {
        if (br.innerBlocks && br.innerBlocks.length > 0) {
          const updatedBrInner = updateAnyBlockInTree(br.innerBlocks, targetId, updater);
          if (updatedBrInner !== br.innerBlocks) {
            modified = true;
            return { ...br, innerBlocks: updatedBrInner };
          }
        }
        return br;
      });
    }
    if (modified) {
      return { ...b, argBlock: newArg, innerBlocks: newInner, branches: newBranches };
    }
    return b;
  });
}

function getDescendantBlockIds(rootId: string, blocks: CanvasBlock[]): string[] {
  const result: string[] = [];
  const queue = [rootId];
  const visited = new Set<string>();

  while (queue.length > 0) {
    const currId = queue.shift()!;
    if (visited.has(currId)) continue;
    visited.add(currId);

    const blk = findBlockInTree(blocks, currId);
    if (!blk) continue;

    if (blk.nextBlockId && !visited.has(blk.nextBlockId)) {
      result.push(blk.nextBlockId);
      queue.push(blk.nextBlockId);
    }
    if (blk.attachedMethodId && !visited.has(blk.attachedMethodId)) {
      result.push(blk.attachedMethodId);
      queue.push(blk.attachedMethodId);
    }
    if (blk.innerBlocks && blk.innerBlocks.length > 0) {
      for (const ib of blk.innerBlocks) {
        if (!visited.has(ib.id)) {
          result.push(ib.id);
          queue.push(ib.id);
        }
      }
    }
    if (blk.branches && blk.branches.length > 0) {
      for (const br of blk.branches) {
        if (br.innerBlocks && br.innerBlocks.length > 0) {
          for (const bib of br.innerBlocks) {
            if (!visited.has(bib.id)) {
              result.push(bib.id);
              queue.push(bib.id);
            }
          }
        }
      }
    }
    if (blk.argBlock && !visited.has(blk.argBlock.id)) {
      result.push(blk.argBlock.id);
      queue.push(blk.argBlock.id);
    }
  }
  return result;
}

// evaluatePythonLocally and evaluateBlocksLocally are imported from @/lib/blockEvaluator

export default function PracticePage({ params, searchParams }: PracticePageProps) {
  const langKey = params.language || 'python';
  const levelNum = parseInt(params.level || '1', 10);

  const round = getPracticeRound(langKey, levelNum);

  const rawStep = searchParams?.step ? parseInt(searchParams.step, 10) - 1 : 0;
  const initialStep = !isNaN(rawStep) && rawStep >= 0 && rawStep < round.questions.length ? rawStep : 0;

  // States
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(initialStep);

  // Sync step if searchParams changes
  useEffect(() => {
    if (searchParams?.step) {
      const s = parseInt(searchParams.step, 10) - 1;
      if (!isNaN(s) && s >= 0 && s < round.questions.length) {
        setCurrentStepIndex(s);
      }
    }
  }, [searchParams?.step, round.questions.length]);
  const [hearts, setHearts] = useState<number>(5);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [activeInputHelp, setActiveInputHelp] = useState<{ blockId: string; funcType: string } | null>(null);

  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isExecuting, setIsExecuting] = useState<boolean>(false);
  const [terminalOutput, setTerminalOutput] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [runtimeMemory, setRuntimeMemory] = useState<Record<string, any>>({});

  // Execution Mode & Step Debugging States
  const [execMode, setExecMode] = useState<'normal' | 'debug'>('normal');
  const [debugSpeed, setDebugSpeed] = useState<number>(1); // 0.5 | 1 | 2 | 3
  const debugSpeedRef = useRef<number>(debugSpeed);
  debugSpeedRef.current = debugSpeed;
  const [isDebugging, setIsDebugging] = useState<boolean>(false);
  const [debugStepInfo, setDebugStepInfo] = useState<{ current: number; total: number } | null>(null);
  const [executingBlockId, setExecutingBlockId] = useState<string | null>(null);
  const [executingLineIndex, setExecutingLineIndex] = useState<number | null>(null);
  const [highlightedMemoryKeys, setHighlightedMemoryKeys] = useState<Set<string>>(new Set());
  const debugAbortRef = useRef<boolean>(false);

  // Dynamic RAM Storage Row Count (Minimum 5 rows, auto expands to fill tall screens)
  const [ramRows, setRamRows] = useState<number>(5);
  const ramBodyRef = useRef<HTMLDivElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalOutput || isDebugging) {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalOutput, isDebugging]);

  // Custom Variables in Toolbox (starts with default x, y)
  const [customVariables, setCustomVariables] = useState<CustomVariableTemplate[]>([
    { id: 'def-x', name: 'x', kind: 'variable' },
    { id: 'def-y', name: 'y', kind: 'variable' },
  ]);

  // Create Variable Modal States
  const [isVarModalOpen, setIsVarModalOpen] = useState<boolean>(false);
  const [varModalStep, setVarModalStep] = useState<1 | 2>(1);
  const [selectedVarKind, setSelectedVarKind] = useState<'variable' | 'list' | 'tuple' | 'set' | 'dict'>('variable');
  const [varInputName, setVarInputName] = useState<string>('');

  // Scratch-grade Live Insertion Marker & Snapping Target
  interface SnapTarget {
    type: 'below' | 'above' | 'mouth' | 'method_right' | 'arg_slot';
    targetBlockId: string;
    branchId?: string;
    insertIndex?: number;
    markerX: number;
    markerY: number;
    markerWidth?: number;
    markerHeight?: number;
    markerMouthHeight?: number;
  }

  // Drag and Drop Canvas Blocks: Starts with the default Start Block
  const [canvasBlocks, setCanvasBlocks] = useState<CanvasBlock[]>([createDefaultStartBlock()]);
  const [draggedBlockType, setDraggedBlockType] = useState<BlockType | null>(null);
  const [isDraggingBlock, setIsDraggingBlock] = useState<boolean>(false);
  const [draggingBlockId, setDraggingBlockId] = useState<string | null>(null);
  const [activeSnapTarget, setActiveSnapTarget] = useState<SnapTarget | null>(null);
  const [isTrashHovered, setIsTrashHovered] = useState<boolean>(false);
  const [isToolboxHovered, setIsToolboxHovered] = useState<boolean>(false);

  const workspaceRef = useRef<HTMLDivElement>(null);
  const activeSnapTargetRef = useRef<SnapTarget | null>(null);
  const canvasBlocksRef = useRef<CanvasBlock[]>(canvasBlocks);
  canvasBlocksRef.current = canvasBlocks;
  const maxCanvasZIndexRef = useRef<number>(30);
  const pointerDragRef = useRef<{
    blockId?: string;
    source: 'toolbox' | 'canvas' | 'inner';
    blockType?: BlockType;
    varName?: string;
    content?: string;
    withElse?: boolean;
    startX: number;
    startY: number;
    startPointerX?: number;
    startPointerY?: number;
    grabOffsetX: number;
    grabOffsetY: number;
    parentBlockId?: string;
    childIdx?: number;
    branchId?: string;
    initialWidth?: number;
    initialHeight?: number;
    hasMoved: boolean;
  } | null>(null);
  const draggingInfoRef = useRef<{
    source: 'toolbox' | 'canvas' | 'inner';
    blockType: BlockType;
    varName?: string;
    id?: string;
    parentBlockId?: string;
    childIdx?: number;
    branchId?: string;
    content?: string;
    withElse?: boolean;
    initialWidth?: number;
    initialHeight?: number;
    grabX?: number;
    grabY?: number;
    startX?: number;
    startY?: number;
  } | null>(null);

  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimerRef = useRef<NodeJS.Timeout | null>(null);

  const showToast = (msg: string) => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setToastMessage(msg);
    toastTimerRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 2200);
  };

  // Right-Click Context Menu State
  const [contextMenu, setContextMenu] = useState<ContextMenuState>({
    visible: false,
    x: 0,
    y: 0,
    blockId: null,
    targetType: 'block',
  });

  // Direct Typing Mode Code
  const [userCode, setUserCode] = useState<string>('');
  const lastExecutedCodeRef = useRef<string>('');

  const totalQuestions = round.questions.length;
  const currentQuestion: PracticeQuestion = round.questions[currentStepIndex] || round.questions[0];
  const mode: 'block' | 'typing' = (currentQuestion as any).type === 'typing' ? 'typing' : 'block';
  const progressPercent = Math.round(((currentStepIndex + 1) / totalQuestions) * 100);

  // Scratch-style downstream shifted blocks to open up preview space for ghost block
  const shiftedBlockIds = useMemo(() => {
    if (!activeSnapTarget) return new Set<string>();
    if (activeSnapTarget.type === 'below') {
      const target = canvasBlocks.find((b) => b.id === activeSnapTarget.targetBlockId);
      if (!target || !target.nextBlockId) return new Set<string>();
      return new Set<string>([target.nextBlockId, ...getDescendantBlockIds(target.nextBlockId, canvasBlocks)]);
    }
    if (activeSnapTarget.type === 'above') {
      const target = canvasBlocks.find((b) => b.id === activeSnapTarget.targetBlockId);
      if (!target) return new Set<string>();
      return new Set<string>([target.id, ...getDescendantBlockIds(target.id, canvasBlocks)]);
    }
    return new Set<string>();
  }, [activeSnapTarget, canvasBlocks]);

  // Reset/sync on step change: Always start with the Start Block on canvas
  useEffect(() => {
    debugAbortRef.current = true;
    setIsDebugging(false);
    setIsExecuting(false);
    lastExecutedCodeRef.current = '';
    setActiveInputHelp(null);
    setCanvasBlocks([createDefaultStartBlock()]);
    setUserCode('');
    setTerminalOutput('');
    setRuntimeMemory({});
    setHighlightedMemoryKeys(new Set());
    setIsSuccess(false);
    setShowHint(false);
  }, [currentStepIndex]);

  // Keep connected stacks seamlessly aligned without gaps or overlaps
  useEffect(() => {
    if (canvasBlocks.length === 0 || isDraggingBlock) return;
    let needsUpdate = false;
    const nextBlocks = canvasBlocks.map((b) => ({ ...b }));
    const roots = nextBlocks.filter((b) => !b.prevBlockId);

    for (const root of roots) {
      let currId: string | undefined = root.id;
      let currX = root.x;
      let currY = root.y;
      const visited = new Set<string>();

      while (currId && !visited.has(currId)) {
        visited.add(currId);
        const curr = nextBlocks.find((b) => b.id === currId);
        if (!curr) break;

        const el = document.getElementById(`block-${curr.id}`);
        const h = el ? el.offsetHeight : 42;

        if (curr.nextBlockId) {
          const next = nextBlocks.find((b) => b.id === curr.nextBlockId);
          if (next) {
            const expectedY = currY + h;
            if (next.x !== currX || Math.abs(next.y - expectedY) > 1) {
              next.x = currX;
              next.y = expectedY;
              needsUpdate = true;
            }
            currY = expectedY;
            currId = curr.nextBlockId;
          } else {
            break;
          }
        } else {
          break;
        }
      }
    }

    // Helper to align method blocks attached horizontally to any block (root or nested)
    const alignAttachedMethods = (target: CanvasBlock) => {
      if (!target.attachedMethodId) return;
      let mTargetId: string = target.id;
      let mCurrId: string | undefined = target.attachedMethodId;
      const mVisited = new Set<string>();
      while (mCurrId && !mVisited.has(mCurrId)) {
        mVisited.add(mCurrId);
        const mTarget = findBlockInTree(nextBlocks, mTargetId);
        const mBlock = findBlockInTree(nextBlocks, mCurrId);
        if (mTarget && mBlock) {
          const mTargetEl = document.getElementById(`block-${mTarget.id}`);
          let expX = mTarget.x + (mTargetEl ? mTargetEl.offsetWidth : 140) - 1;
          let expY = mTarget.y;
          if (mTargetEl && workspaceRef.current) {
            const cRect = workspaceRef.current.getBoundingClientRect();
            const tRect = mTargetEl.getBoundingClientRect();
            expX = Math.round(tRect.right - cRect.left) - 1;
            expY = Math.round(tRect.top - cRect.top);
          }
          if (Math.abs(mBlock.x - expX) > 1 || Math.abs(mBlock.y - expY) > 1) {
            mBlock.x = expX;
            mBlock.y = expY;
            needsUpdate = true;
          }
          mTargetId = mBlock.id;
          mCurrId = mBlock.attachedMethodId;
        } else {
          break;
        }
      }
    };

    const checkTreeForMethods = (list: CanvasBlock[]) => {
      for (const b of list) {
        if (b.attachedMethodId) {
          alignAttachedMethods(b);
        }
        if (b.argBlock) {
          checkTreeForMethods([b.argBlock]);
        }
        if (b.innerBlocks) {
          checkTreeForMethods(b.innerBlocks);
        }
        if (b.branches) {
          for (const br of b.branches) {
            if (br.innerBlocks) {
              checkTreeForMethods(br.innerBlocks);
            }
          }
        }
      }
    };
    checkTreeForMethods(nextBlocks);

    if (needsUpdate) {
      setCanvasBlocks(nextBlocks);
    }
  }, [canvasBlocks, isDraggingBlock]);

  // Prevent default browser context menu globally across the practice studio
  useEffect(() => {
    const handleGlobalContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    window.addEventListener('contextmenu', handleGlobalContextMenu);
    return () => {
      window.removeEventListener('contextmenu', handleGlobalContextMenu);
    };
  }, []);

  // Close context menu on outside click or Escape key
  useEffect(() => {
    const handleOutsideClick = () => {
      if (contextMenu.visible) {
        setContextMenu({ visible: false, x: 0, y: 0, blockId: null, targetType: 'block' });
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && contextMenu.visible) {
        setContextMenu({ visible: false, x: 0, y: 0, blockId: null, targetType: 'block' });
      }
    };
    window.addEventListener('click', handleOutsideClick);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [contextMenu.visible]);

  // ResizeObserver to dynamically calculate RAM rows based on container height (min 5 rows)
  useEffect(() => {
    const el = ramBodyRef.current;
    if (!el) return;

    const calculateRows = () => {
      const height = el.clientHeight;
      const usable = Math.max(0, height - 24);
      // Each row takes ~54px: box (34px) + label (12px) + gaps (8px)
      const fittedRows = Math.floor((usable + 8) / 54);
      setRamRows(Math.max(5, fittedRows));
    };

    calculateRows();
    const ro = new ResizeObserver(() => calculateRows());
    ro.observe(el);

    return () => ro.disconnect();
  }, []);

  // Generate python code from blocks (sorted by vertical position, then horizontal)
  // Generate python code from blocks (supports nested C-blocks and multi-branch E-blocks)
  const getAssembledCode = (): string => {
    if (mode === 'typing') {
      return userCode;
    }
    const orderedBlocks = getOrderedCanvasBlocks(canvasBlocks);

    const generateBlockLines = (blk: CanvasBlock, currentIndentLevel: number): string[] => {
      if (blk.type === 'start') return [];
      // Blocks attached horizontally to another block are assembled into the parent's line
      if (blk.attachedToBlockId) return [];

      const indentStr = '    '.repeat(currentIndentLevel);
      const out: string[] = [];

      // Helper to traverse and assemble chained methods attached horizontally to this block
      const getMethodChain = (b: CanvasBlock): string => {
        let chain = '';
        let currMId = b.attachedMethodId;
        const visitedM = new Set<string>();
        while (currMId && !visitedM.has(currMId)) {
          visitedM.add(currMId);
          const m = findBlockInTree(canvasBlocks, currMId);
          if (!m) break;
          const mName = m.methodName || 'method';
          const mArg = (m.content || '').trim();
          chain += `.${mName}(${mArg})`;
          currMId = m.attachedMethodId;
        }
        return chain;
      };

      // Helper to evaluate expressions recursively when blocks are nested as arguments
      const generateExpression = (b: CanvasBlock): string => {
        const chain = getMethodChain(b);
        if (b.type === 'math') {
          const inner = b.argBlock ? generateExpression(b.argBlock) : (b.content || '').trim();
          return `None # math(${inner})${chain}`;
        }
        const funcTypes = [
          'print', 'input', 'len', 'int', 'float', 'str', 'bool', 'type',
          'round', 'abs', 'sum', 'min', 'max', 'open',
          'range', 'map', 'sorted', 'enumerate', 'zip', 'all', 'any', 'reversed'
        ];
        if (funcTypes.includes(b.type)) {
          const inner = b.argBlock ? generateExpression(b.argBlock) : (b.content || '').trim();
          return `${b.type}(${inner})${chain}`;
        }
        if (b.type === 'variable') {
          const vName = (b.varName || 'x').trim();
          return `${vName}${chain}`;
        }
        return `${(b.content || '').trim()}${chain}`;
      };

      const mSuffix = getMethodChain(blk);

      if (blk.type === 'method') {
        // Standalone method block placed on canvas without a parent
        out.push(`${indentStr}# .${blk.methodName || 'method'}(${(blk.content || '').trim()})${mSuffix}`);
      } else if (blk.type === 'variable') {
        const vName = (blk.varName || 'x').trim();
        const content = (blk.content || '').trim();
        const expr = blk.argBlock ? generateExpression(blk.argBlock) : content;
        if (mSuffix && !expr) {
          // Statement method call without assignment: e.g. nums.append(5) or s.clear()
          out.push(`${indentStr}${vName}${mSuffix}`);
        } else {
          out.push(`${indentStr}${vName} = ${expr || 'None'}${mSuffix}`);
        }
      } else if (blk.type === 'list') {
        const vName = (blk.varName || 'my_list').trim();
        const items = (blk.items || []).filter((i) => i.trim().length > 0).map((i) => i.trim()).join(', ');
        out.push(`${indentStr}${vName} = [${items}]${mSuffix}`);
      } else if (blk.type === 'tuple') {
        const vName = (blk.varName || 'my_tuple').trim();
        const itemsList = (blk.items || []).filter((i) => i.trim().length > 0).map((i) => i.trim());
        const items = itemsList.length === 1 ? `${itemsList[0]},` : itemsList.join(', ');
        out.push(`${indentStr}${vName} = (${items})${mSuffix}`);
      } else if (blk.type === 'set') {
        const vName = (blk.varName || 'my_set').trim();
        const itemsList = (blk.items || []).filter((i) => i.trim().length > 0).map((i) => i.trim());
        if (itemsList.length === 0) {
          out.push(`${indentStr}${vName} = set()${mSuffix}`);
        } else {
          out.push(`${indentStr}${vName} = {${itemsList.join(', ')}}${mSuffix}`);
        }
      } else if (blk.type === 'dict') {
        const vName = (blk.varName || 'my_dict').trim();
        const pairs = (blk.dictPairs || [])
          .filter((p) => p.key.trim().length > 0)
          .map((p) => {
            const rawKey = p.key.trim();
            const formattedKey = (/^['"].*['"]$/.test(rawKey) || /^-?\d+(\.\d+)?$/.test(rawKey))
              ? rawKey
              : `"${rawKey}"`;
            return `${formattedKey}: ${p.value.trim() || 'None'}`;
          })
          .join(', ');
        out.push(`${indentStr}${vName} = {${pairs}}${mSuffix}`);
      } else if (blk.type === 'math') {
        const content = blk.argBlock ? generateExpression(blk.argBlock) : (blk.content || '').trim();
        out.push(`${indentStr}# math(${content})${mSuffix}  # len, round, abs, sum, min, max 중 함수를 선택하세요`);
      } else if (blk.type === 'iter') {
        const content = blk.argBlock ? generateExpression(blk.argBlock) : (blk.content || '').trim();
        out.push(`${indentStr}iter(${content})${mSuffix}`);
      } else if ([
        'print', 'input', 'len', 'int', 'float', 'str', 'bool', 'type',
        'round', 'abs', 'sum', 'min', 'max', 'open',
        'range', 'map', 'sorted', 'enumerate', 'zip', 'all', 'any', 'reversed'
      ].includes(blk.type)) {
        const content = blk.argBlock ? generateExpression(blk.argBlock) : (blk.content || '').trim();
        out.push(`${indentStr}${blk.type}(${content})${mSuffix}`);
      } else if (blk.type === 'def') {
        const fName = (blk.varName || 'my_func').trim();
        const args = (blk.content || '').trim();
        out.push(`${indentStr}def ${fName}(${args}):`);
        let hasChildren = false;
        if (blk.innerBlocks && blk.innerBlocks.length > 0) {
          hasChildren = true;
          for (const child of blk.innerBlocks) {
            out.push(...generateBlockLines(child, currentIndentLevel + 1));
          }
        }
        if (blk.hasReturn) {
          const retVal = (blk.returnVal || '').trim();
          out.push(`${indentStr}    return ${retVal}`);
        } else if (!hasChildren) {
          out.push(`${indentStr}    pass`);
        }
      } else if (blk.type === 'return') {
        const content = (blk.content || '').trim();
        out.push(`${indentStr}return ${content}`);
      } else if (blk.type === 'for_range' || blk.type === 'for_in') {
        const v = (blk.varName || (blk.type === 'for_range' ? 'i' : 'item')).trim();
        const defaultSeq = blk.type === 'for_range' ? 'range(5)' : 'items';
        const seq = blk.argBlock ? generateExpression(blk.argBlock) : (blk.content || defaultSeq).trim();
        out.push(`${indentStr}for ${v} in ${seq}:`);
        if (blk.innerBlocks && blk.innerBlocks.length > 0) {
          for (const child of blk.innerBlocks) {
            out.push(...generateBlockLines(child, currentIndentLevel + 1));
          }
        } else {
          out.push(`${indentStr}    pass`);
        }
      } else if (blk.type === 'while') {
        const cond = (blk.content || '').trim();
        out.push(`${indentStr}while ${cond || 'False'}:`);
        if (blk.innerBlocks && blk.innerBlocks.length > 0) {
          for (const child of blk.innerBlocks) {
            out.push(...generateBlockLines(child, currentIndentLevel + 1));
          }
        } else {
          out.push(`${indentStr}    pass`);
        }
      } else if (blk.type === 'break') {
        out.push(`${indentStr}break`);
      } else if (blk.type === 'continue') {
        out.push(`${indentStr}continue`);
      } else if (blk.type === 'if') {
        // Multi-branch E-shape conditional execution
        const branches = (blk.branches && blk.branches.length > 0)
          ? blk.branches
          : [{ id: 'br-if-0', kind: 'if' as const, condition: blk.content || '', innerBlocks: blk.innerBlocks || [] }];

        for (const branch of branches) {
          if (branch.kind === 'if') {
            const cond = (branch.condition || '').trim();
            out.push(`${indentStr}if ${cond || 'False'}:`);
          } else if (branch.kind === 'elif') {
            const cond = (branch.condition || '').trim();
            out.push(`${indentStr}elif ${cond || 'False'}:`);
          } else {
            out.push(`${indentStr}else:`);
          }

          if (branch.innerBlocks && branch.innerBlocks.length > 0) {
            for (const child of branch.innerBlocks) {
              out.push(...generateBlockLines(child, currentIndentLevel + 1));
            }
          } else {
            out.push(`${indentStr}    pass`);
          }
        }
      } else if (blk.type === 'elif') {
        const cond = (blk.content || '').trim();
        out.push(`${indentStr}elif ${cond || 'False'}:`);
        if (blk.innerBlocks && blk.innerBlocks.length > 0) {
          for (const child of blk.innerBlocks) {
            out.push(...generateBlockLines(child, currentIndentLevel + 1));
          }
        } else {
          out.push(`${indentStr}    pass`);
        }
      } else if (blk.type === 'else') {
        out.push(`${indentStr}else:`);
        if (blk.innerBlocks && blk.innerBlocks.length > 0) {
          for (const child of blk.innerBlocks) {
            out.push(...generateBlockLines(child, currentIndentLevel + 1));
          }
        } else {
          out.push(`${indentStr}    pass`);
        }
      }

      return out;
    };

    const lines: string[] = [];
    for (const blk of orderedBlocks) {
      lines.push(...generateBlockLines(blk, 0));
    }
    return lines.join('\n');
  };

  // Build Dynamic Real-time Memory Boxes based purely on variables stored in RAM
  const getMemoryBoxes = (): MemoryBoxItem[] => {
    const code = getAssembledCode().trim();
    const boxes: MemoryBoxItem[] = [];
    const varMap = new Map<string, { value: string; fullValue?: string; type: string }>();

    // 1. First, populate from real runtime memory scope (live evaluated values)
    if (runtimeMemory && Object.keys(runtimeMemory).length > 0) {
      for (const [varName, val] of Object.entries(runtimeMemory)) {
        if (!varName || typeof varName !== 'string') continue;

        const isGeneratedSequence =
          varName.startsWith('range') ||
          varName.startsWith('enumerate') ||
          varName.startsWith('zip') ||
          varName.startsWith('reversed') ||
          varName.startsWith('sorted');

        if (Array.isArray(val)) {
          if (isGeneratedSequence) {
            let valType = 'range';
            if (varName.startsWith('enumerate')) valType = 'enum';
            else if (varName.startsWith('zip')) valType = 'zip';
            else if (varName.startsWith('reversed')) valType = 'reversed';
            else if (varName.startsWith('sorted')) valType = 'sorted';

            const fullSeq = `[${val.map((v) => (typeof v === 'string' ? `'${v}'` : String(v))).join(', ')}]`;
            const shortPreview =
              val.length <= 4
                ? fullSeq
                : `[${val.slice(0, 3).map((v) => (typeof v === 'string' ? `'${v}'` : String(v))).join(', ')}, …]`;

            varMap.set(varName, {
              value: shortPreview,
              fullValue: fullSeq,
              type: valType,
            });
          } else {
            // User-created list: separate into individual memory cells: lst[0], lst[1], ...
            if (val.length === 0) {
              varMap.set(varName, { value: '[]', fullValue: '[]', type: 'list' });
            } else {
              val.forEach((item, idx) => {
                const itemType =
                  typeof item === 'number'
                    ? Number.isInteger(item)
                      ? 'int'
                      : 'float'
                    : typeof item === 'string'
                    ? 'str'
                    : typeof item === 'boolean'
                    ? 'bool'
                    : Array.isArray(item)
                    ? 'list'
                    : 'var';
                const itemStr = typeof item === 'string' ? `'${item}'` : String(item ?? 'None');
                const slotKey = `${varName}[${idx}]`;
                varMap.set(slotKey, {
                  value: itemStr,
                  fullValue: itemStr,
                  type: itemType,
                });
              });
            }
          }
          continue;
        }

        let valType = 'int';
        let cleanVal = String(val ?? '');

        if (typeof val === 'number') {
          valType = Number.isInteger(val) ? 'int' : 'float';
        } else if (typeof val === 'string') {
          valType = 'str';
          cleanVal = `'${val}'`;
        } else if (typeof val === 'boolean') {
          valType = 'bool';
          cleanVal = val ? 'True' : 'False';
        } else if (typeof val === 'object' && val !== null) {
          valType = 'dict';
          cleanVal = JSON.stringify(val);
        } else if (val === null || val === undefined) {
          valType = 'None';
          cleanVal = 'None';
        }

        varMap.set(varName, {
          value: cleanVal,
          fullValue: cleanVal,
          type: valType,
        });
      }
    }

    // 2. Supplement statically from canvas blocks (for block mode)
    if (mode !== 'typing') {
      const allBlocks: CanvasBlock[] = [];
      const collect = (list: CanvasBlock[]) => {
        for (const b of list) {
          allBlocks.push(b);
          if (b.innerBlocks) collect(b.innerBlocks);
          if (b.branches) {
            for (const br of b.branches) {
              if (br.innerBlocks) collect(br.innerBlocks);
            }
          }
        }
      };
      collect(canvasBlocks);

      for (const b of allBlocks) {
        if (b.type === 'variable') {
          const vName = (b.varName || 'x').trim();
          if (vName && !varMap.has(vName)) {
            varMap.set(vName, { value: b.content?.trim() || '0', fullValue: b.content?.trim() || '0', type: 'var' });
          }
        } else if (b.type === 'list') {
          const vName = (b.varName || 'my_list').trim();
          const items = (b.items || []).filter((i) => i.trim().length > 0);
          if (items.length === 0) {
            varMap.set(vName, { value: '[]', fullValue: '[]', type: 'list' });
          } else {
            items.forEach((itemRaw, idx) => {
              const item = itemRaw.trim();
              const slotKey = `${vName}[${idx}]`;
              let itemType = 'var';
              const parsed = parseFloat(item);
              if (!isNaN(parsed) && !item.includes('"') && !item.includes("'")) {
                itemType = Number.isInteger(parsed) ? 'int' : 'float';
              } else if (item.startsWith('"') || item.startsWith("'")) {
                itemType = 'str';
              } else if (item === 'True' || item === 'False') {
                itemType = 'bool';
              }
              varMap.set(slotKey, {
                value: item,
                fullValue: item,
                type: itemType,
              });
            });
          }
        } else if (b.type === 'tuple') {
          const vName = (b.varName || 'my_tuple').trim();
          if (vName && !varMap.has(vName)) {
            const items = (b.items || []).filter((i) => i.trim().length > 0).join(', ');
            varMap.set(vName, { value: `(${items})`, fullValue: `(${items})`, type: 'tuple' });
          }
        } else if (b.type === 'dict') {
          const vName = (b.varName || 'my_dict').trim();
          if (vName && !varMap.has(vName)) {
            varMap.set(vName, { value: '{...}', fullValue: '{...}', type: 'dict' });
          }
        } else if (b.type === 'for_range') {
          const vName = (b.varName || 'i').trim();
          const rangeArg = (b.content || '5').trim();
          const rangeLabel = `range(${rangeArg})`;
          const numbers = evaluateRangeString(rangeArg, runtimeMemory);
          const fullSeqStr = `[${numbers.join(', ')}]`;
          const shortPreview =
            numbers.length <= 4
              ? fullSeqStr
              : `[${numbers.slice(0, 3).join(', ')}, …]`;

          if (!varMap.has(rangeLabel)) {
            varMap.set(rangeLabel, {
              value: shortPreview,
              fullValue: fullSeqStr,
              type: 'range',
            });
          }
          if (vName && !varMap.has(vName)) {
            varMap.set(vName, {
              value: numbers.length > 0 ? String(numbers[0]) : '0',
              fullValue: numbers.length > 0 ? String(numbers[0]) : '0',
              type: 'int',
            });
          }
        } else if (b.type === 'for_in') {
          const vName = (b.varName || 'item').trim();
          if (vName && !varMap.has(vName)) {
            varMap.set(vName, { value: '-', fullValue: '-', type: 'item' });
          }
        }
      }
    } else if (code) {
      // 3. Supplement statically from typed code
      const lines = code.split('\n');
      for (const line of lines) {
        const trimmed = line.trim();

        // 3a. Indexed assignment: e.g. lst[0] = 99
        const indexAssignMatch = trimmed.match(/^([a-zA-Z_]\w*)\[(\d+)\]\s*=\s*([\s\S]+)$/);
        if (indexAssignMatch) {
          const vName = indexAssignMatch[1];
          const idx = indexAssignMatch[2];
          const valExpr = indexAssignMatch[3].trim();
          const slotKey = `${vName}[${idx}]`;
          let itemType = 'var';
          const parsed = parseFloat(valExpr);
          if (!isNaN(parsed) && !valExpr.includes('"') && !valExpr.includes("'")) {
            itemType = Number.isInteger(parsed) ? 'int' : 'float';
          } else if (valExpr.startsWith('"') || valExpr.startsWith("'")) {
            itemType = 'str';
          } else if (valExpr === 'True' || valExpr === 'False') {
            itemType = 'bool';
          }
          varMap.set(slotKey, {
            value: valExpr,
            fullValue: valExpr,
            type: itemType,
          });
          continue;
        }

        // 3b. Variable assignment: e.g. x = 10, lst = [1, 2], r = range(5)
        const assignMatch = trimmed.match(/^([a-zA-Z_]\w*)\s*=\s*([\s\S]+)$/);
        if (assignMatch) {
          const varName = assignMatch[1];
          const rawExpr = assignMatch[2].trim();

          // User-created list literal: [ ... ] -> split into lst[0], lst[1], ...
          if (rawExpr.startsWith('[') && rawExpr.endsWith(']')) {
            const inner = rawExpr.slice(1, -1).trim();
            if (!inner) {
              if (!varMap.has(varName)) {
                varMap.set(varName, { value: '[]', fullValue: '[]', type: 'list' });
              }
            } else {
              const items = splitTopLevelArgs(inner);
              items.forEach((itemRaw, idx) => {
                const item = itemRaw.trim();
                const slotKey = `${varName}[${idx}]`;
                if (!varMap.has(slotKey)) {
                  let itemType = 'var';
                  const parsed = parseFloat(item);
                  if (!isNaN(parsed) && !item.includes('"') && !item.includes("'")) {
                    itemType = Number.isInteger(parsed) ? 'int' : 'float';
                  } else if (item.startsWith('"') || item.startsWith("'")) {
                    itemType = 'str';
                  } else if (item === 'True' || item === 'False') {
                    itemType = 'bool';
                  }
                  varMap.set(slotKey, {
                    value: item,
                    fullValue: item,
                    type: itemType,
                  });
                }
              });
            }
            continue;
          }

          // Function-generated range assignment: e.g. r = range(10)
          const rangeCallMatch = rawExpr.match(/^range\(([\s\S]+?)\)$/);
          if (rangeCallMatch) {
            const rangeArg = rangeCallMatch[1].trim();
            const numbers = evaluateRangeString(rangeArg, runtimeMemory);
            const fullSeqStr = `[${numbers.join(', ')}]`;
            const shortPreview =
              numbers.length <= 4
                ? fullSeqStr
                : `[${numbers.slice(0, 3).join(', ')}, …]`;

            if (!varMap.has(varName)) {
              varMap.set(varName, {
                value: shortPreview,
                fullValue: fullSeqStr,
                type: 'range',
              });
            }
            continue;
          }

          if (!varMap.has(varName)) {
            varMap.set(varName, {
              value: rawExpr,
              fullValue: rawExpr,
              type: 'var',
            });
          }
          continue;
        }

        const forRangeMatch = trimmed.match(/^for\s+([a-zA-Z_]\w*)\s+in\s+range\(([\s\S]+?)\):/);
        if (forRangeMatch) {
          const varName = forRangeMatch[1];
          const rangeArg = forRangeMatch[2].trim();
          const rangeLabel = `range(${rangeArg})`;
          const numbers = evaluateRangeString(rangeArg, runtimeMemory);
          const fullSeqStr = `[${numbers.join(', ')}]`;
          const shortPreview =
            numbers.length <= 4
              ? fullSeqStr
              : `[${numbers.slice(0, 3).join(', ')}, …]`;

          if (!varMap.has(rangeLabel)) {
            varMap.set(rangeLabel, {
              value: shortPreview,
              fullValue: fullSeqStr,
              type: 'range',
            });
          }
          if (!varMap.has(varName)) {
            varMap.set(varName, {
              value: numbers.length > 0 ? String(numbers[0]) : '0',
              fullValue: numbers.length > 0 ? String(numbers[0]) : '0',
              type: 'int',
            });
          }
          continue;
        }

        const forInMatch = trimmed.match(/^for\s+([a-zA-Z_]\w*)\s+in\s+([\s\S]+?):/);
        if (forInMatch) {
          const varName = forInMatch[1];
          const seqExpr = forInMatch[2].trim();
          if (/^(enumerate|zip|reversed|sorted)\(/.test(seqExpr)) {
            const funcName = seqExpr.match(/^([a-zA-Z_]\w*)/)?.[1] || 'seq';
            if (!varMap.has(funcName)) {
              varMap.set(funcName, { value: '[...]', fullValue: `${funcName} sequence`, type: funcName });
            }
          }
          if (!varMap.has(varName)) {
            varMap.set(varName, { value: '-', fullValue: '-', type: 'item' });
          }
          continue;
        }
      }
    }

    // Convert all discovered variables into memory box items
    varMap.forEach((info, varName) => {
      boxes.push({
        id: `var-${varName}-${boxes.length}`,
        name: varName,
        value: info.value,
        fullValue: info.fullValue || info.value,
        type: info.type,
        active: true,
      });
    });

    // Fill remaining slots up to dynamic slots (ramRows x 5, minimum 25 boxes)
    const TOTAL_RAM_SLOTS = Math.max(25, ramRows * 5);
    while (boxes.length < TOTAL_RAM_SLOTS) {
      const idx = boxes.length;
      boxes.push({
        id: `empty-${idx}`,
        name: idx < 10 ? `RAM 0${idx}` : `RAM ${idx}`,
        value: '-',
        type: 'null',
        active: false,
      });
    }

    return boxes.slice(0, TOTAL_RAM_SLOTS);
  };

  const memoryBoxes = getMemoryBoxes();

  // Helper for interruptible sleep during debugging that dynamically reflects live speed changes
  const sleepInterruptible = (baseMs: number = 600) => {
    return new Promise<void>((resolve) => {
      const start = Date.now();
      const interval = setInterval(() => {
        const currentTargetMs = Math.round(baseMs / (debugSpeedRef.current || 1));
        if (debugAbortRef.current || Date.now() - start >= currentTargetMs) {
          clearInterval(interval);
          resolve();
        }
      }, 25);
    });
  };

  // Helper to validate code execution result
  // - Output comparison: actualOut must match expectedOut (trimmed) and cannot be empty
  // - Block mode: Purely output-based (for conceptual learning)
  // - Typing mode: Disallows unresolved blanks, residual bug tokens, or excessive typos outside the blank
  const checkSubmissionPass = (
    userCodeStr: string,
    actualOut: string,
    expectedOut: string,
    isErr: boolean,
    question: PracticeQuestion,
    isTyping: boolean
  ): boolean => {
    if (isErr) return false;
    const cleanActual = actualOut.trim();
    const cleanExpected = expectedOut.trim();
    if (!cleanActual || cleanActual !== cleanExpected) return false;

    // Block mode is lenient (conceptual explanation stage)
    if (!isTyping) return true;

    const trimmedUser = userCodeStr.trim();
    if (!trimmedUser) return false;

    // 1. Unfilled blank placeholder check: [   ], [ ? ], [___], [빈칸]
    if (/\[\s*(?:|\?|___|빈칸)\s*\]/.test(trimmedUser)) {
      return false;
    }

    // 2. In bug fix mode, template bug should not persist
    if (question.kind === 'fix_bug' && question.templateCode) {
      const bugTokens = ['pritn', 'pirnt'];
      if (bugTokens.some((b) => question.templateCode?.includes(b) && trimmedUser.includes(b))) {
        return false;
      }
    }

    // 3. Typo count check for fill-in-the-blank questions
    if (question.kind === 'fill_blank' && question.templateCode) {
      const match = question.templateCode.match(/^(.*?)\[\s*(?:|\?|___|빈칸)\s*\](.*)$/);
      if (match) {
        const [, prefix, suffix] = match;
        if (prefix && !trimmedUser.startsWith(prefix.trimEnd())) {
          let prefixMismatches = 0;
          for (let i = 0; i < prefix.length; i++) {
            if (trimmedUser[i] !== prefix[i]) prefixMismatches++;
          }
          if (prefixMismatches > 2) return false;
        }
        if (suffix && !trimmedUser.endsWith(suffix.trimStart())) {
          let suffixMismatches = 0;
          for (let i = 0; i < suffix.length; i++) {
            const userChar = trimmedUser[trimmedUser.length - suffix.length + i];
            if (userChar !== suffix[i]) suffixMismatches++;
          }
          if (suffixMismatches > 2) return false;
        }
      }
    }

    return true;
  };

  // Manual Code Execution (Normal Run or Progressive Step Debugging)
  const handleExecuteManual = async () => {
    if (isExecuting || isDebugging) {
      debugAbortRef.current = true;
      setIsDebugging(false);
      setIsExecuting(false);
      setExecutingBlockId(null);
      setExecutingLineIndex(null);
      setDebugStepInfo(null);
      setHighlightedMemoryKeys(new Set());
      return;
    }

    const codeToRun = getAssembledCode().trim();
    if (!codeToRun) {
      lastExecutedCodeRef.current = '';
      setTerminalOutput('');
      setRuntimeMemory({});
      setHighlightedMemoryKeys(new Set());
      setIsSuccess(false);
      setDebugStepInfo(null);
      return;
    }

    debugAbortRef.current = false;

    // Always clear terminal, memory, and success state cleanly before new execution
    setTerminalOutput('');
    setRuntimeMemory({});
    setHighlightedMemoryKeys(new Set());
    setIsSuccess(false);

    // Yield briefly so React flushes the cleared terminal state to the DOM
    await new Promise((r) => setTimeout(r, 60));

    // 1. NORMAL EXECUTION MODE (Instant 0ms Local Evaluation)
    if (execMode === 'normal') {
      setIsExecuting(true);
      try {
        let actualOut = '';
        let isErr = false;

        if (mode !== 'typing') {
          const orderedBlocks = getOrderedCanvasBlocks(canvasBlocks);
          const evalRes = evaluateBlocksLocally(orderedBlocks);
          if (evalRes.scope) setRuntimeMemory(evalRes.scope);
          if (evalRes.success) {
            actualOut = (evalRes.stdout || '').replace(/^\r?\n+|\r?\n+$/g, '');
          } else if (evalRes.stderr) {
            isErr = true;
            actualOut = evalRes.stderr.trim();
          }
        } else if (langKey === 'python') {
          const localRes = evaluatePythonLocally(codeToRun);
          if (localRes.requiresRemote) {
            const res = await executeCode((langKey as any), codeToRun);
            actualOut = (res.stdout || '').replace(/^\r?\n+|\r?\n+$/g, '');
            if (res.stderr) {
              isErr = true;
              actualOut = res.stderr.trim();
            }
          } else {
            if (localRes.scope) setRuntimeMemory(localRes.scope);
            if (localRes.success) {
              actualOut = (localRes.stdout || '').replace(/^\r?\n+|\r?\n+$/g, '');
            } else if (localRes.stderr) {
              isErr = true;
              actualOut = localRes.stderr.trim();
            }
          }
        } else {
          const res = await executeCode((langKey as any), codeToRun);
          actualOut = (res.stdout || '').replace(/^\r?\n+|\r?\n+$/g, '');
          if (res.stderr) {
            isErr = true;
            actualOut = res.stderr.trim();
          }
        }

        lastExecutedCodeRef.current = codeToRun;
        const expectedOut = currentQuestion.expectedOutput.trim();
        setTerminalOutput(actualOut);

        const passed = checkSubmissionPass(
          codeToRun,
          actualOut,
          expectedOut,
          isErr,
          currentQuestion,
          mode === 'typing'
        );

        if (passed) {
          setIsSuccess(true);
        } else {
          setIsSuccess(false);
          setHearts((prev) => {
            const next = Math.max(0, prev - 1);
            if (next === 0) setIsGameOver(true);
            return next;
          });
        }
      } catch (err: any) {
        setTerminalOutput(err?.message || '실행 중 오류가 발생했습니다.');
        setIsSuccess(false);
      } finally {
        setIsExecuting(false);
      }
    } else {
      // 2. DEBUGGING MODE: Step-by-Step Progressive Execution (0.6s base step delay, live speed adjustable)
      setIsDebugging(true);
      setExecutingBlockId(null);
      setExecutingLineIndex(null);
      setHighlightedMemoryKeys(new Set());

      try {
        let actualOut = '';
        let isErr = false;

        // Step 1: Initial pause on execution start so the user sees the start of debug
        await sleepInterruptible(600);

        if (mode !== 'typing') {
          const orderedBlocks = getOrderedCanvasBlocks(canvasBlocks);
          const activeBlocks = orderedBlocks.filter((b) => b.type !== 'start');
          const trace = evaluateBlocksWithTrace(activeBlocks);
          const steps = trace.steps;
          const totalSteps = Math.max(1, steps.length);
          setDebugStepInfo({ current: 0, total: totalSteps });

          if (steps.length === 0) {
            actualOut = (trace.stdout || '').replace(/^\r?\n+|\r?\n+$/g, '');
            setTerminalOutput(actualOut);
          } else {
            let prevScope: Record<string, any> = {};
            for (let i = 0; i < steps.length; i++) {
              if (debugAbortRef.current) break;
              const step = steps[i];
              setDebugStepInfo({ current: i + 1, total: totalSteps });
              if (step.blockId) setExecutingBlockId(step.blockId);

              const changedKeys = getChangedMemoryKeys(prevScope, step.scope);
              setHighlightedMemoryKeys(changedKeys);
              prevScope = { ...step.scope };

              setRuntimeMemory({ ...step.scope });
              setTerminalOutput(step.stdout);
              if (step.stderr) {
                isErr = true;
                actualOut = step.stderr.trim();
                setTerminalOutput(actualOut);
                break;
              }
              await sleepInterruptible(600);
            }
            if (!isErr) {
              actualOut = (trace.stdout || '').replace(/^\r?\n+|\r?\n+$/g, '');
              setTerminalOutput(actualOut);
            }
          }
        } else {
          const trace = evaluatePythonWithTrace(codeToRun);
          const steps = trace.steps;
          const totalSteps = Math.max(1, steps.length);
          setDebugStepInfo({ current: 0, total: totalSteps });

          if (steps.length === 0) {
            actualOut = (trace.stdout || '').replace(/^\r?\n+|\r?\n+$/g, '');
            setTerminalOutput(actualOut);
          } else {
            let prevScope: Record<string, any> = {};
            for (let i = 0; i < steps.length; i++) {
              if (debugAbortRef.current) break;
              const step = steps[i];
              setDebugStepInfo({ current: i + 1, total: totalSteps });
              if (step.lineIndex !== undefined) setExecutingLineIndex(step.lineIndex);

              const changedKeys = getChangedMemoryKeys(prevScope, step.scope);
              setHighlightedMemoryKeys(changedKeys);
              prevScope = { ...step.scope };

              setRuntimeMemory({ ...step.scope });
              setTerminalOutput(step.stdout);
              if (step.stderr) {
                isErr = true;
                actualOut = step.stderr.trim();
                setTerminalOutput(actualOut);
                break;
              }
              await sleepInterruptible(600);
            }
            if (!isErr) {
              actualOut = (trace.stdout || '').replace(/^\r?\n+|\r?\n+$/g, '');
              setTerminalOutput(actualOut);
            }
          }
        }

        // Clean visual execution indicator once trace finishes
        setExecutingBlockId(null);
        setExecutingLineIndex(null);
        setHighlightedMemoryKeys(new Set());

        if (!debugAbortRef.current) {
          lastExecutedCodeRef.current = codeToRun;
          const expectedOut = currentQuestion.expectedOutput.trim();

          // Pause after execution completes so the user can inspect output and memory before success modal
          await sleepInterruptible(900);

          if (!debugAbortRef.current) {
            const passed = checkSubmissionPass(
              codeToRun,
              actualOut,
              expectedOut,
              isErr,
              currentQuestion,
              mode === 'typing'
            );

            if (passed) {
              setIsSuccess(true);
            } else {
              setIsSuccess(false);
              setHearts((prev) => {
                const next = Math.max(0, prev - 1);
                if (next === 0) setIsGameOver(true);
                return next;
              });
            }
          }
        }
      } catch (err: any) {
        if (!debugAbortRef.current) {
          setTerminalOutput(err?.message || '디버깅 실행 중 오류가 발생했습니다.');
          setIsSuccess(false);
        }
      } finally {
        setIsDebugging(false);
        setExecutingBlockId(null);
        setExecutingLineIndex(null);
        setDebugStepInfo(null);
        setHighlightedMemoryKeys(new Set());
      }
    }
  };

  // Keyboard shortcut: Ctrl + Enter to run code
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        handleExecuteManual();
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  });

  // Check whether a step is unlocked (free navigation in local dev, locked via DB/storage in production)
  const isStepUnlocked = (stepIdx: number): boolean => {
    if (process.env.NODE_ENV !== 'production') {
      return true;
    }
    if (stepIdx === 0) return true;
    if (typeof window !== 'undefined') {
      const key = `unlocked_step_${langKey}_${levelNum}`;
      const maxUnlocked = parseInt(localStorage.getItem(key) || '0', 10);
      return stepIdx <= maxUnlocked;
    }
    return false;
  };

  const handleNextStep = () => {
    if (currentStepIndex < totalQuestions - 1 && isStepUnlocked(currentStepIndex + 1)) {
      const nextIdx = currentStepIndex + 1;
      setCurrentStepIndex(nextIdx);
      if (typeof window !== 'undefined') {
        window.history.replaceState(null, '', `?step=${nextIdx + 1}`);
      }
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      const prevIdx = currentStepIndex - 1;
      setCurrentStepIndex(prevIdx);
      if (typeof window !== 'undefined') {
        window.history.replaceState(null, '', `?step=${prevIdx + 1}`);
      }
    }
  };

  // Persist completed step progress in production
  useEffect(() => {
    if (isSuccess && typeof window !== 'undefined') {
      const key = `unlocked_step_${langKey}_${levelNum}`;
      const currentMax = parseInt(localStorage.getItem(key) || '0', 10);
      if (currentStepIndex + 1 > currentMax) {
        localStorage.setItem(key, String(currentStepIndex + 1));
      }
    }
  }, [isSuccess, currentStepIndex, langKey, levelNum]);

  // Enter key shortcut to advance to next step when Success Modal is open
  useEffect(() => {
    if (!isSuccess) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
        if (currentStepIndex < totalQuestions - 1) {
          handleNextStep();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    return () => {
      window.removeEventListener('keydown', handleKeyDown, true);
    };
  }, [isSuccess, currentStepIndex, totalQuestions]);

  const handleResetRound = () => {
    lastExecutedCodeRef.current = '';
    setHearts(5);
    setCurrentStepIndex(0);
    setIsGameOver(false);
    setCanvasBlocks([createDefaultStartBlock()]);
    setUserCode('');
    setTerminalOutput('');
    setIsSuccess(false);
  };

  // Global dragend listener to ensure snap indicators and dragging states reset cleanly
  useEffect(() => {
    const handleGlobalDragEnd = () => {
      setIsDraggingBlock(false);
      setIsTrashHovered(false);
      setIsToolboxHovered(false);
      activeSnapTargetRef.current = null;
      setActiveSnapTarget(null);
      draggingInfoRef.current = null;
      setDraggedBlockType(null);
    };
    window.addEventListener('dragend', handleGlobalDragEnd);
    return () => window.removeEventListener('dragend', handleGlobalDragEnd);
  }, []);

  // ==========================================================================
  // DRAG & DROP HANDLERS (Canvas remains completely stationary)
  // ==========================================================================

  // 2. Dragging blocks from toolbox or moving on canvas
  const handleDragStartFromToolbox = (
    e: React.DragEvent,
    blockType: BlockType,
    extra?: { varName?: string; withElse?: boolean }
  ) => {
    // In typing mode, dragging blocks out is locked, but wheel scrolling is preserved
    if (mode === 'typing') {
      e.preventDefault();
      return;
    }

    const targetEl = e.currentTarget as HTMLElement;
    const rect = targetEl.getBoundingClientRect();
    const rawGrabX = Math.round(e.clientX - rect.left);
    const rawGrabY = Math.round(e.clientY - rect.top);
    const payload = {
      source: 'toolbox' as const,
      blockType,
      varName: extra?.varName,
      withElse: extra?.withElse,
      grabX: Math.max(10, Math.min(rawGrabX, 60)),
      grabY: Math.max(5, Math.min(rawGrabY, 25)),
      initialWidth: Math.round(rect.width),
      initialHeight: Math.round(rect.height),
    };
    draggingInfoRef.current = payload;
    try {
      e.dataTransfer.setData('text/plain', JSON.stringify(payload));
    } catch { }
    e.dataTransfer.effectAllowed = 'all';
    setDraggedBlockType(blockType);
    setIsDraggingBlock(true);
  };

  const handleBlockDragEnd = () => {
    setIsDraggingBlock(false);
    setIsTrashHovered(false);
    setActiveSnapTarget(null);
    draggingInfoRef.current = null;
    setDraggedBlockType(null);
  };

  const handleDragStartFromInner = (
    e: React.DragEvent,
    child: CanvasBlock,
    parentBlockId: string,
    childIdx: number,
    branchId?: string
  ) => {
    e.stopPropagation();
    const targetEl = e.currentTarget as HTMLElement;
    const rect = targetEl.getBoundingClientRect();
    const grabX = e.clientX - rect.left;
    const grabY = e.clientY - rect.top;

    const payload = {
      source: 'inner' as const,
      blockType: child.type,
      id: child.id,
      parentBlockId,
      childIdx,
      branchId,
      content: child.content,
      varName: child.varName,
      grabX,
      grabY,
      initialWidth: Math.round(rect.width),
      initialHeight: Math.round(rect.height),
    };
    draggingInfoRef.current = payload;
    try {
      e.dataTransfer.setData('text/plain', JSON.stringify(payload));
    } catch { }
    e.dataTransfer.effectAllowed = 'all';
    setIsDraggingBlock(true);
    setDraggingBlockId(child.id);
  };



  // Bring entire connected stack on canvas to front layer with ordered zIndex (root > downstream)
  const bringStackToFront = (blockId: string, blocks: CanvasBlock[]): CanvasBlock[] => {
    let curr: CanvasBlock | undefined = findBlockInTree(blocks, blockId) || undefined;
    if (!curr) return blocks;

    const visitedUp = new Set<string>();
    while (curr) {
      visitedUp.add(curr.id);
      const parentId: string | undefined = curr.prevBlockId || curr.attachedToBlockId;
      if (!parentId || visitedUp.has(parentId)) break;
      const parent: CanvasBlock | undefined = findBlockInTree(blocks, parentId) || undefined;
      if (!parent) break;
      curr = parent;
    }

    if (!curr) return blocks;
    const rootBlock: CanvasBlock = curr;

    const newBaseZ = (maxCanvasZIndexRef.current += 20);
    const queue: { id: string; depth: number }[] = [{ id: rootBlock.id, depth: 0 }];
    const zMap = new Map<string, number>();
    const visitedDown = new Set<string>();

    while (queue.length > 0) {
      const { id, depth } = queue.shift()!;
      if (visitedDown.has(id)) continue;
      visitedDown.add(id);
      zMap.set(id, Math.max(1, newBaseZ - depth));

      const blk = findBlockInTree(blocks, id);
      if (!blk) continue;

      if (blk.nextBlockId && !visitedDown.has(blk.nextBlockId)) {
        queue.push({ id: blk.nextBlockId, depth: depth + 1 });
      }
      if (blk.attachedMethodId && !visitedDown.has(blk.attachedMethodId)) {
        queue.push({ id: blk.attachedMethodId, depth: depth + 1 });
      }
    }

    return blocks.map((b) => (zMap.has(b.id) ? { ...b, zIndex: zMap.get(b.id)! } : b));
  };

  // Scratch Stack: 현재 드래그 중인 체인(잡은 블록 + 하위 연결된 모든 자손 블록) 식별
  const draggedChainIds = useMemo(() => {
    if (!draggingBlockId) return new Set<string>();
    const descendants = getDescendantBlockIds(draggingBlockId, canvasBlocks);
    return new Set<string>([draggingBlockId, ...descendants]);
  }, [draggingBlockId, canvasBlocks]);

  // Helper to dynamically calculate the exact rendered dimensions of whatever block is currently being dragged
  const getDraggedBlockDimensions = (draggedId?: string, type?: BlockType | null) => {
    const effectiveId =
      draggedId ||
      draggingBlockId ||
      pointerDragRef.current?.blockId ||
      draggingInfoRef.current?.id;

    if (effectiveId) {
      const el = document.getElementById(`block-${effectiveId}`);
      if (el) {
        const mouthEl = el.querySelector(`[id^="mouth-"]`) as HTMLElement | null;
        const headerArmEl = el.firstElementChild as HTMLElement | null;
        const headerWidth = headerArmEl && headerArmEl.offsetHeight <= 40 ? headerArmEl.offsetWidth : el.offsetWidth;
        const mouthHeight = mouthEl ? Math.max(28, mouthEl.offsetHeight) : Math.max(28, el.offsetHeight - 50);

        return {
          width: el.offsetWidth,
          height: el.offsetHeight,
          headerWidth,
          mouthHeight,
          totalHeight: el.offsetHeight,
        };
      }
    }

    const info = draggingInfoRef.current;
    const ptr = pointerDragRef.current;
    const toolboxWidth = (info as any)?.initialWidth || (ptr as any)?.initialWidth;
    const toolboxHeight = (info as any)?.initialHeight || (ptr as any)?.initialHeight;
    const bType =
      type ||
      draggedBlockType ||
      info?.blockType ||
      ptr?.blockType ||
      (effectiveId ? findBlockInTree(canvasBlocksRef.current || canvasBlocks, effectiveId)?.type : null);

    const isC =
      bType === 'for_range' ||
      bType === 'for_in' ||
      bType === 'while' ||
      bType === 'if' ||
      bType === 'def';

    const defaultWidth = isC ? 170 : (bType === 'method' ? 160 : 140);
    const width = toolboxWidth || defaultWidth;
    const mouthHeight = 28;
    const totalHeight = isC ? 34 + mouthHeight + 16 : (toolboxHeight || 34);

    return {
      width,
      height: toolboxHeight || (isC ? totalHeight : 34),
      headerWidth: width,
      mouthHeight,
      totalHeight,
    };
  };

  // Scratch-grade Connection Snapping Calculator (실행 블록 및 연결 블록 하단 자동 자석 스냅)
  const findSnapTarget = (
    draggedX: number,
    draggedY: number,
    draggedId: string | undefined,
    blocksList: CanvasBlock[]
  ): SnapTarget | null => {
    if (!workspaceRef.current) return null;
    const draggedBlock = draggedId ? (findBlockInTree(blocksList, draggedId) || blocksList.find((b) => b.id === draggedId)) : null;
    if (draggedBlock?.type === 'start') {
      return null;
    }
    const draggedType = draggedBlock?.type || draggingInfoRef.current?.blockType;
    const isDefBlock = draggedType === 'def';
    const canvasRect = workspaceRef.current.getBoundingClientRect();

    // 드래그 중인 블록 및 하위 연결된 모든 자손 블록은 스냅 대상에서 제외 (순환 결합 및 자가 스냅 원천 차단)
    const excludedIds = new Set<string>();
    if (draggedId) {
      excludedIds.add(draggedId);
      const descendants = getDescendantBlockIds(draggedId, blocksList);
      for (const did of descendants) {
        excludedIds.add(did);
      }
    }

    // 0. Horizontal Method Snapping (메서드 블록이 우측 홈을 가진 블록에 스냅)
    const isDraggingMethod =
      draggedBlock?.type === 'method' ||
      draggingInfoRef.current?.blockType === 'method' ||
      draggedBlockType === 'method';

    if (isDraggingMethod) {
      const candidates: CanvasBlock[] = [];
      const collectCandidates = (list: CanvasBlock[]) => {
        for (const b of list) {
          if (excludedIds.has(b.id)) continue;
          const canAcceptMethod =
            b.type === 'input' ||
            b.type === 'str' ||
            b.type === 'open' ||
            b.type === 'list' ||
            b.type === 'dict' ||
            b.type === 'set' ||
            b.type === 'tuple' ||
            b.type === 'sorted' ||
            b.type === 'variable' ||
            b.type === 'method';
          if (canAcceptMethod) {
            candidates.push(b);
          }
          if (b.argBlock) {
            collectCandidates([b.argBlock]);
          }
          if (b.innerBlocks && b.innerBlocks.length > 0) {
            collectCandidates(b.innerBlocks);
          }
          if (b.branches && b.branches.length > 0) {
            for (const br of b.branches) {
              if (br.innerBlocks && br.innerBlocks.length > 0) {
                collectCandidates(br.innerBlocks);
              }
            }
          }
        }
      };
      collectCandidates(blocksList);

      const grabX = draggingInfoRef.current?.grabX ?? (pointerDragRef.current?.grabOffsetX ?? 30);
      const grabY = draggingInfoRef.current?.grabY ?? (pointerDragRef.current?.grabOffsetY ?? 15);
      const cursorX = draggedX + grabX;
      const cursorY = draggedY + grabY;

      const draggedDim = getDraggedBlockDimensions(draggedId, 'method');
      const methodBlockWidth = draggedDim.width || 160;
      const methodBlockHeight = draggedDim.height || 34;

      for (const b of candidates) {
        const bEl = document.getElementById(`block-${b.id}`);
        if (!bEl) continue;
        const rect = bEl.getBoundingClientRect();
        const bScreenX = rect.left - canvasRect.left;
        const bScreenY = rect.top - canvasRect.top;
        const bW = rect.width;
        const bH = rect.height;
        const bRight = bScreenX + bW;

        const nearRight =
          Math.abs(draggedX - bRight) <= 60 ||
          Math.abs(cursorX - bRight) <= 60 ||
          (cursorX >= bScreenX + Math.max(10, bW * 0.3) && cursorX <= bRight + 75);

        const nearY =
          (cursorY >= bScreenY - 18 && cursorY <= bScreenY + bH + 18) ||
          (draggedY >= bScreenY - 20 && draggedY <= bScreenY + bH + 20) ||
          Math.abs(draggedY - bScreenY) <= 32;

        if (nearRight && nearY) {
          return {
            type: 'method_right',
            targetBlockId: b.id,
            markerX: bRight - 1,
            markerY: bScreenY,
            markerWidth: methodBlockWidth,
            markerHeight: methodBlockHeight,
          };
        }
      }
      return null;
    }

    // 0.5. Argument Slot Snapping (함수/변수 인자 슬롯에 다른 함수/변수 블록 스냅)
    const ALL_FUNC_TYPES = [
      'print', 'input', 'len', 'int', 'float', 'str', 'bool', 'type',
      'math', 'round', 'abs', 'sum', 'min', 'max', 'open',
      'range', 'map', 'sorted', 'iter', 'enumerate', 'zip', 'all', 'any', 'reversed'
    ];
    const canBeArg =
      (!!draggedType && ALL_FUNC_TYPES.includes(draggedType)) ||
      draggedType === 'variable';

    if (canBeArg) {
      const slotCandidates: CanvasBlock[] = [];
      const collectSlotCandidates = (list: CanvasBlock[]) => {
        for (const b of list) {
          if (excludedIds.has(b.id)) continue;
          if (
            (ALL_FUNC_TYPES.includes(b.type) || b.type === 'variable' || b.type === 'for_range' || b.type === 'for_in') &&
            !b.argBlock
          ) {
            slotCandidates.push(b);
          }
          if (b.argBlock) {
            collectSlotCandidates([b.argBlock]);
          }
          if (b.innerBlocks && b.innerBlocks.length > 0) {
            collectSlotCandidates(b.innerBlocks);
          }
          if (b.branches && b.branches.length > 0) {
            for (const br of b.branches) {
              if (br.innerBlocks && br.innerBlocks.length > 0) {
                collectSlotCandidates(br.innerBlocks);
              }
            }
          }
        }
      };
      collectSlotCandidates(blocksList);

      const draggedEl = draggedId ? document.getElementById(`block-${draggedId}`) : null;
      const draggedH = draggedEl ? draggedEl.offsetHeight : 34;

      // 앞머리 (Front Head): 블록의 좌측 시작점(앞머리 팁)과 세로 중심선
      const headTipX = draggedX;
      const headCenterY = draggedY + draggedH / 2;

      for (const b of slotCandidates) {
        const slotEl = document.getElementById(`arg-slot-${b.id}`);
        if (!slotEl) continue;
        const rect = slotEl.getBoundingClientRect();
        const sScreenX = rect.left - canvasRect.left;
        const sScreenY = rect.top - canvasRect.top;
        const sW = rect.width;
        const sH = rect.height;
        const slotCenterY = sScreenY + sH / 2;

        // 스크래치 방식: 블록의 앞머리(headTipX, headCenterY)가 입력창 슬롯 입구 또는 내부에 닿았을 때 정확히 스냅
        const headNearX = headTipX >= sScreenX - 30 && headTipX <= sScreenX + sW + 15;
        const headNearY = Math.abs(headCenterY - slotCenterY) <= 22;

        if (headNearX && headNearY) {
          return {
            type: 'arg_slot',
            targetBlockId: b.id,
            markerX: sScreenX - 2,
            markerY: sScreenY - 2,
            markerWidth: sW + 4,
            markerHeight: sH + 4,
          };
        }
      }
    }

    // 1. Check C-blocks and E-branch mouths (recursively at any nesting depth, depth-first so inner loops match before parent)
    const checkMouthsRecursive = (list: CanvasBlock[]): SnapTarget | null => {
      const draggedDim = getDraggedBlockDimensions(draggedId, draggedType);
      const isC =
        draggedType === 'for_range' ||
        draggedType === 'for_in' ||
        draggedType === 'while' ||
        draggedType === 'if' ||
        draggedType === 'def';

      for (const b of list) {
        if (excludedIds.has(b.id)) continue;

        if (b.type === 'for_range' || b.type === 'for_in' || b.type === 'while' || b.type === 'def') {
          // Check deeper nested innerBlocks FIRST so deepest mouth gets priority
          if (b.innerBlocks && b.innerBlocks.length > 0) {
            const innerSnap = checkMouthsRecursive(b.innerBlocks);
            if (innerSnap) return innerSnap;
          }

          const mouthEl = document.getElementById(`mouth-${b.id}`);
          if (mouthEl) {
            const mRect = mouthEl.getBoundingClientRect();
            const mLeft = mRect.left - canvasRect.left;
            const mTop = mRect.top - canvasRect.top;
            const mRight = mLeft + mRect.width;
            const mBottom = mTop + mRect.height;

            const checkX = draggedX + 30;
            const checkY = draggedY + 15;

            if (
              checkX >= mLeft - 20 &&
              checkX <= mRight + 25 &&
              checkY >= mTop - 15 &&
              checkY <= mBottom + 15
            ) {
              const inBlocks = b.innerBlocks || [];
              let targetIdx = inBlocks.length;
              let markerLineY = mTop + 1;

              if (inBlocks.length === 0) {
                targetIdx = 0;
                markerLineY = mTop + 1;
              } else {
                targetIdx = inBlocks.length;
                markerLineY = mBottom - 2;
                for (let idx = 0; idx < inBlocks.length; idx++) {
                  const child = inBlocks[idx];
                  const childEl = document.getElementById(`block-${child.id}`);
                  if (childEl) {
                    const cRect = childEl.getBoundingClientRect();
                    const cTop = cRect.top - canvasRect.top;
                    const cBottom = cTop + cRect.height;
                    const cMid = cTop + cRect.height / 2;
                    if (checkY < cMid) {
                      targetIdx = idx;
                      markerLineY = idx === 0 ? mTop + 1 : cTop;
                      break;
                    } else if (idx === inBlocks.length - 1) {
                      targetIdx = inBlocks.length;
                      markerLineY = cBottom;
                    }
                  }
                }
              }

              return {
                type: 'mouth',
                targetBlockId: b.id,
                insertIndex: targetIdx,
                markerX: mLeft,
                markerY: markerLineY,
                markerWidth: isC ? draggedDim.headerWidth : draggedDim.width,
                markerHeight: isC ? draggedDim.totalHeight : draggedDim.height,
                markerMouthHeight: draggedDim.mouthHeight,
              };
            }
          }
        }

        if (b.type === 'if' && b.branches) {
          for (const br of b.branches) {
            // Check deeper nested innerBlocks FIRST so deepest mouth gets priority
            if (br.innerBlocks && br.innerBlocks.length > 0) {
              const innerSnap = checkMouthsRecursive(br.innerBlocks);
              if (innerSnap) return innerSnap;
            }

            const mouthEl = document.getElementById(`mouth-${b.id}-${br.id}`);
            if (mouthEl) {
              const mRect = mouthEl.getBoundingClientRect();
              const mLeft = mRect.left - canvasRect.left;
              const mTop = mRect.top - canvasRect.top;
              const mRight = mLeft + mRect.width;
              const mBottom = mTop + mRect.height;

              const checkX = draggedX + 30;
              const checkY = draggedY + 15;

              if (
                checkX >= mLeft - 20 &&
                checkX <= mRight + 25 &&
                checkY >= mTop - 15 &&
                checkY <= mBottom + 15
              ) {
                const inBlocks = br.innerBlocks || [];
                let targetIdx = inBlocks.length;
                let markerLineY = mTop + 1;

                if (inBlocks.length === 0) {
                  targetIdx = 0;
                  markerLineY = mTop + 1;
                } else {
                  targetIdx = inBlocks.length;
                  markerLineY = mBottom - 2;
                  for (let idx = 0; idx < inBlocks.length; idx++) {
                    const child = inBlocks[idx];
                    const childEl = document.getElementById(`block-${child.id}`);
                    if (childEl) {
                      const cRect = childEl.getBoundingClientRect();
                      const cTop = cRect.top - canvasRect.top;
                      const cBottom = cTop + cRect.height;
                      const cMid = cTop + cRect.height / 2;
                      if (checkY < cMid) {
                        targetIdx = idx;
                        markerLineY = idx === 0 ? mTop + 1 : cTop;
                        break;
                      } else if (idx === inBlocks.length - 1) {
                        targetIdx = inBlocks.length;
                        markerLineY = cBottom;
                      }
                    }
                  }
                }

                return {
                  type: 'mouth',
                  targetBlockId: b.id,
                  branchId: br.id,
                  insertIndex: targetIdx,
                  markerX: mLeft,
                  markerY: markerLineY,
                  markerWidth: isC ? draggedDim.headerWidth : draggedDim.width,
                  markerHeight: isC ? draggedDim.totalHeight : draggedDim.height,
                  markerMouthHeight: draggedDim.mouthHeight,
                };
              }
            }
          }
        }
      }
      return null;
    };

    // def 블록은 최상위 함수 정의이므로 다른 루프/조건문/함수 내부(mouth)에 삽입되는 것을 차단
    const mouthSnap = isDefBlock ? null : checkMouthsRecursive(blocksList);
    if (mouthSnap) return mouthSnap;

    // 2. Scratch Connection Snapping (실행 블록 및 하단 탭 스냅)
    let bestSnap: SnapTarget | null = null;
    let minScore = Infinity;

    const draggedDim = getDraggedBlockDimensions(draggedId, draggedType);
    const isDraggingC =
      draggedType === 'for_range' ||
      draggedType === 'for_in' ||
      draggedType === 'while' ||
      draggedType === 'if' ||
      draggedType === 'def';
    const draggedH = isDraggingC ? draggedDim.totalHeight : draggedDim.height;
    const snapMarkerWidth = isDraggingC ? Math.max(draggedDim.headerWidth, draggedDim.width) : draggedDim.width;
    const snapMarkerHeight = draggedH;

    for (const b of blocksList) {
      if (excludedIds.has(b.id)) continue;
      // 메서드 블록 및 가로 결합 블록은 상하(below/above) 수직 스냅 대상에서 원천 제외
      if (b.type === 'method' || b.attachedToBlockId) continue;
      const bEl = document.getElementById(`block-${b.id}`);
      const bW = bEl ? bEl.offsetWidth : (b.type === 'start' ? 160 : 140);
      const bH = bEl ? bEl.offsetHeight : (b.type === 'start' ? 38 : 34);

      const bBottom = b.y + bH;
      // 블록 가로 스냅 범위: 블록 좌측 정렬 기준 오차 허용 (±36px 이내로 정렬될 때만 스냅)
      const horizontalMatch = Math.abs(draggedX - b.x) <= 36;

      // 하단 탭 연결부 근처 (상단 모서리가 하단 탭 근처 ±26px 이내)
      const isStart = b.type === 'start';
      const isNearBottom = isStart
        ? (draggedY >= b.y - 10 && draggedY <= bBottom + 26)
        : (Math.abs(draggedY - bBottom) <= 26);

      if (horizontalMatch && isNearBottom) {
        const score = Math.abs(draggedY - bBottom) * 2 + Math.abs(draggedX - b.x);
        if (score < minScore) {
          minScore = score;
          bestSnap = {
            type: 'below',
            targetBlockId: b.id,
            markerX: b.x,
            markerY: bBottom,
            markerWidth: snapMarkerWidth,
            markerHeight: snapMarkerHeight,
            markerMouthHeight: draggedDim.mouthHeight,
          };
        }
      }

      // 상단 홈 스냅 (start 블록 위로는 결합 불가, 하단 모서리가 상단 홈 근처 ±26px 이내)
      if (b.type !== 'start') {
        const isNearTop = Math.abs((draggedY + draggedH) - b.y) <= 26;
        if (horizontalMatch && isNearTop) {
          const score = Math.abs((draggedY + draggedH) - b.y) * 2 + Math.abs(draggedX - b.x);
          if (score < minScore) {
            minScore = score;
            bestSnap = {
              type: 'above',
              targetBlockId: b.id,
              markerX: b.x,
              markerY: b.y,
              markerWidth: snapMarkerWidth,
              markerHeight: snapMarkerHeight,
              markerMouthHeight: draggedDim.mouthHeight,
            };
          }
        }
      }
    }

    if (bestSnap) {
      return bestSnap;
    }

    return null;
  };



  // Unified Scratch Block Placement & Snapping Resolution
  const executeBlockPlacement = (
    source: 'canvas' | 'toolbox' | 'inner',
    blockInfo: {
      id?: string;
      blockType?: BlockType;
      varName?: string;
      content?: string;
      withElse?: boolean;
      parentBlockId?: string;
      childIdx?: number;
      branchId?: string;
    },
    dropX: number,
    dropY: number,
    snap: SnapTarget | null
  ) => {
    const currentBlocks = canvasBlocksRef.current;
    let baseBlock: CanvasBlock;
    let extractedFromInner = false;

    if (source === 'inner' && blockInfo.parentBlockId) {
      extractedFromInner = true;
      const pId = blockInfo.parentBlockId;
      const cIdx = blockInfo.childIdx ?? 0;
      const brId = blockInfo.branchId;

      const parent = findBlockInTree(currentBlocks, pId);
      let foundChild: CanvasBlock | null = null;
      if (parent) {
        if (brId && parent.branches) {
          const branch = parent.branches.find((br) => br.id === brId);
          if (branch?.innerBlocks) foundChild = branch.innerBlocks[cIdx];
        } else if (parent.innerBlocks) {
          foundChild = parent.innerBlocks[cIdx];
        }
      }

      baseBlock = foundChild
        ? { ...foundChild, x: dropX, y: dropY, zIndex: (maxCanvasZIndexRef.current += 20) }
        : {
          id: blockInfo.id || `${blockInfo.blockType}-${Date.now()}`,
          type: blockInfo.blockType || 'print',
          content: blockInfo.content || '',
          varName: blockInfo.varName,
          x: dropX,
          y: dropY,
          zIndex: (maxCanvasZIndexRef.current += 20),
        };

      // Remove from parent
      setCanvasBlocks((prev) =>
        updateAnyBlockInTree(prev, pId, (b) => {
          if (brId && b.branches) {
            return {
              ...b,
              branches: b.branches.map((br) => {
                if (br.id !== brId || !br.innerBlocks) return br;
                return {
                  ...br,
                  innerBlocks: br.innerBlocks.filter((_, idx) => idx !== cIdx),
                };
              }),
            };
          }
          if (b.innerBlocks) {
            return {
              ...b,
              innerBlocks: b.innerBlocks.filter((_, idx) => idx !== cIdx),
            };
          }
          return b;
        })
      );
    } else if (source === 'canvas' && blockInfo.id) {
      const existing = currentBlocks.find((b) => b.id === blockInfo.id);
      if (!existing) return;
      baseBlock = { ...existing };
    } else {
      // From toolbox
      const bType = (blockInfo.blockType || draggedBlockType || 'print') as BlockType;
      const varName = blockInfo.varName || (
        bType === 'variable' ? 'x' :
          bType === 'for_range' ? 'i' :
            bType === 'for_in' ? 'item' :
              bType === 'def' ? 'my_func' : undefined
      );
      const isLoopOrDef = bType === 'for_range' || bType === 'for_in' || bType === 'while' || bType === 'def';
      const isIf = bType === 'if';
      const defaultContent = blockInfo.content || (
        bType === 'for_range' ? '5' :
          bType === 'for_in' ? 'items' :
            bType === 'range' ? '5' :
              bType === 'while' ? 'False' : ''
      );
      const isIfElse = isIf && !!blockInfo.withElse;
      baseBlock = {
        id: `${bType}-${Date.now()}`,
        type: bType,
        isIfElse: isIfElse ? true : undefined,
        varName,
        methodName: bType === 'method' ? 'method' : undefined,
        content: defaultContent,
        argBlock: bType === 'for_range' ? {
          id: `range-${Date.now() + 1}`,
          type: 'range',
          content: defaultContent || '5',
          x: 0,
          y: 0,
        } : undefined,
        items: (bType === 'list' || bType === 'tuple' || bType === 'set') ? [''] : undefined,
        dictPairs: bType === 'dict' ? [{ key: '', value: '' }] : undefined,
        innerBlocks: isLoopOrDef ? [] : undefined,
        branches: isIf
          ? isIfElse
            ? [
              { id: `br-if-${Date.now()}`, kind: 'if', condition: 'False', innerBlocks: [] },
              { id: `br-else-${Date.now() + 1}`, kind: 'else', innerBlocks: [] },
            ]
            : [
              { id: `br-if-${Date.now()}`, kind: 'if', condition: 'False', innerBlocks: [] },
            ]
          : undefined,
        x: dropX,
        y: dropY,
        zIndex: (maxCanvasZIndexRef.current += 20),
      };
    }

    // CASE 0: Snap to target block's right notch (method_right)
    if (snap && snap.type === 'method_right') {
      const target = findBlockInTree(currentBlocks, snap.targetBlockId);
      if (target) {
        const methodId = source === 'canvas' && blockInfo.id ? blockInfo.id : baseBlock.id;
        const oldAttachedId = target.attachedMethodId && target.attachedMethodId !== methodId ? target.attachedMethodId : undefined;

        const tEl = document.getElementById(`block-${target.id}`);
        const cRect = workspaceRef.current?.getBoundingClientRect();
        let finalX = target.x + (tEl ? tEl.offsetWidth : 140) - 1;
        let finalY = target.y;
        if (tEl && cRect) {
          const tRect = tEl.getBoundingClientRect();
          finalX = Math.round(tRect.right - cRect.left) - 1;
          finalY = Math.round(tRect.top - cRect.top);
        }

        setCanvasBlocks((prev) => {
          let list = prev;
          if (source !== 'canvas') {
            list = [
              ...list,
              {
                ...baseBlock,
                x: finalX,
                y: finalY,
                attachedToBlockId: target.id,
                attachedMethodId: oldAttachedId,
                prevBlockId: undefined,
                nextBlockId: undefined,
              },
            ];
          }

          const withMethodUpdated = updateAnyBlockInTree(list, methodId, (m) => ({
            ...m,
            x: finalX,
            y: finalY,
            attachedToBlockId: target.id,
            attachedMethodId: oldAttachedId,
            prevBlockId: undefined,
            nextBlockId: undefined,
          }));

          let updatedList = updateAnyBlockInTree(withMethodUpdated, target.id, (t) => ({
            ...t,
            attachedMethodId: methodId,
          }));

          if (oldAttachedId) {
            updatedList = updateAnyBlockInTree(updatedList, oldAttachedId, (oldM) => ({
              ...oldM,
              attachedToBlockId: methodId,
            }));
          }

          if (source === 'canvas') {
            const clearPrevious = (l: CanvasBlock[]): CanvasBlock[] => {
              return l.map((b) => {
                let nb = b;
                if (b.attachedMethodId === methodId && b.id !== target.id) {
                  nb = { ...nb, attachedMethodId: undefined };
                }
                if (nb.innerBlocks) {
                  nb = { ...nb, innerBlocks: clearPrevious(nb.innerBlocks) };
                }
                if (nb.branches) {
                  nb = {
                    ...nb,
                    branches: nb.branches.map((br) => ({
                      ...br,
                      innerBlocks: clearPrevious(br.innerBlocks || []),
                    })),
                  };
                }
                return nb;
              });
            };
            updatedList = clearPrevious(updatedList);
          }

          canvasBlocksRef.current = updatedList;
          return updatedList;
        });
        return;
      }
    }

    // CASE 0.5: Snap into function or variable argument slot (arg_slot)
    if (snap && snap.type === 'arg_slot') {
      const target = findBlockInTree(currentBlocks, snap.targetBlockId);
      if (target) {
        const slottedBlock: CanvasBlock = {
          ...baseBlock,
          x: 0,
          y: 0,
          prevBlockId: undefined,
          nextBlockId: undefined,
          attachedToBlockId: undefined,
        };

        setCanvasBlocks((prev) => {
          let list = prev;
          if (source === 'canvas' && blockInfo.id) {
            list = list
              .filter((b) => b.id !== blockInfo.id)
              .map((b) => {
                if (b.id === baseBlock.prevBlockId) return { ...b, nextBlockId: undefined };
                if (b.id === baseBlock.nextBlockId) return { ...b, prevBlockId: undefined };
                return b;
              });
          }

          return updateAnyBlockInTree(list, snap.targetBlockId, (b) => ({
            ...b,
            argBlock: slottedBlock,
          }));
        });
        return;
      }
    }

    // CASE 1: Snap into C-block or If-branch mouth (def 블록은 내부 삽입 차단)
    if (snap && snap.type === 'mouth' && baseBlock.type !== 'def') {
      const childToAdd: CanvasBlock = {
        ...baseBlock,
        x: 0,
        y: 0,
        prevBlockId: undefined,
        nextBlockId: undefined,
      };

      setCanvasBlocks((prev) => {
        let list = prev;
        if (source === 'canvas' && blockInfo.id) {
          list = list.filter((b) => b.id !== blockInfo.id).map((b) => {
            if (b.id === baseBlock.prevBlockId) return { ...b, nextBlockId: undefined };
            if (b.id === baseBlock.nextBlockId) return { ...b, prevBlockId: undefined };
            return b;
          });
        }

        return updateAnyBlockInTree(list, snap.targetBlockId, (b) => {
          if (snap.branchId && b.branches) {
            return {
              ...b,
              branches: b.branches.map((br) => {
                if (br.id !== snap.branchId) return br;
                const existing = br.innerBlocks || [];
                const idx = snap.insertIndex !== undefined ? Math.max(0, Math.min(snap.insertIndex, existing.length)) : existing.length;
                const nextInner = [...existing];
                nextInner.splice(idx, 0, childToAdd);
                return { ...br, innerBlocks: nextInner };
              }),
            };
          }
          const existing = b.innerBlocks || [];
          const idx = snap.insertIndex !== undefined ? Math.max(0, Math.min(snap.insertIndex, existing.length)) : existing.length;
          const nextInner = [...existing];
          nextInner.splice(idx, 0, childToAdd);
          return {
            ...b,
            innerBlocks: nextInner,
          };
        });
      });

      return;
    }

    // CASE 2: Snap BELOW target block (기존 블록 및 하위 체인 자동 밀어내기/하향 이동)
    if (snap && snap.type === 'below') {
      const target = currentBlocks.find((b) => b.id === snap.targetBlockId);
      if (target) {
        const tEl = document.getElementById(`block-${target.id}`);
        const tH = tEl ? tEl.offsetHeight : (target.type === 'start' ? 38 : 42);
        const finalX = target.x;
        const finalY = target.y + tH;

        // 1. 드래그된 블록 체인 분석 (head, tail, 자식 목록, 전체 높이, 오프셋)
        let headBlock: CanvasBlock;
        let headId: string;
        let tailId: string;
        let chainHeight: number;
        let draggedIds: string[] = [];
        const draggedOffsets = new Map<string, { dx: number; dy: number }>();

        if (source === 'canvas' && blockInfo.id) {
          const orig = currentBlocks.find((b) => b.id === blockInfo.id);
          if (!orig || orig.id === target.id) return;
          headBlock = orig;
          headId = orig.id;
          const descendantIds = getDescendantBlockIds(orig.id, currentBlocks);
          draggedIds = [orig.id, ...descendantIds];
          if (draggedIds.includes(target.id)) return;
          tailId = descendantIds.length > 0 ? descendantIds[descendantIds.length - 1] : orig.id;

          for (const did of descendantIds) {
            const db = currentBlocks.find((b) => b.id === did);
            if (db) draggedOffsets.set(did, { dx: db.x - orig.x, dy: db.y - orig.y });
          }

          const tailEl = document.getElementById(`block-${tailId}`);
          const tailH = tailEl ? tailEl.offsetHeight : 42;
          const tailBlock = currentBlocks.find((b) => b.id === tailId);
          chainHeight = (tailBlock ? (tailBlock.y - orig.y) : 0) + tailH;
        } else {
          // From toolbox or extracted from inner
          headBlock = baseBlock;
          headId = baseBlock.id;
          tailId = baseBlock.id;
          draggedIds = [baseBlock.id];
          const isLoopOrDef = baseBlock.type === 'for_range' || baseBlock.type === 'for_in' || baseBlock.type === 'while' || baseBlock.type === 'def';
          chainHeight = isLoopOrDef ? 72 : 40;
        }

        // 2. target 하단에 이미 붙어있던 기존 블록 체인 식별 (밀어내기 대상)
        const oldNextId = target.nextBlockId;
        const hasExistingBelow = !!(oldNextId && !draggedIds.includes(oldNextId));
        const oldDescendantIds = hasExistingBelow ? getDescendantBlockIds(oldNextId!, currentBlocks) : [];

        // 3. 캔버스 블록 상태 일괄 업데이트
        setCanvasBlocks((prev) => {
          let list = prev;
          if (source !== 'canvas') {
            list = [
              ...list,
              {
                ...headBlock,
                x: finalX,
                y: finalY,
                prevBlockId: target.id,
                nextBlockId: hasExistingBelow ? oldNextId : undefined,
              },
            ];
          }

          return list.map((b) => {
            // 새로 배치된 드래그 헤드 블록
            if (b.id === headId) {
              return {
                ...b,
                x: finalX,
                y: finalY,
                prevBlockId: target.id,
                nextBlockId: tailId === headId ? (hasExistingBelow ? oldNextId : undefined) : b.nextBlockId,
              };
            }

            // 드래그된 체인의 하위 자식 블록들
            if (draggedOffsets.has(b.id)) {
              const off = draggedOffsets.get(b.id)!;
              return {
                ...b,
                x: finalX + off.dx,
                y: finalY + off.dy,
                nextBlockId: b.id === tailId ? (hasExistingBelow ? oldNextId : undefined) : b.nextBlockId,
              };
            }

            // 대상 타깃 블록 (새 헤드 블록을 next로 가리킴)
            if (b.id === target.id) {
              return { ...b, nextBlockId: headId };
            }

            // 기존에 드래그 블록의 부모였던 블록의 nextBlockId 정리
            if (source === 'canvas' && blockInfo.id && b.nextBlockId === headId && b.id !== target.id) {
              return { ...b, nextBlockId: undefined };
            }

            // 기존에 target 아래 붙어있던 블록: 새로 붙은 블록의 tail 밑으로 내려가고 y 좌표 이동
            if (hasExistingBelow && b.id === oldNextId) {
              return {
                ...b,
                x: finalX,
                y: finalY + chainHeight,
                prevBlockId: tailId,
              };
            }

            // 기존 하위 체인의 자식 블록들도 동일하게 chainHeight 만큼 아래로 이동
            if (hasExistingBelow && oldDescendantIds.includes(b.id) && !draggedIds.includes(b.id)) {
              return {
                ...b,
                x: finalX,
                y: b.y + chainHeight,
              };
            }

            return b;
          });
        });


        return;
      }
    }

    // CASE 3: Snap ABOVE target block (target 블록 및 하위 체인 자동 밀어내기/하향 이동)
    if (snap && snap.type === 'above') {
      const target = currentBlocks.find((b) => b.id === snap.targetBlockId);
      if (target && target.type !== 'start') {
        const finalX = target.x;
        const finalY = target.y; // 새 블록이 target의 원래 위치를 차지

        // 1. 드래그된 블록 체인 분석
        let headBlock: CanvasBlock;
        let headId: string;
        let tailId: string;
        let chainHeight: number;
        let draggedIds: string[] = [];
        const draggedOffsets = new Map<string, { dx: number; dy: number }>();

        if (source === 'canvas' && blockInfo.id) {
          const orig = currentBlocks.find((b) => b.id === blockInfo.id);
          if (!orig || orig.id === target.id) return;
          headBlock = orig;
          headId = orig.id;
          const descendantIds = getDescendantBlockIds(orig.id, currentBlocks);
          draggedIds = [orig.id, ...descendantIds];
          if (draggedIds.includes(target.id)) return;
          tailId = descendantIds.length > 0 ? descendantIds[descendantIds.length - 1] : orig.id;

          for (const did of descendantIds) {
            const db = currentBlocks.find((b) => b.id === did);
            if (db) draggedOffsets.set(did, { dx: db.x - orig.x, dy: db.y - orig.y });
          }

          const tailEl = document.getElementById(`block-${tailId}`);
          const tailH = tailEl ? tailEl.offsetHeight : 42;
          const tailBlock = currentBlocks.find((b) => b.id === tailId);
          chainHeight = (tailBlock ? (tailBlock.y - orig.y) : 0) + tailH;
        } else {
          headBlock = baseBlock;
          headId = baseBlock.id;
          tailId = baseBlock.id;
          draggedIds = [baseBlock.id];
          const isLoopOrDef = baseBlock.type === 'for_range' || baseBlock.type === 'for_in' || baseBlock.type === 'while' || baseBlock.type === 'def';
          chainHeight = isLoopOrDef ? 72 : 40;
        }

        // 2. target 블록 및 그 하위 체인은 chainHeight만큼 아래로 밀려남
        const targetDescendantIds = getDescendantBlockIds(target.id, currentBlocks);
        const oldParentId = target.prevBlockId && !draggedIds.includes(target.prevBlockId) ? target.prevBlockId : undefined;

        setCanvasBlocks((prev) => {
          let list = prev;
          if (source !== 'canvas') {
            list = [
              ...list,
              {
                ...headBlock,
                x: finalX,
                y: finalY,
                prevBlockId: oldParentId,
                nextBlockId: target.id,
              },
            ];
          }

          return list.map((b) => {
            // 새로 배치된 드래그 헤드 블록
            if (b.id === headId) {
              return {
                ...b,
                x: finalX,
                y: finalY,
                prevBlockId: oldParentId,
                nextBlockId: tailId === headId ? target.id : b.nextBlockId,
              };
            }

            // 드래그된 자식 블록들
            if (draggedOffsets.has(b.id)) {
              const off = draggedOffsets.get(b.id)!;
              return {
                ...b,
                x: finalX + off.dx,
                y: finalY + off.dy,
                nextBlockId: b.id === tailId ? target.id : b.nextBlockId,
              };
            }

            // target의 이전 부모가 새 헤드를 가리키도록 연결
            if (oldParentId && b.id === oldParentId) {
              return { ...b, nextBlockId: headId };
            }

            // 기존 드래그 블록의 이전 부모 링크 정리
            if (source === 'canvas' && blockInfo.id && b.nextBlockId === headId && b.id !== oldParentId) {
              return { ...b, nextBlockId: undefined };
            }

            // target 블록: 새 블록의 tail 아래로 연결되며 아래로 밀려남
            if (b.id === target.id) {
              return {
                ...b,
                x: finalX,
                y: finalY + chainHeight,
                prevBlockId: tailId,
              };
            }

            // target의 하위 블록들도 동일하게 chainHeight 만큼 아래로 이동
            if (targetDescendantIds.includes(b.id) && !draggedIds.includes(b.id)) {
              return {
                ...b,
                x: finalX,
                y: b.y + chainHeight,
              };
            }

            return b;
          });
        });

        return;
      }
    }

    // CASE 4: Free drop on canvas (no snap)
    if (source === 'canvas' && blockInfo.id) {
      const orig = currentBlocks.find((b) => b.id === blockInfo.id);
      if (orig) {
        const descendantIds = getDescendantBlockIds(orig.id, currentBlocks);
        const offsets = new Map<string, { dx: number; dy: number }>();
        for (const did of descendantIds) {
          const db = currentBlocks.find((b) => b.id === did);
          if (db) offsets.set(did, { dx: db.x - orig.x, dy: db.y - orig.y });
        }

        setCanvasBlocks((prev) => {
          let updated = prev.map((b) => {
            if (b.id === orig.id) {
              return {
                ...b,
                x: dropX,
                y: dropY,
                prevBlockId: undefined,
                attachedToBlockId: undefined,
              };
            }
            if (offsets.has(b.id)) {
              const off = offsets.get(b.id)!;
              return { ...b, x: dropX + off.dx, y: dropY + off.dy };
            }
            if (b.id === orig.prevBlockId) {
              return { ...b, nextBlockId: undefined };
            }
            return b;
          });
          if (orig.attachedToBlockId) {
            updated = updateAnyBlockInTree(updated, orig.attachedToBlockId, (p) => ({
              ...p,
              attachedMethodId: undefined,
            }));
          }
          return updated;
        });
        return;
      }
    } else {
      // From toolbox or extracted from inner
      setCanvasBlocks((prev) => [
        ...prev,
        {
          ...baseBlock,
          x: dropX,
          y: dropY,
          prevBlockId: undefined,
          nextBlockId: undefined,
        },
      ]);
      if (extractedFromInner) {

      } else {

      }
    }
  };

  // Authentic Scratch Pointer Drag & Snap Engine (Canvas Blocks)
  const handleBlockPointerDown = (e: React.PointerEvent, block: CanvasBlock) => {
    if (e.button !== 0) return;
    const targetTag = (e.target as HTMLElement).tagName;
    if (targetTag === 'INPUT' || targetTag === 'BUTTON' || targetTag === 'SELECT') {
      return;
    }

    e.stopPropagation();
    const blockEl = document.getElementById(`block-${block.id}`);
    if (!blockEl || !workspaceRef.current) return;

    const blockRect = blockEl.getBoundingClientRect();
    const grabOffsetX = e.clientX - blockRect.left;
    const grabOffsetY = e.clientY - blockRect.top;

    // Bring clicked stack to the front layer
    setCanvasBlocks((prev) => bringStackToFront(block.id, prev));

    // Cache initial positions of the dragged block and all its descendants
    const descendantIds = getDescendantBlockIds(block.id, canvasBlocks);
    const initialPositions = new Map<string, { x: number; y: number }>();
    initialPositions.set(block.id, { x: block.x, y: block.y });
    for (const did of descendantIds) {
      const db = canvasBlocks.find((b) => b.id === did);
      if (db) initialPositions.set(did, { x: db.x, y: db.y });
    }

    pointerDragRef.current = {
      blockId: block.id,
      source: 'canvas',
      blockType: block.type,
      startX: block.x,
      startY: block.y,
      startPointerX: e.clientX,
      startPointerY: e.clientY,
      grabOffsetX,
      grabOffsetY,
      initialWidth: blockEl.offsetWidth,
      initialHeight: blockEl.offsetHeight,
      hasMoved: false,
    };

    let hasUnplugged = false;

    const onPointerMove = (moveEv: PointerEvent) => {
      moveEv.preventDefault();
      if (!pointerDragRef.current || !workspaceRef.current) return;
      const cRect = workspaceRef.current.getBoundingClientRect();
      const currX = Math.round(moveEv.clientX - cRect.left - pointerDragRef.current.grabOffsetX);
      const currY = Math.round(moveEv.clientY - cRect.top - pointerDragRef.current.grabOffsetY);

      if (!pointerDragRef.current.hasMoved) {
        const startPX = pointerDragRef.current.startPointerX ?? moveEv.clientX;
        const startPY = pointerDragRef.current.startPointerY ?? moveEv.clientY;
        if (Math.hypot(moveEv.clientX - startPX, moveEv.clientY - startPY) > 3) {
          pointerDragRef.current.hasMoved = true;
          setIsDraggingBlock(true);
          setDraggingBlockId(block.id);

          // Scratch Unplug: If this block is plugged below a parent, unplug immediately upon drag!
          if (block.prevBlockId && !hasUnplugged) {
            hasUnplugged = true;
            const pId = block.prevBlockId;
            setCanvasBlocks((prev) =>
              prev.map((b) => {
                if (b.id === pId) return { ...b, nextBlockId: undefined };
                if (b.id === block.id) return { ...b, prevBlockId: undefined };
                return b;
              })
            );
          }
          if (block.attachedToBlockId && !hasUnplugged) {
            hasUnplugged = true;
            const pId = block.attachedToBlockId;
            setCanvasBlocks((prev) => {
              const clearedP = updateAnyBlockInTree(prev, pId, (p) => ({ ...p, attachedMethodId: undefined }));
              return updateAnyBlockInTree(clearedP, block.id, (b) => ({ ...b, attachedToBlockId: undefined }));
            });
          }
        }
      }

      if (pointerDragRef.current.hasMoved) {
        // Highlight trash can or toolbox if hovering over them
        const trashEl = document.querySelector('.trash-dropzone');
        if (trashEl) {
          const tr = trashEl.getBoundingClientRect();
          const isOverTrash =
            moveEv.clientX >= tr.left &&
            moveEv.clientX <= tr.right &&
            moveEv.clientY >= tr.top &&
            moveEv.clientY <= tr.bottom;
          setIsTrashHovered(isOverTrash);
        }

        const toolboxEl = document.getElementById('toolbox-section');
        const isOverToolbox =
          (toolboxEl
            ? (() => {
              const tb = toolboxEl.getBoundingClientRect();
              return (
                moveEv.clientX >= tb.left &&
                moveEv.clientX <= tb.right &&
                moveEv.clientY >= tb.top &&
                moveEv.clientY <= tb.bottom
              );
            })()
            : false) || (workspaceRef.current ? moveEv.clientX <= cRect.left + 15 : false);
        setIsToolboxHovered(isOverToolbox);

        const snap = findSnapTarget(currX, currY, block.id, canvasBlocksRef.current);
        activeSnapTargetRef.current = snap;
        setActiveSnapTarget(snap);

        // Move block and its descendants with constant relative offsets
        const totalDx = currX - pointerDragRef.current.startX;
        const totalDy = currY - pointerDragRef.current.startY;

        setCanvasBlocks((prev) =>
          prev.map((b) => {
            if (b.id === block.id) return { ...b, x: currX, y: currY };
            if (initialPositions.has(b.id)) {
              const init = initialPositions.get(b.id)!;
              return { ...b, x: init.x + totalDx, y: init.y + totalDy };
            }
            return b;
          })
        );
      }
    };

    const onPointerUp = (upEv: PointerEvent) => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);

      if (!pointerDragRef.current) return;
      const hadMoved = pointerDragRef.current.hasMoved;
      const snap = activeSnapTargetRef.current;
      activeSnapTargetRef.current = null;
      setActiveSnapTarget(null);
      setIsDraggingBlock(false);
      setDraggingBlockId(null);
      setIsTrashHovered(false);
      setIsToolboxHovered(false);

      if (hadMoved && workspaceRef.current) {
        const cRect = workspaceRef.current.getBoundingClientRect();

        // Check if dropped onto trash can
        const trashEl = document.querySelector('.trash-dropzone');
        const isOverTrash = trashEl
          ? (() => {
            const tr = trashEl.getBoundingClientRect();
            return (
              upEv.clientX >= tr.left &&
              upEv.clientX <= tr.right &&
              upEv.clientY >= tr.top &&
              upEv.clientY <= tr.bottom
            );
          })()
          : false;

        // Check if dropped onto toolbox section (or left sidebar area)
        const toolboxEl = document.getElementById('toolbox-section');
        const isOverToolbox =
          (toolboxEl
            ? (() => {
              const tb = toolboxEl.getBoundingClientRect();
              return (
                upEv.clientX >= tb.left &&
                upEv.clientX <= tb.right &&
                upEv.clientY >= tb.top &&
                upEv.clientY <= tb.bottom
              );
            })()
            : false) || upEv.clientX <= cRect.left + 15;

        if (isOverTrash || isOverToolbox) {
          handleDeleteBlock(block.id);
          showToast(
            isOverToolbox
              ? '🗑️ 블록이 블록 모음함으로 드래그되어 제거되었습니다.'
              : '🗑️ 블록이 휴지통에 버려졌습니다.'
          );
          pointerDragRef.current = null;
          return;
        }

        const finalX = Math.max(10, Math.min(cRect.width - 120, upEv.clientX - cRect.left - pointerDragRef.current.grabOffsetX));
        const finalY = Math.max(10, Math.min(cRect.height - 40, upEv.clientY - cRect.top - pointerDragRef.current.grabOffsetY));

        executeBlockPlacement(
          'canvas',
          { id: block.id },
          finalX,
          finalY,
          snap
        );
      }

      pointerDragRef.current = null;
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
  };

  // Authentic Scratch Pointer Drag & Snap Engine (Inner Blocks inside Loops/Branches)
  const handleInnerBlockPointerDown = (
    e: React.PointerEvent,
    child: CanvasBlock,
    parentBlockId: string,
    childIdx: number,
    branchId?: string
  ) => {
    if (e.button !== 0) return;
    const targetTag = (e.target as HTMLElement).tagName;
    if (targetTag === 'INPUT' || targetTag === 'BUTTON' || targetTag === 'SELECT') {
      return;
    }

    e.stopPropagation();
    if (!workspaceRef.current) return;
    const targetEl = e.currentTarget as HTMLElement;
    const tRect = targetEl.getBoundingClientRect();
    const grabOffsetX = e.clientX - tRect.left;
    const grabOffsetY = e.clientY - tRect.top;

    pointerDragRef.current = {
      blockId: child.id,
      source: 'inner',
      blockType: child.type,
      varName: child.varName,
      content: child.content,
      parentBlockId,
      childIdx,
      branchId,
      startX: 0,
      startY: 0,
      startPointerX: e.clientX,
      startPointerY: e.clientY,
      grabOffsetX,
      grabOffsetY,
      initialWidth: Math.round(tRect.width),
      initialHeight: Math.round(tRect.height),
      hasMoved: false,
    };

    let hasExtracted = false;

    const onPointerMove = (moveEv: PointerEvent) => {
      moveEv.preventDefault();
      if (!pointerDragRef.current || !workspaceRef.current) return;
      const cRect = workspaceRef.current.getBoundingClientRect();
      const currX = Math.round(moveEv.clientX - cRect.left - pointerDragRef.current.grabOffsetX);
      const currY = Math.round(moveEv.clientY - cRect.top - pointerDragRef.current.grabOffsetY);

      if (!pointerDragRef.current.hasMoved) {
        const startPX = pointerDragRef.current.startPointerX ?? moveEv.clientX;
        const startPY = pointerDragRef.current.startPointerY ?? moveEv.clientY;
        if (Math.hypot(moveEv.clientX - startPX, moveEv.clientY - startPY) > 3) {
          pointerDragRef.current.hasMoved = true;
          pointerDragRef.current.source = 'canvas';
          setIsDraggingBlock(true);
          setDraggingBlockId(child.id);

          hasExtracted = true;
          // Scratch Unplug: Remove child immediately from parent loop/branch and add to canvasBlocks
          setCanvasBlocks((prev) => {
            const updated = updateAnyBlockInTree(prev, parentBlockId, (p) => {
              if (branchId && p.branches) {
                return {
                  ...p,
                  branches: p.branches.map((br) => {
                    if (br.id !== branchId || !br.innerBlocks) return br;
                    return {
                      ...br,
                      innerBlocks: br.innerBlocks.filter((_, idx) => idx !== childIdx),
                    };
                  }),
                };
              }
              if (p.innerBlocks) {
                return {
                  ...p,
                  innerBlocks: p.innerBlocks.filter((_, idx) => idx !== childIdx),
                };
              }
              return p;
            });

            const movingBlock: CanvasBlock = {
              ...child,
              x: currX,
              y: currY,
              prevBlockId: undefined,
              nextBlockId: undefined,
              attachedToBlockId: undefined,
              attachedMethodId: child.attachedMethodId,
            };

            const nextList = [...updated, movingBlock];
            canvasBlocksRef.current = nextList;
            return nextList;
          });
        }
      }

      if (pointerDragRef.current.hasMoved) {
        // Highlight trash can or toolbox if hovering over them
        const trashEl = document.querySelector('.trash-dropzone');
        if (trashEl) {
          const tr = trashEl.getBoundingClientRect();
          const isOverTrash =
            moveEv.clientX >= tr.left &&
            moveEv.clientX <= tr.right &&
            moveEv.clientY >= tr.top &&
            moveEv.clientY <= tr.bottom;
          setIsTrashHovered(isOverTrash);
        }

        const toolboxEl = document.getElementById('toolbox-section');
        const isOverToolbox =
          (toolboxEl
            ? (() => {
              const tb = toolboxEl.getBoundingClientRect();
              return (
                moveEv.clientX >= tb.left &&
                moveEv.clientX <= tb.right &&
                moveEv.clientY >= tb.top &&
                moveEv.clientY <= tb.bottom
              );
            })()
            : false) || (workspaceRef.current ? moveEv.clientX <= cRect.left + 15 : false);
        setIsToolboxHovered(isOverToolbox);

        const snap = findSnapTarget(currX, currY, child.id, canvasBlocksRef.current);
        activeSnapTargetRef.current = snap;
        setActiveSnapTarget(snap);

        // Move block with pointer smoothly in real-time
        setCanvasBlocks((prev) => {
          const nextList = prev.map((b) => (b.id === child.id ? { ...b, x: currX, y: currY } : b));
          canvasBlocksRef.current = nextList;
          return nextList;
        });
      }
    };

    const onPointerUp = (upEv: PointerEvent) => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);

      if (!pointerDragRef.current) return;
      const hadMoved = pointerDragRef.current.hasMoved;
      const snap = activeSnapTargetRef.current;
      activeSnapTargetRef.current = null;
      setActiveSnapTarget(null);
      setIsDraggingBlock(false);
      setDraggingBlockId(null);
      setIsTrashHovered(false);
      setIsToolboxHovered(false);

      if (hadMoved && workspaceRef.current && hasExtracted) {
        const cRect = workspaceRef.current.getBoundingClientRect();

        // Check if dropped onto trash can
        const trashEl = document.querySelector('.trash-dropzone');
        const isOverTrash = trashEl
          ? (() => {
            const tr = trashEl.getBoundingClientRect();
            return (
              upEv.clientX >= tr.left &&
              upEv.clientX <= tr.right &&
              upEv.clientY >= tr.top &&
              upEv.clientY <= tr.bottom
            );
          })()
          : false;

        // Check if dropped onto toolbox section (or left sidebar area)
        const toolboxEl = document.getElementById('toolbox-section');
        const isOverToolbox =
          (toolboxEl
            ? (() => {
              const tb = toolboxEl.getBoundingClientRect();
              return (
                upEv.clientX >= tb.left &&
                upEv.clientX <= tb.right &&
                upEv.clientY >= tb.top &&
                upEv.clientY <= tb.bottom
              );
            })()
            : false) || upEv.clientX <= cRect.left + 15;

        if (isOverTrash || isOverToolbox) {
          setCanvasBlocks((prev) => {
            const nextList = prev.filter((b) => b.id !== child.id);
            canvasBlocksRef.current = nextList;
            return nextList;
          });
          showToast(
            isOverToolbox
              ? '🗑️ 블록이 블록 모음함으로 드래그되어 제거되었습니다.'
              : '🗑️ 블록이 휴지통에 버려졌습니다.'
          );
          pointerDragRef.current = null;
          return;
        }

        const finalX = Math.max(10, upEv.clientX - cRect.left - pointerDragRef.current.grabOffsetX);
        const finalY = Math.max(10, upEv.clientY - cRect.top - pointerDragRef.current.grabOffsetY);

        executeBlockPlacement(
          'canvas',
          { id: child.id },
          finalX,
          finalY,
          snap
        );
      }

      pointerDragRef.current = null;
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
  };

  // Authentic Scratch Pointer Drag & Snap Engine (Nested Argument Blocks inside Functions/Variables)
  const handleArgBlockPointerDown = (
    e: React.PointerEvent,
    child: CanvasBlock,
    parentBlockId: string
  ) => {
    if (e.button !== 0) return;
    const targetTag = (e.target as HTMLElement).tagName;
    if (targetTag === 'INPUT' || targetTag === 'BUTTON' || targetTag === 'SELECT') {
      return;
    }

    e.stopPropagation();
    if (!workspaceRef.current) return;
    const targetEl = e.currentTarget as HTMLElement;
    const tRect = targetEl.getBoundingClientRect();
    const grabOffsetX = e.clientX - tRect.left;
    const grabOffsetY = e.clientY - tRect.top;

    pointerDragRef.current = {
      blockId: child.id,
      source: 'canvas',
      blockType: child.type,
      varName: child.varName,
      content: child.content,
      parentBlockId,
      startX: 0,
      startY: 0,
      startPointerX: e.clientX,
      startPointerY: e.clientY,
      grabOffsetX,
      grabOffsetY,
      initialWidth: Math.round(tRect.width),
      initialHeight: Math.round(tRect.height),
      hasMoved: false,
    };

    // Cache descendant method block IDs (e.g. .split() attached to input())
    const descendantIds = getDescendantBlockIds(child.id, canvasBlocksRef.current);
    let hasExtracted = false;

    const onPointerMove = (moveEv: PointerEvent) => {
      moveEv.preventDefault();
      if (!pointerDragRef.current || !workspaceRef.current) return;
      const cRect = workspaceRef.current.getBoundingClientRect();
      const currX = Math.round(moveEv.clientX - cRect.left - pointerDragRef.current.grabOffsetX);
      const currY = Math.round(moveEv.clientY - cRect.top - pointerDragRef.current.grabOffsetY);

      if (!pointerDragRef.current.hasMoved) {
        const startPX = pointerDragRef.current.startPointerX ?? moveEv.clientX;
        const startPY = pointerDragRef.current.startPointerY ?? moveEv.clientY;
        if (Math.hypot(moveEv.clientX - startPX, moveEv.clientY - startPY) > 3) {
          pointerDragRef.current.hasMoved = true;
          setIsDraggingBlock(true);
          setDraggingBlockId(child.id);
          hasExtracted = true;
        }
      }

      if (pointerDragRef.current.hasMoved) {
        // Highlight trash can or toolbox if hovering over them
        const trashEl = document.querySelector('.trash-dropzone');
        if (trashEl) {
          const tr = trashEl.getBoundingClientRect();
          const isOverTrash =
            moveEv.clientX >= tr.left &&
            moveEv.clientX <= tr.right &&
            moveEv.clientY >= tr.top &&
            moveEv.clientY <= tr.bottom;
          setIsTrashHovered(isOverTrash);
        }

        const toolboxEl = document.getElementById('toolbox-section');
        const isOverToolbox =
          (toolboxEl
            ? (() => {
              const tb = toolboxEl.getBoundingClientRect();
              return (
                moveEv.clientX >= tb.left &&
                moveEv.clientX <= tb.right &&
                moveEv.clientY >= tb.top &&
                moveEv.clientY <= tb.bottom
              );
            })()
            : false) || (workspaceRef.current ? moveEv.clientX <= cRect.left + 15 : false);
        setIsToolboxHovered(isOverToolbox);

        const snap = findSnapTarget(currX, currY, child.id, canvasBlocksRef.current);
        activeSnapTargetRef.current = snap;
        setActiveSnapTarget(snap);

        // Dynamically compute exact horizontal positions for all attached chained methods
        let runningX = currX;
        const childEl = document.getElementById(`block-${child.id}`);
        const childW = (childEl && !childEl.closest('.arg-slot-filled')) ? childEl.offsetWidth : 130;
        runningX += childW - 1;

        const methodPositions = new Map<string, { x: number; y: number }>();
        for (const did of descendantIds) {
          methodPositions.set(did, { x: runningX, y: currY });
          const dEl = document.getElementById(`block-${did}`);
          const dW = (dEl && !dEl.closest('.arg-slot-filled')) ? dEl.offsetWidth : 115;
          runningX += dW - 1;
        }

        // Move block AND all attached chained methods with pointer smoothly in real-time
        setCanvasBlocks((prev) => {
          let list = prev;
          const isAtRoot = list.some((b) => b.id === child.id);
          if (!isAtRoot) {
            list = updateAnyBlockInTree(list, parentBlockId, (p) => {
              if (p.argBlock?.id === child.id) {
                return { ...p, argBlock: undefined };
              }
              if (p.attachedMethodId === child.id) {
                return { ...p, attachedMethodId: undefined };
              }
              return p;
            });
            const movingBlock: CanvasBlock = {
              ...child,
              x: currX,
              y: currY,
              prevBlockId: undefined,
              nextBlockId: undefined,
              attachedToBlockId: undefined,
              zIndex: (maxCanvasZIndexRef.current += 20),
            };
            list = [...list, movingBlock];
          }

          const nextList = list.map((b) => {
            if (b.id === child.id) return { ...b, x: currX, y: currY };
            if (methodPositions.has(b.id)) {
              const pos = methodPositions.get(b.id)!;
              return { ...b, x: pos.x, y: pos.y };
            }
            return b;
          });
          canvasBlocksRef.current = nextList;
          return nextList;
        });
      }
    };

    const onPointerUp = (upEv: PointerEvent) => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);

      if (!pointerDragRef.current) return;
      const hadMoved = pointerDragRef.current.hasMoved;
      const snap = activeSnapTargetRef.current;
      activeSnapTargetRef.current = null;
      setActiveSnapTarget(null);
      setIsDraggingBlock(false);
      setDraggingBlockId(null);
      setIsTrashHovered(false);
      setIsToolboxHovered(false);

      if (hadMoved && workspaceRef.current && hasExtracted) {
        const cRect = workspaceRef.current.getBoundingClientRect();

        const trashEl = document.querySelector('.trash-dropzone');
        const isOverTrash = trashEl
          ? (() => {
            const tr = trashEl.getBoundingClientRect();
            return (
              upEv.clientX >= tr.left &&
              upEv.clientX <= tr.right &&
              upEv.clientY >= tr.top &&
              upEv.clientY <= tr.bottom
            );
          })()
          : false;

        const toolboxEl = document.getElementById('toolbox-section');
        const isOverToolbox =
          (toolboxEl
            ? (() => {
              const tb = toolboxEl.getBoundingClientRect();
              return (
                upEv.clientX >= tb.left &&
                upEv.clientX <= tb.right &&
                upEv.clientY >= tb.top &&
                upEv.clientY <= tb.bottom
              );
            })()
            : false) || upEv.clientX <= cRect.left + 15;

        if (isOverTrash || isOverToolbox) {
          setCanvasBlocks((prev) => {
            const toDelete = new Set([child.id, ...descendantIds]);
            const nextList = prev.filter((b) => !toDelete.has(b.id));
            canvasBlocksRef.current = nextList;
            return nextList;
          });
          showToast(
            isOverToolbox
              ? '🗑️ 블록이 블록 모음함으로 드래그되어 제거되었습니다.'
              : '🗑️ 블록이 휴지통에 버려졌습니다.'
          );
          pointerDragRef.current = null;
          return;
        }

        const finalX = Math.max(10, upEv.clientX - cRect.left - pointerDragRef.current.grabOffsetX);
        const finalY = Math.max(10, upEv.clientY - cRect.top - pointerDragRef.current.grabOffsetY);

        executeBlockPlacement(
          'canvas',
          { id: child.id },
          finalX,
          finalY,
          snap
        );
      }

      pointerDragRef.current = null;
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
  };

  // Live Scratch Snapping & Insertion Marker Tracking (HTML5 Drag fallback)
  const handleCanvasDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = draggingInfoRef.current?.source === 'toolbox' ? 'copy' : 'move';

    if (!workspaceRef.current) return;
    const cRect = workspaceRef.current.getBoundingClientRect();
    const grabX = draggingInfoRef.current?.grabX ?? 30;
    const grabY = draggingInfoRef.current?.grabY ?? 15;
    const currX = Math.round(Math.max(10, e.clientX - cRect.left - grabX));
    const currY = Math.round(Math.max(10, e.clientY - cRect.top - grabY));

    const snap = findSnapTarget(currX, currY, draggingInfoRef.current?.id, canvasBlocksRef.current);
    activeSnapTargetRef.current = snap;
    setActiveSnapTarget(snap);
  };

  const handleCanvasDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingBlock(false);
    setIsTrashHovered(false);

    if (!workspaceRef.current) return;
    const cRect = workspaceRef.current.getBoundingClientRect();

    let info = draggingInfoRef.current;
    if (!info) {
      try {
        const raw = e.dataTransfer.getData('text/plain');
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed && (parsed.source || parsed.blockType || parsed.id)) {
            info = parsed;
          }
        }
      } catch { }
    }

    if (!info || (!info.blockType && !info.id)) {
      return;
    }

    const snap = activeSnapTargetRef.current || activeSnapTarget;
    activeSnapTargetRef.current = null;
    setActiveSnapTarget(null);

    const grabX = info?.grabX ?? 30;
    const grabY = info?.grabY ?? 15;
    const dropX = Math.max(10, e.clientX - cRect.left - grabX);
    const dropY = Math.max(10, e.clientY - cRect.top - grabY);

    executeBlockPlacement(
      info?.source || 'toolbox',
      {
        id: info?.id,
        blockType: info?.blockType,
        varName: info?.varName,
        content: info?.content,
        withElse: (info as any)?.withElse,
        parentBlockId: info?.parentBlockId,
        childIdx: info?.childIdx,
        branchId: info?.branchId,
      },
      dropX,
      dropY,
      snap
    );

    draggingInfoRef.current = null;
    setDraggedBlockType(null);
  };

  // 3. Trash Can Drop (보드 오른쪽 아래 휴지통에 드래그하여 버리기)
  const handleTrashDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'move';
    if (!isTrashHovered) setIsTrashHovered(true);
  };

  const handleTrashDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsTrashHovered(false);
    }
  };

  const handleTrashDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsTrashHovered(false);
    setIsDraggingBlock(false);
    activeSnapTargetRef.current = null;
    setActiveSnapTarget(null);

    let info = draggingInfoRef.current;
    if (!info) {
      try {
        const raw = e.dataTransfer.getData('text/plain');
        if (raw) info = JSON.parse(raw);
      } catch { }
    }

    if (info?.source === 'canvas' && info.id) {
      handleDeleteBlock(info.id);
      showToast('🗑️ 블록이 휴지통에 버려졌습니다.');
    } else if (info?.source === 'inner' && info.parentBlockId) {
      if (info.branchId) {
        handleRemoveInnerBlockFromBranch(info.parentBlockId, info.branchId, info.childIdx!);
      } else {
        handleRemoveInnerBlockFromLoop(info.parentBlockId, info.childIdx!);
      }
      showToast('🗑️ 블록이 휴지통에 버려졌습니다.');
    }

    draggingInfoRef.current = null;
    setDraggedBlockType(null);
  };

  // 4. Right-click Context Menu (블록 우클릭)
  const handleBlockContextMenu = (e: React.MouseEvent, blockId: string) => {
    e.preventDefault();
    e.stopPropagation();
    const menuX = Math.min(e.clientX, window.innerWidth - 200);
    const menuY = Math.min(e.clientY, window.innerHeight - 240);
    setContextMenu({
      visible: true,
      x: menuX,
      y: menuY,
      blockId,
      targetType: 'block',
    });
  };

  const handleDuplicateBlock = (blockId: string) => {
    const target = findBlockInTree(canvasBlocks, blockId);
    if (!target || target.type === 'start') return;

    // 1. Identify all canvas-level blocks in this connected chain (if target is at root canvas level)
    const isTargetRootCanvas = canvasBlocks.some((b) => b.id === target.id);
    let chainBlocks: CanvasBlock[] = [];
    if (isTargetRootCanvas) {
      const descendantIds = getDescendantBlockIds(target.id, canvasBlocks);
      const chainIds = [target.id, ...descendantIds];
      chainBlocks = chainIds
        .map((id) => canvasBlocks.find((b) => b.id === id)!)
        .filter(Boolean);
    } else {
      // Nested block being duplicated to root canvas
      chainBlocks = [target];
    }

    if (chainBlocks.length === 0) return;

    // 2. Generate new IDs for ALL blocks in this subtree (including nested innerBlocks & branches)
    const idMap = new Map<string, string>();
    let idCounter = 0;
    const collectIds = (blk: CanvasBlock) => {
      const newId = `${blk.type}-${Date.now()}-${++idCounter}-${Math.random().toString(36).slice(2, 6)}`;
      idMap.set(blk.id, newId);
      if (blk.argBlock) {
        collectIds(blk.argBlock);
      }
      if (blk.innerBlocks) {
        for (const child of blk.innerBlocks) {
          collectIds(child);
        }
      }
      if (blk.branches) {
        for (const br of blk.branches) {
          for (const child of br.innerBlocks) {
            collectIds(child);
          }
        }
      }
    };
    for (const cb of chainBlocks) {
      collectIds(cb);
    }

    // 3. New highest Z-index for the duplicated group so it renders strictly in front (foreground layer)
    const newBaseZ = (maxCanvasZIndexRef.current += 20);
    const OFFSET = 35;

    // Calculate canvas coordinates for cloned target
    let baseX = target.x;
    let baseY = target.y;
    if (!isTargetRootCanvas) {
      const el = document.getElementById(`block-${target.id}`);
      if (el && workspaceRef.current) {
        const wRect = workspaceRef.current.getBoundingClientRect();
        const bRect = el.getBoundingClientRect();
        baseX = Math.round(bRect.left - wRect.left);
        baseY = Math.round(bRect.top - wRect.top);
      } else {
        baseX = 80;
        baseY = 80;
      }
    }

    // 4. Recursive cloner function
    const deepCloneBlock = (
      blk: CanvasBlock,
      isRootInChain: boolean,
      chainDepth: number
    ): CanvasBlock => {
      const newId = idMap.get(blk.id) || `${blk.type}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;

      const newArgBlock = blk.argBlock
        ? deepCloneBlock(blk.argBlock, false, 0)
        : undefined;

      const newInnerBlocks = blk.innerBlocks
        ? blk.innerBlocks.map((child, idx) => deepCloneBlock(child, false, idx))
        : undefined;

      const newBranches = blk.branches
        ? blk.branches.map((br) => ({
            id: `br-${br.kind}-${Date.now()}-${++idCounter}-${Math.random().toString(36).slice(2, 6)}`,
            kind: br.kind,
            condition: br.condition,
            innerBlocks: br.innerBlocks.map((child, idx) => deepCloneBlock(child, false, idx)),
          }))
        : undefined;

      const newNextBlockId = blk.nextBlockId && idMap.has(blk.nextBlockId)
        ? idMap.get(blk.nextBlockId)
        : undefined;

      // The root of the duplicated group must NOT be connected upwards
      const newPrevBlockId = isRootInChain
        ? undefined
        : (blk.prevBlockId && idMap.has(blk.prevBlockId) ? idMap.get(blk.prevBlockId) : undefined);

      const newAttachedMethodId = blk.attachedMethodId && idMap.has(blk.attachedMethodId)
        ? idMap.get(blk.attachedMethodId)
        : undefined;

      const newAttachedToBlockId = isRootInChain
        ? undefined
        : (blk.attachedToBlockId && idMap.has(blk.attachedToBlockId) ? idMap.get(blk.attachedToBlockId) : undefined);

      return {
        ...blk,
        id: newId,
        argBlock: newArgBlock,
        items: blk.items ? [...blk.items] : undefined,
        dictPairs: blk.dictPairs ? blk.dictPairs.map((p) => ({ ...p })) : undefined,
        innerBlocks: newInnerBlocks,
        branches: newBranches,
        nextBlockId: newNextBlockId,
        prevBlockId: newPrevBlockId,
        attachedMethodId: newAttachedMethodId,
        attachedToBlockId: newAttachedToBlockId,
        zIndex: Math.max(1, newBaseZ - chainDepth),
      };
    };

    // 5. Clone all chain blocks with spatial offset in front
    const clonedBlocks: CanvasBlock[] = chainBlocks.map((cb, idx) => {
      const isRoot = cb.id === target.id;
      const cloned = deepCloneBlock(cb, isRoot, idx);
      const posX = isTargetRootCanvas ? cb.x + OFFSET : baseX + OFFSET + (cb.x - target.x);
      const posY = isTargetRootCanvas ? cb.y + OFFSET : baseY + OFFSET + (cb.y - target.y);
      return {
        ...cloned,
        x: posX,
        y: posY,
      };
    });

    setCanvasBlocks((prev) => [...prev, ...clonedBlocks]);
    setContextMenu({ visible: false, x: 0, y: 0, blockId: null, targetType: 'block' });
    const isCombined =
      chainBlocks.length > 1 ||
      (target.innerBlocks && target.innerBlocks.length > 0) ||
      (target.branches && target.branches.some((br) => br.innerBlocks && br.innerBlocks.length > 0));
    showToast(isCombined ? '📋 결합된 블록 세트가 복사되었습니다.' : '📋 블록이 복사되었습니다.');
  };

  const handleClearBlockContent = (blockId: string) => {
    setCanvasBlocks((prev) =>
      prev.map((b) => (b.id === blockId ? { ...b, content: '', items: b.items ? [''] : undefined, dictPairs: b.dictPairs ? [{ key: '', value: '' }] : undefined } : b))
    );
    setContextMenu({ visible: false, x: 0, y: 0, blockId: null, targetType: 'block' });
    showToast('✏️ 블록 내용이 비워졌습니다.');
  };

  const handleDeleteBlock = (blockId: string) => {
    let deletedCount = 1;
    setCanvasBlocks((prev) => {
      const target = prev.find((b) => b.id === blockId);
      if (target?.type === 'start') {
        showToast('ℹ️ 실행 블록은 삭제할 수 없습니다.');
        return prev;
      }
      // Scratch Subtree Cascade Deletion:
      // 삭제 대상 블록과 그 하위에 연결된 모든 자손 블록(nextBlockId 체인)을 일괄 삭제
      const descendantIds = getDescendantBlockIds(blockId, prev);
      const idsToDelete = new Set([blockId, ...descendantIds]);
      deletedCount = idsToDelete.size;

      const cleanBlockTree = (list: CanvasBlock[]): CanvasBlock[] => {
        return list
          .filter((b) => !idsToDelete.has(b.id))
          .map((b) => {
            let updated = { ...b };
            if (b.nextBlockId && idsToDelete.has(b.nextBlockId)) {
              updated.nextBlockId = undefined;
            }
            if (target && b.id === target.prevBlockId) {
              updated.nextBlockId = undefined;
            }
            if (b.attachedMethodId && idsToDelete.has(b.attachedMethodId)) {
              updated.attachedMethodId = undefined;
            }
            if (target && b.id === target.attachedToBlockId) {
              updated.attachedMethodId = undefined;
            }
            if (b.argBlock) {
              if (idsToDelete.has(b.argBlock.id)) {
                updated.argBlock = undefined;
              } else {
                const cleanedArg = cleanBlockTree([b.argBlock]);
                updated.argBlock = cleanedArg[0] || undefined;
              }
            }
            if (b.innerBlocks) {
              updated.innerBlocks = cleanBlockTree(b.innerBlocks);
            }
            if (b.branches) {
              updated.branches = b.branches.map((br) => ({
                ...br,
                innerBlocks: br.innerBlocks ? cleanBlockTree(br.innerBlocks) : [],
              }));
            }
            return updated;
          });
      };

      return cleanBlockTree(prev);
    });
    setContextMenu({ visible: false, x: 0, y: 0, blockId: null, targetType: 'block' });
    showToast(
      deletedCount > 1
        ? `🗑️ 블록과 하위 블록 ${deletedCount - 1}개가 함께 삭제되었습니다.`
        : '🗑️ 블록이 삭제되었습니다.'
    );
  };

  const handleBlockInputChange = (blockId: string, val: string) => {
    setCanvasBlocks((prev) =>
      updateAnyBlockInTree(prev, blockId, (b) => ({ ...b, content: val }))
    );
  };

  // Dynamic Item Handlers for list, tuple, set
  const handleAddItemToBlock = (blockId: string) => {
    setCanvasBlocks((prev) =>
      prev.map((b) => (b.id === blockId ? { ...b, items: [...(b.items || []), ''] } : b))
    );
  };

  const handleItemChange = (blockId: string, itemIdx: number, val: string) => {
    setCanvasBlocks((prev) =>
      prev.map((b) => {
        if (b.id !== blockId) return b;
        const newItems = [...(b.items || [])];
        newItems[itemIdx] = val;
        return { ...b, items: newItems };
      })
    );
  };

  const handleRemoveItem = (blockId: string, itemIdx: number) => {
    setCanvasBlocks((prev) =>
      prev.map((b) => {
        if (b.id !== blockId) return b;
        const newItems = (b.items || []).filter((_, idx) => idx !== itemIdx);
        return { ...b, items: newItems.length > 0 ? newItems : [''] };
      })
    );
  };

  // Dynamic Pair Handlers for dict
  const handleAddDictPair = (blockId: string) => {
    setCanvasBlocks((prev) =>
      prev.map((b) =>
        b.id === blockId ? { ...b, dictPairs: [...(b.dictPairs || []), { key: '', value: '' }] } : b
      )
    );
  };

  const handleDictKeyChange = (blockId: string, pairIdx: number, kVal: string) => {
    setCanvasBlocks((prev) =>
      prev.map((b) => {
        if (b.id !== blockId) return b;
        const newPairs = [...(b.dictPairs || [])];
        newPairs[pairIdx] = { ...newPairs[pairIdx], key: kVal };
        return { ...b, dictPairs: newPairs };
      })
    );
  };

  const handleDictValueChange = (blockId: string, pairIdx: number, val: string) => {
    setCanvasBlocks((prev) =>
      prev.map((b) => {
        if (b.id !== blockId) return b;
        const newPairs = [...(b.dictPairs || [])];
        newPairs[pairIdx] = { ...newPairs[pairIdx], value: val };
        return { ...b, dictPairs: newPairs };
      })
    );
  };

  const handleRemoveDictPair = (blockId: string, pairIdx: number) => {
    setCanvasBlocks((prev) =>
      prev.map((b) => {
        if (b.id !== blockId) return b;
        const newPairs = (b.dictPairs || []).filter((_, idx) => idx !== pairIdx);
        return { ...b, dictPairs: newPairs.length > 0 ? newPairs : [{ key: '', value: '' }] };
      })
    );
  };

  const handleBlockVarNameChange = (blockId: string, val: string) => {
    setCanvasBlocks((prev) =>
      prev.map((b) => (b.id === blockId ? { ...b, varName: val } : b))
    );
  };

  // C-Shape & E-Shape Branch / Slot Handlers
  const handleAddElifBranch = (blockId: string) => {
    setCanvasBlocks((prev) =>
      updateAnyBlockInTree(prev, blockId, (b) => {
        const currentBranches: IfBranch[] = b.branches && b.branches.length > 0
          ? b.branches
          : [{ id: `br-if-${b.id}`, kind: 'if' as const, condition: b.content || 'False', innerBlocks: b.innerBlocks || [] }];
        const elseIndex = currentBranches.findIndex((br) => br.kind === 'else');
        const newBranch: IfBranch = {
          id: `br-elif-${Date.now()}`,
          kind: 'elif',
          condition: 'False',
          innerBlocks: [],
        };
        const updatedBranches = [...currentBranches];
        if (elseIndex >= 0) {
          updatedBranches.splice(elseIndex, 0, newBranch);
        } else {
          updatedBranches.push(newBranch);
        }
        return { ...b, branches: updatedBranches };
      })
    );
    showToast('✨ elif 조건문 가지가 추가되었습니다.');
  };

  const handleAddElseBranch = (blockId: string) => {
    setCanvasBlocks((prev) =>
      updateAnyBlockInTree(prev, blockId, (b) => {
        const currentBranches: IfBranch[] = b.branches && b.branches.length > 0
          ? b.branches
          : [{ id: `br-if-${b.id}`, kind: 'if' as const, condition: b.content || '', innerBlocks: b.innerBlocks || [] }];
        if (currentBranches.some((br) => br.kind === 'else')) {
          showToast('⚠️ 이미 else 절이 존재합니다.');
          return b;
        }
        const newBranch: IfBranch = {
          id: `br-else-${Date.now()}`,
          kind: 'else',
          innerBlocks: [],
        };
        return { ...b, isIfElse: true, branches: [...currentBranches, newBranch] };
      })
    );
    showToast('✨ else 조건문 가지(E자 완성)가 추가되었습니다.');
  };

  const handleRemoveBranch = (blockId: string, branchId: string) => {
    setCanvasBlocks((prev) =>
      updateAnyBlockInTree(prev, blockId, (b) => {
        if (!b.branches) return b;
        const target = b.branches.find((br) => br.id === branchId);
        // Only if branch cannot be deleted; elif and else can be removed
        if (target?.kind === 'if') return b;
        const remaining = b.branches.filter((br) => br.id !== branchId);
        const hasElse = remaining.some((br) => br.kind === 'else');
        return {
          ...b,
          isIfElse: hasElse ? true : undefined,
          branches: remaining.length > 0 ? remaining : undefined,
        };
      })
    );
    showToast('🗑️ 조건 가지가 삭제되었습니다.');
  };

  const handleBranchConditionChange = (blockId: string, branchId: string, cond: string) => {
    setCanvasBlocks((prev) =>
      updateAnyBlockInTree(prev, blockId, (b) => {
        const curBranches = b.branches && b.branches.length > 0
          ? b.branches
          : [{ id: branchId, kind: 'if' as const, condition: b.content || 'False', innerBlocks: b.innerBlocks || [] }];
        return {
          ...b,
          content: cond,
          branches: curBranches.map((br) => (br.id === branchId ? { ...br, condition: cond } : br)),
        };
      })
    );
  };

  const handleToggleDefReturn = (blockId: string, enable: boolean) => {
    setCanvasBlocks((prev) =>
      updateAnyBlockInTree(prev, blockId, (b) => ({
        ...b,
        hasReturn: enable,
        returnVal: enable ? (b.returnVal || 'result') : undefined,
      }))
    );
    if (enable) {
      showToast('✨ return 반환문이 함수에 추가되었습니다.');
    } else {
      showToast('🗑️ return 반환문이 제거되었습니다.');
    }
  };

  const handleDefReturnValChange = (blockId: string, val: string) => {
    setCanvasBlocks((prev) =>
      updateAnyBlockInTree(prev, blockId, (b) => ({ ...b, returnVal: val }))
    );
  };

  // Canvas block input selection handler:
  // First click/focus selects all text; subsequent clicks place normal cursor.
  const handleInputFocusSelect = (e: React.FocusEvent<HTMLInputElement>) => {
    const el = e.currentTarget;
    el.dataset.justFocused = 'true';
    el.select();
    setTimeout(() => {
      try {
        if (el.dataset.justFocused === 'true') {
          el.select();
        }
      } catch { }
    }, 0);
    setTimeout(() => {
      delete el.dataset.justFocused;
    }, 400);
  };

  const handleInputClickSelect = (e: React.MouseEvent<HTMLInputElement>) => {
    const el = e.currentTarget;
    if (el.dataset.justFocused === 'true') {
      el.select();
      delete el.dataset.justFocused;
    }
  };

  const handleLoopInnerVarNameChange = (loopBlockId: string, val: string) => {
    setCanvasBlocks((prev) =>
      updateAnyBlockInTree(prev, loopBlockId, (b) => ({ ...b, varName: val }))
    );
  };

  // Add child block into loop slot (recursive tree support)
  const handleAddBlockToLoop = (loopBlockId: string, childType: BlockType = 'print') => {
    const isLoopOrDef = childType === 'for_range' || childType === 'for_in' || childType === 'while' || childType === 'def';
    const isIf = childType === 'if';
    const childBlock: CanvasBlock = {
      id: `${childType}-${Date.now()}`,
      type: childType,
      varName: childType === 'variable' ? 'x' : childType === 'for_range' ? 'j' : childType === 'for_in' ? 'item' : childType === 'def' ? 'sub_func' : undefined,
      content: childType === 'for_range' ? '3' : childType === 'for_in' ? 'items' : childType === 'while' ? 'False' : '',
      argBlock: childType === 'for_range' ? {
        id: `range-${Date.now() + 1}`,
        type: 'range',
        content: '3',
        x: 0,
        y: 0,
      } : undefined,
      innerBlocks: isLoopOrDef ? [] : undefined,
      branches: isIf ? [{ id: `br-if-${Date.now()}`, kind: 'if', condition: 'False', innerBlocks: [] }] : undefined,
      x: 0,
      y: 0,
    };
    setCanvasBlocks((prev) =>
      updateAnyBlockInTree(prev, loopBlockId, (b) => ({
        ...b,
        innerBlocks: [...(b.innerBlocks || []), childBlock],
      }))
    );
  };

  const handleRemoveInnerBlockFromLoop = (loopBlockId: string, childIdx: number) => {
    setCanvasBlocks((prev) =>
      updateAnyBlockInTree(prev, loopBlockId, (b) => {
        if (!b.innerBlocks) return b;
        return { ...b, innerBlocks: b.innerBlocks.filter((_, idx) => idx !== childIdx) };
      })
    );
  };

  // Add child block into if branch slot
  const handleAddBlockToBranch = (ifBlockId: string, branchId: string, childType: BlockType = 'print') => {
    const isLoopOrDef = childType === 'for_range' || childType === 'for_in' || childType === 'while' || childType === 'def';
    const isIf = childType === 'if';
    const childBlock: CanvasBlock = {
      id: `${childType}-${Date.now()}`,
      type: childType,
      varName: childType === 'variable' ? 'x' : childType === 'for_range' ? 'j' : childType === 'for_in' ? 'item' : childType === 'def' ? 'sub_func' : undefined,
      content: childType === 'for_range' ? '3' : childType === 'for_in' ? 'items' : childType === 'while' ? 'False' : '',
      argBlock: childType === 'for_range' ? {
        id: `range-${Date.now() + 1}`,
        type: 'range',
        content: '3',
        x: 0,
        y: 0,
      } : undefined,
      innerBlocks: isLoopOrDef ? [] : undefined,
      branches: isIf ? [{ id: `br-if-${Date.now()}`, kind: 'if', condition: 'False', innerBlocks: [] }] : undefined,
      x: 0,
      y: 0,
    };
    setCanvasBlocks((prev) =>
      updateAnyBlockInTree(prev, ifBlockId, (b) => {
        if (!b.branches) return b;
        return {
          ...b,
          branches: b.branches.map((br) =>
            br.id === branchId
              ? { ...br, innerBlocks: [...(br.innerBlocks || []), childBlock] }
              : br
          ),
        };
      })
    );
  };

  const handleRemoveInnerBlockFromBranch = (ifBlockId: string, branchId: string, childIdx: number) => {
    setCanvasBlocks((prev) =>
      updateAnyBlockInTree(prev, ifBlockId, (b) => {
        if (!b.branches) return b;
        return {
          ...b,
          branches: b.branches.map((br) =>
            br.id === branchId
              ? { ...br, innerBlocks: (br.innerBlocks || []).filter((_, idx) => idx !== childIdx) }
              : br
          ),
        };
      })
    );
  };

  const handleLoopInnerInputChange = (loopBlockId: string, childIdx: number, val: string) => {
    setCanvasBlocks((prev) =>
      updateAnyBlockInTree(prev, loopBlockId, (b) => {
        if (!b.innerBlocks) return b;
        const newInner = [...b.innerBlocks];
        if (newInner[childIdx]) {
          newInner[childIdx] = { ...newInner[childIdx], content: val };
        }
        return { ...b, innerBlocks: newInner };
      })
    );
  };

  const handleBranchInnerInputChange = (ifBlockId: string, branchId: string, childIdx: number, val: string) => {
    setCanvasBlocks((prev) =>
      updateAnyBlockInTree(prev, ifBlockId, (b) => {
        if (!b.branches) return b;
        return {
          ...b,
          branches: b.branches.map((br) => {
            if (br.id !== branchId || !br.innerBlocks) return br;
            const newInner = [...br.innerBlocks];
            if (newInner[childIdx]) {
              newInner[childIdx] = { ...newInner[childIdx], content: val };
            }
            return { ...br, innerBlocks: newInner };
          }),
        };
      })
    );
  };

    // 블록 섹션 클릭 시 자동 부착 기능 제거됨: 캔버스로 드래그 앤 드롭으로만 배치
  const handleAddBlockFromToolbox = (
    _kind: BlockType,
    _extra?: { varName?: string; withElse?: boolean }
  ) => {
    // No-op
  };

  const handleMethodNameChange = (blockId: string, val: string) => {
    setCanvasBlocks((prev) =>
      updateAnyBlockInTree(prev, blockId, (b) => ({ ...b, methodName: val }))
    );
  };

  const handleBlockTypeChange = (blockId: string, newType: BlockType) => {
    setCanvasBlocks((prev) =>
      updateAnyBlockInTree(prev, blockId, (b) => ({ ...b, type: newType }))
    );
  };

  const handleCreateVariable = () => {
    const name = varInputName.trim();
    if (!name) {
      showToast('⚠️ 변수 이름을 입력해주세요.');
      return;
    }
    if (!/^[a-zA-Z_]\w*$/.test(name)) {
      showToast('⚠️ 유효한 파이썬 변수명을 입력해주세요. (영문/언더스코어로 시작)');
      return;
    }

    const newVar: CustomVariableTemplate = {
      id: `custom-var-${Date.now()}`,
      name,
      kind: selectedVarKind,
    };

    setCustomVariables((prev) => [...prev, newVar]);
    setIsVarModalOpen(false);
    showToast(`✨ '${name}' (${getKindLabel(selectedVarKind)}) 블록이 생성되었습니다.`);
  };

  const currentDraggedType =
    draggedBlockType ||
    draggingInfoRef.current?.blockType ||
    (draggingBlockId ? findBlockInTree(canvasBlocks, draggingBlockId)?.type : null) ||
    (pointerDragRef.current?.blockId ? findBlockInTree(canvasBlocks, pointerDragRef.current.blockId)?.type : null);

  const isDraggingCBlock =
    currentDraggedType === 'for_range' ||
    currentDraggedType === 'for_in' ||
    currentDraggedType === 'while' ||
    currentDraggedType === 'if' ||
    currentDraggedType === 'def';

  const draggedDim = getDraggedBlockDimensions(undefined, currentDraggedType);
  const cBlockMouthHeight = draggedDim.mouthHeight;
  const cBlockTotalHeight = draggedDim.totalHeight;

  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        background: '#0b1329',
        color: '#f8fafc',
        display: 'flex',
        flexDirection: 'column',
        userSelect: 'none',
        fontFamily: 'var(--font-sans)',
        zIndex: 100,
      }}
    >
      {/* ====================================================================
          1. FULLSCREEN TOP STUDIO HEADER (MakeCode Style)
          ==================================================================== */}
      <header style={{
        height: '52px',
        background: '#0f172a',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        flexShrink: 0,
        zIndex: 50,
      }}>
        {/* Left: Exit & Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link
            href="/languages"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#cbd5e1',
              fontSize: '0.8rem',
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            <ArrowLeft size={15} />
            <span>나가기</span>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              padding: '3px 8px',
              borderRadius: '6px',
              background: '#0284c7',
              color: '#ffffff',
              fontSize: '0.72rem',
              fontWeight: 800,
              textTransform: 'uppercase',
            }}>
              {round.language}
            </span>
            <span style={{ fontSize: '0.88rem', fontWeight: 800, color: '#f8fafc' }}>
              {round.title_ko}
            </span>
          </div>
        </div>


        {/* Right: Level Step Navigator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '3px 6px',
              borderRadius: '8px',
              background: 'rgba(15, 23, 42, 0.75)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
              gap: '6px',
            }}
          >
            {/* Prev Step Button */}
            <button
              onClick={handlePrevStep}
              disabled={currentStepIndex <= 0}
              title={currentStepIndex > 0 ? '이전 문제' : '첫 번째 문제입니다'}
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: currentStepIndex > 0 ? 'rgba(255, 255, 255, 0.06)' : 'transparent',
                border: 'none',
                color: currentStepIndex > 0 ? '#cbd5e1' : 'rgba(255, 255, 255, 0.2)',
                cursor: currentStepIndex > 0 ? 'pointer' : 'not-allowed',
                transition: 'all 0.15s ease',
              }}
            >
              <ChevronLeft size={16} />
            </button>

            {/* Current Step / Total Count */}
            <div
              style={{
                padding: '0 8px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontFamily: 'var(--font-mono), monospace',
                fontSize: '0.84rem',
                userSelect: 'none',
              }}
            >
              <span style={{ fontWeight: 800, color: '#38bdf8' }}>
                {String(currentStepIndex + 1).padStart(2, '0')}
              </span>
              <span style={{ color: '#475569', fontWeight: 600 }}>/</span>
              <span style={{ color: '#94a3b8', fontWeight: 600 }}>
                {String(totalQuestions).padStart(2, '0')}
              </span>
            </div>

            {/* Next Step Button */}
            <button
              onClick={handleNextStep}
              disabled={currentStepIndex >= totalQuestions - 1 || !isStepUnlocked(currentStepIndex + 1)}
              title={
                currentStepIndex >= totalQuestions - 1
                  ? '마지막 문제입니다'
                  : !isStepUnlocked(currentStepIndex + 1)
                  ? '이전 문제를 완료해야 이동할 수 있습니다 (배포 잠금)'
                  : '다음 문제'
              }
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background:
                  currentStepIndex < totalQuestions - 1 && isStepUnlocked(currentStepIndex + 1)
                    ? 'rgba(255, 255, 255, 0.06)'
                    : 'transparent',
                border: 'none',
                color:
                  currentStepIndex < totalQuestions - 1 && isStepUnlocked(currentStepIndex + 1)
                    ? '#cbd5e1'
                    : 'rgba(255, 255, 255, 0.2)',
                cursor:
                  currentStepIndex < totalQuestions - 1 && isStepUnlocked(currentStepIndex + 1)
                    ? 'pointer'
                    : 'not-allowed',
                transition: 'all 0.15s ease',
              }}
            >
              {currentStepIndex < totalQuestions - 1 && !isStepUnlocked(currentStepIndex + 1) ? (
                <Lock size={13} color="#f43f5e" />
              ) : (
                <ChevronRight size={16} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ====================================================================
          2. MAIN 3-COLUMN STUDIO LAYOUT
          (Wide Terminal ~38% + Toolbox 180px + Full Drag Canvas 1fr)
          ==================================================================== */}
      <main style={{
        flex: '1 1 auto',
        height: 'calc(100vh - 52px)',
        display: 'grid',
        gridTemplateColumns: 'minmax(380px, 34%) 248px 1fr',
        background: '#090e1a',
        overflow: 'hidden',
      }}>
        {/* ==================================================================
            COLUMN 1 (LEFT ~38%): Spacious Terminal + Compact RAM Storage Boxes
            ================================================================== */}
        <section style={{
          display: 'flex',
          flexDirection: 'column',
          background: '#0d1527',
          borderRight: '1px solid rgba(255, 255, 255, 0.08)',
          height: '100%',
          overflow: 'hidden',
        }}>
          {/* Top Half: Terminal Console (Locked to flex bounds with internal scrollbar) */}
          <div style={{
            flex: '1 1 52%',
            display: 'flex',
            flexDirection: 'column',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            background: '#0b1120',
            minHeight: 0,
            overflow: 'hidden',
          }}>
            <div style={{
              height: '46px',
              padding: '0 12px',
              background: '#0f172a',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '6px',
              flexShrink: 0,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                <TerminalIcon size={16} color="#38bdf8" />
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#e2e8f0' }}>
                  터미널
                </span>
              </div>

              {/* Execution Controls: [0.5x | 1x | 2x | 3x] (when debug) + [🐞 디버깅 | ⚡ 일반] + [▶ 실행 / ■ 정지] */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                {/* Debug Speed Selector (Placed to the left of the toggle switch) */}
                {execMode === 'debug' && (
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    background: 'rgba(255, 255, 255, 0.06)',
                    padding: '2px',
                    borderRadius: '7px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}>
                    {[0.5, 1, 2, 3].map((spd) => (
                      <button
                        key={spd}
                        type="button"
                        onClick={() => {
                          setDebugSpeed(spd);
                          debugSpeedRef.current = spd;
                        }}
                        style={{
                          padding: '3px 6px',
                          borderRadius: '4px',
                          border: 'none',
                          cursor: 'pointer',
                          background: debugSpeed === spd ? 'rgba(251, 146, 60, 0.35)' : 'transparent',
                          color: debugSpeed === spd ? '#fed7aa' : '#64748b',
                          fontWeight: 800,
                          fontSize: '0.66rem',
                          fontFamily: 'var(--font-mono)',
                          transition: 'all 0.15s ease',
                        }}
                        title={`디버깅 실행 속도: ${spd}배속 (기준: 0.6초, 실행 중 즉시 변경 가능)`}
                      >
                        {spd}x
                      </button>
                    ))}
                  </div>
                )}

                {/* Mode Toggle Switch: [🐞 디버깅 | ⚡ 일반] */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: 'rgba(255, 255, 255, 0.06)',
                  padding: '2px',
                  borderRadius: '7px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}>
                  <button
                    type="button"
                    onClick={() => setExecMode('debug')}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '3px 8px',
                      borderRadius: '5px',
                      border: 'none',
                      cursor: 'pointer',
                      background: execMode === 'debug' ? 'rgba(234, 88, 12, 0.25)' : 'transparent',
                      color: execMode === 'debug' ? '#fb923c' : '#94a3b8',
                      fontWeight: execMode === 'debug' ? 800 : 600,
                      fontSize: '0.72rem',
                      transition: 'all 0.15s ease',
                    }}
                    title="디버깅 모드 (단계별 순차 실행 및 메모리 추적)"
                  >
                    <Bug size={11} />
                    <span>디버깅</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setExecMode('normal')}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '3px 8px',
                      borderRadius: '5px',
                      border: 'none',
                      cursor: 'pointer',
                      background: execMode === 'normal' ? 'rgba(56, 189, 248, 0.25)' : 'transparent',
                      color: execMode === 'normal' ? '#38bdf8' : '#94a3b8',
                      fontWeight: execMode === 'normal' ? 800 : 600,
                      fontSize: '0.72rem',
                      transition: 'all 0.15s ease',
                    }}
                    title="일반 실행 모드 (0ms 즉각 실행)"
                  >
                    <Zap size={11} />
                    <span>일반</span>
                  </button>
                </div>

                {/* Manual Run / Stop Button (Fixed 68px width: no size jumping!) */}
                <button
                  type="button"
                  onClick={handleExecuteManual}
                  title={isExecuting || isDebugging ? '실행 정지' : '실행 (단축키: Ctrl+Enter)'}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '5px',
                    width: '68px',
                    minWidth: '68px',
                    maxWidth: '68px',
                    height: '28px',
                    padding: '0',
                    borderRadius: '6px',
                    boxSizing: 'border-box',
                    border: isExecuting || isDebugging
                      ? '1px solid rgba(239, 68, 68, 0.5)'
                      : '1px solid rgba(16, 185, 129, 0.5)',
                    background: isExecuting || isDebugging
                      ? 'rgba(239, 68, 68, 0.25)'
                      : 'linear-gradient(135deg, rgba(16, 185, 129, 0.28) 0%, rgba(5, 150, 105, 0.38) 100%)',
                    color: isExecuting || isDebugging ? '#f87171' : '#34d399',
                    fontSize: '0.74rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    boxShadow: isExecuting || isDebugging
                      ? '0 0 10px rgba(239, 68, 68, 0.35)'
                      : '0 0 10px rgba(16, 185, 129, 0.25)',
                    transition: 'border-color 0.15s ease, background 0.15s ease, color 0.15s ease',
                  }}
                >
                  {isExecuting || isDebugging ? (
                    <>
                      <Square size={11} fill="currentColor" />
                      <span>정지</span>
                    </>
                  ) : (
                    <>
                      <Play size={12} fill="currentColor" />
                      <span>실행</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div style={{
              flex: '1 1 auto',
              padding: '14px 16px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.86rem',
              color: '#f8fafc',
              overflowY: 'auto',
              minHeight: 0,
              background: '#020617',
              lineHeight: 1.6,
            }}>
              <div style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>$</span>
                <span style={{ color: '#e2e8f0' }}>{execMode === 'debug' ? 'python -m pdb main.py' : 'python main.py'}</span>
              </div>

              {terminalOutput && (
                <pre style={{
                  margin: '8px 0 0 0',
                  padding: 0,
                  fontFamily: 'inherit',
                  fontSize: '0.88rem',
                  color: '#f8fafc',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  lineHeight: 1.6,
                }}>
                  {terminalOutput}
                </pre>
              )}
              <div ref={terminalEndRef} />
            </div>
          </div>

          {/* Bottom Half: DYNAMIC COMPACT PRE-PLACED RAM STORAGE BOXES */}
          <div style={{
            flex: '1 1 48%',
            display: 'flex',
            flexDirection: 'column',
            background: '#0a0f1d',
            minHeight: 0,
            overflow: 'hidden',
          }}>
            <div style={{
              height: '46px',
              padding: '0 16px',
              background: '#0f172a',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '8px',
              flexShrink: 0,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Box size={16} color="#a855f7" />
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#e2e8f0' }}>
                  메모리 시각화
                </span>
              </div>
              <span style={{ fontSize: '0.68rem', color: '#a855f7', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                {ramRows}행 × 5열 ({ramRows * 5} SLOTS)
              </span>
            </div>

            <div
              ref={ramBodyRef}
              style={{
                flex: '1 1 auto',
                padding: '10px 14px',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                minHeight: 0,
              }}
            >
              {/* Dynamic Compact Pre-placed RAM Storage Boxes with Fixed Cell Width */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
                gap: '6px 6px',
                width: '100%',
              }}>
                {memoryBoxes.map((box) => {
                  const tooltipText = box.active ? (box.fullValue || box.value) : undefined;
                  const isHighlighted = isDebugging && highlightedMemoryKeys.has(box.name);

                  // 1. Highlighted during debug (newly created or modified): vibrant purple!
                  // 2. Normal Active: crisp white border!
                  // 3. Inactive: subtle dashed gray
                  let boxBorder = '1px dashed rgba(255, 255, 255, 0.08)';
                  let boxBg = 'rgba(255, 255, 255, 0.02)';
                  let boxGlow = 'none';
                  let typeColor = '#94a3b8';

                  if (isHighlighted) {
                    boxBorder = '1.5px solid #a855f7';
                    boxBg = 'rgba(168, 85, 247, 0.22)';
                    boxGlow = '0 0 10px rgba(168, 85, 247, 0.6)';
                    typeColor = '#c084fc';
                  } else if (box.active) {
                    boxBorder = '1.5px solid rgba(255, 255, 255, 0.85)';
                    boxBg = 'rgba(255, 255, 255, 0.06)';
                    boxGlow = '0 0 6px rgba(255, 255, 255, 0.15)';
                    typeColor = '#cbd5e1';
                  }

                  return (
                    <div
                      key={box.id}
                      title={tooltipText}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '2px',
                        minWidth: 0,
                        width: '100%',
                        overflow: 'hidden',
                        cursor: box.active ? 'pointer' : 'default',
                      }}
                    >
                      {/* Fixed Size Hardware Box */}
                      <div
                        title={tooltipText}
                        style={{
                          width: '100%',
                          height: '34px',
                          borderRadius: '6px',
                          background: boxBg,
                          border: boxBorder,
                          boxShadow: boxGlow,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '2px 4px',
                          position: 'relative',
                          minWidth: 0,
                          overflow: 'hidden',
                          boxSizing: 'border-box',
                          transition: 'all 0.25s ease',
                        }}
                      >
                        {box.active && (
                          <span style={{
                            position: 'absolute',
                            top: '1px',
                            left: '3px',
                            fontSize: '0.50rem',
                            color: typeColor,
                            fontFamily: 'var(--font-mono)',
                            lineHeight: 1,
                            pointerEvents: 'none',
                            fontWeight: isHighlighted ? 800 : 600,
                          }}>
                            {box.type}
                          </span>
                        )}

                        <span
                          title={tooltipText}
                          style={{
                            fontSize: '0.74rem',
                            fontWeight: 800,
                            color: box.active ? '#ffffff' : '#475569',
                            fontFamily: 'var(--font-mono)',
                            textAlign: 'center',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            width: '100%',
                            maxWidth: '100%',
                            display: 'block',
                          }}
                        >
                          {box.value.length > 7 ? box.value.slice(0, 6) + '…' : box.value}
                        </span>
                      </div>

                      {/* Small Identifier / Variable Name */}
                      <span
                        title={box.active && box.fullValue ? `${box.name}: ${box.fullValue}` : box.name}
                        style={{
                          fontSize: '0.56rem',
                          fontWeight: 700,
                          color: isHighlighted ? '#c084fc' : box.active ? '#e2e8f0' : '#475569',
                          textAlign: 'center',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          width: '100%',
                          maxWidth: '100%',
                          display: 'block',
                          transition: 'color 0.2s ease',
                        }}
                      >
                        {box.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            COLUMN 2 (MIDDLE 248px): Scratch-style Continuous Block Toolbox
            ================================================================== */}
        <section
          id="toolbox-section"
          onDragOver={(e) => {
            if (mode === 'typing') return;
            e.preventDefault();
            e.stopPropagation();
            e.dataTransfer.dropEffect = 'move';
            if (!isToolboxHovered) setIsToolboxHovered(true);
          }}
          onDragLeave={(e) => {
            if (mode === 'typing') return;
            e.preventDefault();
            e.stopPropagation();
            if (!e.currentTarget.contains(e.relatedTarget as Node)) {
              setIsToolboxHovered(false);
            }
          }}
          onDrop={(e) => {
            if (mode === 'typing') return;
            e.preventDefault();
            e.stopPropagation();
            setIsToolboxHovered(false);
            setIsDraggingBlock(false);

            let info = draggingInfoRef.current;
            if (!info) {
              try {
                const raw = e.dataTransfer.getData('text/plain');
                if (raw) info = JSON.parse(raw);
              } catch { }
            }

            if (info?.source === 'canvas' && info.id) {
              handleDeleteBlock(info.id);
              showToast('🗑️ 블록이 블록 모음함으로 드래그되어 제거되었습니다.');
            } else if (info?.source === 'inner' && info.parentBlockId) {
              if (info.branchId) {
                handleRemoveInnerBlockFromBranch(info.parentBlockId, info.branchId, info.childIdx!);
              } else {
                handleRemoveInnerBlockFromLoop(info.parentBlockId, info.childIdx!);
              }
              showToast('🗑️ 블록이 블록 모음함으로 드래그되어 제거되었습니다.');
            }
            draggingInfoRef.current = null;
            setDraggedBlockType(null);
          }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            background: '#0d1527',
            borderRight: isToolboxHovered && isDraggingBlock
              ? '2px dashed #ef4444'
              : '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: isToolboxHovered && isDraggingBlock
              ? 'inset 0 0 24px rgba(239, 68, 68, 0.25)'
              : 'none',
            height: '100%',
            overflow: 'hidden',
            position: 'relative',
            zIndex: 10,
            transition: 'all 0.2s ease',
            filter: mode === 'typing' ? 'grayscale(0.7) opacity(0.65)' : 'none',
            pointerEvents: 'auto',
            userSelect: mode === 'typing' ? 'none' : 'auto',
          }}
        >
          {/* Drag to delete overlay banner */}
          {isToolboxHovered && isDraggingBlock && (
              <div style={{
                position: 'absolute',
                top: '48px',
                left: '8px',
                right: '8px',
                zIndex: 50,
                padding: '7px 10px',
                borderRadius: '8px',
                background: 'rgba(239, 68, 68, 0.95)',
                color: '#ffffff',
                fontSize: '0.74rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                boxShadow: '0 4px 12px rgba(239, 68, 68, 0.4)',
                pointerEvents: 'none',
              }}>
                <Trash2 size={13} />
                <span>여기에 놓으면 블록 삭제</span>
              </div>
            )}

            {/* Scratch-style Vertical Continuous Scrollable Palette */}
            <div style={{
              flex: '1 1 auto',
              padding: '12px 10px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}>
              {/* 1. 함수 카테고리 (파랑 계열) */}
              <div id="cat-sec-function" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#60a5fa', fontSize: '0.76rem', fontWeight: 800 }}>
                  <TerminalIcon size={14} color="#3b82f6" />
                  <span>함수</span>
                </div>

                {/* print() 블록 */}
                <div
                  draggable
                  onDragStart={(e) => handleDragStartFromToolbox(e, 'print')}
                  style={{
                    display: 'inline-flex',
                    width: 'fit-content',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '5px 10px',
                    borderRadius: '6px',
                    background: BLOCK_THEMES.print.bg,
                    boxShadow: `0 2px 0 ${BLOCK_THEMES.print.shadow}, 0 4px 10px rgba(0, 0, 0, 0.35)`,
                    border: `1px solid ${BLOCK_THEMES.print.border}`,
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.80rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'grab',
                    userSelect: 'none',
                    position: 'relative',
                  }}
                  title="print() 출력 함수 블록 (캔버스로 드래그하여 배치)"
                >
                  <PuzzleNotch borderColor={BLOCK_THEMES.print.border} />
                  <PuzzleTab borderColor={BLOCK_THEMES.print.border} bg={BLOCK_THEMES.print.bg} />
                  <span>print(</span>
                  <span style={{ width: '26px', height: '20px', borderRadius: '4px', background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.3)', display: 'inline-block' }} />
                  <span>)</span>
                </div>

                {/* input() 블록 (문자열 반환 -> 메서드 결합 가능) */}
                <div
                  draggable
                  onDragStart={(e) => handleDragStartFromToolbox(e, 'input')}
                  style={{
                    display: 'inline-flex',
                    width: 'fit-content',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '5px 10px',
                    borderRadius: '6px',
                    background: BLOCK_THEMES.input.bg,
                    boxShadow: `0 2px 0 ${BLOCK_THEMES.input.shadow}, 0 4px 10px rgba(0, 0, 0, 0.35)`,
                    border: `1px solid ${BLOCK_THEMES.input.border}`,
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.80rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'grab',
                    userSelect: 'none',
                    position: 'relative',
                  }}
                  title="input() 입력 함수 블록 (우측 홈에 문자열 메서드 결합 가능)"
                >
                  <PuzzleNotch borderColor={BLOCK_THEMES.input.border} />
                  <PuzzleTab borderColor={BLOCK_THEMES.input.border} bg={BLOCK_THEMES.input.bg} />
                  <HorizontalPuzzleNotch borderColor={BLOCK_THEMES.input.border} bgColor="#0d1527" />
                  <span>input(</span>
                  <span style={{ width: '26px', height: '20px', borderRadius: '4px', background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.3)', display: 'inline-block' }} />
                  <span>)</span>
                </div>

                {/* range() 개별 함수 블록 */}
                <div
                  draggable
                  onDragStart={(e) => handleDragStartFromToolbox(e, 'range')}
                  style={{
                    display: 'inline-flex',
                    width: 'fit-content',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '5px 10px',
                    borderRadius: '6px',
                    background: BLOCK_THEMES.range.bg,
                    boxShadow: `0 2px 0 ${BLOCK_THEMES.range.shadow}, 0 4px 10px rgba(0, 0, 0, 0.35)`,
                    border: `1px solid ${BLOCK_THEMES.range.border}`,
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.80rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'grab',
                    userSelect: 'none',
                    position: 'relative',
                  }}
                  title="range() 수열 생성 함수 블록 (range(5), range(1, 10))"
                >
                  <PuzzleNotch borderColor={BLOCK_THEMES.range.border} />
                  <PuzzleTab borderColor={BLOCK_THEMES.range.border} bg={BLOCK_THEMES.range.bg} />
                  <span>range(</span>
                  <span style={{ width: '26px', height: '20px', borderRadius: '4px', background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.3)', display: 'inline-block' }} />
                  <span>)</span>
                </div>

                {/* map() 고차 함수 블록 */}
                <div
                  draggable
                  onDragStart={(e) => handleDragStartFromToolbox(e, 'map')}
                  style={{
                    display: 'inline-flex',
                    width: 'fit-content',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '5px 10px',
                    borderRadius: '6px',
                    background: BLOCK_THEMES.map.bg,
                    boxShadow: `0 2px 0 ${BLOCK_THEMES.map.shadow}, 0 4px 10px rgba(0, 0, 0, 0.35)`,
                    border: `1px solid ${BLOCK_THEMES.map.border}`,
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.80rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'grab',
                    userSelect: 'none',
                    position: 'relative',
                  }}
                  title="map() 함수 블록 (map(int, input().split()) 등)"
                >
                  <PuzzleNotch borderColor={BLOCK_THEMES.map.border} />
                  <PuzzleTab borderColor={BLOCK_THEMES.map.border} bg={BLOCK_THEMES.map.bg} />
                  <span>map(</span>
                  <span style={{ width: '26px', height: '20px', borderRadius: '4px', background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.3)', display: 'inline-block' }} />
                  <span>)</span>
                </div>

                {/* sorted() 정렬 함수 블록 (정렬 리스트 반환 -> 리스트 메서드 결합 가능) */}
                <div
                  draggable
                  onDragStart={(e) => handleDragStartFromToolbox(e, 'sorted')}
                  style={{
                    display: 'inline-flex',
                    width: 'fit-content',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '5px 10px',
                    borderRadius: '6px',
                    background: BLOCK_THEMES.sorted.bg,
                    boxShadow: `0 2px 0 ${BLOCK_THEMES.sorted.shadow}, 0 4px 10px rgba(0, 0, 0, 0.35)`,
                    border: `1px solid ${BLOCK_THEMES.sorted.border}`,
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.80rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'grab',
                    userSelect: 'none',
                    position: 'relative',
                  }}
                  title="sorted() 정렬 함수 블록 (정렬된 리스트 반환, 리스트 메서드 결합 가능)"
                >
                  <PuzzleNotch borderColor={BLOCK_THEMES.sorted.border} />
                  <PuzzleTab borderColor={BLOCK_THEMES.sorted.border} bg={BLOCK_THEMES.sorted.bg} />
                  <HorizontalPuzzleNotch borderColor={BLOCK_THEMES.sorted.border} bgColor="#0d1527" />
                  <span>sorted(</span>
                  <span style={{ width: '26px', height: '20px', borderRadius: '4px', background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.3)', display: 'inline-block' }} />
                  <span>)</span>
                </div>

                {/* [type ▾] () 자료형/형변환 통합 블록 (기본값: type) */}
                <div
                  draggable
                  onDragStart={(e) => handleDragStartFromToolbox(e, 'type')}
                  style={{
                    display: 'inline-flex',
                    width: 'fit-content',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '5px 10px',
                    borderRadius: '6px',
                    background: BLOCK_THEMES.type.bg,
                    boxShadow: `0 2px 0 ${BLOCK_THEMES.type.shadow}, 0 4px 10px rgba(0, 0, 0, 0.35)`,
                    border: `1px solid ${BLOCK_THEMES.type.border}`,
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.80rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'grab',
                    userSelect: 'none',
                    position: 'relative',
                  }}
                  title="자료형/형변환 함수 블록 (기본값: type, 드롭다운에서 type, int, float, str, bool 선택 가능)"
                >
                  <PuzzleNotch borderColor={BLOCK_THEMES.type.border} />
                  <PuzzleTab borderColor={BLOCK_THEMES.type.border} bg={BLOCK_THEMES.type.bg} />
                  <span style={{ padding: '1px 6px', borderRadius: '4px', background: '#ffffff', color: '#0f172a', fontWeight: 800, fontSize: '0.78rem' }}>type ▼</span>
                  <span>(</span>
                  <span style={{ width: '26px', height: '20px', borderRadius: '4px', background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.3)', display: 'inline-block' }} />
                  <span>)</span>
                </div>

                {/* [math ▾] () 수학·집계 통합 블록 (기본값: math) */}
                <div
                  draggable
                  onDragStart={(e) => handleDragStartFromToolbox(e, 'math')}
                  style={{
                    display: 'inline-flex',
                    width: 'fit-content',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '5px 10px',
                    borderRadius: '6px',
                    background: BLOCK_THEMES.math.bg,
                    boxShadow: `0 2px 0 ${BLOCK_THEMES.math.shadow}, 0 4px 10px rgba(0, 0, 0, 0.35)`,
                    border: `1px solid ${BLOCK_THEMES.math.border}`,
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.80rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'grab',
                    userSelect: 'none',
                    position: 'relative',
                  }}
                  title="수학/집계 함수 블록 (기본값: math, 드롭다운에서 len, round, abs, sum, min, max 선택 가능)"
                >
                  <PuzzleNotch borderColor={BLOCK_THEMES.math.border} />
                  <PuzzleTab borderColor={BLOCK_THEMES.math.border} bg={BLOCK_THEMES.math.bg} />
                  <span style={{ padding: '1px 6px', borderRadius: '4px', background: '#ffffff', color: '#0f172a', fontWeight: 800, fontSize: '0.78rem' }}>math ▼</span>
                  <span>(</span>
                  <span style={{ width: '26px', height: '20px', borderRadius: '4px', background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.3)', display: 'inline-block' }} />
                  <span>)</span>
                </div>

                {/* [iter ▾] () 반복자/순회 통합 블록 (기본값: iter) */}
                <div
                  draggable
                  onDragStart={(e) => handleDragStartFromToolbox(e, 'iter')}
                  style={{
                    display: 'inline-flex',
                    width: 'fit-content',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '5px 10px',
                    borderRadius: '6px',
                    background: BLOCK_THEMES.iter.bg,
                    boxShadow: `0 2px 0 ${BLOCK_THEMES.iter.shadow}, 0 4px 10px rgba(0, 0, 0, 0.35)`,
                    border: `1px solid ${BLOCK_THEMES.iter.border}`,
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.80rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'grab',
                    userSelect: 'none',
                    position: 'relative',
                  }}
                  title="반복/순회 유틸리티 블록 (기본값: iter, 드롭다운에서 iter, enumerate, zip, all, any, reversed 선택 가능)"
                >
                  <PuzzleNotch borderColor={BLOCK_THEMES.iter.border} />
                  <PuzzleTab borderColor={BLOCK_THEMES.iter.border} bg={BLOCK_THEMES.iter.bg} />
                  <span style={{ padding: '1px 6px', borderRadius: '4px', background: '#ffffff', color: '#0f172a', fontWeight: 800, fontSize: '0.78rem' }}>iter ▼</span>
                  <span>(</span>
                  <span style={{ width: '26px', height: '20px', borderRadius: '4px', background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.3)', display: 'inline-block' }} />
                  <span>)</span>
                </div>

                {/* .method() 메서드 결합 블록 */}
                <div
                  draggable
                  onDragStart={(e) => handleDragStartFromToolbox(e, 'method')}
                  style={{
                    display: 'inline-flex',
                    width: 'fit-content',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '5px 10px',
                    borderRadius: '6px',
                    background: BLOCK_THEMES.method.bg,
                    boxShadow: `0 2px 0 ${BLOCK_THEMES.method.shadow}, 0 4px 10px rgba(0, 0, 0, 0.35)`,
                    border: `1px solid ${BLOCK_THEMES.method.border}`,
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.80rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'grab',
                    userSelect: 'none',
                    position: 'relative',
                  }}
                  title=".method() 메서드 결합 블록 (좌측 돌출부를 함수/변수 블록 우측 홈에 결합)"
                >
                  <HorizontalPuzzleTab borderColor={BLOCK_THEMES.method.border} bg={BLOCK_THEMES.method.bg} />
                  <HorizontalPuzzleNotch borderColor={BLOCK_THEMES.method.border} bgColor="#0d1527" />
                  <span style={{ fontSize: '0.92rem', fontWeight: 900 }}>.</span>
                  <span style={{ padding: '1px 6px', borderRadius: '4px', background: '#ffffff', color: '#0f172a', fontWeight: 800, fontSize: '0.78rem' }}>method ▼</span>
                  <span>(</span>
                  <span style={{ width: '26px', height: '20px', borderRadius: '4px', background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.3)', display: 'inline-block' }} />
                  <span>)</span>
                </div>

                {/* open() 파일 열기 함수 블록 */}
                <div
                  draggable
                  onDragStart={(e) => handleDragStartFromToolbox(e, 'open')}
                  style={{
                    display: 'inline-flex',
                    width: 'fit-content',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '5px 10px',
                    borderRadius: '6px',
                    background: BLOCK_THEMES.open.bg,
                    boxShadow: `0 2px 0 ${BLOCK_THEMES.open.shadow}, 0 4px 10px rgba(0, 0, 0, 0.35)`,
                    border: `1px solid ${BLOCK_THEMES.open.border}`,
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.80rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'grab',
                    userSelect: 'none',
                    position: 'relative',
                  }}
                  title="open() 파일 열기 함수 블록 (우측 홈에 파일 메서드 결합 가능)"
                >
                  <PuzzleNotch borderColor={BLOCK_THEMES.open.border} />
                  <PuzzleTab borderColor={BLOCK_THEMES.open.border} bg={BLOCK_THEMES.open.bg} />
                  <HorizontalPuzzleNotch borderColor={BLOCK_THEMES.open.border} bgColor="#0d1527" />
                  <span>open(</span>
                  <span style={{ width: '26px', height: '20px', borderRadius: '4px', background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.3)', display: 'inline-block' }} />
                  <span>)</span>
                </div>

                {/* def 함수정의 ㄷ자 블록 */}
                <div
                  draggable
                  onDragStart={(e) => handleDragStartFromToolbox(e, 'def')}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 'fit-content',
                    minWidth: '120px',
                    cursor: 'grab',
                    userSelect: 'none',
                    fontFamily: 'var(--font-mono)',
                    filter: 'drop-shadow(0 4px 10px rgba(0, 0, 0, 0.35))',
                  }}
                  title="def 함수 정의 ㄷ자 블록"
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '5px 10px',
                      borderRadius: '6px 6px 6px 0',
                      background: BLOCK_THEMES.def.bg,
                      border: `1px solid ${BLOCK_THEMES.def.border}`,
                      borderBottom: 'none',
                      color: '#ffffff',
                      fontWeight: 800,
                      fontSize: '0.80rem',
                      position: 'relative',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <PuzzleNotch borderColor={BLOCK_THEMES.def.border} />
                    <div
                      style={{
                        position: 'absolute',
                        left: '18px',
                        right: '5px',
                        bottom: 0,
                        height: '1px',
                        background: BLOCK_THEMES.def.border,
                        pointerEvents: 'none',
                      }}
                    />
                    <span style={{ color: '#ffffff' }}>def</span>
                    <span style={{ padding: '1px 6px', borderRadius: '4px', background: '#ffffff', color: '#0f172a', fontWeight: 800, fontSize: '0.78rem' }}>my_func</span>
                    <span>(</span>
                    <span style={{ width: '26px', height: '20px', borderRadius: '4px', background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.3)', display: 'inline-block' }} />
                    <span>):</span>
                  </div>
                  <div style={{ display: 'flex', minHeight: '22px', marginTop: '-1px' }}>
                    <div style={{ width: '18px', background: BLOCK_THEMES.def.bg, borderLeft: `1px solid ${BLOCK_THEMES.def.border}`, borderRight: `1px solid ${BLOCK_THEMES.def.border}`, flexShrink: 0 }} />
                    <div style={{ flex: 1, minWidth: '70px', background: 'transparent', borderTop: 'none', position: 'relative' }}>
                      <PuzzleTab isCeiling left="12px" borderColor={BLOCK_THEMES.def.border} bg={BLOCK_THEMES.def.bg} />
                    </div>
                  </div>
                  <SvgBottomClosingArm theme={BLOCK_THEMES.def} />
                </div>
              </div>

              {/* 2. 제어 카테고리 (조건문 및 반복문) */}
              <div id="cat-sec-control" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#fbbf24', fontSize: '0.76rem', fontWeight: 800 }}>
                  <Code size={14} color="#f59e0b" />
                  <span>제어</span>
                </div>

                {/* if [조건]: ㄷ자 블록 */}
                <div
                  draggable
                  onDragStart={(e) => handleDragStartFromToolbox(e, 'if')}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 'fit-content',
                    minWidth: '120px',
                    cursor: 'grab',
                    userSelect: 'none',
                    fontFamily: 'var(--font-mono)',
                    filter: 'drop-shadow(0 4px 10px rgba(0, 0, 0, 0.35))',
                  }}
                  title="if 조건문 (ㄷ자 형태 블록: +elif, +else로 E자 확장 가능)"
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      whiteSpace: 'nowrap',
                      gap: '4px',
                      padding: '5px 10px',
                      borderRadius: '6px 6px 6px 0',
                      background: BLOCK_THEMES.if.bg,
                      border: `1px solid ${BLOCK_THEMES.if.border}`,
                      borderBottom: 'none',
                      color: '#ffffff',
                      fontWeight: 800,
                      fontSize: '0.80rem',
                      position: 'relative',
                    }}
                  >
                    <PuzzleNotch borderColor={BLOCK_THEMES.if.border} />
                    <div
                      style={{
                        position: 'absolute',
                        left: '18px',
                        right: '5px',
                        bottom: 0,
                        height: '1px',
                        background: BLOCK_THEMES.if.border,
                        pointerEvents: 'none',
                      }}
                    />
                    <span style={{ color: '#ffffff' }}>if</span>
                    <span style={{ padding: '1px 6px', borderRadius: '4px', background: '#ffffff', color: '#0f172a', fontWeight: 800, fontSize: '0.78rem' }}>False</span>
                    <span>:</span>
                  </div>
                  <div style={{ display: 'flex', minHeight: '22px', marginTop: '-1px' }}>
                    <div style={{ width: '18px', background: BLOCK_THEMES.if.bg, borderLeft: `1px solid ${BLOCK_THEMES.if.border}`, borderRight: `1px solid ${BLOCK_THEMES.if.border}`, flexShrink: 0 }} />
                    <div style={{ flex: 1, minWidth: '70px', background: 'transparent', borderTop: 'none', position: 'relative' }}>
                      <PuzzleTab isCeiling left="12px" borderColor={BLOCK_THEMES.if.border} bg={BLOCK_THEMES.if.bg} />
                    </div>
                  </div>
                  <SvgBottomClosingArm theme={BLOCK_THEMES.if} />
                </div>

                {/* for i in range() ㄷ자 블록 */}
                <div
                  draggable
                  onDragStart={(e) => handleDragStartFromToolbox(e, 'for_range')}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 'fit-content',
                    minWidth: '120px',
                    cursor: 'grab',
                    userSelect: 'none',
                    fontFamily: 'var(--font-mono)',
                    filter: 'drop-shadow(0 4px 10px rgba(0, 0, 0, 0.35))',
                  }}
                  title="for i in range() 횟수 반복 ㄷ자 블록"
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      whiteSpace: 'nowrap',
                      gap: '4px',
                      padding: '4px 10px',
                      borderRadius: '6px 6px 6px 0',
                      background: BLOCK_THEMES.for_range.bg,
                      border: `1px solid ${BLOCK_THEMES.for_range.border}`,
                      borderBottom: 'none',
                      color: '#ffffff',
                      fontWeight: 800,
                      fontSize: '0.80rem',
                      position: 'relative',
                    }}
                  >
                    <PuzzleNotch borderColor={BLOCK_THEMES.for_range.border} />
                    <div
                      style={{
                        position: 'absolute',
                        left: '18px',
                        right: '5px',
                        bottom: 0,
                        height: '1px',
                        background: BLOCK_THEMES.for_range.border,
                        pointerEvents: 'none',
                      }}
                    />
                    <span style={{ color: '#ffffff' }}>for</span>
                    <span style={{ padding: '1px 6px', borderRadius: '4px', background: '#ffffff', color: '#0f172a', fontWeight: 800, fontSize: '0.78rem' }}>i</span>
                    <span style={{ color: '#ffffff' }}>in</span>
                    <div
                      className="arg-slot-filled"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        margin: '0 2px',
                        padding: '1px 2px',
                        borderRadius: '7px',
                        background: 'rgba(0, 0, 0, 0.22)',
                        boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.35)',
                      }}
                    >
                      <div
                        className="slot-arg-block"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          height: '24px',
                          padding: '0 8px',
                          borderRadius: '6px',
                          background: '#2563eb',
                          border: '1px solid #3b82f6',
                          boxShadow: '0 1.5px 3px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                          color: '#ffffff',
                          fontWeight: 800,
                          fontSize: '0.76rem',
                          fontFamily: 'var(--font-mono)',
                          boxSizing: 'border-box',
                        }}
                      >
                        <span>range(</span>
                        <span style={{ padding: '1px 6px', borderRadius: '4px', background: '#ffffff', color: '#0f172a', fontWeight: 800, fontSize: '0.76rem', boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.12)' }}>5</span>
                        <span>)</span>
                      </div>
                    </div>
                    <span>:</span>
                  </div>
                  <div style={{ display: 'flex', minHeight: '22px', marginTop: '-1px' }}>
                    <div style={{ width: '18px', background: BLOCK_THEMES.for_range.bg, borderLeft: `1px solid ${BLOCK_THEMES.for_range.border}`, borderRight: `1px solid ${BLOCK_THEMES.for_range.border}`, flexShrink: 0 }} />
                    <div style={{ flex: 1, minWidth: '70px', background: 'transparent', borderTop: 'none', position: 'relative' }}>
                      <PuzzleTab isCeiling left="12px" borderColor={BLOCK_THEMES.for_range.border} bg={BLOCK_THEMES.for_range.bg} />
                    </div>
                  </div>
                  <SvgBottomClosingArm theme={BLOCK_THEMES.for_range} />
                </div>

                {/* for item in items: ㄷ자 블록 */}
                <div
                  draggable
                  onDragStart={(e) => handleDragStartFromToolbox(e, 'for_in')}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 'fit-content',
                    minWidth: '120px',
                    cursor: 'grab',
                    userSelect: 'none',
                    fontFamily: 'var(--font-mono)',
                    filter: 'drop-shadow(0 4px 10px rgba(0, 0, 0, 0.35))',
                  }}
                  title="for item in items 순회 반복 ㄷ자 블록"
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      whiteSpace: 'nowrap',
                      gap: '4px',
                      padding: '5px 10px',
                      borderRadius: '6px 6px 6px 0',
                      background: BLOCK_THEMES.for_in.bg,
                      border: `1px solid ${BLOCK_THEMES.for_in.border}`,
                      borderBottom: 'none',
                      color: '#ffffff',
                      fontWeight: 800,
                      fontSize: '0.80rem',
                      position: 'relative',
                    }}
                  >
                    <PuzzleNotch borderColor={BLOCK_THEMES.for_in.border} />
                    <div
                      style={{
                        position: 'absolute',
                        left: '18px',
                        right: '5px',
                        bottom: 0,
                        height: '1px',
                        background: BLOCK_THEMES.for_in.border,
                        pointerEvents: 'none',
                      }}
                    />
                    <span style={{ color: '#ffffff' }}>for</span>
                    <span style={{ padding: '1px 6px', borderRadius: '4px', background: '#ffffff', color: '#0f172a', fontWeight: 800, fontSize: '0.78rem' }}>item</span>
                    <span style={{ color: '#ffffff' }}>in</span>
                    <span style={{ padding: '1px 6px', borderRadius: '4px', background: '#ffffff', color: '#0f172a', fontWeight: 800, fontSize: '0.78rem' }}>items</span>
                    <span>:</span>
                  </div>
                  <div style={{ display: 'flex', minHeight: '22px', marginTop: '-1px' }}>
                    <div style={{ width: '18px', background: BLOCK_THEMES.for_in.bg, borderLeft: `1px solid ${BLOCK_THEMES.for_in.border}`, borderRight: `1px solid ${BLOCK_THEMES.for_in.border}`, flexShrink: 0 }} />
                    <div style={{ flex: 1, minWidth: '70px', background: 'transparent', borderTop: 'none', position: 'relative' }}>
                      <PuzzleTab isCeiling left="12px" borderColor={BLOCK_THEMES.for_in.border} bg={BLOCK_THEMES.for_in.bg} />
                    </div>
                  </div>
                  <SvgBottomClosingArm theme={BLOCK_THEMES.for_in} />
                </div>

                {/* while 조건: ㄷ자 블록 */}
                <div
                  draggable
                  onDragStart={(e) => handleDragStartFromToolbox(e, 'while')}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 'fit-content',
                    minWidth: '120px',
                    cursor: 'grab',
                    userSelect: 'none',
                    fontFamily: 'var(--font-mono)',
                    filter: 'drop-shadow(0 4px 10px rgba(0, 0, 0, 0.35))',
                  }}
                  title="while 조건 반복 ㄷ자 블록"
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      whiteSpace: 'nowrap',
                      gap: '4px',
                      padding: '5px 10px',
                      borderRadius: '6px 6px 6px 0',
                      background: BLOCK_THEMES.while.bg,
                      border: `1px solid ${BLOCK_THEMES.while.border}`,
                      borderBottom: 'none',
                      color: '#ffffff',
                      fontWeight: 800,
                      fontSize: '0.80rem',
                      position: 'relative',
                    }}
                  >
                    <PuzzleNotch borderColor={BLOCK_THEMES.while.border} />
                    <div
                      style={{
                        position: 'absolute',
                        left: '18px',
                        right: '5px',
                        bottom: 0,
                        height: '1px',
                        background: BLOCK_THEMES.while.border,
                        pointerEvents: 'none',
                      }}
                    />
                    <span style={{ color: '#ffffff' }}>while</span>
                    <span style={{ padding: '1px 8px', borderRadius: '4px', background: '#ffffff', color: '#0f172a', fontWeight: 800, fontSize: '0.78rem' }}>False</span>
                    <span>:</span>
                  </div>
                  <div style={{ display: 'flex', minHeight: '22px', marginTop: '-1px' }}>
                    <div style={{ width: '18px', background: BLOCK_THEMES.while.bg, borderLeft: `1px solid ${BLOCK_THEMES.while.border}`, borderRight: `1px solid ${BLOCK_THEMES.while.border}`, flexShrink: 0 }} />
                    <div style={{ flex: 1, minWidth: '70px', background: 'transparent', borderTop: 'none', position: 'relative' }}>
                      <PuzzleTab isCeiling left="12px" borderColor={BLOCK_THEMES.while.border} bg={BLOCK_THEMES.while.bg} />
                    </div>
                  </div>
                  <SvgBottomClosingArm theme={BLOCK_THEMES.while} />
                </div>

                {/* break 블록 */}
                <div
                  draggable
                  onDragStart={(e) => handleDragStartFromToolbox(e, 'break')}
                  style={{
                    display: 'inline-flex',
                    width: 'fit-content',
                    alignItems: 'center',
                    whiteSpace: 'nowrap',
                    gap: '4px',
                    padding: '5px 10px',
                    borderRadius: '6px',
                    background: BLOCK_THEMES.break.bg,
                    boxShadow: `0 2px 0 ${BLOCK_THEMES.break.shadow}, 0 4px 10px rgba(0, 0, 0, 0.35)`,
                    border: `1px solid ${BLOCK_THEMES.break.border}`,
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.80rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'grab',
                    userSelect: 'none',
                    position: 'relative',
                  }}
                  title="break 반복문 탈출 블록"
                >
                  <PuzzleNotch borderColor={BLOCK_THEMES.break.border} />
                  <PuzzleTab borderColor={BLOCK_THEMES.break.border} bg={BLOCK_THEMES.break.bg} />
                  <span>break</span>
                </div>

                {/* continue 블록 */}
                <div
                  draggable
                  onDragStart={(e) => handleDragStartFromToolbox(e, 'continue')}
                  style={{
                    display: 'inline-flex',
                    width: 'fit-content',
                    alignItems: 'center',
                    whiteSpace: 'nowrap',
                    gap: '4px',
                    padding: '5px 10px',
                    borderRadius: '6px',
                    background: BLOCK_THEMES.continue.bg,
                    boxShadow: `0 2px 0 ${BLOCK_THEMES.continue.shadow}, 0 4px 10px rgba(0, 0, 0, 0.35)`,
                    border: `1px solid ${BLOCK_THEMES.continue.border}`,
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.80rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'grab',
                    userSelect: 'none',
                    position: 'relative',
                  }}
                  title="continue 다음 반복 진행 블록"
                >
                  <PuzzleNotch borderColor={BLOCK_THEMES.continue.border} />
                  <PuzzleTab borderColor={BLOCK_THEMES.continue.border} bg={BLOCK_THEMES.continue.bg} />
                  <span>continue</span>
                </div>
              </div>

              {/* 4. 변수 카테고리 (주황 계열) */}
              <div id="cat-sec-variable" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#fb923c', fontSize: '0.76rem', fontWeight: 800 }}>
                    <Box size={14} color="#ea580c" />
                    <span>변수</span>
                  </div>
                </div>

                {/* Prominent "+ 변수 생성" Button */}
                <button
                  onClick={() => {
                    setIsVarModalOpen(true);
                    setVarModalStep(1);
                    setSelectedVarKind('variable');
                    setVarInputName('');
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    width: '100%',
                    padding: '6px 10px',
                    borderRadius: '6px',
                    background: 'linear-gradient(135deg, rgba(234, 88, 12, 0.25) 0%, rgba(249, 115, 22, 0.15) 100%)',
                    border: '1px solid rgba(249, 115, 22, 0.45)',
                    color: '#fb923c',
                    fontSize: '0.76rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 8px rgba(234, 88, 12, 0.15)',
                  }}
                >
                  <Plus size={14} color="#fb923c" />
                  <span>변수 생성</span>
                </button>

                {/* List of Created Custom Variables in Toolbox */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '2px' }}>
                  {customVariables.map((cv) => {
                    const theme = BLOCK_THEMES[cv.kind];
                    return (
                      <div
                        key={cv.id}
                        draggable
                        onDragStart={(e) => handleDragStartFromToolbox(e, cv.kind, { varName: cv.name })}
                        style={{
                          display: 'inline-flex',
                          width: 'fit-content',
                          alignItems: 'center',
                          gap: '4px',
                          padding: '5px 10px',
                          borderRadius: '6px',
                          background: theme.bg,
                          boxShadow: `0 2px 0 ${theme.shadow}, 0 4px 10px rgba(0, 0, 0, 0.35)`,
                          border: `1px solid ${theme.border}`,
                          color: '#ffffff',
                          fontWeight: 800,
                          fontSize: '0.80rem',
                          fontFamily: 'var(--font-mono)',
                          cursor: 'grab',
                          userSelect: 'none',
                          position: 'relative',
                        }}
                        title={`${cv.name} (${getKindLabel(cv.kind)}) 블록 (드래그하거나 클릭하여 추가)`}
                      >
                        {/* Top Notch & Bottom Tab */}
                        <PuzzleNotch borderColor={theme.border} />
                        <PuzzleTab borderColor={theme.border} bg={theme.bg} />
                        <HorizontalPuzzleNotch borderColor={theme.border} bgColor="#0d1527" />

                        <span style={{ padding: '1px 6px', borderRadius: '3px', background: '#ffffff', color: '#0f172a', fontWeight: 800, fontSize: '0.78rem' }}>
                          {cv.name}
                        </span>
                        <span>=</span>
                        {cv.kind === 'variable' && (
                          <span style={{ width: '26px', height: '20px', borderRadius: '3px', background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.3)', display: 'inline-block' }} />
                        )}
                        {cv.kind === 'list' && (
                          <span>[ <span style={{ width: '20px', height: '18px', borderRadius: '3px', background: '#ffffff', display: 'inline-block' }} /> ]</span>
                        )}
                        {cv.kind === 'tuple' && (
                          <span>( <span style={{ width: '24px', height: '20px', borderRadius: '4px', background: '#ffffff', display: 'inline-block' }} /> )</span>
                        )}
                        {cv.kind === 'set' && (
                          <span>&#123; <span style={{ width: '24px', height: '20px', borderRadius: '4px', background: '#ffffff', display: 'inline-block' }} /> &#125;</span>
                        )}
                        {cv.kind === 'dict' && (
                          <span>&#123; <span style={{ width: '16px', height: '16px', borderRadius: '3px', background: '#ffffff', display: 'inline-block' }} />:<span style={{ width: '16px', height: '16px', borderRadius: '3px', background: '#ffffff', display: 'inline-block' }} /> &#125;</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

        {/* ==================================================================
            COLUMN 3 (RIGHT 1fr): Board Top Header + Canvas + Free Move Blocks + Icon-Only Trash Can
            ================================================================== */}
        <section
          style={{
            position: 'relative',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            overflow: isDraggingBlock ? 'visible' : 'hidden',
            zIndex: isDraggingBlock ? 45 : 1,
            background: '#090e1a',
            cursor: 'default',
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.14) 1.3px, transparent 1.3px)',
            backgroundSize: '24px 24px',
            backgroundPosition: '0 0',
          }}
        >
          {/* ================================================================
              BOARD TOP HEADER: Step Badge, Large Goal Prompt, Hearts, Hint Toggle
              ================================================================ */}
          <div style={{
            padding: '12px 20px',
            background: '#0d1527',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            flexShrink: 0,
            zIndex: 30,
          }}>
            {/* Row 1: Gauge Bar (left to right) + 5 Large Hearts (far right) */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              width: '100%',
            }}>
              {/* Continuous Progress Gauge Bar extending to just before hearts */}
              <div
                title={`진행도: ${progressPercent}%`}
                style={{
                  flex: 1,
                  height: '8px',
                  borderRadius: '999px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  overflow: 'hidden',
                  boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.5)',
                }}
              >
                <div
                  style={{
                    width: `${progressPercent}%`,
                    height: '100%',
                    borderRadius: '999px',
                    background: 'linear-gradient(90deg, #0284c7 0%, #38bdf8 100%)',
                    boxShadow: '0 0 10px rgba(56, 189, 248, 0.8)',
                    transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                />
              </div>

              {/* Far Right: 5 Large Duolingo Hearts (Border & text removed) */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                flexShrink: 0,
              }}>
                {[1, 2, 3, 4, 5].map((hIndex) => {
                  const isFull = hIndex <= hearts;
                  return (
                    <Heart
                      key={hIndex}
                      size={20}
                      fill={isFull ? '#ef4444' : 'transparent'}
                      color={isFull ? '#ef4444' : 'rgba(255, 255, 255, 0.25)'}
                      style={{
                        filter: isFull ? 'drop-shadow(0 0 6px rgba(239, 68, 68, 0.75))' : 'none',
                        transition: 'all 0.2s ease',
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Row 2: Problem or Instructions + Help Button + Next Step Button */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              minHeight: '36px',
            }}>
              <span style={{
                fontSize: '1.2rem',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.015em',
                lineHeight: 1.3,
                flex: '1 1 auto',
              }}>
                {currentQuestion.prompt_ko}
              </span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                {/* Hint Toggle Button Container with Relative Anchor for Floating Popover */}
                <div style={{ position: 'relative' }}>
                  <button
                    onClick={() => setShowHint(true)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '0 14px',
                      height: '34px',
                      borderRadius: '8px',
                      background: showHint ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                      border: showHint ? '1px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.15)',
                      color: showHint ? '#fbbf24' : '#e2e8f0',
                      fontSize: '0.82rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <Lightbulb size={15} color={showHint ? '#fbbf24' : '#94a3b8'} />
                    <span>도움말</span>
                  </button>

                  {/* Floating Hint Popover: Absolute positioning so it NEVER pushes canvas or blocks */}
                  {showHint && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 'calc(100% + 8px)',
                        right: 0,
                        width: '380px',
                        maxWidth: 'calc(100vw - 48px)',
                        padding: '14px 16px',
                        background: 'rgba(15, 23, 42, 0.97)',
                        backdropFilter: 'blur(16px)',
                        border: '1px solid rgba(245, 158, 11, 0.45)',
                        borderRadius: '12px',
                        boxShadow: '0 16px 36px rgba(0, 0, 0, 0.7), 0 0 20px rgba(245, 158, 11, 0.15)',
                        zIndex: 100,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          borderBottom: '1px solid rgba(245, 158, 11, 0.2)',
                          paddingBottom: '8px',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            color: '#fbbf24',
                            fontWeight: 800,
                            fontSize: '0.86rem',
                          }}
                        >
                          <Lightbulb size={16} color="#fbbf24" />
                          <span>도움말 힌트</span>
                        </div>
                        <button
                          onClick={() => setShowHint(false)}
                          title="닫기"
                          style={{
                            background: 'transparent',
                            border: 'none',
                            color: '#94a3b8',
                            cursor: 'pointer',
                            padding: '3px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '4px',
                            transition: 'color 0.15s ease',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                        >
                          <X size={15} />
                        </button>
                      </div>

                      <div
                        style={{
                          color: '#fef3c7',
                          fontSize: '0.84rem',
                          lineHeight: 1.55,
                          whiteSpace: 'pre-wrap',
                          wordBreak: 'break-word',
                        }}
                      >
                        {currentQuestion?.hint_ko || '제공된 힌트가 없습니다.'}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Floating Toast Notification */}
          {toastMessage && (
            <div style={{
              position: 'absolute',
              top: '64px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 90,
              padding: '8px 18px',
              borderRadius: '12px',
              background: 'rgba(15, 23, 42, 0.96)',
              border: '1px solid rgba(56, 189, 248, 0.4)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
              color: '#f8fafc',
              fontSize: '0.84rem',
              fontWeight: 800,
              pointerEvents: 'none',
            }}>
              <span>{toastMessage}</span>
            </div>
          )}

          {/* Main Canvas Workspace Area */}
          <div
            ref={workspaceRef}
            onClick={() => setActiveInputHelp(null)}
            onDragOver={handleCanvasDragOver}
            onDrop={handleCanvasDrop}
            onContextMenu={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            style={{
              flex: '1 1 auto',
              position: 'relative',
              width: '100%',
              height: '100%',
              overflow: isDraggingBlock ? 'visible' : 'hidden',
            }}
          >
            {/* Scratch-style Ghost / Shadow Snap Block (for below and above snaps) */}
            {activeSnapTarget && (activeSnapTarget.type === 'below' || activeSnapTarget.type === 'above') && (
              isDraggingCBlock ? (
                <GhostCShapeBlock
                  left={activeSnapTarget.markerX}
                  top={
                    activeSnapTarget.type === 'below'
                      ? activeSnapTarget.markerY - 1
                      : activeSnapTarget.markerY - ((activeSnapTarget.markerHeight || cBlockTotalHeight) - 1)
                  }
                  width={activeSnapTarget.markerWidth || draggedDim.headerWidth || 150}
                  mouthHeight={activeSnapTarget.markerMouthHeight || cBlockMouthHeight}
                  isNested={false}
                />
              ) : (
                <GhostSnapBlock
                  left={activeSnapTarget.markerX}
                  top={
                    activeSnapTarget.type === 'below'
                      ? activeSnapTarget.markerY - 1
                      : activeSnapTarget.markerY - ((activeSnapTarget.markerHeight || draggedDim.height || 34) - 1)
                  }
                  width={activeSnapTarget.markerWidth || draggedDim.width || 140}
                  height={activeSnapTarget.markerHeight || draggedDim.height || 34}
                  isNested={false}
                />
              )
            )}

            {activeSnapTarget && activeSnapTarget.type === 'method_right' && (
              <GhostMethodBlock
                left={activeSnapTarget.markerX}
                top={activeSnapTarget.markerY}
                height={activeSnapTarget.markerHeight || draggedDim.height || 34}
                width={activeSnapTarget.markerWidth || draggedDim.width || 160}
              />
            )}

            {activeSnapTarget && activeSnapTarget.type === 'arg_slot' && (
              <div
                style={{
                  position: 'absolute',
                  left: `${activeSnapTarget.markerX}px`,
                  top: `${activeSnapTarget.markerY}px`,
                  width: `${activeSnapTarget.markerWidth || 36}px`,
                  height: `${activeSnapTarget.markerHeight || 24}px`,
                  borderRadius: '6px',
                  border: '2.5px solid #facc15',
                  background: 'rgba(254, 240, 138, 0.25)',
                  boxShadow: '0 0 0 3px rgba(250, 204, 21, 0.45), 0 0 14px rgba(234, 179, 8, 0.75)',
                  zIndex: 100,
                  pointerEvents: 'none',
                  transition: 'all 0.12s ease-out',
                }}
              />
            )}

            {mode === 'block' ? (
              /* ============================================================
                 BLOCK MODE: Free Draggable Blocks with Auto-Expanding Input
                 ============================================================ */
              <>
                {canvasBlocks
                  .filter((block) => {
                    // Do not render blocks that are attached horizontally to an argBlock (they render inside the arg slot)
                    if (block.attachedToBlockId) {
                      const isRootCanvasBlock = canvasBlocks.some((b) => b.id === block.attachedToBlockId);
                      if (!isRootCanvasBlock) return false;
                    }
                    return true;
                  })
                  .map((block) => (
                    <CanvasBlockItem
                      key={block.id}
                      block={
                        shiftedBlockIds.has(block.id)
                          ? {
                              ...block,
                              y:
                                block.y +
                                (activeSnapTarget?.markerHeight ||
                                  (isDraggingCBlock ? cBlockTotalHeight : draggedDim.height || 34)),
                            }
                          : block
                      }
                      isNested={false}
                      isSlotArg={false}
                      isDraggingCBlock={isDraggingCBlock}
                      canvasBlocks={canvasBlocks}
                      activeSnapTarget={activeSnapTarget}
                      draggedChainIds={draggedChainIds}
                      activeInputHelp={activeInputHelp}
                      isDebugging={isDebugging}
                      executingBlockId={executingBlockId}
                      onBlockPointerDown={handleBlockPointerDown}
                      onInnerBlockPointerDown={handleInnerBlockPointerDown}
                      onArgBlockPointerDown={handleArgBlockPointerDown}
                      onContextMenu={handleBlockContextMenu}
                    onDragOver={handleCanvasDragOver}
                    onDrop={handleCanvasDrop}
                    onContentChange={(val, blockId, parentBlockId, cIdx, branchId) => {
                      if (parentBlockId && cIdx !== undefined) {
                        if (branchId) {
                          handleBranchInnerInputChange(parentBlockId, branchId, cIdx, val);
                        } else {
                          handleLoopInnerInputChange(parentBlockId, cIdx, val);
                        }
                      } else {
                        handleBlockInputChange(blockId, val);
                      }
                    }}
                    onVarNameChange={(val, blockId) => {
                      handleLoopInnerVarNameChange(blockId, val);
                    }}
                    onBranchConditionChange={handleBranchConditionChange}
                    onAddBranch={(blockId, kind) => {
                      if (kind === 'elif') {
                        handleAddElifBranch(blockId);
                      } else {
                        handleAddElseBranch(blockId);
                      }
                    }}
                    onRemoveBranch={handleRemoveBranch}
                    onToggleDefReturn={handleToggleDefReturn}
                    onDefReturnValChange={handleDefReturnValChange}
                    onRemoveInnerBlock={(parentBlockId, cIdx, branchId) => {
                      if (branchId) {
                        handleRemoveInnerBlockFromBranch(parentBlockId, branchId, cIdx);
                      } else {
                        handleRemoveInnerBlockFromLoop(parentBlockId, cIdx);
                      }
                    }}
                    onMethodNameChange={handleMethodNameChange}
                    onBlockTypeChange={handleBlockTypeChange}
                    onAddItem={handleAddItemToBlock}
                    onRemoveItem={handleRemoveItem}
                    onItemChange={handleItemChange}
                    onAddDictPair={handleAddDictPair}
                    onRemoveDictPair={handleRemoveDictPair}
                    onDictKeyChange={handleDictKeyChange}
                    onDictValChange={handleDictValueChange}
                    methodCategories={METHOD_CATEGORIES}
                    getMethodSelectWidth={getMethodSelectWidth}
                    renderSpeechBubble={(blockId, funcType) =>
                      activeInputHelp?.blockId === blockId && activeInputHelp.funcType === funcType ? (
                        <FunctionParamSpeechBubble
                          funcType={funcType}
                          onApplyOption={(opt) => handleBlockInputChange(blockId, opt)}
                        />
                      ) : null
                    }
                    handleInputFocusSelect={handleInputFocusSelect}
                    handleInputClickSelect={handleInputClickSelect}
                  />
                ))}



                {/* ==========================================================
                    BOTTOM-RIGHT FLOATING TRASH CAN ICON ONLY (블록 드래그 삭제 전용)
                    ========================================================== */}
                <div
                  className="trash-dropzone"
                  onDragOver={handleTrashDragOver}
                  onDragLeave={handleTrashDragLeave}
                  onDrop={handleTrashDrop}
                  style={{
                    position: 'absolute',
                    bottom: '28px',
                    right: '28px',
                    zIndex: 35,
                    cursor: 'default',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '8px',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: isTrashHovered ? 'scale(1.3)' : isDraggingBlock ? 'scale(1.15)' : 'scale(1)',
                    filter: isTrashHovered
                      ? 'drop-shadow(0 0 16px rgba(239, 68, 68, 0.95))'
                      : isDraggingBlock
                        ? 'drop-shadow(0 0 8px rgba(239, 68, 68, 0.6))'
                        : 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.6))',
                  }}
                  title="블록을 드래그하여 휴지통에 버리세요"
                >
                  <Trash2
                    size={46}
                    color={isTrashHovered ? '#ef4444' : isDraggingBlock ? '#f87171' : '#64748b'}
                    style={{
                      transition: 'all 0.2s ease',
                      pointerEvents: 'none',
                    }}
                  />
                </div>
              </>
            ) : (
              /* ============================================================
                 TYPING MODE: Interactive Fill-in-the-Blank Code & Virtual Keyboard
                 ============================================================ */
              <TypingStage
                question={currentQuestion}
                onCodeChange={setUserCode}
                onSubmit={handleExecuteManual}
                isSuccess={isSuccess}
                isExecuting={isExecuting || isDebugging}
                isDebugging={isDebugging}
                executingLineIndex={executingLineIndex}
              />
            )}
          </div>
        </section>
      </main>

      {/* ====================================================================
          6. RIGHT-CLICK CONTEXT MENU (우클릭 컨텍스트 메뉴: 블록 및 캔버스)
          ==================================================================== */}
      {contextMenu.visible && contextMenu.blockId && (
        <div
          style={{
            position: 'fixed',
            top: contextMenu.y,
            left: contextMenu.x,
            zIndex: 9999,
            background: 'rgba(15, 23, 42, 0.96)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.14)',
            borderRadius: '12px',
            padding: '6px',
            minWidth: '180px',
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.75)',
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {contextMenu.targetType === 'block' && contextMenu.blockId && (
            (() => {
              const target = findBlockInTree(canvasBlocks, contextMenu.blockId);
              if (target?.type === 'start') {
                return (
                  <div style={{ padding: '8px 12px', fontSize: '0.78rem', color: '#94a3b8' }}>
                    <div style={{ fontWeight: 800, color: '#34d399', marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Play size={12} fill="#34d399" />
                      <span>시작 블록</span>
                    </div>
                    <span>이 블록 아래에 연결된 블록만 실시간으로 실행됩니다.</span>
                  </div>
                );
              }

              const isIfBlock = target?.type === 'if';
              const isDefBlock = target?.type === 'def';
              const hasElseBranch = target?.branches?.some((br) => br.kind === 'else') ?? false;

              return (
                <>
                  {/* If Block Special Actions: +elif, +else */}
                  {isIfBlock && target && (
                    <>
                      <button
                        onClick={() => {
                          handleAddElifBranch(target.id);
                          setContextMenu({ visible: false, x: 0, y: 0, blockId: null, targetType: 'block' });
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '8px 12px',
                          borderRadius: '8px',
                          border: 'none',
                          background: 'transparent',
                          color: '#fed7aa',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'background 0.15s ease',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(249, 115, 22, 0.2)')}
                        onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                      >
                        <Plus size={14} color="#f97316" />
                        <span>elif 조건문 가지 추가</span>
                      </button>
                      {!hasElseBranch && (
                        <button
                          onClick={() => {
                            handleAddElseBranch(target.id);
                            setContextMenu({ visible: false, x: 0, y: 0, blockId: null, targetType: 'block' });
                          }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '8px 12px',
                            borderRadius: '8px',
                            border: 'none',
                            background: 'transparent',
                            color: '#fed7aa',
                            fontSize: '0.82rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                            textAlign: 'left',
                            transition: 'background 0.15s ease',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(249, 115, 22, 0.2)')}
                          onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                        >
                          <Plus size={14} color="#f97316" />
                          <span>else 조건문 가지 추가</span>
                        </button>
                      )}
                      <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.08)', margin: '4px 0' }} />
                    </>
                  )}

                  {/* Def Block Special Actions: Return Toggle */}
                  {isDefBlock && target && (
                    <>
                      <button
                        onClick={() => {
                          handleToggleDefReturn(target.id, !target.hasReturn);
                          setContextMenu({ visible: false, x: 0, y: 0, blockId: null, targetType: 'block' });
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '8px 12px',
                          borderRadius: '8px',
                          border: 'none',
                          background: 'transparent',
                          color: '#e9d5ff',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'background 0.15s ease',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(168, 85, 247, 0.2)')}
                        onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                      >
                        {target.hasReturn ? (
                          <>
                            <Trash2 size={14} color="#c084fc" />
                            <span>return 반환문 제거</span>
                          </>
                        ) : (
                          <>
                            <Plus size={14} color="#c084fc" />
                            <span>return 반환문 추가</span>
                          </>
                        )}
                      </button>
                      <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.08)', margin: '4px 0' }} />
                    </>
                  )}

                  {/* Duplicate Block */}
                  <button
                    onClick={() => {
                      handleDuplicateBlock(contextMenu.blockId!);
                      setContextMenu({ visible: false, x: 0, y: 0, blockId: null, targetType: 'block' });
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      border: 'none',
                      background: 'transparent',
                      color: '#e2e8f0',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'background 0.15s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(56, 189, 248, 0.15)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    <Copy size={14} color="#38bdf8" />
                    <span>블록 복사 (Duplicate)</span>
                  </button>

                  {/* Clear Input */}
                  <button
                    onClick={() => {
                      handleClearBlockContent(contextMenu.blockId!);
                      setContextMenu({ visible: false, x: 0, y: 0, blockId: null, targetType: 'block' });
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      border: 'none',
                      background: 'transparent',
                      color: '#e2e8f0',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'background 0.15s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    <Edit3 size={14} color="#94a3b8" />
                    <span>내용 비우기 (Clear)</span>
                  </button>

                  <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.08)', margin: '4px 0' }} />

                  {/* Delete Block */}
                  <button
                    onClick={() => {
                      handleDeleteBlock(contextMenu.blockId!);
                      setContextMenu({ visible: false, x: 0, y: 0, blockId: null, targetType: 'block' });
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      border: 'none',
                      background: 'transparent',
                      color: '#f87171',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'background 0.15s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(239, 68, 68, 0.15)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    <Trash2 size={14} color="#ef4444" />
                    <span>블록 삭제 (제거)</span>
                  </button>
                </>
              );
            })()
          )}
        </div>
      )}

      {/* ====================================================================
          SUCCESS MODAL (정답 모달 팝업: 다음 문제 이동 & Enter 키 지원)
          ==================================================================== */}
      {isSuccess && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(2, 6, 23, 0.80)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            style={{
              maxWidth: '460px',
              width: '100%',
              background: '#0d1527',
              border: '1.5px solid rgba(16, 185, 129, 0.45)',
              borderRadius: '24px',
              padding: '36px 28px',
              textAlign: 'center',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.85), 0 0 35px rgba(16, 185, 129, 0.22)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glowing Success Badge */}
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '20px',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1.5px solid rgba(16, 185, 129, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                boxShadow: '0 0 24px rgba(16, 185, 129, 0.35)',
              }}
            >
              <CheckCircle2 size={34} color="#10b981" />
            </div>

            <h3
              style={{
                fontSize: '1.45rem',
                fontWeight: 900,
                color: '#f8fafc',
                letterSpacing: '-0.02em',
                marginBottom: '8px',
              }}
            >
              {currentStepIndex < totalQuestions - 1 ? '🎉 정답입니다!' : '🏆 모든 미션 완료!'}
            </h3>

            <p
              style={{
                fontSize: '0.90rem',
                color: '#94a3b8',
                lineHeight: 1.6,
                marginBottom: terminalOutput ? '18px' : '26px',
              }}
            >
              {currentStepIndex < totalQuestions - 1 ? (
                <>
                  <strong style={{ color: '#e2e8f0' }}>{currentStepIndex + 1}단계</strong> 미션을 성공적으로 해결했습니다.<br />
                  다음 문제로 넘어가 실력을 더 키워보세요!
                </>
              ) : (
                <>
                  축하합니다! 이번 라운드의 모든 미션을 완벽히 통과했습니다.<br />
                  다음 레벨이나 새로운 언어 학습에 도전해보세요!
                </>
              )}
            </p>

            {/* Clean Output Preview in Modal */}
            {terminalOutput && (
              <div
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  background: 'rgba(0, 0, 0, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  color: '#34d399',
                  textAlign: 'left',
                  marginBottom: '24px',
                  maxHeight: '120px',
                  overflowY: 'auto',
                }}
              >
                <div style={{ fontSize: '0.70rem', color: '#64748b', fontWeight: 700, marginBottom: '4px' }}>
                  출력 결과:
                </div>
                <pre style={{ margin: 0, whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
                  {terminalOutput}
                </pre>
              </div>
            )}

            {/* Next / Complete Actions */}
            {currentStepIndex < totalQuestions - 1 ? (
              <button
                onClick={handleNextStep}
                autoFocus
                className="tactile-btn tactile-btn-green"
                style={{
                  width: '100%',
                  padding: '13px 20px',
                  fontSize: '0.96rem',
                  fontWeight: 800,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)',
                  cursor: 'pointer',
                }}
              >
                <span>다음 단계로 이동</span>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: '6px',
                    background: 'rgba(0, 0, 0, 0.25)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    marginLeft: '4px',
                  }}
                >
                  Enter ↵
                </span>
                <ChevronRight size={17} />
              </button>
            ) : (
              <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
                <button
                  onClick={handleResetRound}
                  style={{
                    flex: 1,
                    padding: '12px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#e2e8f0',
                    fontSize: '0.88rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                  }}
                >
                  다시 풀기
                </button>
                <Link
                  href={`/practice/${langKey}`}
                  className="tactile-btn tactile-btn-green"
                  style={{
                    flex: 1,
                    padding: '12px',
                    borderRadius: '10px',
                    fontSize: '0.88rem',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                  }}
                >
                  단계 목록으로
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ====================================================================
          7. GAME OVER MODAL (Hearts depleted)
          ==================================================================== */}
      {isGameOver && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}>
          <div style={{
            maxWidth: '440px',
            width: '100%',
            background: '#131e33',
            border: '1.5px solid rgba(239, 68, 68, 0.5)',
            borderRadius: '24px',
            padding: '36px 30px',
            textAlign: 'center',
            boxShadow: '0 20px 50px rgba(239, 68, 68, 0.25)',
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '20px',
              background: 'rgba(239, 68, 68, 0.15)',
              border: '1px solid rgba(239, 68, 68, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
            }}>
              <Heart size={32} color="#ef4444" fill="#ef4444" />
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f8fafc', marginBottom: '8px' }}>
              모든 하트를 소진했습니다!
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '24px' }}>
              5번의 오답으로 하트가 모두 소모되었습니다.<br />
              1단계부터 다시 도전하여 실력을 다져보세요!
            </p>

            <button
              onClick={handleResetRound}
              className="tactile-btn tactile-btn-primary"
              style={{
                width: '100%',
                padding: '12px 20px',
                fontSize: '0.95rem',
                justifyContent: 'center',
              }}
            >
              <RotateCcw size={16} />
              <span>1단계부터 다시 도전하기</span>
            </button>
          </div>
        </div>
      )}

      {/* ====================================================================
          7. CREATE VARIABLE MODAL (2-STEP MODAL: 1. 자료형 선택 -> 2. 이름 입력)
          ==================================================================== */}
      {isVarModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(2, 6, 23, 0.78)',
            backdropFilter: 'blur(8px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setIsVarModalOpen(false)}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '520px',
              background: '#0d1527',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              borderRadius: '16px',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.85)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{
              padding: '16px 20px',
              background: '#0f172a',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Box size={18} color="#fb923c" />
                <span style={{ fontSize: '0.96rem', fontWeight: 800, color: '#f8fafc' }}>
                  {varModalStep === 1 ? '새 변수 / 자료형 생성' : '변수 이름 입력'}
                </span>
                <span style={{
                  fontSize: '0.68rem',
                  padding: '2px 8px',
                  borderRadius: '999px',
                  background: 'rgba(249, 115, 22, 0.2)',
                  color: '#fb923c',
                  fontWeight: 800,
                }}>
                  {varModalStep === 1 ? '1단계: 자료형 선택' : '2단계: 이름 입력'}
                </span>
              </div>
              <button
                onClick={() => setIsVarModalOpen(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '6px',
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '20px' }}>
              {varModalStep === 1 ? (
                /* Step 1: Select Data Structure */
                <div>
                  <p style={{ fontSize: '0.84rem', color: '#94a3b8', marginBottom: '14px' }}>
                    생성하려는 파이썬 자료형 구조를 선택하세요:
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {[
                      {
                        kind: 'variable' as const,
                        name: '변수 (단일 값)',
                        syntax: 'name = 값',
                        desc: '정수, 실수, 문자열 등의 단일 값 저장',
                        color: '#ea580c',
                        bg: 'rgba(234, 88, 12, 0.1)',
                        border: 'rgba(234, 88, 12, 0.3)',
                      },
                      {
                        kind: 'list' as const,
                        name: '리스트 (List)',
                        syntax: 'name = [값, ...]',
                        desc: '순서가 있고 언제든 값을 추가할 수 있는 가변 목록',
                        color: '#0d9488',
                        bg: 'rgba(13, 148, 136, 0.1)',
                        border: 'rgba(13, 148, 136, 0.3)',
                      },
                      {
                        kind: 'tuple' as const,
                        name: '튜플 (Tuple)',
                        syntax: 'name = (값, ...)',
                        desc: '순서가 있지만 한 번 정하면 바꿀 수 없는 불변 목록',
                        color: '#6366f1',
                        bg: 'rgba(99, 102, 241, 0.1)',
                        border: 'rgba(99, 102, 241, 0.3)',
                      },
                      {
                        kind: 'set' as const,
                        name: '세트 (Set)',
                        syntax: 'name = {값, ...}',
                        desc: '중복 값을 허용하지 않는 고유 집합',
                        color: '#9333ea',
                        bg: 'rgba(147, 51, 234, 0.1)',
                        border: 'rgba(147, 51, 234, 0.3)',
                      },
                      {
                        kind: 'dict' as const,
                        name: '딕셔너리 (Dictionary)',
                        syntax: 'name = {키: 값, ...}',
                        desc: '키(Key)와 값(Value) 쌍으로 매핑된 사전 구조',
                        color: '#d97706',
                        bg: 'rgba(217, 119, 6, 0.1)',
                        border: 'rgba(217, 119, 6, 0.3)',
                      },
                    ].map((item) => (
                      <div
                        key={item.kind}
                        onClick={() => {
                          setSelectedVarKind(item.kind);
                          setVarModalStep(2);
                          setVarInputName(
                            item.kind === 'list' ? 'my_list' :
                              item.kind === 'tuple' ? 'my_tuple' :
                                item.kind === 'set' ? 'my_set' :
                                  item.kind === 'dict' ? 'my_dict' : 'x'
                          );
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '12px 14px',
                          borderRadius: '10px',
                          background: item.bg,
                          border: `1px solid ${item.border}`,
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-1px)';
                          e.currentTarget.style.borderColor = item.color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'none';
                          e.currentTarget.style.borderColor = item.border;
                        }}
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                          <span style={{ fontSize: '0.88rem', fontWeight: 800, color: '#f8fafc' }}>
                            {item.name}
                          </span>
                          <span style={{ fontSize: '0.74rem', color: '#94a3b8' }}>
                            {item.desc}
                          </span>
                        </div>
                        <span style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.74rem',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          background: 'rgba(0, 0, 0, 0.4)',
                          color: item.color,
                          fontWeight: 700,
                        }}>
                          {item.syntax}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* Step 2: Input Name */
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                    <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>선택된 자료형:</span>
                    <span style={{
                      fontSize: '0.76rem',
                      fontWeight: 800,
                      padding: '3px 8px',
                      borderRadius: '6px',
                      background: BLOCK_THEMES[selectedVarKind].bg,
                      color: '#ffffff',
                    }}>
                      {getKindLabel(selectedVarKind)}
                    </span>
                  </div>

                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '8px' }}>
                    변수 이름 (영문 및 언더스코어):
                  </label>

                  <input
                    type="text"
                    autoFocus
                    value={varInputName}
                    onChange={(e) => setVarInputName(e.target.value.replace(/[^a-zA-Z0-9_]/g, ''))}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleCreateVariable();
                      if (e.key === 'Escape') setVarModalStep(1);
                    }}
                    placeholder="예: fruits, scores, user_info"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      background: '#090e1a',
                      border: '1.5px solid #38bdf8',
                      color: '#ffffff',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1rem',
                      fontWeight: 800,
                      outline: 'none',
                      marginBottom: '14px',
                    }}
                  />

                  {/* Recommendation Chips */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', marginBottom: '20px' }}>
                    <span style={{ fontSize: '0.74rem', color: '#64748b' }}>추천 이름:</span>
                    {(
                      selectedVarKind === 'list' ? ['numbers', 'fruits', 'scores', 'items'] :
                        selectedVarKind === 'tuple' ? ['point', 'dimensions', 'rgb_color'] :
                          selectedVarKind === 'set' ? ['unique_ids', 'tags', 'vowels'] :
                            selectedVarKind === 'dict' ? ['user_info', 'student', 'config', 'inventory'] :
                              ['total', 'count', 'age', 'result', 'x', 'y']
                    ).map((rec) => (
                      <button
                        key={rec}
                        onClick={() => setVarInputName(rec)}
                        style={{
                          padding: '3px 8px',
                          borderRadius: '6px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: '#cbd5e1',
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          cursor: 'pointer',
                        }}
                      >
                        {rec}
                      </button>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px' }}>
                    <button
                      onClick={() => setVarModalStep(1)}
                      style={{
                        padding: '9px 16px',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#cbd5e1',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                      }}
                    >
                      &lt; 이전으로
                    </button>
                    <button
                      onClick={handleCreateVariable}
                      className="tactile-btn tactile-btn-primary"
                      style={{
                        padding: '9px 18px',
                        fontSize: '0.86rem',
                        fontWeight: 800,
                      }}
                    >
                      <span>생성하기</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
