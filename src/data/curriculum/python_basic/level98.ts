import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_98: PracticeRound = {
  "id": "py-basic-r98",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 98,
  "title_ko": "간격·역순 슬라이싱(s[::2], s[::-1])과 아스키 문자 코드(ord(), chr())",
  "title_en": "Step/Reverse Slicing (s[::2], s[::-1]) & Character Codes (ord, chr)",
  "description_ko": "세 번째 슬라이싱 인자(간격 step)로 건너뛰기(s[::2])와 뒤집기(s[::-1])를 수행하고, ord()와 chr()로 아스키 문자 코드를 다룹니다.",
  "description_en": "Slice sequences with step and reverse (s[::2], s[::-1]) and convert between characters and codes with ord() and chr().",
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
      "prompt_ko": "[블록 조립] 슬라이싱 간격(step)을 활용해 s[::2]로 짝수 인덱스 글자들을, s[1::2]로 홀수 인덱스 글자들을 추출해보세요.",
      "prompt_en": "[Block] Use step slicing s[::2] and s[1::2] to extract even-indexed and odd-indexed characters.",
      "hint_ko": "[시작:끝:간격]에서 시작과 끝을 비워두면 처음부터 끝까지 지정한 간격만큼 건너뛰며 추출합니다.",
      "hint_en": "In [start:stop:step], omitting stop extracts every step-th character through the end of the string.",
      "targetCode": "s = \"ABCDEF\"\nprint(s[::2])\nprint(s[1::2])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "ACE\nBDF"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 문자열 처음부터 끝까지 2칸 간격으로 건너뛰며(0, 2, 4번 인덱스) 추출하도록 슬라이싱 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the slice expression to extract every second character from start to end.",
      "hint_ko": "시작과 끝을 생략한 콜론 두 개 뒤에 간격 2를 붙여 ::2를 대괄호 안에 적으세요.",
      "hint_en": "Write two colons followed by the step size 2 inside the brackets.",
      "targetCode": "code = input().strip()\nprint(code[::2])",
      "templateCode": "code = input().strip()\nprint(code[§§§§])",
      "testCases": [
        {
          "id": 1,
          "input": "P1Y2T3",
          "expectedOutput": "PYT"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 음수 간격 슬라이싱 s[::-1]로 문자열을 거꾸로 뒤집고, 원본과 비교해 회문(Palindrome)인지 출력해보세요.",
      "prompt_en": "[Block] Reverse the string with s[::-1] and print the reversed string along with whether it is a palindrome.",
      "hint_ko": "간격 자리에 -1을 넣으면 뒤에서 앞으로 한 글자씩 읽어 뒤집힌 새 문자열을 반환합니다.",
      "hint_en": "A step of -1 reads the string from back to front, returning a reversed copy.",
      "targetCode": "s = \"level\"\nrev = s[::-1]\nprint(rev, s == rev)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "level True"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 소문자로 통일한 입력 단어가 앞뒤가 똑같은 회문인지 비교하도록 역순 슬라이싱을 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the reverse slice inside the brackets to check if the lowercased word is a palindrome.",
      "hint_ko": "전체 범위를 역방향(-1 간격)으로 뒤집는 슬라이싱 표현을 대괄호 안에 적으세요.",
      "hint_en": "Enter the 4-character slice notation that reverses the entire string with a step of -1.",
      "targetCode": "w = input().strip().lower()\nprint(w == w[::-1])",
      "templateCode": "w = input().strip().lower()\nprint(w == w[§§§§§])",
      "testCases": [
        {
          "id": 1,
          "input": "Radar",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 내장 함수 ord()로 대문자 \"A\"와 소문자 \"a\"의 아스키(유니코드) 코드 번호를 각각 출력해보세요.",
      "prompt_en": "[Block] Use the built-in ord() function to print the character code numbers of \"A\" and \"a\".",
      "hint_ko": "ord()는 한 글자 문자를 받아 그에 대응하는 정수 번호(\"A\"는 65, \"a\"는 97)를 반환합니다.",
      "hint_en": "ord() takes a single character and returns its integer Unicode/ASCII code point (65 for \"A\", 97 for \"a\").",
      "targetCode": "print(ord(\"A\"))\nprint(ord(\"a\"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "65\n97"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 입력받은 대문자 알파벳이 \"A\"로부터 몇 번째 뒤인지(0부터 시작) 구하도록 문자 코드 함수를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the built-in function to get the character code of ch and subtract the code of \"A\".",
      "hint_ko": "문자의 순서 번호(ordinal)를 정수로 돌려주는 내장 함수를 입력하세요.",
      "hint_en": "Type the built-in function (from 'ordinal') that returns a character's integer code.",
      "targetCode": "ch = input().strip()\nprint(ord(ch) - ord(\"A\"))",
      "templateCode": "ch = input().strip()\nprint(§§§§(ch) - ord(\"A\"))",
      "testCases": [
        {
          "id": 1,
          "input": "A",
          "expectedOutput": "0"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] chr(65)로 코드 번호를 문자로 바꾸고, chr(ord(ch) + 1)로 다음 알파벳 문자를 구해 출력해보세요.",
      "prompt_en": "[Block] Convert code 65 to a character with chr(65) and compute the next letter after ch with chr(ord(ch) + 1).",
      "hint_ko": "ord()로 구한 번호에 1을 더한 뒤 chr()에 넣으면 알파벳 순서상 바로 다음 글자가 됩니다.",
      "hint_en": "Adding 1 to ord(ch) and passing it to chr() yields the next character in the alphabet.",
      "targetCode": "ch = \"C\"\nnxt = chr(ord(ch) + 1)\nprint(chr(65), nxt)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "A D"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 입력 문자의 아스키 코드에 2를 더해 두 칸 뒤의 알파벳 문자로 변환해 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the built-in function that converts the shifted integer code back into a character.",
      "hint_ko": "정수 코드 번호를 다시 문자(character)로 바꾸는 내장 함수를 적으세요.",
      "hint_en": "Enter the built-in function that converts an integer code point back to a character.",
      "targetCode": "ch = input().strip()\nprint(chr(ord(ch) + 2))",
      "templateCode": "ch = input().strip()\nprint(§§§§(ord(ch) + 2))",
      "testCases": [
        {
          "id": 1,
          "input": "A",
          "expectedOutput": "C"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 빈칸 2곳을 채워 단어의 각 글자를 다음 알파벳(+1)으로 바꾼 뒤 전체 순서를 거꾸로 뒤집어 출력해보세요.",
      "prompt_en": "[Fill Blank] Shift each character in word forward by 1 using character code functions, join them, and print in reverse.",
      "hint_ko": "문자를 아스키 코드 번호로 바꾸는 함수(ord)와 문자열 역순 슬라이싱(::-1)을 차례로 채우세요.",
      "hint_en": "Fill in the code-to-char function, the char-to-code function, and the reverse slice.",
      "targetCode": "word = \"ABC\"\nshifted = \"\".join([chr(ord(c) + 1) for c in word])\nprint(shifted[::-1])",
      "templateCode": "word = \"ABC\"\nshifted = \"\".join([chr(§§§§(c) + 1) for c in word])\nprint(shifted[§§§§§])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "DCB"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 문자열 전체를 거꾸로 뒤집어 출력하도록 잘못된 슬라이싱(s[0:-1])을 역순 슬라이싱(s[::-1])으로 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the slice bug where [:-1] drops the last character instead of reversing the string.",
      "hint_ko": "[0:-1]은 마지막 한 글자만 자르는 슬라이싱이며, 역순으로 뒤집으려면 [::-1]을 써야 합니다.",
      "hint_en": "Use two colons [::-1] to specify a step of -1 instead of the stop index [:-1].",
      "templateCode": "s = input().strip()\nprint(s[0:-1])",
      "targetCode": "s = input().strip()\nprint(s[::-1])",
      "testCases": [
        {
          "id": 1,
          "input": "FLOW",
          "expectedOutput": "WOLF"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 문자 \"B\"의 다음 알파벳 \"C\"를 구하려다 두 문자 코드 함수의 호출 순서가 뒤바뀐 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the TypeError caused by swapping the inner and outer character code conversion functions.",
      "hint_ko": "안쪽에서 문자를 먼저 정수 번호로 바꿔 1을 더한 뒤, 바깥쪽에서 다시 문자로 변환해야 합니다.",
      "hint_en": "Convert the character to an integer code on the inside before adding 1, and convert back to a character on the outside.",
      "templateCode": "ch = \"B\"\nprint(ord(chr(ch) + 1))",
      "targetCode": "ch = \"B\"\nprint(chr(ord(ch) + 1))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "C"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 문자열 s와 역순 슬라이싱 s[::-1]이 같은지(s == s[::-1]) 비교해 변수 is_pal에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Check whether s equals its reverse and assign the boolean result to is_pal.",
      "hint_ko": "is_pal = s == s[::-1] 형태로 원본과 역순 슬라이싱 결과를 비교해 저장하세요.",
      "hint_en": "Write is_pal = s == s[::-1] on the masked line.",
      "targetCode": "s = input().strip().lower()\nis_pal = s == s[::-1]\nprint(is_pal)",
      "templateCode": "s = input().strip().lower()\n§§§§§§§§§§§§§§§§§§§§§§\nprint(is_pal)",
      "testCases": [
        {
          "id": 1,
          "input": "Civic",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] ord(ch)에 1을 더한 뒤 chr()로 변환해 다음 알파벳 문자를 변수 nxt에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Compute the next character after ch using ord() and chr(), assigning it to nxt.",
      "hint_ko": "nxt = chr(ord(ch) + 1) 형태로 코드 번호에 1을 더해 문자로 변환하세요.",
      "hint_en": "Write nxt = chr(ord(ch) + 1) on the masked line.",
      "targetCode": "ch = input().strip()\nnxt = chr(ord(ch) + 1)\nprint(nxt)",
      "templateCode": "ch = input().strip()\n§§§§§§§§§§§§§§§§§§§§§§§\nprint(nxt)",
      "testCases": [
        {
          "id": 1,
          "input": "M",
          "expectedOutput": "N"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 간격 슬라이싱(s[1::2]), 역순 슬라이싱([::-1]), 문자 코드 연산이 결합된 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the code combining step slicing, reverse slicing, and chr/ord.",
      "hint_ko": "1번 인덱스부터 2칸씩 건너뛴 \"BDF\"를 뒤집으면 무엇이 되는지, 그리고 \"A\"에서 3칸 뒤 알파벳이 무엇인지 확인하세요.",
      "hint_en": "Find s[1::2] (\"BDF\"), reverse it with [::-1], and compute chr(ord(\"A\") + 3).",
      "targetCode": "s = \"ABCDEF\"\nsub = s[1::2][::-1]\ntag = chr(ord(\"A\") + 3)\nprint(f\"{sub}-{tag}\")",
      "choices": [
        "FDB-D",
        "ECA-D",
        "BDF-C",
        "FDB-C"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "FDB-D"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 리스트 컴프리헨션, 회문 판별, 문자 코드 차이를 결합한 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the code filtering palindromes and summing character offsets.",
      "hint_ko": "소문자로 바꿨을 때 회문인 단어만 골라 첫 글자와 \"a\"의 코드 번호 차이를 합산합니다.",
      "hint_en": "Keep words that are palindromes when lowercased, then sum ord(w[0]) - ord(\"a\") for those words.",
      "targetCode": "words = [\"Level\", \"Py\", \"Civic\", \" Noon \"]\npals = [w.strip().lower() for w in words if w.strip().lower() == w.strip().lower()[::-1]]\ndiff = sum([ord(p[0]) - ord(\"a\") for p in pals])\nprint(len(pals), pals[1], diff)",
      "choices": [
        "3 civic 26",
        "3 py 26",
        "2 civic 13",
        "3 civic 29"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 civic 26"
        }
      ]
    }
  ]
};
