import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_90: PracticeRound = {
  "id": "py-basic-r90",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 90,
  "title_ko": "90레벨: 리스트 컴프리헨션 기본 ([식 for 변수 in 시퀀스])",
  "title_en": "Level 90: Basic List Comprehensions ([expr for x in seq])",
  "description_ko": "반복문과 .append() 3줄 패턴을 대괄호 한 줄([식 for 변수 in 시퀀스])로 압축하는 리스트 컴프리헨션 기초를 익힙니다.",
  "description_en": "Compress loop-and-append patterns into single-line list comprehensions ([expr for x in seq]).",
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
      "prompt_ko": "[블록 조립] 리스트 컴프리헨션 [i * 2 for i in range(4)]로 0, 2, 4, 6이 담긴 리스트를 만들어 출력해보세요.",
      "prompt_en": "[Block] Use the list comprehension [i * 2 for i in range(4)] to build and print [0, 2, 4, 6].",
      "hint_ko": "대괄호 안에 [계산식 for 변수 in 시퀀스]를 적으면 반복문과 .append() 없이 한 줄로 새 리스트가 만들어집니다.",
      "hint_en": "Writing [expr for var in seq] builds a new list in a single line without a separate loop and .append().",
      "targetCode": "arr = [i * 2 for i in range(4)]\nprint(arr)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[0, 2, 4, 6]"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 1부터 4까지의 숫자에 10을 곱한 리스트 [10, 20, 30, 40]을 만들도록 반복 키워드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the loop keyword inside the list comprehension to multiply each number in range(1, 5) by 10.",
      "hint_ko": "리스트 컴프리헨션에서 계산식 뒤에 시퀀스 순회를 시작하는 반복 키워드를 적으세요.",
      "hint_en": "Write the loop keyword placed between the expression and the loop variable.",
      "templateCode": "nums = [x * 10 §§§§ x in range(1, 5)]\nprint(nums)",
      "targetCode": "nums = [x * 10 for x in range(1, 5)]\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 20, 30, 40]"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 기존 리스트 nums의 모든 원소를 제곱한 [x ** 2 for x in nums] 리스트를 만들어 출력해보세요.",
      "prompt_en": "[Block] Build a list of squared values [x ** 2 for x in nums] and print it.",
      "hint_ko": "기존 리스트에서 원소 x를 하나씩 꺼내 맨 앞의 수식(x ** 2)에 대입한 결과들이 새 리스트에 모입니다.",
      "hint_en": "Each item x from nums is evaluated in x ** 2 and collected into the new list.",
      "targetCode": "nums = [2, 3, 5]\nsq = [x ** 2 for x in nums]\nprint(sq)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[4, 9, 25]"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 정수 리스트의 각 숫자를 문자열로 바꾼 새 리스트를 만들도록 형변환 함수를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the type conversion function to turn every integer in ids into a string.",
      "hint_ko": "숫자를 문자열 자료형으로 변환하는 내장 함수를 호출하세요.",
      "hint_en": "Call the built-in function that converts a value to a string.",
      "templateCode": "ids = [101, 102, 103]\ntags = [§§§§(x) for x in ids]\nprint(tags)",
      "targetCode": "ids = [101, 102, 103]\ntags = [str(x) for x in ids]\nprint(tags)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['101', '102', '103']"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 단어 리스트 words에서 각 단어의 글자 수를 구한 [len(w) for w in words]를 출력해보세요.",
      "prompt_en": "[Block] Use [len(w) for w in words] to create a list of word lengths and print it.",
      "hint_ko": "내장 함수 len(w)를 컴프리헨션 앞쪽 식에 두면 각 단어의 길이가 순서대로 담긴 정수 리스트가 만들어집니다.",
      "hint_en": "Putting len(w) as the comprehension expression maps each word to its character count.",
      "targetCode": "words = [\"py\", \"code\", \"hello\"]\nlens = [len(w) for w in words]\nprint(lens)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[2, 4, 5]"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 양옆에 공백이 섞인 문자열 리스트에서 공백을 모두 제거한 새 리스트를 만들도록 메서드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the string method inside the comprehension to remove leading and trailing spaces from each word.",
      "hint_ko": "문자열 양끝의 공백을 깔끔하게 지우는 문자열 메서드를 호출하세요.",
      "hint_en": "Call the string method that strips surrounding whitespace.",
      "templateCode": "raw = [\" a \", \"b \", \" c \"]\nclean = [s.§§§§§§() for s in raw]\nprint(clean)",
      "targetCode": "raw = [\" a \", \"b \", \" c \"]\nclean = [s.strip() for s in raw]\nprint(clean)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['a', 'b', 'c']"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] [int(x) for x in input().split()]으로 한 줄의 공백 구분 숫자들을 정수 리스트로 변환해 합계를 출력해보세요.",
      "prompt_en": "[Block] Parse space-separated integers with [int(x) for x in input().split()] and print their sum.",
      "hint_ko": "input().split()으로 쪼갠 문자열 조각들을 int(x)로 즉시 변환하면 한 줄로 정수 리스트 입력을 받을 수 있습니다.",
      "hint_en": "Combining int(x) with input().split() inside a comprehension parses a line of numbers into an int list.",
      "targetCode": "nums = [int(x) for x in input().split()]\nprint(nums, sum(nums))",
      "testCases": [
        {
          "id": 1,
          "input": "10 20 30",
          "expectedOutput": "[10, 20, 30] 60"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 쉼표로 구분된 입력 숫자들을 정수 리스트로 바꾸어 최댓값을 출력하도록 형변환 함수를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the conversion function so comma-separated numeric strings become integers.",
      "hint_ko": "쪼개진 각 숫자 문자열 조각을 정수로 바꾸는 내장 함수를 적으세요.",
      "hint_en": "Use the built-in function that converts a string to an integer.",
      "templateCode": "nums = [§§§§(s) for s in input().split(\",\")]\nprint(max(nums))",
      "targetCode": "nums = [int(s) for s in input().split(\",\")]\nprint(max(nums))",
      "testCases": [
        {
          "id": 1,
          "input": "12,45,30",
          "expectedOutput": "45"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 빈칸 2곳을 채워 공백 입력 숫자들을 정수 리스트 컴프리헨션으로 변환한 뒤 각 값에 5를 더한 합계를 출력해보세요.",
      "prompt_en": "[Fill Blank] Complete the integer conversion, string splitting method, and loop keyword in the two comprehensions.",
      "hint_ko": "첫째 줄 컴프리헨션의 정수 변환 함수(int)와 둘째 줄 컴프리헨션의 반복 키워드(for)를 차례로 채우세요.",
      "hint_en": "Check the int function, split method, and for keyword.",
      "templateCode": "raw = [§§§§(s) for s in input().split()]\nplus = [n + 5 §§§§ n in raw]\nprint(sum(plus))",
      "targetCode": "raw = [int(s) for s in input().split()]\nplus = [n + 5 for n in raw]\nprint(sum(plus))",
      "testCases": [
        {
          "id": 1,
          "input": "10 20",
          "expectedOutput": "40"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 리스트 컴프리헨션 안에서 시퀀스를 순회하도록 잘못 적힌 키워드(and)를 반복 키워드(for)로 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the SyntaxError in the list comprehension by placing the output expression before the loop clause without a colon.",
      "hint_ko": "리스트 컴프리헨션은 [계산식 for 변수 in 시퀀스] 형태로 작성해야 합니다.",
      "hint_en": "Write the output expression x * 2 first, followed by for x in nums with no colon.",
      "templateCode": "nums = [1, 2, 3]\ndoubled = [x * 2 and x in nums]\nprint(doubled)",
      "targetCode": "nums = [1, 2, 3]\ndoubled = [x * 2 for x in nums]\nprint(doubled)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[2, 4, 6]"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 분리된 숫자 문자열들을 정수로 변환해 리스트에 담도록 컴프리헨션 앞쪽의 잘못된 함수(str)를 int로 고쳐보세요.",
      "prompt_en": "[Fix Bug] Convert each token x to an integer inside the list comprehension so sum(nums) succeeds.",
      "hint_ko": "sum(nums)으로 합계를 구하려면 컴프리헨션 앞쪽에서 int(x)로 정수로 변환해야 합니다.",
      "hint_en": "Wrap x in int(x) at the front of the list comprehension so nums contains integers.",
      "templateCode": "line = \"10 20 30\"\nnums = [str(x) for x in line.split()]\nprint(sum(nums))",
      "targetCode": "line = \"10 20 30\"\nnums = [int(x) for x in line.split()]\nprint(sum(nums))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "60"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 리스트 prices의 각 가격에 100을 더한 새 리스트를 컴프리헨션으로 만들어 updated에 저장해보세요.",
      "prompt_en": "[Complete Line] Assign to updated a list comprehension that adds 100 to each p in prices.",
      "hint_ko": "updated = [p + 100 for p in prices] 형태로 한 줄을 작성하세요.",
      "hint_en": "Write updated = [p + 100 for p in prices].",
      "templateCode": "prices = [1000, 2500, 3000]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(updated)",
      "targetCode": "prices = [1000, 2500, 3000]\nupdated = [p + 100 for p in prices]\nprint(updated)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[1100, 2600, 3100]"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 단어 리스트 words에서 각 단어의 첫 글자(w[0])만 모은 리스트를 initials에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Assign to initials a list comprehension extracting w[0] for each w in words.",
      "hint_ko": "initials = [w[0] for w in words] 형태로 첫 글자 인덱싱 컴프리헨션을 작성하세요.",
      "hint_en": "Write initials = [w[0] for w in words].",
      "templateCode": "words = [\"Python\", \"Basic\", \"Code\"]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(initials)",
      "targetCode": "words = [\"Python\", \"Basic\", \"Code\"]\ninitials = [w[0] for w in words]\nprint(initials)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['P', 'B', 'C']"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 리스트 컴프리헨션으로 만든 리스트에 슬라이싱과 sum()을 적용한 출력 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the output after slicing and summing a list created by a comprehension.",
      "hint_ko": "range(1, 5)에 대해 i * 3을 계산하면 [3, 6, 9, 12]가 되며, 앞의 3개 원소(arr[:3]) 합계를 구해보세요.",
      "hint_en": "arr is [3, 6, 9, 12]; slice the first three elements [3, 6, 9] and sum them.",
      "targetCode": "arr = [i * 3 for i in range(1, 5)]\nprint(arr[-1], sum(arr[:3]))",
      "choices": [
        "12 18",
        "15 18",
        "12 30",
        "12 9"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "12 18"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 문자열 치환(.replace)과 길이(len)를 결합한 리스트 컴프리헨션의 출력 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the output when combining .replace() and len() inside a list comprehension.",
      "hint_ko": "하이픈(\"-\")을 빈 문자열(\"\")로 지운 뒤의 순수 글자 수가 각각 몇 글자인지 세어보세요.",
      "hint_en": "Removing \"-\" turns \"a-b\" into \"ab\" (length 2) and \"c-d-e\" into \"cde\" (length 3).",
      "targetCode": "codes = [\"a-b\", \"c-d-e\", \"xy\"]\nlens = [len(c.replace(\"-\", \"\")) for c in codes]\nprint(lens, max(lens))",
      "choices": [
        "[2, 3, 2] 3",
        "[3, 5, 2] 5",
        "[2, 3, 2] 2",
        "[1, 2, 2] 2"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[2, 3, 2] 3"
        }
      ]
    }
  ]
};
