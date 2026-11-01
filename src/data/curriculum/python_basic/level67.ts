import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_67: PracticeRound = {
  "id": "py-basic-r67",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 67,
  "title_ko": "67레벨: f-string 세부 서식, 역순 슬라이싱과 문자 코드(ord, chr)",
  "title_en": "Level 67: f-string Format Specs, Reverse Slicing & ord/chr",
  "description_ko": "f-string 소수점·천 단위 서식(:,.2f), 증감폭 슬라이싱([::-1], [::2]), 문자 코드 함수(ord, chr)를 익힙니다.",
  "description_en": "Format numbers with f-string specs (:,.2f), slice with step/reverse ([::-1], [::2]), and shift characters with ord() and chr().",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "method",
    "type",
    "if",
    "for_in",
    "def",
    "class"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "실수 avg(87.456)는 소수점 둘째 자리까지, 정수 price(1250000)는 천 단위 쉼표를 넣어 \"87.46 / 1,250,000\"으로 출력해보세요.",
      "prompt_en": "Format avg (87.456) to 2 decimal places and price (1250000) with commas as \"87.46 / 1,250,000\".",
      "hint_ko": "f-string 중괄호 안에서 {avg:.2f}는 소수점 둘째 자리 반올림, {price:,}는 세 자리마다 쉼표를 표시합니다.",
      "hint_en": "Use {avg:.2f} for two decimal places and {price:,} for thousands separators.",
      "targetCode": "avg = 87.456\nprice = 1250000\nprint(f\"{avg:.2f} / {price:,}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "87.46 / 1,250,000"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "입력받은 실수에 천 단위 쉼표와 소수점 둘째 자리 서식을 함께 적용해 달러 금액을 출력해보세요. (예: 1520.5 -> $1,520.50)",
      "prompt_en": "Format float input val with thousands commas and 2 decimal places prefixed by \"$\" (e.g., 1520.5 -> $1,520.50).",
      "hint_ko": "천 단위 쉼표(,)와 소수점 자리수(.2f)를 함께 쓸 때는 콜론 뒤에 ,.2f 순서로 적습니다.",
      "hint_en": "Combine comma and precision after the colon as {val:,.2f}.",
      "targetCode": "val = float(input())\nprint(f\"${val:,.2f}\")",
      "templateCode": "val = float(input())\nprint(f\"${val:§§§§}\")",
      "testCases": [
        {
          "id": 1,
          "input": "1520.5",
          "expectedOutput": "$1,520.50"
        },
        {
          "id": 2,
          "input": "98765.436",
          "expectedOutput": "$98,765.44"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "문자열 word(\"ABCDEF\")를 역순으로 뒤집은 결과와 처음부터 2칸 간격으로 추출한 결과를 차례로 출력해보세요.",
      "prompt_en": "Print word (\"ABCDEF\") reversed with [::-1] on line 1 and every second character with [::2] on line 2.",
      "hint_ko": "세 번째 슬라이싱 값(step)에 -1을 넣은 word[::-1]은 역순, 2를 넣은 word[::2]는 2칸씩 건너뛴 문자열을 만듭니다.",
      "hint_en": "word[::-1] reverses the string, and word[::2] takes characters at step 2.",
      "targetCode": "word = \"ABCDEF\"\nprint(word[::-1])\nprint(word[::2])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "FEDCBA\nACE"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "소문자로 통일한 입력 문자열이 앞뒤 어느 쪽으로 읽어도 같은 회문인지 불리언으로 출력해보세요. (예: Level -> True)",
      "prompt_en": "Check whether lowercased input s is a palindrome and print True or False (e.g., Level -> True).",
      "hint_ko": "원본 문자열 s와 역순 슬라이싱 문자열 s[::-1]이 같은지(==) 비교하면 회문 여부를 바로 알 수 있습니다.",
      "hint_en": "Compare s == s[::-1] to test if s reads the same backward.",
      "targetCode": "s = input().lower()\nprint(s == s[::-1])",
      "templateCode": "s = input().lower()\nprint(s == s[§§§§])",
      "testCases": [
        {
          "id": 1,
          "input": "Level",
          "expectedOutput": "True"
        },
        {
          "id": 2,
          "input": "Python",
          "expectedOutput": "False"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "문자 \"A\"의 코드 번호를 code에 담고, 1을 더한 번호에 해당하는 문자를 next_ch에 담아 함께 출력해보세요. (출력 예: 65 B)",
      "prompt_en": "Store ord(\"A\") in code and chr(code + 1) in next_ch, then print code and next_ch (e.g., 65 B).",
      "hint_ko": "ord(\"A\")는 문자 \"A\"의 유니코드 번호 65를 돌려주고, chr(66)은 번호 66에 해당하는 문자 \"B\"를 돌려줍니다.",
      "hint_en": "ord() converts a character to its integer code; chr() converts an integer code back to a character.",
      "targetCode": "code = ord(\"A\")\nnext_ch = chr(code + 1)\nprint(code, next_ch)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "65 B"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "입력된 대문자(A~Y)가 \"A\"로부터 몇 칸 떨어졌는지와 바로 다음 알파벳을 한 줄에 출력해보세요. (예: D -> 3 E)",
      "prompt_en": "Print how far uppercase ch is from \"A\" and the next uppercase letter on one line (e.g., D -> 3 E).",
      "hint_ko": "문자를 번호로 바꿀 때는 ord(), 번호에 1을 더한 값을 다시 문자로 바꿀 때는 chr()를 사용합니다.",
      "hint_en": "Use ord(ch) - ord(\"A\") for distance and chr(ord(ch) + 1) for the next character.",
      "targetCode": "ch = input()\npos = ord(ch) - ord(\"A\")\nnxt = chr(ord(ch) + 1)\nprint(pos, nxt)",
      "templateCode": "ch = input()\npos = §§§(ch) - §§§(\"A\")\nnxt = §§§(§§§(ch) + 1)\nprint(pos, nxt)",
      "testCases": [
        {
          "id": 1,
          "input": "A",
          "expectedOutput": "0 B"
        },
        {
          "id": 2,
          "input": "D",
          "expectedOutput": "3 E"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "입력을 대문자로 바꾼 뒤 각 글자를 다음 코드 문자로 1칸씩 밀어 이어 붙이고, 역순으로 뒤집어 출력해보세요. (예: ABC -> DCB)",
      "prompt_en": "Uppercase input, shift each character by +1 into enc, and print enc reversed (e.g., ABC -> DCB).",
      "hint_ko": "반복문에서 enc += chr(ord(c) + 1)로 한 글자씩 누적한 뒤 마지막에 print(enc[::-1])을 실행합니다.",
      "hint_en": "Accumulate chr(ord(c) + 1) in enc, then print enc[::-1].",
      "targetCode": "raw = input().upper()\nenc = \"\"\nfor c in raw:\n    enc += chr(ord(c) + 1)\nprint(enc[::-1])",
      "testCases": [
        {
          "id": 1,
          "input": "ABC",
          "expectedOutput": "DCB"
        },
        {
          "id": 2,
          "input": "hi",
          "expectedOutput": "JI"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "짝수 인덱스(0, 2, 4...) 문자만 추린 문자열과 전체 길이 대비 백분율(소수점 첫째 자리)을 출력해보세요. (예: P0Y1 -> PY (50.0%))",
      "prompt_en": "Extract even-index characters and print them with their percentage to 1 decimal place (e.g., P0Y1 -> PY (50.0%)).",
      "hint_ko": "2칸 간격 슬라이싱은 code[::2], 소수점 첫째 자리 실수 서식은 {ratio:.1f}를 사용합니다.",
      "hint_en": "Use ::2 for step-2 slicing and .1f for 1 decimal place.",
      "targetCode": "code = input()\neven = code[::2]\nratio = len(even) / len(code) * 100\nprint(f\"{even} ({ratio:.1f}%)\")",
      "templateCode": "code = input()\neven = code[§§§]\nratio = len(even) / len(code) * 100\nprint(f\"{even} ({ratio:§§§}%)\")",
      "testCases": [
        {
          "id": 1,
          "input": "A1B2C",
          "expectedOutput": "ABC (60.0%)"
        },
        {
          "id": 2,
          "input": "P0Y1",
          "expectedOutput": "PY (50.0%)"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "글자일 때만 문자 코드를 k칸 밀고 기호·숫자는 유지하는 함수 shift_word를 만들어 \"A-1\"을 2칸 민 결과를 출력해보세요. (출력 예: C-1)",
      "prompt_en": "Write shift_word(s, k) that shifts alphabetic characters by k and keeps others unchanged, then print shift_word(\"A-1\", 2).",
      "hint_ko": "if c.isalpha(): 조건일 때만 out += chr(ord(c) + k)를 수행하고 else에서는 out += c로 원본 문자를 유지합니다.",
      "hint_en": "Shift with chr(ord(c) + k) when c.isalpha() is True; otherwise append c as-is.",
      "targetCode": "def shift_word(s, k):\n    out = \"\"\n    for c in s:\n        if c.isalpha():\n            out += chr(ord(c) + k)\n        else:\n            out += c\n    return out\n\nprint(shift_word(\"A-1\", 2))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "C-1"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "상품명을 대문자로 저장하고 총액을 천 단위 쉼표와 소수점 둘째 자리로 서식화하는 Item 클래스를 완성해보세요. (출력 예: LATTE: $1,300.50)",
      "prompt_en": "Complete Item so self.name is uppercased and line() formats self.total with commas and 2 decimals (e.g., LATTE: $1,300.50).",
      "hint_ko": "생성자에서 name.upper()로 대문자 변환하고, line 메서드에서는 {self.total:,.2f} 서식을 지정합니다.",
      "hint_en": "Use name.upper() in __init__ and {self.total:,.2f} in line().",
      "targetCode": "class Item:\n    def __init__(self, name, price, qty):\n        self.name = name.upper()\n        self.total = price * qty\n\n    def line(self):\n        return f\"{self.name}: ${self.total:,.2f}\"\n\nit = Item(\"latte\", 650.25, 2)\nprint(it.line())",
      "templateCode": "class Item:\n    def __init__(self, name, price, qty):\n        self.name = name.§§§§§()\n        self.total = price * qty\n\n    def line(self):\n        return f\"{self.name}: ${self.total:§§§§}\"\n\nit = Item(\"latte\", 650.25, 2)\nprint(it.line())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "LATTE: $1,300.50"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "대문자 입력 문자열과 역순 문자열을 화살표(->)로 이어 출력하려다 마지막 글자만 잘린 슬라이싱 버그를 수정해보세요. (예: py -> PY->YP)",
      "prompt_en": "Fix the slicing bug where tag[:-1] dropped the last character instead of reversing tag (e.g., py -> PY->YP).",
      "hint_ko": "tag[:-1]은 마지막 한 글자만 제외한 슬라이싱입니다. 역순으로 뒤집으려면 콜론을 두 번 써서 tag[::-1]로 작성해야 합니다.",
      "hint_en": "tag[:-1] omits the last char; use two colons tag[::-1] to reverse the string.",
      "templateCode": "tag = input().strip().upper()\nrev = tag[:-1]\nprint(f\"{tag}->{rev}\")",
      "targetCode": "tag = input().strip().upper()\nrev = tag[::-1]\nprint(f\"{tag}->{rev}\")",
      "testCases": [
        {
          "id": 1,
          "input": "code",
          "expectedOutput": "CODE->EDOC"
        },
        {
          "id": 2,
          "input": "py",
          "expectedOutput": "PY->YP"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "두 실수의 평균 avg를 구한 코드 아래에 한 줄을 추가하여 avg를 소수점 둘째 자리까지 서식화해 출력해보세요. (예: 1 2 -> 1.50)",
      "prompt_en": "Add one line below to print avg formatted to 2 decimal places (e.g., 1 2 -> 1.50).",
      "hint_ko": "셋째 줄에 print(f\"{avg:.2f}\")를 작성하면 끝자리 0까지 포함해 소수점 둘째 자리로 출력됩니다.",
      "hint_en": "Write print(f\"{avg:.2f}\") on line 3.",
      "targetCode": "a, b = input().split()\navg = (float(a) + float(b)) / 2\nprint(f\"{avg:.2f}\")",
      "templateCode": "a, b = input().split()\navg = (float(a) + float(b)) / 2\n§§§§§§§§§§§§§§§§§§§",
      "testCases": [
        {
          "id": 1,
          "input": "10 15.5",
          "expectedOutput": "12.75"
        },
        {
          "id": 2,
          "input": "1 2",
          "expectedOutput": "1.50"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 파이썬 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "Select the exact output of the following Python code.",
      "hint_ko": "rev는 \"GECA\"이므로 rev[1]은 \"E\"(ord 차이 4), rev[::2]는 \"GC\"이며 1200.5의 :,.1f 서식은 \"1,200.5\"입니다.",
      "hint_en": "rev is \"GECA\", rev[1] is \"E\" (69 - 65 = 4), rev[::2] is \"GC\", and 1200.5 formatted with :,.1f is \"1,200.5\".",
      "targetCode": "s = \"ACEG\"\nrev = s[::-1]\ncode = ord(rev[1]) - ord(\"A\")\nval = 1200.5\nprint(f\"{rev[::2]}-{code} / {val:,.1f}\")",
      "choices": [
        "GC-4 / 1,200.5",
        "EA-4 / 1,200.5",
        "GC-2 / 1,200.50",
        "AC-4 / 1200.5"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "GC-4 / 1,200.5"
        }
      ]
    }
  ]
};
