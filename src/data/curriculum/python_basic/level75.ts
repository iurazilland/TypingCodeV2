import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_75: PracticeRound = {
  "id": "py-basic-r75",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 75,
  "title_ko": "75레벨: 값을 반환(return)하는 메서드와 다중 인스턴스 독립 상태 비교",
  "title_en": "Level 75: Methods Returning Values & Independent Instances",
  "description_ko": "메서드에서 계산 결과를 return으로 반환받아 활용하고, 여러 인스턴스가 서로 독립된 상태를 유지하는 원리를 익힙니다.",
  "description_en": "Return computed values from methods with return and verify how multiple instances maintain independent state.",
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
      "prompt_ko": "[블록 조립] 가로(self.w)와 세로(self.h)를 곱한 넓이를 return하는 get_area(self) 메서드를 조립해보세요.",
      "prompt_en": "[Block] Assemble get_area(self) to return self.w * self.h and print the returned value.",
      "hint_ko": "메서드 안에서 print 대신 return을 사용하면 계산된 결과를 호출한 곳으로 돌려주어 변수에 담거나 다른 연산에 쓸 수 있습니다.",
      "hint_en": "Returning a value with return lets the caller store or further combine the computed result.",
      "targetCode": "class Rect:\n    def __init__(self, w, h):\n        self.w = w\n        self.h = h\n    def get_area(self):\n        return self.w * self.h\nr = Rect(5, 4)\nprint(r.get_area())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "20"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 상품의 단가와 수량을 곱한 총액을 호출부로 돌려주도록 키워드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the keyword that sends the computed total price back to the caller.",
      "hint_ko": "함수나 메서드에서 계산한 결과값을 호출한 자리로 되돌려주는 여섯 글자 키워드를 적으세요.",
      "hint_en": "Use the six-letter keyword that sends a result value back from a function or method.",
      "templateCode": "class Item:\n    def __init__(self, price, qty):\n        self.price = price\n        self.qty = qty\n    def total(self):\n        §§§§§§ self.price * self.qty\nit = Item(1200, 3)\nprint(it.total())",
      "targetCode": "class Item:\n    def __init__(self, price, qty):\n        self.price = price\n        self.qty = qty\n    def total(self):\n        return self.price * self.qty\nit = Item(1200, 3)\nprint(it.total())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3600"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 점수가 80 이상인지 비교한 불리언(True/False) 결과를 반환하는 is_pass(self) 메서드를 조립해보세요.",
      "prompt_en": "[Block] Assemble is_pass(self) to return self.score >= 80 and print the result for two Exam instances.",
      "hint_ko": "return self.score >= 80처럼 비교식을 바로 반환하면 조건에 따라 True 또는 False가 돌려집니다.",
      "hint_en": "Returning a comparison expression like self.score >= 80 directly yields True or False.",
      "targetCode": "class Exam:\n    def __init__(self, score):\n        self.score = score\n    def is_pass(self):\n        return self.score >= 80\ne1 = Exam(85)\ne2 = Exam(70)\nprint(e1.is_pass(), e2.is_pass())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True False"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 나이가 19세 이상인지 판별한 불리언 값을 돌려주도록 비교 대상 속성을 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the comparison in is_adult() so it returns whether the member's age is at least 19.",
      "hint_ko": "메서드 안에서 현재 객체 자신의 나이 속성을 꺼내 19 이상인지 비교하세요.",
      "hint_en": "Access the age attribute on self to compare it with 19.",
      "templateCode": "class Member:\n    def __init__(self, age):\n        self.age = age\n    def is_adult(self):\n        return §§§§§§§§ >= 19\nm = Member(22)\nprint(m.is_adult())",
      "targetCode": "class Member:\n    def __init__(self, age):\n        self.age = age\n    def is_adult(self):\n        return self.age >= 19\nm = Member(22)\nprint(m.is_adult())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] Box(10)과 Box(20) 두 인스턴스를 만들고 a만 5를 더한 뒤 두 객체의 값을 비교 출력해보세요.",
      "prompt_en": "[Block] Create a = Box(10) and b = Box(20), add 5 only to a, and print both values.",
      "hint_ko": "같은 클래스로 만들었더라도 각 인스턴스는 서로 완전히 분리된 독립적인 self 속성 공간을 가집니다.",
      "hint_en": "Even when created from the same class, each instance maintains its own independent self attributes.",
      "targetCode": "class Box:\n    def __init__(self, val):\n        self.val = val\n    def add(self, n):\n        self.val += n\na = Box(10)\nb = Box(20)\na.add(5)\nprint(a.val, b.val)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "15 20"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 두 번째 카운터 인스턴스를 초기값 50으로 생성해 첫 번째 카운터와 독립적으로 동작하는지 확인해보세요.",
      "prompt_en": "[Fill Blank] Instantiate the second Counter with initial value 50 and assign it to c2.",
      "hint_ko": "클래스 이름 뒤에 괄호를 붙이고 초기 숫자 50을 인자로 넘겨 새 인스턴스를 생성하세요.",
      "hint_en": "Call the Counter class with 50 inside parentheses to create a separate instance.",
      "templateCode": "class Counter:\n    def __init__(self, v=0):\n        self.v = v\n    def inc(self):\n        self.v += 10\nc1 = Counter(10)\nc2 = §§§§§§§§§§§\nc1.inc()\nprint(c1.v, c2.v)",
      "targetCode": "class Counter:\n    def __init__(self, v=0):\n        self.v = v\n    def inc(self):\n        self.v += 10\nc1 = Counter(10)\nc2 = Counter(50)\nc1.inc()\nprint(c1.v, c2.v)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "20 50"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 두 지갑 인스턴스 a, b의 get_bal() 반환값을 더해 전체 합계를 출력해보세요.",
      "prompt_en": "[Block] Sum the values returned by a.get_bal() and b.get_bal() and print the combined balance.",
      "hint_ko": "각 인스턴스의 메서드가 숫자를 return하므로 a.get_bal() + b.get_bal()처럼 수식에서 바로 더할 수 있습니다.",
      "hint_en": "Because get_bal() returns a number, you can add a.get_bal() and b.get_bal() directly in an expression.",
      "targetCode": "class Wallet:\n    def __init__(self, cash, bonus):\n        self.cash = cash\n        self.bonus = bonus\n    def get_bal(self):\n        return self.cash + self.bonus\na = Wallet(1000, 200)\nb = Wallet(500, 100)\nprint(a.get_bal() + b.get_bal())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1800"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 두 팀 객체의 총점 반환 메서드를 각각 호출해 점수 차이를 출력해보세요.",
      "prompt_en": "[Fill Blank] Call the score-returning method on team b so the difference between team a and team b is printed.",
      "hint_ko": "앞쪽에서 첫 번째 팀의 총점을 구할 때 호출한 것과 같은 메서드를 두 번째 팀 인스턴스에서도 호출하세요.",
      "hint_en": "Invoke the total() method on instance b just as it is called on instance a.",
      "templateCode": "class Team:\n    def __init__(self, win, draw):\n        self.win = win\n        self.draw = draw\n    def total(self):\n        return self.win * 3 + self.draw\na = Team(4, 2)\nb = Team(3, 1)\nprint(a.total() - §§§§§§§§§)",
      "targetCode": "class Team:\n    def __init__(self, win, draw):\n        self.win = win\n        self.draw = draw\n    def total(self):\n        return self.win * 3 + self.draw\na = Team(4, 2)\nb = Team(3, 1)\nprint(a.total() - b.total())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "4"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 할인 적용 가격을 반환하는 메서드를 완성하고 두 상품 인스턴스의 결제 합계를 출력해보세요.",
      "prompt_en": "[Fill Blank] Complete the discounted price method and add the net prices of both products.",
      "hint_ko": "계산 결과를 돌려주는 키워드와 인스턴스 자신의 할인액 속성 참조, 그리고 두 번째 객체의 메서드 호출식을 확인하세요.",
      "hint_en": "Check the result-sending keyword, the discount attribute on self, and the method call on p2.",
      "templateCode": "class Product:\n    def __init__(self, price, disc=0):\n        self.price = price\n        self.disc = disc\n    def net_price(self):\n        §§§§§§ self.price - §§§§§§§§§\np1 = Product(5000, 500)\np2 = Product(3000)\nans = p1.§§§§§§§§§§§ + p2.net_price()\nprint(ans)",
      "targetCode": "class Product:\n    def __init__(self, price, disc=0):\n        self.price = price\n        self.disc = disc\n    def net_price(self):\n        return self.price - self.disc\np1 = Product(5000, 500)\np2 = Product(3000)\nans = p1.net_price() + p2.net_price()\nprint(ans)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "7500"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 두 상자의 무게를 더하려는데 메서드가 값을 반환하지 않고 화면에 출력만 해서 발생한 에러를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the TypeError when adding b1.weight() and b2.weight() by returning the value instead of printing it.",
      "hint_ko": "메서드 안에서 print만 실행하면 None이 반환되어 덧셈(+) 연산에서 에러가 나므로 결과값을 돌려주어야 합니다.",
      "hint_en": "Printing inside a method returns None, which cannot be added; return the computed sum instead.",
      "templateCode": "class Cargo:\n    def __init__(self, box, item):\n        self.box = box\n        self.item = item\n    def weight(self):\n        print(self.box + self.item)\nb1 = Cargo(2, 10)\nb2 = Cargo(3, 15)\nprint(b1.weight() + b2.weight())",
      "targetCode": "class Cargo:\n    def __init__(self, box, item):\n        self.box = box\n        self.item = item\n    def weight(self):\n        return self.box + self.item\nb1 = Cargo(2, 10)\nb2 = Cargo(3, 15)\nprint(b1.weight() + b2.weight())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "30"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 두 번째 캐릭터 u2의 체력을 회복시켜야 하는데 u1을 두 번 회복시켜 버린 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the bug where heal(20) was called on u1 twice instead of healing u2 on the second call.",
      "hint_ko": "각 인스턴스는 독립되어 있으므로 두 번째 줄의 메서드 호출 대상 변수가 두 번째 객체를 가리키는지 확인하세요.",
      "hint_en": "Check which instance variable is used on line 11 so that u2 receives the second heal call.",
      "templateCode": "class Unit:\n    def __init__(self, hp):\n        self.hp = hp\n    def heal(self, v):\n        self.hp += v\n    def get_hp(self):\n        return self.hp\nu1 = Unit(50)\nu2 = Unit(40)\nu1.heal(10)\nu1.heal(20)\nprint(u1.get_hp(), u2.get_hp())",
      "targetCode": "class Unit:\n    def __init__(self, hp):\n        self.hp = hp\n    def heal(self, v):\n        self.hp += v\n    def get_hp(self):\n        return self.hp\nu1 = Unit(50)\nu2 = Unit(40)\nu1.heal(10)\nu2.heal(20)\nprint(u1.get_hp(), u2.get_hp())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "60 60"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 메서드 안에서 가로(self.w)와 세로(self.h)를 튜플 (self.w, self.h)로 반환하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the line inside size(self) that returns the tuple (self.w, self.h).",
      "hint_ko": "반환 키워드 뒤에 두 속성을 괄호와 쉼표로 묶어 작성하세요.",
      "hint_en": "Use return followed by (self.w, self.h) at the method body indentation.",
      "templateCode": "class Frame:\n    def __init__(self, w, h):\n        self.w = w\n        self.h = h\n    def size(self):\n        §§§§§§§§§§§§§§§§§§§§§§§\nf = Frame(1920, 1080)\nx, y = f.size()\nprint(f\"{x}x{y}\")",
      "targetCode": "class Frame:\n    def __init__(self, w, h):\n        self.w = w\n        self.h = h\n    def size(self):\n        return (self.w, self.h)\nf = Frame(1920, 1080)\nx, y = f.size()\nprint(f\"{x}x{y}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1920x1080"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 두 객체 a와 b의 score() 반환값을 비교해 a가 더 큰지(>) 출력하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the final line that prints whether a.score() is greater than b.score().",
      "hint_ko": "print() 괄호 안에서 두 인스턴스의 score() 메서드 호출 결과를 부등호(>)로 비교하세요.",
      "hint_en": "Inside print(), compare a.score() > b.score().",
      "templateCode": "class Player:\n    def __init__(self, base, mult):\n        self.base = base\n        self.mult = mult\n    def score(self):\n        return self.base * self.mult\na = Player(15, 3)\nb = Player(20, 2)\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "class Player:\n    def __init__(self, base, mult):\n        self.base = base\n        self.mult = mult\n    def score(self):\n        return self.base * self.mult\na = Player(15, 3)\nb = Player(20, 2)\nprint(a.score() > b.score())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 두 개의 독립된 Tank 인스턴스에 서로 다른 메서드를 실행한 뒤 반환값을 출력한 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the output after mutating two independent Tank instances and calling status().",
      "hint_ko": "t1과 t2의 초기값(기본값 포함)과 각 객체에 호출된 메서드만 따로 추적해 남은 연료를 계산하세요.",
      "hint_en": "Track t1 (using default 50) and t2 (starting at 80) independently across their method calls.",
      "targetCode": "class Tank:\n    def __init__(self, fuel=50):\n        self.fuel = fuel\n    def fill(self, v):\n        self.fuel += v\n    def burn(self, v):\n        self.fuel -= v\n    def status(self):\n        return self.fuel\nt1 = Tank()\nt2 = Tank(80)\nt1.fill(20)\nt2.burn(35)\nt1.burn(10)\nprint(t1.status(), t2.status())",
      "choices": [
        "60 45",
        "70 45",
        "60 55",
        "50 45"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "60 45"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다중 반환 메서드의 튜플 언패킹과 조건부 조기 return이 결합된 코드의 출력 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the output of the code combining early return and tuple unpacking on two instances.",
      "hint_ko": "점수가 기준 이상일 때와 미만일 때 각각 어떤 튜플이 반환되어 언패킹되는지 확인하세요.",
      "hint_en": "Check which branch of grade_info runs for 85 versus 60 and how the unpacked values are formatted.",
      "targetCode": "class Applicant:\n    def __init__(self, name, pt):\n        self.name = name\n        self.pt = pt\n    def grade_info(self):\n        if self.pt >= 80:\n            return self.name, \"PASS\"\n        return self.name, \"RETRY\"\na1 = Applicant(\"Jun\", 85)\na2 = Applicant(\"Sua\", 60)\nn1, r1 = a1.grade_info()\nn2, r2 = a2.grade_info()\nprint(f\"{n1}:{r1} / {n2}:{r2}\")",
      "choices": [
        "Jun:PASS / Sua:RETRY",
        "Jun:PASS / Sua:PASS",
        "Jun:RETRY / Sua:RETRY",
        "Jun:85 / Sua:60"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Jun:PASS / Sua:RETRY"
        }
      ]
    }
  ]
};
