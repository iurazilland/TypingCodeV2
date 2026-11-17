import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_86: PracticeRound = {
  "id": "py-basic-r86",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 86,
  "title_ko": "86레벨: 객체 리스트와 컴프리헨션·lambda 정렬·예외 통합 실습",
  "title_en": "Level 86: Object Lists with Comprehensions, lambda Sort & Exceptions",
  "description_ko": "클래스 인스턴스 리스트를 컴프리헨션으로 필터링하고, sorted와 lambda로 정렬하며, 입력 파싱 예외 처리와 순위표 출력을 통합합니다.",
  "description_en": "Filter object lists with list comprehensions, sort objects via sorted() and lambda, parse inputs safely, and format leaderboards.",
  "totalQuestions": 15,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "type",
    "math",
    "iter",
    "sorted",
    "map",
    "method",
    "if",
    "for_range",
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
      "prompt_ko": "[블록 조립] 객체 리스트 items에서 p.price >= 5000인 상품의 이름(p.name)만 컴프리헨션으로 추출해보세요.",
      "prompt_en": "[Block] Use a list comprehension [p.name for p in items if p.price >= 5000] to filter Product names.",
      "hint_ko": "반복 변수 p가 각 Product 객체를 가리키므로 p.price로 가격을 비교하고 p.name으로 이름을 꺼냅니다.",
      "hint_en": "Because loop variable p refers to each Product instance, use p.price in the filter and p.name in the output expression.",
      "targetCode": "class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\np1 = Product(\"Book\", 12000)\np2 = Product(\"Pen\", 1500)\np3 = Product(\"Bag\", 25000)\nitems = [p1, p2, p3]\npicks = [p.name for p in items if p.price >= 5000]\nprint(picks)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['Book', 'Bag']"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 가격이 2000 이상인 상품들의 가격(p.price)만 컴프리헨션으로 모아 합계 10000을 출력하세요.",
      "prompt_en": "[Fill Blank] Fill in both blanks to collect p.price for items with p.price >= 2000 and print their sum.",
      "hint_ko": "앞쪽 변환식에는 반복 변수 객체에서 점(.)으로 가격 속성을 꺼내고, 반복절 뒤에는 걸러내는 2글자 조건 키워드를 적으세요.",
      "hint_en": "Read the loop object's price attribute via dot notation, and filter after the loop with the 2-letter if keyword.",
      "templateCode": "class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\np1 = Product(\"Note\", 3000)\np2 = Product(\"Gum\", 800)\np3 = Product(\"Mug\", 7000)\nitems = [p1, p2, p3]\nvals = [§§§§§§§ for p in items §§ p.price >= 2000]\nprint(sum(vals))",
      "targetCode": "class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\np1 = Product(\"Note\", 3000)\np2 = Product(\"Gum\", 800)\np3 = Product(\"Mug\", 7000)\nitems = [p1, p2, p3]\nvals = [p.price for p in items if p.price >= 2000]\nprint(sum(vals))",
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
      "prompt_ko": "[블록 조립] Player 객체 리스트를 key=lambda p: p.score와 reverse=True로 내림차순 정렬해 출력해보세요.",
      "prompt_en": "[Block] Sort Player objects descending with key=lambda p: p.score and reverse=True.",
      "hint_ko": "reverse=True를 함께 주면 점수(p.score)가 높은 객체부터 내림차순으로 정렬되며, 출력 시 각 객체의 __str__이 자동 호출됩니다.",
      "hint_en": "Adding reverse=True sorts from highest p.score to lowest, and printing each object invokes its __str__ method.",
      "targetCode": "class Player:\n    def __init__(self, name, score):\n        self.name = name\n        self.score = score\n\n    def __str__(self):\n        return f\"{self.name}:{self.score}\"\n\nps = [Player(\"Min\", 75), Player(\"Ara\", 92)]\nps.append(Player(\"Leo\", 84))\ns = sorted(ps, key=lambda p: p.score, reverse=True)\nfor p in s:\n    print(p)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Ara:92\nLeo:84\nMin:75"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 상품 리스트 ps를 가격 오름차순으로 정렬한 뒤 쉼표로 이어 붙여 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in sorted and lambda to sort ps ascending by p.price.",
      "hint_ko": "6글자 사본 정렬 내장 함수와 6글자 익명 함수 키워드를 차례로 채우세요.",
      "hint_en": "Use the 6-letter sorted built-in and the 6-letter lambda keyword.",
      "templateCode": "class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\n    def __str__(self):\n        return f\"{self.name}({self.price})\"\n\nps = [Product(\"Bag\", 9000), Product(\"Pen\", 1200)]\nres = §§§§§§(ps, key=§§§§§§ p: p.price)\nprint(\", \".join([str(p) for p in res]))",
      "targetCode": "class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\n    def __str__(self):\n        return f\"{self.name}({self.price})\"\n\nps = [Product(\"Bag\", 9000), Product(\"Pen\", 1200)]\nres = sorted(ps, key=lambda p: p.price)\nprint(\", \".join([str(p) for p in res]))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Pen(1200), Bag(9000)"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 입력 줄에서 숫자가 아니거나 음수인 가격을 try-except와 raise로 걸러 유효 객체 수를 출력하세요.",
      "prompt_en": "[Block] Filter out non-numeric or negative prices with try-except and raise when building Product objects.",
      "hint_ko": "int(raw) 변환 실패와 price < 0일 때 직접 발생시킨 ValueError 모두 같은 except ValueError: 블록에서 처리됩니다.",
      "hint_en": "Both failed int(raw) conversions and the manual raise ValueError(\"Neg\") are caught by the same except ValueError: block.",
      "targetCode": "class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\nitems = []\nfor line in [input(), input(), input()]:\n    name, raw = line.split()\n    try:\n        price = int(raw)\n        if price < 0:\n            raise ValueError(\"Neg\")\n        items.append(Product(name, price))\n    except ValueError:\n        print(\"Skip\")\nprint(len(items))",
      "testCases": [
        {
          "id": 1,
          "input": "Book 12000\nPen abc\nBag -500",
          "expectedOutput": "Skip\nSkip\n1"
        },
        {
          "id": 2,
          "input": "Note 2000\nMug 5000\nCap 8000",
          "expectedOutput": "3"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 쉼표로 구분된 양수 좌표를 변환해 Point 객체를 모으고 유효 개수를 출력하세요.",
      "prompt_en": "[Fill Blank] Fill in map and ValueError to parse positive comma-separated coordinates safely.",
      "hint_ko": "쪼개진 문자열들에 정수 변환을 일괄 대응시키는 3글자 함수를 쓰고, ValueError 예외를 잡으세요.",
      "hint_en": "Use the 3-letter map function to convert both coordinates, and catch ValueError.",
      "templateCode": "class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\npts = []\nfor raw in [input(), input()]:\n    try:\n        x, y = §§§(int, raw.split(\",\"))\n        if x < 0 or y < 0:\n            raise ValueError(\"Neg\")\n        pts.append(Point(x, y))\n    except §§§§§§§§§§:\n        print(\"Bad\")\nprint(len(pts))",
      "targetCode": "class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\npts = []\nfor raw in [input(), input()]:\n    try:\n        x, y = map(int, raw.split(\",\"))\n        if x < 0 or y < 0:\n            raise ValueError(\"Neg\")\n        pts.append(Point(x, y))\n    except ValueError:\n        print(\"Bad\")\nprint(len(pts))",
      "testCases": [
        {
          "id": 1,
          "input": "3,4\nbad",
          "expectedOutput": "Bad\n1"
        },
        {
          "id": 2,
          "input": "1,2\n5,3",
          "expectedOutput": "2"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 가격 내림차순으로 정렬한 객체 리스트를 enumerate(s, 1)로 순회해 1위부터 출력해보세요.",
      "prompt_en": "[Block] Sort Product objects descending by price and iterate with enumerate(s, 1) to print rankings.",
      "hint_ko": "f-string의 {item} 자리에 객체가 들어가면 클래스에 정의된 __str__의 천 단위 쉼표 서식이 자동으로 적용됩니다.",
      "hint_en": "Placing {item} inside the f-string automatically formats the object using its __str__ method with thousands commas.",
      "targetCode": "class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\n    def __str__(self):\n        return f\"{self.name}:{self.price:,}\"\n\nps = [Product(\"Pen\", 1500), Product(\"Book\", 12000)]\ns = sorted(ps, key=lambda p: p.price, reverse=True)\nfor rank, item in enumerate(s, 1):\n    print(f\"{rank}.{item}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1.Book:12,000\n2.Pen:1,500"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] Student 객체들을 평균 내림차순으로 정렬하고 1위부터 번호와 함께 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in lambda and enumerate to sort Student objects descending by s.avg and rank from 1.",
      "hint_ko": "정렬 기준에는 6글자 익명 함수 키워드를, 1번부터 순위를 매기는 순회에는 9글자 열거 함수를 쓰세요.",
      "hint_en": "Use the 6-letter lambda keyword for the sort key and the 9-letter enumerate function for 1-based ranking.",
      "templateCode": "class Student:\n    def __init__(self, name, avg):\n        self.name = name\n        self.avg = avg\n\n    def __str__(self):\n        return f\"{self.name}({self.avg:.2f})\"\n\nst = [Student(\"Jin\", 88.5), Student(\"Ara\", 95.25)]\ntop = sorted(st, key=§§§§§§ s: s.avg, reverse=True)\nfor idx, obj in §§§§§§§§§(top, 1):\n    print(f\"#{idx} {obj}\")",
      "targetCode": "class Student:\n    def __init__(self, name, avg):\n        self.name = name\n        self.avg = avg\n\n    def __str__(self):\n        return f\"{self.name}({self.avg:.2f})\"\n\nst = [Student(\"Jin\", 88.5), Student(\"Ara\", 95.25)]\ntop = sorted(st, key=lambda s: s.avg, reverse=True)\nfor idx, obj in enumerate(top, 1):\n    print(f\"#{idx} {obj}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "#1 Ara(95.25)\n#2 Jin(88.50)"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 부모·자식 객체 리스트를 key=lambda x: x.cost()로 정렬해 이름과 총 결제 금액을 출력해보세요.",
      "prompt_en": "[Block] Sort Item and SaleItem instances with key=lambda x: x.cost() and print names and total cost.",
      "hint_ko": "SaleItem은 재정의된 cost()에 의해 1000원 할인된 금액을 반환하고, Item은 원래 가격을 그대로 반환합니다.",
      "hint_en": "SaleItem returns its discounted price via the overridden cost() method, while Item returns its original price.",
      "targetCode": "class Item:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\n    def cost(self):\n        return self.price\n\nclass SaleItem(Item):\n    def cost(self):\n        return self.price - 1000\n\nbag = [SaleItem(\"Book\", 9000), Item(\"Pen\", 2000)]\ns = sorted(bag, key=lambda x: x.cost())\nnames = [x.name for x in s]\ntotal = sum([x.cost() for x in s])\nprint(\",\".join(names), f\"{total:,}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Pen,Book 10,000"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] Item을 상속받은 SaleItem과 일반 Item을 실제 결제 금액(x.pay()) 오름차순으로 정렬해 출력하세요.",
      "prompt_en": "[Fill Blank] Fill in Item and lambda to inherit from Item and sort bag by x.pay().",
      "hint_ko": "상속 선언부에는 4글자 부모 클래스 이름을, 정렬 기준에는 6글자 익명 함수 키워드를 채우세요.",
      "hint_en": "Inherit the 4-letter parent class Item and use the 6-letter lambda keyword in sorted().",
      "templateCode": "class Item:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\n    def pay(self):\n        return self.price\n\nclass SaleItem(§§§§):\n    def pay(self):\n        return self.price - 500\n\nbag = [SaleItem(\"Mug\", 3000), Item(\"Pen\", 1200)]\ns = sorted(bag, key=§§§§§§ x: x.pay())\nprint(\",\".join([x.name for x in s]))",
      "targetCode": "class Item:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\n    def pay(self):\n        return self.price\n\nclass SaleItem(Item):\n    def pay(self):\n        return self.price - 500\n\nbag = [SaleItem(\"Mug\", 3000), Item(\"Pen\", 1200)]\ns = sorted(bag, key=lambda x: x.pay())\nprint(\",\".join([x.name for x in s]))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Pen,Mug"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 객체 리스트 ps를 가격(cost) 오름차순으로 정렬해야 하는데 이름(name)으로 정렬하는 버그를 수정하세요.",
      "prompt_en": "[Fix Bug] Fix the attribute in key=lambda p: ... so ps is sorted by p.cost instead of p.name.",
      "hint_ko": "가격 오름차순으로 정렬하려면 p.name 대신 가격 속성인 p.cost를 반환해야 합니다.",
      "hint_en": "Change key=lambda p: p.name to key=lambda p: p.cost to sort by cost ascending.",
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
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 점수가 80 이상인 선수 이름만 골라내려다 컴프리헨션 조건절 위치가 잘못된 버그를 수정하세요.",
      "prompt_en": "[Fix Bug] Fix the SyntaxError in the list comprehension filtering players with p.pt >= 80.",
      "hint_ko": "else 없이 원소를 걸러내는 필터 조건절(if p.pt >= 80)은 for p in ps 뒤에 와야 합니다.",
      "hint_en": "Move if p.pt >= 80 to the end of the comprehension, after for p in ps.",
      "templateCode": "class Player:\n    def __init__(self, name, pt):\n        self.name = name\n        self.pt = pt\n\nps = [Player(\"Min\", 70), Player(\"Ara\", 95), Player(\"Leo\", 85)]\ntop = [p.name if p.pt >= 80 for p in ps]\nprint(top)",
      "targetCode": "class Player:\n    def __init__(self, name, pt):\n        self.name = name\n        self.pt = pt\n\nps = [Player(\"Min\", 70), Player(\"Ara\", 95), Player(\"Leo\", 85)]\ntop = [p.name for p in ps if p.pt >= 80]\nprint(top)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['Ara', 'Leo']"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 정렬된 리스트 s에서 p.price >= 5000인 상품 이름(p.name) 리스트 컴프리헨션을 picks에 저장하세요.",
      "prompt_en": "[Complete Line] Assign [p.name for p in s if p.price >= 5000] to picks.",
      "hint_ko": "picks = [p.name for p in s if p.price >= 5000] 형태로 작성해보세요.",
      "hint_en": "Write picks = [p.name for p in s if p.price >= 5000].",
      "templateCode": "class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\np1 = Product(\"Pen\", 1500)\np2 = Product(\"Book\", 12000)\np3 = Product(\"Mug\", 6000)\nps = [p1, p2, p3]\ns = sorted(ps, key=lambda p: p.price, reverse=True)\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(picks)",
      "targetCode": "class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\np1 = Product(\"Pen\", 1500)\np2 = Product(\"Book\", 12000)\np3 = Product(\"Mug\", 6000)\nps = [p1, p2, p3]\ns = sorted(ps, key=lambda p: p.price, reverse=True)\npicks = [p.name for p in s if p.price >= 5000]\nprint(picks)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['Book', 'Mug']"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 상품 리스트 ps를 p.price 기준 오름차순으로 정렬해 s에 저장하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Assign sorted(ps, key=lambda p: p.price) to s.",
      "hint_ko": "s = sorted(ps, key=lambda p: p.price) 형태로 객체의 가격 속성을 기준으로 정렬하세요.",
      "hint_en": "Write s = sorted(ps, key=lambda p: p.price).",
      "templateCode": "class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\nps = [Product(\"Bag\", 9000), Product(\"Pen\", 1500)]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint([p.name for p in s])",
      "targetCode": "class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\nps = [Product(\"Bag\", 9000), Product(\"Pen\", 1500)]\ns = sorted(ps, key=lambda p: p.price)\nprint([p.name for p in s])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['Pen', 'Bag']"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 컴프리헨션 필터링, lambda 내림차순 정렬, enumerate 순위 서식을 결합한 코드의 실행 결과를 고르세요.",
      "prompt_en": "[Predict Output] Select the exact output produced by filtering >= 80, sorting descending, and enumerating from 1.",
      "hint_ko": "기준 점수 미만인 튜플이 먼저 제외된 뒤, 남은 객체들이 점수 내림차순으로 정렬되어 1번부터 순위 번호가 매겨지는 순서를 확인해보세요.",
      "hint_en": "Filter out tuples below 80 first, sort the remaining objects from highest to lowest score, and note that numbering starts at 1.",
      "targetCode": "class Score:\n    def __init__(self, user, pt):\n        self.user = user\n        self.pt = pt\n\n    def __str__(self):\n        return f\"{self.user}:{self.pt}\"\n\nraw = [(\"Min\", 70), (\"Ara\", 95), (\"Leo\", 85)]\nobjs = [Score(u, p) for u, p in raw if p >= 80]\ns = sorted(objs, key=lambda x: x.pt, reverse=True)\nout = [f\"{i}.{x}\" for i, x in enumerate(s, 1)]\nprint(\" / \".join(out))",
      "choices": [
        "1.Ara:95 / 2.Leo:85",
        "1.Leo:85 / 2.Ara:95",
        "1.Ara:95 / 2.Leo:85 / 3.Min:70",
        "0.Ara:95 / 1.Leo:85"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1.Ara:95 / 2.Leo:85"
        }
      ]
    }
  ]
};
