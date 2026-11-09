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
      "prompt_ko": "range(시작, 끝)처럼 두 인자를 전달하면 첫 번째 시작값부터 출발해 두 번째 끝값 바로 직전(끝-1)까지 반복합니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Passing two arguments to range(start, stop) generates integers starting at start and stopping right before stop (stop - 1). Trace the block code.",
      "hint_ko": "range(1, 5)에서 시작값 1은 포함되고 끝값 5는 제외되어 1, 2, 3, 4가 차례로 i에 담깁니다.",
      "hint_en": "In range(1, 5), the start value 1 is included while the stop value 5 is excluded, yielding 1, 2, 3, 4.",
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
      "prompt_ko": "빈칸에 끝 범위 식을 채워 1부터 입력받은 정수 n까지(n 포함) 순서대로 출력해보세요. (터미널 입력: 3)",
      "prompt_en": "Fill in the stop expression so integers from 1 through n inclusive are printed. (Terminal input: 3)",
      "hint_ko": "두 번째 끝 경계값은 결과에서 제외되므로, n까지 빠짐없이 포함하려면 n보다 1 큰 덧셈 식을 넣어야 합니다.",
      "hint_en": "Because the upper bound is excluded, write an addition expression one larger than n so n is included.",
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
      "prompt_ko": "range(시작, 끝, 간격)의 세 번째 인자는 매 반복마다 더해지는 증감 간격(step)을 지정합니다. 2씩 건너뛰며 짝수를 만드는 블록 코드를 따라 쳐보세요.",
      "prompt_en": "The third argument in range(start, stop, step) sets the step interval added on each turn. Trace the block code to step by 2 through even numbers.",
      "hint_ko": "2에서 시작해 11 직전까지 2씩 더해지므로 2, 4, 6, 8, 10이 순서대로 출력됩니다.",
      "hint_en": "Starting at 2 and stepping by 2 up to (but excluding) 11 prints 2, 4, 6, 8, 10.",
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
      "hint_ko": "큰 수에서 작은 수로 한 칸씩 내려가려면 뺄셈 부호가 붙은 단위 감소 값을 세 번째 인자로 지정해야 합니다.",
      "hint_en": "To step downward by one each turn, pass a negative unit value with a minus sign as the third argument.",
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
      "prompt_ko": "range(n, 0, -1)처럼 음수 간격(-1)을 주면 큰 수 n에서 시작해 끝값 0 바로 위인 1까지 1씩 감소하며 역순으로 반복합니다. 블록의 코드를 따라 입력해보세요. (터미널 입력: 4)",
      "prompt_en": "Using a negative step like range(n, 0, -1) counts down by 1 from n to 1 (stopping right above 0). Trace the block code. (Terminal input: 4)",
      "hint_ko": "end=\" \" 옵션과 함께 사용하여 줄바꿈 없이 한 줄에 카운트다운 숫자를 이어서 출력합니다.",
      "hint_en": "Combined with end=\" \", the countdown numbers are printed on a single line separated by spaces.",
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
      "prompt_ko": "빈칸에 공백 분리 메서드를 채워 한 줄에 입력된 a부터 b까지의 모든 정수를 출력해보세요. (터미널 입력: 3 6)",
      "prompt_en": "Fill in the string-splitting method to print every integer from a through b. (Terminal input: 3 6)",
      "hint_ko": "영어로 '쪼개다·나누다'를 뜻하는 다섯 글자 문자열 메서드를 호출해 공백으로 구분된 두 입력을 분리해보세요.",
      "hint_en": "Call the 5-letter string method meaning \"divide or break apart\" to separate the two space-delimited inputs.",
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
      "prompt_ko": "range(1, 5)로 1부터 4까지 변하는 반복 변수 i를 거듭제곱 연산자(**)의 지수 자리에 놓으면 2의 거듭제곱 수열을 차례대로 계산할 수 있습니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Placing the loop variable i from range(1, 5) as the exponent in 2 ** i computes successive powers of 2. Trace the block code.",
      "hint_ko": "i가 1, 2, 3, 4로 바뀔 때마다 2 ** i가 계산되어 2, 4, 8, 16이 출력됩니다.",
      "hint_en": "As i steps through 1, 2, 3, 4, the expression 2 ** i evaluates to 2, 4, 8, 16.",
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
      "prompt_ko": "두 빈칸에 거듭제곱과 정수 몫 연산자를 채워 2부터 n 이하 짝수 i의 제곱과 절반 몫을 출력해보세요. (터미널 입력: 4)",
      "prompt_en": "Fill in the exponent and floor-division operators to print i squared and i floor-divided by 2. (Terminal input: 4)",
      "hint_ko": "별표 두 개를 나란히 쓴 거듭제곱 기호와 슬래시 두 개를 나란히 쓴 정수 몫 기호를 순서대로 채워보세요.",
      "hint_en": "Enter the double-asterisk exponent operator first, followed by the double-slash integer quotient operator.",
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
      "prompt_ko": "range()의 시작, 끝, 간격 인자에는 고정된 숫자뿐만 아니라 int()로 변환한 변수나 수식도 자유롭게 넣을 수 있습니다. 블록의 코드를 따라 쳐보세요. (터미널 입력: 1 10 3)",
      "prompt_en": "The start, stop, and step arguments of range() can take variables or expressions converted with int() just like fixed numbers. Trace the block code. (Terminal input: 1 10 3)",
      "hint_ko": "input().split()으로 나눈 세 문자열은 반드시 int()로 정수 변환해야 range()에 전달할 수 있습니다.",
      "hint_en": "Strings unpacked from input().split() must be converted to integers with int() before being passed to range().",
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
      "hint_ko": "불리언(boolean)의 앞 네 글자를 딴 내장 함수를 사용해 숫자가 0인지 아닌지에 따른 참·거짓 값을 확인해보세요.",
      "hint_en": "Call the conversion function named from the first 4 letters of \"boolean\" to evaluate each number's truthiness.",
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
      "prompt_ko": "간격 부호 버그를 고쳐 입력받은 n부터 1까지 1씩 감소하며 출력되도록 코드를 수정해보세요. (터미널 입력: 4)",
      "prompt_en": "Fix the step sign bug so the loop counts down from n to 1. (Terminal input: 4)",
      "hint_ko": "시작값 n이 끝 경계 0보다 큰 카운트다운인데 증감 간격이 양수여서 반복문이 한 번도 돌지 못하고 있습니다.",
      "hint_en": "Starting above 0 while stepping upward in the positive direction prevents the countdown loop from running.",
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
      "prompt_ko": "반복문 안에 한 줄을 추가하여 a부터 b 이하까지 2씩 건너뛰며 나오는 정수를 순서대로 출력해보세요. (터미널 입력: 1 7)",
      "prompt_en": "Add one line inside the loop to print integers stepping by 2 from a up to b. (Terminal input: 1 7)",
      "hint_ko": "윗줄에서 시작값, 끝 범위, 2칸 간격이 모두 설정되어 있으니 반복문 안쪽 들여쓰기에 맞춰 현재 변수만 출력해보세요.",
      "hint_en": "Since the range header already steps by 2 up to b, indent inside the loop body and print the loop variable.",
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
      "hint_ko": "6에서 시작해 3씩 줄어들며 -1 직전까지 선택되는 값들을 차례로 적고, 각각의 정수 몫과 0에서의 참·거짓 판정을 따져보세요.",
      "hint_en": "List each value generated from 6 downward by 3 before reaching -1, then check its floor quotient and truthiness at zero.",
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
