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
  "totalQuestions": 15,
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] for i in range(4): 반복문으로 0부터 3까지 차례대로 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the blocks to print integers 0 through 3 using for i in range(4):.",
      "hint_ko": "range(4)는 끝값 4를 포함하지 않고 0, 1, 2, 3 네 개의 숫자를 순서대로 만들어 냅니다.",
      "hint_en": "range(4) excludes the stop value 4 and generates the four integers 0, 1, 2, 3 in sequence.",
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
      "prompt_ko": "[빈칸 채우기] 두 빈칸에 반복문 키워드를 채워 0부터 2까지의 정수를 차례대로 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the two loop keywords to print integers from 0 through 2.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] for 반복문 안에서 \"Ready\"와 반복 변수 i를 함께 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the blocks to print \"Ready\" and loop variable i across range(3).",
      "hint_ko": "range(3)으로 3번 반복되는 동안 i의 값이 0, 1, 2로 변하며 \"Ready\" 뒤에 나란히 출력됩니다.",
      "hint_en": "Across the 3 iterations of range(3), i changes from 0 to 1 to 2 and prints next to \"Ready\".",
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
      "prompt_ko": "[빈칸 채우기] 빈칸에 숫자 범위를 만드는 함수를 채워 \"Hello\"를 총 4번 반복 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the range-generating function name to print \"Hello\" 4 times.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] i + 1 수식을 사용해 1부터 n까지의 자연수를 순서대로 출력해보세요.",
      "prompt_en": "[Block] Use i + 1 inside print() to output 1 through n in order.",
      "hint_ko": "i가 0, 1, ..., n-1로 변할 때 i + 1은 1, 2, ..., n이 되어 출력됩니다.",
      "hint_en": "As i steps through 0, 1, ..., n-1, the expression i + 1 evaluates to 1, 2, ..., n.",
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
      "prompt_ko": "[빈칸 채우기] 반복 키워드와 범위 함수를 채워 0부터 n-1까지 한 줄에 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the loop keyword and range function to print 0..n-1 on one line.",
      "hint_ko": "둘째 줄의 첫 빈칸에는 세 글자 반복 키워드 for를, 둘째 빈칸에는 다섯 글자 범위 함수 range를 채워보세요.",
      "hint_en": "Enter the 3-letter loop keyword for and the 5-letter function range on line 2.",
      "templateCode": "n = int(input())\n§§§ i in §§§§§(n):\n    print(i, end=\" \")",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] \"*\" * (i + 1)로 별 개수가 1개씩 늘어나는 계단을 출력해보세요.",
      "prompt_en": "[Block] Combine \"*\" * (i + 1) inside a for loop to print a growing star staircase.",
      "hint_ko": "덧셈을 먼저 계산하도록 (i + 1)에 괄호를 씌운 뒤 \"*\" 문자열에 곱해 반복 횟수를 지정합니다.",
      "hint_en": "Wrap (i + 1) in parentheses so addition runs before multiplying with the \"*\" string.",
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
      "prompt_ko": "[빈칸 채우기] 문자열 반복 연산자를 채워 줄마다 \"-\"가 i개씩 붙은 화살표를 n줄 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the string repetition operator to print n lines of arrows.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] for 반복문 안에 if - else를 넣어 i의 짝수·홀수를 판별해 출력해보세요.",
      "prompt_en": "[Block] Nest an if - else inside a for loop to print Even or Odd for each i.",
      "hint_ko": "반복문 안에 조건문이 들어갈 때는 들여쓰기가 한 단계씩 더 깊어지며 매 차례마다 조건 검사가 수행됩니다.",
      "hint_en": "Statements inside the nested conditional are indented one level deeper and evaluated on every loop iteration.",
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
      "prompt_ko": "[빈칸 채우기] 두 빈칸을 채워 i가 0이면 \"Start\", 그 외에는 \"Lv.\" + s를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in both blanks to print \"Start\" for 0 and \"Lv.\" + s otherwise.",
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
      "prompt_ko": "[틀린 곳 수정] 1부터 n까지의 자연수가 순서대로 출력되도록 print() 안의 연산 기호를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the arithmetic operator inside print() so 1 through n are printed.",
      "hint_ko": "0부터 시작하는 i를 1부터 시작하게 바꾸려면 1을 빼는 것이 아니라 1을 더해야(i + 1) 합니다.",
      "hint_en": "Change i - 1 to i + 1 so 0..n-1 shifts upward to 1..n.",
      "templateCode": "n = int(input())\nfor i in range(n):\n    print(i - 1)",
      "targetCode": "n = int(input())\nfor i in range(n):\n    print(i + 1)",
      "testCases": [
        {
          "id": 1,
          "input": "4",
          "expectedOutput": "1\n2\n3\n4"
        },
        {
          "id": 2,
          "input": "3",
          "expectedOutput": "1\n2\n3"
        },
        {
          "id": 3,
          "input": "2",
          "expectedOutput": "1\n2"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 짝수일 때 Even, 홀수일 때 Odd가 출력되도록 if 조건의 나머지 비교값을 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the remainder value in the if condition so even numbers print Even.",
      "hint_ko": "i % 2 == 1은 홀수 조건입니다. 짝수일 때 Even이 출력되도록 i % 2 == 0으로 고쳐보세요.",
      "hint_en": "Change i % 2 == 1 to i % 2 == 0 so even indices match the first branch.",
      "templateCode": "n = int(input())\nfor i in range(n):\n    if i % 2 == 1:\n        print(i, \"Even\")\n    else:\n        print(i, \"Odd\")",
      "targetCode": "n = int(input())\nfor i in range(n):\n    if i % 2 == 0:\n        print(i, \"Even\")\n    else:\n        print(i, \"Odd\")",
      "testCases": [
        {
          "id": 1,
          "input": "3",
          "expectedOutput": "0 Even\n1 Odd\n2 Even"
        },
        {
          "id": 2,
          "input": "2",
          "expectedOutput": "0 Even\n1 Odd"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 0부터 n-1까지 변수 i로 반복하는 for 반복문 헤더 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the for loop header iterating i over range(n).",
      "hint_ko": "for i in range(n): 형태로 반복문 헤더와 콜론(:)을 작성해보세요.",
      "hint_en": "Write for i in range(n): including the trailing colon.",
      "templateCode": "n = int(input())\n§§§§§§§§§§§§§§§§§§\n    print(i * 2, end=\" \")",
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
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 반복문 안에서 \"*\"를 (i + 1)번 반복한 문자열을 변수 line에 대입하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the indented line assigning \"*\" * (i + 1) to variable line.",
      "hint_ko": "4칸 들여쓰기 뒤에 line = \"*\" * (i + 1)을 작성해보세요.",
      "hint_en": "Keep the 4-space indentation and write line = \"*\" * (i + 1).",
      "templateCode": "n = int(input())\nfor i in range(n):\n    §§§§§§§§§§§§§§§§§§§§\n    print(line)",
      "targetCode": "n = int(input())\nfor i in range(n):\n    line = \"*\" * (i + 1)\n    print(line)",
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
