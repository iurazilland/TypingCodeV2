import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 14레벨: 다중 할당과 input().split() (15단계)
// - [1~10단계] 블록 ➔ 타이핑 1:1 교차 5쌍
// - [11~12단계] 틀린 곳 수정 (fix_bug) 2문항
// - [13~14단계] 한 줄 완성 (one_line) 2문항
// - [15단계] 출력 결과 예측 선택 (predict_output) 1문항
// ============================================================================
export const PYTHON_LEVEL_14: PracticeRound = {
  id: 'py-basic-r14',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 14,
  title_ko: '14레벨: 다중 변수 할당과 input().split()',
  title_en: 'Level 14: Multiple Assignment & input().split()',
  totalQuestions: 15,
  unlockedBlocks: ['print', 'variable', 'input', 'type', 'method'],
  questions: [
    // ------------------------------------------------------------------------
    // Pair 1 (1~2단계): 한 줄 다중 변수 할당 (a, b, c = 10, 20, 30)
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      kind: 'standard',
      prompt_ko: '[블록 조립] 다중 할당으로 a, b, c에 10, 20, 30을 한 줄에 대입해 합계 60을 출력해보세요.',
      prompt_en: '[Block] Assign 10, 20, 30 to a, b, c on one line and print their sum 60.',
      hint_ko: '첫 번째 변수부터 순서대로 대응하는 위치의 숫자가 각각 저장됩니다.',
      hint_en: 'Each variable on the left receives the value at the matching position on the right.',
      targetCode: 'a, b, c = 10, 20, 30\nprint(a + b + c)',
      expectedVariables: { a: 10, b: 20, c: 30 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '60',
        },
      ],
    },
    {
      id: 2,
      step: 2,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '[빈칸 채우기] 두 빈칸에 구분 기호를 채워 x, y, z에 1, 2, 3을 대입하고 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the two separator symbols to assign 1, 2, 3 to x, y, z.',
      hint_ko: '한 줄에서 여러 변수를 나란히 선언할 때는 쉼표(,)로 변수 사이를 구분합니다.',
      hint_en: 'Separate multiple variable names on the left side with commas (,).',
      templateCode: 'x§ y§ z = 1, 2, 3\nprint(x, y, z)',
      targetCode: 'x, y, z = 1, 2, 3\nprint(x, y, z)',
      expectedVariables: { x: 1, y: 2, z: 3 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '1 2 3',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 2 (3~4단계): 두 변수 값 한 줄에 맞바꾸기 (x, y = y, x)
    // ------------------------------------------------------------------------
    {
      id: 3,
      step: 3,
      type: 'block',
      kind: 'standard',
      prompt_ko: '[블록 조립] 다중 할당(x, y = y, x)으로 두 변수의 값을 맞바꾸어 9 5를 출력해보세요.',
      prompt_en: '[Block] Swap x and y in one line using x, y = y, x and print 9 5.',
      hint_ko: '왼쪽과 오른쪽의 변수 순서를 반대로 적으면 두 변수에 담긴 값이 서로 교환됩니다.',
      hint_en: 'Reversing the variable order on the right side of = swaps their stored values.',
      targetCode: 'x, y = 5, 9\nx, y = y, x\nprint(x, y)',
      expectedVariables: { x: 9, y: 5 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '9 5',
        },
      ],
    },
    {
      id: 4,
      step: 4,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '[빈칸 채우기] 빈칸을 채워 left와 right의 값을 서로 맞바꾸고 B A를 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the blanks to swap left and right so that B A is printed.',
      hint_ko: '두 변수의 값을 서로 맞바꾸려면 등호 오른쪽에 right, left 순서로 적어줍니다.',
      hint_en: 'List right, left in reverse order on the right side of the equals sign.',
      templateCode: 'left, right = "A", "B"\nleft, right = §§§§§, §§§§\nprint(left, right)',
      targetCode: 'left, right = "A", "B"\nleft, right = right, left\nprint(left, right)',
      expectedVariables: { left: 'B', right: 'A' },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'B A',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 3 (5~6단계): input().split()으로 공백 기준 두 단어 분리 대입하기
    // ------------------------------------------------------------------------
    {
      id: 5,
      step: 5,
      type: 'block',
      kind: 'standard',
      prompt_ko: '[블록 조립] input().split()으로 공백 기준 두 단어를 분리해 역순으로 출력해보세요.',
      prompt_en: '[Block] Use input().split() to unpack two words and print them in reverse.',
      hint_ko: '.split()의 괄호를 비워두면 띄어쓰기를 기준으로 단어가 분리됩니다.',
      hint_en: 'Leaving the parentheses of .split() empty splits the input by spaces.',
      targetCode: 'first, second = input().split()\nprint(second, first)',
      testCases: [
        {
          id: 1,
          input: 'Python Code',
          expectedOutput: 'Code Python',
        },
        {
          id: 2,
          input: 'Hello World',
          expectedOutput: 'World Hello',
        },
      ],
    },
    {
      id: 6,
      step: 6,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '[빈칸 채우기] 공백 기준으로 쪼개는 메서드 이름을 채워 나라와 도시를 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the method name that splits text by spaces.',
      hint_ko: '문자열을 공백 단위로 쪼개는 문자열 메서드 split을 입력하세요.',
      hint_en: 'Call the string method split after the dot.',
      templateCode: 'city, country = input().§§§§§()\nprint(country, city)',
      targetCode: 'city, country = input().split()\nprint(country, city)',
      testCases: [
        {
          id: 1,
          input: 'Seoul Korea',
          expectedOutput: 'Korea Seoul',
        },
        {
          id: 2,
          input: 'Tokyo Japan',
          expectedOutput: 'Japan Tokyo',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 4 (7~8단계): input().split("구분자")로 특정 기호 기준 분리하기
    // ------------------------------------------------------------------------
    {
      id: 7,
      step: 7,
      type: 'block',
      kind: 'standard',
      prompt_ko: '[블록 조립] .split("-")으로 날짜를 분리해 슬래시(/)로 연결해 출력해보세요.',
      prompt_en: '[Block] Split the date on "-" with .split("-") and print with sep="/".',
      hint_ko: '.split("-")로 하이픈을 기준으로 날짜를 쪼개고, sep="/"로 슬래시를 넣어 출력합니다.',
      hint_en: 'Split the date string on "-" and print the three parts using sep="/".',
      targetCode: 'y, m, d = input().split("-")\nprint(y, m, d, sep="/")',
      testCases: [
        {
          id: 1,
          input: '2026-10-31',
          expectedOutput: '2026/10/31',
        },
        {
          id: 2,
          input: '2025-05-01',
          expectedOutput: '2025/05/01',
        },
      ],
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '[빈칸 채우기] 두 빈칸을 채워 콜론(:)으로 구분된 시각을 h와 m으로 분리해보세요.',
      prompt_en: '[Fill Blank] Fill in the blanks to split a colon-separated time into h and m.',
      hint_ko: '첫째 빈칸에는 split을 적고, 괄호 안에는 구분 기호 ":"를 입력하세요.',
      hint_en: 'Write split first, and pass ":" inside its parentheses.',
      templateCode: 'h, m = input().§§§§§(§§§)\nprint(h, "h", m, "m")',
      targetCode: 'h, m = input().split(":")\nprint(h, "h", m, "m")',
      testCases: [
        {
          id: 1,
          input: '14:30',
          expectedOutput: '14 h 30 m',
        },
        {
          id: 2,
          input: '09:05',
          expectedOutput: '09 h 05 m',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 5 (9~10단계): input().split()으로 받은 두 문자열을 int()로 변환하여 연산하기
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'block',
      kind: 'standard',
      prompt_ko: '[블록 조립] 공백으로 분리한 두 값을 각각 int()로 변환해 더한 합계를 출력해보세요.',
      prompt_en: '[Block] Convert both unpacked values with int() and print their sum.',
      hint_ko: 'int(a) + int(b)처럼 두 변수를 각각 정수로 변환한 뒤 더하면 산술 합계가 계산됩니다.',
      hint_en: 'Converting both variables with int() ensures + performs integer addition.',
      targetCode: 'a, b = input().split()\ntotal = int(a) + int(b)\nprint(total)',
      testCases: [
        {
          id: 1,
          input: '35 65',
          expectedOutput: '100',
        },
        {
          id: 2,
          input: '12 8',
          expectedOutput: '20',
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '[빈칸 채우기] 두 빈칸에 정수 변환 함수를 채워 가로(w)와 세로(h)의 곱을 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in both blanks with int to print the product of w and h.',
      hint_ko: '쪼개진 두 변수 w와 h를 각각 int 함수로 감싸 정수로 변환해보세요.',
      hint_en: 'Wrap both w and h with int before multiplying.',
      templateCode: 'w, h = input().split()\narea = §§§(w) * §§§(h)\nprint(area)',
      targetCode: 'w, h = input().split()\narea = int(w) * int(h)\nprint(area)',
      testCases: [
        {
          id: 1,
          input: '7 8',
          expectedOutput: '56',
        },
        {
          id: 2,
          input: '5 12',
          expectedOutput: '60',
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
      prompt_ko: '[틀린 곳 수정] 하이픈(-)으로 연결된 입력값을 분리하도록 구분 기호를 수정해보세요.',
      prompt_en: '[Fix Bug] Fix the delimiter inside split() to separate the hyphenated input.',
      hint_ko: '입력값이 하이픈(-)으로 구분되어 있으므로 split(":")을 split("-")으로 수정해보세요.',
      hint_en: 'Since the input is separated by hyphens, change split(":") to split("-").',
      templateCode: 'a, b = input().split(":")\nprint(a, b)',
      targetCode: 'a, b = input().split("-")\nprint(a, b)',
      testCases: [
        {
          id: 1,
          input: '10-20',
          expectedOutput: '10 20',
        },
        {
          id: 2,
          input: '30-40',
          expectedOutput: '30 40',
        },
      ],
    },
    {
      id: 12,
      step: 12,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '[틀린 곳 수정] 두 변수 x와 y의 값이 서로 맞바뀌어 20 10이 출력되도록 둘째 줄을 수정해보세요.',
      prompt_en: '[Fix Bug] Fix line 2 so the values of x and y are swapped to print 20 10.',
      hint_ko: '두 변수의 값을 교환하려면 등호 오른쪽에 변수 순서를 뒤집어 y, x로 적어야 합니다.',
      hint_en: 'Write y, x on the right side of = on line 2 to swap the two variables.',
      templateCode: 'x, y = 10, 20\nx, y = x, y\nprint(x, y)',
      targetCode: 'x, y = 10, 20\nx, y = y, x\nprint(x, y)',
      expectedVariables: { x: 20, y: 10 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '20 10',
        },
      ],
    },
    {
      id: 13,
      step: 13,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '[한 줄 완성] 첫째 줄에서 공백으로 구분된 두 입력값을 변수 a, b에 나누어 저장해보세요.',
      prompt_en: '[Complete Line] Complete line 1 to split two space-separated inputs into a and b.',
      hint_ko: 'a, b = input().split()을 첫째 줄에 작성해 두 값을 분리해 담아보세요.',
      hint_en: 'Write a, b = input().split() on line 1 to unpack the two inputs.',
      templateCode: '§§§§§§§§§§§§§§§§§§§§§§\nprint(int(a) + int(b))',
      targetCode: 'a, b = input().split()\nprint(int(a) + int(b))',
      testCases: [
        {
          id: 1,
          input: '120 80',
          expectedOutput: '200',
        },
        {
          id: 2,
          input: '33 17',
          expectedOutput: '50',
        },
      ],
    },
    {
      id: 14,
      step: 14,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '[한 줄 완성] 둘째 줄에서 다중 할당으로 a와 b의 값을 서로 맞바꾸어 7 3을 출력해보세요.',
      prompt_en: '[Complete Line] Complete line 2 using multiple assignment to swap a and b and print 7 3.',
      hint_ko: 'a, b = b, a를 작성하면 두 변수의 값이 한 줄에서 서로 교환됩니다.',
      hint_en: 'Write a, b = b, a on line 2 to swap the two variables.',
      templateCode: 'a, b = 3, 7\n§§§§§§§§§§§\nprint(a, b)',
      targetCode: 'a, b = 3, 7\na, b = b, a\nprint(a, b)',
      expectedVariables: { a: 7, b: 3 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '7 3',
        },
      ],
    },
    {
      id: 15,
      step: 15,
      type: 'quiz',
      kind: 'predict_output',
      prompt_ko: '[출력 결과 예측] 다음 코드의 실행 결과를 선택해보세요.',
      prompt_en: '[Predict Output] When 10 20 is given as input, select the exact output of the Python code.',
      hint_ko: '둘째 줄에서 a와 b가 맞바뀐 뒤, 문자열 결합(a + b)과 정수 덧셈(int(a) + int(b))을 비교해보세요.',
      hint_en: 'Track the swap on line 2 first, then compare string concatenation on line 3 with integer addition on line 4.',
      targetCode: 'a, b = input().split()\na, b = b, a\nprint(a + b)\nprint(int(a) + int(b))',
      choices: ['2010\n30', '1020\n30', '30\n30', '20 10\n30'],
      correctChoiceIndex: 0,
      testCases: [
        {
          id: 1,
          input: '10 20',
          expectedOutput: '2010\n30',
        },
      ],
    },
  ],
};
