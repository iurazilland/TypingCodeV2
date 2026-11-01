import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 56레벨: return으로 결과값 반환하기 (13단계 표준 구성)
// - [1,3,5,7,9단계] 블록 코딩 개념 도입 (return 반환, 수식 활용, 다중 반환)
// - [2,4,6,8,10단계] 빈칸 채우기 타이핑 실습 (fill_blank)
// - [11단계] 버그 수정 (fix_bug)
// - [12단계] 예제 아래 한 줄 코드 추가 작성 (one_line)
// - [13단계] 출력 결과 예측 4지선다 퀴즈 (predict_output)
// ============================================================================
export const PYTHON_LEVEL_56: PracticeRound = {
  "id": "py-basic-r56",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 56,
  "title_ko": "56레벨: return으로 결과값 반환하기",
  "title_en": "Level 56: Returning Values with return",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "type",
    "def",
    "if",
    "math"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "두 수의 합 a + b를 return으로 반환하는 add 함수를 만들고, add(3, 5)를 res에 저장해 출력해보세요.",
      "prompt_en": "Define add(a, b) returning a + b, store add(3, 5) in res, and print res.",
      "hint_ko": "def add(a, b):의 return 칸에 a + b를 적고, 밖에서 res = add(3, 5)와 print(res)를 작성하세요.",
      "hint_en": "Return a + b from add(a, b), assign res = add(3, 5), and print(res).",
      "targetCode": "def add(a, b):\n    return a + b\nres = add(3, 5)\nprint(res)",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "8"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 w * h를 반환하는 get_area 함수를 완성하고, get_area(6, 4)의 반환값을 출력해보세요.",
      "prompt_en": "Fill in the blanks so get_area(w, h) returns w * h and its result for (6, 4) is printed.",
      "hint_ko": "함수 결과를 호출한 곳으로 돌려줄 때는 return 키워드를 사용합니다.",
      "hint_en": "Use return on line 2 and get_area(6, 4) on line 3.",
      "templateCode": "def get_area(w, h):\n    §§§§§§ w * h\narea = §§§§§§§§§§§§§§\nprint(area)",
      "targetCode": "def get_area(w, h):\n    return w * h\narea = get_area(6, 4)\nprint(area)",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "24"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "n * 3을 반환하는 triple(n) 함수를 정의하고, triple(2) + triple(4)의 결과를 total에 담아 출력해보세요.",
      "prompt_en": "Define triple(n) returning n * 3, then store and print triple(2) + triple(4).",
      "hint_ko": "return으로 반환된 값은 숫자처럼 덧셈 수식(triple(2) + triple(4))에 바로 사용할 수 있습니다.",
      "hint_en": "Assign total = triple(2) + triple(4) and print(total).",
      "targetCode": "def triple(n):\n    return n * 3\ntotal = triple(2) + triple(4)\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "18"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 a + b를 반환하는 add 함수를 이용해 add(1, 2) + add(3, 4)의 계산 결과를 출력해보세요.",
      "prompt_en": "Fill in the blanks to return a + b and print add(1, 2) + add(3, 4).",
      "hint_ko": "둘째 줄에 return을 적고, 셋째 줄 print 안에서 두 함수 호출 결과를 +로 더하세요.",
      "hint_en": "Enter return on line 2 and add(3, 4) on line 3.",
      "templateCode": "def add(a, b):\n    §§§§§§ a + b\nprint(add(1, 2) + §§§§§§§§§)",
      "targetCode": "def add(a, b):\n    return a + b\nprint(add(1, 2) + add(3, 4))",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "10"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "정수 n이 짝수면 True, 아니면 False를 반환하는 is_even(n) 함수를 만들고 입력 정수의 결과를 출력해보세요.",
      "prompt_en": "Define is_even(n) returning True if even else False, and print the result for int(input()).",
      "hint_ko": "if n % 2 == 0: 분기에는 return True를, else: 분기에는 return False를 넣으세요.",
      "hint_en": "Return True when n % 2 == 0 and return False in the else branch.",
      "targetCode": "def is_even(n):\n    if n % 2 == 0:\n        return True\n    else:\n        return False\nx = int(input())\nprint(is_even(x))",
      "testCases": [
        {
          "id": 1,
          "input": "8",
          "expectedOutput": "True"
        },
        {
          "id": 2,
          "input": "5",
          "expectedOutput": "False"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 두 수 중 더 큰 값을 즉시 반환하는 bigger 함수를 완성하고 입력값과 50을 비교해 출력해보세요.",
      "prompt_en": "Fill in the blanks so bigger(a, b) returns the larger value using early return.",
      "hint_ko": "if 조건이 참이면 return a로 즉시 함수가 종료되므로, 그 아래에는 return b를 적어줍니다.",
      "hint_en": "Write return a inside the if block and return b right after it.",
      "templateCode": "def bigger(a, b):\n    if a >= b:\n        §§§§§§§§\n    §§§§§§§§\nn = int(input())\nprint(bigger(n, 50))",
      "targetCode": "def bigger(a, b):\n    if a >= b:\n        return a\n    return b\nn = int(input())\nprint(bigger(n, 50))",
      "testCases": [
        {
          "id": 1,
          "input": "72",
          "expectedOutput": "72"
        },
        {
          "id": 2,
          "input": "30",
          "expectedOutput": "50"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "몫(a // b)과 나머지(a % b)를 함께 반환하는 div_mod 함수를 만들고, div_mod(10, 3)을 q, r로 받아 출력해보세요.",
      "prompt_en": "Define div_mod(a, b) returning a // b, a % b, unpack div_mod(10, 3) into q, r, and print them.",
      "hint_ko": "return a // b, a % b처럼 쉼표로 나열하면 튜플로 반환되어 q, r = div_mod(10, 3)으로 언패킹할 수 있습니다.",
      "hint_en": "Return a // b, a % b and unpack with q, r = div_mod(10, 3).",
      "targetCode": "def div_mod(a, b):\n    return a // b, a % b\nq, r = div_mod(10, 3)\nprint(q, r)",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "3 1"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 리스트의 최솟값과 최댓값을 함께 반환하는 min_max 함수를 완성하고 lo, hi에 언패킹해보세요.",
      "prompt_en": "Fill in the blanks to return min(nums), max(nums) and unpack the result into lo, hi.",
      "hint_ko": "return 뒤에 min(nums), max(nums)를 적고, 셋째 줄 좌변에 lo, hi를 적으세요.",
      "hint_en": "Enter min(nums), max(nums) on line 2 and lo, hi on line 3.",
      "templateCode": "def min_max(nums):\n    return §§§§§§§§§§§§§§§§§§§§\n§§§§§§ = min_max([15, 4, 28, 9])\nprint(lo, hi)",
      "targetCode": "def min_max(nums):\n    return min(nums), max(nums)\nlo, hi = min_max([15, 4, 28, 9])\nprint(lo, hi)",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "4 28"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "리스트 scores의 정수 평균 sum(scores) // len(scores)를 반환하는 avg_int 함수를 만들고 [80, 90, 100]을 넣어 출력해보세요.",
      "prompt_en": "Define avg_int(scores) returning sum(scores) // len(scores) and print its result for [80, 90, 100].",
      "hint_ko": "함수 안에서 sum(scores) // len(scores)를 반환하고 print(avg_int(data))로 결과를 출력하세요.",
      "hint_en": "Return sum(scores) // len(scores) and pass data = [80, 90, 100] into avg_int.",
      "targetCode": "def avg_int(scores):\n    return sum(scores) // len(scores)\ndata = [80, 90, 100]\nprint(avg_int(data))",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "90"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 첫 요소와 끝 요소의 합을 반환하는 edge_sum(items)를 완성하고 edge_sum(nums)를 출력해보세요.",
      "prompt_en": "Fill in the blanks so edge_sum(items) returns first + last, and print edge_sum(nums).",
      "hint_ko": "첫 요소는 items[0], 마지막 요소는 음수 인덱스 items[-1]로 가져와 return 합니다.",
      "hint_en": "Use items[0] + items[-1] after return and call edge_sum(nums).",
      "templateCode": "def edge_sum(items):\n    return §§§§§§§§§§§§§§§§§§§§\nnums = [10, 25, 30, 45]\nprint(§§§§§§§§§§§§§§)",
      "targetCode": "def edge_sum(items):\n    return items[0] + items[-1]\nnums = [10, 25, 30, 45]\nprint(edge_sum(nums))",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "55"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "함수 계산 결과에 10을 더해 30만 출력하려 하지만 반환값이 없어 오류가 발생합니다. 함수를 고쳐보세요.",
      "prompt_en": "Fix the function so mul(4, 5) + 10 evaluates to 30 without a TypeError.",
      "hint_ko": "함수 안에서 화면에 출력만 하면 None이 돌려져 덧셈할 수 없습니다. 값을 반환하는 키워드로 바꿔보세요.",
      "hint_en": "printing inside mul returns None; return the product instead of printing it.",
      "templateCode": "def mul(a, b):\n    print(a * b)\ntotal = mul(4, 5) + 10\nprint(total)",
      "targetCode": "def mul(a, b):\n    return a * b\ntotal = mul(4, 5) + 10\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "30"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "코드 마지막에 한 줄을 추가하여 입력받은 정수 x를 cube 함수에 넣은 반환값을 출력해보세요.",
      "prompt_en": "Add one line at the end to print the value returned by cube(x).",
      "hint_ko": "print() 안에 함수 호출식 cube(x)를 넣어 반환값을 출력하세요.",
      "hint_en": "Write print(cube(x)) on the last line.",
      "templateCode": "def cube(n):\n    return n ** 3\nx = int(input())\n§§§§§§§§§§§§§§",
      "targetCode": "def cube(n):\n    return n ** 3\nx = int(input())\nprint(cube(x))",
      "testCases": [
        {
          "id": 1,
          "input": "3",
          "expectedOutput": "27"
        },
        {
          "id": 2,
          "input": "4",
          "expectedOutput": "64"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 코드의 실행 결과를 예측해보세요.",
      "prompt_en": "Predict the output of the following code.",
      "hint_ko": "step(3)은 if 조건이 거짓이라 3 + 10을, step(7)은 참이라 7 * 2를 반환합니다.",
      "hint_en": "step(3) returns 13 and step(7) returns 14, then print outputs a + b.",
      "targetCode": "def step(n):\n    if n > 5:\n        return n * 2\n    return n + 10\na = step(3)\nb = step(7)\nprint(a + b)",
      "choices": [
        "10",
        "20",
        "27",
        "30"
      ],
      "correctChoiceIndex": 2,
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "27"
        }
      ]
    }
  ]
};
