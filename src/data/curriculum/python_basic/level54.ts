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
  "unlockedBlocks": [],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 입력 문자열의 양끝 공백을 제거하고 태그 형식 문자열을 반환해보세요.",
      "prompt_en": "[Fill Blank] Trim outer whitespace from raw and return the formatted f-string.",
      "hint_ko": "첫 빈칸에는 문자열 앞뒤 여백을 없애는 메서드를, 둘째 빈칸에는 완성된 서식 문자열을 호출한 곳으로 돌려주는 키워드를 넣으세요.",
      "hint_en": "First call the string method that removes leading and trailing spaces, then use the keyword that sends the formatted text back to the caller.",
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
      "prompt_ko": "[빈칸 채우기] 기준값 이상인 원소의 개수와 합계를 다중 반환하고 기준값 8을 키워드로 전달해보세요.",
      "prompt_en": "[Fill Blank] Return the count and sum variables as a tuple and pass 8 to the cutoff keyword parameter.",
      "hint_ko": "반복문에서 집계한 합계 변수를 두 번째 반환값으로 적고, 호출부에서는 두 번째 매개변수 이름으로 기준값을 지정하세요.",
      "hint_en": "Send back the accumulated sum variable in the tuple return, and pass 8 using the threshold parameter's name.",
      "templateCode": "def stats(nums, cut=10):\n    cnt = 0\n    total = 0\n    for x in nums:\n        if x >= cut:\n            cnt += 1\n            total += x\n    return cnt, §§§§§\nc, s = stats([5, 10, 20, 8], §§§=8)\nprint(c, s)",
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
      "prompt_ko": "[빈칸 채우기] 품절이거나 메뉴에 없으면 None을 반환하고 아래에서 반환값 없음 여부를 확인해보세요.",
      "prompt_en": "[Fill Blank] Return the null value constant for unavailable items and check identity with it below.",
      "hint_ko": "조회할 수 없는 품목일 때는 '값 없음'을 뜻하는 상수를 돌려주고, 마지막 줄에서는 객체 동일성 비교 연산자로 확인하세요.",
      "hint_en": "For unavailable items, send back Python's null constant, then verify object identity using the two-letter identity operator below.",
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
      "prompt_ko": "[틀린 곳 수정] 시간과 분을 반환하지 않고 출력만 하여 언패킹 에러가 발생한 줄을 return으로 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the TypeError in tuple unpacking caused by printing hours and minutes instead of returning them.",
      "hint_ko": "함수 안에서 화면에 출력만 하면 호출부의 다중 언패킹 변수에 아무 값도 전달되지 않습니다. 두 계산값을 return으로 돌려주세요.",
      "hint_en": "Printing inside the function leaves nothing to unpack at the call site; send both calculated values back with return.",
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
      "prompt_ko": "[틀린 곳 수정] 딕셔너리 .items() 순회에서 두 반복 변수를 k, k로 똑같이 적은 버그를 k, v로 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the loop variable bug in for k, k in board.items(): by changing the second variable to v.",
      "hint_ko": "키와 값을 각각 다루려면 for문 언패킹 변수를 k, k가 아니라 k, v로 다르게 지정해야 합니다.",
      "hint_en": "Unpack each key-value pair into k, v rather than k, k.",
      "templateCode": "def sum_over(board, cut=80):\n    total = 0\n    for k, k in board.items():\n        if v >= cut and k != \"\":\n            total += v\n    return total\nprint(sum_over({\"A\": 90, \"B\": 70, \"C\": 85}))",
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
      "prompt_ko": "[틀린 곳 수정] 첫 번째 짝수를 찾아야 하는데 홀수 조건(!= 0)으로 잘못 작성된 비교 연산자를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the condition inside first_even so it returns the first even number instead of the first odd number.",
      "hint_ko": "2로 나눈 나머지가 0과 같을 때(== 0)가 짝수이므로 != 연산자를 ==로 수정하세요.",
      "hint_en": "Change x % 2 != 0 to x % 2 == 0 so the function returns on the first even number.",
      "templateCode": "def first_even(nums):\n    for x in nums:\n        if x % 2 != 0:\n            return x\n    return None\nprint(first_even([3, 7, 8, 10]))",
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
      "prompt_ko": "[한 줄 완성] 변수 n을 기본 하한값으로 보정하는 clamp_min(n)을 호출해 ans에 저장해보세요.",
      "prompt_en": "[Complete Line] Call clamp_min(n) with its default floor and store the result in ans.",
      "hint_ko": "ans = clamp_min(n) 형태로 함수를 호출해 반환값을 변수 ans에 대입하세요.",
      "hint_en": "Write ans = clamp_min(n).",
      "templateCode": "def clamp_min(val, floor=0):\n    if val < floor:\n        return floor\n    return val\nn = int(input())\n§§§§§§§§§§§§§§§§§§\nprint(ans)",
      "targetCode": "def clamp_min(val, floor=0):\n    if val < floor:\n        return floor\n    return val\nn = int(input())\nans = clamp_min(n)\nprint(ans)",
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
      "prompt_ko": "[한 줄 완성] while문이 끝난 뒤 누적된 단계 수 steps를 반환하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the indented line that returns steps from count_steps(n).",
      "hint_ko": "return 키워드 뒤에 지역변수 steps를 적어 호출한 곳으로 돌려주세요.",
      "hint_en": "Write return steps at the end of the function body.",
      "templateCode": "def count_steps(n):\n    steps = 0\n    while n > 1:\n        n = n // 2\n        steps += 1\n    §§§§§§§§§§§§\nnum = int(input())\nprint(count_steps(num))",
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
      "prompt_ko": "[출력 결과 예측] 리스트 정렬, 기본값 매개변수, 지역변수가 결합된 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the output of the following code combining list sorting, default arguments, and local scope.",
      "hint_ko": "복사된 리스트가 오름차순 정렬된 뒤 끝 원소와 첫 원소의 차이에 기본 보너스가 더해진 값과, 바깥 변수가 그대로 유지되는지 차례로 추적하세요.",
      "hint_en": "Sort the copied list to compute the difference between its largest and smallest elements plus the default bonus, and check whether the outer variable changes.",
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
      "prompt_ko": "[출력 결과 예측] 집합(set)으로 중복을 걸러내며 다중 반환하는 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following function using a set and tuple-unpacking return.",
      "hint_ko": "리스트를 앞에서부터 순회하며 처음 등장한 숫자만 집합에 기록되고 합계에 더해질 때, 최종 집합 크기와 누적 합계를 순서대로 계산해 보세요.",
      "hint_en": "Trace the loop keeping only the first occurrence of each number in the set, then determine the final set size and running total.",
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
