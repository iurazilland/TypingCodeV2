import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_51: PracticeRound = {
  "id": "py-basic-r51",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 51,
  "title_ko": "51레벨: 집합(set) 기초와 중복 제거",
  "title_en": "Level 51: Sets & Removing Duplicates",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "method",
    "math",
    "sorted",
    "if"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "집합 s = {1, 2, 2, 3}을 만들고 중복 제거 후 개수 len(s)와 정렬된 sorted(s)를 출력해보세요.",
      "prompt_en": "Create set s = {1, 2, 2, 3} and print len(s) and sorted(s).",
      "hint_ko": "집합은 중복된 2를 하나로 합치므로 len(s)는 3, sorted(s)는 [1, 2, 3]이 출력됩니다.",
      "hint_en": "Sets automatically remove duplicates; print len(s) and sorted(s).",
      "targetCode": "s = {1, 2, 2, 3}\nprint(len(s), sorted(s))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 [1, 2, 3]"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 10, 20, 10, 30을 중괄호 집합 nums로 선언하고 고유 원소의 개수를 출력해보세요.",
      "prompt_en": "Fill in the set literal {10, 20, 10, 30} for nums and print its unique item count.",
      "hint_ko": "콜론 없이 중괄호 안에 {10, 20, 10, 30}을 작성하면 중복이 제거된 집합이 생성됩니다.",
      "hint_en": "Write {10, 20, 10, 30} using curly braces.",
      "templateCode": "nums = §§§§§§§§§§§§§§§§\nprint(len(nums))",
      "targetCode": "nums = {10, 20, 10, 30}\nprint(len(nums))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "빈 집합 s = set()을 만들고 10을 두 번 .add()한 뒤 집합 s와 길이를 출력해보세요.",
      "prompt_en": "Create an empty set s = set(), call s.add(10) twice, and print s and len(s).",
      "hint_ko": "빈 집합은 반드시 set()으로 만들며, 같은 값 10을 두 번 추가해도 하나만 유지됩니다.",
      "hint_en": "Initialize s = set(), call s.add(10) twice, then print(s, len(s)).",
      "targetCode": "s = set()\ns.add(10)\ns.add(10)\nprint(s, len(s))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "{10} 1"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸을 채워 빈 집합 visited를 생성하고 두 도시를 추가한 뒤 정렬된 리스트를 출력해보세요.",
      "prompt_en": "Fill in the blanks to create empty set visited, add two cities, and print sorted(visited).",
      "hint_ko": "빈 집합 생성에는 set()을, 집합에 단일 원소를 추가할 때는 .add() 메서드를 사용합니다.",
      "hint_en": "Use set() on line 1 and add on line 3.",
      "templateCode": "visited = §§§§§\nvisited.§§§(\"Seoul\")\nvisited.add(\"Busan\")\nprint(sorted(visited))",
      "targetCode": "visited = set()\nvisited.add(\"Seoul\")\nvisited.add(\"Busan\")\nprint(sorted(visited))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['Busan', 'Seoul']"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "s = {10, 20, 30}에서 10은 .remove()로, 없는 값 99는 .discard()로 지운 뒤 sorted(s)를 출력해보세요.",
      "prompt_en": "On s = {10, 20, 30}, call s.remove(10) and s.discard(99), then print sorted(s).",
      "hint_ko": ".discard(99)는 집합에 없는 원소를 전달해도 에러 없이 안전하게 넘어갑니다.",
      "hint_en": "Remove 10 with s.remove(10), safely ignore 99 with s.discard(99), and print sorted(s).",
      "targetCode": "s = {10, 20, 30}\ns.remove(10)\ns.discard(99)\nprint(sorted(s))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[20, 30]"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸을 채워 있는 원소 \"B\"는 remove로, 없는 원소 \"Z\"는 에러가 나지 않는 discard로 삭제해보세요.",
      "prompt_en": "Fill in remove for existing element \"B\" and discard for missing element \"Z\".",
      "hint_ko": "둘째 줄에는 remove를, 셋째 줄에는 없는 값도 안전하게 무시하는 discard를 입력하세요.",
      "hint_en": "Write remove on line 2 and discard on line 3.",
      "templateCode": "keys = {\"A\", \"B\", \"C\"}\nkeys.§§§§§§(\"B\")\nkeys.§§§§§§§(\"Z\")\nprint(sorted(keys))",
      "targetCode": "keys = {\"A\", \"B\", \"C\"}\nkeys.remove(\"B\")\nkeys.discard(\"Z\")\nprint(sorted(keys))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['A', 'C']"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "집합 vip = {\"Kim\", \"Lee\"}에 \"Kim\"이 포함되어 있으면 \"Allow\", 아니면 \"Deny\"를 출력해보세요.",
      "prompt_en": "If \"Kim\" is in set vip = {\"Kim\", \"Lee\"}, print \"Allow\", otherwise print \"Deny\".",
      "hint_ko": "if \"Kim\" in vip: 조건문을 사용하면 집합 안에 원소가 있는지 빠르게 확인할 수 있습니다.",
      "hint_en": "Check membership with if \"Kim\" in vip:.",
      "targetCode": "vip = {\"Kim\", \"Lee\"}\nif \"Kim\" in vip:\n    print(\"Allow\")\nelse:\n    print(\"Deny\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Allow"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 입력받은 아이디 uid가 차단 집합 banned에 없는지(True/False) 출력해보세요.",
      "prompt_en": "Fill in the membership operator to print True when uid is not in banned, else False.",
      "hint_ko": "집합에 포함되어 있지 않은지 검사할 때는 not in 연산자를 사용합니다.",
      "hint_en": "Use not in between uid and banned.",
      "templateCode": "banned = {\"bot\", \"spam\"}\nuid = input()\nprint(uid §§§§§§ banned)",
      "targetCode": "banned = {\"bot\", \"spam\"}\nuid = input()\nprint(uid not in banned)",
      "testCases": [
        {
          "id": 1,
          "input": "neo",
          "expectedOutput": "True"
        },
        {
          "id": 2,
          "input": "spam",
          "expectedOutput": "False"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "중복이 섞인 리스트 nums = [4, 2, 4, 1, 2]의 중복을 제거하고 오름차순 정렬해 출력해보세요.",
      "prompt_en": "Remove duplicates from nums = [4, 2, 4, 1, 2] and print the ascending sorted list.",
      "hint_ko": "set(nums)로 중복을 없앤 뒤 sorted(set(nums))로 감싸 정렬된 리스트를 출력하세요.",
      "hint_en": "Wrap set(nums) inside sorted() and print it.",
      "targetCode": "nums = [4, 2, 4, 1, 2]\nprint(sorted(set(nums)))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[1, 2, 4]"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 입력된 단어 리스트 raw의 중복을 제거하고 정렬한 clean의 개수와 내용을 출력해보세요.",
      "prompt_en": "Fill in the blank to deduplicate and sort raw into clean, then print its length and items.",
      "hint_ko": "set(raw)로 중복을 제거하고 바깥에 sorted(...)를 씌워 정렬된 리스트를 만드세요.",
      "hint_en": "Write sorted(set(raw)) on line 2.",
      "templateCode": "raw = input().split()\nclean = §§§§§§§§§§§§§§§§\nprint(len(clean), clean)",
      "targetCode": "raw = input().split()\nclean = sorted(set(raw))\nprint(len(clean), clean)",
      "testCases": [
        {
          "id": 1,
          "input": "b a b c a",
          "expectedOutput": "3 ['a', 'b', 'c']"
        },
        {
          "id": 2,
          "input": "x x y",
          "expectedOutput": "2 ['x', 'y']"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "빈 집합을 만들어 원소를 추가하려다 AttributeError가 발생했습니다. 빈 집합이 되도록 고쳐보세요.",
      "prompt_en": "Fix the AttributeError on line 1 so s starts as an empty set and prints [10, 20].",
      "hint_ko": "빈 중괄호 {}는 집합이 아니라 빈 딕셔너리를 만듭니다. 빈 집합 생성 함수를 사용해보세요.",
      "hint_en": "{} creates an empty dict, not a set; initialize an empty set using the built-in constructor.",
      "templateCode": "s = {}\ns.add(10)\ns.add(20)\nprint(sorted(s))",
      "targetCode": "s = set()\ns.add(10)\ns.add(20)\nprint(sorted(s))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 20]"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "중복 기록 리스트 logs 아래에 한 줄을 추가하여 중복을 제거하고 오름차순 정렬한 리스트를 출력해보세요.",
      "prompt_en": "Add one line below logs to print the deduplicated, ascending-sorted list.",
      "hint_ko": "set(logs)를 sorted()에 넣어 print(sorted(set(logs)))를 작성하세요.",
      "hint_en": "Write print(sorted(set(logs))) on line 2.",
      "templateCode": "logs = [30, 10, 30, 20, 10]\n§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "logs = [30, 10, 30, 20, 10]\nprint(sorted(set(logs)))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 20, 30]"
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
      "hint_ko": "{1, 2, 3}에서 2 추가는 변화 없고, 없는 5 discard는 무시되며, 1을 지우면 원소 2개 [2, 3]이 남습니다.",
      "hint_en": "s starts with {1, 2, 3}; add(2) and discard(5) leave it unchanged, and remove(1) leaves [2, 3].",
      "targetCode": "s = {3, 1, 3, 2}\ns.add(2)\ns.discard(5)\ns.remove(1)\nprint(len(s), sorted(s))",
      "choices": [
        "3 [1, 2, 3]",
        "2 [2, 3]",
        "2 [1, 3]",
        "KeyError"
      ],
      "correctChoiceIndex": 1,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2 [2, 3]"
        }
      ]
    }
  ]
};
