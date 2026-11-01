import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_58: PracticeRound = {
  "id": "py-basic-r58",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 58,
  "title_ko": "58레벨: 예외 처리 필수 기초 종합 문제풀이",
  "title_en": "Level 58: Section 9 Comprehensive Review",
  "description_ko": "try - except 기본 구조, 4대 핵심 에러 분기, while True 재입력 루프, 안전 도우미 함수를 종합 점검합니다.",
  "description_en": "Comprehensive Section 9 review synthesizing try - except, 4 core exception types, retry loops, and safe functions.",
  "totalQuestions": 10,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "type",
    "math",
    "method",
    "if",
    "for_range",
    "for_in",
    "while",
    "break",
    "continue",
    "def",
    "try"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "정수 변환 실패와 0 나눗셈 에러를 각각 구분해 안내문을 출력하도록 두 에러 타입 이름을 순서대로 채워보세요.",
      "prompt_en": "Fill in the two exception types to catch invalid integer input and division by zero separately.",
      "hint_ko": "변환 오류는 ValueError, 0 나눗셈 오류는 ZeroDivisionError로 분기합니다.",
      "hint_en": "Write ValueError first and ZeroDivisionError second.",
      "templateCode": "s = input()\ntry:\n    n = int(s)\n    print(f\"Ans:{120 // n}\")\nexcept §§§§§§§§§§:\n    print(\"Err:Val\")\nexcept §§§§§§§§§§§§§§§§§:\n    print(\"Err:Zero\")",
      "targetCode": "s = input()\ntry:\n    n = int(s)\n    print(f\"Ans:{120 // n}\")\nexcept ValueError:\n    print(\"Err:Val\")\nexcept ZeroDivisionError:\n    print(\"Err:Zero\")",
      "testCases": [
        {
          "id": 1,
          "input": "30",
          "expectedOutput": "Ans:4"
        },
        {
          "id": 2,
          "input": "abc",
          "expectedOutput": "Err:Val"
        },
        {
          "id": 3,
          "input": "0",
          "expectedOutput": "Err:Zero"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "메뉴판 딕셔너리에 있는 이름을 입력할 때까지 재시도하도록 반복 탈출 키워드와 키 에러 타입을 채워보세요. (출력 예: pie:4500)",
      "prompt_en": "Break out of the retry loop when k is found in prices, or catch missing keys to print NoMenu.",
      "hint_ko": "가격 조회 성공 직후 break로 탈출하고, 없는 메뉴 키는 KeyError로 잡아 재시도합니다.",
      "hint_en": "Write break inside try and KeyError after except.",
      "templateCode": "prices = {\"tea\": 3000, \"pie\": 4500}\nwhile True:\n    k = input().strip()\n    try:\n        cost = prices[k]\n        §§§§§\n    except §§§§§§§§:\n        print(\"NoMenu\")\nprint(f\"{k}:{cost}\")",
      "targetCode": "prices = {\"tea\": 3000, \"pie\": 4500}\nwhile True:\n    k = input().strip()\n    try:\n        cost = prices[k]\n        break\n    except KeyError:\n        print(\"NoMenu\")\nprint(f\"{k}:{cost}\")",
      "testCases": [
        {
          "id": 1,
          "input": "milk\npie",
          "expectedOutput": "NoMenu\npie:4500"
        },
        {
          "id": 2,
          "input": "tea",
          "expectedOutput": "tea:3000"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "리스트 범위를 벗어나면 값 없음 상수를 반환하도록 에러 타입과 반환 상수를 두 빈칸에 채워보세요. (출력 예: True Gold)",
      "prompt_en": "Catch out-of-bounds list indexing and return the null constant.",
      "hint_ko": "리스트 범위 초과 에러는 IndexError이며, 값이 없음을 뜻하는 반환 상수는 None입니다.",
      "hint_en": "Write IndexError in except and None after return.",
      "templateCode": "def pick_item(box, idx):\n    try:\n        return box[idx]\n    except §§§§§§§§§§:\n        return §§§§\nitems = [\"Gold\", \"Gem\"]\nres = pick_item(items, 4)\nprint(res is None, pick_item(items, 0))",
      "targetCode": "def pick_item(box, idx):\n    try:\n        return box[idx]\n    except IndexError:\n        return None\nitems = [\"Gold\", \"Gem\"]\nres = pick_item(items, 4)\nprint(res is None, pick_item(items, 0))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True Gold"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "딕셔너리에 없는 국가 코드를 조회했을 때 예외를 잡지 못해 멈춥니다. 상황에 맞는 에러 타입으로 수정해보세요.",
      "prompt_en": "Fix the uncaught exception when looking up a missing country code in dictionary caps.",
      "hint_ko": "딕셔너리 caps[code]에 키가 없을 때 발생하는 에러는 ValueError가 아니라 KeyError입니다.",
      "hint_en": "Replace except ValueError: with except KeyError:.",
      "templateCode": "caps = {\"KR\": \"Seoul\", \"JP\": \"Tokyo\"}\ncode = input()\ntry:\n    print(caps[code])\nexcept ValueError:\n    print(\"Unknown\")",
      "targetCode": "caps = {\"KR\": \"Seoul\", \"JP\": \"Tokyo\"}\ncode = input()\ntry:\n    print(caps[code])\nexcept KeyError:\n    print(\"Unknown\")",
      "testCases": [
        {
          "id": 1,
          "input": "KR",
          "expectedOutput": "Seoul"
        },
        {
          "id": 2,
          "input": "US",
          "expectedOutput": "Unknown"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "리스트 순회 중 정수 변환 코드가 예외 감시 블록 바깥에 있어 에러로 중단됩니다. 변환 코드를 블록 안으로 옮겨보세요.",
      "prompt_en": "Fix the crash during list filtering by moving n = int(s) inside the try block.",
      "hint_ko": "\"err\"를 만났을 때 except ValueError:가 작동하려면 n = int(s)가 try: 안에 들어 있어야 합니다.",
      "hint_en": "Move n = int(s) inside try: above valid.append(n).",
      "templateCode": "raw = [\"15\", \"err\", \"25\"]\nvalid = []\nfor s in raw:\n    n = int(s)\n    try:\n        valid.append(n)\n    except ValueError:\n        continue\nprint(sum(valid))",
      "targetCode": "raw = [\"15\", \"err\", \"25\"]\nvalid = []\nfor s in raw:\n    try:\n        n = int(s)\n        valid.append(n)\n    except ValueError:\n        continue\nprint(sum(valid))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "40"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "변환 실패 시 기본값을 반환하지 않고 화면에 출력만 하여 덧셈 연산에서 에러가 발생합니다. 기본값을 반환하도록 고쳐보세요.",
      "prompt_en": "Fix the TypeError in addition caused by printing default instead of returning it in except.",
      "hint_ko": "호출한 곳의 덧셈식이 숫자를 받을 수 있도록 except 블록에서도 print(default) 대신 return default를 써야 합니다.",
      "hint_en": "Change print(default) to return default inside except ValueError:.",
      "templateCode": "def to_num(s, default=0):\n    try:\n        return int(s)\n    except ValueError:\n        print(default)\nans = to_num(\"10\") + to_num(\"bad\", default=5)\nprint(ans)",
      "targetCode": "def to_num(s, default=0):\n    try:\n        return int(s)\n    except ValueError:\n        return default\nans = to_num(\"10\") + to_num(\"bad\", default=5)\nprint(ans)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "15"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "0 나눗셈 안전 함수와 입력 코드 아래에 한 줄을 추가하여 x와 y를 정수로 변환해 함수에 전달한 반환값을 출력해보세요.",
      "prompt_en": "Add one line below x, y = input().split() to call safe_ratio(int(x), int(y)) and print the result.",
      "hint_ko": "x, y를 각각 int()로 감싸 print(safe_ratio(int(x), int(y)))를 마지막 줄에 작성합니다.",
      "hint_en": "Write print(safe_ratio(int(x), int(y))) on the last line.",
      "templateCode": "def safe_ratio(a, b, fallback=-1):\n    try:\n        return a // b\n    except ZeroDivisionError:\n        return fallback\nx, y = input().split()\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "def safe_ratio(a, b, fallback=-1):\n    try:\n        return a // b\n    except ZeroDivisionError:\n        return fallback\nx, y = input().split()\nprint(safe_ratio(int(x), int(y)))",
      "testCases": [
        {
          "id": 1,
          "input": "20 5",
          "expectedOutput": "4"
        },
        {
          "id": 2,
          "input": "20 0",
          "expectedOutput": "-1"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "유효한 학생 이름을 입력받을 때까지 반복하는 코드 아래에 한 줄을 추가하여 이름과 점수를 등호(=)로 이어 출력해보세요. (출력 예: Lee=95)",
      "prompt_en": "Add one line after the retry loop to print f\"{name}={pt}\".",
      "hint_ko": "루프 탈출 후 확정된 name과 pt를 이용해 print(f\"{name}={pt}\")를 작성합니다.",
      "hint_en": "Write print(f\"{name}={pt}\") on the last line.",
      "templateCode": "scores = {\"Kim\": 80, \"Lee\": 95}\nwhile True:\n    name = input()\n    try:\n        pt = scores[name]\n        break\n    except KeyError:\n        print(\"Retry\")\n§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "scores = {\"Kim\": 80, \"Lee\": 95}\nwhile True:\n    name = input()\n    try:\n        pt = scores[name]\n        break\n    except KeyError:\n        print(\"Retry\")\nprint(f\"{name}={pt}\")",
      "testCases": [
        {
          "id": 1,
          "input": "Park\nLee",
          "expectedOutput": "Retry\nLee=95"
        },
        {
          "id": 2,
          "input": "Kim",
          "expectedOutput": "Kim=80"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "딕셔너리·리스트 조회와 나눗셈 예외 분기가 결합된 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "Select the exact output produced by the three calls to calc_item below.",
      "hint_ko": "r1은 30//5=6, r2는 30//0으로 0이며, r3은 store[\"c\"]를 먼저 평가해 KeyError가 발생하므로 -10이 반환됩니다.",
      "hint_en": "r1 = 6, r2 = 0 (ZeroDivisionError), and r3 evaluates store[\"c\"] first, raising KeyError -> -10.",
      "targetCode": "def calc_item(store, nums, k, i):\n    try:\n        return store[k] // nums[i]\n    except KeyError:\n        return -10\n    except IndexError:\n        return -20\n    except ZeroDivisionError:\n        return 0\nst = {\"a\": 30, \"b\": 15}\narr = [5, 0]\nr1 = calc_item(st, arr, \"a\", 0)\nr2 = calc_item(st, arr, \"a\", 1)\nr3 = calc_item(st, arr, \"c\", 9)\nprint(r1, r2, r3)",
      "choices": [
        "6 0 -20",
        "6 -20 -10",
        "5 0 -10",
        "6 0 -10"
      ],
      "correctChoiceIndex": 3,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "6 0 -10"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "안전 변환 함수와 집합(set)을 함께 사용하는 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "Select the output of the following code combining parse_even and a set of unique values.",
      "hint_ko": "유효한 짝수는 6과 4뿐이며 마지막 \"6\"은 이미 집합 seen에 들어 있어 제외되므로 개수는 2, 합계는 10입니다.",
      "hint_en": "Valid distinct evens are 6 and 4 (duplicate 6 is skipped), so len(seen) is 2 and total is 10.",
      "targetCode": "def parse_even(s):\n    try:\n        n = int(s)\n        if n % 2 == 0:\n            return n\n        return None\n    except ValueError:\n        return None\nitems = [\"6\", \"3\", \"py\", \"4\", \"6\"]\nseen = set()\ntotal = 0\nfor s in items:\n    v = parse_even(s)\n    if v is not None and v not in seen:\n        seen.add(v)\n        total += v\nprint(len(seen), total)",
      "choices": [
        "2 10",
        "3 16",
        "2 16",
        "3 13"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2 10"
        }
      ]
    }
  ]
};
