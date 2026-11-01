import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_27: PracticeRound = {
  "id": "py-basic-r27",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 27,
  "title_ko": "27레벨: 반복문 안의 if 조건 판별",
  "title_en": "Level 27: Conditional Filtering Inside Loops",
  "description_ko": "for 반복문 안에서 if/elif/else, 나머지 연산(%), 논리 연산자(and/or)로 원하는 값만 걸러냅니다.",
  "description_en": "Filter and classify loop values using if/elif/else, modulo (%), and logical operators (and/or).",
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
      "prompt_ko": "1부터 9까지 반복하며 3의 배수(i % 3 == 0)만 골라 출력해보세요.",
      "prompt_en": "Loop from 1 to 9 and print only multiples of 3 (i % 3 == 0).",
      "hint_ko": "for i in range(1, 10): 안에 if i % 3 == 0: 블록을 넣고 print(i)를 실행하세요.",
      "hint_en": "Inside for i in range(1, 10):, check if i % 3 == 0: and run print(i).",
      "targetCode": "for i in range(1, 10):\n    if i % 3 == 0:\n        print(i)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3\n6\n9"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "나머지 연산자와 비교 연산자를 채워 1부터 n까지 중 n의 약수를 모두 출력해보세요.",
      "prompt_en": "Fill in the modulo and equality operators to print every divisor of n from 1 through n.",
      "hint_ko": "n을 i로 나눈 나머지가 0과 같은지 확인하려면 % 연산자와 == 연산자를 사용합니다.",
      "hint_en": "Use % to compute the remainder of n divided by i and == to compare it with 0.",
      "templateCode": "n = int(input())\nfor i in range(1, n + 1):\n    if n § i §§ 0:\n        print(i)",
      "targetCode": "n = int(input())\nfor i in range(1, n + 1):\n    if n % i == 0:\n        print(i)",
      "testCases": [
        {
          "id": 1,
          "input": "6",
          "expectedOutput": "1\n2\n3\n6"
        },
        {
          "id": 2,
          "input": "10",
          "expectedOutput": "1\n2\n5\n10"
        },
        {
          "id": 3,
          "input": "7",
          "expectedOutput": "1\n7"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "정수 n을 입력받아 1부터 n까지 n의 약수가 총 몇 개인지 cnt에 세어 출력해보세요.",
      "prompt_en": "Read integer n, count how many divisors n has in 1..n, and print cnt.",
      "hint_ko": "if n % i == 0: 조건이 참일 때만 cnt += 1을 실행하고 반복이 끝난 뒤 cnt를 출력하세요.",
      "hint_en": "Increment cnt += 1 whenever n % i == 0, then print cnt outside the loop.",
      "targetCode": "n = int(input())\ncnt = 0\nfor i in range(1, n + 1):\n    if n % i == 0:\n        cnt += 1\nprint(cnt)",
      "testCases": [
        {
          "id": 1,
          "input": "6",
          "expectedOutput": "4"
        },
        {
          "id": 2,
          "input": "12",
          "expectedOutput": "6"
        },
        {
          "id": 3,
          "input": "7",
          "expectedOutput": "2"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 논리 연산자를 채워 1부터 n까지 중 3의 배수이거나 5의 배수인 수들의 합을 출력해보세요.",
      "prompt_en": "Fill in the logical operator to sum numbers in 1..n divisible by 3 or by 5.",
      "hint_ko": "두 조건 중 하나라도 참이면 선택해야 하므로 논리합 연산자 or를 입력하세요.",
      "hint_en": "Use the logical operator or so numbers matching either condition are added.",
      "templateCode": "n = int(input())\ntotal = 0\nfor i in range(1, n + 1):\n    if i % 3 == 0 §§ i % 5 == 0:\n        total += i\nprint(total)",
      "targetCode": "n = int(input())\ntotal = 0\nfor i in range(1, n + 1):\n    if i % 3 == 0 or i % 5 == 0:\n        total += i\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "10",
          "expectedOutput": "33"
        },
        {
          "id": 2,
          "input": "6",
          "expectedOutput": "14"
        },
        {
          "id": 3,
          "input": "15",
          "expectedOutput": "60"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "1부터 입력받은 n까지 중 2의 배수이면서 동시에 3의 배수인 공배수만 출력해보세요.",
      "prompt_en": "Print numbers from 1 through n that are divisible by both 2 and 3.",
      "hint_ko": "if i % 2 == 0 and i % 3 == 0: 조건이 참일 때만 print(i)를 실행하세요.",
      "hint_en": "Check if i % 2 == 0 and i % 3 == 0: inside the loop and print(i).",
      "targetCode": "n = int(input())\nfor i in range(1, n + 1):\n    if i % 2 == 0 and i % 3 == 0:\n        print(i)",
      "testCases": [
        {
          "id": 1,
          "input": "15",
          "expectedOutput": "6\n12"
        },
        {
          "id": 2,
          "input": "20",
          "expectedOutput": "6\n12\n18"
        },
        {
          "id": 3,
          "input": "6",
          "expectedOutput": "6"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 논리 연산자를 채워 이어지는 4개의 정수 중 low 이상이고 high 이하인 값의 개수를 출력해보세요.",
      "prompt_en": "Fill in the logical operator to count how many of 4 integers fall between low and high inclusive.",
      "hint_ko": "최솟값 이상과 최댓값 이하 두 조건을 모두 만족해야 하므로 and를 입력하세요.",
      "hint_en": "Both bounds must hold simultaneously, so enter and.",
      "templateCode": "low, high = input().split()\ncnt = 0\nfor i in range(4):\n    x = int(input())\n    if x >= int(low) §§§ x <= int(high):\n        cnt += 1\nprint(cnt)",
      "targetCode": "low, high = input().split()\ncnt = 0\nfor i in range(4):\n    x = int(input())\n    if x >= int(low) and x <= int(high):\n        cnt += 1\nprint(cnt)",
      "testCases": [
        {
          "id": 1,
          "input": "10 20\n5\n12\n20\n25",
          "expectedOutput": "2"
        },
        {
          "id": 2,
          "input": "0 10\n0\n3\n9\n10",
          "expectedOutput": "4"
        },
        {
          "id": 3,
          "input": "5 8\n1\n2\n9\n10",
          "expectedOutput": "0"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "1부터 n까지 6의 배수면 \"AB\", 아니고 2의 배수면 \"A\", 그 외에는 숫자 i를 그대로 출력해보세요.",
      "prompt_en": "From 1 to n, print \"AB\" for multiples of 6, else \"A\" for multiples of 2, else i.",
      "hint_ko": "더 좁은 조건인 i % 6 == 0을 먼저 if로 검사하고 elif i % 2 == 0:, else: 순서로 작성하세요.",
      "hint_en": "Check i % 6 == 0 first with if, followed by elif i % 2 == 0: and else:.",
      "targetCode": "n = int(input())\nfor i in range(1, n + 1):\n    if i % 6 == 0:\n        print(\"AB\")\n    elif i % 2 == 0:\n        print(\"A\")\n    else:\n        print(i)",
      "testCases": [
        {
          "id": 1,
          "input": "6",
          "expectedOutput": "1\nA\n3\nA\n5\nAB"
        },
        {
          "id": 2,
          "input": "4",
          "expectedOutput": "1\nA\n3\nA"
        },
        {
          "id": 3,
          "input": "7",
          "expectedOutput": "1\nA\n3\nA\n5\nAB\n7"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 조건 분기 키워드를 채워 n개의 실수 중 양수 개수(pos), 음수 개수(neg)를 세고 0이면 \"Zero\"를 출력해보세요.",
      "prompt_en": "Fill in the two branching keywords to count positive and negative floats and print \"Zero\" for 0.",
      "hint_ko": "추가 조건 검사에는 elif를, 앞선 모든 조건이 거짓일 때는 else를 사용합니다.",
      "hint_en": "Use elif for the second condition (x < 0) and else for the remaining zero case.",
      "templateCode": "n = int(input())\npos = 0\nneg = 0\nfor i in range(n):\n    x = float(input())\n    if x > 0:\n        pos += 1\n    §§§§ x < 0:\n        neg += 1\n    §§§§:\n        print(\"Zero\")\nprint(pos, neg)",
      "targetCode": "n = int(input())\npos = 0\nneg = 0\nfor i in range(n):\n    x = float(input())\n    if x > 0:\n        pos += 1\n    elif x < 0:\n        neg += 1\n    else:\n        print(\"Zero\")\nprint(pos, neg)",
      "testCases": [
        {
          "id": 1,
          "input": "4\n2.5\n-1.0\n0.0\n3.2",
          "expectedOutput": "Zero\n2 1"
        },
        {
          "id": 2,
          "input": "3\n-2.0\n-0.5\n1.5",
          "expectedOutput": "1 2"
        },
        {
          "id": 3,
          "input": "2\n0.0\n4.0",
          "expectedOutput": "Zero\n1 0"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "초기 체력 hp = 50에서 n번 정수를 입력받아 양수면 hp += d, 0 이하면 hp -= 10을 적용한 뒤 \"HP:\" + str(hp)를 출력해보세요.",
      "prompt_en": "Starting at hp = 50, read n integers: if d > 0 add d to hp, else subtract 10, then print \"HP:\" + str(hp).",
      "hint_ko": "for i in range(n): 안에서 if d > 0:과 else:로 hp를 증감시키고 마지막에 \"HP:\" + str(hp)를 출력하세요.",
      "hint_en": "Update hp with += d or -= 10 inside the loop, then print \"HP:\" + str(hp).",
      "targetCode": "hp = 50\nn = int(input())\nfor i in range(n):\n    d = int(input())\n    if d > 0:\n        hp += d\n    else:\n        hp -= 10\nprint(\"HP:\" + str(hp))",
      "testCases": [
        {
          "id": 1,
          "input": "3\n20\n0\n15",
          "expectedOutput": "HP:75"
        },
        {
          "id": 2,
          "input": "2\n-5\n-1",
          "expectedOutput": "HP:30"
        },
        {
          "id": 3,
          "input": "2\n10\n25",
          "expectedOutput": "HP:85"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 비교 연산자를 채워 약수의 개수가 정확히 2개인 소수이면 True, 아니면 False를 출력해보세요.",
      "prompt_en": "Fill in the comparison operator to print True when n has exactly 2 divisors and False otherwise.",
      "hint_ko": "약수 개수 cnt가 2와 같은지 비교하는 연산자 ==를 입력하세요.",
      "hint_en": "Use == to test whether cnt equals 2.",
      "templateCode": "n = int(input())\ncnt = 0\nfor i in range(1, n + 1):\n    if n % i == 0:\n        cnt += 1\nprint(cnt §§ 2)",
      "targetCode": "n = int(input())\ncnt = 0\nfor i in range(1, n + 1):\n    if n % i == 0:\n        cnt += 1\nprint(cnt == 2)",
      "testCases": [
        {
          "id": 1,
          "input": "7",
          "expectedOutput": "True"
        },
        {
          "id": 2,
          "input": "6",
          "expectedOutput": "False"
        },
        {
          "id": 3,
          "input": "1",
          "expectedOutput": "False"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "논리 연산자 버그를 고쳐 1부터 n까지 중 2와 5로 모두 나누어떨어지는 공배수만 출력되게 해보세요.",
      "prompt_en": "Fix the logical operator bug so only numbers divisible by both 2 and 5 are printed.",
      "hint_ko": "두 조건을 동시에 만족하는 공배수만 고르려면 둘 중 하나만 참이어도 통과하는 연산자를 바꿔야 합니다.",
      "hint_en": "Both divisibility checks must be True at the same time, so replace or with and.",
      "templateCode": "n = int(input())\nfor i in range(1, n + 1):\n    if i % 2 == 0 or i % 5 == 0:\n        print(i)",
      "targetCode": "n = int(input())\nfor i in range(1, n + 1):\n    if i % 2 == 0 and i % 5 == 0:\n        print(i)",
      "testCases": [
        {
          "id": 1,
          "input": "25",
          "expectedOutput": "10\n20"
        },
        {
          "id": 2,
          "input": "12",
          "expectedOutput": "10"
        },
        {
          "id": 3,
          "input": "30",
          "expectedOutput": "10\n20\n30"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "조건문 아래에 한 줄을 추가하여 1부터 n까지 중 홀수이면서 3의 배수인 수를 순서대로 출력해보세요.",
      "prompt_en": "Add one line under the if condition to print numbers in 1..n that are odd multiples of 3.",
      "hint_ko": "if 블록 내부이므로 공백 8칸 들여쓰기 후 print(i)를 작성하세요.",
      "hint_en": "Indent by 8 spaces inside the if block and write print(i).",
      "templateCode": "n = int(input())\nfor i in range(1, n + 1):\n    if i % 2 == 1 and i % 3 == 0:\n        §§§§§§§§",
      "targetCode": "n = int(input())\nfor i in range(1, n + 1):\n    if i % 2 == 1 and i % 3 == 0:\n        print(i)",
      "testCases": [
        {
          "id": 1,
          "input": "10",
          "expectedOutput": "3\n9"
        },
        {
          "id": 2,
          "input": "15",
          "expectedOutput": "3\n9\n15"
        },
        {
          "id": 3,
          "input": "5",
          "expectedOutput": "3"
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
      "hint_ko": "i=1,3,5(홀수)는 -2씩 총 -6, i=2는 else로 가서 +1, i=4는 첫 조건이 참이라 +5가 더해집니다.",
      "hint_en": "Odds (1, 3, 5) subtract 2 each (-6), i=2 hits else (+1), and i=4 hits if (+5): 10 - 6 + 1 + 5 = 10.",
      "targetCode": "score = 10\nfor i in range(1, 6):\n    if i % 2 == 0 and i > 2:\n        score += 5\n    elif i % 2 == 1:\n        score -= 2\n    else:\n        score += 1\nprint(score)",
      "choices": [
        "10",
        "14",
        "9",
        "15"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "10"
        }
      ]
    }
  ]
};
