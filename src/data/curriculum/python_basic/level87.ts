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
  "unlockedBlocks": [],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 소문자 단어 빈도를 안전 조회로 세고 키를 사전순 정렬해 출력하세요.",
      "prompt_en": "[Fill Blank] Fill in get and sorted to count lowercase word frequencies and print sorted key:count pairs.",
      "hint_ko": "키가 없을 때 기본값 0을 돌려주는 3글자 사전 조회 메서드와 키들을 오름차순 배열하는 6글자 정렬 함수를 채우세요.",
      "hint_en": "Use the 3-letter safe dictionary lookup method and the 6-letter built-in sorting function.",
      "templateCode": "words = [w.lower() for w in input().split()]\ncounts = {}\nfor w in words:\n    counts[w] = counts.§§§(w, 0) + 1\npairs = [f\"{k}:{counts[k]}\" for k in §§§§§§(counts)]\nprint(\",\".join(pairs))",
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
      "prompt_ko": "[빈칸 채우기] 가변 인자(*nums)와 기본값 매개변수(bonus=0)로 합계와 평균을 서식에 맞게 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in *nums and sum to total variadic numbers plus bonus=0.",
      "hint_ko": "여러 위치 인자를 튜플로 묶는 별표 매개변수 표기와 시퀀스 합산 3글자 내장 함수를 채우세요.",
      "hint_en": "Complete the variadic tuple parameter *nums and the 3-letter summation built-in sum.",
      "templateCode": "def calc_total(§§§§§, bonus=0):\n    return §§§(nums) + bonus\n\nt = calc_total(400, 500, 600, bonus=100)\navg = t / 3\nprint(f\"Total:{t:,} Avg:{avg:.2f}\")",
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
      "prompt_ko": "[빈칸 채우기] Account를 상속받은 SafeAccount의 출금 예외 검증을 완성해보세요.",
      "prompt_en": "[Fill Blank] Fill in Account and raise to complete SafeAccount(Account) withdrawal validation.",
      "hint_ko": "상위 계좌 클래스(7글자)를 상속받고 잘못된 출금액에서 5글자 키워드로 예외를 일으키세요.",
      "hint_en": "Inherit from the 7-letter Account class and throw an error with the 5-letter raise keyword.",
      "templateCode": "class Account:\n    def __init__(self, name, bal):\n        self.name = name\n        self.bal = bal\n\n    def __str__(self):\n        return f\"{self.name}:{self.bal:,}\"\n\nclass SafeAccount(§§§§§§§):\n    def withdraw(self, amt):\n        if amt <= 0 or amt > self.bal:\n            §§§§§ ValueError(\"Denied\")\n        self.bal -= amt\n\nacc = SafeAccount(\"Aria\", 5000)\ntry:\n    acc.withdraw(int(input()))\nexcept ValueError as e:\n    print(e)\nelse:\n    print(acc)\nfinally:\n    print(\"End\")",
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
      "prompt_ko": "[틀린 곳 수정] 쉼표(,)로 구분된 정수들을 분리해야 하는데 콜론(:)으로 분리해 오류가 나는 버그를 수정하세요.",
      "prompt_en": "[Fix Bug] Fix the delimiter argument in .split(...) so comma-separated integers are parsed properly.",
      "hint_ko": "입력값의 숫자들은 콜론(:)이 아니라 쉼표(,)로 구분되어 있으므로 split(\",\")로 수정하세요.",
      "hint_en": "Change input().split(\":\") to input().split(\",\").",
      "templateCode": "nums = list(map(int, input().split(\":\")))\npos = [n for n in nums if n > 0]\nprint(pos[::-1])",
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
      "prompt_ko": "[틀린 곳 수정] 0~100 범위를 벗어날 때 except ValueError가 잡을 수 있도록 발생시키는 예외 클래스를 수정하세요.",
      "prompt_en": "[Fix Bug] Fix the exception class in raise so except ValueError catches out-of-range values.",
      "hint_ko": "호출부의 except ValueError as e:에서 처리할 수 있도록 IndexError 대신 ValueError를 일으키세요.",
      "hint_en": "Change raise IndexError(\"Range\") to raise ValueError(\"Range\").",
      "templateCode": "def parse_rate(text):\n    val = int(text)\n    if val < 0 or val > 100:\n        raise IndexError(\"Range\")\n    return val\n\ntry:\n    r = parse_rate(input())\nexcept ValueError as e:\n    print(f\"Err:{e}\")\nelse:\n    print(f\"OK:{r}%\")",
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
      "prompt_ko": "[틀린 곳 수정] 세금 100원이 더해진 금액을 반환해야 하는 TaxItem.pay()에서 100원을 빼고 있는 버그를 수정하세요.",
      "prompt_en": "[Fix Bug] Fix the operator in TaxItem.pay() so it adds 100 tax instead of subtracting 100.",
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
      "prompt_ko": "[한 줄 완성] avg_ok와 all_ok가 모두 참이면 \"PASS\", 아니면 \"FAIL\"을 저장하는 삼항 표현식을 res에 작성하세요.",
      "prompt_en": "[Complete Line] Assign \"PASS\" if avg_ok and all_ok else \"FAIL\" to res.",
      "hint_ko": "res = \"PASS\" if avg_ok and all_ok else \"FAIL\" 형태로 조건 표현식을 작성하세요.",
      "hint_en": "Write res = \"PASS\" if avg_ok and all_ok else \"FAIL\".",
      "templateCode": "scores = list(map(int, input().split()))\navg_ok = sum(scores) / len(scores) >= 80\nall_ok = all([s >= 60 for s in scores])\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(res)",
      "targetCode": "scores = list(map(int, input().split()))\navg_ok = sum(scores) / len(scores) >= 80\nall_ok = all([s >= 60 for s in scores])\nres = \"PASS\" if avg_ok and all_ok else \"FAIL\"\nprint(res)",
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
      "prompt_ko": "[한 줄 완성] 리스트 ok를 h.lv 기준 내림차순(reverse=True)으로 정렬해 s에 저장하는 한 줄을 완성하세요.",
      "prompt_en": "[Complete Line] Assign sorted(ok, key=lambda h: h.lv, reverse=True) to s.",
      "hint_ko": "s = sorted(ok, key=lambda h: h.lv, reverse=True) 형태로 작성하세요.",
      "hint_en": "Write s = sorted(ok, key=lambda h: h.lv, reverse=True).",
      "templateCode": "class Hero:\n    def __init__(self, name, lv):\n        self.name = name\n        self.lv = lv\n\n    def __str__(self):\n        return f\"{self.name}(Lv.{self.lv})\"\n\nhs = [Hero(\"Kai\", 12), Hero(\"Ara\", 25)]\nhs.append(Hero(\"Leo\", 8))\nok = [h for h in hs if h.lv >= 10]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(\", \".join([str(h) for h in s]))",
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
      "prompt_ko": "[출력 결과 예측] 가변 인자, 컴프리헨션, set 중복 제거, 내림차순 정렬과 enumerate를 결합한 코드의 실행 결과를 고르세요.",
      "prompt_en": "[Predict Output] Select the exact output of pick(10, 5, 20, 10, 20, 15) after deduplication, sorting, and enumeration.",
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
      "prompt_ko": "[출력 결과 예측] 클래스 상속, __str__, raise 예외 처리, lambda 정렬과 isinstance를 통합한 문제의 결과를 고르세요.",
      "prompt_en": "[Predict Output] Select the exact output of this grand final Python Basic program combining OOP, exceptions, and sorting.",
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
