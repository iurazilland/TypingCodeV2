import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 12레벨: 자료형과 type(), 형변환 기초 (13단계 표준 구성)
// - [1,3,5,7,9단계] 블록 코딩 개념 도입 (type/int/float/str 블록 사전 배치 활용)
// - [2,4,6,8,10단계] 빈칸 채우기 타이핑 실습 (fill_blank)
// - [11단계] 버그 수정 (fix_bug)
// - [12단계] 예제 아래 한 줄 코드 추가 작성 (one_line)
// - [13단계] 출력 결과 예측 4지선다 퀴즈 (predict_output)
// ============================================================================
export const PYTHON_LEVEL_12: PracticeRound = {
  id: 'py-basic-r12',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 12,
  title_ko: '12레벨: 자료형 확인(type)과 형변환 기초',
  title_en: 'Level 12: Data Types, type(), & Type Casting',
  totalQuestions: 13,
  unlockedBlocks: ['print', 'variable', 'type'],
  questions: [
    // ------------------------------------------------------------------------
    // Pair 1 (1~2단계): 정수(int)와 문자열(str)의 type() 비교
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      prompt_ko: 'a에 숫자 10, b에 문자열 "10"을 저장한 뒤, 두 print(type( )) 블록에 각각 a와 b를 넣어 자료형이 어떻게 다른지 확인해보세요.',
      prompt_en: 'Store 10 in a and "10" in b, then pass a and b into the two print(type( )) blocks to compare their data types.',
      hint_ko: '따옴표 없는 10은 정수(int), 따옴표로 감싼 "10"은 문자열(str)입니다. 두 type( ) 칸에 각각 a와 b를 입력하세요.',
      hint_en: '10 without quotes is an int, while "10" with quotes is a str. Enter a and b inside the two type( ) slots.',
      targetCode: 'a = 10\nb = "10"\nprint(type(a))\nprint(type(b))',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: "<class 'int'>\n<class 'str'>",
        },
      ],
    },
    {
      id: 2,
      step: 2,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸에 값의 자료형(타입)을 알려주는 함수 이름을 채워 정수와 문자열의 자료형 정보를 각각 출력해보세요.',
      prompt_en: 'Fill in the two blanks with the function name that inspects data types to print the types of x and y.',
      hint_ko: '파이썬에서 변수나 값의 자료형을 확인할 때는 type() 함수를 사용합니다.',
      hint_en: 'Use the built-in type() function in Python to check the data type of a value.',
      templateCode: 'x = 25\ny = "25"\nprint(§§§§(x))\nprint(§§§§(y))',
      targetCode: 'x = 25\ny = "25"\nprint(type(x))\nprint(type(y))',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: "<class 'int'>\n<class 'str'>",
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 2 (3~4단계): 실수(float)의 자료형 확인
    // ------------------------------------------------------------------------
    {
      id: 3,
      step: 3,
      type: 'block',
      prompt_ko: '변수 pi에 소수점이 있는 실수 3.14를 저장하고, print(type( )) 블록에 pi를 넣어 <class \'float\'>가 출력되는지 확인해보세요.',
      prompt_en: 'Store 3.14 in variable pi and pass pi into print(type( )) to verify <class \'float\'>.',
      hint_ko: '첫째 블록 왼쪽에 pi, 오른쪽에 3.14를 입력하고 둘째 블록의 type( ) 안에 pi를 입력하세요.',
      hint_en: 'Set pi to 3.14 in the first block and enter pi inside type( ) in the second block.',
      targetCode: 'pi = 3.14\nprint(type(pi))',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: "<class 'float'>",
        },
      ],
    },
    {
      id: 4,
      step: 4,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 자료형을 확인하는 함수 이름을 채워 나눗셈 결과값(2.5)과 그 자료형(<class \'float\'>)을 나란히 출력해보세요.',
      prompt_en: 'Fill in the blank with the type-checking function name to print 2.5 alongside <class \'float\'>.',
      hint_ko: '일반 나눗셈(/)의 결과는 실수형(float)이 됩니다. 자료형을 확인하는 함수 type을 입력하세요.',
      hint_en: 'Division (/) produces a float. Enter type in the blank to inspect rate.',
      templateCode: 'rate = 10 / 4\nprint(rate, §§§§(rate))',
      targetCode: 'rate = 10 / 4\nprint(rate, type(rate))',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: "2.5 <class 'float'>",
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 3 (5~6단계): int()로 숫자 모양 문자열을 정수로 바꾸어 덧셈하기
    // ------------------------------------------------------------------------
    {
      id: 5,
      step: 5,
      type: 'block',
      prompt_ko: 'text에 문자열 "25"를 저장한 뒤, 둘째 블록의 int( ) 안에 text를 넣어 정수 num을 만들고 num + 5를 출력해 30을 확인해보세요.',
      prompt_en: 'Store "25" in text, convert text with int( ) into num, and print num + 5 to output 30.',
      hint_ko: '문자열 "25"에는 숫자 5를 바로 더할 수 없지만, int(text)로 정수 25로 변환하면 25 + 5 = 30 계산이 가능합니다.',
      hint_en: 'You cannot add 5 directly to "25", so convert it with int(text) first to compute 25 + 5 = 30.',
      targetCode: 'text = "25"\nnum = int(text)\nprint(num + 5)',
      expectedVariables: { text: '25', num: 25 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '30',
        },
      ],
    },
    {
      id: 6,
      step: 6,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 문자열을 정수로 변환하는 함수 이름을 채워 문자열 "1500"과 숫자 500을 더한 합계 2000을 출력해보세요.',
      prompt_en: 'Fill in the blank with the integer-casting function name to add "1500" and 500 and print 2000.',
      hint_ko: '숫자 모양의 문자열을 정수(integer)로 바꿀 때는 세 글자 함수 int를 사용합니다.',
      hint_en: 'Use the three-letter function int to convert a numeric string into an integer.',
      templateCode: 'price = "1500"\ntotal = §§§(price) + 500\nprint(total)',
      targetCode: 'price = "1500"\ntotal = int(price) + 500\nprint(total)',
      expectedVariables: { total: 2000 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '2000',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 4 (7~8단계): str()로 숫자를 문자열로 바꾸어 + 결합하기
    // ------------------------------------------------------------------------
    {
      id: 7,
      step: 7,
      type: 'block',
      prompt_ko: 'lv에 숫자 12를 저장한 뒤, 둘째 블록의 str( )로 문자열 label을 만들고 "Level " + label을 출력해 Level 12를 완성해보세요.',
      prompt_en: 'Store 12 in lv, convert lv with str( ) into label, and print "Level " + label to output Level 12.',
      hint_ko: '첫째 블록에 lv = 12, 둘째 블록에 label = str(lv), 셋째 print 블록에 "Level " + label을 입력하세요.',
      hint_en: 'Set lv = 12, label = str(lv), and print("Level " + label).',
      targetCode: 'lv = 12\nlabel = str(lv)\nprint("Level " + label)',
      expectedVariables: { lv: 12, label: '12' },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Level 12',
        },
      ],
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 숫자를 문자열로 바꾸는 함수 이름을 채워 "Age: "와 숫자 변수 age(20)를 +로 이어붙인 Age: 20을 출력해보세요.',
      prompt_en: 'Fill in the blank with the string-casting function name to concatenate "Age: " and age (20) as Age: 20.',
      hint_ko: '숫자를 문자열(string)로 변환해 +로 이어붙일 때는 세 글자 함수 str을 사용합니다.',
      hint_en: 'Use the three-letter function str to convert a number into a string before concatenating with +.',
      templateCode: 'age = 20\nprint("Age: " + §§§(age))',
      targetCode: 'age = 20\nprint("Age: " + str(age))',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Age: 20',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 5 (9~10단계): float() 실수 변환과 int(실수) 소수점 버림
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'block',
      prompt_ko: '첫째 블록의 float( ) 안에 문자열 "3.5"를 넣어 실수 변수 w에 저장하고, 아래에서 w + 1.5를 출력해 5.0을 확인해보세요.',
      prompt_en: 'Convert "3.5" with float( ) into variable w, then print w + 1.5 to verify 5.0.',
      hint_ko: '소수점이 포함된 문자열 "3.5"를 실수로 바꿀 때는 float("3.5")를 사용합니다.',
      hint_en: 'Use float("3.5") to convert a decimal string into a floating-point number.',
      targetCode: 'w = float("3.5")\nprint(w + 1.5)',
      expectedVariables: { w: 3.5 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '5.0',
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸에 형변환 함수 이름을 각각 채워 실수 3.9의 소수점을 버린 정수(3)와 문자열 "2.5"를 실수로 바꾼 값(2.5)을 출력해보세요.',
      prompt_en: 'Fill in the two casting function names to truncate 3.9 to integer 3 and convert "2.5" to float 2.5.',
      hint_ko: '실수의 소수점 아래를 버리고 정수로 만들 때는 int를, 소수점 문자열을 실수로 바꿀 때는 float를 사용합니다.',
      hint_en: 'Use int to truncate a float to an integer, and float to parse a decimal string.',
      templateCode: 'ratio = 3.9\nprint(§§§(ratio), §§§§§("2.5"))',
      targetCode: 'ratio = 3.9\nprint(int(ratio), float("2.5"))',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '3 2.5',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 11단계: 버그 수정 (fix_bug) - 문자열 + 정수 TypeError 교정
    // ------------------------------------------------------------------------
    {
      id: 11,
      step: 11,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '문자열과 정수를 바로 +로 연결해 발생한 자료형 오류(TypeError)를 형변환으로 수정하여 Stage 5를 출력해보세요.',
      prompt_en: 'Fix the TypeError caused by concatenating a string and an integer with + so Stage 5 prints cleanly.',
      hint_ko: '정수 변수 stage를 str(stage)로 감싸 문자열로 바꾸면 "Stage "와 +로 이어붙일 수 있습니다.',
      hint_en: 'Wrap integer variable stage with str(stage) so it can be concatenated with "Stage ".',
      templateCode: 'stage = 5\nprint("Stage " + stage)',
      targetCode: 'stage = 5\nprint("Stage " + str(stage))',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Stage 5',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 12단계: 예제 아래 한 줄 추가 작성 (one_line)
    // ------------------------------------------------------------------------
    {
      id: 12,
      step: 12,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '변수 lv를 선언한 코드 아래에 한 줄을 추가하여 문자열 "Lv."과 문자열로 변환한 lv를 +로 이어붙인 Lv.9를 출력해보세요.',
      prompt_en: 'Type line 1 and add a line below concatenating "Lv." and lv converted to a string with + to print Lv.9.',
      hint_ko: '첫째 줄을 입력하고 Enter를 누른 뒤, 둘째 줄에 print("Lv." + str(lv))를 입력하세요.',
      hint_en: 'Type line 1, press Enter, and write print("Lv." + str(lv)) on line 2.',
      templateCode: 'lv = 9\n§§§§§§§§§§§§§§§§§§§§§§',
      targetCode: 'lv = 9\nprint("Lv." + str(lv))',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Lv.9',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 13단계: 출력 결과 예측 선택 (predict_output)
    // ------------------------------------------------------------------------
    {
      id: 13,
      step: 13,
      type: 'quiz',
      kind: 'predict_output',
      prompt_ko: '다음 파이썬 코드를 실행했을 때 화면에 출력될 올바른 결과를 선택해보세요.',
      prompt_en: 'Select the exact output that will be printed when the following Python code runs.',
      hint_ko: 'a는 문자열 "12"이므로 a * 3은 문자열 3회 반복(121212)이 되고, int(a) * 3은 정수 곱셈 12 * 3 = 36이 됩니다.',
      hint_en: 'a is the string "12", so a * 3 repeats it 3 times (121212), while int(a) * 3 multiplies 12 * 3 = 36.',
      targetCode: 'a = "12"\nb = 3\nprint(a * b)\nprint(int(a) * b)',
      choices: ['121212\n36', '36\n36', '121212\n121212', 'TypeError'],
      correctChoiceIndex: 0,
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '121212\n36',
        },
      ],
    },
  ],
};
