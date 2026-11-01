import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_52: PracticeRound = {
  "id": "py-basic-r52",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 52,
  "title_ko": "52레벨: return 결과값 반환과 다중 반환 언패킹",
  "title_en": "Level 52: Returning Values & Tuple Unpacking Return",
  "description_ko": "return으로 계산 결과를 돌려주고, 조기 반환·None 반환 확인·다중 반환 튜플 언패킹을 활용합니다.",
  "description_en": "Master returning values with return, early returns, None checks, and tuple-unpacking multiple return values.",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "type",
    "math",
    "method",
    "if",
    "for_range",
    "for_in",
    "while",
    "def"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "두 수의 합을 return으로 반환하는 add(a, b) 함수를 만들고, add(12, 8)의 반환값을 res에 담아 출력해보세요.",
      "prompt_en": "Define add(a, b) to return a + b, store add(12, 8) in res, and print res.",
      "hint_ko": "return a + b는 함수 실행 결과를 호출한 자리로 돌려주어 변수 res에 저장할 수 있게 합니다.",
      "hint_en": "Use return a + b inside def add(a, b):, then assign res = add(12, 8) and print(res).",
      "targetCode": "def add(a, b):\n    return a + b\nres = add(12, 8)\nprint(res)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "20"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "가로와 세로를 곱한 결과값을 호출한 곳으로 돌려주도록 빈칸에 반환 키워드를 채워보세요. (출력 예: 20)",
      "prompt_en": "Fill in the keyword that returns w * h to the caller so 20 is printed.",
      "hint_ko": "함수 안에서 계산한 값을 바깥 변수 ans로 넘겨주려면 return 키워드를 사용합니다.",
      "hint_en": "Write return before w * h.",
      "templateCode": "def area(w, h):\n    §§§§§§ w * h\nans = area(5, 4)\nprint(ans)",
      "targetCode": "def area(w, h):\n    return w * h\nans = area(5, 4)\nprint(ans)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "20"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "n * 2를 반환하는 double(n) 함수를 정의하고, double(5) + double(10)의 합을 total에 저장해 출력해보세요.",
      "prompt_en": "Define double(n) returning n * 2, compute total = double(5) + double(10), and print total.",
      "hint_ko": "return이 있는 함수 호출식은 그 자체가 결과값으로 바뀌므로 덧셈식에 바로 쓸 수 있습니다.",
      "hint_en": "Return n * 2 from double(n), then add double(5) + double(10).",
      "targetCode": "def double(n):\n    return n * 2\ntotal = double(5) + double(10)\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "30"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "80점 이상이면 즉시 \"A\"를 돌려주고, 아니면 \"B\"를 돌려주도록 두 빈칸에 반환 키워드를 채워보세요. (출력 예: A B)",
      "prompt_en": "Fill in both blanks so the function returns \"A\" early when score >= 80, otherwise \"B\".",
      "hint_ko": "함수 중간에 return을 만나면 즉시 값을 반환하고 함수를 종료하므로 else 없이도 분기됩니다.",
      "hint_en": "Use return on both lines to perform an early return.",
      "templateCode": "def grade(score):\n    if score >= 80:\n        §§§§§§ \"A\"\n    §§§§§§ \"B\"\nprint(grade(85), grade(70))",
      "targetCode": "def grade(score):\n    if score >= 80:\n        return \"A\"\n    return \"B\"\nprint(grade(85), grade(70))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "A B"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "홀수면 None을, 짝수면 n // 2를 반환하는 half_even(n)을 만들고 half_even(7)의 결과가 None인지 출력해보세요.",
      "prompt_en": "Define half_even(n) returning None for odd n or n // 2 for even n, then print res is None for 7.",
      "hint_ko": "if n % 2 != 0:일 때 return None으로 조기 반환하고, 바깥에서 print(res is None)으로 확인합니다.",
      "hint_en": "Return None when n % 2 != 0, else return n // 2, then check res is None.",
      "targetCode": "def half_even(n):\n    if n % 2 != 0:\n        return None\n    return n // 2\nres = half_even(7)\nprint(res is None)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "0 이하일 때 값 없음 상수를 반환하고, 아래에서 반환값이 없는지 비교 연산자로 확인하도록 두 빈칸을 채워보세요.",
      "prompt_en": "Return the null value constant when n <= 0 and check identity with it on the last line.",
      "hint_ko": "파이썬에서 값이 없음을 나타낼 때는 None을 반환하고, 확인할 때는 res is None을 사용합니다.",
      "hint_en": "Write None in the first blank and is in the second blank.",
      "templateCode": "def find_pos(n):\n    if n <= 0:\n        return §§§§\n    return n\nval = int(input())\nres = find_pos(val)\nprint(res §§ None)",
      "targetCode": "def find_pos(n):\n    if n <= 0:\n        return None\n    return n\nval = int(input())\nres = find_pos(val)\nprint(res is None)",
      "testCases": [
        {
          "id": 1,
          "input": "-3",
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
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "몫(a // b)과 나머지(a % b)를 동시에 반환하는 div_mod(a, b)를 만들고, 17과 5로 호출해 q, r에 언패킹하여 출력해보세요. (출력 예: Q:3 R:2)",
      "prompt_en": "Define div_mod(a, b) returning a // b, a % b, unpack div_mod(17, 5) into q, r, and print Q:3 R:2.",
      "hint_ko": "return a // b, a % b로 두 값을 반환하면 q, r = div_mod(17, 5)로 한 번에 나누어 받을 수 있습니다.",
      "hint_en": "Return a // b, a % b as a pair and unpack with q, r = div_mod(17, 5).",
      "targetCode": "def div_mod(a, b):\n    return a // b, a % b\nq, r = div_mod(17, 5)\nprint(f\"Q:{q} R:{r}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Q:3 R:2"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "리스트의 최솟값과 최댓값을 동시에 반환받아 마지막 줄에서 출력하는 두 변수에 언패킹하도록 빈칸을 채워보세요. (출력 예: 5 29)",
      "prompt_en": "Unpack the returned minimum and maximum into the two variables printed on the last line.",
      "hint_ko": "마지막 줄 print(low, high)에 맞춰 왼쪽에 low, high를 순서대로 작성하세요.",
      "hint_en": "Unpack into low and high on the assignment line.",
      "templateCode": "def min_max(nums):\n    return min(nums), max(nums)\ndata = [14, 5, 29, 8]\n§§§, §§§§ = min_max(data)\nprint(low, high)",
      "targetCode": "def min_max(nums):\n    return min(nums), max(nums)\ndata = [14, 5, 29, 8]\nlow, high = min_max(data)\nprint(low, high)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "5 29"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "딕셔너리 board에 name이 있으면 점수를, 없으면 None을 반환하는 get_score 함수를 만들고 \"Kim\"과 \"Park\"을 조회해 출력해보세요.",
      "prompt_en": "Define get_score(board, name) returning board[name] if found else None, and test \"Kim\" and \"Park\".",
      "hint_ko": "if name in board:일 때 return board[name]을 실행하고, 조건문 아래에서 return None을 실행합니다.",
      "hint_en": "Check if name in board: to return board[name], otherwise return None.",
      "targetCode": "def get_score(board, name):\n    if name in board:\n        return board[name]\n    return None\nsc = {\"Kim\": 95, \"Lee\": 88}\nprint(get_score(sc, \"Kim\"), get_score(sc, \"Park\"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "95 None"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "while문으로 1부터 limit까지 누적한 뒤 마지막 숫자와 합계를 다중 반환하도록 빈칸에 키워드를 채워보세요. (출력 예: 4->10)",
      "prompt_en": "Fill in the keyword to return both limit and total as a tuple so 4->10 is printed.",
      "hint_ko": "쉼표로 연결한 두 값을 호출부 cnt, s로 돌려주려면 return 키워드를 앞에 적습니다.",
      "hint_en": "Write return before limit, total.",
      "templateCode": "def sum_up_to(limit):\n    n = 1\n    total = 0\n    while n <= limit:\n        total += n\n        n += 1\n    §§§§§§ limit, total\ncnt, s = sum_up_to(4)\nprint(f\"{cnt}->{s}\")",
      "targetCode": "def sum_up_to(limit):\n    n = 1\n    total = 0\n    while n <= limit:\n        total += n\n        n += 1\n    return limit, total\ncnt, s = sum_up_to(4)\nprint(f\"{cnt}->{s}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "4->10"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "함수 안에서 계산값을 반환하지 않고 화면에 출력만 해서 곱셈 연산 중 에러가 발생했습니다. 값을 반환하도록 고쳐보세요.",
      "prompt_en": "Fix the TypeError caused by printing the value inside calc_bonus instead of returning it.",
      "hint_ko": "print()는 값을 반환하지 않아 함수 결과가 None이 됩니다. print 대신 return으로 값을 돌려주세요.",
      "hint_en": "Replace print(pay + 50) with return pay + 50.",
      "templateCode": "def calc_bonus(pay):\n    print(pay + 50)\ntotal = calc_bonus(200) * 2\nprint(total)",
      "targetCode": "def calc_bonus(pay):\n    return pay + 50\ntotal = calc_bonus(200) * 2\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "500"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "리스트의 첫 값과 끝 값을 언패킹해 받은 코드 아래에 한 줄을 추가하여 first와 last의 합을 출력해보세요. (출력 예: 50)",
      "prompt_en": "Add one line below the tuple-unpacking call to print the sum of first and last (50).",
      "hint_ko": "언패킹된 두 정수 변수 first와 last를 더해 print(first + last)로 출력합니다.",
      "hint_en": "Write print(first + last) on the last line.",
      "templateCode": "def ends(nums):\n    return nums[0], nums[-1]\nfirst, last = ends([10, 20, 30, 40])\n§§§§§§§§§§§§§§§§§§§",
      "targetCode": "def ends(nums):\n    return nums[0], nums[-1]\nfirst, last = ends([10, 20, 30, 40])\nprint(first + last)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "50"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "조기 반환(early return)이 포함된 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "Select the exact output of the following code featuring early return.",
      "hint_ko": "첫 호출은 25에서 조건을 만족해 즉시 25를 반환하고, 둘째 호출은 끝까지 못 찾아 None을 반환합니다.",
      "hint_en": "The first call returns 25 as soon as 25 >= 20; the second returns None so b is None is True.",
      "targetCode": "def first_big(nums, cut):\n    for x in nums:\n        if x >= cut:\n            return x\n    return None\na = first_big([10, 25, 30], 20)\nb = first_big([5, 12], 20)\nprint(a, b is None)",
      "choices": [
        "30 True",
        "25 True",
        "25 False",
        "25 None"
      ],
      "correctChoiceIndex": 1,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "25 True"
        }
      ]
    }
  ]
};
