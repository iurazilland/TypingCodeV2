import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_16: PracticeRound = {
  "id": "py-basic-r16",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 16,
  "title_ko": "16레벨: 불리언(bool)과 비교 연산자",
  "title_en": "Level 16: Booleans (bool) & Comparison Operators",
  "description_ko": "참(True)과 거짓(False) 불리언 자료형과 여섯 가지 비교 연산자(==, !=, >, <, >=, <=)를 익힙니다.",
  "description_en": "Learn boolean values (True, False) and the six comparison operators (==, !=, >, <, >=, <=).",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "type",
    "method"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "참(True)과 거짓(False)을 나타내는 불리언(bool) 자료형은 따옴표 없이 첫 글자만 대문자로 적어 변수에 저장합니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Boolean (bool) values representing truth (True) and falsehood (False) are written without quotes and with a capital first letter. Trace the block code.",
      "hint_ko": "\"True\"처럼 따옴표를 붙이면 문자열이 되므로 따옴표 없이 True로 작성합니다.",
      "hint_en": "Omit quotes around True so Python treats it as a boolean constant rather than a string.",
      "targetCode": "is_ready = True\nprint(is_ready)",
      "expectedVariables": {
        "is_ready": true
      },
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
      "prompt_ko": "빈칸에 거짓을 뜻하는 불리언 상수를 채워 변수에 저장하고 출력해보세요.",
      "prompt_en": "Fill in the boolean literal for false to store and print it.",
      "hint_ko": "영어로 거짓을 뜻하는 다섯 글자 단어를 따옴표 없이 첫 글자만 대문자로 적어보세요.",
      "hint_en": "Write the five-letter English word for untruth without quotes, capitalizing only its first letter.",
      "templateCode": "is_open = §§§§§\nprint(is_open)",
      "targetCode": "is_open = False\nprint(is_open)",
      "expectedVariables": {
        "is_open": false
      },
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
      "prompt_ko": "부등호 비교 연산자(>, <)는 두 값의 크기를 비교하여 조건이 맞으면 True, 틀리면 False를 결과로 반환합니다. 블록의 코드를 따라 입력해 비교 결과를 확인해보세요.",
      "prompt_en": "Comparison operators (>, <) compare two values and evaluate to True if the condition holds, or False otherwise. Trace the block code to check both results.",
      "hint_ko": "15는 10보다 크므로 첫 번째 비교는 True, 두 번째 비교는 False가 출력됩니다.",
      "hint_en": "Since 15 is greater than 10, a > b evaluates to True and a < b evaluates to False.",
      "targetCode": "a = 15\nb = 10\nprint(a > b)\nprint(a < b)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True\nFalse"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸에 비교 기호를 채워 score(80)가 80 이상인지와 79 이하인지를 차례로 출력해보세요.",
      "prompt_en": "Fill in the comparison operators to check if score (80) is at least 80 and at most 79.",
      "hint_ko": "이상과 이하를 나타내는 비교 기호는 부등호를 먼저 적고 그 바로 뒤에 등호를 붙여 표기합니다.",
      "hint_en": "Write greater-or-equal and less-or-equal by placing the angle bracket first, followed immediately by the equals sign.",
      "templateCode": "score = 80\nprint(score §§ 80)\nprint(score §§ 79)",
      "targetCode": "score = 80\nprint(score >= 80)\nprint(score <= 79)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True\nFalse"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "두 값이 서로 같은지 비교할 때는 등호 두 개(==)를, 서로 다른지 비교할 때는 느낌표와 등호(!=)를 사용합니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Use double equals (==) to check if two values are equal, and an exclamation mark with equals (!=) to check if they are different. Trace the block code.",
      "hint_ko": "등호 한 개(=)는 변수에 값을 저장할 때만 쓰고, 비교할 때는 항상 == 또는 !=를 씁니다.",
      "hint_en": "A single = assigns a value to a variable, whereas == and != compare two values.",
      "targetCode": "pw = \"1234\"\nprint(pw == \"1234\")\nprint(pw != \"1234\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True\nFalse"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸에 비교 기호를 채워 code가 \"A1\"과 같은지, 그리고 \"B2\"와 다른지를 한 줄에 출력해보세요.",
      "prompt_en": "Fill in the comparison operators to test if code equals \"A1\" and differs from \"B2\".",
      "hint_ko": "첫째 빈칸에는 등호 두 개를 나란히 붙인 같음 비교 기호를, 둘째 빈칸에는 느낌표와 등호를 붙인 다름 비교 기호를 채워보세요.",
      "hint_en": "Use two equals signs side by side for equality in the first blank, and an exclamation mark followed by equals for inequality in the second.",
      "templateCode": "code = \"A1\"\nprint(code §§ \"A1\", code §§ \"B2\")",
      "targetCode": "code = \"A1\"\nprint(code == \"A1\", code != \"B2\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True True"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "하나의 식에 사칙연산(+, *)과 비교 연산자(>, ==)가 함께 있으면 사칙연산이 먼저 계산된 뒤 두 값의 크기를 비교합니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "When arithmetic operators (+, *) and comparison operators (>, ==) appear in the same expression, Python finishes the arithmetic calculation first before comparing the values. Trace the block code.",
      "hint_ko": "y + 1이 먼저 25로 계산된 다음 x == 25가 비교되어 True가 출력됩니다.",
      "hint_en": "y + 1 evaluates to 25 first, and then x == 25 evaluates to True.",
      "targetCode": "x = 25\ny = 4 * 6\nprint(x > y)\nprint(x == y + 1)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True\nTrue"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸에 비교 기호를 채워 가격(price)이 예산(budget) 이하인지와 예산과 다른지를 각각 출력해보세요.",
      "prompt_en": "Fill in the operators to check if price is at most budget and if price differs from budget.",
      "hint_ko": "작거나 같음(이하)은 왼쪽이 닫힌 부등호 뒤에 등호를 붙이고, 서로 다름은 느낌표 뒤에 등호를 붙여 표기합니다.",
      "hint_en": "Combine a less-than bracket before equals on line 3, and an exclamation mark before equals on line 4.",
      "templateCode": "price = 3500\nbudget = 3000\nprint(price §§ budget)\nprint(price §§ budget)",
      "targetCode": "price = 3500\nbudget = 3000\nprint(price <= budget)\nprint(price != budget)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "False\nTrue"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "나머지 연산(%)과 같음 비교(==)를 조합한 식(n % 2 == 0)의 불리언 결과(True 또는 False)도 등호(=)를 사용해 변수에 그대로 저장할 수 있습니다. 블록의 코드를 따라 입력해보세요. (터미널 입력: 12)",
      "prompt_en": "The boolean result (True or False) of a comparison expression like n % 2 == 0 can also be assigned directly to a variable with =. Trace the block code. (Terminal input: 12)",
      "hint_ko": "n % 2 == 0이 먼저 판정되어 참·거짓 값이 구해진 뒤 왼쪽 변수 res에 대입됩니다.",
      "hint_en": "Python evaluates n % 2 == 0 first and stores the resulting boolean in res.",
      "targetCode": "n = int(input())\nres = n % 2 == 0\nprint(res)",
      "testCases": [
        {
          "id": 1,
          "input": "12",
          "expectedOutput": "True"
        },
        {
          "id": 2,
          "input": "7",
          "expectedOutput": "False"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 공백 분리 메서드와 비교 기호를 채워 입력된 첫째 정수가 둘째 정수 이상인지 출력해보세요. (터미널 입력: 20 15)",
      "prompt_en": "Fill in the whitespace-splitting method and comparison symbol to check if x is at least y. (Terminal input: 20 15)",
      "hint_ko": "첫째 줄에는 쪼개다·나누다를 뜻하는 다섯 글자 문자열 메서드를, 마지막 줄에는 크거나 같음을 뜻하는 부등호+등호 조합을 적어보세요.",
      "hint_en": "Call the five-letter method meaning to divide text on line 1, and place the greater-than bracket before equals on line 3.",
      "templateCode": "a, b = input().§§§§§()\nx, y = int(a), int(b)\nprint(x §§ y)",
      "targetCode": "a, b = input().split()\nx, y = int(a), int(b)\nprint(x >= y)",
      "testCases": [
        {
          "id": 1,
          "input": "20 15",
          "expectedOutput": "True"
        },
        {
          "id": 2,
          "input": "8 12",
          "expectedOutput": "False"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "불리언 값의 대소문자 표기 실수로 발생한 오류를 수정해 True가 정상 출력되도록 해보세요.",
      "prompt_en": "Fix the capitalization typo on the boolean literal so True prints cleanly.",
      "hint_ko": "파이썬은 대소문자를 엄격히 구분하며, 불리언 상수는 모두 소문자로 적으면 변수 이름으로 오인해 오류가 발생합니다.",
      "hint_en": "Python is case-sensitive: writing a boolean constant in all lowercase makes Python look for an undefined variable instead of a boolean value.",
      "templateCode": "done = true\nprint(done)",
      "targetCode": "done = True\nprint(done)",
      "expectedVariables": {
        "done": true
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "두 정수를 변환한 코드 아래에 한 줄을 추가하여 x를 y로 나눈 나머지가 0과 같은지 출력해보세요. (터미널 입력: 18 6)",
      "prompt_en": "Add one line below to print whether the remainder of x divided by y equals 0. (Terminal input: 18 6)",
      "hint_ko": "첫째 정수를 둘째 정수로 나눈 나머지를 구한 뒤, 그 값이 0과 같은지 비교하는 식을 출력 함수 안에 넣어보세요.",
      "hint_en": "Inside the print function, write a comparison checking whether the remainder of the first integer divided by the second equals zero.",
      "templateCode": "a, b = input().split()\nx, y = int(a), int(b)\n§§§§§§§§§§§§§§§§§",
      "targetCode": "a, b = input().split()\nx, y = int(a), int(b)\nprint(x % y == 0)",
      "testCases": [
        {
          "id": 1,
          "input": "18 6",
          "expectedOutput": "True"
        },
        {
          "id": 2,
          "input": "14 5",
          "expectedOutput": "False"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "입력값으로 10 10이 주어질 때, 다음 파이썬 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "When 10 10 is given as input, select the exact output of the following Python code.",
      "hint_ko": "파이썬에서 숫자와 문자열은 모양이 같아 보여도 자료형이 다르면 같음 비교에서 어떻게 판정되는지, 그리고 짝수 나머지 비교 결과를 차례로 확인해보세요.",
      "hint_en": "Consider how Python's equality check behaves when comparing an integer against a string with the same digits, then check the remainder condition on the last line.",
      "targetCode": "a, b = input().split()\nx = int(a)\nprint(x == b)\nprint(x % 2 == 0)",
      "choices": [
        "True\nTrue",
        "False\nTrue",
        "False\nFalse",
        "True\nFalse"
      ],
      "correctChoiceIndex": 1,
      "testCases": [
        {
          "id": 1,
          "input": "10 10",
          "expectedOutput": "False\nTrue"
        }
      ]
    }
  ]
};
