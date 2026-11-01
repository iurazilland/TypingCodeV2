import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_54: PracticeRound = {
  "id": "py-basic-r54",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 54,
  "title_ko": "54레벨: 함수(def) 필수 기초 종합 문제풀이",
  "title_en": "Level 54: Section 8 Comprehensive Review",
  "description_ko": "함수 정의, 매개변수, return과 다중 반환 언패킹, None 처리, 기본값과 지역변수 범위를 종합 점검합니다.",
  "description_en": "Comprehensive Section 8 review covering def, parameters, return/unpacking/None, defaults, and scope.",
  "totalQuestions": 10,
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
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "입력 문자열의 양끝 공백을 제거하고 지정된 태그 형식 문자열을 반환하도록 두 빈칸을 채워보세요. (출력 예: USER-kim01)",
      "prompt_en": "Trim outer whitespace from raw and return the formatted f-string.",
      "hint_ko": "공백 제거 메서드 .strip()을 호출한 뒤 return 키워드로 f-string을 반환합니다.",
      "hint_en": "Use strip on line 2 and return on line 3.",
      "templateCode": "def format_id(raw, tag=\"USER\"):\n    clean = raw.§§§§§()\n    §§§§§§ f\"{tag}-{clean}\"\ns = input()\nprint(format_id(s))",
      "targetCode": "def format_id(raw, tag=\"USER\"):\n    clean = raw.strip()\n    return f\"{tag}-{clean}\"\ns = input()\nprint(format_id(s))",
      "testCases": [
        {
          "id": 1,
          "input": "  kim01  ",
          "expectedOutput": "USER-kim01"
        },
        {
          "id": 2,
          "input": " lee99 ",
          "expectedOutput": "USER-lee99"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "기준값 이상인 원소의 개수와 합계를 다중 반환하고, 호출 시 기준값을 8로 키워드 전달하도록 빈칸을 채워보세요. (출력 예: 3 38)",
      "prompt_en": "Return the count and sum variables as a tuple and pass 8 to the cutoff keyword parameter.",
      "hint_ko": "함수 끝에서 cnt, total을 반환하고 호출할 때는 cut=8 키워드 인자를 전달합니다.",
      "hint_en": "Return cnt, total and pass cut=8 in stats(..., cut=8).",
      "templateCode": "def stats(nums, cut=10):\n    cnt = 0\n    total = 0\n    for x in nums:\n        if x >= cut:\n            cnt += 1\n            total += x\n    return §§§, §§§§§\nc, s = stats([5, 10, 20, 8], §§§=8)\nprint(c, s)",
      "targetCode": "def stats(nums, cut=10):\n    cnt = 0\n    total = 0\n    for x in nums:\n        if x >= cut:\n            cnt += 1\n            total += x\n    return cnt, total\nc, s = stats([5, 10, 20, 8], cut=8)\nprint(c, s)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 38"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "품절 집합에 있거나 메뉴판에 없으면 값 없음 상수를 반환하고, 아래에서 반환값 없음 여부를 확인하도록 두 빈칸을 채워보세요.",
      "prompt_en": "Return the null value constant for unavailable items and check identity with it below.",
      "hint_ko": "조회할 수 없을 때는 return None을 실행하고, 반환값 검사는 res is None으로 확인합니다.",
      "hint_en": "Write None in the first blank and is in the second blank.",
      "templateCode": "def safe_price(menu, sold_out, item):\n    if item in sold_out or item not in menu:\n        return §§§§\n    return menu[item]\nm = {\"tea\": 3000, \"cake\": 5000}\nout = {\"cake\"}\nres = safe_price(m, out, \"cake\")\nprint(res §§ None, safe_price(m, out, \"tea\"))",
      "targetCode": "def safe_price(menu, sold_out, item):\n    if item in sold_out or item not in menu:\n        return None\n    return menu[item]\nm = {\"tea\": 3000, \"cake\": 5000}\nout = {\"cake\"}\nres = safe_price(m, out, \"cake\")\nprint(res is None, safe_price(m, out, \"tea\"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True 3000"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "시간과 분을 반환하지 않고 출력만 하여 다중 언패킹 대입에서 에러가 발생했습니다. 두 값을 반환하도록 수정해보세요.",
      "prompt_en": "Fix the TypeError in tuple unpacking caused by printing hours and minutes instead of returning them.",
      "hint_ko": "h, m = split_time(135)가 두 값을 받으려면 print(...) 대신 return mins // 60, mins % 60이어야 합니다.",
      "hint_en": "Replace print(mins // 60, mins % 60) with return mins // 60, mins % 60.",
      "templateCode": "def split_time(mins):\n    print(mins // 60, mins % 60)\nh, m = split_time(135)\nprint(f\"{h}h {m}m\")",
      "targetCode": "def split_time(mins):\n    return mins // 60, mins % 60\nh, m = split_time(135)\nprint(f\"{h}h {m}m\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2h 15m"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "함수 안에서 딕셔너리의 키와 값을 동시에 꺼내려다 언패킹 에러가 발생했습니다. 올바르게 순회하도록 고쳐보세요.",
      "prompt_en": "Fix the ValueError when unpacking key-value pairs from dictionary board inside sum_over.",
      "hint_ko": "딕셔너리에서 키와 값을 쌍으로 순회하려면 board 뒤에 키-값 쌍 조회 메서드를 호출해야 합니다.",
      "hint_en": "Call board.items() in the for loop header.",
      "templateCode": "def sum_over(board, cut=80):\n    total = 0\n    for k, v in board:\n        if v >= cut and k != \"\":\n            total += v\n    return total\nprint(sum_over({\"A\": 90, \"B\": 70, \"C\": 85}))",
      "targetCode": "def sum_over(board, cut=80):\n    total = 0\n    for k, v in board.items():\n        if v >= cut and k != \"\":\n            total += v\n    return total\nprint(sum_over({\"A\": 90, \"B\": 70, \"C\": 85}))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "175"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "첫 번째 원소만 검사한 뒤 곧바로 함수가 종료되어 뒤쪽 짝수를 찾지 못하는 들여쓰기 버그를 수정해보세요.",
      "prompt_en": "Fix the indentation bug that causes first_even to exit on the very first odd number.",
      "hint_ko": "리스트 전체를 다 확인한 뒤에도 짝수가 없을 때만 종료되도록 마지막 반환문을 for문 바깥으로 내어쓰세요.",
      "hint_en": "Dedent return None by 4 spaces so it runs only after the for loop finishes.",
      "templateCode": "def first_even(nums):\n    for x in nums:\n        if x % 2 == 0:\n            return x\n        return None\nprint(first_even([3, 7, 8, 10]))",
      "targetCode": "def first_even(nums):\n    for x in nums:\n        if x % 2 == 0:\n            return x\n    return None\nprint(first_even([3, 7, 8, 10]))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "8"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "하한값 보정 함수와 정수 입력 코드 아래에 한 줄을 추가하여 변수 n을 기본 하한값으로 보정한 결과를 출력해보세요.",
      "prompt_en": "Add one line below n = int(input()) to call clamp_min(n) with its default floor and print the result.",
      "hint_ko": "두 번째 인자를 생략한 채 print(clamp_min(n))을 작성해 반환값을 출력합니다.",
      "hint_en": "Write print(clamp_min(n)) on the last line.",
      "templateCode": "def clamp_min(val, floor=0):\n    if val < floor:\n        return floor\n    return val\nn = int(input())\n§§§§§§§§§§§§§§§§§§§",
      "targetCode": "def clamp_min(val, floor=0):\n    if val < floor:\n        return floor\n    return val\nn = int(input())\nprint(clamp_min(n))",
      "testCases": [
        {
          "id": 1,
          "input": "-15",
          "expectedOutput": "0"
        },
        {
          "id": 2,
          "input": "25",
          "expectedOutput": "25"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "2로 나누는 단계를 세는 함수와 입력 코드 아래에 한 줄을 추가하여 입력 변수 num의 단계 수를 출력해보세요.",
      "prompt_en": "Add one line below num = int(input()) to print the step count returned by count_steps(num).",
      "hint_ko": "count_steps(num)이 반환하는 정수 결과를 print() 안에 넣어 출력하세요.",
      "hint_en": "Write print(count_steps(num)) on the last line.",
      "templateCode": "def count_steps(n):\n    steps = 0\n    while n > 1:\n        n = n // 2\n        steps += 1\n    return steps\nnum = int(input())\n§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "def count_steps(n):\n    steps = 0\n    while n > 1:\n        n = n // 2\n        steps += 1\n    return steps\nnum = int(input())\nprint(count_steps(num))",
      "testCases": [
        {
          "id": 1,
          "input": "16",
          "expectedOutput": "4"
        },
        {
          "id": 2,
          "input": "9",
          "expectedOutput": "3"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "리스트 정렬, 기본값 매개변수, 지역변수가 결합된 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "Select the output of the following code combining list sorting, default arguments, and local scope.",
      "hint_ko": "정렬된 [4, 12, 19]에서 19 - 4 + 5 = 20을 반환하며, 바깥 변수 gap = 100은 그대로 유지됩니다.",
      "hint_en": "19 - 4 + 5 returns 20, while the outer variable gap stays 100.",
      "targetCode": "def top_gap(nums, bonus=5):\n    arr = []\n    for x in nums:\n        arr.append(x)\n    arr.sort()\n    gap = arr[-1] - arr[0] + bonus\n    return gap\ngap = 100\nprint(top_gap([12, 4, 19]), gap)",
      "choices": [
        "15 100",
        "20 20",
        "15 20",
        "20 100"
      ],
      "correctChoiceIndex": 3,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "20 100"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "집합(set)으로 중복을 걸러내며 다중 반환하는 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "Select the exact output of the following function using a set and tuple-unpacking return.",
      "hint_ko": "중복을 제외한 숫자는 4, 7, 3으로 총 3개이며, 세 숫자의 합계는 4 + 7 + 3 = 14입니다.",
      "hint_en": "Unique numbers seen are 4, 7, and 3 (count 3, sum 14), printing N:3 S:14.",
      "targetCode": "def unique_sum(nums):\n    seen = set()\n    total = 0\n    for x in nums:\n        if x not in seen:\n            seen.add(x)\n            total += x\n    return len(seen), total\ncnt, s = unique_sum([4, 7, 4, 3, 7])\nprint(f\"N:{cnt} S:{s}\")",
      "choices": [
        "N:3 S:14",
        "N:5 S:25",
        "N:3 S:25",
        "N:4 S:14"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "N:3 S:14"
        }
      ]
    }
  ]
};
