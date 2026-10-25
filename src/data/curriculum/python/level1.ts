import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 1레벨: print() 함수와 숫자의 기초 (10단계)
// - 1~5단계: 코드블록 모드 (Block Mode)
// - 6~10단계: 직접 타이핑 모드 (Typing Mode)
// - 듀오링고식 점진적 누적 복습 (Cumulative Review)
// ============================================================================
export const PYTHON_LEVEL_1: PracticeRound = {
  id: 'py-basic-r1',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 1,
  title_ko: '1레벨: print() 함수와 숫자 출력',
  title_en: 'Level 1: print() & Numbers',
  description_ko: 'print() 함수를 사용해 숫자를 화면에 출력하는 기본기를 완성합니다. 블록으로 먼저 개념을 잡고 직접 타이핑하며 체득합니다.',
  totalQuestions: 10,
  questions: [
    // ------------------------------------------------------------------------
    // [블록 모드] 1~5단계
    // ------------------------------------------------------------------------
    // Step 1: print(10)
    {
      id: 1,
      step: 1,
      type: 'block',
      title: '숫자 10 출력하기',
      prompt_ko: 'print() 블록을 시작 블록 아래에 연결하고, 숫자 10을 입력하여 화면에 10을 출력해보세요.',
      prompt_en: 'Attach the print() block and print the number 10.',
      targetCode: 'print(10)',
      expectedOutput: '10',
      hint_ko: '도구 상자에서 print() 블록을 드래그하여 실행 블록 하단에 붙인 뒤, 입력창에 10을 적어보세요.',
      availableBlocks: [
        { id: 'b1-1', label: 'print', codeSnippet: 'print', category: 'keyword' },
        { id: 'b1-2', label: '10', codeSnippet: '10', category: 'number' },
      ],
    },

    // Step 2: print(5)
    {
      id: 2,
      step: 2,
      type: 'block',
      title: '한 자리 숫자 5 출력하기',
      prompt_ko: 'print() 블록을 사용해 숫자 5를 출력해보세요.',
      prompt_en: 'Print the number 5 using print().',
      targetCode: 'print(5)',
      expectedOutput: '5',
      hint_ko: 'print() 블록의 입력창에 숫자 5를 입력하면 터미널에 5가 나타납니다.',
      availableBlocks: [
        { id: 'b2-1', label: 'print', codeSnippet: 'print', category: 'keyword' },
        { id: 'b2-2', label: '5', codeSnippet: '5', category: 'number' },
      ],
    },

    // Step 3: print(100)
    {
      id: 3,
      step: 3,
      type: 'block',
      title: '세 자리 큰 숫자 100 출력하기',
      prompt_ko: 'print() 블록을 사용해 세 자리 숫자 100을 출력해보세요.',
      prompt_en: 'Print the number 100 using print().',
      targetCode: 'print(100)',
      expectedOutput: '100',
      hint_ko: '숫자는 따옴표("") 없이 100을 그대로 적어줍니다.',
      availableBlocks: [
        { id: 'b3-1', label: 'print', codeSnippet: 'print', category: 'keyword' },
        { id: 'b3-2', label: '100', codeSnippet: '100', category: 'number' },
      ],
    },

    // Step 4: print(0)
    {
      id: 4,
      step: 4,
      type: 'block',
      title: '숫자 0 출력하기',
      prompt_ko: 'print() 블록을 사용해 숫자 0을 출력해보세요.',
      prompt_en: 'Print the number 0 using print().',
      targetCode: 'print(0)',
      expectedOutput: '0',
      hint_ko: '0 역시 파이썬에서 매우 중요한 정수 숫자입니다. print(0)을 만들어보세요.',
      availableBlocks: [
        { id: 'b4-1', label: 'print', codeSnippet: 'print', category: 'keyword' },
        { id: 'b4-2', label: '0', codeSnippet: '0', category: 'number' },
      ],
    },

    // Step 5: print(7) (누적 복습 & 블록 모드 마스터)
    {
      id: 5,
      step: 5,
      type: 'block',
      title: '블록 모드 마스터: 행운의 숫자 7 출력하기',
      prompt_ko: '앞서 배운 방식을 복습하며, print() 블록으로 숫자 7을 출력해보세요.',
      prompt_en: 'Master block mode: Print the number 7 using print().',
      targetCode: 'print(7)',
      expectedOutput: '7',
      hint_ko: 'print() 블록을 붙이고 7을 입력하면 1~5단계 블록 모드가 완성됩니다!',
      availableBlocks: [
        { id: 'b5-1', label: 'print', codeSnippet: 'print', category: 'keyword' },
        { id: 'b5-2', label: '7', codeSnippet: '7', category: 'number' },
      ],
    },

    // ------------------------------------------------------------------------
    // [타이핑 모드] 6~10단계
    // ------------------------------------------------------------------------
    // Step 6: print(10) 타이핑
    {
      id: 6,
      step: 6,
      type: 'typing',
      title: '키보드로 print(10) 직접 타이핑하기',
      prompt_ko: '이제 블록 대신 키보드로 직접 print(10)을 타이핑하여 숫자 10을 출력해보세요.',
      prompt_en: 'Type print(10) directly on your keyboard to print the number 10.',
      targetCode: 'print(10)',
      blankToken: '10',
      expectedOutput: '10',
      hint_ko: '키보드로 소문자 print를 치고 괄호 안에 10을 적어줍니다: print(10)',
    },

    // Step 7: print(5) 타이핑
    {
      id: 7,
      step: 7,
      type: 'typing',
      title: '키보드로 print(5) 직접 타이핑하기',
      prompt_ko: '키보드로 직접 print(5)를 입력하여 숫자 5를 출력해보세요.',
      prompt_en: 'Type print(5) directly to print the number 5.',
      targetCode: 'print(5)',
      blankToken: '5',
      expectedOutput: '5',
      hint_ko: 'print(5)를 입력하고 실행 결과를 확인해보세요.',
    },

    // Step 8: print(100) 타이핑
    {
      id: 8,
      step: 8,
      type: 'typing',
      title: '키보드로 print(100) 직접 타이핑하기',
      prompt_ko: '키보드로 직접 print(100)을 입력하여 숫자 100을 출력해보세요.',
      prompt_en: 'Type print(100) directly to print the number 100.',
      targetCode: 'print(100)',
      blankToken: '100',
      expectedOutput: '100',
      hint_ko: '소문자 print와 여는 괄호 (, 숫자 100, 닫는 괄호 )를 순서대로 입력합니다.',
    },

    // Step 9: print(0) 타이핑
    {
      id: 9,
      step: 9,
      type: 'typing',
      title: '키보드로 print(0) 직접 타이핑하기',
      prompt_ko: '키보드로 직접 print(0)을 입력하여 숫자 0을 출력해보세요.',
      prompt_en: 'Type print(0) directly to print the number 0.',
      targetCode: 'print(0)',
      blankToken: '0',
      expectedOutput: '0',
      hint_ko: 'print(0)을 입력합니다. 소문자 print와 괄호를 주의하세요.',
    },

    // Step 10: print(77) 타이핑 (1레벨 최종 마스터)
    {
      id: 10,
      step: 10,
      type: 'typing',
      title: '1레벨 마스터: 두 자리 숫자 77 타이핑하기',
      prompt_ko: '1레벨의 모든 내용을 종합 복습하며, 키보드로 직접 print(77)을 입력해보세요.',
      prompt_en: 'Level 1 Master: Type print(77) to complete the level.',
      targetCode: 'print(77)',
      blankToken: '77',
      expectedOutput: '77',
      hint_ko: 'print(77)을 입력하면 1레벨(블록 5문제 + 타이핑 5문제)을 완벽히 마스터합니다!',
    },
  ],
};
