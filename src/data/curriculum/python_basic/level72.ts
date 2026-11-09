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
      "hint_ko": "'얻다/가져오다'라는 뜻의 안전 조회 메서드는 키가 없을 때 오류 대신 None을 반환하며, 두 번째 인자로 대체 기본값을 지정할 수 있습니다.",
      "hint_en": "Instead of raising an error on a missing key, this safe lookup method returns None or the fallback value passed second.",
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
      "hint_ko": "없는 키를 찾아도 오류가 나지 않도록 값을 안전하게 '얻다/가져오다'라는 뜻의 3글자 영어 동사 메서드를 쓰세요.",
      "hint_en": "Call the 3-letter dictionary method meaning 'to obtain/fetch' so missing keys return the fallback value -1.",
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
      "hint_ko": "처음 나온 글자는 기본값 0으로 읽히므로, 거기에 1을 더하면 별도의 조건문 없이도 빈도수를 누적할 수 있습니다.",
      "hint_en": "An unseen character safely evaluates to the default 0, so adding 1 initializes and increments counts in a single line.",
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
      "hint_ko": "집계할 때와 결과를 읽을 때 모두, 키가 없으면 기본값 0을 안전하게 '얻어 오는' 3글자 동사 메서드를 사용하세요.",
      "hint_en": "In both blanks, call the 3-letter safe 'fetch/obtain' method so absent words evaluate to 0 instead of raising an error.",
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
      "hint_ko": "지정한 키의 항목을 삭제하며 그 값을 반환한 뒤, 남은 '키 목록'과 '값 목록' 뷰를 각각 리스트 변환과 합산에 활용합니다.",
      "hint_en": "Removing a key with extraction returns its value, while the key and value views expose the remaining entries.",
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
      "hint_ko": "새 내용으로 '갱신하다'(up + date) 6글자 메서드로 병합한 뒤, 사전의 '키들'과 '값들'을 뜻하는 복수형(-s) 메서드를 각각 호출하세요.",
      "hint_en": "Merge with the 6-letter 'bring up to date' method, then call the plural (-s) methods derived from 'key' and 'value'.",
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
      "hint_ko": "'사전(dictionary)'의 앞 네 글자를 딴 생성자에 (키, 값) 튜플 리스트를 넘기면 딕셔너리가 만들어지며, 병합 시 중복 키는 새 값으로 갱신됩니다.",
      "hint_en": "Passing (key, value) pairs to the dictionary constructor creates a dict, and merging overwrites overlapping keys with new values.",
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
      "hint_ko": "'사전(dictionary)'의 앞 네 글자를 딴 생성자 함수로 딕셔너리를 만들고, 거품이 '톡 터지듯' 항목을 꺼내 지우는 3글자 메서드를 쓰세요.",
      "hint_en": "Use the 4-letter constructor abbreviated from 'dictionary' first, then the 3-letter 'burst/extract' method to remove and return the value.",
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
      "hint_ko": "기본값 없이 안전 조회 메서드를 호출하면 없는 키일 때 None이 반환되므로, is None 조건으로 깔끔하게 분기할 수 있습니다.",
      "hint_en": "Calling the safe lookup method without a default returns None for missing keys, letting you branch cleanly with is None.",
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
      "prompt_ko": "키 목록을 while문으로 돌며 값을 꺼내 삭제해 더하되, 없는 키 예외를 잡아 건너뛰도록 두 빈칸을 채워보세요.",
      "prompt_en": "Fill in the pop method and missing-key exception type inside safe_take.",
      "hint_ko": "값을 '톡 꺼내 지우는' 3글자 메서드를 호출했을 때 해당 키(Key)가 없으면, '키'와 '오류(Error)'를 파스칼 표기법으로 합친 예외가 발생합니다.",
      "hint_en": "Call the 3-letter extract-and-remove method, and catch the PascalCase exception combining 'Key' and 'Error'.",
      "templateCode": "def safe_take(bag, keys):\n    total = 0\n    i = 0\n    while i < len(keys):\n        try:\n            total += bag.§§§(keys[i])\n        except §§§§§§§§:\n            pass\n        i += 1\n    return total\n\nb = dict([(\"coin\", 10), (\"gem\", 25)])\nprint(safe_take(b, [\"coin\", \"ring\", \"gem\"]))",
      "targetCode": "def safe_take(bag, keys):\n    total = 0\n    i = 0\n    while i < len(keys):\n        try:\n            total += bag.pop(keys[i])\n        except KeyError:\n            pass\n        i += 1\n    return total\n\nb = dict([(\"coin\", 10), (\"gem\", 25)])\nprint(safe_take(b, [\"coin\", \"ring\", \"gem\"]))",
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
      "hint_ko": "대괄호로 아직 없는 키를 바로 읽으면 오류가 발생합니다. 키가 없을 때 기본값 0을 돌려주는 3글자 안전 조회 메서드로 이전 개수를 읽어보세요.",
      "hint_en": "Direct bracket lookup fails on a new key; read the current count using the 3-letter safe lookup method with a default of 0.",
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
      "hint_ko": "딕셔너리에서 모든 '값들'만 모아서 돌려주는 복수형 메서드를 합계 내장 함수 안에 넣어 결과를 출력해보세요.",
      "hint_en": "Pass the dictionary method returning all stored data items into the summation built-in function and display the result.",
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
      "hint_ko": "병합 시 기존 키의 값이 덮어써지는 점과, 이미 꺼내어 삭제된 키를 기본값과 함께 다시 안전 조회할 때 무엇이 반환되는지 차례로 추적해보세요.",
      "hint_en": "Trace how merging overwrites an existing key, what extracting a key removes and returns, and what safe lookup with a fallback returns afterward.",
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