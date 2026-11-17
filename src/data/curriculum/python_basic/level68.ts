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
  "unlockedBlocks": [],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 왼쪽 공백을 지운 로그가 \"WARN:\"으로 시작하면 항목명을 모아 \"|\"로 연결해 출력해보세요. (출력 예: disk|cpu)",
      "prompt_en": "[Fill Blank] Filter logs starting with \"WARN:\", lowercase the item names, and join them with \"|\".",
      "hint_ko": "특정 머리말로 시작하는지 판별하는 startswith와 구분자 뒤에 리스트를 하나로 묶는 join 메서드를 채우세요.",
      "hint_en": "Fill in startswith for the prefix check and join on the separator string.",
      "targetCode": "logs = [\"  WARN: Disk\", \"INFO: Ok\", \" WARN: Cpu\"]\nwarns = []\nfor line in logs:\n    s = line.lstrip()\n    if s.startswith(\"WARN:\"):\n        warns.append(s[5:].strip().lower())\nprint(\"|\".join(warns))",
      "templateCode": "logs = [\"  WARN: Disk\", \"INFO: Ok\", \" WARN: Cpu\"]\nwarns = []\nfor line in logs:\n    s = line.lstrip()\n    if s.§§§§§§§§§§(\"WARN:\"):\n        warns.append(s[5:].strip().lower())\nprint(\"|\".§§§§(warns))",
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
      "prompt_ko": "[빈칸 채우기] 수량이 숫자 문자열이면 총액에 천 단위 쉼표를 넣어 반환하는 함수 calc를 완성해보세요.",
      "prompt_en": "[Fill Blank] Validate numeric qty and return the comma-formatted total in calc.",
      "hint_ko": "수량 문자열이 숫자로만 이루어졌는지 검증하는 isdigit와 천 단위 구분 서식 기호 ,를 차례로 적어보세요.",
      "hint_en": "Enter isdigit to validate numeric characters and , for thousands grouping.",
      "targetCode": "prices = {\"BOOK\": 12000, \"PEN\": 1500}\n\ndef calc(line):\n    name, qty = line.split(\":\")\n    key = name.strip().upper()\n    if key in prices and qty.isdigit():\n        return f\"{prices[key] * int(qty):,}\"\n    return \"ERR\"\n\nprint(calc(input()))",
      "templateCode": "prices = {\"BOOK\": 12000, \"PEN\": 1500}\n\ndef calc(line):\n    name, qty = line.split(\":\")\n    key = name.strip().upper()\n    if key in prices and qty.§§§§§§§():\n        return f\"{prices[key] * int(qty):§}\"\n    return \"ERR\"\n\nprint(calc(input()))",
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
      "prompt_ko": "[빈칸 채우기] \"A\"에서 tier칸 뒤 알파벳을 태그로 만들고 잔액을 천 단위와 소수 둘째 자리로 출력해보세요.",
      "prompt_en": "[Fill Blank] Compute self.tag shifted from \"A\" by tier and format w.bal with commas and 2 decimals.",
      "hint_ko": "코드 번호를 문자로 되돌리는 내장 함수 chr와 천 단위 구분 및 소수 둘째 자리 서식 ,.2f를 채워보세요.",
      "hint_en": "Supply chr to convert the code back to a character and ,.2f for the format specifier.",
      "targetCode": "class Wallet:\n    def __init__(self, tier, bal):\n        self.tag = chr(ord(\"A\") + tier)\n        self.bal = bal\n\n    def add(self, raw):\n        try:\n            self.bal += int(raw)\n        except ValueError:\n            pass\n\nw = Wallet(1, 1000.5)\nw.add(input())\nprint(f\"[{w.tag}] {w.bal:,.2f}\")",
      "templateCode": "class Wallet:\n    def __init__(self, tier, bal):\n        self.tag = §§§(ord(\"A\") + tier)\n        self.bal = bal\n\n    def add(self, raw):\n        try:\n            self.bal += int(raw)\n        except ValueError:\n            pass\n\nw = Wallet(1, 1000.5)\nw.add(input())\nprint(f\"[{w.tag}] {w.bal:§§§§}\")",
      "testCases": [
        {
          "id": 1,
          "input": "250",
          "expectedOutput": "[B] 1,250.50"
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
      "prompt_ko": "[틀린 곳 수정] 각 단어를 대문자로 갱신해 하이픈(-)으로 이어 출력하도록 소문자 변환 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the case conversion method so each word in words is uppercased before joining.",
      "hint_ko": "단어를 모두 대문자로 바꾸어야 하므로 .lower() 대신 .upper()를 호출하도록 고쳐보세요.",
      "hint_en": "Replace .lower() with .upper() so each word is converted to uppercase.",
      "templateCode": "words = input().split()\ni = 0\nwhile i < len(words):\n    words[i] = words[i].lower()\n    i += 1\nprint(\"-\".join(words))",
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
      "prompt_ko": "[틀린 곳 수정] 글자만 골라 다음 알파벳으로 1칸씩 밀어 이어 붙이려다 뒤바뀐 ord와 chr를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the TypeError caused by swapping ord() and chr() when shifting letters by +1.",
      "hint_ko": "문자를 먼저 정수 코드로 바꿔야 덧셈을 할 수 있으므로 안쪽에 ord(c), 바깥쪽에 chr()를 호출하세요.",
      "hint_en": "Call ord(c) on the inside before adding 1, and wrap the result in chr() on the outside.",
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
      "prompt_ko": "[틀린 곳 수정] 파일명 오른쪽 끝 공백을 제거한 뒤 \".csv\"로 끝나는지 검사하도록 공백 제거 방향을 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the directional strip bug so trailing spaces are removed before checking .endswith(\".csv\").",
      "hint_ko": "확장자 뒤(오른쪽 끝)에 붙은 공백을 제거해야 하므로 .lstrip()을 .rstrip()으로 수정하세요.",
      "hint_en": "Replace .lstrip() with .rstrip() to trim trailing whitespace.",
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
      "prompt_ko": "[한 줄 완성] 문자열 s가 회문(s == s[::-1])이면서 글자로만 이루어졌는지 판별해 ok에 저장해보세요.",
      "prompt_en": "[Complete Line] Check whether s equals its reverse and consists only of letters, storing the boolean in ok.",
      "hint_ko": "ok = s == s[::-1] and s.isalpha() 형태로 두 조건을 and로 묶어 변수 ok에 저장하세요.",
      "hint_en": "Write ok = s == s[::-1] and s.isalpha().",
      "targetCode": "s = input().lower().replace(\" \", \"\")\nok = s == s[::-1] and s.isalpha()\nprint(ok)",
      "templateCode": "s = input().lower().replace(\" \", \"\")\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(ok)",
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
      "prompt_ko": "[한 줄 완성] 소수 첫째 자리까지 서식화한 f\"{s}: {rate:.1f}%\" 문자열을 msg에 저장하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Format s and rate to 1 decimal place as f\"{s}: {rate:.1f}%\" and assign it to msg.",
      "hint_ko": "msg = f\"{s}: {rate:.1f}%\" 형태로 서식 문자열을 변수 msg에 대입하세요.",
      "hint_en": "Write msg = f\"{s}: {rate:.1f}%\".",
      "targetCode": "s = input().strip().upper()\nrate = s.count(\"O\") / len(s) * 100\nmsg = f\"{s}: {rate:.1f}%\"\nprint(msg)",
      "templateCode": "s = input().strip().upper()\nrate = s.count(\"O\") / len(s) * 100\n§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(msg)",
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
      "prompt_ko": "[출력 결과 예측] 다음 접두·접미사 검사 및 역순 슬라이싱 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following Python code.",
      "hint_ko": "양쪽 공백을 걷어낸 뒤 \"#\"으로 시작하면서 \"#\"으로 끝나지 않는 항목만 골라 앞 기호를 떼고 대문자 역순으로 묶습니다.",
      "hint_en": "Keep items starting with \"#\" and not ending with \"#\", drop the first char, uppercase, reverse, and join with \"/\".",
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
      "prompt_ko": "[출력 결과 예측] 다음 .find(), .count(), ord/chr, f-string 서식 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following Python code.",
      "hint_ko": "첫 글자 \"B\"의 문자 코드에 \"0\"의 개수(2개)를 더한 알파벳과, 하이픈 뒤 정수를 2로 나눈 서식 문자열을 확인하세요.",
      "hint_en": "Shift \"B\" forward by the count of \"0\" (2), and format 2001 / 2 with :,.2f.",
      "targetCode": "def decode(tag):\n    p = tag.find(\"-\")\n    ch = chr(ord(tag[0]) + tag.count(\"0\"))\n    num = int(tag[p + 1:]) / 2\n    return f\"{ch}:{num:,.2f}\"\n\nprint(decode(\"B-2001\"))",
      "choices": [
        "D:1,000.50",
        "E:1,000.50",
        "D:1000.50",
        "C:1,000.50"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "D:1,000.50"
        }
      ]
    }
  ]
};
