import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_45: PracticeRound = {
  "id": "py-basic-r45",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 45,
  "title_ko": "45레벨: 2차원 리스트 기초",
  "title_en": "Level 45: 2D Nested Lists Basics",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "for_in",
    "math"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "2차원 리스트 grid = [[1, 2], [3, 4]]를 만들고 첫 번째 행(grid[0])을 출력해보세요.",
      "prompt_en": "Create the 2D list grid = [[1, 2], [3, 4]] and print its first row (grid[0]).",
      "hint_ko": "리스트 블록의 두 칸에 각각 [1, 2]와 [3, 4]를 입력해 2차원 리스트를 만든 뒤 print(grid[0])을 실행하세요.",
      "hint_en": "Enter [1, 2] and [3, 4] into the list block slots for grid, then print(grid[0]).",
      "targetCode": "grid = [[1, 2], [3, 4]]\nprint(grid[0])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[1, 2]"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 2차원 좌석 리스트를 완성하고 두 번째 행을 출력해보세요.",
      "prompt_en": "Fill in the blanks to complete the 2D list seats and print its second row.",
      "hint_ko": "안쪽 리스트도 대괄호 [ ]로 감싸며, 두 번째 행은 인덱스 1로 접근합니다.",
      "hint_en": "Wrap the inner row in [ ] and use index 1 for the second row.",
      "templateCode": "seats = [[\"A1\", \"A2\"], §\"B1\", \"B2\"§]\nprint(seats[§])",
      "targetCode": "seats = [[\"A1\", \"A2\"], [\"B1\", \"B2\"]]\nprint(seats[1])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "['B1', 'B2']"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "2차원 리스트 grid = [[10, 20], [30, 40]]에서 1번 행 0번 열 값(30)을 출력해보세요.",
      "prompt_en": "Print the element at row 1, col 0 (30) from grid = [[10, 20], [30, 40]].",
      "hint_ko": "2차원 리스트의 개별 값은 grid[행][열] 형태로 꺼냅니다. print(grid[1][0])을 작성하세요.",
      "hint_en": "Access 2D elements with grid[row][col]: write print(grid[1][0]).",
      "targetCode": "grid = [[10, 20], [30, 40]]\nprint(grid[1][0])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "30"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "행과 열 인덱스를 채워 0번 행 1번 열의 요소(\"X\")를 출력해보세요.",
      "prompt_en": "Fill in the row and column indices to print the element at row 0, col 1 (\"X\").",
      "hint_ko": "첫 번째 행(0번)의 두 번째 열(1번)이므로 [0][1]을 연속해서 붙입니다.",
      "hint_en": "Chain the row and column brackets as board[0][1].",
      "templateCode": "board = [[\"O\", \"X\"], [\"X\", \"O\"]]\nprint(board§§§§§§)",
      "targetCode": "board = [[\"O\", \"X\"], [\"X\", \"O\"]]\nprint(board[0][1])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "X"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "grid = [[1, 2], [3, 4]]의 0번 행 1번 열 값을 99로 변경하고 전체 grid를 출력해보세요.",
      "prompt_en": "Update row 0, col 1 of grid = [[1, 2], [3, 4]] to 99 and print grid.",
      "hint_ko": "변수 블록 왼쪽에 grid[0][1], 오른쪽에 99를 입력한 뒤 print(grid)를 실행하세요.",
      "hint_en": "Assign grid[0][1] = 99 and then print(grid).",
      "targetCode": "grid = [[1, 2], [3, 4]]\ngrid[0][1] = 99\nprint(grid)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[[1, 99], [3, 4]]"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "빈칸을 채워 1번 행 1번 열(오른쪽 아래) 값을 0으로 바꾼 뒤 mat를 출력해보세요.",
      "prompt_en": "Fill in the indices to set row 1, col 1 (bottom-right) to 0 and print mat.",
      "hint_ko": "두 번째 행의 두 번째 열은 [1][1] 인덱스로 지정해 값을 변경합니다.",
      "hint_en": "Use mat[1][1] = 0 to update the bottom-right element.",
      "templateCode": "mat = [[5, 5], [5, 5]]\nmat§§§§§§ = 0\nprint(mat)",
      "targetCode": "mat = [[5, 5], [5, 5]]\nmat[1][1] = 0\nprint(mat)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[[5, 5], [5, 0]]"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "for 반복문으로 grid = [[10, 20], [30, 40]]의 각 행 합계를 한 줄씩 출력해보세요.",
      "prompt_en": "Use a for loop to print the sum of each row in grid = [[10, 20], [30, 40]].",
      "hint_ko": "for row in grid:로 각 행 리스트를 꺼내고 그 안에서 print(sum(row))를 실행하세요.",
      "hint_en": "Loop with for row in grid: and call print(sum(row)) inside.",
      "targetCode": "grid = [[10, 20], [30, 40]]\nfor row in grid:\n    print(sum(row))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "30\n70"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 빈칸에 행 변수 row를 채워 각 팀(행)의 첫 번째 멤버 이름만 한 줄씩 출력해보세요.",
      "prompt_en": "Fill in both blanks with row variable row to print only the first member of each team.",
      "hint_ko": "for row in teams:로 각 행을 꺼내면 row[0]이 해당 행의 첫 번째 요소가 됩니다.",
      "hint_en": "Iterate over each sublist row in teams and print(row[0]).",
      "templateCode": "teams = [[\"Kim\", \"Lee\"], [\"Park\", \"Choi\"]]\nfor §§§ in teams:\n    print(§§§[0])",
      "targetCode": "teams = [[\"Kim\", \"Lee\"], [\"Park\", \"Choi\"]]\nfor row in teams:\n    print(row[0])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Kim\nPark"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "중첩 for 반복문으로 grid = [[1, 2], [3, 4]]의 모든 숫자를 더해 총합을 출력해보세요.",
      "prompt_en": "Use nested for loops to sum every number in grid = [[1, 2], [3, 4]] and print total.",
      "hint_ko": "바깥 for row in grid: 안에 안쪽 for val in row:를 넣고 total += val로 누적한 뒤 print(total)을 실행하세요.",
      "hint_en": "Nest for val in row: inside for row in grid:, accumulate total += val, and print(total).",
      "targetCode": "grid = [[1, 2], [3, 4]]\ntotal = 0\nfor row in grid:\n    for val in row:\n        total += val\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "10"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "중첩 반복문의 빈칸을 채워 2차원 리스트 box의 전체 합(20)을 출력해보세요.",
      "prompt_en": "Fill in the nested loop blanks to print the total sum (20) of all numbers in box.",
      "hint_ko": "안쪽 반복문은 바깥에서 꺼낸 행 변수 row를 순회하며 total += n으로 값을 누적합니다.",
      "hint_en": "Loop over row in the inner for loop and add each n with total += n.",
      "templateCode": "box = [[2, 4], [6, 8]]\ntotal = 0\nfor row in box:\n    for n in §§§:\n        total §§ §\nprint(total)",
      "targetCode": "box = [[2, 4], [6, 8]]\ntotal = 0\nfor row in box:\n    for n in row:\n        total += n\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "20"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "행과 열 인덱스가 바뀌어 발생한 오류를 수정하여 둘째 행 마지막 값 6을 출력해보세요.",
      "prompt_en": "Fix the swapped row/column indices so the last value of the second row (6) prints.",
      "hint_ko": "행이 2개, 열이 3개인 리스트입니다. [행][열] 순서에 맞게 둘째 행(1), 셋째 열(2)로 수정하세요.",
      "hint_en": "This 2x3 grid has 2 rows (0..1) and 3 cols (0..2). Access row 1, col 2 in [row][col] order.",
      "templateCode": "grid = [[1, 2, 3], [4, 5, 6]]\nprint(grid[2][1])",
      "targetCode": "grid = [[1, 2, 3], [4, 5, 6]]\nprint(grid[1][2])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "6"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "2차원 리스트 아래에 한 줄을 추가하여 첫 행 첫 값(10)과 둘째 행 끝 값(60)의 합을 출력해보세요.",
      "prompt_en": "Add one line below to print the sum of row 0 col 0 (10) and row 1 col 2 (60).",
      "hint_ko": "둘째 줄에 print(grid[0][0] + grid[1][2])를 작성해보세요.",
      "hint_en": "Write print(grid[0][0] + grid[1][2]) on the second line.",
      "templateCode": "grid = [[10, 20, 30], [40, 50, 60]]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "grid = [[10, 20, 30], [40, 50, 60]]\nprint(grid[0][0] + grid[1][2])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "70"
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
      "hint_ko": "2차원 리스트의 len(m)은 행의 개수(3)이며, m[1]은 [30, 4]로 바뀌어 합계가 34가 됩니다.",
      "hint_en": "len(m) counts the 3 rows, and m[1] becomes [30, 4] whose sum is 34.",
      "targetCode": "m = [[1, 2], [3, 4], [5, 6]]\nm[1][0] = 30\nprint(len(m), sum(m[1]))",
      "choices": [
        "2 34",
        "3 7",
        "6 34",
        "3 34"
      ],
      "correctChoiceIndex": 3,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 34"
        }
      ]
    }
  ]
};
