import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 4레벨: 수식 출력과 나머지(%)의 실전 활용 (10단계)
// - [블록 ➔ 타이핑 교차 4쌍(8문제)] + [심화 타이핑 2문제] 구조
// - 페어 1: 수식과 결과 동시 출력
//   1. [블록] print("3 + 5 =", 3 + 5)
//   2. [타이핑: 빈칸] print("7 + 8 =", 7 + 8)
// - 페어 2: 나머지(%)의 실전 활용 (짝수 판별)
//   3. [블록] print(10 % 2) (0이면 짝수)
//   4. [타이핑: 빈칸] print("8 % 2 =", 8 % 2)
// - 페어 3: 구구단 라벨과 곱셈 연산자(*)
//   5. [블록] print("2 x 3 =", 2 * 3)
//   6. [타이핑: 빈칸] print("4 x 5 =", 4 * 5)
// - 페어 4: 문자열 수식 출력
//   7. [블록] print("3 + 5") (계산되지 않음)
//   8. [타이핑: 빈칸] print("3 x 7 =", 3 * 7)
// - 심화 타이핑 2문제:
//   9. [타이핑: 빈칸] 몫과 나머지 라벨 동시 출력 print("몫:", 20 // 3, "나머지:", 20 % 3)
//   10. [타이핑: 빈칸] 복합 몫과 나머지 심화 종합 print("몫:", 14 // 3, "나머지:", 14 % 3)
// ============================================================================
export const PYTHON_LEVEL_4: PracticeRound = {
  id: 'py-basic-r4',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 4,
  title_ko: '4레벨: 수식 출력과 나머지(%)의 실전 활용',
  title_en: 'Level 4: Formula Printing & Modulo Usage',
  totalQuestions: 10,
  unlockedBlocks: ['print'],
  questions: [
    // ------------------------------------------------------------------------
    // 페어 1: 수식과 결과 동시 출력
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      kind: 'standard',
      prompt_ko: '문자열 "3 + 5 ="와 실제 계산식 3 + 5를 쉼표로 연결해 출력해보세요.',
      prompt_en: 'Connect the string "3 + 5 =" and the expression 3 + 5 with a comma to print them together.',
      hint_ko: '따옴표 안의 "3 + 5 ="는 글자로 나오고, 쉼표 뒤의 3 + 5는 컴퓨터가 계산하여 "3 + 5 = 8"로 한 줄에 출력됩니다.',
      hint_en: '"3 + 5 =" prints as text, while the unquoted 3 + 5 evaluates to 8, outputting "3 + 5 = 8".',
      targetCode: 'print("3 + 5 =", 3 + 5)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '3 + 5 = 8',
        },
      ],
    },
    {
      id: 2,
      step: 2,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸을 채워 7 + 8의 계산 결과(7 + 8 = 15)를 화면에 출력해보세요.',
      prompt_en: 'Fill in the blank to print 7 + 8 = 15 on the screen.',
      hint_ko: '쉼표 뒤의 빈칸에 수식 7 + 8을 입력하세요. 파이썬이 이를 계산하여 15로 출력합니다.',
      hint_en: 'Type the expression 7 + 8 in the blank. Python will evaluate it and print 15.',
      templateCode: 'print("7 + 8 =", §§§§§)',
      targetCode: 'print("7 + 8 =", 7 + 8)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '7 + 8 = 15',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 페어 2: 나머지(%)의 실전 활용 (짝수 판별)
    // ------------------------------------------------------------------------
    {
      id: 3,
      step: 3,
      type: 'block',
      kind: 'standard',
      prompt_ko: '10을 2로 나눈 나머지(10 % 2)를 계산해 화면에 출력해보세요.',
      prompt_en: 'Calculate and print the remainder of 10 divided by 2 (10 % 2) on the screen.',
      hint_ko: '10 % 2의 결과는 0입니다. 어떤 수를 2로 나눈 나머지가 0이면 그 수는 짝수(Even)입니다. 프로그래밍에서 짝수를 판별하는 기본 공식입니다.',
      hint_en: '10 % 2 produces 0. In programming, a remainder of 0 when divided by 2 confirms the number is even.',
      targetCode: 'print(10 % 2)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '0',
        },
      ],
    },
    {
      id: 4,
      step: 4,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸을 채워 짝수 확인 식과 결과(8 % 2 = 0)를 화면에 출력해보세요.',
      prompt_en: 'Fill in the blanks to print the even-number check (8 % 2 = 0) on the screen.',
      hint_ko: '따옴표 안의 수식 설명과 쉼표 뒤의 실제 계산식 두 빈칸 모두에 나머지 연산자(%)를 입력하세요.',
      hint_en: 'Type the modulo operator (%) in both blanks: inside the string label and in the calculation expression.',
      templateCode: 'print("8 § 2 =", 8 § 2)',
      targetCode: 'print("8 % 2 =", 8 % 2)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '8 % 2 = 0',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 페어 3: 구구단 라벨과 곱셈 연산자(*)
    // ------------------------------------------------------------------------
    {
      id: 5,
      step: 5,
      type: 'block',
      kind: 'standard',
      prompt_ko: '문자열 "2 x 3 ="과 계산식 2 * 3을 연결해 구구단 결과를 출력해보세요.',
      prompt_en: 'Connect the string "2 x 3 =" and expression 2 * 3 to print the multiplication result.',
      hint_ko: '화면에 보여줄 수식 모양은 문자열 "2 x 3 ="으로 쓰고, 실제 계산은 파이썬 곱셈 연산자(*)를 사용해 2 * 3을 넣으면 "2 x 3 = 6"이 출력됩니다.',
      hint_en: 'Use the string "2 x 3 =" for display and the asterisk (*) operator for calculation to print "2 x 3 = 6".',
      targetCode: 'print("2 x 3 =", 2 * 3)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '2 x 3 = 6',
        },
      ],
    },
    {
      id: 6,
      step: 6,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 곱셈 연산자(*)를 채워 구구단(4 x 5 = 20)이 계산되도록 해보세요.',
      prompt_en: 'Fill in the asterisk (*) multiplication operator to calculate 4 x 5 = 20.',
      hint_ko: '화면에는 "4 x 5 =" 라벨이 보이고, 실제 계산은 곱셈 기호(*)를 사용해야 하므로 빈칸에 *를 입력하세요.',
      hint_en: 'Enter the asterisk (*) operator in the blank to perform multiplication.',
      templateCode: 'print("4 x 5 =", 4 § 5)',
      targetCode: 'print("4 x 5 =", 4 * 5)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '4 x 5 = 20',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 페어 4: 문자열 수식 출력과 수식 라벨 완성
    // ------------------------------------------------------------------------
    {
      id: 7,
      step: 7,
      type: 'block',
      kind: 'standard',
      prompt_ko: '따옴표를 사용해 계산식이 글자 그대로 나오는 "3 + 5"를 출력해보세요.',
      prompt_en: 'Use quotes to print the expression "3 + 5" as literal text on the screen.',
      hint_ko: '따옴표 안에 수식을 적으면 계산되지 않고 문자 그대로 "3 + 5"가 출력됩니다.',
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
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸을 채워 구구단 3단의 수식 설명(3 x 7 = 21)을 완성해보세요.',
      prompt_en: 'Fill in the blank to complete the formula label for 3 x 7 = 21.',
      hint_ko: '따옴표 안의 빈칸에 수식 모양인 3 x 7 = 을 입력하세요.',
      hint_en: 'Type 3 x 7 = inside the quotes to display the formula.',
      templateCode: 'print("§§§§§§§", 3 * 7)',
      targetCode: 'print("3 x 7 =", 3 * 7)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '3 x 7 = 21',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 심화 타이핑 2문제 (9, 10단계): 몫과 나머지 동시 출력 및 복합 연산
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸을 채워 20을 3으로 나눈 몫(6)과 나머지(2)를 설명 라벨과 함께 출력해보세요.',
      prompt_en: 'Fill in the blanks to print the quotient (6) and remainder (2) of 20 divided by 3 with labels.',
      hint_ko: '첫 번째 빈칸에는 몫 연산자(//), 두 번째 빈칸에는 나머지 연산자(%)를 입력하세요.',
      hint_en: 'Enter the floor division operator (//) in the first blank and modulo operator (%) in the second.',
      templateCode: 'print("몫:", 20 §§ 3, "나머지:", 20 § 3)',
      targetCode: 'print("몫:", 20 // 3, "나머지:", 20 % 3)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '몫: 6 나머지: 2',
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸을 채워 14를 3으로 나눈 몫(4)과 나머지(2)를 함께 출력해보세요.',
      prompt_en: 'Fill in the blanks to print the quotient (4) and remainder (2) of 14 divided by 3 together.',
      hint_ko: '첫 번째 빈칸에는 몫(//), 두 번째 빈칸에는 나머지(%) 연산자를 입력하세요.',
      hint_en: 'Enter floor division (//) in the first blank and modulo (%) in the second blank.',
      templateCode: 'print("몫:", 14 §§ 3, "나머지:", 14 § 3)',
      targetCode: 'print("몫:", 14 // 3, "나머지:", 14 % 3)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '몫: 4 나머지: 2',
        },
      ],
    },
  ],
};
