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
      prompt_ko: '몫 연산자(//)를 사용해 17//5를 넣어 몫을 출력해보세요.',
      prompt_en: 'Use the floor division operator (//) to insert 17//5 and print the quotient.',
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
      prompt_ko: '나머지 연산자(%)를 사용해 17%5를 넣어 나머지를 출력해보세요.',
      prompt_en: 'Use the modulo operator (%) to insert 17%5 and print the remainder.',
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
      prompt_ko: '거듭제곱 연산자(**)를 사용해 2**4를 넣어 결과를 출력해보세요.',
      prompt_en: 'Use the exponentiation operator (**) to insert 2**4 and print the result.',
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
      prompt_ko: '쉼표(,)를 사용해 10, 20을 넣어 나란히 출력해보세요.',
      prompt_en: 'Use a comma (,) to insert 10, 20 and print them side by side.',
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
      prompt_ko: '쉼표(,)를 사용해 17//5, 17%5를 넣어 몫과 나머지를 한 번에 출력해보세요.',
      prompt_en: 'Use a comma (,) to insert 17//5, 17%5 and print both the quotient and remainder together.',
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
      hint_ko: '파이썬에서 거듭제곱은 ^ 기호가 아니라 별표를 두 번 연속 쓴 ** 연산자를 사용합니다.',
      hint_en: 'In Python, exponentiation uses double asterisks (**) rather than the caret (^) symbol.',
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
      hint_ko: '첫째 줄 예제를 입력하고 Enter를 누른 뒤, 둘째 줄에 print(25//4, 25%4)를 입력하세요.',
      hint_en: 'Type the first line example, press Enter, and write print(25//4, 25%4) on the second line.',
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
      hint_ko: '14를 4로 나눈 몫은 3이고 나머지는 2입니다. 둘째 줄의 3**2는 3을 두 번 곱한 거듭제곱입니다.',
      hint_en: '14 divided by 4 gives quotient 3 and remainder 2. On line 2, 3**2 means 3 multiplied by 3.',
      targetCode: 'print(14//4, 14%4)\nprint(3**2)',
      choices: ['3.5 2\n6', '2 3\n9', '3 2\n9', '3 2\n6'],
      correctChoiceIndex: 2,
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '3 2\n9',
        },
      ],
    },
  ],
};
