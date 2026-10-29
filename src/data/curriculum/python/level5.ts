import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 5레벨: 문자열 연산(+)과 반복(*) (10단계)
// - [블록 ➔ 타이핑 1:1 교차 5쌍(10문제)] 구조
// - 기호와 숫자 사이 공백 제거(Compact) 및 넓은 빈칸 입력 적용
// - 페어 1: 문자열 덧셈(+) 이어붙이기
//   1. [블록] print("Hello"+"World") -> HelloWorld
//   2. [타이핑: 빈칸] print("Python"+"Code") -> PythonCode (식 전체 빈칸)
// - 페어 2: 공백 포함 덧셈
//   3. [블록] print("Hello "+"World") -> Hello World
//   4. [타이핑: 빈칸] print("Typing "+"Code") -> Typing Code (식 전체 빈칸)
// - 페어 3: 문자열 곱셈(*) 구분선 반복
//   5. [블록] print("="*20) -> ====================
//   6. [타이핑: 빈칸] print("-" * 15) -> --------------- (반복식 전체 빈칸)
// - 페어 4: 특수문자/글자 반복
//   7. [블록] print("★"*5) -> ★★★★★
//   8. [타이핑: 빈칸] print("하"*3) -> 하하하 (반복식 전체 빈칸)
// - 페어 5: 문자열 반복 vs 숫자 곱셈 대조
//   9. [블록] print("3"*3, 3*3) -> 333 9 (블록으로 대조 개념 설명)
//   10. [타이핑: 빈칸] print("7"*3, 7*3) -> 777 21 (두 식 각각 넓은 빈칸)
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
      prompt_ko: '두 문자열 "Hello"와 "World"를 덧셈(+) 기호로 이어붙여 출력해보세요.',
      prompt_en: 'Connect two strings "Hello" and "World" using the plus (+) operator and print.',
      hint_ko: '파이썬에서 문자열끼리 + 기호를 사용하면 두 글자가 빈칸 없이 찰떡처럼 이어붙어 "HelloWorld"가 됩니다.',
      hint_en: 'Using the + operator between strings concatenates them together into "HelloWorld" without spaces.',
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
      prompt_ko: '빈칸에 문자열 덧셈식 "Python"+"Code"를 입력하여 두 단어가 이어진 "PythonCode"를 출력해보세요.',
      prompt_en: 'Fill in the string concatenation expression "Python"+"Code" to print "PythonCode".',
      hint_ko: '큰따옴표로 감싼 두 단어를 + 기호로 연결해 "Python"+"Code"를 빈칸에 입력하세요.',
      hint_en: 'Type "Python"+"Code" into the blank.',
      templateCode: 'print(§§§§§§§§§§§§§)',
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
      prompt_ko: '첫 번째 단어 끝에 띄어쓰기를 넣어 "Hello "와 "World"를 이어붙여 출력해보세요.',
      prompt_en: 'Add a space at the end of the first word to concatenate "Hello " and "World".',
      hint_ko: '+ 연산자는 공백을 자동으로 넣어주지 않습니다. 띄어쓰기가 필요할 때는 "Hello "처럼 문자열 안에 직접 공백을 넣어주면 "Hello World"가 됩니다.',
      hint_en: 'The + operator does not insert spaces automatically. Put a space inside the string like "Hello " to produce "Hello World".',
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
      prompt_ko: '공백이 포함된 문자열 덧셈식 "Typing "+"Code"를 빈칸에 입력해보세요.',
      prompt_en: 'Fill in the concatenated expression "Typing "+"Code" with preserved spacing.',
      hint_ko: '앞 단어 뒤에 띄어쓰기가 포함된 "Typing "+"Code"를 차례대로 입력하세요.',
      hint_en: 'Type "Typing "+"Code" into the blank.',
      templateCode: 'print(§§§§§§§§§§§§§)',
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
      prompt_ko: '등호 문자 "="에 곱셈(*) 연산자를 사용해 20번 반복한 구분선을 출력해보세요.',
      prompt_en: 'Use the multiplication (*) operator with the "=" string to print a 20-character divider.',
      hint_ko: '문자열에 *20을 곱하면 파이썬이 글자를 20번 연속으로 복제하여 "===================="을 만들어 줍니다.',
      hint_en: 'Multiplying a string by 20 duplicates it 20 times, creating "====================".',
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
      prompt_ko: '빈칸에 구분선 반복식 "-"*15를 입력하여 15칸짜리 대시 구분선을 출력해보세요.',
      prompt_en: 'Fill in the repetition expression "-"*15 to print a 15-character dash divider.',
      hint_ko: '대시 문자열에 곱하기 15를 연결한 "-"*15를 빈칸에 입력하세요.',
      hint_en: 'Type "-"*15 into the blank.',
      templateCode: 'print(§§§§§§)',
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
      prompt_ko: '별 기호 "★"에 곱셈(*) 연산자를 사용해 5번 반복하여 출력해보세요.',
      prompt_en: 'Use the asterisk (*) operator on the star symbol "★" to repeat it 5 times.',
      hint_ko: '특수문자나 기호도 곱하기(*) 연산자로 손쉽게 원하는 개수만큼 반복해 "★★★★★"을 만들 수 있습니다.',
      hint_en: 'Special symbols can also be repeated with the asterisk (*) operator to output "★★★★★".',
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
      prompt_ko: '빈칸에 문자열 반복식 "하"*3을 입력하여 글자가 3번 반복된 "하하하"를 출력해보세요.',
      prompt_en: 'Fill in the repetition expression "하"*3 to repeat the character 3 times.',
      hint_ko: '따옴표로 감싼 "하" 뒤에 *3을 연결해 "하"*3을 입력하세요.',
      hint_en: 'Type "하"*3 into the blank.',
      templateCode: 'print(§§§§§§)',
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
      prompt_ko: '문자열 "3"을 3번 반복한 결과와, 숫자 3을 곱한 3*3의 결과를 나란히 출력해보세요.',
      prompt_en: 'Print the result of repeating string "3" three times and the numeric multiplication 3*3 side by side.',
      hint_ko: '따옴표가 있는 "3"*3은 글자 반복이라 333이 되고, 따옴표가 없는 3*3은 숫자 곱셈이라 9가 됩니다. 문자열과 숫자의 중요한 차이점입니다.',
      hint_en: 'Quoted "3"*3 repeats the text to produce 333, while numeric 3*3 computes 9.',
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
      prompt_ko: '두 빈칸에 각각 글자 반복식("7"*3)과 숫자 곱셈식(7*3)을 입력해보세요.',
      prompt_en: 'Fill in the blanks with the string repetition ("7"*3) and numeric multiplication (7*3).',
      hint_ko: '첫 번째 빈칸에는 "7"*3, 두 번째 빈칸에는 7*3을 입력하세요.',
      hint_en: 'Enter "7"*3 in the first blank and 7*3 in the second blank.',
      templateCode: 'print(§§§§§, §§§)',
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
