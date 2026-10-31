import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 16레벨: 불리언(bool)과 비교 연산자 (13단계 표준 구성)
// - [1,3,5,7,9단계] 블록 코딩 개념 도입 (사전 배치 블록 활용)
// - [2,4,6,8,10단계] 빈칸 채우기 타이핑 실습 (fill_blank)
// - [11단계] 버그 수정 (fix_bug)
// - [12단계] 예제 아래 한 줄 코드 추가 작성 (one_line)
// - [13단계] 출력 결과 예측 4지선다 퀴즈 (predict_output)
// ============================================================================
export const PYTHON_LEVEL_16: PracticeRound = {
  id: 'py-basic-r16',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 16,
  title_ko: '16레벨: 불리언(bool)과 비교 연산자',
  title_en: 'Level 16: Booleans (bool) & Comparison Operators',
  totalQuestions: 13,
  unlockedBlocks: ['print', 'variable', 'type'],
  questions: [
    // ------------------------------------------------------------------------
    // Pair 1 (1~2단계): True, False 불리언 값과 type() 확인
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      prompt_ko: '변수 is_ready에 참을 뜻하는 True를 저장한 뒤, is_ready의 값과 type(is_ready)를 차례로 출력해 불리언 자료형을 확인해보세요.',
      prompt_en: 'Store True in variable is_ready, then print is_ready and type(is_ready) to inspect the boolean data type.',
      hint_ko: '파이썬에서 참과 거짓은 첫 글자를 대문자로 쓴 True, False이며 따옴표를 붙이지 않습니다.',
      hint_en: 'In Python, boolean literals are capitalized as True and False without quotes.',
      targetCode: 'is_ready = True\nprint(is_ready)\nprint(type(is_ready))',
      expectedVariables: { is_ready: true },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: "True\n<class 'bool'>",
        },
      ],
    },
    {
      id: 2,
      step: 2,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸을 채워 변수 is_open에 거짓을 뜻하는 불리언 값을 저장하고, 값과 자료형(False <class \'bool\'>)을 출력해보세요.',
      prompt_en: 'Fill in the blanks to store the boolean value for false in is_open and print False <class \'bool\'>.',
      hint_ko: '거짓을 뜻하는 파이썬 불리언 값은 첫 글자가 대문자인 False이며, 자료형 확인 함수는 type입니다.',
      hint_en: 'Use capitalized False for boolean false and type to inspect its data type.',
      templateCode: 'is_open = §§§§§\nprint(is_open, §§§§(is_open))',
      targetCode: 'is_open = False\nprint(is_open, type(is_open))',
      expectedVariables: { is_open: false },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: "False <class 'bool'>",
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 2 (3~4단계): 초과(>)와 미만(<) 비교
    // ------------------------------------------------------------------------
    {
      id: 3,
      step: 3,
      type: 'block',
      prompt_ko: 'a에 15, b에 10을 저장한 뒤, 첫째 print에 a > b, 둘째 print에 a < b를 넣어 비교 결과가 True와 False로 출력되는지 확인해보세요.',
      prompt_en: 'Set a to 15 and b to 10, then print a > b and a < b to verify True and False.',
      hint_ko: '비교 연산식의 계산 결과는 항상 True(참) 또는 False(거짓) 둘 중 하나로 나옵니다.',
      hint_en: 'Comparison expressions always evaluate to either True or False.',
      targetCode: 'a = 15\nb = 10\nprint(a > b)\nprint(a < b)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'True\nFalse',
        },
      ],
    },
    {
      id: 4,
      step: 4,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸에 크기 비교 기호를 채워 현재 기온(28)이 25보다 큰지(True), 20보다 작은지(False)를 각각 출력해보세요.',
      prompt_en: 'Fill in the two comparison symbols to check if temp (28) is greater than 25 (True) and less than 20 (False).',
      hint_ko: '왼쪽이 더 큰지 비교할 때는 >, 왼쪽이 더 작은지 비교할 때는 < 기호를 사용합니다.',
      hint_en: 'Use > for greater-than and < for less-than comparisons.',
      templateCode: 'temp = 28\nprint(temp § 25)\nprint(temp § 20)',
      targetCode: 'temp = 28\nprint(temp > 25)\nprint(temp < 20)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'True\nFalse',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 3 (5~6단계): 이상(>=)과 이하(<=) 경계값 비교
    // ------------------------------------------------------------------------
    {
      id: 5,
      step: 5,
      type: 'block',
      prompt_ko: 'score에 80을 저장한 뒤, score >= 80(80 이상)과 score > 80(80 초과)을 각각 출력해 경계값 포함 차이를 확인해보세요.',
      prompt_en: 'Store 80 in score, then print score >= 80 and score > 80 to see how boundary values behave.',
      hint_ko: '>=는 기준값(80)과 같아도 True이지만, >는 80보다 커야만 True이므로 80 > 80은 False가 됩니다.',
      hint_en: '>= includes 80 (True), whereas > requires strictly greater than 80 (False).',
      targetCode: 'score = 80\nprint(score >= 80)\nprint(score > 80)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'True\nFalse',
        },
      ],
    },
    {
      id: 6,
      step: 6,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸을 채워 age(19)가 19 이상인지(True), 18 이하인지(False)를 차례대로 출력해보세요.',
      prompt_en: 'Fill in the blanks to check whether age (19) is at least 19 (True) and at most 18 (False).',
      hint_ko: '크거나 같음(이상)은 >=, 작거나 같음(이하)은 <= 순서로 부등호를 먼저 적고 등호를 뒤에 붙입니다.',
      hint_en: 'Write >= for greater-or-equal and <= for less-or-equal (inequality sign before =).',
      templateCode: 'age = 19\nprint(age §§ 19)\nprint(age §§ 18)',
      targetCode: 'age = 19\nprint(age >= 19)\nprint(age <= 18)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'True\nFalse',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 4 (7~8단계): 같음(==)과 다름(!=), 문자열 일치 비교
    // ------------------------------------------------------------------------
    {
      id: 7,
      step: 7,
      type: 'block',
      prompt_ko: 'pw에 "1234"를 저장하고, 첫째 print에 pw == "1234", 둘째 print에 pw != "1234"를 넣어 같음과 다름 판별을 확인해보세요.',
      prompt_en: 'Set pw to "1234", then print pw == "1234" and pw != "1234" to test equality and inequality.',
      hint_ko: '등호 하나(=)는 변수 대입이고, 두 값이 같은지 비교할 때는 등호 두 개(==), 다른지 비교할 때는 !=를 사용합니다.',
      hint_en: 'Single = assigns a variable; use == to test equality and != to test inequality.',
      targetCode: 'pw = "1234"\nprint(pw == "1234")\nprint(pw != "1234")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'True\nFalse',
        },
      ],
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸에 비교 기호를 채워 code("A1")가 "A1"과 같은지, 그리고 "B2"와 다른지를 비교해 True True를 출력해보세요.',
      prompt_en: 'Fill in the comparison operators to check if code ("A1") equals "A1" and differs from "B2" (True True).',
      hint_ko: '같음을 비교하는 첫째 빈칸에는 ==를, 다름을 비교하는 둘째 빈칸에는 !=를 입력하세요.',
      hint_en: 'Enter == in the first blank for equality and != in the second blank for inequality.',
      templateCode: 'code = "A1"\nprint(code §§ "A1", code §§ "B2")',
      targetCode: 'code = "A1"\nprint(code == "A1", code != "B2")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'True True',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 5 (9~10단계): 나머지 연산(%)과 비교 연산(==)을 결합한 짝수·배수 판별식
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'block',
      prompt_ko: '변수 n에 12를 저장하고, print 블록에 n % 2 == 0을 넣어 n이 짝수인지 판별한 결과 True를 출력해보세요.',
      prompt_en: 'Store 12 in n and print n % 2 == 0 to check whether n is even (True).',
      hint_ko: '산술 연산자(%)가 비교 연산자(==)보다 먼저 계산되므로 12 % 2의 결과 0이 0과 같은지 비교해 True가 나옵니다.',
      hint_en: '% runs before ==, so 12 % 2 evaluates to 0, and 0 == 0 evaluates to True.',
      targetCode: 'n = 12\nprint(n % 2 == 0)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'True',
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸을 채워 num(15)을 3으로 나눈 나머지가 0과 같은지(3의 배수인지) 판별하여 True를 출력해보세요.',
      prompt_en: 'Fill in the blanks to check whether the remainder of num (15) divided by 3 equals 0 (True).',
      hint_ko: '나머지를 구하는 첫째 빈칸에는 %를, 0과 같은지 확인하는 둘째 빈칸에는 ==를 입력하세요.',
      hint_en: 'Use % for the remainder and == to compare it with 0.',
      templateCode: 'num = 15\nprint(num § 3 §§ 0)',
      targetCode: 'num = 15\nprint(num % 3 == 0)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'True',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 11단계: 버그 수정 (fix_bug) - 소문자 true 오타로 인한 NameError 교정
    // ------------------------------------------------------------------------
    {
      id: 11,
      step: 11,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '불리언 값의 대소문자 표기 실수로 발생한 오류(NameError)를 수정하여 True가 정상 출력되도록 해보세요.',
      prompt_en: 'Fix the capitalization typo on the boolean literal causing a NameError so True prints cleanly.',
      hint_ko: '파이썬에서 불리언 상수는 소문자 true가 아니라 첫 글자가 대문자인 True로 작성해야 합니다.',
      hint_en: 'In Python, boolean true must start with an uppercase T as True.',
      templateCode: 'done = true\nprint(done)',
      targetCode: 'done = True\nprint(done)',
      expectedVariables: { done: true },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'True',
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
      prompt_ko: '변수 x를 선언한 코드 아래에 한 줄을 추가하여 x를 2로 나눈 나머지가 0과 같은지 비교한 결과 True를 출력해보세요.',
      prompt_en: 'Type line 1 and add a line below comparing the remainder of x divided by 2 with 0 to print True.',
      hint_ko: '첫째 줄을 입력하고 Enter를 누른 뒤, 둘째 줄에 print(x % 2 == 0)을 입력하세요.',
      hint_en: 'Type line 1, press Enter, and write print(x % 2 == 0) on line 2.',
      templateCode: 'x = 18\n§§§§§§§§§§§§§§§§§',
      targetCode: 'x = 18\nprint(x % 2 == 0)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'True',
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
      hint_ko: '파이썬의 == 비교는 값뿐만 아니라 자료형도 함께 비교하므로 정수 10과 문자열 "10"을 비교한 a == b는 False입니다.',
      hint_en: 'Python == checks data types as well: integer 10 equals 10 (True), but integer 10 == string "10" is False.',
      targetCode: 'a = 10\nb = "10"\nprint(a == 10)\nprint(a == b)',
      choices: ['True\nFalse', 'True\nTrue', 'False\nFalse', '10\nFalse'],
      correctChoiceIndex: 0,
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'True\nFalse',
        },
      ],
    },
  ],
};
