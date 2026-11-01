import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 5레벨: 문자열 연산(+)과 반복(*) (13단계)
// - [1~10단계] 블록 ➔ 타이핑 1:1 교차 5쌍 (짝수 타이핑 스포일러 제로)
// - [11단계] 틀린 곳 수정 (fix_bug)
// - [12단계] 예제 아래 한 줄 추가 작성 (one_line)
// - [13단계] 출력 결과 예측 선택 (predict_output)
// ============================================================================
export const PYTHON_LEVEL_5: PracticeRound = {
  id: 'py-basic-r5',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 5,
  title_ko: '5레벨: 문자열 연산(+)과 반복(*)',
  title_en: 'Level 5: String Concatenation & Repetition',
  totalQuestions: 13,
  unlockedBlocks: ['print'],
  questions: [
    // ------------------------------------------------------------------------
    // 페어 1: 쉼표(,) 문자열 나란히 출력 (자동 공백 복습)
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      kind: 'standard',
      prompt_ko: '쉼표(,)를 사용해 "Hello", "World"를 넣어 공백을 두고 나란히 출력해보세요.',
      prompt_en: 'Use a comma (,) to insert "Hello", "World" and print them separated by a space.',
      hint_ko: 'print() 안에서 쉼표(,)로 두 문자열을 구분하면 사이에 공백 한 칸이 자동으로 들어가 "Hello World"가 출력됩니다.',
      hint_en: 'Separating two strings with a comma (,) automatically inserts a space, printing "Hello World".',
      targetCode: 'print("Hello", "World")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Hello World',
        },
      ],
    },
    {
      id: 2,
      step: 2,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸을 채워 두 단어 사이에 공백이 자동으로 들어간 Python Code를 출력해보세요.',
      prompt_en: 'Fill in the blank so the two words print with an automatic space as Python Code.',
      hint_ko: '두 문자열 사이에 공백 한 칸을 자동으로 넣어 나란히 출력하려면 빈칸에 쉼표(,)를 입력하세요.',
      hint_en: 'Enter a comma (,) in the blank to separate the two strings with an automatic space.',
      templateCode: 'print("Python"§ "Code")',
      targetCode: 'print("Python", "Code")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Python Code',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 페어 2: 문자열 덧셈(+) 이어붙이기 (쉼표와의 공백 차이 대조)
    // ------------------------------------------------------------------------
    {
      id: 3,
      step: 3,
      type: 'block',
      kind: 'standard',
      prompt_ko: '덧셈 기호(+)를 사용해 "Hello"+"World"를 넣어 공백 없이 이어붙여 출력해보세요.',
      prompt_en: 'Use the plus (+) operator to insert "Hello"+"World" and join them without spaces.',
      hint_ko: '쉼표(,)와 달리 문자열끼리 + 기호를 사용하면 공백 없이 하나로 이어붙어 "HelloWorld"가 출력됩니다.',
      hint_en: 'Unlike a comma, using + between strings concatenates them without spaces as "HelloWorld".',
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
      id: 4,
      step: 4,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸을 채워 두 단어가 공백 없이 하나로 이어진 PythonCode를 출력해보세요.',
      prompt_en: 'Fill in the blank to join the two words without spaces into PythonCode.',
      hint_ko: '쉼표와 달리 두 문자열을 빈칸 없이 하나로 합치려면 사이의 빈칸에 덧셈 기호(+)를 입력하세요.',
      hint_en: 'Type the plus (+) operator into the blank between the two strings to join them without spaces.',
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
    // 페어 3: 문자열 곱셈(*) 구분선 반복
    // ------------------------------------------------------------------------
    {
      id: 5,
      step: 5,
      type: 'block',
      kind: 'standard',
      prompt_ko: '곱셈 기호(*)를 사용해 "="*20을 넣어 20칸 구분선을 출력해보세요.',
      prompt_en: 'Use the multiplication (*) operator to insert "="*20 and print a 20-character divider.',
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
      prompt_ko: '빈칸을 채워 하이픈 문자가 15번 연속 이어진 구분선을 완성해보세요.',
      prompt_en: 'Fill in the blank to print a 15-character dash divider line.',
      hint_ko: '하이픈 기호가 15번 연속으로 반복되도록 빈칸에 숫자 15를 입력하세요.',
      hint_en: 'Enter the number 15 into the blank to repeat the dash 15 times.',
      templateCode: 'print("-"*§§)',
      targetCode: 'print("-"*15)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '---------------',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 페어 4: 단어/글자 반복
    // ------------------------------------------------------------------------
    {
      id: 7,
      step: 7,
      type: 'block',
      kind: 'standard',
      prompt_ko: '곱셈 기호(*)를 사용해 "Hi"*3을 넣어 인사말을 3번 연속 출력해보세요.',
      prompt_en: 'Use the asterisk (*) operator to insert "Hi"*3 and print the greeting 3 times.',
      hint_ko: '단어 문자열도 곱하기(*) 연산자로 원하는 횟수만큼 반복할 수 있습니다. "Hi"*3을 입력하세요.',
      hint_en: 'Word strings can also be repeated with the asterisk (*) operator. Enter "Hi"*3.',
      targetCode: 'print("Hi"*3)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'HiHiHi',
        },
      ],
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸을 채워 글자가 세 번 연속 반복된 HaHaHa를 출력해보세요.',
      prompt_en: 'Fill in the blank to repeat the text three times as HaHaHa.',
      hint_ko: '문자열을 지정한 횟수만큼 반복하려면 "Ha"와 3 사이의 빈칸에 곱셈 기호(*)를 입력하세요.',
      hint_en: 'Enter the asterisk (*) operator into the blank between "Ha" and 3.',
      templateCode: 'print("Ha"§3)',
      targetCode: 'print("Ha"*3)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'HaHaHa',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 페어 5: 문자열 반복 vs 숫자 곱셈 대조
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'block',
      kind: 'standard',
      prompt_ko: '쉼표(,)를 사용해 "3"*3, 3*3을 넣어 글자 반복과 숫자 계산을 나란히 비교해보세요.',
      prompt_en: 'Use a comma (,) to insert "3"*3, 3*3 and compare string repetition with numeric multiplication.',
      hint_ko: '따옴표가 있는 "3"*3은 글자 반복(333), 따옴표가 없는 3*3은 숫자 곱셈(9)입니다. "3"*3, 3*3을 입력하세요.',
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
      prompt_ko: '두 빈칸을 채워 글자 반복과 숫자 계산 결과(777 21)를 나란히 출력해보세요.',
      prompt_en: 'Fill in both blanks to output text repetition (777) and numeric multiplication (21) side by side.',
      hint_ko: '문자열 반복과 숫자 곱셈 모두 별표(*) 연산자를 사용합니다. 두 빈칸 모두에 *를 입력하세요.',
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

    // ------------------------------------------------------------------------
    // 11~13단계: 실전 응용 3유형 (틀린 곳 수정 / 한 줄 추가 / 출력 결과 선택)
    // ------------------------------------------------------------------------
    {
      id: 11,
      step: 11,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '틀린 곳을 수정하여 공백 없이 이어진 Lv.5가 오류 없이 출력되도록 해보세요.',
      prompt_en: 'Fix the error so that Lv.5 prints without spaces or a type error.',
      hint_ko: '파이썬에서는 문자열("Lv.")과 숫자(5)를 + 기호로 바로 더할 수 없습니다. 숫자 5를 따옴표로 감싸 "5"로 바꿔보세요.',
      hint_en: 'In Python, you cannot concatenate a string ("Lv.") and an integer (5) with +. Enclose 5 in quotes as "5".',
      templateCode: 'print("Lv."+5)',
      targetCode: 'print("Lv."+"5")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Lv.5',
        },
      ],
    },
    {
      id: 12,
      step: 12,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '예제 코드 아래에 한 줄을 추가하여 별 기호 글자가 10번 연속 반복된 **********를 출력해보세요.',
      prompt_en: 'Type the example code and add a line below using string repetition to print 10 asterisks (**********).',
      hint_ko: '첫째 줄 예제를 입력하고 Enter를 누른 뒤, 둘째 줄에 print("*"*10)을 입력하세요.',
      hint_en: 'Type the first line example, press Enter, and write print("*"*10) on the second line.',
      templateCode: 'print("="*10)\n§§§§§§§§§§§§§',
      targetCode: 'print("="*10)\nprint("*"*10)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '==========\n**********',
        },
      ],
    },
    {
      id: 13,
      step: 13,
      type: 'quiz',
      kind: 'predict_output',
      prompt_ko: '다음 파이썬 코드를 실행했을 때 화면에 출력될 올바른 결과를 선택해보세요.',
      prompt_en: 'Select the exact output that will be printed when the following Python code runs.',
      hint_ko: '따옴표로 감싼 "2"와 "3"은 숫자가 아닌 문자열이므로 +는 이어붙이기, *3은 글자 3회 반복으로 동작합니다.',
      hint_en: 'Quoted "2" and "3" are strings: + concatenates them, and "2"*3 repeats the character three times.',
      targetCode: 'print("2"+"3")\nprint("2"*3, 2*3)',
      choices: ['5\n6 6', '23\n222 6', '23\n6 6', '5\n222 6'],
      correctChoiceIndex: 1,
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '23\n222 6',
        },
      ],
    },
  ],
};
