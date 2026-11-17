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
  "totalQuestions": 15,
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] map(int, input().split())으로 두 입력값을 정수 변환해 a, b에 언패킹하고 합을 출력하세요.",
      "prompt_en": "[Block] Unpack map(int, input().split()) into a, b and print a + b.",
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
      "prompt_ko": "[빈칸 채우기] 공백 입력 숫자들을 일괄 정수 변환한 리스트로 만들어 총합을 출력하세요.",
      "prompt_en": "[Fill Blank] Fill in both blanks to convert a line of integers into a list and print their sum.",
      "hint_ko": "안쪽에는 함수를 일괄 대응시키는 3글자 함수를 쓰고, 바깥을 리스트 생성 함수(4글자)로 감싸세요.",
      "hint_en": "Inside, call the 3-letter batch-mapping function; outside, wrap it in the 4-letter list constructor.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] enumerate(items)로 0번부터 시작하는 인덱스와 값을 동시에 꺼내 출력해보세요.",
      "prompt_en": "[Block] Use enumerate(items) to unpack and print the 0-based index and value on each turn.",
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
      "prompt_ko": "[빈칸 채우기] 빈칸에 인덱스 순회 함수를 채워 1번부터 시작하는 메뉴 번호표를 출력해보세요. (출력 예: 1. tea)",
      "prompt_en": "[Fill Blank] Fill in the indexed iteration built-in so menu items are numbered starting from 1.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] list(map(int, input().split()))로 정수 리스트를 만들고 평균을 소수 첫째 자리까지 출력하세요.",
      "prompt_en": "[Block] Convert input numbers with list(map(int, input().split())) and print their rounded average.",
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
      "prompt_ko": "[빈칸 채우기] 문자열 리스트 raw를 정수 리스트로 일괄 변환해 최댓값과 최솟값의 차이를 출력하세요.",
      "prompt_en": "[Fill Blank] Fill in list and map to convert raw into integers and print max(nums) - min(nums).",
      "hint_ko": "바깥에는 4글자 리스트 변환 함수를, 안쪽에는 3글자 일괄 매핑 함수를 채우세요.",
      "hint_en": "Use the 4-letter list constructor outside and the 3-letter mapping built-in inside.",
      "templateCode": "raw = input().split()\nnums = §§§§(§§§(int, raw))\nprint(max(nums) - min(nums))",
      "targetCode": "raw = input().split()\nnums = list(map(int, raw))\nprint(max(nums) - min(nums))",
      "testCases": [
        {
          "id": 1,
          "input": "12 5 20 8",
          "expectedOutput": "15"
        },
        {
          "id": 2,
          "input": "30 10 25",
          "expectedOutput": "20"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 숫자 리스트 codes를 map(str, codes)로 문자열 변환해 \"-\"로 이어 붙인 결과를 출력해보세요.",
      "prompt_en": "[Block] Convert codes to strings with map(str, codes) and join them with \"-\".",
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
      "prompt_ko": "[빈칸 채우기] 정수 리스트 nums를 문자열로 일괄 변환해 슬래시(/)로 이어 출력하도록 두 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in join and map to convert nums to strings and join them with \"/\".",
      "hint_ko": "문자열들을 하나로 이어 붙이는 4글자 메서드와 함수를 일괄 적용하는 3글자 내장 함수를 채우세요.",
      "hint_en": "Call the 4-letter string joining method and the 3-letter batch-mapping function.",
      "templateCode": "nums = [1, 2, 3]\ntext = \"/\".§§§§(§§§(str, nums))\nprint(text)",
      "targetCode": "nums = [1, 2, 3]\ntext = \"/\".join(map(str, nums))\nprint(text)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1/2/3"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] enumerate(words, 1)로 1번부터 번호를 매겨 (순서 번호 * 단어 길이)의 합을 반환하는 함수를 완성하세요.",
      "prompt_en": "[Block] Use enumerate(words, 1) inside score_words to sum idx * len(w).",
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
      "prompt_ko": "[빈칸 채우기] 1번부터 순서 번호와 원소를 곱해 더하는 함수와 입력 변환을 완성하도록 두 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in enumerate and map to compute the 1-based weighted sum of input integers.",
      "hint_ko": "반복문에는 번호와 값을 함께 꺼내는 9글자 열거 함수를, 아래 입력 줄에는 3글자 일괄 변환 함수를 쓰세요.",
      "hint_en": "Use the 9-letter numbering function in the loop and the 3-letter mapping function for input parsing.",
      "templateCode": "def sum_ranked(nums):\n    total = 0\n    for idx, n in §§§§§§§§§(nums, 1):\n        total += idx * n\n    return total\narr = list(§§§(int, input().split()))\nprint(sum_ranked(arr))",
      "targetCode": "def sum_ranked(nums):\n    total = 0\n    for idx, n in enumerate(nums, 1):\n        total += idx * n\n    return total\narr = list(map(int, input().split()))\nprint(sum_ranked(arr))",
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
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 1번부터 순위 번호가 붙어야 하는데 0번부터 출력되는 시작 번호 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the start argument in enumerate() so rankings start at 1 instead of 0.",
      "hint_ko": "enumerate(시퀀스, 시작번호)의 두 번째 인자가 0으로 되어 있어 0번부터 시작합니다. 1부터 시작하도록 수정하세요.",
      "hint_en": "Change the second argument of enumerate(scores, 0) from 0 to 1 so numbering begins at 1.",
      "templateCode": "scores = list(map(int, input().split()))\nfor rank, sc in enumerate(scores, 0):\n    print(f\"#{rank}:{sc}\")",
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
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 정수 리스트를 하이픈(-)으로 연결하려다 변환 함수가 잘못 지정되어 오류가 나는 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the conversion function inside map() so \"-\".join(...) receives strings instead of ints.",
      "hint_ko": "문자열의 .join() 메서드는 문자열 원소만 이어 붙일 수 있으므로 map의 첫 인자를 str로 바꿔야 합니다.",
      "hint_en": "Because .join() requires string elements, change map(int, codes) to map(str, codes).",
      "templateCode": "codes = [10, 20, 30]\ntext = \"-\".join(map(int, codes))\nprint(text)",
      "targetCode": "codes = [10, 20, 30]\ntext = \"-\".join(map(str, codes))\nprint(text)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "10-20-30"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 문자열 raw를 공백 분리해 map으로 정수 변환한 합계를 total에 저장하세요.",
      "prompt_en": "[Complete Line] Assign sum(map(int, raw.split())) to total.",
      "hint_ko": "total = sum(map(int, raw.split())) 형태로 변환 결과를 곧바로 합산해 저장하세요.",
      "hint_en": "Write total = sum(map(int, raw.split())) to sum the mapped integers.",
      "templateCode": "raw = input()\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(total)",
      "targetCode": "raw = input()\ntotal = sum(map(int, raw.split()))\nprint(total)",
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
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] enumerate(words, 1)로 1번부터 번호를 붙인 f\"{i}:{w}\" 리스트 컴프리헨션을 tags에 저장하세요.",
      "prompt_en": "[Complete Line] Assign [f\"{i}:{w}\" for i, w in enumerate(words, 1)] to tags.",
      "hint_ko": "tags = [f\"{i}:{w}\" for i, w in enumerate(words, 1)] 형태로 작성해보세요.",
      "hint_en": "Write tags = [f\"{i}:{w}\" for i, w in enumerate(words, 1)].",
      "templateCode": "words = [\"a\", \"b\", \"c\"]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(tags)",
      "targetCode": "words = [\"a\", \"b\", \"c\"]\ntags = [f\"{i}:{w}\" for i, w in enumerate(words, 1)]\nprint(tags)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['1:a', '2:b', '3:c']"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 파이썬 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following Python code.",
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
