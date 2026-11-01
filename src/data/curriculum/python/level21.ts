import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_21: PracticeRound = {
  "id": "py-basic-r21",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 21,
  "title_ko": "21레벨: if - elif - else 다중 조건 분기",
  "title_en": "Level 21: if - elif - else Multi-Way Branching",
  "description_ko": "세 가지 이상의 조건을 위에서부터 차례대로 검사해 분기하는 if - elif - else 구조를 익힙니다.",
  "description_en": "Chain multiple conditions cleanly from top to bottom using if - elif - else.",
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
      "prompt_ko": "정수 n을 입력받아 0보다 크면 \"Positive\", 0과 같으면 \"Zero\", 그 외에는 \"Negative\"를 출력해보세요.",
      "prompt_en": "Read integer n; print \"Positive\" (>0), \"Zero\" (==0), or \"Negative\" (otherwise).",
      "hint_ko": "첫째 if 조건이 거짓일 때 추가 조건을 검사하는 두 번째 가지가 elif입니다.",
      "hint_en": "Use elif n == 0: for the second check and else: for negative numbers.",
      "targetCode": "n = int(input())\nif n > 0:\n    print(\"Positive\")\nelif n == 0:\n    print(\"Zero\")\nelse:\n    print(\"Negative\")",
      "testCases": [
        {
          "id": 1,
          "input": "7",
          "expectedOutput": "Positive"
        },
        {
          "id": 2,
          "input": "0",
          "expectedOutput": "Zero"
        },
        {
          "id": 3,
          "input": "-3",
          "expectedOutput": "Negative"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "넷째 줄 빈칸에 추가 조건 분기 키워드와 콜론을 채워 Plus, Zero, Minus 중 하나를 출력해보세요.",
      "prompt_en": "Fill in the additional-condition keyword and colon on line 4.",
      "hint_ko": "파이썬에서 \"그렇지 않고 만약 ~라면\"은 네 글자 키워드 elif로 적고 조건 끝에 콜론(:)을 붙입니다.",
      "hint_en": "Write elif at the start of line 4 and : at the end.",
      "templateCode": "n = int(input())\nif n > 0:\n    print(\"Plus\")\n§§§§ n == 0§\n    print(\"Zero\")\nelse:\n    print(\"Minus\")",
      "targetCode": "n = int(input())\nif n > 0:\n    print(\"Plus\")\nelif n == 0:\n    print(\"Zero\")\nelse:\n    print(\"Minus\")",
      "testCases": [
        {
          "id": 1,
          "input": "0",
          "expectedOutput": "Zero"
        },
        {
          "id": 2,
          "input": "5",
          "expectedOutput": "Plus"
        },
        {
          "id": 3,
          "input": "-2",
          "expectedOutput": "Minus"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "점수 score를 입력받아 90 이상은 \"A\", 80 이상은 \"B\", 70 이상은 \"C\", 미만은 \"F\"를 출력해보세요.",
      "prompt_en": "Read integer score and print \"A\" (>=90), \"B\" (>=80), \"C\" (>=70), or \"F\" (<70).",
      "hint_ko": "높은 기준부터 순서대로 검사하면 맨 처음 참이 된 학점 하나만 출력되고 분기가 종료됩니다.",
      "hint_en": "Test thresholds from highest (90) down to lowest (70).",
      "targetCode": "score = int(input())\nif score >= 90:\n    print(\"A\")\nelif score >= 80:\n    print(\"B\")\nelif score >= 70:\n    print(\"C\")\nelse:\n    print(\"F\")",
      "testCases": [
        {
          "id": 1,
          "input": "85",
          "expectedOutput": "B"
        },
        {
          "id": 2,
          "input": "92",
          "expectedOutput": "A"
        },
        {
          "id": 3,
          "input": "74",
          "expectedOutput": "C"
        },
        {
          "id": 4,
          "input": "60",
          "expectedOutput": "F"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸에 분기 키워드를 채워 명령어가 \"start\"면 Run, \"stop\"이면 Halt, 나머지는 Wait을 출력해보세요.",
      "prompt_en": "Fill in the two branching keywords to dispatch \"start\", \"stop\", and fallback commands.",
      "hint_ko": "조건식이 뒤따르는 넷째 줄에는 elif를, 조건식 없는 여섯째 줄에는 else를 입력하세요.",
      "hint_en": "Enter elif on line 4 and else on line 6.",
      "templateCode": "cmd = input()\nif cmd == \"start\":\n    print(\"Run\")\n§§§§ cmd == \"stop\":\n    print(\"Halt\")\n§§§§:\n    print(\"Wait\")",
      "targetCode": "cmd = input()\nif cmd == \"start\":\n    print(\"Run\")\nelif cmd == \"stop\":\n    print(\"Halt\")\nelse:\n    print(\"Wait\")",
      "testCases": [
        {
          "id": 1,
          "input": "stop",
          "expectedOutput": "Halt"
        },
        {
          "id": 2,
          "input": "start",
          "expectedOutput": "Run"
        },
        {
          "id": 3,
          "input": "idle",
          "expectedOutput": "Wait"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "레벨 lv를 입력받아 50 이상이면 \"Master\", 20 이상이면 \"Pro\", 미만이면 \"Rookie\"를 rank에 담아 출력해보세요.",
      "prompt_en": "Read integer lv, set rank to \"Master\" (>=50), \"Pro\" (>=20), or \"Rookie\", and print rank.",
      "hint_ko": "각 분기에서는 rank 변수에 등급 문자열만 저장하고, 맨 마지막 줄에서 print(rank)로 출력합니다.",
      "hint_en": "Assign rank inside each branch and print(rank) once after the block.",
      "targetCode": "lv = int(input())\nif lv >= 50:\n    rank = \"Master\"\nelif lv >= 20:\n    rank = \"Pro\"\nelse:\n    rank = \"Rookie\"\nprint(rank)",
      "testCases": [
        {
          "id": 1,
          "input": "25",
          "expectedOutput": "Pro"
        },
        {
          "id": 2,
          "input": "60",
          "expectedOutput": "Master"
        },
        {
          "id": 3,
          "input": "10",
          "expectedOutput": "Rookie"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 미만 비교 기호와 추가 조건 키워드를 채워 8세 미만은 0, 20세 미만은 1000, 이상은 2000을 출력해보세요.",
      "prompt_en": "Fill in the less-than symbol and branching keyword to compute the age-based fee.",
      "hint_ko": "미만 비교에는 <를 쓰고, 두 번째 나이 구간 검사에는 elif를 사용합니다.",
      "hint_en": "Enter < on line 2 and elif on line 4.",
      "templateCode": "age = int(input())\nif age § 8:\n    fee = 0\n§§§§ age < 20:\n    fee = 1000\nelse:\n    fee = 2000\nprint(fee)",
      "targetCode": "age = int(input())\nif age < 8:\n    fee = 0\nelif age < 20:\n    fee = 1000\nelse:\n    fee = 2000\nprint(fee)",
      "testCases": [
        {
          "id": 1,
          "input": "15",
          "expectedOutput": "1000"
        },
        {
          "id": 2,
          "input": "6",
          "expectedOutput": "0"
        },
        {
          "id": 3,
          "input": "25",
          "expectedOutput": "2000"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "정수 n을 입력받아 6의 배수면 \"6x\", 2의 배수면 \"2x\", 3의 배수면 \"3x\", 모두 아니면 \"None\"을 출력해보세요.",
      "prompt_en": "Read integer n; print \"6x\" (%6==0), \"2x\" (%2==0), \"3x\" (%3==0), or \"None\".",
      "hint_ko": "12처럼 2와 3의 공배수일 때 \"6x\"가 나오려면 가장 좁은 조건인 n % 6 == 0을 맨 먼저 검사해야 합니다.",
      "hint_en": "Check n % 6 == 0 first before checking n % 2 == 0 or n % 3 == 0.",
      "targetCode": "n = int(input())\nif n % 6 == 0:\n    print(\"6x\")\nelif n % 2 == 0:\n    print(\"2x\")\nelif n % 3 == 0:\n    print(\"3x\")\nelse:\n    print(\"None\")",
      "testCases": [
        {
          "id": 1,
          "input": "12",
          "expectedOutput": "6x"
        },
        {
          "id": 2,
          "input": "8",
          "expectedOutput": "2x"
        },
        {
          "id": 3,
          "input": "9",
          "expectedOutput": "3x"
        },
        {
          "id": 4,
          "input": "7",
          "expectedOutput": "None"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 반전 논리 키워드와 이하 비교 기호를 채워 체력이 0이면 Dead, 30 이하면 Low, 초과면 Safe를 출력해보세요.",
      "prompt_en": "Fill in the logical negation keyword and less-or-equal operator to classify hp.",
      "hint_ko": "hp가 0일 때 참이 되도록 not hp를 쓰고, 30 이하 조건에는 <=를 입력하세요.",
      "hint_en": "Use not on line 2 and <= on line 4.",
      "templateCode": "hp = int(input())\nif §§§ hp:\n    state = \"Dead\"\nelif hp §§ 30:\n    state = \"Low\"\nelse:\n    state = \"Safe\"\nprint(state)",
      "targetCode": "hp = int(input())\nif not hp:\n    state = \"Dead\"\nelif hp <= 30:\n    state = \"Low\"\nelse:\n    state = \"Safe\"\nprint(state)",
      "testCases": [
        {
          "id": 1,
          "input": "0",
          "expectedOutput": "Dead"
        },
        {
          "id": 2,
          "input": "20",
          "expectedOutput": "Low"
        },
        {
          "id": 3,
          "input": "80",
          "expectedOutput": "Safe"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "체온 temp를 실수(float)로 입력받아 37.5 이상은 \"Fever\", 36.0 이상은 \"Normal\", 미만은 \"Low\"를 출력해보세요.",
      "prompt_en": "Read float temp and print \"Fever\" (>=37.5), \"Normal\" (>=36.0), or \"Low\".",
      "hint_ko": "temp = float(input())으로 실수를 입력받은 뒤 37.5와 36.0 순서로 비교하세요.",
      "hint_en": "Use float(input()) and compare against 37.5 in if and 36.0 in elif.",
      "targetCode": "temp = float(input())\nif temp >= 37.5:\n    print(\"Fever\")\nelif temp >= 36.0:\n    print(\"Normal\")\nelse:\n    print(\"Low\")",
      "testCases": [
        {
          "id": 1,
          "input": "38.1",
          "expectedOutput": "Fever"
        },
        {
          "id": 2,
          "input": "36.5",
          "expectedOutput": "Normal"
        },
        {
          "id": 3,
          "input": "35.4",
          "expectedOutput": "Low"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸에 복합 대입 기호를 채워 30000 이상은 5000 차감, 15000 이상은 2000 차감, 미만은 2500 추가 후 출력해보세요.",
      "prompt_en": "Fill in the compound operators to apply tiered discounts or add a 2500 shipping fee.",
      "hint_ko": "금액을 뺄 때는 -=를, 배송비를 더할 때는 +=를 사용합니다.",
      "hint_en": "Enter -= on line 3 and += on line 7.",
      "templateCode": "price = int(input())\nif price >= 30000:\n    price §§ 5000\nelif price >= 15000:\n    price -= 2000\nelse:\n    price §§ 2500\nprint(price)",
      "targetCode": "price = int(input())\nif price >= 30000:\n    price -= 5000\nelif price >= 15000:\n    price -= 2000\nelse:\n    price += 2500\nprint(price)",
      "testCases": [
        {
          "id": 1,
          "input": "35000",
          "expectedOutput": "30000"
        },
        {
          "id": 2,
          "input": "20000",
          "expectedOutput": "18000"
        },
        {
          "id": 3,
          "input": "10000",
          "expectedOutput": "12500"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "다중 조건 키워드를 두 단어로 잘못 적어 발생한 문법 오류를 수정해 무게 등급을 출력해보세요.",
      "prompt_en": "Fix the SyntaxError caused by writing the multi-way branch keyword as two words.",
      "hint_ko": "파이썬에서는 else if 대신 네 글자로 줄인 단일 키워드 elif를 사용합니다.",
      "hint_en": "Replace else if on line 4 with elif.",
      "templateCode": "w = float(input())\nif w >= 10.0:\n    print(\"Heavy\")\nelse if w >= 5.0:\n    print(\"Mid\")\nelse:\n    print(\"Light\")",
      "targetCode": "w = float(input())\nif w >= 10.0:\n    print(\"Heavy\")\nelif w >= 5.0:\n    print(\"Mid\")\nelse:\n    print(\"Light\")",
      "testCases": [
        {
          "id": 1,
          "input": "7.5",
          "expectedOutput": "Mid"
        },
        {
          "id": 2,
          "input": "12.0",
          "expectedOutput": "Heavy"
        },
        {
          "id": 3,
          "input": "2.5",
          "expectedOutput": "Light"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "실수 점수 구간에 따라 포인트를 누적하는 코드 아래에 한 줄을 추가하여 최종 pts를 출력해보세요.",
      "prompt_en": "Add one line at the end to print the final accumulated pts.",
      "hint_ko": "들여쓰기 없이 맨 아래 줄에 print(pts)를 작성하면 모든 분기가 끝난 뒤 점수가 출력됩니다.",
      "hint_en": "Write print(pts) without indentation on the last line.",
      "templateCode": "s = float(input())\npts = 10\nif s >= 9.0:\n    pts += 5\nelif s >= 7.0:\n    pts += 2\n§§§§§§§§§§",
      "targetCode": "s = float(input())\npts = 10\nif s >= 9.0:\n    pts += 5\nelif s >= 7.0:\n    pts += 2\nprint(pts)",
      "testCases": [
        {
          "id": 1,
          "input": "9.5",
          "expectedOutput": "15"
        },
        {
          "id": 2,
          "input": "7.5",
          "expectedOutput": "12"
        },
        {
          "id": 3,
          "input": "5.0",
          "expectedOutput": "10"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "입력값으로 3.5가 주어질 때, 다음 파이썬 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "When 3.5 is given as input, select the exact output of the following Python code.",
      "hint_ko": "첫 묶음에서 3.5 >= 2.0이 참이라 fee는 2500이 되고 elif는 건너뜁니다. 아래 독립 if 3.5 >= 3.0도 참이라 300이 빠져 2200입니다.",
      "hint_en": "t >= 2.0 adds 1500 (2500) and skips elif; the separate if t >= 3.0 subtracts 300 -> 2200.",
      "targetCode": "t = float(input())\nfee = 1000\nif t >= 2.0:\n    fee += 1500\nelif t >= 1.0:\n    fee += 500\nif t >= 3.0:\n    fee -= 300\nprint(fee)",
      "choices": [
        "2500",
        "2700",
        "2200",
        "1200"
      ],
      "correctChoiceIndex": 2,
      "testCases": [
        {
          "id": 1,
          "input": "3.5",
          "expectedOutput": "2200"
        }
      ]
    }
  ]
};
