import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_26: PracticeRound = {
  "id": "py-basic-r26",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 26,
  "title_ko": "26레벨: for 반복문과 누적 연산",
  "title_en": "Level 26: for Loops & Accumulator Pattern",
  "description_ko": "누적 합계(+=), 누적 곱셈(*=), 개수 세기(+= 1) 패턴과 평균 계산을 실습합니다.",
  "description_en": "Practice sum (+=), product (*=), and counter (+= 1) accumulators along with float averages.",
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
      "prompt_ko": "total을 0으로 초기화하고 1부터 5까지 차례로 더한 최종 합계(15)를 출력해보세요.",
      "prompt_en": "Initialize total to 0, accumulate 1 through 5, and print the final sum (15).",
      "hint_ko": "반복문 전에 total = 0을 만들고 range(1, 6) 안에서 total += i를 실행한 뒤 밖에서 출력하세요.",
      "hint_en": "Set total = 0 before the loop, run total += i inside range(1, 6), then print total.",
      "targetCode": "total = 0\nfor i in range(1, 6):\n    total += i\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "15"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "덧셈 누적 변수의 초기값과 복합 대입 연산자를 채워 1부터 n까지의 합을 출력해보세요.",
      "prompt_en": "Fill in the initial sum value and compound operator to print the sum from 1 through n.",
      "hint_ko": "합계 누적 변수는 0으로 시작하며 매 반복마다 += 연산자로 i를 더합니다.",
      "hint_en": "Start a sum accumulator at 0 and add each i using +=.",
      "templateCode": "n = int(input())\ntotal = §\nfor i in range(1, n + 1):\n    total §§ i\nprint(total)",
      "targetCode": "n = int(input())\ntotal = 0\nfor i in range(1, n + 1):\n    total += i\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "4",
          "expectedOutput": "10"
        },
        {
          "id": 2,
          "input": "10",
          "expectedOutput": "55"
        },
        {
          "id": 3,
          "input": "6",
          "expectedOutput": "21"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "prod를 1로 초기화하고 1부터 4까지 차례로 곱한 결과(24)를 출력해보세요.",
      "prompt_en": "Initialize prod to 1, multiply by 1 through 4 in order, and print 24.",
      "hint_ko": "곱셈 누적은 초기값을 1로 두고 range(1, 5) 안에서 prod *= i를 실행합니다.",
      "hint_en": "Set prod = 1 before the loop and run prod *= i inside range(1, 5).",
      "targetCode": "prod = 1\nfor i in range(1, 5):\n    prod *= i\nprint(prod)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "24"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "곱셈 누적 변수의 초기값과 복합 대입 연산자를 채워 1부터 n까지 모두 곱한 값을 출력해보세요.",
      "prompt_en": "Fill in the initial product value and compound operator to compute 1 * 2 * ... * n.",
      "hint_ko": "곱셈 누적 변수는 1로 시작해야 하며 *= 연산자로 i를 차례대로 곱합니다.",
      "hint_en": "Start a product accumulator at 1 and multiply each i using *=.",
      "templateCode": "n = int(input())\nprod = §\nfor i in range(1, n + 1):\n    prod §§ i\nprint(prod)",
      "targetCode": "n = int(input())\nprod = 1\nfor i in range(1, n + 1):\n    prod *= i\nprint(prod)",
      "testCases": [
        {
          "id": 1,
          "input": "5",
          "expectedOutput": "120"
        },
        {
          "id": 2,
          "input": "3",
          "expectedOutput": "6"
        },
        {
          "id": 3,
          "input": "4",
          "expectedOutput": "24"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "정수 n을 입력받아 3부터 n 이하의 3의 배수가 총 몇 개인지 count에 1씩 세어 출력해보세요.",
      "prompt_en": "Read integer n and count how many multiples of 3 are in 3..n by adding 1 to count.",
      "hint_ko": "count = 0으로 시작해 for i in range(3, n + 1, 3): 안에서 count += 1을 실행하세요.",
      "hint_en": "Initialize count = 0 and run count += 1 inside for i in range(3, n + 1, 3):.",
      "targetCode": "n = int(input())\ncount = 0\nfor i in range(3, n + 1, 3):\n    count += 1\nprint(count)",
      "testCases": [
        {
          "id": 1,
          "input": "10",
          "expectedOutput": "3"
        },
        {
          "id": 2,
          "input": "15",
          "expectedOutput": "5"
        },
        {
          "id": 3,
          "input": "5",
          "expectedOutput": "1"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 복합 대입 연산자를 채워 2부터 n 이하 짝수의 개수(count)와 합계(total)를 함께 출력해보세요.",
      "prompt_en": "Fill in the compound assignment operator to print both the count and sum of evens in 2..n.",
      "hint_ko": "개수를 셀 때는 반복할 때마다 1씩 늘어나도록 += 연산자를 사용합니다.",
      "hint_en": "Use += to add 1 to count on each iteration.",
      "templateCode": "n = int(input())\ntotal = 0\ncount = 0\nfor i in range(2, n + 1, 2):\n    total += i\n    count §§ 1\nprint(count, total)",
      "targetCode": "n = int(input())\ntotal = 0\ncount = 0\nfor i in range(2, n + 1, 2):\n    total += i\n    count += 1\nprint(count, total)",
      "testCases": [
        {
          "id": 1,
          "input": "6",
          "expectedOutput": "3 12"
        },
        {
          "id": 2,
          "input": "10",
          "expectedOutput": "5 30"
        },
        {
          "id": 3,
          "input": "4",
          "expectedOutput": "2 6"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "개수 n을 입력받고 이어서 n개의 실수를 float(input())으로 더한 뒤 평균(total / n)을 출력해보세요.",
      "prompt_en": "Read integer n followed by n floats, accumulate their sum, and print total / n.",
      "hint_ko": "total = 0.0으로 두고 range(n) 안에서 x = float(input())과 total += x를 실행한 뒤 total / n을 출력하세요.",
      "hint_en": "Start total = 0.0, add x = float(input()) n times, then print total / n.",
      "targetCode": "n = int(input())\ntotal = 0.0\nfor i in range(n):\n    x = float(input())\n    total += x\nprint(total / n)",
      "testCases": [
        {
          "id": 1,
          "input": "2\n3.0\n5.0",
          "expectedOutput": "4.0"
        },
        {
          "id": 2,
          "input": "4\n1.5\n2.5\n3.0\n5.0",
          "expectedOutput": "3.0"
        },
        {
          "id": 3,
          "input": "2\n2.5\n4.5",
          "expectedOutput": "3.5"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "실수 변환 함수와 나눗셈 연산자를 채워 입력된 n개 실수의 평균값을 계산해 출력해보세요.",
      "prompt_en": "Fill in the float conversion function and division operator to compute the average of n floats.",
      "hint_ko": "문자열 입력을 실수로 바꿀 때는 float()를, 실수 평균 나눗셈에는 / 연산자를 씁니다.",
      "hint_en": "Use float() to parse each decimal number and / to divide total by n.",
      "templateCode": "n = int(input())\ntotal = 0.0\nfor i in range(n):\n    total += §§§§§(input())\nprint(total § n)",
      "targetCode": "n = int(input())\ntotal = 0.0\nfor i in range(n):\n    total += float(input())\nprint(total / n)",
      "testCases": [
        {
          "id": 1,
          "input": "2\n10.0\n20.0",
          "expectedOutput": "15.0"
        },
        {
          "id": 2,
          "input": "4\n2.0\n4.0\n6.0\n8.0",
          "expectedOutput": "5.0"
        },
        {
          "id": 3,
          "input": "2\n1.5\n3.5",
          "expectedOutput": "2.5"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "n개의 정수를 입력받아 합산한 뒤 total >= 100이면 \"Goal:\" + str(total), 아니면 \"Short:\" + str(total)을 출력해보세요.",
      "prompt_en": "Sum n input integers, then print \"Goal:\" + str(total) if total >= 100 or \"Short:\" + str(total) otherwise.",
      "hint_ko": "반복문이 끝난 뒤 if total >= 100:과 else:로 나누어 str(total)을 이어 붙여 출력하세요.",
      "hint_en": "After the loop, branch on if total >= 100: and concatenate str(total).",
      "targetCode": "n = int(input())\ntotal = 0\nfor i in range(n):\n    total += int(input())\nif total >= 100:\n    print(\"Goal:\" + str(total))\nelse:\n    print(\"Short:\" + str(total))",
      "testCases": [
        {
          "id": 1,
          "input": "3\n40\n35\n30",
          "expectedOutput": "Goal:105"
        },
        {
          "id": 2,
          "input": "2\n50\n40",
          "expectedOutput": "Short:90"
        },
        {
          "id": 3,
          "input": "2\n60\n40",
          "expectedOutput": "Goal:100"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 문자열 변환 함수를 채워 1부터 n까지의 숫자를 이어 붙인 코드 문자열을 출력해보세요. (예: 4 -> ID-1234)",
      "prompt_en": "Fill in the string conversion function to concatenate 1..n into an ID string.",
      "hint_ko": "빈 문자열 code에 정수 i를 이어 붙이려면 str(i)로 변환해 += 연산해야 합니다.",
      "hint_en": "Convert integer i with str(i) before appending it to the string accumulator code.",
      "templateCode": "n = int(input())\ncode = \"\"\nfor i in range(1, n + 1):\n    code += §§§(i)\nprint(\"ID-\" + code)",
      "targetCode": "n = int(input())\ncode = \"\"\nfor i in range(1, n + 1):\n    code += str(i)\nprint(\"ID-\" + code)",
      "testCases": [
        {
          "id": 1,
          "input": "4",
          "expectedOutput": "ID-1234"
        },
        {
          "id": 2,
          "input": "3",
          "expectedOutput": "ID-123"
        },
        {
          "id": 3,
          "input": "5",
          "expectedOutput": "ID-12345"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "누적 변수 초기값 버그를 고쳐 1부터 n까지의 곱셈 결과가 0이 아닌 올바른 값으로 출력되게 해보세요.",
      "prompt_en": "Fix the accumulator initial value bug so the product of 1..n does not evaluate to 0.",
      "hint_ko": "곱셈 누적 변수를 0으로 시작하면 어떤 수를 곱해도 계속 0이 됩니다.",
      "hint_en": "Starting a multiplication accumulator at 0 makes every product 0; initialize it to 1.",
      "templateCode": "n = int(input())\nprod = 0\nfor i in range(1, n + 1):\n    prod *= i\nprint(prod)",
      "targetCode": "n = int(input())\nprod = 1\nfor i in range(1, n + 1):\n    prod *= i\nprint(prod)",
      "testCases": [
        {
          "id": 1,
          "input": "4",
          "expectedOutput": "24"
        },
        {
          "id": 2,
          "input": "5",
          "expectedOutput": "120"
        },
        {
          "id": 3,
          "input": "3",
          "expectedOutput": "6"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "반복문 아래에 한 줄을 추가하여 누적된 합계 total을 개수 n으로 나눈 평균을 출력해보세요. (예: 2, 10, 20 -> 15.0)",
      "prompt_en": "Add one line after the loop to print the average total / n.",
      "hint_ko": "반복문이 끝난 뒤 들여쓰기 없이 print(total / n)을 작성하세요.",
      "hint_en": "Without indentation after the loop, write print(total / n).",
      "templateCode": "n = int(input())\ntotal = 0\nfor i in range(n):\n    total += int(input())\n§§§§§§§§§§§§§§§§",
      "targetCode": "n = int(input())\ntotal = 0\nfor i in range(n):\n    total += int(input())\nprint(total / n)",
      "testCases": [
        {
          "id": 1,
          "input": "2\n10\n20",
          "expectedOutput": "15.0"
        },
        {
          "id": 2,
          "input": "4\n10\n20\n30\n40",
          "expectedOutput": "25.0"
        },
        {
          "id": 3,
          "input": "2\n5\n8",
          "expectedOutput": "6.5"
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
      "hint_ko": "range(1, 6, 2)는 1, 3, 5 세 번 반복하므로 count는 3, total은 1+3+5=9가 됩니다.",
      "hint_en": "range(1, 6, 2) visits 1, 3, 5, making count = 3 and total = 9.",
      "targetCode": "total = 0\ncount = 0\nfor i in range(1, 6, 2):\n    total += i\n    count += 1\nprint(str(count) + \":\" + str(total))",
      "choices": [
        "3:9",
        "3:15",
        "5:15",
        "2:4"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3:9"
        }
      ]
    }
  ]
};
