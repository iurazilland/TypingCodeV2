import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 5레벨: 문자열 연산(+)과 반복(*) (10단계)
// - 문자열 덧셈(+) : 두 문자열을 빈칸 없이 찰떡처럼 이어붙이기 (Concatenation)
// - 공백 포함 덧셈 : 문자열 안에 직접 공백("Hello ")을 넣어 띄어쓰기 제어
// - 문자열 곱셈(*) : 문자열에 숫자를 곱해 지정한 횟수만큼 반복 (Repetition)
// - 특수문자/구분선 반복 : "=" * 20, "★" * 5로 UI 구분선 만들기
// - 문자열 연산 vs 숫자 연산 대조 : "3" * 3 (333) vs 3 * 3 (9) 차이 체득
// - 1~5단계: 코드블록 모드 (Block Mode)
//   1. 문자열 덧셈 (이어붙이기) : print("Hello" + "World") -> HelloWorld
//   2. 공백 포함 문자열 덧셈 : print("Hello " + "World") -> Hello World
//   3. 구분선 문자 반복 : print("=" * 20) -> ====================
//   4. 특수문자 반복 : print("★" * 5) -> ★★★★★
//   5. 문자열 vs 숫자 연산 대조 : print("3" * 3, 3 * 3) -> 333 9
// - 6~10단계: 타이핑 모드 (Typing Mode)
//   6. [fill_blank] 문자열 이어붙이기 연산자 채우기 (+)
//   7. [fill_blank] 문자열 반복 연산자 채우기 (*)
//   8. [fix_bug] 문자열과 숫자 덧셈 오류 -> 곱셈(*) 수정
//   9. [fill_blank] 구분선 반복 횟수 채우기 (15)
//   10. [fill_blank] 문자열 반복과 숫자 곱셈 연산자 복합 채우기 (*)
// ============================================================================
export const PYTHON_LEVEL_5: PracticeRound = {
  id: 'py-basic-r5',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 5,
  title_ko: '5레벨: 문자열 연산(+)과 반복(*)',
  title_en: 'Level 5: String Concatenation & Repetition',
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
      prompt_ko: '두 문자열 "Hello"와 "World"를 덧셈(+) 기호로 이어붙여 출력해보세요.',
      prompt_en: 'Connect two strings "Hello" and "World" using the plus (+) operator and print.',
      hint_ko: '파이썬에서 문자열끼리 + 기호를 사용하면 두 글자가 빈칸 없이 찰떡처럼 이어붙어 "HelloWorld"가 됩니다.',
      hint_en: 'Using the + operator between strings concatenates them together into "HelloWorld" without spaces.',
      targetCode: 'print("Hello" + "World")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'HelloWorld',
        },
      ],
    },
    {
      id: 2,
      step: 2,
      type: 'block',
      kind: 'standard',
      prompt_ko: '첫 번째 단어 끝에 띄어쓰기를 넣어 "Hello "와 "World"를 이어붙여 출력해보세요.',
      prompt_en: 'Add a space at the end of the first word to concatenate "Hello " and "World".',
      hint_ko: '+ 연산자는 공백을 자동으로 넣어주지 않습니다. 띄어쓰기가 필요할 때는 "Hello "처럼 문자열 안에 직접 공백을 넣어주면 "Hello World"가 됩니다.',
      hint_en: 'The + operator does not insert spaces automatically. Put a space inside the string like "Hello " to produce "Hello World".',
      targetCode: 'print("Hello " + "World")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Hello World',
        },
      ],
    },
    {
      id: 3,
      step: 3,
      type: 'block',
      kind: 'standard',
      prompt_ko: '등호 문자 "="에 곱셈(*) 연산자를 사용해 20번 반복한 구분선을 출력해보세요.',
      prompt_en: 'Use the multiplication (*) operator with the "=" string to print a 20-character divider.',
      hint_ko: '문자열에 * 20을 곱하면 파이썬이 글자를 20번 연속으로 복제하여 "===================="을 만들어 줍니다.',
      hint_en: 'Multiplying a string by 20 duplicates it 20 times, creating "====================".',
      targetCode: 'print("=" * 20)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '====================',
        },
      ],
    },
    {
      id: 4,
      step: 4,
      type: 'block',
      kind: 'standard',
      prompt_ko: '별 기호 "★"에 곱셈(*) 연산자를 사용해 5번 반복하여 출력해보세요.',
      prompt_en: 'Use the asterisk (*) operator on the star symbol "★" to repeat it 5 times.',
      hint_ko: '특수문자나 기호도 곱하기(*) 연산자로 손쉽게 원하는 개수만큼 반복해 "★★★★★"을 만들 수 있습니다.',
      hint_en: 'Special symbols can also be repeated with the asterisk (*) operator to output "★★★★★".',
      targetCode: 'print("★" * 5)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '★★★★★',
        },
      ],
    },
    {
      id: 5,
      step: 5,
      type: 'block',
      kind: 'standard',
      prompt_ko: '문자열 "3"을 3번 반복한 결과와, 숫자 3을 곱한 3 * 3의 결과를 나란히 출력해보세요.',
      prompt_en: 'Print the result of repeating string "3" three times and the numeric multiplication 3 * 3 side by side.',
      hint_ko: '따옴표가 있는 "3" * 3은 글자 반복이라 333이 되고, 따옴표가 없는 3 * 3은 숫자 곱셈이라 9가 됩니다. 문자열과 숫자의 중요한 차이점입니다.',
      hint_en: 'Quoted "3" * 3 repeats the text to produce 333, while numeric 3 * 3 computes 9.',
      targetCode: 'print("3" * 3, 3 * 3)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '333 9',
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
      prompt_ko: '빈칸에 적절한 연산자를 입력하여 두 단어가 이어진 "PythonCode"를 화면에 출력해보세요.',
      prompt_en: 'Fill in the blank with the appropriate operator to print the joined text "PythonCode".',
      hint_ko: '두 문자열을 서로 이어붙일 때는 덧셈 연산자(+)를 사용합니다.',
      hint_en: 'Use the plus (+) operator to concatenate two strings.',
      templateCode: 'print("Python" § "Code")',
      targetCode: 'print("Python" + "Code")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'PythonCode',
        },
      ],
    },
    {
      id: 7,
      step: 7,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 적절한 연산자를 입력하여 글자가 3번 반복된 "하하하"를 출력해보세요.',
      prompt_en: 'Fill in the blank with the proper operator to repeat the character 3 times as "하하하".',
      hint_ko: '문자열을 지정한 횟수만큼 반복할 때는 곱셈 연산자(*)를 사용합니다.',
      hint_en: 'Use the multiplication operator (*) to repeat a string a given number of times.',
      templateCode: 'print("하" § 3)',
      targetCode: 'print("하" * 3)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '하하하',
        },
      ],
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '문자열을 3번 반복하려다 발생한 오류를 찾아 올바른 연산자로 수정해보세요.',
      prompt_en: 'Find the bug caused while attempting to repeat a string 3 times and fix it with the correct operator.',
      hint_ko: '파이썬에서는 문자열과 숫자를 더할(+) 수 없습니다. 글자를 여러 번 반복할 때는 곱셈 연산자(*)로 고쳐야 합니다.',
      hint_en: 'Python cannot add (+) a string and an integer. Replace + with the asterisk (*) to repeat the string.',
      templateCode: 'print("가나다" + 3)',
      targetCode: 'print("가나다" * 3)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '가나다가나다가나다',
        },
      ],
    },
    {
      id: 9,
      step: 9,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 반복할 횟수를 숫자로 입력하여 15칸짜리 대시 구분선(---------------)을 완성해보세요.',
      prompt_en: 'Fill in the number of repetitions to create a 15-character dash divider (---------------).',
      hint_ko: '대시("-") 기호가 15번 연속으로 나오도록 곱해줄 숫자 15를 입력하세요.',
      hint_en: 'Enter the number 15 to multiply the dash ("-") character 15 times.',
      templateCode: 'print("-" * §§)',
      targetCode: 'print("-" * 15)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '---------------',
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸에 동일한 연산자를 채워 글자 3번 반복(777)과 숫자 곱셈(21)을 동시에 출력해보세요.',
      prompt_en: 'Fill in both blanks with the same operator to output text repetition (777) and multiplication (21) at once.',
      hint_ko: '문자열과 숫자 모두에 곱셈 연산자(*)를 적용하면, 앞은 글자 반복(777), 뒤는 실제 계산(21)이 됩니다.',
      hint_en: 'Applying the asterisk (*) operator repeats the string (777) on the left and computes multiplication (21) on the right.',
      templateCode: 'print("7" § 3, 7 § 3)',
      targetCode: 'print("7" * 3, 7 * 3)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '777 21',
        },
      ],
    },
  ],
};
