import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_104: PracticeRound = {
  "id": "py-basic-r104",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 104,
  "title_ko": "논리 일괄 검사(all(), any())와 자료형 확인(isinstance())",
  "title_en": "Logical Quantifiers (all(), any()) & isinstance()",
  "description_ko": "모든 요소가 참인지 확인하는 all(), 하나라도 참인지 확인하는 any(), 그리고 객체의 자료형을 판별하는 isinstance()를 익힙니다.",
  "description_en": "Check universal and existential truth with all() and any(), and verify data types safely with isinstance().",
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
    "sorted",
    "math",
    "map",
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
      "prompt_ko": "[블록 조립] 리스트 컴프리헨션과 전체 참 검사 내장 함수를 결합해 모든 점수가 60점 이상인지 판별해 출력해보세요.",
      "prompt_en": "[Block] Use the universal truth-checking built-in function with a list comprehension to check whether every score in scores is at least 60.",
      "hint_ko": "all()은 리스트 안의 모든 불리언 값이 True일 때만 True를 반환합니다.",
      "hint_en": "all() returns True only if every element in the iterable evaluates to True.",
      "targetCode": "scores = [75, 80, 92]\npassed = all([s >= 60 for s in scores])\nprint(passed)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 리스트의 모든 숫자가 양수인지 일괄 검사해 불리언을 출력하도록 내장 함수를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the universal quantifier built-in to check if every number in nums is positive.",
      "hint_ko": "'모두' 참인지 확인하는 내장 함수를 입력하세요.",
      "hint_en": "Type the built-in function that checks whether every item is True.",
      "targetCode": "nums = [10, 5, 8]\nprint(all([n > 0 for n in nums]))",
      "templateCode": "nums = [10, 5, 8]\nprint(§§§§([n > 0 for n in nums]))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 부분 참 검사 내장 함수를 사용해 점수 중에 90점 이상인 과목이 하나라도 있는지 판별해 출력해보세요.",
      "prompt_en": "[Block] Use the existential truth-checking built-in function to check whether at least one score in scores is 90 or above.",
      "hint_ko": "any()는 요소 중 단 하나라도 True가 있으면 즉시 True를 반환합니다.",
      "hint_en": "any() returns True as soon as at least one element evaluates to True.",
      "targetCode": "scores = [55, 95, 70]\nhas_ace = any([s >= 90 for s in scores])\nprint(has_ace)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 입력된 비밀번호 문자열에 숫자 글자가 하나라도 포함되어 있는지 확인하도록 내장 함수를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the existential quantifier built-in to test if at least one character in pw is a digit.",
      "hint_ko": "'어느 하나라도' 참인지 확인하는 내장 함수를 적으세요.",
      "hint_en": "Enter the built-in function that checks if at least one item is True.",
      "targetCode": "pw = input().strip()\nprint(any([c.isdigit() for c in pw]))",
      "templateCode": "pw = input().strip()\nprint(§§§§([c.isdigit() for c in pw]))",
      "testCases": [
        {
          "id": 1,
          "input": "py2026",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 자료형 확인 내장 함수를 사용해 변수 x가 정수인지, y가 문자열인지, x가 리스트인지 차례대로 판별해 출력해보세요.",
      "prompt_en": "[Block] Use the built-in type-checking function to check whether x is an integer, y is a string, and x is a list.",
      "hint_ko": "isinstance(값, 자료형)은 첫 번째 인자 값이 두 번째 인자 타입에 속하면 True를 반환합니다.",
      "hint_en": "isinstance(obj, type) returns True when obj is an instance of the specified type.",
      "targetCode": "x = 42\ny = \"py\"\nprint(isinstance(x, int), isinstance(y, str), isinstance(x, list))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True True False"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 변수 val이 정수 자료형인지 판별해 출력하도록 타입 확인 내장 함수를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the built-in type-checking function to verify whether val is an integer.",
      "hint_ko": "객체가 특정 타입의 인스턴스인지 묻는 내장 함수를 입력하세요.",
      "hint_en": "Type the built-in function that checks if an object is an instance of a type.",
      "targetCode": "val = 100\nprint(isinstance(val, int))",
      "templateCode": "val = 100\nprint(§§§§§§§§§§§(val, int))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 여러 자료형이 섞인 리스트 items에서 정수 자료형인 원소만 골라내어 그 합계를 출력해보세요.",
      "prompt_en": "[Block] Filter only the integer elements from the mixed list items and print their sum.",
      "hint_ko": "조건부 리스트 컴프리헨션에서 if isinstance(x, int)로 문자열과 None을 걸러냅니다.",
      "hint_en": "Use if isinstance(x, int) in the comprehension to exclude strings and None before summing.",
      "targetCode": "items = [10, \"hi\", 20, None, 30]\nnums = [x for x in items if isinstance(x, int)]\nprint(sum(nums))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "60"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 혼합 리스트에서 문자열 원소만 골라내는 리스트 컴프리헨션의 두 번째 타입 인자를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the second argument of isinstance() to filter only string elements from mixed.",
      "hint_ko": "문자열 자료형을 뜻하는 타입 이름을 적으세요.",
      "hint_en": "Write the type name for strings.",
      "targetCode": "mixed = [\"py\", 10, \"ai\", 20]\nwords = [x for x in mixed if isinstance(x, str)]\nprint(\"-\".join(words))",
      "templateCode": "mixed = [\"py\", 10, \"ai\", 20]\nwords = [x for x in mixed if isinstance(x, §§§§)]\nprint(\"-\".join(words))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "py-ai"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 혼합 리스트 data에서 정수만 골라낸 뒤 모든 숫자가 양수인지와 50 이상인 숫자가 있는지 판별하도록 빈칸 2곳을 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the two blanks to filter integers from data and check whether all of them are positive and any is at least 50.",
      "hint_ko": "자료형 확인 함수(isinstance)와 전체 참 검사 함수(all)를 순서대로 채워보세요.",
      "hint_en": "Supply the type-checking function, the universal quantifier, and the existential quantifier.",
      "targetCode": "data = [10, \"skip\", 60, 25]\nnums = [x for x in data if isinstance(x, int)]\nprint(all([n > 0 for n in nums]), any([n >= 50 for n in nums]))",
      "templateCode": "data = [10, \"skip\", 60, 25]\nnums = [x for x in data if §§§§§§§§§§§(x, int)]\nprint(§§§§([n > 0 for n in nums]), any([n >= 50 for n in nums]))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True True"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 리스트 nums에 음수가 하나라도 포함되어 있는지 판별하도록 잘못된 논리 검사 함수를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the logical quantifier so has_neg checks whether at least one number in nums is negative.",
      "hint_ko": "단 하나라도 조건을 만족하는지 확인할 때는 전체 검사가 아니라 부분 검사 함수를 써야 합니다.",
      "hint_en": "Replace the universal quantifier with the existential quantifier to check if at least one item is negative.",
      "templateCode": "nums = [10, -3, 20]\nhas_neg = all([n < 0 for n in nums])\nprint(has_neg)",
      "targetCode": "nums = [10, -3, 20]\nhas_neg = any([n < 0 for n in nums])\nprint(has_neg)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 변수 x가 정수 자료형인지 올바르게 검사하도록 타입 확인 함수 호출의 인자 순서 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Find and fix the argument order bug in the type-checking call to check whether x is an integer.",
      "hint_ko": "첫 번째 인자에 검사할 값(x)을, 두 번째 인자에 자료형(int)을 넣어야 합니다.",
      "hint_en": "Pass the value x first and the type int second: isinstance(x, int).",
      "templateCode": "x = 42\nprint(isinstance(int, x))",
      "targetCode": "x = 42\nprint(isinstance(x, int))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 리스트 scores의 모든 점수가 60점 이상인지 일괄 검사한 불리언 결과를 변수 ok에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Check whether every score in scores is at least 60 and store the boolean result in ok.",
      "hint_ko": "ok = all([s >= 60 for s in scores]) 형태로 작성하세요.",
      "hint_en": "Write ok = all([s >= 60 for s in scores]) on the masked line.",
      "targetCode": "scores = [70, 85, 60]\nok = all([s >= 60 for s in scores])\nprint(ok)",
      "templateCode": "scores = [70, 85, 60]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(ok)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "True"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 혼합 리스트 data에서 정수 자료형인 요소만 골라 리스트 변수 nums에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Filter only the integer elements from data using a list comprehension and store them in nums.",
      "hint_ko": "nums = [x for x in data if isinstance(x, int)] 형태로 작성하세요.",
      "hint_en": "Write nums = [x for x in data if isinstance(x, int)] on the masked line.",
      "targetCode": "data = [3, \"a\", 7, \"b\"]\nnums = [x for x in data if isinstance(x, int)]\nprint(nums)",
      "templateCode": "data = [3, \"a\", 7, \"b\"]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[3, 7]"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 숫자 리스트 [0, 1, 2]와 빈 문자열이 포함된 리스트에 대한 all(), any() 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of all() and any() on [0, 1, 2] and [\"py\", \"\"].",
      "hint_ko": "파이썬에서 숫자 0과 빈 문자열 \"\"은 거짓(Falsy)으로 평가되므로 all()은 False, any()는 다른 참 원소 덕분에 True가 됩니다.",
      "hint_en": "Because 0 and \"\" are falsy while 1, 2, and \"py\" are truthy, all() returns False and any() returns True.",
      "targetCode": "nums = [0, 1, 2]\nwords = [\"py\", \"\"]\nprint(all(nums), any(nums), all(words), any(words))",
      "choices": [
        "False True False True",
        "True True False True",
        "False True True True",
        "False False False False"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "False True False True"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] isinstance() 필터링과 all(), any() 조건 검사가 결합된 다음 코드의 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the code combining isinstance(), all(), and any().",
      "hint_ko": "문자열을 제외한 정수 [4, -2, 8]에서 모두 양수인지(False)와 음수가 하나라도 있는지(True)를 확인하세요.",
      "hint_en": "Filter integers [4, -2, 8], sum them (10), check if all are > 0 (False), and if any is < 0 (True).",
      "targetCode": "raw = [4, \"err\", -2, 8]\nnums = [x for x in raw if isinstance(x, int)]\nprint(sum(nums), all([n > 0 for n in nums]), any([n < 0 for n in nums]))",
      "choices": [
        "10 False True",
        "10 True False",
        "12 False True",
        "10 True True"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "10 False True"
        }
      ]
    }
  ]
};
