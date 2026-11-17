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
  "totalQuestions": 15,
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] i가 4일 때 break로 반복문을 즉시 탈출하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the blocks to exit the loop early with break when i == 4.",
      "hint_ko": "print(i)보다 위에서 if i == 4: 조건으로 break를 실행하므로 4부터는 출력되지 않고 멈춥니다.",
      "hint_en": "Because break runs inside if i == 4: before print(i), the loop stops before printing 4.",
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
      "prompt_ko": "[빈칸 채우기] 반복 종료 키워드를 채워 n의 가장 작은 약수(1 제외)만 출력하고 멈춰보세요.",
      "prompt_en": "[Fill Blank] Fill in the loop-termination keyword to print only the smallest divisor > 1.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] continue 키워드로 i가 3일 때만 출력을 건너뛰는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the blocks to skip printing when i == 3 using continue.",
      "hint_ko": "i가 3일 때만 continue를 만나 print(i)를 건너뛰고, 4와 5는 정상적으로 이어서 출력됩니다.",
      "hint_en": "When i is 3, continue skips print(i) for that turn, and the loop continues with 4 and 5.",
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
      "prompt_ko": "[빈칸 채우기] 건너뛰기 키워드를 채워 1부터 n까지 중 3의 배수를 제외한 합을 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the skip keyword to exclude multiples of 3 from the sum.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] while True: 무한 루프에서 \"q\"가 입력되면 break로 종료하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Exit the while True: loop with break when cmd equals \"q\".",
      "hint_ko": "\"q\"가 입력되면 print()에 도달하기 전에 break가 실행되어 루프가 즉시 종료됩니다.",
      "hint_en": "When \"q\" is entered, break runs before print(), exiting the loop immediately.",
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
      "prompt_ko": "[빈칸 채우기] 무한 루프 상수와 종료 키워드를 채워 0이 입력될 때까지 정수의 합을 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in True and break to sum integers until 0 is entered.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 0이면 종료(break)하고 음수면 건너뛰며(continue) 양수만 합산해보세요.",
      "prompt_en": "[Block] Exit on 0 with break and skip negatives with continue to sum positives.",
      "hint_ko": "x == 0이면 루프를 탈출하고, x < 0이면 total += x를 건너뛰어 다음 입력을 받으러 올라갑니다.",
      "hint_en": "x == 0 exits the loop, while x < 0 skips total += x and jumps to the next input.",
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
      "prompt_ko": "[빈칸 채우기] 정수 변환 함수와 종료 키워드를 채워 음수 전까지 점수의 평균을 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in int and break to print the average of non-negative scores.",
      "hint_ko": "정수(integer)의 앞 세 글자를 딴 변환 함수로 입력을 읽고, 음수일 때는 다섯 글자 종료 키워드로 탈출하세요.",
      "hint_en": "Parse each score with the 3-letter function from \"integer\", and exit on a negative input with the 5-letter stop keyword.",
      "templateCode": "total = 0\ncnt = 0\nwhile True:\n    s = §§§(input())\n    if s < 0:\n        §§§§§\n    total += s\n    cnt += 1\nprint(total / cnt)",
      "targetCode": "total = 0\ncnt = 0\nwhile True:\n    s = int(input())\n    if s < 0:\n        break\n    total += s\n    cnt += 1\nprint(total / cnt)",
      "testCases": [
        {
          "id": 1,
          "input": "80\n90\n-1",
          "expectedOutput": "85.0"
        },
        {
          "id": 2,
          "input": "10\n20\n30\n-5",
          "expectedOutput": "20.0"
        },
        {
          "id": 3,
          "input": "7\n3\n-1",
          "expectedOutput": "5.0"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 합산 직후 total >= limit이면 break로 탈출해 합계를 출력해보세요.",
      "prompt_en": "[Block] Break out of while True: as soon as total >= limit and print Sum:res.",
      "hint_ko": "break가 실행되면 아래쪽 i += 1을 거치지 않고 곧바로 루프 바깥의 res = str(total) 줄로 이동합니다.",
      "hint_en": "When break executes, it skips i += 1 and jumps directly to res = str(total) outside the loop.",
      "targetCode": "limit = int(input())\ntotal = 0\ni = 1\nwhile True:\n    total += i\n    if total >= limit:\n        break\n    i += 1\nres = str(total)\nprint(\"Sum:\" + res)",
      "testCases": [
        {
          "id": 1,
          "input": "10",
          "expectedOutput": "Sum:10"
        },
        {
          "id": 2,
          "input": "12",
          "expectedOutput": "Sum:15"
        },
        {
          "id": 3,
          "input": "6",
          "expectedOutput": "Sum:6"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 두 빈칸을 채워 \"end\"면 종료하고 \"skip\"이면 건너뛰며 값을 합산해보세요.",
      "prompt_en": "[Fill Blank] Fill in split and continue to sum values until \"end\".",
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
      "prompt_ko": "[틀린 곳 수정] 짝수를 건너뛰고 1부터 n까지의 홀수 합이 출력되도록 continue 조건을 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the remainder condition before continue so even numbers are skipped.",
      "hint_ko": "현재 i % 2 == 1(홀수)을 건너뛰고 있습니다. 짝수를 건너뛰도록 i % 2 == 0으로 고쳐보세요.",
      "hint_en": "Change i % 2 == 1 to i % 2 == 0 so even numbers trigger continue and odd numbers are summed.",
      "templateCode": "n = int(input())\ntotal = 0\nfor i in range(1, n + 1):\n    if i % 2 == 1:\n        continue\n    total += i\nprint(total)",
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
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 0이 입력되었을 때만 루프가 종료되도록 break 조건의 비교 연산자를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the comparison operator in the sentinel check so the loop breaks on 0.",
      "hint_ko": "if x != 0:으로 되어 있어 첫 양수 입력에서 바로 종료됩니다. if x == 0:으로 고쳐보세요.",
      "hint_en": "Change if x != 0: to if x == 0: so the loop exits only when 0 is entered.",
      "templateCode": "total = 0\nwhile True:\n    x = int(input())\n    if x != 0:\n        break\n    total += x\nprint(total)",
      "targetCode": "total = 0\nwhile True:\n    x = int(input())\n    if x == 0:\n        break\n    total += x\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "10\n20\n0",
          "expectedOutput": "30"
        },
        {
          "id": 2,
          "input": "5\n7\n0",
          "expectedOutput": "12"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] word가 \"stop\"일 때 무한 루프를 즉시 탈출하는 제어문 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the 8-space indented break statement inside if word == \"stop\":.",
      "hint_ko": "8칸 들여쓰기 뒤에 다섯 글자 종료 키워드 break를 작성해보세요.",
      "hint_en": "Keep the 8-space indentation and write break.",
      "templateCode": "while True:\n    word = input()\n    if word == \"stop\":\n        §§§§§\n    print(word)",
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
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] i가 3의 배수일 때 아래 합산을 건너뛰고 다음 반복으로 넘어가는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the 8-space indented continue statement inside if i % 3 == 0:.",
      "hint_ko": "8칸 들여쓰기 뒤에 여덟 글자 건너뛰기 키워드 continue를 작성해보세요.",
      "hint_en": "Keep the 8-space indentation and write continue.",
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
      "hint_ko": "짝수일 때 아래 종료 검사까지 건너뛴다는 점에 유의하며 실제로 반복이 멈추는 i와 그때까지 누적된 합을 추적해보세요.",
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
