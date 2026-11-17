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
  "totalQuestions": 15,
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] def greet():로 인사 함수를 정의하고 greet()를 호출해 Hello!를 출력해보세요.",
      "prompt_en": "[Block] Define greet() with def and call greet() to print Hello!.",
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
      "prompt_ko": "[빈칸 채우기] 함수를 선언하는 키워드를 빈칸에 채워 start 함수를 완성하고 Ready를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the function definition keyword to complete start() and print Ready.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 두 줄을 출력하는 banner() 함수를 정의하고 두 번 연속 호출해보세요.",
      "prompt_en": "[Block] Define banner() with two print statements and call it twice in a row.",
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
      "prompt_ko": "[빈칸 채우기] 함수 정의 키워드와 두 번째 함수 호출문을 빈칸에 채워 Pong이 두 줄 출력되도록 해보세요.",
      "prompt_en": "[Fill Blank] Fill in the function definition keyword and the second call so Pong prints twice.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] cheer() 함수를 정의하고 for 반복문 안에서 3번 호출해보세요.",
      "prompt_en": "[Block] Define cheer() and call it 3 times inside a for loop.",
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
      "prompt_ko": "[빈칸 채우기] 반복문 안의 빈칸에 알람 함수 호출문을 채워 숫자와 Beep!가 번갈아 출력되도록 해보세요.",
      "prompt_en": "[Fill Blank] Fill in the function call inside the loop so each index and Beep! print alternately.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 두 함수를 정의하고 if / else 조건문으로 입력에 맞는 함수를 호출해보세요.",
      "prompt_en": "[Block] Define two functions and use if / else to call the matching function based on input.",
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
      "prompt_ko": "[빈칸 채우기] 점수가 60 이상이면 합격 함수를, 아니면 불합격 함수를 호출해보세요.",
      "prompt_en": "[Fill Blank] Call the pass function when score >= 60, otherwise call the fail function.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 함수 안에서 리스트를 만들고 인원수를 출력하는 show_team()을 정의·호출해보세요.",
      "prompt_en": "[Block] Define and call show_team() that creates a list and prints its member count.",
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
      "prompt_ko": "[빈칸 채우기] 함수 내부에서 리스트 합계를 계산해 출력하는 show_sum()을 정의하고 호출해보세요.",
      "prompt_en": "[Fill Blank] Define and call show_sum() so it computes and prints the sum of the list.",
      "hint_ko": "첫 빈칸에는 함수 정의 키워드를 적고, 마지막 줄에는 선언한 함수 이름 뒤에 빈 소괄호를 붙여 호출하세요.",
      "hint_en": "Use the 3-letter function definition keyword on line 1, and call the function with empty parentheses on line 4.",
      "templateCode": "§§§ show_sum():\n    nums = [10, 20, 30]\n    print(f\"Sum:{sum(nums)}\")\n§§§§§§§§§§",
      "targetCode": "def show_sum():\n    nums = [10, 20, 30]\n    print(f\"Sum:{sum(nums)}\")\nshow_sum()",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Sum:60"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 함수를 정의할 때 for 키워드를 잘못 사용한 문법 오류를 def로 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the SyntaxError where for was used instead of def to define welcome().",
      "hint_ko": "함수를 선언할 때는 반복문 키워드 for가 아니라 함수 정의 키워드 def를 써야 합니다.",
      "hint_en": "Use the function definition keyword def instead of the loop keyword for on line 1.",
      "templateCode": "for welcome():\n    print(\"Hi Python\")\nwelcome()",
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
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 60점 이상일 때 불합격 함수가 잘못 호출되는 버그를 합격 함수 호출로 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the bug where fail_msg() is called instead of pass_msg() when score >= 60.",
      "hint_ko": "if score >= 60: 조건이 참인 첫 번째 분기에서는 fail_msg()가 아니라 pass_msg()를 호출해야 합니다.",
      "hint_en": "Call pass_msg() instead of fail_msg() inside the if score >= 60: branch.",
      "templateCode": "def pass_msg():\n    print(\"PASS\")\ndef fail_msg():\n    print(\"FAIL\")\nscore = 80\nif score >= 60:\n    fail_msg()\nelse:\n    fail_msg()",
      "targetCode": "def pass_msg():\n    print(\"PASS\")\ndef fail_msg():\n    print(\"FAIL\")\nscore = 80\nif score >= 60:\n    pass_msg()\nelse:\n    fail_msg()",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "PASS"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] Beep!를 출력하는 함수 alarm의 선언부 첫 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the first line to define the function alarm().",
      "hint_ko": "def 키워드 뒤에 함수 이름 alarm과 빈 소괄호 (), 콜론(:)을 붙여 선언부를 작성하세요.",
      "hint_en": "Write def alarm(): on the first line.",
      "templateCode": "§§§§§§§§§§§§\n    print(\"Beep!\")\nalarm()",
      "targetCode": "def alarm():\n    print(\"Beep!\")\nalarm()",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Beep!"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 정의된 show_total 함수를 마지막 줄에서 호출해 Sum:60을 출력해보세요.",
      "prompt_en": "[Complete Line] Call the defined function show_total() on the last line to print Sum:60.",
      "hint_ko": "위에서 정의한 함수 이름 show_total 뒤에 빈 괄호 ()를 붙여 호출하세요.",
      "hint_en": "Invoke show_total() at the top level without indentation.",
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
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 파이썬 코드를 실행했을 때 출력될 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output produced when the following Python code runs.",
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
