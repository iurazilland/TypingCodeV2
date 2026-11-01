import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_83: PracticeRound = {
  "id": "py-basic-r83",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 83,
  "title_ko": "83레벨: try - except - else - finally 완전한 흐름과 raise 기초",
  "title_en": "Level 83: Full try-except-else-finally Flow & raise Basics",
  "description_ko": "예외가 없을 때 실행되는 else, 항상 실행되는 finally, 예외 객체(as e) 확인과 raise로 직접 예외를 발생시키는 흐름을 익힙니다.",
  "description_en": "Master the full try-except-else-finally flow, inspecting exception messages with as e, and raising validation errors with raise.",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "type",
    "if",
    "while",
    "break",
    "def",
    "try",
    "raise",
    "method"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "try에서 문자열 \"25\"를 정수로 변환하고, 오류가 없을 때만 실행되는 else에서 n * 2를 출력해 50을 확인하세요.",
      "prompt_en": "Convert \"25\" to int inside try, and print n * 2 inside else (which runs only when no error occurs) to output 50.",
      "hint_ko": "try 블록에서 예외가 발생하지 않으면 except를 건너뛰고 else 블록이 실행됩니다.",
      "hint_en": "When no exception occurs in try, Python skips except and runs the else block.",
      "targetCode": "try:\n    n = int(\"25\")\nexcept ValueError:\n    print(\"Error\")\nelse:\n    print(n * 2)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "50"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 정수 변환에 성공했을 때만 n + 10을 출력하고, 실패하면 Bad를 출력해보세요. (예: 15 -> 25)",
      "prompt_en": "Fill in the blank so n + 10 prints only when int conversion succeeds, and Bad prints on failure.",
      "hint_ko": "try에서 예외가 발생하지 않았을 때만 실행할 코드는 except 뒤에 else: 블록으로 작성합니다.",
      "hint_en": "Use an else: clause after except to run code only when try succeeds without error.",
      "templateCode": "try:\n    n = int(input())\nexcept ValueError:\n    print(\"Bad\")\n§§§§:\n    print(n + 10)",
      "targetCode": "try:\n    n = int(input())\nexcept ValueError:\n    print(\"Bad\")\nelse:\n    print(n + 10)",
      "testCases": [
        {
          "id": 1,
          "input": "15",
          "expectedOutput": "25"
        },
        {
          "id": 2,
          "input": "abc",
          "expectedOutput": "Bad"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "0으로 나눌 때 Zero를 출력하고, 예외 발생 여부와 관계없이 항상 실행되는 finally에서 End를 출력해보세요.",
      "prompt_en": "Print Zero on ZeroDivisionError, and always print End inside finally regardless of errors.",
      "hint_ko": "finally 블록은 예외가 발생하든 발생하지 않든 마지막에 반드시 실행됩니다.",
      "hint_en": "The finally block always executes at the end whether an exception occurred or not.",
      "targetCode": "try:\n    print(10 // 0)\nexcept ZeroDivisionError:\n    print(\"Zero\")\nfinally:\n    print(\"End\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Zero\nEnd"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸을 채워 변환 성공 시 OK:값, 실패 시 Err를 출력한 뒤 항상 마지막에 Done을 출력하세요. (예: 7 -> OK:7, Done)",
      "prompt_en": "Fill in both blanks to print OK:x on success or Err on error, followed always by Done.",
      "hint_ko": "예외가 없을 때 실행되는 절은 else이고, 마무리 정리를 위해 항상 실행되는 절은 finally입니다.",
      "hint_en": "Use else for the no-error branch and finally for the cleanup branch that always runs.",
      "templateCode": "try:\n    x = int(input())\nexcept ValueError:\n    print(\"Err\")\n§§§§:\n    print(f\"OK:{x}\")\n§§§§§§§:\n    print(\"Done\")",
      "targetCode": "try:\n    x = int(input())\nexcept ValueError:\n    print(\"Err\")\nelse:\n    print(f\"OK:{x}\")\nfinally:\n    print(\"Done\")",
      "testCases": [
        {
          "id": 1,
          "input": "7",
          "expectedOutput": "OK:7\nDone"
        },
        {
          "id": 2,
          "input": "hi",
          "expectedOutput": "Err\nDone"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "age가 0보다 작으면 raise로 ValueError(\"Invalid\")를 직접 발생시키고 except에서 Invalid를 출력해보세요.",
      "prompt_en": "If age < 0, raise ValueError(\"Invalid\") intentionally and catch it in except to print Invalid.",
      "hint_ko": "문법 오류가 아니더라도 값 검증에 실패했을 때 raise ValueError(\"메시지\")로 예외를 직접 일으킬 수 있습니다.",
      "hint_en": "Use raise ValueError(\"Invalid\") to trigger a validation error when age is negative.",
      "targetCode": "age = -3\ntry:\n    if age < 0:\n        raise ValueError(\"Invalid\")\n    print(age)\nexcept ValueError:\n    print(\"Invalid\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Invalid"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 음수 나이가 입력되면 ValueError를 발생시키고 예외 객체 e에 담긴 메시지를 출력하세요. (예: -5 -> Invalid)",
      "prompt_en": "Fill in the blanks to raise ValueError on negative age and print the exception object e.",
      "hint_ko": "예외를 발생시킬 때는 raise를 쓰고, 발생한 예외 메시지를 변수로 받으려면 except ValueError as e:를 사용합니다.",
      "hint_en": "Use raise to throw ValueError and except ValueError as e: to capture the error message in e.",
      "templateCode": "age = int(input())\ntry:\n    if age < 0:\n        §§§§§ ValueError(\"Invalid\")\n    print(f\"Age:{age}\")\nexcept ValueError §§ e:\n    print(e)",
      "targetCode": "age = int(input())\ntry:\n    if age < 0:\n        raise ValueError(\"Invalid\")\n    print(f\"Age:{age}\")\nexcept ValueError as e:\n    print(e)",
      "testCases": [
        {
          "id": 1,
          "input": "-5",
          "expectedOutput": "Invalid"
        },
        {
          "id": 2,
          "input": "20",
          "expectedOutput": "Age:20"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "함수 check_score에서 isinstance로 정수 여부와 0 이상인지를 검사해 예외를 일으키고, 정상일 때 95를 출력해보세요.",
      "prompt_en": "Validate int type and s >= 0 with isinstance and raise inside check_score, then print 95 in else.",
      "hint_ko": "not isinstance(s, int) 또는 s < 0이면 ValueError를 발생시키고, 정상이면 s + 5를 반환합니다.",
      "hint_en": "Raise ValueError if s is not an int or s < 0; otherwise return s + 5 and print res in else.",
      "targetCode": "def check_score(s):\n    if not isinstance(s, int) or s < 0:\n        raise ValueError(\"Bad\")\n    return s + 5\n\ntry:\n    res = check_score(90)\nexcept ValueError:\n    print(\"Fail\")\nelse:\n    print(res)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "95"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 홀수면 Odd 예외를 발생시키는 함수 half_even을 완성하고 마지막에 항상 Checked를 출력하세요.",
      "prompt_en": "Fill in the blanks so half_even raises ValueError(\"Odd\") on odd numbers and finally prints Checked.",
      "hint_ko": "홀수일 때 raise ValueError(\"Odd\")를 실행하고, 마지막 마무리 출력은 finally: 블록에 작성합니다.",
      "hint_en": "Use raise ValueError(\"Odd\") inside half_even and finally: at the end of try-except.",
      "templateCode": "def half_even(n):\n    if n % 2 != 0:\n        §§§§§ §§§§§§§§§§(\"Odd\")\n    return n // 2\n\ntry:\n    print(half_even(int(input())))\nexcept ValueError as e:\n    print(e)\n§§§§§§§:\n    print(\"Checked\")",
      "targetCode": "def half_even(n):\n    if n % 2 != 0:\n        raise ValueError(\"Odd\")\n    return n // 2\n\ntry:\n    print(half_even(int(input())))\nexcept ValueError as e:\n    print(e)\nfinally:\n    print(\"Checked\")",
      "testCases": [
        {
          "id": 1,
          "input": "8",
          "expectedOutput": "4\nChecked"
        },
        {
          "id": 2,
          "input": "5",
          "expectedOutput": "Odd\nChecked"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "while True 반복문에서 양의 정수가 입력될 때까지 Retry를 출력하고, 성공 시 total에 더해 반복을 종료해보세요.",
      "prompt_en": "Loop with while True printing Retry on invalid or non-positive inputs, then add n to total and break in else.",
      "hint_ko": "n <= 0일 때 raise로 예외를 발생시키면 숫자 변환 실패와 범위 오류를 같은 except에서 처리할 수 있습니다.",
      "hint_en": "Raising ValueError when n <= 0 lets one except ValueError block handle both non-digits and <= 0.",
      "targetCode": "total = 10\nwhile True:\n    try:\n        n = int(input())\n        if n <= 0:\n            raise ValueError(\"NonPos\")\n    except ValueError:\n        print(\"Retry\")\n    else:\n        total += n\n        break\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "abc\n-2\n15",
          "expectedOutput": "Retry\nRetry\n25"
        },
        {
          "id": 2,
          "input": "5",
          "expectedOutput": "15"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "세 빈칸을 채워 1 이상의 정수가 들어올 때까지 시도 횟수(tries)를 항상 1씩 늘리며 검증해보세요.",
      "prompt_en": "Fill in the three blanks to validate n >= 1 in a while True loop while incrementing tries in finally.",
      "hint_ko": "else에서 break가 실행되더라도 루프를 빠져나가기 직전에 finally 블록의 tries += 1이 반드시 실행됩니다.",
      "hint_en": "Even when break runs inside else, finally executes tries += 1 right before exiting the loop.",
      "templateCode": "tries = 0\nwhile True:\n    try:\n        n = int(input())\n        if n < 1:\n            §§§§§ ValueError(\"Min1\")\n    except ValueError as e:\n        print(e)\n    §§§§:\n        print(f\"Val:{n}\")\n        break\n    §§§§§§§:\n        tries += 1\nprint(f\"Tries:{tries}\")",
      "targetCode": "tries = 0\nwhile True:\n    try:\n        n = int(input())\n        if n < 1:\n            raise ValueError(\"Min1\")\n    except ValueError as e:\n        print(e)\n    else:\n        print(f\"Val:{n}\")\n        break\n    finally:\n        tries += 1\nprint(f\"Tries:{tries}\")",
      "testCases": [
        {
          "id": 1,
          "input": "0\n9",
          "expectedOutput": "Min1\nVal:9\nTries:2"
        },
        {
          "id": 2,
          "input": "4",
          "expectedOutput": "Val:4\nTries:1"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "0~100 범위를 벗어날 때 예외가 실제로 발생하지 않는 버그를 고쳐 RangeErr가 출력되게 하세요. (예: 150 -> RangeErr)",
      "prompt_en": "Fix the bug where out-of-range input creates an exception object without raising it (e.g., 150 -> RangeErr).",
      "hint_ko": "ValueError(\"RangeErr\")만 적으면 예외 객체만 만들어지고 무시됩니다. 앞에 raise 키워드를 붙여야 예외가 발생합니다.",
      "hint_en": "Calling ValueError(\"RangeErr\") alone does not throw an exception; prepend raise before ValueError.",
      "templateCode": "pct = int(input())\ntry:\n    if pct < 0 or pct > 100:\n        ValueError(\"RangeErr\")\nexcept ValueError as e:\n    print(e)\nelse:\n    print(f\"{pct}%\")",
      "targetCode": "pct = int(input())\ntry:\n    if pct < 0 or pct > 100:\n        raise ValueError(\"RangeErr\")\nexcept ValueError as e:\n    print(e)\nelse:\n    print(f\"{pct}%\")",
      "testCases": [
        {
          "id": 1,
          "input": "150",
          "expectedOutput": "RangeErr"
        },
        {
          "id": 2,
          "input": "80",
          "expectedOutput": "80%"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "finally 아래에 한 줄을 추가하여 예외 여부와 관계없이 항상 Cleanup을 출력해보세요. (예: 4 -> 12, Cleanup)",
      "prompt_en": "Add one line inside finally to always print Cleanup regardless of errors (e.g., 4 -> 12, Cleanup).",
      "hint_ko": "finally: 다음 줄에 들여쓰기 4칸을 맞추어 print(\"Cleanup\")을 작성하세요.",
      "hint_en": "Indented by 4 spaces under finally:, write print(\"Cleanup\").",
      "templateCode": "try:\n    n = int(input())\nexcept ValueError:\n    print(\"Fail\")\nelse:\n    print(n * 3)\nfinally:\n    §§§§§§§§§§§§§§§§",
      "targetCode": "try:\n    n = int(input())\nexcept ValueError:\n    print(\"Fail\")\nelse:\n    print(n * 3)\nfinally:\n    print(\"Cleanup\")",
      "testCases": [
        {
          "id": 1,
          "input": "4",
          "expectedOutput": "12\nCleanup"
        },
        {
          "id": 2,
          "input": "x",
          "expectedOutput": "Fail\nCleanup"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "리스트 [4, -1]을 순서대로 순회할 때 다음 파이썬 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "Select the exact output when the loop processes [4, -1] through try-except-else-finally.",
      "hint_ko": "x=4일 때는 예외가 없으므로 else(OK:4)와 finally(F)가 실행되고, x=-1일 때는 except(Neg)와 finally(F)가 실행됩니다.",
      "hint_en": "For 4: else appends OK:4 then finally appends F. For -1: except appends Neg then finally appends F.",
      "targetCode": "log = []\nfor x in [4, -1]:\n    try:\n        if x < 0:\n            raise ValueError(\"Neg\")\n    except ValueError as e:\n        log.append(str(e))\n    else:\n        log.append(f\"OK:{x}\")\n    finally:\n        log.append(\"F\")\nprint(\",\".join(log))",
      "choices": [
        "OK:4,F,Neg,F",
        "OK:4,Neg,F",
        "OK:4,F,Neg,OK:-1,F",
        "OK:4,F,Error,F"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "OK:4,F,Neg,F"
        }
      ]
    }
  ]
};
