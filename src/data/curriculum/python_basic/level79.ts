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
    "def"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] zip(names, scores)로 두 리스트의 같은 위치 원소를 튜플 쌍으로 묶어 출력해보세요.",
      "prompt_en": "[Block] Pair elements from names and scores with list(zip(names, scores)) and print pairs.",
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
      "prompt_ko": "[빈칸 채우기] 두 빈칸을 채워 names와 scores를 병렬로 짝지은 튜플 리스트를 만들어 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in list and zip to pair names and scores into a list of tuples.",
      "hint_ko": "바깥에는 4글자 리스트 변환 함수를, 안쪽에는 '지퍼(zipper)'의 앞 세 글자를 딴 병렬 묶기 함수를 쓰세요.",
      "hint_en": "Wrap the 3-letter 'zipper' pairing function inside the 4-letter list constructor.",
      "templateCode": "names = [\"Amy\", \"Bob\"]\nscores = [95, 88]\npairs = §§§§(§§§(names, scores))\nprint(pairs)",
      "targetCode": "names = [\"Amy\", \"Bob\"]\nscores = [95, 88]\npairs = list(zip(names, scores))\nprint(pairs)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[('Amy', 95), ('Bob', 88)]"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] reversed()로 원본 변경 없이 뒤집은 리스트와 뒤집은 문자열을 각각 만들어 출력해보세요.",
      "prompt_en": "[Block] Use reversed() with list() and \"\".join() to print a reversed list and reversed string.",
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
      "prompt_ko": "[빈칸 채우기] 키 리스트 keys와 값 리스트 vals를 짝지어 딕셔너리로 만들고 hp와 mp 값을 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in both blanks to build a dictionary by pairing keys and vals, then print hp and mp.",
      "hint_ko": "안쪽에는 '지퍼(zipper)'의 앞 3글자 함수로 키와 값을 맞물리고, 바깥은 '사전(dictionary)'의 앞 4글자 생성자로 감싸세요.",
      "hint_en": "Pair the two lists inside using the 3-letter 'zipper' function, and wrap it outside with the 4-letter dict constructor.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] dict(zip(keys, vals))로 상점 사전을 만들고 target 가격을 출력하세요.",
      "prompt_en": "[Block] Build store with dict(zip(keys, vals)) and print store.get(target, 0).",
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
      "prompt_ko": "[빈칸 채우기] 입력된 단어 리스트를 역순 리스트로 만든 뒤 하이픈(-)으로 연결해 출력하세요.",
      "prompt_en": "[Fill Blank] Fill in list and reversed to reverse the input words and join them with \"-\".",
      "hint_ko": "바깥에는 4글자 리스트 함수를, 안쪽에는 '뒤집다(reverse)'에 -d를 붙인 8글자 역순 함수를 쓰세요.",
      "hint_en": "Use the 4-letter list constructor outside and the 8-letter reversed built-in inside.",
      "templateCode": "words = input().split()\nrev = §§§§(§§§§§§§§(words))\nprint(\"-\".join(rev))",
      "targetCode": "words = input().split()\nrev = list(reversed(words))\nprint(\"-\".join(rev))",
      "testCases": [
        {
          "id": 1,
          "input": "a b c",
          "expectedOutput": "c-b-a"
        },
        {
          "id": 2,
          "input": "py code",
          "expectedOutput": "code-py"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] for item in reversed(logs):로 마지막 항목부터 역순 순회하며 Undo:항목을 출력하세요.",
      "prompt_en": "[Block] Iterate through reversed(logs) to print Undo:{item} from last to first.",
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
      "prompt_ko": "[빈칸 채우기] 딕셔너리의 키·값 쌍을 문자열로 모은 뒤 역순으로 쉼표 연결해 출력하도록 두 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in both blanks to format key-value pairs from stock and join them in reverse order.",
      "hint_ko": "첫 빈칸은 딕셔너리의 키·값 쌍을 꺼내는 5글자 메서드를, 둘째 빈칸은 8글자 역순 순회 내장 함수를 쓰세요.",
      "hint_en": "First call the 5-letter items() method, then pass lines into the 8-letter reversed() built-in.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 소문자로 통일한 단어와 reversed()로 뒤집은 문자열을 비교해 회문 여부를 반환하는 함수를 완성하세요.",
      "prompt_en": "[Block] Complete is_pal(word) using .lower() and \"\".join(reversed(clean)) to check for a palindrome.",
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
      "prompt_ko": "[빈칸 채우기] 두 리스트 ks, vs를 짝지어 딕셔너리로 반환하는 함수 make_dict를 완성해보세요.",
      "prompt_en": "[Fill Blank] Fill in dict and zip so make_dict(ks, vs) returns a paired dictionary.",
      "hint_ko": "바깥에는 4글자 사전 생성 함수를, 안쪽에는 3글자 병렬 묶기 함수를 채우세요.",
      "hint_en": "Use the 4-letter dict constructor outside and the 3-letter zip function inside.",
      "templateCode": "def make_dict(ks, vs):\n    return §§§§(§§§(ks, vs))\nkeys = input().split()\nvals = list(map(int, input().split()))\nprint(make_dict(keys, vals))",
      "targetCode": "def make_dict(ks, vs):\n    return dict(zip(ks, vs))\nkeys = input().split()\nvals = list(map(int, input().split()))\nprint(make_dict(keys, vals))",
      "testCases": [
        {
          "id": 1,
          "input": "a b\n10 20",
          "expectedOutput": "{'a': 10, 'b': 20}"
        },
        {
          "id": 2,
          "input": "x\n5",
          "expectedOutput": "{'x': 5}"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 상품명으로 가격을 조회해야 하는데 키와 값을 묶는 인자 순서가 바뀐 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the swapped argument order in zip() so item names become keys and prices become values.",
      "hint_ko": "짝지어진 쌍으로 딕셔너리를 만들 때는 첫 번째 인자의 원소가 키, 두 번째 인자의 원소가 값이 됩니다.",
      "hint_en": "When pairing lists into a dictionary, the first list becomes keys and the second becomes values; swap the two arguments.",
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
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 이름:점수 형식으로 출력되어야 하는데 zip 인자 순서가 바뀌어 거꾸로 출력되는 버그를 수정하세요.",
      "prompt_en": "[Fix Bug] Fix the argument order in zip() so names unpack into k and scores unpack into v.",
      "hint_ko": "for k, v in zip(a, b): 형태로 이름 리스트 a를 먼저 전달해야 k에 이름이 담깁니다.",
      "hint_en": "Pass a first and b second in zip(a, b) so k receives the name and v receives the score.",
      "templateCode": "a = [\"Kim\", \"Lee\"]\nb = [90, 85]\nfor k, v in zip(b, a):\n    print(f\"{k}:{v}\")",
      "targetCode": "a = [\"Kim\", \"Lee\"]\nb = [90, 85]\nfor k, v in zip(a, b):\n    print(f\"{k}:{v}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Kim:90\nLee:85"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 두 리스트 keys, vals를 dict와 zip으로 짝지은 딕셔너리를 menu에 저장해보세요.",
      "prompt_en": "[Complete Line] Assign dict(zip(keys, vals)) to menu.",
      "hint_ko": "menu = dict(zip(keys, vals)) 형태로 두 리스트를 병렬로 묶어 사전을 생성하세요.",
      "hint_en": "Write menu = dict(zip(keys, vals)) to pair keys and values into a dictionary.",
      "templateCode": "keys = [\"a\", \"b\", \"c\"]\nvals = [1, 2, 3]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(menu)",
      "targetCode": "keys = [\"a\", \"b\", \"c\"]\nvals = [1, 2, 3]\nmenu = dict(zip(keys, vals))\nprint(menu)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "{'a': 1, 'b': 2, 'c': 3}"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 리스트 nums를 reversed()와 list()로 뒤집은 새 리스트를 rev에 저장해보세요.",
      "prompt_en": "[Complete Line] Assign list(reversed(nums)) to rev.",
      "hint_ko": "rev = list(reversed(nums)) 형태로 역순 반복자를 리스트로 변환해 저장하세요.",
      "hint_en": "Write rev = list(reversed(nums)) to store the reversed list.",
      "templateCode": "nums = [10, 20, 30]\n§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(rev)",
      "targetCode": "nums = [10, 20, 30]\nrev = list(reversed(nums))\nprint(rev)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[30, 20, 10]"
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
