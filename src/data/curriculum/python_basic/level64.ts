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
      "prompt_ko": "[블록 조립] 문자열의 .upper() 메서드로 모든 알파벳을 대문자로 변환해 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Use the string .upper() method to convert all alphabetic characters to uppercase and print the result.",
      "hint_ko": "원본 문자열은 그대로 유지되므로 .upper()의 반환값을 변수에 저장해 출력합니다.",
      "hint_en": "Because strings are immutable, store the new uppercase string returned by .upper() into a variable before printing.",
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
      "prompt_ko": "[빈칸 채우기] 입력받은 문자열을 모두 대문자로 바꾸어 출력하도록 메서드 이름을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the method name to convert the input string to uppercase and print it.",
      "hint_ko": "모든 알파벳을 대문자로 바꾸는 다섯 글자 메서드 upper를 적어보세요.",
      "hint_en": "Type the 5-letter method upper to convert letters to uppercase.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 문자열의 .lower() 메서드로 모든 대문자를 소문자로 변환해 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Use the string .lower() method to convert all uppercase letters to lowercase and print the result.",
      "hint_ko": "대소문자가 섞인 입력값을 비교하기 전에 .lower()로 소문자 통일을 해 두면 일관되게 처리할 수 있습니다.",
      "hint_en": "Normalizing text with .lower() is a common way to perform case-insensitive comparisons.",
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
      "prompt_ko": "[빈칸 채우기] 입력값을 소문자로 통일해 \"yes\"와 일치하는지 비교한 불리언을 출력해보세요.",
      "prompt_en": "[Fill Blank] Normalize the input to lowercase and print whether it equals \"yes\".",
      "hint_ko": "대소문자가 섞인 입력을 비교할 수 있도록 다섯 글자 소문자 변환 메서드 lower를 채워보세요.",
      "hint_en": "Normalize the input to small letters before comparing by typing lower.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] \"-\".join(tags)로 문자열 리스트 요소 사이에 하이픈을 넣어 하나로 합쳐보세요.",
      "prompt_en": "[Block] Call \"-\".join(tags) to concatenate all strings in the list with hyphens between them.",
      "hint_ko": ".join()은 리스트가 아니라 사이에 끼워 넣을 구분자 문자열(\"-\")에서 호출하고, 괄호 안에 리스트를 인자로 넘깁니다.",
      "hint_en": "Invoke .join() on the separator string (\"-\") itself and pass the list of strings inside the parentheses.",
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
      "prompt_ko": "[빈칸 채우기] 공백으로 나눈 단어 리스트를 하이픈(-)으로 연결해 출력해보세요.",
      "prompt_en": "[Fill Blank] Join the whitespace-split word list with hyphens (-) and print it.",
      "hint_ko": "하이픈 구분자 뒤에 네 글자 문자열 결합 메서드 join을 적어 단어 리스트를 한 줄로 이어보세요.",
      "hint_en": "After the hyphen string, enter the 4-letter method join to combine the list elements.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] .lower()와 .split()으로 나눈 단어를 \"_\".join()으로 묶어 슬러그를 만들어보세요.",
      "prompt_en": "[Block] Chain .lower(), .split(), and \"_\".join() to build a lowercase underscore slug.",
      "hint_ko": ".split()은 문자열을 쪼개 리스트로 만들고, .join()은 그 리스트를 지정한 구분자로 다시 하나의 문자열로 합칩니다.",
      "hint_en": ".split() breaks a string into a list of words, while .join() glues that list back together with the chosen separator.",
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
      "prompt_ko": "[빈칸 채우기] 입력을 대문자로 정규화해 딕셔너리 ranks에 키가 존재하는지 불리언을 출력해보세요.",
      "prompt_en": "[Fill Blank] Normalize input to uppercase and print whether the key exists in ranks.",
      "hint_ko": "다섯 글자 대문자 변환 메서드 upper로 정규화한 뒤, 포함 연산자 in으로 키 존재 여부를 검사하세요.",
      "hint_en": "Normalize the input with upper, then test membership in ranks with the 2-letter keyword in.",
      "targetCode": "ranks = {\"VIP\": 20, \"GOLD\": 10}\nkey = input().upper()\nprint(key in ranks)",
      "templateCode": "ranks = {\"VIP\": 20, \"GOLD\": 10}\nkey = input().§§§§§()\nprint(key §§ ranks)",
      "testCases": [
        {
          "id": 1,
          "input": "vip",
          "expectedOutput": "True"
        },
        {
          "id": 2,
          "input": "silver",
          "expectedOutput": "False"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] for문 안에서 s.strip().upper()를 체이닝해 정제한 뒤 \"/\".join()으로 결합해보세요.",
      "prompt_en": "[Block] Chain s.strip().upper() inside a for loop and combine the cleaned items with \"/\".join().",
      "hint_ko": "s.strip()이 공백을 지운 새 문자열을 반환하므로 그 뒤에 바로 .upper()를 이어 붙여 호출할 수 있습니다.",
      "hint_en": "Because s.strip() returns a new string, you can immediately call .upper() on that returned string.",
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
      "prompt_ko": "[빈칸 채우기] 단어들을 대문자로 변환해 리스트에 모은 뒤 \"#\"으로 결합해 PY#CODE#AI를 출력해보세요.",
      "prompt_en": "[Fill Blank] Convert each word to uppercase in a loop and join them with \"#\" to print PY#CODE#AI.",
      "hint_ko": "대문자 변환 메서드 upper로 글자를 키운 뒤, 샵 구분자 뒤의 결합 메서드 join을 채워보세요.",
      "hint_en": "Fill in the 5-letter method upper inside the loop and the 4-letter method join on \"#\".",
      "targetCode": "words = [\"py\", \"code\", \"ai\"]\nup = []\nfor w in words:\n    up.append(w.upper())\nprint(\"#\".join(up))",
      "templateCode": "words = [\"py\", \"code\", \"ai\"]\nup = []\nfor w in words:\n    up.append(w.§§§§§())\nprint(\"#\".§§§§(up))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "PY#CODE#AI"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 3개의 단어를 쉼표(,)로 연결하려다 발생한 .join() 호출 주체 오류를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the AttributeError caused by calling join on the list instead of the separator string.",
      "hint_ko": ".join() 메서드는 리스트가 아니라 구분자 문자열(\",\")에서 호출하고 괄호 안에 리스트(items)를 넘겨야 합니다.",
      "hint_en": "Call .join() on the separator string \",\" and pass items inside the parentheses.",
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
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 대문자 문자열 \"ADMIN\"과 비교하면서 .lower()를 호출한 버그를 고쳐 OK를 출력해보세요.",
      "prompt_en": "[Fix Bug] Fix the case conversion bug when comparing against uppercase \"ADMIN\".",
      "hint_ko": "비교 대상 문자열이 대문자 \"ADMIN\"이므로 입력값도 .upper()로 대문자 변환해야 일치 여부를 확인할 수 있습니다.",
      "hint_en": "Since the target literal is uppercase \"ADMIN\", call .upper() instead of .lower().",
      "templateCode": "code = input().strip()\nif code.lower() == \"ADMIN\":\n    print(\"OK\")\nelse:\n    print(\"NO\")",
      "targetCode": "code = input().strip()\nif code.upper() == \"ADMIN\":\n    print(\"OK\")\nelse:\n    print(\"NO\")",
      "testCases": [
        {
          "id": 1,
          "input": "admin",
          "expectedOutput": "OK"
        },
        {
          "id": 2,
          "input": "guest",
          "expectedOutput": "NO"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 단어 리스트 words를 단일 공백(\" \")으로 결합해 변수 line에 저장하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Join the words list with a single space (\" \") and assign it to line.",
      "hint_ko": "line = \" \".join(words) 형태로 공백 구분자에서 .join()을 호출해 line에 대입하세요.",
      "hint_en": "Write line = \" \".join(words) to combine the words with a single space.",
      "targetCode": "words = input().lower().split()\nline = \" \".join(words)\nprint(line)",
      "templateCode": "words = input().lower().split()\n§§§§§§§§§§§§§§§§§§§§§§\nprint(line)",
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
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 문자열 raw를 모두 대문자로 변환해 변수 tag에 저장하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Convert raw to uppercase and assign it to tag.",
      "hint_ko": "tag = raw.upper() 형태로 대문자 변환 결과를 변수 tag에 저장하세요.",
      "hint_en": "Assign raw.upper() to the variable tag.",
      "targetCode": "raw = input().strip()\ntag = raw.upper()\nprint(f\"[{tag}]\")",
      "templateCode": "raw = input().strip()\n§§§§§§§§§§§§§§§§§\nprint(f\"[{tag}]\")",
      "testCases": [
        {
          "id": 1,
          "input": "vip",
          "expectedOutput": "[VIP]"
        },
        {
          "id": 2,
          "input": "Gold",
          "expectedOutput": "[GOLD]"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 대소문자 변환과 .join() 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following Python code.",
      "hint_ko": "글자 수가 2이면서 \"AI\"가 아닌 단어만 대문자가 되고, 나머지는 소문자로 바뀌어 하이픈으로 연결됩니다.",
      "hint_en": "Only two-character words not equal to \"AI\" become uppercase, while the rest become lowercase.",
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
