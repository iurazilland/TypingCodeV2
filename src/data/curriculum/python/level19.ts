import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 19레벨: if - else 양방향 조건 분기 (13단계 표준 구성)
// - [1,3,5,7,9단계] 블록 코딩 개념 도입 (E자 if-else 분기 블록 사전 배치)
// - [2,4,6,8,10단계] 빈칸 채우기 타이핑 실습 (fill_blank)
// - [11단계] 버그 수정 (fix_bug)
// - [12단계] 예제 아래 한 줄 코드 추가 작성 (one_line)
// - [13단계] 출력 결과 예측 4지선다 퀴즈 (predict_output)
// ============================================================================
export const PYTHON_LEVEL_19: PracticeRound = {
  id: 'py-basic-r19',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 19,
  title_ko: '19레벨: if - else 양방향 조건 분기',
  title_en: 'Level 19: if - else Two-Way Branching',
  totalQuestions: 13,
  unlockedBlocks: ['print', 'variable', 'input', 'method', 'type', 'if'],
  questions: [
    // ------------------------------------------------------------------------
    // Pair 1 (1~2단계): if - else 기본 합격(Pass) / 불합격(Fail) 분기
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      prompt_ko: '점수 score를 정수로 입력받아 score >= 60이면 "Pass", 그렇지 않으면(else) "Fail"을 출력해보세요. (예: 75 -> Pass / 45 -> Fail)',
      prompt_en: 'Read integer score; print "Pass" if score >= 60, otherwise (else) print "Fail".',
      hint_ko: 'if 조건이 참이면 위쪽 칸("Pass")이, 거짓이면 else 아래쪽 칸("Fail")이 둘 중 하나만 실행됩니다.',
      hint_en: 'When if is True the top branch ("Pass") runs; when False the else branch ("Fail") runs.',
      targetCode: 'score = int(input())\nif score >= 60:\n    print("Pass")\nelse:\n    print("Fail")',
      testCases: [
        {
          id: 1,
          input: '75',
          expectedOutput: 'Pass',
        },
        {
          id: 2,
          input: '45',
          expectedOutput: 'Fail',
        },
        {
          id: 3,
          input: '60',
          expectedOutput: 'Pass',
        },
      ],
    },
    {
      id: 2,
      step: 2,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '넷째 줄 빈칸을 채워 나이(age)가 19 이상이면 Adult를, 그렇지 않은 모든 경우에는 Minor를 출력해보세요. (예: 22 -> Adult / 16 -> Minor)',
      prompt_en: 'Fill in line 4 so ages >= 19 print Adult and all other ages print Minor.',
      hint_ko: 'if 조건이 거짓일 때 실행할 분기는 조건식 없이 else와 콜론을 붙여 else:로 작성합니다.',
      hint_en: 'Write else: (with a trailing colon and no condition) for the fallback branch.',
      templateCode: 'age = int(input())\nif age >= 19:\n    print("Adult")\n§§§§§\n    print("Minor")',
      targetCode: 'age = int(input())\nif age >= 19:\n    print("Adult")\nelse:\n    print("Minor")',
      testCases: [
        {
          id: 1,
          input: '22',
          expectedOutput: 'Adult',
        },
        {
          id: 2,
          input: '16',
          expectedOutput: 'Minor',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 2 (3~4단계): 홀수·짝수 판별기 (Even / Odd)
    // ------------------------------------------------------------------------
    {
      id: 3,
      step: 3,
      type: 'block',
      prompt_ko: '정수 n을 입력받아 n % 2 == 0이면 "Even", 아니면 "Odd"를 출력하는 홀짝 판별기를 완성해보세요. (예: 14 -> Even / 9 -> Odd)',
      prompt_en: 'Read integer n and print "Even" if n % 2 == 0, or "Odd" otherwise.',
      hint_ko: '2로 나눈 나머지가 0이면 짝수("Even"), 0이 아니면 홀수("Odd")가 출력되도록 각 분기 칸을 채우세요.',
      hint_en: 'Check n % 2 == 0 in if, put "Even" in the if branch, and put "Odd" in the else branch.',
      targetCode: 'n = int(input())\nif n % 2 == 0:\n    print("Even")\nelse:\n    print("Odd")',
      testCases: [
        {
          id: 1,
          input: '14',
          expectedOutput: 'Even',
        },
        {
          id: 2,
          input: '9',
          expectedOutput: 'Odd',
        },
        {
          id: 3,
          input: '0',
          expectedOutput: 'Even',
        },
      ],
    },
    {
      id: 4,
      step: 4,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸을 채워 입력받은 정수가 2로 나누어떨어지면 Even을, 아니면 Odd를 출력해보세요. (예: 20 -> Even / 13 -> Odd)',
      prompt_en: 'Fill in the two blanks to print Even when n is divisible by 2 and Odd otherwise.',
      hint_ko: '나머지를 구하는 연산자 %와 0과 같은지 확인하는 ==를 각각 빈칸에 입력하세요.',
      hint_en: 'Use % to compute the remainder and == to compare it with 0.',
      templateCode: 'n = int(input())\nif n § 2 §§ 0:\n    print("Even")\nelse:\n    print("Odd")',
      targetCode: 'n = int(input())\nif n % 2 == 0:\n    print("Even")\nelse:\n    print("Odd")',
      testCases: [
        {
          id: 1,
          input: '20',
          expectedOutput: 'Even',
        },
        {
          id: 2,
          input: '13',
          expectedOutput: 'Odd',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 3 (5~6단계): 문자열 비밀번호 일치 판별 (Login / Denied)
    // ------------------------------------------------------------------------
    {
      id: 5,
      step: 5,
      type: 'block',
      prompt_ko: '문자열 pw를 입력받아 pw == "py123"이면 "Login", 다르면 "Denied"를 출력해보세요. (예: py123 -> Login / 0000 -> Denied)',
      prompt_en: 'Read string pw; print "Login" if pw == "py123", otherwise print "Denied".',
      hint_ko: '문자열 입력이므로 int() 없이 pw = input()으로 받고, if 조건에 pw == "py123"을 적으세요.',
      hint_en: 'Read text directly via pw = input() and compare pw == "py123" in the if condition.',
      targetCode: 'pw = input()\nif pw == "py123":\n    print("Login")\nelse:\n    print("Denied")',
      testCases: [
        {
          id: 1,
          input: 'py123',
          expectedOutput: 'Login',
        },
        {
          id: 2,
          input: '0000',
          expectedOutput: 'Denied',
        },
      ],
    },
    {
      id: 6,
      step: 6,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸을 채워 입력된 key가 "open"과 일치하면 Welcome을, 그렇지 않으면 Locked를 출력해보세요.',
      prompt_en: 'Fill in the blanks so key matching "open" prints Welcome and any other input prints Locked.',
      hint_ko: '문자열 일치 비교에는 ==를, 조건이 거짓일 때 분기에는 else를 입력하세요.',
      hint_en: 'Use == to test string equality and else before the colon on line 4.',
      templateCode: 'key = input()\nif key §§ "open":\n    print("Welcome")\n§§§§:\n    print("Locked")',
      targetCode: 'key = input()\nif key == "open":\n    print("Welcome")\nelse:\n    print("Locked")',
      testCases: [
        {
          id: 1,
          input: 'open',
          expectedOutput: 'Welcome',
        },
        {
          id: 2,
          input: 'close',
          expectedOutput: 'Locked',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 4 (7~8단계): 각 분기에서 변수 값을 다르게 저장한 뒤 마지막에 출력하기
    // ------------------------------------------------------------------------
    {
      id: 7,
      step: 7,
      type: 'block',
      prompt_ko: '정수 age를 입력받아 age < 13이면 fee에 1000을, 아니면 fee에 2500을 저장한 뒤 바깥에서 fee를 출력해보세요. (예: 10 -> 1000 / 20 -> 2500)',
      prompt_en: 'Read integer age; set fee = 1000 if age < 13 else fee = 2500, and print fee outside.',
      hint_ko: '각 분기 안에서 변수 fee의 값만 정해주고, 마지막에 if-else 바깥의 print(fee) 한 줄로 깔끔하게 출력합니다.',
      hint_en: 'Assign fee in each branch and print(fee) once after the if-else block.',
      targetCode: 'age = int(input())\nif age < 13:\n    fee = 1000\nelse:\n    fee = 2500\nprint(fee)',
      testCases: [
        {
          id: 1,
          input: '10',
          expectedOutput: '1000',
        },
        {
          id: 2,
          input: '20',
          expectedOutput: '2500',
        },
        {
          id: 3,
          input: '13',
          expectedOutput: '2500',
        },
      ],
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '주문 금액(total)이 20000 이상이면 배송비(ship)를 0으로, 미만이면 3000으로 정해 최종 결제 금액(total + ship)을 출력해보세요.',
      prompt_en: 'Set shipping (ship) to 0 if total >= 20000, otherwise 3000, and print total + ship.',
      hint_ko: 'if 분기 빈칸에는 무료 배송비 0을, else 분기 빈칸에는 배송비 3000을 입력하세요.',
      hint_en: 'Enter 0 in the if branch and 3000 in the else branch.',
      templateCode: 'total = int(input())\nif total >= 20000:\n    ship = §\nelse:\n    ship = §§§§\nprint(total + ship)',
      targetCode: 'total = int(input())\nif total >= 20000:\n    ship = 0\nelse:\n    ship = 3000\nprint(total + ship)',
      testCases: [
        {
          id: 1,
          input: '25000',
          expectedOutput: '25000',
        },
        {
          id: 2,
          input: '15000',
          expectedOutput: '18000',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 5 (9~10단계): input().split()으로 입력받은 두 정수 비교하기 (최댓값 / 최솟값)
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'block',
      prompt_ko: '공백으로 입력된 두 수를 a, b로 나눠 정수 x, y에 저장한 뒤, x >= y이면 x를, 아니면 y를 출력해 더 큰 값을 찾아보세요. (예: 25 18 -> 25)',
      prompt_en: 'Split two numbers into a, b, convert to integers x, y, and print the larger value using if x >= y: else:.',
      hint_ko: '첫째 블록에 a, b, 둘째·셋째 블록에 x = int(a), y = int(b), 아래 if-else에서 x >= y 조건으로 x 또는 y를 출력하세요.',
      hint_en: 'Unpack a, b = input().split(), convert x = int(a) and y = int(b), then branch on x >= y.',
      targetCode: 'a, b = input().split()\nx = int(a)\ny = int(b)\nif x >= y:\n    print(x)\nelse:\n    print(y)',
      testCases: [
        {
          id: 1,
          input: '25 18',
          expectedOutput: '25',
        },
        {
          id: 2,
          input: '10 42',
          expectedOutput: '42',
        },
        {
          id: 3,
          input: '7 7',
          expectedOutput: '7',
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸을 채워 한 줄에 입력된 두 정수 x, y 중 더 작거나 같은 값(최솟값)을 출력해보세요. (예: 15 9 -> 9 / 4 12 -> 4)',
      prompt_en: 'Fill in the blanks to print the smaller (minimum) of two space-separated integers x and y.',
      hint_ko: 'x가 y 이하일 때 x를 출력해야 하므로 첫째 빈칸에는 <=를, 나머지 분기인 둘째 빈칸에는 else를 입력하세요.',
      hint_en: 'Enter <= in the if condition so x prints when smaller or equal, and else for the other branch.',
      templateCode: 'a, b = input().split()\nx, y = int(a), int(b)\nif x §§ y:\n    print(x)\n§§§§:\n    print(y)',
      targetCode: 'a, b = input().split()\nx, y = int(a), int(b)\nif x <= y:\n    print(x)\nelse:\n    print(y)',
      testCases: [
        {
          id: 1,
          input: '15 9',
          expectedOutput: '9',
        },
        {
          id: 2,
          input: '4 12',
          expectedOutput: '4',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 11단계: 버그 수정 (fix_bug) - else 뒤에 조건식을 적은 SyntaxError 교정
    // ------------------------------------------------------------------------
    {
      id: 11,
      step: 11,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: 'else 뒤에 불필요한 조건식을 적어 발생한 문법 오류(SyntaxError)를 수정해보세요. (예: -4 입력 시 Minus 출력)',
      prompt_en: 'Fix the SyntaxError caused by writing a condition after else (e.g., -4 -> Minus).',
      hint_ko: 'else는 "위의 조건이 아닌 모든 나머지 경우"를 뜻하므로 뒤에 조건식을 적지 않고 곧바로 else:만 적어야 합니다.',
      hint_en: 'else handles all remaining cases and never takes a condition — write simply else:.',
      templateCode: 'n = int(input())\nif n >= 0:\n    print("Zero or Plus")\nelse n < 0:\n    print("Minus")',
      targetCode: 'n = int(input())\nif n >= 0:\n    print("Zero or Plus")\nelse:\n    print("Minus")',
      testCases: [
        {
          id: 1,
          input: '-4',
          expectedOutput: 'Minus',
        },
        {
          id: 2,
          input: '7',
          expectedOutput: 'Zero or Plus',
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
      prompt_ko: 'else: 아래에 들여쓰기에 맞춰 한 줄을 추가하여 80 미만인 경우 Retry가 출력되도록 완성해보세요. (예: 65 -> Retry / 90 -> Pass)',
      prompt_en: 'Type the code and add an indented line under else: to print Retry when n < 80.',
      hint_ko: 'else: 다음 줄에서 공백 4칸을 들여쓴 뒤 print("Retry")를 입력하세요.',
      hint_en: 'Indent by 4 spaces under else: and write print("Retry").',
      templateCode: 'n = int(input())\nif n >= 80:\n    print("Pass")\nelse:\n    §§§§§§§§§§§§§§',
      targetCode: 'n = int(input())\nif n >= 80:\n    print("Pass")\nelse:\n    print("Retry")',
      testCases: [
        {
          id: 1,
          input: '65',
          expectedOutput: 'Retry',
        },
        {
          id: 2,
          input: '90',
          expectedOutput: 'Pass',
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
      prompt_ko: '입력값으로 15가 주어질 때, 다음 파이썬 코드의 실행 결과를 선택해보세요.',
      prompt_en: 'When 15 is given as input, select the exact output of the following Python code.',
      hint_ko: '15 % 2는 1이므로 if 조건(== 0)은 거짓이 되어 else 분기로 이동하고, 15 * 3 + 1 = 46이 출력됩니다.',
      hint_en: '15 % 2 is 1 (not 0), so execution enters else: and computes 15 * 3 + 1 = 46.',
      targetCode: 'n = int(input())\nif n % 2 == 0:\n    n //= 2\nelse:\n    n = n * 3 + 1\nprint(n)',
      choices: ['46', '7', '45', '8'],
      correctChoiceIndex: 0,
      testCases: [
        {
          id: 1,
          input: '15',
          expectedOutput: '46',
        },
      ],
    },
  ],
};

