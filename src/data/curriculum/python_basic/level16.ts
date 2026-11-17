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
  "totalQuestions": 15,
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 참(True)을 뜻하는 불리언 값을 변수 is_ready에 저장하고 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the blocks to store the boolean value True in is_ready and print it.",
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
      "prompt_ko": "[빈칸 채우기] 빈칸에 거짓을 뜻하는 불리언 상수를 채워 변수에 저장하고 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the boolean literal for false to store and print it.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 부등호 비교 연산자(>, <)로 두 변수 a와 b의 크기를 비교해 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the blocks to compare a and b using > and < and print both results.",
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
      "prompt_ko": "[빈칸 채우기] 두 빈칸에 비교 기호를 채워 score(80)가 80 이상인지와 79 이하인지를 차례로 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the comparison operators to check if score (80) is at least 80 and at most 79.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 같음(==)과 다름(!=) 비교 연산자로 비밀번호 문자열을 비교하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the blocks to test string equality (==) and inequality (!=).",
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
      "prompt_ko": "[빈칸 채우기] 두 빈칸에 비교 기호를 채워 code가 \"A1\"과 같은지, \"B2\"와 다른지를 한 줄에 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the comparison operators to test if code equals \"A1\" and differs from \"B2\".",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 사칙연산과 비교 연산자(>, ==)가 함께 있는 식의 결과를 확인하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the blocks to evaluate expressions combining arithmetic and comparison operators.",
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
      "prompt_ko": "[빈칸 채우기] 두 빈칸에 비교 기호를 채워 가격(price)이 예산(budget) 이하인지와 예산과 다른지를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the operators to check if price is at most budget and if price differs from budget.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] n % 2 == 0 비교식의 불리언 결과를 변수 res에 저장해 출력해보세요.",
      "prompt_en": "[Block] Store the boolean result of n % 2 == 0 in variable res and print it.",
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
      "prompt_ko": "[빈칸 채우기] 공백 분리 메서드와 비교 기호를 채워 첫째 정수가 둘째 정수 이상인지 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the split method and comparison symbol to check if x is at least y.",
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
      "prompt_ko": "[틀린 곳 수정] 두 변수 a와 b의 값이 서로 같은지 비교하여 True가 출력되도록 비교 연산자를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the comparison operator so it checks whether a and b are equal and prints True.",
      "hint_ko": "현재 서로 다름(!=)을 비교하고 있습니다. 두 값이 서로 같은지 확인하는 등호 두 개(==) 연산자로 고쳐보세요.",
      "hint_en": "Change the inequality operator (!=) to the equality operator (==) to check if both values are equal.",
      "templateCode": "a, b = 10, 10\nprint(a != b)",
      "targetCode": "a, b = 10, 10\nprint(a == b)",
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
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 입력된 정수 n이 20 이상일 때 True가 출력되도록 잘못된 부등호 방향을 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the reversed comparison operator so True prints when n is at least 20.",
      "hint_ko": "20 이하(<=)가 아니라 20 이상(>=)인지 비교하도록 부등호 방향을 반대로 고쳐보세요.",
      "hint_en": "Reverse the angle bracket from <= to >= to test whether n is 20 or greater.",
      "templateCode": "n = int(input())\nprint(n <= 20)",
      "targetCode": "n = int(input())\nprint(n >= 20)",
      "testCases": [
        {
          "id": 1,
          "input": "25",
          "expectedOutput": "True"
        },
        {
          "id": 2,
          "input": "15",
          "expectedOutput": "False"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] x를 y로 나눈 나머지가 0과 같은지 비교한 결과를 res에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the line that stores whether x % y equals 0 in variable res.",
      "hint_ko": "res = x % y == 0 형태로 나머지 비교식의 결과를 변수 res에 대입해보세요.",
      "hint_en": "Assign the remainder equality check to res using res = x % y == 0.",
      "templateCode": "a, b = input().split()\nx, y = int(a), int(b)\n§§§§§§§§§§§§§§§§\nprint(res)",
      "targetCode": "a, b = input().split()\nx, y = int(a), int(b)\nres = x % y == 0\nprint(res)",
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
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 가격(price)이 예산(budget) 이하인지 비교한 결과를 ans에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the line that stores whether price is at most budget in ans.",
      "hint_ko": "ans = price <= budget 형태로 이하 비교 연산 결과를 변수 ans에 저장해보세요.",
      "hint_en": "Assign the less-or-equal comparison to ans using ans = price <= budget.",
      "templateCode": "price = int(input())\nbudget = 5000\n§§§§§§§§§§§§§§§§§§§§§\nprint(ans)",
      "targetCode": "price = int(input())\nbudget = 5000\nans = price <= budget\nprint(ans)",
      "testCases": [
        {
          "id": 1,
          "input": "4500",
          "expectedOutput": "True"
        },
        {
          "id": 2,
          "input": "6000",
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
      "prompt_en": "[Predict Output] When 10 10 is given as input, select the exact output of the following Python code.",
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
