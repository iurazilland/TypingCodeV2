import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_95: PracticeRound = {
  "id": "py-basic-r95",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 95,
  "title_ko": "문자열 위치·개수 탐색(.find(), .count())과 방향별 공백 제거(.lstrip(), .rstrip())",
  "title_en": "String .find(), .count() & Directional Stripping (.lstrip(), .rstrip())",
  "description_ko": ".find()로 부분 문자열의 첫 위치(없으면 -1)를 찾고, .count()로 등장 횟수를 세며, .lstrip()과 .rstrip()으로 방향별 여백을 제거합니다.",
  "description_en": "Locate substrings safely with .find(), count occurrences with .count(), and trim directionally with .lstrip() and .rstrip().",
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
      "prompt_ko": "[블록 조립] .find()로 \"banana\"에서 \"na\"의 첫 시작 인덱스와 없는 글자 \"z\"를 찾았을 때의 반환값(-1)을 출력해보세요.",
      "prompt_en": "[Block] Use .find() on \"banana\" to print the first index of \"na\" and -1 for the missing substring \"z\".",
      "hint_ko": ".find()는 찾는 문자열이 처음 등장하는 0번 기준 인덱스를 돌려주며, 없으면 에러 대신 -1을 반환합니다.",
      "hint_en": ".find() returns the 0-based index of the first match, or -1 safely if the substring is not found.",
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
      "prompt_ko": "[빈칸 채우기] 이메일 문자열에서 \"@\" 기호가 처음 등장하는 인덱스를 출력하도록 메서드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the method name to print the first index of \"@\" in mail.",
      "hint_ko": "찾는 글자의 위치를 반환하고 없으면 -1을 돌려주는 탐색 메서드를 적으세요.",
      "hint_en": "Type the search method that returns the first index or -1 if absent.",
      "targetCode": "mail = input()\nprint(mail.find(\"@\"))",
      "templateCode": "mail = input()\nprint(mail.§§§§§(\"@\"))",
      "testCases": [
        {
          "id": 1,
          "input": "dev@py.org",
          "expectedOutput": "3"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] .count() 메서드로 문자열 안에서 \"ok\"가 등장하는 횟수를 세어 출력해보세요.",
      "prompt_en": "[Block] Use the .count() method to count and print how many times \"ok\" appears in log.",
      "hint_ko": "리스트의 .count()와 마찬가지로 문자열에서도 특정 글자나 부분 문자열의 등장 횟수를 정수로 반환합니다.",
      "hint_en": "Just like on lists, .count() on a string returns the integer number of non-overlapping occurrences.",
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
      "prompt_ko": "[빈칸 채우기] 소문자로 통일한 단어에서 알파벳 \"a\"가 몇 번 나오는지 세어 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the method name to print how many times \"a\" appears in the lowercased input word.",
      "hint_ko": "특정 부분 문자열의 등장 횟수를 세는 메서드를 호출하세요.",
      "hint_en": "Call the method that counts occurrences of a substring.",
      "targetCode": "word = input().lower()\nprint(word.count(\"a\"))",
      "templateCode": "word = input().lower()\nprint(word.§§§§§§(\"a\"))",
      "testCases": [
        {
          "id": 1,
          "input": "Banana",
          "expectedOutput": "3"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] .lstrip()으로 왼쪽 공백만 제거한 문자열과 .rstrip()으로 오른쪽 공백만 제거한 문자열을 비교해 출력해보세요.",
      "prompt_en": "[Block] Use .lstrip() and .rstrip() to remove leading and trailing spaces respectively and compare them.",
      "hint_ko": "양쪽을 모두 지우는 .strip()과 달리 왼쪽(left) 또는 오른쪽(right) 한쪽 끝만 선택해 지울 수 있습니다.",
      "hint_en": "Unlike .strip(), .lstrip() trims only the left side and .rstrip() trims only the right side.",
      "targetCode": "raw = \" py \"\nleft = raw.lstrip()\nright = raw.rstrip()\nprint(f\"[{left}]/[{right}]\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[py ]/[ py]"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 문자열 왼쪽 앞에 붙은 \"0\" 문자들만 제거해 출력하도록 방향별 제거 메서드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the directional trimming method to remove only leading \"0\" characters from the left.",
      "hint_ko": "왼쪽(left)을 뜻하는 글자 l을 strip 앞에 붙인 메서드를 입력하세요.",
      "hint_en": "Type the method formed by prefixing strip with l for left.",
      "targetCode": "code = \"000420\"\nprint(code.lstrip(\"0\"))",
      "templateCode": "code = \"000420\"\nprint(code.§§§§§§§(\"0\"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "420"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] .find(\":\")로 구분자 위치를 찾은 뒤 슬라이싱과 .strip()으로 콜론 뒤의 값만 깔끔하게 추출해 출력해보세요.",
      "prompt_en": "[Block] Find the index of \":\" with .find(), then slice after it and .strip() to extract the value.",
      "hint_ko": "콜론 위치가 pos일 때 콜론 다음 글자부터 끝까지 자르려면 시작 인덱스를 pos + 1로 지정합니다.",
      "hint_en": "When the colon is at index pos, slicing from pos + 1: extracts everything after the colon.",
      "targetCode": "line = \"Name:Alice\"\npos = line.find(\":\")\nval = line[pos + 1:].strip()\nprint(val)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Alice"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 이메일에서 \"@\" 위치를 찾아 기호 앞부분 아이디만 슬라이싱해 출력하도록 탐색 메서드를 채워보세요.",
      "prompt_en": "[Fill Blank] Locate \"@\" in mail and slice everything before it to print the user ID.",
      "hint_ko": "구분 기호의 첫 위치 인덱스를 구하는 문자열 메서드를 채워보세요.",
      "hint_en": "Fill in the string method that locates the index of \"@\".",
      "targetCode": "mail = input().strip()\npos = mail.find(\"@\")\nprint(mail[:pos])",
      "templateCode": "mail = input().strip()\npos = mail.§§§§§(\"@\")\nprint(mail[:pos])",
      "testCases": [
        {
          "id": 1,
          "input": "coder@py.kr",
          "expectedOutput": "coder"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 오른쪽 공백을 지운 줄에서 \"#\" 기호의 위치를 찾아 앞부분 코드와 \"#\" 기호 개수를 출력해보세요.",
      "prompt_en": "[Fill Blank] Trim trailing spaces, locate the index of \"#\", and print the code slice along with the number of \"#\" symbols.",
      "hint_ko": "오른쪽 공백 제거 메서드, 위치 탐색 메서드, 개수 세기 메서드를 차례로 채워보세요.",
      "hint_en": "Fill in the right-strip method, the substring search method, and the occurrence counting method.",
      "targetCode": "line = \"x = 10 # init # ok \"\ns = line.rstrip()\npos = s.find(\"#\")\nprint(s[:pos].strip(), s.count(\"#\"))",
      "templateCode": "line = \"x = 10 # init # ok \"\ns = line.§§§§§§§()\npos = s.§§§§§(\"#\")\nprint(s[:pos].strip(), s.§§§§§§(\"#\"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "x = 10 2"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 문자열에 \"err\"가 포함되어 있을 때 ALERT를 출력하려다 조건식을 반대로 적은 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the condition bug where the check tests for -1 instead of checking that \"err\" was found.",
      "hint_ko": ".find()에서 찾는 문자열이 없을 때 -1이 반환되므로, 존재할 때는 -1과 같지 않아야(!=) 합니다.",
      "hint_en": "Because .find() returns -1 when absent, check != -1 to detect when the substring is present.",
      "templateCode": "msg = input().lower()\nif msg.find(\"err\") == -1:\n    print(\"ALERT\")\nelse:\n    print(\"NORMAL\")",
      "targetCode": "msg = input().lower()\nif msg.find(\"err\") != -1:\n    print(\"ALERT\")\nelse:\n    print(\"NORMAL\")",
      "testCases": [
        {
          "id": 1,
          "input": "System Err 404",
          "expectedOutput": "ALERT"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 경로 왼쪽 앞의 슬래시(\"/\")들만 제거해야 하는데 반대 방향 메서드를 호출한 버그를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the directional trimming method so leading slashes on the left are removed while keeping the rest.",
      "hint_ko": "문자열 왼쪽(앞쪽) 끝의 문자를 지우려면 오른쪽 제거 메서드 대신 왼쪽 제거 메서드를 써야 합니다.",
      "hint_en": "Use the left-side strip method instead of the right-side strip method to remove leading slashes.",
      "templateCode": "path = \"///home/user/\"\nprint(path.rstrip(\"/\"))",
      "targetCode": "path = \"///home/user/\"\nprint(path.lstrip(\"/\"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "home/user/"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 문자열 text에서 하이픈(\"-\")의 첫 위치 인덱스를 찾아 변수 idx에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Find the first index of \"-\" in text and assign it to idx.",
      "hint_ko": "idx = text.find(\"-\") 형태로 하이픈의 시작 인덱스를 구해 변수 idx에 대입하세요.",
      "hint_en": "Write idx = text.find(\"-\") to store the index of the hyphen.",
      "targetCode": "text = input().strip()\nidx = text.find(\"-\")\nprint(idx)",
      "templateCode": "text = input().strip()\n§§§§§§§§§§§§§§§§§§§§§\nprint(idx)",
      "testCases": [
        {
          "id": 1,
          "input": "AB-102",
          "expectedOutput": "2"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 오른쪽 느낌표(\"!\")들을 모두 제거한 s에서 남아 있는 \"!\"의 개수를 세어 cnt에 저장해보세요.",
      "prompt_en": "[Complete Line] Count how many \"!\" characters remain in s and assign the result to cnt.",
      "hint_ko": "cnt = s.count(\"!\") 형태로 남은 느낌표의 등장 횟수를 변수 cnt에 저장하세요.",
      "hint_en": "Write cnt = s.count(\"!\") to count the remaining exclamation marks.",
      "targetCode": "s = input().rstrip(\"!\")\ncnt = s.count(\"!\")\nprint(cnt)",
      "templateCode": "s = input().rstrip(\"!\")\n§§§§§§§§§§§§§§§§§§§\nprint(cnt)",
      "testCases": [
        {
          "id": 1,
          "input": "hi!wow!!!",
          "expectedOutput": "1"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] .lstrip(), .find(), .count()를 함께 사용한 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following code using .lstrip(), .find(), and .count().",
      "hint_ko": "왼쪽 공백 2칸만 지워지고 오른쪽 끝 공백 2칸은 그대로 남는다는 점과 없는 글자의 .find() 반환값을 확인하세요.",
      "hint_en": "Remember that .lstrip() leaves the 2 trailing spaces intact, and .find() returns -1 for missing characters.",
      "targetCode": "raw = \"  ab-ab-c  \"\ns = raw.lstrip()\nprint(len(s), s.count(\"ab\"), s.find(\"c\"), s.find(\"z\"))",
      "choices": [
        "9 2 6 -1",
        "7 2 6 -1",
        "9 2 8 0",
        "11 2 8 -1"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "9 2 6 -1"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 반복문 안에서 .find()와 슬라이싱으로 값을 추출해 집계하는 코드의 출력 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the loop extracting values with .find() and slicing.",
      "hint_ko": "콜론(\":\")이 있는 항목만 골라 콜론 뒤 숫자를 정수로 더해 누적합니다.",
      "hint_en": "Only strings containing \":\" have their substring after the colon converted to int and added to total.",
      "targetCode": "logs = [\"a:10\", \"skip\", \"b:25\", \"c:5\"]\ntotal = 0\nfor item in logs:\n    p = item.find(\":\")\n    if p != -1:\n        total += int(item[p + 1:])\nprint(total)",
      "choices": [
        "40",
        "35",
        "30",
        "45"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "40"
        }
      ]
    }
  ]
};
