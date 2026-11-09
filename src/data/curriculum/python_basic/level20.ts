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
      "prompt_ko": "정수 score를 입력받아 60 이상이면 \"Pass\", 그렇지 않으면(else) \"Fail\"을 출력해보세요. (터미널 입력: 75)",
      "prompt_en": "Read integer score; print \"Pass\" if score >= 60, otherwise print \"Fail\". (Terminal input: 75)",
      "hint_ko": "양방향 분기에서는 조건식이 참이면 위쪽 블록만, 거짓이면 아래쪽 나머지 블록만 선택되어 둘 중 하나가 반드시 실행됩니다.",
      "hint_en": "In two-way branching, either the top block runs when the condition is true, or the fallback block runs when it is false—never both.",
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
      "prompt_ko": "넷째 줄 빈칸을 채워 나이가 19 이상이면 Adult를, 그렇지 않은 모든 경우에는 Minor를 출력해보세요. (터미널 입력: 22)",
      "prompt_en": "Fill in line 4 so ages >= 19 print Adult and all other ages print Minor. (Terminal input: 22)",
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
      "prompt_ko": "문자열 pw를 입력받아 \"py123\"과 일치하면 \"Login\", 다르면 \"Denied\"를 출력해보세요. (터미널 입력: py123)",
      "prompt_en": "Read string pw; print \"Login\" if pw == \"py123\", otherwise print \"Denied\". (Terminal input: py123)",
      "hint_ko": "입력받은 비밀번호 문자열이 기준 문자열과 일치하는지 등호 두 개로 비교하여 참일 때와 거짓일 때의 출력을 나누어 배치해보세요.",
      "hint_en": "Compare the input password against the target string for equality, placing each message in its matching branch.",
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
      "prompt_ko": "두 빈칸을 채워 입력 문자열이 \"yes\"와 같으면 OK를, 아니면 NO를 ans에 담아 출력해보세요. (터미널 입력: yes)",
      "prompt_en": "Fill in the equality operator and fallback keyword to store OK or NO in ans and print it. (Terminal input: yes)",
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
      "prompt_ko": "정수 n을 입력받아 n % 2 == 0이면 \"Even\", 아니면 \"Odd\"를 출력하는 홀짝 판별기를 완성해보세요. (터미널 입력: 14)",
      "prompt_en": "Read integer n and print \"Even\" if n % 2 == 0, or \"Odd\" otherwise. (Terminal input: 14)",
      "hint_ko": "정수를 2로 나눈 나머지가 0과 같으면 짝수 분기로, 그렇지 않으면 홀수 분기로 나뉘어 출력됩니다.",
      "hint_en": "Check whether the remainder after dividing by 2 equals zero to separate even numbers from odd numbers.",
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
      "prompt_ko": "빈칸에 초과 비교 기호와 문자열 반복 기호를 채워 체력이 0보다 크면 RUNRUN, 아니면 ENDEND를 출력해보세요. (터미널 입력: 10)",
      "prompt_en": "Fill in the greater-than and string-repetition operators to print RUNRUN or ENDEND. (Terminal input: 10)",
      "hint_ko": "조건식에는 왼쪽이 더 큼(초과)을 나타내는 부등호를 넣고, 마지막 줄에는 문자열을 지정 횟수만큼 반복하는 별표 기호를 넣어보세요.",
      "hint_en": "Place the greater-than angle bracket in the condition, and use the asterisk operator on the last line to repeat the string twice.",
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
      "prompt_ko": "정수 n을 입력받아 if n:이 참이면 sep=\":\"으로 Value와 n을, 거짓이면 Empty와 0을 출력해보세요. (출력 예: Value:7) (터미널 입력: 7)",
      "prompt_en": "Read integer n; if truthy print Value and n with sep=\":\", else print Empty and 0 with sep=\":\". (Terminal input: 7)",
      "hint_ko": "입력 정수가 0이 아니면 참 분기가, 0이면 나머지 분기가 선택됩니다. 두 출력 블록 모두 구분자 옵션을 콜론으로 맞춰주세요.",
      "hint_en": "Non-zero integers take the first branch while 0 takes the fallback branch; set the colon separator option on both print blocks.",
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
      "prompt_ko": "두 빈칸에 문자열 결합 기호를 채워 vip가 참이면 VIP:이름, 거짓이면 USER:이름으로 출력해보세요. (출력 예: VIP:Kim) (터미널 입력: 첫째 줄 Kim, 둘째 줄 1)",
      "prompt_en": "Fill in the string concatenation operators to format VIP:name or USER:name. (Terminal input: line 1 Kim, line 2 1)",
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
      "prompt_ko": "공백으로 입력된 두 수를 정수 x, y에 담고 둘 중 큰 값(같으면 x)을 sep=\"=\"와 함께 출력해보세요. (출력 예: Max=25) (터미널 입력: 25 18)",
      "prompt_en": "Split two integers into x, y and print the larger value formatted as Max=25 using sep=\"=\". (Terminal input: 25 18)",
      "hint_ko": "두 정수의 크기를 비교해 첫째 값이 크거나 같을 때와 그렇지 않을 때 각각 더 큰 변수를 골라 구분자 옵션과 함께 출력해보세요.",
      "hint_en": "Compare the two integers and print the larger variable in each branch using the equals-sign separator option.",
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
      "prompt_ko": "빈칸에 줄 끝 옵션 이름과 나머지 기호를 채워 한 줄에 Result:EVEN 또는 Result:ODD를 출력해보세요. (터미널 입력: 8)",
      "prompt_en": "Fill in the line-ending option name and modulo operator to print Result:EVEN or Result:ODD. (Terminal input: 8)",
      "hint_ko": "첫 출력이 줄바꿈 대신 콜론으로 끝나도록 영어로 끝을 뜻하는 세 글자 옵션을 적고, 아래 조건식에는 나머지를 구하는 퍼센트 기호를 넣으세요.",
      "hint_en": "Set the three-letter print option meaning \"finish\" on line 2 so no newline is added, and use the percent operator on line 3 for the remainder.",
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
      "prompt_ko": "나머지 분기 키워드 뒤에 조건식을 적어 발생한 문법 오류를 수정해 Plus 또는 Minus를 출력해보세요. (터미널 입력: -4)",
      "prompt_en": "Fix the SyntaxError caused by placing a condition after the fallback keyword. (Terminal input: -4)",
      "hint_ko": "나머지 모든 경우를 받아주는 분기 키워드 뒤에는 별도의 비교 조건식을 적을 수 없으며 곧바로 콜론만 와야 합니다.",
      "hint_en": "The fallback branch automatically covers every remaining case, so writing a condition after it causes a syntax error—leave only the keyword and colon.",
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
      "prompt_ko": "3의 배수 판별 코드의 else: 아래에 한 줄을 추가하여 배수가 아닐 때 No를 출력해보세요. (터미널 입력: 10)",
      "prompt_en": "Add one indented line under else: to print No when n is not a multiple of 3. (Terminal input: 10)",
      "hint_ko": "위쪽 분기의 출력문 형식을 참고하여, 나머지 분기 안쪽에서도 4칸 들여쓰기를 맞춰 지정된 문자열을 출력해보세요.",
      "hint_en": "Following the print style in the upper branch, keep the 4-space indentation under the fallback header and print the required text.",
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
