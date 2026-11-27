import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_110: PracticeRound = {
  "id": "py-basic-r110",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 110,
  "title_ko": "try - except - else - finally 완전한 흐름과 에러 객체(as e)",
  "title_en": "Full try-except-else-finally Flow & Exception Object (as e)",
  "description_ko": "에러가 없을 때만 실행되는 else, 에러 여부와 무관하게 항상 실행되는 finally, 그리고 발생한 에러 객체를 받는 as e를 익힙니다.",
  "description_en": "Master the complete try-except-else-finally exception handling flow and capture error objects with as e.",
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
    "sorted",
    "math",
    "map",
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
      "prompt_ko": "[블록 조립] 예외 처리 구문에서 에러가 발생하지 않았을 때만 실행되는 분기 블록을 추가해 n * 2를 출력해보세요.",
      "prompt_en": "[Block] Add the no-error branch after try-except so n * 2 prints only when no exception occurs.",
      "hint_ko": "try 블록에서 에러가 나지 않으면 except를 건너뛰고 else 블록이 실행됩니다.",
      "hint_en": "When no exception is raised in try, Python skips except and runs the else block.",
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
      "prompt_ko": "[빈칸 채우기] 정수 변환에 성공해 에러가 나지 않았을 때만 n + 10을 출력하도록 분기 키워드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the branch keyword that executes only when the try block succeeds without error.",
      "hint_ko": "예외가 발생하지 않은 정상 경우에 실행되는 키워드를 적으세요.",
      "hint_en": "Type the keyword that runs when no exception occurs.",
      "targetCode": "try:\n    n = int(input())\nexcept ValueError:\n    print(\"Bad\")\nelse:\n    print(n + 10)",
      "templateCode": "try:\n    n = int(input())\nexcept ValueError:\n    print(\"Bad\")\n§§§§§:\n    print(n + 10)",
      "testCases": [
        {
          "id": 1,
          "input": "15",
          "expectedOutput": "25"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 0으로 나누는 예외를 잡아 처리한 뒤, 마지막에 무조건 실행되는 마무리 블록을 추가해보세요.",
      "prompt_en": "[Block] Catch the division-by-zero exception and add an unconditional cleanup block at the end.",
      "hint_ko": "finally 블록은 에러가 발생하든 발생하지 않든 상관없이 맨 마지막에 무조건 실행됩니다.",
      "hint_en": "The finally block always runs at the end regardless of whether an exception occurred.",
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
      "prompt_ko": "[빈칸 채우기] 에러 발생 여부와 관계없이 마지막에 무조건 실행되도록 마무리 블록 키워드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the cleanup block keyword that always runs at the end regardless of errors.",
      "hint_ko": "'마침내, 최종적으로'라는 뜻의 예외 마무리 키워드를 입력하세요.",
      "hint_en": "Enter the keyword for the unconditional cleanup block.",
      "targetCode": "try:\n    x = int(input())\n    print(f\"OK:{x}\")\nexcept ValueError:\n    print(\"Err\")\nfinally:\n    print(\"Done\")",
      "templateCode": "try:\n    x = int(input())\n    print(f\"OK:{x}\")\nexcept ValueError:\n    print(\"Err\")\n§§§§§§§§:\n    print(\"Done\")",
      "testCases": [
        {
          "id": 1,
          "input": "7",
          "expectedOutput": "OK:7\nDone"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 0으로 나눌 때 발생하는 예외 객체를 변수 e에 담아 에러 메시지를 포맷팅해 출력해보세요.",
      "prompt_en": "[Block] Capture the division-by-zero exception object in variable e and print its formatted message.",
      "hint_ko": "except 에러타입 as 변수: 형태로 쓰면 발생한 에러 객체가 변수에 담겨 내용을 출력할 수 있습니다.",
      "hint_en": "Writing except ErrorType as e: binds the raised exception object to variable e.",
      "targetCode": "try:\n    res = 10 // 0\nexcept ZeroDivisionError as e:\n    print(f\"Caught:{e}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Caught:integer division or modulo by zero"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 발생한 KeyError 에러 객체를 변수 e로 받아 출력하도록 별칭 지정 키워드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the keyword that binds the caught KeyError instance to variable e.",
      "hint_ko": "에러 객체를 변수에 연결하는 영단어 키워드를 입력하세요.",
      "hint_en": "Type the keyword used to alias the exception to variable e.",
      "targetCode": "d = {\"a\": 1}\ntry:\n    print(d[\"b\"])\nexcept KeyError as e:\n    print(f\"Missing:{e}\")",
      "templateCode": "d = {\"a\": 1}\ntry:\n    print(d[\"b\"])\nexcept KeyError §§§ e:\n    print(f\"Missing:{e}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Missing:'b'"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 예외 감시, 예외 처리, 정상 실행, 무조건 마무리까지 4단계 예외 처리 흐름을 모두 갖춘 safe_div 함수를 조립해보세요.",
      "prompt_en": "[Block] Assemble the complete 4-stage exception handling flow inside safe_div(a, b).",
      "hint_ko": "에러가 나면 except -> finally 순서로, 에러가 안 나면 else -> finally 순서로 실행됩니다.",
      "hint_en": "On error, except then finally runs; on success, else then finally runs.",
      "targetCode": "def safe_div(a, b):\n    try:\n        q = a // b\n    except ZeroDivisionError:\n        print(\"ZeroErr\")\n    else:\n        print(f\"Q:{q}\")\n    finally:\n        print(\"End\")\n\nsafe_div(10, 2)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Q:5\nEnd"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 리스트 인덱스 조회가 에러 없이 성공했을 때만 값을 출력하도록 분기 키워드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the no-error branch keyword so the value prints only when index lookup succeeds.",
      "hint_ko": "except 절과 finally 절 사이에 위치하여 에러가 없을 때만 실행되는 키워드를 적으세요.",
      "hint_en": "Write the keyword placed between except and finally.",
      "targetCode": "arr = [10, 20]\ntry:\n    v = arr[1]\nexcept IndexError:\n    print(\"Out\")\nelse:\n    print(f\"Val:{v}\")\nfinally:\n    print(\"Check\")",
      "templateCode": "arr = [10, 20]\ntry:\n    v = arr[1]\nexcept IndexError:\n    print(\"Out\")\n§§§§§:\n    print(f\"Val:{v}\")\nfinally:\n    print(\"Check\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Val:20\nCheck"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 딕셔너리 조회 성공 시 점수를 출력하고 마지막에 항상 종료 메시지를 출력하도록 4단계 예외 처리 구문의 빈칸 2곳을 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the two blanks in the 4-stage exception block to print the score on a successful lookup and always print the closing message.",
      "hint_ko": "예외 미발생 시 정상 실행되는 분기(else)와 무조건 실행되는 마무리 분기(finally)를 차례로 채우세요.",
      "hint_en": "Fill in the alias keyword, the no-error keyword, and the cleanup keyword.",
      "targetCode": "scores = {\"kim\": 90}\ntry:\n    sc = scores[input().strip()]\nexcept KeyError as e:\n    print(f\"NoKey:{e}\")\nelse:\n    print(f\"Score:{sc}\")\nfinally:\n    print(\"Closed\")",
      "templateCode": "scores = {\"kim\": 90}\ntry:\n    sc = scores[input().strip()]\nexcept KeyError as e:\n    print(f\"NoKey:{e}\")\n§§§§§:\n    print(f\"Score:{sc}\")\n§§§§§§§§:\n    print(\"Closed\")",
      "testCases": [
        {
          "id": 1,
          "input": "kim",
          "expectedOutput": "Score:90\nClosed"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 예외 발생 여부와 상관없이 마지막 블록이 항상 실행되도록 마무리 블록의 잘못된 키워드를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Find and fix the invalid cleanup block keyword so the final block always runs.",
      "hint_ko": "예외 처리 구문의 마지막 마무리 블록 키워드는 finally:입니다.",
      "hint_en": "Move the except block above the finally block so finally comes last.",
      "templateCode": "try:\n    n = int(input())\nexcept ValueError:\n    print(\"Err\")\ndefault:\n    print(\"End\")",
      "targetCode": "try:\n    n = int(input())\nexcept ValueError:\n    print(\"Err\")\nfinally:\n    print(\"End\")",
      "testCases": [
        {
          "id": 1,
          "input": "abc",
          "expectedOutput": "Err\nEnd"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 정수 변환에서 에러가 나지 않았을 때만 변수 x를 출력하도록 잘못된 분기 키워드를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Find and fix the invalid branch keyword so x is printed only when no exception occurs.",
      "hint_ko": "예외가 없을 때 실행되는 분기는 try -> except 뒤에 오는 else: 블록입니다.",
      "hint_en": "Place the except ValueError: block before the else: block.",
      "templateCode": "try:\n    x = int(\"10\")\nexcept ValueError:\n    print(\"Err\")\nelif:\n    print(x)",
      "targetCode": "try:\n    x = int(\"10\")\nexcept ValueError:\n    print(\"Err\")\nelse:\n    print(x)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "10"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 예외 발생 여부와 관계없이 항상 마지막에 실행되는 블록의 헤더 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the block header that always executes at the end regardless of whether an exception occurred.",
      "hint_ko": "콜론(:)을 포함해 finally: 헤더를 작성하세요.",
      "hint_en": "Write finally: on the masked line.",
      "targetCode": "try:\n    n = int(input())\nexcept ValueError:\n    n = 0\nfinally:\n    print(f\"n={n}\")",
      "templateCode": "try:\n    n = int(input())\nexcept ValueError:\n    n = 0\n§§§§§§§§§\n    print(f\"n={n}\")",
      "testCases": [
        {
          "id": 1,
          "input": "7",
          "expectedOutput": "n=7"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 발생 가능한 IndexError 예외 객체를 변수 e로 받아 처리하는 예외 처리 헤더 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the exception handler header that captures IndexError in variable e.",
      "hint_ko": "except IndexError as e: 형태로 콜론(:)까지 포함해 작성하세요.",
      "hint_en": "Write except IndexError as e: on the masked line.",
      "targetCode": "items = [1, 2]\ntry:\n    print(items[5])\nexcept IndexError as e:\n    print(\"IndexErr\")",
      "templateCode": "items = [1, 2]\ntry:\n    print(items[5])\n§§§§§§§§§§§§§§§§§§§§§§§§\n    print(\"IndexErr\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "IndexErr"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 에러가 발생하지 않았을 때와 발생했을 때 try-except-else-finally의 출력 순서를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output sequence when running the 4-stage block for [\"10\", \"x\"].",
      "hint_ko": "\"10\"은 에러가 없으므로 else -> finally가 실행되고, \"x\"는 에러가 나므로 except -> finally가 실행됩니다.",
      "hint_en": "\"10\" triggers else (\"OK:10\") then finally (\"F\"); \"x\" triggers except (\"E\") then finally (\"F\").",
      "targetCode": "log = []\nfor s in [\"10\", \"x\"]:\n    try:\n        n = int(s)\n    except ValueError:\n        log.append(\"E\")\n    else:\n        log.append(f\"OK:{n}\")\n    finally:\n        log.append(\"F\")\nprint(\"-\".join(log))",
      "choices": [
        "OK:10-F-E-F",
        "OK:10-E-F",
        "OK:10-F-E-OK:10-F",
        "E-F-OK:10-F"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "OK:10-F-E-F"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다중 except와 else, finally가 결합된 함수 호출 두 번의 최종 누적 리스트를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output after calling run(2) and run(0).",
      "hint_ko": "run(2)는 10 // 2 = 5를 else에서 추가하고 finally에서 1을 추가하며, run(0)은 except에서 -1을 추가하고 finally에서 1을 추가합니다.",
      "hint_en": "run(2) appends 5 (in else) and 1 (in finally); run(0) appends -1 (in except) and 1 (in finally).",
      "targetCode": "out = []\ndef run(k):\n    try:\n        v = 10 // k\n    except ZeroDivisionError:\n        out.append(-1)\n    else:\n        out.append(v)\n    finally:\n        out.append(1)\n\nrun(2)\nrun(0)\nprint(out, sum(out))",
      "choices": [
        "[5, 1, -1, 1] 6",
        "[5, -1, 1] 5",
        "[5, 1, -1] 5",
        "[5, 1, 0, 1] 7"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[5, 1, -1, 1] 6"
        }
      ]
    }
  ]
};
