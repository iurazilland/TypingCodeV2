import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_101: PracticeRound = {
  "id": "py-basic-r101",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 101,
  "title_ko": "map() 일괄 변환과 map(int, input().split()) 실전 패턴",
  "title_en": "Batch Mapping with map() & map(int, input().split())",
  "description_ko": "시퀀스의 모든 요소에 함수를 일괄 적용하는 map()을 익히고, map(int, input().split()) 및 map(str, ...) 실전 패턴을 체화합니다.",
  "description_en": "Master batch conversion with map(), unpacking map(int, input().split()), and joining mapped strings.",
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
      "prompt_ko": "[블록 조립] 공백으로 구분된 한 줄의 입력을 일괄 정수 변환해 두 변수 a, b에 언패킹하고 두 수의 합을 출력해보세요.",
      "prompt_en": "[Block] Batch-convert a line of space-separated input into two integers a and b, then print their sum.",
      "hint_ko": "map()의 첫 번째 인자에는 int()가 아니라 괄호를 뺀 함수 이름 int만 전달합니다.",
      "hint_en": "Pass the function name int without parentheses as the first argument to map().",
      "targetCode": "a, b = map(int, input().split())\nprint(a + b)",
      "testCases": [
        {
          "id": 1,
          "input": "15 27",
          "expectedOutput": "42"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 한 줄에 입력된 두 문자열을 일괄 정수 변환해 x, y에 언패킹하도록 내장 함수를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the batch-mapping built-in function to convert the split strings into integers x and y.",
      "hint_ko": "시퀀스 각 원소에 함수를 일괄 대응시키는 내장 함수를 적으세요.",
      "hint_en": "Type the built-in function that applies a function to every item of an iterable.",
      "targetCode": "x, y = map(int, input().split())\nprint(x * y)",
      "templateCode": "x, y = §§§§(int, input().split())\nprint(x * y)",
      "testCases": [
        {
          "id": 1,
          "input": "6 7",
          "expectedOutput": "42"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 공백으로 구분된 한 줄의 여러 숫자 입력을 일괄 변환해 정수 리스트 nums로 만들고 합계와 최댓값을 출력해보세요.",
      "prompt_en": "[Block] Batch-convert a line of space-separated numbers into an integer list nums and print its sum and maximum.",
      "hint_ko": "map() 결과를 list()로 감싸면 여러 번 재사용하거나 인덱싱·집계할 수 있는 정수 리스트가 됩니다.",
      "hint_en": "Wrapping map(...) in list() materializes the converted integers into a reusable list.",
      "targetCode": "nums = list(map(int, input().split()))\nprint(sum(nums), max(nums))",
      "testCases": [
        {
          "id": 1,
          "input": "10 25 15",
          "expectedOutput": "50 25"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] map()이 반환한 결과를 리스트로 만들어 변수 nums에 저장하도록 바깥쪽 변환 함수를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the outer constructor to materialize the mapped integers into an indexable sequence.",
      "hint_ko": "반복 가능한 객체를 리스트 자료구조로 바꾸는 내장 함수를 적으세요.",
      "hint_en": "Enter the built-in constructor that creates a list from an iterable.",
      "targetCode": "nums = list(map(int, input().split()))\nprint(len(nums), min(nums))",
      "templateCode": "nums = §§§§§(map(int, input().split()))\nprint(len(nums), min(nums))",
      "testCases": [
        {
          "id": 1,
          "input": "9 3 7",
          "expectedOutput": "3 3"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 정수 리스트 codes의 모든 요소를 문자열로 일괄 변환한 뒤 하이픈(\"-\")으로 이어 붙여 출력해보세요.",
      "prompt_en": "[Block] Batch-convert the integers in codes to strings and join them with a hyphen (\"-\").",
      "hint_ko": "\".join()\" 안에 map(str, codes)를 바로 전달하면 리스트 컴프리헨션 없이도 깔끔하게 결합됩니다.",
      "hint_en": "Passing map(str, codes) directly to \"-\".join() concatenates the numbers cleanly as strings.",
      "targetCode": "codes = [10, 25, 30]\ntext = \"-\".join(map(str, codes))\nprint(text)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "10-25-30"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 정수 리스트 nums를 슬래시(\"/\")로 결합할 수 있도록 map()의 첫 번째 인자에 형변환 함수를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the type conversion function in map() so the integers can be joined with \"/\".",
      "hint_ko": "각 정수를 문자열로 바꾸는 형변환 함수 이름을 괄호 없이 적으세요.",
      "hint_en": "Write the string conversion function name without parentheses.",
      "targetCode": "nums = [1, 2, 3]\nprint(\"/\".join(map(str, nums)))",
      "templateCode": "nums = [1, 2, 3]\nprint(\"/\".join(map(§§§§, nums)))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "1/2/3"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 리스트 nums의 각 원소에 절댓값 변환과 2배 변환 함수를 차례대로 일괄 적용한 리스트를 출력해보세요.",
      "prompt_en": "[Block] Batch-apply the absolute value function and the custom double function to nums and print the resulting list.",
      "hint_ko": "내장 함수뿐만 아니라 def로 직접 만든 함수 이름도 map()의 첫 번째 인자로 넘길 수 있습니다.",
      "hint_en": "You can pass any custom def function name as the first argument to map(), just like built-ins.",
      "targetCode": "def double(x):\n    return x * 2\n\nnums = [-3, 5, -8]\nprint(list(map(double, list(map(abs, nums)))))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[6, 10, 16]"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 리스트의 모든 음수·양수 원소에 절댓값 함수를 일괄 적용하도록 map()의 첫 인자를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the first argument of map() to take the absolute value of every item in raw.",
      "hint_ko": "절댓값을 구하는 내장 함수 이름을 괄호 없이 첫 인자로 적으세요.",
      "hint_en": "Write the absolute value function name without parentheses.",
      "targetCode": "raw = [-10, 20, -30]\nprint(list(map(abs, raw)))",
      "templateCode": "raw = [-10, 20, -30]\nprint(list(map(§§§§, raw)))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 20, 30]"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 쉼표로 구분된 입력을 정수 리스트로 일괄 변환해 오름차순으로 출력하도록 내장 함수를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the batch-mapping function to convert comma-separated inputs into an integer list and print them in ascending order.",
      "hint_ko": "분리된 문자열들에 int 함수를 일괄 적용하는 내장 함수(map)를 채우세요.",
      "hint_en": "Supply the batch-mapping function, the integer type, and the string-joining method.",
      "targetCode": "nums = list(map(int, input().split(\",\")))\ns = sorted(nums)\nprint(\" \".join(map(str, s)))",
      "templateCode": "nums = list(§§§§(int, input().split(\",\")))\ns = sorted(nums)\nprint(\" \".join(map(str, s)))",
      "testCases": [
        {
          "id": 1,
          "input": "30,10,20",
          "expectedOutput": "10 20 30"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 공백으로 구분된 두 숫자 입력이 문자열 연결이 아니라 정수 덧셈으로 계산되도록 코드의 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Find and fix the bug so the two space-separated numbers are added as integers instead of concatenated as strings.",
      "hint_ko": "문자열이 이어붙여지지 않고 정수 덧셈이 되도록 map(int, input().split())으로 수정해야 합니다.",
      "hint_en": "Pass the function object int without parentheses as the first argument to map().",
      "templateCode": "a, b = map(str, input().split())\nprint(a + b)",
      "targetCode": "a, b = map(int, input().split())\nprint(a + b)",
      "testCases": [
        {
          "id": 1,
          "input": "10 20",
          "expectedOutput": "30"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 정수 리스트를 하이픈(-)으로 연결하려다 변환 함수가 잘못 지정되어 오류가 나는 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the conversion type inside map() so \"-\".join(...) receives strings instead of integers.",
      "hint_ko": "문자열 결합 메서드에 전달하려면 정수가 아니라 문자열 형변환 함수를 지정해야 합니다.",
      "hint_en": "Change the mapped function from int to str so .join() receives strings.",
      "templateCode": "codes = [10, 20, 30]\nprint(\"-\".join(map(int, codes)))",
      "targetCode": "codes = [10, 20, 30]\nprint(\"-\".join(map(str, codes)))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "10-20-30"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 공백으로 구분된 한 줄의 입력을 두 정수로 일괄 변환해 변수 a와 b에 나누어 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Batch-convert a line of space-separated input into two integers and unpack them into a and b.",
      "hint_ko": "a, b = map(int, input().split()) 형태로 작성하세요.",
      "hint_en": "Write a, b = map(int, input().split()) on the masked line.",
      "targetCode": "a, b = map(int, input().split())\nprint(a // b, a % b)",
      "templateCode": "§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(a // b, a % b)",
      "testCases": [
        {
          "id": 1,
          "input": "17 5",
          "expectedOutput": "3 2"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 공백으로 구분된 한 줄의 숫자 입력을 정수 리스트로 일괄 변환해 변수 nums에 저장하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Batch-convert a line of space-separated integer inputs into a list and store it in nums.",
      "hint_ko": "nums = list(map(int, input().split())) 형태로 작성하세요.",
      "hint_en": "Write nums = list(map(int, input().split())) on the masked line.",
      "targetCode": "nums = list(map(int, input().split()))\nprint(sum(nums))",
      "templateCode": "§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(sum(nums))",
      "testCases": [
        {
          "id": 1,
          "input": "10 20 30",
          "expectedOutput": "60"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 문자열 분리와 map(int, ...), map(str, ...)가 결합된 다음 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following code using map(int, ...) and map(str, ...).",
      "hint_ko": "세 정수를 언패킹한 뒤 각각에 5를 더한 리스트를 만들고 콜론(\":\")으로 이어 붙입니다.",
      "hint_en": "Unpack the 3 integers, add 5 to each in the comprehension, and join them as strings with colons.",
      "targetCode": "raw = \"10 20 30\"\na, b, c = map(int, raw.split())\nres = [a + 5, b + 5, c + 5]\nprint(\":\".join(map(str, res)))",
      "choices": [
        "15:25:35",
        "10:20:30",
        "15 25 35",
        "105:205:305"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "15:25:35"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 사용자 정의 함수와 map(abs, ...)를 중첩 적용한 코드의 출력 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the code applying map() with abs and a custom function.",
      "hint_ko": "먼저 map(abs, nums)로 절댓값 [1, 2, 3]을 만든 뒤, 각 원소에 10을 더하는 함수를 일괄 적용합니다.",
      "hint_en": "map(abs, nums) produces [1, 2, 3], and map(add10, ...) adds 10 to each element.",
      "targetCode": "def add10(n):\n    return n + 10\n\nnums = [-1, 2, -3]\nmags = list(map(abs, nums))\nres = list(map(add10, mags))\nprint(res)",
      "choices": [
        "[11, 12, 13]",
        "[9, 12, 7]",
        "[1, 2, 3]",
        "[10, 20, 30]"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[11, 12, 13]"
        }
      ]
    }
  ]
};
