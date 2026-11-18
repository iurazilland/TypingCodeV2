import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_78: PracticeRound = {
  "id": "py-basic-r78",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 78,
  "title_ko": "78레벨: 런타임 에러의 이해와 try - except 기본 구조",
  "title_en": "Level 78: Understanding Runtime Errors & Basic try - except",
  "description_ko": "실행 중 발생하는 런타임 에러로 프로그램이 멈추지 않도록 try - except 기본 구조로 안전하게 흐름을 제어합니다.",
  "description_en": "Prevent runtime crashes from stopping your program by wrapping risky operations in basic try - except blocks.",
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
      "prompt_ko": "[블록 조립] try - except 구문으로 10 // 0 나눗셈 에러를 잡아 Error를 출력해보세요.",
      "prompt_en": "[Block] Wrap 10 // 0 in a try - except statement to catch the crash and print Error.",
      "hint_ko": "실행 중 에러가 날 수 있는 코드는 try: 아래에, 에러 발생 시 대신 실행할 코드는 except: 아래에 들여쓰기합니다.",
      "hint_en": "Indent risky code under try:, and place the fallback action under except:.",
      "targetCode": "try:\n    print(10 // 0)\nexcept:\n    print(\"Error\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Error"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 0으로 나누는 수식에서 에러가 발생할 때 Safe가 출력되도록 예외 처리 키워드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the exception-catching keyword so dividing by zero prints Safe instead of crashing.",
      "hint_ko": "try 블록에서 에러가 발생했을 때 흐름을 넘겨받는 여섯 글자 키워드를 콜론 앞에 적으세요.",
      "hint_en": "Write the six-letter keyword before the colon that catches errors raised in the try block.",
      "templateCode": "try:\n    ans = 50 / 0\n    print(ans)\n§§§§§§:\n    print(\"Safe\")",
      "targetCode": "try:\n    ans = 50 / 0\n    print(ans)\nexcept:\n    print(\"Safe\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Safe"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] try 안에서 int(\"abc\") 에러가 나면 바로 아래 출력문을 건너뛰고 except의 Skip을 출력해보세요.",
      "prompt_en": "[Block] Assemble a try - except block where int(\"abc\") fails, skips the next line, and prints Skip.",
      "hint_ko": "try 블록 도중 에러가 발생하는 순간 같은 블록의 남은 줄들은 실행되지 않고 즉시 except 블록으로 이동합니다.",
      "hint_en": "As soon as an error occurs inside try, remaining lines in the try block are skipped and execution jumps to except.",
      "targetCode": "try:\n    print(\"Start\")\n    n = int(\"abc\")\n    print(\"Never\")\nexcept:\n    print(\"Skip\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Start\nSkip"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 변환 에러가 나더라도 프로그램이 멈추지 않고 예외 블록으로 이동하도록 시작 키워드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the opening keyword that attempts risky code before jumping to the fallback block on error.",
      "hint_ko": "위험할 수 있는 코드 실행을 '시도하다'라는 뜻의 세 글자 키워드를 첫 줄 콜론 앞에 적으세요.",
      "hint_en": "Start line 1 with the three-letter keyword meaning to attempt running a block of code.",
      "templateCode": "§§§:\n    x = int(\"ten\")\n    print(x * 2)\nexcept:\n    print(\"Jump\")",
      "targetCode": "try:\n    x = int(\"ten\")\n    print(x * 2)\nexcept:\n    print(\"Jump\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Jump"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 정상 숫자 문자열 \"25\"를 정수로 변환해 2배를 출력하고 except 블록은 건너뛰어보세요.",
      "prompt_en": "[Block] Convert \"25\" to an integer inside try, print n * 2, and skip the except block.",
      "hint_ko": "try 블록 안의 모든 코드가 에러 없이 끝까지 실행되면 except 블록은 통째로 건너뜁니다.",
      "hint_en": "When every line inside the try block succeeds without error, the except block is completely ignored.",
      "targetCode": "try:\n    n = int(\"25\")\n    print(n * 2)\nexcept:\n    print(\"Fail\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "50"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 정상 나눗셈 결과를 출력하고 예외 블록은 건너뛰도록 시도 블록 키워드를 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the header keyword on line 1 so the valid division runs and skips the error handler.",
      "hint_ko": "예외 검사를 시작할 코드 블록을 여는 세 글자 키워드를 적으세요.",
      "hint_en": "Use the three-letter keyword that opens an exception-checked block.",
      "templateCode": "§§§:\n    q = 100 // 4\n    print(f\"OK:{q}\")\nexcept:\n    print(\"Err\")",
      "targetCode": "try:\n    q = 100 // 4\n    print(f\"OK:{q}\")\nexcept:\n    print(\"Err\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "OK:25"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 입력값을 정수로 바꿔 10을 더하고, 에러 시 0을 출력한 뒤 마지막에 항상 Done을 출력해보세요.",
      "prompt_en": "[Block] Convert input() to int and add 10 in try, print 0 in except, and always print Done afterwards.",
      "hint_ko": "except가 에러를 잡아 처리해주었기 때문에 try - except 바깥 아래쪽의 print(\"Done\")까지 안전하게 실행됩니다.",
      "hint_en": "Because except handles the crash, execution continues normally to the unindented print(\"Done\") below.",
      "targetCode": "raw = input()\ntry:\n    print(int(raw) + 10)\nexcept:\n    print(0)\nprint(\"Done\")",
      "testCases": [
        {
          "id": 1,
          "input": "15",
          "expectedOutput": "25\nDone"
        },
        {
          "id": 2,
          "input": "bad",
          "expectedOutput": "0\nDone"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 입력 문자열의 정수 변환이 실패하면 변수에 기본값 -1을 넣어 마지막 출력문이 안전하게 실행되게 해보세요.",
      "prompt_en": "[Fill Blank] Fill in the fallback header keyword so invalid input assigns -1 to val before the final print.",
      "hint_ko": "에러가 발생했을 때 대체 값을 설정하는 여섯 글자 예외 처리 키워드를 적으세요.",
      "hint_en": "Use the six-letter keyword that catches the error and runs the fallback assignment.",
      "templateCode": "s = input()\ntry:\n    val = int(s)\n§§§§§§:\n    val = -1\nprint(f\"Val={val}\")",
      "targetCode": "s = input()\ntry:\n    val = int(s)\nexcept:\n    val = -1\nprint(f\"Val={val}\")",
      "testCases": [
        {
          "id": 1,
          "input": "42",
          "expectedOutput": "Val=42"
        },
        {
          "id": 2,
          "input": "none",
          "expectedOutput": "Val=-1"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 입력값을 정수로 변환해 100을 나눈 몫을 구하고, 에러 발생 시 -1로 대체해 출력하도록 세 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the attempt keyword, integer conversion function, and exception keyword to safely compute 100 // d.",
      "hint_ko": "시도 블록을 여는 키워드와 문자열을 정수로 바꾸는 내장 함수, 그리고 예외를 잡는 키워드를 차례로 확인하세요.",
      "hint_en": "Check the three-letter attempt keyword, the integer casting function, and the six-letter exception keyword.",
      "templateCode": "raw = input()\n§§§:\n    d = §§§(raw)\n    ans = 100 // d\n§§§§§§:\n    ans = -1\nprint(f\"Ans:{ans}\")",
      "targetCode": "raw = input()\ntry:\n    d = int(raw)\n    ans = 100 // d\nexcept:\n    ans = -1\nprint(f\"Ans:{ans}\")",
      "testCases": [
        {
          "id": 1,
          "input": "20",
          "expectedOutput": "Ans:5"
        },
        {
          "id": 2,
          "input": "0",
          "expectedOutput": "Ans:-1"
        },
        {
          "id": 3,
          "input": "abc",
          "expectedOutput": "Ans:-1"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 예외를 잡는 블록에 다른 언어의 키워드(catch)를 잘못 적어 발생한 문법 오류를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the SyntaxError where catch: was used instead of Python's exception keyword.",
      "hint_ko": "파이썬에서는 예외를 잡을 때 catch가 아니라 여섯 글자 전용 키워드를 사용합니다.",
      "hint_en": "Replace catch with Python's six-letter exception-handling keyword.",
      "templateCode": "try:\n    print(10 // 0)\ncatch:\n    print(\"Caught\")",
      "targetCode": "try:\n    print(10 // 0)\nexcept:\n    print(\"Caught\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Caught"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 예외 시도 블록 헤더 끝에 필수 기호가 빠져 발생한 문법 오류를 수정해보세요.",
      "prompt_en": "[Fix Bug] Add the missing punctuation at the end of the block header line to fix the SyntaxError.",
      "hint_ko": "if, for, def, class와 마찬가지로 예외 처리 블록을 시작하는 줄 끝에도 반드시 콜론이 있어야 합니다.",
      "hint_en": "Like if and def headers, an exception block header must end with a colon.",
      "templateCode": "s = \"99\"\ntry\n    n = int(s)\n    print(n + 1)\nexcept:\n    print(0)",
      "targetCode": "s = \"99\"\ntry:\n    n = int(s)\n    print(n + 1)\nexcept:\n    print(0)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "100"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 에러가 발생했을 때 예외 처리 블록을 시작하는 헤더 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the line that starts the exception-handling block.",
      "hint_ko": "들여쓰기 없이 예외 처리 키워드와 콜론을 적어 블록을 시작하세요.",
      "hint_en": "Write the six-letter exception keyword followed by a colon.",
      "templateCode": "try:\n    res = int(\"x\")\n§§§§§§§\n    res = 0\nprint(res)",
      "targetCode": "try:\n    res = int(\"x\")\nexcept:\n    res = 0\nprint(res)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "0"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 예외가 발생했을 때 변수 rate에 기본값 10을 대입하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the indented line inside the exception block that assigns 10 to rate.",
      "hint_ko": "예외 블록 들여쓰기에 맞춰 변수 rate에 숫자 10을 대입하세요.",
      "hint_en": "Indent 4 spaces and assign 10 to variable rate.",
      "templateCode": "raw = input()\ntry:\n    rate = int(raw)\nexcept:\n    §§§§§§§§§\nprint(rate * 3)",
      "targetCode": "raw = input()\ntry:\n    rate = int(raw)\nexcept:\n    rate = 10\nprint(rate * 3)",
      "testCases": [
        {
          "id": 1,
          "input": "5",
          "expectedOutput": "15"
        },
        {
          "id": 2,
          "input": "err",
          "expectedOutput": "30"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] try 블록 중간에서 에러가 발생했을 때 화면에 출력되는 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the exact output when an error occurs on the second statement inside try.",
      "hint_ko": "에러가 나기 직전 줄까지는 이미 실행되어 출력되었고, 에러가 난 줄 아래의 try 코드는 건너뛴다는 점에 주목하세요.",
      "hint_en": "Lines before the crashing statement still run, while lines after it inside try are skipped.",
      "targetCode": "print(\"A\")\ntry:\n    print(\"B\")\n    x = 10 // 0\n    print(\"C\")\nexcept:\n    print(\"D\")\nprint(\"E\")",
      "choices": [
        "A\nB\nD\nE",
        "A\nD\nE",
        "A\nB\nC\nD\nE",
        "A\nB\nD"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "A\nB\nD\nE"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 리스트 순회 안에서 try - except를 실행했을 때 최종 누적 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the final output when iterating over items with a try - except block inside the loop.",
      "hint_ko": "정수로 변환 가능한 문자열은 그대로 더해지고, 에러가 나는 문자열은 except 블록에서 1로 더해집니다.",
      "hint_en": "Valid numeric strings add their integer value, whereas invalid strings trigger except and add 1.",
      "targetCode": "items = [\"10\", \"bad\", \"20\", \"no\"]\ntotal = 0\nfor s in items:\n    try:\n        total += int(s)\n    except:\n        total += 1\nprint(total)",
      "choices": [
        "32",
        "30",
        "11",
        "34"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "32"
        }
      ]
    }
  ]
};
