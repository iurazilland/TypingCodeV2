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
      "prompt_ko": "입력 점수 score가 60 이상이면 \"Pass\", 아니면 \"Fail\"을 한 줄 조건 표현식으로 label에 담아 출력해보세요.",
      "prompt_en": "Assign \"Pass\" if score >= 60 else \"Fail\" to label in one line and print label.",
      "hint_ko": "파이썬 삼항 표현식은 (조건이 참일 때 값) if (조건) else (거짓일 때 값) 순서로 적습니다.",
      "hint_en": "Python ternary syntax is: true_val if condition else false_val.",
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
      "prompt_ko": "입력 정수 n이 2로 나누어떨어지면 \"Even\", 아니면 \"Odd\"를 대입하도록 한 줄 조건 표현식의 두 키워드를 채워보세요.",
      "prompt_en": "Fill in the two conditional keywords to assign \"Even\" when n is divisible by 2 and \"Odd\" otherwise.",
      "hint_ko": "한 줄 조건 표현식은 참값 뒤에 if 조건을 쓰고, 그 뒤에 else 거짓값을 씁니다.",
      "hint_en": "Place if before the condition and else before the fallback value.",
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
      "prompt_ko": "입력 체력 raw가 100을 넘으면 100으로 제한하고, 아니면 raw 그대로 hp에 저장해 출력해보세요.",
      "prompt_en": "Clamp raw at a maximum of 100 using 100 if raw > 100 else raw and print hp.",
      "hint_ko": "최댓값 제한(clamping)도 100 if raw > 100 else raw 한 줄로 깔끔하게 표현할 수 있습니다.",
      "hint_en": "Use 100 if raw > 100 else raw to cap values above 100.",
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
      "prompt_ko": "입력 정수가 0 이상이면 그대로 두고 음수이면 0으로 보정해 출력하도록 빈칸에 키워드를 채워보세요.",
      "prompt_en": "Fill in the fallback keyword so negative inputs are clamped to 0.",
      "hint_ko": "조건이 거짓일 때 돌려줄 기본값 앞에는 else를 적습니다.",
      "hint_en": "Write else before the fallback value 0.",
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
      "prompt_ko": "f-string 중괄호 안에서 temp가 30 이상이면 Hot, 아니면 OK를 붙여 출력해보세요. (출력 예: 33C:Hot)",
      "prompt_en": "Use an inline conditional inside an f-string to format temp as 33C:Hot or 22C:OK.",
      "hint_ko": "바깥 문자열이 큰따옴표(\")이므로 f-string 중괄호 안의 문자열은 작은따옴표('Hot', 'OK')로 감쌉니다.",
      "hint_en": "Use single quotes inside the double-quoted f-string: {'Hot' if temp >= 30 else 'OK'}.",
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
      "prompt_ko": "아이템 개수가 3개 이상이면 Full, 아니면 Open이 되도록 f-string 안의 두 빈칸을 채워보세요. (출력 예: Bag:Full)",
      "prompt_en": "Fill in the two conditional keywords inside the f-string to format Bag:Full or Bag:Open.",
      "hint_ko": "f-string의 { } 안에서도 값 표현식인 'Full' if 조건 else 'Open'을 그대로 쓸 수 있습니다.",
      "hint_en": "Inside { }, write 'Full' if len(bag) >= 3 else 'Open'.",
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
      "prompt_ko": "나이 age가 8 미만이면 0, 아니면 1500을 한 줄 return으로 반환하는 calc_fee(age) 함수를 완성해보세요.",
      "prompt_en": "Complete calc_fee(age) with a single-line return 0 if age < 8 else 1500 and test with 6 and 20.",
      "hint_ko": "4줄짜리 if-else return 블록을 return 0 if age < 8 else 1500 한 줄로 줄일 수 있습니다.",
      "hint_en": "return 0 if age < 8 else 1500 replaces a 4-line if-else block.",
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
      "hint_ko": "함수 결과 반환 키워드 return 뒤에 s if len(s) > 0 else \"Guest\"를 적습니다.",
      "hint_en": "Start with return followed by s if len(s) > 0 else \"Guest\".",
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
      "prompt_ko": "tiers를 순회하며 bonus.get(t, 0) 점수가 0보다 크면 그 점수를, 아니면 기본 1점을 total에 더해 출력해보세요.",
      "prompt_en": "Loop over tiers, look up pts with bonus.get(t, 0), and add pts if pts > 0 else 1 to total.",
      "hint_ko": "total += pts if pts > 0 else 1은 복합 대입 연산자 오른쪽의 조건 표현식을 먼저 계산해 더해줍니다.",
      "hint_en": "Python evaluates pts if pts > 0 else 1 first, then adds the result to total.",
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
      "hint_ko": "양수 조건 앞에는 if, 음수일 때 더할 0 앞에는 else를 입력합니다.",
      "hint_en": "Write if before nums[i] > 0 and else before 0.",
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
      "prompt_ko": "한 줄 조건 표현식에 불필요한 기호가 들어가 SyntaxError가 발생하는 버그를 고쳐 등급이 출력되도록 수정해보세요.",
      "prompt_en": "Fix the SyntaxError caused by an extra punctuation mark in the inline conditional expression.",
      "hint_ko": "일반 블록문과 달리 한 줄 조건 표현식의 if와 else 뒤에는 콜론(:)을 붙이지 않습니다.",
      "hint_en": "Inline conditional expressions do not use a colon (:) after else.",
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
      "prompt_ko": "재고 수량을 입력받는 코드 아래에 한 줄을 추가하여 재고가 0이면 \"Buy\", 아니면 \"Hold\"를 조건 표현식으로 출력해보세요.",
      "prompt_en": "Add one line below to print \"Buy\" when stock is 0 and \"Hold\" otherwise using a ternary expression.",
      "hint_ko": "마지막 줄에 print(\"Buy\" if stock == 0 else \"Hold\")를 작성하세요.",
      "hint_en": "Write print(\"Buy\" if stock == 0 else \"Hold\") on the last line.",
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
      "hint_ko": "5 이상인 10과 6만 두 배(20, 12)가 되고 3과 1은 0이 되어 [0, 20, 12, 0]과 합계 32가 출력됩니다.",
      "hint_en": "10 and 6 double to 20 and 12 while 3 and 1 become 0, giving [0, 20, 12, 0] and sum 32.",
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
