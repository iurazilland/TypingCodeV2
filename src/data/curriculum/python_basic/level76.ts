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
      "hint_ko": "특정 인덱스 자리에 요소를 끼워 넣는 메서드, 다른 리스트의 원소들을 풀어 이어 붙이는 메서드, 원본을 보존한 정렬 사본을 반환하는 내장 함수를 차례로 떠올려보세요.",
      "hint_en": "Recall in order: the list method for placing an item at an index, the method for unpacking and merging a list, and the built-in function that returns an ordered copy.",
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
      "hint_ko": "딕셔너리 병합 갱신 메서드와 전체 값 목록 메서드로 합계를 구한 뒤, 한 줄 조건 표현식의 조건 키워드와 기본값 안전 조회 메서드를 차례로 적용하세요.",
      "hint_en": "Combine the dictionary merge method, the stored-data view method, the inline condition keyword, and the safe fallback lookup method.",
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
      "hint_ko": "원소가 없어도 오류를 내지 않는 집합 삭제 메서드, 양쪽 모두에 속한 원소를 구하는 집합 연산자, 리스트 컴프리헨션의 순회 키워드를 각각 채우세요.",
      "hint_en": "Use the error-free set removal method, the operator yielding shared set elements, and the loop keyword inside the list comprehension.",
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
      "hint_ko": "리스트의 제자리 정렬 메서드는 원본을 직접 변경하고 반환값이 없어 인덱싱할 수 없습니다. 원본을 보존한 채 정렬된 새 리스트를 돌려주는 내장 함수로 바꾸세요.",
      "hint_en": "In-place list sorting mutates the caller's list and returns nothing (which cannot be indexed); switch to the built-in function that returns a new ordered list.",
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
      "hint_ko": "대체값 분기 없이 조건을 만족하는 원소만 추려내는 필터 조건절은 컴프리헨션의 순회절 앞이 아니라 맨 뒤쪽에 와야 합니다.",
      "hint_en": "A filtering condition without an alternative branch belongs at the end of the comprehension after the loop clause, not before it.",
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
      "hint_ko": "처음 추가하는 상품은 아직 딕셔너리에 키가 없어 대괄호로 바로 읽으면 오류가 납니다. 키가 없을 때 기본값 0을 돌려주는 안전 조회 방식을 활용하세요.",
      "hint_en": "Reading a brand-new item key with square brackets fails; fetch the previous count with a safe lookup method that defaults to 0.",
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
      "prompt_ko": "음수를 0으로 바꾼 리스트를 만든 코드 아래에 한 줄을 추가하여 리스트의 총합과 0의 개수를 공백으로 출력해보세요. (터미널 입력: 5 -2 8 -1)",
      "prompt_en": "Add one line below to print the sum of clean and how many 0s are in clean. (Terminal input: 5 -2 8 -1)",
      "hint_ko": "보정된 리스트 전체의 합계를 구하는 내장 함수와 특정 값의 등장 횟수를 세는 리스트 메서드를 나란히 출력문에 전달하세요.",
      "hint_en": "Pass the total of the cleaned list (using the summation built-in) and the list method that tallies occurrences of zero together to the output call.",
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
      "prompt_ko": "차집합을 정렬한 코드 아래에 한 줄을 추가하여 원소가 있으면 diff를, 없으면 \"none\"을 조건 표현식으로 출력해보세요. (터미널 입력: 첫째 줄 a b c, 둘째 줄 b)",
      "prompt_en": "Add one line below to print diff if non-empty else \"none\". (Terminal input: line 1 a b c, line 2 b)",
      "hint_ko": "차집합 리스트가 비어 있지 않은지 조건으로 확인해 참이면 리스트를, 거짓이면 지정된 문자열을 선택하는 한 줄 조건 표현식을 출력하세요.",
      "hint_en": "Output an inline conditional expression that checks whether the difference list is non-empty, selecting the list itself or the fallback string.",
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
      "hint_ko": "각 행 리스트에서 찾는 값의 0번 기준 위치가 몇 번인지, 그리고 값이 없는 행에서는 예외 처리기가 어떤 값을 대신 추가하는지 확인한 뒤 등장 횟수를 세어보세요.",
      "hint_en": "Check the 0-based position of the target in each row (or what the exception block appends when missing), then count how many times 1 appears in the result.",
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
      "hint_ko": "먼저 두 집합에 모두 속한 공통 키만 추려 정렬한 뒤, 해당 키들의 점수가 기준 이상이면 원래 점수, 미만이면 0으로 바뀌어 합산되는 과정을 따라가 보세요.",
      "hint_en": "First determine the alphabetically ordered keys shared by both sets, then trace which of their scores meet the threshold and which become zero before summing.",
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