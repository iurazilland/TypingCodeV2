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
      "hint_ko": "함수 선언부 괄호 안에 매개변수를 넣어 서식 문자열로 출력하고, 바깥에서 이름 문자열을 인자로 전달해 호출하세요.",
      "hint_en": "Declare the parameter in the function header, format it inside the print block, and pass the name string when calling.",
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
      "hint_ko": "함수 선언부 괄호 안에서 전달받기로 약속한 세 글자 매개변수 이름을 곱셈 기호 양쪽에 그대로 적으세요.",
      "hint_en": "Use the exact three-letter parameter name declared in the function header on both sides of the multiplication.",
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
      "hint_ko": "선언부 괄호 안에 두 매개변수를 쉼표로 나란히 적고, 호출할 때도 두 숫자 인자를 쉼표로 구분해 전달하세요.",
      "hint_en": "Separate both parameters with a comma in the header, and pass the two numbers separated by a comma when calling.",
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
      "hint_ko": "함수 본문의 서식 문자열 중괄호 안에서 참조하고 있는 두 변수 이름을 전달 순서에 맞춰 선언부에 적으세요.",
      "hint_en": "Match the two variable names referenced inside the f-string braces in the order the arguments are passed.",
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
      "prompt_ko": "정수 온도 t를 받아 30 이상이면 Hot, 아니면 Cool을 출력하는 check_temp(t)를 만들고 정수 입력값을 전달해보세요.",
      "prompt_en": "Define check_temp(t) printing Hot if t >= 30 else Cool, then pass int(input()) to it.",
      "hint_ko": "매개변수를 기준 온도와 비교해 분기 출력하는 함수를 만든 뒤, 정수로 변환한 입력값을 함수에 넘겨 호출하세요.",
      "hint_en": "Build the conditional print inside the parameterized function, then read an integer input outside and pass it into the call.",
      "targetCode": "def check_temp(t):\n    if t >= 30:\n        print(\"Hot\")\n    else:\n        print(\"Cool\")\nval = int(input())\ncheck_temp(val)",
      "testCases": [
        {
          "id": 1,
          "input": "31",
          "expectedOutput": "Hot"
        },
        {
          "id": 2,
          "input": "24",
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
      "hint_ko": "반복 범위 함수 안에는 선언부의 두 번째 매개변수를, 마지막 줄 호출의 첫 인자에는 입력을 담아 둔 변수를 적으세요.",
      "hint_en": "Pass the second parameter from the header into range(), and pass the variable storing input() as the first call argument.",
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
      "hint_ko": "매개변수로 받은 리스트의 길이와 합계를 한 줄에 출력하는 함수를 정의한 뒤, 숫자 리스트를 인자로 넘겨 호출하세요.",
      "hint_en": "Print the length and sum of the list parameter inside the function, then pass the three-element list when calling.",
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
      "hint_ko": "첫 빈칸에는 '~ 안에'를 뜻하는 두 글자 포함 연산자를, 대괄호 안에는 조회할 두 번째 매개변수 이름을 적으세요.",
      "hint_en": "Use the two-letter membership preposition for the check, and place the second parameter name inside the lookup brackets.",
      "templateCode": "def show_price(menu, key):\n    if key §§ menu:\n        print(menu[§§§])\n    else:\n        print(\"NoItem\")\nitems = {\"tea\": 3000, \"pie\": 4500}\nshow_price(items, \"pie\")",
      "targetCode": "def show_price(menu, key):\n    if key in menu:\n        print(menu[key])\n    else:\n        print(\"NoItem\")\nitems = {\"tea\": 3000, \"pie\": 4500}\nshow_price(items, \"pie\")",
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
      "hint_ko": "전달받은 이름이 집합 매개변수 안에 포함되는지 검사해 등급 문구를 분기 출력하고, 집합과 이름을 인자로 넘겨 호출하세요.",
      "hint_en": "Branch on whether the user parameter belongs to the set parameter, then invoke the function with the club set and name.",
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
      "hint_ko": "함수 안에서는 선언부의 두 글자 튜플 매개변수를 풀어 담고, 마지막 줄에서는 위에 정의한 함수 이름을 괄호 앞에 적으세요.",
      "hint_en": "Unpack the two-letter tuple parameter on line 2, and write the declared function's name before (pos) on line 5.",
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
      "hint_ko": "호출부에서 넘기는 인자 개수와 본문에서 추가할 때 쓰는 변수 이름을 확인해 선언부 괄호에 누락된 두 번째 매개변수를 적어주세요.",
      "hint_en": "The call passes two arguments and the body appends a second variable; add that missing second parameter to the function header.",
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
      "hint_ko": "선언부의 매개변수 순서(딕셔너리 먼저, 품목 문자열 다음)에 맞춰 두 인자를 쉼표로 전달해 재고 출력 함수를 호출하세요.",
      "hint_en": "Invoke the stock-printing function passing the dictionary variable first and the target item string second.",
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
      "hint_ko": "리스트의 다섯 원소를 앞에서부터 하나씩 검사할 때, 금지 집합에 속하지 않는 원소가 몇 번 등장하는지 세어 보세요.",
      "hint_en": "Step through all five list elements and count only the ones that do not belong to the excluded set.",
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
