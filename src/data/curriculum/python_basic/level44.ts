import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_44: PracticeRound = {
  "id": "py-basic-r44",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 44,
  "title_ko": "44레벨: 튜플(tuple) 기초·언패킹과 빈 값 None",
  "title_en": "Level 44: Tuples, Unpacking & None (is None)",
  "description_ko": "변경할 수 없는 튜플(tuple) 생성·인덱싱·언패킹과 빈 값을 나타내는 None(is None) 판별법을 익힙니다.",
  "description_en": "Learn immutable tuple creation, indexing, unpacking, and checking empty values with None (is None).",
  "totalQuestions": 15,
  "unlockedBlocks": [
    "print",
    "variable",
    "type",
    "math",
    "if",
    "for_in",
    "while",
    "break",
    "input",
    "method"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 소괄호(())로 튜플을 만들고 첫 요소와 길이를 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Create a tuple with parentheses (()) and print its first element and length.",
      "hint_ko": "튜플은 요소를 수정할 수 없지만 인덱스로 값을 읽거나 len()으로 길이를 구할 수 있습니다.",
      "hint_en": "Tuples are immutable, but [0] indexing and len() work the same as lists.",
      "targetCode": "pt = (10, 20)\nprint(pt[0], len(pt))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "10 2"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 정수 5 하나만 담긴 단일 요소 튜플을 작성해 길이와 첫 요소를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in a single-element tuple containing integer 5 to print its length and first item.",
      "hint_ko": "소괄호 안의 값 바로 뒤에 쉼표 하나를 붙여 (5,) 형태로 단일 요소 튜플을 만드세요.",
      "hint_en": "Write (5,) with a trailing comma inside parentheses to form a 1-element tuple.",
      "templateCode": "one = §§§§\nprint(len(one), one[0])",
      "targetCode": "one = (5,)\nprint(len(one), one[0])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1 5"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 튜플 pt의 두 요소를 x, y에 언패킹해 합계를 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Unpack tuple pt into x and y and print their sum.",
      "hint_ko": "x, y = pt 한 줄로 두 요소를 각각의 변수에 순서대로 나누어 담을 수 있습니다.",
      "hint_en": "Tuple unpacking assigns each element to x and y in a single line.",
      "targetCode": "pt = (30, 70)\nx, y = pt\nprint(x + y)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "100"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 아무 값도 없음을 뜻하는 파이썬 상수를 채워 값과 논리 판별 결과를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the Python constant representing an empty value to print it and bool(target).",
      "hint_ko": "첫 글자만 대문자로 적는 네 글자 예약어 None을 빈칸에 넣어보세요.",
      "hint_en": "Fill in the 4-letter capitalized constant None.",
      "templateCode": "target = §§§§\nprint(target, bool(target))",
      "targetCode": "target = None\nprint(target, bool(target))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "None False"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] is None 연산자로 변수가 비어 있는지 검사하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Check whether target is None using the identity test is None.",
      "hint_ko": "파이썬에서 None인지 확인할 때는 == 대신 is None을 사용하는 것이 표준입니다.",
      "hint_en": "Checking identity with is None is the standard way to test for None.",
      "targetCode": "target = None\nif target is None:\n    print(\"Empty\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Empty"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 변수 nick이 빈 값(None)이 아닌지 검사하도록 두 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the two blanks to check that nick is not None and print the greeting.",
      "hint_ko": "정체성 부정 조건이 되도록 is와 not을 차례대로 적어보세요.",
      "hint_en": "Combine is and not before None.",
      "templateCode": "nick = \"Ace\"\nif nick §§ §§§ None:\n    print(f\"Hi, {nick}\")",
      "targetCode": "nick = \"Ace\"\nif nick is not None:\n    print(f\"Hi, {nick}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Hi, Ace"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 튜플 리스트를 순회하며 각 튜플을 x, y로 언패킹해 곱을 합산하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Iterate over a list of tuples, unpack each into x and y, and sum x * y.",
      "hint_ko": "반복문 안에서 꺼낸 튜플을 두 변수로 분리 대입한 뒤 곱해 누적 합계에 더합니다.",
      "hint_en": "Unpack each tuple inside the loop body, then add x * y to total.",
      "targetCode": "pts = [(2, 3), (4, 5)]\ntotal = 0\nfor pt in pts:\n    x, y = pt\n    total += x * y\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "26"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] for문에서 각 튜플을 출력문과 같은 두 변수로 바로 언패킹해 출력해보세요.",
      "prompt_en": "[Fill Blank] Unpack each tuple directly in the for header using stat and val.",
      "hint_ko": "출력문 중괄호에 쓰인 두 변수 이름 stat과 val을 순서대로 적으세요.",
      "hint_en": "Fill in stat and val in the for loop header.",
      "templateCode": "pairs = [(\"HP\", 100), (\"MP\", 50)]\nfor §§§§, §§§ in pairs:\n    print(f\"{stat}:{val}\")",
      "targetCode": "pairs = [(\"HP\", 100), (\"MP\", 50)]\nfor stat, val in pairs:\n    print(f\"{stat}:{val}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "HP:100\nMP:50"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] found를 None으로 초기화하고 80 이상인 첫 값을 찾아 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Initialize found to None, find the first value >= 80, and print the result.",
      "hint_ko": "처음에 None을 넣어 두면 값을 찾았는지 여부를 is None으로 명확히 판별할 수 있습니다.",
      "hint_en": "Starting with None lets you check whether a match was found using is None.",
      "targetCode": "nums = [55, 70, 85, 90]\nfound = None\nfor x in nums:\n    if x >= 80:\n        found = x\n        break\nif found is None:\n    print(\"None\")\nelse:\n    print(f\"Found:{found}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Found:85"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 입력된 정수 중 첫 짝수를 찾고, 못 찾으면 No를 출력하도록 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Track the first even integer with None and print No if none exists.",
      "hint_ko": "초기값으로 빈 값 상수 None을 넣고, 반복 후 정체성 비교 키워드 is로 확인하세요.",
      "hint_en": "Initialize ans to None and check if ans is None after the loop.",
      "templateCode": "raw = input().split()\nans = §§§§\nfor s in raw:\n    n = int(s)\n    if n % 2 == 0:\n        ans = n\n        break\nif ans §§ None:\n    print(\"No\")\nelse:\n    print(f\"Even:{ans}\")",
      "targetCode": "raw = input().split()\nans = None\nfor s in raw:\n    n = int(s)\n    if n % 2 == 0:\n        ans = n\n        break\nif ans is None:\n    print(\"No\")\nelse:\n    print(f\"Even:{ans}\")",
      "testCases": [
        {
          "id": 1,
          "input": "3 7 8 10",
          "expectedOutput": "Even:8"
        },
        {
          "id": 2,
          "input": "1 5 9",
          "expectedOutput": "No"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 튜플 t의 첫 번째 요소(7)와 길이를 출력하려다 두 번째 요소가 출력되는 버그를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the tuple index so the first element (7) and length are printed.",
      "hint_ko": "튜플의 첫 번째 요소 인덱스는 1이 아니라 0이므로 t[0]으로 수정하세요.",
      "hint_en": "Change t[1] to t[0] to access the first element of the tuple.",
      "templateCode": "t = (7, 8)\nprint(t[1], len(t))",
      "targetCode": "t = (7, 8)\nprint(t[0], len(t))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "7 2"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 언패킹한 두 수의 합이 8일 때 곱을 출력하려는데 조건 연산자가 잘못된 버그를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the comparison operator so x * y prints when x + y equals 8.",
      "hint_ko": "x + y가 8과 같을 때(==) 참이 되도록 !=를 ==로 고치세요.",
      "hint_en": "Change != to == in the if condition.",
      "templateCode": "pt = (3, 5)\nx, y = pt\nif x + y != 8:\n    print(x * y)",
      "targetCode": "pt = (3, 5)\nx, y = pt\nif x + y == 8:\n    print(x * y)",
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
      "prompt_ko": "[한 줄 완성] 튜플 box의 두 요소를 item과 amount 변수에 언패킹하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the line that unpacks tuple box into item and amount.",
      "hint_ko": "item, amount = box 형태로 두 변수에 튜플을 언패킹하세요.",
      "hint_en": "Write item, amount = box on the second line.",
      "templateCode": "box = (\"Gold\", 250)\n§§§§§§§§§§§§§§§§§§\nprint(f\"{item}:{amount}\")",
      "targetCode": "box = (\"Gold\", 250)\nitem, amount = box\nprint(f\"{item}:{amount}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Gold:250"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 탐색 전 결과 변수 found를 빈 값 상수(None)로 초기화하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the line that initializes found to None before the loop.",
      "hint_ko": "found = None 형태로 변수를 빈 값으로 초기화하세요.",
      "hint_en": "Write found = None on the second line.",
      "templateCode": "nums = [3, 8, 5]\n§§§§§§§§§§§§\nfor x in nums:\n    if x % 2 == 0:\n        found = x\n        break\nprint(found)",
      "targetCode": "nums = [3, 8, 5]\nfound = None\nfor x in nums:\n    if x % 2 == 0:\n        found = x\n        break\nprint(found)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "8"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 튜플 언패킹과 is not None 판별 코드의 실행 결과를 예측해보세요.",
      "prompt_en": "[Predict Output] Select the exact output produced when the following Python code runs.",
      "hint_ko": "언패킹된 두 수의 합이 10인지 확인하고 res is not None의 불리언 결과와 res 값을 따져보세요.",
      "hint_en": "Check whether x + y == 10 updates res, then evaluate res is not None and res.",
      "targetCode": "pt = (4, 6)\nx, y = pt\nres = None\nif x + y == 10:\n    res = x * y\nprint(res is not None, res)",
      "choices": [
        "True 24",
        "False None",
        "True 10",
        "False 24"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True 24"
        }
      ]
    }
  ]
};
