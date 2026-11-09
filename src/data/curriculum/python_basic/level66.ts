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
      "hint_ko": "'~로 시작한다(starts + with)'와 '~로 끝난다(ends + with)'를 띄어쓰기 없이 이어 쓴 두 문자열 메서드는 각각 접두사·접미사 일치 여부를 불리언으로 돌려줍니다.",
      "hint_en": "Combine 'starts' or 'ends' (keeping the third-person 's') with 'with' into single-word methods to test a string's prefix and suffix.",
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
      "prompt_ko": "공백을 지운 주소가 \"https://\"로 시작하고 \".kr\"로 끝나면 True를 출력하도록 두 메서드를 채워보세요. (터미널 입력: https://a.kr)",
      "prompt_en": "Fill in the two methods so True is printed when url begins with \"https://\" and ends with \".kr\". (Terminal input: https://a.kr)",
      "hint_ko": "'시작하다(start)'와 '끝나다(end)'에 3인칭 s를 붙이고 '~로(with)'를 띄어쓰기 없이 결합한 접두·접미 판별 메서드를 각각 채워보세요.",
      "hint_en": "Attach third-person 's' to 'start' and 'end', then append 'with' with no space to form the 10-letter prefix and 8-letter suffix methods.",
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
      "hint_ko": "질문형 접두사 is 뒤에 '아라비아 숫자 한 자리(digit)'를 붙인 메서드와 '알파벳(alphabet)'의 앞 다섯 글자를 붙인 메서드로 숫자·글자 구성을 판별해보세요.",
      "hint_en": "Prefix 'digit' (numeric character) and the first 5 letters of 'alphabet' with 'is' to test whether each string contains only numbers or only letters.",
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
      "prompt_ko": "입력 문자열이 숫자만으로 구성되었는지와 글자만으로 구성되었는지를 순서대로 출력해보세요. (터미널 입력: 404)",
      "prompt_en": "Print whether s consists purely of digits and purely of letters, separated by a space (Terminal input: 404).",
      "hint_ko": "접두사 is 뒤에 '숫자 자릿수'를 뜻하는 다섯 글자 단어(d로 시작)를 붙인 메서드와 '알파벳(alphabet)'의 앞 다섯 글자를 붙인 메서드를 차례로 적어보세요.",
      "hint_en": "Form two 7-letter methods starting with 'is': first add the 5-letter word for a numeric figure (starting with 'd'), then add the first 5 letters of 'alphabet'.",
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
      "hint_ko": "파일명을 소문자로 바꾼 결과에 접미사 검사 메서드를 이어 호출해 확장자를 판별하되, 리스트에 추가할 때는 원본 파일명을 그대로 담고 쉼표로 결합하세요.",
      "hint_en": "Chain small-letter conversion with the suffix-checking method in the condition, append the original filename when true, and combine matches with a comma.",
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
      "prompt_ko": "공백을 제거한 입력이 숫자 문자열이면 정수로 변환해 2배를 출력하고, 아니면 \"ERR\"를 출력해보세요. (터미널 입력: 35)",
      "prompt_en": "If stripped input contains only digits, convert to integer and print double; otherwise print \"ERR\" (Terminal input: 35).",
      "hint_ko": "접두사 is와 숫자(d로 시작하는 다섯 글자)를 합친 일곱 글자 메서드로 안전성을 먼저 확인한 뒤, 정수(integer)의 앞 세 글자 변환 함수로 감싸 2를 곱하세요.",
      "hint_en": "First validate numeric characters with 'is' + the 5-letter word for a single number character, then convert using the first 3 letters of 'integer'.",
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
      "prompt_ko": "입력이 부호 없이 숫자로만 되어 있으면 \"POS 값\", 음수 등 부호 있는 정수면 try-except로 \"SIGNED 값\", 아니면 \"NAN\"을 출력해보세요. (터미널 입력: 25)",
      "prompt_en": "Print \"POS n\" if s.isdigit(), else try printing \"SIGNED n\" via int(s), or \"NAN\" on ValueError. (Terminal input: 25)",
      "hint_ko": "음수 기호(-)가 붙은 문자열은 숫자 구성 판별 메서드에서 거짓이 되지만, else 분기 안의 예외 처리 블록에서 정수 변환 함수를 쓰면 부호 있는 정수로 읽어낼 수 있습니다.",
      "hint_en": "A minus sign makes the numeric-character check false, so handle signed numbers in the else branch by wrapping integer conversion in an exception block.",
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
      "prompt_ko": "공백으로 나눈 토큰 중 글자로만 된 개수와 숫자로만 된 개수를 딕셔너리 stats에 누적해 출력해보세요. (예: py 10 ! -> 1 1) (터미널 입력: py 100 ai 20 !)",
      "prompt_en": "Count purely alphabetic and purely numeric tokens in stats and print both counts (e.g., py 10 ! -> 1 1). (Terminal input: py 100 ai 20 !)",
      "hint_ko": "첫 빈칸에는 is 뒤에 '알파벳(alphabet)' 앞 다섯 글자를 붙인 글자 판별 메서드를, 둘째 빈칸에는 is 뒤에 숫자 다섯 글자 단어를 붙인 숫자 판별 메서드를 넣으세요.",
      "hint_en": "First check pure letters with 'is' + the first 5 letters of 'alphabet', then check pure numbers with 'is' + the 5-letter word for a numeric character.",
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
      "prompt_ko": "입력이 \"ID-\"로 시작하고 뒷부분이 숫자면 정수에 1을 더해 출력하고, 아니면 None을 반환해 \"INVALID\"를 출력해보세요. (예: ID-9 -> 10) (터미널 입력: ID-109)",
      "prompt_en": "Return int(s[3:]) if s starts with \"ID-\" and s[3:] is digits, else None; print res + 1 or \"INVALID\". (Terminal input: ID-109)",
      "hint_ko": "접두사 검사로 앞 세 글자 형식을 확인하고 3번 인덱스부터 잘라낸 뒷부분이 모두 숫자인지 함께 검사해 정수를 돌려주며, 실패 시 빈 값 상수를 반환해 바깥에서 분기하세요.",
      "hint_en": "Verify the 3-character prefix and check that slice s[3:] contains only numeric characters before converting; otherwise return the empty-value singleton and branch outside.",
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
      "prompt_ko": "길이가 5이면서 앞 2글자는 글자, 뒤 3글자는 숫자인지 판별해 불리언을 돌려주는 함수 valid_code를 완성해보세요. (터미널 입력: KR105)",
      "prompt_en": "Complete valid_code to return True when s has length 5, first 2 chars letters, and last 3 chars digits. (Terminal input: KR105)",
      "hint_ko": "함수 결과를 돌려주는 여섯 글자 키워드 뒤에, 앞 두 글자의 알파벳 판별 메서드(is + alphabet 앞 5글자)와 뒤 세 글자의 숫자 판별 메서드를 논리곱으로 연결하세요.",
      "hint_en": "Start with the 6-letter function-output keyword, then combine the 'is' + alphabet-prefix check on s[:2] and the 'is' + numeric-char check on s[2:].",
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
      "prompt_ko": "파일명이 \"test_\"로 시작하고 \".py\"로 끝날 때 \"RUN\", 아니면 \"SKIP\"을 출력하도록 접두·접미 인자 버그를 고쳐보세요. (터미널 입력: test_login.py)",
      "prompt_en": "Fix the swapped prefix/suffix arguments so files starting with \"test_\" and ending with \".py\" print \"RUN\". (Terminal input: test_login.py)",
      "hint_ko": "시작 부분 검사 메서드에 확장자가 들어가고 끝 부분 검사 메서드에 머리말이 들어가 인자가 서로 뒤바뀌어 있습니다. 두 괄호 안의 문자열을 알맞은 자리로 맞바꾸세요.",
      "hint_en": "The file extension was passed to the prefix checker and the prefix string was passed to the suffix checker; swap the two string arguments.",
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
      "prompt_ko": "공백을 제거한 문자열 s 아래에 한 줄을 추가하여 s가 \"A\"로 시작하고 나머지 뒷부분이 모두 숫자인지 불리언을 출력해보세요. (터미널 입력: A204)",
      "prompt_en": "Add one line below to print whether s starts with \"A\" and the remaining substring s[1:] is all digits. (Terminal input: A204)",
      "hint_ko": "문자열이 \"A\"로 시작하는지 확인하는 식과 1번 인덱스부터 끝까지 잘라낸 부분이 모두 숫자인지 확인하는 식을 and로 묶어 출력 함수 안에 작성해보세요.",
      "hint_en": "Combine a prefix check for \"A\" and a numeric-character check on the slice from index 1 onward using logical 'and' inside the output function.",
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
      "hint_ko": "음수 부호(-)나 숫자와 알파벳이 섞인 문자열은 두 판별 메서드에서 모두 거짓이 된다는 점을 기억하고, 순수 숫자 문자열 개수와 순수 글자 문자열 개수를 각각 세어보세요.",
      "hint_en": "Remember that minus signs and mixed alphanumeric tokens fail both checks; count how many items are purely numeric versus purely alphabetic.",
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
