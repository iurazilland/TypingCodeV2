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
      hint_ko: '따옴표 없는 숫자는 정수형이고 따옴표로 감싼 숫자는 문자열입니다. 각 변수를 자료형 확인 블록 안에 넣어 차이를 비교해보세요.',
      hint_en: 'A number without quotes is an integer, while a quoted one is a string. Pass each variable into the type-checking blocks to compare them.',
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
      hint_ko: '값의 자료형(종류·유형)을 확인할 때는 영어로 유형을 뜻하는 네 글자 내장 함수를 사용합니다.',
      hint_en: 'To inspect what kind of data a variable holds, use the four-letter built-in function that means "kind" or "category" in English.',
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
      hint_ko: '소수점이 포함된 숫자는 부동소수점 실수형으로 분류됩니다. 변수에 실수를 저장한 뒤 자료형 확인 블록에 전달해보세요.',
      hint_en: 'Numbers with a decimal point are stored as floating-point values. Assign the decimal to the variable and pass it to the type block.',
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
      hint_ko: '일반 나눗셈의 결과값 옆에 그 값의 자료형을 함께 출력할 수 있도록 유형을 뜻하는 네 글자 함수 이름을 적어보세요.',
      hint_en: 'Fill in the four-letter built-in function that checks the data category of the division result.',
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
      hint_ko: '문자열 상태의 숫자는 바로 산술 덧셈을 할 수 없으므로, 정수 변환 블록을 거쳐 숫자형 변수로 바꾼 뒤 계산합니다.',
      hint_en: 'Numeric text cannot be added to a number directly—convert the string variable into an integer first, then perform the addition.',
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
      hint_ko: '숫자 모양의 문자열을 정수로 바꿀 때는 영어로 정수(integer)의 앞 세 글자를 딴 변환 함수를 사용합니다.',
      hint_en: 'To convert a numeric string into a whole number, use the casting function named after the first three letters of "integer".',
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
      prompt_ko: 'lv에 숫자 12를 저장한 뒤, 둘째 블록의 str( )로 문자열 label을 만들고 "Lv." + label을 출력해 Lv.12를 완성해보세요.',
      prompt_en: 'Store 12 in lv, convert lv with str( ) into label, and print "Lv." + label to output Lv.12.',
      hint_ko: '문자열과 숫자는 더하기 기호로 바로 이어붙일 수 없으므로, 숫자 변수를 문자열 변환 블록으로 감싸 글자로 바꾼 뒤 결합합니다.',
      hint_en: 'Strings and numbers cannot be joined with + directly, so convert the number variable into text first before concatenating.',
      targetCode: 'lv = 12\nlabel = str(lv)\nprint("Lv." + label)',
      expectedVariables: { lv: 12, label: '12' },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Lv.12',
        },
      ],
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 숫자를 문자열로 바꾸는 함수 이름을 채워 "ID-"와 숫자 변수 age(20)를 +로 이어붙인 ID-20을 출력해보세요.',
      prompt_en: 'Fill in the blank with the string-casting function name to concatenate "ID-" and age (20) as ID-20.',
      hint_ko: '숫자를 글자로 바꾸어 이어붙일 때는 영어로 문자열(string)의 앞 세 글자를 딴 변환 함수를 사용합니다.',
      hint_en: 'To turn a number into text for concatenation, use the casting function formed from the first three letters of "string".',
      templateCode: 'age = 20\nprint("ID-" + §§§(age))',
      targetCode: 'age = 20\nprint("ID-" + str(age))',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'ID-20',
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
      hint_ko: '소수점이 들어 있는 문자열을 계산 가능한 실수로 바꿀 때는 부동소수점(floating-point) 변환 블록에 해당 문자열을 넣어줍니다.',
      hint_en: 'Pass the decimal string into the floating-point conversion block so you can add another decimal number to it.',
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
      hint_ko: '소수점 아래를 버리고 정수로 만들 때는 integer의 앞 세 글자 함수를, 소수점 문자열을 실수로 바꿀 때는 부동소수점(floating-point)의 앞 다섯 글자 함수를 씁니다.',
      hint_en: 'Use the first three letters of "integer" to drop the decimal part, and the first five letters of "floating-point" to parse a decimal string.',
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
      prompt_ko: '문자열과 정수를 바로 +로 연결해 발생한 자료형 오류(TypeError)를 형변환으로 수정하여 Ch.5를 출력해보세요.',
      prompt_en: 'Fix the TypeError caused by concatenating a string and an integer with + so Ch.5 prints cleanly.',
      hint_ko: '더하기 연산자 왼쪽은 문자열인데 오른쪽 변수는 정수형이라 서로 자료형이 맞지 않습니다. 오른쪽 변수를 문자열로 형변환해 이어붙여보세요.',
      hint_en: 'A TypeError happens because + cannot combine text with an integer directly—convert the integer variable into a string first.',
      templateCode: 'stage = 5\nprint("Ch." + stage)',
      targetCode: 'stage = 5\nprint("Ch." + str(stage))',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Ch.5',
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
      hint_ko: '앞선 문자열 뒤에 정수 변수를 더하기 기호로 빈틈없이 이어붙이려면, 숫자 변수를 문자열 변환 함수로 감싼 뒤 출력해야 합니다.',
      hint_en: 'To join the prefix text and the integer variable with + inside print(), convert the integer variable to a string first.',
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
      hint_ko: '문자열에 정수를 곱할 때와 정수로 형변환한 값에 정수를 곱할 때 곱셈 기호가 각각 어떻게 다르게 동작하는지 비교해보세요.',
      hint_en: 'Compare what the asterisk operator does when multiplying a string by an integer versus multiplying two integers after type conversion.',
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

