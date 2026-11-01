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
  "totalQuestions": 13,
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
      "prompt_ko": "nums = [10, 40, 20, 30]의 전체 합계를 첫 줄에, 최댓값과 최솟값을 둘째 줄에 출력해보세요.",
      "prompt_en": "Print the sum of nums = [10, 40, 20, 30] on line 1, and its max and min on line 2.",
      "hint_ko": "sum(nums)로 합계를 구하고 max(nums), min(nums)로 가장 큰 값과 가장 작은 값을 출력하세요.",
      "hint_en": "Use print(sum(nums)) and print(max(nums), min(nums)).",
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
      "prompt_ko": "집계 함수 빈칸을 채워 pts 리스트의 최댓값과 최솟값 차이(gap) 및 전체 합계를 출력해보세요. (출력 예: Sum:90,Gap:35)",
      "prompt_en": "Fill in the aggregation functions to compute max minus min (gap) and print Sum and Gap.",
      "hint_ko": "가장 큰 값은 max, 가장 작은 값은 min, 모든 요소의 합은 sum 함수로 구합니다.",
      "hint_en": "Use max(pts), min(pts), and sum(pts).",
      "templateCode": "pts = [15, 50, 25]\ngap = §§§(pts) - §§§(pts)\nprint(f\"Sum:{§§§(pts)},Gap:{gap}\")",
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
      "prompt_ko": "nums = [30, 10, 40, 20]을 작은 수부터 큰 수 순서(오름차순)로 정렬하고 출력해보세요.",
      "prompt_en": "Sort nums = [30, 10, 40, 20] in ascending order in place and print nums.",
      "hint_ko": "nums.sort()를 호출해 원본 리스트를 오름차순으로 정렬한 뒤 print(nums)를 실행하세요.",
      "hint_en": "Call nums.sort() and then print(nums).",
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
      "prompt_ko": "메서드와 정렬 옵션을 채워 scores 리스트를 큰 점수부터 내림차순으로 정렬해 출력해보세요.",
      "prompt_en": "Fill in the method and keyword option to sort scores in descending order and print it.",
      "hint_ko": "원본 정렬 메서드 sort의 괄호 안에 역순 옵션을 참(대문자 시작 논리값)으로 지정하세요.",
      "hint_en": "Call scores.sort(reverse=True) to sort from largest to smallest.",
      "templateCode": "scores = [75, 95, 80]\nscores.§§§§(§§§§§§§=§§§§)\nprint(scores)",
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
      "prompt_ko": "scores = [70, 80, 90]의 합계를 요소 개수로 나눈 실수 평균 avg를 구해 출력해보세요. (출력 예: Avg:80.0)",
      "prompt_en": "Compute the float average avg of scores = [70, 80, 90] using sum and len, then print Avg:80.0.",
      "hint_ko": "avg = sum(scores) / len(scores)로 평균을 계산한 뒤 f\"Avg:{avg}\"를 출력하세요.",
      "hint_en": "Set avg = sum(scores) / len(scores) and print f\"Avg:{avg}\".",
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
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "입력된 정수 리스트의 실수 평균(avg)과 최댓값을 계산해 형식에 맞게 출력해보세요. (출력 예: Max:30,Avg:20.0)",
      "prompt_en": "Compute the float average and maximum of the parsed integer list and print Max and Avg.",
      "hint_ko": "평균은 전체 합계를 리스트 길이로 나누어 구하며, 가장 큰 값은 최댓값 집계 함수로 찾습니다.",
      "hint_en": "Divide sum(nums) by len(nums) for average, and use max(nums) for the maximum.",
      "templateCode": "nums = []\nfor s in input().split():\n    nums.append(int(s))\navg = §§§(nums) / §§§(nums)\nprint(f\"Max:{§§§(nums)},Avg:{avg}\")",
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
      "prompt_ko": "scores = [50, 90, 80, 100, 70]을 오름차순 정렬한 뒤 최솟값(맨 앞)과 최댓값(맨 뒤)을 꺼내 제외하고 합계를 출력해보세요. (출력 예: TrimSum:240)",
      "prompt_en": "Sort scores ascending, pop the lowest (index 0) and highest (last) items, and print TrimSum:240.",
      "hint_ko": "scores.sort() 후 scores.pop(0)과 scores.pop()을 차례로 실행하고 sum(scores)를 출력하세요.",
      "hint_en": "Call scores.sort(), scores.pop(0), and scores.pop(), then print TrimSum with sum(scores).",
      "targetCode": "scores = [50, 90, 80, 100, 70]\nscores.sort()\nscores.pop(0)\nscores.pop()\nprint(f\"TrimSum:{sum(scores)}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "TrimSum:240"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "입력 점수들을 내림차순 정렬한 뒤 상위 2개 요소를 슬라이싱해 리스트와 합계를 출력해보세요. (출력 예: Top2:[90, 80],Sum:170)",
      "prompt_en": "Sort input integers descending, slice the top 2 into top2, and print Top2 and Sum.",
      "hint_ko": "정렬 메서드로 내림차순 정렬한 뒤 처음부터 2번 인덱스 직전까지 자르고 합계 함수로 더하세요.",
      "hint_en": "Use ranks.sort(reverse=True), slice ranks[:2], and compute sum(top2).",
      "templateCode": "ranks = []\nfor s in input().split():\n    ranks.append(int(s))\nranks.§§§§(reverse=True)\ntop2 = ranks[§§]\nprint(f\"Top2:{top2},Sum:{§§§(top2)}\")",
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
      "prompt_ko": "입력 점수들의 평균 avg가 90 이상이면 \"A\", 80 이상이면 \"B\", 그 외에는 \"C\"를 grade에 담아 평균과 출력해보세요. (출력 예: B:85.0)",
      "prompt_en": "Compute avg of input integers, set grade to \"A\" (>=90), \"B\" (>=80), or \"C\", and print grade:avg.",
      "hint_ko": "if avg >= 90:, elif avg >= 80:, else: 분기로 grade를 정한 뒤 f\"{grade}:{avg}\"를 출력하세요.",
      "hint_en": "Use if / elif / else on avg = sum(nums) / len(nums), then print f\"{grade}:{avg}\".",
      "targetCode": "nums = []\nfor s in input().split():\n    nums.append(int(s))\navg = sum(nums) / len(nums)\nif avg >= 90:\n    grade = \"A\"\nelif avg >= 80:\n    grade = \"B\"\nelse:\n    grade = \"C\"\nprint(f\"{grade}:{avg}\")",
      "testCases": [
        {
          "id": 1,
          "input": "80 90",
          "expectedOutput": "B:85.0"
        },
        {
          "id": 2,
          "input": "95 90 85",
          "expectedOutput": "A:90.0"
        },
        {
          "id": 3,
          "input": "70 75",
          "expectedOutput": "C:72.5"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "무게를 오름차순 정렬한 뒤 총합이 60을 초과하는 동안 가장 무거운 마지막 요소를 꺼내 줄이고 결과를 출력해보세요. (출력 예: Bag:[10, 25],Sum:35)",
      "prompt_en": "Sort bag ascending, pop the heaviest last item while total weight exceeds 60, and print Bag and Sum.",
      "hint_ko": "오름차순 정렬 후 합계가 60보다 큰 동안 반복하며 맨 끝 요소를 하나씩 꺼내 제거합니다.",
      "hint_en": "Call bag.sort(), loop while sum(bag) > 60:, and call bag.pop().",
      "templateCode": "bag = [40, 10, 30, 25]\nbag.§§§§()\n§§§§§ §§§(bag) > 60:\n    bag.§§§()\nprint(f\"Bag:{bag},Sum:{sum(bag)}\")",
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
      "prompt_ko": "원본 정렬 메서드의 호출 결과를 변수에 다시 대입해 리스트가 사라지는 버그를 고쳐 [10, 20, 30, 40]을 출력해보세요.",
      "prompt_en": "Fix the bug caused by reassigning the return value of in-place sorting so [10, 20, 30, 40] prints.",
      "hint_ko": "원본 정렬 메서드는 리스트 자체를 직접 바꾸므로 변수에 대입하지 않고 단독 문장으로 호출해야 합니다.",
      "hint_en": "Call the sort method on its own line without assigning its result back to nums.",
      "templateCode": "nums = [40, 10, 30, 20]\nnums = nums.sort()\nprint(nums)",
      "targetCode": "nums = [40, 10, 30, 20]\nnums.sort()\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 20, 30, 40]"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "내림차순 정렬 코드 아래에 한 줄을 추가하여 가장 큰 첫 요소와 전체 합계를 형식에 맞게 출력해보세요. (출력 예: Top:45,Sum:100)",
      "prompt_en": "Add one line below the descending sort to print the largest first item and total sum (e.g., Top:45,Sum:100).",
      "hint_ko": "셋째 줄에 print(f\"Top:{nums[0]},Sum:{sum(nums)}\")를 작성해보세요.",
      "hint_en": "Write print(f\"Top:{nums[0]},Sum:{sum(nums)}\") on line 3.",
      "templateCode": "nums = [12, 45, 8, 35]\nnums.sort(reverse=True)\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
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
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 파이썬 코드를 실행했을 때 화면에 출력될 올바른 결과를 선택해보세요.",
      "prompt_en": "Select the exact output printed when the following Python code runs.",
      "hint_ko": "내림차순 정렬된 [50, 40, 30, 10]에서 마지막 10이 빠져 [50, 40, 30]이 되므로 최솟값은 30, 평균은 40.0입니다.",
      "hint_en": "After descending sort to [50, 40, 30, 10] and pop(), [50, 40, 30] has min 30 and avg 40.0.",
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
