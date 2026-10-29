import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 1레벨: print() 함수와 기본 사칙연산 (10단계)
// - [블록 ➔ 타이핑 1:1 교차 5쌍(10문제)] 구조
// - 기호와 숫자 사이 공백 제거(Compact) 및 넓은 빈칸 입력 적용
// - 페어 1: 단일 숫자 출력
//   1. [블록] print(10)
//   2. [타이핑: 빈칸] print(77)
// - 페어 2: 덧셈 연산자(+)
//   3. [블록] print(10+5)
//   4. [타이핑: 빈칸] print(20+30) (수식 전체 빈칸)
// - 페어 3: 곱셈 연산자(*)
//   5. [블록] print(4*5)
//   6. [타이핑: 빈칸] print(6*7) (수식 전체 빈칸)
// - 페어 4: 나눗셈 연산자(/)
//   7. [블록] print(20/4)
//   8. [타이핑: 빈칸] print(100/2) (수식 전체 빈칸)
// - 페어 5: 괄호 우선순위 연산
//   9. [블록] print((10+20)*3) (블록으로 괄호 개념 설명)
//   10. [타이핑: 빈칸] print((2+3)*4) (괄호 수식 전체 빈칸)
// ============================================================================
export const PYTHON_LEVEL_1: PracticeRound = {
  id: 'py-basic-r1',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 1,
  title_ko: '1레벨: print() 함수와 기본 사칙연산',
  title_en: 'Level 1: print() & Basic Arithmetic',
  totalQuestions: 10,
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
      prompt_ko: '숫자 10을 넣어 화면에 출력해보세요.',
      prompt_en: 'Insert the number 10 and print it on the screen.',
      hint_ko: '도구 상자의 함수 카테고리에서 print() 블록을 꺼내 시작 블록에 연결하고, 안쪽 슬롯에 10을 입력하세요.',
      hint_en: 'Snap the print() block to the start block and enter 10 inside the slot.',
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
      prompt_ko: '빈칸을 채워 숫자 77을 화면에 출력해보세요.',
      prompt_en: 'Fill in the blank to print the number 77 on the screen.',
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
    // 페어 2: 덧셈 연산자(+)
    // ------------------------------------------------------------------------
    {
      id: 3,
      step: 3,
      type: 'block',
      kind: 'standard',
      prompt_ko: '덧셈 기호(+)를 사용해 10+5를 넣어 화면에 출력해보세요.',
      prompt_en: 'Use the addition symbol (+) to insert 10+5 and print it on the screen.',
      hint_ko: 'print() 블록의 입력 슬롯에 10+5를 입력하면 파이썬이 덧셈을 계산하여 15를 출력합니다.',
      hint_en: 'Enter 10+5 into the print() slot to have Python calculate and print 15.',
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
      prompt_ko: '빈칸에 덧셈식 20+30을 입력하여 계산 결과(50)를 출력해보세요.',
      prompt_en: 'Fill in the addition expression 20+30 to print the result (50).',
      hint_ko: '빈칸에 공백 없이 덧셈식 20+30을 차례대로 입력하세요.',
      hint_en: 'Type the expression 20+30 without spaces into the blank.',
      templateCode: 'print(§§§§§)',
      targetCode: 'print(20+30)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '50',
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
      prompt_ko: '곱셈 기호(*)를 사용해 4*5를 넣어 화면에 출력해보세요.',
      prompt_en: 'Use the multiplication symbol (*) to insert 4*5 and print it on the screen.',
      hint_ko: '파이썬에서 곱셈은 키보드의 별표(*) 기호를 사용합니다. 4*5를 넣으면 20이 출력됩니다.',
      hint_en: 'In Python, multiplication uses the asterisk (*) operator. 4*5 produces 20.',
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
      prompt_ko: '빈칸에 곱셈식 6*7을 입력하여 계산 결과(42)를 출력해보세요.',
      prompt_en: 'Fill in the multiplication expression 6*7 to print the result (42).',
      hint_ko: '키보드의 별표(*)를 사용해 빈칸에 6*7을 입력하세요.',
      hint_en: 'Type 6*7 using the asterisk (*) operator into the blank.',
      templateCode: 'print(§§§)',
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
      prompt_ko: '나눗셈 기호(/)를 사용해 20/4를 넣어 화면에 출력해보세요.',
      prompt_en: 'Use the division symbol (/) to insert 20/4 and print it on the screen.',
      hint_ko: '파이썬에서 나눗셈은 슬래시(/) 기호를 사용합니다. 20/4를 넣으면 계산 결과로 실수 형태인 5.0이 출력됩니다.',
      hint_en: 'In Python, division uses the slash (/) operator. Inserting 20/4 calculates and outputs 5.0 as a float.',
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
      prompt_ko: '빈칸에 나눗셈식 100/2를 입력하여 계산 결과(50.0)를 출력해보세요.',
      prompt_en: 'Fill in the division expression 100/2 to print the result (50.0).',
      hint_ko: '슬래시(/) 기호를 사용해 빈칸에 100/2를 입력하세요.',
      hint_en: 'Type 100/2 using the slash (/) operator into the blank.',
      templateCode: 'print(§§§§§)',
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
    // 페어 5: 괄호 우선순위 연산 (9번 블록 ➔ 10번 타이핑)
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'block',
      kind: 'standard',
      prompt_ko: '우선 계산되는 괄호를 활용해 (10+20)*3을 넣어 화면에 출력해보세요.',
      prompt_en: 'Use parentheses () for prioritized calculation to insert (10+20)*3 and print it on the screen.',
      hint_ko: '괄호 ()로 묶은 10+20(=30)이 가장 먼저 계산되고, 그 결과에 3을 곱해 90이 출력됩니다.',
      hint_en: 'Parentheses () take the highest priority: 10+20 (=30) evaluates first, then multiplied by 3 to produce 90.',
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
      prompt_ko: '빈칸에 괄호 계산식 (2+3)*4를 입력하여 계산 결과(20)를 출력해보세요.',
      prompt_en: 'Fill in the parenthesized expression (2+3)*4 to print the result (20).',
      hint_ko: '2+3을 괄호로 감싸고 곱하기 4를 연결한 (2+3)*4를 빈칸에 차례대로 입력하세요.',
      hint_en: 'Type (2+3)*4 into the blank to enforce addition before multiplication.',
      templateCode: 'print(§§§§§§§§§)',
      targetCode: 'print((2+3)*4)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '20',
        },
      ],
    },
  ],
};
