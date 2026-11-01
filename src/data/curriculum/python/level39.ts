import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_39: PracticeRound = {
  "id": "py-basic-r39",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 39,
  "title_ko": "39레벨: 리스트 요소 값 변경과 슬라이싱",
  "title_en": "Level 39: List Element Mutation & Slicing",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "리스트 nums = [10, 20, 30]의 1번 인덱스 값을 99로 변경한 뒤 출력해보세요.",
      "prompt_en": "Change index 1 of nums = [10, 20, 30] to 99, then print the list.",
      "hint_ko": "변수 대입 블록의 왼쪽에 nums[1], 오른쪽에 99를 입력한 뒤 print(nums)로 출력하세요.",
      "hint_en": "Assign nums[1] = 99 using a variable block, then print(nums).",
      "targetCode": "nums = [10, 20, 30]\nnums[1] = 99\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[10, 99, 30]"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 items 리스트의 첫 번째 요소를 \"Z\"로 바꾼 결과를 출력해보세요.",
      "prompt_en": "Fill in the blank to replace the first element of items with \"Z\" and print items.",
      "hint_ko": "첫 번째 요소를 가리키는 items[0]을 등호(=) 왼쪽에 작성하세요.",
      "hint_en": "Write items[0] on the left side of = to update the first element.",
      "templateCode": "items = [\"A\", \"B\", \"C\"]\n§§§§§§§§ = \"Z\"\nprint(items)",
      "targetCode": "items = [\"A\", \"B\", \"C\"]\nitems[0] = \"Z\"\nprint(items)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['Z', 'B', 'C']"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "음수 인덱스를 사용해 nums = [5, 10, 15]의 마지막 요소를 0으로 바꾸고 출력해보세요.",
      "prompt_en": "Use a negative index to change the last element of nums = [5, 10, 15] to 0 and print it.",
      "hint_ko": "nums[-1] = 0으로 마지막 값을 수정한 뒤 print(nums)를 실행해보세요.",
      "hint_en": "Set nums[-1] = 0, then print(nums).",
      "targetCode": "nums = [5, 10, 15]\nnums[-1] = 0\nprint(nums)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[5, 10, 0]"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "복합 대입 연산자를 채워 첫 번째 요소에 50을 더한 리스트를 출력해보세요.",
      "prompt_en": "Fill in the compound assignment to add 50 to the first element and print pts.",
      "hint_ko": "기존 요소 값에 50을 더하려면 += 연산자와 숫자 50을 입력하세요.",
      "hint_en": "Use += and 50 to add 50 directly to pts[0].",
      "templateCode": "pts = [100, 200]\npts[0] §§ §§\nprint(pts)",
      "targetCode": "pts = [100, 200]\npts[0] += 50\nprint(pts)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[150, 200]"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "슬라이싱을 사용해 nums = [10, 20, 30, 40]에서 [20, 30] 부분만 잘라 출력해보세요.",
      "prompt_en": "Use slicing on nums = [10, 20, 30, 40] to print the sublist [20, 30].",
      "hint_ko": "1번 인덱스부터 3번 인덱스 직전(2번)까지 자르려면 nums[1:3]을 출력하세요.",
      "hint_en": "Slice from index 1 up to (not including) index 3 with nums[1:3].",
      "targetCode": "nums = [10, 20, 30, 40]\nprint(nums[1:3])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[20, 30]"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "슬라이싱 빈칸을 채워 앞에서부터 2개의 요소만 담긴 리스트를 출력해보세요.",
      "prompt_en": "Fill in the slice to print a list containing only the first 2 elements.",
      "hint_ko": "처음부터 2번 인덱스 직전까지 자르는 :2를 대괄호 안에 입력하세요.",
      "hint_en": "Enter :2 inside the brackets to slice from the beginning up to index 2.",
      "templateCode": "letters = [\"a\", \"b\", \"c\", \"d\"]\nprint(letters[§§])",
      "targetCode": "letters = [\"a\", \"b\", \"c\", \"d\"]\nprint(letters[:2])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['a', 'b']"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "리스트 a = [1, 2]와 b = [3, 4]를 + 연산자로 이어 붙인 결과를 출력해보세요.",
      "prompt_en": "Concatenate a = [1, 2] and b = [3, 4] with + and print the combined list.",
      "hint_ko": "두 리스트를 만든 뒤 print(a + b)를 실행하면 하나의 리스트로 연결되어 출력됩니다.",
      "hint_en": "Create lists a and b, then run print(a + b).",
      "targetCode": "a = [1, 2]\nb = [3, 4]\nprint(a + b)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[1, 2, 3, 4]"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸에 연산자를 채워 두 리스트를 하나로 합친 full 리스트를 출력해보세요.",
      "prompt_en": "Fill in the operator to combine front and back into full and print it.",
      "hint_ko": "리스트끼리 이어 붙일 때는 덧셈(+) 연산자를 사용합니다.",
      "hint_en": "Use the + operator to concatenate two lists.",
      "templateCode": "front = [\"A\", \"B\"]\nback = [\"C\"]\nfull = front § back\nprint(full)",
      "targetCode": "front = [\"A\", \"B\"]\nback = [\"C\"]\nfull = front + back\nprint(full)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['A', 'B', 'C']"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "* 연산자로 0이 4개 반복된 리스트 zeros를 만들고 출력해보세요.",
      "prompt_en": "Use the * operator to create a list zeros of four 0s and print it.",
      "hint_ko": "변수 블록에 변수명 zeros와 값 [0] * 4를 입력한 뒤 print(zeros)로 출력하세요.",
      "hint_en": "Assign zeros = [0] * 4 and print(zeros).",
      "targetCode": "zeros = [0] * 4\nprint(zeros)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[0, 0, 0, 0]"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 base 리스트의 요소가 3번 반복된 새 리스트를 출력해보세요.",
      "prompt_en": "Fill in the blanks to repeat base 3 times and print the new list.",
      "hint_ko": "리스트에 * 3을 곱하면 요소 패턴이 3번 반복된 리스트가 만들어집니다.",
      "hint_en": "Multiply the list by * 3 to repeat its elements three times.",
      "templateCode": "base = [1, 2]\nrep = base § §\nprint(rep)",
      "targetCode": "base = [1, 2]\nrep = base * 3\nprint(rep)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[1, 2, 1, 2, 1, 2]"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "슬라이싱 범위를 수정하여 [20, 30, 40] 세 요소가 모두 출력되도록 고쳐보세요.",
      "prompt_en": "Fix the slice range so all three elements [20, 30, 40] are printed.",
      "hint_ko": "슬라이싱 [시작:끝]에서 끝 인덱스는 포함되지 않습니다. 3번 인덱스 값(40)까지 포함하려면 끝 값을 1 늘려보세요.",
      "hint_en": "The stop index in [start:stop] is exclusive. Increase the stop index by 1 to include 40.",
      "templateCode": "nums = [10, 20, 30, 40, 50]\nprint(nums[1:3])",
      "targetCode": "nums = [10, 20, 30, 40, 50]\nprint(nums[1:4])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[20, 30, 40]"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "코드 아래에 한 줄을 추가하여 앞에서부터 3개의 요소를 슬라이싱해 출력해보세요.",
      "prompt_en": "Add one line below to slice and print the first 3 elements of arr.",
      "hint_ko": "셋째 줄에 print(arr[:3])을 입력하면 변경된 첫 요소를 포함한 앞의 3개가 출력됩니다.",
      "hint_en": "Write print(arr[:3]) on line 3 to print the first three elements.",
      "templateCode": "arr = [10, 20, 30, 40]\narr[0] = 99\n§§§§§§§§§§§§§§",
      "targetCode": "arr = [10, 20, 30, 40]\narr[0] = 99\nprint(arr[:3])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[99, 20, 30]"
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
      "hint_ko": "nums가 [1, 20, 3, 4]로 바뀐 뒤 nums[1:3]인 [20, 3]에 [9]가 이어 붙습니다.",
      "hint_en": "nums becomes [1, 20, 3, 4], so nums[1:3] is [20, 3], and + [9] gives [20, 3, 9].",
      "targetCode": "nums = [1, 2, 3, 4]\nnums[1] = 20\nprint(nums[1:3] + [9])",
      "choices": [
        "[2, 3, 9]",
        "[20, 3, 4, 9]",
        "[20, 3, 9]",
        "[1, 20, 9]"
      ],
      "correctChoiceIndex": 2,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[20, 3, 9]"
        }
      ]
    }
  ]
};
