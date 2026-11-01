import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 22레벨: 불리언과 조건문 종합 문제풀이 (10단계 - 전 문항 실전 문제풀이)
// - 블록 모드 없이 Section 3 (16~21레벨) 핵심 문법을 4대 문제 유형으로 총점검
// - [1~3단계] 빈칸 채우기 (fill_blank)
// - [4~6단계] 틀린 곳 수정 (fix_bug)
// - [7~8단계] 예제 아래 한 줄 추가 작성 (one_line)
// - [9~10단계] 출력 결과 예측 선택 (predict_output)
// ============================================================================
export const PYTHON_LEVEL_22: PracticeRound = {
  id: 'py-basic-r22',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 22,
  title_ko: '22레벨: 불리언과 조건문 종합 문제풀이',
  title_en: 'Level 22: Section 3 Comprehensive Review',
  totalQuestions: 10,
  unlockedBlocks: ['print', 'variable', 'input', 'method', 'type', 'if'],
  questions: [
    // ------------------------------------------------------------------------
    // 1~3단계: 빈칸 채우기 (fill_blank)
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸을 채워 공백으로 입력된 두 정수 x, y가 같으면 Same, x가 더 크면 Left, y가 더 크면 Right를 출력해보세요.',
      prompt_en: 'Fill in the two branching keywords to print Same (x == y), Left (x > y), or Right (otherwise).',
      hint_ko: '추가 조건식이 있는 다섯째 줄에는 elif를, 나머지 경우인 일곱째 줄에는 else를 입력하세요.',
      hint_en: 'Enter elif on line 5 and else on line 7.',
      templateCode: 'a, b = input().split()\nx, y = int(a), int(b)\nif x == y:\n    print("Same")\n§§§§ x > y:\n    print("Left")\n§§§§:\n    print("Right")',
      targetCode: 'a, b = input().split()\nx, y = int(a), int(b)\nif x == y:\n    print("Same")\nelif x > y:\n    print("Left")\nelse:\n    print("Right")',
      testCases: [
        {
          id: 1,
          input: '20 5',
          expectedOutput: 'Left',
        },
        {
          id: 2,
          input: '10 10',
          expectedOutput: 'Same',
        },
        {
          id: 3,
          input: '3 9',
          expectedOutput: 'Right',
        },
      ],
    },
    {
      id: 2,
      step: 2,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 논리 키워드를 채워 정수 n이 2의 배수이면서 동시에 5의 배수일 때만 10x를, 아니면 No를 출력해보세요. (예: 30 -> 10x)',
      prompt_en: 'Fill in the logical keyword so 10x prints only when n is divisible by both 2 and 5, else No.',
      hint_ko: '두 나머지 조건을 모두 만족해야 하므로 논리 연산자 and를 입력하세요.',
      hint_en: 'Use and to require both n % 2 == 0 and n % 5 == 0.',
      templateCode: 'n = int(input())\nif n % 2 == 0 §§§ n % 5 == 0:\n    print("10x")\nelse:\n    print("No")',
      targetCode: 'n = int(input())\nif n % 2 == 0 and n % 5 == 0:\n    print("10x")\nelse:\n    print("No")',
      testCases: [
        {
          id: 1,
          input: '30',
          expectedOutput: '10x',
        },
        {
          id: 2,
          input: '15',
          expectedOutput: 'No',
        },
        {
          id: 3,
          input: '12',
          expectedOutput: 'No',
        },
      ],
    },
    {
      id: 3,
      step: 3,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸을 채워 금액(price)이 30000 이상이면 5000을 차감하고, 그렇지 않고 15000 이상이면 2000을 차감한 최종 금액을 출력해보세요.',
      prompt_en: 'Fill in the blanks to subtract 5000 when price >= 30000, or subtract 2000 when price >= 15000, then print price.',
      hint_ko: '셋째 줄에는 차감 복합 대입 연산자 -=를, 넷째 줄에는 다중 조건 키워드 elif를 입력하세요.',
      hint_en: 'Enter -= on line 3 and elif on line 4.',
      templateCode: 'price = int(input())\nif price >= 30000:\n    price §§ 5000\n§§§§ price >= 15000:\n    price -= 2000\nprint(price)',
      targetCode: 'price = int(input())\nif price >= 30000:\n    price -= 5000\nelif price >= 15000:\n    price -= 2000\nprint(price)',
      testCases: [
        {
          id: 1,
          input: '35000',
          expectedOutput: '30000',
        },
        {
          id: 2,
          input: '20000',
          expectedOutput: '18000',
        },
        {
          id: 3,
          input: '10000',
          expectedOutput: '10000',
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
      prompt_ko: 'if 조건식에서 같음 비교 대신 대입 기호(=)를 사용해 발생한 문법 오류(SyntaxError)를 수정해보세요. (예: 100 -> Perfect / 80 -> Good)',
      prompt_en: 'Fix the SyntaxError caused by using = instead of == inside the if condition.',
      hint_ko: '조건식에서 두 값이 같은지 비교할 때는 등호 하나(=)가 아니라 등호 두 개(==)를 사용해야 합니다.',
      hint_en: 'Use == (two equals signs) to test equality in an if condition.',
      templateCode: 'score = int(input())\nif score = 100:\n    print("Perfect")\nelse:\n    print("Good")',
      targetCode: 'score = int(input())\nif score == 100:\n    print("Perfect")\nelse:\n    print("Good")',
      testCases: [
        {
          id: 1,
          input: '100',
          expectedOutput: 'Perfect',
        },
        {
          id: 2,
          input: '80',
          expectedOutput: 'Good',
        },
      ],
    },
    {
      id: 5,
      step: 5,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '조건 검사 순서가 잘못되어 95점을 입력해도 A 대신 C가 출력되는 버그를 수정하여 90 이상은 A, 70 이상은 C, 그 미만은 F가 나오도록 해보세요.',
      prompt_en: 'Fix the condition order bug where 95 prints C so >= 90 prints A, >= 70 prints C, and < 70 prints F.',
      hint_ko: 's >= 70을 먼저 검사하면 95점도 참이 되어 C가 출력됩니다. 더 좁고 높은 기준인 s >= 90("A")을 if에서 먼저 검사하세요.',
      hint_en: 'Check the stricter threshold s >= 90 ("A") in if before checking s >= 70 ("C") in elif.',
      templateCode: 's = int(input())\nif s >= 70:\n    print("C")\nelif s >= 90:\n    print("A")\nelse:\n    print("F")',
      targetCode: 's = int(input())\nif s >= 90:\n    print("A")\nelif s >= 70:\n    print("C")\nelse:\n    print("F")',
      testCases: [
        {
          id: 1,
          input: '95',
          expectedOutput: 'A',
        },
        {
          id: 2,
          input: '75',
          expectedOutput: 'C',
        },
        {
          id: 3,
          input: '50',
          expectedOutput: 'F',
        },
      ],
    },
    {
      id: 6,
      step: 6,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '조건문의 두 가지 문법 오류(&& 기호와 콜론 누락)를 모두 수정하여 "py"와 "10"이 입력될 때 OK가 출력되도록 해보세요.',
      prompt_en: 'Fix both syntax errors (&& operator and missing colon) so inputs "py" and "10" print OK.',
      hint_ko: '&&를 파이썬 논리 연산자 and로 바꾸고, if 조건식 맨 끝에 콜론(:)을 붙여주세요.',
      hint_en: 'Replace && with and, and add the missing colon (:) at the end of the if line.',
      templateCode: 'tag = input()\nlv = int(input())\nif tag == "py" && lv >= 10\n    print("OK")\nelse:\n    print("No")',
      targetCode: 'tag = input()\nlv = int(input())\nif tag == "py" and lv >= 10:\n    print("OK")\nelse:\n    print("No")',
      testCases: [
        {
          id: 1,
          input: 'py\n10',
          expectedOutput: 'OK',
        },
        {
          id: 2,
          input: 'py\n5',
          expectedOutput: 'No',
        },
        {
          id: 3,
          input: 'js\n20',
          expectedOutput: 'No',
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
      prompt_ko: '1 이상 10 이하 범위인지 검사하는 코드의 else: 아래에 한 줄을 추가하여 범위를 벗어나면 Invalid를 출력해보세요. (예: 15 -> Invalid)',
      prompt_en: 'Type the range check code and add an indented line under else: to print Invalid.',
      hint_ko: 'else: 다음 줄에서 공백 4칸을 들여쓴 뒤 print("Invalid")를 입력하세요.',
      hint_en: 'Indent by 4 spaces under else: and write print("Invalid").',
      templateCode: 'n = int(input())\nif 1 <= n <= 10:\n    print("Valid")\nelse:\n    §§§§§§§§§§§§§§§§',
      targetCode: 'n = int(input())\nif 1 <= n <= 10:\n    print("Valid")\nelse:\n    print("Invalid")',
      testCases: [
        {
          id: 1,
          input: '15',
          expectedOutput: 'Invalid',
        },
        {
          id: 2,
          input: '7',
          expectedOutput: 'Valid',
        },
      ],
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '두 정수의 합이 100 이상인지 확인하는 if문 아래에 들여쓰기에 맞춰 한 줄을 추가하여 Success를 출력해보세요. (예: 60 50 -> Success)',
      prompt_en: 'Type the first three lines and add an indented line under if x + y >= 100: to print Success.',
      hint_ko: 'if x + y >= 100: 다음 줄에서 공백 4칸을 들여쓴 뒤 print("Success")를 입력하세요.',
      hint_en: 'Indent by 4 spaces on line 4 and write print("Success").',
      templateCode: 'a, b = input().split()\nx, y = int(a), int(b)\nif x + y >= 100:\n    §§§§§§§§§§§§§§§§',
      targetCode: 'a, b = input().split()\nx, y = int(a), int(b)\nif x + y >= 100:\n    print("Success")',
      testCases: [
        {
          id: 1,
          input: '60 50',
          expectedOutput: 'Success',
        },
        {
          id: 2,
          input: '40 60',
          expectedOutput: 'Success',
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
      hint_ko: 'x=12일 때 x > 10은 True이므로 not x > 10은 False가 되어 첫 줄 and 결과는 False이고, 둘째 줄 10 <= 12 <= 15는 True입니다.',
      hint_en: 'x > 10 is True so not x > 10 is False (making line 2 False), while 10 <= 12 <= 15 on line 3 is True.',
      targetCode: 'x = 12\nprint(x % 4 == 0 and not x > 10)\nprint(10 <= x <= 15)',
      choices: ['False\nTrue', 'True\nTrue', 'False\nFalse', 'True\nFalse'],
      correctChoiceIndex: 0,
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'False\nTrue',
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'quiz',
      kind: 'predict_output',
      prompt_ko: '입력값으로 85가 주어질 때, 다음 파이썬 코드의 실행 결과를 선택해보세요.',
      prompt_en: 'When 85 is given as input, select the exact output of the following Python code.',
      hint_ko: '초기값 "C"에서 85 >= 80이 참이므로 res가 "B"로 바뀌고, 안쪽 중첩 조건 85 >= 90은 거짓이므로 건너뛰어 최종 "B"가 출력됩니다.',
      hint_en: 'res starts at "C", updates to "B" since 85 >= 80, skips the nested s >= 90 check, and prints B.',
      targetCode: 's = int(input())\nres = "C"\nif s >= 80:\n    res = "B"\n    if s >= 90:\n        res = "A"\nprint(res)',
      choices: ['B', 'A', 'C', 'B\nA'],
      correctChoiceIndex: 0,
      testCases: [
        {
          id: 1,
          input: '85',
          expectedOutput: 'B',
        },
      ],
    },
  ],
};

