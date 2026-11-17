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
  "totalQuestions": 15,
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 중첩 for 반복문으로 행(r) 0~1과 열(c) 0~2 좌표를 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the nested for loops to print (r, c) coordinates for 2 rows and 3 columns.",
      "hint_ko": "r이 0일 때 c가 0, 1, 2를 돌고, 이어서 r이 1일 때 다시 c가 0, 1, 2를 돌아 총 6번 출력됩니다.",
      "hint_en": "When r is 0, c runs 0, 1, 2; then when r is 1, c runs 0, 1, 2 again for 6 total outputs.",
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
      "prompt_ko": "[빈칸 채우기] 안쪽 반복 키워드와 곱셈식을 채워 2단과 3단의 1~3 곱셈표를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the inner loop keyword and product expression to print 2 and 3 times 1..3.",
      "hint_ko": "바깥과 동일한 세 글자 횟수 반복 키워드로 안쪽 루프를 열고, 바깥 단 변수와 안쪽 수 변수를 별표로 곱한 식을 넣으세요.",
      "hint_en": "Start the inner counted loop with the same 3-letter keyword, and multiply the outer and inner variables with an asterisk.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 안쪽 end=\"\"와 바깥 빈 print()로 2줄 4칸 별 직사각형을 출력해보세요.",
      "prompt_en": "[Block] Use end=\"\" in the inner loop and print() in the outer loop to draw a 2x4 grid.",
      "hint_ko": "빈 print()는 안쪽 for문과 같은 들여쓰기(4칸) 위치에 두어야 한 줄(4칸)이 완성될 때마다 줄바꿈이 일어납니다.",
      "hint_en": "Place the empty print() at the same 4-space indentation as the inner for header so a newline happens once per row.",
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
      "prompt_ko": "[빈칸 채우기] 범위 함수와 반복 키워드를 채워 세로 h줄, 가로 w칸의 \"#\" 격자를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in range and for to render an h-by-w \"#\" grid.",
      "hint_ko": "바깥 루프에는 다섯 글자 범위 함수 range를, 안쪽 루프 시작에는 세 글자 반복 키워드 for를 채워보세요.",
      "hint_en": "Use range on line 2 and for on line 3 to complete the nested grid loops.",
      "templateCode": "h, w = input().split()\nfor r in §§§§§(int(h)):\n    §§§ c in range(int(w)):\n        print(\"#\", end=\"\")\n    print()",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 안쪽 반복 횟수를 바깥 행 변수 r에 연동해 별 계단을 출력해보세요.",
      "prompt_en": "[Block] Link the inner loop bound to r (for c in range(r):) to print a star staircase.",
      "hint_ko": "r이 1부터 n까지 커짐에 따라 안쪽 루프가 1번, 2번, ..., n번 반복되며 별을 가로로 찍습니다.",
      "hint_en": "As r grows from 1 through n, the inner loop repeats 1, 2, ..., n times across each row.",
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
      "prompt_ko": "[빈칸 채우기] 감소 간격과 안쪽 반복 횟수를 채워 n개부터 1개까지 역삼각형 별을 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the negative step and inner bound variable to print an inverted triangle.",
      "hint_ko": "바깥 층수가 1씩 줄어들도록 -1 간격을 넣고, 안쪽 범위에는 현재 행 변수 r을 넣어보세요.",
      "hint_en": "Pass -1 as the step to count rows down, and pass r as the inner repeat count.",
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
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] (r + c) % 2 == 0 조건으로 O와 X가 번갈아 나오는 격자를 출력해보세요.",
      "prompt_en": "[Block] Alternate \"O\" and \"X\" across an n-by-n grid using (r + c) % 2 == 0.",
      "hint_ko": "안쪽 if - else에서는 end=\"\"로 가로 출력을 이어가고, 한 행이 끝나면 바깥 print()로 줄을 바꿉니다.",
      "hint_en": "Both branches inside the inner loop use end=\"\", and the outer print() starts a new row.",
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
      "prompt_ko": "[빈칸 채우기] 같음 비교 기호와 분기 키워드를 채워 대각선만 \"1\", 나머지는 \"0\"인 격자를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in == and else to print \"1\" on the diagonal (r == c) and \"0\" elsewhere.",
      "hint_ko": "행 번호 r과 열 번호 c가 같은지 ==로 비교하고, 다를 때는 else: 분기로 \"0\"을 출력해보세요.",
      "hint_en": "Compare r and c with == on line 4, and write else on line 6.",
      "templateCode": "n = int(input())\nfor r in range(n):\n    for c in range(n):\n        if r §§ c:\n            print(\"1\", end=\"\")\n        §§§§:\n            print(\"0\", end=\"\")\n    print()",
      "targetCode": "n = int(input())\nfor r in range(n):\n    for c in range(n):\n        if r == c:\n            print(\"1\", end=\"\")\n        else:\n            print(\"0\", end=\"\")\n    print()",
      "testCases": [
        {
          "id": 1,
          "input": "3",
          "expectedOutput": "100\n010\n001"
        },
        {
          "id": 2,
          "input": "2",
          "expectedOutput": "10\n01"
        },
        {
          "id": 3,
          "input": "4",
          "expectedOutput": "1000\n0100\n0010\n0001"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 안쪽 루프에서 c > r일 때 break로 탈출해 숫자 계단을 출력해보세요.",
      "prompt_en": "[Block] Break out of the inner loop when c > r to print a number triangle.",
      "hint_ko": "열 번호 c가 현재 행 번호 r보다 커지는 순간 안쪽 루프를 탈출하고 print()로 줄을 바꿉니다.",
      "hint_en": "As soon as column c exceeds row r, break exits the inner loop and print() moves to the next line.",
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
      "prompt_ko": "[빈칸 채우기] 종료 키워드와 누적 연산자를 채워 각 행에서 c <= r인 수들의 총합을 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in break and += to sum c across each row while c <= r.",
      "hint_ko": "c가 r보다 커지면 break로 안쪽 루프만 멈추고, 그전까지는 total += c로 누적해보세요.",
      "hint_en": "Use break when c > r, and accumulate c onto total using +=.",
      "templateCode": "n = int(input())\ntotal = 0\nfor r in range(1, n + 1):\n    for c in range(1, n + 1):\n        if c > r:\n            §§§§§\n        total §§ c\nprint(total)",
      "targetCode": "n = int(input())\ntotal = 0\nfor r in range(1, n + 1):\n    for c in range(1, n + 1):\n        if c > r:\n            break\n        total += c\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "3",
          "expectedOutput": "10"
        },
        {
          "id": 2,
          "input": "2",
          "expectedOutput": "4"
        },
        {
          "id": 3,
          "input": "4",
          "expectedOutput": "20"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 안쪽 반복 범위를 고쳐 1층에 1개부터 n층에 n개까지 별 계단이 출력되게 해보세요.",
      "prompt_en": "[Fix Bug] Fix the inner loop range variable so a 1..n star staircase is printed.",
      "hint_ko": "안쪽 반복 횟수가 range(n)으로 고정되어 있습니다. 현재 행 번호만큼 반복하도록 range(r)로 고쳐보세요.",
      "hint_en": "Change range(n) to range(r) on line 3 so each row prints r stars.",
      "templateCode": "n = int(input())\nfor r in range(1, n + 1):\n    for c in range(n):\n        print(\"*\", end=\"\")\n    print()",
      "targetCode": "n = int(input())\nfor r in range(1, n + 1):\n    for c in range(r):\n        print(\"*\", end=\"\")\n    print()",
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
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 열 번호 c가 행 번호 r보다 커질 때 안쪽 루프를 탈출하도록 부등호를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the comparison operator in if c > r: so the inner loop breaks after column r.",
      "hint_ko": "if c < r:이 아니라 c가 r보다 커질 때 멈추도록 if c > r:로 부등호 방향을 고쳐보세요.",
      "hint_en": "Change if c < r: to if c > r: so columns 1..r print before breaking.",
      "templateCode": "n = int(input())\nfor r in range(1, n + 1):\n    for c in range(1, n + 1):\n        if c < r:\n            break\n        print(c, end=\"\")\n    print()",
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
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 바깥 while 반복문 마지막에 행 번호 r을 1씩 증가시키는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the 4-space indented line incrementing r by 1 at the end of while.",
      "hint_ko": "한 행 출력이 끝난 뒤 다음 행 번호로 넘어가도록 바깥 반복문 들여쓰기에 맞춰 r += 1을 작성해보세요.",
      "hint_en": "Indent to the outer loop level at the bottom and write r += 1.",
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
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 바깥 행 변수 r만큼 반복하는 안쪽 for 반복문 헤더(변수 c) 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the 4-space indented inner loop header for c in range(r):.",
      "hint_ko": "4칸 들여쓰기 뒤에 for c in range(r):을 작성해보세요.",
      "hint_en": "Keep the 4-space indentation and write for c in range(r):.",
      "templateCode": "n = int(input())\nfor r in range(1, n + 1):\n    §§§§§§§§§§§§§§§§§§\n        print(r, end=\"\")\n    print()",
      "targetCode": "n = int(input())\nfor r in range(1, n + 1):\n    for c in range(r):\n        print(r, end=\"\")\n    print()",
      "testCases": [
        {
          "id": 1,
          "input": "3",
          "expectedOutput": "1\n22\n333"
        },
        {
          "id": 2,
          "input": "4",
          "expectedOutput": "1\n22\n333\n4444"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 파이썬 코드를 실행했을 때 출력될 알맞은 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output produced when the following Python code runs.",
      "hint_ko": "각 행마다 안쪽 탈출 조건에 걸리기 전까지 카운터가 몇 번씩 늘어나는지 더해보고, 바깥 반복이 멈춘 직후의 행 변수 값도 확인해보세요.",
      "hint_en": "Count how many inner turns increment cnt on each row before exiting, and check what value r holds after the outer loop ends.",
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
