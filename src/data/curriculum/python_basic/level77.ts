import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_77: PracticeRound = {
  "id": "py-basic-r77",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 77,
  "title_ko": "77레벨: 클래스와 객체 필수 기초 종합 문제풀이",
  "title_en": "Level 77: Section 9 Comprehensive Review",
  "description_ko": "클래스 정의, __init__ 생성자, self 속성 제어, 값 반환 메서드, 다중 인스턴스와 컬렉션 속성을 종합 점검합니다.",
  "description_en": "Comprehensive review of class definitions, __init__, self attributes, value-returning methods, multiple instances, and collection attributes.",
  "totalQuestions": 10,
  "unlockedBlocks": [],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 생성자와 상태 변경·요약 반환 메서드를 갖춘 캐릭터 클래스의 빈칸을 채워 결과를 출력해보세요.",
      "prompt_en": "[Fill Blank] Complete the initializer, attribute update, and boolean survival check in the Character class.",
      "hint_ko": "생성자 특수 메서드 이름과 체력 차감 복합 대입 연산자, 그리고 값을 호출부로 돌려주는 키워드를 확인하세요.",
      "hint_en": "Check the double-underscore initializer name, the subtraction compound operator, and the return keyword.",
      "templateCode": "class Character:\n    def §§§§§§§§§(self, name, hp=100):\n        self.name = name\n        self.hp = hp\n    def hit(self, dmg):\n        self.hp §§§ dmg\n        if self.hp < 0:\n            self.hp = 0\n    def status(self):\n        §§§§§§§ f\"{self.name}:{self.hp}:{bool(self.hp)}\"\nc = Character(\"Aria\", 50)\nc.hit(int(input()))\nprint(c.status())",
      "targetCode": "class Character:\n    def __init__(self, name, hp=100):\n        self.name = name\n        self.hp = hp\n    def hit(self, dmg):\n        self.hp -= dmg\n        if self.hp < 0:\n            self.hp = 0\n    def status(self):\n        return f\"{self.name}:{self.hp}:{bool(self.hp)}\"\nc = Character(\"Aria\", 50)\nc.hit(int(input()))\nprint(c.status())",
      "testCases": [
        {
          "id": 1,
          "input": "20",
          "expectedOutput": "Aria:30:True"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 리스트와 집합 속성을 함께 관리하는 출석부 클래스의 빈칸을 채워 총 기록 수와 고유 인원수를 출력해보세요.",
      "prompt_en": "[Fill Blank] Complete the Attendance class to track all check-ins in a list and unique names in a set.",
      "hint_ko": "빈 리스트 초기화 기호와 리스트 끝에 원소를 추가하는 메서드, 그리고 집합에 원소를 추가하는 메서드를 확인하세요.",
      "hint_en": "Use empty brackets for the list, the list append method, and the set add method.",
      "templateCode": "class Attendance:\n    def __init__(self):\n        self.logs = §§§\n        self.members = set()\n    def check_in(self, name):\n        self.logs.§§§§§§§(name)\n        self.members.§§§§(name)\na = Attendance()\nfor u in [\"Kim\", \"Lee\", \"Kim\", \"Park\"]:\n    a.check_in(u)\nprint(len(a.logs), len(a.members))",
      "targetCode": "class Attendance:\n    def __init__(self):\n        self.logs = []\n        self.members = set()\n    def check_in(self, name):\n        self.logs.append(name)\n        self.members.add(name)\na = Attendance()\nfor u in [\"Kim\", \"Lee\", \"Kim\", \"Park\"]:\n    a.check_in(u)\nprint(len(a.logs), len(a.members))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "4 3"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 과목별 점수를 딕셔너리 속성에 저장하고 평균과 최고점을 튜플로 반환하는 메서드를 완성해보세요.",
      "prompt_en": "[Fill Blank] Complete the GradeCard class so summary() returns a tuple of the total and maximum score.",
      "hint_ko": "빈 딕셔너리 초기화 기호와 점수 리스트의 합계·최댓값 내장 함수를 조합해 튜플로 반환하세요.",
      "hint_en": "Initialize an empty dict {}, then use sum() and max() on the collected score list.",
      "templateCode": "class GradeCard:\n    def __init__(self):\n        self.scores = §§§\n    def add(self, sub, pt):\n        self.scores[sub] = pt\n    def summary(self):\n        vals = []\n        for k in self.scores:\n            vals.append(self.scores[k])\n        return §§§§(vals), §§§§(vals)\ng = GradeCard()\ng.add(\"Kor\", 80)\ng.add(\"Math\", 95)\ng.add(\"Eng\", 90)\ntot, top = g.summary()\nprint(f\"{tot}/{top}\")",
      "targetCode": "class GradeCard:\n    def __init__(self):\n        self.scores = {}\n    def add(self, sub, pt):\n        self.scores[sub] = pt\n    def summary(self):\n        vals = []\n        for k in self.scores:\n            vals.append(self.scores[k])\n        return sum(vals), max(vals)\ng = GradeCard()\ng.add(\"Kor\", 80)\ng.add(\"Math\", 95)\ng.add(\"Eng\", 90)\ntot, top = g.summary()\nprint(f\"{tot}/{top}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "265/95"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 주문 총액을 계산할 때 단가와 수량을 곱하지 않고 더해서 잘못된 금액이 나오는 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the arithmetic bug in Order.__init__ so self.total multiplies price by qty.",
      "hint_ko": "단가(price)와 수량(qty)으로 총액을 구할 때는 덧셈이 아니라 곱셈 연산자를 사용해야 합니다.",
      "hint_en": "Multiply price by qty using * instead of + when computing self.total.",
      "templateCode": "class Order:\n    def __init__(self, item, price, qty=1):\n        self.item = item\n        self.total = price + qty\n    def receipt(self):\n        return f\"{self.item}={self.total}\"\no = Order(\"Mouse\", 4500, 2)\nprint(o.receipt())",
      "targetCode": "class Order:\n    def __init__(self, item, price, qty=1):\n        self.item = item\n        self.total = price * qty\n    def receipt(self):\n        return f\"{self.item}={self.total}\"\no = Order(\"Mouse\", 4500, 2)\nprint(o.receipt())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Mouse=9000"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 배터리 잔량이 15 이상인 동안 반복 사용해야 하는데 조건식 부등호가 반대여서 루프가 돌지 않는 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the while loop comparison operator so Battery(50) drains 15 at a time while energy is at least 15.",
      "hint_ko": "초기 에너지가 50이므로 잔량이 15 이상(>=)인 동안 반복해야 루프가 정상 실행됩니다.",
      "hint_en": "Change <= to >= in the while condition so the loop continues while b.energy is at least 15.",
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
      "prompt_ko": "[틀린 곳 수정] 생성자에서 필수 매개변수와 기본값 매개변수의 순서가 잘못되어 발생하는 문법 오류를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the SyntaxError in __init__ caused by placing a default parameter before a required parameter.",
      "hint_ko": "함수와 생성자 선언에서는 기본값이 없는 필수 매개변수가 항상 기본값 매개변수보다 앞에 와야 합니다.",
      "hint_en": "Place the required parameter name before the default parameter bonus=10 in __init__.",
      "templateCode": "class Member:\n    def __init__(self, bonus=10, name):\n        self.name = name\n        self.bonus = bonus\nm = Member(\"Kai\")\nprint(m.name, m.bonus)",
      "targetCode": "class Member:\n    def __init__(self, name, bonus=10):\n        self.name = name\n        self.bonus = bonus\nm = Member(\"Kai\")\nprint(m.name, m.bonus)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Kai 10"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 성적표 인스턴스 sc의 report() 메서드를 호출해 반환값을 변수 res에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Call sc.report() and store its return value in variable res.",
      "hint_ko": "변수 res에 인스턴스 sc의 report 메서드 호출 결과를 대입하세요.",
      "hint_en": "Assign the result of calling sc.report() to variable res.",
      "templateCode": "class ScoreCard:\n    def __init__(self, name):\n        self.name = name\n        self.pts = []\n    def add(self, p):\n        self.pts.append(p)\n    def report(self):\n        return f\"{self.name}:{sum(self.pts)}\"\nsc = ScoreCard(\"Mia\")\nsc.add(40)\nsc.add(55)\n§§§§§§§§§§§§§§§§§§\nprint(res)",
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
      "prompt_ko": "[한 줄 완성] 메서드 안에서 self.items 리스트의 원소 개수를 return하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the line inside count(self) that returns the length of self.items.",
      "hint_ko": "반환 키워드와 길이를 구하는 내장 함수를 조합해 self.items의 개수를 돌려주세요.",
      "hint_en": "Return len(self.items) inside the count method.",
      "templateCode": "class Box:\n    def __init__(self):\n        self.items = []\n    def add(self, x):\n        self.items.append(x)\n    def count(self):\n        §§§§§§§§§§§§§§§§§§§§§§§\nb = Box()\nfor w in input().split():\n    b.add(w)\nprint(b.count())",
      "targetCode": "class Box:\n    def __init__(self):\n        self.items = []\n    def add(self, x):\n        self.items.append(x)\n    def count(self):\n        return len(self.items)\nb = Box()\nfor w in input().split():\n    b.add(w)\nprint(b.count())",
      "testCases": [
        {
          "id": 1,
          "input": "pen book note",
          "expectedOutput": "3"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 기본값 보너스와 리스트 속성, 튜플 반환 메서드를 결합한 Team 클래스의 실행 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the output of the Team class combining default bonus scores, list appends, and tuple returns.",
      "hint_ko": "두 번째 인자를 생략한 팀과 직접 전달한 팀의 초기 리스트 원소가 각각 무엇인지 확인한 뒤 합계를 계산하세요.",
      "hint_en": "Check the initial list element for each instance—default 10 vs passed 20—before appending and summing.",
      "targetCode": "class Team:\n    def __init__(self, name, bonus=10):\n        self.name = name\n        self.scores = [bonus]\n    def win(self, pt):\n        self.scores.append(pt)\n        return (self.name, sum(self.scores))\na = Team(\"Red\")\nb = Team(\"Blue\", 20)\nr1 = a.win(30)\nr2 = b.win(15)\nprint(f\"{r1[0]}:{r1[1]} {r2[0]}:{r2[1]}\")",
      "choices": [
        "Red:40 Blue:35",
        "Red:30 Blue:15",
        "Red:40 Blue:25",
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
      "prompt_ko": "[출력 결과 예측] 딕셔너리 재고 차감과 in 포함 검사, 리스트 누적을 결합한 Inv 클래스 코드의 출력 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the final output of the Inv class combining dictionary lookups, membership checks, and list appends.",
      "hint_ko": "딕셔너리에 키가 있는지, 그리고 재고가 0보다 큰지에 따라 각 품목에서 어떤 값이 반환되는지 추적해보세요.",
      "hint_en": "Trace the three calls for positive stock, zero stock, and a missing key, then check the remaining hp count.",
      "targetCode": "class Inv:\n    def __init__(self):\n        self.box = {\"hp\": 2, \"mp\": 0}\n    def use(self, key):\n        if key not in self.box:\n            return None\n        if self.box[key] > 0:\n            self.box[key] -= 1\n            return True\n        return False\niv = Inv()\nres = []\nfor k in [\"hp\", \"mp\", \"gold\"]:\n    res.append(iv.use(k))\nprint(res, iv.box[\"hp\"])",
      "choices": [
        "[True, False, None] 1",
        "[True, True, None] 1",
        "[True, False, False] 2",
        "[True, False, None] 2"
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
