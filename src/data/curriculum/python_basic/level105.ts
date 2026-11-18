import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_105: PracticeRound = {
  "id": "py-basic-r105",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 105,
  "title_ko": "가변 인자(*args, **kwargs)와 익명 함수 lambda 정렬(key=lambda)",
  "title_en": "Variadic (*args, **kwargs) & lambda Key Sorting",
  "description_ko": "인자를 튜플·딕셔너리로 묶어 받는 *args, **kwargs와 이름 없는 한 줄 함수 lambda를 활용한 정렬(key=lambda)을 익힙니다.",
  "description_en": "Master variadic *args and **kwargs parameters, inline lambda functions, and custom key=lambda sorting.",
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
    "try"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 가변 인자 *args로 개수에 상관없이 전달된 모든 숫자를 튜플로 받아 합계를 반환하는 함수를 조립해보세요.",
      "prompt_en": "[Block] Define add_all(*args) to accept any number of positional arguments as a tuple and return their sum.",
      "hint_ko": "매개변수 앞에 별표(*)를 붙이면 전달된 위치 인자들이 모두 하나의 튜플로 묶입니다.",
      "hint_en": "Prefixing a parameter with * packs all positional arguments into a tuple.",
      "targetCode": "def add_all(*args):\n    return sum(args)\n\nprint(add_all(10, 20))\nprint(add_all(1, 2, 3, 4))",
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
      "prompt_ko": "[빈칸 채우기] 인자 개수에 상관없이 위치 인자들을 모두 튜플로 묶어 받도록 매개변수 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the variadic parameter so max_val accepts any number of positional arguments in nums.",
      "hint_ko": "아랫줄에서 사용하는 매개변수 이름 nums 앞에 별표(*)를 붙여 적으세요.",
      "hint_en": "Prefix the parameter name nums with a single asterisk (*).",
      "targetCode": "def max_val(*nums):\n    return max(nums)\n\nprint(max_val(4, 19, 7))",
      "templateCode": "def max_val(§§§§§§):\n    return max(nums)\n\nprint(max_val(4, 19, 7))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "19"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 키워드 가변 인자 **kwargs로 이름=값 인자들을 딕셔너리로 받아 키와 값을 출력하는 함수를 조립해보세요.",
      "prompt_en": "[Block] Define show_info(**kwargs) to collect keyword arguments into a dictionary and print them.",
      "hint_ko": "별표 두 개(**)를 붙이면 전달된 키워드 인자들이 딕셔너리 형태로 묶여 들어옵니다.",
      "hint_en": "Prefixing a parameter with ** packs keyword arguments into a dictionary.",
      "targetCode": "def show_info(**kwargs):\n    for k, v in kwargs.items():\n        print(f\"{k}={v}\")\n\nshow_info(name=\"Kim\", lv=5)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "name=Kim\nlv=5"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 키워드 인자들을 딕셔너리 data로 묶어 받도록 별표 두 개가 붙은 가변 매개변수를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the double-asterisk parameter so keyword arguments are collected into the dictionary data.",
      "hint_ko": "함수 본문에서 사용하는 사전 이름 data 앞에 별표 두 개(**)를 붙여 적으세요.",
      "hint_en": "Prefix the parameter name data with two asterisks (**).",
      "targetCode": "def count_keys(**data):\n    return len(data)\n\nprint(count_keys(a=1, b=2, c=3))",
      "templateCode": "def count_keys(§§§§§§§):\n    return len(data)\n\nprint(count_keys(a=1, b=2, c=3))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 이름 없는 한 줄 익명 함수 lambda로 2배 계산 함수와 두 수 덧셈 함수를 만들어 호출해보세요.",
      "prompt_en": "[Block] Create inline functions with lambda x: x * 2 and lambda a, b: a + b, then print their results.",
      "hint_ko": "lambda 매개변수: 반환식 형태로 작성하며, return 키워드 없이 콜론 뒤의 식이 바로 반환됩니다.",
      "hint_en": "Write lambda params: expr without the return keyword; the expression is returned automatically.",
      "targetCode": "double = lambda x: x * 2\nadd = lambda a, b: a + b\nprint(double(7), add(3, 5))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "14 8"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 숫자 x의 제곱(x ** 2)을 반환하는 한 줄 익명 함수를 만들도록 키워드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the keyword to define an anonymous inline function that squares x.",
      "hint_ko": "이름 없는 한 줄 함수를 정의하는 여섯 글자 파이썬 키워드를 입력하세요.",
      "hint_en": "Type the 6-letter Python keyword used to create an anonymous function.",
      "targetCode": "sq = lambda x: x ** 2\nprint(sq(6))",
      "templateCode": "sq = §§§§§§§ x: x ** 2\nprint(sq(6))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "36"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] sorted()에 key=len과 key=lambda x: x[1]을 지정해 단어 길이순 정렬과 튜플 점수순 정렬을 각각 출력해보세요.",
      "prompt_en": "[Block] Use sorted() with key=len and key=lambda x: x[1] to sort words by length and tuples by score.",
      "hint_ko": "key= 옵션에 기준 함수를 넘기면 각 요소를 그 함수에 넣은 반환값을 기준으로 정렬합니다.",
      "hint_en": "The key= option sorts elements based on the value returned by the key function for each item.",
      "targetCode": "words = [\"python\", \"ai\", \"code\"]\nitems = [(\"Kim\", 85), (\"Lee\", 70)]\nprint(sorted(words, key=len))\nprint(sorted(items, key=lambda x: x[1]))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['ai', 'code', 'python']\n[('Lee', 70), ('Kim', 85)]"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] (상품명, 가격) 튜플 리스트를 가격(x[1]) 기준 오름차순으로 정렬하도록 익명 함수 키워드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the anonymous function keyword so items are sorted by their second element x[1].",
      "hint_ko": "정렬 기준 함수를 즉석에서 작성하는 여섯 글자 키워드를 입력하세요.",
      "hint_en": "Enter the 6-letter keyword for an inline anonymous function.",
      "targetCode": "items = [(\"pen\", 800), (\"bag\", 500)]\ns = sorted(items, key=lambda x: x[1])\nprint(s[0][0])",
      "templateCode": "items = [(\"pen\", 800), (\"bag\", 500)]\ns = sorted(items, key=§§§§§§§ x: x[1])\nprint(s[0][0])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "bag"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 가변 인자로 받은 (이름, 점수) 튜플들을 점수(x[1]) 기준 내림차순으로 정렬해 최고 득점자 이름을 반환해보세요.",
      "prompt_en": "[Fill Blank] Accept variadic tuples, sort them descending by score (x[1]), and return the top scorer's name.",
      "hint_ko": "가변 인자 매개변수(*rows), 사본 정렬 함수, 익명 함수 키워드를 차례로 채워보세요.",
      "hint_en": "Supply the variadic parameter *rows, the copy-sorting function, and the anonymous function keyword.",
      "targetCode": "def top_user(*rows):\n    s = sorted(rows, key=lambda x: x[1], reverse=True)\n    return s[0][0]\n\nprint(top_user((\"Kim\", 80), (\"Lee\", 95), (\"Park\", 88)))",
      "templateCode": "def top_user(§§§§§§):\n    s = §§§§§§§(rows, key=§§§§§§§ x: x[1], reverse=True)\n    return s[0][0]\n\nprint(top_user((\"Kim\", 80), (\"Lee\", 95), (\"Park\", 88)))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Lee"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 익명 함수 안에 불필요한 반환 키워드를 적어 발생한 SyntaxError를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the SyntaxError caused by writing a return statement inside a lambda expression.",
      "hint_ko": "익명 함수 콜론(:) 뒤에는 반환 키워드를 쓰지 않고 계산식(x[1])만 바로 적어야 합니다.",
      "hint_en": "Remove the return keyword inside the lambda; the expression x[1] is returned automatically.",
      "templateCode": "pairs = [(\"a\", 30), (\"b\", 10)]\nprint(sorted(pairs, key=lambda x: return x[1]))",
      "targetCode": "pairs = [(\"a\", 30), (\"b\", 10)]\nprint(sorted(pairs, key=lambda x: x[1]))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[('b', 10), ('a', 30)]"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 가격(두 번째 요소) 오름차순으로 정렬해야 하는데 상품명(첫 번째 요소) 인덱스로 정렬한 버그를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the tuple index in key=lambda x: ... so items are sorted by price (index 1).",
      "hint_ko": "(상품명, 가격) 튜플에서 가격은 0번이 아니라 1번 인덱스(x[1])에 있습니다.",
      "hint_en": "Change x[0] to x[1] so sorting compares prices instead of names.",
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
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 튜플 리스트 arr를 두 번째 요소(x[1]) 기준 오름차순으로 정렬해 변수 res에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Sort arr by the second element using sorted(arr, key=lambda x: x[1]) and assign to res.",
      "hint_ko": "res = sorted(arr, key=lambda x: x[1]) 형태로 작성하세요.",
      "hint_en": "Write res = sorted(arr, key=lambda x: x[1]) on the masked line.",
      "targetCode": "arr = [(\"b\", 30), (\"a\", 10), (\"c\", 20)]\nres = sorted(arr, key=lambda x: x[1])\nprint(res)",
      "templateCode": "arr = [(\"b\", 30), (\"a\", 10), (\"c\", 20)]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(res)",
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
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 가변 인자 튜플 args의 합계를 반환하도록 return sum(args) 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write return sum(args) inside the function body.",
      "hint_ko": "들여쓰기 4칸 뒤에 return sum(args)를 작성해 총합을 반환하세요.",
      "hint_en": "Write return sum(args) inside sum_all(*args).",
      "targetCode": "def sum_all(*args):\n    return sum(args)\nprint(sum_all(5, 10, 15))",
      "templateCode": "def sum_all(*args):\n    §§§§§§§§§§§§§§§§§\nprint(sum_all(5, 10, 15))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "30"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 가변 인자 *args와 sorted(..., key=lambda, reverse=True)가 결합된 코드의 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the code using *args and descending lambda sort.",
      "hint_ko": "두 번째 값(점수) 기준 내림차순으로 정렬한 뒤 첫 번째와 두 번째 튜플의 이름을 하이픈으로 묶습니다.",
      "hint_en": "Sort descending by score (95, 88, 72) and join the top two names with a hyphen.",
      "targetCode": "def top_two(*pairs):\n    s = sorted(pairs, key=lambda x: x[1], reverse=True)\n    return f\"{s[0][0]}-{s[1][0]}\"\n\nprint(top_two((\"Kim\", 72), (\"Lee\", 95), (\"Park\", 88)))",
      "choices": [
        "Lee-Park",
        "Kim-Park",
        "Park-Lee",
        "Lee-Kim"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Lee-Park"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] *args, **kwargs와 다중 기준 튜플 정렬 key=lambda w: (len(w), w)의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of sorting by (len(w), w) and applying **kwargs options.",
      "hint_ko": "글자 수가 짧은 순으로 먼저 정렬하고, 글자 수가 같으면(\"fig\", \"ant\") 알파벳 사전순으로 정렬합니다.",
      "hint_en": "Sorting by (len(w), w) orders shortest words first, breaking ties alphabetically (\"ant\" before \"fig\").",
      "targetCode": "def pick(*words, **opts):\n    s = sorted(words, key=lambda w: (len(w), w))\n    sep = opts.get(\"sep\", \",\")\n    return sep.join(s[:2])\n\nprint(pick(\"pear\", \"fig\", \"apple\", \"ant\", sep=\"/\"))",
      "choices": [
        "ant/fig",
        "fig/ant",
        "ant,fig",
        "apple/pear"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "ant/fig"
        }
      ]
    }
  ]
};
