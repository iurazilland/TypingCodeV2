import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_69: PracticeRound = {
  "id": "py-basic-r69",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 69,
  "title_ko": "69레벨: 리스트 부가 추가·삭제 메서드 (.insert, .remove, .extend, .clear)",
  "title_en": "Level 69: Extended List Insertion, Removal & Extension",
  "description_ko": "원하는 위치에 끼워 넣는 .insert(), 값으로 지우는 .remove(), 리스트를 이어 붙이는 .extend(), 전체를 비우는 .clear()를 익히고 예외 처리·반복문과 결합합니다.",
  "description_en": "Master .insert(), .remove(), .extend(), and .clear() on lists, combining them with try-except, while loops, and functions.",
  "totalQuestions": 13,
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
      "prompt_ko": "리스트 [10, 30]의 인덱스 1 위치에 .insert(1, 20)으로 20을 끼워 넣고 리스트를 출력해보세요.",
      "prompt_en": "Insert 20 at index 1 of [10, 30] using .insert(1, 20) and print the list.",
      "hint_ko": "리스트.insert(인덱스, 값)은 지정한 인덱스 자리에 새 요소를 끼워 넣고 뒤 요소들을 한 칸씩 밀어줍니다.",
      "hint_en": "list.insert(index, value) inserts value at index and shifts subsequent items right.",
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
      "prompt_ko": "빈칸에 원하는 인덱스 자리에 요소를 끼워 넣는 메서드 이름을 채워 맨 앞(0번)에 \"A\"를 추가하고 출력해보세요.",
      "prompt_en": "Fill in the method name that inserts an item at a given index to place \"A\" at index 0 and print items.",
      "hint_ko": "맨 끝에 붙이는 .append()와 달리 특정 위치에 끼워 넣을 때는 .insert(0, \"A\")를 사용합니다.",
      "hint_en": "Unlike .append() which adds to the end, use .insert(0, \"A\") to insert at index 0.",
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
      "prompt_ko": "리스트에서 .remove(\"apple\")로 첫 번째 \"apple\"만 찾아 삭제한 뒤 남은 리스트를 출력해보세요.",
      "prompt_en": "Remove the first matching \"apple\" from fruits using .remove(\"apple\") and print fruits.",
      "hint_ko": ".remove(값)은 인덱스로 꺼내는 .pop()과 달리 일치하는 첫 번째 값을 찾아 삭제합니다.",
      "hint_en": "Unlike index-based .pop(), .remove(value) deletes the first matching value.",
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
      "prompt_ko": "빈칸에 일치하는 값을 찾아 삭제하는 메서드 이름을 채워 85를 지우고 끝에 100을 붙인 리스트를 출력해보세요.",
      "prompt_en": "Fill in the method name that deletes a matching value to remove 85, append 100, and print scores.",
      "hint_ko": "특정 값 85를 찾아 지울 때는 scores.remove(85)를 호출합니다.",
      "hint_en": "Call scores.remove(85) to delete the element whose value is 85.",
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
      "prompt_ko": "리스트 a 뒤에 리스트 b의 모든 원소를 .extend(b)로 한 줄에 이어 붙이고 a를 출력해보세요.",
      "prompt_en": "Extend list a with all elements of list b using .extend(b) and print a.",
      "hint_ko": "a.extend(b)는 b 안의 원소들을 풀어서 a 끝에 하나씩 이어 붙입니다.",
      "hint_en": "a.extend(b) unpacks items from b and appends each item to a.",
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
      "prompt_ko": "첫 빈칸에는 다른 리스트 원소들을 이어 붙이는 메서드를, 둘째 빈칸에는 리스트를 전부 비우는 메서드를 채워보세요.",
      "prompt_en": "Fill in the method to append all elements from extra and the method to empty extra completely.",
      "hint_ko": "리스트 확장은 .extend(extra), 모든 요소를 한 번에 지워 빈 리스트로 만들 때는 .clear()를 씁니다.",
      "hint_en": "Use .extend(extra) to merge items and .clear() to remove all elements from extra.",
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
      "prompt_ko": "입력받은 문자열 target이 tags 안에 있을 때만 안전하게 .remove(target)으로 삭제하고 tags를 출력해보세요.",
      "prompt_en": "Read target and safely remove it with .remove(target) only if target is in tags, then print tags.",
      "hint_ko": "없는 값에 .remove()를 호출하면 오류가 나므로 if target in tags: 조건으로 먼저 확인합니다.",
      "hint_en": "Calling .remove() on a missing value raises ValueError, so guard it with if target in tags:.",
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
      "prompt_ko": "입력 정수를 값 기준으로 삭제하되, 리스트에 없을 때 발생하는 값 예외를 잡아 missing을 출력하도록 빈칸을 채워보세요.",
      "prompt_en": "Fill in the removal method and exception type to print missing when x is absent from nums.",
      "hint_ko": "리스트에 없는 값을 .remove(x)로 지우려 하면 ValueError 예외가 발생합니다.",
      "hint_en": "Attempting nums.remove(x) when x is not in nums raises ValueError.",
      "templateCode": "nums = [10, 20, 30]\nx = int(input())\ntry:\n    nums.§§§§§§(x)\nexcept §§§§§§§§§§:\n    print(\"missing\")\nprint(nums)",
      "targetCode": "nums = [10, 20, 30]\nx = int(input())\ntry:\n    nums.remove(x)\nexcept ValueError:\n    print(\"missing\")\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "20",
          "expectedOutput": "[10, 30]"
        },
        {
          "id": 2,
          "input": "99",
          "expectedOutput": "missing\n[10, 20, 30]"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "while 반복문으로 data 안에 0이 남아 있는 동안 0을 하나씩 지우며 removed를 1씩 늘리고, 남은 리스트와 삭제 횟수를 출력해보세요.",
      "prompt_en": "Use a while loop to remove every 0 from data while incrementing removed, then print data and removed.",
      "hint_ko": ".remove(0)은 한 번에 첫 0만 지우므로 while 0 in data: 조건으로 반복하면 모든 0을 제거할 수 있습니다.",
      "hint_en": "Since .remove(0) removes only one 0 per call, repeat with while 0 in data: to remove all zeros.",
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
      "prompt_ko": "대기열 맨 앞(0번)에 vip를 끼워 넣고 뒤에 group 명단을 이어 붙여 반환하도록 함수 안의 두 빈칸을 채워보세요.",
      "prompt_en": "Fill in the two list methods inside build_queue to insert vip at index 0 and extend with group.",
      "hint_ko": "인덱스 0 위치 삽입은 q.insert(0, vip), 리스트 병합 확장은 q.extend(group)을 사용합니다.",
      "hint_en": "Use q.insert(0, vip) to prepend at index 0 and q.extend(group) to append all items in group.",
      "templateCode": "def build_queue(vip, group):\n    q = [\"host\"]\n    q.§§§§§§(0, vip)\n    q.§§§§§§(group)\n    return q\n\nprint(build_queue(\"Kim\", [\"Lee\", \"Park\"]))",
      "targetCode": "def build_queue(vip, group):\n    q = [\"host\"]\n    q.insert(0, vip)\n    q.extend(group)\n    return q\n\nprint(build_queue(\"Kim\", [\"Lee\", \"Park\"]))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['Kim', 'host', 'Lee', 'Park']"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[30, 40]이 중첩 리스트째 들어가 합계 계산 시 TypeError가 나는 버그를 고쳐 원소들이 평평하게 이어 붙도록 수정해보세요.",
      "prompt_en": "Fix the bug where [30, 40] is appended as a nested list causing TypeError in sum(nums).",
      "hint_ko": ".append([30, 40]) 대신 .extend([30, 40])을 써야 숫자 원소 30과 40이 각각 리스트에 이어 붙습니다.",
      "hint_en": "Replace .append([30, 40]) with .extend([30, 40]) so 30 and 40 are added as individual numbers.",
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
      "kind": "one_line",
      "prompt_ko": "리스트를 조작하는 코드 아래에 한 줄을 추가하여 전체 요소 개수와 첫 번째 요소를 공백으로 출력해보세요. (출력 예: 4 5)",
      "prompt_en": "Add one line below the list operations to print the length of nums and its first item separated by space.",
      "hint_ko": "마지막 줄에 print(len(nums), nums[0])을 작성해 길이와 0번 요소를 함께 출력하세요.",
      "hint_en": "Write print(len(nums), nums[0]) on the last line.",
      "templateCode": "nums = [10, 20]\nnums.insert(0, 5)\nnums.extend([30, 40])\nnums.remove(20)\n§§§§§§§§§§§§§§§§§§§§§§§§§",
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
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 리스트 메서드들을 순서대로 실행했을 때 출력되는 결과를 선택해보세요.",
      "prompt_en": "Select the exact output produced after running these list methods in order.",
      "hint_ko": "remove(2)는 첫 2만 지워 [1, 3, 2]가 되고, 인덱스 1에 9를 끼워 넣으면 [1, 9, 3, 2], 끝에 [4]를 확장하면 [1, 9, 3, 2, 4]입니다.",
      "hint_en": "remove(2) leaves [1, 3, 2]; insert(1, 9) makes [1, 9, 3, 2]; extend([4]) yields [1, 9, 3, 2, 4].",
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
