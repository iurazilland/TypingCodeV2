import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_40: PracticeRound = {
  "id": "py-basic-r40",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 40,
  "title_ko": "40레벨: 리스트 요소 추가와 삽입",
  "title_en": "Level 40: Appending & Inserting List Elements",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "type",
    "method",
    "for_range",
    "range"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "리스트 nums = [10, 20, 30]의 맨 뒤에 .append()로 40을 추가하고 출력해보세요.",
      "prompt_en": "Use .append() to add 40 to the end of nums = [10, 20, 30] and print nums.",
      "hint_ko": "변수 블록에 nums를 적고 옆에 연결된 append 메서드 칸에 40을 넣은 뒤 print(nums)를 실행하세요.",
      "hint_en": "Call nums.append(40) using the attached append method block, then print(nums).",
      "targetCode": "nums = [10, 20, 30]\nnums.append(40)\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 20, 30, 40]"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 메서드를 채워 cart 리스트 맨 끝에 \"egg\"를 추가하고 출력해보세요.",
      "prompt_en": "Fill in the method name to add \"egg\" to the end of cart and print it.",
      "hint_ko": "리스트의 맨 뒤에 새 요소를 하나 추가하는 메서드는 append입니다.",
      "hint_en": "Use the append method to add an item to the end of a list.",
      "templateCode": "cart = [\"milk\", \"bread\"]\ncart.§§§§§§(\"egg\")\nprint(cart)",
      "targetCode": "cart = [\"milk\", \"bread\"]\ncart.append(\"egg\")\nprint(cart)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['milk', 'bread', 'egg']"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "빈 리스트 items를 만든 뒤 100과 200을 차례대로 추가하고 출력해보세요.",
      "prompt_en": "Create an empty list items, append 100 and 200 in order, and print items.",
      "hint_ko": "리스트 블록에 변수명 items만 적고 항목 칸은 비워두면 빈 리스트 []가 됩니다. 그 아래에서 append를 두 번 호출하세요.",
      "hint_en": "Leave the list block item slot empty for items = [], then call items.append(100) and items.append(200).",
      "targetCode": "items = []\nitems.append(100)\nitems.append(200)\nprint(items)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[100, 200]"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "list()로 빈 리스트를 선언하고 \"key\"와 \"map\"을 순서대로 추가해 출력해보세요.",
      "prompt_en": "Create an empty list with list(), append \"key\" and \"map\" in order, and print bag.",
      "hint_ko": "list()로 빈 리스트를 만들 수 있으며, 요소 추가는 .append() 메서드를 사용합니다.",
      "hint_en": "Use list() for an empty list and .append() to add elements.",
      "templateCode": "bag = §§§§§§\nbag.§§§§§§(\"key\")\nbag.append(\"map\")\nprint(bag)",
      "targetCode": "bag = list()\nbag.append(\"key\")\nbag.append(\"map\")\nprint(bag)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['key', 'map']"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": ".insert()를 사용해 nums = [10, 20, 30]의 맨 앞(0번 위치)에 5를 삽입하고 출력해보세요.",
      "prompt_en": "Use .insert() to insert 5 at index 0 of nums = [10, 20, 30] and print nums.",
      "hint_ko": "insert 메서드의 인자 칸에 위치와 값을 쉼표로 구분해 0, 5 형태로 입력하세요.",
      "hint_en": "Pass index and value as 0, 5 to nums.insert(0, 5), then print(nums).",
      "targetCode": "nums = [10, 20, 30]\nnums.insert(0, 5)\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[5, 10, 20, 30]"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 1번 인덱스 위치에 \"B\"를 끼워 넣은 리스트를 출력해보세요.",
      "prompt_en": "Fill in the blanks to insert \"B\" at index 1 and print chars.",
      "hint_ko": "특정 위치에 삽입하는 메서드는 insert(인덱스, 값) 순서로 작성합니다.",
      "hint_en": "Use insert(index, value) with method name insert and index 1.",
      "templateCode": "chars = [\"A\", \"C\"]\nchars.§§§§§§(§, \"B\")\nprint(chars)",
      "targetCode": "chars = [\"A\", \"C\"]\nchars.insert(1, \"B\")\nprint(chars)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['A', 'B', 'C']"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": ".extend() 메서드로 리스트 a = [1, 2] 뒤에 b = [3, 4]의 요소들을 확장해 출력해보세요.",
      "prompt_en": "Use .extend() to append all elements of b = [3, 4] onto a = [1, 2] and print a.",
      "hint_ko": "a.extend(b)를 호출하면 리스트 a 뒤에 b의 모든 요소가 풀려서 추가됩니다.",
      "hint_en": "Call a.extend(b) to add every element of b to list a, then print(a).",
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
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 메서드를 채워 team 리스트 뒤에 more의 모든 요소를 이어 붙여 출력해보세요.",
      "prompt_en": "Fill in the method to extend team with all elements of more and print team.",
      "hint_ko": "다른 리스트의 요소들을 한꺼번에 펼쳐서 추가할 때는 extend 메서드를 사용합니다.",
      "hint_en": "Use the extend method to add multiple items from another list.",
      "templateCode": "team = [\"Kim\", \"Lee\"]\nmore = [\"Park\", \"Choi\"]\nteam.§§§§§§(more)\nprint(team)",
      "targetCode": "team = [\"Kim\", \"Lee\"]\nmore = [\"Park\", \"Choi\"]\nteam.extend(more)\nprint(team)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['Kim', 'Lee', 'Park', 'Choi']"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "3번 반복하며 정수를 입력받아 빈 리스트 nums에 순서대로 추가하고 출력해보세요.",
      "prompt_en": "Loop 3 times to read integers from input, append each to nums, and print nums.",
      "hint_ko": "for i in range(3): 안에서 n = int(input())을 받고 nums.append(n)을 실행한 뒤 반복문 밖에서 print(nums)를 호출하세요.",
      "hint_en": "Inside for i in range(3):, read n = int(input()) and call nums.append(n), then print(nums) outside.",
      "targetCode": "nums = []\nfor i in range(3):\n    n = int(input())\n    nums.append(n)\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "10\n20\n30",
          "expectedOutput": "[10, 20, 30]"
        },
        {
          "id": 2,
          "input": "5\n15\n25",
          "expectedOutput": "[5, 15, 25]"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 두 줄의 문자열을 입력받아 words 리스트에 담아 출력해보세요.",
      "prompt_en": "Fill in the blanks to read two lines of strings into words and print the list.",
      "hint_ko": "입력받은 문자열 변수 w를 words.append(w)로 리스트에 추가하세요.",
      "hint_en": "Append each input string w using words.append(w).",
      "templateCode": "words = list()\nfor i in range(2):\n    w = input()\n    words.§§§§§§(§)\nprint(words)",
      "targetCode": "words = list()\nfor i in range(2):\n    w = input()\n    words.append(w)\nprint(words)",
      "testCases": [
        {
          "id": 1,
          "input": "hi\nbye",
          "expectedOutput": "['hi', 'bye']"
        },
        {
          "id": 2,
          "input": "cat\ndog",
          "expectedOutput": "['cat', 'dog']"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "None이 출력되는 버그를 수정하여 40이 추가된 [10, 20, 30, 40]이 출력되게 고쳐보세요.",
      "prompt_en": "Fix the bug that prints None so the updated list [10, 20, 30, 40] is printed.",
      "hint_ko": ".append()는 원본 리스트를 직접 변경하고 None을 반환하므로 변수에 다시 대입하지 않고 단독으로 호출해야 합니다.",
      "hint_en": ".append() mutates the list in place and returns None. Call it without reassigning nums = ...",
      "templateCode": "nums = [10, 20, 30]\nnums = nums.append(40)\nprint(nums)",
      "targetCode": "nums = [10, 20, 30]\nnums.append(40)\nprint(nums)",
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
      "prompt_ko": "반복 입력 코드 아래에 한 줄을 추가하여 완성된 리스트 nums를 출력해보세요.",
      "prompt_en": "Add one line below the loop to print the completed list nums.",
      "hint_ko": "반복문이 끝난 뒤 들여쓰기 없이 print(nums)를 작성하세요.",
      "hint_en": "Write print(nums) without indentation after the for loop.",
      "templateCode": "nums = list()\nfor i in range(2):\n    nums.append(int(input()))\n§§§§§§§§§§§",
      "targetCode": "nums = list()\nfor i in range(2):\n    nums.append(int(input()))\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "10\n20",
          "expectedOutput": "[10, 20]"
        },
        {
          "id": 2,
          "input": "7\n8",
          "expectedOutput": "[7, 8]"
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
      "hint_ko": "[10, 20] 뒤에 30이 추가되어 [10, 20, 30]이 된 후, 1번 인덱스 자리에 15가 끼어듭니다.",
      "hint_en": "append(30) makes [10, 20, 30], then insert(1, 15) places 15 at index 1.",
      "targetCode": "a = [10, 20]\na.append(30)\na.insert(1, 15)\nprint(a)",
      "choices": [
        "[10, 15, 20, 30]",
        "[15, 10, 20, 30]",
        "[10, 20, 15, 30]",
        "[10, 20, 30, 15]"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 15, 20, 30]"
        }
      ]
    }
  ]
};
