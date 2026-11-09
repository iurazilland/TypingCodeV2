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
  "totalQuestions": 13,
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
      "prompt_ko": "Pet 클래스에 __init__(self, name) 생성자를 만들어 self.name = name을 저장하고, Pet(\"Coco\")의 이름을 출력해보세요.",
      "prompt_en": "Define __init__(self, name) in Pet to store self.name = name, create Pet(\"Coco\"), and print its name.",
      "hint_ko": "클래스 안의 초기화 생성자에서 전달받은 이름을 인스턴스 자신의 속성에 저장하고, 생성한 객체의 이름 속성을 출력하세요.",
      "hint_en": "Store the passed name onto the instance inside the initializer method, instantiate the pet with the string argument, and print its attribute.",
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
      "prompt_ko": "생성자 메서드 이름과 인스턴스 자신을 가리키는 참조를 빈칸에 채워 Aria 120을 출력해보세요.",
      "prompt_en": "Fill in the initializer method name and the self reference to output Aria 120.",
      "hint_ko": "첫 빈칸에는 '초기화하다(initialize)'의 앞 네 글자 양옆에 밑줄을 두 개씩 붙인 생성자 이름을, 둘째 빈칸에는 인스턴스 '자기 자신'을 뜻하는 네 글자 영단어를 적으세요.",
      "hint_en": "Wrap the first four letters of \"initialize\" with double underscores on both sides for the method name, and use the four-letter word meaning the instance itself on line 4.",
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
      "prompt_ko": "hp=100 기본값을 가진 Hero 생성자를 정의하고, Hero(\"Leo\")와 Hero(\"Mia\", 150)의 이름과 체력을 각각 출력해보세요.",
      "prompt_en": "Define Hero with __init__(self, name, hp=100), create Hero(\"Leo\") and Hero(\"Mia\", 150), and print both.",
      "hint_ko": "생성자의 체력 매개변수에 기본값을 지정해 정의한 뒤, 인자 1개로 만든 인스턴스와 2개로 덮어쓴 인스턴스의 속성을 차례로 출력하세요.",
      "hint_en": "Give the health parameter a default in the initializer, then create and print one instance relying on the default and another overriding it.",
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
      "prompt_ko": "생성자 안에서 단가와 수량을 곱해 총액 파생 속성을 계산하도록 빈칸을 채워 Book 3600을 출력해보세요.",
      "prompt_en": "Fill in the blanks so the initializer computes the derived total attribute from price and count.",
      "hint_ko": "첫 빈칸에는 인스턴스 '자기 자신'을 뜻하는 네 글자 매개변수를 적고, 뒤 두 빈칸에는 선언부에서 받은 단가와 수량 매개변수를 곱셈식에 넣으세요.",
      "hint_en": "Place the four-letter instance reference as the first parameter, then multiply the unit-cost and quantity parameters on line 4.",
      "templateCode": "class Order:\n    def __init__(§§§§, item, price, count=1):\n        self.item = item\n        self.total = §§§§§ * §§§§§\no = Order(\"Book\", 1200, 3)\nprint(o.item, o.total)",
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
      "prompt_ko": "입력받은 아이디로 기본 레벨 1인 User 인스턴스를 생성하고 형식에 맞게 출력해보세요. (터미널 입력: neo)",
      "prompt_en": "Create a User instance with default level=1 from input() and print it formatted (Terminal input: neo).",
      "hint_ko": "레벨 기본값이 1인 생성자를 정의하고, 입력 문자열로 생성한 사용자 인스턴스의 두 속성을 서식 문자열로 이어 출력하세요.",
      "hint_en": "Define the initializer with default level 1, pass the input string when creating the user object, and format both attributes in the output.",
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
      "prompt_ko": "정수 점수로 시험 객체를 만들 때 80점 이상 여부에 따라 합격 속성을 설정하고 출력해보세요. (터미널 입력: 85)",
      "prompt_en": "Initialize an Exam instance from integer input, set its passed attribute, and print score:passed. (Terminal input: 85)",
      "hint_ko": "첫 빈칸에는 인스턴스 '자기 자신'을 가리키는 네 글자 참조를 적고, 마지막 줄 점 뒤에는 조건문에서 참·거짓을 저장해 둔 여섯 글자 속성 이름을 적으세요.",
      "hint_en": "Use the four-letter instance reference on line 3, and read the six-letter boolean attribute assigned inside the conditional branches on line 9.",
      "templateCode": "class Exam:\n    def __init__(self, score):\n        §§§§.score = score\n        if score >= 80:\n            self.passed = True\n        else:\n            self.passed = False\ne = Exam(int(input()))\nprint(f\"{e.score}:{e.§§§§§§}\")",
      "targetCode": "class Exam:\n    def __init__(self, score):\n        self.score = score\n        if score >= 80:\n            self.passed = True\n        else:\n            self.passed = False\ne = Exam(int(input()))\nprint(f\"{e.score}:{e.passed}\")",
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
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "생성자에서 self.guild = None으로 초기화한 Knight 인스턴스 k를 만들고, 길드가 None이면 \"Round\"로 바꿔 출력해보세요. (출력 예: Arthur-Round)",
      "prompt_en": "Initialize self.guild = None in Knight, set k.guild = \"Round\" if k.guild is None, and print Arthur-Round.",
      "hint_ko": "생성자에서 소속 속성을 '값 없음' 상수로 초기화한 뒤, 바깥 조건문에서 동일성 비교로 비어 있는지 확인해 새 문자열을 대입하고 출력하세요.",
      "hint_en": "Initialize the guild attribute to Python's null constant, check identity outside before assigning the guild name, and print both attributes.",
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
      "prompt_ko": "입력을 정수 요금으로 변환하되 실패 시 25를 기본값으로 써서 세금 포함 티켓 가격을 출력해보세요. (터미널 입력: 15)",
      "prompt_en": "Convert input to int (fallback 25 on ValueError), create a Ticket, and print its final price. (Terminal input: 15)",
      "hint_ko": "첫 빈칸에는 정수(integer)를 뜻하는 세 글자 변환 함수를, 둘째 빈칸에는 위에서 선언한 여섯 글자 클래스 이름을 적어 인스턴스를 생성하세요.",
      "hint_en": "Parse the input with the three-letter integer type function on line 6, and instantiate the declared six-letter class on line 9.",
      "templateCode": "class Ticket:\n    def __init__(self, base, tax=0.1):\n        self.final = base + base * tax\nraw = input()\ntry:\n    price = §§§(raw)\nexcept ValueError:\n    price = 25\nt = §§§§§§(price)\nprint(t.final)",
      "targetCode": "class Ticket:\n    def __init__(self, base, tax=0.1):\n        self.final = base + base * tax\nraw = input()\ntry:\n    price = int(raw)\nexcept ValueError:\n    price = 25\nt = Ticket(price)\nprint(t.final)",
      "testCases": [
        {
          "id": 1,
          "input": "15",
          "expectedOutput": "16.5"
        },
        {
          "id": 2,
          "input": "free",
          "expectedOutput": "27.5"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "초기 높이 3으로 생성한 Plant 인스턴스 p의 높이가 10 미만인 동안 4씩 키우며 일수 days를 세어 days와 p.height를 출력해보세요.",
      "prompt_en": "Create Plant(3) and while p.height < 10 add 4 to p.height and 1 to days, then print days and p.height.",
      "hint_ko": "초기 높이 3으로 식물 객체를 생성한 뒤, 높이 속성이 10 미만인 동안 반복하며 높이와 일수를 함께 증가시키고 두 값을 출력하세요.",
      "hint_en": "Create the plant starting at height 3, loop while its height stays below 10 adding 4 and counting days, then print the day count and final height.",
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
      "prompt_ko": "좌표를 튜플 속성으로 저장하는 점 객체 리스트를 순회하며 x좌표 합계와 두 번째 점의 좌표를 출력해보세요.",
      "prompt_en": "Store coordinates as a tuple attribute in Point, sum all x values in pts, and print total_x and pts[1].pos.",
      "hint_ko": "생성자에서는 인스턴스 '자기 자신'을 뜻하는 네 글자 참조에 튜플을 저장하고, 반복문에서는 점 객체에 저장된 세 글자 좌표 속성 이름을 읽으세요.",
      "hint_en": "Bind the coordinate tuple onto the four-letter instance reference on line 3, and access that three-letter tuple attribute before [0] on line 7.",
      "templateCode": "class Point:\n    def __init__(self, x, y=0):\n        §§§§.pos = (x, y)\npts = [Point(2, 5), Point(4)]\ntotal_x = 0\nfor pt in pts:\n    total_x += pt.§§§[0]\nprint(total_x, pts[1].pos)",
      "targetCode": "class Point:\n    def __init__(self, x, y=0):\n        self.pos = (x, y)\npts = [Point(2, 5), Point(4)]\ntotal_x = 0\nfor pt in pts:\n    total_x += pt.pos[0]\nprint(total_x, pts[1].pos)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "6 (4, 0)"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "생성자의 첫 번째 매개변수가 누락되어 인스턴스를 만들 때 인자 개수 오류가 발생합니다. 코드를 고쳐 Kai:90을 출력해보세요.",
      "prompt_en": "Fix the TypeError caused by omitting the required first parameter in __init__ so Kai:90 is printed.",
      "hint_ko": "클래스 생성자가 호출될 때는 방금 만들어진 인스턴스 자신이 첫 번째 인자로 자동 전달됩니다. 선언부 맨 앞에 빠진 필수 매개변수를 추가하세요.",
      "hint_en": "Python automatically passes the newly created instance as the first argument to the initializer; add the missing instance parameter at the front.",
      "templateCode": "class Hero:\n    def __init__(name, hp):\n        self.name = name\n        self.hp = hp\nh = Hero(\"Kai\", 90)\nprint(f\"{h.name}:{h.hp}\")",
      "targetCode": "class Hero:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\nh = Hero(\"Kai\", 90)\nprint(f\"{h.name}:{h.hp}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Kai:90"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "기본 수량이 적용된 아이템 인스턴스를 생성한 코드 아래에 한 줄을 추가하여 이름과 총액을 출력해보세요. (출력 예: Potion:300)",
      "prompt_en": "Add one line below the Item instantiation to print its name and total separated by a colon (e.g., Potion:300).",
      "hint_ko": "생성자에서 이미 기본 수량이 곱해진 총액 속성이 계산되어 있으므로, 아이템 인스턴스의 이름 속성과 총액 속성을 콜론으로 이어 출력하세요.",
      "hint_en": "Since the initializer already computed the total attribute using the default quantity, format the instance's name and total separated by a colon.",
      "templateCode": "class Item:\n    def __init__(self, name, price, qty=2):\n        self.name = name\n        self.total = price * qty\nit = Item(\"Potion\", 150)\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
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
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "기본값 매개변수와 파생 속성이 함께 쓰인 Cart 클래스 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "Select the output of the Cart class using default parameters and derived attributes in __init__.",
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
