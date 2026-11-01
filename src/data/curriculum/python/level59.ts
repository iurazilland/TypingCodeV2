import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 59레벨: 실용 내장 함수 2 — 일괄 변환과 논리 검사 (13단계 표준 구성)
// - [1,3,5,7,9단계] 블록 코딩 개념 도입 (map 일괄 형변환, all, any)
// - [2,4,6,8,10단계] 빈칸 채우기 타이핑 실습 (fill_blank)
// - [11단계] 버그 수정 (fix_bug)
// - [12단계] 예제 아래 한 줄 코드 추가 작성 (one_line)
// - [13단계] 출력 결과 예측 4지선다 퀴즈 (predict_output)
// ============================================================================
export const PYTHON_LEVEL_59: PracticeRound = {
  "id": "py-basic-r59",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 59,
  "title_ko": "59레벨: 실용 내장 함수 2 — 일괄 변환과 논리 검사",
  "title_en": "Level 59: Built-ins 2: map, all & any",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "type",
    "method",
    "map",
    "iter",
    "math"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "문자열 리스트 texts = [\"10\", \"20\", \"30\"]을 list(map(int, texts))로 정수 리스트로 변환해 출력해보세요.",
      "prompt_en": "Convert texts = [\"10\", \"20\", \"30\"] to a list of integers with list(map(int, texts)) and print it.",
      "hint_ko": "map(int, texts)는 각 문자열에 int 함수를 일괄 적용하며, list()로 감싸면 리스트가 됩니다.",
      "hint_en": "Assign nums = list(map(int, texts)) and print(nums).",
      "targetCode": "texts = [\"10\", \"20\", \"30\"]\nnums = list(map(int, texts))\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "[10, 20, 30]"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 raw = [\"1\", \"2\", \"3\"]을 정수 리스트 nums로 변환하고 리스트와 합계를 출력해보세요.",
      "prompt_en": "Fill in the blanks to convert raw into an integer list nums and print nums and sum(nums).",
      "hint_ko": "일괄 변환에는 map(int, raw)를 사용하고, 숫자 합계는 sum(nums)로 구합니다.",
      "hint_en": "Enter map(int, raw) on line 2 and sum(nums) on line 3.",
      "templateCode": "raw = [\"1\", \"2\", \"3\"]\nnums = list(§§§§§§§§§§§§§)\nprint(nums, §§§§§§§§§)",
      "targetCode": "raw = [\"1\", \"2\", \"3\"]\nnums = list(map(int, raw))\nprint(nums, sum(nums))",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "[1, 2, 3] 6"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "공백으로 입력된 두 정수를 a, b = map(int, input().split())으로 받아 a + b를 출력해보세요.",
      "prompt_en": "Read two space-separated integers with a, b = map(int, input().split()) and print a + b.",
      "hint_ko": "input().split()으로 나눈 문자열 조각들을 map(int, ...)에 넣으면 a, b에 정수로 바로 언패킹됩니다.",
      "hint_en": "Unpack map(int, input().split()) into a, b and print(a + b).",
      "targetCode": "a, b = map(int, input().split())\nprint(a + b)",
      "testCases": [
        {
          "id": 1,
          "input": "15 25",
          "expectedOutput": "40"
        },
        {
          "id": 2,
          "input": "7 8",
          "expectedOutput": "15"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 공백으로 구분된 세 정수 x, y, z를 한 번에 입력받고 세 수의 곱을 출력해보세요.",
      "prompt_en": "Fill in the blanks to read three space-separated integers x, y, z and print their product.",
      "hint_ko": "map의 첫 인자로 int, 두 번째 인자로 input().split()을 전달합니다.",
      "hint_en": "Write map(int, input().split()) on line 1.",
      "templateCode": "x, y, z = §§§(§§§, input().§§§§§§§)\nprint(x * y * z)",
      "targetCode": "x, y, z = map(int, input().split())\nprint(x * y * z)",
      "testCases": [
        {
          "id": 1,
          "input": "2 3 4",
          "expectedOutput": "24"
        },
        {
          "id": 2,
          "input": "5 2 6",
          "expectedOutput": "60"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "한 줄에 입력된 여러 정수를 nums = list(map(int, input().split()))으로 저장하고 sum(nums)를 출력해보세요.",
      "prompt_en": "Read a line of integers into nums = list(map(int, input().split())) and print sum(nums).",
      "hint_ko": "개수가 정해지지 않은 여러 정수를 한 줄로 입력받을 때는 list(map(int, input().split())) 패턴을 씁니다.",
      "hint_en": "Wrap map(int, input().split()) with list() and print sum(nums).",
      "targetCode": "nums = list(map(int, input().split()))\nprint(sum(nums))",
      "testCases": [
        {
          "id": 1,
          "input": "10 20 30 40",
          "expectedOutput": "100"
        },
        {
          "id": 2,
          "input": "5 15 25",
          "expectedOutput": "45"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 공백으로 입력된 점수들을 정수 리스트 scores로 만들고 최댓값을 출력해보세요.",
      "prompt_en": "Fill in the blanks to parse space-separated integers into scores and print max(scores).",
      "hint_ko": "map 결과를 리스트로 감싸는 list(...)와 최댓값 함수 max(scores)를 채워주세요.",
      "hint_en": "Enter list(map(int, input().split())) and max(scores).",
      "templateCode": "scores = §§§§§§§§§§§§§ input().split()))\nprint(§§§§§§§§§§§)",
      "targetCode": "scores = list(map(int, input().split()))\nprint(max(scores))",
      "testCases": [
        {
          "id": 1,
          "input": "72 95 88 60",
          "expectedOutput": "95"
        },
        {
          "id": 2,
          "input": "10 40 25",
          "expectedOutput": "40"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "checks = [True, True, False]에서 모든 요소가 참인지 검사하는 all(checks)의 결과를 출력해보세요.",
      "prompt_en": "Check whether every item in checks = [True, True, False] is truthy using all(checks).",
      "hint_ko": "all() 함수는 리스트 안의 요소가 단 하나도 빠짐없이 모두 참일 때만 True를 반환합니다.",
      "hint_en": "Pass checks into all() inside print().",
      "targetCode": "checks = [True, True, False]\nprint(all(checks))",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "False"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 내장 함수를 채워 리스트 a와 리스트 b의 모든 요소가 참(0이 아님)인지 각각 출력해보세요.",
      "prompt_en": "Fill in the built-in function to test if all elements in a and in b are truthy.",
      "hint_ko": "숫자에서는 0이 거짓(False), 0이 아닌 수는 참(True)으로 평가되며 모두 참인지 볼 때는 all을 씁니다.",
      "hint_en": "Use all for both all(a) and all(b).",
      "templateCode": "a = [True, True, True]\nb = [1, 2, 0]\nprint(§§§(a), §§§(b))",
      "targetCode": "a = [True, True, True]\nb = [1, 2, 0]\nprint(all(a), all(b))",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "True False"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "flags = [False, True, False]에서 참인 요소가 하나라도 있는지 any(flags)로 확인해 출력해보세요.",
      "prompt_en": "Check whether at least one item in flags = [False, True, False] is truthy using any(flags).",
      "hint_ko": "any() 함수는 요소 중 하나라도 참이 있으면 True를, 전부 거짓이면 False를 반환합니다.",
      "hint_en": "Pass flags into any() inside print().",
      "targetCode": "flags = [False, True, False]\nprint(any(flags))",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 내장 함수를 채워 리스트 x와 리스트 y에 참으로 평가되는 값이 하나라도 있는지 각각 출력해보세요.",
      "prompt_en": "Fill in the built-in function to check whether any element in x and in y is truthy.",
      "hint_ko": "빈 문자열 \"\"과 0은 거짓이며, 참인 값이 하나라도 존재하는지 검사하는 함수는 any입니다.",
      "hint_en": "Use any for both any(x) and any(y).",
      "templateCode": "x = [0, 0, 5]\ny = [\"\", \"\"]\nprint(§§§(x), §§§(y))",
      "targetCode": "x = [0, 0, 5]\ny = [\"\", \"\"]\nprint(any(x), any(y))",
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "True False"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "공백으로 입력된 두 정수를 map으로 변환해 합을 출력하려 하지만 호출 오류가 납니다. 잘못된 부분을 고쳐보세요.",
      "prompt_en": "Fix the map() call error so two space-separated integers are summed and printed.",
      "hint_ko": "map의 첫 번째 인자에는 함수를 미리 실행한 형태가 아니라 괄호를 뺀 변환 함수 이름만 적어야 합니다.",
      "hint_en": "Pass the function name without parentheses as the first argument to map().",
      "templateCode": "a, b = map(int(), input().split())\nprint(a + b)",
      "targetCode": "a, b = map(int, input().split())\nprint(a + b)",
      "testCases": [
        {
          "id": 1,
          "input": "12 34",
          "expectedOutput": "46"
        },
        {
          "id": 2,
          "input": "5 9",
          "expectedOutput": "14"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "코드 마지막에 한 줄을 추가하여 입력된 정수 리스트 flags에 0이 하나도 없는지(모두 참인지) 출력해보세요.",
      "prompt_en": "Add one line at the end to print whether all integers in flags are non-zero (truthy).",
      "hint_ko": "모든 요소가 참인지 판별하는 내장 함수를 print() 안에 넣어 호출하세요.",
      "hint_en": "Write print(all(flags)) on the last line.",
      "templateCode": "flags = list(map(int, input().split()))\n§§§§§§§§§§§§§§§§§",
      "targetCode": "flags = list(map(int, input().split()))\nprint(all(flags))",
      "testCases": [
        {
          "id": 1,
          "input": "1 2 3",
          "expectedOutput": "True"
        },
        {
          "id": 2,
          "input": "1 0 3",
          "expectedOutput": "False"
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
      "hint_ko": "변환된 [3, 0, -2]에서 0은 거짓, 3과 -2(음수 포함 0이 아닌 정수)는 참으로 평가됩니다.",
      "hint_en": "In [3, 0, -2], 0 is falsy while 3 and -2 are truthy, so check all() and any().",
      "targetCode": "raw = [\"3\", \"0\", \"-2\"]\nnums = list(map(int, raw))\nprint(all(nums), any(nums))",
      "choices": [
        "True True",
        "False True",
        "True False",
        "False False"
      ],
      "correctChoiceIndex": 1,
      "testCases": [
        {
          "id": 1,
          "expectedOutput": "False True"
        }
      ]
    }
  ]
};
