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
  "unlockedBlocks": [],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 생성자와 생존 논리값 변환이 포함된 Player 클래스의 빈칸을 채워 결과를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the initializer and boolean survival conversion to print Aria's status.",
      "hint_ko": "객체 생성 시 자동 실행되는 특수 메서드 __init__과 정수 체력을 참·거짓으로 바꾸는 내장 함수 bool을 채우세요.",
      "hint_en": "Fill in the special constructor method name __init__ and the built-in truth-value converter bool.",
      "templateCode": "class Player:\n    def §§§§§§§§(self, name, hp=100):\n        self.name = name\n        self.hp = hp\n    def hit(self, dmg):\n        self.hp -= dmg\n        if self.hp < 0:\n            self.hp = 0\n    def info(self):\n        ok = §§§§(self.hp)\n        return f\"{self.name}:{self.hp}:{ok}\"\np = Player(\"Aria\", 50)\np.hit(int(input()))\nprint(p.info())",
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
      "prompt_ko": "[빈칸 채우기] 안전 정수 변환 함수와 Ledger 클래스의 빈칸을 채워 유효 금액 합계와 고유 태그 수를 출력해보세요.",
      "prompt_en": "[Fill Blank] Complete the safe integer parser and Ledger class to print valid amount sum and unique tag count.",
      "hint_ko": "숫자가 아닌 문자열 변환 시 발생하는 ValueError 예외와 리스트 끝에 요소를 덧붙이는 append 메서드를 적으세요.",
      "hint_en": "Specify ValueError for invalid integer parsing and the list append method.",
      "templateCode": "def parse_num(raw):\n    try:\n        return int(raw)\n    except §§§§§§§§§§:\n        return None\nclass Ledger:\n    def __init__(self):\n        self.records = []\n        self.tags = set()\n    def add(self, tag, raw):\n        val = parse_num(raw)\n        if val is not None:\n            self.records.§§§§§§(val)\n            self.tags.add(tag)\nlg = Ledger()\npairs = [(\"a\", \"120\"), (\"e\", \"x\"), (\"a\", \"80\")]\nfor t, r in pairs:\n    lg.add(t, r)\nprint(sum(lg.records), len(lg.tags))",
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
      "prompt_ko": "[빈칸 채우기] 이름과 점수를 저장한 뒤 구간별 등급과 점수를 튜플로 반환하도록 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Store input user and score in Ranker, classify the grade tier, and return (grade, pt).",
      "hint_ko": "딕셔너리에 없는 항목 조회 시 발생하는 KeyError와 튜플 결과를 호출부로 돌려주는 return 키워드를 채우세요.",
      "hint_en": "Enter KeyError for missing dictionary lookup and return to send the tuple back to the caller.",
      "templateCode": "class Ranker:\n    def __init__(self):\n        self.table = {}\n    def save(self, name, pt):\n        self.table[name] = pt\n    def check(self, name):\n        try:\n            pt = self.table[name]\n        except §§§§§§§§:\n            return (\"NONE\", 0)\n        if pt >= 90:\n            grade = \"S\"\n        elif pt >= 70:\n            grade = \"A\"\n        else:\n            grade = \"B\"\n        §§§§§§ (grade, pt)\nrk = Ranker()\nu, s = input().split()\nrk.save(u, int(s))\nprint(rk.check(u))",
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
      "prompt_ko": "[틀린 곳 수정] 총 주문 금액을 단가와 수량의 곱셈 대신 덧셈으로 잘못 계산한 버그를 고쳐 Keyboard=9000을 출력해보세요.",
      "prompt_en": "[Fix Bug] Fix the arithmetic bug in Order.__init__ so self.total multiplies price by qty to print Keyboard=9000.",
      "hint_ko": "총액(self.total)은 단가(price)와 수량(qty)을 곱해야 하므로 + 연산자를 * 로 수정하세요.",
      "hint_en": "Multiply price by qty using * instead of + when computing self.total.",
      "templateCode": "class Order:\n    def __init__(self, item, price, qty=1):\n        self.item = item\n        self.total = price + qty\n    def summary(self):\n        return f\"{self.item}={self.total}\"\no = Order(\"Keyboard\", 4500, 2)\nprint(o.summary())",
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
      "prompt_ko": "[틀린 곳 수정] 배터리 잔량이 15 이상인 동안 반복 차감하도록 잘못된 비교 연산자를 고쳐 3 5를 출력해보세요.",
      "prompt_en": "[Fix Bug] Fix the wrong comparison operator in the while condition so Battery(50) drains three times to print 3 5.",
      "hint_ko": "초기 잔량이 기준값보다 큰 상태에서 시작하는데 부등호 방향이 반대여서 루프가 실행되지 않습니다.",
      "hint_en": "Flip the inequality in the while condition from <= to >= so the loop runs while energy is at least 15.",
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
      "prompt_ko": "[틀린 곳 수정] 리스트 속성 범위를 벗어난 인덱스를 조회할 때 잡아야 할 예외 이름을 고쳐 pen NONE을 출력해보세요.",
      "prompt_en": "[Fix Bug] Fix the exception class in Shop.get_item so out-of-range list indices safely return NONE.",
      "hint_ko": "리스트의 범위를 벗어난 인덱스를 대괄호로 조회할 때는 ValueError가 아니라 IndexError가 발생합니다.",
      "hint_en": "Catch IndexError instead of ValueError when indexing a list attribute.",
      "templateCode": "class Shop:\n    def __init__(self):\n        self.items = [\"pen\", \"book\"]\n    def get_item(self, idx):\n        try:\n            return self.items[idx]\n        except ValueError:\n            return \"NONE\"\ns = Shop()\nprint(s.get_item(0), s.get_item(5))",
      "targetCode": "class Shop:\n    def __init__(self):\n        self.items = [\"pen\", \"book\"]\n    def get_item(self, idx):\n        try:\n            return self.items[idx]\n        except IndexError:\n            return \"NONE\"\ns = Shop()\nprint(s.get_item(0), s.get_item(5))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "pen NONE"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 성적표 인스턴스 sc의 report() 메서드를 호출해 반환값을 변수 res에 저장하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Call sc.report() and store the returned summary string in res.",
      "hint_ko": "res = sc.report() 형태로 요약 메서드의 반환값을 변수 res에 저장하세요.",
      "hint_en": "Assign the string returned by sc.report() to res.",
      "templateCode": "class ScoreCard:\n    def __init__(self, name):\n        self.name = name\n        self.pts = []\n    def add(self, p):\n        self.pts.append(p)\n    def report(self):\n        return f\"{self.name}:{sum(self.pts)}\"\nsc = ScoreCard(\"Mia\")\nsc.add(40)\nsc.add(55)\n§§§§§§§§§§§§§§§§§\nprint(res)",
      "targetCode": "class ScoreCard:\n    def __init__(self, name):\n        self.name = name\n        self.pts = []\n    def add(self, p):\n        self.pts.append(p)\n    def report(self):\n        return f\"{self.name}:{sum(self.pts)}\"\nsc = ScoreCard(\"Mia\")\nsc.add(40)\nsc.add(55)\nres = sc.report()\nprint(res)",
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
      "prompt_ko": "[한 줄 완성] 안전 나눗셈 인스턴스 sd의 calc 메서드에 input()을 전달한 결과를 ans에 저장해보세요.",
      "prompt_en": "[Complete Line] Pass input() into sd.calc() and assign the returned integer to ans.",
      "hint_ko": "ans = sd.calc(input()) 형태로 표준 입력을 바로 calc 메서드 인자로 넘겨 저장하세요.",
      "hint_en": "Write ans = sd.calc(input()) to store the calculated result.",
      "templateCode": "class SafeDiv:\n    def __init__(self, base):\n        self.base = base\n    def calc(self, raw):\n        try:\n            return self.base // int(raw)\n        except ZeroDivisionError:\n            return -1\n        except ValueError:\n            return -2\nsd = SafeDiv(100)\n§§§§§§§§§§§§§§§§§§§§§§\nprint(ans)",
      "targetCode": "class SafeDiv:\n    def __init__(self, base):\n        self.base = base\n    def calc(self, raw):\n        try:\n            return self.base // int(raw)\n        except ZeroDivisionError:\n            return -1\n        except ValueError:\n            return -2\nsd = SafeDiv(100)\nans = sd.calc(input())\nprint(ans)",
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
      "prompt_ko": "[출력 결과 예측] 기본값 보너스와 리스트 속성, 튜플 반환 메서드를 결합한 Team 클래스의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the output of the Team class combining default bonus scores, list appends, and tuple returns.",
      "hint_ko": "두 번째 인자를 생략한 팀은 기본 보너스 10으로 시작하고, 직접 전달한 팀은 20으로 시작한 뒤 새 점수가 합산됩니다.",
      "hint_en": "Trace which initial list value each instance receives—default versus explicit argument—before appending and summing.",
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
      "prompt_ko": "[출력 결과 예측] 딕셔너리 재고 차감과 조건문, 예외 처리를 결합한 Inv 클래스 코드의 최종 출력 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the final output of the Inv class combining dictionary mutation, conditionals, and KeyError.",
      "hint_ko": "재고가 양수인 항목, 재고가 0인 항목, 그리고 딕셔너리에 없는 항목을 순서대로 호출했을 때 반환값과 남은 수량을 확인하세요.",
      "hint_en": "Trace each of the three lookups—positive stock, zero stock, and a missing entry—along with the remaining hp count.",
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
