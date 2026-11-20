import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_89: PracticeRound = {
  "id": "py-basic-r89",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 89,
  "title_ko": "89레벨: 한 줄 조건 표현식 (삼항 연산자 참값 if 조건 else 거짓값)",
  "title_en": "Level 89: Inline Conditional Expressions (Ternary Operator)",
  "description_ko": "if - else 조건 분기를 한 줄의 값 표현식(참값 if 조건 else 거짓값)으로 간결하게 작성해 대입·반환·출력을 처리합니다.",
  "description_en": "Write concise one-line conditional expressions (true_val if cond else false_val) in assignments, returns, and f-strings.",
  "totalQuestions": 15,
  "unlockedBlocks": [
    "comment",
    "print",
    "variable",
    "input",
    "type",
    "if",
    "for_range",
    "range",
    "for_in",
    "while",
    "break",
    "continue",
    "list",
    "tuple",
    "dict",
    "set",
    "iter",
    "method",
    "sorted",
    "def",
    "return",
    "class",
    "try"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 한 줄 조건 표현식(\"Even\" if n % 2 == 0 else \"Odd\")으로 짝수·홀수 문자열을 변수에 대입해 출력해보세요.",
      "prompt_en": "[Block] Use an inline conditional expression (\"Even\" if n % 2 == 0 else \"Odd\") to assign res and print it.",
      "hint_ko": "참일 때의 값을 맨 앞에 적고, 그 뒤에 if 조건식 else 거짓값을 콜론(:) 없이 한 줄로 이어 씁니다.",
      "hint_en": "Write the true value first, followed by if condition else false_value on a single line without colons.",
      "targetCode": "n = int(input())\nres = \"Even\" if n % 2 == 0 else \"Odd\"\nprint(res)",
      "testCases": [
        {
          "id": 1,
          "input": "8",
          "expectedOutput": "Even"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 점수가 60점 이상이면 \"Pass\", 아니면 \"Fail\"이 대입되도록 거짓 분기 키워드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the fallback keyword in the ternary expression so scores under 60 become \"Fail\".",
      "hint_ko": "한 줄 조건 표현식에서 조건이 거짓일 때 선택할 값 앞에 적는 키워드를 입력하세요.",
      "hint_en": "Write the keyword placed before the fallback value in a ternary expression.",
      "templateCode": "score = int(input())\nmsg = \"Pass\" if score >= 60 §§§§§ \"Fail\"\nprint(msg)",
      "targetCode": "score = int(input())\nmsg = \"Pass\" if score >= 60 else \"Fail\"\nprint(msg)",
      "testCases": [
        {
          "id": 1,
          "input": "75",
          "expectedOutput": "Pass"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 함수의 return 뒤에 a if a > b else b를 작성해 두 수 중 더 큰 값을 반환해보세요.",
      "prompt_en": "[Block] Return a if a > b else b from bigger(a, b) and print the result.",
      "hint_ko": "return 문 뒤에 삼항 표현식을 바로 적으면 4줄짜리 if-else 없이 한 줄로 조건부 반환이 완성됩니다.",
      "hint_en": "Placing a ternary expression right after return cleanly sends back the chosen value in one line.",
      "targetCode": "def bigger(a, b):\n    return a if a > b else b\nprint(bigger(10, 25), bigger(30, 15))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "25 30"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 입력 정수가 음수일 때 0으로 보정해 돌려주도록 삼항 조건 키워드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the condition keyword inside clamp_zero(x) so x is returned when x >= 0.",
      "hint_ko": "참일 때의 값(x) 바로 뒤에 붙이는 조건 키워드를 적으세요.",
      "hint_en": "Write the conditional keyword right after the true-branch value x.",
      "templateCode": "def clamp_zero(x):\n    return x §§§ x >= 0 else 0\nprint(clamp_zero(12), clamp_zero(-5))",
      "targetCode": "def clamp_zero(x):\n    return x if x >= 0 else 0\nprint(clamp_zero(12), clamp_zero(-5))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "12 0"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] f-string 중괄호 { } 안에 삼항 표현식을 넣어 온도에 따라 Hot 또는 OK를 출력해보세요.",
      "prompt_en": "[Block] Embed a ternary expression inside f-string braces { } to format temp as Hot or OK.",
      "hint_ko": "바깥 f-string이 큰따옴표(\")로 감싸져 있을 때 중괄호 안의 문자열은 작은따옴표(')를 쓰면 따옴표가 겹치지 않습니다.",
      "hint_en": "When the outer f-string uses double quotes (\"), use single quotes (') for strings inside { }.",
      "targetCode": "temp = int(input())\nprint(f\"{temp}C:{'Hot' if temp >= 30 else 'OK'}\")",
      "testCases": [
        {
          "id": 1,
          "input": "32",
          "expectedOutput": "32C:Hot"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 재고가 0보다 크면 Open, 아니면 SoldOut을 출력하도록 print() 안의 삼항 식을 완성해보세요.",
      "prompt_en": "[Fill Blank] Complete the ternary expression inside print() so it outputs \"Open\" when stock > 0.",
      "hint_ko": "거짓일 때 출력할 \"SoldOut\" 앞에 오는 분기 키워드를 적으세요.",
      "hint_en": "Use the keyword before the fallback value \"SoldOut\".",
      "templateCode": "stock = int(input())\nprint(\"Open\" if stock > 0 §§§§§ \"SoldOut\")",
      "targetCode": "stock = int(input())\nprint(\"Open\" if stock > 0 else \"SoldOut\")",
      "testCases": [
        {
          "id": 1,
          "input": "3",
          "expectedOutput": "Open"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 반복문 안에서 양수는 그대로, 음수는 0으로 바꾸는 삼항 표현식을 사용해 clean 리스트에 추가해보세요.",
      "prompt_en": "[Block] Inside a loop, append x if x > 0 else 0 to clean and print the resulting list.",
      "hint_ko": "clean.append(x if x > 0 else 0)처럼 메서드 인자 자리에 삼항 표현식을 바로 넣을 수 있습니다.",
      "hint_en": "You can pass a ternary expression directly as the argument to clean.append().",
      "targetCode": "nums = [10, -3, 5, -8]\nclean = []\nfor x in nums:\n    clean.append(x if x > 0 else 0)\nprint(clean)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 0, 5, 0]"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 리스트를 순회하며 짝수는 더하고 홀수는 빼도록 삼항 표현식의 참 분기 값을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the true-branch value in the ternary expression so even numbers add n and odd numbers add -n.",
      "hint_ko": "n이 짝수(n % 2 == 0)일 때 그대로 더할 반복 변수 이름을 if 앞에 적으세요.",
      "hint_en": "Place the loop variable n before if so even numbers are added as-is.",
      "templateCode": "nums = [10, 3, 6, 1]\ntotal = 0\nfor n in nums:\n    total += §§ if n % 2 == 0 else -n\nprint(total)",
      "targetCode": "nums = [10, 3, 6, 1]\ntotal = 0\nfor n in nums:\n    total += n if n % 2 == 0 else -n\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "12"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 회원 등급에 따라 할인율을 선택하는 삼항 표현식과 최종 결제 금액 반환문을 완성해보세요.",
      "prompt_en": "[Fill Blank] Complete the ternary keywords and result-sending statement in calc_pay.",
      "hint_ko": "참값 뒤의 조건 키워드, 거짓값 앞의 분기 키워드, 그리고 결과를 돌려주는 키워드를 차례로 확인하세요.",
      "hint_en": "Check the condition keyword, the fallback keyword, and the keyword that sends back the result.",
      "templateCode": "def calc_pay(price, grade):\n    off = 500 §§§ grade == \"VIP\" §§§§§ 100\n    §§§§§§§ price - off\nprint(calc_pay(3000, input()))",
      "targetCode": "def calc_pay(price, grade):\n    off = 500 if grade == \"VIP\" else 100\n    return price - off\nprint(calc_pay(3000, input()))",
      "testCases": [
        {
          "id": 1,
          "input": "VIP",
          "expectedOutput": "2500"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 한 줄 조건 표현식 안에 일반 조건문처럼 콜론(:)을 잘못 넣어서 발생한 문법 오류를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Remove the invalid colons inside the inline conditional expression to fix the SyntaxError.",
      "hint_ko": "한 줄로 쓰는 삼항 조건 표현식에서는 조건식 뒤나 else 뒤에 콜론(:)을 붙이지 않습니다.",
      "hint_en": "Inline ternary expressions never use colons after the condition or after else.",
      "templateCode": "n = 15\ntag = \"Big\" if n >= 10: else: \"Small\"\nprint(tag)",
      "targetCode": "n = 15\ntag = \"Big\" if n >= 10 else \"Small\"\nprint(tag)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Big"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 한 줄 조건 표현식에서 if 조건절을 맨 앞에 적어서 발생한 문법 오류를 올바른 순서로 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the SyntaxError by placing the true-branch value \"Adult\" before the if condition.",
      "hint_ko": "파이썬 삼항 표현식은 (if 조건 참값 else 거짓값)이 아니라 (참값 if 조건 else 거짓값) 순서로 적어야 합니다.",
      "hint_en": "In Python, the true-branch value comes before the if condition: value_if_true if cond else value_if_false.",
      "templateCode": "age = 20\nlabel = if age >= 19 \"Adult\" else \"Minor\"\nprint(label)",
      "targetCode": "age = 20\nlabel = \"Adult\" if age >= 19 else \"Minor\"\nprint(label)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Adult"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] n이 0보다 크면 \"Pos\", 아니면 \"ZeroOrNeg\"를 변수 sign에 대입하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the line that assigns \"Pos\" if n > 0 else \"ZeroOrNeg\" to sign.",
      "hint_ko": "sign = \"Pos\" if n > 0 else \"ZeroOrNeg\" 형태로 삼항 표현식을 작성하세요.",
      "hint_en": "Write sign = \"Pos\" if n > 0 else \"ZeroOrNeg\".",
      "templateCode": "n = int(input())\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(sign)",
      "targetCode": "n = int(input())\nsign = \"Pos\" if n > 0 else \"ZeroOrNeg\"\nprint(sign)",
      "testCases": [
        {
          "id": 1,
          "input": "5",
          "expectedOutput": "Pos"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 함수 안에서 a와 b 중 더 작은 값을 삼항 표현식(a if a < b else b)으로 반환하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the indented line that returns a if a < b else b.",
      "hint_ko": "들여쓰기 4칸 위치에서 return 뒤에 삼항 표현식을 이어 적으세요.",
      "hint_en": "Write return a if a < b else b indented inside the function.",
      "templateCode": "def smaller(a, b):\n    §§§§§§§§§§§§§§§§§§§§§§§§§\nprint(smaller(8, 3), smaller(4, 9))",
      "targetCode": "def smaller(a, b):\n    return a if a < b else b\nprint(smaller(8, 3), smaller(4, 9))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 4"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 수식 안에 포함된 삼항 조건 표현식 두 개의 계산 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the output of the arithmetic expressions containing inline conditionals.",
      "hint_ko": "x = 10일 때 첫 식은 10 > 5가 참이므로 100 + 20이 되고, 둘째 식은 10 % 3 == 0이 거짓이므로 5가 선택됩니다.",
      "hint_en": "Evaluate the ternary part first in each line: 20 is chosen on line 2, and 5 is chosen on line 3.",
      "targetCode": "x = 10\na = 100 + (20 if x > 5 else 0)\nb = 2 * (10 if x % 3 == 0 else 5)\nprint(a, b)",
      "choices": [
        "120 10",
        "120 20",
        "100 10",
        "20 10"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "120 10"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 리스트 순회와 딕셔너리 안전 조회, 삼항 표현식이 결합된 코드의 출력 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the output of the loop combining .get() and a ternary expression.",
      "hint_ko": "60점 이상인 과목은 \"P\", 미만(또는 없는 과목 0점)은 \"F\"가 리스트에 담기는 과정을 추적해보세요.",
      "hint_en": "Look up each subject's score with default 0, then map >= 60 to \"P\" and < 60 to \"F\".",
      "targetCode": "scores = {\"Kor\": 85, \"Math\": 50}\nres = []\nfor sub in [\"Kor\", \"Math\", \"Eng\"]:\n    pt = scores.get(sub, 0)\n    res.append(\"P\" if pt >= 60 else \"F\")\nprint(res)",
      "choices": [
        "['P', 'F', 'F']",
        "['P', 'P', 'F']",
        "['P', 'F', 'P']",
        "['P', 'F']"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['P', 'F', 'F']"
        }
      ]
    }
  ]
};
