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
  unlockedBlocks: ['print', 'variable', 'input', 'method', 'type'],
  questions: [
    // ------------------------------------------------------------------------
    // Pair 1 (1~2단계): 한 줄 다중 변수 할당 (a, b, c = 10, 20, 30)
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      prompt_ko: '변수 블록 한 줄을 이용해 a, b, c에 각각 10, 20, 30을 한 번에 저장하고, 아래에서 a + b + c를 출력해 60을 확인해보세요.',
      prompt_en: 'Assign 10, 20, 30 to a, b, c in a single variable block, then print a + b + c to output 60.',
      hint_ko: '변수 블록 왼쪽 칸에 a, b, c를 적고 오른쪽 칸에 10, 20, 30을 적으면 순서대로 짝지어 저장됩니다.',
      hint_en: 'Enter a, b, c on the left and 10, 20, 30 on the right of the variable block to assign all three at once.',
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
      hint_ko: '파이썬에서 여러 변수에 각각 다른 값을 대입할 때는 쉼표(,)로 변수 이름을 구분합니다.',
      hint_en: 'Separate multiple variable names on the left side of = with commas (,).',
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
      prompt_ko: '첫째 블록에서 x, y에 5, 9를 저장한 뒤, 둘째 블록에서 x, y = y, x로 두 값을 맞바꾸고 print(x, y)로 9 5를 출력해보세요.',
      prompt_en: 'Set x, y to 5, 9, swap them with x, y = y, x in the second block, and print x, y to output 9 5.',
      hint_ko: '파이썬의 다중 할당은 오른쪽(y, x) 값을 먼저 동시에 읽은 뒤 왼쪽(x, y)에 대입하므로 임시 변수 없이 값이 맞바뀝니다.',
      hint_en: 'Python evaluates y, x simultaneously before assigning to x, y, swapping the two values cleanly.',
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
      hint_ko: '왼쪽이 left, right이므로 오른쪽에는 순서를 뒤집어 right, left를 입력하세요.',
      hint_en: 'Write right, left on the right side of = to swap the two variables.',
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
      prompt_ko: '두 단어를 input().split()으로 first, second에 저장하고 순서를 바꿔 second, first를 출력해보세요. (예: Python Code -> Code Python)',
      prompt_en: 'Read two space-separated words via input().split() into first, second and print second, first (e.g., Python Code -> Code Python).',
      hint_ko: '첫째 블록 왼쪽 칸에 first, second를 입력하고(.split() 안은 비워두면 공백 기준 분리), print에 second, first를 넣으세요.',
      hint_en: 'Enter first, second on the left of input().split() (empty .split() splits on whitespace), then print second, first.',
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
      prompt_ko: '빈칸에 문자열을 공백 기준으로 쪼개는 메서드 이름을 채워 도시와 나라 이름을 분리하고 순서를 뒤집어 출력해보세요. (예: Seoul Korea -> Korea Seoul)',
      prompt_en: 'Fill in the method name that splits text by whitespace to separate city and country and print country, city.',
      hint_ko: '입력받은 한 줄 문자열을 공백 단위로 나누어 여러 변수에 담을 때는 input().split()을 사용합니다.',
      hint_en: 'Use .split() after input() to split a line of text by whitespace.',
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
      prompt_ko: '하이픈(-)으로 연결된 날짜 입력을 .split("-")으로 y, m, d에 나누어 담고, 구분자(sep)를 "/"로 지정해 출력해보세요. (예: 2026-10-31 -> 2026/10/31)',
      prompt_en: 'Split a hyphenated date with .split("-") into y, m, d and print them with sep="/" (e.g., 2026-10-31 -> 2026/10/31).',
      hint_ko: '첫째 블록 왼쪽에 y, m, d를 적고 .split( ) 칸에 "-"를 넣은 뒤, 둘째 print 블록에 y, m, d와 sep="/"를 설정하세요.',
      hint_en: 'Set y, m, d on the left and "-" inside .split( ), then pass y, m, d with sep="/" in print().',
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
      prompt_ko: '두 빈칸을 채워 콜론(:)으로 구분된 시각 입력을 h와 m으로 분리하고 지정된 형식으로 출력해보세요. (예: 14:30 -> 14 h 30 m)',
      prompt_en: 'Fill in the blanks to split a colon-separated time into h and m and print it (e.g., 14:30 -> 14 h 30 m).',
      hint_ko: '첫째 빈칸에는 문자열을 나누는 split을, 둘째 괄호 안 빈칸에는 큰따옴표로 감싼 콜론 ":"을 입력하세요.',
      hint_en: 'Enter split in the first blank and ":" (with double quotes) inside the parentheses.',
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
      prompt_ko: '한 줄에 공백으로 입력된 두 숫자를 a, b에 분리해 담은 뒤, total에 int(a) + int(b)를 저장하고 출력해보세요. (예: 35 65 -> 100)',
      prompt_en: 'Split two space-separated numbers into a, b, store int(a) + int(b) in total, and print total (e.g., 35 65 -> 100).',
      hint_ko: 'input().split()으로 나눈 a와 b는 각각 문자열이므로 int(a) + int(b)로 정수 변환 후 더해야 숫자 합계가 계산됩니다.',
      hint_en: 'Values from input().split() are strings, so convert each with int(a) + int(b) to compute their numeric sum.',
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
      prompt_ko: '두 빈칸에 정수 변환 함수 이름을 채워 한 줄에 입력된 가로(w)와 세로(h)의 곱을 출력해보세요. (예: 7 8 -> 56)',
      prompt_en: 'Fill in both blanks with the integer conversion function to print the product of w and h (e.g., 7 8 -> 56).',
      hint_ko: 'split()으로 분리된 w와 h는 문자열이므로 각각 int(w)와 int(h)로 변환한 뒤 곱해야 합니다.',
      hint_en: 'Convert both w and h to integers using int(w) and int(h) before multiplying.',
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
      prompt_ko: '한 줄에 공백으로 입력된 두 숫자를 나누지 않고 바로 a, b에 대입해 발생한 오류(ValueError)를 수정해보세요. (예: 15 25 -> 40)',
      prompt_en: 'Fix the ValueError caused by unpacking raw input() directly into a, b without splitting (e.g., 15 25 -> 40).',
      hint_ko: 'input() 뒤에 .split()을 붙여 공백 기준으로 두 조각으로 나누어야 변수 a, b에 각각 대입할 수 있습니다.',
      hint_en: 'Chain .split() onto input() as input().split() so the two tokens unpack into a and b.',
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
      prompt_ko: '공백 기준으로 두 값을 입력받는 코드 아래에 한 줄을 추가하여 두 값을 정수로 변환해 더한 합계를 출력해보세요. (예: 120 80 -> 200)',
      prompt_en: 'Type line 1 and add a line below to convert a and b to integers and print their sum (e.g., 120 80 -> 200).',
      hint_ko: '첫째 줄을 입력하고 Enter를 누른 뒤, 둘째 줄에 print(int(a) + int(b))를 입력하세요.',
      hint_en: 'Type line 1, press Enter, and write print(int(a) + int(b)) on line 2.',
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
      hint_ko: 'split()으로 나뉜 a="10", b="20"이 둘째 줄에서 맞바뀌어 a="20", b="10"이 됩니다. 따라서 a + b는 문자열 결합 2010, int(a) + int(b)는 30입니다.',
      hint_en: 'a="10", b="20" swap to a="20", b="10". Then a + b concatenates to 2010 and int(a) + int(b) adds to 30.',
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

