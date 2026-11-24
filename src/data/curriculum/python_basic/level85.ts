import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_85: PracticeRound = {
  "id": "py-basic-r85",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 85,
  "title_ko": "85레벨: 리스트 탐색(.index(), .count()), 뒤집기(.reverse())와 sorted() 사본 정렬",
  "title_en": "Level 85: List .index(), .count(), .reverse() & sorted() Copy Sorting",
  "description_ko": "값의 위치와 개수를 찾는 .index()·.count(), 순서를 반전하는 .reverse(), 원본을 보존하며 정렬하는 sorted()를 익힙니다.",
  "description_en": "Find positions and counts with .index() and .count(), flip order with .reverse(), and sort copies with sorted().",
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
    "tuple",
    "dict",
    "set",
    "iter",
    "method",
    "sorted",
    "def",
    "return",
    "class",
    "try"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] votes.index(\"B\")로 첫 등장 인덱스를 찾고 votes.count(\"A\")로 등장 횟수를 세어 출력해보세요.",
      "prompt_en": "[Block] Use votes.index(\"B\") and votes.count(\"A\") to print the index of \"B\" and count of \"A\".",
      "hint_ko": ".index(값)은 해당 값이 처음 등장하는 위치 번호를, .count(값)은 리스트 안의 등장 횟수를 반환합니다.",
      "hint_en": ".index(x) returns the first index of x, while .count(x) returns how many times x appears.",
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
      "prompt_ko": "[빈칸 채우기] 숫자 리스트에서 7이 몇 번 등장하는지 개수를 세어 출력하도록 메서드 이름을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the list method name to tally how many times 7 appears in nums.",
      "hint_ko": "특정 값의 등장 횟수를 세어 정수로 돌려주는 리스트 메서드를 호출하세요.",
      "hint_en": "Call the list method that tallies occurrences of a value.",
      "templateCode": "nums = [7, 2, 7, 9, 7]\nprint(nums.§§§§§§(7))",
      "targetCode": "nums = [7, 2, 7, 9, 7]\nprint(nums.count(7))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] steps.reverse()로 리스트의 현재 순서를 거꾸로 뒤집어 출력해보세요.",
      "prompt_en": "[Block] Call steps.reverse() to flip the list order in place and print steps.",
      "hint_ko": ".reverse()는 크기순 정렬이 아니라 현재 들어 있는 앞뒤 순서만 정반대로 뒤집으며 원본을 직접 바꿉니다.",
      "hint_en": ".reverse() reverses the current element order in place without sorting by value.",
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
      "prompt_ko": "[빈칸 채우기] 기록된 숫자 리스트의 현재 순서를 정반대로 뒤집도록 메서드 이름을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the method name that reverses the order of log in place.",
      "hint_ko": "원본 리스트의 앞뒤 순서를 거꾸로 뒤집는 메서드를 호출하세요.",
      "hint_en": "Call the method that reverses a list in place.",
      "templateCode": "log = [10, 50, 20]\nlog.§§§§§§§§()\nprint(log[0], log)",
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
      "prompt_ko": "[블록 조립] 내장 함수 sorted(raw)로 원본을 그대로 둔 채 오름차순 정렬된 새 리스트를 만들어 출력해보세요.",
      "prompt_en": "[Block] Use sorted(raw) to create a new sorted list while keeping raw unchanged.",
      "hint_ko": "원본을 직접 바꾸는 .sort() 메서드와 달리 내장 함수 sorted()는 원본을 건드리지 않고 정렬된 새 리스트를 반환합니다.",
      "hint_en": "Unlike in-place .sort(), the built-in function sorted() leaves the original unchanged and returns a new sorted list.",
      "targetCode": "raw = [40, 10, 30]\nordered = sorted(raw)\nprint(raw, ordered)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[40, 10, 30] [10, 30, 40]"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 원본 리스트는 그대로 보존하면서 오름차순으로 정렬한 새 리스트를 반환받도록 내장 함수를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the built-in function name that returns a new ascending-ordered duplicate of nums.",
      "hint_ko": "원본을 변경하지 않고 정렬된 사본 리스트를 만들어 돌려주는 내장 함수를 적으세요.",
      "hint_en": "Use the built-in function that returns a new ordered list.",
      "templateCode": "nums = [35, 12, 28]\nasc = §§§§§§§(nums)\nprint(nums[0], asc[0])",
      "targetCode": "nums = [35, 12, 28]\nasc = sorted(nums)\nprint(nums[0], asc[0])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "35 12"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] sorted(scores, reverse=True)로 내림차순 정렬된 새 리스트를 만들어 출력해보세요.",
      "prompt_en": "[Block] Use sorted(scores, reverse=True) to create a new list sorted in descending order.",
      "hint_ko": "sorted()는 두 번째 인자로 reverse=True를 주면 큰 값부터 작은 값 순서(내림차순)로 새 리스트를 만듭니다.",
      "hint_en": "Passing reverse=True to sorted() returns a new list sorted from largest to smallest.",
      "targetCode": "scores = [75, 92, 84]\ntop = sorted(scores, reverse=True)\nprint(top)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[92, 84, 75]"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 집합의 원소들을 큰 숫자부터 내림차순으로 정렬한 리스트로 만들도록 옵션 키워드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the keyword option name in sorted() to order the set elements from largest to smallest.",
      "hint_ko": "정렬 방향을 거꾸로(내림차순) 뒤집을 때 True로 설정하는 키워드 인자 이름을 적으세요.",
      "hint_en": "Write the keyword parameter name used to sort in descending order.",
      "templateCode": "uniq = {20, 50, 10, 40}\ndesc = sorted(uniq, §§§§§§§§=True)\nprint(desc)",
      "targetCode": "uniq = {20, 50, 10, 40}\ndesc = sorted(uniq, reverse=True)\nprint(desc)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[50, 40, 20, 10]"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 빈칸 2곳을 채워 최고점(95)의 위치 번호와 내림차순 정렬된 사본 리스트를 구해보세요.",
      "prompt_en": "[Fill Blank] Complete the position lookup method, occurrence tallying method, and non-mutating sort function.",
      "hint_ko": "값의 위치를 찾는 메서드(index)와 정렬된 새 리스트를 반환하는 내장 함수(sorted)를 차례로 채우세요.",
      "hint_en": "Check the position method, tally method, and sorting function.",
      "templateCode": "pts = [80, 95, 80, 70]\npos = pts.§§§§§§(95)\ncnt = pts.count(80)\nranked = §§§§§§§(pts, reverse=True)\nprint(pos, cnt, ranked[0])",
      "targetCode": "pts = [80, 95, 80, 70]\npos = pts.index(95)\ncnt = pts.count(80)\nranked = sorted(pts, reverse=True)\nprint(pos, cnt, ranked[0])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1 2 95"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 튜플 tp의 원소들을 오름차순으로 정렬한 새 리스트를 반환하도록 잘못 적힌 함수 이름(sortby)을 sorted로 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the AttributeError caused by calling .sort() on a tuple by using the built-in sorting function.",
      "hint_ko": "어떤 시퀀스든 정렬된 새 리스트로 만들어 반환하는 내장 함수는 sorted()입니다.",
      "hint_en": "Tuples do not have a .sort() method; pass the tuple to sorted() and assign the returned list.",
      "templateCode": "tp = (30, 10, 20)\nans = sortby(tp)\nprint(ans)",
      "targetCode": "tp = (30, 10, 20)\nans = sorted(tp)\nprint(ans)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 20, 30]"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 정렬된 새 리스트가 nums에 덮어써져 출력되도록 둘째 줄의 좌변 변수 이름(temp)을 nums로 고쳐보세요.",
      "prompt_en": "[Fix Bug] Capture the new list returned by sorted(nums) so printing ans outputs the sorted order.",
      "hint_ko": "마지막 줄에서 print(nums)를 출력하므로 sorted(nums)의 반환값을 nums에 다시 대입해야 합니다.",
      "hint_en": "Because sorted() does not mutate nums in place, assign its return value to nums.",
      "templateCode": "nums = [50, 10, 40]\ntemp = sorted(nums)\nprint(nums)",
      "targetCode": "nums = [50, 10, 40]\nnums = sorted(nums)\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 40, 50]"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 원본 data를 보존한 채 내림차순으로 정렬한 새 리스트를 변수 top에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the line that assigns a descending-sorted copy of data to variable top.",
      "hint_ko": "sorted() 함수에 data와 reverse=True 옵션을 넣어 top에 대입하세요.",
      "hint_en": "Assign sorted(data, reverse=True) to variable top.",
      "templateCode": "data = [15, 40, 25]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(data[0], top[0])",
      "targetCode": "data = [15, 40, 25]\ntop = sorted(data, reverse=True)\nprint(data[0], top[0])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "15 40"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 리스트 items에서 \"gold\"의 첫 등장 인덱스를 찾아 변수 idx에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the line that finds the index of \"gold\" in items and assigns it to idx.",
      "hint_ko": "리스트의 위치 탐색 메서드에 \"gold\"를 넣어 호출한 결과를 idx에 대입하세요.",
      "hint_en": "Assign items.index(\"gold\") to variable idx.",
      "templateCode": "items = [\"wood\", \"silver\", \"gold\", \"gold\"]\n§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(idx, items.count(\"gold\"))",
      "targetCode": "items = [\"wood\", \"silver\", \"gold\", \"gold\"]\nidx = items.index(\"gold\")\nprint(idx, items.count(\"gold\"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2 2"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] .reverse()와 sorted()의 동작 차이를 비교하는 다음 코드의 출력 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the output comparing in-place .reverse() with non-mutating sorted().",
      "hint_ko": ".reverse()는 크기 정렬 없이 앞뒤 순서만 뒤집어 [20, 40, 10]으로 만들고, sorted()는 원본을 유지한 채 오름차순 사본을 만듭니다.",
      "hint_en": ".reverse() flips [10, 40, 20] to [20, 40, 10] in place, while sorted(a) returns [10, 20, 40] without changing a.",
      "targetCode": "a = [10, 40, 20]\na.reverse()\nb = sorted(a)\nprint(a[0], b[0], a[-1])",
      "choices": [
        "20 10 10",
        "40 10 10",
        "10 10 20",
        "20 20 10"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "20 10 10"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 문자열과 튜플에 sorted()와 .count(), .index()를 결합한 코드의 출력 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the output when applying sorted(), .count(), and .index() to sequence data.",
      "hint_ko": "문자열 \"cab\"를 sorted()에 넣으면 글자별로 정렬된 리스트 ['a', 'b', 'c']가 된다는 점을 확인하세요.",
      "hint_en": "sorted(\"cab\") returns ['a', 'b', 'c'], where 'b' sits at index 1.",
      "targetCode": "letters = sorted(\"cab\")\ntp = (5, 2, 5, 8, 5)\nprint(letters, letters.index(\"b\"), tp.count(5))",
      "choices": [
        "['a', 'b', 'c'] 1 3",
        "['c', 'a', 'b'] 2 3",
        "['a', 'b', 'c'] 2 2",
        "abc 1 3"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['a', 'b', 'c'] 1 3"
        }
      ]
    }
  ]
};
