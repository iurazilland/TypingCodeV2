import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 13레벨: int()와 str()로 숫자와 문자열 변환하기 (15단계)
// - [1~10단계] 블록 ➔ 타이핑 1:1 교차 5쌍
// - [11~12단계] 틀린 곳 수정 (fix_bug) 2문항
// - [13~14단계] 한 줄 완성 (one_line) 2문항
// - [15단계] 출력 결과 예측 선택 (predict_output) 1문항
// ============================================================================
export const PYTHON_LEVEL_13: PracticeRound = {
  id: 'py-basic-r13',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 13,
  title_ko: '13레벨: int()와 str()로 숫자와 문자열 변환하기',
  title_en: 'Level 13: Converting Numbers & Strings with int() and str()',
  totalQuestions: 15,
  unlockedBlocks: ['print', 'variable', 'comment', 'input', 'type'],
  questions: [
    // ------------------------------------------------------------------------
    // Pair 1 (1~2단계): int()로 입력받은 문자열을 정수로 바꾸어 변수에 저장하고 계산하기
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      kind: 'standard',
      prompt_ko: '[블록 조립] 입력받은 문자열 raw를 int()로 정수로 변환해 10을 더한 값을 출력해보세요.',
      prompt_en: '[Block] Convert the input string raw with int() and print num + 10.',
      hint_ko: 'input()으로 받은 문자열 변수를 int() 괄호 안에 넣어 정수로 바꾼 뒤 숫자를 더합니다.',
      hint_en: 'Pass the string variable from input() inside int() to convert it into an integer.',
      targetCode: 'raw = input()\nnum = int(raw)\nprint(num + 10)',
      testCases: [
        {
          id: 1,
          input: '25',
          expectedOutput: '35',
        },
        {
          id: 2,
          input: '40',
          expectedOutput: '50',
        },
      ],
    },
    {
      id: 2,
      step: 2,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '[빈칸 채우기] 정수로 바꾸는 함수 이름을 채워 가격에서 500을 뺀 값을 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the integer conversion function name to print price - 500.',
      hint_ko: '숫자 모양의 문자열을 정수로 바꿀 때는 int 함수를 사용합니다.',
      hint_en: 'Use the int function to convert a numeric string into an integer.',
      templateCode: 'raw = input()\nprice = §§§(raw)\nprint(price - 500)',
      targetCode: 'raw = input()\nprice = int(raw)\nprint(price - 500)',
      testCases: [
        {
          id: 1,
          input: '2000',
          expectedOutput: '1500',
        },
        {
          id: 2,
          input: '3500',
          expectedOutput: '3000',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 2 (3~4단계): int(input())으로 정수 입력받아 사칙연산하기
    // ------------------------------------------------------------------------
    {
      id: 3,
      step: 3,
      type: 'block',
      kind: 'standard',
      prompt_ko: '[블록 조립] int(input())으로 나이를 정수로 입력받아 1을 더한 값을 출력해보세요.',
      prompt_en: '[Block] Read an integer with int(input()) and print age + 1.',
      hint_ko: '안쪽의 input()이 문자열을 읽어오고, 바깥쪽의 int()가 즉시 정수로 변환합니다.',
      hint_en: 'The inner input() reads the text first, and the outer int() converts it into an integer.',
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
      id: 4,
      step: 4,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '[빈칸 채우기] 두 빈칸을 채워 정수를 입력받아 3을 곱한 결과를 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the blanks to read an integer into num and print num * 3.',
      hint_ko: '바깥쪽에는 정수 변환 함수 int를, 안쪽에는 입력 함수 input을 입력하세요.',
      hint_en: 'Wrap input() inside int() as int(input()).',
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
    // Pair 3 (5~6단계): 두 줄 int(input())으로 두 정수 입력받아 연산하기
    // ------------------------------------------------------------------------
    {
      id: 5,
      step: 5,
      type: 'block',
      kind: 'standard',
      prompt_ko: '[블록 조립] 두 줄의 숫자를 각각 int(input())으로 받아 더한 합계를 출력해보세요.',
      prompt_en: '[Block] Read two lines with int(input()) and print their sum.',
      hint_ko: '두 변수 모두 정수형으로 변환되었기 때문에 + 기호가 숫자 덧셈으로 동작합니다.',
      hint_en: 'Since both variables hold integers, + performs arithmetic addition.',
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
      id: 6,
      step: 6,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '[빈칸 채우기] 두 빈칸에 정수 변환 함수를 채워 두 입력값의 차(a - b)를 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in both blanks with int to print a - b.',
      hint_ko: '첫째 줄과 둘째 줄 모두 int 함수를 사용해 입력값을 정수로 변환해보세요.',
      hint_en: 'Use int on both lines to convert the inputs into integers.',
      templateCode: 'a = §§§(input())\nb = §§§(input())\nprint(a - b)',
      targetCode: 'a = int(input())\nb = int(input())\nprint(a - b)',
      testCases: [
        {
          id: 1,
          input: '50\n20',
          expectedOutput: '30',
        },
        {
          id: 2,
          input: '100\n35',
          expectedOutput: '65',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 4 (7~8단계): 숫자를 계산한 뒤 str()로 변환해 문자와 +로 출력하기
    // ------------------------------------------------------------------------
    {
      id: 7,
      step: 7,
      type: 'block',
      kind: 'standard',
      prompt_ko: '[블록 조립] 정수로 1을 더한 뒤 str()로 변환해 "Lv."과 이어붙여 출력해보세요.',
      prompt_en: '[Block] Add 1 to integer lv, convert it with str(), and print "Lv." + lv.',
      hint_ko: '정수 상태에서 1을 더한 뒤 str()로 바꾸어야 문자열과 +로 합칠 수 있습니다.',
      hint_en: 'Add 1 while lv is an integer, then convert it with str() before joining with +.',
      targetCode: 'lv = int(input())\nlv += 1\nlv = str(lv)\nprint("Lv." + lv)',
      testCases: [
        {
          id: 1,
          input: '9',
          expectedOutput: 'Lv.10',
        },
        {
          id: 2,
          input: '14',
          expectedOutput: 'Lv.15',
        },
      ],
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '[빈칸 채우기] 문자열 변환 함수를 채워 Score:150 형태로 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the string conversion function to print Score:150.',
      hint_ko: '계산이 끝난 숫자를 글자와 +로 이어붙이려면 str 함수로 변환해야 합니다.',
      hint_en: 'Convert the calculated number into a string using str.',
      templateCode: 'score = int(input())\nscore += 50\nscore = §§§(score)\nprint("Score:" + score)',
      targetCode: 'score = int(input())\nscore += 50\nscore = str(score)\nprint("Score:" + score)',
      testCases: [
        {
          id: 1,
          input: '100',
          expectedOutput: 'Score:150',
        },
        {
          id: 2,
          input: '200',
          expectedOutput: 'Score:250',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 5 (9~10단계): int()로 계산 후 str()로 변환해 단위 문자열과 결합하기
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'block',
      kind: 'standard',
      prompt_ko: '[블록 조립] 두 정수를 더한 뒤 str()로 변환해 "Sum:"과 이어붙여 출력해보세요.',
      prompt_en: '[Block] Add two integers, convert total with str(), and print "Sum:" + res.',
      hint_ko: '산술 덧셈은 정수 상태에서 수행하고, 문자열 결합(+)은 str() 변환 후에 수행합니다.',
      hint_en: 'Perform addition while the values are integers, and concatenate after str().',
      targetCode: 'a = int(input())\nb = int(input())\ntotal = a + b\nres = str(total)\nprint("Sum:" + res)',
      testCases: [
        {
          id: 1,
          input: '30\n70',
          expectedOutput: 'Sum:100',
        },
        {
          id: 2,
          input: '15\n25',
          expectedOutput: 'Sum:40',
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '[빈칸 채우기] 두 빈칸에 변환 함수를 채워 500을 뺀 가격 뒤에 "KRW"를 붙여 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the two conversion functions to subtract 500 and append "KRW".',
      hint_ko: '첫째 줄에는 정수 변환 함수 int를, 셋째 줄에는 문자열 변환 함수 str을 입력하세요.',
      hint_en: 'Use int on line 1 for subtraction, and str on line 3 for concatenation.',
      templateCode: 'price = §§§(input())\nprice -= 500\nprice = §§§(price)\nprint(price + "KRW")',
      targetCode: 'price = int(input())\nprice -= 500\nprice = str(price)\nprint(price + "KRW")',
      testCases: [
        {
          id: 1,
          input: '2000',
          expectedOutput: '1500KRW',
        },
        {
          id: 2,
          input: '5000',
          expectedOutput: '4500KRW',
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
      prompt_ko: '[틀린 곳 수정] 입력값에 10을 더한 35가 출력되도록 첫째 줄의 변환 함수를 수정해보세요.',
      prompt_en: '[Fix Bug] Fix the conversion function on line 1 so adding 10 prints 35.',
      hint_ko: '숫자 10과 산술 덧셈을 하려면 str()이 아니라 정수 변환 함수 int()를 사용해야 합니다.',
      hint_en: 'Use int() instead of str() to convert the input into an integer before adding 10.',
      templateCode: 'a = str(input())\nprint(a + 10)',
      targetCode: 'a = int(input())\nprint(a + 10)',
      testCases: [
        {
          id: 1,
          input: '25',
          expectedOutput: '35',
        },
        {
          id: 2,
          input: '40',
          expectedOutput: '50',
        },
      ],
    },
    {
      id: 12,
      step: 12,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '[틀린 곳 수정] 계산된 n을 문자열로 변환해 "No."와 이어붙이도록 셋째 줄을 수정해보세요.',
      prompt_en: '[Fix Bug] Fix line 3 to convert n into a string so it concatenates with "No.".',
      hint_ko: '문자열 "No."와 +로 합치려면 셋째 줄에서 int(n) 대신 str(n)으로 변환해야 합니다.',
      hint_en: 'Change int(n) to str(n) on line 3 so text is a string before concatenating.',
      templateCode: 'n = int(input())\nn += 1\ntext = int(n)\nprint("No." + text)',
      targetCode: 'n = int(input())\nn += 1\ntext = str(n)\nprint("No." + text)',
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
      id: 13,
      step: 13,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '[한 줄 완성] 셋째 줄에서 2배가 된 n을 문자열로 변환해 다시 n에 저장해보세요.',
      prompt_en: '[Complete Line] Complete line 3 to convert doubled n into a string in n.',
      hint_ko: 'n = str(n)을 작성해 정수 n을 문자열로 변환하여 저장해보세요.',
      hint_en: 'Write n = str(n) on line 3 to convert n into a string.',
      templateCode: 'n = int(input())\nn *= 2\n§§§§§§§§§§\nprint("Result:" + n)',
      targetCode: 'n = int(input())\nn *= 2\nn = str(n)\nprint("Result:" + n)',
      testCases: [
        {
          id: 1,
          input: '15',
          expectedOutput: 'Result:30',
        },
        {
          id: 2,
          input: '40',
          expectedOutput: 'Result:80',
        },
      ],
    },
    {
      id: 14,
      step: 14,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '[한 줄 완성] 첫째 줄에서 입력값을 정수로 변환해 age에 저장하고 10을 더한 값을 출력해보세요.',
      prompt_en: '[Complete Line] Complete line 1 to read an integer input into age.',
      hint_ko: 'age = int(input())처럼 입력값을 즉시 정수로 변환해 age에 저장해보세요.',
      hint_en: 'Write age = int(input()) on line 1 to store the input as an integer.',
      templateCode: '§§§§§§§§§§§§§§§§§§\nprint(age + 10)',
      targetCode: 'age = int(input())\nprint(age + 10)',
      testCases: [
        {
          id: 1,
          input: '15',
          expectedOutput: '25',
        },
        {
          id: 2,
          input: '22',
          expectedOutput: '32',
        },
      ],
    },
    {
      id: 15,
      step: 15,
      type: 'quiz',
      kind: 'predict_output',
      prompt_ko: '[출력 결과 예측] 다음 코드의 실행 결과를 선택해보세요.',
      prompt_en: '[Predict Output] When 12 is given as input, select the exact output of the Python code.',
      hint_ko: '정수 12에 3을 더한 15가 str(n)으로 문자열이 된 뒤 * 2가 실행됩니다.',
      hint_en: 'After adding 3 to 12, n is converted back into a string before * 2 repeats it.',
      targetCode: 'n = int(input())\nn += 3\nn = str(n)\nprint(n * 2)',
      choices: ['1515', '30', '1212', 'TypeError'],
      correctChoiceIndex: 0,
      testCases: [
        {
          id: 1,
          input: '12',
          expectedOutput: '1515',
        },
      ],
    },
  ],
};
