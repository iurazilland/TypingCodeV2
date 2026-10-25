import { PracticeRound } from './practiceTypes';
import { PYTHON_LEVEL_1 } from '@/data/curriculum/python/level1';

// ============================================================================
// 1레벨 (Level 1): print() 함수와 숫자의 기초 (10단계: 5블록 + 5타이핑)
// ============================================================================
export const PYTHON_BASIC_ROUND_1: PracticeRound = PYTHON_LEVEL_1;

// ============================================================================
// 2레벨 (Level 2): 쉼표(,)를 이용한 다중 숫자 및 다중 사칙연산 출력 (10단계)
// ============================================================================
export const PYTHON_BASIC_ROUND_2: PracticeRound = {
  id: 'py-basic-r2',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 2,
  title_ko: '2레벨: 쉼표(,)와 여러 수식의 동시 출력',
  title_en: 'Level 2: Commas & Multiple Expressions',
  totalQuestions: 10,
  questions: [
    // Step 1: print(10, 20)
    {
      id: 1,
      step: 1,
      prompt_ko: '쉼표(,)를 사용해 숫자 10과 20을 나란히 출력해보세요.',
      prompt_en: 'Print two numbers 10 and 20 separated by comma.',
      targetCode: 'print(10, 20)',
      expectedOutput: '10 20',
      hint_ko: 'print(10, 20)과 같이 쉼표를 넣으면 파이썬이 자동으로 한 칸 띄워서 출력합니다.',
      availableBlocks: [
        { id: 'r2-1-1', label: 'print', codeSnippet: 'print', category: 'keyword' },
        { id: 'r2-1-2', label: '(', codeSnippet: '(', category: 'syntax' },
        { id: 'r2-1-3', label: '10', codeSnippet: '10', category: 'number' },
        { id: 'r2-1-4', label: ',', codeSnippet: ', ', category: 'syntax' },
        { id: 'r2-1-5', label: '20', codeSnippet: '20', category: 'number' },
        { id: 'r2-1-6', label: ')', codeSnippet: ')', category: 'syntax' },
      ],
    },

    // Step 2: print(1, 2, 3)
    {
      id: 2,
      step: 2,
      prompt_ko: '쉼표로 연결하여 숫자 1, 2, 3을 한 번에 출력해보세요.',
      prompt_en: 'Print three numbers 1, 2, 3 in a single print call.',
      targetCode: 'print(1, 2, 3)',
      expectedOutput: '1 2 3',
      hint_ko: '쉼표는 원하는 만큼 계속 이어붙여 여러 개의 값을 출력할 수 있습니다.',
      availableBlocks: [
        { id: 'r2-2-1', label: 'print', codeSnippet: 'print', category: 'keyword' },
        { id: 'r2-2-2', label: '(', codeSnippet: '(', category: 'syntax' },
        { id: 'r2-2-3', label: '1', codeSnippet: '1', category: 'number' },
        { id: 'r2-2-4', label: ',', codeSnippet: ', ', category: 'syntax' },
        { id: 'r2-2-5', label: '2', codeSnippet: '2', category: 'number' },
        { id: 'r2-2-6', label: ',', codeSnippet: ', ', category: 'syntax' },
        { id: 'r2-2-7', label: '3', codeSnippet: '3', category: 'number' },
        { id: 'r2-2-8', label: ')', codeSnippet: ')', category: 'syntax' },
      ],
    },

    // Step 3: print(10, 10 + 5)
    {
      id: 3,
      step: 3,
      prompt_ko: '숫자 10과 덧셈식 10 + 5의 결과를 쉼표로 구분하여 출력해보세요.',
      prompt_en: 'Print number 10 and calculation 10 + 5 separated by comma.',
      targetCode: 'print(10, 10 + 5)',
      expectedOutput: '10 15',
      hint_ko: 'print(10, 10 + 5)를 넣으면 앞에는 10, 뒤에는 계산된 15가 출력됩니다.',
      availableBlocks: [
        { id: 'r2-3-1', label: 'print', codeSnippet: 'print', category: 'keyword' },
        { id: 'r2-3-2', label: '(', codeSnippet: '(', category: 'syntax' },
        { id: 'r2-3-3', label: '10', codeSnippet: '10', category: 'number' },
        { id: 'r2-3-4', label: ',', codeSnippet: ', ', category: 'syntax' },
        { id: 'r2-3-5', label: '10', codeSnippet: '10', category: 'number' },
        { id: 'r2-3-6', label: '+', codeSnippet: ' + ', category: 'operator' },
        { id: 'r2-3-7', label: '5', codeSnippet: '5', category: 'number' },
        { id: 'r2-3-8', label: ')', codeSnippet: ')', category: 'syntax' },
      ],
    },

    // Step 4: print(100, 100 - 25)
    {
      id: 4,
      step: 4,
      prompt_ko: '숫자 100과 뺄셈식 100 - 25의 결과를 함께 출력해보세요.',
      prompt_en: 'Print 100 and 100 - 25 separated by comma.',
      targetCode: 'print(100, 100 - 25)',
      expectedOutput: '100 75',
      hint_ko: '100과 뺄셈 계산 결과인 75가 나란히 출력됩니다.',
      availableBlocks: [
        { id: 'r2-4-1', label: 'print', codeSnippet: 'print', category: 'keyword' },
        { id: 'r2-4-2', label: '(', codeSnippet: '(', category: 'syntax' },
        { id: 'r2-4-3', label: '100', codeSnippet: '100', category: 'number' },
        { id: 'r2-4-4', label: ',', codeSnippet: ', ', category: 'syntax' },
        { id: 'r2-4-5', label: '100', codeSnippet: '100', category: 'number' },
        { id: 'r2-4-6', label: '-', codeSnippet: ' - ', category: 'operator' },
        { id: 'r2-4-7', label: '25', codeSnippet: '25', category: 'number' },
        { id: 'r2-4-8', label: ')', codeSnippet: ')', category: 'syntax' },
      ],
    },

    // Step 5: print(10 + 2, 20 * 2)
    {
      id: 5,
      step: 5,
      prompt_ko: '10 + 2와 20 * 2의 두 가지 연산 결과를 한 번에 출력해보세요.',
      prompt_en: 'Print two expressions 10 + 2 and 20 * 2.',
      targetCode: 'print(10 + 2, 20 * 2)',
      expectedOutput: '12 40',
      hint_ko: '각각의 수식이 독립적으로 계산되어 12와 40이 나란히 출력됩니다.',
      availableBlocks: [
        { id: 'r2-5-1', label: 'print', codeSnippet: 'print', category: 'keyword' },
        { id: 'r2-5-2', label: '(', codeSnippet: '(', category: 'syntax' },
        { id: 'r2-5-3', label: '10', codeSnippet: '10', category: 'number' },
        { id: 'r2-5-4', label: '+', codeSnippet: ' + ', category: 'operator' },
        { id: 'r2-5-5', label: '2', codeSnippet: '2', category: 'number' },
        { id: 'r2-5-6', label: ',', codeSnippet: ', ', category: 'syntax' },
        { id: 'r2-5-7', label: '20', codeSnippet: '20', category: 'number' },
        { id: 'r2-5-8', label: '*', codeSnippet: ' * ', category: 'operator' },
        { id: 'r2-5-9', label: '2', codeSnippet: '2', category: 'number' },
        { id: 'r2-5-10', label: ')', codeSnippet: ')', category: 'syntax' },
      ],
    },

    // Step 6: print(20 / 4, 50 // 6)
    {
      id: 6,
      step: 6,
      prompt_ko: '20 / 4의 실수 나눗셈과 50 // 6의 정수 몫을 쉼표로 출력해보세요.',
      prompt_en: 'Print division 20 / 4 and integer division 50 // 6.',
      targetCode: 'print(20 / 4, 50 // 6)',
      expectedOutput: '5.0 8',
      hint_ko: '앞의 20 / 4는 5.0(실수), 뒤의 50 // 6은 8(정수 몫)로 계산됩니다.',
      availableBlocks: [
        { id: 'r2-6-1', label: 'print', codeSnippet: 'print', category: 'keyword' },
        { id: 'r2-6-2', label: '(', codeSnippet: '(', category: 'syntax' },
        { id: 'r2-6-3', label: '20', codeSnippet: '20', category: 'number' },
        { id: 'r2-6-4', label: '/', codeSnippet: ' / ', category: 'operator' },
        { id: 'r2-6-5', label: '4', codeSnippet: '4', category: 'number' },
        { id: 'r2-6-6', label: ',', codeSnippet: ', ', category: 'syntax' },
        { id: 'r2-6-7', label: '50', codeSnippet: '50', category: 'number' },
        { id: 'r2-6-8', label: '//', codeSnippet: ' // ', category: 'operator' },
        { id: 'r2-6-9', label: '6', codeSnippet: '6', category: 'number' },
        { id: 'r2-6-10', label: ')', codeSnippet: ')', category: 'syntax' },
      ],
    },

    // Step 7: print(10 % 3, 20 % 7)
    {
      id: 7,
      step: 7,
      prompt_ko: '10 % 3과 20 % 7의 나머지 연산 결과를 한 줄에 출력해보세요.',
      prompt_en: 'Print remainders of 10 % 3 and 20 % 7.',
      targetCode: 'print(10 % 3, 20 % 7)',
      expectedOutput: '1 6',
      hint_ko: '10을 3으로 나눈 나머지 1과, 20을 7로 나눈 나머지 6이 출력됩니다.',
      availableBlocks: [
        { id: 'r2-7-1', label: 'print', codeSnippet: 'print', category: 'keyword' },
        { id: 'r2-7-2', label: '(', codeSnippet: '(', category: 'syntax' },
        { id: 'r2-7-3', label: '10', codeSnippet: '10', category: 'number' },
        { id: 'r2-7-4', label: '%', codeSnippet: ' % ', category: 'operator' },
        { id: 'r2-7-5', label: '3', codeSnippet: '3', category: 'number' },
        { id: 'r2-7-6', label: ',', codeSnippet: ', ', category: 'syntax' },
        { id: 'r2-7-7', label: '20', codeSnippet: '20', category: 'number' },
        { id: 'r2-7-8', label: '%', codeSnippet: ' % ', category: 'operator' },
        { id: 'r2-7-9', label: '7', codeSnippet: '7', category: 'number' },
        { id: 'r2-7-10', label: ')', codeSnippet: ')', category: 'syntax' },
      ],
    },

    // Step 8: print(1 + 2, 3 * 4, 10 - 5)
    {
      id: 8,
      step: 8,
      prompt_ko: '1 + 2, 3 * 4, 10 - 5 세 가지 사칙연산 식을 쉼표로 연결해 출력해보세요.',
      prompt_en: 'Print three operations: 1 + 2, 3 * 4, and 10 - 5.',
      targetCode: 'print(1 + 2, 3 * 4, 10 - 5)',
      expectedOutput: '3 12 5',
      hint_ko: '덧셈(3), 곱셈(12), 뺄셈(5)이 쉼표 간격으로 나란히 출력됩니다.',
      availableBlocks: [
        { id: 'r2-8-1', label: 'print', codeSnippet: 'print', category: 'keyword' },
        { id: 'r2-8-2', label: '(', codeSnippet: '(', category: 'syntax' },
        { id: 'r2-8-3', label: '1', codeSnippet: '1', category: 'number' },
        { id: 'r2-8-4', label: '+', codeSnippet: ' + ', category: 'operator' },
        { id: 'r2-8-5', label: '2', codeSnippet: '2', category: 'number' },
        { id: 'r2-8-6', label: ',', codeSnippet: ', ', category: 'syntax' },
        { id: 'r2-8-7', label: '3', codeSnippet: '3', category: 'number' },
        { id: 'r2-8-8', label: '*', codeSnippet: ' * ', category: 'operator' },
        { id: 'r2-8-9', label: '4', codeSnippet: '4', category: 'number' },
        { id: 'r2-8-10', label: ',', codeSnippet: ', ', category: 'syntax' },
        { id: 'r2-8-11', label: '10', codeSnippet: '10', category: 'number' },
        { id: 'r2-8-12', label: '-', codeSnippet: ' - ', category: 'operator' },
        { id: 'r2-8-13', label: '5', codeSnippet: '5', category: 'number' },
        { id: 'r2-8-14', label: ')', codeSnippet: ')', category: 'syntax' },
      ],
    },

    // Step 9: print((2 + 3) * 4, 100 / (2 + 3))
    {
      id: 9,
      step: 9,
      prompt_ko: '(2 + 3) * 4와 100 / (2 + 3)의 계산 결과를 한 줄에 출력해보세요.',
      prompt_en: 'Print (2 + 3) * 4 and 100 / (2 + 3).',
      targetCode: 'print((2 + 3) * 4, 100 / (2 + 3))',
      expectedOutput: '20 20.0',
      hint_ko: '앞은 (5 * 4 = 20), 뒤는 (100 / 5 = 20.0)으로 계산되어 출력됩니다.',
      availableBlocks: [
        { id: 'r2-9-1', label: 'print', codeSnippet: 'print', category: 'keyword' },
        { id: 'r2-9-2', label: '(', codeSnippet: '(', category: 'syntax' },
        { id: 'r2-9-3', label: '(', codeSnippet: '(', category: 'syntax' },
        { id: 'r2-9-4', label: '2', codeSnippet: '2', category: 'number' },
        { id: 'r2-9-5', label: '+', codeSnippet: ' + ', category: 'operator' },
        { id: 'r2-9-6', label: '3', codeSnippet: '3', category: 'number' },
        { id: 'r2-9-7', label: ')', codeSnippet: ')', category: 'syntax' },
        { id: 'r2-9-8', label: '*', codeSnippet: ' * ', category: 'operator' },
        { id: 'r2-9-9', label: '4', codeSnippet: '4', category: 'number' },
        { id: 'r2-9-10', label: ',', codeSnippet: ', ', category: 'syntax' },
        { id: 'r2-9-11', label: '100', codeSnippet: '100', category: 'number' },
        { id: 'r2-9-12', label: '/', codeSnippet: ' / ', category: 'operator' },
        { id: 'r2-9-13', label: '(', codeSnippet: '(', category: 'syntax' },
        { id: 'r2-9-14', label: '2', codeSnippet: '2', category: 'number' },
        { id: 'r2-9-15', label: '+', codeSnippet: ' + ', category: 'operator' },
        { id: 'r2-9-16', label: '3', codeSnippet: '3', category: 'number' },
        { id: 'r2-9-17', label: ')', codeSnippet: ')', category: 'syntax' },
        { id: 'r2-9-18', label: ')', codeSnippet: ')', category: 'syntax' },
      ],
    },

    // Step 10: 2레벨 마스터!
    {
      id: 10,
      step: 10,
      prompt_ko: '10, 20 + 30, 40 * 2, 100 - 10의 네 가지 숫자 및 연산식을 한 번에 출력해보세요.',
      prompt_en: 'Print 10, 20 + 30, 40 * 2, and 100 - 10 in one line.',
      targetCode: 'print(10, 20 + 30, 40 * 2, 100 - 10)',
      expectedOutput: '10 50 80 90',
      hint_ko: '쉼표로 네 개의 값(단일 숫자, 덧셈, 곱셈, 뺄셈)을 연결하면 10 50 80 90이 한 번에 출력됩니다.',
      availableBlocks: [
        { id: 'r2-10-1', label: 'print', codeSnippet: 'print', category: 'keyword' },
        { id: 'r2-10-2', label: '(', codeSnippet: '(', category: 'syntax' },
        { id: 'r2-10-3', label: '10', codeSnippet: '10', category: 'number' },
        { id: 'r2-10-4', label: ',', codeSnippet: ', ', category: 'syntax' },
        { id: 'r2-10-5', label: '20', codeSnippet: '20', category: 'number' },
        { id: 'r2-10-6', label: '+', codeSnippet: ' + ', category: 'operator' },
        { id: 'r2-10-7', label: '30', codeSnippet: '30', category: 'number' },
        { id: 'r2-10-8', label: ',', codeSnippet: ', ', category: 'syntax' },
        { id: 'r2-10-9', label: '40', codeSnippet: '40', category: 'number' },
        { id: 'r2-10-10', label: '*', codeSnippet: ' * ', category: 'operator' },
        { id: 'r2-10-11', label: '2', codeSnippet: '2', category: 'number' },
        { id: 'r2-10-12', label: ',', codeSnippet: ', ', category: 'syntax' },
        { id: 'r2-10-13', label: '100', codeSnippet: '100', category: 'number' },
        { id: 'r2-10-14', label: '-', codeSnippet: ' - ', category: 'operator' },
        { id: 'r2-10-15', label: '10', codeSnippet: '10', category: 'number' },
        { id: 'r2-10-16', label: ')', codeSnippet: ')', category: 'syntax' },
      ],
    },
  ],
};

// Map of rounds by language and round number
export const PRACTICE_ROUNDS: Record<string, PracticeRound> = {
  'py-basic-r1': PYTHON_BASIC_ROUND_1,
  'py-basic-r2': PYTHON_BASIC_ROUND_2,
  'python_basic-1': PYTHON_BASIC_ROUND_1,
  'python_basic-2': PYTHON_BASIC_ROUND_2,
};

export function getPracticeRound(language: string, roundNumber: number = 1): PracticeRound {
  const norm = language.toLowerCase().replace(/[-]/g, '_');
  if (norm === 'python' || norm === 'python_basic' || norm === 'py_basic') {
    return PRACTICE_ROUNDS[`py-basic-r${roundNumber}`] || PYTHON_BASIC_ROUND_1;
  }
  const key = `${language}-basic-r${roundNumber}`;
  return PRACTICE_ROUNDS[key] || PRACTICE_ROUNDS['py-basic-r1'] || PYTHON_BASIC_ROUND_1;
}
