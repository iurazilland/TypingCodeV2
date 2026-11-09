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
      "hint_ko": "총합을 뜻하는 영단어 함수와, '최댓값(maximum)'·'최솟값(minimum)'의 앞 세 글자를 딴 두 내장 함수를 활용해 각각 출력하세요.",
      "hint_en": "Use the built-in total function on line 1, and the 3-letter functions from 'maximum' and 'minimum' on line 2.",
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
      "hint_ko": "'최댓값(maximum)'과 '최솟값(minimum)'의 앞 세 글자를 딴 함수로 차이를 구하고, '합계(sum)'를 뜻하는 세 글자 함수로 총합을 출력하세요.",
      "hint_en": "Subtract the 3-letter 'minimum' function from the 3-letter 'maximum' function, and use the 3-letter 'summation' function for the total.",
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
      "hint_ko": "순서대로 '정렬하다'라는 뜻의 네 글자 리스트 메서드를 단독으로 호출해 원본 리스트 순서를 바꾼 뒤 리스트를 출력하세요.",
      "hint_en": "Invoke the 4-letter in-place ordering method on the list first, then print the updated list on the next line.",
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
      "hint_ko": "네 글자 '정렬' 메서드 괄호 안에, 순서를 '뒤집다·역순으로 하다'라는 뜻의 일곱 글자 옵션 이름을 적고 참 논리값을 지정하세요.",
      "hint_en": "Call the 4-letter ordering method and set the 7-letter keyword option meaning 'flip backward' to the capitalized boolean truth value.",
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
      "hint_ko": "리스트의 전체 합계 함수 결과를 요소 개수 함수 결과로 실수 나눗셈(/)하면 평균이 구해집니다.",
      "hint_en": "Divide the total of the list elements by the count of elements using / to compute the floating-point average.",
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
      "hint_ko": "'합계(sum)'를 뜻하는 세 글자 함수를 '길이(length)' 앞 세 글자 함수로 나누어 평균을 구하고, '최댓값(maximum)' 앞 세 글자 함수를 출력에 넣으세요.",
      "hint_en": "Divide the 3-letter 'summation' function by the 3-letter 'length' function, and display the 3-letter 'maximum' function.",
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
      "hint_ko": "오름차순 정렬을 마친 뒤 맨 앞(0번)과 맨 끝 요소를 각각 꺼내 제거하고, 남은 리스트의 합계를 포맷팅해 출력하세요.",
      "hint_en": "Order the list ascending first, extract both the front element and the back element, then format the total of the remaining scores.",
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
      "hint_ko": "네 글자 '정렬' 메서드로 큰 수부터 줄 세운 뒤, 시작 번호를 생략한 슬라이싱으로 앞 2개를 자르고 세 글자 합계 함수로 더하세요.",
      "hint_en": "Call the 4-letter ordering method, slice the first two items by omitting the start index, and total them with the 3-letter summation function.",
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
      "hint_ko": "합계와 길이 함수로 실수 평균을 먼저 구한 뒤, 높은 점수 기준부터 다중 조건문으로 등급 변수를 정해 함께 출력하세요.",
      "hint_en": "Calculate the float average from total and length first, then assign the letter grade through descending conditional checks.",
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
      "hint_ko": "네 글자 메서드로 오름차순 정렬한 뒤, 세 글자 합계 함수 결과가 60보다 큰 '동안' 맨 뒤의 가장 무거운 요소를 '톡 꺼내어' 줄이세요.",
      "hint_en": "Order ascending with the 4-letter method, then repeat 'as long as' the 3-letter total exceeds 60 by extracting the last item with the 3-letter removal method.",
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
      "hint_ko": "리스트의 원본 정렬 메서드는 리스트 내부만 직접 바꿀 뿐 결과값으로는 빈 값을 돌려줍니다. 변수에 다시 대입하지 않도록 수정하세요.",
      "hint_en": "The in-place list ordering method mutates the list directly and returns nothing; remove the variable reassignment so the list isn't overwritten.",
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
      "hint_ko": "내림차순 정렬로 맨 앞(0번)에 온 가장 큰 요소와 리스트 전체 합계를 예시 라벨 형식에 맞춰 포맷 문자열로 출력해보세요.",
      "hint_en": "Print a formatted string showing the first element (now the largest after descending order) and the total of all elements.",
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
      "hint_ko": "내림차순으로 정렬했을 때 맨 끝에 놓인 어떤 숫자가 빠져나가는지 확인하고, 남은 세 숫자의 최솟값과 실수 나눗셈 평균(소수점 포함 여부 주의)을 구해보세요.",
      "hint_en": "Check which value sits at the end and gets removed after descending order, then find the smallest remaining number and the / float division result.",
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
