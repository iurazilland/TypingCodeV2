import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_80: PracticeRound = {
  "id": "py-basic-r80",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 80,
  "title_ko": "80레벨: 논리 일괄 검사(all, any)와 타입 확인(isinstance)",
  "title_en": "Level 80: Logical Quantifiers (all, any) & isinstance()",
  "description_ko": "조건 리스트의 전체·부분 참 여부를 판별하는 all(), any()와 객체 타입을 안전하게 검사하는 isinstance()를 익힙니다.",
  "description_en": "Master logical quantifiers all() and any() along with runtime type checking via isinstance() including custom classes.",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "type",
    "math",
    "map",
    "iter",
    "method",
    "if",
    "for_in",
    "def",
    "class"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "nums의 모든 수가 양수인지 all(...)로, 20 이상인 수가 하나라도 있는지 any(...)로 검사해 나란히 출력해보세요.",
      "prompt_en": "Check whether all numbers in nums are positive with all() and whether any is >= 20 with any(), then print both.",
      "hint_ko": "'모두'를 뜻하는 함수는 전달된 조건이 전부 참일 때만 참을, '하나라도'를 뜻하는 함수는 단 하나만 참이어도 참을 반환합니다.",
      "hint_en": "The universal check returns True only when every condition holds, while the existential check returns True if at least one holds.",
      "targetCode": "nums = [12, 8, 25]\nall_pos = all([x > 0 for x in nums])\nhas_big = any([x >= 20 for x in nums])\nprint(all_pos, has_big)",
      "expectedVariables": {
        "all_pos": true,
        "has_big": true
      },
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True True"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸을 채워 입력된 비밀번호 문자열에 숫자 문자가 하나라도 포함되어 있는지(True/False) 출력해보세요.",
      "prompt_en": "Fill in both blanks to check whether the input password contains at least one digit character.",
      "hint_ko": "'어느 하나라도' 참인지 묻는 3글자 내장 함수 안에, 글자가 숫자인지 묻는 'is' + '숫자(digit)' 결합 7글자 메서드를 쓰세요.",
      "hint_en": "Wrap the list in the 3-letter 'at least one' built-in, testing each character with the 7-letter method combining 'is' + 'digit'.",
      "templateCode": "pw = input()\nhas_num = §§§([ch.§§§§§§§() for ch in pw])\nprint(has_num)",
      "targetCode": "pw = input()\nhas_num = any([ch.isdigit() for ch in pw])\nprint(has_num)",
      "testCases": [
        {
          "id": 1,
          "input": "py2026",
          "expectedOutput": "True"
        },
        {
          "id": 2,
          "input": "secret",
          "expectedOutput": "False"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "isinstance(값, 타입)으로 a가 int인지, b와 c가 (int, str) 타입 중 하나인지 차례대로 출력해보세요.",
      "prompt_en": "Use isinstance() to check whether a is int and whether b and c are (int, str), printing each result.",
      "hint_ko": "타입 확인 함수의 두 번째 인자에 여러 타입을 소괄호 튜플로 묶어 전달하면 그중 어느 하나에 해당하는지 한 번에 검사합니다.",
      "hint_en": "Passing a tuple of types as the second argument checks whether the value belongs to any of those types at once.",
      "targetCode": "a = 42\nb = [4, 2]\nc = \"42\"\nprint(isinstance(a, int))\nprint(isinstance(b, (int, str)))\nprint(isinstance(c, (int, str)))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True\nFalse\nTrue"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "여러 자료형이 섞인 data에서 정수 타입 원소만 골라낸 리스트의 합계를 출력하도록 두 빈칸을 채워보세요. (출력: 40)",
      "prompt_en": "Fill in both blanks to filter only integer elements from the mixed list data and print their sum.",
      "hint_ko": "'~의 사례(실체)인가?'를 뜻하는 두 단어(is + instance)를 붙여 쓴 10글자 함수와, '정수(integer)'의 앞 세 글자 타입을 채우세요.",
      "hint_en": "Combine 'is' + 'instance' into the 10-letter type-checking built-in, and pass the 3-letter integer type from 'integer'.",
      "templateCode": "data = [10, \"hi\", 25, 3.5, 5]\nints = [x for x in data if §§§§§§§§§§(x, §§§)]\nprint(sum(ints))",
      "targetCode": "data = [10, \"hi\", 25, 3.5, 5]\nints = [x for x in data if isinstance(x, int)]\nprint(sum(ints))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "40"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "입력 칸 리스트 forms의 각 문자열을 bool(s)로 변환한 뒤 모두 채워졌는지(all)와 하나라도 채워졌는지(any) 출력해보세요.",
      "prompt_en": "Convert each string in forms with bool(s), then print all(filled) and any(filled).",
      "hint_ko": "빈 문자열은 거짓(False)이 되고 글자가 있는 문자열은 참(True)이 되므로 필수 입력란의 전체·부분 입력 여부를 손쉽게 검사할 수 있습니다.",
      "hint_en": "Empty strings evaluate to False while non-empty strings evaluate to True, enabling clean full or partial form checks.",
      "targetCode": "forms = [\"Kim\", \"seoul\", \"\"]\nfilled = [bool(s) for s in forms]\nprint(all(filled), any(filled))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "False True"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸들을 채워 6자 이상이면서 숫자와 알파벳이 각각 하나 이상 모두 포함됐는지 검증하는 함수를 완성해보세요.",
      "prompt_en": "Fill in the blanks so check_pw verifies length >= 6, at least one digit, and at least one letter.",
      "hint_ko": "숫자나 알파벳이 '어느 하나라도' 있는지는 3글자 부분 참 함수로 각각 확인하고, 세 규칙을 '모두' 만족하는지는 3글자 전체 참 함수로 묶으세요.",
      "hint_en": "Check 'at least one' digit and letter using the 3-letter existential quantifier twice, then require 'every' condition with the 3-letter universal quantifier.",
      "templateCode": "def check_pw(pw):\n    long_ok = len(pw) >= 6\n    has_num = §§§([c.isdigit() for c in pw])\n    has_abc = §§§([c.isalpha() for c in pw])\n    return §§§([long_ok, has_num, has_abc])\nprint(check_pw(input()))",
      "targetCode": "def check_pw(pw):\n    long_ok = len(pw) >= 6\n    has_num = any([c.isdigit() for c in pw])\n    has_abc = any([c.isalpha() for c in pw])\n    return all([long_ok, has_num, has_abc])\nprint(check_pw(input()))",
      "testCases": [
        {
          "id": 1,
          "input": "code99",
          "expectedOutput": "True"
        },
        {
          "id": 2,
          "input": "123456",
          "expectedOutput": "False"
        },
        {
          "id": 3,
          "input": "ab12",
          "expectedOutput": "False"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "사용자 정의 클래스 Hero의 인스턴스 h와 문자열 tag에 각각 isinstance(..., Hero)를 실행해 결과를 확인해보세요.",
      "prompt_en": "Define class Hero, create h = Hero(\"Aria\"), and check isinstance(h, Hero) and isinstance(tag, Hero).",
      "hint_ko": "타입 확인 함수는 기본 내장 자료형뿐 아니라 직접 만든 클래스의 인스턴스인지 판별할 때도 동일하게 작동합니다.",
      "hint_en": "Runtime type checking works on user-defined classes as well, distinguishing class instances from plain strings.",
      "targetCode": "class Hero:\n    def __init__(self, name):\n        self.name = name\nh = Hero(\"Aria\")\ntag = \"slime\"\nprint(h.name, isinstance(h, Hero))\nprint(isinstance(tag, Hero))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Aria True\nFalse"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "혼합 리스트 units에서 영웅 클래스 인스턴스만 골라 체력(hp) 합계를 출력하도록 두 빈칸을 채워보세요. (출력: 180)",
      "prompt_en": "Fill in both blanks to extract hp values only from Hero instances in units and print their sum.",
      "hint_ko": "첫 빈칸은 아래 리스트에서 생성 중인 클래스 이름을 적고, 둘째 빈칸은 'is'와 'instance'를 붙인 10글자 타입 확인 함수를 적으세요.",
      "hint_en": "Match the class name instantiated in the list below, and filter safely using the 10-letter function combining 'is' + 'instance'.",
      "templateCode": "class §§§§:\n    def __init__(self, hp):\n        self.hp = hp\nunits = [Hero(100), \"NPC\", Hero(80)]\nhps = [u.hp for u in units if §§§§§§§§§§(u, Hero)]\nprint(sum(hps))",
      "targetCode": "class Hero:\n    def __init__(self, hp):\n        self.hp = hp\nunits = [Hero(100), \"NPC\", Hero(80)]\nhps = [u.hp for u in units if isinstance(u, Hero)]\nprint(sum(hps))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "180"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "모든 과목이 40점 이상(all)이고 90점 이상 과목이 하나라도(any) 있으면 Honor, 아니면 Normal을 출력해보세요.",
      "prompt_en": "Print Honor if all input scores are >= 40 and any score is >= 90; otherwise print Normal.",
      "hint_ko": "전 과목 기준 통과 여부는 전체 참 함수로, 우수 과목 존재 여부는 부분 참 함수로 각각 구해 논리곱(and) 조건으로 묶습니다.",
      "hint_en": "Verify that every score meets 40 and at least one score reaches 90, then combine both boolean flags with and.",
      "targetCode": "scores = list(map(int, input().split()))\nno_fail = all([s >= 40 for s in scores])\nhas_ace = any([s >= 90 for s in scores])\nif no_fail and has_ace:\n    print(\"Honor\")\nelse:\n    print(\"Normal\")",
      "testCases": [
        {
          "id": 1,
          "input": "60 95 70",
          "expectedOutput": "Honor"
        },
        {
          "id": 2,
          "input": "35 95 80",
          "expectedOutput": "Normal"
        },
        {
          "id": 3,
          "input": "60 75 80",
          "expectedOutput": "Normal"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸을 채워 리스트 안의 정수만 안전하게 골라 더한 합계를 출력해보세요. (출력: 17)",
      "prompt_en": "Fill in both blanks so sum_nums adds only int values in items and returns the total (output: 17).",
      "hint_ko": "'is' + 'instance'를 붙인 10글자 타입 검사 함수를 쓰고, 두 번째 인자에는 '정수(integer)'의 앞 세 글자를 딴 정수 타입을 넣으세요.",
      "hint_en": "Call the 10-letter 'is' + 'instance' function and pass the 3-letter integer type abbreviated from 'integer'.",
      "templateCode": "def sum_nums(items):\n    total = 0\n    for v in items:\n        if §§§§§§§§§§(v, §§§):\n            total += v\n    return total\nbox = [10, 3, \"skip\", 4]\nprint(sum_nums(box))",
      "targetCode": "def sum_nums(items):\n    total = 0\n    for v in items:\n        if isinstance(v, int):\n            total += v\n    return total\nbox = [10, 3, \"skip\", 4]\nprint(sum_nums(box))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "17"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "여러 타입을 동시에 검사하려다 인자 개수 오류(TypeError)가 난 줄을 고쳐 정수 또는 문자열 원소의 개수 3을 출력해보세요.",
      "prompt_en": "Fix the TypeError when checking multiple types at once so the count of int or str items prints 3.",
      "hint_ko": "타입 확인 함수는 (값, 타입정보) 딱 2개의 인자만 받습니다. 두 개 이상의 타입을 검사할 때는 소괄호로 감싸 하나의 튜플로 묶어 전달하세요.",
      "hint_en": "This type-checking function takes only 2 arguments; wrap multiple candidate types in parentheses as a single tuple.",
      "templateCode": "raw = [10, [3], \"7\", 2]\ncnt = 0\nfor x in raw:\n    if isinstance(x, int, str):\n        cnt += 1\nprint(cnt)",
      "targetCode": "raw = [10, [3], \"7\", 2]\ncnt = 0\nfor x in raw:\n    if isinstance(x, (int, str)):\n        cnt += 1\nprint(cnt)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "점수 리스트 scores 아래에 한 줄을 추가하여 모든 점수가 60 이상인지 all로 검사한 결과를 출력해보세요.",
      "prompt_en": "Add one line below scores to print whether every score is >= 60 using all().",
      "hint_ko": "각 점수가 60 이상인지 비교한 리스트 컴프리헨션을 '모두 참인지' 판별하는 내장 함수에 넘겨 결과를 출력해보세요.",
      "hint_en": "Build a list comprehension checking whether each score is >= 60, pass it to the universal quantifier built-in, and print it.",
      "templateCode": "scores = list(map(int, input().split()))\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "scores = list(map(int, input().split()))\nprint(all([s >= 60 for s in scores]))",
      "testCases": [
        {
          "id": 1,
          "input": "70 85 60",
          "expectedOutput": "True"
        },
        {
          "id": 2,
          "input": "90 55 80",
          "expectedOutput": "False"
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
      "hint_ko": "음수 정수도 정수 타입에 속한다는 점에 유의하며, 세 원소가 '전부 정수인지', '전부 양수인지', '하나라도 음수인지' 차례대로 판별해보세요.",
      "hint_en": "Remember that negative whole numbers are still integers, then check whether every item is int, whether every item is positive, and whether any item is negative.",
      "targetCode": "data = [4, -2, 8]\nc1 = all([isinstance(x, int) for x in data])\nc2 = all([x > 0 for x in data])\nc3 = any([x < 0 for x in data])\nprint(c1, c2, c3)",
      "choices": [
        "True False True",
        "True True False",
        "False False True",
        "True False False"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True False True"
        }
      ]
    }
  ]
};