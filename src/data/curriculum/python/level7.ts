import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 7레벨: 기초 출력과 연산 종합 문제풀이 (10단계 - 전 문항 실전 문제풀이)
// - 블록 모드 없이 Section 1 (1~6레벨) 핵심 문법을 4대 문제 유형으로 총점검
// - [1~3단계] 빈칸 채우기 (fill_blank)
// - [4~6단계] 틀린 곳 수정 (fix_bug)
// - [7~8단계] 예제 아래 한 줄 추가 작성 (one_line)
// - [9~10단계] 출력 결과 예측 선택 (predict_output)
// ============================================================================
export const PYTHON_LEVEL_7: PracticeRound = {
  id: 'py-basic-r7',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 7,
  title_ko: '7레벨: 기초 출력과 연산 종합 문제풀이',
  title_en: 'Level 7: Section 1 Comprehensive Review',
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
      hint_ko: '15+5 앞뒤를 괄호 ()로 감싸고 4 앞에 실수 나눗셈 기호(/)를 이어서 입력하세요.',
      hint_en: 'Wrap 15+5 with parentheses ( ) and place the division slash (/) right before 4.',
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
      hint_ko: '첫째 빈칸에는 몫 연산자(//), 둘째 빈칸에는 항목을 나란히 연결하는 쉼표(,), 셋째 빈칸에는 나머지 연산자(%)를 입력하세요.',
      hint_en: 'Use floor division (//) in the first blank, a comma (,) in the second, and modulo (%) in the third.',
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
      hint_ko: '문자열을 이어붙이는 첫째·셋째 빈칸에는 +를, "="을 5번 반복하는 둘째 빈칸에는 *를 입력하세요.',
      hint_en: 'Use + in the first and third blanks to concatenate, and * in the second blank to repeat "=" 5 times.',
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
      hint_ko: "문장 안에 작은따옴표(')가 포함되어 있으므로 바깥 양쪽을 큰따옴표(\")로 감싸거나 \\'로 이스케이프해보세요.",
      hint_en: 'Enclose the string with outer double quotes (") or escape the inner apostrophe as \\\'.',
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
      hint_ko: 'print() 안에서 문자열 "Total:"과 수식 500//3을 구분하려면 사이에 쉼표(,)가 빠지지 않았는지 확인하세요.',
      hint_en: 'Separate the string "Total:" and expression 500//3 with a comma (,) inside print().',
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
      hint_ko: '탭 이스케이프 문자는 일반 슬래시(/)가 아니라 역슬래시(\\)를 사용한 \\t입니다.',
      hint_en: 'The tab escape character uses a backslash (\\t), not a forward slash (/t).',
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
      prompt_ko: '예제 코드 아래에 한 줄을 추가하여 수식 라벨과 2의 10제곱 결과를 연결한 2^10 = 1024를 출력해보세요.',
      prompt_en: 'Type the example code and add a line below to print the label and 2 to the power of 10 as 2^10 = 1024.',
      hint_ko: '첫째 줄 예제를 입력하고 Enter를 누른 뒤, 둘째 줄에 print("2^10 =", 2**10)을 입력하세요.',
      hint_en: 'Type the first line example, press Enter, and write print("2^10 =", 2**10) on the second line.',
      templateCode: 'print("2^3 =", 2**3)\n§§§§§§§§§§§§§§§§§§§§§§',
      targetCode: 'print("2^3 =", 2**3)\nprint("2^10 =", 2**10)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '2^3 = 8\n2^10 = 1024',
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
      hint_ko: '첫째 줄 예제를 입력하고 Enter를 누른 뒤, 둘째 줄에 print("Math\\t100")을 입력하세요.',
      hint_en: 'Type the first line example, press Enter, and write print("Math\\t100") on the second line.',
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
      hint_ko: '거듭제곱(2**3 = 8)은 덧셈보다 먼저 계산되며, 따옴표로 감싼 "5"*2는 문자열 반복, 5*2는 숫자 곱셈입니다.',
      hint_en: 'Exponentiation (2**3 = 8) runs before addition, while "5"*2 repeats text and 5*2 multiplies numbers.',
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
      hint_ko: '첫째 줄에서 \\t로 탭 간격을 띄운 뒤 \\n으로 줄을 바꾸어 등호 4개(====)를 이어붙여 출력하고, 둘째 줄에서 17을 5로 나눈 나머지를 출력합니다.',
      hint_en: 'Line 1 prints A and B separated by a tab, then a newline and ====. Line 2 prints 17%5 = 2.',
      targetCode: 'print("A\\tB\\n"+"="*4)\nprint("17%5 =", 17%5)',
      choices: [
        'A\tB\n====\n17%5 = 2',
        'A\nB\t====\n17%5 = 3',
        'A\\tB\\n====\n2 = 2',
        'A\tB====\n17%5 = 2',
      ],
      correctChoiceIndex: 0,
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'A\tB\n====\n17%5 = 2',
        },
      ],
    },
  ],
};
