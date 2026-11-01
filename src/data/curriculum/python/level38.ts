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
      "prompt_ko": "숫자 10, 20, 30이 순서대로 담긴 리스트 nums를 만들고 전체 리스트를 출력해보세요.",
      "prompt_en": "Create a list nums containing 10, 20, and 30, then print the entire list.",
      "hint_ko": "리스트 블록에 변수명 nums와 요소 10, 20, 30을 넣고 print(nums)로 출력하세요.",
      "hint_en": "Set the list variable nums to [10, 20, 30] and run print(nums).",
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
      "hint_ko": "파이썬 리스트는 대괄호 [ ]로 감싸며, 안을 비운 []는 요소가 0개인 빈 리스트가 됩니다.",
      "hint_en": "Wrap list items in [ ], and use [] to create an empty list.",
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
      "prompt_ko": "리스트 nums = [10, 20, 30, 40]의 길이와 첫 번째 요소, 마지막 요소(음수 인덱스)를 차례로 출력해보세요.",
      "prompt_en": "Print the length, first element, and last element (negative index) of nums = [10, 20, 30, 40].",
      "hint_ko": "길이는 len(nums), 첫 번째 요소는 nums[0], 마지막 요소는 nums[-1]로 가져옵니다.",
      "hint_en": "Use len(nums) for length, nums[0] for the first item, and nums[-1] for the last item.",
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
      "hint_ko": "개수를 세는 함수는 len이며, 두 번째 요소는 인덱스 1, 맨 마지막 요소는 음수 인덱스 -1입니다.",
      "hint_en": "Use len() for count, index 1 for the second item, and -1 for the last item.",
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
      "prompt_ko": "문자열 text = \"red green blue\"를 공백 기준으로 쪼개 words 리스트에 담고 개수와 첫 단어를 출력해보세요.",
      "prompt_en": "Split text = \"red green blue\" into words, then print its length and first word.",
      "hint_ko": "words = text.split()은 단어들이 담긴 리스트를 반환합니다. len(words)와 words[0]을 출력하세요.",
      "hint_en": "text.split() returns a list of words. Print len(words) and words[0].",
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
      "prompt_ko": "한 줄 입력을 공백 기준으로 나눈 리스트에서 첫 단어와 마지막 단어를 출력해보세요. (출력 예: First:py)",
      "prompt_en": "Split the input line by spaces and print the first and last words (e.g., First:py).",
      "hint_ko": "문자열 분리 메서드는 split()이며, 첫 요소는 인덱스 0, 마지막 요소는 인덱스 -1로 접근합니다.",
      "hint_en": "Use .split() to split into a list, then access index 0 and index -1.",
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
      "prompt_ko": "items = [\"sword\", \"shield\"]에 요소가 있으면 개수와 첫 아이템을 형식에 맞게 출력해보세요. (출력 예: Bag:2,Main:sword)",
      "prompt_en": "If items = [\"sword\", \"shield\"] is non-empty, print its count and first item (e.g., Bag:2,Main:sword).",
      "hint_ko": "비어 있지 않은 리스트는 조건문 if items:에서 참(True)으로 평가됩니다.",
      "hint_en": "A non-empty list evaluates to True in an if items: check.",
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
      "hint_ko": "논리형 변환 함수 bool([])은 False를 반환하며, 요소가 있는 리스트는 if 조건에서 True가 됩니다.",
      "hint_en": "bool([]) returns False, while a non-empty list is truthy in an if statement.",
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
      "prompt_ko": "while 반복문과 인덱스 i로 nums = [10, 20, 30]의 모든 요소를 total에 누적해 출력해보세요. (출력 예: Sum:60)",
      "prompt_en": "Use a while loop and index i to sum all elements of nums = [10, 20, 30] and print Sum:60.",
      "hint_ko": "while i < len(nums): 안에서 total += nums[i]와 i += 1을 순서대로 실행하세요.",
      "hint_en": "Loop while i < len(nums):, adding total += nums[i] and incrementing i += 1.",
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
      "hint_ko": "조건식 i < len(tags)가 참인 동안 tags[i]를 출력하고 i를 1씩 증가시킵니다.",
      "hint_en": "Repeat while i < len(tags):, printing tags[i] and incrementing i += 1.",
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
      "hint_ko": "길이가 3인 리스트의 유효한 인덱스는 0, 1, 2뿐이므로 i가 길이와 같아지기 전까지만 반복해야 합니다.",
      "hint_en": "Valid indices for length 3 are 0, 1, 2, so stop strictly before len(nums).",
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
      "prompt_ko": "단어 리스트 생성 코드 아래에 한 줄을 추가하여 단어 개수와 마지막 단어를 콜론으로 이어 출력해보세요. (출력 예: 3:go)",
      "prompt_en": "Add one line below to print the word count and last word separated by a colon (e.g., 3:go).",
      "hint_ko": "둘째 줄에 print(f\"{len(words)}:{words[-1]}\")를 작성해보세요.",
      "hint_en": "Write print(f\"{len(words)}:{words[-1]}\") on the second line.",
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
      "hint_ko": "items는 [\"A\", \"B\", \"C\", \"D\"]로 길이 4(참), empty는 빈 리스트(거짓)이며 items[1]은 B, items[-1]은 D입니다.",
      "hint_en": "items has 4 elements (True), empty is False, items[1] is B, and items[-1] is D.",
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
