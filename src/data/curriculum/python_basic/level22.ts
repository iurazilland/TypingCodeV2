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
      "hint_ko": "두 과목 점수가 모두 기준 이상이어야 합격이므로, 두 비교식을 동시 만족 논리 연산자로 연결해 조건문을 구성해보세요.",
      "hint_en": "Since both subjects must meet the threshold, join the two >= 60 comparisons with the conjunction operator inside the condition.",
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
      "hint_ko": "토요일이거나 일요일 중 하나만 맞아도 주말이므로 영어로 또는을 뜻하는 두 글자 키워드를, 나머지 분기에는 그밖에를 뜻하는 네 글자 키워드를 넣으세요.",
      "hint_en": "Use the two-letter English word meaning \"either\" on line 2, and the four-letter fallback keyword meaning \"otherwise\" on line 4.",
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
      "hint_ko": "바깥 조건문에서 양수 여부를 먼저 가른 뒤, 참인 블록 안쪽에 또 하나의 조건문을 중첩해 짝수와 홀수를 판별해보세요.",
      "hint_en": "Test whether the number is positive in the outer branch first, then nest another two-way check inside it to separate even and odd.",
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
      "hint_ko": "파이썬에서 들여쓰기 블록을 완전히 비워두면 문법 오류가 나므로, 영어로 지나가다·통과하다를 뜻하는 네 글자 키워드로 자리를 채워줍니다.",
      "hint_en": "Python forbids an empty indented block; fill it with the four-letter English word meaning \"to skip past / move on\".",
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
      "hint_ko": "파이썬에서는 수학의 부등식처럼 변수 양옆에 이하 기호를 연달아 적어 구간 범위를 한 번에 비교할 수 있습니다.",
      "hint_en": "Python supports chained comparisons just like math notation, letting you place the variable directly between both bounds.",
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
      "hint_ko": "4칸 들여쓴 안쪽 조건문은 만약을 뜻하는 두 글자 키워드로 시작하고, 8칸 들여쓴 빈 블록에는 지나가다·통과하다를 뜻하는 네 글자 키워드를 넣으세요.",
      "hint_en": "Start the nested check on line 4 with the two-letter conditional keyword, and put the four-letter word meaning \"move past\" in the empty block on line 5.",
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
      "hint_ko": "바깥 조건문에서 아이디 일치 여부를 먼저 걸러내고, 아이디가 맞을 때만 안쪽 조건문으로 들어가 비밀번호를 확인하도록 배치해보세요.",
      "hint_en": "Verify the user ID in the outer condition first, and check the password inside the nested branch only when the ID matches.",
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
      "hint_ko": "기본 레벨 조건과 괄호 조건을 모두 만족해야 하므로 앞에는 그리고를 뜻하는 세 글자를, 괄호 안 둘 중 하나 조건에는 또는을 뜻하는 두 글자를 적으세요.",
      "hint_en": "Connect the required base check to the parenthesized group with the three-letter conjunction word, and connect the two alternatives inside with the two-letter word.",
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
      "hint_ko": "3과 5의 공배수는 개별 배수 조건도 모두 참이 되므로, 두 배수 조건을 동시에 만족하는 경우를 맨 위 첫 분기에 두어야 합니다.",
      "hint_en": "Numbers divisible by both 3 and 5 also match the single-divisor checks, so place the combined condition at the very top.",
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
      "hint_ko": "아무 처리 없이 넘어가는 넷째 줄에는 통과하다를 뜻하는 네 글자 키워드를, 추가 조건을 검사하는 다섯째 줄에는 else if의 네 글자 축약어를 적어보세요.",
      "hint_en": "Use the four-letter word meaning \"skip past\" for the no-op branch on line 4, and the four-letter contraction of \"else if\" on line 5.",
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
      "hint_ko": "셋째 줄에 적힌 단어는 파이썬 예약어가 아니어서 선언되지 않은 이름 오류가 발생합니다. 빈 블록을 그냥 통과할 때 쓰는 네 글자 파이썬 키워드로 고쳐보세요.",
      "hint_en": "The word on line 3 is not a valid Python keyword; replace it with the four-letter keyword meaning \"move past\" that leaves a block empty.",
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
      "hint_ko": "조건문이 두 번 중첩된 안쪽 블록이므로 공백 8칸 들여쓰기를 유지한 채 지정된 문자열을 출력해보세요.",
      "hint_en": "Inside two levels of nested conditions, keep the 8-space indentation and call the print function with the target word.",
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
      "hint_ko": "입력값 6이 바깥 조건과 안쪽 짝수 조건에서 각각 어떻게 판정되는지 따라가고, 빈 블록 통과 키워드를 만났을 때 변수 값이 변하는지 확인해보세요.",
      "hint_en": "Trace input 6 through the outer check and the nested even check, then note what effect the no-op placeholder has on res.",
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
