import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_70: PracticeRound = {
  "id": "py-basic-r70",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 70,
  "title_ko": "70레벨: 리스트 탐색·역순과 sorted() 사본 정렬",
  "title_en": "Level 70: List index/count/reverse & sorted() Copy Sorting",
  "description_ko": "값의 위치와 개수를 찾는 .index()·.count(), 순서를 뒤집는 .reverse(), 원본을 보존한 채 정렬된 새 리스트를 만드는 sorted()를 익힙니다.",
  "description_en": "Learn .index(), .count(), .reverse(), and non-mutating copy sorting with sorted() and reverse=True.",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "method",
    "type",
    "math",
    "sorted",
    "if",
    "for_in",
    "while",
    "try",
    "def"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "리스트 votes에서 \"B\"의 위치(.index)와 \"A\"의 개수(.count)를 공백으로 나란히 출력해보세요.",
      "prompt_en": "Print the index of \"B\" and the count of \"A\" in votes separated by a space.",
      "hint_ko": "votes.index(\"B\")는 첫 \"B\"의 인덱스 1을, votes.count(\"A\")는 \"A\"가 등장한 횟수 3을 반환합니다.",
      "hint_en": "votes.index(\"B\") returns 1 and votes.count(\"A\") returns 3.",
      "targetCode": "votes = [\"A\", \"B\", \"A\", \"C\", \"A\"]\nprint(votes.index(\"B\"), votes.count(\"A\"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1 3"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "첫 빈칸에는 숫자 9의 첫 인덱스를 찾는 메서드를, 둘째 빈칸에는 숫자 4의 등장 횟수를 세는 메서드를 채워보세요.",
      "prompt_en": "Fill in the method to find the index of 9 and the method to count occurrences of 4.",
      "hint_ko": "값의 위치 탐색은 .index(9), 특정 값의 개수 세기는 .count(4)를 사용합니다.",
      "hint_en": "Use .index(9) to locate 9 and .count(4) to count how many times 4 appears.",
      "templateCode": "nums = [4, 7, 4, 9, 4]\npos = nums.§§§§§(9)\ncnt = nums.§§§§§(4)\nprint(pos, cnt)",
      "targetCode": "nums = [4, 7, 4, 9, 4]\npos = nums.index(9)\ncnt = nums.count(4)\nprint(pos, cnt)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 3"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "리스트 steps의 현재 순서를 .reverse()로 제자리에서 거꾸로 뒤집고 출력해보세요.",
      "prompt_en": "Reverse the order of steps in place using .reverse() and print steps.",
      "hint_ko": ".reverse()는 크기순 정렬이 아니라 현재 들어 있는 순서를 앞뒤로 뒤집어 원본 리스트를 바꿉니다.",
      "hint_en": ".reverse() flips the current element order in place without sorting.",
      "targetCode": "steps = [\"first\", \"second\", \"third\"]\nsteps.reverse()\nprint(steps)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['third', 'second', 'first']"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 리스트 순서를 거꾸로 뒤집는 메서드 이름을 채워 뒤집힌 첫 요소와 전체 리스트를 출력해보세요.",
      "prompt_en": "Fill in the method name that reverses log in place, then print log[0] and log.",
      "hint_ko": "log.reverse()를 호출하면 [10, 50, 20]이 [20, 50, 10]으로 바뀝니다.",
      "hint_en": "Calling log.reverse() mutates [10, 50, 20] into [20, 50, 10].",
      "templateCode": "log = [10, 50, 20]\nlog.§§§§§§§()\nprint(log[0], log)",
      "targetCode": "log = [10, 50, 20]\nlog.reverse()\nprint(log[0], log)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "20 [20, 50, 10]"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "sorted(raw)로 정렬된 새 사본을 ordered에 저장한 뒤, 원본 raw와 사본 ordered를 각각 한 줄씩 출력해보세요.",
      "prompt_en": "Store a sorted copy of raw in ordered with sorted(raw), then print raw and ordered on separate lines.",
      "hint_ko": "원본을 직접 바꾸는 .sort()와 달리 내장 함수 sorted(raw)는 원본을 그대로 두고 정렬된 새 리스트를 반환합니다.",
      "hint_en": "Unlike in-place .sort(), sorted(raw) leaves raw unchanged and returns a new sorted list.",
      "targetCode": "raw = [40, 10, 30]\nordered = sorted(raw)\nprint(raw)\nprint(ordered)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[40, 10, 30]\n[10, 30, 40]"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "원본 scores를 보존한 채 내림차순으로 정렬한 새 리스트를 top에 담도록 함수명과 옵션 이름을 빈칸에 채워보세요.",
      "prompt_en": "Fill in the built-in sorting function and keyword option to create a descending copy in top.",
      "hint_ko": "내림차순 사본 정렬은 sorted(scores, reverse=True) 형태로 작성합니다.",
      "hint_en": "Use sorted(scores, reverse=True) to return a descending copy without mutating scores.",
      "templateCode": "scores = [75, 92, 84]\ntop = §§§§§§(scores, §§§§§§§=True)\nprint(scores[0], top[0])",
      "targetCode": "scores = [75, 92, 84]\ntop = sorted(scores, reverse=True)\nprint(scores[0], top[0])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "75 92"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "입력받은 좌석 코드의 위치를 seats.index(code)로 출력하되, 없으면 ValueError를 잡아 -1을 출력해보세요.",
      "prompt_en": "Print seats.index(code) for input code, or catch ValueError and print -1 if not found.",
      "hint_ko": ".index()는 찾는 값이 없을 때 ValueError를 발생시키므로 try-except ValueError로 안전하게 처리합니다.",
      "hint_en": ".index() raises ValueError when the item is missing, so wrap it in try-except ValueError.",
      "targetCode": "seats = [\"A1\", \"A2\", \"A3\"]\ncode = input()\ntry:\n    idx = seats.index(code)\n    print(idx)\nexcept ValueError:\n    print(-1)",
      "testCases": [
        {
          "id": 1,
          "input": "A2",
          "expectedOutput": "1"
        },
        {
          "id": 2,
          "input": "B9",
          "expectedOutput": "-1"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "집합 tags를 오름차순 리스트 사본으로 변환해 개수와 리스트를 지정 형식으로 출력해보세요. (출력 예: 3:['ai', 'go', 'py'])",
      "prompt_en": "Convert the set tags into an ascending list copy and print its count and contents.",
      "hint_ko": "순서가 없는 집합(set)에 sorted(tags)를 쓰면 오름차순으로 정렬된 리스트가 반환됩니다.",
      "hint_en": "Passing a set to sorted(tags) returns a deterministically ordered list.",
      "templateCode": "tags = {\"go\", \"py\", \"ai\"}\ntags.add(\"py\")\nclean = §§§§§§(tags)\nprint(f\"{len(clean)}:{clean}\")",
      "targetCode": "tags = {\"go\", \"py\", \"ai\"}\ntags.add(\"py\")\nclean = sorted(tags)\nprint(f\"{len(clean)}:{clean}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3:['ai', 'go', 'py']"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "원본 리스트를 바꾸지 않고 가장 큰 두 수의 합을 반환하는 top_two_sum(nums) 함수를 완성해 결과와 data[0]을 출력해보세요.",
      "prompt_en": "Complete top_two_sum(nums) using sorted(nums, reverse=True) without mutating data, then print sum and data[0].",
      "hint_ko": "함수 안에서 sorted(nums, reverse=True)를 쓰면 호출한 쪽의 원본 data[0](15)이 안전하게 보존됩니다.",
      "hint_en": "Using sorted(nums, reverse=True) inside the function keeps the caller list data intact.",
      "targetCode": "def top_two_sum(nums):\n    ranked = sorted(nums, reverse=True)\n    return ranked[0] + ranked[1]\n\ndata = [15, 40, 25, 30]\nprint(top_two_sum(data), data[0])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "70 15"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "marks 안의 \"O\" 개수만큼 while문을 반복해 1.5점씩 누적하고 보너스를 출력해보세요. (출력 예: Bonus:4.5)",
      "prompt_en": "Fill in the list counting method so the while loop adds 1.5 for each \"O\" and prints Bonus:4.5.",
      "hint_ko": "리스트에서 \"O\"가 몇 번 나왔는지는 marks.count(\"O\")로 구할 수 있습니다.",
      "hint_en": "Use marks.count(\"O\") to get the number of \"O\" items in marks.",
      "templateCode": "marks = [\"O\", \"X\", \"O\", \"O\", \"X\"]\ni = 0\nbonus = 0.0\nwhile i < marks.§§§§§(\"O\"):\n    bonus += 1.5\n    i += 1\nprint(f\"Bonus:{bonus}\")",
      "targetCode": "marks = [\"O\", \"X\", \"O\", \"O\", \"X\"]\ni = 0\nbonus = 0.0\nwhile i < marks.count(\"O\"):\n    bonus += 1.5\n    i += 1\nprint(f\"Bonus:{bonus}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Bonus:4.5"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "원본 raw까지 바뀌고 ordered에 None이 대입되는 버그를 고쳐, 원본을 보존한 정렬 사본이 저장되도록 수정해보세요.",
      "prompt_en": "Fix the bug where raw.sort() mutates raw and assigns None to ordered instead of a sorted copy.",
      "hint_ko": "raw.sort()는 반환값이 None입니다. 원본을 유지하고 새 리스트를 받으려면 sorted(raw)를 대입하세요.",
      "hint_en": "raw.sort() returns None in place; use sorted(raw) to keep raw intact and get a sorted list.",
      "templateCode": "raw = [30, 10, 20]\nordered = raw.sort()\nprint(raw, ordered)",
      "targetCode": "raw = [30, 10, 20]\nordered = sorted(raw)\nprint(raw, ordered)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[30, 10, 20] [10, 20, 30]"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "입력 단어들의 중복을 집합으로 제거한 코드 아래에 한 줄을 추가하여 내림차순 정렬 리스트를 출력해보세요.",
      "prompt_en": "Add one line below the set deduplication to print a descending sorted list of unique words.",
      "hint_ko": "마지막 줄에 print(sorted(uniq, reverse=True))를 작성하세요.",
      "hint_en": "Write print(sorted(uniq, reverse=True)) on the last line.",
      "templateCode": "words = input().split()\nuniq = set(words)\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "words = input().split()\nuniq = set(words)\nprint(sorted(uniq, reverse=True))",
      "testCases": [
        {
          "id": 1,
          "input": "cat bat cat dog",
          "expectedOutput": "['dog', 'cat', 'bat']"
        },
        {
          "id": 2,
          "input": "b a c a",
          "expectedOutput": "['c', 'b', 'a']"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 파이썬 코드를 실행했을 때 출력되는 세 숫자를 정확히 선택해보세요.",
      "prompt_en": "Select the exact output of the following Python code.",
      "hint_ko": "copy_a는 [10, 10, 20, 30]이므로 20의 인덱스는 2이고, nums는 뒤집혀 [10, 20, 10, 30]이 되므로 첫 값은 10, 10의 개수는 2입니다.",
      "hint_en": "copy_a is [10, 10, 20, 30] (index of 20 is 2), while reversed nums starts with 10 and has two 10s.",
      "targetCode": "nums = [30, 10, 20, 10]\ncopy_a = sorted(nums)\nnums.reverse()\nprint(nums[0], copy_a.index(20), nums.count(10))",
      "choices": [
        "10 2 2",
        "30 2 2",
        "10 1 2",
        "10 2 1"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "10 2 2"
        }
      ]
    }
  ]
};
