import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 4레벨: 수식 출력과 나머지(%)의 실전 활용 (13단계)
// - [1~10단계] 블록 ➔ 타이핑 1:1 교차 5쌍 (짝수 타이핑 스포일러 제로)
// - [11단계] 틀린 곳 수정 (fix_bug)
// - [12단계] 예제 아래 한 줄 추가 작성 (one_line)
// - [13단계] 출력 결과 예측 선택 (predict_output)
// ============================================================================
export const PYTHON_LEVEL_4: PracticeRound = {
  id: 'py-basic-r4',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 4,
  title_ko: '4레벨: 수식 출력과 나머지(%)의 실전 활용',
  title_en: 'Level 4: Formula Printing & Modulo Usage',
  totalQuestions: 13,
  unlockedBlocks: ['print'],
  questions: [
    // ------------------------------------------------------------------------
    // 페어 1: 문자열 수식 출력 (계산되지 않음)
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      kind: 'standard',
      prompt_ko: '따옴표를 사용해 문자열 "3 + 5"를 넣어 화면에 출력해보세요.',
      prompt_en: 'Use quotes to insert the string "3 + 5" and print it on the screen.',
      hint_ko: '따옴표 안에 "3 + 5"를 적으면 덧셈이 계산되지 않고 글자 그대로 출력됩니다.',
      hint_en: 'Writing an expression inside quotes outputs "3 + 5" literally without evaluating it.',
      targetCode: 'print("3 + 5")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '3 + 5',
        },
      ],
    },
    {
      id: 2,
      step: 2,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸을 채워 실행 결과가 3 x 7 = 21이 되도록 앞쪽 수식 설명을 완성해보세요.',
      prompt_en: 'Fill in the blank with the formula label so that the output becomes 3 x 7 = 21.',
      hint_ko: '계산되지 않고 글자 그대로 보여야 하므로 따옴표를 포함한 "3 x 7 ="을 빈칸에 입력하세요.',
      hint_en: 'Type "3 x 7 =" enclosed in quotes into the blank.',
      templateCode: 'print(§§§§§§§§§, 3*7)',
      targetCode: 'print("3 x 7 =", 3*7)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '3 x 7 = 21',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 페어 2: 수식 라벨과 계산 동시 출력
    // ------------------------------------------------------------------------
    {
      id: 3,
      step: 3,
      type: 'block',
      kind: 'standard',
      prompt_ko: '쉼표(,)를 사용해 "3 + 5 =", 3+5를 넣어 계산식과 결과를 동시에 출력해보세요.',
      prompt_en: 'Use a comma (,) to insert "3 + 5 =", 3+5 and print both the formula and result.',
      hint_ko: 'print() 괄호 안에 "3 + 5 =", 3+5를 입력하면 "3 + 5 = 8"로 한 줄에 출력됩니다.',
      hint_en: 'Entering "3 + 5 =", 3+5 outputs "3 + 5 = 8" on a single line.',
      targetCode: 'print("3 + 5 =", 3+5)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '3 + 5 = 8',
        },
      ],
    },
    {
      id: 4,
      step: 4,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 알맞은 계산식을 채워 7 + 8 = 15가 출력되도록 해보세요.',
      prompt_en: 'Fill in the blank with the calculation expression so 7 + 8 = 15 is printed.',
      hint_ko: '쉼표 뒤의 빈칸에는 따옴표 없이 실제 덧셈식 7+8을 입력하세요.',
      hint_en: 'Type 7+8 without quotes in the blank after the comma.',
      templateCode: 'print("7 + 8 =", §§§)',
      targetCode: 'print("7 + 8 =", 7+8)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '7 + 8 = 15',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 페어 3: 나머지(%)의 실전 활용 (짝수 판별)
    // ------------------------------------------------------------------------
    {
      id: 5,
      step: 5,
      type: 'block',
      kind: 'standard',
      prompt_ko: '나머지 연산자(%)를 사용해 10%2를 넣어 짝수(0)인지 확인해보세요.',
      prompt_en: 'Use the modulo operator (%) to insert 10%2 and check if it is even (0).',
      hint_ko: 'print() 괄호 안에 10%2를 입력하세요. 2로 나눈 나머지가 0이면 그 수는 짝수입니다.',
      hint_en: '10%2 produces 0. A remainder of 0 when divided by 2 confirms the number is even.',
      targetCode: 'print(10%2)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '0',
        },
      ],
    },
    {
      id: 6,
      step: 6,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸에 나머지 연산자를 채워 8을 2로 나눈 나머지가 0(짝수)임을 확인하는 식과 결과를 출력해보세요.',
      prompt_en: 'Fill in the modulo operator in both blanks to print the even-number check expression and its result (0).',
      hint_ko: '설명 라벨 안과 쉼표 뒤 계산식의 두 빈칸 모두에 나머지 연산자인 퍼센트(%) 기호를 입력하세요.',
      hint_en: 'Type the modulo operator (%) in both blanks.',
      templateCode: 'print("8 § 2 =", 8§2)',
      targetCode: 'print("8 % 2 =", 8%2)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '8 % 2 = 0',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 페어 4: 구구단 라벨과 곱셈 연산자(*)
    // ------------------------------------------------------------------------
    {
      id: 7,
      step: 7,
      type: 'block',
      kind: 'standard',
      prompt_ko: '쉼표(,)를 사용해 "2 x 3 =", 2*3을 넣어 구구단 결과를 출력해보세요.',
      prompt_en: 'Use a comma (,) to insert "2 x 3 =", 2*3 and print the multiplication result.',
      hint_ko: 'print() 괄호 안에 "2 x 3 =", 2*3을 입력하세요. "2 x 3 = 6"이 출력됩니다.',
      hint_en: 'Use "2 x 3 =", 2*3 inside print() to evaluate and print "2 x 3 = 6".',
      targetCode: 'print("2 x 3 =", 2*3)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '2 x 3 = 6',
        },
      ],
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 곱셈 연산자를 사용해 구구단 결과(4 x 5 = 20)를 완성해보세요.',
      prompt_en: 'Use the multiplication operator in the blank to complete 4 x 5 = 20.',
      hint_ko: '4와 5 사이의 빈칸에 파이썬 곱셈 기호인 별표(*)를 입력하세요.',
      hint_en: 'Enter the asterisk (*) multiplication operator into the blank between 4 and 5.',
      templateCode: 'print("4 x 5 =", 4§5)',
      targetCode: 'print("4 x 5 =", 4*5)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '4 x 5 = 20',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 페어 5: 몫(Quotient)과 나머지(Remainder) 라벨 동시 출력
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'block',
      kind: 'standard',
      prompt_ko: '쉼표(,)를 사용해 몫과 나머지를 나타내는 "Quotient:", 20//3, "Remainder:", 20%3을 넣어 한 줄에 출력해보세요.',
      prompt_en: 'Use commas (,) to insert "Quotient:", 20//3, "Remainder:", 20%3 and print them on one line.',
      hint_ko: 'print() 괄호 안에 "Quotient:", 20//3, "Remainder:", 20%3을 입력하면 "Quotient: 6 Remainder: 2"가 출력됩니다.',
      hint_en: 'Enter "Quotient:", 20//3, "Remainder:", 20%3 to print "Quotient: 6 Remainder: 2".',
      targetCode: 'print("Quotient:", 20//3, "Remainder:", 20%3)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Quotient: 6 Remainder: 2',
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸에 각각 몫과 나머지 연산자를 채워 계산 결과(Quotient: 4 Remainder: 2)를 완성해보세요.',
      prompt_en: 'Fill in the floor division and modulo operators into the blanks to complete the result (Quotient: 4 Remainder: 2).',
      hint_ko: '첫 번째 빈칸에는 몫 연산자(//), 두 번째 빈칸에는 나머지 연산자(%)를 입력하세요.',
      hint_en: 'Enter floor division (//) in the first blank and modulo (%) in the second blank.',
      templateCode: 'print("Quotient:", 14§§3, "Remainder:", 14§3)',
      targetCode: 'print("Quotient:", 14//3, "Remainder:", 14%3)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Quotient: 4 Remainder: 2',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 11~13단계: 실전 응용 3유형 (틀린 곳 수정 / 한 줄 추가 / 출력 결과 선택)
    // ------------------------------------------------------------------------
    {
      id: 11,
      step: 11,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '틀린 곳을 수정하여 구구단 계산 결과(5 x 6 = 30)가 오류 없이 출력되도록 해보세요.',
      prompt_en: 'Fix the error so that the multiplication result (5 x 6 = 30) prints without an error.',
      hint_ko: '따옴표 안의 설명에는 알파벳 x를 쓸 수 있지만, 쉼표 뒤의 실제 계산식에서는 곱셈 기호(*)를 사용해야 합니다.',
      hint_en: 'Inside quotes you can write x, but the actual expression after the comma must use the asterisk (*) operator.',
      templateCode: 'print("5 x 6 =", 5x6)',
      targetCode: 'print("5 x 6 =", 5*6)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '5 x 6 = 30',
        },
      ],
    },
    {
      id: 12,
      step: 12,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '예제 코드 아래에 한 줄을 추가하여 라벨과 15를 2로 나눈 나머지를 연결한 15 -> 1을 출력해보세요.',
      prompt_en: 'Type the example code and add a line below to print the label and remainder of 15 divided by 2 as 15 -> 1.',
      hint_ko: '첫째 줄 예제를 입력하고 Enter를 누른 뒤, 둘째 줄에 print("15 ->", 15%2)를 입력하세요.',
      hint_en: 'Type the first line example, press Enter, and write print("15 ->", 15%2) on the second line.',
      templateCode: 'print("10 ->", 10%2)\n§§§§§§§§§§§§§§§§§§§§',
      targetCode: 'print("10 ->", 10%2)\nprint("15 ->", 15%2)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '10 -> 0\n15 -> 1',
        },
      ],
    },
    {
      id: 13,
      step: 13,
      type: 'quiz',
      kind: 'predict_output',
      prompt_ko: '다음 파이썬 코드를 실행했을 때 화면에 출력될 올바른 결과를 선택해보세요.',
      prompt_en: 'Select the exact output that will be printed when the following Python code runs.',
      hint_ko: '9를 2로 나누면 몫(//)은 4이고 나머지(%)는 1입니다. 첫째 줄과 둘째 줄의 연산자 순서를 주의 깊게 살펴보세요.',
      hint_en: '9 divided by 2 gives quotient (//) 4 and remainder (%) 1. Check the operator on each line carefully.',
      targetCode: 'print("9 % 2 =", 9%2)\nprint("9 // 2 =", 9//2)',
      choices: [
        '9 % 2 = 4\n9 // 2 = 1',
        '9 % 2 = 1\n9 // 2 = 4.5',
        '9 = 1\n4 = 4',
        '9 % 2 = 1\n9 // 2 = 4',
      ],
      correctChoiceIndex: 3,
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '9 % 2 = 1\n9 // 2 = 4',
        },
      ],
    },
  ],
};
