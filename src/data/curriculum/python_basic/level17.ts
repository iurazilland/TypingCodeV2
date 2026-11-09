import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_17: PracticeRound = {
  "id": "py-basic-r17",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 17,
  "title_ko": "17레벨: bool() 형변환과 참·거짓(Truthy / Falsy) 기초",
  "title_en": "Level 17: bool() Casting & Truthy / Falsy Basics",
  "description_ko": "bool() 형변환을 통해 0, 0.0, 빈 문자열(\"\")의 거짓(Falsy) 성질과 참(Truthy) 값을 구분합니다.",
  "description_en": "Use bool() casting to distinguish Falsy values (0, 0.0, \"\") from Truthy values.",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "type"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "a에 bool(1), b에 bool(0)을 저장한 뒤 print(a, b)로 정수 1과 0의 참·거짓을 확인해보세요.",
      "prompt_en": "Store bool(1) in a and bool(0) in b, then print a, b to inspect their boolean values.",
      "hint_ko": "파이썬의 정수 중에서는 오직 0만 거짓으로 판정되고, 0이 아닌 숫자는 모두 참으로 변환됩니다.",
      "hint_en": "Among integers in Python, only 0 is treated as false, while any non-zero integer converts to true.",
      "targetCode": "a = bool(1)\nb = bool(0)\nprint(a, b)",
      "expectedVariables": {
        "a": true,
        "b": false
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True False"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸에 불리언 형변환 함수를 채워 음수 -5와 숫자 0이 각각 참과 거짓 중 무엇이 되는지 출력해보세요.",
      "prompt_en": "Fill in the boolean casting function in both blanks to convert -5 and 0.",
      "hint_ko": "값을 참·거짓 자료형으로 바꿀 때는 불리언(boolean)의 앞 네 글자를 딴 내장 변환 함수를 사용합니다.",
      "hint_en": "To cast values to truth values, use the four-letter built-in function formed from the start of \"boolean\".",
      "templateCode": "x = §§§§(-5)\ny = §§§§(0)\nprint(x)\nprint(y)",
      "targetCode": "x = bool(-5)\ny = bool(0)\nprint(x)\nprint(y)",
      "expectedVariables": {
        "x": true,
        "y": false
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True\nFalse"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "f1에 bool(0.0), f2에 bool(2.5)를 저장하고 한 줄에 출력해 실수의 참·거짓 기준을 확인해보세요.",
      "prompt_en": "Store bool(0.0) in f1 and bool(2.5) in f2, then print f1, f2.",
      "hint_ko": "소수점이 있는 실수에서도 정확히 0.0인 값만 거짓이 되고, 조금이라도 0이 아닌 실수는 모두 참이 됩니다.",
      "hint_en": "For floating-point numbers as well, only exact 0.0 is false and any non-zero decimal is true.",
      "targetCode": "f1 = bool(0.0)\nf2 = bool(2.5)\nprint(f1, f2)",
      "expectedVariables": {
        "f1": false,
        "f2": true
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "False True"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸에 불리언 형변환 함수를 채워 실수 0.0과 -0.1의 변환 결과를 나란히 출력해보세요.",
      "prompt_en": "Fill in the boolean casting function twice to print the truthiness of 0.0 and -0.1.",
      "hint_ko": "음수 실수도 0.0이 아니면 참으로 판정됩니다. 불리언(boolean)의 앞 네 글자를 딴 변환 함수로 두 변수를 각각 감싸보세요.",
      "hint_en": "Even negative decimals are truthy when non-zero; wrap each variable with the first four letters of \"boolean\".",
      "templateCode": "zero_f = 0.0\nval_f = -0.1\nprint(§§§§(zero_f), §§§§(val_f))",
      "targetCode": "zero_f = 0.0\nval_f = -0.1\nprint(bool(zero_f), bool(val_f))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "False True"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "빈 문자열 s1(\"\")과 문자열 s2(\"py\")를 선언하고, bool(s1)과 bool(s2)를 차례로 출력해보세요.",
      "prompt_en": "Declare empty string s1 (\"\") and s2 (\"py\"), then print bool(s1) and bool(s2).",
      "hint_ko": "문자열은 글자가 하나도 없는 빈 문자열일 때만 거짓이고, 공백이나 글자가 한 글자라도 들어 있으면 참이 됩니다.",
      "hint_en": "A string converts to false only when completely empty; having even a single character makes it true.",
      "targetCode": "s1 = \"\"\ns2 = \"py\"\nprint(bool(s1))\nprint(bool(s2))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "False\nTrue"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 정수 변환 함수와 불리언 변환 함수를 채워 문자열 \"0\"과 정수 0의 참·거짓 차이를 출력해보세요.",
      "prompt_en": "Fill in the integer and boolean casting functions to compare string \"0\" with integer 0.",
      "hint_ko": "둘째 줄에는 정수(integer)의 앞 세 글자 변환 함수를, 셋째 줄에는 불리언(boolean)의 앞 네 글자 변환 함수를 채워 글자 \"0\"과 숫자 0의 차이를 비교해보세요.",
      "hint_en": "Use the first three letters of \"integer\" on line 2 and the first four letters of \"boolean\" on line 3 to compare text \"0\" against number 0.",
      "templateCode": "s = \"0\"\nn = §§§(s)\nprint(bool(s), §§§§(n))",
      "targetCode": "s = \"0\"\nn = int(s)\nprint(bool(s), bool(n))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True False"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "정수 n을 입력받아 bool(n)을 flag에 저장하고 출력해 0과 0이 아닌 정수를 판별해보세요.",
      "prompt_en": "Read integer n, store bool(n) in flag, and print flag.",
      "hint_ko": "입력값을 정수로 먼저 바꾼 뒤 불리언 변환 블록에 넣어야 숫자 0이 들어왔을 때 거짓으로 판별할 수 있습니다.",
      "hint_en": "Convert the input into an integer first before casting to a boolean so that numeric 0 is recognized as false.",
      "targetCode": "n = int(input())\nflag = bool(n)\nprint(flag)",
      "testCases": [
        {
          "id": 1,
          "input": "0",
          "expectedOutput": "False"
        },
        {
          "id": 2,
          "input": "-3",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 정수 변환 함수와 불리언 변환 함수를 차례로 채워 입력된 정수의 참·거짓을 출력해보세요.",
      "prompt_en": "Fill in the integer and boolean casting functions to print the truthiness of the input integer.",
      "hint_ko": "첫째 줄에는 정수(integer)의 앞 세 글자 함수를, 둘째 줄에는 불리언(boolean)의 앞 네 글자 함수를 차례로 적어보세요.",
      "hint_en": "Use the three-letter function from \"integer\" on line 1, and the four-letter function from \"boolean\" on line 2.",
      "templateCode": "n = §§§(input())\nprint(§§§§(n))",
      "targetCode": "n = int(input())\nprint(bool(n))",
      "testCases": [
        {
          "id": 1,
          "input": "0",
          "expectedOutput": "False"
        },
        {
          "id": 2,
          "input": "5",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "cnt를 0으로 두고 정수 add를 입력받아 cnt += add로 누적한 뒤, cnt와 bool(cnt)를 출력해보세요.",
      "prompt_en": "Start cnt at 0, read integer add, update cnt += add, and print cnt and bool(cnt).",
      "hint_ko": "초기값 0에 입력 정수를 누적해 더한 뒤, 바뀐 변수 값과 그 변수의 참·거짓 변환 결과를 나란히 출력해보세요.",
      "hint_en": "Add the input integer onto cnt starting from 0, then print both the updated value and its boolean conversion.",
      "targetCode": "cnt = 0\nadd = int(input())\ncnt += add\nprint(cnt, bool(cnt))",
      "testCases": [
        {
          "id": 1,
          "input": "0",
          "expectedOutput": "0 False"
        },
        {
          "id": 2,
          "input": "4",
          "expectedOutput": "4 True"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 문자열 변환 함수와 불리언 변환 함수를 채워 정수 n과 문자열 s의 참·거짓 결과를 비교해보세요.",
      "prompt_en": "Fill in the string and boolean casting functions to compare the truthiness of integer n and string s.",
      "hint_ko": "둘째 줄에는 문자열(string)의 앞 세 글자 변환 함수를, 셋째 줄에는 불리언(boolean)의 앞 네 글자 함수를 채워보세요.",
      "hint_en": "Use the three-letter function from \"string\" on line 2, and the four-letter function from \"boolean\" on line 3.",
      "templateCode": "n = int(input())\ns = §§§(n)\nprint(bool(n), §§§§(s))",
      "targetCode": "n = int(input())\ns = str(n)\nprint(bool(n), bool(s))",
      "testCases": [
        {
          "id": 1,
          "input": "0",
          "expectedOutput": "False True"
        },
        {
          "id": 2,
          "input": "9",
          "expectedOutput": "True True"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "형변환 함수 이름의 대소문자 오타로 발생한 오류를 수정해 입력 정수의 참·거짓을 출력해보세요.",
      "prompt_en": "Fix the capitalization typo on the casting function name so the boolean value prints.",
      "hint_ko": "불리언 상수(참·거짓 값)는 첫 글자를 대문자로 쓰지만, 파이썬의 내장 형변환 함수 이름은 모두 소문자로 작성해야 합니다.",
      "hint_en": "Unlike boolean literals, built-in type conversion function names in Python must be written entirely in lowercase.",
      "templateCode": "n = int(input())\nflag = Bool(n)\nprint(flag)",
      "targetCode": "n = int(input())\nflag = bool(n)\nprint(flag)",
      "testCases": [
        {
          "id": 1,
          "input": "0",
          "expectedOutput": "False"
        },
        {
          "id": 2,
          "input": "7",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "보너스를 누적하는 코드 아래에 한 줄을 추가하여 score를 불리언으로 변환한 결과를 출력해보세요.",
      "prompt_en": "Add one line below to convert score to a boolean and print the result.",
      "hint_ko": "누적된 점수 변수를 불리언 변환 함수로 감싼 뒤 출력 함수에 전달해 점수가 0인지 아닌지 판별해보세요.",
      "hint_en": "Wrap the accumulated score variable inside the boolean casting function and pass it to print().",
      "templateCode": "score = 0\nbonus = int(input())\nscore += bonus\n§§§§§§§§§§§§§§§§§§",
      "targetCode": "score = 0\nbonus = int(input())\nscore += bonus\nprint(bool(score))",
      "testCases": [
        {
          "id": 1,
          "input": "0",
          "expectedOutput": "False"
        },
        {
          "id": 2,
          "input": "15",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 파이썬 코드를 실행했을 때 화면에 출력될 올바른 결과를 선택해보세요.",
      "prompt_en": "Select the exact output that will be printed when the following Python code runs.",
      "hint_ko": "정수 0과 숫자 0을 글자로 바꾼 문자열 \"0\"이 비어 있는지 여부를 비교해 각각의 참·거짓 판정 결과를 생각해보세요.",
      "hint_en": "Compare how boolean conversion treats the integer 0 versus a one-character string containing the digit \"0\".",
      "targetCode": "a = 0\nb = str(a)\na += 0\nprint(bool(a))\nprint(bool(b))",
      "choices": [
        "False\nFalse",
        "True\nTrue",
        "False\nTrue",
        "True\nFalse"
      ],
      "correctChoiceIndex": 2,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "False\nTrue"
        }
      ]
    }
  ]
};
