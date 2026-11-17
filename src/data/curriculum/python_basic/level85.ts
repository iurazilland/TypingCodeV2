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
  "totalQuestions": 15,
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] class Dog(Animal):로 부모 클래스를 상속받아 eat()과 전용 메서드 bark()를 호출해보세요.",
      "prompt_en": "[Block] Declare class Dog(Animal): to inherit __init__ and eat(), and call d.eat() and d.bark().",
      "hint_ko": "Dog 클래스에 __init__이나 eat을 따로 정의하지 않아도 부모인 Animal로부터 물려받아 호출할 수 있습니다.",
      "hint_en": "Even without defining __init__ or eat in Dog, instances of Dog inherit both from Animal.",
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
      "prompt_ko": "[빈칸 채우기] 빈칸에 부모 클래스 이름을 채워 Bike가 Vehicle의 초기화와 move 메서드를 상속받게 하세요.",
      "prompt_en": "[Fill Blank] Fill in the parent class name so Bike inherits __init__ and move from Vehicle.",
      "hint_ko": "자식 클래스 선언부의 소괄호 안에 맨 위에 정의된 상위(부모) 클래스 이름을 그대로 적으세요.",
      "hint_en": "Inside the parentheses of the child class header, enter the parent class name defined at the top.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] Animal을 상속받은 Cat에서 speak() 메서드를 재정의해 Nabi:Meow를 출력해보세요.",
      "prompt_en": "[Block] Override speak(self) in Cat(Animal) so c.speak() returns Nabi:Meow.",
      "hint_ko": "__init__은 부모의 것을 그대로 물려쓰고, 동작이 달라지는 speak 메서드만 Cat에서 새로 정의합니다.",
      "hint_en": "Cat inherits __init__ from Animal as-is and only overrides speak(self) with its own return value.",
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
      "prompt_ko": "[빈칸 채우기] Member를 상속받은 VIPMember에서 문자열 표현 메서드를 재정의해 [VIP]Ara:500을 출력하세요.",
      "prompt_en": "[Fill Blank] Fill in both blanks so VIPMember inherits Member and overrides __str__.",
      "hint_ko": "첫 빈칸은 위에 정의된 부모 클래스 이름을, 둘째 빈칸은 7글자 문자열 표현 특별 메서드 이름을 적으세요.",
      "hint_en": "Inherit from the parent class defined above, and override the 7-character __str__ method.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] Dog와 Cat 객체를 리스트에 담아 순회하며 다형성으로 각각의 speak() 결과를 출력해보세요.",
      "prompt_en": "[Block] Loop through a list of Dog and Cat instances calling pet.speak() polymorphically.",
      "hint_ko": "반복문 코드는 pet.speak() 한 줄뿐이지만 Dog 객체일 때와 Cat 객체일 때 서로 다른 결과가 반환됩니다.",
      "hint_en": "A single pet.speak() call in the loop produces different outputs depending on whether pet is a Dog or a Cat.",
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
      "prompt_ko": "[빈칸 채우기] 일반 배송(3000)을 상속받은 특급 배송(6000)의 요금 메서드를 재정의해 총합 12000을 출력하세요.",
      "prompt_en": "[Fill Blank] Fill in both blanks so Express inherits Delivery, overrides fee(), and sums to 12000.",
      "hint_ko": "소괄호 안에는 맨 위의 부모 클래스 이름을 적고, 아랫줄에서는 부모와 동일한 3글자 요금 메서드 이름을 재정의하세요.",
      "hint_en": "Place the parent class name inside parentheses, and override the exact 3-letter method name called below.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 자식 클래스 객체 d에 대해 isinstance(d, Dog)와 isinstance(d, Animal)을 각각 출력해보세요.",
      "prompt_en": "[Block] Check isinstance(d, Dog) and isinstance(d, Animal) on a Dog instance d.",
      "hint_ko": "강아지(Dog)는 곧 동물(Animal)이기도 하므로 isinstance(d, Animal) 역시 True가 됩니다.",
      "hint_en": "Because Dog inherits from Animal, isinstance(d, Animal) evaluates to True just like isinstance(d, Dog).",
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
      "prompt_ko": "[빈칸 채우기] Animal을 상속받은 Cat 객체 c가 부모 클래스 Animal의 인스턴스인지 출력하도록 두 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in Animal and isinstance to verify that Cat instance c is an Animal.",
      "hint_ko": "상속 선언부에는 6글자 부모 클래스 이름을, 출력문에는 10글자 타입 확인 함수를 채우세요.",
      "hint_en": "Inherit the 6-letter parent class Animal and call the 10-letter isinstance built-in.",
      "templateCode": "class Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Cat(§§§§§§):\n    def speak(self):\n        return \"Meow\"\n\nc = Cat(\"Luna\")\nprint(§§§§§§§§§§(c, Animal))",
      "targetCode": "class Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Cat(Animal):\n    def speak(self):\n        return \"Meow\"\n\nc = Cat(\"Luna\")\nprint(isinstance(c, Animal))",
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
      "prompt_ko": "[블록 조립] Unit을 상속받은 Knight에 음수 피해량 예외 검증과 방어력 경감(max(0, dmg - 5))을 구현하세요.",
      "prompt_en": "[Block] Inherit Unit in Knight and implement hit(self, dmg) with raise and max(0, dmg - 5).",
      "hint_ko": "max(0, dmg - 5)는 피해량에서 5를 뺀 값이 음수가 되지 않도록 최소 피해량을 0으로 보장합니다.",
      "hint_en": "max(0, dmg - 5) ensures the reduced damage never drops below 0 so hp cannot accidentally increase.",
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
        },
        {
          "id": 3,
          "input": "3",
          "expectedOutput": "Arthur:50"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] Account를 상속받고 입금 시 보너스 10을 더해주는 BonusAccount를 완성하세요.",
      "prompt_en": "[Fill Blank] Fill in Account and raise so BonusAccount validates amt > 0 and adds +10 bonus.",
      "hint_ko": "위에 정의된 7글자 부모 클래스 이름을 상속받고, 0 이하 금액은 5글자 키워드로 예외를 일으키세요.",
      "hint_en": "Inherit the 7-letter parent class Account and throw errors with the 5-letter raise keyword.",
      "templateCode": "class Account:\n    def __init__(self, owner, bal):\n        self.owner = owner\n        self.bal = bal\n\n    def __str__(self):\n        return f\"{self.owner}:{self.bal}\"\n\nclass BonusAccount(§§§§§§§):\n    def deposit(self, amt):\n        if amt <= 0:\n            §§§§§ ValueError(\"Bad\")\n        self.bal += amt + 10\n\nacc = BonusAccount(\"Min\", 100)\ntry:\n    acc.deposit(int(input()))\nexcept ValueError as e:\n    print(e)\nprint(acc)",
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
      "prompt_ko": "[틀린 곳 수정] Eagle 클래스가 Bird 대신 엉뚱한 Item 클래스를 상속받아 fly 호출이 실패하는 버그를 수정하세요.",
      "prompt_en": "[Fix Bug] Fix the parent class in class Eagle(...) so Eagle inherits from Bird instead of Item.",
      "hint_ko": "name 초기화와 fly() 메서드는 Bird 클래스에 정의되어 있으므로 Eagle(Bird)로 상속받아야 합니다.",
      "hint_en": "Change class Eagle(Item): to class Eagle(Bird): so Eagle inherits __init__ and fly().",
      "templateCode": "class Item:\n    pass\n\nclass Bird:\n    def __init__(self, name):\n        self.name = name\n\n    def fly(self):\n        return f\"{self.name} flies\"\n\nclass Eagle(Item):\n    def hunt(self):\n        return f\"{self.name} hunts\"\n\ne = Eagle(\"Sky\")\nprint(e.fly())\nprint(e.hunt())",
      "targetCode": "class Item:\n    pass\n\nclass Bird:\n    def __init__(self, name):\n        self.name = name\n\n    def fly(self):\n        return f\"{self.name} flies\"\n\nclass Eagle(Bird):\n    def hunt(self):\n        return f\"{self.name} hunts\"\n\ne = Eagle(\"Sky\")\nprint(e.fly())\nprint(e.hunt())",
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
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] Dog에서 부모의 sound() 메서드를 재정의하려다 다른 메서드 이름을 써서 \"...\"이 나오는 버그를 수정하세요.",
      "prompt_en": "[Fix Bug] Fix the method name in Dog so it overrides sound(self) and prints Woof.",
      "hint_ko": "메서드 재정의(Overriding)가 동작하려면 부모 클래스의 메서드 이름(sound)과 정확히 일치해야 합니다.",
      "hint_en": "Change def speak(self): to def sound(self): in Dog so it overrides Animal.sound.",
      "templateCode": "class Animal:\n    def sound(self):\n        return \"...\"\n\nclass Dog(Animal):\n    def speak(self):\n        return \"Woof\"\n\nd = Dog()\nprint(d.sound())",
      "targetCode": "class Animal:\n    def sound(self):\n        return \"...\"\n\nclass Dog(Animal):\n    def sound(self):\n        return \"Woof\"\n\nd = Dog()\nprint(d.sound())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Woof"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] Shape 클래스를 상속받는 자식 클래스 Square 선언부(class Square(Shape):) 한 줄을 완성하세요.",
      "prompt_en": "[Complete Line] Write the class header class Square(Shape): to inherit from Shape.",
      "hint_ko": "class Square(Shape): 형태로 부모 클래스를 괄호 안에 지정하세요.",
      "hint_en": "Write class Square(Shape): to declare Square as a subclass of Shape.",
      "templateCode": "class Shape:\n    def area(self):\n        return 0\n\n§§§§§§§§§§§§§§§§§§§§\n    def __init__(self, side):\n        self.side = side\n\n    def area(self):\n        return self.side ** 2\n\ns = Square(4)\nprint(isinstance(s, Shape), s.area())",
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
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] HalfTicket의 재정의된 pay 메서드에서 반값(return self.price // 2)을 반환하는 한 줄을 완성하세요.",
      "prompt_en": "[Complete Line] Write return self.price // 2 inside HalfTicket.pay.",
      "hint_ko": "return self.price // 2를 작성해 물려받은 가격 속성의 절반을 반환하세요.",
      "hint_en": "Write return self.price // 2 inside pay(self).",
      "templateCode": "class Ticket:\n    def __init__(self, price):\n        self.price = price\n\nclass HalfTicket(Ticket):\n    def pay(self):\n        §§§§§§§§§§§§§§§§§§§§§§\n\nt = HalfTicket(4000)\nprint(t.pay())",
      "targetCode": "class Ticket:\n    def __init__(self, price):\n        self.price = price\n\nclass HalfTicket(Ticket):\n    def pay(self):\n        return self.price // 2\n\nt = HalfTicket(4000)\nprint(t.pay())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2000"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] Coupon과 이를 상속받아 pay를 재정의한 HalfCoupon에 대해 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the polymorphism and isinstance check on Coupon and HalfCoupon.",
      "hint_ko": "부모 객체는 기본 차감식을, 자식 객체는 재정의된 반값 식을 각각 실행하며, 자식 클래스 인스턴스가 부모 클래스 타입 검사에서도 인정되는지 함께 따져보세요.",
      "hint_en": "Compare the parent's payment formula with the child's overridden formula, and remember how inheritance behaves when checking against the parent class.",
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
