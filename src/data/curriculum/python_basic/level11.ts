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
  title_ko: '11레벨: 복합 대입 연산자 (+=, -=, *=, /=, //=)',
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
      prompt_ko: '덧셈 복합 대입 연산자(+=)는 변수의 현재 값에 오른쪽 값을 더한 뒤 다시 자기 자신에게 저장하는 과정(score = score + 100)을 한 번에 줄여 쓴 기호입니다. 블록의 코드를 따라 입력해보세요.',
      prompt_en: 'The addition compound assignment operator (+=) is shorthand for adding a value to a variable and storing the result back in place. Trace the block code.',
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
      prompt_ko: 'point = point + 20을 줄여 쓰도록 빈칸을 채워 100을 출력해보세요.',
      prompt_en: 'Fill in the shorthand operator for point = point + 20 to print 100.',
      hint_ko: '더하기 기호 뒤에 등호를 빈틈없이 붙여 쓰면 기존 값에 새 값을 누적해 저장하는 복합 대입 연산자가 됩니다.',
      hint_en: 'Place the plus sign right before the equals sign to form the compound operator that adds and reassigns.',
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
      prompt_ko: '뺄셈 복합 대입 연산자(-=)는 왼쪽 변수의 현재 값에서 오른쪽 값만큼 차감한 결과를 다시 그 변수에 덮어씁니다. 블록의 코드를 따라 입력해보세요.',
      prompt_en: 'The subtraction compound assignment operator (-=) subtracts the right-hand value from the variable and updates it in place. Trace the block code.',
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
      prompt_ko: 'fuel = fuel - 25를 줄여 쓰도록 빈칸을 채워 55를 출력해보세요.',
      prompt_en: 'Fill in the shorthand operator for fuel = fuel - 25 to print 55.',
      hint_ko: '빼기 기호와 등호를 나란히 붙인 두 글자 복합 대입 연산자를 사용해 값을 차감해보세요.',
      hint_en: 'Combine the minus sign followed immediately by the equals sign to subtract and reassign in place.',
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
      prompt_ko: '곱셈 복합 대입 연산자(*=)는 변수의 현재 값에 오른쪽 숫자를 곱한 배수 결과를 자기 자신에게 바로 갱신합니다. 블록의 코드를 따라 입력해보세요.',
      prompt_en: 'The multiplication compound assignment operator (*=) multiplies the variable by the right-hand number and stores the product back in place. Trace the block code.',
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
      prompt_ko: 'power = power * 4를 줄여 쓰도록 빈칸을 채워 48을 출력해보세요.',
      prompt_en: 'Fill in the shorthand operator for power = power * 4 to print 48.',
      hint_ko: '별표 곱셈 기호 뒤에 등호를 바로 이어 붙인 복합 대입 연산자로 변수를 배수만큼 키워보세요.',
      hint_en: 'Join the asterisk multiplication symbol directly before the equals sign to multiply the variable in place.',
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
      prompt_ko: '나눗셈 복합 대입 연산자(/=)는 변수의 값을 오른쪽 숫자로 나눈 실수 결과를 다시 그 변수에 저장합니다. 블록의 코드를 따라 입력해보세요.',
      prompt_en: 'The division compound assignment operator (/=) divides the variable by the right-hand number and stores the floating-point result back in place. Trace the block code.',
      hint_ko: '일반 나눗셈(/)과 마찬가지로 /= 연산 후에는 소수점이 붙은 실수(5.0)로 저장됩니다.',
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
      prompt_ko: 'count = count // 5를 줄여 쓰도록 빈칸을 채워 정수 몫 4를 출력해보세요.',
      prompt_en: 'Fill in the shorthand operator for count = count // 5 to print the integer quotient 4.',
      hint_ko: '소수점을 버리고 정수 몫만 구하는 슬래시 두 개 연산자 뒤에 등호를 붙인 세 글자 기호를 사용해보세요.',
      hint_en: 'Attach an equals sign right after the double-slash floor division operator to form a three-character operator.',
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
      prompt_ko: '문자열이 저장된 변수에도 덧셈 복합 대입 연산자(+=)를 사용하면 기존 문자열의 맨 뒤에 새로운 문자열을 이어붙여 갱신할 수 있습니다. 블록의 코드를 따라 입력해보세요.',
      prompt_en: 'The += operator also works on string variables, appending new text onto the end of the existing string in place. Trace the block code.',
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
      prompt_ko: 'title = title + "3"을 줄여 쓰도록 빈칸을 채워 Python3을 출력해보세요.',
      prompt_en: 'Fill in the shorthand operator for title = title + "3" to print Python3.',
      hint_ko: '문자열 뒤에 새 글자를 이어붙여 다시 저장할 때도 숫자 누적과 마찬가지로 더하기와 등호를 합친 연산자를 씁니다.',
      hint_en: 'Appending text onto an existing string variable uses the same plus-and-equals compound operator as adding numbers.',
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
      hint_ko: '등호가 더하기 기호보다 앞에 오면 기존 값에 더하는 대신 양수 값을 새로 덮어쓰는 일반 대입문이 되어버립니다. 두 기호의 순서를 확인해보세요.',
      hint_en: 'Putting the equals sign before the plus sign overwrites the variable with a positive number instead of adding to it. Check the order of the two symbols.',
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
    // 12단계: 복합 대입 연산자 빈칸 채우기 실습
    // ------------------------------------------------------------------------
    {
      id: 12,
      step: 12,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '세 번째 줄의 빈칸을 채워 점수를 2배로 만들고 최종 score 값 40을 출력해보세요.',
      prompt_en: 'Fill in the blank on the third line to double the score and print the final value 40.',
      hint_ko: '현재 점수에 2를 곱한 결과를 다시 자기 자신에게 저장하는 곱셈 복합 대입 연산자를 빈칸에 넣어보세요.',
      hint_en: 'Fill in the blank with the compound multiplication assignment operator to multiply score by 2 in place.',
      templateCode: 'score = 10\nscore += 10\nscore §§ 2\nprint(score)',
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
      hint_ko: '초기값 10에 15를 더한 뒤, 세 번째 줄의 몫 복합 대입 연산자가 소수점 아래를 어떻게 처리하는지 계산해보세요.',
      hint_en: 'Add 15 to the initial value 10, then calculate how the floor-division compound assignment on line 3 handles the remainder.',
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
