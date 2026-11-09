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
      "prompt_ko": "for 변수 in 리스트: 구문은 인덱스 번호 없이도 리스트의 첫 번째 요소부터 마지막 요소까지 순서대로 하나씩 변수에 담아 반복합니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "A for item in list: loop iterates directly over a list, assigning each element in order to the loop variable. Follow the blocks and type the code.",
      "hint_ko": "in 뒤에 리스트 변수를 두면 매 반복마다 리스트 안의 값이 순서대로 반복 변수에 대입됩니다.",
      "hint_en": "Placing the list after in assigns each element one by one to the loop variable on every pass.",
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
      "hint_ko": "리스트의 요소를 하나씩 꺼내 도는 순회 구문 두 키워드와, 기존 합계 변수에 값을 누적해 더하는 복합 대입 기호를 채우세요.",
      "hint_en": "Complete the two keywords of the collection loop header and use the compound addition operator to accumulate each price.",
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
      "prompt_ko": "리스트에서 in 연산자는 특정 요소가 포함되어 있는지, not in 연산자는 포함되어 있지 않은지를 확인해 True 또는 False로 반환합니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "On a list, the in operator checks whether an item is present and not in checks whether it is absent, returning True or False. Follow the blocks and type the code.",
      "hint_ko": "찾고자 하는 값과 리스트 사이에 in 또는 not in을 적어 포함 여부를 논리값으로 바로 확인할 수 있습니다.",
      "hint_en": "Place in or not in between the target value and the list to evaluate membership as a boolean.",
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
      "hint_ko": "결과 리스트 안에 아직 '들어 있지 않을 때' 참이 되는 두 단어 연산자와, 리스트 맨 뒤에 요소를 '덧붙이는' 여섯 글자 메서드를 적으세요.",
      "hint_en": "Check non-membership with the two-word negated operator, and add unseen characters using the 6-letter tail-insertion method.",
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
      "prompt_ko": "for 반복문으로 리스트를 순회하면서 if 조건문을 통과한 요소만 새 리스트에 .append()하면 원하는 데이터만 골라내는 필터링을 구현할 수 있습니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Iterating through a list with a for loop and calling .append() inside an if statement filters only the elements that meet your condition. Follow the blocks and type the code.",
      "hint_ko": "조건을 만족하는 값만 결과 리스트에 추가되고, 조건을 만족하지 않는 값은 자연스럽게 건너뛰어집니다.",
      "hint_en": "Only values satisfying the if condition are appended to the result list, while others are skipped.",
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
      "hint_ko": "원본 리스트의 단어를 하나씩 꺼내 순회하는 두 키워드를 적고, 각 단어 양끝의 공백 껍질을 '벗겨내는' 다섯 글자 메서드를 호출하세요.",
      "hint_en": "Write the two loop keywords to iterate through the list, then call the 5-letter method that peels off outer whitespace.",
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
      "prompt_ko": "for 변수 in input().split(): 구문을 사용하면 한 줄에 공백으로 구분되어 입력된 문자열 조각들을 하나씩 순회하며 int()로 변환해 정수 리스트를 만들 수 있습니다. 블록의 코드를 따라 입력해보세요. (터미널 입력: 10 20 30)",
      "prompt_en": "Looping with for s in input().split(): lets you iterate over space-separated input tokens and convert each one with int() into a list of integers. Follow the blocks and type the code. (Terminal input: 10 20 30)",
      "hint_ko": "input().split()이 만든 문자열 리스트의 각 요소를 돌면서 int()로 정수로 바꾼 뒤 .append()로 저장합니다.",
      "hint_en": "Each token from input().split() is a string, so wrap it in int() before appending to the list.",
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
      "prompt_ko": "공백으로 구분된 입력 숫자들을 정수로 바꾸고 그중 짝수만 evens 리스트에 모아 출력해보세요. (출력 예: Evens:[8, 12]) (터미널 입력: 3 8 5 12)",
      "prompt_en": "Parse space-separated integers from input, filter even numbers into evens, and print Evens. (Terminal input: 3 8 5 12)",
      "hint_ko": "공백 기준 문자열을 '쪼개는' 다섯 글자 메서드, '정수(integer)' 앞 세 글자 변환 함수, 리스트 끝에 '덧붙이는' 여섯 글자 메서드를 차례로 채우세요.",
      "hint_en": "Chain the 5-letter whitespace-dividing method, convert with the first three letters of 'integer', and use the 6-letter tail-insertion method.",
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
      "prompt_ko": "리스트를 for문으로 순회할 때 continue는 현재 요소만 건너뛰고 다음 요소로 넘어가며, break는 반복문 전체를 즉시 종료합니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "When iterating over a list with a for loop, continue skips the current item and moves to the next, while break exits the loop immediately. Follow the blocks and type the code.",
      "hint_ko": "합산 식(total += x)보다 앞에 continue와 break 조건을 두어야 제외할 값이나 종료 값 이후의 값이 더해지지 않습니다.",
      "hint_en": "Place the continue and break checks before total += x so skipped or post-stop values are never added.",
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
      "prompt_ko": "입력 정수 중 음수는 건너뛰고 99가 나오면 반복을 멈추어 모은 리스트 개수와 내용을 출력해보세요. (출력 예: Count:2,Data:[4, 7]) (터미널 입력: 4 -2 7 99 10)",
      "prompt_en": "Read integers; skip negatives, stop when 99 appears, and print Count and Data. (Terminal input: 4 -2 7 99 10)",
      "hint_ko": "음수를 만나면 다음 차례로 '계속 진행하는' 여덟 글자 키워드를, 종료 값 99를 만나면 반복을 '깨고 멈추는' 다섯 글자 키워드를 입력하세요.",
      "hint_en": "Use the 8-letter keyword meaning 'keep going to the next turn' for negatives, and the 5-letter keyword that shatters/exits the loop on 99.",
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
      "hint_ko": "결과를 모을 빈 리스트 선언이 반복문 안쪽에 있으면 매 차례마다 이전에 담은 값들이 모두 지워집니다. 선언 줄의 위치를 점검해보세요.",
      "hint_en": "Resetting the accumulator list inside the loop body wipes out previously collected numbers every turn; move its initialization outside the loop.",
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
      "prompt_ko": "금지어 조건문 아래에 들여쓰기에 맞춰 한 줄을 추가하여 통과한 단어를 형식에 맞게 출력해보세요. (출력 예: OK:hello) (터미널 입력: hello spam code)",
      "prompt_en": "Add one indented line under the if check to print allowed words as OK:word. (Terminal input: hello spam code)",
      "hint_ko": "조건문 안쪽 들여쓰기 간격에 맞춰, 통과한 단어 변수 앞에 예시의 접두사와 콜론을 붙인 포맷 문자열을 출력하세요.",
      "hint_en": "Matching the indentation inside the conditional block, print a formatted string with the label, colon, and allowed word variable.",
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
      "hint_ko": "초기 리스트에 이미 들어 있는 숫자, 건너뛰는 숫자, 그리고 중복으로 다시 등장해 걸러지는 숫자를 구분하며 리스트 크기와 누적합을 추적해보세요.",
      "hint_en": "Pay attention to the number already in the initial list, the skipped zero, and the repeated number at the end when tracking list size and sum.",
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
