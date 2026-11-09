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
      "prompt_ko": "리스트 컴프리헨션([표현식 for 변수 in 시퀀스])은 시퀀스의 각 원소를 변환해 새 리스트에 담는 과정을 대괄호 한 줄로 압축합니다.",
      "prompt_en": "A list comprehension ([expr for var in seq]) transforms every element of a sequence into a new list in a single bracketed line.",
      "hint_ko": "대괄호 맨 앞에 새 리스트에 넣을 계산식(x * 2)을 먼저 적고, 그 뒤에 for x in nums 순회절을 이어 씁니다.",
      "hint_en": "Write the output expression (x * 2) first inside the square brackets, followed by the for x in nums loop clause.",
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
      "hint_ko": "대괄호 안의 계산식 뒤에 '각 원소에 대해' 반복하는 3글자 키워드와 '~ 안에서' 꺼내는 2글자 키워드를 순서대로 채우세요.",
      "hint_en": "Follow the squaring expression with the 3-letter iteration keyword and the 2-letter membership keyword.",
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
      "prompt_ko": "리스트 컴프리헨션의 앞쪽 표현식 자리에는 w.upper()처럼 메서드를 호출하여 모든 문자열 원소를 일괄 변환할 수 있습니다.",
      "prompt_en": "Calling a string method like w.upper() in the leading expression of a list comprehension transforms every string in the list at once.",
      "hint_ko": "words에서 꺼낸 각 단어 w마다 .upper()가 실행된 결과들이 순서대로 새 리스트에 모입니다.",
      "hint_en": "Each word w from words has .upper() applied to it, collecting the uppercase results in order.",
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
      "prompt_ko": "한 줄에 공백으로 입력된 숫자 문자열들을 모두 정수로 변환한 리스트에 담고, 합계와 최댓값을 출력하도록 빈칸을 채워보세요. (터미널 입력: 10 25 15)",
      "prompt_en": "Fill in the integer conversion function and splitting method to parse space-separated numbers. (Terminal input: 10 25 15)",
      "hint_ko": "첫 빈칸은 '정수(integer)'의 앞 세 글자를 딴 변환 함수를, 둘째 빈칸은 문자열을 공백 기준으로 '쪼개다'라는 5글자 메서드를 쓰세요.",
      "hint_en": "First, use the 3-letter conversion function abbreviated from 'integer'; second, call the 5-letter method meaning 'to divide apart'.",
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
      "prompt_ko": "리스트 컴프리헨션의 for절 뒤에 if 조건절을 붙이면, 조건이 참인 원소만 골라 담는 필터(Filter) 역할을 합니다.",
      "prompt_en": "Adding a trailing if condition after the for clause in a list comprehension filters the sequence, keeping only matching elements.",
      "hint_ko": "원소를 걸러내는 단독 if절은 else 없이 컴프리헨션의 맨 오른쪽 끝에 작성합니다.",
      "hint_en": "A filtering if clause without else always goes at the very end of the list comprehension, after the for clause.",
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
      "hint_ko": "반복절 뒤에서 걸러내는 2글자 조건 키워드를 적고, 문자열 '길이(length)'의 앞 세 글자를 딴 내장 함수로 글자 수를 재세요.",
      "hint_en": "Place the 2-letter filter condition keyword after the loop, then measure characters with the 3-letter function from 'length'.",
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
      "prompt_ko": "원소를 걸러내지 않고 조건에 따라 다른 값으로 바꾸어 모두 담을 때는 for절 앞쪽에 삼항 조건 표현식(참값 if 조건 else 거짓값)을 배치합니다.",
      "prompt_en": "To replace values conditionally while keeping every element, place a ternary expression (true_val if cond else false_val) before the for clause.",
      "hint_ko": "for절 뒤의 if는 원소를 제외하는 필터이고, for절 앞의 if-else는 모든 원소를 두 값 중 하나로 변환하는 식입니다.",
      "hint_en": "An if after for filters out items, whereas an if-else before for maps every item to one of two values.",
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
      "hint_ko": "모든 점수를 두 문자열 중 하나로 바꾸므로, 반복절 앞에서 2글자 조건 키워드와 4글자 '그렇지 않으면' 키워드로 삼항 식을 완성하세요.",
      "hint_en": "Since every score maps to one of two labels, complete the leading ternary with the 2-letter condition and 4-letter 'otherwise' keywords.",
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
      "prompt_ko": "2차원 리스트 grid에 리스트 컴프리헨션 [sum(row) for row in grid]를 적용하면 각 행의 합계를 모은 1차원 리스트를 한 줄로 반환할 수 있습니다.",
      "prompt_en": "Applying [sum(row) for row in grid] to a 2D list computes the sum of each inner row list and returns a 1D list of row totals.",
      "hint_ko": "grid에서 꺼낸 각 행 리스트 row를 내장 함수 sum()에 전달해 행별 합계를 바로 계산합니다.",
      "hint_en": "Each inner row list unpacked from grid is passed directly to sum() to produce its row total.",
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
      "hint_ko": "반복절 뒤 필터 자리에 2글자 조건 키워드를 적고, 딕셔너리에서 값을 안전하게 '얻어 오는' 3글자 조회 메서드를 호출하세요.",
      "hint_en": "Add the 2-letter filter condition keyword after the loop, and call the 3-letter safe 'fetch/obtain' method on the dictionary.",
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
      "hint_ko": "대체값(else) 없이 조건에 맞는 원소만 걸러내는 필터 조건절은 반복절 앞이 아니라 맨 뒤로 옮겨야 합니다.",
      "hint_en": "When filtering elements without an else fallback, move the condition clause to the end after the loop clause.",
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
      "prompt_ko": "공백 구분 정수 리스트를 만든 코드 아래에 한 줄을 추가하여 3 이상인 값만 골라 10배로 만든 리스트를 출력해보세요. (터미널 입력: 1 3 2 5)",
      "prompt_en": "Add one line below to print a list comprehension that keeps only numbers >= 3 and multiplies them by 10. (Terminal input: 1 3 2 5)",
      "hint_ko": "컴프리헨션 앞쪽에는 원소에 10을 곱하는 식을 두고, 반복절 뒤쪽에는 3 이상인지 걸러내는 필터 조건을 붙여 출력해보세요.",
      "hint_en": "Print a list comprehension that multiplies each item by 10 in the leading expression and filters for >= 3 at the end.",
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
      "hint_ko": "지정된 접두사로 시작하는 단어들만 먼저 골라 글자 수를 구한 뒤, 출력할 때 오름차순 정렬이 적용된다는 점을 함께 확인하세요.",
      "hint_en": "Filter the words by their starting letter first, collect their character lengths, and note that the printed list is sorted ascending.",
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