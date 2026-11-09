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
      "prompt_ko": "__init__ 생성자에서 self.items = []처럼 빈 리스트 속성을 초기화하면, 인스턴스 메서드 안에서 self.items.append()로 해당 객체만의 목록에 원소를 차곡차곡 담을 수 있습니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Initializing an empty list attribute like self.items = [] in __init__ lets instance methods append elements directly to that object's own list via self.items.append(). Trace the block code.",
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
      "prompt_ko": "생성자에서 빈 리스트 속성을 준비하고, 기록된 모든 숫자의 합계를 반환하도록 빈칸을 채워 40을 출력해보세요.",
      "prompt_en": "Initialize an empty list attribute in __init__ and return the sum of its numbers to output 40.",
      "hint_ko": "첫 빈칸에는 빈 리스트를 뜻하는 대괄호 쌍을 적고, 둘째 빈칸에는 숫자 원소들의 '합계(summation)' 앞 세 글자를 딴 내장 함수를 적으세요.",
      "hint_en": "Use empty square brackets to create a blank list on line 3, and call the three-letter built-in function from \"summation\" on line 7.",
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
      "prompt_ko": "__init__에서 self.scores = {}로 빈 딕셔너리 속성을 초기화하고, 메서드에서 self.scores[키] = 값 형태로 키-값 쌍을 등록하거나 수정할 수 있습니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Initializing an empty dictionary attribute self.scores = {} in __init__ allows methods to store or update key-value pairs using self.scores[key] = val. Trace the block code.",
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
      "prompt_ko": "딕셔너리 속성에 메뉴와 가격을 등록하고, 모든 키·값 쌍을 순회하며 출력하도록 빈칸을 채워보세요. (출력 예: Tea:3000)",
      "prompt_en": "Store menu prices in the dictionary attribute and iterate over key-value pairs to print each item.",
      "hint_ko": "첫 빈칸에는 전달받은 네 글자 메뉴 이름 매개변수를 키 자리에 넣고, 둘째 빈칸에는 키-값 '항목들'을 뜻하는 다섯 글자 복수형 메서드를 적으세요.",
      "hint_en": "Use the four-letter dish-label parameter inside the key brackets on line 5, and call the five-letter plural method yielding key-value entries on line 7.",
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
      "prompt_ko": "딕셔너리 속성을 조회하는 인스턴스 메서드 안에 try - except KeyError를 결합하면, 등록되지 않은 키를 찾더라도 에러 대신 None을 안전하게 반환합니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Combining try - except KeyError inside a dictionary-lookup method safely returns None instead of raising an error when a requested key is missing. Trace the block code.",
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
      "prompt_ko": "중복을 제거하는 빈 집합 속성을 초기화하고, 특정 태그의 포함 여부를 확인하도록 빈칸을 채워 2 True를 출력해보세요.",
      "prompt_en": "Initialize an empty set attribute for unique tags and check membership to output 2 True.",
      "hint_ko": "빈 중괄호는 딕셔너리가 되므로 첫 빈칸에는 집합 자료형 함수를 빈 괄호로 호출해 초기화하고, 둘째 빈칸에는 두 글자 포함 연산자를 적으세요.",
      "hint_en": "Empty braces create a dict, so call the three-letter set constructor with empty parentheses on line 3, and use the two-letter membership operator on line 7.",
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
      "prompt_ko": "__init__ 생성자 안에서 self.items = []를 초기화하면, 인스턴스를 여러 개 만들었을 때 각 객체가 서로 섞이지 않는 독립된 리스트를 갖게 됩니다. 블록의 코드를 따라 입력해보세요. (터미널 입력: Bread)",
      "prompt_en": "Initializing self.items = [] inside __init__ gives each created instance its own separate list that does not interfere with other instances. Trace the block code. (Terminal input: Bread)",
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
      "prompt_ko": "공백으로 입력된 두 정수를 센서 리스트에 추가하고 평균값을 계산해 출력해보세요. (터미널 입력: 10 15)",
      "prompt_en": "Append two space-separated integer inputs to Sensor and print their computed average (Terminal input: 10 15).",
      "hint_ko": "첫 빈칸에는 리스트 끝에 '덧붙이다'를 뜻하는 여섯 글자 메서드를 적고, 나눗셈 분모에는 인스턴스의 데이터 리스트 길이를 구하는 식을 적으세요.",
      "hint_en": "Call the six-letter method that attaches an element to the end of a list, and divide the sum by the length of the instance's data list.",
      "templateCode": "class Sensor:\n    def __init__(self):\n        self.data = []\n    def push(self, val):\n        self.data.§§§§§§(val)\n    def avg(self):\n        if len(self.data) == 0:\n            return 0\n        return sum(self.data) / §§§§§§§§§§§§§§\ns = Sensor()\na, b = input().split()\ns.push(int(a))\ns.push(int(b))\nprint(s.avg())",
      "targetCode": "class Sensor:\n    def __init__(self):\n        self.data = []\n    def push(self, val):\n        self.data.append(val)\n    def avg(self):\n        if len(self.data) == 0:\n            return 0\n        return sum(self.data) / len(self.data)\ns = Sensor()\na, b = input().split()\ns.push(int(a))\ns.push(int(b))\nprint(s.avg())",
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
      "prompt_ko": "리스트 속성의 .append()와 .pop()을 메서드로 감싸면, 마지막에 넣은 데이터를 먼저 꺼내는 스택(Stack) 동작을 구현해 while 반복문으로 빌 때까지 처리할 수 있습니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Wrapping a list attribute's .append() and .pop() in methods implements a last-in, first-out Stack that you can drain in a while loop until empty. Trace the block code.",
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
      "prompt_ko": "딕셔너리 속성에 이미 있는 키면 횟수를 1 늘리고, 없는 키면 예외 처리로 1을 새로 등록하여 3 1을 출력해보세요.",
      "prompt_en": "Increment existing key counts by 1 or initialize missing keys to 1 on exception to output 3 1.",
      "hint_ko": "첫 빈칸에는 기존 값에 1을 더해 저장하는 복합 대입 연산자를, 둘째 빈칸에는 없는 딕셔너리 키 조회 시 발생하는 '키+오류' 예외 이름을 적으세요.",
      "hint_en": "Increment existing counts with the two-character add-assign operator on line 6, and catch the eight-letter PascalCase missing-key exception on line 7.",
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
      "hint_ko": "단순 대입 연산자를 쓰면 기존 리스트 속성이 문자열로 통째로 덮어써집니다. 리스트 끝에 원소를 추가하는 메서드를 호출하도록 고치세요.",
      "hint_en": "Using plain assignment replaces the entire list attribute with the new value; call the list's element-adding method instead.",
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
      "hint_ko": "입금 메서드가 리스트에 금액을 추가한 뒤 전체 합계까지 계산해 반환하므로, 금고 인스턴스에서 150을 인자로 호출한 결과를 출력하세요.",
      "hint_en": "Invoke the deposit method on the vault instance with 150 and print the updated total sum it returns.",
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
      "hint_ko": "재고 딕셔너리에 존재하는 과일을 차감했을 때 남는 수량과, 존재하지 않는 과일을 조회했을 때 예외 블록이 무엇을 돌려주는지 확인하세요.",
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
