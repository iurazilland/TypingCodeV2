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
      "hint_ko": "반복문 안에 조건 블록을 중첩하고, 3으로 나눈 나머지가 0일 때만 한 단계 더 들여써서 출력 블록을 실행하세요.",
      "hint_en": "Nest the remainder check inside the loop and indent the print block inside that condition.",
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
      "prompt_ko": "나머지 연산자와 비교 연산자를 채워 1부터 n까지 중 n의 약수를 모두 출력해보세요. (터미널 입력: 6)",
      "prompt_en": "Fill in the modulo and equality operators to print every divisor of n from 1 through n. (Terminal input: 6)",
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
      "prompt_ko": "정수 n을 입력받아 1부터 n까지 n의 약수가 총 몇 개인지 cnt에 세어 출력해보세요. (터미널 입력: 6)",
      "prompt_en": "Read integer n, count how many divisors n has in 1..n, and print cnt. (Terminal input: 6)",
      "hint_ko": "나머지가 0인 약수 조건 안쪽에서만 개수 변수를 1씩 늘리고, 반복문을 빠져나온 뒤 최종 개수를 출력하세요.",
      "hint_en": "Increment the counter only inside the zero-remainder branch, then print the total count after the loop.",
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
      "prompt_ko": "빈칸에 논리 연산자를 채워 1부터 n까지 중 3의 배수이거나 5의 배수인 수들의 합을 출력해보세요. (터미널 입력: 10)",
      "prompt_en": "Fill in the logical operator to sum numbers in 1..n divisible by 3 or by 5. (Terminal input: 10)",
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
      "prompt_ko": "1부터 입력받은 n까지 중 2의 배수이면서 동시에 3의 배수인 공배수만 출력해보세요. (터미널 입력: 15)",
      "prompt_en": "Print numbers from 1 through n that are divisible by both 2 and 3. (Terminal input: 15)",
      "hint_ko": "2로 나누어떨어지는 조건과 3으로 나누어떨어지는 조건을 동시 만족 논리 연산자로 묶어 공배수만 출력하세요.",
      "hint_en": "Connect both remainder-zero checks with a simultaneous-truth logical operator inside the loop.",
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
      "prompt_ko": "첫 줄에 low high를 공백으로 입력받고, 빈칸에 논리 연산자를 채워 이어지는 4개의 정수 중 low 이상이고 high 이하인 값의 개수를 출력해보세요. (터미널 입력: 10 20, 5, 12, 20, 25 한 줄씩)",
      "prompt_en": "Fill in the logical operator to count how many of 4 integers fall between low and high inclusive. (Terminal input: 10 20, 5, 12, 20, 25 line by line)",
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
      "prompt_ko": "1부터 n까지 6의 배수면 \"AB\", 아니고 2의 배수면 \"A\", 그 외에는 숫자 i를 그대로 출력해보세요. (터미널 입력: 6)",
      "prompt_en": "From 1 to n, print \"AB\" for multiples of 6, else \"A\" for multiples of 2, else i. (Terminal input: 6)",
      "hint_ko": "6의 배수는 2의 배수에도 포함되므로 더 좁은 조건인 6의 배수를 가장 먼저 검사한 뒤 차례로 분기하세요.",
      "hint_en": "Because multiples of 6 are also multiples of 2, test the narrower multiple-of-6 condition first before the others.",
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
      "prompt_ko": "두 조건 분기 키워드를 채워 n개의 정수 중 양수 개수(pos), 음수 개수(neg)를 세고 0이면 \"Zero\"를 출력해보세요. (터미널 입력: 4, 2, -1, 0, 3 한 줄씩)",
      "prompt_en": "Fill in the two branching keywords to count positive and negative integers and print \"Zero\" for 0. (Terminal input: 4, 2, -1, 0, 3 line by line)",
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
      "prompt_ko": "초기 체력 hp = 50에서 n번 정수를 입력받아 양수면 hp += d, 0 이하면 hp -= 10을 적용한 뒤 res = str(hp)를 사용해 \"HP:\" + res를 출력해보세요. (터미널 입력: 3, 20, 0, 15 한 줄씩)",
      "prompt_en": "Starting at hp = 50, read n integers: if d > 0 add d to hp, else subtract 10, then store res = str(hp) and print \"HP:\" + res. (Terminal input: 3, 20, 0, 15 line by line)",
      "hint_ko": "반복문 안에서 입력값의 부호에 따라 체력을 더하거나 빼고, 모든 반복이 끝난 뒤 res 변수에 문자열 변환 값을 저장해 접두사와 이어 출력하세요.",
      "hint_en": "Branch on each input's sign inside the loop to adjust hp, then store str(hp) in res for the final output outside.",
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
      "prompt_ko": "빈칸에 비교 연산자를 채워 약수의 개수가 정확히 2개인 소수이면 True, 아니면 False를 출력해보세요. (터미널 입력: 7)",
      "prompt_en": "Fill in the comparison operator to print True when n has exactly 2 divisors and False otherwise. (Terminal input: 7)",
      "hint_ko": "누적된 약수 개수가 2와 일치하는지 참·거짓으로 판별하려면 등호 두 개를 나란히 붙인 비교 연산자를 사용합니다.",
      "hint_en": "Write two equals signs side by side to test whether the divisor count matches 2.",
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
      "prompt_ko": "논리 연산자 버그를 고쳐 1부터 n까지 중 2와 5로 모두 나누어떨어지는 공배수만 출력되게 해보세요. (터미널 입력: 25)",
      "prompt_en": "Fix the logical operator bug so only numbers divisible by both 2 and 5 are printed. (Terminal input: 25)",
      "hint_ko": "현재 조건은 둘 중 하나만 나누어떨어져도 참이 되는 논리합 연산자여서 공배수가 아닌 수까지 섞여 나오고 있습니다.",
      "hint_en": "The condition currently passes numbers divisible by either factor alone instead of requiring both checks to hold together.",
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
      "prompt_ko": "조건문 아래에 한 줄을 추가하여 1부터 n까지 중 홀수이면서 3의 배수인 수를 순서대로 출력해보세요. (터미널 입력: 10)",
      "prompt_en": "Add one line under the if condition to print numbers in 1..n that are odd multiples of 3. (Terminal input: 10)",
      "hint_ko": "반복문 안의 조건문 내부 블록이므로 두 단계(공백 8칸) 들여쓰기하여 조건을 통과한 숫자를 출력해보세요.",
      "hint_en": "Indent two levels deep (8 spaces) inside the conditional block to output the matching loop variable.",
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
