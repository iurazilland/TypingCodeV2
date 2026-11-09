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
  "totalQuestions": 13,
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
      "prompt_ko": "딕셔너리 menu = {\"apple\": 1000, \"milk\": 1500}을 만들고 menu[\"apple\"]과 len(menu)를 출력해보세요.",
      "prompt_en": "Create menu = {\"apple\": 1000, \"milk\": 1500} and print menu[\"apple\"] and len(menu).",
      "hint_ko": "중괄호 안에 키: 값 쌍으로 사전을 만들고, 숫자 인덱스 대신 대괄호 안에 찾을 키 문자열을 넣어 값을 꺼내세요.",
      "hint_en": "Define key: value pairs inside curly braces, then look up a value by placing its key inside square brackets.",
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
      "prompt_ko": "빈칸에 우유와 빵의 문자열 키를 차례대로 채워 두 상품 가격의 합계(3000)를 출력해보세요.",
      "prompt_en": "Fill in the string keys for milk and bread to print the sum of their prices (3000).",
      "hint_ko": "둘째 줄에서 대괄호로 조회하고 있는 두 상품 이름을 큰따옴표로 감싼 문자열 키 형태로 차례대로 채우세요.",
      "hint_en": "Write the two double-quoted string keys that are being looked up on the second line.",
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
      "prompt_ko": "빈 딕셔너리 bag = {}을 만든 뒤 \"coin\"에 50, \"gem\"에 3을 추가하고 bag과 len(bag)을 출력해보세요.",
      "prompt_en": "Create an empty dict bag = {}, add \"coin\": 50 and \"gem\": 3, then print bag and len(bag).",
      "hint_ko": "빈 중괄호로 빈 사전을 만든 뒤, 대괄호 안에 새 키를 적고 등호로 값을 대입하면 항목이 하나씩 등록됩니다.",
      "hint_en": "Start with empty curly braces for an empty dictionary, then assign values to bracketed keys to insert new entries.",
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
      "prompt_ko": "딕셔너리 shop에 아래 출력문에서 조회하는 새 과일 키를 등록하고 가격 1500을 저장해 출력해보세요.",
      "prompt_en": "Insert the new fruit key queried on line 3 with price 1500 into shop and print the result.",
      "hint_ko": "마지막 줄에서 조회할 새 과일 이름을 큰따옴표 문자열 키로 대괄호에 넣고, 등호 오른쪽에 문제에서 지정한 가격을 적으세요.",
      "hint_en": "Place the quoted fruit key queried on line 3 inside the brackets and assign the specified price on the right.",
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
      "prompt_ko": "hero = {\"hp\": 100, \"mp\": 40}에서 복합 대입으로 \"hp\"를 25 늘린 뒤 지정 형식으로 출력해보세요. (출력 예: HP:125)",
      "prompt_en": "Increase \"hp\" by 25 on hero = {\"hp\": 100, \"mp\": 40} and print it formatted as HP:125.",
      "hint_ko": "대괄호 키 조회 식에 복합 덧셈 연산자를 써서 기존 수치를 올린 뒤, 갱신된 값을 꺼내 포맷 문자열로 출력하세요.",
      "hint_en": "Apply compound addition directly to the bracketed key lookup, then format and print the updated value.",
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
      "prompt_ko": "사과 단가를 200 올리고 수량(qty)을 1 줄이도록 빈칸을 채워 총액을 출력해보세요. (출력 예: Total:2400)",
      "prompt_en": "Fill in the compound assignments to add 200 to apple and subtract 1 from qty (e.g., Total:2400).",
      "hint_ko": "기존 키에 저장된 가격에는 복합 덧셈 연산자로 인상분을 더하고, 수량에는 복합 뺄셈 연산자로 차감분을 빼주세요.",
      "hint_en": "Use the compound addition operator to raise the unit price and the compound subtraction operator to reduce the quantity.",
      "templateCode": "cart = {\"apple\": 1000, \"qty\": 3}\ncart[\"apple\"] §§ §§§\ncart[\"qty\"] §§ §\ntotal = cart[\"apple\"] * cart[\"qty\"]\nprint(f\"Total:{total}\")",
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
      "prompt_ko": "rates = {\"A\": 100, \"B\": 80, \"C\": 60}에서 입력받은 등급(grade)의 점수를 조회해 출력해보세요. (출력 예: A=100) (터미널 입력: A)",
      "prompt_en": "Read grade from input(), look up its score in rates, and print it formatted as A=100. (Terminal input: A)",
      "hint_ko": "입력받은 문자열 변수를 따옴표 없이 대괄호 안에 그대로 넣으면 그 변수에 담긴 글자를 키로 삼아 점수를 찾아옵니다.",
      "hint_en": "Put the input variable unquoted inside square brackets to look up the matching key dynamically, then format both.",
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
      "prompt_ko": "딕셔너리 안의 점수 리스트 끝에 100을 추가하고 총합을 구해 이름과 총점을 출력해보세요.",
      "prompt_en": "Append 100 to the scores list inside st and compute its sum to print the name and total.",
      "hint_ko": "사전 속 키로 꺼낸 값이 리스트이므로, 리스트 끝에 '덧붙이는' 여섯 글자 메서드와 '합계(sum)'를 뜻하는 세 글자 함수를 그대로 쓰세요.",
      "hint_en": "Because looking up that key yields a list, call the 6-letter tail-insertion method on it and total it with the 3-letter summation function.",
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
      "prompt_ko": "while문으로 두 줄에 걸쳐 상품명과 가격을 입력받아 store에 저장한 뒤 \"pen\"과 \"note\" 가격 합을 출력해보세요. (터미널 입력: 첫째 줄 pen 500, 둘째 줄 note 1200)",
      "prompt_en": "Use a while loop to read 2 item-price lines into store, then print store[\"pen\"] + store[\"note\"]. (Terminal input: line 1 pen 500, line 2 note 1200)",
      "hint_ko": "공백으로 나눈 상품명과 가격 문자열 중 가격을 정수로 변환해 사전의 키에 저장한 뒤, 두 상품 키의 값을 더해 출력하세요.",
      "hint_en": "Unpack each line into name and price, store the integer-converted price under that key, and print the sum of the two keys.",
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
      "prompt_ko": "문자열 배율을 정수로 변환해 10을 곱하고, 태그가 비어 있으면 \"OK\"로 수정해 출력해보세요. (출력 예: OK:150)",
      "prompt_en": "Convert the rate string to an integer times 10, set tag to \"OK\" if None, and print (e.g., OK:150).",
      "hint_ko": "'정수(integer)' 앞 세 글자 함수로 문자열을 정수로 바꾸고, 태그 항목이 '아무것도 없음' 상태인지 정체성 비교로 검사하세요.",
      "hint_en": "Convert the rate string using the first three letters of 'integer', and check whether the tag holds the empty constant via identity.",
      "templateCode": "cfg = {\"rate\": \"15\", \"tag\": None}\nval = §§§(cfg[\"rate\"]) * 10\nif cfg[\"tag\"] §§ §§§§:\n    cfg[\"tag\"] = \"OK\"\ntag = cfg[\"tag\"]\nprint(f\"{tag}:{val}\")",
      "targetCode": "cfg = {\"rate\": \"15\", \"tag\": None}\nval = int(cfg[\"rate\"]) * 10\nif cfg[\"tag\"] is None:\n    cfg[\"tag\"] = \"OK\"\ntag = cfg[\"tag\"]\nprint(f\"{tag}:{val}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "OK:150"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "딕셔너리를 리스트처럼 인덱스 번호 0으로 조회해 발생한 오류(KeyError)를 고쳐 이름과 회복량을 출력해보세요.",
      "prompt_en": "Fix the KeyError caused by indexing the dictionary with 0 instead of its name key.",
      "hint_ko": "사전(딕셔너리)은 리스트처럼 0번 순서 번호로 꺼낼 수 없고, 등록해 둔 키 문자열을 대괄호에 넣어야 값을 찾을 수 있습니다.",
      "hint_en": "Dictionaries map keys rather than 0-based positions; replace the numeric index with the actual string key for the item's name.",
      "templateCode": "item = {\"name\": \"Potion\", \"heal\": 50}\nprint(item[0], item[\"heal\"])",
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
      "kind": "one_line",
      "prompt_ko": "보너스를 합산한 코드 아래에 한 줄을 추가하여 지갑의 갱신된 골드 보유량을 출력해보세요.",
      "prompt_en": "Add one line below the bonus addition to print the updated gold value in wallet.",
      "hint_ko": "보너스가 합산된 지갑 사전에서 골드 키에 해당하는 값을 대괄호로 조회해 그대로 화면에 출력해보세요.",
      "hint_en": "Print the updated value stored under the gold key in the dictionary using square-bracket lookup.",
      "templateCode": "wallet = {\"gold\": 300, \"bonus\": 50}\nwallet[\"gold\"] += wallet[\"bonus\"]\n§§§§§§§§§§§§§§§§§§§§§",
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
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 파이썬 코드를 실행했을 때 화면에 출력될 결과를 선택해보세요.",
      "prompt_en": "Select the exact output produced when the following Python code runs.",
      "hint_ko": "사전에 길이 함수를 쓰면 안쪽 리스트 길이가 아니라 최상위 '키-값 쌍'의 개수를 센다는 점에 유의하며 계산 결과와 비교해보세요.",
      "hint_en": "Remember that measuring the length of a dictionary counts only its top-level key-value pairs, even when an inner list grows.",
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
