import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 15레벨: 변수·자료형·입력 종합 문제풀이 (10단계 - 전 문항 실전 문제풀이)
// - 블록 모드 없이 Section 2 (9~14레벨) 핵심 문법을 4대 문제 유형으로 총점검
// - [1~3단계] 빈칸 채우기 (fill_blank)
// - [4~6단계] 틀린 곳 수정 (fix_bug)
// - [7~8단계] 예제 아래 한 줄 추가 작성 (one_line)
// - [9~10단계] 출력 결과 예측 선택 (predict_output)
// ============================================================================
export const PYTHON_LEVEL_15: PracticeRound = {
  id: 'py-basic-r15',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 15,
  title_ko: '15레벨: 변수·자료형·입력 종합 문제풀이',
  title_en: 'Level 15: Section 2 Comprehensive Review',
  totalQuestions: 10,
  unlockedBlocks: ['print', 'variable', 'comment', 'input', 'method', 'type'],
  questions: [
    // ------------------------------------------------------------------------
    // 1~3단계: 빈칸 채우기 (fill_blank)
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸에 복합 대입 기호를 채워 price(1000)에 500을 먼저 더한 뒤 2배로 갱신하여 3000을 출력해보세요.',
      prompt_en: 'Fill in the two compound operators to add 500 to price (1000), then double it to print 3000.',
      hint_ko: '둘째 줄에는 누적 덧셈(+=), 셋째 줄에는 누적 곱셈(*=)을 입력하세요.',
      hint_en: 'Use += on line 2 to add 500 and *= on line 3 to multiply by 2.',
      templateCode: 'price = 1000\nprice §§ 500\nprice §§ 2\nprint(price)',
      targetCode: 'price = 1000\nprice += 500\nprice *= 2\nprint(price)',
      expectedVariables: { price: 3000 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '3000',
        },
      ],
    },
    {
      id: 2,
      step: 2,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸에 형변환 함수 이름을 채워 입력받은 정수 n에 1을 더한 값을 "Next: " 뒤에 이어 출력해보세요. (예: 9 입력 시 Next: 10)',
      prompt_en: 'Fill in the two casting functions to add 1 to input integer n and concatenate it after "Next: " (e.g., 9 -> Next: 10).',
      hint_ko: '첫째 줄에서는 입력을 정수로 바꾸는 int를, 둘째 줄에서는 계산된 숫자(n + 1)를 문자열로 바꾸는 str을 사용하세요.',
      hint_en: 'Use int on line 1 to parse the input, and str on line 2 to convert (n + 1) back to text for +.',
      templateCode: 'n = §§§(input())\nprint("Next: " + §§§(n + 1))',
      targetCode: 'n = int(input())\nprint("Next: " + str(n + 1))',
      testCases: [
        {
          id: 1,
          input: '9',
          expectedOutput: 'Next: 10',
        },
        {
          id: 2,
          input: '19',
          expectedOutput: 'Next: 20',
        },
      ],
    },
    {
      id: 3,
      step: 3,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸을 채워 하이픈(-)으로 입력된 날짜를 y, m, d로 분리하고 마침표(.)로 연결해 출력해보세요. (예: 2026-10-31 -> 2026.10.31)',
      prompt_en: 'Fill in the blanks to split a hyphenated date into y, m, d and join them with dots (.) (e.g., 2026-10-31 -> 2026.10.31).',
      hint_ko: '첫째 줄에는 문자열 분리 메서드 split을, 둘째 줄에는 출력 구분자 옵션 이름 sep을 입력하세요.',
      hint_en: 'Enter split on line 1 to divide the input string, and sep on line 2 to set the dot separator.',
      templateCode: 'y, m, d = input().§§§§§("-")\nprint(y, m, d, §§§=".")',
      targetCode: 'y, m, d = input().split("-")\nprint(y, m, d, sep=".")',
      testCases: [
        {
          id: 1,
          input: '2026-10-31',
          expectedOutput: '2026.10.31',
        },
        {
          id: 2,
          input: '2025-01-01',
          expectedOutput: '2025.01.01',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 4~6단계: 틀린 곳 수정 (fix_bug)
    // ------------------------------------------------------------------------
    {
      id: 4,
      step: 4,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '입력받은 숫자의 2배 계산값 대신 문자열이 두 번 반복되어 나오는 버그를 수정해보세요. (예: 15 입력 시 1515가 아닌 30 출력)',
      prompt_en: 'Fix the bug where multiplying input n by 2 repeats text instead of doubling the number (e.g., 15 -> 30).',
      hint_ko: 'input()은 문자열을 반환하므로 int(input())으로 감싸 정수로 변환해야 n * 2가 산술 곱셈으로 계산됩니다.',
      hint_en: 'Wrap input() with int(input()) so n * 2 performs numeric multiplication instead of string repetition.',
      templateCode: 'n = input()\nprint(n * 2)',
      targetCode: 'n = int(input())\nprint(n * 2)',
      testCases: [
        {
          id: 1,
          input: '15',
          expectedOutput: '30',
        },
        {
          id: 2,
          input: '7',
          expectedOutput: '14',
        },
      ],
    },
    {
      id: 5,
      step: 5,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '문자열 "Lv."과 정수 변수 lv(10)를 바로 +로 연결해 발생한 오류(TypeError)를 수정하여 Lv.10을 출력해보세요.',
      prompt_en: 'Fix the TypeError caused by concatenating "Lv." and integer lv (10) so Lv.10 prints cleanly.',
      hint_ko: '정수 변수 lv를 str(lv)로 문자열 변환한 뒤 +로 이어붙여보세요.',
      hint_en: 'Convert lv to a string using str(lv) before concatenating with +.',
      templateCode: 'lv = 10\nprint("Lv." + lv)',
      targetCode: 'lv = 10\nprint("Lv." + str(lv))',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Lv.10',
        },
      ],
    },
    {
      id: 6,
      step: 6,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '콜론(:)으로 분리한 두 숫자가 문자열로 이어붙는 버그를 수정하여 실제 정수 덧셈 결과가 출력되도록 해보세요. (예: 3:7 -> 10)',
      prompt_en: 'Fix the bug where colon-separated numbers concatenate as strings instead of adding as integers (e.g., 3:7 -> 10).',
      hint_ko: 'split(":")으로 나뉜 a와 b는 문자열이므로 int(a) + int(b)로 각각 정수 변환하여 더하세요.',
      hint_en: 'a and b from split(":") are strings; convert each with int(a) + int(b).',
      templateCode: 'a, b = input().split(":")\nprint(a + b)',
      targetCode: 'a, b = input().split(":")\nprint(int(a) + int(b))',
      testCases: [
        {
          id: 1,
          input: '3:7',
          expectedOutput: '10',
        },
        {
          id: 2,
          input: '12:8',
          expectedOutput: '20',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 7~8단계: 예제 아래 한 줄 추가 작성 (one_line)
    // ------------------------------------------------------------------------
    {
      id: 7,
      step: 7,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '두 변수 x와 y의 값을 맞바꾸는 코드 아래에 한 줄을 추가하여 바뀐 x에서 y를 뺀 결과 15를 출력해보세요.',
      prompt_en: 'Type the variable swap lines and add a line below to print x - y (15).',
      hint_ko: '두 줄을 입력해 x=25, y=10으로 맞바꾼 뒤, 셋째 줄에 print(x - y)를 입력하세요.',
      hint_en: 'Type the first two lines to swap x=25 and y=10, then write print(x - y) on line 3.',
      templateCode: 'x, y = 10, 25\nx, y = y, x\n§§§§§§§§§§§§',
      targetCode: 'x, y = 10, 25\nx, y = y, x\nprint(x - y)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '15',
        },
      ],
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '공백으로 구분된 가로와 세로를 입력받는 코드 아래에 한 줄을 추가하여 두 값을 정수로 변환해 곱한 넓이를 출력해보세요. (예: 6 8 -> 48)',
      prompt_en: 'Type line 1 and add a line below to convert w and h to integers and print their product (e.g., 6 8 -> 48).',
      hint_ko: '첫째 줄을 입력하고 Enter를 누른 뒤, 둘째 줄에 print(int(w) * int(h))를 입력하세요.',
      hint_en: 'Type line 1, press Enter, and write print(int(w) * int(h)) on line 2.',
      templateCode: 'w, h = input().split()\n§§§§§§§§§§§§§§§§§§§§§§',
      targetCode: 'w, h = input().split()\nprint(int(w) * int(h))',
      testCases: [
        {
          id: 1,
          input: '6 8',
          expectedOutput: '48',
        },
        {
          id: 2,
          input: '10 5',
          expectedOutput: '50',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 9~10단계: 출력 결과 예측 선택 (predict_output)
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'quiz',
      kind: 'predict_output',
      prompt_ko: '다음 파이썬 코드를 실행했을 때 화면에 출력될 올바른 결과를 선택해보세요.',
      prompt_en: 'Select the exact output that will be printed when the following Python code runs.',
      hint_ko: '15에 5를 더하면 20이 되고, /= 4는 실수 나눗셈 대입이므로 x는 5.0이 되며 자료형은 float입니다.',
      hint_en: '15 + 5 is 20, and /= 4 performs float division so x becomes 5.0 with type float.',
      targetCode: 'x = 15\nx += 5\nx /= 4\nprint(x, type(x))',
      choices: [
        "5.0 <class 'float'>",
        "5 <class 'int'>",
        "5.0 <class 'int'>",
        "3.75 <class 'float'>",
      ],
      correctChoiceIndex: 0,
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: "5.0 <class 'float'>",
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'quiz',
      kind: 'predict_output',
      prompt_ko: '입력값으로 4 3이 주어질 때, 다음 파이썬 코드의 실행 결과를 선택해보세요.',
      prompt_en: 'When 4 3 is given as input, select the exact output of the following Python code.',
      hint_ko: '둘째 줄은 # 주석이므로 무시됩니다. a는 문자열 "4", int(b)는 정수 3이므로 "4" * 3은 문자열 반복 444가 됩니다.',
      hint_en: 'Line 2 is a comment and ignored. Since a is string "4" and int(b) is 3, "4" * 3 repeats to 444.',
      targetCode: 'a, b = input().split()\n# a = "10"\nprint(a * int(b))',
      choices: ['444', '12', '101010', '30'],
      correctChoiceIndex: 0,
      testCases: [
        {
          id: 1,
          input: '4 3',
          expectedOutput: '444',
        },
      ],
    },
  ],
};
