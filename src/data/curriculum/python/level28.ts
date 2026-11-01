import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_28: PracticeRound = {
  "id": "py-basic-r28",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 28,
  "title_ko": "28레벨: while 조건 반복문 기초",
  "title_en": "Level 28: while Conditional Loops Basics",
  "description_ko": "조건식이 참인 동안 반복하는 while문과 Truthy 조건(while n:), 자릿수 분리(n % 10, n //= 10)를 익힙니다.",
  "description_en": "Learn conditional while loops, Truthy conditions (while n:), and digit extraction (n % 10, n //= 10).",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "type",
    "if",
    "for_range",
    "range",
    "while"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "i = 1부터 while i <= 4인 동안 i를 출력하고 1씩 증가시켜 1부터 4까지 출력해보세요.",
      "prompt_en": "Starting from i = 1, print i and increment i by 1 while i <= 4.",
      "hint_ko": "while i <= 4: 안에서 print(i) 다음에 i += 1을 꼭 실행해야 무한 반복을 피할 수 있습니다.",
      "hint_en": "Inside while i <= 4:, run print(i) followed by i += 1.",
      "targetCode": "i = 1\nwhile i <= 4:\n    print(i)\n    i += 1",
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
      "prompt_ko": "조건 반복 키워드와 감소 연산자를 채워 입력받은 n부터 1까지 카운트다운한 뒤 \"Go!\"를 출력해보세요.",
      "prompt_en": "Fill in the conditional loop keyword and decrement operator to count down from n to 1, then print \"Go!\".",
      "hint_ko": "조건이 참인 동안 반복하는 while과 값을 1씩 줄이는 -= 연산자를 입력하세요.",
      "hint_en": "Use while for the loop header and -= to decrease n by 1.",
      "templateCode": "n = int(input())\n§§§§§ n > 0:\n    print(n)\n    n §§ 1\nprint(\"Go!\")",
      "targetCode": "n = int(input())\nwhile n > 0:\n    print(n)\n    n -= 1\nprint(\"Go!\")",
      "testCases": [
        {
          "id": 1,
          "input": "3",
          "expectedOutput": "3\n2\n1\nGo!"
        },
        {
          "id": 2,
          "input": "2",
          "expectedOutput": "2\n1\nGo!"
        },
        {
          "id": 3,
          "input": "4",
          "expectedOutput": "4\n3\n2\n1\nGo!"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "1부터 차례로 자연수를 더하다가 누적합 total이 입력값 limit 이상이 되면 멈추고 total을 출력해보세요.",
      "prompt_en": "Add 1, 2, 3... while total < limit, then print the resulting total.",
      "hint_ko": "total = 0, i = 1로 두고 while total < limit: 동안 total += i와 i += 1을 실행하세요.",
      "hint_en": "Start total = 0 and i = 1; while total < limit, execute total += i and i += 1.",
      "targetCode": "limit = int(input())\ntotal = 0\ni = 1\nwhile total < limit:\n    total += i\n    i += 1\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "10",
          "expectedOutput": "10"
        },
        {
          "id": 2,
          "input": "12",
          "expectedOutput": "15"
        },
        {
          "id": 3,
          "input": "5",
          "expectedOutput": "6"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "비교 연산자와 곱셈 복합 대입 연산자를 채워 1에서 2씩 곱해 target 이상이 되는 첫 값을 출력해보세요.",
      "prompt_en": "Fill in the comparison and multiplication-assignment operators to double val until it reaches target.",
      "hint_ko": "val이 아직 target보다 작을 동안(<) 반복하며 *= 연산자로 2를 곱합니다.",
      "hint_en": "Keep doubling with *= while val is strictly less than (<) target.",
      "templateCode": "target = int(input())\nval = 1\nwhile val § target:\n    val §§ 2\nprint(val)",
      "targetCode": "target = int(input())\nval = 1\nwhile val < target:\n    val *= 2\nprint(val)",
      "testCases": [
        {
          "id": 1,
          "input": "10",
          "expectedOutput": "16"
        },
        {
          "id": 2,
          "input": "8",
          "expectedOutput": "8"
        },
        {
          "id": 3,
          "input": "20",
          "expectedOutput": "32"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "양의 정수 n을 입력받아 while n > 0 동안 일의 자리(n % 10)를 s에 더하고 n //= 10으로 줄여 자릿수 합을 출력해보세요.",
      "prompt_en": "Read positive integer n and sum all its digits using n % 10 and n //= 10 while n > 0.",
      "hint_ko": "n % 10은 마지막 자릿수를 꺼내고, n //= 10은 마지막 자릿수를 잘라냅니다.",
      "hint_en": "n % 10 extracts the ones digit and n //= 10 removes it via floor division.",
      "targetCode": "n = int(input())\ns = 0\nwhile n > 0:\n    s += n % 10\n    n //= 10\nprint(s)",
      "testCases": [
        {
          "id": 1,
          "input": "482",
          "expectedOutput": "14"
        },
        {
          "id": 2,
          "input": "105",
          "expectedOutput": "6"
        },
        {
          "id": 3,
          "input": "99",
          "expectedOutput": "18"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "Truthy 조건 while n을 완성하고 몫 복합 대입 연산자를 채워 양의 정수 n의 자릿수 개수를 출력해보세요.",
      "prompt_en": "Fill in the while keyword and floor-division assignment operator to count the digits of n.",
      "hint_ko": "양의 정수 n은 0이 되기 전까지 참(Truthy)이므로 while n:으로 반복하고 //=로 10씩 나눕니다.",
      "hint_en": "Non-zero n is Truthy in while n:, and n //= 10 drops one digit per step.",
      "templateCode": "n = int(input())\ncnt = 0\n§§§§§ n:\n    cnt += 1\n    n §§§ 10\nprint(cnt)",
      "targetCode": "n = int(input())\ncnt = 0\nwhile n:\n    cnt += 1\n    n //= 10\nprint(cnt)",
      "testCases": [
        {
          "id": 1,
          "input": "482",
          "expectedOutput": "3"
        },
        {
          "id": 2,
          "input": "75",
          "expectedOutput": "2"
        },
        {
          "id": 3,
          "input": "9015",
          "expectedOutput": "4"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "양의 정수 n을 입력받아 while n 동안 각 자릿수 d = n % 10 중 짝수 자릿수만 더한 합을 출력해보세요.",
      "prompt_en": "Read positive integer n and use while n to sum only the even digits of n.",
      "hint_ko": "while n: 안에서 d = n % 10을 구해 if d % 2 == 0:일 때만 even_s += d를 실행하고 n //= 10으로 줄이세요.",
      "hint_en": "Inside while n:, extract d = n % 10, add to even_s if d % 2 == 0, then run n //= 10.",
      "targetCode": "n = int(input())\neven_s = 0\nwhile n:\n    d = n % 10\n    if d % 2 == 0:\n        even_s += d\n    n //= 10\nprint(even_s)",
      "testCases": [
        {
          "id": 1,
          "input": "4729",
          "expectedOutput": "6"
        },
        {
          "id": 2,
          "input": "135",
          "expectedOutput": "0"
        },
        {
          "id": 3,
          "input": "8062",
          "expectedOutput": "16"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 나머지 연산자를 채워 양의 정수 n의 자릿수를 거꾸로 뒤집은 정수를 출력해보세요. (예: 123 -> 321)",
      "prompt_en": "Fill in the modulo operator to reverse the digits of positive integer n.",
      "hint_ko": "기존 rev에 10을 곱해 자릿수를 밀고 n을 10으로 나눈 나머지(일의 자리)를 더합니다.",
      "hint_en": "Use % to extract the last digit n % 10 and append it onto rev * 10.",
      "templateCode": "n = int(input())\nrev = 0\nwhile n:\n    rev = rev * 10 + n § 10\n    n //= 10\nprint(rev)",
      "targetCode": "n = int(input())\nrev = 0\nwhile n:\n    rev = rev * 10 + n % 10\n    n //= 10\nprint(rev)",
      "testCases": [
        {
          "id": 1,
          "input": "123",
          "expectedOutput": "321"
        },
        {
          "id": 2,
          "input": "45",
          "expectedOutput": "54"
        },
        {
          "id": 3,
          "input": "809",
          "expectedOutput": "908"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "실수 무게 w를 입력받아 w >= 1.0인 동안 절반(w = w / 2)으로 줄이며 몇 번 나누었는지 cnt를 출력해보세요.",
      "prompt_en": "Read float w, halve it (w = w / 2) while w >= 1.0, and print the step count cnt.",
      "hint_ko": "w = float(input())과 cnt = 0을 만든 뒤 while w >= 1.0: 안에서 w = w / 2와 cnt += 1을 실행하세요.",
      "hint_en": "Read w = float(input()), loop while w >= 1.0 running w = w / 2 and cnt += 1, then print cnt.",
      "targetCode": "w = float(input())\ncnt = 0\nwhile w >= 1.0:\n    w = w / 2\n    cnt += 1\nprint(cnt)",
      "testCases": [
        {
          "id": 1,
          "input": "8.0",
          "expectedOutput": "4"
        },
        {
          "id": 2,
          "input": "3.0",
          "expectedOutput": "2"
        },
        {
          "id": 3,
          "input": "1.0",
          "expectedOutput": "1"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 문자열 변환 함수를 채워 양의 정수 n을 2로 나눈 나머지를 앞에 이어 붙인 이진수 문자열을 출력해보세요. (예: 5 -> Bin:101)",
      "prompt_en": "Fill in the string conversion function to build and print the binary representation of positive integer n.",
      "hint_ko": "정수 나머지 n % 2를 문자열 res 앞에 결합하려면 str() 함수로 감싸야 합니다.",
      "hint_en": "Wrap n % 2 with str() to prepend each binary digit to res.",
      "templateCode": "n = int(input())\nres = \"\"\nwhile n > 0:\n    res = §§§(n % 2) + res\n    n //= 2\nprint(\"Bin:\" + res)",
      "targetCode": "n = int(input())\nres = \"\"\nwhile n > 0:\n    res = str(n % 2) + res\n    n //= 2\nprint(\"Bin:\" + res)",
      "testCases": [
        {
          "id": 1,
          "input": "5",
          "expectedOutput": "Bin:101"
        },
        {
          "id": 2,
          "input": "6",
          "expectedOutput": "Bin:110"
        },
        {
          "id": 3,
          "input": "8",
          "expectedOutput": "Bin:1000"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "while 조건식의 비교 연산자 버그를 고쳐 양의 정수 n의 모든 자릿수 합이 출력되게 해보세요.",
      "prompt_en": "Fix the comparison operator bug in the while condition so the digits of positive integer n are summed.",
      "hint_ko": "양의 정수 n은 0보다 큰 상태에서 시작하므로 n이 양수일 동안 반복되어야 합니다.",
      "hint_en": "Since n starts positive, loop while n is greater than 0 rather than less than 0.",
      "templateCode": "n = int(input())\ns = 0\nwhile n < 0:\n    s += n % 10\n    n //= 10\nprint(s)",
      "targetCode": "n = int(input())\ns = 0\nwhile n > 0:\n    s += n % 10\n    n //= 10\nprint(s)",
      "testCases": [
        {
          "id": 1,
          "input": "375",
          "expectedOutput": "15"
        },
        {
          "id": 2,
          "input": "42",
          "expectedOutput": "6"
        },
        {
          "id": 3,
          "input": "901",
          "expectedOutput": "10"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "while 반복문 아래에 한 줄을 추가하여 모든 자릿수를 곱한 최종 결과 prod를 출력해보세요.",
      "prompt_en": "Add one line after the while loop to print the final product of digits prod.",
      "hint_ko": "반복문이 끝난 뒤 들여쓰기 없이 print(prod)를 작성하세요.",
      "hint_en": "Without indentation after the while loop, write print(prod).",
      "templateCode": "n = int(input())\nprod = 1\nwhile n:\n    prod *= n % 10\n    n //= 10\n§§§§§§§§§§§",
      "targetCode": "n = int(input())\nprod = 1\nwhile n:\n    prod *= n % 10\n    n //= 10\nprint(prod)",
      "testCases": [
        {
          "id": 1,
          "input": "234",
          "expectedOutput": "24"
        },
        {
          "id": 2,
          "input": "52",
          "expectedOutput": "10"
        },
        {
          "id": 3,
          "input": "315",
          "expectedOutput": "15"
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
      "hint_ko": "305의 자릿수 5, 0, 3이 더해져 s=8, 3번 반복해 cnt=3이 되고 반복 종료 시 n은 0이므로 bool(n)은 False입니다.",
      "hint_en": "Digits 5, 0, 3 sum to s=8 over cnt=3 steps; n ends at 0 so bool(n) is False.",
      "targetCode": "n = 305\ns = 0\ncnt = 0\nwhile n:\n    s += n % 10\n    n //= 10\n    cnt += 1\nprint(s, cnt, bool(n))",
      "choices": [
        "8 3 False",
        "8 2 False",
        "8 3 True",
        "35 2 False"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "8 3 False"
        }
      ]
    }
  ]
};
