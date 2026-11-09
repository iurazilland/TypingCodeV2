import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_19: PracticeRound = {
  "id": "py-basic-r19",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 19,
  "title_ko": "19레벨: if 단일 조건문과 들여쓰기",
  "title_en": "Level 19: Single if Statements & Indentation",
  "description_ko": "if 조건문과 콜론(:), 4칸 들여쓰기 규칙, 그리고 Truthy 조건 검사를 익힙니다.",
  "description_en": "Master single if statements, trailing colons, 4-space indentation, and Truthy checks.",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "type",
    "if"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "if 조건문은 조건식이 참(True)일 때만 콜론(:) 아래 4칸 들여쓰기된 블록을 실행합니다. 블록의 코드를 따라 입력해 조건문 동작을 확인해보세요.",
      "prompt_en": "An if statement executes the 4-space indented block beneath the colon (:) only when its condition is True. Trace the block code to see it in action.",
      "hint_ko": "조건식 score >= 80이 참이므로 if 블록 안쪽에 끼워진 print(\"Pass\")가 실행됩니다.",
      "hint_en": "Because score >= 80 is True, the print(\"Pass\") statement nested inside the if block runs.",
      "targetCode": "score = 90\nif score >= 80:\n    print(\"Pass\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Pass"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 조건문 키워드와 줄 끝 기호를 채워 체력(hp)이 20 이하일 때 Danger를 출력해보세요.",
      "prompt_en": "Fill in the conditional keyword and header punctuation to print Danger when hp <= 20.",
      "hint_ko": "파이썬 조건문은 영어로 만약을 뜻하는 두 글자 키워드로 시작하고, 조건식 맨 끝에 콜론 기호를 붙여 블록 시작을 알립니다.",
      "hint_en": "Start a conditional header with the two-letter English word for \"supposing\" and end the line with a colon symbol.",
      "templateCode": "hp = 10\n§§ hp <= 20§\n    print(\"Danger\")",
      "targetCode": "hp = 10\nif hp <= 20:\n    print(\"Danger\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Danger"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "if 조건식이 거짓(False)이면 들여쓰기된 내부 블록은 건너뛰고, 들여쓰기가 없는 바깥쪽 코드는 조건과 상관없이 실행됩니다. 블록 코드를 따라 쳐보세요.",
      "prompt_en": "When the if condition is False, the indented inner block is skipped while unindented outer statements always run. Trace the block code.",
      "hint_ko": "블록 안쪽에 끼워진 실행문과 블록 바깥 아래에 연결된 실행문의 실행 차이를 비교해보세요.",
      "hint_en": "Compare the statement nested inside the if block with the unindented statement placed below it.",
      "targetCode": "score = 60\nif score >= 80:\n    print(\"Pass\")\nprint(\"Done\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Done"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 이상을 뜻하는 비교 기호를 채워 19세 이상일 때만 Adult를 출력하고 지금은 End만 나오게 해보세요.",
      "prompt_en": "Fill in the greater-or-equal operator so Adult is skipped for age 15 and only End prints.",
      "hint_ko": "크거나 같음(이상)을 뜻하도록 오른쪽으로 닫힌 부등호 뒤에 등호를 나란히 붙여 조건식을 완성해보세요.",
      "hint_en": "Place the greater-than angle bracket immediately before the equals sign to test for 19 or older.",
      "templateCode": "age = 15\nif age §§ 19:\n    print(\"Adult\")\nprint(\"End\")",
      "targetCode": "age = 15\nif age >= 19:\n    print(\"Adult\")\nprint(\"End\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "End"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "if 조건 자리에 변수를 바로 쓰면 비어 있지 않은 문자열이나 0이 아닌 숫자를 자동으로 참(Truthy)으로 판별합니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Placing a variable directly in an if condition automatically evaluates non-empty strings and non-zero numbers as Truthy. Trace the block code.",
      "hint_ko": "빈 문자열(\"\")은 거짓(Falsy), 글자가 한 글자라도 들어 있는 문자열은 참(Truthy)으로 취급됩니다.",
      "hint_en": "An empty string (\"\") is Falsy, whereas any string with at least one character is Truthy.",
      "targetCode": "msg = \"Notice\"\nif msg:\n    print(msg)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Notice"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 조건문 키워드와 끝 기호를 채워 체력이 0이 아닌 참(Truthy)일 때만 Alive가 출력되게 해보세요. (터미널 입력: 40)",
      "prompt_en": "Fill in the conditional keyword and trailing symbol so Alive prints whenever hp is non-zero. (Terminal input: 40)",
      "hint_ko": "영어로 만약을 뜻하는 두 글자 조건 키워드를 맨 앞에 적고, 변수 이름 뒤에 콜론 기호를 붙여 조건문 헤더를 완성해보세요.",
      "hint_en": "Begin line 2 with the two-letter conditional keyword and place a colon right after the variable name.",
      "templateCode": "hp = int(input())\n§§ hp§\n    print(\"Alive\")\nprint(\"Done\")",
      "targetCode": "hp = int(input())\nif hp:\n    print(\"Alive\")\nprint(\"Done\")",
      "testCases": [
        {
          "id": 1,
          "input": "40",
          "expectedOutput": "Alive\nDone"
        },
        {
          "id": 2,
          "input": "0",
          "expectedOutput": "Done"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "if 블록 안쪽에 같은 간격(4칸)으로 들여쓰기된 여러 줄은 하나의 묶음이 되어 조건이 참일 때 순서대로 모두 실행됩니다. 블록 코드를 따라 입력해보세요.",
      "prompt_en": "Multiple statements indented at the same 4-space level inside an if block form a single group and all run in order when the condition is True. Trace the block code.",
      "hint_ko": "할인 차감(price -= 1000)과 \"Sale\" 출력이 if 블록 안에서 함께 실행된 뒤, 바깥쪽 print(price)로 이어집니다.",
      "hint_en": "Both the discount (price -= 1000) and \"Sale\" print run inside the if block before the outer print(price) executes.",
      "targetCode": "price = 6000\nif price >= 5000:\n    price -= 1000\n    print(\"Sale\")\nprint(price)",
      "expectedVariables": {
        "price": 5000
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Sale\n5000"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 복합 대입 기호를 채워 점수가 100 이상일 때 보너스 50을 누적해 더한 최종 점수를 출력해보세요. (터미널 입력: 120)",
      "prompt_en": "Fill in the compound assignment operator to add 50 when point >= 100, then print point. (Terminal input: 120)",
      "hint_ko": "조건이 참일 때 기존 점수에 보너스를 누적해 저장할 수 있도록 더하기 기호와 등호를 나란히 붙인 복합 대입 연산자를 써보세요.",
      "hint_en": "Combine the plus sign followed immediately by the equals sign to add the bonus onto the variable in place.",
      "templateCode": "point = int(input())\nif point >= 100:\n    point §§ 50\nprint(point)",
      "targetCode": "point = int(input())\nif point >= 100:\n    point += 50\nprint(point)",
      "testCases": [
        {
          "id": 1,
          "input": "120",
          "expectedOutput": "170"
        },
        {
          "id": 2,
          "input": "80",
          "expectedOutput": "80"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "정수형 변수도 0이면 거짓(Falsy), 0이 아니면 참(Truthy)으로 동작하므로 if crit:처럼 조건식에 바로 사용할 수 있습니다. 블록의 코드를 따라 입력해보세요. (터미널 입력: 첫째 줄 30, 둘째 줄 1)",
      "prompt_en": "Integers are Falsy when 0 and Truthy when non-zero, so you can use if crit: directly as a condition. Trace the block code. (Terminal input: line 1 30, line 2 1)",
      "hint_ko": "crit가 0이 아닐 때만 안쪽의 복합 대입 연산(dmg *= 2)이 실행되고, 마지막 출력문은 항상 실행됩니다.",
      "hint_en": "Only a non-zero crit triggers the indented doubling (dmg *= 2), while the final print runs regardless.",
      "targetCode": "dmg = int(input())\ncrit = int(input())\nif crit:\n    dmg *= 2\nprint(dmg)",
      "testCases": [
        {
          "id": 1,
          "input": "30\n1",
          "expectedOutput": "60"
        },
        {
          "id": 2,
          "input": "30\n0",
          "expectedOutput": "30"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸에 복합 대입 기호를 채워 짝수면 10을 더하고, 이어서 20 이상이면 5를 뺀 값을 출력해보세요. (터미널 입력: 12)",
      "prompt_en": "Fill in the compound operators to add 10 if n is even, then subtract 5 if n >= 20. (Terminal input: 12)",
      "hint_ko": "첫 번째 조건문 안에서는 더하기와 등호를 붙인 누적 연산자를, 두 번째 독립 조건문 안에서는 빼기와 등호를 붙인 차감 연산자를 써보세요.",
      "hint_en": "Use the plus-equals operator in the first block to add, and the minus-equals operator in the second independent block to subtract.",
      "templateCode": "n = int(input())\nif n % 2 == 0:\n    n §§ 10\nif n >= 20:\n    n §§ 5\nprint(n)",
      "targetCode": "n = int(input())\nif n % 2 == 0:\n    n += 10\nif n >= 20:\n    n -= 5\nprint(n)",
      "testCases": [
        {
          "id": 1,
          "input": "12",
          "expectedOutput": "17"
        },
        {
          "id": 2,
          "input": "9",
          "expectedOutput": "9"
        },
        {
          "id": 3,
          "input": "21",
          "expectedOutput": "16"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "조건문 안쪽 실행문의 들여쓰기가 빠져 발생한 오류를 수정해 10 이상일 때 Big과 End가 출력되게 해보세요. (터미널 입력: 15)",
      "prompt_en": "Fix the IndentationError on the body of the if statement so Big prints when n >= 10. (Terminal input: 15)",
      "hint_ko": "파이썬은 콜론으로 끝나는 조건문 바로 다음 줄에 들여쓰기가 없으면 어느 줄까지 조건문에 속하는지 알 수 없어 오류가 발생합니다.",
      "hint_en": "Python requires the statement controlled by a conditional header to be indented by 4 spaces on the line below the colon.",
      "templateCode": "n = int(input())\nif n >= 10:\nprint(\"Big\")\nprint(\"End\")",
      "targetCode": "n = int(input())\nif n >= 10:\n    print(\"Big\")\nprint(\"End\")",
      "testCases": [
        {
          "id": 1,
          "input": "15",
          "expectedOutput": "Big\nEnd"
        },
        {
          "id": 2,
          "input": "5",
          "expectedOutput": "End"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "조건문 헤더 아래에 들여쓰기에 맞춰 한 줄을 추가하여 입력값이 60 이상일 때 Clear를 출력해보세요. (터미널 입력: 75)",
      "prompt_en": "Add one indented line under if n >= 60: to print Clear. (Terminal input: 75)",
      "hint_ko": "조건이 참일 때 실행될 문장이므로 앞쪽 4칸 들여쓰기를 유지한 채 요구된 안내 문자열을 출력 함수로 감싸 작성해보세요.",
      "hint_en": "Keep the 4-space indentation under the header and call the print function with the target string literal.",
      "templateCode": "n = int(input())\nif n >= 60:\n    §§§§§§§§§§§§§§",
      "targetCode": "n = int(input())\nif n >= 60:\n    print(\"Clear\")",
      "testCases": [
        {
          "id": 1,
          "input": "75",
          "expectedOutput": "Clear"
        },
        {
          "id": 2,
          "input": "60",
          "expectedOutput": "Clear"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 파이썬 코드를 실행했을 때 화면에 출력될 올바른 결과를 선택해보세요.",
      "prompt_en": "Select the exact output that will be printed when the following Python code runs.",
      "hint_ko": "빈 문자열이 조건문에서 참과 거짓 중 무엇으로 판정되는지 먼저 확인하고, 이어지는 두 번째 독립 조건문이 실행되는지 차례로 따라가 보세요.",
      "hint_en": "Check whether an empty string is truthy or falsy for the first condition, then trace whether the second independent condition runs.",
      "targetCode": "x = 10\nmsg = \"\"\nif msg:\n    x *= 3\nif x >= 10:\n    x += 5\nprint(x)",
      "choices": [
        "15",
        "30",
        "35",
        "10"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "15"
        }
      ]
    }
  ]
};
