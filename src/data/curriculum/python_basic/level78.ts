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
      "prompt_ko": "[블록 조립] 예외 처리 구문을 사용해 0으로 나누는 연산에서 발생하는 에러를 잡아 안내 문구를 출력해보세요.",
      "prompt_en": "[Block] Wrap the division by zero in an exception-handling block to catch the crash and print the fallback message.",
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
      "prompt_ko": "[빈칸 채우기] 0으로 나누는 수식에서 에러가 발생할 때 대체 문구가 출력되도록 예외 처리 키워드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the exception-catching keyword so dividing by zero runs the fallback block instead of crashing.",
      "hint_ko": "try 블록에서 에러가 발생했을 때 흐름을 넘겨받는 키워드를 콜론 앞에 적으세요.",
      "hint_en": "Write the keyword before the colon that catches errors raised in the try block.",
      "templateCode": "try:\n    ans = 50 / 0\n    print(ans)\n§§§§§§§:\n    print(\"Safe\")",
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
      "prompt_ko": "[블록 조립] 시도 블록 도중 정수 변환 에러가 발생하면 남은 줄을 건너뛰고 예외 블록을 실행하는 코드를 조립해보세요.",
      "prompt_en": "[Block] Assemble an exception block where invalid integer conversion skips the remaining line and runs the fallback block.",
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
      "hint_ko": "위험할 수 있는 코드 실행을 '시도하다'라는 뜻의 키워드를 첫 줄 콜론 앞에 적으세요.",
      "hint_en": "Start line 1 with the keyword meaning to attempt running a block of code.",
      "templateCode": "§§§§:\n    x = int(\"ten\")\n    print(x * 2)\nexcept:\n    print(\"Jump\")",
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
      "prompt_ko": "[블록 조립] 정상적인 숫자 문자열을 정수로 변환해 2배를 출력하고 예외 처리 블록은 건너뛰는 코드를 조립해보세요.",
      "prompt_en": "[Block] Convert the numeric string to an integer inside the attempt block, print double its value, and skip the error handler.",
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
      "hint_ko": "예외 검사를 시작할 코드 블록을 여는 키워드를 적으세요.",
      "hint_en": "Use the keyword that opens an exception-checked block.",
      "templateCode": "§§§§:\n    q = 100 // 4\n    print(f\"OK:{q}\")\nexcept:\n    print(\"Err\")",
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
      "prompt_ko": "[블록 조립] 입력값을 정수로 바꿔 10을 더하고 에러 시 대체 값을 출력한 뒤 마지막 줄을 실행하는 코드를 조립해보세요.",
      "prompt_en": "[Block] Convert the input to an integer and add 10 in the attempt block, handle errors with a fallback value, and run the final statement.",
      "hint_ko": "except가 에러를 잡아 처리해주었기 때문에 try - except 바깥 아래쪽의 print(\"Done\")까지 안전하게 실행됩니다.",
      "hint_en": "Because except handles the crash, execution continues normally to the unindented print(\"Done\") below.",
      "targetCode": "raw = input()\ntry:\n    print(int(raw) + 10)\nexcept:\n    print(0)\nprint(\"Done\")",
      "testCases": [
        {
          "id": 1,
          "input": "15",
          "expectedOutput": "25\nDone"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 입력 문자열의 정수 변환이 실패하면 변수에 기본값 -1을 넣어 마지막 출력문이 안전하게 실행되게 해보세요.",
      "prompt_en": "[Fill Blank] Fill in the fallback header keyword so invalid input assigns -1 to the variable before the final print.",
      "hint_ko": "에러가 발생했을 때 대체 값을 설정하는 예외 처리 키워드를 적으세요.",
      "hint_en": "Use the keyword that catches the error and runs the fallback assignment.",
      "templateCode": "s = input()\ntry:\n    val = int(s)\n§§§§§§§:\n    val = -1\nprint(f\"Val={val}\")",
      "targetCode": "s = input()\ntry:\n    val = int(s)\nexcept:\n    val = -1\nprint(f\"Val={val}\")",
      "testCases": [
        {
          "id": 1,
          "input": "42",
          "expectedOutput": "Val=42"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 100을 입력값으로 나눈 정수 몫을 구하고 에러가 발생하면 결과값을 -1로 대체해보세요.",
      "prompt_en": "[Fill Blank] Safely compute the integer quotient of 100 divided by the input value, falling back to -1 if an error occurs.",
      "hint_ko": "시도 블록을 여는 키워드(try)와 예외를 잡아내는 키워드(except)를 차례로 채우세요.",
      "hint_en": "Check the attempt keyword, the integer casting function, and the exception keyword.",
      "templateCode": "raw = input()\n§§§§:\n    d = int(raw)\n    ans = 100 // d\n§§§§§§§:\n    ans = -1\nprint(f\"Ans:{ans}\")",
      "targetCode": "raw = input()\ntry:\n    d = int(raw)\n    ans = 100 // d\nexcept:\n    ans = -1\nprint(f\"Ans:{ans}\")",
      "testCases": [
        {
          "id": 1,
          "input": "20",
          "expectedOutput": "Ans:5"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 0으로 나눌 때 발생하는 에러를 잡아 예외 블록을 실행하도록 잘못된 키워드를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the exception-catching keyword so dividing by zero runs the handler instead of crashing.",
      "hint_ko": "파이썬에서는 예외를 잡을 때 except: 키워드를 사용합니다.",
      "hint_en": "Replace catch with Python's exception-handling keyword.",
      "templateCode": "try:\n    print(10 // 0)\nhandle:\n    print(\"Caught\")",
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
      "prompt_ko": "[틀린 곳 수정] 예외 시도 블록이 정상 실행되도록 첫째 블록 헤더 끝의 잘못된 문장 부호를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the punctuation at the end of the attempt block header line.",
      "hint_ko": "예외 처리 블록을 시작하는 try 뒤에도 반드시 콜론(:)이 있어야 합니다.",
      "hint_en": "Like if and def headers, an exception block header must end with a colon.",
      "templateCode": "s = \"99\"\ntry;\n    n = int(s)\n    print(n + 1)\nexcept:\n    print(0)",
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
      "hint_en": "Write the exception keyword followed by a colon.",
      "templateCode": "try:\n    res = int(\"x\")\n§§§§§§§§\n    res = 0\nprint(res)",
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
      "prompt_ko": "[한 줄 완성] 예외가 발생했을 때 위아래에서 사용하는 배율 변수에 기본값 10을 대입하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the indented line inside the exception block that assigns a fallback value of 10 to the multiplier variable.",
      "hint_ko": "예외 블록 들여쓰기에 맞춰 변수 rate에 숫자 10을 대입하세요.",
      "hint_en": "Indent 4 spaces and assign 10 to variable rate.",
      "templateCode": "raw = input()\ntry:\n    rate = int(raw)\nexcept:\n    §§§§§§§§§§\nprint(rate * 3)",
      "targetCode": "raw = input()\ntry:\n    rate = int(raw)\nexcept:\n    rate = 10\nprint(rate * 3)",
      "testCases": [
        {
          "id": 1,
          "input": "5",
          "expectedOutput": "15"
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
