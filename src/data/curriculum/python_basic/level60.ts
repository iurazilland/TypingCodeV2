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
      "hint_ko": "객체가 생성될 때 __init__이 자동 호출되며, 첫 매개변수 self는 방금 만들어진 인스턴스 자신을 가리킵니다.",
      "hint_en": "__init__ runs automatically when Pet(\"Coco\") is called, binding self.name to \"Coco\".",
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
      "hint_ko": "파이썬 생성자의 이름은 양쪽에 밑줄 두 개씩 붙은 __init__이며, 인스턴스 속성은 self.hp처럼 저장합니다.",
      "hint_en": "Write __init__ on line 2 and self before .hp on line 4.",
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
      "hint_ko": "생성자 매개변수에 hp=100을 지정하면 두 번째 인자를 생략했을 때 자동으로 100이 초기 체력이 됩니다.",
      "hint_en": "Default parameter hp=100 sets Leo's hp to 100 while Mia overrides hp with 150.",
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
      "hint_ko": "첫 매개변수로 인스턴스 자신을 받고, 전달받은 price와 count를 곱해 self.total에 저장합니다.",
      "hint_en": "Put self as the first parameter on line 2 and multiply price * count on line 4.",
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
      "prompt_ko": "입력받은 아이디로 기본 레벨 1인 User 인스턴스를 생성하고 형식에 맞게 출력해보세요. (예: neo -> neo:Lv1)",
      "prompt_en": "Create a User instance with default level=1 from input() and print it formatted (e.g., neo -> neo:Lv1).",
      "hint_ko": "def __init__(self, uid, level=1):로 정의한 뒤 u = User(input())으로 생성해 f\"{u.uid}:Lv{u.level}\"을 출력합니다.",
      "hint_en": "Pass input() to User(uid) with level=1 default and print f\"{u.uid}:Lv{u.level}\".",
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
      "prompt_ko": "정수 점수로 시험 객체를 만들 때 80점 이상 여부에 따라 합격 속성을 설정하고 출력해보세요. (예: 85 -> 85:True)",
      "prompt_en": "Initialize an Exam instance from integer input, set its passed attribute, and print score:passed.",
      "hint_ko": "생성자 안에서 self.score = score로 점수를 저장하고, 출력문에서는 인스턴스 e의 e.passed 속성을 읽습니다.",
      "hint_en": "Use self on line 3 to store score and passed on line 9 to display the boolean result.",
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
      "hint_ko": "아직 정해지지 않은 초기 속성은 None으로 둔 뒤 if k.guild is None: 조건으로 확인해 새 값을 채울 수 있습니다.",
      "hint_en": "Set self.guild = None in __init__, check if k.guild is None:, assign \"Round\", and print f\"{k.name}-{k.guild}\".",
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
      "prompt_ko": "입력을 실수 요금으로 변환하되 실패 시 25.0을 기본값으로 써서 세금 포함 티켓 가격을 출력해보세요. (예: 15 -> 16.5)",
      "prompt_en": "Convert input to float (fallback 25.0 on ValueError), create a Ticket, and print its final price.",
      "hint_ko": "실수 변환에는 float() 함수를 사용하고, 변환된 price를 인자로 넣어 Ticket(price) 인스턴스를 생성합니다.",
      "hint_en": "Use float on line 6 and instantiate Ticket(price) on line 9.",
      "templateCode": "class Ticket:\n    def __init__(self, base, tax=0.1):\n        self.final = base + base * tax\nraw = input()\ntry:\n    price = §§§§§(raw)\nexcept ValueError:\n    price = 25.0\nt = §§§§§§(price)\nprint(t.final)",
      "targetCode": "class Ticket:\n    def __init__(self, base, tax=0.1):\n        self.final = base + base * tax\nraw = input()\ntry:\n    price = float(raw)\nexcept ValueError:\n    price = 25.0\nt = Ticket(price)\nprint(t.final)",
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
      "hint_ko": "초기 높이 3에서 1일 뒤 7, 2일 뒤 11이 되어 반복이 멈추고 2 11이 출력됩니다.",
      "hint_en": "Loop while p.height < 10:, increment p.height += 4 and days += 1, then print(days, p.height).",
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
      "hint_ko": "생성자에서 self.pos = (x, y)로 튜플을 저장하고, 반복문에서 각 인스턴스 pt의 pt.pos[0]을 더합니다.",
      "hint_en": "Use self on line 3 to assign self.pos and pos on line 7 to read index 0 of each tuple.",
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
      "hint_ko": "클래스 내부의 생성자 __init__은 항상 첫 번째 매개변수로 인스턴스 자신을 받는 self를 선언해야 합니다.",
      "hint_en": "Add self as the first parameter: def __init__(self, name, hp):.",
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
      "hint_ko": "qty 기본값 2가 적용되어 it.total은 300입니다. print(f\"{it.name}:{it.total}\")를 작성하세요.",
      "hint_en": "Write print(f\"{it.name}:{it.total}\") on the last line.",
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
      "hint_ko": "a는 20 * 2 + 5 = 45이고, b는 기본값을 모두 덮어써 10 * 3 + 0 = 30이 됩니다.",
      "hint_en": "Cart(20) uses count=2, fee=5 -> 45; Cart(10, 3, 0) overrides both -> 30.",
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
