import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_79: PracticeRound = {
  "id": "py-basic-r79",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 79,
  "title_ko": "79레벨: 병렬 묶기 zip()과 역순 순회 reversed()",
  "title_en": "Level 79: Parallel Pairing zip() & Reverse Iteration reversed()",
  "description_ko": "여러 시퀀스를 나란히 짝짓는 zip(), dict(zip()) 패턴과 원본을 보존하며 역순 순회하는 reversed()를 익힙니다.",
  "description_en": "Learn parallel pairing with zip(), dict(zip()), and non-mutating reverse iteration with reversed().",
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
    "def"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "names와 scores의 같은 위치 원소끼리 짝지은 list(zip(names, scores))를 pairs에 저장하고 출력해보세요.",
      "prompt_en": "Pair elements of names and scores in parallel using list(zip(names, scores)) and print pairs.",
      "hint_ko": "zip(a, b)는 두 리스트의 같은 인덱스 원소들을 튜플로 묶어 주며, list()로 감싸면 눈으로 확인할 수 있습니다.",
      "hint_en": "zip(names, scores) pairs corresponding items as tuples; wrap in list() to materialize the list.",
      "targetCode": "names = [\"Kim\", \"Lee\"]\nscores = [90, 85]\npairs = list(zip(names, scores))\nprint(pairs)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[('Kim', 90), ('Lee', 85)]"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 병렬 묶기 내장 함수를 채워 이름과 점수를 동시에 꺼내 지정된 형식으로 출력해보세요. (출력 예: Amy:95)",
      "prompt_en": "Fill in the parallel pairing built-in function to iterate names and scores together (e.g., Amy:95).",
      "hint_ko": "for name, sc in zip(names, scores):를 사용하면 두 리스트에서 나란히 값을 하나씩 언패킹할 수 있습니다.",
      "hint_en": "Use zip(names, scores) in the for loop to unpack name and sc simultaneously.",
      "templateCode": "names = [\"Amy\", \"Bob\"]\nscores = [95, 88]\nfor name, sc in §§§(names, scores):\n    print(f\"{name}:{sc}\")",
      "targetCode": "names = [\"Amy\", \"Bob\"]\nscores = [95, 88]\nfor name, sc in zip(names, scores):\n    print(f\"{name}:{sc}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Amy:95\nBob:88"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "list(reversed(nums))로 역순 리스트를, \"\".join(reversed(\"code\"))로 뒤집힌 문자열을 만들어 나란히 출력해보세요.",
      "prompt_en": "Build a reversed list with list(reversed(nums)) and a reversed string with \"\".join(reversed(\"code\")), then print both.",
      "hint_ko": "reversed()는 원본을 바꾸지 않고 뒤에서부터 꺼내는 반복자를 반환하므로 list()나 \"\".join()과 함께 씁니다.",
      "hint_en": "reversed() returns a reverse iterator without mutating the original; combine it with list() or \"\".join().",
      "targetCode": "nums = [10, 20, 30]\nrev_nums = list(reversed(nums))\nrev_word = \"\".join(reversed(\"code\"))\nprint(rev_nums, rev_word)",
      "expectedVariables": {
        "rev_word": "edoc"
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[30, 20, 10] edoc"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸을 채워 키 리스트 keys와 값 리스트 vals를 짝지어 한 번에 딕셔너리로 만들고 hp와 mp 값을 출력해보세요.",
      "prompt_en": "Fill in both blanks to build a dictionary directly by pairing keys and vals, then print hp and mp.",
      "hint_ko": "dict(zip(keys, vals))는 두 리스트로부터 딕셔너리를 생성하는 파이썬의 대표적인 실무 패턴입니다.",
      "hint_en": "dict(zip(keys, vals)) pairs keys with vals and converts them directly into a dictionary.",
      "templateCode": "keys = [\"hp\", \"mp\"]\nvals = [120, 60]\nstat = §§§§(§§§(keys, vals))\nprint(stat[\"hp\"], stat[\"mp\"])",
      "targetCode": "keys = [\"hp\", \"mp\"]\nvals = [120, 60]\nstat = dict(zip(keys, vals))\nprint(stat[\"hp\"], stat[\"mp\"])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "120 60"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "상품명 줄과 가격 줄을 dict(zip(...))으로 묶어 store를 만들고, 찾는 상품 가격(없으면 0)을 .get()으로 출력해보세요.",
      "prompt_en": "Build store from two input lines via dict(zip(keys, vals)) and print store.get(target, 0).",
      "hint_ko": "vals는 list(map(int, input().split()))으로 정수 변환한 뒤 dict(zip(keys, vals))와 store.get(target, 0)을 씁니다.",
      "hint_en": "Parse vals with list(map(int, input().split())), build dict(zip(keys, vals)), and look up target with .get(target, 0).",
      "targetCode": "keys = input().split()\nvals = list(map(int, input().split()))\nstore = dict(zip(keys, vals))\ntarget = input()\nprint(store.get(target, 0))",
      "testCases": [
        {
          "id": 1,
          "input": "apple milk\n1500 2000\nmilk",
          "expectedOutput": "2000"
        },
        {
          "id": 2,
          "input": "pen book\n800 3500\nbag",
          "expectedOutput": "0"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "리스트 컴프리헨션의 빈칸을 채워 두 리스트 x, y의 같은 위치 원소끼리 더한 합계 리스트를 출력해보세요. (출력: [11, 22, 33])",
      "prompt_en": "Fill in the blank in the list comprehension to add corresponding elements of x and y.",
      "hint_ko": "[a + b for a, b in zip(x, y)]로 같은 인덱스 원소 쌍을 깔끔하게 더할 수 있습니다.",
      "hint_en": "Iterate over zip(x, y) inside the comprehension as [a + b for a, b in zip(x, y)].",
      "templateCode": "x = [1, 2, 3]\ny = [10, 20, 30]\nsums = [a + b for a, b in §§§(x, y)]\nprint(sums)",
      "targetCode": "x = [1, 2, 3]\ny = [10, 20, 30]\nsums = [a + b for a, b in zip(x, y)]\nprint(sums)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[11, 22, 33]"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "공백으로 입력된 작업 기록 logs를 reversed(logs)로 최근 항목부터 역순 순회하며 취소 메시지를 출력해보세요. (출력 예: Undo:save)",
      "prompt_en": "Iterate input logs in reverse order with reversed(logs) and print Undo:<item> for each.",
      "hint_ko": "for item in reversed(logs):를 쓰면 원본 logs 리스트를 변경하지 않고 뒤에서부터 차례대로 꺼냅니다.",
      "hint_en": "Use for item in reversed(logs): to process items from last to first without mutating logs.",
      "targetCode": "logs = input().split()\nfor item in reversed(logs):\n    print(f\"Undo:{item}\")",
      "testCases": [
        {
          "id": 1,
          "input": "open edit save",
          "expectedOutput": "Undo:save\nUndo:edit\nUndo:open"
        },
        {
          "id": 2,
          "input": "move jump",
          "expectedOutput": "Undo:jump\nUndo:move"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "딕셔너리의 키·값 쌍을 문자열로 모은 뒤 역순으로 쉼표 연결해 출력하도록 두 빈칸을 채워보세요. (출력: bag=2, pen=5)",
      "prompt_en": "Fill in both blanks to format key-value pairs from stock and join them in reverse order.",
      "hint_ko": "stock.items()로 키와 값을 꺼내 lines에 담고, 마지막에 \", \".join(reversed(lines))로 뒤집어 연결합니다.",
      "hint_en": "Unpack key-value pairs with stock.items() and reverse lines via reversed(lines) inside join().",
      "templateCode": "stock = {\"pen\": 5, \"bag\": 2}\nlines = []\nfor k, v in stock.§§§§§():\n    lines.append(f\"{k}={v}\")\nprint(\", \".join(§§§§§§§§(lines)))",
      "targetCode": "stock = {\"pen\": 5, \"bag\": 2}\nlines = []\nfor k, v in stock.items():\n    lines.append(f\"{k}={v}\")\nprint(\", \".join(reversed(lines)))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "bag=2, pen=5"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "소문자로 통일한 단어와 \"\".join(reversed(clean)) 결과가 같은지 회문 여부를 반환하는 is_pal 함수를 완성해보세요.",
      "prompt_en": "Define is_pal(word) using .lower() and \"\".join(reversed(clean)) to check case-insensitive palindromes.",
      "hint_ko": "word.lower()로 대소문자를 맞춘 뒤 \"\".join(reversed(clean))과 clean == rev 비교 결과를 반환합니다.",
      "hint_en": "Normalize with word.lower(), build \"\".join(reversed(clean)), and return clean == rev.",
      "targetCode": "def is_pal(word):\n    clean = word.lower()\n    rev = \"\".join(reversed(clean))\n    return clean == rev\ntext = input()\nprint(is_pal(text))",
      "testCases": [
        {
          "id": 1,
          "input": "Level",
          "expectedOutput": "True"
        },
        {
          "id": 2,
          "input": "Python",
          "expectedOutput": "False"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 숫자 리스트의 같은 위치 원소 간 절댓값 차이 총합을 반환하도록 두 빈칸을 채워보세요. (예: 10 20 30 / 12 15 33 -> 10)",
      "prompt_en": "Fill in both blanks so total_gap returns the sum of absolute differences between paired items.",
      "hint_ko": "zip(xs, ys)로 두 리스트 원소를 나란히 꺼내면서 abs(a - b)로 각 차이의 크기를 구해 합산합니다.",
      "hint_en": "Pair elements with zip(xs, ys) and compute abs(a - b) for each pair before summing.",
      "templateCode": "def total_gap(xs, ys):\n    gaps = [§§§(a - b) for a, b in §§§(xs, ys)]\n    return sum(gaps)\np = list(map(int, input().split()))\nq = list(map(int, input().split()))\nprint(total_gap(p, q))",
      "targetCode": "def total_gap(xs, ys):\n    gaps = [abs(a - b) for a, b in zip(xs, ys)]\n    return sum(gaps)\np = list(map(int, input().split()))\nq = list(map(int, input().split()))\nprint(total_gap(p, q))",
      "testCases": [
        {
          "id": 1,
          "input": "10 20 30\n12 15 33",
          "expectedOutput": "10"
        },
        {
          "id": 2,
          "input": "5 5\n1 9",
          "expectedOutput": "8"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "상품명으로 가격을 조회해야 하는데 키와 값을 묶는 인자 순서가 뒤바뀌어 0만 출력되는 버그를 고쳐보세요.",
      "prompt_en": "Fix the swapped argument order when pairing keys and values so looking up an item name returns its price.",
      "hint_ko": "상품명(keys)이 키가 되고 가격(vals)이 값이 되어야 하므로 dict(zip(keys, vals)) 순서로 묶어야 합니다.",
      "hint_en": "Pass keys first and vals second in dict(zip(keys, vals)) so item names become dictionary keys.",
      "templateCode": "keys = input().split()\nvals = list(map(int, input().split()))\nmenu = dict(zip(vals, keys))\nitem = input()\nprint(menu.get(item, 0))",
      "targetCode": "keys = input().split()\nvals = list(map(int, input().split()))\nmenu = dict(zip(keys, vals))\nitem = input()\nprint(menu.get(item, 0))",
      "testCases": [
        {
          "id": 1,
          "input": "tea cake\n1500 2000\ncake",
          "expectedOutput": "2000"
        },
        {
          "id": 2,
          "input": "pen bag\n800 3500\npen",
          "expectedOutput": "800"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "두 리스트 keys, vals 아래에 한 줄을 추가하여 dict와 zip으로 짝지은 딕셔너리를 출력해보세요.",
      "prompt_en": "Add one line below keys and vals to pair them into a dictionary with dict and zip and print it.",
      "hint_ko": "셋째 줄에 print(dict(zip(keys, vals)))를 작성하면 키와 값이 짝지어진 딕셔너리가 출력됩니다.",
      "hint_en": "Write print(dict(zip(keys, vals))) on the third line.",
      "templateCode": "keys = [\"a\", \"b\", \"c\"]\nvals = [1, 2, 3]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "keys = [\"a\", \"b\", \"c\"]\nvals = [1, 2, 3]\nprint(dict(zip(keys, vals)))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "{'a': 1, 'b': 2, 'c': 3}"
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
      "hint_ko": "reversed(b)는 30, 20, 10 순서이며, zip은 더 짧은 길이(3개)에 맞춰 (1,30), (2,20), (3,10)까지만 묶습니다.",
      "hint_en": "reversed(b) yields 30, 20, 10 and zip stops at the shorter length (3), giving [1+30, 2+20, 3+10] = [31, 22, 13].",
      "targetCode": "a = [1, 2, 3, 4]\nb = [10, 20, 30]\nres = [x + y for x, y in zip(a, reversed(b))]\nprint(res)",
      "choices": [
        "[31, 22, 13]",
        "[11, 22, 33]",
        "[34, 23, 12]",
        "[31, 22, 13, 4]"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[31, 22, 13]"
        }
      ]
    }
  ]
};
