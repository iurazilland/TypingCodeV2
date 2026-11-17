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
  "totalQuestions": 15,
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 1부터 9까지 반복하며 3의 배수만 골라 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the blocks to filter and print only multiples of 3 in range(1, 10).",
      "hint_ko": "i % 3 == 0이 참일 때만 안쪽 print(i)가 실행되고, 거짓이면 아무 출력 없이 다음 숫자로 넘어갑니다.",
      "hint_en": "Only when i % 3 == 0 is True does the inner print(i) run; otherwise the loop moves on to the next number.",
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
      "prompt_ko": "[빈칸 채우기] 나머지 연산자와 비교 연산자를 채워 1부터 n까지 중 n의 약수를 모두 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the modulo and equality operators to print every divisor of n.",
      "hint_ko": "나눗셈 나머지를 구하는 퍼센트 기호와, 양쪽 값이 같은지 판별하는 등호 두 개짜리 비교 연산자를 순서대로 채워보세요.",
      "hint_en": "Enter the percent remainder symbol first, then the double-equals comparison operator to check for zero remainder.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 1부터 n까지 반복하며 n의 약수 개수를 세어 출력해보세요.",
      "prompt_en": "[Block] Count how many divisors n has across 1..n and print cnt.",
      "hint_ko": "cnt += 1은 if 블록 안쪽에 들여쓰기하고, 최종 개수 출력 print(cnt)는 반복문 바깥에 배치합니다.",
      "hint_en": "Indent cnt += 1 inside the if block, and place the final print(cnt) outside after the loop finishes.",
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
      "prompt_ko": "[빈칸 채우기] 논리 연산자를 채워 1부터 n까지 중 3의 배수이거나 5의 배수인 수의 합을 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the logical operator to sum numbers in 1..n divisible by 3 or 5.",
      "hint_ko": "두 배수 조건 중 어느 한쪽만 참이어도 더해야 하므로 영어로 '또는'을 뜻하는 두 글자 논리 연산자를 채워보세요.",
      "hint_en": "Since matching either divisibility test qualifies, join the two checks with the 2-letter logical disjunction keyword.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] and 연산자로 2와 3의 공배수만 골라 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Filter and print numbers in 1..n divisible by both 2 and 3.",
      "hint_ko": "2의 배수 조건(i % 2 == 0)과 3의 배수 조건(i % 3 == 0)을 모두 만족하는 6의 배수만 출력됩니다.",
      "hint_en": "Only multiples of 6 that satisfy both i % 2 == 0 and i % 3 == 0 are printed.",
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
      "prompt_ko": "[빈칸 채우기] 논리 연산자를 채워 4개의 정수 중 low 이상 high 이하인 값의 개수를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the logical operator to count integers between low and high.",
      "hint_ko": "하한 이상과 상한 이하 두 조건을 동시에 만족해야 하므로 영어로 '그리고'를 뜻하는 세 글자 논리 연산자를 사용합니다.",
      "hint_en": "Both boundary comparisons must hold together, so connect them with the 3-letter simultaneous-truth keyword.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 반복문 안에서 6의 배수는 \"AB\", 2의 배수는 \"A\", 나머지는 i를 출력해보세요.",
      "prompt_en": "[Block] Nest if-elif-else in a for loop to print \"AB\", \"A\", or i.",
      "hint_ko": "6의 배수는 2의 배수이기도 하므로 범위가 더 좁은 i % 6 == 0을 맨 위 if에서 먼저 검사합니다.",
      "hint_en": "Because multiples of 6 are also multiples of 2, check the more specific condition i % 6 == 0 first.",
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
      "prompt_ko": "[빈칸 채우기] 두 분기 키워드를 채워 양수·음수 개수를 세고 0이면 \"Zero\"를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the branching keywords to count positives and negatives.",
      "hint_ko": "두 번째 조건식이 붙는 자리에는 '그밖에 만약' 두 영단어의 앞 두 글자씩 합친 네 글자 키워드를, 마지막 기본 분기에는 '그밖에'를 뜻하는 네 글자 키워드를 채워보세요.",
      "hint_en": "Use the 4-letter chained condition keyword for the second test, followed by the 4-letter fallback keyword before the final colon.",
      "templateCode": "n = int(input())\npos = 0\nneg = 0\nfor i in range(n):\n    x = int(input())\n    if x > 0:\n        pos += 1\n    §§§§ x < 0:\n        neg += 1\n    §§§§:\n        print(\"Zero\")\nprint(pos, neg)",
      "targetCode": "n = int(input())\npos = 0\nneg = 0\nfor i in range(n):\n    x = int(input())\n    if x > 0:\n        pos += 1\n    elif x < 0:\n        neg += 1\n    else:\n        print(\"Zero\")\nprint(pos, neg)",
      "testCases": [
        {
          "id": 1,
          "input": "4\n2\n-1\n0\n3",
          "expectedOutput": "Zero\n2 1"
        },
        {
          "id": 2,
          "input": "3\n-2\n-1\n1",
          "expectedOutput": "1 2"
        },
        {
          "id": 3,
          "input": "2\n0\n4",
          "expectedOutput": "Zero\n1 0"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 입력값 d가 양수면 더하고 아니면 10을 빼서 최종 체력을 출력해보세요.",
      "prompt_en": "[Block] Add d when d > 0 or subtract 10 otherwise across n turns.",
      "hint_ko": "반복이 모두 끝난 뒤 바깥에서 최종 체력 hp를 str(hp)로 변환해 \"HP:\" 뒤에 이어 붙여 출력합니다.",
      "hint_en": "After all iterations complete, convert the final hp with str(hp) outside the loop and concatenate it onto \"HP:\".",
      "targetCode": "hp = 50\nn = int(input())\nfor i in range(n):\n    d = int(input())\n    if d > 0:\n        hp += d\n    else:\n        hp -= 10\nres = str(hp)\nprint(\"HP:\" + res)",
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
      "prompt_ko": "[빈칸 채우기] 비교 기호와 분기 키워드를 채워 약수가 2개면 True, 아니면 False를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in == and else to print True when n has 2 divisors, else False.",
      "hint_ko": "누적된 약수 개수가 2와 일치하는지 ==로 확인하고, 아닐 때는 else: 분기로 처리합니다.",
      "hint_en": "Use == to check if cnt equals 2, and write else on line 8.",
      "templateCode": "n = int(input())\ncnt = 0\nfor i in range(1, n + 1):\n    if n % i == 0:\n        cnt += 1\nif cnt §§ 2:\n    print(True)\n§§§§:\n    print(False)",
      "targetCode": "n = int(input())\ncnt = 0\nfor i in range(1, n + 1):\n    if n % i == 0:\n        cnt += 1\nif cnt == 2:\n    print(True)\nelse:\n    print(False)",
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
      "prompt_ko": "[틀린 곳 수정] 1부터 n까지 중 2와 5로 모두 나누어떨어지는 공배수만 출력되도록 비교 기호를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the comparison operator so only numbers divisible by both 2 and 5 print.",
      "hint_ko": "오른쪽 조건이 i % 5 != 0으로 되어 있어 5의 배수가 제외됩니다. i % 5 == 0으로 고쳐보세요.",
      "hint_en": "Change i % 5 != 0 to i % 5 == 0 so multiples of both 2 and 5 match.",
      "templateCode": "n = int(input())\nfor i in range(1, n + 1):\n    if i % 2 == 0 and i % 5 != 0:\n        print(i)",
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
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 정수 n의 약수 개수가 정확히 세어지도록 if 조건의 비교 연산자를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the comparison operator in the if condition to count divisors of n.",
      "hint_ko": "약수는 나누었을 때 나머지가 0인 수입니다. n % i != 0을 n % i == 0으로 고쳐보세요.",
      "hint_en": "Change n % i != 0 to n % i == 0 to count exact divisors.",
      "templateCode": "n = int(input())\ncnt = 0\nfor i in range(1, n + 1):\n    if n % i != 0:\n        cnt += 1\nprint(cnt)",
      "targetCode": "n = int(input())\ncnt = 0\nfor i in range(1, n + 1):\n    if n % i == 0:\n        cnt += 1\nprint(cnt)",
      "testCases": [
        {
          "id": 1,
          "input": "6",
          "expectedOutput": "4"
        },
        {
          "id": 2,
          "input": "7",
          "expectedOutput": "2"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] i가 홀수(i % 2 == 1)이면서 3의 배수(i % 3 == 0)인지 검사하는 if 헤더 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the indented if header testing i % 2 == 1 and i % 3 == 0.",
      "hint_ko": "4칸 들여쓰기 뒤에 if i % 2 == 1 and i % 3 == 0:을 작성해보세요.",
      "hint_en": "Keep the 4-space indentation and write if i % 2 == 1 and i % 3 == 0:.",
      "templateCode": "n = int(input())\nfor i in range(1, n + 1):\n    §§§§§§§§§§§§§§§§§§§§§§§§§§§§§\n        print(i)",
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
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 3의 배수일 때만 total에 i를 누적해 더하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the 8-space indented line adding i onto total with +=.",
      "hint_ko": "8칸 들여쓰기 뒤에 total += i를 작성해보세요.",
      "hint_en": "Keep the 8-space indentation and write total += i.",
      "templateCode": "n = int(input())\ntotal = 0\nfor i in range(1, n + 1):\n    if i % 3 == 0:\n        §§§§§§§§§§\nprint(total)",
      "targetCode": "n = int(input())\ntotal = 0\nfor i in range(1, n + 1):\n    if i % 3 == 0:\n        total += i\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "9",
          "expectedOutput": "18"
        },
        {
          "id": 2,
          "input": "6",
          "expectedOutput": "9"
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
      "hint_ko": "1부터 5까지 각 숫자가 세 갈래 분기 중 어느 조건에 먼저 해당되는지 하나씩 대입하며 점수 변화를 누적해보세요.",
      "hint_en": "Step through i from 1 to 5, match each value against the three branches in order, and track the running score.",
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
