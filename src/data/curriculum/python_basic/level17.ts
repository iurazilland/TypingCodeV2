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
  "totalQuestions": 15,
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 정수 1과 0을 각각 bool()로 변환해 참(True)과 거짓(False)을 확인하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the blocks to convert integers 1 and 0 with bool() and print both results.",
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
      "prompt_ko": "[빈칸 채우기] 두 빈칸에 불리언 형변환 함수를 채워 음수 -5와 숫자 0의 참·거짓을 각각 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the boolean casting function in both blanks to convert -5 and 0.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 실수 0.0과 2.5를 각각 bool()로 변환해 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the blocks to convert floats 0.0 and 2.5 with bool() and print them.",
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
      "prompt_ko": "[빈칸 채우기] 두 빈칸에 불리언 형변환 함수를 채워 실수 0.0과 -0.1의 변환 결과를 나란히 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the boolean casting function twice to print the truthiness of 0.0 and -0.1.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 빈 문자열(\"\")과 글자가 있는 문자열(\"py\")을 bool()로 변환해 비교하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the blocks to convert an empty string (\"\") and \"py\" with bool().",
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
      "prompt_ko": "[빈칸 채우기] 정수 변환 함수와 불리언 변환 함수를 채워 문자열 \"0\"과 정수 0의 참·거짓 차이를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the integer and boolean casting functions to compare string \"0\" with integer 0.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 입력값을 int()로 변환한 뒤 bool()에 넣어 0인지 판별하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Convert input to int() and then bool() to check if it is non-zero.",
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
      "prompt_ko": "[빈칸 채우기] 정수 변환 함수와 불리언 변환 함수를 차례로 채워 입력된 정수의 참·거짓을 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the integer and boolean casting functions to print the truthiness of input n.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 누적한 변수 cnt와 bool(cnt) 변환 결과를 나란히 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the blocks to accumulate cnt with += and print cnt and bool(cnt).",
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
      "prompt_ko": "[빈칸 채우기] 문자열 변환 함수와 불리언 변환 함수를 채워 정수 n과 문자열 s의 참·거짓을 비교해보세요.",
      "prompt_en": "[Fill Blank] Fill in the string and boolean casting functions to compare n and s.",
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
      "prompt_ko": "[틀린 곳 수정] 입력된 0이 정수로 변환되어 False가 출력되도록 첫째 줄의 형변환 함수를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the casting function on line 1 so input 0 becomes integer 0 and prints False.",
      "hint_ko": "str(input())은 글자 \"0\"을 유지하므로 bool(\"0\")이 True가 됩니다. 정수 변환 함수 int()로 고쳐보세요.",
      "hint_en": "str(input()) keeps the non-empty string \"0\" (True); convert the input to an integer with int() instead.",
      "templateCode": "n = str(input())\nflag = bool(n)\nprint(flag)",
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
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 첫 번째 변수 a에 거짓(False)이 저장되어 False True가 출력되도록 bool() 안의 정수를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the integer inside bool() on line 1 so variable a becomes False and prints False True.",
      "hint_ko": "정수 중에서는 오직 0만 bool(0)에서 False로 변환됩니다.",
      "hint_en": "Among integers, only 0 converts to False when passed to bool().",
      "templateCode": "a = bool(1)\nb = bool(5)\nprint(a, b)",
      "targetCode": "a = bool(0)\nb = bool(5)\nprint(a, b)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "False True"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 누적된 score를 불리언으로 변환해 변수 ans에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the line that converts score to a boolean and stores it in ans.",
      "hint_ko": "ans = bool(score) 형태로 불리언 변환 결과를 변수 ans에 저장해보세요.",
      "hint_en": "Store the boolean conversion in ans using ans = bool(score).",
      "templateCode": "score = 0\nbonus = int(input())\nscore += bonus\n§§§§§§§§§§§§§§§§§\nprint(ans)",
      "targetCode": "score = 0\nbonus = int(input())\nscore += bonus\nans = bool(score)\nprint(ans)",
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
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 입력 정수 n을 불리언으로 변환해 변수 is_nz에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the line that converts integer n to a boolean and stores it in is_nz.",
      "hint_ko": "is_nz = bool(n) 형태로 정수 n의 참·거짓 변환값을 변수에 대입해보세요.",
      "hint_en": "Assign the boolean conversion of n to is_nz using is_nz = bool(n).",
      "templateCode": "n = int(input())\n§§§§§§§§§§§§§§§\nprint(is_nz)",
      "targetCode": "n = int(input())\nis_nz = bool(n)\nprint(is_nz)",
      "testCases": [
        {
          "id": 1,
          "input": "4",
          "expectedOutput": "True"
        },
        {
          "id": 2,
          "input": "0",
          "expectedOutput": "False"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 파이썬 코드를 실행했을 때 화면에 출력될 올바른 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output that will be printed when the following Python code runs.",
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
