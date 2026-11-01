import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_49: PracticeRound = {
  "id": "py-basic-r49",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 49,
  "title_ko": "49레벨: None·튜플·딕셔너리·집합 기초 종합 문제풀이",
  "title_en": "Level 49: Section 7 Comprehensive Review",
  "description_ko": "None, 튜플 언패킹, 딕셔너리 조작과 .items() 순회, 집합 중복 제거 및 자료구조 형변환을 종합 실습합니다.",
  "description_en": "Comprehensive practice combining None, tuple unpacking, dictionaries, sets, and collection casting.",
  "totalQuestions": 10,
  "unlockedBlocks": [
    "print",
    "variable",
    "type",
    "math",
    "if",
    "for_in",
    "while",
    "break",
    "input",
    "method"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "초기 우승자를 빈 값으로 두고 튜플 리스트를 순회하며 최고 득점자를 찾아 출력해보세요. (출력 예: Lee:95)",
      "prompt_en": "Initialize winner to None and iterate over the tuple list to print the highest scorer (Lee:95).",
      "hint_ko": "초기값을 None으로 설정하고, 아직 우승자가 없거나(is None) 더 큰 점수가 나오면 갱신합니다.",
      "hint_en": "Set winner = None initially and check if winner is None or sc > best:.",
      "templateCode": "records = [(\"Kim\", 82), (\"Lee\", 95), (\"Park\", 88)]\nwinner = §§§§\nbest = 0\nfor name, sc in records:\n    if winner §§ §§§§ or sc > best:\n        winner = name\n        best = sc\nprint(f\"{winner}:{best}\")",
      "targetCode": "records = [(\"Kim\", 82), (\"Lee\", 95), (\"Park\", 88)]\nwinner = None\nbest = 0\nfor name, sc in records:\n    if winner is None or sc > best:\n        winner = name\n        best = sc\nprint(f\"{winner}:{best}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Lee:95"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "단어 빈도수를 집계한 뒤 제외 키(\"skip\")가 있으면 삭제하고 남은 결과를 출력해보세요. (출력 예: ok=2)",
      "prompt_en": "Count token frequencies, delete \"skip\" if present, and print remaining items (e.g., ok=2).",
      "hint_ko": "in으로 키 확인, del로 제외 항목 삭제, .items()로 남은 키와 값을 순회합니다.",
      "hint_en": "Use in for membership, del to remove cnt[\"skip\"], and cnt.items() to print pairs.",
      "templateCode": "tokens = input().split()\ncnt = {}\nfor t in tokens:\n    if t §§ cnt:\n        cnt[t] += 1\n    else:\n        cnt[t] = 1\nif \"skip\" in cnt:\n    §§§ cnt[\"skip\"]\nfor k, v in cnt.§§§§§():\n    print(f\"{k}={v}\")",
      "targetCode": "tokens = input().split()\ncnt = {}\nfor t in tokens:\n    if t in cnt:\n        cnt[t] += 1\n    else:\n        cnt[t] = 1\nif \"skip\" in cnt:\n    del cnt[\"skip\"]\nfor k, v in cnt.items():\n    print(f\"{k}={v}\")",
      "testCases": [
        {
          "id": 1,
          "input": "ok skip ok go",
          "expectedOutput": "ok=2\ngo=1"
        },
        {
          "id": 2,
          "input": "run run",
          "expectedOutput": "run=2"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "입력된 정수들을 집합에 모아 중복을 없앤 뒤, 오름차순 정렬된 튜플로 변환해 출력해보세요.",
      "prompt_en": "Collect input integers in a set, convert to a list to sort ascending, and print as a tuple.",
      "hint_ko": "set()으로 빈 집합 생성 후 .add()로 담고, list()로 바꿔 정렬한 뒤 tuple()로 출력합니다.",
      "hint_en": "Use set(), bag.add(...), list(bag), and tuple(arr) in sequence.",
      "templateCode": "raw = input().split()\nbag = §§§§§\ni = 0\nwhile i < len(raw):\n    bag.§§§(int(raw[i]))\n    i += 1\narr = §§§§(bag)\narr.sort()\nprint(§§§§§(arr))",
      "targetCode": "raw = input().split()\nbag = set()\ni = 0\nwhile i < len(raw):\n    bag.add(int(raw[i]))\n    i += 1\narr = list(bag)\narr.sort()\nprint(tuple(arr))",
      "testCases": [
        {
          "id": 1,
          "input": "30 10 30 20",
          "expectedOutput": "(10, 20, 30)"
        },
        {
          "id": 2,
          "input": "7 2 7",
          "expectedOutput": "(2, 7)"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "튜플을 리스트로 변환하지 않고 요소를 수정하려다 발생한 오류(TypeError)를 고쳐 (99, 20)을 출력해보세요.",
      "prompt_en": "Fix the TypeError from mutating a tuple directly by converting pt into a list on line 2.",
      "hint_ko": "arr = pt는 여전히 튜플을 가리킵니다. list(pt)로 형변환해 리스트로 만든 뒤 첫 요소를 수정하세요.",
      "hint_en": "Change arr = pt to arr = list(pt) so arr[0] = 99 mutates a list.",
      "templateCode": "pt = (10, 20)\narr = pt\narr[0] = 99\nprint(tuple(arr))",
      "targetCode": "pt = (10, 20)\narr = list(pt)\narr[0] = 99\nprint(tuple(arr))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "(99, 20)"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "존재하지 않는 키를 삭제하려다 오류가 발생하는 조건문 버그를 고쳐 삭제 후 남은 항목 수를 출력해보세요.",
      "prompt_en": "Fix the inverted membership condition before del so existing keys are removed without KeyError.",
      "hint_ko": "키가 딕셔너리 안에 있을 때(in)만 del을 실행해야 없는 키 삭제 오류를 막을 수 있습니다.",
      "hint_en": "Change not in to in so del stock[key] runs only when key exists in stock.",
      "templateCode": "stock = {\"apple\": 5, \"banana\": 2}\nkey = input()\nif key not in stock:\n    del stock[key]\nprint(len(stock))",
      "targetCode": "stock = {\"apple\": 5, \"banana\": 2}\nkey = input()\nif key in stock:\n    del stock[key]\nprint(len(stock))",
      "testCases": [
        {
          "id": 1,
          "input": "apple",
          "expectedOutput": "1"
        },
        {
          "id": 2,
          "input": "pear",
          "expectedOutput": "2"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "빈 집합 초기화가 잘못되어 단어를 추가할 때 발생한 오류(AttributeError)를 수정해 정렬된 리스트를 출력해보세요.",
      "prompt_en": "Fix the empty set initialization bug causing AttributeError on .add() and print the sorted list.",
      "hint_ko": "seen = {}는 빈 딕셔너리를 만듭니다. .add()를 사용할 수 있도록 set()으로 초기화하세요.",
      "hint_en": "Replace {} with set() on line 2 so seen is a set.",
      "templateCode": "words = input().split()\nseen = {}\nfor w in words:\n    seen.add(w)\nres = list(seen)\nres.sort()\nprint(res)",
      "targetCode": "words = input().split()\nseen = set()\nfor w in words:\n    seen.add(w)\nres = list(seen)\nres.sort()\nprint(res)",
      "testCases": [
        {
          "id": 1,
          "input": "b a b c",
          "expectedOutput": "['a', 'b', 'c']"
        },
        {
          "id": 2,
          "input": "z x z",
          "expectedOutput": "['x', 'z']"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "빈 값(None)인 항목을 삭제한 코드 아래에 한 줄을 추가하여 정리된 info 딕셔너리를 출력해보세요.",
      "prompt_en": "Add one line below the None-entry deletion to print the cleaned info dictionary.",
      "hint_ko": "마지막 줄에 print(info)를 입력해 \"temp\" 키가 삭제된 딕셔너리를 출력하세요.",
      "hint_en": "Write print(info) on the fourth line.",
      "templateCode": "info = {\"user\": \"ora\", \"temp\": None}\nif info[\"temp\"] is None:\n    del info[\"temp\"]\n§§§§§§§§§§§",
      "targetCode": "info = {\"user\": \"ora\", \"temp\": None}\nif info[\"temp\"] is None:\n    del info[\"temp\"]\nprint(info)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "{'user': 'ora'}"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "중복을 제거하고 오름차순 정렬한 코드 아래에 한 줄을 추가하여 uniq를 튜플로 변환한 결과를 출력해보세요.",
      "prompt_en": "Add one line below uniq.sort() to print uniq converted to a tuple.",
      "hint_ko": "마지막 줄에 print(tuple(uniq))를 작성하여 (10, 20, 40)이 출력되도록 하세요.",
      "hint_en": "Write print(tuple(uniq)) on the fourth line.",
      "templateCode": "nums = [40, 10, 40, 20]\nuniq = list(set(nums))\nuniq.sort()\n§§§§§§§§§§§§§§§§§§",
      "targetCode": "nums = [40, 10, 40, 20]\nuniq = list(set(nums))\nuniq.sort()\nprint(tuple(uniq))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "(10, 20, 40)"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 파이썬 코드를 실행했을 때 화면에 출력될 결과를 선택해보세요.",
      "prompt_en": "Select the exact output produced when the following Python code runs.",
      "hint_ko": "값이 None인 \"y\"가 삭제된 뒤 (\"x\", (2, 5))에서 10, (\"z\", (3, 4))에서 12가 더해져 xz 22가 출력됩니다.",
      "hint_en": "Key \"y\" is deleted; remaining tuples yield 2*5 + 3*4 = 22 and tags becomes \"xz\".",
      "targetCode": "d = {\"x\": (2, 5), \"y\": None, \"z\": (3, 4)}\nif d[\"y\"] is None:\n    del d[\"y\"]\ntotal = 0\ntags = \"\"\nfor k, pt in d.items():\n    a, b = pt\n    total += a * b\n    tags += k\nprint(tags, total)",
      "choices": [
        "xz 22",
        "xyz 22",
        "xz 14",
        "xzy 14"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "xz 22"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 파이썬 코드를 실행했을 때 화면에 출력될 결과를 선택해보세요.",
      "prompt_en": "Select the exact output produced when the following Python code runs.",
      "hint_ko": "10을 곱해 집합에 담으면 {10, 20, 30}이 되고 정렬된 튜플 t = (10, 20, 30)에서 길이는 3, 양끝 합은 40입니다.",
      "hint_en": "Unique multiples are (10, 20, 30) after sorting, so len(t) is 3 and t[0] + t[-1] is 40.",
      "targetCode": "raw = [3, 1, 3, 2, 1]\ns = set()\ni = 0\nwhile i < len(raw):\n    s.add(raw[i] * 10)\n    i += 1\narr = list(s)\narr.sort()\nt = tuple(arr)\nprint(len(t), t[0] + t[-1])",
      "choices": [
        "3 40",
        "5 40",
        "3 30",
        "5 60"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 40"
        }
      ]
    }
  ]
};
