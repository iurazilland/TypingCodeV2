import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_63: PracticeRound = {
  "id": "py-basic-r63",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 63,
  "title_ko": "63레벨: 클래스 기초 & 핵심 개념 기초편(Part 1) 완주 종합",
  "title_en": "Level 63: Section 10 & Part 1 Core Foundations Master Review",
  "description_ko": "클래스·생성자·인스턴스 메서드와 예외 처리, 함수, 컬렉션, 반복·조건문까지 Part 1 핵심 기초 전 과정을 종합 점검합니다.",
  "description_en": "Master review synthesizing classes, __init__, instance methods, try-except, functions, collections, loops, and conditionals across Part 1.",
  "totalQuestions": 10,
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
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "생성자와 피해 차감 메서드, 생존 논리값을 포함한 상태 메서드의 빈칸을 채워 결과를 출력해보세요. (예: 20 -> Aria:30:True)",
      "prompt_en": "Fill in the initializer, damage deduction, and boolean survival conversion to print Aria's status.",
      "hint_ko": "객체 생성 시 자동 실행되는 특수 메서드 이름, 현재 인스턴스의 체력 속성 접근 표현, 그리고 정수 체력을 참·거짓 자료형으로 바꾸는 내장 함수를 차례로 채워보세요.",
      "hint_en": "Fill in the special constructor method name, the current instance's health attribute reference, and the built-in truth-value converter.",
      "templateCode": "class Player:\n    def §§§§§§§§(self, name, hp=100):\n        self.name = name\n        self.hp = hp\n    def hit(self, dmg):\n        §§§§§§§ -= dmg\n        if self.hp < 0:\n            self.hp = 0\n    def info(self):\n        ok = §§§§(self.hp)\n        return f\"{self.name}:{self.hp}:{ok}\"\np = Player(\"Aria\", 50)\np.hit(int(input()))\nprint(p.info())",
      "targetCode": "class Player:\n    def __init__(self, name, hp=100):\n        self.name = name\n        self.hp = hp\n    def hit(self, dmg):\n        self.hp -= dmg\n        if self.hp < 0:\n            self.hp = 0\n    def info(self):\n        ok = bool(self.hp)\n        return f\"{self.name}:{self.hp}:{ok}\"\np = Player(\"Aria\", 50)\np.hit(int(input()))\nprint(p.info())",
      "testCases": [
        {
          "id": 1,
          "input": "20",
          "expectedOutput": "Aria:30:True"
        },
        {
          "id": 2,
          "input": "60",
          "expectedOutput": "Aria:0:False"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "문자열을 안전하게 정수로 바꾸는 함수와 가계부 클래스의 빈칸을 채워 유효 금액 합계와 고유 태그 수를 출력해보세요.",
      "prompt_en": "Complete the safe integer parser and Ledger class to print the valid amount sum and unique tag count.",
      "hint_ko": "숫자가 아닌 문자열을 정수로 바꿀 때 발생하는 예외 이름, 빈 결과를 뜻하는 특수 상수, 그리고 리스트 끝에 요소를 덧붙이는 메서드를 차례로 적어보세요.",
      "hint_en": "Specify the exception raised by invalid integer parsing, the empty-result singleton constant, and the list end-insertion method.",
      "templateCode": "def parse_num(raw):\n    try:\n        return int(raw)\n    except §§§§§§§§§§:\n        return None\nclass Ledger:\n    def __init__(self):\n        self.records = []\n        self.tags = set()\n    def add(self, tag, raw):\n        val = parse_num(raw)\n        if val is not §§§§:\n            self.records.§§§§§§(val)\n            self.tags.add(tag)\nlg = Ledger()\npairs = [(\"a\", \"120\"), (\"e\", \"x\"), (\"a\", \"80\")]\nfor t, r in pairs:\n    lg.add(t, r)\nprint(sum(lg.records), len(lg.tags))",
      "targetCode": "def parse_num(raw):\n    try:\n        return int(raw)\n    except ValueError:\n        return None\nclass Ledger:\n    def __init__(self):\n        self.records = []\n        self.tags = set()\n    def add(self, tag, raw):\n        val = parse_num(raw)\n        if val is not None:\n            self.records.append(val)\n            self.tags.add(tag)\nlg = Ledger()\npairs = [(\"a\", \"120\"), (\"e\", \"x\"), (\"a\", \"80\")]\nfor t, r in pairs:\n    lg.add(t, r)\nprint(sum(lg.records), len(lg.tags))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "200 1"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "이름과 점수를 입력받아 저장한 뒤 구간별 등급과 점수를 튜플로 반환하도록 빈칸을 채워보세요. (예: Leo 95 -> ('S', 95))",
      "prompt_en": "Store input user and score in Ranker, classify the grade tier, and return (grade, pt) as a tuple.",
      "hint_ko": "딕셔너리에 없는 항목을 대괄호로 찾을 때 발생하는 예외 이름, 앞선 조건이 거짓일 때 추가 조건을 검사하는 키워드, 그리고 튜플 결과를 호출부로 돌려주는 키워드를 채워보세요.",
      "hint_en": "Enter the missing-mapping lookup exception class, the chained conditional branch keyword, and the keyword that sends the tuple back to the caller.",
      "templateCode": "class Ranker:\n    def __init__(self):\n        self.table = {}\n    def save(self, name, pt):\n        self.table[name] = pt\n    def check(self, name):\n        try:\n            pt = self.table[name]\n        except §§§§§§§§:\n            return (\"NONE\", 0)\n        if pt >= 90:\n            grade = \"S\"\n        §§§§ pt >= 70:\n            grade = \"A\"\n        else:\n            grade = \"B\"\n        §§§§§§ (grade, pt)\nrk = Ranker()\nu, s = input().split()\nrk.save(u, int(s))\nprint(rk.check(u))",
      "targetCode": "class Ranker:\n    def __init__(self):\n        self.table = {}\n    def save(self, name, pt):\n        self.table[name] = pt\n    def check(self, name):\n        try:\n            pt = self.table[name]\n        except KeyError:\n            return (\"NONE\", 0)\n        if pt >= 90:\n            grade = \"S\"\n        elif pt >= 70:\n            grade = \"A\"\n        else:\n            grade = \"B\"\n        return (grade, pt)\nrk = Ranker()\nu, s = input().split()\nrk.save(u, int(s))\nprint(rk.check(u))",
      "testCases": [
        {
          "id": 1,
          "input": "Leo 95",
          "expectedOutput": "('S', 95)"
        },
        {
          "id": 2,
          "input": "Mia 75",
          "expectedOutput": "('A', 75)"
        },
        {
          "id": 3,
          "input": "Kai 50",
          "expectedOutput": "('B', 50)"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "인스턴스 메서드 정의에 필수 첫 매개변수가 빠져 호출 시 오류가 발생합니다. 코드를 고쳐 Keyboard=9000을 출력해보세요.",
      "prompt_en": "Fix the TypeError caused by omitting the required first parameter in Order.summary() to print Keyboard=9000.",
      "hint_ko": "클래스 내부의 인스턴스 메서드는 외부에서 전달하는 인자가 없더라도 호출한 객체 자신을 받는 첫 번째 매개변수가 반드시 선언되어 있어야 합니다.",
      "hint_en": "Every instance method inside a class must declare the first parameter that receives the calling object itself, even when called with no arguments.",
      "templateCode": "class Order:\n    def __init__(self, item, price, qty=1):\n        self.item = item\n        self.total = price * qty\n    def summary():\n        return f\"{self.item}={self.total}\"\no = Order(\"Keyboard\", 4500, 2)\nprint(o.summary())",
      "targetCode": "class Order:\n    def __init__(self, item, price, qty=1):\n        self.item = item\n        self.total = price * qty\n    def summary(self):\n        return f\"{self.item}={self.total}\"\no = Order(\"Keyboard\", 4500, 2)\nprint(o.summary())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Keyboard=9000"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "배터리 잔량이 15 이상인 동안 반복 차감해야 하는데 비교 연산자가 잘못되어 반복이 실행되지 않습니다. 고쳐서 3 5를 출력해보세요.",
      "prompt_en": "Fix the wrong comparison operator in the while loop condition so Battery(50) drains by 15 three times to print 3 5.",
      "hint_ko": "초기 잔량이 기준값보다 큰 상태에서 시작하는데 반복 조건의 부등호 방향이 반대로 되어 있어 루프가 한 번도 실행되지 않고 있습니다.",
      "hint_en": "The starting energy is above the threshold, yet the inequality direction in the loop condition is reversed, preventing the loop from running.",
      "templateCode": "class Battery:\n    def __init__(self, energy=50):\n        self.energy = energy\n    def use(self, cost):\n        self.energy -= cost\nb = Battery(50)\ncnt = 0\nwhile b.energy <= 15:\n    b.use(15)\n    cnt += 1\nprint(cnt, b.energy)",
      "targetCode": "class Battery:\n    def __init__(self, energy=50):\n        self.energy = energy\n    def use(self, cost):\n        self.energy -= cost\nb = Battery(50)\ncnt = 0\nwhile b.energy >= 15:\n    b.use(15)\n    cnt += 1\nprint(cnt, b.energy)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 5"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "딕셔너리 속성에 없는 상품을 조회할 때 발생하는 예외 종류를 잘못 지정해 오류가 납니다. 알맞게 고쳐 500 0을 출력해보세요.",
      "prompt_en": "Fix the wrong exception class in Shop.get_price so missing product keys safely return 0 and print 500 0.",
      "hint_ko": "나눗셈이 아니라 딕셔너리에 없는 이름을 대괄호로 조회하고 있으므로, 실제 발생하는 조회 오류 종류에 맞게 예외 클래스를 고쳐보세요.",
      "hint_en": "The code performs a dictionary bracket lookup rather than division, so update the handler to catch the missing-entry lookup exception instead.",
      "templateCode": "class Shop:\n    def __init__(self):\n        self.prices = {\"pen\": 500}\n    def get_price(self, name):\n        try:\n            return self.prices[name]\n        except ZeroDivisionError:\n            return 0\ns = Shop()\nprint(s.get_price(\"pen\"), s.get_price(\"book\"))",
      "targetCode": "class Shop:\n    def __init__(self):\n        self.prices = {\"pen\": 500}\n    def get_price(self, name):\n        try:\n            return self.prices[name]\n        except KeyError:\n            return 0\ns = Shop()\nprint(s.get_price(\"pen\"), s.get_price(\"book\"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "500 0"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "점수 두 개를 추가한 성적표 인스턴스 코드 아래에 한 줄을 추가하여 요약 보고서를 출력해보세요. (출력 예: Mia:95)",
      "prompt_en": "Add one line below the ScoreCard updates to call report() and print the summary string (output: Mia:95).",
      "hint_ko": "성적표 인스턴스의 요약 메서드는 화면에 직접 찍지 않고 문자열만 돌려주므로, 그 호출 결과를 출력 함수로 감싸 한 줄로 작성해보세요.",
      "hint_en": "Because the summary method on the scorecard instance only produces a string without displaying it, pass its call directly into the output function.",
      "templateCode": "class ScoreCard:\n    def __init__(self, name):\n        self.name = name\n        self.pts = []\n    def add(self, p):\n        self.pts.append(p)\n    def report(self):\n        return f\"{self.name}:{sum(self.pts)}\"\nsc = ScoreCard(\"Mia\")\nsc.add(40)\nsc.add(55)\n§§§§§§§§§§§§§§§§§§",
      "targetCode": "class ScoreCard:\n    def __init__(self, name):\n        self.name = name\n        self.pts = []\n    def add(self, p):\n        self.pts.append(p)\n    def report(self):\n        return f\"{self.name}:{sum(self.pts)}\"\nsc = ScoreCard(\"Mia\")\nsc.add(40)\nsc.add(55)\nprint(sc.report())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Mia:95"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "안전 나눗셈 인스턴스를 생성한 코드 아래에 한 줄을 추가하여 입력값을 메서드에 전달한 결과를 출력해보세요. (예: 25 -> 4)",
      "prompt_en": "Add one line below sd = SafeDiv(100) to pass input() into sd.calc() and print the result.",
      "hint_ko": "표준 입력으로 읽은 문자열을 나눗셈 인스턴스의 계산 메서드 인자로 바로 넘기고, 반환된 정수를 화면에 출력하도록 한 줄로 연결해보세요.",
      "hint_en": "Read a line from standard input, pass it straight into the divider instance's calculation method, and display the resulting integer.",
      "templateCode": "class SafeDiv:\n    def __init__(self, base):\n        self.base = base\n    def calc(self, raw):\n        try:\n            return self.base // int(raw)\n        except ZeroDivisionError:\n            return -1\n        except ValueError:\n            return -2\nsd = SafeDiv(100)\n§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "class SafeDiv:\n    def __init__(self, base):\n        self.base = base\n    def calc(self, raw):\n        try:\n            return self.base // int(raw)\n        except ZeroDivisionError:\n            return -1\n        except ValueError:\n            return -2\nsd = SafeDiv(100)\nprint(sd.calc(input()))",
      "testCases": [
        {
          "id": 1,
          "input": "25",
          "expectedOutput": "4"
        },
        {
          "id": 2,
          "input": "0",
          "expectedOutput": "-1"
        },
        {
          "id": 3,
          "input": "abc",
          "expectedOutput": "-2"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "기본값 보너스와 리스트 속성, 튜플 반환 메서드를 결합한 Team 클래스의 실행 결과를 선택해보세요.",
      "prompt_en": "Select the output of the Team class combining default bonus scores, list appends, and tuple returns.",
      "hint_ko": "두 번째 인자를 생략한 팀은 기본 보너스 점수로 리스트를 시작하고, 직접 전달한 팀은 전달된 값으로 시작한 뒤 각각 새로 얻은 점수가 합산되는 과정을 따라가 보세요.",
      "hint_en": "Trace which initial list value each instance receives—default versus explicit argument—before appending the new points and summing each list.",
      "targetCode": "class Team:\n    def __init__(self, name, bonus=10):\n        self.name = name\n        self.scores = [bonus]\n    def win(self, pt):\n        self.scores.append(pt)\n        return (self.name, sum(self.scores))\na = Team(\"Red\")\nb = Team(\"Blue\", 20)\nr1 = a.win(30)\nr2 = b.win(15)\nprint(f\"{r1[0]}:{r1[1]} {r2[0]}:{r2[1]}\")",
      "choices": [
        "Red:40 Blue:35",
        "Red:30 Blue:15",
        "Red:40 Blue:75",
        "Red:30 Blue:35"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Red:40 Blue:35"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "딕셔너리 재고 차감과 조건문, 예외 처리를 결합한 Inv 클래스 코드의 최종 출력 결과를 선택해보세요.",
      "prompt_en": "Select the final output of the Inv class combining dictionary mutation, conditionals, and KeyError handling.",
      "hint_ko": "재고가 양수인 항목, 재고가 0인 항목, 그리고 딕셔너리에 아예 없는 항목을 순서대로 호출했을 때 각각 어떤 분기나 예외 블록을 타는지와 차감된 뒤 남은 수량을 확인해보세요.",
      "hint_en": "Trace each of the three lookups—positive stock, zero stock, and a missing entry—along with the updated count left in the dictionary afterward.",
      "targetCode": "class Inv:\n    def __init__(self):\n        self.box = {\"hp\": 2, \"mp\": 0}\n    def use(self, key):\n        try:\n            if self.box[key] > 0:\n                self.box[key] -= 1\n                return True\n            return False\n        except KeyError:\n            return None\niv = Inv()\nres = []\nfor k in [\"hp\", \"mp\", \"gold\"]:\n    res.append(iv.use(k))\nprint(res, iv.box[\"hp\"])",
      "choices": [
        "[True, False, None] 1",
        "[True, True, False] 1",
        "[True, False, False] 2",
        "[True, None, None] 1"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[True, False, None] 1"
        }
      ]
    }
  ]
};
