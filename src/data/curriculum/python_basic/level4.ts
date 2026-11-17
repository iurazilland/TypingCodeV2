import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 4레벨: 수식 출력과 나머지(%)의 실전 활용 (15단계)
// - [1~10단계] 블록 ➔ 타이핑 1:1 교차 5쌍
// - [11~12단계] 틀린 곳 수정 (fix_bug) 2문항
// - [13~14단계] 한 줄 완성 (one_line) 2문항
// - [15단계] 출력 결과 예측 선택 (predict_output) 1문항
// ============================================================================
export const PYTHON_LEVEL_4: PracticeRound = {
  id: 'py-basic-r4',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 4,
  title_ko: '4레벨: 수식 출력과 나머지(%)의 실전 활용',
  title_en: 'Level 4: Formula Printing & Modulo Usage',
  totalQuestions: 15,
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
      prompt_ko: '[블록 조립] 수식을 따옴표("")로 감싼 "3 + 5"를 조립해 글자 그대로 출력해보세요.',
      prompt_en: '[Block] Enclose "3 + 5" in quotes so it prints literally as text without calculating.',
      hint_ko: '따옴표로 감싼 수식은 덧셈 결과인 8이 아니라 적은 글자 그대로 화면에 나타납니다.',
      hint_en: 'A quoted expression prints the exact characters rather than the sum 8.',
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
      prompt_ko: '[빈칸 채우기] 양쪽 빈칸에 큰따옴표를 채워 3 + 5 = 8을 글자 그대로 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in both outer blanks with double quotes to print 3 + 5 = 8 as text.',
      hint_ko: '수식이 계산되지 않고 문장 그대로 출력되도록 양쪽 빈칸에 큰따옴표(")를 입력하세요.',
      hint_en: 'Type double quotes (") in both blanks to enclose the entire formula text.',
      templateCode: 'print(§3 + 5 = 8§)',
      targetCode: 'print("3 + 5 = 8")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '3 + 5 = 8',
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
      prompt_ko: '[블록 조립] 수식 문자열 "3 + 5 ="과 실제 계산식 3+5를 쉼표로 나열해 출력해보세요.',
      prompt_en: '[Block] Combine the quoted string "3 + 5 =" and unquoted 3+5 with a comma.',
      hint_ko: '쉼표 앞은 문자열로 그대로 출력되고, 쉼표 뒤는 덧셈이 계산된 결과값이 출력됩니다.',
      hint_en: 'The part before the comma prints as text, while the expression after the comma is evaluated.',
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
      prompt_ko: '[빈칸 채우기] 빈칸에 알맞은 계산식을 채워 7 + 8 = 15가 출력되도록 해보세요.',
      prompt_en: '[Fill Blank] Fill in the blank with the calculation expression so 7 + 8 = 15 is printed.',
      hint_ko: '파이썬이 직접 계산한 결과를 출력하도록 쉼표 뒤에는 따옴표 없이 7+8을 적어보세요.',
      hint_en: 'Write the addition expression 7+8 without quotes after the comma so Python evaluates it.',
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
      prompt_ko: '[블록 조립] 10을 2로 나눈 나머지를 구하는 10%2를 조립해 짝수 여부(0)를 확인해보세요.',
      prompt_en: '[Block] Trace 10%2 using the modulo operator (%) to check that the remainder is 0.',
      hint_ko: '10을 2로 나누면 남는 나머지가 없으므로 0이 출력됩니다.',
      hint_en: '10 divided by 2 leaves no remainder, so 0 is printed.',
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
      prompt_ko: '[빈칸 채우기] 두 빈칸에 나머지 연산자를 채워 8 % 2 = 0을 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the modulo operator in both blanks to print 8 % 2 = 0.',
      hint_ko: '설명 라벨 안과 쉼표 뒤 계산식의 두 빈칸 모두에 퍼센트(%) 기호를 입력하세요.',
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
    // 페어 4: 나머지(%)의 실전 활용 (10으로 나눈 나머지로 일의 자리 숫자 추출)
    // ------------------------------------------------------------------------
    {
      id: 7,
      step: 7,
      type: 'block',
      kind: 'standard',
      prompt_ko: '[블록 조립] 47을 10으로 나눈 나머지(47%10)로 일의 자리 숫자 7을 추출해 출력해보세요.',
      prompt_en: '[Block] Use 47%10 to extract and print the ones digit 7.',
      hint_ko: '47을 10으로 나눈 몫은 4이고 나머지는 일의 자리 숫자인 7이 됩니다.',
      hint_en: '47 divided by 10 has a quotient of 4 and a remainder of 7, which is its last digit.',
      targetCode: 'print("Last digit:", 47%10)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Last digit: 7',
        },
      ],
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '[빈칸 채우기] 빈칸에 나머지 연산식을 채워 128의 일의 자리 숫자인 Last digit: 8을 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the blank with a modulo expression so Last digit: 8 is printed.',
      hint_ko: '128의 일의 자리 숫자만 남기려면 128을 10으로 나눈 나머지 식 128%10을 작성해보세요.',
      hint_en: 'Write 128%10 to find the remainder when 128 is divided by 10.',
      templateCode: 'print("Last digit:", §§§§§§)',
      targetCode: 'print("Last digit:", 128%10)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Last digit: 8',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 페어 5: 몫(Quotient)과 나머지(Remainder) 라벨 동시 출력
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'block',
      kind: 'standard',
      prompt_ko: '[블록 조립] 라벨과 20//3, 20%3 수식을 쉼표로 번갈아 나열해 한 줄로 출력해보세요.',
      prompt_en: '[Block] Alternate labels and 20//3, 20%3 with commas inside print().',
      hint_ko: '쉼표로 구분된 네 항목이 각각 공백 한 칸을 사이에 두고 순서대로 출력됩니다.',
      hint_en: 'All four comma-separated items are printed in order with a single space between each.',
      targetCode: 'print("Quotient:", 20//3, "Remainder:", 20%3)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Quotient: 6 Remainder: 2',
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '[빈칸 채우기] 두 빈칸에 몫과 나머지 연산자를 채워 Quotient: 4 Remainder: 2를 완성해보세요.',
      prompt_en: '[Fill Blank] Fill in the floor division and modulo operators to print Quotient: 4 Remainder: 2.',
      hint_ko: '첫 번째 빈칸에는 몫 연산자(//), 두 번째 빈칸에는 나머지 연산자(%)를 입력하세요.',
      hint_en: 'Enter floor division (//) in the first blank and modulo (%) in the second blank.',
      templateCode: 'print("Quotient:", 14§§3, "Remainder:", 14§3)',
      targetCode: 'print("Quotient:", 14//3, "Remainder:", 14%3)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Quotient: 4 Remainder: 2',
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
      prompt_ko: '[틀린 곳 수정] 구구단 계산 결과 5 * 6 = 30이 출력되도록 쉼표 뒤의 연산자를 수정해보세요.',
      prompt_en: '[Fix Bug] Fix the operator after the comma so that 5 * 6 = 30 is printed.',
      hint_ko: '앞의 수식 라벨에 맞게 쉼표 뒤 계산식의 + 기호를 곱셈 기호(*)로 고쳐보세요.',
      hint_en: 'Change + to * in the calculation expression after the comma.',
      templateCode: 'print("5 * 6 =", 5+6)',
      targetCode: 'print("5 * 6 =", 5*6)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '5 * 6 = 30',
        },
      ],
    },
    {
      id: 12,
      step: 12,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '[틀린 곳 수정] 15를 2로 나눈 나머지(Odd: 1)가 출력되도록 연산 기호를 수정해보세요.',
      prompt_en: '[Fix Bug] Fix the operator so the remainder of 15 divided by 2 prints as Odd: 1.',
      hint_ko: '나머지를 구하려면 일반 나눗셈(/) 대신 나머지 연산자(%)를 사용해야 합니다.',
      hint_en: 'Use the modulo operator (%) instead of division (/) to find the remainder.',
      templateCode: 'print("Odd:", 15/2)',
      targetCode: 'print("Odd:", 15%2)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Odd: 1',
        },
      ],
    },
    {
      id: 13,
      step: 13,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '[한 줄 완성] 둘째 줄에 라벨과 15를 2로 나눈 나머지를 연결해 Remainder: 1을 출력해보세요.',
      prompt_en: '[Complete Line] Complete line 2 to print the label and remainder of 15 divided by 2.',
      hint_ko: '첫째 줄 예제의 라벨과 나머지 연산 구조를 그대로 활용하되 숫자만 15로 바꾸어보세요.',
      hint_en: 'Follow the label and modulo structure of line 1, changing the dividend to 15.',
      templateCode: 'print("Remainder:", 10%2)\n§§§§§§§§§§§§§§§§§§§§§§§§§',
      targetCode: 'print("Remainder:", 10%2)\nprint("Remainder:", 15%2)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Remainder: 0\nRemainder: 1',
        },
      ],
    },
    {
      id: 14,
      step: 14,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '[한 줄 완성] 둘째 줄에 93을 10으로 나눈 나머지를 구해 Last: 3을 출력해보세요.',
      prompt_en: '[Complete Line] Complete line 2 using 93%10 to print Last: 3.',
      hint_ko: '첫째 줄처럼 "Last:" 뒤에 93%10을 쉼표로 나열해보세요.',
      hint_en: 'Follow line 1 and write print("Last:", 93%10) on line 2.',
      templateCode: 'print("Last:", 47%10)\n§§§§§§§§§§§§§§§§§§§§§',
      targetCode: 'print("Last:", 47%10)\nprint("Last:", 93%10)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Last: 7\nLast: 3',
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
      hint_ko: '첫째 줄은 나머지를 구하는 연산이고, 둘째 줄은 소수점을 버린 정수 몫을 구하는 연산입니다.',
      hint_en: 'Line 1 calculates the remainder after division, while line 2 calculates the integer quotient.',
      targetCode: 'print("9 % 2 =", 9%2)\nprint("9 // 2 =", 9//2)',
      choices: [
        '9 % 2 = 4\n9 // 2 = 1',
        '9 % 2 = 1\n9 // 2 = 4.5',
        '9 = 1\n4 = 4',
        '9 % 2 = 1\n9 // 2 = 4',
      ],
      correctChoiceIndex: 3,
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '9 % 2 = 1\n9 // 2 = 4',
        },
      ],
    },
  ],
};
