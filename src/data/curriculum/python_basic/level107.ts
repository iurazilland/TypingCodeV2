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
      "prompt_ko": "[빈칸 채우기] 두 리스트 a와 b의 같은 위치 원소 간 오차 절댓값을 구해 최댓값과 올림 평균을 출력하도록 빈칸 3곳을 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the three blanks to compute the element-wise absolute differences between a and b and print their maximum and ceiling average.",
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
      "prompt_ko": "[빈칸 채우기] 입력된 선수 이름과 점수를 짝지어 점수 내림차순으로 정렬한 뒤 1위부터 순위표를 출력하도록 빈칸 3곳을 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the three blanks to pair player names with scores, sort them in descending order by score, and print the 1-based leaderboard.",
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
      "prompt_ko": "[빈칸 채우기] 전달된 인자가 모두 정수일 때만 합계를 10으로 나눈 몫과 나머지 튜플을 반환하도록 빈칸 3곳을 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the three blanks in check_sum to verify that all arguments are integers and return the quotient and remainder of their sum divided by 10.",
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
      "prompt_ko": "[틀린 곳 수정] 입력된 숫자 리스트에 음수가 하나라도 포함되어 있을 때 경고 분기가 실행되도록 조건식의 함수를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the logical quantifier so the warning branch runs whenever at least one input number is negative.",
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
      "prompt_ko": "[틀린 곳 수정] 정렬된 정수들을 큰 수부터 역순으로 하이픈 연결해 출력할 수 있도록 일괄 형변환 함수의 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the conversion type inside map() so the reversed sorted integers can be joined with hyphens.",
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
      "prompt_ko": "[틀린 곳 수정] 딕셔너리 stock에서 재고 수량이 가장 많은 상품과 수량을 찾아 출력하도록 기준 함수의 인덱스 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Find and fix the index bug in the key function so the item with the largest stock quantity is selected.",
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
      "prompt_ko": "[한 줄 완성] 절댓값 리스트 vals의 평균을 구해 소수점 둘째 자리까지 반올림한 값을 반환하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Return the average of vals rounded to 2 decimal places.",
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
      "prompt_ko": "[한 줄 완성] 혼합 리스트 raw 안에 문자열 자료형인 원소가 하나라도 있는지 판별한 불리언 결과를 변수 res에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Check whether at least one element in raw is a string and store the boolean result in res.",
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
      "prompt_ko": "[출력 결과 예측] zip(), reversed(), abs()가 결합된 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the code combining zip(), reversed(), and abs().",
      "hint_ko": "b를 역순([25, 20, 5])으로 뒤집어 a([10, 20, 30])와 나란히 짝지은 뒤 두 수의 차이(절댓값)를 구합니다.",
      "hint_en": "Pair a ([10, 20, 30]) with reversed(b) ([25, 20, 5]) and compute abs(x - y) for each pair.",
      "targetCode": "a = [10, 20, 30]\nb = [5, 20, 25]\ngaps = [abs(x - y) for x, y in zip(a, reversed(b))]\nprint(gaps)",
      "choices": [
        "[15, 0, 25]",
        "[5, 0, 5]",
        "[-15, 0, 25]",
        "[15, 20, 25]"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[15, 0, 25]"
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
