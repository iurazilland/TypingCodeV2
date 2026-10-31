import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 11레벨: 복합 대입 연산자 (13단계 표준 구성)
// - [1,3,5,7,9단계] 블록 코딩 개념 도입 (미리 지정된 복합 대입 연산자 블록 활용)
// - [2,4,6,8,10단계] 빈칸 채우기 타이핑 실습 (fill_blank)
// - [11단계] 버그 수정 (fix_bug)
// - [12단계] 예제 아래 한 줄 코드 추가 작성 (one_line)
// - [13단계] 출력 결과 예측 4지선다 퀴즈 (predict_output)
// ============================================================================
export const PYTHON_LEVEL_11: PracticeRound = {
  id: 'py-basic-r11',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 11,
  title_ko: '11레벨: 복합 대입 연산자 (+=, -=, *=, /=)',
  title_en: 'Level 11: Compound Assignment Operators',
  totalQuestions: 13,
  unlockedBlocks: ['print', 'variable'],
  questions: [
    // ------------------------------------------------------------------------
    // Pair 1 (1~2단계): += 누적 더하기 대입
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      prompt_ko: 'score에 50을 저장하고, score = score + 100을 줄인 +=로 100을 더해 150을 출력해보세요.',
      prompt_en: 'Store 50 in score, then add 100 using += (shorthand for score = score + 100) to print 150.',
      hint_ko: '첫째 블록에는 score = 50을, 둘째 블록(+=)에는 왼쪽에 score, 오른쪽에 100만 넣고 score를 출력하세요.',
      hint_en: 'Enter score = 50 in the first block, score += 100 in the second block, and print score.',
      targetCode: 'score = 50\nscore += 100\nprint(score)',
      expectedVariables: { score: 150 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '150',
        },
      ],
    },
    {
      id: 2,
      step: 2,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: 'point = point + 20을 줄여 쓰도록 빈칸을 채워 100을 출력해보세요.',
      prompt_en: 'Fill in the shorthand operator for point = point + 20 to print 100.',
      hint_ko: '기존 변수 값에 오른쪽 값을 더해 다시 저장하는 축약 연산자는 +=입니다.',
      hint_en: 'The shorthand compound operator for point = point + 20 is +=.',
      templateCode: 'point = 80\npoint §§ 20\nprint(point)',
      targetCode: 'point = 80\npoint += 20\nprint(point)',
      expectedVariables: { point: 100 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '100',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 2 (3~4단계): -= 값 차감 대입
    // ------------------------------------------------------------------------
    {
      id: 3,
      step: 3,
      type: 'block',
      prompt_ko: 'health에 100을 저장하고, health = health - 35를 줄인 -=로 35를 빼 65를 출력해보세요.',
      prompt_en: 'Store 100 in health, then subtract 35 using -= (shorthand for health = health - 35) to print 65.',
      hint_ko: '첫째 블록에는 health = 100을, 둘째 블록(-=)에는 왼쪽에 health, 오른쪽에 35만 넣고 health를 출력하세요.',
      hint_en: 'Enter health = 100 in the first block, health -= 35 in the second block, and print health.',
      targetCode: 'health = 100\nhealth -= 35\nprint(health)',
      expectedVariables: { health: 65 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '65',
        },
      ],
    },
    {
      id: 4,
      step: 4,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: 'fuel = fuel - 25를 줄여 쓰도록 빈칸을 채워 55를 출력해보세요.',
      prompt_en: 'Fill in the shorthand operator for fuel = fuel - 25 to print 55.',
      hint_ko: '변수 자신의 값에서 오른쪽 값을 빼서 다시 저장하는 축약 연산자는 -=입니다.',
      hint_en: 'Use -= to shorten subtracting from a variable and reassigning it.',
      templateCode: 'fuel = 80\nfuel §§ 25\nprint(fuel)',
      targetCode: 'fuel = 80\nfuel -= 25\nprint(fuel)',
      expectedVariables: { fuel: 55 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '55',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 3 (5~6단계): *= 배수 곱셈 대입
    // ------------------------------------------------------------------------
    {
      id: 5,
      step: 5,
      type: 'block',
      prompt_ko: 'price에 1500을 저장하고, price = price * 3을 줄인 *=로 3을 곱해 4500을 출력해보세요.',
      prompt_en: 'Store 1500 in price, then multiply by 3 using *= (shorthand for price = price * 3) to print 4500.',
      hint_ko: '첫째 블록에는 price = 1500을, 둘째 블록(*=)에는 왼쪽에 price, 오른쪽에 3만 넣고 price를 출력하세요.',
      hint_en: 'Enter price = 1500 in the first block, price *= 3 in the second block, and print price.',
      targetCode: 'price = 1500\nprice *= 3\nprint(price)',
      expectedVariables: { price: 4500 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '4500',
        },
      ],
    },
    {
      id: 6,
      step: 6,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: 'power = power * 4를 줄여 쓰도록 빈칸을 채워 48을 출력해보세요.',
      prompt_en: 'Fill in the shorthand operator for power = power * 4 to print 48.',
      hint_ko: '기존 변수 값에 오른쪽 값을 곱해 다시 저장하는 축약 연산자는 *=입니다.',
      hint_en: 'Use *= to multiply the variable in place.',
      templateCode: 'power = 12\npower §§ 4\nprint(power)',
      targetCode: 'power = 12\npower *= 4\nprint(power)',
      expectedVariables: { power: 48 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '48',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 4 (7~8단계): /= (실수 나눗셈 대입)와 //= (정수 몫 대입)
    // ------------------------------------------------------------------------
    {
      id: 7,
      step: 7,
      type: 'block',
      prompt_ko: 'total에 20을 저장하고, total = total / 4를 줄인 /=로 4를 나눠 5.0을 출력해보세요.',
      prompt_en: 'Store 20 in total, then divide by 4 using /= (shorthand for total = total / 4) to print 5.0.',
      hint_ko: '첫째 블록에 total = 20을, 둘째 블록(/=)에 total과 4를 넣으세요. /=의 결과는 항상 실수(5.0)가 됩니다.',
      hint_en: 'Enter total = 20 in the first block and total /= 4 in the second block. /= always produces a float (5.0).',
      targetCode: 'total = 20\ntotal /= 4\nprint(total)',
      expectedVariables: { total: 5 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '5.0',
        },
      ],
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: 'count = count // 5를 줄여 쓰도록 빈칸을 채워 정수 몫 4를 출력해보세요.',
      prompt_en: 'Fill in the shorthand operator for count = count // 5 to print the integer quotient 4.',
      hint_ko: '정수 몫 연산자(//)와 대입(=)을 합친 세 글자 복합 대입 연산자는 //=입니다.',
      hint_en: 'Combine floor division (//) with = to write //=.',
      templateCode: 'count = 23\ncount §§§ 5\nprint(count)',
      targetCode: 'count = 23\ncount //= 5\nprint(count)',
      expectedVariables: { count: 4 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '4',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 5 (9~10단계): 문자열에 += 사용하여 뒤에 글자 덧붙이기
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'block',
      prompt_ko: 'message에 "Hello"를 저장하고 +=로 "Python"을 이어붙여 HelloPython을 출력해보세요.',
      prompt_en: 'Store "Hello" in message, append "Python" with +=, and print HelloPython.',
      hint_ko: '문자열도 message = message + "Python"을 message += "Python"으로 줄여 씁니다. 첫 블록에 "Hello", 둘째 블록(+=) 오른쪽에는 "Python"만 입력하세요.',
      hint_en: 'Set message = "Hello" in the first block, enter only "Python" on the right of += in the second block, and print message.',
      targetCode: 'message = "Hello"\nmessage += "Python"\nprint(message)',
      expectedVariables: { message: 'HelloPython' },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'HelloPython',
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: 'title = title + "3"을 줄여 쓰도록 빈칸을 채워 Python3을 출력해보세요.',
      prompt_en: 'Fill in the shorthand operator for title = title + "3" to print Python3.',
      hint_ko: '문자열 변수 뒤에 다른 문자열을 이어붙여 저장할 때도 += 연산자를 사용합니다.',
      hint_en: 'Use += to concatenate onto an existing string variable.',
      templateCode: 'title = "Python"\ntitle §§ "3"\nprint(title)',
      targetCode: 'title = "Python"\ntitle += "3"\nprint(title)',
      expectedVariables: { title: 'Python3' },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Python3',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 11단계: 버그 수정 (fix_bug) - =+ 오타(양수 덮어쓰기 버그) 교정
    // ------------------------------------------------------------------------
    {
      id: 11,
      step: 11,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '연산자 순서 실수로 gold에 40이 더해지지 않고 덮어써지는 버그를 고쳐 140을 출력해보세요.',
      prompt_en: 'Fix the operator order bug overwriting gold with +40 instead of adding 40 to print 140.',
      hint_ko: 'gold =+ 40은 양수 +40을 그냥 대입하는 코드가 됩니다. 더하기가 먼저 오는 +=로 순서를 바로잡으세요.',
      hint_en: 'gold =+ 40 simply assigns positive 40. Put the plus sign first as +=.',
      templateCode: 'gold = 100\ngold =+ 40\nprint(gold)',
      targetCode: 'gold = 100\ngold += 40\nprint(gold)',
      expectedVariables: { gold: 140 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '140',
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
      prompt_ko: '복합 대입 코드 아래에 한 줄을 추가하여 최종 score 값 250을 출력해보세요.',
      prompt_en: 'Type the compound assignment lines and add a line below to print the final score (250).',
      hint_ko: '세 줄의 점수 계산 코드를 입력한 뒤, 넷째 줄에 print(score)를 입력하세요.',
      hint_en: 'Type the three score calculation lines, then add print(score) on line 4.',
      templateCode: 'score = 100\nscore += 25\nscore *= 2\n§§§§§§§§§§§§',
      targetCode: 'score = 100\nscore += 25\nscore *= 2\nprint(score)',
      expectedVariables: { score: 250 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '250',
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
      prompt_ko: '다음 파이썬 코드를 실행했을 때 출력될 결과를 선택해보세요.',
      prompt_en: 'Select the exact output that will be printed when the following Python code runs.',
      hint_ko: '10에서 시작해 += 5로 15가 되고, *= 2로 30이 된 뒤, //= 4는 30을 4로 나눈 정수 몫이므로 7이 됩니다.',
      hint_en: 'Starting at 10: += 5 gives 15, *= 2 gives 30, and //= 4 takes the integer quotient of 30 // 4 = 7.',
      targetCode: 'energy = 10\nenergy += 5\nenergy *= 2\nenergy //= 4\nprint(energy)',
      choices: ['7', '7.5', '5', '20'],
      correctChoiceIndex: 0,
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '7',
        },
      ],
    },
  ],
};
