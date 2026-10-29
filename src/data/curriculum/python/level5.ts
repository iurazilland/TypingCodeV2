import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 5레벨: 문자열 연산(+)과 반복(*) (10단계)
// - [블록 ➔ 타이핑 1:1 교차 5쌍(10문제)] 구조
// - 프롬프트 내 코드 정답 노출(스포일러) 배제 & 1레벨 표준 템플릿 적용
// - 페어 1: 문자열 덧셈(+) 이어붙이기
//   1. [블록] print("Hello"+"World") -> HelloWorld
//   2. [타이핑: 빈칸] print("Python"+"Code") -> PythonCode
// - 페어 2: 공백 포함 덧셈
//   3. [블록] print("Hello "+"World") -> Hello World
//   4. [타이핑: 빈칸] print("Typing "+"Code") -> Typing Code
// - 페어 3: 문자열 곱셈(*) 구분선 반복
//   5. [블록] print("="*20) -> ====================
//   6. [타이핑: 빈칸] print("-" * 15) -> ---------------
// - 페어 4: 특수문자/글자 반복
//   7. [블록] print("★"*5) -> ★★★★★
//   8. [타이핑: 빈칸] print("하"*3) -> 하하하
// - 페어 5: 문자열 반복 vs 숫자 곱셈 대조
//   9. [블록] print("3"*3, 3*3) -> 333 9
//   10. [타이핑: 빈칸] print("7"*3, 7*3) -> 777 21
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
    // 페어 1: 문자열 덧셈(+) 이어붙이기
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      kind: 'standard',
      prompt_ko: '덧셈 기호(+)를 사용해 두 문자열 Hello와 World를 빈칸 없이 이어붙여 출력해보세요.',
      prompt_en: 'Use the plus (+) operator to concatenate strings Hello and World together.',
      hint_ko: '파이썬에서 문자열끼리 + 기호를 사용하면 두 글자가 빈칸 없이 이어붙습니다. "Hello"+"World"를 입력하세요.',
      hint_en: 'Using the + operator between strings concatenates them together without spaces.',
      targetCode: 'print("Hello"+"World")',
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
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 문자열을 이어붙이는 덧셈 연산자를 채워 PythonCode를 출력해보세요.',
      prompt_en: 'Fill in the addition operator to concatenate the two strings into PythonCode.',
      hint_ko: '두 문자열 사이의 빈칸에 덧셈 기호(+)를 입력하세요.',
      hint_en: 'Type the plus (+) operator into the blank between the strings.',
      templateCode: 'print("Python"§"Code")',
      targetCode: 'print("Python"+"Code")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'PythonCode',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 페어 2: 공백 포함 문자열 덧셈
    // ------------------------------------------------------------------------
    {
      id: 3,
      step: 3,
      type: 'block',
      kind: 'standard',
      prompt_ko: '첫 번째 단어 끝에 띄어쓰기를 넣어 단어 사이에 공백이 있는 Hello World를 이어붙여 출력해보세요.',
      prompt_en: 'Add a space inside the first word to concatenate Hello World with spacing.',
      hint_ko: '+ 연산자는 공백을 자동으로 넣어주지 않으므로 "Hello "+"World"처럼 문자열 안에 직접 공백을 넣어줍니다.',
      hint_en: 'The + operator does not insert spaces. Add a space inside the string like "Hello "+"World".',
      targetCode: 'print("Hello "+"World")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Hello World',
        },
      ],
    },
    {
      id: 4,
      step: 4,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 덧셈 연산자를 채워 공백이 보존된 Typing Code를 출력해보세요.',
      prompt_en: 'Fill in the plus operator to output Typing Code with preserved spacing.',
      hint_ko: '두 단어 사이의 빈칸에 덧셈 기호(+)를 입력하세요.',
      hint_en: 'Enter the plus (+) operator into the blank between the words.',
      templateCode: 'print("Typing "§"Code")',
      targetCode: 'print("Typing "+"Code")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Typing Code',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 페어 3: 문자열 곱셈(*) 구분선 반복
    // ------------------------------------------------------------------------
    {
      id: 5,
      step: 5,
      type: 'block',
      kind: 'standard',
      prompt_ko: '곱셈 기호(*)를 사용해 등호 문자(=)를 20번 반복한 구분선을 출력해보세요.',
      prompt_en: 'Use the multiplication (*) operator to print a 20-character divider of equals signs (=).',
      hint_ko: '문자열에 *20을 곱하면 파이썬이 글자를 20번 연속으로 복제합니다. "="*20을 입력하세요.',
      hint_en: 'Multiplying a string by 20 duplicates it 20 times. Enter "="*20.',
      targetCode: 'print("="*20)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '====================',
        },
      ],
    },
    {
      id: 6,
      step: 6,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 대시 문자(-)를 15번 반복할 숫자를 입력하여 구분선을 완성해보세요.',
      prompt_en: 'Fill in the repetition count in the blank to print a 15-character dash divider.',
      hint_ko: '대시 기호가 15번 연속으로 출력되도록 빈칸에 숫자 15를 입력하세요.',
      hint_en: 'Enter the number 15 into the blank to multiply the dash 15 times.',
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

    // ------------------------------------------------------------------------
    // 페어 4: 특수문자/글자 반복
    // ------------------------------------------------------------------------
    {
      id: 7,
      step: 7,
      type: 'block',
      kind: 'standard',
      prompt_ko: '곱셈 기호(*)를 사용해 별 기호(★)를 5번 반복하여 출력해보세요.',
      prompt_en: 'Use the asterisk (*) operator to repeat the star symbol (★) 5 times.',
      hint_ko: '특수문자도 곱하기(*) 연산자로 원하는 개수만큼 반복할 수 있습니다. "★"*5를 입력하세요.',
      hint_en: 'Special symbols can also be repeated with the asterisk (*) operator. Enter "★"*5.',
      targetCode: 'print("★"*5)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '★★★★★',
        },
      ],
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 문자열을 반복하는 곱셈 연산자를 넣어 하하하를 출력해보세요.',
      prompt_en: 'Use the multiplication operator in the blank to repeat the character as 하하하.',
      hint_ko: '"하"와 3 사이의 빈칸에 곱셈 기호인 별표(*)를 입력하세요.',
      hint_en: 'Enter the asterisk (*) operator into the blank between "하" and 3.',
      templateCode: 'print("하"§3)',
      targetCode: 'print("하"*3)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '하하하',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 페어 5: 문자열 반복 vs 숫자 곱셈 대조 (9번 블록 ➔ 10번 타이핑)
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'block',
      kind: 'standard',
      prompt_ko: '글자 3을 3번 반복한 결과와 숫자 3을 곱한 결과를 나란히 출력해 차이점을 확인해보세요.',
      prompt_en: 'Print repeating string 3 three times and numeric multiplication side by side to compare.',
      hint_ko: '따옴표가 있는 "3"*3은 글자 반복(333), 따옴표가 없는 3*3은 숫자 곱셈(9)입니다. "3"*3, 3*3 을 입력하세요.',
      hint_en: 'Quoted "3"*3 repeats text (333), while unquoted 3*3 computes numbers (9). Enter "3"*3, 3*3.',
      targetCode: 'print("3"*3, 3*3)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '333 9',
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸에 각각 곱셈 연산자를 채워 글자 반복(777)과 숫자 곱셈(21)을 동시에 출력해보세요.',
      prompt_en: 'Fill in the multiplication operator into both blanks to output text repetition (777) and multiplication (21).',
      hint_ko: '두 빈칸 모두에 곱셈 연산자인 별표(*)를 입력하세요.',
      hint_en: 'Enter the asterisk (*) operator in both blanks.',
      templateCode: 'print("7"§3, 7§3)',
      targetCode: 'print("7"*3, 7*3)',
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
