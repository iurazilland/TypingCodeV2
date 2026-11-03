import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_31: PracticeRound = {
  "id": "py-basic-r31",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 31,
  "title_ko": "31레벨: 반복문과 흐름 제어 기초 종합 문제풀이",
  "title_en": "Level 31: Section 4 Comprehensive Review",
  "description_ko": "for, range, while, break, continue, 중첩 반복문과 조건 분기를 종합해 실전 문제를 해결합니다.",
  "description_en": "Synthesize for, range, while, break, continue, nested loops, and conditionals in comprehensive problems.",
  "totalQuestions": 10,
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
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "음수 간격과 누적 덧셈 연산자를 채워 n부터 1까지 내려가며 3의 배수는 더하고 나머지 짝수는 1씩 뺀 결과를 출력해보세요.",
      "prompt_en": "Fill in the negative step and compound addition operator to process numbers counting down from n to 1.",
      "hint_ko": "큰 수에서 작은 수로 한 칸씩 줄어드는 음수 증감 간격과, 기존 합계에 현재 값을 누적해 더하는 복합 대입 연산자를 채워보세요.",
      "hint_en": "Supply the negative unit step for counting downward by one, followed by the compound operator that adds i onto s.",
      "templateCode": "n = int(input())\ns = 0\nfor i in range(n, 0, §§):\n    if i % 3 == 0:\n        s §§ i\n    elif i % 2 == 0:\n        s -= 1\nprint(s)",
      "targetCode": "n = int(input())\ns = 0\nfor i in range(n, 0, -1):\n    if i % 3 == 0:\n        s += i\n    elif i % 2 == 0:\n        s -= 1\nprint(s)",
      "testCases": [
        {
          "id": 1,
          "input": "6",
          "expectedOutput": "7"
        },
        {
          "id": 2,
          "input": "4",
          "expectedOutput": "1"
        },
        {
          "id": 3,
          "input": "9",
          "expectedOutput": "15"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "세 빈칸을 채워 \"quit\"이면 종료하고 음수 값은 건너뛰며 양수 값만 합산해 출력해보세요.",
      "prompt_en": "Fill in the three blanks to stop on \"quit\", skip negative values, and sum non-negative values.",
      "hint_ko": "항상 참을 나타내는 대문자 시작 불리언 상수, 반복 전체를 즉시 끝내는 제어문, 이번 차례만 넘기고 다음 반복으로 가는 제어문을 차례로 떠올려 보세요.",
      "hint_en": "Enter the capitalized boolean constant for truth, the keyword that exits the loop immediately, and the keyword that skips to the next turn.",
      "templateCode": "total = 0\nwhile §§§§:\n    tag, num = input().split()\n    if tag == \"quit\":\n        §§§§§\n    if int(num) < 0:\n        §§§§§§§§\n    total += int(num)\nprint(total)",
      "targetCode": "total = 0\nwhile True:\n    tag, num = input().split()\n    if tag == \"quit\":\n        break\n    if int(num) < 0:\n        continue\n    total += int(num)\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "item 15\nerr -10\nitem 25\nquit 0",
          "expectedOutput": "40"
        },
        {
          "id": 2,
          "input": "err -5\nitem 8\nquit 0",
          "expectedOutput": "8"
        },
        {
          "id": 3,
          "input": "item 12\nitem 18\nquit 0",
          "expectedOutput": "30"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "몫 복합 대입 연산자와 불리언 변환 함수를 채워 n의 자릿수 합 s와 s가 홀수인지 여부를 함께 출력해보세요. (예: 384 -> 15 True)",
      "prompt_en": "Fill in the floor-division assignment operator and boolean conversion function to print digit sum s and whether s is odd.",
      "hint_ko": "10으로 나눈 정수 몫을 변수에 바로 갱신해 끝자리를 잘라내는 복합 대입 연산자와, 나머지 값을 참·거짓으로 바꾸는 네 글자 함수를 채워보세요.",
      "hint_en": "Use the floor-division compound assignment operator to strip the ones digit, and the 4-letter conversion function that evaluates truthiness.",
      "templateCode": "n = int(input())\ns = 0\nwhile n:\n    s += n % 10\n    n §§§ 10\nprint(s, §§§§(s % 2))",
      "targetCode": "n = int(input())\ns = 0\nwhile n:\n    s += n % 10\n    n //= 10\nprint(s, bool(s % 2))",
      "testCases": [
        {
          "id": 1,
          "input": "384",
          "expectedOutput": "15 True"
        },
        {
          "id": 2,
          "input": "204",
          "expectedOutput": "6 False"
        },
        {
          "id": 3,
          "input": "92",
          "expectedOutput": "11 True"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "반복 끝 범위 버그를 수정해 자기 자신 n을 포함한 모든 약수의 총합이 출력되게 해보세요.",
      "prompt_en": "Fix the range stop bug so the sum of all divisors of n (including n itself) is printed.",
      "hint_ko": "범위 함수의 두 번째 끝 경계값은 결과에 포함되지 않고 직전에서 멈추기 때문에 자기 자신인 약수가 합산에서 누락되고 있습니다.",
      "hint_en": "Because the upper bound of a range stops right before the given stop value, the number itself is never checked as a divisor.",
      "templateCode": "n = int(input())\ntotal = 0\nfor i in range(1, n):\n    if n % i == 0:\n        total += i\nprint(total)",
      "targetCode": "n = int(input())\ntotal = 0\nfor i in range(1, n + 1):\n    if n % i == 0:\n        total += i\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "6",
          "expectedOutput": "12"
        },
        {
          "id": 2,
          "input": "10",
          "expectedOutput": "18"
        },
        {
          "id": 3,
          "input": "5",
          "expectedOutput": "6"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "누적 변수 초기화 위치 버그를 고쳐 1부터 n까지 모두 곱한 값(n!)이 정확히 출력되게 해보세요.",
      "prompt_en": "Fix where the product accumulator is initialized so n! is computed accurately.",
      "hint_ko": "곱셈 누적 변수를 반복문 본문 안에서 매번 초기값으로 되돌리고 있어서 이전 차례까지 곱해 둔 결과가 계속 사라지고 있습니다.",
      "hint_en": "Resetting the product accumulator inside the loop body wipes out previous multiplications on every turn; initialize it before the loop.",
      "templateCode": "n = int(input())\ni = 1\nwhile i <= n:\n    prod = 1\n    prod *= i\n    i += 1\nprint(prod)",
      "targetCode": "n = int(input())\nprod = 1\ni = 1\nwhile i <= n:\n    prod *= i\n    i += 1\nprint(prod)",
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
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "안쪽 반복 범위를 고쳐 1층에 1개부터 n층에 n개까지 늘어나는 \"#\" 계단이 출력되게 해보세요.",
      "prompt_en": "Fix the inner loop range so a staircase of 1 to n \"#\" characters is printed.",
      "hint_ko": "안쪽 반복 횟수가 전체 층수로 고정되어 있어 매 줄마다 똑같은 개수가 찍히고 있습니다. 현재 층 번호에 맞춰 가로 횟수가 변해야 합니다.",
      "hint_en": "The inner loop currently repeats by the total height on every line instead of matching the current row's count.",
      "templateCode": "n = int(input())\nfor r in range(1, n + 1):\n    for c in range(n):\n        print(\"#\", end=\"\")\n    print()",
      "targetCode": "n = int(input())\nfor r in range(1, n + 1):\n    for c in range(r):\n        print(\"#\", end=\"\")\n    print()",
      "testCases": [
        {
          "id": 1,
          "input": "3",
          "expectedOutput": "#\n##\n###"
        },
        {
          "id": 2,
          "input": "4",
          "expectedOutput": "#\n##\n###\n####"
        },
        {
          "id": 3,
          "input": "2",
          "expectedOutput": "#\n##"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "반복문 아래에 한 줄을 추가하여 1부터 n까지 중 짝수이면서 5의 배수가 아닌 수의 개수 cnt를 출력해보세요.",
      "prompt_en": "Add one line after the loop to print the count cnt of evens not divisible by 5.",
      "hint_ko": "모든 숫자 검사가 끝난 뒤 최종 개수가 한 번만 나오도록 반복문 바깥(들여쓰기 없는 위치)에서 누적 개수 변수를 출력해보세요.",
      "hint_en": "Place an unindented output statement after the loop finishes to display the final counter value once.",
      "templateCode": "n = int(input())\ncnt = 0\nfor i in range(1, n + 1):\n    if i % 2 == 0 and i % 5 != 0:\n        cnt += 1\n§§§§§§§§§§",
      "targetCode": "n = int(input())\ncnt = 0\nfor i in range(1, n + 1):\n    if i % 2 == 0 and i % 5 != 0:\n        cnt += 1\nprint(cnt)",
      "testCases": [
        {
          "id": 1,
          "input": "10",
          "expectedOutput": "4"
        },
        {
          "id": 2,
          "input": "12",
          "expectedOutput": "5"
        },
        {
          "id": 3,
          "input": "6",
          "expectedOutput": "3"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "안쪽 반복문 직후에 한 줄을 추가하여 한 행의 출력이 끝날 때마다 줄바꿈해 대각선 격자를 완성해보세요. (예: 3 -> 100 / 010 / 001)",
      "prompt_en": "Add one line right after the inner loop to print a newline at the end of each row.",
      "hint_ko": "안쪽 반복문이 한 행의 글자들을 모두 가로로 찍은 직후 다음 행으로 넘어가도록 바깥 반복문 들여쓰기 위치에서 줄바꿈 출력을 실행해보세요.",
      "hint_en": "At the outer loop's indentation level right after the inner loop finishes a row, output a line advance before the next row begins.",
      "templateCode": "n = int(input())\nfor r in range(n):\n    for c in range(n):\n        if r == c:\n            print(\"1\", end=\"\")\n        else:\n            print(\"0\", end=\"\")\n    §§§§§§§",
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
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 파이썬 코드를 실행했을 때 출력될 알맞은 결과를 선택해보세요.",
      "prompt_en": "Select the exact output produced when the following Python code runs.",
      "hint_ko": "반복문 첫 줄에서 n이 먼저 1 증가한다는 점에 유의하며 짝수 건너뛰기와 분기 조건을 차례로 따라가고, 최종 합계를 2로 나눈 나머지의 참·거짓을 확인해보세요.",
      "hint_en": "Note that n increments at the top of each turn; trace which values skip on the even check versus which branch updates s, then test the final sum's parity.",
      "targetCode": "n = 0\ns = 0\nwhile n < 6:\n    n += 1\n    if n % 2 == 0:\n        continue\n    elif n == 5:\n        s += 10\n    else:\n        s += n\nprint(s, bool(s % 2))",
      "choices": [
        "14 False",
        "9 True",
        "19 True",
        "14 True"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "14 False"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 파이썬 코드를 실행했을 때 출력될 알맞은 결과를 선택해보세요.",
      "prompt_en": "Select the exact output produced when the following Python code runs.",
      "hint_ko": "안쪽 루프에서 첫 번째 열은 건너뛰고 기준을 넘으면 해당 행의 안쪽 루프만 종료된 뒤 다음 행으로 넘어갑니다. 각 행마다 카운터가 몇 번 증가하는지 세어보세요.",
      "hint_en": "In each outer row, the first column is skipped and exceeding r + 1 exits only the inner loop; count how many columns reach the increment step per row.",
      "targetCode": "cnt = 0\nfor r in range(1, 4):\n    for c in range(1, 5):\n        if c == 1:\n            continue\n        if c > r + 1:\n            break\n        cnt += 1\nprint(cnt)",
      "choices": [
        "6",
        "3",
        "9",
        "12"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "6"
        }
      ]
    }
  ]
};
