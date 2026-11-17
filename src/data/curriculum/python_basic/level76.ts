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
  "unlockedBlocks": [],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 맨 앞에 20을 끼워 넣고 [40, 10]을 이어 붙인 뒤 오름차순 사본을 출력하도록 두 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the methods to insert 20 at index 0 and extend with [40, 10].",
      "hint_ko": "특정 인덱스 자리에 요소를 끼워 넣는 6글자 메서드와 다른 리스트의 원소들을 풀어 이어 붙이는 6글자 메서드를 채우세요.",
      "hint_en": "Use the 6-letter list method for inserting at an index and the 6-letter method for unpacking and extending a list.",
      "templateCode": "q = [30, 10]\nq.§§§§§§(0, 20)\nq.§§§§§§([40, 10])\nq.remove(10)\nprint(sorted(q))",
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
      "prompt_ko": "[빈칸 채우기] 딕셔너리 값을 병합 갱신하고 없는 키 \"atk\"를 기본값 0으로 안전 조회하도록 두 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the dictionary methods to merge updates and safely look up \"atk\" with default 0.",
      "hint_ko": "딕셔너리를 병합 갱신하는 6글자 메서드와 키가 없을 때 기본값을 돌려주는 3글자 안전 조회 메서드를 채우세요.",
      "hint_en": "Use the 6-letter dictionary merge method and the 3-letter safe fallback lookup method.",
      "templateCode": "bag = dict([(\"hp\", 40), (\"mp\", 20)])\nbag.§§§§§§({\"hp\": 70})\npts = sum(bag.values())\nrank = \"High\" if pts >= 80 else \"Low\"\nprint(bag.§§§(\"atk\", 0), rank)",
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
      "prompt_ko": "[빈칸 채우기] 집합 a에서 \"py\"를 안전 삭제한 뒤 b와의 교집합을 정렬해 대문자 리스트로 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the safe-remove set method and intersection operator.",
      "hint_ko": "원소가 없어도 오류를 내지 않는 7글자 집합 삭제 메서드와 양쪽 모두에 속한 원소를 구하는 교집합 연산자를 채우세요.",
      "hint_en": "Use the 7-letter error-free set removal method and the operator yielding shared set elements.",
      "templateCode": "a = {\"py\", \"js\", \"go\", \"sql\"}\nb = {\"go\", \"py\", \"c\"}\na.§§§§§§§(\"py\")\ncommon = sorted(a § b)\nloud = [w.upper() for w in common]\nprint(loud)",
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
      "prompt_ko": "[틀린 곳 수정] 내림차순 정렬된 리스트에서 최고점 대신 최저점 인덱스를 반환하는 버그를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the index in best_score so it returns the highest score from the descending-sorted list.",
      "hint_ko": "reverse=True로 내림차순 정렬하면 가장 큰 값은 맨 앞인 0번 인덱스에 위치합니다.",
      "hint_en": "When sorted with reverse=True, the highest score is at index 0, not index 2.",
      "templateCode": "def best_score(scores):\n    ordered = sorted(scores, reverse=True)\n    return ordered[2]\n\nraw = [70, 95, 80]\nprint(best_score(raw), raw[0])",
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
      "prompt_ko": "[틀린 곳 수정] 2차원 리스트에서 행 합계가 10 이상인 값만 추리려다 컴프리헨션 문법 오류가 난 곳을 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the SyntaxError in the list comprehension filtering 2D row sums >= 10.",
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
      "prompt_ko": "[틀린 곳 수정] Cart 클래스에서 새 상품을 담을 때 기본값이 잘못 설정되어 수량이 1 더 많아지는 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the default fallback value in self.bag.get(k, ...) so new items start from 0 before adding 1.",
      "hint_ko": "처음 담는 상품은 이전 수량이 0개여야 하므로 .get(k, 0)으로 조회한 뒤 1을 더해야 합니다.",
      "hint_en": "A brand-new item starts with a previous count of 0, so .get(k, 0) + 1 gives 1 on the first call.",
      "templateCode": "class Cart:\n    def __init__(self):\n        self.bag = {}\n\n    def add(self, k):\n        self.bag[k] = self.bag.get(k, 1) + 1\n\nc = Cart()\nc.add(\"apple\")\nc.add(\"apple\")\nprint(c.bag[\"apple\"])",
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
      "prompt_ko": "[한 줄 완성] nums의 음수를 0으로 바꾼 리스트 컴프리헨션을 clean에 저장하세요.",
      "prompt_en": "[Complete Line] Assign to clean a list comprehension replacing negatives in nums with 0.",
      "hint_ko": "clean = [n if n > 0 else 0 for n in nums] 형태로 삼항 조건 표현식 컴프리헨션을 작성해보세요.",
      "hint_en": "Write clean = [n if n > 0 else 0 for n in nums] using a leading ternary expression.",
      "templateCode": "nums = [int(s) for s in input().split()]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(sum(clean), clean.count(0))",
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
      "prompt_ko": "[한 줄 완성] len(diff) > 0이면 diff, 아니면 \"none\"을 선택하는 삼항 표현식을 ans에 저장하세요.",
      "prompt_en": "[Complete Line] Assign diff if len(diff) > 0 else \"none\" to ans.",
      "hint_ko": "ans = diff if len(diff) > 0 else \"none\" 형태로 조건 표현식을 작성해보세요.",
      "hint_en": "Write ans = diff if len(diff) > 0 else \"none\" to select the list or fallback string.",
      "templateCode": "s1 = set(input().split())\ns2 = set(input().split())\ndiff = sorted(s1 - s2)\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(ans)",
      "targetCode": "s1 = set(input().split())\ns2 = set(input().split())\ndiff = sorted(s1 - s2)\nans = diff if len(diff) > 0 else \"none\"\nprint(ans)",
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
      "prompt_ko": "[출력 결과 예측] 2차원 리스트와 예외 처리를 결합한 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following 2D list and try-except code.",
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
      "prompt_ko": "[출력 결과 예측] 딕셔너리·집합 교집합·조건 컴프리헨션을 결합한 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following dictionary, set intersection, and comprehension code.",
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
