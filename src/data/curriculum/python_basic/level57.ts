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
      "prompt_ko": "while True 무한 반복문 안에 try - except를 넣고 변환 성공 직후 break를 실행하면, 올바른 정수가 입력될 때까지 계속 재시도하는 안전한 입력 루프를 만들 수 있습니다. 블록의 코드를 따라 입력해보세요. (터미널 입력: 첫째 줄 abc, 둘째 줄 15)",
      "prompt_en": "Placing try - except inside a while True loop and calling break right after int(input()) creates a retry loop that keeps asking until a valid integer is entered. Trace the block code. (Terminal input: line 1 abc, line 2 15)",
      "hint_ko": "int(input())에서 ValueError가 발생하면 break 줄을 건너뛰고 except 블록으로 넘어가 다음 반복을 이어갑니다.",
      "hint_en": "If int(input()) raises ValueError, Python skips the break line, runs the except block, and repeats the loop.",
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
      "prompt_ko": "정수 입력에 성공하면 즉시 반복을 종료하고, 변환 에러 시 Again을 출력해 재시도하도록 두 빈칸을 채워보세요. (출력 예: W:45) (터미널 입력: 첫째 줄 ten, 둘째 줄 45)",
      "prompt_en": "Exit the retry loop upon valid integer conversion and catch invalid text to print Again. (Terminal input: line 1 ten, line 2 45)",
      "hint_ko": "첫 빈칸에는 반복을 즉시 '깨고 탈출하다'를 뜻하는 다섯 글자 키워드를, 둘째 빈칸에는 부적절한 '값+오류' 예외 이름을 적으세요.",
      "hint_en": "First use the five-letter keyword meaning \"shatter / exit loop\", then catch the ten-letter PascalCase invalid-value exception.",
      "templateCode": "while True:\n    try:\n        w = int(input())\n        §§§§§\n    except §§§§§§§§§§:\n        print(\"Again\")\nprint(f\"W:{w}\")",
      "targetCode": "while True:\n    try:\n        w = int(input())\n        break\n    except ValueError:\n        print(\"Again\")\nprint(f\"W:{w}\")",
      "testCases": [
        {
          "id": 1,
          "input": "ten\n45",
          "expectedOutput": "Again\nW:45"
        },
        {
          "id": 2,
          "input": "20",
          "expectedOutput": "W:20"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "while True 재시도 루프에서 여러 except 절을 함께 사용하면, 정수 변환 실패(ValueError)와 0 나눗셈 실패(ZeroDivisionError)를 각각 안내하며 두 조건을 모두 통과할 때만 break로 탈출합니다. 블록의 코드를 따라 입력해보세요. (터미널 입력: hi, 0, 25 한 줄씩)",
      "prompt_en": "Combining multiple except clauses in a while True retry loop lets you report ValueError and ZeroDivisionError separately and break only when both parsing and division succeed. Trace the block code. (Terminal input: hi, 0, 25 line by line)",
      "hint_ko": "정수 변환과 나눗셈 계산이 모두 에러 없이 끝난 마지막 줄에 break를 두어야 안전한 결과만 루프 밖으로 나갑니다.",
      "hint_en": "Place break on the final line of the try block so the loop exits only after both conversion and division succeed.",
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
      "prompt_ko": "유효한 메뉴 번호를 입력받을 때까지 Err를 출력하며 재시도하도록 탈출 키워드와 범위 초과 에러 타입을 채워보세요. (터미널 입력: a, 9, 1 한 줄씩)",
      "prompt_en": "Fill in the loop exit keyword and out-of-range exception type to retry until a valid menu index is entered. (Terminal input: a, 9, 1 line by line)",
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
      "prompt_ko": "for 반복문 안에서 try와 except ValueError: continue를 조합하면, 변환에 실패한 문자열은 즉시 다음 순회로 건너뛰고 정상 정수만 리스트에 모을 수 있습니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Pairing try with except ValueError: continue inside a for loop skips unconvertible strings and collects only valid integers into a list. Trace the block code.",
      "hint_ko": "continue는 현재 반복의 남은 부분을 건너뛰고 곧바로 리스트의 다음 원소 순회로 넘어갑니다.",
      "hint_en": "continue skips the remainder of the current iteration and immediately moves on to the next item in the loop.",
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
      "prompt_ko": "쉼표로 구분된 입력에서 정상 정수만 리스트에 추가하고 변환 실패 항목은 건너뛰도록 두 빈칸을 채워보세요. (터미널 입력: 10, x, 20, 30)",
      "prompt_en": "Append valid stripped integers to valid and skip invalid tokens on conversion error. (Terminal input: 10, x, 20, 30)",
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
      "prompt_ko": "함수(def) 안에서 try - except KeyError로 딕셔너리 조회를 감싸고 키가 없을 때 None을 반환하면, 에러 없이 안전하게 값을 꺼내는 도우미 함수를 만들 수 있습니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Wrapping a dictionary lookup in try - except KeyError inside a def function and returning None when the key is missing creates a reusable safe-lookup helper. Trace the block code.",
      "hint_ko": "반환된 값이 None인지 확인할 때는 is None 연산자로 비교하면 참·거짓을 명확히 판별할 수 있습니다.",
      "hint_en": "Use the is None operator to check whether the returned result is Python's null value.",
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
      "prompt_ko": "시퀀스 인덱싱을 try - except IndexError로 감싼 도우미 함수를 정의하면, 리스트나 튜플에서 범위를 벗어난 번호를 조회해도 프로그램이 멈추지 않고 None을 돌려줍니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Defining a helper function that wraps sequence indexing in try - except IndexError safely returns None instead of crashing on out-of-range indices. Trace the block code.",
      "hint_ko": "인덱싱 문법 items[idx]는 리스트뿐만 아니라 튜플이나 문자열 같은 모든 시퀀스 자료형에 동일하게 작동합니다.",
      "hint_en": "The indexing syntax items[idx] works identically across all sequence types, including lists, tuples, and strings.",
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
      "prompt_ko": "반복 탈출문이 예외 블록 안에 잘못 들어가 있어 잘못된 입력일 때 루프가 끝나버립니다. 정상 입력일 때 탈출하도록 위치를 고쳐보세요. (터미널 입력: 첫째 줄 bad, 둘째 줄 20)",
      "prompt_en": "Fix the retry loop where break is misplaced inside except ValueError instead of after valid conversion. (Terminal input: line 1 bad, line 2 20)",
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
      "prompt_ko": "안전 나눗셈 함수와 입력 분리 코드 아래에 한 줄을 추가하여 x, y를 정수로 변환해 함수에 전달한 결과를 출력해보세요. (터미널 입력: 15 3)",
      "prompt_en": "Add one line below x, y = input().split() to print safe_div(int(x), int(y)). (Terminal input: 15 3)",
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
