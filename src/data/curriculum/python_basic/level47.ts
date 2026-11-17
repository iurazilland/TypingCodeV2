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
      "prompt_ko": "[블록 조립] 중괄호({})로 집합(set)을 만들어 중복을 제거하고 길이와 20 포함 여부를 출력해보세요.",
      "prompt_en": "[Block] Create a set with curly braces ({}) to remove duplicates and print its length and whether 20 is in it.",
      "hint_ko": "똑같은 값을 여러 번 넣어도 집합 안에는 하나만 남으며, len()과 in 연산자로 원소 개수와 포함 여부를 확인할 수 있습니다.",
      "hint_en": "Duplicate elements collapse into one inside a set, and you can use len() and in to check its size and membership.",
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
      "prompt_ko": "[빈칸 채우기] 빈 집합을 생성하도록 빈칸을 채워 원소 10을 추가한 뒤 길이(1)를 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the blank to create an empty set, add 10 to it, and print its length (1).",
      "hint_ko": "빈 중괄호는 빈 사전으로 인식되므로, 빈 '집합'을 만들 때는 세 글자 자료형 이름 뒤에 빈 소괄호를 붙여 호출해야 합니다.",
      "hint_en": "Empty curly braces create a dictionary, so call the 3-letter set constructor with empty parentheses to make an empty set.",
      "templateCode": "empty = §§§§§\nempty.add(10)\nprint(len(empty))",
      "targetCode": "empty = set()\nempty.add(10)\nprint(len(empty))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] .add() 메서드로 집합에 원소를 추가하고 집합 크기와 \"web\" 포함 여부를 출력해보세요.",
      "prompt_en": "[Block] Use .add() to insert elements into the set and print its size and whether \"web\" is in it.",
      "hint_ko": "새로운 값은 집합에 추가되어 길이가 늘어나지만, 이미 존재하는 값은 무시되어 크기가 그대로 유지됩니다.",
      "hint_en": "Adding a new element increases the set's size, while adding an existing element leaves the set unchanged.",
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
      "prompt_ko": "[빈칸 채우기] 빈 집합을 만들고 정수 7을 두 번 추가하여 집합 크기와 5의 미포함 여부를 출력해보세요.",
      "prompt_en": "[Fill Blank] Create an empty set and add 7 twice, then print the set size and whether 5 is absent.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 리스트를 set(nums)에 전달해 중복을 제거하고 고유 원소 개수와 합계를 출력해보세요.",
      "prompt_en": "[Block] Pass the list to set(nums) to remove duplicates and print the unique count and sum.",
      "hint_ko": "집합에도 len()과 sum() 함수를 그대로 적용해 고유 원소의 개수와 합계를 바로 구할 수 있습니다.",
      "hint_en": "You can pass the deduplicated set directly to len() and sum() to get the unique count and total.",
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
      "prompt_ko": "[빈칸 채우기] 입력된 단어들의 중복을 제거해 고유 단어 개수를 출력해보세요.",
      "prompt_en": "[Fill Blank] Split input words and deduplicate them with a set to print the unique count.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 리스트를 set()으로 변환해 중복을 없앤 뒤 for문으로 순회하며 합계를 출력해보세요.",
      "prompt_en": "[Block] Convert a list with set() to remove duplicates, then iterate with a for loop to print the total.",
      "hint_ko": "집합은 순서가 보장되지 않지만, 모든 고유 원소를 빠짐없이 한 번씩 꺼내 누적 합계를 구할 때는 문제없이 사용할 수 있습니다.",
      "hint_en": "Although sets have no fixed order, iterating over a set visits every unique element exactly once.",
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
      "prompt_ko": "[빈칸 채우기] 입력 단어들의 중복을 제거하고 for문으로 고유 단어 길이 합을 구해보세요.",
      "prompt_en": "[Fill Blank] Deduplicate input words into a set and sum their lengths with a for loop.",
      "hint_ko": "단어 리스트를 세 글자 '집합' 변환 함수로 감싸 중복을 없애고, for 반복문의 두 글자 포함 키워드로 순회하세요.",
      "hint_en": "Wrap the word list in the 3-letter set constructor and iterate over it using the 2-letter membership keyword in the for loop.",
      "templateCode": "raw = input().split()\nuniq = §§§(raw)\ncnt = 0\nfor w §§ uniq:\n    cnt += len(w)\nprint(len(uniq), cnt)",
      "targetCode": "raw = input().split()\nuniq = set(raw)\ncnt = 0\nfor w in uniq:\n    cnt += len(w)\nprint(len(uniq), cnt)",
      "testCases": [
        {
          "id": 1,
          "input": "cat dog cat",
          "expectedOutput": "2 6"
        },
        {
          "id": 2,
          "input": "hi hi go",
          "expectedOutput": "2 4"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] while문으로 고유 아이템 3개가 모일 때까지 .add()로 입력받아 출력해보세요.",
      "prompt_en": "[Block] Use a while loop and .add() to collect 3 distinct inputs and print the result.",
      "hint_ko": "중복된 값을 .add()해도 집합의 길이(len)는 늘어나지 않으므로, 고유한 값 3개가 채워질 때까지 반복문이 계속 실행됩니다.",
      "hint_en": "Because duplicate .add() calls do not increase len(picks), the loop continues until 3 unique items are collected.",
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
      "prompt_ko": "[빈칸 채우기] 서로 다른 단어 2개가 모일 때까지 입력받아 집합에 추가해보세요.",
      "prompt_en": "[Fill Blank] Read inputs and add them to a set until 2 distinct words are collected.",
      "hint_ko": "빈 집합 생성식으로 초기화한 뒤, 반복문 안에서 집합 전용 세 글자 원소 추가 메서드를 호출하세요.",
      "hint_en": "Initialize an empty set with its constructor and call the 3-letter insertion method inside the loop.",
      "templateCode": "seen = §§§§§\nwhile len(seen) < 2:\n    w = input()\n    seen.§§§(w)\nprint(len(seen), \"py\" in seen)",
      "targetCode": "seen = set()\nwhile len(seen) < 2:\n    w = input()\n    seen.add(w)\nprint(len(seen), \"py\" in seen)",
      "testCases": [
        {
          "id": 1,
          "input": "py\npy\nai",
          "expectedOutput": "2 True"
        },
        {
          "id": 2,
          "input": "go\ngo\njs",
          "expectedOutput": "2 False"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 중괄호 안에 콜론(:)을 써서 딕셔너리가 생성된 버그를 쉼표(,)로 고쳐 집합을 완성해보세요.",
      "prompt_en": "[Fix Bug] Fix the bug where colons (:) created a dict instead of a set by replacing them with commas (,).",
      "hint_ko": "중괄호 안에 콜론(:)을 넣으면 딕셔너리가 되어 .add()를 쓸 수 없습니다. 콜론 두 곳을 쉼표(,)로 바꾸어 집합으로 만드세요.",
      "hint_en": "Colons inside curly braces create a dictionary rather than a set; replace the colons with commas.",
      "templateCode": "s = {10: 20, 30: 10}\ns.add(40)\nprint(len(s), sum(s))",
      "targetCode": "s = {10, 20, 30, 10}\ns.add(40)\nprint(len(s), sum(s))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "4 100"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 리스트를 집합 대신 문자열(str)로 잘못 변환해 오류가 나는 줄을 set(nums)로 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the bug where nums is converted with str(nums) instead of set(nums).",
      "hint_ko": "중복을 제거하고 .add() 메서드를 사용하려면 str(nums)가 아니라 집합 변환 함수 set(nums)를 호출해야 합니다.",
      "hint_en": "To deduplicate the list and call .add(), convert nums using set(nums) instead of str(nums).",
      "templateCode": "nums = [10, 20, 10]\nuniq = str(nums)\nuniq.add(30)\nprint(len(uniq), sum(uniq))",
      "targetCode": "nums = [10, 20, 10]\nuniq = set(nums)\nuniq.add(30)\nprint(len(uniq), sum(uniq))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 60"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 리스트 logs의 중복을 제거한 집합을 변수 uniq에 저장하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the line that converts logs into a deduplicated set stored in uniq.",
      "hint_ko": "변수 uniq에 대입(=) 기호를 쓰고, 리스트 logs를 세 글자 집합 변환 함수 set()으로 감싸세요.",
      "hint_en": "Assign set(logs) to the variable uniq.",
      "templateCode": "logs = [\"login\", \"view\", \"login\", \"pay\"]\n§§§§§§§§§§§§§§§§\nprint(len(uniq))",
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
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 입력받은 단어 w를 집합 tags에 추가하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the line that adds input word w into the set tags.",
      "hint_ko": "집합 변수 tags 뒤에 점(.)을 찍고 원소 추가 메서드 add(w)를 호출하세요.",
      "hint_en": "Call the .add(w) method on the set variable tags.",
      "templateCode": "tags = {\"py\", \"ai\"}\nw = input()\n§§§§§§§§§§§\nprint(len(tags), w in tags)",
      "targetCode": "tags = {\"py\", \"ai\"}\nw = input()\ntags.add(w)\nprint(len(tags), w in tags)",
      "testCases": [
        {
          "id": 1,
          "input": "web",
          "expectedOutput": "3 True"
        },
        {
          "id": 2,
          "input": "py",
          "expectedOutput": "2 True"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 파이썬 코드를 실행했을 때 화면에 출력될 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output produced when the following Python code runs.",
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
