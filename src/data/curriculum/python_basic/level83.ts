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
  "totalQuestions": 15,
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] try-except 뒤에 else 블록을 붙여 예외가 발생하지 않았을 때만 n * 2를 출력해보세요.",
      "prompt_en": "[Block] Use an else block after try-except so n * 2 prints only when no exception occurs.",
      "hint_ko": "예외가 발생할 가능성이 있는 코드만 try에 두고, 변환 성공 후 실행할 계산은 else에 분리해 작성합니다.",
      "hint_en": "Keep only the risky conversion inside try, and place the follow-up calculation in the no-error else block.",
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
      "prompt_ko": "[빈칸 채우기] 정수 변환에 성공했을 때만 n + 10을 출력하고, 실패하면 Bad를 출력하세요.",
      "prompt_en": "[Fill Blank] Fill in the blank so n + 10 prints only when int conversion succeeds.",
      "hint_ko": "예외가 발생하지 않은 정상 경우에 실행되도록 예외 절 뒤에 4글자 분기 키워드를 적으세요.",
      "hint_en": "Write the 4-letter 'otherwise' branch keyword that runs only when try succeeds without error.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] ZeroDivisionError 예외를 잡은 뒤에도 finally 블록으로 마지막에 항상 End를 출력해보세요.",
      "prompt_en": "[Block] Catch ZeroDivisionError and use finally to always print End at the end.",
      "hint_ko": "0으로 나누어 except 블록이 실행된 뒤에도 finally 블록의 코드가 빠짐없이 실행됩니다.",
      "hint_en": "Even after ZeroDivisionError triggers the except block, the finally block still runs afterward.",
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
      "prompt_ko": "[빈칸 채우기] 변환 실패 시 Err를 출력하고 항상 마지막에 Done을 출력하도록 두 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in except and finally to catch ValueError and always print Done.",
      "hint_ko": "예외를 잡는 6글자 키워드와 항상 마지막에 실행되는 7글자 마무리 키워드를 차례로 쓰세요.",
      "hint_en": "Use the 6-letter exception-catching keyword and the 7-letter unconditional cleanup keyword.",
      "templateCode": "try:\n    x = int(input())\n    print(f\"OK:{x}\")\n§§§§§§ ValueError:\n    print(\"Err\")\n§§§§§§§:\n    print(\"Done\")",
      "targetCode": "try:\n    x = int(input())\n    print(f\"OK:{x}\")\nexcept ValueError:\n    print(\"Err\")\nfinally:\n    print(\"Done\")",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] age < 0일 때 raise ValueError(\"Invalid\")로 직접 예외를 발생시켜 Invalid를 출력해보세요.",
      "prompt_en": "[Block] Use raise ValueError(\"Invalid\") when age < 0 and catch it in except ValueError.",
      "hint_ko": "raise가 실행되는 순간 try 블록의 남은 줄(print(age))은 건너뛰고 except 절로 넘어갑니다.",
      "hint_en": "As soon as raise executes, Python skips the rest of the try block and enters the matching except handler.",
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
      "prompt_ko": "[빈칸 채우기] 음수 나이면 ValueError를 발생시키고 예외 객체 e의 메시지를 출력하세요.",
      "prompt_en": "[Fill Blank] Fill in raise and as to throw ValueError on negative age and print e.",
      "hint_ko": "예외를 일으키는 5글자 키워드로 오류를 던지고, 발생한 예외 객체를 변수 e로 받도록 2글자 별칭 키워드를 쓰세요.",
      "hint_en": "Throw the error with the 5-letter raise keyword, and bind the exception object to e using the 2-letter as keyword.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 함수 내부에서 잘못된 점수에 raise로 예외를 발생시키고 호출부 try-except-else로 처리해보세요.",
      "prompt_en": "[Block] Raise ValueError inside check_score(s) on invalid input and handle it with try-except-else.",
      "hint_ko": "check_score(90)은 정상이므로 예외 없이 값을 반환하고, 이어서 else 블록이 실행됩니다.",
      "hint_en": "Because check_score(90) succeeds without raising an error, its return value is printed in the else block.",
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
      "prompt_ko": "[빈칸 채우기] 홀수면 Odd 예외를 일으키는 함수를 완성하고 정상일 때만 else에서 결과를 출력하세요.",
      "prompt_en": "[Fill Blank] Fill in raise and else so half_even raises ValueError(\"Odd\") on odd numbers.",
      "hint_ko": "예외를 일으키는 5글자 키워드와 오류가 없을 때 실행되는 4글자 분기 키워드를 채우세요.",
      "hint_en": "Use the 5-letter raise keyword and the 4-letter no-error else branch keyword.",
      "templateCode": "def half_even(n):\n    if n % 2 != 0:\n        §§§§§ ValueError(\"Odd\")\n    return n // 2\n\ntry:\n    res = half_even(int(input()))\nexcept ValueError as e:\n    print(e)\n§§§§:\n    print(res)",
      "targetCode": "def half_even(n):\n    if n % 2 != 0:\n        raise ValueError(\"Odd\")\n    return n // 2\n\ntry:\n    res = half_even(int(input()))\nexcept ValueError as e:\n    print(e)\nelse:\n    print(res)",
      "testCases": [
        {
          "id": 1,
          "input": "8",
          "expectedOutput": "4"
        },
        {
          "id": 2,
          "input": "5",
          "expectedOutput": "Odd"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] while True와 try-except-else를 결합해 양수가 입력될 때까지 검증 후 누적하세요.",
      "prompt_en": "[Block] Combine while True with try-except-else and raise until a positive integer is entered.",
      "hint_ko": "변환과 양수 검증을 모두 통과했을 때만 else 블록으로 들어가 값을 누적하고 break로 루프를 탈출합니다.",
      "hint_en": "Only when both int() conversion and the > 0 check succeed does execution enter else to add n and break.",
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
      "prompt_ko": "[빈칸 채우기] 1 이상의 정수가 들어올 때까지 시도 횟수(tries)를 항상 1씩 늘리며 검증하세요.",
      "prompt_en": "[Fill Blank] Fill in raise and finally to validate n >= 1 while counting attempts.",
      "hint_ko": "예외를 일으키는 5글자 키워드와 루프 탈출 직전에도 항상 실행되는 7글자 마무리 키워드를 채우세요.",
      "hint_en": "Use the 5-letter raise keyword and the 7-letter finally keyword.",
      "templateCode": "tries = 0\nwhile True:\n    try:\n        n = int(input())\n        if n < 1:\n            §§§§§ ValueError(\"Min1\")\n    except ValueError as e:\n        print(e)\n    else:\n        print(f\"Val:{n}\")\n        break\n    §§§§§§§:\n        tries += 1\nprint(f\"Tries:{tries}\")",
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
      "prompt_ko": "[틀린 곳 수정] 0~100 범위를 벗어날 때 except ValueError가 잡지 못하는 예외 클래스를 일으키는 버그를 수정하세요.",
      "prompt_en": "[Fix Bug] Fix the raised exception class so except ValueError catches out-of-range inputs.",
      "hint_ko": "아래 except 절에서 ValueError를 잡고 있으므로 IndexError 대신 ValueError를 발생시켜야 합니다.",
      "hint_en": "Raise ValueError(\"RangeErr\") instead of IndexError(\"RangeErr\") so the except block catches it.",
      "templateCode": "pct = int(input())\ntry:\n    if pct < 0 or pct > 100:\n        raise IndexError(\"RangeErr\")\nexcept ValueError as e:\n    print(e)\nelse:\n    print(f\"{pct}%\")",
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
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 음수 나이일 때만 예외가 발생해야 하는데 비교 연산자가 반대여서 양수에서 오류가 나는 버그를 수정하세요.",
      "prompt_en": "[Fix Bug] Fix the comparison operator so ValueError(\"Neg\") is raised when age < 0.",
      "hint_ko": "0보다 작을 때(음수일 때) 예외를 일으켜야 하므로 > 연산자를 < 연산자로 고치세요.",
      "hint_en": "Change if age > 0: to if age < 0: so only negative ages raise ValueError.",
      "templateCode": "age = int(input())\ntry:\n    if age > 0:\n        raise ValueError(\"Neg\")\n    print(f\"OK:{age}\")\nexcept ValueError as e:\n    print(e)",
      "targetCode": "age = int(input())\ntry:\n    if age < 0:\n        raise ValueError(\"Neg\")\n    print(f\"OK:{age}\")\nexcept ValueError as e:\n    print(e)",
      "testCases": [
        {
          "id": 1,
          "input": "-5",
          "expectedOutput": "Neg"
        },
        {
          "id": 2,
          "input": "20",
          "expectedOutput": "OK:20"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] n < 0일 때 raise ValueError(\"Neg\")로 예외를 발생시키는 한 줄을 작성하세요.",
      "prompt_en": "[Complete Line] Write raise ValueError(\"Neg\") inside the if n < 0 block.",
      "hint_ko": "raise ValueError(\"Neg\")를 작성해 음수일 때 예외를 발생시키세요.",
      "hint_en": "Write raise ValueError(\"Neg\") at the indented line.",
      "templateCode": "n = int(input())\ntry:\n    if n < 0:\n        §§§§§§§§§§§§§§§§§§§§§§§\n    print(n * 2)\nexcept ValueError as e:\n    print(e)",
      "targetCode": "n = int(input())\ntry:\n    if n < 0:\n        raise ValueError(\"Neg\")\n    print(n * 2)\nexcept ValueError as e:\n    print(e)",
      "testCases": [
        {
          "id": 1,
          "input": "-3",
          "expectedOutput": "Neg"
        },
        {
          "id": 2,
          "input": "6",
          "expectedOutput": "12"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] finally 블록 안에서 status 변수에 \"Done\"을 저장하는 한 줄을 완성하세요.",
      "prompt_en": "[Complete Line] Assign \"Done\" to status inside the finally block.",
      "hint_ko": "status = \"Done\"을 작성해 예외 여부와 상관없이 상태 문자열을 저장하세요.",
      "hint_en": "Write status = \"Done\" inside the finally block.",
      "templateCode": "try:\n    n = int(input())\nexcept ValueError:\n    n = 0\nfinally:\n    §§§§§§§§§§§§§§§\nprint(n, status)",
      "targetCode": "try:\n    n = int(input())\nexcept ValueError:\n    n = 0\nfinally:\n    status = \"Done\"\nprint(n, status)",
      "testCases": [
        {
          "id": 1,
          "input": "7",
          "expectedOutput": "7 Done"
        },
        {
          "id": 2,
          "input": "x",
          "expectedOutput": "0 Done"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 리스트 [4, -1]을 순서대로 순회할 때 다음 파이썬 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output when the loop processes [4, -1] through try-except-else-finally.",
      "hint_ko": "양수일 때는 정상 분기 뒤 마무리 절이 실행되고, 음수일 때는 예외 분기 뒤 마무리 절이 실행된다는 점(마무리 절은 매 반복마다 실행됨!)을 추적해보세요.",
      "hint_en": "Trace each loop turn: a valid number runs the no-error branch plus cleanup, while a negative number runs the handler plus cleanup on every turn.",
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
