import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_45: PracticeRound = {
  "id": "py-basic-r45",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 45,
  "title_ko": "45레벨: 딕셔너리(dict) 생성, 키 조회와 값 추가·수정",
  "title_en": "Level 45: Dictionary Creation, Key Lookup & Mutation",
  "description_ko": "키(Key)와 값(Value) 쌍으로 이루어진 딕셔너리를 만들고, 키로 값을 조회하거나 새 항목을 추가·수정하는 법을 익힙니다.",
  "description_en": "Create key-value dictionaries, look up values by key, and insert or update entries.",
  "totalQuestions": 15,
  "unlockedBlocks": [
    "print",
    "variable",
    "type",
    "math",
    "if",
    "for_in",
    "while",
    "break",
    "input",
    "method"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 중괄호({})로 딕셔너리를 만들고 키로 값을 조회해 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Create a dictionary with {} and look up menu[\"apple\"] alongside len(menu).",
      "hint_ko": "딕셔너리에 len()을 사용하면 저장된 키-값 쌍(항목)의 전체 개수를 반환합니다.",
      "hint_en": "Passing a dictionary to len() returns the total number of key-value pairs.",
      "targetCode": "menu = {\"apple\": 1000, \"milk\": 1500}\nprint(menu[\"apple\"], len(menu))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1000 2"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 우유와 빵의 문자열 키를 차례대로 채워 두 상품 가격의 합계를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the string keys for milk and bread to print the sum of their prices.",
      "hint_ko": "둘째 줄에서 조회하는 \"milk\"와 \"bread\" 문자열 키를 큰따옴표와 함께 채우세요.",
      "hint_en": "Write the double-quoted keys \"milk\" and \"bread\" on the first line.",
      "templateCode": "prices = {§§§§§§: 1200, §§§§§§§: 1800}\ntotal = prices[\"milk\"] + prices[\"bread\"]\nprint(total)",
      "targetCode": "prices = {\"milk\": 1200, \"bread\": 1800}\ntotal = prices[\"milk\"] + prices[\"bread\"]\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3000"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 빈 딕셔너리({})에 새로운 키-값 쌍을 추가하고 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Create an empty dictionary {} and insert \"coin\" and \"gem\" entries.",
      "hint_ko": "아직 없는 키를 대괄호에 적어 값을 대입하면 해당 키와 값이 새로 등록됩니다.",
      "hint_en": "Assigning to a new key in square brackets adds that key-value pair.",
      "targetCode": "bag = {}\nbag[\"coin\"] = 50\nbag[\"gem\"] = 3\nprint(bag, len(bag))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "{'coin': 50, 'gem': 3} 2"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 딕셔너리 shop에 \"pear\" 키를 등록하고 가격 1500을 저장해 출력해보세요.",
      "prompt_en": "[Fill Blank] Insert key \"pear\" with price 1500 into shop and print the result.",
      "hint_ko": "대괄호 안에 \"pear\"를 넣고 등호 오른쪽에 1500을 적으세요.",
      "hint_en": "Place \"pear\" inside the brackets and assign 1500 on the right.",
      "templateCode": "shop = {\"apple\": 1000}\nshop[§§§§§§] = §§§§\nprint(shop[\"pear\"], len(shop))",
      "targetCode": "shop = {\"apple\": 1000}\nshop[\"pear\"] = 1500\nprint(shop[\"pear\"], len(shop))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1500 2"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 이미 존재하는 키 \"hp\"에 += 연산자로 값을 누적 수정하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Update the existing \"hp\" key in hero using += 25 and print it.",
      "hint_ko": "hero[\"hp\"] += 25는 \"hp\" 키의 기존 값에 25를 더한 결과로 덮어씁니다.",
      "hint_en": "hero[\"hp\"] += 25 adds 25 to the value stored under \"hp\".",
      "targetCode": "hero = {\"hp\": 100, \"mp\": 40}\nhero[\"hp\"] += 25\nhp = hero[\"hp\"]\nprint(f\"HP:{hp}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "HP:125"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 사과 단가를 200 올리고 수량(qty)을 1 줄이도록 연산자를 채워 총액을 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the compound operators to add 200 to apple and subtract 1 from qty.",
      "hint_ko": "가격에는 복합 덧셈 연산자 +=를, 수량에는 복합 뺄셈 연산자 -=를 채우세요.",
      "hint_en": "Use += to raise the unit price and -= to reduce the quantity.",
      "templateCode": "cart = {\"apple\": 1000, \"qty\": 3}\ncart[\"apple\"] §§ 200\ncart[\"qty\"] §§ 1\ntotal = cart[\"apple\"] * cart[\"qty\"]\nprint(f\"Total:{total}\")",
      "targetCode": "cart = {\"apple\": 1000, \"qty\": 3}\ncart[\"apple\"] += 200\ncart[\"qty\"] -= 1\ntotal = cart[\"apple\"] * cart[\"qty\"]\nprint(f\"Total:{total}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Total:2400"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 입력받은 변수 grade로 딕셔너리 값을 동적 조회하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Look up rates[grade] dynamically using the input variable grade.",
      "hint_ko": "변수 이름을 따옴표 없이 대괄호 안에 넣으면 변수가 가리키는 문자열로 키를 조회합니다.",
      "hint_en": "Put grade unquoted inside brackets to use its string value as the key.",
      "targetCode": "rates = {\"A\": 100, \"B\": 80, \"C\": 60}\ngrade = input()\nscore = rates[grade]\nprint(f\"{grade}={score}\")",
      "testCases": [
        {
          "id": 1,
          "input": "A",
          "expectedOutput": "A=100"
        },
        {
          "id": 2,
          "input": "C",
          "expectedOutput": "C=60"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 딕셔너리 안의 점수 리스트 끝에 100을 추가하고 총합을 구해 출력해보세요.",
      "prompt_en": "[Fill Blank] Append 100 to st[\"scores\"] and compute its sum to print the name and total.",
      "hint_ko": "리스트 끝에 추가하는 append 메서드와 합계를 구하는 sum 함수를 차례로 쓰세요.",
      "hint_en": "Call append(100) on the inner list and sum() to total it.",
      "templateCode": "st = {\"name\": \"Min\", \"scores\": [80, 90]}\nst[\"scores\"].§§§§§§(100)\ntotal = §§§(st[\"scores\"])\nprint(st[\"name\"], total)",
      "targetCode": "st = {\"name\": \"Min\", \"scores\": [80, 90]}\nst[\"scores\"].append(100)\ntotal = sum(st[\"scores\"])\nprint(st[\"name\"], total)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Min 270"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] while문에서 두 줄 입력을 쪼개 store[k] = int(v)로 등록하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Unpack two input lines in a while loop and store store[k] = int(v).",
      "hint_ko": "공백으로 분리된 두 문자열 중 가격은 산술 덧셈을 위해 int()로 변환해 저장합니다.",
      "hint_en": "Convert v with int(v) before storing it under key k.",
      "targetCode": "store = {}\ni = 0\nwhile i < 2:\n    k, v = input().split()\n    store[k] = int(v)\n    i += 1\nprint(store[\"pen\"] + store[\"note\"])",
      "testCases": [
        {
          "id": 1,
          "input": "pen 500\nnote 1200",
          "expectedOutput": "1700"
        },
        {
          "id": 2,
          "input": "note 2000\npen 800",
          "expectedOutput": "2800"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] while문으로 두 줄의 \"아이템 수량\" 입력을 받아 bag 딕셔너리에 정수로 저장해보세요.",
      "prompt_en": "[Fill Blank] Read two \"item count\" lines in a while loop and store integer values in bag.",
      "hint_ko": "공백 기준 분리 메서드 split과 정수 변환 함수 int를 차례로 채우세요.",
      "hint_en": "Use split() to unpack each line and int(v) to convert the value.",
      "templateCode": "bag = {}\ni = 0\nwhile i < 2:\n    k, v = input().§§§§§()\n    bag[k] = §§§(v)\n    i += 1\nprint(bag)",
      "targetCode": "bag = {}\ni = 0\nwhile i < 2:\n    k, v = input().split()\n    bag[k] = int(v)\n    i += 1\nprint(bag)",
      "testCases": [
        {
          "id": 1,
          "input": "gold 100\ngem 5",
          "expectedOutput": "{'gold': 100, 'gem': 5}"
        },
        {
          "id": 2,
          "input": "hp 50\nmp 20",
          "expectedOutput": "{'hp': 50, 'mp': 20}"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 아이템 이름과 회복량(\"heal\")을 출력하려다 이름이 두 번 출력되는 키 버그를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the second dictionary key so item[\"name\"] and item[\"heal\"] are printed.",
      "hint_ko": "두 번째 조회 키를 \"name\"에서 \"heal\"로 수정하세요.",
      "hint_en": "Change the second item[\"name\"] to item[\"heal\"].",
      "templateCode": "item = {\"name\": \"Potion\", \"heal\": 50}\nprint(item[\"name\"], item[\"name\"])",
      "targetCode": "item = {\"name\": \"Potion\", \"heal\": 50}\nprint(item[\"name\"], item[\"heal\"])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Potion 50"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 체력(\"hp\")을 25만큼 회복해 125를 출력하려다 75가 출력되는 연산자 버그를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the compound operator so 25 is added to hero[\"hp\"].",
      "hint_ko": "체력을 회복해 늘려야 하므로 -=를 +=로 수정하세요.",
      "hint_en": "Change -= to += so hero[\"hp\"] becomes 125.",
      "templateCode": "hero = {\"hp\": 100, \"mp\": 40}\nhero[\"hp\"] -= 25\nprint(hero[\"hp\"])",
      "targetCode": "hero = {\"hp\": 100, \"mp\": 40}\nhero[\"hp\"] += 25\nprint(hero[\"hp\"])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "125"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] wallet[\"gold\"]에 wallet[\"bonus\"] 값을 누적해 더하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the line that adds wallet[\"bonus\"] into wallet[\"gold\"].",
      "hint_ko": "wallet[\"gold\"] += wallet[\"bonus\"] 형태로 기존 골드에 보너스를 누적하세요.",
      "hint_en": "Write wallet[\"gold\"] += wallet[\"bonus\"] on the second line.",
      "templateCode": "wallet = {\"gold\": 300, \"bonus\": 50}\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(wallet[\"gold\"])",
      "targetCode": "wallet = {\"gold\": 300, \"bonus\": 50}\nwallet[\"gold\"] += wallet[\"bonus\"]\nprint(wallet[\"gold\"])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "350"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 딕셔너리 shop에 \"pear\" 키로 정수 1500을 등록하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the line that assigns 1500 to shop[\"pear\"].",
      "hint_ko": "shop[\"pear\"] = 1500 형태로 새 키와 값을 대입하세요.",
      "hint_en": "Write shop[\"pear\"] = 1500 on the second line.",
      "templateCode": "shop = {\"apple\": 1000}\n§§§§§§§§§§§§§§§§§§§\nprint(shop[\"pear\"], len(shop))",
      "targetCode": "shop = {\"apple\": 1000}\nshop[\"pear\"] = 1500\nprint(shop[\"pear\"], len(shop))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1500 2"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 딕셔너리 내부 리스트 수정과 len(data) 코드의 실행 결과를 예측해보세요.",
      "prompt_en": "[Predict Output] Select the exact output produced when the following Python code runs.",
      "hint_ko": "len(data)는 최상위 키-값 쌍의 개수만 센다는 점에 유의하며 계산 결과를 확인하세요.",
      "hint_en": "Remember that len(data) counts top-level keys in data, even after appending to data[\"scores\"].",
      "targetCode": "data = {\"scores\": [10, 20], \"mult\": 2}\ndata[\"scores\"].append(30)\nans = sum(data[\"scores\"]) * data[\"mult\"]\nprint(len(data), ans)",
      "choices": [
        "2 120",
        "3 120",
        "2 60",
        "3 60"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2 120"
        }
      ]
    }
  ]
};
