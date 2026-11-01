import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_23: PracticeRound = {
  "id": "py-basic-r23",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 23,
  "title_ko": "23레벨: 불리언과 조건문 기초 종합 문제풀이",
  "title_en": "Level 23: Section 3 Comprehensive Review",
  "description_ko": "불리언, bool() 형변환, 논리 연산자, 다중·중첩 조건문과 pass까지 섹션 1~3 핵심 개념을 종합 점검합니다.",
  "description_en": "Synthesize booleans, bool() casting, logical operators, branching, nested if, and pass.",
  "totalQuestions": 10,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "method",
    "type",
    "if"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 불리언 변환 함수와 반전 논리 키워드를 채워 x의 참·거짓과 반전값, 단어 일치 여부를 출력해보세요.",
      "prompt_en": "Fill in the boolean-casting function and negation keyword to print truthiness and match.",
      "hint_ko": "값을 불리언으로 바꿀 때는 bool을, 참·거짓을 반전시킬 때는 not을 사용합니다.",
      "hint_en": "Enter bool and not on line 3.",
      "templateCode": "a, b = input().split()\nx = int(a)\nprint(§§§§(x), §§§ bool(x))\nprint(b == \"py\")",
      "targetCode": "a, b = input().split()\nx = int(a)\nprint(bool(x), not bool(x))\nprint(b == \"py\")",
      "testCases": [
        {
          "id": 1,
          "input": "0 py",
          "expectedOutput": "False True\nTrue"
        },
        {
          "id": 2,
          "input": "5 js",
          "expectedOutput": "True False\nFalse"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸을 채워 20000 이상 VIP는 5000 할인, 20000 이상 일반은 2000 할인, 미만은 3000 추가 후 출력해보세요.",
      "prompt_en": "Fill in the logical and branching keywords to compute the final payment price.",
      "hint_ko": "두 조건 동시 만족에는 and를, 두 번째 조건 분기에는 elif를 입력하세요.",
      "hint_en": "Enter and on line 3 and elif on line 5.",
      "templateCode": "price = int(input())\nvip = int(input())\nif price >= 20000 §§§ bool(vip):\n    price -= 5000\n§§§§ price >= 20000:\n    price -= 2000\nelse:\n    price += 3000\nprint(price)",
      "targetCode": "price = int(input())\nvip = int(input())\nif price >= 20000 and bool(vip):\n    price -= 5000\nelif price >= 20000:\n    price -= 2000\nelse:\n    price += 3000\nprint(price)",
      "testCases": [
        {
          "id": 1,
          "input": "25000\n1",
          "expectedOutput": "20000"
        },
        {
          "id": 2,
          "input": "25000\n0",
          "expectedOutput": "23000"
        },
        {
          "id": 3,
          "input": "12000\n1",
          "expectedOutput": "15000"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸을 채워 실수 온도가 0.0~100.0이면 아무 출력 없이 넘어가고 초과면 Gas, 미만이면 Ice와 Checked를 출력해보세요.",
      "prompt_en": "Fill in the float-casting function and placeholder keyword to classify temperature.",
      "hint_ko": "실수 변환에는 float를, 아무 동작 없이 지나가는 블록에는 pass를 작성합니다.",
      "hint_en": "Use float on line 1 and pass on line 4.",
      "templateCode": "temp = §§§§§(input())\nif temp >= 0.0:\n    if temp <= 100.0:\n        §§§§\n    else:\n        print(\"Gas\")\nelse:\n    print(\"Ice\")\nprint(\"Checked\")",
      "targetCode": "temp = float(input())\nif temp >= 0.0:\n    if temp <= 100.0:\n        pass\n    else:\n        print(\"Gas\")\nelse:\n    print(\"Ice\")\nprint(\"Checked\")",
      "testCases": [
        {
          "id": 1,
          "input": "25.5",
          "expectedOutput": "Checked"
        },
        {
          "id": 2,
          "input": "120.0",
          "expectedOutput": "Gas\nChecked"
        },
        {
          "id": 3,
          "input": "-4.0",
          "expectedOutput": "Ice\nChecked"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "조건식에서 같음 비교 대신 대입 기호를 사용해 발생한 문법 오류를 수정해 Open 또는 Lock을 출력해보세요.",
      "prompt_en": "Fix the SyntaxError caused by using assignment instead of equality comparison in if.",
      "hint_ko": "조건식에서 두 값이 같은지 비교할 때는 등호 두 개(==)를 사용해야 합니다.",
      "hint_en": "Change = to == in if code == \"A1\":.",
      "templateCode": "code = input()\nif code = \"A1\":\n    print(\"Open\")\nelse:\n    print(\"Lock\")",
      "targetCode": "code = input()\nif code == \"A1\":\n    print(\"Open\")\nelse:\n    print(\"Lock\")",
      "testCases": [
        {
          "id": 1,
          "input": "A1",
          "expectedOutput": "Open"
        },
        {
          "id": 2,
          "input": "B2",
          "expectedOutput": "Lock"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "조건 검사 순서가 잘못되어 95점도 B가 나오는 버그를 수정해 90 이상은 A, 70 이상은 B, 미만은 C를 출력해보세요.",
      "prompt_en": "Fix the condition ordering bug so scores >= 90 print A, >= 70 print B, and < 70 print C.",
      "hint_ko": "더 높은 기준인 s >= 90(\"A\")을 첫 번째 if에서 먼저 검사하고 s >= 70(\"B\")을 elif로 내리세요.",
      "hint_en": "Check s >= 90 (\"A\") in if before checking s >= 70 (\"B\") in elif.",
      "templateCode": "s = int(input())\nif s >= 70:\n    print(\"B\")\nelif s >= 90:\n    print(\"A\")\nelse:\n    print(\"C\")",
      "targetCode": "s = int(input())\nif s >= 90:\n    print(\"A\")\nelif s >= 70:\n    print(\"B\")\nelse:\n    print(\"C\")",
      "testCases": [
        {
          "id": 1,
          "input": "95",
          "expectedOutput": "A"
        },
        {
          "id": 2,
          "input": "75",
          "expectedOutput": "B"
        },
        {
          "id": 3,
          "input": "50",
          "expectedOutput": "C"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "9 이상 18 이하일 때만 Open이 나와야 하는데 22를 입력해도 Open이 나오는 논리 오류를 수정해보세요.",
      "prompt_en": "Fix the logic bug so Open prints only when h is between 9 and 18 inclusive.",
      "hint_ko": "두 경계 조건을 동시에 만족해야 구간 안에 들어오므로 or를 and로 고쳐야 합니다.",
      "hint_en": "Replace or with and so both h >= 9 and h <= 18 are required.",
      "templateCode": "h = int(input())\nif h >= 9 or h <= 18:\n    print(\"Open\")\nelse:\n    print(\"Closed\")",
      "targetCode": "h = int(input())\nif h >= 9 and h <= 18:\n    print(\"Open\")\nelse:\n    print(\"Closed\")",
      "testCases": [
        {
          "id": 1,
          "input": "22",
          "expectedOutput": "Closed"
        },
        {
          "id": 2,
          "input": "14",
          "expectedOutput": "Open"
        },
        {
          "id": 3,
          "input": "6",
          "expectedOutput": "Closed"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "입력 문자열이 none이 아닐 때 출력하는 코드의 else: 아래에 한 줄을 추가하여 그렇지 않을 때 Empty를 출력해보세요.",
      "prompt_en": "Add one indented line under else: to print Empty when msg equals \"none\".",
      "hint_ko": "다섯째 줄에서 공백 4칸 들여쓰기 뒤에 print(\"Empty\")를 작성하세요.",
      "hint_en": "Indent by 4 spaces under else: and write print(\"Empty\").",
      "templateCode": "msg = input()\nif msg != \"none\":\n    print(\"Msg:\" + msg)\nelse:\n    §§§§§§§§§§§§§§",
      "targetCode": "msg = input()\nif msg != \"none\":\n    print(\"Msg:\" + msg)\nelse:\n    print(\"Empty\")",
      "testCases": [
        {
          "id": 1,
          "input": "none",
          "expectedOutput": "Empty"
        },
        {
          "id": 2,
          "input": "hello",
          "expectedOutput": "Msg:hello"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "두 정수가 모두 양수인지 확인하는 조건문 아래에 한 줄을 추가하여 두 수의 합계를 출력해보세요.",
      "prompt_en": "Add one indented line under if x > 0 and y > 0: to print x + y.",
      "hint_ko": "넷째 줄에서 공백 4칸 들여쓰기 뒤에 print(x + y)를 작성하세요.",
      "hint_en": "Indent by 4 spaces on line 4 and write print(x + y).",
      "templateCode": "a, b = input().split()\nx, y = int(a), int(b)\nif x > 0 and y > 0:\n    §§§§§§§§§§§§",
      "targetCode": "a, b = input().split()\nx, y = int(a), int(b)\nif x > 0 and y > 0:\n    print(x + y)",
      "testCases": [
        {
          "id": 1,
          "input": "15 25",
          "expectedOutput": "40"
        },
        {
          "id": 2,
          "input": "3 7",
          "expectedOutput": "10"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 파이썬 코드를 실행했을 때 화면에 출력될 올바른 결과를 선택해보세요.",
      "prompt_en": "Select the exact output that will be printed when the following Python code runs.",
      "hint_ko": "정수 0은 False이고 문자열 \"0\"은 비어 있지 않아 True입니다. 따라서 첫 줄은 False, 둘째 줄은 True and True로 True입니다.",
      "hint_en": "bool(0) is False while bool(\"0\") is True, giving False on line 3 and True on line 4.",
      "targetCode": "a = 0\nb = \"0\"\nprint(bool(a) and bool(b))\nprint(not bool(a) and bool(b))",
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
          "input": "",
          "expectedOutput": "False\nTrue"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "입력값으로 60이 주어질 때, 다음 파이썬 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "When 60 is given as input, select the exact output of the following Python code.",
      "hint_ko": "60 >= 50이 참이라 pt는 150이 되고, 안쪽 60 % 20 == 0도 참이라 pass만 실행되어 최종 150이 출력됩니다.",
      "hint_en": "60 >= 50 adds 50 (150), 60 % 20 == 0 hits pass (skipping -= 10), and elif is skipped -> 150.",
      "targetCode": "n = int(input())\npt = 100\nif n >= 50:\n    pt += 50\n    if n % 20 == 0:\n        pass\n    else:\n        pt -= 10\nelif n >= 30:\n    pt += 20\nprint(pt)",
      "choices": [
        "140",
        "120",
        "170",
        "150"
      ],
      "correctChoiceIndex": 3,
      "testCases": [
        {
          "id": 1,
          "input": "60",
          "expectedOutput": "150"
        }
      ]
    }
  ]
};
