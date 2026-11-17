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
  "totalQuestions": 15,
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] .find() 메서드로 부분 문자열의 첫 시작 인덱스와 없을 때의 -1을 출력해보세요.",
      "prompt_en": "[Block] Use the string .find(sub) method to print the first index of \"na\" and -1 when \"z\" is absent.",
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
      "prompt_ko": "[빈칸 채우기] 입력 문자열에서 \"@\"가 처음 등장하는 인덱스를 출력하도록 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the method name to print the first index of \"@\" in mail.",
      "hint_ko": "문자열 안에서 특정 기호의 첫 인덱스를 찾는 네 글자 메서드 find를 적어보세요.",
      "hint_en": "Type the 4-letter method find to get the first index of \"@\".",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 문자열의 .count() 메서드로 부분 문자열 \"ok\"의 등장 횟수를 세어 출력해보세요.",
      "prompt_en": "[Block] Use the string .count(sub) method to count and print how many times \"ok\" appears.",
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
      "prompt_ko": "[빈칸 채우기] 소문자로 변환한 입력에서 알파벳 \"a\"의 등장 횟수를 출력하도록 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the blank to count how many times \"a\" appears in the lowercased input.",
      "hint_ko": "특정 글자가 몇 번 등장하는지 세는 다섯 글자 메서드 count를 채워보세요.",
      "hint_en": "Enter the 5-letter method count to get how many times \"a\" appears.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] .lstrip()과 .rstrip()으로 왼쪽 공백과 오른쪽 공백을 각각 제거해 비교해보세요.",
      "prompt_en": "[Block] Use .lstrip() and .rstrip() to remove leading and trailing whitespace respectively.",
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
      "prompt_ko": "[빈칸 채우기] 왼쪽 끝 \"0\"들과 오른쪽 끝 마침표(\".\")들을 차례로 제거해 출력해보세요.",
      "prompt_en": "[Fill Blank] Remove leading \"0\" chars and trailing \".\" chars from code and print it.",
      "hint_ko": "왼쪽(left)과 오른쪽(right)의 첫 글자를 strip 앞에 붙인 lstrip과 rstrip을 차례로 연결하세요.",
      "hint_en": "Chain lstrip and rstrip to trim leading \"0\" and trailing \".\" characters.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] .find(\"@\")로 위치를 찾아 기호 뒷부분 도메인만 슬라이싱해 출력해보세요.",
      "prompt_en": "[Block] Locate \"@\" with .find(), check pos != -1, and slice mail[pos + 1:] to extract the domain.",
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
      "prompt_ko": "[빈칸 채우기] \"#\" 기호가 있으면 앞부분의 오른쪽 공백을 제거해 출력하도록 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] If \"#\" exists in line, slice before \"#\" and trim trailing spaces before printing.",
      "hint_ko": "위치 탐색 메서드 find로 기호를 찾고, 슬라이싱한 문자열 뒤에 오른쪽 공백 제거 메서드 rstrip을 호출하세요.",
      "hint_en": "Use find to locate \"#\", and call rstrip on the slice line[:pos].",
      "targetCode": "line = input().rstrip()\npos = line.find(\"#\")\nif pos != -1:\n    print(line[:pos].rstrip())\nelse:\n    print(line)",
      "templateCode": "line = input().rstrip()\npos = line.§§§§(\"#\")\nif pos != -1:\n    print(line[:pos].§§§§§§())\nelse:\n    print(line)",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] while 조건에서 .find(\"  \") != -1을 검사하며 연속 공백을 한 칸으로 압축해보세요.",
      "prompt_en": "[Block] Loop with while msg.find(\"  \") != -1: and .replace(\"  \", \" \") to collapse multiple spaces.",
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
      "prompt_ko": "[빈칸 채우기] 연속된 하이픈(\"--\")이 없을 때까지 하나로 줄인 뒤 남은 \"-\" 개수를 함께 출력해보세요.",
      "prompt_en": "[Fill Blank] Collapse \"--\" into \"-\" in a while loop and print the resulting string and \"-\" count.",
      "hint_ko": "while 조건에는 위치 탐색 메서드 find를 적고, 출력문에는 개수 세기 메서드 count를 적으세요.",
      "hint_en": "Use find in the while condition and count in the print statement.",
      "targetCode": "s = \"--hello--world--\"\nwhile s.find(\"--\") != -1:\n    s = s.replace(\"--\", \"-\")\nprint(s, s.count(\"-\"))",
      "templateCode": "s = \"--hello--world--\"\nwhile s.§§§§(\"--\") != -1:\n    s = s.replace(\"--\", \"-\")\nprint(s, s.§§§§§(\"-\"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "-hello-world- 3"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 소문자 입력에 \"py\"가 있으면 FOUND를 출력하도록 비교 연산자 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the comparison operator so FOUND is printed when \"py\" is present in s.",
      "hint_ko": ".find()는 부분 문자열을 찾았을 때 -1이 아닌 인덱스를 반환하므로 == -1을 != -1로 수정하세요.",
      "hint_en": ".find() returns -1 when not found, so check s.find(\"py\") != -1 for presence.",
      "templateCode": "s = input().lower()\nif s.find(\"py\") == -1:\n    print(\"FOUND\")\nelse:\n    print(\"NO\")",
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
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 경로 왼쪽 앞의 슬래시(\"/\")들을 제거해야 하는데 반대 방향 메서드를 쓴 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the directional strip method so leading slashes are removed from path to print home/user.",
      "hint_ko": "문자열 왼쪽(앞쪽) 끝의 문자를 지우려면 .rstrip() 대신 .lstrip()을 사용해야 합니다.",
      "hint_en": "Use .lstrip(\"/\") instead of .rstrip(\"/\") to remove leading slashes from the left.",
      "templateCode": "path = \"///home/user\"\nclean = path.rstrip(\"/\")\nprint(clean)",
      "targetCode": "path = \"///home/user\"\nclean = path.lstrip(\"/\")\nprint(clean)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "home/user"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 오른쪽 \"!\"를 지운 문자열 s에 남아 있는 \"!\" 개수를 세어 cnt에 저장하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Count how many \"!\" characters remain in s and assign the count to cnt.",
      "hint_ko": "cnt = s.count(\"!\") 형태로 남아 있는 느낌표 개수를 변수 cnt에 저장하세요.",
      "hint_en": "Write cnt = s.count(\"!\") to store the remaining exclamation mark count.",
      "targetCode": "s = input().rstrip(\"!\")\ncnt = s.count(\"!\")\nprint(cnt)",
      "templateCode": "s = input().rstrip(\"!\")\n§§§§§§§§§§§§§§§§§§\nprint(cnt)",
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
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 문자열 text에서 콜론(\":\")의 첫 인덱스를 찾아 변수 idx에 저장하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Find the first index of \":\" in text and assign it to idx.",
      "hint_ko": "idx = text.find(\":\") 형태로 콜론의 시작 인덱스를 변수 idx에 저장하세요.",
      "hint_en": "Write idx = text.find(\":\") to store the index of the colon.",
      "targetCode": "text = input().lstrip()\nidx = text.find(\":\")\nprint(idx)",
      "templateCode": "text = input().lstrip()\n§§§§§§§§§§§§§§§§§§§§\nprint(idx)",
      "testCases": [
        {
          "id": 1,
          "input": "ID:42",
          "expectedOutput": "2"
        },
        {
          "id": 2,
          "input": "NONE",
          "expectedOutput": "-1"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 .lstrip(), .count(), .find() 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following Python code.",
      "hint_ko": "왼쪽 공백 두 칸만 지워지고 오른쪽 끝 공백 두 칸은 그대로 남는다는 점에 유의하여 길이, 개수, 위치를 계산해보세요.",
      "hint_en": "Remember that only leading spaces are removed while trailing spaces remain when counting length, matches, and index.",
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
