import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_84: PracticeRound = {
  "id": "py-basic-r84",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 84,
  "title_ko": "84레벨: 객체 문자열 표현(__str__)과 예외 안전 클래스 메서드",
  "title_en": "Level 84: String Representation (__str__) & Exception-Safe Methods",
  "description_ko": "객체를 보기 좋은 문자열로 반환하는 __str__ 특별 메서드와 잘못된 인자에 raise로 예외를 일으키는 안전한 메서드를 작성합니다.",
  "description_en": "Define __str__ for automatic string formatting of objects and build exception-safe methods with raise and try-except-finally.",
  "totalQuestions": 15,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "type",
    "math",
    "method",
    "if",
    "for_in",
    "def",
    "class",
    "try",
    "raise"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] Hero 클래스에 __str__(self) 특별 메서드를 정의해 print(hero)로 Aria(100)을 출력해보세요.",
      "prompt_en": "[Block] Define __str__(self) on Hero so print(hero) automatically displays Aria(100).",
      "hint_ko": "__str__ 메서드 내부에서는 print()를 쓰지 않고 반드시 문자열을 return으로 반환해야 합니다.",
      "hint_en": "Inside __str__, always return a string rather than calling print().",
      "targetCode": "class Hero:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def __str__(self):\n        return f\"{self.name}({self.hp})\"\n\nhero = Hero(\"Aria\", 100)\nprint(hero)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Aria(100)"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 빈칸에 특별 메서드 이름을 채워 Badge 객체 b를 출력했을 때 [Gold] Min이 나오도록 완성하세요.",
      "prompt_en": "[Fill Blank] Fill in the special method name so printing Badge instance b outputs [Gold] Min.",
      "hint_ko": "'문자열(string)'의 앞 세 글자 양옆에 밑줄(언더스코어)을 두 개씩 붙인 7글자 특별 메서드 이름을 채우세요.",
      "hint_en": "Take the first 3 letters of 'string' and surround them with two underscores on each side.",
      "templateCode": "class Badge:\n    def __init__(self, owner, grade):\n        self.owner = owner\n        self.grade = grade\n\n    def §§§§§§§(self):\n        return f\"[{self.grade}] {self.owner}\"\n\nb = Badge(\"Min\", \"Gold\")\nprint(b)",
      "targetCode": "class Badge:\n    def __init__(self, owner, grade):\n        self.owner = owner\n        self.grade = grade\n\n    def __str__(self):\n        return f\"[{self.grade}] {self.owner}\"\n\nb = Badge(\"Min\", \"Gold\")\nprint(b)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[Gold] Min"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] Point 클래스에 __str__을 정의하고 str(p)로 변환한 좌표 문자열을 출력해보세요.",
      "prompt_en": "[Block] Define __str__ on Point and convert p with str(p) to print Pos:(3,7).",
      "hint_ko": "str(p)가 호출될 때 내부적으로 p.__str__()의 반환값인 \"(3,7)\"이 반환됩니다.",
      "hint_en": "Calling str(p) internally invokes p.__str__() and returns \"(3,7)\".",
      "targetCode": "class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n    def __str__(self):\n        return f\"({self.x},{self.y})\"\n\np = Point(3, 7)\ntext = str(p)\nprint(f\"Pos:{text}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Pos:(3,7)"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 두 빈칸을 채워 체력을 회복한 hero 객체를 f-string에 넣어 Info:Leo:100을 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in both blanks so embedding hero in an f-string prints Info:Leo:100 after healing.",
      "hint_ko": "첫 빈칸은 7글자 문자열 표현 특별 메서드 이름을, 둘째 빈칸은 체력을 회복한 객체 변수 이름을 적으세요.",
      "hint_en": "First write the 7-character __str__ method, then place the healed instance variable inside { }.",
      "templateCode": "class Player:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def heal(self, amt):\n        self.hp += amt\n\n    def §§§§§§§(self):\n        return f\"{self.name}:{self.hp}\"\n\nhero = Player(\"Leo\", 80)\nhero.heal(20)\nprint(f\"Info:{§§§§}\")",
      "targetCode": "class Player:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def heal(self, amt):\n        self.hp += amt\n\n    def __str__(self):\n        return f\"{self.name}:{self.hp}\"\n\nhero = Player(\"Leo\", 80)\nhero.heal(20)\nprint(f\"Info:{hero}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Info:Leo:100"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 잔액보다 큰 금액을 출금할 때 raise ValueError(\"Lack\")로 차단해 계좌 잔액을 보호해보세요.",
      "prompt_en": "[Block] Raise ValueError(\"Lack\") in withdraw when amt > self.balance to protect the balance.",
      "hint_ko": "if amt > self.balance:에서 예외가 발생하므로 아랫줄의 self.balance -= amt는 실행되지 않습니다.",
      "hint_en": "Because raise executes when amt > self.balance, the subtraction line below it is skipped.",
      "targetCode": "class Account:\n    def __init__(self, balance):\n        self.balance = balance\n\n    def withdraw(self, amt):\n        if amt > self.balance:\n            raise ValueError(\"Lack\")\n        self.balance -= amt\n\n    def __str__(self):\n        return f\"Bal:{self.balance}\"\n\nacc = Account(100)\ntry:\n    acc.withdraw(150)\nexcept ValueError:\n    print(\"Lack\")\nprint(acc)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Lack\nBal:100"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 0 이하 또는 잔액 초과 출금 시 BadAmt를 출력하고 항상 마지막에 계좌를 출력하세요.",
      "prompt_en": "[Fill Blank] Fill in both blanks to raise ValueError(\"BadAmt\") and always print acc in finally.",
      "hint_ko": "잘못된 금액일 때 예외를 일으키는 5글자 키워드와, 항상 마지막에 실행되는 7글자 키워드를 쓰세요.",
      "hint_en": "Throw the error with the 5-letter raise keyword, and print the account inside the 7-letter finally block.",
      "templateCode": "class Account:\n    def __init__(self, owner, balance):\n        self.owner = owner\n        self.balance = balance\n\n    def withdraw(self, amt):\n        if amt <= 0 or amt > self.balance:\n            §§§§§ ValueError(\"BadAmt\")\n        self.balance -= amt\n\n    def __str__(self):\n        return f\"{self.owner}:{self.balance}\"\n\nacc = Account(\"Jin\", 500)\ntry:\n    acc.withdraw(int(input()))\nexcept ValueError as e:\n    print(e)\n§§§§§§§:\n    print(acc)",
      "targetCode": "class Account:\n    def __init__(self, owner, balance):\n        self.owner = owner\n        self.balance = balance\n\n    def withdraw(self, amt):\n        if amt <= 0 or amt > self.balance:\n            raise ValueError(\"BadAmt\")\n        self.balance -= amt\n\n    def __str__(self):\n        return f\"{self.owner}:{self.balance}\"\n\nacc = Account(\"Jin\", 500)\ntry:\n    acc.withdraw(int(input()))\nexcept ValueError as e:\n    print(e)\nfinally:\n    print(acc)",
      "testCases": [
        {
          "id": 1,
          "input": "200",
          "expectedOutput": "Jin:300"
        },
        {
          "id": 2,
          "input": "-10",
          "expectedOutput": "BadAmt\nJin:500"
        },
        {
          "id": 3,
          "input": "900",
          "expectedOutput": "BadAmt\nJin:500"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] Box에 2개까지만 담기도록 len(self.items) >= 2일 때 Full 예외를 일으키는 코드를 완성해보세요.",
      "prompt_en": "[Block] Enforce a capacity limit of 2 in Box.add by raising ValueError(\"Full\").",
      "hint_ko": "세 번째 원소 \"C\"를 추가할 때 예외가 발생해 except 블록이 실행되며, 상자 안에는 2개만 남습니다.",
      "hint_en": "Adding the third item \"C\" raises ValueError into the except block, leaving exactly 2 items in box.",
      "targetCode": "class Box:\n    def __init__(self):\n        self.items = []\n\n    def add(self, item):\n        if len(self.items) >= 2:\n            raise ValueError(\"Full\")\n        self.items.append(item)\n\n    def __str__(self):\n        return f\"Count:{len(self.items)}\"\n\nbox = Box()\nfor x in [\"A\", \"B\", \"C\"]:\n    try:\n        box.add(x)\n    except ValueError:\n        print(\"Full\")\nprint(box)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Full\nCount:2"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] Bag에 2개 초과 추가 시 Full 예외를 일으키고 문자열 표현으로 Bag:2를 출력하도록 두 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in raise and __str__ so Bag limits capacity to 2 and prints Bag:2.",
      "hint_ko": "예외를 일으키는 5글자 키워드와 객체를 문자열로 표현하는 7글자 특별 메서드 이름을 채우세요.",
      "hint_en": "Use the 5-letter raise keyword and the 7-character __str__ special method.",
      "templateCode": "class Bag:\n    def __init__(self):\n        self.items = []\n\n    def add(self, x):\n        if len(self.items) >= 2:\n            §§§§§ ValueError(\"Full\")\n        self.items.append(x)\n\n    def §§§§§§§(self):\n        return f\"Bag:{len(self.items)}\"\n\nb = Bag()\nfor v in [10, 20, 30]:\n    try:\n        b.add(v)\n    except ValueError as e:\n        print(e)\nprint(b)",
      "targetCode": "class Bag:\n    def __init__(self):\n        self.items = []\n\n    def add(self, x):\n        if len(self.items) >= 2:\n            raise ValueError(\"Full\")\n        self.items.append(x)\n\n    def __str__(self):\n        return f\"Bag:{len(self.items)}\"\n\nb = Bag()\nfor v in [10, 20, 30]:\n    try:\n        b.add(v)\n    except ValueError as e:\n        print(e)\nprint(b)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Full\nBag:2"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 입금액 검증(raise)과 천 단위 쉼표 서식({self.cash:,})을 결합한 Wallet 클래스를 완성하세요.",
      "prompt_en": "[Block] Combine deposit validation with {self.cash:,} formatting in Wallet.__str__.",
      "hint_ko": "f-string의 중괄호 안에서 숫자 변수 뒤에 :,를 붙이면 세 자리마다 쉼표가 자동으로 들어갑니다.",
      "hint_en": "Adding :, after a numeric variable inside f-string braces inserts thousands commas automatically.",
      "targetCode": "class Wallet:\n    def __init__(self, owner, cash):\n        self.owner = owner\n        self.cash = cash\n\n    def deposit(self, amt):\n        if amt <= 0:\n            raise ValueError(\"Invalid\")\n        self.cash += amt\n\n    def __str__(self):\n        return f\"{self.owner}:{self.cash:,}\"\n\nw = Wallet(\"Sua\", 10000)\ntry:\n    w.deposit(int(input()))\nexcept ValueError:\n    print(\"Err\")\nprint(w)",
      "testCases": [
        {
          "id": 1,
          "input": "5500",
          "expectedOutput": "Sua:15,500"
        },
        {
          "id": 2,
          "input": "0",
          "expectedOutput": "Err\nSua:10,000"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 양쪽 공백을 제거한 문자열이 비어 있으면 Empty 예외를 일으키도록 두 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in strip and raise to validate non-empty tag names.",
      "hint_ko": "양끝 공백을 제거하는 5글자 문자열 메서드와 예외를 일으키는 5글자 키워드를 채우세요.",
      "hint_en": "Use the 5-letter strip method and the 5-letter raise keyword.",
      "templateCode": "class Tag:\n    def __init__(self):\n        self.name = \"None\"\n\n    def set_name(self, raw):\n        clean = raw.§§§§§()\n        if not clean:\n            §§§§§ ValueError(\"Empty\")\n        self.name = clean\n\n    def __str__(self):\n        return f\"[{self.name}]\"\n\nt = Tag()\ntry:\n    t.set_name(input())\nexcept ValueError as e:\n    print(e)\nprint(t)",
      "targetCode": "class Tag:\n    def __init__(self):\n        self.name = \"None\"\n\n    def set_name(self, raw):\n        clean = raw.strip()\n        if not clean:\n            raise ValueError(\"Empty\")\n        self.name = clean\n\n    def __str__(self):\n        return f\"[{self.name}]\"\n\nt = Tag()\ntry:\n    t.set_name(input())\nexcept ValueError as e:\n    print(e)\nprint(t)",
      "testCases": [
        {
          "id": 1,
          "input": "  Vip  ",
          "expectedOutput": "[Vip]"
        },
        {
          "id": 2,
          "input": "   ",
          "expectedOutput": "Empty\n[None]"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 객체 t를 print(t)로 출력할 때 문자열 표현이 호출되지 않는 특별 메서드 이름 버그를 수정하세요.",
      "prompt_en": "[Fix Bug] Fix the special method name so print(t) invokes the string representation Jazz(4).",
      "hint_ko": "객체를 문자열로 출력할 때 자동 호출되는 특별 메서드는 __len__이 아니라 __str__입니다.",
      "hint_en": "Change def __len__(self): to def __str__(self): so print(t) uses the formatted string.",
      "templateCode": "class Ticket:\n    def __init__(self, title, seats):\n        self.title = title\n        self.seats = seats\n\n    def __len__(self):\n        return f\"{self.title}({self.seats})\"\n\nt = Ticket(\"Jazz\", 4)\nprint(t)",
      "targetCode": "class Ticket:\n    def __init__(self, title, seats):\n        self.title = title\n        self.seats = seats\n\n    def __str__(self):\n        return f\"{self.title}({self.seats})\"\n\nt = Ticket(\"Jazz\", 4)\nprint(t)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Jazz(4)"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 결제 금액(amt)이 잔액(self.cash)보다 클 때 예외가 발생해야 하는데 비교 연산자가 반대인 버그를 수정하세요.",
      "prompt_en": "[Fix Bug] Fix the comparison operator in pay() so ValueError(\"Short\") is raised when amt > self.cash.",
      "hint_ko": "결제 금액이 보유 현금보다 클 때 잔액 부족 예외를 일으켜야 하므로 <를 >로 수정하세요.",
      "hint_en": "Change if amt < self.cash: to if amt > self.cash: so over-budget payments raise ValueError.",
      "templateCode": "class Wallet:\n    def __init__(self, cash):\n        self.cash = cash\n\n    def pay(self, amt):\n        if amt < self.cash:\n            raise ValueError(\"Short\")\n        self.cash -= amt\n\nw = Wallet(100)\ntry:\n    w.pay(150)\nexcept ValueError as e:\n    print(e)",
      "targetCode": "class Wallet:\n    def __init__(self, cash):\n        self.cash = cash\n\n    def pay(self, amt):\n        if amt > self.cash:\n            raise ValueError(\"Short\")\n        self.cash -= amt\n\nw = Wallet(100)\ntry:\n    w.pay(150)\nexcept ValueError as e:\n    print(e)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Short"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] __str__ 메서드 안에서 f\"{self.title}({self.pages}p)\"를 반환하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Write return f\"{self.title}({self.pages}p)\" inside Book.__str__.",
      "hint_ko": "return f\"{self.title}({self.pages}p)\" 형태로 포맷 문자열을 반환하세요.",
      "hint_en": "Write return f\"{self.title}({self.pages}p)\" inside __str__.",
      "templateCode": "class Book:\n    def __init__(self, title, pages):\n        self.title = title\n        self.pages = pages\n\n    def __str__(self):\n        §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\n\nb = Book(\"Python\", 320)\nprint(f\"Book:{b}\")",
      "targetCode": "class Book:\n    def __init__(self, title, pages):\n        self.title = title\n        self.pages = pages\n\n    def __str__(self):\n        return f\"{self.title}({self.pages}p)\"\n\nb = Book(\"Python\", 320)\nprint(f\"Book:{b}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Book:Python(320p)"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 수량 n이 0 이하일 때 raise ValueError(\"Zero\")를 발생시키는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Write raise ValueError(\"Zero\") inside Box.set_qty when n <= 0.",
      "hint_ko": "raise ValueError(\"Zero\")를 작성해 0 이하 수량일 때 예외를 일으키세요.",
      "hint_en": "Write raise ValueError(\"Zero\") inside the if block.",
      "templateCode": "class Box:\n    def set_qty(self, n):\n        if n <= 0:\n            §§§§§§§§§§§§§§§§§§§§§§§§\n        return n\n\nb = Box()\ntry:\n    print(b.set_qty(0))\nexcept ValueError as e:\n    print(e)",
      "targetCode": "class Box:\n    def set_qty(self, n):\n        if n <= 0:\n            raise ValueError(\"Zero\")\n        return n\n\nb = Box()\ntry:\n    print(b.set_qty(0))\nexcept ValueError as e:\n    print(e)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Zero"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] Vault 객체에 대해 [20, 40] 순서로 take를 호출할 때 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output when v.take(req) runs for [20, 40] on Vault(50).",
      "hint_ko": "첫 인출 성공 후 줄어든 잔액을 기준으로 두 번째 인출을 비교하며, 예외가 발생할 때는 차감이 일어나지 않고 정상 출력 절도 건너뛴다는 점을 확인하세요.",
      "hint_en": "Check the remaining balance after the first withdrawal; when the second request exceeds that remainder, subtraction and the else print are skipped.",
      "targetCode": "class Vault:\n    def __init__(self, gold):\n        self.gold = gold\n\n    def take(self, n):\n        if n > self.gold:\n            raise ValueError(\"Short\")\n        self.gold -= n\n\n    def __str__(self):\n        return f\"G:{self.gold}\"\n\nv = Vault(50)\nfor req in [20, 40]:\n    try:\n        v.take(req)\n    except ValueError as e:\n        print(e)\n    else:\n        print(v)\nprint(f\"End-{v}\")",
      "choices": [
        "G:30\nShort\nEnd-G:30",
        "G:30\nShort\nEnd-G:-10",
        "G:30\nG:-10\nEnd-G:-10",
        "G:50\nShort\nEnd-G:50"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "G:30\nShort\nEnd-G:30"
        }
      ]
    }
  ]
};
