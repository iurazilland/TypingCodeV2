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
      "hint_ko": "바깥 행 반복이 한 차례 돌 때마다 안쪽 열 반복이 처음부터 끝까지 모두 실행된 뒤 다음 행으로 넘어갑니다.",
      "hint_en": "For each single turn of the outer row loop, the inner column loop runs all the way through its sequence.",
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
      "prompt_ko": "중첩 for문과 end=\"\" 및 바깥 print()를 사용해 2줄 4칸짜리 별(\"*\") 직사각형을 출력해보세요.",
      "prompt_en": "Use nested for loops, end=\"\", and an outer print() to print a 2-by-4 rectangle of stars.",
      "hint_ko": "안쪽 루프에서는 줄바꿈 없이 별을 가로로 이어 찍고, 안쪽 루프가 끝나는 바깥 들여쓰기 위치에서 빈 출력문으로 줄을 바꾸세요.",
      "hint_en": "Suppress newlines inside the inner loop to print stars across, then place an empty output call at outer indentation per row.",
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
      "hint_ko": "'끝·마무리'를 뜻하는 세 글자 옵션으로 가로 출력을 이어가고, 안쪽 반복 직후에는 괄호 안을 비운 출력 함수를 호출해 줄을 바꾸세요.",
      "hint_en": "Use the 3-letter \"finish\" option inside the inner call, then invoke the 5-letter output function with empty parentheses per row.",
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
      "hint_ko": "바깥 행 번호가 1부터 n까지 커질 때 안쪽 반복 횟수를 현재 행 번호만큼 주면 줄마다 별 개수가 1개씩 늘어납니다.",
      "hint_en": "Let the outer row variable run from 1 through n, and pass that row variable to the inner range before changing lines.",
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
      "hint_ko": "같은 줄의 마지막 값 전까지는 줄바꿈 대신 공백이 붙도록 '끝·마무리'를 뜻하는 세 글자 출력 옵션을 채워보세요.",
      "hint_en": "Use the 3-letter print option meaning \"finish\" so values before the last column stay on one line separated by a space.",
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
      "hint_ko": "안쪽 반복에서 행과 열의 합이 짝수인지 분기해 줄바꿈 없이 문자를 찍고, 한 행이 끝날 때마다 바깥에서 줄을 바꾸세요.",
      "hint_en": "Branch on whether r + c is even inside the inner loop without newlines, then advance to the next line once per outer row.",
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
      "prompt_ko": "누적 덧셈 연산자와 문자열 변환 함수를 채워 합계를 res에 문자열로 저장한 뒤 \"Sum:\" + res를 출력해보세요.",
      "prompt_en": "Fill in the compound addition operator and string conversion function to store res = str(total) and print \"Sum:\" + res.",
      "hint_ko": "덧셈 기호와 등호를 나란히 붙인 복합 연산자로 곱을 누적하고, 문자열(string)의 앞 세 글자를 딴 함수로 합계를 변환해 res에 저장하세요.",
      "hint_en": "Accumulate each product with the plus-equals operator, then convert the total using the first 3 letters of \"string\".",
      "templateCode": "a, b = input().split()\ntotal = 0\nfor r in range(1, int(a) + 1):\n    for c in range(1, int(b) + 1):\n        total §§ r * c\nres = §§§(total)\nprint(\"Sum:\" + res)",
      "targetCode": "a, b = input().split()\ntotal = 0\nfor r in range(1, int(a) + 1):\n    for c in range(1, int(b) + 1):\n        total += r * c\nres = str(total)\nprint(\"Sum:\" + res)",
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
      "hint_ko": "안쪽 열 번호가 현재 행 번호보다 커지는 즉시 안쪽 반복만 종료하고, 바깥 반복 끝에서 줄을 바꿔 다음 층을 출력하세요.",
      "hint_en": "Exit only the inner loop as soon as column c exceeds row r, printing c across the row before advancing the line outside.",
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
      "hint_ko": "바깥 층수가 1씩 줄어들도록 뺄셈 부호가 붙은 단위 간격을 넣고, 안쪽 범위에는 현재 바깥 행 변수를 넣어보세요.",
      "hint_en": "Pass a minus-signed unit step to count rows down by one, and pass the outer row variable as the inner repeat count.",
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
      "hint_ko": "줄바꿈용 빈 출력문이 안쪽 반복문 내부에 함께 들여써져 있어서 별을 하나 찍을 때마다 줄이 바뀌고 있습니다.",
      "hint_en": "Because the empty newline call is indented inside the inner loop, every single star forces a line break instead of once per row.",
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
      "hint_ko": "한 행 출력이 끝난 뒤 다음 행 번호로 넘어가도록 바깥 반복문 들여쓰기에 맞춰 행 변수를 1 증가시켜 보세요.",
      "hint_en": "Indent to the outer loop level at the bottom and increment the row variable by one so the loop advances.",
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
