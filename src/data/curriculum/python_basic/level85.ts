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
      "prompt_ko": "class 자식클래스(부모클래스): 형태로 상속을 선언하면, 부모 클래스의 __init__ 초기화와 메서드를 다시 작성하지 않고도 그대로 물려받아 사용할 수 있습니다.",
      "prompt_en": "Declaring class Child(Parent): inherits the parent's __init__ and methods automatically, while allowing the child class to add its own methods.",
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
      "prompt_ko": "빈칸에 부모 클래스 이름을 채워 Bike가 Vehicle의 초기화와 move 메서드를 상속받도록 완성하세요.",
      "prompt_en": "Fill in the parent class name so Bike inherits __init__ and move from Vehicle.",
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
      "prompt_ko": "부모 클래스에 있는 메서드와 똑같은 이름의 메서드를 자식 클래스에서 다시 작성하는 것을 메서드 재정의(Overriding)라고 하며, 자식 객체에서는 재정의된 메서드가 우선 실행됩니다.",
      "prompt_en": "Redefining a parent method with the same name in a child class is called method overriding, and child instances run the overridden version.",
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
      "prompt_ko": "두 빈칸을 채워 Member를 상속받은 VIPMember에서 문자열 표현 메서드를 재정의해 [VIP]Ara:500을 출력하세요.",
      "prompt_en": "Fill in both blanks so VIPMember inherits from Member and overrides __str__ to print [VIP]Ara:500.",
      "hint_ko": "첫 빈칸은 위에 정의된 부모 클래스 이름을 적고, 둘째 빈칸은 '문자열(string)' 앞 3글자 양옆에 밑줄 두 개씩 붙인 특별 메서드 이름을 적으세요.",
      "hint_en": "Inherit from the parent class defined above, and override the 7-character dunder method formed from 'string'.",
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
      "prompt_ko": "서로 다른 자식 클래스 객체들을 한 리스트에 담아 동일한 메서드(pet.speak())를 호출하면, 각 객체의 실제 클래스에 맞게 재정의된 메서드가 실행되는 다형성(Polymorphism)이 동작합니다.",
      "prompt_en": "Calling the same method (pet.speak()) across a list of different subclass instances invokes each object's own overridden method (polymorphism).",
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
      "prompt_ko": "두 빈칸을 채워 일반 배송(3000)을 상속받은 특급 배송(6000)의 요금 메서드를 재정의하고 총합 12000을 출력하세요.",
      "prompt_en": "Fill in both blanks so Express inherits Delivery, overrides fee(), and total fee sums to 12000.",
      "hint_ko": "소괄호 안에는 맨 위의 부모 클래스 이름을 적고, 아랫줄에서는 부모 클래스와 동일한 3글자 요금 메서드 이름을 재정의하세요.",
      "hint_en": "Place the parent class name defined at the top inside parentheses, and override the exact 3-letter method name called below.",
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
      "prompt_ko": "상속 관계에서 자식 클래스의 인스턴스는 isinstance()로 검사할 때 자식 클래스뿐 아니라 부모 클래스의 인스턴스로도 함께 인정되어 둘 다 True를 반환합니다.",
      "prompt_en": "In an inheritance hierarchy, isinstance() recognizes a subclass instance as an instance of both the child class and the parent class.",
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
      "prompt_ko": "두 빈칸을 채워 여러 값이 섞인 리스트 arr에서 Animal 계열 객체만 골라 이름을 쉼표로 출력하세요.",
      "prompt_en": "Fill in both blanks to filter only Animal instances (including Dog and Cat) and print Max,Luna.",
      "hint_ko": "'is'와 'instance'를 붙여 쓴 10글자 타입 확인 함수에 두 자식 클래스를 모두 포괄하는 맨 위 부모 클래스 이름을 넘기세요.",
      "hint_en": "Call the 10-letter 'is' + 'instance' function and pass the shared parent class defined at the top so both subclasses match.",
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
      "prompt_ko": "부모 클래스의 __init__과 __str__을 상속받아 재사용하면서, 자식 클래스에는 예외 검증(raise)과 방어력 경감(max(0, dmg - 5))이 적용된 전용 메서드를 추가할 수 있습니다. (터미널 입력: 15)",
      "prompt_en": "A subclass can reuse inherited __init__ and __str__ methods while adding its own validated method using raise and max(0, dmg - 5). (Terminal input: 15)",
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
      "prompt_ko": "세 빈칸을 채워 Account를 상속받고 입금 시 보너스 10을 더해주는 BonusAccount를 예외 처리와 함께 완성하세요. (터미널 입력: 50)",
      "prompt_en": "Fill in the three blanks so BonusAccount inherits Account, validates amt > 0, and adds +10 bonus. (Terminal input: 50)",
      "hint_ko": "위에 정의된 부모 클래스 이름을 상속받고, 0 이하 금액은 5글자 키워드로 예외를 '일으킨' 뒤 2글자 별칭 키워드로 변수 e에 받으세요.",
      "hint_en": "Inherit the parent class defined above, throw errors with the 5-letter 'lift up' keyword, and bind the exception to e with the 2-letter alias keyword.",
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
      "hint_ko": "하위 클래스 선언부에 부모 클래스가 연결되어 있지 않아 초기화와 메서드를 물려받지 못합니다. 클래스 이름 뒤 소괄호로 부모 클래스를 지정하세요.",
      "hint_en": "The subclass header is missing its parent class in parentheses, so it fails to inherit initialization and methods.",
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
      "hint_ko": "객체가 부모 클래스의 인스턴스인지 확인하는 타입 검사 결과와 객체의 넓이 메서드 반환값을 나란히 출력해보세요.",
      "hint_en": "Pass the parent-class runtime type check and the object's area method call together to the output function.",
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