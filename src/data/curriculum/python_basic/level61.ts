import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_61: PracticeRound = {
  "id": "py-basic-r61",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 61,
  "title_ko": "61레벨: 인스턴스 메서드로 self 상태 변경·반환하기",
  "title_en": "Level 61: Instance Methods Mutating & Returning self State",
  "description_ko": "클래스 내부에 인스턴스 메서드를 정의하여 self 속성을 안전하게 변경하고 계산된 값을 반환합니다.",
  "description_en": "Define instance methods inside classes to safely mutate self attributes and return computed values.",
  "totalQuestions": 15,
  "unlockedBlocks": [
    "class",
    "def",
    "method",
    "variable",
    "print",
    "input",
    "type",
    "if",
    "while",
    "try"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 인스턴스 메서드 heal(self, amount)로 self.hp 값을 증가시키는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the Hero class with an instance method heal(self, amount) that increases self.hp.",
      "hint_ko": "메서드를 호출할 때는 self를 직접 넘기지 않고 h.heal(25)처럼 나머지 인자만 전달하면 됩니다.",
      "hint_en": "When calling a method as h.heal(25), Python passes self automatically—you only supply the remaining arguments.",
      "targetCode": "class Hero:\n    def __init__(self, hp=100):\n        self.hp = hp\n    def heal(self, amount):\n        self.hp += amount\nh = Hero(80)\nh.heal(25)\nprint(h.hp)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "105"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 영웅의 이름과 체력 문자열을 반환하는 메서드를 완성하고 호출해 출력해보세요. (출력 예: Aria:120)",
      "prompt_en": "[Fill Blank] Complete and call the instance method that returns the formatted status string Aria:120.",
      "hint_ko": "메서드 선언부 괄호에는 인스턴스 자신을 뜻하는 self를 적고, 마지막 줄 점 뒤에는 info 메서드 이름을 적으세요.",
      "hint_en": "Declare the instance reference parameter self on line 5, and invoke the info method on the hero object on line 8.",
      "templateCode": "class Hero:\n    def __init__(self, name, hp=100):\n        self.name = name\n        self.hp = hp\n    def info(§§§§):\n        return f\"{self.name}:{self.hp}\"\nh = Hero(\"Aria\", 120)\nprint(h.§§§§())",
      "targetCode": "class Hero:\n    def __init__(self, name, hp=100):\n        self.name = name\n        self.hp = hp\n    def info(self):\n        return f\"{self.name}:{self.hp}\"\nh = Hero(\"Aria\", 120)\nprint(h.info())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Aria:120"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 상태를 변경하는 메서드(heal)와 문자열을 반환하는 메서드(info)를 차례대로 호출해보세요.",
      "prompt_en": "[Block] Assemble a class with both a state-mutating method (heal) and a value-returning method (info).",
      "hint_ko": "먼저 호출한 메서드가 변경한 self.hp 값은 같은 인스턴스의 다른 메서드에서도 그대로 공유됩니다.",
      "hint_en": "Changes made to self.hp by one method persist on the instance and are immediately visible to subsequent method calls.",
      "targetCode": "class Hero:\n    def __init__(self, name, hp=90):\n        self.name = name\n        self.hp = hp\n    def heal(self, val):\n        self.hp += val\n    def info(self):\n        return f\"{self.name}:{self.hp}\"\nh = Hero(\"Leo\")\nh.heal(30)\nprint(h.info())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Leo:120"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 드론의 좌표를 이동시킨 뒤 새 위치를 튜플로 돌려주는 메서드를 완성하고 출력해보세요.",
      "prompt_en": "[Fill Blank] Complete the method that updates Drone coordinates and returns them as a tuple, then call it.",
      "hint_ko": "첫 빈칸에는 새 좌표 튜플을 반환하는 return 키워드를, 둘째 빈칸에는 이동 메서드 이름 move를 적으세요.",
      "hint_en": "Send back the updated coordinate tuple with return on line 8, and invoke move on line 10.",
      "templateCode": "class Drone:\n    def __init__(self, x=0, y=0):\n        self.x = x\n        self.y = y\n    def move(self, dx, dy):\n        self.x += dx\n        self.y += dy\n        §§§§§§ (self.x, self.y)\nd = Drone(2, 3)\npos = d.§§§§(4, -1)\nprint(pos)",
      "targetCode": "class Drone:\n    def __init__(self, x=0, y=0):\n        self.x = x\n        self.y = y\n    def move(self, dx, dy):\n        self.x += dx\n        self.y += dy\n        return (self.x, self.y)\nd = Drone(2, 3)\npos = d.move(4, -1)\nprint(pos)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "(6, 2)"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 메서드 안의 if로 self.stock을 검사해 재고를 차감하고 반환하는 코드를 조립해보세요.",
      "prompt_en": "[Block] Assemble Machine.pull to inspect self.stock with if and decrement state only when available.",
      "hint_ko": "if 블록 안에서 return이 실행되면 그 즉시 메서드가 끝나므로 마지막 줄의 return None이 대체 반환문 역할을 합니다.",
      "hint_en": "Because return inside the if block exits the method immediately, the final return None acts as the fallback.",
      "targetCode": "class Machine:\n    def __init__(self, stock):\n        self.stock = stock\n    def pull(self):\n        if self.stock > 0:\n            self.stock -= 1\n            return \"Drink\"\n        return None\nm = Machine(int(input()))\nprint(m.pull(), m.stock)",
      "testCases": [
        {
          "id": 1,
          "input": "2",
          "expectedOutput": "Drink 1"
        },
        {
          "id": 2,
          "input": "0",
          "expectedOutput": "None 0"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 잔액이 결제 금액 이상일 때만 차감하고 성공 여부를 반환하도록 지갑 메서드의 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the conditional guard and deduction operator so Wallet.pay deducts cost only when balance suffices.",
      "hint_ko": "조건문에서는 인스턴스 자신의 잔액 속성 self.balance를 확인하고, 아랫줄에서는 -= 연산자를 적으세요.",
      "hint_en": "Compare the instance's own self.balance attribute against the cost on line 5, and deduct the cost using -= on line 6.",
      "templateCode": "class Wallet:\n    def __init__(self, balance):\n        self.balance = balance\n    def pay(self, cost):\n        if §§§§§§§§§§§§ >= cost:\n            self.balance §§ cost\n            return True\n        return False\nw = Wallet(500)\nprint(w.pay(300), w.balance)\nprint(w.pay(300), w.balance)",
      "targetCode": "class Wallet:\n    def __init__(self, balance):\n        self.balance = balance\n    def pay(self, cost):\n        if self.balance >= cost:\n            self.balance -= cost\n            return True\n        return False\nw = Wallet(500)\nprint(w.pay(300), w.balance)\nprint(w.pay(300), w.balance)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True 200\nFalse 200"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 체력 하한선(0) 보정 메서드를 while 반복문으로 호출해 공격 횟수와 체력을 구해보세요.",
      "prompt_en": "[Block] Clamp self.hp >= 0 inside Monster.hit and call it repeatedly in a while loop.",
      "hint_ko": "차감 직후 if self.hp < 0: 조건으로 음수 여부를 확인해 0으로 맞춰 주면 체력이 음수로 남지 않습니다.",
      "hint_en": "Checking if self.hp < 0: right after subtraction clamps the attribute to 0 so health never stays negative.",
      "targetCode": "class Monster:\n    def __init__(self, hp):\n        self.hp = hp\n    def hit(self, dmg):\n        self.hp -= dmg\n        if self.hp < 0:\n            self.hp = 0\nm = Monster(80)\nturns = 0\nwhile m.hp > 0:\n    m.hit(30)\n    turns += 1\nprint(turns, m.hp)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 0"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 보스 체력이 공격력 이상인 동안 반복 차감하고 남은 체력을 출력해보세요.",
      "prompt_en": "[Fill Blank] Repeatedly subtract atk while Boss hp is at least atk and print remaining hp.",
      "hint_ko": "첫 빈칸에는 인스턴스 자신을 가리키는 self를 적고, 둘째 빈칸에는 차감 복합 대입 연산자 -=를 적으세요.",
      "hint_en": "Reference the instance itself with self on line 5, and use the compound subtraction operator -= on line 6.",
      "templateCode": "class Boss:\n    def __init__(self, hp):\n        self.hp = hp\n    def damage(self, atk):\n        if §§§§.hp >= atk:\n            self.hp §§ atk\nb = Boss(100)\natk = int(input())\nwhile b.hp >= atk:\n    b.damage(atk)\nprint(b.hp)",
      "targetCode": "class Boss:\n    def __init__(self, hp):\n        self.hp = hp\n    def damage(self, atk):\n        if self.hp >= atk:\n            self.hp -= atk\nb = Boss(100)\natk = int(input())\nwhile b.hp >= atk:\n    b.damage(atk)\nprint(b.hp)",
      "testCases": [
        {
          "id": 1,
          "input": "40",
          "expectedOutput": "20"
        },
        {
          "id": 2,
          "input": "30",
          "expectedOutput": "10"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 메서드 안에서 try - except ZeroDivisionError로 승률을 안전하게 계산해보세요.",
      "prompt_en": "[Block] Use try - except ZeroDivisionError inside Stats.rate to safely return 0 when self.games is 0.",
      "hint_ko": "예외 처리를 메서드 내부에 숨겨 두면 메서드를 호출하는 바깥 코드가 매번 에러를 신경 쓰지 않아도 됩니다.",
      "hint_en": "Encapsulating exception handling inside the method keeps the calling code clean and safe.",
      "targetCode": "class Stats:\n    def __init__(self, wins, games):\n        self.wins = wins\n        self.games = games\n    def rate(self):\n        try:\n            return self.wins / self.games\n        except ZeroDivisionError:\n            return 0\na = Stats(3, 4)\nb = Stats(3, 0)\nprint(a.rate(), b.rate())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "0.75 0"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 슬라임 체력을 n등분한 몫을 반환하되 0으로 나누면 0을 반환하도록 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Divide Slime hp by n with integer division and return 0 on ZeroDivisionError.",
      "hint_ko": "첫 빈칸에는 인스턴스 자신을 뜻하는 self를, 둘째 빈칸에는 0 나눗셈 예외 ZeroDivisionError를 적으세요.",
      "hint_en": "Use self to access the hp attribute on line 6, and catch ZeroDivisionError on line 7.",
      "templateCode": "class Slime:\n    def __init__(self, hp=60):\n        self.hp = hp\n    def split(self, n):\n        try:\n            return §§§§.hp // n\n        except §§§§§§§§§§§§§§§§§:\n            return 0\ns = Slime(60)\nprint(s.split(3), s.split(0))",
      "targetCode": "class Slime:\n    def __init__(self, hp=60):\n        self.hp = hp\n    def split(self, n):\n        try:\n            return self.hp // n\n        except ZeroDivisionError:\n            return 0\ns = Slime(60)\nprint(s.split(3), s.split(0))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "20 0"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 출금 메서드를 호출했는데 잔액이 줄어들지 않고 늘어나는 버그를 고쳐 300을 출력해보세요.",
      "prompt_en": "[Fix Bug] Fix the logic bug in withdraw where the balance increases instead of decreasing so 300 is printed.",
      "hint_ko": "출금 동작인데 잔액 속성에 금액을 더하고 있습니다. 잔액이 차감되도록 복합 대입 연산자의 부호를 수정하세요.",
      "hint_en": "Withdrawing money should reduce the account balance rather than add to it; fix the arithmetic sign in the compound assignment.",
      "templateCode": "class Account:\n    def __init__(self, balance):\n        self.balance = balance\n    def withdraw(self, amount):\n        if self.balance >= amount:\n            self.balance += amount\na = Account(500)\na.withdraw(200)\nprint(a.balance)",
      "targetCode": "class Account:\n    def __init__(self, balance):\n        self.balance = balance\n    def withdraw(self, amount):\n        if self.balance >= amount:\n            self.balance -= amount\na = Account(500)\na.withdraw(200)\nprint(a.balance)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "300"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 체력이 100을 넘을 때만 100으로 제한해야 하는데 부등호가 반대인 버그를 고쳐 100을 출력해보세요.",
      "prompt_en": "[Fix Bug] Fix the reversed comparison operator in Potion.drink so hp caps at 100 when it exceeds 100.",
      "hint_ko": "체력이 100보다 클 때 상한선 100으로 맞춰야 하므로 if 조건문의 부등호 방향을 > 로 수정하세요.",
      "hint_en": "Health should be clamped to 100 only when self.hp is greater than 100; flip < to >.",
      "templateCode": "class Potion:\n    def __init__(self, hp=80):\n        self.hp = hp\n    def drink(self, val):\n        self.hp += val\n        if self.hp < 100:\n            self.hp = 100\np = Potion(80)\np.drink(35)\nprint(p.hp)",
      "targetCode": "class Potion:\n    def __init__(self, hp=80):\n        self.hp = hp\n    def drink(self, val):\n        self.hp += val\n        if self.hp > 100:\n            self.hp = 100\np = Potion(80)\np.drink(35)\nprint(p.hp)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "100"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 타이머 t에서 tick(7)을 호출해 반환된 문자열을 변수 res에 저장하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the line that calls t.tick(7) and stores the returned string in res.",
      "hint_ko": "변수 res에 대입 연산자(=)로 타이머 인스턴스 t의 tick(7) 호출 결과를 저장하세요.",
      "hint_en": "Assign the return value of t.tick(7) to the variable res.",
      "templateCode": "class Timer:\n    def __init__(self, sec=10):\n        self.sec = sec\n    def tick(self, step):\n        self.sec -= step\n        return f\"T-{self.sec}\"\nt = Timer(25)\n§§§§§§§§§§§§§§§\nprint(res)",
      "targetCode": "class Timer:\n    def __init__(self, sec=10):\n        self.sec = sec\n    def tick(self, step):\n        self.sec -= step\n        return f\"T-{self.sec}\"\nt = Timer(25)\nres = t.tick(7)\nprint(res)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "T-18"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 카운터 인스턴스 c의 step 메서드에 15를 전달해 호출하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the line that calls step(15) on the Counter instance c.",
      "hint_ko": "인스턴스 변수 c 뒤에 점(.)을 찍고 step(15)를 호출하세요.",
      "hint_en": "Call c.step(15) to add 15 to c.val before printing.",
      "templateCode": "class Counter:\n    def __init__(self, val=0):\n        self.val = val\n    def step(self, n):\n        self.val += n\nc = Counter(10)\n§§§§§§§§§§\nprint(c.val)",
      "targetCode": "class Counter:\n    def __init__(self, val=0):\n        self.val = val\n    def step(self, n):\n        self.val += n\nc = Counter(10)\nc.step(15)\nprint(c.val)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "25"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 최댓값을 100으로 제한하는 Gauge 인스턴스 메서드를 연속 호출했을 때 출력 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the output when Gauge.add() is called twice in succession with an upper cap of 100.",
      "hint_ko": "첫 번째 메서드 호출이 갱신한 인스턴스 속성값이 그대로 이어진 상태에서 두 번째 호출이 실행되며, 상한선 100을 넘을 때 보정됩니다.",
      "hint_en": "Remember the first call permanently updates the instance's value before the second call runs, applying the upper cap of 100.",
      "targetCode": "class Gauge:\n    def __init__(self, val=50):\n        self.val = val\n    def add(self, n):\n        self.val += n\n        if self.val > 100:\n            self.val = 100\n        return self.val\ng = Gauge(70)\nprint(g.add(20), g.add(25))",
      "choices": [
        "90 100",
        "90 115",
        "90 95",
        "100 100"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "90 100"
        }
      ]
    }
  ]
};
