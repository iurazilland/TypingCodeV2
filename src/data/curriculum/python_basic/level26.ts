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
      "prompt_ko": "[블록 조립] 누적 변수 total에 1부터 5까지 더한 합계를 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the blocks to accumulate the sum of 1..5 in total and print it.",
      "hint_ko": "최종 합계 출력문은 반복이 모두 끝난 뒤 한 번만 실행되도록 for 블록 바깥 아래에 놓습니다.",
      "hint_en": "Place the final print(total) outside below the for block so the sum is printed once after all iterations finish.",
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
      "prompt_ko": "[빈칸 채우기] 초기값과 복합 대입 연산자를 채워 1부터 n까지의 합을 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the initial sum value and compound operator to sum 1..n.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] prod를 1로 초기화하고 1부터 4까지 차례로 곱해 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Initialize prod = 1 and multiply 1..4 using *= inside the loop.",
      "hint_ko": "초기값을 0으로 두면 어떤 수를 곱해도 계속 0이 되므로 곱셈 누적은 반드시 1에서 출발해야 합니다.",
      "hint_en": "Starting at 0 would keep every product at 0, so a multiplication accumulator must start at 1.",
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
      "prompt_ko": "[빈칸 채우기] 곱셈 초기값과 복합 대입 연산자를 채워 1부터 n까지의 곱을 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the initial product value and compound operator for 1..n.",
      "hint_ko": "곱해도 값이 변하지 않는 한 자리 숫자로 시작하고, 별표와 등호를 나란히 붙인 복합 대입 연산자로 곱해보세요.",
      "hint_en": "Start with the single digit that leaves any number unchanged when multiplied, then use the asterisk-equals operator.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] count += 1로 n 이하 3의 배수가 총 몇 개인지 세어 출력해보세요.",
      "prompt_en": "[Block] Use count += 1 to count how many multiples of 3 exist up to n.",
      "hint_ko": "range(3, n + 1, 3)이 3의 배수마다 한 번씩 돌면서 count를 1씩 증가시킵니다.",
      "hint_en": "range(3, n + 1, 3) steps through each multiple of 3 and increments count by 1 each time.",
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
      "prompt_ko": "[빈칸 채우기] 복합 대입 연산자를 채워 n 이하 짝수의 개수와 합계를 함께 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the compound assignment operator to print the count and sum of evens.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] n개의 입력을 반복 합산한 뒤 평균(total / n)을 출력해보세요.",
      "prompt_en": "[Block] Sum n integer inputs inside a for loop and print total / n.",
      "hint_ko": "나눗셈 연산자(/)는 나누어떨어질 때에도 소수점이 포함된 실수(float) 형태로 평균을 반환합니다.",
      "hint_en": "The division operator (/) always returns the average as a floating-point number (float).",
      "targetCode": "n = int(input())\ntotal = 0\nfor i in range(n):\n    x = int(input())\n    total += x\nprint(total / n)",
      "testCases": [
        {
          "id": 1,
          "input": "2\n3\n5",
          "expectedOutput": "4.0"
        },
        {
          "id": 2,
          "input": "4\n1\n2\n3\n6",
          "expectedOutput": "3.0"
        },
        {
          "id": 3,
          "input": "2\n2\n5",
          "expectedOutput": "3.5"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 정수 변환 함수와 나눗셈 기호를 채워 n개 정수의 평균을 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the int function and division operator to print the average.",
      "hint_ko": "정수(integer)의 앞 세 글자를 딴 변환 함수와, 소수점 결과를 내는 슬래시 나눗셈 기호를 채워보세요.",
      "hint_en": "Use the conversion function from the first 3 letters of \"integer\" and the single-slash division symbol.",
      "templateCode": "n = int(input())\ntotal = 0\nfor i in range(n):\n    total += §§§(input())\nprint(total § n)",
      "targetCode": "n = int(input())\ntotal = 0\nfor i in range(n):\n    total += int(input())\nprint(total / n)",
      "testCases": [
        {
          "id": 1,
          "input": "2\n10\n20",
          "expectedOutput": "15.0"
        },
        {
          "id": 2,
          "input": "4\n2\n4\n6\n8",
          "expectedOutput": "5.0"
        },
        {
          "id": 3,
          "input": "2\n1\n4",
          "expectedOutput": "2.5"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 반복 합산 후 100 이상이면 Goal, 미만이면 Short와 합계를 출력해보세요.",
      "prompt_en": "[Block] Sum n inputs, then branch with if-else to print Goal or Short.",
      "hint_ko": "정수 합계 total을 문자열과 +로 이어 붙이기 위해 str(total)로 먼저 변환합니다.",
      "hint_en": "Convert the integer sum total with str(total) before concatenating it onto a label string with +.",
      "targetCode": "n = int(input())\ntotal = 0\nfor i in range(n):\n    total += int(input())\nres = str(total)\nif total >= 100:\n    print(\"Goal:\" + res)\nelse:\n    print(\"Short:\" + res)",
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
      "prompt_ko": "[빈칸 채우기] 문자열 변환 함수와 분기 키워드를 채워 n >= 3이면 ID-코드, 아니면 S-코드를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in str and else to print ID-code when n >= 3 or S-code otherwise.",
      "hint_ko": "넷째 줄에는 문자열 변환 함수 str을, 일곱째 줄에는 나머지 분기 키워드 else를 채워보세요.",
      "hint_en": "Wrap i in str() on line 4, and write else on line 7.",
      "templateCode": "n = int(input())\ncode = \"\"\nfor i in range(1, n + 1):\n    code += §§§(i)\nif n >= 3:\n    print(\"ID-\" + code)\n§§§§:\n    print(\"S-\" + code)",
      "targetCode": "n = int(input())\ncode = \"\"\nfor i in range(1, n + 1):\n    code += str(i)\nif n >= 3:\n    print(\"ID-\" + code)\nelse:\n    print(\"S-\" + code)",
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
          "input": "2",
          "expectedOutput": "S-12"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 누적 곱셈 변수의 초기값을 고쳐 1부터 n까지의 곱이 올바르게 출력되게 해보세요.",
      "prompt_en": "[Fix Bug] Fix the accumulator initial value so the product of 1..n does not evaluate to 0.",
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
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 1부터 n까지 더해 합계가 출력되도록 잘못된 복합 대입 연산자를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the compound assignment operator so 1 through n are added onto total.",
      "hint_ko": "현재 total -= i로 빼고 있습니다. 값을 누적해 더하도록 total += i로 고쳐보세요.",
      "hint_en": "Change total -= i to total += i so each i is added to the running sum.",
      "templateCode": "n = int(input())\ntotal = 0\nfor i in range(1, n + 1):\n    total -= i\nprint(total)",
      "targetCode": "n = int(input())\ntotal = 0\nfor i in range(1, n + 1):\n    total += i\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "4",
          "expectedOutput": "10"
        },
        {
          "id": 2,
          "input": "5",
          "expectedOutput": "15"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 누적된 합계 total을 개수 n으로 나눈 평균을 변수 avg에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the line that stores the average total / n in variable avg.",
      "hint_ko": "avg = total / n 형태로 나눗셈 결과를 변수 avg에 저장해보세요.",
      "hint_en": "Write avg = total / n after the loop.",
      "templateCode": "n = int(input())\ntotal = 0\nfor i in range(n):\n    total += int(input())\n§§§§§§§§§§§§§§§\nprint(avg)",
      "targetCode": "n = int(input())\ntotal = 0\nfor i in range(n):\n    total += int(input())\navg = total / n\nprint(avg)",
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
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 반복문 안에서 복합 대입 연산자로 변수 total에 i를 누적해 더하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the indented line adding i onto total with +=.",
      "hint_ko": "4칸 들여쓰기 뒤에 total += i를 작성해보세요.",
      "hint_en": "Keep the 4-space indentation and write total += i.",
      "templateCode": "n = int(input())\ntotal = 0\nfor i in range(2, n + 1, 2):\n    §§§§§§§§§§\nprint(total)",
      "targetCode": "n = int(input())\ntotal = 0\nfor i in range(2, n + 1, 2):\n    total += i\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "6",
          "expectedOutput": "12"
        },
        {
          "id": 2,
          "input": "8",
          "expectedOutput": "20"
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
