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
      "prompt_ko": "[블록 조립] 슬라이싱 간격(step)을 활용해 문자열 s에서 짝수 인덱스 글자들과 홀수 인덱스 글자들을 각각 추출해 출력해보세요.",
      "prompt_en": "[Block] Use step slicing to extract and print the even-indexed and odd-indexed characters from string s.",
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
      "prompt_ko": "[빈칸 채우기] 입력 문자열의 처음부터 끝까지 2칸 간격으로 글자를 추출하도록 슬라이싱 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the slice expression to extract every second character from the input string.",
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
      "prompt_ko": "[블록 조립] 음수 간격 슬라이싱으로 문자열을 거꾸로 뒤집고, 원본과 비교해 회문(Palindrome)인지 함께 출력해보세요.",
      "prompt_en": "[Block] Reverse the string using negative step slicing and print the reversed string along with whether it is a palindrome.",
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
      "prompt_ko": "[블록 조립] 문자 코드 변환 내장 함수로 대문자 \"A\"와 소문자 \"a\"의 아스키 코드 번호를 각각 출력해보세요.",
      "prompt_en": "[Block] Use the built-in character code function to print the ASCII code numbers of \"A\" and \"a\".",
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
      "prompt_ko": "[빈칸 채우기] 입력받은 대문자 알파벳이 \"A\"로부터 몇 칸 뒤에 있는지 구하도록 문자 코드 함수를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the built-in function to calculate how many positions ch is after \"A\".",
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
      "prompt_ko": "[블록 조립] 아스키 코드 번호 65에 해당하는 문자와 변수 ch의 다음 알파벳 문자를 구해 나란히 출력해보세요.",
      "prompt_en": "[Block] Convert character code 65 to a letter and compute the next alphabetical letter after ch, then print both.",
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
      "prompt_ko": "[빈칸 채우기] 단어를 한 칸씩 다음 알파벳으로 밀고 역순으로 뒤집어 암호화하는 코드의 빈칸 2곳을 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the two blanks to encrypt the word by shifting each letter forward and reversing the result.",
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
      "prompt_ko": "[틀린 곳 수정] 입력받은 문자열 전체가 거꾸로 뒤집혀 출력되도록 잘못된 슬라이싱 표현을 찾아 고쳐보세요.",
      "prompt_en": "[Fix Bug] Find and fix the slicing bug so that the entire input string is printed in reverse.",
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
      "prompt_ko": "[틀린 곳 수정] 변수 ch의 바로 다음 알파벳 문자를 구해 출력하도록 코드의 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Find and fix the bug so the code prints the letter immediately following ch.",
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
      "prompt_ko": "[한 줄 완성] 문자열 s가 앞뒤가 똑같은 회문인지 비교한 불리언 결과를 변수 is_pal에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Check whether s reads the same backward as forward and store the boolean result in is_pal.",
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
      "prompt_ko": "[한 줄 완성] 문자 ch의 아스키 코드 번호를 이용해 알파벳 순서상 바로 다음 문자를 구해 변수 nxt에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Compute the next alphabetical character after ch using character code conversion and store it in nxt.",
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
      "prompt_ko": "[출력 결과 예측] 리스트 컴프리헨션, 회문 판별, 아스키 문자 이동을 결합한 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the code filtering palindromes and shifting a character code.",
      "hint_ko": "공백 제거 및 소문자 변환 후 회문인 단어는 \"level\", \"civic\", \"noon\" 3개이며, \"A\"에서 3칸 뒤 알파벳은 \"D\"입니다.",
      "hint_en": "There are 3 palindromes (\"level\", \"civic\", \"noon\"), and shifting \"A\" by 3 yields \"D\".",
      "targetCode": "words = [\"Level\", \"Py\", \"Civic\", \" Noon \"]\npals = [w.strip().lower() for w in words if w.strip().lower() == w.strip().lower()[::-1]]\ncode = chr(ord(\"A\") + len(pals))\nprint(len(pals), pals[1], code)",
      "choices": [
        "3 civic D",
        "3 py D",
        "2 civic C",
        "3 civic C"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 civic D"
        }
      ]
    }
  ]
};
