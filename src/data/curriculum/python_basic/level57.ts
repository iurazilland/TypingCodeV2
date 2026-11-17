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
  "totalQuestions": 15,
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] while True와 try - except로 올바른 정수가 입력될 때까지 재시도해보세요.",
      "prompt_en": "[Block] Use while True and try - except to retry until a valid integer is entered.",
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
      "prompt_ko": "[빈칸 채우기] 정수 입력에 성공하면 즉시 반복을 종료하고 에러 시 Again을 출력해보세요.",
      "prompt_en": "[Fill Blank] Exit the retry loop upon valid integer conversion and catch invalid text.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] ValueError와 ZeroDivisionError를 각각 안내하며 나눗셈에 성공할 때 break해보세요.",
      "prompt_en": "[Block] Report ValueError and ZeroDivisionError separately and break when division succeeds.",
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
      "prompt_ko": "[빈칸 채우기] 유효한 메뉴 번호를 입력받을 때까지 재시도하도록 탈출 키워드와 에러 타입을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the loop exit keyword and out-of-range exception type to retry until valid.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] for문 안에서 except ValueError: continue로 정상 정수만 리스트에 모아보세요.",
      "prompt_en": "[Block] Use except ValueError: continue inside a for loop to collect only valid integers.",
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
      "prompt_ko": "[빈칸 채우기] 쉼표 구분 입력에서 정상 정수만 추가하고 실패 항목은 건너뛰어 보세요.",
      "prompt_en": "[Fill Blank] Append valid stripped integers to valid and skip invalid tokens on error.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] try - except KeyError로 없는 키일 때 None을 반환하는 safe_get 함수를 완성해보세요.",
      "prompt_en": "[Block] Define safe_get(d, k) using try - except KeyError to return None on missing keys.",
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
      "prompt_ko": "[빈칸 채우기] 정수 변환 성공 시 변환값을 돌려주고 실패 시 기본값을 돌려주는 함수를 완성해보세요.",
      "prompt_en": "[Fill Blank] Complete safe_int(s, default=0) to return int(s) on success or default on failure.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 범위를 벗어난 인덱스일 때 None을 반환하는 safe_at(items, idx) 함수를 완성해보세요.",
      "prompt_en": "[Block] Define safe_at(items, idx) to catch IndexError and return None.",
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
      "prompt_ko": "[빈칸 채우기] 0으로 나눌 때의 예외를 잡아 기본값을 반환하는 safe_div 함수를 완성해보세요.",
      "prompt_en": "[Fill Blank] Catch division by zero in safe_div and return the default parameter.",
      "hint_ko": "첫 빈칸에는 0 나눗셈 예외 이름을, 둘째 빈칸에는 선언부의 일곱 글자 기본값 매개변수 이름을 적으세요.",
      "hint_en": "Catch ZeroDivisionError and return the default parameter.",
      "templateCode": "def safe_div(a, b, default=0):\n    try:\n        return a // b\n    except §§§§§§§§§§§§§§§§§:\n        return §§§§§§§\nprint(safe_div(20, 4), safe_div(20, 0, default=-1))",
      "targetCode": "def safe_div(a, b, default=0):\n    try:\n        return a // b\n    except ZeroDivisionError:\n        return default\nprint(safe_div(20, 4), safe_div(20, 0, default=-1))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "5 -1"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 재시도 루프에서 정수 변환 실패를 잡으려다 IndexError로 잘못 적은 에러 타입을 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the retry loop by replacing IndexError with ValueError.",
      "hint_ko": "int(input()) 변환 실패를 잡아 다시 입력받으려면 IndexError가 아니라 ValueError를 잡아야 합니다.",
      "hint_en": "Catch ValueError rather than IndexError when int(input()) fails.",
      "templateCode": "while True:\n    try:\n        n = int(input())\n        break\n    except IndexError:\n        print(\"Retry\")\nprint(n + 5)",
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
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 변환 실패 시 기본값을 반환하지 않고 출력만 하여 덧셈 에러가 나는 줄을 return으로 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the TypeError in safe_int by returning default instead of printing it.",
      "hint_ko": "호출부의 덧셈식에서 기본값을 사용할 수 있도록 print(default)를 return default로 수정하세요.",
      "hint_en": "Replace print(default) with return default inside the except block.",
      "templateCode": "def safe_int(s, default=0):\n    try:\n        return int(s)\n    except ValueError:\n        print(default)\nprint(safe_int(\"15\") + safe_int(\"bad\", default=5))",
      "targetCode": "def safe_int(s, default=0):\n    try:\n        return int(s)\n    except ValueError:\n        return default\nprint(safe_int(\"15\") + safe_int(\"bad\", default=5))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "20"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 정수 변환에 성공한 직후 while True 반복문을 탈출하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the line that breaks out of the retry loop after valid conversion.",
      "hint_ko": "반복문을 즉시 종료하는 다섯 글자 키워드 break를 작성하세요.",
      "hint_en": "Write break right after n = int(input()).",
      "templateCode": "while True:\n    try:\n        n = int(input())\n        §§§§§\n    except ValueError:\n        print(\"Retry\")\nprint(n * 10)",
      "targetCode": "while True:\n    try:\n        n = int(input())\n        break\n    except ValueError:\n        print(\"Retry\")\nprint(n * 10)",
      "testCases": [
        {
          "id": 1,
          "input": "err\n7",
          "expectedOutput": "Retry\n70"
        },
        {
          "id": 2,
          "input": "3",
          "expectedOutput": "30"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] x, y를 정수로 변환해 safe_div(int(x), int(y))를 호출한 결과를 ans에 저장해보세요.",
      "prompt_en": "[Complete Line] Call safe_div(int(x), int(y)) and store the result in ans.",
      "hint_ko": "ans = safe_div(int(x), int(y)) 형태로 함수를 호출해 반환값을 대입하세요.",
      "hint_en": "Write ans = safe_div(int(x), int(y)).",
      "templateCode": "def safe_div(a, b):\n    try:\n        return a // b\n    except ZeroDivisionError:\n        return None\nx, y = input().split()\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(ans)",
      "targetCode": "def safe_div(a, b):\n    try:\n        return a // b\n    except ZeroDivisionError:\n        return None\nx, y = input().split()\nans = safe_div(int(x), int(y))\nprint(ans)",
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
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 안전 변환 도우미 함수를 활용해 양수만 모으는 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the output of the following code filtering positive integers via parse_pos.",
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
