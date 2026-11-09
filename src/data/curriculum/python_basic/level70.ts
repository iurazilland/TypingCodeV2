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
      "prompt_ko": "리스트의 .index(값) 메서드는 해당 값이 처음 등장하는 위치 번호(0부터 시작)를 반환하고, .count(값) 메서드는 해당 값이 리스트에 몇 개 들어 있는지 반환합니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "The list .index(value) method returns the 0-based index of the first matching element, while .count(value) returns how many times that value appears in the list. Trace the block code.",
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
      "prompt_ko": "첫 빈칸에는 숫자 9의 첫 인덱스를 찾는 메서드를, 둘째 빈칸에는 숫자 4의 등장 횟수를 세는 메서드를 채워보세요.",
      "prompt_en": "Fill in the method to find the index of 9 and the method to count occurrences of 4.",
      "hint_ko": "첫 빈칸은 책의 '색인/위치 번호'를 뜻하는 5글자 메서드를, 둘째 빈칸은 개수를 '세다'라는 뜻의 5글자 메서드를 사용합니다.",
      "hint_en": "First, use the 5-letter method named after a book's lookup table; second, use the 5-letter method meaning 'to tally how many'.",
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
      "prompt_ko": "리스트의 .reverse() 메서드는 크기순 정렬과 상관없이 현재 리스트에 들어 있는 요소들의 앞뒤 순서를 제자리에서 정반대로 뒤집습니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "The list .reverse() method flips the current order of elements backward in place without sorting them by value. Trace the block code.",
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
      "prompt_ko": "빈칸에 리스트 순서를 거꾸로 뒤집는 메서드 이름을 채워 뒤집힌 첫 요소와 전체 리스트를 출력해보세요.",
      "prompt_en": "Fill in the method name that reverses log in place, then print log[0] and log.",
      "hint_ko": "현재 순서를 정반대 방향으로 '뒤집다/역전시키다'라는 뜻의 7글자 영어 동사 메서드를 호출하세요.",
      "hint_en": "Call the 7-letter in-place method meaning 'to turn in the opposite direction / flip backward'.",
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
      "prompt_ko": "내장 함수 sorted(리스트)는 원본 리스트의 순서를 그대로 보존한 채, 오름차순으로 정렬된 새로운 리스트 사본을 만들어 반환합니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "The built-in sorted(list) function leaves the original list unchanged and returns a new list sorted in ascending order. Trace the block code.",
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
      "prompt_ko": "원본 scores를 보존한 채 내림차순으로 정렬한 새 리스트를 top에 담도록 함수명과 옵션 이름을 빈칸에 채워보세요.",
      "prompt_en": "Fill in the built-in sorting function and keyword option to create a descending copy in top.",
      "hint_ko": "'정렬하다(sort)'에 과거분사 어미(-ed)를 붙인 내장 함수를 쓰고, 순서를 '뒤집다'라는 뜻의 7글자 옵션을 True로 지정하세요.",
      "hint_en": "Add '-ed' to 'sort' for the copy-sorting built-in function, and set the 7-letter 'flip backward' option name to True.",
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
      "prompt_ko": "리스트의 .index(값) 메서드는 찾는 값이 리스트에 없을 때 ValueError를 발생시키므로, try - except ValueError로 감싸면 없는 값일 때 -1을 안전하게 출력할 수 있습니다. 블록의 코드를 따라 입력해보세요. (터미널 입력: A2)",
      "prompt_en": "Because list .index(value) raises ValueError when the value is not in the list, wrapping it in try - except ValueError lets you safely print -1 when missing. Trace the block code. (Terminal input: A2)",
      "hint_ko": "-1을 반환하는 문자열 .find()와 달리 리스트 .index()는 예외를 발생시킨다는 점을 기억하세요.",
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
      "prompt_ko": "집합 tags를 오름차순 리스트 사본으로 변환해 개수와 리스트를 지정 형식으로 출력해보세요. (출력 예: 3:['ai', 'go', 'py'])",
      "prompt_en": "Convert the set tags into an ascending list copy and print its count and contents.",
      "hint_ko": "순서가 없는 집합을 받아 '정렬된' 새 리스트를 돌려주도록 '정렬하다(sort)'에 과거분사 어미(-ed)를 붙인 6글자 내장 함수를 쓰세요.",
      "hint_en": "Pass the set to the 6-letter built-in function formed by adding '-ed' to 'sort' to obtain an ordered list.",
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
      "prompt_ko": "함수 안에서 sorted(nums, reverse=True)를 사용하면 호출자가 넘긴 원본 리스트(data)를 변형하지 않고도 내림차순 사본에서 가장 큰 값들을 뽑아 계산할 수 있습니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Using sorted(nums, reverse=True) inside a function creates a descending copy so you can compute with the largest values without mutating the caller's original list. Trace the block code.",
      "hint_ko": "내림차순으로 정렬된 ranked의 0번과 1번 인덱스가 가장 큰 두 수이며, 바깥의 data[0]은 원래 첫 값(15)을 그대로 유지합니다.",
      "hint_en": "Indices 0 and 1 of the descending copy ranked hold the two largest numbers, while data[0] outside keeps its original value (15).",
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
      "hint_ko": "리스트에서 특정 값이 등장한 횟수를 '세다'라는 뜻의 5글자 영어 동사 메서드를 조건식에 채우세요.",
      "hint_en": "Use the 5-letter list method meaning 'to tally how many times' an item appears.",
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
      "hint_ko": "리스트의 제자리 정렬 메서드는 원본만 바꾸고 None을 반환합니다. 원본을 그대로 두고 '정렬된' 새 리스트를 돌려주는 내장 함수로 바꿔보세요.",
      "hint_en": "The in-place sort method mutates the original list and returns None; call the built-in function that returns a new ordered copy instead.",
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
      "prompt_ko": "입력 단어들의 중복을 집합으로 제거한 코드 아래에 한 줄을 추가하여 내림차순 정렬 리스트를 출력해보세요. (터미널 입력: cat bat cat dog)",
      "prompt_en": "Add one line below the set deduplication to print a descending sorted list of unique words. (Terminal input: cat bat cat dog)",
      "hint_ko": "중복이 제거된 집합을 사본 정렬 내장 함수에 넘기면서 역순 정렬 옵션을 참 값으로 켜서 바로 출력해보세요.",
      "hint_en": "Pass the deduplicated set to the copy-sorting built-in with its descending-order flag enabled inside the output call.",
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
      "hint_ko": "오름차순 사본에는 중복된 값까지 모두 포함되어 인덱스가 밀린다는 점과, 원본 리스트는 역순 메서드로 앞뒤가 뒤집힌다는 점을 각각 추적해보세요.",
      "hint_en": "Track the two lists separately: the ascending copy keeps duplicate items (shifting later indices), while the original list is flipped backward in place.",
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