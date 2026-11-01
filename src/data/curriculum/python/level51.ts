import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_51: PracticeRound = {
  "id": "py-basic-r51",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 51,
  "title_ko": "51레벨: 매개변수가 있는 함수",
  "title_en": "Level 51: Functions with Parameters",
  "description_ko": "매개변수를 통해 숫자, 문자열은 물론 리스트·딕셔너리·집합·튜플 데이터를 함수에 전달해 처리합니다.",
  "description_en": "Pass numbers, strings, lists, dicts, sets, and tuples as arguments into parameterized functions.",
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
      "prompt_ko": "매개변수 name을 받아 인사말을 출력하는 greet(name) 함수를 만들고 \"Mina\"를 전달해 호출해보세요. (출력 예: Hi, Mina!)",
      "prompt_en": "Define greet(name) to print f\"Hi, {name}!\" and call greet(\"Mina\").",
      "hint_ko": "def greet(name): 안에서 f\"Hi, {name}!\"를 출력하고 아래에서 greet(\"Mina\")를 호출합니다.",
      "hint_en": "Accept name in def greet(name): and pass \"Mina\" when calling greet(\"Mina\").",
      "targetCode": "def greet(name):\n    print(f\"Hi, {name}!\")\ngreet(\"Mina\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Hi, Mina!"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "전달받은 매개변수를 자기 자신과 곱해 제곱값을 출력하도록 두 빈칸을 채워보세요. (출력 예: 36)",
      "prompt_en": "Fill in both blanks with the parameter name to print its square (36).",
      "hint_ko": "함수 선언부 괄호 안에 적힌 매개변수 num을 그대로 곱셈식에 사용합니다.",
      "hint_en": "Multiply num * num inside print().",
      "templateCode": "def square(num):\n    print(§§§ * §§§)\nsquare(6)",
      "targetCode": "def square(num):\n    print(num * num)\nsquare(6)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "36"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "두 매개변수 a, b를 받아 두 수의 합을 출력하는 show_add(a, b) 함수를 정의하고 15와 25로 호출해보세요.",
      "prompt_en": "Define show_add(a, b) to print a + b, then call show_add(15, 25).",
      "hint_ko": "매개변수가 여러 개일 때는 def show_add(a, b):처럼 쉼표로 구분해 작성합니다.",
      "hint_en": "Separate parameters with a comma in def show_add(a, b): and pass 15, 25.",
      "targetCode": "def show_add(a, b):\n    print(a + b)\nshow_add(15, 25)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "40"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "출력문에서 사용하는 두 매개변수 이름을 순서대로 선언부 빈칸에 채워 함수를 완성해보세요. (출력 예: Seoul-2026)",
      "prompt_en": "Fill in the two parameter names used in the f-string so Seoul-2026 is printed.",
      "hint_ko": "본문의 f\"{city}-{year}\"에 맞춰 첫째 인자는 city, 둘째 인자는 year로 받습니다.",
      "hint_en": "Write city and year inside def intro(city, year):.",
      "templateCode": "def intro(§§§§, §§§§):\n    print(f\"{city}-{year}\")\nintro(\"Seoul\", 2026)",
      "targetCode": "def intro(city, year):\n    print(f\"{city}-{year}\")\nintro(\"Seoul\", 2026)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Seoul-2026"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "실수 온도 t를 받아 30.0 이상이면 Hot, 아니면 Cool을 출력하는 check_temp(t)를 만들고 실수 입력값을 전달해보세요.",
      "prompt_en": "Define check_temp(t) printing Hot if t >= 30.0 else Cool, then pass float(input()) to it.",
      "hint_ko": "val = float(input())으로 실수를 입력받은 뒤 check_temp(val)로 함수에 넘겨줍니다.",
      "hint_en": "Read val = float(input()) and call check_temp(val).",
      "targetCode": "def check_temp(t):\n    if t >= 30.0:\n        print(\"Hot\")\n    else:\n        print(\"Cool\")\nval = float(input())\ncheck_temp(val)",
      "testCases": [
        {
          "id": 1,
          "input": "31.5",
          "expectedOutput": "Hot"
        },
        {
          "id": 2,
          "input": "24.0",
          "expectedOutput": "Cool"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "반복 횟수 매개변수와 입력받은 단어 변수를 각 빈칸에 채워 번호와 단어를 출력해보세요. (출력 예: 1:Cat)",
      "prompt_en": "Fill in the repeat count parameter and the input word variable to print numbered lines.",
      "hint_ko": "range 안에는 두 번째 매개변수 cnt를, 마지막 줄 호출에는 입력 변수 w를 전달합니다.",
      "hint_en": "Use cnt inside range(cnt) and pass w as the first argument in show_twice(w, 2).",
      "templateCode": "def show_twice(word, cnt):\n    for i in range(§§§):\n        print(f\"{i + 1}:{word}\")\nw = input()\nshow_twice(§, 2)",
      "targetCode": "def show_twice(word, cnt):\n    for i in range(cnt):\n        print(f\"{i + 1}:{word}\")\nw = input()\nshow_twice(w, 2)",
      "testCases": [
        {
          "id": 1,
          "input": "Cat",
          "expectedOutput": "1:Cat\n2:Cat"
        },
        {
          "id": 2,
          "input": "Dog",
          "expectedOutput": "1:Dog\n2:Dog"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "리스트를 매개변수 nums로 받아 길이와 합계를 한 줄에 출력하는 list_info(nums)를 만들고 [10, 20, 30]을 전달해보세요.",
      "prompt_en": "Define list_info(nums) to print len(nums) and sum(nums), then pass [10, 20, 30].",
      "hint_ko": "리스트 변수 scores = [10, 20, 30]을 만든 뒤 list_info(scores)로 리스트 전체를 전달하세요.",
      "hint_en": "Pass scores = [10, 20, 30] into list_info(scores) and print len(nums), sum(nums).",
      "targetCode": "def list_info(nums):\n    print(len(nums), sum(nums))\nscores = [10, 20, 30]\nlist_info(scores)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 60"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "딕셔너리에 찾는 키가 있는지 확인해 해당 가격을 출력하도록 두 빈칸을 채워보세요. (출력 예: 4500)",
      "prompt_en": "Check whether the key exists in the dictionary parameter and print its value (4500).",
      "hint_ko": "if key in menu:로 키 존재 여부를 검사하고 menu[key]로 값을 조회합니다.",
      "hint_en": "Use in for membership checking and key inside menu[key].",
      "templateCode": "def show_price(menu, key):\n    if key §§ menu:\n        print(menu[§§§])\n    else:\n        print(\"None\")\nitems = {\"tea\": 3000, \"pie\": 4500}\nshow_price(items, \"pie\")",
      "targetCode": "def show_price(menu, key):\n    if key in menu:\n        print(menu[key])\n    else:\n        print(\"None\")\nitems = {\"tea\": 3000, \"pie\": 4500}\nshow_price(items, \"pie\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "4500"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "집합 vips와 이름 user를 받아 집합에 있으면 이름:VIP, 없으면 이름:Guest를 출력하는 check_vip 함수를 호출해보세요.",
      "prompt_en": "Define check_vip(vips, user) to check membership in set vips and print user:VIP or user:Guest.",
      "hint_ko": "club = {\"Kim\", \"Park\"} 집합과 \"Kim\"을 check_vip(club, \"Kim\")으로 전달하세요.",
      "hint_en": "Check if user in vips: inside check_vip and call check_vip(club, \"Kim\").",
      "targetCode": "def check_vip(vips, user):\n    if user in vips:\n        print(f\"{user}:VIP\")\n    else:\n        print(f\"{user}:Guest\")\nclub = {\"Kim\", \"Park\"}\ncheck_vip(club, \"Kim\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Kim:VIP"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "전달받은 좌표 튜플을 x, y로 언패킹하고 마지막 줄에서 함수를 호출하도록 두 빈칸을 채워보세요. (출력 예: X=12,Y=35)",
      "prompt_en": "Unpack the tuple parameter into x, y and call the function with pos on the last line.",
      "hint_ko": "함수 안에서는 매개변수 pt를 언패킹하고, 아래에서는 print_point(pos) 형태로 호출합니다.",
      "hint_en": "Assign x, y = pt and call print_point(pos).",
      "templateCode": "def print_point(pt):\n    x, y = §§\n    print(f\"X={x},Y={y}\")\npos = (12, 35)\n§§§§§§§§§§§(pos)",
      "targetCode": "def print_point(pt):\n    x, y = pt\n    print(f\"X={x},Y={y}\")\npos = (12, 35)\nprint_point(pos)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "X=12,Y=35"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "호출 시 리스트와 품목 2개를 전달하지만 함수 선언부에 매개변수가 1개뿐이어서 에러가 발생합니다. 선언부를 고쳐보세요.",
      "prompt_en": "Fix the TypeError caused by declaring only 1 parameter when 2 arguments are passed.",
      "hint_ko": "본문의 bag.append(item)에서 사용하는 두 번째 매개변수 item을 선언부 괄호에 함께 적어주세요.",
      "hint_en": "Update the header to def add_item(bag, item): so both arguments are accepted.",
      "templateCode": "def add_item(bag):\n    bag.append(item)\ncart = [\"bread\"]\nadd_item(cart, \"milk\")\nprint(cart)",
      "targetCode": "def add_item(bag, item):\n    bag.append(item)\ncart = [\"bread\"]\nadd_item(cart, \"milk\")\nprint(cart)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['bread', 'milk']"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "재고 출력 함수와 딕셔너리 inv 아래에 한 줄을 추가하여 inv와 \"pen\"을 인자로 함수를 호출해보세요. (출력 예: pen:12)",
      "prompt_en": "Add one line below inv to call show_stock with inv and \"pen\" so pen:12 is printed.",
      "hint_ko": "show_stock 함수에 첫째 인자로 inv, 둘째 인자로 \"pen\"을 순서대로 전달합니다.",
      "hint_en": "Write show_stock(inv, \"pen\") on the last line.",
      "templateCode": "def show_stock(store, name):\n    print(f\"{name}:{store[name]}\")\ninv = {\"pen\": 12, \"note\": 5}\n§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "def show_stock(store, name):\n    print(f\"{name}:{store[name]}\")\ninv = {\"pen\": 12, \"note\": 5}\nshow_stock(inv, \"pen\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "pen:12"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "리스트와 집합을 인자로 전달하는 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "Select the output when passing a list and a set into the following function.",
      "hint_ko": "words의 5개 원소 중 skip 집합 {\"b\", \"d\"}에 속하지 않는 원소는 \"a\"와 \"c\" 총 2개입니다.",
      "hint_en": "Among [\"a\", \"b\", \"c\", \"b\", \"d\"], only \"a\" and \"c\" are not in {\"b\", \"d\"}, so cnt is 2.",
      "targetCode": "def filter_count(items, banned):\n    cnt = 0\n    for x in items:\n        if x not in banned:\n            cnt += 1\n    print(cnt)\nwords = [\"a\", \"b\", \"c\", \"b\", \"d\"]\nskip = {\"b\", \"d\"}\nfilter_count(words, skip)",
      "choices": [
        "2",
        "3",
        "4",
        "5"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2"
        }
      ]
    }
  ]
};
