import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_91: PracticeRound = {
  "id": "py-basic-r91",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 91,
  "title_ko": "91레벨: 조건부 리스트 컴프리헨션([식 for 변수 in 시퀀스 if 조건])과 딕셔너리 컴프리헨션 기초",
  "title_en": "Level 91: Conditional List Comprehensions & Dict Comprehensions Basics",
  "description_ko": "뒤쪽 if 필터링 컴프리헨션, 앞쪽 삼항 변환 컴프리헨션, 그리고 중괄호 {k: v for ...} 딕셔너리 컴프리헨션을 익힙니다.",
  "description_en": "Master filtering comprehensions, ternary mapping comprehensions, and dictionary comprehensions ({k: v for ...}).",
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
      "prompt_ko": "[블록 조립] 맨 뒤에 if 조건을 붙인 [x for x in nums if x % 2 == 0]으로 짝수만 골라내어 출력해보세요.",
      "prompt_en": "[Block] Use [x for x in nums if x % 2 == 0] with a trailing if clause to filter only even numbers.",
      "hint_ko": "컴프리헨션 맨 뒤(for 절 오른쪽)에 if 조건을 붙이면 조건이 참인 원소만 골라 새 리스트에 담습니다.",
      "hint_en": "Adding an if condition after the for clause filters the sequence to keep only matching items.",
      "targetCode": "nums = [1, 2, 3, 4, 5, 6]\nevens = [x for x in nums if x % 2 == 0]\nprint(evens)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[2, 4, 6]"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 단어 리스트에서 글자 수가 4글자 이상인 단어만 걸러내도록 뒤쪽 필터 키워드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the trailing filter keyword to keep only words with length at least 4.",
      "hint_ko": "for 절 뒤에서 조건에 맞는 원소만 걸러내는 두 글자 조건 키워드를 적으세요.",
      "hint_en": "Write the two-letter conditional keyword at the end of the comprehension.",
      "templateCode": "words = [\"py\", \"code\", \"ai\", \"data\"]\nlong_w = [w for w in words §§ len(w) >= 4]\nprint(long_w)",
      "targetCode": "words = [\"py\", \"code\", \"ai\", \"data\"]\nlong_w = [w for w in words if len(w) >= 4]\nprint(long_w)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['code', 'data']"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 양수만 골라 10배로 변환하는 [x * 10 for x in nums if x > 0]을 조립해 출력해보세요.",
      "prompt_en": "[Block] Filter positive numbers and multiply them by 10 using [x * 10 for x in nums if x > 0].",
      "hint_ko": "뒤쪽 if x > 0을 통과한 양수 원소들만 맨 앞의 x * 10 계산식을 거쳐 새 리스트에 들어갑니다.",
      "hint_en": "Only elements satisfying if x > 0 at the end are transformed by x * 10 at the front.",
      "targetCode": "nums = [3, -1, 5, 0, -2]\nres = [x * 10 for x in nums if x > 0]\nprint(res)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[30, 50]"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 80점 이상인 점수만 골라 각각 5점씩 보너스를 더한 리스트를 만들도록 앞쪽 변환식을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the leading expression so each score s that passes the filter gets 5 added to it.",
      "hint_ko": "필터를 통과한 점수 변수 s에 5를 더하는 덧셈 수식을 for 앞에 적으세요.",
      "hint_en": "Write the addition expression s + 5 before the for keyword.",
      "templateCode": "scores = [70, 85, 90, 60]\nboost = [§§§§§ for s in scores if s >= 80]\nprint(boost)",
      "targetCode": "scores = [70, 85, 90, 60]\nboost = [s + 5 for s in scores if s >= 80]\nprint(boost)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[90, 95]"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] for 절 앞에 삼항 표현식을 둔 [x if x > 0 else 0 for x in nums]로 음수를 0으로 바꿔보세요.",
      "prompt_en": "[Block] Place the ternary expression x if x > 0 else 0 before for x in nums to replace negatives with 0.",
      "hint_ko": "원소를 걸러내지 않고 모든 원소를 조건에 따라 두 값 중 하나로 바꿀 때는 for 절 앞에 if - else를 씁니다.",
      "hint_en": "When mapping every item to one of two values without dropping any, place the ternary if - else before for.",
      "targetCode": "nums = [10, -4, 7, -1]\nclean = [x if x > 0 else 0 for x in nums]\nprint(clean)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 0, 7, 0]"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 모든 점수를 60점 기준으로 \"P\" 또는 \"F\"로 바꾼 리스트를 만들도록 삼항 분기 키워드를 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the ternary expression before the for clause so scores under 60 map to \"F\".",
      "hint_ko": "for 절 앞의 삼항 조건 표현식에서 거짓값 \"F\" 앞에 오는 네 글자 키워드를 적으세요.",
      "hint_en": "Write the four-letter fallback keyword before \"F\" in the leading ternary expression.",
      "templateCode": "scores = [80, 45, 60]\nmarks = [\"P\" if s >= 60 §§§§ \"F\" for s in scores]\nprint(marks)",
      "targetCode": "scores = [80, 45, 60]\nmarks = [\"P\" if s >= 60 else \"F\" for s in scores]\nprint(marks)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['P', 'F', 'P']"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 중괄호를 사용한 딕셔너리 컴프리헨션 {w: len(w) for w in words}로 단어 길이 사전을 만들어보세요.",
      "prompt_en": "[Block] Use the dictionary comprehension {w: len(w) for w in words} to map each word to its length.",
      "hint_ko": "중괄호 안에 {키: 값 for 변수 in 시퀀스}를 적으면 한 줄로 새 딕셔너리가 생성됩니다.",
      "hint_en": "Writing {key: val for var in seq} inside curly braces builds a dictionary in one line.",
      "targetCode": "words = [\"py\", \"code\"]\nd = {w: len(w) for w in words}\nprint(d[\"code\"], len(d))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "4 2"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 1부터 3까지의 숫자를 키로, 그 제곱수를 값으로 하는 딕셔너리 컴프리헨션의 키:값 식을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the key: value pair expression at the start of the dictionary comprehension.",
      "hint_ko": "키 자리에는 n을, 콜론 뒤 값 자리에는 n * n을 적어 키-값 쌍을 완성하세요.",
      "hint_en": "Write n: n * n before the for clause inside the curly braces.",
      "templateCode": "sq_map = {§§§§§§§§ for n in range(1, 4)}\nprint(sq_map[3], sum(sq_map.values()))",
      "targetCode": "sq_map = {n: n * n for n in range(1, 4)}\nprint(sq_map[3], sum(sq_map.values()))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "9 14"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 양수만 걸러내는 리스트 컴프리헨션과 각 숫자의 2배를 저장하는 딕셔너리 컴프리헨션을 완성해보세요.",
      "prompt_en": "[Fill Blank] Complete the trailing filter keyword and the dictionary comprehension key-value separator and loop keyword.",
      "hint_ko": "뒤쪽 필터 조건 키워드와 딕셔너리 컴프리헨션의 키:값 쌍, 그리고 반복 키워드를 확인하세요.",
      "hint_en": "Check the trailing if keyword, the key: value expression, and the for keyword.",
      "templateCode": "nums = [-2, 3, -1, 5]\npos = [x for x in nums §§ x > 0]\ntable = {§§§§§§§§ §§§ x in pos}\nprint(pos, table[5])",
      "targetCode": "nums = [-2, 3, -1, 5]\npos = [x for x in nums if x > 0]\ntable = {x: x * 2 for x in pos}\nprint(pos, table[5])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[3, 5] 10"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 짝수만 걸러내는 단독 필터 조건절을 순회절 앞에 적어서 발생한 문법 오류를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the SyntaxError by moving the filtering condition clause to the end of the list comprehension.",
      "hint_ko": "else가 없는 필터링 전용 if 조건절은 반드시 for 절의 맨 뒤에 위치해야 합니다.",
      "hint_en": "A filtering if clause without else must be placed after the for clause, not before it.",
      "templateCode": "nums = [1, 2, 3, 4]\nevens = [x if x % 2 == 0 for x in nums]\nprint(evens)",
      "targetCode": "nums = [1, 2, 3, 4]\nevens = [x for x in nums if x % 2 == 0]\nprint(evens)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[2, 4]"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 딕셔너리 컴프리헨션에서 키와 값 사이를 콜론(:) 대신 쉼표(,)로 적어 딕셔너리가 되지 않은 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Replace the comma with a colon in {w, len(w) ...} so it builds a dictionary instead of a set of tuples.",
      "hint_ko": "딕셔너리 컴프리헨션에서는 키와 값을 쉼표가 아니라 콜론(:)으로 연결해야 합니다.",
      "hint_en": "Separate the key and value with a colon (w: len(w)) inside a dictionary comprehension.",
      "templateCode": "words = [\"hi\", \"python\"]\nd = {w, len(w) for w in words}\nprint(d[\"python\"])",
      "targetCode": "words = [\"hi\", \"python\"]\nd = {w: len(w) for w in words}\nprint(d[\"python\"])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "6"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 리스트 nums에서 10 이상인 숫자만 골라 제곱(x ** 2)한 리스트를 big에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Assign to big a list comprehension that squares numbers x in nums where x >= 10.",
      "hint_ko": "big = [x ** 2 for x in nums if x >= 10] 형태로 작성하세요.",
      "hint_en": "Write big = [x ** 2 for x in nums if x >= 10].",
      "templateCode": "nums = [4, 10, 7, 12]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(big)",
      "targetCode": "nums = [4, 10, 7, 12]\nbig = [x ** 2 for x in nums if x >= 10]\nprint(big)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[100, 144]"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 리스트 items의 각 단어를 키로, 글자 수(len(w))를 값으로 하는 딕셔너리를 d에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Assign to d a dictionary comprehension mapping each w in items to len(w).",
      "hint_ko": "d = {w: len(w) for w in items} 형태로 딕셔너리 컴프리헨션을 작성하세요.",
      "hint_en": "Write d = {w: len(w) for w in items}.",
      "templateCode": "items = [\"apple\", \"pie\"]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(d[\"apple\"], d[\"pie\"])",
      "targetCode": "items = [\"apple\", \"pie\"]\nd = {w: len(w) for w in items}\nprint(d[\"apple\"], d[\"pie\"])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "5 3"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 뒤쪽 필터링 if 컴프리헨션과 앞쪽 삼항 if-else 컴프리헨션의 길이(len)와 합계를 비교한 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the output comparing a trailing filter comprehension with a leading ternary comprehension.",
      "hint_ko": "뒤쪽 if는 양수 2개만 남겨 길이가 줄어들고, 앞쪽 if-else는 음수를 0으로 바꿀 뿐 원소 개수 4개는 그대로 유지됩니다.",
      "hint_en": "The trailing filter keeps only 2 positive items, whereas the leading ternary keeps all 4 items (replacing negatives with 0).",
      "targetCode": "nums = [5, -2, 8, -1]\na = [x for x in nums if x > 0]\nb = [x if x > 0 else 0 for x in nums]\nprint(len(a), len(b), sum(a) == sum(b))",
      "choices": [
        "2 4 True",
        "4 4 True",
        "2 2 True",
        "2 4 False"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2 4 True"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 조건부 딕셔너리 컴프리헨션으로 생성된 사전의 키 개수와 값 합계를 출력한 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the output of the conditional dictionary comprehension.",
      "hint_ko": "글자 수가 3 이상인 단어(\"cat\", \"bear\")만 딕셔너리에 들어가며 값은 각각 글자 수의 2배입니다.",
      "hint_en": "Only words with len(w) >= 3 (\"cat\" and \"bear\") are included, with values 6 and 8.",
      "targetCode": "words = [\"ox\", \"cat\", \"bear\", \"go\"]\nd = {w: len(w) * 2 for w in words if len(w) >= 3}\nprint(len(d), sum(d.values()))",
      "choices": [
        "2 14",
        "4 22",
        "2 7",
        "3 18"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2 14"
        }
      ]
    }
  ]
};
