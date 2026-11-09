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
      "prompt_ko": "딕셔너리의 .get(키, 기본값) 메서드는 찾는 키가 없을 때 KeyError 대신 None(또는 두 번째 인자로 지정한 기본값)을 안전하게 반환합니다.",
      "prompt_en": "The dictionary method .get(key, default) safely looks up a key, returning None (or the specified fallback value) instead of raising a KeyError.",
      "hint_ko": "대괄호 인덱싱은 없는 키에서 오류가 발생하지만, .get()은 프로그램이 멈추지 않고 기본값을 돌려줍니다.",
      "hint_en": "Unlike bracket indexing, .get() never crashes on missing keys and cleanly falls back to the second argument.",
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
      "prompt_ko": "입력한 메뉴의 가격을 안전하게 조회하되, 메뉴가 없으면 -1을 돌려받도록 빈칸에 메서드 이름을 채워보세요. (터미널 입력: tea)",
      "prompt_en": "Fill in the dictionary method that looks up item safely and defaults to -1 when absent. (Terminal input: tea)",
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
      "prompt_ko": "counts[ch] = counts.get(ch, 0) + 1 패턴은 처음 등장한 키를 기본값 0으로 읽어 온 뒤 1을 더해 별도의 조건문 없이도 빈도수를 누적합니다.",
      "prompt_en": "The pattern counts[ch] = counts.get(ch, 0) + 1 reads 0 for unseen keys and adds 1, counting frequencies without an if-else check.",
      "hint_ko": "이미 등장했던 글자는 현재 저장된 개수가 반환되고, 처음 나온 글자는 기본값 0이 반환되어 거기에 1이 더해집니다.",
      "hint_en": "Existing characters return their current count while new characters default to 0 before adding 1.",
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
      "prompt_ko": "공백으로 입력된 단어들의 등장 횟수를 세고, \"py\"가 몇 번 나왔는지(없으면 0) 출력하도록 두 빈칸을 채워보세요. (터미널 입력: py js py py)",
      "prompt_en": "Fill in both blanks with the safe lookup method to count words and print the count of \"py\" (or 0). (Terminal input: py js py py)",
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
      "prompt_ko": ".pop(키)는 해당 항목을 삭제하며 값을 꺼내 반환하고, .keys()와 .values()는 각각 남은 키 목록과 값 목록 뷰를 제공합니다.",
      "prompt_en": ".pop(key) removes an entry and returns its value, while .keys() and .values() expose views of the remaining keys and values.",
      "hint_ko": ".keys() 뷰를 list()로 감싸면 일반 리스트가 되고, .values() 뷰를 sum()에 넘기면 모든 값을 바로 합산할 수 있습니다.",
      "hint_en": "Wrap .keys() in list() to build a list of keys, and pass .values() directly into sum() to total the values.",
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
      "prompt_ko": "dict() 생성자에 (키, 값) 튜플 리스트를 넘기면 딕셔너리가 만들어지며, .update() 메서드는 다른 딕셔너리의 항목들을 한꺼번에 병합·갱신합니다.",
      "prompt_en": "The dict() constructor builds a dictionary from (key, value) pairs, and .update() merges another dictionary in place, overwriting duplicate keys.",
      "hint_ko": ".update() 실행 시 이미 있던 키(\"hp\")는 새 값으로 덮어써지고, 없던 키(\"atk\")는 새로 추가됩니다.",
      "hint_en": "During .update(), existing keys like \"hp\" are overwritten with the new value while new keys like \"atk\" are added.",
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
      "prompt_ko": "기본값 없이 .get(k)를 호출하면 없는 키일 때 None이 반환되므로, if res is None: 조건문으로 키의 존재 여부를 깔끔하게 분기할 수 있습니다. (터미널 입력: gold)",
      "prompt_en": "Calling .get(k) without a fallback returns None for missing keys, allowing clean branching with if res is None:. (Terminal input: gold)",
      "hint_ko": "None인지 확인할 때는 등호(==) 대신 객체 동일성 연산자인 is None을 사용하는 것이 파이썬 표준 관례입니다.",
      "hint_en": "Checking for None with is None is the standard Python idiom after a default-free .get() lookup.",
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