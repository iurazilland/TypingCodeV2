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
      "prompt_ko": "내장 함수 zip(시퀀스1, 시퀀스2)은 두 시퀀스에서 같은 위치에 있는 원소끼리 짝지어 튜플 쌍으로 묶어 줍니다.",
      "prompt_en": "The built-in function zip(seq1, seq2) pairs up elements at matching positions from both sequences into tuples.",
      "hint_ko": "zip()이 반환하는 반복자를 list()로 감싸면 짝지어진 (이름, 점수) 튜플들의 리스트를 한눈에 확인할 수 있습니다.",
      "hint_en": "Wrapping the zip() iterator in list() materializes the paired tuples into a printable list.",
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
      "hint_ko": "양쪽을 맞물려 묶는 '지퍼(zipper)'의 앞 세 글자를 딴 내장 함수를 사용해 두 리스트를 나란히 순회하세요.",
      "hint_en": "Use the 3-letter built-in function abbreviated from 'zipper' to unpack matching items in parallel.",
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
      "prompt_ko": "내장 함수 reversed(시퀀스)는 원본을 변경하지 않고 맨 뒤 원소부터 거꾸로 꺼내는 역순 반복자를 반환합니다.",
      "prompt_en": "The built-in reversed(seq) returns a reverse iterator that yields elements from back to front without mutating the original sequence.",
      "hint_ko": "역순 반복자를 list()로 감싸면 뒤집힌 리스트가 되고, \"\".join()에 넣으면 뒤집힌 문자열이 만들어집니다.",
      "hint_en": "Pass the reverse iterator to list() for a reversed list, or to \"\".join() for a reversed string.",
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
      "hint_ko": "안쪽에는 '지퍼(zipper)'의 앞 3글자 함수로 키와 값을 맞물리고, 바깥은 '사전(dictionary)'의 앞 4글자 생성자로 감싸세요.",
      "hint_en": "Pair the two lists inside using the 3-letter 'zipper' function, and wrap it outside with the 4-letter constructor from 'dictionary'.",
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
      "prompt_ko": "dict(zip(키_리스트, 값_리스트)) 패턴을 사용하면 두 리스트를 나란히 짝지어 한 번에 딕셔너리로 생성할 수 있습니다. (터미널 입력: apple milk, 1500 2000, milk 한 줄씩)",
      "prompt_en": "The dict(zip(keys, vals)) idiom pairs a list of keys with a list of values to construct a dictionary in a single step. (Terminal input: apple milk, 1500 2000, milk line by line)",
      "hint_ko": "생성된 딕셔너리에서 .get(target, 0)으로 조회하면 없는 상품일 때도 오류 없이 0을 반환합니다.",
      "hint_en": "Looking up the target with .get(target, 0) returns 0 safely when the item is not in the dictionary.",
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
      "hint_ko": "'지퍼(zipper)'의 앞 세 글자를 딴 병렬 묶기 함수로 두 리스트의 같은 위치 원소를 동시에 꺼내 더하세요.",
      "hint_en": "Call the 3-letter parallel-pairing function from 'zipper' inside the comprehension loop.",
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
      "prompt_ko": "for item in reversed(시퀀스): 구문을 사용하면 원본 리스트의 순서를 보존한 채 가장 마지막 항목부터 역순으로 순회합니다. (터미널 입력: open edit save)",
      "prompt_en": "Using for item in reversed(seq): iterates through a sequence from the last element to the first while leaving the original list intact. (Terminal input: open edit save)",
      "hint_ko": ".reverse() 메서드는 원본 리스트 자체를 뒤집지만, reversed() 함수는 순회 순서만 거꾸로 제공합니다.",
      "hint_en": "Unlike list.reverse(), which mutates the list in place, reversed() yields items in reverse order cleanly.",
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
      "hint_ko": "첫 빈칸은 딕셔너리의 키·값 '항목들'(item의 복수형) 메서드를, 둘째 빈칸은 '뒤집다(reverse)'에 과거분사(-d)를 붙인 8글자 내장 함수를 쓰세요.",
      "hint_en": "First call the 5-letter plural method for key-value 'entries', then add '-d' to 'reverse' for the 8-letter reverse-iterator built-in.",
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
      "prompt_ko": ".lower()로 대소문자를 통일한 뒤 \"\".join(reversed(clean))으로 뒤집은 문자열과 비교하면, 앞에서 읽으나 뒤에서 읽으나 같은 회문(Palindrome)인지 판별할 수 있습니다. (터미널 입력: Level)",
      "prompt_en": "Normalizing case with .lower() and comparing against \"\".join(reversed(clean)) checks whether a word is a case-insensitive palindrome. (Terminal input: Level)",
      "hint_ko": "비교 연산자(==)의 결과 자체가 불리언(True/False)이므로 return clean == rev로 바로 반환합니다.",
      "hint_en": "Because == already evaluates to True or False, return clean == rev directly.",
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
      "prompt_ko": "두 숫자 리스트의 같은 위치 원소 간 절댓값 차이 총합을 반환하도록 두 빈칸을 채워보세요. (터미널 입력: 첫째 줄 10 20 30, 둘째 줄 12 15 33)",
      "prompt_en": "Fill in both blanks so total_gap returns the sum of absolute differences between paired items. (Terminal input: line 1 10 20 30, line 2 12 15 33)",
      "hint_ko": "앞 빈칸은 '절댓값(absolute)'의 앞 3글자 함수를, 뒤 빈칸은 '지퍼(zipper)'의 앞 3글자 병렬 묶기 함수를 채우세요.",
      "hint_en": "Use the 3-letter magnitude function from 'absolute' in the first blank, and the 3-letter pairing function from 'zipper' in the second.",
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
      "prompt_ko": "상품명으로 가격을 조회해야 하는데 키와 값을 묶는 인자 순서가 뒤바뀌어 0만 출력되는 버그를 고쳐보세요. (터미널 입력: tea cake, 1500 2000, cake 한 줄씩)",
      "prompt_en": "Fix the swapped argument order when pairing keys and values so looking up an item name returns its price. (Terminal input: tea cake, 1500 2000, cake line by line)",
      "hint_ko": "짝지어진 쌍으로 딕셔너리를 만들 때는 첫 번째 인자의 원소가 키, 두 번째 인자의 원소가 값이 됩니다. 상품명이 키가 되도록 인자 순서를 바꾸세요.",
      "hint_en": "When pairing lists into a dictionary, the first list becomes keys and the second becomes values; swap the two arguments so item names are keys.",
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
      "hint_ko": "키 리스트와 값 리스트를 병렬로 맞물려 묶은 뒤, 사전 생성자로 감싸 곧바로 출력해보세요.",
      "hint_en": "Pair the key and value lists in parallel, wrap those pairs in the dictionary constructor, and print the result.",
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
      "hint_ko": "두 번째 리스트가 뒤에서부터 역순으로 꺼내진다는 점과, 두 시퀀스의 길이가 다를 때 병렬 묶기는 더 짧은 길이에 맞춰 종료된다는 점을 함께 따져보세요.",
      "hint_en": "Remember two rules: the second list is read from back to front, and parallel pairing stops as soon as the shorter sequence ends.",
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