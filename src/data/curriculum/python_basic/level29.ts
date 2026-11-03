import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_29: PracticeRound = {
  "id": "py-basic-r29",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 29,
  "title_ko": "29레벨: break와 continue 반복 제어",
  "title_en": "Level 29: Loop Control with break & continue",
  "description_ko": "break로 반복을 즉시 종료하고 continue로 특정 차례를 건너뛰며, while True 무한 루프를 제어합니다.",
  "description_en": "Exit loops early with break, skip turns with continue, and control while True sentinel loops.",
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
      "prompt_ko": "1부터 6까지 반복하다가 i == 4가 되면 break로 즉시 멈추고 1부터 3까지만 출력해보세요.",
      "prompt_en": "Loop from 1 to 6, break immediately when i == 4, and print only 1 through 3.",
      "hint_ko": "출력 블록보다 위쪽에 종료 조건 블록을 먼저 배치해야 목표 숫자에 도달한 즉시 출력 없이 멈출 수 있습니다.",
      "hint_en": "Place the conditional exit block above the output block so the loop stops before printing 4.",
      "targetCode": "for i in range(1, 7):\n    if i == 4:\n        break\n    print(i)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1\n2\n3"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 반복 종료 키워드를 채워 2 이상의 정수 n의 가장 작은 약수(1 제외) 하나만 출력하고 멈춰보세요.",
      "prompt_en": "Fill in the loop-termination keyword to print only the smallest divisor of n greater than 1.",
      "hint_ko": "첫 약수를 출력한 직후 반복문을 깨고 즉시 탈출하도록 영어로 '깨뜨리다·중단하다'를 뜻하는 다섯 글자 키워드를 채워보세요.",
      "hint_en": "Exit the loop right after printing the first divisor using the 5-letter keyword meaning \"shatter or stop immediately\".",
      "templateCode": "n = int(input())\nfor i in range(2, n + 1):\n    if n % i == 0:\n        print(i)\n        §§§§§",
      "targetCode": "n = int(input())\nfor i in range(2, n + 1):\n    if n % i == 0:\n        print(i)\n        break",
      "testCases": [
        {
          "id": 1,
          "input": "15",
          "expectedOutput": "3"
        },
        {
          "id": 2,
          "input": "12",
          "expectedOutput": "2"
        },
        {
          "id": 3,
          "input": "7",
          "expectedOutput": "7"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "1부터 5까지 반복하며 i == 3일 때만 continue로 건너뛰어 1, 2, 4, 5를 출력해보세요.",
      "prompt_en": "From 1 to 5, use continue when i == 3 to skip 3 and print 1, 2, 4, 5.",
      "hint_ko": "출력문보다 먼저 조건을 검사해 건너뛰기 블록을 실행하면 해당 숫자만 건너뛰고 다음 번호 반복으로 넘어갑니다.",
      "hint_en": "Check the condition before printing so the skip block jumps straight to the next iteration when matched.",
      "targetCode": "for i in range(1, 6):\n    if i == 3:\n        continue\n    print(i)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1\n2\n4\n5"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 건너뛰기 키워드를 채워 1부터 n까지 중 3의 배수는 제외하고 나머지 수의 합을 출력해보세요.",
      "prompt_en": "Fill in the skip keyword to exclude multiples of 3 and sum the remaining numbers in 1..n.",
      "hint_ko": "아래 합산 줄을 실행하지 않고 곧바로 다음 반복을 이어가도록 영어로 '계속하다'를 뜻하는 여덟 글자 키워드를 입력하세요.",
      "hint_en": "Skip the addition step for this turn and move on using the 8-letter keyword meaning \"keep going\".",
      "templateCode": "n = int(input())\ntotal = 0\nfor i in range(1, n + 1):\n    if i % 3 == 0:\n        §§§§§§§§\n    total += i\nprint(total)",
      "targetCode": "n = int(input())\ntotal = 0\nfor i in range(1, n + 1):\n    if i % 3 == 0:\n        continue\n    total += i\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "5",
          "expectedOutput": "12"
        },
        {
          "id": 2,
          "input": "6",
          "expectedOutput": "12"
        },
        {
          "id": 3,
          "input": "4",
          "expectedOutput": "7"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "while True 무한 반복에서 문자열을 입력받아 \"q\"이면 break로 종료하고, 아니면 \"Run:\" + cmd를 출력해보세요.",
      "prompt_en": "In a while True loop, read cmd and break on \"q\"; otherwise print \"Run:\" + cmd.",
      "hint_ko": "무한 반복문 안에서 입력을 먼저 받은 뒤 종료 문자와 같으면 즉시 탈출하고, 아닐 때만 접두사를 붙여 출력하세요.",
      "hint_en": "Read input at the top of the endless loop, exit immediately on the sentinel letter, and print otherwise.",
      "targetCode": "while True:\n    cmd = input()\n    if cmd == \"q\":\n        break\n    print(\"Run:\" + cmd)",
      "testCases": [
        {
          "id": 1,
          "input": "go\ntest\nq",
          "expectedOutput": "Run:go\nRun:test"
        },
        {
          "id": 2,
          "input": "build\nq",
          "expectedOutput": "Run:build"
        },
        {
          "id": 3,
          "input": "a\nb\nq",
          "expectedOutput": "Run:a\nRun:b"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "무한 루프 상수와 종료 키워드를 채워 0이 입력될 때까지 들어온 모든 정수의 합을 출력해보세요.",
      "prompt_en": "Fill in the infinite-loop boolean and exit keyword to sum integers until 0 is entered.",
      "hint_ko": "첫 글자가 대문자인 네 글자 참 불리언 상수로 무한 반복을 열고, 0이 들어오면 '중단하다'라는 다섯 글자 키워드로 멈춥니다.",
      "hint_en": "Open the endless loop with the capitalized 4-letter truth literal, and exit on zero using the 5-letter stop keyword.",
      "templateCode": "total = 0\nwhile §§§§:\n    x = int(input())\n    if x == 0:\n        §§§§§\n    total += x\nprint(total)",
      "targetCode": "total = 0\nwhile True:\n    x = int(input())\n    if x == 0:\n        break\n    total += x\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "10\n20\n0",
          "expectedOutput": "30"
        },
        {
          "id": 2,
          "input": "5\n-2\n7\n0",
          "expectedOutput": "10"
        },
        {
          "id": 3,
          "input": "8\n0",
          "expectedOutput": "8"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "while True 반복에서 0이 입력되면 break로 멈추고, 음수(x < 0)는 continue로 건너뛰어 양수만의 합을 출력해보세요.",
      "prompt_en": "In a while True loop, break on 0, skip negatives with continue, and print the sum of positives.",
      "hint_ko": "입력을 받은 뒤 0이면 전체 반복을 종료하고, 음수면 이번 차례만 건너뛰어 양수만 누적 합계에 더해지게 배치하세요.",
      "hint_en": "After reading each integer, test for zero to exit the loop and test for negatives to skip before adding to total.",
      "targetCode": "total = 0\nwhile True:\n    x = int(input())\n    if x == 0:\n        break\n    if x < 0:\n        continue\n    total += x\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "5\n-3\n7\n0",
          "expectedOutput": "12"
        },
        {
          "id": 2,
          "input": "10\n-1\n4\n0",
          "expectedOutput": "14"
        },
        {
          "id": 3,
          "input": "-5\n8\n0",
          "expectedOutput": "8"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "실수 변환 함수와 종료 키워드를 채워 음수가 입력되기 전까지 들어온 실수 점수들의 평균을 출력해보세요.",
      "prompt_en": "Fill in the float conversion function and exit keyword to print the average of non-negative float inputs.",
      "hint_ko": "부동소수점(floating-point)의 앞 다섯 글자를 딴 변환 함수로 입력을 읽고, 음수일 때는 다섯 글자 종료 키워드로 탈출하세요.",
      "hint_en": "Parse each score with the 5-letter function from \"floating-point\", and exit on a negative input with the 5-letter stop keyword.",
      "templateCode": "total = 0.0\ncnt = 0\nwhile True:\n    s = §§§§§(input())\n    if s < 0:\n        §§§§§\n    total += s\n    cnt += 1\nprint(total / cnt)",
      "targetCode": "total = 0.0\ncnt = 0\nwhile True:\n    s = float(input())\n    if s < 0:\n        break\n    total += s\n    cnt += 1\nprint(total / cnt)",
      "testCases": [
        {
          "id": 1,
          "input": "80.0\n90.0\n-1.0",
          "expectedOutput": "85.0"
        },
        {
          "id": 2,
          "input": "10.0\n20.0\n30.0\n-5.0",
          "expectedOutput": "20.0"
        },
        {
          "id": 3,
          "input": "7.5\n2.5\n-0.1",
          "expectedOutput": "5.0"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "1부터 차례로 더하다가 total >= limit가 되는 순간 break로 멈추고 str(i) + \":\" + str(total)을 출력해보세요. (예: 10 -> 4:10)",
      "prompt_en": "Add 1, 2, 3... in a while True loop, break when total >= limit, and print str(i) + \":\" + str(total).",
      "hint_ko": "현재 숫자 i를 먼저 더한 직후 기준값 도달 여부를 검사해 탈출해야 멈춘 시점의 정확한 i를 유지할 수 있습니다.",
      "hint_en": "Add i to total first, then test whether total has reached limit to exit before incrementing i for the next turn.",
      "targetCode": "limit = int(input())\ntotal = 0\ni = 1\nwhile True:\n    total += i\n    if total >= limit:\n        break\n    i += 1\nprint(str(i) + \":\" + str(total))",
      "testCases": [
        {
          "id": 1,
          "input": "10",
          "expectedOutput": "4:10"
        },
        {
          "id": 2,
          "input": "12",
          "expectedOutput": "5:15"
        },
        {
          "id": 3,
          "input": "6",
          "expectedOutput": "3:6"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "공백 분리 메서드와 건너뛰기 키워드를 채워 \"end\"면 종료하고 \"skip\"이면 건너뛰며 값들을 합산해보세요.",
      "prompt_en": "Fill in the split method and skip keyword to sum values until \"end\" while ignoring \"skip\" lines.",
      "hint_ko": "'쪼개다'를 뜻하는 다섯 글자 문자열 메서드로 입력을 나누고, 무시할 명령일 때는 '계속하다'라는 여덟 글자 키워드로 건너뛰세요.",
      "hint_en": "Split the line using the 5-letter method meaning \"divide\", and skip unwanted lines with the 8-letter \"keep going\" keyword.",
      "templateCode": "total = 0\nwhile True:\n    cmd, val = input().§§§§§()\n    if cmd == \"end\":\n        break\n    if cmd == \"skip\":\n        §§§§§§§§\n    total += int(val)\nprint(total)",
      "targetCode": "total = 0\nwhile True:\n    cmd, val = input().split()\n    if cmd == \"end\":\n        break\n    if cmd == \"skip\":\n        continue\n    total += int(val)\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "add 10\nskip 50\nadd 25\nend 0",
          "expectedOutput": "35"
        },
        {
          "id": 2,
          "input": "skip 9\nadd 8\nend 0",
          "expectedOutput": "8"
        },
        {
          "id": 3,
          "input": "add 4\nadd 6\nskip 3\nend 0",
          "expectedOutput": "10"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "반복 제어 키워드 버그를 고쳐 짝수만 건너뛰고 1부터 n까지의 모든 홀수 합이 출력되게 해보세요.",
      "prompt_en": "Fix the loop-control keyword bug so even numbers are skipped and all odds in 1..n are summed.",
      "hint_ko": "첫 짝수를 만났을 때 반복문 전체를 아예 끝내 버려서 그 뒤에 남아 있는 홀수들까지 더해지지 못하고 있습니다.",
      "hint_en": "Exiting the whole loop on the first even number abandons all remaining odd numbers; skip only the current turn instead.",
      "templateCode": "n = int(input())\ntotal = 0\nfor i in range(1, n + 1):\n    if i % 2 == 0:\n        break\n    total += i\nprint(total)",
      "targetCode": "n = int(input())\ntotal = 0\nfor i in range(1, n + 1):\n    if i % 2 == 0:\n        continue\n    total += i\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "5",
          "expectedOutput": "9"
        },
        {
          "id": 2,
          "input": "6",
          "expectedOutput": "9"
        },
        {
          "id": 3,
          "input": "7",
          "expectedOutput": "16"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "종료 조건 블록 아래에 한 줄을 추가하여 \"stop\"이 아닌 입력 단어 word를 그대로 출력해보세요.",
      "prompt_en": "Add one line below the break block to print each input word before \"stop\".",
      "hint_ko": "종료 단어가 아닐 때마다 실행되어야 하므로 반복문 안쪽 들여쓰기에 맞춰 입력된 단어 변수를 출력해보세요.",
      "hint_en": "Indent to the loop body level below the exit check so each non-sentinel word is printed.",
      "templateCode": "while True:\n    word = input()\n    if word == \"stop\":\n        break\n    §§§§§§§§§§§",
      "targetCode": "while True:\n    word = input()\n    if word == \"stop\":\n        break\n    print(word)",
      "testCases": [
        {
          "id": 1,
          "input": "hi\nok\nstop",
          "expectedOutput": "hi\nok"
        },
        {
          "id": 2,
          "input": "one\nstop",
          "expectedOutput": "one"
        },
        {
          "id": 3,
          "input": "a\nb\nc\nstop",
          "expectedOutput": "a\nb\nc"
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
      "hint_ko": "짝수일 때 아래 종료 검사까지 건너뛴다는 점에 유의하며(특히 6일 때), 실제로 반복이 멈추는 i와 그때까지 누적된 합을 추적해보세요.",
      "hint_en": "Notice that even numbers jump past the exit check too—trace what happens at 6 and 7 alongside the running odd sum.",
      "targetCode": "i = 0\ns = 0\nwhile True:\n    i += 1\n    if i % 2 == 0:\n        continue\n    if i > 6:\n        break\n    s += i\nprint(i, s)",
      "choices": [
        "7 9",
        "6 9",
        "7 16",
        "5 9"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "7 9"
        }
      ]
    }
  ]
};
