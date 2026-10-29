import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 2레벨: 몫(//), 나머지(%), 거듭제곱(**)과 쉼표(,) (10단계)
// - [블록 ➔ 타이핑 1:1 교차 5쌍(10문제)] 구조
// - 기호와 숫자 사이 공백 제거(Compact) 및 넓은 빈칸 입력 적용
// - 페어 1: 몫 연산자(//)
//   1. [블록] print(17//5) -> 3
//   2. [타이핑: 빈칸] print(20//3) -> 6 (식 전체 빈칸)
// - 페어 2: 나머지 연산자(%)
//   3. [블록] print(17%5) -> 2
//   4. [타이핑: 빈칸] print(20%3) -> 2 (식 전체 빈칸)
// - 페어 3: 거듭제곱 연산자(**)
//   5. [블록] print(2**4) -> 16
//   6. [타이핑: 빈칸] print(3**3) -> 27 (식 전체 빈칸)
// - 페어 4: 쉼표(,) 다중 출력
//   7. [블록] print(10, 20) -> 10 20
//   8. [타이핑: 빈칸] print(50, 100) -> 50 100 (다중 출력 전체 빈칸)
// - 페어 5: 몫과 나머지 동시 출력
//   9. [블록] print(17//5, 17%5) -> 3 2
//   10. [타이핑: 빈칸] print(15//4, 15%4) -> 3 3 (두 식 각각 넓은 빈칸)
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
      prompt_ko: '몫 연산자(//)를 사용해 17//5를 넣어 몫을 출력해보세요.',
      prompt_en: 'Use the floor division operator (//) to insert 17//5 and print the quotient.',
      hint_ko: '슬래시를 두 번 쓴 // 기호는 나눗셈의 몫만 구하는 연산자입니다. 17을 5로 나눈 몫인 3이 출력됩니다.',
      hint_en: 'The double slash (//) operator performs floor division, returning only the integer quotient. 17//5 produces 3.',
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
      prompt_ko: '빈칸에 몫 연산식 20//3을 입력하여 몫(6)을 화면에 출력해보세요.',
      prompt_en: 'Fill in the floor division expression 20//3 to print the quotient (6).',
      hint_ko: '슬래시 2개(//)를 사용해 빈칸에 20//3을 입력하세요.',
      hint_en: 'Type 20//3 using the double slash (//) into the blank.',
      templateCode: 'print(§§§§§)',
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
      prompt_ko: '나머지 연산자(%)를 사용해 17%5를 넣어 나머지를 출력해보세요.',
      prompt_en: 'Use the modulo operator (%) to insert 17%5 and print the remainder.',
      hint_ko: '퍼센트(%) 기호는 나눈 후 남은 나머지를 구하는 연산자입니다. 17을 5로 나눈 나머지인 2가 출력됩니다.',
      hint_en: 'The percent sign (%) operator calculates the remainder. 17 divided by 5 leaves a remainder of 2.',
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
      prompt_ko: '빈칸에 나머지 연산식 20%3을 입력하여 나머지(2)를 화면에 출력해보세요.',
      prompt_en: 'Fill in the modulo expression 20%3 to print the remainder (2).',
      hint_ko: '퍼센트(%) 기호를 사용해 빈칸에 20%3을 입력하세요.',
      hint_en: 'Type 20%3 using the percent sign (%) into the blank.',
      templateCode: 'print(§§§§)',
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
      prompt_ko: '거듭제곱 연산자(**)를 사용해 2**4를 넣어 결과를 출력해보세요.',
      prompt_en: 'Use the exponentiation operator (**) to insert 2**4 and print the result.',
      hint_ko: '별표를 두 번 쓴 ** 기호는 거듭제곱(제곱수)을 계산합니다. 2**4는 2를 4번 곱한 16이 출력됩니다.',
      hint_en: 'The double asterisk (**) operator calculates powers. 2**4 multiplies 2 four times, producing 16.',
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
      prompt_ko: '빈칸에 거듭제곱식 3**3을 입력하여 3의 3제곱 결과(27)를 화면에 출력해보세요.',
      prompt_en: 'Fill in the exponentiation expression 3**3 to print 27.',
      hint_ko: '별표 2개(**)를 사용해 빈칸에 3**3을 입력하세요.',
      hint_en: 'Type 3**3 using two asterisks (**) into the blank.',
      templateCode: 'print(§§§§)',
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
      prompt_ko: '빈칸에 50, 100을 입력하여 두 숫자를 나란히 출력해보세요.',
      prompt_en: 'Fill in 50, 100 to print the two numbers side by side.',
      hint_ko: '숫자 50 뒤에 쉼표와 공백을 넣고 100을 입력하세요 (50, 100).',
      hint_en: 'Type 50, 100 with a comma and space into the blank.',
      templateCode: 'print(§§§§§§§)',
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
    // 페어 5: 몫과 나머지 동시 출력 (9번 블록 ➔ 10번 타이핑)
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'block',
      kind: 'standard',
      prompt_ko: '쉼표(,)를 사용해 17을 5로 나눈 몫(17//5)과 나머지(17%5)를 한 번에 출력해보세요.',
      prompt_en: 'Use a comma (,) to print both the quotient (17//5) and remainder (17%5) together.',
      hint_ko: '17//5, 17%5 와 같이 쉼표로 연결하면 몫(3)과 나머지(2)가 한 칸 띄워져 "3 2"로 출력됩니다.',
      hint_en: 'Writing 17//5, 17%5 separated by a comma prints the quotient (3) and remainder (2) as "3 2".',
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
      prompt_ko: '두 빈칸에 각각 몫(15//4)과 나머지(15%4) 계산식을 입력해보세요.',
      prompt_en: 'Fill in the blanks with the quotient (15//4) and remainder (15%4) expressions.',
      hint_ko: '첫 번째 빈칸에는 15//4, 두 번째 빈칸에는 15%4를 각각 입력하세요.',
      hint_en: 'Type 15//4 in the first blank and 15%4 in the second blank.',
      templateCode: 'print(§§§§§§, §§§§)',
      targetCode: 'print(15//4, 15%4)',
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
