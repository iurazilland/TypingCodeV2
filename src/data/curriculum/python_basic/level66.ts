import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_66: PracticeRound = {
  "id": "py-basic-r66",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 66,
  "title_ko": "66레벨: 접두·접미사 및 문자 종류 판별 메서드",
  "title_en": "Level 66: Prefix/Suffix & Character Classification Methods",
  "description_ko": ".startswith(), .endswith(), .isdigit(), .isalpha()로 문자열 형식과 문자 구성을 안전하게 검증합니다.",
  "description_en": "Validate prefixes, suffixes, digits, and alphabetic strings using .startswith(), .endswith(), .isdigit(), and .isalpha().",
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
    "try"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] .startswith()와 .endswith()로 파일명의 접두사와 확장자를 검사해보세요.",
      "prompt_en": "[Block] Check whether the filename begins with \"report\" and ends with \".pdf\".",
      "hint_ko": "파일 이름의 머리말이나 확장자(.pdf)가 맞는지 확인할 때 슬라이싱 없이도 직관적으로 검사할 수 있습니다.",
      "hint_en": "These methods let you check file prefixes and extensions like .pdf cleanly without manual slicing.",
      "targetCode": "name = \"report_v1.pdf\"\nprint(name.startswith(\"report\"))\nprint(name.endswith(\".pdf\"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True\nTrue"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 주소가 \"https://\"로 시작하고 \".kr\"로 끝나면 True를 출력하도록 두 메서드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the two methods so True is printed when url begins with \"https://\" and ends with \".kr\".",
      "hint_ko": "시작 여부를 검사하는 startswith와 끝 여부를 검사하는 endswith를 차례로 채워보세요.",
      "hint_en": "Enter startswith for the prefix check and endswith for the suffix check.",
      "targetCode": "url = input().strip()\na = url.startswith(\"https://\")\nb = url.endswith(\".kr\")\nprint(a and b)",
      "templateCode": "url = input().strip()\na = url.§§§§§§§§§§(\"https://\")\nb = url.§§§§§§§§(\".kr\")\nprint(a and b)",
      "testCases": [
        {
          "id": 1,
          "input": "https://a.kr",
          "expectedOutput": "True"
        },
        {
          "id": 2,
          "input": "http://a.kr",
          "expectedOutput": "False"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] .isdigit()와 .isalpha()로 숫자 문자열과 글자 문자열 여부를 각각 판별해보세요.",
      "prompt_en": "[Block] Use .isdigit() and .isalpha() to test whether strings contain only digits or only letters.",
      "hint_ko": "빈 문자열(\"\")이거나 공백·특수기호가 한 글자라도 섞여 있으면 두 메서드 모두 False를 반환합니다.",
      "hint_en": "Both methods return False if the string is empty or contains any whitespace or punctuation.",
      "targetCode": "pin = \"2026\"\ntag = \"Python\"\nprint(pin.isdigit(), tag.isalpha())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True True"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 입력 문자열이 숫자로만 구성되었는지와 글자로만 구성되었는지를 순서대로 출력해보세요.",
      "prompt_en": "[Fill Blank] Print whether s consists purely of digits and purely of letters.",
      "hint_ko": "숫자 여부를 판별하는 isdigit와 알파벳·글자 여부를 판별하는 isalpha를 차례로 적어보세요.",
      "hint_en": "Write isdigit first and isalpha second.",
      "targetCode": "s = input()\nprint(s.isdigit(), s.isalpha())",
      "templateCode": "s = input()\nprint(s.§§§§§§§(), s.§§§§§§§())",
      "testCases": [
        {
          "id": 1,
          "input": "404",
          "expectedOutput": "True False"
        },
        {
          "id": 2,
          "input": "abc",
          "expectedOutput": "False True"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] for문과 f.lower().endswith(\".png\")로 대소문자 구분 없이 이미지 파일만 골라내보세요.",
      "prompt_en": "[Block] Chain f.lower().endswith(\".png\") in a for loop to collect PNG files regardless of case.",
      "hint_ko": "조건 검사에만 f.lower()를 쓰고 imgs.append(f)에는 원본 변수 f를 넣으면 원래 대소문자가 그대로 유지됩니다.",
      "hint_en": "Using f.lower() only in the if test while appending f keeps the original casing intact in the result list.",
      "targetCode": "files = [\"a.PNG\", \"doc.txt\", \"b.png\"]\nimgs = []\nfor f in files:\n    if f.lower().endswith(\".png\"):\n        imgs.append(f)\nprint(\",\".join(imgs))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "a.PNG,b.png"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 공백으로 나눈 토큰 중 숫자로만 이루어진 항목만 정수로 바꿔 합산해보세요.",
      "prompt_en": "[Fill Blank] Sum only the purely numeric tokens from the space-separated input.",
      "hint_ko": "숫자 문자열 판별 메서드 isdigit로 확인한 뒤, 정수 변환 함수 int로 감싸 누적하세요.",
      "hint_en": "Validate numeric tokens with isdigit and convert them using int.",
      "targetCode": "tokens = input().split()\ntotal = 0\nfor t in tokens:\n    if t.isdigit():\n        total += int(t)\nprint(total)",
      "templateCode": "tokens = input().split()\ntotal = 0\nfor t in tokens:\n    if t.§§§§§§§():\n        total += §§§(t)\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "10 py 25 ai",
          "expectedOutput": "35"
        },
        {
          "id": 2,
          "input": "7 8 no",
          "expectedOutput": "15"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] .isdigit()로 양의 정수를 먼저 확인하고 부호 있는 정수는 try - except로 처리해보세요.",
      "prompt_en": "[Block] Check unsigned digits with .isdigit() first and handle signed integers in else with try - except ValueError.",
      "hint_ko": "\"-10\"처럼 부호가 붙은 숫자 문자열은 s.isdigit()가 False이지만 int(s)는 정상적으로 -10을 반환합니다.",
      "hint_en": "A signed string like \"-10\" evaluates to False for s.isdigit(), but int(s) parses it cleanly as -10.",
      "targetCode": "s = input().strip()\nif s.isdigit():\n    print(\"POS\", int(s))\nelse:\n    try:\n        print(\"SIGNED\", int(s))\n    except ValueError:\n        print(\"NAN\")",
      "testCases": [
        {
          "id": 1,
          "input": "25",
          "expectedOutput": "POS 25"
        },
        {
          "id": 2,
          "input": "-10",
          "expectedOutput": "SIGNED -10"
        },
        {
          "id": 3,
          "input": "abc",
          "expectedOutput": "NAN"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 입력이 글자면 대문자로 출력하고 아니면 정수 2배 또는 ERR를 출력하도록 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Print WORD if raw is alphabetic, otherwise try doubling as int or print ERR on ValueError.",
      "hint_ko": "첫 빈칸에는 글자 판별 메서드 isalpha를 적고, 둘째 빈칸에는 정수 변환 예외 ValueError를 적으세요.",
      "hint_en": "Use isalpha in the if condition and catch ValueError in the except clause.",
      "targetCode": "raw = input().strip()\nif raw.isalpha():\n    print(\"WORD\", raw.upper())\nelse:\n    try:\n        print(\"NUM\", int(raw) * 2)\n    except ValueError:\n        print(\"ERR\")",
      "templateCode": "raw = input().strip()\nif raw.§§§§§§§():\n    print(\"WORD\", raw.upper())\nelse:\n    try:\n        print(\"NUM\", int(raw) * 2)\n    except §§§§§§§§§§:\n        print(\"ERR\")",
      "testCases": [
        {
          "id": 1,
          "input": "py",
          "expectedOutput": "WORD PY"
        },
        {
          "id": 2,
          "input": "-15",
          "expectedOutput": "NUM -30"
        },
        {
          "id": 3,
          "input": "12a",
          "expectedOutput": "ERR"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] .startswith(\"ID-\")와 s[3:].isdigit()를 결합해 ID 번호를 파싱하는 함수를 조립해보세요.",
      "prompt_en": "[Block] Combine .startswith(\"ID-\") and s[3:].isdigit() inside parse_id to validate and parse ID strings.",
      "hint_ko": "\"ID-\"가 3글자이므로 인덱스 3부터 끝까지 잘라낸 s[3:]이 숫자 부분에 해당합니다.",
      "hint_en": "Since \"ID-\" is 3 characters long, the slice s[3:] extracts everything after the prefix.",
      "targetCode": "def parse_id(s):\n    if s.startswith(\"ID-\") and s[3:].isdigit():\n        return int(s[3:])\n    return None\n\nres = parse_id(input())\nif res is None:\n    print(\"INVALID\")\nelse:\n    print(res + 1)",
      "testCases": [
        {
          "id": 1,
          "input": "ID-109",
          "expectedOutput": "110"
        },
        {
          "id": 2,
          "input": "ID-1a",
          "expectedOutput": "INVALID"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 길이가 5일 때 앞 2글자는 글자, 뒤 3글자는 숫자인지 판별하는 함수 valid_code를 완성해보세요.",
      "prompt_en": "[Fill Blank] Complete valid_code to return True when s has length 5, first 2 chars letters, and last 3 chars digits.",
      "hint_ko": "앞 두 글자 s[:2]에는 isalpha를, 뒤 세 글자 s[2:]에는 isdigit를 호출하세요.",
      "hint_en": "Call isalpha on s[:2] and isdigit on s[2:].",
      "targetCode": "def valid_code(s):\n    if len(s) == 5:\n        return s[:2].isalpha() and s[2:].isdigit()\n    else:\n        return False\n\nprint(valid_code(input()))",
      "templateCode": "def valid_code(s):\n    if len(s) == 5:\n        return s[:2].§§§§§§§() and s[2:].§§§§§§§()\n    else:\n        return False\n\nprint(valid_code(input()))",
      "testCases": [
        {
          "id": 1,
          "input": "KR105",
          "expectedOutput": "True"
        },
        {
          "id": 2,
          "input": "K1055",
          "expectedOutput": "False"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 파일명이 \"test_\"로 시작하고 \".py\"로 끝날 때 RUN을 출력하도록 뒤바뀐 인자를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the swapped prefix/suffix arguments so files starting with \"test_\" and ending with \".py\" print RUN.",
      "hint_ko": "startswith에는 접두사 \"test_\"를, endswith에는 확장자 \".py\"를 넣도록 두 문자열 인자를 맞바꾸세요.",
      "hint_en": "Swap the two string arguments so startswith checks \"test_\" and endswith checks \".py\".",
      "templateCode": "f = input().strip()\nif f.startswith(\".py\") and f.endswith(\"test_\"):\n    print(\"RUN\")\nelse:\n    print(\"SKIP\")",
      "targetCode": "f = input().strip()\nif f.startswith(\"test_\") and f.endswith(\".py\"):\n    print(\"RUN\")\nelse:\n    print(\"SKIP\")",
      "testCases": [
        {
          "id": 1,
          "input": "test_login.py",
          "expectedOutput": "RUN"
        },
        {
          "id": 2,
          "input": "main.py",
          "expectedOutput": "SKIP"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 숫자 문자열일 때만 정수로 변환해 100을 더해야 하는데 글자 판별 메서드를 쓴 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the character classification method so numeric pin strings are converted to int.",
      "hint_ko": "int(pin) 변환 전에 숫자로만 이루어졌는지 확인해야 하므로 .isalpha()를 .isdigit()로 수정하세요.",
      "hint_en": "Replace .isalpha() with .isdigit() before calling int(pin).",
      "templateCode": "pin = input().strip()\nif pin.isalpha():\n    print(int(pin) + 100)\nelse:\n    print(\"INVALID\")",
      "targetCode": "pin = input().strip()\nif pin.isdigit():\n    print(int(pin) + 100)\nelse:\n    print(\"INVALID\")",
      "testCases": [
        {
          "id": 1,
          "input": "250",
          "expectedOutput": "350"
        },
        {
          "id": 2,
          "input": "abc",
          "expectedOutput": "INVALID"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] s가 \"A\"로 시작하고 뒷부분 s[1:]이 모두 숫자인지 판별해 ok에 저장하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Check whether s starts with \"A\" and s[1:] is all digits, assigning the boolean to ok.",
      "hint_ko": "ok = s.startswith(\"A\") and s[1:].isdigit() 형태로 두 조건을 and로 연결해 ok에 대입하세요.",
      "hint_en": "Write ok = s.startswith(\"A\") and s[1:].isdigit().",
      "targetCode": "s = input().strip()\nok = s.startswith(\"A\") and s[1:].isdigit()\nprint(ok)",
      "templateCode": "s = input().strip()\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(ok)",
      "testCases": [
        {
          "id": 1,
          "input": "A204",
          "expectedOutput": "True"
        },
        {
          "id": 2,
          "input": "A20B",
          "expectedOutput": "False"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 파일명 name이 \".py\"로 끝나는지 판별한 불리언을 변수 is_py에 저장하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Check whether name ends with \".py\" and assign the boolean result to is_py.",
      "hint_ko": "is_py = name.endswith(\".py\") 형태로 접미사 검사 결과를 변수 is_py에 저장하세요.",
      "hint_en": "Write is_py = name.endswith(\".py\").",
      "targetCode": "name = input().strip()\nis_py = name.endswith(\".py\")\nprint(is_py)",
      "templateCode": "name = input().strip()\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(is_py)",
      "testCases": [
        {
          "id": 1,
          "input": "app.py",
          "expectedOutput": "True"
        },
        {
          "id": 2,
          "input": "app.js",
          "expectedOutput": "False"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 .isdigit()와 .isalpha() 판별 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following Python code.",
      "hint_ko": "음수 부호(-)나 숫자와 알파벳이 섞인 문자열은 두 판별 메서드에서 모두 거짓이 된다는 점을 기억하세요.",
      "hint_en": "Remember that minus signs and mixed alphanumeric tokens fail both checks.",
      "targetCode": "items = [\"120\", \"-5\", \"py3\", \"AI\", \"07\"]\na, b = 0, 0\nfor x in items:\n    if x.isdigit():\n        a += 1\n    elif x.isalpha():\n        b += 1\nprint(a, b)",
      "choices": [
        "2 1",
        "3 1",
        "2 2",
        "3 2"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2 1"
        }
      ]
    }
  ]
};
