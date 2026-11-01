import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_82: PracticeRound = {
  "id": "py-basic-r82",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 82,
  "title_ko": "82레벨: 실용 내장 함수 & 함수 확장 누적 복습 종합",
  "title_en": "Level 82: Section 13 Comprehensive Spiral Review",
  "description_ko": "수치·반복자·논리·타입 내장 함수(abs, round, map, enumerate, zip, reversed, all, any, isinstance)와 *args, lambda를 종합 점검합니다.",
  "description_en": "Comprehensive synthesis of abs, round, map, enumerate, zip, reversed, all, any, isinstance, *args, and lambda.",
  "totalQuestions": 10,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "type",
    "math",
    "map",
    "iter",
    "sorted",
    "method",
    "if",
    "for_in",
    "while",
    "def",
    "try",
    "class"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 줄에 입력된 실수 목록을 나란히 짝지어 각 오차 크기를 소수 둘째 자리로 반올림한 뒤 최댓값을 출력해보세요.",
      "prompt_en": "Fill in both blanks to pair two float lists, round each absolute difference to 2 decimals, and print the max.",
      "hint_ko": "zip(a, b)로 같은 위치의 두 실수를 꺼내고 round(abs(x - y), 2)로 오차 크기를 계산합니다.",
      "hint_en": "Use zip(a, b) to pair elements and abs(x - y) inside round(..., 2) to compute each error.",
      "templateCode": "a = list(map(float, input().split()))\nb = list(map(float, input().split()))\nerrs = [round(§§§(x - y), 2) for x, y in §§§(a, b)]\nprint(max(errs))",
      "targetCode": "a = list(map(float, input().split()))\nb = list(map(float, input().split()))\nerrs = [round(abs(x - y), 2) for x, y in zip(a, b)]\nprint(max(errs))",
      "testCases": [
        {
          "id": 1,
          "input": "1.5 3.2 5.0\n1.2 3.8 4.9",
          "expectedOutput": "0.6"
        },
        {
          "id": 2,
          "input": "10.0 2.25\n8.5 2.5",
          "expectedOutput": "1.5"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "이름과 점수를 딕셔너리로 묶고 점수 내림차순으로 정렬해 1위부터 번호표를 출력해보세요. (출력 예: 1.Lee:95)",
      "prompt_en": "Fill in the blanks to build a score dict, sort descending by score, and print 1-based rankings.",
      "hint_ko": "dict(zip(names, pts))로 묶고 key=lambda x: x[1]로 내림차순 정렬한 뒤 enumerate(top, 1)로 1위부터 출력합니다.",
      "hint_en": "Combine zip() for dict creation, lambda for score sorting, and enumerate(top, 1) for 1-based ranking.",
      "templateCode": "names = input().split()\npts = list(map(int, input().split()))\nboard = dict(§§§(names, pts))\nit = board.items()\ntop = sorted(it, key=§§§§§§ x: x[1], reverse=True)\nfor r, pair in §§§§§§§§§(top, 1):\n    print(f\"{r}.{pair[0]}:{pair[1]}\")",
      "targetCode": "names = input().split()\npts = list(map(int, input().split()))\nboard = dict(zip(names, pts))\nit = board.items()\ntop = sorted(it, key=lambda x: x[1], reverse=True)\nfor r, pair in enumerate(top, 1):\n    print(f\"{r}.{pair[0]}:{pair[1]}\")",
      "testCases": [
        {
          "id": 1,
          "input": "Kim Lee Park\n80 95 90",
          "expectedOutput": "1.Lee:95\n2.Park:90\n3.Kim:80"
        },
        {
          "id": 2,
          "input": "Ana Ben\n70 85",
          "expectedOutput": "1.Ben:85\n2.Ana:70"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "가변 인자로 받은 항목들이 모두 상품 클래스 인스턴스인지 확인해 맞으면 가격 합계, 아니면 0을 반환해보세요.",
      "prompt_en": "Fill in the blanks so check_cart accepts variadic items and sums prices only if every item is an Item.",
      "hint_ko": "매개변수 *xs로 가변 인자를 받고 all([isinstance(g, Item) for g in xs])가 거짓이면 0을 즉시 반환합니다.",
      "hint_en": "Receive variadic items via *xs and verify all([isinstance(g, Item) for g in xs]) before summing g.price.",
      "templateCode": "class Item:\n    def __init__(self, price):\n        self.price = price\ndef check_cart(§§§):\n    if not §§§([§§§§§§§§§§(g, Item) for g in xs]):\n        return 0\n    return sum([g.price for g in xs])\nprint(check_cart(Item(500), Item(1200)))\nprint(check_cart(Item(500), \"coupon\"))",
      "targetCode": "class Item:\n    def __init__(self, price):\n        self.price = price\ndef check_cart(*xs):\n    if not all([isinstance(g, Item) for g in xs]):\n        return 0\n    return sum([g.price for g in xs])\nprint(check_cart(Item(500), Item(1200)))\nprint(check_cart(Item(500), \"coupon\"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1700\n0"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "음수가 하나라도 포함되면 HasNegative를 출력해야 하는데 전부 음수일 때만 감지되는 논리 오류를 고쳐보세요.",
      "prompt_en": "Fix the quantifier logic bug so HasNegative prints whenever at least one number is negative.",
      "hint_ko": "전부 참인지 보는 all() 대신 하나라도 참인지 검사하는 any()를 사용해야 일부만 음수여도 감지됩니다.",
      "hint_en": "Replace all(...) with any(...) so a single negative number triggers HasNegative.",
      "templateCode": "try:\n    nums = list(map(int, input().split()))\n    if all([n < 0 for n in nums]):\n        print(\"HasNegative\")\n    else:\n        print(\"AllZeroOrPos\")\nexcept ValueError:\n    print(\"BadInput\")",
      "targetCode": "try:\n    nums = list(map(int, input().split()))\n    if any([n < 0 for n in nums]):\n        print(\"HasNegative\")\n    else:\n        print(\"AllZeroOrPos\")\nexcept ValueError:\n    print(\"BadInput\")",
      "testCases": [
        {
          "id": 1,
          "input": "10 -5 20",
          "expectedOutput": "HasNegative"
        },
        {
          "id": 2,
          "input": "0 8 15",
          "expectedOutput": "AllZeroOrPos"
        },
        {
          "id": 3,
          "input": "10 two 30",
          "expectedOutput": "BadInput"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "오름차순 정렬된 정수들을 역순으로 하이픈(-) 연결하려다 타입 오류(TypeError)가 난 줄을 고쳐 출력해보세요. (예: 12 3 25 -> 25-12-3)",
      "prompt_en": "Fix the TypeError when joining reversed sorted integers with hyphens (e.g., 12 3 25 -> 25-12-3).",
      "hint_ko": "join()은 문자열 시퀀스만 연결할 수 있으므로 reversed(nums)를 map(str, reversed(nums))로 감싸 문자열로 바꿔야 합니다.",
      "hint_en": "Convert each integer in reversed(nums) back to str using map(str, reversed(nums)) inside \"-\".join(...).",
      "templateCode": "nums = sorted(map(int, input().split()))\ntext = \"-\".join(reversed(nums))\nprint(text)",
      "targetCode": "nums = sorted(map(int, input().split()))\ntext = \"-\".join(map(str, reversed(nums)))\nprint(text)",
      "testCases": [
        {
          "id": 1,
          "input": "12 3 25",
          "expectedOutput": "25-12-3"
        },
        {
          "id": 2,
          "input": "8 100 40",
          "expectedOutput": "100-40-8"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "딕셔너리의 재고 수량이 가장 큰 항목을 찾아야 하는데 키 문자열만 순회해 엉뚱한 글자가 출력되는 버그를 고쳐보세요. (출력: cup:22)",
      "prompt_en": "Fix the dictionary iteration bug in max() so the item with the largest quantity prints as cup:22.",
      "hint_ko": "딕셔너리 자체(stock)를 넘기면 키 문자열만 순회하므로 (키, 값) 튜플을 꺼내는 stock.items()를 max()에 넘겨야 합니다.",
      "hint_en": "Pass stock.items() instead of stock so lambda x: x[1] compares values and returns (\"cup\", 22).",
      "templateCode": "stock = {\"pen\": 15, \"bag\": 4, \"cup\": 22}\ntop = max(stock, key=lambda x: x[1])\nprint(f\"{top[0]}:{top[1]}\")",
      "targetCode": "stock = {\"pen\": 15, \"bag\": 4, \"cup\": 22}\ntop = max(stock.items(), key=lambda x: x[1])\nprint(f\"{top[0]}:{top[1]}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "cup:22"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "함수 선언 아래에 한 줄을 추가하여 인자 -4, 5, -8로 avg_abs를 호출한 반환값을 출력해보세요. (출력: 5.67)",
      "prompt_en": "Add one line below avg_abs to call avg_abs(-4, 5, -8) and print its return value (5.67).",
      "hint_ko": "넷째 줄에 print(avg_abs(-4, 5, -8))을 작성하면 세 수의 절댓값 평균 5.67이 출력됩니다.",
      "hint_en": "Write print(avg_abs(-4, 5, -8)) on the fourth line.",
      "templateCode": "def avg_abs(*nums):\n    vals = [abs(n) for n in nums]\n    return round(sum(vals) / len(vals), 2)\n§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "def avg_abs(*nums):\n    vals = [abs(n) for n in nums]\n    return round(sum(vals) / len(vals), 2)\nprint(avg_abs(-4, 5, -8))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "5.67"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "혼합 리스트 raw 아래에 한 줄을 추가하여 실수(float) 타입 원소가 하나라도 있는지 검사한 결과를 출력해보세요.",
      "prompt_en": "Add one line below raw to print whether at least one float element exists in raw using any() and isinstance().",
      "hint_ko": "둘째 줄에 print(any([isinstance(x, float) for x in raw]))를 작성하면 3.5 덕분에 True가 출력됩니다.",
      "hint_en": "Write print(any([isinstance(x, float) for x in raw])) on the second line.",
      "templateCode": "raw = [15, \"skip\", -20, 3.5, None]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "raw = [15, \"skip\", -20, 3.5, None]\nprint(any([isinstance(x, float) for x in raw]))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 파이썬 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "Select the exact output of the following Python code.",
      "hint_ko": "reversed(b)는 [18, 25, 4]이므로 gaps는 [|10-18|, |20-25|, |30-4|] = [8, 5, 26], 번호 1,2,3을 곱하면 [8, 10, 78]입니다.",
      "hint_en": "reversed(b) yields 18, 25, 4 -> gaps = [8, 5, 26]; multiplying by 1-based indices 1, 2, 3 gives [8, 10, 78].",
      "targetCode": "a = [10, 20, 30]\nb = [4, 25, 18]\ngaps = [abs(x - y) for x, y in zip(a, reversed(b))]\nres = [i * g for i, g in enumerate(gaps, 1)]\nprint(res)",
      "choices": [
        "[8, 10, 78]",
        "[6, 10, 36]",
        "[8, 5, 26]",
        "[0, 5, 52]"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[8, 10, 78]"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 파이썬 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "Select the exact output of the following Python code.",
      "hint_ko": "정수만 추린 [-7, 3, -2, 5]를 절댓값 기준으로 정렬하면 [-2, 3, 5, -7]이므로 첫 값은 -2이고, 모두 0이 아니므로 True입니다.",
      "hint_en": "Filtering ints gives [-7, 3, -2, 5]; sorting by abs(n) puts -2 first, and all are non-zero (True) -> (-2, True).",
      "targetCode": "def pick(*xs):\n    nums = [x for x in xs if isinstance(x, int)]\n    s = sorted(nums, key=lambda n: abs(n))\n    return s[0], all([n != 0 for n in nums])\nprint(pick(\"skip\", -7, 3, -2, 5))",
      "choices": [
        "(-2, True)",
        "(2, True)",
        "(-7, True)",
        "(-2, False)"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "(-2, True)"
        }
      ]
    }
  ]
};
