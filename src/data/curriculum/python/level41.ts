import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_41: PracticeRound = {
  "id": "py-basic-r41",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 41,
  "title_ko": "41레벨: 리스트 요소 삭제",
  "title_en": "Level 41: Removing List Elements (.pop, .remove)",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "method",
    "if"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": ".pop() 메서드로 nums = [10, 20, 30]의 마지막 요소를 삭제하고 리스트를 출력해보세요.",
      "prompt_en": "Use .pop() to remove the last element from nums = [10, 20, 30] and print nums.",
      "hint_ko": "인자 없이 nums.pop()을 호출하면 맨 끝 요소 30이 제거됩니다. 그 뒤 print(nums)를 실행하세요.",
      "hint_en": "Call nums.pop() with no arguments to remove 30, then print(nums).",
      "targetCode": "nums = [10, 20, 30]\nnums.pop()\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 20]"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 stack 리스트의 맨 마지막 요소를 제거하고 남은 리스트를 출력해보세요.",
      "prompt_en": "Fill in the blank to pop the last element from stack and print the remaining list.",
      "hint_ko": "마지막 요소를 꺼내 제거할 때는 괄호를 비운 pop()을 호출합니다.",
      "hint_en": "Call pop() with empty parentheses to remove the last item.",
      "templateCode": "stack = [\"A\", \"B\", \"C\"]\nstack.§§§§§\nprint(stack)",
      "targetCode": "stack = [\"A\", \"B\", \"C\"]\nstack.pop()\nprint(stack)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['A', 'B']"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "nums = [10, 20, 30]에서 .pop()으로 꺼낸 마지막 값을 변수 last에 저장해 출력해보세요.",
      "prompt_en": "Store the popped last value of nums = [10, 20, 30] in last and print last.",
      "hint_ko": ".pop()은 삭제한 요소를 반환합니다. last = nums.pop()으로 받아 print(last)로 출력하세요.",
      "hint_en": ".pop() returns the removed item. Set last = nums.pop() and print(last).",
      "targetCode": "nums = [10, 20, 30]\nlast = nums.pop()\nprint(last)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "30"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 마지막 요소를 꺼내 done에 담고, done과 남은 tasks를 함께 출력해보세요.",
      "prompt_en": "Fill in the blanks to pop the last item into done and print done and tasks.",
      "hint_ko": "tasks 리스트에서 .pop()을 호출해 반환된 값을 done에 저장하세요.",
      "hint_en": "Call tasks.pop() and assign its return value to done.",
      "templateCode": "tasks = [\"eat\", \"code\"]\ndone = §§§§§.§§§§§\nprint(done, tasks)",
      "targetCode": "tasks = [\"eat\", \"code\"]\ndone = tasks.pop()\nprint(done, tasks)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "code ['eat']"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": ".pop(0)을 사용해 nums = [10, 20, 30]의 첫 번째 요소(0번 인덱스)를 삭제하고 출력해보세요.",
      "prompt_en": "Use .pop(0) to remove the first element (index 0) of nums = [10, 20, 30] and print nums.",
      "hint_ko": ".pop()의 괄호 안에 인덱스 0을 넣으면 맨 앞 요소가 삭제됩니다.",
      "hint_en": "Pass index 0 to nums.pop(0) to remove the first element.",
      "targetCode": "nums = [10, 20, 30]\nnums.pop(0)\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[20, 30]"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "del 키워드를 사용해 nums 리스트의 1번 인덱스 요소를 삭제하고 출력해보세요.",
      "prompt_en": "Use the del keyword to delete index 1 of nums and print the list.",
      "hint_ko": "del 리스트[인덱스] 문법으로 특정 위치의 요소를 바로 지울 수 있습니다.",
      "hint_en": "Use del nums[1] to delete the element at index 1.",
      "templateCode": "nums = [10, 20, 30, 40]\n§§§ nums§§§\nprint(nums)",
      "targetCode": "nums = [10, 20, 30, 40]\ndel nums[1]\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 30, 40]"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": ".remove(\"B\")로 items = [\"A\", \"B\", \"C\", \"B\"]에서 첫 번째 \"B\"만 삭제하고 출력해보세요.",
      "prompt_en": "Use .remove(\"B\") on items = [\"A\", \"B\", \"C\", \"B\"] to remove the first \"B\" and print items.",
      "hint_ko": ".remove(값)는 앞에서부터 탐색해 가장 먼저 일치하는 값 하나만 제거합니다.",
      "hint_en": ".remove(\"B\") deletes only the first matching occurrence of \"B\".",
      "targetCode": "items = [\"A\", \"B\", \"C\", \"B\"]\nitems.remove(\"B\")\nprint(items)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['A', 'C', 'B']"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 scores 리스트에서 값 50을 찾아 삭제하고 출력해보세요.",
      "prompt_en": "Fill in the blanks to remove the value 50 from scores and print scores.",
      "hint_ko": "인덱스가 아닌 특정 값을 찾아 지울 때는 .remove(50)을 사용합니다.",
      "hint_en": "Use .remove(50) to delete an element by value rather than by index.",
      "templateCode": "scores = [70, 50, 90]\nscores.§§§§§§(§§)\nprint(scores)",
      "targetCode": "scores = [70, 50, 90]\nscores.remove(50)\nprint(scores)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[70, 90]"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": ".clear() 메서드를 사용해 nums = [10, 20, 30]의 모든 요소를 비우고 출력해보세요.",
      "prompt_en": "Use .clear() to empty all elements from nums = [10, 20, 30] and print nums.",
      "hint_ko": "nums.clear()를 실행하면 리스트 안의 모든 요소가 제거되어 빈 리스트 []가 됩니다.",
      "hint_en": "Call nums.clear() to remove all elements, leaving an empty list [].",
      "targetCode": "nums = [10, 20, 30]\nnums.clear()\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[]"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 bag 안에 \"trap\"이 있을 때만 안전하게 제거하고 리스트를 출력해보세요.",
      "prompt_en": "Fill in the blanks to safely remove \"trap\" only if it exists in bag, then print bag.",
      "hint_ko": "in 연산자로 포함 여부를 먼저 확인한 뒤 .remove()를 호출하면 오류를 예방할 수 있습니다.",
      "hint_en": "Check membership with in before calling bag.remove(\"trap\").",
      "templateCode": "bag = [\"gem\", \"trap\", \"key\"]\nif \"trap\" §§ bag:\n    bag.§§§§§§(\"trap\")\nprint(bag)",
      "targetCode": "bag = [\"gem\", \"trap\", \"key\"]\nif \"trap\" in bag:\n    bag.remove(\"trap\")\nprint(bag)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['gem', 'key']"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "인덱스 오류가 발생하는 삭제 코드를 수정하여 값 50을 제거한 [10, 90]을 출력해보세요.",
      "prompt_en": "Fix the IndexError in the deletion code so value 50 is removed and [10, 90] prints.",
      "hint_ko": ".pop()은 인덱스 번호를 받으므로 50을 넣으면 범위를 벗어납니다. 값으로 삭제하는 메서드로 고쳐보세요.",
      "hint_en": ".pop() expects an index, causing an IndexError for 50. Use the value-removal method instead.",
      "templateCode": "nums = [10, 50, 90]\nnums.pop(50)\nprint(nums)",
      "targetCode": "nums = [10, 50, 90]\nnums.remove(50)\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 90]"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "리스트 아래에 한 줄을 추가하여 맨 앞(0번) 요소를 꺼내면서 동시에 출력해보세요.",
      "prompt_en": "Add one line below the list to pop and print the first element (index 0).",
      "hint_ko": "둘째 줄에 print(queue.pop(0))을 작성하면 꺼낸 첫 요소가 바로 출력됩니다.",
      "hint_en": "Write print(queue.pop(0)) on line 2 to pop and print the first item.",
      "templateCode": "queue = [\"first\", \"second\", \"third\"]\n§§§§§§§§§§§§§§§§§§§",
      "targetCode": "queue = [\"first\", \"second\", \"third\"]\nprint(queue.pop(0))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "first"
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
      "hint_ko": "remove(20)은 앞쪽의 첫 20만 지워 [10, 30, 20]이 되고, 그 뒤 pop()이 맨 끝 20을 꺼냅니다.",
      "hint_en": "remove(20) deletes the first 20 leaving [10, 30, 20], then pop() removes and returns the last 20.",
      "targetCode": "arr = [10, 20, 30, 20]\narr.remove(20)\nx = arr.pop()\nprint(x, arr)",
      "choices": [
        "30 [10, 20]",
        "20 [10, 30, 20]",
        "30 [10]",
        "20 [10, 30]"
      ],
      "correctChoiceIndex": 3,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "20 [10, 30]"
        }
      ]
    }
  ]
};
