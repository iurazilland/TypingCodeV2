import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_112: PracticeRound = {
  "id": "py-basic-r112",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 112,
  "title_ko": "객체 리스트와 컴프리헨션·lambda 정렬·예외 통합 실습",
  "title_en": "Object Lists with Comprehensions, lambda Sort & Exceptions",
  "description_ko": "클래스 인스턴스 리스트를 컴프리헨션으로 집계·필터링하고, sorted(key=lambda)로 정렬하며, 상속·예외 처리를 하나로 통합합니다.",
  "description_en": "Integrate object lists with list comprehensions, key=lambda sorting, class inheritance, and exception handling.",
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
    "try",
    "raise"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] Item 객체들을 담은 리스트에서 리스트 컴프리헨션으로 각 상품의 가격만 꺼내 총합을 천 단위 콤마와 함께 출력해보세요.",
      "prompt_en": "[Block] Extract each item's price from the list of Item objects using a list comprehension and print the total formatted with commas.",
      "hint_ko": "반복 변수 x가 각 Item 객체를 가리키므로 점(.) 연산자로 x.price 속성을 꺼내 합산합니다.",
      "hint_en": "Each element x in items is an Item instance, so x.price accesses its price attribute.",
      "targetCode": "class Item:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\nitems = [Item(\"Book\", 12000), Item(\"Pen\", 1500), Item(\"Bag\", 25000)]\ntotal = sum([x.price for x in items])\nprint(f\"{total:,}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "38,500"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 객체 리스트 items에서 각 객체의 가격 속성을 꺼내 리스트로 만들도록 속성 접근 식을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the attribute name in the list comprehension to collect each item's cost attribute.",
      "hint_ko": "반복 변수 p 뒤에 점(.)을 찍고 가격 속성 이름을 적으세요.",
      "hint_en": "Write p. followed by the price attribute name.",
      "targetCode": "class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\nitems = [Product(\"Note\", 3000), Product(\"Mug\", 7000)]\nvals = [p.price for p in items]\nprint(sum(vals))",
      "templateCode": "class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\nitems = [Product(\"Note\", 3000), Product(\"Mug\", 7000)]\nvals = [p.§§§§§§ for p in items]\nprint(sum(vals))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "10000"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] User 객체 리스트에서 점수가 80점 이상인 학생의 이름만 조건부 컴프리헨션으로 추려 쉼표(\",\")로 이어 출력해보세요.",
      "prompt_en": "[Block] Filter the names of users scoring at least 80 using a list comprehension and join them with commas.",
      "hint_ko": "if u.score >= 80 조건을 통과한 객체에서 u.name(문자열)만 꺼내므로 바로 .join()에 넣을 수 있습니다.",
      "hint_en": "Extracting u.name for objects where u.score >= 80 produces a list of strings ready for .join().",
      "targetCode": "class User:\n    def __init__(self, name, score):\n        self.name = name\n        self.score = score\n\nusers = [User(\"Kim\", 85), User(\"Lee\", 72), User(\"Park\", 94)]\npassed = [u.name for u in users if u.score >= 80]\nprint(\",\".join(passed))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Kim,Park"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 가격이 5000 이상인 상품의 이름만 추려내는 조건부 컴프리헨션의 조건 키워드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the filtering keyword in the list comprehension to keep products priced at 5000 or more.",
      "hint_ko": "컴프리헨션 뒤쪽에서 조건을 걸러내는 키워드를 입력하세요.",
      "hint_en": "Type the condition keyword at the end of the list comprehension.",
      "targetCode": "class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\nitems = [Product(\"Book\", 12000), Product(\"Pen\", 1500), Product(\"Bag\", 25000)]\npicks = [p.name for p in items if p.price >= 5000]\nprint(picks)",
      "templateCode": "class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\nitems = [Product(\"Book\", 12000), Product(\"Pen\", 1500), Product(\"Bag\", 25000)]\npicks = [p.name for p in items §§§ p.price >= 5000]\nprint(picks)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['Book', 'Bag']"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] Player 객체 리스트 ps를 각 선수의 점수 속성 기준 내림차순으로 정렬해 높은 점수부터 차례대로 출력해보세요.",
      "prompt_en": "[Block] Sort the list of Player objects in descending order by their score attribute and print each player.",
      "hint_ko": "튜플 대신 객체가 들어 있으므로 lambda p: p.score처럼 객체의 속성을 정렬 기준으로 반환합니다.",
      "hint_en": "Because each element p is an object, return the attribute p.score from the key lambda.",
      "targetCode": "class Player:\n    def __init__(self, name, score):\n        self.name = name\n        self.score = score\n\n    def __str__(self):\n        return f\"{self.name}:{self.score}\"\n\nps = [Player(\"Min\", 75), Player(\"Ara\", 92), Player(\"Leo\", 84)]\nfor p in sorted(ps, key=lambda p: p.score, reverse=True):\n    print(p)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Ara:92\nLeo:84\nMin:75"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 상품 객체 리스트를 가격 속성 기준 오름차순으로 정렬하도록 익명 함수 키워드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the anonymous function keyword to sort Product objects by their price attribute.",
      "hint_ko": "정렬 기준 함수를 즉석에서 정의하는 키워드를 입력하세요.",
      "hint_en": "Enter the keyword for an inline anonymous function.",
      "targetCode": "class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\n    def __str__(self):\n        return f\"{self.name}({self.price})\"\n\nps = [Product(\"Bag\", 9000), Product(\"Pen\", 1200)]\nres = sorted(ps, key=lambda p: p.price)\nprint(\",\".join([str(p) for p in res]))",
      "templateCode": "class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\n    def __str__(self):\n        return f\"{self.name}({self.price})\"\n\nps = [Product(\"Bag\", 9000), Product(\"Pen\", 1200)]\nres = sorted(ps, key=§§§§§§§ p: p.price)\nprint(\",\".join([str(p) for p in res]))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Pen(1200),Bag(9000)"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 일반 상품과 할인 상품 객체를 담은 리스트 bag을 각 객체의 결제 금액 메서드 반환값 기준 오름차순으로 정렬해 출력해보세요.",
      "prompt_en": "[Block] Sort the mixed list of Item and SaleItem objects in ascending order by their cost() method result and print the names and total.",
      "hint_ko": "각 객체의 오버라이딩된 cost() 메서드가 반환하는 실제 결제 금액을 기준으로 오름차순 정렬됩니다.",
      "hint_en": "Calling x.cost() inside the key lambda uses each object's polymorphic cost.",
      "targetCode": "class Item:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\n    def cost(self):\n        return self.price\n\nclass SaleItem(Item):\n    def cost(self):\n        return self.price - 1000\n\nbag = [SaleItem(\"Book\", 9000), Item(\"Pen\", 2000)]\ns = sorted(bag, key=lambda x: x.cost())\nprint(\",\".join([x.name for x in s]), sum([x.cost() for x in s]))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Pen,Book 10000"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 점수 내림차순으로 정렬한 학생 객체들을 1위부터 번호와 함께 출력하도록 열거 함수를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the built-in numbering function to iterate over the sorted objects starting from rank 1.",
      "hint_ko": "1번부터 순위 번호와 객체를 동시에 꺼내는 내장 함수를 적으세요.",
      "hint_en": "Write the built-in function that pairs each item with its 1-based rank.",
      "targetCode": "class Student:\n    def __init__(self, name, avg):\n        self.name = name\n        self.avg = avg\n\n    def __str__(self):\n        return f\"{self.name}({self.avg:.1f})\"\n\nst = [Student(\"Jin\", 88.5), Student(\"Ara\", 95.2)]\ntop = sorted(st, key=lambda s: s.avg, reverse=True)\nfor idx, obj in enumerate(top, 1):\n    print(f\"#{idx} {obj}\")",
      "templateCode": "class Student:\n    def __init__(self, name, avg):\n        self.name = name\n        self.avg = avg\n\n    def __str__(self):\n        return f\"{self.name}({self.avg:.1f})\"\n\nst = [Student(\"Jin\", 88.5), Student(\"Ara\", 95.2)]\ntop = sorted(st, key=lambda s: s.avg, reverse=True)\nfor idx, obj in §§§§§§§§§§(top, 1):\n    print(f\"#{idx} {obj}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "#1 Ara(95.2)\n#2 Jin(88.5)"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 일반 상품과 할인 상품 객체를 실제 결제 금액 기준 오름차순으로 정렬해 이름을 출력하도록 빈칸 2곳을 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the two blanks to sort regular and discounted items in ascending order by their actual payment amount.",
      "hint_ko": "상속할 부모 클래스 이름(Item)과 정렬 기준 익명 함수 키워드(lambda)를 순서대로 채워보세요.",
      "hint_en": "Supply the parent class name, the anonymous function keyword, and the string-joining method.",
      "targetCode": "class Item:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\n    def pay(self):\n        return self.price\n\nclass SaleItem(Item):\n    def pay(self):\n        return self.price - 500\n\nbag = [SaleItem(\"Mug\", 3000), Item(\"Pen\", 1200)]\ns = sorted(bag, key=lambda x: x.pay())\nprint(\",\".join([x.name for x in s]))",
      "templateCode": "class Item:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\n    def pay(self):\n        return self.price\n\nclass SaleItem(§§§§§):\n    def pay(self):\n        return self.price - 500\n\nbag = [SaleItem(\"Mug\", 3000), Item(\"Pen\", 1200)]\ns = sorted(bag, key=§§§§§§§ x: x.pay())\nprint(\",\".join([x.name for x in s]))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Pen,Mug"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] User 객체 리스트를 점수 속성 기준 내림차순으로 정렬해 최고 득점자 이름을 출력하도록 정렬 기준 식의 문법 오류를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Find and fix the syntax error in the sorting key so the user objects are sorted by their score attribute.",
      "hint_ko": "클래스 인스턴스의 속성에 접근할 때는 점(.) 연산자(x.score)를 써야 합니다.",
      "hint_en": "Replace x[\"score\"] with x.score inside the lambda.",
      "templateCode": "class User:\n    def __init__(self, name, score):\n        self.name = name\n        self.score = score\n\nus = [User(\"Kim\", 80), User(\"Lee\", 95)]\ns = sorted(us, key=lambda x: x,score, reverse=True)\nprint(s[0].name)",
      "targetCode": "class User:\n    def __init__(self, name, score):\n        self.name = name\n        self.score = score\n\nus = [User(\"Kim\", 80), User(\"Lee\", 95)]\ns = sorted(us, key=lambda x: x.score, reverse=True)\nprint(s[0].name)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Lee"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 상품 객체들이 가격 속성 기준 오름차순으로 정렬되도록 정렬 기준 속성의 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Find and fix the attribute bug in the sorting key so the products are ordered by ascending cost.",
      "hint_ko": "가격 오름차순 정렬이 되도록 p.name을 가격 속성 p.cost로 고치세요.",
      "hint_en": "Change key=lambda p: p.name to key=lambda p: p.cost.",
      "templateCode": "class Product:\n    def __init__(self, name, cost):\n        self.name = name\n        self.cost = cost\n\nps = [Product(\"Book\", 12000), Product(\"Pen\", 1500)]\nres = sorted(ps, key=lambda p: p.name)\nprint([p.name for p in res])",
      "targetCode": "class Product:\n    def __init__(self, name, cost):\n        self.name = name\n        self.cost = cost\n\nps = [Product(\"Book\", 12000), Product(\"Pen\", 1500)]\nres = sorted(ps, key=lambda p: p.cost)\nprint([p.name for p in res])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['Pen', 'Book']"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 상품 객체 리스트 s에서 가격이 5000 이상인 상품의 이름만 추출해 리스트 변수 picks에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Extract a list of names for products in s priced at 5000 or more and store it in picks.",
      "hint_ko": "picks = [p.name for p in s if p.price >= 5000] 형태로 작성하세요.",
      "hint_en": "Write picks = [p.name for p in s if p.price >= 5000] on the masked line.",
      "targetCode": "class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\ns = [Product(\"Book\", 12000), Product(\"Mug\", 6000), Product(\"Pen\", 1500)]\npicks = [p.name for p in s if p.price >= 5000]\nprint(picks)",
      "templateCode": "class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\ns = [Product(\"Book\", 12000), Product(\"Mug\", 6000), Product(\"Pen\", 1500)]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(picks)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['Book', 'Mug']"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 상품 객체 리스트 ps를 각 객체의 가격 속성 기준 오름차순으로 정렬한 새 리스트를 변수 s에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Sort the product objects in ps in ascending order by their price attribute and store the sorted list in s.",
      "hint_ko": "s = sorted(ps, key=lambda p: p.price) 형태로 작성하세요.",
      "hint_en": "Write s = sorted(ps, key=lambda p: p.price) on the masked line.",
      "targetCode": "class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\nps = [Product(\"Bag\", 9000), Product(\"Pen\", 1500)]\ns = sorted(ps, key=lambda p: p.price)\nprint([p.name for p in s])",
      "templateCode": "class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\nps = [Product(\"Bag\", 9000), Product(\"Pen\", 1500)]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint([p.name for p in s])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['Pen', 'Bag']"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 컴프리헨션 필터링, key=lambda 내림차순 정렬, enumerate 순위 서식을 결합한 코드의 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output produced by filtering >= 80, sorting descending, and enumerating from 1.",
      "hint_ko": "80점 이상인 Ara(95)와 Leo(85)만 객체로 생성되어 내림차순 정렬된 뒤 1번부터 순위가 붙습니다.",
      "hint_en": "Filter >= 80 (Ara:95, Leo:85), sort descending, and format with 1-based ranks joined by \" / \".",
      "targetCode": "class Score:\n    def __init__(self, user, pt):\n        self.user = user\n        self.pt = pt\n\n    def __str__(self):\n        return f\"{self.user}:{self.pt}\"\n\nraw = [(\"Min\", 70), (\"Ara\", 95), (\"Leo\", 85)]\nobjs = [Score(u, p) for u, p in raw if p >= 80]\ns = sorted(objs, key=lambda x: x.pt, reverse=True)\nout = [f\"{i}.{x}\" for i, x in enumerate(s, 1)]\nprint(\"/\".join(out))",
      "choices": [
        "1.Ara:95/2.Leo:85",
        "1.Leo:85 / 2.Ara:95",
        "1.Ara:95 / 2.Leo:85 / 3.Min:70",
        "0.Ara:95 / 1.Leo:85"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1.Ara:95/2.Leo:85"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 클래스 상속, super().__init__(), 예외 처리와 객체 리스트 집계가 통합된 코드의 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the program combining inheritance, raise, and object list sorting.",
      "hint_ko": "음수 가격(-100)은 예외로 건너뛰고, VIPItem은 200원 할인된 가격을 반환해 오름차순으로 정렬됩니다.",
      "hint_en": "The negative price is skipped via ValueError; VIPItem(\"A\", 1000) costs 800 and Item(\"B\", 900) costs 900.",
      "targetCode": "class Item:\n    def __init__(self, name, price):\n        if price < 0:\n            raise ValueError(\"Neg\")\n        self.name = name\n        self.price = price\n\n    def pay(self):\n        return self.price\n\nclass VIPItem(Item):\n    def pay(self):\n        return self.price - 200\n\nbag = []\nfor n, p in [(\"B\", 900), (\"X\", -100), (\"A\", 1000)]:\n    try:\n        bag.append(VIPItem(n, p) if n == \"A\" else Item(n, p))\n    except ValueError:\n        pass\ns = sorted(bag, key=lambda x: x.pay())\nprint([f\"{x.name}:{x.pay()}\" for x in s])",
      "choices": [
        "['A:800', 'B:900']",
        "['B:900', 'A:1000']",
        "['B:900', 'A:800']",
        "['X:-100', 'A:800', 'B:900']"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['A:800', 'B:900']"
        }
      ]
    }
  ]
};
