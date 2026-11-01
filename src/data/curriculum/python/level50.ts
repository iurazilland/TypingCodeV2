import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_50: PracticeRound = {
  "id": "py-basic-r50",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 50,
  "title_ko": "50레벨: 딕셔너리 메서드와 for 순회",
  "title_en": "Level 50: Dictionary Methods & Iteration",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "method",
    "math",
    "for_in",
    "if"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "딕셔너리 d = {\"kor\": 90, \"eng\": 85}를 for 반복문으로 순회하여 모든 키를 한 줄씩 출력해보세요.",
      "prompt_en": "Iterate over d = {\"kor\": 90, \"eng\": 85} with a for loop and print each key on its own line.",
      "hint_ko": "for k in d: 구문으로 딕셔너리를 순회하면 키가 순서대로 변수 k에 담깁니다.",
      "hint_en": "Looping with for k in d: yields each key in insertion order.",
      "targetCode": "d = {\"kor\": 90, \"eng\": 85}\nfor k in d:\n    print(k)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "kor\neng"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 키 조회 메서드를 채워 딕셔너리 cap의 모든 키를 리스트로 변환해 출력해보세요.",
      "prompt_en": "Fill in the dictionary keys method to convert all keys of cap into a list and print it.",
      "hint_ko": "딕셔너리의 키 모음을 가져올 때는 cap.keys() 메서드를 호출합니다.",
      "hint_en": "Call cap.keys() inside list().",
      "templateCode": "cap = {\"KR\": \"Seoul\", \"JP\": \"Tokyo\"}\nprint(list(§§§§§§§§§§))",
      "targetCode": "cap = {\"KR\": \"Seoul\", \"JP\": \"Tokyo\"}\nprint(list(cap.keys()))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['KR', 'JP']"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "딕셔너리 pts = {\"q1\": 30, \"q2\": 40, \"q3\": 25}의 모든 점수 합계를 출력해보세요.",
      "prompt_en": "Print the sum of all values in pts = {\"q1\": 30, \"q2\": 40, \"q3\": 25}.",
      "hint_ko": "pts.values()로 값들만 꺼내 sum(pts.values())로 합계를 구해 출력하세요.",
      "hint_en": "Pass pts.values() into sum() and print the result.",
      "targetCode": "pts = {\"q1\": 30, \"q2\": 40, \"q3\": 25}\nprint(sum(pts.values()))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "95"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 딕셔너리 fees의 값들만 for문으로 순회하며 누적한 합계 total을 출력해보세요.",
      "prompt_en": "Fill in the blank to iterate over the values of fees and accumulate them into total.",
      "hint_ko": "값 목록만 순회하려면 fees.values()를 in 뒤에 작성합니다.",
      "hint_en": "Write fees.values() in the for loop header.",
      "templateCode": "fees = {\"bus\": 1400, \"sub\": 1500}\ntotal = 0\nfor v in §§§§§§§§§§§§§:\n    total += v\nprint(total)",
      "targetCode": "fees = {\"bus\": 1400, \"sub\": 1500}\ntotal = 0\nfor v in fees.values():\n    total += v\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2900"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "딕셔너리 box = {\"pen\": 2, \"cup\": 5}를 .items()로 순회하며 키와 값을 한 줄씩 출력해보세요.",
      "prompt_en": "Iterate over box = {\"pen\": 2, \"cup\": 5} using .items() and print each key and value.",
      "hint_ko": "for k, v in box.items(): 형태로 키와 값을 동시에 언패킹해 print(k, v)로 출력하세요.",
      "hint_en": "Use for k, v in box.items(): and print(k, v).",
      "targetCode": "box = {\"pen\": 2, \"cup\": 5}\nfor k, v in box.items():\n    print(k, v)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "pen 2\ncup 5"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸을 채워 team의 키와 값을 name, role로 꺼내 \"이름:역할\" 형식으로 출력해보세요.",
      "prompt_en": "Fill in the blanks to unpack each key-value pair from team into name and role and print \"name:role\".",
      "hint_ko": "for 뒤에는 name, role을, team. 뒤에는 키-값 쌍 메서드 items()를 입력하세요.",
      "hint_en": "Unpack with name, role and call team.items().",
      "templateCode": "team = {\"Kim\": \"Dev\", \"Lee\": \"PM\"}\nfor §§§§§§§§§§ in team.§§§§§§§:\n    print(f\"{name}:{role}\")",
      "targetCode": "team = {\"Kim\": \"Dev\", \"Lee\": \"PM\"}\nfor name, role in team.items():\n    print(f\"{name}:{role}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Kim:Dev\nLee:PM"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "sc = {\"Kim\": 85, \"Park\": 72, \"Choi\": 90}을 순회해 80점 이상인 학생 이름만 출력해보세요.",
      "prompt_en": "Iterate through sc = {\"Kim\": 85, \"Park\": 72, \"Choi\": 90} and print names with scores >= 80.",
      "hint_ko": "for k, v in sc.items(): 안에서 if v >= 80: 조건이 참일 때만 print(k)를 실행하세요.",
      "hint_en": "Filter inside for k, v in sc.items(): with if v >= 80: and print(k).",
      "targetCode": "sc = {\"Kim\": 85, \"Park\": 72, \"Choi\": 90}\nfor k, v in sc.items():\n    if v >= 80:\n        print(k)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Kim\nChoi"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸을 채워 재고 딕셔너리 inv에서 수량(qty)이 0인 품절 상품 이름만 출력해보세요.",
      "prompt_en": "Fill in the blanks to print only item names whose quantity qty equals 0 in inv.",
      "hint_ko": "inv.items()로 상품명과 수량을 꺼낸 뒤 if qty == 0: 조건으로 필터링하세요.",
      "hint_en": "Iterate over inv.items() and check if qty == 0:.",
      "templateCode": "inv = {\"milk\": 0, \"bread\": 4, \"jam\": 0}\nfor item, qty in §§§§§§§§§§§:\n    if §§§§§§§§:\n        print(item)",
      "targetCode": "inv = {\"milk\": 0, \"bread\": 4, \"jam\": 0}\nfor item, qty in inv.items():\n    if qty == 0:\n        print(item)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "milk\njam"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "d = {\"a\": 1, \"b\": 2}에 {\"b\": 20, \"c\": 3}을 .update()로 병합한 뒤 d[\"b\"]와 len(d)를 출력해보세요.",
      "prompt_en": "Update d = {\"a\": 1, \"b\": 2} with {\"b\": 20, \"c\": 3}, then print d[\"b\"] and len(d).",
      "hint_ko": "d.update({\"b\": 20, \"c\": 3})은 기존 키 \"b\"의 값을 갱신하고 새 키 \"c\"를 추가합니다.",
      "hint_en": "Call d.update({\"b\": 20, \"c\": 3}), then print d[\"b\"] and len(d).",
      "targetCode": "d = {\"a\": 1, \"b\": 2}\nd.update({\"b\": 20, \"c\": 3})\nprint(d[\"b\"], len(d))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "20 3"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 병합 메서드를 채워 cfg 설정을 한 번에 갱신한 뒤 \"vol\"과 \"hd\" 값을 출력해보세요.",
      "prompt_en": "Fill in the dictionary merge method to update cfg in bulk and print cfg[\"vol\"] and cfg[\"hd\"].",
      "hint_ko": "여러 키-값 쌍을 한꺼번에 수정하거나 추가할 때는 update 메서드를 사용합니다.",
      "hint_en": "Call cfg.update(...) to merge another dictionary into cfg.",
      "templateCode": "cfg = {\"vol\": 50, \"mute\": False}\ncfg.§§§§§§({\"vol\": 80, \"hd\": True})\nprint(cfg[\"vol\"], cfg[\"hd\"])",
      "targetCode": "cfg = {\"vol\": 50, \"mute\": False}\ncfg.update({\"vol\": 80, \"hd\": True})\nprint(cfg[\"vol\"], cfg[\"hd\"])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "80 True"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "딕셔너리의 키와 값을 동시에 꺼내 출력하려다 ValueError가 발생했습니다. 올바르게 순회하도록 고쳐보세요.",
      "prompt_en": "Fix the ValueError in the loop header so each key and value in prices prints cleanly.",
      "hint_ko": "딕셔너리 이름만 적으면 키만 순회합니다. 키-값 쌍을 함께 꺼내도록 전용 메서드를 호출해보세요.",
      "hint_en": "Call the dictionary method that returns (key, value) pairs in the for loop.",
      "templateCode": "prices = {\"tea\": 3000, \"cake\": 5000}\nfor k, v in prices:\n    print(k, v)",
      "targetCode": "prices = {\"tea\": 3000, \"cake\": 5000}\nfor k, v in prices.items():\n    print(k, v)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "tea 3000\ncake 5000"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "요일별 매출 딕셔너리 sales 아래에 한 줄을 추가하여 전체 매출의 합계를 출력해보세요.",
      "prompt_en": "Add one line below dictionary sales to print the total sum of all sales values.",
      "hint_ko": "sales.values()를 sum() 함수에 전달해 print(sum(sales.values()))로 출력하세요.",
      "hint_en": "Write print(sum(sales.values())) on line 2.",
      "templateCode": "sales = {\"Mon\": 120, \"Tue\": 150, \"Wed\": 130}\n§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "sales = {\"Mon\": 120, \"Tue\": 150, \"Wed\": 130}\nprint(sum(sales.values()))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "400"
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
      "hint_ko": "update 후 값은 30, 25, 15, 5가 되므로 15 이상은 3개이고 전체 값의 합은 75입니다.",
      "hint_en": "After update, values are 30, 25, 15, 5: three values are >= 15 and their total sum is 75.",
      "targetCode": "d = {\"a\": 10, \"b\": 25, \"c\": 15}\nd.update({\"a\": 30, \"d\": 5})\ncnt = 0\nfor k, v in d.items():\n    if v >= 15:\n        cnt += 1\nprint(cnt, sum(d.values()))",
      "choices": [
        "2 65",
        "3 65",
        "3 75",
        "4 75"
      ],
      "correctChoiceIndex": 2,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 75"
        }
      ]
    }
  ]
};
