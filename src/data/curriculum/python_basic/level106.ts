import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_106: PracticeRound = {
  "id": "py-basic-r106",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 106,
  "title_ko": "표준 수학 모듈 import math 기초 (math.sqrt(), math.ceil(), math.floor())",
  "title_en": "Standard math Module Basics (sqrt, ceil, floor, gcd)",
  "description_ko": "import math로 표준 수학 모듈을 불러와 제곱근(sqrt), 올림(ceil), 내림(floor), 최대공약수(gcd), 팩토리얼(factorial)을 활용합니다.",
  "description_en": "Import the standard math module and use sqrt(), ceil(), floor(), gcd(), and factorial().",
  "totalQuestions": 15,
  "unlockedBlocks": [
    "comment",
    "print",
    "variable",
    "input",
    "type",
    "if",
    "for_range",
    "range",
    "for_in",
    "while",
    "break",
    "continue",
    "list",
    "tuple",
    "dict",
    "set",
    "iter",
    "method",
    "sorted",
    "math",
    "map",
    "def",
    "return",
    "class",
    "try"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 표준 수학 모듈을 불러온 뒤 16의 제곱근을 구해 변수 res에 저장하고 출력해보세요.",
      "prompt_en": "[Block] Import the standard math module, compute the square root of 16 into res, and print it.",
      "hint_ko": "math.sqrt()는 양수의 제곱근(루트)을 실수(float) 형태로 반환합니다.",
      "hint_en": "math.sqrt() returns the square root of a number as a float.",
      "targetCode": "import math\nres = math.sqrt(16)\nprint(res)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "4.0"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] math 모듈에서 제곱근을 구하는 함수를 호출해 81의 제곱근을 정수로 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the square root function from the math module to print the root of 81.",
      "hint_ko": "'square root'의 약자인 함수 이름을 math. 뒤에 입력하세요.",
      "hint_en": "Type the function name abbreviated from 'square root'.",
      "targetCode": "import math\nprint(int(math.sqrt(81)))",
      "templateCode": "import math\nprint(int(math.§§§§§(81)))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "9"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] math 모듈의 올림 함수와 내림 함수를 사용해 3.2의 올림 정수와 3.8의 내림 정수를 각각 출력해보세요.",
      "prompt_en": "[Block] Use the ceiling and floor functions from the math module to print 3.2 rounded up and 3.8 rounded down.",
      "hint_ko": "천장(ceiling)을 뜻하는 ceil()은 소수점이 조금만 있어도 올림하고, 바닥(floor)을 뜻하는 floor()는 무조건 내림합니다.",
      "hint_en": "ceil() always rounds up to the ceiling integer, while floor() always rounds down to the floor integer.",
      "targetCode": "import math\nprint(math.ceil(3.2))\nprint(math.floor(3.8))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "4\n3"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 10명씩 타는 보트에 n명이 모두 타려면 최소 몇 대가 필요한지 무조건 올림 함수로 구해보세요.",
      "prompt_en": "[Fill Blank] Fill in the ceiling function from math to round n / 10 up to the nearest integer.",
      "hint_ko": "소수점을 위쪽 정수로 무조건 올림하는 math 모듈 함수를 적으세요.",
      "hint_en": "Enter the ceiling function name after math..",
      "targetCode": "import math\nn = int(input())\nprint(math.ceil(n / 10))",
      "templateCode": "import math\nn = int(input())\nprint(math.§§§§§(n / 10))",
      "testCases": [
        {
          "id": 1,
          "input": "23",
          "expectedOutput": "3"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 표준 수학 모듈의 함수들을 사용해 12와 18의 최대공약수와 5의 팩토리얼을 각각 출력해보세요.",
      "prompt_en": "[Block] Use functions from the math module to print the greatest common divisor of 12 and 18 and the factorial of 5.",
      "hint_ko": "반복문으로 직접 구현하던 최대공약수와 팩토리얼을 math 모듈 함수 한 줄로 정확히 계산할 수 있습니다.",
      "hint_en": "math.gcd() and math.factorial() compute greatest common divisors and factorials in one call.",
      "targetCode": "import math\nprint(math.gcd(12, 18))\nprint(math.factorial(5))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "6\n120"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 두 정수 24와 36의 최대공약수를 구해 출력하도록 math 모듈의 함수를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the math function that computes the greatest common divisor of 24 and 36.",
      "hint_ko": "'Greatest Common Divisor'의 약자인 함수를 math. 뒤에 적으세요.",
      "hint_en": "Type the abbreviation for Greatest Common Divisor.",
      "targetCode": "import math\nprint(math.gcd(24, 36))",
      "templateCode": "import math\nprint(math.§§§§(24, 36))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "12"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] math 모듈에서 제곱근 함수와 올림 함수만 직접 가져온 뒤, 모듈 접두사 없이 49의 제곱근 정수와 4.1의 올림값을 출력해보세요.",
      "prompt_en": "[Block] Import the square root and ceiling functions directly from math and print the integer root of 49 and ceiling of 4.1.",
      "hint_ko": "from 모듈 import 함수 형태로 가져오면 모듈 이름을 앞에 붙이지 않고 함수 이름만으로 바로 호출할 수 있습니다.",
      "hint_en": "Using from math import sqrt, ceil lets you call sqrt() and ceil() directly without math..",
      "targetCode": "from math import sqrt, ceil\nprint(int(sqrt(49)), ceil(4.1))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "7 5"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] math 모듈에서 floor 함수를 직접 가져오도록 모듈 지정 키워드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the built-in function to convert the floor of 7.9 by pulling floor directly out of math.",
      "hint_ko": "'~로부터'라는 뜻의 파이썬 키워드를 맨 앞에 적으세요.",
      "hint_en": "Enter the keyword meaning 'out of / from' at the start of the import line.",
      "targetCode": "from math import floor\nprint(floor(7.9))",
      "templateCode": "§§§§§ math import floor\nprint(floor(7.9))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "7"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 표준 수학 모듈을 불러와 실수 x의 올림값·내림값과 25의 제곱근 정수를 출력하도록 빈칸 2곳을 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the two blanks to import the math module and print the ceiling and floor of x along with the square root of 25.",
      "hint_ko": "모듈 불러오기 키워드(import)와 올림 함수 이름(ceil)을 순서대로 채워보세요.",
      "hint_en": "Fill in the module import keyword, the ceiling function, and the floor function.",
      "targetCode": "import math\nx = 4.3\nprint(math.ceil(x), math.floor(x), int(math.sqrt(25)))",
      "templateCode": "§§§§§§§ math\nx = 4.3\nprint(math.§§§§§(x), math.floor(x), int(math.sqrt(25)))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "5 4 5"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 표준 수학 모듈을 올바르게 불러와 64의 제곱근 정수를 출력하도록 모듈 선언문의 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the import statement on the first line so the math module is loaded before calling math.sqrt().",
      "hint_ko": "파이썬에서 표준 모듈을 불러올 때는 import 모듈명을 사용합니다.",
      "hint_en": "Replace the comment on line 1 with import math.",
      "templateCode": "export math\nprint(int(math.sqrt(64)))",
      "targetCode": "import math\nprint(int(math.sqrt(64)))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "8"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 게시글 n개를 한 페이지당 10개씩 보여줄 때 필요한 총 페이지 수를 무조건 올림으로 구하도록 함수 호출을 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the math function call so the total number of pages needed for n posts (10 per page) is rounded up.",
      "hint_ko": "소수점 이하가 있으면 위쪽 정수로 올리는 math 모듈 함수는 math.ceil()입니다.",
      "hint_en": "Use math.ceil(n / 10) instead of math.floor(n / 10) so partial pages round up.",
      "templateCode": "import math\nn = int(input())\nprint(math.sqrt(n / 10))",
      "targetCode": "import math\nn = int(input())\nprint(math.ceil(n / 10))",
      "testCases": [
        {
          "id": 1,
          "input": "21",
          "expectedOutput": "3"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 표준 수학 모듈 math를 불러오는 첫째 줄 선언문을 완성해보세요.",
      "prompt_en": "[Complete Line] Write the import statement on line 1 to load the standard math module.",
      "hint_ko": "import math 두 단어로 수학 모듈을 불러오세요.",
      "hint_en": "Write import math on the first line.",
      "targetCode": "import math\nprint(math.factorial(4))",
      "templateCode": "§§§§§§§§§§§§\nprint(math.factorial(4))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "24"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] n을 10으로 나눈 값을 math 모듈의 올림 함수로 올림 처리해 변수 pages에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Round n / 10 up using the math module's ceiling function and store the result in pages.",
      "hint_ko": "pages = math.ceil(n / 10) 형태로 작성하세요.",
      "hint_en": "Write pages = math.ceil(n / 10) on the masked line.",
      "targetCode": "import math\nn = int(input())\npages = math.ceil(n / 10)\nprint(pages)",
      "templateCode": "import math\nn = int(input())\n§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(pages)",
      "testCases": [
        {
          "id": 1,
          "input": "32",
          "expectedOutput": "4"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] math.ceil(), math.floor(), round(), math.sqrt()를 비교하는 다음 코드의 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the code comparing ceil(), floor(), round(), and sqrt().",
      "hint_ko": "4.1의 올림은 5, 4.9의 내림은 4, 4.1의 반올림은 4이며, 36의 제곱근 정수는 6입니다.",
      "hint_en": "ceil(4.1) is 5, floor(4.9) is 4, round(4.1) is 4, and int(sqrt(36)) is 6.",
      "targetCode": "import math\na = math.ceil(4.1)\nb = math.floor(4.9)\nc = round(4.1)\nd = int(math.sqrt(36))\nprint(a, b, c, d)",
      "choices": [
        "5 4 4 6",
        "4 5 4 6",
        "5 4 5 6",
        "5 5 4 6"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "5 4 4 6"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 피타고라스 빗변 길이(sqrt)와 최대공약수(gcd), 팩토리얼이 결합된 코드의 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the code using sqrt, gcd, and factorial.",
      "hint_ko": "3^2 + 4^2 = 25의 제곱근은 5이고, 15와 20의 최대공약수는 5이며, 4!은 24입니다.",
      "hint_en": "sqrt(9 + 16) is 5.0 (int 5), gcd(15, 20) is 5, and factorial(4) is 24.",
      "targetCode": "from math import sqrt, gcd, factorial\nhyp = int(sqrt(3 ** 2 + 4 ** 2))\ng = gcd(15, 20)\nprint(hyp + g, factorial(4))",
      "choices": [
        "10 24",
        "5 24",
        "10 12",
        "15 24"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "10 24"
        }
      ]
    }
  ]
};
