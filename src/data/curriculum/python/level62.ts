import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_62: PracticeRound = {
  "id": "py-basic-r62",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 62,
  "title_ko": "62레벨: 리스트·딕셔너리 속성을 가진 클래스 다루기",
  "title_en": "Level 62: Classes with List & Dictionary Attributes",
  "description_ko": "__init__에서 리스트, 딕셔너리, 집합 속성을 초기화하고 메서드로 원소를 추가·합산·안전 조회합니다.",
  "description_en": "Initialize list, dict, and set attributes inside __init__ and add, aggregate, and safely query elements via methods.",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "class",
    "def",
    "variable",
    "method",
    "math",
    "for_in",
    "for_range",
    "range",
    "while",
    "if",
    "try",
    "print",
    "input",
    "type"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "생성자에서 self.items = []를 초기화한 Bag 클래스에 add 메서드를 만들고, \"Key\"와 \"Map\"을 담아 리스트와 개수를 출력해보세요.",
      "prompt_en": "Initialize self.items = [] in Bag, add \"Key\" and \"Map\" via add(), and print b.items and len(b.items).",
      "hint_ko": "메서드 안에서 self.items.append(item)으로 리스트 속성에 원소를 차례대로 추가할 수 있습니다.",
      "hint_en": "Use self.items.append(item) inside add(self, item) and print(b.items, len(b.items)).",
      "targetCode": "class Bag:\n    def __init__(self):\n        self.items = []\n    def add(self, item):\n        self.items.append(item)\nb = Bag()\nb.add(\"Key\")\nb.add(\"Map\")\nprint(b.items, len(b.items))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['Key', 'Map'] 2"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "생성자에서 빈 리스트 속성을 준비하고, 기록된 모든 숫자의 합계를 반환하도록 빈칸을 채워 40을 출력해보세요.",
      "prompt_en": "Initialize an empty list attribute in __init__ and return the sum of its numbers to output 40.",
      "hint_ko": "빈 리스트는 대괄호 []로 초기화하며, 숫자 리스트의 총합은 내장 함수 sum(self.nums)으로 계산합니다.",
      "hint_en": "Write [] on line 3 and sum on line 7.",
      "templateCode": "class Log:\n    def __init__(self):\n        self.nums = §§\n    def push(self, n):\n        self.nums.append(n)\n    def total(self):\n        return §§§(self.nums)\ng = Log()\ng.push(15)\ng.push(25)\nprint(g.total())",
      "targetCode": "class Log:\n    def __init__(self):\n        self.nums = []\n    def push(self, n):\n        self.nums.append(n)\n    def total(self):\n        return sum(self.nums)\ng = Log()\ng.push(15)\ng.push(25)\nprint(g.total())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "40"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "self.scores = {}를 가진 Report 클래스에 과목과 점수를 저장하는 record 메서드를 만들고, \"Math\" 점수와 과목 수를 출력해보세요.",
      "prompt_en": "Initialize self.scores = {} in Report, store \"Math\": 95 and \"Code\": 100 via record(), and print Math score and len.",
      "hint_ko": "딕셔너리 속성에는 self.scores[sub] = val 형태로 새 과목 키와 점수 값을 등록합니다.",
      "hint_en": "Assign self.scores[sub] = val inside record(self, sub, val).",
      "targetCode": "class Report:\n    def __init__(self):\n        self.scores = {}\n    def record(self, sub, val):\n        self.scores[sub] = val\nr = Report()\nr.record(\"Math\", 95)\nr.record(\"Code\", 100)\nprint(r.scores[\"Math\"], len(r.scores))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "95 2"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "딕셔너리 속성에 메뉴와 가격을 등록하고, 모든 키·값 쌍을 순회하며 출력하도록 빈칸을 채워보세요. (출력 예: Tea:3000)",
      "prompt_en": "Store menu prices in the dictionary attribute and iterate over key-value pairs to print each item.",
      "hint_ko": "매개변수 name을 키로 써서 저장하고, 딕셔너리의 키와 값을 함께 순회할 때는 .items() 메서드를 호출합니다.",
      "hint_en": "Use name as the key on line 5 and call .items() on line 7.",
      "templateCode": "class Menu:\n    def __init__(self):\n        self.prices = {}\n    def add(self, name, cost):\n        self.prices[§§§§] = cost\n    def show(self):\n        for k, v in self.prices.§§§§§():\n            print(f\"{k}:{v}\")\nm = Menu()\nm.add(\"Tea\", 3000)\nm.add(\"Pie\", 4500)\nm.show()",
      "targetCode": "class Menu:\n    def __init__(self):\n        self.prices = {}\n    def add(self, name, cost):\n        self.prices[name] = cost\n    def show(self):\n        for k, v in self.prices.items():\n            print(f\"{k}:{v}\")\nm = Menu()\nm.add(\"Tea\", 3000)\nm.add(\"Pie\", 4500)\nm.show()",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Tea:3000\nPie:4500"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "딕셔너리 속성 조회 시 없는 키면 try-except KeyError로 None을 반환하는 Board.lookup(k)를 구현해 \"Leo\"와 \"Mia\"를 조회해보세요.",
      "prompt_en": "Implement Board.lookup(self, k) using try-except KeyError to return None on missing keys, and query \"Leo\" and \"Mia\".",
      "hint_ko": "try 블록에서 return self.scores[k]를 시도하고, except KeyError: 블록에서 return None을 수행합니다.",
      "hint_en": "Try returning self.scores[k] and catch KeyError to return None safely.",
      "targetCode": "class Board:\n    def __init__(self):\n        self.scores = {}\n    def put(self, k, v):\n        self.scores[k] = v\n    def lookup(self, k):\n        try:\n            return self.scores[k]\n        except KeyError:\n            return None\nb = Board()\nb.put(\"Leo\", 90)\nprint(b.lookup(\"Leo\"))\nprint(b.lookup(\"Mia\"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "90\nNone"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "중복을 제거하는 빈 집합 속성을 초기화하고, 특정 태그의 포함 여부를 확인하도록 빈칸을 채워 2 True를 출력해보세요.",
      "prompt_en": "Initialize an empty set attribute for unique tags and check membership to output 2 True.",
      "hint_ko": "빈 집합은 중괄호 {}가 아니라 set()으로 생성하며, 원소 포함 여부는 in 연산자로 검사합니다.",
      "hint_en": "Initialize self.tags with set() on line 3 and use in on line 7.",
      "templateCode": "class Post:\n    def __init__(self):\n        self.tags = §§§§§\n    def tag(self, word):\n        self.tags.add(word)\n    def has(self, word):\n        return word §§ self.tags\np = Post()\np.tag(\"py\")\np.tag(\"oop\")\np.tag(\"py\")\nprint(len(p.tags), p.has(\"oop\"))",
      "targetCode": "class Post:\n    def __init__(self):\n        self.tags = set()\n    def tag(self, word):\n        self.tags.add(word)\n    def has(self, word):\n        return word in self.tags\np = Post()\np.tag(\"py\")\np.tag(\"oop\")\np.tag(\"py\")\nprint(len(p.tags), p.has(\"oop\"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2 True"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "독립된 두 장바구니 a, b를 생성해 a에는 입력 상품을, b에는 \"Milk\"를 담고 두 리스트를 출력해보세요. (예: Bread -> ['Bread'] ['Milk'])",
      "prompt_en": "Create two independent Cart instances a and b, add input() to a and \"Milk\" to b, and print a.items, b.items.",
      "hint_ko": "__init__ 안에서 self.items = []를 각각 생성하므로 a와 b의 리스트는 서로 섞이지 않고 독립적으로 관리됩니다.",
      "hint_en": "Because self.items = [] runs inside __init__, Cart a and Cart b own separate list objects.",
      "targetCode": "class Cart:\n    def __init__(self):\n        self.items = []\n    def add(self, x):\n        self.items.append(x)\na = Cart()\nb = Cart()\na.add(input())\nb.add(\"Milk\")\nprint(a.items, b.items)",
      "testCases": [
        {
          "id": 1,
          "input": "Bread",
          "expectedOutput": "['Bread'] ['Milk']"
        },
        {
          "id": 2,
          "input": "Apple",
          "expectedOutput": "['Apple'] ['Milk']"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "공백으로 입력된 두 실수를 센서 리스트에 추가하고 평균값을 계산해 출력해보세요. (예: 10 15 -> 12.5)",
      "prompt_en": "Append two space-separated float inputs to Sensor and print their computed average (e.g., 10 15 -> 12.5).",
      "hint_ko": "리스트 끝에 값을 추가할 때는 .append()를 쓰고, 평균은 합계 sum(self.data)를 개수 len(self.data)로 나눕니다.",
      "hint_en": "Use append on line 5 and len(self.data) as the divisor on line 9.",
      "templateCode": "class Sensor:\n    def __init__(self):\n        self.data = []\n    def push(self, val):\n        self.data.§§§§§§(val)\n    def avg(self):\n        if len(self.data) == 0:\n            return 0\n        return sum(self.data) / §§§§§§§§§§§§§§\ns = Sensor()\na, b = input().split()\ns.push(float(a))\ns.push(float(b))\nprint(s.avg())",
      "targetCode": "class Sensor:\n    def __init__(self):\n        self.data = []\n    def push(self, val):\n        self.data.append(val)\n    def avg(self):\n        if len(self.data) == 0:\n            return 0\n        return sum(self.data) / len(self.data)\ns = Sensor()\na, b = input().split()\ns.push(float(a))\ns.push(float(b))\nprint(s.avg())",
      "testCases": [
        {
          "id": 1,
          "input": "10 15",
          "expectedOutput": "12.5"
        },
        {
          "id": 2,
          "input": "2.5 5.0",
          "expectedOutput": "3.75"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "리스트 속성에서 값을 꺼내는 Stack 클래스를 만들고, 10과 20을 넣은 뒤 빌 때까지 while로 꺼내 더해 합계와 남은 개수를 출력해보세요.",
      "prompt_en": "Push 10 and 20 into Stack, pop and sum items while len(st.tasks) > 0, then print total and len(st.tasks).",
      "hint_ko": "self.tasks.pop()은 마지막 원소를 꺼내 반환하며 리스트 길이를 줄이므로 두 번 꺼낸 뒤 길이가 0이 됩니다.",
      "hint_en": "Call st.pop_item() inside while len(st.tasks) > 0: to accumulate 30 and leave 0 items.",
      "targetCode": "class Stack:\n    def __init__(self):\n        self.tasks = []\n    def push(self, t):\n        self.tasks.append(t)\n    def pop_item(self):\n        return self.tasks.pop()\nst = Stack()\nst.push(10)\nst.push(20)\ntotal = 0\nwhile len(st.tasks) > 0:\n    total += st.pop_item()\nprint(total, len(st.tasks))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "30 0"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "딕셔너리 속성에 이미 있는 키면 횟수를 1 늘리고, 없는 키면 예외 처리로 1을 새로 등록하여 3 1을 출력해보세요.",
      "prompt_en": "Increment existing key counts by 1 or initialize missing keys to 1 on exception to output 3 1.",
      "hint_ko": "기존 키의 값 증가는 += 1을 사용하고, 딕셔너리에 없는 키에 접근할 때 발생하는 KeyError를 잡습니다.",
      "hint_en": "Use += on line 6 and catch KeyError on line 7.",
      "templateCode": "class CounterBox:\n    def __init__(self):\n        self.counts = {}\n    def hit(self, key):\n        try:\n            self.counts[key] §§ 1\n        except §§§§§§§§:\n            self.counts[key] = 1\ncb = CounterBox()\nfor ch in [\"A\", \"B\", \"A\", \"A\"]:\n    cb.hit(ch)\nprint(cb.counts[\"A\"], cb.counts[\"B\"])",
      "targetCode": "class CounterBox:\n    def __init__(self):\n        self.counts = {}\n    def hit(self, key):\n        try:\n            self.counts[key] += 1\n        except KeyError:\n            self.counts[key] = 1\ncb = CounterBox()\nfor ch in [\"A\", \"B\", \"A\", \"A\"]:\n    cb.hit(ch)\nprint(cb.counts[\"A\"], cb.counts[\"B\"])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 1"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "아이템 추가 메서드가 리스트에 원소를 덧붙이지 않고 속성 자체를 덮어써 버립니다. 코드를 고쳐 ['Pen', 'Note']를 출력해보세요.",
      "prompt_en": "Fix the bug in Bag.add where self.items is overwritten instead of appending so ['Pen', 'Note'] is printed.",
      "hint_ko": "리스트 속성에 새 원소를 추가할 때는 대입(=)이 아니라 리스트 메서드 self.items.append(x)를 호출해야 합니다.",
      "hint_en": "Replace self.items = x with self.items.append(x).",
      "templateCode": "class Bag:\n    def __init__(self):\n        self.items = []\n    def add(self, x):\n        self.items = x\nb = Bag()\nb.add(\"Pen\")\nb.add(\"Note\")\nprint(b.items)",
      "targetCode": "class Bag:\n    def __init__(self):\n        self.items = []\n    def add(self, x):\n        self.items.append(x)\nb = Bag()\nb.add(\"Pen\")\nb.add(\"Note\")\nprint(b.items)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['Pen', 'Note']"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "금고 인스턴스를 생성한 코드 아래에 한 줄을 추가하여 150을 입금한 뒤 전체 금액 합계를 출력해보세요. (출력 예: 500)",
      "prompt_en": "Add one line below v = Vault() to deposit 150 and print the returned total gold sum (output: 500).",
      "hint_ko": "deposit 메서드가 추가 후 전체 합계를 반환하므로 print(v.deposit(150))을 작성하면 됩니다.",
      "hint_en": "Write print(v.deposit(150)) on the last line.",
      "templateCode": "class Vault:\n    def __init__(self):\n        self.gold = [100, 250]\n    def deposit(self, amount):\n        self.gold.append(amount)\n        return sum(self.gold)\nv = Vault()\n§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "class Vault:\n    def __init__(self):\n        self.gold = [100, 250]\n    def deposit(self, amount):\n        self.gold.append(amount)\n        return sum(self.gold)\nv = Vault()\nprint(v.deposit(150))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "500"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "딕셔너리 재고를 차감하고 예외를 처리하는 Store 클래스의 실행 결과를 선택해보세요.",
      "prompt_en": "Select the output of the Store class when buying an existing item and a missing item.",
      "hint_ko": "\"apple\"은 3에서 2가 빠져 1을 반환하고, \"pear\"는 딕셔너리에 없어 KeyError 예외가 발생해 None을 반환합니다.",
      "hint_en": "s.buy(\"apple\", 2) updates stock to 1 and returns 1; s.buy(\"pear\", 1) hits KeyError and returns None.",
      "targetCode": "class Store:\n    def __init__(self):\n        self.stock = {\"apple\": 3}\n    def buy(self, item, n):\n        try:\n            self.stock[item] -= n\n            return self.stock[item]\n        except KeyError:\n            return None\ns = Store()\nprint(s.buy(\"apple\", 2), s.buy(\"pear\", 1))",
      "choices": [
        "1 None",
        "1 0",
        "3 None",
        "None None"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1 None"
        }
      ]
    }
  ]
};
