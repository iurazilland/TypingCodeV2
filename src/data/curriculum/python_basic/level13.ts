import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 13레벨: int()와 str()로 숫자와 문자열 변환하기 (13단계 표준 구성)
// - [1,3,5,7,9단계] 블록 코딩 개념 도입 (input / int / str 블록 사전 배치)
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
  title_ko: '13레벨: int()와 str()로 숫자와 문자열 변환하기',
  title_en: 'Level 13: Converting Numbers & Strings with int() and str()',
  totalQuestions: 13,
  unlockedBlocks: ['print', 'variable', 'comment', 'input', 'int', 'str'],
  questions: [
    // ------------------------------------------------------------------------
    // Pair 1 (1~2단계): int()로 입력받은 문자열을 정수로 바꾸어 변수에 저장하고 계산하기
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      prompt_ko: 'input()으로 받은 문자열 raw를 둘째 블록의 int( ) 안에 넣어 정수 num으로 저장한 뒤, num + 10을 출력해보세요. (예: 25 입력 시 35)',
      prompt_en: 'Read raw via input(), convert raw to integer num using int( ), and print num + 10 (e.g., 25 -> 35).',
      hint_ko: '입력 함수로 읽어온 숫자 모양 문자열을 정수 변환 블록에 넣으면 실제 덧셈 계산이 가능한 정수로 바뀝니다.',
      hint_en: 'Passing the input string variable into the integer conversion block turns it into a whole number that can be added.',
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
      prompt_ko: '빈칸에 문자열을 정수로 바꾸는 함수 이름을 채워 입력된 가격에서 500을 뺀 금액을 출력해보세요. (예: 2000 입력 시 1500)',
      prompt_en: 'Fill in the integer conversion function name to subtract 500 from the input price (e.g., 2000 -> 1500).',
      hint_ko: '숫자 모양의 문자열을 정수로 바꿀 때는 영어로 정수(integer)의 앞 세 글자를 딴 내장 함수를 사용합니다.',
      hint_en: 'To convert a numeric string into a whole number, use the built-in function named after the first three letters of "integer".',
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
    // Pair 2 (3~4단계): int(input())으로 정수 입력받아 사칙연산·복합대입하기
    // ------------------------------------------------------------------------
    {
      id: 3,
      step: 3,
      type: 'block',
      prompt_ko: 'int(input()) 블록으로 입력값을 바로 정수로 변환해 age에 저장하고, age + 1을 출력해보세요. (예: 19 입력 시 20 출력)',
      prompt_en: 'Store the integer-converted input in variable age using int(input()), and print age + 1 (e.g., 19 -> 20).',
      hint_ko: '입력 블록을 정수 변환 블록으로 감싸면 읽어온 문자열이 즉시 정수로 바뀌어 변수에 저장됩니다.',
      hint_en: 'Wrapping the input block inside integer conversion turns the incoming text into a whole number right away.',
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
      prompt_ko: '두 빈칸을 채워 입력받은 값을 정수로 변환해 num에 저장하고 3을 곱한 결과를 출력해보세요. (예: 12 입력 시 36 출력)',
      prompt_en: 'Fill in the blanks to read an integer input into num and print num * 3 (e.g., 12 -> 36).',
      hint_ko: '안쪽에서는 다섯 글자 입력 함수로 문자열을 읽어오고, 바깥쪽에서는 정수(integer)의 앞 세 글자 함수로 감싸 숫자로 변환합니다.',
      hint_en: 'Read the text inside with the five-letter user-entry function, and wrap it outside with the three-letter function from "integer".',
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
    // Pair 3 (5~6단계): 두 줄 int(input())과 몫(//)·나머지(%)·복합대입 결합 (2·11레벨 복습)
    // ------------------------------------------------------------------------
    {
      id: 5,
      step: 5,
      type: 'block',
      prompt_ko: '두 줄로 입력되는 두 정수를 각각 a와 b에 저장하고, 두 수의 합 a + b를 출력해보세요. (예: 15, 27 입력 시 42)',
      prompt_en: 'Read two integers on separate lines into a and b, and print their sum a + b (e.g., 15 and 27 -> 42).',
      hint_ko: '두 변수에 각각 정수로 변환된 입력값을 저장한 뒤, 출력 블록에서 두 변수를 더한 값을 출력해보세요.',
      hint_en: 'Store the two converted integers in separate variables and print their sum.',
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
      prompt_ko: '두 빈칸을 채워 기본 점수 50점에 입력받은 정수를 복합 대입으로 더한 결과를 출력해보세요. (예: 30 입력 시 80)',
      prompt_en: 'Fill in the blanks to add the integer input bonus to score (50) using compound assignment and print 80.',
      hint_ko: '둘째 줄에서는 입력값을 정수로 변환하는 세 글자 함수를, 셋째 줄에서는 기존 점수에 값을 더하는 복합 대입 연산자를 적어보세요.',
      hint_en: 'Convert the input with the three-letter integer function on line 2, then use the addition compound operator on line 3.',
      templateCode: 'score = 50\nbonus = §§§(input())\nscore §§ bonus\nprint(score)',
      targetCode: 'score = 50\nbonus = int(input())\nscore += bonus\nprint(score)',
      testCases: [
        {
          id: 1,
          input: '30',
          expectedOutput: '80',
        },
        {
          id: 2,
          input: '45',
          expectedOutput: '95',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 4 (7~8단계): 숫자를 계산한 뒤 str()로 변수에 다시 저장해 문자와 +로 출력하기
    // ------------------------------------------------------------------------
    {
      id: 7,
      step: 7,
      type: 'block',
      prompt_ko: '정수 lv를 입력받아 1을 더한 뒤, str(lv)로 문자열로 변환한 값을 다시 lv에 저장하고 "Lv." + lv를 출력해보세요. (예: 9 입력 시 Lv.10)',
      prompt_en: 'Read integer lv, add 1, store str(lv) back into lv, and print "Lv." + lv (e.g., 9 -> Lv.10).',
      hint_ko: '숫자 계산이 끝난 변수를 문자열 변환 블록(str)으로 감싸 다시 저장하면, 앞선 글자와 더하기 기호로 빈틈없이 이어붙일 수 있습니다.',
      hint_en: 'After adding 1 to the number, convert lv into a string with str(lv) and store it back so you can join it with "Lv." using +.',
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
      prompt_ko: '빈칸에 숫자를 문자열로 바꾸는 함수 이름을 채워, 50을 더한 점수를 다시 score에 문자열로 저장하고 Score:150 형태로 출력해보세요.',
      prompt_en: 'Fill in the string-conversion function name to store the updated score back as a string and print Score:150.',
      hint_ko: '계산이 끝난 숫자를 글자와 더하기(+)로 이어붙이려면, 영어로 문자열(string)의 앞 세 글자를 딴 함수로 변환해 변수에 다시 저장합니다.',
      hint_en: 'To join the calculated number with text using +, convert it with the function named after the first three letters of "string".',
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
    // Pair 5 (9~10단계): int()로 계산 후 str()로 변환해 앞뒤 단위 문자열과 결합하기
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'block',
      prompt_ko: '두 정수를 입력받아 더한 total을 구한 뒤, res에 str(total)을 저장하고 "합계:" + res를 출력해보세요. (예: 30, 70 -> 합계:100)',
      prompt_en: 'Read two integers, sum them into total, store str(total) in res, and print "합계:" + res (e.g., 30 and 70 -> 합계:100).',
      hint_ko: '입력받을 때는 정수 변환으로 덧셈을 수행하고, 출력하기 전에는 결과 변수를 문자열 변환 블록에 넣어 글자로 바꾼 뒤 이어붙입니다.',
      hint_en: 'Use int() to add the two inputs as numbers, then store str(total) in res before concatenating with the label.',
      targetCode: 'a = int(input())\nb = int(input())\ntotal = a + b\nres = str(total)\nprint("합계:" + res)',
      testCases: [
        {
          id: 1,
          input: '30\n70',
          expectedOutput: '합계:100',
        },
        {
          id: 2,
          input: '15\n25',
          expectedOutput: '합계:40',
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸에 변환 함수를 각각 채워 입력받은 가격에서 500을 뺀 뒤, 다시 문자열로 저장해 뒤에 "원"을 붙여 출력해보세요. (예: 2000 -> 1500원)',
      prompt_en: 'Fill in the two conversion functions to subtract 500 from the input price, store it back as a string, and append "원".',
      hint_ko: '첫째 줄에는 뺄셈을 위해 정수(integer)의 앞 세 글자 함수를, 셋째 줄에는 글자 결합을 위해 문자열(string)의 앞 세 글자 함수를 채워보세요.',
      hint_en: 'Use the three-letter integer function on line 1 for subtraction, and the three-letter string function on line 3 for concatenation.',
      templateCode: 'price = §§§(input())\nprice -= 500\nprice = §§§(price)\nprint(price + "원")',
      targetCode: 'price = int(input())\nprice -= 500\nprice = str(price)\nprint(price + "원")',
      testCases: [
        {
          id: 1,
          input: '2000',
          expectedOutput: '1500원',
        },
        {
          id: 2,
          input: '5000',
          expectedOutput: '4500원',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 11단계: 버그 수정 (fix_bug) - 계산 후 str() 미변환 TypeError 교정
    // ------------------------------------------------------------------------
    {
      id: 11,
      step: 11,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '계산된 숫자 n을 문자열로 바꾸지 않고 text에 그대로 저장해 발생한 오류(TypeError)를 세 번째 줄에서 수정해보세요. (예: 9 -> No.10)',
      prompt_en: 'Fix the TypeError on line 3 by converting the updated number n to a string when storing it in text (e.g., 9 -> No.10).',
      hint_ko: '네 번째 줄에서 문자열 "No."와 더하기(+)로 이어붙이려면, 세 번째 줄에서 변수 n을 문자열 변환 함수로 감싸 저장해야 합니다.',
      hint_en: 'To concatenate text with "No." on line 4, wrap n in the string conversion function on line 3.',
      templateCode: 'n = int(input())\nn += 1\ntext = n\nprint("No." + text)',
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

    // ------------------------------------------------------------------------
    // 12단계: 예제 아래 한 줄 추가 작성 (one_line)
    // ------------------------------------------------------------------------
    {
      id: 12,
      step: 12,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '정수 n을 2배로 계산해 문자열로 다시 저장한 코드 아래에 한 줄을 추가하여 "Result:" + n을 출력해보세요. (예: 15 -> Result:30)',
      prompt_en: 'Add a line below to print "Result:" + n after doubling n and converting it to a string (e.g., 15 -> Result:30).',
      hint_ko: '세 번째 줄에서 이미 문자열로 변환되어 저장된 변수 n을 "Result:" 뒤에 더하기 기호로 이어붙여 출력해보세요.',
      hint_en: 'Since line 3 already converted n to a string, concatenate "Result:" and n with + inside print().',
      templateCode: 'n = int(input())\nn *= 2\nn = str(n)\n§§§§§§§§§§§§§§§§§§§',
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

    // ------------------------------------------------------------------------
    // 13단계: 출력 결과 예측 선택 (predict_output)
    // ------------------------------------------------------------------------
    {
      id: 13,
      step: 13,
      type: 'quiz',
      kind: 'predict_output',
      prompt_ko: '입력값으로 12가 주어질 때, 다음 파이썬 코드의 실행 결과를 선택해보세요.',
      prompt_en: 'When 12 is given as input, select the exact output of the following Python code.',
      hint_ko: '정수로 변환되어 3이 더해진 뒤, 다시 문자열로 바뀌어 2를 곱했을 때 숫자 곱셈과 문자열 반복 중 무엇이 일어나는지 생각해보세요.',
      hint_en: 'After adding 3 to the integer 12, n is converted back into a string—trace what multiplying a string by 2 produces.',
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
