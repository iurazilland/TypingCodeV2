import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 9레벨: 주석(#)과 변수 선언 (13단계 표준 구성)
// - [1,3,5,7,9단계] 블록 코딩 개념 도입 (사전 배치된 빈칸 슬롯 블록 활용, 오답 시 하트 차감 없음)
// - [2,4,6,8,10단계] 빈칸 채우기 타이핑 실습 (fill_blank)
// - [11단계] 버그 수정 (fix_bug)
// - [12단계] 예제 아래 한 줄 코드 추가 작성 (one_line)
// - [13단계] 출력 결과 예측 4지선다 퀴즈 (predict_output)
// ============================================================================
export const PYTHON_LEVEL_9: PracticeRound = {
  id: 'py-basic-r9',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 9,
  title_ko: '9레벨: 주석(#)과 변수 선언',
  title_en: 'Level 9: Comments (#) & Variable Declaration',
  totalQuestions: 13,
  unlockedBlocks: ['print', 'variable', 'comment'],
  questions: [
    // ------------------------------------------------------------------------
    // Pair 1 (1~2단계): # 주석 작성과 실행 무시 원리
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      prompt_ko: '첫째 주석(#) 블록에 메모 First note를 적고, 둘째 출력 블록에 문자열 "Start"를 넣어 화면에 Start만 출력되는지 확인해보세요.',
      prompt_en: 'Write First note in the comment (#) block and "Start" in the print block to verify that only Start is printed.',
      hint_ko: '# 뒤에 적은 주석은 사람만 읽는 메모이므로 실행되지 않습니다. 첫째 블록에 First note, 둘째 블록에 "Start"를 입력하세요.',
      hint_en: 'Comments after # are ignored during execution. Enter First note in the first block and "Start" in the second block.',
      targetCode: '# First note\nprint("Start")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Start',
        },
      ],
    },
    {
      id: 2,
      step: 2,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '첫째 줄 맨 앞 빈칸에 실행에 영향을 주지 않는 메모 기호를 채워 설명문으로 만들고 Hello만 출력해보세요.',
      prompt_en: 'Fill in the blank at the start of line 1 with the comment symbol so only Hello is printed.',
      hint_ko: '파이썬에서 한 줄 주석(설명 메모)을 시작할 때는 맨 앞에 샵(#) 기호를 붙입니다.',
      hint_en: 'In Python, a single-line comment starts with the hash (#) symbol.',
      templateCode: '§ Greeting line\nprint("Hello")',
      targetCode: '# Greeting line\nprint("Hello")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Hello',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 2 (3~4단계): 숫자형 변수 선언과 저장된 값 출력하기
    // ------------------------------------------------------------------------
    {
      id: 3,
      step: 3,
      type: 'block',
      prompt_ko: '변수 블록을 이용해 변수 score에 숫자 100을 저장하고, 아래 출력 블록에 변수 score를 넣어 100을 출력해보세요.',
      prompt_en: 'Store the number 100 in variable score using the variable block, then print score to output 100.',
      hint_ko: '첫째 블록 왼쪽 칸에 score, 오른쪽 칸에 100을 입력하고, 둘째 print 블록 칸에는 따옴표 없이 score를 입력하세요.',
      hint_en: 'Enter score on the left and 100 on the right of the variable block, then enter score without quotes in print().',
      targetCode: 'score = 100\nprint(score)',
      expectedVariables: { score: 100 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '100',
        },
      ],
    },
    {
      id: 4,
      step: 4,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸을 채워 변수 level에 숫자 5를 저장하고, 다음 줄에서 변수에 담긴 값 5를 출력해보세요.',
      prompt_en: 'Fill in the blanks to store 5 in variable level and print its value 5 on the next line.',
      hint_ko: '변수에 값을 저장할 때는 등호(=)를 사용하고, 출력할 때는 따옴표 없이 변수 이름 level을 적습니다.',
      hint_en: 'Use = to assign a value to a variable, and write level without quotes inside print().',
      templateCode: 'level § 5\nprint(§§§§§)',
      targetCode: 'level = 5\nprint(level)',
      expectedVariables: { level: 5 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '5',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 3 (5~6단계): 문자열 변수 선언과 출력하기
    // ------------------------------------------------------------------------
    {
      id: 5,
      step: 5,
      type: 'block',
      prompt_ko: '변수 name에 문자열 "Alice"를 저장하고, 아래 출력 블록에 변수 name을 넣어 Alice를 출력해보세요.',
      prompt_en: 'Store the string "Alice" in variable name, then print variable name to output Alice.',
      hint_ko: '문자열 값을 저장할 때는 큰따옴표를 포함해 "Alice"로 적고, 변수 이름을 출력할 때는 따옴표 없이 name만 적습니다.',
      hint_en: 'Include quotes when storing the string "Alice", and write name without quotes when printing the variable.',
      targetCode: 'name = "Alice"\nprint(name)',
      expectedVariables: { name: 'Alice' },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Alice',
        },
      ],
    },
    {
      id: 6,
      step: 6,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸을 채워 변수 city에 문자열 Seoul을 저장하고, 변수 city에 담긴 값을 화면에 출력해보세요.',
      prompt_en: 'Fill in the two blanks to store the string Seoul in variable city and print its value.',
      hint_ko: '첫째 줄 빈칸에는 큰따옴표로 감싼 "Seoul"을, 둘째 줄 빈칸에는 따옴표 없는 변수명 city를 입력하세요.',
      hint_en: 'Enter "Seoul" with double quotes on line 1, and the variable name city without quotes on line 2.',
      templateCode: 'city = §§§§§§§\nprint(§§§§)',
      targetCode: 'city = "Seoul"\nprint(city)',
      expectedVariables: { city: 'Seoul' },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Seoul',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 4 (7~8단계): 라벨 문자열과 변수를 쉼표로 나란히 출력하기
    // ------------------------------------------------------------------------
    {
      id: 7,
      step: 7,
      type: 'block',
      prompt_ko: '변수 hp에 250을 저장한 뒤, 출력 블록에서 문자열 "HP:"와 변수 hp를 쉼표로 나열해 HP: 250을 출력해보세요.',
      prompt_en: 'Store 250 in variable hp, then list "HP:" and hp separated by a comma in print() to output HP: 250.',
      hint_ko: '첫째 블록에 hp와 250을 입력하고, 둘째 print 블록에는 "HP:", hp를 입력하면 사이에 공백 한 칸이 자동 삽입됩니다.',
      hint_en: 'Set hp to 250 in the first block, and enter "HP:", hp in print() to separate them with a single space.',
      targetCode: 'hp = 250\nprint("HP:", hp)',
      expectedVariables: { hp: 250 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'HP: 250',
        },
      ],
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸을 채워 라벨 문자열 뒤에 변수 gold의 값이 공백 한 칸을 두고 이어진 Gold: 500을 출력해보세요.',
      prompt_en: 'Fill in the blank so the label and variable gold print on one line separated by a space as Gold: 500.',
      hint_ko: '문자열 "Gold:" 뒤에 쉼표와 공백을 찍고 변수명 gold를 이어서(, gold) 입력하세요.',
      hint_en: 'Type a comma, a space, and the variable name (, gold) right after "Gold:".',
      templateCode: 'gold = 500\nprint("Gold:"§§§§§§)',
      targetCode: 'gold = 500\nprint("Gold:", gold)',
      expectedVariables: { gold: 500 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Gold: 500',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 5 (9~10단계): 언더바(_) 변수명과 따옴표 유무("변수명" vs 변수명) 구분
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'block',
      prompt_ko: '변수 user_age에 20을 저장하고, 출력 블록에 문자열 "user_age"와 변수 user_age를 순서대로 넣어 user_age 20을 출력해보세요.',
      prompt_en: 'Store 20 in user_age, then print the string "user_age" and variable user_age together as user_age 20.',
      hint_ko: '따옴표가 있는 "user_age"는 글자 그대로 출력되고, 따옴표가 없는 user_age는 저장된 값 20으로 출력됩니다.',
      hint_en: '"user_age" with quotes prints literally, while user_age without quotes prints its stored value 20.',
      targetCode: 'user_age = 20\nprint("user_age", user_age)',
      expectedVariables: { user_age: 20 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'user_age 20',
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '언더바(_)로 연결된 변수 max_hp에 300을 저장하고, 라벨 뒤에 해당 변수를 넣어 max_hp: 300을 출력해보세요.',
      prompt_en: 'Store 300 in variable max_hp and place the variable after the label to print max_hp: 300.',
      hint_ko: '파이썬 변수명에는 공백 대신 언더바(_)를 사용할 수 있습니다. 두 빈칸에 모두 max_hp를 입력하세요.',
      hint_en: 'Python variable names can use underscores (_) instead of spaces. Enter max_hp in both blanks.',
      templateCode: '§§§§§§ = 300\nprint("max_hp:", §§§§§§)',
      targetCode: 'max_hp = 300\nprint("max_hp:", max_hp)',
      expectedVariables: { max_hp: 300 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'max_hp: 300',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 11단계: 버그 수정 (fix_bug) - 변수명을 따옴표로 감싼 실수 교정
    // ------------------------------------------------------------------------
    {
      id: 11,
      step: 11,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '글자 point 대신 변수 point에 저장된 값 80이 화면에 출력되도록 잘못된 부분을 수정해보세요.',
      prompt_en: 'Fix the bug so the value 80 stored in variable point prints instead of the literal word point.',
      hint_ko: '변수 이름을 따옴표(" ")로 감싸면 문자열 글자 그대로 출력됩니다. 따옴표 없이 변수명 point만 적어보세요.',
      hint_en: 'Wrapping a variable name in quotes (" ") prints it as plain text. Remove the quotes around point.',
      templateCode: 'point = 80\nprint("point")',
      targetCode: 'point = 80\nprint(point)',
      expectedVariables: { point: 80 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '80',
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
      prompt_ko: '변수 rank를 선언한 코드 아래에 한 줄을 추가하여 문자열 "Rank:"와 변수 rank가 공백으로 구분된 Rank: Gold를 출력해보세요.',
      prompt_en: 'Type the variable declaration and add a line below to print "Rank:" and rank separated by a space as Rank: Gold.',
      hint_ko: '첫째 줄을 입력하고 Enter를 누른 뒤, 둘째 줄에 print("Rank:", rank)를 입력하세요.',
      hint_en: 'Type line 1, press Enter, and write print("Rank:", rank) on line 2.',
      templateCode: 'rank = "Gold"\n§§§§§§§§§§§§§§§§§§§§',
      targetCode: 'rank = "Gold"\nprint("Rank:", rank)',
      expectedVariables: { rank: 'Gold' },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Rank: Gold',
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
      prompt_ko: '다음 파이썬 코드를 실행했을 때 화면에 출력될 올바른 결과를 선택해보세요.',
      prompt_en: 'Select the exact output that will be printed when the following Python code runs.',
      hint_ko: '#으로 시작하는 둘째 줄은 주석이므로 실행되지 않고, 셋째 줄에서 따옴표가 있는 "x"는 글자 x로, 따옴표 없는 x는 50으로 출력됩니다.',
      hint_en: 'Line 2 starting with # is ignored as a comment. On line 3, "x" prints literally as x and x prints its value 50.',
      targetCode: 'x = 50\n# x = 999\nprint("x", x)',
      choices: ['x 50', '50 50', 'x 999', 'x x'],
      correctChoiceIndex: 0,
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'x 50',
        },
      ],
    },
  ],
};

