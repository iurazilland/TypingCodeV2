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
  "totalQuestions": 13,
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
      "prompt_ko": "Product 객체 리스트 items에서 가격이 5000 이상인 상품의 이름(p.name)만 리스트 컴프리헨션으로 추출해보세요.",
      "prompt_en": "Use a list comprehension to extract p.name for products in items with p.price >= 5000.",
      "hint_ko": "[p.name for p in items if p.price >= 5000] 형태로 객체의 속성을 조건과 결과에 모두 활용할 수 있습니다.",
      "hint_en": "Access object attributes directly inside the comprehension: [p.name for p in items if p.price >= 5000].",
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
      "prompt_ko": "두 빈칸을 채워 가격이 2000 이상인 상품들의 가격(p.price)만 컴프리헨션으로 모아 합계 10000을 출력하세요.",
      "prompt_en": "Fill in both blanks to collect p.price for items with p.price >= 2000 and print their sum (10000).",
      "hint_ko": "객체 p의 가격 속성은 p.price로 읽고, 필터 조건은 뒤에 if절로 연결합니다.",
      "hint_en": "Extract p.price at the front of the comprehension and filter with if p.price >= 2000.",
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
      "prompt_ko": "Player 객체 리스트 ps를 sorted와 key=lambda p: p.score, reverse=True로 점수 내림차순 정렬해 출력하세요.",
      "prompt_en": "Sort Player objects descending by p.score using sorted(ps, key=lambda p: p.score, reverse=True).",
      "hint_ko": "객체는 기본 비교 기준이 없으므로 key=lambda p: p.score로 어떤 속성을 기준으로 정렬할지 알려줍니다.",
      "hint_en": "Pass key=lambda p: p.score and reverse=True to sorted() to order objects from highest score to lowest.",
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
      "prompt_ko": "두 빈칸을 채워 상품 리스트 ps를 가격 오름차순으로 정렬한 뒤 쉼표로 이어 붙여 출력해보세요.",
      "prompt_en": "Fill in both blanks to sort ps ascending by p.price and print Pen(1200), Bag(9000).",
      "hint_ko": "정렬된 새 리스트를 반환하는 내장 함수는 sorted이고, 정렬 기준 함수는 lambda로 간결하게 작성합니다.",
      "hint_en": "Use sorted(ps, key=lambda p: p.price) to sort Product instances by price ascending.",
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
      "prompt_ko": "3줄의 상품 입력을 파싱할 때 정수가 아니거나 음수 가격이면 Skip을 출력하고 유효한 객체 개수만 세어 출력하세요.",
      "prompt_en": "Parse 3 product lines, print Skip on non-int or negative price via try-except, and print valid item count.",
      "hint_ko": "int(raw) 변환 오류와 price < 0일 때 직접 발생시킨 ValueError를 한 except 블록에서 깔끔하게 걸러냅니다.",
      "hint_en": "Both int(raw) failures and raise ValueError(\"Neg\") are caught by except ValueError:.",
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
      "prompt_ko": "두 빈칸을 채워 쉼표로 구분된 좌표를 정수로 변환해 Point 객체를 만들고 유효한 좌표들의 거리 합을 출력하세요.",
      "prompt_en": "Fill in both blanks to parse comma-separated coordinates with map(int, ...) inside try-except ValueError.",
      "hint_ko": "split(\",\") 결과를 한꺼번에 정수로 바꾸려면 map을 쓰고, 변환/언패킹 실패는 except ValueError:로 잡습니다.",
      "hint_en": "Use map(int, raw.split(\",\")) to parse x, y and catch malformed lines with except ValueError:.",
      "templateCode": "class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n    def dist(self):\n        return abs(self.x) + abs(self.y)\n\npts = []\nfor raw in [input(), input()]:\n    try:\n        x, y = §§§(int, raw.split(\",\"))\n        pts.append(Point(x, y))\n    except §§§§§§§§§§:\n        print(\"Bad\")\nprint(sum([p.dist() for p in pts]))",
      "targetCode": "class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n    def dist(self):\n        return abs(self.x) + abs(self.y)\n\npts = []\nfor raw in [input(), input()]:\n    try:\n        x, y = map(int, raw.split(\",\"))\n        pts.append(Point(x, y))\n    except ValueError:\n        print(\"Bad\")\nprint(sum([p.dist() for p in pts]))",
      "testCases": [
        {
          "id": 1,
          "input": "3,-4\nbad",
          "expectedOutput": "Bad\n7"
        },
        {
          "id": 2,
          "input": "1,2\n-5,3",
          "expectedOutput": "11"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "상품을 가격 내림차순으로 정렬한 뒤 enumerate(s, 1)과 __str__의 천 단위 쉼표(:, )로 순위표를 출력하세요.",
      "prompt_en": "Sort products descending by price and print a 1-based leaderboard using enumerate(s, 1) and __str__.",
      "hint_ko": "enumerate(s, 1)은 순위 번호를 1부터 매겨 주며, f\"{rank}.{item}\"에서 item.__str__()이 자동 호출됩니다.",
      "hint_en": "enumerate(s, 1) yields 1-based ranks while f\"{rank}.{item}\" formats each Product with commas.",
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
      "prompt_ko": "두 빈칸을 채워 평균 점수를 소수 둘째 자리까지 표현하는 Student 객체들을 내림차순 1위부터 출력해보세요.",
      "prompt_en": "Fill in both blanks to sort Student objects descending by s.avg and number them starting at 1.",
      "hint_ko": "정렬 기준에는 lambda를, 1번부터 시작하는 번호 매기기 순회에는 enumerate(top, 1)을 사용합니다.",
      "hint_en": "Use lambda for the sort key and enumerate(top, 1) for 1-based ranking.",
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
      "prompt_ko": "Item과 할인 상품 SaleItem(Item)이 섞인 리스트를 실제 결제 금액 x.cost() 순으로 정렬하고 합계를 출력하세요.",
      "prompt_en": "Sort mixed Item and SaleItem(Item) instances by x.cost() and print sorted names with comma-formatted total.",
      "hint_ko": "key=lambda x: x.cost()를 사용하면 다형성에 의해 각 객체의 실제 결제 금액 기준으로 정렬됩니다.",
      "hint_en": "Using key=lambda x: x.cost() leverages polymorphism to sort both Item and SaleItem accurately.",
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
      "prompt_ko": "세 빈칸을 채워 3명의 지원자 점수를 검증한 뒤 80점 이상 합격자만 점수 내림차순으로 이름을 출력하세요.",
      "prompt_en": "Fill in the three blanks to validate 0..100 scores, filter >= 80, sort descending, and print names.",
      "hint_ko": "범위 오류는 raise로 일으키고, 합격자 필터링은 컴프리헨션 if, 점수 정렬 기준은 lambda를 사용합니다.",
      "hint_en": "Use raise for invalid scores, if in the filter comprehension, and lambda for descending sort.",
      "templateCode": "class Applicant:\n    def __init__(self, name, score):\n        self.name = name\n        self.score = score\n\npool = []\nfor line in [input(), input(), input()]:\n    name, raw = line.split()\n    try:\n        sc = int(raw)\n        if sc < 0 or sc > 100:\n            §§§§§ ValueError(\"Out\")\n        pool.append(Applicant(name, sc))\n    except ValueError:\n        print(\"Skip\")\nok = [a for a in pool §§ a.score >= 80]\ns = sorted(ok, key=§§§§§§ a: a.score, reverse=True)\nprint(\",\".join([a.name for a in s]))",
      "targetCode": "class Applicant:\n    def __init__(self, name, score):\n        self.name = name\n        self.score = score\n\npool = []\nfor line in [input(), input(), input()]:\n    name, raw = line.split()\n    try:\n        sc = int(raw)\n        if sc < 0 or sc > 100:\n            raise ValueError(\"Out\")\n        pool.append(Applicant(name, sc))\n    except ValueError:\n        print(\"Skip\")\nok = [a for a in pool if a.score >= 80]\ns = sorted(ok, key=lambda a: a.score, reverse=True)\nprint(\",\".join([a.name for a in s]))",
      "testCases": [
        {
          "id": 1,
          "input": "Min 85\nAra 120\nLeo 95",
          "expectedOutput": "Skip\nLeo,Min"
        },
        {
          "id": 2,
          "input": "Sua 80\nJin 70\nDan 90",
          "expectedOutput": "Dan,Sua"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "객체 리스트 ps를 가격(price) 오름차순으로 정렬할 때 발생한 key 지정 오류를 수정하세요.",
      "prompt_en": "Fix the AttributeError caused by passing ps.price instead of a lambda key function to sorted().",
      "hint_ko": "ps는 리스트이므로 ps.price 속성이 없습니다. 각 원소 p에서 p.price를 꺼내는 lambda 함수를 key에 전달하세요.",
      "hint_en": "ps is a list, not a Product; pass key=lambda p: p.price so sorted() inspects each Product element.",
      "templateCode": "class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\nps = [Product(\"Book\", 12000), Product(\"Pen\", 1500)]\nres = sorted(ps, key=ps.price)\nprint([p.name for p in res])",
      "targetCode": "class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\nps = [Product(\"Book\", 12000), Product(\"Pen\", 1500)]\nres = sorted(ps, key=lambda p: p.price)\nprint([p.name for p in res])",
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
      "prompt_ko": "정렬된 리스트 s 아래에 한 줄을 추가하여 가격이 5000 이상인 상품 이름 리스트를 컴프리헨션으로 출력하세요.",
      "prompt_en": "Add one line below s to print a list comprehension of p.name for items in s with p.price >= 5000.",
      "hint_ko": "print([p.name for p in s if p.price >= 5000])을 마지막 줄에 입력해보세요.",
      "hint_en": "Write print([p.name for p in s if p.price >= 5000]) on the last line.",
      "templateCode": "class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\np1 = Product(\"Pen\", 1500)\np2 = Product(\"Book\", 12000)\np3 = Product(\"Mug\", 6000)\nps = [p1, p2, p3]\ns = sorted(ps, key=lambda p: p.price, reverse=True)\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\np1 = Product(\"Pen\", 1500)\np2 = Product(\"Book\", 12000)\np3 = Product(\"Mug\", 6000)\nps = [p1, p2, p3]\ns = sorted(ps, key=lambda p: p.price, reverse=True)\nprint([p.name for p in s if p.price >= 5000])",
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
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "컴프리헨션 필터링, lambda 내림차순 정렬, enumerate 순위 서식을 결합한 다음 코드의 실행 결과를 고르세요.",
      "prompt_en": "Select the exact output produced by filtering >= 80, sorting descending, and enumerating from 1.",
      "hint_ko": "80점 이상인 Ara(95), Leo(85)만 객체로 생성된 뒤 점수 내림차순으로 정렬되어 1.Ara:95 / 2.Leo:85가 출력됩니다.",
      "hint_en": "Min(70) is filtered out; Ara(95) and Leo(85) sort descending and format as 1.Ara:95 / 2.Leo:85.",
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
