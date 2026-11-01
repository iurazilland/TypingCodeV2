import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 58레벨: 실용 내장 함수 1 — 수학과 순서 묶기 (13단계 표준 구성)
// - [1,3,5,7,9단계] 블록 코딩 개념 도입 (abs, round, enumerate, zip)
// - [2,4,6,8,10단계] 빈칸 채우기 타이핑 실습 (fill_blank)
// - [11단계] 버그 수정 (fix_bug)
// - [12단계] 예제 아래 한 줄 코드 추가 작성 (one_line)
// - [13단계] 출력 결과 예측 4지선다 퀴즈 (predict_output)
// ============================================================================
export const PYTHON_LEVEL_58: PracticeRound = {
  "id": "py-basic-r58",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 58,
  "title_ko": "58레벨: 실용 내장 함수 1 — 수학과 순서 묶기",
  "title_en": "Level 58: Built-ins 1: abs, round, enumerate, zip",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "math",
    "iter",
    "for_in"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "두 위치 a = 12, b = 27을 선언하고, abs(a - b)로 두 수 사이의 거리(절댓값)를 출력해보세요.",
      "prompt_en": "Declare a = 12 and b = 27, then print the absolute difference abs(a - b).",
      "hint_ko": "abs() 함수는 음수 부호를 뗀 절댓값을 돌려주므로 a - b가 음수여도 양수 거리가 나옵니다.",
      "hint_en": "Pass a - b inside abs() and print the result.",
      "targetCode": "a = 12\nb = 27\nprint(abs(a - b))",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "15"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 내장 함수를 채워 -18의 절댓값과 10 - 25의 절댓값을 나란히 출력해보세요.",
      "prompt_en": "Fill in the built-in function name to compute the absolute values of -18 and 10 - 25.",
      "hint_ko": "숫자의 절댓값(absolute value)을 구하는 세 글자 내장 함수는 abs입니다.",
      "hint_en": "Use abs on both lines 1 and 2.",
      "templateCode": "d1 = §§§(-18)\nd2 = §§§(10 - 25)\nprint(d1, d2)",
      "targetCode": "d1 = abs(-18)\nd2 = abs(10 - 25)\nprint(d1, d2)",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "18 15"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "pi = 3.1415를 선언하고, 정수로 반올림한 round(pi)와 소수 둘째 자리까지 반올림한 round(pi, 2)를 출력해보세요.",
      "prompt_en": "Set pi = 3.1415, then print round(pi) and round(pi, 2).",
      "hint_ko": "round(숫자)는 가장 가까운 정수로, round(숫자, 자릿수)는 지정한 소수 자릿수까지 반올림합니다.",
      "hint_en": "Call round(pi) on line 2 and round(pi, 2) on line 3.",
      "targetCode": "pi = 3.1415\nprint(round(pi))\nprint(round(pi, 2))",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "3\n3.14"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 3.6을 정수로 반올림한 값과 2.678을 소수 첫째 자리까지 반올림한 값을 출력해보세요.",
      "prompt_en": "Fill in the blanks to round 3.6 to an integer and 2.678 to 1 decimal place.",
      "hint_ko": "반올림 함수 round를 적고, 소수 첫째 자리까지 반올림하려면 두 번째 인자로 1을 전달합니다.",
      "hint_en": "Enter round on line 1 and round(2.678, 1) on line 2.",
      "templateCode": "a = §§§§§(3.6)\nb = §§§§§§§§§§§§§§§\nprint(a, b)",
      "targetCode": "a = round(3.6)\nb = round(2.678, 1)\nprint(a, b)",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "4 2.7"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "items = [\"Pen\", \"Book\"]을 enumerate(items)로 순회하며 0번부터 인덱스 idx와 값 val을 출력해보세요.",
      "prompt_en": "Iterate over items = [\"Pen\", \"Book\"] with enumerate(items) and print idx and val.",
      "hint_ko": "for idx, val in enumerate(items): 블록 안에서 print(idx, val)을 실행하세요.",
      "hint_en": "Use enumerate(items) in a for_in loop with loop variables idx, val.",
      "targetCode": "items = [\"Pen\", \"Book\"]\nfor idx, val in enumerate(items):\n    print(idx, val)",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "0 Pen\n1 Book"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 colors 리스트의 인덱스와 색상을 0:Red 형식의 f-string으로 출력해보세요.",
      "prompt_en": "Fill in the blanks to print each index and color from colors as f\"{i}:{c}\".",
      "hint_ko": "순서 번호와 요소를 동시에 꺼내려면 for i, c in enumerate(colors): 구문을 사용합니다.",
      "hint_en": "Enter i, c and enumerate on line 2.",
      "templateCode": "colors = [\"Red\", \"Blue\", \"Gold\"]\nfor §§§§ in §§§§§§§§§(colors):\n    print(f\"{i}:{c}\")",
      "targetCode": "colors = [\"Red\", \"Blue\", \"Gold\"]\nfor i, c in enumerate(colors):\n    print(f\"{i}:{c}\")",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "0:Red\n1:Blue\n2:Gold"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "medal = [\"Gold\", \"Silver\", \"Bronze\"]를 enumerate(medal, 1)로 순회해 1번부터 순위와 메달을 출력해보세요.",
      "prompt_en": "Loop over medal with enumerate(medal, 1) to print 1-based rank and medal name.",
      "hint_ko": "enumerate의 두 번째 인자로 시작 번호 1을 주면 인덱스가 0 대신 1부터 시작합니다.",
      "hint_en": "Pass 1 as the second argument: enumerate(medal, 1).",
      "targetCode": "medal = [\"Gold\", \"Silver\", \"Bronze\"]\nfor rank, m in enumerate(medal, 1):\n    print(rank, m)",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "1 Gold\n2 Silver\n3 Bronze"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 players 리스트를 1번부터 번호 매겨 #1 Min, #2 Ara 형식으로 출력해보세요.",
      "prompt_en": "Fill in the blanks using 1-based enumerate so players print as #1 Min and #2 Ara.",
      "hint_ko": "1번부터 번호가 시작되도록 enumerate(players, 1)을 완성하세요.",
      "hint_en": "Write enumerate(players, 1) in the for loop header.",
      "templateCode": "players = [\"Min\", \"Ara\"]\nfor num, p in §§§§§§§§§§§§§§§§§§§§§:\n    print(f\"#{num} {p}\")",
      "targetCode": "players = [\"Min\", \"Ara\"]\nfor num, p in enumerate(players, 1):\n    print(f\"#{num} {p}\")",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "#1 Min\n#2 Ara"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "names = [\"Kim\", \"Lee\"]와 scores = [95, 88]을 zip(names, scores)로 묶어 순회하며 이름과 점수를 출력해보세요.",
      "prompt_en": "Pair names = [\"Kim\", \"Lee\"] and scores = [95, 88] with zip() and print each name and score.",
      "hint_ko": "zip(names, scores)는 두 리스트의 같은 위치 요소끼리 짝지어 차례대로 꺼내줍니다.",
      "hint_en": "Use for name, score in zip(names, scores): and print(name, score).",
      "targetCode": "names = [\"Kim\", \"Lee\"]\nscores = [95, 88]\nfor name, score in zip(names, scores):\n    print(name, score)",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "Kim 95\nLee 88"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 메뉴 리스트 menus와 가격 리스트 prices를 나란히 묶어 Tea=3000 형식으로 출력해보세요.",
      "prompt_en": "Fill in the blanks to iterate over menus and prices in parallel using zip.",
      "hint_ko": "두 리스트를 병렬로 묶어주는 zip(menus, prices)와 반복 변수 m, p를 채워주세요.",
      "hint_en": "Enter m, p and zip(menus, prices) on line 3.",
      "templateCode": "menus = [\"Tea\", \"Cake\"]\nprices = [3000, 5500]\nfor §§§§ in §§§§§§§§§§§§§§§§§§:\n    print(f\"{m}={p}\")",
      "targetCode": "menus = [\"Tea\", \"Cake\"]\nprices = [3000, 5500]\nfor m, p in zip(menus, prices):\n    print(f\"{m}={p}\")",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "Tea=3000\nCake=5500"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "1. Todo와 2. Done 순서로 출력하려 하지만 번호와 항목 위치가 뒤바뀌어 나옵니다. 코드를 수정해보세요.",
      "prompt_en": "Fix the variable unpacking order so the output prints 1. Todo and 2. Done.",
      "hint_ko": "enumerate는 항상 (순서 번호, 요소 값) 순서로 쌍을 꺼내므로 for 뒤의 두 변수 순서를 확인해보세요.",
      "hint_en": "enumerate yields (index, element) first and second respectively.",
      "templateCode": "tasks = [\"Todo\", \"Done\"]\nfor task, no in enumerate(tasks, 1):\n    print(f\"{no}. {task}\")",
      "targetCode": "tasks = [\"Todo\", \"Done\"]\nfor no, task in enumerate(tasks, 1):\n    print(f\"{no}. {task}\")",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "1. Todo\n2. Done"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "코드 마지막에 한 줄을 추가하여 a - b의 절댓값을 소수 첫째 자리까지 반올림해 출력해보세요.",
      "prompt_en": "Add one line at the end to print abs(a - b) rounded to 1 decimal place.",
      "hint_ko": "abs(a - b)를 round(..., 1)로 감싸고 print()로 출력해보세요.",
      "hint_en": "Write print(round(abs(a - b), 1)) on the last line.",
      "templateCode": "a = 3.25\nb = 8.91\n§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "a = 3.25\nb = 8.91\nprint(round(abs(a - b), 1))",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "5.7"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 코드의 실행 결과를 예측해보세요.",
      "prompt_en": "Predict the output of the following code.",
      "hint_ko": "zip은 두 리스트 중 더 짧은 길이(2개)까지만 묶어 순회하며, abs(-10)은 10이 됩니다.",
      "hint_en": "zip stops at the shorter list length (2 pairs), and abs(-10) evaluates to 10.",
      "targetCode": "tags = [\"A\", \"B\", \"C\"]\npts = [-10, 25]\nfor t, p in zip(tags, pts):\n    print(t, abs(p))",
      "choices": [
        "A 10\nB 25",
        "A -10\nB 25",
        "A 10\nB 25\nC 0",
        "Error"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "A 10\nB 25"
        }
      ]
    }
  ]
};
