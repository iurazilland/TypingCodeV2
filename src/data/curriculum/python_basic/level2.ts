import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 2레벨: 몫(//), 나머지(%), 거듭제곱(**)과 쉼표(,) (15단계)
// - [1~10단계] 블록 ➔ 타이핑 1:1 교차 5쌍
// - [11~12단계] 틀린 곳 수정 (fix_bug) 2문항
// - [13~14단계] 한 줄 완성 (one_line) 2문항
// - [15단계] 출력 결과 예측 선택 (predict_output) 1문항
// ============================================================================
export const PYTHON_LEVEL_2: PracticeRound = {
  id: 'py-basic-r2',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 2,
  title_ko: '2레벨: 몫(//), 나머지(%), 거듭제곱(**)과 쉼표(,)',
  title_en: 'Level 2: Floor Division (//), Modulo (%), Power (**) & Comma (,)',
  totalQuestions: 15,
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
      prompt_ko: '[블록 조립] 정수 몫만 구하는 몫 연산자(//)로 수식 17//5를 조립해 3을 출력해보세요.',
      prompt_en: '[Block] Use the floor division operator (//) in 17//5 to print the integer quotient 3.',
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
      prompt_ko: '[빈칸 채우기] 빈칸에 몫 연산자를 사용해 계산 결과 6을 출력해보세요.',
      prompt_en: '[Fill Blank] Use the floor division operator in the blank to print the quotient 6.',
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
      prompt_ko: '[블록 조립] 나눗셈 후 남은 나머지를 구하는 수식 17%5를 조립해 2를 출력해보세요.',
      prompt_en: '[Block] Trace the modulo expression 17%5 to print the remainder 2.',
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
      prompt_ko: '[빈칸 채우기] 빈칸에 나머지 연산자를 사용해 계산 결과 2를 출력해보세요.',
      prompt_en: '[Fill Blank] Use the modulo operator in the blank to print the remainder 2.',
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
      prompt_ko: '[블록 조립] 거듭제곱 연산자(**)로 2의 4제곱 수식 2**4를 조립해 16을 출력해보세요.',
      prompt_en: '[Block] Trace the exponentiation expression 2**4 to print 16.',
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
      prompt_ko: '[빈칸 채우기] 빈칸에 거듭제곱 연산자를 사용해 3의 3제곱 결과 27을 출력해보세요.',
      prompt_en: '[Fill Blank] Use the exponentiation operator in the blank to print 3 to the power of 3 (27).',
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
      prompt_ko: '[블록 조립] print() 안에서 10과 20을 쉼표(,)로 나열해 한 줄에 나란히 출력해보세요.',
      prompt_en: '[Block] Separate 10 and 20 with a comma (,) inside print() to print them side by side.',
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
      prompt_ko: '[빈칸 채우기] 빈칸을 채워 숫자 50과 100이 한 줄에 나란히 출력되도록 해보세요.',
      prompt_en: '[Fill Blank] Fill in the blank to print the numbers 50 and 100 side by side on one line.',
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
      prompt_ko: '[블록 조립] 쉼표(,)로 몫(17//5)과 나머지(17%5)를 한 줄에 동시에 출력해보세요.',
      prompt_en: '[Block] Use a comma (,) inside print() to output both 17//5 and 17%5 on one line.',
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
      prompt_ko: '[빈칸 채우기] 두 빈칸에 각각 몫과 나머지 연산자를 채워 3 3을 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the floor division and modulo operators into the blanks to print 3 3.',
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
    // 11~15단계: 실전 응용 (fix_bug 2 / one_line 2 / predict_output 1)
    // ------------------------------------------------------------------------
    {
      id: 11,
      step: 11,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '[틀린 곳 수정] 2의 5제곱 결과 32가 출력되도록 잘못된 연산 기호를 수정해보세요.',
      prompt_en: '[Fix Bug] Fix the wrong operator so that 2 to the power of 5 (32) is printed.',
      hint_ko: '몫 연산자(//) 대신 곱셈 기호를 두 번 이어 쓴 거듭제곱 연산자(**)를 사용해보세요.',
      hint_en: 'Replace the floor division operator (//) with the exponentiation operator (**).',
      templateCode: 'print(2//5)',
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
      kind: 'fix_bug',
      prompt_ko: '[틀린 곳 수정] 17을 5로 나눈 나머지 2가 출력되도록 연산 기호를 수정해보세요.',
      prompt_en: '[Fix Bug] Fix the operator so the remainder of 17 divided by 5 (2) is printed.',
      hint_ko: '나눗셈 기호(/)를 나머지 연산자(%)로 바꾸어 나머지를 구해보세요.',
      hint_en: 'Replace the division slash (/) with the modulo operator (%).',
      templateCode: 'print(17/5)',
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
      id: 13,
      step: 13,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '[한 줄 완성] 둘째 줄에 25를 4로 나눈 몫(6)과 나머지(1)를 나란히 출력해보세요.',
      prompt_en: '[Complete Line] Complete line 2 to print the quotient (6) and remainder (1) of 25 divided by 4.',
      hint_ko: '첫째 줄 예제의 몫 연산자와 나머지 연산자 나열 구조를 그대로 활용해보세요.',
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
      id: 14,
      step: 14,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '[한 줄 완성] 둘째 줄에 거듭제곱 연산자로 5의 2제곱 결과 25를 출력해보세요.',
      prompt_en: '[Complete Line] Complete line 2 using ** to print 5 to the power of 2 (25).',
      hint_ko: '첫째 줄처럼 ** 연산자를 사용해 print(5**2)를 작성해보세요.',
      hint_en: 'Follow line 1 and write print(5**2) using the ** operator.',
      templateCode: 'print(2**3)\n§§§§§§§§§§§',
      targetCode: 'print(2**3)\nprint(5**2)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '8\n25',
        },
      ],
    },
    {
      id: 15,
      step: 15,
      type: 'quiz',
      kind: 'predict_output',
      prompt_ko: '[출력 결과 예측] 다음 파이썬 코드를 실행했을 때 출력될 올바른 결과를 선택해보세요.',
      prompt_en: '[Predict Output] Select the exact output that will be printed when the Python code runs.',
      hint_ko: '첫째 줄은 정수 몫과 나머지를 나란히 구하고, 둘째 줄은 3을 두 번 곱하는 거듭제곱 연산입니다.',
      hint_en: 'Line 1 computes the integer quotient and remainder side by side; line 2 multiplies base 3 twice.',
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
