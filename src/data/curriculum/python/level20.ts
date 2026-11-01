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
      "prompt_ko": "정수 score를 입력받아 60 이상이면 \"Pass\", 그렇지 않으면(else) \"Fail\"을 출력해보세요.",
      "prompt_en": "Read integer score; print \"Pass\" if score >= 60, otherwise print \"Fail\".",
      "hint_ko": "if 조건이 참이면 위쪽 분기가, 거짓이면 else 아래쪽 분기가 둘 중 하나만 실행됩니다.",
      "hint_en": "The if branch runs when True, and the else branch runs when False.",
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
      "prompt_ko": "넷째 줄 빈칸을 채워 나이가 19 이상이면 Adult를, 그렇지 않은 모든 경우에는 Minor를 출력해보세요.",
      "prompt_en": "Fill in line 4 so ages >= 19 print Adult and all other ages print Minor.",
      "hint_ko": "조건이 거짓일 때의 분기는 별도 조건식 없이 키워드와 콜론을 붙여 else:로 작성합니다.",
      "hint_en": "Write else: (with no condition before the colon) on line 4.",
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
      "prompt_ko": "문자열 pw를 입력받아 \"py123\"과 일치하면 \"Login\", 다르면 \"Denied\"를 출력해보세요.",
      "prompt_en": "Read string pw; print \"Login\" if pw == \"py123\", otherwise print \"Denied\".",
      "hint_ko": "pw = input()으로 문자열을 그대로 받고 if pw == \"py123\": 조건으로 분기하세요.",
      "hint_en": "Compare pw == \"py123\" in the if header and put \"Denied\" under else:.",
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
      "prompt_ko": "두 빈칸을 채워 입력 문자열이 \"yes\"와 같으면 OK를, 아니면 NO를 ans에 담아 출력해보세요.",
      "prompt_en": "Fill in the equality operator and fallback keyword to store OK or NO in ans and print it.",
      "hint_ko": "같음 비교에는 ==를, 나머지 경우 분기에는 else를 사용합니다.",
      "hint_en": "Enter == on line 2 and else on line 4.",
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
      "prompt_ko": "정수 n을 입력받아 n % 2 == 0이면 \"Even\", 아니면 \"Odd\"를 출력하는 홀짝 판별기를 완성해보세요.",
      "prompt_en": "Read integer n and print \"Even\" if n % 2 == 0, or \"Odd\" otherwise.",
      "hint_ko": "2로 나눈 나머지가 0이면 짝수(\"Even\"), 0이 아니면 홀수(\"Odd\")가 출력됩니다.",
      "hint_en": "Test n % 2 == 0 in if for \"Even\" and use else for \"Odd\".",
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
      "prompt_ko": "빈칸에 초과 비교 기호와 문자열 반복 기호를 채워 체력이 0보다 크면 RUNRUN, 아니면 ENDEND를 출력해보세요.",
      "prompt_en": "Fill in the greater-than and string-repetition operators to print RUNRUN or ENDEND.",
      "hint_ko": "0보다 큰지 비교할 때는 >를, 문자열을 2번 반복해 이어 붙일 때는 *를 사용합니다.",
      "hint_en": "Use > in the condition and * in tag * 2.",
      "templateCode": "hp = int(input())\nif hp § 0:\n    tag = \"RUN\"\nelse:\n    tag = \"END\"\nprint(tag § 2)",
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
      "prompt_ko": "정수 n을 입력받아 if n:이 참이면 sep=\":\"으로 Value와 n을, 거짓이면 Empty와 0을 출력해보세요. (출력 예: Value:7)",
      "prompt_en": "Read integer n; if truthy print Value and n with sep=\":\", else print Empty and 0 with sep=\":\".",
      "hint_ko": "n이 0이 아니면 Value:n이 출력되고, 0이면 else로 분기해 Empty:0이 출력됩니다.",
      "hint_en": "Non-zero n prints Value:n; 0 branches to else and prints Empty:0.",
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
      "prompt_ko": "두 빈칸에 문자열 결합 기호를 채워 vip가 참이면 VIP:이름, 거짓이면 USER:이름으로 출력해보세요. (출력 예: VIP:Kim)",
      "prompt_en": "Fill in the string concatenation operators to format VIP:name or USER:name.",
      "hint_ko": "두 문자열을 공백 없이 바로 이어 붙일 때는 덧셈(+) 연산자를 사용합니다.",
      "hint_en": "Use + in both branches to concatenate the prefix and name.",
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
      "prompt_ko": "공백으로 입력된 두 수를 정수 x, y에 담고 더 크거나 같은 값을 sep=\"=\"와 함께 출력해보세요. (출력 예: Max=25)",
      "prompt_en": "Split two integers into x, y and print the larger value formatted as Max=25 using sep=\"=\".",
      "hint_ko": "x >= y이면 print(\"Max\", x, sep=\"=\")를, 아니면 print(\"Max\", y, sep=\"=\")를 실행하세요.",
      "hint_en": "Branch on x >= y and pass \"Max\", the chosen variable, and sep=\"=\" to print().",
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
      "prompt_ko": "빈칸에 줄 끝 옵션 이름과 나머지 기호를 채워 한 줄에 Result:EVEN 또는 Result:ODD를 출력해보세요.",
      "prompt_en": "Fill in the line-ending option name and modulo operator to print Result:EVEN or Result:ODD.",
      "hint_ko": "print()가 줄바꿈 대신 콜론을 붙이도록 end=\":\"를 쓰고, 짝수 판별에는 %를 사용합니다.",
      "hint_en": "Enter end in print(\"Result\", end=\":\") and % in n % 2 == 0.",
      "templateCode": "n = int(input())\nprint(\"Result\", §§§=\":\")\nif n § 2 == 0:\n    print(\"EVEN\")\nelse:\n    print(\"ODD\")",
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
      "prompt_ko": "나머지 분기 키워드 뒤에 조건식을 적어 발생한 문법 오류를 수정해 Plus 또는 Minus를 출력해보세요.",
      "prompt_en": "Fix the SyntaxError caused by placing a condition after the fallback keyword.",
      "hint_ko": "else는 앞선 조건이 거짓인 모든 경우를 처리하므로 조건식 없이 곧바로 else:만 적어야 합니다.",
      "hint_en": "Remove n < 0 after else so line 4 reads simply else:.",
      "templateCode": "n = int(input())\nif n >= 0:\n    print(\"Plus\")\nelse n < 0:\n    print(\"Minus\")",
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
      "kind": "one_line",
      "prompt_ko": "3의 배수 판별 코드의 else: 아래에 한 줄을 추가하여 배수가 아닐 때 No를 출력해보세요.",
      "prompt_en": "Add one indented line under else: to print No when n is not a multiple of 3.",
      "hint_ko": "마지막 줄에서 공백 4칸을 들여쓴 뒤 print(\"No\")를 작성하세요.",
      "hint_en": "Indent by 4 spaces on line 5 and write print(\"No\").",
      "templateCode": "n = int(input())\nif n % 3 == 0:\n    print(\"3x\")\nelse:\n    §§§§§§§§§§§",
      "targetCode": "n = int(input())\nif n % 3 == 0:\n    print(\"3x\")\nelse:\n    print(\"No\")",
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
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "입력값으로 7이 주어질 때, 다음 파이썬 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "When 7 is given as input, select the exact output of the following Python code.",
      "hint_ko": "\"*\" * 2로 \"[**] \"가 줄바꿈 없이 먼저 출력되고, 7은 홀수라 else 분기의 O-7이 같은 줄 뒤에 이어집니다.",
      "hint_en": "end=\" \" keeps \"[**] \" on the same line, and 7 % 2 != 0 prints O-7 after the space.",
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
