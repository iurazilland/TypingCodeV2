import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_22: PracticeRound = {
  "id": "py-basic-r22",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 22,
  "title_ko": "크기 비교 연산자 (>, <, >=, <=)와 연쇄 비교 (a <= x <= b)",
  "title_en": "Relational Operators (>, <, >=, <=) & Chained Comparisons",
  "description_ko": "초과(>), 미만(<), 이상(>=), 이하(<=) 비교 연산자와 파이썬의 연쇄 비교(a <= x <= b)를 익힙니다.",
  "description_en": "Master relational operators (>, <, >=, <=) and Python chained comparisons (a <= x <= b).",
  "totalQuestions": 15,
  "unlockedBlocks": [
    "comment",
    "print",
    "variable",
    "input",
    "type"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 변수 a가 b보다 큰지와 작은지를 각각 비교하여 출력해보세요.",
      "prompt_en": "[Block] Compare whether a is greater than b and whether a is less than b.",
      "hint_ko": "15는 10보다 크므로 a > b는 True, a < b는 False가 출력됩니다.",
      "hint_en": "Because 15 is greater than 10, a > b evaluates to True and a < b evaluates to False.",
      "targetCode": "a = 15\nb = 10\nprint(a > b)\nprint(a < b)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True\nFalse"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 현재 속도(speed)가 60을 초과하는지 판별하도록 비교 연산자 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the relational operator to check whether speed exceeds 60.",
      "hint_ko": "왼쪽 값이 오른쪽 값보다 더 큼을 나타내는 부등호 기호 하나를 입력합니다.",
      "hint_en": "Enter the single angle bracket that points closed toward the smaller right-hand side.",
      "templateCode": "speed = 75\nprint(speed §§ 60)",
      "targetCode": "speed = 75\nprint(speed > 60)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 변수 score가 80 이상인지와 79 이하인지를 각각 비교해 출력해보세요.",
      "prompt_en": "[Block] Check whether score is at least 80 and whether it is at most 79.",
      "hint_ko": "이상과 이하를 쓸 때는 항상 부등호(>, <)를 먼저 쓰고 등호(=)를 뒤에 붙입니다.",
      "hint_en": "Always place the angle bracket (> or <) before the equals sign (=).",
      "targetCode": "score = 80\nprint(score >= 80)\nprint(score <= 79)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True\nFalse"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 가격(price)이 예산(budget) 이하인지 판별하도록 비교 연산자 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the relational operator to check whether price is at most budget.",
      "hint_ko": "작거나 같음(이하)은 왼쪽이 닫힌 부등호 바로 뒤에 등호를 붙여 표기합니다.",
      "hint_en": "Write the less-than angle bracket followed immediately by the equals sign.",
      "templateCode": "price = 3000\nbudget = 3000\nprint(price §§§ budget)",
      "targetCode": "price = 3000\nbudget = 3000\nprint(price <= budget)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 입력받은 점수에 보너스 5점을 누적해 더한 뒤 80점 이상인지 판별해보세요.",
      "prompt_en": "[Block] Read an integer score, add 5 bonus points in place, and check whether it is at least 80.",
      "hint_ko": "복합 대입 연산(score += 5)으로 점수를 먼저 갱신한 다음 >= 80으로 비교합니다.",
      "hint_en": "Update score with += 5 first, then compare the updated value against 80.",
      "targetCode": "score = int(input(\"Score:\"))\nscore += 5\nprint(score >= 80)",
      "testCases": [
        {
          "id": 1,
          "input": "75",
          "expectedOutput": "Score:True"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 보너스 10점을 더한 점수가 100점 이상인지 판별하도록 비교 연산자 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the relational operator to check whether updated pt is at least 100.",
      "hint_ko": "크거나 같음(이상)은 왼쪽이 열린 부등호 바로 뒤에 등호를 붙여 작성합니다.",
      "hint_en": "Place the greater-than angle bracket right before the equals sign.",
      "templateCode": "pt = int(input(\"Pt:\"))\npt += 10\nprint(pt §§§ 100)",
      "targetCode": "pt = int(input(\"Pt:\"))\npt += 10\nprint(pt >= 100)",
      "testCases": [
        {
          "id": 1,
          "input": "90",
          "expectedOutput": "Pt:True"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 연쇄 비교를 사용해 입력 정수 x가 10 이상 20 이하 범위에 속하는지 판별해보세요.",
      "prompt_en": "[Block] Use a chained comparison to check whether integer x is between 10 and 20 inclusive.",
      "hint_ko": "파이썬에서는 수학 부등식처럼 10 <= x <= 20 형태로 양쪽 범위를 한 번에 비교할 수 있습니다.",
      "hint_en": "Python allows chaining bounds directly like math notation: 10 <= x <= 20.",
      "targetCode": "x = int(input())\nprint(10 <= x <= 20)",
      "testCases": [
        {
          "id": 1,
          "input": "15",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 정수 n이 0 초과 10 미만 범위에 속하는지 연쇄 비교로 판별하도록 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the relational operator to complete the chained check for n between 0 and 10 exclusive.",
      "hint_ko": "0보다 크고 10보다 작다는 연쇄 부등식이 되도록 오른쪽 빈칸에 미만 기호를 넣습니다.",
      "hint_en": "Complete the chained inequality with the strict less-than symbol before 10.",
      "templateCode": "n = int(input())\nprint(0 < n §§ 10)",
      "targetCode": "n = int(input())\nprint(0 < n < 10)",
      "testCases": [
        {
          "id": 1,
          "input": "7",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 10으로 나눈 정수 몫 q가 1 이상 9 이하인지 연쇄 비교로 판별하도록 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the relational operator to test whether quotient q is between 1 and 9 inclusive.",
      "hint_ko": "1 이상 9 이하를 판별하는 연쇄 비교식이 되도록 이하 비교 기호(<=)를 넣습니다.",
      "hint_en": "Use floor division for q, then place the less-or-equal operator on both sides of q.",
      "templateCode": "n = int(input())\nq = n // 10\nprint(1 §§§ q <= 9)",
      "targetCode": "n = int(input())\nq = n // 10\nprint(1 <= q <= 9)",
      "testCases": [
        {
          "id": 1,
          "input": "45",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 입력받은 레벨(lv)이 30 이상인지 판별하도록 잘못된 비교 연산자를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the relational operator so it checks whether lv is at least 30.",
      "hint_ko": "비교 연산자에서 등호는 항상 부등호 뒤에 와야 합니다.",
      "hint_en": "In relational operators, the angle bracket must always come before the equals sign.",
      "templateCode": "lv = int(input())\nprint(lv => 30)",
      "targetCode": "lv = int(input())\nprint(lv >= 30)",
      "testCases": [
        {
          "id": 1,
          "input": "30",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 정수 x가 10 이상 20 이하 범위인지 정확히 판별하도록 연쇄 비교식의 잘못된 기호를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the right-hand relational operator so the chained comparison checks whether x is between 10 and 20 inclusive.",
      "hint_ko": "오른쪽 기호가 이상(>=)으로 되어 있습니다. 20 이하가 되도록 <=로 고쳐보세요.",
      "hint_en": "The strict upper bound currently excludes 20; change it to include equality.",
      "templateCode": "x = int(input())\nprint(10 <= x >= 20)",
      "targetCode": "x = int(input())\nprint(10 <= x <= 20)",
      "testCases": [
        {
          "id": 1,
          "input": "20",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 연쇄 비교를 사용해 변수 lv가 1 이상 10 이하인지 판별한 결과를 ok에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the line that uses a chained comparison to store whether lv is between 1 and 10 inclusive in ok.",
      "hint_ko": "변수 ok에 1 이상 10 이하 연쇄 비교식을 대입해보세요.",
      "hint_en": "Assign the chained comparison checking 1 through 10 inclusive to ok.",
      "templateCode": "lv = int(input())\n§§§§§§§§§§§§§§§§§§§\nprint(ok)",
      "targetCode": "lv = int(input())\nok = 1 <= lv <= 10\nprint(ok)",
      "testCases": [
        {
          "id": 1,
          "input": "7",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 정수 n의 제곱이 50 이상인지 비교한 결과를 출력하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the line that prints whether n squared is at least 50.",
      "hint_ko": "print() 안에서 거듭제곱 연산과 이상 비교 연산자를 결합해보세요.",
      "hint_en": "Combine the power operator and greater-or-equal operator inside print().",
      "templateCode": "n = int(input())\n§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "n = int(input())\nprint(n ** 2 >= 50)",
      "testCases": [
        {
          "id": 1,
          "input": "8",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 파이썬 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following Python code.",
      "hint_ko": "경계값 20에서 미만(<)과 이하(<=)의 차이, 그리고 연쇄 비교의 경계 포함 여부를 차례로 확인해보세요.",
      "hint_en": "Check strict less-than versus less-or-equal at boundary 20, then evaluate the chained comparison.",
      "targetCode": "x = 20\nprint(x < 20, x <= 20)\nprint(10 < x <= 20)",
      "choices": [
        "False True\nTrue",
        "True True\nTrue",
        "False True\nFalse",
        "False False\nTrue"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "False True\nTrue"
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
      "hint_ko": "val이 10이 되었을 때 미만(< 10) 조건과 이상(>= 10) 조건의 참·거짓을 비교해보세요.",
      "hint_en": "When val becomes 10, check whether 5 <= val < 10 and val >= 10 are True or False.",
      "targetCode": "val = 7\nval += 3\nprint(5 <= val < 10, val >= 10, sep=\"-\")",
      "choices": [
        "True-True",
        "False-True",
        "False-False",
        "True-False"
      ],
      "correctChoiceIndex": 1,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "False-True"
        }
      ]
    }
  ]
};
