import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_68: PracticeRound = {
  "id": "py-basic-r68",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 68,
  "title_ko": "68레벨: 문자열 부가 기능 & 누적 복습 종합 문제풀이",
  "title_en": "Level 68: Section 11 Comprehensive Spiral Review",
  "description_ko": "섹션 11의 문자열 심화 메서드·서식·슬라이싱·문자 코드와 Part 1 누적 문법(반복문, 컬렉션, 함수, 예외, 클래스)을 종합 점검합니다.",
  "description_en": "Synthesize Section 11 string methods, format specs, slicing, and ord/chr with Part 1 loops, collections, functions, try-except, and classes.",
  "totalQuestions": 10,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "method",
    "type",
    "if",
    "for_in",
    "while",
    "def",
    "try",
    "class"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "왼쪽 공백을 지운 로그가 \"WARN:\"으로 시작하면 뒷부분 항목명을 소문자로 모아 \"|\"로 연결해 출력해보세요. (출력 예: disk|cpu)",
      "prompt_en": "Strip leading spaces, filter logs starting with \"WARN:\", lowercase the item names, and join them with \"|\" (e.g., disk|cpu).",
      "hint_ko": "line.lstrip(), s.startswith(\"WARN:\"), .lower(), 그리고 \"|\".join(warns)를 차례로 채워 넣으세요.",
      "hint_en": "Use .lstrip(), .startswith(\"WARN:\"), .lower(), and \"|\".join(warns).",
      "targetCode": "logs = [\"  WARN: Disk\", \"INFO: Ok\", \" WARN: Cpu\"]\nwarns = []\nfor line in logs:\n    s = line.lstrip()\n    if s.startswith(\"WARN:\"):\n        warns.append(s[5:].strip().lower())\nprint(\"|\".join(warns))",
      "templateCode": "logs = [\"  WARN: Disk\", \"INFO: Ok\", \" WARN: Cpu\"]\nwarns = []\nfor line in logs:\n    s = line.§§§§§§()\n    if s.§§§§§§§§§§(\"WARN:\"):\n        warns.append(s[5:].strip().§§§§§())\nprint(\"|\".§§§§(warns))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "disk|cpu"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "콜론(:) 앞 상품명을 대문자로 찾고 뒤 수량이 숫자면 총액에 천 단위 쉼표를 넣어 반환하는 함수 calc를 완성해보세요. (예: book:3 -> 36,000)",
      "prompt_en": "Complete calc to look up the uppercased item name, validate numeric qty, and return the comma-formatted total.",
      "hint_ko": "대문자 변환은 .upper(), 숫자 판별은 qty.isdigit(), 천 단위 쉼표 서식은 콜론 뒤에 ,를 적습니다.",
      "hint_en": "Fill in upper, isdigit, and , inside the f-string format spec.",
      "targetCode": "prices = {\"BOOK\": 12000, \"PEN\": 1500}\n\ndef calc(line):\n    name, qty = line.split(\":\")\n    key = name.strip().upper()\n    if key in prices and qty.isdigit():\n        return f\"{prices[key] * int(qty):,}\"\n    return \"ERR\"\n\nprint(calc(input()))",
      "templateCode": "prices = {\"BOOK\": 12000, \"PEN\": 1500}\n\ndef calc(line):\n    name, qty = line.split(\":\")\n    key = name.strip().§§§§§()\n    if key in prices and qty.§§§§§§§():\n        return f\"{prices[key] * int(qty):§}\"\n    return \"ERR\"\n\nprint(calc(input()))",
      "testCases": [
        {
          "id": 1,
          "input": "book:3",
          "expectedOutput": "36,000"
        },
        {
          "id": 2,
          "input": "pen:x",
          "expectedOutput": "ERR"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "문자 \"A\"에서 tier칸 뒤 알파벳을 등급 태그로 만들고 잔액을 천 단위 쉼표와 소수점 둘째 자리로 출력하도록 완성해보세요. (예: [B] 1,250.75)",
      "prompt_en": "Compute self.tag shifted from \"A\" by tier and format w.bal with commas and 2 decimals (e.g., [B] 1,250.75).",
      "hint_ko": "등급 문자는 chr(ord(\"A\") + tier)로 구하고, 잔액 서식은 {w.bal:,.2f}로 지정합니다.",
      "hint_en": "Use chr(ord(\"A\") + tier) in __init__ and :,.2f in the final f-string.",
      "targetCode": "class Wallet:\n    def __init__(self, tier, bal):\n        self.tag = chr(ord(\"A\") + tier)\n        self.bal = bal\n\n    def add(self, raw):\n        try:\n            self.bal += float(raw)\n        except ValueError:\n            self.bal += 0\n\nw = Wallet(1, 1000.5)\nw.add(input())\nprint(f\"[{w.tag}] {w.bal:,.2f}\")",
      "templateCode": "class Wallet:\n    def __init__(self, tier, bal):\n        self.tag = §§§(§§§(\"A\") + tier)\n        self.bal = bal\n\n    def add(self, raw):\n        try:\n            self.bal += float(raw)\n        except ValueError:\n            self.bal += 0\n\nw = Wallet(1, 1000.5)\nw.add(input())\nprint(f\"[{w.tag}] {w.bal:§§§§}\")",
      "testCases": [
        {
          "id": 1,
          "input": "250.25",
          "expectedOutput": "[B] 1,250.75"
        },
        {
          "id": 2,
          "input": "skip",
          "expectedOutput": "[B] 1,000.50"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "리스트의 각 단어를 대문자로 갱신한 뒤 하이픈(-)으로 이어 출력하려다 원본이 바뀌지 않은 불변성 버그를 고쳐보세요. (예: py ai -> PY-AI)",
      "prompt_en": "Fix the string immutability bug where words[i].upper() was not assigned back to words[i] (e.g., py ai -> PY-AI).",
      "hint_ko": "문자열 메서드는 원본을 직접 바꾸지 않고 새 문자열을 반환하므로 words[i] = words[i].upper()로 다시 대입해야 합니다.",
      "hint_en": "Strings are immutable; assign words[i] = words[i].upper() inside the loop.",
      "templateCode": "words = input().split()\ni = 0\nwhile i < len(words):\n    words[i].upper()\n    i += 1\nprint(\"-\".join(words))",
      "targetCode": "words = input().split()\ni = 0\nwhile i < len(words):\n    words[i] = words[i].upper()\n    i += 1\nprint(\"-\".join(words))",
      "testCases": [
        {
          "id": 1,
          "input": "py ai",
          "expectedOutput": "PY-AI"
        },
        {
          "id": 2,
          "input": "go web dev",
          "expectedOutput": "GO-WEB-DEV"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "대문자 입력에서 글자만 골라 다음 알파벳으로 1칸씩 밀어 이어 붙이려다 두 코드 변환 함수가 뒤바뀐 버그를 고쳐보세요. (예: py! -> QZ)",
      "prompt_en": "Fix the TypeError caused by swapping ord() and chr() when shifting letters by +1 (e.g., py! -> QZ).",
      "hint_ko": "문자 c를 먼저 ord(c)로 정수 코드로 바꾼 뒤 1을 더하고, 바깥에서 chr(...)로 다시 문자로 변환해야 합니다.",
      "hint_en": "Convert c to an int first with ord(c), add 1, then wrap with chr(): chr(ord(c) + 1).",
      "templateCode": "word = input().strip().upper()\nout = \"\"\nfor c in word:\n    if c.isalpha():\n        out += ord(chr(c) + 1)\nprint(out)",
      "targetCode": "word = input().strip().upper()\nout = \"\"\nfor c in word:\n    if c.isalpha():\n        out += chr(ord(c) + 1)\nprint(out)",
      "testCases": [
        {
          "id": 1,
          "input": "ab1c",
          "expectedOutput": "BCD"
        },
        {
          "id": 2,
          "input": "py!",
          "expectedOutput": "QZ"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "파일명 오른쪽 끝에 붙은 공백만 제거한 뒤 \".csv\"로 끝나면 \"OK:파일명\", 아니면 \"NO\"를 출력하도록 공백 제거 방향을 고쳐보세요.",
      "prompt_en": "Fix the directional strip bug so trailing spaces are removed before checking .endswith(\".csv\").",
      "hint_ko": "오른쪽 끝 공백 때문에 .endswith(\".csv\")가 실패하고 있으므로 .lstrip()을 오른쪽 공백 제거 메서드 .rstrip()으로 바꾸세요.",
      "hint_en": "Replace .lstrip() with .rstrip() to remove trailing whitespace.",
      "templateCode": "name = input().lstrip()\nif name.endswith(\".csv\"):\n    print(\"OK:\" + name)\nelse:\n    print(\"NO\")",
      "targetCode": "name = input().rstrip()\nif name.endswith(\".csv\"):\n    print(\"OK:\" + name)\nelse:\n    print(\"NO\")",
      "testCases": [
        {
          "id": 1,
          "input": "007_log.csv   ",
          "expectedOutput": "OK:007_log.csv"
        },
        {
          "id": 2,
          "input": "007_log.txt   ",
          "expectedOutput": "NO"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "소문자 변환 후 공백을 모두 지운 s 아래에 한 줄을 추가하여 s가 회문이면서 글자로만 이루어졌는지 불리언 결과를 출력해보세요.",
      "prompt_en": "Add one line below to print whether s equals its reverse and consists only of alphabetic letters.",
      "hint_ko": "둘째 줄에 print(s == s[::-1] and s.isalpha())를 작성해 회문 여부와 글자 구성을 동시에 판별합니다.",
      "hint_en": "Write print(s == s[::-1] and s.isalpha()) on line 2.",
      "targetCode": "s = input().lower().replace(\" \", \"\")\nprint(s == s[::-1] and s.isalpha())",
      "templateCode": "s = input().lower().replace(\" \", \"\")\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "testCases": [
        {
          "id": 1,
          "input": "Top Spot",
          "expectedOutput": "True"
        },
        {
          "id": 2,
          "input": "12 21",
          "expectedOutput": "False"
        },
        {
          "id": 3,
          "input": "Py Code",
          "expectedOutput": "False"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "대문자 s에서 \"O\" 비율 rate를 구한 코드 아래에 한 줄을 추가하여 소수점 첫째 자리까지 \"문자열: 비율%\" 형식으로 출력해보세요. (예: XOXO: 50.0%)",
      "prompt_en": "Add one line below to print s and rate to 1 decimal place as \"STRING: RATE%\" (e.g., XOXO: 50.0%).",
      "hint_ko": "셋째 줄에 print(f\"{s}: {rate:.1f}%\")를 작성하세요.",
      "hint_en": "Write print(f\"{s}: {rate:.1f}%\") on line 3.",
      "targetCode": "s = input().strip().upper()\nrate = s.count(\"O\") / len(s) * 100\nprint(f\"{s}: {rate:.1f}%\")",
      "templateCode": "s = input().strip().upper()\nrate = s.count(\"O\") / len(s) * 100\n§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "testCases": [
        {
          "id": 1,
          "input": "oxoo",
          "expectedOutput": "OXOO: 75.0%"
        },
        {
          "id": 2,
          "input": "xoxo",
          "expectedOutput": "XOXO: 50.0%"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 파이썬 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "Select the exact output of the following Python code.",
      "hint_ko": "양쪽 공백 제거 후 \"#\"으로 시작하고 \"#\"으로 끝나지 않는 항목은 \"#Py\"와 \"#Go\"뿐이며, 대문자 변환 후 뒤집으면 \"YP\"와 \"OG\"가 됩니다.",
      "hint_en": "Only \"#Py\" and \"#Go\" start with \"#\" without ending with \"#\"; uppercased and reversed they join to YP/OG.",
      "targetCode": "raw = [\" #Py \", \"js#\", \" #AI#\", \" #Go \"]\nres = []\nfor x in raw:\n    s = x.strip()\n    if s.startswith(\"#\") and not s.endswith(\"#\"):\n        res.append(s[1:].upper()[::-1])\nprint(\"/\".join(res))",
      "choices": [
        "YP/OG",
        "PY/GO",
        "YP/IA/OG",
        "yp/og"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "YP/OG"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 파이썬 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "Select the exact output of the following Python code.",
      "hint_ko": "\"B-100.05\"에서 \"0\"의 개수는 3개이므로 \"B\"(66)에서 3칸 뒤인 \"E\"(69)가 되고, 100.05 * 10 = 1000.5는 \"1,000.50\"으로 서식화됩니다.",
      "hint_en": "count(\"0\") is 3 so chr(ord(\"B\") + 3) is \"E\", and 100.05 * 10 formatted with :,.2f is \"1,000.50\".",
      "targetCode": "def decode(tag):\n    p = tag.find(\"-\")\n    ch = chr(ord(tag[0]) + tag.count(\"0\"))\n    num = float(tag[p + 1:]) * 10\n    return f\"{ch}:{num:,.2f}\"\n\nprint(decode(\"B-100.05\"))",
      "choices": [
        "E:1,000.50",
        "D:1,000.50",
        "E:1000.50",
        "D:100.05"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "E:1,000.50"
        }
      ]
    }
  ]
};
