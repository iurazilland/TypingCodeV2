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
  "totalQuestions": 15,
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 가변 인자(*nums)로 전달된 모든 위치 인자의 합계(sum(nums))를 반환하는 함수를 완성하세요.",
      "prompt_en": "[Block] Define add_all(*nums) to return sum(nums) for any number of positional arguments.",
      "hint_ko": "함수 내부에서 nums는 튜플이므로 sum(nums)처럼 시퀀스 내장 함수를 그대로 사용할 수 있습니다.",
      "hint_en": "Inside the function, nums is a tuple, so you can pass it directly to built-in functions like sum(nums).",
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
      "prompt_ko": "[빈칸 채우기] 구분자 sep 뒤에 전달된 단어들을 가변 인자로 받아 이어 붙이는 함수를 완성해보세요. (출력: py-code-v2)",
      "prompt_en": "[Fill Blank] Fill in both blanks so tag_join collects trailing words and joins them with sep.",
      "hint_ko": "아랫줄에 쓰인 매개변수 이름 앞에 별표를 붙여 가변 인자로 받고, 구분자로 연결하는 4글자 메서드를 호출하세요.",
      "hint_en": "Prefix the parameter name referenced below with an asterisk, then call the 4-letter join method.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 익명 함수 lambda로 2배 계산 함수와 map() 일괄 덧셈 변환을 작성해 출력해보세요.",
      "prompt_en": "[Block] Use lambda functions for doubling a number and adding 10 to each item in map().",
      "hint_ko": "lambda 안에는 return 키워드를 쓰지 않으며, 콜론 뒤의 식 자체가 반환값이 됩니다.",
      "hint_en": "Do not write return inside a lambda; the expression after the colon is returned automatically.",
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
      "prompt_ko": "[빈칸 채우기] (상품명, 가격) 튜플 리스트를 가격 오름차순으로 정렬해 가장 저렴한 상품명을 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in key and lambda to sort (name, price) tuples ascending by price.",
      "hint_ko": "정렬의 기준을 뜻하는 3글자 옵션 이름 뒤에, 그리스 문자 '람다'(6글자) 익명 함수 키워드를 적으세요.",
      "hint_en": "Set the 3-letter sort criterion option to the 6-letter lambda keyword for an inline function.",
      "templateCode": "items = [(\"pen\", 800), (\"bag\", 500)]\nby_price = sorted(items, §§§=§§§§§§ x: x[1])\nprint(by_price[0][0])",
      "targetCode": "items = [(\"pen\", 800), (\"bag\", 500)]\nby_price = sorted(items, key=lambda x: x[1])\nprint(by_price[0][0])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "bag"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] sorted()에 key=lambda w: len(w)와 reverse=True를 지정해 긴 단어부터 출력하세요.",
      "prompt_en": "[Block] Pass key=lambda w: len(w) and reverse=True to sorted() to order words longest to shortest.",
      "hint_ko": "key 함수가 반환한 글자 수(len(w))를 비교 기준으로 삼아 원본 단어들을 재배열합니다.",
      "hint_en": "sorted() compares the lengths returned by the key function while keeping the original words in the result list.",
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
      "prompt_ko": "[빈칸 채우기] 점수 기록 튜플들 중 점수가 가장 높은 항목을 찾아 Top:Lee(96)을 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in max and lambda to find the tuple with the highest score.",
      "hint_ko": "'최댓값(maximum)'의 앞 3글자 내장 함수를 호출하고, 기준 옵션에는 6글자 익명 함수 키워드를 넣으세요.",
      "hint_en": "Call the 3-letter built-in from 'maximum', passing the 6-letter inline function keyword as the criterion.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 딕셔너리의 .items()를 점수(x[1]) 기준 내림차순으로 정렬해 높은 점수부터 출력해보세요.",
      "prompt_en": "[Block] Sort scores.items() with key=lambda x: x[1] and reverse=True, then print each pair.",
      "hint_ko": "각 (이름, 점수) 튜플 x에서 1번 인덱스(x[1])가 점수이므로 이를 정렬 기준으로 지정합니다.",
      "hint_en": "In each (name, score) tuple x, index 1 (x[1]) holds the score used as the sort key.",
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
      "prompt_ko": "[빈칸 채우기] 딕셔너리 items의 키·값 쌍을 가격 오름차순으로 정렬해 출력하도록 두 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in sorted and lambda to order dictionary items by price ascending.",
      "hint_ko": "사본 정렬을 수행하는 6글자 내장 함수와 6글자 익명 함수 키워드를 차례로 채우세요.",
      "hint_en": "Use the 6-letter copy-sorting built-in and the 6-letter inline function keyword.",
      "templateCode": "items = {\"pen\": 800, \"bag\": 3000, \"cup\": 1200}\nlow = §§§§§§(items.items(), key=§§§§§§ x: x[1])\nfor k, v in low:\n    print(f\"{k}:{v}\")",
      "targetCode": "items = {\"pen\": 800, \"bag\": 3000, \"cup\": 1200}\nlow = sorted(items.items(), key=lambda x: x[1])\nfor k, v in low:\n    print(f\"{k}:{v}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "pen:800\ncup:1200\nbag:3000"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] while문으로 입력받은 (이름, 점수) 튜플 중 최고 득점자를 max()로 출력하세요.",
      "prompt_en": "[Block] Collect (name, score) tuples in a while loop and print the winner with max(..., key=lambda x: x[1]).",
      "hint_ko": "max()가 반환한 최고 득점 튜플 best에서 best[0]은 이름, best[1]은 점수입니다.",
      "hint_en": "From the winning tuple best returned by max(), best[0] is the name and best[1] is the score.",
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
      "prompt_ko": "[빈칸 채우기] while문으로 입력받은 단어들 중 글자 수가 가장 긴 단어를 찾아 출력하세요.",
      "prompt_en": "[Fill Blank] Fill in max and lambda to find the longest word collected in the while loop.",
      "hint_ko": "가장 큰 항목을 찾는 3글자 내장 함수와 6글자 익명 함수 키워드를 채우세요.",
      "hint_en": "Use the 3-letter maximum built-in and the 6-letter inline function keyword.",
      "templateCode": "n = int(input())\nwords = []\nwhile n > 0:\n    words.append(input())\n    n -= 1\ntop = §§§(words, key=§§§§§§ w: len(w))\nprint(top)",
      "targetCode": "n = int(input())\nwords = []\nwhile n > 0:\n    words.append(input())\n    n -= 1\ntop = max(words, key=lambda w: len(w))\nprint(top)",
      "testCases": [
        {
          "id": 1,
          "input": "3\nhi\npython\ncode",
          "expectedOutput": "python"
        },
        {
          "id": 2,
          "input": "2\napple\ncat",
          "expectedOutput": "apple"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 가격(두 번째 요소) 오름차순으로 정렬해야 하는데 상품명 인덱스로 정렬하는 버그를 수정하세요.",
      "prompt_en": "[Fix Bug] Fix the tuple index in key=lambda x: ... so items are sorted by price (index 1).",
      "hint_ko": "(상품명, 가격) 튜플에서 가격은 0번이 아니라 1번 인덱스(x[1])에 들어 있습니다.",
      "hint_en": "In each (name, price) tuple, the price is at index 1 (x[1]), not index 0.",
      "templateCode": "items = [(\"pen\", 800), (\"bag\", 500), (\"cup\", 900)]\nby_price = sorted(items, key=lambda x: x[0])\nprint(by_price[0][0])",
      "targetCode": "items = [(\"pen\", 800), (\"bag\", 500), (\"cup\", 900)]\nby_price = sorted(items, key=lambda x: x[1])\nprint(by_price[0][0])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "bag"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 가변 인자들 중 최댓값과 최솟값의 차이를 반환해야 하는데 항상 0이 나오는 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the first function call in return so gap_all returns max(nums) - min(nums).",
      "hint_ko": "가장 큰 값에서 가장 작은 값을 빼야 하므로 앞쪽의 min(nums)을 max(nums)로 수정하세요.",
      "hint_en": "Change the first min(nums) to max(nums) to compute the range between maximum and minimum.",
      "templateCode": "def gap_all(*nums):\n    return min(nums) - min(nums)\nprint(gap_all(10, 4, 19, 7))",
      "targetCode": "def gap_all(*nums):\n    return max(nums) - min(nums)\nprint(gap_all(10, 4, 19, 7))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "15"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 튜플 리스트 pairs를 두 번째 원소(x[1]) 기준 오름차순으로 정렬한 결과를 res에 저장하세요.",
      "prompt_en": "[Complete Line] Assign sorted(pairs, key=lambda x: x[1]) to res.",
      "hint_ko": "res = sorted(pairs, key=lambda x: x[1]) 형태로 정렬 기준을 지정해 저장하세요.",
      "hint_en": "Write res = sorted(pairs, key=lambda x: x[1]).",
      "templateCode": "pairs = [(\"b\", 30), (\"a\", 10), (\"c\", 20)]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(res)",
      "targetCode": "pairs = [(\"b\", 30), (\"a\", 10), (\"c\", 20)]\nres = sorted(pairs, key=lambda x: x[1])\nprint(res)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[('a', 10), ('c', 20), ('b', 30)]"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 가변 인자 튜플 nums의 합계를 반환하도록 return sum(nums) 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Write return sum(nums) inside sum_all(*nums).",
      "hint_ko": "함수 내부에서 return sum(nums)로 튜플의 총합을 반환하세요.",
      "hint_en": "Write return sum(nums) inside the function body.",
      "templateCode": "def sum_all(*nums):\n    §§§§§§§§§§§§§§§§\nprint(sum_all(5, 10, 15))",
      "targetCode": "def sum_all(*nums):\n    return sum(nums)\nprint(sum_all(5, 10, 15))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "30"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 파이썬 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following Python code.",
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
