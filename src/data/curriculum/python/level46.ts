import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_46: PracticeRound = {
  "id": "py-basic-r46",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 46,
  "title_ko": "46레벨: 딕셔너리 삭제(del), 키 확인(in)과 .items() 순회",
  "title_en": "Level 46: Dictionary del, Key Check (in) & .items() Loop",
  "description_ko": "in 연산자로 키 존재 여부를 안전하게 확인하고, del로 항목을 삭제하며 .items()로 키와 값을 동시에 순회합니다.",
  "description_en": "Check key membership with in, delete entries with del, and iterate over key-value pairs using .items().",
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
      "prompt_ko": "bag = {\"key\": 1, \"potion\": 3}에 \"key\"가 있는지(in)와 \"map\"이 없는지(not in)를 나란히 출력해보세요.",
      "prompt_en": "On bag = {\"key\": 1, \"potion\": 3}, print whether \"key\" is in bag and whether \"map\" is not in bag.",
      "hint_ko": "딕셔너리에 in / not in을 사용하면 값이 아닌 키(Key)의 존재 여부를 True / False로 알려줍니다.",
      "hint_en": "Using in and not in on a dict checks whether the given key exists.",
      "targetCode": "bag = {\"key\": 1, \"potion\": 3}\nprint(\"key\" in bag, \"map\" not in bag)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True True"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 삭제 키워드를 채워 임시 항목을 제거한 뒤 남은 길이와 키 존재 여부를 출력해보세요.",
      "prompt_en": "Fill in the deletion keyword to remove the temporary entry, then print the length and key check.",
      "hint_ko": "딕셔너리에서 특정 키-값 쌍을 제거할 때는 del 딕셔너리[키] 구문을 사용합니다.",
      "hint_en": "Use the del keyword before cfg[\"temp\"] to delete that key-value pair.",
      "templateCode": "cfg = {\"host\": \"local\", \"temp\": 99}\n§§§ cfg[\"temp\"]\nprint(len(cfg), \"temp\" in cfg)",
      "targetCode": "cfg = {\"host\": \"local\", \"temp\": 99}\ndel cfg[\"temp\"]\nprint(len(cfg), \"temp\" in cfg)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1 False"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "prices = {\"pen\": 500, \"note\": 1200}을 .items()로 순회하며 상품명(name)과 가격(cost)을 출력해보세요.",
      "prompt_en": "Loop over prices = {\"pen\": 500, \"note\": 1200} with .items() and print each name and cost.",
      "hint_ko": "for name, cost in prices.items():를 사용하면 매 반복마다 키와 값을 동시에 꺼낼 수 있습니다.",
      "hint_en": "Use for name, cost in prices.items(): to unpack each key and value.",
      "targetCode": "prices = {\"pen\": 500, \"note\": 1200}\nfor name, cost in prices.items():\n    print(name, cost)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "pen 500\nnote 1200"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "딕셔너리의 키와 값을 쌍으로 꺼내는 메서드 이름을 빈칸에 채워 능력치를 출력해보세요. (출력 예: HP=120)",
      "prompt_en": "Fill in the dictionary method that yields key-value pairs to print each stat (e.g., HP=120).",
      "hint_ko": "for문에서 키(k)와 값(v) 두 변수로 동시에 순회할 때는 .items() 메서드를 호출합니다.",
      "hint_en": "Call .items() on stats to iterate over (key, value) pairs.",
      "templateCode": "stats = {\"HP\": 120, \"MP\": 60}\nfor k, v in stats.§§§§§():\n    print(f\"{k}={v}\")",
      "targetCode": "stats = {\"HP\": 120, \"MP\": 60}\nfor k, v in stats.items():\n    print(f\"{k}={v}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "HP=120\nMP=60"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "cnt = {\"A\": 2}에 입력받은 키 k가 있으면 값을 1 늘리고, 없으면 1로 등록한 뒤 cnt[k]를 출력해보세요.",
      "prompt_en": "Read k; if k is in cnt = {\"A\": 2} increment cnt[k] by 1, else set cnt[k] = 1, then print cnt[k].",
      "hint_ko": "if k in cnt: 조건으로 기존 키 여부를 먼저 확인하면 KeyError 없이 안전하게 개수를 누적할 수 있습니다.",
      "hint_en": "Check if k in cnt: to run cnt[k] += 1; otherwise initialize cnt[k] = 1.",
      "targetCode": "cnt = {\"A\": 2}\nk = input()\nif k in cnt:\n    cnt[k] += 1\nelse:\n    cnt[k] = 1\nprint(cnt[k])",
      "testCases": [
        {
          "id": 1,
          "input": "A",
          "expectedOutput": "3"
        },
        {
          "id": 2,
          "input": "B",
          "expectedOutput": "1"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "입력받은 키가 재고에 존재할 때만 해당 항목을 삭제하도록 빈칸을 채워 남은 항목 수를 출력해보세요.",
      "prompt_en": "Fill in the blanks to delete target from stock only if it exists, then print len(stock).",
      "hint_ko": "없는 키를 바로 삭제하면 KeyError가 나므로 포함 연산자로 확인한 뒤 삭제 키워드를 실행합니다.",
      "hint_en": "Check membership with in before deleting the entry with del.",
      "templateCode": "stock = {\"milk\": 2, \"egg\": 0}\ntarget = input()\nif target §§ stock:\n    §§§ stock[target]\nprint(len(stock))",
      "targetCode": "stock = {\"milk\": 2, \"egg\": 0}\ntarget = input()\nif target in stock:\n    del stock[target]\nprint(len(stock))",
      "testCases": [
        {
          "id": 1,
          "input": "egg",
          "expectedOutput": "1"
        },
        {
          "id": 2,
          "input": "bread",
          "expectedOutput": "2"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "입력받은 단어(word)의 각 글자 등장 횟수를 counts 딕셔너리에 집계한 뒤 글자 \"a\"의 개수를 출력해보세요.",
      "prompt_en": "Count each character frequency of input word in counts = {} and print counts[\"a\"].",
      "hint_ko": "for ch in word:로 한 글자씩 순회하며 if ch in counts: 분기로 개수를 1씩 누적하세요.",
      "hint_en": "Loop for ch in word:, increment counts[ch] += 1 if present else set counts[ch] = 1.",
      "targetCode": "word = input()\ncounts = {}\nfor ch in word:\n    if ch in counts:\n        counts[ch] += 1\n    else:\n        counts[ch] = 1\nprint(counts[\"a\"])",
      "testCases": [
        {
          "id": 1,
          "input": "banana",
          "expectedOutput": "3"
        },
        {
          "id": 2,
          "input": "apple",
          "expectedOutput": "1"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "단어별 등장 횟수를 집계한 뒤 키와 값을 순회하며 출력하도록 빈칸을 채워보세요. (출력 예: red:2)",
      "prompt_en": "Count word frequencies from input and iterate over key-value pairs to print them (e.g., red:2).",
      "hint_ko": "처음 본 단어(not in)면 0으로 초기화한 뒤 1을 더하고, 마지막에 .items()로 키와 값을 출력합니다.",
      "hint_en": "Use not in to initialize unseen words to 0, then loop over freq.items().",
      "templateCode": "words = input().split()\nfreq = {}\nfor w in words:\n    if w §§§ §§ freq:\n        freq[w] = 0\n    freq[w] += 1\nfor w, c in freq.§§§§§():\n    print(f\"{w}:{c}\")",
      "targetCode": "words = input().split()\nfreq = {}\nfor w in words:\n    if w not in freq:\n        freq[w] = 0\n    freq[w] += 1\nfor w, c in freq.items():\n    print(f\"{w}:{c}\")",
      "testCases": [
        {
          "id": 1,
          "input": "red blue red",
          "expectedOutput": "red:2\nblue:1"
        },
        {
          "id": 2,
          "input": "go go up",
          "expectedOutput": "go:2\nup:1"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "scores = {\"Kim\": 75, \"Lee\": 92, \"Park\": 88}을 .items()로 순회해 최고 득점자와 점수를 출력해보세요. (출력 예: Lee:92)",
      "prompt_en": "Iterate over scores.items() starting from top_name = None to find and print the top scorer (Lee:92).",
      "hint_ko": "sc > top_val일 때마다 top_val = sc와 top_name = name으로 갱신한 뒤 f-string으로 출력하세요.",
      "hint_en": "Whenever sc > top_val, update top_val and top_name, then print(f\"{top_name}:{top_val}\").",
      "targetCode": "scores = {\"Kim\": 75, \"Lee\": 92, \"Park\": 88}\ntop_name = None\ntop_val = 0\nfor name, sc in scores.items():\n    if sc > top_val:\n        top_val = sc\n        top_name = name\nprint(f\"{top_name}:{top_val}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Lee:92"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "while문으로 제거 목록(drops)의 키가 있으면 삭제하고, 남은 항목을 순회해 출력해보세요. (출력 예: gold:50)",
      "prompt_en": "Remove any existing keys listed in drops via a while loop, then print remaining items (e.g., gold:50).",
      "hint_ko": "첫 빈칸에는 항목 삭제 키워드를, 둘째 빈칸에는 키-값 쌍 순회 메서드 이름을 입력하세요.",
      "hint_en": "Use del to remove box[k] and .items() to iterate over the remaining entries.",
      "templateCode": "box = {\"gold\": 50, \"tmp\": 0, \"gem\": 30}\ndrops = [\"tmp\", \"dust\"]\ni = 0\nwhile i < len(drops):\n    k = drops[i]\n    if k in box:\n        §§§ box[k]\n    i += 1\nfor name, val in box.§§§§§():\n    print(f\"{name}:{val}\")",
      "targetCode": "box = {\"gold\": 50, \"tmp\": 0, \"gem\": 30}\ndrops = [\"tmp\", \"dust\"]\ni = 0\nwhile i < len(drops):\n    k = drops[i]\n    if k in box:\n        del box[k]\n    i += 1\nfor name, val in box.items():\n    print(f\"{name}:{val}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "gold:50\ngem:30"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "딕셔너리에서 키와 값을 동시에 꺼내려다 발생한 언패킹 오류(ValueError)를 수정해 출력해보세요. (출력 예: apple:1000)",
      "prompt_en": "Fix the ValueError when unpacking key and value in the for loop so apple:1000 is printed.",
      "hint_ko": "딕셔너리만 그냥 순회하면 키 문자열만 나옵니다. 키와 값을 쌍으로 꺼내려면 뒤에 .items()를 붙여야 합니다.",
      "hint_en": "Iterating directly over menu yields only keys; call menu.items() to unpack k, v.",
      "templateCode": "menu = {\"apple\": 1000, \"milk\": 1500}\nfor k, v in menu:\n    print(f\"{k}:{v}\")",
      "targetCode": "menu = {\"apple\": 1000, \"milk\": 1500}\nfor k, v in menu.items():\n    print(f\"{k}:{v}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "apple:1000\nmilk:1500"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "사용이 끝난 쿠폰 항목을 삭제한 코드 아래에 한 줄을 추가하여 남은 cart 딕셔너리를 출력해보세요.",
      "prompt_en": "Add one line below the del statement to print the remaining cart dictionary.",
      "hint_ko": "마지막 줄에 print(cart)를 작성하여 쿠폰이 제거된 딕셔너리를 확인하세요.",
      "hint_en": "Write print(cart) on the third line.",
      "templateCode": "cart = {\"book\": 15000, \"coupon\": 0}\ndel cart[\"coupon\"]\n§§§§§§§§§§§",
      "targetCode": "cart = {\"book\": 15000, \"coupon\": 0}\ndel cart[\"coupon\"]\nprint(cart)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "{'book': 15000}"
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
      "hint_ko": "키 \"b\"가 삭제된 뒤 남은 (\"a\", 10)과 (\"c\", 30)을 순회하여 이어 붙이고 양끝 공백을 제거합니다.",
      "hint_en": "After deleting \"b\", iterating over d.items() builds \"a10 c30 \", and .strip() outputs \"a10 c30\".",
      "targetCode": "d = {\"a\": 10, \"b\": 20, \"c\": 30}\ndel d[\"b\"]\nres = \"\"\nfor k, v in d.items():\n    res += f\"{k}{v} \"\nprint(res.strip())",
      "choices": [
        "a10 c30",
        "a10 b20 c30",
        "a c",
        "10 30"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "a10 c30"
        }
      ]
    }
  ]
};
