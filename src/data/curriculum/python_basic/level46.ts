import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_46: PracticeRound = {
  "id": "py-basic-r46",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 46,
  "title_ko": "반복문과 .append()로 조건에 맞는 새 리스트 만들기",
  "title_en": "Building Filtered Lists with Loops & .append()",
  "description_ko": "빈 리스트([])를 만들고 반복문과 조건문, .append()를 결합해 원하는 값만 모은 새 리스트를 생성하는 패턴을 익힙니다.",
  "description_en": "Initialize an empty list ([]) and combine loops, conditionals, and .append() to build transformed or filtered lists.",
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
    "iter",
    "method"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 반복문으로 1부터 4까지의 숫자에 10을 곱한 값들을 새 리스트에 모아 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the code that collects 10 times each number from 1 to 4 into a new list and prints it.",
      "hint_ko": "반복문 바깥에서 빈 리스트를 만들고, 루프 안에서 계산된 값을 하나씩 .append()로 추가합니다.",
      "hint_en": "Create the empty list before the loop and append each computed value inside the loop.",
      "targetCode": "res = []\nfor i in range(1, 5):\n    res.append(i * 10)\nprint(res)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 20, 30, 40]"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 1부터 3까지의 숫자를 2배씩 계산해 doubles 리스트에 차례로 담아 출력해보세요.",
      "prompt_en": "[Fill Blank] Complete the method call to store twice each number from 1 to 3 in doubles.",
      "hint_ko": "리스트 끝에 계산된 값을 추가하는 메서드를 호출하세요.",
      "hint_en": "Call the list method that adds an element to the end of doubles.",
      "templateCode": "doubles = []\nfor i in range(1, 4):\n    doubles.§§§§§§§(i * 2)\nprint(doubles)",
      "targetCode": "doubles = []\nfor i in range(1, 4):\n    doubles.append(i * 2)\nprint(doubles)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[2, 4, 6]"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 기존 리스트를 순회하며 각 요소를 제곱한 값을 새 리스트에 담아 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the code that iterates over nums and collects the square of each element into sq.",
      "hint_ko": "거듭제곱 연산자(**)로 제곱한 결과를 새 리스트에 차례로 추가합니다.",
      "hint_en": "Compute x ** 2 on each iteration and append it to the new list.",
      "targetCode": "nums = [2, 3, 4]\nsq = []\nfor x in nums:\n    sq.append(x ** 2)\nprint(sq)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[4, 9, 16]"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 각 가격에 100을 더한 값들을 모을 빈 리스트 taxed를 초기화해 출력해보세요.",
      "prompt_en": "[Fill Blank] Initialize taxed as an empty list so the updated prices can be collected and printed.",
      "hint_ko": "요소를 하나씩 담기 전 비어 있는 리스트를 나타내는 기호를 적으세요.",
      "hint_en": "Write the literal for an empty list.",
      "templateCode": "prices = [500, 900]\ntaxed = §§§\nfor p in prices:\n    taxed.append(p + 100)\nprint(taxed)",
      "targetCode": "prices = [500, 900]\ntaxed = []\nfor p in prices:\n    taxed.append(p + 100)\nprint(taxed)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[600, 1000]"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 리스트를 순회하며 짝수만 새 리스트에 골라 담아 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the code that filters even numbers from nums into a new list and prints it.",
      "hint_ko": "2로 나눈 나머지가 0인 숫자만 조건문을 통과해 evens에 추가됩니다.",
      "hint_en": "Only numbers with remainder 0 when divided by 2 are appended to evens.",
      "targetCode": "nums = [3, 8, 5, 12, 7]\nevens = []\nfor x in nums:\n    if x % 2 == 0:\n        evens.append(x)\nprint(evens)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[8, 12]"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 점수 리스트에서 80점 이상인 점수만 passed 리스트에 골라 담아 출력해보세요.",
      "prompt_en": "[Fill Blank] Complete the comparison operator so scores of 80 or above are collected into passed.",
      "hint_ko": "왼쪽 값이 오른쪽 기준값 이상인지 판별하는 비교 연산자를 적으세요.",
      "hint_en": "Write the greater-than-or-equal-to operator.",
      "templateCode": "scores = [65, 85, 90, 72]\npassed = []\nfor s in scores:\n    if s §§§ 80:\n        passed.append(s)\nprint(passed)",
      "targetCode": "scores = [65, 85, 90, 72]\npassed = []\nfor s in scores:\n    if s >= 80:\n        passed.append(s)\nprint(passed)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[85, 90]"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 3번 반복하며 정수를 입력받아 리스트에 차례로 담아 출력하는 블록을 조립해보세요.",
      "prompt_en": "[Block] Assemble the code that reads three integers in a loop, collects them into nums, and prints the list.",
      "hint_ko": "반복문이 3번 돌면서 매 줄 입력된 정수가 리스트 끝에 차례로 저장됩니다.",
      "hint_en": "The loop runs 3 times, converting each input line to an int and appending it.",
      "targetCode": "nums = []\nfor i in range(3):\n    n = int(input())\n    nums.append(n)\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "10\n20\n30",
          "expectedOutput": "[10, 20, 30]"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 3번 반복하며 입력받은 정수 중 양수만 pos 리스트에 담아 출력해보세요.",
      "prompt_en": "[Fill Blank] Complete the loop range to read three integers and collect only the positive ones.",
      "hint_ko": "3회 반복을 만드는 범위 생성 함수를 채우세요.",
      "hint_en": "Fill in the function call that generates a sequence of 3 iterations.",
      "templateCode": "pos = []\nfor i in §§§§§§§§§:\n    n = int(input())\n    if n > 0:\n        pos.append(n)\nprint(pos)",
      "targetCode": "pos = []\nfor i in range(3):\n    n = int(input())\n    if n > 0:\n        pos.append(n)\nprint(pos)",
      "testCases": [
        {
          "id": 1,
          "input": "10\n-5\n20",
          "expectedOutput": "[10, 20]"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 리스트에서 3의 배수만 골라 10을 더한 값들을 새 리스트에 모아 출력하도록 코드를 완성해보세요.",
      "prompt_en": "[Fill Blank] Complete the code to collect multiples of 3 plus 10 from nums into a new list.",
      "hint_ko": "빈 리스트 기호([])와 리스트 요소 추가 메서드(append)를 순서대로 채우세요.",
      "hint_en": "Fill in the empty list literal, iteration keyword, and append method in order.",
      "templateCode": "nums = [3, 5, 6, 8, 9]\nres = §§§\nfor x in nums:\n    if x % 3 == 0:\n        res.§§§§§§§(x + 10)\nprint(res)",
      "targetCode": "nums = [3, 5, 6, 8, 9]\nres = []\nfor x in nums:\n    if x % 3 == 0:\n        res.append(x + 10)\nprint(res)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[13, 16, 19]"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 각 숫자에 10을 곱한 값들을 새 리스트 res에 차례로 모아 출력하도록 버그를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the bug inside the loop so 10 times each number is collected into res.",
      "hint_ko": "리스트 맨 끝에 계산된 값을 하나씩 추가할 때는 append 메서드를 사용해야 합니다.",
      "hint_en": "Use the list append method instead of reassigning res = [x * 10] each turn.",
      "templateCode": "nums = [1, 2, 3]\nres = []\nfor x in nums:\n    res.insert(x * 10)\nprint(res)",
      "targetCode": "nums = [1, 2, 3]\nres = []\nfor x in nums:\n    res.append(x * 10)\nprint(res)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 20, 30]"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 리스트 nums에서 짝수만 골라 새 리스트에 담아 출력하도록 코드의 버그를 수정해보세요.",
      "prompt_en": "[Fix Bug] Fix the bugs so even numbers from nums are collected into evens and printed.",
      "hint_ko": "짝수는 2로 나눈 나머지가 0이며, 리스트 끝에 추가할 때는 append 메서드를 사용합니다.",
      "hint_en": "Check for remainder 0 when dividing by 2 and append to evens instead of nums.",
      "templateCode": "nums = [2, 5, 8, 9]\nevens = []\nfor x in nums:\n    if x % 2 == 1:\n        evens.insert(x)\nprint(evens)",
      "targetCode": "nums = [2, 5, 8, 9]\nevens = []\nfor x in nums:\n    if x % 2 == 0:\n        evens.append(x)\nprint(evens)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[2, 8]"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 조건을 만족하는 양수를 2배로 계산해 결과 리스트의 끝에 추가하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the indented line that doubles the positive number and adds it to clean.",
      "hint_ko": "들여쓰기 8칸 뒤에 clean 리스트의 추가 메서드로 x * 2를 전달하세요.",
      "hint_en": "Indent 8 spaces and call the append method on clean with x * 2.",
      "templateCode": "raw = [5, -2, 8, 0]\nclean = []\nfor x in raw:\n    if x > 0:\n        §§§§§§§§§§§§§§§§§§§§\nprint(clean)",
      "targetCode": "raw = [5, -2, 8, 0]\nclean = []\nfor x in raw:\n    if x > 0:\n        clean.append(x * 2)\nprint(clean)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 16]"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 반복문 안에서 입력값을 정수로 변환해 리스트의 끝에 바로 추가하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Complete the indented line that reads an integer from input and adds it to the end of nums.",
      "hint_ko": "nums의 추가 메서드 괄호 안에 정수 입력 변환식을 넣어 작성하세요.",
      "hint_en": "Pass int(input()) directly into the append method of nums.",
      "templateCode": "nums = []\nfor i in range(2):\n    §§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(nums)",
      "targetCode": "nums = []\nfor i in range(2):\n    nums.append(int(input()))\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "12\n34",
          "expectedOutput": "[12, 34]"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 조건 필터링과 값 변환을 거쳐 만들어진 새 리스트의 출력 결과를 예측해보세요.",
      "prompt_en": "[Predict Output] Select the exact output printed when the following Python code runs.",
      "hint_ko": "10 이상인 숫자만 골라 5를 뺀 값이 새 리스트에 담길 때 요소들과 개수를 확인하세요.",
      "hint_en": "Filter numbers >= 10, subtract 5 from each, and check the resulting list and its length.",
      "targetCode": "nums = [8, 15, 10, 4, 20]\nres = []\nfor x in nums:\n    if x >= 10:\n        res.append(x - 5)\nprint(res, len(res))",
      "choices": [
        "[10, 5, 15] 3",
        "[15, 10, 20] 3",
        "[10, 15] 2",
        "[3, 10, 5, -1, 15] 5"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 5, 15] 3"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 반복문과 리스트 앞 요소 추출, 조건 분기 수집이 결합된 코드의 실행 결과를 예측해보세요.",
      "prompt_en": "[Predict Output] Select the exact output printed when the following Python code runs.",
      "hint_ko": "맨 앞에서부터 숫자를 하나씩 꺼내 홀수(1, 3)만 10을 곱해 odds 리스트에 추가합니다.",
      "hint_en": "Pop items from the front and append 10 times each odd number (1 and 3) to odds.",
      "targetCode": "raw = [1, 2, 3, 4]\nodds = []\nwhile len(raw) > 0:\n    n = raw.pop(0)\n    if n % 2 == 1:\n        odds.append(n * 10)\nprint(odds, len(raw))",
      "choices": [
        "[10, 30] 0",
        "[20, 40] 0",
        "[10, 30] 2",
        "[30, 10] 0"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 30] 0"
        }
      ]
    }
  ]
};
