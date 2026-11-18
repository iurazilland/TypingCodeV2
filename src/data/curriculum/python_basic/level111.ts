import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_111: PracticeRound = {
  "id": "py-basic-r111",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 111,
  "title_ko": "raise로 직접 예외 발생시키기와 클래스·함수 입력 검증",
  "title_en": "Raising Exceptions with raise & Input Validation",
  "description_ko": "조건이 잘못되었을 때 raise ValueError(\"...\")로 직접 예외를 발생시켜 함수와 클래스의 잘못된 상태 변경을 차단합니다.",
  "description_en": "Raise exceptions intentionally with raise ValueError(\"...\") to validate inputs and protect object state.",
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
    "sorted",
    "math",
    "map",
    "def",
    "return",
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
      "prompt_ko": "[블록 조립] age < 0일 때 raise ValueError(\"Invalid\")로 직접 예외를 발생시키고 except에서 잡아 출력해보세요.",
      "prompt_en": "[Block] Use raise ValueError(\"Invalid\") when age < 0 and catch it in the except block.",
      "hint_ko": "raise가 실행되는 순간 try 블록의 남은 코드는 건너뛰고 즉시 except 블록으로 이동합니다.",
      "hint_en": "As soon as raise executes, Python skips the rest of try and jumps to the matching except block.",
      "targetCode": "age = -3\ntry:\n    if age < 0:\n        raise ValueError(\"Invalid\")\n    print(age)\nexcept ValueError as e:\n    print(e)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Invalid"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 입력된 나이가 음수일 때 직접 ValueError 예외를 던지도록 키워드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the keyword that intentionally triggers a ValueError when age < 0.",
      "hint_ko": "예외를 직접 일으키는 다섯 글자 파이썬 키워드를 입력하세요.",
      "hint_en": "Type the 5-letter Python keyword used to trigger an exception.",
      "targetCode": "age = int(input())\ntry:\n    if age < 0:\n        raise ValueError(\"Neg\")\n    print(f\"Age:{age}\")\nexcept ValueError as e:\n    print(e)",
      "templateCode": "age = int(input())\ntry:\n    if age < 0:\n        §§§§§ ValueError(\"Neg\")\n    print(f\"Age:{age}\")\nexcept ValueError as e:\n    print(e)",
      "testCases": [
        {
          "id": 1,
          "input": "-5",
          "expectedOutput": "Neg"
        },
        {
          "id": 2,
          "input": "20",
          "expectedOutput": "Age:20"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 함수가 홀수 인자에 대해 raise ValueError(\"Odd\")로 던진 에러를 호출부 try - except as e에서 받아 출력해보세요.",
      "prompt_en": "[Block] Raise ValueError(\"Odd\") inside half_even(n) on odd inputs and print the caught error e.",
      "hint_ko": "함수 내부에서 raise한 예외도 함수를 호출한 바깥쪽 try - except 블록에서 그대로 잡을 수 있습니다.",
      "hint_en": "An exception raised inside a function propagates to the caller's try - except block.",
      "targetCode": "def half_even(n):\n    if n % 2 != 0:\n        raise ValueError(\"Odd\")\n    return n // 2\n\ntry:\n    print(half_even(int(input())))\nexcept ValueError as e:\n    print(e)",
      "testCases": [
        {
          "id": 1,
          "input": "8",
          "expectedOutput": "4"
        },
        {
          "id": 2,
          "input": "5",
          "expectedOutput": "Odd"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 점수가 100점을 초과할 때 발생시킬 값 오류 예외 클래스 이름을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the exception class name to trigger when score exceeds 100.",
      "hint_ko": "아래 except 절에서 잡고 있는 열 글자 값 오류 예외 클래스 이름을 적으세요.",
      "hint_en": "Enter the 10-letter exception class name caught by the except clause below.",
      "targetCode": "def check(sc):\n    if sc > 100:\n        raise ValueError(\"Over100\")\n    return sc\n\ntry:\n    print(check(int(input())))\nexcept ValueError as e:\n    print(e)",
      "templateCode": "def check(sc):\n    if sc > 100:\n        raise §§§§§§§§§§(\"Over100\")\n    return sc\n\ntry:\n    print(check(int(input())))\nexcept ValueError as e:\n    print(e)",
      "testCases": [
        {
          "id": 1,
          "input": "120",
          "expectedOutput": "Over100"
        },
        {
          "id": 2,
          "input": "90",
          "expectedOutput": "90"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 계좌 클래스의 withdraw 메서드에서 잔액 부족 시 raise ValueError(\"Low\")로 잘못된 차감을 차단해보세요.",
      "prompt_en": "[Block] Raise ValueError(\"Low\") in Account.withdraw when amt > self.bal to prevent negative balances.",
      "hint_ko": "차감 코드(self.bal -= amt)가 실행되기 전에 if 조건과 raise로 먼저 막아주면 잔액이 안전하게 보호됩니다.",
      "hint_en": "Raising before self.bal -= amt aborts the method early and keeps self.bal unchanged.",
      "targetCode": "class Account:\n    def __init__(self, bal):\n        self.bal = bal\n\n    def withdraw(self, amt):\n        if amt > self.bal:\n            raise ValueError(\"Low\")\n        self.bal -= amt\n\nacc = Account(100)\ntry:\n    acc.withdraw(150)\nexcept ValueError as e:\n    print(e)\nprint(acc.bal)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Low\n100"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 상자에 2개까지만 담기도록 개수가 2 이상일 때 직접 예외를 발생시키는 키워드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the keyword to trigger ValueError(\"Full\") when the box already has 2 items.",
      "hint_ko": "예외를 직접 발생시키는 다섯 글자 파이썬 키워드를 적으세요.",
      "hint_en": "Write the 5-letter keyword that raises an exception.",
      "targetCode": "class Box:\n    def __init__(self):\n        self.items = []\n\n    def add(self, x):\n        if len(self.items) >= 2:\n            raise ValueError(\"Full\")\n        self.items.append(x)\n\nb = Box()\nfor v in [\"A\", \"B\", \"C\"]:\n    try:\n        b.add(v)\n    except ValueError as e:\n        print(e)\nprint(len(b.items))",
      "templateCode": "class Box:\n    def __init__(self):\n        self.items = []\n\n    def add(self, x):\n        if len(self.items) >= 2:\n            §§§§§ ValueError(\"Full\")\n        self.items.append(x)\n\nb = Box()\nfor v in [\"A\", \"B\", \"C\"]:\n    try:\n        b.add(v)\n    except ValueError as e:\n        print(e)\nprint(len(b.items))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Full\n2"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 리스트를 순회하며 검증 함수를 호출하고 try - except - else로 정상 데이터만 합산해 출력해보세요.",
      "prompt_en": "[Block] Loop through raw values, call parse_pos(x), and accumulate valid integers in the else block.",
      "hint_ko": "음수일 때 발생하는 예외는 except에서 걸러지고, 통과한 양수만 else 블록에서 total에 더해집니다.",
      "hint_en": "Negative numbers raise ValueError into except, while valid positive numbers are added in else.",
      "targetCode": "def parse_pos(x):\n    if x <= 0:\n        raise ValueError(\"NonPos\")\n    return x\n\ntotal = 0\nfor n in [10, -5, 20, 0, 15]:\n    try:\n        v = parse_pos(n)\n    except ValueError:\n        pass\n    else:\n        total += v\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "45"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 함수가 던진 에러 객체를 변수 e로 받아 에러 메시지를 출력하도록 별칭 키워드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the alias keyword in the except header to bind the raised ValueError to variable e.",
      "hint_ko": "예외 객체를 변수 e에 연결하는 두 글자 키워드를 적으세요.",
      "hint_en": "Enter the 2-letter keyword that binds the exception instance to e.",
      "targetCode": "def set_lv(lv):\n    if lv < 1:\n        raise ValueError(\"MinLv1\")\n    return lv\n\ntry:\n    print(set_lv(0))\nexcept ValueError as e:\n    print(f\"Err:{e}\")",
      "templateCode": "def set_lv(lv):\n    if lv < 1:\n        raise ValueError(\"MinLv1\")\n    return lv\n\ntry:\n    print(set_lv(0))\nexcept ValueError §§ e:\n    print(f\"Err:{e}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Err:MinLv1"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 입금액이 0 이하일 때 직접 예외를 발생시키고, 호출부에서 에러 객체와 최종 지갑 상태를 출력해보세요.",
      "prompt_en": "[Fill Blank] Trigger a ValueError on non-positive deposit, bind the error to e, and always print w in the cleanup block.",
      "hint_ko": "예외 발생 키워드(5글자), 별칭 키워드(2글자), 무조건 실행 마무리 키워드(7글자)를 차례로 채우세요.",
      "hint_en": "Supply the 5-letter exception-raising keyword, the 2-letter alias keyword, and the 7-letter cleanup keyword.",
      "targetCode": "class Wallet:\n    def __init__(self, cash):\n        self.cash = cash\n\n    def deposit(self, amt):\n        if amt <= 0:\n            raise ValueError(\"BadAmt\")\n        self.cash += amt\n\n    def __str__(self):\n        return f\"Cash:{self.cash:,}\"\n\nw = Wallet(1000)\ntry:\n    w.deposit(int(input()))\nexcept ValueError as e:\n    print(e)\nfinally:\n    print(w)",
      "templateCode": "class Wallet:\n    def __init__(self, cash):\n        self.cash = cash\n\n    def deposit(self, amt):\n        if amt <= 0:\n            §§§§§ ValueError(\"BadAmt\")\n        self.cash += amt\n\n    def __str__(self):\n        return f\"Cash:{self.cash:,}\"\n\nw = Wallet(1000)\ntry:\n    w.deposit(int(input()))\nexcept ValueError §§ e:\n    print(e)\n§§§§§§§:\n    print(w)",
      "testCases": [
        {
          "id": 1,
          "input": "500",
          "expectedOutput": "Cash:1,500"
        },
        {
          "id": 2,
          "input": "-100",
          "expectedOutput": "BadAmt\nCash:1,000"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 다른 언어의 예외 발생 키워드(throw)를 적어 발생한 SyntaxError를 파이썬 키워드로 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the SyntaxError caused by using 'throw' instead of Python's exception-raising keyword.",
      "hint_ko": "파이썬에서 예외를 직접 일으킬 때는 throw가 아니라 raise를 사용합니다.",
      "hint_en": "Replace throw with raise.",
      "templateCode": "n = int(input())\ntry:\n    if n < 0:\n        throw ValueError(\"Neg\")\n    print(n)\nexcept ValueError as e:\n    print(e)",
      "targetCode": "n = int(input())\ntry:\n    if n < 0:\n        raise ValueError(\"Neg\")\n    print(n)\nexcept ValueError as e:\n    print(e)",
      "testCases": [
        {
          "id": 1,
          "input": "-3",
          "expectedOutput": "Neg"
        },
        {
          "id": 2,
          "input": "10",
          "expectedOutput": "10"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 결제 금액(amt)이 보유 잔액(self.cash)보다 클 때 예외가 나야 하는데 비교 연산자가 반대인 버그를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the comparison operator in pay() so an exception is raised when amt exceeds self.cash.",
      "hint_ko": "결제 금액이 잔액보다 클 때(amt > self.cash) 잔액 부족 예외를 일으켜야 합니다.",
      "hint_en": "Change if amt < self.cash: to if amt > self.cash:.",
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
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] n < 0일 때 raise ValueError(\"Neg\")로 예외를 발생시키는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write raise ValueError(\"Neg\") inside the if n < 0 block.",
      "hint_ko": "들여쓰기 8칸 뒤에 raise ValueError(\"Neg\")를 작성하세요.",
      "hint_en": "Write raise ValueError(\"Neg\") at the indented line.",
      "targetCode": "n = int(input())\ntry:\n    if n < 0:\n        raise ValueError(\"Neg\")\n    print(n * 2)\nexcept ValueError as e:\n    print(e)",
      "templateCode": "n = int(input())\ntry:\n    if n < 0:\n        §§§§§§§§§§§§§§§§§§§§§§§\n    print(n * 2)\nexcept ValueError as e:\n    print(e)",
      "testCases": [
        {
          "id": 1,
          "input": "-4",
          "expectedOutput": "Neg"
        },
        {
          "id": 2,
          "input": "6",
          "expectedOutput": "12"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 수량 n이 0 이하일 때 raise ValueError(\"Zero\")를 발생시키는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write raise ValueError(\"Zero\") inside set_qty when n <= 0.",
      "hint_ko": "들여쓰기 12칸 뒤에 raise ValueError(\"Zero\")를 작성하세요.",
      "hint_en": "Write raise ValueError(\"Zero\") inside the if block.",
      "targetCode": "class Box:\n    def set_qty(self, n):\n        if n <= 0:\n            raise ValueError(\"Zero\")\n        return n\n\nb = Box()\ntry:\n    print(b.set_qty(0))\nexcept ValueError as e:\n    print(e)",
      "templateCode": "class Box:\n    def set_qty(self, n):\n        if n <= 0:\n            §§§§§§§§§§§§§§§§§§§§§§§§\n        return n\n\nb = Box()\ntry:\n    print(b.set_qty(0))\nexcept ValueError as e:\n    print(e)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Zero"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] Vault 객체에 대해 [20, 40] 순서로 take를 호출할 때 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output when v.take(req) runs for [20, 40] on Vault(50).",
      "hint_ko": "첫 번째 20 인출 후 잔액은 30이 되고, 두 번째 40 인출은 잔액 부족으로 예외가 발생해 차감되지 않습니다.",
      "hint_en": "After withdrawing 20 (leaving 30), requesting 40 raises \"Short\" and leaves the balance at 30.",
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
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 클래스 상속과 raise 예외 발생, try - except - else - finally가 결합된 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the loop testing SafeGate(Gate) with [15, 8, 20].",
      "hint_ko": "10 미만인 8에서만 예외가 발생해 cnt에 더해지지 않지만, finally의 tries += 1은 매 반복(3회)마다 실행됩니다.",
      "hint_en": "Only 8 raises \"Low\"; 15 and 20 pass into else (cnt = 2), while finally increments tries on all 3 turns.",
      "targetCode": "class Gate:\n    def check(self, lv):\n        if lv < 10:\n            raise ValueError(\"Low\")\n        return lv\n\ng = Gate()\ncnt, tries = 0, 0\nfor x in [15, 8, 20]:\n    try:\n        g.check(x)\n    except ValueError as e:\n        print(e)\n    else:\n        cnt += 1\n    finally:\n        tries += 1\nprint(cnt, tries)",
      "choices": [
        "Low\n2 3",
        "Low\n2 2",
        "Low\n3 3",
        "Low\n1 3"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Low\n2 3"
        }
      ]
    }
  ]
};
