import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_100: PracticeRound = {
  "id": "py-basic-r100",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 100,
  "title_ko": "수치 내장 함수 (abs(), round(), divmod())",
  "title_en": "Numeric Built-in Functions (abs(), round(), divmod())",
  "description_ko": "절댓값을 구하는 abs(), 반올림을 처리하는 round(), 몫과 나머지를 튜플로 반환하는 divmod()를 익힙니다.",
  "description_en": "Master abs() for absolute values, round() for decimal rounding, and divmod() for quotient-remainder pairs.",
  "totalQuestions": 15,
  "unlockedBlocks": [
    "comment",
    "print",
    "variable",
    "input",
    "type",
    "if",
    "for_range",
    "range",
    "for_in",
    "while",
    "break",
    "continue",
    "list",
    "tuple",
    "dict",
    "set",
    "iter",
    "method",
    "sorted",
    "math",
    "def",
    "return",
    "class",
    "try"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 절댓값 내장 함수를 사용해 -15의 절댓값과 10에서 25를 뺀 값의 절댓값(거리)을 구해 나란히 출력해보세요.",
      "prompt_en": "[Block] Use the built-in absolute value function to compute the magnitude of -15 and the distance between 10 and 25, then print both.",
      "hint_ko": "abs()에 음수를 넣으면 양수로 바뀌고, 두 수의 뺄셈 결과를 넣으면 항상 0 이상의 거리가 됩니다.",
      "hint_en": "abs() converts negative numbers to positive, making abs(a - b) the non-negative distance between a and b.",
      "targetCode": "val = abs(-15)\ndist = abs(10 - 25)\nprint(val, dist)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "15 15"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 두 기온 a와 b 사이의 온도 차이(거리)를 항상 양수로 출력하도록 절댓값 내장 함수를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the built-in absolute value function to print the positive difference between a and b.",
      "hint_ko": "절댓값(absolute)을 구하는 내장 함수로 뺄셈 식을 감싸세요.",
      "hint_en": "Wrap the subtraction in the built-in function abbreviated from 'absolute'.",
      "targetCode": "a, b = 12, 27\nprint(abs(a - b))",
      "templateCode": "a, b = 12, 27\nprint(§§§§(a - b))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "15"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 반올림 내장 함수를 사용해 3.6을 정수로 반올림한 값과 3.14159를 소수점 둘째 자리까지 반올림한 값을 출력해보세요.",
      "prompt_en": "[Block] Use the built-in rounding function to round 3.6 to an integer and 3.14159 to 2 decimal places, then print both.",
      "hint_ko": "두 번째 인자를 생략하면 가장 가까운 정수로 반올림하고, 2를 주면 소수 둘째 자리까지 반올림합니다.",
      "hint_en": "Omitting the second argument rounds to the nearest integer; passing 2 rounds to 2 decimal places.",
      "targetCode": "r1 = round(3.6)\nr2 = round(3.14159, 2)\nprint(r1, r2)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "4 3.14"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 평균 점수 avg를 소수 첫째 자리까지 반올림해 출력하도록 내장 함수를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the built-in rounding function to round avg to 1 decimal place.",
      "hint_ko": "숫자를 반올림해 다듬는 내장 함수를 호출하세요.",
      "hint_en": "Call the built-in function that rounds a number to a given precision.",
      "targetCode": "avg = 87.678\nprint(round(avg, 1))",
      "templateCode": "avg = 87.678\nprint(§§§§§§(avg, 1))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "87.7"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 몫과 나머지를 튜플로 반환하는 내장 함수로 17을 5로 나눈 결과를 변수 q와 r에 언패킹해 출력해보세요.",
      "prompt_en": "[Block] Unpack the quotient and remainder of 17 divided by 5 into q and r using a built-in function, then print them.",
      "hint_ko": "divmod(a, b)는 (a // b, a % b) 두 값을 묶은 튜플을 반환하므로 두 변수로 바로 언패킹할 수 있습니다.",
      "hint_en": "divmod(a, b) returns the tuple (a // b, a % b), which unpacks directly into q, r.",
      "targetCode": "q, r = divmod(17, 5)\nprint(f\"몫:{q} 나머지:{r}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "몫:3 나머지:2"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 총 초(sec)를 60으로 나눈 분(m)과 초(s)를 한 번에 구하도록 몫·나머지 내장 함수를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the built-in function that returns both the quotient and remainder when dividing by 60.",
      "hint_ko": "나눗셈(div)과 나머지(mod)를 합친 내장 함수를 입력하세요.",
      "hint_en": "Type the built-in function combining 'div' and 'mod'.",
      "targetCode": "sec = int(input())\nm, s = divmod(sec, 60)\nprint(m, s)",
      "templateCode": "sec = int(input())\nm, s = §§§§§§§(sec, 60)\nprint(m, s)",
      "testCases": [
        {
          "id": 1,
          "input": "135",
          "expectedOutput": "2 15"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 리스트 컴프리헨션으로 nums의 절댓값 리스트를 만든 뒤 합계와 최댓값을 출력해보세요.",
      "prompt_en": "[Block] Build a list of absolute values from nums using a list comprehension and print their sum and max.",
      "hint_ko": "[abs(x) for x in nums]로 모든 음수를 양수로 바꾼 뒤 sum()과 max()로 집계합니다.",
      "hint_en": "Convert all numbers to their magnitudes with [abs(x) for x in nums] before calling sum() and max().",
      "targetCode": "nums = [-12, 5, -20, 8]\ngaps = [abs(x) for x in nums]\nprint(sum(gaps), max(gaps))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "45 20"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 오차 리스트의 각 원소를 절댓값으로 바꾼 뒤 평균을 소수 둘째 자리로 반올림해 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the absolute value function inside the list comprehension to compute the mean magnitude.",
      "hint_ko": "각 오차 x의 부호를 제거하는 내장 함수를 컴프리헨션 식에 적으세요.",
      "hint_en": "Write the built-in function that takes the magnitude of x.",
      "targetCode": "errs = [-1.5, 2.3, -0.8]\nvals = [abs(x) for x in errs]\nprint(round(sum(vals) / len(vals), 2))",
      "templateCode": "errs = [-1.5, 2.3, -0.8]\nvals = [§§§§(x) for x in errs]\nprint(round(sum(vals) / len(vals), 2))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1.53"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 리스트 nums의 절댓값 총합에 대해 10으로 나눈 몫·나머지와 평균을 구해 출력하도록 빈칸 2곳을 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the two blanks to compute the sum of magnitudes in nums, its quotient and remainder when divided by 10, and the rounded average.",
      "hint_ko": "절댓값 내장 함수(abs)와 몫·나머지 동시 반환 함수(divmod)를 차례로 채워보세요.",
      "hint_en": "Supply the absolute value function, the quotient-remainder function, and the rounding function.",
      "targetCode": "nums = [-14, 9, -12]\ntotal = sum([abs(n) for n in nums])\nq, r = divmod(total, 10)\nprint(q, r, round(total / len(nums), 1))",
      "templateCode": "nums = [-14, 9, -12]\ntotal = sum([§§§§(n) for n in nums])\nq, r = §§§§§§§(total, 10)\nprint(q, r, round(total / len(nums), 1))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 5 11.7"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 나눗셈 결과의 절댓값을 소수점 둘째 자리까지 반올림한 값이 출력되도록 코드의 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Find and fix the bug so the absolute value of val is rounded to 2 decimal places and printed.",
      "hint_ko": "반올림 함수는 첫 번째 인자로 반올림할 숫자를, 두 번째 인자로 남길 소수점 자릿수를 받습니다.",
      "hint_en": "Pass the number to be rounded as the first argument and the number of decimals (2) as the second.",
      "templateCode": "val = int(input()) / 3\nprint(round(2, abs(val)))",
      "targetCode": "val = int(input()) / 3\nprint(round(abs(val), 2))",
      "testCases": [
        {
          "id": 1,
          "input": "-10",
          "expectedOutput": "3.33"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 리스트 nums에서 각 숫자의 절댓값 중 가장 큰 값을 구해 출력하도록 코드의 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Find and fix the bug so the largest absolute value among the numbers in nums is printed.",
      "hint_ko": "단일 숫자의 부호를 떼어낸 크기를 구할 때는 최솟값 함수가 아니라 절댓값 함수를 써야 합니다.",
      "hint_en": "Replace min(n) with the absolute value built-in function.",
      "templateCode": "nums = [-12, 5, -19, 8]\ngaps = [min(n) for n in nums]\nprint(max(gaps))",
      "targetCode": "nums = [-12, 5, -19, 8]\ngaps = [abs(n) for n in nums]\nprint(max(gaps))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "19"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 내장 함수를 사용해 정수 a를 b로 나눈 몫과 나머지를 한 번에 구해 변수 q와 r에 나누어 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Use a single built-in function call to unpack the quotient and remainder of a divided by b into q and r.",
      "hint_ko": "q, r = divmod(a, b) 형태로 몫과 나머지를 한 번에 언패킹하세요.",
      "hint_en": "Write q, r = divmod(a, b) on the masked line.",
      "targetCode": "a, b = 29, 6\nq, r = divmod(a, b)\nprint(q, r)",
      "templateCode": "a, b = 29, 6\n§§§§§§§§§§§§§§§§§§§§\nprint(q, r)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "4 5"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 리스트 gaps의 합계를 개수로 나눈 평균을 소수점 둘째 자리까지 반올림해 변수 avg에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Compute the average of gaps rounded to 2 decimal places and assign it to avg.",
      "hint_ko": "avg = round(sum(gaps) / len(gaps), 2) 형태로 작성하세요.",
      "hint_en": "Write avg = round(sum(gaps) / len(gaps), 2) on the masked line.",
      "targetCode": "nums = [-10, 5, -7]\ngaps = [abs(n) for n in nums]\navg = round(sum(gaps) / len(gaps), 2)\nprint(avg)",
      "templateCode": "nums = [-10, 5, -7]\ngaps = [abs(n) for n in nums]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(avg)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "7.33"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] abs(), divmod(), round()가 결합된 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following code combining abs(), divmod(), and round().",
      "hint_ko": "|-17| = 17을 5로 나눈 몫(3)과 나머지(2), 그리고 3.6을 반올림한 정수(4)를 차례로 확인하세요.",
      "hint_en": "divmod(17, 5) returns quotient 3 and remainder 2, and round(3.6) evaluates to 4.",
      "targetCode": "n = abs(-17)\nq, r = divmod(n, 5)\nprint(q, r, round(3.6))",
      "choices": [
        "3 2 4",
        "3 2 3",
        "2 3 4",
        "-3 2 4"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 2 4"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 리스트 컴프리헨션과 abs(), round()를 결합한 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the code combining abs() and round().",
      "hint_ko": "[-3, 1, -2]의 절댓값 합계(3 + 1 + 2 = 6)와 2.56을 소수 첫째 자리로 반올림한 값(2.6)을 확인하세요.",
      "hint_en": "Sum the absolute values [3, 1, 2] to get 6, and round 2.56 to 1 decimal place (2.6).",
      "targetCode": "nums = [-3, 1, -2]\ntotal = sum([abs(x) for x in nums])\nprint(total, round(2.56, 1))",
      "choices": [
        "6 2.6",
        "-4 2.6",
        "6 2.5",
        "6 3.0"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "6 2.6"
        }
      ]
    }
  ]
};
