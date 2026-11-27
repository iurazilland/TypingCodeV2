import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_81: PracticeRound = {
  "id": "py-basic-r81",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 81,
  "title_ko": "81레벨: 반복문(while)·함수(def)·클래스와 안전한 예외 처리 패턴",
  "title_en": "Level 81: Safe Exception Patterns with Loops, Functions & Classes",
  "description_ko": "반복문(for/while), 함수(def), 클래스(class) 내부에 try - except를 결합해 멈추지 않는 견고한 코드를 작성합니다.",
  "description_en": "Combine try - except with loops, functions, and class methods to build resilient, crash-proof programs.",
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
      "prompt_ko": "[블록 조립] 문자열 리스트를 순회하며 정수로 변환 가능한 항목만 골라 합계를 구하는 코드를 조립해보세요.",
      "prompt_en": "[Block] Loop over the string list and sum only the items that can be converted to integers.",
      "hint_ko": "반복문 안에 try - except를 넣으면 중간에 잘못된 데이터가 섞여 있어도 멈추지 않고 끝까지 순회할 수 있습니다.",
      "hint_en": "Placing try - except inside a loop lets you skip malformed items and process the rest of the list.",
      "targetCode": "raw = [\"10\", \"x\", \"20\"]\ntotal = 0\nfor s in raw:\n    try:\n        total += int(s)\n    except ValueError:\n        pass\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "30"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 문자열 리스트를 순회하며 정수로 변환 가능한 값만 리스트에 모으도록 예외 이름을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the exception type inside the loop so non-numeric strings are skipped.",
      "hint_ko": "int(s) 변환이 실패할 때 발생하는 값 예외 이름을 적으세요.",
      "hint_en": "Specify the invalid-value exception raised by int(s).",
      "templateCode": "items = [\"5\", \"bad\", \"15\", \"err\"]\nnums = []\nfor s in items:\n    try:\n        nums.append(int(s))\n    except §§§§§§§§§§§:\n        continue\nprint(nums, sum(nums))",
      "targetCode": "items = [\"5\", \"bad\", \"15\", \"err\"]\nnums = []\nfor s in items:\n    try:\n        nums.append(int(s))\n    except ValueError:\n        continue\nprint(nums, sum(nums))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[5, 15] 20"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 유효한 정수가 입력될 때까지 반복 입력받아 두 배 값을 구하는 코드를 조립해보세요.",
      "prompt_en": "[Block] Assemble a retry loop that keeps reading input until a valid integer is entered and computes double its value.",
      "hint_ko": "n = int(input()) 바로 아랫줄에 break를 두면 변환에 성공했을 때만 루프를 탈출하고 실패 시에는 다시 입력받습니다.",
      "hint_en": "Placing break right after int(input()) exits the loop only when conversion succeeds.",
      "targetCode": "while True:\n    try:\n        n = int(input())\n        break\n    except ValueError:\n        print(\"Retry\")\nprint(n * 2)",
      "testCases": [
        {
          "id": 1,
          "input": "abc\n15",
          "expectedOutput": "Retry\n30"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 올바른 정수를 입력받는 즉시 무한 루프를 종료하도록 탈출 키워드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the keyword that immediately exits the loop once integer conversion succeeds.",
      "hint_ko": "반복문을 그 자리에서 즉시 끝내고 바깥으로 빠져나가는 제어 키워드를 적으세요.",
      "hint_en": "Use the loop-control keyword that terminates the loop immediately.",
      "templateCode": "while True:\n    try:\n        age = int(input())\n        §§§§§§\n    except ValueError:\n        print(\"Again\")\nprint(f\"OK:{age}\")",
      "targetCode": "while True:\n    try:\n        age = int(input())\n        break\n    except ValueError:\n        print(\"Again\")\nprint(f\"OK:{age}\")",
      "testCases": [
        {
          "id": 1,
          "input": "ten\n20",
          "expectedOutput": "Again\nOK:20"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 두 수의 몫을 구하되 0으로 나눌 때는 기본값을 반환하는 안전 나눗셈 함수를 조립해보세요.",
      "prompt_en": "[Block] Assemble a safe division function that returns the quotient or a fallback value when dividing by zero.",
      "hint_ko": "함수 내부에서 예외를 잡아 기본값을 return하면 함수를 호출하는 쪽에서는 에러 걱정 없이 결과를 쓸 수 있습니다.",
      "hint_en": "Handling exceptions inside a helper function and returning a default keeps caller code simple and safe.",
      "targetCode": "def safe_div(a, b):\n    try:\n        return a // b\n    except ZeroDivisionError:\n        return 0\nprint(safe_div(20, 4), safe_div(20, 0))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "5 0"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 문자열을 정수로 바꾸어 돌려주되 변환에 실패하면 지정된 기본값을 돌려주는 함수를 완성해보세요.",
      "prompt_en": "[Fill Blank] Complete the function so it sends back the fallback value when conversion fails.",
      "hint_ko": "예외 블록 안에서도 함수 호출부로 기본값을 되돌려주는 키워드를 적으세요.",
      "hint_en": "Use the keyword that sends default back to the caller.",
      "templateCode": "def safe_int(s, default=0):\n    try:\n        return int(s)\n    except ValueError:\n        §§§§§§§ default\nprint(safe_int(\"42\"), safe_int(\"no\", -1))",
      "targetCode": "def safe_int(s, default=0):\n    try:\n        return int(s)\n    except ValueError:\n        return default\nprint(safe_int(\"42\"), safe_int(\"no\", -1))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "42 -1"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 지정한 위치의 항목을 조회하되 범위를 벗어나면 빈 값을 반환하는 클래스 메서드를 조립해보세요.",
      "prompt_en": "[Block] Assemble a class method that returns the item at the given index or an empty value if out of range.",
      "hint_ko": "클래스 메서드 안에 예외 처리를 캡슐화하면 잘못된 인덱스를 넣어도 객체가 안전하게 None을 돌려줍니다.",
      "hint_en": "Encapsulating try - except inside a method lets the object safely return None on invalid indices.",
      "targetCode": "class Box:\n    def __init__(self, items):\n        self.items = items\n    def get_item(self, idx):\n        try:\n            return self.items[idx]\n        except IndexError:\n            return None\nb = Box([\"Pen\", \"Book\"])\nprint(b.get_item(1), b.get_item(5))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Book None"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 금고 객체의 딕셔너리 속성에서 없는 항목을 조회할 때 기본값을 반환하도록 예외 이름을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the exception type inside Vault.check() so missing keys return the fallback value.",
      "hint_ko": "딕셔너리 속성 self.data에 존재하지 않는 키를 조회했을 때 발생하는 예외 이름을 적으세요.",
      "hint_en": "Specify the exception raised when a key is absent from a dictionary.",
      "templateCode": "class Vault:\n    def __init__(self):\n        self.data = {\"gold\": 100}\n    def check(self, k):\n        try:\n            return self.data[k]\n        except §§§§§§§§§:\n            return 0\nv = Vault()\nprint(v.check(\"gold\"), v.check(\"silver\"))",
      "targetCode": "class Vault:\n    def __init__(self):\n        self.data = {\"gold\": 100}\n    def check(self, k):\n        try:\n            return self.data[k]\n        except KeyError:\n            return 0\nv = Vault()\nprint(v.check(\"gold\"), v.check(\"silver\"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "100 0"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 입력된 문자열 목록에서 정수로 변환 가능한 값들만 안전하게 합산해 반환하도록 메서드를 완성해보세요.",
      "prompt_en": "[Fill Blank] Complete the method so it safely sums only the valid integer tokens from the input list.",
      "hint_ko": "예외 검사를 시작하는 키워드(try)와 잘못된 정수 변환 예외 이름(ValueError)을 차례로 채우세요.",
      "hint_en": "Check the attempt keyword, the invalid-value exception name, and the keyword that sends back total.",
      "templateCode": "class Adder:\n    def sum_valid(self, arr):\n        total = 0\n        for s in arr:\n            §§§§:\n                total += int(s)\n            except §§§§§§§§§§§:\n                continue\n        return total\na = Adder()\nprint(a.sum_valid(input().split()))",
      "targetCode": "class Adder:\n    def sum_valid(self, arr):\n        total = 0\n        for s in arr:\n            try:\n                total += int(s)\n            except ValueError:\n                continue\n        return total\na = Adder()\nprint(a.sum_valid(input().split()))",
      "testCases": [
        {
          "id": 1,
          "input": "10 err 25 5",
          "expectedOutput": "40"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 리스트를 순회할 때 정수로 변환할 수 없는 항목은 건너뛰고 나머지 숫자만 합산하도록 코드의 버그를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the bug inside the exception handler so invalid items are skipped and the remaining numbers are summed.",
      "hint_ko": "에러가 난 현재 차례만 건너뛰고 다음 원소 순회를 이어가려면 continue 키워드를 써야 합니다.",
      "hint_en": "Use continue instead of break so the loop moves on to the remaining items after an error.",
      "templateCode": "raw = [\"10\", \"err\", \"30\"]\ntotal = 0\nfor s in raw:\n    try:\n        total += int(s)\n    except ValueError:\n        nextitem\nprint(total)",
      "targetCode": "raw = [\"10\", \"err\", \"30\"]\ntotal = 0\nfor s in raw:\n    try:\n        total += int(s)\n    except ValueError:\n        continue\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "40"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 0으로 나눌 때의 대체 반환값과 바깥 숫자를 더한 연산을 수행하도록 메서드의 버그를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the bug in the division method so its fallback result works properly in the outer addition expression.",
      "hint_ko": "메서드 호출 결과를 다른 숫자와 더하려면 예외 블록에서도 print가 아니라 값을 돌려주는 키워드를 써야 합니다.",
      "hint_en": "Send 0 back to the caller instead of calling print(0) inside the except block.",
      "templateCode": "class Calc:\n    def div(self, a, b):\n        try:\n            return a // b\n        except ZeroDivisionError:\n            print(0)\nc = Calc()\nprint(c.div(30, 0) + 15)",
      "targetCode": "class Calc:\n    def div(self, a, b):\n        try:\n            return a // b\n        except ZeroDivisionError:\n            return 0\nc = Calc()\nprint(c.div(30, 0) + 15)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "15"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 0 나눗셈 예외 블록 안에서 기본값 -1을 즉시 반환하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the line inside the exception handler that sends back -1 as the fallback result.",
      "hint_ko": "들여쓰기 8칸 위치에서 반환 키워드와 -1을 작성하세요.",
      "hint_en": "Write return -1 at the 8-space indentation level.",
      "templateCode": "def ratio(a, b):\n    try:\n        return a // b\n    except ZeroDivisionError:\n        §§§§§§§§§§\nprint(ratio(15, 3), ratio(15, 0))",
      "targetCode": "def ratio(a, b):\n    try:\n        return a // b\n    except ZeroDivisionError:\n        return -1\nprint(ratio(15, 3), ratio(15, 0))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "5 -1"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 정수 입력 변환에 성공한 직후 무한 반복을 종료하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the line that immediately terminates the retry loop once a valid integer is entered.",
      "hint_ko": "변환 줄 바로 아래 같은 들여쓰기 위치에 반복 탈출 키워드를 적으세요.",
      "hint_en": "Write break at the 8-space indentation level inside the try block.",
      "templateCode": "while True:\n    try:\n        val = int(input())\n        §§§§§§\n    except ValueError:\n        print(\"No\")\nprint(val + 1)",
      "targetCode": "while True:\n    try:\n        val = int(input())\n        break\n    except ValueError:\n        print(\"No\")\nprint(val + 1)",
      "testCases": [
        {
          "id": 1,
          "input": "x\n9",
          "expectedOutput": "No\n10"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 문자열 리스트를 순회하며 안전 변환 함수를 호출해 양수만 모았을 때의 출력 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the output when filtering parsed numbers through a safe helper function.",
      "hint_ko": "변환 실패 시 반환되는 -1은 if n > 0 조건에서 걸러진다는 점을 함께 고려해 리스트와 합계를 추적하세요.",
      "hint_en": "Invalid strings return -1 from to_int, which is then excluded by the if n > 0 check.",
      "targetCode": "def to_int(s):\n    try:\n        return int(s)\n    except ValueError:\n        return -1\nres = []\nfor x in [\"12\", \"bad\", \"-5\", \"8\"]:\n    n = to_int(x)\n    if n > 0:\n        res.append(n)\nprint(res, sum(res))",
      "choices": [
        "[12, 8] 20",
        "[12, -1, -5, 8] 14",
        "[12, -5, 8] 15",
        "[12, 8] 19"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[12, 8] 20"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 딕셔너리 속성과 예외 처리를 결합한 장바구니 클래스의 실행 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the output of the Cart class combining dictionary lookup, ValueError, and KeyError.",
      "hint_ko": "\"pen\"(200 * 3 = 600), \"none\"(없는 키 -> 0), \"book\"(\"two\" 변환 실패 -> 0) 세 호출 결과를 합산해보세요.",
      "hint_en": "Trace the three order() calls for valid inputs, a missing key, and a non-numeric quantity string.",
      "targetCode": "class Shop:\n    def __init__(self):\n        self.menu = {\"pen\": 200, \"book\": 500}\n    def order(self, item, qty_str):\n        try:\n            return self.menu[item] * int(qty_str)\n        except KeyError:\n            return 0\n        except ValueError:\n            return -10\ns = Shop()\ntotal = s.order(\"pen\", \"3\") + s.order(\"bag\", \"2\") + s.order(\"book\", \"two\")\nprint(total)",
      "choices": [
        "590",
        "600",
        "1590",
        "580"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "590"
        }
      ]
    }
  ]
};
