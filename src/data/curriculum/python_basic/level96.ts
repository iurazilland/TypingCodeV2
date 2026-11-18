import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_96: PracticeRound = {
  "id": "py-basic-r96",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 96,
  "title_ko": "접두·접미사 검사(.startswith(), .endswith())와 문자 종류 판별(.isdigit(), .isalpha())",
  "title_en": "Prefix/Suffix (.startswith, .endswith) & Character Checks (.isdigit, .isalpha)",
  "description_ko": ".startswith()와 .endswith()로 시작·끝 문자열을 확인하고, .isdigit()와 .isalpha()로 숫자·글자 여부를 안전하게 판별합니다.",
  "description_en": "Check prefixes and suffixes with .startswith() and .endswith(), and validate digits or letters with .isdigit() and .isalpha().",
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
      "prompt_ko": "[블록 조립] .startswith(\"http\")와 .endswith(\".py\")로 문자열의 시작과 끝을 판별해 불리언 결과를 출력해보세요.",
      "prompt_en": "[Block] Use .startswith(\"http\") and .endswith(\".py\") to check the prefix and suffix of name.",
      "hint_ko": "지정한 문자열로 시작하거나 끝나면 True, 아니면 False를 반환합니다.",
      "hint_en": "These methods return True if the string starts or ends with the given substring, and False otherwise.",
      "targetCode": "name = \"http_server.py\"\nprint(name.startswith(\"http\"))\nprint(name.endswith(\".py\"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True\nTrue"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 파일명 f가 \".txt\" 확장자로 끝나는지 확인해 True 또는 False를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the method name to check whether filename f ends with \".txt\".",
      "hint_ko": "문자열이 특정 접미사로 끝나는지 검사하는 여덟 글자 메서드를 입력하세요.",
      "hint_en": "Enter the 8-letter method that checks whether a string ends with a suffix.",
      "targetCode": "f = input().strip()\nprint(f.endswith(\".txt\"))",
      "templateCode": "f = input().strip()\nprint(f.§§§§§§§§(\".txt\"))",
      "testCases": [
        {
          "id": 1,
          "input": "notes.txt",
          "expectedOutput": "True"
        },
        {
          "id": 2,
          "input": "notes.pdf",
          "expectedOutput": "False"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] .isdigit()로 숫자로만 이루어진 문자열인지 확인한 뒤 안전하게 정수로 변환해 10을 더해 출력해보세요.",
      "prompt_en": "[Block] Check if raw consists only of digits with .isdigit() before converting to int and adding 10.",
      "hint_ko": "모든 글자가 숫자('0'~'9')일 때만 True가 되므로 int() 변환 시 ValueError를 예방할 수 있습니다.",
      "hint_en": ".isdigit() returns True only when every character is a digit, preventing ValueError on int().",
      "targetCode": "raw = input().strip()\nif raw.isdigit():\n    print(int(raw) + 10)\nelse:\n    print(\"NAN\")",
      "testCases": [
        {
          "id": 1,
          "input": "25",
          "expectedOutput": "35"
        },
        {
          "id": 2,
          "input": "25a",
          "expectedOutput": "NAN"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 입력 문자열 pin이 숫자로만 구성되어 있는지 불리언 결과를 출력하도록 메서드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the method name to check whether pin contains only numeric characters.",
      "hint_ko": "문자열이 숫자로만 이루어졌는지 판별하는 일곱 글자 메서드를 적으세요.",
      "hint_en": "Type the 7-letter method that checks if all characters are numeric digits.",
      "targetCode": "pin = input().strip()\nprint(pin.isdigit())",
      "templateCode": "pin = input().strip()\nprint(pin.§§§§§§§())",
      "testCases": [
        {
          "id": 1,
          "input": "2026",
          "expectedOutput": "True"
        },
        {
          "id": 2,
          "input": "20a6",
          "expectedOutput": "False"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] .isalpha() 메서드로 문자열이 공백이나 숫자 없이 글자(알파벳·한글)로만 이루어졌는지 출력해보세요.",
      "prompt_en": "[Block] Use .isalpha() to test whether word1 and word2 contain only alphabetic letters.",
      "hint_ko": "숫자, 공백, 특수기호가 한 글자라도 섞여 있으면 .isalpha()는 False를 반환합니다.",
      "hint_en": "If any digit, space, or symbol is present, .isalpha() returns False.",
      "targetCode": "word1 = \"Python\"\nword2 = \"Py3\"\nprint(word1.isalpha(), word2.isalpha())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True False"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 입력된 태그가 숫자나 기호 없이 순수 알파벳·글자로만 이루어졌는지 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the method name to check whether tag consists purely of letters.",
      "hint_ko": "알파벳(alphabet) 등 글자로만 구성되었는지 판별하는 일곱 글자 메서드를 호출하세요.",
      "hint_en": "Call the 7-letter method that checks whether a string contains only alphabetic characters.",
      "targetCode": "tag = input().strip()\nprint(tag.isalpha())",
      "templateCode": "tag = input().strip()\nprint(tag.§§§§§§§())",
      "testCases": [
        {
          "id": 1,
          "input": "Korea",
          "expectedOutput": "True"
        },
        {
          "id": 2,
          "input": "Kor1",
          "expectedOutput": "False"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 조건부 리스트 컴프리헨션으로 숫자 문자열만 골라 정수로 변환한 뒤 sum()으로 합계를 출력해보세요.",
      "prompt_en": "[Block] Filter numeric tokens with .isdigit() in a list comprehension, convert to int, and print their sum.",
      "hint_ko": "if x.isdigit() 조건을 통과한 토큰만 int(x)로 변환해 리스트에 담고 sum()에 전달합니다.",
      "hint_en": "Only tokens passing if x.isdigit() are converted with int(x) and summed.",
      "targetCode": "tokens = [\"10\", \"py\", \"25\", \"ai\", \"5\"]\nnums = [int(x) for x in tokens if x.isdigit()]\nprint(sum(nums))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "40"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 파일 목록에서 \"test_\"로 시작하는 파일만 골라내는 리스트 컴프리헨션을 완성해보세요.",
      "prompt_en": "[Fill Blank] Complete the list comprehension to filter filenames beginning with \"test_\".",
      "hint_ko": "특정 접두사로 시작하는지 검사하는 열 글자 메서드를 조건절에 채워보세요.",
      "hint_en": "Fill in the 10-letter method that tests whether a string begins with the given prefix.",
      "targetCode": "files = [\"test_a.py\", \"main.py\", \"test_b.py\"]\npicks = [f for f in files if f.startswith(\"test_\")]\nprint(picks)",
      "templateCode": "files = [\"test_a.py\", \"main.py\", \"test_b.py\"]\npicks = [f for f in files if f.§§§§§§§§§§(\"test_\")]\nprint(picks)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['test_a.py', 'test_b.py']"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 코드가 \"ID-\"로 시작하고 뒷부분(s[3:])이 모두 숫자인 항목만 정수로 추출해 합계를 출력해보세요.",
      "prompt_en": "[Fill Blank] Filter strings that begin with \"ID-\" and have numeric suffixes, cast the suffixes to integers, and sum them.",
      "hint_ko": "정수 변환 함수, 접두사 검사 메서드, 숫자 문자열 판별 메서드를 차례로 채워보세요.",
      "hint_en": "Fill in the integer conversion function, the prefix check method, and the digit check method.",
      "targetCode": "codes = [\"ID-10\", \"ID-ab\", \"NO-20\", \"ID-35\"]\nvals = [int(s[3:]) for s in codes if s.startswith(\"ID-\") and s[3:].isdigit()]\nprint(sum(vals))",
      "templateCode": "codes = [\"ID-10\", \"ID-ab\", \"NO-20\", \"ID-35\"]\nvals = [§§§(s[3:]) for s in codes if s.§§§§§§§§§§(\"ID-\") and s[3:].§§§§§§§()]\nprint(sum(vals))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "45"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 접두사 검사 메서드 이름에 s가 빠진 오타로 인해 발생한 AttributeError를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the misspelled prefix-checking method name that causes an AttributeError.",
      "hint_ko": "접두사·접미사 검사 메서드는 start와 end 뒤에 복수형 s가 붙어 startswith, endswith가 됩니다.",
      "hint_en": "Remember the 's' in startswith() and endswith().",
      "templateCode": "url = input().strip()\nif url.startwith(\"https://\"):\n    print(\"SECURE\")\nelse:\n    print(\"WARN\")",
      "targetCode": "url = input().strip()\nif url.startswith(\"https://\"):\n    print(\"SECURE\")\nelse:\n    print(\"WARN\")",
      "testCases": [
        {
          "id": 1,
          "input": "https://py.org",
          "expectedOutput": "SECURE"
        },
        {
          "id": 2,
          "input": "http://py.org",
          "expectedOutput": "WARN"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 숫자 문자열일 때만 정수로 변환해 2배를 출력해야 하는데 글자 판별 메서드를 쓴 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the character check method so numeric strings are validated before calling int().",
      "hint_ko": "int()로 변환하기 전에는 알파벳 판별이 아니라 숫자로만 이루어졌는지 판별하는 메서드를 써야 합니다.",
      "hint_en": "Use the digit-checking method instead of the alphabetic-checking method before calling int().",
      "templateCode": "s = input().strip()\nif s.isalpha():\n    print(int(s) * 2)\nelse:\n    print(\"ERR\")",
      "targetCode": "s = input().strip()\nif s.isdigit():\n    print(int(s) * 2)\nelse:\n    print(\"ERR\")",
      "testCases": [
        {
          "id": 1,
          "input": "15",
          "expectedOutput": "30"
        },
        {
          "id": 2,
          "input": "abc",
          "expectedOutput": "ERR"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 파일명 name이 \".py\"로 끝나는지 검사한 불리언 결과를 변수 is_py에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Check whether name ends with \".py\" and assign the boolean result to is_py.",
      "hint_ko": "is_py = name.endswith(\".py\") 형태로 접미사 검사 결과를 저장하세요.",
      "hint_en": "Write is_py = name.endswith(\".py\") on the masked line.",
      "targetCode": "name = input().strip()\nis_py = name.endswith(\".py\")\nprint(is_py)",
      "templateCode": "name = input().strip()\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(is_py)",
      "testCases": [
        {
          "id": 1,
          "input": "app.py",
          "expectedOutput": "True"
        },
        {
          "id": 2,
          "input": "app.js",
          "expectedOutput": "False"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 리스트 raw에서 숫자로만 이루어진 문자열만 정수로 변환해 담는 리스트 컴프리헨션을 nums에 저장해보세요.",
      "prompt_en": "[Complete Line] Write a list comprehension that converts digit-only strings in raw to int and assigns it to nums.",
      "hint_ko": "nums = [int(x) for x in raw if x.isdigit()] 형태로 작성하세요.",
      "hint_en": "Write nums = [int(x) for x in raw if x.isdigit()].",
      "targetCode": "raw = input().split()\nnums = [int(x) for x in raw if x.isdigit()]\nprint(sum(nums))",
      "templateCode": "raw = input().split()\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(sum(nums))",
      "testCases": [
        {
          "id": 1,
          "input": "10 a 20 b 5",
          "expectedOutput": "35"
        },
        {
          "id": 2,
          "input": "7 py 8",
          "expectedOutput": "15"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다양한 형태의 문자열에 대해 .isdigit()와 .isalpha()를 실행한 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following .isdigit() and .isalpha() checks.",
      "hint_ko": "소수점(.)이나 음수 부호(-), 또는 숫자와 알파벳이 섞인 문자열은 두 메서드 모두 False가 됩니다.",
      "hint_en": "Strings containing a decimal point, minus sign, or mixed letters and digits return False for both methods.",
      "targetCode": "items = [\"123\", \"12.3\", \"-5\", \"py3\", \"AI\", \"07\"]\nd_cnt = len([x for x in items if x.isdigit()])\na_cnt = len([x for x in items if x.isalpha()])\nprint(d_cnt, a_cnt)",
      "choices": [
        "2 1",
        "3 1",
        "2 2",
        "4 2"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2 1"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 대소문자 변환, .startswith(), .endswith(), .join()이 결합된 코드의 출력 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the code filtering files by prefix and suffix.",
      "hint_ko": "소문자로 바꿨을 때 \"log_\"로 시작하고 \".txt\"로 끝나는 파일만 골라 확장자 앞부분을 대문자로 합칩니다.",
      "hint_en": "Keep filenames that start with \"log_\" and end with \".txt\" (case-insensitively), slice off \".txt\", uppercase, and join.",
      "targetCode": "files = [\"Log_1.TXT\", \"log_2.csv\", \"sub_log_3.txt\", \"log_4.txt\"]\nout = []\nfor f in files:\n    low = f.lower()\n    if low.startswith(\"log_\") and low.endswith(\".txt\"):\n        out.append(f[:-4].upper())\nprint(\"|\".join(out))",
      "choices": [
        "LOG_1|LOG_4",
        "LOG_1|SUB_LOG_3|LOG_4",
        "Log_1|log_4",
        "LOG_1|LOG_2|LOG_4"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "LOG_1|LOG_4"
        }
      ]
    }
  ]
};
