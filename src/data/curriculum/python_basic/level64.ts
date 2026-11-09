import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_64: PracticeRound = {
  "id": "py-basic-r64",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 64,
  "title_ko": "64레벨: 대소문자 변환과 리스트 문자열 결합 (.upper, .lower, .join)",
  "title_en": "Level 64: Case Conversion & String join()",
  "description_ko": ".upper(), .lower()로 대소문자를 통일하고 .join()으로 문자열 리스트를 하나로 결합하며 누적 개념을 복습합니다.",
  "description_en": "Normalize letter case with .upper() and .lower(), join string lists with .join(), and review Part 1 foundations.",
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
      "prompt_ko": "변수 word에 \"python\"을 저장하고 대문자로 변환한 결과를 res에 담아 출력해보세요. (출력 예: PYTHON)",
      "prompt_en": "Store \"python\" in word, convert it to uppercase in res, and print res (e.g., PYTHON).",
      "hint_ko": "인쇄소 활자판의 '위쪽 칸'에서 대문자라는 뜻이 유래했습니다. '더 위쪽의'를 뜻하는 다섯 글자 메서드를 문자열 뒤에 호출해보세요.",
      "hint_en": "Named after the top printer's tray holding capital letters, call the 5-letter method meaning 'higher in position' on the string.",
      "targetCode": "word = \"python\"\nres = word.upper()\nprint(res)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "PYTHON"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "입력받은 문자열을 모두 대문자로 바꾸어 출력하도록 빈칸에 알맞은 메서드 이름을 채워보세요. (터미널 입력: ab12)",
      "prompt_en": "Fill in the method name to convert the input string to uppercase and print it (Terminal input: ab12).",
      "hint_ko": "인쇄 활자판의 '위쪽(윗단)'을 뜻하는 다섯 글자 영어 단어를 메서드 이름으로 적어 모든 알파벳을 대문자로 바꿔보세요.",
      "hint_en": "Type the 5-letter English word meaning 'higher in position'—from the top printer's tray for capital letters—as the method name.",
      "targetCode": "code = input()\nprint(code.upper())",
      "templateCode": "code = input()\nprint(code.§§§§§())",
      "testCases": [
        {
          "id": 1,
          "input": "ab12",
          "expectedOutput": "AB12"
        },
        {
          "id": 2,
          "input": "seoul",
          "expectedOutput": "SEOUL"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "변수 tag에 \"HELLO\"를 저장하고 모두 소문자로 변환한 결과를 small에 담아 출력해보세요. (출력 예: hello)",
      "prompt_en": "Store \"HELLO\" in tag, convert it to lowercase in small, and print small (e.g., hello).",
      "hint_ko": "소문자 활자를 보관하던 '아래쪽 칸'을 뜻하는 다섯 글자 메서드를 문자열 뒤에 붙이면 모든 알파벳을 소문자로 바꾼 새 문자열을 얻습니다.",
      "hint_en": "Call the 5-letter string method meaning 'positioned further down' (from the bottom printer's tray for small letters) to get a small-letter copy.",
      "targetCode": "tag = \"HELLO\"\nsmall = tag.lower()\nprint(small)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "hello"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "입력값을 소문자로 통일해 \"yes\"와 일치하는지 비교한 불리언 결과를 출력해보세요. (터미널 입력: YES)",
      "prompt_en": "Normalize the input to lowercase and print whether it equals \"yes\" (Terminal input: YES).",
      "hint_ko": "대소문자가 섞인 입력을 비교할 수 있도록 '더 아래쪽의'를 뜻하는 다섯 글자 소문자 변환 메서드를 빈칸에 채워보세요.",
      "hint_en": "Normalize the input to small letters before comparing by typing the 5-letter method name meaning 'further down' (opposite of higher).",
      "targetCode": "ans = input()\nprint(ans.lower() == \"yes\")",
      "templateCode": "ans = input()\nprint(ans.§§§§§() == \"yes\")",
      "testCases": [
        {
          "id": 1,
          "input": "YES",
          "expectedOutput": "True"
        },
        {
          "id": 2,
          "input": "No",
          "expectedOutput": "False"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "리스트 tags([\"py\", \"web\", \"ai\"])의 요소들을 하이픈(\"-\")으로 이어 붙인 문자열을 line에 저장해 출력해보세요. (출력 예: py-web-ai)",
      "prompt_en": "Join tags ([\"py\", \"web\", \"ai\"]) with \"-\" into line and print it (e.g., py-web-ai).",
      "hint_ko": "구분자 문자열을 주체로 삼아 '연결하다·합류하다'를 뜻하는 네 글자 메서드를 호출하고 괄호 안에 문자열 리스트를 넘기면 하나로 이어 붙일 수 있습니다.",
      "hint_en": "On the separator string itself, call the 4-letter method meaning 'connect or unite together' and pass the list of strings as its argument.",
      "targetCode": "tags = [\"py\", \"web\", \"ai\"]\nline = \"-\".join(tags)\nprint(line)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "py-web-ai"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "공백 기준으로 나눈 단어 리스트를 하이픈(-)으로 연결해 한 줄로 출력해보세요. (예: go fast -> go-fast) (터미널 입력: red green blue)",
      "prompt_en": "Join the whitespace-split word list with hyphens (-) and print the result (e.g., go fast -> go-fast). (Terminal input: red green blue)",
      "hint_ko": "하이픈 구분자 뒤에 '결합하다·합치다'를 뜻하는 네 글자 영어 동사를 메서드로 적어 단어 리스트를 한 줄로 이어보세요.",
      "hint_en": "After the hyphen string, enter the 4-letter English verb meaning 'unite or connect together' to combine the list elements.",
      "targetCode": "words = input().split()\nprint(\"-\".join(words))",
      "templateCode": "words = input().split()\nprint(\"-\".§§§§(words))",
      "testCases": [
        {
          "id": 1,
          "input": "red green blue",
          "expectedOutput": "red-green-blue"
        },
        {
          "id": 2,
          "input": "go fast",
          "expectedOutput": "go-fast"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "입력을 소문자로 바꾼 뒤 공백 단위로 나누고, 밑줄(\"_\")로 결합해 slug에 담아 출력해보세요. (예: Py Code -> py_code) (터미널 입력: My First Post)",
      "prompt_en": "Lowercase the input, split by whitespace, join with \"_\" into slug, and print slug (e.g., Py Code -> py_code). (Terminal input: My First Post)",
      "hint_ko": "입력을 소문자로 통일한 뒤 공백 기준으로 쪼개 단어 리스트를 만들고, 밑줄 문자열을 구분자로 삼아 결합 메서드로 묶어보세요.",
      "hint_en": "Convert the input to small letters, break it into a word list by whitespace, and combine that list on the underscore separator string.",
      "targetCode": "raw = input().lower()\nparts = raw.split()\nslug = \"_\".join(parts)\nprint(slug)",
      "testCases": [
        {
          "id": 1,
          "input": "My First Post",
          "expectedOutput": "my_first_post"
        },
        {
          "id": 2,
          "input": "Py Code",
          "expectedOutput": "py_code"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "입력을 대문자로 정규화해 딕셔너리 ranks에 키가 존재하면 값을, 없으면 0을 출력해보세요. (터미널 입력: vip)",
      "prompt_en": "Normalize input to uppercase and print its value in ranks, or 0 if missing (Terminal input: vip).",
      "hint_ko": "딕셔너리 키가 모두 대문자이므로 먼저 다섯 글자 대문자 변환 메서드로 정규화한 뒤, '~ 안에'를 뜻하는 두 글자 포함 연산자로 키 존재 여부를 검사하세요.",
      "hint_en": "Since the dictionary keys are all capitals, normalize the input with the 5-letter capitalizing method, then test membership with the 2-letter 'inside' keyword.",
      "targetCode": "ranks = {\"VIP\": 20, \"GOLD\": 10}\nkey = input().upper()\nif key in ranks:\n    print(ranks[key])\nelse:\n    print(0)",
      "templateCode": "ranks = {\"VIP\": 20, \"GOLD\": 10}\nkey = input().§§§§§()\nif key §§ ranks:\n    print(ranks[key])\nelse:\n    print(0)",
      "testCases": [
        {
          "id": 1,
          "input": "vip",
          "expectedOutput": "20"
        },
        {
          "id": 2,
          "input": "silver",
          "expectedOutput": "0"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "리스트 raw의 각 문자열에서 양쪽 공백을 지우고 대문자로 바꿔 clean에 추가한 뒤 \"/\"로 이어 출력해보세요. (출력 예: SEOUL/BUSAN)",
      "prompt_en": "Strip and uppercase each item in raw, append to clean, and print joined by \"/\" (e.g., SEOUL/BUSAN).",
      "hint_ko": "반복문 안에서 각 문자열의 양쪽 공백 제거와 대문자 변환을 연달아 호출해 새 리스트에 담고, 마지막에 슬래시 구분자로 결합해 출력해보세요.",
      "hint_en": "Inside the loop, chain whitespace trimming and capital-letter conversion on each item before appending it, then combine the list using the slash separator.",
      "targetCode": "raw = [\" Seoul \", \" busan \"]\nclean = []\nfor s in raw:\n    clean.append(s.strip().upper())\nprint(\"/\".join(clean))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "SEOUL/BUSAN"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "문자열을 대문자로 바꾸고 공백으로 나눈 뒤 \"#\"으로 묶어 돌려주는 함수 make_tag를 완성해보세요. (출력 예: PY#CODE)",
      "prompt_en": "Complete make_tag so it uppercases text, splits by spaces, and returns items joined with \"#\" (e.g., PY#CODE).",
      "hint_ko": "다섯 글자 대문자 변환 메서드로 글자를 키운 뒤, 함수 결과를 돌려주는 여섯 글자 키워드와 샵 구분자 뒤의 네 글자 결합 메서드를 차례로 채워보세요.",
      "hint_en": "Fill in the 5-letter capitalizing method, the 6-letter keyword that sends a value back from a function, and the 4-letter list-combining method on \"#\".",
      "targetCode": "def make_tag(text):\n    items = text.upper().split()\n    return \"#\".join(items)\n\nprint(make_tag(\"py code\"))",
      "templateCode": "def make_tag(text):\n    items = text.§§§§§().split()\n    §§§§§§ \"#\".§§§§(items)\n\nprint(make_tag(\"py code\"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "PY#CODE"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "3개의 단어를 소문자로 모아 쉼표(,)로 연결해 출력하려다 발생한 메서드 호출 주체 오류를 고쳐보세요. (출력 예: a,b,c) (터미널 입력: A, B, C 한 줄씩)",
      "prompt_en": "Fix the AttributeError caused by calling join on the list instead of the separator string (e.g., a,b,c). (Terminal input: A, B, C line by line)",
      "hint_ko": "문자열 결합 메서드는 리스트가 아니라 '사이에 끼워 넣을 구분자 문자열'이 가지고 있으므로, 호출 주체와 괄호 안 인자의 위치를 서로 바꿔야 합니다.",
      "hint_en": "The list-combining method belongs to the separator string rather than the list object, so swap the caller and the argument inside the parentheses.",
      "templateCode": "items = []\ni = 0\nwhile i < 3:\n    items.append(input().lower())\n    i += 1\nprint(items.join(\",\"))",
      "targetCode": "items = []\ni = 0\nwhile i < 3:\n    items.append(input().lower())\n    i += 1\nprint(\",\".join(items))",
      "testCases": [
        {
          "id": 1,
          "input": "A\nB\nC",
          "expectedOutput": "a,b,c"
        },
        {
          "id": 2,
          "input": "Py\nJs\nGo",
          "expectedOutput": "py,js,go"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "소문자로 변환해 분리한 단어 리스트 코드 아래에 한 줄을 추가하여 단일 공백(\" \")으로 결합한 문자열을 출력해보세요. (예: py code) (터미널 입력: HELLO   WORLD)",
      "prompt_en": "Add one line below to join the words list with a single space (\" \") and print it (e.g., py code). (Terminal input: HELLO   WORLD)",
      "hint_ko": "한 칸짜리 공백 문자열을 구분자 주체로 두고 단어 리스트를 인자로 넘겨 하나로 합친 결과를 출력 함수로 감싸 작성해보세요.",
      "hint_en": "Call the string-combining method on a single-space string literal with the word list as its argument, and pass the result to the output function.",
      "targetCode": "words = input().lower().split()\nprint(\" \".join(words))",
      "templateCode": "words = input().lower().split()\n§§§§§§§§§§§§§§§§§§§§§§",
      "testCases": [
        {
          "id": 1,
          "input": "HELLO   WORLD",
          "expectedOutput": "hello world"
        },
        {
          "id": 2,
          "input": "Py   Code",
          "expectedOutput": "py code"
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
      "hint_ko": "세 단어 중 글자 수가 2이면서 특정 문자열과 같지 않은 두 조건을 모두 만족하는 단어만 대문자가 되고, 그렇지 않은 단어는 소문자로 바뀌어 하이픈으로 연결됩니다.",
      "hint_en": "Check each word against both halves of the compound condition: only two-character words not matching the excluded string become capitals, while the rest turn small.",
      "targetCode": "words = [\"Py\", \"AI\", \"go\"]\nout = []\nfor w in words:\n    if len(w) == 2 and w != \"AI\":\n        out.append(w.upper())\n    else:\n        out.append(w.lower())\nprint(\"-\".join(out))",
      "choices": [
        "PY-ai-GO",
        "PY-AI-GO",
        "py-ai-go",
        "py-AI-go"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "PY-ai-GO"
        }
      ]
    }
  ]
};
