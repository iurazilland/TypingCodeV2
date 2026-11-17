import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_42: PracticeRound = {
  "id": "py-basic-r42",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 42,
  "title_ko": "42레벨: 숫자 리스트 필수 집계와 기본 정렬",
  "title_en": "Level 42: Essential List Aggregations & Basic sort()",
  "description_ko": "sum(), max(), min()으로 숫자 리스트를 집계하고 .sort() 및 reverse=True 옵션으로 원본 정렬을 수행합니다.",
  "description_en": "Aggregate numeric lists with sum(), max(), and min(), and sort lists in place with .sort() and reverse=True.",
  "totalQuestions": 15,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "type",
    "math",
    "method",
    "if",
    "for_in",
    "while"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] sum(), max(), min()으로 숫자 리스트의 합계, 최댓값, 최솟값을 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the code that prints sum(nums), max(nums), and min(nums).",
      "hint_ko": "내장 집계 함수 sum(), max(), min()에 리스트를 전달해 즉시 통계값을 얻을 수 있습니다.",
      "hint_en": "Built-in functions sum(), max(), and min() accept a numeric list directly.",
      "targetCode": "nums = [10, 40, 20, 30]\nprint(sum(nums))\nprint(max(nums), min(nums))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "100\n40 10"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] pts 리스트의 최댓값과 최솟값 차이(gap) 및 전체 합계를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the aggregation functions to compute gap and print Sum and Gap.",
      "hint_ko": "최댓값을 구하는 max 함수와 전체 합계를 구하는 sum 함수를 차례로 채우세요.",
      "hint_en": "Use max for the largest value and sum for the total.",
      "templateCode": "pts = [15, 50, 25]\ngap = §§§(pts) - min(pts)\nprint(f\"Sum:{§§§(pts)},Gap:{gap}\")",
      "targetCode": "pts = [15, 50, 25]\ngap = max(pts) - min(pts)\nprint(f\"Sum:{sum(pts)},Gap:{gap}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Sum:90,Gap:35"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] .sort() 메서드로 숫자 리스트를 오름차순 정렬해 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Sort nums in ascending order in place using .sort() and print it.",
      "hint_ko": ".sort()는 원본 리스트의 순서를 직접 바꾸므로 단독으로 호출한 뒤 리스트를 출력합니다.",
      "hint_en": "Call .sort() on its own line before printing the mutated list.",
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
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 메서드와 옵션 값을 채워 scores 리스트를 큰 점수부터 내림차순으로 정렬해보세요.",
      "prompt_en": "[Fill Blank] Fill in the method and reverse option value to sort scores descending.",
      "hint_ko": "정렬 메서드 sort와 역순 옵션을 켜는 논리값 True를 차례로 채우세요.",
      "hint_en": "Call sort and set reverse=True for descending order.",
      "templateCode": "scores = [75, 95, 80]\nscores.§§§§(reverse=§§§§)\nprint(scores)",
      "targetCode": "scores = [75, 95, 80]\nscores.sort(reverse=True)\nprint(scores)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[95, 80, 75]"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 입력 점수를 리스트에 모으고 sum(scores) / len(scores)로 평균을 구하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Collect input integers into scores and compute sum(scores) / len(scores).",
      "hint_ko": "실수 나눗셈 연산자(/)로 합계를 개수로 나누면 실수 평균값이 계산됩니다.",
      "hint_en": "Dividing sum(scores) by len(scores) with / yields the float average.",
      "targetCode": "scores = []\nfor s in input().split():\n    scores.append(int(s))\navg = sum(scores) / len(scores)\nprint(f\"Avg:{avg}\")",
      "testCases": [
        {
          "id": 1,
          "input": "70 80 90",
          "expectedOutput": "Avg:80.0"
        },
        {
          "id": 2,
          "input": "60 90",
          "expectedOutput": "Avg:75.0"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 입력된 정수 리스트의 실수 평균(avg)과 최댓값을 계산해 출력해보세요.",
      "prompt_en": "[Fill Blank] Compute the float average and maximum of nums and print Max and Avg.",
      "hint_ko": "합계를 구하는 sum 함수와 최댓값을 구하는 max 함수를 차례로 채우세요.",
      "hint_en": "Use sum(nums) for the numerator and max(nums) in the output string.",
      "templateCode": "nums = []\nfor s in input().split():\n    nums.append(int(s))\navg = §§§(nums) / len(nums)\nprint(f\"Max:{§§§(nums)},Avg:{avg}\")",
      "targetCode": "nums = []\nfor s in input().split():\n    nums.append(int(s))\navg = sum(nums) / len(nums)\nprint(f\"Max:{max(nums)},Avg:{avg}\")",
      "testCases": [
        {
          "id": 1,
          "input": "10 30 20",
          "expectedOutput": "Max:30,Avg:20.0"
        },
        {
          "id": 2,
          "input": "20 31",
          "expectedOutput": "Max:31,Avg:25.5"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 입력 점수를 오름차순 정렬한 뒤 .pop(0)과 .pop()으로 양끝 극단값을 빼고 합산하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Sort scores ascending, pop both extremes with .pop(0) and .pop(), and sum the rest.",
      "hint_ko": "정렬 후 맨 앞 최솟값(.pop(0))과 맨 뒤 최댓값(.pop())을 제거하고 남은 요소를 합산합니다.",
      "hint_en": "Sort first, then pop the first and last elements before summing the remaining scores.",
      "targetCode": "scores = []\nfor s in input().split():\n    scores.append(int(s))\nscores.sort()\nscores.pop(0)\nscores.pop()\nprint(f\"TrimSum:{sum(scores)}\")",
      "testCases": [
        {
          "id": 1,
          "input": "50 90 80 100 70",
          "expectedOutput": "TrimSum:240"
        },
        {
          "id": 2,
          "input": "10 20 30 40",
          "expectedOutput": "TrimSum:50"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 입력 점수를 내림차순 정렬한 뒤 상위 2개 요소와 그 합계를 출력해보세요.",
      "prompt_en": "[Fill Blank] Sort input integers descending, slice top 2 into top2, and print Top2 and Sum.",
      "hint_ko": "정렬 메서드 sort와 합계 함수 sum을 차례로 채우세요.",
      "hint_en": "Call sort(reverse=True) and total top2 with sum(top2).",
      "templateCode": "ranks = []\nfor s in input().split():\n    ranks.append(int(s))\nranks.§§§§(reverse=True)\ntop2 = ranks[:2]\nprint(f\"Top2:{top2},Sum:{§§§(top2)}\")",
      "targetCode": "ranks = []\nfor s in input().split():\n    ranks.append(int(s))\nranks.sort(reverse=True)\ntop2 = ranks[:2]\nprint(f\"Top2:{top2},Sum:{sum(top2)}\")",
      "testCases": [
        {
          "id": 1,
          "input": "70 90 60 80",
          "expectedOutput": "Top2:[90, 80],Sum:170"
        },
        {
          "id": 2,
          "input": "50 100 75",
          "expectedOutput": "Top2:[100, 75],Sum:175"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 오름차순 정렬 후 while sum(bag) > 80: 동안 가장 무거운 끝 요소를 꺼내는 블록을 조립해보세요.",
      "prompt_en": "[Block] Sort bag ascending and pop the heaviest item while sum(bag) > 80.",
      "hint_ko": "오름차순 정렬 후에는 가장 큰 값이 맨 끝에 있으므로 .pop()으로 무거운 값부터 제거됩니다.",
      "hint_en": "After ascending sort, the largest item is at the end, so .pop() removes the heaviest item.",
      "targetCode": "bag = [50, 20, 40, 30]\nbag.sort()\nwhile sum(bag) > 80:\n    bag.pop()\nprint(f\"Bag:{bag},Sum:{sum(bag)}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Bag:[20, 30],Sum:50"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 오름차순 정렬된 bag의 총합이 60을 초과하는 동안 마지막 요소를 꺼내 줄여보세요.",
      "prompt_en": "[Fill Blank] While the sum of sorted bag exceeds 60, pop the last item and print the result.",
      "hint_ko": "합계를 구하는 sum 함수와 마지막 요소를 꺼내는 pop 메서드를 차례로 채우세요.",
      "hint_en": "Use sum(bag) in the while condition and bag.pop() inside the loop.",
      "templateCode": "bag = [40, 10, 30, 25]\nbag.sort()\nwhile §§§(bag) > 60:\n    bag.§§§()\nprint(f\"Bag:{bag},Sum:{sum(bag)}\")",
      "targetCode": "bag = [40, 10, 30, 25]\nbag.sort()\nwhile sum(bag) > 60:\n    bag.pop()\nprint(f\"Bag:{bag},Sum:{sum(bag)}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Bag:[10, 25],Sum:35"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 최댓값(Max)과 최솟값(Min) 라벨에 반대 함수가 호출된 버그를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the swapped aggregation functions so Max prints max(pts) and Min prints min(pts).",
      "hint_ko": "Max 자리에는 max(pts)를, Min 자리에는 min(pts)를 넣어야 합니다.",
      "hint_en": "Swap min(pts) and max(pts) to match their labels.",
      "templateCode": "pts = [15, 50, 25]\nprint(f\"Max:{min(pts)},Min:{max(pts)}\")",
      "targetCode": "pts = [15, 50, 25]\nprint(f\"Max:{max(pts)},Min:{min(pts)}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Max:50,Min:15"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 오름차순 정렬 후 가장 작은 첫 점수를 빼려다 두 번째 점수가 빠지는 인덱스 버그를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the .pop() index after ascending sort so the lowest score at index 0 is removed.",
      "hint_ko": "오름차순 정렬 후 최솟값은 0번 인덱스에 있으므로 scores.pop(0)으로 수정하세요.",
      "hint_en": "Change scores.pop(1) to scores.pop(0) to remove the minimum value.",
      "templateCode": "scores = [50, 90, 70, 80]\nscores.sort()\nscores.pop(1)\nprint(scores)",
      "targetCode": "scores = [50, 90, 70, 80]\nscores.sort()\nscores.pop(0)\nprint(scores)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[70, 80, 90]"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 리스트 nums를 내림차순(reverse=True)으로 원본 정렬하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the line that sorts nums in descending order in place.",
      "hint_ko": "nums.sort(reverse=True) 형태로 내림차순 정렬 메서드를 호출하세요.",
      "hint_en": "Write nums.sort(reverse=True) on the second line.",
      "templateCode": "nums = [12, 45, 8, 35]\n§§§§§§§§§§§§§§§§§§§§§§§\nprint(f\"Top:{nums[0]},Sum:{sum(nums)}\")",
      "targetCode": "nums = [12, 45, 8, 35]\nnums.sort(reverse=True)\nprint(f\"Top:{nums[0]},Sum:{sum(nums)}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Top:45,Sum:100"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] scores의 합계를 개수로 나누어 실수 평균을 avg에 저장하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the line that computes sum(scores) / len(scores) into avg.",
      "hint_ko": "avg = sum(scores) / len(scores) 형태로 평균을 구해 대입하세요.",
      "hint_en": "Write avg = sum(scores) / len(scores) on the second line.",
      "templateCode": "scores = [70, 80, 90]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(f\"Avg:{avg}\")",
      "targetCode": "scores = [70, 80, 90]\navg = sum(scores) / len(scores)\nprint(f\"Avg:{avg}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Avg:80.0"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 내림차순 정렬, .pop(), 평균 계산 코드의 실행 결과를 예측해보세요.",
      "prompt_en": "[Predict Output] Select the exact output printed when the following Python code runs.",
      "hint_ko": "내림차순 정렬 후 맨 끝에서 빠지는 숫자를 확인하고, 남은 세 숫자의 최솟값과 실수 평균을 구해보세요.",
      "hint_en": "Check which value is popped at the end after descending sort, then find min(nums) and avg.",
      "targetCode": "nums = [30, 50, 10, 40]\nnums.sort(reverse=True)\nnums.pop()\navg = sum(nums) / len(nums)\nprint(f\"{min(nums)}:{avg}\")",
      "choices": [
        "30:40.0",
        "10:30.0",
        "30:40",
        "10:32.5"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "30:40.0"
        }
      ]
    }
  ]
};
