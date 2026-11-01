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
      "hint_ko": "파이썬에서 숫자 0은 거짓(False)으로, 0이 아닌 숫자는 참(True)으로 변환됩니다.",
      "hint_en": "In Python, 0 converts to False and any non-zero integer converts to True.",
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
      "hint_ko": "음수라도 0이 아니면 참(True)이 됩니다. 값을 불리언으로 바꾸는 내장 함수는 bool입니다.",
      "hint_en": "Any non-zero number including -5 is Truthy. Use bool() in both blanks.",
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
      "hint_ko": "실수에서도 정확히 0.0만 False가 되고, 0.0이 아닌 모든 실수는 True로 변환됩니다.",
      "hint_en": "Among floats, only 0.0 is False; any non-zero float like 2.5 is True.",
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
      "hint_ko": "0.0은 False, -0.1은 0.0이 아니므로 True가 됩니다. 빈칸에 모두 bool을 입력하세요.",
      "hint_en": "Enter bool in both blanks: 0.0 is False and -0.1 is True.",
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
      "hint_ko": "글자가 하나도 없는 빈 문자열(\"\")만 False이고, 한 글자라도 들어 있으면 True가 됩니다.",
      "hint_en": "Only an empty string \"\" is False; any non-empty string is True.",
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
      "hint_ko": "문자열 \"0\"은 비어 있지 않으므로 True이지만, int(s)로 바꾼 정수 0은 bool(n)에서 False가 됩니다.",
      "hint_en": "String \"0\" is non-empty (True), whereas int(\"0\") is 0 so bool(n) is False.",
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
      "hint_ko": "n = int(input())으로 받은 뒤 flag = bool(n)을 저장하고 print(flag)로 출력하세요.",
      "hint_en": "Read n = int(input()), compute flag = bool(n), and print(flag).",
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
      "prompt_ko": "빈칸에 실수 변환 함수와 불리언 변환 함수를 차례로 채워 입력된 실수의 참·거짓을 출력해보세요.",
      "prompt_en": "Fill in the float and boolean casting functions to print the truthiness of the input float.",
      "hint_ko": "첫째 줄에는 실수로 바꾸는 float를, 둘째 줄에는 참·거짓으로 바꾸는 bool을 입력하세요.",
      "hint_en": "Use float on line 1 and bool on line 2.",
      "templateCode": "f = §§§§§(input())\nprint(§§§§(f))",
      "targetCode": "f = float(input())\nprint(bool(f))",
      "testCases": [
        {
          "id": 1,
          "input": "0.0",
          "expectedOutput": "False"
        },
        {
          "id": 2,
          "input": "1.5",
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
      "hint_ko": "누적된 cnt가 0이면 0 False가, 0이 아니면 누적값과 True가 한 줄에 출력됩니다.",
      "hint_en": "If cnt stays 0 it prints 0 False; otherwise it prints the new value and True.",
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
      "prompt_ko": "빈칸에 문자열 변환 함수와 자료형 확인 함수를 채워 n과 s의 불리언 결과 및 자료형을 출력해보세요.",
      "prompt_en": "Fill in the string-casting and type-checking functions to print bool results and type.",
      "hint_ko": "숫자를 문자열로 바꾸는 함수는 str이고, 값의 자료형을 확인하는 함수는 type입니다.",
      "hint_en": "Enter str on line 2 and type on line 3.",
      "templateCode": "n = int(input())\ns = §§§(n)\nprint(bool(n), bool(s), §§§§(bool(n)))",
      "targetCode": "n = int(input())\ns = str(n)\nprint(bool(n), bool(s), type(bool(n)))",
      "testCases": [
        {
          "id": 1,
          "input": "0",
          "expectedOutput": "False True <class 'bool'>"
        },
        {
          "id": 2,
          "input": "9",
          "expectedOutput": "True True <class 'bool'>"
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
      "hint_ko": "파이썬 내장 형변환 함수 이름은 모두 소문자인 bool로 작성해야 합니다.",
      "hint_en": "Built-in function names in Python are lowercase: change Bool to bool.",
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
      "hint_ko": "마지막 줄에 print(bool(score))를 입력해 점수가 0인지 아닌지 출력해보세요.",
      "hint_en": "Write print(bool(score)) on line 4.",
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
      "hint_ko": "정수 a는 0이므로 bool(a)는 False이지만, str(0)으로 만든 b는 글자 \"0\"이 들어 있는 문자열이라 True입니다.",
      "hint_en": "Integer a is 0 (False), whereas b = str(0) is the non-empty string \"0\" (True).",
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
