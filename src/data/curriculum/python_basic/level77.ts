import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_77: PracticeRound = {
  "id": "py-basic-r77",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 77,
  "title_ko": "77레벨: 수치·수학 내장 함수 (abs, round)",
  "title_en": "Level 77: Numeric Built-in Functions (abs, round)",
  "description_ko": "절댓값을 구하는 abs()와 소수점 반올림을 처리하는 round()를 익히고 누적 개념과 결합합니다.",
  "description_en": "Master abs() for absolute difference/distance and round() for decimal rounding alongside spiral review.",
  "totalQuestions": 15,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "type",
    "math",
    "method",
    "if",
    "for_in",
    "def",
    "try",
    "class"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 내장 함수 abs(-18)로 음수 부호를 떼어낸 절댓값을 diff에 저장하고 출력해보세요.",
      "prompt_en": "[Block] Use the built-in function abs(-18) to store the absolute value in diff and print it.",
      "hint_ko": "음수를 넣으면 양수로 바뀌고, 양수나 0을 넣으면 원래 값 그대로 반환됩니다.",
      "hint_en": "Negative numbers become positive, while positive numbers and zero remain unchanged.",
      "targetCode": "diff = abs(-18)\nprint(diff)",
      "expectedVariables": {
        "diff": 18
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "18"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 절댓값 내장 함수를 채워 두 기온 12와 27 사이의 온도 차이를 양수로 출력해보세요. (출력: 15)",
      "prompt_en": "[Fill Blank] Fill in the built-in absolute value function to print the positive difference between 12 and 27.",
      "hint_ko": "'절댓값'을 뜻하는 영어 단어(absolute)의 앞 세 글자를 딴 내장 함수로 뺄셈 결과를 감싸세요.",
      "hint_en": "Wrap the subtraction in the 3-letter built-in function abbreviated from the word 'absolute'.",
      "templateCode": "a = 12\nb = 27\ndist = §§§(a - b)\nprint(dist)",
      "targetCode": "a = 12\nb = 27\ndist = abs(a - b)\nprint(dist)",
      "expectedVariables": {
        "a": 12,
        "b": 27,
        "dist": 15
      },
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
      "prompt_ko": "[블록 조립] round(pi)로 정수 반올림한 값과 round(pi, 2)로 소수 둘째 자리까지 반올림한 값을 출력해보세요.",
      "prompt_en": "[Block] Use round(pi) for integer rounding and round(pi, 2) for 2-decimal rounding, then print both.",
      "hint_ko": "round(pi, 2)는 소수점 아래 둘째 자리까지 남기도록 셋째 자리에서 반올림합니다.",
      "hint_en": "round(pi, 2) rounds at the third decimal digit so that two decimal places remain.",
      "targetCode": "pi = 3.14159\nr1 = round(pi)\nr2 = round(pi, 2)\nprint(r1, r2)",
      "expectedVariables": {
        "pi": 3.14159,
        "r1": 3,
        "r2": 3.14
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 3.14"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 반올림 내장 함수를 채워 평균 점수 87.678을 소수 첫째 자리까지 반올림해 출력해보세요. (출력: 87.7)",
      "prompt_en": "[Fill Blank] Fill in the built-in rounding function to round 87.678 to 1 decimal place and print 87.7.",
      "hint_ko": "끝자리를 '둥글게 다듬다(반올림하다)'라는 뜻의 5글자 영어 단어 내장 함수를 사용하세요.",
      "hint_en": "Call the 5-letter built-in function meaning 'circular / to smooth a number to a nearby digit'.",
      "templateCode": "avg = 87.678\nres = §§§§§(avg, 1)\nprint(res)",
      "targetCode": "avg = 87.678\nres = round(avg, 1)\nprint(res)",
      "expectedVariables": {
        "avg": 87.678,
        "res": 87.7
      },
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
      "prompt_ko": "[블록 조립] 두 입력값의 차이를 abs()로 구해 3으로 나눈 뒤 소수 둘째 자리까지 반올림해 출력하세요.",
      "prompt_en": "[Block] Compute abs(int(a) - int(b)) / 3 and wrap it in round(..., 2) to print the result.",
      "hint_ko": "안쪽 괄호의 int() 변환과 abs() 절댓값 계산이 먼저 수행된 뒤 바깥의 round()가 실행됩니다.",
      "hint_en": "Python evaluates the inner int() conversions and abs() difference first before applying the outer round().",
      "targetCode": "a, b = input().split()\ngap = round(abs(int(a) - int(b)) / 3, 2)\nprint(gap)",
      "testCases": [
        {
          "id": 1,
          "input": "10 2",
          "expectedOutput": "2.67"
        },
        {
          "id": 2,
          "input": "1 12",
          "expectedOutput": "3.67"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 두 실수 x와 y의 차이(거리)를 구해 소수 첫째 자리까지 반올림해 출력하도록 두 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in round and abs to compute the distance between x and y rounded to 1 decimal place.",
      "hint_ko": "안쪽에는 '절댓값(absolute)'의 앞 3글자 함수를, 바깥에는 '둥글게 다듬는' 5글자 반올림 함수를 넣으세요.",
      "hint_en": "Compute the magnitude inside with the 3-letter abs function and smooth it outside with the 5-letter round function.",
      "templateCode": "x = -14.78\ny = 5.1\ngap = §§§§§(§§§(x - y), 1)\nprint(gap)",
      "targetCode": "x = -14.78\ny = 5.1\ngap = round(abs(x - y), 1)\nprint(gap)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "19.9"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 반복문으로 rates의 절댓값(abs(r))을 누적한 뒤 round(total, 1)로 반올림해 출력해보세요.",
      "prompt_en": "[Block] Accumulate abs(r) in a loop over rates and print Sum:{round(total, 1)}.",
      "hint_ko": "f-string의 중괄호 { } 안에 round(total, 1) 호출식을 바로 넣어 포맷팅할 수 있습니다.",
      "hint_en": "You can place the round(total, 1) call directly inside the f-string braces { }.",
      "targetCode": "rates = [1.23, -0.84, 2.11]\ntotal = 0\nfor r in rates:\n    total += abs(r)\nprint(f\"Sum:{round(total, 1)}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Sum:4.2"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 반복문에서 각 오차의 절댓값을 누적하고 소수 첫째 자리까지 반올림해 출력하도록 두 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in both blanks to accumulate absolute values in the loop and print the total rounded to 1 decimal.",
      "hint_ko": "반복문 안에는 '절댓값(absolute)' 앞 3글자 함수를, 출력문 안에는 5글자 반올림 함수를 쓰세요.",
      "hint_en": "Use the 3-letter function from 'absolute' in the loop and the 5-letter rounding function in print.",
      "templateCode": "diffs = [-2.35, 4.12, -1.89]\ntotal = 0\nfor d in diffs:\n    total += §§§(d)\nprint(§§§§§(total, 1))",
      "targetCode": "diffs = [-2.35, 4.12, -1.89]\ntotal = 0\nfor d in diffs:\n    total += abs(d)\nprint(round(total, 1))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "8.4"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] try 블록에서 입력값의 절댓값 반올림을 출력하고, 숫자 변환 실패 시 Invalid를 출력하세요.",
      "prompt_en": "[Block] Combine int(), abs(), and round() inside try while catching ValueError.",
      "hint_ko": "round(abs(val), 1)처럼 함수를 중첩하면 절댓값을 먼저 구한 뒤 소수 첫째 자리로 반올림합니다.",
      "hint_en": "Nesting round(abs(val), 1) computes the absolute value first and then rounds it to one decimal place.",
      "targetCode": "try:\n    val = int(input()) / 3\n    print(round(abs(val), 1))\nexcept ValueError:\n    print(\"Invalid\")",
      "testCases": [
        {
          "id": 1,
          "input": "-23",
          "expectedOutput": "7.7"
        },
        {
          "id": 2,
          "input": "abc",
          "expectedOutput": "Invalid"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 실수 입력값의 절댓값을 소수 둘째 자리까지 반올림해 출력하도록 두 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in round and abs inside the try block to print the rounded magnitude.",
      "hint_ko": "바깥 빈칸에는 5글자 반올림 함수를, 안쪽 빈칸에는 3글자 절댓값 함수를 채우세요.",
      "hint_en": "Place the 5-letter rounding function on the outside and the 3-letter absolute value function on the inside.",
      "templateCode": "try:\n    n = float(input())\n    print(§§§§§(§§§(n), 2))\nexcept ValueError:\n    print(\"Bad\")",
      "targetCode": "try:\n    n = float(input())\n    print(round(abs(n), 2))\nexcept ValueError:\n    print(\"Bad\")",
      "testCases": [
        {
          "id": 1,
          "input": "-3.456",
          "expectedOutput": "3.46"
        },
        {
          "id": 2,
          "input": "err",
          "expectedOutput": "Bad"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 반올림 함수의 인자 순서가 바뀌어 오류가 나는 코드를 고쳐 소수 둘째 자리까지 출력하세요.",
      "prompt_en": "[Fix Bug] Fix the swapped argument order in round() so the absolute value is rounded to 2 decimal places.",
      "hint_ko": "반올림 함수는 (반올림할 대상 숫자, 남길 소수점 자릿수) 순서로 인자를 받습니다. 뒤바뀐 두 인자의 순서를 바로잡아 보세요.",
      "hint_en": "The rounding built-in expects (target_number, decimal_places) in order; swap the two arguments.",
      "templateCode": "val = int(input()) / 3\nprint(round(2, abs(val)))",
      "targetCode": "val = int(input()) / 3\nprint(round(abs(val), 2))",
      "testCases": [
        {
          "id": 1,
          "input": "-10",
          "expectedOutput": "3.33"
        },
        {
          "id": 2,
          "input": "25",
          "expectedOutput": "8.33"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 각 숫자의 절댓값을 구하려다 잘못된 내장 함수를 호출해 오류가 나는 버그를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the wrong built-in function call inside the comprehension so it takes each number's absolute value.",
      "hint_ko": "단일 숫자의 부호를 떼어낸 크기를 구할 때는 min(n)이 아니라 절댓값 함수 abs(n)을 호출해야 합니다.",
      "hint_en": "Replace min(n) with abs(n) to compute the absolute value of each integer.",
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
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 절댓값 리스트 gaps의 평균을 소수 둘째 자리까지 반올림한 값을 avg에 저장하세요. (출력: 7.33)",
      "prompt_en": "[Complete Line] Assign the average of gaps rounded to 2 decimal places to avg (output: 7.33).",
      "hint_ko": "avg = round(sum(gaps) / len(gaps), 2) 형태로 합계를 길이로 나눈 뒤 반올림하세요.",
      "hint_en": "Write avg = round(sum(gaps) / len(gaps), 2) to round the average to 2 decimals.",
      "templateCode": "nums = [-10, 5, -7]\ngaps = [abs(n) for n in nums]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(avg)",
      "targetCode": "nums = [-10, 5, -7]\ngaps = [abs(n) for n in nums]\navg = round(sum(gaps) / len(gaps), 2)\nprint(avg)",
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
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 두 정수 a와 b의 거리(절댓값 차이 abs(a - b))를 구해 dist에 저장해보세요. (출력: 25)",
      "prompt_en": "[Complete Line] Assign the absolute difference abs(a - b) to dist (output: 25).",
      "hint_ko": "dist = abs(a - b) 형태로 두 값의 차이를 절댓값 함수로 감싸 저장하세요.",
      "hint_en": "Write dist = abs(a - b) to compute the non-negative distance.",
      "templateCode": "a, b = -18, 7\n§§§§§§§§§§§§§§§§§\nprint(dist)",
      "targetCode": "a, b = -18, 7\ndist = abs(a - b)\nprint(dist)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "25"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 파이썬 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following Python code.",
      "hint_ko": "x가 0 이상이 될 때까지 5.1이 총 몇 번 더해지는지 횟수를 세고, 반복 종료 직후의 x 값에 절댓값과 소수 첫째 자리 반올림을 적용해보세요.",
      "hint_en": "Count how many loop iterations of +5.1 are needed until x is no longer negative, then apply absolute value and 1-decimal rounding.",
      "targetCode": "x = -13.68\nstep = 0\nwhile x < 0:\n    x += 5.1\n    step += 1\nprint(step, round(abs(x), 1))",
      "choices": [
        "3 1.6",
        "2 3.5",
        "3 -1.6",
        "4 6.7"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 1.6"
        }
      ]
    }
  ]
};
