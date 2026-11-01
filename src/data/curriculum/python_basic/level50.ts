import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_50: PracticeRound = {
  "id": "py-basic-r50",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 50,
  "title_ko": "50레벨: 함수 정의(def)와 호출 기초",
  "title_en": "Level 50: Defining & Calling Functions (def)",
  "description_ko": "def 키워드로 나만의 함수를 정의하고 원하는 위치와 반복문 안에서 호출하는 기초를 익힙니다.",
  "description_en": "Learn how to define reusable functions with def and call them directly or inside loops.",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "type",
    "math",
    "method",
    "if",
    "for_range",
    "for_in",
    "while",
    "def"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "Hello!를 출력하는 greet 함수를 정의하고, 아래에서 함수를 호출해 인사말을 출력해보세요.",
      "prompt_en": "Define a function greet() that prints Hello!, then call greet() below.",
      "hint_ko": "def greet(): 블록 안에 print(\"Hello!\")를 배치하고 바깥 아래에서 greet()를 호출하세요.",
      "hint_en": "Place print(\"Hello!\") inside def greet(): and call greet() at top level.",
      "targetCode": "def greet():\n    print(\"Hello!\")\ngreet()",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Hello!"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "함수를 선언하는 키워드를 빈칸에 채워 start 함수를 완성하고 Ready를 출력해보세요.",
      "prompt_en": "Fill in the function definition keyword to complete start() and print Ready.",
      "hint_ko": "파이썬에서 새 함수를 만들 때는 def 함수이름(): 형식으로 시작합니다.",
      "hint_en": "Use the def keyword before the function name.",
      "templateCode": "§§§ start():\n    print(\"Ready\")\nstart()",
      "targetCode": "def start():\n    print(\"Ready\")\nstart()",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Ready"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "===와 GO!를 두 줄로 출력하는 banner 함수를 정의한 뒤, 두 번 연속 호출해보세요.",
      "prompt_en": "Define banner() to print === and GO! on two lines, then call banner() twice.",
      "hint_ko": "함수를 한 번 정의해 두면 banner()를 여러 번 호출해 같은 동작을 재사용할 수 있습니다.",
      "hint_en": "Define def banner(): with two print statements, then call banner() twice.",
      "targetCode": "def banner():\n    print(\"===\")\n    print(\"GO!\")\nbanner()\nbanner()",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "===\nGO!\n===\nGO!"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "함수 정의 키워드와 두 번째 함수 호출문을 빈칸에 채워 Pong이 두 줄 출력되도록 해보세요.",
      "prompt_en": "Fill in the function definition keyword and the second call so Pong prints twice.",
      "hint_ko": "첫 빈칸에는 def를, 마지막 줄에는 이름 뒤에 소괄호를 붙인 ping()을 입력하세요.",
      "hint_en": "Write def on line 1 and ping() on line 4.",
      "templateCode": "§§§ ping():\n    print(\"Pong\")\nping()\n§§§§§§",
      "targetCode": "def ping():\n    print(\"Pong\")\nping()\nping()",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Pong\nPong"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "Win!을 출력하는 cheer 함수를 만들고, for 반복문으로 번호(1~3)와 함께 3번 호출해보세요. (출력 예: #1 다음 줄 Win!)",
      "prompt_en": "Define cheer() to print Win!, then use a for loop to print #1..#3 and call cheer() 3 times.",
      "hint_ko": "for i in range(3): 안에서 print(f\"#{i + 1}\")를 실행한 뒤 cheer()를 호출하세요.",
      "hint_en": "Inside for i in range(3):, print f\"#{i + 1}\" and call cheer().",
      "targetCode": "def cheer():\n    print(\"Win!\")\nfor i in range(3):\n    print(f\"#{i + 1}\")\n    cheer()",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "#1\nWin!\n#2\nWin!\n#3\nWin!"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "반복문 안의 빈칸에 알람 함수 호출문을 채워 숫자와 Beep!가 번갈아 출력되도록 해보세요.",
      "prompt_en": "Fill in the function call inside the loop so each index and Beep! print alternately.",
      "hint_ko": "위에 정의된 함수를 실행하려면 들여쓰기를 맞춰 alarm()을 호출합니다.",
      "hint_en": "Call alarm() inside the for loop body.",
      "templateCode": "def alarm():\n    print(\"Beep!\")\nfor n in range(2):\n    print(n)\n    §§§§§§§",
      "targetCode": "def alarm():\n    print(\"Beep!\")\nfor n in range(2):\n    print(n)\n    alarm()",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "0\nBeep!\n1\nBeep!"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "Open과 Close를 각각 출력하는 두 함수를 정의하고, 입력값이 \"o\"이면 열기 함수를, 아니면 닫기 함수를 호출해보세요.",
      "prompt_en": "Define open_box() and close_box(), then call open_box() if input is \"o\", else close_box().",
      "hint_ko": "if cmd == \"o\": 분기에서 open_box()를, else: 분기에서 close_box()를 호출합니다.",
      "hint_en": "Branch on if cmd == \"o\": to call open_box(), and else: to call close_box().",
      "targetCode": "def open_box():\n    print(\"Open\")\ndef close_box():\n    print(\"Close\")\ncmd = input()\nif cmd == \"o\":\n    open_box()\nelse:\n    close_box()",
      "testCases": [
        {
          "id": 1,
          "input": "o",
          "expectedOutput": "Open"
        },
        {
          "id": 2,
          "input": "c",
          "expectedOutput": "Close"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "입력 점수가 60 이상이면 합격 알림 함수를, 아니면 불합격 알림 함수를 호출하도록 두 빈칸을 채워보세요.",
      "prompt_en": "Call the pass notification function when score >= 60, otherwise call the fail function.",
      "hint_ko": "위에 선언된 함수 이름 뒤에 괄호를 붙여 pass_msg()와 fail_msg()를 각각 호출하세요.",
      "hint_en": "Write pass_msg() in the if branch and fail_msg() in the else branch.",
      "templateCode": "def pass_msg():\n    print(\"PASS\")\ndef fail_msg():\n    print(\"FAIL\")\nscore = int(input())\nif score >= 60:\n    §§§§§§§§§§\nelse:\n    §§§§§§§§§§",
      "targetCode": "def pass_msg():\n    print(\"PASS\")\ndef fail_msg():\n    print(\"FAIL\")\nscore = int(input())\nif score >= 60:\n    pass_msg()\nelse:\n    fail_msg()",
      "testCases": [
        {
          "id": 1,
          "input": "75",
          "expectedOutput": "PASS"
        },
        {
          "id": 2,
          "input": "45",
          "expectedOutput": "FAIL"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "함수 안에서 리스트 [\"Kim\", \"Lee\", \"Park\"]을 만들고 인원수를 f-string으로 출력하는 show_team을 정의해 호출해보세요. (출력 예: Team:3)",
      "prompt_en": "Define show_team() to create [\"Kim\", \"Lee\", \"Park\"] and print f\"Team:{len(members)}\", then call it.",
      "hint_ko": "함수 내부에서도 리스트 생성과 len(), f-string을 그대로 조합해 사용할 수 있습니다.",
      "hint_en": "Create members inside def show_team():, print f\"Team:{len(members)}\", and call show_team().",
      "targetCode": "def show_team():\n    members = [\"Kim\", \"Lee\", \"Park\"]\n    print(f\"Team:{len(members)}\")\nshow_team()",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Team:3"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "조건 반복 키워드와 함수 호출문을 두 빈칸에 채워 cnt가 0보다 큰 동안 Tick을 3번 출력해보세요.",
      "prompt_en": "Fill in the loop keyword and the function call so Tick prints 3 times while cnt > 0.",
      "hint_ko": "첫 빈칸에는 while을 입력하고, 반복문 내부에서는 tick()을 호출한 뒤 cnt를 1씩 줄입니다.",
      "hint_en": "Use while for the loop header and call tick() inside the body.",
      "templateCode": "def tick():\n    print(\"Tick\")\ncnt = 3\n§§§§§ cnt > 0:\n    §§§§§§\n    cnt -= 1",
      "targetCode": "def tick():\n    print(\"Tick\")\ncnt = 3\nwhile cnt > 0:\n    tick()\n    cnt -= 1",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Tick\nTick\nTick"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "함수를 정의한 뒤 마지막 줄에서 호출할 때 소괄호가 빠져 아무것도 출력되지 않는 버그를 수정해보세요.",
      "prompt_en": "Fix the bug on the last line where missing parentheses prevent the function from running.",
      "hint_ko": "함수 이름만 적으면 실행되지 않습니다. 이름 뒤에 ()를 붙여 호출해야 본문이 실행됩니다.",
      "hint_en": "Add parentheses () after welcome on the last line to invoke the function.",
      "templateCode": "def welcome():\n    print(\"Hi Python\")\nwelcome",
      "targetCode": "def welcome():\n    print(\"Hi Python\")\nwelcome()",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Hi Python"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "리스트 합계를 출력하는 함수 정의 아래에 한 줄을 추가하여 함수를 호출해 결과를 출력해보세요. (출력 예: Sum:60)",
      "prompt_en": "Add one line below the function definition to call it and print Sum:60.",
      "hint_ko": "들여쓰기 없이 맨 왼쪽 칸에서 show_total()을 호출하세요.",
      "hint_en": "Call show_total() at the top level on the last line.",
      "templateCode": "def show_total():\n    nums = [10, 20, 30]\n    print(f\"Sum:{sum(nums)}\")\n§§§§§§§§§§§§",
      "targetCode": "def show_total():\n    nums = [10, 20, 30]\n    print(f\"Sum:{sum(nums)}\")\nshow_total()",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Sum:60"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 파이썬 코드를 실행했을 때 출력될 결과를 선택해보세요.",
      "prompt_en": "Select the exact output produced when the following Python code runs.",
      "hint_ko": "n이 1, 2일 때 각각 Step:n을 출력한 직후 step_log()가 호출되어 OK가 뒤따라 출력됩니다.",
      "hint_en": "For n = 1 and n = 2, the loop prints Step:n followed immediately by step_log() printing OK.",
      "targetCode": "def step_log():\n    print(\"OK\")\nn = 1\nwhile n <= 2:\n    print(f\"Step:{n}\")\n    step_log()\n    n += 1",
      "choices": [
        "Step:1\nStep:2\nOK",
        "OK\nStep:1\nOK\nStep:2",
        "Step:1\nOK",
        "Step:1\nOK\nStep:2\nOK"
      ],
      "correctChoiceIndex": 3,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Step:1\nOK\nStep:2\nOK"
        }
      ]
    }
  ]
};
