import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_38: PracticeRound = {
  "id": "py-basic-r38",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 38,
  "title_ko": "38레벨: 리스트 생성과 인덱싱",
  "title_en": "Level 38: List Creation, Indexing & len()",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "math"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "숫자 10, 20, 30이 담긴 리스트 nums를 만들고 전체 리스트를 출력해보세요.",
      "prompt_en": "Create a list nums containing 10, 20, and 30, then print the entire list.",
      "hint_ko": "리스트 블록의 변수명에 nums, 각 칸에 10, 20, 30을 넣고 print(nums)로 출력하세요.",
      "hint_en": "Set the list variable name to nums with items 10, 20, 30, then print(nums).",
      "targetCode": "nums = [10, 20, 30]\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 20, 30]"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "대괄호를 채워 두 과일 이름이 담긴 리스트 fruits를 만들고 출력해보세요.",
      "prompt_en": "Fill in the square brackets to create the list fruits and print it.",
      "hint_ko": "파이썬 리스트는 대괄호 [ ] 안에 요소들을 쉼표(,)로 구분해 작성합니다.",
      "hint_en": "Python lists wrap comma-separated elements inside square brackets [ ].",
      "templateCode": "fruits = §\"apple\", \"banana\"§\nprint(fruits)",
      "targetCode": "fruits = [\"apple\", \"banana\"]\nprint(fruits)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['apple', 'banana']"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "리스트 nums = [10, 20, 30]에서 첫 번째 요소(0번 인덱스)를 출력해보세요.",
      "prompt_en": "Print the first element (index 0) from nums = [10, 20, 30].",
      "hint_ko": "파이썬 인덱스는 0부터 시작합니다. print() 안에 nums[0]을 넣어보세요.",
      "hint_en": "Python indices start at 0. Put nums[0] inside print().",
      "targetCode": "nums = [10, 20, 30]\nprint(nums[0])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "10"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 colors 리스트의 두 번째 요소(\"green\")를 출력해보세요.",
      "prompt_en": "Fill in the blank to print the second element (\"green\") of colors.",
      "hint_ko": "첫 번째 요소가 [0]이므로 두 번째 요소는 [1]로 접근합니다.",
      "hint_en": "Since the first element is [0], access the second element with [1].",
      "templateCode": "colors = [\"red\", \"green\", \"blue\"]\nprint(colors§§§)",
      "targetCode": "colors = [\"red\", \"green\", \"blue\"]\nprint(colors[1])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "green"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "음수 인덱스를 사용해 nums = [10, 20, 30, 40]의 마지막 요소를 출력해보세요.",
      "prompt_en": "Use a negative index to print the last element of nums = [10, 20, 30, 40].",
      "hint_ko": "인덱스 -1은 리스트의 맨 마지막 요소를 가리킵니다. print(nums[-1])을 작성하세요.",
      "hint_en": "Index -1 refers to the last element of a list. Use print(nums[-1]).",
      "targetCode": "nums = [10, 20, 30, 40]\nprint(nums[-1])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "40"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "음수 인덱스를 채워 ranks 리스트의 맨 마지막 요소를 출력해보세요.",
      "prompt_en": "Fill in the negative index to print the very last element of ranks.",
      "hint_ko": "뒤에서 첫 번째 요소를 뜻하는 -1을 대괄호 안에 입력하세요.",
      "hint_en": "Enter -1 inside the brackets to select the last element.",
      "templateCode": "ranks = [\"gold\", \"silver\", \"bronze\"]\nprint(ranks[§§])",
      "targetCode": "ranks = [\"gold\", \"silver\", \"bronze\"]\nprint(ranks[-1])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "bronze"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "len() 함수를 사용해 리스트 nums = [5, 10, 15, 20]의 요소 개수를 출력해보세요.",
      "prompt_en": "Use len() to print the number of elements in nums = [5, 10, 15, 20].",
      "hint_ko": "print() 안에 len(nums)를 넣으면 리스트에 들어 있는 요소 개수 4가 출력됩니다.",
      "hint_en": "Pass len(nums) to print() to output the element count (4).",
      "targetCode": "nums = [5, 10, 15, 20]\nprint(len(nums))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "4"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 알맞은 함수를 채워 tags 리스트의 전체 요소 개수를 출력해보세요.",
      "prompt_en": "Fill in the function name to print the total number of elements in tags.",
      "hint_ko": "리스트나 문자열의 길이(개수)를 구하는 내장 함수 len을 입력하세요.",
      "hint_en": "Type the built-in function len to get the length of the list.",
      "templateCode": "tags = [\"py\", \"js\", \"go\"]\nprint(§§§(tags))",
      "targetCode": "tags = [\"py\", \"js\", \"go\"]\nprint(len(tags))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "리스트 nums = [10, 20, 30]의 첫 번째 요소와 세 번째 요소를 더한 값을 출력해보세요.",
      "prompt_en": "Print the sum of the first and third elements of nums = [10, 20, 30].",
      "hint_ko": "첫 번째 요소는 nums[0], 세 번째 요소는 nums[2]입니다. 두 값을 + 로 더해보세요.",
      "hint_en": "The first element is nums[0] and the third is nums[2]. Add them with +.",
      "targetCode": "nums = [10, 20, 30]\nprint(nums[0] + nums[2])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "40"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 scores 리스트의 첫 요소와 마지막 요소의 합(180)을 출력해보세요.",
      "prompt_en": "Fill in the blanks to print the sum (180) of the first and last elements of scores.",
      "hint_ko": "첫 요소는 [0], 마지막 요소는 [-1](또는 [2]) 인덱스로 꺼내 더할 수 있습니다.",
      "hint_en": "Use [0] for the first element and [-1] for the last element.",
      "templateCode": "scores = [80, 90, 100]\ntotal = scores§§§ + scores§§§§\nprint(total)",
      "targetCode": "scores = [80, 90, 100]\ntotal = scores[0] + scores[-1]\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "180"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "인덱스 범위 오류를 수정하여 리스트의 세 번째 요소인 30이 출력되도록 고쳐보세요.",
      "prompt_en": "Fix the out-of-range index bug so the third element (30) is printed.",
      "hint_ko": "요소가 3개인 리스트의 인덱스는 0, 1, 2까지입니다. 세 번째 요소의 인덱스로 수정하세요.",
      "hint_en": "A 3-item list has valid indices 0, 1, and 2. Change the index for the 3rd item.",
      "templateCode": "nums = [10, 20, 30]\nprint(nums[3])",
      "targetCode": "nums = [10, 20, 30]\nprint(nums[2])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "30"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "리스트 아래에 한 줄을 추가하여 첫 번째와 두 번째 가격의 합(3500)을 출력해보세요.",
      "prompt_en": "Add one line below the list to print the sum (3500) of the first and second prices.",
      "hint_ko": "둘째 줄에 print(prices[0] + prices[1])을 작성해보세요.",
      "hint_en": "Write print(prices[0] + prices[1]) on the second line.",
      "templateCode": "prices = [1500, 2000, 3500]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "prices = [1500, 2000, 3500]\nprint(prices[0] + prices[1])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3500"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 파이썬 코드를 실행했을 때 화면에 출력될 올바른 결과를 선택해보세요.",
      "prompt_en": "Select the exact output printed when the following Python code runs.",
      "hint_ko": "요소 개수는 4개이며, data[1]은 20, data[-1]은 40이므로 둘째 줄에는 60이 출력됩니다.",
      "hint_en": "len(data) is 4, and data[1] (20) + data[-1] (40) equals 60.",
      "targetCode": "data = [10, 20, 30, 40]\nprint(len(data))\nprint(data[1] + data[-1])",
      "choices": [
        "4\n50",
        "4\n60",
        "3\n60",
        "4\n30"
      ],
      "correctChoiceIndex": 1,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "4\n60"
        }
      ]
    }
  ]
};
