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
      "hint_ko": "반복문 시작 전에 합계 변수를 초기화하고, 반복 블록 안에서 값을 누적한 뒤 바깥에서 최종 합계를 출력하세요.",
      "hint_en": "Initialize the sum variable before the loop, add each value inside the loop, and print the total outside.",
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
      "hint_ko": "더해도 값이 변하지 않는 출발 숫자로 초기화한 뒤, 덧셈 기호와 등호를 나란히 붙인 복합 대입 연산자로 누적해보세요.",
      "hint_en": "Start the sum accumulator at the additive identity digit, then combine the plus sign and equals sign to add each i.",
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
      "hint_ko": "반복문 밖에서 곱셈의 출발값을 먼저 정하고, 반복문 안에서 차례로 곱한 뒤 반복이 끝나면 결과를 출력하세요.",
      "hint_en": "Initialize the product variable before the loop, multiply each value inside the body, and print it after the loop.",
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
      "hint_ko": "곱해도 값이 0이 되지 않는 곱셈 항등원 숫자로 시작하고, 별표와 등호를 나란히 붙인 복합 대입 연산자로 곱해보세요.",
      "hint_en": "Start at the multiplicative identity digit so the product stays non-zero, using the asterisk-plus-equals operator.",
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
      "hint_ko": "개수 변수를 0에서 출발시켜 3씩 건너뛰는 반복문 안에서 매번 1씩 누적하고, 반복이 끝난 뒤 개수를 출력하세요.",
      "hint_en": "Start the counter at zero, add 1 on every turn of the step-3 loop, and print the final count outside.",
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
      "hint_ko": "짝수를 만날 때마다 개수를 1씩 늘리도록 덧셈 기호와 등호를 나란히 붙인 복합 대입 연산자를 채워보세요.",
      "hint_en": "Combine the plus sign and equals sign into a compound assignment operator to increment the count each turn.",
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
      "hint_ko": "반복문 안에서 실수로 변환한 입력값을 합계 변수에 차곡차곡 더하고, 반복문 밖에서 전체 합을 개수로 나누어 출력하세요.",
      "hint_en": "Accumulate each floating-point input inside the loop, then divide the final sum by n outside the loop.",
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
      "hint_ko": "부동소수점(floating-point)의 앞 다섯 글자를 딴 실수 변환 함수와, 소수점 결과를 내는 슬래시 나눗셈 기호를 채워보세요.",
      "hint_en": "Use the conversion function from the first 5 letters of \"floating-point\" and the single-slash division symbol.",
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
      "hint_ko": "반복문에서 합산을 모두 마친 뒤 바깥에서 기준값 이상인지 분기하고, 정수 합계를 문자열로 변환해 접두사와 이어 붙이세요.",
      "hint_en": "Finish summing inside the loop first, then branch on the threshold outside and join the text-converted sum.",
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
      "hint_ko": "문자열 변수 뒤에 정수 i를 이어 붙일 수 있도록 문자열(string)의 앞 세 글자를 딴 변환 함수를 채워보세요.",
      "hint_en": "Wrap the integer loop variable in the conversion function named from the first 3 letters of \"string\".",
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
      "hint_ko": "곱셈 누적 변수가 0에서 출발하고 있어 뒤에 어떤 숫자를 곱해도 결과가 계속 0으로 고정되는 버그입니다.",
      "hint_en": "Starting a product accumulator at zero forces every multiplication result to remain zero; fix the initial value.",
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
      "hint_ko": "합산 반복이 모두 끝난 뒤 한 번만 실행되도록 들여쓰기 없이 누적 합계를 개수로 나눈 실수 평균을 출력해보세요.",
      "hint_en": "Without indentation after the loop ends, output the accumulated sum divided by the count.",
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
      "hint_ko": "1부터 6 직전까지 2씩 건너뛰며 선택되는 숫자들을 차례로 적고, 반복 횟수(count)와 누적 합(total)을 각각 계산해보세요.",
      "hint_en": "List the numbers visited from 1 up to right before 6 with step 2, then track both the turn count and running sum.",
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
