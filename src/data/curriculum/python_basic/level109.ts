import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_109: PracticeRound = {
  "id": "py-basic-r109",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 109,
  "title_ko": "클래스 상속(class Child(Parent):), 메서드 오버라이딩과 super().__init__()",
  "title_en": "Class Inheritance, Method Overriding & super().__init__()",
  "description_ko": "부모 클래스를 물려받는 상속(class Child(Parent):), 메서드를 재정의하는 오버라이딩, 부모 생성자를 호출하는 super().__init__()을 익힙니다.",
  "description_en": "Learn class inheritance, method overriding, calling parent initializers with super().__init__(), and isinstance() checks.",
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
    "sorted",
    "math",
    "map",
    "def",
    "return",
    "class",
    "try"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 부모 클래스 Animal을 상속받는 자식 클래스 Dog를 정의하고, 물려받은 메서드와 자식 전용 메서드를 차례로 호출해보세요.",
      "prompt_en": "[Block] Define Dog inheriting from Animal and call both the inherited eat() method and Dog's bark() method.",
      "hint_ko": "클래스 이름 뒤 괄호 안에 부모 클래스 이름을 적으면 부모의 __init__과 메서드를 그대로 물려받습니다.",
      "hint_en": "Putting the parent class name in parentheses lets the child class inherit __init__ and all parent methods.",
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
      "prompt_ko": "[빈칸 채우기] 자식 클래스 Bike가 위에 정의된 부모 클래스의 생성자와 move 메서드를 물려받도록 괄호 안을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the parent class name inside the parentheses so Bike inherits from the base class above.",
      "hint_ko": "맨 위에 정의된 부모 클래스 이름을 그대로 적으세요.",
      "hint_en": "Enter the parent class name defined at the top.",
      "targetCode": "class Vehicle:\n    def __init__(self, model):\n        self.model = model\n\n    def move(self):\n        return f\"{self.model} moves\"\n\nclass Bike(Vehicle):\n    def ring(self):\n        return \"Ring!\"\n\nb = Bike(\"Road\")\nprint(b.move(), b.ring())",
      "templateCode": "class Vehicle:\n    def __init__(self, model):\n        self.model = model\n\n    def move(self):\n        return f\"{self.model} moves\"\n\nclass Bike(§§§§§§§§):\n    def ring(self):\n        return \"Ring!\"\n\nb = Bike(\"Road\")\nprint(b.move(), b.ring())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Road moves Ring!"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] Animal을 상속받은 Cat에서 부모의 울음소리 메서드를 새로 재정의(오버라이딩)해 호출해보세요.",
      "prompt_en": "[Block] Override the parent class's sound method in Cat and print the result of calling it.",
      "hint_ko": "자식 클래스에서 부모 메서드와 똑같은 이름으로 메서드를 다시 정의하면 자식 메서드가 우선 실행됩니다.",
      "hint_en": "Defining a method with the same name in the child class overrides the parent's version.",
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
      "prompt_ko": "[빈칸 채우기] Delivery를 상속받은 Express에서 요금 메서드를 6000원으로 오버라이딩하도록 메서드 이름을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the method name in Express to override the parent's pricing method.",
      "hint_ko": "부모 클래스에 정의된 메서드 이름과 똑같이 적어야 오버라이딩됩니다.",
      "hint_en": "Use the exact same method name defined in the parent class.",
      "targetCode": "class Delivery:\n    def fee(self):\n        return 3000\n\nclass Express(Delivery):\n    def fee(self):\n        return 6000\n\nd = Express()\nprint(d.fee())",
      "templateCode": "class Delivery:\n    def fee(self):\n        return 3000\n\nclass Express(Delivery):\n    def §§§§(self):\n        return 6000\n\nd = Express()\nprint(d.fee())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "6000"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 자식 클래스 Wizard의 생성자에서 부모 생성자를 호출해 이름을 초기화하고, 자식 전용 속성 lv를 추가로 저장해보세요.",
      "prompt_en": "[Block] In Wizard's initializer, delegate name initialization to the parent class and store the additional attribute lv.",
      "hint_ko": "super().__init__(name)을 호출하면 부모 클래스의 self.name 초기화 코드를 중복 작성하지 않아도 됩니다.",
      "hint_en": "Calling super().__init__(name) delegates initializing self.name to the parent class.",
      "targetCode": "class Unit:\n    def __init__(self, name):\n        self.name = name\n\nclass Wizard(Unit):\n    def __init__(self, name, lv):\n        super().__init__(name)\n        self.lv = lv\n\nw = Wizard(\"Merlin\", 10)\nprint(w.name, w.lv)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Merlin 10"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 자식 생성자 안에서 부모 클래스를 가리키는 내장 함수를 호출해 부모의 __init__을 실행해보세요.",
      "prompt_en": "[Fill Blank] Fill in the built-in call that references the parent class so its __init__(name) runs.",
      "hint_ko": "부모 클래스를 가리키는 super 뒤에 빈 괄호 ()를 붙여 super()를 적으세요.",
      "hint_en": "Write the built-in name followed by empty parentheses (7 characters total).",
      "targetCode": "class Member:\n    def __init__(self, name):\n        self.name = name\n\nclass VIP(Member):\n    def __init__(self, name, bonus):\n        super().__init__(name)\n        self.bonus = bonus\n\nv = VIP(\"Ara\", 500)\nprint(v.name, v.bonus)",
      "templateCode": "class Member:\n    def __init__(self, name):\n        self.name = name\n\nclass VIP(Member):\n    def __init__(self, name, bonus):\n        §§§§§§§§.__init__(name)\n        self.bonus = bonus\n\nv = VIP(\"Ara\", 500)\nprint(v.name, v.bonus)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Ara 500"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 자식 객체 d가 Dog 클래스의 인스턴스인지와 부모 Animal 클래스의 인스턴스인지를 각각 확인해 나란히 출력해보세요.",
      "prompt_en": "[Block] Check and print whether the Dog instance d is an instance of Dog and also an instance of its parent class Animal.",
      "hint_ko": "상속 관계에서 자식 클래스의 인스턴스는 부모 클래스의 인스턴스로도 인정되어 둘 다 True가 됩니다.",
      "hint_en": "An instance of a subclass is also considered an instance of its parent class, so both return True.",
      "targetCode": "class Animal:\n    pass\n\nclass Dog(Animal):\n    pass\n\nd = Dog()\nprint(isinstance(d, Dog), isinstance(d, Animal))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True True"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 자식 객체 c가 부모 클래스 Animal의 인스턴스인지 판별하도록 내장 함수를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the built-in function to check whether Cat instance c belongs to the parent class Animal.",
      "hint_ko": "객체가 해당 클래스(또는 부모 클래스)의 인스턴스인지 확인하는 내장 함수를 적으세요.",
      "hint_en": "Enter the built-in function that checks class membership.",
      "targetCode": "class Animal:\n    pass\n\nclass Cat(Animal):\n    pass\n\nc = Cat()\nprint(isinstance(c, Animal))",
      "templateCode": "class Animal:\n    pass\n\nclass Cat(Animal):\n    pass\n\nc = Cat()\nprint(§§§§§§§§§§§(c, Animal))",
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
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 부모 클래스를 상속받아 상품명과 가격을 초기화하고 할인가를 출력하도록 SaleItem 클래스의 빈칸 2곳을 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the two blanks in SaleItem to inherit from the base item class and delegate name and price initialization to the parent.",
      "hint_ko": "상속받을 부모 클래스 이름(Item)과 부모 참조 호출(super())을 차례로 채워보세요.",
      "hint_en": "Supply the parent class name, the parent proxy call with parentheses, and the string dunder method.",
      "targetCode": "class Item:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\nclass SaleItem(Item):\n    def __init__(self, name, price, disc):\n        super().__init__(name, price)\n        self.disc = disc\n\n    def __str__(self):\n        return f\"{self.name}:{self.price - self.disc}\"\n\nprint(SaleItem(\"Book\", 10000, 1500))",
      "templateCode": "class Item:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\nclass SaleItem(§§§§§):\n    def __init__(self, name, price, disc):\n        §§§§§§§§.__init__(name, price)\n        self.disc = disc\n\n    def __str__(self):\n        return f\"{self.name}:{self.price - self.disc}\"\n\nprint(SaleItem(\"Book\", 10000, 1500))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Book:8500"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 자식 클래스 Admin의 생성자에서 부모 생성자가 정상 호출되도록 문법 오류를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Find and fix the syntax error in Admin's initializer so the parent initializer runs properly.",
      "hint_ko": "super는 함수처럼 소괄호를 붙여 super().__init__(name) 형태로 호출해야 합니다.",
      "hint_en": "Add parentheses after super so it reads super().__init__(name).",
      "templateCode": "class User:\n    def __init__(self, name):\n        self.name = name\n\nclass Admin(User):\n    def __init__(self, name, lv):\n        super[].__init__(name)\n        self.lv = lv\n\na = Admin(\"Root\", 9)\nprint(a.name, a.lv)",
      "targetCode": "class User:\n    def __init__(self, name):\n        self.name = name\n\nclass Admin(User):\n    def __init__(self, name, lv):\n        super().__init__(name)\n        self.lv = lv\n\na = Admin(\"Root\", 9)\nprint(a.name, a.lv)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Root 9"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 자식 클래스 Dog가 부모 클래스의 메서드를 올바르게 오버라이딩하도록 메서드 이름의 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the method name in Dog so it properly overrides Animal's sound method.",
      "hint_ko": "오버라이딩이 동작하려면 부모 클래스의 메서드 이름(sound)과 정확히 일치해야 합니다.",
      "hint_en": "Change def speak(self): to def sound(self): in Dog.",
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
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 부모 클래스 Shape를 상속받는 자식 클래스 Square의 선언부(헤더) 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the class header for Square so that it inherits from Shape.",
      "hint_ko": "class Square(Shape): 형태로 괄호 안에 부모 클래스를 지정하세요.",
      "hint_en": "Write class Square(Shape): on the masked line.",
      "targetCode": "class Shape:\n    def area(self):\n        return 0\n\nclass Square(Shape):\n    def __init__(self, side):\n        self.side = side\n\n    def area(self):\n        return self.side ** 2\n\ns = Square(4)\nprint(isinstance(s, Shape), s.area())",
      "templateCode": "class Shape:\n    def area(self):\n        return 0\n\n§§§§§§§§§§§§§§§§§§§§§\n    def __init__(self, side):\n        self.side = side\n\n    def area(self):\n        return self.side ** 2\n\ns = Square(4)\nprint(isinstance(s, Shape), s.area())",
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
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 자식 클래스 생성자 안에서 부모 클래스의 생성자에 name을 전달해 호출하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Call the parent class initializer with name inside the child class initializer.",
      "hint_ko": "들여쓰기 8칸 뒤에 super().__init__(name)을 작성하세요.",
      "hint_en": "Write super().__init__(name) at the indented line.",
      "targetCode": "class Person:\n    def __init__(self, name):\n        self.name = name\n\nclass Player(Person):\n    def __init__(self, name, score):\n        super().__init__(name)\n        self.score = score\n\np = Player(\"Kim\", 95)\nprint(p.name, p.score)",
      "templateCode": "class Person:\n    def __init__(self, name):\n        self.name = name\n\nclass Player(Person):\n    def __init__(self, name, score):\n        §§§§§§§§§§§§§§§§§§§§§§§\n        self.score = score\n\np = Player(\"Kim\", 95)\nprint(p.name, p.score)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Kim 95"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 부모 클래스와 오버라이딩한 자식 클래스의 메서드 호출 및 isinstance 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of calling pay() on Coupon and HalfCoupon along with isinstance.",
      "hint_ko": "부모 객체는 5000 - 1000을, 자식 객체는 5000 // 2를 반환하며, 자식 객체도 부모 클래스의 인스턴스입니다.",
      "hint_en": "Coupon(5000).pay() is 4000, HalfCoupon(5000).pay() is 2500, and isinstance(items[1], Coupon) is True.",
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
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] super().__init__()과 __str__ 오버라이딩이 결합된 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the code combining super().__init__() and __str__.",
      "hint_ko": "Boss 생성자는 부모의 hp(100)에 50을 더한 값을 넘겨 초기화하고, 오버라이딩된 __str__로 출력합니다.",
      "hint_en": "Boss passes hp + 50 (150) to super().__init__ and formats the string with its own __str__.",
      "targetCode": "class Monster:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def __str__(self):\n        return f\"{self.name}:{self.hp}\"\n\nclass Boss(Monster):\n    def __init__(self, name, hp, shield):\n        super().__init__(name, hp + 50)\n        self.shield = shield\n\n    def __str__(self):\n        return f\"{self.name}:{self.hp}+{self.shield}\"\n\nb = Boss(\"Dragon\", 100, 30)\nprint(b)",
      "choices": [
        "Dragon:150+30",
        "Dragon:100+30",
        "Dragon:150",
        "Dragon:180"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Dragon:150+30"
        }
      ]
    }
  ]
};
