import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_74: PracticeRound = {
  "id": "py-basic-r74",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 74,
  "title_ko": "74레벨: 한 줄 조건 표현식 (삼항 연산자 a if 조건 else b)",
  "title_en": "Level 74: Inline Conditional Expressions (Ternary)",
  "description_ko": "4줄짜리 if-else 분기를 한 줄의 값 표현식(참값 if 조건 else 거짓값)으로 간결하게 작성하고 함수·f-string·반복문에 활용합니다.",
  "description_en": "Write concise inline conditional expressions (a if cond else b) inside assignments, f-strings, functions, and loops.",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "method",
    "type",
    "math",
    "if",
    "for_in",
    "while",
    "def"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "한 줄 조건 표현식(참값 if 조건 else 거짓값)은 조건의 참·거짓에 따라 두 값 중 하나를 한 줄로 선택해 대입합니다. (터미널 입력: 75)",
      "prompt_en": "An inline conditional expression (true_val if cond else false_val) evaluates the condition and selects between two values in a single line. (Terminal input: 75)",
      "hint_ko": "참일 때의 값을 맨 앞에 적고, 그 뒤에 if 조건과 else 거짓값을 콜론(:) 없이 순서대로 이어 씁니다.",
      "hint_en": "Place the true-branch value first, followed by if condition and else false_val without any colons (:).",
      "targetCode": "score = int(input())\nlabel = \"Pass\" if score >= 60 else \"Fail\"\nprint(label)",
      "testCases": [
        {
          "id": 1,
          "input": "75",
          "expectedOutput": "Pass"
        },
        {
          "id": 2,
          "input": "40",
          "expectedOutput": "Fail"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "입력 정수 n이 2로 나누어떨어지면 \"Even\", 아니면 \"Odd\"를 대입하도록 한 줄 조건 표현식의 두 키워드를 채워보세요. (터미널 입력: 8)",
      "prompt_en": "Fill in the two conditional keywords to assign \"Even\" when n is divisible by 2 and \"Odd\" otherwise. (Terminal input: 8)",
      "hint_ko": "참값 뒤에는 '만약 ~라면'을 뜻하는 2글자 조건 키워드를, 거짓값 앞에는 '그렇지 않으면'을 뜻하는 4글자 키워드를 적으세요.",
      "hint_en": "Put the 2-letter condition keyword meaning 'when/provided that' before the test, and the 4-letter keyword meaning 'otherwise' before the fallback.",
      "templateCode": "n = int(input())\nkind = \"Even\" §§ n % 2 == 0 §§§§ \"Odd\"\nprint(kind)",
      "targetCode": "n = int(input())\nkind = \"Even\" if n % 2 == 0 else \"Odd\"\nprint(kind)",
      "testCases": [
        {
          "id": 1,
          "input": "8",
          "expectedOutput": "Even"
        },
        {
          "id": 2,
          "input": "5",
          "expectedOutput": "Odd"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "상한값을 초과하는지 검사하는 한 줄 조건 표현식(100 if raw > 100 else raw)을 쓰면 최댓값을 제한(Clamping)하는 로직을 간결하게 작성할 수 있습니다. (터미널 입력: 135)",
      "prompt_en": "Using an inline conditional like 100 if raw > 100 else raw concisely clamps a numeric value at an upper limit. (Terminal input: 135)",
      "hint_ko": "조건이 참이면 상한값 100이 선택되고, 거짓이면 입력된 원래 변수 값이 그대로 유지됩니다.",
      "hint_en": "When the condition holds, the cap 100 is chosen; otherwise the original variable value is kept.",
      "targetCode": "raw = int(input())\nhp = 100 if raw > 100 else raw\nprint(hp)",
      "testCases": [
        {
          "id": 1,
          "input": "135",
          "expectedOutput": "100"
        },
        {
          "id": 2,
          "input": "80",
          "expectedOutput": "80"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "입력 정수가 0 이상이면 그대로 두고 음수이면 0으로 보정해 출력하도록 빈칸에 키워드를 채워보세요. (터미널 입력: -15)",
      "prompt_en": "Fill in the fallback keyword so negative inputs are clamped to 0. (Terminal input: -15)",
      "hint_ko": "조건이 거짓일 때 대신 선택할 기본값 0 앞에는 '그렇지 않으면'을 뜻하는 4글자 분기 키워드를 적습니다.",
      "hint_en": "Before the fallback value 0, enter the 4-letter conditional keyword meaning 'otherwise'.",
      "templateCode": "val = int(input())\nsafe = val if val >= 0 §§§§ 0\nprint(safe)",
      "targetCode": "val = int(input())\nsafe = val if val >= 0 else 0\nprint(safe)",
      "testCases": [
        {
          "id": 1,
          "input": "-15",
          "expectedOutput": "0"
        },
        {
          "id": 2,
          "input": "25",
          "expectedOutput": "25"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "f-string의 중괄호 { } 안에도 한 줄 조건 표현식을 직접 넣어 조건에 따라 다른 문자열이 포맷팅되도록 만들 수 있습니다. (터미널 입력: 33)",
      "prompt_en": "You can embed an inline conditional expression directly inside f-string braces { } to format different labels based on a condition. (Terminal input: 33)",
      "hint_ko": "바깥 f-string이 큰따옴표(\")로 감싸져 있으므로 중괄호 안의 문자열은 작은따옴표(')로 감싸 구분합니다.",
      "hint_en": "Because the outer f-string uses double quotes (\"), wrap the string literals inside { } in single quotes (').",
      "targetCode": "temp = int(input())\nmsg = f\"{temp}C:{'Hot' if temp >= 30 else 'OK'}\"\nprint(msg)",
      "testCases": [
        {
          "id": 1,
          "input": "33",
          "expectedOutput": "33C:Hot"
        },
        {
          "id": 2,
          "input": "22",
          "expectedOutput": "22C:OK"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "아이템 개수가 3개 이상이면 Full, 아니면 Open이 되도록 f-string 안의 두 빈칸을 채워보세요. (출력 예: Bag:Full) (터미널 입력: a b c)",
      "prompt_en": "Fill in the two conditional keywords inside the f-string to format Bag:Full or Bag:Open. (Terminal input: a b c)",
      "hint_ko": "f-string 중괄호 안에서도 동일하게 참값 뒤에 2글자 조건 키워드를, 대체값 앞에 4글자 '그렇지 않으면' 키워드를 채우세요.",
      "hint_en": "Inside { }, place the 2-letter condition keyword before the length test and the 4-letter 'otherwise' keyword before the fallback.",
      "templateCode": "bag = input().split()\nmsg = f\"Bag:{'Full' §§ len(bag) >= 3 §§§§ 'Open'}\"\nprint(msg)",
      "targetCode": "bag = input().split()\nmsg = f\"Bag:{'Full' if len(bag) >= 3 else 'Open'}\"\nprint(msg)",
      "testCases": [
        {
          "id": 1,
          "input": "a b c",
          "expectedOutput": "Bag:Full"
        },
        {
          "id": 2,
          "input": "a",
          "expectedOutput": "Bag:Open"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "함수의 return 키워드 바로 뒤에 한 줄 조건 표현식을 작성하면 여러 줄의 if-else 반환문을 한 줄로 깔끔하게 줄일 수 있습니다.",
      "prompt_en": "Placing an inline conditional expression right after return condenses a multi-line if-else return into a single line.",
      "hint_ko": "return 뒤의 조건식이 먼저 계산되어 조건에 맞는 숫자 하나가 호출한 곳으로 반환됩니다.",
      "hint_en": "Python evaluates the conditional expression after return first and sends the selected value back to the caller.",
      "targetCode": "def calc_fee(age):\n    return 0 if age < 8 else 1500\n\nprint(calc_fee(6), calc_fee(20))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "0 1500"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "양쪽 공백을 제거한 문자열이 비어 있지 않으면 그대로, 비어 있으면 \"Guest\"를 돌려주도록 함수 안의 두 빈칸을 채워보세요.",
      "prompt_en": "Fill in the return and condition keywords so clean_name returns s when non-empty or \"Guest\" otherwise.",
      "hint_ko": "함수 밖으로 값을 '되돌려주다'라는 6글자 키워드로 시작하고, 길이 검사 앞에 2글자 조건 키워드를 적으세요.",
      "hint_en": "Start with the 6-letter keyword that sends a value back from a function, then put the 2-letter condition keyword before the length check.",
      "templateCode": "def clean_name(raw):\n    s = raw.strip()\n    §§§§§§ s §§ len(s) > 0 else \"Guest\"\n\nprint(clean_name(\"  Kim \"), clean_name(\"   \"))",
      "targetCode": "def clean_name(raw):\n    s = raw.strip()\n    return s if len(s) > 0 else \"Guest\"\n\nprint(clean_name(\"  Kim \"), clean_name(\"   \"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Kim Guest"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "복합 대입 연산자(+=) 오른쪽에 한 줄 조건 표현식을 쓰면, 조건에 따라 결정된 값을 누적 변수에 곧바로 더할 수 있습니다.",
      "prompt_en": "Writing an inline conditional on the right side of += evaluates the chosen value first and adds it directly to the accumulator.",
      "hint_ko": ".get(t, 0)으로 안전 조회한 점수가 0보다 크면 그 점수를, 아니면 기본 점수 1을 total에 누적합니다.",
      "hint_en": "If the score looked up via .get(t, 0) is positive, it adds that score; otherwise it adds the fallback 1.",
      "targetCode": "bonus = {\"vip\": 20, \"std\": 5}\ntiers = [\"vip\", \"free\", \"std\"]\ntotal = 0\nfor t in tiers:\n    pts = bonus.get(t, 0)\n    total += pts if pts > 0 else 1\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "26"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "while문으로 리스트를 돌며 양수일 때만 그 값을 더하고 음수면 0을 더하도록 두 조건 키워드 빈칸을 채워보세요.",
      "prompt_en": "Fill in the two ternary keywords so only positive numbers contribute to pos_sum.",
      "hint_ko": "양수 검사 식 앞에는 2글자 조건 키워드를, 음수일 때 대신 더할 0 앞에는 4글자 '그렇지 않으면' 키워드를 넣으세요.",
      "hint_en": "Place the 2-letter condition keyword before the > 0 check and the 4-letter 'otherwise' keyword before 0.",
      "templateCode": "nums = [12, -5, 8, -3]\ni = 0\npos_sum = 0\nwhile i < len(nums):\n    pos_sum += nums[i] §§ nums[i] > 0 §§§§ 0\n    i += 1\nprint(pos_sum)",
      "targetCode": "nums = [12, -5, 8, -3]\ni = 0\npos_sum = 0\nwhile i < len(nums):\n    pos_sum += nums[i] if nums[i] > 0 else 0\n    i += 1\nprint(pos_sum)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "20"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "한 줄 조건 표현식에 불필요한 기호가 들어가 SyntaxError가 발생하는 버그를 고쳐 등급이 출력되도록 수정해보세요. (터미널 입력: 120)",
      "prompt_en": "Fix the SyntaxError caused by an extra punctuation mark in the inline conditional expression. (Terminal input: 120)",
      "hint_ko": "여러 줄로 들여쓰는 일반 조건 블록문과 달리, 한 줄 값 표현식에서는 분기 키워드 뒤에 콜론(:)을 붙이지 않습니다.",
      "hint_en": "Unlike multi-line statement blocks, inline conditional expressions do not use a colon (:) after their keywords.",
      "templateCode": "pts = int(input())\ngrade = \"VIP\" if pts >= 100 else: \"STD\"\nprint(grade)",
      "targetCode": "pts = int(input())\ngrade = \"VIP\" if pts >= 100 else \"STD\"\nprint(grade)",
      "testCases": [
        {
          "id": 1,
          "input": "120",
          "expectedOutput": "VIP"
        },
        {
          "id": 2,
          "input": "50",
          "expectedOutput": "STD"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "재고 수량을 입력받는 코드 아래에 한 줄을 추가하여 재고가 0이면 \"Buy\", 아니면 \"Hold\"를 조건 표현식으로 출력해보세요. (터미널 입력: 0)",
      "prompt_en": "Add one line below to print \"Buy\" when stock is 0 and \"Hold\" otherwise using a ternary expression. (Terminal input: 0)",
      "hint_ko": "출력 함수 안에 재고 변수가 0과 같은지 검사하는 한 줄 조건 표현식을 작성해 두 문자열 중 하나가 선택되게 해보세요.",
      "hint_en": "Inside your output call, write an inline conditional testing whether stock equals 0 to pick between the two strings.",
      "templateCode": "stock = int(input())\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "stock = int(input())\nprint(\"Buy\" if stock == 0 else \"Hold\")",
      "testCases": [
        {
          "id": 1,
          "input": "0",
          "expectedOutput": "Buy"
        },
        {
          "id": 2,
          "input": "5",
          "expectedOutput": "Hold"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 반복문과 한 줄 조건 표현식 코드를 실행했을 때의 출력 결과를 선택해보세요.",
      "prompt_en": "Select the exact output of the following loop with a ternary expression.",
      "hint_ko": "원소가 걸러져 빠지는 것이 아니라, 모든 원소가 조건에 따라 두 배 값 또는 0으로 바뀌어 차례대로 추가된다는 점을 확인해보세요.",
      "hint_en": "Notice that no elements are skipped: every number either doubles (when >= 5) or becomes 0 before being appended and summed.",
      "targetCode": "vals = [3, 10, 6, 1]\nres = []\nfor v in vals:\n    res.append(v * 2 if v >= 5 else 0)\nprint(res, sum(res))",
      "choices": [
        "[0, 20, 12, 0] 32",
        "[6, 20, 12, 2] 40",
        "[20, 12] 32",
        "[0, 10, 6, 0] 16"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[0, 20, 12, 0] 32"
        }
      ]
    }
  ]
};