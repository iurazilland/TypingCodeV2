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
  "totalQuestions": 13,
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
      "prompt_ko": "튜플(tuple)은 소괄호(())로 묶어 만드는 불변(immutable) 자료구조로, 리스트처럼 [0] 인덱싱과 len() 함수를 그대로 사용할 수 있습니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "A tuple is an immutable sequence created with parentheses (()), supporting [0] indexing and len() just like a list. Follow the blocks and type the code.",
      "hint_ko": "튜플은 한 번 생성하면 요소를 수정할 수 없지만, 인덱스로 값을 읽거나 길이를 구하는 방법은 리스트와 동일합니다.",
      "hint_en": "Tuples cannot be modified after creation, but reading elements by index and checking length work the same as lists.",
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
      "prompt_ko": "정수 5 하나만 담긴 단일 요소 튜플을 빈칸에 작성하여 길이(1)와 첫 요소(5)를 출력해보세요.",
      "prompt_en": "Fill in a single-element tuple containing only integer 5 to print its length (1) and first item (5).",
      "hint_ko": "소괄호 안에 숫자 하나만 적으면 수학 괄호로 오해받습니다. 값 바로 뒤에 쉼표 하나를 덧붙여 단일 요소 튜플임을 표시하세요.",
      "hint_en": "Parentheses around a lone number act like math grouping; place a trailing comma after the integer inside parentheses.",
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
      "prompt_ko": "등호(=) 왼쪽에 튜플의 요소 개수만큼 변수를 쉼표로 나열하면 각 요소가 순서대로 분리되어 대입되는 튜플 언패킹(unpacking)이 일어납니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Listing matching variables separated by commas on the left of = unpacks each element of a tuple into its own variable in order. Follow the blocks and type the code.",
      "hint_ko": "인덱스 번호를 일일이 쓰지 않아도 x, y = pt 한 줄로 두 요소를 각각의 변수에 나누어 담을 수 있습니다.",
      "hint_en": "Tuple unpacking lets you assign both coordinates to separate variables in a single line without indexing.",
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
      "prompt_ko": "아무 값도 없음을 뜻하는 파이썬 상수를 빈칸에 채워 값과 불리언 판별 결과를 출력해보세요.",
      "prompt_en": "Fill in the Python constant representing an empty/absent value to print its value and boolean result.",
      "hint_ko": "영어로 '아무것도 없음'을 뜻하며 첫 글자만 대문자로 적는 네 글자 파이썬 예약어 상수를 빈칸에 넣어보세요.",
      "hint_en": "Fill in the 4-letter capitalized Python constant whose English meaning is 'nothing / not any'.",
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
      "prompt_ko": "None은 '값이 비어 있음'을 나타내는 파이썬의 특별한 상수이며, 값이 None인지 확인할 때는 == 대신 is None 연산자를 사용합니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "None is Python's special constant representing the absence of a value, and you check for it using the identity test is None. Follow the blocks and type the code.",
      "hint_ko": "파이썬에서 None은 단 하나만 존재하는 객체이므로 정체성을 비교하는 is 키워드로 판별하는 것이 표준 문법입니다.",
      "hint_en": "Because None is a singleton object in Python, checking identity with is None is the standard convention.",
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
      "prompt_ko": "변수 nick이 빈 값(None)이 아닌지 검사하도록 두 빈칸을 채워 인사말을 출력해보세요. (출력 예: Hi, Ace)",
      "prompt_en": "Fill in the two blanks to check that nick is not None and print the greeting (e.g., Hi, Ace).",
      "hint_ko": "빈 값이 '아니다'라는 정체성 부정 조건이 되도록, 영어 어순에 맞춰 정체성 키워드와 부정어를 차례대로 적어보세요.",
      "hint_en": "Follow natural English word order to combine the 2-letter identity keyword with the 3-letter negation word.",
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
      "prompt_ko": "튜플들이 담긴 리스트를 for 반복문으로 순회하면서 각 튜플을 두 변수에 언패킹하면 쌍으로 묶인 데이터를 편리하게 계산할 수 있습니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Iterating over a list of tuples with a for loop and unpacking each tuple into two variables makes processing paired data simple. Follow the blocks and type the code.",
      "hint_ko": "반복문 안에서 꺼낸 튜플을 두 변수로 분리 대입한 뒤, 두 값을 곱해 누적 합계에 더합니다.",
      "hint_en": "Unpack each tuple inside the loop body, then multiply the two unpacked values and add to the total.",
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
      "prompt_ko": "for문에서 각 튜플을 아래 출력문과 같은 두 변수로 바로 언패킹해 능력치를 출력해보세요. (출력 예: HP:100)",
      "prompt_en": "Unpack each tuple directly in the for header using the variable names shown in print (e.g., HP:100).",
      "hint_ko": "반복문 머리부에서 튜플의 두 요소를 곧바로 나누어 받을 수 있도록, 아래 출력문 중괄호에 쓰인 두 변수 이름을 순서대로 적으세요.",
      "hint_en": "Match the two variable names interpolated in the print line below to unpack each 2-item tuple directly in the loop header.",
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
      "prompt_ko": "탐색 결과를 담을 변수를 None으로 초기화해 두고, 반복문에서 조건을 만족하는 첫 값을 찾았을 때 변수에 대입한 뒤 break로 탈출하는 패턴입니다. 블록의 코드를 따라 입력해보세요.",
      "prompt_en": "Initializing a result variable to None and updating it before breaking out of a loop is a standard pattern for finding the first matching value. Follow the blocks and type the code.",
      "hint_ko": "처음에 None을 넣어 두면 조건을 만족하는 값을 찾았을 때만 그 값으로 덮어써지고, 즉시 break로 탐색을 멈출 수 있습니다.",
      "hint_en": "Starting with None clearly marks \"not found yet\" until the first qualifying value overwrites it and triggers break.",
      "targetCode": "nums = [55, 70, 85, 90]\nfound = None\ni = 0\nwhile i < len(nums):\n    if nums[i] >= 80:\n        found = nums[i]\n        break\n    i += 1\nprint(found)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "85"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "입력된 정수 중 첫 짝수를 찾고, 끝까지 못 찾으면 \"No\"를 출력하도록 빈칸을 채워보세요. (출력 예: Even:8) (터미널 입력: 3 7 8 10)",
      "prompt_en": "Fill in the blanks to track the first even integer with None and print \"No\" if none exists (e.g., Even:8). (Terminal input: 3 7 8 10)",
      "hint_ko": "찾은 값을 담을 변수를 처음엔 '아무것도 없음' 상수로 비워 두고, 반복 종료 후에도 여전히 그 빈 값 상태인지 정체성 비교로 확인하세요.",
      "hint_en": "Initialize the answer variable to the 4-letter empty constant, then test after the loop whether it still holds that empty constant.",
      "templateCode": "raw = input().split()\nans = §§§§\nfor s in raw:\n    n = int(s)\n    if n % 2 == 0:\n        ans = n\n        break\nif ans §§ §§§§:\n    print(\"No\")\nelse:\n    print(f\"Even:{ans}\")",
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
      "prompt_ko": "정수 7 하나만 담은 튜플로 인식되지 않아 발생한 오류(TypeError)를 고쳐 길이와 첫 요소를 출력해보세요.",
      "prompt_en": "Fix the TypeError caused by missing single-element tuple syntax so length 1 and item 7 are printed.",
      "hint_ko": "소괄호 안에 값 하나만 있으면 단순 숫자로 계산되어 길이를 잴 수 없습니다. 단일 요소 튜플 문법 규칙에 맞게 기호를 보완하세요.",
      "hint_en": "Parentheses around a single integer evaluate to a plain integer; add the required punctuation inside the parentheses to form a 1-tuple.",
      "templateCode": "t = (7)\nprint(len(t), t[0])",
      "targetCode": "t = (7,)\nprint(len(t), t[0])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1 7"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "튜플을 언패킹한 코드 아래에 한 줄을 추가하여 아이템과 수량을 지정된 형식으로 출력해보세요. (출력 예: Gold:250)",
      "prompt_en": "Add one line below the tuple unpacking to print the item and amount formatted as Gold:250.",
      "hint_ko": "윗줄에서 나누어 담은 두 변수를 콜론 기호 앞뒤로 배치하여 포맷 문자열로 한 줄 출력해보세요.",
      "hint_en": "Print a formatted string joining the two unpacked variables with a colon matching the example output.",
      "templateCode": "box = (\"Gold\", 250)\nitem, amount = box\n§§§§§§§§§§§§§§§§§§§§§§§§§",
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
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 파이썬 코드를 실행했을 때 화면에 출력될 결과를 선택해보세요.",
      "prompt_en": "Select the exact output produced when the following Python code runs.",
      "hint_ko": "언패킹된 두 수의 합이 조건을 통과해 결과 변수가 빈 값에서 벗어나는지 먼저 확인하고, 정체성 부정 판정값과 저장된 값을 함께 따져보세요.",
      "hint_en": "Check whether the unpacked numbers satisfy the sum condition to overwrite the empty initial value, then evaluate both printed expressions.",
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
