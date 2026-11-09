import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 2레벨: 몫(//), 나머지(%), 거듭제곱(**)과 쉼표(,) (13단계)
// - [1~10단계] 블록 ➔ 타이핑 1:1 교차 5쌍 (짝수 타이핑 스포일러 제로)
// - [11단계] 틀린 곳 수정 (fix_bug)
// - [12단계] 예제 아래 한 줄 추가 작성 (one_line)
// - [13단계] 출력 결과 예측 선택 (predict_output)
// ============================================================================
export const PYTHON_LEVEL_2: PracticeRound = {
  id: 'py-basic-r2',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 2,
  title_ko: '2레벨: 몫(//), 나머지(%), 거듭제곱(**)과 쉼표(,)',
  title_en: 'Level 2: Floor Division (//), Modulo (%), Power (**) & Comma (,)',
  totalQuestions: 13,
  unlockedBlocks: ['print'],
  questions: [
    // ------------------------------------------------------------------------
    // 페어 1: 몫 연산자(//)
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      kind: 'standard',
      prompt_ko: '슬래시를 두 번 이어 쓴 몫 연산자(//)는 나눗셈에서 소수점 아래를 버리고 정수 몫만 구합니다. 블록의 수식을 따라 입력해보세요.',
      prompt_en: 'The floor division operator (//) divides two numbers and keeps only the integer quotient, discarding any decimal part. Trace the expression in the block.',
      hint_ko: '일반 나눗셈(/)과 달리 몫 연산자(//)의 결과는 소수점이 없는 정수로 출력됩니다.',
      hint_en: 'Unlike regular division (/), floor division (//) outputs an integer without a decimal point.',
      targetCode: 'print(17//5)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '3',
        },
      ],
    },
    {
      id: 2,
      step: 2,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 몫 연산자를 사용해 계산 결과(6)를 출력해보세요.',
      prompt_en: 'Use the floor division operator in the blank to print the quotient (6).',
      hint_ko: '20과 3 사이의 빈칸에 몫 연산자인 슬래시 2개(//)를 입력하세요.',
      hint_en: 'Type the double slash (//) floor division operator in the blank between 20 and 3.',
      templateCode: 'print(20§§3)',
      targetCode: 'print(20//3)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '6',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 페어 2: 나머지 연산자(%)
    // ------------------------------------------------------------------------
    {
      id: 3,
      step: 3,
      type: 'block',
      kind: 'standard',
      prompt_ko: '퍼센트 기호로 쓰는 나머지 연산자(%)는 나눗셈 후 나누어떨어지지 않고 남은 나머지를 구합니다. 블록의 수식을 따라 입력해보세요.',
      prompt_en: 'The modulo operator (%) calculates the remainder left over after division. Trace the expression in the block.',
      hint_ko: '17을 5로 나누면 몫이 3이고 나머지가 2이므로 2가 출력됩니다.',
      hint_en: '17 divided by 5 has a quotient of 3 and a remainder of 2, so 2 is printed.',
      targetCode: 'print(17%5)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '2',
        },
      ],
    },
    {
      id: 4,
      step: 4,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 나머지 연산자를 사용해 계산 결과(2)를 출력해보세요.',
      prompt_en: 'Use the modulo operator in the blank to print the remainder (2).',
      hint_ko: '20과 3 사이의 빈칸에 나머지 연산자인 퍼센트 기호(%)를 입력하세요.',
      hint_en: 'Type the percent sign (%) modulo operator in the blank between 20 and 3.',
      templateCode: 'print(20§3)',
      targetCode: 'print(20%3)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '2',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 페어 3: 거듭제곱 연산자(**)
    // ------------------------------------------------------------------------
    {
      id: 5,
      step: 5,
      type: 'block',
      kind: 'standard',
      prompt_ko: '별표를 두 번 이어 쓴 거듭제곱 연산자(**)는 왼쪽 숫자를 오른쪽 숫자만큼 거듭 곱합니다. 블록의 수식을 따라 입력해보세요.',
      prompt_en: 'The exponentiation operator (**) raises the left number to the power of the right number. Trace the expression in the block.',
      hint_ko: '파이썬에서는 거듭제곱에 ^ 기호가 아닌 ** 기호를 사용합니다.',
      hint_en: 'Python uses ** rather than ^ for exponentiation.',
      targetCode: 'print(2**4)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '16',
        },
      ],
    },
    {
      id: 6,
      step: 6,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 거듭제곱 연산자를 사용해 3의 3제곱 결과(27)를 출력해보세요.',
      prompt_en: 'Use the exponentiation operator in the blank to print 3 to the power of 3 (27).',
      hint_ko: '3과 3 사이의 빈칸에 거듭제곱 연산자인 별표 2개(**)를 입력하세요.',
      hint_en: 'Type the double asterisk (**) operator in the blank between 3 and 3.',
      templateCode: 'print(3§§3)',
      targetCode: 'print(3**3)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '27',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 페어 4: 쉼표(,) 다중 출력
    // ------------------------------------------------------------------------
    {
      id: 7,
      step: 7,
      type: 'block',
      kind: 'standard',
      prompt_ko: 'print() 괄호 안에서 여러 값을 쉼표(,)로 구분해 나열하면 값 사이에 공백 한 칸이 자동으로 들어가 나란히 출력됩니다. 블록의 코드를 따라 입력해보세요.',
      prompt_en: 'Separating multiple values with a comma (,) inside print() prints them side by side with an automatic space in between. Trace the block code.',
      hint_ko: '쉼표로 구분된 각 값들이 한 줄에 공백을 두고 차례대로 출력됩니다.',
      hint_en: 'Each comma-separated item is printed on the same line separated by a single space.',
      targetCode: 'print(10, 20)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '10 20',
        },
      ],
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸을 채워 숫자 50과 100이 한 줄에 나란히 출력되도록 해보세요.',
      prompt_en: 'Fill in the blank to print the numbers 50 and 100 side by side on one line.',
      hint_ko: '여러 값을 공백으로 구분해 나란히 출력하려면 50과 100 사이의 빈칸에 쉼표(,)를 입력하세요.',
      hint_en: 'Type a comma (,) into the blank between 50 and 100 to separate multiple values.',
      templateCode: 'print(50§ 100)',
      targetCode: 'print(50, 100)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '50 100',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 페어 5: 몫과 나머지 동시 출력
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'block',
      kind: 'standard',
      prompt_ko: '쉼표(,)를 활용하면 몫 연산자(//)와 나머지 연산자(%)의 계산 결과를 한 줄에 동시에 출력할 수 있습니다. 블록의 수식을 따라 입력해보세요.',
      prompt_en: 'Using a comma (,) inside print() lets you evaluate and print both the quotient (//) and remainder (%) on a single line. Trace the block code.',
      hint_ko: '쉼표 앞뒤의 수식이 각각 계산된 뒤 공백 한 칸을 사이에 두고 나란히 출력됩니다.',
      hint_en: 'Both expressions around the comma are evaluated and printed with a space between them.',
      targetCode: 'print(17//5, 17%5)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '3 2',
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸에 각각 몫과 나머지 연산자를 채워 계산 결과(3 3)를 출력해보세요.',
      prompt_en: 'Fill in the floor division and modulo operators into the blanks to print the result (3 3).',
      hint_ko: '첫 번째 빈칸에는 몫 연산자(//), 두 번째 빈칸에는 나머지 연산자(%)를 입력하세요.',
      hint_en: 'Enter the floor division operator (//) in the first blank and modulo operator (%) in the second blank.',
      templateCode: 'print(15§§4, 15§4)',
      targetCode: 'print(15//4, 15%4)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '3 3',
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
      prompt_ko: '틀린 곳을 수정하여 2의 5제곱 결과(32)가 올바르게 출력되도록 해보세요.',
      prompt_en: 'Fix the error so that 2 to the power of 5 (32) is printed on the screen.',
      hint_ko: '파이썬에서 거듭제곱은 삿갓 기호(^)가 아니라 곱셈 기호를 두 번 연속 이어 쓴 연산자를 사용합니다.',
      hint_en: 'Python does not use ^ for powers; use the multiplication symbol repeated twice.',
      templateCode: 'print(2^5)',
      targetCode: 'print(2**5)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '32',
        },
      ],
    },
    {
      id: 12,
      step: 12,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '예제 코드 아래에 한 줄을 추가하여 25를 4로 나눈 몫(6)과 나머지(1)를 나란히 출력해보세요.',
      prompt_en: 'Type the example code and add a line below to print the quotient (6) and remainder (1) of 25 divided by 4 side by side.',
      hint_ko: '첫째 줄 예제의 몫 연산자와 나머지 연산자 나열 구조를 그대로 활용하되 숫자만 25와 4로 바꾸어 작성해보세요.',
      hint_en: 'Follow the quotient and remainder structure of line 1 using the numbers 25 and 4.',
      templateCode: 'print(17//5, 17%5)\n§§§§§§§§§§§§§§§§§§',
      targetCode: 'print(17//5, 17%5)\nprint(25//4, 25%4)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '3 2\n6 1',
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
      hint_ko: '첫째 줄은 소수점을 버린 정수 몫과 나머지를 나란히 구하고, 둘째 줄은 3을 두 번 곱하는 거듭제곱 연산입니다.',
      hint_en: 'Line 1 computes the integer quotient and remainder side by side; line 2 multiplies the base 3 twice.',
      targetCode: 'print(5//2, 5%2)\nprint(3**2)',
      choices: ['2.5 1\n6', '1 2\n9', '2 1\n9', '2 1\n6'],
      correctChoiceIndex: 2,
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '2 1\n9',
        },
      ],
    },
  ],
};
