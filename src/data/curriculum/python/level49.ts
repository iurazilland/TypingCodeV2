import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_49: PracticeRound = {
  "id": "py-basic-r49",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 49,
  "title_ko": "49레벨: 딕셔너리 데이터 추가·수정·삭제와 키 확인",
  "title_en": "Level 49: Dictionary Mutation, Deletion & Key Check",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "method",
    "if"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "딕셔너리 d = {\"name\": \"Seo\"}에 새 키 \"grade\"와 값 \"A\"를 추가한 뒤 d를 출력해보세요.",
      "prompt_en": "Add key \"grade\" with value \"A\" to d = {\"name\": \"Seo\"}, then print d.",
      "hint_ko": "d[\"grade\"] = \"A\"처럼 새 키에 값을 대입하면 딕셔너리에 항목이 추가됩니다.",
      "hint_en": "Assign d[\"grade\"] = \"A\" to insert a new key-value pair.",
      "targetCode": "d = {\"name\": \"Seo\"}\nd[\"grade\"] = \"A\"\nprint(d)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "{'name': 'Seo', 'grade': 'A'}"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 딕셔너리 car에 \"year\": 2026 항목을 추가하고 브랜드와 연식을 출력해보세요.",
      "prompt_en": "Fill in the blanks to add \"year\": 2026 to car and print the brand and year.",
      "hint_ko": "대괄호 안에 새 키 \"year\"를 적고 우변에 정수 2026을 대입하세요.",
      "hint_en": "Assign car[\"year\"] = 2026 on line 2.",
      "templateCode": "car = {\"brand\": \"Kia\"}\ncar[§§§§§§] = §§§§\nprint(car[\"brand\"], car[\"year\"])",
      "targetCode": "car = {\"brand\": \"Kia\"}\ncar[\"year\"] = 2026\nprint(car[\"brand\"], car[\"year\"])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Kia 2026"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "hero = {\"hp\": 80, \"mp\": 40}에서 복합 대입으로 \"hp\"를 20 늘린 뒤 hp와 mp를 출력해보세요.",
      "prompt_en": "Increase hero[\"hp\"] by 20 on hero = {\"hp\": 80, \"mp\": 40}, then print hp and mp.",
      "hint_ko": "hero[\"hp\"] += 20으로 기존 체력 값을 20 증가시킨 뒤 두 값을 출력하세요.",
      "hint_en": "Use hero[\"hp\"] += 20 to add 20 to the existing value.",
      "targetCode": "hero = {\"hp\": 80, \"mp\": 40}\nhero[\"hp\"] += 20\nprint(hero[\"hp\"], hero[\"mp\"])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "100 40"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 \"gold\" 값을 250으로 수정하고 \"gem\" 개수를 2만큼 증가시켜 출력해보세요.",
      "prompt_en": "Fill in the blanks to overwrite \"gold\" with 250 and increment \"gem\" by 2.",
      "hint_ko": "기존 키에 = 250을 쓰면 값이 덮어써지고, += 2를 쓰면 기존 값에 2가 더해집니다.",
      "hint_en": "Use = 250 on line 2 and += on line 3.",
      "templateCode": "box = {\"gold\": 100, \"gem\": 3}\nbox[\"gold\"] §§§§§\nbox[\"gem\"] §§ 2\nprint(box[\"gold\"], box[\"gem\"])",
      "targetCode": "box = {\"gold\": 100, \"gem\": 3}\nbox[\"gold\"] = 250\nbox[\"gem\"] += 2\nprint(box[\"gold\"], box[\"gem\"])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "250 5"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "d = {\"id\": 7, \"temp\": 99}에서 .pop()으로 \"temp\"를 꺼내 val에 저장하고 val과 남은 d를 출력해보세요.",
      "prompt_en": "Pop \"temp\" from d = {\"id\": 7, \"temp\": 99} into val, then print val and d.",
      "hint_ko": "val = d.pop(\"temp\")는 \"temp\" 항목을 삭제하면서 그 값 99를 반환합니다.",
      "hint_en": "d.pop(\"temp\") removes the key and returns its value 99.",
      "targetCode": "d = {\"id\": 7, \"temp\": 99}\nval = d.pop(\"temp\")\nprint(val, d)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "99 {'id': 7}"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 삭제 키워드를 채워 딕셔너리 cfg에서 \"temp\" 항목을 제거하고 cfg를 출력해보세요.",
      "prompt_en": "Fill in the deletion keyword to remove key \"temp\" from cfg and print cfg.",
      "hint_ko": "반환값 없이 특정 키를 바로 삭제할 때는 del 키워드를 앞에 붙입니다.",
      "hint_en": "Use the del statement: del cfg[\"temp\"].",
      "templateCode": "cfg = {\"host\": \"local\", \"temp\": 0}\n§§§ cfg[\"temp\"]\nprint(cfg)",
      "targetCode": "cfg = {\"host\": \"local\", \"temp\": 0}\ndel cfg[\"temp\"]\nprint(cfg)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "{'host': 'local'}"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "딕셔너리 d = {\"hp\": 100}에 \"hp\" 키가 있는지와 \"mp\" 키가 없는지를 차례대로 출력해보세요.",
      "prompt_en": "On d = {\"hp\": 100}, print whether \"hp\" is in d and whether \"mp\" is not in d.",
      "hint_ko": "\"hp\" in d와 \"mp\" not in d를 print()에 나란히 적어 불리언 결과를 확인하세요.",
      "hint_en": "Use \"hp\" in d and \"mp\" not in d inside print().",
      "targetCode": "d = {\"hp\": 100}\nprint(\"hp\" in d, \"mp\" not in d)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True True"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 bag에 \"map\" 키가 없을 때만 \"map\": 1을 새로 추가하고 bag을 출력해보세요.",
      "prompt_en": "Fill in the blank to add \"map\": 1 only when \"map\" is not already in bag.",
      "hint_ko": "특정 키가 존재하지 않는지 검사할 때는 not in 연산자를 사용합니다.",
      "hint_en": "Use not in to check that \"map\" is absent from bag.",
      "templateCode": "bag = {\"key\": 1}\nif \"map\" §§§§§§ bag:\n    bag[\"map\"] = 1\nprint(bag)",
      "targetCode": "bag = {\"key\": 1}\nif \"map\" not in bag:\n    bag[\"map\"] = 1\nprint(bag)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "{'key': 1, 'map': 1}"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "cnt = {\"A\": 2}에 키 k = \"A\"가 있으면 값을 1 늘리고, 없으면 1로 저장한 뒤 cnt[k]를 출력해보세요.",
      "prompt_en": "On cnt = {\"A\": 2} and k = \"A\", increment cnt[k] by 1 if k is in cnt else set it to 1, then print cnt[k].",
      "hint_ko": "if k in cnt: 분기에서는 cnt[k] += 1을, else: 분기에서는 cnt[k] = 1을 실행하세요.",
      "hint_en": "Check if k in cnt: to run cnt[k] += 1, otherwise set cnt[k] = 1.",
      "targetCode": "cnt = {\"A\": 2}\nk = \"A\"\nif k in cnt:\n    cnt[k] += 1\nelse:\n    cnt[k] = 1\nprint(cnt[k])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 입력받은 키 k가 cnt에 있으면 개수를 1 늘리고, 없으면 1로 등록해 cnt[k]를 출력해보세요.",
      "prompt_en": "Fill in the blanks so existing keys increment by 1 and new keys initialize to 1.",
      "hint_ko": "키 존재 여부는 in으로 확인하고, 기존 값은 += 1로 누적합니다.",
      "hint_en": "Use in in the if condition and += 1 in the if body.",
      "templateCode": "cnt = {\"A\": 1}\nk = input()\nif k §§ cnt:\n    cnt[k] §§§§\nelse:\n    cnt[k] = 1\nprint(cnt[k])",
      "targetCode": "cnt = {\"A\": 1}\nk = input()\nif k in cnt:\n    cnt[k] += 1\nelse:\n    cnt[k] = 1\nprint(cnt[k])",
      "testCases": [
        {
          "id": 1,
          "input": "A",
          "expectedOutput": "2"
        },
        {
          "id": 2,
          "input": "B",
          "expectedOutput": "1"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "새 기록이 입력되면 KeyError가 나고 기존 기록은 1로 초기화됩니다. 빈도수가 정상 누적되도록 고쳐보세요.",
      "prompt_en": "Fix the condition bug so existing keys increment by 1 instead of resetting, and new keys start at 1.",
      "hint_ko": "키가 이미 있을 때만 += 1을 실행해야 합니다. if 조건의 포함 연산자가 반대로 되어 있지 않은지 확인하세요.",
      "hint_en": "Check the membership operator in the if condition: += 1 can only run when k is already in cnt.",
      "templateCode": "cnt = {\"win\": 3}\nk = input()\nif k not in cnt:\n    cnt[k] += 1\nelse:\n    cnt[k] = 1\nprint(cnt[k])",
      "targetCode": "cnt = {\"win\": 3}\nk = input()\nif k in cnt:\n    cnt[k] += 1\nelse:\n    cnt[k] = 1\nprint(cnt[k])",
      "testCases": [
        {
          "id": 1,
          "input": "win",
          "expectedOutput": "4"
        },
        {
          "id": 2,
          "input": "lose",
          "expectedOutput": "1"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "레벨(\"lv\")을 1 올린 코드 아래에 한 줄을 추가하여 user의 \"id\"와 \"lv\" 값을 공백으로 출력해보세요.",
      "prompt_en": "Add one line below user[\"lv\"] += 1 to print user[\"id\"] and user[\"lv\"] separated by a space.",
      "hint_ko": "마지막 줄에 print(user[\"id\"], user[\"lv\"])를 입력해 두 값을 출력하세요.",
      "hint_en": "Write print(user[\"id\"], user[\"lv\"]) on line 3.",
      "templateCode": "user = {\"id\": \"neo\", \"lv\": 4}\nuser[\"lv\"] += 1\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "user = {\"id\": \"neo\", \"lv\": 4}\nuser[\"lv\"] += 1\nprint(user[\"id\"], user[\"lv\"])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "neo 5"
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
      "hint_ko": "d[\"x\"]는 15가 되고 d.pop(\"y\")는 20을 반환하며 \"y\"를 삭제하므로 합은 35, \"y\" in d는 False입니다.",
      "hint_en": "d[\"x\"] becomes 15, v is 20 after popping \"y\", so 15 + 20 is 35 and \"y\" in d is False.",
      "targetCode": "d = {\"x\": 10, \"y\": 20}\nd[\"x\"] += 5\nv = d.pop(\"y\")\nprint(d[\"x\"] + v, \"y\" in d)",
      "choices": [
        "30 False",
        "35 True",
        "35 False",
        "25 False"
      ],
      "correctChoiceIndex": 2,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "35 False"
        }
      ]
    }
  ]
};
