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
    "method",
    "type"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "변수 is_ready에 참을 뜻하는 True를 저장하고, 값과 자료형을 차례로 출력해보세요.",
      "prompt_en": "Store True in is_ready, then print its value and its data type on separate lines.",
      "hint_ko": "파이썬 불리언 상수는 따옴표 없이 첫 글자를 대문자로 적어 True, False로 표기합니다.",
      "hint_en": "Write Python boolean literals as capitalized True and False without quotes.",
      "targetCode": "is_ready = True\nprint(is_ready)\nprint(type(is_ready))",
      "expectedVariables": {
        "is_ready": true
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True\n<class 'bool'>"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 거짓을 뜻하는 불리언 상수와 자료형 확인 함수를 채워 값과 자료형을 한 줄에 출력해보세요.",
      "prompt_en": "Fill in the boolean literal for false and the type-checking function to print both.",
      "hint_ko": "거짓을 뜻하는 불리언 값은 첫 글자가 대문자인 False이며, 자료형 확인 함수는 type입니다.",
      "hint_en": "Use capitalized False for boolean false and type() to check its data type.",
      "templateCode": "is_open = §§§§§\nprint(is_open, §§§§(is_open))",
      "targetCode": "is_open = False\nprint(is_open, type(is_open))",
      "expectedVariables": {
        "is_open": false
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "False <class 'bool'>"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "a에 15, b에 10을 저장한 뒤 a > b와 a < b의 비교 결과를 각각 출력해보세요.",
      "prompt_en": "Set a to 15 and b to 10, then print the results of a > b and a < b.",
      "hint_ko": "비교 연산식의 결과는 항상 True 또는 False 불리언 값으로 계산됩니다.",
      "hint_en": "Comparison expressions always evaluate to True or False.",
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
      "hint_ko": "크거나 같음(이상)은 >=, 작거나 같음(이하)은 <= 순서로 부등호를 등호 앞에 적습니다.",
      "hint_en": "Write >= for greater-or-equal and <= for less-or-equal.",
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
      "prompt_ko": "pw에 \"1234\"를 저장하고, pw == \"1234\"와 pw != \"1234\"를 각각 출력해 같음과 다름을 확인해보세요.",
      "prompt_en": "Set pw to \"1234\", then print pw == \"1234\" and pw != \"1234\" to test equality and inequality.",
      "hint_ko": "등호 한 개(=)는 대입이고, 두 값이 같은지 비교할 때는 ==, 다른지 비교할 때는 !=를 씁니다.",
      "hint_en": "Single = assigns; == checks equality and != checks inequality.",
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
      "hint_ko": "첫째 빈칸에는 같음을 뜻하는 ==를, 둘째 빈칸에는 다름을 뜻하는 !=를 입력하세요.",
      "hint_en": "Use == for equality in the first blank and != for inequality in the second.",
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
      "prompt_ko": "x에 25, y에 4 * 6을 저장한 뒤, x > y와 x == y + 1의 결과를 차례로 출력해보세요.",
      "prompt_en": "Set x = 25 and y = 4 * 6, then print x > y and x == y + 1.",
      "hint_ko": "산술 연산(+, *)이 비교 연산(>, ==)보다 먼저 계산되어 25 > 24와 25 == 25를 비교합니다.",
      "hint_en": "Arithmetic runs before comparisons, evaluating 25 > 24 and 25 == 25.",
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
      "hint_ko": "이하 비교에는 <=를, 서로 다른지 비교할 때는 !=를 사용합니다.",
      "hint_en": "Enter <= on line 3 and != on line 4.",
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
      "prompt_ko": "정수 n을 입력받아 2로 나눈 나머지가 0과 같은지(짝수 여부)를 res에 저장하고 출력해보세요.",
      "prompt_en": "Read integer n, store whether n % 2 == 0 in res, and print res.",
      "hint_ko": "n = int(input())으로 정수를 받고 res = n % 2 == 0을 계산해 출력하세요.",
      "hint_en": "Read n = int(input()), assign res = n % 2 == 0, and print(res).",
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
      "prompt_ko": "빈칸에 공백 분리 메서드와 비교 기호를 채워 입력된 첫째 정수가 둘째 정수 이상인지 출력해보세요.",
      "prompt_en": "Fill in the whitespace-splitting method and comparison symbol to check if x is at least y.",
      "hint_ko": "한 줄 입력을 공백 단위로 나눌 때는 split()을 쓰고, 이상 비교에는 >=를 사용합니다.",
      "hint_en": "Use split() to separate the input tokens and >= to test greater-or-equal.",
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
      "prompt_ko": "불리언 값의 대소문자 표기 실수로 발생한 오류를 수정해 값과 자료형이 정상 출력되도록 해보세요.",
      "prompt_en": "Fix the capitalization typo on the boolean literal so its value and type print cleanly.",
      "hint_ko": "파이썬에서 참을 나타내는 불리언 상수는 소문자 true가 아니라 첫 글자가 대문자인 True입니다.",
      "hint_en": "Capitalize the first letter of the boolean literal as True.",
      "templateCode": "done = true\nprint(done, type(done))",
      "targetCode": "done = True\nprint(done, type(done))",
      "expectedVariables": {
        "done": true
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True <class 'bool'>"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "두 정수를 변환한 코드 아래에 한 줄을 추가하여 x를 y로 나눈 나머지가 0과 같은지 출력해보세요.",
      "prompt_en": "Add one line below to print whether the remainder of x divided by y equals 0.",
      "hint_ko": "셋째 줄에 print(x % y == 0)을 작성하면 배수 여부가 True 또는 False로 출력됩니다.",
      "hint_en": "Write print(x % y == 0) on line 3.",
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
      "hint_ko": "x는 정수 10이고 b는 문자열 \"10\"이므로 자료형이 달라 x == b는 False이며, 10 % 2 == 0은 True입니다.",
      "hint_en": "Integer 10 and string \"10\" have different types so x == b is False, while 10 % 2 == 0 is True.",
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
