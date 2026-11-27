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
      "prompt_ko": "[블록 조립] 객체가 생성될 때 자동으로 초기 체력을 100으로 설정하는 생성자 메서드를 조립해보세요.",
      "prompt_en": "[Block] Assemble an initializer method that automatically sets the health attribute to 100 when an instance is created.",
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
      "prompt_ko": "[빈칸 채우기] 방패 객체가 생성될 때 방어력 속성이 자동 초기화되도록 생성자 이름을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the special initializer method name so the defense attribute is set automatically.",
      "hint_ko": "init 양옆에 밑줄(_)을 두 개씩 붙인 생성자 메서드 이름(__init__)을 작성하세요.",
      "hint_en": "Write the special initializer method name __init__ wrapped with double underscores.",
      "templateCode": "class Shield:\n    def §§§§§§§§§(self):\n        self.def_pt = 50\ns = Shield()\nprint(s.def_pt)",
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
      "prompt_ko": "[블록 조립] 생성자에서 이름 매개변수를 전달받아 인스턴스 속성으로 저장하고 출력해보세요.",
      "prompt_en": "[Block] Receive a name parameter in the initializer, store it as an instance attribute, and print it.",
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
      "prompt_en": "[Fill Blank] Complete the assignment in the initializer so the passed city name is stored on the instance.",
      "hint_ko": "전달받은 매개변수를 객체가 계속 기억하게 하려면 자기 자신을 가리키는 참조 변수 뒤에 점과 속성명을 붙여 저장해야 합니다.",
      "hint_en": "Attach the attribute to the instance reference using dot notation on the left side of the assignment.",
      "templateCode": "class Ticket:\n    def __init__(self, city):\n        §§§§§§§§§§ = city\nt = Ticket(\"Seoul\")\nprint(t.city)",
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
      "prompt_ko": "[블록 조립] 레벨의 기본값이 1로 설정된 생성자를 정의하고 인자 개수가 다른 두 객체의 정보를 출력해보세요.",
      "prompt_en": "[Block] Define an initializer with a default level of 1 and print the attributes of two Player instances.",
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
      "prompt_en": "[Fill Blank] Complete the default parameter in the initializer so omitting the quantity argument defaults to 1.",
      "hint_ko": "매개변수 이름 뒤에 등호(=)와 기본 숫자를 붙여 선택적 인자로 만드세요.",
      "hint_en": "Set the default value on the last parameter using an equals sign and the number 1.",
      "templateCode": "class Order:\n    def __init__(self, item, §§§§§§):\n        self.item = item\n        self.qty = qty\no1 = Order(\"Pen\")\no2 = Order(\"Book\", 3)\nprint(o1.qty, o2.qty)",
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
      "prompt_ko": "[블록 조립] 생성자에서 초기화한 이름과 점수 속성을 정보 출력 메서드에서 포맷 문자열로 출력해보세요.",
      "prompt_en": "[Block] Format and print the attributes initialized by the constructor inside the instance method.",
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
      "prompt_ko": "[빈칸 채우기] 생성자에서 저장한 가로·세로 길이로 사각형의 둘레를 계산하도록 속성 참조를 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the method so it accesses the width attribute initialized on the instance.",
      "hint_ko": "생성자에서 self에 등록한 가로 길이 속성을 메서드 안에서 그대로 참조하세요.",
      "hint_en": "Access the width attribute attached to self during initialization.",
      "templateCode": "class Rect:\n    def __init__(self, w, h):\n        self.w = w\n        self.h = h\n    def show_peri(self):\n        print((§§§§§§§ + self.h) * 2)\nr = Rect(4, 6)\nr.show_peri()",
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
      "prompt_ko": "[빈칸 채우기] 아이템의 초기 속성을 설정하고 단가와 수량을 곱한 금액을 출력하는 클래스를 완성해보세요.",
      "prompt_en": "[Fill Blank] Complete the item class so it initializes its attributes and prints the total value.",
      "hint_ko": "객체 생성 시 자동 실행되는 특수 메서드 이름(__init__)과 인스턴스 단가 속성 참조(self.price)를 차례로 채우세요.",
      "hint_en": "Check the double-underscore initializer name, the default parameter syntax, and how price is accessed on self.",
      "templateCode": "class Item:\n    def §§§§§§§§§(self, name, price, cnt=2):\n        self.name = name\n        self.price = price\n        self.cnt = cnt\n    def show(self):\n        print(f\"{self.name}={§§§§§§§§§§§ * self.cnt}\")\nit = Item(\"Gem\", 150)\nit.show()",
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
      "prompt_ko": "[틀린 곳 수정] 반려동물 객체를 생성할 때 전달한 이름이 자동으로 속성에 저장되도록 생성자 이름을 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the initializer method name so creating an instance properly sets its name attribute.",
      "hint_ko": "파이썬 클래스의 생성자 메서드 이름은 __init__입니다.",
      "hint_en": "Python's special initializer requires double underscores both before and after its name.",
      "templateCode": "class Pet:\n    def __main__(self, name):\n        self.name = name\np = Pet(\"Coco\")\nprint(p.name)",
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
      "prompt_ko": "[틀린 곳 수정] 생성자에서 전달받은 레벨이 인스턴스 속성에 저장되도록 객체 참조를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the instance reference inside the initializer so the level attribute is properly saved.",
      "hint_ko": "파이썬에서는 객체 자신의 속성에 접근할 때 this가 아니라 self.속성명을 사용합니다.",
      "hint_en": "Assigning without the instance prefix creates a temporary local variable instead of saving the attribute on the object.",
      "templateCode": "class Avatar:\n    def __init__(self, job, lv=10):\n        self.job = job\n        this.lv = lv\n    def tag(self):\n        print(f\"{self.job}/{self.lv}\")\na = Avatar(\"Mage\", 12)\na.tag()",
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
      "prompt_ko": "[한 줄 완성] 생성자 내부에서 전달받은 속도 매개변수를 인스턴스의 속도 속성에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the line inside the initializer that saves the speed parameter onto the instance's speed attribute.",
      "hint_ko": "들여쓰기 위치에 맞춰 자기 자신의 speed 속성에 전달받은 매개변수 speed를 대입하세요.",
      "hint_en": "Assign the parameter speed to the instance attribute on self.",
      "templateCode": "class Car:\n    def __init__(self, model, speed=60):\n        self.model = model\n        §§§§§§§§§§§§§§§§§§§\nc = Car(\"EV\", 90)\nprint(c.model, c.speed)",
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
      "prompt_ko": "[한 줄 완성] 인스턴스 자신과 방 이름, 그리고 기본값이 1인 층수 매개변수를 받는 생성자 헤더 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the initializer method header taking the instance reference, the room title, and the floor parameter with a default of 1.",
      "hint_ko": "메서드 선언 키워드 뒤에 양쪽 밑줄 두 개짜리 생성자 이름과 매개변수 목록, 콜론을 정확히 적으세요.",
      "hint_en": "Write the def header for the initializer with self, title, and floor=1 followed by a colon.",
      "templateCode": "class Room:\n    §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\n        self.title = title\n        self.floor = floor\nr = Room(\"Lab\")\nprint(f\"{r.title}:{r.floor}F\")",
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
