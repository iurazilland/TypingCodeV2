import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_87: PracticeRound = {
  "id": "py-basic-r87",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 87,
  "title_ko": "87레벨: 파이썬 베이직 전 과정(Part 1 + Part 2) 파이널 마스터 종합",
  "title_en": "Level 87: Python Basic Complete (Part 1 + Part 2) Final Master Review",
  "description_ko": "파이썬 베이직 87레벨 전 과정(제어문·컬렉션·컴프리헨션·가변 인자·lambda·예외 흐름·클래스 상속)을 완성하는 파이널 종합 마스터입니다.",
  "description_en": "Complete the entire 87-level Python Basic journey across Part 1 and Part 2 in this comprehensive final master challenge.",
  "totalQuestions": 10,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "type",
    "math",
    "iter",
    "sorted",
    "map",
    "method",
    "if",
    "for_range",
    "for_in",
    "while",
    "break",
    "continue",
    "def",
    "class",
    "try",
    "raise"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "세 빈칸을 채워 입력 단어를 소문자로 통일해 빈도를 세고 사전순으로 출력하세요. (예: A b a -> a:2,b:1)",
      "prompt_en": "Fill in the three blanks to lowercase words, count frequencies via .get(), and print sorted key:count pairs.",
      "hint_ko": "영문자를 소문자로 통일하는 문자열 메서드, 키가 없을 때 기본값 0을 돌려주는 사전 안전 조회 메서드, 키들을 오름차순으로 배열하는 사본 정렬 함수를 차례로 떠올려보세요.",
      "hint_en": "Recall in order: the string method that converts letters to small case, the safe dictionary lookup method with fallback 0, and the built-in function that orders dictionary keys.",
      "templateCode": "words = [w.§§§§§() for w in input().split()]\ncounts = {}\nfor w in words:\n    counts[w] = counts.§§§(w, 0) + 1\npairs = [f\"{k}:{counts[k]}\" for k in §§§§§§(counts)]\nprint(\",\".join(pairs))",
      "targetCode": "words = [w.lower() for w in input().split()]\ncounts = {}\nfor w in words:\n    counts[w] = counts.get(w, 0) + 1\npairs = [f\"{k}:{counts[k]}\" for k in sorted(counts)]\nprint(\",\".join(pairs))",
      "testCases": [
        {
          "id": 1,
          "input": "Py code PY py Code",
          "expectedOutput": "code:2,py:3"
        },
        {
          "id": 2,
          "input": "A b a",
          "expectedOutput": "a:2,b:1"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "세 빈칸을 채워 가변 인자(*nums)와 기본값 매개변수(bonus=0)로 합계와 평균을 서식에 맞게 출력하세요.",
      "prompt_en": "Fill in the three blanks to sum *nums plus bonus=0 and format Total with commas and Avg to 2 decimals.",
      "hint_ko": "함수 본문과 아래 호출식을 단서로 삼아, 여러 위치 인자를 튜플로 묶는 매개변수 표기, 기본값 0을 갖는 매개변수 이름, 시퀀스 합산 내장 함수를 채우세요.",
      "hint_en": "Check the function body and call site to complete the variadic tuple parameter syntax, the named default parameter, and the summation built-in.",
      "templateCode": "def calc_total(§§§§§, §§§§§=0):\n    return §§§(nums) + bonus\n\nt = calc_total(400, 500, 600, bonus=100)\navg = t / 3\nprint(f\"Total:{t:,} Avg:{avg:.2f}\")",
      "targetCode": "def calc_total(*nums, bonus=0):\n    return sum(nums) + bonus\n\nt = calc_total(400, 500, 600, bonus=100)\navg = t / 3\nprint(f\"Total:{t:,} Avg:{avg:.2f}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Total:1,600 Avg:533.33"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "네 빈칸을 채워 Account를 상속받은 SafeAccount의 출금 예외 흐름(try-except-else-finally)을 완성하세요.",
      "prompt_en": "Fill in the four blanks to complete SafeAccount(Account) with raise, else, and finally.",
      "hint_ko": "상위 계좌 클래스를 상속받고 잘못된 출금액에서 예외를 직접 일으킨 뒤, 무오류 성공 분기 절과 항상 실행되는 마무리 절을 차례로 완성하세요.",
      "hint_en": "Inherit from the base class defined above, intentionally throw an error on invalid withdrawals, and complete the no-error branch plus the unconditional cleanup block.",
      "templateCode": "class Account:\n    def __init__(self, name, bal):\n        self.name = name\n        self.bal = bal\n\n    def __str__(self):\n        return f\"{self.name}:{self.bal:,}\"\n\nclass SafeAccount(§§§§§§§):\n    def withdraw(self, amt):\n        if amt <= 0 or amt > self.bal:\n            §§§§§ ValueError(\"Denied\")\n        self.bal -= amt\n\nacc = SafeAccount(\"Aria\", 5000)\ntry:\n    acc.withdraw(int(input()))\nexcept ValueError as e:\n    print(e)\n§§§§:\n    print(acc)\n§§§§§§§:\n    print(\"End\")",
      "targetCode": "class Account:\n    def __init__(self, name, bal):\n        self.name = name\n        self.bal = bal\n\n    def __str__(self):\n        return f\"{self.name}:{self.bal:,}\"\n\nclass SafeAccount(Account):\n    def withdraw(self, amt):\n        if amt <= 0 or amt > self.bal:\n            raise ValueError(\"Denied\")\n        self.bal -= amt\n\nacc = SafeAccount(\"Aria\", 5000)\ntry:\n    acc.withdraw(int(input()))\nexcept ValueError as e:\n    print(e)\nelse:\n    print(acc)\nfinally:\n    print(\"End\")",
      "testCases": [
        {
          "id": 1,
          "input": "1500",
          "expectedOutput": "Aria:3,500\nEnd"
        },
        {
          "id": 2,
          "input": "9000",
          "expectedOutput": "Denied\nEnd"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "쉼표로 구분되어 입력된 정수들을 분리하지 못해 변환 오류가 나는 버그를 수정하세요. (예: 10,-5,20 -> [20, 10])",
      "prompt_en": "Fix the delimiter bug when splitting comma-separated integers before filtering positives and reversing.",
      "hint_ko": "문자열 분리 메서드의 인자를 비워 두면 공백을 기준으로만 자릅니다. 입력 데이터에서 숫자들 사이에 쓰인 구분 문자를 인자로 전달하세요.",
      "hint_en": "Calling the splitting method without arguments splits only on whitespace; pass the actual separator character used between the input numbers.",
      "templateCode": "nums = list(map(int, input().split()))\npos = [n for n in nums if n > 0]\nprint(pos[::-1])",
      "targetCode": "nums = list(map(int, input().split(\",\")))\npos = [n for n in nums if n > 0]\nprint(pos[::-1])",
      "testCases": [
        {
          "id": 1,
          "input": "10,-5,20,30",
          "expectedOutput": "[30, 20, 10]"
        },
        {
          "id": 2,
          "input": "-2,4,8",
          "expectedOutput": "[8, 4]"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "0~100 범위를 벗어날 때 예외가 발생하지 않고 반환되어 OK 분기로 넘어가는 버그를 수정하세요. (예: 120 -> Err:Range)",
      "prompt_en": "Fix parse_rate so out-of-range values raise ValueError(\"Range\") instead of returning it.",
      "hint_ko": "예외 객체를 일반 결과처럼 반환하면 예외 처리기가 작동하지 않고 정상 분기로 넘어갑니다. 반환 대신 예외를 실제로 발동시키는 키워드로 수정하세요.",
      "hint_en": "Sending an exception object back as a normal return value skips the error handler; replace the return statement with the exception-throwing keyword.",
      "templateCode": "def parse_rate(text):\n    val = int(text)\n    if val < 0 or val > 100:\n        return ValueError(\"Range\")\n    return val\n\ntry:\n    r = parse_rate(input())\nexcept ValueError as e:\n    print(f\"Err:{e}\")\nelse:\n    print(f\"OK:{r}%\")",
      "targetCode": "def parse_rate(text):\n    val = int(text)\n    if val < 0 or val > 100:\n        raise ValueError(\"Range\")\n    return val\n\ntry:\n    r = parse_rate(input())\nexcept ValueError as e:\n    print(f\"Err:{e}\")\nelse:\n    print(f\"OK:{r}%\")",
      "testCases": [
        {
          "id": 1,
          "input": "120",
          "expectedOutput": "Err:Range"
        },
        {
          "id": 2,
          "input": "85",
          "expectedOutput": "OK:85%"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "TaxItem이 Item을 상속받지 않아 객체 생성과 정렬 출력이 실패하는 버그를 수정하세요. (예: Book:1600,Pen:900)",
      "prompt_en": "Fix TaxItem so it inherits from Item, enabling __init__, __str__, and polymorphic pay() sorting.",
      "hint_ko": "하위 클래스 선언부에 상위 클래스가 지정되지 않아 초기화와 문자열 표현 메서드를 물려받지 못하고 있습니다. 소괄호 상속 표기를 추가하세요.",
      "hint_en": "The subclass header omits its parent class in parentheses, preventing it from inheriting initialization and string formatting.",
      "templateCode": "class Item:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\n    def pay(self):\n        return self.price\n\n    def __str__(self):\n        return f\"{self.name}:{self.pay()}\"\n\nclass TaxItem:\n    def pay(self):\n        return self.price + 100\n\nbag = [Item(\"Pen\", 900), TaxItem(\"Book\", 1500)]\ns = sorted(bag, key=lambda x: x.pay(), reverse=True)\nprint(\",\".join([str(x) for x in s]))",
      "targetCode": "class Item:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\n    def pay(self):\n        return self.price\n\n    def __str__(self):\n        return f\"{self.name}:{self.pay()}\"\n\nclass TaxItem(Item):\n    def pay(self):\n        return self.price + 100\n\nbag = [Item(\"Pen\", 900), TaxItem(\"Book\", 1500)]\ns = sorted(bag, key=lambda x: x.pay(), reverse=True)\nprint(\",\".join([str(x) for x in s]))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Book:1600,Pen:900"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "마지막에 한 줄을 추가하여 avg_ok와 all_ok가 모두 참이면 PASS, 아니면 FAIL을 삼항 연산자로 출력하세요.",
      "prompt_en": "Add one line at the end using a ternary expression to print PASS if avg_ok and all_ok else FAIL.",
      "hint_ko": "위에 준비된 두 불리언 변수가 논리곱으로 동시에 참일 때와 아닐 때 각각의 판정 문자열을 선택하는 한 줄 조건 표현식을 출력하세요.",
      "hint_en": "Output an inline conditional expression testing whether both boolean flags above hold true together to select between the two status strings.",
      "templateCode": "scores = list(map(int, input().split()))\navg_ok = sum(scores) / len(scores) >= 80\nall_ok = all([s >= 60 for s in scores])\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "scores = list(map(int, input().split()))\navg_ok = sum(scores) / len(scores) >= 80\nall_ok = all([s >= 60 for s in scores])\nprint(\"PASS\" if avg_ok and all_ok else \"FAIL\")",
      "testCases": [
        {
          "id": 1,
          "input": "85 90 75",
          "expectedOutput": "PASS"
        },
        {
          "id": 2,
          "input": "95 95 55",
          "expectedOutput": "FAIL"
        },
        {
          "id": 3,
          "input": "70 70 70",
          "expectedOutput": "FAIL"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "정렬된 리스트 s 아래에 한 줄을 추가하여 각 객체를 str(h)로 변환한 뒤 \", \"로 이어 붙여 출력하세요.",
      "prompt_en": "Add one line below s to convert each Hero in s via str(h), join with \", \", and print the result.",
      "hint_ko": "정렬된 리스트의 각 객체를 문자열 표현으로 변환해 모은 뒤, 지정된 구분자 문자열의 결합 메서드로 하나로 이어 출력해보세요.",
      "hint_en": "Convert each sorted object into a text string list, connect them via the specified separator string's joining method, and display the result.",
      "templateCode": "class Hero:\n    def __init__(self, name, lv):\n        self.name = name\n        self.lv = lv\n\n    def __str__(self):\n        return f\"{self.name}(Lv.{self.lv})\"\n\nhs = [Hero(\"Kai\", 12), Hero(\"Ara\", 25)]\nhs.append(Hero(\"Leo\", 8))\nok = [h for h in hs if h.lv >= 10]\ns = sorted(ok, key=lambda h: h.lv, reverse=True)\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "class Hero:\n    def __init__(self, name, lv):\n        self.name = name\n        self.lv = lv\n\n    def __str__(self):\n        return f\"{self.name}(Lv.{self.lv})\"\n\nhs = [Hero(\"Kai\", 12), Hero(\"Ara\", 25)]\nhs.append(Hero(\"Leo\", 8))\nok = [h for h in hs if h.lv >= 10]\ns = sorted(ok, key=lambda h: h.lv, reverse=True)\nprint(\", \".join([str(h) for h in s]))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Ara(Lv.25), Kai(Lv.12)"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "가변 인자, 컴프리헨션, set 중복 제거, 내림차순 정렬과 enumerate를 결합한 코드의 실행 결과를 고르세요.",
      "prompt_en": "Select the exact output of pick(10, 5, 20, 10, 20, 15) after deduplication, sorting, and enumeration.",
      "hint_ko": "기준값 이상만 남긴 뒤 집합 변환으로 중복 값이 제거된다는 점, 내림차순 정렬 순서, 그리고 시작 번호가 1부터 붙는다는 점을 차례로 추적해보세요.",
      "hint_en": "Filter by the threshold first, note that set conversion removes duplicates before descending sort, and trace the 1-based numbering.",
      "targetCode": "def pick(limit, *nums):\n    valid = [n for n in nums if n >= limit]\n    return sorted(set(valid), reverse=True)\n\nres = pick(10, 5, 20, 10, 20, 15)\ntags = [f\"{i}:{v}\" for i, v in enumerate(res, 1)]\nprint(\"/\".join(tags))",
      "choices": [
        "1:20/2:15/3:10",
        "1:20/2:20/3:15/4:10",
        "1:10/2:15/3:20",
        "0:20/1:15/2:10"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1:20/2:15/3:10"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "클래스 상속, __str__, raise 예외 처리, lambda 정렬과 isinstance를 통합한 마지막 문제의 결과를 고르세요.",
      "prompt_en": "Select the exact output of this grand final Python Basic program combining OOP, exceptions, and sorting.",
      "hint_ko": "기본값이 0 이하인 객체는 예외 메시지를 출력하고 유효 목록에서 제외된다는 점, 재정의된 추가 요금이 반영된 내림차순 순서, 그리고 자식 객체의 부모 타입 인정 여부를 종합해 따져보세요.",
      "hint_en": "Check which item triggers an exception (and is skipped from ok), order the valid items by their overridden costs descending, and recall whether a subclass counts as an instance of its parent.",
      "targetCode": "class Ticket:\n    def __init__(self, code, base):\n        self.code = code\n        self.base = base\n\n    def cost(self):\n        if self.base <= 0:\n            raise ValueError(\"Invalid\")\n        return self.base\n\n    def __str__(self):\n        return f\"{self.code}:{self.cost()}\"\n\nclass VIP(Ticket):\n    def cost(self):\n        if self.base <= 0:\n            raise ValueError(\"Invalid\")\n        return self.base + 500\n\nts = [Ticket(\"A\", 1000), VIP(\"B\", 0), VIP(\"C\", 800)]\nok = []\nfor t in ts:\n    try:\n        t.cost()\n    except ValueError as e:\n        print(e)\n    else:\n        ok.append(t)\ns = sorted(ok, key=lambda x: x.cost(), reverse=True)\nout_txt = \",\".join([str(x) for x in s])\nprint(out_txt, isinstance(s[0], Ticket))",
      "choices": [
        "Invalid\nC:1300,A:1000 True",
        "Invalid\nA:1000,C:1300 True",
        "Invalid\nC:1300,A:1000 False",
        "C:1300,B:500,A:1000 True"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Invalid\nC:1300,A:1000 True"
        }
      ]
    }
  ]
};