import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 8레벨: 기초 출력과 연산 종합 문제풀이 (10단계 - 전 문항 실전 문제풀이)
// - 블록 모드 없이 Section 1 (1~7레벨) 핵심 문법을 4대 문제 유형으로 총점검
// - [1~3단계] 빈칸 채우기 (fill_blank)
// - [4~6단계] 틀린 곳 수정 (fix_bug)
// - [7~8단계] 예제 아래 한 줄 추가 작성 (one_line)
// - [9~10단계] 출력 결과 예측 선택 (predict_output)
// ============================================================================
export const PYTHON_LEVEL_8: PracticeRound = {
  id: 'py-basic-r8',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 8,
  title_ko: '8레벨: 기초 출력과 연산 종합 문제풀이',
  title_en: 'Level 8: Section 1 Comprehensive Review',
  totalQuestions: 10,
  unlockedBlocks: ['print'],
  questions: [
    // ------------------------------------------------------------------------
    // 1~3단계: 빈칸 채우기 (fill_blank)
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸을 채워 15와 5를 먼저 더한 뒤 4로 나눈 실수 결과(5.0)를 출력해보세요.',
      prompt_en: 'Fill in the blanks to add 15 and 5 first, then divide by 4 to print 5.0.',
      hint_ko: '덧셈이 나눗셈보다 먼저 계산되도록 우선순위를 묶는 기호와 소수점 결과까지 구하는 실수 나눗셈 연산자를 생각해보세요.',
      hint_en: 'Group the addition so it evaluates first and apply the division operator that yields a floating-point result.',
      templateCode: 'print(§15+5§§4)',
      targetCode: 'print((15+5)/4)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '5.0',
        },
      ],
    },
    {
      id: 2,
      step: 2,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '세 빈칸을 채워 130초를 60으로 나눈 분(몫)과 초(나머지) 결과(min: 2 sec: 10)를 한 줄에 출력해보세요.',
      prompt_en: 'Fill in the blanks to convert 130 seconds into minutes and seconds (min: 2 sec: 10) on one line.',
      hint_ko: '전체 초를 60으로 나눈 정수 몫이 분이 되고, 나누고 남은 값이 초가 됩니다. 여러 출력 항목 사이를 띄워 나열하는 구분 기호도 떠올려보세요.',
      hint_en: 'Minutes come from the integer quotient by 60, seconds come from the remainder, and multiple items in print() need a separator.',
      templateCode: 'print("min:", 130§§60§ "sec:", 130§60)',
      targetCode: 'print("min:", 130//60, "sec:", 130%60)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'min: 2 sec: 10',
        },
      ],
    },
    {
      id: 3,
      step: 3,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '세 빈칸을 채워 양쪽 대괄호 사이에 등호 5개가 반복되어 이어진 [=====]를 출력해보세요.',
      prompt_en: 'Fill in the three blanks to repeat the equals sign 5 times inside brackets as [=====].',
      hint_ko: '문자열을 지정한 횟수만큼 복제하는 연산자와, 양옆 대괄호 문자열을 공백 없이 하나로 이어붙이는 연산자를 구분해 채워보세요.',
      hint_en: 'Combine the operator that repeats a string N times with the operator that joins strings together without spaces.',
      templateCode: 'print("["§"="§5§"]")',
      targetCode: 'print("["+"="*5+"]")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '[=====]',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 4~6단계: 틀린 곳 수정 (fix_bug)
    // ------------------------------------------------------------------------
    {
      id: 4,
      step: 4,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: "틀린 곳을 수정하여 문장 Let's code가 문법 오류 없이 출력되도록 해보세요.",
      prompt_en: "Fix the error so that the sentence Let's code prints without a syntax error.",
      hint_ko: '문장 내부의 아포스트로피 때문에 문자열이 중간에서 일찍 닫혔습니다. 안쪽 기호와 충돌하지 않도록 바깥 따옴표 종류를 바꾸거나 이스케이프 처리해보세요.',
      hint_en: 'The inner apostrophe closes the string too early. Change the outer quote style or escape the inner quote.',
      templateCode: "print('Let's code')",
      targetCode: 'print("Let\'s code")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: "Let's code",
        },
      ],
    },
    {
      id: 5,
      step: 5,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '틀린 곳을 수정하여 라벨과 몫 계산 결과가 한 줄에 나란히(Total: 166) 출력되도록 해보세요.',
      prompt_en: 'Fix the error so the label and quotient print side by side (Total: 166).',
      hint_ko: '출력 함수 괄호 안에 문자열과 계산식 두 항목이 구분 기호 없이 나란히 적혀 있습니다. 여러 값을 전달할 때 사이에 넣는 기호를 확인해보세요.',
      hint_en: 'The string label and arithmetic expression are placed side by side without an argument separator between them.',
      templateCode: 'print("Total:" 500//3)',
      targetCode: 'print("Total:", 500//3)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Total: 166',
        },
      ],
    },
    {
      id: 6,
      step: 6,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '틀린 곳을 수정하여 Menu와 Price 사이에 탭 간격이 적용되도록 해보세요.',
      prompt_en: 'Fix the error so that a tab space is applied between Menu and Price.',
      hint_ko: '특수 제어 문자를 시작하는 이스케이프 기호의 빗금 방향이 반대로 적혀 있습니다. 나눗셈 기호가 아닌 반대 방향 기호를 사용해보세요.',
      hint_en: 'The slash direction for the escape sequence is reversed; escape characters do not use a forward slash.',
      templateCode: 'print("Menu/tPrice")',
      targetCode: 'print("Menu\\tPrice")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Menu\tPrice',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 7~8단계: 예제 아래 한 줄 추가 작성 (one_line)
    // ------------------------------------------------------------------------
    {
      id: 7,
      step: 7,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '예제 코드 아래에 한 줄을 추가하여 라벨과 2의 10제곱 결과를 연결한 Power: 1024를 출력해보세요.',
      prompt_en: 'Type the example code and add a line below to print the label and 2 to the power of 10 as Power: 1024.',
      hint_ko: '첫째 줄 예제의 라벨과 다중 출력 구조를 그대로 따르되, 밑이 2이고 지수가 10인 거듭제곱 연산식으로 바꾸어 둘째 줄을 작성해보세요.',
      hint_en: 'Follow the label and multi-item structure of line 1, changing the exponent expression to base 2 raised to power 10.',
      templateCode: 'print("Power:", 2**3)\n§§§§§§§§§§§§§§§§§§§§§§',
      targetCode: 'print("Power:", 2**3)\nprint("Power:", 2**10)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Power: 8\nPower: 1024',
        },
      ],
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '예제 코드 아래에 한 줄을 추가하여 과목명 Math와 점수 100이 탭 간격으로 정렬된 한 줄을 출력해보세요.',
      prompt_en: 'Type the example code and add a line below to print Math and 100 separated by a tab space.',
      hint_ko: '첫째 줄 예제처럼 하나의 문자열 안에 과목명, 탭 간격 이스케이프 문자, 점수를 순서대로 넣어 둘째 줄을 완성해보세요.',
      hint_en: 'Just like line 1, place the subject name, tab escape sequence, and score inside a single quoted string on line 2.',
      templateCode: 'print("Kor\\t90")\n§§§§§§§§§§§§§§§§§§',
      targetCode: 'print("Kor\\t90")\nprint("Math\\t100")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Kor\t90\nMath\t100',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 9~10단계: 출력 결과 예측 선택 (predict_output)
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'quiz',
      kind: 'predict_output',
      prompt_ko: '다음 파이썬 코드를 실행했을 때 화면에 출력될 올바른 결과를 선택해보세요.',
      prompt_en: 'Select the exact output that will be printed when the following Python code runs.',
      hint_ko: '첫째 줄은 덧셈과 거듭제곱의 연산 우선순위를 비교하고, 둘째 줄은 따옴표 유무에 따라 곱셈 기호가 어떻게 다르게 동작하는지 구분해보세요.',
      hint_en: 'Check operator precedence between addition and exponentiation on line 1, and compare string repetition vs numeric multiplication on line 2.',
      targetCode: 'print(10+2**3)\nprint("5"*2, 5*2)',
      choices: ['16\n10 10', '18\n55 10', '1728\n55 10', '18\n10 10'],
      correctChoiceIndex: 1,
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '18\n55 10',
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'quiz',
      kind: 'predict_output',
      prompt_ko: '다음 파이썬 코드를 실행했을 때 화면에 출력될 올바른 결과를 선택해보세요.',
      prompt_en: 'Select the exact output that will be printed when the following Python code runs.',
      hint_ko: '첫째 줄의 두 옵션이 항목 사이 공백과 줄 끝 줄바꿈을 각각 무엇으로 바꾸는지 확인한 뒤, 둘째 줄의 문자열 반복 결과가 어디에 이어질지 추적해보세요.',
      hint_en: 'Trace how the two options on line 1 affect the space between items and the line ending before line 2 repeats its string.',
      targetCode: 'print("Lv", 8, sep="", end="\\t")\nprint("Pass"*2)',
      choices: [
        'Lv8\tPassPass',
        'Lv 8\nPassPass',
        'Lv8\nPass*2',
        'Lv 8\tPass2',
      ],
      correctChoiceIndex: 0,
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Lv8\tPassPass',
        },
      ],
    },
  ],
};

