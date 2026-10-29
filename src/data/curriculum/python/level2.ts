import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 2레벨: 몫(//), 나머지(%), 거듭제곱(**)과 쉼표(,) (10단계)
// - [블록 ➔ 타이핑 교차 4쌍(8문제)] + [심화 타이핑 2문제] 구조
// - 페어 1: 몫 연산자(//)
//   1. [블록] print(17 // 5) -> 3
//   2. [타이핑: 빈칸] print(20 // 3) -> 6
// - 페어 2: 나머지 연산자(%)
//   3. [블록] print(17 % 5) -> 2
//   4. [타이핑: 빈칸] print(20 % 3) -> 2
// - 페어 3: 거듭제곱 연산자(**)
//   5. [블록] print(2 ** 4) -> 16
//   6. [타이핑: 빈칸] print(3 ** 3) -> 27
// - 페어 4: 쉼표(,) 다중 출력
//   7. [블록] print(10, 20) -> 10 20
//   8. [타이핑: 빈칸] print(50, 100) -> 50 100
// - 심화 타이핑 2문제:
//   9. [타이핑: 빈칸] 몫과 나머지 동시 출력 print(17 // 5, 17 % 5) -> 3 2
//   10. [타이핑: 빈칸] 몫과 나머지 종합 심화 print(15 // 4, 15 % 4) -> 3 3
// ============================================================================
export const PYTHON_LEVEL_2: PracticeRound = {
  id: 'py-basic-r2',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 2,
  title_ko: '2레벨: 몫(//), 나머지(%), 거듭제곱(**)과 쉼표(,)',
  title_en: 'Level 2: Floor Division (//), Modulo (%), Power (**) & Comma (,)',
  totalQuestions: 10,
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
      prompt_ko: '몫 연산자(//)를 사용해 17 // 5를 넣어 몫을 출력해보세요.',
      prompt_en: 'Use the floor division operator (//) to insert 17 // 5 and print the quotient.',
      hint_ko: '슬래시를 두 번 쓴 // 기호는 나눗셈의 몫만 구하는 연산자입니다. 17을 5로 나눈 몫인 3이 출력됩니다.',
      hint_en: 'The double slash (//) operator performs floor division, returning only the integer quotient. 17 // 5 produces 3.',
      targetCode: 'print(17 // 5)',
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
      prompt_ko: '빈칸을 채워 20을 3으로 나눈 몫(6)을 화면에 출력해보세요.',
      prompt_en: 'Fill in the blank to print the quotient (6) of 20 divided by 3 on the screen.',
      hint_ko: '20과 3 사이의 빈칸에 슬래시 기호 2개(//)를 입력하세요.',
      hint_en: 'Type the double slash (//) operator into the two-character blank between 20 and 3.',
      templateCode: 'print(20 §§ 3)',
      targetCode: 'print(20 // 3)',
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
      prompt_ko: '나머지 연산자(%)를 사용해 17 % 5를 넣어 나머지를 출력해보세요.',
      prompt_en: 'Use the modulo operator (%) to insert 17 % 5 and print the remainder.',
      hint_ko: '퍼센트(%) 기호는 나눈 후 남은 나머지를 구하는 연산자입니다. 17을 5로 나눈 나머지인 2가 출력됩니다.',
      hint_en: 'The percent sign (%) operator calculates the remainder. 17 divided by 5 leaves a remainder of 2.',
      targetCode: 'print(17 % 5)',
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
      prompt_ko: '빈칸을 채워 20을 3으로 나눈 나머지(2)를 화면에 출력해보세요.',
      prompt_en: 'Fill in the blank to print the remainder (2) of 20 divided by 3 on the screen.',
      hint_ko: '키보드의 Shift + 5를 누르면 퍼센트(%) 기호를 입력할 수 있습니다.',
      hint_en: 'Press Shift + 5 on your keyboard to type the percent (%) operator.',
      templateCode: 'print(20 § 3)',
      targetCode: 'print(20 % 3)',
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
      prompt_ko: '거듭제곱 연산자(**)를 사용해 2 ** 4를 넣어 결과를 출력해보세요.',
      prompt_en: 'Use the exponentiation operator (**) to insert 2 ** 4 and print the result.',
      hint_ko: '별표를 두 번 쓴 ** 기호는 거듭제곱(제곱수)을 계산합니다. 2 ** 4는 2를 4번 곱한 16이 출력됩니다.',
      hint_en: 'The double asterisk (**) operator calculates powers. 2 ** 4 multiplies 2 four times, producing 16.',
      targetCode: 'print(2 ** 4)',
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
      prompt_ko: '빈칸에 거듭제곱 연산자(**)를 채워 3의 3제곱 결과(27)를 화면에 출력해보세요.',
      prompt_en: 'Fill in the exponentiation operator (**) to print 3 to the power of 3 (27).',
      hint_ko: '파이썬에서 거듭제곱은 별표 두 개(**)를 연달아 사용합니다. 빈칸에 **를 입력하세요.',
      hint_en: 'In Python, exponentiation uses two asterisks (**). Type ** in the blank.',
      templateCode: 'print(3 §§ 3)',
      targetCode: 'print(3 ** 3)',
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
      prompt_ko: '쉼표(,)를 사용해 숫자 10과 20을 나란히 출력해보세요.',
      prompt_en: 'Use a comma (,) to insert 10, 20 and print them side by side.',
      hint_ko: 'print() 괄호 안에 쉼표(,)로 값을 구분하면 파이썬이 값 사이에 공백(띄어쓰기)을 자동으로 넣어 한 줄에 출력합니다.',
      hint_en: 'Separating items with a comma (,) inside print() automatically inserts a space between them in the output.',
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
      prompt_ko: '빈칸을 채워 숫자 50과 100을 나란히 출력해보세요.',
      prompt_en: 'Fill in the blank to print 50 and 100 side by side.',
      hint_ko: '50과 100 사이의 빈칸에 쉼표(,)를 입력하세요.',
      hint_en: 'Type a comma (,) into the blank between 50 and 100.',
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
    // 심화 타이핑 2문제 (9, 10단계): 몫과 나머지 동시 출력 및 종합
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸을 채워 17을 5로 나눈 몫(3)과 나머지(2)를 한 번에 출력해보세요.',
      prompt_en: 'Fill in the blanks to print both the quotient (3) and remainder (2) of 17 divided by 5 together.',
      hint_ko: '첫 번째 빈칸은 몫(//), 두 번째는 쉼표(,), 세 번째는 나머지(%) 연산자를 입력하세요.',
      hint_en: 'Enter floor division (//) in the first blank, a comma (,) in the second, and modulo (%) in the third.',
      templateCode: 'print(17 §§ 5§ 17 § 5)',
      targetCode: 'print(17 // 5, 17 % 5)',
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
      prompt_ko: '빈칸을 채워 15를 4로 나눈 몫(3)과 나머지(3)를 함께 출력해보세요.',
      prompt_en: 'Fill in the blanks to print the quotient (3) and remainder (3) of 15 divided by 4 together.',
      hint_ko: '첫 번째 빈칸에는 몫 연산자(//), 두 번째 빈칸에는 나머지 연산자(%)를 입력하세요.',
      hint_en: 'Enter the floor division operator (//) in the first blank and modulo operator (%) in the second blank.',
      templateCode: 'print(15 §§ 4, 15 § 4)',
      targetCode: 'print(15 // 4, 15 % 4)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '3 3',
        },
      ],
    },
  ],
};
