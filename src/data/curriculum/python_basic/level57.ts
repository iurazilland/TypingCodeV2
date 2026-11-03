import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_57: PracticeRound = {
  "id": "py-basic-r57",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 57,
  "title_ko": "57레벨: 반복문(while)·함수(def)와 안전한 입력·변환 패턴",
  "title_en": "Level 57: Safe Input & Conversion with while and def",
  "description_ko": "올바른 값이 들어올 때까지 재시도하는 while True + try 패턴과 안전 조회·변환 도우미 함수 패턴을 익힙니다.",
  "description_en": "Master the while True + try retry loop, skipping bad list items, and safe helper functions.",
  "totalQuestions": 13,
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
      "type": "block",
      "prompt_ko": "while True 안에서 정수를 입력받아 성공하면 break로 탈출해 2배를 출력하고, ValueError면 \"Retry\"를 출력해 재시도해보세요.",
      "prompt_en": "Loop with while True to read int(input()) and break on success, or print \"Retry\" on ValueError; then print n * 2.",
      "hint_ko": "무한 반복문 안의 시도 블록에서 정수 변환 바로 아랫줄에 탈출문을 두면 정상 정수가 들어온 순간에만 반복이 끝납니다.",
      "hint_en": "Place the loop-exit statement right after integer conversion inside the attempt block so only valid numbers leave the retry loop.",
      "targetCode": "while True:\n    try:\n        n = int(input())\n        break\n    except ValueError:\n        print(\"Retry\")\nprint(n * 2)",
      "testCases": [
        {
          "id": 1,
          "input": "abc\n15",
          "expectedOutput": "Retry\n30"
        },
        {
          "id": 2,
          "input": "x\ny\n7",
          "expectedOutput": "Retry\nRetry\n14"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "실수 입력에 성공하면 즉시 반복을 종료하고, 변환 에러 시 Again을 출력해 재시도하도록 두 빈칸을 채워보세요. (출력 예: W:4.5)",
      "prompt_en": "Exit the retry loop upon valid float conversion and catch invalid text to print Again.",
      "hint_ko": "첫 빈칸에는 반복을 즉시 '깨고 탈출하다'를 뜻하는 다섯 글자 키워드를, 둘째 빈칸에는 부적절한 '값+오류' 예외 이름을 적으세요.",
      "hint_en": "First use the five-letter keyword meaning \"shatter / exit loop\", then catch the ten-letter PascalCase invalid-value exception.",
      "templateCode": "while True:\n    try:\n        w = float(input())\n        §§§§§\n    except §§§§§§§§§§:\n        print(\"Again\")\nprint(f\"W:{w}\")",
      "targetCode": "while True:\n    try:\n        w = float(input())\n        break\n    except ValueError:\n        print(\"Again\")\nprint(f\"W:{w}\")",
      "testCases": [
        {
          "id": 1,
          "input": "ten\n4.5",
          "expectedOutput": "Again\nW:4.5"
        },
        {
          "id": 2,
          "input": "2.0",
          "expectedOutput": "W:2.0"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "0이 아닌 정수가 입력될 때까지 반복하며 100 // d를 구하고, 문자면 \"NeedInt\", 0이면 \"NoZero\"를 출력한 뒤 결과를 출력해보세요.",
      "prompt_en": "Retry until 100 // int(input()) succeeds, printing \"NeedInt\" on ValueError and \"NoZero\" on ZeroDivisionError.",
      "hint_ko": "정수 변환과 나눗셈 계산이 모두 성공한 다음 줄에 탈출문을 배치하고, 값 변환 오류와 0 나눗셈 오류를 각각 분기하세요.",
      "hint_en": "Put the loop exit only after both integer parsing and floor division succeed, with separate catch blocks for text and zero.",
      "targetCode": "while True:\n    try:\n        d = int(input())\n        ans = 100 // d\n        break\n    except ValueError:\n        print(\"NeedInt\")\n    except ZeroDivisionError:\n        print(\"NoZero\")\nprint(ans)",
      "testCases": [
        {
          "id": 1,
          "input": "hi\n0\n25",
          "expectedOutput": "NeedInt\nNoZero\n4"
        },
        {
          "id": 2,
          "input": "0\n10",
          "expectedOutput": "NoZero\n10"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "유효한 메뉴 번호를 입력받을 때까지 Err를 출력하며 재시도하도록 탈출 키워드와 범위 초과 에러 타입을 채워보세요.",
      "prompt_en": "Fill in the loop exit keyword and out-of-range exception type to retry until a valid menu index is entered.",
      "hint_ko": "메뉴 조회 성공 직후에는 다섯 글자 반복 탈출 키워드를, 두 번째 예외에는 리스트 '순번+오류' 예외 이름을 첫 글자 대문자로 적으세요.",
      "hint_en": "Exit the loop with the five-letter stop keyword after picking the menu, and catch out-of-bounds positions with the ten-letter sequence index exception.",
      "templateCode": "menus = [\"Tea\", \"Cake\", \"Juice\"]\nwhile True:\n    try:\n        idx = int(input())\n        pick = menus[idx]\n        §§§§§\n    except ValueError:\n        print(\"Err\")\n    except §§§§§§§§§§:\n        print(\"Err\")\nprint(pick)",
      "targetCode": "menus = [\"Tea\", \"Cake\", \"Juice\"]\nwhile True:\n    try:\n        idx = int(input())\n        pick = menus[idx]\n        break\n    except ValueError:\n        print(\"Err\")\n    except IndexError:\n        print(\"Err\")\nprint(pick)",
      "testCases": [
        {
          "id": 1,
          "input": "a\n9\n1",
          "expectedOutput": "Err\nErr\nCake"
        },
        {
          "id": 2,
          "input": "5\n0",
          "expectedOutput": "Err\nTea"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "[\"10\", \"bad\", \"25\", \"--\", \"5\"]를 순회하며 정상 정수만 nums에 추가하고 실패 항목은 continue로 건너뛴 뒤 nums와 합계를 출력해보세요.",
      "prompt_en": "Collect valid integers from [\"10\", \"bad\", \"25\", \"--\", \"5\"] into nums, skipping ValueError items, then print nums and sum(nums).",
      "hint_ko": "반복문 안의 시도 블록에서는 변환된 정수를 리스트에 추가하고, 값 변환 예외 블록에서는 다음 순회로 건너뛰게 배치하세요.",
      "hint_en": "Append parsed integers inside the attempt block and skip bad tokens in the conversion-error block before printing the list and sum.",
      "targetCode": "raw = [\"10\", \"bad\", \"25\", \"--\", \"5\"]\nnums = []\nfor s in raw:\n    try:\n        nums.append(int(s))\n    except ValueError:\n        continue\nprint(nums, sum(nums))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 25, 5] 40"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "쉼표로 구분된 입력에서 정상 정수만 리스트에 추가하고 변환 실패 항목은 건너뛰도록 두 빈칸을 채워보세요.",
      "prompt_en": "Append valid stripped integers to valid and skip invalid tokens on conversion error.",
      "hint_ko": "첫 빈칸에는 리스트 끝에 '덧붙이다'를 뜻하는 여섯 글자 메서드를, 둘째 빈칸에는 부적절한 '값+오류' 예외 이름을 적으세요.",
      "hint_en": "Call the six-letter list method meaning \"attach to the end\" on line 6, and catch the ten-letter invalid-value exception on line 7.",
      "templateCode": "tokens = input().split(\",\")\nvalid = []\nfor s in tokens:\n    try:\n        n = int(s.strip())\n        valid.§§§§§§(n)\n    except §§§§§§§§§§:\n        continue\nprint(valid)",
      "targetCode": "tokens = input().split(\",\")\nvalid = []\nfor s in tokens:\n    try:\n        n = int(s.strip())\n        valid.append(n)\n    except ValueError:\n        continue\nprint(valid)",
      "testCases": [
        {
          "id": 1,
          "input": "10, x, 20, 30",
          "expectedOutput": "[10, 20, 30]"
        },
        {
          "id": 2,
          "input": "bad, 7, 8",
          "expectedOutput": "[7, 8]"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "딕셔너리 d에서 키 k를 조회해 반환하되 KeyError가 나면 None을 반환하는 safe_get(d, k)를 정의하고 \"lv\"와 \"age\" 결과를 확인해보세요.",
      "prompt_en": "Define safe_get(d, k) returning d[k] or None on KeyError, then test \"lv\" and safe_get(user, \"age\") is None.",
      "hint_ko": "함수 안의 시도 블록에서 딕셔너리 값을 바로 반환하고, 키 누락 예외 블록에서 값 없음 상수를 반환하도록 도우미 함수를 구성하세요.",
      "hint_en": "Inside the helper function, attempt returning the dictionary lookup and send back Python's null constant when the key is missing.",
      "targetCode": "def safe_get(d, k):\n    try:\n        return d[k]\n    except KeyError:\n        return None\nuser = {\"id\": \"kim\", \"lv\": 5}\nprint(safe_get(user, \"lv\"))\nprint(safe_get(user, \"age\") is None)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "5\nTrue"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "정수 변환 성공 시 변환값을 돌려주고 실패 시 기본값을 돌려주는 안전 변환 함수를 완성해보세요. (출력 예: 42 -1)",
      "prompt_en": "Complete safe_int(s, default=0) to return int(s) on success or default on conversion failure.",
      "hint_ko": "변환 성공 시 값을 '되돌려주다'를 뜻하는 여섯 글자 키워드를 적고, 실패 시에는 '값+오류' 예외 타입을 잡아 기본값을 반환하세요.",
      "hint_en": "Send back the parsed integer with the six-letter keyword in the attempt block, and catch the invalid-value exception below.",
      "templateCode": "def safe_int(s, default=0):\n    try:\n        §§§§§§ int(s)\n    except §§§§§§§§§§:\n        return default\nprint(safe_int(\"42\"), safe_int(\"no\", default=-1))",
      "targetCode": "def safe_int(s, default=0):\n    try:\n        return int(s)\n    except ValueError:\n        return default\nprint(safe_int(\"42\"), safe_int(\"no\", default=-1))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "42 -1"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "시퀀스 items에서 idx 위치를 반환하되 IndexError면 None을 반환하는 safe_at(items, idx)에 튜플 (\"Py\", \"JS\", \"Go\")를 전달해보세요.",
      "prompt_en": "Define safe_at(items, idx) returning items[idx] or None on IndexError, and test indices 1 and 9 on (\"Py\", \"JS\", \"Go\").",
      "hint_ko": "튜플을 포함한 시퀀스의 해당 위치 값을 시도 블록에서 반환하고, 순번 범위 초과 예외가 발생하면 값 없음 상수를 반환하세요.",
      "hint_en": "Attempt returning the sequence item at the given position, and fall back to Python's null constant on an out-of-range index.",
      "targetCode": "def safe_at(items, idx):\n    try:\n        return items[idx]\n    except IndexError:\n        return None\ntags = (\"Py\", \"JS\", \"Go\")\nprint(safe_at(tags, 1), safe_at(tags, 9))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "JS None"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "딕셔너리의 키-값 쌍을 순회하며 정수로 변환 가능한 값만 모아 오름차순 정렬해 반환하도록 두 빈칸을 채워보세요.",
      "prompt_en": "Iterate over key-value pairs of raw_map, collect valid integers, and return the sorted list.",
      "hint_ko": "첫 빈칸에는 딕셔너리의 키-값 '항목들'을 꺼내는 다섯 글자 복수형 메서드를, 둘째 빈칸에는 '값+오류' 예외 이름을 적으세요.",
      "hint_en": "Iterate key-value pairs with the five-letter plural entries method, and skip non-numeric strings by catching the invalid-value exception.",
      "templateCode": "def clean_scores(raw_map):\n    res = []\n    for k, v in raw_map.§§§§§():\n        try:\n            if k != \"\":\n                res.append(int(v))\n        except §§§§§§§§§§:\n            continue\n    res.sort()\n    return res\nd = {\"A\": \"90\", \"B\": \"err\", \"C\": \"75\"}\nprint(clean_scores(d))",
      "targetCode": "def clean_scores(raw_map):\n    res = []\n    for k, v in raw_map.items():\n        try:\n            if k != \"\":\n                res.append(int(v))\n        except ValueError:\n            continue\n    res.sort()\n    return res\nd = {\"A\": \"90\", \"B\": \"err\", \"C\": \"75\"}\nprint(clean_scores(d))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[75, 90]"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "반복 탈출문이 예외 블록 안에 잘못 들어가 있어 잘못된 입력일 때 루프가 끝나버립니다. 정상 입력일 때 탈출하도록 위치를 고쳐보세요.",
      "prompt_en": "Fix the retry loop where break is misplaced inside except ValueError instead of after valid conversion.",
      "hint_ko": "반복 탈출문이 예외 블록 안에 있어 잘못된 입력일 때 루프가 멈춥니다. 정수 변환이 성공한 직후 실행되도록 시도 블록 안으로 옮기세요.",
      "hint_en": "The loop-exit statement sits inside the error handler, stopping on bad input; move it into the attempt block right after conversion succeeds.",
      "templateCode": "while True:\n    try:\n        n = int(input())\n    except ValueError:\n        print(\"Retry\")\n        break\nprint(n + 5)",
      "targetCode": "while True:\n    try:\n        n = int(input())\n        break\n    except ValueError:\n        print(\"Retry\")\nprint(n + 5)",
      "testCases": [
        {
          "id": 1,
          "input": "bad\n20",
          "expectedOutput": "Retry\n25"
        },
        {
          "id": 2,
          "input": "10",
          "expectedOutput": "15"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "안전 나눗셈 함수와 입력 분리 코드 아래에 한 줄을 추가하여 x, y를 정수로 변환해 함수에 전달한 결과를 출력해보세요.",
      "prompt_en": "Add one line below x, y = input().split() to print safe_div(int(x), int(y)).",
      "hint_ko": "분리된 두 입력 문자열을 각각 정수로 변환하여 안전 나눗셈 함수의 두 인자로 넘기고, 그 반환값을 화면에 출력하세요.",
      "hint_en": "Convert both split strings to integers, pass them into the safe division function, and display the returned value.",
      "templateCode": "def safe_div(a, b):\n    try:\n        return a // b\n    except ZeroDivisionError:\n        return None\nx, y = input().split()\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "def safe_div(a, b):\n    try:\n        return a // b\n    except ZeroDivisionError:\n        return None\nx, y = input().split()\nprint(safe_div(int(x), int(y)))",
      "testCases": [
        {
          "id": 1,
          "input": "15 3",
          "expectedOutput": "5"
        },
        {
          "id": 2,
          "input": "15 0",
          "expectedOutput": "None"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "안전 변환 도우미 함수를 활용해 양수만 모으는 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "Select the output of the following code filtering positive integers via parse_pos.",
      "hint_ko": "음수, 문자열, 0, 양수가 차례로 도우미 함수에 들어갔을 때 어떤 원소만 양수 조건까지 통과해 리스트에 담기고 합산되는지 추적하세요.",
      "hint_en": "Check each element against both integer conversion and the strictly-positive test to see which numbers enter the list and get summed.",
      "targetCode": "def parse_pos(s):\n    try:\n        n = int(s)\n        if n > 0:\n            return n\n        return None\n    except ValueError:\n        return None\nraw = [\"-3\", \"hi\", \"12\", \"0\", \"8\"]\nout = []\nfor item in raw:\n    v = parse_pos(item)\n    if v is not None:\n        out.append(v)\nprint(out, sum(out))",
      "choices": [
        "[-3, 12, 0, 8] 17",
        "[12, 0, 8] 20",
        "[12, 8] 20",
        "[12, 8] 2"
      ],
      "correctChoiceIndex": 2,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[12, 8] 20"
        }
      ]
    }
  ]
};
