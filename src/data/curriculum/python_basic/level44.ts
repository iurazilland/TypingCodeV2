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
      "prompt_ko": "튜플 pt = (10, 20)을 만들고 첫 번째 요소 pt[0]과 전체 길이 len(pt)를 나란히 출력해보세요.",
      "prompt_en": "Create tuple pt = (10, 20) and print its first item pt[0] and length len(pt).",
      "hint_ko": "소괄호로 만든 튜플도 리스트처럼 0번 인덱스와 len() 함수를 그대로 사용할 수 있습니다.",
      "hint_en": "Tuples use parentheses () and support 0-based indexing and len() just like lists.",
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
      "hint_ko": "요소가 하나뿐인 튜플은 (5,)처럼 값 뒤에 반드시 쉼표(,)를 붙여야 튜플로 인식됩니다.",
      "hint_en": "A single-element tuple requires a trailing comma inside parentheses, like (5,).",
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
      "prompt_ko": "튜플 pt = (30, 70)을 두 변수 x, y에 언패킹(분리 대입)한 뒤 x + y의 합계를 출력해보세요.",
      "prompt_en": "Unpack tuple pt = (30, 70) into x, y and print x + y.",
      "hint_ko": "x, y = pt처럼 요소 개수에 맞춰 변수를 나열하면 튜플 안의 값이 순서대로 나뉘어 저장됩니다.",
      "hint_en": "Write x, y = pt to unpack the two tuple elements into x and y.",
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
      "prompt_ko": "아무 값도 없음을 뜻하는 파이썬 상수를 빈칸에 채워 불리언 판별값과 자료형을 출력해보세요.",
      "prompt_en": "Fill in the Python constant representing an empty/absent value to print its boolean value and type.",
      "hint_ko": "값이 비어 있음을 나타낼 때는 첫 글자가 대문자인 None을 사용하며, bool(None)은 False입니다.",
      "hint_en": "Use None (capitalized) to represent the absence of a value; bool(None) evaluates to False.",
      "templateCode": "target = §§§§\nprint(bool(target))\nprint(type(target))",
      "targetCode": "target = None\nprint(bool(target))\nprint(type(target))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "False\n<class 'NoneType'>"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "target에 None을 저장하고, if target is None: 조건문으로 비어 있는지 확인해 \"Empty\"를 출력해보세요.",
      "prompt_en": "Set target = None, check if target is None:, and print \"Empty\".",
      "hint_ko": "None 여부를 검사할 때는 == 대신 is None 연산자를 사용하는 것이 파이썬 표준 방식입니다.",
      "hint_en": "Use is None rather than == None to check whether a variable holds None.",
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
      "hint_ko": "값이 존재하는지(None이 아닌지) 확인할 때는 is not None 구문을 사용합니다.",
      "hint_en": "Use is not None to verify that a variable actually holds a value.",
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
      "prompt_ko": "튜플 리스트 pts = [(2, 3), (4, 5)]를 순회하며 각 튜플을 x, y로 언패킹해 x * y의 누적합을 출력해보세요.",
      "prompt_en": "Loop through pts = [(2, 3), (4, 5)], unpack each tuple into x, y, and print the sum of x * y.",
      "hint_ko": "for pt in pts: 안에서 x, y = pt로 분리한 뒤 total += x * y로 곱셈 결과를 누적하세요.",
      "hint_en": "Inside for pt in pts:, unpack x, y = pt and accumulate total += x * y.",
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
      "hint_ko": "출력문 f\"{stat}:{val}\"에서 사용하는 변수 이름 stat, val을 for와 in 사이에 나란히 적으세요.",
      "hint_en": "Write stat, val as the loop variables in for stat, val in pairs:.",
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
      "prompt_ko": "found = None으로 시작해 while문으로 nums = [55, 70, 85, 90]에서 첫 80 이상 값을 찾아 출력해보세요.",
      "prompt_en": "Start with found = None and use a while loop on nums = [55, 70, 85, 90] to find and print the first value >= 80.",
      "hint_ko": "nums[i] >= 80일 때 found = nums[i]로 저장한 뒤 break로 반복을 멈추고 found를 출력하세요.",
      "hint_en": "When nums[i] >= 80, assign found = nums[i], break out of the while loop, and print found.",
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
      "prompt_ko": "입력된 정수 중 첫 짝수를 찾고, 끝까지 못 찾으면 \"No\"를 출력하도록 빈칸을 채워보세요. (출력 예: Even:8)",
      "prompt_en": "Fill in the blanks to track the first even integer with None and print \"No\" if none exists (e.g., Even:8).",
      "hint_ko": "초기값을 None으로 두고, 반복이 끝난 뒤 ans가 여전히 is None인지 검사해 분기합니다.",
      "hint_en": "Initialize ans = None, then check if ans is None: after the loop.",
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
      "hint_ko": "소괄호 안에 값 하나만 적으면 일반 정수로 처리됩니다. 7 뒤에 쉼표(,)를 추가해 튜플로 만들어주세요.",
      "hint_en": "(7) is evaluated as plain int 7. Add a trailing comma inside the parentheses to make it a tuple.",
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
      "hint_ko": "마지막 줄에 f-string을 이용해 print(f\"{item}:{amount}\")를 작성해보세요.",
      "hint_en": "Write print(f\"{item}:{amount}\") on the third line.",
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
      "hint_ko": "x=4, y=6이므로 x + y == 10 조건이 참이 되어 res에 24가 저장되고, res is not None은 True입니다.",
      "hint_en": "x + y is 10, so res becomes 4 * 6 = 24, making res is not None evaluate to True.",
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
