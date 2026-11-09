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
    "range",
    "for_in",
    "while",
    "def"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "def 함수이름(): 구문으로 자주 쓸 코드 묶음을 함수로 정의해 두면, 아래에서 함수이름() 형태로 호출할 때마다 본문이 실행됩니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Defining a reusable code block with def function_name(): lets you execute its body whenever you call function_name(). Follow the blocks and type the code.",
      "hint_ko": "함수를 정의(def)한 것만으로는 실행되지 않으며, 반드시 블록 바깥에서 소괄호를 붙여 호출해야 출력됩니다.",
      "hint_en": "Defining a function with def does not run it automatically; you must call it with parentheses outside the block.",
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
      "hint_ko": "함수를 '정의하다(define)'라는 영단어의 앞 세 글자를 따온 키워드를 사용합니다.",
      "hint_en": "Use the three-letter keyword taken from the start of \"define\" before the function name.",
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
      "prompt_ko": "함수 본문에 여러 줄의 명령을 넣어 한 번 정의해 두면, 같은 코드를 반복 작성하지 않고 함수를 여러 번 호출해 재사용할 수 있습니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Once you group multiple statements inside a function body, you can run all of them repeatedly just by calling the function multiple times. Follow the blocks and type the code.",
      "hint_ko": "함수를 한 번 호출할 때마다 들여쓰기된 본문의 두 print() 문이 위에서 아래로 차례대로 실행됩니다.",
      "hint_en": "Each time you call the function, both indented print() statements inside its body execute in order.",
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
      "hint_ko": "첫 빈칸에는 '정의하다(define)'의 앞 세 글자 키워드를, 마지막 줄에는 위에서 선언한 함수 이름 뒤에 빈 소괄호를 붙여 적으세요.",
      "hint_en": "Put the three-letter keyword from \"define\" on line 1, and invoke the declared function with empty parentheses on line 4.",
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
      "prompt_ko": "정의해 둔 함수를 for 반복문 안에서 호출하면 매 반복 회차마다 함수 본문이 실행되어 반복 작업과 함수를 깔끔하게 결합할 수 있습니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Calling a defined function inside a for loop executes the function body on every iteration of the loop. Follow the blocks and type the code.",
      "hint_ko": "함수를 먼저 정의한 뒤 for문 본문 안에서 번호 출력과 함수 호출이 함께 반복되도록 작성합니다.",
      "hint_en": "Define the function at the top, then call it inside the for loop right after printing the step number.",
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
      "hint_ko": "맨 위에 선언된 알람 함수 이름 뒤에 실행을 뜻하는 빈 소괄호를 붙여 호출하세요.",
      "hint_en": "Invoke the function declared at the top by writing its name followed by empty parentheses.",
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
      "prompt_ko": "역할별로 함수를 각각 정의해 두고 if / else 조건문 안에서 상황에 맞는 함수를 선택해 호출하도록 분기할 수 있습니다. 블록의 코드를 따라 입력해보세요. (터미널 입력: o)",
      "prompt_en": "You can define separate functions for different actions and use an if / else statement to call the matching function based on input. Follow the blocks and type the code. (Terminal input: o)",
      "hint_ko": "두 함수를 먼저 정의해 둔 뒤, 입력값 비교 결과에 따라 참 분기와 거짓 분기에서 알맞은 함수를 호출합니다.",
      "hint_en": "Define both functions first, then invoke the appropriate one inside each branch of the if / else check.",
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
      "prompt_ko": "입력 점수가 60 이상이면 합격 알림 함수를, 아니면 불합격 알림 함수를 호출하도록 두 빈칸을 채워보세요. (터미널 입력: 75)",
      "prompt_en": "Call the pass notification function when score >= 60, otherwise call the fail function. (Terminal input: 75)",
      "hint_ko": "조건이 참일 때는 첫 번째 함수, 거짓일 때는 두 번째 함수 이름 뒤에 빈 소괄호를 붙여 각각 호출하세요.",
      "hint_en": "Invoke the passing function in the first branch and the failing function in the second branch, each with empty parentheses.",
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
      "prompt_ko": "함수 본문 안에서는 단순 출력뿐만 아니라 리스트 생성과 len() 계산 등 여러 단계의 데이터 처리를 묶어 실행할 수 있습니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Inside a function body, you can group data creation and calculations like list creation and len() before printing the result. Follow the blocks and type the code.",
      "hint_ko": "함수 내부에서 만든 리스트의 길이를 len()으로 구해 출력하고, 마지막 줄에서 함수를 호출해 실행합니다.",
      "hint_en": "Create the list and print its length inside the function, then call the function on the last line.",
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
      "hint_ko": "첫 빈칸에는 '~하는 동안'을 뜻하는 다섯 글자 조건 반복 키워드를, 본문 빈칸에는 위에 선언된 함수 호출문을 적으세요.",
      "hint_en": "Use the five-letter conditional loop keyword meaning \"as long as\" on line 4, and invoke the declared function with parentheses inside.",
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
      "hint_ko": "함수 이름만 적으면 함수 객체만 가리킬 뿐 본문이 실행되지 않습니다. 이름 뒤에 호출용 빈 소괄호를 덧붙여 보세요.",
      "hint_en": "Writing a function's name alone only references it without running its body; add empty parentheses at the end to invoke it.",
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
      "hint_ko": "위에서 정의한 합계 출력 함수가 실제로 실행되도록 들여쓰기 없는 맨 왼쪽 칸에서 빈 괄호와 함께 호출하세요.",
      "hint_en": "Invoke the total-printing function at the top level without indentation using empty parentheses.",
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
      "hint_ko": "반복 조건이 참인 동안 매 회차에서 번호 출력문과 함수 호출문이 어떤 순서로 몇 번 반복 실행되는지 따라가 보세요.",
      "hint_en": "Trace each loop pass while the condition holds, checking whether the step label or the function call runs first on every turn.",
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
