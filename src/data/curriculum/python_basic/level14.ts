import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 14레벨: 다중 할당과 input().split() (13단계 표준 구성)
// - [1,3,5,7,9단계] 블록 코딩 개념 도입 (다중 변수 및 input().split() 블록 사전 배치)
// - [2,4,6,8,10단계] 빈칸 채우기 타이핑 실습 (fill_blank)
// - [11단계] 버그 수정 (fix_bug)
// - [12단계] 예제 아래 한 줄 코드 추가 작성 (one_line)
// - [13단계] 출력 결과 예측 4지선다 퀴즈 (predict_output)
// ============================================================================
export const PYTHON_LEVEL_14: PracticeRound = {
  id: 'py-basic-r14',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 14,
  title_ko: '14레벨: 다중 변수 할당과 input().split()',
  title_en: 'Level 14: Multiple Assignment & input().split()',
  totalQuestions: 13,
  unlockedBlocks: ['print', 'variable', 'input', 'type', 'method'],
  questions: [
    // ------------------------------------------------------------------------
    // Pair 1 (1~2단계): 한 줄 다중 변수 할당 (a, b, c = 10, 20, 30)
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      prompt_ko: '파이썬에서는 등호(=) 양쪽에 쉼표(,)로 여러 변수와 값을 같은 개수만큼 나열해 한 줄에서 순서대로 한 번에 대입(다중 할당)할 수 있습니다. 블록의 코드를 따라 입력해보세요.',
      prompt_en: 'In Python, listing matching numbers of variables and values separated by commas (,) on both sides of = assigns them all in order on a single line. Trace the block code.',
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
      prompt_ko: '두 빈칸에 구분 기호를 채워 한 줄에서 세 변수 x, y, z에 각각 1, 2, 3을 대입하고 1 2 3을 출력해보세요.',
      prompt_en: 'Fill in the two separator symbols to assign 1, 2, 3 to x, y, z on one line and print 1 2 3.',
      hint_ko: '한 줄에서 여러 변수를 나란히 선언할 때는 오른쪽 값들과 마찬가지로 쉼표 기호로 변수 사이를 구분합니다.',
      hint_en: 'Separate multiple variable names on the left side with commas, matching how the values are separated on the right.',
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
      prompt_ko: '다중 할당(x, y = y, x)을 활용하면 등호 오른쪽의 두 값이 동시에 읽힌 뒤 대입되므로, 별도의 임시 변수 없이도 두 변수의 값을 한 줄에 맞바꿀 수 있습니다. 블록의 코드를 따라 입력해보세요.',
      prompt_en: 'Multiple assignment (x, y = y, x) evaluates both values on the right simultaneously, allowing you to swap two variables in one line without a temporary variable. Trace the block code.',
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
      prompt_ko: '빈칸을 채워 변수 left와 right에 담긴 문자열을 서로 맞바꾸고 B A가 출력되도록 해보세요.',
      prompt_en: 'Fill in the blanks to swap the values of left and right so that B A is printed.',
      hint_ko: '두 변수의 값을 서로 맞바꾸려면 등호 오른쪽에는 왼쪽 변수들의 순서를 반대로 뒤집어 적어줍니다.',
      hint_en: 'To swap two variables in one line, list them in reverse order on the right side of the equals sign.',
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
      prompt_ko: 'input().split()은 한 줄로 입력된 문자열을 공백(띄어쓰기) 기준으로 쪼개어 왼쪽의 여러 변수에 차례로 나누어 담아줍니다. 블록의 코드를 따라 입력해보세요. (터미널 입력: Python Code)',
      prompt_en: 'Calling input().split() splits a single line of input on whitespace and unpacks each word into the variables on the left in order. Trace the block code (Terminal input: Python Code).',
      hint_ko: '.split()의 괄호를 비워두면 띄어쓰기를 기준으로 단어가 분리되어 두 변수에 각각 저장됩니다.',
      hint_en: 'Leaving the parentheses of .split() empty splits the input by spaces into the two variables.',
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
      prompt_ko: '빈칸에 문자열을 공백 기준으로 쪼개는 메서드 이름을 채워 도시와 나라 이름을 분리하고 순서를 뒤집어 출력해보세요. (터미널 입력: Seoul Korea)',
      prompt_en: 'Fill in the method name that splits text by whitespace to separate city and country and print country, city. (Terminal input: Seoul Korea)',
      hint_ko: '입력받은 한 줄 문자열을 공백 단위로 쪼갤 때는 영어로 쪼개다·나누다를 뜻하는 다섯 글자 문자열 메서드를 점(.) 뒤에 붙입니다.',
      hint_en: 'After the dot, call the five-letter string method whose English meaning is "to divide or break apart".',
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
      prompt_ko: '.split("-")처럼 괄호 안에 특정 구분 기호 문자열을 넣으면 공백 대신 해당 기호를 기준으로 입력 문자열을 잘라 각 변수에 나누어 담습니다. 블록의 코드를 따라 입력해보세요. (터미널 입력: 2026-10-31)',
      prompt_en: 'Passing a delimiter string like .split("-") splits the input at every matching character instead of whitespace. Trace the block code (Terminal input: 2026-10-31).',
      hint_ko: '.split("-")로 하이픈을 기준으로 날짜를 쪼개고, print()의 sep="/"로 슬래시를 넣어 출력합니다.',
      hint_en: 'Split the date string on "-" and print the three parts separated by "/" using sep="/".',
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
      prompt_ko: '두 빈칸을 채워 콜론(:)으로 구분된 시각 입력을 h와 m으로 분리하고 지정된 형식으로 출력해보세요. (터미널 입력: 14:30)',
      prompt_en: 'Fill in the blanks to split a colon-separated time into h and m and print it (Terminal input: 14:30).',
      hint_ko: '첫째 빈칸에는 쪼개다를 뜻하는 다섯 글자 메서드를 적고, 괄호 안에는 자를 기준이 되는 기호를 큰따옴표로 감싸 문자열로 넣어보세요.',
      hint_en: 'Write the five-letter method meaning "to break apart" first, and pass the colon character wrapped in double quotes inside its parentheses.',
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
      prompt_ko: 'input().split()으로 쪼개어 담은 각 변수는 여전히 문자열(str)이므로, 숫자 덧셈을 하려면 각 변수를 int()로 변환해 더해야 합니다. 블록의 코드를 따라 입력해보세요. (터미널 입력: 35 65)',
      prompt_en: 'Values unpacked from input().split() are still strings, so convert each variable with int() before adding them numerically. Trace the block code (Terminal input: 35 65).',
      hint_ko: 'int(a) + int(b)처럼 두 변수를 각각 정수로 변환한 뒤 더하면 산술 합계가 계산됩니다.',
      hint_en: 'Converting both variables with int() ensures + performs integer addition rather than string concatenation.',
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
      prompt_ko: '두 빈칸에 정수 변환 함수 이름을 채워 한 줄에 입력된 가로(w)와 세로(h)의 곱을 출력해보세요. (터미널 입력: 7 8)',
      prompt_en: 'Fill in both blanks with the integer conversion function to print the product of w and h (Terminal input: 7 8).',
      hint_ko: '쪼개진 두 변수는 문자열 상태이므로 곱셈을 하기 전에 각각 정수(integer)의 앞 세 글자를 딴 변환 함수로 감싸주세요.',
      hint_en: 'Since both divided pieces are strings, wrap each one with the three-letter casting function taken from "integer" before multiplying.',
      templateCode: 'w, h = input().split()\nprint(§§§(w) * §§§(h))',
      targetCode: 'w, h = input().split()\nprint(int(w) * int(h))',
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
    // 11단계: 버그 수정 (fix_bug) - .split() 누락으로 인한 언패킹 ValueError 교정
    // ------------------------------------------------------------------------
    {
      id: 11,
      step: 11,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '한 줄에 공백으로 입력된 두 숫자를 나누지 않고 바로 a, b에 대입해 발생한 오류(ValueError)를 수정해보세요. (터미널 입력: 15 25)',
      prompt_en: 'Fix the ValueError caused by unpacking raw input() directly into a, b without splitting (Terminal input: 15 25).',
      hint_ko: '입력받은 통째의 한 줄 문자열을 공백 기준으로 쪼개는 과정이 빠져 있어 두 변수에 나누어 담지 못하고 있습니다.',
      hint_en: 'A ValueError occurs because the raw input line is never divided by whitespace into two separate pieces before unpacking into a and b.',
      templateCode: 'a, b = input()\nprint(int(a) + int(b))',
      targetCode: 'a, b = input().split()\nprint(int(a) + int(b))',
      testCases: [
        {
          id: 1,
          input: '15 25',
          expectedOutput: '40',
        },
        {
          id: 2,
          input: '40 60',
          expectedOutput: '100',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 12단계: 예제 아래 한 줄 추가 작성 (one_line)
    // ------------------------------------------------------------------------
    {
      id: 12,
      step: 12,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '공백 기준으로 두 값을 입력받는 코드 아래에 한 줄을 추가하여 두 값을 정수로 변환해 더한 합계를 출력해보세요. (터미널 입력: 120 80)',
      prompt_en: 'Type line 1 and add a line below to convert a and b to integers and print their sum (Terminal input: 120 80).',
      hint_ko: '위 줄에서 분리된 두 변수는 아직 문자열이므로, 각각 정수로 형변환하여 더한 식을 출력 함수 안에 작성해보세요.',
      hint_en: 'Because the two variables from line 1 are strings, convert each one to an integer and pass their sum into the print function.',
      templateCode: 'a, b = input().split()\n§§§§§§§§§§§§§§§§§§§§§§',
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

    // ------------------------------------------------------------------------
    // 13단계: 출력 결과 예측 선택 (predict_output)
    // ------------------------------------------------------------------------
    {
      id: 13,
      step: 13,
      type: 'quiz',
      kind: 'predict_output',
      prompt_ko: '입력값으로 10 20이 주어질 때, 다음 파이썬 코드의 실행 결과를 선택해보세요.',
      prompt_en: 'When 10 20 is given as input, select the exact output of the following Python code.',
      hint_ko: '둘째 줄에서 두 문자열 변수의 값이 서로 맞바뀐 뒤, 셋째 줄의 문자열 이어붙이기 순서와 넷째 줄의 정수 덧셈 결과를 각각 추적해보세요.',
      hint_en: 'Track the swap of the two string variables on line 2 first, then compare the order of string concatenation on line 3 with integer addition on line 4.',
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

