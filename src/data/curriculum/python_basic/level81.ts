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
      "hint_ko": "매개변수 이름 앞에 별표 기호를 붙이면 호출할 때 넘긴 여러 위치 인자들이 하나의 튜플로 묶여 들어옵니다.",
      "hint_en": "Prefixing a parameter with an asterisk packs any number of positional arguments into a single tuple.",
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
      "hint_ko": "아랫줄에 쓰인 매개변수 이름 앞에 별표를 붙여 가변 인자로 받고, 구분자 사이에 문자열들을 '결합하다'라는 뜻의 4글자 메서드를 호출하세요.",
      "hint_en": "Prefix the parameter name referenced below with an asterisk, then call the 4-letter string method meaning 'to connect together'.",
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
      "hint_ko": "그리스 문자에서 유래한 익명 함수 문법은 이름 선언이나 반환 키워드 없이 콜론 뒤 표현식의 결과를 자동으로 돌려줍니다.",
      "hint_en": "Named after a Greek letter, this inline function syntax evaluates the expression after the colon and returns it automatically.",
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
      "hint_ko": "정렬의 '핵심 기준(열쇠)'을 뜻하는 3글자 옵션 이름 뒤에, 그리스 문자 '람다'(묵음 b 포함 6글자) 익명 함수 키워드를 적으세요.",
      "hint_en": "Set the 3-letter 'lock opener / sort criterion' option to the 6-letter Greek-letter keyword (with silent 'b') for an inline function.",
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
      "hint_ko": "정렬 기준 함수가 각 단어의 글자 수를 반환하도록 지정하고 역순 옵션을 켜면 긴 단어부터 앞에 배치됩니다.",
      "hint_en": "Returning word length from the sort key function alongside the reverse option places the longest words first.",
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
      "hint_ko": "'최댓값(maximum)'의 앞 세 글자를 딴 내장 함수를 호출하고, 기준 옵션에는 그리스 문자 '람다'(묵음 b 포함 6글자) 키워드를 넣으세요.",
      "hint_en": "Call the 3-letter built-in abbreviated from 'maximum', passing the 6-letter Greek-letter inline function keyword as the criterion.",
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
      "hint_ko": "딕셔너리의 항목 쌍 뷰는 (이름, 점수) 튜플들을 제공하므로, 1번 인덱스 요소를 기준으로 역순 정렬하면 높은 점수순이 됩니다.",
      "hint_en": "Key-value pair tuples expose scores at index 1, allowing custom descending sort to rank highest scores first.",
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
      "hint_ko": "아랫줄 컴프리헨션에서 쓰는 변수 이름 앞에 별표를 붙여 가변 인자로 선언하고, 거리 계산에는 '절댓값(absolute)'의 앞 3글자 함수를 쓰세요.",
      "hint_en": "Prefix the sequence name used on the next line with an asterisk, and compute distances with the 3-letter function from 'absolute'.",
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
      "hint_ko": "반복문 안에서 점수를 정수로 바꿔 (이름, 점수) 튜플로 추가한 뒤, 두 번째 원소 기준으로 최댓값 튜플을 찾습니다.",
      "hint_en": "Append (name, integer score) tuples during the loop, then pick the tuple with the largest second element afterward.",
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
      "hint_ko": "일괄 변환의 첫 인자에 그리스 문자 '람다'(6글자) 익명 함수 키워드를 쓰고, 곱셈 결과를 '둥글게' 다듬는 5글자 반올림 함수로 감싸세요.",
      "hint_en": "Start the inline function with the 6-letter Greek-letter keyword, smoothing each taxed price with the 5-letter 'circular/smooth' function.",
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
      "hint_ko": "일반 매개변수 하나로는 세 개의 위치 인자를 받을 수 없습니다. 매개변수 이름 앞에 가변 인자 묶기 별표 기호를 붙여보세요.",
      "hint_en": "A regular parameter accepts only one argument; prefix the parameter name with an asterisk to pack multiple arguments into a tuple.",
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
      "hint_ko": "사본 정렬 내장 함수의 기준 옵션에 각 튜플의 1번 인덱스 값을 반환하는 익명 함수를 지정해 결과를 바로 출력해보세요.",
      "hint_en": "Pass the list to the copy-sorting built-in with an inline criterion function returning index 1 of each tuple, and display it.",
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
      "hint_ko": "정렬 기준이 (글자 수, 단어) 튜플이면 먼저 글자 수가 가장 짧은 단어들을 추리고, 글자 수가 같을 때는 두 번째 기준인 알파벳 사전순으로 첫 항목을 정합니다.",
      "hint_en": "Sorting by a (length, word) tuple orders by shortest length first and breaks ties alphabetically to determine index 0.",
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