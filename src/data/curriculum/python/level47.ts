import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_47: PracticeRound = {
  "id": "py-basic-r47",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 47,
  "title_ko": "47레벨: 튜플(tuple) 기초와 언패킹",
  "title_en": "Level 47: Tuples & Unpacking",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "type",
    "math",
    "method"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "좌표 튜플 pt에 (10, 20)을 저장하고 pt 전체를 그대로 출력해보세요.",
      "prompt_en": "Store (10, 20) in tuple pt and print pt.",
      "hint_ko": "소괄호와 쉼표로 (10, 20) 튜플을 만들어 pt에 저장한 뒤 print(pt)로 출력하세요.",
      "hint_en": "Assign (10, 20) to pt using parentheses and a comma, then call print(pt).",
      "targetCode": "pt = (10, 20)\nprint(pt)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "(10, 20)"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 세 정수 255, 128, 0을 담은 튜플 rgb를 만들고 출력해보세요.",
      "prompt_en": "Fill in the blank to create tuple rgb with (255, 128, 0) and print it.",
      "hint_ko": "튜플은 소괄호 ( ) 안에 값을 쉼표로 구분해 (255, 128, 0)처럼 작성합니다.",
      "hint_en": "Write (255, 128, 0) inside parentheses separated by commas.",
      "templateCode": "rgb = §§§§§§§§§§§§§\nprint(rgb)",
      "targetCode": "rgb = (255, 128, 0)\nprint(rgb)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "(255, 128, 0)"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "단일 요소 튜플 a = (7,)와 일반 수식 b = (7)의 자료형을 각각 한 줄씩 출력해보세요.",
      "prompt_en": "Print type(a) for single-element tuple a = (7,) and type(b) for b = (7) on separate lines.",
      "hint_ko": "요소가 하나인 튜플은 (7,)처럼 뒤에 쉼표가 있어야 tuple이 되며, (7)은 int가 됩니다.",
      "hint_en": "A trailing comma in (7,) makes a tuple, whereas (7) without a comma is an int.",
      "targetCode": "a = (7,)\nb = (7)\nprint(type(a))\nprint(type(b))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "<class 'tuple'>\n<class 'int'>"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 정수 99 하나만 담긴 단일 요소 튜플 one을 선언하고 값과 자료형을 출력해보세요.",
      "prompt_en": "Fill in the blank to declare single-element tuple one containing 99, then print its value and type.",
      "hint_ko": "소괄호 안의 99 뒤에 반드시 쉼표를 붙여 (99,) 형태로 입력해야 튜플로 인식됩니다.",
      "hint_en": "Include the trailing comma as (99,) so Python creates a single-element tuple.",
      "templateCode": "one = §§§§§\nprint(one, type(one))",
      "targetCode": "one = (99,)\nprint(one, type(one))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "(99,) <class 'tuple'>"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "튜플 days = (\"Mon\", \"Tue\", \"Wed\", \"Thu\")에서 첫 요소, 마지막 요소, 전체 길이를 출력해보세요.",
      "prompt_en": "From days = (\"Mon\", \"Tue\", \"Wed\", \"Thu\"), print the first element, last element, and length.",
      "hint_ko": "인덱스 0(days[0]), 음수 인덱스 -1(days[-1]), 그리고 len(days)를 차례대로 출력하세요.",
      "hint_en": "Print days[0], days[-1], and len(days) separated by spaces.",
      "targetCode": "days = (\"Mon\", \"Tue\", \"Wed\", \"Thu\")\nprint(days[0], days[-1], len(days))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Mon Thu 4"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 슬라이싱 식을 채워 튜플 nums에서 (20, 30, 40) 구간만 잘라 출력해보세요.",
      "prompt_en": "Fill in the slicing expression to print the sub-tuple (20, 30, 40) from nums.",
      "hint_ko": "인덱스 1번부터 3번까지 잘라내려면 끝 인덱스에 4를 적어 nums[1:4]로 슬라이싱합니다.",
      "hint_en": "Use nums[1:4] to slice indices 1, 2, and 3.",
      "templateCode": "nums = (10, 20, 30, 40, 50)\nprint(§§§§§§§§§)",
      "targetCode": "nums = (10, 20, 30, 40, 50)\nprint(nums[1:4])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "(20, 30, 40)"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "튜플 pt = (15, 25)를 두 변수 x, y에 언패킹하고 x + y의 합을 출력해보세요.",
      "prompt_en": "Unpack tuple pt = (15, 25) into x and y, then print x + y.",
      "hint_ko": "x, y = pt로 튜플의 두 요소를 한 번에 나누어 담은 뒤 print(x + y)를 실행하세요.",
      "hint_en": "Unpack with x, y = pt and print x + y.",
      "targetCode": "pt = (15, 25)\nx, y = pt\nprint(x + y)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "40"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 튜플 box의 세 값을 w, h, d로 언패킹하고 부피(w * h * d)를 출력해보세요.",
      "prompt_en": "Fill in the blank to unpack box into w, h, d and print the volume w * h * d.",
      "hint_ko": "좌변에 변수 이름을 쉼표로 나열해 w, h, d = box 형태로 언패킹합니다.",
      "hint_en": "Write w, h, d on the left side of = box.",
      "templateCode": "box = (4, 5, 6)\n§§§§§§§ = box\nprint(w * h * d)",
      "targetCode": "box = (4, 5, 6)\nw, h, d = box\nprint(w * h * d)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "120"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "두 튜플 a = (1, 2)와 b = (3, 2, 2)를 이어 붙인 c에서 2의 개수와 3의 인덱스를 출력해보세요.",
      "prompt_en": "Concatenate a = (1, 2) and b = (3, 2, 2) into c, then print the count of 2 and index of 3.",
      "hint_ko": "c = a + b로 새 튜플을 만든 뒤 c.count(2)와 c.index(3)을 출력하세요.",
      "hint_en": "Combine tuples with a + b, then use c.count(2) and c.index(3).",
      "targetCode": "a = (1, 2)\nb = (3, 2, 2)\nc = a + b\nprint(c.count(2), c.index(3))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 2"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸을 채워 t1과 t2를 결합한 튜플 t3에서 \"B\"의 개수와 \"C\"의 위치를 출력해보세요.",
      "prompt_en": "Fill in the blanks to concatenate t1 and t2 into t3, then print the count of \"B\" and index of \"C\".",
      "hint_ko": "튜플 결합에는 t1 + t2를, 특정 값의 개수 세기에는 count(\"B\") 메서드를 사용합니다.",
      "hint_en": "Use t1 + t2 to concatenate and count(\"B\") to count occurrences.",
      "templateCode": "t1 = (\"A\", \"B\")\nt2 = (\"B\", \"C\")\nt3 = §§§§§§§\nprint(t3.§§§§§§§§§§, t3.index(\"C\"))",
      "targetCode": "t1 = (\"A\", \"B\")\nt2 = (\"B\", \"C\")\nt3 = t1 + t2\nprint(t3.count(\"B\"), t3.index(\"C\"))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2 3"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "정수 5 하나를 담은 튜플 t와 그 길이 1을 출력하려다 TypeError가 발생했습니다. 오류를 고쳐보세요.",
      "prompt_en": "Fix the TypeError so t becomes a single-element tuple containing 5 and prints alongside its length 1.",
      "hint_ko": "괄호 안에 값 하나만 적으면 정수가 되어 len()을 쓸 수 없습니다. 값 뒤에 쉼표를 붙여 튜플로 만들어보세요.",
      "hint_en": "Add a trailing comma inside the parentheses so Python treats t as a tuple rather than an integer.",
      "templateCode": "t = (5)\nprint(t, len(t))",
      "targetCode": "t = (5,)\nprint(t, len(t))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "(5,) 1"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "튜플 info를 언패킹한 코드 아래에 한 줄을 추가하여 name과 score를 공백으로 구분해 출력해보세요.",
      "prompt_en": "Add one line below the tuple unpacking code to print name and score separated by a space.",
      "hint_ko": "마지막 줄에 print(name, score)를 입력하면 언패킹된 두 변수가 공백으로 구분되어 출력됩니다.",
      "hint_en": "Write print(name, score) on the third line.",
      "templateCode": "info = (\"Kim\", 95)\nname, score = info\n§§§§§§§§§§§§§§§§§§",
      "targetCode": "info = (\"Kim\", 95)\nname, score = info\nprint(name, score)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Kim 95"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 파이썬 코드를 실행했을 때 출력될 결과를 선택해보세요.",
      "prompt_en": "Select the exact output produced when the following Python code runs.",
      "hint_ko": "t[1:3]은 (20, 30)이므로 a=20, b=30이 되어 합은 50이고, t에서 20의 개수는 2개입니다.",
      "hint_en": "t[1:3] slices (20, 30), so a + b is 50 and t.count(20) is 2.",
      "targetCode": "t = (10, 20, 30, 20)\na, b = t[1:3]\nprint(a + b, t.count(20))",
      "choices": [
        "30 2",
        "50 2",
        "50 1",
        "60 2"
      ],
      "correctChoiceIndex": 1,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "50 2"
        }
      ]
    }
  ]
};
