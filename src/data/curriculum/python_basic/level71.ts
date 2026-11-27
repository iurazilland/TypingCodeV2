import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_71: PracticeRound = {
  "id": "py-basic-r71",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 71,
  "title_ko": "71레벨: 함수(def) 필수 기초 종합 문제풀이",
  "title_en": "Level 71: Section 8 Comprehensive Review",
  "description_ko": "섹션 1~8에서 배운 함수 정의·호출, 매개변수, return과 None, 다중 반환 언패킹, 조기 return, 기본값·키워드 인자, 변수 범위를 종합 점검합니다.",
  "description_en": "Comprehensive review of def functions, parameters, return vs None, tuple unpacking, early return, default/keyword arguments, and variable scope.",
  "totalQuestions": 10,
  "unlockedBlocks": [],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 리스트에서 기준값 이상인 첫 번째 숫자를 탐색해 성공 여부와 찾은 값을 확인해보세요.",
      "prompt_en": "[Fill Blank] Complete the search function and validity check to determine whether a matching value was found.",
      "hint_ko": "조기 반환 키워드, 빈 값 상수, 그리고 빈 값이 아님을 검사하는 세 단어 조건을 차례로 채우세요.",
      "hint_en": "Fill in the return keyword, the null constant, and the three-word non-null identity check.",
      "templateCode": "def find_first(nums, cut):\n    for x in nums:\n        if x >= cut:\n            §§§§§§§ x\n    return §§§§§\nans = find_first([10, 25, 30], 20)\nprint(ans §§§§§§§§§§§§, ans)",
      "targetCode": "def find_first(nums, cut):\n    for x in nums:\n        if x >= cut:\n            return x\n    return None\nans = find_first([10, 25, 30], 20)\nprint(ans is not None, ans)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True 25"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 숫자 리스트의 전체 합계와 최댓값을 함수를 통해 한꺼번에 구해 두 변수에 언패킹해보세요.",
      "prompt_en": "[Fill Blank] Complete the function and unpacking assignment to obtain both the total and the highest value.",
      "hint_ko": "반환 키워드, 최댓값 함수, 그리고 호출 결과를 나누어 받을 두 변수를 순서대로 적으세요.",
      "hint_en": "Complete the return keyword, the max function name, and the unpacked variable pair.",
      "templateCode": "def sum_and_max(nums):\n    §§§§§§§ sum(nums), §§§§(nums)\n§§§§§ = sum_and_max([10, 40, 20])\nprint(s, m)",
      "targetCode": "def sum_and_max(nums):\n    return sum(nums), max(nums)\ns, m = sum_and_max([10, 40, 20])\nprint(s, m)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "70 40"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 기본 수량이 1개인 상품 금액 누적 함수를 완성하고 두 번째 호출에 키워드 인자로 수량 3개를 지정해보세요.",
      "prompt_en": "[Fill Blank] Complete the item total accumulator with a default quantity of 1 and pass a quantity of 3 by keyword on the second call.",
      "hint_ko": "수량 기본값 1 선언, 전역변수 지정 키워드, 그리고 두 번째 호출의 수량 3 키워드 인자를 채우세요.",
      "hint_en": "Fill in the default parameter qty=1, the global keyword, and the keyword argument qty=3.",
      "templateCode": "total = 0\ndef add_item(price, §§§§§§):\n    §§§§§§§ total\n    total += price * qty\nadd_item(1000)\nadd_item(500, §§§§§§)\nprint(total)",
      "targetCode": "total = 0\ndef add_item(price, qty=1):\n    global total\n    total += price * qty\nadd_item(1000)\nadd_item(500, qty=3)\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2500"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 함수 호출 결과에 10을 더할 수 있도록 함수가 계산 결과를 호출부로 돌려주게 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the function body so it sends the doubled value back to the caller instead of printing it.",
      "hint_ko": "호출부 수식에서 결과값을 받아 더할 수 있도록 화면 출력문을 값 반환문으로 바꾸세요.",
      "hint_en": "Replace print(n * 2) with return n * 2 on line 2.",
      "templateCode": "def double(n):\n    print(n * 2)\nres = double(15) + 10\nprint(res)",
      "targetCode": "def double(n):\n    return n * 2\nres = double(15) + 10\nprint(res)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "40"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 리스트 안에 0보다 작은 음수가 하나라도 있을 때 참을 반환하도록 비교 조건을 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the comparison condition inside the loop so it returns true when a negative number is present.",
      "hint_ko": "음수인지 판별하려면 0보다 작은지(x < 0) 검사해야 합니다.",
      "hint_en": "Remove else: and move return False outside the for loop.",
      "templateCode": "def has_neg(nums):\n    for x in nums:\n        if x > 0:\n            return True\n    return False\nprint(has_neg([5, -3, 8]))",
      "targetCode": "def has_neg(nums):\n    for x in nums:\n        if x < 0:\n            return True\n    return False\nprint(has_neg([5, -3, 8]))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 기본값 매개변수가 일반 매개변수보다 앞에 위치해 발생한 문법 오류를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the parameter order in the function header so the required parameter comes before the default parameter.",
      "hint_ko": "기본값이 없는 일반 매개변수 base를 앞쪽에, 기본값이 있는 bonus=10을 뒤쪽에 적으세요.",
      "hint_en": "Place base first and bonus=10 second in the function header.",
      "templateCode": "def calc(bonus=10, base):\n    return base + bonus\nprint(calc(50))",
      "targetCode": "def calc(base, bonus=10):\n    return base + bonus\nprint(calc(50))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "60"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 전달받은 리스트의 원소 총합과 원소 개수를 순서대로 동시에 돌려주는 함수 내부 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the indented line that sends back both the total and the element count of the parameter list.",
      "hint_ko": "반환 키워드 뒤에 합계 함수와 길이 함수를 쉼표로 나열하세요.",
      "hint_en": "Write return sum(nums), len(nums) inside the function.",
      "templateCode": "def list_stat(nums):\n    §§§§§§§§§§§§§§§§§§§§§§§§§§§§\ns, c = list_stat([10, 20, 30])\nprint(s, c)",
      "targetCode": "def list_stat(nums):\n    return sum(nums), len(nums)\ns, c = list_stat([10, 20, 30])\nprint(s, c)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "60 3"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 밑과 기본값이 2인 지수 매개변수를 받아 거듭제곱을 계산하는 함수의 첫째 줄 헤더를 작성해보세요.",
      "prompt_en": "[Complete Line] Write the function header on line 1 taking the base parameter and the exponent parameter with a default of 2.",
      "hint_ko": "def power(x, n=2): 형태로 함수 선언부 첫 줄을 작성하세요.",
      "hint_en": "Write def power(x, n=2): on line 1.",
      "templateCode": "§§§§§§§§§§§§§§§§§§§\n    return x ** n\nprint(power(4), power(2, 3))",
      "targetCode": "def power(x, n=2):\n    return x ** n\nprint(power(4), power(2, 3))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "16 8"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 기본값 매개변수, 키워드 인자, 조기 return이 결합된 다음 코드의 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the output of the code combining default parameters, keyword arguments, and early return.",
      "hint_ko": "calc(5)는 기본값 b=10을 쓰고, calc(5, b=20)은 b=20을 쓰며, calc(-3)은 a <= 0 조건에서 0을 조기 반환합니다.",
      "hint_en": "calc(5) uses b=10, calc(5, b=20) uses b=20, and calc(-3) returns 0 early.",
      "targetCode": "def calc(a, b=10):\n    if a <= 0:\n        return 0\n    return a + b\nprint(calc(5), calc(5, b=20), calc(-3))",
      "choices": [
        "15 25 0",
        "15 25 7",
        "5 25 0",
        "15 15 0"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "15 25 0"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 집합 중복 제거, 문자열 길이 필터링, 기본값 매개변수와 전역변수 참조가 결합된 결과를 예측해보세요.",
      "prompt_en": "[Predict Output] Predict the output of score_words combining set deduplication, string lengths, and global bonus.",
      "hint_ko": "중복된 \"code\"가 집합에서 한 번만 세어진다는 점과 마지막에 전역변수 bonus(5)가 더해짐에 주의하세요.",
      "hint_en": "Remember that set(words) removes the duplicate \"code\" before summing word lengths >= cut and adding bonus.",
      "targetCode": "bonus = 5\ndef score_words(words, cut=3):\n    total = 0\n    for w in set(words):\n        if len(w) >= cut:\n            total += len(w)\n    return total + bonus\ndata = \"go py code java code\".split()\nprint(score_words(data), score_words(data, cut=2))",
      "choices": [
        "13 17",
        "17 21",
        "8 12",
        "13 15"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "13 17"
        }
      ]
    }
  ]
};
