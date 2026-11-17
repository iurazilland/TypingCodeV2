import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 12레벨: input()으로 사용자 입력 받기 (15단계)
// - [1~10단계] 블록 ➔ 타이핑 1:1 교차 5쌍
// - [11~12단계] 틀린 곳 수정 (fix_bug) 2문항
// - [13~14단계] 한 줄 완성 (one_line) 2문항
// - [15단계] 출력 결과 예측 선택 (predict_output) 1문항
// ============================================================================
export const PYTHON_LEVEL_12: PracticeRound = {
  id: 'py-basic-r12',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 12,
  title_ko: '12레벨: input()으로 사용자 입력 받기',
  title_en: 'Level 12: Reading User Input with input()',
  totalQuestions: 15,
  unlockedBlocks: ['print', 'variable', 'comment', 'input'],
  questions: [
    // ------------------------------------------------------------------------
    // Pair 1 (1~2단계): input()으로 한 줄 문자열 입력받아 쉼표로 출력하기
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      kind: 'standard',
      prompt_ko: '[블록 조립] input()으로 이름을 입력받아 Hello와 함께 출력해보세요.',
      prompt_en: '[Block] Read a name with input() and print it after "Hello".',
      hint_ko: 'input()의 괄호 안은 비워두며, 입력받은 변수와 문자열을 쉼표(,)로 나란히 출력합니다.',
      hint_en: 'Leave input() parentheses empty, then print "Hello" and name separated by a comma.',
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
      prompt_ko: '[빈칸 채우기] 입력 함수 이름을 채워 도시명 앞에 City: 를 붙여 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the input function name to print City: followed by city.',
      hint_ko: '사용자가 키보드로 입력한 한 줄을 읽어오는 input 함수를 입력하세요.',
      hint_en: 'Call the built-in input function to read a line of user input.',
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
    // Pair 2 (3~4단계): 입력받은 문자열에 + 연산자로 라벨 이어붙이기
    // ------------------------------------------------------------------------
    {
      id: 3,
      step: 3,
      type: 'block',
      kind: 'standard',
      prompt_ko: '[블록 조립] input()으로 받은 문자열 앞에 "ID:"를 +로 이어붙여 출력해보세요.',
      prompt_en: '[Block] Concatenate "ID:" and the input string with + and print it.',
      hint_ko: '앞선 문자열 라벨과 입력받은 문자열 변수를 +로 합쳐 새 변수에 저장한 뒤 출력합니다.',
      hint_en: 'Join the prefix string and the input variable with + and store it in msg.',
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
      prompt_ko: '[빈칸 채우기] 빈칸을 채워 입력받은 등급 앞에 "Tag:"를 +로 붙여 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the blanks to join "Tag:" and the input tag with +.',
      hint_ko: '첫째 줄에는 input을, 둘째 줄에는 문자열을 이어붙이는 + 기호를 입력하세요.',
      hint_en: 'Enter input on line 1 and the concatenation operator + on line 2.',
      templateCode: 'tag = §§§§§()\nmsg = "Tag:" § tag\nprint(msg)',
      targetCode: 'tag = input()\nmsg = "Tag:" + tag\nprint(msg)',
      testCases: [
        {
          id: 1,
          input: 'VIP',
          expectedOutput: 'Tag:VIP',
        },
        {
          id: 2,
          input: 'GOLD',
          expectedOutput: 'Tag:GOLD',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 3 (5~6단계): 두 줄 연속 input()으로 두 문자열 입력받아 합치기
    // ------------------------------------------------------------------------
    {
      id: 5,
      step: 5,
      type: 'block',
      kind: 'standard',
      prompt_ko: '[블록 조립] 두 번의 input()으로 두 줄을 입력받아 하나로 합쳐 출력해보세요.',
      prompt_en: '[Block] Read two lines with two input() calls and print them joined.',
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
      prompt_ko: '[빈칸 채우기] 두 빈칸에 입력 함수를 채워 두 줄의 단어를 이어붙여 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in both blanks with input to concatenate the two input lines.',
      hint_ko: '첫째 줄과 둘째 줄 모두 input 함수를 호출해 각 줄의 단어를 읽어오세요.',
      hint_en: 'Call input on both line 1 and line 2.',
      templateCode: 'a = §§§§§()\nb = §§§§§()\nprint(a + b)',
      targetCode: 'a = input()\nb = input()\nprint(a + b)',
      testCases: [
        {
          id: 1,
          input: 'Sun\nDay',
          expectedOutput: 'SunDay',
        },
        {
          id: 2,
          input: 'Top\nGun',
          expectedOutput: 'TopGun',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 4 (7~8단계): 입력받은 문자열을 곱셈(*)으로 반복해 변수에 저장하기
    // ------------------------------------------------------------------------
    {
      id: 7,
      step: 7,
      type: 'block',
      kind: 'standard',
      prompt_ko: '[블록 조립] input()으로 받은 문자를 5번 반복해 line에 저장하고 출력해보세요.',
      prompt_en: '[Block] Repeat the input character 5 times with * into line and print it.',
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
      prompt_ko: '[빈칸 채우기] 빈칸을 채워 입력받은 단어를 2번 반복해 line에 저장하고 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the blanks to repeat the input word twice into line.',
      hint_ko: '첫째 줄에는 input을, 둘째 줄에는 문자열 반복 연산자 *를 입력하세요.',
      hint_en: 'Enter input on line 1 and the repetition operator * on line 2.',
      templateCode: 'word = §§§§§()\nline = word § 2\nprint(line)',
      targetCode: 'word = input()\nline = word * 2\nprint(line)',
      testCases: [
        {
          id: 1,
          input: 'Go',
          expectedOutput: 'GoGo',
        },
        {
          id: 2,
          input: 'Win',
          expectedOutput: 'WinWin',
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
      kind: 'standard',
      prompt_ko: '[블록 조립] 숫자 7을 input()으로 받아 * 3을 실행했을 때 777이 출력됨을 확인해보세요.',
      prompt_en: '[Block] Trace n = input() and print(n * 3) to see that input "7" repeats as 777.',
      hint_ko: 'input()의 결과는 항상 문자열이므로 "7"이 세 번 반복되어 777이 출력됩니다.',
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
      prompt_ko: '[빈칸 채우기] 입력 함수를 채워 숫자 5를 입력받았을 때 5555가 출력되는지 확인해보세요.',
      prompt_en: '[Fill Blank] Fill in the input function so that entering 5 prints 5555.',
      hint_ko: 'input()으로 읽은 "5"는 문자열이므로 * 4를 하면 글자가 네 번 반복됩니다.',
      hint_en: 'Read the input with input(); since it returns a string, * 4 repeats "5" four times.',
      templateCode: 'n = §§§§§()\nprint(n * 4)',
      targetCode: 'n = input()\nprint(n * 4)',
      testCases: [
        {
          id: 1,
          input: '5',
          expectedOutput: '5555',
        },
        {
          id: 2,
          input: '2',
          expectedOutput: '2222',
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
      prompt_ko: '[틀린 곳 수정] 입력받은 두 단어가 이어붙어 출력되도록 마지막 줄의 연산자를 수정해보세요.',
      prompt_en: '[Fix Bug] Fix the operator on the last line so the two input words concatenate.',
      hint_ko: '문자열끼리는 곱셈(*)을 할 수 없으므로 덧셈 기호(+)로 고쳐 이어붙여보세요.',
      hint_en: 'Strings cannot be multiplied together; change * to + to concatenate them.',
      templateCode: 'a = input()\nb = input()\nprint(a * b)',
      targetCode: 'a = input()\nb = input()\nprint(a + b)',
      testCases: [
        {
          id: 1,
          input: 'Hi\nPy',
          expectedOutput: 'HiPy',
        },
        {
          id: 2,
          input: 'Go\nUp',
          expectedOutput: 'GoUp',
        },
      ],
    },
    {
      id: 12,
      step: 12,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '[틀린 곳 수정] 입력받은 단어가 3번 반복되도록 둘째 줄의 연산 기호를 수정해보세요.',
      prompt_en: '[Fix Bug] Fix the operator on line 2 so the input word repeats 3 times.',
      hint_ko: '문자열을 정수 횟수만큼 반복하려면 + 대신 곱셈 기호(*)를 사용해야 합니다.',
      hint_en: 'Use the multiplication asterisk (*) instead of + to repeat a string 3 times.',
      templateCode: 'w = input()\nres = w + 3\nprint(res)',
      targetCode: 'w = input()\nres = w * 3\nprint(res)',
      testCases: [
        {
          id: 1,
          input: 'Ho',
          expectedOutput: 'HoHoHo',
        },
        {
          id: 2,
          input: 'Yo',
          expectedOutput: 'YoYoYo',
        },
      ],
    },
    {
      id: 13,
      step: 13,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '[한 줄 완성] 첫째 줄에서 사용자 입력을 변수 word에 저장해 2번 반복해 출력해보세요.',
      prompt_en: '[Complete Line] Complete line 1 to read user input into word and print it twice.',
      hint_ko: 'word = input()을 첫째 줄에 작성해 입력 문자열을 변수 word에 저장해보세요.',
      hint_en: 'Write word = input() on line 1 to store the user input in word.',
      templateCode: '§§§§§§§§§§§§§§\nprint(word * 2)',
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
    {
      id: 14,
      step: 14,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '[한 줄 완성] 첫째 줄에서 사용자 입력을 변수 user에 저장해 ID:ace를 출력해보세요.',
      prompt_en: '[Complete Line] Complete line 1 to store user input in user and print ID:ace.',
      hint_ko: 'user = input()을 첫째 줄에 작성해 입력값을 user에 저장해보세요.',
      hint_en: 'Write user = input() on line 1 to read input into user.',
      templateCode: '§§§§§§§§§§§§§§\nmsg = "ID:" + user\nprint(msg)',
      targetCode: 'user = input()\nmsg = "ID:" + user\nprint(msg)',
      testCases: [
        {
          id: 1,
          input: 'ace',
          expectedOutput: 'ID:ace',
        },
        {
          id: 2,
          input: 'sky',
          expectedOutput: 'ID:sky',
        },
      ],
    },
    {
      id: 15,
      step: 15,
      type: 'quiz',
      kind: 'predict_output',
      prompt_ko: '[출력 결과 예측] 코드의 실행 결과를 선택해보세요.',
      prompt_en: '[Predict Output] Select the exact output.',
      hint_ko: 'input()이 반환한 두 값은 모두 문자열이므로 + 기호가 문자열 이어붙이기로 동작합니다.',
      hint_en: 'Values returned by input() are strings, so + concatenates them rather than adding numbers.',
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
