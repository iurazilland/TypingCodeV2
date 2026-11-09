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
      "prompt_ko": "map(함수, 시퀀스)는 시퀀스의 모든 원소에 첫 번째 인자로 준 변환 함수를 일괄 적용하며, 변수 여러 개에 바로 언패킹할 수 있습니다. (터미널 입력: 15 27)",
      "prompt_en": "map(func, seq) applies a conversion function to every item of a sequence at once, and its result can be unpacked directly into variables. (Terminal input: 15 27)",
      "hint_ko": "map()의 첫 번째 인자에는 int()가 아니라 괄호를 뺀 함수 이름 int만 전달합니다.",
      "hint_en": "Pass the function name int without parentheses as the first argument to map().",
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
      "prompt_ko": "두 빈칸을 채워 공백으로 입력된 여러 숫자를 일괄 정수 변환한 리스트로 만들고 총합을 출력해보세요. (터미널 입력: 10 20 30)",
      "prompt_en": "Fill in both blanks to convert a line of integers into a list at once and print their sum. (Terminal input: 10 20 30)",
      "hint_ko": "안쪽에는 함수를 일괄 '대응시키는'(지도와 같은 철자) 3글자 함수를 쓰고, 바깥을 '목록' 자료형 변환 함수(4글자)로 감싸세요.",
      "hint_en": "Inside, call the 3-letter batch-association function (spelled like a geographic chart); outside, wrap it in the 4-letter sequence constructor.",
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
      "prompt_ko": "내장 함수 enumerate(시퀀스)는 각 원소에 0번부터 순서 번호를 붙여 (인덱스, 값) 튜플 쌍으로 동시에 꺼내 줍니다.",
      "prompt_en": "The built-in enumerate(seq) pairs each element with its running index starting at 0, yielding (index, value) tuples on each loop turn.",
      "hint_ko": "for문에서 idx, val 두 변수로 언패킹하면 별도의 인덱스 카운터 변수를 직접 늘릴 필요가 없습니다.",
      "hint_en": "Unpacking into idx, val in the for header eliminates the need to maintain a manual counter variable.",
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
      "hint_ko": "번호를 매기며 하나씩 '열거하다'(enumerate)라는 뜻의 9글자 내장 함수를 사용하세요.",
      "hint_en": "Combine 'e-' + 'numer' (number) + '-ate' for the 9-letter built-in function that pairs each item with its running number.",
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
      "prompt_ko": "map(int, input().split())을 list()로 감싸면 한 줄에 입력된 여러 숫자를 즉시 정수 리스트로 만들어 sum()과 len()에 활용할 수 있습니다. (터미널 입력: 20 22 23)",
      "prompt_en": "Wrapping map(int, input().split()) in list() converts a line of space-separated numbers into an integer list ready for sum() and len(). (Terminal input: 20 22 23)",
      "hint_ko": "map 객체 자체에는 len()을 쓸 수 없으므로, 길이와 합계를 모두 구할 때는 list()로 변환해 저장합니다.",
      "hint_en": "Because a raw map object has no length, converting it with list() lets you call both sum() and len().",
      "targetCode": "temps = list(map(int, input().split()))\navg = round(sum(temps) / len(temps), 1)\nprint(f\"Avg:{avg}\")",
      "testCases": [
        {
          "id": 1,
          "input": "20 22 23",
          "expectedOutput": "Avg:21.7"
        },
        {
          "id": 2,
          "input": "15 18",
          "expectedOutput": "Avg:16.5"
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
      "hint_ko": "1번부터 순위 번호와 이름을 동시에 꺼내도록 '번호를 매겨 열거하다'(enumerate) 뜻의 9글자 함수를 채우세요.",
      "hint_en": "Use the 9-letter numbering function ('e-' + 'numer' + '-ate') so each player unpacks alongside a 1-based rank.",
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
      "prompt_ko": "문자열의 .join() 메서드는 문자열 원소만 이어 붙일 수 있으므로, 숫자 리스트는 map(str, 리스트)로 일괄 문자열 변환해 전달합니다.",
      "prompt_en": "Because str.join() requires string elements, passing map(str, codes) converts a list of numbers into strings on the fly before joining.",
      "hint_ko": "\"-\".join() 안에 map(str, codes)를 바로 넣으면 별도의 리스트 변환 없이도 구분자로 연결된 문자열이 만들어집니다.",
      "hint_en": "You can pass map(str, codes) directly into \"-\".join() without wrapping it in list() first.",
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
      "prompt_ko": "두 빈칸을 채워 입력된 점수들 중 80점 이상인 원소의 0번 기준 위치(인덱스)만 리스트로 모아 출력해보세요. (터미널 입력: 75 85 90 60)",
      "prompt_en": "Fill in both blanks to collect the 0-based indices of input scores that are 80 or higher. (Terminal input: 75 85 90 60)",
      "hint_ko": "첫 줄은 함수를 일괄 '대응시키는'(지도와 같은 철자) 3글자 함수를, 반복문은 번호와 값을 함께 '열거하는'(enumerate) 9글자 함수를 쓰세요.",
      "hint_en": "First call the 3-letter batch-association function (spelled like a chart), then unpack index and score with the 9-letter 'e-' + 'numer' + '-ate' function.",
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
      "prompt_ko": "enumerate(시퀀스, 시작번호)처럼 두 번째 인자를 지정하면 0번 대신 원하는 번호(예: 1번)부터 순서를 매기며 순회합니다. (터미널 입력: hi code)",
      "prompt_en": "Passing a second argument to enumerate(seq, start) starts the index numbering from start (such as 1) instead of 0. (Terminal input: hi code)",
      "hint_ko": "enumerate(words, 1)에서 꺼낸 1번 기준 순서 번호 idx와 단어 길이 len(w)를 곱해 누적합니다.",
      "hint_en": "Multiply the 1-based index idx from enumerate(words, 1) by len(w) on each iteration and add it to total.",
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
      "prompt_ko": "쉼표로 구분된 세 정수를 일괄 변환해 담고, 1번부터 번호를 붙여 2배 값을 출력해보세요. (출력 예: #1:6) (터미널 입력: 3,5,7)",
      "prompt_en": "Fill in both blanks to parse three comma-separated integers and print 2x each value numbered from 1. (Terminal input: 3,5,7)",
      "hint_ko": "첫 줄은 일괄 변환을 '대응시키는'(지도와 같은 철자) 3글자 함수를, 셋째 줄은 번호와 함께 '열거하는'(enumerate) 9글자 함수를 쓰세요.",
      "hint_en": "Use the 3-letter chart/mapping function on line 1, and the 9-letter 'e-' + 'numer' + '-ate' numbering function on line 3.",
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
      "prompt_ko": "1번부터 순위 번호가 붙어야 하는데 0번부터 출력되는 버그를 고쳐 지정된 형식으로 출력해보세요. (출력 예: #1:95) (터미널 입력: 95 80)",
      "prompt_en": "Fix the numbering bug so rankings start at 1 instead of 0 (e.g., #1:95). (Terminal input: 95 80)",
      "hint_ko": "열거 순회 함수는 두 번째 인자를 생략하면 기본값 0부터 번호를 매깁니다. 시작 번호가 1이 되도록 두 번째 인자를 추가해보세요.",
      "hint_en": "Indexed enumeration starts at 0 when given a single argument; pass the starting number 1 as its second argument.",
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
      "prompt_ko": "문자열 raw 아래에 한 줄을 추가하여 공백 분리된 숫자들을 map으로 정수 변환한 총합을 출력해보세요. (터미널 입력: 4 9 16)",
      "prompt_en": "Add one line below raw to convert space-separated integers via map and print their sum. (Terminal input: 4 9 16)",
      "hint_ko": "문자열을 공백으로 쪼갠 시퀀스에 정수 일괄 변환을 적용하고, 그 변환 객체를 곧바로 합계 내장 함수에 넣어 출력해보세요.",
      "hint_en": "Break the string on whitespace, batch-convert its tokens to integers, pass that result directly into the summation built-in, and display it.",
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
      "hint_ko": "열거 함수의 두 번째 인자가 1이므로 번호가 0이 아닌 1부터 시작한다는 점에 유의해, 각 원소와 번호의 곱을 차례로 누적해보세요.",
      "hint_en": "Notice that the second argument sets the starting index to 1 (not 0); multiply each number by its 1-based position and sum them up.",
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