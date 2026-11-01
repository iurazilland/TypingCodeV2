import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_25: PracticeRound = {
  "id": "py-basic-r25",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 25,
  "title_ko": "25레벨: range(시작, 끝)과 간격(step) 활용",
  "title_en": "Level 25: range(start, stop, step) Patterns",
  "description_ko": "range(시작, 끝)과 증감 간격(step), 음수 간격을 활용한 카운트다운 반복을 익힙니다.",
  "description_en": "Master range(start, stop), custom step intervals, and countdown loops with negative steps.",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "method",
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
      "prompt_ko": "range(1, 5)를 사용해 1부터 4까지의 정수를 순서대로 출력해보세요.",
      "prompt_en": "Use range(1, 5) to print integers from 1 through 4 in order.",
      "hint_ko": "range(1, 5)는 시작값 1부터 끝값 5 직전(4)까지 순서대로 생성합니다.",
      "hint_en": "range(1, 5) starts at 1 and stops right before 5 (at 4).",
      "targetCode": "for i in range(1, 5):\n    print(i)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1\n2\n3\n4"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 끝 범위 식을 채워 1부터 입력받은 정수 n까지(n 포함) 순서대로 출력해보세요.",
      "prompt_en": "Fill in the stop expression so integers from 1 through n inclusive are printed.",
      "hint_ko": "끝값은 포함되지 않으므로 n까지 출력하려면 n보다 1 큰 식을 넣어야 합니다.",
      "hint_en": "Since stop is excluded, write n + 1 as the second argument of range().",
      "templateCode": "n = int(input())\nfor i in range(1, §§§§§):\n    print(i)",
      "targetCode": "n = int(input())\nfor i in range(1, n + 1):\n    print(i)",
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
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "range(2, 11, 2)를 사용해 2부터 10까지의 짝수를 순서대로 출력해보세요.",
      "prompt_en": "Use range(2, 11, 2) to print even numbers from 2 through 10.",
      "hint_ko": "세 번째 인자 2는 숫자가 한 번에 2씩 커지는 증가 간격(step)을 의미합니다.",
      "hint_en": "The third argument 2 sets the step increment to 2.",
      "targetCode": "for i in range(2, 11, 2):\n    print(i)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2\n4\n6\n8\n10"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 음수 간격을 채워 5부터 1까지 1씩 줄어드는 카운트다운을 출력해보세요.",
      "prompt_en": "Fill in the negative step to count down from 5 to 1 by 1.",
      "hint_ko": "5에서 1까지 1씩 감소해야 하므로 세 번째 인자에 -1을 입력하세요.",
      "hint_en": "Pass -1 as the third argument to decrease by 1 each iteration.",
      "templateCode": "for i in range(5, 0, §§):\n    print(i)",
      "targetCode": "for i in range(5, 0, -1):\n    print(i)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "5\n4\n3\n2\n1"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "정수 n을 입력받아 n부터 1까지 거꾸로 공백으로 이어 한 줄에 출력해보세요. (예: 4 -> 4 3 2 1)",
      "prompt_en": "Read integer n and count down from n to 1 on one line separated by spaces.",
      "hint_ko": "for i in range(n, 0, -1): 안에서 print(i, end=\" \")를 실행하세요.",
      "hint_en": "Run print(i, end=\" \") inside for i in range(n, 0, -1):.",
      "targetCode": "n = int(input())\nfor i in range(n, 0, -1):\n    print(i, end=\" \")",
      "testCases": [
        {
          "id": 1,
          "input": "4",
          "expectedOutput": "4 3 2 1"
        },
        {
          "id": 2,
          "input": "3",
          "expectedOutput": "3 2 1"
        },
        {
          "id": 3,
          "input": "5",
          "expectedOutput": "5 4 3 2 1"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 공백 분리 메서드를 채워 한 줄에 입력된 a부터 b까지의 모든 정수를 출력해보세요. (예: 3 6 -> 3 / 4 / 5 / 6)",
      "prompt_en": "Fill in the string-splitting method to print every integer from a through b.",
      "hint_ko": "한 줄에 공백으로 구분된 두 입력을 나눌 때는 input().split()을 사용합니다.",
      "hint_en": "Use input().split() to unpack two space-separated tokens into a and b.",
      "templateCode": "a, b = input().§§§§§()\nfor i in range(int(a), int(b) + 1):\n    print(i)",
      "targetCode": "a, b = input().split()\nfor i in range(int(a), int(b) + 1):\n    print(i)",
      "testCases": [
        {
          "id": 1,
          "input": "3 6",
          "expectedOutput": "3\n4\n5\n6"
        },
        {
          "id": 2,
          "input": "1 3",
          "expectedOutput": "1\n2\n3"
        },
        {
          "id": 3,
          "input": "5 5",
          "expectedOutput": "5"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "range(1, 5)와 거듭제곱 연산자(**)를 사용해 2의 1제곱부터 2의 4제곱까지 출력해보세요.",
      "prompt_en": "Use range(1, 5) and ** to print powers of 2 from 2**1 through 2**4.",
      "hint_ko": "for i in range(1, 5): 안에서 print(2 ** i)를 실행하면 2, 4, 8, 16이 출력됩니다.",
      "hint_en": "Inside for i in range(1, 5):, run print(2 ** i) to print 2, 4, 8, 16.",
      "targetCode": "for i in range(1, 5):\n    print(2 ** i)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2\n4\n8\n16"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸에 거듭제곱과 정수 몫 연산자를 채워 2부터 n 이하 짝수 i의 제곱과 절반 몫을 출력해보세요. (예: 4 -> 4 1 / 16 2)",
      "prompt_en": "Fill in the exponent and floor-division operators to print i squared and i floor-divided by 2.",
      "hint_ko": "거듭제곱은 ** 연산자를, 소수점 없는 정수 나눗셈 몫은 // 연산자를 사용합니다.",
      "hint_en": "Use ** for exponentiation and // for integer floor division.",
      "templateCode": "n = int(input())\nfor i in range(2, n + 1, 2):\n    print(i §§ 2, i §§ 2)",
      "targetCode": "n = int(input())\nfor i in range(2, n + 1, 2):\n    print(i ** 2, i // 2)",
      "testCases": [
        {
          "id": 1,
          "input": "4",
          "expectedOutput": "4 1\n16 2"
        },
        {
          "id": 2,
          "input": "6",
          "expectedOutput": "4 1\n16 2\n36 3"
        },
        {
          "id": 3,
          "input": "2",
          "expectedOutput": "4 1"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "한 줄에 시작값 a, 끝값 b, 간격 s를 공백으로 입력받아 range(int(a), int(b), int(s))의 각 값을 출력해보세요.",
      "prompt_en": "Read space-separated a, b, s and print each value in range(int(a), int(b), int(s)).",
      "hint_ko": "a, b, s = input().split()으로 받은 뒤 정수로 변환해 range의 세 인자에 넣으세요.",
      "hint_en": "Unpack a, b, s = input().split() and pass int(a), int(b), int(s) to range().",
      "targetCode": "a, b, s = input().split()\nfor i in range(int(a), int(b), int(s)):\n    print(i)",
      "testCases": [
        {
          "id": 1,
          "input": "1 10 3",
          "expectedOutput": "1\n4\n7"
        },
        {
          "id": 2,
          "input": "10 2 -3",
          "expectedOutput": "10\n7\n4"
        },
        {
          "id": 3,
          "input": "2 8 2",
          "expectedOutput": "2\n4\n6"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 불리언 변환 함수를 채워 3부터 0까지 감소하는 각 정수와 참/거짓 판정 결과를 함께 출력해보세요.",
      "prompt_en": "Fill in the boolean conversion function to print each integer from 3 down to 0 with its truth value.",
      "hint_ko": "0이 아닌 정수는 True, 0은 False로 변환하는 내장 함수는 bool()입니다.",
      "hint_en": "Use bool(i) to convert non-zero integers to True and 0 to False.",
      "templateCode": "for i in range(3, -1, -1):\n    print(i, §§§§(i))",
      "targetCode": "for i in range(3, -1, -1):\n    print(i, bool(i))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 True\n2 True\n1 True\n0 False"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "간격 부호 버그를 고쳐 입력받은 n부터 1까지 1씩 감소하며 출력되도록 코드를 수정해보세요.",
      "prompt_en": "Fix the step sign bug so the loop counts down from n to 1.",
      "hint_ko": "큰 수 n에서 작은 수 1까지 내려가려면 range의 세 번째 인자(간격)가 음수여야 합니다.",
      "hint_en": "When counting down toward a smaller stop value, the step argument must be negative.",
      "templateCode": "n = int(input())\nfor i in range(n, 0, 1):\n    print(i)",
      "targetCode": "n = int(input())\nfor i in range(n, 0, -1):\n    print(i)",
      "testCases": [
        {
          "id": 1,
          "input": "4",
          "expectedOutput": "4\n3\n2\n1"
        },
        {
          "id": 2,
          "input": "2",
          "expectedOutput": "2\n1"
        },
        {
          "id": 3,
          "input": "3",
          "expectedOutput": "3\n2\n1"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "반복문 안에 한 줄을 추가하여 a부터 b 이하까지 2씩 건너뛰며 나오는 정수를 순서대로 출력해보세요.",
      "prompt_en": "Add one line inside the loop to print integers stepping by 2 from a up to b.",
      "hint_ko": "공백 4칸 들여쓰기 후 print(i)를 작성하세요.",
      "hint_en": "Indent by 4 spaces and write print(i).",
      "templateCode": "a, b = input().split()\nfor i in range(int(a), int(b) + 1, 2):\n    §§§§§§§§",
      "targetCode": "a, b = input().split()\nfor i in range(int(a), int(b) + 1, 2):\n    print(i)",
      "testCases": [
        {
          "id": 1,
          "input": "1 7",
          "expectedOutput": "1\n3\n5\n7"
        },
        {
          "id": 2,
          "input": "2 8",
          "expectedOutput": "2\n4\n6\n8"
        },
        {
          "id": 3,
          "input": "3 6",
          "expectedOutput": "3\n5"
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
      "hint_ko": "i는 6, 3, 0 순서로 변합니다. 각 i에 대해 정수 몫 i // 2는 3, 1, 0이고 bool(0)만 False입니다.",
      "hint_en": "i takes 6, 3, 0; i // 2 gives 3, 1, 0 and bool(i) is True except at 0 (False).",
      "targetCode": "for i in range(6, -1, -3):\n    print(i // 2, bool(i))",
      "choices": [
        "3 True\n1 True\n0 False",
        "3 True\n1.5 True\n0 False",
        "3 True\n1 True",
        "3 True\n1 True\n0 True"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 True\n1 True\n0 False"
        }
      ]
    }
  ]
};
