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
  "totalQuestions": 15,
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] __init__에서 빈 리스트 self.items = []를 초기화하고 원소를 추가하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Initialize an empty list attribute self.items = [] in __init__ and append items via Bag.add.",
      "hint_ko": "객체의 리스트 속성도 일반 리스트와 똑같이 len(b.items)로 원소 개수를 구할 수 있습니다.",
      "hint_en": "An instance's list attribute works just like any list, so len(b.items) returns its item count.",
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
      "prompt_ko": "[빈칸 채우기] 생성자에서 빈 리스트 속성을 준비하고, 기록된 모든 숫자의 합계를 반환하도록 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Initialize an empty list attribute in __init__ and return the sum of its numbers to output 40.",
      "hint_ko": "첫 빈칸에는 빈 리스트를 뜻하는 []를 적고, 둘째 빈칸에는 합계를 구하는 내장 함수 sum을 적으세요.",
      "hint_en": "Use empty square brackets [] to create a blank list on line 3, and call sum on line 7.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] __init__에서 빈 딕셔너리 self.scores = {}를 초기화하고 과목 점수를 기록해보세요.",
      "prompt_en": "[Block] Initialize an empty dictionary attribute self.scores = {} in __init__ and store key-value pairs.",
      "hint_ko": "인스턴스의 딕셔너리 속성에 저장된 값은 r.scores[\"Math\"]처럼 대괄호 키 조회로 바로 읽을 수 있습니다.",
      "hint_en": "Values stored in an instance's dictionary attribute can be read with bracket notation like r.scores[\"Math\"].",
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
      "prompt_ko": "[빈칸 채우기] 빈 딕셔너리 속성을 초기화하고 메뉴 이름을 키로 가격을 등록·조회하도록 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Initialize an empty dict attribute and store and retrieve menu prices by name.",
      "hint_ko": "첫 빈칸에는 빈 딕셔너리 {}를 적고, 둘째 빈칸에는 전달받은 메뉴 이름 매개변수 name을 키 자리에 넣으세요.",
      "hint_en": "Use empty braces {} on line 3, and place the parameter name inside the key brackets on line 5.",
      "templateCode": "class Menu:\n    def __init__(self):\n        self.prices = §§\n    def add(self, name, cost):\n        self.prices[§§§§] = cost\n    def get_cost(self, name):\n        return self.prices[name]\nm = Menu()\nm.add(\"Tea\", 3000)\nm.add(\"Pie\", 4500)\nprint(m.get_cost(\"Tea\"), len(m.prices))",
      "targetCode": "class Menu:\n    def __init__(self):\n        self.prices = {}\n    def add(self, name, cost):\n        self.prices[name] = cost\n    def get_cost(self, name):\n        return self.prices[name]\nm = Menu()\nm.add(\"Tea\", 3000)\nm.add(\"Pie\", 4500)\nprint(m.get_cost(\"Tea\"), len(m.prices))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3000 2"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 딕셔너리 속성을 조회하는 메서드에 try - except KeyError를 결합해 안전하게 조회해보세요.",
      "prompt_en": "[Block] Combine try - except KeyError inside Board.lookup to return None when a key is missing.",
      "hint_ko": "데이터 저장 메서드(put)와 안전 조회 메서드(lookup)를 나누어 정의하면 딕셔너리 속성을 체계적으로 관리할 수 있습니다.",
      "hint_en": "Separating storage (put) and safe retrieval (lookup) into dedicated methods keeps dictionary state management clean.",
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
      "prompt_ko": "[빈칸 채우기] 딕셔너리 속성에 있는 키면 1을 더하고, 없는 키면 예외 처리로 1을 등록해 2 1을 출력해보세요.",
      "prompt_en": "[Fill Blank] Increment existing key counts by 1 or initialize missing keys to 1 on KeyError to output 2 1.",
      "hint_ko": "첫 빈칸에는 1을 더해 저장하는 += 연산자를, 둘째 빈칸에는 없는 키 예외 KeyError를 적으세요.",
      "hint_en": "Increment existing counts with += on line 6, and catch KeyError on line 7.",
      "templateCode": "class CounterBox:\n    def __init__(self):\n        self.counts = {}\n    def hit(self, key):\n        try:\n            self.counts[key] §§ 1\n        except §§§§§§§§:\n            self.counts[key] = 1\ncb = CounterBox()\ncb.hit(\"A\")\ncb.hit(\"B\")\ncb.hit(\"A\")\nprint(cb.counts[\"A\"], cb.counts[\"B\"])",
      "targetCode": "class CounterBox:\n    def __init__(self):\n        self.counts = {}\n    def hit(self, key):\n        try:\n            self.counts[key] += 1\n        except KeyError:\n            self.counts[key] = 1\ncb = CounterBox()\ncb.hit(\"A\")\ncb.hit(\"B\")\ncb.hit(\"A\")\nprint(cb.counts[\"A\"], cb.counts[\"B\"])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2 1"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 두 Cart 인스턴스에 각각 독립된 상품을 담고 리스트 속성을 출력해보세요.",
      "prompt_en": "[Block] Initialize separate list attributes per Cart instance and add items independently.",
      "hint_ko": "a.add()는 인스턴스 a의 리스트에만 원소를 추가하므로 인스턴스 b의 리스트에는 영향을 주지 않습니다.",
      "hint_en": "Calling a.add() mutates only instance a's list, leaving instance b's list completely independent.",
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
      "prompt_ko": "[빈칸 채우기] 공백으로 입력된 두 정수를 센서 리스트에 추가하고 평균값을 계산해 출력해보세요.",
      "prompt_en": "[Fill Blank] Append two space-separated integer inputs to Sensor and print their average.",
      "hint_ko": "첫 빈칸에는 리스트 끝에 추가하는 append 메서드를 적고, 분모에는 len(self.data)를 적으세요.",
      "hint_en": "Call append to add an element to the list, and divide the sum by len(self.data).",
      "templateCode": "class Sensor:\n    def __init__(self):\n        self.data = []\n    def push(self, val):\n        self.data.§§§§§§(val)\n    def avg(self):\n        return sum(self.data) / §§§§§§§§§§§§§§\ns = Sensor()\na, b = input().split()\ns.push(int(a))\ns.push(int(b))\nprint(s.avg())",
      "targetCode": "class Sensor:\n    def __init__(self):\n        self.data = []\n    def push(self, val):\n        self.data.append(val)\n    def avg(self):\n        return sum(self.data) / len(self.data)\ns = Sensor()\na, b = input().split()\ns.push(int(a))\ns.push(int(b))\nprint(s.avg())",
      "testCases": [
        {
          "id": 1,
          "input": "10 15",
          "expectedOutput": "12.5"
        },
        {
          "id": 2,
          "input": "2 5",
          "expectedOutput": "3.5"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 리스트 속성의 .append()와 .pop()을 감싼 Stack을 while문으로 비우며 합산해보세요.",
      "prompt_en": "[Block] Wrap .append() and .pop() in Stack methods and drain the stack in a while loop.",
      "hint_ko": "self.tasks.pop()은 리스트의 맨 끝 원소를 제거하면서 그 값을 동시에 반환하므로 합계에 바로 더할 수 있습니다.",
      "hint_en": "self.tasks.pop() removes and returns the last element of the list, so its return value can be added directly to total.",
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
      "prompt_ko": "[빈칸 채우기] 연료 리스트에 값을 추가하고 빌 때까지 하나씩 꺼내 합산하도록 두 메서드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in append and pop inside Burner so the while loop drains all fuels and prints 40.",
      "hint_ko": "첫 빈칸에는 리스트 끝에 추가하는 append를, 둘째 빈칸에는 끝 원소를 꺼내 반환하는 pop을 적으세요.",
      "hint_en": "Use append on line 5 to add fuel and pop on line 7 to remove and return the last fuel value.",
      "templateCode": "class Burner:\n    def __init__(self):\n        self.fuels = []\n    def load(self, f):\n        self.fuels.§§§§§§(f)\n    def use_one(self):\n        return self.fuels.§§§()\nb = Burner()\nb.load(15)\nb.load(25)\nans = 0\nwhile len(b.fuels) > 0:\n    ans += b.use_one()\nprint(ans)",
      "targetCode": "class Burner:\n    def __init__(self):\n        self.fuels = []\n    def load(self, f):\n        self.fuels.append(f)\n    def use_one(self):\n        return self.fuels.pop()\nb = Burner()\nb.load(15)\nb.load(25)\nans = 0\nwhile len(b.fuels) > 0:\n    ans += b.use_one()\nprint(ans)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "40"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 리스트로 초기화해야 할 self.items가 빈 딕셔너리로 되어 오류가 납니다. 코드를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix __init__ in Bag where self.items is initialized as a dict {} instead of a list [].",
      "hint_ko": ".append() 메서드를 사용할 수 있도록 생성자에서 중괄호 {} 대신 대괄호 []로 빈 리스트를 초기화하세요.",
      "hint_en": "Replace {} with [] in __init__ so self.items is a list that supports .append().",
      "templateCode": "class Bag:\n    def __init__(self):\n        self.items = {}\n    def add(self, x):\n        self.items.append(x)\nb = Bag()\nb.add(\"Pen\")\nb.add(\"Note\")\nprint(b.items)",
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
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 딕셔너리 속성에 과목(k)과 점수(v)를 저장할 때 키와 값 위치가 뒤바뀐 버그를 고쳐 95를 출력해보세요.",
      "prompt_en": "[Fix Bug] Fix the swapped key and value in ScoreBook.record so sb.scores[\"Math\"] prints 95.",
      "hint_ko": "self.scores[키] = 값 순서가 되어야 하므로 대괄호 안에 k를, 등호 오른쪽에 v를 적으세요.",
      "hint_en": "Store k as the dictionary key and v as the value: self.scores[k] = v.",
      "templateCode": "class ScoreBook:\n    def __init__(self):\n        self.scores = {}\n    def record(self, k, v):\n        self.scores[v] = k\nsb = ScoreBook()\nsb.record(\"Math\", 95)\nprint(sb.scores[\"Math\"])",
      "targetCode": "class ScoreBook:\n    def __init__(self):\n        self.scores = {}\n    def record(self, k, v):\n        self.scores[k] = v\nsb = ScoreBook()\nsb.record(\"Math\", 95)\nprint(sb.scores[\"Math\"])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "95"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 금고 인스턴스 v에 150을 입금(deposit)하고 반환된 합계를 total에 저장하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Call v.deposit(150) and assign the returned total gold sum to total.",
      "hint_ko": "total = v.deposit(150) 형태로 입금 메서드의 반환값을 변수 total에 대입하세요.",
      "hint_en": "Assign the return value of v.deposit(150) to total.",
      "templateCode": "class Vault:\n    def __init__(self):\n        self.gold = [100, 250]\n    def deposit(self, amount):\n        self.gold.append(amount)\n        return sum(self.gold)\nv = Vault()\n§§§§§§§§§§§§§§§§§§§§§§\nprint(total)",
      "targetCode": "class Vault:\n    def __init__(self):\n        self.gold = [100, 250]\n    def deposit(self, amount):\n        self.gold.append(amount)\n        return sum(self.gold)\nv = Vault()\ntotal = v.deposit(150)\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "500"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 집합 속성 self.tags에 전달받은 태그 t를 추가(.add)하는 메서드 내부 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the line inside add_tag that adds t to the set attribute self.tags.",
      "hint_ko": "집합 속성 self.tags에서 .add(t) 메서드를 호출해 원소를 추가하세요.",
      "hint_en": "Call self.tags.add(t) inside the add_tag method.",
      "templateCode": "class TagSet:\n    def __init__(self):\n        self.tags = set()\n    def add_tag(self, t):\n        §§§§§§§§§§§§§§§§\nts = TagSet()\nts.add_tag(\"py\")\nts.add_tag(\"py\")\nprint(len(ts.tags))",
      "targetCode": "class TagSet:\n    def __init__(self):\n        self.tags = set()\n    def add_tag(self, t):\n        self.tags.add(t)\nts = TagSet()\nts.add_tag(\"py\")\nts.add_tag(\"py\")\nprint(len(ts.tags))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 딕셔너리 재고를 차감하고 예외를 처리하는 Store 클래스의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the output of the Store class when buying an existing item and a missing item.",
      "hint_ko": "재고 딕셔너리에 존재하는 과일을 차감했을 때 남는 수량과, 없는 과일을 조회했을 때 예외 블록이 무엇을 돌려주는지 확인하세요.",
      "hint_en": "Trace the remaining count returned after subtracting from an existing stock key, and check what the exception handler returns for an unknown key.",
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
