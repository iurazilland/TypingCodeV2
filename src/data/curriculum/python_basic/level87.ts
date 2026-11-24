import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_87: PracticeRound = {
  "id": "py-basic-r87",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 87,
  "title_ko": "87레벨: 딕셔너리 안전 조회(.get()), 뷰 메서드(.keys(), .values())와 .pop(), .update()",
  "title_en": "Level 87: Dictionary .get(), .keys(), .values(), .pop() & .update()",
  "description_ko": "없는 키도 안전하게 찾는 .get()과 빈도수 집계 패턴, 키·값 목록 뷰(.keys(), .values()), .pop(), .update()를 익힙니다.",
  "description_en": "Master safe lookup with .get(), frequency counting, dictionary views (.keys(), .values()), .pop(), and .update().",
  "totalQuestions": 15,
  "unlockedBlocks": [
    "comment",
    "print",
    "variable",
    "input",
    "type",
    "if",
    "for_range",
    "range",
    "for_in",
    "while",
    "break",
    "continue",
    "list",
    "tuple",
    "dict",
    "set",
    "iter",
    "method",
    "sorted",
    "def",
    "return",
    "class",
    "try"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] stock.get(\"pen\", 0)과 stock.get(\"note\", 0)으로 없는 키도 에러 없이 안전 조회해 출력해보세요.",
      "prompt_en": "[Block] Use stock.get(\"pen\", 0) and stock.get(\"note\", 0) to safely look up keys with default 0.",
      "hint_ko": "d[k]는 없는 키에서 KeyError가 나지만, d.get(k, 기본값)은 키가 없을 때 지정한 기본값을 안전하게 돌려줍니다.",
      "hint_en": "Unlike d[k], d.get(k, default) never raises KeyError and returns the fallback value when k is absent.",
      "targetCode": "stock = {\"pen\": 5}\nprint(stock.get(\"pen\", 0), stock.get(\"note\", 0))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "5 0"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 메뉴판에 없는 음료가 입력되더라도 에러 대신 -1을 돌려받도록 안전 조회 메서드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the dictionary method name that looks up item safely and defaults to -1.",
      "hint_ko": "키가 없을 때 기본값을 반환하는 딕셔너리 안전 조회 메서드를 호출하세요.",
      "hint_en": "Call the dictionary method for safe key lookup.",
      "templateCode": "prices = {\"tea\": 3000, \"milk\": 2500}\nitem = input()\nprint(prices.§§§§(item, -1))",
      "targetCode": "prices = {\"tea\": 3000, \"milk\": 2500}\nitem = input()\nprint(prices.get(item, -1))",
      "testCases": [
        {
          "id": 1,
          "input": "tea",
          "expectedOutput": "3000"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] list(scores.keys())로 키 리스트를 구하고 sum(scores.values())로 값 합계를 출력해보세요.",
      "prompt_en": "[Block] Print list(scores.keys()) and sum(scores.values()) to inspect all keys and total the values.",
      "hint_ko": ".keys()는 모든 키 목록을, .values()는 모든 값 목록을 꺼내주어 list()나 sum(), max()에 바로 넣을 수 있습니다.",
      "hint_en": ".keys() and .values() expose dictionary keys and values for functions like list(), sum(), and max().",
      "targetCode": "scores = {\"Kim\": 80, \"Lee\": 90}\nprint(list(scores.keys()), sum(scores.values()))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['Kim', 'Lee'] 170"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 과목별 점수 딕셔너리에서 모든 점수의 최댓값을 구하도록 값 목록 메서드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the dictionary method inside max() to find the highest score among all stored scores.",
      "hint_ko": "딕셔너리의 모든 '값(value)'들을 모아 돌려주는 메서드를 호출하세요.",
      "hint_en": "Call the method that returns a view of the dictionary's stored numbers.",
      "templateCode": "grades = {\"Kor\": 85, \"Math\": 98, \"Eng\": 92}\nprint(max(grades.§§§§§§§()))",
      "targetCode": "grades = {\"Kor\": 85, \"Math\": 98, \"Eng\": 92}\nprint(max(grades.values()))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "98"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] out = bag.pop(\"mp\")로 항목을 꺼내 삭제하고 꺼낸 값과 남은 딕셔너리 길이를 출력해보세요.",
      "prompt_en": "[Block] Use bag.pop(\"mp\") to remove and return the value of \"mp\", then print out and len(bag).",
      "hint_ko": "del d[k]는 삭제만 하지만, d.pop(k)는 해당 키를 삭제하면서 그 값을 동시에 반환해 변수에 담아 쓸 수 있습니다.",
      "hint_en": "Unlike del d[k], d.pop(k) removes the key and returns its value at the same time.",
      "targetCode": "bag = {\"hp\": 100, \"mp\": 40}\nout = bag.pop(\"mp\")\nprint(out, len(bag))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "40 1"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 대기자 명단 딕셔너리에서 \"Lee\"의 번호표를 꺼내 반환받으면서 삭제하도록 메서드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the dictionary method that removes \"Lee\" and returns its value.",
      "hint_ko": "지정한 키의 값을 뽑아내어 돌려주면서 딕셔너리에서 지우는 메서드를 적으세요.",
      "hint_en": "Use the method that pops a key-value pair from a dictionary.",
      "templateCode": "wait = {\"Kim\": 1, \"Lee\": 2, \"Park\": 3}\nnum = wait.§§§§(\"Lee\")\nprint(num, list(wait.keys()))",
      "targetCode": "wait = {\"Kim\": 1, \"Lee\": 2, \"Park\": 3}\nnum = wait.pop(\"Lee\")\nprint(num, list(wait.keys()))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2 ['Kim', 'Park']"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] d[ch] = d.get(ch, 0) + 1 패턴으로 문자열 \"banana\"의 각 글자 등장 횟수를 세어보세요.",
      "prompt_en": "[Block] Use counts[ch] = counts.get(ch, 0) + 1 in a loop to count character frequencies in \"banana\".",
      "hint_ko": "counts.get(ch, 0) + 1을 쓰면 if-else 없이도 처음 나온 글자는 0 + 1 = 1로, 있던 글자는 기존 값 + 1로 누적됩니다.",
      "hint_en": "counts.get(ch, 0) + 1 initializes unseen keys to 1 and increments existing keys in a single line.",
      "targetCode": "counts = {}\nfor ch in \"banana\":\n    counts[ch] = counts.get(ch, 0) + 1\nprint(counts[\"a\"], counts[\"n\"])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 2"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 기본 설정 딕셔너리에 새 설정 딕셔너리를 한꺼번에 병합·갱신하도록 메서드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the dictionary method that merges patch into cfg in place.",
      "hint_ko": "다른 딕셔너리의 키-값 쌍들을 현재 딕셔너리에 덮어쓰거나 추가해 갱신하는 메서드를 호출하세요.",
      "hint_en": "Call the method that updates a dictionary with another dictionary's entries.",
      "templateCode": "cfg = {\"vol\": 50, \"fps\": 30}\npatch = {\"fps\": 60, \"hdr\": 1}\ncfg.§§§§§§§(patch)\nprint(cfg[\"fps\"], len(cfg))",
      "targetCode": "cfg = {\"vol\": 50, \"fps\": 30}\npatch = {\"fps\": 60, \"hdr\": 1}\ncfg.update(patch)\nprint(cfg[\"fps\"], len(cfg))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "60 3"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 빈칸 2곳을 채워 단어 빈도수를 안전 조회로 누적한 뒤 추가 점수 딕셔너리를 병합해보세요.",
      "prompt_en": "[Fill Blank] Complete the safe lookup method, dictionary merge method, and stored-counts view method.",
      "hint_ko": "기본값을 지정해 안전 조회하는 메서드(get)와 다른 딕셔너리를 병합하는 메서드(update)를 차례로 채우세요.",
      "hint_en": "Check the lookup method, merge method, and view method.",
      "templateCode": "freq = {}\nfor w in [\"a\", \"b\", \"a\"]:\n    freq[w] = freq.§§§§(w, 0) + 1\nfreq.§§§§§§§({\"c\": 5})\nprint(freq[\"a\"], sum(freq.values()))",
      "targetCode": "freq = {}\nfor w in [\"a\", \"b\", \"a\"]:\n    freq[w] = freq.get(w, 0) + 1\nfreq.update({\"c\": 5})\nprint(freq[\"a\"], sum(freq.values()))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2 8"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 딕셔너리에 없는 키 \"gold\"를 조회할 때 기본값 0을 안전하게 반환하도록 잘못된 메서드 이름(key)을 get으로 고쳐보세요.",
      "prompt_en": "[Fix Bug] Replace the bracket lookup bag[\"gold\"] with a safe lookup returning 0 when the key is missing.",
      "hint_ko": "없는 키를 조회할 때 에러 없이 기본값을 얻으려면 .get(\"gold\", 0) 메서드를 사용해야 합니다.",
      "hint_en": "Use bag.get(\"gold\", 0) instead of bag[\"gold\"] to avoid KeyError.",
      "templateCode": "bag = {\"silver\": 10}\nprint(bag.key(\"gold\", 0))",
      "targetCode": "bag = {\"silver\": 10}\nprint(bag.get(\"gold\", 0))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "0"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 글자 빈도수를 셀 때 기본값을 잘못 지정해 모든 글자의 개수가 1씩 더 크게 나오는 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the default fallback argument in freq.get() so new characters start at a count of 1 instead of 2.",
      "hint_ko": "처음 등장한 글자는 이전 등장 횟수가 0번이어야 거기에 1을 더했을 때 정확히 1이 됩니다.",
      "hint_en": "Pass 0 as the default in .get(ch, 0) + 1 so the first occurrence becomes 0 + 1 = 1.",
      "templateCode": "freq = {}\nfor ch in \"aba\":\n    freq[ch] = freq.get(ch, 1) + 1\nprint(freq[\"a\"], freq[\"b\"])",
      "targetCode": "freq = {}\nfor ch in \"aba\":\n    freq[ch] = freq.get(ch, 0) + 1\nprint(freq[\"a\"], freq[\"b\"])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2 1"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 반복문 안에서 딕셔너리 d의 키 k 빈도수를 d.get(k, 0) + 1로 1 증가시키는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the indented line that increments d[k] using d.get(k, 0) + 1.",
      "hint_ko": "d[k] = d.get(k, 0) + 1 형태로 안전 조회와 + 1을 결합하세요.",
      "hint_en": "Write d[k] = d.get(k, 0) + 1 inside the loop.",
      "templateCode": "d = {}\nfor k in input().split():\n    §§§§§§§§§§§§§§§§§§§§§§§\nprint(d.get(\"py\", 0))",
      "targetCode": "d = {}\nfor k in input().split():\n    d[k] = d.get(k, 0) + 1\nprint(d.get(\"py\", 0))",
      "testCases": [
        {
          "id": 1,
          "input": "py js py",
          "expectedOutput": "2"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 딕셔너리 cart의 모든 값(가격)들의 합계를 sum()과 .values()로 출력하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the line that prints the sum of all values in cart.",
      "hint_ko": "print(sum(cart.values())) 형태로 값 목록의 합계를 출력하세요.",
      "hint_en": "Write print(sum(cart.values())).",
      "templateCode": "cart = {\"apple\": 1200, \"milk\": 2500, \"bread\": 1800}\n§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "cart = {\"apple\": 1200, \"milk\": 2500, \"bread\": 1800}\nprint(sum(cart.values()))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "5500"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 딕셔너리에 .update(), .pop(), .get()을 차례대로 실행했을 때의 출력 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the output after running .update(), .pop(), and .get() on a dictionary.",
      "hint_ko": ".update()는 기존 키 \"a\"의 값을 30으로 덮어쓰고 새 키 \"c\"를 추가하며, .pop(\"b\")는 20을 꺼내 삭제합니다.",
      "hint_en": ".update() overwrites \"a\" with 30 and adds \"c\": 40; .pop(\"b\") removes \"b\" and returns 20.",
      "targetCode": "d = {\"a\": 10, \"b\": 20}\nd.update({\"a\": 30, \"c\": 40})\nx = d.pop(\"b\")\ny = d.get(\"b\", 5)\nprint(x, y, sum(d.values()))",
      "choices": [
        "20 5 70",
        "20 20 70",
        "10 5 50",
        "20 5 50"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "20 5 70"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 단어 리스트의 글자 수 합계를 구하면서 빈도수 딕셔너리의 키 개수와 최댓값을 출력한 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the output of the frequency counter code using .get(), .keys(), and .values().",
      "hint_ko": "고유 단어는 \"go\", \"py\", \"js\" 3개이고, 가장 많이 등장한 \"py\"의 빈도수는 3입니다.",
      "hint_en": "There are 3 distinct keys (\"go\", \"py\", \"js\"), and the highest frequency value is 3.",
      "targetCode": "words = [\"go\", \"py\", \"js\", \"py\", \"go\", \"py\"]\ncnt = {}\nfor w in words:\n    cnt[w] = cnt.get(w, 0) + 1\nprint(len(cnt.keys()), max(cnt.values()), cnt.get(\"c\", 0))",
      "choices": [
        "3 3 0",
        "6 3 0",
        "3 2 0",
        "3 3 1"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 3 0"
        }
      ]
    }
  ]
};
