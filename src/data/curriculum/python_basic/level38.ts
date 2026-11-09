import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_38: PracticeRound = {
  "id": "py-basic-r38",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 38,
  "title_ko": "38레벨: 리스트 생성, 길이(len)와 인덱싱",
  "title_en": "Level 38: List Creation, len() & Indexing",
  "description_ko": "1차원 리스트와 빈 리스트를 만들고, len()과 양수·음수 인덱싱 및 .split() 결과를 다루는 법을 익힙니다.",
  "description_en": "Learn to create 1D and empty lists, inspect length with len(), use positive/negative indexing, and handle .split() lists.",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "type",
    "math",
    "method",
    "if",
    "while"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "파이썬 리스트(list)는 대괄호([]) 안에 여러 값을 쉼표로 구분해 순서대로 담아 관리하는 자료구조입니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "A Python list stores multiple items in order inside square brackets ([]) separated by commas. Follow the blocks and type the code.",
      "hint_ko": "대괄호로 감싼 값들을 변수에 대입하면 하나의 리스트로 묶여 저장되며, print()로 리스트 전체를 확인할 수 있습니다.",
      "hint_en": "Assigning comma-separated values inside square brackets creates a list that can be printed all at once.",
      "targetCode": "nums = [10, 20, 30]\nprint(nums)",
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
      "prompt_ko": "대괄호 기호를 채워 과일 리스트 fruits와 아무 요소도 없는 빈 리스트 empty를 만들어 각각 출력해보세요.",
      "prompt_en": "Fill in the square brackets to create fruits and an empty list empty, then print both.",
      "hint_ko": "파이썬 리스트는 대괄호 기호로 양끝을 감싸 만들며, 안을 비워두면 요소가 없는 빈 리스트가 됩니다.",
      "hint_en": "Enclose list items inside square brackets, and place an empty pair of square brackets for an empty list.",
      "templateCode": "fruits = §\"apple\", \"banana\"§\nempty = §§\nprint(fruits)\nprint(empty)",
      "targetCode": "fruits = [\"apple\", \"banana\"]\nempty = []\nprint(fruits)\nprint(empty)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['apple', 'banana']\n[]"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "len() 함수는 리스트에 담긴 요소의 개수를 구해주며, 대괄호 인덱스 [0]은 첫 번째 요소를, [-1]은 맨 마지막 요소를 가리킵니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "The len() function returns the number of items in a list, while index [0] accesses the first item and [-1] accesses the last item. Follow the blocks and type the code.",
      "hint_ko": "리스트 인덱싱도 문자열과 마찬가지로 앞에서부터는 0부터, 뒤에서부터는 -1부터 시작합니다.",
      "hint_en": "Just like strings, list indexing starts at 0 from the front and -1 from the back.",
      "targetCode": "nums = [10, 20, 30, 40]\nprint(len(nums))\nprint(nums[0], nums[-1])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "4\n10 40"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 colors 리스트의 요소 개수와 두 번째 요소(\"green\"), 맨 마지막 요소를 출력해보세요.",
      "prompt_en": "Fill in the blanks to print the length of colors, its second element, and its last element.",
      "hint_ko": "'길이(length)'의 앞 세 글자를 딴 내장 함수와, 0부터 세는 두 번째 위치 번호 및 거꾸로 세는 맨 끝 음수 번호를 차례로 채우세요.",
      "hint_en": "Fill in the 3-letter function from 'length', the 0-based index for the second item, and the negative index for the last item.",
      "templateCode": "colors = [\"red\", \"green\", \"blue\"]\nprint(§§§(colors))\nprint(colors[§], colors[§§])",
      "targetCode": "colors = [\"red\", \"green\", \"blue\"]\nprint(len(colors))\nprint(colors[1], colors[-1])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3\ngreen blue"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "문자열에 .split()을 호출하면 공백을 기준으로 단어들이 쪼개져 담긴 새 리스트가 반환됩니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Calling .split() on a string divides it by whitespace and returns a new list of words. Follow the blocks and type the code.",
      "hint_ko": ".split()의 결과는 리스트이므로 len()으로 단어 개수를 세거나 [0]으로 첫 번째 단어를 꺼낼 수 있습니다.",
      "hint_en": "Because .split() returns a list, you can pass it to len() or index its elements like words[0].",
      "targetCode": "text = \"red green blue\"\nwords = text.split()\nprint(len(words))\nprint(words[0])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3\nred"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "한 줄 입력을 공백 기준으로 나눈 리스트에서 첫 단어와 마지막 단어를 출력해보세요. (출력 예: First:py) (터미널 입력: py js go)",
      "prompt_en": "Split the input line by spaces and print the first and last words (e.g., First:py). (Terminal input: py js go)",
      "hint_ko": "공백 기준으로 문자열을 '쪼개다'라는 뜻의 다섯 글자 메서드로 리스트를 만든 뒤, 맨 앞 번호와 맨 뒤 음수 번호를 각각 적으세요.",
      "hint_en": "Call the 5-letter method meaning to divide text by spaces, then index the very first position and the negative last position.",
      "templateCode": "words = input().§§§§§()\nprint(f\"First:{words[§]}\")\nprint(f\"Last:{words[§§]}\")",
      "targetCode": "words = input().split()\nprint(f\"First:{words[0]}\")\nprint(f\"Last:{words[-1]}\")",
      "testCases": [
        {
          "id": 1,
          "input": "py js go",
          "expectedOutput": "First:py\nLast:go"
        },
        {
          "id": 2,
          "input": "cat dog",
          "expectedOutput": "First:cat\nLast:dog"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "if 조건문에 리스트 변수를 그대로 쓰면 요소가 하나라도 있을 때 참(True), 빈 리스트([])일 때 거짓(False)으로 판별됩니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Using a list directly in an if condition evaluates to True when the list is non-empty and False when it is empty ([]). Follow the blocks and type the code.",
      "hint_ko": "len(items) > 0이라고 길게 쓰지 않아도 if items:만으로 리스트가 비어 있지 않은지 간결하게 검사할 수 있습니다.",
      "hint_en": "Writing if items: is the idiomatic Python way to check that a list has at least one element.",
      "targetCode": "items = [\"sword\", \"shield\"]\nif items:\n    print(f\"Bag:{len(items)},Main:{items[0]}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Bag:2,Main:sword"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈 리스트의 논리값을 확인하고, items가 비어 있지 않을 때 개수와 마지막 요소를 출력해보세요. (출력 예: Ready:2,End:map)",
      "prompt_en": "Print the boolean value of empty, and if items is truthy, print its count and last element.",
      "hint_ko": "'불리언(boolean)' 앞 네 글자를 딴 논리 변환 함수, 조건 분기 키워드, 그리고 '길이(length)' 앞 세 글자를 딴 개수 함수를 차례로 채우세요.",
      "hint_en": "Use the 4-letter truth-conversion function from 'boolean', the conditional keyword, and the 3-letter count function from 'length'.",
      "templateCode": "empty = []\nitems = [\"key\", \"map\"]\nprint(§§§§(empty))\n§§ items:\n    print(f\"Ready:{§§§(items)},End:{items[-1]}\")",
      "targetCode": "empty = []\nitems = [\"key\", \"map\"]\nprint(bool(empty))\nif items:\n    print(f\"Ready:{len(items)},End:{items[-1]}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "False\nReady:2,End:map"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "while i < len(리스트): 조건을 사용하면 0번 인덱스부터 마지막 인덱스까지 리스트의 모든 요소를 순서대로 방문해 누적할 수 있습니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Using while i < len(list): lets you step through every valid index from 0 to the end of the list. Follow the blocks and type the code.",
      "hint_ko": "0부터 시작하는 인덱스 i를 매 반복마다 1씩 늘리면서 nums[i]로 각 위치의 값을 꺼내 합산합니다.",
      "hint_en": "Start index i at 0, add nums[i] to the running total each turn, and increment i by 1.",
      "targetCode": "nums = [10, 20, 30]\ni = 0\ntotal = 0\nwhile i < len(nums):\n    total += nums[i]\n    i += 1\nprint(f\"Sum:{total}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Sum:60"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "인덱스 i가 리스트 길이보다 작을 동안 반복하며 번호와 요소를 한 줄씩 출력해보세요. (출력 예: 0:A)",
      "prompt_en": "Loop while index i is less than the list length and print each index and item (e.g., 0:A).",
      "hint_ko": "'~하는 동안'을 뜻하는 조건 반복 키워드와 '길이(length)' 앞 세 글자 함수로 범위를 잡고, 대괄호 안에 현재 인덱스 변수를 넣으세요.",
      "hint_en": "Start with the loop keyword meaning 'as long as', compare against the 3-letter length function, and index the list with the loop counter.",
      "templateCode": "tags = [\"A\", \"B\", \"C\"]\ni = 0\n§§§§§ i < §§§(tags):\n    print(f\"{i}:{tags[§]}\")\n    i += 1",
      "targetCode": "tags = [\"A\", \"B\", \"C\"]\ni = 0\nwhile i < len(tags):\n    print(f\"{i}:{tags[i]}\")\n    i += 1",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "0:A\n1:B\n2:C"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "반복 조건의 비교 연산자 버그로 인해 발생하는 인덱스 범위 오류를 고쳐 10, 20, 30을 한 줄씩 출력해보세요.",
      "prompt_en": "Fix the comparison operator bug in the while condition that causes an IndexError.",
      "hint_ko": "0번부터 시작하는 리스트의 마지막 유효 인덱스는 '전체 길이 - 1'입니다. 인덱스가 길이와 같아지기 전에 반복이 멈추도록 비교 연산자를 고치세요.",
      "hint_en": "Valid 0-based list indices stop one short of the list's length; change the comparison operator so the loop halts before reaching the length.",
      "templateCode": "nums = [10, 20, 30]\ni = 0\nwhile i <= len(nums):\n    print(nums[i])\n    i += 1",
      "targetCode": "nums = [10, 20, 30]\ni = 0\nwhile i < len(nums):\n    print(nums[i])\n    i += 1",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "10\n20\n30"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "단어 리스트 생성 코드 아래에 한 줄을 추가하여 단어 개수와 마지막 단어를 콜론으로 이어 출력해보세요. (출력 예: 3:go) (터미널 입력: py js go)",
      "prompt_en": "Add one line below to print the word count and last word separated by a colon (e.g., 3:go). (Terminal input: py js go)",
      "hint_ko": "분리된 단어 리스트의 전체 요소 개수와 음수 인덱스로 꺼낸 맨 마지막 단어를 콜론 양옆에 두어 포맷 문자열로 출력해보세요.",
      "hint_en": "Print a formatted string joining the list's element count and its negative-indexed last word with a colon.",
      "templateCode": "words = input().split()\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "words = input().split()\nprint(f\"{len(words)}:{words[-1]}\")",
      "testCases": [
        {
          "id": 1,
          "input": "py js go",
          "expectedOutput": "3:go"
        },
        {
          "id": 2,
          "input": "hello world",
          "expectedOutput": "2:world"
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
      "hint_ko": "요소가 든 리스트와 빈 리스트의 참/거짓 판정값을 먼저 비교한 뒤, 전체 요소 개수와 두 번째 위치 및 맨 끝 음수 위치의 문자를 차례로 확인하세요.",
      "hint_en": "Compare the truthiness of a populated list versus an empty list, then check the item count alongside the 2nd item and last item.",
      "targetCode": "items = \"A-B-C-D\".split(\"-\")\nempty = []\nprint(bool(items), bool(empty))\nprint(f\"{len(items)}:{items[1]}{items[-1]}\")",
      "choices": [
        "True False\n4:BD",
        "True False\n4:AD",
        "True True\n4:BD",
        "True False\n3:BC"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True False\n4:BD"
        }
      ]
    }
  ]
};
