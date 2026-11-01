import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 60레벨: 함수와 파이썬 베이직 종합 문제풀이 (10단계 - 베이직 그랜드 피날레)
// - 블록 모드 없이 Section 8 및 파이썬 베이직 핵심 문법을 4대 문제 유형으로 총점검
// - [1~3단계] 빈칸 채우기 (fill_blank)
// - [4~6단계] 틀린 곳 수정 (fix_bug)
// - [7~8단계] 예제 아래 한 줄 추가 작성 (one_line)
// - [9~10단계] 출력 결과 예측 선택 (predict_output)
// ============================================================================
export const PYTHON_LEVEL_60: PracticeRound = {
  "id": "py-basic-r60",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 60,
  "title_ko": "60레벨: 함수와 파이썬 베이직 종합 문제풀이",
  "title_en": "Level 60: Section 8 & Python Basic Grand Review",
  "totalQuestions": 10,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "type",
    "method",
    "math",
    "sorted",
    "map",
    "iter",
    "def",
    "if",
    "for_in",
    "for_range",
    "range"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 공백으로 입력된 두 정수 x, y의 절댓값 차이를 반환하는 gap 함수를 완성해보세요.",
      "prompt_en": "Fill in the blanks to return the absolute difference of two space-separated integers.",
      "hint_ko": "결과를 돌려주는 return, 절댓값 함수 abs, 일괄 정수 변환 함수 map을 차례로 채우세요.",
      "hint_en": "Enter return, abs, and map in the three blanks.",
      "templateCode": "def gap(a, b):\n    §§§§§§ §§§(a - b)\nx, y = §§§(int, input().split())\nprint(gap(x, y))",
      "targetCode": "def gap(a, b):\n    return abs(a - b)\nx, y = map(int, input().split())\nprint(gap(x, y))",
      "testCases": [
        {
          "id": 1,
          "input": "15 42",
          "expectedOutput": "27"
        },
        {
          "id": 2,
          "input": "30 12",
          "expectedOutput": "18"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 기본 합격선이 60점인 count_pass 함수를 완성하고 입력된 점수의 합격자 수를 출력해보세요.",
      "prompt_en": "Fill in the blanks so count_pass(scores, cut=60) counts and returns passing scores.",
      "hint_ko": "매개변수 기본값 cut=60과 최종 개수를 돌려주는 return cnt를 입력하세요.",
      "hint_en": "Write cut=60 in the def header and return cnt at the end of the function.",
      "templateCode": "def count_pass(scores, §§§§§§):\n    cnt = 0\n    for s in scores:\n        if s >= cut:\n            cnt += 1\n    §§§§§§§§§§\nnums = list(map(int, input().split()))\nprint(count_pass(nums))",
      "targetCode": "def count_pass(scores, cut=60):\n    cnt = 0\n    for s in scores:\n        if s >= cut:\n            cnt += 1\n    return cnt\nnums = list(map(int, input().split()))\nprint(count_pass(nums))",
      "testCases": [
        {
          "id": 1,
          "input": "55 70 80 40 60",
          "expectedOutput": "3"
        },
        {
          "id": 2,
          "input": "90 85",
          "expectedOutput": "2"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 첫 줄의 이름들과 둘째 줄의 점수들을 나란히 묶어 이름:점수 형식으로 출력해보세요.",
      "prompt_en": "Fill in the blanks to pair names and integer scores and print each as name:score.",
      "hint_ko": "점수 변환에는 map을, 두 리스트를 같은 위치끼리 묶어 순회할 때는 zip을 사용하세요.",
      "hint_en": "Use map on line 2 and zip(names, scores) on line 3.",
      "templateCode": "names = input().split()\nscores = list(§§§(int, input().split()))\nfor name, sc in §§§§§§§§§§§§§§§§§§:\n    print(f\"{name}:{sc}\")",
      "targetCode": "names = input().split()\nscores = list(map(int, input().split()))\nfor name, sc in zip(names, scores):\n    print(f\"{name}:{sc}\")",
      "testCases": [
        {
          "id": 1,
          "input": "Kim Lee\n90 85",
          "expectedOutput": "Kim:90\nLee:85"
        },
        {
          "id": 2,
          "input": "A B C\n10 20 30",
          "expectedOutput": "A:10\nB:20\nC:30"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "리스트의 모든 짝수 합을 구하려 하지만 첫 요소만 확인하고 함수가 끝나버립니다. 들여쓰기를 고쳐보세요.",
      "prompt_en": "Fix the indentation bug so sum_even sums every even number before returning.",
      "hint_ko": "return 문이 for 반복문 안에 들어 있으면 첫 반복 직후 함수가 종료됩니다. for 문 밖으로 내어쓰세요.",
      "hint_en": "Unindent the return statement to match the for loop indentation level.",
      "templateCode": "def sum_even(nums):\n    total = 0\n    for n in nums:\n        if n % 2 == 0:\n            total += n\n        return total\ndata = list(map(int, input().split()))\nprint(sum_even(data))",
      "targetCode": "def sum_even(nums):\n    total = 0\n    for n in nums:\n        if n % 2 == 0:\n            total += n\n    return total\ndata = list(map(int, input().split()))\nprint(sum_even(data))",
      "testCases": [
        {
          "id": 1,
          "input": "2 4 6",
          "expectedOutput": "12"
        },
        {
          "id": 2,
          "input": "1 8 3 10",
          "expectedOutput": "18"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "세 과목 모두 60점 이상일 때만 Pass를 출력해야 하는데 한 과목만 넘어도 통과됩니다. 함수를 고쳐보세요.",
      "prompt_en": "Fix exam_ok so Pass prints only when all three scores are at least 60.",
      "hint_ko": "하나라도 참이면 True가 되는 함수 대신, 리스트의 모든 조건이 참인지 확인하는 함수를 사용하세요.",
      "hint_en": "Check that every condition in checks is True rather than just one.",
      "templateCode": "def exam_ok(a, b, c):\n    checks = [a >= 60, b >= 60, c >= 60]\n    return any(checks)\nx, y, z = map(int, input().split())\nif exam_ok(x, y, z):\n    print(\"Pass\")\nelse:\n    print(\"Retry\")",
      "targetCode": "def exam_ok(a, b, c):\n    checks = [a >= 60, b >= 60, c >= 60]\n    return all(checks)\nx, y, z = map(int, input().split())\nif exam_ok(x, y, z):\n    print(\"Pass\")\nelse:\n    print(\"Retry\")",
      "testCases": [
        {
          "id": 1,
          "input": "80 40 50",
          "expectedOutput": "Retry"
        },
        {
          "id": 2,
          "input": "70 90 60",
          "expectedOutput": "Pass"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "세 정수의 평균을 소수 둘째 자리까지 반올림해 출력하려 하지만 연산 순서 때문에 값이 틀립니다. 수식을 고쳐보세요.",
      "prompt_en": "Fix the arithmetic precedence bug so avg_round returns the true average rounded to 2 decimals.",
      "hint_ko": "나눗셈(/)이 덧셈(+)보다 먼저 계산되므로 세 수의 합을 먼저 괄호로 묶은 뒤 3으로 나누세요.",
      "hint_en": "Wrap the sum in parentheses before dividing by 3.",
      "templateCode": "def avg_round(a, b, c):\n    return round(a + b + c / 3, 2)\nx, y, z = map(int, input().split())\nprint(avg_round(x, y, z))",
      "targetCode": "def avg_round(a, b, c):\n    return round((a + b + c) / 3, 2)\nx, y, z = map(int, input().split())\nprint(avg_round(x, y, z))",
      "testCases": [
        {
          "id": 1,
          "input": "10 20 25",
          "expectedOutput": "18.33"
        },
        {
          "id": 2,
          "input": "5 10 11",
          "expectedOutput": "8.67"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "코드 마지막에 한 줄을 추가하여 가격 p와 할인액 2500을 전달한 apply_discount 반환값을 출력해보세요.",
      "prompt_en": "Add one line at the end to print apply_discount called with p and 2500.",
      "hint_ko": "기본값 off=1000 대신 2500이 적용되도록 print(apply_discount(p, 2500))을 작성하세요.",
      "hint_en": "Write print(apply_discount(p, 2500)) on the last line.",
      "templateCode": "def apply_discount(price, off=1000):\n    return max(0, price - off)\np = int(input())\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "def apply_discount(price, off=1000):\n    return max(0, price - off)\np = int(input())\nprint(apply_discount(p, 2500))",
      "testCases": [
        {
          "id": 1,
          "input": "10000",
          "expectedOutput": "7500"
        },
        {
          "id": 2,
          "input": "2000",
          "expectedOutput": "0"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "반복문 안에 한 줄을 추가하여 1번부터 번호와 대문자 단어를 1:APPLE 형식으로 출력해보세요.",
      "prompt_en": "Add one indented line inside the loop to print 1-based index and uppercase word like 1:APPLE.",
      "hint_ko": "4칸 들여쓰기 후 f-string 안에서 idx와 문자열 대문자 메서드 w.upper()를 조합해 출력하세요.",
      "hint_en": "Indent 4 spaces and write print(f\"{idx}:{w.upper()}\").",
      "templateCode": "words = input().split()\nfor idx, w in enumerate(words, 1):\n    §§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "words = input().split()\nfor idx, w in enumerate(words, 1):\n    print(f\"{idx}:{w.upper()}\")",
      "testCases": [
        {
          "id": 1,
          "input": "apple sky",
          "expectedOutput": "1:APPLE\n2:SKY"
        },
        {
          "id": 2,
          "input": "py code",
          "expectedOutput": "1:PY\n2:CODE"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 코드의 실행 결과를 예측해보세요.",
      "prompt_en": "Predict the output of the following code.",
      "hint_ko": "calc(4) 내부의 rate = 3은 지역 변수이고 bonus 기본값은 5이며, 바깥 전역 변수 rate는 2로 유지됩니다.",
      "hint_en": "Inside calc(4), local rate is 3 and bonus defaults to 5, while global rate remains 2.",
      "targetCode": "rate = 2\ndef calc(n, bonus=5):\n    rate = 3\n    return n * rate, n + bonus\na, b = calc(4)\nprint(a, b, rate)",
      "choices": [
        "12 9 2",
        "12 9 3",
        "8 9 2",
        "12 4 3"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "12 9 2"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 코드의 실행 결과를 예측해보세요.",
      "prompt_en": "Predict the output of the following code.",
      "hint_ko": "[10, 20, 0]에는 0(거짓)이 포함되어 있어 all(nums)는 False가 되고, sum(nums)는 30입니다.",
      "hint_en": "0 makes all([10, 20, 0]) evaluate to False, while sum([10, 20, 0]) is 30.",
      "targetCode": "def summary(nums):\n    ok = all(nums)\n    return sum(nums), ok\ndata = [10, 20, 0]\ntotal, flag = summary(data)\nprint(f\"{total}-{flag}\")",
      "choices": [
        "30-True",
        "20-False",
        "30-False",
        "3-False"
      ],
      "correctChoiceIndex": 2,
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "30-False"
        }
      ]
    }
  ]
};
