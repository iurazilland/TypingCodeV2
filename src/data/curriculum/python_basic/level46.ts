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
      "prompt_ko": "[블록 조립] in과 not in 연산자로 딕셔너리에 특정 키가 존재하는지 확인하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Check whether keys exist in bag using in and not in.",
      "hint_ko": "딕셔너리에서 in 연산자는 값이 아니라 키(Key)의 존재 여부를 확인합니다.",
      "hint_en": "On a dictionary, in checks whether a key exists.",
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
      "prompt_ko": "[빈칸 채우기] 삭제 키워드를 채워 임시 항목(\"temp\")을 제거한 뒤 남은 길이와 키 존재 여부를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the deletion keyword to remove cfg[\"temp\"], then print length and key check.",
      "hint_ko": "딕셔너리 항목을 삭제하는 세 글자 키워드 del을 앞에 적어보세요.",
      "hint_en": "Write the 3-letter keyword del before cfg[\"temp\"].",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] for name, cost in prices.items():로 키와 값을 동시에 순회하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Iterate over key-value pairs using for name, cost in prices.items():.",
      "hint_ko": ".items() 메서드는 (키, 값) 쌍을 돌려주므로 두 변수로 바로 언패킹해 받습니다.",
      "hint_en": ".items() yields (key, value) pairs that unpack into name and cost.",
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
      "prompt_ko": "[빈칸 채우기] 딕셔너리의 키와 값을 쌍으로 꺼내는 메서드 이름을 채워 능력치를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the dictionary method that yields key-value pairs to print each stat.",
      "hint_ko": "키-값 항목들을 쌍으로 꺼내 주는 다섯 글자 메서드 items를 적어보세요.",
      "hint_en": "Fill in the 5-letter method items.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] if k in cnt:로 키가 있으면 1을 더하고, 없으면 1로 새로 등록해보세요.",
      "prompt_en": "[Block] Use if k in cnt: to increment an existing key (+= 1) or initialize a new key (= 1).",
      "hint_ko": "키가 존재하는지 먼저 검사하면 처음 등장하는 키도 오류 없이 1로 초기화됩니다.",
      "hint_en": "Testing membership first ensures existing keys increment while new keys initialize to 1.",
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
      "prompt_ko": "[빈칸 채우기] 키가 재고에 있으면 삭제하고 없으면 새로 추가해 항목 수를 출력해보세요.",
      "prompt_en": "[Fill Blank] Delete target if in stock, otherwise add it, then print len(stock).",
      "hint_ko": "포함 연산자 in으로 먼저 확인한 뒤 삭제 키워드 del로 지우세요.",
      "hint_en": "Check key presence with in and remove the entry with del.",
      "templateCode": "stock = {\"milk\": 2, \"egg\": 0}\ntarget = input()\nif target §§ stock:\n    §§§ stock[target]\nelse:\n    stock[target] = 1\nprint(len(stock))",
      "targetCode": "stock = {\"milk\": 2, \"egg\": 0}\ntarget = input()\nif target in stock:\n    del stock[target]\nelse:\n    stock[target] = 1\nprint(len(stock))",
      "testCases": [
        {
          "id": 1,
          "input": "egg",
          "expectedOutput": "1"
        },
        {
          "id": 2,
          "input": "bread",
          "expectedOutput": "3"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 문자열의 각 글자를 순회하며 빈 딕셔너리에 등장 횟수를 집계하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Count character frequencies of word into counts using a for loop.",
      "hint_ko": "처음 나온 글자는 0으로 초기화한 뒤 1을 더하면 모든 글자의 빈도수를 누적할 수 있습니다.",
      "hint_en": "Initialize unseen characters to 0 with not in, then increment counts[ch] += 1.",
      "targetCode": "word = input()\ncounts = {}\nfor ch in word:\n    if ch not in counts:\n        counts[ch] = 0\n    counts[ch] += 1\nprint(counts[\"a\"])",
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
      "prompt_ko": "[빈칸 채우기] 단어별 등장 횟수를 집계한 뒤 키와 값을 순회하며 출력해보세요.",
      "prompt_en": "[Fill Blank] Count word frequencies and iterate over key-value pairs to print them.",
      "hint_ko": "불포함 연산자 not in으로 0으로 초기화하고, items 메서드로 키와 횟수를 순회하세요.",
      "hint_en": "Use not in to initialize unseen words and items() to loop over pairs.",
      "templateCode": "words = input().split()\nfreq = {}\nfor w in words:\n    if w §§§§§§ freq:\n        freq[w] = 0\n    freq[w] += 1\nfor w, c in freq.§§§§§():\n    print(f\"{w}:{c}\")",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] .items()로 이름과 점수를 순회하며 최고 득점자와 점수를 찾는 블록을 조립해보세요.",
      "prompt_en": "[Block] Iterate over scores.items() to find the name and score of the highest scorer.",
      "hint_ko": "sc > top_val 조건이 참일 때 점수와 이름을 함께 갱신하면 최고 득점자를 찾을 수 있습니다.",
      "hint_en": "Update both top_val and top_name whenever sc > top_val.",
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
      "prompt_ko": "[빈칸 채우기] 제거 목록(drops)의 키가 box에 있으면 삭제하고 남은 항목을 순회해 출력해보세요.",
      "prompt_en": "[Fill Blank] Remove any keys listed in drops from box, then print remaining items.",
      "hint_ko": "삭제 키워드 del과 키-값 쌍을 꺼내는 items 메서드를 차례로 채우세요.",
      "hint_en": "Use del to remove matching entries and items() to iterate over remaining pairs.",
      "templateCode": "box = {\"gold\": 50, \"tmp\": 0, \"gem\": 30}\ndrops = [\"tmp\", \"dust\"]\nfor k in drops:\n    if k in box:\n        §§§ box[k]\nfor name, val in box.§§§§§():\n    print(f\"{name}:{val}\")",
      "targetCode": "box = {\"gold\": 50, \"tmp\": 0, \"gem\": 30}\ndrops = [\"tmp\", \"dust\"]\nfor k in drops:\n    if k in box:\n        del box[k]\nfor name, val in box.items():\n    print(f\"{name}:{val}\")",
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
      "prompt_ko": "[틀린 곳 수정] .items()로 순회하며 \"키:값\" 형식으로 출력하려다 값과 키 순서가 뒤바뀐 버그를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the swapped variables in the f-string so each line prints \"key:value\".",
      "hint_ko": "콜론 앞에 키 k가, 콜론 뒤에 값 v가 오도록 {k}:{v}로 수정하세요.",
      "hint_en": "Swap {v}:{k} to {k}:{v} inside the print statement.",
      "templateCode": "stock = {\"milk\": 2, \"egg\": 5}\nfor k, v in stock.items():\n    print(f\"{v}:{k}\")",
      "targetCode": "stock = {\"milk\": 2, \"egg\": 5}\nfor k, v in stock.items():\n    print(f\"{k}:{v}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "milk:2\negg:5"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 이미 존재하는 키가 입력되면 횟수를 1 늘려야 하는데 1 줄어드는 연산자 버그를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the compound assignment operator so existing key counts increment by 1.",
      "hint_ko": "등장 횟수를 1 증가시켜야 하므로 -=를 +=로 고치세요.",
      "hint_en": "Change -= to += when k is already in cnt.",
      "templateCode": "cnt = {\"A\": 2, \"B\": 1}\nk = input().strip()\nif k in cnt:\n    cnt[k] -= 1\nelse:\n    cnt[k] = 1\nprint(cnt[k])",
      "targetCode": "cnt = {\"A\": 2, \"B\": 1}\nk = input().strip()\nif k in cnt:\n    cnt[k] += 1\nelse:\n    cnt[k] = 1\nprint(cnt[k])",
      "testCases": [
        {
          "id": 1,
          "input": "A",
          "expectedOutput": "3"
        },
        {
          "id": 2,
          "input": "C",
          "expectedOutput": "1"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 딕셔너리 cart에서 사용이 끝난 \"coupon\" 항목을 del로 삭제하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the line that deletes cart[\"coupon\"] using del.",
      "hint_ko": "del cart[\"coupon\"] 형태로 해당 키 항목을 삭제하세요.",
      "hint_en": "Write del cart[\"coupon\"] on the second line.",
      "templateCode": "cart = {\"book\": 15000, \"coupon\": 0}\n§§§§§§§§§§§§§§§§§§\nprint(cart)",
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
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] prices.items()로 키 k와 값 v를 동시에 꺼내 순회하는 for문 머리부 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the for loop header that iterates over k, v in prices.items().",
      "hint_ko": "for k, v in prices.items(): 형태로 키와 값을 언패킹해 순회하세요.",
      "hint_en": "Write for k, v in prices.items(): on the third line.",
      "templateCode": "prices = {\"pen\": 500, \"note\": 1200}\ntotal = 0\n§§§§§§§§§§§§§§§§§§§§§§§§§§§\n    total += v\nprint(total)",
      "targetCode": "prices = {\"pen\": 500, \"note\": 1200}\ntotal = 0\nfor k, v in prices.items():\n    total += v\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1700"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 del 삭제와 .items() 순회 코드의 실행 결과를 예측해보세요.",
      "prompt_en": "[Predict Output] Select the exact output produced when the following Python code runs.",
      "hint_ko": "\"b\"가 삭제된 뒤 남은 항목들이 문자열에 이어 붙고 .strip()으로 끝 공백이 제거된 결과를 확인하세요.",
      "hint_en": "Check which two pairs remain after del d[\"b\"] and how res.strip() formats them.",
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
