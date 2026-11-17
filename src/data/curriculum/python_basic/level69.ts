import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_69: PracticeRound = {
  "id": "py-basic-r69",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 69,
  "title_ko": "69레벨: 리스트 부가 추가·삭제 메서드 (.insert, .remove, .extend, .clear)",
  "title_en": "Level 69: Extended List Insertion, Removal & Extension",
  "description_ko": "원하는 위치에 끼워 넣는 .insert(), 값으로 지우는 .remove(), 리스트를 이어 붙이는 .extend(), 전체를 비우는 .clear()를 익힙니다.",
  "description_en": "Master .insert(), .remove(), .extend(), and .clear() on lists, combining them with conditionals and while loops.",
  "totalQuestions": 15,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "method",
    "type",
    "math",
    "if",
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
      "prompt_ko": "[블록 조립] 리스트의 .insert(1, 20) 메서드로 1번 인덱스에 20을 끼워 넣는 블록을 조립해보세요.",
      "prompt_en": "[Block] Use the list .insert(1, 20) method to place 20 at index 1 and print the list.",
      "hint_ko": "맨 끝에 추가하는 .append()와 달리 (인덱스, 값) 순서로 두 인자를 전달해 원하는 위치에 삽입합니다.",
      "hint_en": "Unlike .append() which adds to the end, pass (index, value) in order to insert at any position.",
      "targetCode": "nums = [10, 30]\nnums.insert(1, 20)\nprint(nums)",
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
      "prompt_ko": "[빈칸 채우기] 원하는 인덱스에 요소를 끼워 넣는 메서드를 채워 맨 앞(0번)에 \"A\"를 추가하고 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the method name that inserts an item at index 0 to place \"A\" at the front.",
      "hint_ko": "지정한 인덱스 위치에 요소를 끼워 넣는 6글자 메서드 insert를 사용하세요.",
      "hint_en": "Use the 6-letter method insert to place an item at a given index.",
      "templateCode": "items = [\"B\", \"C\"]\nitems.§§§§§§(0, \"A\")\nprint(items)",
      "targetCode": "items = [\"B\", \"C\"]\nitems.insert(0, \"A\")\nprint(items)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['A', 'B', 'C']"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 리스트의 .remove(\"apple\") 메서드로 첫 번째 일치하는 요소를 삭제해보세요.",
      "prompt_en": "[Block] Use the list .remove(\"apple\") method to delete the first matching element.",
      "hint_ko": "같은 값이 여러 개 들어 있더라도 가장 앞에 있는 첫 번째 일치 요소만 지워지고 나머지는 그대로 남습니다.",
      "hint_en": "Even if duplicates exist, only the earliest matching element is removed while later ones remain.",
      "targetCode": "fruits = [\"apple\", \"banana\", \"apple\"]\nfruits.remove(\"apple\")\nprint(fruits)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['banana', 'apple']"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 일치하는 값을 찾아 삭제하는 메서드 이름을 채워 85를 지우고 100을 붙인 리스트를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the method name that deletes a matching value to remove 85, append 100, and print scores.",
      "hint_ko": "특정 값을 찾아 첫 번째 일치 항목을 제거하는 6글자 리스트 메서드 remove를 호출하세요.",
      "hint_en": "Call the 6-letter list method remove to delete a matching value.",
      "templateCode": "scores = [70, 85, 90]\nscores.§§§§§§(85)\nscores.append(100)\nprint(scores)",
      "targetCode": "scores = [70, 85, 90]\nscores.remove(85)\nscores.append(100)\nprint(scores)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[70, 90, 100]"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 리스트의 .extend() 메서드로 다른 리스트의 모든 원소를 끝에 이어 붙여보세요.",
      "prompt_en": "[Block] Use the list .extend(b) method to unpack and append all elements from b to a.",
      "hint_ko": ".extend()는 새 리스트를 반환하지 않고 호출한 원본 리스트 a 자체를 직접 확장합니다.",
      "hint_en": ".extend() mutates the original list a in place rather than returning a new list.",
      "targetCode": "a = [1, 2]\nb = [3, 4]\na.extend(b)\nprint(a)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[1, 2, 3, 4]"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 첫 빈칸에는 다른 리스트 원소들을 이어 붙이는 메서드를, 둘째 빈칸에는 리스트를 비우는 메서드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the method to append all elements from extra and the method to empty extra completely.",
      "hint_ko": "첫 빈칸은 리스트를 확장하는 extend 메서드, 둘째 빈칸은 전체를 비우는 clear 메서드를 씁니다.",
      "hint_en": "Use extend to merge extra into cart, and clear to empty extra.",
      "templateCode": "cart = [\"pen\", \"book\"]\nextra = [\"note\"]\ncart.§§§§§§(extra)\nextra.§§§§§()\nprint(cart, extra)",
      "targetCode": "cart = [\"pen\", \"book\"]\nextra = [\"note\"]\ncart.extend(extra)\nextra.clear()\nprint(cart, extra)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['pen', 'book', 'note'] []"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] if target in tags:로 포함 여부를 먼저 확인한 뒤 안전하게 .remove()로 삭제해보세요.",
      "prompt_en": "[Block] Check membership with if target in tags: before calling .remove(target).",
      "hint_ko": "in 연산자가 True일 때만 .remove()가 실행되므로 없는 값을 입력해도 에러 없이 기존 리스트가 유지됩니다.",
      "hint_en": "Since .remove() runs only when in evaluates to True, missing inputs leave the list untouched.",
      "targetCode": "tags = [\"py\", \"js\", \"go\"]\ntarget = input()\nif target in tags:\n    tags.remove(target)\nprint(tags)",
      "testCases": [
        {
          "id": 1,
          "input": "js",
          "expectedOutput": "['py', 'go']"
        },
        {
          "id": 2,
          "input": "rust",
          "expectedOutput": "['py', 'js', 'go']"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 입력 정수가 nums 안에 있을 때만 값 기준으로 삭제한 뒤 리스트를 출력해보세요.",
      "prompt_en": "[Fill Blank] Check if x is in nums and remove it before printing nums.",
      "hint_ko": "첫 빈칸에는 포함 여부를 확인하는 in 연산자를, 둘째 빈칸에는 값을 삭제하는 remove 메서드를 적으세요.",
      "hint_en": "Use in to check membership on line 3 and remove to delete x on line 4.",
      "templateCode": "nums = [10, 20, 30]\nx = int(input())\nif x §§ nums:\n    nums.§§§§§§(x)\nprint(nums)",
      "targetCode": "nums = [10, 20, 30]\nx = int(input())\nif x in nums:\n    nums.remove(x)\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "20",
          "expectedOutput": "[10, 30]"
        },
        {
          "id": 2,
          "input": "99",
          "expectedOutput": "[10, 20, 30]"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] while 0 in data: 반복문과 .remove(0)을 결합해 모든 0을 끝까지 제거해보세요.",
      "prompt_en": "[Block] Pair .remove(0) with a while 0 in data: loop to remove all occurrences of 0.",
      "hint_ko": "반복할 때마다 removed += 1을 함께 수행하면 총 몇 개의 원소가 삭제되었는지도 정확히 셀 수 있습니다.",
      "hint_en": "Incrementing removed += 1 on each iteration also counts how many elements were deleted.",
      "targetCode": "data = [0, 5, 0, 8, 0]\nremoved = 0\nwhile 0 in data:\n    data.remove(0)\n    removed += 1\nprint(data, removed)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[5, 8] 3"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] while문으로 모든 \"x\"를 삭제한 뒤 맨 앞(0번)에 \"start\"를 끼워 넣어 출력해보세요.",
      "prompt_en": "[Fill Blank] Remove all \"x\" elements in a while loop, then insert \"start\" at index 0.",
      "hint_ko": "반복문 안에는 값을 지우는 remove를, 반복문 뒤에는 0번 인덱스에 끼워 넣는 insert를 쓰세요.",
      "hint_en": "Call remove inside the while loop and insert after the loop.",
      "templateCode": "items = [\"x\", \"a\", \"x\", \"b\"]\nwhile \"x\" in items:\n    items.§§§§§§(\"x\")\nitems.§§§§§§(0, \"start\")\nprint(items)",
      "targetCode": "items = [\"x\", \"a\", \"x\", \"b\"]\nwhile \"x\" in items:\n    items.remove(\"x\")\nitems.insert(0, \"start\")\nprint(items)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['start', 'a', 'b']"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] [30, 40]이 중첩 리스트로 들어가 오류가 나는 버그를 고쳐 평평하게 이어 붙도록 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the bug where [30, 40] is appended as a nested list causing TypeError in sum(nums).",
      "hint_ko": ".append() 대신 안쪽 원소들을 낱개로 풀어 이어 붙이는 .extend() 메서드로 바꿔보세요.",
      "hint_en": "Replace .append() with .extend() to unpack and add each number.",
      "templateCode": "nums = [10, 20]\nnums.append([30, 40])\nprint(nums, sum(nums))",
      "targetCode": "nums = [10, 20]\nnums.extend([30, 40])\nprint(nums, sum(nums))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 20, 30, 40] 100"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 0번 인덱스에 \"A\"를 끼워 넣으려다 .insert()의 두 인자 순서가 뒤바뀐 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the swapped arguments in ranks.insert() so \"A\" is inserted at index 0.",
      "hint_ko": ".insert(인덱스, 값) 순서로 전달해야 하므로 (0, \"A\")가 되도록 인자 순서를 수정하세요.",
      "hint_en": "Pass the integer index first and the value second: ranks.insert(0, \"A\").",
      "templateCode": "ranks = [\"B\", \"C\"]\nranks.insert(\"A\", 0)\nprint(ranks)",
      "targetCode": "ranks = [\"B\", \"C\"]\nranks.insert(0, \"A\")\nprint(ranks)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['A', 'B', 'C']"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 리스트 nums 끝에 [30, 40]의 원소들을 낱개로 이어 붙이는(.extend) 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Extend nums with the elements of [30, 40] using .extend().",
      "hint_ko": "nums.extend([30, 40]) 형태로 리스트 확장 메서드를 호출하세요.",
      "hint_en": "Write nums.extend([30, 40]).",
      "templateCode": "nums = [10, 20]\nnums.insert(0, 5)\n§§§§§§§§§§§§§§§§§§§§§\nnums.remove(20)\nprint(len(nums), nums[0])",
      "targetCode": "nums = [10, 20]\nnums.insert(0, 5)\nnums.extend([30, 40])\nnums.remove(20)\nprint(len(nums), nums[0])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "4 5"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 리스트 temp의 모든 원소를 깨끗이 비우는(.clear) 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Empty all elements from the list temp using .clear().",
      "hint_ko": "temp.clear() 형태로 리스트 비우기 메서드를 호출하세요.",
      "hint_en": "Call temp.clear() to remove all elements from temp.",
      "templateCode": "temp = [1, 2, 3]\n§§§§§§§§§§§§\ntemp.append(9)\nprint(temp)",
      "targetCode": "temp = [1, 2, 3]\ntemp.clear()\ntemp.append(9)\nprint(temp)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[9]"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 리스트 메서드들을 순서대로 실행했을 때 출력되는 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output produced after running these list methods in order.",
      "hint_ko": ".remove(2)는 앞쪽의 첫 번째 2만 지운다는 점과 .insert(1, 9)가 1번 자리에 9를 끼워 넣는 순서를 추적하세요.",
      "hint_en": "Trace each step: .remove(2) deletes only the first 2, .insert(1, 9) places 9 at index 1, and .extend([4]) adds 4 at the end.",
      "targetCode": "nums = [1, 2, 3, 2]\nnums.remove(2)\nnums.insert(1, 9)\nnums.extend([4])\nprint(nums)",
      "choices": [
        "[1, 9, 3, 2, 4]",
        "[1, 9, 3, 4]",
        "[1, 2, 9, 3, 4]",
        "[9, 1, 3, 2, 4]"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[1, 9, 3, 2, 4]"
        }
      ]
    }
  ]
};
