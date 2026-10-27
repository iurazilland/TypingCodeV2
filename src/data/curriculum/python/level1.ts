import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 1레벨: print() 함수와 기본 사칙연산 (10단계)
// - 1~5단계: 코드블록 모드 (Block Mode) - 블록으로 개념 체득
//   1. 숫자 출력
//   2. 덧셈식과 결과 출력
//   3. 곱셈식과 결과 출력
//   4. 나눗셈과 덧셈 (곱셈/나눗셈 우선 계산)
//   5. 괄호 계산식 (괄호 우선 계산)
// - 6~10단계: 타이핑 모드 (Typing Mode) - 1~5번 유형의 문제 형식 반복
//   6. [유형1] 빈칸 채우기 (단일 숫자 출력)
//   7. [유형2] 빈칸 채우기 (덧셈식 계산)
//   8. [유형3] 오타 수정 (수학 기호 x -> 곱셈 기호 *)
//   9. [유형4] 빈칸 채우기 (나눗셈/곱셈 우선순위)
//   10. [유형5] 빈칸 채우기 (괄호 우선순위)
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
    // [블록 모드] 1~5단계: 블록 조립으로 개념 잡기
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
      type: 'block',
      kind: 'standard',
      prompt_ko: '10 + 5 덧셈식을 넣어 화면에 출력해보세요.',
      prompt_en: 'Insert the addition expression 10 + 5 and print it on the screen.',
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
      id: 3,
      step: 3,
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
      id: 4,
      step: 4,
      type: 'block',
      kind: 'standard',
      prompt_ko: '10 + 20 / 4를 넣어 화면에 출력해보세요.',
      prompt_en: 'Insert 10 + 20 / 4 and print it on the screen.',
      hint_ko: '수학의 사칙연산 규칙과 동일하게 20 / 4(5.0)가 먼저 계산된 후 10이 더해져 15.0이 출력됩니다.',
      hint_en: 'Just like math order of operations, 20 / 4 (5.0) runs first, then 10 is added, producing 15.0.',
      targetCode: 'print(10 + 20 / 4)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '15.0',
        },
      ],
    },
    {
      id: 5,
      step: 5,
      type: 'block',
      kind: 'standard',
      prompt_ko: '(10 + 20) * 3을 넣어 화면에 출력해보세요.',
      prompt_en: 'Insert (10 + 20) * 3 and print it on the screen.',
      hint_ko: '괄호 ()로 묶은 10 + 20(= 30)이 가장 먼저 계산되고, 그 결과에 3을 곱해 90이 출력됩니다.',
      hint_en: 'Parentheses () take the highest priority: 10 + 20 (= 30) evaluates first, then multiplied by 3 to produce 90.',
      targetCode: 'print((10 + 20) * 3)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '90',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // [타이핑 모드] 6~10단계: 1~5번 유형의 문제형 반복
    // - 빈칸은 § 기호로 지정 (예: §§은 2글자 빈칸 박스)
    // ------------------------------------------------------------------------
    {
      id: 6,
      step: 6,
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
    {
      id: 7,
      step: 7,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸을 채워 20 + 30을 넣어 화면에 출력해보세요.',
      prompt_en: 'Fill in the blank to insert 20 + 30 and print it on the screen.',
      hint_ko: '더하기 기호(+) 뒤에 더할 숫자 30을 입력하세요.',
      hint_en: 'Type the number 30 after the plus (+) operator.',
      templateCode: 'print(20 + §§)',
      targetCode: 'print(20 + 30)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '50',
        },
      ],
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '틀린 곳을 수정하여 올바른 결과를 출력해보세요.',
      prompt_en: 'Fix the error to print the correct result.',
      hint_ko: '키보드의 별표(*) 기호가 파이썬의 곱셈 연산자입니다. 알파벳 x를 *로 고쳐보세요.',
      hint_en: 'Replace the letter x with the asterisk (*) operator to perform multiplication.',
      templateCode: 'print(6 x 7)',
      targetCode: 'print(6 * 7)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '42',
        },
      ],
    },
    {
      id: 9,
      step: 9,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸을 채워 화면에 100.0을 출력해보세요.',
      prompt_en: 'Fill in the blank to insert the calculation expression 50 + 100 / 2 and print it on the screen.',
      hint_ko: '빈칸에 슬래시(/)를 입력하면 100 / 2(50.0)가 먼저 계산된 후 50이 더해집니다.',
      hint_en: 'Type the slash (/) operator: 100 / 2 evaluates to 50.0 first, then 50 is added.',
      templateCode: 'print(50 + 100 § 2)',
      targetCode: 'print(50 + 100 / 2)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '100.0',
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸을 채워 계산식의 결과(20)를 출력해보세요.',
      prompt_en: 'Fill in the blanks to print the calculation result (20).',
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
  ],
};
