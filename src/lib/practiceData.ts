import { PracticeRound } from './practiceTypes';
import { PYTHON_LEVEL_1 } from '@/data/curriculum/python/level1';
import { PYTHON_LEVEL_2 } from '@/data/curriculum/python/level2';
import { PYTHON_LEVEL_3 } from '@/data/curriculum/python/level3';
import { PYTHON_LEVEL_4 } from '@/data/curriculum/python/level4';
import { PYTHON_LEVEL_5 } from '@/data/curriculum/python/level5';

// ============================================================================
// 1레벨 (Level 1): print() 함수와 기본 사칙연산 (10단계: 5블록 + 5타이핑)
// ============================================================================
export const PYTHON_BASIC_ROUND_1: PracticeRound = PYTHON_LEVEL_1;

// ============================================================================
// 2레벨 (Level 2): 몫(//), 나머지(%), 거듭제곱(**)과 쉼표(,) (10단계: 5블록 + 5타이핑)
// ============================================================================
export const PYTHON_BASIC_ROUND_2: PracticeRound = PYTHON_LEVEL_2;

// ============================================================================
// 3레벨 (Level 3): 문자열(String)과 따옴표 출력 (10단계: 5블록 + 5타이핑)
// ============================================================================
export const PYTHON_BASIC_ROUND_3: PracticeRound = PYTHON_LEVEL_3;

// ============================================================================
// 4레벨 (Level 4): 수식 출력과 나머지(%)의 실전 활용 (10단계: 5블록 + 5타이핑)
// ============================================================================
export const PYTHON_BASIC_ROUND_4: PracticeRound = PYTHON_LEVEL_4;

// ============================================================================
// 5레벨 (Level 5): 문자열 연산(+)과 반복(*) (10단계: 5블록 + 5타이핑)
// ============================================================================
export const PYTHON_BASIC_ROUND_5: PracticeRound = PYTHON_LEVEL_5;

// Map of rounds by language and round number
export const PRACTICE_ROUNDS: Record<string, PracticeRound> = {
  'py-basic-r1': PYTHON_BASIC_ROUND_1,
  'py-basic-r2': PYTHON_BASIC_ROUND_2,
  'py-basic-r3': PYTHON_BASIC_ROUND_3,
  'py-basic-r4': PYTHON_BASIC_ROUND_4,
  'py-basic-r5': PYTHON_BASIC_ROUND_5,
  'python_basic-1': PYTHON_BASIC_ROUND_1,
  'python_basic-2': PYTHON_BASIC_ROUND_2,
  'python_basic-3': PYTHON_BASIC_ROUND_3,
  'python_basic-4': PYTHON_BASIC_ROUND_4,
  'python_basic-5': PYTHON_BASIC_ROUND_5,
};

export function getPracticeRound(language: string, roundNumber: number = 1): PracticeRound {
  const norm = language.toLowerCase().replace(/[-]/g, '_');
  if (norm === 'python' || norm === 'python_basic' || norm === 'py_basic') {
    return PRACTICE_ROUNDS[`py-basic-r${roundNumber}`] || PYTHON_BASIC_ROUND_1;
  }
  const key = `${language}-basic-r${roundNumber}`;
  return PRACTICE_ROUNDS[key] || PRACTICE_ROUNDS['py-basic-r1'] || PYTHON_BASIC_ROUND_1;
}
