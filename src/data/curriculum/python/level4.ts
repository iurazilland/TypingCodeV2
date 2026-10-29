import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 4레벨: 수식 출력과 나머지(%)의 실전 활용 (10단계)
// - [블록 ➔ 타이핑 1:1 교차 5쌍(10문제)] 구조
// - 블록 단계: 블록 내부에 넣을 코드 명확 안내
// - 타이핑 단계: 스포일러 없이 연산자/문법 빈칸 스스로 채우기
// - 페어 1: 문자열 수식 출력 (계산되지 않음)
//   1. [블록] print("3 + 5")
//   2. [타이핑: 빈칸] print("3 x 7 =", 3*7)
// - 페어 2: 수식 라벨과 계산 동시 출력
//   3. [블록] print("3 + 5 =", 3+5)
//   4. [타이핑: 빈칸] print("7 + 8 =", 7+8)
// - 페어 3: 나머지(%)의 실전 활용 (짝수 판별)
//   5. [블록] print(10%2)
//   6. [타이핑: 빈칸] print("8 % 2 =", 8%2)
// - 페어 4: 구구단 라벨과 곱셈 연산자(*)
//   7. [블록] print("2 x 3 =", 2*3)
//   8. [타이핑: 빈칸] print("4 x 5 =", 4*5)
// - 페어 5: 몫과 나머지 라벨 동시 출력
//   9. [블록] print("몫:", 20//3, "나머지:", 20%3)
//   10. [타이핑: 빈칸] print("몫:", 14//3, "나머지:", 14%3)
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
      prompt_ko: '빈칸에 구구단 3단의 수식 설명 라벨을 큰따옴표로 감싸 완성해보세요.',
      prompt_en: 'Complete the multiplication formula label in the blank using double quotes.',
      hint_ko: '따옴표를 포함해 "3 x 7 ="을 빈칸에 입력하세요.',
      hint_en: 'Type "3 x 7 =" with quotes into the blank.',
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
      hint_ko: 'print() 괄호 안에 "3 + 5 =", 3+5 를 입력하면 "3 + 5 = 8"로 한 줄에 출력됩니다.',
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
      prompt_ko: '빈칸에 덧셈식을 넣어 7 + 8 = 15가 완성되도록 출력해보세요.',
      prompt_en: 'Fill in the addition expression to complete 7 + 8 = 15.',
      hint_ko: '쉼표 뒤의 빈칸에 덧셈식 7+8을 입력하세요.',
      hint_en: 'Type 7+8 in the blank after the comma.',
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
      prompt_ko: '빈칸에 나머지 연산자를 채워 짝수 확인 식과 결과(8 % 2 = 0)를 완성해보세요.',
      prompt_en: 'Fill in the modulo operator in both blanks to complete the even-number check (8 % 2 = 0).',
      hint_ko: '설명 라벨 안과 쉼표 뒤 계산식 두 빈칸 모두에 퍼센트(%) 기호를 입력하세요.',
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
      hint_ko: 'print() 괄호 안에 "2 x 3 =", 2*3 을 입력하세요. "2 x 3 = 6"이 출력됩니다.',
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
      hint_ko: '4와 5 사이의 빈칸에 곱셈 기호인 별표(*)를 입력하세요.',
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
    // 페어 5: 몫과 나머지 라벨 동시 출력 (9번 블록 ➔ 10번 타이핑)
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'block',
      kind: 'standard',
      prompt_ko: '쉼표(,)를 사용해 "몫:", 20//3, "나머지:", 20%3을 넣어 한 줄에 출력해보세요.',
      prompt_en: 'Use commas (,) to insert "몫:", 20//3, "나머지:", 20%3 and print them on one line.',
      hint_ko: 'print() 괄호 안에 "몫:", 20//3, "나머지:", 20%3 을 입력하면 "몫: 6 나머지: 2"가 출력됩니다.',
      hint_en: 'Enter "몫:", 20//3, "나머지:", 20%3 to print "몫: 6 나머지: 2".',
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
      prompt_ko: '두 빈칸에 각각 몫과 나머지 연산자를 채워 계산 결과(몫: 4 나머지: 2)를 완성해보세요.',
      prompt_en: 'Fill in the floor division and modulo operators into the blanks to complete the result.',
      hint_ko: '첫 번째 빈칸에는 몫 연산자(//), 두 번째 빈칸에는 나머지 연산자(%)를 입력하세요.',
      hint_en: 'Enter floor division (//) in the first blank and modulo (%) in the second blank.',
      templateCode: 'print("몫:", 14§§3, "나머지:", 14§3)',
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
