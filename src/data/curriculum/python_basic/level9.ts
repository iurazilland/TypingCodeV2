import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 9레벨: 주석(#)과 변수 선언 (15단계)
// - [1~10단계] 블록 ➔ 타이핑 1:1 교차 5쌍
// - [11~12단계] 틀린 곳 수정 (fix_bug) 2문항
// - [13~14단계] 한 줄 완성 (one_line) 2문항
// - [15단계] 출력 결과 예측 선택 (predict_output) 1문항
// ============================================================================
export const PYTHON_LEVEL_9: PracticeRound = {
  id: 'py-basic-r9',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 9,
  title_ko: '9레벨: 주석(#)과 변수 선언',
  title_en: 'Level 9: Comments (#) & Variable Declaration',
  totalQuestions: 15,
  unlockedBlocks: ['print', 'variable', 'comment'],
  questions: [
    // ------------------------------------------------------------------------
    // Pair 1 (1~2단계): # 주석 작성과 실행 무시 원리
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      kind: 'standard',
      prompt_ko: '[블록 조립] 주석(#) 블록과 print() 블록을 조립해 Start만 출력해보세요.',
      prompt_en: '[Block] Assemble the comment (#) block and print() block so only Start is printed.',
      hint_ko: '첫째 줄의 주석은 화면에 출력되지 않고 둘째 줄의 print() 문만 실행됩니다.',
      hint_en: 'The comment on the first line produces no output; only the print() block on line 2 executes.',
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
      prompt_ko: '[빈칸 채우기] 첫째 줄 맨 앞 빈칸에 주석 기호를 채워 Hello만 출력되도록 해보세요.',
      prompt_en: '[Fill Blank] Fill in the blank at the start of line 1 with the comment symbol to print Hello.',
      hint_ko: '파이썬에서 한 줄 주석을 시작할 때는 샵(#) 기호를 맨 앞에 붙입니다.',
      hint_en: 'In Python, start a single-line comment with the hash (#) symbol.',
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
      kind: 'standard',
      prompt_ko: '[블록 조립] 변수 score에 100을 대입(=)하고 저장된 값을 출력해보세요.',
      prompt_en: '[Block] Assign 100 to variable score with = and print its stored number.',
      hint_ko: '변수에 저장된 값을 꺼내 출력할 때는 변수 이름에 따옴표를 붙이지 않습니다.',
      hint_en: 'Write the variable name without quotes inside print() to output its stored value.',
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
      prompt_ko: '[빈칸 채우기] 첫째 줄 빈칸을 채워 변수 level에 숫자 5를 저장하고 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the blanks on line 1 to store 5 in variable level and print 5.',
      hint_ko: '첫째 줄에 변수 이름 level과 대입 연산자 등호(=)를 차례로 입력하세요.',
      hint_en: 'Enter the variable name level and the assignment operator = on line 1.',
      templateCode: '§§§§§ § 5\nprint(level)',
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
      kind: 'standard',
      prompt_ko: '[블록 조립] 변수 name에 문자열 "Alice"를 저장하고 출력해보세요.',
      prompt_en: '[Block] Assign the string "Alice" to variable name and print it.',
      hint_ko: '변수에 대입할 때는 문자열에 큰따옴표를 붙이고, 출력할 때는 변수 이름만 적습니다.',
      hint_en: 'Enclose the text in quotes when assigning it, then pass the unquoted variable name to print().',
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
      prompt_ko: '[빈칸 채우기] 첫째 줄 빈칸을 채워 변수 city에 문자열 "Seoul"을 저장하고 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the blanks on line 1 to store "Seoul" in variable city and print it.',
      hint_ko: '첫째 줄의 왼쪽 빈칸에는 변수명 city를, 오른쪽 빈칸에는 큰따옴표로 감싼 "Seoul"을 입력하세요.',
      hint_en: 'Enter city in the first blank and "Seoul" wrapped in double quotes in the second blank.',
      templateCode: '§§§§ = §§§§§§§\nprint(city)',
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
      kind: 'standard',
      prompt_ko: '[블록 조립] 변수 hp에 250을 저장하고 라벨 "HP:"와 함께 출력해보세요.',
      prompt_en: '[Block] Store 250 in variable hp and print it alongside the label "HP:".',
      hint_ko: '따옴표로 감싼 문자열과 따옴표 없는 변수를 쉼표로 구분해 한 줄에 출력합니다.',
      hint_en: 'Separate the quoted label string and the unquoted variable name with a comma.',
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
      prompt_ko: '[빈칸 채우기] 첫째 줄 빈칸을 채워 변수 gold에 500을 대입하고 Gold: 500을 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the blanks on line 1 to assign 500 to gold and print Gold: 500.',
      hint_ko: '첫째 줄에서 변수 이름 gold와 대입 연산자 =를 사용해 500을 저장해보세요.',
      hint_en: 'Assign 500 to variable gold using = on the first line.',
      templateCode: '§§§§ § 500\nprint("Gold:", gold)',
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
      kind: 'standard',
      prompt_ko: '[블록 조립] 밑줄(_)이 들어간 변수 user_age에 20을 저장하고 라벨과 함께 출력해보세요.',
      prompt_en: '[Block] Store 20 in user_age and print the quoted name and variable value side by side.',
      hint_ko: '"user_age"는 문자열 그대로 출력되고, 따옴표 없는 user_age는 저장된 숫자 20으로 출력됩니다.',
      hint_en: '"user_age" prints the literal text, whereas unquoted user_age outputs the stored number 20.',
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
      prompt_ko: '[빈칸 채우기] 첫째 줄 빈칸을 채워 변수 max_hp에 300을 저장하고 max_hp: 300을 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the blanks on line 1 to store 300 in max_hp and print max_hp: 300.',
      hint_ko: '첫째 줄의 왼쪽 빈칸에는 max_hp를, 오른쪽 빈칸에는 숫자 300을 입력하세요.',
      hint_en: 'Enter max_hp in the first blank and 300 in the second blank on line 1.',
      templateCode: '§§§§§§ = §§§\nprint("max_hp:", max_hp)',
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
    // 11~15단계: 실전 응용 (fix_bug 2 / one_line 2 / predict_output 1)
    // ------------------------------------------------------------------------
    {
      id: 11,
      step: 11,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '[틀린 곳 수정] 변수 a와 b의 값(10 80)이 나란히 출력되도록 마지막 줄을 수정해보세요.',
      prompt_en: '[Fix Bug] Fix the last line so the values of a and b (10 80) are printed side by side.',
      hint_ko: '두 번째 출력 항목이 a로 중복되어 있으므로 b로 수정해보세요.',
      hint_en: 'The second argument repeats a; change it to b.',
      templateCode: 'a = 10\nb = 80\nprint(a, a)',
      targetCode: 'a = 10\nb = 80\nprint(a, b)',
      expectedVariables: { a: 10, b: 80 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '10 80',
        },
      ],
    },
    {
      id: 12,
      step: 12,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '[틀린 곳 수정] 첫째 줄 메모가 주석으로 무시되고 90이 출력되도록 기호를 수정해보세요.',
      prompt_en: '[Fix Bug] Fix the comment symbol on line 1 so the note is ignored and 90 is printed.',
      hint_ko: '파이썬에서 한 줄 주석은 슬래시(/)가 아니라 샵(#) 기호로 시작해야 합니다.',
      hint_en: 'In Python, single-line comments start with # rather than /.',
      templateCode: '/ Note line\nscore = 90\nprint(score)',
      targetCode: '# Note line\nscore = 90\nprint(score)',
      expectedVariables: { score: 90 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '90',
        },
      ],
    },
    {
      id: 13,
      step: 13,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '[한 줄 완성] 첫째 줄에 변수 rank를 선언해 "Gold"를 저장하고 Rank: Gold를 출력해보세요.',
      prompt_en: '[Complete Line] Complete line 1 by assigning "Gold" to variable rank to print Rank: Gold.',
      hint_ko: 'rank = "Gold"처럼 변수 이름과 문자열 값을 등호(=)로 연결해 작성해보세요.',
      hint_en: 'Assign the string "Gold" to the variable rank using = on line 1.',
      templateCode: '§§§§§§§§§§§§§\nprint("Rank:", rank)',
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
    {
      id: 14,
      step: 14,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '[한 줄 완성] 첫째 줄에 변수 lv를 선언해 숫자 99를 저장하고 Lv: 99를 출력해보세요.',
      prompt_en: '[Complete Line] Complete line 1 by assigning 99 to variable lv to print Lv: 99.',
      hint_ko: '숫자 99를 변수 lv에 대입하는 코드 lv = 99를 첫째 줄에 작성해보세요.',
      hint_en: 'Write lv = 99 on the first line to store 99 in lv.',
      templateCode: '§§§§§§§\nprint("Lv:", lv)',
      targetCode: 'lv = 99\nprint("Lv:", lv)',
      expectedVariables: { lv: 99 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Lv: 99',
        },
      ],
    },
    {
      id: 15,
      step: 15,
      type: 'quiz',
      kind: 'predict_output',
      prompt_ko: '[출력 결과 예측] 다음 파이썬 코드를 실행했을 때 출력될 올바른 결과를 선택해보세요.',
      prompt_en: '[Predict Output] Select the exact output that will be printed when the Python code runs.',
      hint_ko: '주석(#) 줄은 무시되며, 마지막 줄에서 따옴표가 있는 "x"와 변수 x의 차이를 비교해보세요.',
      hint_en: 'The commented line is ignored; compare the quoted string "x" and the unquoted variable x.',
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
