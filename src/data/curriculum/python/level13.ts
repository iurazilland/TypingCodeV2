import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 13레벨: input() 사용자 입력과 형변환 (13단계 표준 구성)
// - [1,3,5,7,9단계] 블록 코딩 개념 도입 (input / type / int / float 블록 사전 배치)
// - [2,4,6,8,10단계] 빈칸 채우기 타이핑 실습 (fill_blank)
// - [11단계] 버그 수정 (fix_bug)
// - [12단계] 예제 아래 한 줄 코드 추가 작성 (one_line)
// - [13단계] 출력 결과 예측 4지선다 퀴즈 (predict_output)
// ============================================================================
export const PYTHON_LEVEL_13: PracticeRound = {
  id: 'py-basic-r13',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 13,
  title_ko: '13레벨: input() 사용자 입력과 숫자 형변환',
  title_en: 'Level 13: input() User Input & Type Conversion',
  totalQuestions: 13,
  unlockedBlocks: ['print', 'variable', 'input', 'type'],
  questions: [
    // ------------------------------------------------------------------------
    // Pair 1 (1~2단계): input()으로 문자열 입력받아 출력하기
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      prompt_ko: 'input()으로 전달되는 이름을 변수 name에 저장하고, "Hello,"와 name을 출력해보세요. (예: Alice 입력 시 Hello, Alice 출력)',
      prompt_en: 'Store the input name in variable name using input(), and print "Hello," and name (e.g., Alice -> Hello, Alice).',
      hint_ko: '첫째 블록 왼쪽에 name을 입력하고(input() 칸은 비워둡니다), 둘째 print 블록에 "Hello,", name을 입력하세요.',
      hint_en: 'Enter name on the left of input() (leave input() empty), and enter "Hello,", name in print().',
      targetCode: 'name = input()\nprint("Hello,", name)',
      testCases: [
        {
          id: 1,
          input: 'Alice',
          expectedOutput: 'Hello, Alice',
        },
        {
          id: 2,
          input: 'Minsu',
          expectedOutput: 'Hello, Minsu',
        },
      ],
    },
    {
      id: 2,
      step: 2,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 사용자 입력을 받는 함수 이름을 채워 입력된 도시명 앞에 City: 를 붙여 출력해보세요. (예: Seoul 입력 시 City: Seoul)',
      prompt_en: 'Fill in the blank with the user-input function name to print City: followed by the input city (e.g., Seoul -> City: Seoul).',
      hint_ko: '표준 입력으로부터 한 줄의 문자열을 읽어오는 파이썬 내장 함수는 input()입니다.',
      hint_en: 'Use the built-in input() function to read a line of text from standard input.',
      templateCode: 'city = §§§§§()\nprint("City:", city)',
      targetCode: 'city = input()\nprint("City:", city)',
      testCases: [
        {
          id: 1,
          input: 'Seoul',
          expectedOutput: 'City: Seoul',
        },
        {
          id: 2,
          input: 'Busan',
          expectedOutput: 'City: Busan',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 2 (3~4단계): input()으로 받은 자료는 숫자를 입력해도 항상 str임을 인식하기
    // ------------------------------------------------------------------------
    {
      id: 3,
      step: 3,
      type: 'block',
      prompt_ko: '숫자 100이 입력될 때 input()의 결과를 변수 raw에 저장하고, print(type( ))에 raw를 넣어 자료형이 str인지 확인해보세요.',
      prompt_en: 'When 100 is given as input, store input() in raw and pass raw into print(type( )) to see that its type is str.',
      hint_ko: 'input() 함수가 읽어온 값은 숫자 모양이어도 항상 문자열(<class \'str\'>)입니다. 왼쪽에 raw, 아래 type( )에 raw를 넣으세요.',
      hint_en: 'input() always returns a string (<class \'str\'>), even for digits. Set raw = input() and print(type(raw)).',
      targetCode: 'raw = input()\nprint(type(raw))',
      testCases: [
        {
          id: 1,
          input: '100',
          expectedOutput: "<class 'str'>",
        },
      ],
    },
    {
      id: 4,
      step: 4,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸을 채워 입력값을 val에 받은 뒤 2를 곱한 반복 결과와 자료형을 함께 출력해보세요. (예: 7 입력 시 77 <class \'str\'>)',
      prompt_en: 'Fill in the blanks to read input into val and print val * 2 alongside its data type (e.g., 7 -> 77 <class \'str\'>).',
      hint_ko: '첫째 줄에는 입력을 받는 input을, 둘째 줄에는 자료형을 확인하는 type을 입력하세요.',
      hint_en: 'Enter input on line 1 to read text, and type on line 2 to inspect its data type.',
      templateCode: 'val = §§§§§()\nprint(val * 2, §§§§(val))',
      targetCode: 'val = input()\nprint(val * 2, type(val))',
      testCases: [
        {
          id: 1,
          input: '7',
          expectedOutput: "77 <class 'str'>",
        },
        {
          id: 2,
          input: '5',
          expectedOutput: "55 <class 'str'>",
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 3 (5~6단계): int(input())으로 정수 형변환하여 산술 계산하기
    // ------------------------------------------------------------------------
    {
      id: 5,
      step: 5,
      type: 'block',
      prompt_ko: 'int(input()) 블록으로 입력값을 정수 변환해 변수 age에 저장하고, age + 1을 출력해보세요. (예: 19 입력 시 20 출력)',
      prompt_en: 'Store the integer-converted input in variable age using int(input()), and print age + 1 (e.g., 19 -> 20).',
      hint_ko: '첫째 블록 왼쪽 칸에 age를 입력하고, 둘째 print 블록에 age + 1을 입력하면 정수 덧셈이 수행됩니다.',
      hint_en: 'Enter age on the left of int(input()), then enter age + 1 inside print().',
      targetCode: 'age = int(input())\nprint(age + 1)',
      testCases: [
        {
          id: 1,
          input: '19',
          expectedOutput: '20',
        },
        {
          id: 2,
          input: '25',
          expectedOutput: '26',
        },
      ],
    },
    {
      id: 6,
      step: 6,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸을 채워 입력받은 문자열을 정수로 바꾸어 num에 저장하고 3을 곱한 값을 출력해보세요. (예: 12 입력 시 36 출력)',
      prompt_en: 'Fill in the blanks to read an integer input into num and print num * 3 (e.g., 12 -> 36).',
      hint_ko: '안쪽에서 문자열을 입력받는 input()을 바깥쪽 정수 변환 함수 int()로 감싸 int(input())으로 작성합니다.',
      hint_en: 'Wrap input() inside int() as int(input()) to convert user input directly into an integer.',
      templateCode: 'num = §§§(§§§§§())\nprint(num * 3)',
      targetCode: 'num = int(input())\nprint(num * 3)',
      testCases: [
        {
          id: 1,
          input: '12',
          expectedOutput: '36',
        },
        {
          id: 2,
          input: '8',
          expectedOutput: '24',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 4 (7~8단계): 두 줄 연속 int(input())으로 두 정수 입력받아 연산하기
    // ------------------------------------------------------------------------
    {
      id: 7,
      step: 7,
      type: 'block',
      prompt_ko: '두 줄에 걸쳐 입력되는 두 정수를 각각 변수 a와 b에 저장하고, 두 수의 합 a + b를 출력해보세요. (예: 15, 27 입력 시 42)',
      prompt_en: 'Read two integers on separate lines into a and b, and print their sum a + b (e.g., 15 and 27 -> 42).',
      hint_ko: 'input()은 호출될 때마다 한 줄씩 순서대로 읽습니다. 첫째 블록에 a, 둘째 블록에 b, 셋째 print 블록에 a + b를 넣으세요.',
      hint_en: 'Each input() reads the next line. Set a on line 1, b on line 2, and print(a + b) on line 3.',
      targetCode: 'a = int(input())\nb = int(input())\nprint(a + b)',
      testCases: [
        {
          id: 1,
          input: '15\n27',
          expectedOutput: '42',
        },
        {
          id: 2,
          input: '100\n250',
          expectedOutput: '350',
        },
      ],
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸에 정수 변환 함수 이름을 채워 두 줄로 입력되는 가로(w)와 세로(h)의 곱을 출력해보세요. (예: 6, 9 입력 시 54)',
      prompt_en: 'Fill in both blanks with the integer conversion function to print w * h for two input lines (e.g., 6 and 9 -> 54).',
      hint_ko: '두 입력값을 모두 정수로 바꾸어야 곱셈(*)이 가능하므로 두 빈칸에 모두 int를 입력하세요.',
      hint_en: 'Enter int in both blanks so w and h are converted to integers before multiplying.',
      templateCode: 'w = §§§(input())\nh = §§§(input())\nprint(w * h)',
      targetCode: 'w = int(input())\nh = int(input())\nprint(w * h)',
      testCases: [
        {
          id: 1,
          input: '6\n9',
          expectedOutput: '54',
        },
        {
          id: 2,
          input: '10\n4',
          expectedOutput: '40',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 5 (9~10단계): float(input())으로 실수 입력받아 연산하기
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'block',
      prompt_ko: '소수점이 있는 입력값을 float(input()) 블록으로 변수 kg에 저장하고, kg * 2를 출력해보세요. (예: 2.5 입력 시 5.0)',
      prompt_en: 'Read a decimal input into variable kg using float(input()) and print kg * 2 (e.g., 2.5 -> 5.0).',
      hint_ko: '소수점이 포함된 숫자 입력은 int가 아닌 float로 변환해야 합니다. 왼쪽에 kg, 아래 print에 kg * 2를 넣으세요.',
      hint_en: 'Decimal inputs require float() instead of int(). Enter kg on line 1 and kg * 2 inside print().',
      targetCode: 'kg = float(input())\nprint(kg * 2)',
      testCases: [
        {
          id: 1,
          input: '2.5',
          expectedOutput: '5.0',
        },
        {
          id: 2,
          input: '1.2',
          expectedOutput: '2.4',
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸을 채워 소수점이 포함된 실수 입력값을 변수 r에 저장하고 0.5를 더한 결과를 출력해보세요. (예: 3.2 입력 시 3.7)',
      prompt_en: 'Fill in the blanks to read a floating-point input into r and print r + 0.5 (e.g., 3.2 -> 3.7).',
      hint_ko: '실수 형변환 함수 float() 안에 입력 함수 input()을 넣어 float(input())을 완성하세요.',
      hint_en: 'Wrap input() inside float() as float(input()).',
      templateCode: 'r = §§§§§(§§§§§())\nprint(r + 0.5)',
      targetCode: 'r = float(input())\nprint(r + 0.5)',
      testCases: [
        {
          id: 1,
          input: '3.2',
          expectedOutput: '3.7',
        },
        {
          id: 2,
          input: '1.5',
          expectedOutput: '2.0',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 11단계: 버그 수정 (fix_bug) - input() 미형변환 덧셈 TypeError 교정
    // ------------------------------------------------------------------------
    {
      id: 11,
      step: 11,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '입력값을 정수로 변환하지 않고 500을 더해 발생한 오류(TypeError)를 수정해보세요. (예: 1500 입력 시 2000 출력)',
      prompt_en: 'Fix the TypeError caused by adding 500 to raw input() without integer conversion (e.g., 1500 -> 2000).',
      hint_ko: 'input()의 결과는 문자열이므로 int(input())으로 감싸 정수로 변환해야 숫자 500을 더할 수 있습니다.',
      hint_en: 'input() returns a string, so wrap it as int(input()) before adding 500.',
      templateCode: 'price = input()\nprint(price + 500)',
      targetCode: 'price = int(input())\nprint(price + 500)',
      testCases: [
        {
          id: 1,
          input: '1500',
          expectedOutput: '2000',
        },
        {
          id: 2,
          input: '3000',
          expectedOutput: '3500',
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
      prompt_ko: '정수 n을 입력받는 코드 아래에 한 줄을 추가하여 n과 n을 곱한 제곱값을 출력해보세요. (예: 9 입력 시 81 출력)',
      prompt_en: 'Type line 1 and add a line below to print n multiplied by n (e.g., 9 -> 81).',
      hint_ko: '첫째 줄을 입력하고 Enter를 누른 뒤, 둘째 줄에 print(n * n)을 입력하세요.',
      hint_en: 'Type line 1, press Enter, and write print(n * n) on line 2.',
      templateCode: 'n = int(input())\n§§§§§§§§§§§§',
      targetCode: 'n = int(input())\nprint(n * n)',
      testCases: [
        {
          id: 1,
          input: '9',
          expectedOutput: '81',
        },
        {
          id: 2,
          input: '5',
          expectedOutput: '25',
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
      prompt_ko: '첫째 줄에 10, 둘째 줄에 20이 입력될 때, 다음 파이썬 코드의 실행 결과를 선택해보세요.',
      prompt_en: 'When 10 and 20 are given on lines 1 and 2, select the exact output of the following Python code.',
      hint_ko: 'a와 b는 문자열 "10", "20"이므로 a + b는 문자열 결합 "1020"이 되고, int(a) + int(b)는 정수 덧셈 30이 됩니다.',
      hint_en: 'a and b are strings "10" and "20", so a + b concatenates to 1020 while int(a) + int(b) adds to 30.',
      targetCode: 'a = input()\nb = input()\nprint(a + b)\nprint(int(a) + int(b))',
      choices: ['1020\n30', '30\n30', '1020\n1020', '10 20\n30'],
      correctChoiceIndex: 0,
      testCases: [
        {
          id: 1,
          input: '10\n20',
          expectedOutput: '1020\n30',
        },
      ],
    },
  ],
};
