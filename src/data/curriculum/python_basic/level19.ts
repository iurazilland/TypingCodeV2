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
  "totalQuestions": 15,
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] if 조건문으로 score가 80 이상일 때만 \"Pass\"를 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the blocks to print \"Pass\" only when score >= 80.",
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
      "prompt_ko": "[빈칸 채우기] 조건문 키워드와 줄 끝 기호를 채워 체력(hp)이 20 이하일 때 Danger를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the conditional keyword and header punctuation to print Danger when hp <= 20.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 조건이 거짓일 때 내부 블록은 건너뛰고 바깥쪽 \"Done\"만 출력되는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the blocks where the false if block is skipped and outer \"Done\" prints.",
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
      "prompt_ko": "[빈칸 채우기] 이상 비교 기호를 채워 19세 이상일 때만 Adult를 출력하고 지금은 End만 나오게 해보세요.",
      "prompt_en": "[Fill Blank] Fill in the greater-or-equal operator so Adult is skipped for age 15 and only End prints.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 비어 있지 않은 문자열 변수 msg를 if 조건에 바로 넣어 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the blocks to test Truthy string msg directly in an if statement.",
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
      "prompt_ko": "[빈칸 채우기] 조건문 키워드와 끝 기호를 채워 hp가 0이 아닐 때만 Alive가 출력되게 해보세요.",
      "prompt_en": "[Fill Blank] Fill in the conditional keyword and trailing symbol so Alive prints when hp is non-zero.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] if 블록 안에서 할인 차감과 \"Sale\" 출력을 함께 실행하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the blocks to subtract 1000 and print \"Sale\" inside the if block.",
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
      "prompt_ko": "[빈칸 채우기] 복합 대입 기호를 채워 점수가 100 이상일 때 보너스 50을 더한 점수를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the compound assignment operator to add 50 when point >= 100.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] crit가 0이 아닐 때 공격력(dmg)을 2배로 만드는 블록을 조립해보세요.",
      "prompt_en": "[Block] Double dmg with *= 2 when crit is non-zero (Truthy).",
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
      "prompt_ko": "[빈칸 채우기] 두 복합 대입 기호를 채워 짝수면 10을 더하고, 20 이상이면 5를 뺀 값을 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the compound operators to add 10 if even, then subtract 5 if >= 20.",
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
      "prompt_ko": "[틀린 곳 수정] 입력값이 10 이상일 때만 Big이 출력되도록 if 조건의 비교 연산자를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the comparison operator in the if header so Big prints when n >= 10.",
      "hint_ko": "현재 조건식이 n <= 10으로 되어 있습니다. 10 이상일 때 참이 되도록 n >= 10으로 고쳐보세요.",
      "hint_en": "Change the comparison operator from <= to >= so the block runs when n is at least 10.",
      "templateCode": "n = int(input())\nif n <= 10:\n    print(\"Big\")\nprint(\"End\")",
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
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 입력값 n이 짝수일 때만 10이 더해지도록 나머지 비교 조건식을 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the remainder check so 10 is added only when n is even.",
      "hint_ko": "2로 나눈 나머지가 1이면 홀수입니다. 짝수일 때 참이 되도록 나머지 비교값을 0으로 고쳐보세요.",
      "hint_en": "A remainder of 1 tests for odd numbers; change 1 to 0 so the condition matches even numbers.",
      "templateCode": "n = int(input())\nif n % 2 == 1:\n    n += 10\nprint(n)",
      "targetCode": "n = int(input())\nif n % 2 == 0:\n    n += 10\nprint(n)",
      "testCases": [
        {
          "id": 1,
          "input": "12",
          "expectedOutput": "22"
        },
        {
          "id": 2,
          "input": "7",
          "expectedOutput": "7"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 변수 n이 60 이상인지 검사하는 if 조건문 헤더 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the if condition header checking whether n is at least 60.",
      "hint_ko": "if n >= 60: 형태로 조건문 키워드, 비교식, 끝 콜론(:)까지 한 줄로 작성해보세요.",
      "hint_en": "Write the header line as if n >= 60: including the trailing colon.",
      "templateCode": "n = int(input())\n§§§§§§§§§§§\n    print(\"Clear\")",
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
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] price가 5000 이상일 때 복합 대입 연산자로 1000을 차감하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the indented line that subtracts 1000 from price using -=.",
      "hint_ko": "4칸 들여쓰기 뒤쪽에 price -= 1000을 작성해 가격을 1000만큼 줄여보세요.",
      "hint_en": "After the 4-space indentation, write price -= 1000 to apply the discount.",
      "templateCode": "price = int(input())\nif price >= 5000:\n    §§§§§§§§§§§§§\nprint(price)",
      "targetCode": "price = int(input())\nif price >= 5000:\n    price -= 1000\nprint(price)",
      "testCases": [
        {
          "id": 1,
          "input": "6000",
          "expectedOutput": "5000"
        },
        {
          "id": 2,
          "input": "4000",
          "expectedOutput": "4000"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 파이썬 코드를 실행했을 때 화면에 출력될 올바른 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output that will be printed when the following Python code runs.",
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
