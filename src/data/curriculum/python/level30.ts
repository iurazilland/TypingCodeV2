import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_30: PracticeRound = {
  "id": "py-basic-r30",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 30,
  "title_ko": "30레벨: 중첩 for 반복문 기초",
  "title_en": "Level 30: Nested for Loops Basics",
  "description_ko": "반복문 안에 반복문을 중첩해 구구단, 2차원 좌표 격자, 계단 패턴을 출력하고 while 반복과 결합합니다.",
  "description_en": "Nest loops to build multiplication tables, 2D grids, and staircases, and combine them with while.",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "method",
    "type",
    "if",
    "for_range",
    "range",
    "while",
    "break",
    "continue"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "바깥 r은 range(2), 안쪽 c는 range(3)으로 중첩해 모든 행·열 좌표 쌍 r, c를 출력해보세요.",
      "prompt_en": "Nest c in range(3) inside r in range(2) and print each coordinate pair r, c.",
      "hint_ko": "바깥 for문이 한 번 돌 때마다 안쪽 for문이 0, 1, 2 세 번씩 끝까지 실행됩니다.",
      "hint_en": "For each outer iteration of r, the inner loop runs c through 0, 1, 2.",
      "targetCode": "for r in range(2):\n    for c in range(3):\n        print(r, c)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "0 0\n0 1\n0 2\n1 0\n1 1\n1 2"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "안쪽 반복 키워드와 두 변수의 곱셈식을 채워 2단과 3단의 1~3 곱셈표를 출력해보세요.",
      "prompt_en": "Fill in the inner loop keyword and product expression to print 2 and 3 times 1..3.",
      "hint_ko": "안쪽 반복문도 for로 시작하며, 단 번호 dan과 곱하는 수 i의 곱은 dan * i입니다.",
      "hint_en": "Start the inner loop with for and print dan * i as the third value.",
      "templateCode": "for dan in range(2, 4):\n    §§§ i in range(1, 4):\n        print(dan, i, §§§§§§§)",
      "targetCode": "for dan in range(2, 4):\n    for i in range(1, 4):\n        print(dan, i, dan * i)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2 1 2\n2 2 4\n2 3 6\n3 1 3\n3 2 6\n3 3 9"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "중첩 for문과 end=\"\" 및 바깥 print()를 사용해 2줄 4칸짜리 별(\"*\") 직사각형을 출력해보세요.",
      "prompt_en": "Use nested for loops, end=\"\", and an outer print() to print a 2-by-4 rectangle of stars.",
      "hint_ko": "안쪽 루프에서 print(\"*\", end=\"\")로 가로 출력하고 안쪽 루프 직후 print()로 줄을 바꾸세요.",
      "hint_en": "Call print(\"*\", end=\"\") in the inner loop, then call print() at outer-loop indentation.",
      "targetCode": "for r in range(2):\n    for c in range(4):\n        print(\"*\", end=\"\")\n    print()",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "****\n****"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "줄바꿈 방지 옵션 이름과 빈 줄바꿈 출력문을 채워 세로 h줄, 가로 w칸의 \"#\" 격자를 출력해보세요.",
      "prompt_en": "Fill in the end option name and outer newline print call to render an h-by-w \"#\" grid.",
      "hint_ko": "가로로 이어 찍을 때는 end=\"\" 옵션을 쓰고, 한 줄이 끝날 때마다 print()로 줄바꿈합니다.",
      "hint_en": "Use end=\"\" in the inner print and call print() once after the inner loop.",
      "templateCode": "h, w = input().split()\nfor r in range(int(h)):\n    for c in range(int(w)):\n        print(\"#\", §§§=\"\")\n    §§§§§§§",
      "targetCode": "h, w = input().split()\nfor r in range(int(h)):\n    for c in range(int(w)):\n        print(\"#\", end=\"\")\n    print()",
      "testCases": [
        {
          "id": 1,
          "input": "2 3",
          "expectedOutput": "###\n###"
        },
        {
          "id": 2,
          "input": "3 2",
          "expectedOutput": "##\n##\n##"
        },
        {
          "id": 3,
          "input": "1 4",
          "expectedOutput": "####"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "정수 n을 입력받아 1층부터 n층까지 별(\"*\")이 1개씩 늘어나는 계단 삼각형을 출력해보세요.",
      "prompt_en": "Read integer n and print a staircase triangle of stars growing from 1 up to n.",
      "hint_ko": "바깥 r을 range(1, n + 1)로 두고 안쪽을 range(r)로 두면 r번째 줄에 별이 r개 찍힙니다.",
      "hint_en": "With outer r in range(1, n + 1), use range(r) in the inner loop to print r stars.",
      "targetCode": "n = int(input())\nfor r in range(1, n + 1):\n    for c in range(r):\n        print(\"*\", end=\"\")\n    print()",
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
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 줄바꿈 방지 옵션 이름을 채워 2단부터 d단까지 각 단의 1~3 곱셈값을 한 줄씩 공백으로 출력해보세요. (예: 3 -> 2 4 6 / 3 6 9)",
      "prompt_en": "Fill in the print keyword option name so each multiplication row prints 3 values separated by spaces.",
      "hint_ko": "i가 3보다 작을 때는 줄을 바꾸지 않고 공백을 붙이도록 end=\" \"를 지정합니다.",
      "hint_en": "Set end=\" \" when i < 3 so values on the same row are separated by spaces.",
      "templateCode": "d = int(input())\nfor dan in range(2, d + 1):\n    for i in range(1, 4):\n        if i < 3:\n            print(dan * i, §§§=\" \")\n        else:\n            print(dan * i)",
      "targetCode": "d = int(input())\nfor dan in range(2, d + 1):\n    for i in range(1, 4):\n        if i < 3:\n            print(dan * i, end=\" \")\n        else:\n            print(dan * i)",
      "testCases": [
        {
          "id": 1,
          "input": "3",
          "expectedOutput": "2 4 6\n3 6 9"
        },
        {
          "id": 2,
          "input": "4",
          "expectedOutput": "2 4 6\n3 6 9\n4 8 12"
        },
        {
          "id": 3,
          "input": "2",
          "expectedOutput": "2 4 6"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "정수 n을 입력받아 n x n 격자에서 (r + c) % 2 == 0이면 \"O\", 아니면 \"X\"를 출력해 체스판을 만들어보세요.",
      "prompt_en": "Read integer n and print an n-by-n checkerboard of \"O\" where (r + c) % 2 == 0 and \"X\" otherwise.",
      "hint_ko": "안쪽 루프에서 if (r + c) % 2 == 0:에 따라 end=\"\"로 \"O\" 또는 \"X\"를 찍고 바깥에서 print()하세요.",
      "hint_en": "Inside the inner loop, print \"O\" or \"X\" with end=\"\", then call print() per row.",
      "targetCode": "n = int(input())\nfor r in range(n):\n    for c in range(n):\n        if (r + c) % 2 == 0:\n            print(\"O\", end=\"\")\n        else:\n            print(\"X\", end=\"\")\n    print()",
      "testCases": [
        {
          "id": 1,
          "input": "3",
          "expectedOutput": "OXO\nXOX\nOXO"
        },
        {
          "id": 2,
          "input": "2",
          "expectedOutput": "OX\nXO"
        },
        {
          "id": 3,
          "input": "4",
          "expectedOutput": "OXOX\nXOXO\nOXOX\nXOXO"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "누적 덧셈 연산자와 문자열 변환 함수를 채워 모든 (r, c) 쌍의 곱 합계를 \"Sum:값\" 형식으로 출력해보세요.",
      "prompt_en": "Fill in the compound addition operator and string conversion function to print \"Sum:\" + total.",
      "hint_ko": "합계 누적에는 += 연산자를, 문자열과 정수를 결합할 때는 str() 함수를 사용합니다.",
      "hint_en": "Use += to accumulate r * c and str(total) to concatenate with \"Sum:\".",
      "templateCode": "a, b = input().split()\ntotal = 0\nfor r in range(1, int(a) + 1):\n    for c in range(1, int(b) + 1):\n        total §§ r * c\nprint(\"Sum:\" + §§§(total))",
      "targetCode": "a, b = input().split()\ntotal = 0\nfor r in range(1, int(a) + 1):\n    for c in range(1, int(b) + 1):\n        total += r * c\nprint(\"Sum:\" + str(total))",
      "testCases": [
        {
          "id": 1,
          "input": "2 3",
          "expectedOutput": "Sum:18"
        },
        {
          "id": 2,
          "input": "2 2",
          "expectedOutput": "Sum:9"
        },
        {
          "id": 3,
          "input": "3 3",
          "expectedOutput": "Sum:36"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "1부터 n까지 중첩 반복하며 c > r이 되는 순간 안쪽 루프를 break로 멈춰 숫자 계단을 출력해보세요. (예: 3 -> 1 / 12 / 123)",
      "prompt_en": "In nested 1..n loops, break the inner loop when c > r to print a number staircase.",
      "hint_ko": "안쪽 루프에서 if c > r:일 때 break하고, 아니면 print(c, end=\"\")를 실행한 뒤 바깥에서 print()하세요.",
      "hint_en": "Break the inner loop when c > r, print(c, end=\"\") otherwise, and call print() per row.",
      "targetCode": "n = int(input())\nfor r in range(1, n + 1):\n    for c in range(1, n + 1):\n        if c > r:\n            break\n        print(c, end=\"\")\n    print()",
      "testCases": [
        {
          "id": 1,
          "input": "3",
          "expectedOutput": "1\n12\n123"
        },
        {
          "id": 2,
          "input": "4",
          "expectedOutput": "1\n12\n123\n1234"
        },
        {
          "id": 3,
          "input": "2",
          "expectedOutput": "1\n12"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "감소 간격과 안쪽 반복 횟수를 채워 n개부터 1개까지 줄어드는 역삼각형 별 패턴을 출력해보세요.",
      "prompt_en": "Fill in the negative step and inner count variable to print an inverted star triangle from n down to 1.",
      "hint_ko": "바깥 r이 n부터 1까지 -1씩 줄어들고, 안쪽 루프는 현재 줄의 개수 r만큼 반복합니다.",
      "hint_en": "Step r down by -1 and repeat the inner loop r times.",
      "templateCode": "n = int(input())\nfor r in range(n, 0, §§):\n    for c in range(§):\n        print(\"*\", end=\"\")\n    print()",
      "targetCode": "n = int(input())\nfor r in range(n, 0, -1):\n    for c in range(r):\n        print(\"*\", end=\"\")\n    print()",
      "testCases": [
        {
          "id": 1,
          "input": "3",
          "expectedOutput": "***\n**\n*"
        },
        {
          "id": 2,
          "input": "4",
          "expectedOutput": "****\n***\n**\n*"
        },
        {
          "id": 3,
          "input": "2",
          "expectedOutput": "**\n*"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "while과 for를 결합한 코드에서 줄바꿈 들여쓰기 버그를 고쳐 1층부터 n층까지 별 계단이 출력되게 해보세요.",
      "prompt_en": "Fix the indentation of print() inside the while-for loop so a star staircase of 1..n rows is printed.",
      "hint_ko": "빈 print()는 별 하나를 찍을 때마다 실행되면 안 되고 안쪽 for문이 끝난 직후 한 번만 실행되어야 합니다.",
      "hint_en": "Unindent print() by 4 spaces so it runs once per row inside the while loop.",
      "templateCode": "n = int(input())\nr = 1\nwhile r <= n:\n    for c in range(r):\n        print(\"*\", end=\"\")\n        print()\n    r += 1",
      "targetCode": "n = int(input())\nr = 1\nwhile r <= n:\n    for c in range(r):\n        print(\"*\", end=\"\")\n    print()\n    r += 1",
      "testCases": [
        {
          "id": 1,
          "input": "3",
          "expectedOutput": "*\n**\n***"
        },
        {
          "id": 2,
          "input": "2",
          "expectedOutput": "*\n**"
        },
        {
          "id": 3,
          "input": "4",
          "expectedOutput": "*\n**\n***\n****"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "바깥 while 반복문 마지막에 한 줄을 추가하여 행 번호 r을 1씩 증가시켜 숫자 정사각형을 완성해보세요. (예: 3 -> 111 / 222 / 333)",
      "prompt_en": "Add one line at the end of the outer while loop to increment r by 1 and complete the number square.",
      "hint_ko": "while 블록 안쪽(공백 4칸 들여쓰기)에 r += 1을 작성하세요.",
      "hint_en": "Indent by 4 spaces at the end of the while loop and write r += 1.",
      "templateCode": "n = int(input())\nr = 1\nwhile r <= n:\n    for c in range(n):\n        print(r, end=\"\")\n    print()\n    §§§§§§",
      "targetCode": "n = int(input())\nr = 1\nwhile r <= n:\n    for c in range(n):\n        print(r, end=\"\")\n    print()\n    r += 1",
      "testCases": [
        {
          "id": 1,
          "input": "3",
          "expectedOutput": "111\n222\n333"
        },
        {
          "id": 2,
          "input": "2",
          "expectedOutput": "11\n22"
        },
        {
          "id": 3,
          "input": "4",
          "expectedOutput": "1111\n2222\n3333\n4444"
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
      "hint_ko": "r=1, 2, 3일 때 cnt는 각각 1번, 2번, 3번 증가해 총 6이 되고, 마지막 r += 1로 r은 4가 된 뒤 종료됩니다.",
      "hint_en": "cnt adds 1 + 2 + 3 = 6 across r = 1, 2, 3, and r increments to 4 before while r <= 3 ends.",
      "targetCode": "r = 1\ncnt = 0\nwhile r <= 3:\n    for c in range(1, 5):\n        if c > r:\n            break\n        cnt += 1\n    r += 1\nprint(r, cnt)",
      "choices": [
        "4 6",
        "3 6",
        "4 12",
        "3 9"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "4 6"
        }
      ]
    }
  ]
};
