import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_84: PracticeRound = {
  "id": "py-basic-r84",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 84,
  "title_ko": "84레벨: 리스트 확장(.extend()), 비우기(.clear())와 사본 복사(.copy(), [:])",
  "title_en": "Level 84: List .extend(), .clear() & Shallow Copy (.copy(), [:])",
  "description_ko": "리스트를 이어 붙이는 .extend(), 전체를 비우는 .clear(), 그리고 참조 공유를 막는 사본 복사(.copy(), [:])를 익힙니다.",
  "description_en": "Learn to unpack and merge lists with .extend(), empty lists with .clear(), and make independent copies with .copy() and [:].",
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
      "prompt_ko": "[블록 조립] a.extend(b)로 리스트 a 뒤에 리스트 b의 모든 원소를 풀어서 이어 붙이고 출력해보세요.",
      "prompt_en": "[Block] Use a.extend(b) to unpack and append all elements of b onto a, then print a.",
      "hint_ko": ".append(b)는 리스트 통째로 중첩해 넣지만, .extend(b)는 원소들을 하나씩 풀어서 뒤에 이어 붙입니다.",
      "hint_en": "Unlike .append(b) which nests the list, .extend(b) unpacks and appends each item from b.",
      "targetCode": "a = [1, 2]\nb = [3, 4]\na.extend(b)\nprint(a)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[1, 2, 3, 4]"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 장바구니 리스트 뒤에 추가 상품 리스트의 원소들을 한꺼번에 이어 붙이도록 메서드를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the list method name to append all items from extra onto cart.",
      "hint_ko": "다른 리스트의 원소들을 풀어서 현재 리스트 끝에 확장하는 여섯 글자 메서드를 호출하세요.",
      "hint_en": "Call the six-letter method that extends a list with elements from another sequence.",
      "templateCode": "cart = [\"pen\", \"book\"]\nextra = [\"note\", \"tape\"]\ncart.§§§§§§§(extra)\nprint(cart)",
      "targetCode": "cart = [\"pen\", \"book\"]\nextra = [\"note\", \"tape\"]\ncart.extend(extra)\nprint(cart)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['pen', 'book', 'note', 'tape']"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] nums.clear()로 리스트 안의 모든 요소를 비우고 빈 리스트와 길이를 출력해보세요.",
      "prompt_en": "[Block] Use nums.clear() to empty the list completely and print nums and len(nums).",
      "hint_ko": ".clear()를 호출하면 리스트 안의 모든 원소가 제거되어 빈 리스트 [] 상태가 됩니다.",
      "hint_en": "Calling .clear() removes every item from the list in place, leaving [].",
      "targetCode": "nums = [10, 20, 30]\nnums.clear()\nprint(nums, len(nums))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[] 0"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 임시 기록 리스트의 모든 원소를 한 번에 비우도록 메서드 이름을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the method name that removes all items from temp_log.",
      "hint_ko": "리스트 내부를 깨끗이 비워 빈 리스트로 만드는 다섯 글자 메서드를 적으세요.",
      "hint_en": "Use the five-letter list method that empties all elements in place.",
      "templateCode": "temp_log = [1, 2, 3, 4]\ntemp_log.§§§§§§()\nprint(temp_log)",
      "targetCode": "temp_log = [1, 2, 3, 4]\ntemp_log.clear()\nprint(temp_log)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[]"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] b = a로 단순 대입한 뒤 b[0] = 99로 바꾸면 원본 a[0]도 함께 바뀌는지 출력해 확인해보세요.",
      "prompt_en": "[Block] Assign b = a, change b[0] = 99, and print both a and b to observe shared reference behavior.",
      "hint_ko": "리스트를 b = a처럼 단순 대입하면 복사본이 생기는 것이 아니라 두 변수가 똑같은 리스트를 함께 가리킵니다.",
      "hint_en": "Simple assignment b = a aliases the same list object, so mutating b also changes a.",
      "targetCode": "a = [10, 20, 30]\nb = a\nb[0] = 99\nprint(a, b)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[99, 20, 30] [99, 20, 30]"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 두 변수가 같은 리스트 객체를 가리키는지 id가 아닌 비교 연산자로 확인하고 원본 변화를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the variable name assigned to alias so mutating alias[1] also mutates the first list.",
      "hint_ko": "원본 리스트 변수를 그대로 대입하면 같은 리스트 참조를 공유하게 됩니다.",
      "hint_en": "Assign the original list variable so both variables reference the same list.",
      "templateCode": "origin = [1, 2, 3]\nalias = §§§§§§§\nalias[1] = 77\nprint(origin[1], alias[1])",
      "targetCode": "origin = [1, 2, 3]\nalias = origin\nalias[1] = 77\nprint(origin[1], alias[1])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "77 77"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] b = a.copy()로 독립된 사본을 만들고 b[0] = 99로 바꾼 뒤 원본 a와 사본 b를 비교 출력해보세요.",
      "prompt_en": "[Block] Create an independent shallow copy with b = a.copy(), modify b[0] = 99, and print a and b.",
      "hint_ko": ".copy() 또는 전체 슬라이싱 [:]을 사용하면 원본과 분리된 새 리스트가 만들어져 원본이 안전하게 보존됩니다.",
      "hint_en": "Using .copy() or full slicing [:] creates a separate list so changes to b do not affect a.",
      "targetCode": "a = [10, 20, 30]\nb = a.copy()\nb[0] = 99\nprint(a, b)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 20, 30] [99, 20, 30]"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 원본 리스트가 훼손되지 않도록 사본 생성 메서드로 복제한 뒤 사본만 수정해보세요.",
      "prompt_en": "[Fill Blank] Call the list method that creates an independent duplicate of scores before modifying clone.",
      "hint_ko": "원본 리스트와 똑같은 원소를 가진 새 사본 리스트를 만드는 네 글자 메서드를 호출하세요.",
      "hint_en": "Call the four-letter method that returns a shallow duplicate of the list.",
      "templateCode": "scores = [80, 90, 100]\nclone = scores.§§§§§()\nclone[0] = 0\nprint(scores[0], clone[0])",
      "targetCode": "scores = [80, 90, 100]\nclone = scores.copy()\nclone[0] = 0\nprint(scores[0], clone[0])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "80 0"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 원본 리스트의 사본을 만든 뒤 추가 리스트를 이어 붙이고, 임시 리스트는 비우도록 세 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the duplicating method, list extension method, and list emptying method.",
      "hint_ko": "독립 사본을 만드는 메서드, 다른 리스트 원소를 이어 붙이는 메서드, 그리고 리스트를 비우는 메서드를 차례로 확인하세요.",
      "hint_en": "Check the four-letter duplicating method, six-letter extension method, and five-letter emptying method.",
      "templateCode": "base = [1, 2]\nextra = [3, 4]\nwork = base.§§§§§()\nwork.§§§§§§§(extra)\nextra.§§§§§§()\nprint(base, work, extra)",
      "targetCode": "base = [1, 2]\nextra = [3, 4]\nwork = base.copy()\nwork.extend(extra)\nextra.clear()\nprint(base, work, extra)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[1, 2] [1, 2, 3, 4] []"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 백업 본을 수정할 때 원본 리스트까지 함께 바뀌어 버리는 참조 공유 버그를 사본 복사로 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the aliasing bug where modifying backup also mutates the original data list.",
      "hint_ko": "단순 대입(= data)은 같은 리스트를 공유하므로 .copy() 메서드로 독립된 사본을 만들어야 합니다.",
      "hint_en": "Use data.copy() instead of assigning data directly so the original list remains untouched.",
      "templateCode": "data = [10, 20, 30]\nbackup = data\nbackup.append(40)\nprint(len(data), len(backup))",
      "targetCode": "data = [10, 20, 30]\nbackup = data.copy()\nbackup.append(40)\nprint(len(data), len(backup))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 4"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 두 리스트의 원소를 나란히 합치려다 리스트 안에 리스트가 통째로 중첩되어 들어간 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the bug where [3, 4] was nested inside nums as a single element instead of unpacking its items.",
      "hint_ko": ".append()는 리스트 하나를 통째로 넣으므로, 원소들을 풀어서 이어 붙이려면 확장 메서드를 써야 합니다.",
      "hint_en": "Replace .append() with .extend() to unpack the elements into nums.",
      "templateCode": "nums = [1, 2]\nnums.append([3, 4])\nprint(len(nums), nums)",
      "targetCode": "nums = [1, 2]\nnums.extend([3, 4])\nprint(len(nums), nums)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "4 [1, 2, 3, 4]"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 전체 슬라이싱([:])을 사용해 리스트 a의 독립 사본을 변수 b에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the line that assigns a full slice copy of list a to variable b.",
      "hint_ko": "변수 b에 a[:]를 대입하면 .copy()와 똑같이 독립된 새 리스트 사본이 만들어집니다.",
      "hint_en": "Assign a[:] to variable b.",
      "templateCode": "a = [5, 10, 15]\n§§§§§§§§§\nb[0] = 99\nprint(a[0], b[0])",
      "targetCode": "a = [5, 10, 15]\nb = a[:]\nb[0] = 99\nprint(a[0], b[0])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "5 99"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 리스트 team1 뒤에 team2의 모든 원소를 풀어서 이어 붙이는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the line that extends team1 in place with all elements of team2.",
      "hint_ko": "team1에서 리스트 확장 메서드를 호출하고 인자로 team2를 전달하세요.",
      "hint_en": "Call team1.extend(team2).",
      "templateCode": "team1 = [\"Kim\", \"Lee\"]\nteam2 = [\"Park\", \"Choi\"]\n§§§§§§§§§§§§§§§§§§§§\nprint(len(team1), team1)",
      "targetCode": "team1 = [\"Kim\", \"Lee\"]\nteam2 = [\"Park\", \"Choi\"]\nteam1.extend(team2)\nprint(len(team1), team1)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "4 ['Kim', 'Lee', 'Park', 'Choi']"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 단순 대입 참조(b = a)와 사본 복사(c = a.copy())를 각각 수정했을 때 원본과 사본의 출력 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the output after mutating both an alias b = a and a copy c = a.copy().",
      "hint_ko": "b를 통한 수정은 원본 a에 그대로 반영되지만, 사본 c를 통한 수정은 a에 영향을 주지 않습니다.",
      "hint_en": "Changes through alias b affect a, whereas changes through shallow copy c do not.",
      "targetCode": "a = [1, 2, 3]\nb = a\nc = a.copy()\nb.append(4)\nc[0] = 9\nprint(a, c)",
      "choices": [
        "[1, 2, 3, 4] [9, 2, 3]",
        "[9, 2, 3, 4] [9, 2, 3]",
        "[1, 2, 3] [9, 2, 3, 4]",
        "[1, 2, 3, 4] [9, 2, 3, 4]"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[1, 2, 3, 4] [9, 2, 3]"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] .append([3, 4])를 실행한 리스트와 .extend([3, 4])를 실행한 리스트의 길이(len)를 비교한 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the output comparing the lengths of lists modified with .append([3, 4]) versus .extend([3, 4]).",
      "hint_ko": ".append([3, 4])는 리스트 1개를 원소로 추가해 길이가 1만 늘어나고, .extend([3, 4])는 원소 2개를 풀어 넣어 길이가 2 늘어납니다.",
      "hint_en": ".append([3, 4]) adds one nested list element (+1 length), while .extend([3, 4]) adds two individual elements (+2 length).",
      "targetCode": "x = [1, 2]\ny = [1, 2]\nx.append([3, 4])\ny.extend([3, 4])\nprint(len(x), len(y))",
      "choices": [
        "3 4",
        "4 4",
        "3 3",
        "4 3"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 4"
        }
      ]
    }
  ]
};
