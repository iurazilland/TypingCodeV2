import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_22: PracticeRound = {
  "id": "py-basic-r22",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 22,
  "title_ko": "22레벨: 복합 조건문, 중첩 if문과 pass 기초",
  "title_en": "Level 22: Compound Conditions, Nested if & pass",
  "description_ko": "복합 논리 조건문, 조건문 안의 중첩 if 구조, 그리고 빈 블록을 채우는 pass 키워드를 익힙니다.",
  "description_en": "Combine compound logical conditions, nested if statements, and the pass placeholder.",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "method",
    "type",
    "if"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "공백으로 입력된 두 점수를 정수 kor, eng에 담고 둘 다 60 이상이면 \"Pass\", 아니면 \"Fail\"을 출력해보세요.",
      "prompt_en": "Split two scores into integers kor and eng; print \"Pass\" if both >= 60, else \"Fail\".",
      "hint_ko": "두 과목 조건을 모두 만족해야 하므로 if kor >= 60 and eng >= 60:으로 검사하세요.",
      "hint_en": "Use kor >= 60 and eng >= 60 in the if condition.",
      "targetCode": "a, b = input().split()\nkor = int(a)\neng = int(b)\nif kor >= 60 and eng >= 60:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")",
      "testCases": [
        {
          "id": 1,
          "input": "75 80",
          "expectedOutput": "Pass"
        },
        {
          "id": 2,
          "input": "90 50",
          "expectedOutput": "Fail"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 논리 키워드와 나머지 분기 키워드를 채워 토요일이나 일요일이면 Weekend, 아니면 Weekday를 출력해보세요.",
      "prompt_en": "Fill in the logical and fallback keywords to print Weekend for Sat/Sun and Weekday otherwise.",
      "hint_ko": "둘 중 하나만 같아도 참이 되도록 or를 쓰고, 나머지 분기에는 else를 입력하세요.",
      "hint_en": "Enter or on line 2 and else on line 4.",
      "templateCode": "day = input()\nif day == \"Sat\" §§ day == \"Sun\":\n    print(\"Weekend\")\n§§§§:\n    print(\"Weekday\")",
      "targetCode": "day = input()\nif day == \"Sat\" or day == \"Sun\":\n    print(\"Weekend\")\nelse:\n    print(\"Weekday\")",
      "testCases": [
        {
          "id": 1,
          "input": "Sun",
          "expectedOutput": "Weekend"
        },
        {
          "id": 2,
          "input": "Mon",
          "expectedOutput": "Weekday"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "정수 n이 양수일 때 안쪽 if-else로 짝수면 \"Plus Even\", 홀수면 \"Plus Odd\"를, 0 이하면 \"Zero or Minus\"를 출력해보세요.",
      "prompt_en": "If n > 0, nest an if-else to print \"Plus Even\" or \"Plus Odd\"; otherwise print \"Zero or Minus\".",
      "hint_ko": "바깥 if 조건에 n > 0, 안쪽 중첩 if 조건에 n % 2 == 0을 넣어 단계별로 분기하세요.",
      "hint_en": "Check n > 0 in the outer if and n % 2 == 0 in the nested inner if.",
      "targetCode": "n = int(input())\nif n > 0:\n    if n % 2 == 0:\n        print(\"Plus Even\")\n    else:\n        print(\"Plus Odd\")\nelse:\n    print(\"Zero or Minus\")",
      "testCases": [
        {
          "id": 1,
          "input": "8",
          "expectedOutput": "Plus Even"
        },
        {
          "id": 2,
          "input": "7",
          "expectedOutput": "Plus Odd"
        },
        {
          "id": 3,
          "input": "-2",
          "expectedOutput": "Zero or Minus"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 아무 동작 없이 넘어가는 자리 채움 키워드를 넣어 음수일 때는 출력을 건너뛰고 Done만 나오게 해보세요.",
      "prompt_en": "Fill in the no-op placeholder keyword so negative numbers skip printing and only output Done.",
      "hint_ko": "파이썬에서 조건문 블록 안을 비워두면 오류가 나므로, 아무 동작도 하지 않을 때는 pass를 적습니다.",
      "hint_en": "Use the four-letter keyword pass inside an empty conditional branch.",
      "templateCode": "n = int(input())\nif n < 0:\n    §§§§\nelse:\n    print(n)\nprint(\"Done\")",
      "targetCode": "n = int(input())\nif n < 0:\n    pass\nelse:\n    print(n)\nprint(\"Done\")",
      "testCases": [
        {
          "id": 1,
          "input": "-5",
          "expectedOutput": "Done"
        },
        {
          "id": 2,
          "input": "12",
          "expectedOutput": "12\nDone"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "정수 temp를 입력받아 18 <= temp <= 26 범위이면 \"Good\", 벗어나면 \"Adjust\"를 출력해보세요.",
      "prompt_en": "Read integer temp; print \"Good\" if 18 <= temp <= 26, otherwise print \"Adjust\".",
      "hint_ko": "파이썬은 수학 부등식처럼 18 <= temp <= 26 연쇄 비교식을 한 번에 작성할 수 있습니다.",
      "hint_en": "Write the chained comparison 18 <= temp <= 26 directly in the if condition.",
      "targetCode": "temp = int(input())\nif 18 <= temp <= 26:\n    print(\"Good\")\nelse:\n    print(\"Adjust\")",
      "testCases": [
        {
          "id": 1,
          "input": "22",
          "expectedOutput": "Good"
        },
        {
          "id": 2,
          "input": "30",
          "expectedOutput": "Adjust"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 조건 키워드와 자리 채움 키워드를 채워 admin이면서 mute일 때는 아무 출력 없이 넘어간 뒤 OK를 출력해보세요.",
      "prompt_en": "Fill in the inner conditional keyword and no-op keyword so admin in mute mode only prints OK.",
      "hint_ko": "4칸 들여쓴 안쪽 조건문은 if로 시작하고, 8칸 들여쓴 빈 실행 블록에는 pass를 적습니다.",
      "hint_en": "Enter if on line 4 and pass on line 5.",
      "templateCode": "role = input()\nmode = input()\nif role == \"admin\":\n    §§ mode == \"mute\":\n        §§§§\n    else:\n        print(\"Alert\")\nprint(\"OK\")",
      "targetCode": "role = input()\nmode = input()\nif role == \"admin\":\n    if mode == \"mute\":\n        pass\n    else:\n        print(\"Alert\")\nprint(\"OK\")",
      "testCases": [
        {
          "id": 1,
          "input": "admin\nmute",
          "expectedOutput": "OK"
        },
        {
          "id": 2,
          "input": "admin\nloud",
          "expectedOutput": "Alert\nOK"
        },
        {
          "id": 3,
          "input": "user\nloud",
          "expectedOutput": "OK"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "아이디가 \"admin\"이면 안쪽에서 비밀번호가 \"1234\"일 때 \"Admin OK\", 아니면 \"Wrong PW\"를, 아이디가 다르면 \"No User\"를 출력해보세요.",
      "prompt_en": "Check id_in == \"admin\", nest pw_in == \"1234\" for \"Admin OK\" vs \"Wrong PW\", else print \"No User\".",
      "hint_ko": "바깥 if에서 아이디를 먼저 확인하고, 일치할 때만 안쪽 if-else에서 비밀번호를 검사합니다.",
      "hint_en": "Test id_in == \"admin\" in the outer if and pw_in == \"1234\" in the inner if.",
      "targetCode": "id_in = input()\npw_in = input()\nif id_in == \"admin\":\n    if pw_in == \"1234\":\n        print(\"Admin OK\")\n    else:\n        print(\"Wrong PW\")\nelse:\n    print(\"No User\")",
      "testCases": [
        {
          "id": 1,
          "input": "admin\n1234",
          "expectedOutput": "Admin OK"
        },
        {
          "id": 2,
          "input": "admin\n0000",
          "expectedOutput": "Wrong PW"
        },
        {
          "id": 3,
          "input": "guest\n1234",
          "expectedOutput": "No User"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸에 논리 키워드를 채워 레벨이 10 이상이면서 동시에 (VIP가 참이거나 레벨이 30 이상)이면 Enter를 출력해보세요.",
      "prompt_en": "Fill in the logical keywords so lv >= 10 together with (bool(vip) or lv >= 30) prints Enter.",
      "hint_ko": "레벨 10 이상과 괄호 조건을 모두 만족해야 하므로 첫째는 and, 괄호 안 선택 조건은 or입니다.",
      "hint_en": "Use and before the parentheses and or inside them.",
      "templateCode": "lv = int(input())\nvip = int(input())\nif lv >= 10 §§§ (bool(vip) §§ lv >= 30):\n    print(\"Enter\")\nelse:\n    print(\"Deny\")",
      "targetCode": "lv = int(input())\nvip = int(input())\nif lv >= 10 and (bool(vip) or lv >= 30):\n    print(\"Enter\")\nelse:\n    print(\"Deny\")",
      "testCases": [
        {
          "id": 1,
          "input": "15\n1",
          "expectedOutput": "Enter"
        },
        {
          "id": 2,
          "input": "35\n0",
          "expectedOutput": "Enter"
        },
        {
          "id": 3,
          "input": "15\n0",
          "expectedOutput": "Deny"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "정수 n을 입력받아 3과 5의 공배수면 \"FizzBuzz\", 3의 배수면 \"Fizz\", 5의 배수면 \"Buzz\", 아니면 n을 출력해보세요.",
      "prompt_en": "Print \"FizzBuzz\" if n is divisible by 3 and 5, \"Fizz\" if by 3, \"Buzz\" if by 5, else n.",
      "hint_ko": "공배수 조건(n % 3 == 0 and n % 5 == 0)을 가장 첫 번째 if에서 먼저 검사해야 합니다.",
      "hint_en": "Check n % 3 == 0 and n % 5 == 0 first before individual checks.",
      "targetCode": "n = int(input())\nif n % 3 == 0 and n % 5 == 0:\n    print(\"FizzBuzz\")\nelif n % 3 == 0:\n    print(\"Fizz\")\nelif n % 5 == 0:\n    print(\"Buzz\")\nelse:\n    print(n)",
      "testCases": [
        {
          "id": 1,
          "input": "15",
          "expectedOutput": "FizzBuzz"
        },
        {
          "id": 2,
          "input": "9",
          "expectedOutput": "Fizz"
        },
        {
          "id": 3,
          "input": "10",
          "expectedOutput": "Buzz"
        },
        {
          "id": 4,
          "input": "7",
          "expectedOutput": "7"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸을 채워 출금액(amt)이 0.0 이하면 아무 처리 없이 넘어가고, 잔액 이하면 차감한 잔액을 출력해보세요.",
      "prompt_en": "Fill in the blanks so non-positive amounts do nothing and valid amounts subtract from bal.",
      "hint_ko": "아무 처리도 하지 않는 첫 분기에는 pass를, 추가 조건 분기에는 elif를 입력하세요.",
      "hint_en": "Enter pass on line 4 and elif on line 5.",
      "templateCode": "bal = 100.0\namt = float(input())\nif amt <= 0.0:\n    §§§§\n§§§§ amt <= bal:\n    bal -= amt\nprint(bal)",
      "targetCode": "bal = 100.0\namt = float(input())\nif amt <= 0.0:\n    pass\nelif amt <= bal:\n    bal -= amt\nprint(bal)",
      "testCases": [
        {
          "id": 1,
          "input": "-10.0",
          "expectedOutput": "100.0"
        },
        {
          "id": 2,
          "input": "35.5",
          "expectedOutput": "64.5"
        },
        {
          "id": 3,
          "input": "150.0",
          "expectedOutput": "100.0"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "음수일 때 아무 동작 없이 넘어가려다 잘못된 단어를 적어 발생한 오류를 올바른 파이썬 키워드로 수정해보세요.",
      "prompt_en": "Replace the invalid placeholder word with the Python keyword that cleanly does nothing.",
      "hint_ko": "파이썬에서 아무 작업도 수행하지 않고 블록을 지나가는 키워드는 skip이 아니라 pass입니다.",
      "hint_en": "Replace skip on line 3 with pass.",
      "templateCode": "n = int(input())\nif n < 0:\n    skip\nelse:\n    n += 10\nprint(n)",
      "targetCode": "n = int(input())\nif n < 0:\n    pass\nelse:\n    n += 10\nprint(n)",
      "testCases": [
        {
          "id": 1,
          "input": "-5",
          "expectedOutput": "-5"
        },
        {
          "id": 2,
          "input": "20",
          "expectedOutput": "30"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "중첩된 안쪽 조건문 아래에 8칸 들여쓰기에 맞춰 한 줄을 추가하여 100 이상 양수일 때 Big을 출력해보세요.",
      "prompt_en": "Add one 8-space indented line under if n >= 100: to print Big.",
      "hint_ko": "넷째 줄에서 공백 8칸 들여쓰기 뒤에 print(\"Big\")을 작성하세요.",
      "hint_en": "Indent by 8 spaces on line 4 and write print(\"Big\").",
      "templateCode": "n = int(input())\nif n > 0:\n    if n >= 100:\n        §§§§§§§§§§§§",
      "targetCode": "n = int(input())\nif n > 0:\n    if n >= 100:\n        print(\"Big\")",
      "testCases": [
        {
          "id": 1,
          "input": "150",
          "expectedOutput": "Big"
        },
        {
          "id": 2,
          "input": "100",
          "expectedOutput": "Big"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "입력값으로 6이 주어질 때, 다음 파이썬 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "When 6 is given as input, select the exact output of the following Python code.",
      "hint_ko": "6 > 0이 참이라 안쪽 if로 들어가고, 6 % 2 == 0도 참이므로 pass가 실행되어 res는 처음 값 10 그대로 출력됩니다.",
      "hint_en": "6 > 0 and 6 % 2 == 0 are both True, hitting pass and leaving res unchanged at 10.",
      "targetCode": "x = int(input())\nres = 10\nif x > 0:\n    if x % 2 == 0:\n        pass\n    else:\n        res += x\nelse:\n    res -= 5\nprint(res)",
      "choices": [
        "10",
        "16",
        "5",
        "6"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "6",
          "expectedOutput": "10"
        }
      ]
    }
  ]
};
