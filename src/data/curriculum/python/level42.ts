import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_42: PracticeRound = {
  "id": "py-basic-r42",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 42,
  "title_ko": "42레벨: 리스트 정렬과 위치·개수 찾기",
  "title_en": "Level 42: Sorting & Searching Lists",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "method",
    "sorted",
    "if"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": ".sort() 메서드로 nums = [30, 10, 20]을 오름차순 정렬하고 출력해보세요.",
      "prompt_en": "Use .sort() to sort nums = [30, 10, 20] in ascending order and print nums.",
      "hint_ko": "nums.sort()를 호출하면 원본 리스트가 작은 수부터 큰 수 순서로 정렬됩니다.",
      "hint_en": "Call nums.sort() to sort the list in place, then print(nums).",
      "targetCode": "nums = [30, 10, 20]\nnums.sort()\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 20, 30]"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 names 리스트를 알파벳 오름차순으로 정렬해 출력해보세요.",
      "prompt_en": "Fill in the blank to sort names in alphabetical ascending order and print it.",
      "hint_ko": "문자열 리스트도 .sort()를 호출하면 사전순(알파벳순)으로 정렬됩니다.",
      "hint_en": "Call .sort() to sort strings alphabetically in place.",
      "templateCode": "names = [\"Kim\", \"An\", \"Lee\"]\nnames.§§§§§§\nprint(names)",
      "targetCode": "names = [\"Kim\", \"An\", \"Lee\"]\nnames.sort()\nprint(names)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['An', 'Kim', 'Lee']"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "reverse=True 옵션을 넣어 nums = [15, 40, 25]를 내림차순 정렬해 출력해보세요.",
      "prompt_en": "Sort nums = [15, 40, 25] in descending order using reverse=True and print nums.",
      "hint_ko": "sort 메서드 블록의 인자 칸에 reverse=True를 입력하면 큰 값부터 정렬됩니다.",
      "hint_en": "Pass reverse=True into nums.sort(reverse=True), then print(nums).",
      "targetCode": "nums = [15, 40, 25]\nnums.sort(reverse=True)\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[40, 25, 15]"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 옵션을 채워 scores 리스트를 큰 점수부터 내림차순으로 정렬해 출력해보세요.",
      "prompt_en": "Fill in the keyword option to sort scores in descending order and print it.",
      "hint_ko": ".sort() 안에 reverse=True를 지정하면 내림차순으로 정렬됩니다. True의 첫 글자는 대문자입니다.",
      "hint_en": "Specify reverse=True inside .sort() (note the capital T in True).",
      "templateCode": "scores = [70, 95, 80]\nscores.sort(§§§§§§§=§§§§)\nprint(scores)",
      "targetCode": "scores = [70, 95, 80]\nscores.sort(reverse=True)\nprint(scores)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[95, 80, 70]"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "sorted()로 원본 nums = [3, 1, 2]는 유지한 채 정렬된 새 리스트 asc와 nums를 출력해보세요.",
      "prompt_en": "Use sorted() to create a sorted copy asc without mutating nums = [3, 1, 2], then print asc and nums.",
      "hint_ko": "asc = sorted(nums)로 새 정렬 리스트를 만든 뒤 print(asc)와 print(nums)를 차례대로 실행하세요.",
      "hint_en": "Assign asc = sorted(nums), then print(asc) and print(nums).",
      "targetCode": "nums = [3, 1, 2]\nasc = sorted(nums)\nprint(asc)\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[1, 2, 3]\n[3, 1, 2]"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "원본 raw를 바꾸지 않고 정렬된 새 리스트를 반환하는 함수를 빈칸에 채워보세요.",
      "prompt_en": "Fill in the built-in function that returns a new sorted list without modifying raw.",
      "hint_ko": "원본을 보존하면서 정렬된 새 리스트를 반환하는 내장 함수는 sorted입니다.",
      "hint_en": "Use the built-in sorted() function to keep raw unchanged.",
      "templateCode": "raw = [40, 10, 30]\nclean = §§§§§§(raw)\nprint(clean, raw)",
      "targetCode": "raw = [40, 10, 30]\nclean = sorted(raw)\nprint(clean, raw)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 30, 40] [40, 10, 30]"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": ".count() 메서드를 사용해 nums = [2, 5, 2, 8, 2]에서 숫자 2의 개수를 출력해보세요.",
      "prompt_en": "Use .count() to print how many times 2 appears in nums = [2, 5, 2, 8, 2].",
      "hint_ko": "print() 안에 nums.count(2)를 연결하면 값 2가 등장하는 횟수 3이 출력됩니다.",
      "hint_en": "Use print(nums.count(2)) to output the frequency of 2.",
      "targetCode": "nums = [2, 5, 2, 8, 2]\nprint(nums.count(2))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 votes 리스트에서 찬성표(\"O\")가 몇 개인지 출력해보세요.",
      "prompt_en": "Fill in the blanks to count how many \"O\" votes are in votes and print the count.",
      "hint_ko": "특정 값의 등장 횟수를 세는 리스트 메서드는 .count(값)입니다.",
      "hint_en": "Use votes.count(\"O\") to count occurrences of \"O\".",
      "templateCode": "votes = [\"O\", \"X\", \"O\", \"O\"]\nprint(votes.§§§§§(\"§\"))",
      "targetCode": "votes = [\"O\", \"X\", \"O\", \"O\"]\nprint(votes.count(\"O\"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": ".index() 메서드로 items = [\"bronze\", \"gold\", \"silver\"]에서 \"gold\"의 위치를 출력해보세요.",
      "prompt_en": "Use .index() to print the index of \"gold\" in items = [\"bronze\", \"gold\", \"silver\"].",
      "hint_ko": "items.index(\"gold\")는 \"gold\"가 위치한 인덱스 번호 1을 반환합니다.",
      "hint_en": "Call print(items.index(\"gold\")) to get the 0-based position of \"gold\".",
      "targetCode": "items = [\"bronze\", \"gold\", \"silver\"]\nprint(items.index(\"gold\"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 \"gold\"가 리스트에 포함되어 있으면 그 위치 인덱스를 출력해보세요.",
      "prompt_en": "Fill in the blanks to check if \"gold\" is in items and print its index.",
      "hint_ko": "in으로 포함 여부를 확인한 뒤 .index(\"gold\")로 위치 번호를 구하세요.",
      "hint_en": "Check membership with in, then find the position with .index(\"gold\").",
      "templateCode": "items = [\"map\", \"gold\", \"key\"]\nif \"gold\" §§ items:\n    print(items.§§§§§(\"gold\"))",
      "targetCode": "items = [\"map\", \"gold\", \"key\"]\nif \"gold\" in items:\n    print(items.index(\"gold\"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "정렬 결과가 None으로 출력되는 버그를 수정하여 [1, 2, 5, 8]이 출력되도록 고쳐보세요.",
      "prompt_en": "Fix the bug where sorting prints None so that [1, 2, 5, 8] is printed.",
      "hint_ko": ".sort()는 원본만 정렬하고 None을 반환합니다. 새 리스트를 반환하는 내장 함수를 쓰거나 단독 정렬 후 원본을 출력하세요.",
      "hint_en": ".sort() returns None. Use sorted(nums) to assign a new list, or sort nums in place and print nums.",
      "templateCode": "nums = [5, 2, 8, 1]\nres = nums.sort()\nprint(res)",
      "targetCode": "nums = [5, 2, 8, 1]\nres = sorted(nums)\nprint(res)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[1, 2, 5, 8]"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "리스트 아래에 한 줄을 추가하여 숫자 1이 등장하는 개수를 세어 출력해보세요.",
      "prompt_en": "Add one line below the list to count and print how many times 1 appears.",
      "hint_ko": "둘째 줄에 print(logs.count(1))을 작성해보세요.",
      "hint_en": "Write print(logs.count(1)) on the second line.",
      "templateCode": "logs = [1, 0, 1, 1, 0]\n§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "logs = [1, 0, 1, 1, 0]\nprint(logs.count(1))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3"
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
      "hint_ko": ".reverse()는 정렬이 아니라 현재 순서를 거꾸로 뒤집어 [1, 3, 1, 4]로 만듭니다.",
      "hint_en": ".reverse() reverses the current order to [1, 3, 1, 4], so nums[0] is 1 and count(1) is 2.",
      "targetCode": "nums = [4, 1, 3, 1]\nnums.reverse()\nprint(nums[0], nums.count(1))",
      "choices": [
        "4 2",
        "1 2",
        "1 1",
        "3 2"
      ],
      "correctChoiceIndex": 1,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1 2"
        }
      ]
    }
  ]
};
