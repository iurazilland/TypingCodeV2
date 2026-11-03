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
      "hint_ko": "콜론 없이 중괄호로 값만 나열해 만든 집합은 똑같은 값을 하나만 남기고 중복을 자동으로 걸러냅니다.",
      "hint_en": "Listing values inside curly braces without colons builds a set that automatically keeps only one copy of any duplicate.",
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
      "hint_ko": "빈 중괄호는 빈 사전으로 인식되므로, 빈 '집합'을 만들 때는 세 글자 자료형 이름 뒤에 빈 소괄호를 붙여 호출해야 합니다.",
      "hint_en": "Empty curly braces create a dictionary, so call the 3-letter set constructor with empty parentheses to make an empty set.",
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
      "hint_ko": "집합에는 순서가 없어 끝에 덧붙이는 대신 '더하다·추가하다'라는 뜻의 세 글자 메서드를 쓰며, 이미 있는 값은 무시됩니다.",
      "hint_en": "Sets are unordered, so insert elements with the short 3-letter addition method; re-inserting an existing value leaves size unchanged.",
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
      "hint_ko": "소괄호를 붙인 빈 집합 생성식으로 초기화한 뒤, 집합에 원소를 '더하다'라는 뜻의 세 글자 메서드를 호출하세요.",
      "hint_en": "Initialize an empty set via its constructor call, then invoke the 3-letter method meaning 'put in / sum up' to insert 7.",
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
      "hint_ko": "중복이 섞인 리스트를 집합 변환 함수에 넣으면 고유한 숫자만 남으며, 여기에 길이와 합계 함수를 바로 적용할 수 있습니다.",
      "hint_en": "Converting a list to a set strips out duplicates at once, allowing you to measure the unique count and unique sum directly.",
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
      "hint_ko": "입력 줄을 공백 단위로 '쪼개는' 다섯 글자 메서드로 단어 리스트를 만든 뒤, 중복을 없애는 세 글자 '집합' 변환 함수로 감싸세요.",
      "hint_en": "Divide the input line into words with the 5-letter splitting method, then deduplicate them using the 3-letter collection constructor.",
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
      "hint_ko": "동전 리스트를 집합으로 변환해 중복 동전을 제거한 뒤, 그 집합의 원소를 하나씩 순회하며 합계 변수에 더하세요.",
      "hint_en": "Convert the coin list into a set to drop duplicates first, then loop over the unique coins to accumulate their total.",
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
      "hint_ko": "문자열에 세 글자 '집합' 변환 함수를 씌워 중복 없는 글자들을 모으고, '~ 안에'를 뜻하는 두 글자 연산자로 포함 여부를 확인하세요.",
      "hint_en": "Pass the word to the 3-letter deduplicating collection function, and check character presence with the 2-letter membership operator.",
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
      "hint_ko": "중복된 입력은 집합 크기를 늘리지 않으므로, 집합 길이가 3보다 작은 동안 입력받아 원소를 추가하면 고유 아이템 3개가 모입니다.",
      "hint_en": "Duplicates don't increase set length, so looping while the size is under 3 and inserting each input gathers 3 distinct items.",
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
      "hint_ko": "빈 집합 생성식으로 기록장을 만들고, 현재 값이 기록장 '안에' 있으면 멈추고 없으면 세 글자 원소 추가 메서드로 기록하세요.",
      "hint_en": "Create an empty set with its constructor, check membership with the 2-letter keyword, and record unseen items with the 3-letter insertion method.",
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
      "hint_ko": "빈 중괄호는 집합이 아니라 빈 사전을 만들기 때문에 집합 전용 추가 메서드를 쓸 수 없습니다. 빈 집합 생성 방식으로 고치세요.",
      "hint_en": "Empty curly braces create a dictionary rather than a set, causing the method error; initialize an empty set using its constructor.",
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
      "hint_ko": "중복이 제거된 집합 변수의 원소 개수를 '길이(length)' 앞 세 글자 함수로 구해 화면에 출력해보세요.",
      "hint_en": "Measure the element count of the deduplicated set variable and pass it to the output function.",
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
      "hint_ko": "리스트에서 중복이 걸러진 초기 원소들이 무엇인지 적은 뒤, 이미 들어 있는 값과 새로운 값을 각각 추가했을 때 최종 원소 개수와 합을 구해보세요.",
      "hint_en": "Write out the unique numbers from the list, see what happens when an existing number and a new number are inserted, and find the final count and total.",
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
