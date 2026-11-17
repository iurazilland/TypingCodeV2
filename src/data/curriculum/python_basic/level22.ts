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
      "prompt_ko": "[블록 조립] 두 과목 점수가 모두 60 이상일 때만 \"Pass\"를 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Print \"Pass\" only when both kor >= 60 and eng >= 60 hold True.",
      "hint_ko": "두 과목 중 하나라도 60 미만이면 and 조건이 거짓이 되어 else 블록의 \"Fail\"이 출력됩니다.",
      "hint_en": "If either score is below 60, the and condition evaluates to False and the else branch prints \"Fail\".",
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
      "prompt_ko": "[빈칸 채우기] 논리 키워드와 분기 키워드를 채워 토·일요일이면 Weekend, 아니면 Weekday를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the logical and fallback keywords to print Weekend or Weekday.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 중첩 if - else로 양수일 때 짝수·홀수를 추가로 판별하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Use a nested if - else inside if n > 0: to distinguish Plus Even and Plus Odd.",
      "hint_ko": "바깥 조건(n > 0)이 참일 때만 안쪽 조건문(n % 2 == 0)으로 들어가 짝수·홀수를 추가로 판별합니다.",
      "hint_en": "Only when the outer check (n > 0) is True does execution enter the inner check (n % 2 == 0) to separate even and odd.",
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
      "prompt_ko": "[빈칸 채우기] 빈칸에 자리 채움 키워드를 넣어 음수일 때는 출력을 건너뛰고 Done만 나오게 해보세요.",
      "prompt_en": "[Fill Blank] Fill in the no-op placeholder keyword so negative numbers skip printing.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 연쇄 비교(18 <= temp <= 26)로 적정 온도를 판별하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Use chained comparison 18 <= temp <= 26 to print \"Good\" or \"Adjust\".",
      "hint_ko": "18 <= temp <= 26은 18 <= temp and temp <= 26과 동일하게 동작하며 수학 부등식처럼 간결하게 읽힙니다.",
      "hint_en": "18 <= temp <= 26 works identically to 18 <= temp and temp <= 26 while reading cleanly like math notation.",
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
      "prompt_ko": "[빈칸 채우기] 조건 키워드와 자리 채움 키워드를 채워 admin이면서 mute일 때 OK만 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the inner conditional keyword and no-op keyword so admin+mute prints OK.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 중첩 if - else로 아이디와 비밀번호를 차례로 검사하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Verify id_in in the outer if and pw_in in the nested if.",
      "hint_ko": "바깥 조건(id_in == \"admin\")이 거짓이면 안쪽 비밀번호 검사는 아예 실행되지 않고 바깥쪽 else로 이동합니다.",
      "hint_en": "If the outer check (id_in == \"admin\") is False, the inner password check is skipped completely and the outer else runs.",
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
      "prompt_ko": "[빈칸 채우기] 두 논리 키워드를 채워 10 이상이면서 (VIP이거나 30 이상)이면 Enter를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the logical keywords so lv >= 10 and (bool(vip) or lv >= 30) prints Enter.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 3과 5의 공배수 조건을 맨 위 if에 두어 FizzBuzz를 판별하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Place the combined 3-and-5 check first to solve FizzBuzz.",
      "hint_ko": "3과 5의 공배수는 3의 배수이자 5의 배수이므로, 두 조건을 and로 묶은 복합 조건을 가장 먼저 검사해야 합니다.",
      "hint_en": "Multiples of both 3 and 5 also match the individual divisor checks, so the combined and condition must come first.",
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
      "prompt_ko": "[빈칸 채우기] 두 빈칸을 채워 출금액이 0 이하나 잔액 초과면 넘어가고, 잔액 이하면 차감해 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the blanks so invalid amounts do nothing and valid amounts subtract from bal.",
      "hint_ko": "아무 처리 없이 넘어가는 넷째 줄에는 통과하다를 뜻하는 네 글자 키워드를, 추가 조건을 검사하는 다섯째 줄에는 else if의 네 글자 축약어를 적어보세요.",
      "hint_en": "Use the four-letter word meaning \"skip past\" for the no-op branch on line 4, and the four-letter contraction of \"else if\" on line 5.",
      "templateCode": "bal = 100\namt = int(input())\nif amt <= 0:\n    §§§§\n§§§§ amt <= bal:\n    bal -= amt\nelse:\n    pass\nprint(bal)",
      "targetCode": "bal = 100\namt = int(input())\nif amt <= 0:\n    pass\nelif amt <= bal:\n    bal -= amt\nelse:\n    pass\nprint(bal)",
      "testCases": [
        {
          "id": 1,
          "input": "-10",
          "expectedOutput": "100"
        },
        {
          "id": 2,
          "input": "35",
          "expectedOutput": "65"
        },
        {
          "id": 3,
          "input": "150",
          "expectedOutput": "100"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 음수일 때 아무 동작 없이 넘어가도록 잘못된 단어를 파이썬 예약어로 수정해보세요.",
      "prompt_en": "[Fix Bug] Replace the invalid placeholder word with the Python keyword that cleanly does nothing.",
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
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] temp가 18 이상 26 이하일 때 Good이 출력되도록 연쇄 비교 기호를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the chained comparison operators so 18 <= temp <= 26 prints Good.",
      "hint_ko": "18 >= temp >= 26은 불가능한 조건입니다. 부등호 방향을 모두 <=로 고쳐보세요.",
      "hint_en": "Reverse both >= operators to <= so it tests 18 <= temp <= 26.",
      "templateCode": "temp = int(input())\nif 18 >= temp >= 26:\n    print(\"Good\")\nelse:\n    print(\"Adjust\")",
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
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 바깥 if n > 0: 안에서 n이 100 이상인지 검사하는 중첩 if 헤더 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the 4-space indented nested header if n >= 100: inside if n > 0:.",
      "hint_ko": "4칸 들여쓰기 뒤에 if n >= 100:을 작성해보세요.",
      "hint_en": "Keep the 4-space indentation and write if n >= 100:.",
      "templateCode": "n = int(input())\nif n > 0:\n    §§§§§§§§§§§§\n        print(\"Big\")",
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
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] n이 음수일 때 아무 처리 없이 넘어가도록 빈 블록을 채우는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the 4-space indented pass statement inside if n < 0:.",
      "hint_ko": "4칸 들여쓰기 뒤에 네 글자 키워드 pass를 작성해보세요.",
      "hint_en": "Keep the 4-space indentation and write pass.",
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
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 파이썬 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] When 6 is given as input, select the exact output of the following Python code.",
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
