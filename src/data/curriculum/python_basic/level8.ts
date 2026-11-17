import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 8레벨: 기초 출력과 연산 종합 문제풀이 (10단계 - 전 문항 실전 문제풀이)
// - 블록 모드 없이 Section 1 (1~7레벨) 핵심 문법을 4대 문제 유형으로 총점검
// - [1~3단계] 빈칸 채우기 (fill_blank)
// - [4~6단계] 틀린 곳 수정 (fix_bug)
// - [7~8단계] 한 줄 완성 (one_line)
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
  unlockedBlocks: [],
  questions: [
    // ------------------------------------------------------------------------
    // 1~3단계: 빈칸 채우기 (fill_blank)
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '[빈칸 채우기] 빈칸을 채워 15와 5를 먼저 더한 뒤 4로 나눈 실수 결과 5.0을 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the blanks to add 15 and 5 first, then divide by 4 to print 5.0.',
      hint_ko: '덧셈을 먼저 묶는 소괄호 ( )와 실수 나눗셈 연산자 /를 채워보세요.',
      hint_en: 'Group the addition with parentheses and apply the / division operator.',
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
      prompt_ko: '[빈칸 채우기] 두 빈칸에 몫과 나머지 연산자를 채워 min: 2 sec: 10을 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the blanks to convert 130 seconds into min: 2 sec: 10.',
      hint_ko: '첫째 빈칸에는 몫 연산자(//)를, 둘째 빈칸에는 나머지 연산자(%)를 입력하세요.',
      hint_en: 'Minutes come from the integer quotient (//) by 60, and seconds come from the remainder (%).',
      templateCode: 'print("min:", 130§§60, "sec:", 130§60)',
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
      prompt_ko: '[빈칸 채우기] 두 빈칸을 채워 대괄호 사이에 등호 5개가 반복된 [=====]를 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the two blanks to repeat the equals sign 5 times inside brackets as [=====].',
      hint_ko: '문자열 결합 연산자(+)와 문자열 반복 연산자(*)를 순서에 맞게 채워보세요.',
      hint_en: 'Use + to concatenate the opening bracket and * to repeat "=" 5 times.',
      templateCode: 'print("["§"="§5+"]")',
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
      prompt_ko: "[틀린 곳 수정] 문장 Let's code가 문법 오류 없이 출력되도록 바깥 따옴표를 수정해보세요.",
      prompt_en: "[Fix Bug] Fix the outer quotes so that the sentence Let's code prints without a syntax error.",
      hint_ko: '문장 내부에 작은따옴표가 있으므로 바깥 양쪽 따옴표를 큰따옴표("")로 바꾸어보세요.',
      hint_en: 'Change the outer quotes to double quotes ("") so the inner apostrophe does not close the string.',
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
      prompt_ko: '[틀린 곳 수정] 라벨과 몫 계산 결과(Total: 166)가 나란히 출력되도록 구분 기호를 수정해보세요.',
      prompt_en: '[Fix Bug] Fix the separator symbol so the label and quotient print side by side (Total: 166).',
      hint_ko: 'print() 안에서 여러 값을 나열할 때는 세미콜론(;)이 아니라 쉼표(,)로 구분해야 합니다.',
      hint_en: 'Separate multiple items inside print() with a comma (,) instead of a semicolon (;).',
      templateCode: 'print("Total:"; 500//3)',
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
      prompt_ko: '[틀린 곳 수정] Menu와 Price 사이에 탭 간격이 적용되도록 이스케이프 기호를 수정해보세요.',
      prompt_en: '[Fix Bug] Fix the escape sequence so that a tab space is applied between Menu and Price.',
      hint_ko: '탭 제어 문자는 나눗셈 슬래시(/t)가 아니라 역슬래시(\\t)를 사용해야 합니다.',
      hint_en: 'Use a backslash (\\t) rather than a forward slash (/t) for the tab escape character.',
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
    // 7~8단계: 한 줄 완성 (one_line)
    // ------------------------------------------------------------------------
    {
      id: 7,
      step: 7,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '[한 줄 완성] 둘째 줄에 라벨과 2의 10제곱 결과를 연결한 Power: 1024를 출력해보세요.',
      prompt_en: '[Complete Line] Complete line 2 to print the label and 2 to the power of 10 as Power: 1024.',
      hint_ko: '첫째 줄 예제의 구조를 그대로 따르되 거듭제곱 수식을 2**10으로 바꾸어 작성해보세요.',
      hint_en: 'Follow line 1, changing the exponent expression to 2**10.',
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
      prompt_ko: '[한 줄 완성] 둘째 줄에 과목명 Math와 점수 100이 탭 간격(\\t)으로 정렬된 줄을 출력해보세요.',
      prompt_en: '[Complete Line] Complete line 2 to print Math and 100 separated by a tab space (\\t).',
      hint_ko: '첫째 줄처럼 하나의 문자열 안에 "Math\\t100"을 넣어 출력해보세요.',
      hint_en: 'Just like line 1, place "Math\\t100" inside print() on line 2.',
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
      prompt_ko: '[출력 결과 예측] 다음 파이썬 코드를 실행했을 때 출력될 올바른 결과를 선택해보세요.',
      prompt_en: '[Predict Output] Select the exact output that will be printed when the Python code runs.',
      hint_ko: '첫째 줄은 거듭제곱(2**3)이 먼저 계산되고, 둘째 줄은 문자열 반복과 숫자 곱셈이 나란히 출력됩니다.',
      hint_en: 'Check precedence between + and ** on line 1, and string repetition vs multiplication on line 2.',
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
      prompt_ko: '[출력 결과 예측] 다음 파이썬 코드를 실행했을 때 출력될 올바른 결과를 선택해보세요.',
      prompt_en: '[Predict Output] Select the exact output that will be printed when the Python code runs.',
      hint_ko: '첫째 줄의 sep=""와 end="\\t"가 적용된 뒤 둘째 줄의 문자열 반복 결과가 이어집니다.',
      hint_en: 'Trace how sep="" and end="\\t" on line 1 format the output before line 2 repeats "Pass".',
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
