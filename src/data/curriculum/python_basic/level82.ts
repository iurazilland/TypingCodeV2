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
      "hint_ko": "두 실수의 부호 없는 차이 크기를 구하는 수치 내장 함수와, 두 리스트의 같은 위치 원소를 나란히 묶어 꺼내는 병렬 순회 함수를 각각 채우세요.",
      "hint_en": "Fill in the numeric built-in for non-negative magnitude and the parallel-pairing built-in that steps through both lists together.",
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
      "hint_ko": "두 리스트를 나란히 짝짓는 병렬 묶기 함수, 두 번째 요소를 기준으로 삼는 익명 함수 키워드, 1번부터 번호와 원소를 함께 꺼내는 열거 함수를 차례로 떠올려보세요.",
      "hint_en": "Recall in order: the parallel-pairing function for dictionary creation, the inline function keyword for custom sorting, and the 1-based numbering iterator.",
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
      "hint_ko": "아랫줄에서 순회하는 이름으로 여러 위치 인자를 튜플로 묶어 받은 뒤, 전체 참 여부를 판별하는 함수와 클래스 인스턴스 확인 함수를 조합하세요.",
      "hint_en": "Pack arbitrary positional arguments into the tuple variable used below, then combine the universal truth-check built-in with the runtime class-checking built-in.",
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
      "hint_ko": "현재 조건문은 모든 원소가 음수일 때만 참이 되는 전체 논리 검사 함수를 쓰고 있습니다. 단 하나라도 조건을 만족하면 참이 되는 부분 논리 검사 함수로 바꾸세요.",
      "hint_en": "The current check requires every number to be negative; switch from the universal quantifier to the existential quantifier that triggers when at least one matches.",
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
      "hint_ko": "문자열 결합 메서드는 정수 시퀀스를 직접 이어 붙일 수 없습니다. 역순 반복자의 각 숫자를 문자열 자료형으로 일괄 변환해 전달하세요.",
      "hint_en": "String joining fails on raw integer elements; apply batch string conversion to the reverse iterator before joining.",
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
      "hint_ko": "딕셔너리 자체를 바로 넘기면 키 문자열들만 순회해 두 번째 글자를 비교하게 됩니다. 키와 값 쌍을 튜플로 꺼내는 뷰 메서드를 넘겨보세요.",
      "hint_en": "Iterating a dictionary directly yields only its key strings; pass the dictionary method that exposes key-value pair tuples instead.",
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
      "hint_ko": "위에서 가변 인자로 정의된 함수를 세 숫자 인자와 함께 호출하고, 그 반환값을 출력문에 감싸 작성해보세요.",
      "hint_en": "Call the variadic function defined above with the three requested numbers and pass its return value to the output call.",
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
      "hint_ko": "각 원소가 실수 자료형인지 타입 확인 함수로 검사하는 리스트 컴프리헨션을 만들고, 하나라도 참인지 판별하는 함수로 감싸 출력하세요.",
      "hint_en": "Build a comprehension testing each element against the real-number type, wrap that list with the existential quantifier built-in, and display the result.",
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
      "hint_ko": "두 번째 리스트가 뒤에서부터 역순으로 꺼내져 첫 번째 리스트와 짝지어진 뒤, 각 거리 값에 1부터 시작하는 순서 번호가 곱해지는 과정을 따라가 보세요.",
      "hint_en": "First pair the first list with the backward order of the second list to get each positive difference, then multiply each difference by its 1-based rank.",
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
      "hint_ko": "문자열을 걸러낸 정수들 가운데 0으로부터의 크기가 가장 작은 원소(원래 부호는 그대로 유지됨!)를 찾고, 모든 정수가 0이 아닌지 함께 확인해보세요.",
      "hint_en": "Filter out non-integers, see which remaining integer has the smallest magnitude (retaining its original sign), and check whether every integer is non-zero.",
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