import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_107: PracticeRound = {
  "id": "py-basic-r107",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 107,
  "title_ko": "실용 내장 함수·모듈 & 함수 확장 누적 복습 종합",
  "title_en": "Section 13 Comprehensive Spiral Review",
  "description_ko": "섹션 13의 실용 내장 함수(abs, round, divmod, map, enumerate, zip, reversed, all, any, isinstance), *args/lambda, math 모듈을 종합 점검합니다.",
  "description_en": "Comprehensive review of Section 13 built-ins, *args/lambda sorting, the math module, and cumulative Sections 1-12.",
  "totalQuestions": 10,
  "unlockedBlocks": [],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 두 정수 리스트를 병렬로 짝지어 차이의 절댓값을 구한 뒤, 최댓값과 올림 평균을 출력해보세요.",
      "prompt_en": "[Fill Blank] Pair two integer lists in parallel, take each absolute difference, and print the max and ceiling mean.",
      "hint_ko": "절댓값 함수, 병렬 묶기 함수, 그리고 math 모듈의 올림 함수를 차례로 채워보세요.",
      "hint_en": "Supply the absolute value function, the parallel-pairing function, and the math ceiling function.",
      "targetCode": "import math\na = [15, 32, 50]\nb = [12, 39, 49]\nerrs = [abs(x - y) for x, y in zip(a, b)]\nprint(max(errs), math.ceil(sum(errs) / len(errs)))",
      "templateCode": "import math\na = [15, 32, 50]\nb = [12, 39, 49]\nerrs = [§§§§(x - y) for x, y in §§§§(a, b)]\nprint(max(errs), math.§§§§§(sum(errs) / len(errs)))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "7 4"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 이름과 점수를 사전으로 묶은 뒤 점수 내림차순으로 정렬해 1위부터 번호표를 붙여 출력해보세요.",
      "prompt_en": "[Fill Blank] Pair names and pts into a dictionary, sort descending by score, and print 1-based rankings.",
      "hint_ko": "병렬 묶기 함수, 익명 함수 키워드, 그리고 1번부터 번호를 붙이는 열거 함수를 채우세요.",
      "hint_en": "Fill in the parallel-pairing function, the inline function keyword, and the 1-based numbering iterator.",
      "targetCode": "names = input().split()\npts = list(map(int, input().split()))\nboard = dict(zip(names, pts))\ntop = sorted(board.items(), key=lambda x: x[1], reverse=True)\nfor r, pair in enumerate(top, 1):\n    print(f\"{r}.{pair[0]}:{pair[1]}\")",
      "templateCode": "names = input().split()\npts = list(map(int, input().split()))\nboard = dict(§§§§(names, pts))\ntop = sorted(board.items(), key=§§§§§§§ x: x[1], reverse=True)\nfor r, pair in §§§§§§§§§§(top, 1):\n    print(f\"{r}.{pair[0]}:{pair[1]}\")",
      "testCases": [
        {
          "id": 1,
          "input": "Kim Lee Park\n80 95 90",
          "expectedOutput": "1.Lee:95\n2.Park:90\n3.Kim:80"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 가변 인자로 받은 값들이 모두 정수인지 확인해 맞으면 10으로 나눈 몫·나머지를 반환하는 함수를 완성해보세요.",
      "prompt_en": "[Fill Blank] Check if every variadic argument is an integer, and if so return the quotient and remainder of their sum divided by 10.",
      "hint_ko": "전체 참 검사 함수, 자료형 확인 함수, 그리고 몫·나머지 동시 반환 함수를 차례로 채워보세요.",
      "hint_en": "Supply the universal quantifier, the type-checking function, and the quotient-remainder built-in.",
      "targetCode": "def check_sum(*xs):\n    if not all([isinstance(x, int) for x in xs]):\n        return (0, 0)\n    return divmod(sum(xs), 10)\n\nprint(check_sum(12, 15, 8))\nprint(check_sum(10, \"a\"))",
      "templateCode": "def check_sum(*xs):\n    if not §§§§([§§§§§§§§§§§(x, int) for x in xs]):\n        return (0, 0)\n    return §§§§§§§(sum(xs), 10)\n\nprint(check_sum(12, 15, 8))\nprint(check_sum(10, \"a\"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "(3, 5)\n(0, 0)"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 음수가 하나라도 있으면 WARN을 출력해야 하는데 전부 음수일 때만 감지되는 논리 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the quantifier bug so WARN prints whenever at least one number is negative.",
      "hint_ko": "하나라도 조건을 만족할 때 참이 되도록 전체 검사 함수를 부분 검사 함수로 바꾸세요.",
      "hint_en": "Replace the universal quantifier with the existential quantifier so it triggers on any negative number.",
      "templateCode": "nums = list(map(int, input().split()))\nif all([n < 0 for n in nums]):\n    print(\"WARN\")\nelse:\n    print(\"OK\")",
      "targetCode": "nums = list(map(int, input().split()))\nif any([n < 0 for n in nums]):\n    print(\"WARN\")\nelse:\n    print(\"OK\")",
      "testCases": [
        {
          "id": 1,
          "input": "10 -5 20",
          "expectedOutput": "WARN"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 정렬된 정수들을 역순으로 하이픈(-) 연결하려다 map 변환 함수가 잘못 지정된 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the conversion type inside map() when joining reversed sorted integers with hyphens.",
      "hint_ko": ".join()으로 연결하려면 정수(int)가 아니라 문자열(str)로 일괄 변환해야 합니다.",
      "hint_en": "Change map(int, reversed(nums)) to map(str, reversed(nums)) before joining.",
      "templateCode": "nums = sorted(map(int, input().split()))\nprint(\"-\".join(map(int, reversed(nums))))",
      "targetCode": "nums = sorted(map(int, input().split()))\nprint(\"-\".join(map(str, reversed(nums))))",
      "testCases": [
        {
          "id": 1,
          "input": "12 3 25",
          "expectedOutput": "25-12-3"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 재고 수량(두 번째 요소)이 가장 큰 항목을 찾아야 하는데 상품명(첫 번째 요소)을 비교한 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the tuple index in key=lambda x: ... so max() compares the stock count at index 1.",
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
      "prompt_ko": "[한 줄 완성] 절댓값 리스트 vals의 평균(sum(vals) / len(vals))을 round(..., 2)로 반올림해 반환하는 return 문을 작성해보세요.",
      "prompt_en": "[Complete Line] Write return round(sum(vals) / len(vals), 2) inside avg_abs.",
      "hint_ko": "들여쓰기 4칸 뒤에 return round(sum(vals) / len(vals), 2)를 작성하세요.",
      "hint_en": "Write return round(sum(vals) / len(vals), 2) inside the function.",
      "targetCode": "def avg_abs(*nums):\n    vals = [abs(n) for n in nums]\n    return round(sum(vals) / len(vals), 2)\nprint(avg_abs(-4, 5, -8))",
      "templateCode": "def avg_abs(*nums):\n    vals = [abs(n) for n in nums]\n    §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(avg_abs(-4, 5, -8))",
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
      "prompt_ko": "[한 줄 완성] 혼합 리스트 raw에 str 타입 원소가 하나라도 있는지 any()와 isinstance()로 검사해 res에 저장해보세요.",
      "prompt_en": "[Complete Line] Assign any([isinstance(x, str) for x in raw]) to res.",
      "hint_ko": "res = any([isinstance(x, str) for x in raw]) 형태로 작성하세요.",
      "hint_en": "Write res = any([isinstance(x, str) for x in raw]) on the masked line.",
      "targetCode": "raw = [15, \"skip\", -20, 3, None]\nres = any([isinstance(x, str) for x in raw])\nprint(res)",
      "templateCode": "raw = [15, \"skip\", -20, 3, None]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(res)",
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
      "prompt_ko": "[출력 결과 예측] zip(), reversed(), abs(), enumerate()가 결합된 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the code combining zip(), reversed(), abs(), and enumerate().",
      "hint_ko": "b를 역순(18, 25, 4)으로 a와 짝지어 구한 거리 [8, 5, 26]에 1부터 시작하는 번호를 각각 곱합니다.",
      "hint_en": "Pair a with reversed(b) ([18, 25, 4]) to get gaps [8, 5, 26], then multiply by 1-based indices 1, 2, 3.",
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
      "prompt_ko": "[출력 결과 예측] 가변 인자, isinstance 필터링, key=lambda 절댓값 정렬과 math.gcd가 결합된 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of pick() combining isinstance, lambda abs sort, and math.gcd.",
      "hint_ko": "정수 [-12, 8, -4]를 절댓값 크기순으로 정렬하면 첫 원소는 -4이고, 12와 8의 최대공약수는 4입니다.",
      "hint_en": "Sorting [-12, 8, -4] by abs(n) puts -4 first, and math.gcd(12, 8) is 4.",
      "targetCode": "import math\ndef pick(*xs):\n    nums = [x for x in xs if isinstance(x, int)]\n    s = sorted(nums, key=lambda n: abs(n))\n    return s[0], math.gcd(abs(nums[0]), abs(nums[1]))\n\nprint(pick(\"skip\", -12, 8, -4))",
      "choices": [
        "(-4, 4)",
        "(4, 4)",
        "(-12, 4)",
        "(-4, 2)"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "(-4, 4)"
        }
      ]
    }
  ]
};
