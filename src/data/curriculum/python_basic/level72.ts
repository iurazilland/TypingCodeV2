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
      "prompt_ko": "[블록 조립] 강아지 클래스를 정의하고 인스턴스 객체를 생성해 기본 종족 속성을 출력해보세요.",
      "prompt_en": "[Block] Define the dog class, create an instance object, and print its species attribute.",
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
      "prompt_ko": "[빈칸 채우기] 고양이 클래스를 선언하여 인스턴스의 울음소리 속성을 출력해보세요.",
      "prompt_en": "[Fill Blank] Declare the class blueprint so the instance attribute can be accessed.",
      "hint_ko": "객체의 설계도를 정의할 때는 클래스 선언 키워드를 맨 앞에 적습니다.",
      "hint_en": "Start the definition with the keyword used to declare a blueprint for objects.",
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
      "prompt_ko": "[블록 조립] 빈 클래스의 인스턴스를 생성한 뒤 이름 속성을 부여하고 출력해보세요.",
      "prompt_en": "[Block] Create an instance of the empty class, assign a name attribute to it, and print the attribute.",
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
      "prompt_en": "[Fill Blank] Instantiate the class above, assign its name and age attributes, and print them.",
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
      "prompt_ko": "[블록 조립] 클래스 안에 짖기 메서드를 정의하고 생성한 인스턴스에서 호출해보세요.",
      "prompt_en": "[Block] Define a barking method inside the class and call it on an instance.",
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
      "prompt_en": "[Fill Blank] Fill in the required first parameter of the instance method.",
      "hint_ko": "인스턴스 메서드의 첫 번째 매개변수 자리에는 호출한 객체 자신을 뜻하는 표준 이름을 적습니다.",
      "hint_en": "Write the standard parameter name representing the calling instance itself.",
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
      "prompt_ko": "[블록 조립] 메서드 안에서 인스턴스의 이름 속성을 읽어 포맷 문자열로 인사말을 출력해보세요.",
      "prompt_en": "[Block] Read the instance's name attribute inside the method and print the greeting using an f-string.",
      "hint_ko": "메서드 내부에서는 첫 번째 매개변수 self 뒤에 점(.)을 찍어 해당 인스턴스의 속성에 접근합니다.",
      "hint_en": "Inside a method, access the current instance's attributes using self followed by a dot.",
      "targetCode": "class Dog:\n    def intro(self):\n        print(f\"Hi:{self.name}\")\nd = Dog()\nd.name = \"Coco\"\nd.intro()",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Hi:Coco"
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
      "prompt_ko": "[빈칸 채우기] 배지 클래스를 완성하고 입력받은 제목을 출력하도록 메서드를 호출해보세요.",
      "prompt_en": "[Fill Blank] Complete the badge class definition and call its display method.",
      "hint_ko": "클래스 선언 키워드(class)와 인스턴스 메서드 호출식(display())을 차례로 채우세요.",
      "hint_en": "Check the blueprint definition keyword, the instance self-reference inside the method, and the method call on the instance.",
      "templateCode": "§§§§§§ Badge:\n    def display(self):\n        print(f\"Badge:{self.title}\")\nb = Badge()\nb.title = input()\nb.§§§§§§§§§§",
      "targetCode": "class Badge:\n    def display(self):\n        print(f\"Badge:{self.title}\")\nb = Badge()\nb.title = input()\nb.display()",
      "testCases": [
        {
          "id": 1,
          "input": "VIP",
          "expectedOutput": "Badge:VIP"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 알람 객체의 메서드가 정상 호출되도록 메서드 선언부의 매개변수를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the method parameter inside the class so calling the method on the instance succeeds.",
      "hint_ko": "인스턴스 메서드의 첫 번째 매개변수에는 객체 자신을 받는 self를 선언해야 합니다.",
      "hint_en": "Python automatically passes the instance as the first argument when calling a method, so the parameter list must accept it.",
      "templateCode": "class Alarm:\n    def ring(None):\n        print(\"Wake up!\")\na = Alarm()\na.ring()",
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
      "prompt_ko": "[틀린 곳 수정] 램프 클래스의 인스턴스 객체를 올바르게 생성하도록 생성 문법을 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the instantiation syntax so a valid instance object is created.",
      "hint_ko": "클래스의 인스턴스 객체를 생성할 때는 클래스 이름 뒤에 소괄호 ()를 붙여야 합니다.",
      "hint_en": "Writing just the class name refers to the class itself; add parentheses to create an instance object.",
      "templateCode": "class Lamp:\n    power = 10\n    def turn_on(self):\n        print(f\"ON:{self.power * 2}W\")\nl = Lamp[]\nl.turn_on()",
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
      "prompt_ko": "[한 줄 완성] 위에서 정의한 기사 클래스의 인스턴스를 생성하여 아래에서 속성을 부여하는 변수에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the line that instantiates the class defined above and stores it in the variable used below.",
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
      "prompt_ko": "[한 줄 완성] 생성된 카운터 인스턴스의 결과 출력 메서드를 호출하는 마지막 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the final line that calls the reporting method on the counter instance.",
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
      "prompt_ko": "[출력 결과 예측] 인스턴스 속성을 변경하며 메서드를 두 번 호출한 다음 코드의 출력 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the output when calling calc() before and after updating an instance attribute.",
      "hint_ko": "첫 호출에서는 클래스의 기본 bonus(10)가 더해지고, 이후 sb.bonus를 50으로 변경한 뒤 다시 호출됩니다.",
      "hint_en": "The first call uses bonus = 10, and the second call runs after sb.bonus is updated to 50.",
      "targetCode": "class ScoreBox:\n    bonus = 10\n    def calc(self):\n        return self.base + self.bonus\nsb = ScoreBox()\nsb.base = 20\nprint(sb.calc())\nsb.bonus = 50\nprint(sb.calc())",
      "choices": [
        "20\n50",
        "30\n70",
        "30\n30",
        "10\n50"
      ],
      "correctChoiceIndex": 1,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "30\n70"
        }
      ]
    }
  ]
};
