import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_76: PracticeRound = {
  "id": "py-basic-r76",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 76,
  "title_ko": "76레벨: 컬렉션 부가 기능 & 컴프리헨션 누적 복습 종합",
  "title_en": "Level 76: Section 12 Comprehensive Spiral Review",
  "description_ko": "리스트·딕셔너리·집합 확장 메서드, sorted(), 2차원 격자, 삼항 표현식, 리스트 컴프리헨션과 함수·예외·클래스를 종합 점검합니다.",
  "description_en": "Comprehensive synthesis of extended collection methods, sorted(), 2D lists, ternary expressions, and list comprehensions.",
  "totalQuestions": 10,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "method",
    "type",
    "math",
    "sorted",
    "if",
    "for_range",
    "for_in",
    "range",
    "while",
    "try",
    "def",
    "class"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "맨 앞에 20을 끼워 넣고 [40, 10]을 이어 붙인 뒤 첫 10을 지우고, 오름차순 사본을 출력하도록 세 빈칸을 채워보세요.",
      "prompt_en": "Fill in the methods to insert 20 at index 0, extend with [40, 10], and print a sorted copy of q.",
      "hint_ko": "특정 위치 삽입은 .insert(0, 20), 리스트 병합 확장은 .extend([40, 10]), 사본 정렬은 sorted(q)입니다.",
      "hint_en": "Use .insert(0, 20), .extend([40, 10]), and sorted(q).",
      "templateCode": "q = [30, 10]\nq.§§§§§§(0, 20)\nq.§§§§§§([40, 10])\nq.remove(10)\nprint(§§§§§§(q))",
      "targetCode": "q = [30, 10]\nq.insert(0, 20)\nq.extend([40, 10])\nq.remove(10)\nprint(sorted(q))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 20, 30, 40]"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "딕셔너리 값을 병합해 총합이 80 이상이면 \"High\", 아니면 \"Low\"를 구하고 없는 키 기본값 0과 함께 출력해보세요.",
      "prompt_en": "Fill in the dictionary methods and conditional keyword to merge, sum values, classify, and safely look up \"atk\".",
      "hint_ko": "병합은 .update(), 값 모음은 .values(), 조건 표현식 키워드는 if, 기본값 안전 조회는 .get(\"atk\", 0)입니다.",
      "hint_en": "Use .update(), .values(), if, and .get(\"atk\", 0).",
      "templateCode": "bag = dict([(\"hp\", 40), (\"mp\", 20)])\nbag.§§§§§§({\"hp\": 70})\npts = sum(bag.§§§§§§())\nrank = \"High\" §§ pts >= 80 else \"Low\"\nprint(bag.§§§(\"atk\", 0), rank)",
      "targetCode": "bag = dict([(\"hp\", 40), (\"mp\", 20)])\nbag.update({\"hp\": 70})\npts = sum(bag.values())\nrank = \"High\" if pts >= 80 else \"Low\"\nprint(bag.get(\"atk\", 0), rank)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "0 High"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "집합 a에서 \"py\"를 안전 삭제한 뒤 b와의 공통 원소를 정렬해 모두 대문자 리스트로 만들도록 세 빈칸을 채워보세요.",
      "prompt_en": "Fill in the safe-remove method, intersection operator, and comprehension loop keyword.",
      "hint_ko": "집합 안전 삭제는 .discard(\"py\"), 교집합은 &, 리스트 컴프리헨션 반복 키워드는 for입니다.",
      "hint_en": "Use .discard(\"py\"), & for intersection, and for in the list comprehension.",
      "templateCode": "a = {\"py\", \"js\", \"go\", \"sql\"}\nb = {\"go\", \"py\", \"c\"}\na.§§§§§§§(\"py\")\ncommon = sorted(a § b)\nloud = [w.upper() §§§ w in common]\nprint(loud)",
      "targetCode": "a = {\"py\", \"js\", \"go\", \"sql\"}\nb = {\"go\", \"py\", \"c\"}\na.discard(\"py\")\ncommon = sorted(a & b)\nloud = [w.upper() for w in common]\nprint(loud)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['GO']"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "제자리 정렬 메서드의 반환값을 인덱싱해 TypeError가 나고 원본까지 바뀌는 버그를 고쳐 최고점과 원본 첫 값을 출력해보세요.",
      "prompt_en": "Fix best_score so it sorts a copy without mutating raw or indexing None.",
      "hint_ko": "scores.sort(...)는 None을 반환합니다. 원본을 보존하고 정렬된 리스트를 얻으려면 sorted(scores, reverse=True)를 쓰세요.",
      "hint_en": "Replace scores.sort(reverse=True) with sorted(scores, reverse=True).",
      "templateCode": "def best_score(scores):\n    ordered = scores.sort(reverse=True)\n    return ordered[0]\n\nraw = [70, 95, 80]\nprint(best_score(raw), raw[0])",
      "targetCode": "def best_score(scores):\n    ordered = sorted(scores, reverse=True)\n    return ordered[0]\n\nraw = [70, 95, 80]\nprint(best_score(raw), raw[0])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "95 70"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "2차원 리스트에서 행 합계가 10 이상인 값만 추리려다 컴프리헨션 문법 오류가 난 부분을 올바르게 수정해보세요.",
      "prompt_en": "Fix the SyntaxError in the list comprehension filtering 2D row sums >= 10.",
      "hint_ko": "else 없이 조건을 만족하는 행만 필터링할 때는 조건절을 for r in grid 뒤쪽에 적어야 합니다.",
      "hint_en": "Place the filter clause after for r in grid: [sum(r) for r in grid if sum(r) >= 10].",
      "templateCode": "grid = [[2, 3], [6, 8], [1, 4], [5, 5]]\nbig = [sum(r) if sum(r) >= 10 for r in grid]\nprint(big)",
      "targetCode": "grid = [[2, 3], [6, 8], [1, 4], [5, 5]]\nbig = [sum(r) for r in grid if sum(r) >= 10]\nprint(big)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[14, 10]"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "Cart 클래스에서 새 상품을 처음 담을 때 KeyError가 발생하는 버그를 고쳐 수량이 정상 누적되도록 수정해보세요.",
      "prompt_en": "Fix Cart.add so adding a new item key does not raise KeyError.",
      "hint_ko": "self.bag[k]로 바로 읽는 대신 self.bag.get(k, 0)으로 기본값 0을 받아 1을 더하세요.",
      "hint_en": "Use self.bag.get(k, 0) + 1 so missing item keys start from 0.",
      "templateCode": "class Cart:\n    def __init__(self):\n        self.bag = {}\n\n    def add(self, k):\n        self.bag[k] = self.bag[k] + 1\n\nc = Cart()\nc.add(\"apple\")\nc.add(\"apple\")\nprint(c.bag[\"apple\"])",
      "targetCode": "class Cart:\n    def __init__(self):\n        self.bag = {}\n\n    def add(self, k):\n        self.bag[k] = self.bag.get(k, 0) + 1\n\nc = Cart()\nc.add(\"apple\")\nc.add(\"apple\")\nprint(c.bag[\"apple\"])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "음수를 0으로 바꾼 리스트를 만든 코드 아래에 한 줄을 추가하여 리스트의 총합과 0의 개수를 공백으로 출력해보세요.",
      "prompt_en": "Add one line below to print the sum of clean and how many 0s are in clean.",
      "hint_ko": "마지막 줄에 print(sum(clean), clean.count(0))을 작성하세요.",
      "hint_en": "Write print(sum(clean), clean.count(0)) on the last line.",
      "templateCode": "nums = [int(s) for s in input().split()]\nclean = [n if n > 0 else 0 for n in nums]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "nums = [int(s) for s in input().split()]\nclean = [n if n > 0 else 0 for n in nums]\nprint(sum(clean), clean.count(0))",
      "testCases": [
        {
          "id": 1,
          "input": "5 -2 8 -1",
          "expectedOutput": "13 2"
        },
        {
          "id": 2,
          "input": "-3 4 0",
          "expectedOutput": "4 2"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "차집합을 정렬한 코드 아래에 한 줄을 추가하여 원소가 있으면 diff를, 없으면 \"none\"을 조건 표현식으로 출력해보세요.",
      "prompt_en": "Add one line below to print diff if non-empty else \"none\".",
      "hint_ko": "마지막 줄에 print(diff if len(diff) > 0 else \"none\")을 작성하세요.",
      "hint_en": "Write print(diff if len(diff) > 0 else \"none\") on the last line.",
      "templateCode": "s1 = set(input().split())\ns2 = set(input().split())\ndiff = sorted(s1 - s2)\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "s1 = set(input().split())\ns2 = set(input().split())\ndiff = sorted(s1 - s2)\nprint(diff if len(diff) > 0 else \"none\")",
      "testCases": [
        {
          "id": 1,
          "input": "a b c\nb",
          "expectedOutput": "['a', 'c']"
        },
        {
          "id": 2,
          "input": "x y\nx y z",
          "expectedOutput": "none"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "2차원 리스트와 예외 처리를 결합한 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "Select the exact output of the following 2D list and try-except code.",
      "hint_ko": "첫째·둘째 행에서 20의 인덱스는 모두 1이고 셋째 행은 ValueError가 나 -1이 추가되므로 [1, 1, -1]과 1의 개수 2가 출력됩니다.",
      "hint_en": "20 is at index 1 in rows 0 and 1, and absent in row 2 (-1), yielding [1, 1, -1] and count 2.",
      "targetCode": "grid = [[10, 20], [30, 20], [40, 50]]\nres = []\nfor row in grid:\n    try:\n        res.append(row.index(20))\n    except ValueError:\n        res.append(-1)\nprint(res, res.count(1))",
      "choices": [
        "[1, 1, -1] 2",
        "[1, 1, 0] 2",
        "[1, 1] 2",
        "[2, 2, -1] 0"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[1, 1, -1] 2"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "딕셔너리·집합 교집합·조건 컴프리헨션을 결합한 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "Select the exact output of the following dictionary, set intersection, and comprehension code.",
      "hint_ko": "공통 키는 ['b', 'c']이고, b(80)는 60 이상이라 80, c(30)는 0이 되어 ['b', 'c'] 80이 출력됩니다.",
      "hint_en": "Common keys are ['b', 'c']; pts['b'] is 80 (>=60) and pts['c'] becomes 0, printing ['b', 'c'] 80.",
      "targetCode": "pts = {\"a\": 50, \"b\": 80, \"c\": 30, \"d\": 90}\nvip = {\"b\", \"c\", \"e\"}\nks = sorted(set(pts.keys()) & vip)\nres = [pts[k] if pts[k] >= 60 else 0 for k in ks]\nprint(ks, sum(res))",
      "choices": [
        "['b', 'c'] 80",
        "['b', 'c'] 110",
        "['b', 'c', 'e'] 80",
        "['b'] 80"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['b', 'c'] 80"
        }
      ]
    }
  ]
};
