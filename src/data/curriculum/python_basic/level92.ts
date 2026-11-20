import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_92: PracticeRound = {
  "id": "py-basic-r92",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 92,
  "title_ko": "92레벨: 컬렉션 심화 & 컴프리헨션 누적 복습 종합",
  "title_en": "Level 92: Section 11 Comprehensive Spiral Review",
  "description_ko": "리스트·딕셔너리·집합 심화 메서드, 사본 복사와 정렬, 2차원 리스트, 삼항 표현식, 리스트·딕셔너리 컴프리헨션을 종합 점검합니다.",
  "description_en": "Comprehensive review of extended collection methods, copying, sorting, 2D lists, ternary expressions, and comprehensions.",
  "totalQuestions": 10,
  "unlockedBlocks": [],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 맨 앞에 20을 끼워 넣고 [40, 10]을 이어 붙인 뒤 오름차순 사본을 출력하도록 세 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the index insertion method, list extension method, and copy-sorting function.",
      "hint_ko": "지정 위치에 삽입하는 메서드, 리스트 원소들을 풀어 이어 붙이는 메서드, 그리고 사본 정렬 내장 함수를 확인하세요.",
      "hint_en": "Check the insert method, extend method, and sorted function.",
      "templateCode": "q = [30, 10]\nq.§§§§§§§(0, 20)\nq.§§§§§§§([40, 10])\nq.remove(10)\nprint(§§§§§§§(q))",
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
      "prompt_ko": "[빈칸 채우기] 딕셔너리를 병합 갱신하고 삼항 표현식으로 등급을 판정한 뒤 없는 키를 기본값 0으로 조회해보세요.",
      "prompt_en": "[Fill Blank] Complete the dictionary merge method, ternary fallback keyword, and safe lookup method.",
      "hint_ko": "딕셔너리 병합 메서드, 한 줄 조건식의 거짓 분기 키워드, 그리고 기본값 안전 조회 메서드를 차례로 확인하세요.",
      "hint_en": "Check the update method, else keyword, and get method.",
      "templateCode": "bag = {\"hp\": 40, \"mp\": 20}\nbag.§§§§§§§({\"hp\": 70})\npts = sum(bag.values())\nrank = \"High\" if pts >= 80 §§§§§ \"Low\"\nprint(bag.§§§§(\"atk\", 0), rank)",
      "targetCode": "bag = {\"hp\": 40, \"mp\": 20}\nbag.update({\"hp\": 70})\npts = sum(bag.values())\nrank = \"High\" if pts >= 80 else \"Low\"\nprint(bag.get(\"atk\", 0), rank)",
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
      "prompt_ko": "[빈칸 채우기] 집합 a에서 원소를 안전 삭제한 뒤 b와의 교집합을 정렬하고, 각 단어의 길이를 컴프리헨션으로 구해보세요.",
      "prompt_en": "[Fill Blank] Complete the safe set removal method, intersection operator, and comprehension loop keyword.",
      "hint_ko": "없어도 에러가 안 나는 집합 삭제 메서드, 공통 원소 교집합 연산자, 그리고 컴프리헨션 반복 키워드를 확인하세요.",
      "hint_en": "Check the discard method, the & intersection operator, and the for keyword.",
      "templateCode": "a = {\"py\", \"js\", \"go\", \"sql\"}\nb = {\"go\", \"py\", \"c\"}\na.§§§§§§§§(\"py\")\ncommon = sorted(a §§ b)\nlens = [len(w) §§§§ w in common]\nprint(common, lens)",
      "targetCode": "a = {\"py\", \"js\", \"go\", \"sql\"}\nb = {\"go\", \"py\", \"c\"}\na.discard(\"py\")\ncommon = sorted(a & b)\nlens = [len(w) for w in common]\nprint(common, lens)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['go'] [2]"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 내림차순 정렬된 리스트에서 가장 큰 최고점 대신 세 번째 값을 반환하는 인덱스 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the index in best_score so it returns the highest score from the descending-sorted list.",
      "hint_ko": "reverse=True로 내림차순 정렬하면 가장 큰 값은 맨 앞인 0번 인덱스에 위치합니다.",
      "hint_en": "When sorted with reverse=True, the highest value sits at index 0.",
      "templateCode": "def best_score(scores):\n    ordered = sorted(scores, reverse=True)\n    return ordered[2]\nraw = [70, 95, 80]\nprint(best_score(raw), raw[0])",
      "targetCode": "def best_score(scores):\n    ordered = sorted(scores, reverse=True)\n    return ordered[0]\nraw = [70, 95, 80]\nprint(best_score(raw), raw[0])",
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
      "prompt_ko": "[틀린 곳 수정] 2차원 리스트에서 행 합계가 10 이상인 값만 추리려다 필터 if 절 위치가 잘못되어 난 문법 오류를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the SyntaxError in the list comprehension filtering 2D row sums >= 10.",
      "hint_ko": "else 없이 조건을 만족하는 행만 걸러내는 단독 if 절은 for 절 뒤쪽 끝에 와야 합니다.",
      "hint_en": "Place the filtering if sum(r) >= 10 clause after for r in grid.",
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
      "prompt_ko": "[틀린 곳 수정] 장바구니 클래스에서 새 상품을 담을 때 기본값이 잘못 설정되어 수량이 1 더 많아지는 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the default fallback value in self.bag.get() so new items start from 0 before adding 1.",
      "hint_ko": "처음 담는 상품은 이전 수량이 0개여야 거기에 1을 더했을 때 정확히 1개가 됩니다.",
      "hint_en": "Use 0 instead of 1 as the default value in self.bag.get(k, 0) + 1.",
      "templateCode": "class Cart:\n    def __init__(self):\n        self.bag = {}\n    def add(self, k):\n        self.bag[k] = self.bag.get(k, 1) + 1\nc = Cart()\nc.add(\"apple\")\nc.add(\"apple\")\nprint(c.bag[\"apple\"])",
      "targetCode": "class Cart:\n    def __init__(self):\n        self.bag = {}\n    def add(self, k):\n        self.bag[k] = self.bag.get(k, 0) + 1\nc = Cart()\nc.add(\"apple\")\nc.add(\"apple\")\nprint(c.bag[\"apple\"])",
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
      "prompt_ko": "[한 줄 완성] 리스트 nums의 음수를 0으로 바꾼 삼항 리스트 컴프리헨션을 변수 clean에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Assign to clean a list comprehension replacing negatives in nums with 0.",
      "hint_ko": "clean = [n if n > 0 else 0 for n in nums] 형태로 앞쪽 삼항 표현식을 사용해 작성하세요.",
      "hint_en": "Write clean = [n if n > 0 else 0 for n in nums].",
      "templateCode": "nums = [int(s) for s in input().split()]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(sum(clean), clean.count(0))",
      "targetCode": "nums = [int(s) for s in input().split()]\nclean = [n if n > 0 else 0 for n in nums]\nprint(sum(clean), clean.count(0))",
      "testCases": [
        {
          "id": 1,
          "input": "5 -2 8 -1",
          "expectedOutput": "13 2"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] len(diff) > 0이면 diff를, 아니면 \"none\"을 선택하는 삼항 표현식을 ans에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Assign diff if len(diff) > 0 else \"none\" to variable ans.",
      "hint_ko": "ans = diff if len(diff) > 0 else \"none\" 형태로 조건 표현식을 작성하세요.",
      "hint_en": "Write ans = diff if len(diff) > 0 else \"none\".",
      "templateCode": "s1 = set(input().split())\ns2 = set(input().split())\ndiff = sorted(s1 - s2)\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(ans)",
      "targetCode": "s1 = set(input().split())\ns2 = set(input().split())\ndiff = sorted(s1 - s2)\nans = diff if len(diff) > 0 else \"none\"\nprint(ans)",
      "testCases": [
        {
          "id": 1,
          "input": "a b c\nb",
          "expectedOutput": "['a', 'c']"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 사본 복사(.copy), 확장(.extend), 값 삭제(.remove)와 조건부 컴프리헨션이 결합된 코드의 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the output of the code combining .copy(), .extend(), .remove(), and a list comprehension.",
      "hint_ko": "b는 a의 사본이므로 b를 수정해도 원본 a의 길이는 그대로 3이며, b에서 첫 번째 10만 지워진 뒤 15 이상인 값들을 합산해보세요.",
      "hint_en": "a stays length 3; b becomes [20, 10, 25, 10], and summing items >= 15 in b adds 20 + 25.",
      "targetCode": "a = [10, 20, 10]\nb = a.copy()\nb.extend([25, 10])\nb.remove(10)\nhigh = [x for x in b if x >= 15]\nprint(len(a), sum(high), b.count(10))",
      "choices": [
        "3 45 2",
        "5 45 2",
        "3 45 1",
        "3 55 2"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 45 2"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 2차원 리스트 대각선 추출과 딕셔너리 컴프리헨션, 안전 조회(.get)를 결합한 코드의 출력 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the output of the code combining 2D diagonal comprehension, dict comprehension, and .get().",
      "hint_ko": "대각선 원소 [2, 4, 6]에 대해 키는 x, 값은 x * 10인 딕셔너리가 만들어지며 없는 키 5는 기본값 0을 반환합니다.",
      "hint_en": "diag is [2, 4, 6], so table maps {2: 20, 4: 40, 6: 60}; table[4] + table.get(5, 0) is 40 + 0.",
      "targetCode": "grid = [[2, 1, 0], [0, 4, 1], [1, 0, 6]]\ndiag = [grid[i][i] for i in range(len(grid))]\ntable = {x: x * 10 for x in diag}\nprint(diag, table[4] + table.get(5, 0))",
      "choices": [
        "[2, 4, 6] 40",
        "[2, 4, 6] 45",
        "[2, 1, 6] 40",
        "[2, 4, 6] 120"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[2, 4, 6] 40"
        }
      ]
    }
  ]
};
