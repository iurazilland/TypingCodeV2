import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_76: PracticeRound = {
  "id": "py-basic-r76",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 76,
  "title_ko": "76레벨: 리스트·딕셔너리 속성을 가진 클래스 다루기",
  "title_en": "Level 76: Classes with List & Dictionary Attributes",
  "description_ko": "__init__에서 리스트와 딕셔너리 속성을 초기화하고, 메서드를 통해 요소를 추가·순회·집계하는 방법을 익힙니다.",
  "description_en": "Initialize list and dictionary attributes in __init__ and add, iterate over, and aggregate their elements via methods.",
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
      "prompt_ko": "[블록 조립] 생성자에서 빈 리스트 속성을 초기화하고 추가 메서드로 원소를 차례로 담아 출력해보세요.",
      "prompt_en": "[Block] Initialize an empty list attribute in the initializer, append items via a method, and print the list.",
      "hint_ko": "생성자에서 빈 리스트를 self.items = []로 만들어 두면 메서드를 호출할 때마다 요소가 차곡차곡 쌓입니다.",
      "hint_en": "Initializing self.items = [] in __init__ lets each instance accumulate elements across method calls.",
      "targetCode": "class Bag:\n    def __init__(self):\n        self.items = []\n    def add(self, x):\n        self.items.append(x)\nb = Bag()\nb.add(\"Key\")\nb.add(\"Map\")\nprint(b.items)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['Key', 'Map']"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 장바구니 객체의 리스트 속성 끝에 새 상품을 추가하도록 메서드 이름을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the list method name inside put() to add an item to the end of self.cart.",
      "hint_ko": "리스트 속성도 일반 리스트와 동일하게 맨 뒤에 원소를 덧붙이는 메서드를 사용합니다.",
      "hint_en": "Use the list method that attaches a new element to the end of a list.",
      "templateCode": "class Cart:\n    def __init__(self):\n        self.cart = []\n    def put(self, item):\n        self.cart.§§§§§§§(item)\nc = Cart()\nc.put(\"Milk\")\nc.put(\"Bread\")\nprint(len(c.cart), c.cart[0])",
      "targetCode": "class Cart:\n    def __init__(self):\n        self.cart = []\n    def put(self, item):\n        self.cart.append(item)\nc = Cart()\nc.put(\"Milk\")\nc.put(\"Bread\")\nprint(len(c.cart), c.cart[0])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2 Milk"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 인스턴스의 점수 리스트 속성에 담긴 모든 점수의 합계를 반환하는 메서드를 조립해 출력해보세요.",
      "prompt_en": "[Block] Assemble a method that returns the sum of the instance's score list attribute and print the result.",
      "hint_ko": "내장 함수 sum(), len(), max()에 인스턴스의 리스트 속성(self.scores)을 그대로 넣어 집계할 수 있습니다.",
      "hint_en": "Pass the instance list attribute self.scores directly into built-in functions like sum(), len(), or max().",
      "targetCode": "class ScoreBoard:\n    def __init__(self):\n        self.scores = []\n    def add(self, s):\n        self.scores.append(s)\n    def total(self):\n        return sum(self.scores)\nsb = ScoreBoard()\nsb.add(40)\nsb.add(55)\nprint(sb.total())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "95"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 기록된 온도 리스트에서 가장 높은 온도를 반환하도록 내장 함수 이름을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the built-in function name in highest() to return the maximum value in self.temps.",
      "hint_ko": "숫자 리스트에서 가장 큰 최댓값을 구하는 내장 함수를 호출하세요.",
      "hint_en": "Call the built-in function that returns the largest item in a list.",
      "templateCode": "class Tracker:\n    def __init__(self):\n        self.temps = []\n    def record(self, t):\n        self.temps.append(t)\n    def highest(self):\n        return §§§§(self.temps)\ntr = Tracker()\ntr.record(18)\ntr.record(27)\ntr.record(23)\nprint(tr.highest())",
      "targetCode": "class Tracker:\n    def __init__(self):\n        self.temps = []\n    def record(self, t):\n        self.temps.append(t)\n    def highest(self):\n        return max(self.temps)\ntr = Tracker()\ntr.record(18)\ntr.record(27)\ntr.record(23)\nprint(tr.highest())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "27"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 메서드 안에서 인스턴스의 숫자 리스트 속성을 순회하며 10 이상인 숫자의 개수를 세어 반환해보세요.",
      "prompt_en": "[Block] Iterate over the instance's number list inside the method and return how many numbers are at least 10.",
      "hint_ko": "메서드 안에서 for 반복문과 if 조건문을 결합하면 리스트 속성 중 원하는 조건의 원소만 집계할 수 있습니다.",
      "hint_en": "Combine a for loop and an if condition inside a method to filter or count matching elements in a list attribute.",
      "targetCode": "class Analyzer:\n    def __init__(self, nums):\n        self.nums = nums\n    def count_big(self):\n        cnt = 0\n        for x in self.nums:\n            if x >= 10:\n                cnt += 1\n        return cnt\na = Analyzer([4, 12, 9, 15, 20])\nprint(a.count_big())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 단어장 객체에 저장된 단어들 중 4글자 이상인 단어만 골라 새 리스트로 반환하도록 순회 대상을 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the loop target inside the method to iterate over the word list attribute stored on the instance.",
      "hint_ko": "메서드 안에서 현재 객체 자신의 단어 리스트 속성을 가리키도록 참조 변수와 점을 함께 적으세요.",
      "hint_en": "Iterate over the words list attribute attached to self.",
      "templateCode": "class WordBook:\n    def __init__(self, words):\n        self.words = words\n    def long_words(self):\n        res = []\n        for w in §§§§§§§§§§§:\n            if len(w) >= 4:\n                res.append(w)\n        return res\nwb = WordBook([\"py\", \"code\", \"ai\", \"data\"])\nprint(wb.long_words())",
      "targetCode": "class WordBook:\n    def __init__(self, words):\n        self.words = words\n    def long_words(self):\n        res = []\n        for w in self.words:\n            if len(w) >= 4:\n                res.append(w)\n        return res\nwb = WordBook([\"py\", \"code\", \"ai\", \"data\"])\nprint(wb.long_words())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['code', 'data']"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 생성자에서 빈 딕셔너리 속성을 초기화하고 상품별 재고를 등록·조회하는 메서드를 조립해보세요.",
      "prompt_en": "[Block] Initialize an empty dictionary attribute in the initializer, store item counts, and look them up.",
      "hint_ko": "self.stock[name] = qty 형태로 객체의 딕셔너리 속성에 키와 값을 저장하고 대괄호로 조회할 수 있습니다.",
      "hint_en": "Use self.stock[name] = qty to store key-value pairs in an instance's dictionary attribute.",
      "targetCode": "class Store:\n    def __init__(self):\n        self.stock = {}\n    def set_item(self, name, qty):\n        self.stock[name] = qty\n    def get_item(self, name):\n        if name in self.stock:\n            return self.stock[name]\n        return 0\ns = Store()\ns.set_item(\"Pen\", 15)\nprint(s.get_item(\"Pen\"), s.get_item(\"Note\"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "15 0"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 성적표 객체의 생성자에서 과목별 점수를 담을 빈 딕셔너리 속성을 초기화해보세요.",
      "prompt_en": "[Fill Blank] Initialize the grades attribute as an empty dictionary inside the initializer.",
      "hint_ko": "비어 있는 딕셔너리를 뜻하는 중괄호 한 쌍을 대입 연산자 오른쪽에 적으세요.",
      "hint_en": "Use a pair of empty curly braces to create an empty dictionary.",
      "templateCode": "class Report:\n    def __init__(self):\n        self.grades = §§§\n    def save(self, sub, pt):\n        self.grades[sub] = pt\nr = Report()\nr.save(\"Math\", 90)\nr.save(\"Eng\", 85)\nprint(r.grades[\"Math\"], len(r.grades))",
      "targetCode": "class Report:\n    def __init__(self):\n        self.grades = {}\n    def save(self, sub, pt):\n        self.grades[sub] = pt\nr = Report()\nr.save(\"Math\", 90)\nr.save(\"Eng\", 85)\nprint(r.grades[\"Math\"], len(r.grades))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "90 2"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 전달된 숫자들 중 양수만 장부 객체의 기록 리스트에 모아 합계와 기록 개수를 구해보세요.",
      "prompt_en": "[Fill Blank] Complete the ledger class to collect only positive numbers into its log list.",
      "hint_ko": "빈 리스트 기호([])와 리스트 속성에 원소를 추가하는 메서드(append)를 차례로 채우세요.",
      "hint_en": "Check the empty list literal, the list method for adding an element, and the built-in total function.",
      "templateCode": "class Ledger:\n    def __init__(self):\n        self.logs = §§§\n    def add_pos(self, val):\n        if val > 0:\n            self.logs.§§§§§§§(val)\n    def total(self):\n        return sum(self.logs)\nlg = Ledger()\nfor n in [20, -5, 30, 0, 15]:\n    lg.add_pos(n)\nprint(lg.total(), len(lg.logs))",
      "targetCode": "class Ledger:\n    def __init__(self):\n        self.logs = []\n    def add_pos(self, val):\n        if val > 0:\n            self.logs.append(val)\n    def total(self):\n        return sum(self.logs)\nlg = Ledger()\nfor n in [20, -5, 30, 0, 15]:\n    lg.add_pos(n)\nprint(lg.total(), len(lg.logs))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "65 3"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 방문한 페이지들이 브라우저 객체의 기록 리스트에 차곡차곡 저장되도록 메서드 안의 잘못된 객체 참조를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the instance reference inside the method so visited pages are appended to the browser's history list.",
      "hint_ko": "생성자에서 self.history에 리스트를 만들었으므로 메서드에서도 반드시 self.history로 접근해야 합니다.",
      "hint_en": "Because history is an attribute on the instance, prefix it with self. inside the method.",
      "templateCode": "class Browser:\n    def __init__(self):\n        self.history = []\n    def visit(self, page):\n        this.history.append(page)\nb = Browser()\nb.visit(\"home\")\nb.visit(\"docs\")\nprint(b.history)",
      "targetCode": "class Browser:\n    def __init__(self):\n        self.history = []\n    def visit(self, page):\n        self.history.append(page)\nb = Browser()\nb.visit(\"home\")\nb.visit(\"docs\")\nprint(b.history)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['home', 'docs']"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 창고 딕셔너리에 이미 등록된 품목이 들어오면 수량이 누적되도록 연산자를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the compound operator so adding more of an existing item accumulates its quantity.",
      "hint_ko": "이미 키가 존재할 때는 기존 값에 새 수량을 더해야 하므로 += 연산자를 사용하세요.",
      "hint_en": "When the key already exists in self.box, use += instead of = to accumulate the quantity.",
      "templateCode": "class Warehouse:\n    def __init__(self):\n        self.box = {}\n    def add_stock(self, k, v):\n        if k in self.box:\n            self.box[k] -= v\n        else:\n            self.box[k] = v\nw = Warehouse()\nw.add_stock(\"Apple\", 10)\nw.add_stock(\"Apple\", 5)\nprint(w.box[\"Apple\"])",
      "targetCode": "class Warehouse:\n    def __init__(self):\n        self.box = {}\n    def add_stock(self, k, v):\n        if k in self.box:\n            self.box[k] += v\n        else:\n            self.box[k] = v\nw = Warehouse()\nw.add_stock(\"Apple\", 10)\nw.add_stock(\"Apple\", 5)\nprint(w.box[\"Apple\"])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "15"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 메서드 안에서 인스턴스의 작업 리스트 속성으로부터 마지막 원소를 꺼내 돌려주는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the line inside the method that removes and sends back the last element from the task list attribute.",
      "hint_ko": "반환 키워드 뒤에 인스턴스 리스트 속성의 pop() 메서드 호출식을 적으세요.",
      "hint_en": "Return the result of calling .pop() on self.tasks.",
      "templateCode": "class QueueBox:\n    def __init__(self, tasks):\n        self.tasks = tasks\n    def pop_last(self):\n        §§§§§§§§§§§§§§§§§§§§§§§§\nq = QueueBox([\"A\", \"B\", \"C\"])\nprint(q.pop_last(), len(q.tasks))",
      "targetCode": "class QueueBox:\n    def __init__(self, tasks):\n        self.tasks = tasks\n    def pop_last(self):\n        return self.tasks.pop()\nq = QueueBox([\"A\", \"B\", \"C\"])\nprint(q.pop_last(), len(q.tasks))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "C 2"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 생성자 안에서 아래 등록 메서드가 사용하는 가격표 속성을 빈 딕셔너리로 초기화하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the line inside the initializer that sets the price table attribute used below to an empty dictionary.",
      "hint_ko": "들여쓰기 위치에 맞춰 자기 자신의 prices 속성에 빈 중괄호를 대입하세요.",
      "hint_en": "Assign an empty dictionary {} to self.prices.",
      "templateCode": "class Menu:\n    def __init__(self):\n        §§§§§§§§§§§§§§§§§\n    def register(self, name, cost):\n        self.prices[name] = cost\nm = Menu()\nm.register(\"Tea\", 3000)\nprint(m.prices[\"Tea\"])",
      "targetCode": "class Menu:\n    def __init__(self):\n        self.prices = {}\n    def register(self, name, cost):\n        self.prices[name] = cost\nm = Menu()\nm.register(\"Tea\", 3000)\nprint(m.prices[\"Tea\"])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3000"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 두 개의 독립된 가방 인스턴스에 각각 아이템을 추가하고 꺼낸 뒤의 출력 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the output after appending and popping items on two separate Pouch instances.",
      "hint_ko": "생성자에서 self.items = []로 만든 리스트는 각 인스턴스마다 따로 관리된다는 점을 기억하세요.",
      "hint_en": "Each instance gets its own separate list in __init__, so operations on p1 do not affect p2.",
      "targetCode": "class Pouch:\n    def __init__(self):\n        self.items = []\n    def put(self, x):\n        self.items.append(x)\n    def take(self):\n        return self.items.pop()\np1 = Pouch()\np2 = Pouch()\np1.put(10)\np1.put(20)\np2.put(30)\nv = p1.take()\nprint(v, p1.items, p2.items)",
      "choices": [
        "20 [10] [30]",
        "30 [10, 20] []",
        "10 [20] [30]",
        "20 [10, 30] []"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "20 [10] [30]"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 딕셔너리 속성과 items() 순회, 조건 필터링이 결합된 클래스 코드의 출력 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the output of the code iterating over a dictionary attribute with .items().",
      "hint_ko": "딕셔너리에 같은 키로 다시 저장하면 값이 갱신되며, 80점 이상인 과목만 합산되는 과정을 추적해보세요.",
      "hint_en": "Note that saving \"Kor\" a second time overwrites 70 with 85 before filtering scores >= 80.",
      "targetCode": "class GradeBook:\n    def __init__(self):\n        self.table = {}\n    def set_score(self, sub, pt):\n        self.table[sub] = pt\n    def high_sum(self):\n        total = 0\n        for k, v in self.table.items():\n            if v >= 80:\n                total += v\n        return total\ngb = GradeBook()\ngb.set_score(\"Kor\", 70)\ngb.set_score(\"Math\", 90)\ngb.set_score(\"Kor\", 85)\nprint(len(gb.table), gb.high_sum())",
      "choices": [
        "2 175",
        "3 245",
        "2 90",
        "3 175"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2 175"
        }
      ]
    }
  ]
};
