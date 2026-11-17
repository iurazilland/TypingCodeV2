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
  "totalQuestions": 15,
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] return a + b로 덧셈 결과를 반환하는 add 함수를 정의하고 반환값을 출력해보세요.",
      "prompt_en": "[Block] Define add(a, b) with return a + b, store the result in res, and print it.",
      "hint_ko": "print()는 화면에 보여주기만 하지만, return은 계산 결과를 호출부로 돌려주어 변수에 대입할 수 있게 합니다.",
      "hint_en": "Unlike print(), return hands the value back to the caller where it can be assigned to a variable.",
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
      "prompt_ko": "[빈칸 채우기] 가로와 세로를 곱한 결과값을 호출한 곳으로 돌려주도록 반환 키워드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the keyword that returns w * h to the caller so 20 is printed.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 2배 값을 반환하는 double(n)을 정의하고 두 호출 결과의 합을 출력해보세요.",
      "prompt_en": "[Block] Define double(n) to return n * 2 and print the sum of double(5) and double(10).",
      "hint_ko": "각 함수 호출이 반환한 두 숫자가 덧셈 연산자로 더해져 결과 변수에 저장됩니다.",
      "hint_en": "Each function call evaluates to its returned number, allowing the + operator to sum both results.",
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
      "prompt_ko": "[빈칸 채우기] 3배 값을 반환하는 키워드와 함수 호출 이름을 채워 30을 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the return keyword and function name so triple(4) + triple(6) prints 30.",
      "hint_ko": "첫 빈칸에는 값을 돌려주는 여섯 글자 키워드를, 둘째 빈칸에는 선언한 여섯 글자 함수 이름을 적으세요.",
      "hint_en": "Write the 6-letter return keyword on line 2 and the 6-letter function name on line 3.",
      "templateCode": "def triple(n):\n    §§§§§§ n * 3\nres = §§§§§§(4) + triple(6)\nprint(res)",
      "targetCode": "def triple(n):\n    return n * 3\nres = triple(4) + triple(6)\nprint(res)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "30"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 홀수일 때 return None으로 조기 반환하는 half_even(n)을 완성하고 결과를 확인해보세요.",
      "prompt_en": "[Block] Use an early return None on odd inputs in half_even(n) and check the result with is None.",
      "hint_ko": "if 조건이 참이어서 첫 번째 return이 실행되면 함수가 바로 끝나고 아래의 두 번째 return은 실행되지 않습니다.",
      "hint_en": "When the if condition triggers the first return, the function exits immediately without reaching the second return.",
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
      "prompt_ko": "[빈칸 채우기] 0 이하일 때 None을 반환하고 반환값이 없는지 is로 확인해보세요.",
      "prompt_en": "[Fill Blank] Return the null value constant when n <= 0 and check identity with it below.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 몫과 나머지를 쉼표로 다중 반환하는 div_mod(a, b)를 정의하고 q, r로 언패킹해보세요.",
      "prompt_en": "[Block] Return both quotient and remainder from div_mod(a, b) and unpack them into q and r.",
      "hint_ko": "함수에서 쉼표로 구분해 반환한 두 계산 결과가 호출부 등호 왼쪽의 두 변수에 순서대로 나뉘어 저장됩니다.",
      "hint_en": "The two comma-separated return values unpack in order into the two variables on the left of =.",
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
      "prompt_ko": "[빈칸 채우기] 최솟값과 최댓값을 동시에 반환받아 출력하는 두 변수에 언패킹해보세요.",
      "prompt_en": "[Fill Blank] Unpack the returned minimum and maximum into the two variables printed on the last line.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 키가 있으면 점수를 반환하고 없으면 None을 반환하는 get_score 함수를 완성해보세요.",
      "prompt_en": "[Block] Return the score if the key is in board, otherwise return None.",
      "hint_ko": "키가 존재하면 if문 안에서 값을 즉시 반환하고, 존재하지 않으면 조건문을 지나 None을 반환합니다.",
      "hint_en": "If the key exists, the function returns the value right away; otherwise it falls through and returns None.",
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
      "prompt_ko": "[빈칸 채우기] 80점 이상이면 즉시 \"A\"를 돌려주고 아니면 \"B\"를 돌려주도록 반환 키워드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in both blanks so the function returns \"A\" early when score >= 80, otherwise \"B\".",
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
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 계산값을 반환하지 않고 출력만 해서 곱셈에서 에러가 나는 줄을 return으로 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the TypeError caused by printing the value inside calc_bonus instead of returning it.",
      "hint_ko": "화면에 출력만 하는 함수는 결과값이 없어 곱셈식에 사용할 수 없습니다. print(pay + 50)을 return pay + 50으로 바꾸세요.",
      "hint_en": "Replace print(pay + 50) with return pay + 50 so the caller receives the number.",
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
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 몫과 나머지를 반환하지 않고 출력만 하여 언패킹 에러가 나는 줄을 return으로 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the unpacking TypeError by returning the quotient and remainder instead of printing them.",
      "hint_ko": "호출부의 q, r 변수에 두 값이 언패킹되도록 print(a // b, a % b)를 return a // b, a % b로 수정하세요.",
      "hint_en": "Change print(a // b, a % b) to return a // b, a % b.",
      "templateCode": "def split_num(a, b):\n    print(a // b, a % b)\nq, r = split_num(19, 5)\nprint(q, r)",
      "targetCode": "def split_num(a, b):\n    return a // b, a % b\nq, r = split_num(19, 5)\nprint(q, r)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 4"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 함수 안에서 리스트 nums의 첫 값(nums[0])과 끝 값(nums[-1])을 다중 반환하는 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the indented line that returns nums[0] and nums[-1].",
      "hint_ko": "return 키워드 뒤에 nums[0], nums[-1]을 쉼표로 나열해 반환하세요.",
      "hint_en": "Write return nums[0], nums[-1] inside the function.",
      "templateCode": "def ends(nums):\n    §§§§§§§§§§§§§§§§§§§§§§§§\nfirst, last = ends([10, 20, 30, 40])\nprint(first + last)",
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
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] ends([10, 20, 30]) 호출 결과를 두 변수 first, last로 언패킹해 받는 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the line that unpacks ends([10, 20, 30]) into first and last.",
      "hint_ko": "등호 왼쪽에 first, last를 적고 오른쪽에 ends([10, 20, 30])을 호출하세요.",
      "hint_en": "Write first, last = ends([10, 20, 30]).",
      "templateCode": "def ends(nums):\n    return nums[0], nums[-1]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(first, last)",
      "targetCode": "def ends(nums):\n    return nums[0], nums[-1]\nfirst, last = ends([10, 20, 30])\nprint(first, last)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "10 30"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 조기 반환(early return)이 포함된 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following code featuring early return.",
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
