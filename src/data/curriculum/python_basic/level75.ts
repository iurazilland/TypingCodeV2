import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_75: PracticeRound = {
  "id": "py-basic-r75",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 75,
  "title_ko": "75레벨: 리스트 컴프리헨션 기초 ([식 for 변수 in 시퀀스 if 조건])",
  "title_en": "Level 75: List Comprehensions Basics",
  "description_ko": "for문과 .append() 패턴을 대괄호 한 줄로 압축하는 리스트 컴프리헨션의 변환·필터링·조건 표현식 결합을 익힙니다.",
  "description_en": "Master list comprehensions for mapping, filtering with if, parsing input().split(), and inline ternary mapping.",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "method",
    "type",
    "math",
    "sorted",
    "if",
    "for_range",
    "for_in",
    "range",
    "def"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "리스트 컴프리헨션 [x * 2 for x in nums]로 nums의 모든 숫자를 2배로 만든 새 리스트를 출력해보세요.",
      "prompt_en": "Create doubled = [x * 2 for x in nums] using a list comprehension and print doubled.",
      "hint_ko": "빈 리스트를 만들고 for문 안에서 .append(x * 2) 하던 코드를 [x * 2 for x in nums] 한 줄로 작성할 수 있습니다.",
      "hint_en": "[x * 2 for x in nums] builds a new list of doubled values in a single expression.",
      "targetCode": "nums = [1, 2, 3, 4]\ndoubled = [x * 2 for x in nums]\nprint(doubled)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[2, 4, 6, 8]"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "1부터 4까지 정수의 제곱수를 담은 리스트 [1, 4, 9, 16]이 만들어지도록 컴프리헨션의 두 반복 키워드를 채워보세요.",
      "prompt_en": "Fill in the two loop keywords inside the list comprehension to generate squares of 1 through 4.",
      "hint_ko": "대괄호 안에서 계산식 뒤에 for 변수 in 시퀀스 순서로 작성합니다.",
      "hint_en": "Follow the expression n * n with for n in range(1, 5).",
      "templateCode": "squares = [n * n §§§ n §§ range(1, 5)]\nprint(squares)",
      "targetCode": "squares = [n * n for n in range(1, 5)]\nprint(squares)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[1, 4, 9, 16]"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "단어 리스트 words의 각 단어를 대문자로 바꾼 [w.upper() for w in words]를 loud에 저장하고 출력해보세요.",
      "prompt_en": "Convert every word in words to uppercase with [w.upper() for w in words] and print loud.",
      "hint_ko": "앞쪽 식 자리에 w.upper() 같은 문자열 메서드 호출도 자유롭게 넣을 수 있습니다.",
      "hint_en": "You can call string methods like w.upper() in the output expression of a comprehension.",
      "targetCode": "words = [\"py\", \"code\", \"ai\"]\nloud = [w.upper() for w in words]\nprint(loud)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['PY', 'CODE', 'AI']"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "한 줄에 공백으로 입력된 숫자 문자열들을 모두 정수로 변환한 리스트에 담고, 합계와 최댓값을 출력하도록 빈칸을 채워보세요.",
      "prompt_en": "Fill in the integer conversion function and splitting method to parse space-separated numbers.",
      "hint_ko": "[int(s) for s in input().split()]은 공백 구분 숫자 입력을 정수 리스트로 받는 대표적인 파이썬 관용구입니다.",
      "hint_en": "[int(s) for s in input().split()] parses a line of numbers into a list of ints.",
      "templateCode": "nums = [§§§(s) for s in input().§§§§§()]\nprint(sum(nums), max(nums))",
      "targetCode": "nums = [int(s) for s in input().split()]\nprint(sum(nums), max(nums))",
      "testCases": [
        {
          "id": 1,
          "input": "10 25 15",
          "expectedOutput": "50 25"
        },
        {
          "id": 2,
          "input": "3 7 2 8",
          "expectedOutput": "20 8"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "컴프리헨션 뒤에 if x % 2 == 0 조건을 붙여 nums에서 짝수만 골라낸 리스트 evens를 출력해보세요.",
      "prompt_en": "Filter even numbers from nums using [x for x in nums if x % 2 == 0] and print evens.",
      "hint_ko": "[식 for 변수 in 시퀀스 if 조건]에서 맨 뒤의 if는 조건이 참인 원소만 골라 담는 필터 역할을 합니다.",
      "hint_en": "A trailing if clause keeps only elements for which the condition is True.",
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
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "글자 수가 4글자 이상인 태그만 골라 대문자로 변환한 리스트를 만들도록 뒤쪽 필터의 두 빈칸을 채워보세요.",
      "prompt_en": "Fill in the filter keyword and length function to keep only tags of length 4 or more in uppercase.",
      "hint_ko": "필터 조건은 for절 뒤에 if를 적고, 문자열 길이는 len(t)로 검사합니다.",
      "hint_en": "Add if len(t) >= 4 at the end of the comprehension.",
      "templateCode": "tags = [\"python\", \"go\", \"java\", \"c\"]\nbig = [t.upper() for t in tags §§ §§§(t) >= 4]\nprint(big)",
      "targetCode": "tags = [\"python\", \"go\", \"java\", \"c\"]\nbig = [t.upper() for t in tags if len(t) >= 4]\nprint(big)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['PYTHON', 'JAVA']"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "원소를 버리지 않고 모두 유지하되 음수만 0으로 바꾸는 [x if x > 0 else 0 for x in nums]를 clean에 담아 출력해보세요.",
      "prompt_en": "Replace negative values with 0 while keeping all items using [x if x > 0 else 0 for x in nums].",
      "hint_ko": "값을 걸러내는 필터는 for 뒤에 if만 쓰고, 모든 원소를 참/거짓 값으로 바꿀 때는 for 앞에 a if 조건 else b를 씁니다.",
      "hint_en": "To transform every item without filtering, put the ternary x if x > 0 else 0 before for.",
      "targetCode": "nums = [10, -4, 7, -1, 5]\nclean = [x if x > 0 else 0 for x in nums]\nprint(clean)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 0, 7, 0, 5]"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "각 점수가 60 이상이면 \"P\", 아니면 \"F\"로 바꾼 결과 리스트를 만들도록 앞쪽 조건 표현식의 두 빈칸을 채워보세요.",
      "prompt_en": "Fill in the two ternary keywords inside the list comprehension to map each score to \"P\" or \"F\".",
      "hint_ko": "모든 점수를 \"P\" 또는 \"F\"로 변환하므로 for 앞에 \"P\" if s >= 60 else \"F\"를 적습니다.",
      "hint_en": "Place \"P\" if s >= 60 else \"F\" before for s in scores.",
      "templateCode": "scores = [80, 45, 60, 55]\nres = [\"P\" §§ s >= 60 §§§§ \"F\" for s in scores]\nprint(res)",
      "targetCode": "scores = [80, 45, 60, 55]\nres = [\"P\" if s >= 60 else \"F\" for s in scores]\nprint(res)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['P', 'F', 'P', 'F']"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "2차원 격자 grid의 각 행 합계를 리스트 컴프리헨션 [sum(row) for row in grid]로 한 줄에 반환하는 함수를 완성해보세요.",
      "prompt_en": "Complete row_totals(grid) returning [sum(row) for row in grid] and print the result for m.",
      "hint_ko": "2차원 리스트에 [sum(row) for row in grid]를 적용하면 각 행의 합계 리스트가 한 줄로 만들어집니다.",
      "hint_en": "[sum(row) for row in grid] maps each inner list to its sum.",
      "targetCode": "def row_totals(grid):\n    return [sum(row) for row in grid]\n\nm = [[1, 2, 3], [10, 20, 30]]\nprint(row_totals(m))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[6, 60]"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "가격이 30 이하인 상품 키만 안전 조회로 골라내어 오름차순 리스트로 출력하도록 두 빈칸을 채워보세요.",
      "prompt_en": "Fill in the filter keyword and safe dictionary lookup method to select items priced at 30 or less.",
      "hint_ko": "for절 뒤 필터 조건 키워드는 if이며, 딕셔너리 안전 조회는 cost.get(k, 0)을 사용합니다.",
      "hint_en": "Use if for filtering and cost.get(k, 0) to read each price.",
      "templateCode": "cost = {\"pen\": 5, \"bag\": 90, \"cup\": 30}\nlow = [k for k in cost §§ cost.§§§(k, 0) <= 30]\nprint(sorted(low))",
      "targetCode": "cost = {\"pen\": 5, \"bag\": 90, \"cup\": 30}\nlow = [k for k in cost if cost.get(k, 0) <= 30]\nprint(sorted(low))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['cup', 'pen']"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "양수만 골라내려다 조건절 위치가 잘못되어 SyntaxError가 발생하는 버그를 고쳐 양수 리스트를 출력해보세요.",
      "prompt_en": "Fix the SyntaxError caused by placing the filter condition before for without an else branch.",
      "hint_ko": "else 없이 조건에 맞는 원소만 걸러낼 때는 필터 조건을 for 변수 in 리스트 맨 뒤로 옮겨야 합니다.",
      "hint_en": "Move the filter condition after for x in nums: [x for x in nums if x > 0].",
      "templateCode": "nums = [5, -2, 8, -1, 3]\npos = [x if x > 0 for x in nums]\nprint(pos)",
      "targetCode": "nums = [5, -2, 8, -1, 3]\npos = [x for x in nums if x > 0]\nprint(pos)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[5, 8, 3]"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "공백 구분 정수 리스트를 만든 코드 아래에 한 줄을 추가하여 3 이상인 값만 10배로 만든 리스트를 출력해보세요.",
      "prompt_en": "Add one line below to print a list comprehension multiplying numbers >= 3 by 10.",
      "hint_ko": "마지막 줄에 print([n * 10 for n in nums if n >= 3])을 작성하세요.",
      "hint_en": "Write print([n * 10 for n in nums if n >= 3]) on the last line.",
      "templateCode": "nums = [int(s) for s in input().split()]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "nums = [int(s) for s in input().split()]\nprint([n * 10 for n in nums if n >= 3])",
      "testCases": [
        {
          "id": 1,
          "input": "1 3 2 5",
          "expectedOutput": "[30, 50]"
        },
        {
          "id": 2,
          "input": "4 0 6",
          "expectedOutput": "[40, 60]"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 리스트 컴프리헨션 코드를 실행했을 때 출력되는 결과를 선택해보세요.",
      "prompt_en": "Select the exact output of the following list comprehension code.",
      "hint_ko": "\"a\"로 시작하는 단어는 \"apple\"(길이 5)과 \"ant\"(길이 3)이므로 정렬하면 [3, 5], 합계는 8입니다.",
      "hint_en": "\"apple\" (5) and \"ant\" (3) start with \"a\"; sorted([5, 3]) is [3, 5] and their sum is 8.",
      "targetCode": "words = [\"cat\", \"apple\", \"dog\", \"ant\"]\nlens = [len(w) for w in words if w.startswith(\"a\")]\nprint(sorted(lens), sum(lens))",
      "choices": [
        "[3, 5] 8",
        "[5, 3] 8",
        "[3, 3, 5] 11",
        "[3, 5, 3, 3] 14"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[3, 5] 8"
        }
      ]
    }
  ]
};
