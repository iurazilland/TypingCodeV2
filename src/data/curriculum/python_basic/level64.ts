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
      "hint_ko": "문자열 뒤에 .upper()를 붙이면 모든 알파벳을 대문자로 바꾼 새 문자열을 돌려줍니다.",
      "hint_en": "Call word.upper() to get a new string with all letters converted to uppercase.",
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
      "prompt_ko": "입력받은 문자열을 모두 대문자로 바꾸어 출력하도록 빈칸에 알맞은 메서드 이름을 채워보세요. (예: ab12 -> AB12)",
      "prompt_en": "Fill in the method name to convert the input string to uppercase and print it (e.g., ab12 -> AB12).",
      "hint_ko": "소문자 알파벳을 대문자로 변환할 때는 .upper() 메서드를 사용합니다.",
      "hint_en": "Use the .upper() method to convert lowercase letters to uppercase.",
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
      "hint_ko": "문자열 뒤에 .lower()를 붙이면 모든 알파벳을 소문자로 바꾼 새 문자열을 얻을 수 있습니다.",
      "hint_en": "Call tag.lower() to return a lowercase copy of the string.",
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
      "prompt_ko": "입력값을 소문자로 통일해 \"yes\"와 일치하는지 비교한 불리언 결과를 출력해보세요. (예: YES -> True)",
      "prompt_en": "Normalize the input to lowercase and print whether it equals \"yes\" (e.g., YES -> True).",
      "hint_ko": "대소문자가 섞인 입력을 비교할 때는 ans.lower() == \"yes\"처럼 소문자로 통일한 뒤 비교합니다.",
      "hint_en": "Use ans.lower() == \"yes\" to compare case-insensitively.",
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
      "hint_ko": "\"구분자\".join(리스트) 형태로 작성하므로 \"-\".join(tags)를 line에 대입합니다.",
      "hint_en": "Call join on the separator string: \"-\".join(tags).",
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
      "prompt_ko": "공백 기준으로 나눈 단어 리스트를 하이픈(-)으로 연결해 한 줄로 출력해보세요. (예: go fast -> go-fast)",
      "prompt_en": "Join the whitespace-split word list with hyphens (-) and print the result (e.g., go fast -> go-fast).",
      "hint_ko": ".split()으로 쪼갠 문자열 리스트를 다시 하나의 문자열로 합칠 때는 \"-\".join(words)를 사용합니다.",
      "hint_en": "Use \"-\".join(words) to combine a list of strings with \"-\".",
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
      "prompt_ko": "입력을 소문자로 바꾼 뒤 공백 단위로 나누고, 밑줄(\"_\")로 결합해 slug에 담아 출력해보세요. (예: Py Code -> py_code)",
      "prompt_en": "Lowercase the input, split by whitespace, join with \"_\" into slug, and print slug (e.g., Py Code -> py_code).",
      "hint_ko": "input().lower() 결과를 .split()으로 나누어 리스트로 만든 뒤 \"_\".join(parts)로 결합합니다.",
      "hint_en": "Use input().lower(), then raw.split(), and finally \"_\".join(parts).",
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
      "prompt_ko": "입력을 대문자로 정규화해 딕셔너리 ranks에 키가 존재하면 값을, 없으면 0을 출력해보세요. (예: vip -> 20)",
      "prompt_en": "Normalize input to uppercase and print its value in ranks, or 0 if missing (e.g., vip -> 20).",
      "hint_ko": "input().upper()로 대문자 키를 만들고 if key in ranks: 조건으로 딕셔너리 포함 여부를 확인합니다.",
      "hint_en": "Convert input with .upper() and check membership using if key in ranks:.",
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
      "hint_ko": "for 반복문 안에서 clean.append(s.strip().upper())를 실행한 뒤 \"/\".join(clean)을 출력하세요.",
      "hint_en": "Append s.strip().upper() inside the loop, then print \"/\".join(clean).",
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
      "hint_ko": "text.upper().split()으로 대문자 단어 리스트를 만든 뒤 return \"#\".join(items)로 결과를 반환합니다.",
      "hint_en": "Use text.upper().split() and return \"#\".join(items).",
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
      "prompt_ko": "3개의 단어를 소문자로 모아 쉼표(,)로 연결해 출력하려다 발생한 메서드 호출 주체 오류를 고쳐보세요. (출력 예: a,b,c)",
      "prompt_en": "Fix the AttributeError caused by calling join on the list instead of the separator string (e.g., a,b,c).",
      "hint_ko": "리스트에는 .join() 메서드가 없습니다. 구분자 문자열 앞에 두고 \",\".join(items) 형태로 호출해야 합니다.",
      "hint_en": "Lists do not have .join(); call \",\".join(items) on the separator string instead.",
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
      "prompt_ko": "소문자로 변환해 분리한 단어 리스트 코드 아래에 한 줄을 추가하여 단일 공백(\" \")으로 결합한 문자열을 출력해보세요. (예: py code)",
      "prompt_en": "Add one line below to join the words list with a single space (\" \") and print it (e.g., py code).",
      "hint_ko": "둘째 줄에 print(\" \".join(words))를 작성하면 단어들이 한 칸 공백으로 깔끔하게 연결됩니다.",
      "hint_en": "Write print(\" \".join(words)) on the second line.",
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
      "hint_ko": "길이가 2이면서 \"AI\"가 아닌 \"Py\"와 \"go\"만 대문자가 되고, \"AI\"는 else로 가서 소문자 \"ai\"가 된 뒤 \"-\"로 결합됩니다.",
      "hint_en": "\"Py\" and \"go\" become uppercase (\"PY\", \"GO\"), while \"AI\" goes to else (\"ai\"), joining into PY-ai-GO.",
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
