import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_7: PracticeRound = {
  "id": "py-basic-r7",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 7,
  "title_ko": "문자열 이어붙이기(+)와 문자열 반복(*)",
  "title_en": "String Concatenation (+) & String Repetition (*)",
  "description_ko": "문자열끼리 공백 없이 이어붙이는 덧셈(+)과 문자열을 여러 번 반복하는 곱셈(*)을 익힙니다.",
  "description_en": "Learn string concatenation (+) without spaces and string repetition (*) using integers.",
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
      "prompt_ko": "[블록 조립] 두 문자열을 공백 없이 하나로 이어붙여 출력해보세요.",
      "prompt_en": "[Block] Concatenate the two strings without spaces and print the result.",
      "hint_ko": "문자열 사이에 + 연산자를 쓰면 쉼표(,)와 달리 중간에 공백 없이 글자가 딱 붙어 합쳐집니다.",
      "hint_en": "Unlike a comma, the + operator between strings joins them directly without a space.",
      "targetCode": "print(\"Py\" + \"thon\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Python"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 빈칸에 문자열 결합 연산자를 채워 두 단어를 공백 없이 이어붙여 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the string concatenation operator to join the two words without a space.",
      "hint_ko": "두 문자열을 빈틈없이 하나로 이어붙일 때는 더하기 기호를 사용합니다.",
      "hint_en": "Use the plus sign between two strings to concatenate them without spaces.",
      "templateCode": "print(\"Hello\" §§ \"World\")",
      "targetCode": "print(\"Hello\" + \"World\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "HelloWorld"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 숫자 문자열의 이어붙이기와 숫자의 덧셈 결과를 위아래 두 줄로 출력해보세요.",
      "prompt_en": "[Block] Print the concatenation of the numeric strings and the sum of the numbers on two lines.",
      "hint_ko": "따옴표가 있는 \"10\" + \"20\"은 글자가 이어붙여져 1020이 되고, 숫자 10 + 20은 30이 됩니다.",
      "hint_en": "\"10\" + \"20\" joins the characters into 1020, whereas 10 + 20 adds the numbers to 30.",
      "targetCode": "print(\"10\" + \"20\")\nprint(10 + 20)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1020\n30"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 출력 예제와 같이 출력되도록 빈칸에 큰따옴표로 감싼 숫자 문자열을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the double-quoted numeric string so the output matches the output example.",
      "hint_ko": "앞의 \"3\"과 이어붙여져 35가 되도록 숫자 5를 큰따옴표로 감싸 작성합니다.",
      "hint_en": "Wrap 5 in double quotes so it concatenates with \"3\" to form \"35\".",
      "templateCode": "print(\"3\" + §§§§, 3 + 5)",
      "targetCode": "print(\"3\" + \"5\", 3 + 5)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "35 8"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 문자열 반복 연산을 사용해 별표 5개를 한 번에 출력해보세요.",
      "prompt_en": "[Block] Use string repetition to print five asterisks at once.",
      "hint_ko": "문자열 뒤에 곱셈 기호(*)와 정수를 적으면 해당 문자열이 정수 횟수만큼 반복됩니다.",
      "hint_en": "Multiplying a string by an integer with * repeats the string that many times.",
      "targetCode": "print(\"*\" * 5)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "*****"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 빈칸에 문자열 반복 연산자를 채워 문자열을 3번 반복해 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the string repetition operator to repeat the string 3 times.",
      "hint_ko": "문자열을 지정한 횟수만큼 반복할 때는 문자열과 숫자 사이에 별표 기호를 넣습니다.",
      "hint_en": "Place the asterisk symbol between the string and the repeat count.",
      "templateCode": "print(\"Go\" §§ 3)",
      "targetCode": "print(\"Go\" * 3)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "GoGoGo"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 등호 5개를 반복한 문자열과 100을 3으로 나눈 정수 몫을 한 줄에 나란히 출력해보세요.",
      "prompt_en": "[Block] Print the string \"=\" repeated 5 times alongside the integer quotient of 100 divided by 3.",
      "hint_ko": "문자열 반복 수식 \"=\" * 5와 정수 몫 수식 100 // 3을 쉼표로 나란히 연결합니다.",
      "hint_en": "Separate the string repetition expression \"=\" * 5 and the floor division 100 // 3 with a comma.",
      "targetCode": "print(\"=\" * 5, 100 // 3)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "===== 33"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 출력 예제와 같이 출력되도록 빈칸에 하이픈 문자열을 4번 반복하는 수식을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the expression repeating the hyphen string 4 times to match the output example.",
      "hint_ko": "큰따옴표로 감싼 하이픈 문자열에 반복 연산자와 4를 곱한 식을 작성합니다.",
      "hint_en": "Multiply the double-quoted hyphen string by 4 using the repetition operator.",
      "templateCode": "print(\"<\" + §§§§§§§§ + \">\", 2 ** 4)",
      "targetCode": "print(\"<\" + \"-\" * 4 + \">\", 2 ** 4)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "<----> 16"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 출력 예제와 같이 등호 구분선이 출력되도록 빈칸에 알맞은 연산자를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the operator on line 1 so the equals divider line matches the output example.",
      "hint_ko": "문자열 \"=\"을 4번 반복하도록 문자열 반복 연산자(*)를 채웁니다.",
      "hint_en": "Use the string repetition operator (*) to repeat \"=\" 4 times.",
      "templateCode": "print(\"=\" §§ 4)\nprint(\"10\" + \"5\", 10 ** 2)",
      "targetCode": "print(\"=\" * 4)\nprint(\"10\" + \"5\", 10 ** 2)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "====\n105 100"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 두 문자열을 공백 없이 하나로 이어붙여 출력하도록 잘못된 연산자를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the wrong operator so the two strings concatenate without an error.",
      "hint_ko": "문자열끼리 이어붙일 때는 곱셈(*)이 아니라 덧셈(+) 연산자를 사용해야 합니다.",
      "hint_en": "Use the addition operator (+) rather than multiplication (*) to concatenate two strings.",
      "templateCode": "print(\"Lv.\" * \"1\")",
      "targetCode": "print(\"Lv.\" + \"1\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Lv.1"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 하이픈 10개짜리 구분선이 출력되도록 첫째 줄의 잘못된 연산 기호를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the operator on line 1 so a 10-character hyphen divider line is printed.",
      "hint_ko": "문자열을 정수 횟수만큼 반복할 때는 덧셈 기호가 아니라 곱셈 기호를 사용해야 합니다.",
      "hint_en": "Use the multiplication operator instead of addition to repeat a string 10 times.",
      "templateCode": "print(\"-\" + 10)\nprint(\"Total:\", 50 * 2)",
      "targetCode": "print(\"-\" * 10)\nprint(\"Total:\", 50 * 2)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "----------\nTotal: 100"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 첫째 줄에 \"=\" 문자열을 10번 반복해 구분선을 출력하는 코드를 작성해보세요.",
      "prompt_en": "[Complete Line] Write line 1 to print a 10-character equals divider line using string repetition.",
      "hint_ko": "print() 안에서 \"=\" 문자열에 10을 곱하는 반복 수식을 작성해보세요.",
      "hint_en": "Multiply the string \"=\" by 10 inside print() on line 1.",
      "templateCode": "§§§§§§§§§§§§§§§§\nprint(\"Start\")",
      "targetCode": "print(\"=\" * 10)\nprint(\"Start\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "==========\nStart"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 첫째 줄의 형식에 맞춰 둘째 줄에 문자열 \"7\"의 3번 반복과 숫자 7과 3의 곱을 나란히 출력해보세요.",
      "prompt_en": "[Complete Line] Following line 1, write line 2 to print the string \"7\" repeated 3 times and the product of 7 and 3 side by side.",
      "hint_ko": "첫째 줄의 구조를 참고하여 문자열 \"7\"의 반복식과 숫자 7의 곱셈식을 쉼표로 연결합니다.",
      "hint_en": "Follow line 1 by separating \"7\" * 3 and 7 * 3 with a comma inside print().",
      "templateCode": "print(\"3\" * 2, 3 * 2)\n§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "print(\"3\" * 2, 3 * 2)\nprint(\"7\" * 3, 7 * 3)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "33 6\n777 21"
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
      "hint_ko": "문자열에 대한 *와 +는 글자 반복과 이어붙이기로, 숫자에 대한 *와 +는 사칙연산으로 동작합니다.",
      "hint_en": "On strings, * and + repeat and concatenate characters; on numbers, they multiply and add.",
      "targetCode": "print(\"5\" * 3, 5 * 3)\nprint(\"10\" + \"5\", 10 + 5)",
      "choices": [
        "15 15\n15 15",
        "555 15\n105 15",
        "555 15\n15 15",
        "15 555\n105 15"
      ],
      "correctChoiceIndex": 1,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "555 15\n105 15"
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
      "hint_ko": "문자열 연산에서 *가 +보다 먼저 수행되어 글자가 반복된 뒤 이어붙여집니다.",
      "hint_en": "String repetition (*) runs before concatenation (+).",
      "targetCode": "print(\"Go\" * 2 + \"!\")\nprint(\"A\" + \"B\" * 3)",
      "choices": [
        "GoGo!\nABBB",
        "Go!Go!\nABABAB",
        "Go2!\nAB3",
        "GoGo!\nABABAB"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "GoGo!\nABBB"
        }
      ]
    }
  ]
};
