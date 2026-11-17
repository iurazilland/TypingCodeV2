import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_60: PracticeRound = {
  "id": "py-basic-r60",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 60,
  "title_ko": "60레벨: 생성자 __init__과 self로 초기 속성 설정하기",
  "title_en": "Level 60: Initializer __init__ & self Attributes",
  "description_ko": "__init__ 생성자와 self를 사용해 인스턴스마다 고유한 초기 속성과 기본값, 파생 속성을 설정합니다.",
  "description_en": "Use __init__ and self to configure unique initial attributes, default parameters, and derived attributes per instance.",
  "totalQuestions": 15,
  "unlockedBlocks": [
    "class",
    "def",
    "variable",
    "print",
    "input",
    "type",
    "if",
    "while",
    "try"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] __init__(self, name) 생성자로 초기 속성을 설정하는 Pet 클래스를 완성해보세요.",
      "prompt_en": "[Block] Define Pet with __init__(self, name), instantiate Pet(\"Coco\"), and print p.name.",
      "hint_ko": "인스턴스를 생성할 때 괄호 안에 넘긴 인자는 __init__의 두 번째 매개변수(self 다음)부터 차례대로 전달됩니다.",
      "hint_en": "Arguments passed inside ClassName(...) are forwarded starting from the second parameter of __init__ (after self).",
      "targetCode": "class Pet:\n    def __init__(self, name):\n        self.name = name\np = Pet(\"Coco\")\nprint(p.name)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Coco"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 생성자 메서드 이름과 인스턴스 자신을 가리키는 참조를 채워 Aria 120을 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the initializer method name and the self reference to output Aria 120.",
      "hint_ko": "첫 빈칸에는 양옆에 밑줄을 두 개씩 붙인 생성자 이름을, 둘째 빈칸에는 인스턴스 '자기 자신'을 뜻하는 네 글자 영단어를 적으세요.",
      "hint_en": "Wrap init with double underscores on both sides for the method name, and use self on line 4.",
      "templateCode": "class Hero:\n    def §§§§§§§§(self, name, hp):\n        self.name = name\n        §§§§.hp = hp\nh = Hero(\"Aria\", 120)\nprint(h.name, h.hp)",
      "targetCode": "class Hero:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\nh = Hero(\"Aria\", 120)\nprint(h.name, h.hp)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Aria 120"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] __init__에 기본값 매개변수 hp=100을 설정하고 두 Hero 인스턴스를 생성해 출력해보세요.",
      "prompt_en": "[Block] Define __init__(self, name, hp=100) with a default parameter and print two Hero instances.",
      "hint_ko": "기본값이 없는 필수 매개변수(name)를 앞에 두고, 기본값이 있는 선택 매개변수(hp=100)를 뒤에 배치합니다.",
      "hint_en": "Place required parameters without defaults (name) before optional parameters with defaults (hp=100).",
      "targetCode": "class Hero:\n    def __init__(self, name, hp=100):\n        self.name = name\n        self.hp = hp\na = Hero(\"Leo\")\nb = Hero(\"Mia\", 150)\nprint(a.name, a.hp)\nprint(b.name, b.hp)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Leo 100\nMia 150"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 생성자 안에서 단가와 수량을 곱해 총액 파생 속성을 계산하도록 두 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the blanks so the initializer computes the derived total attribute.",
      "hint_ko": "첫 빈칸에는 인스턴스 자신을 뜻하는 네 글자 매개변수를 적고, 둘째 빈칸에는 단가 매개변수 이름을 적으세요.",
      "hint_en": "Place self as the first parameter and multiply price by count on line 4.",
      "templateCode": "class Order:\n    def __init__(§§§§, item, price, count=1):\n        self.item = item\n        self.total = §§§§§ * count\no = Order(\"Book\", 1200, 3)\nprint(o.item, o.total)",
      "targetCode": "class Order:\n    def __init__(self, item, price, count=1):\n        self.item = item\n        self.total = price * count\no = Order(\"Book\", 1200, 3)\nprint(o.item, o.total)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Book 3600"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 입력받은 이름으로 User 인스턴스를 생성하고 아이디와 레벨을 출력해보세요.",
      "prompt_en": "[Block] Pass input() into User(name) and print its uid and level attributes.",
      "hint_ko": "f-string 안에서 인스턴스의 속성(u.uid, u.level)을 중괄호로 감싸 원하는 출력 형식을 만들 수 있습니다.",
      "hint_en": "Wrap instance attributes (u.uid, u.level) in braces inside an f-string to format the output.",
      "targetCode": "class User:\n    def __init__(self, uid, level=1):\n        self.uid = uid\n        self.level = level\nname = input()\nu = User(name)\nprint(f\"{u.uid}:Lv{u.level}\")",
      "testCases": [
        {
          "id": 1,
          "input": "neo",
          "expectedOutput": "neo:Lv1"
        },
        {
          "id": 2,
          "input": "aria",
          "expectedOutput": "aria:Lv1"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 입력 제목과 등급 3으로 Badge 인스턴스를 생성해 출력하도록 두 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Initialize a Badge instance with input title and rank 3 and print it.",
      "hint_ko": "첫 빈칸에는 인스턴스 자신을 가리키는 네 글자 참조를, 둘째 빈칸에는 선언한 다섯 글자 클래스 이름을 적으세요.",
      "hint_en": "Use self on line 3 and instantiate Badge on line 6.",
      "templateCode": "class Badge:\n    def __init__(self, title, rank=1):\n        §§§§.title = title\n        self.rank = rank\nt = input()\nb = §§§§§(t, 3)\nprint(f\"{b.title}:#{b.rank}\")",
      "targetCode": "class Badge:\n    def __init__(self, title, rank=1):\n        self.title = title\n        self.rank = rank\nt = input()\nb = Badge(t, 3)\nprint(f\"{b.title}:#{b.rank}\")",
      "testCases": [
        {
          "id": 1,
          "input": "Gold",
          "expectedOutput": "Gold:#3"
        },
        {
          "id": 2,
          "input": "Pro",
          "expectedOutput": "Pro:#3"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 생성자에서 self.guild = None으로 초기화한 뒤 is None 조건문으로 값을 채워 출력해보세요.",
      "prompt_en": "[Block] Initialize self.guild = None in __init__, then check is None to assign \"Round\".",
      "hint_ko": "아직 정해지지 않은 객체 속성을 표시할 때는 파이썬의 빈 값 상수인 None으로 초기화해 두는 패턴을 자주 사용합니다.",
      "hint_en": "Initializing an unset attribute to None in __init__ is a standard Python pattern for attributes assigned later.",
      "targetCode": "class Knight:\n    def __init__(self, name):\n        self.name = name\n        self.guild = None\nk = Knight(\"Arthur\")\nif k.guild is None:\n    k.guild = \"Round\"\nprint(f\"{k.name}-{k.guild}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Arthur-Round"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 생성자에서 80점 이상일 때 합격 속성을 True로 바꾸고 출력해보세요.",
      "prompt_en": "[Fill Blank] Initialize Exam with score, set passed to True when score >= 80, and print it.",
      "hint_ko": "첫 빈칸에는 인스턴스 자신을 가리키는 네 글자 참조를 적고, 마지막 줄에는 여섯 글자 합격 여부 속성 이름을 적으세요.",
      "hint_en": "Use self on line 3 and read e.passed on the final line.",
      "templateCode": "class Exam:\n    def __init__(self, score):\n        §§§§.score = score\n        self.passed = False\n        if score >= 80:\n            self.passed = True\ne = Exam(int(input()))\nprint(f\"{e.score}:{e.§§§§§§}\")",
      "targetCode": "class Exam:\n    def __init__(self, score):\n        self.score = score\n        self.passed = False\n        if score >= 80:\n            self.passed = True\ne = Exam(int(input()))\nprint(f\"{e.score}:{e.passed}\")",
      "testCases": [
        {
          "id": 1,
          "input": "85",
          "expectedOutput": "85:True"
        },
        {
          "id": 2,
          "input": "70",
          "expectedOutput": "70:False"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] Plant(3)으로 초기 높이를 설정하고 while문으로 10 이상이 될 때까지 키워보세요.",
      "prompt_en": "[Block] Initialize Plant(3) and grow p.height in a while loop until it reaches 10.",
      "hint_ko": "Plant(3)처럼 인자를 전달하면 생성자의 기본값(height=2) 대신 전달한 값(3)으로 속성이 초기화됩니다.",
      "hint_en": "Passing an argument as in Plant(3) overrides the initializer's default parameter (height=2) with 3.",
      "targetCode": "class Plant:\n    def __init__(self, height=2):\n        self.height = height\np = Plant(3)\ndays = 0\nwhile p.height < 10:\n    p.height += 4\n    days += 1\nprint(days, p.height)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2 11"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 초기 전력 40으로 배터리 객체를 생성하고 방전될 때까지 사용 횟수를 세어보세요.",
      "prompt_en": "[Fill Blank] Initialize Battery(40) and count uses in a while loop until power <= 0.",
      "hint_ko": "첫 빈칸에는 인스턴스 자신을 가리키는 네 글자 참조를, 둘째 빈칸에는 선언한 일곱 글자 클래스 이름을 적으세요.",
      "hint_en": "Use self on line 3 and instantiate Battery(40) on line 4.",
      "templateCode": "class Battery:\n    def __init__(self, power=20):\n        §§§§.power = power\nb = §§§§§§§(40)\nuses = 0\nwhile b.power > 0:\n    b.power -= 15\n    uses += 1\nprint(uses, b.power)",
      "targetCode": "class Battery:\n    def __init__(self, power=20):\n        self.power = power\nb = Battery(40)\nuses = 0\nwhile b.power > 0:\n    b.power -= 15\n    uses += 1\nprint(uses, b.power)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 -5"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 생성자에서 self.hp 속성에 mp를 잘못 대입한 버그를 고쳐 120:50을 출력해보세요.",
      "prompt_en": "[Fix Bug] Fix the bug in __init__ where self.hp is assigned mp instead of hp.",
      "hint_ko": "전달받은 체력 매개변수 hp가 self.hp에 저장되도록 self.hp = mp를 self.hp = hp로 수정하세요.",
      "hint_en": "Change self.hp = mp to self.hp = hp inside __init__.",
      "templateCode": "class Hero:\n    def __init__(self, hp, mp):\n        self.hp = mp\n        self.mp = mp\nh = Hero(120, 50)\nprint(f\"{h.hp}:{h.mp}\")",
      "targetCode": "class Hero:\n    def __init__(self, hp, mp):\n        self.hp = hp\n        self.mp = mp\nh = Hero(120, 50)\nprint(f\"{h.hp}:{h.mp}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "120:50"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 생성자에서 기본값 매개변수 hp=100이 필수 매개변수 name보다 앞에 온 오류를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the SyntaxError in __init__ by placing required parameter name before hp=100.",
      "hint_ko": "생성자에서도 기본값이 없는 필수 매개변수 name이 먼저 오고 기본값 매개변수 hp=100이 뒤에 와야 합니다.",
      "hint_en": "Put name before hp=100 after self in the __init__ header.",
      "templateCode": "class Unit:\n    def __init__(self, hp=100, name):\n        self.name = name\n        self.hp = hp\nu = Unit(\"Kai\")\nprint(u.name, u.hp)",
      "targetCode": "class Unit:\n    def __init__(self, name, hp=100):\n        self.name = name\n        self.hp = hp\nu = Unit(\"Kai\")\nprint(u.name, u.hp)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Kai 100"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] Pet 클래스 안에서 self와 name을 받는 __init__ 생성자 선언 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the indented def __init__(self, name): header inside Pet.",
      "hint_ko": "들여쓰기된 위치에서 def __init__(self, name):을 작성하세요.",
      "hint_en": "Write def __init__(self, name): inside the Pet class.",
      "templateCode": "class Pet:\n    §§§§§§§§§§§§§§§§§§§§§§§§§\n        self.name = name\np = Pet(\"Coco\")\nprint(p.name)",
      "targetCode": "class Pet:\n    def __init__(self, name):\n        self.name = name\np = Pet(\"Coco\")\nprint(p.name)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Coco"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] \"Potion\"과 150을 전달해 Item 인스턴스를 생성하고 변수 it에 저장해보세요.",
      "prompt_en": "[Complete Line] Instantiate Item(\"Potion\", 150) and assign it to variable it.",
      "hint_ko": "it = Item(\"Potion\", 150) 형태로 인스턴스를 생성하세요.",
      "hint_en": "Write it = Item(\"Potion\", 150).",
      "templateCode": "class Item:\n    def __init__(self, name, price, qty=2):\n        self.name = name\n        self.total = price * qty\n§§§§§§§§§§§§§§§§§§§§§§§§\nprint(f\"{it.name}:{it.total}\")",
      "targetCode": "class Item:\n    def __init__(self, name, price, qty=2):\n        self.name = name\n        self.total = price * qty\nit = Item(\"Potion\", 150)\nprint(f\"{it.name}:{it.total}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Potion:300"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 기본값 매개변수와 파생 속성이 함께 쓰인 Cart 클래스 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the output of the Cart class using default parameters and derived attributes in __init__.",
      "hint_ko": "첫 장바구니는 수량·수수료 기본값이 그대로 쓰이고, 둘째 장바구니는 전달된 인자로 기본값이 모두 덮어써질 때 각각의 최종 총액을 계산해 보세요.",
      "hint_en": "Compute the subtotal and final total for the first cart using both defaults, then for the second cart where all three arguments override the defaults.",
      "targetCode": "class Cart:\n    def __init__(self, price, count=2, fee=5):\n        self.sub = price * count\n        self.total = self.sub + fee\na = Cart(20)\nb = Cart(10, 3, 0)\nprint(a.total, b.total)",
      "choices": [
        "45 30",
        "25 35",
        "40 30",
        "45 35"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "45 30"
        }
      ]
    }
  ]
};
