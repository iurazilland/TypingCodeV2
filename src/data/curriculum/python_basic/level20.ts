import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_20: PracticeRound = {
  "id": "py-basic-r20",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 20,
  "title_ko": "20레벨: if - else 양방향 조건 분기",
  "title_en": "Level 20: if - else Two-Way Branching",
  "description_ko": "조건의 참·거짓에 따라 두 갈래 중 하나를 반드시 실행하는 if - else 양방향 분기를 익힙니다.",
  "description_en": "Use if - else two-way branching to execute one of two mutually exclusive paths.",
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
      "prompt_ko": "[블록 조립] score가 60 이상이면 \"Pass\", 아니면 \"Fail\"을 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the blocks to print \"Pass\" if score >= 60, else \"Fail\".",
      "hint_ko": "else 뒤에는 별도의 조건식을 적지 않고 바로 콜론(:)을 붙여 나머지 모든 경우를 처리합니다.",
      "hint_en": "Do not write a condition after else; follow it directly with a colon (:) to handle all remaining cases.",
      "targetCode": "score = int(input())\nif score >= 60:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")",
      "testCases": [
        {
          "id": 1,
          "input": "75",
          "expectedOutput": "Pass"
        },
        {
          "id": 2,
          "input": "45",
          "expectedOutput": "Fail"
        },
        {
          "id": 3,
          "input": "60",
          "expectedOutput": "Pass"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 넷째 줄 빈칸을 채워 19세 이상이면 Adult, 아니면 Minor를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in line 4 so ages >= 19 print Adult and all other ages print Minor.",
      "hint_ko": "앞선 조건이 거짓인 모든 경우를 처리할 때는 영어로 그밖에를 뜻하는 네 글자 키워드 바로 뒤에 조건식 없이 콜론을 붙입니다.",
      "hint_en": "For the fallback branch, write the four-letter English word meaning \"otherwise\" followed immediately by a colon with no condition.",
      "templateCode": "age = int(input())\nif age >= 19:\n    print(\"Adult\")\n§§§§§\n    print(\"Minor\")",
      "targetCode": "age = int(input())\nif age >= 19:\n    print(\"Adult\")\nelse:\n    print(\"Minor\")",
      "testCases": [
        {
          "id": 1,
          "input": "22",
          "expectedOutput": "Adult"
        },
        {
          "id": 2,
          "input": "16",
          "expectedOutput": "Minor"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 비밀번호가 \"py123\"과 같으면 \"Login\", 아니면 \"Denied\"를 출력해보세요.",
      "prompt_en": "[Block] Print \"Login\" if pw equals \"py123\", else print \"Denied\".",
      "hint_ko": "대입 연산자(=)가 아닌 비교 연산자(==)로 두 문자열이 정확히 일치하는지 판별합니다.",
      "hint_en": "Use the equality operator (==) rather than assignment (=) to check if the two strings match.",
      "targetCode": "pw = input()\nif pw == \"py123\":\n    print(\"Login\")\nelse:\n    print(\"Denied\")",
      "testCases": [
        {
          "id": 1,
          "input": "py123",
          "expectedOutput": "Login"
        },
        {
          "id": 2,
          "input": "0000",
          "expectedOutput": "Denied"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 두 빈칸을 채워 입력이 \"yes\"면 OK, 아니면 NO를 ans에 담아 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the equality operator and else keyword to store OK or NO in ans.",
      "hint_ko": "둘째 줄에는 두 문자열이 같은지 확인하는 등호 두 개 기호를, 넷째 줄에는 그밖에를 뜻하는 네 글자 분기 키워드를 채워보세요.",
      "hint_en": "Use double equals to test equality on line 2, and the four-letter fallback keyword meaning \"otherwise\" on line 4.",
      "templateCode": "text = input()\nif text §§ \"yes\":\n    ans = \"OK\"\n§§§§:\n    ans = \"NO\"\nprint(ans)",
      "targetCode": "text = input()\nif text == \"yes\":\n    ans = \"OK\"\nelse:\n    ans = \"NO\"\nprint(ans)",
      "testCases": [
        {
          "id": 1,
          "input": "yes",
          "expectedOutput": "OK"
        },
        {
          "id": 2,
          "input": "no",
          "expectedOutput": "NO"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] n % 2 == 0 조건으로 짝수(\"Even\")와 홀수(\"Odd\")를 분기하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Branch between \"Even\" and \"Odd\" using n % 2 == 0.",
      "hint_ko": "2로 나눈 나머지가 0이면 if 블록이, 1이면 else 블록이 실행됩니다.",
      "hint_en": "When the remainder divided by 2 is 0, the if branch runs; when it is 1, the else branch runs.",
      "targetCode": "n = int(input())\nif n % 2 == 0:\n    print(\"Even\")\nelse:\n    print(\"Odd\")",
      "testCases": [
        {
          "id": 1,
          "input": "14",
          "expectedOutput": "Even"
        },
        {
          "id": 2,
          "input": "9",
          "expectedOutput": "Odd"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 초과 비교 기호와 분기 키워드를 채워 체력이 0보다 크면 RUNRUN, 아니면 ENDEND를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the greater-than operator and else keyword to print RUNRUN or ENDEND.",
      "hint_ko": "조건식에는 왼쪽이 더 큼(초과)을 나타내는 부등호를 넣고, 넷째 줄에는 나머지 분기 키워드 else를 넣어보세요.",
      "hint_en": "Place the greater-than angle bracket in the condition, and write the fallback keyword else on line 4.",
      "templateCode": "hp = int(input())\nif hp § 0:\n    tag = \"RUN\"\n§§§§:\n    tag = \"END\"\nprint(tag * 2)",
      "targetCode": "hp = int(input())\nif hp > 0:\n    tag = \"RUN\"\nelse:\n    tag = \"END\"\nprint(tag * 2)",
      "testCases": [
        {
          "id": 1,
          "input": "10",
          "expectedOutput": "RUNRUN"
        },
        {
          "id": 2,
          "input": "0",
          "expectedOutput": "ENDEND"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] if n: 조건으로 0이 아닐 때와 0일 때를 분기해 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Branch on if n: to print Value:n when non-zero or Empty:0 when 0.",
      "hint_ko": "sep=\":\" 옵션은 쉼표로 나열된 두 출력값 사이에 공백 대신 콜론(:)을 넣어 이어줍니다.",
      "hint_en": "The sep=\":\" option joins the two comma-separated values with a colon (:) instead of a space.",
      "targetCode": "n = int(input())\nif n:\n    print(\"Value\", n, sep=\":\")\nelse:\n    print(\"Empty\", 0, sep=\":\")",
      "testCases": [
        {
          "id": 1,
          "input": "7",
          "expectedOutput": "Value:7"
        },
        {
          "id": 2,
          "input": "0",
          "expectedOutput": "Empty:0"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 두 빈칸에 문자열 결합 기호를 채워 VIP:이름 또는 USER:이름을 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the string concatenation operators to format VIP:name or USER:name.",
      "hint_ko": "두 분기 모두 접두사 문자열과 이름 문자열을 공백 없이 하나로 이어붙일 수 있도록 덧셈 기호를 사용해보세요.",
      "hint_en": "Use the plus operator in both branches to concatenate the prefix string directly onto the name variable.",
      "templateCode": "name = input()\nvip = int(input())\nif vip:\n    msg = \"VIP:\" § name\nelse:\n    msg = \"USER:\" § name\nprint(msg)",
      "targetCode": "name = input()\nvip = int(input())\nif vip:\n    msg = \"VIP:\" + name\nelse:\n    msg = \"USER:\" + name\nprint(msg)",
      "testCases": [
        {
          "id": 1,
          "input": "Kim\n1",
          "expectedOutput": "VIP:Kim"
        },
        {
          "id": 2,
          "input": "Lee\n0",
          "expectedOutput": "USER:Lee"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 두 정수 x, y 중 더 큰 값을 골라 Max=값 형태로 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Compare x and y with if x >= y: to print the larger value.",
      "hint_ko": "x가 y 이상이면 if 블록에서 x를 출력하고, 그렇지 않으면(x < y) else 블록에서 y를 출력합니다.",
      "hint_en": "If x is greater than or equal to y, the if branch prints x; otherwise (x < y), the else branch prints y.",
      "targetCode": "a, b = input().split()\nx = int(a)\ny = int(b)\nif x >= y:\n    print(\"Max\", x, sep=\"=\")\nelse:\n    print(\"Max\", y, sep=\"=\")",
      "testCases": [
        {
          "id": 1,
          "input": "25 18",
          "expectedOutput": "Max=25"
        },
        {
          "id": 2,
          "input": "10 42",
          "expectedOutput": "Max=42"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 나머지 기호와 분기 키워드를 채워 Result:EVEN 또는 Result:ODD를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the modulo operator and else keyword to print Result:EVEN or Result:ODD.",
      "hint_ko": "셋째 줄에는 나머지를 구하는 퍼센트(%) 기호를, 다섯째 줄에는 그밖에를 뜻하는 네 글자 분기 키워드 else를 넣으세요.",
      "hint_en": "Use the percent operator (%) on line 3 for the remainder, and write else on line 5.",
      "templateCode": "n = int(input())\nprint(\"Result\", end=\":\")\nif n § 2 == 0:\n    print(\"EVEN\")\n§§§§:\n    print(\"ODD\")",
      "targetCode": "n = int(input())\nprint(\"Result\", end=\":\")\nif n % 2 == 0:\n    print(\"EVEN\")\nelse:\n    print(\"ODD\")",
      "testCases": [
        {
          "id": 1,
          "input": "8",
          "expectedOutput": "Result:EVEN"
        },
        {
          "id": 2,
          "input": "5",
          "expectedOutput": "Result:ODD"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] n이 0 이상일 때 Plus, 음수일 때 Minus가 출력되도록 비교 연산자를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the comparison operator so n >= 0 prints Plus and negative numbers print Minus.",
      "hint_ko": "현재 조건식이 n <= 0으로 되어 있어 음수에서 Plus가 출력됩니다. n >= 0으로 부등호 방향을 고쳐보세요.",
      "hint_en": "Change the condition from n <= 0 to n >= 0 so non-negative numbers print Plus.",
      "templateCode": "n = int(input())\nif n <= 0:\n    print(\"Plus\")\nelse:\n    print(\"Minus\")",
      "targetCode": "n = int(input())\nif n >= 0:\n    print(\"Plus\")\nelse:\n    print(\"Minus\")",
      "testCases": [
        {
          "id": 1,
          "input": "-4",
          "expectedOutput": "Minus"
        },
        {
          "id": 2,
          "input": "7",
          "expectedOutput": "Plus"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 짝수일 때 Even, 홀수일 때 Odd가 출력되도록 나머지 비교값을 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the remainder value in the if condition so even numbers print Even.",
      "hint_ko": "2로 나눈 나머지가 0일 때가 짝수입니다. n % 2 == 1을 n % 2 == 0으로 고쳐보세요.",
      "hint_en": "Even numbers have a remainder of 0 when divided by 2; change 1 to 0.",
      "templateCode": "n = int(input())\nif n % 2 == 1:\n    print(\"Even\")\nelse:\n    print(\"Odd\")",
      "targetCode": "n = int(input())\nif n % 2 == 0:\n    print(\"Even\")\nelse:\n    print(\"Odd\")",
      "testCases": [
        {
          "id": 1,
          "input": "14",
          "expectedOutput": "Even"
        },
        {
          "id": 2,
          "input": "9",
          "expectedOutput": "Odd"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 3의 배수가 아닐 때 else: 블록 안에서 변수 ans에 \"No\"를 대입하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the indented line under else: that assigns \"No\" to ans.",
      "hint_ko": "4칸 들여쓰기 뒤에 ans = \"No\"를 작성해 배수가 아닐 때의 문자열을 저장해보세요.",
      "hint_en": "Keep the 4-space indentation under else: and write ans = \"No\".",
      "templateCode": "n = int(input())\nif n % 3 == 0:\n    ans = \"3x\"\nelse:\n    §§§§§§§§§§\nprint(ans)",
      "targetCode": "n = int(input())\nif n % 3 == 0:\n    ans = \"3x\"\nelse:\n    ans = \"No\"\nprint(ans)",
      "testCases": [
        {
          "id": 1,
          "input": "10",
          "expectedOutput": "No"
        },
        {
          "id": 2,
          "input": "12",
          "expectedOutput": "3x"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] score가 60 이상인지 검사하는 if 조건문 헤더 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the if condition header testing whether score >= 60.",
      "hint_ko": "if score >= 60: 형태로 조건문 키워드, 비교식, 콜론(:)을 한 줄로 작성해보세요.",
      "hint_en": "Write if score >= 60: with the trailing colon on line 2.",
      "templateCode": "score = int(input())\n§§§§§§§§§§§§§§§\n    print(\"Pass\")\nelse:\n    print(\"Fail\")",
      "targetCode": "score = int(input())\nif score >= 60:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")",
      "testCases": [
        {
          "id": 1,
          "input": "75",
          "expectedOutput": "Pass"
        },
        {
          "id": 2,
          "input": "50",
          "expectedOutput": "Fail"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 파이썬 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] When 7 is given as input, select the exact output of the following Python code.",
      "hint_ko": "둘째 줄의 문자열 반복 횟수와 줄 끝 옵션(공백 유지)을 먼저 확인한 뒤, 입력값 7이 홀짝 분기 중 어디로 가서 어떤 구분자로 출력되는지 이어보세요.",
      "hint_en": "Check the string repetition and trailing-space option on line 2 first, then see which branch runs for 7 and how its items are separated.",
      "targetCode": "n = int(input())\nprint(\"[\" + \"*\" * 2 + \"]\", end=\" \")\nif n % 2 == 0:\n    print(\"E\", n, sep=\"-\")\nelse:\n    print(\"O\", n, sep=\"-\")",
      "choices": [
        "[**] E-7",
        "[**] O-7",
        "[*] O-7",
        "[**]\nO-7"
      ],
      "correctChoiceIndex": 1,
      "testCases": [
        {
          "id": 1,
          "input": "7",
          "expectedOutput": "[**] O-7"
        }
      ]
    }
  ]
};
