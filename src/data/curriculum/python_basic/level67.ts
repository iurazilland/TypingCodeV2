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
      "hint_ko": "f-string 중괄호 안 콜론(:) 뒤에 소수점 기호·자리수·고정 소수점(fixed-point)의 첫 글자를 붙이면 자리수를 맞추고, 쉼표 기호만 적으면 천 단위 구분자를 넣습니다.",
      "hint_en": "Inside f-string braces after the colon, place a dot, digit count, and the first letter of 'fixed-point' for decimals, or a comma symbol for thousands separators.",
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
      "prompt_ko": "입력받은 정수를 2로 나눈 금액에 천 단위 쉼표와 소수점 둘째 자리 서식을 함께 적용해 달러 금액을 출력해보세요. (예: 3041 -> $1,520.50)",
      "prompt_en": "Format val (int(input()) / 2) with thousands commas and 2 decimal places prefixed by \"$\" (e.g., 3041 -> $1,520.50).",
      "hint_ko": "콜론 뒤에 세 자리 구분 쉼표 기호를 먼저 적고, 이어서 소수점 기호·자리수 숫자 2·고정 소수점(fixed-point)의 첫 글자를 나란히 붙여 네 글자 서식을 완성하세요.",
      "hint_en": "After the colon, combine the thousands-separator comma symbol followed by a dot, the digit 2, and the first letter of 'fixed-point'.",
      "targetCode": "val = int(input()) / 2\nprint(f\"${val:,.2f}\")",
      "templateCode": "val = int(input()) / 2\nprint(f\"${val:§§§§}\")",
      "testCases": [
        {
          "id": 1,
          "input": "3041",
          "expectedOutput": "$1,520.50"
        },
        {
          "id": 2,
          "input": "197531",
          "expectedOutput": "$98,765.50"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "문자열 word(\"ABCDEF\")를 역순으로 뒤집은 결과와 처음부터 2칸 간격으로 추출한 결과를 차례로 출력해보세요.",
      "prompt_en": "Print word (\"ABCDEF\") reversed with [::-1] on line 1 and every second character with [::2] on line 2.",
      "hint_ko": "슬라이싱 [시작:끝:증감폭]에서 시작과 끝을 비워 콜론 두 개를 연속으로 쓰고, 세 번째 자리에 음수 한 칸(-1) 또는 양수 두 칸(2) 간격을 넣어 추출해보세요.",
      "hint_en": "Leave start and stop empty in [start:stop:step] using two colons, then supply -1 for backward order and 2 for every second character.",
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
      "hint_ko": "시작과 끝을 생략해 콜론 두 개를 연달아 적고 증감폭 자리에 역방향 한 칸(-1)을 넣은 네 글자 슬라이싱 식으로 뒤집힌 문자열과 비교하세요.",
      "hint_en": "Inside the brackets, omit start and stop with two consecutive colons followed by a backward step of -1 to compare against the reversed string.",
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
      "hint_ko": "문자의 '순서 번호(ordinal)' 앞 세 글자를 딴 함수로 정수 코드를 구하고, '문자(char)'에서 모음 a를 뺀 세 글자 함수로 번호를 다시 글자로 바꿔보세요.",
      "hint_en": "Get the integer code using the first 3 letters of 'ordinal', then turn the incremented number back into a letter with the 3-letter 'char'-without-'a' function.",
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
      "hint_ko": "문자를 번호로 바꿀 때는 '순서(ordinal)'의 앞 세 글자 함수를, 더해진 번호를 다시 문자로 바꿀 때는 '문자(char)'에서 모음 a를 뺀 세 글자 함수를 채워보세요.",
      "hint_en": "Use the first 3 letters of 'ordinal' to get integer codes, and the 3-letter 'char'-without-'a' built-in function to turn the incremented code back into a letter.",
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
      "hint_ko": "반복문에서 각 글자의 순서 번호에 1을 더해 다시 문자로 바꾼 값을 누적한 뒤, 마지막 출력에서 역방향 증감폭 슬라이싱으로 뒤집어 찍어보세요.",
      "hint_en": "Inside the loop, convert each letter's code number plus 1 back into a character and append it, then output the accumulated string sliced in reverse.",
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
      "hint_ko": "첫 빈칸은 시작·끝을 생략한 콜론 두 개 뒤에 간격 2를 적고, 둘째 빈칸은 소수점 기호·자리수 1·고정 소수점(fixed-point) 첫 글자를 이어 적어보세요.",
      "hint_en": "First write two colons followed by step 2 for even indices; second write a dot, digit 1, and the first letter of 'fixed-point' for one decimal place.",
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
      "hint_ko": "글자 판별 메서드가 참일 때만 문자 순서 번호에 k를 더해 다시 문자로 변환해 이어 붙이고, 숫자와 기호는 else 분기에서 원본 그대로 덧붙이세요.",
      "hint_en": "When the alphabetic check passes, shift the character's ordinal code by k and convert back to a character; otherwise concatenate the original character unchanged.",
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
      "hint_ko": "생성자에서는 '위쪽의'를 뜻하는 다섯 글자 대문자 변환 메서드를 호출하고, 서식 자리에는 천 단위 쉼표와 소수점 둘째 자리 고정 소수점(fixed-point 첫 글자) 지정자를 채우세요.",
      "hint_en": "In the constructor call the 5-letter capitalizing method meaning 'higher', and in the f-string combine a comma, dot, 2, and the first letter of 'fixed-point'.",
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
      "hint_ko": "콜론이 하나뿐인 현재 슬라이싱은 끝 위치(-1)만 지정되어 마지막 한 글자를 잘라낼 뿐입니다. 증감폭 자리에 -1이 들어가도록 콜론 개수를 고쳐보세요.",
      "hint_en": "With only a single colon, -1 acts as the stop index and merely drops the last character; add a second colon so -1 sits in the step position.",
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
      "prompt_ko": "두 정수의 평균 avg를 구한 코드 아래에 한 줄을 추가하여 avg를 소수점 둘째 자리까지 서식화해 출력해보세요. (예: 1 2 -> 1.50)",
      "prompt_en": "Add one line below to print avg formatted to 2 decimal places (e.g., 1 2 -> 1.50).",
      "hint_ko": "f-string 중괄호 안에 평균 변수와 콜론을 적고, 소수점 기호·자리수 2·고정 소수점(fixed-point)의 첫 글자를 붙여 출력 함수로 감싸 보세요.",
      "hint_en": "Wrap avg inside an f-string with a colon, dot, digit 2, and the first letter of 'fixed-point', and pass it to the output function.",
      "targetCode": "a, b = input().split()\navg = (int(a) + int(b)) / 2\nprint(f\"{avg:.2f}\")",
      "templateCode": "a, b = input().split()\navg = (int(a) + int(b)) / 2\n§§§§§§§§§§§§§§§§§§§",
      "testCases": [
        {
          "id": 1,
          "input": "10 15",
          "expectedOutput": "12.50"
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
      "hint_ko": "원본 문자열을 역순으로 뒤집은 결과를 먼저 구한 뒤, 그 문자열의 1번 인덱스 글자와 \"A\" 사이의 번호 차이, 2칸 간격 추출 결과, 그리고 천 단위·소수 첫째 자리 서식을 차례로 확인하세요.",
      "hint_en": "First write down the reversed string, then find its index-1 letter's code distance from \"A\", its step-2 characters, and the comma-plus-one-decimal formatted value.",
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
