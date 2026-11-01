import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_48: PracticeRound = {
  "id": "py-basic-r48",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 48,
  "title_ko": "48레벨: 딕셔너리(dict) 생성과 값 조회",
  "title_en": "Level 48: Dictionary Creation & Lookup",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "method",
    "math"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "딕셔너리 user에 {\"name\": \"Kim\", \"age\": 20}을 저장하고 \"name\" 키의 값을 출력해보세요.",
      "prompt_en": "Create dictionary user = {\"name\": \"Kim\", \"age\": 20} and print user[\"name\"].",
      "hint_ko": "중괄호 {키: 값} 형태로 user를 만들고 user[\"name\"]으로 값을 조회해 출력하세요.",
      "hint_en": "Define user with {\"name\": \"Kim\", \"age\": 20} and access user[\"name\"].",
      "targetCode": "user = {\"name\": \"Kim\", \"age\": 20}\nprint(user[\"name\"])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Kim"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸에 문자열 키를 채워 딕셔너리 book의 제목과 가격을 차례대로 출력해보세요.",
      "prompt_en": "Fill in the two string keys to print the title and price from dictionary book.",
      "hint_ko": "대괄호 안에 따옴표를 포함한 키 이름 \"title\"과 \"price\"를 각각 입력하세요.",
      "hint_en": "Enter \"title\" and \"price\" inside the square brackets.",
      "templateCode": "book = {§§§§§§§: \"Python\", §§§§§§§: 18000}\nprint(book[\"title\"], book[\"price\"])",
      "targetCode": "book = {\"title\": \"Python\", \"price\": 18000}\nprint(book[\"title\"], book[\"price\"])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Python 18000"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "딕셔너리 scores = {\"kor\": 85, \"eng\": 95}를 만들고 두 과목 점수의 합을 출력해보세요.",
      "prompt_en": "Create dictionary scores = {\"kor\": 85, \"eng\": 95} and print the sum of the two scores.",
      "hint_ko": "scores[\"kor\"] + scores[\"eng\"] 수식을 print() 안에 넣어 합계를 출력하세요.",
      "hint_en": "Add scores[\"kor\"] and scores[\"eng\"] inside print().",
      "targetCode": "scores = {\"kor\": 85, \"eng\": 95}\nprint(scores[\"kor\"] + scores[\"eng\"])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "180"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 버거 1개와 탄산음료 2개의 총 주문 금액 total을 계산해 출력해보세요.",
      "prompt_en": "Fill in the blanks to compute total for 1 burger and 2 sodas, then print total.",
      "hint_ko": "menu[\"burger\"]와 menu[\"soda\"]로 각 가격을 꺼내 수식을 완성하세요.",
      "hint_en": "Look up menu[\"burger\"] and menu[\"soda\"] to calculate the total price.",
      "templateCode": "menu = {\"burger\": 5000, \"soda\": 2000}\ntotal = §§§§§§§§§§§§§§ + §§§§§§§§§§§§ * 2\nprint(total)",
      "targetCode": "menu = {\"burger\": 5000, \"soda\": 2000}\ntotal = menu[\"burger\"] + menu[\"soda\"] * 2\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "9000"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "학용품 딕셔너리 bag = {\"pen\": 3, \"note\": 2, \"ruler\": 1}의 키-값 쌍 개수를 출력해보세요.",
      "prompt_en": "Create bag = {\"pen\": 3, \"note\": 2, \"ruler\": 1} and print how many key-value pairs it has.",
      "hint_ko": "딕셔너리에 len(bag)을 사용하면 저장된 키-값 쌍의 개수를 구할 수 있습니다.",
      "hint_en": "Use len(bag) to count the number of key-value pairs in the dictionary.",
      "targetCode": "bag = {\"pen\": 3, \"note\": 2, \"ruler\": 1}\nprint(len(bag))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 딕셔너리 team의 전체 항목 개수와 \"lead\"의 이름을 나란히 출력해보세요.",
      "prompt_en": "Fill in the blank to print the number of items in team followed by team[\"lead\"].",
      "hint_ko": "내장 함수 len(team)으로 딕셔너리의 항목 수를 구할 수 있습니다.",
      "hint_en": "Call len(team) to get the pair count.",
      "templateCode": "team = {\"lead\": \"Lee\", \"dev\": \"Park\"}\nprint(§§§§§§§§§, team[\"lead\"])",
      "targetCode": "team = {\"lead\": \"Lee\", \"dev\": \"Park\"}\nprint(len(team), team[\"lead\"])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2 Lee"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "user = {\"name\": \"Han\"}에서 없는 키 \"city\"를 .get()으로 기본값 없이 한 번, \"Seoul\" 기본값으로 한 번 출력해보세요.",
      "prompt_en": "On user = {\"name\": \"Han\"}, print user.get(\"city\") and then user.get(\"city\", \"Seoul\").",
      "hint_ko": "없는 키를 .get(\"city\")로 조회하면 None이 나오고, 두 번째 인자로 \"Seoul\"을 주면 기본값이 반환됩니다.",
      "hint_en": "user.get(\"city\") returns None, while user.get(\"city\", \"Seoul\") returns \"Seoul\".",
      "targetCode": "user = {\"name\": \"Han\"}\nprint(user.get(\"city\"))\nprint(user.get(\"city\", \"Seoul\"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "None\nSeoul"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸에 .get() 호출을 채워 있는 키 \"theme\"(기본값 \"light\")와 없는 키 \"font\"(기본값 \"sans\")를 출력해보세요.",
      "prompt_en": "Fill in the .get() calls to look up \"theme\" (default \"light\") and \"font\" (default \"sans\").",
      "hint_ko": "키가 있으면 원래 값이, 없으면 두 번째 인자로 넘긴 기본값이 반환됩니다.",
      "hint_en": "Use get(\"theme\", \"light\") on line 2 and get(\"font\", \"sans\") on line 3.",
      "templateCode": "cfg = {\"theme\": \"dark\"}\nprint(cfg.§§§§§§§§§§§§§§§§§§§§§)\nprint(cfg.§§§§§§§§§§§§§§§§§§§)",
      "targetCode": "cfg = {\"theme\": \"dark\"}\nprint(cfg.get(\"theme\", \"light\"))\nprint(cfg.get(\"font\", \"sans\"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "dark\nsans"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "과일 이름 item을 입력받아 stock = {\"apple\": 12, \"pear\": 5}에서 재고를 조회하고, 없으면 0을 출력해보세요.",
      "prompt_en": "Read fruit name item and print its stock from {\"apple\": 12, \"pear\": 5}, or 0 if missing.",
      "hint_ko": "item = input()으로 입력받은 뒤 stock.get(item, 0)을 출력하면 없는 과일도 오류 없이 0이 출력됩니다.",
      "hint_en": "Read item = input() and print stock.get(item, 0).",
      "targetCode": "stock = {\"apple\": 12, \"pear\": 5}\nitem = input()\nprint(stock.get(item, 0))",
      "testCases": [
        {
          "id": 1,
          "input": "apple",
          "expectedOutput": "12"
        },
        {
          "id": 2,
          "input": "grape",
          "expectedOutput": "0"
        },
        {
          "id": 3,
          "input": "pear",
          "expectedOutput": "5"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 입력받은 등급 k의 평점을 조회하되, 사전에 없는 등급이면 0을 출력해보세요.",
      "prompt_en": "Fill in the blank to print the grade point for input k, defaulting to 0 when k is not found.",
      "hint_ko": "딕셔너리 뒤에 .get(k, 0)을 붙여 안전하게 값을 조회하세요.",
      "hint_en": "Use .get(k, 0) on dictionary grade.",
      "templateCode": "grade = {\"A\": 4, \"B\": 3, \"C\": 2}\nk = input()\nprint(grade§§§§§§§§§§)",
      "targetCode": "grade = {\"A\": 4, \"B\": 3, \"C\": 2}\nk = input()\nprint(grade.get(k, 0))",
      "testCases": [
        {
          "id": 1,
          "input": "A",
          "expectedOutput": "4"
        },
        {
          "id": 2,
          "input": "F",
          "expectedOutput": "0"
        },
        {
          "id": 3,
          "input": "B",
          "expectedOutput": "3"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "등록되지 않은 코인 이름이 입력되면 KeyError가 발생합니다. 없는 키일 때 0을 출력하도록 수정해보세요.",
      "prompt_en": "Fix the KeyError when an unknown coin name is entered so that missing keys safely print 0.",
      "hint_ko": "대괄호 조회는 없는 키에서 에러를 발생시킵니다. 기본값 0을 지정할 수 있는 조회 메서드로 바꿔보세요.",
      "hint_en": "Replace square-bracket indexing with .get() and a default value of 0.",
      "templateCode": "coins = {\"gold\": 50, \"silver\": 20}\nk = input()\nprint(coins[k])",
      "targetCode": "coins = {\"gold\": 50, \"silver\": 20}\nk = input()\nprint(coins.get(k, 0))",
      "testCases": [
        {
          "id": 1,
          "input": "bronze",
          "expectedOutput": "0"
        },
        {
          "id": 2,
          "input": "gold",
          "expectedOutput": "50"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "통화 코드 cur를 입력받는 코드 아래에 한 줄을 추가하여 환율을 출력하고, 없으면 -1을 출력해보세요.",
      "prompt_en": "Add one line below cur = input() to print the exchange rate from rates, or -1 if missing.",
      "hint_ko": "rates.get(cur, -1)을 print()로 감싸 출력하면 없는 통화 코드일 때 -1이 출력됩니다.",
      "hint_en": "Write print(rates.get(cur, -1)) on the final line.",
      "templateCode": "rates = {\"USD\": 1350, \"JPY\": 9}\ncur = input()\n§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "rates = {\"USD\": 1350, \"JPY\": 9}\ncur = input()\nprint(rates.get(cur, -1))",
      "testCases": [
        {
          "id": 1,
          "input": "USD",
          "expectedOutput": "1350"
        },
        {
          "id": 2,
          "input": "EUR",
          "expectedOutput": "-1"
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
      "hint_ko": "\"a\"는 존재하므로 x=10, \"c\"는 없으므로 기본값 y=5가 되며 .get()은 원본 d를 바꾸지 않아 길이는 2입니다.",
      "hint_en": "x is 10, y falls back to 5, and .get() does not mutate d so len(d) stays 2.",
      "targetCode": "d = {\"a\": 10, \"b\": 20}\nx = d.get(\"a\", 5)\ny = d.get(\"c\", 5)\nprint(x + y, len(d))",
      "choices": [
        "15 3",
        "10 2",
        "15 2",
        "35 2"
      ],
      "correctChoiceIndex": 2,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "15 2"
        }
      ]
    }
  ]
};
