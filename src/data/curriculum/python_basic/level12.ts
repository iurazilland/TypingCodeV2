import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 12레벨: input()으로 사용자 입력 받기 (13단계 표준 구성)
// - [1,3,5,7,9단계] 블록 코딩 개념 도입 (input 블록 사전 배치 활용)
// - [2,4,6,8,10단계] 빈칸 채우기 타이핑 실습 (fill_blank)
// - [11단계] 버그 수정 (fix_bug)
// - [12단계] 예제 아래 한 줄 코드 추가 작성 (one_line)
// - [13단계] 출력 결과 예측 4지선다 퀴즈 (predict_output)
// ============================================================================
export const PYTHON_LEVEL_12: PracticeRound = {
  id: 'py-basic-r12',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 12,
  title_ko: '12레벨: input()으로 사용자 입력 받기',
  title_en: 'Level 12: Reading User Input with input()',
  totalQuestions: 13,
  unlockedBlocks: ['print', 'variable', 'comment', 'input'],
  questions: [
    // ------------------------------------------------------------------------
    // Pair 1 (1~2단계): input()으로 한 줄 문자열 입력받아 출력하기 (쉼표 출력 복습)
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      prompt_ko: 'input() 함수는 사용자가 키보드로 입력한 한 줄을 문자열로 읽어와 변수에 저장합니다. 블록의 코드를 따라 입력해 인사말을 출력해보세요. (터미널 입력: Alice)',
      prompt_en: 'The input() function reads a line typed by the user as a string and stores it in a variable. Trace the block code to print the greeting (Terminal input: Alice).',
      hint_ko: 'input()의 괄호 안은 비워두며, 입력받은 변수와 문자열을 쉼표(,)로 나란히 출력합니다.',
      hint_en: 'Leave the parentheses of input() empty, then print the greeting string and variable separated by a comma (,).',
      targetCode: 'name = input()\nprint("Hello", name)',
      testCases: [
        {
          id: 1,
          input: 'Alice',
          expectedOutput: 'Hello Alice',
        },
        {
          id: 2,
          input: 'Minsu',
          expectedOutput: 'Hello Minsu',
        },
      ],
    },
    {
      id: 2,
      step: 2,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 사용자 입력을 받는 함수 이름을 채워 입력받은 도시명 앞에 City: 를 붙여 출력해보세요. (터미널 입력: Seoul)',
      prompt_en: 'Fill in the blank with the user-input function name to print City: followed by the input city (Terminal input: Seoul).',
      hint_ko: '사용자가 키보드로 입력한 한 줄을 읽어올 때는 영어로 입력을 뜻하는 다섯 글자 내장 함수를 사용합니다.',
      hint_en: 'To read a line typed by the user, call the five-letter built-in function that means data coming "in" to the program.',
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
    // Pair 2 (3~4단계): 입력받은 문자열에 + 연결 및 sep 옵션 활용하기 (5·7레벨 복습)
    // ------------------------------------------------------------------------
    {
      id: 3,
      step: 3,
      type: 'block',
      prompt_ko: 'input()으로 읽어온 값은 문자열이므로 덧셈 기호(+)를 사용해 다른 문자열과 빈틈없이 이어붙일 수 있습니다. 블록의 코드를 따라 입력해보세요. (터미널 입력: hero)',
      prompt_en: 'Because input() returns a string, you can concatenate it directly with another string using the plus (+) operator. Trace the block code (Terminal input: hero).',
      hint_ko: '앞선 문자열 라벨과 입력받은 문자열 변수를 +로 합쳐 새 변수에 저장한 뒤 출력합니다.',
      hint_en: 'Join the prefix string and the input variable with + and store the combined string before printing.',
      targetCode: 'user = input()\nmsg = "ID:" + user\nprint(msg)',
      testCases: [
        {
          id: 1,
          input: 'hero',
          expectedOutput: 'ID:hero',
        },
        {
          id: 2,
          input: 'coder',
          expectedOutput: 'ID:coder',
        },
      ],
    },
    {
      id: 4,
      step: 4,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 입력 함수 이름을 채워 입력받은 등급 양옆에 대괄호를 빈틈없이 붙여 출력해보세요. (터미널 입력: VIP)',
      prompt_en: 'Fill in the input function name to print the input tag wrapped in square brackets without spaces (Terminal input: VIP).',
      hint_ko: '첫째 줄에서 다섯 글자 입력 함수로 단어를 읽어오면, 둘째 줄의 구분자(sep="") 옵션이 공백 없이 대괄호와 단어를 붙여 출력해 줍니다.',
      hint_en: 'Read the word on line 1 with the five-letter input function; sep="" on line 2 prints the brackets and variable without spaces.',
      templateCode: 'tag = §§§§§()\nprint("[", tag, "]", sep="")',
      targetCode: 'tag = input()\nprint("[", tag, "]", sep="")',
      testCases: [
        {
          id: 1,
          input: 'VIP',
          expectedOutput: '[VIP]',
        },
        {
          id: 2,
          input: 'GOLD',
          expectedOutput: '[GOLD]',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 3 (5~6단계): 두 줄 연속 input()으로 두 문자열 입력받아 조합하기 (10레벨 복습)
    // ------------------------------------------------------------------------
    {
      id: 5,
      step: 5,
      type: 'block',
      prompt_ko: 'input()은 호출될 때마다 한 줄씩 순서대로 읽어오므로, 여러 줄의 입력은 여러 번의 input()으로 각각 받아 합칠 수 있습니다. 블록의 코드를 따라 입력해보세요. (터미널 입력: 첫째 줄 Py, 둘째 줄 thon)',
      prompt_en: 'Each input() call reads one line in order, so multiple lines of input can be read into separate variables and combined. Trace the block code (Terminal input: line 1 Py, line 2 thon).',
      hint_ko: '첫 번째와 두 번째 줄의 입력이 각 변수에 차례로 저장된 뒤 + 연산자로 이어붙여집니다.',
      hint_en: 'The two input lines are stored in separate variables in order and concatenated with +.',
      targetCode: 'first = input()\nsecond = input()\nprint(first + second)',
      testCases: [
        {
          id: 1,
          input: 'Py\nthon',
          expectedOutput: 'Python',
        },
        {
          id: 2,
          input: 'Code\nRun',
          expectedOutput: 'CodeRun',
        },
      ],
    },
    {
      id: 6,
      step: 6,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸에 입력 함수 이름을 채워 두 줄로 입력받은 두 단어의 순서를 반대로 뒤집어 출력해보세요. (터미널 입력: 첫째 줄 World, 둘째 줄 Hello)',
      prompt_en: 'Fill in both blanks with the input function name to print the two input lines in reverse order (Terminal input: line 1 World, line 2 Hello).',
      hint_ko: '첫째 줄과 둘째 줄 모두 다섯 글자 입력 함수를 호출해 각각의 변수에 저장하면, 마지막 줄에서 순서를 바꾸어 출력합니다.',
      hint_en: 'Call the five-letter input function on both lines to store each line of text before printing b followed by a.',
      templateCode: 'a = §§§§§()\nb = §§§§§()\nprint(b, a)',
      targetCode: 'a = input()\nb = input()\nprint(b, a)',
      testCases: [
        {
          id: 1,
          input: 'World\nHello',
          expectedOutput: 'Hello World',
        },
        {
          id: 2,
          input: 'Korea\nSeoul',
          expectedOutput: 'Seoul Korea',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 4 (7~8단계): 입력받은 문자열 반복(*)과 복합 대입(+=) 활용하기 (5·11레벨 복습)
    // ------------------------------------------------------------------------
    {
      id: 7,
      step: 7,
      type: 'block',
      prompt_ko: 'input()으로 입력받은 문자열 변수에 곱셈 기호(*)로 정수를 곱하면 입력받은 글자를 원하는 횟수만큼 반복할 수 있습니다. 블록의 코드를 따라 입력해보세요. (터미널 입력: *)',
      prompt_en: 'Multiplying a string variable read via input() by an integer with * repeats the input text that many times. Trace the block code (Terminal input: *).',
      hint_ko: '입력받은 기호가 * 5 연산을 통해 다섯 번 연속 이어진 문자열로 저장됩니다.',
      hint_en: 'The input symbol is repeated five times in a row using * 5.',
      targetCode: 'ch = input()\nline = ch * 5\nprint(line)',
      testCases: [
        {
          id: 1,
          input: '*',
          expectedOutput: '*****',
        },
        {
          id: 2,
          input: '#',
          expectedOutput: '#####',
        },
      ],
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 복합 대입 연산자를 채워 입력받은 단어 뒤에 느낌표("!")를 이어붙여 출력해보세요. (터미널 입력: Go)',
      prompt_en: 'Fill in the compound assignment operator to append "!" to the input word and print it (Terminal input: Go).',
      hint_ko: '문자열 변수에도 덧셈 복합 대입 연산자를 사용하면 기존 글자 뒤에 새로운 글자를 이어붙여 자기 자신에게 다시 저장할 수 있습니다.',
      hint_en: 'Use the addition compound assignment operator to concatenate "!" onto the existing string variable in place.',
      templateCode: 'word = input()\nword §§ "!"\nprint(word)',
      targetCode: 'word = input()\nword += "!"\nprint(word)',
      testCases: [
        {
          id: 1,
          input: 'Go',
          expectedOutput: 'Go!',
        },
        {
          id: 2,
          input: 'Win',
          expectedOutput: 'Win!',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 5 (9~10단계): input()에 숫자를 입력해도 문자열로 동작함 확인하기
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'block',
      prompt_ko: 'input()은 숫자를 입력하더라도 항상 문자열(글자)로 읽어오기 때문에, 곱셈 기호(*)를 쓰면 숫자 계산 대신 글자 반복이 일어납니다. 블록의 코드를 따라 입력해 확인해보세요. (터미널 입력: 7)',
      prompt_en: 'Even when digits are entered, input() always returns a string, so using * repeats the characters instead of multiplying numbers. Trace the block code to see the result (Terminal input: 7).',
      hint_ko: '문자열 "7"이 세 번 반복되므로 21이 아닌 777이 화면에 출력됩니다.',
      hint_en: 'Because "7" is a string, repeating it three times prints 777 rather than 21.',
      targetCode: 'n = input()\nprint(n * 3)',
      testCases: [
        {
          id: 1,
          input: '7',
          expectedOutput: '777',
        },
        {
          id: 2,
          input: '5',
          expectedOutput: '555',
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸에 입력 함수를 채워 두 줄의 숫자를 입력받았을 때 a + b가 문자열처럼 이어붙어 1020으로 출력되는지 확인해보세요. (터미널 입력: 첫째 줄 10, 둘째 줄 20)',
      prompt_en: 'Fill in both blanks with the input function to see that a + b concatenates "10" and "20" into 1020 (Terminal input: line 1 10, line 2 20).',
      hint_ko: '두 줄의 입력값을 각각 다섯 글자 입력 함수로 받아 더하면, 두 값이 모두 문자열이기 때문에 글자가 나란히 이어붙습니다.',
      hint_en: 'Read each line with the five-letter input function; because both results are strings, + joins them into "1020".',
      templateCode: 'a = §§§§§()\nb = §§§§§()\nprint(a + b)',
      targetCode: 'a = input()\nb = input()\nprint(a + b)',
      testCases: [
        {
          id: 1,
          input: '10\n20',
          expectedOutput: '1020',
        },
        {
          id: 2,
          input: '3\n4',
          expectedOutput: '34',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 11단계: 버그 수정 (fix_bug) - input 함수 이름 오타 교정
    // ------------------------------------------------------------------------
    {
      id: 11,
      step: 11,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '입력 함수 이름의 철자 오타로 인해 발생한 오류(NameError)를 수정하여 Hi Leo가 출력되도록 해보세요. (터미널 입력: Leo)',
      prompt_en: 'Fix the typo in the input function name so that Hi Leo is printed (Terminal input: Leo).',
      hint_ko: '첫 번째 줄에서 사용자 입력을 읽어오는 다섯 글자 내장 함수의 철자가 올바르게 적혀 있는지 확인해보세요.',
      hint_en: 'Check the spelling of the five-letter built-in function used to read user input on the first line.',
      templateCode: 'name = inpt()\nprint("Hi", name)',
      targetCode: 'name = input()\nprint("Hi", name)',
      testCases: [
        {
          id: 1,
          input: 'Leo',
          expectedOutput: 'Hi Leo',
        },
        {
          id: 2,
          input: 'Ara',
          expectedOutput: 'Hi Ara',
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
      prompt_ko: '단어를 입력받는 코드 아래에 한 줄을 추가하여 입력받은 word를 2번 반복한 문자열을 출력해보세요. (터미널 입력: Go)',
      prompt_en: 'Type line 1 and add a line below to print the input word repeated 2 times (Terminal input: Go).',
      hint_ko: '위에서 입력받은 문자열 변수에 곱셈 기호로 2를 곱한 식을 출력 함수 괄호 안에 넣어보세요.',
      hint_en: 'Pass an expression multiplying the word variable by 2 inside the print function on the second line.',
      templateCode: 'word = input()\n§§§§§§§§§§§§§§§',
      targetCode: 'word = input()\nprint(word * 2)',
      testCases: [
        {
          id: 1,
          input: 'Go',
          expectedOutput: 'GoGo',
        },
        {
          id: 2,
          input: 'Hi',
          expectedOutput: 'HiHi',
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
      prompt_ko: '첫째 줄에 15, 둘째 줄에 20이 입력될 때, 다음 파이썬 코드의 실행 결과를 선택해보세요.',
      prompt_en: 'When 15 and 20 are given on lines 1 and 2, select the exact output of the following Python code.',
      hint_ko: '입력 함수가 반환한 두 값은 모두 문자열 상태이므로 더하기 기호가 산술 덧셈이 아닌 문자열 이어붙이기로 동작한다는 점을 떠올려보세요.',
      hint_en: 'Remember that values returned by input() are strings, so the + operator concatenates them rather than adding numbers.',
      targetCode: 'a = input()\nb = input()\nprint(a + b)',
      choices: ['1520', '35', '15 20', 'TypeError'],
      correctChoiceIndex: 0,
      testCases: [
        {
          id: 1,
          input: '15\n20',
          expectedOutput: '1520',
        },
      ],
    },
  ],
};
