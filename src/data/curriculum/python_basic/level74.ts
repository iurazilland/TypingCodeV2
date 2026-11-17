import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_74: PracticeRound = {
  "id": "py-basic-r74",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 74,
  "title_ko": "74레벨: 한 줄 조건 표현식 (삼항 연산자 a if 조건 else b)",
  "title_en": "Level 74: Inline Conditional Expressions (Ternary)",
  "description_ko": "if-else 분기를 한 줄의 값 표현식(참값 if 조건 else 거짓값)으로 간결하게 작성하고 함수·f-string·반복문에 활용합니다.",
  "description_en": "Write concise inline conditional expressions (a if cond else b) inside assignments, f-strings, functions, and loops.",
  "totalQuestions": 15,
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 한 줄 조건 표현식(\"Pass\" if score >= 60 else \"Fail\")으로 합격 여부를 대입해보세요.",
      "prompt_en": "[Block] Use an inline conditional expression (\"Pass\" if score >= 60 else \"Fail\") to assign label.",
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
      "prompt_ko": "[빈칸 채우기] n이 짝수면 \"Even\", 아니면 \"Odd\"를 대입하도록 한 줄 조건 표현식의 두 키워드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the two conditional keywords to assign \"Even\" when n is even and \"Odd\" otherwise.",
      "hint_ko": "참값 뒤에는 2글자 조건 키워드 if를, 거짓값 앞에는 4글자 키워드 else를 적으세요.",
      "hint_en": "Put if before the condition and else before the fallback value.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 100 if raw > 100 else raw 표현식으로 체력 상한값을 100으로 제한해보세요.",
      "prompt_en": "[Block] Use 100 if raw > 100 else raw to clamp hp at an upper limit of 100.",
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
      "prompt_ko": "[빈칸 채우기] 입력 정수가 0 이상이면 그대로 두고 음수이면 0으로 보정하도록 키워드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the fallback keyword so negative inputs are clamped to 0.",
      "hint_ko": "조건이 거짓일 때 선택할 기본값 0 앞에는 4글자 분기 키워드 else를 적습니다.",
      "hint_en": "Enter else before the fallback value 0.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] f-string 중괄호 { } 안에 한 줄 조건 표현식을 넣어 온도 상태를 포맷팅해보세요.",
      "prompt_en": "[Block] Embed an inline conditional expression inside f-string braces { } to format temperature status.",
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
      "prompt_ko": "[빈칸 채우기] 아이템 개수가 3개 이상이면 Full, 아니면 Open이 되도록 f-string 안의 두 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the two conditional keywords inside the f-string to format Bag:Full or Bag:Open.",
      "hint_ko": "f-string 중괄호 안에서도 참값 뒤에 if를, 대체값 앞에 else를 채우세요.",
      "hint_en": "Place if before len(bag) >= 3 and else before 'Open'.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 함수의 return 뒤에 한 줄 조건 표현식을 작성해 나이에 따른 요금을 반환해보세요.",
      "prompt_en": "[Block] Place an inline conditional expression right after return inside calc_fee.",
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
      "prompt_ko": "[빈칸 채우기] 공백 제거 문자열 s가 비어 있지 않으면 s를, 비어 있으면 \"Guest\"를 반환하도록 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in return and if so clean_name returns s when non-empty or \"Guest\" otherwise.",
      "hint_ko": "값을 반환하는 6글자 키워드 return으로 시작하고, 길이 검사 앞에 2글자 조건 키워드 if를 적으세요.",
      "hint_en": "Start with return and put if before len(s) > 0.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] for문 안에서 += 오른쪽에 한 줄 조건 표현식을 써서 보너스 점수를 누적해보세요.",
      "prompt_en": "[Block] Use an inline conditional on the right side of += inside a for loop to accumulate points.",
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
      "prompt_ko": "[빈칸 채우기] for문으로 리스트를 돌며 양수일 때만 그 값을 더하고 음수면 0을 더하도록 두 키워드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the two ternary keywords inside the for loop so only positive numbers are summed.",
      "hint_ko": "양수 검사 식 앞에는 if를, 음수일 때 대신 더할 0 앞에는 else를 넣으세요.",
      "hint_en": "Place if before n > 0 and else before 0.",
      "templateCode": "nums = [12, -5, 8, -3]\npos_sum = 0\nfor n in nums:\n    pos_sum += n §§ n > 0 §§§§ 0\nprint(pos_sum)",
      "targetCode": "nums = [12, -5, 8, -3]\npos_sum = 0\nfor n in nums:\n    pos_sum += n if n > 0 else 0\nprint(pos_sum)",
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
      "prompt_ko": "[틀린 곳 수정] 점수가 100 이상일 때 \"VIP\"가 되어야 하는데 비교 연산자 방향이 반대인 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the reversed comparison operator in the ternary expression so pts >= 100 yields \"VIP\".",
      "hint_ko": "100점 이상일 때 \"VIP\"를 선택해야 하므로 <= 연산자를 >= 로 수정하세요.",
      "hint_en": "Change <= to >= in the inline conditional expression.",
      "templateCode": "pts = int(input())\ngrade = \"VIP\" if pts <= 100 else \"STD\"\nprint(grade)",
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
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 2로 나눈 나머지가 0일 때 \"Even\"이 되어야 하는데 != 0으로 잘못 비교한 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the remainder comparison operator so even numbers produce \"Even\".",
      "hint_ko": "짝수는 2로 나눈 나머지가 0과 같아야 하므로 != 0을 == 0으로 수정하세요.",
      "hint_en": "Replace != 0 with == 0 in the ternary condition.",
      "templateCode": "n = int(input())\nres = \"Even\" if n % 2 != 0 else \"Odd\"\nprint(res)",
      "targetCode": "n = int(input())\nres = \"Even\" if n % 2 == 0 else \"Odd\"\nprint(res)",
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
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 재고 stock이 0이면 \"Buy\", 아니면 \"Hold\"를 변수 act에 대입하는 한 줄 조건 표현식을 완성해보세요.",
      "prompt_en": "[Complete Line] Assign \"Buy\" if stock == 0 else \"Hold\" to the variable act.",
      "hint_ko": "act = \"Buy\" if stock == 0 else \"Hold\" 형태로 한 줄 조건 표현식을 작성하세요.",
      "hint_en": "Write act = \"Buy\" if stock == 0 else \"Hold\".",
      "templateCode": "stock = int(input())\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(act)",
      "targetCode": "stock = int(input())\nact = \"Buy\" if stock == 0 else \"Hold\"\nprint(act)",
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
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 정수 x가 0보다 크면 x, 아니면 0을 변수 val에 대입하는 한 줄 조건 표현식을 완성해보세요.",
      "prompt_en": "[Complete Line] Assign x if x > 0 else 0 to the variable val.",
      "hint_ko": "val = x if x > 0 else 0 형태로 양수일 때만 x를 유지하는 식을 작성하세요.",
      "hint_en": "Write val = x if x > 0 else 0.",
      "templateCode": "x = int(input())\n§§§§§§§§§§§§§§§§§§§§§§§\nprint(val)",
      "targetCode": "x = int(input())\nval = x if x > 0 else 0\nprint(val)",
      "testCases": [
        {
          "id": 1,
          "input": "-7",
          "expectedOutput": "0"
        },
        {
          "id": 2,
          "input": "12",
          "expectedOutput": "12"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 반복문과 한 줄 조건 표현식 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following loop with a ternary expression.",
      "hint_ko": "모든 원소가 조건에 따라 두 배 값(v >= 5일 때) 또는 0으로 바뀌어 res에 추가된다는 점을 확인하세요.",
      "hint_en": "Every number either doubles (when >= 5) or becomes 0 before being appended and summed.",
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
