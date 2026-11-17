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
  "totalQuestions": 15,
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] f-string 서식 지정자 :.2f와 :,로 소수점 둘째 자리와 천 단위 쉼표를 표시해보세요.",
      "prompt_en": "[Block] Format avg to 2 decimal places with :.2f and price with thousands commas using :,.",
      "hint_ko": "서식 지정자의 f는 고정 소수점(fixed-point)을 뜻하며, 앞의 숫자(.2)로 표시할 소수점 자릿수를 정합니다.",
      "hint_en": "The f in :.2f stands for fixed-point notation, and .2 specifies two digits after the decimal point.",
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
      "prompt_ko": "[빈칸 채우기] 금액에 천 단위 쉼표와 소수점 둘째 자리 서식을 함께 적용해 출력해보세요.",
      "prompt_en": "[Fill Blank] Format val with thousands commas and 2 decimal places prefixed by \"$\".",
      "hint_ko": "콜론 뒤에 세 자리 구분 쉼표와 소수점 둘째 자리 서식 ,.2f를 나란히 붙여 적어보세요.",
      "hint_en": "After the colon, write ,.2f for thousands commas and 2 decimal places.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 슬라이싱 [::-1]로 문자열을 역순으로 뒤집고 [::2]로 2칸 간격 문자를 추출해보세요.",
      "prompt_en": "[Block] Use [::-1] to reverse the string and [::2] to extract every second character.",
      "hint_ko": "콜론 두 개(::)는 시작과 끝 인덱스를 생략해 문자열 처음부터 끝까지 전체 범위를 선택한다는 뜻입니다.",
      "hint_en": "Two colons (::) omit start and stop so the step applies across the entire string.",
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
      "prompt_ko": "[빈칸 채우기] 소문자로 통일한 입력 문자열이 앞뒤가 같은 회문인지 불리언으로 출력해보세요.",
      "prompt_en": "[Fill Blank] Check whether lowercased input s is a palindrome and print True or False.",
      "hint_ko": "대괄호 안에 콜론 두 개와 역방향 증감폭 -1을 적은 ::-1로 뒤집힌 문자열과 비교하세요.",
      "hint_en": "Inside the brackets, write ::-1 to reverse the string.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] ord(\"A\")로 문자 코드 번호를 구하고 chr(code + 1)로 다음 알파벳을 출력해보세요.",
      "prompt_en": "[Block] Get the character code of \"A\" with ord() and convert code + 1 back to a character with chr().",
      "hint_ko": "대문자 \"A\"의 코드 번호(65)에 1을 더한 뒤 chr()에 넣으면 바로 다음 알파벳인 \"B\"가 됩니다.",
      "hint_en": "Adding 1 to the code of \"A\" (65) and passing it to chr() yields the next letter in the alphabet, \"B\".",
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
      "prompt_ko": "[빈칸 채우기] 입력 대문자가 \"A\"로부터 몇 칸 떨어졌는지와 다음 알파벳을 출력해보세요.",
      "prompt_en": "[Fill Blank] Print how far uppercase ch is from \"A\" and the next uppercase letter.",
      "hint_ko": "문자를 번호로 바꿀 때는 ord 함수를, 더해진 번호를 다시 문자로 바꿀 때는 chr 함수를 채워보세요.",
      "hint_en": "Use ord to get the character code on line 2, and chr to convert the incremented code back to a letter on line 3.",
      "targetCode": "ch = input()\npos = ord(ch) - ord(\"A\")\nnxt = chr(ord(ch) + 1)\nprint(pos, nxt)",
      "templateCode": "ch = input()\npos = §§§(ch) - ord(\"A\")\nnxt = §§§(ord(ch) + 1)\nprint(pos, nxt)",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 반복문에서 chr(ord(c) + 1)로 글자를 한 칸씩 밀고 [::-1]로 뒤집어 출력해보세요.",
      "prompt_en": "[Block] Shift each character by +1 with chr(ord(c) + 1) in a loop and reverse the result with [::-1].",
      "hint_ko": "문자열을 먼저 .upper()로 대문자 통일한 뒤 문자 코드를 이동시키고, 출력할 때 [::-1]로 순서를 뒤집습니다.",
      "hint_en": "Normalize the input with .upper() before shifting character codes, then reverse the accumulated string with [::-1].",
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
      "prompt_ko": "[빈칸 채우기] 짝수 인덱스 문자만 추린 문자열과 전체 대비 백분율(소수 첫째 자리)을 출력해보세요.",
      "prompt_en": "[Fill Blank] Extract even-index characters and print them with their percentage to 1 decimal place.",
      "hint_ko": "첫 빈칸은 2칸 간격 슬라이싱 ::2를 적고, 둘째 빈칸은 소수 첫째 자리 서식 .1f를 적어보세요.",
      "hint_en": "Write ::2 for even indices in the first blank and .1f for one decimal place in the second blank.",
      "targetCode": "code = input()\neven = code[::2]\ncnt = 0\nfor c in even:\n    cnt += 1\nratio = cnt / len(code) * 100\nprint(f\"{even} ({ratio:.1f}%)\")",
      "templateCode": "code = input()\neven = code[§§§]\ncnt = 0\nfor c in even:\n    cnt += 1\nratio = cnt / len(code) * 100\nprint(f\"{even} ({ratio:§§§}%)\")",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 함수 안에서 c.isalpha()로 알파벳일 때만 문자 코드를 k칸 이동시키는 블록을 조립해보세요.",
      "prompt_en": "[Block] Check c.isalpha() inside shift_word to shift only letters via chr(ord(c) + k) while keeping symbols intact.",
      "hint_ko": "빈 문자열 out = \"\"을 준비해 조건에 따라 변환된 문자 또는 원본 문자를 +=로 한 글자씩 이어 붙인 뒤 반환합니다.",
      "hint_en": "Start with an empty string out = \"\", append either the shifted letter or original character each iteration, and return out.",
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
      "prompt_ko": "[빈칸 채우기] 알파벳일 때만 바로 이전 글자(코드 번호 -1)로 바꾸어 반환하는 함수 prev_letters를 완성해보세요.",
      "prompt_en": "[Fill Blank] Complete prev_letters so alphabetic characters shift backward by 1 while other characters stay unchanged.",
      "hint_ko": "안쪽 빈칸에서 ord(c)로 문자 번호를 구해 1을 빼고, 바깥쪽 빈칸에서 chr로 다시 문자로 변환하세요.",
      "hint_en": "Call ord(c) inside to get the code, subtract 1, and wrap it with chr outside.",
      "targetCode": "def prev_letters(s):\n    out = \"\"\n    for c in s:\n        if c.isalpha():\n            out += chr(ord(c) - 1)\n        else:\n            out += c\n    return out\n\nprint(prev_letters(\"B-9\"))",
      "templateCode": "def prev_letters(s):\n    out = \"\"\n    for c in s:\n        if c.isalpha():\n            out += §§§(§§§(c) - 1)\n        else:\n            out += c\n    return out\n\nprint(prev_letters(\"B-9\"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "A-9"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 대문자 문자열을 역순으로 뒤집어야 하는데 슬라이싱 증감폭 부호가 잘못된 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the slicing step sign bug so tag is reversed from back to front.",
      "hint_ko": "문자열 전체를 역방향으로 뒤집으려면 증감폭 자리에 +1이 아니라 -1을 넣어야 합니다.",
      "hint_en": "Change the step in tag[::+1] to -1 (tag[::-1]) to reverse the string.",
      "templateCode": "tag = input().strip().upper()\nrev = tag[::+1]\nprint(f\"{tag}->{rev}\")",
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
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 문자 \"D\"의 다음 알파벳 \"E\"를 구하려다 ord와 chr의 호출 순서가 뒤바뀐 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the swapped ord() and chr() calls so the next letter after \"D\" is printed.",
      "hint_ko": "안쪽에서 ord(ch)로 먼저 정수 번호를 구해 1을 더한 뒤, 바깥쪽에서 chr()로 감싸 문자로 바꿔야 합니다.",
      "hint_en": "Call ord(ch) on the inside before adding 1, and wrap the sum in chr() on the outside.",
      "templateCode": "ch = \"D\"\nnxt = ord(chr(ch) + 1)\nprint(nxt)",
      "targetCode": "ch = \"D\"\nnxt = chr(ord(ch) + 1)\nprint(nxt)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "E"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 평균 avg를 소수점 둘째 자리까지 서식화한 f-string을 변수 msg에 저장하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Format avg to 2 decimal places using an f-string and assign it to msg.",
      "hint_ko": "msg = f\"{avg:.2f}\" 형태로 소수점 둘째 자리 서식 문자열을 변수 msg에 대입하세요.",
      "hint_en": "Write msg = f\"{avg:.2f}\" to store the formatted string.",
      "targetCode": "a, b = input().split()\navg = (int(a) + int(b)) / 2\nmsg = f\"{avg:.2f}\"\nprint(msg)",
      "templateCode": "a, b = input().split()\navg = (int(a) + int(b)) / 2\n§§§§§§§§§§§§§§§§§§\nprint(msg)",
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
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 문자열 word를 역순 슬라이싱([::-1])으로 뒤집어 변수 rev에 저장하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Reverse word using [::-1] slicing and assign it to rev.",
      "hint_ko": "rev = word[::-1] 형태로 역순 슬라이싱 결과를 변수 rev에 저장하세요.",
      "hint_en": "Write rev = word[::-1] to store the reversed string.",
      "targetCode": "word = input().strip()\nrev = word[::-1]\nprint(rev)",
      "templateCode": "word = input().strip()\n§§§§§§§§§§§§§§§§\nprint(rev)",
      "testCases": [
        {
          "id": 1,
          "input": "flow",
          "expectedOutput": "wolf"
        },
        {
          "id": 2,
          "input": "py",
          "expectedOutput": "yp"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 역순 슬라이싱, ord(), f-string 서식 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following Python code.",
      "hint_ko": "문자열을 뒤집은 \"GECA\"에서 1번 글자 \"E\"와 \"A\"의 코드 차이, 2칸 간격 추출, 천 단위·소수 첫째 자리 서식을 확인하세요.",
      "hint_en": "Reverse \"ACEG\" to \"GECA\", find ord(\"E\") - ord(\"A\"), slice rev[::2], and format 1200.5 with :,.1f.",
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
