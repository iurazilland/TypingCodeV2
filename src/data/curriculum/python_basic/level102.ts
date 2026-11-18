import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_102: PracticeRound = {
  "id": "py-basic-r102",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 102,
  "title_ko": "인덱스와 값을 함께 꺼내는 enumerate() 순회",
  "title_en": "Indexed Iteration with enumerate()",
  "description_ko": "시퀀스를 순회할 때 인덱스 번호와 요소 값을 동시에 언패킹하는 enumerate()와 시작 번호 지정(start=1)을 익힙니다.",
  "description_en": "Iterate over sequences while unpacking both index and value with enumerate() and custom start indices.",
  "totalQuestions": 15,
  "unlockedBlocks": [
    "comment",
    "print",
    "variable",
    "input",
    "type",
    "if",
    "for_range",
    "range",
    "for_in",
    "while",
    "break",
    "continue",
    "list",
    "tuple",
    "dict",
    "set",
    "iter",
    "method",
    "sorted",
    "math",
    "map",
    "def",
    "return",
    "class",
    "try"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] enumerate(items)로 0번부터 시작하는 인덱스와 요소 값을 동시에 꺼내 출력해보세요.",
      "prompt_en": "[Block] Use enumerate(items) in a for loop to unpack and print the 0-based index and value.",
      "hint_ko": "for idx, val in enumerate(items): 형태로 인덱스와 값을 두 변수에 나란히 언패킹합니다.",
      "hint_en": "Unpack the index and value directly in the for header: for idx, val in enumerate(items):.",
      "targetCode": "items = [\"pen\", \"book\", \"bag\"]\nfor idx, val in enumerate(items):\n    print(idx, val)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "0 pen\n1 book\n2 bag"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 리스트 요소의 0번 기준 인덱스와 값을 함께 꺼내 순회하도록 내장 함수를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the built-in function to iterate over both index and value of colors.",
      "hint_ko": "요소를 하나씩 번호 매겨 열거하는 아홉 글자 내장 함수를 입력하세요.",
      "hint_en": "Enter the 9-letter built-in function that yields (index, value) pairs.",
      "targetCode": "colors = [\"red\", \"blue\"]\nfor i, c in enumerate(colors):\n    print(f\"{i}:{c}\")",
      "templateCode": "colors = [\"red\", \"blue\"]\nfor i, c in §§§§§§§§§§(colors):\n    print(f\"{i}:{c}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "0:red\n1:blue"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] enumerate(players, 1)로 번호를 1번부터 매기며 순위표를 출력해보세요.",
      "prompt_en": "[Block] Use enumerate(players, 1) to print a 1-based leaderboard.",
      "hint_ko": "enumerate()의 두 번째 인자로 1을 전달하면 번호가 0이 아니라 1부터 시작합니다.",
      "hint_en": "Passing 1 as the second argument to enumerate() starts the numbering at 1 instead of 0.",
      "targetCode": "players = [\"Kim\", \"Lee\", \"Park\"]\nfor rank, name in enumerate(players, 1):\n    print(f\"{rank}위: {name}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1위: Kim\n2위: Lee\n3위: Park"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 메뉴 번호가 1번부터 시작하도록 enumerate()의 두 번째 시작 번호 인자를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the second argument of enumerate() so the menu numbering starts at 1.",
      "hint_ko": "시작 번호로 숫자 1을 두 번째 인자 자리에 입력하세요.",
      "hint_en": "Type the integer 1 as the second argument to start numbering from 1.",
      "targetCode": "menus = [\"tea\", \"cake\"]\nfor no, m in enumerate(menus, 1):\n    print(f\"{no}. {m}\")",
      "templateCode": "menus = [\"tea\", \"cake\"]\nfor no, m in enumerate(menus, §§):\n    print(f\"{no}. {m}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1. tea\n2. cake"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] enumerate()로 리스트를 순회하며 값이 음수인 요소만 0으로 덮어써서 원본 리스트를 수정해보세요.",
      "prompt_en": "[Block] Iterate with enumerate(nums) and replace any negative element at nums[i] with 0.",
      "hint_ko": "인덱스 i를 함께 알고 있으므로 조건이 맞을 때 nums[i] = 0으로 원본 위치를 바로 갱신할 수 있습니다.",
      "hint_en": "Having the index i lets you mutate nums[i] = 0 directly whenever val < 0.",
      "targetCode": "nums = [10, -5, 20, -3]\nfor i, val in enumerate(nums):\n    if val < 0:\n        nums[i] = 0\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 0, 20, 0]"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 짝수 인덱스(i % 2 == 0)에 위치한 단어들만 골라 모으도록 순회 함수를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the indexed iteration built-in to collect words at even indices.",
      "hint_ko": "인덱스 i와 단어 w를 함께 꺼내주는 아홉 글자 내장 함수를 적으세요.",
      "hint_en": "Write the 9-letter built-in function that unpacks both index i and word w.",
      "targetCode": "words = input().split()\npicks = [w for i, w in enumerate(words) if i % 2 == 0]\nprint(\" \".join(picks))",
      "templateCode": "words = input().split()\npicks = [w for i, w in §§§§§§§§§§(words) if i % 2 == 0]\nprint(\" \".join(picks))",
      "testCases": [
        {
          "id": 1,
          "input": "a b c d e",
          "expectedOutput": "a c e"
        },
        {
          "id": 2,
          "input": "py js go",
          "expectedOutput": "py go"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] list(enumerate(words))로 (인덱스, 값) 튜플 리스트를 확인하고 딕셔너리 컴프리헨션으로 번호 사전을 만들어보세요.",
      "prompt_en": "[Block] Print list(enumerate(words)) and build a 1-based dictionary using a dict comprehension.",
      "hint_ko": "enumerate()는 (인덱스, 값) 형태의 튜플을 차례대로 생성합니다.",
      "hint_en": "enumerate() yields (index, value) tuples that can be listed or unpacked into a dictionary.",
      "targetCode": "words = [\"a\", \"b\"]\nprint(list(enumerate(words)))\nd = {i: w for i, w in enumerate(words, 1)}\nprint(d)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[(0, 'a'), (1, 'b')]\n{1: 'a', 2: 'b'}"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 1번부터 번호를 키로, 단어를 값으로 하는 딕셔너리 컴프리헨션을 완성해보세요.",
      "prompt_en": "[Fill Blank] Fill in the built-in function to build a dictionary mapping 1-based numbers to words.",
      "hint_ko": "1번부터 순서 번호와 단어를 짝지어 꺼내는 아홉 글자 내장 함수를 입력하세요.",
      "hint_en": "Type the 9-letter built-in function that pairs each item with its 1-based number.",
      "targetCode": "items = [\"gold\", \"silver\"]\nranks = {i: v for i, v in enumerate(items, 1)}\nprint(ranks)",
      "templateCode": "items = [\"gold\", \"silver\"]\nranks = {i: v for i, v in §§§§§§§§§§(items, 1)}\nprint(ranks)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "{1: 'gold', 2: 'silver'}"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 공백 입력 숫자들을 정수로 변환한 뒤 1번부터 (순서 번호 * 값)을 누적해 합계를 출력해보세요.",
      "prompt_en": "[Fill Blank] Convert the input to integers, iterate with 1-based numbering, and sum (index * value).",
      "hint_ko": "일괄 매핑 함수, 인덱스·값 열거 함수, 그리고 시작 번호 1을 차례로 채워보세요.",
      "hint_en": "Fill in the batch-mapping function, the numbering iterator, and the starting index 1.",
      "targetCode": "nums = list(map(int, input().split()))\ntotal = 0\nfor idx, n in enumerate(nums, 1):\n    total += idx * n\nprint(total)",
      "templateCode": "nums = list(§§§§(int, input().split()))\ntotal = 0\nfor idx, n in §§§§§§§§§§(nums, §§):\n    total += idx * n\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "3 5 7",
          "expectedOutput": "34"
        },
        {
          "id": 2,
          "input": "10 20",
          "expectedOutput": "50"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 인덱스와 값을 받는 변수 순서가 거꾸로 되어 잘못 출력되는 버그를 올바른 순서로 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the swapped loop variables in the for header so idx receives the index and val receives the item.",
      "hint_ko": "enumerate()는 항상 (인덱스, 값) 순서로 튜플을 내어주므로 for idx, val 순서로 받아야 합니다.",
      "hint_en": "Because enumerate() yields (index, value), unpack into idx, val in that order.",
      "templateCode": "arr = [\"A\", \"B\"]\nfor val, idx in enumerate(arr):\n    print(f\"{idx}={val}\")",
      "targetCode": "arr = [\"A\", \"B\"]\nfor idx, val in enumerate(arr):\n    print(f\"{idx}={val}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "0=A\n1=B"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 순위 번호가 1번부터 출력되어야 하는데 0번부터 시작하는 인자 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the second argument of enumerate() so rankings start at 1 instead of 0.",
      "hint_ko": "두 번째 시작 번호 인자를 0에서 1로 바꾸면 #1부터 번호가 매겨집니다.",
      "hint_en": "Change the start argument from 0 to 1 in enumerate(scores, 1).",
      "templateCode": "scores = [95, 80]\nfor rank, sc in enumerate(scores, 0):\n    print(f\"#{rank}:{sc}\")",
      "targetCode": "scores = [95, 80]\nfor rank, sc in enumerate(scores, 1):\n    print(f\"#{rank}:{sc}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "#1:95\n#2:80"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 리스트 items를 1번부터 번호(i)와 값(v)으로 함께 순회하는 for문 헤더 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the for loop header that iterates over items with 1-based index i and value v.",
      "hint_ko": "for i, v in enumerate(items, 1): 형태로 콜론(:)까지 포함해 작성하세요.",
      "hint_en": "Write for i, v in enumerate(items, 1): on the masked line.",
      "targetCode": "items = [\"py\", \"ai\"]\nfor i, v in enumerate(items, 1):\n    print(i, v)",
      "templateCode": "items = [\"py\", \"ai\"]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\n    print(i, v)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1 py\n2 ai"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] enumerate(words, 1)로 1번부터 번호를 붙인 f\"{i}:{w}\" 리스트 컴프리헨션을 tags에 저장해보세요.",
      "prompt_en": "[Complete Line] Assign [f\"{i}:{w}\" for i, w in enumerate(words, 1)] to tags.",
      "hint_ko": "tags = [f\"{i}:{w}\" for i, w in enumerate(words, 1)] 형태로 작성하세요.",
      "hint_en": "Write tags = [f\"{i}:{w}\" for i, w in enumerate(words, 1)].",
      "targetCode": "words = [\"a\", \"b\", \"c\"]\ntags = [f\"{i}:{w}\" for i, w in enumerate(words, 1)]\nprint(tags)",
      "templateCode": "words = [\"a\", \"b\", \"c\"]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(tags)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['1:a', '2:b', '3:c']"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] enumerate(arr, 1) 순회와 조건 분기가 결합된 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following loop using enumerate(arr, 1).",
      "hint_ko": "번호 i가 1부터 시작할 때 짝수 번호(2, 4)인 원소만 골라 대문자로 변환해 합칩니다.",
      "hint_en": "With 1-based numbering, only items at even numbers (i = 2 and i = 4) are uppercased and joined.",
      "targetCode": "arr = [\"a\", \"b\", \"c\", \"d\"]\npicks = [v.upper() for i, v in enumerate(arr, 1) if i % 2 == 0]\nprint(\"-\".join(picks))",
      "choices": [
        "B-D",
        "A-C",
        "b-d",
        "A-B-C-D"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "B-D"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] map(), enumerate(), 복합 대입이 결합된 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the code combining map() and enumerate(..., 1).",
      "hint_ko": "1번부터 시작하는 번호 i와 각 숫자 v를 곱한 값(1*2 + 2*4 + 3*6)이 누적됩니다.",
      "hint_en": "Multiply each number by its 1-based position (1*2 + 2*4 + 3*6) and sum them.",
      "targetCode": "nums = list(map(int, \"2 4 6\".split()))\nres = 0\nfor i, v in enumerate(nums, 1):\n    res += i * v\nprint(res)",
      "choices": [
        "28",
        "16",
        "12",
        "24"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "28"
        }
      ]
    }
  ]
};
