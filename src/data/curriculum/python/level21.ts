import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 21레벨: 복합 조건문과 중첩 if문 (13단계 표준 구성)
// - [1,3,5,7,9단계] 블록 코딩 개념 도입 (복합 논리식 및 중첩 if 블록 사전 배치)
// - [2,4,6,8,10단계] 빈칸 채우기 타이핑 실습 (fill_blank)
// - [11단계] 버그 수정 (fix_bug)
// - [12단계] 예제 아래 한 줄 코드 추가 작성 (one_line)
// - [13단계] 출력 결과 예측 4지선다 퀴즈 (predict_output)
// ============================================================================
export const PYTHON_LEVEL_21: PracticeRound = {
  id: 'py-basic-r21',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 21,
  title_ko: '21레벨: 복합 조건문과 중첩 if문',
  title_en: 'Level 21: Compound Conditions & Nested if Statements',
  totalQuestions: 13,
  unlockedBlocks: ['print', 'variable', 'input', 'method', 'type', 'if'],
  questions: [
    // ------------------------------------------------------------------------
    // Pair 1 (1~2단계): if + and 이중 조건 동시 통과 판별
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      prompt_ko: '공백으로 입력된 두 점수를 kor, eng에 정수로 저장하고, kor >= 60 and eng >= 60이면 "Pass", 아니면 "Fail"을 출력해보세요. (예: 75 80 -> Pass)',
      prompt_en: 'Read two scores into integers kor and eng; print "Pass" if kor >= 60 and eng >= 60, else "Fail".',
      hint_ko: '두 과목 모두 60점 이상이어야 통과하므로 if 조건 칸에 kor >= 60 and eng >= 60을 입력하세요.',
      hint_en: 'Both subjects must be at least 60, so use kor >= 60 and eng >= 60 in the if condition.',
      targetCode: 'a, b = input().split()\nkor = int(a)\neng = int(b)\nif kor >= 60 and eng >= 60:\n    print("Pass")\nelse:\n    print("Fail")',
      testCases: [
        {
          id: 1,
          input: '75 80',
          expectedOutput: 'Pass',
        },
        {
          id: 2,
          input: '90 50',
          expectedOutput: 'Fail',
        },
        {
          id: 3,
          input: '55 55',
          expectedOutput: 'Fail',
        },
      ],
    },
    {
      id: 2,
      step: 2,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 논리 키워드를 채워 나이(age)가 10세 이상이면서 키(h)가 130 이상일 때만 Ride를, 아니면 Wait을 출력해보세요.',
      prompt_en: 'Fill in the logical keyword so Ride prints only when age >= 10 and h >= 130, otherwise Wait.',
      hint_ko: '나이와 키 두 조건을 동시에 만족해야 하므로 논리 연산자 and를 입력하세요.',
      hint_en: 'Enter and so both age >= 10 and h >= 130 are required.',
      templateCode: 'age = int(input())\nh = int(input())\nif age >= 10 §§§ h >= 130:\n    print("Ride")\nelse:\n    print("Wait")',
      targetCode: 'age = int(input())\nh = int(input())\nif age >= 10 and h >= 130:\n    print("Ride")\nelse:\n    print("Wait")',
      testCases: [
        {
          id: 1,
          input: '12\n140',
          expectedOutput: 'Ride',
        },
        {
          id: 2,
          input: '12\n120',
          expectedOutput: 'Wait',
        },
        {
          id: 3,
          input: '8\n135',
          expectedOutput: 'Wait',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 2 (3~4단계): if + or 하나라도 만족할 때 분기하기
    // ------------------------------------------------------------------------
    {
      id: 3,
      step: 3,
      type: 'block',
      prompt_ko: '요일 day를 입력받아 day == "Sat" or day == "Sun"이면 "Weekend", 아니면 "Weekday"를 출력해보세요. (예: Sun -> Weekend)',
      prompt_en: 'Read string day; print "Weekend" if day == "Sat" or day == "Sun", else "Weekday".',
      hint_ko: '토요일("Sat") 또는 일요일("Sun") 둘 중 하나만 일치해도 주말이므로 두 비교식을 or로 연결하세요.',
      hint_en: 'Connect day == "Sat" and day == "Sun" with or.',
      targetCode: 'day = input()\nif day == "Sat" or day == "Sun":\n    print("Weekend")\nelse:\n    print("Weekday")',
      testCases: [
        {
          id: 1,
          input: 'Sun',
          expectedOutput: 'Weekend',
        },
        {
          id: 2,
          input: 'Mon',
          expectedOutput: 'Weekday',
        },
        {
          id: 3,
          input: 'Sat',
          expectedOutput: 'Weekend',
        },
      ],
    },
    {
      id: 4,
      step: 4,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 논리 키워드를 채워 나이(age)가 8세 미만이거나 65세 이상이면 Free를, 그 외에는 Paid를 출력해보세요. (예: 70 -> Free)',
      prompt_en: 'Fill in the logical keyword to print Free when age < 8 or age >= 65, and Paid otherwise.',
      hint_ko: '어린이(< 8) 또는 경로 우대(>= 65) 중 하나만 해당해도 무료이므로 두 글자 키워드 or를 입력하세요.',
      hint_en: 'Use or so either age < 8 or age >= 65 qualifies for Free.',
      templateCode: 'age = int(input())\nif age < 8 §§ age >= 65:\n    print("Free")\nelse:\n    print("Paid")',
      targetCode: 'age = int(input())\nif age < 8 or age >= 65:\n    print("Free")\nelse:\n    print("Paid")',
      testCases: [
        {
          id: 1,
          input: '70',
          expectedOutput: 'Free',
        },
        {
          id: 2,
          input: '6',
          expectedOutput: 'Free',
        },
        {
          id: 3,
          input: '30',
          expectedOutput: 'Paid',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 3 (5~6단계): 연쇄 비교 범위 조건문 (a <= x <= b)
    // ------------------------------------------------------------------------
    {
      id: 5,
      step: 5,
      type: 'block',
      prompt_ko: '온도 temp를 정수로 입력받아 18 <= temp <= 26 범위이면 "Good", 범위를 벗어나면 "Adjust"를 출력해보세요. (예: 22 -> Good / 30 -> Adjust)',
      prompt_en: 'Read integer temp; print "Good" if 18 <= temp <= 26, otherwise print "Adjust".',
      hint_ko: 'if 조건 칸에 18 <= temp <= 26(또는 temp >= 18 and temp <= 26)을 입력해보세요.',
      hint_en: 'Write 18 <= temp <= 26 in the if condition.',
      targetCode: 'temp = int(input())\nif 18 <= temp <= 26:\n    print("Good")\nelse:\n    print("Adjust")',
      testCases: [
        {
          id: 1,
          input: '22',
          expectedOutput: 'Good',
        },
        {
          id: 2,
          input: '30',
          expectedOutput: 'Adjust',
        },
        {
          id: 3,
          input: '15',
          expectedOutput: 'Adjust',
        },
      ],
    },
    {
      id: 6,
      step: 6,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸에 비교 기호를 채워 시각(h)이 9시 이상 17시 이하 영업시간일 때 Open을, 그 외에는 Closed를 출력해보세요. (예: 14 -> Open)',
      prompt_en: 'Fill in the two comparison operators so 9 <= h <= 17 prints Open and other hours print Closed.',
      hint_ko: '양쪽 경계값(9와 17)을 모두 포함하는 연쇄 비교식 9 <= h <= 17이 되도록 <=를 두 빈칸에 입력하세요.',
      hint_en: 'Enter <= in both blanks to form 9 <= h <= 17.',
      templateCode: 'h = int(input())\nif 9 §§ h §§ 17:\n    print("Open")\nelse:\n    print("Closed")',
      targetCode: 'h = int(input())\nif 9 <= h <= 17:\n    print("Open")\nelse:\n    print("Closed")',
      testCases: [
        {
          id: 1,
          input: '14',
          expectedOutput: 'Open',
        },
        {
          id: 2,
          input: '20',
          expectedOutput: 'Closed',
        },
        {
          id: 3,
          input: '9',
          expectedOutput: 'Open',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 4 (7~8단계): 중첩 if문 (if 안에 또 다른 if - else)
    // ------------------------------------------------------------------------
    {
      id: 7,
      step: 7,
      type: 'block',
      prompt_ko: '정수 n을 입력받아 바깥 if에서 n > 0인지 먼저 확인하고, 양수일 때 안쪽 if-else에서 짝수면 "Plus Even", 홀수면 "Plus Odd"를, 0 이하이면 바깥 else에서 "Zero or Minus"를 출력해보세요.',
      prompt_en: 'Read integer n; if n > 0, check n % 2 == 0 inside to print "Plus Even" or "Plus Odd", else print "Zero or Minus".',
      hint_ko: '바깥 if 조건에 n > 0, 안쪽 중첩 if 조건에 n % 2 == 0을 넣고 세 출력 칸을 순서대로 채워보세요.',
      hint_en: 'Put n > 0 on the outer if and n % 2 == 0 on the nested inner if.',
      targetCode: 'n = int(input())\nif n > 0:\n    if n % 2 == 0:\n        print("Plus Even")\n    else:\n        print("Plus Odd")\nelse:\n    print("Zero or Minus")',
      testCases: [
        {
          id: 1,
          input: '8',
          expectedOutput: 'Plus Even',
        },
        {
          id: 2,
          input: '7',
          expectedOutput: 'Plus Odd',
        },
        {
          id: 3,
          input: '-2',
          expectedOutput: 'Zero or Minus',
        },
      ],
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '넷째 줄 두 빈칸을 채워 아이디가 "admin"일 때 안쪽에서 비밀번호가 "1234"인지 한 번 더 검사하는 중첩 조건문을 완성해보세요.',
      prompt_en: 'Fill in the two blanks on line 4 to nest an inner check testing pw == "1234" when id_ok == "admin".',
      hint_ko: '4칸 들여쓰기된 안쪽 조건문도 동일하게 if로 시작하고 조건 끝에 콜론(:)을 붙이며, 그 실행문은 8칸 들여씁니다.',
      hint_en: 'Start the nested check with if and end with a colon (:); its body is indented by 8 spaces.',
      templateCode: 'id_ok = input()\npw = input()\nif id_ok == "admin":\n    §§ pw == "1234"§\n        print("Admin OK")\n    else:\n        print("Wrong PW")\nelse:\n    print("No User")',
      targetCode: 'id_ok = input()\npw = input()\nif id_ok == "admin":\n    if pw == "1234":\n        print("Admin OK")\n    else:\n        print("Wrong PW")\nelse:\n    print("No User")',
      testCases: [
        {
          id: 1,
          input: 'admin\n1234',
          expectedOutput: 'Admin OK',
        },
        {
          id: 2,
          input: 'admin\n0000',
          expectedOutput: 'Wrong PW',
        },
        {
          id: 3,
          input: 'guest\n1234',
          expectedOutput: 'No User',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 5 (9~10단계): 복합 논리식 + 다중 분기 응용 (FizzBuzz & 괄호 조건)
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'block',
      prompt_ko: '정수 n을 입력받아 3과 5의 공배수(n % 3 == 0 and n % 5 == 0)이면 "FizzBuzz", 3의 배수면 "Fizz", 5의 배수면 "Buzz", 모두 아니면 n을 그대로 출력해보세요. (예: 15 -> FizzBuzz)',
      prompt_en: 'Read integer n; print "FizzBuzz" if divisible by both 3 and 5, "Fizz" if by 3, "Buzz" if by 5, else n.',
      hint_ko: '두 조건을 모두 만족하는 공배수 조건(n % 3 == 0 and n % 5 == 0)을 가장 첫 번째 if에서 먼저 검사해야 합니다.',
      hint_en: 'Test the combined condition (n % 3 == 0 and n % 5 == 0) first before testing 3 or 5 individually.',
      targetCode: 'n = int(input())\nif n % 3 == 0 and n % 5 == 0:\n    print("FizzBuzz")\nelif n % 3 == 0:\n    print("Fizz")\nelif n % 5 == 0:\n    print("Buzz")\nelse:\n    print(n)',
      testCases: [
        {
          id: 1,
          input: '15',
          expectedOutput: 'FizzBuzz',
        },
        {
          id: 2,
          input: '9',
          expectedOutput: 'Fizz',
        },
        {
          id: 3,
          input: '10',
          expectedOutput: 'Buzz',
        },
        {
          id: 4,
          input: '7',
          expectedOutput: '7',
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸에 논리 키워드를 채워 레벨(lv)이 10 이상이면서 동시에 (vip가 "Y"이거나 lv이 30 이상)일 때 Enter를, 아니면 Deny를 출력해보세요.',
      prompt_en: 'Fill in the two logical keywords so lv >= 10 together with (vip == "Y" or lv >= 30) prints Enter, else Deny.',
      hint_ko: '필수 조건(lv >= 10)과 괄호 조건을 연결하는 첫째 빈칸에는 and를, 괄호 안 선택 조건에는 or를 입력하세요.',
      hint_en: 'Use and outside the parentheses and or inside (vip == "Y" or lv >= 30).',
      templateCode: 'lv = int(input())\nvip = input()\nif lv >= 10 §§§ (vip == "Y" §§ lv >= 30):\n    print("Enter")\nelse:\n    print("Deny")',
      targetCode: 'lv = int(input())\nvip = input()\nif lv >= 10 and (vip == "Y" or lv >= 30):\n    print("Enter")\nelse:\n    print("Deny")',
      testCases: [
        {
          id: 1,
          input: '15\nY',
          expectedOutput: 'Enter',
        },
        {
          id: 2,
          input: '35\nN',
          expectedOutput: 'Enter',
        },
        {
          id: 3,
          input: '15\nN',
          expectedOutput: 'Deny',
        },
        {
          id: 4,
          input: '5\nY',
          expectedOutput: 'Deny',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 11단계: 버그 수정 (fix_bug) - 구간 판별에서 or를 잘못 쓴 논리 버그 교정
    // ------------------------------------------------------------------------
    {
      id: 11,
      step: 11,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: 'n이 10 이상 20 이하 구간일 때만 In이 출력되어야 하는데 25를 입력해도 In이 나오는 논리 오류를 수정해보세요. (예: 25 -> Out / 15 -> In)',
      prompt_en: 'Fix the logic bug where 25 prints In so that only numbers from 10 through 20 print In (and others print Out).',
      hint_ko: 'n >= 10 or n <= 20은 모든 숫자가 하나 이상 만족해 항상 참이 됩니다. 두 범위를 동시에 만족하도록 or를 and로 고치세요.',
      hint_en: 'Every number is either >= 10 or <= 20! Replace or with and so both bounds must hold.',
      templateCode: 'n = int(input())\nif n >= 10 or n <= 20:\n    print("In")\nelse:\n    print("Out")',
      targetCode: 'n = int(input())\nif n >= 10 and n <= 20:\n    print("In")\nelse:\n    print("Out")',
      testCases: [
        {
          id: 1,
          input: '25',
          expectedOutput: 'Out',
        },
        {
          id: 2,
          input: '15',
          expectedOutput: 'In',
        },
        {
          id: 3,
          input: '5',
          expectedOutput: 'Out',
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
      prompt_ko: '중첩된 안쪽 if n >= 100: 아래에 8칸 들여쓰기에 맞춰 한 줄을 추가하여 세 자리 이상 양수일 때 Big을 출력해보세요. (예: 150 -> Big)',
      prompt_en: 'Type the nested if headers and add an 8-space indented line below if n >= 100: to print Big.',
      hint_ko: '안쪽 if n >= 100: 다음 줄에서 공백 8칸을 들여쓴 뒤 print("Big")을 입력하세요.',
      hint_en: 'Indent by 8 spaces on line 4 and write print("Big").',
      templateCode: 'n = int(input())\nif n > 0:\n    if n >= 100:\n        §§§§§§§§§§§§',
      targetCode: 'n = int(input())\nif n > 0:\n    if n >= 100:\n        print("Big")',
      testCases: [
        {
          id: 1,
          input: '150',
          expectedOutput: 'Big',
        },
        {
          id: 2,
          input: '100',
          expectedOutput: 'Big',
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
      prompt_ko: '입력값으로 18이 주어질 때, 다음 파이썬 코드의 실행 결과를 선택해보세요.',
      prompt_en: 'When 18 is given as input, select the exact output of the following Python code.',
      hint_ko: '18 > 0이 참이므로 바깥 if 안으로 들어가고, 18 % 6 == 0이 참이므로 A만 출력된 뒤 안쪽 elif는 건너뜁니다.',
      hint_en: '18 > 0 enters the outer if, and 18 % 6 == 0 is True so A prints and the inner elif is skipped.',
      targetCode: 'n = int(input())\nif n > 0:\n    if n % 6 == 0:\n        print("A")\n    elif n % 3 == 0:\n        print("B")\nelse:\n    print("C")',
      choices: ['A', 'B', 'A\nB', 'C'],
      correctChoiceIndex: 0,
      testCases: [
        {
          id: 1,
          input: '18',
          expectedOutput: 'A',
        },
      ],
    },
  ],
};
