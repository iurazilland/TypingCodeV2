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
      "hint_ko": "파이썬의 참·거짓 불리언 상수는 따옴표를 쓰지 않고 반드시 첫 글자만 대문자로 표기합니다.",
      "hint_en": "Python boolean constants are written without quotes and always start with a capital letter.",
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
      "hint_ko": "첫째 줄에는 영어로 거짓을 뜻하는 단어를 첫 글자만 대문자로 적고, 둘째 줄에는 값의 유형을 뜻하는 네 글자 내장 함수를 적어보세요.",
      "hint_en": "Capitalize the first letter of the English word for untruth on line 1, and call the four-letter function meaning data category on line 2.",
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
      "hint_ko": "비교 연산식의 결과는 항상 참 또는 거짓을 나타내는 불리언 값으로 계산됩니다.",
      "hint_en": "Comparison expressions always evaluate to a boolean truth value.",
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
      "prompt_ko": "pw에 \"1234\"를 저장하고, pw == \"1234\"와 pw != \"1234\"를 각각 출력해 같음과 다름을 확인해보세요.",
      "prompt_en": "Set pw to \"1234\", then print pw == \"1234\" and pw != \"1234\" to test equality and inequality.",
      "hint_ko": "등호 한 개는 값을 저장하는 대입 기호이므로, 같음을 비교할 때는 등호 두 개를, 다름을 비교할 때는 느낌표와 등호 조합을 사용합니다.",
      "hint_en": "A single equals sign assigns a value; use double equals to test equality and an exclamation mark before equals to test inequality.",
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
      "prompt_ko": "x에 25, y에 4 * 6을 저장한 뒤, x > y와 x == y + 1의 결과를 차례로 출력해보세요.",
      "prompt_en": "Set x = 25 and y = 4 * 6, then print x > y and x == y + 1.",
      "hint_ko": "한 식 안에 산술 연산과 비교 연산이 섞여 있으면 덧셈·곱셈 같은 산술 계산이 먼저 끝난 뒤 크기를 비교합니다.",
      "hint_en": "When arithmetic and comparison operators appear together, arithmetic is evaluated first before comparing the two sides.",
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
      "prompt_ko": "정수 n을 입력받아 2로 나눈 나머지가 0과 같은지(짝수 여부)를 res에 저장하고 출력해보세요.",
      "prompt_en": "Read integer n, store whether n % 2 == 0 in res, and print res.",
      "hint_ko": "입력받은 정수를 2로 나눈 나머지가 0과 같은지 비교한 불리언 결과값 자체도 일반 값처럼 변수에 담아 출력할 수 있습니다.",
      "hint_en": "Compare the remainder when divided by 2 against 0, then store that boolean comparison result directly in the variable.",
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
      "prompt_ko": "불리언 값의 대소문자 표기 실수로 발생한 오류를 수정해 값과 자료형이 정상 출력되도록 해보세요.",
      "prompt_en": "Fix the capitalization typo on the boolean literal so its value and type print cleanly.",
      "hint_ko": "파이썬은 대소문자를 엄격히 구분하며, 불리언 상수는 모두 소문자로 적으면 변수 이름으로 오인해 오류가 발생합니다.",
      "hint_en": "Python is case-sensitive: writing a boolean constant in all lowercase makes Python look for an undefined variable instead of a boolean value.",
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
