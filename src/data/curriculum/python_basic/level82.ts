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
  "unlockedBlocks": [],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 두 정수 리스트를 나란히 짝지어 각 차이의 절댓값 중 최댓값을 출력하세요.",
      "prompt_en": "[Fill Blank] Fill in both blanks to pair two integer lists, take each absolute difference, and print the max.",
      "hint_ko": "두 정수의 부호 없는 차이 크기를 구하는 3글자 함수와, 두 리스트를 나란히 묶는 3글자 병렬 순회 함수를 채우세요.",
      "hint_en": "Fill in the 3-letter built-in for absolute magnitude and the 3-letter parallel-pairing built-in.",
      "templateCode": "a = list(map(int, input().split()))\nb = list(map(int, input().split()))\nerrs = [§§§(x - y) for x, y in §§§(a, b)]\nprint(max(errs))",
      "targetCode": "a = list(map(int, input().split()))\nb = list(map(int, input().split()))\nerrs = [abs(x - y) for x, y in zip(a, b)]\nprint(max(errs))",
      "testCases": [
        {
          "id": 1,
          "input": "15 32 50\n12 38 49",
          "expectedOutput": "6"
        },
        {
          "id": 2,
          "input": "10 2\n8 5",
          "expectedOutput": "3"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 점수 내림차순으로 정렬한 뒤 1위부터 번호표를 붙여 출력하세요.",
      "prompt_en": "[Fill Blank] Fill in lambda and enumerate to sort descending by score and print 1-based rankings.",
      "hint_ko": "두 번째 요소를 정렬 기준으로 삼는 6글자 익명 함수 키워드와 1번부터 번호를 붙이는 9글자 열거 함수를 채우세요.",
      "hint_en": "Use the 6-letter inline function keyword for sorting and the 9-letter 1-based numbering iterator.",
      "templateCode": "names = input().split()\npts = list(map(int, input().split()))\nboard = dict(zip(names, pts))\nit = board.items()\ntop = sorted(it, key=§§§§§§ x: x[1], reverse=True)\nfor r, pair in §§§§§§§§§(top, 1):\n    print(f\"{r}.{pair[0]}:{pair[1]}\")",
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
      "prompt_ko": "[빈칸 채우기] 가변 인자로 받은 항목들이 모두 Item 인스턴스인지 확인해 맞으면 가격 합계, 아니면 0을 반환하세요.",
      "prompt_en": "[Fill Blank] Fill in all and isinstance so check_cart sums prices only if every item is an Item.",
      "hint_ko": "전체 참 여부를 판별하는 3글자 함수와 클래스 인스턴스인지 확인하는 10글자 함수를 조합하세요.",
      "hint_en": "Combine the 3-letter universal quantifier built-in with the 10-letter runtime class-checking built-in.",
      "templateCode": "class Item:\n    def __init__(self, price):\n        self.price = price\ndef check_cart(*xs):\n    if not §§§([§§§§§§§§§§(g, Item) for g in xs]):\n        return 0\n    return sum([g.price for g in xs])\nprint(check_cart(Item(500), Item(1200)))\nprint(check_cart(Item(500), \"coupon\"))",
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
      "prompt_ko": "[틀린 곳 수정] 음수가 하나라도 있으면 HasNegative를 출력해야 하는데 전부 음수일 때만 감지되는 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the quantifier logic bug so HasNegative prints whenever at least one number is negative.",
      "hint_ko": "단 하나라도 조건을 만족하면 참이 되는 부분 논리 검사 함수 any()로 바꾸세요.",
      "hint_en": "Switch from all() to any() so it triggers when at least one number is negative.",
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
      "prompt_ko": "[틀린 곳 수정] 정렬된 정수들을 역순으로 하이픈(-) 연결하려다 map 변환 타입이 잘못된 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the conversion type inside map() when joining reversed sorted integers with hyphens.",
      "hint_ko": "문자열 결합 메서드 .join()에 전달하려면 정수(int)가 아니라 문자열(str)로 일괄 변환해야 합니다.",
      "hint_en": "Change map(int, reversed(nums)) to map(str, reversed(nums)) before joining.",
      "templateCode": "nums = sorted(map(int, input().split()))\ntext = \"-\".join(map(int, reversed(nums)))\nprint(text)",
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
      "prompt_ko": "[틀린 곳 수정] 재고 수량(값)이 가장 큰 항목을 찾아야 하는데 상품명(키) 인덱스를 비교하는 버그를 고쳐보세요. (출력: cup:22)",
      "prompt_en": "[Fix Bug] Fix the tuple index in key=lambda x: ... so max() compares the stock count (index 1).",
      "hint_ko": "(상품명, 수량) 튜플에서 수량은 0번이 아니라 1번 인덱스(x[1])입니다.",
      "hint_en": "In each (key, value) tuple from .items(), the quantity is at x[1], not x[0].",
      "templateCode": "stock = {\"pen\": 15, \"bag\": 4, \"cup\": 22}\ntop = max(stock.items(), key=lambda x: x[0])\nprint(f\"{top[0]}:{top[1]}\")",
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
      "prompt_ko": "[한 줄 완성] 절댓값 리스트 vals의 평균을 소수 둘째 자리까지 반올림해 반환하는 return 문을 완성하세요. (출력: 5.67)",
      "prompt_en": "[Complete Line] Write return round(sum(vals) / len(vals), 2) inside avg_abs.",
      "hint_ko": "return round(sum(vals) / len(vals), 2) 형태로 평균을 반올림해 반환하세요.",
      "hint_en": "Write return round(sum(vals) / len(vals), 2) inside the function.",
      "templateCode": "def avg_abs(*nums):\n    vals = [abs(n) for n in nums]\n    §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(avg_abs(-4, 5, -8))",
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
      "prompt_ko": "[한 줄 완성] 혼합 리스트 raw에 str 타입 원소가 하나라도 있는지 any()와 isinstance()로 검사해 res에 저장하세요.",
      "prompt_en": "[Complete Line] Assign any([isinstance(x, str) for x in raw]) to res.",
      "hint_ko": "res = any([isinstance(x, str) for x in raw]) 형태로 작성해보세요.",
      "hint_en": "Write res = any([isinstance(x, str) for x in raw]).",
      "templateCode": "raw = [15, \"skip\", -20, 3, None]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(res)",
      "targetCode": "raw = [15, \"skip\", -20, 3, None]\nres = any([isinstance(x, str) for x in raw])\nprint(res)",
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
      "prompt_ko": "[출력 결과 예측] 다음 파이썬 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following Python code.",
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
      "prompt_ko": "[출력 결과 예측] 다음 파이썬 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following Python code.",
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
