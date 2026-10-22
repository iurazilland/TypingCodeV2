import { PracticeRound } from './practiceTypes';

// ============================================================================
// 1레벨 (Level 1): print(10)부터 시작하는 순수 사칙연산 마스터 (10단계)
// ============================================================================
export const PYTHON_BASIC_ROUND_1: PracticeRound = {
  id: 'py-basic-r1',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 1,
  title_ko: '1레벨: print() 함수와 사칙연산의 기초',
  title_en: 'Level 1: print() & Basic Arithmetic',
  description_ko: '가장 단순한 숫자 출력부터 시작하여 파이썬 print()문 안에서 사칙연산(+ - * / // %)을 단계별로 정복합니다.',
  totalQuestions: 10,
  questions: [
    // Step 1: print(10)
    {
      id: 1,
      step: 1,
      title: '숫자 10 출력하기',
      prompt_ko: 'print() 함수를 사용해 숫자 10을 출력해보세요.',
      prompt_en: 'Print the number 10 using print().',
      targetCode: 'print(10)',
      expectedOutput: '10',
      hint_ko: '숫자는 따옴표("") 없이 괄호 안에 10을 그대로 적어줍니다.',
      availableBlocks: [
        { id: 'b1-1', label: 'print', codeSnippet: 'print', category: 'keyword' },
        { id: 'b1-2', label: '(', codeSnippet: '(', category: 'syntax' },
        { id: 'b1-3', label: '10', codeSnippet: '10', category: 'number' },
        { id: 'b1-4', label: ')', codeSnippet: ')', category: 'syntax' },
      ],
    },

    // Step 2: print(100)
    {
      id: 2,
      step: 2,
      title: '세 자리 숫자 출력하기',
      prompt_ko: 'print() 함수를 사용해 숫자 100을 출력해보세요.',
      prompt_en: 'Print the number 100 using print().',
      targetCode: 'print(100)',
      expectedOutput: '100',
      hint_ko: 'print(100)을 입력하면 터미널 화면에 100이 그대로 나타납니다.',
      availableBlocks: [
        { id: 'b2-1', label: 'print', codeSnippet: 'print', category: 'keyword' },
        { id: 'b2-2', label: '(', codeSnippet: '(', category: 'syntax' },
        { id: 'b2-3', label: '100', codeSnippet: '100', category: 'number' },
        { id: 'b2-4', label: ')', codeSnippet: ')', category: 'syntax' },
      ],
    },

    // Step 3: Addition (+)
    {
      id: 3,
      step: 3,
      title: '덧셈 연산 (+)',
      prompt_ko: 'print() 안에서 10 + 5의 덧셈 결과를 출력해보세요.',
      prompt_en: 'Print the sum of 10 + 5.',
      targetCode: 'print(10 + 5)',
      expectedOutput: '15',
      hint_ko: '파이썬은 괄호 안의 덧셈 식(10 + 5)을 먼저 계산한 뒤 결과값 15를 출력합니다.',
      availableBlocks: [
        { id: 'b3-1', label: 'print', codeSnippet: 'print', category: 'keyword' },
        { id: 'b3-2', label: '(', codeSnippet: '(', category: 'syntax' },
        { id: 'b3-3', label: '10', codeSnippet: '10', category: 'number' },
        { id: 'b3-4', label: '+', codeSnippet: ' + ', category: 'operator' },
        { id: 'b3-5', label: '5', codeSnippet: '5', category: 'number' },
        { id: 'b3-6', label: ')', codeSnippet: ')', category: 'syntax' },
      ],
    },

    // Step 4: Subtraction (-)
    {
      id: 4,
      step: 4,
      title: '뺄셈 연산 (-)',
      prompt_ko: 'print() 안에서 20 - 8의 뺄셈 결과를 출력해보세요.',
      prompt_en: 'Print the result of 20 - 8.',
      targetCode: 'print(20 - 8)',
      expectedOutput: '12',
      hint_ko: '빼기 기호(-)를 사용하여 두 숫자의 차를 계산합니다.',
      availableBlocks: [
        { id: 'b4-1', label: 'print', codeSnippet: 'print', category: 'keyword' },
        { id: 'b4-2', label: '(', codeSnippet: '(', category: 'syntax' },
        { id: 'b4-3', label: '20', codeSnippet: '20', category: 'number' },
        { id: 'b4-4', label: '-', codeSnippet: ' - ', category: 'operator' },
        { id: 'b4-5', label: '8', codeSnippet: '8', category: 'number' },
        { id: 'b4-6', label: ')', codeSnippet: ')', category: 'syntax' },
      ],
    },

    // Step 5: Multiplication (*)
    {
      id: 5,
      step: 5,
      title: '곱셈 연산 (*)',
      prompt_ko: '파이썬에서는 곱하기 기호로 별표(*)를 사용합니다. 7 * 6의 곱셈 결과를 출력해보세요.',
      prompt_en: 'Print the product of 7 * 6.',
      targetCode: 'print(7 * 6)',
      expectedOutput: '42',
      hint_ko: '키보드에서 Shift + 8을 누르면 곱셈 기호인 별표(*)를 입력할 수 있습니다.',
      availableBlocks: [
        { id: 'b5-1', label: 'print', codeSnippet: 'print', category: 'keyword' },
        { id: 'b5-2', label: '(', codeSnippet: '(', category: 'syntax' },
        { id: 'b5-3', label: '7', codeSnippet: '7', category: 'number' },
        { id: 'b5-4', label: '*', codeSnippet: ' * ', category: 'operator' },
        { id: 'b5-5', label: '6', codeSnippet: '6', category: 'number' },
        { id: 'b5-6', label: ')', codeSnippet: ')', category: 'syntax' },
      ],
    },

    // Step 6: Division (/)
    {
      id: 6,
      step: 6,
      title: '나눗셈 연산 (/)',
      prompt_ko: '파이썬에서는 나누기 기호로 슬래시(/)를 사용합니다. 50 / 2의 나눗셈 결과를 출력해보세요.',
      prompt_en: 'Print the result of 50 / 2.',
      targetCode: 'print(50 / 2)',
      expectedOutput: '25.0',
      hint_ko: '슬래시(/) 나눗셈은 결과를 소수점(실수, 25.0) 형태로 정밀하게 계산해줍니다.',
      availableBlocks: [
        { id: 'b6-1', label: 'print', codeSnippet: 'print', category: 'keyword' },
        { id: 'b6-2', label: '(', codeSnippet: '(', category: 'syntax' },
        { id: 'b6-3', label: '50', codeSnippet: '50', category: 'number' },
        { id: 'b6-4', label: '/', codeSnippet: ' / ', category: 'operator' },
        { id: 'b6-5', label: '2', codeSnippet: '2', category: 'number' },
        { id: 'b6-6', label: ')', codeSnippet: ')', category: 'syntax' },
      ],
    },

    // Step 7: Integer Division (//)
    {
      id: 7,
      step: 7,
      title: '정수 몫 구하기 (//)',
      prompt_ko: '소수점 없이 정수 몫만 깔끔하게 구할 때는 //를 씁니다. 50 // 2의 몫을 출력해보세요.',
      prompt_en: 'Print the integer division 50 // 2.',
      targetCode: 'print(50 // 2)',
      expectedOutput: '25',
      hint_ko: '슬래시를 두 번(//) 쓰면 소수점 뒷자리를 버리고 딱 떨어지는 정수 몫(25)을 구합니다.',
      availableBlocks: [
        { id: 'b7-1', label: 'print', codeSnippet: 'print', category: 'keyword' },
        { id: 'b7-2', label: '(', codeSnippet: '(', category: 'syntax' },
        { id: 'b7-3', label: '50', codeSnippet: '50', category: 'number' },
        { id: 'b7-4', label: '//', codeSnippet: ' // ', category: 'operator' },
        { id: 'b7-5', label: '2', codeSnippet: '2', category: 'number' },
        { id: 'b7-6', label: ')', codeSnippet: ')', category: 'syntax' },
      ],
    },

    // Step 8: Modulo (%)
    {
      id: 8,
      step: 8,
      title: '나머지 구하기 (%)',
      prompt_ko: '나눗셈의 나머지를 구할 때는 퍼센트(%) 기호를 씁니다. 10 % 3의 나머지를 출력해보세요.',
      prompt_en: 'Print the remainder of 10 % 3 using modulo (%).',
      targetCode: 'print(10 % 3)',
      expectedOutput: '1',
      hint_ko: '10을 3으로 나누면 몫은 3이고 나머지는 1입니다. % 기호가 나머지인 1을 찾아줍니다.',
      availableBlocks: [
        { id: 'b8-1', label: 'print', codeSnippet: 'print', category: 'keyword' },
        { id: 'b8-2', label: '(', codeSnippet: '(', category: 'syntax' },
        { id: 'b8-3', label: '10', codeSnippet: '10', category: 'number' },
        { id: 'b8-4', label: '%', codeSnippet: ' % ', category: 'operator' },
        { id: 'b8-5', label: '3', codeSnippet: '3', category: 'number' },
        { id: 'b8-6', label: ')', codeSnippet: ')', category: 'syntax' },
      ],
    },

    // Step 9: Parentheses Precedence ()
    {
      id: 9,
      step: 9,
      title: '괄호()로 덧셈 먼저 계산하기',
      prompt_ko: '곱셈보다 덧셈을 먼저 계산하도록 괄호()를 씌워 (3 + 5) * 2의 연산 결과를 출력해보세요.',
      prompt_en: 'Print (3 + 5) * 2 with parentheses precedence.',
      targetCode: 'print((3 + 5) * 2)',
      expectedOutput: '16',
      hint_ko: '수학과 마찬가지로 괄호 안의 식 (3 + 5 = 8)이 먼저 계산된 후 2를 곱해 16이 됩니다.',
      availableBlocks: [
        { id: 'b9-1', label: 'print', codeSnippet: 'print', category: 'keyword' },
        { id: 'b9-2', label: '(', codeSnippet: '(', category: 'syntax' },
        { id: 'b9-3', label: '(', codeSnippet: '(', category: 'syntax' },
        { id: 'b9-4', label: '3', codeSnippet: '3', category: 'number' },
        { id: 'b9-5', label: '+', codeSnippet: ' + ', category: 'operator' },
        { id: 'b9-6', label: '5', codeSnippet: '5', category: 'number' },
        { id: 'b9-7', label: ')', codeSnippet: ')', category: 'syntax' },
        { id: 'b9-8', label: '*', codeSnippet: ' * ', category: 'operator' },
        { id: 'b9-9', label: '2', codeSnippet: '2', category: 'number' },
        { id: 'b9-10', label: ')', codeSnippet: ')', category: 'syntax' },
      ],
    },

    // Step 10: 1레벨 종합 보스 미션 (복합 사칙연산)
    {
      id: 10,
      step: 10,
      title: '1레벨 마스터: 복합 사칙연산 계산기',
      prompt_ko: '사칙연산을 종합하여 100 - 20 * 4 + 10의 연산 결과를 출력해보세요.',
      prompt_en: 'Print the composite arithmetic 100 - 20 * 4 + 10.',
      targetCode: 'print(100 - 20 * 4 + 10)',
      expectedOutput: '30',
      hint_ko: '곱셈(20 * 4 = 80)이 먼저 계산되고, 100 - 80 + 10이 순서대로 계산되어 30이 출력됩니다.',
      availableBlocks: [
        { id: 'b10-1', label: 'print', codeSnippet: 'print', category: 'keyword' },
        { id: 'b10-2', label: '(', codeSnippet: '(', category: 'syntax' },
        { id: 'b10-3', label: '100', codeSnippet: '100', category: 'number' },
        { id: 'b10-4', label: '-', codeSnippet: ' - ', category: 'operator' },
        { id: 'b10-5', label: '20', codeSnippet: '20', category: 'number' },
        { id: 'b10-6', label: '*', codeSnippet: ' * ', category: 'operator' },
        { id: 'b10-7', label: '4', codeSnippet: '4', category: 'number' },
        { id: 'b10-8', label: '+', codeSnippet: ' + ', category: 'operator' },
        { id: 'b10-9', label: '10', codeSnippet: '10', category: 'number' },
        { id: 'b10-10', label: ')', codeSnippet: ')', category: 'syntax' },
      ],
    },
  ],
};

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
  description_ko: '하나의 print()문 안에서 쉼표(,)를 활용해 여러 숫자와 다양한 사칙연산 수식을 동시에 출력하는 법을 배웁니다.',
  totalQuestions: 10,
  questions: [
    // Step 1: print(10, 20)
    {
      id: 1,
      step: 1,
      title: '두 숫자 나란히 출력하기',
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
      title: '세 개 이상의 숫자 출력하기',
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
      title: '숫자와 덧셈식 함께 출력하기',
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
      title: '숫자와 뺄셈식 함께 출력하기',
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
      title: '덧셈식과 곱셈식 동시 출력',
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
      title: '나눗셈과 몫 비교 출력하기',
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
      title: '두 가지 나머지(%) 연산 비교',
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
      title: '세 가지 사칙연산 동시 출력',
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
      title: '괄호가 들어간 두 수식 비교',
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
      title: '2레벨 마스터: 다중 숫자 & 복합 연산 마스터',
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
};

export function getPracticeRound(language: string, roundNumber: number = 1): PracticeRound {
  const key = `${language}-basic-r${roundNumber}`;
  return PRACTICE_ROUNDS[key] || PRACTICE_ROUNDS['py-basic-r1'] || PYTHON_BASIC_ROUND_1;
}
