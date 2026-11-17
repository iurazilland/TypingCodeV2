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
  "totalQuestions": 15,
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 대괄호([]) 안에 여러 값을 쉼표로 담아 리스트를 만들고 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the code that creates a list inside square brackets ([]) and prints it.",
      "hint_ko": "대괄호로 감싼 값들을 변수에 대입하면 하나의 리스트로 묶여 저장됩니다.",
      "hint_en": "Assigning comma-separated values inside square brackets creates a list.",
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
      "prompt_ko": "[빈칸 채우기] 과일 리스트 fruits의 첫 문자열과 빈 리스트 empty를 완성해 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in \"apple\" in fruits and [] for empty, then print both.",
      "hint_ko": "첫 빈칸에는 \"apple\"을, 둘째 빈칸에는 빈 리스트를 뜻하는 []를 작성하세요.",
      "hint_en": "Write \"apple\" in the first blank and [] for an empty list.",
      "templateCode": "fruits = [§§§§§§§, \"banana\"]\nempty = §§\nprint(fruits)\nprint(empty)",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] len()으로 리스트 요소 개수를 구하고 [0], [-1]로 양끝 요소를 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Use len() to count items and [0], [-1] to print the first and last items.",
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
      "prompt_ko": "[빈칸 채우기] colors 리스트의 요소 개수와 두 번째 요소, 맨 마지막 요소를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the blanks to print the length of colors, its 2nd item, and its last item.",
      "hint_ko": "길이 함수 len과 맨 끝 요소를 가리키는 음수 번호 -1을 차례로 채우세요.",
      "hint_en": "Fill in len for the length and -1 for the last element.",
      "templateCode": "colors = [\"red\", \"green\", \"blue\"]\nprint(§§§(colors))\nprint(colors[1], colors[§§])",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 문자열에 .split()을 호출해 단어 리스트를 만들고 개수와 첫 단어를 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Call .split() on a string to create a list of words, then print its length and first word.",
      "hint_ko": ".split()의 결과는 리스트이므로 len()으로 단어 개수를 세거나 [0]으로 첫 단어를 꺼낼 수 있습니다.",
      "hint_en": "Because .split() returns a list, you can pass it to len() or index words[0].",
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
      "prompt_ko": "[빈칸 채우기] 한 줄 입력을 공백 기준으로 나눈 리스트에서 첫 단어와 마지막 단어를 출력해보세요.",
      "prompt_en": "[Fill Blank] Split the input line by spaces and print the first and last words.",
      "hint_ko": "공백 기준으로 쪼개는 메서드 split과 맨 뒤 음수 인덱스 -1을 각각 적으세요.",
      "hint_en": "Call split() to divide text by spaces and use -1 for the last position.",
      "templateCode": "words = input().§§§§§()\nprint(f\"First:{words[0]}\")\nprint(f\"Last:{words[§§]}\")",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] if items: 조건문으로 리스트가 비어 있지 않을 때 개수와 첫 요소를 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Use if items: to check that the list is non-empty and print its count and first item.",
      "hint_ko": "if items:만으로 리스트에 요소가 하나라도 들어 있는지 간결하게 검사할 수 있습니다.",
      "hint_en": "Writing if items: checks that a list has at least one element.",
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
      "prompt_ko": "[빈칸 채우기] 빈 리스트의 논리값을 확인하고, items가 비어 있지 않을 때 개수와 마지막 요소를 출력해보세요.",
      "prompt_en": "[Fill Blank] Print the boolean value of empty, and if items is truthy, print its count and last item.",
      "hint_ko": "논리 변환 함수 bool과 요소 개수를 구하는 함수 len을 차례로 채우세요.",
      "hint_en": "Use bool to check truthiness and len to count the elements.",
      "templateCode": "empty = []\nitems = [\"key\", \"map\"]\nprint(§§§§(empty))\nif items:\n    print(f\"Ready:{§§§(items)},End:{items[-1]}\")",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] while i < len(nums): 조건으로 리스트의 모든 요소를 순회하며 합산하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Use while i < len(nums): to step through every index and sum the elements.",
      "hint_ko": "0부터 시작하는 인덱스 i를 1씩 늘리면서 nums[i]로 각 위치의 값을 꺼내 합산합니다.",
      "hint_en": "Start index i at 0, add nums[i] to total each turn, and increment i by 1.",
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
      "prompt_ko": "[빈칸 채우기] 인덱스 i가 리스트 길이보다 작을 동안 반복하며 번호와 요소를 한 줄씩 출력해보세요.",
      "prompt_en": "[Fill Blank] Loop while index i is less than the list length and print each index and item.",
      "hint_ko": "리스트 길이를 구하는 len 함수와 대괄호 안의 현재 인덱스 변수 i를 채우세요.",
      "hint_en": "Compare against len(tags) and index the list with i.",
      "templateCode": "tags = [\"A\", \"B\", \"C\"]\ni = 0\nwhile i < §§§(tags):\n    print(f\"{i}:{tags[§]}\")\n    i += 1",
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
      "prompt_ko": "[틀린 곳 수정] while 조건식의 비교 연산자 방향이 잘못되어 리스트 요소가 출력되지 않는 버그를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the comparison operator in the while condition so 10, 20, 30 are printed.",
      "hint_ko": "인덱스 i가 0부터 시작하므로 len(nums)보다 작을(<) 동안 반복하도록 >를 <로 고치세요.",
      "hint_en": "Change > to < so the loop runs while i is less than len(nums).",
      "templateCode": "nums = [10, 20, 30]\ni = 0\nwhile i > len(nums):\n    print(nums[i])\n    i += 1",
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
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 첫 단어와 마지막 단어를 출력하려다 두 번째 단어가 출력되는 인덱스 버그를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the list index so the first word and last word are printed.",
      "hint_ko": "리스트의 첫 번째 요소 인덱스는 1이 아니라 0입니다.",
      "hint_en": "The first element of a list is at index 0, not 1.",
      "templateCode": "words = input().split()\nprint(words[1], words[-1])",
      "targetCode": "words = input().split()\nprint(words[0], words[-1])",
      "testCases": [
        {
          "id": 1,
          "input": "py js go",
          "expectedOutput": "py go"
        },
        {
          "id": 2,
          "input": "cat dog",
          "expectedOutput": "cat dog"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 한 줄 입력을 공백 기준으로 나누어 단어 리스트 words에 저장하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the line that splits input() by spaces into words.",
      "hint_ko": "words = input().split() 형태로 입력 문자열을 공백 기준 리스트로 만드세요.",
      "hint_en": "Write words = input().split() on the first line.",
      "templateCode": "§§§§§§§§§§§§§§§§§§§§§§§\nprint(f\"{len(words)}:{words[-1]}\")",
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
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 리스트 nums의 첫 요소와 마지막 요소를 더해 ends에 저장하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the line that sums the first and last elements of nums into ends.",
      "hint_ko": "ends = nums[0] + nums[-1] 형태로 양끝 요소를 더해 저장하세요.",
      "hint_en": "Write ends = nums[0] + nums[-1] to add the first and last numbers.",
      "templateCode": "nums = [10, 20, 30, 40]\n§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(ends)",
      "targetCode": "nums = [10, 20, 30, 40]\nends = nums[0] + nums[-1]\nprint(ends)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "50"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 리스트 불리언 판별과 인덱싱 코드의 실행 결과를 예측해보세요.",
      "prompt_en": "[Predict Output] Select the exact output printed when the following Python code runs.",
      "hint_ko": "요소가 든 리스트와 빈 리스트의 참/거짓 판정값, 요소 개수, 두 번째 및 마지막 요소를 확인하세요.",
      "hint_en": "Compare the truthiness of a populated list vs an empty list, then check count, 2nd item, and last item.",
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
