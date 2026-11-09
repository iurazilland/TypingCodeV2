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
      "prompt_ko": "객체들이 담긴 리스트에 리스트 컴프리헨션([p.name for p in items if p.price >= 5000])을 적용하면, 특정 속성 조건을 만족하는 객체의 원하는 속성만 한 줄로 추출할 수 있습니다.",
      "prompt_en": "Using a list comprehension like [p.name for p in items if p.price >= 5000] filters objects by one attribute and extracts another in a single line.",
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
      "prompt_ko": "두 빈칸을 채워 가격이 2000 이상인 상품들의 가격(p.price)만 컴프리헨션으로 모아 합계 10000을 출력하세요.",
      "prompt_en": "Fill in both blanks to collect p.price for items with p.price >= 2000 and print their sum (10000).",
      "hint_ko": "앞쪽 변환식에는 반복 변수 객체에서 점(.)으로 가격 속성을 꺼내고, 반복절 뒤에는 걸러내는 2글자 조건 키워드를 적으세요.",
      "hint_en": "Read the loop object's price attribute via dot notation in the leading expression, and filter after the loop with the 2-letter condition keyword.",
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
      "prompt_ko": "사용자 정의 객체 리스트를 정렬할 때는 sorted()에 key=lambda p: p.속성 형태로 비교 기준이 될 속성을 지정합니다.",
      "prompt_en": "When sorting a list of custom objects with sorted(), pass key=lambda p: p.attr to specify which attribute to compare.",
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
      "prompt_ko": "두 빈칸을 채워 상품 리스트 ps를 가격 오름차순으로 정렬한 뒤 쉼표로 이어 붙여 출력해보세요.",
      "prompt_en": "Fill in both blanks to sort ps ascending by p.price and print Pen(1200), Bag(9000).",
      "hint_ko": "'정렬하다(sort)'에 과거분사(-ed)를 붙인 6글자 사본 정렬 함수와, 그리스 문자 '람다'(묵음 b 포함 6글자) 익명 함수 키워드를 채우세요.",
      "hint_en": "Add '-ed' to 'sort' for the 6-letter copy-sorting built-in, and write the 6-letter Greek-letter keyword for the inline key function.",
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
      "prompt_ko": "입력 줄을 파싱해 객체를 생성할 때 try-except 블록과 raise를 함께 쓰면, 숫자가 아닌 가격이나 음수 가격을 걸러내고 정상적인 객체만 리스트에 모을 수 있습니다. (터미널 입력: Book 12000, Pen abc, Bag -500 한 줄씩)",
      "prompt_en": "Wrapping input parsing and a negative-value raise inside try-except skips invalid lines and appends only valid Product instances. (Terminal input: Book 12000, Pen abc, Bag -500 line by line)",
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
      "prompt_ko": "두 빈칸을 채워 쉼표로 구분된 좌표를 정수로 변환해 Point 객체를 만들고 유효한 좌표들의 거리 합을 출력하세요. (터미널 입력: 첫째 줄 3,-4, 둘째 줄 bad)",
      "prompt_en": "Fill in both blanks to parse comma-separated coordinates with map(int, ...) inside try-except ValueError. (Terminal input: line 1 3,-4, line 2 bad)",
      "hint_ko": "쪼개진 문자열들에 정수 변환을 일괄 '대응시키는'(지도와 같은 철자) 3글자 함수를 쓰고, '값(Value)+오류(Error)' 파스칼 표기 예외를 잡으세요.",
      "hint_en": "Use the 3-letter chart/mapping function to convert both coordinates, and catch the PascalCase exception combining 'Value' and 'Error'.",
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
      "prompt_ko": "sorted(..., key=lambda p: p.price, reverse=True)로 정렬한 객체 리스트를 enumerate(s, 1)로 순회하면, 1위부터 순위 번호가 붙은 리더보드를 깔끔하게 출력할 수 있습니다.",
      "prompt_en": "Iterating over a descending-sorted object list with enumerate(s, 1) pairs each ranked object with a 1-based position number.",
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
      "prompt_ko": "두 빈칸을 채워 Student 객체들을 평균 내림차순으로 정렬하고, 1위부터 번호와 함께(평균은 소수 둘째 자리) 출력해보세요.",
      "prompt_en": "Fill in both blanks to sort Student objects descending by s.avg and number them starting at 1.",
      "hint_ko": "정렬 기준에는 그리스 문자 '람다'(6글자) 키워드를, 1번부터 번호와 객체를 함께 꺼내는 순회에는 '열거하다'(enumerate) 9글자 함수를 쓰세요.",
      "hint_en": "Use the 6-letter Greek-letter inline function keyword for the sort key, and the 9-letter 'e-' + 'numer' + '-ate' function for 1-based ranking.",
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
      "prompt_ko": "부모·자식 클래스 객체가 섞인 리스트에서 key=lambda x: x.cost()로 메서드를 호출해 정렬하면, 다형성에 의해 각 객체의 실제 결제 금액 기준으로 정렬 및 합산이 이루어집니다.",
      "prompt_en": "Using key=lambda x: x.cost() on a list of parent and child instances leverages polymorphism to sort and sum items by their actual calculated cost.",
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
      "prompt_ko": "세 빈칸을 채워 3명의 지원자 점수를 검증한 뒤 80점 이상 합격자만 점수 내림차순으로 이름을 출력하세요. (터미널 입력: Min 85, Ara 120, Leo 95 한 줄씩)",
      "prompt_en": "Fill in the three blanks to validate 0..100 scores, filter >= 80, sort descending, and print names. (Terminal input: Min 85, Ara 120, Leo 95 line by line)",
      "hint_ko": "범위 밖 점수는 5글자 키워드로 예외를 '일으키고', 합격자 추출에는 2글자 조건 키워드를, 정렬 기준에는 그리스 문자 '람다'(6글자)를 채우세요.",
      "hint_en": "Throw invalid-range errors with the 5-letter 'lift up' keyword, filter with the 2-letter condition keyword, and sort using the 6-letter Greek-letter keyword.",
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
      "hint_ko": "리스트 변수 자체에는 개별 상품의 가격 속성이 없습니다. 리스트의 각 원소 객체를 받아 그 가격 속성을 반환하는 익명 함수를 기준 옵션에 넘기세요.",
      "hint_en": "The list variable itself has no price attribute; pass an inline function to the key option that extracts the price attribute from each element.",
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
      "hint_ko": "정렬된 리스트를 순회하면서 가격 속성이 5000 이상인 객체만 필터링해 이름 속성을 모으는 리스트 컴프리헨션을 출력해보세요.",
      "hint_en": "Print a list comprehension over the sorted list that filters for price >= 5000 and extracts each matching object's name attribute.",
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