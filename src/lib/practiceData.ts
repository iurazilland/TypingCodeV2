import { PracticeRound } from './practiceTypes';
import { PYTHON_LEVEL_1 } from '@/data/curriculum/python/level1';
import { PYTHON_LEVEL_2 } from '@/data/curriculum/python/level2';
import { PYTHON_LEVEL_3 } from '@/data/curriculum/python/level3';
import { PYTHON_LEVEL_4 } from '@/data/curriculum/python/level4';
import { PYTHON_LEVEL_5 } from '@/data/curriculum/python/level5';
import { PYTHON_LEVEL_6 } from '@/data/curriculum/python/level6';
import { PYTHON_LEVEL_7 } from '@/data/curriculum/python/level7';
import { PYTHON_LEVEL_8 } from '@/data/curriculum/python/level8';
import { PYTHON_LEVEL_9 } from '@/data/curriculum/python/level9';
import { PYTHON_LEVEL_10 } from '@/data/curriculum/python/level10';
import { PYTHON_LEVEL_11 } from '@/data/curriculum/python/level11';
import { PYTHON_LEVEL_12 } from '@/data/curriculum/python/level12';
import { PYTHON_LEVEL_13 } from '@/data/curriculum/python/level13';
import { PYTHON_LEVEL_14 } from '@/data/curriculum/python/level14';
import { PYTHON_LEVEL_15 } from '@/data/curriculum/python/level15';
import { PYTHON_LEVEL_16 } from '@/data/curriculum/python/level16';
import { PYTHON_LEVEL_17 } from '@/data/curriculum/python/level17';
import { PYTHON_LEVEL_18 } from '@/data/curriculum/python/level18';
import { PYTHON_LEVEL_19 } from '@/data/curriculum/python/level19';
import { PYTHON_LEVEL_20 } from '@/data/curriculum/python/level20';
import { PYTHON_LEVEL_21 } from '@/data/curriculum/python/level21';
import { PYTHON_LEVEL_22 } from '@/data/curriculum/python/level22';

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

// ============================================================================
// Section 2: 변수, 자료형과 사용자 입력 (Lv 9~14: 13단계 / Lv 15 종합 문제풀이: 10단계)
// ============================================================================
export const PYTHON_BASIC_ROUND_9: PracticeRound = PYTHON_LEVEL_9;
export const PYTHON_BASIC_ROUND_10: PracticeRound = PYTHON_LEVEL_10;
export const PYTHON_BASIC_ROUND_11: PracticeRound = PYTHON_LEVEL_11;
export const PYTHON_BASIC_ROUND_12: PracticeRound = PYTHON_LEVEL_12;
export const PYTHON_BASIC_ROUND_13: PracticeRound = PYTHON_LEVEL_13;
export const PYTHON_BASIC_ROUND_14: PracticeRound = PYTHON_LEVEL_14;
export const PYTHON_BASIC_ROUND_15: PracticeRound = PYTHON_LEVEL_15;

// ============================================================================
// Section 3: 불리언, 논리 연산과 조건문 (Lv 16~21: 13단계 / Lv 22 종합 문제풀이: 10단계)
// ============================================================================
export const PYTHON_BASIC_ROUND_16: PracticeRound = PYTHON_LEVEL_16;
export const PYTHON_BASIC_ROUND_17: PracticeRound = PYTHON_LEVEL_17;
export const PYTHON_BASIC_ROUND_18: PracticeRound = PYTHON_LEVEL_18;
export const PYTHON_BASIC_ROUND_19: PracticeRound = PYTHON_LEVEL_19;
export const PYTHON_BASIC_ROUND_20: PracticeRound = PYTHON_LEVEL_20;
export const PYTHON_BASIC_ROUND_21: PracticeRound = PYTHON_LEVEL_21;
export const PYTHON_BASIC_ROUND_22: PracticeRound = PYTHON_LEVEL_22;

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
  'py-basic-r9': PYTHON_BASIC_ROUND_9,
  'py-basic-r10': PYTHON_BASIC_ROUND_10,
  'py-basic-r11': PYTHON_BASIC_ROUND_11,
  'py-basic-r12': PYTHON_BASIC_ROUND_12,
  'py-basic-r13': PYTHON_BASIC_ROUND_13,
  'py-basic-r14': PYTHON_BASIC_ROUND_14,
  'py-basic-r15': PYTHON_BASIC_ROUND_15,
  'py-basic-r16': PYTHON_BASIC_ROUND_16,
  'py-basic-r17': PYTHON_BASIC_ROUND_17,
  'py-basic-r18': PYTHON_BASIC_ROUND_18,
  'py-basic-r19': PYTHON_BASIC_ROUND_19,
  'py-basic-r20': PYTHON_BASIC_ROUND_20,
  'py-basic-r21': PYTHON_BASIC_ROUND_21,
  'py-basic-r22': PYTHON_BASIC_ROUND_22,
  'python_basic-1': PYTHON_BASIC_ROUND_1,
  'python_basic-2': PYTHON_BASIC_ROUND_2,
  'python_basic-3': PYTHON_BASIC_ROUND_3,
  'python_basic-4': PYTHON_BASIC_ROUND_4,
  'python_basic-5': PYTHON_BASIC_ROUND_5,
  'python_basic-6': PYTHON_BASIC_ROUND_6,
  'python_basic-7': PYTHON_BASIC_ROUND_7,
  'python_basic-8': PYTHON_BASIC_ROUND_8,
  'python_basic-9': PYTHON_BASIC_ROUND_9,
  'python_basic-10': PYTHON_BASIC_ROUND_10,
  'python_basic-11': PYTHON_BASIC_ROUND_11,
  'python_basic-12': PYTHON_BASIC_ROUND_12,
  'python_basic-13': PYTHON_BASIC_ROUND_13,
  'python_basic-14': PYTHON_BASIC_ROUND_14,
  'python_basic-15': PYTHON_BASIC_ROUND_15,
  'python_basic-16': PYTHON_BASIC_ROUND_16,
  'python_basic-17': PYTHON_BASIC_ROUND_17,
  'python_basic-18': PYTHON_BASIC_ROUND_18,
  'python_basic-19': PYTHON_BASIC_ROUND_19,
  'python_basic-20': PYTHON_BASIC_ROUND_20,
  'python_basic-21': PYTHON_BASIC_ROUND_21,
  'python_basic-22': PYTHON_BASIC_ROUND_22,
};

export function getPracticeRound(language: string, roundNumber: number = 1): PracticeRound {
  const norm = language.toLowerCase().replace(/[-]/g, '_');
  if (norm === 'python' || norm === 'python_basic' || norm === 'py_basic') {
    return PRACTICE_ROUNDS[`py-basic-r${roundNumber}`] || PYTHON_BASIC_ROUND_1;
  }
  const key = `${language}-basic-r${roundNumber}`;
  return PRACTICE_ROUNDS[key] || PRACTICE_ROUNDS['py-basic-r1'] || PYTHON_BASIC_ROUND_1;
}
