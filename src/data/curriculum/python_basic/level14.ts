import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_14: PracticeRound = {
  "id": "py-basic-r14",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 14,
  "title_ko": "나눗셈·몫·나머지 복합 대입 연산자 (/=, //=, %=)와 문자열 +=",
  "title_en": "Division/Modulo Compound Ops (/=, //=, %=) & String +=",
  "description_ko": "나눗셈(/=), 몫(//=), 나머지(%=), 거듭제곱(**=) 복합 대입과 문자열 이어붙이기(+=)를 익힙니다.",
  "description_en": "Learn /=, //=, %=, and **= compound assignments as well as string concatenation with +=.",
  "totalQuestions": 15,
  "unlockedBlocks": [
    "comment",
    "print",
    "variable"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 복합 대입을 사용해 a는 4로 나눈 실수 값으로, b는 3으로 나눈 정수 몫으로 갱신해 출력해보세요.",
      "prompt_en": "[Block] Use compound assignments to update a with its float quotient by 4 and b with its integer quotient by 3, then print both.",
      "hint_ko": "/=는 실수 나눗셈 결과를 대입하고, //=는 소수점을 버린 정수 몫을 대입합니다.",
      "hint_en": "/= assigns a float division result, whereas //= assigns an integer floor quotient.",
      "targetCode": "a = 20\na /= 4\nb = 20\nb //= 3\nprint(a, b)",
      "expectedVariables": {
        "a": 5,
        "b": 6
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "5.0 6"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 변수를 30으로 나눈 정수 몫으로 갱신하도록 빈칸에 알맞은 복합 대입 연산자를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the compound assignment operator to update the variable to its integer quotient by 30.",
      "hint_ko": "정수 몫 기호 뒤에 등호를 바로 붙여 변수의 값을 몫으로 갱신합니다.",
      "hint_en": "Write the double slash floor division symbol followed immediately by an equals sign.",
      "templateCode": "n = 100\nn §§§§ 30\nprint(n)",
      "targetCode": "n = 100\nn //= 30\nprint(n)",
      "expectedVariables": {
        "n": 3
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 복합 대입을 사용해 r은 5로 나눈 나머지로, p는 4제곱한 값으로 갱신해 나란히 출력해보세요.",
      "prompt_en": "[Block] Use compound assignments to update r with its remainder by 5 and p raised to the power of 4, then print both.",
      "hint_ko": "%=는 나눈 나머지로 변수를 갱신하고, **=는 거듭제곱한 결과로 변수를 갱신합니다.",
      "hint_en": "%= updates the variable with the remainder, and **= updates it with the power result.",
      "targetCode": "r = 17\nr %= 5\np = 2\np **= 4\nprint(r, p)",
      "expectedVariables": {
        "r": 2,
        "p": 16
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2 16"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 변수를 6으로 나눈 나머지로 갱신하도록 빈칸에 알맞은 복합 대입 연산자를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the compound assignment operator to update the variable to its remainder by 6.",
      "hint_ko": "나머지를 구하는 퍼센트 기호 바로 뒤에 등호를 붙여 작성합니다.",
      "hint_en": "Combine the percent sign and the equals sign with no space between them.",
      "templateCode": "num = 29\nnum §§§ 6\nprint(num)",
      "targetCode": "num = 29\nnum %= 6\nprint(num)",
      "expectedVariables": {
        "num": 5
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "5"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 복합 대입 연산자로 문자열 변수 msg 뒤에 느낌표를 덧붙여 출력해보세요.",
      "prompt_en": "[Block] Use a compound assignment operator to append an exclamation mark to msg and print it.",
      "hint_ko": "문자열 변수에 +=를 사용하면 기존 문자열 끝부분에 새 문자열이 빈틈없이 이어붙여집니다.",
      "hint_en": "Using += on a string variable appends the new text to the end of the existing string.",
      "targetCode": "msg = \"Hi\"\nmsg += \"!\"\nprint(msg)",
      "expectedVariables": {
        "msg": "Hi!"
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Hi!"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 빈칸에 문자열 복합 대입 연산자를 채워 기존 문자열 뒤에 글자를 이어붙여 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the compound concatenation operator to append the text to the variable.",
      "hint_ko": "문자열 변수 뒤에 글자를 덧붙일 때도 숫자와 똑같이 덧셈 복합 대입 기호를 씁니다.",
      "hint_en": "Use the compound addition operator to append text to a string variable.",
      "templateCode": "word = \"Py\"\nword §§§ \"thon\"\nprint(word)",
      "targetCode": "word = \"Py\"\nword += \"thon\"\nprint(word)",
      "expectedVariables": {
        "word": "Python"
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Python"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 복합 대입으로 tag 뒤에 문자열을 덧붙이고 n을 8로 나눈 정수 몫으로 갱신해 공백 없이 출력해보세요.",
      "prompt_en": "[Block] Append \"Lv.\" to tag and update n to its integer quotient by 8 using compound assignments, then print them joined.",
      "hint_ko": "문자열 복합 대입과 정수 몫 복합 대입을 각각 수행한 뒤 sep=\"\"로 붙여 출력합니다.",
      "hint_en": "Update the string and integer variables with compound operators, then join them using sep=\"\".",
      "targetCode": "tag = \"#\"\ntag += \"Lv.\"\nn = 50\nn //= 8\nprint(tag, n, sep=\"\")",
      "expectedVariables": {
        "tag": "#Lv.",
        "n": 6
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "#Lv.6"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 변수 x를 제곱한 값으로 갱신하도록 넷째 줄 빈칸에 알맞은 복합 대입 연산자를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the compound assignment operator on line 4 to square the variable x in place.",
      "hint_ko": "거듭제곱 기호인 별표 두 개 뒤에 등호를 바로 붙여 작성합니다.",
      "hint_en": "Write two asterisks followed immediately by an equals sign.",
      "templateCode": "txt = \"Go\"\ntxt += \"!\"\nx = 3\nx §§§§ 2\nprint(txt, x)",
      "targetCode": "txt = \"Go\"\ntxt += \"!\"\nx = 3\nx **= 2\nprint(txt, x)",
      "expectedVariables": {
        "txt": "Go!",
        "x": 9
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Go! 9"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 25를 7로 나눈 정수 몫과 나머지로 각 변수를 갱신하도록 복합 대입 연산자 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the compound assignment operators to update the variables to the integer quotient and remainder of 25 by 7.",
      "hint_ko": "정수 몫 복합 대입(//=)과 나머지 복합 대입(%=) 연산자를 차례로 채웁니다.",
      "hint_en": "Use floor division assignment on line 4 and modulo assignment on line 5.",
      "templateCode": "a = 25\nb = 25\ns = \"Ans\"\na §§§§ 7\nb §§§ 7\ns += \":\"\nprint(s, a, b)",
      "targetCode": "a = 25\nb = 25\ns = \"Ans\"\na //= 7\nb %= 7\ns += \":\"\nprint(s, a, b)",
      "expectedVariables": {
        "a": 3,
        "b": 4,
        "s": "Ans:"
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Ans: 3 4"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 변수를 3으로 나눈 정수 몫으로 갱신하도록 잘못된 복합 대입 연산자를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the wrong compound operator so the variable is updated to its integer quotient by 3.",
      "hint_ko": "거듭제곱 복합 대입(**=) 대신 소수점 아래를 버리는 정수 몫 복합 대입(//=)을 사용해야 합니다.",
      "hint_en": "Replace power assignment (**=) with floor division assignment (//=).",
      "templateCode": "coins = 100\ncoins **= 3\nprint(coins)",
      "targetCode": "coins = 100\ncoins //= 3\nprint(coins)",
      "expectedVariables": {
        "coins": 33
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "33"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 문자열에 사용할 수 없는 잘못된 복합 대입 연산자를 고쳐 단어를 이어붙여 출력해보세요.",
      "prompt_en": "[Fix Bug] Fix the invalid compound operator on the string variable to concatenate the text.",
      "hint_ko": "문자열에는 뺄셈 복합 대입을 쓸 수 없으며, 글자를 이어붙일 때는 덧셈 복합 대입을 씁니다.",
      "hint_en": "Strings do not support subtraction; use compound addition to concatenate text.",
      "templateCode": "tag = \"Py\"\ntag -= \"thon\"\nprint(tag)",
      "targetCode": "tag = \"Py\"\ntag += \"thon\"\nprint(tag)",
      "expectedVariables": {
        "tag": "Python"
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Python"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 복합 대입 연산자를 사용해 변수를 10으로 나눈 정수 몫으로 갱신하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Use a compound operator on line 2 to update the variable to its integer quotient by 10.",
      "hint_ko": "변수 num에 정수 몫 복합 대입 연산자와 10을 적용해 일의 자리를 버립니다.",
      "hint_en": "Use the //= operator with 10 on variable num.",
      "templateCode": "num = 479\n§§§§§§§§§§§\nprint(num)",
      "targetCode": "num = 479\nnum //= 10\nprint(num)",
      "expectedVariables": {
        "num": 47
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "47"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 복합 대입과 문자열 반복 연산을 사용해 문자열 변수 뒤에 별표 3개를 덧붙이는 코드를 작성해보세요.",
      "prompt_en": "[Complete Line] Use compound assignment and string repetition on line 2 to append three asterisks to the variable.",
      "hint_ko": "문자열 반복 수식 \"*\" * 3을 복합 대입 연산자로 title 변수 뒤에 덧붙입니다.",
      "hint_en": "Use title += \"*\" * 3 on line 2 to append three asterisks.",
      "templateCode": "title = \"Boss\"\n§§§§§§§§§§§§§§§§§\nprint(title)",
      "targetCode": "title = \"Boss\"\ntitle += \"*\" * 3\nprint(title)",
      "expectedVariables": {
        "title": "Boss***"
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Boss***"
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
      "hint_ko": "문자열 s에는 \".1\"이 이어붙여지고, 정수 n은 3으로 나눈 정수 몫으로 갱신됩니다.",
      "hint_en": "String s appends \".1\", while n is updated to its integer quotient when divided by 3.",
      "targetCode": "s = \"Lv\"\ns += \".1\"\nn = 10\nn //= 3\nprint(s, n)",
      "choices": [
        "Lv.1 3",
        "Lv.1 1",
        "Lv.1 3.3",
        "Lv .1 3"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Lv.1 3"
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
      "hint_ko": "/= 연산자는 나누어떨어지더라도 결과를 항상 실수(float)로 갱신합니다.",
      "hint_en": "The /= operator always updates the variable to a float value.",
      "targetCode": "x = 10\nx /= 2\ntag = \"A\"\ntag += \"B\"\nprint(tag, x, sep=\":\")",
      "choices": [
        "AB:5",
        "AB:5.0",
        "A+B:5.0",
        "AB:2.0"
      ],
      "correctChoiceIndex": 1,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "AB:5.0"
        }
      ]
    }
  ]
};
