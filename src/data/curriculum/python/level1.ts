import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 1레벨: print() 함수와 기본 사칙연산 (10단계)
// - [블록 ➔ 타이핑 교차 4쌍(8문제)] + [심화 타이핑 2문제] 구조
// - 페어 1: 단일 숫자 출력
//   1. [블록] print(10)
//   2. [타이핑: 빈칸] print(77)
// - 페어 2: 덧셈 연산자(+)
//   3. [블록] print(10 + 5)
//   4. [타이핑: 빈칸] print(20 + 30)
// - 페어 3: 곱셈 연산자(*)
//   5. [블록] print(4 * 5)
//   6. [타이핑: 빈칸] print(6 * 7)
// - 페어 4: 나눗셈 연산자(/)
//   7. [블록] print(20 / 4)
//   8. [타이핑: 빈칸] print(100 / 2)
// - 심화 타이핑 2문제:
//   9. [타이핑: 빈칸] 괄호 우선순위 print((2 + 3) * 4) -> 20
//   10. [타이핑: 빈칸] 복합 괄호 사칙연산 print((10 + 20) * 3) -> 90
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
      prompt_ko: '덧셈 기호(+)를 사용해 10 + 5를 넣어 화면에 출력해보세요.',
      prompt_en: 'Use the addition symbol (+) to insert 10 + 5 and print it on the screen.',
      hint_ko: 'print() 블록의 입력 슬롯에 10 + 5를 입력하면 파이썬이 덧셈을 계산하여 15를 출력합니다.',
      hint_en: 'Enter 10 + 5 into the print() slot to have Python calculate and print 15.',
      targetCode: 'print(10 + 5)',
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
      prompt_ko: '빈칸을 채워 20 + 30의 결과를 화면에 출력해보세요.',
      prompt_en: 'Fill in the blank to print the result of 20 + 30 on the screen.',
      hint_ko: '20과 30 사이의 빈칸에 덧셈 기호인 더하기(+)를 입력하세요.',
      hint_en: 'Type the plus (+) operator in the blank between 20 and 30.',
      templateCode: 'print(20 § 30)',
      targetCode: 'print(20 + 30)',
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
      prompt_ko: '곱셈 기호(*)를 사용해 4 * 5를 넣어 화면에 출력해보세요.',
      prompt_en: 'Use the multiplication symbol (*) to insert 4 * 5 and print it on the screen.',
      hint_ko: '파이썬에서 곱셈은 키보드의 별표(*) 기호를 사용합니다. 4 * 5를 넣으면 20이 출력됩니다.',
      hint_en: 'In Python, multiplication uses the asterisk (*) operator. 4 * 5 produces 20.',
      targetCode: 'print(4 * 5)',
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
      prompt_ko: '빈칸에 곱셈 기호(*)를 채워 6 * 7의 계산 결과를 화면에 출력해보세요.',
      prompt_en: 'Fill in the asterisk (*) multiplication operator to print the result of 6 * 7.',
      hint_ko: '키보드의 별표(*) 기호가 파이썬의 곱셈 연산자입니다. 빈칸에 *를 입력하세요.',
      hint_en: 'The asterisk (*) on your keyboard is the multiplication operator in Python.',
      templateCode: 'print(6 § 7)',
      targetCode: 'print(6 * 7)',
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
      prompt_ko: '나눗셈 기호(/)를 사용해 20 / 4를 넣어 화면에 출력해보세요.',
      prompt_en: 'Use the division symbol (/) to insert 20 / 4 and print it on the screen.',
      hint_ko: '파이썬에서 나눗셈은 슬래시(/) 기호를 사용합니다. 20 / 4를 넣으면 계산 결과로 실수 형태인 5.0이 출력됩니다.',
      hint_en: 'In Python, division uses the slash (/) operator. Inserting 20 / 4 calculates and outputs 5.0 as a float.',
      targetCode: 'print(20 / 4)',
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
      prompt_ko: '빈칸을 채워 나눗셈 계산 결과(50.0)를 화면에 출력해보세요.',
      prompt_en: 'Fill in the blank to print the division result (50.0) on the screen.',
      hint_ko: '100과 2 사이의 빈칸에 나눗셈 기호인 슬래시(/)를 입력하세요. 파이썬 나눗셈 결과는 실수(50.0)로 출력됩니다.',
      hint_en: 'Type the division slash (/) operator in the blank. Division in Python yields a float (50.0).',
      templateCode: 'print(100 § 2)',
      targetCode: 'print(100 / 2)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '50.0',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 심화 타이핑 2문제 (9, 10단계): 연산 우선순위와 복합 사칙연산
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 괄호를 채워 2 + 3을 먼저 계산한 결과(20)를 출력해보세요.',
      prompt_en: 'Fill in the parentheses to calculate 2 + 3 first and print the result (20) on the screen.',
      hint_ko: '괄호 (와 ) 사이에 2 + 3을 감싸면 덧셈이 곱셈보다 먼저 계산되어 20이 출력됩니다.',
      hint_en: 'Enclosing 2 + 3 in parentheses forces addition before multiplication, yielding 20.',
      templateCode: 'print(§2 + 3§ * 4)',
      targetCode: 'print((2 + 3) * 4)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '20',
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 곱셈 연산자(*)를 채워 괄호 연산과 곱셈이 결합된 식의 결과(90)를 출력해보세요.',
      prompt_en: 'Fill in the multiplication operator (*) to print the combined result (90).',
      hint_ko: '괄호 안의 10 + 20(= 30)에 곱해줄 곱셈 기호(*)를 빈칸에 입력하세요.',
      hint_en: 'Type the asterisk (*) operator to multiply the parenthesized sum (10 + 20 = 30) by 3.',
      templateCode: 'print((10 + 20) § 3)',
      targetCode: 'print((10 + 20) * 3)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '90',
        },
      ],
    },
  ],
};
