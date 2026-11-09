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
      "prompt_ko": "try - except 구문은 try 블록 안에서 런타임 에러가 발생해도 프로그램을 멈추지 않고 except 블록으로 흐름을 넘겨 안전하게 처리합니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "A try - except statement catches runtime errors inside the try block and jumps to the except block instead of crashing the program. Trace the block code to practice.",
      "hint_ko": "0으로 나누는 연산처럼 에러가 발생하는 코드는 try 블록 안에, 에러 발생 시 대체할 출력은 except 블록 안에 들여쓰기해 작성합니다.",
      "hint_en": "Place the risky division inside the indented try block, and put the fallback print inside the except block.",
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
      "hint_ko": "첫 빈칸에는 실행을 '시도하다'를 뜻하는 세 글자 키워드를, 둘째 빈칸에는 '~을 제외하고(예외 발생 시)'를 뜻하는 여섯 글자 키워드를 적으세요.",
      "hint_en": "Start with the three-letter keyword meaning \"attempt\", and catch the crash with the six-letter keyword meaning \"excluding / on error\".",
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
      "prompt_ko": "try 블록에서 에러가 발생하는 즉시 해당 블록의 남은 줄은 건너뛰고 except 블록이 실행된 뒤, try - except 바깥의 다음 코드가 정상적으로 이어집니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "As soon as an error occurs in try, the remaining lines in try are skipped, the except block runs, and execution continues normally after the try - except structure. Trace the block code.",
      "hint_ko": "except 블록이 에러를 처리하고 나면 들여쓰기가 끝난 바깥쪽 마지막 출력문까지 프로그램이 멈추지 않고 실행됩니다.",
      "hint_en": "Once the except block handles the error, the unindented print statement below the block continues to execute.",
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
      "hint_ko": "실행을 '시도하다'라는 세 글자 키워드와, 에러가 날 때만 동작하는 여섯 글자 예외 키워드로 변환 코드를 감싸세요.",
      "hint_en": "Wrap the conversion with the three-letter \"attempt\" keyword and the six-letter error-catching keyword so valid runs skip the fallback.",
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
      "prompt_ko": "int() 변환과 산술 연산을 try 블록 안에 함께 묶어 두면, 숫자가 아닌 입력이 들어왔을 때 except 블록에서 안전하게 안내 문구를 출력할 수 있습니다. 블록의 코드를 따라 입력해보세요. (터미널 입력: 15)",
      "prompt_en": "Grouping int() conversion and arithmetic inside a try block lets you safely print a fallback message in except when non-numeric input is given. Trace the block code. (Terminal input: 15)",
      "hint_ko": "try 블록에서 에러 없이 모든 줄이 끝나면 except 블록은 자동으로 건너뜁니다.",
      "hint_en": "When every line inside the try block succeeds without error, the except block is skipped automatically.",
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
      "prompt_ko": "입력 문자열을 정수로 변환 시도하고 실패하면 0으로 대체해 출력하도록 세 빈칸을 채워보세요. (출력 예: Rate:35) (터미널 입력: 35)",
      "prompt_en": "Try converting s to an int, fall back to 0 on error, and print Rate:{rate}. (Terminal input: 35)",
      "hint_ko": "세 글자 시도 키워드 안에서 정수(integer)를 뜻하는 세 글자 자료형 함수로 변환하고, 여섯 글자 예외 키워드에서 기본값을 대입하세요.",
      "hint_en": "Inside the three-letter attempt block, convert using the three-letter integer type function, then catch failures with the six-letter error keyword.",
      "templateCode": "s = input()\n§§§:\n    rate = §§§(s)\n§§§§§§:\n    rate = 0\nprint(f\"Rate:{rate}\")",
      "targetCode": "s = input()\ntry:\n    rate = int(s)\nexcept:\n    rate = 0\nprint(f\"Rate:{rate}\")",
      "testCases": [
        {
          "id": 1,
          "input": "35",
          "expectedOutput": "Rate:35"
        },
        {
          "id": 2,
          "input": "bad",
          "expectedOutput": "Rate:0"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "하나의 try 블록 안에 int() 변환과 // 나눗셈을 함께 배치하면, 문자 입력 에러와 0 나눗셈 에러를 모두 except 블록에서 잡아낼 수 있습니다. 블록의 코드를 따라 입력해보세요. (터미널 입력: 25)",
      "prompt_en": "Placing both int() conversion and // division inside a single try block catches both invalid text errors and division-by-zero errors in the except block. Trace the block code. (Terminal input: 25)",
      "hint_ko": "f-string 중괄호 안에서도 수식을 바로 계산할 수 있으며, 수식 계산 중 에러가 발생하면 즉시 except로 이동합니다.",
      "hint_en": "Expressions inside f-string braces are evaluated directly, and any error during evaluation jumps straight to except.",
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
      "prompt_ko": "정수 변환에 성공하면 count에 더하고, 에러가 발생하면 count에 -1을 저장하도록 두 키워드를 채워보세요. (출력 예: Count:12) (터미널 입력: 12)",
      "prompt_en": "Add int(s) to count on success or set count = -1 on error using exception handling keywords. (Terminal input: 12)",
      "hint_ko": "변환 중 에러가 나면 즉시 아랫줄 누적식을 건너뛰고 예외 블록으로 이동하도록 세 글자 시도 키워드와 여섯 글자 예외 키워드를 채우세요.",
      "hint_en": "Use the three-letter attempt keyword and six-letter error keyword so a failed conversion jumps straight to the fallback assignment.",
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
      "prompt_ko": "for 반복문 안에 try - except와 pass를 조합하면, 리스트를 순회하다 변환 불가능한 원소를 만나도 아무 동작 없이 건너뛰고 끝까지 합계를 구할 수 있습니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Combining try - except with pass inside a for loop lets you silently ignore unconvertible items and continue summing the rest of the list. Trace the block code.",
      "hint_ko": "pass 키워드는 문법적으로 블록 내용은 필요하지만 실행할 동작이 없을 때 사용하는 빈 실행문입니다.",
      "hint_en": "The pass keyword is a null statement used when a block is syntactically required but no action is needed.",
      "targetCode": "items = [\"10\", \"x\", \"25\", \"y\"]\ntotal = 0\nfor s in items:\n    try:\n        total += int(s)\n    except:\n        pass\nprint(total)",
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
      "hint_ko": "함수 본문 안에서도 세 글자 시도 키워드와 여섯 글자 예외 키워드로 인덱싱 코드를 감싸 범위 초과 에러를 처리하세요.",
      "hint_en": "Inside the function body, guard the index lookup with the three-letter attempt keyword and the six-letter catch keyword.",
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
      "prompt_ko": "정수 변환 코드가 예외 감시 블록 바깥에 놓여 있어 문자를 입력하면 에러로 멈춥니다. 변환 코드를 블록 안으로 옮겨보세요. (터미널 입력: 7)",
      "prompt_en": "Fix the crash on non-numeric input by moving n = int(s) inside the try block. (Terminal input: 7)",
      "hint_ko": "실제로 에러가 발생하는 정수 변환 줄이 감시 블록 바깥에 있어 예외 처리가 작동하지 않습니다. 변환 줄을 시도 블록 안으로 들여쓰기해 옮기세요.",
      "hint_en": "The integer conversion that actually crashes sits outside the guarded block; move it inside the indented attempt section.",
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
      "prompt_ko": "안전하게 나눗셈을 수행하는 예외 처리 코드 아래에 한 줄을 추가하여 ans를 지정된 형식으로 출력해보세요. (출력 예: Result:5) (터미널 입력: 10)",
      "prompt_en": "Add one line below the try - except block to print f\"Result:{ans}\". (Terminal input: 10)",
      "hint_ko": "예외 처리 블록이 끝난 맨 아래 줄에서 들여쓰기 없이 서식 문자열을 사용해 결과 변수를 지정된 접두사와 함께 출력하세요.",
      "hint_en": "Unindented after the error-handling block, print the result variable prefixed with the required label using an f-string.",
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
      "hint_ko": "네 문자열을 순서대로 대입하며 정상 몫 계산이 끝나는 경우와 0 나눗셈·변환 실패로 예외 블록이 실행되는 경우를 차례로 추적하세요.",
      "hint_en": "Step through all four strings in order, checking which ones finish floor division cleanly and which ones jump to the fallback append.",
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
