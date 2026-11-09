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
      "hint_ko": "첫째 빈칸에는 정수를 참·거짓 자료형으로 바꾸는 네 글자 내장 함수를, 둘째 빈칸에는 그 결과를 반대로 뒤집는 세 글자 부정 논리 연산자를 채워보세요.",
      "hint_en": "In the first blank, call the four-letter casting function that turns a value into a truth type; in the second, place the three-letter negation keyword.",
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
      "hint_ko": "셋째 줄에는 금액 기준과 등급 조건이 동시에 성립해야 참이 되는 논리 연산자를, 다섯째 줄에는 앞 조건이 거짓일 때 다음 조건을 이어 검사하는 네 글자 분기 키워드를 넣으세요.",
      "hint_en": "On line 3, join both requirements with the conjunction keyword; on line 5, start the next conditional check with the four-letter contraction of \"else if\".",
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
      "prompt_ko": "두 빈칸을 채워 정수 온도가 0~100이면 아무 출력 없이 넘어가고 초과면 Gas, 미만이면 Ice와 Checked를 출력해보세요.",
      "prompt_en": "Fill in the int-casting function and placeholder keyword to classify temperature.",
      "hint_ko": "첫째 줄에는 입력을 정수 자료형으로 바꾸는 세 글자 변환 함수를, 넷째 줄의 빈 실행 블록에는 아무 동작 없이 그냥 지나가는 네 글자 자리 채움 키워드를 적어보세요.",
      "hint_en": "On line 1, convert the input using the three-letter integer casting function; on line 4, fill the empty branch with the four-letter no-op keyword meaning \"skip past\".",
      "templateCode": "temp = §§§(input())\nif temp >= 0:\n    if temp <= 100:\n        §§§§\n    else:\n        print(\"Gas\")\nelse:\n    print(\"Ice\")\nprint(\"Checked\")",
      "targetCode": "temp = int(input())\nif temp >= 0:\n    if temp <= 100:\n        pass\n    else:\n        print(\"Gas\")\nelse:\n    print(\"Ice\")\nprint(\"Checked\")",
      "testCases": [
        {
          "id": 1,
          "input": "25",
          "expectedOutput": "Checked"
        },
        {
          "id": 2,
          "input": "120",
          "expectedOutput": "Gas\nChecked"
        },
        {
          "id": 3,
          "input": "-4",
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
      "hint_ko": "조건식 자리에 두 값이 같은지 물어보는 비교 연산자 대신 변수에 값을 저장하는 대입 기호가 쓰여 문법 오류가 발생하고 있습니다.",
      "hint_en": "The condition header uses the single-character variable assignment symbol instead of the two-character operator that tests whether two values are equal.",
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
      "hint_ko": "다중 조건문은 위에서부터 차례로 검사하다가 처음 참이 되는 분기만 실행하고 종료됩니다. 더 넓은 범위의 낮은 점수 기준이 위에 있어 높은 점수 구간까지 먼저 가로채고 있습니다.",
      "hint_en": "A multi-way chain stops at the very first true condition; testing the broader lower threshold at the top catches high scores before they ever reach the stricter check below.",
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
      "hint_ko": "현재 논리 연산자는 두 기준 중 하나만 만족해도 참이 되어 어떤 숫자를 넣어도 조건을 통과해버립니다. 시작 시각 이상이면서 동시에 종료 시각 이하가 되도록 논리 관계를 고쳐보세요.",
      "hint_en": "Requiring only one of the two bounds makes every number satisfy at least one side; change the logical connective so both the lower bound together with the upper bound must hold.",
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
      "hint_ko": "위쪽 분기의 들여쓰기 간격과 출력 형식을 참고하여, 나머지 분기 블록 안에서 요구된 안내 단어가 출력되도록 작성해보세요.",
      "hint_en": "Match the indentation level used in the upper branch to output the required fallback label inside the lower block.",
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
      "hint_ko": "조건문 바로 아래에 속하는 실행문이 되도록 들여쓰기를 맞춘 뒤, 위에서 정수로 변환해 둔 두 변수의 덧셈 결과를 출력해보세요.",
      "hint_en": "Keep the proper block indentation beneath the condition header to output the sum of the two integer variables prepared above.",
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
      "hint_ko": "숫자 0과 글자가 한 개 들어 있는 문자열 \"0\"이 불리언 변환에서 각각 어떻게 판정되는지 먼저 구분한 뒤, 셋째 줄과 넷째 줄의 논리식을 차례로 계산해보세요.",
      "hint_en": "First distinguish the truthiness of numeric zero from a non-empty one-character string, then evaluate the two logical expressions line by line.",
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
      "hint_ko": "바깥 조건 통과 후 누적되는 점수를 먼저 확인하고, 안쪽 중첩 조건의 나머지 판정 결과와 바깥 다중 분기의 건너뛰기 규칙을 순서대로 추적해보세요.",
      "hint_en": "Track the outer threshold update first, check which path of the nested remainder test runs, then recall whether a matching outer branch skips subsequent chain branches.",
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
