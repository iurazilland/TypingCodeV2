import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_44: PracticeRound = {
  "id": "py-basic-r44",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 44,
  "title_ko": "44레벨: 숫자 리스트 집계 함수와 join() 결합",
  "title_en": "Level 44: List Aggregations & String join()",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "method",
    "math"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "내장 함수 sum()을 사용해 리스트 nums = [10, 25, 15]의 전체 합계를 출력해보세요.",
      "prompt_en": "Use the built-in sum() function to print the total sum of nums = [10, 25, 15].",
      "hint_ko": "반복문 없이도 print(sum(nums)) 한 줄로 숫자 리스트의 총합 50을 구할 수 있습니다.",
      "hint_en": "Use print(sum(nums)) to compute and print the sum (50) directly.",
      "targetCode": "nums = [10, 25, 15]\nprint(sum(nums))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "50"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 집계 함수를 채워 coins 리스트의 총합(650)을 출력해보세요.",
      "prompt_en": "Fill in the aggregation function to print the sum (650) of coins.",
      "hint_ko": "숫자 리스트의 모든 요소를 더하는 내장 함수는 sum입니다.",
      "hint_en": "Type sum to add all numbers in the list.",
      "templateCode": "coins = [100, 500, 50]\nprint(§§§(coins))",
      "targetCode": "coins = [100, 500, 50]\nprint(sum(coins))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "650"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "nums = [42, 17, 89, 30]의 최댓값과 최솟값을 각각 한 줄씩 출력해보세요.",
      "prompt_en": "Print the maximum and minimum values of nums = [42, 17, 89, 30] on separate lines.",
      "hint_ko": "첫째 print에는 max(nums), 둘째 print에는 min(nums)를 연결해 출력하세요.",
      "hint_en": "Print max(nums) first, then print min(nums) on the next line.",
      "targetCode": "nums = [42, 17, 89, 30]\nprint(max(nums))\nprint(min(nums))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "89\n17"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 최고 기온과 최저 기온의 차이(16)를 계산해 출력해보세요.",
      "prompt_en": "Fill in the blanks to calculate and print the difference (16) between max and min temps.",
      "hint_ko": "가장 큰 값을 구하는 max와 가장 작은 값을 구하는 min 함수를 차례대로 입력하세요.",
      "hint_en": "Use max(temps) minus min(temps) to find the range.",
      "templateCode": "temps = [12, 25, 18, 9]\ndiff = §§§(temps) - §§§(temps)\nprint(diff)",
      "targetCode": "temps = [12, 25, 18, 9]\ndiff = max(temps) - min(temps)\nprint(diff)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "16"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "sum()과 len()의 몫 연산(//)으로 scores = [80, 90, 100]의 정수 평균을 출력해보세요.",
      "prompt_en": "Compute the integer average of scores = [80, 90, 100] using sum() // len() and print it.",
      "hint_ko": "avg = sum(scores) // len(scores)를 계산한 뒤 print(avg)로 출력하세요.",
      "hint_en": "Set avg = sum(scores) // len(scores) and print(avg).",
      "targetCode": "scores = [80, 90, 100]\navg = sum(scores) // len(scores)\nprint(avg)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "90"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 nums 리스트의 실수 평균값(25.0)을 구해 출력해보세요.",
      "prompt_en": "Fill in the blanks to compute and print the float average (25.0) of nums.",
      "hint_ko": "평균은 전체 합계(sum)를 전체 개수(len)로 나누어 계산합니다.",
      "hint_en": "Divide sum(nums) by len(nums) to calculate the mean.",
      "templateCode": "nums = [10, 20, 30, 40]\navg = §§§(nums) / §§§(nums)\nprint(avg)",
      "targetCode": "nums = [10, 20, 30, 40]\navg = sum(nums) / len(nums)\nprint(avg)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "25.0"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "구분자 sep = \"-\"와 .join()으로 words = [\"2026\", \"11\", \"01\"]을 이어 출력해보세요.",
      "prompt_en": "Join words = [\"2026\", \"11\", \"01\"] with sep = \"-\" using .join() and print the result.",
      "hint_ko": "sep = \"-\" 변수를 만든 뒤 print() 안에서 sep에 .join(words) 메서드를 연결하세요.",
      "hint_en": "Set sep = \"-\", then print(sep.join(words)) to output 2026-11-01.",
      "targetCode": "words = [\"2026\", \"11\", \"01\"]\nsep = \"-\"\nprint(sep.join(words))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2026-11-01"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "공백 구분자와 메서드를 채워 단어 리스트를 한 문장(\"I love Python\")으로 출력해보세요.",
      "prompt_en": "Fill in the space separator and method to join words into \"I love Python\".",
      "hint_ko": "단어 사이에 공백 한 칸이 들어가도록 \" \".join(words) 형태로 작성하세요.",
      "hint_en": "Call \" \".join(words) with a single space string as the separator.",
      "templateCode": "words = [\"I\", \"love\", \"Python\"]\nprint(§§§.§§§§(words))",
      "targetCode": "words = [\"I\", \"love\", \"Python\"]\nprint(\" \".join(words))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "I love Python"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "공백으로 구분된 단어들을 입력받아 하이픈(\"-\")으로 이어 붙인 문자열을 출력해보세요.",
      "prompt_en": "Read space-separated words from input and print them joined with \"-\".",
      "hint_ko": "words = input().split()으로 단어 리스트를 받고, sep = \"-\"를 이용해 print(sep.join(words))를 실행하세요.",
      "hint_en": "Split input with words = input().split(), set sep = \"-\", and print(sep.join(words)).",
      "targetCode": "words = input().split()\nsep = \"-\"\nprint(sep.join(words))",
      "testCases": [
        {
          "id": 1,
          "input": "red green blue",
          "expectedOutput": "red-green-blue"
        },
        {
          "id": 2,
          "input": "one two",
          "expectedOutput": "one-two"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 공백으로 입력된 단어들을 슬래시(\"/\")로 연결해 출력해보세요.",
      "prompt_en": "Fill in the blanks to split the input words and join them with \"/\".",
      "hint_ko": "문자열을 공백 기준으로 쪼개는 split()과 다시 하나로 묶는 join 메서드를 활용하세요.",
      "hint_en": "Use input().split() to create a list of words, then \"/\".join(tags).",
      "templateCode": "tags = input().§§§§§§§\nprint(\"/\".§§§§(tags))",
      "targetCode": "tags = input().split()\nprint(\"/\".join(tags))",
      "testCases": [
        {
          "id": 1,
          "input": "home docs api",
          "expectedOutput": "home/docs/api"
        },
        {
          "id": 2,
          "input": "src lib",
          "expectedOutput": "src/lib"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "문자열 결합 메서드 호출 오류를 수정하여 A-B-C가 출력되도록 고쳐보세요.",
      "prompt_en": "Fix the AttributeError in the join call so that A-B-C is printed.",
      "hint_ko": ".join()은 리스트가 아니라 구분자 문자열에서 호출해야 하며, 괄호 안에 문자열 리스트를 넣습니다.",
      "hint_en": "Call .join() on the separator string \"-\" and pass the list words as its argument.",
      "templateCode": "words = [\"A\", \"B\", \"C\"]\nprint(words.join(\"-\"))",
      "targetCode": "words = [\"A\", \"B\", \"C\"]\nprint(\"-\".join(words))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "A-B-C"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "리스트 아래에 한 줄을 추가하여 전체 합계에서 최댓값을 뺀 결과(60)를 출력해보세요.",
      "prompt_en": "Add one line below the list to print the total sum minus the maximum value (60).",
      "hint_ko": "둘째 줄에 print(sum(nums) - max(nums))를 작성해보세요.",
      "hint_en": "Write print(sum(nums) - max(nums)) on the second line.",
      "templateCode": "nums = [15, 40, 25, 20]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "nums = [15, 40, 25, 20]\nprint(sum(nums) - max(nums))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "60"
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
      "hint_ko": "최댓값 40에서 최솟값 10을 빼면 30이고, 두 문자열 \"H\", \"M\"을 \":\"로 이으면 H:M이 됩니다.",
      "hint_en": "max(pts) - min(pts) is 40 - 10 = 30, and \":\".join([\"H\", \"M\"]) produces H:M.",
      "targetCode": "pts = [10, 30, 20, 40]\nprint(max(pts) - min(pts))\nprint(\":\".join([\"H\", \"M\"]))",
      "choices": [
        "30\nH:M",
        "40\nH:M",
        "30\nH M",
        "100\nH:M"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "30\nH:M"
        }
      ]
    }
  ]
};
