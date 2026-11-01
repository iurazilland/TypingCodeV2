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
    "try"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "변수 name에 \"report_v1.pdf\"를 담고, \"report\"로 시작하는지와 \".pdf\"로 끝나는지를 각각 출력해보세요.",
      "prompt_en": "Store \"report_v1.pdf\" in name, then print whether it starts with \"report\" and ends with \".pdf\".",
      "hint_ko": ".startswith(\"접두사\")와 .endswith(\"접미사\")는 조건 일치 여부를 True 또는 False로 반환합니다.",
      "hint_en": ".startswith() and .endswith() return True or False.",
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
      "prompt_ko": "공백을 지운 주소가 \"https://\"로 시작하고 \".kr\"로 끝나면 True를 출력하도록 두 메서드를 채워보세요. (예: https://a.kr -> True)",
      "prompt_en": "Fill in the two methods so True is printed when url begins with \"https://\" and ends with \".kr\".",
      "hint_ko": "시작 문자열 검사는 .startswith(\"https://\"), 끝 문자열 검사는 .endswith(\".kr\")을 사용합니다.",
      "hint_en": "Use .startswith(\"https://\") for the prefix and .endswith(\".kr\") for the suffix.",
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
      "prompt_ko": "변수 pin(\"2026\")이 숫자로만 이루어졌는지와 tag(\"Python\")가 글자로만 이루어졌는지를 한 줄에 출력해보세요. (출력 예: True True)",
      "prompt_en": "Print whether pin (\"2026\") is all digits and tag (\"Python\") is all letters on one line (e.g., True True).",
      "hint_ko": ".isdigit()는 모든 문자가 숫자인지, .isalpha()는 모든 문자가 글자(알파벳 등)인지 판별합니다.",
      "hint_en": "Use pin.isdigit() and tag.isalpha() inside print().",
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
      "prompt_ko": "입력 문자열이 숫자만으로 구성되었는지와 글자만으로 구성되었는지를 순서대로 출력해보세요. (예: 404 -> True False)",
      "prompt_en": "Print whether s consists purely of digits and purely of letters, separated by a space (e.g., 404 -> True False).",
      "hint_ko": "숫자 판별은 s.isdigit(), 문자 판별은 s.isalpha()를 차례대로 호출합니다.",
      "hint_en": "Call s.isdigit() first and s.isalpha() second.",
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
      "prompt_ko": "파일 리스트 files에서 대소문자 구분 없이 \".png\"로 끝나는 항목만 imgs에 모아 쉼표(,)로 이어 출력해보세요. (출력 예: a.PNG,b.png)",
      "prompt_en": "Filter files ending with \".png\" (case-insensitive) into imgs and print them joined by \",\" (e.g., a.PNG,b.png).",
      "hint_ko": "f.lower().endswith(\".png\")가 참인 파일만 imgs.append(f)로 담고 \",\".join(imgs)를 출력합니다.",
      "hint_en": "Check if f.lower().endswith(\".png\"): and append f to imgs.",
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
      "prompt_ko": "공백을 제거한 입력이 숫자 문자열이면 정수로 변환해 2배를 출력하고, 아니면 \"ERR\"를 출력해보세요. (예: 35 -> 70)",
      "prompt_en": "If stripped input contains only digits, convert to integer and print double; otherwise print \"ERR\" (e.g., 35 -> 70).",
      "hint_ko": "raw.isdigit()로 먼저 확인한 뒤 int(raw) * 2를 실행하면 에러 없이 안전하게 변환할 수 있습니다.",
      "hint_en": "Check raw.isdigit() before calling int(raw) * 2.",
      "targetCode": "raw = input().strip()\nif raw.isdigit():\n    print(int(raw) * 2)\nelse:\n    print(\"ERR\")",
      "templateCode": "raw = input().strip()\nif raw.§§§§§§§():\n    print(§§§(raw) * 2)\nelse:\n    print(\"ERR\")",
      "testCases": [
        {
          "id": 1,
          "input": "35",
          "expectedOutput": "70"
        },
        {
          "id": 2,
          "input": "12a",
          "expectedOutput": "ERR"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "입력이 숫자만으로 된 양수면 \"POS 값\", 음수 등 부호 있는 정수면 try-except로 \"SIGNED 값\", 아니면 \"NAN\"을 출력해보세요.",
      "prompt_en": "Print \"POS n\" if s.isdigit(), else try printing \"SIGNED n\" via int(s), or \"NAN\" on ValueError.",
      "hint_ko": "\"-10\"은 \"-\" 기호 때문에 .isdigit()가 False가 되지만 try 블록의 int(s)에서는 정수로 정상 변환됩니다.",
      "hint_en": "\"-10\".isdigit() is False due to \"-\", whereas int(s) inside try-except parses signed integers.",
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
      "prompt_ko": "공백으로 나눈 토큰 중 글자로만 된 개수와 숫자로만 된 개수를 딕셔너리 stats에 누적해 출력해보세요. (예: py 10 ! -> 1 1)",
      "prompt_en": "Count purely alphabetic and purely numeric tokens in stats and print both counts (e.g., py 10 ! -> 1 1).",
      "hint_ko": "글자 토큰은 t.isalpha(), 숫자 토큰은 t.isdigit()로 각각 판별하여 딕셔너리 값을 1씩 증가시킵니다.",
      "hint_en": "Use t.isalpha() for \"word\" and t.isdigit() for \"num\".",
      "targetCode": "stats = {\"word\": 0, \"num\": 0}\nfor t in input().split():\n    if t.isalpha():\n        stats[\"word\"] += 1\n    elif t.isdigit():\n        stats[\"num\"] += 1\nprint(stats[\"word\"], stats[\"num\"])",
      "templateCode": "stats = {\"word\": 0, \"num\": 0}\nfor t in input().split():\n    if t.§§§§§§§():\n        stats[\"word\"] += 1\n    elif t.§§§§§§§():\n        stats[\"num\"] += 1\nprint(stats[\"word\"], stats[\"num\"])",
      "testCases": [
        {
          "id": 1,
          "input": "py 100 ai 20 !",
          "expectedOutput": "2 2"
        },
        {
          "id": 2,
          "input": "hello world 7",
          "expectedOutput": "2 1"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "입력이 \"ID-\"로 시작하고 뒷부분이 숫자면 정수에 1을 더해 출력하고, 아니면 None을 반환해 \"INVALID\"를 출력해보세요. (예: ID-9 -> 10)",
      "prompt_en": "Return int(s[3:]) if s starts with \"ID-\" and s[3:] is digits, else None; print res + 1 or \"INVALID\".",
      "hint_ko": "parse_id 함수에서 조건 불일치 시 return None을 수행하고 바깥에서 if res is None:으로 검사합니다.",
      "hint_en": "Return None when invalid and check if res is None: in the caller.",
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
      "prompt_ko": "길이가 5이면서 앞 2글자는 글자, 뒤 3글자는 숫자인지 판별해 불리언을 돌려주는 함수 valid_code를 완성해보세요. (예: KR105 -> True)",
      "prompt_en": "Complete valid_code to return True when s has length 5, first 2 chars letters, and last 3 chars digits.",
      "hint_ko": "슬라이싱과 논리 연산자를 결합해 return s[:2].isalpha() and s[2:].isdigit()를 작성합니다.",
      "hint_en": "Return s[:2].isalpha() and s[2:].isdigit().",
      "targetCode": "def valid_code(s):\n    if len(s) != 5:\n        return False\n    return s[:2].isalpha() and s[2:].isdigit()\n\nprint(valid_code(input()))",
      "templateCode": "def valid_code(s):\n    if len(s) != 5:\n        return False\n    §§§§§§ s[:2].§§§§§§§() and s[2:].§§§§§§§()\n\nprint(valid_code(input()))",
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
      "prompt_ko": "파일명이 \"test_\"로 시작하고 \".py\"로 끝날 때 \"RUN\", 아니면 \"SKIP\"을 출력하도록 접두·접미 인자 버그를 고쳐보세요.",
      "prompt_en": "Fix the swapped prefix/suffix arguments so files starting with \"test_\" and ending with \".py\" print \"RUN\".",
      "hint_ko": "시작 검사는 f.startswith(\"test_\"), 끝 검사는 f.endswith(\".py\")가 되어야 합니다.",
      "hint_en": "Pass \"test_\" to f.startswith() and \".py\" to f.endswith().",
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
      "kind": "one_line",
      "prompt_ko": "공백을 제거한 문자열 s 아래에 한 줄을 추가하여 s가 \"A\"로 시작하고 나머지 뒷부분이 모두 숫자인지 불리언을 출력해보세요.",
      "prompt_en": "Add one line below to print whether s starts with \"A\" and the remaining substring s[1:] is all digits.",
      "hint_ko": "둘째 줄에 print(s.startswith(\"A\") and s[1:].isdigit())를 작성해보세요.",
      "hint_en": "Write print(s.startswith(\"A\") and s[1:].isdigit()) on line 2.",
      "targetCode": "s = input().strip()\nprint(s.startswith(\"A\") and s[1:].isdigit())",
      "templateCode": "s = input().strip()\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
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
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 파이썬 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "Select the exact output of the following Python code.",
      "hint_ko": "\"-5\"는 부호 때문에, \"py3\"은 숫자가 섞여 둘 다 False입니다. 숫자만 있는 \"120\", \"07\"(2개)과 글자만 있는 \"AI\"(1개)만 집계됩니다.",
      "hint_en": "\"120\" and \"07\" pass .isdigit() (a=2); \"AI\" passes .isalpha() (b=1); \"-5\" and \"py3\" fail both.",
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
