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
  "totalQuestions": 13,
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
      "prompt_ko": "클래스 내부에 정의한 인스턴스 메서드는 첫 매개변수 self로 호출한 객체 자신을 전달받아 self.속성 값을 변경할 수 있습니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "An instance method defined inside a class receives the calling object as its first parameter self and can mutate self.attribute values. Trace the block code.",
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
      "prompt_ko": "영웅의 이름과 체력 문자열을 반환하는 인스턴스 메서드를 완성하고 호출해 결과를 출력해보세요. (출력 예: Aria:120)",
      "prompt_en": "Complete and call the instance method that returns the formatted hero status string Aria:120.",
      "hint_ko": "메서드 선언부 괄호에는 인스턴스 '자기 자신'을 뜻하는 네 글자 매개변수를 적고, 마지막 줄 점 뒤에는 위에서 선언한 네 글자 메서드 이름을 적으세요.",
      "hint_en": "Declare the four-letter instance reference parameter on line 5, and invoke the four-letter status method on the hero object on line 8.",
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
      "prompt_ko": "하나의 클래스에 상태를 변경하는 메서드(heal)와 현재 상태를 문자열로 반환하는 메서드(info)를 함께 정의해 차례대로 호출할 수 있습니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "A class can define both state-mutating methods (heal) and value-returning methods (info) that read the updated self attributes. Trace the block code.",
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
      "prompt_ko": "잔액이 결제 금액 이상일 때만 차감하고 성공 여부를 반환하도록 지갑 메서드의 빈칸을 채워보세요.",
      "prompt_en": "Fill in the conditional guard and deduction operator so Wallet.pay deducts cost only when balance suffices.",
      "hint_ko": "조건문에서는 인스턴스 자신의 잔액 속성(네 글자 참조.일곱 글자 속성명)을 확인하고, 아랫줄에서는 빼서 다시 저장하는 복합 대입 연산자를 적으세요.",
      "hint_en": "Compare the instance's own balance attribute against the cost on line 5, and deduct the cost in place using compound subtraction on line 6.",
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
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "인스턴스 메서드 안에 if 조건문을 두면, 객체의 현재 속성값(self.stock)을 먼저 검사한 뒤 조건이 참일 때만 상태를 차감하고 결과를 return할 수 있습니다. 블록의 코드를 따라 입력해보세요. (터미널 입력: 2)",
      "prompt_en": "Placing an if condition inside an instance method lets you inspect self.stock first and decrement state only when stock is available, returning None otherwise. Trace the block code. (Terminal input: 2)",
      "hint_ko": "if 블록 안에서 return이 실행되면 그 즉시 메서드가 끝나므로 별도의 else 없이도 마지막 줄의 return None이 대체 반환문 역할을 합니다.",
      "hint_en": "Because return inside the if block exits the method immediately, the final return None acts as the fallback without needing an else.",
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
      "prompt_ko": "드론의 좌표를 이동시킨 뒤 새 위치를 튜플로 돌려주는 메서드를 완성하고 호출 결과를 출력해보세요.",
      "prompt_en": "Complete the method that updates Drone coordinates and returns them as a tuple, then call it.",
      "hint_ko": "첫 빈칸에는 새 좌표 튜플을 '되돌려주다'를 뜻하는 여섯 글자 키워드를, 둘째 빈칸에는 드론 인스턴스에 선언된 네 글자 이동 메서드 이름을 적으세요.",
      "hint_en": "Send back the updated coordinate tuple with the six-letter keyword on line 8, and invoke the four-letter movement method on line 10.",
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
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "메서드 내부에서 속성값이 하한선(0) 아래로 내려가지 않도록 보정하는 로직을 캡슐화해 두면, while 반복문에서 메서드를 반복 호출할 때도 항상 유효한 상태가 유지됩니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Encapsulating lower-bound clamping (keeping self.hp >= 0) inside a method ensures the instance stays in a valid state even when called repeatedly in a while loop. Trace the block code.",
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
      "prompt_ko": "입력받은 공격력만큼 보스 체력을 감소시키고, 남은 체력과 생존 여부 메서드의 반환값을 출력해보세요. (터미널 입력: 40)",
      "prompt_en": "Subtract input attack damage from Boss(100) and print remaining hp along with the survival check method. (Terminal input: 40)",
      "hint_ko": "첫 빈칸에는 인스턴스 '자기 자신'을 뜻하는 네 글자 참조를 적고, 마지막 줄 점 뒤에는 위에서 선언한 여덟 글자 생존 판별 메서드 이름을 적으세요.",
      "hint_en": "Reference the instance itself with the four-letter parameter on line 5, and invoke the eight-letter survival-check method after the dot on line 10.",
      "templateCode": "class Boss:\n    def __init__(self, hp):\n        self.hp = hp\n    def damage(self, atk):\n        §§§§.hp -= atk\n    def is_alive(self):\n        return self.hp > 0\nb = Boss(100)\nb.damage(int(input()))\nprint(b.hp, b.§§§§§§§§())",
      "targetCode": "class Boss:\n    def __init__(self, hp):\n        self.hp = hp\n    def damage(self, atk):\n        self.hp -= atk\n    def is_alive(self):\n        return self.hp > 0\nb = Boss(100)\nb.damage(int(input()))\nprint(b.hp, b.is_alive())",
      "testCases": [
        {
          "id": 1,
          "input": "40",
          "expectedOutput": "60 True"
        },
        {
          "id": 2,
          "input": "120",
          "expectedOutput": "-20 False"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "인스턴스 메서드 안에서도 try - except ZeroDivisionError 구문을 사용할 수 있어, 분모 속성(self.games)이 0인 객체에서도 에러 없이 안전하게 계산 결과를 반환합니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Using try - except ZeroDivisionError inside an instance method safely returns a fallback value even when the denominator attribute (self.games) is 0. Trace the block code.",
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
      "prompt_ko": "슬라임 크기를 배수만큼 곱해 키운 뒤 문자열 변환으로 라벨을 만들어 출력해보세요. (출력 예: S:12)",
      "prompt_en": "Multiply Slime size by factor and concatenate it as a string label to print S:12.",
      "hint_ko": "첫 빈칸에는 곱한 값을 다시 저장하는 두 글자 복합 대입 연산자를, 둘째 빈칸에는 문자열(string)의 앞 세 글자를 딴 변환 함수를 적으세요.",
      "hint_en": "Multiply in place with the two-character compound operator on line 5, and convert the size using the three-letter abbreviation of \"string\" on line 7.",
      "templateCode": "class Slime:\n    def __init__(self, size=2):\n        self.size = size\n    def grow(self, factor):\n        self.size §§ factor\n    def label(self):\n        return \"S:\" + §§§(self.size)\ns = Slime(3)\ns.grow(4)\nprint(s.label())",
      "targetCode": "class Slime:\n    def __init__(self, size=2):\n        self.size = size\n    def grow(self, factor):\n        self.size *= factor\n    def label(self):\n        return \"S:\" + str(self.size)\ns = Slime(3)\ns.grow(4)\nprint(s.label())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "S:12"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "출금 메서드를 호출했는데 잔액이 줄어들지 않고 오히려 늘어나는 논리 버그가 있습니다. 코드를 고쳐 300을 출력해보세요.",
      "prompt_en": "Fix the logic bug in withdraw where the balance increases instead of decreasing so 300 is printed.",
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
      "kind": "one_line",
      "prompt_ko": "초기 시간 25초로 생성한 타이머 코드 아래에 한 줄을 추가하여 7초 감소시킨 결과를 출력해보세요. (출력 예: T-18)",
      "prompt_en": "Add one line below Timer(25) to call tick with 7 seconds and print the returned string (output: T-18).",
      "hint_ko": "시간 감소 메서드가 변경된 상태 문자열을 직접 반환하므로, 타이머 인스턴스에서 인자 7을 넣어 메서드를 호출하고 그 반환값을 출력하세요.",
      "hint_en": "Invoke the countdown method on the timer instance passing 7, and print the formatted string it sends back.",
      "templateCode": "class Timer:\n    def __init__(self, sec=10):\n        self.sec = sec\n    def tick(self, step):\n        self.sec -= step\n        return f\"T-{self.sec}\"\nt = Timer(25)\n§§§§§§§§§§§§§§§§",
      "targetCode": "class Timer:\n    def __init__(self, sec=10):\n        self.sec = sec\n    def tick(self, step):\n        self.sec -= step\n        return f\"T-{self.sec}\"\nt = Timer(25)\nprint(t.tick(7))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "T-18"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "최댓값을 100으로 제한하는 Gauge 인스턴스 메서드를 연속 호출했을 때 출력 결과를 선택해보세요.",
      "prompt_en": "Select the output when Gauge.add() is called twice in succession with an upper cap of 100.",
      "hint_ko": "첫 번째 메서드 호출이 갱신한 인스턴스 속성값이 그대로 이어진 상태에서 두 번째 호출이 실행되며, 상한선 100을 넘을 때 어떻게 보정되는지 추적하세요.",
      "hint_en": "Remember the first call permanently updates the instance's value before the second call runs, and apply the upper-bound cap when exceeded.",
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
