import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_103: PracticeRound = {
  "id": "py-basic-r103",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 103,
  "title_ko": "병렬 묶기 zip(), dict(zip())과 역순 순회 reversed()",
  "title_en": "Parallel Pairing zip(), dict(zip()) & reversed()",
  "description_ko": "여러 시퀀스의 같은 위치 요소를 짝짓는 zip(), 두 리스트로 사전을 만드는 dict(zip()), 원본 변경 없이 역순 순회하는 reversed()를 익힙니다.",
  "description_en": "Pair sequences in parallel with zip(), build dictionaries with dict(zip()), and iterate in reverse with reversed().",
  "totalQuestions": 15,
  "unlockedBlocks": [
    "comment",
    "print",
    "variable",
    "input",
    "type",
    "if",
    "for_range",
    "range",
    "for_in",
    "while",
    "break",
    "continue",
    "list",
    "tuple",
    "dict",
    "set",
    "iter",
    "method",
    "sorted",
    "math",
    "map",
    "def",
    "return",
    "class",
    "try"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] for name, score in zip(names, scores):로 두 리스트의 같은 위치 요소를 짝지어 순회하며 출력해보세요.",
      "prompt_en": "[Block] Use zip(names, scores) in a for loop to iterate over paired elements in parallel.",
      "hint_ko": "zip()은 두 리스트에서 같은 인덱스의 원소를 하나씩 꺼내 (name, score) 쌍으로 묶어 줍니다.",
      "hint_en": "zip() pairs elements at matching indices from both lists on each iteration.",
      "targetCode": "names = [\"Kim\", \"Lee\"]\nscores = [90, 85]\nfor name, score in zip(names, scores):\n    print(f\"{name}:{score}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Kim:90\nLee:85"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 두 리스트 names와 scores를 병렬로 짝지은 튜플 리스트를 만들도록 내장 함수를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the parallel-pairing built-in function to combine names and scores into tuples.",
      "hint_ko": "지퍼(zipper)처럼 양쪽 리스트를 맞물려 묶어주는 내장 함수를 적으세요.",
      "hint_en": "Type the built-in function that pairs elements like a zipper.",
      "targetCode": "names = [\"Amy\", \"Bob\"]\nscores = [95, 88]\nprint(list(zip(names, scores)))",
      "templateCode": "names = [\"Amy\", \"Bob\"]\nscores = [95, 88]\nprint(list(§§§§(names, scores)))",
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
      "prompt_ko": "[블록 조립] 키 리스트 keys와 값 리스트 vals를 dict(zip(keys, vals))로 한 번에 딕셔너리로 결합해 출력해보세요.",
      "prompt_en": "[Block] Combine keys and vals into a dictionary at once using dict(zip(keys, vals)).",
      "hint_ko": "zip()으로 짝지은 (키, 값) 쌍들을 dict()에 전달하면 곧바로 딕셔너리가 생성됩니다.",
      "hint_en": "Passing zip(keys, vals) into dict() constructs a dictionary from the paired keys and values.",
      "targetCode": "keys = [\"hp\", \"mp\"]\nvals = [120, 60]\nstat = dict(zip(keys, vals))\nprint(stat)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "{'hp': 120, 'mp': 60}"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] zip(keys, vals)로 묶은 쌍들을 딕셔너리 자료형으로 변환하도록 바깥쪽 함수를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the dictionary constructor to turn the zipped pairs into a dictionary.",
      "hint_ko": "사전(dictionary)을 생성하는 내장 함수를 입력하세요.",
      "hint_en": "Enter the built-in constructor for a dictionary.",
      "targetCode": "keys = [\"a\", \"b\"]\nvals = [10, 20]\nd = dict(zip(keys, vals))\nprint(d[\"a\"], d[\"b\"])",
      "templateCode": "keys = [\"a\", \"b\"]\nvals = [10, 20]\nd = §§§§§(zip(keys, vals))\nprint(d[\"a\"], d[\"b\"])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "10 20"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 원본 리스트를 바꾸지 않고 뒤에서부터 거꾸로 꺼내는 reversed(nums)를 사용해 역순 리스트와 원본을 출력해보세요.",
      "prompt_en": "[Block] Use list(reversed(nums)) to get a reversed list without modifying the original nums.",
      "hint_ko": ".reverse() 메서드는 원본을 직접 뒤집지만, reversed() 내장 함수는 원본을 그대로 두고 역순 반복자를 반환합니다.",
      "hint_en": "Unlike .reverse(), reversed() leaves the original list untouched and yields items in reverse order.",
      "targetCode": "nums = [10, 20, 30]\nrev = list(reversed(nums))\nprint(rev, nums)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[30, 20, 10] [10, 20, 30]"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 로그 리스트를 마지막 항목부터 역순으로 순회하며 출력하도록 내장 함수를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the built-in function to iterate over logs from back to front.",
      "hint_ko": "시퀀스를 역순으로 순회하는 내장 함수를 적으세요.",
      "hint_en": "Write the built-in function that iterates over a sequence in reverse.",
      "targetCode": "logs = [\"open\", \"edit\", \"save\"]\nfor x in reversed(logs):\n    print(x)",
      "templateCode": "logs = [\"open\", \"edit\", \"save\"]\nfor x in §§§§§§§§§(logs):\n    print(x)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "save\nedit\nopen"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 리스트 컴프리헨션과 zip()을 결합해 두 리스트의 같은 위치 값끼리 곱한 새 리스트를 출력해보세요.",
      "prompt_en": "[Block] Combine a list comprehension with zip(prices, qtys) to multiply corresponding elements.",
      "hint_ko": "[p * q for p, q in zip(prices, qtys)]로 같은 위치의 단가와 수량을 곱해 리스트로 만듭니다.",
      "hint_en": "Unpack p, q from zip(prices, qtys) inside the comprehension to compute each product p * q.",
      "targetCode": "prices = [1000, 2500, 500]\nqtys = [3, 2, 4]\ntotals = [p * q for p, q in zip(prices, qtys)]\nprint(totals, sum(totals))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[3000, 5000, 2000] 10000"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 두 리스트 a, b의 같은 위치 원소끼리 더한 리스트 컴프리헨션을 완성해보세요.",
      "prompt_en": "[Fill Blank] Fill in the pairing function in the list comprehension to add corresponding elements of a and b.",
      "hint_ko": "두 시퀀스를 나란히 묶어주는 내장 함수를 입력하세요.",
      "hint_en": "Enter the built-in function that pairs elements from two sequences.",
      "targetCode": "a = [1, 2, 3]\nb = [10, 20, 30]\nprint([x + y for x, y in zip(a, b)])",
      "templateCode": "a = [1, 2, 3]\nb = [10, 20, 30]\nprint([x + y for x, y in §§§§(a, b)])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[11, 22, 33]"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 셋째 줄의 빈칸에 병렬 묶기 함수를 채워 키 리스트와 역순 값 리스트를 짝지은 딕셔너리를 출력해보세요.",
      "prompt_en": "[Fill Blank] Pair keys with the backward values list and convert the pairs into a dictionary.",
      "hint_ko": "두 시퀀스의 같은 위치 요소들을 짝지어 묶어주는 내장 함수(zip)를 채우세요.",
      "hint_en": "Fill in the dictionary constructor, the parallel-pairing function, and the reverse iterator function.",
      "targetCode": "keys = [\"first\", \"second\", \"third\"]\nvals = [10, 20, 30]\nres = dict(zip(keys, reversed(vals)))\nprint(res)",
      "templateCode": "keys = [\"first\", \"second\", \"third\"]\nvals = [10, 20, 30]\nres = dict(§§§§(keys, reversed(vals)))\nprint(res)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "{'first': 30, 'second': 20, 'third': 10}"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 상품명(keys)으로 가격(vals)을 조회해야 하는데 인자 순서가 바뀌어 키와 값이 뒤집힌 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the swapped argument order in zip() so item names become keys and prices become values.",
      "hint_ko": "dict(zip(키_리스트, 값_리스트)) 순서로 전달해야 첫 번째 리스트가 딕셔너리의 키가 됩니다.",
      "hint_en": "Pass keys first and vals second inside zip(keys, vals).",
      "templateCode": "keys = [\"tea\", \"cake\"]\nvals = [1500, 3000]\nmenu = dict(zip(vals, keys))\nprint(menu[\"cake\"])",
      "targetCode": "keys = [\"tea\", \"cake\"]\nvals = [1500, 3000]\nmenu = dict(zip(keys, vals))\nprint(menu[\"cake\"])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3000"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] reversed(nums) 반복자를 리스트로 감싸 rev[0] 인덱싱이 동작하도록 잘못된 변환 함수(dict)를 list로 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the TypeError caused by indexing a reversed iterator directly without converting it to a list.",
      "hint_ko": "역순 반복자를 리스트로 만들려면 list(reversed(nums))로 변환해야 합니다.",
      "hint_en": "Wrap reversed(nums) in list(...) before indexing [0].",
      "templateCode": "nums = [10, 20, 30]\nrev = dict(reversed(nums))\nprint(rev[0])",
      "targetCode": "nums = [10, 20, 30]\nrev = list(reversed(nums))\nprint(rev[0])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "30"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 두 리스트 keys와 vals를 짝지어 딕셔너리를 만들고 변수 menu에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Pair keys and vals into a dictionary using dict(zip(...)) and assign it to menu.",
      "hint_ko": "menu = dict(zip(keys, vals)) 형태로 작성하세요.",
      "hint_en": "Write menu = dict(zip(keys, vals)) on the masked line.",
      "targetCode": "keys = [\"a\", \"b\", \"c\"]\nvals = [1, 2, 3]\nmenu = dict(zip(keys, vals))\nprint(menu)",
      "templateCode": "keys = [\"a\", \"b\", \"c\"]\nvals = [1, 2, 3]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(menu)",
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
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 리스트 nums를 reversed()와 list()로 뒤집은 새 리스트를 변수 rev에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Assign list(reversed(nums)) to the variable rev.",
      "hint_ko": "rev = list(reversed(nums)) 형태로 역순 반복자를 리스트로 변환해 저장하세요.",
      "hint_en": "Write rev = list(reversed(nums)) on the masked line.",
      "targetCode": "nums = [5, 10, 15]\nrev = list(reversed(nums))\nprint(rev)",
      "templateCode": "nums = [5, 10, 15]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(rev)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[15, 10, 5]"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 길이가 다른 두 리스트를 zip()과 reversed()로 묶어 연산한 다음 코드의 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output when pairing two lists of different lengths with zip() and reversed().",
      "hint_ko": "zip()은 길이가 더 짧은 시퀀스가 끝나는 즉시 멈추며, b는 뒤(30, 20, 10)에서부터 순서대로 짝지어집니다.",
      "hint_en": "zip() stops at the shorter length (3), pairing a's first three items with b in reverse (30, 20, 10).",
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
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] dict(zip())으로 생성한 사전과 .get() 안전 조회를 결합한 코드의 출력 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the code using dict(zip()) and .get().",
      "hint_ko": "길이가 3인 키와 길이가 2인 값을 zip()하면 2쌍만 사전에 들어가며, 없는 키 \"c\"는 기본값 0을 반환합니다.",
      "hint_en": "Only 2 pairs are zipped into d, so d.get(\"c\", 0) returns the fallback value 0.",
      "targetCode": "ks = [\"a\", \"b\", \"c\"]\nvs = [10, 20]\nd = dict(zip(ks, vs))\nprint(len(d), d[\"b\"] + d.get(\"c\", 0))",
      "choices": [
        "2 20",
        "3 20",
        "2 30",
        "3 0"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2 20"
        }
      ]
    }
  ]
};
