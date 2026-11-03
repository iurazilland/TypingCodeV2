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
      "hint_ko": "우승자 변수를 '아직 아무 값도 없음'을 뜻하는 예약어 상수로 초기화하고, 조건문에서 정체성 비교 연산자로 아직 비어 있는 상태인지 검사하세요.",
      "hint_en": "Initialize the winner variable to the Python constant representing an absent value, and test for that empty state using the identity operator.",
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
      "hint_ko": "단어가 사전에 이미 등록된 키인지 포함 여부로 확인해 집계한 뒤, 제외 대상 키를 사전에서 지우고 남은 키-값 쌍들을 동시에 꺼내 순회하세요.",
      "hint_en": "Check key presence while counting frequencies, remove the unwanted entry with the deletion statement, and iterate over key-value pairs together.",
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
      "hint_ko": "빈 집합 생성식으로 출발해 원소를 하나씩 채워 중복을 걸러낸 뒤, 정렬이 가능한 순서형 자료구조로 변환해 정돈하고 마지막에 불변 자료구조로 감싸 출력하세요.",
      "hint_en": "Start with an empty deduplicating collection, insert each parsed integer, cast to a mutable sequence so it can be ordered, and finally cast to an immutable sequence.",
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
      "hint_ko": "단순 변수 대입만으로는 변경 불가능한 원본 자료형이 그대로 유지되어 요소 값을 바꿀 수 없습니다. 수정 가능한 순서형 자료구조로 형변환해 대입하세요.",
      "hint_en": "Assigning directly keeps the immutable collection type intact, causing a mutation error; convert it into a mutable sequence on line 2 first.",
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
      "hint_ko": "사전에 존재하지 않는 키를 지우려 하면 오류가 발생합니다. 입력된 키가 사전 안에 실제로 들어 있을 때만 삭제가 실행되도록 조건식을 고치세요.",
      "hint_en": "Attempting to remove a missing key raises an error; fix the inverted membership condition so removal runs only when the key is present.",
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
      "hint_ko": "빈 중괄호는 중복 제거용 자료구조가 아니라 빈 사전을 생성하기 때문에 원소 추가 메서드가 동작하지 않습니다. 알맞은 빈 자료구조 생성식으로 수정하세요.",
      "hint_en": "Empty curly braces create an empty dictionary rather than an empty deduplicating collection; initialize it with the proper constructor call.",
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
      "hint_ko": "조건문이 끝난 바깥쪽 줄에서, 불필요한 항목이 정리된 사전 변수 전체를 화면에 그대로 출력해보세요.",
      "hint_en": "On the unindented final line after the conditional block, display the cleaned dictionary variable directly.",
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
      "hint_ko": "중복 제거와 오름차순 정돈을 마친 변수를 수정 불가능한 소괄호 자료구조로 형변환하여 한 줄로 출력해보세요.",
      "hint_en": "Cast the deduplicated and ordered variable into an immutable parenthesized collection and output it on the final line.",
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
      "hint_ko": "빈 값을 가진 항목이 먼저 제거된 뒤, 사전에 남아 있는 키들과 각 쌍의 곱셈 결과가 어떻게 누적되는지 순서대로 추적해보세요.",
      "hint_en": "First see which entry gets removed by the empty-value check, then trace how the remaining keys and unpacked pair products accumulate.",
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
      "hint_ko": "반복문을 거치며 중복이 제거된 고유 값들이 총 몇 개 남는지 세어보고, 오름차순 정돈 후 맨 앞 값과 맨 뒤 값의 합을 계산해보세요.",
      "hint_en": "Count how many unique multiplied numbers remain after deduplication, then order them ascending and add the first and last values.",
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
