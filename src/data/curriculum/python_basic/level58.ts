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
  "unlockedBlocks": [],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 정수 변환 실패와 0 나눗셈 에러를 각각 구분하도록 두 에러 타입을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the two exception types to catch invalid integer input and division by zero.",
      "hint_ko": "숫자가 아닌 문자열을 정수로 바꿀 때 나는 예외와, 0으로 나눌 때 나는 예외 이름을 위아래 순서에 맞게 지정하세요.",
      "hint_en": "Specify the exception raised by invalid text conversion first, and the exception raised by dividing by zero second.",
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
      "prompt_ko": "[빈칸 채우기] 메뉴판에 있는 이름을 입력할 때까지 재시도하도록 탈출 키워드와 에러 타입을 채워보세요.",
      "prompt_en": "[Fill Blank] Break out of the retry loop when k is found in prices, or catch missing keys.",
      "hint_ko": "가격 조회에 성공한 직후에는 무한 반복을 멈추는 키워드를, 없는 메뉴를 찾았을 때는 딕셔너리 키 누락 예외 이름을 적으세요.",
      "hint_en": "Exit the retry loop immediately after a valid lookup, and catch the exception raised when a dictionary lacks the requested key.",
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
      "prompt_ko": "[빈칸 채우기] 리스트 범위를 벗어나면 None을 반환하도록 에러 타입과 반환 상수를 채워보세요.",
      "prompt_en": "[Fill Blank] Catch out-of-bounds list indexing and return the null constant.",
      "hint_ko": "리스트 길이 범위를 벗어난 위치 조회에서 발생하는 예외 타입을 잡고, 조회 실패를 뜻하는 '값 없음' 상수를 돌려주세요.",
      "hint_en": "Catch the out-of-bounds sequence position exception and send back Python's null constant when lookup fails.",
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
      "prompt_ko": "[틀린 곳 수정] 리스트 인덱스 범위를 벗어났을 때 ValueError로 잘못 적은 에러 타입을 IndexError로 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the uncaught exception on out-of-range list access by replacing ValueError with IndexError.",
      "hint_ko": "리스트 범위를 벗어난 순번을 조회할 때는 ValueError가 아니라 IndexError가 발생합니다.",
      "hint_en": "Out-of-bounds list access raises IndexError rather than ValueError.",
      "templateCode": "caps = [\"Seoul\", \"Tokyo\"]\nidx = int(input())\ntry:\n    print(caps[idx])\nexcept ValueError:\n    print(\"Unknown\")",
      "targetCode": "caps = [\"Seoul\", \"Tokyo\"]\nidx = int(input())\ntry:\n    print(caps[idx])\nexcept IndexError:\n    print(\"Unknown\")",
      "testCases": [
        {
          "id": 1,
          "input": "5",
          "expectedOutput": "Unknown"
        },
        {
          "id": 2,
          "input": "0",
          "expectedOutput": "Seoul"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 리스트 순회 중 정수 변환 실패를 잡으려다 IndexError로 잘못 적은 예외 타입을 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the crash during list filtering by replacing IndexError with ValueError.",
      "hint_ko": "문자열 \"err\"를 int(s)로 변환할 때 발생하는 예외는 IndexError가 아니라 ValueError입니다.",
      "hint_en": "Converting non-numeric text with int(s) raises ValueError rather than IndexError.",
      "templateCode": "raw = [\"15\", \"err\", \"25\"]\nvalid = []\nfor s in raw:\n    try:\n        n = int(s)\n        valid.append(n)\n    except IndexError:\n        continue\nprint(sum(valid))",
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
      "prompt_ko": "[틀린 곳 수정] 변환 실패 시 기본값을 반환하지 않고 출력만 하여 덧셈 에러가 나는 줄을 return으로 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the TypeError in addition caused by printing default instead of returning it in except.",
      "hint_ko": "예외 블록에서 대체값을 화면에 출력만 하고 돌려주지 않아 덧셈식에서 오류가 발생합니다. return default로 수정하세요.",
      "hint_en": "Send the fallback value back to the caller with return default instead of print(default).",
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
      "prompt_ko": "[한 줄 완성] x, y를 정수로 변환해 safe_ratio(int(x), int(y))를 호출한 결과를 ans에 저장해보세요.",
      "prompt_en": "[Complete Line] Call safe_ratio(int(x), int(y)) and store the result in ans.",
      "hint_ko": "ans = safe_ratio(int(x), int(y)) 형태로 함수를 호출해 반환값을 대입하세요.",
      "hint_en": "Write ans = safe_ratio(int(x), int(y)).",
      "templateCode": "def safe_ratio(a, b, fallback=-1):\n    try:\n        return a // b\n    except ZeroDivisionError:\n        return fallback\nx, y = input().split()\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(ans)",
      "targetCode": "def safe_ratio(a, b, fallback=-1):\n    try:\n        return a // b\n    except ZeroDivisionError:\n        return fallback\nx, y = input().split()\nans = safe_ratio(int(x), int(y))\nprint(ans)",
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
      "prompt_ko": "[한 줄 완성] 딕셔너리에 없는 학생 이름일 때 KeyError를 잡는 except 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the indented except KeyError: line inside the retry loop.",
      "hint_ko": "들여쓰기된 위치에서 except KeyError:를 작성하세요.",
      "hint_en": "Write except KeyError: inside the while True loop.",
      "templateCode": "scores = {\"Kim\": 80, \"Lee\": 95}\nwhile True:\n    name = input()\n    try:\n        pt = scores[name]\n        break\n    §§§§§§§§§§§§§§§§\n        print(\"Retry\")\nprint(f\"{name}={pt}\")",
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
      "prompt_ko": "[출력 결과 예측] 딕셔너리·리스트 조회와 나눗셈 예외 분기가 결합된 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output produced by the three calls to calc_item below.",
      "hint_ko": "나눗셈 식에서는 왼쪽 피연산자(딕셔너리 조회)가 오른쪽 피연산자(리스트 조회)보다 먼저 평가된다는 점에 유의해 세 호출이 어느 분기로 가는지 추적하세요.",
      "hint_en": "Remember Python evaluates the left operand (dictionary lookup) before the right operand (list lookup) and before division; trace which branch each call hits first.",
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
      "prompt_ko": "[출력 결과 예측] 안전 변환 함수와 집합(set)을 함께 사용하는 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the output of the following code combining parse_even and a set of unique values.",
      "hint_ko": "문자열 리스트에서 정수로 변환되면서 짝수 조건까지 통과하는 값들만 추린 뒤, 이미 집합에 등록된 중복 숫자는 건너뛰며 개수와 합계를 세어 보세요.",
      "hint_en": "Filter for tokens that parse cleanly as even integers, then track how skipping duplicates via the set affects the final count and sum.",
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
