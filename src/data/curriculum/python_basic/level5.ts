import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_5: PracticeRound = {
  "id": "py-basic-r5",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 5,
  "title_ko": "문자열(\" \", ' ') 출력과 따옴표 중첩 규칙",
  "title_en": "Strings (\" \", ' ') & Nested Quotes Rules",
  "description_ko": "큰따옴표(\"\")와 작은따옴표('')로 문자열을 출력하는 법과 문장 안에 따옴표를 넣는 규칙을 익힙니다.",
  "description_en": "Learn how to print strings with double (\"\") and single ('') quotes and nest quotes inside strings.",
  "totalQuestions": 15,
  "unlockedBlocks": [
    "print"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 큰따옴표로 감싼 문자열을 조립해 화면에 출력해보세요.",
      "prompt_en": "[Block] Assemble the double-quoted string to display it on the screen.",
      "hint_ko": "문자열을 출력할 때는 양쪽 따옴표 기호는 사라지고 안쪽의 글자만 화면에 나타납니다.",
      "hint_en": "When a string is printed, the surrounding quotes are not displayed—only the characters inside.",
      "targetCode": "print(\"Hello\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Hello"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 출력 예제와 같이 출력되도록 빈칸에 큰따옴표로 감싼 문자열을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the double-quoted string matching the output example.",
      "hint_ko": "단어 앞뒤를 큰따옴표로 감싸야 파이썬이 문자열 데이터로 인식합니다.",
      "hint_en": "Enclose the word in double quotes on both sides so Python treats it as a string.",
      "templateCode": "print(§§§§§§§§)",
      "targetCode": "print(\"World\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "World"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 작은따옴표로 감싼 문자열을 조립해 화면에 출력해보세요.",
      "prompt_en": "[Block] Assemble the single-quoted string to display it on the screen.",
      "hint_ko": "파이썬에서는 큰따옴표뿐만 아니라 작은따옴표로도 문자열을 똑같이 만들 수 있습니다.",
      "hint_en": "In Python, single quotes create strings just like double quotes as long as both ends match.",
      "targetCode": "print('Python')",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Python"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 출력 예제와 같이 출력되도록 빈칸에 작은따옴표로 감싼 문자열을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the single-quoted string matching the output example.",
      "hint_ko": "단어의 시작과 끝을 모두 작은따옴표로 감싸서 문자열을 완성합니다.",
      "hint_en": "Wrap both the beginning and end of the word with single quotes.",
      "templateCode": "print(§§§§§§§§§)",
      "targetCode": "print('Coding')",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Coding"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 문자열 라벨과 정수를 한 줄에 나란히 출력해보세요.",
      "prompt_en": "[Block] Assemble the blocks to print the string label and integer side by side.",
      "hint_ko": "문자열은 따옴표로 감싸고 숫자는 따옴표 없이 쉼표 뒤에 나란히 적습니다.",
      "hint_en": "Enclose the string in quotes and place the number without quotes after the comma.",
      "targetCode": "print(\"Level\", 5)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Level 5"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 출력 예제와 같이 출력되도록 빈칸에 큰따옴표로 감싼 라벨 문자열을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the double-quoted label string matching the output example.",
      "hint_ko": "콜론(:)까지 포함된 글자 전체를 큰따옴표로 감싸 쉼표 앞에 작성합니다.",
      "hint_en": "Wrap the label text including the colon in double quotes before the comma.",
      "templateCode": "print(§§§§§§§§§, 100)",
      "targetCode": "print(\"Score:\", 100)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Score: 100"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 문장 안에 따옴표가 포함된 두 문자열을 위아래 두 줄로 출력해보세요.",
      "prompt_en": "[Block] Assemble the blocks to print the two sentences containing nested quotes on two lines.",
      "hint_ko": "문장 안에 작은따옴표가 있으면 바깥을 큰따옴표로 감싸고, 큰따옴표가 있으면 바깥을 작은따옴표로 감쌉니다.",
      "hint_en": "Use outer double quotes when the text contains a single quote, and outer single quotes when it contains double quotes.",
      "targetCode": "print(\"Let's go\")\nprint('Say \"Hi\"')",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Let's go\nSay \"Hi\""
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 출력 예제의 문장이 출력되도록 빈칸에 큰따옴표로 감싼 문자열을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the double-quoted string matching the sentence in the output example.",
      "hint_ko": "문장 중간에 작은따옴표(어포스트로피)가 포함되어 있으므로 바깥 양쪽은 큰따옴표로 감쌉니다.",
      "hint_en": "Because the phrase contains an apostrophe, enclose the entire string in outer double quotes.",
      "templateCode": "print(§§§§§§§§§§§)",
      "targetCode": "print(\"It's fun\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "It's fun"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 출력 예제와 같이 출력되도록 빈칸에 큰따옴표로 감싼 라벨 문자열을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the double-quoted label string so the output matches the output example.",
      "hint_ko": "큰따옴표로 감싼 라벨 문자열 \"Div:\"를 빈칸에 채웁니다.",
      "hint_en": "Enter the double-quoted label string \"Div:\" before the comma.",
      "templateCode": "print(§§§§§§§, 20 // 3, 20 % 3)",
      "targetCode": "print(\"Div:\", 20 // 3, 20 % 3)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Div: 6 2"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 양쪽 따옴표의 짝이 맞지 않아 발생하는 문법 오류를 고쳐 문자열을 출력해보세요.",
      "prompt_en": "[Fix Bug] Fix the mismatched quotes so the string is printed without a syntax error.",
      "hint_ko": "문자열을 여는 따옴표와 닫는 따옴표는 반드시 같은 종류로 통일해야 합니다.",
      "hint_en": "The opening and closing quotes of a string must be of the same quote type.",
      "templateCode": "print(\"Hello Python')",
      "targetCode": "print(\"Hello Python\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Hello Python"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 문장 안의 어포스트로피와 바깥 따옴표가 충돌하지 않도록 따옴표를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the outer quotes so the apostrophe inside the text does not break the string.",
      "hint_ko": "문자열 안에 작은따옴표가 들어 있을 때는 바깥 양쪽을 큰따옴표로 감싸야 끊기지 않습니다.",
      "hint_en": "Wrap the string in outer double quotes when it contains an inner single quote.",
      "templateCode": "print('It's ok:', 5 + 5)",
      "targetCode": "print(\"It's ok:\", 5 + 5)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "It's ok: 10"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 첫째 줄의 형식에 맞춰 둘째 줄에 큰따옴표 문자열 \"Stage\"와 정수 3을 나란히 출력해보세요.",
      "prompt_en": "[Complete Line] Write line 2 to print the double-quoted string \"Stage\" and the integer 3 side by side.",
      "hint_ko": "첫째 줄의 형태를 참고하여 문자열 라벨과 숫자를 쉼표로 구분해 작성합니다.",
      "hint_en": "Follow line 1 by separating the quoted string and the number with a comma inside print().",
      "templateCode": "print(\"World\", 1)\n§§§§§§§§§§§§§§§§§§",
      "targetCode": "print(\"World\", 1)\nprint(\"Stage\", 3)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "World 1\nStage 3"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 둘째 줄에 문자열 \"Max:\"와 2의 5제곱 수식을 한 줄에 나란히 출력해보세요.",
      "prompt_en": "[Complete Line] Write line 2 to print \"Max:\" and the expression for 2 to the power of 5 side by side.",
      "hint_ko": "따옴표로 감싼 라벨 뒤에 쉼표를 찍고 거듭제곱 계산식을 이어 적어보세요.",
      "hint_en": "Place a comma after the quoted label and write the exponentiation expression.",
      "templateCode": "print(\"Min:\", 2 ** 2)\n§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "print(\"Min:\", 2 ** 2)\nprint(\"Max:\", 2 ** 5)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Min: 4\nMax: 32"
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
      "hint_ko": "바깥 따옴표는 출력되지 않고 안쪽 따옴표와 계산된 수식의 값만 출력됩니다.",
      "hint_en": "Outer quotes are stripped, while inner nested quotes and evaluated numbers are printed.",
      "targetCode": "print(\"It's\", 10 + 5)\nprint('Say \"Go\"')",
      "choices": [
        "It's 15\nSay \"Go\"",
        "\"It's\" 15\n'Say \"Go\"'",
        "It's 10 + 5\nSay Go",
        "It's 15\nSay Go"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "It's 15\nSay \"Go\""
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
      "hint_ko": "바깥 따옴표는 제거되고 안쪽 따옴표만 출력되며, 빈 print()는 빈 줄을 만듭니다.",
      "hint_en": "Outer quotes are stripped, inner quotes are printed, and an empty print() outputs a blank line.",
      "targetCode": "print('\"Hi\"')\nprint()\nprint(\"It's OK\")",
      "choices": [
        "\"Hi\"\nIt's OK",
        "\"Hi\"\n\nIt's OK",
        "'\"Hi\"'\n\nIt's OK",
        "Hi\n\nIt's OK"
      ],
      "correctChoiceIndex": 1,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "\"Hi\"\n\nIt's OK"
        }
      ]
    }
  ]
};
