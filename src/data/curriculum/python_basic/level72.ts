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
  "totalQuestions": 15,
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 딕셔너리의 .get(키, 기본값) 메서드로 없는 키도 에러 없이 안전하게 조회해보세요.",
      "prompt_en": "[Block] Use the dictionary .get(key, default) method to safely look up keys without KeyError.",
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
      "prompt_ko": "[빈칸 채우기] 입력 메뉴의 가격을 안전 조회하되 없으면 -1을 돌려받도록 메서드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the dictionary method that looks up item safely and defaults to -1.",
      "hint_ko": "없는 키를 찾아도 오류가 나지 않도록 안전하게 값을 가져오는 3글자 메서드 get을 쓰세요.",
      "hint_en": "Call the 3-letter dictionary method get so missing keys return -1.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] counts.get(ch, 0) + 1 패턴으로 각 글자의 등장 빈도수를 누적해보세요.",
      "prompt_en": "[Block] Use counts[ch] = counts.get(ch, 0) + 1 in a loop to count character frequencies.",
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
      "prompt_ko": "[빈칸 채우기] 입력 단어들의 등장 횟수를 세고 \"py\"의 개수(없으면 0)를 출력하도록 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in both blanks with the safe lookup method to count words and print the count of \"py\".",
      "hint_ko": "집계할 때와 결과를 읽을 때 모두 키가 없으면 기본값 0을 돌려주는 3글자 메서드 get을 사용하세요.",
      "hint_en": "Call get in both blanks so absent words evaluate to 0.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] .pop()으로 항목을 꺼내 삭제하고 .keys()와 .values()로 남은 키 목록과 값 합계를 구해보세요.",
      "prompt_en": "[Block] Use .pop() to remove an entry, and use .keys() and .values() to inspect remaining keys and values.",
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
      "prompt_ko": "[빈칸 채우기] patch를 병합한 cfg에서 정렬된 키 목록과 모든 설정값의 합계를 출력하도록 두 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the methods to list cfg's keys for sorting and sum its values.",
      "hint_ko": "사전의 키 목록을 돌려주는 keys 메서드와 값 목록을 돌려주는 values 메서드를 각각 호출하세요.",
      "hint_en": "Call keys() inside sorted(...) and values() inside sum(...).",
      "templateCode": "cfg = {\"vol\": 50, \"fps\": 30}\npatch = {\"fps\": 60, \"hdr\": 1}\ncfg.update(patch)\nprint(sorted(cfg.§§§§()), sum(cfg.§§§§§§()))",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] dict() 생성자로 (키, 값) 튜플 리스트를 딕셔너리로 만들고 .update()로 병합해보세요.",
      "prompt_en": "[Block] Build dictionaries from (key, value) pairs with dict() and merge them in place with .update().",
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
      "prompt_ko": "[빈칸 채우기] (키, 값) 쌍 리스트로 딕셔너리를 생성하는 함수와 \"exp\" 항목을 꺼내 삭제하는 메서드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the constructor function to build user and the method to remove and return \"exp\".",
      "hint_ko": "4글자 생성자 함수 dict로 딕셔너리를 만들고, 항목을 꺼내 지우는 3글자 메서드 pop을 쓰세요.",
      "hint_en": "Use dict first and pop second.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] .get(k) 반환값이 None인지 if res is None:으로 검사해 분기하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Call ranks.get(k) and branch with if res is None: to handle missing keys.",
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
      "prompt_ko": "[빈칸 채우기] 입력 키가 bag에 있으면 꺼내 삭제한 값과 남은 값들의 합을 출력하도록 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] If k is in bag, pop its value and print it with the sum of remaining values.",
      "hint_ko": "첫 빈칸에는 항목을 꺼내 삭제하는 pop을, 둘째 빈칸에는 값 목록을 돌려주는 values를 적으세요.",
      "hint_en": "Call pop on line 4 and values on line 5.",
      "templateCode": "bag = dict([(\"coin\", 10), (\"gem\", 25)])\nk = input()\nif k in bag:\n    val = bag.§§§(k)\n    print(val, sum(bag.§§§§§§()))\nelse:\n    print(0, sum(bag.values()))",
      "targetCode": "bag = dict([(\"coin\", 10), (\"gem\", 25)])\nk = input()\nif k in bag:\n    val = bag.pop(k)\n    print(val, sum(bag.values()))\nelse:\n    print(0, sum(bag.values()))",
      "testCases": [
        {
          "id": 1,
          "input": "coin",
          "expectedOutput": "10 25"
        },
        {
          "id": 2,
          "input": "ring",
          "expectedOutput": "0 35"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 처음 등장한 글자의 기본값이 1로 잘못 설정되어 개수가 1씩 더 나오는 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the default argument in counts.get(ch, 1) so unseen characters start from 0 before adding 1.",
      "hint_ko": "처음 나온 글자는 이전 개수가 0이어야 거기에 1을 더했을 때 1이 되므로 .get(ch, 0)으로 수정하세요.",
      "hint_en": "Change the fallback value in counts.get(ch, 1) from 1 to 0.",
      "templateCode": "text = \"abba\"\ncounts = {}\nfor ch in text:\n    counts[ch] = counts.get(ch, 1) + 1\nprint(counts[\"a\"], counts[\"b\"])",
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
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 딕셔너리에서 \"pen\"을 삭제하지 않고 값만 조회해야 하는데 .pop()을 쓴 버그를 고쳐 5 2를 출력해보세요.",
      "prompt_en": "[Fix Bug] Replace .pop(\"pen\") with .get(\"pen\") so \"pen\" is looked up without removing it from stock.",
      "hint_ko": ".pop()은 항목을 삭제하므로 딕셔너리를 유지한 채 값만 가져오려면 .get() 메서드를 사용해야 합니다.",
      "hint_en": "Use stock.get(\"pen\") instead of stock.pop(\"pen\") to preserve the entry.",
      "templateCode": "stock = {\"pen\": 5, \"book\": 3}\ncnt = stock.pop(\"pen\")\nprint(cnt, len(stock))",
      "targetCode": "stock = {\"pen\": 5, \"book\": 3}\ncnt = stock.get(\"pen\")\nprint(cnt, len(stock))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "5 2"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 딕셔너리 sales의 모든 값(.values())의 총합을 구해 변수 total에 저장하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Sum all values of sales using sum(sales.values()) and assign the result to total.",
      "hint_ko": "total = sum(sales.values()) 형태로 모든 매출 값의 합계를 변수 total에 대입하세요.",
      "hint_en": "Write total = sum(sales.values()).",
      "templateCode": "sales = {\"mon\": 120, \"tue\": 80, \"wed\": 150}\nsales.update({\"tue\": 100})\n§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(total)",
      "targetCode": "sales = {\"mon\": 120, \"tue\": 80, \"wed\": 150}\nsales.update({\"tue\": 100})\ntotal = sum(sales.values())\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "370"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] (키, 값) 튜플 리스트 pairs를 dict() 생성자로 변환해 변수 pt에 저장하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Convert pairs into a dictionary using dict(pairs) and assign it to pt.",
      "hint_ko": "pt = dict(pairs) 형태로 딕셔너리 생성자 호출 결과를 변수 pt에 저장하세요.",
      "hint_en": "Write pt = dict(pairs).",
      "templateCode": "pairs = [(\"x\", 10), (\"y\", 20)]\n§§§§§§§§§§§§§§§§\nprint(pt[\"x\"] + pt[\"y\"])",
      "targetCode": "pairs = [(\"x\", 10), (\"y\", 20)]\npt = dict(pairs)\nprint(pt[\"x\"] + pt[\"y\"])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "30"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 dict(), .update(), .pop(), .get() 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following dictionary code.",
      "hint_ko": "병합 시 \"b\"가 5로 덮어써지고, \"a\"를 .pop()으로 삭제한 뒤 다시 .get(\"a\", 100)으로 조회할 때 반환값을 확인하세요.",
      "hint_en": "Trace how update sets \"b\" to 5, pop removes \"a\" (10), and get(\"a\", 100) returns the fallback 100.",
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
