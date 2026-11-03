import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 15레벨: 변수·자료형·입력 종합 문제풀이 (10단계 - 전 문항 실전 문제풀이)
// - 블록 모드 없이 Section 2 (9~14레벨) 핵심 문법을 4대 문제 유형으로 총점검
// - [1~3단계] 빈칸 채우기 (fill_blank)
// - [4~6단계] 틀린 곳 수정 (fix_bug)
// - [7~8단계] 예제 아래 한 줄 추가 작성 (one_line)
// - [9~10단계] 출력 결과 예측 선택 (predict_output)
// ============================================================================
export const PYTHON_LEVEL_15: PracticeRound = {
  id: 'py-basic-r15',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 15,
  title_ko: '15레벨: 변수·자료형·입력 종합 문제풀이',
  title_en: 'Level 15: Section 2 Comprehensive Review',
  totalQuestions: 10,
  unlockedBlocks: ['print', 'variable', 'comment', 'input', 'method', 'type'],
  questions: [
    // ------------------------------------------------------------------------
    // 1~3단계: 빈칸 채우기 (fill_blank)
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸에 복합 대입 기호를 채워 price(1000)에 500을 먼저 더한 뒤 2배로 갱신하여 3000을 출력해보세요.',
      prompt_en: 'Fill in the two compound operators to add 500 to price (1000), then double it to print 3000.',
      hint_ko: '자기 자신의 값을 갱신할 때는 산술 연산 기호 바로 뒤에 등호를 붙인 두 글자 복합 대입 연산자를 순서에 맞게 사용합니다.',
      hint_en: 'To update a variable in place, combine the needed arithmetic symbol followed immediately by the equals sign on each line.',
      templateCode: 'price = 1000\nprice §§ 500\nprice §§ 2\nprint(price)',
      targetCode: 'price = 1000\nprice += 500\nprice *= 2\nprint(price)',
      expectedVariables: { price: 3000 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '3000',
        },
      ],
    },
    {
      id: 2,
      step: 2,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸에 형변환 함수 이름을 채워 입력받은 정수 n에 1을 더한 값을 "No." 뒤에 이어 출력해보세요. (예: 9 입력 시 No.10)',
      prompt_en: 'Fill in the two casting functions to add 1 to input integer n and concatenate it after "No." (e.g., 9 -> No.10).',
      hint_ko: '첫째 줄에서는 숫자 덧셈을 위해 입력값을 정수형으로 바꾸고, 둘째 줄에서는 계산된 숫자를 앞선 글자와 이어붙일 수 있도록 다시 문자열로 변환해보세요.',
      hint_en: 'Convert the incoming text into a whole number on line 1 so you can add 1, then cast that numeric sum back into text on line 2 to join it with the prefix.',
      templateCode: 'n = §§§(input())\nprint("No." + §§§(n + 1))',
      targetCode: 'n = int(input())\nprint("No." + str(n + 1))',
      testCases: [
        {
          id: 1,
          input: '9',
          expectedOutput: 'No.10',
        },
        {
          id: 2,
          input: '19',
          expectedOutput: 'No.20',
        },
      ],
    },
    {
      id: 3,
      step: 3,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸을 채워 하이픈(-)으로 입력된 날짜를 y, m, d로 분리하고 마침표(.)로 연결해 출력해보세요. (예: 2026-10-31 -> 2026.10.31)',
      prompt_en: 'Fill in the blanks to split a hyphenated date into y, m, d and join them with dots (.) (e.g., 2026-10-31 -> 2026.10.31).',
      hint_ko: '첫째 줄에는 문자열을 기준 기호로 쪼개어 나누는 다섯 글자 메서드를, 둘째 줄에는 출력 항목 사이를 구분해 주는 세 글자 옵션 이름을 적어보세요.',
      hint_en: 'On line 1, call the five-letter string method that divides text at a delimiter; on line 2, pass the three-letter option name that sets the delimiter between printed items.',
      templateCode: 'y, m, d = input().§§§§§("-")\nprint(y, m, d, §§§=".")',
      targetCode: 'y, m, d = input().split("-")\nprint(y, m, d, sep=".")',
      testCases: [
        {
          id: 1,
          input: '2026-10-31',
          expectedOutput: '2026.10.31',
        },
        {
          id: 2,
          input: '2025-01-01',
          expectedOutput: '2025.01.01',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 4~6단계: 틀린 곳 수정 (fix_bug)
    // ------------------------------------------------------------------------
    {
      id: 4,
      step: 4,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '입력받은 숫자의 2배 계산값 대신 문자열이 두 번 반복되어 나오는 버그를 수정해보세요. (예: 15 입력 시 1515가 아닌 30 출력)',
      prompt_en: 'Fix the bug where multiplying input n by 2 repeats text instead of doubling the number (e.g., 15 -> 30).',
      hint_ko: '입력 함수로 읽어온 값은 기본적으로 문자열이기 때문에 곱셈 기호가 산술 계산 대신 글자 반복으로 동작하고 있습니다. 입력 단계나 계산 단계에서 숫자 자료형으로 변환해보세요.',
      hint_en: 'Because user input is read as text by default, multiplying by 2 repeats characters instead of doubling a number—convert the input to a whole-number type.',
      templateCode: 'n = input()\nprint(n * 2)',
      targetCode: 'n = int(input())\nprint(n * 2)',
      testCases: [
        {
          id: 1,
          input: '15',
          expectedOutput: '30',
        },
        {
          id: 2,
          input: '7',
          expectedOutput: '14',
        },
      ],
    },
    {
      id: 5,
      step: 5,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '문자열 "Lv."과 정수 변수 lv(10)를 바로 +로 연결해 발생한 오류(TypeError)를 수정하여 Lv.10을 출력해보세요.',
      prompt_en: 'Fix the TypeError caused by concatenating "Lv." and integer lv (10) so Lv.10 prints cleanly.',
      hint_ko: '더하기 연산자는 문자열과 정수를 서로 다른 자료형 상태에서 바로 연결할 수 없습니다. 숫자 변수를 문자열 자료형으로 바꾸어 결합해보세요.',
      hint_en: 'The plus operator cannot join text and an integer directly due to a type mismatch—convert the numeric variable into text so both sides match.',
      templateCode: 'lv = 10\nprint("Lv." + lv)',
      targetCode: 'lv = 10\nprint("Lv." + str(lv))',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Lv.10',
        },
      ],
    },
    {
      id: 6,
      step: 6,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '콜론(:)으로 분리한 두 숫자가 문자열로 이어붙는 버그를 수정하여 실제 정수 덧셈 결과가 출력되도록 해보세요. (예: 3:7 -> 10)',
      prompt_en: 'Fix the bug where colon-separated numbers concatenate as strings instead of adding as integers (e.g., 3:7 -> 10).',
      hint_ko: '구분 기호를 기준으로 잘라낸 조각들은 모두 문자열 자료형이므로, 그대로 더하면 글자가 이어붙습니다. 두 변수를 각각 정수형으로 변환해 더해보세요.',
      hint_en: 'Pieces divided from an input line remain strings, so adding them directly concatenates characters instead of summing whole numbers—convert each variable before adding.',
      templateCode: 'a, b = input().split(":")\nprint(a + b)',
      targetCode: 'a, b = input().split(":")\nprint(int(a) + int(b))',
      testCases: [
        {
          id: 1,
          input: '3:7',
          expectedOutput: '10',
        },
        {
          id: 2,
          input: '12:8',
          expectedOutput: '20',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 7~8단계: 예제 아래 한 줄 추가 작성 (one_line)
    // ------------------------------------------------------------------------
    {
      id: 7,
      step: 7,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '두 변수 x와 y의 값을 맞바꾸는 코드 아래에 한 줄을 추가하여 바뀐 x에서 y를 뺀 결과 15를 출력해보세요.',
      prompt_en: 'Type the variable swap lines and add a line below to print x - y (15).',
      hint_ko: '둘째 줄을 거치며 두 변수의 값이 서로 맞바뀌었다는 점에 유의하여, 첫 번째 변수에서 두 번째 변수를 뺀 값을 화면에 내보내도록 설계해보세요.',
      hint_en: 'Keeping in mind that line 2 swapped the two variables, add an output statement on line 3 that subtracts the second variable from the first.',
      templateCode: 'x, y = 10, 25\nx, y = y, x\n§§§§§§§§§§§§',
      targetCode: 'x, y = 10, 25\nx, y = y, x\nprint(x - y)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '15',
        },
      ],
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '공백으로 구분된 가로와 세로를 입력받는 코드 아래에 한 줄을 추가하여 두 값을 정수로 변환해 곱한 넓이를 출력해보세요. (예: 6 8 -> 48)',
      prompt_en: 'Type line 1 and add a line below to convert w and h to integers and print their product (e.g., 6 8 -> 48).',
      hint_ko: '첫째 줄에서 나뉘어 담긴 가로와 세로 변수는 문자열 상태이므로, 각각 정수형으로 변환한 뒤 곱한 결과를 화면에 출력하도록 한 줄을 설계해보세요.',
      hint_en: 'Since both variables from line 1 hold text strings, convert each one to a whole number and display their product.',
      templateCode: 'w, h = input().split()\n§§§§§§§§§§§§§§§§§§§§§§',
      targetCode: 'w, h = input().split()\nprint(int(w) * int(h))',
      testCases: [
        {
          id: 1,
          input: '6 8',
          expectedOutput: '48',
        },
        {
          id: 2,
          input: '10 5',
          expectedOutput: '50',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 9~10단계: 출력 결과 예측 선택 (predict_output)
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'quiz',
      kind: 'predict_output',
      prompt_ko: '다음 파이썬 코드를 실행했을 때 화면에 출력될 올바른 결과를 선택해보세요.',
      prompt_en: 'Select the exact output that will be printed when the following Python code runs.',
      hint_ko: '덧셈 복합 대입 뒤에 이어지는 일반 나눗셈 복합 대입이 나누어떨어질 때도 결과값의 소수점 표기와 자료형을 어떻게 바꾸는지 확인해보세요.',
      hint_en: 'Trace the addition update first, then recall what data type and decimal format standard division always produces even when there is no remainder.',
      targetCode: 'x = 15\nx += 5\nx /= 4\nprint(x, type(x))',
      choices: [
        "5.0 <class 'float'>",
        "5 <class 'int'>",
        "5.0 <class 'int'>",
        "3.75 <class 'float'>",
      ],
      correctChoiceIndex: 0,
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: "5.0 <class 'float'>",
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'quiz',
      kind: 'predict_output',
      prompt_ko: '입력값으로 4 3이 주어질 때, 다음 파이썬 코드의 실행 결과를 선택해보세요.',
      prompt_en: 'When 4 3 is given as input, select the exact output of the following Python code.',
      hint_ko: '주석 처리된 줄은 건너뛰고, 마지막 줄에서 왼쪽 변수는 문자열 그대로이고 오른쪽 변수만 정수로 변환되었을 때 곱셈 기호가 어떻게 동작하는지 생각해보세요.',
      hint_en: 'Skip the commented-out line, then check the data types on each side of the multiplication operator when the left stays a string and only the right becomes a whole number.',
      targetCode: 'a, b = input().split()\n# a = "10"\nprint(a * int(b))',
      choices: ['444', '12', '101010', '30'],
      correctChoiceIndex: 0,
      testCases: [
        {
          id: 1,
          input: '4 3',
          expectedOutput: '444',
        },
      ],
    },
  ],
};

