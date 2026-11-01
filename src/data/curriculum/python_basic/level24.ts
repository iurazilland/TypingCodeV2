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
      "hint_ko": "for i in range(4): 블록 안에 print(i) 블록을 넣으면 0, 1, 2, 3이 차례로 출력됩니다.",
      "hint_en": "Place print(i) inside for i in range(4): to output 0, 1, 2, 3.",
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
      "hint_ko": "파이썬 횟수 반복문은 for 변수 in range(끝): 형태로 작성합니다.",
      "hint_en": "Write a counted loop in Python using the form: for variable in range(stop):.",
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
      "hint_ko": "for i in range(3): 안에서 print(\"Ready\", i)를 실행하면 Ready 0부터 Ready 2까지 출력됩니다.",
      "hint_en": "Run print(\"Ready\", i) inside for i in range(3): to print Ready 0 through Ready 2.",
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
      "hint_ko": "0부터 끝값 직전까지의 정수 시퀀스를 만들 때는 range() 함수를 사용합니다.",
      "hint_en": "Use range(4) to repeat the loop body 4 times.",
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
      "prompt_ko": "정수 n을 입력받아 range(n)과 i + 1을 활용해 1부터 n까지 순서대로 출력해보세요.",
      "prompt_en": "Read integer n and print 1 through n using range(n) and i + 1.",
      "hint_ko": "range(n)은 0부터 n-1까지 변하므로 print(i + 1)을 출력하면 1부터 n까지 나옵니다.",
      "hint_en": "Since range(n) produces 0..n-1, printing i + 1 outputs 1..n.",
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
      "prompt_ko": "빈칸에 줄바꿈 대신 공백을 넣는 옵션 이름을 채워 0부터 n-1까지 한 줄에 출력해보세요. (예: 4 -> 0 1 2 3)",
      "prompt_en": "Fill in the print keyword option name to output 0 through n-1 on a single line separated by spaces.",
      "hint_ko": "print()의 end 옵션에 \" \"를 지정하면 줄을 바꾸지 않고 공백으로 이어 출력합니다.",
      "hint_en": "Set end=\" \" in print() to separate outputs with a space instead of a newline.",
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
      "prompt_ko": "정수 n을 입력받아 문자열 반복 연산(*)으로 별(\"*\")을 1개부터 n개까지 줄마다 출력해보세요.",
      "prompt_en": "Read integer n and print 1 to n stars (\"*\") per line using string repetition (*).",
      "hint_ko": "for i in range(n): 안에서 print(\"*\" * (i + 1))을 실행하면 별 개수가 1개씩 늘어납니다.",
      "hint_en": "Inside for i in range(n):, run print(\"*\" * (i + 1)) to grow the stars from 1 to n.",
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
      "prompt_ko": "빈칸에 문자열 반복 연산자를 채워 줄마다 \"-\"가 i개씩 앞에 붙은 화살표를 n줄 출력해보세요. (예: 3 -> > / -> / -->)",
      "prompt_en": "Fill in the string repetition operator to print n lines of arrows with i leading hyphens.",
      "hint_ko": "문자열에 정수를 곱하는 * 연산자를 쓰면 \"-\"가 i번 반복된 뒤 \">\"와 결합됩니다.",
      "hint_en": "Use * to repeat \"-\" i times before concatenating \">\".",
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
      "prompt_ko": "정수 n을 입력받아 0부터 n-1까지 짝수면 숫자와 \"Even\", 홀수면 숫자와 \"Odd\"를 출력해보세요.",
      "prompt_en": "Read integer n and for 0..n-1 print the number with \"Even\" if even or \"Odd\" if odd.",
      "hint_ko": "for i in range(n): 안에 if i % 2 == 0: 조건과 else: 블록을 넣어 분기 출력하세요.",
      "hint_en": "Use if i % 2 == 0: and else: inside for i in range(n):.",
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
      "prompt_ko": "두 빈칸을 채워 i가 0일 때는 \"Start\", 그 외에는 \"Lv.\" 뒤에 번호를 붙인 문자열을 출력해보세요. (예: 3 -> Start / Lv.1 / Lv.2)",
      "prompt_en": "Fill in both blanks to print \"Start\" when i is 0 and \"Lv.\" + i otherwise.",
      "hint_ko": "조건이 거짓일 때 분기하는 키워드 else와 정수를 문자열로 바꾸는 함수 str을 입력하세요.",
      "hint_en": "Use else for the fallback branch and str(i) to concatenate i with \"Lv.\".",
      "templateCode": "n = int(input())\nfor i in range(n):\n    if i == 0:\n        print(\"Start\")\n    §§§§:\n        print(\"Lv.\" + §§§(i))",
      "targetCode": "n = int(input())\nfor i in range(n):\n    if i == 0:\n        print(\"Start\")\n    else:\n        print(\"Lv.\" + str(i))",
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
      "prompt_ko": "반복 횟수 버그를 고쳐 0부터 n-1까지 총 n개의 정수가 빠짐없이 출력되도록 수정해보세요.",
      "prompt_en": "Fix the range stop bug so all n integers from 0 through n-1 are printed.",
      "hint_ko": "range(끝)은 끝값 직전까지만 반복하므로 n번 반복하려면 n - 1이 아니라 n을 넣어야 합니다.",
      "hint_en": "range(stop) stops before stop, so pass n instead of n - 1 to get 0..n-1.",
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
      "prompt_ko": "반복문 안에 한 줄을 추가하여 0부터 n-1까지의 각 정수에 2를 곱한 값을 공백으로 이어 출력해보세요. (예: 4 -> 0 2 4 6)",
      "prompt_en": "Add one line inside the loop to print i * 2 for 0..n-1 separated by spaces.",
      "hint_ko": "공백 4칸 들여쓰기 후 print(i * 2, end=\" \")를 작성하세요.",
      "hint_en": "Indent by 4 spaces and write print(i * 2, end=\" \").",
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
      "hint_ko": "range(4)는 i가 0, 1, 2, 3으로 변합니다. i=0일 때 \"Go\", 이후 1, 2, 3개의 \"*\"가 출력됩니다.",
      "hint_en": "i runs through 0, 1, 2, 3: i=0 prints \"Go\", and i=1, 2, 3 print 1, 2, and 3 stars.",
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
