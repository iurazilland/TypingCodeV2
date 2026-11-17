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
      "prompt_ko": "[블록 조립] 인덱스로 리스트의 특정 위치 요소를 직접 수정하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the code that updates list elements in place using index assignment and +=.",
      "hint_ko": "대괄호 인덱스를 등호(=)나 복합 대입 연산자(+=) 왼쪽에 두면 해당 칸의 값만 즉시 바뀝니다.",
      "hint_en": "Placing a bracketed index on the left of = or += updates that slot inside the list.",
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
      "prompt_ko": "[빈칸 채우기] 첫 번째 체력에서 20을 차감하고 마지막 체력을 100으로 변경해 출력해보세요.",
      "prompt_en": "[Fill Blank] Subtract 20 from the first HP value, set the last HP value to 100, and print hp.",
      "hint_ko": "첫 줄에는 복합 뺄셈 연산자 -=를, 둘째 줄에는 맨 끝을 가리키는 음수 인덱스 -1을 채우세요.",
      "hint_en": "Use -= on the first line and negative index -1 on the second line.",
      "templateCode": "hp = [100, 80, 60]\nhp[0] §§ 20\nhp[§§] = 100\nprint(hp)",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 리스트 슬라이싱 nums[1:3]과 nums[:2]로 부분 리스트를 추출하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Extract sublists using nums[1:3] and nums[:2] and print both.",
      "hint_ko": "[:2]처럼 콜론 앞의 시작 인덱스를 생략하면 0번부터 지정한 끝 번호 직전까지 잘라냅니다.",
      "hint_en": "Omitting the start index like [:2] slices from index 0 up to index 2.",
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
      "prompt_ko": "[빈칸 채우기] 첫 줄에는 앞의 2개 요소를, 둘째 줄에는 2번 인덱스부터 끝까지의 요소를 출력해보세요.",
      "prompt_en": "[Fill Blank] Print the first 2 elements on line 1 and elements from index 2 onward on line 2.",
      "hint_ko": "경계 번호 2를 기준으로 앞부분은 :2, 뒷부분은 2:를 대괄호 안에 적으세요.",
      "hint_en": "Use :2 for the first two elements and 2: for everything from index 2 onward.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 리스트 반복(*)과 연결(+) 연산자로 새 리스트를 만드는 블록을 조립해보세요.",
      "prompt_en": "[Block] Repeat a list with * and concatenate two lists with +.",
      "hint_ko": "[0] * 3은 0이 3개 담긴 리스트를 만들며, + 연산자로 다른 리스트를 뒤에 연결합니다.",
      "hint_en": "[0] * 3 creates a list of three zeros, and + joins the second list onto the end.",
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
      "prompt_ko": "[빈칸 채우기] [\"-\"]가 2개 반복된 slots를 items 뒤에 이어 붙이고 길이와 첫 요소를 출력해보세요.",
      "prompt_en": "[Fill Blank] Repeat [\"-\"] twice, concatenate after items, and print size and first item.",
      "hint_ko": "리스트 반복 연산자 *와 리스트 연결 연산자 +를 차례로 채우세요.",
      "hint_en": "Fill in * to repeat list elements and + to concatenate the two lists.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 문자열과 리스트에 각각 [:2] 슬라이싱을 적용해 결과를 비교하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Apply [:2] slicing to both a string and a list to compare their results.",
      "hint_ko": "같은 [:2] 문법이라도 문자열은 부분 문자열을, 리스트는 부분 리스트를 반환합니다.",
      "hint_en": "The same [:2] slice extracts the first two characters from a string and first two items from a list.",
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
      "prompt_ko": "[빈칸 채우기] 문자열의 2~3번 글자와 리스트의 1~2번 요소를 각각 슬라이싱해 출력해보세요.",
      "prompt_en": "[Fill Blank] Slice indices 2..3 of word and indices 1..2 of langs, then print both.",
      "hint_ko": "끝 번호는 포함되지 않으므로 각각 2:4와 1:3을 대괄호 안에 적으세요.",
      "hint_en": "Because stop indices are exclusive, write 2:4 and 1:3 inside the brackets.",
      "templateCode": "word = \"PYTHON\"\nlangs = \"PY JS GO RUST\".split()\nprint(f\"Str:{word[§§§]}\")\nprint(langs[§§§])",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 조건에 따라 rates[0]을 갱신한 뒤 rates[:2]로 앞 두 요소를 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Conditionally update rates[0] and slice rates[:2] to print the first two items.",
      "hint_ko": "조건 분기에 따라 0번 인덱스 값을 수정한 다음 [:2] 슬라이싱으로 앞 두 요소만 확인합니다.",
      "hint_en": "Update index 0 in the matching branch first, then use [:2] to display the first two elements.",
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
      "prompt_ko": "[빈칸 채우기] fee가 5 이상이면 마지막 가격에, 아니면 첫 가격에 더한 뒤 [99]를 이어 붙여 출력해보세요.",
      "prompt_en": "[Fill Blank] Add fee to the last item if >= 5 else the first item, then print prices + [99].",
      "hint_ko": "마지막 요소를 가리키는 음수 인덱스 -1과 리스트 연결 연산자 +를 차례로 채우세요.",
      "hint_en": "Fill in negative index -1 for the last element and + for list concatenation.",
      "templateCode": "prices = [10, 20, 30]\nfee = int(input())\nif fee >= 5:\n    prices[§§] += fee\nelse:\n    prices[0] += fee\nprint(prices § [99])",
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
      "prompt_ko": "[틀린 곳 수정] 슬라이싱 끝 범위 버그를 수정해 [20, 30, 40] 세 요소가 모두 잘려 출력되도록 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the exclusive stop index in the slice so [20, 30, 40] are all included.",
      "hint_ko": "슬라이싱 끝 번호는 포함되지 않으므로 1, 2, 3번 인덱스를 가져오려면 끝 번호를 4로 수정하세요.",
      "hint_en": "Change the stop index from 3 to 4 so indices 1, 2, and 3 are captured.",
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
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 리스트의 첫 번째 요소를 99로 변경하려다 두 번째 요소가 변경되는 인덱스 버그를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the target index so the first element of nums becomes 99.",
      "hint_ko": "리스트의 맨 앞 첫 번째 요소 인덱스는 1이 아니라 0입니다.",
      "hint_en": "Change nums[1] to nums[0] to update the first element.",
      "templateCode": "nums = [10, 20, 30]\nnums[1] = 99\nprint(nums)",
      "targetCode": "nums = [10, 20, 30]\nnums[0] = 99\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[99, 20, 30]"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 리스트 a의 앞 2개 요소와 리스트 b를 이어 붙여 res에 저장하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the line that concatenates a[:2] and b into res.",
      "hint_ko": "res = a[:2] + b 형태로 앞 두 요소 슬라이싱과 b를 연결해 저장하세요.",
      "hint_en": "Write res = a[:2] + b to join the first two items of a with b.",
      "templateCode": "a = [1, 2, 3]\nb = [0] * 2\na[0] += 9\n§§§§§§§§§§§§§§§\nprint(res)",
      "targetCode": "a = [1, 2, 3]\nb = [0] * 2\na[0] += 9\nres = a[:2] + b\nprint(res)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 2, 0, 0]"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 리스트 nums에서 1번~2번 인덱스 요소를 슬라이싱해 mid에 저장하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the line that slices indices 1 and 2 of nums into mid.",
      "hint_ko": "mid = nums[1:3] 형태로 1번부터 3번 직전까지 잘라 mid에 대입하세요.",
      "hint_en": "Write mid = nums[1:3] to extract [20, 30].",
      "templateCode": "nums = [10, 20, 30, 40]\n§§§§§§§§§§§§§§§\nprint(mid)",
      "targetCode": "nums = [10, 20, 30, 40]\nmid = nums[1:3]\nprint(mid)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[20, 30]"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 리스트 반복, 요소 수정, 슬라이싱 연결 코드의 실행 결과를 예측해보세요.",
      "prompt_en": "[Predict Output] Select the exact output printed when the following Python code runs.",
      "hint_ko": "[1, 2] * 2로 만들어진 리스트에서 앞 두 칸이 10씩 커진 뒤 nums[1:3] + [9]가 무엇인지 계산해보세요.",
      "hint_en": "Trace [1, 2, 1, 2] after adding 10 to indices 0 and 1, then evaluate nums[1:3] + [9].",
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
