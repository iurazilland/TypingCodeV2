import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 15레벨: 변수·자료형·입력 종합 문제풀이 (10단계 - 전 문항 실전 문제풀이)
// - 블록 모드 없이 Section 2 (9~14레벨) 핵심 문법을 4대 문제 유형으로 총점검
// - [1~3단계] 빈칸 채우기 (fill_blank)
// - [4~6단계] 틀린 곳 수정 (fix_bug)
// - [7~8단계] 한 줄 완성 (one_line)
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
  unlockedBlocks: [],
  questions: [
    // ------------------------------------------------------------------------
    // 1~3단계: 빈칸 채우기 (fill_blank)
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '[빈칸 채우기] 두 빈칸에 복합 대입 연산자를 채워 500을 더한 뒤 2배로 갱신해 3000을 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the two compound operators to add 500 to price, then double it to print 3000.',
      hint_ko: '둘째 줄에는 +=를, 셋째 줄에는 *=를 차례로 입력하세요.',
      hint_en: 'Use += on line 2 and *= on line 3.',
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
      prompt_ko: '[빈칸 채우기] 두 빈칸에 형변환 함수를 채워 정수 n에 1을 더한 뒤 "No." + n을 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the two casting functions to add 1 to n and print "No." + n.',
      hint_ko: '첫째 줄에서는 정수로 바꾸는 int를, 셋째 줄에서는 문자열로 바꾸는 str을 입력하세요.',
      hint_en: 'Convert the input with int on line 1, then convert n back with str on line 3.',
      templateCode: 'n = §§§(input())\nn += 1\nn = §§§(n)\nprint("No." + n)',
      targetCode: 'n = int(input())\nn += 1\nn = str(n)\nprint("No." + n)',
      testCases: [
        {
          id: 1,
          input: '9',
          expectedOutput: 'No.10',
        },
        {
          id: 2,
          input: '19',
          expectedOutput: 'No.20',
        },
      ],
    },
    {
      id: 3,
      step: 3,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '[빈칸 채우기] 첫째 줄 빈칸을 채워 하이픈(-) 날짜를 y, m, d로 분리해 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the blanks on line 1 to read and split a hyphenated date.',
      hint_ko: '첫째 줄에 입력 함수 input과 문자열 분리 메서드 split을 차례로 입력하세요.',
      hint_en: 'Call input() followed by .split("-") on line 1.',
      templateCode: 'y, m, d = §§§§§().§§§§§("-")\nprint(y, m, d, sep=".")',
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
      prompt_ko: '[틀린 곳 수정] 입력받은 숫자의 2배 계산값(30)이 출력되도록 변환 함수를 수정해보세요.',
      prompt_en: '[Fix Bug] Fix the conversion function on line 1 so n * 2 prints 30.',
      hint_ko: '산술 곱셈을 하려면 첫째 줄에서 str() 대신 정수 변환 함수 int()를 사용해야 합니다.',
      hint_en: 'Use int() instead of str() on line 1 so n is an integer before multiplying by 2.',
      templateCode: 'n = str(input())\nprint(n * 2)',
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
      prompt_ko: '[틀린 곳 수정] 체력(hp)이 30 깎인 뒤 이어서 20이 더 깎여 50이 출력되도록 셋째 줄을 수정해보세요.',
      prompt_en: '[Fix Bug] Fix the expression on line 3 so hp decreases by 30 and then 20 to print 50.',
      hint_ko: '셋째 줄에서 고정 숫자 80 대신 직전까지 갱신된 변수 hp를 사용해 20을 빼보세요.',
      hint_en: 'Use the updated hp variable rather than 80 on line 3 so both subtractions accumulate.',
      templateCode: 'hp = 100\nhp = hp - 30\nhp = 80 - 20\nprint(hp)',
      targetCode: 'hp = 100\nhp = hp - 30\nhp = hp - 20\nprint(hp)',
      expectedVariables: { hp: 50 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '50',
        },
      ],
    },
    {
      id: 6,
      step: 6,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '[틀린 곳 수정] 콜론(:)으로 분리한 두 숫자의 정수 덧셈 합계가 출력되도록 수정해보세요.',
      prompt_en: '[Fix Bug] Fix line 2 so the colon-separated numbers are added as integers.',
      hint_ko: '산술 덧셈을 수행하려면 둘째 줄의 str(a) + str(b)를 int(a) + int(b)로 수정해보세요.',
      hint_en: 'Change str(a) + str(b) to int(a) + int(b) on line 2.',
      templateCode: 'a, b = input().split(":")\nprint(str(a) + str(b))',
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
    // 7~8단계: 한 줄 완성 (one_line)
    // ------------------------------------------------------------------------
    {
      id: 7,
      step: 7,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '[한 줄 완성] 둘째 줄에서 다중 할당으로 x와 y의 값을 맞바꾸어 15가 출력되도록 해보세요.',
      prompt_en: '[Complete Line] Complete line 2 to swap x and y so that x - y prints 15.',
      hint_ko: 'x, y = y, x를 둘째 줄에 작성해 두 변수의 값을 교환해보세요.',
      hint_en: 'Write x, y = y, x on line 2 to swap the two variables.',
      templateCode: 'x, y = 10, 25\n§§§§§§§§§§§\nprint(x - y)',
      targetCode: 'x, y = 10, 25\nx, y = y, x\nprint(x - y)',
      expectedVariables: { x: 25, y: 10 },
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
      prompt_ko: '[한 줄 완성] 첫째 줄에서 공백으로 구분된 가로와 세로를 변수 w, h에 나누어 입력받아보세요.',
      prompt_en: '[Complete Line] Complete line 1 to split two space-separated inputs into w and h.',
      hint_ko: 'w, h = input().split()을 첫째 줄에 작성해 두 값을 분리해 담아보세요.',
      hint_en: 'Write w, h = input().split() on line 1.',
      templateCode: '§§§§§§§§§§§§§§§§§§§§§§\nprint(int(w) * int(h))',
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
      prompt_ko: '[출력 결과 예측] 다음 파이썬 코드를 실행했을 때 출력될 올바른 결과를 선택해보세요.',
      prompt_en: '[Predict Output] Select the exact output that will be printed when the Python code runs.',
      hint_ko: '초기값 20에 10을 더한 30을 4로 나눈 정수 몫(//=)이 얼마인지 계산해보세요.',
      hint_en: 'Add 10 to 20 first, then calculate the integer quotient produced by //= 4.',
      targetCode: 'x = 20\nx += 10\nx //= 4\nprint(x)',
      choices: ['7', '7.5', '2', '30'],
      correctChoiceIndex: 0,
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '7',
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'quiz',
      kind: 'predict_output',
      prompt_ko: '[출력 결과 예측] 다음 코드의 실행 결과를 선택해보세요.',
      prompt_en: '[Predict Output] When 4 3 is given as input, select the exact output of the Python code.',
      hint_ko: '주석 줄은 건너뛰며, 문자열 a("4")에 정수 int(b)(3)를 곱하면 문자열이 3번 반복됩니다.',
      hint_en: 'Skip the comment line; multiplying string a ("4") by int(b) (3) repeats "4" three times.',
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
