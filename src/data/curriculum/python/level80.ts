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
      "hint_ko": "all(조건들)은 모두 True일 때만 True이고, any(조건들)는 하나라도 True이면 True를 반환합니다.",
      "hint_en": "all() returns True only if every element is truthy; any() returns True if at least one element is truthy.",
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
      "hint_ko": "각 글자 ch에 ch.isdigit() 메서드를 적용한 리스트를 any(...)에 넘기면 숫자 포함 여부를 한 줄로 판별합니다.",
      "hint_en": "Test each character with ch.isdigit() and pass the list to any() to check if at least one digit exists.",
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
      "prompt_ko": "isinstance(값, 타입)으로 a가 int인지, b와 c가 (int, float) 숫자 타입 중 하나인지 차례대로 출력해보세요.",
      "prompt_en": "Use isinstance() to check whether a is int and whether b and c are (int, float), printing each result.",
      "hint_ko": "isinstance(x, (int, float))처럼 두 번째 인자에 타입 튜플을 넣으면 여러 타입 중 하나인지 한 번에 확인합니다.",
      "hint_en": "Pass a tuple of types like (int, float) as the second argument of isinstance() to match any of them.",
      "targetCode": "a = 42\nb = 3.5\nc = \"42\"\nprint(isinstance(a, int))\nprint(isinstance(b, (int, float)))\nprint(isinstance(c, (int, float)))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True\nTrue\nFalse"
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
      "hint_ko": "컴프리헨션의 조건절 if isinstance(x, int)를 사용하면 문자열과 실수를 제외하고 정수만 안전하게 추려냅니다.",
      "hint_en": "Use if isinstance(x, int) in the list comprehension to keep only integers.",
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
      "hint_ko": "빈 문자열 \"\"은 bool(\"\")이 False이고 글자가 있는 문자열은 True가 되므로 필수 입력란 검증에 자주 쓰입니다.",
      "hint_en": "Non-empty strings are Truthy (True) and \"\" is Falsy (False), making all() and any() ideal for form checks.",
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
      "hint_ko": "숫자 존재 여부와 영문자 존재 여부는 각각 any(...)로 확인하고, 세 조건을 모두 만족하는지는 all([...])로 묶습니다.",
      "hint_en": "Use any() for has_num and has_abc, then combine all three boolean flags with all([long_ok, has_num, has_abc]).",
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
      "hint_ko": "isinstance(객체, 클래스명)은 int, str 같은 기본 타입뿐 아니라 직접 만든 클래스의 인스턴스인지도 판별합니다.",
      "hint_en": "isinstance(obj, Hero) works on user-defined classes, returning True for Hero instances and False otherwise.",
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
      "hint_ko": "문자열 \"NPC\"에는 .hp 속성이 없으므로 if isinstance(u, Hero) 조건으로 영웅 객체만 골라내야 안전합니다.",
      "hint_en": "Filter with if isinstance(u, Hero) before accessing u.hp so non-Hero items like \"NPC\" are skipped safely.",
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
      "hint_ko": "no_fail = all([s >= 40 for s in scores])와 has_ace = any([s >= 90 for s in scores])를 and로 결합합니다.",
      "hint_en": "Compute no_fail with all() and has_ace with any(), then branch on if no_fail and has_ace:.",
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
      "prompt_ko": "두 빈칸을 채워 리스트 안의 정수 또는 실수만 안전하게 더한 뒤 소수 첫째 자리로 반올림해 출력해보세요. (출력: 16.7)",
      "prompt_en": "Fill in both blanks so sum_nums adds only int or float values in items and rounds to 1 decimal place.",
      "hint_ko": "if isinstance(v, (int, float)):으로 숫자 자료형만 통과시켜 total += v로 누적한 뒤 round(total, 1)을 반환합니다.",
      "hint_en": "Check if isinstance(v, (int, float)): to accumulate numeric items and skip strings.",
      "templateCode": "def sum_nums(items):\n    total = 0\n    for v in items:\n        if §§§§§§§§§§(v, (int, §§§§§)):\n            total += v\n    return round(total, 1)\nbox = [10, 2.5, \"skip\", 4.2]\nprint(sum_nums(box))",
      "targetCode": "def sum_nums(items):\n    total = 0\n    for v in items:\n        if isinstance(v, (int, float)):\n            total += v\n    return round(total, 1)\nbox = [10, 2.5, \"skip\", 4.2]\nprint(sum_nums(box))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "16.7"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "여러 타입을 동시에 검사하려다 인자 개수 오류(TypeError)가 난 줄을 고쳐 숫자 원소들의 합계 15.5를 출력해보세요.",
      "prompt_en": "Fix the TypeError when checking multiple types at once so numeric items sum to 15.5.",
      "hint_ko": "isinstance()는 인자를 2개만 받으므로 여러 타입을 검사할 때는 (int, float)처럼 괄호로 묶어 하나의 튜플로 넘겨야 합니다.",
      "hint_en": "Wrap multiple types in a single tuple as isinstance(x, (int, float)) instead of passing 3 arguments.",
      "templateCode": "raw = [10, 3.5, \"7\", 2]\ntotal = 0\nfor x in raw:\n    if isinstance(x, int, float):\n        total += x\nprint(total)",
      "targetCode": "raw = [10, 3.5, \"7\", 2]\ntotal = 0\nfor x in raw:\n    if isinstance(x, (int, float)):\n        total += x\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "15.5"
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
      "hint_ko": "둘째 줄에 print(all([s >= 60 for s in scores]))를 작성하면 전체 합격 여부가 True/False로 출력됩니다.",
      "hint_en": "Write print(all([s >= 60 for s in scores])) on the second line.",
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
      "hint_ko": "data의 원소는 모두 int이므로 c1은 True, -2 때문에 모두 양수는 아니므로 c2는 False, 음수가 존재하므로 c3는 True입니다.",
      "hint_en": "All elements are ints (c1=True), not all are > 0 because of -2 (c2=False), and -2 < 0 makes c3=True.",
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
