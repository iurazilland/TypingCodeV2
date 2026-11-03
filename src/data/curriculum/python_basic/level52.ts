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
      "hint_ko": "함수 안에서 덧셈 결과를 호출한 자리로 돌려주게 만들고, 바깥에서 호출 결과를 변수에 대입한 뒤 출력하세요.",
      "hint_en": "Send the sum back from inside the function, capture the call result in a variable outside, and print that variable.",
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
      "hint_ko": "함수 안에서 계산한 값을 호출한 자리로 '되돌려주다'를 뜻하는 여섯 글자 영어 키워드를 앞에 적으세요.",
      "hint_en": "Use the six-letter keyword meaning \"give back to the caller\" before the multiplication expression.",
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
      "hint_ko": "값을 반환하는 함수 호출식은 그 자체가 계산 결과값으로 평가되므로 두 호출식을 덧셈으로 바로 연결해 저장하세요.",
      "hint_en": "Define the function to send back twice its parameter, then add the two function calls directly and print the variable.",
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
      "hint_ko": "실행 도중 값을 즉시 '되돌려주고' 함수를 종료하는 여섯 글자 영어 키워드를 두 빈칸에 모두 적으세요.",
      "hint_en": "Place the six-letter keyword that sends a value back and exits the function immediately in both blanks.",
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
      "hint_ko": "홀수 조건에서 '값 없음' 상수를 조기 반환하고 짝수일 때 몫을 반환한 뒤, 바깥에서 객체 동일성 연산자로 결과를 확인하세요.",
      "hint_en": "Exit early with Python's null constant when odd, otherwise send back half the integer, then print the identity check.",
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
      "hint_ko": "첫 빈칸에는 첫 글자가 대문자인 '아무것도 없음' 네 글자 상수를, 둘째 빈칸에는 객체 동일성을 묻는 두 글자 영어 동사를 적으세요.",
      "hint_en": "Put Python's capitalized four-letter null constant in the first blank, and the two-letter identity operator in the second.",
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
      "hint_ko": "함수에서 두 계산식을 쉼표로 나란히 반환하면 호출부 등호 왼쪽에 두 변수를 나란히 두어 한 번에 나누어 받을 수 있습니다.",
      "hint_en": "Send back the quotient and remainder separated by a comma, unpack the call into two variables, and print the formatted output.",
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
      "hint_ko": "다중 반환 순서(최솟값 먼저, 최댓값 다음)에 맞춰 마지막 줄 출력문에서 참조하는 두 변수 이름을 나란히 적으세요.",
      "hint_en": "Unpack the returned pair into the exact two variable names printed on the final line, in matching order.",
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
      "hint_ko": "키 포함 조건문 안에서는 해당 점수를 즉시 반환하고, 조건문을 통과한 아랫줄에서는 값 없음 상수를 반환하도록 구성하세요.",
      "hint_en": "Send back the dictionary value inside the membership check, and fall through to Python's null constant when not found.",
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
      "hint_ko": "쉼표로 연결한 두 결과값을 호출부의 언패킹 변수로 '되돌려주다'를 뜻하는 여섯 글자 키워드를 적으세요.",
      "hint_en": "Write the six-letter keyword that sends both comma-separated values back to the unpacking assignment.",
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
      "hint_ko": "화면에 출력만 하는 함수는 결과값이 없어 곱셈식에 사용할 수 없습니다. 출력문 대신 계산값을 호출부로 되돌려주도록 바꾸세요.",
      "hint_en": "Printing inside a function yields no usable value for multiplication; send the calculated sum back to the caller instead.",
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
      "hint_ko": "다중 반환으로 이미 두 변수에 양끝 정수가 나누어 저장되어 있으므로, 두 변수를 더한 값을 화면에 출력하세요.",
      "hint_en": "Since both boundary numbers are already unpacked into the two variables above, print their sum.",
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
      "hint_ko": "반복문 안에서 기준 이상인 첫 원소를 만나는 즉시 함수가 종료된다는 점과, 끝까지 못 찾았을 때의 반환값 비교 결과를 추적해 보세요.",
      "hint_en": "Trace which element triggers the immediate exit on the first call, and evaluate the null identity check when the second call finishes the loop.",
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
