import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_108: PracticeRound = {
  "id": "py-basic-r108",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 108,
  "title_ko": "객체 문자열 표현(__str__)과 매직 메서드 기초",
  "title_en": "Object String Representation (__str__) & Magic Methods",
  "description_ko": "객체를 print(obj)나 str(obj)에 전달했을 때 보기 좋은 문자열을 반환하는 __str__ 매직 메서드를 정의하고 컬렉션과 결합합니다.",
  "description_en": "Define the __str__ magic method to return clean string representations of objects for print(), str(), and .join().",
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
      "prompt_ko": "[블록 조립] Hero 클래스에 def __str__(self): 매직 메서드를 정의해 print(hero)로 \"Aria(100)\"을 출력해보세요.",
      "prompt_en": "[Block] Define def __str__(self): on Hero so print(hero) automatically displays \"Aria(100)\".",
      "hint_ko": "__str__ 메서드 안에서는 print()를 쓰지 않고 반드시 문자열을 return으로 반환해야 합니다.",
      "hint_en": "Inside __str__, always return a string rather than calling print().",
      "targetCode": "class Hero:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def __str__(self):\n        return f\"{self.name}({self.hp})\"\n\nhero = Hero(\"Aria\", 100)\nprint(hero)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Aria(100)"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] Badge 객체 b를 그대로 print(b)에 넣었을 때 문자열이 출력되도록 매직 메서드 이름을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the magic method name so printing Badge instance b outputs \"[Gold] Min\".",
      "hint_ko": "문자열(str) 양옆에 밑줄 두 개씩을 붙인 일곱 글자 매직 메서드 이름을 적으세요.",
      "hint_en": "Write the 7-character dunder method name formed by surrounding str with double underscores.",
      "targetCode": "class Badge:\n    def __init__(self, owner, grade):\n        self.owner = owner\n        self.grade = grade\n\n    def __str__(self):\n        return f\"[{self.grade}] {self.owner}\"\n\nb = Badge(\"Min\", \"Gold\")\nprint(b)",
      "templateCode": "class Badge:\n    def __init__(self, owner, grade):\n        self.owner = owner\n        self.grade = grade\n\n    def §§§§§§§§(self):\n        return f\"[{self.grade}] {self.owner}\"\n\nb = Badge(\"Min\", \"Gold\")\nprint(b)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[Gold] Min"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] __str__ 메서드 안에서 객체의 리스트 속성 self.scores의 개수와 총합을 포맷팅해 반환해보세요.",
      "prompt_en": "[Block] Format len(self.scores) and sum(self.scores) inside Student.__str__ and print the student object.",
      "hint_ko": "self.scores가 리스트이므로 __str__ 안에서 len()과 sum()으로 즉시 집계해 문자열로 반환할 수 있습니다.",
      "hint_en": "Inside __str__, you can call len(self.scores) and sum(self.scores) inside the returned f-string.",
      "targetCode": "class Student:\n    def __init__(self, name, scores):\n        self.name = name\n        self.scores = scores\n\n    def __str__(self):\n        return f\"{self.name}: {len(self.scores)}과목 총점 {sum(self.scores)}\"\n\ns = Student(\"Kim\", [80, 90, 85])\nprint(s)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Kim: 3과목 총점 255"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 장바구니 객체의 __str__ 메서드 안에서 담긴 상품 리스트(self.items)의 개수를 반환하도록 내장 함수를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the built-in function inside __str__ to format the number of items in self.items.",
      "hint_ko": "리스트의 길이를 구하는 세 글자 내장 함수를 중괄호 안에 적으세요.",
      "hint_en": "Enter the 3-letter built-in function that returns the length of a list.",
      "targetCode": "class Cart:\n    def __init__(self):\n        self.items = [\"pen\", \"book\"]\n\n    def __str__(self):\n        return f\"Cart({len(self.items)})\"\n\nc = Cart()\nprint(c)",
      "templateCode": "class Cart:\n    def __init__(self):\n        self.items = [\"pen\", \"book\"]\n\n    def __str__(self):\n        return f\"Cart({§§§§(self.items)})\"\n\nc = Cart()\nprint(c)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Cart(2)"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 여러 Item 객체를 리스트에 담아 for 반복문으로 순회하며 print(item)으로 각각 출력해보세요.",
      "prompt_en": "[Block] Store multiple Item objects in a list and print each one in a for loop.",
      "hint_ko": "반복문 안에서 print(item)을 실행할 때마다 각 객체의 __str__ 메서드가 자동으로 호출됩니다.",
      "hint_en": "Each print(item) call in the loop automatically invokes item.__str__().",
      "targetCode": "class Item:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\n    def __str__(self):\n        return f\"{self.name}:{self.price:,}\"\n\nitems = [Item(\"Book\", 12000), Item(\"Pen\", 1500)]\nfor item in items:\n    print(item)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Book:12,000\nPen:1,500"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] Point 객체를 문자열로 변환하는 내장 함수를 호출해 변수 text에 저장하고 출력해보세요.",
      "prompt_en": "[Fill Blank] Call the built-in conversion function on Point instance p to store its formatted text.",
      "hint_ko": "객체의 __str__을 호출해 문자열로 바꾸는 세 글자 형변환 함수를 적으세요.",
      "hint_en": "Write the 3-letter built-in function that converts an object into a string.",
      "targetCode": "class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n    def __str__(self):\n        return f\"({self.x},{self.y})\"\n\np = Point(3, 7)\ntext = str(p)\nprint(f\"Pos:{text}\")",
      "templateCode": "class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n    def __str__(self):\n        return f\"({self.x},{self.y})\"\n\np = Point(3, 7)\ntext = §§§§(p)\nprint(f\"Pos:{text}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Pos:(3,7)"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 객체 리스트 objs의 각 객체를 [str(x) for x in objs]로 문자열화한 뒤 \", \".join()으로 한 줄에 출력해보세요.",
      "prompt_en": "[Block] Convert each object in objs with [str(x) for x in objs] and combine them on one line with \", \".join().",
      "hint_ko": ".join()은 문자열만 받을 수 있으므로 컴프리헨션 안에서 str(x)를 호출해 각 객체의 __str__ 문자열을 꺼냅니다.",
      "hint_en": "Call str(x) inside the list comprehension so .join() receives the string returned by each object's __str__.",
      "targetCode": "class Tag:\n    def __init__(self, label):\n        self.label = label\n\n    def __str__(self):\n        return f\"#{self.label}\"\n\nobjs = [Tag(\"py\"), Tag(\"ai\"), Tag(\"web\")]\nprint(\", \".join([str(x) for x in objs]))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "#py, #ai, #web"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 객체 리스트를 문자열 리스트로 변환한 뒤 슬래시(\" / \")로 하나로 합쳐 출력하도록 결합 메서드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the string combining method to concatenate the converted object strings with \" / \".",
      "hint_ko": "구분자 문자열 뒤에서 리스트 요소들을 이어 붙이는 네 글자 메서드를 입력하세요.",
      "hint_en": "Enter the 4-letter string method that concatenates a list of strings.",
      "targetCode": "class User:\n    def __init__(self, name):\n        self.name = name\n\n    def __str__(self):\n        return f\"@{self.name}\"\n\nus = [User(\"kim\"), User(\"lee\")]\nprint(\" / \".join([str(u) for u in us]))",
      "templateCode": "class User:\n    def __init__(self, name):\n        self.name = name\n\n    def __str__(self):\n        return f\"@{self.name}\"\n\nus = [User(\"kim\"), User(\"lee\")]\nprint(\" / \".§§§§§([str(u) for u in us]))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "@kim / @lee"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 생성자와 문자열 표현 매직 메서드를 완성해 객체 리스트를 쉼표로 연결해 출력해보세요.",
      "prompt_en": "[Fill Blank] Complete the initializer, the string representation magic method, and the output keyword.",
      "hint_ko": "생성자 매직 메서드, 문자열 표현 매직 메서드, 그리고 값 반환 키워드를 차례로 채워보세요.",
      "hint_en": "Supply the initializer dunder name, the string representation dunder name, and the return keyword.",
      "targetCode": "class Coin:\n    def __init__(self, sym, val):\n        self.sym = sym\n        self.val = val\n\n    def __str__(self):\n        return f\"{self.sym}:{self.val}\"\n\ncs = [Coin(\"BTC\", 90), Coin(\"ETH\", 30)]\nprint(\",\".join([str(c) for c in cs]))",
      "templateCode": "class Coin:\n    def §§§§§§§§§(self, sym, val):\n        self.sym = sym\n        self.val = val\n\n    def §§§§§§§§(self):\n        §§§§§§§ f\"{self.sym}:{self.val}\"\n\ncs = [Coin(\"BTC\", 90), Coin(\"ETH\", 30)]\nprint(\",\".join([str(c) for c in cs]))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "BTC:90,ETH:30"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] __str__ 메서드 안에서 문자열을 반환하지 않고 출력 함수를 써서 발생한 TypeError를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the TypeError (__str__ returned non-string) caused by calling print() instead of returning a string.",
      "hint_ko": "__str__ 메서드는 반드시 문자열을 return 문으로 반환해야 합니다.",
      "hint_en": "Replace print(...) with return ... inside __str__(self).",
      "templateCode": "class Box:\n    def __init__(self, w):\n        self.w = w\n\n    def __str__(self):\n        print(f\"Box({self.w}kg)\")\n\nb = Box(5)\nprint(b)",
      "targetCode": "class Box:\n    def __init__(self, w):\n        self.w = w\n\n    def __str__(self):\n        return f\"Box({self.w}kg)\"\n\nb = Box(5)\nprint(b)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Box(5kg)"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 객체 t를 print(t)로 출력할 때 문자열 표현이 호출되도록 잘못된 매직 메서드 이름을 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the wrong magic method name so print(t) displays the formatted ticket string.",
      "hint_ko": "객체를 문자열로 표현할 때 자동 호출되는 매직 메서드는 __len__이 아니라 __str__입니다.",
      "hint_en": "Change def __len__(self): to def __str__(self):.",
      "templateCode": "class Ticket:\n    def __init__(self, title, seats):\n        self.title = title\n        self.seats = seats\n\n    def __len__(self):\n        return f\"{self.title}({self.seats})\"\n\nt = Ticket(\"Jazz\", 4)\nprint(t)",
      "targetCode": "class Ticket:\n    def __init__(self, title, seats):\n        self.title = title\n        self.seats = seats\n\n    def __str__(self):\n        return f\"{self.title}({self.seats})\"\n\nt = Ticket(\"Jazz\", 4)\nprint(t)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Jazz(4)"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 객체를 문자열로 표현하는 매직 메서드 선언부(def __str__(self):) 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the method header def __str__(self): inside the Note class.",
      "hint_ko": "들여쓰기 4칸 뒤에 def __str__(self):를 콜론까지 정확히 작성하세요.",
      "hint_en": "Write def __str__(self): at the 4-space indented line.",
      "targetCode": "class Note:\n    def __init__(self, msg):\n        self.msg = msg\n\n    def __str__(self):\n        return f\"[{self.msg}]\"\n\nprint(Note(\"Todo\"))",
      "templateCode": "class Note:\n    def __init__(self, msg):\n        self.msg = msg\n\n    §§§§§§§§§§§§§§§§§§§\n        return f\"[{self.msg}]\"\n\nprint(Note(\"Todo\"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[Todo]"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] __str__ 메서드 안에서 f\"{self.title}({self.pages}p)\"를 반환하는 return 문을 작성해보세요.",
      "prompt_en": "[Complete Line] Write return f\"{self.title}({self.pages}p)\" inside Book.__str__.",
      "hint_ko": "들여쓰기 8칸 뒤에 return f\"{self.title}({self.pages}p)\"를 작성하세요.",
      "hint_en": "Write return f\"{self.title}({self.pages}p)\" inside __str__.",
      "targetCode": "class Book:\n    def __init__(self, title, pages):\n        self.title = title\n        self.pages = pages\n\n    def __str__(self):\n        return f\"{self.title}({self.pages}p)\"\n\nb = Book(\"Python\", 320)\nprint(b)",
      "templateCode": "class Book:\n    def __init__(self, title, pages):\n        self.title = title\n        self.pages = pages\n\n    def __str__(self):\n        §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\n\nb = Book(\"Python\", 320)\nprint(b)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Python(320p)"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 객체의 상태를 변경한 뒤 print()와 f-string으로 객체를 출력한 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output after mutating the Counter object and printing it.",
      "hint_ko": "초기값 10에서 5를 더하고 3을 뺀 뒤 f-string 안에서 __str__이 반환하는 문자열을 확인하세요.",
      "hint_en": "Start at 10, add 5, subtract 3 (leaving 12), and embed c's __str__ format inside the f-string.",
      "targetCode": "class Counter:\n    def __init__(self, val):\n        self.val = val\n\n    def add(self, n):\n        self.val += n\n\n    def __str__(self):\n        return f\"<{self.val:03d}>\"\n\nc = Counter(10)\nc.add(5)\nc.add(-3)\nprint(f\"Result={c}\")",
      "choices": [
        "Result=<012>",
        "Result=<12>",
        "Result=<015>",
        "Result=12"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Result=<012>"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 리스트 속성을 가진 객체들의 __str__과 리스트 컴프리헨션, .join()이 결합된 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of joining the string representations of Team objects.",
      "hint_ko": "각 팀 객체의 __str__은 팀 이름을 대문자로 바꾸고 멤버들의 점수를 합산해 반환합니다.",
      "hint_en": "Each Team's __str__ uppercases the team name and sums its pts list before \" | \".join() combines them.",
      "targetCode": "class Team:\n    def __init__(self, name, pts):\n        self.name = name\n        self.pts = pts\n\n    def __str__(self):\n        return f\"{self.name.upper()}:{sum(self.pts)}\"\n\nts = [Team(\"red\", [10, 20]), Team(\"blue\", [15, 25, 5])]\nprint(\" | \".join([str(t) for t in ts]))",
      "choices": [
        "RED:30 | BLUE:45",
        "red:30 | blue:45",
        "RED:2 | BLUE:3",
        "RED:30, BLUE:45"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "RED:30 | BLUE:45"
        }
      ]
    }
  ]
};
