import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_55: PracticeRound = {
  "id": "py-basic-r55",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 55,
  "title_ko": "55레벨: 런타임 에러의 이해와 try - except 기본 구조",
  "title_en": "Level 55: Runtime Errors & Basic try - except",
  "description_ko": "실행 중 발생하는 런타임 에러로 프로그램이 멈추지 않도록 try - except 기본 구조로 안전하게 흐름을 이어갑니다.",
  "description_en": "Prevent runtime crashes like division by zero or invalid conversions using basic try - except blocks.",
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
    "def",
    "try"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "try 블록 안에서 10 // 0을 출력 시도하고, 에러가 발생하면 except 블록에서 \"Error\"를 출력해보세요.",
      "prompt_en": "Try printing 10 // 0 inside a try block and catch the crash in except to print \"Error\".",
      "hint_ko": "0으로 나누면 런타임 에러가 발생하지만 try - except로 감싸면 멈추지 않고 except 블록이 실행됩니다.",
      "hint_en": "Place print(10 // 0) inside try: and print(\"Error\") inside except:.",
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
      "prompt_ko": "문자열 \"abc\"를 정수로 변환하다 에러가 나더라도 멈추지 않고 Invalid를 출력하도록 두 키워드를 채워보세요.",
      "prompt_en": "Fill in the two exception-handling keywords so converting \"abc\" prints Invalid instead of crashing.",
      "hint_ko": "위험한 코드는 try: 블록 안에, 에러 발생 시 대체 동작은 except: 블록 안에 작성합니다.",
      "hint_en": "Write try on line 1 and except on line 4.",
      "templateCode": "§§§:\n    n = int(\"abc\")\n    print(n)\n§§§§§§:\n    print(\"Invalid\")",
      "targetCode": "try:\n    n = int(\"abc\")\n    print(n)\nexcept:\n    print(\"Invalid\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Invalid"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "try에서 100 // 0을 시도하고 except에서 \"Skip\"을 출력한 뒤, 블록 바깥 마지막 줄에서 \"Done\"이 이어서 출력되게 해보세요.",
      "prompt_en": "Catch 100 // 0 to print \"Skip\", then print \"Done\" after the try - except block finishes.",
      "hint_ko": "예외가 처리되면 프로그램이 강제 종료되지 않고 try - except 아래의 print(\"Done\")까지 정상 진행됩니다.",
      "hint_en": "After except prints \"Skip\", execution continues normally to print(\"Done\").",
      "targetCode": "try:\n    res = 100 // 0\n    print(res)\nexcept:\n    print(\"Skip\")\nprint(\"Done\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Skip\nDone"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "정상 변환될 때는 계산 결과만 출력하고 예외 블록을 건너뛴 뒤 End가 출력되도록 두 키워드를 채워보세요.",
      "prompt_en": "Fill in the two keywords so valid code prints 50, skips Fail, and prints End.",
      "hint_ko": "try 블록 안에서 에러가 발생하지 않으면 except 블록은 실행되지 않고 건너뜁니다.",
      "hint_en": "Use try and except to wrap the conversion.",
      "templateCode": "§§§:\n    n = int(\"25\")\n    print(n * 2)\n§§§§§§:\n    print(\"Fail\")\nprint(\"End\")",
      "targetCode": "try:\n    n = int(\"25\")\n    print(n * 2)\nexcept:\n    print(\"Fail\")\nprint(\"End\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "50\nEnd"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "입력값을 정수로 변환해 10을 더한 값을 출력하고, 숫자가 아닌 입력이면 \"NaN\"을 출력해보세요.",
      "prompt_en": "Convert input() to int and print n + 10 inside try, or print \"NaN\" in except if conversion fails.",
      "hint_ko": "try 블록 안에 n = int(raw)와 print(n + 10)을 넣고 except 블록에 print(\"NaN\")을 배치하세요.",
      "hint_en": "Wrap n = int(raw) and print(n + 10) in try:, with print(\"NaN\") in except:.",
      "targetCode": "raw = input()\ntry:\n    n = int(raw)\n    print(n + 10)\nexcept:\n    print(\"NaN\")",
      "testCases": [
        {
          "id": 1,
          "input": "15",
          "expectedOutput": "25"
        },
        {
          "id": 2,
          "input": "ten",
          "expectedOutput": "NaN"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "입력 문자열을 실수로 변환 시도하고 실패하면 0.0으로 대체해 출력하도록 세 빈칸을 채워보세요. (출력 예: Rate:3.5)",
      "prompt_en": "Try converting s to a float, fall back to 0.0 on error, and print Rate:{rate}.",
      "hint_ko": "try: 블록 안에서 float(s)로 실수 변환을 시도하고, 실패 시 except: 블록에서 0.0을 대입합니다.",
      "hint_en": "Fill in try, float, and except.",
      "templateCode": "s = input()\n§§§:\n    rate = §§§§§(s)\n§§§§§§:\n    rate = 0.0\nprint(f\"Rate:{rate}\")",
      "targetCode": "s = input()\ntry:\n    rate = float(s)\nexcept:\n    rate = 0.0\nprint(f\"Rate:{rate}\")",
      "testCases": [
        {
          "id": 1,
          "input": "3.5",
          "expectedOutput": "Rate:3.5"
        },
        {
          "id": 2,
          "input": "bad",
          "expectedOutput": "Rate:0.0"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "입력값을 정수로 바꾸어 100 // d 결과를 Ans:결과 형식으로 출력하고, 에러 발생 시 \"Cannot divide\"를 출력해보세요. (출력 예: Ans:4)",
      "prompt_en": "Convert input to int d and print f\"Ans:{100 // d}\" in try, or \"Cannot divide\" in except.",
      "hint_ko": "문자가 입력되거나 0이 입력되어 나눗셈 에러가 나면 모두 except 블록이 받아 처리합니다.",
      "hint_en": "Both invalid text and 0 trigger except:, printing \"Cannot divide\".",
      "targetCode": "s = input()\ntry:\n    d = int(s)\n    print(f\"Ans:{100 // d}\")\nexcept:\n    print(\"Cannot divide\")",
      "testCases": [
        {
          "id": 1,
          "input": "25",
          "expectedOutput": "Ans:4"
        },
        {
          "id": 2,
          "input": "0",
          "expectedOutput": "Cannot divide"
        },
        {
          "id": 3,
          "input": "zero",
          "expectedOutput": "Cannot divide"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "정수 변환에 성공하면 count에 더하고, 에러가 발생하면 count에 -1을 저장하도록 두 키워드를 채워보세요. (출력 예: Count:12)",
      "prompt_en": "Add int(s) to count on success or set count = -1 on error using exception handling keywords.",
      "hint_ko": "int(s)에서 에러가 나는 즉시 아랫줄 count += val은 건너뛰고 except 블록으로 이동합니다.",
      "hint_en": "Use try and except around the conversion and addition.",
      "templateCode": "s = input()\ncount = 0\n§§§:\n    val = int(s)\n    count += val\n§§§§§§:\n    count = -1\nprint(f\"Count:{count}\")",
      "targetCode": "s = input()\ncount = 0\ntry:\n    val = int(s)\n    count += val\nexcept:\n    count = -1\nprint(f\"Count:{count}\")",
      "testCases": [
        {
          "id": 1,
          "input": "12",
          "expectedOutput": "Count:12"
        },
        {
          "id": 2,
          "input": "err",
          "expectedOutput": "Count:-1"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "리스트 [\"10\", \"x\", \"25\", \"y\"]를 순회하며 정수로 변환 가능한 값만 total에 누적해 합계 35를 출력해보세요.",
      "prompt_en": "Loop over [\"10\", \"x\", \"25\", \"y\"], add int(s) to total inside try, add 0 in except, and print total.",
      "hint_ko": "for 반복문 안에 try - except를 넣으면 중간에 \"x\"가 나와도 멈추지 않고 끝까지 합계를 구합니다.",
      "hint_en": "Put try: total += int(s) and except: total += 0 inside for s in items:.",
      "targetCode": "items = [\"10\", \"x\", \"25\", \"y\"]\ntotal = 0\nfor s in items:\n    try:\n        total += int(s)\n    except:\n        total += 0\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "35"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "리스트 인덱스 조회 중 에러가 나면 Out을 출력하는 함수가 되도록 두 예외 처리 키워드를 채워보세요. (출력 예: Val:20)",
      "prompt_en": "Fill in the two exception-handling keywords inside show_at so out-of-range indices print Out.",
      "hint_ko": "함수 본문 안에서도 try:와 except:로 감싸 인덱스 범위 초과 에러를 안전하게 처리할 수 있습니다.",
      "hint_en": "Write try and except inside def show_at(nums, idx):.",
      "templateCode": "def show_at(nums, idx):\n    §§§:\n        print(f\"Val:{nums[idx]}\")\n    §§§§§§:\n        print(\"Out\")\narr = [10, 20]\nshow_at(arr, 1)\nshow_at(arr, 5)",
      "targetCode": "def show_at(nums, idx):\n    try:\n        print(f\"Val:{nums[idx]}\")\n    except:\n        print(\"Out\")\narr = [10, 20]\nshow_at(arr, 1)\nshow_at(arr, 5)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Val:20\nOut"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "정수 변환 코드가 예외 감시 블록 바깥에 놓여 있어 문자를 입력하면 에러로 멈춥니다. 변환 코드를 블록 안으로 옮겨보세요.",
      "prompt_en": "Fix the crash on non-numeric input by moving n = int(s) inside the try block.",
      "hint_ko": "에러가 발생할 수 있는 n = int(s)가 try: 아래에 들여쓰기 되어 있어야 except가 에러를 잡을 수 있습니다.",
      "hint_en": "Move n = int(s) inside try: right above print(n * 3).",
      "templateCode": "s = input()\nn = int(s)\ntry:\n    print(n * 3)\nexcept:\n    print(\"Bad input\")",
      "targetCode": "s = input()\ntry:\n    n = int(s)\n    print(n * 3)\nexcept:\n    print(\"Bad input\")",
      "testCases": [
        {
          "id": 1,
          "input": "7",
          "expectedOutput": "21"
        },
        {
          "id": 2,
          "input": "abc",
          "expectedOutput": "Bad input"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "안전하게 나눗셈을 수행하는 예외 처리 코드 아래에 한 줄을 추가하여 ans를 지정된 형식으로 출력해보세요. (출력 예: Result:5)",
      "prompt_en": "Add one line below the try - except block to print f\"Result:{ans}\".",
      "hint_ko": "f-string을 이용해 print(f\"Result:{ans}\")를 맨 마지막 줄에 작성합니다.",
      "hint_en": "Write print(f\"Result:{ans}\") on the last line.",
      "templateCode": "raw = input()\ntry:\n    ans = 50 // int(raw)\nexcept:\n    ans = -1\n§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "raw = input()\ntry:\n    ans = 50 // int(raw)\nexcept:\n    ans = -1\nprint(f\"Result:{ans}\")",
      "testCases": [
        {
          "id": 1,
          "input": "10",
          "expectedOutput": "Result:5"
        },
        {
          "id": 2,
          "input": "0",
          "expectedOutput": "Result:-1"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "반복문 안에서 예외 처리를 수행하는 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "Select the exact list printed after running the following loop with try - except.",
      "hint_ko": "\"4\"는 2, \"0\"은 0 나눗셈 에러로 -1, \"hi\"는 변환 에러로 -1, \"2\"는 4가 리스트에 추가됩니다.",
      "hint_en": "\"4\" -> 2, \"0\" -> crash -> -1, \"hi\" -> crash -> -1, \"2\" -> 4.",
      "targetCode": "data = [\"4\", \"0\", \"hi\", \"2\"]\nres = []\nfor s in data:\n    try:\n        v = 8 // int(s)\n        res.append(v)\n    except:\n        res.append(-1)\nprint(res)",
      "choices": [
        "[2, -1, -1, 4]",
        "[2, 0, -1, 4]",
        "[2, -1, 4]",
        "[2, -1, -1, 2]"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[2, -1, -1, 4]"
        }
      ]
    }
  ]
};
