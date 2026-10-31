import { PracticeRound } from './practiceTypes';
import { PYTHON_LEVEL_1 } from '@/data/curriculum/python/level1';
import { PYTHON_LEVEL_2 } from '@/data/curriculum/python/level2';
import { PYTHON_LEVEL_3 } from '@/data/curriculum/python/level3';
import { PYTHON_LEVEL_4 } from '@/data/curriculum/python/level4';
import { PYTHON_LEVEL_5 } from '@/data/curriculum/python/level5';
import { PYTHON_LEVEL_6 } from '@/data/curriculum/python/level6';
import { PYTHON_LEVEL_7 } from '@/data/curriculum/python/level7';
import { PYTHON_LEVEL_8 } from '@/data/curriculum/python/level8';

// ============================================================================
// Section 1: 기초 출력과 연산 (Lv 1~7: 13단계 / Lv 8 종합 문제풀이: 10단계)
// ============================================================================
export const PYTHON_BASIC_ROUND_1: PracticeRound = PYTHON_LEVEL_1;
export const PYTHON_BASIC_ROUND_2: PracticeRound = PYTHON_LEVEL_2;
export const PYTHON_BASIC_ROUND_3: PracticeRound = PYTHON_LEVEL_3;
export const PYTHON_BASIC_ROUND_4: PracticeRound = PYTHON_LEVEL_4;
export const PYTHON_BASIC_ROUND_5: PracticeRound = PYTHON_LEVEL_5;
export const PYTHON_BASIC_ROUND_6: PracticeRound = PYTHON_LEVEL_6;
export const PYTHON_BASIC_ROUND_7: PracticeRound = PYTHON_LEVEL_7;
export const PYTHON_BASIC_ROUND_8: PracticeRound = PYTHON_LEVEL_8;

// Map of rounds by language and round number
export const PRACTICE_ROUNDS: Record<string, PracticeRound> = {
  'py-basic-r1': PYTHON_BASIC_ROUND_1,
  'py-basic-r2': PYTHON_BASIC_ROUND_2,
  'py-basic-r3': PYTHON_BASIC_ROUND_3,
  'py-basic-r4': PYTHON_BASIC_ROUND_4,
  'py-basic-r5': PYTHON_BASIC_ROUND_5,
  'py-basic-r6': PYTHON_BASIC_ROUND_6,
  'py-basic-r7': PYTHON_BASIC_ROUND_7,
  'py-basic-r8': PYTHON_BASIC_ROUND_8,
  'python_basic-1': PYTHON_BASIC_ROUND_1,
  'python_basic-2': PYTHON_BASIC_ROUND_2,
  'python_basic-3': PYTHON_BASIC_ROUND_3,
  'python_basic-4': PYTHON_BASIC_ROUND_4,
  'python_basic-5': PYTHON_BASIC_ROUND_5,
  'python_basic-6': PYTHON_BASIC_ROUND_6,
  'python_basic-7': PYTHON_BASIC_ROUND_7,
  'python_basic-8': PYTHON_BASIC_ROUND_8,
};

export function getPracticeRound(language: string, roundNumber: number = 1): PracticeRound {
  const norm = language.toLowerCase().replace(/[-]/g, '_');
  if (norm === 'python' || norm === 'python_basic' || norm === 'py_basic') {
    return PRACTICE_ROUNDS[`py-basic-r${roundNumber}`] || PYTHON_BASIC_ROUND_1;
  }
  const key = `${language}-basic-r${roundNumber}`;
  return PRACTICE_ROUNDS[key] || PRACTICE_ROUNDS['py-basic-r1'] || PYTHON_BASIC_ROUND_1;
}
