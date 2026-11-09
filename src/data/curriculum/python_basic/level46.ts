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
      "prompt_ko": "딕셔너리에서 in과 not in 연산자는 값이 아니라 특정 '키(Key)'가 딕셔너리에 존재하는지 여부를 확인해 True 또는 False를 반환합니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "On a dictionary, the in and not in operators check whether a specific key exists in the dictionary, returning True or False. Follow the blocks and type the code.",
      "hint_ko": "없는 키를 바로 조회하면 KeyError가 발생하므로, in 연산자로 키가 있는지 먼저 확인하는 습관이 중요합니다.",
      "hint_en": "Checking key membership with in prevents KeyError before looking up or deleting a key.",
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
      "hint_ko": "영어로 '삭제하다(delete)'의 앞 세 글자를 딴 파이썬 키워드를 앞에 적어 해당 키-값 쌍을 지워보세요.",
      "hint_en": "Write the 3-letter Python keyword derived from the start of 'delete' before the bracketed dictionary entry.",
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
      "prompt_ko": "for 키, 값 in 딕셔너리.items(): 구문을 사용하면 딕셔너리의 모든 키와 값을 쌍으로 동시에 꺼내며 순회할 수 있습니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Looping with for key, value in dict.items(): lets you unpack and iterate over every key-value pair in a dictionary at the same time. Follow the blocks and type the code.",
      "hint_ko": ".items() 메서드는 (키, 값) 튜플 쌍들을 돌려주므로 for문에서 두 변수로 바로 언패킹해 받습니다.",
      "hint_en": "Because .items() yields (key, value) pairs, you can unpack both directly in the for loop header.",
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
      "hint_ko": "사전 안의 키-값 '항목들'을 쌍으로 묶어 꺼내 주는 다섯 글자 복수형 영단어 메서드 이름을 적어보세요.",
      "hint_en": "Fill in the 5-letter plural dictionary method meaning 'entries' so each key-value pair unpacks into the two loop variables.",
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
      "prompt_ko": "if 키 in 딕셔너리: 조건문으로 키가 이미 있으면 기존 값에 1을 더하고(+= 1), 없으면 1로 새로 등록(= 1)하는 것은 빈도수 집계의 핵심 패턴입니다. 블록의 코드를 따라 입력해보세요. (터미널 입력: A)",
      "prompt_en": "Checking if key in dict: to increment an existing count (+= 1) or initialize a new key (= 1) is the core pattern for frequency counting. Follow the blocks and type the code. (Terminal input: A)",
      "hint_ko": "키가 존재하는지 먼저 검사하기 때문에 처음 등장하는 키가 입력되어도 오류 없이 1로 초기화됩니다.",
      "hint_en": "Testing membership first ensures existing keys increment while new keys safely initialize to 1.",
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
      "prompt_ko": "입력받은 키가 재고에 존재할 때만 해당 항목을 삭제하도록 빈칸을 채워 남은 항목 수를 출력해보세요. (터미널 입력: egg)",
      "prompt_en": "Fill in the blanks to delete target from stock only if it exists, then print len(stock). (Terminal input: egg)",
      "hint_ko": "없는 키를 바로 지우면 오류가 나므로 '~ 안에' 있는지 두 글자 포함 연산자로 먼저 확인한 뒤, '삭제하다(delete)' 앞 세 글자 키워드로 지우세요.",
      "hint_en": "Check key presence first with the 2-letter membership operator, then remove the entry using the first three letters of 'delete'.",
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
      "prompt_ko": "문자열을 for문으로 한 글자씩 순회하면서 빈 딕셔너리에 각 글자의 등장 횟수를 누적하면 글자별 빈도수 사전을 만들 수 있습니다. 블록의 코드를 따라 입력해보세요. (터미널 입력: banana)",
      "prompt_en": "Iterating over each character of a string in a for loop and updating counts in a dictionary builds a character frequency table. Follow the blocks and type the code. (Terminal input: banana)",
      "hint_ko": "이미 나온 글자는 counts[ch] += 1로 횟수를 늘리고, 처음 나온 글자는 counts[ch] = 1로 등록합니다.",
      "hint_en": "Increment counts[ch] by 1 when the character is already in counts, and set counts[ch] = 1 when it is new.",
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
      "prompt_ko": "단어별 등장 횟수를 집계한 뒤 키와 값을 순회하며 출력하도록 빈칸을 채워보세요. (출력 예: red:2) (터미널 입력: red blue red)",
      "prompt_en": "Count word frequencies from input and iterate over key-value pairs to print them (e.g., red:2). (Terminal input: red blue red)",
      "hint_ko": "사전에 아직 '들어 있지 않은' 단어일 때 0으로 준비해 두고, 집계 후에는 다섯 글자 복수형 '항목들' 메서드로 키와 횟수를 함께 순회하세요.",
      "hint_en": "Initialize words that are absent using the two-word negated membership check, then loop over pairs with the 5-letter 'entries' method.",
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
      "prompt_ko": ".items()로 이름과 점수를 함께 순회하면서 현재 최고 점수(top_val)보다 큰 값을 만날 때마다 최고 점수와 이름(top_name)을 동시에 갱신해 최댓값의 주인공을 찾을 수 있습니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "By iterating over .items() and updating both the highest value and its matching key whenever a larger value appears, you can find which key holds the maximum score. Follow the blocks and type the code.",
      "hint_ko": "sc > top_val 조건이 참일 때 점수와 이름을 함께 저장해 두면 반복이 끝난 뒤 최고 득점자를 알 수 있습니다.",
      "hint_en": "Updating both top_val and top_name inside the if block keeps the winning key paired with the highest score.",
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
      "hint_ko": "'삭제하다(delete)'의 앞 세 글자를 딴 키워드로 존재하는 항목을 지우고, 남은 키-값 '항목들'을 꺼내는 다섯 글자 메서드로 순회하세요.",
      "hint_en": "Remove matching entries with the 3-letter keyword from 'delete', then iterate over remaining pairs using the 5-letter 'entries' method.",
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
      "hint_ko": "사전 변수만 그대로 순회하면 값 없이 키만 하나씩 나오므로 두 변수로 나눌 수 없습니다. 키-값 쌍을 돌려주는 메서드를 뒤에 호출하세요.",
      "hint_en": "Looping over a plain dictionary yields only keys, causing an unpacking error for two variables; call the key-value pair method on the dict.",
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
      "hint_ko": "불필요한 키 항목이 삭제된 뒤 남아 있는 사전 변수 자체를 출력 함수에 넣어 결과를 확인해보세요.",
      "hint_en": "Pass the dictionary variable directly to the output function on the final line to display the remaining entries.",
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
      "hint_ko": "중간 키가 지워진 뒤 남은 쌍들이 어떤 모양으로 문자열에 이어 붙는지 확인하고, 마지막 공백 다듬기가 끝에 붙은 띄어쓰기를 어떻게 처리하는지 보세요.",
      "hint_en": "Check which two key-value pairs remain after deletion, how each formats into the accumulator string, and what trimming removes at the end.",
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
