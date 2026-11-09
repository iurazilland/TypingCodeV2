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
      "prompt_ko": "리스트의 .insert(인덱스, 값) 메서드는 지정한 인덱스 위치에 새 요소를 끼워 넣고 기존 요소들을 뒤로 한 칸씩 밀어냅니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "The list .insert(index, value) method places a new element at the specified index and shifts existing elements one position to the right. Trace the block code.",
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
      "prompt_ko": "원하는 인덱스에 요소를 끼워 넣는 메서드를 빈칸에 채워 맨 앞(0번)에 \"A\"를 추가하고 출력해보세요.",
      "prompt_en": "Fill in the method name that inserts an item at a given index to place \"A\" at index 0 and print items.",
      "hint_ko": "맨 끝에 덧붙이는 .append()와 달리, 지정한 위치 안으로 '끼워 넣다'(in- + sert)라는 뜻의 6글자 동사 메서드를 사용합니다.",
      "hint_en": "Unlike .append() which adds to the end, combine 'in-' + 'sert' for the 6-letter method that places an item at a given index.",
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
      "prompt_ko": "리스트의 .remove(값) 메서드는 리스트를 앞에서부터 탐색하여 전달한 값과 일치하는 첫 번째 요소 하나만 삭제합니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "The list .remove(value) method scans from the beginning of the list and deletes only the first element that matches value. Trace the block code.",
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
      "prompt_ko": "빈칸에 일치하는 값을 찾아 삭제하는 메서드 이름을 채워 85를 지우고 끝에 100을 붙인 리스트를 출력해보세요.",
      "prompt_en": "Fill in the method name that deletes a matching value to remove 85, append 100, and print scores.",
      "hint_ko": "접두사 re-(다시)와 move(옮기다)가 합쳐져 특정 값을 찾아 '제거하다'라는 뜻을 가진 6글자 리스트 메서드를 호출하세요.",
      "hint_en": "Combine 're-' (away) + 'move' for the 6-letter list method that deletes a matching value.",
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
      "prompt_ko": "리스트의 .extend(다른리스트) 메서드는 다른 리스트에 들어 있는 모든 원소를 낱개로 풀어 기존 리스트 끝에 차례대로 이어 붙입니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "The list .extend(other_list) method unpacks all elements from another list and appends them individually to the end of the original list. Trace the block code.",
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
      "prompt_ko": "첫 빈칸에는 다른 리스트 원소들을 이어 붙이는 메서드를, 둘째 빈칸에는 리스트를 전부 비우는 메서드를 채워보세요.",
      "prompt_en": "Fill in the method to append all elements from extra and the method to empty extra completely.",
      "hint_ko": "첫 빈칸은 리스트를 '확장하다'(ex- + tend) 뜻의 6글자 메서드, 둘째 빈칸은 안을 '깨끗이 비우다'라는 뜻의 5글자 메서드를 씁니다.",
      "hint_en": "First, combine 'ex-' + 'tend' for the 6-letter merging method; second, use the 5-letter method meaning 'to make clean and empty'.",
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
      "prompt_ko": ".remove(값)는 찾는 값이 리스트에 없으면 ValueError를 일으키므로, if target in tags: 조건으로 포함 여부를 먼저 확인한 뒤 삭제하면 안전합니다. 블록의 코드를 따라 입력해보세요. (터미널 입력: js)",
      "prompt_en": "Because .remove(value) raises ValueError when the value is absent, checking membership first with if target in tags: lets you delete items safely. Trace the block code. (Terminal input: js)",
      "hint_ko": "in 연산자가 True일 때만 .remove()가 실행되므로 없는 값을 입력해도 에러 없이 기존 리스트가 유지됩니다.",
      "hint_en": "Since .remove() runs only when in evaluates to True, missing inputs leave the list untouched without crashing.",
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
      "prompt_ko": "입력 정수를 값 기준으로 삭제하되, 리스트에 없을 때 발생하는 값 예외를 잡아 missing을 출력하도록 빈칸을 채워보세요. (터미널 입력: 20)",
      "prompt_en": "Fill in the removal method and exception type to print missing when x is absent from nums. (Terminal input: 20)",
      "hint_ko": "값을 찾아 '제거하는'(re- + move) 6글자 메서드를 호출했을 때 대상이 없으면, '값(Value)'과 '오류(Error)'를 파스칼 표기법으로 합친 예외가 발생합니다.",
      "hint_en": "Call the 6-letter removal method ('re-' + 'move'), and catch the PascalCase exception combining 'Value' and 'Error'.",
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
      "prompt_ko": ".remove()는 한 번 호출할 때 첫 번째 일치 값만 지우므로, while 값 in 리스트: 반복문과 결합하면 중복된 특정 값을 끝까지 모두 제거할 수 있습니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Since .remove() deletes only one match per call, pairing it with a while value in list: loop removes all occurrences of that value. Trace the block code.",
      "hint_ko": "반복할 때마다 removed += 1을 함께 수행하면 총 몇 개의 원소가 삭제되었는지도 정확히 셀 수 있습니다.",
      "hint_en": "Incrementing removed += 1 on each iteration also counts exactly how many elements were deleted.",
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
      "hint_ko": "0번 위치에 '끼워 넣는'(in- + sert) 6글자 메서드와, 그룹 원소들을 풀어 뒤로 '확장하는'(ex- + tend) 6글자 메서드를 차례로 쓰세요.",
      "hint_en": "First use the 6-letter method to 'put into' index 0 ('in-' + 'sert'), then the 6-letter method to 'stretch out' the queue ('ex-' + 'tend').",
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
      "hint_ko": ".append()는 전달한 리스트를 통째로 하나의 중첩 요소로 넣습니다. 안쪽 원소들을 낱개로 풀어 이어 붙이는 '확장하다'(ex- + tend) 뜻의 메서드로 바꿔보세요.",
      "hint_en": ".append() nests the list as a single element; replace it with the 6-letter method ('ex-' + 'tend') that unpacks and adds each number.",
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
      "hint_ko": "'길이(length)'의 앞 세 글자를 딴 내장 함수로 구한 요소 개수와 0번 인덱스 요소를 나란히 출력 함수에 전달하세요.",
      "hint_en": "Pass the item count (using the 3-letter function from 'length') and the index-0 element together to the output call.",
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
      "hint_ko": "값 삭제는 앞쪽의 첫 번째 일치 항목만 지운다는 점과, 지정 인덱스에 끼워 넣을 때 뒤쪽 원소들이 밀리는 순서를 차례대로 추적해보세요.",
      "hint_en": "Trace each step carefully: value removal deletes only the first match, index insertion shifts later items right, and extension adds to the end.",
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