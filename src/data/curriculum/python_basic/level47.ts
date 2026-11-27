import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_47: PracticeRound = {
  "id": "py-basic-r47",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 47,
  "title_ko": "숫자 리스트 필수 집계(sum(), max(), min())와 기본 정렬(.sort())",
  "title_en": "List Aggregations (sum, max, min) & In-Place .sort()",
  "description_ko": "내장 함수 sum(), max(), min()으로 숫자 리스트를 한 번에 집계하고, .sort()로 오름차순·내림차순 정렬하는 법을 익힙니다.",
  "description_en": "Aggregate numeric lists with sum(), max(), and min(), and sort lists in place using .sort() and reverse=True.",
  "totalQuestions": 15,
  "unlockedBlocks": [
    "comment",
    "print",
    "variable",
    "input",
    "type",
    "if",
    "for_range",
    "range",
    "for_in",
    "while",
    "break",
    "continue",
    "list",
    "iter",
    "method",
    "math"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 숫자 리스트의 전체 합계와 실수 평균을 차례로 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the code that computes and prints the total sum and floating-point average of nums.",
      "hint_ko": "sum()은 숫자 리스트의 모든 요소를 더해주며, len()으로 나누면 평균이 됩니다.",
      "hint_en": "sum() totals all numbers in the list, and dividing by len() gives the average.",
      "targetCode": "nums = [70, 80, 90]\nprint(sum(nums))\nprint(sum(nums) / len(nums))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "240\n80.0"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 숫자 리스트 prices의 전체 합계를 구해 출력해보세요.",
      "prompt_en": "[Fill Blank] Complete the function call to print the total sum of prices.",
      "hint_ko": "리스트의 모든 숫자를 한 번에 더해주는 내장 함수를 적으세요.",
      "hint_en": "Write the built-in function that returns the sum of a list.",
      "templateCode": "prices = [1200, 800, 500]\nprint(\"Total:\", §§§§(prices))",
      "targetCode": "prices = [1200, 800, 500]\nprint(\"Total:\", sum(prices))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Total: 2500"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 숫자 리스트의 최댓값과 최솟값, 그리고 두 값의 차이를 차례로 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the code that prints the maximum and minimum of nums, followed by their difference.",
      "hint_ko": "max()는 가장 큰 수를, min()은 가장 작은 수를 즉시 찾아 반환합니다.",
      "hint_en": "max() returns the largest value and min() returns the smallest value.",
      "targetCode": "nums = [15, 50, 25, 40]\nprint(max(nums), min(nums))\nprint(max(nums) - min(nums))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "50 15\n35"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 리스트 pts에서 가장 큰 값과 가장 작은 값의 차이를 구해 출력해보세요.",
      "prompt_en": "[Fill Blank] Complete the expression to compute the difference between the largest and smallest values in pts.",
      "hint_ko": "리스트에서 최댓값을 구하는 내장 함수를 빈칸에 적으세요.",
      "hint_en": "Write the built-in function that finds the maximum value.",
      "templateCode": "pts = [12, 45, 30]\ngap = §§§§(pts) - min(pts)\nprint(\"Gap:\", gap)",
      "targetCode": "pts = [12, 45, 30]\ngap = max(pts) - min(pts)\nprint(\"Gap:\", gap)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Gap: 33"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 숫자 리스트를 오름차순으로 정렬해 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the code that sorts nums in ascending order in place and prints the list.",
      "hint_ko": ".sort()는 원본 리스트 자체의 순서를 직접 바꾸며 반환값은 없습니다.",
      "hint_en": ".sort() mutates the list in place in ascending order and returns None.",
      "targetCode": "nums = [30, 10, 40, 20]\nnums.sort()\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 20, 30, 40]"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 리스트 data를 오름차순으로 제자리 정렬한 뒤 출력해보세요.",
      "prompt_en": "[Fill Blank] Call the in-place sorting method on data and print the sorted list.",
      "hint_ko": "리스트를 오름차순으로 정렬하는 메서드를 입력하세요.",
      "hint_en": "Type the method that sorts a list in place.",
      "templateCode": "data = [9, 2, 7, 4]\ndata.§§§§§()\nprint(data)",
      "targetCode": "data = [9, 2, 7, 4]\ndata.sort()\nprint(data)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[2, 4, 7, 9]"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 점수 리스트를 내림차순으로 정렬한 뒤 상위 3개 점수만 잘라내어 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the code that sorts scores in descending order and prints the top three scores.",
      "hint_ko": "reverse=True 옵션을 주면 큰 값부터 앞으로 오도록 내림차순 정렬됩니다.",
      "hint_en": "Passing reverse=True sorts the list in descending order from largest to smallest.",
      "targetCode": "scores = [75, 95, 60, 85, 90]\nscores.sort(reverse=True)\nprint(scores[:3])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[95, 90, 85]"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 리스트 ranks를 큰 수부터 내림차순으로 정렬해 출력해보세요.",
      "prompt_en": "[Fill Blank] Complete the option value to sort ranks in descending order.",
      "hint_ko": "역순 정렬 옵션을 켜는 불리언 참 값을 첫 글자 대문자로 적으세요.",
      "hint_en": "Write the capitalized boolean literal for true.",
      "templateCode": "ranks = [40, 90, 70]\nranks.sort(reverse=§§§§§)\nprint(ranks)",
      "targetCode": "ranks = [40, 90, 70]\nranks.sort(reverse=True)\nprint(ranks)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[90, 70, 40]"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 점수 리스트를 내림차순 정렬해 상위 2개 점수의 총합과 정수 평균을 출력하도록 코드를 완성해보세요.",
      "prompt_en": "[Fill Blank] Complete the code to sort scores in descending order and print the sum and integer average of the top two scores.",
      "hint_ko": "리스트 정렬 메서드(sort)와 합계 내장 함수(sum)를 차례로 채워보세요.",
      "hint_en": "Fill in the sort method, sum function, and length function in order.",
      "templateCode": "scores = [70, 95, 85, 60]\nscores.§§§§§(reverse=True)\ntop2 = scores[:2]\nprint(§§§§(top2), sum(top2) // len(top2))",
      "targetCode": "scores = [70, 95, 85, 60]\nscores.sort(reverse=True)\ntop2 = scores[:2]\nprint(sum(top2), sum(top2) // len(top2))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "180 90"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 리스트 nums에 새 값을 추가한 뒤 오름차순으로 정렬해 출력하도록 버그를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the bug so nums is sorted in ascending order and printed.",
      "hint_ko": "리스트 원본을 오름차순으로 정렬하는 메서드는 sort()입니다.",
      "hint_en": "Call .sort() on its own line first, then pass nums to print() on the next line.",
      "templateCode": "nums = [30, 10, 20]\nnums.append(5)\nnums.sums()\nprint(nums)",
      "targetCode": "nums = [30, 10, 20]\nnums.append(5)\nnums.sort()\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[5, 10, 20, 30]"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 리스트 pts의 최댓값과 최솟값이 각 라벨에 맞게 출력되도록 코드의 버그를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the swapped aggregation functions so the maximum and minimum values match their labels.",
      "hint_ko": "각 라벨에 맞도록 최댓값 함수와 최솟값 함수의 위치를 서로 바꾸세요.",
      "hint_en": "Match the maximum function to the Max label and the minimum function to the Min label.",
      "templateCode": "pts = [15, 50, 25]\nprint(\"Max:\", min(pts), \"Min:\", max(pts))",
      "targetCode": "pts = [15, 50, 25]\nprint(\"Max:\", max(pts), \"Min:\", min(pts))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Max: 50 Min: 15"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 리스트 s의 전체 합계에서 최댓값과 최솟값을 뺀 결과를 출력하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the line that prints the total sum of s minus its maximum and minimum values.",
      "hint_ko": "print() 안에서 합계 함수 결과에 최댓값 함수와 최솟값 함수 결과를 차례로 빼세요.",
      "hint_en": "Inside print(), subtract max(s) and min(s) from sum(s).",
      "templateCode": "s = [10, 50, 20, 30, 40]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "s = [10, 50, 20, 30, 40]\nprint(sum(s) - max(s) - min(s))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "90"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 리스트 nums를 오름차순으로 원본 정렬하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the line that sorts nums in ascending order in place.",
      "hint_ko": "리스트 변수 뒤에 점(.)을 찍고 오름차순 정렬 메서드를 호출하세요.",
      "hint_en": "Call the in-place sort method on nums.",
      "templateCode": "nums = [40, 10, 30, 20]\n§§§§§§§§§§§§\nprint(nums[0], nums[-1])",
      "targetCode": "nums = [40, 10, 30, 20]\nnums.sort()\nprint(nums[0], nums[-1])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "10 40"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 내림차순 정렬과 끝 요소 제거, 리스트 집계 코드의 실행 결과를 예측해보세요.",
      "prompt_en": "[Predict Output] Select the exact output printed when the following Python code runs.",
      "hint_ko": "내림차순 정렬([40, 30, 20, 10]) 후 .pop()으로 맨 끝의 10이 제거된 뒤 남은 리스트의 최솟값과 합계를 구해보세요.",
      "hint_en": "After descending sort, .pop() removes 10 from the end; check the remaining min and sum.",
      "targetCode": "nums = [20, 40, 10, 30]\nnums.sort(reverse=True)\nnums.pop()\nprint(min(nums), sum(nums))",
      "choices": [
        "20 90",
        "10 60",
        "20 100",
        "10 90"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "20 90"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 오름차순 정렬과 조건부 끝 요소 제거 반복 코드의 실행 결과를 예측해보세요.",
      "prompt_en": "[Predict Output] Select the exact output printed when the following Python code runs.",
      "hint_ko": "오름차순 정렬된 리스트에서 합계가 60 이하가 될 때까지 가장 큰 끝 요소를 하나씩 꺼낸 결과를 추적해보세요.",
      "hint_en": "After ascending sort, pop the largest elements from the end until sum(bag) is 60 or less.",
      "targetCode": "bag = [40, 10, 30, 25]\nbag.sort()\nwhile sum(bag) > 60:\n    bag.pop()\nprint(bag, sum(bag))",
      "choices": [
        "[10, 25] 35",
        "[10, 25, 30] 65",
        "[40, 10] 50",
        "[25, 30] 55"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 25] 35"
        }
      ]
    }
  ]
};
