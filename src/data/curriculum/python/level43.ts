import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_43: PracticeRound = {
  "id": "py-basic-r43",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 43,
  "title_ko": "43레벨: 리스트와 for 반복문 순회",
  "title_en": "Level 43: Iterating Over Lists with for",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "method",
    "if",
    "for_in",
    "for_range",
    "range",
    "math"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "for 반복문으로 리스트 nums = [10, 20, 30]의 요소를 하나씩 줄바꿈하며 출력해보세요.",
      "prompt_en": "Use a for loop to print each element of nums = [10, 20, 30] on its own line.",
      "hint_ko": "for x in nums: 블록 안에 print(x) 블록을 넣으면 리스트 요소를 처음부터 끝까지 출력합니다.",
      "hint_en": "Place print(x) inside for x in nums: to print each item sequentially.",
      "targetCode": "nums = [10, 20, 30]\nfor x in nums:\n    print(x)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "10\n20\n30"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 langs 리스트의 문자열 요소를 처음부터 끝까지 한 줄씩 출력해보세요.",
      "prompt_en": "Fill in the blanks to iterate through langs and print each string on a new line.",
      "hint_ko": "리스트를 직접 순회할 때는 for 변수 in 리스트: 구문을 사용합니다.",
      "hint_en": "Use the for variable in list: syntax to loop over list elements directly.",
      "templateCode": "langs = [\"py\", \"js\", \"go\"]\n§§§ s §§ langs:\n    print(s)",
      "targetCode": "langs = [\"py\", \"js\", \"go\"]\nfor s in langs:\n    print(s)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "py\njs\ngo"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "리스트 nums = [10, 20, 30]을 순회하며 모든 요소를 total에 누적해 합계를 출력해보세요.",
      "prompt_en": "Loop over nums = [10, 20, 30], accumulate the sum in total, and print total.",
      "hint_ko": "total = 0을 먼저 선언하고, for x in nums: 안에서 total += x를 실행한 뒤 마지막에 print(total)을 호출하세요.",
      "hint_en": "Initialize total = 0, add total += x inside for x in nums:, then print(total) after the loop.",
      "targetCode": "nums = [10, 20, 30]\ntotal = 0\nfor x in nums:\n    total += x\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "60"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 prices 리스트의 모든 가격을 더한 총합(2500)을 출력해보세요.",
      "prompt_en": "Fill in the blanks to accumulate and print the total sum (2500) of prices.",
      "hint_ko": "누적 변수 total을 0으로 시작하고 반복문 안에서 total += p로 더해 나갑니다.",
      "hint_en": "Start total at 0 and add each price with total += p inside the loop.",
      "templateCode": "prices = [500, 1200, 800]\ntotal = §\nfor p in prices:\n    total §§ §\nprint(total)",
      "targetCode": "prices = [500, 1200, 800]\ntotal = 0\nfor p in prices:\n    total += p\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2500"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "scores = [70, 85, 90, 60]에서 80 이상인 점수만 passed 리스트에 모아 출력해보세요.",
      "prompt_en": "Filter scores >= 80 from scores = [70, 85, 90, 60] into passed and print passed.",
      "hint_ko": "빈 리스트 passed = []를 만들고, for x in scores: 안의 if x >= 80:에서 passed.append(x)를 호출하세요.",
      "hint_en": "Create passed = [], check if x >= 80: inside for x in scores:, call passed.append(x), then print(passed).",
      "targetCode": "scores = [70, 85, 90, 60]\npassed = []\nfor x in scores:\n    if x >= 80:\n        passed.append(x)\nprint(passed)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[85, 90]"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 nums 리스트에서 짝수만 골라 evens 리스트에 담아 출력해보세요.",
      "prompt_en": "Fill in the blanks to filter even numbers from nums into evens and print evens.",
      "hint_ko": "2로 나눈 나머지가 0(n % 2 == 0)일 때 evens.append(n)으로 추가합니다.",
      "hint_en": "Check n % 2 == 0 for even numbers and add matches with evens.append(n).",
      "templateCode": "nums = [3, 8, 5, 10]\nevens = list()\nfor n in nums:\n    if n § 2 == §:\n        evens.§§§§§§(n)\nprint(evens)",
      "targetCode": "nums = [3, 8, 5, 10]\nevens = list()\nfor n in nums:\n    if n % 2 == 0:\n        evens.append(n)\nprint(evens)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[8, 10]"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "range(len(items))를 사용해 items = [\"A\", \"B\", \"C\"]의 인덱스와 값을 함께 출력해보세요.",
      "prompt_en": "Use range(len(items)) to print each index and value of items = [\"A\", \"B\", \"C\"].",
      "hint_ko": "for i in range(len(items)): 안에서 print(i, items[i])를 실행하면 인덱스와 요소가 나란히 출력됩니다.",
      "hint_en": "Inside for i in range(len(items)):, run print(i, items[i]).",
      "targetCode": "items = [\"A\", \"B\", \"C\"]\nfor i in range(len(items)):\n    print(i, items[i])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "0 A\n1 B\n2 C"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 인덱스로 리스트를 순회하며 모든 요소에 5씩 더한 리스트를 출력해보세요.",
      "prompt_en": "Fill in the blanks to loop by index, add 5 to every element of nums, and print nums.",
      "hint_ko": "원본 리스트 요소를 직접 수정할 때는 range(len(nums))로 인덱스를 순회합니다.",
      "hint_en": "Use range(len(nums)) to iterate over valid indices and mutate nums[i].",
      "templateCode": "nums = [10, 20, 30]\nfor i in §§§§§(§§§(nums)):\n    nums[i] += 5\nprint(nums)",
      "targetCode": "nums = [10, 20, 30]\nfor i in range(len(nums)):\n    nums[i] += 5\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[15, 25, 35]"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "nums = [2, 4, 6]의 각 요소를 2배로 만든 값을 doubled 리스트에 담아 출력해보세요.",
      "prompt_en": "Multiply each element of nums = [2, 4, 6] by 2, store in doubled, and print doubled.",
      "hint_ko": "빈 리스트 doubled = []를 만들고 for x in nums: 안에서 doubled.append(x * 2)를 실행하세요.",
      "hint_en": "Initialize doubled = [], append x * 2 for each x in nums, then print(doubled).",
      "targetCode": "nums = [2, 4, 6]\ndoubled = []\nfor x in nums:\n    doubled.append(x * 2)\nprint(doubled)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[4, 8, 12]"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 각 변의 제곱 넓이를 areas 리스트에 순서대로 담아 출력해보세요.",
      "prompt_en": "Fill in the blanks to append the squared area of each side into areas and print areas.",
      "hint_ko": "반복문 안에서 s * s를 계산해 areas.append(s * s)로 추가하세요.",
      "hint_en": "Use areas.append(s * s) inside the loop to collect squared values.",
      "templateCode": "sides = [2, 3, 5]\nareas = list()\nfor s in sides:\n    areas.§§§§§§(s § s)\nprint(areas)",
      "targetCode": "sides = [2, 3, 5]\nareas = list()\nfor s in sides:\n    areas.append(s * s)\nprint(areas)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[4, 9, 25]"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "반복마다 리스트가 초기화되는 버그를 수정하여 [11, 21, 31]이 출력되도록 고쳐보세요.",
      "prompt_en": "Fix the bug where res resets every iteration so [11, 21, 31] is printed.",
      "hint_ko": "빈 리스트 선언이 for 반복문 안에 있으면 매번 새로 비워집니다. 반복문이 시작되기 전으로 위치를 옮겨보세요.",
      "hint_en": "Declaring res = list() inside the for loop resets it each turn. Move it above the loop.",
      "templateCode": "nums = [10, 20, 30]\nfor x in nums:\n    res = list()\n    res.append(x + 1)\nprint(res)",
      "targetCode": "nums = [10, 20, 30]\nres = list()\nfor x in nums:\n    res.append(x + 1)\nprint(res)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[11, 21, 31]"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "if 조건문 아래에 들여쓰기에 맞춰 한 줄을 추가하여 80 이상인 점수를 출력해보세요.",
      "prompt_en": "Add one indented line under the if statement to print scores that are 80 or above.",
      "hint_ko": "if s >= 80: 아래에 공백 8칸을 들여쓰고 print(s)를 작성하세요.",
      "hint_en": "Indent by 8 spaces under if s >= 80: and write print(s).",
      "templateCode": "scores = [65, 90, 82, 70]\nfor s in scores:\n    if s >= 80:\n        §§§§§§§§",
      "targetCode": "scores = [65, 90, 82, 70]\nfor s in scores:\n    if s >= 80:\n        print(s)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "90\n82"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 파이썬 코드를 실행했을 때 화면에 출력될 올바른 결과를 선택해보세요.",
      "prompt_en": "Select the exact output printed when the following Python code runs.",
      "hint_ko": "[3, 6, 9, 12] 중 5보다 큰 요소는 6, 9, 12로 총 3개이므로 cnt는 3이 됩니다.",
      "hint_en": "Among [3, 6, 9, 12], three numbers (6, 9, 12) satisfy n > 5, so cnt becomes 3.",
      "targetCode": "nums = [3, 6, 9, 12]\ncnt = 0\nfor n in nums:\n    if n > 5:\n        cnt += 1\nprint(cnt)",
      "choices": [
        "2",
        "4",
        "3",
        "27"
      ],
      "correctChoiceIndex": 2,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3"
        }
      ]
    }
  ]
};
