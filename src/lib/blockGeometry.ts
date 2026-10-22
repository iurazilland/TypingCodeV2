export type BlockType =
  // 시작
  | 'start'
  // 함수
  | 'print'
  | 'input'
  | 'len'
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

export interface DictPair {
  key: string;
  value: string;
}

export interface IfBranch {
  id: string;
  kind: 'if' | 'elif' | 'else';
  condition?: string;
  innerBlocks: CanvasBlock[];
}

export interface CanvasBlock {
  id: string;
  type: BlockType;
  varName?: string;
  content?: string;
  items?: string[];
  dictPairs?: DictPair[];
  isIfElse?: boolean;
  hasReturn?: boolean;
  returnVal?: string;
  methodName?: string;
  attachedMethodId?: string;
  attachedToBlockId?: string;
  innerBlocks?: CanvasBlock[];
  branches?: IfBranch[];
  x: number;
  y: number;
  nextBlockId?: string;
  prevBlockId?: string;
  zIndex?: number;
}

export const BLOCK_GEOMETRY = {
  // Puzzle Notch & Tab dimensions
  TAB_LEFT_ROOT: 16,        // Horizontal offset for top-level root blocks
  TAB_LEFT_INNER: 12,       // Horizontal offset for blocks inside mouths
  TAB_WIDTH: 20,            // Notch & Tab width in px
  TAB_HEIGHT: 6,            // Protrusion depth in px
  SPINE_WIDTH: 18,          // Width of C-block left vertical column

  // Standard block heights
  STATEMENT_HEIGHT: 32,
  ARM_HEIGHT: 30,
  CLOSING_ARM_HEIGHT: 24,

  // Snap thresholds in px
  SNAP_HORIZONTAL_TOLERANCE: 45,
  SNAP_VERTICAL_ZONE: 28,
  MOUTH_SNAP_PADDING: 18,
};
export const BLOCK_THEMES: Record<string, { bg: string; shadow: string; border: string }> = {
  start: { bg: '#059669', shadow: '#047857', border: '#10b981' },
  print: { bg: '#2563eb', shadow: '#1d4ed8', border: '#3b82f6' },
  input: { bg: '#0284c7', shadow: '#0369a1', border: '#38bdf8' },
  len: { bg: '#4f46e5', shadow: '#4338ca', border: '#6366f1' },
  def: { bg: '#1d4ed8', shadow: '#1e40af', border: '#3b82f6' },
  return: { bg: '#4338ca', shadow: '#3730a3', border: '#6366f1' },
  method: { bg: '#7c3aed', shadow: '#6d28d9', border: '#8b5cf6' },
  for_range: { bg: '#059669', shadow: '#047857', border: '#10b981' },
  for_in: { bg: '#059669', shadow: '#047857', border: '#10b981' },
  while: { bg: '#059669', shadow: '#047857', border: '#10b981' },
  break: { bg: '#475569', shadow: '#334155', border: '#64748b' },
  continue: { bg: '#475569', shadow: '#334155', border: '#64748b' },
  if: { bg: '#d97706', shadow: '#b45309', border: '#f59e0b' },
  elif: { bg: '#d97706', shadow: '#b45309', border: '#f59e0b' },
  else: { bg: '#d97706', shadow: '#b45309', border: '#f59e0b' },
  variable: { bg: '#ea580c', shadow: '#c2410c', border: '#f97316' },
  list: { bg: '#0d9488', shadow: '#0f766e', border: '#14b8a6' },
  tuple: { bg: '#4f46e5', shadow: '#4338ca', border: '#6366f1' },
  set: { bg: '#9333ea', shadow: '#7e22ce', border: '#a855f7' },
  dict: { bg: '#c2410c', shadow: '#9a3412', border: '#ea580c' },
};

export const getBlockInputWidth = (val: string | undefined | null, minChars: number = 1): number => {
  const str = val ?? '';
  if (str.length === 0) {
    return 26;
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

export interface SnapTarget {
  type: 'below' | 'above' | 'mouth' | 'method_right';
  targetBlockId: string;
  branchId?: string;
  insertIndex?: number;
  markerX: number;
  markerY: number;
  markerWidth?: number;
  markerHeight?: number;
}

