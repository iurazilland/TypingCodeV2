import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_39: PracticeRound = {
  "id": "py-basic-r39",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 39,
  "title_ko": "39레벨: 리스트 요소 값 변경과 기본 슬라이싱·연결",
  "title_en": "Level 39: List Element Update, Slicing & Concatenation",
  "description_ko": "인덱스로 리스트 요소 값을 수정하고 기본 슬라이싱과 리스트 연결(+), 반복(*) 연산을 연습합니다.",
  "description_en": "Practice updating list elements by index, basic list slicing, concatenation (+), and repetition (*).",
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
      "prompt_ko": "리스트 nums = [10, 20, 30]에서 1번 인덱스 값을 50으로 바꾸고 0번 인덱스 값에 5를 더한 뒤 출력해보세요.",
      "prompt_en": "Set index 1 of nums = [10, 20, 30] to 50, add 5 to index 0, and print nums.",
      "hint_ko": "nums[1] = 50으로 값을 교체하고 nums[0] += 5로 기존 값에 5를 더한 뒤 print(nums)를 실행하세요.",
      "hint_en": "Assign nums[1] = 50 and nums[0] += 5, then run print(nums).",
      "targetCode": "nums = [10, 20, 30]\nnums[1] = 50\nnums[0] += 5\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[15, 50, 30]"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "첫 번째 체력에서 20을 차감하고 음수 인덱스로 마지막 체력을 100으로 변경해 리스트를 출력해보세요.",
      "prompt_en": "Subtract 20 from the first HP value, set the last HP value to 100 via negative index, and print hp.",
      "hint_ko": "첫 요소는 인덱스 0에 -= 연산자를 쓰고, 마지막 요소는 인덱스 -1로 접근합니다.",
      "hint_en": "Use index 0 with -= for the first item and index -1 for the last item.",
      "templateCode": "hp = [100, 80, 60]\nhp[§] §§ 20\nhp[§§] = 100\nprint(hp)",
      "targetCode": "hp = [100, 80, 60]\nhp[0] -= 20\nhp[-1] = 100\nprint(hp)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[80, 80, 100]"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "nums = [10, 20, 30, 40]에서 [20, 30] 구간을 잘라 mid에, 앞의 2개 요소를 잘라 head에 담아 각각 출력해보세요.",
      "prompt_en": "Slice [20, 30] into mid and the first 2 items into head from nums = [10, 20, 30, 40], then print both.",
      "hint_ko": "1번부터 2번 인덱스까지는 nums[1:3], 처음부터 2개는 nums[:2]로 슬라이싱합니다.",
      "hint_en": "Use nums[1:3] for indices 1..2 and nums[:2] for the first two items.",
      "targetCode": "nums = [10, 20, 30, 40]\nmid = nums[1:3]\nhead = nums[:2]\nprint(mid)\nprint(head)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[20, 30]\n[10, 20]"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "슬라이싱을 채워 첫 줄에는 앞의 2개 요소를, 둘째 줄에는 2번 인덱스부터 끝까지의 요소를 출력해보세요.",
      "prompt_en": "Fill in the slices to print the first 2 elements on line 1 and elements from index 2 onward on line 2.",
      "hint_ko": "처음부터 자를 때는 시작 인덱스를 생략(:2)하고, 끝까지 자를 때는 끝 인덱스를 생략(2:)합니다.",
      "hint_en": "Omit start (:2) for the prefix and omit stop (2:) for the suffix.",
      "templateCode": "tags = [\"a\", \"b\", \"c\", \"d\"]\nprint(tags[§§])\nprint(tags[§§])",
      "targetCode": "tags = [\"a\", \"b\", \"c\", \"d\"]\nprint(tags[:2])\nprint(tags[2:])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['a', 'b']\n['c', 'd']"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "0이 3번 반복된 리스트 base와 extra = [1, 2]를 이어 붙인 merged 리스트를 만들어 출력해보세요.",
      "prompt_en": "Create base with three 0s using *, concatenate it with extra = [1, 2] into merged, and print merged.",
      "hint_ko": "base = [0] * 3으로 반복 리스트를 만들고 base + extra로 두 리스트를 연결하세요.",
      "hint_en": "Set base = [0] * 3 and merged = base + extra, then print(merged).",
      "targetCode": "base = [0] * 3\nextra = [1, 2]\nmerged = base + extra\nprint(merged)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[0, 0, 0, 1, 2]"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "연산자 빈칸을 채워 \"-\"가 2개 반복된 slots를 items 뒤에 이어 붙이고 길이와 첫 요소를 출력해보세요. (출력 예: Size:3,First:gem)",
      "prompt_en": "Fill in the operators to repeat [\"-\"] twice, concatenate after items, and print size and first item.",
      "hint_ko": "리스트 반복에는 곱셈(*) 연산자를, 리스트끼리 이어 붙일 때는 덧셈(+) 연산자를 사용합니다.",
      "hint_en": "Use * to repeat a list and + to concatenate two lists.",
      "templateCode": "slots = [\"-\"] § 2\nitems = [\"gem\"]\nbag = items § slots\nprint(f\"Size:{len(bag)},First:{bag[0]}\")",
      "targetCode": "slots = [\"-\"] * 2\nitems = [\"gem\"]\nbag = items + slots\nprint(f\"Size:{len(bag)},First:{bag[0]}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Size:3,First:gem"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "문자열 code = \"PY-2026\"의 앞 2글자와 리스트 parts = [\"PY\", \"JS\", \"GO\"]의 앞 2요소를 각각 슬라이싱해 출력해보세요.",
      "prompt_en": "Slice and print the first 2 chars of code = \"PY-2026\" and the first 2 items of parts = [\"PY\", \"JS\", \"GO\"].",
      "hint_ko": "문자열 슬라이싱 code[:2]는 문자열을, 리스트 슬라이싱 parts[:2]는 새 리스트를 반환합니다.",
      "hint_en": "code[:2] returns a string while parts[:2] returns a list.",
      "targetCode": "code = \"PY-2026\"\nparts = [\"PY\", \"JS\", \"GO\"]\nprint(code[:2])\nprint(parts[:2])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "PY\n['PY', 'JS']"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "문자열의 2~3번 인덱스 글자와 공백 분리 리스트의 1~2번 인덱스 요소를 각각 슬라이싱해 출력해보세요. (출력 예: Str:TH)",
      "prompt_en": "Slice indices 2..3 of word and indices 1..2 of the split langs list, then print both.",
      "hint_ko": "슬라이싱 끝 번호는 포함되지 않으므로 2~3번은 2:4, 1~2번은 1:3으로 지정합니다.",
      "hint_en": "Since stop is exclusive, use 2:4 for indices 2..3 and 1:3 for indices 1..2.",
      "templateCode": "word = \"PYTHON\"\nlangs = \"PY JS GO RUST\".§§§§§()\nprint(f\"Str:{word[§:§]}\")\nprint(langs[§:§])",
      "targetCode": "word = \"PYTHON\"\nlangs = \"PY JS GO RUST\".split()\nprint(f\"Str:{word[2:4]}\")\nprint(langs[1:3])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Str:TH\n['JS', 'GO']"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "실수 입력 bonus가 0보다 크면 rates = [1.5, 2.5, 3.5]의 첫 요소에 더하고, 아니면 1.25로 바꾼 뒤 앞 2개를 출력해보세요. (출력 예: Head:[1.75, 2.5])",
      "prompt_en": "Read float bonus; if > 0 add to rates[0], else set rates[0] = 1.25, then print Head with rates[:2].",
      "hint_ko": "bonus = float(input())을 받은 뒤 if bonus > 0: 분기에서 rates[0] += bonus, else:에서 rates[0] = 1.25를 실행하세요.",
      "hint_en": "Use float(input()), branch on bonus > 0 to update rates[0], then print f\"Head:{rates[:2]}\".",
      "targetCode": "rates = [1.5, 2.5, 3.5]\nbonus = float(input())\nif bonus > 0:\n    rates[0] += bonus\nelse:\n    rates[0] = 1.25\nprint(f\"Head:{rates[:2]}\")",
      "testCases": [
        {
          "id": 1,
          "input": "0.25",
          "expectedOutput": "Head:[1.75, 2.5]"
        },
        {
          "id": 2,
          "input": "0",
          "expectedOutput": "Head:[1.25, 2.5]"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "실수 입력 fee가 5.0 이상이면 마지막 가격에, 아니면 첫 가격에 더한 뒤 앞 2개 요소에 [99.5]를 이어 붙여 출력해보세요.",
      "prompt_en": "Convert input to float; add fee to last item if >= 5.0 else first item, then print prices[:2] + [99.5].",
      "hint_ko": "실수 변환 함수는 float이며, 마지막 요소 음수 인덱스는 -1, 리스트 연결 연산자는 +입니다.",
      "hint_en": "Use float() for conversion, index -1 for the last element, else: for fallback, and + to concatenate.",
      "templateCode": "prices = [10.5, 20.5, 30.5]\nfee = §§§§§(input())\nif fee >= 5.0:\n    prices[§§] += fee\n§§§§:\n    prices[0] += fee\nprint(prices[:2] § [99.5])",
      "targetCode": "prices = [10.5, 20.5, 30.5]\nfee = float(input())\nif fee >= 5.0:\n    prices[-1] += fee\nelse:\n    prices[0] += fee\nprint(prices[:2] + [99.5])",
      "testCases": [
        {
          "id": 1,
          "input": "2.0",
          "expectedOutput": "[12.5, 20.5, 99.5]"
        },
        {
          "id": 2,
          "input": "5.0",
          "expectedOutput": "[10.5, 20.5, 99.5]"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "슬라이싱 끝 범위 버그를 수정하여 20, 30, 40 세 요소가 모두 잘려 출력되도록 고쳐보세요. (출력 예: Count:3,Data:[20, 30, 40])",
      "prompt_en": "Fix the exclusive stop index bug in the slice so all three items [20, 30, 40] are included.",
      "hint_ko": "슬라이싱에서 끝 인덱스는 포함되지 않으므로 3번 인덱스 값(40)까지 담으려면 끝 번호를 1 늘려야 합니다.",
      "hint_en": "Stop index is exclusive; increase the stop index by 1 to include index 3 (40).",
      "templateCode": "nums = [10, 20, 30, 40, 50]\nsub = nums[1:3]\nprint(f\"Count:{len(sub)},Data:{sub}\")",
      "targetCode": "nums = [10, 20, 30, 40, 50]\nsub = nums[1:4]\nprint(f\"Count:{len(sub)},Data:{sub}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Count:3,Data:[20, 30, 40]"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "주어진 코드 아래에 한 줄을 추가하여 리스트 a의 앞 2개 요소와 리스트 b를 이어 붙인 결과를 출력해보세요.",
      "prompt_en": "Add one line below to print the first 2 elements of list a concatenated with list b.",
      "hint_ko": "마지막 줄에 print(a[:2] + b)를 작성하면 [10, 2, 0, 0]이 출력됩니다.",
      "hint_en": "Write print(a[:2] + b) on the final line.",
      "templateCode": "a = [1, 2, 3]\nb = [0] * 2\na[0] += 9\n§§§§§§§§§§§§§§§§",
      "targetCode": "a = [1, 2, 3]\nb = [0] * 2\na[0] += 9\nprint(a[:2] + b)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 2, 0, 0]"
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
      "hint_ko": "[1, 2, 1, 2]에서 앞의 두 요소에 10씩 더해져 [11, 12, 1, 2]가 된 뒤 nums[1:3]인 [12, 1]에 [9]가 연결됩니다.",
      "hint_en": "nums becomes [11, 12, 1, 2]; nums[1:3] is [12, 1], and + [9] produces [12, 1, 9].",
      "targetCode": "nums = [1, 2] * 2\ni = 0\nwhile i < 2:\n    nums[i] += 10\n    i += 1\nprint(nums[1:3] + [9])",
      "choices": [
        "[12, 1, 9]",
        "[11, 12, 9]",
        "[12, 2, 9]",
        "[2, 1, 9]"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[12, 1, 9]"
        }
      ]
    }
  ]
};
