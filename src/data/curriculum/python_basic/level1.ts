import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 1레벨: print() 함수와 기본 사칙연산 (15단계)
// - [1~10단계] 블록 ➔ 타이핑 1:1 교차 5쌍
// - [11~12단계] 틀린 곳 수정 (fix_bug) 2문항
// - [13~14단계] 한 줄 완성 (one_line) 2문항
// - [15단계] 출력 결과 예측 선택 (predict_output) 1문항
// ============================================================================
export const PYTHON_LEVEL_1: PracticeRound = {
  id: 'py-basic-r1',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 1,
  title_ko: '1레벨: print() 함수와 사칙연산의 기초',
  title_en: 'Level 1: print() & Basic Arithmetic',
  totalQuestions: 15,
  unlockedBlocks: ['print'],
  questions: [
    // ------------------------------------------------------------------------
    // 페어 1: 단일 숫자 출력
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      kind: 'standard',
      prompt_ko: '[블록 조립] print() 블록으로 숫자 10을 화면에 출력해보세요.',
      prompt_en: '[Block] Use the print() block to display the number 10 on the screen.',
      hint_ko: '숫자를 출력할 때는 따옴표 없이 숫자만 그대로 입력합니다.',
      hint_en: 'Numbers are entered directly inside print() without quotes.',
      targetCode: 'print(10)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '10',
        },
      ],
    },
    {
      id: 2,
      step: 2,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '[빈칸 채우기] 빈칸을 채워 숫자 77을 화면에 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the blank to print the number 77 on the screen.',
      hint_ko: 'print() 함수의 괄호 안에 출력하고 싶은 두 자리 숫자 77을 입력하세요.',
      hint_en: 'Type the two-digit number 77 inside the print() function parentheses.',
      templateCode: 'print(§§)',
      targetCode: 'print(77)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '77',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 페어 2: 덧셈(+)과 뺄셈(-) 연산자
    // ------------------------------------------------------------------------
    {
      id: 3,
      step: 3,
      type: 'block',
      kind: 'standard',
      prompt_ko: '[블록 조립] print() 안에 덧셈 수식 10+5를 조립해 계산 결과 15를 출력해보세요.',
      prompt_en: '[Block] Assemble the addition expression 10+5 inside print() to output 15.',
      hint_ko: '10+5처럼 수식을 입력하면 계산 결과 15가 화면에 출력됩니다.',
      hint_en: 'Python evaluates 10+5 first and prints the sum 15.',
      targetCode: 'print(10+5)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '15',
        },
      ],
    },
    {
      id: 4,
      step: 4,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '[빈칸 채우기] 빈칸에 뺄셈 연산자를 사용해 계산 결과 10을 출력해보세요.',
      prompt_en: '[Fill Blank] Use the subtraction operator in the blank to print the result 10.',
      hint_ko: '30과 20 사이의 빈칸에 뺄셈 기호인 빼기(-)를 입력하세요.',
      hint_en: 'Type the subtraction operator minus (-) in the blank between 30 and 20.',
      templateCode: 'print(30§20)',
      targetCode: 'print(30-20)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '10',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 페어 3: 곱셈 연산자(*)
    // ------------------------------------------------------------------------
    {
      id: 5,
      step: 5,
      type: 'block',
      kind: 'standard',
      prompt_ko: '[블록 조립] 별표(*) 곱셈 기호를 사용한 수식 4*5를 조립해 20을 출력해보세요.',
      prompt_en: '[Block] Trace the multiplication expression 4*5 with * to print 20.',
      hint_ko: '키보드의 Shift + 8을 눌러 별표(*) 연산자를 입력할 수 있습니다.',
      hint_en: 'Press Shift + 8 on your keyboard to type the asterisk (*) operator.',
      targetCode: 'print(4*5)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '20',
        },
      ],
    },
    {
      id: 6,
      step: 6,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '[빈칸 채우기] 빈칸에 곱셈 연산자를 사용해 계산 결과 42를 출력해보세요.',
      prompt_en: '[Fill Blank] Use the multiplication operator in the blank to print the result 42.',
      hint_ko: '6과 7 사이의 빈칸에 곱셈 기호인 별표(*)를 입력하세요.',
      hint_en: 'Type the multiplication asterisk (*) operator in the blank between 6 and 7.',
      templateCode: 'print(6§7)',
      targetCode: 'print(6*7)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '42',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 페어 4: 나눗셈 연산자(/)
    // ------------------------------------------------------------------------
    {
      id: 7,
      step: 7,
      type: 'block',
      kind: 'standard',
      prompt_ko: '[블록 조립] 슬래시(/) 나눗셈 수식 20/4를 조립해 실수 결과 5.0을 출력해보세요.',
      prompt_en: '[Block] Trace the division expression 20/4 using / to print the float 5.0.',
      hint_ko: '20/4의 계산 결과는 정수 5가 아니라 실수 형태인 5.0으로 출력됩니다.',
      hint_en: 'Even when evenly divisible, 20/4 outputs 5.0 as a floating-point number.',
      targetCode: 'print(20/4)',
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
      prompt_ko: '[빈칸 채우기] 빈칸에 나눗셈 연산자를 사용해 계산 결과 50.0을 출력해보세요.',
      prompt_en: '[Fill Blank] Use the division operator in the blank to print the result 50.0.',
      hint_ko: '100과 2 사이의 빈칸에 나눗셈 기호인 슬래시(/)를 입력하세요.',
      hint_en: 'Type the division slash (/) operator in the blank between 100 and 2.',
      templateCode: 'print(100§2)',
      targetCode: 'print(100/2)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '50.0',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 페어 5: 괄호 우선순위 연산
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'block',
      kind: 'standard',
      prompt_ko: '[블록 조립] 소괄호로 덧셈을 먼저 묶은 수식 (10+20)*3을 조립해 90을 출력해보세요.',
      prompt_en: '[Block] Trace the expression (10+20)*3 so addition runs before multiplication.',
      hint_ko: '괄호 안의 덧셈이 먼저 계산된 뒤 바깥의 곱셈이 수행되어 90이 출력됩니다.',
      hint_en: 'The addition inside the parentheses evaluates first, and its sum is multiplied by 3.',
      targetCode: 'print((10+20)*3)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '90',
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '[빈칸 채우기] 빈칸에 괄호를 채워 2+3을 먼저 계산한 뒤 4를 곱한 결과 20을 출력해보세요.',
      prompt_en: '[Fill Blank] Add parentheses around 2+3 in the blanks to print the result 20.',
      hint_ko: '2+3 앞뒤의 빈칸에 각각 여는 괄호 ( 와 닫는 괄호 ) 를 입력하세요.',
      hint_en: 'Type the opening parenthesis ( and closing parenthesis ) into the blanks around 2+3.',
      templateCode: 'print(§2+3§*4)',
      targetCode: 'print((2+3)*4)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '20',
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
      prompt_ko: '[틀린 곳 수정] 10과 20을 더한 결과 30이 출력되도록 잘못된 연산 기호를 수정해보세요.',
      prompt_en: '[Fix Bug] Fix the wrong operator so that the addition result 30 is printed.',
      hint_ko: '10과 20을 더해야 하므로 뺄셈 기호(-)를 덧셈 기호(+)로 고쳐보세요.',
      hint_en: 'Change the minus sign (-) to a plus sign (+) to add 10 and 20.',
      templateCode: 'print(10-20)',
      targetCode: 'print(10+20)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '30',
        },
      ],
    },
    {
      id: 12,
      step: 12,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '[틀린 곳 수정] 12와 3을 곱한 결과 36이 출력되도록 연산 기호를 수정해보세요.',
      prompt_en: '[Fix Bug] Fix the operator so that 12 multiplied by 3 prints 36.',
      hint_ko: '나눗셈 기호(/) 대신 곱셈 기호(*)를 사용해야 36이 출력됩니다.',
      hint_en: 'Replace the division slash (/) with the multiplication asterisk (*).',
      templateCode: 'print(12/3)',
      targetCode: 'print(12*3)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '36',
        },
      ],
    },
    {
      id: 13,
      step: 13,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '[한 줄 완성] 둘째 줄에 3과 7을 먼저 더한 뒤 5를 곱한 결과 50을 출력해보세요.',
      prompt_en: '[Complete Line] Complete line 2 to add 3 and 7 first, then multiply by 5 to print 50.',
      hint_ko: '첫째 줄 예제처럼 먼저 더할 두 숫자를 소괄호로 감싼 뒤 곱셈 연산자를 이어 작성해보세요.',
      hint_en: 'Follow line 1 by wrapping the two numbers to add in parentheses before multiplying.',
      templateCode: 'print((10+20)*2)\n§§§§§§§§§§§§§§',
      targetCode: 'print((10+20)*2)\nprint((3+7)*5)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '60\n50',
        },
      ],
    },
    {
      id: 14,
      step: 14,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '[한 줄 완성] 둘째 줄에 90을 3으로 나눈 실수 결과 30.0을 출력해보세요.',
      prompt_en: '[Complete Line] Complete line 2 to divide 90 by 3 and print 30.0.',
      hint_ko: '첫째 줄처럼 print() 안에 슬래시(/) 나눗셈 수식 90/3을 작성해보세요.',
      hint_en: 'Write print(90/3) on the second line using the division operator (/).',
      templateCode: 'print(40/8)\n§§§§§§§§§§§',
      targetCode: 'print(40/8)\nprint(90/3)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '5.0\n30.0',
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
      hint_ko: '첫째 줄은 곱셈(5*2)이 먼저 계산되고, 둘째 줄은 괄호 안의 덧셈(10+5)이 먼저 계산됩니다.',
      hint_en: 'On line 1, multiplication (5*2) runs before addition. On line 2, parentheses (10+5) evaluate first.',
      targetCode: 'print(10+5*2)\nprint((10+5)*2)',
      choices: ['30\n30', '20\n30', '30\n20', '20\n20'],
      correctChoiceIndex: 1,
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '20\n30',
        },
      ],
    },
  ],
};
