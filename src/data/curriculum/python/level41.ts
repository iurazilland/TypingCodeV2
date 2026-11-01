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
  "totalQuestions": 13,
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
      "prompt_ko": "for 반복문으로 리스트 nums = [10, 20, 30]의 요소를 처음부터 끝까지 한 줄에 하나씩 출력해보세요.",
      "prompt_en": "Use a for loop to print each element of nums = [10, 20, 30] on its own line.",
      "hint_ko": "for x in nums: 블록 안에 print(x)를 배치하면 각 요소가 차례대로 출력됩니다.",
      "hint_en": "Put print(x) inside for x in nums: to print every item.",
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
      "prompt_ko": "리스트의 모든 가격을 순서대로 순회하며 total에 누적해 총합을 출력해보세요. (출력 예: Total:2500)",
      "prompt_en": "Iterate through prices, accumulate each value into total, and print Total:2500.",
      "hint_ko": "리스트 순회 구문과 기존 변수에 값을 더하는 복합 대입 연산자를 빈칸에 채워보세요.",
      "hint_en": "Use for p in prices: and total += p to accumulate the total.",
      "templateCode": "prices = [500, 1200, 800]\ntotal = 0\n§§§ p §§ prices:\n    total §§ p\nprint(f\"Total:{total}\")",
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
      "prompt_ko": "roles = [\"user\", \"vip\", \"admin\"]에 \"vip\"가 포함되어 있는지와 \"guest\"가 없는지를 각각 출력해보세요.",
      "prompt_en": "Print whether \"vip\" is in roles = [\"user\", \"vip\", \"admin\"] and whether \"guest\" is not in roles.",
      "hint_ko": "\"vip\" in roles와 \"guest\" not in roles는 각각 True/False 논리값을 반환합니다.",
      "hint_en": "Print \"vip\" in roles on line 2 and \"guest\" not in roles on line 3.",
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
      "prompt_ko": "raw 리스트를 순회하며 uniq에 아직 들어 있지 않은 문자만 차례로 추가해 중복 없는 리스트를 출력해보세요.",
      "prompt_en": "Loop over raw and add characters not yet present in uniq, then print uniq.",
      "hint_ko": "포함되지 않음을 검사하는 두 단어 연산자와 리스트 끝에 추가하는 메서드를 채우세요.",
      "hint_en": "Check non-membership with not in and add new items with .append().",
      "templateCode": "raw = [\"A\", \"B\", \"A\", \"C\"]\nuniq = []\nfor ch in raw:\n    if ch §§§ §§ uniq:\n        uniq.§§§§§§(ch)\nprint(uniq)",
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
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "scores = [65, 85, 90, 72]를 순회하며 80 이상인 점수만 빈 리스트 passed에 모아 출력해보세요.",
      "prompt_en": "Filter values >= 80 from scores = [65, 85, 90, 72] into passed and print passed.",
      "hint_ko": "for s in scores: 안에 if s >= 80: 조건을 두고 passed.append(s)를 실행하세요.",
      "hint_en": "Inside for s in scores:, check if s >= 80: and call passed.append(s).",
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
      "prompt_ko": "각 문자열의 양쪽 공백을 제거한 뒤 글자 수가 3 이상인 단어만 longs 리스트에 모아 출력해보세요.",
      "prompt_en": "Strip whitespace from each string in raw, collect words of length >= 3 into longs, and print longs.",
      "hint_ko": "리스트를 순회하면서 양끝 공백 제거 메서드를 호출한 뒤 길이를 비교하세요.",
      "hint_en": "Loop with for w in raw: and clean whitespace using w.strip().",
      "templateCode": "raw = [\" py \", \"hi\", \" code \"]\nlongs = []\n§§§ w §§ raw:\n    clean = w.§§§§§()\n    if len(clean) >= 3:\n        longs.append(clean)\nprint(longs)",
      "targetCode": "raw = [\" py \", \"hi\", \" code \"]\nlongs = []\nfor w in raw:\n    clean = w.strip()\n    if len(clean) >= 3:\n        longs.append(clean)\nprint(longs)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['code']"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "한 줄에 공백으로 입력된 숫자 문자열들을 순회하며 각각 정수로 변환해 nums 리스트에 담고 출력해보세요.",
      "prompt_en": "Iterate over input().split(), convert each token to int, append to nums, and print nums.",
      "hint_ko": "for s in input().split(): 안에서 nums.append(int(s))를 호출하면 정수 리스트가 완성됩니다.",
      "hint_en": "Loop with for s in input().split(): and call nums.append(int(s)).",
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
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "공백으로 구분된 입력 숫자들을 정수로 바꾸고 그중 짝수만 evens 리스트에 모아 출력해보세요. (출력 예: Evens:[8, 12])",
      "prompt_en": "Parse space-separated integers from input, filter even numbers into evens, and print Evens.",
      "hint_ko": "문자열 분리 메서드, 정수형 변환 함수, 리스트 끝 추가 메서드를 차례대로 채워보세요.",
      "hint_en": "Use .split() on input(), int(s) for conversion, and evens.append(n) for matches.",
      "templateCode": "evens = []\nfor s in input().§§§§§():\n    n = §§§(s)\n    if n % 2 == 0:\n        evens.§§§§§§(n)\nprint(f\"Evens:{evens}\")",
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
      "prompt_ko": "logs = [10, -5, 20, 0, 30]에서 음수는 건너뛰고 0이 나오면 즉시 중단하며 양수 합계를 출력해보세요. (출력 예: Valid:30)",
      "prompt_en": "Loop over logs = [10, -5, 20, 0, 30]; skip negatives, stop at 0, and print Valid:30.",
      "hint_ko": "x < 0이면 continue로 건너뛰고, x == 0이면 break로 반복문을 빠져나오세요.",
      "hint_en": "Use continue when x < 0 and break when x == 0 before adding total += x.",
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
      "prompt_ko": "입력 정수 중 음수는 건너뛰고 99가 나오면 반복을 멈추어 모은 리스트 개수와 내용을 출력해보세요. (출력 예: Count:2,Data:[4, 7])",
      "prompt_en": "Read integers; skip negatives, stop when 99 appears, and print Count and Data.",
      "hint_ko": "이번 차례만 건너뛰는 제어 키워드와 반복문 자체를 즉시 종료하는 제어 키워드를 각각 입력하세요.",
      "hint_en": "Use continue to skip negative numbers and break to exit on 99.",
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
      "prompt_ko": "반복할 때마다 결과 리스트가 새로 비워지는 위치 버그를 수정하여 [25, 30]이 출력되도록 고쳐보세요.",
      "prompt_en": "Fix the placement bug that resets big on every iteration so [25, 30] is printed.",
      "hint_ko": "빈 리스트 초기화가 for 반복문 안에 있으면 매번 이전 값이 사라집니다. 반복문 바깥 위쪽으로 옮기세요.",
      "hint_en": "Move big = [] above the for loop so accumulated items are preserved.",
      "templateCode": "nums = [10, 25, 30]\nfor x in nums:\n    big = []\n    if x >= 20:\n        big.append(x)\nprint(big)",
      "targetCode": "nums = [10, 25, 30]\nbig = []\nfor x in nums:\n    if x >= 20:\n        big.append(x)\nprint(big)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[25, 30]"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "금지어 조건문 아래에 들여쓰기에 맞춰 한 줄을 추가하여 통과한 단어를 형식에 맞게 출력해보세요. (출력 예: OK:hello)",
      "prompt_en": "Add one indented line under the if check to print allowed words as OK:word.",
      "hint_ko": "if 블록 안쪽(공백 8칸 들여쓰기)에 print(f\"OK:{w}\")를 작성해보세요.",
      "hint_en": "Indent by 8 spaces and write print(f\"OK:{w}\").",
      "templateCode": "bans = [\"spam\", \"ad\"]\nfor w in input().split():\n    if w not in bans:\n        §§§§§§§§§§§§§§§§",
      "targetCode": "bans = [\"spam\", \"ad\"]\nfor w in input().split():\n    if w not in bans:\n        print(f\"OK:{w}\")",
      "testCases": [
        {
          "id": 1,
          "input": "hello spam code",
          "expectedOutput": "OK:hello\nOK:code"
        },
        {
          "id": 2,
          "input": "ad news",
          "expectedOutput": "OK:news"
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
      "hint_ko": "2는 이미 seen에 있고 0은 건너뛰므로 5와 4만 새로 추가되어 seen은 [2, 5, 4](길이 3), total은 9가 됩니다.",
      "hint_en": "Only 5 and 4 are newly added (2 is already in seen, 0 is skipped), so len(seen) is 3 and total is 9.",
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
