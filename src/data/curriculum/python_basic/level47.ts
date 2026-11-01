import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_47: PracticeRound = {
  "id": "py-basic-r47",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 47,
  "title_ko": "47레벨: 집합(set) 기초, 중복 제거와 .add()",
  "title_en": "Level 47: Sets Basics, Deduplication & .add()",
  "description_ko": "중복을 허용하지 않는 집합(set)을 생성하고, set()으로 중복 요소를 제거하며 .add()와 in을 활용합니다.",
  "description_en": "Create sets that forbid duplicates, deduplicate data with set(), and use .add() and membership checks.",
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
      "prompt_ko": "중복 값이 포함된 집합 s = {10, 20, 10, 30}을 만들고 고유 요소 개수 len(s)와 20 in s를 출력해보세요.",
      "prompt_en": "Create set s = {10, 20, 10, 30} and print len(s) and 20 in s.",
      "hint_ko": "집합(set)은 콜론 없이 중괄호 {값1, 값2}로 만들며, 중복된 10은 자동으로 하나만 남습니다.",
      "hint_en": "Sets automatically discard duplicate values, leaving three unique numbers in s.",
      "targetCode": "s = {10, 20, 10, 30}\nprint(len(s), 20 in s)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 True"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈 딕셔너리가 아닌 빈 집합을 생성하도록 빈칸을 채워 길이(0)와 자료형을 출력해보세요.",
      "prompt_en": "Fill in the blank to create an empty set (not an empty dict) and print its length and type.",
      "hint_ko": "{}는 빈 딕셔너리가 되므로, 빈 집합을 만들 때는 반드시 set() 함수를 호출해야 합니다.",
      "hint_en": "Because {} creates an empty dict, call set() to create an empty set.",
      "templateCode": "empty = §§§§§\nprint(len(empty), type(empty))",
      "targetCode": "empty = set()\nprint(len(empty), type(empty))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "0 <class 'set'>"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "집합 tags = {\"py\"}에 .add()로 \"web\"과 중복 값 \"py\"를 차례로 추가한 뒤 len(tags)와 \"web\" in tags를 출력해보세요.",
      "prompt_en": "On tags = {\"py\"}, call .add(\"web\") and .add(\"py\"), then print len(tags) and \"web\" in tags.",
      "hint_ko": "집합에는 .append() 대신 .add()를 사용하며, 이미 있는 값을 다시 추가해도 크기가 늘어나지 않습니다.",
      "hint_en": "Use tags.add(...) to insert items; adding an existing item keeps the set unchanged.",
      "targetCode": "tags = {\"py\"}\ntags.add(\"web\")\ntags.add(\"py\")\nprint(len(tags), \"web\" in tags)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2 True"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈 집합을 만들고 정수 7을 두 번 추가하도록 빈칸을 채워 집합 크기와 5의 미포함 여부를 출력해보세요.",
      "prompt_en": "Create an empty set and add 7 twice, then print the set size and whether 5 is absent.",
      "hint_ko": "빈 집합 생성 함수와 집합에 요소를 넣는 메서드 이름을 차례대로 입력하세요.",
      "hint_en": "Initialize seen with set() and call seen.add(7).",
      "templateCode": "seen = §§§§§\nseen.§§§(7)\nseen.add(7)\nprint(len(seen), 5 not in seen)",
      "targetCode": "seen = set()\nseen.add(7)\nseen.add(7)\nprint(len(seen), 5 not in seen)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1 True"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "리스트 nums = [5, 10, 5, 20, 10]을 set(nums)로 변환해 중복을 없앤 뒤 고유 개수와 합계(sum)를 출력해보세요.",
      "prompt_en": "Deduplicate nums = [5, 10, 5, 20, 10] with uniq = set(nums) and print len(uniq) and sum(uniq).",
      "hint_ko": "리스트를 set()에 넣으면 중복 요소가 한 번에 제거되며, len()과 sum()으로 집계할 수 있습니다.",
      "hint_en": "Pass nums into set(nums) to keep only unique numbers, then print len(uniq), sum(uniq).",
      "targetCode": "nums = [5, 10, 5, 20, 10]\nuniq = set(nums)\nprint(len(uniq), sum(uniq))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 35"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "공백으로 입력된 단어들의 중복을 제거하여 고유 단어 개수를 출력해보세요. (출력 예: Unique:3)",
      "prompt_en": "Split input words and deduplicate them with a set to print the unique count (e.g., Unique:3).",
      "hint_ko": "문자열을 공백 단위로 쪼개는 메서드와 집합 변환 함수를 차례대로 채워주세요.",
      "hint_en": "Split the input line with .split() and pass words to set().",
      "templateCode": "words = input().§§§§§()\nuniq = §§§(words)\nprint(f\"Unique:{len(uniq)}\")",
      "targetCode": "words = input().split()\nuniq = set(words)\nprint(f\"Unique:{len(uniq)}\")",
      "testCases": [
        {
          "id": 1,
          "input": "cat dog cat bird dog",
          "expectedOutput": "Unique:3"
        },
        {
          "id": 2,
          "input": "hi hi hi",
          "expectedOutput": "Unique:1"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "coins = [100, 500, 100, 50, 500]의 중복을 제거한 집합 uniq를 for문으로 순회해 고유 동전 총합을 출력해보세요.",
      "prompt_en": "Deduplicate coins = [100, 500, 100, 50, 500] into uniq = set(coins) and sum them with a for loop.",
      "hint_ko": "uniq = set(coins)를 만든 뒤 for c in uniq: 반복문 안에서 total += c로 합산하세요.",
      "hint_en": "Convert coins with set(coins), then accumulate total += c inside for c in uniq:.",
      "targetCode": "coins = [100, 500, 100, 50, 500]\nuniq = set(coins)\ntotal = 0\nfor c in uniq:\n    total += c\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "650"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "입력받은 단어의 고유 글자 집합을 만들고, 고유 글자 수와 소문자 a 포함 여부를 출력해보세요.",
      "prompt_en": "Build a set of unique characters from input word and print its size and whether \"a\" is in it.",
      "hint_ko": "문자열을 set()에 넣으면 한 글자씩 분리되어 중복 없는 글자 집합이 만들어집니다.",
      "hint_en": "Use set(word) to deduplicate characters and in to test membership.",
      "templateCode": "word = input()\nchars = §§§(word)\nhas_a = \"a\" §§ chars\nprint(len(chars), has_a)",
      "targetCode": "word = input()\nchars = set(word)\nhas_a = \"a\" in chars\nprint(len(chars), has_a)",
      "testCases": [
        {
          "id": 1,
          "input": "banana",
          "expectedOutput": "3 True"
        },
        {
          "id": 2,
          "input": "hello",
          "expectedOutput": "4 False"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "빈 집합 picks에 고유 아이템이 3개 모일 때까지 while문으로 입력받아 추가하고 크기와 \"gold\" 포함 여부를 출력해보세요.",
      "prompt_en": "Loop while len(picks) < 3 to read and .add() items into picks = set(), then print size and \"gold\" in picks.",
      "hint_ko": "중복 아이템이 입력되면 len(picks)가 늘지 않으므로 서로 다른 3개가 모일 때까지 자동으로 반복됩니다.",
      "hint_en": "Initialize picks = set(), loop while len(picks) < 3: reading item = input() and picks.add(item).",
      "targetCode": "picks = set()\nwhile len(picks) < 3:\n    item = input()\n    picks.add(item)\nprint(len(picks), \"gold\" in picks)",
      "testCases": [
        {
          "id": 1,
          "input": "ruby\nruby\ngold\njade",
          "expectedOutput": "3 True"
        },
        {
          "id": 2,
          "input": "iron\nwood\niron\ncoal",
          "expectedOutput": "3 False"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "집합에 본 값을 기록하며 처음으로 중복 등장한 요소를 찾아 출력해보세요. (출력 예: FirstDup:B)",
      "prompt_en": "Track visited tokens in a set to find and print the first duplicate token (e.g., FirstDup:B).",
      "hint_ko": "빈 집합을 만들고, x가 이미 집합 안에 있으면 dup에 저장해 멈추고 없으면 집합에 추가합니다.",
      "hint_en": "Create seen = set(), check if x in seen:, and call seen.add(x) for new items.",
      "templateCode": "raw = input().split()\nseen = §§§§§\ndup = None\nfor x in raw:\n    if x §§ seen:\n        dup = x\n        break\n    seen.§§§(x)\nprint(f\"FirstDup:{dup}\")",
      "targetCode": "raw = input().split()\nseen = set()\ndup = None\nfor x in raw:\n    if x in seen:\n        dup = x\n        break\n    seen.add(x)\nprint(f\"FirstDup:{dup}\")",
      "testCases": [
        {
          "id": 1,
          "input": "A B C B A",
          "expectedOutput": "FirstDup:B"
        },
        {
          "id": 2,
          "input": "X Y Z",
          "expectedOutput": "FirstDup:None"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "빈 중괄호로 인해 집합이 아닌 딕셔너리가 생성되어 발생한 오류(AttributeError)를 고쳐 고유 방문자 수를 출력해보세요.",
      "prompt_en": "Fix the AttributeError caused by initializing visitors with {} instead of an empty set.",
      "hint_ko": "빈 중괄호 {}는 딕셔너리이므로 .add() 메서드가 없습니다. 빈 집합 생성 함수로 바꿔주세요.",
      "hint_en": "Replace {} with set() so visitors supports .add().",
      "templateCode": "visitors = {}\nvisitors.add(\"Kim\")\nvisitors.add(\"Kim\")\nprint(len(visitors))",
      "targetCode": "visitors = set()\nvisitors.add(\"Kim\")\nvisitors.add(\"Kim\")\nprint(len(visitors))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "중복 로그를 제거한 집합 아래에 한 줄을 추가하여 고유 행동의 개수(3)를 출력해보세요.",
      "prompt_en": "Add one line below uniq = set(logs) to print the number of unique actions (3).",
      "hint_ko": "마지막 줄에 print(len(uniq))를 작성하여 집합의 요소 개수를 출력하세요.",
      "hint_en": "Write print(len(uniq)) on the third line.",
      "templateCode": "logs = [\"login\", \"view\", \"login\", \"pay\"]\nuniq = set(logs)\n§§§§§§§§§§§§§§§§",
      "targetCode": "logs = [\"login\", \"view\", \"login\", \"pay\"]\nuniq = set(logs)\nprint(len(uniq))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3"
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
      "hint_ko": "{2, 4, 6}에서 이미 있는 6은 무시되고 8만 새로 추가되어 {2, 4, 6, 8}이 되므로 개수는 4, 합계는 20입니다.",
      "hint_en": "s becomes {2, 4, 6, 8} after adding 6 (ignored) and 8, so len(s) is 4 and sum(s) is 20.",
      "targetCode": "nums = [2, 4, 2, 6, 4]\ns = set(nums)\ns.add(6)\ns.add(8)\nprint(len(s), sum(s))",
      "choices": [
        "4 20",
        "5 26",
        "3 12",
        "4 18"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "4 20"
        }
      ]
    }
  ]
};
