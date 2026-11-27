import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_113: PracticeRound = {
  "id": "py-basic-r113",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 113,
  "title_ko": "파이썬 베이직 전 과정(Part 1 + Part 2) 마스터 종합",
  "title_en": "Python Basic Complete (Part 1 + Part 2) Final Master Review",
  "description_ko": "파이썬 베이직 113레벨 전 과정(컬렉션 심화·컴프리헨션·문자열 서식·내장 함수·lambda·클래스 상속·예외 확장)을 완성하는 파이널 마스터입니다.",
  "description_en": "The grand finale of the 113-level Python Basic curriculum, synthesizing Part 1 foundations and Part 2 extensions.",
  "totalQuestions": 10,
  "unlockedBlocks": [],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 입력된 단어들의 대소문자를 구분하지 않고 등장 횟수를 집계한 뒤 알파벳순으로 정렬해 출력하도록 빈칸 3곳을 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the three blanks to count case-insensitive word frequencies and print them in alphabetical order.",
      "hint_ko": "기본값 안전 조회 메서드, 사본 정렬 내장 함수, 문자열 결합 메서드를 채우세요.",
      "hint_en": "Supply the safe lookup method, the sorting function, and the joining method.",
      "targetCode": "words = [w.lower() for w in input().split()]\ncounts = {}\nfor w in words:\n    counts[w] = counts.get(w, 0) + 1\npairs = [f\"{k}:{counts[k]}\" for k in sorted(counts)]\nprint(\",\".join(pairs))",
      "templateCode": "words = [w.lower() for w in input().split()]\ncounts = {}\nfor w in words:\n    counts[w] = counts.§§§§(w, 0) + 1\npairs = [f\"{k}:{counts[k]}\" for k in §§§§§§§(counts)]\nprint(\",\".§§§§§(pairs))",
      "testCases": [
        {
          "id": 1,
          "input": "Py code PY py Code",
          "expectedOutput": "code:2,py:3"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 가변 인자로 전달된 점수들과 보너스의 총합 및 소수 둘째 자리까지의 평균을 출력하도록 빈칸 3곳을 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the three blanks to compute the total of variadic scores plus bonus and format the average to two decimal places.",
      "hint_ko": "별표 가변 매개변수(*nums), 합계 함수(sum), 그리고 소수 둘째 자리 서식(.2f)을 차례로 채우세요.",
      "hint_en": "Fill in *nums, the sum function, and the 3-character .2f format specifier.",
      "targetCode": "def calc_total(*nums, bonus=0):\n    return sum(nums) + bonus\n\nt = calc_total(400, 500, 600, bonus=100)\navg = t / 3\nprint(f\"Total:{t:,} Avg:{avg:.2f}\")",
      "templateCode": "def calc_total(§§§§§§, bonus=0):\n    return §§§§(nums) + bonus\n\nt = calc_total(400, 500, 600, bonus=100)\navg = t / 3\nprint(f\"Total:{t:,} Avg:{avg:§§§§}\")",
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
      "prompt_ko": "[빈칸 채우기] 계좌 클래스를 상속받아 유효하지 않은 출금액에 대해 예외를 발생시키고 4단계 예외 처리 구문으로 실행하도록 빈칸 3곳을 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the three blanks in SafeAccount and the 4-stage exception block to validate withdrawals and always run the cleanup step.",
      "hint_ko": "부모 클래스 이름, 예외 발생 키워드, 무조건 실행 마무리 키워드를 채우세요.",
      "hint_en": "Supply the parent class name, the exception-raising keyword, and the cleanup keyword.",
      "targetCode": "class Account:\n    def __init__(self, name, bal):\n        self.name = name\n        self.bal = bal\n\n    def __str__(self):\n        return f\"{self.name}:{self.bal:,}\"\n\nclass SafeAccount(Account):\n    def withdraw(self, amt):\n        if amt <= 0 or amt > self.bal:\n            raise ValueError(\"Denied\")\n        self.bal -= amt\n\nacc = SafeAccount(\"Aria\", 5000)\ntry:\n    acc.withdraw(int(input()))\nexcept ValueError as e:\n    print(e)\nelse:\n    print(acc)\nfinally:\n    print(\"End\")",
      "templateCode": "class Account:\n    def __init__(self, name, bal):\n        self.name = name\n        self.bal = bal\n\n    def __str__(self):\n        return f\"{self.name}:{self.bal:,}\"\n\nclass SafeAccount(§§§§§§§§):\n    def withdraw(self, amt):\n        if amt <= 0 or amt > self.bal:\n            §§§§§§ ValueError(\"Denied\")\n        self.bal -= amt\n\nacc = SafeAccount(\"Aria\", 5000)\ntry:\n    acc.withdraw(int(input()))\nexcept ValueError as e:\n    print(e)\nelse:\n    print(acc)\n§§§§§§§§:\n    print(\"End\")",
      "testCases": [
        {
          "id": 1,
          "input": "1500",
          "expectedOutput": "Aria:3,500\nEnd"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 원본 리스트 a를 그대로 유지하면서 독립된 사본 리스트 b에만 40이 추가되도록 잘못 호출한 메서드를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the wrong method call so b becomes an independent copy of list a before appending 40.",
      "hint_ko": "a.copy()로 독립된 사본 리스트를 만들어야 원본 a가 바뀌지 않습니다.",
      "hint_en": "Use a.copy() instead of assigning a directly so b becomes an independent shallow copy.",
      "templateCode": "a = [10, 20, 30]\nb = a.sort()\nb.append(40)\nprint(a, b)",
      "targetCode": "a = [10, 20, 30]\nb = a.copy()\nb.append(40)\nprint(a, b)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 20, 30] [10, 20, 30, 40]"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 입력값이 0~100 범위를 벗어났을 때 호출부의 예외 처리 블록에서 정상적으로 잡아 처리할 수 있도록 예외 클래스를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the exception class in the raise statement so the caller's except block catches out-of-range inputs.",
      "hint_ko": "호출부의 except ValueError as e:에서 잡을 수 있도록 IndexError 대신 ValueError를 발생시키세요.",
      "hint_en": "Change raise IndexError(\"Range\") to raise ValueError(\"Range\").",
      "templateCode": "def parse_rate(text):\n    val = int(text)\n    if val < 0 or val > 100:\n        raise IndexError(\"Range\")\n    return val\n\ntry:\n    r = parse_rate(input())\nexcept ValueError as e:\n    print(f\"Err:{e}\")\nelse:\n    print(f\"OK:{r}%\")",
      "targetCode": "def parse_rate(text):\n    val = int(text)\n    if val < 0 or val > 100:\n        raise ValueError(\"Range\")\n    return val\n\ntry:\n    r = parse_rate(input())\nexcept ValueError as e:\n    print(f\"Err:{e}\")\nelse:\n    print(f\"OK:{r}%\")",
      "testCases": [
        {
          "id": 1,
          "input": "120",
          "expectedOutput": "Err:Range"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 자식 클래스 TaxItem에서 세금 100원이 더해진 결제 금액을 반환하도록 연산자 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the operator in TaxItem.pay() so it adds 100 tax to the price instead of subtracting it.",
      "hint_ko": "세금이 추가되어야 하므로 self.price - 100을 self.price + 100으로 수정하세요.",
      "hint_en": "Change self.price - 100 to self.price + 100 in TaxItem.pay.",
      "templateCode": "class Item:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\n    def pay(self):\n        return self.price\n\n    def __str__(self):\n        return f\"{self.name}:{self.pay()}\"\n\nclass TaxItem(Item):\n    def pay(self):\n        return self.price - 100\n\nbag = [Item(\"Pen\", 900), TaxItem(\"Book\", 1500)]\ns = sorted(bag, key=lambda x: x.pay(), reverse=True)\nprint(\",\".join([str(x) for x in s]))",
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
      "prompt_ko": "[한 줄 완성] avg_ok와 all_ok가 모두 참이면 \"PASS\", 아니면 \"FAIL\"을 저장하는 한 줄 삼항 조건 표현식을 res에 작성해보세요.",
      "prompt_en": "[Complete Line] Assign \"PASS\" if avg_ok and all_ok else \"FAIL\" to res.",
      "hint_ko": "res = \"PASS\" if avg_ok and all_ok else \"FAIL\" 형태로 조건 표현식을 작성하세요.",
      "hint_en": "Write res = \"PASS\" if avg_ok and all_ok else \"FAIL\" on the masked line.",
      "targetCode": "scores = list(map(int, input().split()))\navg_ok = sum(scores) / len(scores) >= 80\nall_ok = all([s >= 60 for s in scores])\nres = \"PASS\" if avg_ok and all_ok else \"FAIL\"\nprint(res)",
      "templateCode": "scores = list(map(int, input().split()))\navg_ok = sum(scores) / len(scores) >= 80\nall_ok = all([s >= 60 for s in scores])\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(res)",
      "testCases": [
        {
          "id": 1,
          "input": "85 90 75",
          "expectedOutput": "PASS"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 영웅 객체 리스트 ok를 각 객체의 레벨 속성 기준 내림차순으로 정렬해 변수 s에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Sort the hero objects in ok in descending order by their level attribute and store the sorted list in s.",
      "hint_ko": "s = sorted(ok, key=lambda h: h.lv, reverse=True) 형태로 작성하세요.",
      "hint_en": "Write s = sorted(ok, key=lambda h: h.lv, reverse=True) on the masked line.",
      "targetCode": "class Hero:\n    def __init__(self, name, lv):\n        self.name = name\n        self.lv = lv\n\n    def __str__(self):\n        return f\"{self.name}(Lv.{self.lv})\"\n\nhs = [Hero(\"Kai\", 12), Hero(\"Ara\", 25), Hero(\"Leo\", 8)]\nok = [h for h in hs if h.lv >= 10]\ns = sorted(ok, key=lambda h: h.lv, reverse=True)\nprint(\",\".join([str(h) for h in s]))",
      "templateCode": "class Hero:\n    def __init__(self, name, lv):\n        self.name = name\n        self.lv = lv\n\n    def __str__(self):\n        return f\"{self.name}(Lv.{self.lv})\"\n\nhs = [Hero(\"Kai\", 12), Hero(\"Ara\", 25), Hero(\"Leo\", 8)]\nok = [h for h in hs if h.lv >= 10]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(\",\".join([str(h) for h in s]))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Ara(Lv.25),Kai(Lv.12)"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 가변 인자, 조건부 컴프리헨션, set 중복 제거, 내림차순 정렬과 enumerate를 결합한 코드의 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of pick(10, 5, 20, 10, 20, 15) after deduplication, sorting, and enumeration.",
      "hint_ko": "10 이상인 값에서 중복을 제거한 {10, 15, 20}을 내림차순 정렬해 [20, 15, 10]으로 만들고 1번부터 번호를 붙입니다.",
      "hint_en": "Filter >= 10, deduplicate with set(), sort descending to [20, 15, 10], and number from 1.",
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
      "prompt_ko": "[출력 결과 예측] 클래스 상속, __str__, raise 예외 처리, lambda 정렬과 isinstance를 통합한 파이널 문제의 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of this final Python Basic program combining OOP, exceptions, and sorting.",
      "hint_ko": "base가 0인 B는 Invalid를 출력하고 제외되며, C(800+500=1300)와 A(1000)가 내림차순 정렬되고 VIP 객체도 Ticket 인스턴스로 인정됩니다.",
      "hint_en": "B raises Invalid; valid items C(1300) and A(1000) sort descending, and isinstance(s[0], Ticket) is True.",
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
