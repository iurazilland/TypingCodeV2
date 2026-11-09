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
      "prompt_ko": "and 연산자는 양쪽 조건이 모두 참(True)일 때만 최종 결과를 True로 판단합니다. 블록의 코드를 따라 입력해 동시 만족 결과를 확인해보세요.",
      "prompt_en": "The and operator evaluates to True only when both conditions on either side are True. Trace the block code to check the result.",
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
      "prompt_ko": "빈칸에 두 조건을 모두 만족해야 참이 되는 논리 키워드를 채워 두 점수가 모두 80 이상인지 출력해보세요.",
      "prompt_en": "Fill in the logical keyword requiring both conditions to hold so False is printed.",
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
      "prompt_ko": "or 연산자는 양쪽 조건 중 어느 하나라도 참(True)이면 전체 결과를 True로 판단합니다. 블록에 표시된 코드를 따라 쳐보세요.",
      "prompt_en": "The or operator evaluates to True whenever at least one of the two conditions is True. Trace the code shown in the blocks.",
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
      "prompt_ko": "빈칸에 참과 거짓을 반대로 뒤집는 논리 키워드를 채워 is_locked(False)의 반전값을 출력해보세요.",
      "prompt_en": "Fill in the logical negation keyword to invert is_locked (False) and print True.",
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
      "prompt_ko": "비교 연산자(==)는 논리 연산자(or)보다 먼저 계산되므로, 두 같음 비교를 각각 판별한 뒤 하나라도 참인지 확인합니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Comparison operators (==) run before logical operators (or), evaluating each equality check first before testing if either holds. Trace the block code.",
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
      "prompt_ko": "두 빈칸에 논리 키워드를 채워 체력이나 방어막 중 하나라도 남았는지와 체력이 0인지를 각각 출력해보세요.",
      "prompt_en": "Fill in the logical keywords to check if either hp or shield is truthy, and if hp is falsy.",
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
      "prompt_ko": "숫자가 특정 구간에 속하는지 확인할 때는 하한 비교식(>=)과 상한 비교식(<)을 and 연산자로 연결합니다. 블록 코드를 따라 입력해 구간 판별 결과를 확인해보세요.",
      "prompt_en": "To check if a number falls within a range, connect the lower-bound (>=) and upper-bound (<) comparisons with and. Trace the block code to verify.",
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
      "prompt_ko": "두 빈칸에 논리 키워드를 채워 레벨이 10 이상이면서 동시에 (열쇠가 있거나 VIP인지) 출력해보세요.",
      "prompt_en": "Fill in the two logical keywords to test lv >= 10 together with either key or vip.",
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
      "prompt_ko": "input().split()과 int()로 변환한 두 정수에 대해 양수 조건(> 0)과 짝수 조건(% 2 == 0)을 and로 결합할 수 있습니다. 블록의 코드를 따라 입력해보세요. (터미널 입력: 5 8)",
      "prompt_en": "You can combine a positive check (> 0) and an even check (% 2 == 0) with and on two integers parsed via input().split() and int(). Trace the block code. (Terminal input: 5 8)",
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
      "prompt_ko": "빈칸에 정수 변환 함수와 동시 만족 논리 키워드를 채워 체온(temp)이 36 이상 37 이하인지 출력해보세요. (터미널 입력: 36)",
      "prompt_en": "Fill in the int-casting function and logical keyword to check 36 <= temp <= 37. (Terminal input: 36)",
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
      "prompt_ko": "파이썬에서 지원하지 않는 논리 기호 때문에 발생한 문법 오류를 수정해 두 점수 통과 여부를 출력해보세요. (터미널 입력: 70 80)",
      "prompt_en": "Fix the SyntaxError caused by an invalid logical operator symbol so the check runs. (Terminal input: 70 80)",
      "hint_ko": "다른 프로그래밍 언어에서 흔히 쓰는 앰퍼샌드 두 개 기호는 파이썬에서 지원하지 않습니다. 파이썬의 영단어 논리 키워드로 바꿔보세요.",
      "hint_en": "Python does not use symbolic double ampersands for logical conjunction—replace the symbol with the lowercase English keyword.",
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
      "prompt_ko": "정수 n을 입력받는 코드 아래에 한 줄을 추가하여 n이 양수이면서 3의 배수인지 출력해보세요. (터미널 입력: 12)",
      "prompt_en": "Add one line below to print whether n is positive and divisible by 3. (Terminal input: 12)",
      "hint_ko": "입력 정수가 0보다 크다는 비교식과 3으로 나눈 나머지가 0이라는 비교식을 동시 만족 논리 키워드로 이어 출력 함수에 넣어보세요.",
      "hint_en": "Inside print(), combine a greater-than-zero check and a remainder-equals-zero check for 3 so both conditions must hold.",
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
      "prompt_ko": "입력값으로 0 2가 주어질 때, 다음 파이썬 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "When 0 2 is given as input, select the exact output of the following Python code.",
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
