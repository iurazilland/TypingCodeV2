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
      "prompt_ko": "문자열의 .find(부분문자열) 메서드는 찾는 문자열이 처음 등장하는 시작 인덱스를 반환하며, 존재하지 않으면 에러 대신 -1을 반환합니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "The string .find(sub) method returns the starting index of the first occurrence of sub, or -1 (instead of raising an error) when it is not found. Trace the block code.",
      "hint_ko": "문자열 인덱스는 0번부터 시작하며, \"banana\"에서 \"na\"는 2번 인덱스에서 처음 시작합니다.",
      "hint_en": "String indices start at 0, so the first \"na\" in \"banana\" begins at index 2.",
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
      "prompt_ko": "입력된 문자열에서 골뱅이(\"@\")가 처음 등장하는 인덱스를 출력하도록 빈칸을 채워보세요. (터미널 입력: dev@py.org)",
      "prompt_en": "Fill in the method name to print the first index of \"@\" in mail (Terminal input: dev@py.org).",
      "hint_ko": "문자열 안에서 특정 기호를 '찾다·발견하다'라는 뜻의 네 글자 영어 동사를 메서드 이름으로 적어 첫 인덱스를 구해보세요.",
      "hint_en": "Type the 4-letter English verb meaning 'locate or discover' as the method name to get the first index of \"@\".",
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
      "prompt_ko": "문자열의 .count(부분문자열) 메서드는 대상 문자열 안에서 지정한 부분 문자열이 겹치지 않고 몇 번 등장하는지 정수로 세어 반환합니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "The string .count(sub) method counts and returns the integer number of non-overlapping occurrences of sub inside the string. Trace the block code.",
      "hint_ko": "찾는 부분 문자열이 한 번도 등장하지 않으면 .count()는 0을 반환합니다.",
      "hint_en": "If the substring does not appear at all, .count() simply returns 0.",
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
      "prompt_ko": "소문자로 변환한 입력 문자열에서 알파벳 \"a\"의 등장 횟수를 출력하도록 빈칸을 채워보세요. (터미널 입력: Banana)",
      "prompt_en": "Fill in the blank to count how many times \"a\" appears in the lowercased input (Terminal input: Banana).",
      "hint_ko": "문자열 안에 특정 글자가 몇 개 들어 있는지 '세다'를 뜻하는 다섯 글자 영어 동사를 메서드 이름으로 채워보세요.",
      "hint_en": "Enter the 5-letter English verb meaning 'tally the total number of' to get how many times \"a\" appears.",
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
      "prompt_ko": ".lstrip()은 문자열의 왼쪽(left) 끝 공백만 제거하고, .rstrip()은 오른쪽(right) 끝 공백만 제거하여 반대쪽 공백은 그대로 유지합니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": ".lstrip() removes leading whitespace from the left side only, while .rstrip() removes trailing whitespace from the right side only. Trace the block code.",
      "hint_ko": "양쪽을 모두 지우는 .strip()과 달리 원하는 방향의 여백이나 문자만 선택적으로 제거할 때 사용합니다.",
      "hint_en": "Unlike .strip() which trims both ends, .lstrip() and .rstrip() trim only one chosen direction.",
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
      "prompt_ko": "입력 문자열의 왼쪽 끝 \"0\"들과 오른쪽 끝 마침표(\".\")들을 차례로 제거해 출력해보세요. (예: 0070. -> 70) (터미널 입력: 0042...)",
      "prompt_en": "Remove leading \"0\" characters and trailing \".\" characters from code and print it (e.g., 0070. -> 70). (Terminal input: 0042...)",
      "hint_ko": "왼쪽(left)과 오른쪽(right)의 첫 글자를 strip 앞에 각각 붙인 여섯 글자 메서드 두 개를 차례로 연결해 양끝의 지정 문자만 벗겨 보세요.",
      "hint_en": "Chain the two 6-letter directional trimming methods formed by placing the first letter of 'left' and then 'right' before strip.",
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
      "prompt_ko": ".find()로 특정 구분 기호의 위치(pos)를 찾고 pos != -1인지 확인한 뒤, 슬라이싱 mail[pos + 1:]을 사용하면 기호 바로 뒷부분 문자열만 안전하게 추출할 수 있습니다. 블록의 코드를 따라 입력해보세요. (터미널 입력: a@py.kr)",
      "prompt_en": "Locating a delimiter's index pos with .find(), checking pos != -1, and slicing mail[pos + 1:] safely extracts everything after the delimiter. Trace the block code. (Terminal input: a@py.kr)",
      "hint_ko": "pos는 구분 기호 자체의 위치이므로, 기호를 제외한 뒷부분을 잘라내려면 시작 인덱스를 pos + 1로 지정합니다.",
      "hint_en": "Since pos is the index of the delimiter itself, start the slice at pos + 1 to exclude the delimiter.",
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
      "prompt_ko": "한 줄 코드에서 \"#\" 주석 기호가 있으면 그 앞부분만 잘라내고 오른쪽 끝 공백을 제거해 출력해보세요. (예: x = 1  # ok -> x = 1) (터미널 입력: x = 1  # ok  )",
      "prompt_en": "If \"#\" exists in line, slice before \"#\" and trim trailing whitespace before printing (e.g., x = 1  # ok -> x = 1). (Terminal input: x = 1  # ok  )",
      "hint_ko": "네 글자 위치 탐색 메서드로 기호를 찾고, 실패 값(-1)과 '같지 않음'을 뜻하는 비교 연산자로 검사한 뒤 오른쪽(right) 첫 글자를 붙인 공백 제거 메서드를 호출하세요.",
      "hint_en": "Use the 4-letter search method, check that the index is 'not equal to' -1, and trim the right side with the 'right' + strip method.",
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
      "prompt_ko": "while 반복문 조건에서 .find(\"  \") != -1로 연속된 공백이 남아 있는지 검사하며 .replace()를 반복하면, 여러 칸 벌어졌던 공백을 모두 한 칸 공백으로 압축할 수 있습니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Looping with while msg.find(\"  \") != -1: and calling .replace(\"  \", \" \") repeatedly collapses any run of multiple spaces down to a single space. Trace the block code.",
      "hint_ko": "반복이 끝난 뒤 .count(\" \")를 호출하면 최종 문자열에 남은 단일 공백의 개수를 확인할 수 있습니다.",
      "hint_en": "Calling .count(\" \") after the loop finishes counts the remaining single spaces in the normalized string.",
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
      "hint_ko": "왼쪽(left) 첫 글자를 붙인 공백 제거 메서드 뒤에 네 글자 위치 탐색 메서드를 이어 호출해 시작 위치(0)를 확인하고, 다섯 글자 개수 세기 메서드로 느낌표 수를 누적하세요.",
      "hint_en": "Chain the left-side trim method with the 4-letter index search method to check index 0, then add the 5-letter occurrence tally of \"!\".",
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
      "prompt_ko": "소문자로 바꾼 입력에 \"py\"가 있으면 \"FOUND\", 없으면 \"NO\"가 출력되도록 탐색 결과 비교 조건 버그를 고쳐보세요. (터미널 입력: Python)",
      "prompt_en": "Fix the condition bug where .find(\"py\") returning 0 or -1 was tested directly as a boolean (Terminal input: Python).",
      "hint_ko": "맨 앞(0번)에서 찾으면 0은 거짓으로, 못 찾아서 나온 -1은 0이 아닌 수라 참으로 판정되어 정반대로 동작합니다. 실패 값(-1)과 같지 않은지 명시적으로 비교하세요.",
      "hint_en": "In boolean context, index 0 evaluates to false while -1 evaluates to true! Explicitly compare the search result against -1 with the inequality operator.",
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
      "prompt_ko": "오른쪽 끝의 \"!\"들만 지워 s에 저장한 코드 아래에 한 줄을 추가하여 s 안에 남아 있는 \"!\"의 개수를 출력해보세요. (예: hi!go!! -> 1) (터미널 입력: hi!wow!!!)",
      "prompt_en": "Add one line below to print how many \"!\" characters remain inside s (e.g., hi!go!! -> 1). (Terminal input: hi!wow!!!)",
      "hint_ko": "오른쪽 끝 느낌표들이 제거된 변수 s에서 아직 문자열 내부에 남아 있는 느낌표가 몇 개인지 세는 메서드를 호출해 출력 함수로 감싸 보세요.",
      "hint_en": "Call the 5-letter occurrence-tallying method on s with \"!\" as its argument, and pass that expression into the output function.",
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
      "hint_ko": "왼쪽 공백 두 칸만 지워지고 오른쪽 끝 공백 두 칸은 그대로 남는다는 점에 유의하여 전체 글자 수, 부분 문자열 등장 횟수, 그리고 0번부터 센 글자 위치를 차례로 계산해보세요.",
      "hint_en": "Remember that only the leading spaces are removed while the two trailing spaces remain when counting total length, pattern matches, and zero-based index.",
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
