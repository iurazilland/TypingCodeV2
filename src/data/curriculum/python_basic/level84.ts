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
  "totalQuestions": 13,
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
      "prompt_ko": "Hero 클래스에 __str__ 메서드를 정의하여 print(hero)를 호출했을 때 Aria(100)이 출력되도록 해보세요.",
      "prompt_en": "Define __str__ on Hero so calling print(hero) automatically outputs Aria(100).",
      "hint_ko": "문자열(string)의 앞 세 글자 양옆에 밑줄 두 개씩 붙인 특별 메서드에서 문자열을 반환하면, 객체를 출력할 때 그 문자열이 자동 사용됩니다.",
      "hint_en": "Returning a formatted string from the double-underscore string method makes printing the object display that text automatically.",
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
      "prompt_ko": "빈칸에 특별 메서드 이름을 채워 Badge 객체 b를 출력했을 때 [Gold] Min이 나오도록 완성하세요.",
      "prompt_en": "Fill in the special method name so printing Badge instance b outputs [Gold] Min.",
      "hint_ko": "'문자열(string)'의 앞 세 글자 양옆에 밑줄(언더스코어)을 두 개씩 붙인 7글자 던더(dunder) 특별 메서드 이름을 채우세요.",
      "hint_en": "Take the first 3 letters of 'string' and surround them with two underscores on each side (7 characters total).",
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
      "prompt_ko": "Point 객체 p에 __str__을 구현하고 str(p)로 변환한 문자열을 이용해 Pos:(3,7)을 출력해보세요.",
      "prompt_en": "Implement __str__ on Point, convert p via str(p), and print Pos:(3,7).",
      "hint_ko": "문자열 표현 특별 메서드를 정의해 두면 직접 출력할 때뿐 아니라 문자열 변환 함수나 f-string 안에서도 동일한 서식이 적용됩니다.",
      "hint_en": "Defining the string dunder method makes explicit string conversion and f-strings automatically use that same format.",
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
      "prompt_ko": "두 빈칸을 채워 체력을 회복한 hero 객체를 f-string 안에 바로 넣어 Info:Leo:100을 출력해보세요.",
      "prompt_en": "Fill in both blanks so embedding hero inside an f-string prints Info:Leo:100 after healing.",
      "hint_ko": "첫 빈칸은 '문자열(string)' 앞 3글자 양옆에 밑줄 두 개씩 붙인 특별 메서드 이름을, 둘째 빈칸은 체력을 회복한 객체 변수 이름을 적으세요.",
      "hint_en": "First write the 7-character dunder method from 'string' (two underscores each side), then place the healed instance variable inside { }.",
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
      "prompt_ko": "출금액이 잔액보다 크면 withdraw 메서드에서 ValueError(\"Lack\")를 발생시켜 잔액 100이 안전하게 유지되게 하세요.",
      "prompt_en": "Raise ValueError(\"Lack\") in withdraw when amt > self.balance so balance stays safe at 100.",
      "hint_ko": "잔액을 빼기 전에 먼저 한도 초과 여부를 검사해 예외를 일으키면, 출금 실패 시에도 기존 잔액 상태가 안전하게 보존됩니다.",
      "hint_en": "Checking the withdrawal limit and throwing an error before subtracting protects the balance from invalid updates.",
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
      "prompt_ko": "두 빈칸을 채워 0 이하 또는 잔액 초과 출금 시 BadAmt를 출력하고, 항상 마지막에 계좌 상태를 출력하세요.",
      "prompt_en": "Fill in both blanks to raise ValueError(\"BadAmt\") on invalid withdrawal and always print acc in finally.",
      "hint_ko": "잘못된 금액일 때 예외를 위로 '일으키는' 5글자 키워드를 쓰고, 맨 끝에는 성공·실패와 무관하게 '마지막에'(final + -ly) 실행되는 7글자 키워드를 쓰세요.",
      "hint_en": "Throw the error with the 5-letter 'lift up' keyword, and print the account unconditionally inside the 7-letter 'final' + '-ly' block.",
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
      "prompt_ko": "최대 2개까지만 담기는 Box 클래스의 add 메서드에서 정원 초과 시 Full 예외를 발생시키고 최종 개수를 출력하세요.",
      "prompt_en": "Raise ValueError(\"Full\") in Box.add when len(self.items) >= 2, then print box showing Count:2.",
      "hint_ko": "현재 담긴 개수가 정원 이상일 때 먼저 예외를 일으켜 추가를 차단하면, 초과분은 리스트에 들어가지 못합니다.",
      "hint_en": "Checking capacity and throwing an exception before appending prevents extra items from entering the list.",
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
      "prompt_ko": "세 빈칸을 채워 허용 온도(-50~100)를 벗어나면 Out을 출력하고, 정상일 때만 센서 객체를 출력하세요. (예: 35 -> 35C)",
      "prompt_en": "Fill in the three blanks so valid temperatures print the sensor via else and out-of-range inputs print Out.",
      "hint_ko": "예외를 '일으키는' 5글자 키워드, '문자열(string)' 앞 3글자 양옆에 밑줄 두 개씩 붙인 특별 메서드, 오류 없을 때만 실행되는 4글자 '그 외' 키워드를 채우세요.",
      "hint_en": "Use the 5-letter 'lift up' keyword, the 7-character dunder method from 'string', and the 4-letter 'otherwise' branch keyword.",
      "templateCode": "class TempSensor:\n    def __init__(self, temp):\n        self.temp = temp\n\n    def set_temp(self, val):\n        if val < -50 or val > 100:\n            §§§§§ ValueError(\"Out\")\n        self.temp = val\n\n    def §§§§§§§(self):\n        return f\"{self.temp}C\"\n\ns = TempSensor(20)\ntry:\n    s.set_temp(int(input()))\nexcept ValueError as e:\n    print(e)\n§§§§:\n    print(s)",
      "targetCode": "class TempSensor:\n    def __init__(self, temp):\n        self.temp = temp\n\n    def set_temp(self, val):\n        if val < -50 or val > 100:\n            raise ValueError(\"Out\")\n        self.temp = val\n\n    def __str__(self):\n        return f\"{self.temp}C\"\n\ns = TempSensor(20)\ntry:\n    s.set_temp(int(input()))\nexcept ValueError as e:\n    print(e)\nelse:\n    print(s)",
      "testCases": [
        {
          "id": 1,
          "input": "35",
          "expectedOutput": "35C"
        },
        {
          "id": 2,
          "input": "120",
          "expectedOutput": "Out"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "Wallet의 deposit에서 0 이하 입금을 차단하고, __str__에서 천 단위 쉼표(:, ) 서식으로 잔액을 출력해보세요.",
      "prompt_en": "Reject <= 0 deposits in Wallet.deposit and format cash with thousands commas (:,) in __str__.",
      "hint_ko": "0 이하 입금액은 예외로 막고, 문자열 표현 메서드의 f-string 변수 뒤에 콜론과 쉼표 서식 지정자를 붙이면 세 자리마다 쉼표가 표시됩니다.",
      "hint_en": "Block non-positive amounts with an error, and use the colon-comma format specifier inside the f-string for thousands separators.",
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
      "prompt_ko": "세 빈칸을 채워 양쪽 공백을 제거한 상품명이 비어 있으면 Empty 예외를 일으키고 담긴 목록을 쉼표로 출력하세요.",
      "prompt_en": "Fill in the three blanks to strip whitespace, raise ValueError(\"Empty\") if blank, and join items in __str__.",
      "hint_ko": "양끝 공백을 '벗겨내는' 5글자 메서드, 빈 문자열일 때 예외를 '일으키는' 5글자 키워드, 목록을 구분자로 '결합하는' 4글자 메서드를 차례로 쓰세요.",
      "hint_en": "Trim spaces with the 5-letter 'peel off' method, throw errors with the 5-letter 'lift up' keyword, and connect items with the 4-letter 'connect' method.",
      "templateCode": "class Cart:\n    def __init__(self):\n        self.names = []\n\n    def add(self, name):\n        clean = name.§§§§§()\n        if not clean:\n            §§§§§ ValueError(\"Empty\")\n        self.names.append(clean)\n\n    def __str__(self):\n        return \",\".§§§§(self.names)\n\nc = Cart()\nfor raw in [\" Milk \", \"   \", \"Bread\"]:\n    try:\n        c.add(raw)\n    except ValueError as e:\n        print(e)\nprint(c)",
      "targetCode": "class Cart:\n    def __init__(self):\n        self.names = []\n\n    def add(self, name):\n        clean = name.strip()\n        if not clean:\n            raise ValueError(\"Empty\")\n        self.names.append(clean)\n\n    def __str__(self):\n        return \",\".join(self.names)\n\nc = Cart()\nfor raw in [\" Milk \", \"   \", \"Bread\"]:\n    try:\n        c.add(raw)\n    except ValueError as e:\n        print(e)\nprint(c)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Empty\nMilk,Bread"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "객체 t를 print(t)로 출력할 때 문자열 표현 메서드가 자동 호출되지 않는 이름 버그를 고쳐 Jazz(4)를 출력하세요.",
      "prompt_en": "Fix the method name bug so print(t) automatically invokes the string representation and prints Jazz(4).",
      "hint_ko": "밑줄 없는 일반 메서드 이름으로는 객체를 출력할 때 자동 호출되지 않습니다. 양옆에 밑줄을 두 개씩 붙인 던더 특별 메서드 이름으로 수정하세요.",
      "hint_en": "A plain method name is not called automatically by print(); surround the 3-letter method name with two underscores on each side.",
      "templateCode": "class Ticket:\n    def __init__(self, title, seats):\n        self.title = title\n        self.seats = seats\n\n    def str(self):\n        return f\"{self.title}({self.seats})\"\n\nt = Ticket(\"Jazz\", 4)\nprint(t)",
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
      "kind": "one_line",
      "prompt_ko": "코드 마지막에 한 줄을 추가하여 객체 b 앞에 Book:을 붙여 출력해보세요. (출력 예: Book:Python(320p))",
      "prompt_en": "Add one line at the end to print Book: followed by object b (e.g., Book:Python(320p)).",
      "hint_ko": "클래스에 문자열 표현 메서드가 이미 구현되어 있으므로, f-string의 접두사 뒤 중괄호 안에 객체 변수를 바로 넣어 출력해보세요.",
      "hint_en": "Because the class already defines its string representation, place the object variable inside { } after the prefix in an f-string and print it.",
      "templateCode": "class Book:\n    def __init__(self, title, pages):\n        self.title = title\n        self.pages = pages\n\n    def __str__(self):\n        return f\"{self.title}({self.pages}p)\"\n\nb = Book(\"Python\", 320)\n§§§§§§§§§§§§§§§§§§",
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
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "Vault 객체에 대해 [20, 40] 순서로 take를 호출할 때 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "Select the exact output when v.take(req) runs for [20, 40] on Vault(50).",
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