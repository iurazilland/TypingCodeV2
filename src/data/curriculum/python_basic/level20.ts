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
      "prompt_ko": "if - else 양방향 조건문은 조건식이 참일 때 if 블록을, 거짓일 때 else: 블록을 선택해 둘 중 하나만 실행합니다. 블록의 코드를 따라 입력해보세요. (터미널 입력: 75)",
      "prompt_en": "An if - else statement executes the if block when the condition is True, or the else: block when it is False—never both. Trace the block code. (Terminal input: 75)",
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
      "prompt_ko": "문자열 일치 여부도 같음 비교 연산자(==)와 if - else 구조로 검사해 참·거짓일 때의 출력을 나눌 수 있습니다. 블록의 코드를 따라 쳐보세요. (터미널 입력: py123)",
      "prompt_en": "You can test string equality with == in an if - else structure to branch between two messages. Trace the block code. (Terminal input: py123)",
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
      "prompt_ko": "나머지 연산자(%)를 사용한 조건식 n % 2 == 0으로 2로 나누어떨어지는 짝수와 그렇지 않은 홀수를 양방향 분기할 수 있습니다. 블록의 코드를 따라 입력해보세요. (터미널 입력: 14)",
      "prompt_en": "Using the modulo operator (%) in n % 2 == 0 lets you branch between even numbers (divisible by 2) and odd numbers. Trace the block code. (Terminal input: 14)",
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
      "prompt_ko": "if n:처럼 정수를 직접 조건으로 쓰면 0이 아닐 때 참 분기가, 0일 때 else 분기가 실행됩니다. print()의 sep 옵션과 함께 블록 코드를 따라 입력해보세요. (터미널 입력: 7)",
      "prompt_en": "Using an integer directly in if n: runs the if branch when non-zero and the else branch when 0. Trace the block code with the sep option. (Terminal input: 7)",
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
      "prompt_ko": "두 변수 x, y의 대소를 if x >= y: 조건문으로 비교해 둘 중 더 큰 값을 골라 출력할 수 있습니다. 블록의 코드를 따라 쳐보세요. (터미널 입력: 25 18)",
      "prompt_en": "Comparing two variables with if x >= y: lets you select and print the larger value in each branch. Trace the block code. (Terminal input: 25 18)",
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
