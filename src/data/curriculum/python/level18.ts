import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 18레벨: if 단일 조건문과 들여쓰기 (13단계 표준 구성)
// - [1,3,5,7,9단계] 블록 코딩 개념 도입 (ㄷ자 if 블록 사전 배치 활용)
// - [2,4,6,8,10단계] 빈칸 채우기 타이핑 실습 (fill_blank)
// - [11단계] 버그 수정 (fix_bug)
// - [12단계] 예제 아래 한 줄 코드 추가 작성 (one_line)
// - [13단계] 출력 결과 예측 4지선다 퀴즈 (predict_output)
// ============================================================================
export const PYTHON_LEVEL_18: PracticeRound = {
  id: 'py-basic-r18',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 18,
  title_ko: '18레벨: if 단일 조건문과 들여쓰기',
  title_en: 'Level 18: Single if Statements & Indentation',
  totalQuestions: 13,
  unlockedBlocks: ['print', 'variable', 'input', 'type', 'if'],
  questions: [
    // ------------------------------------------------------------------------
    // Pair 1 (1~2단계): if 조건문 기본 구조와 콜론(:), 들여쓰기
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      prompt_ko: 'score에 90을 저장하고, if 조건 칸에 score >= 80을 넣은 뒤 안쪽 print 블록에 "Pass"를 넣어 Pass를 출력해보세요.',
      prompt_en: 'Store 90 in score, put score >= 80 in the if condition, and put "Pass" inside the nested print block.',
      hint_ko: 'ㄷ자 모양 if 블록 안쪽에 끼워진 블록은 조건(score >= 80)이 참(True)일 때만 실행됩니다.',
      hint_en: 'Blocks nested inside the C-shaped if block run only when the condition (score >= 80) is True.',
      targetCode: 'score = 90\nif score >= 80:\n    print("Pass")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Pass',
        },
      ],
    },
    {
      id: 2,
      step: 2,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸에 조건문 키워드와 끝 기호를 채워 체력(hp)이 20 이하일 때 Danger가 출력되도록 완성해보세요.',
      prompt_en: 'Fill in the conditional keyword and trailing punctuation so Danger prints when hp is 20 or less.',
      hint_ko: '파이썬 조건문은 맨 앞에 if를 적고, 조건식 끝에는 반드시 콜론(:)을 붙인 뒤 다음 줄을 4칸 들여씁니다.',
      hint_en: 'Start a conditional statement with if, end the condition line with a colon (:), and indent the body by 4 spaces.',
      templateCode: 'hp = 10\n§§ hp <= 20§\n    print("Danger")',
      targetCode: 'hp = 10\nif hp <= 20:\n    print("Danger")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Danger',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 2 (3~4단계): 조건이 거짓(False)일 때 내부 건너뛰기 vs 바깥 코드 실행
    // ------------------------------------------------------------------------
    {
      id: 3,
      step: 3,
      type: 'block',
      prompt_ko: 'score에 60을 저장하고 if score >= 80: 안에는 "Pass", if 바깥 아래 print에는 "Done"을 넣어 Done만 출력되는지 확인해보세요.',
      prompt_en: 'Set score to 60, put "Pass" inside if score >= 80:, and put "Done" outside below it to verify only Done prints.',
      hint_ko: 'score(60) >= 80은 False이므로 if 안쪽의 "Pass"는 건너뛰고, if 바깥에 연결된 "Done"만 실행됩니다.',
      hint_en: 'Since 60 >= 80 is False, Python skips the indented "Pass" and runs "Done" outside the if block.',
      targetCode: 'score = 60\nif score >= 80:\n    print("Pass")\nprint("Done")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Done',
        },
      ],
    },
    {
      id: 4,
      step: 4,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 비교 기호를 채워 age(15)가 19 이상일 때만 Adult를 출력하고, 조건이 거짓인 지금은 바깥의 End만 출력되도록 해보세요.',
      prompt_en: 'Fill in the comparison operator so Adult prints only when age >= 19, printing only End for age = 15.',
      hint_ko: '19 이상을 뜻하는 비교 연산자 >=를 넣으면 15 >= 19가 False가 되어 들여쓰기된 줄을 건너뛰고 End만 출력됩니다.',
      hint_en: 'Use >= so 15 >= 19 is False, skipping the indented print("Adult") line and printing only End.',
      templateCode: 'age = 15\nif age §§ 19:\n    print("Adult")\nprint("End")',
      targetCode: 'age = 15\nif age >= 19:\n    print("Adult")\nprint("End")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'End',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 3 (5~6단계): if문 내부에 여러 줄 작성하기 (같은 들여쓰기 블록)
    // ------------------------------------------------------------------------
    {
      id: 5,
      step: 5,
      type: 'block',
      prompt_ko: 'price에 6000을 저장하고, if price >= 5000: 안에서 price -= 1000과 print("Sale")을 실행한 뒤 바깥에서 price를 출력해 Sale과 5000을 확인해보세요.',
      prompt_en: 'Set price to 6000; inside if price >= 5000:, run price -= 1000 and print("Sale"), then print price outside.',
      hint_ko: 'if 블록 안쪽의 변수 블록에서 price, -=, 1000을 설정하고 그 아래 안쪽 print에 "Sale", 바깥 print에 price를 넣으세요.',
      hint_en: 'Inside if, set price -= 1000 and print("Sale"); outside if, print(price).',
      targetCode: 'price = 6000\nif price >= 5000:\n    price -= 1000\n    print("Sale")\nprint(price)',
      expectedVariables: { price: 5000 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Sale\n5000',
        },
      ],
    },
    {
      id: 6,
      step: 6,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 복합 대입 기호를 채워 point가 100 이상일 때 보너스 50을 누적해 더하고 Bonus와 150이 차례로 출력되도록 해보세요.',
      prompt_en: 'Fill in the compound operator so when point >= 100, 50 is added and Bonus followed by 150 is printed.',
      hint_ko: '같은 4칸 들여쓰기로 정렬된 두 줄은 모두 if문에 속합니다. point에 50을 더하는 +=를 입력하세요.',
      hint_en: 'Both 4-space indented lines belong to the if suite. Enter += to add 50 to point.',
      templateCode: 'point = 100\nif point >= 100:\n    point §§ 50\n    print("Bonus")\nprint(point)',
      targetCode: 'point = 100\nif point >= 100:\n    point += 50\n    print("Bonus")\nprint(point)',
      expectedVariables: { point: 150 },
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Bonus\n150',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 4 (7~8단계): int(input())과 if문을 결합한 입력값 판별
    // ------------------------------------------------------------------------
    {
      id: 7,
      step: 7,
      type: 'block',
      prompt_ko: '정수 n을 입력받아 n > 0이면 "Positive"를 출력하고, 마지막에 항상 바깥에서 "Checked"를 출력해보세요. (예: 15 입력 시 Positive와 Checked 출력)',
      prompt_en: 'Read integer n; if n > 0 print "Positive", and always print "Checked" at the end (e.g., 15 -> Positive then Checked).',
      hint_ko: 'n = int(input()) 아래 if 조건에 n > 0, 안쪽 print에 "Positive", 바깥 print에 "Checked"를 입력하세요.',
      hint_en: 'Set n = int(input()), put n > 0 in if, "Positive" inside if, and "Checked" outside below if.',
      targetCode: 'n = int(input())\nif n > 0:\n    print("Positive")\nprint("Checked")',
      testCases: [
        {
          id: 1,
          input: '15',
          expectedOutput: 'Positive\nChecked',
        },
        {
          id: 2,
          input: '-5',
          expectedOutput: 'Checked',
        },
        {
          id: 3,
          input: '0',
          expectedOutput: 'Checked',
        },
      ],
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸을 채워 입력받은 정수 n이 짝수일 때만 Even을 출력하고, 마지막에는 항상 Done이 출력되도록 해보세요. (예: 8 -> Even, Done / 7 -> Done)',
      prompt_en: 'Fill in the blank so Even prints only when input integer n is even, followed always by Done.',
      hint_ko: 'n을 2로 나눈 나머지가 0과 같은지 비교하는 연산자 ==를 입력하세요.',
      hint_en: 'Enter == to check whether n % 2 equals 0.',
      templateCode: 'n = int(input())\nif n % 2 §§ 0:\n    print("Even")\nprint("Done")',
      targetCode: 'n = int(input())\nif n % 2 == 0:\n    print("Even")\nprint("Done")',
      testCases: [
        {
          id: 1,
          input: '8',
          expectedOutput: 'Even\nDone',
        },
        {
          id: 2,
          input: '7',
          expectedOutput: 'Done',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 5 (9~10단계): 독립된 여러 if문의 순차 검사 및 실행
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'block',
      prompt_ko: 'n에 6을 저장한 뒤, 첫째 if에서 n % 2 == 0이면 "2x", 둘째 if에서 n % 3 == 0이면 "3x"를 출력해 두 줄 모두 실행되는지 확인해보세요.',
      prompt_en: 'Set n to 6; print "2x" in the first if (n % 2 == 0) and "3x" in the second if (n % 3 == 0) so both print.',
      hint_ko: '독립된 두 개의 if문은 위에서부터 각각 따로 조건을 검사하므로, 6처럼 둘 다 참이면 2x와 3x가 모두 출력됩니다.',
      hint_en: 'Two separate if statements are evaluated independently, so for n = 6 both "2x" and "3x" run.',
      targetCode: 'n = 6\nif n % 2 == 0:\n    print("2x")\nif n % 3 == 0:\n    print("3x")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '2x\n3x',
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸을 채워 점수가 80 이상이면 Pass를 출력하고, 100점이면 추가로 Perfect까지 출력되도록 두 번째 조건문을 완성해보세요.',
      prompt_en: 'Fill in the blanks so scores >= 80 print Pass and a score of 100 additionally prints Perfect.',
      hint_ko: '독립적으로 한 번 더 검사하는 단일 조건문이므로 키워드 if와 조건 끝 콜론(:)을 입력하세요.',
      hint_en: 'Start the second independent check with if and end the condition with a colon (:).',
      templateCode: 'score = int(input())\nif score >= 80:\n    print("Pass")\n§§ score == 100§\n    print("Perfect")',
      targetCode: 'score = int(input())\nif score >= 80:\n    print("Pass")\nif score == 100:\n    print("Perfect")',
      testCases: [
        {
          id: 1,
          input: '100',
          expectedOutput: 'Pass\nPerfect',
        },
        {
          id: 2,
          input: '85',
          expectedOutput: 'Pass',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 11단계: 버그 수정 (fix_bug) - if 조건식 뒤 콜론(:) 누락 SyntaxError 교정
    // ------------------------------------------------------------------------
    {
      id: 11,
      step: 11,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '조건문 줄 끝의 필수 기호가 빠져 발생한 문법 오류(SyntaxError)를 수정하여 10 이상이 입력될 때 Big을 출력해보세요.',
      prompt_en: 'Fix the SyntaxError caused by a missing symbol at the end of the if line so Big prints when n >= 10.',
      hint_ko: '파이썬의 if 조건문 줄 맨 끝에는 반드시 콜론(:)이 붙어야 다음 줄의 들여쓰기 블록이 시작됩니다.',
      hint_en: 'An if header line in Python must end with a colon (:).',
      templateCode: 'n = int(input())\nif n >= 10\n    print("Big")',
      targetCode: 'n = int(input())\nif n >= 10:\n    print("Big")',
      testCases: [
        {
          id: 1,
          input: '15',
          expectedOutput: 'Big',
        },
        {
          id: 2,
          input: '10',
          expectedOutput: 'Big',
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
      prompt_ko: 'if 조건문 헤더 아래에 들여쓰기에 맞춰 한 줄을 추가하여 n이 60 이상일 때 Clear가 출력되도록 완성해보세요. (예: 75 -> Clear)',
      prompt_en: 'Type the first two lines and add an indented line below if n >= 60: to print Clear.',
      hint_ko: 'if n >= 60: 다음 줄에서 공백 4칸을 들여쓴 뒤 print("Clear")를 입력하세요.',
      hint_en: 'Indent by 4 spaces on line 3 and write print("Clear").',
      templateCode: 'n = int(input())\nif n >= 60:\n    §§§§§§§§§§§§§§',
      targetCode: 'n = int(input())\nif n >= 60:\n    print("Clear")',
      testCases: [
        {
          id: 1,
          input: '75',
          expectedOutput: 'Clear',
        },
        {
          id: 2,
          input: '60',
          expectedOutput: 'Clear',
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
      hint_ko: 'x=12일 때 첫째 조건 x > 15는 거짓이라 건너뛰고, 둘째 조건 x >= 10은 참이므로 12 + 5 = 17이 출력됩니다.',
      hint_en: 'For x = 12, x > 15 is False (skipped), while x >= 10 is True so x += 5 makes x = 17.',
      targetCode: 'x = 12\nif x > 15:\n    x += 10\nif x >= 10:\n    x += 5\nprint(x)',
      choices: ['17', '22', '27', '12'],
      correctChoiceIndex: 0,
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '17',
        },
      ],
    },
  ],
};
