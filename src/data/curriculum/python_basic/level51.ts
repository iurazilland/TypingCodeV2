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
      "prompt_ko": "[블록 조립] 매개변수 name을 받는 greet(name) 함수를 정의하고 \"Mina\"를 전달해 호출해보세요.",
      "prompt_en": "[Block] Define greet(name) with parameter name and call greet(\"Mina\").",
      "hint_ko": "호출할 때 소괄호 안에 넣은 문자열이 함수 선언부의 매개변수 자리에 그대로 전달됩니다.",
      "hint_en": "The string argument passed inside the call parentheses is assigned to the parameter variable in the function header.",
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
      "prompt_ko": "[빈칸 채우기] 전달받은 매개변수를 자기 자신과 곱해 제곱값을 출력하도록 두 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in both blanks with the parameter name to print its square (36).",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 두 매개변수를 더하는 show_add(a, b) 함수를 정의하고 15, 25를 전달해 호출해보세요.",
      "prompt_en": "[Block] Define show_add(a, b) to print a + b and call it with 15 and 25.",
      "hint_ko": "호출부의 첫 번째 인자는 첫 번째 매개변수에, 두 번째 인자는 두 번째 매개변수에 순서대로 전달됩니다.",
      "hint_en": "The first argument goes to the first parameter and the second argument goes to the second parameter.",
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
      "prompt_ko": "[빈칸 채우기] 출력문에서 사용하는 두 매개변수 이름을 순서대로 선언부 빈칸에 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the two parameter names used in the f-string so Seoul-2026 is printed.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 기온 매개변수 t를 판별하는 check_temp(t) 함수를 정의하고 입력값을 전달해보세요.",
      "prompt_en": "[Block] Define check_temp(t) with if / else and call it with integer input.",
      "hint_ko": "바깥에서 int(input())으로 받은 정수를 변수에 담아 함수 호출 괄호 안에 넣어 전달합니다.",
      "hint_en": "Read the integer input into a variable outside the function, then pass that variable into the function call.",
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
      "prompt_ko": "[빈칸 채우기] 기준 점수 매개변수와 입력 점수 변수를 채워 합격 여부를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the cutoff parameter and the input score variable to print Pass or Fail.",
      "hint_ko": "선언부의 두 번째 빈칸에는 조건문에서 비교하는 세 글자 매개변수 이름을, 호출부에는 입력 변수 이름을 적으세요.",
      "hint_en": "Put the 3-letter cutoff parameter name in the header and pass the input variable s in the call.",
      "templateCode": "def check_cut(score, §§§):\n    if score >= cut:\n        print(\"Pass\")\n    else:\n        print(\"Fail\")\ns = int(input())\ncheck_cut(§, 70)",
      "targetCode": "def check_cut(score, cut):\n    if score >= cut:\n        print(\"Pass\")\n    else:\n        print(\"Fail\")\ns = int(input())\ncheck_cut(s, 70)",
      "testCases": [
        {
          "id": 1,
          "input": "80",
          "expectedOutput": "Pass"
        },
        {
          "id": 2,
          "input": "60",
          "expectedOutput": "Fail"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 리스트를 매개변수로 받아 길이와 합계를 출력하는 list_info(nums) 함수를 완성해보세요.",
      "prompt_en": "[Block] Define list_info(nums) to print the length and sum of a list, then call it with scores.",
      "hint_ko": "리스트 변수를 인자로 넘기면 함수 내부 매개변수가 그 리스트를 받아 길이와 합계를 계산합니다.",
      "hint_en": "Passing the list variable assigns that list to the function's parameter so len() and sum() can inspect it.",
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
      "prompt_ko": "[빈칸 채우기] 딕셔너리와 키를 매개변수로 받아 품목과 가격을 출력하도록 두 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the dictionary parameter and lookup key to print pie:4500.",
      "hint_ko": "선언부 첫 빈칸에는 네 글자 메뉴 사전 매개변수 이름을, 대괄호 안에는 조회할 세 글자 키 매개변수를 적으세요.",
      "hint_en": "Declare the 4-letter menu parameter in the header and use the 3-letter key parameter inside brackets.",
      "templateCode": "def show_price(§§§§, key):\n    print(f\"{key}:{menu[§§§]}\")\nitems = {\"tea\": 3000, \"pie\": 4500}\nshow_price(items, \"pie\")",
      "targetCode": "def show_price(menu, key):\n    print(f\"{key}:{menu[key]}\")\nitems = {\"tea\": 3000, \"pie\": 4500}\nshow_price(items, \"pie\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "pie:4500"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 집합과 이름을 전달받아 VIP 여부를 출력하는 check_vip(vips, user) 함수를 완성해보세요.",
      "prompt_en": "[Block] Define check_vip(vips, user) to check membership in a set and call it with club and \"Kim\".",
      "hint_ko": "첫 번째 인자로 집합 변수를, 두 번째 인자로 검색할 문자열을 순서에 맞춰 함수에 전달합니다.",
      "hint_en": "Pass the set as the first argument and the name string to check as the second argument.",
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
      "prompt_ko": "[빈칸 채우기] 딕셔너리에 찾는 키가 있는지 확인해 해당 가격을 출력하도록 두 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Check whether the key exists in the dictionary parameter and print its value (4500).",
      "hint_ko": "첫 빈칸에는 '~ 안에'를 뜻하는 두 글자 포함 연산자를, 대괄호 안에는 조회할 두 번째 매개변수 이름을 적으세요.",
      "hint_en": "Use the two-letter membership preposition for the check, and place the second parameter name inside the lookup brackets.",
      "templateCode": "def check_item(menu, key):\n    if key §§ menu:\n        print(menu[§§§])\n    else:\n        print(\"NoItem\")\nitems = {\"tea\": 3000, \"pie\": 4500}\ncheck_item(items, \"pie\")",
      "targetCode": "def check_item(menu, key):\n    if key in menu:\n        print(menu[key])\n    else:\n        print(\"NoItem\")\nitems = {\"tea\": 3000, \"pie\": 4500}\ncheck_item(items, \"pie\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "4500"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 함수를 호출할 때 이름과 숫자 인자의 순서가 바뀌어 오류가 나는 줄을 바르게 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the TypeError caused by passing arguments in the wrong order to show_tag.",
      "hint_ko": "선언부의 매개변수 순서(name, num)에 맞게 호출부에서도 문자열 \"Neo\"를 먼저, 숫자 25를 다음에 전달하세요.",
      "hint_en": "Pass \"Neo\" as the first argument and 25 as the second argument to match (name, num).",
      "templateCode": "def show_tag(name, num):\n    print(f\"{name}:{num + 10}\")\nshow_tag(25, \"Neo\")",
      "targetCode": "def show_tag(name, num):\n    print(f\"{name}:{num + 10}\")\nshow_tag(\"Neo\", 25)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Neo:35"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 첫 번째 매개변수 a에서 b를 빼야 하는데 b - b로 잘못 작성된 수식을 고쳐 35를 출력해보세요.",
      "prompt_en": "[Fix Bug] Fix the subtraction inside sub_nums(a, b) so it prints a - b instead of b - b.",
      "hint_ko": "첫 번째 인자 50이 전달되는 매개변수 a에서 두 번째 매개변수 b를 빼도록 print(a - b)로 수정하세요.",
      "hint_en": "Change print(b - b) to print(a - b) so the first parameter is used.",
      "templateCode": "def sub_nums(a, b):\n    print(b - b)\nsub_nums(50, 15)",
      "targetCode": "def sub_nums(a, b):\n    print(a - b)\nsub_nums(50, 15)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "35"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 좌표 튜플 매개변수 pt를 받는 함수 print_point의 선언부 첫 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the function header for print_point taking parameter pt.",
      "hint_ko": "def 키워드 뒤에 함수 이름 print_point와 매개변수 (pt), 콜론(:)을 붙여 작성하세요.",
      "hint_en": "Write def print_point(pt): on the first line.",
      "templateCode": "§§§§§§§§§§§§§§§§§§§§\n    x, y = pt\n    print(f\"X={x},Y={y}\")\npos = (12, 35)\nprint_point(pos)",
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
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 마지막 줄에서 inv와 \"pen\"을 인자로 전달해 show_stock 함수를 호출해보세요.",
      "prompt_en": "[Complete Line] Call show_stock with inv and \"pen\" on the last line to print pen:12.",
      "hint_ko": "선언부의 매개변수 순서에 맞춰 show_stock(inv, \"pen\") 형태로 함수를 호출하세요.",
      "hint_en": "Invoke show_stock(inv, \"pen\") on the final line.",
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
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 리스트와 집합을 인자로 전달하는 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the output when passing a list and a set into the following function.",
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
