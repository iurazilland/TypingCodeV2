import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_72: PracticeRound = {
  "id": "py-basic-r72",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 72,
  "title_ko": "72레벨: 클래스(class) 정의와 인스턴스 객체 생성 첫걸음",
  "title_en": "Level 72: Defining Classes (class) & Creating Instances",
  "description_ko": "class 키워드로 클래스(설계도)를 정의하고 인스턴스 객체를 생성해 속성과 self 메서드를 다루는 기초를 익힙니다.",
  "description_en": "Learn to define classes with class, instantiate objects, assign attributes, and write basic methods using self.",
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
      "prompt_ko": "[블록 조립] class Dog:를 정의하고 d = Dog()로 인스턴스를 생성해 기본 속성 species를 출력해보세요.",
      "prompt_en": "[Block] Define class Dog:, create an instance d = Dog(), and print its species attribute.",
      "hint_ko": "클래스 이름 뒤에 빈 소괄호 ()를 붙여 호출하면 설계도로부터 실제 객체(인스턴스)가 만들어집니다.",
      "hint_en": "Calling the class name with empty parentheses () creates an actual instance object from the class blueprint.",
      "targetCode": "class Dog:\n    species = \"Canine\"\nd = Dog()\nprint(d.species)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Canine"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 고양이 클래스를 선언하여 인스턴스의 울음소리 속성 Meow를 출력해보세요.",
      "prompt_en": "[Fill Blank] Declare the Cat blueprint so that printing the instance attribute outputs Meow.",
      "hint_ko": "객체의 설계도를 정의할 때는 다섯 글자 클래스 선언 키워드를 맨 앞에 적습니다.",
      "hint_en": "Start the definition with the five-letter keyword used to declare a blueprint for objects.",
      "templateCode": "§§§§§§ Cat:\n    sound = \"Meow\"\nc = Cat()\nprint(c.sound)",
      "targetCode": "class Cat:\n    sound = \"Meow\"\nc = Cat()\nprint(c.sound)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Meow"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 빈 Dog 클래스의 인스턴스 d에 d.name = \"Coco\" 속성을 부여하고 출력해보세요.",
      "prompt_en": "[Block] Create a Dog instance d, assign d.name = \"Coco\", and print d.name.",
      "hint_ko": "생성된 인스턴스 변수 뒤에 점(.)과 속성 이름을 적으면 해당 객체에 새로운 속성을 저장하거나 읽을 수 있습니다.",
      "hint_en": "Use a dot (.) after the instance variable name to assign or read an attribute on that object.",
      "targetCode": "class Dog:\n    pass\nd = Dog()\nd.name = \"Coco\"\nprint(d.name)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Coco"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 생성된 강아지 인스턴스에 이름과 나이 속성을 부여하고 나란히 출력해보세요.",
      "prompt_en": "[Fill Blank] Instantiate the Dog class, assign its name and age attributes, and print them.",
      "hint_ko": "설계도인 클래스로부터 실제 객체를 만들려면 클래스 이름 뒤에 빈 소괄호를 붙여 호출해야 합니다.",
      "hint_en": "Call the class name followed by empty parentheses to create a new instance object.",
      "templateCode": "class Dog:\n    pass\nd = §§§§§§\nd.name = \"Bori\"\nd.age = 3\nprint(d.name, d.age)",
      "targetCode": "class Dog:\n    pass\nd = Dog()\nd.name = \"Bori\"\nd.age = 3\nprint(d.name, d.age)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Bori 3"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 클래스 안에 def bark(self): 메서드를 정의하고 d.bark()로 호출해 Woof!를 출력해보세요.",
      "prompt_en": "[Block] Define a method def bark(self): inside Dog and call d.bark() to print Woof!.",
      "hint_ko": "클래스 내부에 정의하는 메서드는 항상 첫 번째 매개변수로 자기 자신을 가리키는 self를 받아야 합니다.",
      "hint_en": "Every instance method defined inside a class must take self as its first parameter.",
      "targetCode": "class Dog:\n    def bark(self):\n        print(\"Woof!\")\nd = Dog()\nd.bark()",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Woof!"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 로봇 클래스의 인사 메서드가 정상 동작하도록 첫 번째 매개변수를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the required first parameter of the instance method so r.greet() prints Beep!.",
      "hint_ko": "인스턴스 메서드의 첫 번째 매개변수 자리에는 호출한 객체 자신을 뜻하는 네 글자 표준 이름을 적습니다.",
      "hint_en": "Write the four-letter standard parameter name representing the calling instance itself.",
      "templateCode": "class Robot:\n    def greet(§§§§§):\n        print(\"Beep!\")\nr = Robot()\nr.greet()",
      "targetCode": "class Robot:\n    def greet(self):\n        print(\"Beep!\")\nr = Robot()\nr.greet()",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Beep!"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 메서드 안에서 self.name 속성을 읽어 f-string으로 \"Hi, Coco\"를 출력해보세요.",
      "prompt_en": "[Block] Read self.name inside the intro method and print \"Hi, Coco\" using an f-string.",
      "hint_ko": "메서드 내부에서는 첫 번째 매개변수 self 뒤에 점(.)을 찍어 해당 인스턴스의 속성에 접근합니다.",
      "hint_en": "Inside a method, access the current instance's attributes using self followed by a dot.",
      "targetCode": "class Dog:\n    def intro(self):\n        print(f\"Hi, {self.name}\")\nd = Dog()\nd.name = \"Coco\"\nd.intro()",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Hi, Coco"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 플레이어 객체의 이름과 레벨이 f-string으로 출력되도록 메서드 내부의 속성 접근자를 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the attribute access inside show() so it prints the player's name and level.",
      "hint_ko": "메서드 안에서 현재 인스턴스 자신의 속성을 읽을 때는 첫 번째 매개변수 이름 뒤에 점을 붙여 참조합니다.",
      "hint_en": "Reference the current instance inside the method using its first parameter before the dot.",
      "templateCode": "class Player:\n    lv = 1\n    def show(self):\n        print(f\"{§§§§§.id}:Lv.{self.lv}\")\np = Player()\np.id = \"Ace\"\np.show()",
      "targetCode": "class Player:\n    lv = 1\n    def show(self):\n        print(f\"{self.id}:Lv.{self.lv}\")\np = Player()\np.id = \"Ace\"\np.show()",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Ace:Lv.1"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 배지 클래스를 선언하고, 자기 자신의 제목 속성을 대괄호 서식으로 출력하는 메서드를 완성한 뒤 호출해보세요.",
      "prompt_en": "[Fill Blank] Complete the blueprint declaration, the instance attribute access in display(), and the method call.",
      "hint_ko": "설계도 선언 키워드, 메서드 내부에서 객체 자신을 가리키는 참조 변수, 그리고 인스턴스 메서드 호출식을 차례로 확인하세요.",
      "hint_en": "Check the blueprint definition keyword, the instance self-reference inside the method, and the method call on the instance.",
      "templateCode": "§§§§§§ Badge:\n    def display(self):\n        print(f\"[{§§§§§.title}]\")\nb = Badge()\nb.title = input()\nb.§§§§§§§§§§",
      "targetCode": "class Badge:\n    def display(self):\n        print(f\"[{self.title}]\")\nb = Badge()\nb.title = input()\nb.display()",
      "testCases": [
        {
          "id": 1,
          "input": "VIP",
          "expectedOutput": "[VIP]"
        },
        {
          "id": 2,
          "input": "GOLD",
          "expectedOutput": "[GOLD]"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 클래스 내부 메서드를 호출했을 때 매개변수 개수가 맞지 않아 발생하는 에러를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the method definition inside Alarm so calling a.ring() does not raise a TypeError.",
      "hint_ko": "인스턴스를 통해 메서드를 호출하면 파이썬이 객체 자신을 첫 번째 인자로 자동 전달하므로 매개변수 선언이 필요합니다.",
      "hint_en": "Python automatically passes the instance as the first argument when calling a method, so the parameter list must accept it.",
      "templateCode": "class Alarm:\n    def ring():\n        print(\"Wake up!\")\na = Alarm()\na.ring()",
      "targetCode": "class Alarm:\n    def ring(self):\n        print(\"Wake up!\")\na = Alarm()\na.ring()",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Wake up!"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 클래스로부터 실제 인스턴스를 생성하지 않고 설계도 자체를 대입해 메서드가 실행되지 않는 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the bug where Lamp is assigned without instantiation so l.turn_on() works properly.",
      "hint_ko": "클래스 이름만 적으면 설계도 자체를 가리키므로, 실제 인스턴스 객체를 생성하려면 호출 괄호가 있어야 합니다.",
      "hint_en": "Writing just the class name refers to the class itself; add parentheses to create an instance object.",
      "templateCode": "class Lamp:\n    power = 10\n    def turn_on(self):\n        print(f\"ON:{self.power * 2}W\")\nl = Lamp\nl.turn_on()",
      "targetCode": "class Lamp:\n    power = 10\n    def turn_on(self):\n        print(f\"ON:{self.power * 2}W\")\nl = Lamp()\nl.turn_on()",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "ON:20W"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] Knight 클래스의 인스턴스를 생성해 변수 k에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the line that creates an instance of Knight and assigns it to variable k.",
      "hint_ko": "변수 이름 오른쪽에 대입 연산자와 클래스 호출식을 적어 새로운 인스턴스를 만드세요.",
      "hint_en": "Assign the result of calling the class with empty parentheses to variable k.",
      "templateCode": "class Knight:\n    rank = \"S\"\n§§§§§§§§§§§§§\nk.name = \"Arthur\"\nprint(f\"{k.name}-{k.rank}\")",
      "targetCode": "class Knight:\n    rank = \"S\"\nk = Knight()\nk.name = \"Arthur\"\nprint(f\"{k.name}-{k.rank}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Arthur-S"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 생성된 카운터 인스턴스 c의 report 메서드를 호출하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the line that calls the report method on instance c.",
      "hint_ko": "인스턴스 변수 뒤에 점(.)을 찍고 메서드 이름과 빈 소괄호를 붙여 실행하세요.",
      "hint_en": "Use dot notation on instance c followed by the method name and empty parentheses.",
      "templateCode": "class Counter:\n    step = 5\n    def report(self):\n        print(self.count * self.step)\nc = Counter()\nc.count = 4\n§§§§§§§§§§§",
      "targetCode": "class Counter:\n    step = 5\n    def report(self):\n        print(self.count * self.step)\nc = Counter()\nc.count = 4\nc.report()",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "20"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 두 개의 객체에 각각 다른 속성값을 대입하고 메서드를 호출했을 때의 출력 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the output when two instances receive different attribute values and call tag().",
      "hint_ko": "각 인스턴스의 self는 메서드를 호출한 바로 그 객체 자신을 가리키므로 서로의 속성이 섞이지 않습니다.",
      "hint_en": "Each instance's self refers to the specific object on which the method was called.",
      "targetCode": "class Note:\n    prefix = \"#\"\n    def tag(self):\n        print(f\"{self.prefix}{self.word}\")\na = Note()\nb = Note()\na.word = \"Py\"\nb.word = \"Code\"\nb.prefix = \"@\"\na.tag()\nb.tag()",
      "choices": [
        "#Py\n@Code",
        "@Py\n@Code",
        "#Py\n#Code",
        "#Code\n@Py"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "#Py\n@Code"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 반복문과 조건문, 인스턴스 속성 연산이 결합된 다음 코드의 출력 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the output of the code combining a loop, conditional check, and instance attribute updates.",
      "hint_ko": "리스트를 순회하며 짝수일 때만 객체의 보너스 배율 속성이 곱해져 누적되는 과정을 추적해보세요.",
      "hint_en": "Trace which numbers in the list are even and multiply them by the instance's rate attribute before adding.",
      "targetCode": "class ScoreBox:\n    rate = 2\n    def calc(self):\n        return self.base + self.bonus\nsb = ScoreBox()\nsb.base = 10\nsb.bonus = 0\nfor n in [3, 4, 5, 6]:\n    if n % 2 == 0:\n        sb.bonus += n * sb.rate\nprint(sb.calc())",
      "choices": [
        "20",
        "30",
        "46",
        "28"
      ],
      "correctChoiceIndex": 1,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "30"
        }
      ]
    }
  ]
};
