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
  "totalQuestions": 13,
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
      "prompt_ko": "abs(-18)로 음수 -18의 절댓값을 diff에 저장하고 출력해 18을 확인해보세요.",
      "prompt_en": "Store the absolute value of -18 in diff using abs(-18) and print diff to check 18.",
      "hint_ko": "'절댓값(absolute value)'의 앞 세 글자를 딴 내장 함수는 부호를 떼어낸 0으로부터의 크기(양수 또는 0)를 반환합니다.",
      "hint_en": "Abbreviated from the first three letters of 'absolute,' this built-in returns the non-negative magnitude of a number.",
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
      "prompt_ko": "빈칸에 절댓값 내장 함수를 채워 두 기온 12와 27 사이의 온도 차이를 양수로 출력해보세요. (출력: 15)",
      "prompt_en": "Fill in the built-in absolute value function to print the positive difference between 12 and 27.",
      "hint_ko": "'절댓값'을 뜻하는 영어 단어(absolute)의 앞 세 글자를 딴 내장 함수로 뺄셈 결과를 감싸면 순서와 상관없이 양수 거리가 됩니다.",
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
      "prompt_ko": "pi = 3.14159를 정수 반올림한 round(pi)와 소수 둘째 자리까지 반올림한 round(pi, 2)를 나란히 출력해보세요.",
      "prompt_en": "Store 3.14159 in pi, compute round(pi) and round(pi, 2), and print both values.",
      "hint_ko": "숫자를 '둥글게 다듬다(반올림하다)'라는 뜻의 이 함수는 인자가 1개면 정수로, 두 번째 인자로 자릿수를 주면 그 소수점 자리까지 반올림합니다.",
      "hint_en": "With one argument it smooths to the nearest integer; with a second digit-count argument it rounds to that many decimal places.",
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
      "prompt_ko": "빈칸에 반올림 내장 함수를 채워 평균 점수 87.678을 소수 첫째 자리까지 반올림해 출력해보세요. (출력: 87.7)",
      "prompt_en": "Fill in the built-in rounding function to round 87.678 to 1 decimal place and print 87.7.",
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
      "prompt_ko": "공백으로 입력된 두 실수의 거리(절댓값 차이)를 소수 둘째 자리까지 반올림해 출력해보세요. (예: 1.2 4.75 -> 3.55)",
      "prompt_en": "Read two space-separated floats and print their absolute difference rounded to 2 decimal places.",
      "hint_ko": "실수로 변환한 두 값의 차이를 안쪽에서 절댓값으로 만들고, 바깥에서 소수 둘째 자리까지 반올림하면 부동소수점 오차도 깔끔히 정리됩니다.",
      "hint_en": "Convert both strings to floats, take the positive magnitude of their difference inside, and smooth to 2 decimals outside.",
      "targetCode": "a, b = input().split()\ngap = round(abs(float(a) - float(b)), 2)\nprint(gap)",
      "testCases": [
        {
          "id": 1,
          "input": "3.5 1.25",
          "expectedOutput": "2.25"
        },
        {
          "id": 2,
          "input": "1.2 4.75",
          "expectedOutput": "3.55"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "리스트 컴프리헨션의 빈칸을 채워 모든 원소를 절댓값으로 바꾼 리스트의 합계를 출력해보세요. (출력: 23)",
      "prompt_en": "Fill in the blank inside the list comprehension to convert every element to its absolute value and print the sum.",
      "hint_ko": "음수 부호를 모두 떼어내도록 '절댓값(absolute)'의 앞 세 글자를 딴 내장 함수를 컴프리헨션 앞쪽 식에 넣으세요.",
      "hint_en": "In the comprehension's output expression, call the 3-letter built-in function abbreviated from 'absolute'.",
      "templateCode": "nums = [-4, 3, -9, 0, 7]\nclean = [§§§(x) for x in nums]\nprint(sum(clean))",
      "targetCode": "nums = [-4, 3, -9, 0, 7]\nclean = [abs(x) for x in nums]\nprint(sum(clean))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "23"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "rates의 각 변동률 절댓값을 total에 누적한 뒤 소수 첫째 자리로 반올림해 출력해보세요. (출력 예: Sum:4.2)",
      "prompt_en": "Accumulate the absolute value of each rate in total, then print it rounded to 1 decimal place (e.g., Sum:4.2).",
      "hint_ko": "반복문 안에서는 각 변동률의 크기만 누적하고, 마지막 출력 서식에서 누적합을 소수 첫째 자리로 반올림합니다.",
      "hint_en": "Add the positive magnitude of each rate inside the loop, then round the final total to 1 decimal place in the f-string.",
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
      "prompt_ko": "실제값과 예측값의 오차 크기를 소수 둘째 자리까지 구해 반환하도록 두 빈칸을 채워보세요. (출력 예: Err:0.36)",
      "prompt_en": "Fill in both blanks so the function returns the absolute error rounded to 2 decimal places (e.g., Err:0.36).",
      "hint_ko": "안쪽 빈칸에는 오차 크기를 구하는 '절댓값(absolute)' 앞 3글자 함수를, 바깥 빈칸에는 숫자를 '둥글게' 다듬는 5글자 반올림 함수를 쓰세요.",
      "hint_en": "Compute the magnitude inside with the 3-letter function from 'absolute', and smooth it outside with the 5-letter 'circular/smooth' function.",
      "templateCode": "def calc_err(real, pred):\n    return §§§§§(§§§(real - pred), 2)\nerr = calc_err(9.8, 10.16)\nprint(f\"Err:{err}\")",
      "targetCode": "def calc_err(real, pred):\n    return round(abs(real - pred), 2)\nerr = calc_err(9.8, 10.16)\nprint(f\"Err:{err}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Err:0.36"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "입력값을 float로 변환해 절댓값의 소수 첫째 자리 반올림을 출력하고, 변환 실패 시 Invalid를 출력해보세요.",
      "prompt_en": "Convert input to float and print its absolute value rounded to 1 decimal place, or print Invalid on ValueError.",
      "hint_ko": "시도 블록 안에서 실수 변환 뒤 절댓값과 반올림을 차례로 적용하고, 숫자가 아닌 입력은 값 오류 예외 블록에서 처리합니다.",
      "hint_en": "Convert to float and apply magnitude and rounding inside try, catching non-numeric inputs in the value-error handler.",
      "targetCode": "try:\n    val = float(input())\n    print(round(abs(val), 1))\nexcept ValueError:\n    print(\"Invalid\")",
      "testCases": [
        {
          "id": 1,
          "input": "-7.86",
          "expectedOutput": "7.9"
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
      "prompt_ko": "두 빈칸을 채워 두 점 객체 p1(4)과 p2(19) 사이의 수직선 거리를 반환하고 출력해보세요. (출력: 15)",
      "prompt_en": "Fill in the two blanks so dist() returns the distance between Point(4) and Point(19) on a number line.",
      "hint_ko": "첫 빈칸은 아랫줄 뺄셈식에서 참조하는 상대 객체 매개변수 이름을 적고, 둘째 빈칸은 '절댓값(absolute)'의 앞 세 글자 함수를 적으세요.",
      "hint_en": "Match the second parameter name referenced on the return line, and wrap the difference in the 3-letter function from 'absolute'.",
      "templateCode": "class Point:\n    def __init__(self, x):\n        self.x = x\n    def dist(self, §§§§§):\n        return §§§(self.x - other.x)\np1 = Point(4)\np2 = Point(19)\nprint(p1.dist(p2))",
      "targetCode": "class Point:\n    def __init__(self, x):\n        self.x = x\n    def dist(self, other):\n        return abs(self.x - other.x)\np1 = Point(4)\np2 = Point(19)\nprint(p1.dist(p2))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "15"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "반올림 함수에 전달한 인자 순서가 뒤바뀌어 타입 오류가 발생하는 코드를 고쳐 소수 둘째 자리까지 출력해보세요.",
      "prompt_en": "Fix the swapped argument order in the rounding call so the absolute float is rounded to 2 decimal places.",
      "hint_ko": "반올림 함수는 (반올림할 대상 숫자, 남길 소수점 자릿수) 순서로 인자를 받습니다. 뒤바뀐 두 인자의 순서를 바로잡아 보세요.",
      "hint_en": "The rounding built-in expects (target_number, decimal_places) in order; swap the two arguments.",
      "templateCode": "val = float(input())\nprint(round(2, abs(val)))",
      "targetCode": "val = float(input())\nprint(round(abs(val), 2))",
      "testCases": [
        {
          "id": 1,
          "input": "-3.456",
          "expectedOutput": "3.46"
        },
        {
          "id": 2,
          "input": "8.129",
          "expectedOutput": "8.13"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "절댓값 리스트 gaps 아래에 한 줄을 추가하여 평균을 소수 둘째 자리까지 반올림해 출력해보세요. (출력: 7.33)",
      "prompt_en": "Add one line below gaps to print its average rounded to 2 decimal places (output: 7.33).",
      "hint_ko": "리스트의 합계를 길이로 나눈 평균식을 구하고, 이를 소수 둘째 자리까지 반올림하는 내장 함수로 감싸 출력해보세요.",
      "hint_en": "Divide the list's total by its item count, pass that average with digit count 2 into the rounding function, and display it.",
      "templateCode": "nums = [-10, 5, -7]\ngaps = [abs(n) for n in nums]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "nums = [-10, 5, -7]\ngaps = [abs(n) for n in nums]\nprint(round(sum(gaps) / len(gaps), 2))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "7.33"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 파이썬 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "Select the exact output of the following Python code.",
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