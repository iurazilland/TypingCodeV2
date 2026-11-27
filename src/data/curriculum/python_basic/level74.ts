import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_74: PracticeRound = {
  "id": "py-basic-r74",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 74,
  "title_ko": "74레벨: 인스턴스 메서드로 self 속성값 변경하고 출력하기",
  "title_en": "Level 74: Mutating & Printing self Attributes in Methods",
  "description_ko": "인스턴스 메서드 안에서 복합 대입 연산자와 조건문을 활용해 self 속성값을 안전하게 변경하고 추적합니다.",
  "description_en": "Mutate and safeguard self attributes inside instance methods using compound assignments and conditionals.",
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
      "prompt_ko": "[블록 조립] 레벨업 메서드 안에서 인스턴스의 레벨 속성을 1 증가시키고 결과를 출력해보세요.",
      "prompt_en": "[Block] Assemble a method that increments the instance's level attribute by 1 and print the updated level.",
      "hint_ko": "메서드 안에서 self.속성 += 값을 실행하면 해당 인스턴스의 상태가 영구적으로 갱신됩니다.",
      "hint_en": "Using += on a self attribute inside a method permanently updates that instance's state.",
      "targetCode": "class Player:\n    def __init__(self):\n        self.lv = 1\n    def level_up(self):\n        self.lv += 1\np = Player()\np.level_up()\nprint(p.lv)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 스탬프 객체의 찍기 메서드를 호출할 때마다 개수가 1씩 늘어나도록 복합 대입 연산자를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the compound assignment operator so each method call increments the count attribute by 1.",
      "hint_ko": "기존 속성값에 오른쪽 숫자를 더해서 다시 같은 속성에 저장하는 복합 대입 연산자를 적으세요.",
      "hint_en": "Use the two-character compound operator that adds to the existing attribute value.",
      "templateCode": "class Stamp:\n    def __init__(self):\n        self.cnt = 0\n    def punch(self):\n        self.cnt §§§ 1\ns = Stamp()\ns.punch()\ns.punch()\nprint(s.cnt)",
      "targetCode": "class Stamp:\n    def __init__(self):\n        self.cnt = 0\n    def punch(self):\n        self.cnt += 1\ns = Stamp()\ns.punch()\ns.punch()\nprint(s.cnt)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 피해량 매개변수를 받아 인스턴스의 체력 속성을 차감하는 메서드를 정의하고 남은 체력을 출력해보세요.",
      "prompt_en": "[Block] Define a damage method to subtract the passed amount from the instance's health and print the remaining health.",
      "hint_ko": "메서드의 self 뒤에 추가 매개변수(dmg)를 선언하면 호출할 때 원하는 수치(u.damage(30))를 전달해 속성을 바꿀 수 있습니다.",
      "hint_en": "Adding parameters after self lets you pass custom values like u.damage(30) when mutating state.",
      "targetCode": "class Unit:\n    def __init__(self, hp):\n        self.hp = hp\n    def damage(self, dmg):\n        self.hp -= dmg\nu = Unit(100)\nu.damage(30)\nprint(u.hp)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "70"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 배터리 충전 메서드에서 전달받은 양만큼 잔량이 더해지도록 좌변의 속성 참조를 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the attribute reference inside charge() so amount is added to the battery's level.",
      "hint_ko": "메서드 안에서 인스턴스 자신의 잔량 속성을 가리키도록 참조 변수와 점을 포함해 적으세요.",
      "hint_en": "Reference the level attribute on the current instance using self and a dot.",
      "templateCode": "class Battery:\n    def __init__(self, level=40):\n        self.level = level\n    def charge(self, amount):\n        §§§§§§§§§§§ += amount\nb = Battery()\nb.charge(35)\nprint(b.level)",
      "targetCode": "class Battery:\n    def __init__(self, level=40):\n        self.level = level\n    def charge(self, amount):\n        self.level += amount\nb = Battery()\nb.charge(35)\nprint(b.level)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "75"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 메서드 안에서 체력을 차감한 뒤 0보다 작아지면 0으로 보정하는 조건문을 조립해보세요.",
      "prompt_en": "[Block] Subtract damage from the instance's health and clamp it to 0 if it drops below 0.",
      "hint_ko": "속성값을 차감한 직후 if self.hp < 0: 조건으로 확인하면 체력이 음수로 내려가는 것을 막을 수 있습니다.",
      "hint_en": "Checking if self.hp < 0: right after subtraction prevents the attribute from staying negative.",
      "targetCode": "class Monster:\n    def __init__(self, hp):\n        self.hp = hp\n    def hit(self, dmg):\n        self.hp -= dmg\n        if self.hp < 0:\n            self.hp = 0\nm = Monster(50)\nm.hit(80)\nprint(m.hp)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "0"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 지갑 잔액이 결제 금액 이상일 때만 차감하고 부족하면 경고를 출력하도록 조건식을 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the condition in pay() so it deducts cost only when the wallet balance is at least cost.",
      "hint_ko": "메서드 안에서 현재 지갑 객체 자신의 잔액 속성을 꺼내 cost와 크기를 비교하세요.",
      "hint_en": "Access the balance attribute on the current instance to compare it against cost.",
      "templateCode": "class Wallet:\n    def __init__(self, bal):\n        self.bal = bal\n    def pay(self, cost):\n        if §§§§§§§§§ >= cost:\n            self.bal -= cost\n        else:\n            print(\"Low\")\nw = Wallet(500)\nw.pay(300)\nw.pay(300)\nprint(w.bal)",
      "targetCode": "class Wallet:\n    def __init__(self, bal):\n        self.bal = bal\n    def pay(self, cost):\n        if self.bal >= cost:\n            self.bal -= cost\n        else:\n            print(\"Low\")\nw = Wallet(500)\nw.pay(300)\nw.pay(300)\nprint(w.bal)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Low\n200"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 회복 메서드와 피해 메서드를 차례로 호출한 뒤 상태 출력 메서드로 최종 체력을 출력해보세요.",
      "prompt_en": "[Block] Call the heal and damage methods in sequence on the hero instance, then call the display method to print the final health.",
      "hint_ko": "같은 인스턴스에 대해 여러 메서드를 순서대로 호출하면 각 메서드가 변경한 self.hp 상태가 누적되어 이어집니다.",
      "hint_en": "Calling multiple methods on the same instance accumulates all state changes on self.hp in order.",
      "targetCode": "class Hero:\n    def __init__(self, hp):\n        self.hp = hp\n    def heal(self, v):\n        self.hp += v\n    def damage(self, v):\n        self.hp -= v\n    def show(self):\n        print(f\"HP:{self.hp}\")\nh = Hero(100)\nh.heal(20)\nh.damage(15)\nh.show()",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "HP:105"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 엘리베이터를 4층 올린 뒤 2층 내리는 메서드를 호출해보세요.",
      "prompt_en": "[Fill Blank] Call the method on the elevator instance that moves it 2 floors lower.",
      "hint_ko": "윗줄에서 위로 올라가는 메서드를 호출한 것처럼, 내려가는 메서드 이름 뒤에 인자 2를 넣어 호출하세요.",
      "hint_en": "Invoke the method that decreases the floor with argument 2 on instance e.",
      "templateCode": "class Lift:\n    def __init__(self, floor=1):\n        self.floor = floor\n    def up(self, n):\n        self.floor += n\n    def down(self, n):\n        self.floor -= n\ne = Lift(3)\ne.up(4)\ne.§§§§§§§§\nprint(e.floor)",
      "targetCode": "class Lift:\n    def __init__(self, floor=1):\n        self.floor = floor\n    def up(self, n):\n        self.floor += n\n    def down(self, n):\n        self.floor -= n\ne = Lift(3)\ne.up(4)\ne.down(2)\nprint(e.floor)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "5"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 계좌에 500원을 입금한 뒤 입력받은 금액을 출금하도록 클래스와 메서드 호출을 완성해보세요.",
      "prompt_en": "[Fill Blank] Complete the account class and transactions to deposit 500 and withdraw the input amount.",
      "hint_ko": "인스턴스 자신을 가리키는 첫 매개변수(self)와 출금 메서드 이름(withdraw)을 차례로 채우세요.",
      "hint_en": "Check the instance reference parameter, the compound addition operator, and how the deduction method is called on acc.",
      "templateCode": "class Account:\n    def __init__(self, bal=1000):\n        self.bal = bal\n    def deposit(§§§§§, amt):\n        self.bal += amt\n    def withdraw(self, amt):\n        if self.bal >= amt:\n            self.bal -= amt\nacc = Account()\nacc.deposit(500)\nacc.§§§§§§§§§(int(input()))\nprint(acc.bal)",
      "targetCode": "class Account:\n    def __init__(self, bal=1000):\n        self.bal = bal\n    def deposit(self, amt):\n        self.bal += amt\n    def withdraw(self, amt):\n        if self.bal >= amt:\n            self.bal -= amt\nacc = Account()\nacc.deposit(500)\nacc.withdraw(int(input()))\nprint(acc.bal)",
      "testCases": [
        {
          "id": 1,
          "input": "400",
          "expectedOutput": "1100"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 가속 메서드 호출 시 레이서 객체의 속도가 증가하도록 메서드 내부의 객체 참조를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the instance attribute reference inside the boost method so the racer speed increases.",
      "hint_ko": "메서드 안에서 인스턴스 속성을 수정할 때는 self.speed 형태로 작성해야 합니다.",
      "hint_en": "Always prefix the attribute name with the instance reference and a dot when mutating it inside a method.",
      "templateCode": "class Racer:\n    def __init__(self, speed=50):\n        self.speed = speed\n    def boost(self, plus):\n        this.speed += plus\nr = Racer()\nr.boost(20)\nprint(r.speed)",
      "targetCode": "class Racer:\n    def __init__(self, speed=50):\n        self.speed = speed\n    def boost(self, plus):\n        self.speed += plus\nr = Racer()\nr.boost(20)\nprint(r.speed)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "70"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 체력 회복 시 최대 체력(100)을 넘지 않도록 제한하는 조건문의 부등호 방향을 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the comparison operator in the heal method so health is capped at 100 only when it exceeds 100.",
      "hint_ko": "회복 후 체력이 상한선인 100보다 커졌을 때만 100으로 맞춰야 하므로 비교 연산자의 방향을 확인하세요.",
      "hint_en": "Clamp self.hp to 100 only when it becomes greater than 100, not when it is less than 100.",
      "templateCode": "class PotionUser:\n    def __init__(self, hp=70):\n        self.hp = hp\n    def heal(self, amount):\n        self.hp += amount\n        if self.hp < 100:\n            self.hp = 100\np = PotionUser(70)\np.heal(15)\nprint(p.hp)",
      "targetCode": "class PotionUser:\n    def __init__(self, hp=70):\n        self.hp = hp\n    def heal(self, amount):\n        self.hp += amount\n        if self.hp > 100:\n            self.hp = 100\np = PotionUser(70)\np.heal(15)\nprint(p.hp)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "85"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 메서드 내부에서 전달받은 승리 횟수에 10을 곱한 값을 인스턴스의 점수 속성에 복합 대입으로 누적하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the line inside the method that adds 10 times the passed point value to the instance's score attribute.",
      "hint_ko": "들여쓰기 위치에 맞춰 자기 자신의 score 속성에 pt * 10을 복합 대입으로 누적하세요.",
      "hint_en": "Use += on self.score to add pt * 10.",
      "templateCode": "class GameCard:\n    def __init__(self):\n        self.score = 100\n    def add_win(self, pt):\n        §§§§§§§§§§§§§§§§§§§§§§\ng = GameCard()\ng.add_win(3)\nprint(g.score)",
      "targetCode": "class GameCard:\n    def __init__(self):\n        self.score = 100\n    def add_win(self, pt):\n        self.score += pt * 10\ng = GameCard()\ng.add_win(3)\nprint(g.score)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "130"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 반복문 안에서 드론 객체의 연료 소모 메서드를 호출해 매번 연료를 15씩 차감하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the line inside the loop that calls the drone's fuel consumption method with an amount of 15.",
      "hint_ko": "반복문 들여쓰기에 맞춰 인스턴스 변수 뒤에 점과 메서드 호출식을 적으세요.",
      "hint_en": "Call use_fuel(15) on instance d inside the loop body.",
      "templateCode": "class Drone:\n    def __init__(self, fuel=60):\n        self.fuel = fuel\n    def use_fuel(self, cost):\n        self.fuel -= cost\nd = Drone()\nfor _ in range(3):\n    §§§§§§§§§§§§§§§\nprint(d.fuel)",
      "targetCode": "class Drone:\n    def __init__(self, fuel=60):\n        self.fuel = fuel\n    def use_fuel(self, cost):\n        self.fuel -= cost\nd = Drone()\nfor _ in range(3):\n    d.use_fuel(15)\nprint(d.fuel)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "15"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 조건 분기가 들어 있는 온도 조절기 메서드를 차례로 호출했을 때의 출력 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the output after calling step() with positive and negative values on Cooler.",
      "hint_ko": "최저 온도(18도) 밑으로 내려가려 할 때 하한선이 어떻게 적용되는지 각 호출마다 추적해보세요.",
      "hint_en": "Trace the temperature after each call, noting the lower bound check at 18.",
      "targetCode": "class Cooler:\n    def __init__(self, temp=22):\n        self.temp = temp\n    def adjust(self, diff):\n        self.temp += diff\n        if self.temp < 18:\n            self.temp = 18\nc = Cooler(21)\nc.adjust(-5)\nc.adjust(3)\nc.adjust(-4)\nprint(c.temp)",
      "choices": [
        "17",
        "18",
        "15",
        "16"
      ],
      "correctChoiceIndex": 1,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "18"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 문자열 명령 리스트를 순회하며 객체의 상태를 바꾸는 다음 코드의 출력 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the final output when iterating over command strings to mutate a Robot instance.",
      "hint_ko": "각 명령 문자열에 따라 좌표 x와 에너지 속성이 어떻게 바뀌는지 순서대로 계산해보세요.",
      "hint_en": "Follow each command in cmds to track both r.x and r.energy step by step.",
      "targetCode": "class Robot:\n    def __init__(self):\n        self.x = 0\n        self.energy = 10\n    def act(self, cmd):\n        if cmd == \"GO\" and self.energy >= 4:\n            self.x += 3\n            self.energy -= 4\n        elif cmd == \"REST\":\n            self.energy += 2\nr = Robot()\nfor c in [\"GO\", \"GO\", \"GO\", \"REST\", \"GO\"]:\n    r.act(c)\nprint(f\"{r.x}:{r.energy}\")",
      "choices": [
        "9:0",
        "12:0",
        "6:4",
        "9:2"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "9:0"
        }
      ]
    }
  ]
};
