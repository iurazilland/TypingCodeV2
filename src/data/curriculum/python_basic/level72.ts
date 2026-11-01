import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_72: PracticeRound = {
  "id": "py-basic-r72",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 72,
  "title_ko": "72레벨: 딕셔너리 부가 메서드와 dict() 생성자",
  "title_en": "Level 72: Extended Dictionary Methods & dict() Constructor",
  "description_ko": "안전 조회 .get()과 빈도수 카운터 패턴, .keys()·.values()·.pop()·.update(), 그리고 dict() 생성자를 익힙니다.",
  "description_en": "Master .get() frequency counters, .keys(), .values(), .pop(), .update(), and the dict() constructor.",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "method",
    "type",
    "math",
    "sorted",
    "if",
    "for_in",
    "while",
    "try",
    "def"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "stock.get(\"pen\"), 없는 키를 조회한 stock.get(\"note\"), 기본값 0을 준 stock.get(\"note\", 0)을 순서대로 출력해보세요.",
      "prompt_en": "Print stock.get(\"pen\"), stock.get(\"note\"), and stock.get(\"note\", 0) on separate lines.",
      "hint_ko": ".get(키)는 키가 없을 때 KeyError 대신 None을 반환하며, 두 번째 인자로 기본값을 지정할 수 있습니다.",
      "hint_en": ".get(key) returns None instead of raising KeyError when missing, or returns the given default value.",
      "targetCode": "stock = {\"pen\": 5}\nprint(stock.get(\"pen\"))\nprint(stock.get(\"note\"))\nprint(stock.get(\"note\", 0))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "5\nNone\n0"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "입력한 메뉴의 가격을 안전하게 조회하되, 메뉴가 없으면 -1을 돌려받도록 빈칸에 메서드 이름을 채워보세요.",
      "prompt_en": "Fill in the dictionary method that looks up item safely and defaults to -1 when absent.",
      "hint_ko": "없는 키에 대해 기본값 -1을 반환받으려면 prices.get(item, -1)을 사용합니다.",
      "hint_en": "Use prices.get(item, -1) to return -1 whenever item is not a key in prices.",
      "templateCode": "prices = {\"tea\": 3000, \"milk\": 2500}\nitem = input()\ncost = prices.§§§(item, -1)\nprint(cost)",
      "targetCode": "prices = {\"tea\": 3000, \"milk\": 2500}\nitem = input()\ncost = prices.get(item, -1)\nprint(cost)",
      "testCases": [
        {
          "id": 1,
          "input": "tea",
          "expectedOutput": "3000"
        },
        {
          "id": 2,
          "input": "juice",
          "expectedOutput": "-1"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "\"banana\"의 각 글자를 돌며 counts.get(ch, 0) + 1 패턴으로 글자 빈도수를 세고 \"a\"와 \"n\"의 개수를 출력해보세요.",
      "prompt_en": "Count character frequencies in \"banana\" with counts.get(ch, 0) + 1 and print counts of \"a\" and \"n\".",
      "hint_ko": "처음 나온 글자는 counts.get(ch, 0)이 0을 돌려주므로 + 1을 더해 1로 깔끔하게 저장됩니다.",
      "hint_en": "For a first-seen character, counts.get(ch, 0) returns 0, so adding 1 initializes its count to 1.",
      "targetCode": "word = \"banana\"\ncounts = {}\nfor ch in word:\n    counts[ch] = counts.get(ch, 0) + 1\nprint(counts[\"a\"], counts[\"n\"])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 2"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "공백으로 입력된 단어들의 등장 횟수를 세고, \"py\"가 몇 번 나왔는지(없으면 0) 출력하도록 두 빈칸을 채워보세요.",
      "prompt_en": "Fill in both blanks with the safe lookup method to count words and print the count of \"py\" (or 0).",
      "hint_ko": "집계할 때와 조회할 때 모두 기본값 0을 주는 .get(키, 0) 패턴을 사용하면 KeyError가 발생하지 않습니다.",
      "hint_en": "Use .get(key, 0) both when incrementing counts and when printing the count of \"py\".",
      "templateCode": "words = input().split()\nfreq = {}\nfor w in words:\n    freq[w] = freq.§§§(w, 0) + 1\nprint(freq.§§§(\"py\", 0))",
      "targetCode": "words = input().split()\nfreq = {}\nfor w in words:\n    freq[w] = freq.get(w, 0) + 1\nprint(freq.get(\"py\", 0))",
      "testCases": [
        {
          "id": 1,
          "input": "py js py py",
          "expectedOutput": "3"
        },
        {
          "id": 2,
          "input": "go rust",
          "expectedOutput": "0"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "scores.pop(\"park\")으로 값을 꺼내 지운 뒤, 꺼낸 값과 남은 키 리스트(list(scores.keys())), 값 합계(sum(scores.values()))를 출력해보세요.",
      "prompt_en": "Pop \"park\" from scores, then print the popped value, list(scores.keys()), and sum(scores.values()).",
      "hint_ko": "d.pop(키)는 해당 키-값 쌍을 삭제하면서 값을 반환하고, .keys()와 .values()는 키들과 값들을 모아서 보여줍니다.",
      "hint_en": "d.pop(key) removes and returns the value; .keys() and .values() expose remaining keys and values.",
      "targetCode": "scores = {\"kim\": 80, \"lee\": 90, \"park\": 70}\nout = scores.pop(\"park\")\nnames = list(scores.keys())\nprint(out, names, sum(scores.values()))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "70 ['kim', 'lee'] 170"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "설정 딕셔너리에 patch 내용을 병합한 뒤, 정렬된 키 목록과 모든 설정값의 합계를 출력하도록 세 빈칸을 채워보세요.",
      "prompt_en": "Fill in the methods to merge patch into cfg, list its keys for sorting, and sum its values.",
      "hint_ko": "병합 수정은 .update(patch), 키 목록은 .keys(), 값 목록은 .values() 메서드를 호출합니다.",
      "hint_en": "Use .update(patch) to merge, .keys() for keys, and .values() for values.",
      "templateCode": "cfg = {\"vol\": 50, \"fps\": 30}\npatch = {\"fps\": 60, \"hdr\": 1}\ncfg.§§§§§§(patch)\nprint(sorted(cfg.§§§§()), sum(cfg.§§§§§§()))",
      "targetCode": "cfg = {\"vol\": 50, \"fps\": 30}\npatch = {\"fps\": 60, \"hdr\": 1}\ncfg.update(patch)\nprint(sorted(cfg.keys()), sum(cfg.values()))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['fps', 'hdr', 'vol'] 111"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "튜플 쌍 리스트로 dict([(\"hp\", 100), (\"mp\", 40)])을 만들고 p1.update(p2)로 병합한 뒤 hp, mp, atk를 출력해보세요.",
      "prompt_en": "Create p1 and p2 via the dict() pair-list constructor, update p1 with p2, and print hp, mp, atk.",
      "hint_ko": "dict([(\"키\", 값), ...]) 생성자는 (키, 값) 튜플들이 담긴 리스트를 받아 새 딕셔너리를 만들어 줍니다.",
      "hint_en": "dict() accepts a list of (key, value) tuple pairs to construct a dictionary.",
      "targetCode": "p1 = dict([(\"hp\", 100), (\"mp\", 40)])\np2 = dict([(\"hp\", 120), (\"atk\", 25)])\np1.update(p2)\nprint(p1[\"hp\"], p1[\"mp\"], p1[\"atk\"])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "120 40 25"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "(키, 값) 쌍 리스트로 딕셔너리를 생성하는 함수와 \"exp\" 항목을 꺼내 삭제하는 메서드를 두 빈칸에 채워보세요.",
      "prompt_en": "Fill in the constructor function to build user and the method to remove and return \"exp\".",
      "hint_ko": "쌍 리스트로 딕셔너리를 만드는 생성자는 dict(...)이며, 특정 키를 삭제하며 값을 꺼낼 때는 .pop(\"exp\")을 씁니다.",
      "hint_en": "Use dict(...) to construct the dictionary and .pop(\"exp\") to extract and delete \"exp\".",
      "templateCode": "pairs = [(\"id\", 7), (\"lv\", 3), (\"exp\", 50)]\nuser = §§§§(pairs)\ndropped = user.§§§(\"exp\")\nprint(dropped, list(user.keys()))",
      "targetCode": "pairs = [(\"id\", 7), (\"lv\", 3), (\"exp\", 50)]\nuser = dict(pairs)\ndropped = user.pop(\"exp\")\nprint(dropped, list(user.keys()))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "50 ['id', 'lv']"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "입력 키를 ranks.get(k)로 조회해 None이면 unranked를, 있으면 Rank:숫자 형식으로 출력해보세요. (출력 예: Rank:1)",
      "prompt_en": "Look up input k with ranks.get(k); if res is None print unranked, else print Rank:{res}.",
      "hint_ko": "try-except KeyError 대신 .get(k)와 if res is None:을 조합해도 없는 키를 깔끔하게 분기할 수 있습니다.",
      "hint_en": "Combining .get(k) with if res is None: handles missing keys cleanly without raising KeyError.",
      "targetCode": "ranks = {\"gold\": 1, \"silver\": 2}\nk = input()\nres = ranks.get(k)\nif res is None:\n    print(\"unranked\")\nelse:\n    print(f\"Rank:{res}\")",
      "testCases": [
        {
          "id": 1,
          "input": "gold",
          "expectedOutput": "Rank:1"
        },
        {
          "id": 2,
          "input": "bronze",
          "expectedOutput": "unranked"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "키 목록을 while문으로 돌며 값을 꺼내 삭제해 더하되, 없는 키 예외를 잡아 0을 더하도록 두 빈칸을 채워보세요.",
      "prompt_en": "Fill in the pop method and missing-key exception type inside safe_take.",
      "hint_ko": "없는 키에 대해 bag.pop(키)을 호출하면 KeyError 예외가 발생합니다.",
      "hint_en": "Calling bag.pop(key) when key is absent raises KeyError.",
      "templateCode": "def safe_take(bag, keys):\n    total = 0\n    i = 0\n    while i < len(keys):\n        try:\n            total += bag.§§§(keys[i])\n        except §§§§§§§§:\n            total += 0\n        i += 1\n    return total\n\nb = dict([(\"coin\", 10), (\"gem\", 25)])\nprint(safe_take(b, [\"coin\", \"ring\", \"gem\"]))",
      "targetCode": "def safe_take(bag, keys):\n    total = 0\n    i = 0\n    while i < len(keys):\n        try:\n            total += bag.pop(keys[i])\n        except KeyError:\n            total += 0\n        i += 1\n    return total\n\nb = dict([(\"coin\", 10), (\"gem\", 25)])\nprint(safe_take(b, [\"coin\", \"ring\", \"gem\"]))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "35"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "빈 딕셔너리에서 첫 글자를 셀 때 KeyError가 발생하는 버그를 고쳐, 없는 글자는 0부터 안전하게 누적되도록 수정해보세요.",
      "prompt_en": "Fix the KeyError when counting the first occurrence of each character in an empty dictionary.",
      "hint_ko": "counts[ch] 대신 counts.get(ch, 0)으로 이전 개수를 읽어야 처음 나온 글자도 0 + 1로 계산됩니다.",
      "hint_en": "Read the previous count with counts.get(ch, 0) instead of counts[ch].",
      "templateCode": "text = \"abba\"\ncounts = {}\nfor ch in text:\n    counts[ch] = counts[ch] + 1\nprint(counts[\"a\"], counts[\"b\"])",
      "targetCode": "text = \"abba\"\ncounts = {}\nfor ch in text:\n    counts[ch] = counts.get(ch, 0) + 1\nprint(counts[\"a\"], counts[\"b\"])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2 2"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "요일별 매출을 수정한 코드 아래에 한 줄을 추가하여 모든 매출 값의 총합을 출력해보세요.",
      "prompt_en": "Add one line below the dictionary update to print the sum of all sales values.",
      "hint_ko": "마지막 줄에 print(sum(sales.values()))를 작성해 모든 값의 합계를 출력하세요.",
      "hint_en": "Write print(sum(sales.values())) on the last line.",
      "templateCode": "sales = {\"mon\": 120, \"tue\": 80, \"wed\": 150}\nsales.update({\"tue\": 100})\n§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "sales = {\"mon\": 120, \"tue\": 80, \"wed\": 150}\nsales.update({\"tue\": 100})\nprint(sum(sales.values()))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "370"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 딕셔너리 메서드 코드를 실행했을 때 출력되는 결과를 선택해보세요.",
      "prompt_en": "Select the exact output of the following dictionary code.",
      "hint_ko": "update 후 d는 a:10, b:5, c:15입니다. pop(\"a\")로 꺼낸 x는 10이고, 삭제된 \"a\"를 get(\"a\", 100)으로 찾으면 100, 남은 값 합은 20입니다.",
      "hint_en": "After popping \"a\" (10), d.get(\"a\", 100) returns default 100, and remaining values 5 + 15 sum to 20.",
      "targetCode": "d = dict([(\"a\", 10), (\"b\", 20)])\nd.update({\"b\": 5, \"c\": 15})\nx = d.pop(\"a\")\ny = d.get(\"a\", 100)\nprint(x, y, sum(d.values()))",
      "choices": [
        "10 100 20",
        "10 10 30",
        "10 None 20",
        "20 100 20"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "10 100 20"
        }
      ]
    }
  ]
};
