import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 20레벨: if - elif - else 다중 조건 분기 (13단계 표준 구성)
// - [1,3,5,7,9단계] 블록 코딩 개념 도입 (다중 가지 if-elif-else 블록 사전 배치)
// - [2,4,6,8,10단계] 빈칸 채우기 타이핑 실습 (fill_blank)
// - [11단계] 버그 수정 (fix_bug)
// - [12단계] 예제 아래 한 줄 코드 추가 작성 (one_line)
// - [13단계] 출력 결과 예측 4지선다 퀴즈 (predict_output)
// ============================================================================
export const PYTHON_LEVEL_20: PracticeRound = {
  id: 'py-basic-r20',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 20,
  title_ko: '20레벨: if - elif - else 다중 조건 분기',
  title_en: 'Level 20: if - elif - else Multi-Way Branching',
  totalQuestions: 13,
  unlockedBlocks: ['print', 'variable', 'input', 'type', 'if'],
  questions: [
    // ------------------------------------------------------------------------
    // Pair 1 (1~2단계): 양수 / 0 / 음수 3단계 분기
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      prompt_ko: '정수 n을 입력받아 n > 0이면 "Positive", elif n == 0이면 "Zero", 그 외(else)에는 "Negative"를 출력해보세요. (예: 7 -> Positive / 0 -> Zero)',
      prompt_en: 'Read integer n; print "Positive" if n > 0, "Zero" if n == 0, and "Negative" otherwise.',
      hint_ko: 'if 조건이 거짓일 때 추가 조건을 검사하는 두 번째 가지가 elif입니다. 각 가지의 조건과 출력문을 채워보세요.',
      hint_en: 'elif tests an additional condition only when previous conditions are False.',
      targetCode: 'n = int(input())\nif n > 0:\n    print("Positive")\nelif n == 0:\n    print("Zero")\nelse:\n    print("Negative")',
      testCases: [
        {
          id: 1,
          input: '7',
          expectedOutput: 'Positive',
        },
        {
          id: 2,
          input: '0',
          expectedOutput: 'Zero',
        },
        {
          id: 3,
          input: '-3',
          expectedOutput: 'Negative',
        },
      ],
    },
    {
      id: 2,
      step: 2,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '넷째 줄 두 빈칸을 채워 n이 0보다 크지 않을 때 0과 같은지 추가로 검사하여 Plus, Zero, Minus 중 하나를 출력해보세요.',
      prompt_en: 'Fill in the two blanks on line 4 to add a second condition checking n == 0 and print Plus, Zero, or Minus.',
      hint_ko: '파이썬에서 "그렇지 않고 만약 ~라면"을 뜻하는 네 글자 키워드는 elif이며, 조건 끝에는 콜론(:)을 붙입니다.',
      hint_en: 'Use the four-letter keyword elif and end the condition line with a colon (:).',
      templateCode: 'n = int(input())\nif n > 0:\n    print("Plus")\n§§§§ n == 0§\n    print("Zero")\nelse:\n    print("Minus")',
      targetCode: 'n = int(input())\nif n > 0:\n    print("Plus")\nelif n == 0:\n    print("Zero")\nelse:\n    print("Minus")',
      testCases: [
        {
          id: 1,
          input: '0',
          expectedOutput: 'Zero',
        },
        {
          id: 2,
          input: '5',
          expectedOutput: 'Plus',
        },
        {
          id: 3,
          input: '-2',
          expectedOutput: 'Minus',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 2 (3~4단계): 점수대별 학점(A / B / C / F) 다중 elif 판별
    // ------------------------------------------------------------------------
    {
      id: 3,
      step: 3,
      type: 'block',
      prompt_ko: '점수 score를 입력받아 90 이상이면 "A", 80 이상이면 "B", 70 이상이면 "C", 그 미만이면 "F"를 출력해보세요. (예: 85 -> B)',
      prompt_en: 'Read integer score and print "A" (>=90), "B" (>=80), "C" (>=70), or "F" (otherwise).',
      hint_ko: '위에서부터 높은 점수 기준(score >= 90, score >= 80, score >= 70) 순서로 조건을 채우세요.',
      hint_en: 'Check thresholds from highest to lowest: score >= 90, score >= 80, score >= 70.',
      targetCode: 'score = int(input())\nif score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelif score >= 70:\n    print("C")\nelse:\n    print("F")',
      testCases: [
        {
          id: 1,
          input: '85',
          expectedOutput: 'B',
        },
        {
          id: 2,
          input: '92',
          expectedOutput: 'A',
        },
        {
          id: 3,
          input: '74',
          expectedOutput: 'C',
        },
        {
          id: 4,
          input: '60',
          expectedOutput: 'F',
        },
      ],
    },
    {
      id: 4,
      step: 4,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸에 분기 키워드를 채워 점수 s가 90 이상이면 A, 80 이상이면 B, 나머지는 C를 출력해보세요. (예: 84 -> B)',
      prompt_en: 'Fill in the two branching keywords to print A (>=90), B (>=80), or C (otherwise).',
      hint_ko: '추가 조건식이 있는 넷째 줄에는 elif를, 조건식 없이 마무리하는 여섯째 줄에는 else를 입력하세요.',
      hint_en: 'Use elif when a condition follows, and else for the final fallback.',
      templateCode: 's = int(input())\nif s >= 90:\n    print("A")\n§§§§ s >= 80:\n    print("B")\n§§§§:\n    print("C")',
      targetCode: 's = int(input())\nif s >= 90:\n    print("A")\nelif s >= 80:\n    print("B")\nelse:\n    print("C")',
      testCases: [
        {
          id: 1,
          input: '84',
          expectedOutput: 'B',
        },
        {
          id: 2,
          input: '95',
          expectedOutput: 'A',
        },
        {
          id: 3,
          input: '70',
          expectedOutput: 'C',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 3 (5~6단계): 첫 번째 참(True) 분기 하나만 실행되고 빠져나가는 원리
    // ------------------------------------------------------------------------
    {
      id: 5,
      step: 5,
      type: 'block',
      prompt_ko: '기온 temp를 입력받아 temp >= 30이면 "Hot", elif temp >= 20이면 "Warm", else이면 "Cool"을 출력해보세요. (예: 33 입력 시 Hot만 출력)',
      prompt_en: 'Read integer temp; print "Hot" (>=30), "Warm" (>=20), or "Cool" (otherwise).',
      hint_ko: '33은 30 이상이면서 20 이상이기도 하지만, if-elif 구조에서는 맨 처음 참이 된 "Hot" 하나만 실행되고 끝납니다.',
      hint_en: 'Even though 33 >= 20 is also True, if-elif stops after the first matching branch ("Hot").',
      targetCode: 'temp = int(input())\nif temp >= 30:\n    print("Hot")\nelif temp >= 20:\n    print("Warm")\nelse:\n    print("Cool")',
      testCases: [
        {
          id: 1,
          input: '33',
          expectedOutput: 'Hot',
        },
        {
          id: 2,
          input: '24',
          expectedOutput: 'Warm',
        },
        {
          id: 3,
          input: '12',
          expectedOutput: 'Cool',
        },
      ],
    },
    {
      id: 6,
      step: 6,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 비교 기호를 채워 레벨(lv)이 50 이상이면 Master, 20 이상 50 미만이면 Pro, 그 미만이면 Rookie를 출력해보세요.',
      prompt_en: 'Fill in the comparison operator so lv >= 50 prints Master, 20 <= lv < 50 prints Pro, and < 20 prints Rookie.',
      hint_ko: 'if lv >= 50이 거짓일 때만 elif로 내려오므로, elif에서는 lv >= 20만 검사해도 자동으로 20 이상 50 미만이 됩니다.',
      hint_en: 'Since elif runs only when lv < 50, checking lv >= 20 covers 20 through 49.',
      templateCode: 'lv = int(input())\nif lv >= 50:\n    rank = "Master"\nelif lv §§ 20:\n    rank = "Pro"\nelse:\n    rank = "Rookie"\nprint(rank)',
      targetCode: 'lv = int(input())\nif lv >= 50:\n    rank = "Master"\nelif lv >= 20:\n    rank = "Pro"\nelse:\n    rank = "Rookie"\nprint(rank)',
      testCases: [
        {
          id: 1,
          input: '25',
          expectedOutput: 'Pro',
        },
        {
          id: 2,
          input: '60',
          expectedOutput: 'Master',
        },
        {
          id: 3,
          input: '10',
          expectedOutput: 'Rookie',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 4 (7~8단계): 문자열 명령어 다중 분기
    // ------------------------------------------------------------------------
    {
      id: 7,
      step: 7,
      type: 'block',
      prompt_ko: '명령어 cmd를 문자열로 입력받아 "start"이면 "Run", "stop"이면 "Halt", 그 외 모든 입력에는 "Wait"을 출력해보세요. (예: stop -> Halt)',
      prompt_en: 'Read string cmd; print "Run" for "start", "Halt" for "stop", and "Wait" for anything else.',
      hint_ko: 'cmd = input()으로 받은 뒤 if에 cmd == "start", elif에 cmd == "stop" 조건을 적으세요.',
      hint_en: 'Compare cmd == "start" in if and cmd == "stop" in elif.',
      targetCode: 'cmd = input()\nif cmd == "start":\n    print("Run")\nelif cmd == "stop":\n    print("Halt")\nelse:\n    print("Wait")',
      testCases: [
        {
          id: 1,
          input: 'stop',
          expectedOutput: 'Halt',
        },
        {
          id: 2,
          input: 'start',
          expectedOutput: 'Run',
        },
        {
          id: 3,
          input: 'idle',
          expectedOutput: 'Wait',
        },
      ],
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸을 채워 신호등 색(light)이 "green"이면 Go, "yellow"이면 Slow, 그 외에는 Stop을 출력해보세요.',
      prompt_en: 'Fill in the blanks so light == "green" prints Go, "yellow" prints Slow, and anything else prints Stop.',
      hint_ko: '두 번째 조건 분기 키워드 elif와 문자열 일치 비교 연산자 ==를 각각 빈칸에 입력하세요.',
      hint_en: 'Enter elif for the second branch and == to compare light with "yellow".',
      templateCode: 'light = input()\nif light == "green":\n    print("Go")\n§§§§ light §§ "yellow":\n    print("Slow")\nelse:\n    print("Stop")',
      targetCode: 'light = input()\nif light == "green":\n    print("Go")\nelif light == "yellow":\n    print("Slow")\nelse:\n    print("Stop")',
      testCases: [
        {
          id: 1,
          input: 'yellow',
          expectedOutput: 'Slow',
        },
        {
          id: 2,
          input: 'green',
          expectedOutput: 'Go',
        },
        {
          id: 3,
          input: 'red',
          expectedOutput: 'Stop',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 5 (9~10단계): 구간별 요금 계산 후 변수 출력하기
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'block',
      prompt_ko: '나이 age를 정수로 입력받아 age < 8이면 fee에 0, elif age < 20이면 fee에 1000, else이면 fee에 2000을 저장하고 fee를 출력해보세요. (예: 15 -> 1000)',
      prompt_en: 'Read integer age; set fee to 0 (<8), 1000 (<20), or 2000 (otherwise), and print fee.',
      hint_ko: '세 가지 분기 안의 변수 블록에 각각 fee = 0, fee = 1000, fee = 2000을 넣고 바깥 아래 print에 fee를 넣으세요.',
      hint_en: 'Assign fee in each of the three branches and print(fee) once after the if-elif-else block.',
      targetCode: 'age = int(input())\nif age < 8:\n    fee = 0\nelif age < 20:\n    fee = 1000\nelse:\n    fee = 2000\nprint(fee)',
      testCases: [
        {
          id: 1,
          input: '15',
          expectedOutput: '1000',
        },
        {
          id: 2,
          input: '6',
          expectedOutput: '0',
        },
        {
          id: 3,
          input: '25',
          expectedOutput: '2000',
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸을 채워 무게(kg)가 5 이하이면 3000, 15 이하이면 5000, 15 초과이면 8000을 cost에 저장하고 출력해보세요. (예: 12 -> 5000)',
      prompt_en: 'Fill in the blanks so kg <= 5 sets cost=3000, kg <= 15 sets cost=5000, and >15 sets cost=8000.',
      hint_ko: '추가 조건 키워드 elif와 15 이하를 뜻하는 비교 기호 <=를 각각 입력하세요.',
      hint_en: 'Enter elif and <= on line 4.',
      templateCode: 'kg = int(input())\nif kg <= 5:\n    cost = 3000\n§§§§ kg §§ 15:\n    cost = 5000\nelse:\n    cost = 8000\nprint(cost)',
      targetCode: 'kg = int(input())\nif kg <= 5:\n    cost = 3000\nelif kg <= 15:\n    cost = 5000\nelse:\n    cost = 8000\nprint(cost)',
      testCases: [
        {
          id: 1,
          input: '12',
          expectedOutput: '5000',
        },
        {
          id: 2,
          input: '4',
          expectedOutput: '3000',
        },
        {
          id: 3,
          input: '20',
          expectedOutput: '8000',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 11단계: 버그 수정 (fix_bug) - else if 오타를 파이썬 elif로 교정
    // ------------------------------------------------------------------------
    {
      id: 11,
      step: 11,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '파이썬에서 허용되지 않는 다중 조건 표기(else if)로 발생한 문법 오류(SyntaxError)를 수정해보세요. (예: 0 입력 시 Zero 출력)',
      prompt_en: 'Fix the SyntaxError caused by writing else if instead of the Python keyword (e.g., 0 -> Zero).',
      hint_ko: '파이썬에서는 else if를 두 단어로 띄어 쓰지 않고 네 글자로 줄인 elif 키워드를 사용합니다.',
      hint_en: 'Python spells "else if" as the single four-letter keyword elif.',
      templateCode: 'n = int(input())\nif n > 0:\n    print("Plus")\nelse if n == 0:\n    print("Zero")\nelse:\n    print("Minus")',
      targetCode: 'n = int(input())\nif n > 0:\n    print("Plus")\nelif n == 0:\n    print("Zero")\nelse:\n    print("Minus")',
      testCases: [
        {
          id: 1,
          input: '0',
          expectedOutput: 'Zero',
        },
        {
          id: 2,
          input: '9',
          expectedOutput: 'Plus',
        },
        {
          id: 3,
          input: '-4',
          expectedOutput: 'Minus',
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
      prompt_ko: 'if-elif-else 구조의 마지막 else: 아래에 들여쓰기에 맞춰 한 줄을 추가하여 80 미만일 때 C를 출력해보세요. (예: 75 -> C)',
      prompt_en: 'Type the code and add an indented line under else: to print C when s < 80.',
      hint_ko: '마지막 else: 다음 줄에서 공백 4칸을 들여쓴 뒤 print("C")를 입력하세요.',
      hint_en: 'Indent by 4 spaces under else: and write print("C").',
      templateCode: 's = int(input())\nif s >= 90:\n    print("A")\nelif s >= 80:\n    print("B")\nelse:\n    §§§§§§§§§§',
      targetCode: 's = int(input())\nif s >= 90:\n    print("A")\nelif s >= 80:\n    print("B")\nelse:\n    print("C")',
      testCases: [
        {
          id: 1,
          input: '75',
          expectedOutput: 'C',
        },
        {
          id: 2,
          input: '85',
          expectedOutput: 'B',
        },
        {
          id: 3,
          input: '95',
          expectedOutput: 'A',
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
      hint_ko: '첫 묶음(if-elif)에서는 x >= 90이 참이라 A만 출력되고 elif는 건너뜁니다. 이어지는 두 번째 if x >= 80:은 새로운 독립 if문이므로 참이 되어 Pass도 출력됩니다.',
      hint_en: 'In the first if-elif, x >= 90 prints A and skips elif. The second if x >= 80: is independent, so it also runs and prints Pass.',
      targetCode: 'x = 95\nif x >= 90:\n    print("A")\nelif x >= 80:\n    print("B")\nif x >= 80:\n    print("Pass")',
      choices: ['A\nPass', 'A\nB\nPass', 'A', 'B\nPass'],
      correctChoiceIndex: 0,
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'A\nPass',
        },
      ],
    },
  ],
};
