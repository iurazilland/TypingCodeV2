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
  "totalQuestions": 15,
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] while i <= 4: 반복문으로 1부터 4까지 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the blocks to print 1 through 4 using while i <= 4: and i += 1.",
      "hint_ko": "i가 1에서 시작해 매 반복마다 출력된 뒤 1씩 커지다가 5가 되면 i <= 4 조건이 거짓이 되어 종료됩니다.",
      "hint_en": "Starting at 1, i prints and increments by 1 each turn until it reaches 5 and fails i <= 4.",
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
      "prompt_ko": "[빈칸 채우기] 조건 반복 키워드와 감소 연산자를 채워 n부터 1까지 출력한 뒤 \"Go!\"를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the while keyword and decrement operator to count down from n to 1.",
      "hint_ko": "영어로 '~하는 동안'을 뜻하는 다섯 글자 반복 키워드와, 뺄셈 기호에 등호를 붙인 감소 연산자를 채워보세요.",
      "hint_en": "Start with the 5-letter loop keyword meaning \"during the time that\", and use the minus-equals operator to count down.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] while total < limit: 조건으로 기준치 이상이 될 때까지 합산해보세요.",
      "prompt_en": "[Block] Keep adding i onto total while total < limit, then print total.",
      "hint_ko": "total이 limit보다 작은 동안만 자연수 i를 더하고, limit 이상이 되는 순간 반복문을 빠져나와 합계를 출력합니다.",
      "hint_en": "It adds i while total is strictly less than limit, exiting as soon as total reaches or exceeds limit.",
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
      "prompt_ko": "[빈칸 채우기] 비교 기호와 복합 대입 연산자를 채워 2씩 곱해 target 이상이 되는 첫 값을 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the comparison and multiplication-assignment operators.",
      "hint_ko": "값이 목표치보다 작음을 뜻하는 왼쪽 꺾쇠 비교 기호와, 별표에 등호를 붙인 곱셈 대입 연산자를 채워보세요.",
      "hint_en": "Use the left-pointing less-than symbol for the loop condition and the asterisk-equals operator to double val.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] n % 10과 n //= 10으로 양의 정수 n의 모든 자릿수 합을 구해보세요.",
      "prompt_en": "[Block] Sum every digit of n using s += n % 10 and n //= 10.",
      "hint_ko": "482에서 2, 8, 4가 차례로 꺼내져 s에 더해지고, n이 0이 되면 반복이 멈춥니다.",
      "hint_en": "Digits 2, 8, and 4 are extracted and added to s in turn until n becomes 0 and the loop stops.",
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
      "prompt_ko": "[빈칸 채우기] 반복 키워드와 몫 복합 대입 연산자를 채워 양의 정수 n의 자릿수 개수를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in while and //= to count the digits of positive integer n.",
      "hint_ko": "'~하는 동안'을 뜻하는 다섯 글자 키워드로 n이 0이 될 때까지 돌리고, 슬래시 두 개와 등호를 붙인 연산자로 자릿수를 줄이세요.",
      "hint_en": "Use the 5-letter conditional loop keyword until n reaches zero, and the double-slash-equals operator to strip each digit.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] while n: 안에서 짝수 자릿수(d % 2 == 0)만 골라 합산하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Sum only the even digits of n using a nested if check inside while n:.",
      "hint_ko": "자릿수를 줄이는 n //= 10은 홀수·짝수 여부와 관계없이 매 반복마다 실행되도록 if 블록 바깥에 둡니다.",
      "hint_en": "Keep n //= 10 outside the if block (but inside the while loop) so the digit is stripped on every turn.",
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
      "prompt_ko": "[빈칸 채우기] 나머지 연산자와 누적 연산자를 채워 n의 홀수 자릿수 개수를 세어 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in % and += to count how many odd digits positive integer n has.",
      "hint_ko": "10으로 나눈 나머지로 일의 자리를 구하고, 홀수일 때마다 개수를 1씩 누적(+=)해보세요.",
      "hint_en": "Extract the ones digit with % 10 and increment odd_cnt with += 1 when odd.",
      "templateCode": "n = int(input())\nodd_cnt = 0\nwhile n:\n    d = n § 10\n    if d % 2 == 1:\n        odd_cnt §§ 1\n    n //= 10\nprint(odd_cnt)",
      "targetCode": "n = int(input())\nodd_cnt = 0\nwhile n:\n    d = n % 10\n    if d % 2 == 1:\n        odd_cnt += 1\n    n //= 10\nprint(odd_cnt)",
      "testCases": [
        {
          "id": 1,
          "input": "123",
          "expectedOutput": "2"
        },
        {
          "id": 2,
          "input": "45",
          "expectedOutput": "1"
        },
        {
          "id": 3,
          "input": "809",
          "expectedOutput": "1"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] w가 1 미만으로 줄어들 때까지 2로 나눈 횟수를 세어 출력해보세요.",
      "prompt_en": "[Block] Count how many floor divisions by 2 occur while w >= 1.",
      "hint_ko": "w가 8 -> 4 -> 2 -> 1 -> 0으로 줄어들면서 총 4번 반복된 뒤 cnt가 출력됩니다.",
      "hint_en": "As w halves through 8 -> 4 -> 2 -> 1 -> 0, the loop runs 4 times before printing cnt.",
      "targetCode": "w = int(input())\ncnt = 0\nwhile w >= 1:\n    w //= 2\n    cnt += 1\nprint(cnt)",
      "testCases": [
        {
          "id": 1,
          "input": "8",
          "expectedOutput": "4"
        },
        {
          "id": 2,
          "input": "3",
          "expectedOutput": "2"
        },
        {
          "id": 3,
          "input": "1",
          "expectedOutput": "1"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 문자열 변환 함수를 채워 2로 나눈 나머지를 이어 붙인 이진수 문자열을 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the string conversion function to build the binary string of n.",
      "hint_ko": "2로 나눈 정수 나머지를 기존 문자열의 앞쪽에 이어 붙일 수 있도록 문자열(string)의 앞 세 글자를 딴 함수로 감싸세요.",
      "hint_en": "Wrap the remainder in the conversion function named from the first 3 letters of \"string\" before prepending it.",
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
      "prompt_ko": "[틀린 곳 수정] while 조건식의 비교 연산자를 고쳐 양의 정수 n의 자릿수 합이 출력되게 해보세요.",
      "prompt_en": "[Fix Bug] Fix the comparison operator in the while condition to sum the digits of n.",
      "hint_ko": "양의 정수는 0보다 큰 상태에서 출발하는데, 현재 조건식은 0보다 작을 때만 돌도록 부등호 방향이 반대로 되어 있습니다.",
      "hint_en": "Because a positive integer starts above zero, the reversed inequality sign prevents the loop from ever running.",
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
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 일의 자리를 구하는 산술 연산자를 고쳐 자릿수 합이 정수로 정확히 출력되게 해보세요.",
      "prompt_en": "[Fix Bug] Fix the operator extracting the ones digit so the sum of digits is printed.",
      "hint_ko": "일의 자리는 10으로 나눈 나머지(n % 10)입니다. 나눗셈 기호 /를 나머지 기호 %로 고쳐보세요.",
      "hint_en": "Replace / with % in n % 10 to extract the ones digit.",
      "templateCode": "n = int(input())\ns = 0\nwhile n > 0:\n    s += n / 10\n    n //= 10\nprint(s)",
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
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] while 반복문 안에서 일의 자리(n % 10)를 prod에 누적 곱셈(*=)하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the indented line multiplying prod by n % 10 using *=.",
      "hint_ko": "4칸 들여쓰기 뒤에 prod *= n % 10을 작성해보세요.",
      "hint_en": "Keep the 4-space indentation and write prod *= n % 10.",
      "templateCode": "n = int(input())\nprod = 1\nwhile n:\n    §§§§§§§§§§§§§§\n    n //= 10\nprint(prod)",
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
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] while 반복문 안에서 n을 10으로 나눈 정수 몫으로 갱신(//=)하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the indented line updating n with floor division by 10 (n //= 10).",
      "hint_ko": "4칸 들여쓰기 뒤에 n //= 10을 작성해 끝자리를 제거해보세요.",
      "hint_en": "Keep the 4-space indentation and write n //= 10.",
      "templateCode": "n = int(input())\ncnt = 0\nwhile n:\n    cnt += 1\n    §§§§§§§§\nprint(cnt)",
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
      "hint_ko": "일의 자리부터 차례로 떼어 더해지는 합계와 자릿수만큼 늘어나는 반복 횟수, 그리고 반복 직후 n의 불리언 판정을 추적해보세요.",
      "hint_en": "Trace each digit stripped from 305 to find the sum and step count, then check the truthiness of n once the loop ends.",
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
