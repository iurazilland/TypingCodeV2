import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 13레벨: int()로 숫자 입력받아 계산하기 (13단계 표준 구성)
// - [1,3,5,7,9단계] 블록 코딩 개념 도입 (input / int 블록 사전 배치)
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
  title_ko: '13레벨: int()로 숫자 입력받아 계산하기',
  title_en: 'Level 13: Converting Input to Numbers with int()',
  totalQuestions: 13,
  unlockedBlocks: ['print', 'variable', 'comment', 'input', 'int'],
  questions: [
    // ------------------------------------------------------------------------
    // Pair 1 (1~2단계): int()로 입력받은 문자열을 정수로 바꾸어 계산하기
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      prompt_ko: 'input()으로 받은 문자열 raw를 둘째 블록의 int( ) 안에 넣어 정수 num으로 바꾼 뒤, num + 10을 출력해보세요. (예: 25 입력 시 35)',
      prompt_en: 'Read raw via input(), convert raw to integer num using int( ), and print num + 10 (e.g., 25 -> 35).',
      hint_ko: '입력 함수로 읽어온 숫자 모양 문자열을 정수 변환 블록에 넣으면 실제 숫자 계산이 가능한 정수로 바뀝니다.',
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
    // Pair 2 (3~4단계): int(input())으로 한 줄에서 바로 정수 입력받기
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
    // Pair 3 (5~6단계): 두 줄 연속 int(input())으로 두 정수 입력받아 연산하기 (10레벨 복습)
    // ------------------------------------------------------------------------
    {
      id: 5,
      step: 5,
      type: 'block',
      prompt_ko: '두 줄에 걸쳐 입력되는 두 정수를 각각 변수 a와 b에 저장하고, 두 수의 합 a + b를 출력해보세요. (예: 15, 27 입력 시 42)',
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
      prompt_ko: '두 빈칸에 정수 변환 함수 이름을 채워 두 줄로 입력되는 가로(w)와 세로(h)의 곱을 출력해보세요. (예: 6, 9 입력 시 54)',
      prompt_en: 'Fill in both blanks with the integer conversion function to print w * h for two input lines (e.g., 6 and 9 -> 54).',
      hint_ko: '두 줄에서 읽어온 문자열을 모두 숫자 곱셈이 가능한 정수로 바꿀 수 있도록 integer의 앞 세 글자 변환 함수를 각각 적어보세요.',
      hint_en: 'Convert both input strings into whole numbers before multiplying by using the three-letter function derived from "integer".',
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
    // Pair 4 (7~8단계): int(input())과 몫(//)·나머지(%)·거듭제곱(**) 결합 (2·4레벨 복습)
    // ------------------------------------------------------------------------
    {
      id: 7,
      step: 7,
      type: 'block',
      prompt_ko: '사탕 개수를 int(input())으로 변수 candy에 입력받고, 10명에게 똑같이 나눈 몫(candy // 10)과 나머지(candy % 10)를 나란히 출력해보세요. (예: 47 -> 4 7)',
      prompt_en: 'Read candy via int(input()) and print the quotient (candy // 10) and remainder (candy % 10) separated by a space (e.g., 47 -> 4 7).',
      hint_ko: '정수로 변환해 저장한 변수에 슬래시 두 개(몫) 연산자와 퍼센트(나머지) 연산자를 각각 적용해 쉼표로 나란히 출력해보세요.',
      hint_en: 'Use floor division (//) and modulo (%) on the integer variable candy and list both results in print().',
      targetCode: 'candy = int(input())\nprint(candy // 10, candy % 10)',
      testCases: [
        {
          id: 1,
          input: '47',
          expectedOutput: '4 7',
        },
        {
          id: 2,
          input: '83',
          expectedOutput: '8 3',
        },
      ],
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 정수 변환 함수를 채워 입력받은 정수의 세제곱(n ** 3)을 출력해보세요. (예: 4 입력 시 64)',
      prompt_en: 'Fill in the integer conversion function to print the cube (n ** 3) of the input integer (e.g., 4 -> 64).',
      hint_ko: '거듭제곱 연산자(**)를 사용하려면 입력값을 먼저 정수로 바꾸어야 합니다. integer의 앞 세 글자 함수를 채워보세요.',
      hint_en: 'Convert the input string to a whole number first so the exponentiation operator (**) can cube it.',
      templateCode: 'n = §§§(input())\nprint(n ** 3)',
      targetCode: 'n = int(input())\nprint(n ** 3)',
      testCases: [
        {
          id: 1,
          input: '4',
          expectedOutput: '64',
        },
        {
          id: 2,
          input: '3',
          expectedOutput: '27',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 5 (9~10단계): int(input())과 복합 대입 연산자(+=, -=) 결합 (11레벨 복습)
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'block',
      prompt_ko: 'hp에 100을 저장하고 피해량 dmg를 int(input())으로 입력받은 뒤, hp -= dmg로 체력을 차감해 남은 hp를 출력해보세요. (예: 35 -> 65)',
      prompt_en: 'Set hp to 100, read damage dmg via int(input()), subtract dmg with hp -= dmg, and print hp (e.g., 35 -> 65).',
      hint_ko: '입력받은 피해량을 정수로 저장한 뒤, 뺄셈 복합 대입 연산자로 초기 체력에서 피해량만큼 차감해보세요.',
      hint_en: 'Store the converted integer damage in dmg, then use the subtraction compound operator (-=) to reduce hp.',
      targetCode: 'hp = 100\ndmg = int(input())\nhp -= dmg\nprint(hp)',
      testCases: [
        {
          id: 1,
          input: '35',
          expectedOutput: '65',
        },
        {
          id: 2,
          input: '20',
          expectedOutput: '80',
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸을 채워 기본 점수 50점에 입력받은 보너스 점수를 복합 대입으로 더한 결과를 출력해보세요. (예: 30 입력 시 80)',
      prompt_en: 'Fill in the two blanks to add the integer input bonus to score (50) using compound assignment and print 80.',
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
    // 11단계: 버그 수정 (fix_bug) - input() 미형변환 덧셈 TypeError 교정
    // ------------------------------------------------------------------------
    {
      id: 11,
      step: 11,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '입력값을 정수로 변환하지 않고 500을 더해 발생한 오류(TypeError)를 수정해보세요. (예: 1500 입력 시 2000 출력)',
      prompt_en: 'Fix the TypeError caused by adding 500 to raw input() without integer conversion (e.g., 1500 -> 2000).',
      hint_ko: '입력 함수가 반환한 값은 아직 문자열 상태여서 숫자 500과 바로 더할 수 없습니다. 입력값을 정수형으로 변환해 저장하도록 고쳐보세요.',
      hint_en: 'Raw user input is a string and cannot be added to 500 directly—convert the input into an integer when storing or calculating.',
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
      hint_ko: '위에서 정수로 변환해 저장한 변수를 자기 자신과 곱하는 식을 출력 함수 안에 작성해보세요.',
      hint_en: 'Inside the print function on the next line, multiply the integer variable stored above by itself.',
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
      hint_ko: '셋째 줄은 문자열 상태의 두 변수를 그대로 이어붙이고, 넷째 줄은 각각 정수로 변환한 뒤 실제 숫자 덧셈을 수행합니다.',
      hint_en: 'Line 3 concatenates the two raw strings, whereas line 4 converts both to integers before adding them.',
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
