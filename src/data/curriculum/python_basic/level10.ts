import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 10레벨: 변수 값 변경과 변수 연산 (13단계 표준 구성)
// - [1,3,5,7,9단계] 블록 코딩 개념 도입 (사전 배치 슬롯 블록 활용)
// - [2,4,6,8,10단계] 빈칸 채우기 타이핑 실습 (fill_blank)
// - [11단계] 버그 수정 (fix_bug)
// - [12단계] 예제 아래 한 줄 코드 추가 작성 (one_line)
// - [13단계] 출력 결과 예측 4지선다 퀴즈 (predict_output)
// ============================================================================
export const PYTHON_LEVEL_10: PracticeRound = {
  id: 'py-basic-r10',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 10,
  title_ko: '10레벨: 변수 값 변경과 변수 연산',
  title_en: 'Level 10: Variable Reassignment & Operations',
  totalQuestions: 13,
  unlockedBlocks: ['print', 'variable'],
  questions: [
    // ------------------------------------------------------------------------
    // Pair 1 (1~2단계): 변수 값 덮어쓰기 (재할당)
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      prompt_ko: '변수 level에 1을 저장한 뒤 다음 블록에서 level에 2를 다시 저장하고, level을 출력해 바뀐 값 2를 확인해보세요.',
      prompt_en: 'Store 1 in variable level, reassign 2 to level in the next block, and print level to verify 2.',
      hint_ko: '같은 변수 이름에 새 값을 대입하면 이전 값은 사라지고 새 값으로 덮어써집니다.',
      hint_en: 'Assigning a new value to an existing variable overwrites its previous value.',
      targetCode: 'level = 1\nlevel = 2\nprint(level)',
      expectedVariables: { level: 2 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '2',
        },
      ],
    },
    {
      id: 2,
      step: 2,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '둘째 줄 빈칸을 채워 변수 stage의 값을 3에서 4로 변경하고, 최종적으로 4가 출력되도록 해보세요.',
      prompt_en: 'Fill in the blanks on line 2 to update variable stage from 3 to 4 so that 4 is printed.',
      hint_ko: '변수 이름 stage에 새 숫자 4를 다시 대입(stage = 4)하면 값이 4로 바뀝니다.',
      hint_en: 'Reassign 4 to variable stage (stage = 4) to update its value.',
      templateCode: 'stage = 3\n§§§§§ = §\nprint(stage)',
      targetCode: 'stage = 3\nstage = 4\nprint(stage)',
      expectedVariables: { stage: 4 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '4',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 2 (3~4단계): 두 숫자 변수를 이용한 사칙연산
    // ------------------------------------------------------------------------
    {
      id: 3,
      step: 3,
      type: 'block',
      prompt_ko: 'price에 1200, count에 3을 저장한 뒤, total에 price * count의 계산 결과를 저장하고 total을 출력해 3600을 확인해보세요.',
      prompt_en: 'Set price to 1200 and count to 3, store price * count in total, and print total to get 3600.',
      hint_ko: '셋째 변수 블록 왼쪽에 total, 오른쪽에 price * count를 입력하고 마지막 print 블록에 total을 넣으세요.',
      hint_en: 'Enter total on the left and price * count on the right of the third block, then print total.',
      targetCode: 'price = 1200\ncount = 3\ntotal = price * count\nprint(total)',
      expectedVariables: { price: 1200, count: 3, total: 3600 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '3600',
        },
      ],
    },
    {
      id: 4,
      step: 4,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸을 채워 가로(width)와 세로(height) 변수를 곱한 넓이 40을 변수 area에 저장하고 출력해보세요.',
      prompt_en: 'Fill in the blank to multiply width and height into variable area and print 40.',
      hint_ko: '숫자 대신 변수 이름끼리 곱셈 기호로 연결해 width * height를 입력하세요.',
      hint_en: 'Multiply the two variable names directly as width * height.',
      templateCode: 'width = 8\nheight = 5\narea = §§§§§§§§§§§§§§\nprint(area)',
      targetCode: 'width = 8\nheight = 5\narea = width * height\nprint(area)',
      expectedVariables: { area: 40 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '40',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 3 (5~6단계): 자기 자신의 현재 값을 이용해 변수 갱신하기 (x = x + n)
    // ------------------------------------------------------------------------
    {
      id: 5,
      step: 5,
      type: 'block',
      prompt_ko: '변수 score에 50을 저장한 뒤, 둘째 블록에서 score에 score + 30을 다시 저장하고 score를 출력해 80을 만들어보세요.',
      prompt_en: 'Store 50 in score, update score with score + 30 in the second block, and print score to output 80.',
      hint_ko: '대입 연산자(=)는 오른쪽 식(score + 30 = 80)을 먼저 계산한 뒤 그 결과를 왼쪽 변수 score에 저장합니다.',
      hint_en: 'Assignment (=) evaluates the right side (score + 30 = 80) first, then stores 80 back into score.',
      targetCode: 'score = 50\nscore = score + 30\nprint(score)',
      expectedVariables: { score: 80 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '80',
        },
      ],
    },
    {
      id: 6,
      step: 6,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸을 채워 현재 체력(hp) 100에서 25를 뺀 값을 다시 hp에 저장하여 75가 출력되도록 해보세요.',
      prompt_en: 'Fill in the blank to subtract 25 from current hp (100), store it back in hp, and print 75.',
      hint_ko: '오른쪽 빈칸에 현재 변수 hp에서 25를 빼는 식(hp - 25)을 입력하세요.',
      hint_en: 'Write hp - 25 in the blank so the reduced value is stored back in hp.',
      templateCode: 'hp = 100\nhp = §§§§§§§\nprint(hp)',
      targetCode: 'hp = 100\nhp = hp - 25\nprint(hp)',
      expectedVariables: { hp: 75 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '75',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 4 (7~8단계): 문자열 변수의 이어붙이기(+)와 반복(*)
    // ------------------------------------------------------------------------
    {
      id: 7,
      step: 7,
      type: 'block',
      prompt_ko: 'first에 "Py", second에 "thon"을 저장한 뒤, word에 first + second를 저장하고 word를 출력해 Python을 완성해보세요.',
      prompt_en: 'Store "Py" in first and "thon" in second, assign first + second to word, and print word to output Python.',
      hint_ko: '문자열이 담긴 변수끼리 +로 연결하면 두 문자열이 빈틈없이 하나로 이어집니다.',
      hint_en: 'Adding two string variables with + concatenates them into a single string.',
      targetCode: 'first = "Py"\nsecond = "thon"\nword = first + second\nprint(word)',
      expectedVariables: { word: 'Python' },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Python',
        },
      ],
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸을 채워 변수 star에 담긴 별표를 5번 반복한 문자열을 line에 저장하고 *****를 출력해보세요.',
      prompt_en: 'Fill in the blank to repeat variable star 5 times into variable line and print *****.',
      hint_ko: '오른쪽 빈칸에 문자열 변수 star와 5를 곱하는 식(star * 5)을 입력하세요.',
      hint_en: 'Multiply string variable star by 5 using star * 5.',
      templateCode: 'star = "*"\nline = §§§§§§§§\nprint(line)',
      targetCode: 'star = "*"\nline = star * 5\nprint(line)',
      expectedVariables: { line: '*****' },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '*****',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 5 (9~10단계): 변수 값 복사 후 원본 변수 변경 시 독립성 (b = a)
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'block',
      prompt_ko: 'a에 10을 저장하고 b에 a를 저장해 값을 복사한 뒤, a를 20으로 바꾸고 print(a, b)로 20 10이 출력되는지 확인해보세요.',
      prompt_en: 'Set a to 10, copy a into b, change a to 20, and print a, b to verify that 20 10 is printed.',
      hint_ko: 'b = a를 실행한 시점의 값(10)이 b에 복사되므로, 이후 a를 20으로 바꿔도 b는 그대로 10을 유지합니다.',
      hint_en: 'b = a copies the value 10 at that moment, so changing a to 20 afterward leaves b at 10.',
      targetCode: 'a = 10\nb = a\na = 20\nprint(a, b)',
      expectedVariables: { a: 20, b: 10 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '20 10',
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸을 채워 변수 x의 초기값 7을 y에 복사해둔 뒤, x만 99로 변경하여 99 7이 출력되도록 해보세요.',
      prompt_en: 'Fill in the blanks to copy x (7) into y first, then change x to 99 so that 99 7 is printed.',
      hint_ko: '둘째 줄 빈칸에는 복사할 변수 x를, 셋째 줄 빈칸에는 새 값 99를 입력하세요.',
      hint_en: 'Enter x on line 2 to copy its value, and 99 on line 3 to update x.',
      templateCode: 'x = 7\ny = §\nx = §§\nprint(x, y)',
      targetCode: 'x = 7\ny = x\nx = 99\nprint(x, y)',
      expectedVariables: { x: 99, y: 7 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '99 7',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 11단계: 버그 수정 (fix_bug) - 잘못된 저장 대상 변수명 수정
    // ------------------------------------------------------------------------
    {
      id: 11,
      step: 11,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '계산 결과를 total이 아닌 bonus에 잘못 저장해 발생한 오류(NameError)를 수정하고 150을 출력해보세요.',
      prompt_en: 'Fix the bug where the sum was stored back in bonus instead of total (causing a NameError) and print 150.',
      hint_ko: '셋째 줄에서 total을 출력하고 있으므로, 둘째 줄의 왼쪽 변수 이름을 bonus에서 total로 고쳐보세요.',
      hint_en: 'Since line 3 prints total, change the left-hand variable on line 2 from bonus to total.',
      templateCode: 'bonus = 50\nbonus = bonus + 100\nprint(total)',
      targetCode: 'bonus = 50\ntotal = bonus + 100\nprint(total)',
      expectedVariables: { bonus: 50, total: 150 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '150',
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
      prompt_ko: '두 변수를 선언한 코드 아래에 한 줄을 추가하여 base와 fee를 더한 합계 2500을 출력해보세요.',
      prompt_en: 'Type the two variable declarations and add a line below to print the sum of base and fee (2500).',
      hint_ko: '두 줄을 입력하고 Enter를 누른 뒤, 셋째 줄에 print(base + fee)를 입력하세요.',
      hint_en: 'Type the first two lines, press Enter, and write print(base + fee) on line 3.',
      templateCode: 'base = 2000\nfee = 500\n§§§§§§§§§§§§§§§§§',
      targetCode: 'base = 2000\nfee = 500\nprint(base + fee)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '2500',
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
      hint_ko: '둘째 줄에서 b에 10이 복사된 뒤 셋째 줄에서 a만 10 + 5 = 15로 갱신되므로 a는 15, b는 10입니다.',
      hint_en: 'b gets 10 on line 2, and only a updates to 10 + 5 = 15 on line 3, printing 15 10.',
      targetCode: 'a = 10\nb = a\na = a + 5\nprint(a, b)',
      choices: ['15 10', '15 15', '10 10', '10 15'],
      correctChoiceIndex: 0,
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '15 10',
        },
      ],
    },
  ],
};

