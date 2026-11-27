import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_18: PracticeRound = {
  "id": "py-basic-r18",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 18,
  "title_ko": "숫자를 문자열로 바꾸는 str()과 형변환 결합 출력",
  "title_en": "Converting Numbers to Strings with str()",
  "description_ko": "숫자를 문자열로 변환하는 str() 함수와 int()·float()·str()을 결합해 출력하는 방법을 익힙니다.",
  "description_en": "Learn how to convert numbers to strings with str() and combine type conversions.",
  "totalQuestions": 15,
  "unlockedBlocks": [
    "comment",
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
      "prompt_ko": "[블록 조립] 정수 변수 lv를 문자열로 변환해 라벨 뒤에 공백 없이 이어붙여 출력해보세요.",
      "prompt_en": "[Block] Convert the integer variable lv to a string and concatenate it after the label.",
      "hint_ko": "숫자를 str()로 감싸 문자열로 변환하면 다른 문자열과 + 연산자로 에러 없이 이어붙일 수 있습니다.",
      "hint_en": "Converting a number with str() allows you to concatenate it with other strings using +.",
      "targetCode": "lv = 10\nprint(\"Lv.\" + str(lv))",
      "expectedVariables": {
        "lv": 10
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Lv.10"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 빈칸에 문자열 변환 함수 이름을 채워 점수 변수 뒤에 단위 문자열을 이어붙여 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the string conversion function name to concatenate the score variable with the unit string.",
      "hint_ko": "문자열(string)로 변환하는 내장 함수 이름을 괄호 앞에 적습니다.",
      "hint_en": "Write the built-in function name derived from \"string\".",
      "templateCode": "score = 100\nprint(§§§§(score) + \"pt\")",
      "targetCode": "score = 100\nprint(str(score) + \"pt\")",
      "expectedVariables": {
        "score": 100
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "100pt"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 정수 변수 n을 문자열로 변환한 뒤 3번 반복해 출력해보세요.",
      "prompt_en": "[Block] Convert the integer variable n to a string and repeat it 3 times.",
      "hint_ko": "정수 7에 * 3을 하면 21이지만, str(n)으로 문자열 \"7\"을 만든 뒤 * 3을 하면 \"777\"이 됩니다.",
      "hint_en": "Multiplying integer 7 by 3 gives 21, but repeating str(n) three times produces \"777\".",
      "targetCode": "n = 7\nprint(str(n) * 3)",
      "expectedVariables": {
        "n": 7
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "777"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 위에서 선언한 변수를 문자열로 변환하는 식을 빈칸에 채워 4번 반복 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the expression converting the variable above to a string so it repeats 4 times.",
      "hint_ko": "문자열 변환 함수의 소괄호 안에 변수 d를 넣어 작성합니다.",
      "hint_en": "Pass variable d inside the string conversion function.",
      "templateCode": "d = 5\nprint(§§§§§§§ * 4)",
      "targetCode": "d = 5\nprint(str(d) * 4)",
      "expectedVariables": {
        "d": 5
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "5555"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 정수로 입력받은 변수 lv에 복합 대입으로 5를 더한 뒤 문자열로 변환해 라벨 뒤에 이어붙여 출력해보세요.",
      "prompt_en": "[Block] Read an integer into lv, add 5 using compound assignment, and concatenate it as a string after the label.",
      "hint_ko": "계산할 때는 int()로 정수를 만들고, 문장과 +로 합칠 때는 다시 str()로 문자열로 바꿉니다.",
      "hint_en": "Use int() for arithmetic addition, then convert back with str() for string concatenation.",
      "targetCode": "lv = int(input())\nlv += 5\nprint(\"Lv.\" + str(lv))",
      "testCases": [
        {
          "id": 1,
          "input": "10",
          "expectedOutput": "Lv.15"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 셋째 줄 빈칸에 문자열 변환 함수를 채워 계산된 나이 뒤에 단위를 이어붙여 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the string conversion function on line 3 to concatenate the updated age with the unit.",
      "hint_ko": "숫자가 된 변수 age를 문자열과 +로 합치기 위해 문자열 변환 함수를 사용합니다.",
      "hint_en": "Use the string conversion function before (age).",
      "templateCode": "age = int(input())\nage += 1\nprint(§§§§(age) + \"살\")",
      "targetCode": "age = int(input())\nage += 1\nprint(str(age) + \"살\")",
      "testCases": [
        {
          "id": 1,
          "input": "19",
          "expectedOutput": "20살"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 130을 60으로 나눈 정수 몫 m과 나머지 s를 문자열로 변환해 단위와 이어붙여 변수 msg에 담아 출력해보세요.",
      "prompt_en": "[Block] Convert the quotient m and remainder s of 130 by 60 to strings, join them with unit labels into msg, and print msg.",
      "hint_ko": "str(m) + \"m:\" + str(s) + \"s\"처럼 각 숫자를 문자열로 바꾸면 원하는 단위를 빈틈없이 붙일 수 있습니다.",
      "hint_en": "Converting m and s with str() lets you attach unit labels directly with +.",
      "targetCode": "m = 130 // 60\ns = 130 % 60\nmsg = str(m) + \"m:\" + str(s) + \"s\"\nprint(msg)",
      "expectedVariables": {
        "m": 2,
        "s": 10,
        "msg": "2m:10s"
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2m:10s"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 빈칸에 문자열 변환 함수 이름을 채워 실수 변수를 앞뒤 문자열과 이어붙여 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the string conversion function name to concatenate the float variable with the labels.",
      "hint_ko": "실수(float) 값도 정수와 똑같이 문자열 변환 함수로 감싸 문자열로 바꿀 수 있습니다.",
      "hint_en": "Floats can also be converted into strings using the same function.",
      "templateCode": "v = float(\"3.5\")\nprint(\"Speed:\" + §§§§(v) + \"km\")",
      "targetCode": "v = float(\"3.5\")\nprint(\"Speed:\" + str(v) + \"km\")",
      "expectedVariables": {
        "v": 3.5
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Speed:3.5km"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 정수로 입력받은 점수를 2배로 갱신한 뒤 라벨 문자열과 이어붙여 출력하도록 형변환 함수 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the type conversion function blanks to double the input integer and concatenate it with the label.",
      "hint_ko": "첫째 줄의 정수 변환 함수(int)와 셋째 줄의 문자열 변환 함수(str)를 차례로 채워 넣습니다.",
      "hint_en": "Fill in the integer conversion function on line 1 and the string conversion function on line 3.",
      "templateCode": "pt = §§§§(input())\npt *= 2\nprint(\"Score:\" + §§§§(pt))",
      "targetCode": "pt = int(input())\npt *= 2\nprint(\"Score:\" + str(pt))",
      "testCases": [
        {
          "id": 1,
          "input": "30",
          "expectedOutput": "Score:60"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 숫자와 앞뒤 문자열이 에러 없이 이어붙어 출력되도록 잘못된 형변환 함수를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the type conversion function on line 2 so the number concatenates with the strings without a TypeError.",
      "hint_ko": "앞뒤 문자열과 +로 이어붙이려면 int(gold)가 아니라 str(gold)로 감싸야 합니다.",
      "hint_en": "Wrap the integer variable gold inside the string conversion function.",
      "templateCode": "gold = 500\nprint(\"Gold:\" + int(gold) + \"G\")",
      "targetCode": "gold = 500\nprint(\"Gold:\" + str(gold) + \"G\")",
      "expectedVariables": {
        "gold": 500
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Gold:500G"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 변수 값이 문자열로 3번 반복되어 라벨 뒤에 이어붙도록 잘못된 형변환 함수를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the wrong type conversion function so the variable repeats three times as a string.",
      "hint_ko": "변수 code를 문자열로 변환하는 str(code)로 고쳐야 숫자 곱셈 대신 글자 반복(\"333\")이 됩니다.",
      "hint_en": "Convert code to a string before multiplying by 3 so it repeats as \"333\".",
      "templateCode": "code = 3\nprint(\"ID-\" + int(code) * 3)",
      "targetCode": "code = 3\nprint(\"ID-\" + str(code) * 3)",
      "expectedVariables": {
        "code": 3
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "ID-333"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 위에서 선언한 정수 변수를 문자열로 변환해 단위 \"km\"와 공백 없이 이어붙여 출력해보세요.",
      "prompt_en": "[Complete Line] Write line 2 to convert the integer variable above to a string and concatenate it with \"km\".",
      "hint_ko": "print() 안에서 str(km)와 \"km\"를 덧셈 기호로 연결해 작성합니다.",
      "hint_en": "Write print(str(km) + \"km\") on line 2.",
      "templateCode": "km = 42\n§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "km = 42\nprint(str(km) + \"km\")",
      "expectedVariables": {
        "km": 42
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "42km"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 문자열 \"Floor:\" 뒤에 위에서 갱신한 변수를 문자열로 변환해 공백 없이 이어붙여 출력해보세요.",
      "prompt_en": "[Complete Line] Write line 3 to concatenate \"Floor:\" with the updated variable converted to a string and print it.",
      "hint_ko": "문자열 \"Floor:\" 뒤에 + 연산자로 str(f)를 연결해 print() 안에 작성합니다.",
      "hint_en": "Concatenate \"Floor:\" and str(f) with + inside print() on line 3.",
      "templateCode": "f = int(input())\nf += 1\n§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "f = int(input())\nf += 1\nprint(\"Floor:\" + str(f))",
      "testCases": [
        {
          "id": 1,
          "input": "4",
          "expectedOutput": "Floor:5"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 파이썬 코드를 실행했을 때 출력될 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output when the following Python code runs.",
      "hint_ko": "정수로 변환되어 3이 더해진 뒤, 다시 문자열로 바뀌어 2번 반복되는 과정을 따라가보세요.",
      "hint_en": "Trace how \"12\" becomes integer 12, adds 3 to become 15, and then repeats twice as a string.",
      "targetCode": "n = int(\"12\")\nn += 3\nprint(str(n) * 2)",
      "choices": [
        "30",
        "1515",
        "123123",
        "15 15"
      ],
      "correctChoiceIndex": 1,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1515"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 파이썬 코드를 실행했을 때 출력될 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output when the following Python code runs.",
      "hint_ko": "첫째 줄은 두 숫자를 문자열로 바꾸어 이어붙이고, 둘째 줄은 숫자를 먼저 더한 뒤 문자열로 바꿉니다.",
      "hint_en": "Line 3 concatenates two strings, whereas line 4 adds the integers before converting to a string.",
      "targetCode": "a = 3\nb = 2\nprint(str(a) + str(b))\nprint(\"Sum:\" + str(a + b))",
      "choices": [
        "5\nSum:5",
        "32\nSum:5",
        "32\nSum:32",
        "5\nSum:32"
      ],
      "correctChoiceIndex": 1,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "32\nSum:5"
        }
      ]
    }
  ]
};
