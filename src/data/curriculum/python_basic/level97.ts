import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_97: PracticeRound = {
  "id": "py-basic-r97",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 97,
  "title_ko": "f-string 세부 서식 지정자 (:.2f 소수점, :, 천 단위 콤마)",
  "title_en": "f-string Format Specifiers (:.2f, :, & :03d)",
  "description_ko": "f-string의 중괄호 안에서 콜론(:) 뒤에 :.2f(고정 소수점), :,(천 단위 콤마), :03d(0 채우기) 서식 지정자를 활용합니다.",
  "description_en": "Format numbers cleanly in f-strings using :.2f for decimals, :, for thousands commas, and :03d for zero-padding.",
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
      "prompt_ko": "[블록 조립] f-string 서식 지정자를 사용해 원주율 실수를 소수점 둘째 자리와 첫째 자리까지 각각 고정 표기해 한 줄씩 출력해보세요.",
      "prompt_en": "[Block] Format pi in an f-string to 2 decimal places on the first line and 1 decimal place on the second line.",
      "hint_ko": "중괄호 안 변수명 뒤에 콜론(:)을 찍고 .2f를 적으면 소수점 아래 둘째 자리까지 반올림해 고정 출력합니다.",
      "hint_en": "Writing :.2f after the variable inside braces rounds and formats the float to 2 decimal places.",
      "targetCode": "pi = 3.14159\nprint(f\"{pi:.2f}\")\nprint(f\"{pi:.1f}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3.14\n3.1"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 실수를 소수점 둘째 자리까지 고정 표기하도록 콜론 뒤의 서식 지정자를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the format specifier after the colon to display rate with 2 fixed decimal places.",
      "hint_ko": "소수점 둘째 자리 고정 실수(fixed-point)를 뜻하는 서식 지정자를 적으세요.",
      "hint_en": "Enter the 3-character format specifier for 2 fixed decimal places.",
      "targetCode": "rate = 3.5\nprint(f\"{rate:.2f}%\")",
      "templateCode": "rate = 3.5\nprint(f\"{rate:§§§§}%\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3.50%"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] f-string 서식 지정자를 사용해 큰 정수 금액에 세 자리마다 천 단위 콤마가 찍히도록 출력해보세요.",
      "prompt_en": "[Block] Use an f-string format specifier to print price with thousands commas.",
      "hint_ko": "콜론(:) 뒤에 쉼표(,) 하나만 적으면 세 자리마다 자동으로 천 단위 구분 기호가 들어갑니다.",
      "hint_en": "Placing a comma after the colon (:,) automatically inserts thousands separators every three digits.",
      "targetCode": "price = 1250000\nprint(f\"{price:,}원\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1,250,000원"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 입력받은 정수 금액에 천 단위 콤마가 자동으로 찍히도록 콜론 뒤 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the format specifier after the colon to format the integer with thousands commas.",
      "hint_ko": "콜론 바로 뒤에 세 자리 구분 기호인 쉼표 한 글자를 입력하세요.",
      "hint_en": "Type the single comma character right after the colon.",
      "targetCode": "cost = int(input())\nprint(f\"${cost:,}\")",
      "templateCode": "cost = int(input())\nprint(f\"${cost:§§}\")",
      "testCases": [
        {
          "id": 1,
          "input": "45000",
          "expectedOutput": "$45,000"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] f-string 서식 지정자를 사용해 번호는 3자리, 시와 분은 2자리 폭에 맞춰 빈 앞자리를 0으로 채워 출력해보세요.",
      "prompt_en": "[Block] Zero-pad the ticket number to 3 digits and the hour and minute to 2 digits in an f-string.",
      "hint_ko": ":03d는 정수(d)를 최소 3칸으로 표시하되 남는 앞자리를 공백 대신 0으로 채웁니다.",
      "hint_en": ":03d formats an integer to a minimum width of 3, padding leading positions with zeros.",
      "targetCode": "num = 7\nh, m = 9, 5\nprint(f\"No.{num:03d} ({h:02d}:{m:02d})\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "No.007 (09:05)"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 정수를 3자리 폭에 맞춰 앞의 빈자리를 0으로 채우도록 서식 지정자를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the format specifier after the colon to zero-pad the integer to 3 digits.",
      "hint_ko": "0으로 채움(0), 3자리 폭(3), 10진 정수(d)를 합친 서식 지정자를 입력하세요.",
      "hint_en": "Enter the 3-character specifier combining zero-fill (0), width (3), and decimal integer (d).",
      "targetCode": "n = int(input())\nprint(f\"ID-{n:03d}\")",
      "templateCode": "n = int(input())\nprint(f\"ID-{n:§§§§}\")",
      "testCases": [
        {
          "id": 1,
          "input": "7",
          "expectedOutput": "ID-007"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 점수 리스트의 합계에는 천 단위 콤마를, 평균에는 소수점 둘째 자리 고정 서식을 적용해 출력해보세요.",
      "prompt_en": "[Block] Print the sum of scores with thousands commas and the average formatted to 2 decimal places.",
      "hint_ko": "sum(scores)와 sum(scores) / len(scores)로 구한 값에 각각 :,와 :.2f 서식을 지정합니다.",
      "hint_en": "Format the total with :, and the computed average with :.2f in the f-string.",
      "targetCode": "scores = [850, 920, 780]\ntotal = sum(scores)\navg = total / len(scores)\nprint(f\"Sum:{total:,}/Avg:{avg:.2f}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Sum:2,550/Avg:850.00"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 천 단위 콤마와 소수점 둘째 자리 표기를 동시에 적용하는 복합 서식 지정자를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the combined format specifier for both thousands commas and 2 decimal places.",
      "hint_ko": "콜론 뒤에 쉼표(,)와 소수 둘째 자리(.2f)를 나란히 붙인 서식 지정자를 적으세요.",
      "hint_en": "Combine the comma separator and 2-decimal fixed-point specifier into 4 characters after the colon.",
      "targetCode": "amount = 12345.6\nprint(f\"${amount:,.2f}\")",
      "templateCode": "amount = 12345.6\nprint(f\"${amount:§§§§§}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "$12,345.60"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 계산된 단가를 소수점 첫째 자리까지 고정 표기하도록 서식 지정자 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the format specifier so the computed unit price is displayed to 1 fixed decimal place.",
      "hint_ko": "실수를 소수 첫째 자리까지 반올림해 표시하는 서식 지정자(.1f)를 채우세요.",
      "hint_en": "Supply the 1-decimal fixed-point float format specifier.",
      "targetCode": "no = 5\ntotal = 15000\nunit = total / 4\nprint(f\"{no:03d}:{total:,}:{unit:.1f}\")",
      "templateCode": "no = 5\ntotal = 15000\nunit = total / 4\nprint(f\"{no:03d}:{total:,}:{unit:§§§§}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "005:15,000:3750.0"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 실수 계산 결과를 소수점 둘째 자리까지 고정 표기하도록 f-string 서식 구분 기호 버그를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the syntax bug in the f-string format specifier to format the float to 2 decimal places.",
      "hint_ko": "f-string에서 변수명과 서식 지정자(.2f) 사이에는 콜론(:)이 들어가야 합니다.",
      "hint_en": "Insert a colon (:) between the variable name val and the format specifier .2f.",
      "templateCode": "val = 10 / 3\nprint(f\"{val;.2f}\")",
      "targetCode": "val = 10 / 3\nprint(f\"{val:.2f}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3.33"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 정수를 3자리 폭에 맞춰 앞의 빈자리를 0으로 채워 표기하도록 서식 지정자 버그를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the format specifier so the integer is zero-padded to a width of 3 digits.",
      "hint_ko": "3자리 폭의 빈 앞자리를 0으로 채우는 정수 서식 지정자는 03d입니다.",
      "hint_en": "Place a 0 before the width 3 in the format specifier so it pads with zeros instead of spaces.",
      "templateCode": "n = 9\nprint(f\"{n:.3f}\")",
      "targetCode": "n = 9\nprint(f\"{n:03d}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "009"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 실수 avg를 소수점 둘째 자리까지 고정 표기한 f-string을 변수 msg에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Format avg to 2 decimal places in an f-string and assign it to msg.",
      "hint_ko": "msg = f\"{avg:.2f}\" 형태로 소수점 둘째 자리 서식 문자열을 변수 msg에 대입하세요.",
      "hint_en": "Write msg = f\"{avg:.2f}\" on the masked line.",
      "targetCode": "nums = [10, 15, 22]\navg = sum(nums) / len(nums)\nmsg = f\"{avg:.2f}\"\nprint(msg)",
      "templateCode": "nums = [10, 15, 22]\navg = sum(nums) / len(nums)\n§§§§§§§§§§§§§§§§§§§\nprint(msg)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "15.67"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 합계 변수 total에 세 자리마다 천 단위 콤마 서식을 적용해 출력하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write a print statement that outputs total formatted with thousands commas using an f-string.",
      "hint_ko": "print(f\"{total:,}\") 형태로 천 단위 콤마 서식을 적용해 출력하세요.",
      "hint_en": "Write print(f\"{total:,}\") on the masked line.",
      "targetCode": "prices = [12000, 35000, 8000]\ntotal = sum(prices)\nprint(f\"{total:,}\")",
      "templateCode": "prices = [12000, 35000, 8000]\ntotal = sum(prices)\n§§§§§§§§§§§§§§§§§§§§",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "55,000"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 세 가지 f-string 서식 지정자의 실행 결과를 정확히 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following f-string format specifiers.",
      "hint_ko": "3자리 0 채우기, 천 단위 콤마, 그리고 소수점 둘째 자리 고정 표기(빈 끝자리 0 포함)를 확인하세요.",
      "hint_en": "Check the 3-digit zero-padding, thousands comma grouping, and 2-decimal fixed-point trailing zero.",
      "targetCode": "a = 5\nb = 12000\nc = 3.5\nprint(f\"{a:03d} | {b:,} | {c:.2f}\")",
      "choices": [
        "005 | 12,000 | 3.50",
        "500 | 12,000 | 3.5",
        "005 | 12000 | 3.50",
        "  5 | 12,000 | 3.50"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "005 | 12,000 | 3.50"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 딕셔너리 값 집계와 f-string 복합 서식이 결합된 코드의 출력 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the code combining dictionary values and f-string formatting.",
      "hint_ko": "항목 개수 2는 :02d로 \"02\"가 되고, 합계 3000은 :,로 \"3,000\", 절반인 1500.0은 :,.1f로 \"1,500.0\"이 됩니다.",
      "hint_en": "Count 2 formats as 02, sum 3000 formats as 3,000, and 1500.0 formats as 1,500.0.",
      "targetCode": "cart = {\"pen\": 1000, \"note\": 2000}\nvals = list(cart.values())\ns = sum(vals)\nprint(f\"{len(vals):02d}:{s:,}/{s / 2:,.1f}\")",
      "choices": [
        "02:3,000/1,500.0",
        "2:3,000/1500.0",
        "02:3,000/1,500.00",
        "02:3000/1,500.0"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "02:3,000/1,500.0"
        }
      ]
    }
  ]
};
