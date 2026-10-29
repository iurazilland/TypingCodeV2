import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 2레벨: 몫(//), 나머지(%), 거듭제곱(**)과 쉼표(,) (10단계)
// - [블록 ➔ 타이핑 1:1 교차 5쌍(10문제)] 구조
// - 프롬프트 내 코드 정답 노출(스포일러) 배제 & 1레벨 표준 템플릿 적용
// - 페어 1: 몫 연산자(//)
//   1. [블록] print(17//5) -> 3
//   2. [타이핑: 빈칸] print(20//3) -> 6
// - 페어 2: 나머지 연산자(%)
//   3. [블록] print(17%5) -> 2
//   4. [타이핑: 빈칸] print(20%3) -> 2
// - 페어 3: 거듭제곱 연산자(**)
//   5. [블록] print(2**4) -> 16
//   6. [타이핑: 빈칸] print(3**3) -> 27
// - 페어 4: 쉼표(,) 다중 출력
//   7. [블록] print(10, 20) -> 10 20
//   8. [타이핑: 빈칸] print(50, 100) -> 50 100
// - 페어 5: 몫과 나머지 동시 출력
//   9. [블록] print(17//5, 17%5) -> 3 2
//   10. [타이핑: 빈칸] print(15//4, 15%4) -> 3 3
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
      prompt_ko: '몫 연산자(//)를 사용해 17을 5로 나눈 몫을 화면에 출력해보세요.',
      prompt_en: 'Use the floor division operator (//) to print the quotient of 17 divided by 5.',
      hint_ko: '슬래시를 두 번 쓴 // 기호는 나눗셈의 몫만 구하는 연산자입니다. 17//5를 입력하면 몫인 3이 출력됩니다.',
      hint_en: 'The double slash (//) operator performs floor division. Entering 17//5 produces the quotient 3.',
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
      prompt_ko: '나머지 연산자(%)를 사용해 17을 5로 나눈 나머지를 화면에 출력해보세요.',
      prompt_en: 'Use the modulo operator (%) to print the remainder of 17 divided by 5.',
      hint_ko: '퍼센트(%) 기호는 나눈 후 남은 나머지를 구하는 연산자입니다. 17%5를 입력하면 나머지인 2가 출력됩니다.',
      hint_en: 'The percent sign (%) operator calculates the remainder. Entering 17%5 leaves a remainder of 2.',
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
      prompt_ko: '거듭제곱 연산자(**)를 사용해 2의 4제곱 결과를 화면에 출력해보세요.',
      prompt_en: 'Use the exponentiation operator (**) to print 2 to the power of 4.',
      hint_ko: '별표를 두 번 쓴 ** 기호는 거듭제곱(제곱수)을 계산합니다. 2**4를 넣으면 2를 4번 곱한 16이 출력됩니다.',
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
      prompt_ko: '쉼표(,)를 사용해 숫자 10과 20을 한 줄에 나란히 출력해보세요.',
      prompt_en: 'Use a comma (,) to print numbers 10 and 20 side by side on one line.',
      hint_ko: 'print() 괄호 안에 쉼표(,)로 값을 구분하면 파이썬이 값 사이에 공백을 자동으로 넣어 한 줄에 출력합니다. 10, 20을 입력하세요.',
      hint_en: 'Separating items with a comma (,) inside print() automatically inserts a space between them. Enter 10, 20.',
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
      prompt_ko: '빈칸에 쉼표(,)를 넣어 숫자 50과 100이 나란히 출력되도록 해보세요.',
      prompt_en: 'Use a comma (,) in the blank to print 50 and 100 side by side.',
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
    // 페어 5: 몫과 나머지 동시 출력 (9번 블록 ➔ 10번 타이핑)
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'block',
      kind: 'standard',
      prompt_ko: '17을 5로 나눈 몫과 나머지를 쉼표(,)로 연결해 한 번에 출력해보세요.',
      prompt_en: 'Print both the quotient and remainder of 17 divided by 5 together separated by a comma (,).',
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
  ],
};
