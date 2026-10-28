import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 4레벨: 수식 출력과 나머지(%)의 실전 활용 (10단계)
// - 쉼표(,)를 활용해 문자열 수식 라벨과 실제 계산 결과를 한 번에 출력
// - 사람이 읽는 수식 기호(x)와 컴퓨터 연산자(*)의 차이를 구구단으로 체득
// - 2로 나눈 나머지(%)가 0이면 짝수, 1이면 홀수라는 실전 프로그래밍 핵심 개념 학습
// - 1~5단계: 코드블록 모드 (Block Mode) - 블록으로 개념 체득
//   1. 덧셈 수식과 결과 동시 출력 : print("3 + 5 =", 3 + 5)
//   2. 구구단 한 줄 출력 : print("2 x 3 =", 2 * 3)
//   3. 나머지(%)의 실전 활용 1 (짝수 판별) : print("10 % 2 =", 10 % 2)
//   4. 나머지(%)의 실전 활용 2 (홀수 판별) : print("11 % 2 =", 11 % 2)
//   5. 몫과 나머지 라벨 동시 출력 : print("몫:", 20 // 3, "나머지:", 20 % 3)
// - 6~10단계: 타이핑 모드 (Typing Mode) - 1~5번 유형의 문제 형식 반복
//   6. [유형1] 빈칸 채우기 (덧셈 연산자 완성)
//   7. [유형2] 빈칸 채우기 (구구단 곱셈 연산자 완성)
//   8. [유형3] 오타 수정 (수학 기호 x -> 프로그래밍 곱셈 기호 *)
//   9. [유형4] 빈칸 채우기 (짝수 판별 나머지 연산자 %)
//   10. [유형5] 빈칸 채우기 (몫 // 과 나머지 % 복합 종합)
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
    // [블록 모드] 1~5단계: 블록 조립으로 개념 잡기
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      kind: 'standard',
      prompt_ko: '문자열 "3 + 5 ="와 계산식 3 + 5를 쉼표로 연결해 출력해보세요.',
      prompt_en: 'Use a comma to connect "3 + 5 =" and the expression 3 + 5 to print the result.',
      hint_ko: '문자열 "3 + 5 =" 뒤에 쉼표(,)를 찍고 계산식 3 + 5를 넣으면 수식과 계산 결과가 한 줄에 "3 + 5 = 8"로 출력됩니다.',
      hint_en: 'Connecting the string "3 + 5 =" and expression 3 + 5 with a comma outputs "3 + 5 = 8".',
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
      id: 3,
      step: 3,
      type: 'block',
      kind: 'standard',
      prompt_ko: '10을 2로 나눈 나머지 수식과 결과를 쉼표로 연결해 출력해보세요.',
      prompt_en: 'Connect the modulo expression and result for 10 divided by 2 to print it.',
      hint_ko: '10 % 2의 계산 결과는 0입니다. 프로그래밍에서는 어떤 수를 2로 나눈 나머지가 0인지 확인하여 짝수(Even)를 판별합니다.',
      hint_en: '10 % 2 evaluates to 0. In programming, a remainder of 0 when divided by 2 is used to identify even numbers.',
      targetCode: 'print("10 % 2 =", 10 % 2)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '10 % 2 = 0',
        },
      ],
    },
    {
      id: 4,
      step: 4,
      type: 'block',
      kind: 'standard',
      prompt_ko: '11을 2로 나눈 나머지 수식과 결과를 쉼표로 연결해 출력해보세요.',
      prompt_en: 'Connect the modulo expression and result for 11 divided by 2 to print it.',
      hint_ko: '11 % 2의 계산 결과는 1입니다. 어떤 수를 2로 나눈 나머지가 1이면 홀수(Odd)임을 확인할 수 있습니다.',
      hint_en: '11 % 2 evaluates to 1. In programming, a remainder of 1 when divided by 2 identifies odd numbers.',
      targetCode: 'print("11 % 2 =", 11 % 2)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '11 % 2 = 1',
        },
      ],
    },
    {
      id: 5,
      step: 5,
      type: 'block',
      kind: 'standard',
      prompt_ko: '20을 3으로 나눈 몫과 나머지를 설명과 함께 나란히 출력해보세요.',
      prompt_en: 'Print both the quotient and remainder of 20 divided by 3 with labels side by side.',
      hint_ko: '몫 연산자(//)와 나머지 연산자(%)를 설명 문자열과 함께 쉼표로 연결하면 "몫: 6 나머지: 2"가 보기 좋게 출력됩니다.',
      hint_en: 'Connecting floor division (//) and modulo (%) with descriptive strings produces "몫: 6 나머지: 2".',
      targetCode: 'print("몫:", 20 // 3, "나머지:", 20 % 3)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '몫: 6 나머지: 2',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // [타이핑 모드] 6~10단계: 1~5번 유형의 문제형 반복
    // - 빈칸은 § 기호로 지정 (예: §§은 2글자 빈칸 박스)
    // ------------------------------------------------------------------------
    {
      id: 6,
      step: 6,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸을 채워 수식과 결과(7 + 8 = 15)를 화면에 출력해보세요.',
      prompt_en: 'Fill in the blank to print the formula and result (7 + 8 = 15) on the screen.',
      hint_ko: '7과 8 사이의 빈칸에 덧셈 연산자(+)를 입력하세요.',
      hint_en: 'Type the addition operator (+) in the blank between 7 and 8.',
      templateCode: 'print("7 + 8 =", 7 § 8)',
      targetCode: 'print("7 + 8 =", 7 + 8)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '7 + 8 = 15',
        },
      ],
    },
    {
      id: 7,
      step: 7,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸을 채워 구구단 3단(3 x 7 = 21)의 결과를 화면에 출력해보세요.',
      prompt_en: 'Fill in the blank to print the multiplication result (3 x 7 = 21) on the screen.',
      hint_ko: '화면의 "x"는 글자 모양이고, 실제 컴퓨터의 곱셈 연산자는 별표(*)입니다.',
      hint_en: 'The "x" in the string is just text; use the asterisk (*) operator for actual multiplication.',
      templateCode: 'print("3 x 7 =", 3 § 7)',
      targetCode: 'print("3 x 7 =", 3 * 7)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '3 x 7 = 21',
        },
      ],
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '틀린 곳을 수정하여 구구단(4 x 5 = 20)이 계산되도록 해보세요.',
      prompt_en: 'Fix the error to calculate the multiplication (4 x 5 = 20) correctly.',
      hint_ko: '파이썬은 알파벳 x를 곱셈 연산자로 인식하지 못합니다. x를 곱셈 연산자(*)로 고쳐보세요.',
      hint_en: 'Python does not recognize the letter x as an operator. Replace x with the asterisk (*) operator.',
      templateCode: 'print("4 x 5 =", 4 x 5)',
      targetCode: 'print("4 x 5 =", 4 * 5)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '4 x 5 = 20',
        },
      ],
    },
    {
      id: 9,
      step: 9,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸을 채워 짝수 확인 결과(8 % 2 = 0)를 화면에 출력해보세요.',
      prompt_en: 'Fill in the blank to print the even-number check (8 % 2 = 0) on the screen.',
      hint_ko: '짝수를 판별할 때는 2로 나눈 나머지를 구합니다. 빈칸에 나머지 연산자(%)를 입력하세요.',
      hint_en: 'To check for even numbers, find the remainder divided by 2 using the modulo operator (%).',
      templateCode: 'print("8 % 2 =", 8 § 2)',
      targetCode: 'print("8 % 2 =", 8 % 2)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '8 % 2 = 0',
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
      hint_ko: '첫 번째 빈칸에는 몫 연산자(//), 두 번째 빈칸에는 나머지 연산자(%)를 입력하세요.',
      hint_en: 'Enter the floor division operator (//) in the first blank and modulo operator (%) in the second blank.',
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
