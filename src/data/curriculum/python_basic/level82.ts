import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_82: PracticeRound = {
  "id": "py-basic-r82",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 82,
  "title_ko": "82레벨: 예외 처리 기초 & 핵심 개념 기초편(Part 1) 완주 종합",
  "title_en": "Level 82: Section 10 & Part 1 Core Foundations Master Review",
  "description_ko": "예외 처리(try - except)와 입출력·조건·반복·컬렉션·함수·클래스까지 Part 1 핵심 기초 전 과정을 종합 점검합니다.",
  "description_en": "Master review of Part 1 synthesizing try - except with I/O, conditionals, loops, collections, functions, and classes.",
  "totalQuestions": 10,
  "unlockedBlocks": [],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 정수 변환 실패와 0 나눗셈 에러를 각각 구분해 처리하도록 세 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the attempt keyword and the two specific exception types for parsing and floor division.",
      "hint_ko": "시도 블록 키워드와 잘못된 값 변환 예외, 그리고 0 나눗셈 예외 이름을 순서대로 확인하세요.",
      "hint_en": "Check the attempt keyword, the invalid-value exception, and the division-by-zero exception.",
      "templateCode": "s = input()\n§§§§:\n    n = int(s)\n    print(f\"Ans:{120 // n}\")\nexcept §§§§§§§§§§§:\n    print(\"Err:Val\")\nexcept §§§§§§§§§§§§§§§§§§:\n    print(\"Err:Zero\")",
      "targetCode": "s = input()\ntry:\n    n = int(s)\n    print(f\"Ans:{120 // n}\")\nexcept ValueError:\n    print(\"Err:Val\")\nexcept ZeroDivisionError:\n    print(\"Err:Zero\")",
      "testCases": [
        {
          "id": 1,
          "input": "30",
          "expectedOutput": "Ans:4"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 입력의 양끝 공백을 제거(strip)한 뒤 메뉴 조회 성공 시 탈출(break)하고 없는 키 예외(KeyError)를 잡도록 빈칸 3곳을 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the retry loop with the string trimming method, loop exit keyword, and missing-key exception.",
      "hint_ko": "양끝 공백을 지우는 문자열 메서드, 루프 즉시 탈출 키워드, 그리고 딕셔너리 키 누락 예외 이름을 확인하세요.",
      "hint_en": "Use the whitespace-trimming method, the loop-exit keyword, and the missing-key exception.",
      "templateCode": "prices = {\"tea\": 3000, \"pie\": 4500}\nwhile True:\n    k = input().§§§§§§()\n    try:\n        cost = prices[k]\n        §§§§§§\n    except §§§§§§§§§:\n        print(\"NoMenu\")\nprint(f\"{k}:{cost}\")",
      "targetCode": "prices = {\"tea\": 3000, \"pie\": 4500}\nwhile True:\n    k = input().strip()\n    try:\n        cost = prices[k]\n        break\n    except KeyError:\n        print(\"NoMenu\")\nprint(f\"{k}:{cost}\")",
      "testCases": [
        {
          "id": 1,
          "input": "milk\npie",
          "expectedOutput": "NoMenu\npie:4500"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 변환 예외(ValueError), 생성자(__init__), 리스트 추가 메서드(append) 빈칸 3곳을 채워 유효 금액 합계와 고유 태그 수를 출력해보세요.",
      "prompt_en": "[Fill Blank] Complete parse_num() and the Ledger class to print the sum of valid amounts and count of unique tags.",
      "hint_ko": "값 변환 예외 이름과 생성자 특수 메서드 이름, 그리고 리스트 끝에 추가하는 메서드를 차례로 확인하세요.",
      "hint_en": "Check the invalid-value exception, the double-underscore initializer name, and the list append method.",
      "templateCode": "def parse_num(raw):\n    try:\n        return int(raw)\n    except §§§§§§§§§§§:\n        return None\nclass Ledger:\n    def §§§§§§§§§(self):\n        self.records = []\n        self.tags = set()\n    def add(self, tag, raw):\n        val = parse_num(raw)\n        if val is not None:\n            self.records.§§§§§§§(val)\n            self.tags.add(tag)\nlg = Ledger()\nfor t, r in [(\"food\", \"120\"), (\"err\", \"x\"), (\"food\", \"80\")]:\n    lg.add(t, r)\nprint(sum(lg.records), len(lg.tags))",
      "targetCode": "def parse_num(raw):\n    try:\n        return int(raw)\n    except ValueError:\n        return None\nclass Ledger:\n    def __init__(self):\n        self.records = []\n        self.tags = set()\n    def add(self, tag, raw):\n        val = parse_num(raw)\n        if val is not None:\n            self.records.append(val)\n            self.tags.add(tag)\nlg = Ledger()\nfor t, r in [(\"food\", \"120\"), (\"err\", \"x\"), (\"food\", \"80\")]:\n    lg.add(t, r)\nprint(sum(lg.records), len(lg.tags))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "200 1"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 리스트 인덱스 범위를 벗어났을 때 잡아야 할 예외 이름이 잘못 적힌 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Replace the wrong exception type so out-of-range list access prints Unknown.",
      "hint_ko": "리스트의 유효 인덱스 범위를 벗어났을 때는 값 변환 예외가 아니라 인덱스 예외가 발생합니다.",
      "hint_en": "Out-of-bounds list indexing raises IndexError rather than ValueError.",
      "templateCode": "caps = [\"Seoul\", \"Tokyo\"]\nidx = int(input())\ntry:\n    print(caps[idx])\nexcept ValueError:\n    print(\"Unknown\")",
      "targetCode": "caps = [\"Seoul\", \"Tokyo\"]\nidx = int(input())\ntry:\n    print(caps[idx])\nexcept IndexError:\n    print(\"Unknown\")",
      "testCases": [
        {
          "id": 1,
          "input": "5",
          "expectedOutput": "Unknown"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 리스트 순회 중 정수 변환 실패를 잡으려다 인덱스 예외를 적어 프로그램이 멈추는 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the exception type inside the loop so non-numeric strings are caught and skipped.",
      "hint_ko": "문자열 \"err\"를 int(s)로 바꿀 때 발생하는 예외는 IndexError가 아니라 값 변환 예외입니다.",
      "hint_en": "Converting non-numeric text with int(s) raises ValueError, not IndexError.",
      "templateCode": "raw = [\"15\", \"err\", \"25\"]\nvalid = []\nfor s in raw:\n    try:\n        valid.append(int(s))\n    except IndexError:\n        continue\nprint(sum(valid))",
      "targetCode": "raw = [\"15\", \"err\", \"25\"]\nvalid = []\nfor s in raw:\n    try:\n        valid.append(int(s))\n    except ValueError:\n        continue\nprint(sum(valid))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "40"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 변환 실패 시 기본값을 반환하지 않고 출력만 하여 바깥 덧셈식에서 에러가 나는 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the TypeError in addition caused by printing default instead of returning it in except.",
      "hint_ko": "함수 호출 결과를 수식에서 더하려면 예외 블록에서도 값을 화면에 출력만 하지 말고 호출부로 돌려주어야 합니다.",
      "hint_en": "Return default instead of printing it so the caller can add the two results.",
      "templateCode": "def to_num(s, default=0):\n    try:\n        return int(s)\n    except ValueError:\n        print(default)\nans = to_num(\"10\") + to_num(\"bad\", default=5)\nprint(ans)",
      "targetCode": "def to_num(s, default=0):\n    try:\n        return int(s)\n    except ValueError:\n        return default\nans = to_num(\"10\") + to_num(\"bad\", default=5)\nprint(ans)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "15"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 안전 나눗셈 인스턴스 sd의 calc 메서드에 input()을 전달해 반환값을 ans에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Call sd.calc(input()) and store the returned integer in variable ans.",
      "hint_ko": "변수 ans에 인스턴스 sd의 calc(input()) 호출 결과를 대입하세요.",
      "hint_en": "Assign the result of sd.calc(input()) to ans.",
      "templateCode": "class SafeDiv:\n    def __init__(self, base):\n        self.base = base\n    def calc(self, raw):\n        try:\n            return self.base // int(raw)\n        except ZeroDivisionError:\n            return -1\n        except ValueError:\n            return -2\nsd = SafeDiv(100)\n§§§§§§§§§§§§§§§§§§§§§§§\nprint(ans)",
      "targetCode": "class SafeDiv:\n    def __init__(self, base):\n        self.base = base\n    def calc(self, raw):\n        try:\n            return self.base // int(raw)\n        except ZeroDivisionError:\n            return -1\n        except ValueError:\n            return -2\nsd = SafeDiv(100)\nans = sd.calc(input())\nprint(ans)",
      "testCases": [
        {
          "id": 1,
          "input": "25",
          "expectedOutput": "4"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 딕셔너리에 없는 학생 이름일 때 KeyError를 잡는 except 헤더 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the indented except KeyError: line inside the while True retry loop.",
      "hint_ko": "들여쓰기 4칸 위치에 딕셔너리 키 누락 예외를 잡는 except 헤더를 작성하세요.",
      "hint_en": "Write except KeyError: indented by 4 spaces.",
      "templateCode": "scores = {\"Kim\": 80, \"Lee\": 95}\nwhile True:\n    name = input()\n    try:\n        pt = scores[name]\n        break\n    §§§§§§§§§§§§§§§§§\n        print(\"Retry\")\nprint(f\"{name}={pt}\")",
      "targetCode": "scores = {\"Kim\": 80, \"Lee\": 95}\nwhile True:\n    name = input()\n    try:\n        pt = scores[name]\n        break\n    except KeyError:\n        print(\"Retry\")\nprint(f\"{name}={pt}\")",
      "testCases": [
        {
          "id": 1,
          "input": "Park\nLee",
          "expectedOutput": "Retry\nLee=95"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 딕셔너리·리스트 조회와 나눗셈 예외 분기가 결합된 함수 호출 세 번의 출력 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the exact output produced by the three calls to calc_item below.",
      "hint_ko": "나눗셈 식에서 왼쪽(딕셔너리 조회)이 오른쪽(리스트 조회)보다 먼저 평가된다는 점에 유의해 어느 에러가 먼저 나는지 추적하세요.",
      "hint_en": "Python evaluates store[k] on the left before nums[i] on the right; trace which error triggers first on the third call.",
      "targetCode": "def calc_item(store, nums, k, i):\n    try:\n        return store[k] // nums[i]\n    except KeyError:\n        return -10\n    except IndexError:\n        return -20\n    except ZeroDivisionError:\n        return 0\nst = {\"a\": 30, \"b\": 15}\narr = [5, 0]\nr1 = calc_item(st, arr, \"a\", 0)\nr2 = calc_item(st, arr, \"a\", 1)\nr3 = calc_item(st, arr, \"c\", 9)\nprint(r1, r2, r3)",
      "choices": [
        "6 0 -20",
        "6 -20 -10",
        "5 0 -10",
        "6 0 -10"
      ],
      "correctChoiceIndex": 3,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "6 0 -10"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 클래스 메서드와 예외 처리, 집합·리스트 집계가 모두 결합된 Part 1 완주 코드의 출력 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the output of the Part 1 master code combining a class, exception handling, a set, and list sum.",
      "hint_ko": "짝수 정수로 변환된 값만 집합과 리스트에 추가되며, 집합은 중복된 숫자 10을 하나로 합친다는 점을 확인하세요.",
      "hint_en": "Only valid even integers are added; notice that the list keeps duplicates while the set removes them.",
      "targetCode": "class FilterBox:\n    def __init__(self):\n        self.nums = []\n        self.uniq = set()\n    def push(self, s):\n        try:\n            n = int(s)\n            if n % 2 == 0:\n                self.nums.append(n)\n                self.uniq.add(n)\n        except ValueError:\n            pass\nfb = FilterBox()\nfor token in [\"10\", \"7\", \"bad\", \"10\", \"4\"]:\n    fb.push(token)\nprint(sum(fb.nums), len(fb.uniq))",
      "choices": [
        "24 2",
        "24 3",
        "14 2",
        "31 3"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "24 2"
        }
      ]
    }
  ]
};
