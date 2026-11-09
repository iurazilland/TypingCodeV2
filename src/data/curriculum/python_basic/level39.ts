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
      "hint_ko": "대괄호 인덱스를 등호 왼쪽에 두면 해당 칸의 값을 새 값으로 덮어쓰거나 복합 대입으로 증감시킬 수 있습니다.",
      "hint_en": "Placing a bracketed index on the left of = or += directly overwrites or updates that slot inside the list.",
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
      "hint_ko": "맨 앞 요소의 번호와 기존 값에서 빼서 대입하는 복합 연산자를 첫 줄에 적고, 둘째 줄에는 맨 끝을 가리키는 음수 번호를 채우세요.",
      "hint_en": "Use the first element's 0-based index with the compound subtraction operator, then target the last element via negative indexing.",
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
      "hint_ko": "리스트 슬라이싱도 끝 번호 직전까지만 잘라내며, 시작 번호를 비워두면 맨 앞부터 잘라낸 새 부분 리스트를 반환합니다.",
      "hint_en": "List slicing also stops right before the stop index, and omitting the start index extracts a new sublist from the beginning.",
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
      "hint_ko": "경계 번호 2를 기준으로, 앞부분을 자를 때는 콜론 앞을 비우고 뒷부분을 끝까지 자를 때는 콜론 뒤를 비워 적어보세요.",
      "hint_en": "Using boundary index 2, omit the number before the colon for the prefix slice and omit the number after the colon for the suffix slice.",
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
      "hint_ko": "단일 요소 리스트에 곱셈 기호를 쓰면 같은 값이 여러 번 반복된 리스트가 되고, 덧셈 기호를 쓰면 두 리스트가 하나로 이어집니다.",
      "hint_en": "Multiplying a list repeats its elements, and adding two lists joins them end-to-end into a new combined list.",
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
      "hint_ko": "리스트 요소를 지정 횟수만큼 반복할 때 쓰는 산술 기호와, 두 리스트를 앞뒤로 이어 붙일 때 쓰는 산술 기호를 각각 채우세요.",
      "hint_en": "Fill in the arithmetic operator that repeats list elements and the operator that concatenates two lists.",
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
      "hint_ko": "문자열과 리스트 모두 시작 번호를 생략한 슬라이싱으로 앞의 두 항목을 잘라낼 수 있으며, 각각 원래와 같은 자료형으로 반환됩니다.",
      "hint_en": "Both strings and lists support omitted-start slicing for the first two items, returning a substring and a sublist respectively.",
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
      "hint_ko": "공백 기준으로 단어를 '쪼개는' 메서드를 부르고, 슬라이싱 끝 번호는 포함되지 않는다는 규칙에 맞춰 목표 마지막 위치보다 1 큰 끝 번호를 적으세요.",
      "hint_en": "Call the 5-letter whitespace-dividing method, and set each slice's stop index to one past the last index you want included.",
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
      "prompt_ko": "정수 입력 bonus가 0보다 크면 rates = [10, 20, 30]의 첫 요소에 더하고, 아니면 5로 바꾼 뒤 앞 2개를 출력해보세요. (출력 예: Head:[15, 20])",
      "prompt_en": "Read integer bonus; if > 0 add to rates[0], else set rates[0] = 5, then print Head with rates[:2].",
      "hint_ko": "정수로 변환한 입력값을 양수 조건으로 분기해 첫 번째 요소를 갱신한 뒤, 앞 두 요소만 슬라이싱해 포맷 문자열로 출력하세요.",
      "hint_en": "Read the input as an integer, update the first element in each conditional branch, and format a slice of the first two items.",
      "targetCode": "rates = [10, 20, 30]\nbonus = int(input())\nif bonus > 0:\n    rates[0] += bonus\nelse:\n    rates[0] = 5\nprint(f\"Head:{rates[:2]}\")",
      "testCases": [
        {
          "id": 1,
          "input": "5",
          "expectedOutput": "Head:[15, 20]"
        },
        {
          "id": 2,
          "input": "0",
          "expectedOutput": "Head:[5, 20]"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "정수 입력 fee가 5 이상이면 마지막 가격에, 아니면 첫 가격에 더한 뒤 리스트 끝에 [99]를 이어 붙여 출력해보세요.",
      "prompt_en": "Convert input to int; add fee to the last item if >= 5 else the first item, then print prices + [99].",
      "hint_ko": "'정수(integer)' 앞 세 글자 함수로 변환한 뒤, 마지막 음수 인덱스·반대 분기 키워드·리스트 연결 기호를 차례로 채우세요.",
      "hint_en": "Convert using the first three letters of 'integer', then fill in the negative last index, the fallback branch keyword, and the list concatenation operator.",
      "templateCode": "prices = [10, 20, 30]\nfee = §§§(input())\nif fee >= 5:\n    prices[§§] += fee\n§§§§:\n    prices[0] += fee\nprint(prices § [99])",
      "targetCode": "prices = [10, 20, 30]\nfee = int(input())\nif fee >= 5:\n    prices[-1] += fee\nelse:\n    prices[0] += fee\nprint(prices + [99])",
      "testCases": [
        {
          "id": 1,
          "input": "2",
          "expectedOutput": "[12, 20, 30, 99]"
        },
        {
          "id": 2,
          "input": "5",
          "expectedOutput": "[10, 20, 35, 99]"
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
      "hint_ko": "슬라이싱의 끝 번호는 결과에 포함되지 않고 그 직전 인덱스까지만 잘립니다. 세 번째 목표 요소까지 들어오도록 끝 번호를 수정해보세요.",
      "hint_en": "A slice stops right before its stop index; adjust the stop number so all three desired elements are captured.",
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
      "hint_ko": "첫 리스트에서 앞 두 요소만 잘라낸 슬라이싱 결과와 두 번째 리스트를 연결 연산자로 이어 붙인 식을 바로 출력해보세요.",
      "hint_en": "Print the result of concatenating a slice of the first two elements of the first list with the second list.",
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
      "hint_ko": "리스트 반복으로 만들어진 4칸 리스트에서 어느 인덱스들이 10씩 커지는지 먼저 구한 뒤, 잘라낸 구간과 새 단일 리스트를 이어 붙여보세요.",
      "hint_en": "First write out the 4-item repeated list after the loop updates its front elements, then trace the middle slice joined with the extra single-item list.",
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
