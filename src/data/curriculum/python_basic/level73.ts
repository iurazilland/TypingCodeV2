import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_73: PracticeRound = {
  "id": "py-basic-r73",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 73,
  "title_ko": "73레벨: 생성자 __init__과 self로 초기 속성 설정하기",
  "title_en": "Level 73: Initializer __init__ & Setting self Attributes",
  "description_ko": "객체가 생성될 때 자동 실행되는 __init__ 생성자와 self를 사용해 인스턴스마다 고유한 초기 속성을 설정합니다.",
  "description_en": "Use the __init__ initializer and self to configure initial attributes and default parameters for each instance.",
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
    "def",
    "return",
    "class"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 객체가 생성될 때 자동으로 self.hp = 100을 설정하는 __init__ 생성자를 조립해보세요.",
      "prompt_en": "[Block] Assemble an __init__ initializer that automatically sets self.hp = 100 when a Hero is created.",
      "hint_ko": "__init__ 메서드는 인스턴스가 생성되는 순간 자동으로 호출되어 객체의 초기 속성을 준비합니다.",
      "hint_en": "The __init__ method runs automatically upon instantiation to set up the object's initial attributes.",
      "targetCode": "class Hero:\n    def __init__(self):\n        self.hp = 100\nh = Hero()\nprint(h.hp)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "100"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 방패 객체가 생성될 때 방어력 속성이 50으로 자동 초기화되도록 생성자 이름을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the special initializer method name so Shield starts with def_pt set to 50.",
      "hint_ko": "초기화(initialize)의 앞 네 글자 양옆에 밑줄(_)을 두 개씩 붙인 특수 메서드 이름을 작성하세요.",
      "hint_en": "Write the special method name formed by wrapping the four-letter abbreviation for initialize with double underscores.",
      "templateCode": "class Shield:\n    def §§§§§§§§(self):\n        self.def_pt = 50\ns = Shield()\nprint(s.def_pt)",
      "targetCode": "class Shield:\n    def __init__(self):\n        self.def_pt = 50\ns = Shield()\nprint(s.def_pt)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "50"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 생성자에서 name 매개변수를 받아 self.name = name으로 저장하고 출력해보세요.",
      "prompt_en": "[Block] Receive name in __init__(self, name), store it in self.name, and print u.name.",
      "hint_ko": "User(\"Alice\")처럼 클래스 호출 괄호에 넣은 인자는 __init__의 self 다음 매개변수로 전달됩니다.",
      "hint_en": "Arguments passed inside User(\"Alice\") are forwarded to the parameters after self in __init__.",
      "targetCode": "class User:\n    def __init__(self, name):\n        self.name = name\nu = User(\"Alice\")\nprint(u.name)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Alice"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 생성 시 전달받은 도시 이름을 인스턴스 속성에 저장하도록 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the assignment inside __init__ so the passed city name is stored on the instance.",
      "hint_ko": "전달받은 매개변수를 객체가 계속 기억하게 하려면 자기 자신을 가리키는 참조 변수 뒤에 점과 속성명을 붙여 저장해야 합니다.",
      "hint_en": "Attach the attribute to the instance reference using dot notation on the left side of the assignment.",
      "templateCode": "class Ticket:\n    def __init__(self, city):\n        §§§§§§§§§ = city\nt = Ticket(\"Seoul\")\nprint(t.city)",
      "targetCode": "class Ticket:\n    def __init__(self, city):\n        self.city = city\nt = Ticket(\"Seoul\")\nprint(t.city)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Seoul"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 기본값 매개변수 lv=1을 가진 __init__(self, name, lv=1)을 정의하고 두 객체를 출력해보세요.",
      "prompt_en": "[Block] Define __init__(self, name, lv=1) with a default parameter and print two Player instances.",
      "hint_ko": "생성자에서도 일반 함수처럼 기본값 매개변수를 지정하면 인자를 생략했을 때 기본값이 자동으로 들어갑니다.",
      "hint_en": "Just like regular functions, default parameters in __init__ are used automatically when the argument is omitted.",
      "targetCode": "class Player:\n    def __init__(self, name, lv=1):\n        self.name = name\n        self.lv = lv\na = Player(\"Leo\")\nb = Player(\"Mia\", 5)\nprint(a.name, a.lv)\nprint(b.name, b.lv)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Leo 1\nMia 5"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 수량 인자를 생략하면 기본으로 1개가 설정되도록 생성자 매개변수의 기본값을 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the default parameter in __init__ so omitting qty defaults to 1.",
      "hint_ko": "매개변수 이름 뒤에 등호(=)와 기본 숫자를 붙여 선택적 인자로 만드세요.",
      "hint_en": "Set the default value on the last parameter using an equals sign and the number 1.",
      "templateCode": "class Order:\n    def __init__(self, item, §§§§§):\n        self.item = item\n        self.qty = qty\no1 = Order(\"Pen\")\no2 = Order(\"Book\", 3)\nprint(o1.qty, o2.qty)",
      "targetCode": "class Order:\n    def __init__(self, item, qty=1):\n        self.item = item\n        self.qty = qty\no1 = Order(\"Pen\")\no2 = Order(\"Book\", 3)\nprint(o1.qty, o2.qty)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1 3"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] __init__에서 설정한 이름과 점수를 info(self) 메서드에서 f-string으로 출력해보세요.",
      "prompt_en": "[Block] Combine the attributes initialized in __init__ inside the info(self) method and print them.",
      "hint_ko": "__init__에서 self에 저장해 둔 속성들은 같은 클래스의 다른 모든 메서드에서 self.속성명으로 자유롭게 꺼내 쓸 수 있습니다.",
      "hint_en": "Attributes saved on self in __init__ can be accessed from any other method in the class via self.",
      "targetCode": "class Student:\n    def __init__(self, name, score):\n        self.name = name\n        self.score = score\n    def info(self):\n        print(f\"{self.name}:{self.score}\")\ns = Student(\"Kim\", 95)\ns.info()",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Kim:95"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 생성자에서 저장한 가로·세로 길이로 사각형의 둘레를 출력하는 메서드를 완성해보세요.",
      "prompt_en": "[Fill Blank] Complete the show_peri method so it accesses the width attribute initialized in __init__.",
      "hint_ko": "생성자에서 self에 등록한 가로 길이 속성을 메서드 안에서 그대로 참조하세요.",
      "hint_en": "Access the width attribute attached to self during initialization.",
      "templateCode": "class Rect:\n    def __init__(self, w, h):\n        self.w = w\n        self.h = h\n    def show_peri(self):\n        print((§§§§§§ + self.h) * 2)\nr = Rect(4, 6)\nr.show_peri()",
      "targetCode": "class Rect:\n    def __init__(self, w, h):\n        self.w = w\n        self.h = h\n    def show_peri(self):\n        print((self.w + self.h) * 2)\nr = Rect(4, 6)\nr.show_peri()",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "20"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 생성자 이름과 기본값 매개변수, 그리고 총액을 계산하는 속성 참조를 채워 상품 정보를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the initializer name, default parameter, and instance attribute reference to print the item summary.",
      "hint_ko": "객체 생성 시 자동 실행되는 특수 메서드 이름과 수량 기본값 지정, 그리고 메서드 내부의 단가 속성 접근 방식을 확인하세요.",
      "hint_en": "Check the double-underscore initializer name, the default parameter syntax, and how price is accessed on self.",
      "templateCode": "class Item:\n    def §§§§§§§§(self, name, price, §§§§§):\n        self.name = name\n        self.price = price\n        self.cnt = cnt\n    def show(self):\n        print(f\"{self.name}={§§§§§§§§§§ * self.cnt}\")\nit = Item(\"Gem\", 150)\nit.show()",
      "targetCode": "class Item:\n    def __init__(self, name, price, cnt=2):\n        self.name = name\n        self.price = price\n        self.cnt = cnt\n    def show(self):\n        print(f\"{self.name}={self.price * self.cnt}\")\nit = Item(\"Gem\", 150)\nit.show()",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Gem=300"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 생성자 메서드 이름의 밑줄 개수가 잘못되어 초기 속성이 만들어지지 않는 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the typo in the initializer method name so Pet(\"Coco\") properly sets p.name.",
      "hint_ko": "파이썬의 생성자 특수 메서드는 이름 앞뒤에 밑줄이 한 개가 아니라 두 개씩 들어가야 자동으로 실행됩니다.",
      "hint_en": "Python's special initializer requires double underscores both before and after its name.",
      "templateCode": "class Pet:\n    def _init_(self, name):\n        self.name = name\np = Pet(\"Coco\")\nprint(p.name)",
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
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 생성자 안에서 전달받은 값을 인스턴스 속성이 아닌 지역변수에 대입해 속성이 사라지는 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the bug inside __init__ where lv is assigned to a local variable instead of an instance attribute.",
      "hint_ko": "생성자 안에서 self. 없이 변수 이름만 적으면 함수가 끝날 때 사라지는 지역변수가 되어 객체에서 꺼내 쓸 수 없습니다.",
      "hint_en": "Assigning without the instance prefix creates a temporary local variable instead of saving the attribute on the object.",
      "templateCode": "class Avatar:\n    def __init__(self, job, lv=10):\n        self.job = job\n        lv = lv\n    def tag(self):\n        print(f\"{self.job}/{self.lv}\")\na = Avatar(\"Mage\", 12)\na.tag()",
      "targetCode": "class Avatar:\n    def __init__(self, job, lv=10):\n        self.job = job\n        self.lv = lv\n    def tag(self):\n        print(f\"{self.job}/{self.lv}\")\na = Avatar(\"Mage\", 12)\na.tag()",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Mage/12"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 생성자 내부에서 매개변수 speed를 인스턴스 속성 self.speed에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the line inside __init__ that stores the speed parameter in self.speed.",
      "hint_ko": "들여쓰기 위치에 맞춰 자기 자신의 speed 속성에 전달받은 매개변수 speed를 대입하세요.",
      "hint_en": "Assign the parameter speed to the instance attribute on self.",
      "templateCode": "class Car:\n    def __init__(self, model, speed=60):\n        self.model = model\n        §§§§§§§§§§§§§§§§§§\nc = Car(\"EV\", 90)\nprint(c.model, c.speed)",
      "targetCode": "class Car:\n    def __init__(self, model, speed=60):\n        self.model = model\n        self.speed = speed\nc = Car(\"EV\", 90)\nprint(c.model, c.speed)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "EV 90"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] self와 title, 그리고 기본값이 1인 floor를 받는 생성자 헤더 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the __init__ method header taking self, title, and floor with a default of 1.",
      "hint_ko": "메서드 선언 키워드 뒤에 양쪽 밑줄 두 개짜리 생성자 이름과 매개변수 목록, 콜론을 정확히 적으세요.",
      "hint_en": "Write the def header for the initializer with self, title, and floor=1 followed by a colon.",
      "templateCode": "class Room:\n    §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\n        self.title = title\n        self.floor = floor\nr = Room(\"Lab\")\nprint(f\"{r.title}:{r.floor}F\")",
      "targetCode": "class Room:\n    def __init__(self, title, floor=1):\n        self.title = title\n        self.floor = floor\nr = Room(\"Lab\")\nprint(f\"{r.title}:{r.floor}F\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Lab:1F"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 기본값 매개변수와 키워드 인자를 활용해 생성한 두 객체의 출력 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the output when two instances are initialized using default and positional arguments.",
      "hint_ko": "인자를 하나만 넘긴 객체는 기본값을 사용하고, 두 개를 넘긴 객체는 전달한 값으로 기본값을 덮어씁니다.",
      "hint_en": "The first object uses the default bonus, while the second overrides it with the passed argument.",
      "targetCode": "class Coupon:\n    def __init__(self, code, off=10, min_pay=100):\n        self.code = code\n        self.saved = min_pay * off // 100\na = Coupon(\"WELCOME\")\nb = Coupon(\"VIP\", 25, 200)\nprint(a.code, a.saved)\nprint(b.code, b.saved)",
      "choices": [
        "WELCOME 10\nVIP 50",
        "WELCOME 10\nVIP 25",
        "WELCOME 100\nVIP 50",
        "WELCOME 10\nVIP 200"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "WELCOME 10\nVIP 50"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 생성자 내부의 조건 분기와 산술 연산이 결합된 다음 코드의 출력 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the output of the code where __init__ branches on a condition to set attributes.",
      "hint_ko": "생성자 안에서도 if-else 조건문으로 전달받은 값에 따라 초기 속성값을 다르게 계산해 저장할 수 있습니다.",
      "hint_en": "Trace the if-else branch inside __init__ for each instance's initial argument.",
      "targetCode": "class Parcel:\n    def __init__(self, kg):\n        self.kg = kg\n        if kg >= 5:\n            self.fee = 3000 + (kg - 5) * 500\n        else:\n            self.fee = 2500\np1 = Parcel(3)\np2 = Parcel(8)\nprint(p1.fee, p2.fee, p1.fee + p2.fee)",
      "choices": [
        "2500 4000 6500",
        "2500 4500 7000",
        "3000 4500 7500",
        "2500 3500 6000"
      ],
      "correctChoiceIndex": 1,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2500 4500 7000"
        }
      ]
    }
  ]
};
