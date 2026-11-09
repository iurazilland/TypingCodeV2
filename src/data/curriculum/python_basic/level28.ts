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
      "hint_ko": "조건 반복문 안에서 현재 값을 먼저 출력한 뒤 변수를 1씩 증가시켜야 언젠가 조건이 거짓이 되어 멈춥니다.",
      "hint_en": "Output the current value inside the loop body, then increment the variable by 1 so the loop eventually stops.",
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
      "prompt_ko": "1부터 차례로 자연수를 더하다가 누적합 total이 입력값 limit 이상이 되면 멈추고 total을 출력해보세요.",
      "prompt_en": "Add 1, 2, 3... while total < limit, then print the resulting total.",
      "hint_ko": "누적합이 기준값보다 작은 동안 자연수를 더하고 번호를 1씩 키운 뒤, 반복이 끝나면 바깥에서 합계를 출력하세요.",
      "hint_en": "Keep adding the counter and incrementing it as long as the sum stays below limit, then print the sum outside.",
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
      "prompt_ko": "양의 정수 n을 입력받아 while n > 0 동안 일의 자리(n % 10)를 s에 더하고 n //= 10으로 줄여 자릿수 합을 출력해보세요.",
      "prompt_en": "Read positive integer n and sum all its digits using n % 10 and n //= 10 while n > 0.",
      "hint_ko": "10으로 나눈 나머지로 가장 오른쪽 일의 자리를 떼어 더하고, 10으로 나눈 정수 몫으로 끝자리를 잘라내며 반복하세요.",
      "hint_en": "Extract the ones digit via remainder by 10 to add to the sum, then drop that digit using floor division by 10.",
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
      "prompt_ko": "양의 정수 n을 입력받아 while n 동안 각 자릿수 d = n % 10 중 짝수 자릿수만 더한 합을 출력해보세요.",
      "prompt_en": "Read positive integer n and use while n to sum only the even digits of n.",
      "hint_ko": "매 반복마다 일의 자리를 구해 짝수일 때만 합산하고, 자릿수 줄이기는 조건문 바깥(반복문 안)에서 매번 실행하세요.",
      "hint_en": "Extract the ones digit each turn, add it only inside the even check, and divide n down by 10 on every turn.",
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
      "hint_ko": "뒤집힌 수에 10을 곱해 자릿수를 밀어 올린 뒤, 10으로 나눈 나머지를 구하는 퍼센트 기호로 끝자리를 떼어 더해보세요.",
      "hint_en": "Shift rev left by multiplying by 10, then use the percent remainder symbol to extract and add the ones digit.",
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
      "prompt_ko": "정수 무게 w를 입력받아 w >= 1.0인 동안 절반(w = w / 2)으로 줄이며 몇 번 나누었는지 cnt를 출력해보세요.",
      "prompt_en": "Read integer w, halve it (w = w / 2) while w >= 1.0, and print the step count cnt.",
      "hint_ko": "정수로 입력받은 무게가 1.0 이상인 동안 절반으로 나누고 횟수를 1씩 늘린 뒤, 반복문 밖에서 횟수를 출력하세요.",
      "hint_en": "Halve the weight and increment the counter as long as weight stays at least 1.0, then print the count outside.",
      "targetCode": "w = int(input())\ncnt = 0\nwhile w >= 1.0:\n    w = w / 2\n    cnt += 1\nprint(cnt)",
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
      "prompt_ko": "빈칸에 문자열 변환 함수를 채워 양의 정수 n을 2로 나눈 나머지를 앞에 이어 붙인 이진수 문자열을 출력해보세요. (예: 5 -> Bin:101)",
      "prompt_en": "Fill in the string conversion function to build and print the binary representation of positive integer n.",
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
      "prompt_ko": "while 조건식의 비교 연산자 버그를 고쳐 양의 정수 n의 모든 자릿수 합이 출력되게 해보세요.",
      "prompt_en": "Fix the comparison operator bug in the while condition so the digits of positive integer n are summed.",
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
      "kind": "one_line",
      "prompt_ko": "while 반복문 아래에 한 줄을 추가하여 모든 자릿수를 곱한 최종 결과 prod를 출력해보세요.",
      "prompt_en": "Add one line after the while loop to print the final product of digits prod.",
      "hint_ko": "모든 자릿수 곱셈이 완료된 뒤 한 번만 실행되도록 들여쓰기 없이 누적된 곱 변수를 출력해보세요.",
      "hint_en": "Add an unindented output line after the loop finishes to display the accumulated digit product.",
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
