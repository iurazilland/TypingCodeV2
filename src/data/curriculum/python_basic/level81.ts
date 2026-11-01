import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_81: PracticeRound = {
  "id": "py-basic-r81",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 81,
  "title_ko": "81레벨: 가변 인자(*args) 기초와 익명 함수 lambda 정렬",
  "title_en": "Level 81: Variadic *args & Anonymous lambda Key Sorting",
  "description_ko": "개수 제한 없이 인자를 튜플로 받는 *args와 정렬·탐색 기준을 즉석에서 지정하는 key=lambda 패턴을 익힙니다.",
  "description_en": "Learn variadic *args parameters and custom key=lambda functions with sorted(), max(), and map().",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "type",
    "math",
    "map",
    "sorted",
    "method",
    "if",
    "for_in",
    "while",
    "def"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "인자 개수에 상관없이 전달된 모든 숫자를 튜플로 받아 합계를 반환하는 def add_all(*nums): 함수를 만들고 호출해보세요.",
      "prompt_en": "Define def add_all(*nums): returning sum(nums) and print add_all(10, 20) and add_all(1, 2, 3, 4).",
      "hint_ko": "매개변수 이름 앞에 *를 붙이면(*nums) 호출할 때 넘긴 여러 위치 인자들이 하나의 튜플로 묶여 들어옵니다.",
      "hint_en": "Prefixing a parameter with * (like *nums) packs any number of positional arguments into a tuple.",
      "targetCode": "def add_all(*nums):\n    return sum(nums)\nprint(add_all(10, 20))\nprint(add_all(1, 2, 3, 4))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "30\n10"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "구분자 sep 뒤에 전달된 여러 단어를 가변 인자로 받아 하나로 이어 반환하도록 두 빈칸을 채워보세요. (출력: py-code-v2)",
      "prompt_en": "Fill in both blanks so tag_join collects all trailing words and joins them with sep.",
      "hint_ko": "일반 매개변수 sep 뒤에 가변 인자 *words를 두면 나머지 단어들이 words 튜플로 묶여 sep.join(words)에 전달됩니다.",
      "hint_en": "Declare *words after sep to pack extra arguments into words, then return sep.join(words).",
      "templateCode": "def tag_join(sep, §§§§§§):\n    return sep.§§§§(words)\nprint(tag_join(\"-\", \"py\", \"code\", \"v2\"))",
      "targetCode": "def tag_join(sep, *words):\n    return sep.join(words)\nprint(tag_join(\"-\", \"py\", \"code\", \"v2\"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "py-code-v2"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "한 줄 익명 함수 lambda x: x * 2와 map(lambda n: n + 10, nums)를 사용해 14와 변환된 리스트를 출력해보세요.",
      "prompt_en": "Create double = lambda x: x * 2 and map(lambda n: n + 10, nums), then print double(7) and res.",
      "hint_ko": "lambda 매개변수: 표현식은 def 없이 간단한 한 줄 함수를 즉석에서 만들며 표현식 결과를 자동 반환합니다.",
      "hint_en": "lambda param: expr creates a concise anonymous function that automatically returns expr.",
      "targetCode": "double = lambda x: x * 2\nnums = [3, 5, 8]\nres = list(map(lambda n: n + 10, nums))\nprint(double(7), res)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "14 [13, 15, 18]"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸을 채워 (상품명, 가격) 튜플 리스트를 두 번째 요소인 가격 오름차순으로 정렬해 상품명만 출력해보세요.",
      "prompt_en": "Fill in both blanks to sort (name, price) tuples by price ascending and print the ordered names.",
      "hint_ko": "sorted(items, key=lambda x: x[1])을 쓰면 각 튜플 x의 1번 인덱스(가격)를 기준으로 정렬합니다.",
      "hint_en": "Pass key=lambda x: x[1] to sorted() so tuples are compared by their second element.",
      "templateCode": "items = [(\"pen\", 800), (\"bag\", 500), (\"cup\", 900)]\nby_price = sorted(items, §§§=§§§§§§ x: x[1])\nprint([x[0] for x in by_price])",
      "targetCode": "items = [(\"pen\", 800), (\"bag\", 500), (\"cup\", 900)]\nby_price = sorted(items, key=lambda x: x[1])\nprint([x[0] for x in by_price])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['bag', 'pen', 'cup']"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "입력된 단어들을 글자 수(len(w)) 기준 내림차순(reverse=True)으로 정렬해 공백으로 이어 출력해보세요.",
      "prompt_en": "Sort input words by word length descending with key=lambda w: len(w), reverse=True and print joined by space.",
      "hint_ko": "sorted(a, key=lambda w: len(w), reverse=True)를 사용하면 긴 단어부터 짧은 단어 순으로 정렬됩니다.",
      "hint_en": "Combine key=lambda w: len(w) with reverse=True inside sorted() to order longest words first.",
      "targetCode": "a = input().split()\nr = sorted(a, key=lambda w: len(w), reverse=True)\nprint(\" \".join(r))",
      "testCases": [
        {
          "id": 1,
          "input": "hi python code",
          "expectedOutput": "python code hi"
        },
        {
          "id": 2,
          "input": "cat apple banana",
          "expectedOutput": "banana apple cat"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸을 채워 점수 기록 튜플들 중 점수가 가장 높은 항목을 찾아 지정된 형식으로 출력해보세요. (출력: Top:Lee(96))",
      "prompt_en": "Fill in both blanks to find the record tuple with the highest score and print Top:Lee(96).",
      "hint_ko": "max(records, key=lambda x: x[1])처럼 max()와 min()에도 정렬과 동일한 기준 함수를 지정할 수 있습니다.",
      "hint_en": "max() accepts key=lambda x: x[1] to pick the tuple whose second element (score) is largest.",
      "templateCode": "records = [(\"Kim\", 82), (\"Lee\", 96), (\"Park\", 89)]\nbest = §§§(records, key=§§§§§§ x: x[1])\nprint(f\"Top:{best[0]}({best[1]})\")",
      "targetCode": "records = [(\"Kim\", 82), (\"Lee\", 96), (\"Park\", 89)]\nbest = max(records, key=lambda x: x[1])\nprint(f\"Top:{best[0]}({best[1]})\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Top:Lee(96)"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "점수 딕셔너리의 .items()를 점수 기준 내림차순 정렬해 높은 점수부터 차례대로 출력해보세요. (출력 예: Lee:95)",
      "prompt_en": "Sort scores.items() by score descending using key=lambda x: x[1], reverse=True and print each name:score.",
      "hint_ko": "scores.items()는 (이름, 점수) 튜플들을 돌려주므로 key=lambda x: x[1], reverse=True로 랭킹 정렬이 됩니다.",
      "hint_en": "scores.items() yields (key, value) tuples, which sorted(..., key=lambda x: x[1], reverse=True) ranks highest-first.",
      "targetCode": "scores = {\"Kim\": 78, \"Lee\": 95, \"Park\": 88}\nit = scores.items()\ntop = sorted(it, key=lambda x: x[1], reverse=True)\nfor name, sc in top:\n    print(f\"{name}:{sc}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Lee:95\nPark:88\nKim:78"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "기준값 base 뒤에 여러 숫자를 가변 인자로 받아 기준값과의 최대 거리(차이 크기)를 반환하도록 두 빈칸을 채워보세요. (출력: 9)",
      "prompt_en": "Fill in both blanks so max_gap accepts base plus variadic numbers and returns the largest absolute difference.",
      "hint_ko": "매개변수에 *vals를 적어 나머지 숫자들을 받고, 컴프리헨션에서 abs(v - base)로 각 거리를 구한 뒤 max()를 반환합니다.",
      "hint_en": "Collect extra arguments with *vals and compute abs(v - base) for each v before calling max().",
      "templateCode": "def max_gap(base, §§§§§):\n    gaps = [§§§(v - base) for v in vals]\n    return max(gaps)\nprint(max_gap(10, 4, 19, 12))",
      "targetCode": "def max_gap(base, *vals):\n    gaps = [abs(v - base) for v in vals]\n    return max(gaps)\nprint(max_gap(10, 4, 19, 12))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "9"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "n명의 이름과 점수를 while 반복문으로 입력받아 튜플 리스트에 모은 뒤 최고 득점자의 이름과 점수를 출력해보세요.",
      "prompt_en": "Read n (name, score) pairs with a while loop, then find and print the highest scorer via max(..., key=lambda x: x[1]).",
      "hint_ko": "rows.append((name, int(sc)))로 튜플을 저장하고 while 종료 후 max(rows, key=lambda x: x[1])로 최고점을 찾습니다.",
      "hint_en": "Append (name, int(sc)) tuples in the while loop, then select best = max(rows, key=lambda x: x[1]).",
      "targetCode": "n = int(input())\nrows = []\nwhile n > 0:\n    name, sc = input().split()\n    rows.append((name, int(sc)))\n    n -= 1\nbest = max(rows, key=lambda x: x[1])\nprint(best[0], best[1])",
      "testCases": [
        {
          "id": 1,
          "input": "3\nKim 80\nLee 95\nPark 88",
          "expectedOutput": "Lee 95"
        },
        {
          "id": 2,
          "input": "2\nAna 91\nBen 84",
          "expectedOutput": "Ana 91"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸을 채워 입력된 가격들에 각각 1.1을 곱해 정수 반올림한 세금 포함 가격 리스트를 출력해보세요.",
      "prompt_en": "Fill in both blanks to multiply each input price by 1.1, round to the nearest integer, and print the list.",
      "hint_ko": "map()의 첫 인자로 익명 함수 lambda p: round(p * 1.1)을 넘기면 모든 가격에 부가세 반올림 계산이 적용됩니다.",
      "hint_en": "Use map(lambda p: round(p * 1.1), prices) to apply 10% tax and integer rounding to each price.",
      "templateCode": "prices = list(map(int, input().split()))\ntaxed = list(map(§§§§§§ p: §§§§§(p * 1.1), prices))\nprint(taxed)",
      "targetCode": "prices = list(map(int, input().split()))\ntaxed = list(map(lambda p: round(p * 1.1), prices))\nprint(taxed)",
      "testCases": [
        {
          "id": 1,
          "input": "100 200 300",
          "expectedOutput": "[110, 220, 330]"
        },
        {
          "id": 2,
          "input": "50 150",
          "expectedOutput": "[55, 165]"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "여러 위치 인자를 개수 제한 없이 받으려다 호출 시 인자 개수 오류(TypeError)가 난 함수 선언부를 고쳐 30을 출력해보세요.",
      "prompt_en": "Fix the function parameter declaration so mul_all(2, 3, 5) accepts multiple positional arguments and prints 30.",
      "hint_ko": "mul_all(2, 3, 5)처럼 여러 인자를 하나의 튜플 매개변수로 받으려면 매개변수 앞에 별표(*)를 붙여 *nums로 선언해야 합니다.",
      "hint_en": "Change def mul_all(nums): to def mul_all(*nums): so 2, 3, 5 are packed into the nums tuple.",
      "templateCode": "def mul_all(nums):\n    res = 1\n    for n in nums:\n        res *= n\n    return res\nprint(mul_all(2, 3, 5))",
      "targetCode": "def mul_all(*nums):\n    res = 1\n    for n in nums:\n        res *= n\n    return res\nprint(mul_all(2, 3, 5))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "30"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "튜플 리스트 pairs 아래에 한 줄을 추가하여 두 번째 원소(숫자) 기준 오름차순으로 정렬한 결과를 출력해보세요.",
      "prompt_en": "Add one line below pairs to sort it by the second tuple element ascending and print the sorted list.",
      "hint_ko": "둘째 줄에 print(sorted(pairs, key=lambda x: x[1]))을 작성하면 10, 20, 30 순서로 정렬된 리스트가 출력됩니다.",
      "hint_en": "Write print(sorted(pairs, key=lambda x: x[1])) on the second line.",
      "templateCode": "pairs = [(\"b\", 30), (\"a\", 10), (\"c\", 20)]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "pairs = [(\"b\", 30), (\"a\", 10), (\"c\", 20)]\nprint(sorted(pairs, key=lambda x: x[1]))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[('a', 10), ('c', 20), ('b', 30)]"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 파이썬 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "Select the exact output of the following Python code.",
      "hint_ko": "(글자 수, 단어) 튜플 기준으로 정렬하면 가장 짧은 길이 3인 \"fig\"와 \"ant\" 중 사전순으로 앞선 \"ant\"가 첫 번째(s[0])가 됩니다.",
      "hint_en": "Sorting by (len(w), w) puts length-3 words first (\"ant\", \"fig\") and breaks ties alphabetically, so s[0] is \"ant\".",
      "targetCode": "def pick(*items):\n    s = sorted(items, key=lambda w: (len(w), w))\n    return s[0]\nprint(pick(\"pear\", \"fig\", \"apple\", \"ant\"))",
      "choices": [
        "ant",
        "fig",
        "apple",
        "pear"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "ant"
        }
      ]
    }
  ]
};
