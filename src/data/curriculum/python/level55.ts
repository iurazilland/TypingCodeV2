import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 55레벨: 매개변수가 있는 함수 (13단계 표준 구성)
// - [1,3,5,7,9단계] 블록 코딩 개념 도입 (단일·다중 매개변수와 인자 전달)
// - [2,4,6,8,10단계] 빈칸 채우기 타이핑 실습 (fill_blank)
// - [11단계] 버그 수정 (fix_bug)
// - [12단계] 예제 아래 한 줄 코드 추가 작성 (one_line)
// - [13단계] 출력 결과 예측 4지선다 퀴즈 (predict_output)
// ============================================================================
export const PYTHON_LEVEL_55: PracticeRound = {
  "id": "py-basic-r55",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 55,
  "title_ko": "55레벨: 매개변수가 있는 함수",
  "title_en": "Level 55: Functions with Parameters",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "type",
    "def",
    "if"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "매개변수 name을 받아 f\"Hi, {name}\"을 출력하는 greet 함수를 정의하고, \"Mina\"를 넣어 호출해보세요.",
      "prompt_en": "Define greet(name) to print f\"Hi, {name}\", then call greet(\"Mina\").",
      "hint_ko": "def greet(name): 내부에 print(f\"Hi, {name}\")을 넣고, 아래에서 greet(\"Mina\")를 호출하세요.",
      "hint_en": "Write name in the def parameter slot and pass \"Mina\" when calling greet.",
      "targetCode": "def greet(name):\n    print(f\"Hi, {name}\")\ngreet(\"Mina\")",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "Hi, Mina"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 user를 받아 f\"Welcome, {user}!\"를 출력하는 welcome 함수를 완성하고 \"Jun\"으로 호출해보세요.",
      "prompt_en": "Fill in the blanks so welcome(user) prints f\"Welcome, {user}!\" and call it with \"Jun\".",
      "hint_ko": "첫 줄 괄호 안에 매개변수 이름 user를, 셋째 줄 괄호 안에 전달할 문자열 \"Jun\"을 입력하세요.",
      "hint_en": "Put user as the parameter on line 1 and \"Jun\" as the argument on line 3.",
      "templateCode": "def welcome(§§§§):\n    print(f\"Welcome, {user}!\")\nwelcome(§§§§§)",
      "targetCode": "def welcome(user):\n    print(f\"Welcome, {user}!\")\nwelcome(\"Jun\")",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "Welcome, Jun!"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "숫자 n을 매개변수로 받아 n * 2를 출력하는 double 함수를 만들고, 7과 15로 각각 호출해보세요.",
      "prompt_en": "Define double(n) to print n * 2, then call double(7) and double(15).",
      "hint_ko": "def double(n): 안에 print(n * 2)를 넣고, 밖에서 double(7)과 double(15)를 차례로 호출하세요.",
      "hint_en": "Define double(n) once and invoke it with 7 and then 15.",
      "targetCode": "def double(n):\n    print(n * 2)\ndouble(7)\ndouble(15)",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "14\n30"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 숫자 x의 제곱(x ** 2)을 출력하는 square 함수를 완성하고 6을 넣어 호출해보세요.",
      "prompt_en": "Fill in the blanks to print x ** 2 in square(x) and call square(6).",
      "hint_ko": "거듭제곱 연산자 **를 채우고, 마지막 줄에서 square(6)을 호출하세요.",
      "hint_en": "Enter ** on line 2 and square(6) on line 3.",
      "templateCode": "def square(x):\n    print(x §§ 2)\n§§§§§§§§§",
      "targetCode": "def square(x):\n    print(x ** 2)\nsquare(6)",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "36"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "두 매개변수 a, b를 받아 a + b를 출력하는 show_sum 함수를 정의하고 12, 8을 전달해 호출해보세요.",
      "prompt_en": "Define show_sum(a, b) to print a + b, then call show_sum(12, 8).",
      "hint_ko": "매개변수가 두 개일 때는 쉼표로 구분해 a, b를 적고, 호출할 때도 12, 8처럼 두 인자를 전달합니다.",
      "hint_en": "Separate the two parameters with a comma: def show_sum(a, b):.",
      "targetCode": "def show_sum(a, b):\n    print(a + b)\nshow_sum(12, 8)",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "20"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 item, cnt를 받아 출력하는 report 함수를 완성하고 report(\"Apple\", 5)를 호출해보세요.",
      "prompt_en": "Fill in the blanks so report(item, cnt) prints f\"{item}: {cnt}\" for \"Apple\" and 5.",
      "hint_ko": "함수 정의 괄호 안에는 item, cnt를, 호출 괄호 안에는 \"Apple\", 5를 쉼표로 구분해 적으세요.",
      "hint_en": "Enter item, cnt on line 1 and \"Apple\", 5 on line 3.",
      "templateCode": "def report(§§§§§§§§§):\n    print(f\"{item}: {cnt}\")\nreport(§§§§§§§§§§)",
      "targetCode": "def report(item, cnt):\n    print(f\"{item}: {cnt}\")\nreport(\"Apple\", 5)",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "Apple: 5"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "점수 s가 60 이상이면 \"Pass\", 아니면 \"Fail\"을 출력하는 judge(s) 함수를 만들고 75와 40으로 호출해보세요.",
      "prompt_en": "Define judge(s) to print \"Pass\" if s >= 60 else \"Fail\", then call judge(75) and judge(40).",
      "hint_ko": "def judge(s): 내부에 if s >= 60: ~ else: 블록을 넣어 조건에 따라 출력하게 하세요.",
      "hint_en": "Nest an if-else block checking s >= 60 inside def judge(s):.",
      "targetCode": "def judge(s):\n    if s >= 60:\n        print(\"Pass\")\n    else:\n        print(\"Fail\")\njudge(75)\njudge(40)",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "Pass\nFail"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 짝수면 \"Even\", 홀수면 \"Odd\"를 출력하는 check_num(n)을 완성하고 check_num(9)를 호출해보세요.",
      "prompt_en": "Fill in the blanks in check_num(n) to print \"Even\" or \"Odd\", then call check_num(9).",
      "hint_ko": "2로 나눈 나머지가 0인지 비교하도록 n % 2 == 0의 빈칸을 채우고 check_num(9)를 호출하세요.",
      "hint_en": "Use % 2 == 0 in the if condition and call check_num(9) on the last line.",
      "templateCode": "def check_num(n):\n    if n §§§§§§§§:\n        print(\"Even\")\n    else:\n        print(\"Odd\")\n§§§§§§§§§§§§",
      "targetCode": "def check_num(n):\n    if n % 2 == 0:\n        print(\"Even\")\n    else:\n        print(\"Odd\")\ncheck_num(9)",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "Odd"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "age >= 20이면 \"Adult\", 아니면 \"Minor\"를 출력하는 check_age(age) 함수를 만들고 입력받은 정수를 전달해보세요.",
      "prompt_en": "Define check_age(age) to print \"Adult\" (>= 20) or \"Minor\", and call it with int(input()).",
      "hint_ko": "num = int(input())으로 정수를 입력받은 뒤 check_age(num)으로 함수에 전달하세요.",
      "hint_en": "Store int(input()) in num and pass num to check_age(num).",
      "targetCode": "def check_age(age):\n    if age >= 20:\n        print(\"Adult\")\n    else:\n        print(\"Minor\")\nnum = int(input())\ncheck_age(num)",
      "testCases": [
        {
          "id": 1,
          "input": "22",
          "expectedOutput": "Adult"
        },
        {
          "id": 2,
          "input": "15",
          "expectedOutput": "Minor"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 입력받은 문자열 word와 정수 cnt를 repeat_word 함수에 전달해 반복 문자열을 출력해보세요.",
      "prompt_en": "Fill in the blanks to pass input string word and integer cnt into repeat_word(w, k).",
      "hint_ko": "함수 정의에는 매개변수 w, k를 적고, 마지막 줄 호출에는 입력 변수 word, cnt를 전달하세요.",
      "hint_en": "Put w, k on line 1 and word, cnt in the call on line 5.",
      "templateCode": "def repeat_word(§§§§):\n    print(w * k)\nword = input()\ncnt = int(input())\nrepeat_word(§§§§§§§§§)",
      "targetCode": "def repeat_word(w, k):\n    print(w * k)\nword = input()\ncnt = int(input())\nrepeat_word(word, cnt)",
      "testCases": [
        {
          "id": 1,
          "input": "Go\n3",
          "expectedOutput": "GoGoGo"
        },
        {
          "id": 2,
          "input": "Hi\n2",
          "expectedOutput": "HiHi"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "입력받은 가로 a와 세로 b로 넓이를 출력하려 하지만 인자 개수 오류가 발생합니다. 코드를 고쳐보세요.",
      "prompt_en": "Fix the argument count error so show_area prints the product of inputs a and b.",
      "hint_ko": "show_area 함수는 매개변수 2개(w, h)를 요구하므로 호출할 때도 두 변수 a와 b를 모두 전달해야 합니다.",
      "hint_en": "show_area expects two arguments (w, h), so pass both a and b when calling it.",
      "templateCode": "def show_area(w, h):\n    print(w * h)\na = int(input())\nb = int(input())\nshow_area(a)",
      "targetCode": "def show_area(w, h):\n    print(w * h)\na = int(input())\nb = int(input())\nshow_area(a, b)",
      "testCases": [
        {
          "id": 1,
          "input": "4\n5",
          "expectedOutput": "20"
        },
        {
          "id": 2,
          "input": "3\n7",
          "expectedOutput": "21"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "코드 마지막에 한 줄을 추가하여 입력받은 역할 r과 이름 u로 tag_user 함수를 호출해보세요.",
      "prompt_en": "Add one line at the end to call tag_user with inputs r and u.",
      "hint_ko": "매개변수 순서(role, name)에 맞춰 r과 u를 쉼표로 구분해 전달하세요.",
      "hint_en": "Call tag_user(r, u) on the last line.",
      "templateCode": "def tag_user(role, name):\n    print(f\"[{role}] {name}\")\nr = input()\nu = input()\n§§§§§§§§§§§§§§",
      "targetCode": "def tag_user(role, name):\n    print(f\"[{role}] {name}\")\nr = input()\nu = input()\ntag_user(r, u)",
      "testCases": [
        {
          "id": 1,
          "input": "Admin\nSora",
          "expectedOutput": "[Admin] Sora"
        },
        {
          "id": 2,
          "input": "Guest\nLeo",
          "expectedOutput": "[Guest] Leo"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 코드의 실행 결과를 예측해보세요.",
      "prompt_en": "Predict the output of the following code.",
      "hint_ko": "첫 호출은 10 > 4가 참이라 뺄셈이, 둘째 호출은 3 > 8이 거짓이라 덧셈이 실행됩니다.",
      "hint_en": "In calc(10, 4), a > b is True (10 - 4); in calc(3, 8), a > b is False (3 + 8).",
      "targetCode": "def calc(a, b):\n    if a > b:\n        print(a - b)\n    else:\n        print(a + b)\ncalc(10, 4)\ncalc(3, 8)",
      "choices": [
        "14\n11",
        "6\n11",
        "6\n-5",
        "14\n-5"
      ],
      "correctChoiceIndex": 1,
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "6\n11"
        }
      ]
    }
  ]
};
