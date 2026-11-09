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
      "prompt_ko": "공백으로 입력된 두 숫자를 map(int, input().split())으로 한 번에 정수 변환해 a, b에 담고 합계를 출력해보세요. (터미널 입력: 15 27)",
      "prompt_en": "Unpack two space-separated integers into a, b with map(int, input().split()) and print a + b. (Terminal input: 15 27)",
      "hint_ko": "지도처럼 일대일로 '대응시키다'라는 뜻의 이 함수는 첫 인자로 준 변환 함수를 두 번째 시퀀스의 모든 원소에 일괄 적용합니다.",
      "hint_en": "Meaning 'to associate one-to-one,' this function applies the conversion function in its first argument to every split token.",
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
      "prompt_ko": "enumerate(items)로 인덱스(idx)와 값(val)을 동시에 꺼내 0번부터 차례대로 출력해보세요. (출력 예: 0 pen)",
      "prompt_en": "Iterate with enumerate(items) to unpack idx and val together and print each pair from 0.",
      "hint_ko": "번호를 붙여 하나씩 '열거하다'라는 뜻의 이 함수는 수동 카운터 변수 없이도 (인덱스, 원소) 쌍을 자동으로 만들어 줍니다.",
      "hint_en": "Meaning 'to count off one by one,' this built-in yields (index, element) pairs automatically without a manual counter.",
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
      "prompt_ko": "공백으로 입력된 정수 기온들을 list(map(int, ...))로 변환해 평균을 소수 첫째 자리로 출력해보세요. (출력 예: Avg:16.5) (터미널 입력: 20 22 23)",
      "prompt_en": "Convert space-separated integer temperatures into a list and print the average rounded to 1 decimal place. (Terminal input: 20 22 23)",
      "hint_ko": "공백으로 나눈 문자열들을 일괄 정수 변환해 리스트에 담은 뒤, 합계를 길이로 나눈 평균을 소수 첫째 자리까지 반올림합니다.",
      "hint_en": "Batch-convert the split tokens into a list of integers, then round their sum divided by length to 1 decimal place.",
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
      "prompt_ko": "정수 리스트 codes를 map(str, codes)로 일괄 문자열 변환한 뒤 \"-\".join(...)으로 이어 출력해보세요. (출력: 10-25-30)",
      "prompt_en": "Convert integer elements in codes to strings via map(str, codes) and join them with \"-\" to print 10-25-30.",
      "hint_ko": "문자열 결합 메서드는 문자열 요소만 이어 붙일 수 있으므로, 숫자 리스트에 문자열 변환을 일괄 적용해 곧바로 넘깁니다.",
      "hint_en": "String joining requires string elements, so batch-convert the integer list to strings directly inside the join call.",
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
      "prompt_ko": "단어 목록을 1번부터 순회하며 (순서 번호 * 글자 수)를 누적해 반환하는 score_words 함수를 완성해 출력해보세요. (터미널 입력: hi code)",
      "prompt_en": "Define score_words(words) to sum (1-based index * word length) using enumerate(words, 1) and print the result. (Terminal input: hi code)",
      "hint_ko": "두 번째 인자에 시작 번호 1을 주어 순회하면서 각 단어의 순서 번호와 글자 수를 곱해 누적한 뒤 반환합니다.",
      "hint_en": "Start numbering at 1 via the second argument, add (index * word length) on each step, and return the total.",
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