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
      "prompt_ko": "내장 함수 abs(x)는 숫자의 음수 부호를 떼어내고 0으로부터의 거리인 절댓값(양수 또는 0)을 반환합니다.",
      "prompt_en": "The built-in function abs(x) removes any negative sign and returns the non-negative magnitude (absolute value) of a number.",
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
      "prompt_ko": "내장 함수 round(숫자, 자릿수)는 자릿수 인자를 생략하면 가장 가까운 정수로 반올림하고, 자릿수를 지정하면 해당 소수점 자리까지 반올림합니다.",
      "prompt_en": "The built-in round(num, ndigits) rounds to the nearest integer when called with one argument, or to ndigits decimal places when given two.",
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
      "prompt_ko": "abs(int(a) - int(b))로 두 값의 대소 관계에 상관없이 양수 거리(차이)를 구한 뒤, 나눗셈 결과를 round(..., 2)로 감싸 소수점 자릿수를 깔끔하게 정리합니다. (터미널 입력: 10 2)",
      "prompt_en": "Computing abs(int(a) - int(b)) yields the positive distance regardless of order, and wrapping the division in round(..., 2) formats it to two decimal places. (Terminal input: 10 2)",
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
      "prompt_ko": "반복문에서 abs(r)를 누적하면 부호와 관계없이 전체 변동 크기의 총합을 구할 수 있으며, 출력 시 round(total, 1)로 부동소수점 오차를 다듬습니다.",
      "prompt_en": "Accumulating abs(r) in a loop sums the magnitudes of positive and negative changes alike, while round(total, 1) cleans up floating-point precision for display.",
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
      "prompt_ko": "try 블록 안에서 입력값의 정수 변환·절댓값(abs)·반올림(round)을 차례로 처리하고, 숫자가 아닌 입력은 except ValueError:로 안전하게 걸러냅니다. (터미널 입력: -23)",
      "prompt_en": "Combine int() conversion, abs(), and round() inside a try block while catching non-numeric input safely with except ValueError:. (Terminal input: -23)",
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
      "prompt_ko": "반올림 함수에 전달한 인자 순서가 뒤바뀌어 타입 오류가 발생하는 코드를 고쳐 소수 둘째 자리까지 출력해보세요. (터미널 입력: -10)",
      "prompt_en": "Fix the swapped argument order in the rounding call so the absolute value is rounded to 2 decimal places. (Terminal input: -10)",
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