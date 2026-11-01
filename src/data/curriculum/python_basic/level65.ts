import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_65: PracticeRound = {
  "id": "py-basic-r65",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 65,
  "title_ko": "65레벨: 문자열 위치·개수 탐색과 방향별 공백 제거",
  "title_en": "Level 65: Finding, Counting & Directional Stripping",
  "description_ko": ".find()와 .count()로 부분 문자열을 탐색하고 .lstrip(), .rstrip()으로 원하는 방향의 공백이나 문자를 제거합니다.",
  "description_en": "Locate and count substrings with .find() and .count(), and strip characters directionally with .lstrip() and .rstrip().",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "method",
    "if",
    "for_in",
    "while",
    "def"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "변수 text에 \"banana\"를 저장한 뒤, \"na\"의 첫 위치와 없는 문자 \"z\"의 탐색 결과(-1)를 차례로 출력해보세요.",
      "prompt_en": "Store \"banana\" in text, then print text.find(\"na\") and text.find(\"z\") on separate lines.",
      "hint_ko": ".find()는 부분 문자열이 처음 시작하는 인덱스를 반환하며, 찾지 못하면 에러 대신 -1을 반환합니다.",
      "hint_en": ".find() returns the starting index of the first match, or -1 when not found.",
      "targetCode": "text = \"banana\"\nprint(text.find(\"na\"))\nprint(text.find(\"z\"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2\n-1"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "입력된 문자열에서 골뱅이(\"@\")가 처음 등장하는 인덱스를 출력하도록 빈칸을 채워보세요. (예: dev@py.org -> 3)",
      "prompt_en": "Fill in the method name to print the first index of \"@\" in mail (e.g., dev@py.org -> 3).",
      "hint_ko": "특정 문자의 위치를 안전하게 탐색할 때는 mail.find(\"@\")를 사용합니다.",
      "hint_en": "Use mail.find(\"@\") to find the index of \"@\" (or -1 if absent).",
      "targetCode": "mail = input()\nprint(mail.find(\"@\"))",
      "templateCode": "mail = input()\nprint(mail.§§§§(\"@\"))",
      "testCases": [
        {
          "id": 1,
          "input": "dev@py.org",
          "expectedOutput": "3"
        },
        {
          "id": 2,
          "input": "hello",
          "expectedOutput": "-1"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "문자열 log(\"ok,err,ok,ok\")에서 \"ok\"가 몇 번 등장하는지 세어 cnt에 저장하고 출력해보세요. (출력 예: 3)",
      "prompt_en": "Count how many times \"ok\" appears in log (\"ok,err,ok,ok\"), store it in cnt, and print cnt (e.g., 3).",
      "hint_ko": "log.count(\"ok\")는 문자열 안에서 \"ok\"가 겹치지 않고 등장하는 횟수를 정수로 돌려줍니다.",
      "hint_en": "Call log.count(\"ok\") to count non-overlapping occurrences of \"ok\".",
      "targetCode": "log = \"ok,err,ok,ok\"\ncnt = log.count(\"ok\")\nprint(cnt)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "소문자로 변환한 입력 문자열에서 알파벳 \"a\"의 등장 횟수를 출력하도록 빈칸을 채워보세요. (예: Banana -> 3)",
      "prompt_en": "Fill in the blank to count how many times \"a\" appears in the lowercased input (e.g., Banana -> 3).",
      "hint_ko": "부분 문자열이 몇 번 들어 있는지 셀 때는 word.count(\"a\")를 사용합니다.",
      "hint_en": "Use word.count(\"a\") to get the number of occurrences of \"a\".",
      "targetCode": "word = input().lower()\nprint(word.count(\"a\"))",
      "templateCode": "word = input().lower()\nprint(word.§§§§§(\"a\"))",
      "testCases": [
        {
          "id": 1,
          "input": "Banana",
          "expectedOutput": "3"
        },
        {
          "id": 2,
          "input": "Sky",
          "expectedOutput": "0"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "문자열 raw(\"  py  \")의 왼쪽 공백만 지운 left와 오른쪽 공백만 지운 right를 \"[py  ]/[  py]\" 형식으로 출력해보세요.",
      "prompt_en": "Strip left spaces of raw (\"  py  \") into left and right spaces into right, then print f\"[{left}]/[{right}]\".",
      "hint_ko": ".lstrip()은 왼쪽(Left) 공백만, .rstrip()은 오른쪽(Right) 공백만 제거합니다.",
      "hint_en": ".lstrip() removes leading whitespace only, and .rstrip() removes trailing whitespace only.",
      "targetCode": "raw = \"  py  \"\nleft = raw.lstrip()\nright = raw.rstrip()\nprint(f\"[{left}]/[{right}]\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[py  ]/[  py]"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "입력 문자열의 왼쪽 끝 \"0\"들과 오른쪽 끝 마침표(\".\")들을 차례로 제거해 출력해보세요. (예: 0070. -> 70)",
      "prompt_en": "Remove leading \"0\" characters and trailing \".\" characters from code and print it (e.g., 0070. -> 70).",
      "hint_ko": "왼쪽 문자 제거는 .lstrip(\"0\"), 오른쪽 문자 제거는 .rstrip(\".\")을 이어서 호출하면 끝자리 0(\"70\"의 0)은 보존됩니다.",
      "hint_en": "Chain .lstrip(\"0\") and .rstrip(\".\") so trailing zeros inside the number are preserved.",
      "targetCode": "code = input()\nclean = code.lstrip(\"0\").rstrip(\".\")\nprint(clean)",
      "templateCode": "code = input()\nclean = code.§§§§§§(\"0\").§§§§§§(\".\")\nprint(clean)",
      "testCases": [
        {
          "id": 1,
          "input": "0042...",
          "expectedOutput": "42"
        },
        {
          "id": 2,
          "input": "0070.",
          "expectedOutput": "70"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "양쪽 공백을 지운 입력에서 \"@\" 위치를 찾아 있으면 그 뒤 도메인을, 없으면 \"NONE\"을 출력해보세요. (예: a@py.kr -> py.kr)",
      "prompt_en": "Find \"@\" in stripped input; if found, print the domain after \"@\", otherwise print \"NONE\" (e.g., a@py.kr -> py.kr).",
      "hint_ko": "pos = mail.find(\"@\")가 -1이 아닐 때 mail[pos + 1:]로 \"@\" 바로 다음 글자부터 끝까지 슬라이싱합니다.",
      "hint_en": "Check if pos != -1: and slice mail[pos + 1:] to extract everything after \"@\".",
      "targetCode": "mail = input().strip()\npos = mail.find(\"@\")\nif pos != -1:\n    print(mail[pos + 1:])\nelse:\n    print(\"NONE\")",
      "testCases": [
        {
          "id": 1,
          "input": "a@py.kr",
          "expectedOutput": "py.kr"
        },
        {
          "id": 2,
          "input": "invalid_mail",
          "expectedOutput": "NONE"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "한 줄 코드에서 \"#\" 주석 기호가 있으면 그 앞부분만 잘라내고 오른쪽 끝 공백을 제거해 출력해보세요. (예: x = 1  # ok -> x = 1)",
      "prompt_en": "If \"#\" exists in line, slice before \"#\" and trim trailing whitespace before printing (e.g., x = 1  # ok -> x = 1).",
      "hint_ko": "line.find(\"#\") 결과가 -1이 아닐 때(if pos != -1:) line[:pos].rstrip()으로 주석 앞 오른쪽 공백을 정리합니다.",
      "hint_en": "Find \"#\" with .find(\"#\"), check pos != -1, and clean trailing spaces with .rstrip().",
      "targetCode": "line = input().rstrip()\npos = line.find(\"#\")\nif pos != -1:\n    line = line[:pos].rstrip()\nprint(line)",
      "templateCode": "line = input().rstrip()\npos = line.§§§§(\"#\")\nif pos §§ -1:\n    line = line[:pos].§§§§§§()\nprint(line)",
      "testCases": [
        {
          "id": 1,
          "input": "x = 1  # ok  ",
          "expectedOutput": "x = 1"
        },
        {
          "id": 2,
          "input": "y = 20   ",
          "expectedOutput": "y = 20"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "문자열 msg(\"a  b    c\")에 두 칸 공백(\"  \")이 없을 때까지 한 칸 공백으로 줄인 뒤, 결과와 공백 수를 출력해보세요. (출력 예: a b c 2)",
      "prompt_en": "Repeatedly replace \"  \" with \" \" in msg (\"a  b    c\") while \"  \" is found, then print msg and space count (e.g., a b c 2).",
      "hint_ko": "while msg.find(\"  \") != -1: 조건으로 반복하며 msg = msg.replace(\"  \", \" \")로 갱신한 뒤 msg.count(\" \")를 함께 출력합니다.",
      "hint_en": "Loop while msg.find(\"  \") != -1:, update msg with .replace(\"  \", \" \"), then print msg and msg.count(\" \").",
      "targetCode": "msg = \"a  b    c\"\nwhile msg.find(\"  \") != -1:\n    msg = msg.replace(\"  \", \" \")\nprint(msg, msg.count(\" \"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "a b c 2"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "왼쪽 공백을 지운 뒤 \"ERR:\"이 맨 앞(0번)에 오는 로그만 골라 느낌표(\"!\") 개수의 합을 반환하도록 완성해보세요. (출력 예: 3)",
      "prompt_en": "For logs where \"ERR:\" appears at index 0 after stripping left spaces, sum and return the count of \"!\" (e.g., 3).",
      "hint_ko": "s.lstrip().find(\"ERR:\") == 0으로 왼쪽 공백 제거 후 시작 위치를 확인하고, s.count(\"!\")를 total에 누적합니다.",
      "hint_en": "Use s.lstrip().find(\"ERR:\") == 0 and add s.count(\"!\") to total.",
      "targetCode": "def count_err(logs):\n    total = 0\n    for s in logs:\n        if s.lstrip().find(\"ERR:\") == 0:\n            total += s.count(\"!\")\n    return total\n\ndata = [\" ERR: io!!\", \"OK!\", \"  ERR: db!\"]\nprint(count_err(data))",
      "templateCode": "def count_err(logs):\n    total = 0\n    for s in logs:\n        if s.§§§§§§().§§§§(\"ERR:\") == 0:\n            total += s.§§§§§(\"!\")\n    return total\n\ndata = [\" ERR: io!!\", \"OK!\", \"  ERR: db!\"]\nprint(count_err(data))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "소문자로 바꾼 입력에 \"py\"가 있으면 \"FOUND\", 없으면 \"NO\"가 출력되도록 탐색 결과 비교 조건 버그를 고쳐보세요. (예: Python -> FOUND)",
      "prompt_en": "Fix the condition bug where .find(\"py\") returning 0 or -1 was tested directly as a boolean (e.g., Python -> FOUND).",
      "hint_ko": "파이썬에서 0은 거짓, -1은 참으로 취급되므로 if s.find(\"py\"):는 정반대로 오작동합니다. if s.find(\"py\") != -1:로 비교하세요.",
      "hint_en": "In Python, 0 is falsy and -1 is truthy! Compare explicitly with if s.find(\"py\") != -1:.",
      "templateCode": "s = input().lower()\nif s.find(\"py\"):\n    print(\"FOUND\")\nelse:\n    print(\"NO\")",
      "targetCode": "s = input().lower()\nif s.find(\"py\") != -1:\n    print(\"FOUND\")\nelse:\n    print(\"NO\")",
      "testCases": [
        {
          "id": 1,
          "input": "Python",
          "expectedOutput": "FOUND"
        },
        {
          "id": 2,
          "input": "Java",
          "expectedOutput": "NO"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "오른쪽 끝의 \"!\"들만 지워 s에 저장한 코드 아래에 한 줄을 추가하여 s 안에 남아 있는 \"!\"의 개수를 출력해보세요. (예: hi!go!! -> 1)",
      "prompt_en": "Add one line below to print how many \"!\" characters remain inside s (e.g., hi!go!! -> 1).",
      "hint_ko": "둘째 줄에 print(s.count(\"!\"))를 작성하면 가운데에 남아 있는 느낌표 개수를 출력합니다.",
      "hint_en": "Write print(s.count(\"!\")) on the second line.",
      "targetCode": "s = input().rstrip(\"!\")\nprint(s.count(\"!\"))",
      "templateCode": "s = input().rstrip(\"!\")\n§§§§§§§§§§§§§§§§§§§",
      "testCases": [
        {
          "id": 1,
          "input": "hi!wow!!!",
          "expectedOutput": "1"
        },
        {
          "id": 2,
          "input": "go!!now!",
          "expectedOutput": "2"
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
      "hint_ko": "왼쪽 공백 2칸만 제거되어 s는 \"ab-ab-c  \"(길이 9)가 됩니다. \"ab\" 개수는 2개이고 \"c\"의 인덱스는 6입니다.",
      "hint_en": "lstrip() removes only the 2 leading spaces, leaving \"ab-ab-c  \" (length 9), count(\"ab\") = 2, find(\"c\") = 6.",
      "targetCode": "raw = \"  ab-ab-c  \"\ns = raw.lstrip()\nprint(len(s), s.count(\"ab\"), s.find(\"c\"))",
      "choices": [
        "9 2 6",
        "7 2 6",
        "9 2 8",
        "11 2 8"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "9 2 6"
        }
      ]
    }
  ]
};
