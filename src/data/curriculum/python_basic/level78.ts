import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_78: PracticeRound = {
  "id": "py-basic-r78",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 78,
  "title_ko": "78레벨: 일괄 변환 map()과 인덱스 순회 enumerate()",
  "title_en": "Level 78: Batch Mapping map() & Indexed Iteration enumerate()",
  "description_ko": "반복 변환을 한 줄로 줄여주는 map()과 번호·원소를 동시에 꺼내는 enumerate()를 실습합니다.",
  "description_en": "Practice batch type conversion with map() and indexed loop unpacking with enumerate().",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "type",
    "math",
    "map",
    "iter",
    "method",
    "if",
    "for_in",
    "while",
    "def"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "공백으로 입력된 두 숫자를 map(int, input().split())으로 한 번에 정수 변환해 a, b에 담고 합계를 출력해보세요.",
      "prompt_en": "Unpack two space-separated integers into a, b with map(int, input().split()) and print a + b.",
      "hint_ko": "Part 1에서 각각 int(a) + int(b)로 바꾸던 과정을 map(int, input().split()) 한 줄로 깔끔하게 처리할 수 있습니다.",
      "hint_en": "map(int, input().split()) applies int to every split token before unpacking into a and b.",
      "targetCode": "a, b = map(int, input().split())\nprint(a + b)",
      "testCases": [
        {
          "id": 1,
          "input": "15 27",
          "expectedOutput": "42"
        },
        {
          "id": 2,
          "input": "100 250",
          "expectedOutput": "350"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸을 채워 공백으로 입력된 여러 숫자를 일괄 정수 변환한 리스트로 만들고 총합을 출력해보세요. (예: 10 20 30 -> 60)",
      "prompt_en": "Fill in both blanks to convert a line of integers into a list at once and print their sum.",
      "hint_ko": "안쪽에서 map(int, input().split())으로 변환하고 바깥을 list(...)로 감싸면 정수 리스트가 완성됩니다.",
      "hint_en": "Wrap map(int, input().split()) inside list() to materialize a list of integers.",
      "templateCode": "nums = §§§§(§§§(int, input().split()))\nprint(sum(nums))",
      "targetCode": "nums = list(map(int, input().split()))\nprint(sum(nums))",
      "testCases": [
        {
          "id": 1,
          "input": "10 20 30",
          "expectedOutput": "60"
        },
        {
          "id": 2,
          "input": "4 8 12 6",
          "expectedOutput": "30"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "enumerate(items)로 인덱스(idx)와 값(val)을 동시에 꺼내 0번부터 차례대로 출력해보세요. (출력 예: 0 pen)",
      "prompt_en": "Iterate with enumerate(items) to unpack idx and val together and print each pair from 0.",
      "hint_ko": "수동으로 i = 0; i += 1 카운터 변수를 관리하지 않아도 enumerate(리스트)가 (번호, 값) 쌍을 만들어 줍니다.",
      "hint_en": "enumerate(items) yields (index, element) pairs automatically without a manual counter variable.",
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
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 인덱스 순회 함수를 채워 1번부터 시작하는 메뉴 번호표를 출력해보세요. (출력 예: 1. tea)",
      "prompt_en": "Fill in the indexed iteration built-in so menu items are numbered starting from 1 (e.g., 1. tea).",
      "hint_ko": "enumerate(리스트, 1)처럼 두 번째 인자로 시작 번호 1을 주면 0 대신 1부터 번호가 매겨집니다.",
      "hint_en": "Pass 1 as the second argument to enumerate(menus, 1) to start numbering at 1.",
      "templateCode": "menus = [\"tea\", \"cake\"]\nfor no, name in §§§§§§§§§(menus, 1):\n    print(f\"{no}. {name}\")",
      "targetCode": "menus = [\"tea\", \"cake\"]\nfor no, name in enumerate(menus, 1):\n    print(f\"{no}. {name}\")",
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
      "prompt_ko": "공백으로 입력된 실수 기온들을 list(map(float, ...))로 변환해 평균을 소수 첫째 자리로 출력해보세요. (출력 예: Avg:21.2)",
      "prompt_en": "Convert space-separated float temperatures into a list and print the average rounded to 1 decimal place.",
      "hint_ko": "list(map(float, input().split()))으로 실수 리스트를 만든 뒤 round(sum(temps) / len(temps), 1)을 계산합니다.",
      "hint_en": "Build temps with list(map(float, input().split())) and compute round(sum(temps) / len(temps), 1).",
      "targetCode": "temps = list(map(float, input().split()))\navg = round(sum(temps) / len(temps), 1)\nprint(f\"Avg:{avg}\")",
      "testCases": [
        {
          "id": 1,
          "input": "20.5 22.1 21.0",
          "expectedOutput": "Avg:21.2"
        },
        {
          "id": 2,
          "input": "15.2 18.4",
          "expectedOutput": "Avg:16.8"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 선수 목록을 1등부터 순회하며 이름별 순위 딕셔너리를 완성하고 Lee의 순위를 출력해보세요. (출력: 2)",
      "prompt_en": "Fill in the blank to iterate players with 1-based ranks into a dict and print the rank of Lee.",
      "hint_ko": "for rank, name in enumerate(players, 1):로 순회하며 ranks[name] = rank로 딕셔너리에 저장합니다.",
      "hint_en": "Use enumerate(players, 1) to pair each player name with their 1-based rank.",
      "templateCode": "players = [\"Kim\", \"Lee\", \"Park\"]\nranks = {}\nfor rank, name in §§§§§§§§§(players, 1):\n    ranks[name] = rank\nprint(ranks[\"Lee\"])",
      "targetCode": "players = [\"Kim\", \"Lee\", \"Park\"]\nranks = {}\nfor rank, name in enumerate(players, 1):\n    ranks[name] = rank\nprint(ranks[\"Lee\"])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "정수 리스트 codes를 map(str, codes)로 일괄 문자열 변환한 뒤 \"-\".join(...)으로 이어 출력해보세요. (출력: 10-25-30)",
      "prompt_en": "Convert integer elements in codes to strings via map(str, codes) and join them with \"-\" to print 10-25-30.",
      "hint_ko": "join()은 문자열 요소만 합칠 수 있으므로 map(str, codes)를 바로 넘기면 새 리스트 생성 없이 깔끔히 연결됩니다.",
      "hint_en": "Pass map(str, codes) directly into \"-\".join(...) so every integer is converted to str before joining.",
      "targetCode": "codes = [10, 25, 30]\ntext = \"-\".join(map(str, codes))\nprint(text)",
      "expectedVariables": {
        "text": "10-25-30"
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "10-25-30"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸을 채워 입력된 점수들 중 80점 이상인 원소의 0번 기준 위치(인덱스)만 리스트로 모아 출력해보세요.",
      "prompt_en": "Fill in both blanks to collect the 0-based indices of input scores that are 80 or higher.",
      "hint_ko": "첫 줄에서 map(int, ...)으로 점수 리스트를 만들고, 반복문에서 enumerate(scores)로 인덱스와 점수를 함께 꺼냅니다.",
      "hint_en": "Convert inputs with map(int, ...) and unpack index and score via enumerate(scores).",
      "templateCode": "scores = list(§§§(int, input().split()))\npassed = []\nfor idx, sc in §§§§§§§§§(scores):\n    if sc >= 80:\n        passed.append(idx)\nprint(passed)",
      "targetCode": "scores = list(map(int, input().split()))\npassed = []\nfor idx, sc in enumerate(scores):\n    if sc >= 80:\n        passed.append(idx)\nprint(passed)",
      "testCases": [
        {
          "id": 1,
          "input": "75 85 90 60",
          "expectedOutput": "[1, 2]"
        },
        {
          "id": 2,
          "input": "80 50 95",
          "expectedOutput": "[0, 2]"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "단어 목록을 1번부터 순회하며 (순서 번호 * 글자 수)를 누적해 반환하는 score_words 함수를 완성해 출력해보세요.",
      "prompt_en": "Define score_words(words) to sum (1-based index * word length) using enumerate(words, 1) and print the result.",
      "hint_ko": "for idx, w in enumerate(words, 1): 안에서 total += idx * len(w)로 누적한 뒤 return total로 반환합니다.",
      "hint_en": "Loop with for idx, w in enumerate(words, 1):, accumulate total += idx * len(w), and return total.",
      "targetCode": "def score_words(words):\n    total = 0\n    for idx, w in enumerate(words, 1):\n        total += idx * len(w)\n    return total\ndata = input().split()\nprint(score_words(data))",
      "testCases": [
        {
          "id": 1,
          "input": "hi code",
          "expectedOutput": "10"
        },
        {
          "id": 2,
          "input": "a bb ccc",
          "expectedOutput": "14"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "쉼표로 구분된 세 정수를 일괄 변환해 담고, 1번부터 번호를 붙여 2배 값을 출력해보세요. (출력 예: #1:6)",
      "prompt_en": "Fill in both blanks to parse three comma-separated integers and print 2x each value numbered from 1.",
      "hint_ko": "첫째 줄은 map(int, input().split(\",\"))로 언패킹하고, 셋째 줄은 enumerate(nums, 1)로 1부터 순회합니다.",
      "hint_en": "Use map on line 1 to convert comma-split strings, and enumerate on line 3 to number from 1.",
      "templateCode": "a, b, c = §§§(int, input().split(\",\"))\nnums = [a, b, c]\nfor idx, n in §§§§§§§§§(nums, 1):\n    print(f\"#{idx}:{n * 2}\")",
      "targetCode": "a, b, c = map(int, input().split(\",\"))\nnums = [a, b, c]\nfor idx, n in enumerate(nums, 1):\n    print(f\"#{idx}:{n * 2}\")",
      "testCases": [
        {
          "id": 1,
          "input": "3,5,7",
          "expectedOutput": "#1:6\n#2:10\n#3:14"
        },
        {
          "id": 2,
          "input": "10,20,30",
          "expectedOutput": "#1:20\n#2:40\n#3:60"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "1번부터 순위 번호가 붙어야 하는데 0번부터 출력되는 버그를 고쳐 지정된 형식으로 출력해보세요. (출력 예: #1:95)",
      "prompt_en": "Fix the numbering bug so rankings start at 1 instead of 0 (e.g., #1:95).",
      "hint_ko": "enumerate(scores, 1)처럼 두 번째 인자로 시작 번호 1을 지정해야 0번이 아닌 1번부터 순위가 매겨집니다.",
      "hint_en": "Pass 1 as the second argument in enumerate(scores, 1) so rank starts at 1.",
      "templateCode": "scores = list(map(int, input().split()))\nfor rank, sc in enumerate(scores):\n    print(f\"#{rank}:{sc}\")",
      "targetCode": "scores = list(map(int, input().split()))\nfor rank, sc in enumerate(scores, 1):\n    print(f\"#{rank}:{sc}\")",
      "testCases": [
        {
          "id": 1,
          "input": "95 80",
          "expectedOutput": "#1:95\n#2:80"
        },
        {
          "id": 2,
          "input": "100 90 85",
          "expectedOutput": "#1:100\n#2:90\n#3:85"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "문자열 raw 아래에 한 줄을 추가하여 공백 분리된 숫자들을 map으로 정수 변환한 총합을 출력해보세요. (예: 4 9 16 -> 29)",
      "prompt_en": "Add one line below raw to convert space-separated integers via map and print their sum.",
      "hint_ko": "sum()은 map 객체를 바로 받을 수 있으므로 print(sum(map(int, raw.split()))) 한 줄로 작성하면 됩니다.",
      "hint_en": "Write print(sum(map(int, raw.split()))) on the second line.",
      "templateCode": "raw = input()\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "raw = input()\nprint(sum(map(int, raw.split())))",
      "testCases": [
        {
          "id": 1,
          "input": "4 9 16",
          "expectedOutput": "29"
        },
        {
          "id": 2,
          "input": "10 25 5",
          "expectedOutput": "40"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 파이썬 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "Select the exact output of the following Python code.",
      "hint_ko": "nums는 [2, 4, 6]이고 enumerate(nums, 1)은 (1, 2), (2, 4), (3, 6)을 꺼내므로 1*2 + 2*4 + 3*6 = 28입니다.",
      "hint_en": "enumerate([2, 4, 6], 1) yields (1, 2), (2, 4), (3, 6), so res = 2 + 8 + 18 = 28.",
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
