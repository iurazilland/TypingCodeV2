import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 17레벨: 논리 연산자 (and, or, not)와 범위 조건식 (13단계 표준 구성)
// - [1,3,5,7,9단계] 블록 코딩 개념 도입 (사전 배치 블록 활용)
// - [2,4,6,8,10단계] 빈칸 채우기 타이핑 실습 (fill_blank)
// - [11단계] 버그 수정 (fix_bug)
// - [12단계] 예제 아래 한 줄 코드 추가 작성 (one_line)
// - [13단계] 출력 결과 예측 4지선다 퀴즈 (predict_output)
// ============================================================================
export const PYTHON_LEVEL_17: PracticeRound = {
  id: 'py-basic-r17',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 17,
  title_ko: '17레벨: 논리 연산자 (and, or, not)',
  title_en: 'Level 17: Logical Operators (and, or, not)',
  totalQuestions: 13,
  unlockedBlocks: ['print', 'variable'],
  questions: [
    // ------------------------------------------------------------------------
    // Pair 1 (1~2단계): and 연산자 (두 조건이 모두 참일 때만 True)
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      prompt_ko: 'age에 20, ticket에 True를 저장한 뒤, print 블록에 age >= 18 and ticket을 넣어 두 조건이 모두 참인지 확인해보세요.',
      prompt_en: 'Set age to 20 and ticket to True, then print age >= 18 and ticket to verify both conditions hold (True).',
      hint_ko: 'and 연산자는 왼쪽 조건(20 >= 18)과 오른쪽 값(True)이 둘 다 참일 때만 True가 됩니다.',
      hint_en: 'The and operator returns True only when both the left and right sides are True.',
      targetCode: 'age = 20\nticket = True\nprint(age >= 18 and ticket)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'True',
        },
      ],
    },
    {
      id: 2,
      step: 2,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 두 조건을 동시에 만족해야 참이 되는 논리 키워드를 채워 국어와 영어가 모두 80점 이상인지(False) 출력해보세요.',
      prompt_en: 'Fill in the logical keyword requiring both conditions to be true to check if kor and eng are both >= 80 (False).',
      hint_ko: '파이썬에서 "그리고(둘 다 참)"를 뜻하는 논리 연산자 키워드는 영단어 and입니다.',
      hint_en: 'In Python, use the keyword and to require both conditions to be True.',
      templateCode: 'kor = 85\neng = 75\nprint(kor >= 80 §§§ eng >= 80)',
      targetCode: 'kor = 85\neng = 75\nprint(kor >= 80 and eng >= 80)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'False',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 2 (3~4단계): or 연산자 (하나라도 참이면 True)
    // ------------------------------------------------------------------------
    {
      id: 3,
      step: 3,
      type: 'block',
      prompt_ko: 'is_vip에 False, coupon에 True를 저장한 뒤, print에 is_vip or coupon을 넣어 하나라도 참일 때 True가 출력되는지 확인해보세요.',
      prompt_en: 'Set is_vip to False and coupon to True, then print is_vip or coupon to verify it outputs True.',
      hint_ko: 'or 연산자는 양쪽 중 하나만 True여도 전체 결과가 True가 됩니다.',
      hint_en: 'The or operator returns True as soon as at least one side is True.',
      targetCode: 'is_vip = False\ncoupon = True\nprint(is_vip or coupon)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'True',
        },
      ],
    },
    {
      id: 4,
      step: 4,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 둘 중 하나라도 만족하면 참이 되는 논리 키워드를 채워 day("Sun")가 주말("Sat" 또는 "Sun")인지 판별해 True를 출력해보세요.',
      prompt_en: 'Fill in the logical keyword for either condition to check if day ("Sun") is "Sat" or "Sun" (True).',
      hint_ko: '파이썬에서 "또는(하나라도 참)"을 뜻하는 논리 연산자 키워드는 두 글자 영단어 or입니다.',
      hint_en: 'Use the two-letter keyword or to check if at least one condition is True.',
      templateCode: 'day = "Sun"\nprint(day == "Sat" §§ day == "Sun")',
      targetCode: 'day = "Sun"\nprint(day == "Sat" or day == "Sun")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'True',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 3 (5~6단계): not 연산자 (참과 거짓 반전)
    // ------------------------------------------------------------------------
    {
      id: 5,
      step: 5,
      type: 'block',
      prompt_ko: '변수 is_locked에 False를 저장하고, print 블록에 not is_locked를 넣어 반전된 결과 True가 출력되는지 확인해보세요.',
      prompt_en: 'Store False in is_locked and print not is_locked to verify the inverted result True.',
      hint_ko: 'not 연산자는 True를 False로, False를 True로 정반대로 뒤집어 줍니다.',
      hint_en: 'The not operator flips True to False and False to True.',
      targetCode: 'is_locked = False\nprint(not is_locked)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'True',
        },
      ],
    },
    {
      id: 6,
      step: 6,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 불리언 값을 반대로 뒤집는 논리 키워드를 채워 rain(True)을 반전시킨 결과 False를 출력해보세요.',
      prompt_en: 'Fill in the logical negation keyword to invert rain (True) and print False.',
      hint_ko: '파이썬에서 참/거짓을 반전시킬 때는 느낌표(!)가 아니라 세 글자 영단어 not을 앞에 붙입니다.',
      hint_en: 'In Python, use the keyword not (instead of !) to negate a boolean value.',
      templateCode: 'rain = True\nprint(§§§ rain)',
      targetCode: 'rain = True\nprint(not rain)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'False',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 4 (7~8단계): 구간 범위 조건식과 파이썬 연쇄 비교 (a <= x <= b)
    // ------------------------------------------------------------------------
    {
      id: 7,
      step: 7,
      type: 'block',
      prompt_ko: 'score에 85를 저장한 뒤, print 블록에 score >= 80 and score < 90을 넣어 80점대 구간인지 판별한 결과 True를 확인해보세요.',
      prompt_en: 'Store 85 in score and print score >= 80 and score < 90 to verify it falls in the 80s range (True).',
      hint_ko: '80 이상이면서 동시에 90 미만인지 확인할 때 score >= 80 and score < 90처럼 두 비교식을 and로 묶습니다.',
      hint_en: 'Combine score >= 80 and score < 90 with and to test whether score is in [80, 90).',
      targetCode: 'score = 85\nprint(score >= 80 and score < 90)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'True',
        },
      ],
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸에 비교 기호를 채워 수학 부등식처럼 temp(22)가 18 이상 26 이하 범위 안에 있는지 한 번에 비교해 True를 출력해보세요.',
      prompt_en: 'Fill in the two comparison operators to check 18 <= temp <= 26 in a chained comparison and print True.',
      hint_ko: '파이썬에서는 18 <= temp <= 26처럼 비교 연산자를 양쪽에 연달아 적어 구간을 간결하게 검사할 수 있습니다.',
      hint_en: 'Python supports chained comparisons directly, such as 18 <= temp <= 26.',
      templateCode: 'temp = 22\nprint(18 §§ temp §§ 26)',
      targetCode: 'temp = 22\nprint(18 <= temp <= 26)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'True',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 5 (9~10단계): 복합 논리식과 괄호를 이용한 우선순위 제어
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'block',
      prompt_ko: 'card에 False, cash에 True, open_now에 True를 저장하고, (card or cash) and open_now를 출력해 결제 가능 여부 True를 확인해보세요.',
      prompt_en: 'Set card=False, cash=True, open_now=True, and print (card or cash) and open_now to verify True.',
      hint_ko: '괄호 안 (card or cash)가 먼저 계산되어 True가 되고, 이어서 True and open_now가 계산되어 True가 됩니다.',
      hint_en: '(card or cash) evaluates first to True, and True and open_now evaluates to True.',
      targetCode: 'card = False\ncash = True\nopen_now = True\nprint((card or cash) and open_now)',
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
      prompt_ko: '두 빈칸에 논리 키워드를 채워 레벨이 10 이상이면서 동시에 (열쇠가 있거나 VIP인 경우)인지 판별해 True를 출력해보세요.',
      prompt_en: 'Fill in the two logical keywords to check lv >= 10 while also having either key or vip (True).',
      hint_ko: '레벨 조건과 괄호 조건을 모두 만족해야 하므로 첫째 빈칸은 and, 열쇠 또는 VIP 중 하나만 있으면 되므로 둘째 빈칸은 or입니다.',
      hint_en: 'Use and before the parentheses and or inside (key or vip).',
      templateCode: 'lv = 12\nkey = False\nvip = True\nprint(lv >= 10 §§§ (key §§ vip))',
      targetCode: 'lv = 12\nkey = False\nvip = True\nprint(lv >= 10 and (key or vip))',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'True',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 11단계: 버그 수정 (fix_bug) - && 기호 오용 SyntaxError 교정
    // ------------------------------------------------------------------------
    {
      id: 11,
      step: 11,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '파이썬에서 지원하지 않는 논리 기호(&&)를 사용해 발생한 문법 오류(SyntaxError)를 수정하여 True가 출력되도록 해보세요.',
      prompt_en: 'Fix the SyntaxError caused by using && instead of the Python logical operator so True prints cleanly.',
      hint_ko: '파이썬에서는 &&나 || 기호 대신 영단어 키워드 and와 or를 사용합니다. &&를 and로 고쳐보세요.',
      hint_en: 'Python uses the English keywords and / or instead of && / ||. Replace && with and.',
      templateCode: 'x = 15\nprint(x >= 10 && x <= 20)',
      targetCode: 'x = 15\nprint(x >= 10 and x <= 20)',
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
      prompt_ko: '변수 n을 선언한 코드 아래에 한 줄을 추가하여 n이 0보다 크면서 동시에 3으로 나눈 나머지가 0인지 판별한 결과 True를 출력해보세요.',
      prompt_en: 'Type line 1 and add a line below checking whether n > 0 and n % 3 == 0 to print True.',
      hint_ko: '첫째 줄을 입력하고 Enter를 누른 뒤, 둘째 줄에 print(n > 0 and n % 3 == 0)을 입력하세요.',
      hint_en: 'Type line 1, press Enter, and write print(n > 0 and n % 3 == 0) on line 2.',
      templateCode: 'n = 12\n§§§§§§§§§§§§§§§§§§§§§§§§§§§',
      targetCode: 'n = 12\nprint(n > 0 and n % 3 == 0)',
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
      hint_ko: 'True and False는 둘 다 참이 아니므로 False, True or False는 하나가 참이므로 True, not False는 반전되어 True입니다.',
      hint_en: 'True and False -> False; True or False -> True; not False -> True.',
      targetCode: 'a = True\nb = False\nprint(a and b)\nprint(a or b)\nprint(not b)',
      choices: [
        'False\nTrue\nTrue',
        'True\nTrue\nFalse',
        'False\nFalse\nTrue',
        'False\nTrue\nFalse',
      ],
      correctChoiceIndex: 0,
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'False\nTrue\nTrue',
        },
      ],
    },
  ],
};

