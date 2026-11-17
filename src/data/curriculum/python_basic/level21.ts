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
  "totalQuestions": 15,
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] if - elif - else로 양수, 0, 음수를 나누어 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the blocks to classify n as Positive, Zero, or Negative.",
      "hint_ko": "위에서부터 차례대로 조건을 검사해 처음으로 참이 되는 한 갈래만 실행하고 전체 조건문을 빠져나갑니다.",
      "hint_en": "Conditions are checked top to bottom; only the first True branch runs before exiting the entire chain.",
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
      "prompt_ko": "[빈칸 채우기] 넷째 줄에 추가 조건 분기 키워드와 콜론을 채워 Plus, Zero, Minus를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the additional-condition keyword and colon on line 4.",
      "hint_ko": "그밖에 만약(else if)의 앞 두 글자와 뒤 두 글자를 합쳐 네 글자로 줄인 분기 키워드를 적고, 조건식 끝에 콜론을 붙입니다.",
      "hint_en": "Combine the first two letters of \"else\" with \"if\" into a four-letter keyword, and finish the header line with a colon.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 여러 개의 elif를 연결해 점수 구간별로 A, B, C, F 학점을 출력해보세요.",
      "prompt_en": "[Block] Chain multiple elif branches to print grade A, B, C, or F.",
      "hint_ko": "90 이상 조건이 거짓일 때만 80 이상(elif score >= 80:)을 검사하므로 상한 조건을 중복해서 적을 필요가 없습니다.",
      "hint_en": "Because elif score >= 80: is only reached when score >= 90 is False, there is no need to re-check the upper bound.",
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
      "prompt_ko": "[빈칸 채우기] 두 분기 키워드를 채워 \"start\"면 Run, \"stop\"이면 Halt, 나머지는 Wait을 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the two branching keywords to dispatch \"start\", \"stop\", and fallback commands.",
      "hint_ko": "추가 조건식이 뒤따르는 넷째 줄에는 '그밖에 만약' 두 영단어의 앞 두 글자씩 합친 네 글자 키워드를, 여섯째 줄에는 '그밖에'를 뜻하는 네 글자 키워드를 적으세요.",
      "hint_en": "Combine the first two letters of each word in 'otherwise when' on line 4 where a condition follows, and use the 4-letter fallback keyword before the bare colon on line 6.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 각 분기에서 변수 rank에 등급을 저장하고 마지막에 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Store the title in rank across if-elif-else branches and print rank once.",
      "hint_ko": "어느 한 분기는 반드시 실행되므로 rank 변수에 등급 문자열이 저장된 뒤 마지막 줄에서 출력됩니다.",
      "hint_en": "Since exactly one branch always executes, rank receives a title string before the final print(rank) line runs.",
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
      "prompt_ko": "[빈칸 채우기] 미만 비교 기호와 분기 키워드를 채워 나이대별 요금(0, 1000, 2000)을 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the less-than symbol and branching keyword to compute the age-based fee.",
      "hint_ko": "둘째 줄에는 왼쪽이 더 작음(미만)을 뜻하는 부등호를 넣고, 넷째 줄에는 else if를 네 글자로 줄인 다중 분기 키워드를 채워보세요.",
      "hint_en": "Place the less-than angle bracket on line 2, and start the second age check on line 4 with the four-letter contraction of \"else if\".",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 6의 배수를 가장 먼저 검사하고 2의 배수, 3의 배수를 차례로 판별해보세요.",
      "prompt_en": "[Block] Check multiples of 6 first, then multiples of 2 and 3 in elif branches.",
      "hint_ko": "만약 2의 배수 조건을 맨 위에 두면 6의 배수도 첫 분기에서 걸러져 아래쪽 6의 배수 분기에 도달하지 못합니다.",
      "hint_en": "If the multiple-of-2 check came first, multiples of 6 would be caught there and never reach the multiple-of-6 branch.",
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
      "prompt_ko": "[빈칸 채우기] 반전 논리 키워드와 이하 비교 기호를 채워 체력 상태(Dead, Low, Safe)를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the logical negation keyword and less-or-equal operator to classify hp.",
      "hint_ko": "체력이 0(거짓)일 때 첫 조건이 참이 되도록 영어로 부정을 뜻하는 세 글자 키워드를 앞에 붙이고, 둘째 분기에는 작거나 같음(부등호+등호) 기호를 넣으세요.",
      "hint_en": "Invert truthiness on line 2 with the three-letter English negation word so 0 triggers the branch, and use less-or-equal on line 4.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 체온(temp)을 높은 기준부터 검사해 Fever, Normal, Low로 분류해보세요.",
      "prompt_en": "[Block] Classify temperature from highest threshold down into Fever, Normal, or Low.",
      "hint_ko": "38 이상인지 먼저 확인하고, 아닐 때만 36 이상인지 검사하며, 둘 다 아니면 else로 넘어갑니다.",
      "hint_en": "It checks >= 38 first, then tests >= 36 only if the first check was False, and falls back to else otherwise.",
      "targetCode": "temp = int(input())\nif temp >= 38:\n    print(\"Fever\")\nelif temp >= 36:\n    print(\"Normal\")\nelse:\n    print(\"Low\")",
      "testCases": [
        {
          "id": 1,
          "input": "39",
          "expectedOutput": "Fever"
        },
        {
          "id": 2,
          "input": "37",
          "expectedOutput": "Normal"
        },
        {
          "id": 3,
          "input": "35",
          "expectedOutput": "Low"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 두 복합 대입 기호를 채워 구간별 할인 차감 또는 배송비 2500 추가 후 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the compound operators to apply tiered discounts or add a 2500 shipping fee.",
      "hint_ko": "할인 구간에서는 빼기 기호와 등호를 합친 차감 연산자를, 배송비가 붙는 구간에서는 더하기 기호와 등호를 합친 누적 연산자를 써보세요.",
      "hint_en": "Subtract the discount in place using minus-equals on line 3, and add the shipping fee using plus-equals on line 7.",
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
      "prompt_ko": "[틀린 곳 수정] 50 이상이면 Top, 10 이상이면 Mid가 나오도록 뒤바뀐 조건 순서를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the swapped condition order so w >= 50 prints Top and w >= 10 prints Mid.",
      "hint_ko": "10 이상 조건이 위에 있으면 60도 Mid로 빠집니다. 50 이상(Top) 조건을 위쪽 if에, 10 이상(Mid)을 아래쪽 elif에 배치하세요.",
      "hint_en": "Check the higher threshold w >= 50 (Top) in the if branch first, and w >= 10 (Mid) in the elif branch.",
      "templateCode": "w = int(input())\nif w >= 10:\n    print(\"Mid\")\nelif w >= 50:\n    print(\"Top\")\nelse:\n    print(\"Low\")",
      "targetCode": "w = int(input())\nif w >= 50:\n    print(\"Top\")\nelif w >= 10:\n    print(\"Mid\")\nelse:\n    print(\"Low\")",
      "testCases": [
        {
          "id": 1,
          "input": "60",
          "expectedOutput": "Top"
        },
        {
          "id": 2,
          "input": "20",
          "expectedOutput": "Mid"
        },
        {
          "id": 3,
          "input": "5",
          "expectedOutput": "Low"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] n이 0일 때 Zero, 음수일 때 Minus가 출력되도록 elif의 비교 연산자를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the comparison operator in elif so 0 prints Zero and negatives print Minus.",
      "hint_ko": "elif n != 0:으로 되어 있어 음수도 Zero로 빠집니다. 0과 같은지 확인하는 elif n == 0:으로 고쳐보세요.",
      "hint_en": "Change elif n != 0: to elif n == 0: so only zero matches the second branch.",
      "templateCode": "n = int(input())\nif n > 0:\n    print(\"Plus\")\nelif n != 0:\n    print(\"Zero\")\nelse:\n    print(\"Minus\")",
      "targetCode": "n = int(input())\nif n > 0:\n    print(\"Plus\")\nelif n == 0:\n    print(\"Zero\")\nelse:\n    print(\"Minus\")",
      "testCases": [
        {
          "id": 1,
          "input": "-3",
          "expectedOutput": "Minus"
        },
        {
          "id": 2,
          "input": "0",
          "expectedOutput": "Zero"
        },
        {
          "id": 3,
          "input": "5",
          "expectedOutput": "Plus"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] s가 70 이상일 때를 추가로 검사하는 elif 조건문 헤더 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the elif header line testing whether s is at least 70.",
      "hint_ko": "elif s >= 70: 형태로 추가 조건 분기 헤더와 콜론을 작성해보세요.",
      "hint_en": "Write elif s >= 70: with the trailing colon.",
      "templateCode": "s = int(input())\npts = 10\nif s >= 90:\n    pts += 5\n§§§§§§§§§§§§§\n    pts += 2\nprint(pts)",
      "targetCode": "s = int(input())\npts = 10\nif s >= 90:\n    pts += 5\nelif s >= 70:\n    pts += 2\nprint(pts)",
      "testCases": [
        {
          "id": 1,
          "input": "75",
          "expectedOutput": "12"
        },
        {
          "id": 2,
          "input": "95",
          "expectedOutput": "15"
        },
        {
          "id": 3,
          "input": "50",
          "expectedOutput": "10"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] elif lv >= 20: 블록 안에서 변수 rank에 \"Pro\"를 대입하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the indented line assigning \"Pro\" to rank inside the elif block.",
      "hint_ko": "4칸 들여쓰기 뒤에 rank = \"Pro\"를 작성해보세요.",
      "hint_en": "Keep the 4-space indentation and write rank = \"Pro\".",
      "templateCode": "lv = int(input())\nif lv >= 50:\n    rank = \"Master\"\nelif lv >= 20:\n    §§§§§§§§§§§§\nelse:\n    rank = \"Rookie\"\nprint(rank)",
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
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 파이썬 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] When 4 is given as input, select the exact output of the following Python code.",
      "hint_ko": "위쪽 묶음에서는 첫 조건이 참일 때 이어진 추가 분기를 건너뛰지만, 그 아래에 새로 시작하는 독립 조건문은 별도로 다시 검사된다는 점에 주목해보세요.",
      "hint_en": "Notice that the first multi-way chain stops after its first matching branch, whereas the separate conditional statement below it is evaluated independently.",
      "targetCode": "t = int(input())\nfee = 1000\nif t >= 2:\n    fee += 1500\nelif t >= 1:\n    fee += 500\nif t >= 3:\n    fee -= 300\nprint(fee)",
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
          "input": "4",
          "expectedOutput": "2200"
        }
      ]
    }
  ]
};
