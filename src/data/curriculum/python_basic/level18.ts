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
  "totalQuestions": 15,
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] and 연산자로 나이가 18세 이상이고 티켓이 있는지 동시에 확인하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the blocks to check whether age >= 18 and ticket both hold True.",
      "hint_ko": "변수에 값을 저장한 뒤 print() 안에서 비교식과 불리언 변수를 and로 연결해 출력합니다.",
      "hint_en": "Store the values in variables, then join the comparison and boolean variable with and inside print().",
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
      "prompt_ko": "[빈칸 채우기] 빈칸에 동시 만족 논리 키워드를 채워 두 점수가 모두 80 이상인지 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the logical keyword requiring both conditions to hold so False is printed.",
      "hint_ko": "양쪽 조건을 모두 만족해야 할 때는 영어로 그리고를 뜻하는 세 글자 소문자 논리 키워드로 두 식을 연결합니다.",
      "hint_en": "Join both comparisons using the three-letter lowercase English word meaning \"both / also\".",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] or 연산자로 VIP이거나 쿠폰이 있는지 확인해 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the blocks to check whether either is_vip or coupon is True.",
      "hint_ko": "두 조건이 모두 False일 때만 전체 결과가 False가 되며, 하나라도 True이면 True가 출력됩니다.",
      "hint_en": "The result is False only when both sides are False; if either side is True, True is printed.",
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
      "prompt_ko": "[빈칸 채우기] 빈칸에 참과 거짓을 반대로 뒤집는 논리 키워드를 채워 is_locked의 반전값을 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the logical negation keyword to invert is_locked (False) and print True.",
      "hint_ko": "참과 거짓을 반대로 뒤집을 때는 기호 대신 영어로 부정을 뜻하는 세 글자 소문자 키워드를 값 앞에 붙입니다.",
      "hint_en": "Instead of a punctuation symbol, place the three-letter lowercase English word for negation right before the value.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 같음 비교(==) 두 개를 or 연산자로 연결해 주말인지 판별하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the blocks to check if day equals \"Sat\" or day equals \"Sun\".",
      "hint_ko": "특정 변수가 여러 값 중 하나와 일치하는지 확인할 때도 각 비교식을 완결된 형태로 적은 뒤 or로 연결해야 합니다.",
      "hint_en": "When testing a variable against multiple values, write each full equality comparison and join them with or.",
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
      "prompt_ko": "[빈칸 채우기] 두 빈칸에 논리 키워드를 채워 체력이나 방어막이 남았는지와 체력이 0인지를 각각 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the logical keywords to check if hp or shield is truthy, and if hp is falsy.",
      "hint_ko": "셋째 줄에는 영어로 또는을 뜻하는 두 글자 키워드를, 넷째 줄에는 부정을 뜻하는 세 글자 키워드를 적어보세요.",
      "hint_en": "Use the two-letter English word meaning \"either\" on line 3, and the three-letter negation word on line 4.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 하한 비교(>= 80)와 상한 비교(< 90)를 and로 연결해 점수 구간을 확인하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the blocks to check if score is at least 80 and less than 90 using and.",
      "hint_ko": "왼쪽 조건과 오른쪽 조건이 모두 참이어야 해당 점수 구간에 속한 것으로 판정되어 True가 출력됩니다.",
      "hint_en": "Both the lower-bound and upper-bound checks must evaluate to True for the range check to print True.",
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
      "prompt_ko": "[빈칸 채우기] 두 빈칸에 논리 키워드를 채워 레벨이 10 이상이면서 동시에 (열쇠가 있거나 VIP인지) 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the two logical keywords to test lv >= 10 together with either key or vip.",
      "hint_ko": "레벨 조건과 괄호 조건을 동시에 만족해야 하므로 앞에는 그리고를 뜻하는 세 글자를, 괄호 안 선택 조건에는 또는을 뜻하는 두 글자를 넣습니다.",
      "hint_en": "Require both the level check and the parenthesized group with the three-letter conjunction word, and allow either option inside the parentheses with the two-letter word.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 두 정수 x, y에 대해 x > 0과 y % 2 == 0을 and로 결합해 출력해보세요.",
      "prompt_en": "[Block] Combine x > 0 and y % 2 == 0 with and and print the result.",
      "hint_ko": "산술 연산(%)이 비교 연산(>, ==)보다 먼저 수행되고, 마지막에 and가 두 조건의 참·거짓을 종합합니다.",
      "hint_en": "Arithmetic (%) runs before comparisons (>, ==), and finally and combines both boolean results.",
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
      "prompt_ko": "[빈칸 채우기] 정수 변환 함수와 논리 키워드를 채워 체온(temp)이 36 이상 37 이하인지 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the int-casting function and logical keyword to check 36 <= temp <= 37.",
      "hint_ko": "첫째 줄에는 정수(integer)의 앞 세 글자 변환 함수를, 둘째 줄에는 두 범위를 동시에 만족시키는 그리고 키워드를 적어보세요.",
      "hint_en": "Convert the input using the first three letters of \"integer\" on line 1, and join both bounds on line 2 with the three-letter conjunction keyword.",
      "templateCode": "temp = §§§(input())\nprint(temp >= 36 §§§ temp <= 37)",
      "targetCode": "temp = int(input())\nprint(temp >= 36 and temp <= 37)",
      "testCases": [
        {
          "id": 1,
          "input": "36",
          "expectedOutput": "True"
        },
        {
          "id": 2,
          "input": "38",
          "expectedOutput": "False"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 두 점수 x, y가 모두 60 이상일 때 True가 출력되도록 잘못된 비교 연산자를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the comparison operator so True prints when both x and y are at least 60.",
      "hint_ko": "두 번째 조건이 y <= 60으로 되어 있어 60 이상일 때 거짓이 됩니다. y >= 60으로 부등호 방향을 고쳐보세요.",
      "hint_en": "The second check uses <= instead of >=; change y <= 60 to y >= 60.",
      "templateCode": "a, b = input().split()\nx, y = int(a), int(b)\nprint(x >= 60 and y <= 60)",
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
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 정수 n이 10 이상 20 이하일 때만 True가 출력되도록 상한 비교 연산자를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the upper-bound comparison operator so True prints when 10 <= n <= 20.",
      "hint_ko": "오른쪽 조건이 n >= 20으로 되어 있습니다. 20 이하를 검사하도록 n <= 20으로 수정해보세요.",
      "hint_en": "Change the second comparison from n >= 20 to n <= 20 so it tests the upper bound.",
      "templateCode": "n = int(input())\nprint(n >= 10 and n >= 20)",
      "targetCode": "n = int(input())\nprint(n >= 10 and n <= 20)",
      "testCases": [
        {
          "id": 1,
          "input": "15",
          "expectedOutput": "True"
        },
        {
          "id": 2,
          "input": "25",
          "expectedOutput": "False"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] n이 양수(> 0)이면서 3의 배수(% 3 == 0)인지 판별해 변수 ok에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the line that stores whether n > 0 and n % 3 == 0 in variable ok.",
      "hint_ko": "ok = n > 0 and n % 3 == 0 형태로 두 비교식을 and로 묶어 변수 ok에 저장해보세요.",
      "hint_en": "Assign the combined check to ok using ok = n > 0 and n % 3 == 0.",
      "templateCode": "n = int(input())\n§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(ok)",
      "targetCode": "n = int(input())\nok = n > 0 and n % 3 == 0\nprint(ok)",
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
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] day가 \"Sat\"이거나 \"Sun\"인지 판별해 변수 is_wk에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the line storing whether day is \"Sat\" or \"Sun\" in is_wk.",
      "hint_ko": "is_wk = day == \"Sat\" or day == \"Sun\" 형태로 두 같음 비교를 or로 연결해보세요.",
      "hint_en": "Use is_wk = day == \"Sat\" or day == \"Sun\" to store the weekend check.",
      "templateCode": "day = input()\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(is_wk)",
      "targetCode": "day = input()\nis_wk = day == \"Sat\" or day == \"Sun\"\nprint(is_wk)",
      "testCases": [
        {
          "id": 1,
          "input": "Sun",
          "expectedOutput": "True"
        },
        {
          "id": 2,
          "input": "Mon",
          "expectedOutput": "False"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 파이썬 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] When 0 2 is given as input, select the exact output of the following Python code.",
      "hint_ko": "정수 0을 불리언으로 바꾼 값이 참인지 거짓인지 먼저 판단한 뒤, 넷째 줄의 동시 만족 연산과 다섯째 줄의 반전 및 선택 연산을 차례로 추적해보세요.",
      "hint_en": "First determine the boolean value of integer 0, then evaluate the conjunction on line 4 and the negated disjunction on line 5.",
      "targetCode": "a, b = input().split()\nx = int(a)\ny = int(b)\nprint(bool(x) and y > 1)\nprint(not bool(x) or x % 2 == 0)",
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
          "input": "0 2",
          "expectedOutput": "False\nTrue"
        }
      ]
    }
  ]
};
