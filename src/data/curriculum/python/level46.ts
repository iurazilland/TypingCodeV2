import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_46: PracticeRound = {
  "id": "py-basic-r46",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 46,
  "title_ko": "46레벨: 리스트 종합 문제풀이",
  "title_en": "Level 46: Section 6 Comprehensive Review",
  "totalQuestions": 10,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "type",
    "method",
    "math",
    "sorted",
    "if",
    "for_in",
    "for_range",
    "range"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 4개의 정수를 입력받아 오름차순 정렬한 뒤 최솟값과 최댓값을 출력해보세요.",
      "prompt_en": "Fill in the blanks to read 4 integers, sort ascending, and print the min and max.",
      "hint_ko": ".append()로 입력값을 추가하고, 오름차순 정렬 후 첫 요소 [0]과 마지막 요소 [-1]을 출력하세요.",
      "hint_en": "Append inputs with .append(), then after .sort() print nums[0] and nums[-1].",
      "templateCode": "nums = list()\nfor i in range(4):\n    nums.§§§§§§(int(input()))\nnums.sort()\nprint(nums[0], nums[§§])",
      "targetCode": "nums = list()\nfor i in range(4):\n    nums.append(int(input()))\nnums.sort()\nprint(nums[0], nums[-1])",
      "testCases": [
        {
          "id": 1,
          "input": "30\n10\n50\n20",
          "expectedOutput": "10 50"
        },
        {
          "id": 2,
          "input": "9\n3\n7\n5",
          "expectedOutput": "3 9"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 입력된 단어 중 4글자 이상인 단어만 골라 \"-\"로 연결해 출력해보세요.",
      "prompt_en": "Fill in the blanks to filter words of length >= 4 and join them with \"-\".",
      "hint_ko": "input().split()으로 단어 리스트를 만들고, 조건을 통과한 longs 리스트를 \"-\".join(longs)로 묶으세요.",
      "hint_en": "Split the input with split() and combine filtered words with \"-\".join(longs).",
      "templateCode": "words = input().§§§§§§§\nlongs = list()\nfor w in words:\n    if len(w) >= 4:\n        longs.append(w)\nprint(\"-\".§§§§(longs))",
      "targetCode": "words = input().split()\nlongs = list()\nfor w in words:\n    if len(w) >= 4:\n        longs.append(w)\nprint(\"-\".join(longs))",
      "testCases": [
        {
          "id": 1,
          "input": "hi code cat data",
          "expectedOutput": "code-data"
        },
        {
          "id": 2,
          "input": "py list loop go",
          "expectedOutput": "list-loop"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 2차원 리스트 각 행의 합계 중 가장 큰 값(40)을 출력해보세요.",
      "prompt_en": "Fill in the blanks to find and print the largest row sum (40) in grid.",
      "hint_ko": "각 행의 합은 sum(row)로 구해 sums에 모으고, 마지막에 max(sums)로 최댓값을 출력합니다.",
      "hint_en": "Append sum(row) for each row, then print max(sums).",
      "templateCode": "grid = [[10, 20], [30, 5], [15, 25]]\nsums = list()\nfor row in grid:\n    sums.append(§§§(row))\nprint(§§§(sums))",
      "targetCode": "grid = [[10, 20], [30, 5], [15, 25]]\nsums = list()\nfor row in grid:\n    sums.append(sum(row))\nprint(max(sums))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "40"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "첫 번째 요소가 누락되어 합계가 90으로 나오는 반복 범위를 수정해 100을 출력해보세요.",
      "prompt_en": "Fix the loop range that skips the first element (printing 90) so it prints 100.",
      "hint_ko": "리스트의 첫 번째 인덱스는 1이 아니라 0입니다. 0번 인덱스부터 끝까지 순회하도록 range()를 고쳐보세요.",
      "hint_en": "List indices start at 0, not 1. Adjust range() so index 0 is included.",
      "templateCode": "nums = [10, 20, 30, 40]\ntotal = 0\nfor i in range(1, len(nums)):\n    total += nums[i]\nprint(total)",
      "targetCode": "nums = [10, 20, 30, 40]\ntotal = 0\nfor i in range(len(nums)):\n    total += nums[i]\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "100"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "입력받은 문자열 값을 리스트에서 삭제할 때 발생하는 오류를 수정해보세요.",
      "prompt_en": "Fix the error when deleting the input string value from the list items.",
      "hint_ko": ".pop()은 정수 인덱스를 인자로 받습니다. 요소의 값 자체를 찾아 삭제하는 메서드로 수정하세요.",
      "hint_en": ".pop() expects an integer index. Use .remove(target) to delete by value.",
      "templateCode": "items = [\"apple\", \"bug\", \"melon\"]\ntarget = input()\nif target in items:\n    items.pop(target)\nprint(\" \".join(items))",
      "targetCode": "items = [\"apple\", \"bug\", \"melon\"]\ntarget = input()\nif target in items:\n    items.remove(target)\nprint(\" \".join(items))",
      "testCases": [
        {
          "id": 1,
          "input": "bug",
          "expectedOutput": "apple melon"
        },
        {
          "id": 2,
          "input": "apple",
          "expectedOutput": "bug melon"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "정렬된 단어들을 쉼표로 이어 출력하려다 발생한 메서드 호출 오류를 수정해보세요.",
      "prompt_en": "Fix the method call error when joining the sorted words with a comma.",
      "hint_ko": "리스트에는 .join() 메서드가 없습니다. 구분자 문자열 \",\"에서 .join(words)를 호출해보세요.",
      "hint_en": "Lists do not have .join(). Call \",\".join(words) on the comma separator string.",
      "templateCode": "words = input().split()\nwords.sort()\nprint(words.join(\",\"))",
      "targetCode": "words = input().split()\nwords.sort()\nprint(\",\".join(words))",
      "testCases": [
        {
          "id": 1,
          "input": "pear apple fig",
          "expectedOutput": "apple,fig,pear"
        },
        {
          "id": 2,
          "input": "cat ant bee",
          "expectedOutput": "ant,bee,cat"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "내림차순 정렬 코드 아래에 한 줄을 추가하여 상위 2개 점수의 합(180)을 출력해보세요.",
      "prompt_en": "Add one line below the descending sort to print the sum (180) of the top 2 scores.",
      "hint_ko": "셋째 줄에 슬라이싱과 합계 함수를 조합해 print(sum(scores[:2]))를 작성하세요.",
      "hint_en": "Combine sum() and slicing on line 3: print(sum(scores[:2])).",
      "templateCode": "scores = [55, 88, 92, 74, 60]\nscores.sort(reverse=True)\n§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "scores = [55, 88, 92, 74, 60]\nscores.sort(reverse=True)\nprint(sum(scores[:2]))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "180"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "if 조건문 아래에 한 줄을 추가하여 행의 합이 12 이상인 행의 두 번째 값을 출력해보세요.",
      "prompt_en": "Add one indented line under if to print the second value of rows whose sum >= 12.",
      "hint_ko": "if sum(row) >= 12: 아래에 공백 8칸을 들여쓰고 print(row[1])을 입력하세요.",
      "hint_en": "Indent by 8 spaces under if sum(row) >= 12: and write print(row[1]).",
      "templateCode": "grid = [[3, 7], [5, 9], [6, 8]]\nfor row in grid:\n    if sum(row) >= 12:\n        §§§§§§§§§§§§§",
      "targetCode": "grid = [[3, 7], [5, 9], [6, 8]]\nfor row in grid:\n    if sum(row) >= 12:\n        print(row[1])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "9\n8"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 파이썬 코드를 실행했을 때 화면에 출력될 올바른 결과를 선택해보세요.",
      "prompt_en": "Select the exact output printed when the following Python code runs.",
      "hint_ko": "insert 후 [10, 15, 20, 30]에서 pop()이 30을 꺼내고 남은 [10, 15, 20]의 [1:]이 출력됩니다.",
      "hint_en": "insert makes [10, 15, 20, 30]; pop() returns 30 leaving [10, 15, 20], and arr[1:] is [15, 20].",
      "targetCode": "arr = [10, 20, 30]\narr.insert(1, 15)\nx = arr.pop()\nprint(x, arr[1:])",
      "choices": [
        "30 [20, 30]",
        "30 [15, 20]",
        "20 [15, 30]",
        "15 [10, 20]"
      ],
      "correctChoiceIndex": 1,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "30 [15, 20]"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "다음 파이썬 코드를 실행했을 때 화면에 출력될 올바른 결과를 선택해보세요.",
      "prompt_en": "Select the exact output printed when the following Python code runs.",
      "hint_ko": "각 행에서 r[1] - r[0]은 모두 3이므로 res는 [3, 3, 3]이 되어 합계는 9, 3의 개수는 3입니다.",
      "hint_en": "Each row gives r[1] - r[0] == 3, so res is [3, 3, 3]; sum(res) is 9 and res.count(3) is 3.",
      "targetCode": "grid = [[1, 4], [2, 5], [3, 6]]\nres = []\nfor r in grid:\n    res.append(r[1] - r[0])\nprint(sum(res), res.count(3))",
      "choices": [
        "6 3",
        "9 1",
        "9 3",
        "15 3"
      ],
      "correctChoiceIndex": 2,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "9 3"
        }
      ]
    }
  ]
};
