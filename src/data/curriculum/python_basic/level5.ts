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
      prompt_ko: 'print() 안에서 두 문자열을 쉼표(,)로 구분하면 두 단어 사이에 공백 한 칸이 자동으로 들어갑니다. 블록의 코드를 따라 입력해보세요.',
      prompt_en: 'Separating two strings with a comma (,) inside print() automatically inserts a single space between them. Trace the block code.',
      hint_ko: '각 문자열을 독립된 따옴표로 감싼 뒤 쉼표로 나열합니다.',
      hint_en: 'Enclose each word in its own pair of quotes and separate them with a comma.',
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
      prompt_ko: '문자열끼리 덧셈 기호(+)를 사용하면 쉼표와 달리 사이에 공백을 넣지 않고 두 문자열을 빈틈없이 하나로 이어붙입니다. 블록의 코드를 따라 입력해보세요.',
      prompt_en: 'Using the plus (+) operator between strings concatenates them directly into one string without any space in between. Trace the block code.',
      hint_ko: '문자열에서의 + 연산자는 숫자 계산이 아니라 글자 이어붙이기(결합)로 동작합니다.',
      hint_en: 'Between strings, + joins text together without adding spaces.',
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
      prompt_ko: '문자열에 곱셈 기호(*)로 정수를 곱하면 해당 문자열을 지정한 횟수만큼 연속해서 반복합니다. 블록의 코드를 따라 입력해 구분선을 출력해보세요.',
      prompt_en: 'Multiplying a string by an integer with the asterisk (*) operator repeats the string that many times. Trace the block code to print a divider line.',
      hint_ko: '같은 기호를 여러 번 직접 타이핑하지 않고도 * 연산자로 긴 구분선을 간편하게 만들 수 있습니다.',
      hint_en: 'String repetition with * lets you create long divider lines without typing the character repeatedly.',
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
      prompt_ko: '기호 한 글자뿐만 아니라 여러 글자로 이루어진 단어 문자열도 곱셈 기호(*)로 원하는 횟수만큼 반복해 이어붙일 수 있습니다. 블록의 코드를 따라 입력해보세요.',
      prompt_en: 'Multi-character word strings can also be repeated multiple times in a row using the asterisk (*) operator. Trace the block code.',
      hint_ko: '반복할 문자열 뒤에는 공백 없이 단어 전체가 횟수만큼 이어져 출력됩니다.',
      hint_en: 'The entire quoted word is repeated back-to-back without spaces.',
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
      prompt_ko: '같은 곱셈 기호(*)라도 따옴표로 감싼 문자열에 쓰면 글자 반복이 되고, 따옴표 없는 숫자에 쓰면 곱셈 계산이 됩니다. 블록의 코드를 따라 입력해 두 결과를 비교해보세요.',
      prompt_en: 'The same asterisk (*) operator repeats characters when applied to a quoted string, but performs multiplication when applied to unquoted numbers. Trace the block code to compare both.',
      hint_ko: '"3"*3은 글자 "3"을 세 번 이어붙이고, 3*3은 숫자 3과 3을 곱한 값을 출력합니다.',
      hint_en: '"3"*3 repeats the character "3" three times, whereas 3*3 calculates the numeric product.',
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
      hint_ko: '파이썬에서는 문자열과 숫자를 덧셈 기호로 바로 합칠 수 없습니다. 뒤의 숫자도 문자열이 되도록 따옴표로 감싸보세요.',
      hint_en: 'Strings and numbers cannot be joined directly with +; enclose the number in quotes so both are strings.',
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
      hint_ko: '첫째 줄의 문자열 반복 구조를 참고하여, 따옴표 안의 문자만 별 기호로 바꾸어 10번 반복해보세요.',
      hint_en: 'Follow the string repetition pattern on line 1, changing the quoted character to an asterisk.',
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
