import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 10레벨: 변수 값 변경과 변수 연산 (15단계)
// - [1~10단계] 블록 ➔ 타이핑 1:1 교차 5쌍
// - [11~12단계] 틀린 곳 수정 (fix_bug) 2문항
// - [13~14단계] 한 줄 완성 (one_line) 2문항
// - [15단계] 출력 결과 예측 선택 (predict_output) 1문항
// ============================================================================
export const PYTHON_LEVEL_10: PracticeRound = {
  id: 'py-basic-r10',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 10,
  title_ko: '10레벨: 변수 값 변경과 변수 연산',
  title_en: 'Level 10: Variable Reassignment & Operations',
  totalQuestions: 15,
  unlockedBlocks: ['print', 'variable'],
  questions: [
    // ------------------------------------------------------------------------
    // Pair 1 (1~2단계): 변수 값 덮어쓰기 (재할당)
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      kind: 'standard',
      prompt_ko: '[블록 조립] 변수 level에 1을 넣은 뒤 2로 다시 대입해 덮어쓴 값 2를 출력해보세요.',
      prompt_en: '[Block] Assign 1 to level, then overwrite it with 2 and print the updated value.',
      hint_ko: '코드는 위에서 아래로 순서대로 실행되므로 마지막에 대입된 숫자가 출력됩니다.',
      hint_en: 'Because code runs top to bottom, printing the variable outputs the most recently assigned value.',
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
      prompt_ko: '[빈칸 채우기] 둘째 줄 빈칸을 채워 변수 stage의 값을 3에서 4로 변경하고 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the blanks on line 2 to update variable stage from 3 to 4.',
      hint_ko: '기존 변수의 값을 바꾸려면 같은 변수 이름을 왼쪽에 적고 새 숫자를 오른쪽에 대입합니다.',
      hint_en: 'Write the same variable name on the left of = and assign the new number on the right.',
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
      kind: 'standard',
      prompt_ko: '[블록 조립] 두 변수 price와 count를 곱한 결과를 total에 저장하고 3600을 출력해보세요.',
      prompt_en: '[Block] Multiply price and count into total and print 3600.',
      hint_ko: '등호 오른쪽의 변수 곱셈식이 먼저 계산된 뒤 그 결과값이 왼쪽 변수에 저장됩니다.',
      hint_en: 'Python multiplies the two variables on the right of = first and stores the product in total.',
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
      prompt_ko: '[빈칸 채우기] 빈칸을 채워 width와 height를 곱한 넓이 40을 area에 저장하고 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the blank to multiply width and height into variable area and print 40.',
      hint_ko: '위에서 선언한 가로 변수와 세로 변수를 별표 곱셈 기호로 연결한 width * height를 입력하세요.',
      hint_en: 'Multiply the two variable names declared above using width * height.',
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
      kind: 'standard',
      prompt_ko: '[블록 조립] score = score + 30으로 자신의 값에 30을 더해 갱신한 80을 출력해보세요.',
      prompt_en: '[Block] Trace score = score + 30 to add 30 to the current value and print 80.',
      hint_ko: '기존 변수 값 50에 30을 더한 80이 같은 변수에 새로 덮어써집니다.',
      hint_en: 'The current value 50 plus 30 evaluates to 80, which overwrites score.',
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
      prompt_ko: '[빈칸 채우기] 빈칸을 채워 현재 체력(hp) 100에서 25를 뺀 값을 다시 hp에 저장해 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the blank to subtract 25 from hp, store it back in hp, and print 75.',
      hint_ko: '등호 오른쪽에서 현재 체력 변수로부터 25를 빼는 hp - 25를 작성해보세요.',
      hint_en: 'On the right side of =, write hp - 25 to subtract 25 from the current variable.',
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
      kind: 'standard',
      prompt_ko: '[블록 조립] 두 문자열 변수 first와 second를 +로 합쳐 word에 저장하고 출력해보세요.',
      prompt_en: '[Block] Join string variables first and second with + into word and print Python.',
      hint_ko: '두 문자열 변수의 값이 순서대로 합쳐져 하나의 단어로 출력됩니다.',
      hint_en: 'The two string variables are concatenated in order without spaces.',
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
      prompt_ko: '[빈칸 채우기] 빈칸을 채워 star 변수를 5번 반복한 문자열을 line에 저장하고 *****를 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the blank using star * 5 to store ***** in line and print it.',
      hint_ko: '문자열이 담긴 변수 star에 * 5를 곱하는 식 star * 5를 입력하세요.',
      hint_en: 'Multiply the string variable star by 5 using star * 5.',
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
      kind: 'standard',
      prompt_ko: '[블록 조립] a의 값을 b에 복사한 뒤 a만 20으로 바꾸어 20 10을 출력해보세요.',
      prompt_en: '[Block] Copy a into b, then reassign a to 20 and print both variables.',
      hint_ko: 'b = a 시점의 값 10만 복사되므로, 이후 a가 바뀌어도 b는 10으로 유지됩니다.',
      hint_en: 'b keeps the copied value 10 even after a is reassigned to 20.',
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
      prompt_ko: '[빈칸 채우기] 빈칸을 채워 x의 값 7을 y에 복사한 뒤 x만 99로 변경하여 99 7을 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the blanks to copy x into y first, then change x to 99 to print 99 7.',
      hint_ko: '먼저 y = x로 값을 복사해둔 다음, 그 아래 줄에서 x = 99로 새 숫자를 덮어써보세요.',
      hint_en: 'Copy x into y on line 2, then overwrite x with 99 on line 3.',
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
    // 11~15단계: 실전 응용 (fix_bug 2 / one_line 2 / predict_output 1)
    // ------------------------------------------------------------------------
    {
      id: 11,
      step: 11,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '[틀린 곳 수정] 체력(hp)이 20씩 두 번 깎여 60이 출력되도록 셋째 줄의 수식을 수정해보세요.',
      prompt_en: '[Fix Bug] Fix the expression on line 3 so hp decreases by 20 twice and prints 60.',
      hint_ko: '셋째 줄에서도 고정 숫자 50 대신 직전까지 계산된 변수 hp에서 20을 빼야 합니다.',
      hint_en: 'Use the hp variable instead of 50 on line 3 so the second subtraction continues from 80.',
      templateCode: 'hp = 100\nhp = hp - 20\nhp = 50 - 20\nprint(hp)',
      targetCode: 'hp = 100\nhp = hp - 20\nhp = hp - 20\nprint(hp)',
      expectedVariables: { hp: 60 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '60',
        },
      ],
    },
    {
      id: 12,
      step: 12,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '[틀린 곳 수정] 가로(w)와 세로(h)를 곱한 넓이 40이 출력되도록 셋째 줄의 연산자를 수정해보세요.',
      prompt_en: '[Fix Bug] Fix the operator on line 3 so area stores w multiplied by h (40).',
      hint_ko: '넓이를 구하려면 두 변수를 더하기(+) 대신 곱셈(*)으로 계산해야 합니다.',
      hint_en: 'Multiply w and h with * instead of adding them with +.',
      templateCode: 'w = 8\nh = 5\narea = w + h\nprint(area)',
      targetCode: 'w = 8\nh = 5\narea = w * h\nprint(area)',
      expectedVariables: { w: 8, h: 5, area: 40 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '40',
        },
      ],
    },
    {
      id: 13,
      step: 13,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '[한 줄 완성] 셋째 줄에 base와 fee를 더한 값을 변수 total에 저장해 2500을 출력해보세요.',
      prompt_en: '[Complete Line] Complete line 3 to store base + fee in variable total and print 2500.',
      hint_ko: 'total = base + fee처럼 두 변수의 합을 total에 대입해보세요.',
      hint_en: 'Write total = base + fee on line 3 to store the sum.',
      templateCode: 'base = 2000\nfee = 500\n§§§§§§§§§§§§§§§§§§\nprint(total)',
      targetCode: 'base = 2000\nfee = 500\ntotal = base + fee\nprint(total)',
      expectedVariables: { total: 2500 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '2500',
        },
      ],
    },
    {
      id: 14,
      step: 14,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '[한 줄 완성] 둘째 줄에 score 자신의 값에 20을 더해 다시 score에 저장하여 100을 출력해보세요.',
      prompt_en: '[Complete Line] Complete line 2 by adding 20 to score and storing it back in score to print 100.',
      hint_ko: 'score = score + 20처럼 현재 변수 값에 20을 더해 자기 자신에게 대입해보세요.',
      hint_en: 'Write score = score + 20 on line 2 to update score.',
      templateCode: 'score = 80\n§§§§§§§§§§§§§§§§§§\nprint(score)',
      targetCode: 'score = 80\nscore = score + 20\nprint(score)',
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
      id: 15,
      step: 15,
      type: 'quiz',
      kind: 'predict_output',
      prompt_ko: '[출력 결과 예측] 다음 파이썬 코드를 실행했을 때 출력될 올바른 결과를 선택해보세요.',
      prompt_en: '[Predict Output] Select the exact output that will be printed when the Python code runs.',
      hint_ko: '둘째 줄에서 복사된 b의 값 10은 셋째 줄에서 a가 변경되더라도 그대로 유지됩니다.',
      hint_en: 'Note the value copied on line 2, then trace which variable is reassigned on line 3.',
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
