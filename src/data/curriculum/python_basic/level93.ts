import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_93: PracticeRound = {
  "id": "py-basic-r93",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 93,
  "title_ko": "대소문자 변환 메서드 (.upper(), .lower(), .capitalize())",
  "title_en": "Case Conversion Methods (.upper(), .lower(), .capitalize())",
  "description_ko": ".upper(), .lower(), .capitalize(), .title() 메서드로 대소문자를 자유롭게 변환하고 조건문·컴프리헨션과 결합합니다.",
  "description_en": "Convert letter case with .upper(), .lower(), .capitalize(), and .title(), combining them with conditionals and comprehensions.",
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
      "prompt_ko": "[블록 조립] 문자열의 .upper()와 .lower() 메서드로 전체 대문자와 전체 소문자 결과를 차례대로 출력해보세요.",
      "prompt_en": "[Block] Use .upper() and .lower() to print the string in all uppercase and all lowercase.",
      "hint_ko": "문자열 뒤에 .upper()와 .lower()를 호출하면 원본은 유지된 채 변환된 새 문자열이 반환됩니다.",
      "hint_en": "Calling .upper() and .lower() returns new converted strings without mutating the original.",
      "targetCode": "word = \"PyThOn\"\nprint(word.upper())\nprint(word.lower())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "PYTHON\npython"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 입력받은 문자열의 알파벳을 모두 대문자로 변환해 출력하도록 메서드 이름을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the method name to convert all letters of the input string to uppercase.",
      "hint_ko": "모든 영문자를 대문자로 바꾸는 문자열 메서드를 호출하세요.",
      "hint_en": "Call the string method that converts all letters to uppercase.",
      "targetCode": "code = input()\nprint(code.upper())",
      "templateCode": "code = input()\nprint(code.§§§§§§())",
      "testCases": [
        {
          "id": 1,
          "input": "ab12",
          "expectedOutput": "AB12"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] .capitalize()로 문장 첫 글자만 대문자로 바꾸고, .title()로 단어마다 첫 글자를 대문자로 바꿔 출력해보세요.",
      "prompt_en": "[Block] Use .capitalize() for sentence case and .title() for title case on the string.",
      "hint_ko": "문장 맨 앞 한 글자만 대문자로 할지, 공백으로 나뉜 단어마다 첫 글자를 대문자로 할지 구분해 호출합니다.",
      "hint_en": "Distinguish between capitalizing only the very first character vs. the first character of every word.",
      "targetCode": "msg = \"hello python world\"\nprint(msg.capitalize())\nprint(msg.title())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Hello python world\nHello Python World"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 문자열의 맨 첫 글자만 대문자이고 나머지는 소문자가 되도록 메서드를 채워 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the method name so only the very first character is capitalized and the rest become lowercase.",
      "hint_ko": "문장의 첫 글자만 대문자로 만드는 문자열 메서드를 입력하세요.",
      "hint_en": "Enter the string method that capitalizes only the first character of the string.",
      "targetCode": "text = \"pYTHON cODE\"\nprint(text.capitalize())",
      "templateCode": "text = \"pYTHON cODE\"\nprint(text.§§§§§§§§§§§())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Python code"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 입력값의 양쪽 공백을 제거하고 소문자로 통일해 \"yes\"와 같으면 OK, 아니면 NO를 출력해보세요.",
      "prompt_en": "[Block] Strip and lowercase the user input, then print OK if it equals \"yes\", or NO otherwise.",
      "hint_ko": "공백 제거 메서드 뒤에 소문자 변환 메서드를 연달아 호출하면 대소문자 구분 없이 비교할 수 있습니다.",
      "hint_en": "Chaining whitespace removal with lowercase conversion allows case-insensitive comparison.",
      "targetCode": "cmd = input().strip().lower()\nif cmd == \"yes\":\n    print(\"OK\")\nelse:\n    print(\"NO\")",
      "testCases": [
        {
          "id": 1,
          "input": "  YES ",
          "expectedOutput": "OK"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 공백을 제거한 입력 문자열을 소문자로 통일해 \"yes\"와 일치하는지 불리언 결과를 출력해보세요.",
      "prompt_en": "[Fill Blank] Normalize the stripped input to lowercase and print whether it equals \"yes\".",
      "hint_ko": "소문자 리터럴 \"yes\"와 비교하기 전에 소문자 변환 메서드를 호출하세요.",
      "hint_en": "Call the lowercase conversion method before comparing against \"yes\".",
      "targetCode": "ans = input().strip()\nprint(ans.lower() == \"yes\")",
      "templateCode": "ans = input().strip()\nprint(ans.§§§§§§() == \"yes\")",
      "testCases": [
        {
          "id": 1,
          "input": "Yes",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 리스트 컴프리헨션을 사용해 words의 모든 단어를 대문자로 바꾼 새 리스트를 출력해보세요.",
      "prompt_en": "[Block] Use a list comprehension to convert every word in words to uppercase and print the new list.",
      "hint_ko": "대괄호 안의 변환식 자리에서 각 단어 변수에 대문자 변환 메서드를 호출합니다.",
      "hint_en": "Call the uppercase method on the loop variable in the expression part of the list comprehension.",
      "targetCode": "words = [\"py\", \"ai\", \"web\"]\ntags = [w.upper() for w in words]\nprint(tags)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['PY', 'AI', 'WEB']"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 리스트 컴프리헨션으로 각 영문 이름의 단어 첫 글자마다 대문자로 바꾼 리스트를 출력해보세요.",
      "prompt_en": "[Fill Blank] Use a list comprehension to convert each name so every word starts with an uppercase letter.",
      "hint_ko": "단어마다 첫 글자를 대문자로 바꾸는 메서드를 컴프리헨션 식에 채워보세요.",
      "hint_en": "Fill in the method that capitalizes the first letter of each word.",
      "targetCode": "names = [\"kim min\", \"lee seo\"]\nres = [n.title() for n in names]\nprint(res)",
      "templateCode": "names = [\"kim min\", \"lee seo\"]\nres = [n.§§§§§§() for n in names]\nprint(res)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['Kim Min', 'Lee Seo']"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 둘째 줄의 메서드 빈칸을 채워 양쪽 공백을 지운 단어들을 대문자로 변환한 리스트를 출력해보세요.",
      "prompt_en": "[Fill Blank] Trim whitespace, convert to uppercase, and keep only words of length 3 or more in a list comprehension.",
      "hint_ko": "문자열의 알파벳을 모두 대문자로 변환하는 메서드 이름(upper)을 채우세요.",
      "hint_en": "Supply the whitespace-trimming method, the uppercase method, and the filtering condition keyword.",
      "targetCode": "raw = [\" py \", \" web \", \"c\", \" data \"]\nclean = [s.strip().upper() for s in raw if len(s.strip()) >= 3]\nprint(clean)",
      "templateCode": "raw = [\" py \", \" web \", \"c\", \" data \"]\nclean = [s.strip().§§§§§§() for s in raw if len(s.strip()) >= 3]\nprint(clean)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['WEB', 'DATA']"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 입력 문자열을 모두 대문자로 변환해 출력하도록 잘못 호출된 소문자 메서드(lower)를 대문자 메서드(upper)로 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the NameError caused by calling the uppercase conversion as a standalone function instead of a string method.",
      "hint_ko": "알파벳을 모두 대문자로 바꿀 때는 .upper() 메서드를 사용합니다.",
      "hint_en": "Case conversion must be called as a method on the string object using dot notation.",
      "templateCode": "s = input().strip()\nprint(s.lower())",
      "targetCode": "s = input().strip()\nprint(s.upper())",
      "testCases": [
        {
          "id": 1,
          "input": "hello",
          "expectedOutput": "HELLO"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 대문자 문자열 \"ADMIN\"과 일치하는지 비교하면서 변환 방향을 반대로 쓴 논리 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the case conversion bug when comparing the input against the uppercase literal \"ADMIN\".",
      "hint_ko": "비교 대상 문자열이 모두 대문자이므로 입력값도 같은 대문자 형태로 맞춰 주어야 합니다.",
      "hint_en": "Since the target literal is all uppercase, convert the input to uppercase before comparing.",
      "templateCode": "role = input().strip()\nif role.lower() == \"ADMIN\":\n    print(\"GRANTED\")\nelse:\n    print(\"DENIED\")",
      "targetCode": "role = input().strip()\nif role.upper() == \"ADMIN\":\n    print(\"GRANTED\")\nelse:\n    print(\"DENIED\")",
      "testCases": [
        {
          "id": 1,
          "input": "admin",
          "expectedOutput": "GRANTED"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 문자열 raw의 양쪽 공백을 제거하고 소문자로 변환한 결과를 변수 clean에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Strip whitespace from raw, convert it to lowercase, and assign the result to clean.",
      "hint_ko": "변수 clean에 raw의 공백 제거 메서드와 소문자 변환 메서드를 연달아 호출한 값을 대입하세요.",
      "hint_en": "Assign raw.strip().lower() to the variable clean.",
      "targetCode": "raw = input()\nclean = raw.strip().lower()\nprint(f\"[{clean}]\")",
      "templateCode": "raw = input()\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(f\"[{clean}]\")",
      "testCases": [
        {
          "id": 1,
          "input": "  PyThOn  ",
          "expectedOutput": "[python]"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 리스트 words의 각 단어를 대문자로 변환한 리스트 컴프리헨션을 변수 up에 저장해보세요.",
      "prompt_en": "[Complete Line] Write a list comprehension that converts each w in words to uppercase and assigns it to up.",
      "hint_ko": "up = [w.upper() for w in words] 형태로 리스트 컴프리헨션을 작성하세요.",
      "hint_en": "Write up = [w.upper() for w in words] to build the uppercase list.",
      "targetCode": "words = input().split()\nup = [w.upper() for w in words]\nprint(up)",
      "templateCode": "words = input().split()\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(up)",
      "testCases": [
        {
          "id": 1,
          "input": "go web ai",
          "expectedOutput": "['GO', 'WEB', 'AI']"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 대소문자 변환 메서드들의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following case conversion code.",
      "hint_ko": ".capitalize()는 문자열 맨 첫 글자만 대문자로 만들고, .title()은 공백 기준 각 단어의 첫 글자를 대문자로 만듭니다.",
      "hint_en": ".capitalize() uppercases only the first character of the whole string, while .title() uppercases the start of each word.",
      "targetCode": "s = \"pYTHON iS fUN\"\na = s.capitalize()\nb = s.title()\nprint(a)\nprint(b[:6].upper())",
      "choices": [
        "Python is fun\nPYTHON",
        "Python Is Fun\nPYTHON",
        "Python is fun\nPython",
        "PYTHON IS FUN\nPython"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Python is fun\nPYTHON"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 리스트 컴프리헨션과 조건 분기, 대소문자 메서드가 결합된 코드의 출력 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following code combining comprehensions and case methods.",
      "hint_ko": "양쪽 공백을 제거한 길이가 2인 단어는 전체 대문자, 그 외의 단어는 첫 글자만 대문자로 변환됩니다.",
      "hint_en": "Words of stripped length 2 become all uppercase, whereas other lengths get only their first letter capitalized.",
      "targetCode": "raw = [\"  ai \", \"pYTHON\", \" go\"]\nres = [w.strip().upper() if len(w.strip()) == 2 else w.strip().capitalize() for w in raw]\nprint(res[0], res[1], res[2], sep=\"/\")",
      "choices": [
        "AI/Python/GO",
        "Ai/PYTHON/Go",
        "AI/PYTHON/GO",
        "ai/Python/go"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "AI/Python/GO"
        }
      ]
    }
  ]
};
