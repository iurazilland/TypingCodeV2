import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_79: PracticeRound = {
  "id": "py-basic-r79",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 79,
  "title_ko": "79레벨: 수치·변환 에러 잡기 (ValueError, ZeroDivisionError)",
  "title_en": "Level 79: Catching ValueError & ZeroDivisionError",
  "description_ko": "잘못된 숫자 변환(ValueError)과 0 나눗셈(ZeroDivisionError)을 구체적으로 지정하여 원인별로 알맞게 대처합니다.",
  "description_en": "Specify ValueError and ZeroDivisionError in separate except clauses to handle conversion and division errors precisely.",
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
      "prompt_ko": "[블록 조립] except ValueError:를 지정해 숫자가 아닌 문자열 변환 에러를 잡아 BadInt를 출력해보세요.",
      "prompt_en": "[Block] Use except ValueError: to catch invalid integer conversion and print BadInt.",
      "hint_ko": "int(\"abc\")처럼 자료형은 맞지만 값의 내용이 부적절할 때는 ValueError가 발생합니다.",
      "hint_en": "Passing non-numeric text like \"abc\" to int() raises a ValueError.",
      "targetCode": "s = input()\ntry:\n    n = int(s)\n    print(n + 5)\nexcept ValueError:\n    print(\"BadInt\")",
      "testCases": [
        {
          "id": 1,
          "input": "10",
          "expectedOutput": "15"
        },
        {
          "id": 2,
          "input": "abc",
          "expectedOutput": "BadInt"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 문자열을 정수로 바꿀 수 없을 때 발생하는 구체적인 에러 이름을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the specific exception type raised when int() receives non-numeric text.",
      "hint_ko": "'값(Value)'과 '오류(Error)'를 대소문자 구분(파스칼 표기법)에 맞춰 붙여 적으세요.",
      "hint_en": "Write the PascalCase exception name combining Value and Error.",
      "templateCode": "raw = input()\ntry:\n    age = int(raw)\n    print(f\"Age:{age}\")\nexcept §§§§§§§§§§:\n    print(\"NaN\")",
      "targetCode": "raw = input()\ntry:\n    age = int(raw)\n    print(f\"Age:{age}\")\nexcept ValueError:\n    print(\"NaN\")",
      "testCases": [
        {
          "id": 1,
          "input": "20",
          "expectedOutput": "Age:20"
        },
        {
          "id": 2,
          "input": "twenty",
          "expectedOutput": "NaN"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] except ZeroDivisionError:로 0 나눗셈 에러를 잡아 ZeroDiv를 출력해보세요.",
      "prompt_en": "[Block] Catch division by zero with except ZeroDivisionError: and print ZeroDiv.",
      "hint_ko": "/, //, % 연산에서 나누는 수(분모)가 0이면 언제나 ZeroDivisionError가 발생합니다.",
      "hint_en": "Dividing by 0 with /, //, or % always raises ZeroDivisionError.",
      "targetCode": "n = int(input())\ntry:\n    print(60 // n)\nexcept ZeroDivisionError:\n    print(\"ZeroDiv\")",
      "testCases": [
        {
          "id": 1,
          "input": "15",
          "expectedOutput": "4"
        },
        {
          "id": 2,
          "input": "0",
          "expectedOutput": "ZeroDiv"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 분모가 0이어서 나머지를 구할 수 없을 때 발생하는 구체적인 에러 이름을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the exception type raised when computing modulo by zero.",
      "hint_ko": "'숫자 0(Zero)', '나눗셈(Division)', '오류(Error)' 세 단어를 첫 글자 대문자로 이어 붙인 이름을 적으세요.",
      "hint_en": "Write the PascalCase exception name for dividing by zero.",
      "templateCode": "d = int(input())\ntry:\n    print(25 % d)\nexcept §§§§§§§§§§§§§§§§§:\n    print(\"NoZero\")",
      "targetCode": "d = int(input())\ntry:\n    print(25 % d)\nexcept ZeroDivisionError:\n    print(\"NoZero\")",
      "testCases": [
        {
          "id": 1,
          "input": "7",
          "expectedOutput": "4"
        },
        {
          "id": 2,
          "input": "0",
          "expectedOutput": "NoZero"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 한 try 아래에 ValueError와 ZeroDivisionError를 나란히 두어 에러 종류별로 다르게 출력해보세요.",
      "prompt_en": "[Block] Chain except ValueError: and except ZeroDivisionError: beneath a single try block.",
      "hint_ko": "if - elif처럼 여러 개의 except 블록을 나란히 두면 실제로 발생한 에러 종류에 맞는 블록 하나만 실행됩니다.",
      "hint_en": "Like elif branches, chaining multiple except blocks runs only the first handler matching the raised error.",
      "targetCode": "s = input()\ntry:\n    n = int(s)\n    print(100 // n)\nexcept ValueError:\n    print(\"ValErr\")\nexcept ZeroDivisionError:\n    print(\"ZeroErr\")",
      "testCases": [
        {
          "id": 1,
          "input": "25",
          "expectedOutput": "4"
        },
        {
          "id": 2,
          "input": "hi",
          "expectedOutput": "ValErr"
        },
        {
          "id": 3,
          "input": "0",
          "expectedOutput": "ZeroErr"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 정수 변환 실패와 0 나눗셈 에러를 각각 구분해 처리하도록 두 번째 예외 이름을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the second exception type so dividing by 0 prints DivZero separately from BadVal.",
      "hint_ko": "첫 번째 except는 변환 오류를 잡고, 두 번째 except는 0으로 나눌 때 나는 오류를 잡도록 작성하세요.",
      "hint_en": "Specify the division-by-zero exception type on the second except line.",
      "templateCode": "s = input()\ntry:\n    k = int(s)\n    print(50 // k)\nexcept ValueError:\n    print(\"BadVal\")\nexcept §§§§§§§§§§§§§§§§§:\n    print(\"DivZero\")",
      "targetCode": "s = input()\ntry:\n    k = int(s)\n    print(50 // k)\nexcept ValueError:\n    print(\"BadVal\")\nexcept ZeroDivisionError:\n    print(\"DivZero\")",
      "testCases": [
        {
          "id": 1,
          "input": "10",
          "expectedOutput": "5"
        },
        {
          "id": 2,
          "input": "x",
          "expectedOutput": "BadVal"
        },
        {
          "id": 3,
          "input": "0",
          "expectedOutput": "DivZero"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] ValueError나 ZeroDivisionError 발생 시 ans에 기본값 0을 대입해 이후 덧셈을 이어가보세요.",
      "prompt_en": "[Block] Set ans = 0 when ValueError or ZeroDivisionError occurs, then print ans + 10.",
      "hint_ko": "예외 블록 안에서 변수에 안전한 기본값을 넣어 두면 try - except 바깥에서도 에러 없이 계산을 계속할 수 있습니다.",
      "hint_en": "Assigning a safe fallback value to ans in each except block allows subsequent calculations to proceed.",
      "targetCode": "s = input()\ntry:\n    ans = 80 // int(s)\nexcept ValueError:\n    ans = -1\nexcept ZeroDivisionError:\n    ans = 0\nprint(ans + 10)",
      "testCases": [
        {
          "id": 1,
          "input": "4",
          "expectedOutput": "30"
        },
        {
          "id": 2,
          "input": "abc",
          "expectedOutput": "9"
        },
        {
          "id": 3,
          "input": "0",
          "expectedOutput": "10"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 실수 변환에 실패했을 때 기본값 0.0을 대입하도록 예외 타입을 채워보세요.",
      "prompt_en": "[Fill Blank] Specify the exception type when float(raw) fails so rate falls back to 0.0.",
      "hint_ko": "float() 함수에 숫자가 아닌 문자열을 넣었을 때도 int()와 동일한 값 변환 예외가 발생합니다.",
      "hint_en": "Passing invalid text to float() raises the same invalid-value exception as int().",
      "templateCode": "raw = input()\ntry:\n    rate = float(raw)\nexcept §§§§§§§§§§:\n    rate = 0.0\nprint(rate * 10)",
      "targetCode": "raw = input()\ntry:\n    rate = float(raw)\nexcept ValueError:\n    rate = 0.0\nprint(rate * 10)",
      "testCases": [
        {
          "id": 1,
          "input": "1.5",
          "expectedOutput": "15.0"
        },
        {
          "id": 2,
          "input": "err",
          "expectedOutput": "0.0"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 공백으로 입력된 두 값을 정수로 바꿔 나누되, 변환 실패와 0 나눗셈을 각각 잡아내도록 세 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the integer conversion and the two specific exception types for parsing and dividing.",
      "hint_ko": "문자열을 정수로 바꾸는 함수와 부적절한 값 예외, 그리고 0 나눗셈 예외 이름을 순서대로 확인하세요.",
      "hint_en": "Check the int() conversion function, the invalid-value exception, and the division-by-zero exception.",
      "templateCode": "a, b = input().split()\ntry:\n    res = §§§(a) // int(b)\nexcept §§§§§§§§§§:\n    res = -1\nexcept §§§§§§§§§§§§§§§§§:\n    res = -2\nprint(res)",
      "targetCode": "a, b = input().split()\ntry:\n    res = int(a) // int(b)\nexcept ValueError:\n    res = -1\nexcept ZeroDivisionError:\n    res = -2\nprint(res)",
      "testCases": [
        {
          "id": 1,
          "input": "30 6",
          "expectedOutput": "5"
        },
        {
          "id": 2,
          "input": "ten 5",
          "expectedOutput": "-1"
        },
        {
          "id": 3,
          "input": "30 0",
          "expectedOutput": "-2"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 문자열을 정수로 바꾸다 발생하는 에러를 엉뚱한 예외 이름으로 잡으려다 프로그램이 멈추는 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the wrong exception type in except so int(\"ten\") is properly caught.",
      "hint_ko": "나눗셈이 전혀 없는 정수 변환 코드이므로 0 나눗셈 예외가 아니라 값 변환 예외를 지정해야 합니다.",
      "hint_en": "Converting \"ten\" with int() raises an invalid-value error, not a division-by-zero error.",
      "templateCode": "try:\n    n = int(\"ten\")\n    print(n)\nexcept ZeroDivisionError:\n    print(\"Invalid\")",
      "targetCode": "try:\n    n = int(\"ten\")\n    print(n)\nexcept ValueError:\n    print(\"Invalid\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Invalid"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 0으로 나눈 나머지를 구할 때 발생하는 에러를 잡지 못해 멈추는 코드의 예외 이름을 고쳐보세요.",
      "prompt_en": "[Fix Bug] Change the exception type so computing 45 % 0 is caught and prints ZeroMod.",
      "hint_ko": "정수끼리 0으로 나눈 나머지(%)를 구할 때는 값 변환 에러가 아니라 0 나눗셈 에러가 발생합니다.",
      "hint_en": "Modulo by zero raises the division-by-zero exception rather than the invalid-value exception.",
      "templateCode": "try:\n    r = 45 % 0\n    print(r)\nexcept ValueError:\n    print(\"ZeroMod\")",
      "targetCode": "try:\n    r = 45 % 0\n    print(r)\nexcept ZeroDivisionError:\n    print(\"ZeroMod\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "ZeroMod"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 숫자가 아닌 문자열 변환 에러(ValueError)를 잡는 except 헤더 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the except header line that catches ValueError.",
      "hint_ko": "예외 처리 키워드 뒤에 한 칸을 띄우고 값 변환 예외 이름과 콜론을 적으세요.",
      "hint_en": "Write except followed by ValueError and a colon.",
      "templateCode": "s = input()\ntry:\n    print(int(s) ** 2)\n§§§§§§§§§§§§§§§§§§\n    print(-1)",
      "targetCode": "s = input()\ntry:\n    print(int(s) ** 2)\nexcept ValueError:\n    print(-1)",
      "testCases": [
        {
          "id": 1,
          "input": "6",
          "expectedOutput": "36"
        },
        {
          "id": 2,
          "input": "no",
          "expectedOutput": "-1"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 0으로 나눌 때 발생하는 에러(ZeroDivisionError)를 잡는 except 헤더 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the except header line that catches ZeroDivisionError.",
      "hint_ko": "예외 처리 키워드 뒤에 0 나눗셈 예외 이름과 콜론을 정확히 적으세요.",
      "hint_en": "Write except followed by ZeroDivisionError and a colon.",
      "templateCode": "d = int(input())\ntry:\n    print(120 // d)\n§§§§§§§§§§§§§§§§§§§§§§§§§\n    print(0)",
      "targetCode": "d = int(input())\ntry:\n    print(120 // d)\nexcept ZeroDivisionError:\n    print(0)",
      "testCases": [
        {
          "id": 1,
          "input": "12",
          "expectedOutput": "10"
        },
        {
          "id": 2,
          "input": "0",
          "expectedOutput": "0"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 첫 줄의 변환에서 곧바로 에러가 발생할 때 어떤 except 블록이 실행되는지 골라보세요.",
      "prompt_en": "[Predict Output] Select the output when the first line inside try raises an exception before the division line.",
      "hint_ko": "첫 줄 int(\"zero\")에서 이미 에러가 발생하므로 아랫줄의 // 0 연산까지는 도달하지도 않는다는 점에 주의하세요.",
      "hint_en": "Because int(\"zero\") fails on the first line, execution jumps straight to the matching handler before reaching // 0.",
      "targetCode": "try:\n    n = int(\"zero\")\n    ans = 10 // 0\n    print(ans)\nexcept ZeroDivisionError:\n    print(\"A\")\nexcept ValueError:\n    print(\"B\")\nprint(\"C\")",
      "choices": [
        "B\nC",
        "A\nC",
        "A\nB\nC",
        "B"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "B\nC"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 문자열 리스트를 순회하며 다중 except 분기로 점수를 누적하는 코드의 출력 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the final total after handling both conversion and division-by-zero errors in a loop.",
      "hint_ko": "\"5\"는 정상 나눗셈(20 // 5 = 4), \"0\"은 ZeroDivisionError(+1), \"x\"는 ValueError(-2)로 처리됩니다.",
      "hint_en": "Trace each element: \"5\" gives 20 // 5, \"0\" triggers the zero-division branch, and \"x\" triggers the value-error branch.",
      "targetCode": "data = [\"5\", \"0\", \"x\", \"4\"]\ntotal = 0\nfor s in data:\n    try:\n        total += 20 // int(s)\n    except ValueError:\n        total -= 2\n    except ZeroDivisionError:\n        total += 1\nprint(total)",
      "choices": [
        "8",
        "9",
        "10",
        "7"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "8"
        }
      ]
    }
  ]
};
