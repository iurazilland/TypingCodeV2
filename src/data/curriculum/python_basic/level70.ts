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
  "totalQuestions": 15,
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 리스트의 .index(\"B\")와 .count(\"A\")로 위치 번호와 등장 횟수를 출력해보세요.",
      "prompt_en": "[Block] Use .index(\"B\") and .count(\"A\") to print the first index of \"B\" and count of \"A\".",
      "hint_ko": "\"B\"는 1번 인덱스에 위치하고, \"A\"는 리스트 안에 총 3번 등장합니다.",
      "hint_en": "\"B\" sits at index 1, and \"A\" appears a total of 3 times in the list.",
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
      "prompt_ko": "[빈칸 채우기] 첫 빈칸에는 9의 첫 인덱스를 찾는 메서드를, 둘째 빈칸에는 4의 개수를 세는 메서드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the method to find the index of 9 and the method to count occurrences of 4.",
      "hint_ko": "첫 빈칸은 위치 번호를 찾는 index 메서드를, 둘째 빈칸은 개수를 세는 count 메서드를 사용합니다.",
      "hint_en": "Use index in the first blank and count in the second blank.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 리스트의 .reverse() 메서드로 현재 원소들의 앞뒤 순서를 정반대로 뒤집어보세요.",
      "prompt_en": "[Block] Use the list .reverse() method to flip the order of elements in place.",
      "hint_ko": ".reverse()는 원본 리스트 자체를 직접 변경하므로 호출 후 리스트 변수를 출력하면 뒤집힌 순서를 확인할 수 있습니다.",
      "hint_en": "Because .reverse() mutates the list in place, print the list variable itself after calling the method.",
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
      "prompt_ko": "[빈칸 채우기] 리스트 순서를 거꾸로 뒤집는 메서드 이름을 채워 뒤집힌 첫 요소와 전체 리스트를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the method name that reverses log in place, then print log[0] and log.",
      "hint_ko": "현재 순서를 정반대 방향으로 뒤집는 7글자 메서드 reverse를 호출하세요.",
      "hint_en": "Call the 7-letter in-place method reverse.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 내장 함수 sorted(raw)로 원본을 보존한 채 오름차순 정렬된 새 리스트를 만들어보세요.",
      "prompt_en": "[Block] Use sorted(raw) to create a new ascending list while keeping raw unchanged.",
      "hint_ko": "원본을 직접 바꾸는 .sort() 메서드와 달리 sorted()는 정렬된 새 리스트를 반환하므로 변수에 대입해 사용합니다.",
      "hint_en": "Unlike the in-place .sort() method, sorted() returns a new sorted list that you assign to a variable.",
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
      "prompt_ko": "[빈칸 채우기] 원본 scores를 보존한 채 내림차순 정렬한 새 리스트를 top에 담도록 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the sorting function and keyword option to create a descending copy in top.",
      "hint_ko": "사본 정렬 내장 함수 sorted를 쓰고, 역순 정렬 옵션 reverse를 True로 지정하세요.",
      "hint_en": "Use the built-in function sorted and set the keyword option reverse=True.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] .index()를 try - except ValueError로 감싸 없는 좌석일 때 -1을 출력해보세요.",
      "prompt_en": "[Block] Wrap seats.index(code) in try - except ValueError to print -1 when missing.",
      "hint_ko": "-1을 반환하는 문자열 .find()와 달리 리스트 .index()는 없을 때 ValueError를 발생시킵니다.",
      "hint_en": "Unlike string .find() which returns -1, list .index() raises ValueError when an item is not found.",
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
      "prompt_ko": "[빈칸 채우기] 입력 상품의 인덱스를 찾아 출력하되 없으면 예외를 잡아 -1을 출력하도록 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Find the index of target in items or catch ValueError to print -1.",
      "hint_ko": "위치를 찾는 5글자 메서드 index와 없는 값일 때 발생하는 예외 ValueError를 채우세요.",
      "hint_en": "Call index on line 4 and catch ValueError on line 6.",
      "templateCode": "items = [\"pen\", \"book\", \"note\"]\ntarget = input()\ntry:\n    pos = items.§§§§§(target)\n    print(pos)\nexcept §§§§§§§§§§:\n    print(-1)",
      "targetCode": "items = [\"pen\", \"book\", \"note\"]\ntarget = input()\ntry:\n    pos = items.index(target)\n    print(pos)\nexcept ValueError:\n    print(-1)",
      "testCases": [
        {
          "id": 1,
          "input": "book",
          "expectedOutput": "1"
        },
        {
          "id": 2,
          "input": "desk",
          "expectedOutput": "-1"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 함수 안에서 sorted(nums, reverse=True)로 원본 변형 없이 가장 큰 두 수의 합을 구해보세요.",
      "prompt_en": "[Block] Use sorted(nums, reverse=True) inside top_two_sum to sum the two largest numbers without mutating data.",
      "hint_ko": "내림차순으로 정렬된 ranked의 0번과 1번 인덱스가 가장 큰 두 수이며, 바깥의 data[0]은 원래 첫 값을 유지합니다.",
      "hint_en": "Indices 0 and 1 of ranked hold the two largest numbers, while data[0] keeps its original value.",
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
      "prompt_ko": "[빈칸 채우기] 내림차순 정렬 사본으로 최고점을 찾고 최고점이 몇 개 있는지 반환하도록 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Sort scores descending with sorted() to find the highest score and return its count.",
      "hint_ko": "첫 빈칸에는 사본 정렬 함수 sorted를, 둘째 빈칸에는 등장 횟수를 세는 count 메서드를 적으세요.",
      "hint_en": "Call sorted on line 2 and count on line 4.",
      "templateCode": "def count_top(scores):\n    ordered = §§§§§§(scores, reverse=True)\n    best = ordered[0]\n    return scores.§§§§§(best)\n\nprint(count_top([80, 95, 95, 70]))",
      "targetCode": "def count_top(scores):\n    ordered = sorted(scores, reverse=True)\n    best = ordered[0]\n    return scores.count(best)\n\nprint(count_top([80, 95, 95, 70]))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 리스트에서 10의 등장 횟수(3)를 세려다 첫 위치 번호를 구하는 메서드를 쓴 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the method call so cnt counts how many times 10 appears in nums instead of finding its index.",
      "hint_ko": "특정 값의 위치 번호를 찾는 .index(10) 대신 등장 개수를 세는 .count(10)으로 수정하세요.",
      "hint_en": "Replace .index(10) with .count(10) to count occurrences of 10.",
      "templateCode": "nums = [5, 10, 15, 10, 10]\ncnt = nums.index(10)\nprint(cnt)",
      "targetCode": "nums = [5, 10, 15, 10, 10]\ncnt = nums.count(10)\nprint(cnt)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 오름차순 정렬된 리스트(3개 원소)에서 가장 큰 점수(95)를 출력하도록 잘못된 인덱스를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the index on ascending sorted list ordered so the largest score (95) at index 2 is printed.",
      "hint_ko": "sorted(scores)는 작은 값부터 큰 값 순서로 정렬하므로 3개 원소 중 가장 큰 값은 2번 인덱스에 있습니다.",
      "hint_en": "In a 3-element ascending list, the largest element is at index 2, not index 0.",
      "templateCode": "scores = [70, 95, 80]\nordered = sorted(scores)\nprint(ordered[0])",
      "targetCode": "scores = [70, 95, 80]\nordered = sorted(scores)\nprint(ordered[2])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "95"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 집합 uniq를 내림차순 정렬 리스트로 만들어 변수 res에 저장하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Sort uniq in descending order with sorted(uniq, reverse=True) and assign it to res.",
      "hint_ko": "res = sorted(uniq, reverse=True) 형태로 내림차순 정렬 사본을 변수 res에 대입하세요.",
      "hint_en": "Write res = sorted(uniq, reverse=True).",
      "templateCode": "words = input().split()\nuniq = set(words)\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(res)",
      "targetCode": "words = input().split()\nuniq = set(words)\nres = sorted(uniq, reverse=True)\nprint(res)",
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
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 리스트 nums의 앞뒤 순서를 제자리에서 뒤집는(.reverse) 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Reverse the list nums in place using .reverse().",
      "hint_ko": "nums.reverse() 형태로 리스트 역순 메서드를 호출하세요.",
      "hint_en": "Call nums.reverse() to flip the list order in place.",
      "templateCode": "nums = [10, 20, 30]\n§§§§§§§§§§§§§§\nprint(nums)",
      "targetCode": "nums = [10, 20, 30]\nnums.reverse()\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[30, 20, 10]"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 sorted(), .reverse(), .index(), .count() 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following Python code.",
      "hint_ko": "오름차순 사본 [10, 10, 20, 30]에서 20의 위치 번호와 뒤집힌 원본 리스트의 첫 요소를 각각 확인하세요.",
      "hint_en": "In copy_a ([10, 10, 20, 30]), 20 sits at index 2; after nums.reverse(), nums[0] is 10.",
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
