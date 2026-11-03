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
      prompt_ko: '빈칸에 따옴표 문자열을 채워 계산식 없이 3 + 5 = 8을 그대로 출력해보세요.',
      prompt_en: 'Fill in the blank with a quoted string to print 3 + 5 = 8 directly without a calculation.',
      hint_ko: '계산하지 않고 화면에 보일 문장 전체를 따옴표 한 쌍 안에 그대로 넣어보세요.',
      hint_en: 'Enclose the entire text to display inside a single pair of quotes.',
      templateCode: 'print(§§§§§§§§§§§)',
      targetCode: 'print("3 + 5 = 8")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '3 + 5 = 8',
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
      hint_ko: '파이썬이 직접 계산한 결과를 출력하도록 쉼표 뒤에는 따옴표 없이 두 수의 덧셈식을 적어보세요.',
      hint_en: 'Write the addition expression without quotes after the comma so Python evaluates it.',
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
      prompt_ko: '어떤 수를 2로 나눈 나머지가 0이면 짝수임을 확인할 수 있습니다. print()에 10%2를 넣어 결과를 출력해보세요.',
      prompt_en: 'If the remainder when divided by 2 is 0, the number is even. Insert 10%2 into print() to check the result.',
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
    // 페어 4: 나머지(%)의 실전 활용 (10으로 나눈 나머지로 일의 자리 숫자 추출)
    // ------------------------------------------------------------------------
    {
      id: 7,
      step: 7,
      type: 'block',
      kind: 'standard',
      prompt_ko: '어떤 수를 10으로 나눈 나머지는 일의 자리 숫자가 됩니다. 쉼표(,)를 사용해 "Last digit:", 47%10을 출력해보세요.',
      prompt_en: 'The remainder when divided by 10 gives the last digit. Use a comma (,) to print "Last digit:", 47%10.',
      hint_ko: 'print() 괄호 안에 "Last digit:", 47%10을 입력하면 47의 일의 자리 숫자인 "Last digit: 7"이 출력됩니다.',
      hint_en: 'Enter "Last digit:", 47%10 inside print() to output "Last digit: 7".',
      targetCode: 'print("Last digit:", 47%10)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Last digit: 7',
        },
      ],
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 나머지 연산식을 채워 128의 일의 자리 숫자인 Last digit: 8이 출력되도록 해보세요.',
      prompt_en: 'Fill in the blank with a modulo expression so the last digit of 128 prints as Last digit: 8.',
      hint_ko: '십진수에서 일의 자리 숫자만 남기려면 그 수를 10으로 나눈 나머지를 구하는 식을 작성해보세요.',
      hint_en: 'To extract the ones digit in base 10, write an expression that finds the remainder when divided by 10.',
      templateCode: 'print("Last digit:", §§§§§§)',
      targetCode: 'print("Last digit:", 128%10)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Last digit: 8',
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
      prompt_ko: '예제 코드 아래에 한 줄을 추가하여 라벨과 15를 2로 나눈 나머지를 연결한 Remainder: 1을 출력해보세요.',
      prompt_en: 'Type the example code and add a line below to print the label and remainder of 15 divided by 2 as Remainder: 1.',
      hint_ko: '첫째 줄 예제의 라벨과 나머지 연산 구조를 그대로 활용하되 나누어지는 수만 15로 바꾸어 작성해보세요.',
      hint_en: 'Follow the label and modulo structure of line 1, changing the dividend to 15.',
      templateCode: 'print("Remainder:", 10%2)\n§§§§§§§§§§§§§§§§§§§§§§§§§',
      targetCode: 'print("Remainder:", 10%2)\nprint("Remainder:", 15%2)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Remainder: 0\nRemainder: 1',
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
      hint_ko: '첫째 줄은 나눈 뒤 남는 나머지를 구하는 연산이고, 둘째 줄은 소수점을 버린 정수 몫을 구하는 연산입니다.',
      hint_en: 'Line 1 calculates the remainder after division, while line 2 calculates the integer quotient.',
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
