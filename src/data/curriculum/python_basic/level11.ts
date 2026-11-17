import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 11레벨: 복합 대입 연산자 (15단계)
// - [1~10단계] 블록 ➔ 타이핑 1:1 교차 5쌍
// - [11~12단계] 틀린 곳 수정 (fix_bug) 2문항
// - [13~14단계] 한 줄 완성 (one_line) 2문항
// - [15단계] 출력 결과 예측 선택 (predict_output) 1문항
// ============================================================================
export const PYTHON_LEVEL_11: PracticeRound = {
  id: 'py-basic-r11',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 11,
  title_ko: '11레벨: 복합 대입 연산자 (+=, -=, *=, /=, //=)',
  title_en: 'Level 11: Compound Assignment Operators',
  totalQuestions: 15,
  unlockedBlocks: ['print', 'variable'],
  questions: [
    // ------------------------------------------------------------------------
    // Pair 1 (1~2단계): += 누적 더하기 대입
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      kind: 'standard',
      prompt_ko: '[블록 조립] 덧셈 복합 대입 연산자(+=)로 score에 100을 누적해 150을 출력해보세요.',
      prompt_en: '[Block] Use += to add 100 to score in place and print 150.',
      hint_ko: '더하기(+) 기호 바로 뒤에 등호(=)를 붙여 작성합니다.',
      hint_en: 'Write the plus sign (+) immediately followed by the equals sign (=).',
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
      prompt_ko: '[빈칸 채우기] point = point + 20을 줄여 쓰도록 빈칸을 채워 100을 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the shorthand operator for point = point + 20 to print 100.',
      hint_ko: '더하기 기호 뒤에 등호를 붙인 복합 대입 연산자 +=를 입력하세요.',
      hint_en: 'Enter the compound addition operator +=.',
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
      kind: 'standard',
      prompt_ko: '[블록 조립] 뺄셈 복합 대입 연산자(-=)로 health에서 35를 차감해 65를 출력해보세요.',
      prompt_en: '[Block] Use -= to subtract 35 from health in place and print 65.',
      hint_ko: 'health -= 35는 health = health - 35와 완전히 같은 동작을 수행합니다.',
      hint_en: 'health -= 35 works identically to health = health - 35.',
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
      prompt_ko: '[빈칸 채우기] fuel = fuel - 25를 줄여 쓰도록 빈칸을 채워 55를 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the shorthand operator for fuel = fuel - 25 to print 55.',
      hint_ko: '빼기 기호와 등호를 나란히 붙인 복합 대입 연산자 -=를 입력하세요.',
      hint_en: 'Combine the minus sign and equals sign as -=.',
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
      kind: 'standard',
      prompt_ko: '[블록 조립] 곱셈 복합 대입 연산자(*=)로 price를 3배로 갱신해 4500을 출력해보세요.',
      prompt_en: '[Block] Use *= to multiply price by 3 in place and print 4500.',
      hint_ko: '별표(*) 기호 바로 뒤에 등호(=)를 붙여 기존 변수 값을 배수로 키웁니다.',
      hint_en: 'Combine the asterisk (*) and equals sign (=) to multiply a variable in place.',
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
      prompt_ko: '[빈칸 채우기] power = power * 4를 줄여 쓰도록 빈칸을 채워 48을 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the shorthand operator for power = power * 4 to print 48.',
      hint_ko: '별표 곱셈 기호 뒤에 등호를 붙인 복합 대입 연산자 *=를 입력하세요.',
      hint_en: 'Enter the compound multiplication operator *=.',
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
      kind: 'standard',
      prompt_ko: '[블록 조립] 나눗셈 복합 대입 연산자(/=)로 total을 4로 나눈 실수 5.0을 출력해보세요.',
      prompt_en: '[Block] Use /= to divide total by 4 in place and print 5.0.',
      hint_ko: '일반 나눗셈(/)과 마찬가지로 /= 연산 후에는 실수(5.0)로 저장됩니다.',
      hint_en: 'Just like regular division (/), /= always updates the variable to a float (5.0).',
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
      prompt_ko: '[빈칸 채우기] count = count // 5를 줄여 쓰도록 빈칸을 채워 정수 몫 4를 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the shorthand operator for count = count // 5 to print 4.',
      hint_ko: '몫 연산자 뒤에 등호를 붙인 세 글자 기호 //=를 입력하세요.',
      hint_en: 'Attach an equals sign right after // to form //=.',
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
      kind: 'standard',
      prompt_ko: '[블록 조립] 문자열 변수 message에 +=로 "Python"을 덧붙여 HelloPython을 출력해보세요.',
      prompt_en: '[Block] Use += on string variable message to append "Python" and print HelloPython.',
      hint_ko: '문자열 변수에 +=를 쓰면 공백 없이 뒷부분에 글자가 바로 덧붙여집니다.',
      hint_en: 'Using += on a string variable concatenates the right-hand string directly to the end.',
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
      prompt_ko: '[빈칸 채우기] title = title + "3"을 줄여 쓰도록 빈칸을 채워 Python3을 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the shorthand operator for title = title + "3" to print Python3.',
      hint_ko: '문자열 뒤에 새 글자를 이어붙일 때도 복합 대입 연산자 +=를 사용합니다.',
      hint_en: 'Use += to append text onto an existing string variable.',
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
    // 11~15단계: 실전 응용 (fix_bug 2 / one_line 2 / predict_output 1)
    // ------------------------------------------------------------------------
    {
      id: 11,
      step: 11,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '[틀린 곳 수정] gold에 40이 누적되어 140이 출력되도록 둘째 줄의 기호 순서를 수정해보세요.',
      prompt_en: '[Fix Bug] Fix the operator order on line 2 so 40 is added to gold to print 140.',
      hint_ko: '등호가 앞에 오면(+40 대입) 누적되지 않으므로 += 순서로 바꾸어보세요.',
      hint_en: 'Write += instead of =+ so 40 is added to gold.',
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
    {
      id: 12,
      step: 12,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '[틀린 곳 수정] 변수 hp가 3배가 되어 45가 출력되도록 복합 대입 연산자를 수정해보세요.',
      prompt_en: '[Fix Bug] Fix the compound assignment operator so hp triples to print 45.',
      hint_ko: '값을 3배로 곱해 갱신하려면 -= 대신 곱셈 복합 대입 연산자(*=)를 사용해야 합니다.',
      hint_en: 'Replace -= with *= to multiply hp by 3 in place.',
      templateCode: 'hp = 15\nhp -= 3\nprint(hp)',
      targetCode: 'hp = 15\nhp *= 3\nprint(hp)',
      expectedVariables: { hp: 45 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '45',
        },
      ],
    },
    {
      id: 13,
      step: 13,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '[한 줄 완성] 셋째 줄에 복합 대입 연산자(*=)로 score를 2배로 만들어 40을 출력해보세요.',
      prompt_en: '[Complete Line] Complete line 3 using *= to double score so 40 is printed.',
      hint_ko: 'score *= 2를 작성해 현재 값을 2배로 갱신해보세요.',
      hint_en: 'Write score *= 2 on line 3 to multiply score by 2 in place.',
      templateCode: 'score = 10\nscore += 10\n§§§§§§§§§§\nprint(score)',
      targetCode: 'score = 10\nscore += 10\nscore *= 2\nprint(score)',
      expectedVariables: { score: 40 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '40',
        },
      ],
    },
    {
      id: 14,
      step: 14,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '[한 줄 완성] 둘째 줄에 복합 대입 연산자(-=)로 mp에서 30을 차감해 70을 출력해보세요.',
      prompt_en: '[Complete Line] Complete line 2 using -= to subtract 30 from mp and print 70.',
      hint_ko: 'mp -= 30처럼 뺄셈 복합 대입 연산자를 사용해 값을 차감해보세요.',
      hint_en: 'Write mp -= 30 on line 2 using the subtraction compound operator.',
      templateCode: 'mp = 100\n§§§§§§§§\nprint(mp)',
      targetCode: 'mp = 100\nmp -= 30\nprint(mp)',
      expectedVariables: { mp: 70 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '70',
        },
      ],
    },
    {
      id: 15,
      step: 15,
      type: 'quiz',
      kind: 'predict_output',
      prompt_ko: '[출력 결과 예측] 다음 파이썬 코드를 실행했을 때 출력될 결과를 선택해보세요.',
      prompt_en: '[Predict Output] Select the exact output that will be printed when the Python code runs.',
      hint_ko: '10에 15를 더한 25를 4로 나눈 정수 몫(//=)이 얼마인지 계산해보세요.',
      hint_en: 'Add 15 to 10, then calculate the integer quotient when divided by 4 via //=.',
      targetCode: 'energy = 10\nenergy += 15\nenergy //= 4\nprint(energy)',
      choices: ['6', '6.25', '1', '25'],
      correctChoiceIndex: 0,
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '6',
        },
      ],
    },
  ],
};
