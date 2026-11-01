import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_18: PracticeRound = {
  "id": "py-basic-r18",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 18,
  "title_ko": "18레벨: 논리 연산자 (and, or, not)",
  "title_en": "Level 18: Logical Operators (and, or, not)",
  "description_ko": "논리 연산자 and, or, not을 비교 연산자 및 bool()과 결합해 복합 조건을 판별합니다.",
  "description_en": "Combine logical operators (and, or, not) with comparisons and bool() to evaluate conditions.",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "method",
    "type"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "age에 20, ticket에 True를 저장하고 age >= 18 and ticket을 출력해 동시 만족 여부를 확인해보세요.",
      "prompt_en": "Set age to 20 and ticket to True, then print age >= 18 and ticket.",
      "hint_ko": "and 연산자는 양쪽 조건이 모두 참(True)일 때만 전체 결과가 True가 됩니다.",
      "hint_en": "The and operator evaluates to True only when both sides are True.",
      "targetCode": "age = 20\nticket = True\nprint(age >= 18 and ticket)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 두 조건을 모두 만족해야 참이 되는 논리 키워드를 채워 두 점수가 모두 80 이상인지 출력해보세요.",
      "prompt_en": "Fill in the logical keyword requiring both conditions to hold so False is printed.",
      "hint_ko": "파이썬에서 \"그리고(둘 다 참)\"를 뜻하는 논리 연산자는 영단어 and입니다.",
      "hint_en": "Use the keyword and to require both kor >= 80 and eng >= 80.",
      "templateCode": "kor = 85\neng = 75\nprint(kor >= 80 §§§ eng >= 80)",
      "targetCode": "kor = 85\neng = 75\nprint(kor >= 80 and eng >= 80)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "False"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "is_vip에 False, coupon에 True를 저장한 뒤 is_vip or coupon의 결과를 출력해보세요.",
      "prompt_en": "Set is_vip = False and coupon = True, then print is_vip or coupon.",
      "hint_ko": "or 연산자는 둘 중 하나라도 True이면 전체 결과가 True가 됩니다.",
      "hint_en": "The or operator returns True when at least one side is True.",
      "targetCode": "is_vip = False\ncoupon = True\nprint(is_vip or coupon)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 참과 거짓을 반대로 뒤집는 논리 키워드를 채워 is_locked(False)의 반전값을 출력해보세요.",
      "prompt_en": "Fill in the logical negation keyword to invert is_locked (False) and print True.",
      "hint_ko": "파이썬에서는 느낌표(!) 대신 영단어 not을 값 앞에 붙여 참·거짓을 반전시킵니다.",
      "hint_en": "Place the keyword not before a boolean expression to invert it.",
      "templateCode": "is_locked = False\nprint(§§§ is_locked)",
      "targetCode": "is_locked = False\nprint(not is_locked)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "day에 \"Sun\"을 저장하고 day == \"Sat\" or day == \"Sun\"을 출력해 주말 여부를 확인해보세요.",
      "prompt_en": "Store \"Sun\" in day and print day == \"Sat\" or day == \"Sun\".",
      "hint_ko": "비교 연산(==)이 논리 연산(or)보다 먼저 수행되어 False or True가 계산됩니다.",
      "hint_en": "== binds tighter than or, evaluating False or True -> True.",
      "targetCode": "day = \"Sun\"\nprint(day == \"Sat\" or day == \"Sun\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸에 논리 키워드를 채워 체력이나 방어막 중 하나라도 남았는지와 체력이 0인지를 각각 출력해보세요.",
      "prompt_en": "Fill in the logical keywords to check if either hp or shield is truthy, and if hp is falsy.",
      "hint_ko": "하나라도 참인지 확인할 때는 or를, 참·거짓을 뒤집을 때는 not을 사용합니다.",
      "hint_en": "Enter or on line 3 and not on line 4.",
      "templateCode": "hp = 0\nshield = 25\nprint(bool(hp) §§ bool(shield))\nprint(§§§ bool(hp))",
      "targetCode": "hp = 0\nshield = 25\nprint(bool(hp) or bool(shield))\nprint(not bool(hp))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True\nTrue"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "score에 85를 저장하고 score >= 80 and score < 90을 출력해 80점대 구간인지 확인해보세요.",
      "prompt_en": "Store 85 in score and print score >= 80 and score < 90.",
      "hint_ko": "80 이상이면서 동시에 90 미만인지 확인할 때 두 비교식을 and로 연결합니다.",
      "hint_en": "Join score >= 80 and score < 90 with and to test the interval.",
      "targetCode": "score = 85\nprint(score >= 80 and score < 90)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸에 논리 키워드를 채워 레벨이 10 이상이면서 동시에 (열쇠가 있거나 VIP인지) 출력해보세요.",
      "prompt_en": "Fill in the two logical keywords to test lv >= 10 together with either key or vip.",
      "hint_ko": "필수 조건 연결에는 and를, 괄호 안 둘 중 하나 조건에는 or를 입력하세요.",
      "hint_en": "Use and before the parentheses and or inside (key or vip).",
      "templateCode": "lv = 12\nkey = False\nvip = True\nprint(lv >= 10 §§§ (key §§ vip))",
      "targetCode": "lv = 12\nkey = False\nvip = True\nprint(lv >= 10 and (key or vip))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "공백으로 입력된 두 수를 정수 x, y에 담고 x > 0 and y % 2 == 0의 결과를 출력해보세요.",
      "prompt_en": "Split two numbers into integers x, y and print x > 0 and y % 2 == 0.",
      "hint_ko": "a, b = input().split()으로 나눈 뒤 int(a), int(b)로 변환해 조건식을 출력하세요.",
      "hint_en": "Unpack a, b = input().split(), convert to int, and print(x > 0 and y % 2 == 0).",
      "targetCode": "a, b = input().split()\nx = int(a)\ny = int(b)\nprint(x > 0 and y % 2 == 0)",
      "testCases": [
        {
          "id": 1,
          "input": "5 8",
          "expectedOutput": "True"
        },
        {
          "id": 2,
          "input": "5 7",
          "expectedOutput": "False"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 실수 변환 함수와 동시 만족 논리 키워드를 채워 체온이 36.0 이상 37.5 이하인지 출력해보세요.",
      "prompt_en": "Fill in the float-casting function and logical keyword to check 36.0 <= temp <= 37.5.",
      "hint_ko": "실수 입력 변환에는 float를, 두 범위 조건을 동시에 만족시킬 때는 and를 씁니다.",
      "hint_en": "Enter float on line 1 and and on line 2.",
      "templateCode": "temp = §§§§§(input())\nprint(temp >= 36.0 §§§ temp <= 37.5)",
      "targetCode": "temp = float(input())\nprint(temp >= 36.0 and temp <= 37.5)",
      "testCases": [
        {
          "id": 1,
          "input": "36.5",
          "expectedOutput": "True"
        },
        {
          "id": 2,
          "input": "38.2",
          "expectedOutput": "False"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "파이썬에서 지원하지 않는 논리 기호 때문에 발생한 문법 오류를 수정해 두 점수 통과 여부를 출력해보세요.",
      "prompt_en": "Fix the SyntaxError caused by an invalid logical operator symbol so the check runs.",
      "hint_ko": "파이썬에서는 기호 && 대신 영단어 키워드 and를 사용해야 합니다.",
      "hint_en": "Replace && with the Python keyword and.",
      "templateCode": "a, b = input().split()\nx, y = int(a), int(b)\nprint(x >= 60 && y >= 60)",
      "targetCode": "a, b = input().split()\nx, y = int(a), int(b)\nprint(x >= 60 and y >= 60)",
      "testCases": [
        {
          "id": 1,
          "input": "70 80",
          "expectedOutput": "True"
        },
        {
          "id": 2,
          "input": "70 50",
          "expectedOutput": "False"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "정수 n을 입력받는 코드 아래에 한 줄을 추가하여 n이 양수이면서 3의 배수인지 출력해보세요.",
      "prompt_en": "Add one line below to print whether n is positive and divisible by 3.",
      "hint_ko": "둘째 줄에 print(n > 0 and n % 3 == 0)을 작성해보세요.",
      "hint_en": "Write print(n > 0 and n % 3 == 0) on line 2.",
      "templateCode": "n = int(input())\n§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "n = int(input())\nprint(n > 0 and n % 3 == 0)",
      "testCases": [
        {
          "id": 1,
          "input": "12",
          "expectedOutput": "True"
        },
        {
          "id": 2,
          "input": "-6",
          "expectedOutput": "False"
        },
        {
          "id": 3,
          "input": "7",
          "expectedOutput": "False"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "입력값으로 0 2.5가 주어질 때, 다음 파이썬 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "When 0 2.5 is given as input, select the exact output of the following Python code.",
      "hint_ko": "x=0이므로 bool(x)는 False가 되어 첫 줄 and는 False이고, 둘째 줄 not False는 True라 or 결과는 True입니다.",
      "hint_en": "x is 0 so bool(x) is False (line 4 -> False), while not bool(x) is True (line 5 -> True).",
      "targetCode": "a, b = input().split()\nx = int(a)\ny = float(b)\nprint(bool(x) and y > 1.0)\nprint(not bool(x) or x % 2 == 0)",
      "choices": [
        "True\nTrue",
        "False\nFalse",
        "True\nFalse",
        "False\nTrue"
      ],
      "correctChoiceIndex": 3,
      "testCases": [
        {
          "id": 1,
          "input": "0 2.5",
          "expectedOutput": "False\nTrue"
        }
      ]
    }
  ]
};
