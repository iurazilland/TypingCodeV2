import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_85: PracticeRound = {
  "id": "py-basic-r85",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 85,
  "title_ko": "85레벨: 클래스 기초 상속(class Child(Parent):)과 메서드 재정의",
  "title_en": "Level 85: Single Inheritance & Method Overriding Basics",
  "description_ko": "부모 클래스의 속성과 메서드를 물려받는 단일 상속(class Child(Parent):), 메서드 재정의, 다형성 순회와 isinstance 검사를 익힙니다.",
  "description_en": "Learn single class inheritance, inheriting parent __init__ and methods, method overriding, polymorphism loops, and isinstance.",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "type",
    "math",
    "method",
    "if",
    "for_in",
    "def",
    "class",
    "try",
    "raise"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "Animal을 상속받는 Dog(Animal) 클래스를 만들어 부모의 __init__과 eat을 그대로 물려받고 bark도 호출해보세요.",
      "prompt_en": "Create Dog(Animal) inheriting __init__ and eat from Animal, then print d.eat() and d.bark().",
      "hint_ko": "class Dog(Animal):처럼 괄호 안에 부모 클래스를 적으면 __init__을 다시 쓰지 않아도 부모의 초기화와 메서드를 물려받습니다.",
      "hint_en": "Writing class Dog(Animal): inherits Animal.__init__ and Animal.eat without rewriting them.",
      "targetCode": "class Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def eat(self):\n        return f\"{self.name} eats\"\n\nclass Dog(Animal):\n    def bark(self):\n        return f\"{self.name}:Woof\"\n\nd = Dog(\"Coco\")\nprint(d.eat())\nprint(d.bark())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Coco eats\nCoco:Woof"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 부모 클래스 이름을 채워 Bike가 Vehicle의 초기화와 move 메서드를 상속받도록 완성하세요.",
      "prompt_en": "Fill in the parent class name so Bike inherits __init__ and move from Vehicle.",
      "hint_ko": "자식 클래스 이름 뒤 괄호 안에 상속받을 부모 클래스 Vehicle을 적습니다.",
      "hint_en": "Place Vehicle inside the parentheses of class Bike(Vehicle):.",
      "templateCode": "class Vehicle:\n    def __init__(self, model):\n        self.model = model\n\n    def move(self):\n        return f\"{self.model} moves\"\n\nclass Bike(§§§§§§§):\n    def ring(self):\n        return \"Ring!\"\n\nb = Bike(\"Road\")\nprint(b.move())\nprint(b.ring())",
      "targetCode": "class Vehicle:\n    def __init__(self, model):\n        self.model = model\n\n    def move(self):\n        return f\"{self.model} moves\"\n\nclass Bike(Vehicle):\n    def ring(self):\n        return \"Ring!\"\n\nb = Bike(\"Road\")\nprint(b.move())\nprint(b.ring())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Road moves\nRing!"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "Animal을 상속받은 Cat 클래스에서 speak 메서드를 재정의(Overriding)하여 Nabi:Meow가 출력되게 해보세요.",
      "prompt_en": "Override speak(self) in Cat(Animal) so c.speak() returns Nabi:Meow instead of \"...\".",
      "hint_ko": "부모에 있던 메서드와 똑같은 이름으로 자식 클래스에 메서드를 다시 정의하면 자식의 메서드가 우선 호출됩니다.",
      "hint_en": "Redefining speak(self) on Cat overrides Animal.speak(self) for Cat instances.",
      "targetCode": "class Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def speak(self):\n        return \"...\"\n\nclass Cat(Animal):\n    def speak(self):\n        return f\"{self.name}:Meow\"\n\nc = Cat(\"Nabi\")\nprint(c.speak())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Nabi:Meow"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸을 채워 Member를 상속받은 VIPMember에서 문자열 표현 메서드를 재정의해 [VIP]Ara:500을 출력하세요.",
      "prompt_en": "Fill in both blanks so VIPMember inherits from Member and overrides __str__ to print [VIP]Ara:500.",
      "hint_ko": "첫 빈칸에는 부모 클래스 Member를, 둘째 빈칸에는 재정의할 특별 메서드 __str__을 입력합니다.",
      "hint_en": "Inherit from Member and override __str__ in VIPMember.",
      "templateCode": "class Member:\n    def __init__(self, name, point):\n        self.name = name\n        self.point = point\n\n    def __str__(self):\n        return f\"{self.name}:{self.point}\"\n\nclass VIPMember(§§§§§§):\n    def §§§§§§§(self):\n        return f\"[VIP]{self.name}:{self.point}\"\n\nm = VIPMember(\"Ara\", 500)\nprint(m)",
      "targetCode": "class Member:\n    def __init__(self, name, point):\n        self.name = name\n        self.point = point\n\n    def __str__(self):\n        return f\"{self.name}:{self.point}\"\n\nclass VIPMember(Member):\n    def __str__(self):\n        return f\"[VIP]{self.name}:{self.point}\"\n\nm = VIPMember(\"Ara\", 500)\nprint(m)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[VIP]Ara:500"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "Dog와 Cat 객체를 한 리스트에 담고 for 반복문으로 pet.speak()를 호출해 각자의 울음소리를 출력해보세요.",
      "prompt_en": "Iterate through [Dog(\"Coco\"), Cat(\"Nabi\")] and print pet.speak() to see polymorphic behavior.",
      "hint_ko": "같은 pet.speak() 호출이라도 객체의 실제 클래스(Dog, Cat)에 맞게 재정의된 메서드가 각각 실행됩니다.",
      "hint_en": "Calling pet.speak() invokes Dog.speak for Dog and Cat.speak for Cat (polymorphism).",
      "targetCode": "class Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def speak(self):\n        return \"...\"\n\nclass Dog(Animal):\n    def speak(self):\n        return f\"{self.name}:Woof\"\n\nclass Cat(Animal):\n    def speak(self):\n        return f\"{self.name}:Meow\"\n\npets = [Dog(\"Coco\"), Cat(\"Nabi\")]\nfor pet in pets:\n    print(pet.speak())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Coco:Woof\nNabi:Meow"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸을 채워 일반 배송(3000)을 상속받은 특급 배송(6000)의 요금 메서드를 재정의하고 총합 12000을 출력하세요.",
      "prompt_en": "Fill in both blanks so Express inherits Delivery, overrides fee(), and total fee sums to 12000.",
      "hint_ko": "Express(Delivery)에서 fee 메서드를 재정의하면 리스트 컴프리헨션에서 각 객체에 맞는 배송비가 계산됩니다.",
      "hint_en": "Inherit Delivery and override fee in Express so d.fee() returns 6000 for Express orders.",
      "templateCode": "class Delivery:\n    def fee(self):\n        return 3000\n\nclass Express(§§§§§§§§):\n    def §§§(self):\n        return 6000\n\norders = [Delivery(), Express(), Delivery()]\ntotal = sum([d.fee() for d in orders])\nprint(total)",
      "targetCode": "class Delivery:\n    def fee(self):\n        return 3000\n\nclass Express(Delivery):\n    def fee(self):\n        return 6000\n\norders = [Delivery(), Express(), Delivery()]\ntotal = sum([d.fee() for d in orders])\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "12000"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "자식 클래스 객체 d에 대해 isinstance(d, Dog)와 isinstance(d, Animal)이 모두 True인지 확인해보세요.",
      "prompt_en": "Verify that isinstance(d, Dog) and isinstance(d, Animal) both print True for Dog instance d.",
      "hint_ko": "자식 클래스로 만든 인스턴스는 자식 클래스이면서 동시에 부모 클래스의 인스턴스로도 인정됩니다.",
      "hint_en": "An instance of a child class is also considered an instance of its parent class by isinstance().",
      "targetCode": "class Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Dog(Animal):\n    def bark(self):\n        return \"Woof\"\n\nd = Dog(\"Coco\")\nprint(isinstance(d, Dog))\nprint(isinstance(d, Animal))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True\nTrue"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸을 채워 여러 값이 섞인 리스트 arr에서 Animal 계열 객체만 골라 이름을 쉼표로 출력하세요.",
      "prompt_en": "Fill in both blanks to filter only Animal instances (including Dog and Cat) and print Max,Luna.",
      "hint_ko": "isinstance(x, Animal)은 Dog와 Cat 객체에 대해서도 모두 True를 반환하고 문자열 \"Toy\"는 걸러냅니다.",
      "hint_en": "isinstance(x, Animal) returns True for both Dog and Cat instances while excluding \"Toy\".",
      "templateCode": "class Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Dog(Animal):\n    def speak(self):\n        return \"Woof\"\n\nclass Cat(Animal):\n    def speak(self):\n        return \"Meow\"\n\narr = [Dog(\"Max\"), \"Toy\", Cat(\"Luna\")]\nns = [x.name for x in arr if §§§§§§§§§§(x, §§§§§§)]\nprint(\",\".join(ns))",
      "targetCode": "class Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Dog(Animal):\n    def speak(self):\n        return \"Woof\"\n\nclass Cat(Animal):\n    def speak(self):\n        return \"Meow\"\n\narr = [Dog(\"Max\"), \"Toy\", Cat(\"Luna\")]\nns = [x.name for x in arr if isinstance(x, Animal)]\nprint(\",\".join(ns))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Max,Luna"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "Unit을 상속받은 Knight에서 음수 피해량은 예외를 일으키고 피해를 5만큼 경감하는 hit 메서드를 실행해보세요.",
      "prompt_en": "Inherit Unit in Knight, raise ValueError on negative dmg, reduce damage by 5 using max, and print k.",
      "hint_ko": "Knight는 부모 Unit의 __init__과 __str__을 물려받고, 방어력이 적용된 hit 메서드만 새로 정의합니다.",
      "hint_en": "Knight inherits __init__ and __str__ from Unit while defining hit with validation and damage reduction.",
      "targetCode": "class Unit:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def __str__(self):\n        return f\"{self.name}:{self.hp}\"\n\nclass Knight(Unit):\n    def hit(self, dmg):\n        if dmg < 0:\n            raise ValueError(\"Neg\")\n        self.hp -= max(0, dmg - 5)\n\nk = Knight(\"Arthur\", 50)\ntry:\n    k.hit(int(input()))\nexcept ValueError:\n    print(\"Invalid\")\nprint(k)",
      "testCases": [
        {
          "id": 1,
          "input": "15",
          "expectedOutput": "Arthur:40"
        },
        {
          "id": 2,
          "input": "-3",
          "expectedOutput": "Invalid\nArthur:50"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "세 빈칸을 채워 Account를 상속받고 입금 시 보너스 10을 더해주는 BonusAccount를 예외 처리와 함께 완성하세요.",
      "prompt_en": "Fill in the three blanks so BonusAccount inherits Account, validates amt > 0, and adds +10 bonus.",
      "hint_ko": "Account를 상속받아 __init__과 __str__을 재사용하고, 0 이하 입금은 raise와 except ValueError as e로 처리합니다.",
      "hint_en": "Inherit Account, raise ValueError(\"Bad\") when amt <= 0, and catch it with except ValueError as e:.",
      "templateCode": "class Account:\n    def __init__(self, owner, bal):\n        self.owner = owner\n        self.bal = bal\n\n    def __str__(self):\n        return f\"{self.owner}:{self.bal}\"\n\nclass BonusAccount(§§§§§§§):\n    def deposit(self, amt):\n        if amt <= 0:\n            §§§§§ ValueError(\"Bad\")\n        self.bal += amt + 10\n\nacc = BonusAccount(\"Min\", 100)\ntry:\n    acc.deposit(int(input()))\nexcept ValueError §§ e:\n    print(e)\nprint(acc)",
      "targetCode": "class Account:\n    def __init__(self, owner, bal):\n        self.owner = owner\n        self.bal = bal\n\n    def __str__(self):\n        return f\"{self.owner}:{self.bal}\"\n\nclass BonusAccount(Account):\n    def deposit(self, amt):\n        if amt <= 0:\n            raise ValueError(\"Bad\")\n        self.bal += amt + 10\n\nacc = BonusAccount(\"Min\", 100)\ntry:\n    acc.deposit(int(input()))\nexcept ValueError as e:\n    print(e)\nprint(acc)",
      "testCases": [
        {
          "id": 1,
          "input": "50",
          "expectedOutput": "Min:160"
        },
        {
          "id": 2,
          "input": "0",
          "expectedOutput": "Bad\nMin:100"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "Eagle 클래스가 Bird 클래스를 상속받지 않아 초기화와 fly 호출이 실패하는 버그를 수정하세요.",
      "prompt_en": "Fix the bug where Eagle does not inherit from Bird, causing Eagle(\"Sky\") and e.fly() to fail.",
      "hint_ko": "Eagle 클래스 선언부에 괄호를 열고 부모 클래스 Bird를 지정해야 __init__과 fly를 물려받습니다.",
      "hint_en": "Change class Eagle: to class Eagle(Bird): so Eagle inherits __init__ and fly from Bird.",
      "templateCode": "class Bird:\n    def __init__(self, name):\n        self.name = name\n\n    def fly(self):\n        return f\"{self.name} flies\"\n\nclass Eagle:\n    def hunt(self):\n        return f\"{self.name} hunts\"\n\ne = Eagle(\"Sky\")\nprint(e.fly())\nprint(e.hunt())",
      "targetCode": "class Bird:\n    def __init__(self, name):\n        self.name = name\n\n    def fly(self):\n        return f\"{self.name} flies\"\n\nclass Eagle(Bird):\n    def hunt(self):\n        return f\"{self.name} hunts\"\n\ne = Eagle(\"Sky\")\nprint(e.fly())\nprint(e.hunt())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Sky flies\nSky hunts"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "마지막에 한 줄을 추가하여 s가 Shape의 인스턴스인지 여부와 s.area()를 공백으로 출력하세요. (예: True 16)",
      "prompt_en": "Add one line at the end to print isinstance(s, Shape) and s.area() separated by a space (True 16).",
      "hint_ko": "print(isinstance(s, Shape), s.area())를 마지막 줄에 작성해보세요.",
      "hint_en": "Write print(isinstance(s, Shape), s.area()) on the final line.",
      "templateCode": "class Shape:\n    def area(self):\n        return 0\n\nclass Square(Shape):\n    def __init__(self, side):\n        self.side = side\n\n    def area(self):\n        return self.side ** 2\n\ns = Square(4)\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "class Shape:\n    def area(self):\n        return 0\n\nclass Square(Shape):\n    def __init__(self, side):\n        self.side = side\n\n    def area(self):\n        return self.side ** 2\n\ns = Square(4)\nprint(isinstance(s, Shape), s.area())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True 16"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "Coupon과 이를 상속받아 pay를 재정의한 HalfCoupon에 대해 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "Select the exact output of the polymorphism and isinstance check on Coupon and HalfCoupon.",
      "hint_ko": "Coupon(5000).pay()는 4000, HalfCoupon(5000).pay()는 2500이며, HalfCoupon 객체는 Coupon의 인스턴스(True)입니다.",
      "hint_en": "Coupon pays 4000, HalfCoupon overrides pay to 2500, and isinstance(items[1], Coupon) is True.",
      "targetCode": "class Coupon:\n    def __init__(self, price):\n        self.price = price\n\n    def pay(self):\n        return self.price - 1000\n\nclass HalfCoupon(Coupon):\n    def pay(self):\n        return self.price // 2\n\nitems = [Coupon(5000), HalfCoupon(5000)]\nres = [c.pay() for c in items]\nprint(res[0], res[1], isinstance(items[1], Coupon))",
      "choices": [
        "4000 2500 True",
        "4000 2500 False",
        "4000 4000 True",
        "5000 2500 True"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "4000 2500 True"
        }
      ]
    }
  ]
};
