import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 5레벨: 문자열 연산(+)과 반복(*) (15단계)
// - [1~10단계] 블록 ➔ 타이핑 1:1 교차 5쌍
// - [11~12단계] 틀린 곳 수정 (fix_bug) 2문항
// - [13~14단계] 한 줄 완성 (one_line) 2문항
// - [15단계] 출력 결과 예측 선택 (predict_output) 1문항
// ============================================================================
export const PYTHON_LEVEL_5: PracticeRound = {
  id: 'py-basic-r5',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 5,
  title_ko: '5레벨: 문자열 연산(+)과 반복(*)',
  title_en: 'Level 5: String Concatenation & Repetition',
  totalQuestions: 15,
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
      prompt_ko: '[블록 조립] 두 문자열 "Hello"와 "World"를 쉼표(,)로 나열해 공백을 두고 출력해보세요.',
      prompt_en: '[Block] Separate "Hello" and "World" with a comma (,) inside print() to output Hello World.',
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
      prompt_ko: '[빈칸 채우기] 빈칸을 채워 두 단어 사이에 공백이 들어간 Python Code를 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the blank so the two words print with a space as Python Code.',
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
      prompt_ko: '[블록 조립] 덧셈 기호(+)로 두 문자열을 공백 없이 이어붙여 HelloWorld를 출력해보세요.',
      prompt_en: '[Block] Use the plus (+) operator between strings to print HelloWorld without a space.',
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
      prompt_ko: '[빈칸 채우기] 빈칸을 채워 두 단어가 공백 없이 하나로 이어진 PythonCode를 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the blank to join the two words without spaces into PythonCode.',
      hint_ko: '두 문자열을 빈칸 없이 하나로 합치려면 사이의 빈칸에 덧셈 기호(+)를 입력하세요.',
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
      prompt_ko: '[블록 조립] 문자열 "="에 *20을 곱해 등호가 20번 반복된 구분선을 출력해보세요.',
      prompt_en: '[Block] Multiply "=" by 20 with * to print a 20-character divider line.',
      hint_ko: '* 연산자로 같은 기호를 반복해 긴 구분선을 간편하게 만들 수 있습니다.',
      hint_en: 'String repetition with * lets you create long divider lines easily.',
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
      prompt_ko: '[빈칸 채우기] 빈칸을 채워 하이픈 문자가 15번 연속 이어진 구분선을 완성해보세요.',
      prompt_en: '[Fill Blank] Fill in the blank to print a 15-character dash divider line.',
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
      prompt_ko: '[블록 조립] 단어 문자열 "Hi"에 *3을 곱해 HiHiHi를 출력해보세요.',
      prompt_en: '[Block] Repeat the word string "Hi" three times using * to print HiHiHi.',
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
      prompt_ko: '[빈칸 채우기] 빈칸을 채워 글자가 세 번 연속 반복된 HaHaHa를 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the blank to repeat the text three times as HaHaHa.',
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
      prompt_ko: '[블록 조립] 문자열 반복 "3"*3과 숫자 곱셈 3*3을 나란히 조립해 결과를 비교해보세요.',
      prompt_en: '[Block] Compare string repetition "3"*3 and numeric multiplication 3*3 side by side.',
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
      prompt_ko: '[빈칸 채우기] 두 빈칸을 채워 글자 반복과 숫자 계산 결과 777 21을 나란히 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in both blanks to output text repetition (777) and multiplication (21).',
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
    // 11~15단계: 실전 응용 (fix_bug 2 / one_line 2 / predict_output 1)
    // ------------------------------------------------------------------------
    {
      id: 11,
      step: 11,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '[틀린 곳 수정] 문자열 Go가 3번 반복된 GoGoGo가 출력되도록 연산 기호를 수정해보세요.',
      prompt_en: '[Fix Bug] Fix the operator so the string Go repeats 3 times as GoGoGo.',
      hint_ko: '문자열을 정수 횟수만큼 반복하려면 덧셈(+) 대신 곱셈(*) 기호를 사용해야 합니다.',
      hint_en: 'Use the multiplication operator (*) instead of + to repeat a string.',
      templateCode: 'print("Go"+3)',
      targetCode: 'print("Go"*3)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'GoGoGo',
        },
      ],
    },
    {
      id: 12,
      step: 12,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '[틀린 곳 수정] 두 문자열이 공백 없이 이어진 Python이 출력되도록 기호를 수정해보세요.',
      prompt_en: '[Fix Bug] Fix the symbol between the strings so Python prints without a space.',
      hint_ko: '쉼표(,)는 공백을 넣으므로, 빈틈없이 이어붙이려면 덧셈 기호(+)로 고쳐보세요.',
      hint_en: 'Replace the comma (,) with a plus sign (+) to concatenate without a space.',
      templateCode: 'print("Py","thon")',
      targetCode: 'print("Py"+"thon")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Python',
        },
      ],
    },
    {
      id: 13,
      step: 13,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '[한 줄 완성] 둘째 줄에 별 기호 글자가 10번 연속 반복된 **********를 출력해보세요.',
      prompt_en: '[Complete Line] Complete line 2 using string repetition to print 10 asterisks (**********).',
      hint_ko: '첫째 줄의 문자열 반복 구조를 참고하여, 따옴표 안의 문자만 별 기호(*)로 바꾸어보세요.',
      hint_en: 'Follow the string repetition pattern on line 1, changing the quoted character to *.',
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
      id: 14,
      step: 14,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '[한 줄 완성] 둘째 줄에 "Hi"와 "All"을 + 연산자로 이어붙여 HiAll을 출력해보세요.',
      prompt_en: '[Complete Line] Complete line 2 by joining "Hi" and "All" with + to print HiAll.',
      hint_ko: '첫째 줄처럼 두 문자열을 + 기호로 연결해 print("Hi"+"All")을 작성해보세요.',
      hint_en: 'Write print("Hi"+"All") on line 2 using the + operator.',
      templateCode: 'print("A"+"B")\n§§§§§§§§§§§§§§§§§',
      targetCode: 'print("A"+"B")\nprint("Hi"+"All")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'AB\nHiAll',
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
      hint_ko: '따옴표로 감싼 "2"와 "3"은 문자열이므로 +는 이어붙이기, *3은 글자 3회 반복으로 동작합니다.',
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
