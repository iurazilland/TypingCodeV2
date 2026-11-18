export type BlockType =
  // 시작
  | 'start'
  // 함수
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
  | 'ord'
  | 'chr'
  | 'isinstance'
  | 'def'
  | 'return'
  | 'call'
  | 'class'
  // 메서드
  | 'method'
  // 반복 (루프)
  | 'for_range'
  | 'for_in'
  | 'while'
  | 'break'
  | 'continue'
  // 논리 (조건) 및 예외 처리
  | 'if'
  | 'elif'
  | 'else'
  | 'try'
  | 'except'
  | 'finally'
  | 'raise'
  // 변수 / 자료형
  | 'variable'
  | 'list'
  | 'tuple'
  | 'set'
  | 'dict'
  // 주석
  | 'comment';

export interface DictPair {
  key: string;
  value: string;
}

export interface IfBranch {
  id: string;
  kind: 'if' | 'elif' | 'else' | 'try' | 'except' | 'finally';
  condition?: string;
  targetCondition?: string;
  innerBlocks: CanvasBlock[];
}

export type AssignOperator = '=' | '+=' | '-=' | '*=' | '/=' | '//=' | '%=';

export interface CanvasBlock {
  id: string;
  type: BlockType;
  varName?: string;
  targetVarName?: string;
  isVarRef?: boolean;
  assignOp?: AssignOperator;
  content?: string;
  targetContent?: string;
  items?: string[];
  targetItems?: string[];
  dictPairs?: DictPair[];
  targetDictPairs?: DictPair[];
  isIfElse?: boolean;
  hasReturn?: boolean;
  returnVal?: string;
  targetReturnVal?: string;
  hasSep?: boolean;
  sepVal?: string;
  targetSepVal?: string;
  hasEnd?: boolean;
  endVal?: string;
  targetEndVal?: string;
  methodName?: string;
  attachedMethodId?: string;
  attachedToBlockId?: string;
  argBlock?: CanvasBlock;
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
  STATEMENT_HEIGHT: 38,
  ARM_HEIGHT: 36,
  CLOSING_ARM_HEIGHT: 28,

  // Snap thresholds in px
  SNAP_HORIZONTAL_TOLERANCE: 45,
  SNAP_VERTICAL_ZONE: 28,
  MOUTH_SNAP_PADDING: 18,
};
export const BLOCK_THEMES: Record<string, { bg: string; shadow: string; border: string }> = {
  // 0. 시작 블록 (선명한 에메랄드 시그널 그린)
  start: { bg: '#10b981', shadow: '#059669', border: '#34d399' },

  // 1. 내장 함수 (로얄 블루 통일)
  print: { bg: '#2563eb', shadow: '#1d4ed8', border: '#60a5fa' },
  input: { bg: '#2563eb', shadow: '#1d4ed8', border: '#60a5fa' },
  len: { bg: '#2563eb', shadow: '#1d4ed8', border: '#60a5fa' },
  int: { bg: '#2563eb', shadow: '#1d4ed8', border: '#60a5fa' },
  float: { bg: '#2563eb', shadow: '#1d4ed8', border: '#60a5fa' },
  str: { bg: '#2563eb', shadow: '#1d4ed8', border: '#60a5fa' },
  type: { bg: '#2563eb', shadow: '#1d4ed8', border: '#60a5fa' },
  round: { bg: '#2563eb', shadow: '#1d4ed8', border: '#60a5fa' },
  abs: { bg: '#2563eb', shadow: '#1d4ed8', border: '#60a5fa' },
  sum: { bg: '#2563eb', shadow: '#1d4ed8', border: '#60a5fa' },
  min: { bg: '#2563eb', shadow: '#1d4ed8', border: '#60a5fa' },
  max: { bg: '#2563eb', shadow: '#1d4ed8', border: '#60a5fa' },
  math: { bg: '#2563eb', shadow: '#1d4ed8', border: '#60a5fa' },
  range: { bg: '#2563eb', shadow: '#1d4ed8', border: '#60a5fa' },
  map: { bg: '#2563eb', shadow: '#1d4ed8', border: '#60a5fa' },
  sorted: { bg: '#2563eb', shadow: '#1d4ed8', border: '#60a5fa' },
  bool: { bg: '#2563eb', shadow: '#1d4ed8', border: '#60a5fa' },
  iter: { bg: '#2563eb', shadow: '#1d4ed8', border: '#60a5fa' },
  enumerate: { bg: '#2563eb', shadow: '#1d4ed8', border: '#60a5fa' },
  zip: { bg: '#2563eb', shadow: '#1d4ed8', border: '#60a5fa' },
  all: { bg: '#2563eb', shadow: '#1d4ed8', border: '#60a5fa' },
  any: { bg: '#2563eb', shadow: '#1d4ed8', border: '#60a5fa' },
  reversed: { bg: '#2563eb', shadow: '#1d4ed8', border: '#60a5fa' },
  ord: { bg: '#2563eb', shadow: '#1d4ed8', border: '#60a5fa' },
  chr: { bg: '#2563eb', shadow: '#1d4ed8', border: '#60a5fa' },
  isinstance: { bg: '#2563eb', shadow: '#1d4ed8', border: '#60a5fa' },
  open: { bg: '#2563eb', shadow: '#1d4ed8', border: '#60a5fa' },

  // 1-2. 메서드 체이닝 (인디고 블루)
  method: { bg: '#4f46e5', shadow: '#3730a3', border: '#818cf8' },

  // 2. 클래스 / 사용자 정의 함수 (함수=바이올렛, 클래스=시안)
  def: { bg: '#7c3aed', shadow: '#5b21b6', border: '#a78bfa' },
  return: { bg: '#7c3aed', shadow: '#5b21b6', border: '#a78bfa' },
  call: { bg: '#7c3aed', shadow: '#5b21b6', border: '#a78bfa' },
  class: { bg: '#0891b2', shadow: '#0e7490', border: '#22d3ee' },

  // 3. 제어 - 반복 및 루프 탈출 (딥 틸 통일)
  for_range: { bg: '#0d9488', shadow: '#0f766e', border: '#2dd4bf' },
  for_in: { bg: '#0d9488', shadow: '#0f766e', border: '#2dd4bf' },
  while: { bg: '#0d9488', shadow: '#0f766e', border: '#2dd4bf' },
  break: { bg: '#0f766e', shadow: '#115e59', border: '#14b8a6' },
  continue: { bg: '#0f766e', shadow: '#115e59', border: '#14b8a6' },

  // 3. 제어 - 조건 (앰버 골드 통일)
  if: { bg: '#d97706', shadow: '#b45309', border: '#fbbf24' },
  elif: { bg: '#d97706', shadow: '#b45309', border: '#fbbf24' },
  else: { bg: '#d97706', shadow: '#b45309', border: '#fbbf24' },

  // 3. 제어 - 예외 처리 (로즈 크림슨 통일)
  try: { bg: '#e11d48', shadow: '#9f1239', border: '#fb7185' },
  except: { bg: '#e11d48', shadow: '#9f1239', border: '#fb7185' },
  finally: { bg: '#e11d48', shadow: '#9f1239', border: '#fb7185' },
  raise: { bg: '#e11d48', shadow: '#9f1239', border: '#fb7185' },

  // 4. 변수 / 자료형 (오렌지 · 웜 코랄 톤온톤 통일)
  variable: { bg: '#ea580c', shadow: '#9a3412', border: '#fb923c' },
  list: { bg: '#c2410c', shadow: '#7c2d12', border: '#f97316' },
  tuple: { bg: '#c2410c', shadow: '#7c2d12', border: '#f97316' },
  set: { bg: '#c2410c', shadow: '#7c2d12', border: '#f97316' },
  dict: { bg: '#c2410c', shadow: '#7c2d12', border: '#f97316' },

  // 5. 주석 (슬레이트 다크)
  comment: { bg: '#334155', shadow: '#1e293b', border: '#64748b' },
};

export const getBlockInputWidth = (val: string | undefined | null, minChars: number = 1): number => {
  const BASE_WIDTH = 32;
  const str = val ?? '';
  if (str.length === 0) {
    return BASE_WIDTH;
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
  return Math.max(BASE_WIDTH, Math.round(effectiveLen * 8.8 + 16));
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
  markerMouthHeight?: number;
}

