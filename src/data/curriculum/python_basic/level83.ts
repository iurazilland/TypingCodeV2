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
      "prompt_ko": "try-except 구문 뒤에 붙는 else 블록은 try 블록에서 예외가 전혀 발생하지 않았을 때만 실행되는 정상 후속 분기입니다.",
      "prompt_en": "In a try-except statement, the optional else block runs only when the try block completes without raising any exception.",
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
      "prompt_ko": "빈칸을 채워 정수 변환에 성공했을 때만 n + 10을 출력하고, 실패하면 Bad를 출력해보세요. (터미널 입력: 15)",
      "prompt_en": "Fill in the blank so n + 10 prints only when int conversion succeeds, and Bad prints on failure. (Terminal input: 15)",
      "hint_ko": "예외가 발생하지 않은 '그 밖의(정상인) 경우'에만 실행되도록 예외 절 뒤에 4글자 분기 키워드를 적으세요.",
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
      "prompt_ko": "finally 블록은 try 블록에서 예외가 발생하든 발생하지 않든 상관없이 맨 마지막에 항상 실행되는 마무리 블록입니다.",
      "prompt_en": "The finally block always executes at the very end of a try statement, regardless of whether an exception occurred or was caught.",
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
      "prompt_ko": "두 빈칸을 채워 변환 성공 시 OK:값, 실패 시 Err를 출력한 뒤 항상 마지막에 Done을 출력하세요. (터미널 입력: 7)",
      "prompt_en": "Fill in both blanks to print OK:x on success or Err on error, followed always by Done. (Terminal input: 7)",
      "hint_ko": "오류가 없을 때 실행되는 4글자 '그 외' 분기 키워드와, '마지막(final)'에 부사 어미(-ly)를 붙여 항상 실행되는 7글자 키워드를 차례로 쓰세요.",
      "hint_en": "Use the 4-letter 'otherwise' keyword for the no-error branch, and add '-ly' to 'final' for the 7-letter unconditional cleanup block.",
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
      "prompt_ko": "raise 예외클래스(\"메시지\") 구문은 값의 범위나 조건이 잘못되었을 때 의도적으로 예외를 발생시켜 즉시 except 블록으로 흐름을 이동시킵니다.",
      "prompt_en": "The raise ExceptionType(\"message\") statement intentionally throws an exception when a validation condition fails, jumping straight to except.",
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
      "prompt_ko": "빈칸을 채워 음수 나이가 입력되면 ValueError를 발생시키고 예외 객체 e에 담긴 메시지를 출력하세요. (터미널 입력: -5)",
      "prompt_en": "Fill in the blanks to raise ValueError on negative age and print the exception object e. (Terminal input: -5)",
      "hint_ko": "예외를 위로 '들어 올리다/일으키다'라는 5글자 키워드로 오류를 던지고, 발생한 예외 객체를 변수 'e로서' 받도록 2글자 별칭 키워드를 쓰세요.",
      "hint_en": "Throw the error with the 5-letter keyword meaning 'to lift up', and bind the exception object to e using the 2-letter alias keyword.",
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
      "prompt_ko": "함수 내부에서 isinstance() 타입 검사와 범위 검사를 통과하지 못할 때 raise로 예외를 일으키면, 호출부의 try-except-else가 정상값과 오류를 깔끔히 분리해 처리합니다.",
      "prompt_en": "Raising ValueError inside a function when isinstance() or range checks fail lets the caller's try-except-else cleanly separate valid results from errors.",
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
      "prompt_ko": "빈칸을 채워 홀수면 Odd 예외를 발생시키는 함수 half_even을 완성하고 마지막에 항상 Checked를 출력하세요. (터미널 입력: 8)",
      "prompt_en": "Fill in the blanks so half_even raises ValueError(\"Odd\") on odd numbers and finally prints Checked. (Terminal input: 8)",
      "hint_ko": "예외를 '일으키는' 5글자 키워드 뒤에 '값(Value)'과 '오류(Error)'를 파스칼 표기법으로 합친 예외를 적고, 맨 끝에는 '마지막에'(final + -ly) 7글자 키워드를 쓰세요.",
      "hint_en": "Throw using the 5-letter 'lift up' keyword with PascalCase 'Value'+'Error', and close with the 7-letter keyword ('final' + '-ly').",
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
      "prompt_ko": "while True 루프 안에서 try-except-else와 raise를 결합하면, 숫자가 아닌 입력과 0 이하의 입력을 모두 잡아내어 올바른 양수가 들어올 때까지 반복 입력받을 수 있습니다. (터미널 입력: abc, -2, 15 한 줄씩)",
      "prompt_en": "Combining while True with try-except-else and raise catches both non-numeric text and non-positive numbers until a valid input triggers break in else. (Terminal input: abc, -2, 15 line by line)",
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
      "prompt_ko": "세 빈칸을 채워 1 이상의 정수가 들어올 때까지 시도 횟수(tries)를 항상 1씩 늘리며 검증해보세요. (터미널 입력: 첫째 줄 0, 둘째 줄 9)",
      "prompt_en": "Fill in the three blanks to validate n >= 1 in a while True loop while incrementing tries in finally. (Terminal input: line 1 0, line 2 9)",
      "hint_ko": "예외를 '일으키는' 5글자 키워드, 정상일 때 실행되는 4글자 '그 외' 키워드, 루프 탈출 직전에도 '마지막으로'(final + -ly) 실행되는 7글자 키워드를 채우세요.",
      "hint_en": "Use the 5-letter 'lift up' error keyword, the 4-letter 'otherwise' branch keyword, and the 7-letter 'final' + '-ly' block that runs even before break.",
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
      "prompt_ko": "0~100 범위를 벗어날 때 예외가 실제로 발생하지 않는 버그를 고쳐 RangeErr가 출력되게 하세요. (터미널 입력: 150)",
      "prompt_en": "Fix the bug where out-of-range input creates an exception object without raising it (Terminal input: 150).",
      "hint_ko": "예외 생성자만 호출하면 예외 객체가 만들어지기만 하고 무시됩니다. 실제로 예외를 발동시키도록 앞에 예외 발생 키워드를 붙이세요.",
      "hint_en": "Calling the exception class alone merely constructs an unused object; prepend the 5-letter 'lift up' keyword to actually throw it.",
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
      "prompt_ko": "finally 아래에 한 줄을 추가하여 예외 여부와 관계없이 항상 Cleanup을 출력해보세요. (터미널 입력: 4)",
      "prompt_en": "Add one line inside finally to always print Cleanup regardless of errors (Terminal input: 4).",
      "hint_ko": "마무리 절 내부의 들여쓰기 위치에 지정된 문자열을 출력하는 문을 작성해보세요.",
      "hint_en": "At the indented line inside the cleanup block, call the output function with the required string literal.",
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