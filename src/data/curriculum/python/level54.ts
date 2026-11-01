import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 54레벨: 함수 정의(def)와 호출 기초 (13단계 표준 구성)
// - [1,3,5,7,9단계] 블록 코딩 개념 도입 (def 정의 및 함수 호출)
// - [2,4,6,8,10단계] 빈칸 채우기 타이핑 실습 (fill_blank)
// - [11단계] 버그 수정 (fix_bug)
// - [12단계] 예제 아래 한 줄 코드 추가 작성 (one_line)
// - [13단계] 출력 결과 예측 4지선다 퀴즈 (predict_output)
// ============================================================================
export const PYTHON_LEVEL_54: PracticeRound = {
  "id": "py-basic-r54",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 54,
  "title_ko": "54레벨: 함수 정의(def)와 호출 기초",
  "title_en": "Level 54: Defining & Calling Functions (def)",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "def",
    "for_range",
    "range"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "\"Hi\"를 출력하는 say_hi 함수를 정의하고, 함수를 한 번 호출해보세요.",
      "prompt_en": "Define a function say_hi that prints \"Hi\", then call it once.",
      "hint_ko": "def 블록에 함수 이름 say_hi를 적고 안에 print(\"Hi\")를 넣은 뒤, 아래에서 say_hi()를 호출하세요.",
      "hint_en": "Use a def block named say_hi containing print(\"Hi\"), then call say_hi() below it.",
      "targetCode": "def say_hi():\n    print(\"Hi\")\nsay_hi()",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "Hi"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 \"Start\"를 출력하는 start_game 함수를 정의하고 호출해보세요.",
      "prompt_en": "Fill in the blanks to define and call start_game that prints \"Start\".",
      "hint_ko": "함수를 정의하는 키워드 def와 함수 호출문 start_game()의 이름을 채워주세요.",
      "hint_en": "Enter def on line 1 and start_game on line 3.",
      "templateCode": "§§§ start_game():\n    print(\"Start\")\n§§§§§§§§§§()",
      "targetCode": "def start_game():\n    print(\"Start\")\nstart_game()",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "Start"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "\"Ping\"을 출력하는 ping 함수를 정의한 뒤, 두 번 연속으로 호출해보세요.",
      "prompt_en": "Define a function ping that prints \"Ping\" and call it twice.",
      "hint_ko": "def ping(): 아래에 print(\"Ping\")을 넣고, 함수 밖에서 ping()을 두 줄 작성해 호출하세요.",
      "hint_en": "Define def ping(): with print(\"Ping\"), then call ping() twice.",
      "targetCode": "def ping():\n    print(\"Ping\")\nping()\nping()",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "Ping\nPing"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 \"Ding\"을 출력하는 bell 함수를 세 번 연속 호출해보세요.",
      "prompt_en": "Fill in the blanks to call the bell function three times in a row.",
      "hint_ko": "정의된 함수를 실행하려면 함수 이름 뒤에 빈 괄호를 붙여 bell()을 입력합니다.",
      "hint_en": "Write bell() on lines 4 and 5 to invoke the function three times total.",
      "templateCode": "def bell():\n    print(\"Ding\")\nbell()\n§§§§§§\n§§§§§§",
      "targetCode": "def bell():\n    print(\"Ding\")\nbell()\nbell()\nbell()",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "Ding\nDing\nDing"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "\"=== MENU ===\"와 \"1. Play\" 두 줄을 차례로 출력하는 show_menu 함수를 만들고 호출해보세요.",
      "prompt_en": "Define show_menu to print \"=== MENU ===\" and \"1. Play\", then call it.",
      "hint_ko": "def show_menu(): 블록 내부에 print 블록 두 개를 순서대로 넣고 밖에서 show_menu()를 호출하세요.",
      "hint_en": "Put both print statements inside show_menu(), then call show_menu() once.",
      "targetCode": "def show_menu():\n    print(\"=== MENU ===\")\n    print(\"1. Play\")\nshow_menu()",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "=== MENU ===\n1. Play"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 구분선 \"----\"과 \"DONE\"을 차례로 출력하는 footer 함수를 완성하고 호출해보세요.",
      "prompt_en": "Fill in the blanks to complete and call footer so it prints \"----\" and \"DONE\".",
      "hint_ko": "첫 줄 함수 정의 끝에는 ():를, 마지막 줄에는 호출문 footer()를 입력하세요.",
      "hint_en": "Complete (): at the end of line 1 and footer() on line 4.",
      "templateCode": "def footer§§§\n    print(\"----\")\n    print(\"DONE\")\n§§§§§§§§",
      "targetCode": "def footer():\n    print(\"----\")\n    print(\"DONE\")\nfooter()",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "----\nDONE"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "\"Clap!\"을 출력하는 clap 함수를 정의하고, for 반복문과 range(3)으로 3번 호출해보세요.",
      "prompt_en": "Define clap to print \"Clap!\", then call it 3 times using a for loop with range(3).",
      "hint_ko": "def clap():을 정의한 뒤, for i in range(3): 블록 안에서 clap()을 호출하세요.",
      "hint_en": "Place clap() inside a for i in range(3): loop after defining clap.",
      "targetCode": "def clap():\n    print(\"Clap!\")\nfor i in range(3):\n    clap()",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "Clap!\nClap!\nClap!"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 \"Jump\"를 출력하는 jump 함수를 for 반복문 안에서 4번 호출해보세요.",
      "prompt_en": "Fill in the blanks so jump() runs 4 times inside the for loop.",
      "hint_ko": "4회 반복하도록 range(4)를 완성하고, 반복문 내부에서 jump()를 호출하세요.",
      "hint_en": "Use range on line 3 and jump() indented on line 4.",
      "templateCode": "def jump():\n    print(\"Jump\")\nfor i in §§§§§(4):\n    §§§§§§",
      "targetCode": "def jump():\n    print(\"Jump\")\nfor i in range(4):\n    jump()",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "Jump\nJump\nJump\nJump"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "\"Open\"을 출력하는 open_box와 \"Close\"를 출력하는 close_box 함수를 각각 만들고 순서대로 호출해보세요.",
      "prompt_en": "Define open_box (\"Open\") and close_box (\"Close\"), then call them in order.",
      "hint_ko": "두 개의 def 블록을 각각 정의한 뒤, open_box()와 close_box()를 차례대로 호출하세요.",
      "hint_en": "Define both functions first, then call open_box() followed by close_box().",
      "targetCode": "def open_box():\n    print(\"Open\")\ndef close_box():\n    print(\"Close\")\nopen_box()\nclose_box()",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "Open\nClose"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 head, body, head 순서로 함수를 호출해 위아래 장식이 있는 배너를 출력해보세요.",
      "prompt_en": "Fill in the blanks to define body and call head, body, head in order.",
      "hint_ko": "둘째 함수를 정의할 때 def를 쓰고, 아래 호출부에서 body()와 head()를 순서대로 적으세요.",
      "hint_en": "Enter def on line 3, body() on line 6, and head() on line 7.",
      "templateCode": "def head():\n    print(\"****\")\n§§§ body():\n    print(\"HERO\")\nhead()\n§§§§§§\n§§§§§§",
      "targetCode": "def head():\n    print(\"****\")\ndef body():\n    print(\"HERO\")\nhead()\nbody()\nhead()",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "****\nHERO\n****"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "함수를 정의하고 호출해 Go Team!을 출력하려 하지만 오류가 발생합니다. 잘못된 부분을 모두 고쳐보세요.",
      "prompt_en": "Fix the syntax and call errors so the function runs and prints Go Team!.",
      "hint_ko": "함수 정의 줄 끝에는 콜론(:)이 있어야 하고, 함수를 실행할 때는 이름 뒤에 괄호 ()를 붙여야 합니다.",
      "hint_en": "Add a colon (:) at the end of the def line and parentheses () when calling the function.",
      "templateCode": "def cheer()\n    print(\"Go Team!\")\ncheer",
      "targetCode": "def cheer():\n    print(\"Go Team!\")\ncheer()",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "Go Team!"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "정의된 alert 함수 아래에 한 줄을 추가하여 함수를 호출하고 Warning!을 출력해보세요.",
      "prompt_en": "Add one line below the function definition to call alert and print Warning!.",
      "hint_ko": "들여쓰기 없이 맨 왼쪽에서 함수 이름 뒤에 빈 괄호를 붙여 호출하세요.",
      "hint_en": "Call alert() at the top indentation level.",
      "templateCode": "def alert():\n    print(\"Warning!\")\n§§§§§§§",
      "targetCode": "def alert():\n    print(\"Warning!\")\nalert()",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "Warning!"
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
      "hint_ko": "mark()가 먼저 한 번, 반복문으로 item()이 두 번, 마지막에 mark()가 한 번 실행됩니다.",
      "hint_en": "mark() runs once, item() runs twice in the loop, and mark() runs once at the end.",
      "targetCode": "def mark():\n    print(\"--\")\ndef item():\n    print(\"OK\")\nmark()\nfor i in range(2):\n    item()\nmark()",
      "choices": [
        "--\nOK\n--",
        "--\nOK\nOK\n--",
        "OK\n--\nOK\n--",
        "--\n--\nOK\nOK"
      ],
      "correctChoiceIndex": 1,
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "--\nOK\nOK\n--"
        }
      ]
    }
  ]
};
