import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 4레벨: 수식 출력과 나머지(%)의 실전 활용 (10단계)
// - [블록 ➔ 타이핑 1:1 교차 5쌍(10문제)] 구조
// - 기호와 숫자 사이 공백 제거(Compact) 및 넓은 빈칸 입력 적용
// - 페어 1: 문자열 수식 출력 (계산되지 않음)
//   1. [블록] print("3 + 5")
//   2. [타이핑: 빈칸] print("3 x 7 =", 3*7) (수식 라벨 전체 빈칸)
// - 페어 2: 수식 라벨과 계산 동시 출력
//   3. [블록] print("3 + 5 =", 3+5)
//   4. [타이핑: 빈칸] print("7 + 8 =", 7+8) (계산식 전체 빈칸)
// - 페어 3: 나머지(%)의 실전 활용 (짝수 판별)
//   5. [블록] print(10%2) (0이면 짝수)
//   6. [타이핑: 빈칸] print("8 % 2 =", 8%2) (계산식 전체 빈칸)
// - 페어 4: 구구단 라벨과 곱셈 연산자(*)
//   7. [블록] print("2 x 3 =", 2*3)
//   8. [타이핑: 빈칸] print("4 x 5 =", 4*5) (계산식 전체 빈칸)
// - 페어 5: 몫과 나머지 라벨 동시 출력
//   9. [블록] print("몫:", 20//3, "나머지:", 20%3)
//   10. [타이핑: 빈칸] print("몫:", 14//3, "나머지:", 14%3) (두 수식 각각 넓은 빈칸)
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
    // 페어 1: 문자열 수식 출력 (계산되지 않음)
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
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
      id: 2,
      step: 2,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '따옴표를 포함해 "3 x 7 =" 라벨 전체를 빈칸에 입력해보세요.',
      prompt_en: 'Fill in the full label "3 x 7 =" including quotes into the blank.',
      hint_ko: '큰따옴표를 열고 3 x 7 = 을 적은 뒤 큰따옴표를 닫아주세요 ("3 x 7 =").',
      hint_en: 'Type "3 x 7 =" with opening and closing quotes into the blank.',
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
      prompt_ko: '문자열 "3 + 5 ="와 실제 계산식 3+5를 쉼표로 연결해 출력해보세요.',
      prompt_en: 'Connect the string "3 + 5 =" and the expression 3+5 with a comma to print them together.',
      hint_ko: '따옴표 안의 "3 + 5 ="는 글자로 나오고, 쉼표 뒤의 3+5는 컴퓨터가 계산하여 "3 + 5 = 8"로 한 줄에 출력됩니다.',
      hint_en: '"3 + 5 =" prints as text, while the unquoted 3+5 evaluates to 8, outputting "3 + 5 = 8".',
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
      prompt_ko: '빈칸에 계산식 7+8을 입력하여 계산 결과(7 + 8 = 15)를 완성해보세요.',
      prompt_en: 'Fill in the expression 7+8 to complete 7 + 8 = 15 on the screen.',
      hint_ko: '쉼표 뒤의 빈칸에 덧셈식 7+8을 입력하세요.',
      hint_en: 'Type the expression 7+8 in the blank.',
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
      prompt_ko: '10을 2로 나눈 나머지(10%2)를 계산해 화면에 출력해보세요.',
      prompt_en: 'Calculate and print the remainder of 10 divided by 2 (10%2) on the screen.',
      hint_ko: '10%2의 결과는 0입니다. 어떤 수를 2로 나눈 나머지가 0이면 그 수는 짝수(Even)입니다.',
      hint_en: '10%2 produces 0. In programming, a remainder of 0 when divided by 2 confirms the number is even.',
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
      prompt_ko: '빈칸에 나머지 연산식 8%2를 입력하여 짝수 확인 결과(8 % 2 = 0)를 출력해보세요.',
      prompt_en: 'Fill in the modulo expression 8%2 to print 8 % 2 = 0 on the screen.',
      hint_ko: '쉼표 뒤의 빈칸에 8%2를 입력하세요.',
      hint_en: 'Type 8%2 into the blank after the comma.',
      templateCode: 'print("8 % 2 =", §§§)',
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
      prompt_ko: '문자열 "2 x 3 ="과 계산식 2*3을 연결해 구구단 결과를 출력해보세요.',
      prompt_en: 'Connect the string "2 x 3 =" and expression 2*3 to print the multiplication result.',
      hint_ko: '화면에 보여줄 수식 모양은 문자열 "2 x 3 ="으로 쓰고, 실제 계산은 파이썬 곱셈 연산자(*)를 사용해 2*3을 넣으면 "2 x 3 = 6"이 출력됩니다.',
      hint_en: 'Use the string "2 x 3 =" for display and the asterisk (*) operator for calculation to print "2 x 3 = 6".',
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
      prompt_ko: '빈칸에 곱셈식 4*5를 채워 구구단 결과(4 x 5 = 20)를 완성해보세요.',
      prompt_en: 'Fill in the expression 4*5 to complete 4 x 5 = 20.',
      hint_ko: '쉼표 뒤의 빈칸에 곱셈식 4*5를 입력하세요.',
      hint_en: 'Enter 4*5 into the blank after the comma.',
      templateCode: 'print("4 x 5 =", §§§)',
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
    // 페어 5: 몫과 나머지 라벨 동시 출력 (9번 블록 ➔ 10번 타이핑)
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'block',
      kind: 'standard',
      prompt_ko: '20을 3으로 나눈 몫과 나머지를 설명과 함께 나란히 출력해보세요.',
      prompt_en: 'Print both the quotient and remainder of 20 divided by 3 with labels side by side.',
      hint_ko: '몫 연산자(//)와 나머지 연산자(%)를 설명 문자열과 함께 쉼표로 연결하면 "몫: 6 나머지: 2"가 보기 좋게 출력됩니다.',
      hint_en: 'Connecting floor division (//) and modulo (%) with descriptive strings produces "몫: 6 나머지: 2".',
      targetCode: 'print("몫:", 20//3, "나머지:", 20%3)',
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
      prompt_ko: '두 빈칸에 각각 몫 연산식(14//3)과 나머지 연산식(14%3)을 입력해보세요.',
      prompt_en: 'Fill in the floor division (14//3) and modulo (14%3) expressions into the blanks.',
      hint_ko: '첫 번째 빈칸에는 14//3, 두 번째 빈칸에는 14%3을 입력하세요.',
      hint_en: 'Enter 14//3 in the first blank and 14%3 in the second blank.',
      templateCode: 'print("몫:", §§§§, "나머지:", §§§)',
      targetCode: 'print("몫:", 14//3, "나머지:", 14%3)',
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
