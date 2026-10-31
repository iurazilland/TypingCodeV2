import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 11레벨: 복합 대입 연산자 (13단계 표준 구성)
// - [1,3,5,7,9단계] 블록 코딩 개념 도입 (변수 블록의 대입 연산자 드롭다운 활용)
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
      prompt_ko: '변수 score에 100을 저장한 뒤, 둘째 변수 블록의 연산자를 +=로 선택해 score에 20을 누적하여 더하고 120을 출력해보세요.',
      prompt_en: 'Store 100 in score, select += in the second variable block to add 20 to score, and print 120.',
      hint_ko: '둘째 블록 왼쪽에 score, 가운데 드롭다운에서 +=를 선택하고 오른쪽에 20을 넣으면 score = score + 20과 같게 동작합니다.',
      hint_en: 'Set score on the left, choose += in the dropdown, and enter 20 on the right (equivalent to score = score + 20).',
      targetCode: 'score = 100\nscore += 20\nprint(score)',
      expectedVariables: { score: 120 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '120',
        },
      ],
    },
    {
      id: 2,
      step: 2,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 두 글자 복합 대입 기호를 채워 변수 exp의 값 50에 30을 누적해 더하고 80을 출력해보세요.',
      prompt_en: 'Fill in the two-character compound operator to add 30 onto exp (50) and print 80.',
      hint_ko: '기존 변수 값에 오른쪽 값을 더해 다시 저장하는 복합 대입 연산자는 +=입니다.',
      hint_en: 'The compound operator that adds and reassigns in place is +=.',
      templateCode: 'exp = 50\nexp §§ 30\nprint(exp)',
      targetCode: 'exp = 50\nexp += 30\nprint(exp)',
      expectedVariables: { exp: 80 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '80',
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
      prompt_ko: '변수 hp에 100을 저장한 뒤, 둘째 블록의 연산자를 -=로 선택해 hp에서 35를 빼고 남은 체력 65를 출력해보세요.',
      prompt_en: 'Store 100 in hp, choose -= in the second block to subtract 35 from hp, and print 65.',
      hint_ko: '둘째 블록에 hp, -=, 35를 순서대로 지정한 뒤 마지막 블록에서 hp를 출력하세요.',
      hint_en: 'Configure the second block as hp -= 35, then print hp.',
      targetCode: 'hp = 100\nhp -= 35\nprint(hp)',
      expectedVariables: { hp: 65 },
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
      prompt_ko: '빈칸에 알맞은 복합 대입 기호를 채워 연료(fuel) 80에서 25를 차감하고 남은 55를 출력해보세요.',
      prompt_en: 'Fill in the compound operator to subtract 25 from fuel (80) and print 55.',
      hint_ko: '기존 변수 값에서 오른쪽 값을 빼서 다시 저장하는 복합 대입 연산자는 -=입니다.',
      hint_en: 'Use -= to subtract from the variable and reassign the result.',
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
      prompt_ko: '변수 coin에 15를 저장한 뒤, 둘째 블록의 연산자를 *=로 선택해 coin을 3배로 만들고 45를 출력해보세요.',
      prompt_en: 'Store 15 in coin, choose *= in the second block to triple coin, and print 45.',
      hint_ko: '둘째 블록에 coin, *=, 3을 지정하면 15에 3을 곱한 45가 다시 coin에 저장됩니다.',
      hint_en: 'Setting coin *= 3 multiplies 15 by 3 and stores 45 back in coin.',
      targetCode: 'coin = 15\ncoin *= 3\nprint(coin)',
      expectedVariables: { coin: 45 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '45',
        },
      ],
    },
    {
      id: 6,
      step: 6,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 알맞은 복합 대입 기호를 채워 공격력(power) 12에 4를 곱해 갱신하고 48을 출력해보세요.',
      prompt_en: 'Fill in the compound operator to multiply power (12) by 4 and print 48.',
      hint_ko: '기존 변수 값에 오른쪽 값을 곱해 다시 저장하는 연산자는 *=입니다.',
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
      prompt_ko: '변수 num에 20을 저장한 뒤, 둘째 블록의 연산자를 /=로 선택해 4로 나누고 실수 결과 5.0을 출력해보세요.',
      prompt_en: 'Store 20 in num, select /= in the second block to divide by 4, and print the float result 5.0.',
      hint_ko: '파이썬에서 /=로 나누면 나누어떨어져도 항상 소수점이 포함된 실수(5.0)가 저장됩니다.',
      hint_en: 'In Python, /= always produces a floating-point number (5.0), even when divisible.',
      targetCode: 'num = 20\nnum /= 4\nprint(num)',
      expectedVariables: { num: 5 },
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
      prompt_ko: '세 글자 빈칸을 채워 items(23)를 5로 나눈 정수 몫(4)만 다시 items에 저장하고 출력해보세요.',
      prompt_en: 'Fill in the three-character blank to store only the integer quotient (4) of items (23) divided by 5.',
      hint_ko: '정수 몫 연산자(//)와 대입(=)을 합친 세 글자 복합 대입 연산자는 //=입니다.',
      hint_en: 'Combine floor division (//) with = to write //=.',
      templateCode: 'items = 23\nitems §§§ 5\nprint(items)',
      targetCode: 'items = 23\nitems //= 5\nprint(items)',
      expectedVariables: { items: 4 },
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
      prompt_ko: '변수 msg에 "Go"를 저장한 뒤, 둘째 블록에서 += 연산자로 문자열 "!"를 덧붙여 Go!를 출력해보세요.',
      prompt_en: 'Store "Go" in msg, append "!" using += in the second block, and print Go!.',
      hint_ko: '문자열 변수에도 +=를 사용할 수 있습니다. msg에 +=로 "!"를 더하면 끝에 느낌표가 이어붙습니다.',
      hint_en: '+= works on strings too: msg += "!" appends an exclamation mark to the end of msg.',
      targetCode: 'msg = "Go"\nmsg += "!"\nprint(msg)',
      expectedVariables: { msg: 'Go!' },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Go!',
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 복합 대입 기호를 채워 문자열 변수 tag("Py") 뒤에 "3"을 이어붙여 Py3을 출력해보세요.',
      prompt_en: 'Fill in the compound operator to append "3" onto string variable tag ("Py") and print Py3.',
      hint_ko: '문자열 뒤에 다른 문자열을 덧붙여 갱신할 때도 += 연산자를 사용합니다.',
      hint_en: 'Use += to concatenate onto an existing string variable.',
      templateCode: 'tag = "Py"\ntag §§ "3"\nprint(tag)',
      targetCode: 'tag = "Py"\ntag += "3"\nprint(tag)',
      expectedVariables: { tag: 'Py3' },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Py3',
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
      prompt_ko: '연산자 순서 실수 때문에 gold에 40이 누적되지 않고 덮어써지는 버그를 수정하여 140이 출력되도록 해보세요.',
      prompt_en: 'Fix the operator order bug overwriting gold with +40 instead of adding 40 so that 140 is printed.',
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
      prompt_ko: '복합 대입으로 점수를 갱신하는 코드 아래에 한 줄을 추가하여 최종 score의 값 250을 출력해보세요.',
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
      prompt_ko: '다음 파이썬 코드를 실행했을 때 화면에 출력될 올바른 결과를 선택해보세요.',
      prompt_en: 'Select the exact output that will be printed when the following Python code runs.',
      hint_ko: '10에서 시작해 +5하면 15, *2하면 30, 마지막으로 //= 4는 30을 4로 나눈 정수 몫이므로 7이 됩니다.',
      hint_en: 'Starting at 10: +5 gives 15, *2 gives 30, and //= 4 takes the integer quotient of 30 // 4 = 7.',
      targetCode: 'n = 10\nn += 5\nn *= 2\nn //= 4\nprint(n)',
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
