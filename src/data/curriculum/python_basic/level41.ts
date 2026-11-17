import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_41: PracticeRound = {
  "id": "py-basic-r41",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 41,
  "title_ko": "41레벨: 리스트 for 순회와 조건 필터링",
  "title_en": "Level 41: List for Iteration & Conditional Filtering",
  "description_ko": "for 반복문과 in / not in 연산자로 리스트를 순회하며 조건 필터링 및 공백 구분 정수 입력 변환을 구현합니다.",
  "description_en": "Iterate over lists with for, check membership with in/not in, filter elements, and parse space-separated integers.",
  "totalQuestions": 15,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "type",
    "math",
    "method",
    "if",
    "for_in",
    "for_range",
    "range",
    "while",
    "break",
    "continue"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] for x in nums: 구문으로 리스트 요소를 순서대로 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the for x in nums: loop that prints each element of the list in order.",
      "hint_ko": "in 뒤에 리스트 변수를 두면 매 반복마다 리스트 안의 값이 순서대로 반복 변수에 대입됩니다.",
      "hint_en": "Placing the list after in assigns each element one by one to the loop variable.",
      "targetCode": "nums = [10, 20, 30]\nfor x in nums:\n    print(x)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "10\n20\n30"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 리스트의 모든 가격을 순회하며 total에 누적해 총합을 출력해보세요.",
      "prompt_en": "[Fill Blank] Iterate through prices, accumulate each value into total, and print Total:2500.",
      "hint_ko": "순회 키워드 in과 누적 덧셈 연산자 +=를 차례로 채우세요.",
      "hint_en": "Fill in the in keyword and the += compound addition operator.",
      "templateCode": "prices = [500, 1200, 800]\ntotal = 0\nfor p §§ prices:\n    total §§ p\nprint(f\"Total:{total}\")",
      "targetCode": "prices = [500, 1200, 800]\ntotal = 0\nfor p in prices:\n    total += p\nprint(f\"Total:{total}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Total:2500"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 리스트에 in과 not in 연산자를 사용해 요소 포함 여부를 확인하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Check item membership and non-membership in roles using in and not in.",
      "hint_ko": "찾고자 하는 값과 리스트 사이에 in 또는 not in을 적어 포함 여부를 논리값으로 확인합니다.",
      "hint_en": "Place in or not in between the target value and the list to evaluate membership.",
      "targetCode": "roles = [\"user\", \"vip\", \"admin\"]\nprint(\"vip\" in roles)\nprint(\"guest\" not in roles)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True\nTrue"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 입력 단어 w가 금지 목록 bans에 있는지와 없는지를 순서대로 출력해보세요.",
      "prompt_en": "[Fill Blank] Print whether w is in bans and whether w is not in bans.",
      "hint_ko": "포함 여부를 묻는 in과 불포함 여부를 묻는 not in을 차례로 채우세요.",
      "hint_en": "Fill in in for the first check and not in for the second check.",
      "templateCode": "bans = [\"spam\", \"ad\"]\nw = input().strip()\nprint(w §§ bans, w §§§§§§ bans)",
      "targetCode": "bans = [\"spam\", \"ad\"]\nw = input().strip()\nprint(w in bans, w not in bans)",
      "testCases": [
        {
          "id": 1,
          "input": "news",
          "expectedOutput": "False True"
        },
        {
          "id": 2,
          "input": "spam",
          "expectedOutput": "True False"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] for문과 if 조건문으로 80점 이상인 점수만 passed에 모으는 블록을 조립해보세요.",
      "prompt_en": "[Block] Filter scores >= 80 into passed using a for loop and an if statement.",
      "hint_ko": "조건을 만족하는 값만 결과 리스트에 .append()로 추가됩니다.",
      "hint_en": "Only values satisfying the if condition are appended to passed.",
      "targetCode": "scores = [65, 85, 90, 72]\npassed = []\nfor s in scores:\n    if s >= 80:\n        passed.append(s)\nprint(passed)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[85, 90]"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] raw를 순회하며 uniq에 아직 없는 문자만 추가해 중복 없는 리스트를 출력해보세요.",
      "prompt_en": "[Fill Blank] Loop over raw and append characters not yet in uniq, then print uniq.",
      "hint_ko": "불포함 연산자 not in과 리스트 추가 메서드 append를 차례로 적으세요.",
      "hint_en": "Check non-membership with not in and add unseen characters with append.",
      "templateCode": "raw = [\"A\", \"B\", \"A\", \"C\"]\nuniq = []\nfor ch in raw:\n    if ch §§§§§§ uniq:\n        uniq.§§§§§§(ch)\nprint(uniq)",
      "targetCode": "raw = [\"A\", \"B\", \"A\", \"C\"]\nuniq = []\nfor ch in raw:\n    if ch not in uniq:\n        uniq.append(ch)\nprint(uniq)",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 공백 구분 입력 조각을 int()로 변환해 10 이상인 정수만 리스트에 모으는 블록을 조립해보세요.",
      "prompt_en": "[Block] Parse space-separated integers with int() and append those >= 10 to nums.",
      "hint_ko": "input().split()의 각 문자열을 int(s)로 변환해 조건 검사 후 .append()로 저장합니다.",
      "hint_en": "Convert each token with int(s) and append it when >= 10.",
      "targetCode": "nums = []\nfor s in input().split():\n    if int(s) >= 10:\n        nums.append(int(s))\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "5 10 20",
          "expectedOutput": "[10, 20]"
        },
        {
          "id": 2,
          "input": "15 3 25",
          "expectedOutput": "[15, 25]"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 공백 구분 입력 숫자들을 정수로 바꾸고 짝수만 evens 리스트에 모아 출력해보세요.",
      "prompt_en": "[Fill Blank] Parse space-separated integers from input and filter even numbers into evens.",
      "hint_ko": "공백 기준 분리 메서드 split과 정수 변환 함수 int를 차례로 채우세요.",
      "hint_en": "Use split() to divide the input line and int(s) to convert each token.",
      "templateCode": "evens = []\nfor s in input().§§§§§():\n    n = §§§(s)\n    if n % 2 == 0:\n        evens.append(n)\nprint(f\"Evens:{evens}\")",
      "targetCode": "evens = []\nfor s in input().split():\n    n = int(s)\n    if n % 2 == 0:\n        evens.append(n)\nprint(f\"Evens:{evens}\")",
      "testCases": [
        {
          "id": 1,
          "input": "3 8 5 12",
          "expectedOutput": "Evens:[8, 12]"
        },
        {
          "id": 2,
          "input": "2 7 4",
          "expectedOutput": "Evens:[2, 4]"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 리스트 순회 중 음수는 continue로 건너뛰고 0을 만나면 break로 멈추는 블록을 조립해보세요.",
      "prompt_en": "[Block] Skip negative values with continue and exit the loop on 0 with break.",
      "hint_ko": "합산 식(total += x)보다 앞에 continue와 break 조건을 두어 유효한 값만 더합니다.",
      "hint_en": "Place continue and break checks before total += x.",
      "targetCode": "logs = [10, -5, 20, 0, 30]\ntotal = 0\nfor x in logs:\n    if x < 0:\n        continue\n    if x == 0:\n        break\n    total += x\nprint(f\"Valid:{total}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Valid:30"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 입력 정수 중 음수는 건너뛰고 99가 나오면 반복을 멈추어 모은 리스트를 출력해보세요.",
      "prompt_en": "[Fill Blank] Skip negatives, stop when 99 appears, and print Count and Data.",
      "hint_ko": "다음 차례로 건너뛰는 continue와 반복을 종료하는 break를 차례로 입력하세요.",
      "hint_en": "Use continue for negative values and break when 99 is encountered.",
      "templateCode": "nums = []\nfor s in input().split():\n    val = int(s)\n    if val < 0:\n        §§§§§§§§\n    if val == 99:\n        §§§§§\n    nums.append(val)\nprint(f\"Count:{len(nums)},Data:{nums}\")",
      "targetCode": "nums = []\nfor s in input().split():\n    val = int(s)\n    if val < 0:\n        continue\n    if val == 99:\n        break\n    nums.append(val)\nprint(f\"Count:{len(nums)},Data:{nums}\")",
      "testCases": [
        {
          "id": 1,
          "input": "4 -2 7 99 10",
          "expectedOutput": "Count:2,Data:[4, 7]"
        },
        {
          "id": 2,
          "input": "-1 5 99",
          "expectedOutput": "Count:1,Data:[5]"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 80점 이상인 합격 점수만 모으려다 80점 이하가 담기는 비교 연산자 버그를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the comparison operator so scores of 80 or above ([85, 90]) are collected.",
      "hint_ko": "80점 이상일 때 추가되어야 하므로 <=를 >=로 수정하세요.",
      "hint_en": "Change <= to >= so scores of at least 80 are appended.",
      "templateCode": "scores = [65, 85, 90, 72]\npassed = []\nfor s in scores:\n    if s <= 80:\n        passed.append(s)\nprint(passed)",
      "targetCode": "scores = [65, 85, 90, 72]\npassed = []\nfor s in scores:\n    if s >= 80:\n        passed.append(s)\nprint(passed)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[85, 90]"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 공백 구분 입력을 정수 리스트로 모으려다 문자열로 저장되는 변환 함수 버그를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the conversion function so input tokens are appended as integers.",
      "hint_ko": "문자열 조각 s를 정수로 변환하려면 str(s)가 아니라 int(s)를 사용해야 합니다.",
      "hint_en": "Replace str(s) with int(s) to store integers in nums.",
      "templateCode": "nums = []\nfor s in input().split():\n    nums.append(str(s))\nprint(nums)",
      "targetCode": "nums = []\nfor s in input().split():\n    nums.append(int(s))\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "10 20 30",
          "expectedOutput": "[10, 20, 30]"
        },
        {
          "id": 2,
          "input": "5 15",
          "expectedOutput": "[5, 15]"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 금지어(bans)에 속하지 않는 단어 w를 clean 리스트에 추가하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the indented line that appends allowed word w to clean.",
      "hint_ko": "clean.append(w) 형태로 통과한 단어를 clean 리스트 끝에 추가하세요.",
      "hint_en": "Write clean.append(w) inside the if block.",
      "templateCode": "bans = [\"spam\", \"ad\"]\nclean = []\nfor w in input().split():\n    if w not in bans:\n        §§§§§§§§§§§§§§§\nprint(clean)",
      "targetCode": "bans = [\"spam\", \"ad\"]\nclean = []\nfor w in input().split():\n    if w not in bans:\n        clean.append(w)\nprint(clean)",
      "testCases": [
        {
          "id": 1,
          "input": "hello spam code",
          "expectedOutput": "['hello', 'code']"
        },
        {
          "id": 2,
          "input": "ad news",
          "expectedOutput": "['news']"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 분리된 각 문자열 s를 정수로 바꾸어 nums 리스트에 추가하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the line that converts s with int() and appends it to nums.",
      "hint_ko": "nums.append(int(s)) 형태로 정수로 변환한 값을 리스트에 추가하세요.",
      "hint_en": "Write nums.append(int(s)) inside the for loop.",
      "templateCode": "nums = []\nfor s in input().split():\n    §§§§§§§§§§§§§§§§§§§\nprint(nums)",
      "targetCode": "nums = []\nfor s in input().split():\n    nums.append(int(s))\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "4 8 12",
          "expectedOutput": "[4, 8, 12]"
        },
        {
          "id": 2,
          "input": "7 14",
          "expectedOutput": "[7, 14]"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 리스트 중복 제거(not in)와 continue 코드의 실행 결과를 예측해보세요.",
      "prompt_en": "[Predict Output] Select the exact output printed when the following Python code runs.",
      "hint_ko": "초기 리스트에 이미 들어 있는 2, 건너뛰는 0, 중복된 5를 구분하며 리스트 크기와 합계를 추적해보세요.",
      "hint_en": "Track which numbers are skipped or already in seen to find len(seen) and total.",
      "targetCode": "seen = [2]\ntotal = 0\nfor s in \"2 5 0 4 5\".split():\n    n = int(s)\n    if n == 0:\n        continue\n    if n not in seen:\n        seen.append(n)\n        total += n\nprint(f\"{len(seen)}:{total}\")",
      "choices": [
        "3:9",
        "4:14",
        "3:11",
        "4:16"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3:9"
        }
      ]
    }
  ]
};
