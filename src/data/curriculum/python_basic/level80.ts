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
  "totalQuestions": 15,
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] all()로 모든 원소가 양수인지, any()로 20 이상인 원소가 하나라도 있는지 판별해 출력해보세요.",
      "prompt_en": "[Block] Use all() and any() with list comprehensions to check positivity and >= 20.",
      "hint_ko": "리스트 컴프리헨션으로 각 원소의 비교 결과([True, True, ...])를 만들어 all()과 any()에 전달합니다.",
      "hint_en": "Build a list comprehension of boolean comparisons and pass it into all() or any().",
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
      "prompt_ko": "[빈칸 채우기] 입력된 비밀번호에 숫자 문자가 하나라도 포함되어 있는지 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in both blanks to check whether the password contains at least one digit.",
      "hint_ko": "'어느 하나라도' 참인지 묻는 3글자 내장 함수 안에, 글자가 숫자인지 묻는 7글자(isdigit) 메서드를 쓰세요.",
      "hint_en": "Wrap the list in the 3-letter existential quantifier, testing each character with the 7-letter isdigit method.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] isinstance()로 단일 타입(int)과 복수 타입 튜플((int, str))에 해당하는지 각각 판별해 출력해보세요.",
      "prompt_en": "[Block] Use isinstance() to test values against int and against the tuple (int, str).",
      "hint_ko": "여러 타입을 검사할 때는 반드시 두 번째 인자를 소괄호 튜플 (int, str)로 묶어 전달해야 합니다.",
      "hint_en": "When checking multiple types, group them inside parentheses as a single tuple argument: (int, str).",
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
      "prompt_ko": "[빈칸 채우기] 변수 x가 정수(int) 타입인지 확인해 출력하도록 두 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in isinstance and int to check whether x is an integer.",
      "hint_ko": "'is'와 'instance'를 붙여 쓴 10글자 타입 확인 함수와 '정수(integer)'의 앞 세 글자 타입을 채우세요.",
      "hint_en": "Combine 'is' + 'instance' into the 10-letter built-in, and pass the 3-letter integer type.",
      "templateCode": "x = 100\ny = \"100\"\nprint(§§§§§§§§§§(x, §§§))\nprint(isinstance(y, int))",
      "targetCode": "x = 100\ny = \"100\"\nprint(isinstance(x, int))\nprint(isinstance(y, int))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True\nFalse"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] bool(s) 리스트 컴프리헨션으로 입력란 전체 작성 여부(all)와 부분 작성 여부(any)를 출력해보세요.",
      "prompt_en": "[Block] Convert strings with [bool(s) for s in forms] and print all(filled), any(filled).",
      "hint_ko": "all(filled)는 모든 칸이 채워졌는지를, any(filled)는 한 칸이라도 채워졌는지를 나타냅니다.",
      "hint_en": "all(filled) checks if every field is filled, while any(filled) checks if at least one field is filled.",
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
      "prompt_ko": "[빈칸 채우기] 모든 점수가 60 이상인지(all)와 90 이상이 하나라도 있는지(any) 출력하도록 두 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in all and any to check whether every score passed and at least one is >= 90.",
      "hint_ko": "전부 참인지 확인하는 3글자 함수와 하나라도 참인지 확인하는 3글자 함수를 차례로 채우세요.",
      "hint_en": "Use the 3-letter universal quantifier first and the 3-letter existential quantifier second.",
      "templateCode": "scores = [70, 85, 95]\npassed = [s >= 60 for s in scores]\nace = [s >= 90 for s in scores]\nprint(§§§(passed), §§§(ace))",
      "targetCode": "scores = [70, 85, 95]\npassed = [s >= 60 for s in scores]\nace = [s >= 90 for s in scores]\nprint(all(passed), any(ace))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True True"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 직접 정의한 Hero 클래스의 인스턴스인지 isinstance()로 각각 판별해 출력해보세요.",
      "prompt_en": "[Block] Use isinstance(obj, Hero) to check whether h and tag are instances of Hero.",
      "hint_ko": "Hero(\"Aria\")로 생성한 객체 h는 Hero 인스턴스이므로 True, 일반 문자열 tag는 False가 반환됩니다.",
      "hint_en": "The object h created via Hero(\"Aria\") returns True, whereas the plain string tag returns False.",
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
      "prompt_ko": "[빈칸 채우기] Hero 클래스를 정의하고 객체 u가 Hero의 인스턴스인지 확인해 True를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the class name Hero and isinstance to verify that u is a Hero instance.",
      "hint_ko": "첫 빈칸은 아래에서 생성하는 4글자 클래스 이름을, 둘째 빈칸은 10글자 타입 확인 함수를 적으세요.",
      "hint_en": "Match the 4-letter class name instantiated below, and call the 10-letter isinstance function.",
      "templateCode": "class §§§§:\n    def __init__(self, hp):\n        self.hp = hp\nu = Hero(100)\nprint(§§§§§§§§§§(u, Hero))",
      "targetCode": "class Hero:\n    def __init__(self, hp):\n        self.hp = hp\nu = Hero(100)\nprint(isinstance(u, Hero))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 전체 과목 40점 이상(all)이면서 90점 이상 과목이 존재(any)할 때 Honor를 출력하세요.",
      "prompt_en": "[Block] Combine all() and any() results with and in an if-else statement.",
      "hint_ko": "모든 점수가 40 이상이면서 동시에 하나라도 90 이상일 때만 if 블록이 실행됩니다.",
      "hint_en": "The if branch runs only when every score is at least 40 and at least one score is 90 or above.",
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
      "prompt_ko": "[빈칸 채우기] 입력된 숫자들이 모두 양수이면 AllPos, 아니면 NotAll을 출력하도록 두 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in all and else to print AllPos when every number is positive, else NotAll.",
      "hint_ko": "모든 조건이 참인지 검사하는 3글자 함수와 조건이 거짓일 때의 4글자 분기 키워드를 채우세요.",
      "hint_en": "Use the 3-letter universal quantifier and the 4-letter otherwise branch keyword.",
      "templateCode": "nums = list(map(int, input().split()))\nif §§§([n > 0 for n in nums]):\n    print(\"AllPos\")\n§§§§:\n    print(\"NotAll\")",
      "targetCode": "nums = list(map(int, input().split()))\nif all([n > 0 for n in nums]):\n    print(\"AllPos\")\nelse:\n    print(\"NotAll\")",
      "testCases": [
        {
          "id": 1,
          "input": "3 8 12",
          "expectedOutput": "AllPos"
        },
        {
          "id": 2,
          "input": "5 -1 9",
          "expectedOutput": "NotAll"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 혼합 리스트 data에서 정수만 골라 합산해야 하는데 문자열을 골라 오류가 나는 버그를 수정하세요.",
      "prompt_en": "[Fix Bug] Fix the type argument in isinstance() so only integers are filtered for sum(ints).",
      "hint_ko": "sum()으로 합계를 구하려면 문자열(str)이 아니라 정수(int) 원소만 골라내야 합니다.",
      "hint_en": "Change isinstance(x, str) to isinstance(x, int) so only integers are summed.",
      "templateCode": "data = [10, \"hi\", 25, \"py\", 5]\nints = [x for x in data if isinstance(x, str)]\nprint(sum(ints))",
      "targetCode": "data = [10, \"hi\", 25, \"py\", 5]\nints = [x for x in data if isinstance(x, int)]\nprint(sum(ints))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "40"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 음수가 하나라도 있는지 검사해야 하는데 모두 음수일 때만 True가 되는 논리 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the quantifier function so has_neg is True when at least one number is negative.",
      "hint_ko": "단 하나라도 조건을 만족하는지 확인할 때는 all()이 아니라 any()를 사용해야 합니다.",
      "hint_en": "Replace all(...) with any(...) to test whether at least one number is negative.",
      "templateCode": "nums = [10, -3, 20]\nhas_neg = all([n < 0 for n in nums])\nprint(has_neg)",
      "targetCode": "nums = [10, -3, 20]\nhas_neg = any([n < 0 for n in nums])\nprint(has_neg)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 모든 점수가 60 이상인지 all()로 검사한 결과를 ok에 저장해보세요.",
      "prompt_en": "[Complete Line] Assign all([s >= 60 for s in scores]) to ok.",
      "hint_ko": "ok = all([s >= 60 for s in scores]) 형태로 전체 통과 여부를 저장하세요.",
      "hint_en": "Write ok = all([s >= 60 for s in scores]) to check if all scores are >= 60.",
      "templateCode": "scores = list(map(int, input().split()))\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(ok)",
      "targetCode": "scores = list(map(int, input().split()))\nok = all([s >= 60 for s in scores])\nprint(ok)",
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
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] data에서 isinstance(x, int)가 참인 정수 원소만 골라낸 리스트 컴프리헨션을 nums에 저장하세요.",
      "prompt_en": "[Complete Line] Assign [x for x in data if isinstance(x, int)] to nums.",
      "hint_ko": "nums = [x for x in data if isinstance(x, int)] 형태로 정수만 필터링하세요.",
      "hint_en": "Write nums = [x for x in data if isinstance(x, int)].",
      "templateCode": "data = [3, \"a\", 7, \"b\"]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(nums)",
      "targetCode": "data = [3, \"a\", 7, \"b\"]\nnums = [x for x in data if isinstance(x, int)]\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[3, 7]"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 파이썬 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following Python code.",
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
