import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_24: PracticeRound = {
  "id": "py-basic-r24",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 24,
  "title_ko": "24레벨: for 반복문과 range(끝) 기초",
  "title_en": "Level 24: for Loops & range(stop) Basics",
  "description_ko": "for i in range(n)으로 0부터 n-1까지 정해진 횟수만큼 반복하는 기본 원리를 익힙니다.",
  "description_en": "Learn the fundamentals of repeating n times from 0 to n-1 using for i in range(n).",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "type",
    "if",
    "for_range",
    "range"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "range(4)를 사용해 0부터 3까지의 정수를 한 줄에 하나씩 순서대로 출력해보세요.",
      "prompt_en": "Use range(4) to print integers from 0 to 3 one per line in order.",
      "hint_ko": "range(4)는 0부터 끝값 4 직전까지의 정수를 차례로 꺼내 주며, 반복문 안쪽에 들여써서 출력 블록을 배치합니다.",
      "hint_en": "range(4) yields integers from 0 up to right before 4; place the output block indented inside the loop.",
      "targetCode": "for i in range(4):\n    print(i)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "0\n1\n2\n3"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸에 반복문 키워드를 채워 0부터 2까지의 정수를 차례대로 출력해보세요.",
      "prompt_en": "Fill in the two loop keywords to print integers from 0 through 2.",
      "hint_ko": "'~마다/각각에 대해'를 뜻하는 세 글자 반복 키워드와 '~안에'를 뜻하는 두 글자 포함 키워드를 차례대로 채워보세요.",
      "hint_en": "Pair the 3-letter counted-loop keyword with the 2-letter membership keyword that pulls items from a sequence.",
      "templateCode": "§§§ i §§ range(3):\n    print(i)",
      "targetCode": "for i in range(3):\n    print(i)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "0\n1\n2"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "range(3) 반복문으로 문자열 \"Ready\"와 현재 번호 i를 함께 3번 출력해보세요.",
      "prompt_en": "Use a range(3) loop to print \"Ready\" alongside the current index i three times.",
      "hint_ko": "반복 블록 내부의 출력문에서 고정 문자열과 반복 변수를 쉼표로 나란히 전달하면 매 반복마다 공백으로 이어 출력됩니다.",
      "hint_en": "Pass the fixed label string and loop variable separated by a comma inside the loop's print block.",
      "targetCode": "for i in range(3):\n    print(\"Ready\", i)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Ready 0\nReady 1\nReady 2"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 숫자 범위를 만드는 함수를 채워 \"Hello\"를 총 4번 반복 출력해보세요.",
      "prompt_en": "Fill in the range-generating function name to print \"Hello\" 4 times.",
      "hint_ko": "영어로 '범위·구간'을 뜻하는 다섯 글자 내장 함수를 사용해 0부터 지정한 횟수 직전까지의 숫자 흐름을 만듭니다.",
      "hint_en": "Use the 5-letter built-in function meaning a numeric span or extent to repeat the body a set number of times.",
      "templateCode": "for i in §§§§§(4):\n    print(\"Hello\")",
      "targetCode": "for i in range(4):\n    print(\"Hello\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Hello\nHello\nHello\nHello"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "정수 n을 입력받아 range(n)과 i + 1을 활용해 1부터 n까지 순서대로 출력해보세요. (터미널 입력: 3)",
      "prompt_en": "Read integer n and print 1 through n using range(n) and i + 1. (Terminal input: 3)",
      "hint_ko": "반복 변수는 0부터 시작해 n-1에서 끝나므로, 출력할 때 1을 더해주면 1부터 n까지의 수열이 됩니다.",
      "hint_en": "Because the loop index runs from 0 through n-1, adding 1 when printing shifts the output to 1 through n.",
      "targetCode": "n = int(input())\nfor i in range(n):\n    print(i + 1)",
      "testCases": [
        {
          "id": 1,
          "input": "3",
          "expectedOutput": "1\n2\n3"
        },
        {
          "id": 2,
          "input": "5",
          "expectedOutput": "1\n2\n3\n4\n5"
        },
        {
          "id": 3,
          "input": "2",
          "expectedOutput": "1\n2"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 줄바꿈 대신 공백을 넣는 옵션 이름을 채워 0부터 n-1까지 한 줄에 출력해보세요. (터미널 입력: 4)",
      "prompt_en": "Fill in the print keyword option name to output 0 through n-1 on a single line separated by spaces. (Terminal input: 4)",
      "hint_ko": "영어로 '끝·마무리'를 뜻하는 세 글자 출력 옵션에 공백을 지정하면 줄바꿈 대신 한 줄로 이어 출력합니다.",
      "hint_en": "Use the 3-letter print option meaning \"finish\" to replace the default trailing newline with a space.",
      "templateCode": "n = int(input())\nfor i in range(n):\n    print(i, §§§=\" \")",
      "targetCode": "n = int(input())\nfor i in range(n):\n    print(i, end=\" \")",
      "testCases": [
        {
          "id": 1,
          "input": "4",
          "expectedOutput": "0 1 2 3"
        },
        {
          "id": 2,
          "input": "3",
          "expectedOutput": "0 1 2"
        },
        {
          "id": 3,
          "input": "5",
          "expectedOutput": "0 1 2 3 4"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "정수 n을 입력받아 문자열 반복 연산(*)으로 별(\"*\")을 1개부터 n개까지 줄마다 출력해보세요. (터미널 입력: 3)",
      "prompt_en": "Read integer n and print 1 to n stars (\"*\") per line using string repetition (*). (Terminal input: 3)",
      "hint_ko": "0부터 시작하는 반복 변수에 1을 더한 횟수만큼 별 문자열을 반복 연산해 매 줄마다 길이를 늘려 출력하세요.",
      "hint_en": "Repeat the star character (i + 1) times inside the loop so each line grows by one star.",
      "targetCode": "n = int(input())\nfor i in range(n):\n    print(\"*\" * (i + 1))",
      "testCases": [
        {
          "id": 1,
          "input": "3",
          "expectedOutput": "*\n**\n***"
        },
        {
          "id": 2,
          "input": "4",
          "expectedOutput": "*\n**\n***\n****"
        },
        {
          "id": 3,
          "input": "2",
          "expectedOutput": "*\n**"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 문자열 반복 연산자를 채워 줄마다 \"-\"가 i개씩 앞에 붙은 화살표를 n줄 출력해보세요. (터미널 입력: 3)",
      "prompt_en": "Fill in the string repetition operator to print n lines of arrows with i leading hyphens. (Terminal input: 3)",
      "hint_ko": "문자열 뒤에 별표 모양의 곱셈 연산자를 쓰면 오른쪽 정수만큼 문자가 반복된 뒤 화살촉 문자열과 이어집니다.",
      "hint_en": "Use the asterisk multiplication symbol to repeat the hyphen string i times before joining the arrow tip.",
      "templateCode": "n = int(input())\nfor i in range(n):\n    print(\"-\" § i + \">\")",
      "targetCode": "n = int(input())\nfor i in range(n):\n    print(\"-\" * i + \">\")",
      "testCases": [
        {
          "id": 1,
          "input": "3",
          "expectedOutput": ">\n->\n-->"
        },
        {
          "id": 2,
          "input": "4",
          "expectedOutput": ">\n->\n-->\n--->"
        },
        {
          "id": 3,
          "input": "2",
          "expectedOutput": ">\n->"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "정수 n을 입력받아 0부터 n-1까지 짝수면 숫자와 \"Even\", 홀수면 숫자와 \"Odd\"를 출력해보세요. (터미널 입력: 3)",
      "prompt_en": "Read integer n and for 0..n-1 print the number with \"Even\" if even or \"Odd\" if odd. (Terminal input: 3)",
      "hint_ko": "반복문 안에 조건 분기 블록을 중첩해 2로 나눈 나머지가 0인지에 따라 서로 다른 문자열을 함께 출력하세요.",
      "hint_en": "Nest a two-way conditional branch inside the loop to check divisibility by 2 and print the matching label.",
      "targetCode": "n = int(input())\nfor i in range(n):\n    if i % 2 == 0:\n        print(i, \"Even\")\n    else:\n        print(i, \"Odd\")",
      "testCases": [
        {
          "id": 1,
          "input": "3",
          "expectedOutput": "0 Even\n1 Odd\n2 Even"
        },
        {
          "id": 2,
          "input": "4",
          "expectedOutput": "0 Even\n1 Odd\n2 Even\n3 Odd"
        },
        {
          "id": 3,
          "input": "2",
          "expectedOutput": "0 Even\n1 Odd"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸을 채워 i가 0일 때는 \"Start\", 그 외에는 i를 문자열 변수 s로 변환해 \"Lv.\" + s를 출력해보세요. (터미널 입력: 3)",
      "prompt_en": "Fill in both blanks to print \"Start\" when i is 0, and convert i into string s to print \"Lv.\" + s otherwise. (Terminal input: 3)",
      "hint_ko": "'그밖에'를 뜻하는 네 글자 분기 키워드와, 문자열(string)의 앞 세 글자를 딴 변환 함수를 각각 채워보세요.",
      "hint_en": "Enter the 4-letter fallback keyword meaning \"otherwise\" and the conversion function from the first 3 letters of \"string\".",
      "templateCode": "n = int(input())\nfor i in range(n):\n    if i == 0:\n        print(\"Start\")\n    §§§§:\n        s = §§§(i)\n        print(\"Lv.\" + s)",
      "targetCode": "n = int(input())\nfor i in range(n):\n    if i == 0:\n        print(\"Start\")\n    else:\n        s = str(i)\n        print(\"Lv.\" + s)",
      "testCases": [
        {
          "id": 1,
          "input": "3",
          "expectedOutput": "Start\nLv.1\nLv.2"
        },
        {
          "id": 2,
          "input": "4",
          "expectedOutput": "Start\nLv.1\nLv.2\nLv.3"
        },
        {
          "id": 3,
          "input": "2",
          "expectedOutput": "Start\nLv.1"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "반복 횟수 버그를 고쳐 0부터 n-1까지 총 n개의 정수가 빠짐없이 출력되도록 수정해보세요. (터미널 입력: 4)",
      "prompt_en": "Fix the range stop bug so all n integers from 0 through n-1 are printed. (Terminal input: 4)",
      "hint_ko": "범위 함수는 끝값 직전까지만 숫자를 만드는데, 끝값에서 1을 더 빼 버려서 마지막 반복이 누락되고 있습니다.",
      "hint_en": "Because the stop bound is already excluded, subtracting 1 from it drops the last expected number.",
      "templateCode": "n = int(input())\nfor i in range(n - 1):\n    print(i)",
      "targetCode": "n = int(input())\nfor i in range(n):\n    print(i)",
      "testCases": [
        {
          "id": 1,
          "input": "4",
          "expectedOutput": "0\n1\n2\n3"
        },
        {
          "id": 2,
          "input": "3",
          "expectedOutput": "0\n1\n2"
        },
        {
          "id": 3,
          "input": "2",
          "expectedOutput": "0\n1"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "반복문 안에 한 줄을 추가하여 0부터 n-1까지의 각 정수에 2를 곱한 값을 공백으로 이어 출력해보세요. (터미널 입력: 4)",
      "prompt_en": "Add one line inside the loop to print i * 2 for 0..n-1 separated by spaces. (Terminal input: 4)",
      "hint_ko": "반복문 안쪽 들여쓰기에 맞춰 현재 변수에 2를 곱한 값과 줄 끝 공백 옵션을 함께 출력하도록 작성해보세요.",
      "hint_en": "Indent inside the loop body and print twice the loop variable while setting the line-ending option to a space.",
      "templateCode": "n = int(input())\nfor i in range(n):\n    §§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "n = int(input())\nfor i in range(n):\n    print(i * 2, end=\" \")",
      "testCases": [
        {
          "id": 1,
          "input": "4",
          "expectedOutput": "0 2 4 6"
        },
        {
          "id": 2,
          "input": "3",
          "expectedOutput": "0 2 4"
        },
        {
          "id": 3,
          "input": "5",
          "expectedOutput": "0 2 4 6 8"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 파이썬 코드를 실행했을 때 출력될 알맞은 결과를 선택해보세요.",
      "prompt_en": "Select the exact output produced when the following Python code runs.",
      "hint_ko": "0부터 시작해 끝값 4 직전까지 변하는 i의 값들을 적고, 첫 번째 값과 나머지 값에서 각각 무엇이 찍히는지 추적해보세요.",
      "hint_en": "List the values i takes from 0 up to right before 4, then trace the zero branch versus the star-repeating branch.",
      "targetCode": "for i in range(4):\n    if i == 0:\n        print(\"Go\")\n    else:\n        print(\"*\" * i)",
      "choices": [
        "Go\n*\n**\n***",
        "Go\n*\n**\n***\n****",
        "*\n**\n***\n****",
        "Go\n**\n***\n****"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Go\n*\n**\n***"
        }
      ]
    }
  ]
};
