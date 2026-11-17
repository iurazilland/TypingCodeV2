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
  "totalQuestions": 15,
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] try - except 구문으로 0 나눗셈 에러를 잡아 Error를 출력해보세요.",
      "prompt_en": "[Block] Use a try - except statement to catch division by zero and print Error.",
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
      "prompt_ko": "[빈칸 채우기] 문자열 \"abc\"를 정수로 변환하다 에러가 나면 Invalid를 출력하도록 두 키워드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the two exception-handling keywords so converting \"abc\" prints Invalid.",
      "hint_ko": "첫 빈칸에는 실행을 '시도하다'를 뜻하는 세 글자 키워드를, 둘째 빈칸에는 예외 처리 여섯 글자 키워드를 적으세요.",
      "hint_en": "Start with the three-letter keyword meaning \"attempt\", and catch the crash with the six-letter exception keyword.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] try에서 에러가 나면 except의 Skip을 출력한 뒤 바깥의 Done을 이어서 출력해보세요.",
      "prompt_en": "[Block] Catch the error in except to print Skip, then continue execution to print Done.",
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
      "prompt_ko": "[빈칸 채우기] 정상 변환될 때 계산 결과만 출력하고 예외 블록을 건너뛴 뒤 End를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the two keywords so valid code prints 50, skips Fail, and prints End.",
      "hint_ko": "실행을 '시도하다'라는 세 글자 키워드와, 에러가 날 때만 동작하는 여섯 글자 예외 키워드로 변환 코드를 감싸세요.",
      "hint_en": "Wrap the conversion with the three-letter \"attempt\" keyword and the six-letter error-catching keyword.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 입력값을 정수로 바꿔 10을 더하고 에러 시 NaN을 출력해보세요.",
      "prompt_en": "[Block] Convert input to int and add 10 inside try, or print NaN in except.",
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
      "prompt_ko": "[빈칸 채우기] 입력 문자열을 정수로 변환 시도하고 실패하면 0으로 대체해 출력해보세요.",
      "prompt_en": "[Fill Blank] Try converting s to an int, fall back to 0 on error, and print Rate:{rate}.",
      "hint_ko": "세 글자 시도 키워드로 정수 변환을 감싸고, 여섯 글자 예외 키워드에서 기본값 0을 대입하세요.",
      "hint_en": "Use the three-letter attempt keyword and six-letter error keyword to assign 0 on failure.",
      "templateCode": "s = input()\n§§§:\n    rate = int(s)\n§§§§§§:\n    rate = 0\nprint(f\"Rate:{rate}\")",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] try 안에서 정수 변환과 100 // d 나눗셈을 수행하고 에러 시 안내문을 출력해보세요.",
      "prompt_en": "[Block] Convert input to int and divide 100 // d inside try, or print Cannot divide.",
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
      "prompt_ko": "[빈칸 채우기] 정수 변환에 성공하면 count에 더하고 에러 시 -1을 저장하도록 키워드를 채워보세요.",
      "prompt_en": "[Fill Blank] Add int(s) to count on success or set count = -1 on error.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] for문 안에서 try - except와 pass로 숫자 문자열만 골라 합계를 출력해보세요.",
      "prompt_en": "[Block] Use try - except with pass inside a for loop to sum only valid integer strings.",
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
      "prompt_ko": "[빈칸 채우기] 입력 토큰들을 순회하며 정수로 변환 가능한 값만 합산해 출력해보세요.",
      "prompt_en": "[Fill Blank] Sum only the tokens that can be converted to int using try - except.",
      "hint_ko": "for문 안에서도 세 글자 시도 키워드와 여섯 글자 예외 키워드로 변환 코드를 감싸 에러 항목을 건너뛰세요.",
      "hint_en": "Inside the for loop, wrap the integer addition with the 3-letter try keyword and 6-letter except keyword.",
      "templateCode": "raw = input().split()\ntotal = 0\nfor s in raw:\n    §§§:\n        total += int(s)\n    §§§§§§:\n        pass\nprint(f\"Sum:{total}\")",
      "targetCode": "raw = input().split()\ntotal = 0\nfor s in raw:\n    try:\n        total += int(s)\n    except:\n        pass\nprint(f\"Sum:{total}\")",
      "testCases": [
        {
          "id": 1,
          "input": "10 err 20 30",
          "expectedOutput": "Sum:60"
        },
        {
          "id": 2,
          "input": "5 x y 15",
          "expectedOutput": "Sum:20"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 예외 감시 블록을 시작할 때 for:로 잘못 작성된 키워드를 try:로 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the SyntaxError where for: was written instead of try: before the guarded block.",
      "hint_ko": "except:와 짝을 이루는 예외 감시 블록은 for:가 아니라 try:로 시작해야 합니다.",
      "hint_en": "Start the exception-guarded block with try: instead of for:.",
      "templateCode": "s = input()\nfor:\n    n = int(s)\n    print(n * 3)\nexcept:\n    print(\"Bad input\")",
      "targetCode": "s = input()\ntry:\n    n = int(s)\n    print(n * 3)\nexcept:\n    print(\"Bad input\")",
      "testCases": [
        {
          "id": 1,
          "input": "abc",
          "expectedOutput": "Bad input"
        },
        {
          "id": 2,
          "input": "7",
          "expectedOutput": "21"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 에러 처리 블록에 return:으로 잘못 적힌 키워드를 except:로 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the SyntaxError by replacing return: with except:.",
      "hint_ko": "try: 블록에서 발생한 에러를 받아 처리하는 키워드는 return:이 아니라 except:입니다.",
      "hint_en": "Use except: instead of return: to handle errors raised in the try: block.",
      "templateCode": "try:\n    print(50 // 0)\nreturn:\n    print(\"ZeroError\")",
      "targetCode": "try:\n    print(50 // 0)\nexcept:\n    print(\"ZeroError\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "ZeroError"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] try 블록 안에서 50을 int(raw)로 나눈 몫을 ans에 저장하는 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the line inside try that assigns 50 // int(raw) to ans.",
      "hint_ko": "들여쓰기된 자리에서 ans = 50 // int(raw) 수식을 작성하세요.",
      "hint_en": "Write ans = 50 // int(raw) inside the try block.",
      "templateCode": "raw = input()\ntry:\n    §§§§§§§§§§§§§§§§§§§§\nexcept:\n    ans = -1\nprint(f\"Result:{ans}\")",
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
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] try 블록 아래에서 예외를 잡아 처리하는 except 선언 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the except: line to catch conversion errors.",
      "hint_ko": "예외 처리 키워드 except 뒤에 콜론(:)을 붙여 except:를 작성하세요.",
      "hint_en": "Write except: at the top level.",
      "templateCode": "s = input()\ntry:\n    print(int(s) + 10)\n§§§§§§§\n    print(\"Error\")",
      "targetCode": "s = input()\ntry:\n    print(int(s) + 10)\nexcept:\n    print(\"Error\")",
      "testCases": [
        {
          "id": 1,
          "input": "err",
          "expectedOutput": "Error"
        },
        {
          "id": 2,
          "input": "5",
          "expectedOutput": "15"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 반복문 안에서 예외 처리를 수행하는 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact list printed after running the following loop with try - except.",
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
