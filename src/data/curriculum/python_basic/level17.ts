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
      "prompt_ko": "bool() 함수는 다른 자료형의 값을 참(True) 또는 거짓(False) 불리언 값으로 변환하며, 정수 중에서는 오직 0만 False가 되고 0이 아닌 모든 정수는 True가 됩니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "The bool() function converts a value into True or False; for integers, only 0 converts to False while any non-zero integer converts to True. Trace the block code.",
      "hint_ko": "bool(1)은 True로, bool(0)은 False로 변환되어 변수에 저장됩니다.",
      "hint_en": "bool(1) evaluates to True and bool(0) evaluates to False.",
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
      "prompt_ko": "소수점이 있는 실수(float)를 bool()에 넣었을 때도 정확히 0.0인 값만 False로 변환되고, 조금이라도 0이 아닌 실수는 모두 True로 변환됩니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "When converting floating-point numbers with bool(), only exact 0.0 becomes False while any non-zero float becomes True. Trace the block code.",
      "hint_ko": "정수 0과 마찬가지로 실수 0.0도 비어 있거나 없는 상태를 뜻해 False로 판정됩니다.",
      "hint_en": "Just like integer 0, floating-point 0.0 is falsy and converts to False.",
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
      "prompt_ko": "문자열을 bool()로 변환하면 글자가 하나도 없는 빈 문자열(\"\")만 False가 되고, 한 글자라도 들어 있는 문자열은 모두 True가 됩니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Converting a string with bool() returns False only for an empty string (\"\"), and True for any string containing at least one character. Trace the block code.",
      "hint_ko": "따옴표 사이에 아무 글자도 없는 \"\"만 거짓(Falsy)으로 판정됩니다.",
      "hint_en": "Only a completely empty string \"\" with zero characters is falsy.",
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
      "prompt_ko": "input()으로 받은 값을 int()로 먼저 정수로 변환한 뒤 bool()에 넣으면 입력된 숫자가 0인지(False) 아닌지(True) 판별할 수 있습니다. 블록의 코드를 따라 입력해보세요. (터미널 입력: 0)",
      "prompt_en": "Converting user input to an integer with int() before passing it to bool() lets you test whether the input number is 0 (False) or non-zero (True). Trace the block code. (Terminal input: 0)",
      "hint_ko": "문자열 \"0\"은 글자가 있어서 True이지만, int()로 바꾼 정수 0은 bool(0)에서 False가 됩니다.",
      "hint_en": "The string \"0\" is non-empty (True), but converting it with int() yields integer 0, which is False in bool().",
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
      "prompt_ko": "빈칸에 정수 변환 함수와 불리언 변환 함수를 차례로 채워 입력된 정수의 참·거짓을 출력해보세요. (터미널 입력: 0)",
      "prompt_en": "Fill in the integer and boolean casting functions to print the truthiness of the input integer. (Terminal input: 0)",
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
      "prompt_ko": "복합 대입 연산자(+=)로 값을 누적한 변수를 bool()에 넣으면, 누적된 결과가 여전히 0인지(False) 아니면 값이 더해졌는지(True) 한눈에 확인할 수 있습니다. 블록의 코드를 따라 입력해보세요. (터미널 입력: 0)",
      "prompt_en": "Passing an accumulated variable updated with += into bool() checks whether the total remains 0 (False) or has become non-zero (True). Trace the block code. (Terminal input: 0)",
      "hint_ko": "누적된 정수 값 자체와 bool() 변환 결과를 쉼표(,)로 나란히 출력합니다.",
      "hint_en": "Print both the numeric variable and its bool() conversion separated by a comma (,).",
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
      "prompt_ko": "빈칸에 문자열 변환 함수와 불리언 변환 함수를 채워 정수 n과 문자열 s의 참·거짓 결과를 비교해보세요. (터미널 입력: 0)",
      "prompt_en": "Fill in the string and boolean casting functions to compare the truthiness of integer n and string s. (Terminal input: 0)",
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
      "prompt_ko": "형변환 함수 이름의 대소문자 오타로 발생한 오류를 수정해 입력 정수의 참·거짓을 출력해보세요. (터미널 입력: 0)",
      "prompt_en": "Fix the capitalization typo on the casting function name so the boolean value prints. (Terminal input: 0)",
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
      "prompt_ko": "보너스를 누적하는 코드 아래에 한 줄을 추가하여 score를 불리언으로 변환한 결과를 출력해보세요. (터미널 입력: 0)",
      "prompt_en": "Add one line below to convert score to a boolean and print the result. (Terminal input: 0)",
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
      "targetCode": "a = 0\nb = str(a)\nprint(bool(a))\nprint(bool(b))",
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
