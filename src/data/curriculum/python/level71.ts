import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_71: PracticeRound = {
  "id": "py-basic-r71",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 71,
  "title_ko": "71레벨: 2차원 리스트(grid[r][c])와 중첩 for문 실전 활용",
  "title_en": "Level 71: 2D Nested Lists & Nested Loop Aggregations",
  "description_ko": "리스트 안에 리스트를 담은 2차원 격자(grid[r][c])를 다루고, 행 단위 합계와 중첩 for문을 이용한 전체·대각선 집계를 실습합니다.",
  "description_en": "Access and update 2D lists via grid[r][c] and compute row, diagonal, and matrix totals with nested loops.",
  "totalQuestions": 13,
  "unlockedBlocks": [
    "print",
    "variable",
    "input",
    "method",
    "type",
    "math",
    "if",
    "for_range",
    "for_in",
    "range",
    "while",
    "def",
    "class"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "prompt_ko": "2차원 리스트 grid에서 0번 행 1번 열(grid[0][1])과 1번 행 0번 열(grid[1][0]) 값을 나란히 출력해보세요.",
      "prompt_en": "Print grid[0][1] and grid[1][0] from the 2D list grid=[[10, 20], [30, 40]].",
      "hint_ko": "grid[행][열] 순서로 대괄호를 두 번 쓰며, 행과 열 번호 모두 0부터 시작합니다.",
      "hint_en": "Index 2D lists as grid[row][col], where both row and col start at 0.",
      "targetCode": "grid = [[10, 20], [30, 40]]\nprint(grid[0][1], grid[1][0])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "20 30"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "두 번째 행의 첫 번째 열에 들어 있는 값 30이 출력되도록 두 대괄호 빈칸에 알맞은 인덱스 숫자를 채워보세요.",
      "prompt_en": "Fill in the row and column indices so that 30 (second row, first column) is printed.",
      "hint_ko": "0부터 세므로 두 번째 행은 인덱스 1, 첫 번째 열은 인덱스 0입니다.",
      "hint_en": "With 0-based indexing, the second row is 1 and the first column is 0.",
      "templateCode": "grid = [[10, 20], [30, 40]]\nprint(grid[§][§])",
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
      "id": 3,
      "step": 3,
      "type": "block",
      "prompt_ko": "grid[0][1] 값을 9로 수정한 뒤, 전체 행의 개수(len(grid))와 첫 번째 행(grid[0])을 출력해보세요.",
      "prompt_en": "Update grid[0][1] to 9, then print len(grid) and grid[0].",
      "hint_ko": "2차원 리스트에서 len(grid)는 안쪽 행 리스트가 몇 줄인지(행 개수)를 알려줍니다.",
      "hint_en": "len(grid) returns the number of row lists inside the 2D list.",
      "targetCode": "grid = [[1, 2], [3, 4]]\ngrid[0][1] = 9\nprint(len(grid), grid[0])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2 [1, 9]"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "첫째 행의 둘째 칸을 위에 준비된 표시 변수로 바꾸고, 전체 행 개수와 첫째 행 리스트를 출력하도록 빈칸을 채워보세요.",
      "prompt_en": "Assign the prepared variable to grid[0][1] and print the row count and first row.",
      "hint_ko": "첫 빈칸에는 변수 mark를, 둘째 빈칸에는 길이를 구하는 내장 함수 len을 넣으세요.",
      "hint_en": "Put mark in the first blank and len in the second blank.",
      "templateCode": "mark = 7\ngrid = [[1, 2], [3, 4]]\ngrid[0][1] = §§§§\nprint(§§§(grid), grid[0])",
      "targetCode": "mark = 7\ngrid = [[1, 2], [3, 4]]\ngrid[0][1] = mark\nprint(len(grid), grid[0])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "2 [1, 7]"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "prompt_ko": "for row in grid: 반복문으로 각 행 리스트를 하나씩 꺼내 행별 합계(sum(row))를 줄마다 출력해보세요.",
      "prompt_en": "Loop over each row in grid and print sum(row) on each line.",
      "hint_ko": "2차원 리스트를 for row in grid:로 순회하면 row에 각 행(1차원 리스트)이 차례대로 담깁니다.",
      "hint_en": "Iterating with for row in grid: binds row to each inner list in turn.",
      "targetCode": "grid = [[10, 20, 30], [5, 15, 25]]\nfor row in grid:\n    print(sum(row))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "60\n45"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "각 행을 순회하면서 행마다 가장 큰 점수만 뽑아 total에 누적한 뒤 총합을 출력하도록 빈칸을 채워보세요.",
      "prompt_en": "Fill in the loop keyword and built-in function to sum the highest score from each row.",
      "hint_ko": "시퀀스 순회 키워드는 in이며, 각 행의 최댓값은 max(row)로 구합니다.",
      "hint_en": "Use in for iteration and max(row) to get the largest value in each row.",
      "templateCode": "scores = [[70, 90], [85, 80], [60, 95]]\ntotal = 0\nfor row §§ scores:\n    total += §§§(row)\nprint(total)",
      "targetCode": "scores = [[70, 90], [85, 80], [60, 95]]\ntotal = 0\nfor row in scores:\n    total += max(row)\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "270"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "prompt_ko": "중첩 for문으로 모든 행(r)과 열(c)을 돌면서 grid[r][c]가 0보다 큰 칸의 개수를 세어 출력해보세요.",
      "prompt_en": "Use nested index loops over r and c to count how many cells in grid are greater than 0.",
      "hint_ko": "바깥 루프는 range(len(grid)), 안쪽 루프는 range(len(grid[r]))로 돌면 모든 격자 칸을 방문합니다.",
      "hint_en": "Use range(len(grid)) for rows and range(len(grid[r])) for columns.",
      "targetCode": "grid = [[1, 0, 2], [0, 3, 4]]\ncnt = 0\nfor r in range(len(grid)):\n    for c in range(len(grid[r])):\n        if grid[r][c] > 0:\n            cnt += 1\nprint(cnt)",
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
      "prompt_ko": "3x3 정사각 격자의 왼쪽 위부터 오른쪽 아래 대각선(행과 열 번호가 같은 칸) 합을 구해 출력해보세요. (출력 예: Diag:15)",
      "prompt_en": "Fill in the two functions to sum the main diagonal mat[i][i] and print Diag:15.",
      "hint_ko": "행 개수만큼 인덱스를 생성하려면 range(len(mat))를 사용합니다.",
      "hint_en": "Use range(len(mat)) to iterate i through 0, 1, 2.",
      "templateCode": "mat = [[2, 1, 0], [0, 5, 1], [1, 0, 8]]\ndiag = 0\nfor i in §§§§§(§§§(mat)):\n    diag += mat[i][i]\nprint(f\"Diag:{diag}\")",
      "targetCode": "mat = [[2, 1, 0], [0, 5, 1], [1, 0, 8]]\ndiag = 0\nfor i in range(len(mat)):\n    diag += mat[i][i]\nprint(f\"Diag:{diag}\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Diag:15"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "block",
      "prompt_ko": "2차원 격자 안에 target 값이 몇 번 등장하는지 세어 반환하는 count_cell(grid, target) 함수를 완성해보세요.",
      "prompt_en": "Complete count_cell(grid, target) using nested for loops to count occurrences of target in grid.",
      "hint_ko": "for row in grid: 안에 for item in row:를 중첩하면 모든 칸의 값을 하나씩 검사할 수 있습니다.",
      "hint_en": "Nest for item in row: inside for row in grid: to inspect every element.",
      "targetCode": "def count_cell(grid, target):\n    hits = 0\n    for row in grid:\n        for item in row:\n            if item == target:\n                hits += 1\n    return hits\n\nm = [[1, 2, 1], [3, 1, 4]]\nprint(count_cell(m, 1))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "2차원 격자를 속성으로 가진 Board 클래스에서 모든 행의 합계를 더해 반환하도록 두 빈칸을 채워보세요.",
      "prompt_en": "Fill in the instance reference and row summation function inside Board.total().",
      "hint_ko": "인스턴스 자신의 속성 접근은 self.grid이며, 각 행의 합은 sum(row)로 계산합니다.",
      "hint_en": "Access the instance attribute via self.grid and sum each row with sum(row).",
      "templateCode": "class Board:\n    def __init__(self):\n        self.grid = [[1, 2], [3, 4]]\n\n    def total(self):\n        acc = 0\n        for row in §§§§.grid:\n            acc += §§§(row)\n        return acc\n\nb = Board()\nb.grid[0][0] = 10\nprint(b.total())",
      "targetCode": "class Board:\n    def __init__(self):\n        self.grid = [[1, 2], [3, 4]]\n\n    def total(self):\n        acc = 0\n        for row in self.grid:\n            acc += sum(row)\n        return acc\n\nb = Board()\nb.grid[0][0] = 10\nprint(b.total())",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "19"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "2행 3열 격자에서 행과 열 인덱스 순서가 뒤바뀌어 IndexError가 나는 버그를 고쳐 전체 합계를 출력해보세요.",
      "prompt_en": "Fix the swapped row and column indices causing IndexError on the 2x3 grid.",
      "hint_ko": "바깥 변수 r이 행(0~1), 안쪽 변수 c가 열(0~2)이므로 대괄호 순서를 행 먼저, 열 나중으로 적어야 합니다.",
      "hint_en": "Index the cell with row r first and column c second: grid[r][c].",
      "templateCode": "grid = [[1, 2, 3], [4, 5, 6]]\ntotal = 0\nfor r in range(len(grid)):\n    for c in range(len(grid[0])):\n        total += grid[c][r]\nprint(total)",
      "targetCode": "grid = [[1, 2, 3], [4, 5, 6]]\ntotal = 0\nfor r in range(len(grid)):\n    for c in range(len(grid[0])):\n        total += grid[r][c]\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "21"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "두 행으로 2차원 리스트를 만든 코드 아래에 한 줄을 추가하여 0번 행 2번 열 값과 1번 행 0번 열 값의 합을 출력해보세요.",
      "prompt_en": "Add one line below to print the sum of row 0 col 2 and row 1 col 0 of grid.",
      "hint_ko": "마지막 줄에 print(grid[0][2] + grid[1][0])을 입력해 30 + 40의 결과 70을 출력하세요.",
      "hint_en": "Write print(grid[0][2] + grid[1][0]) on the last line.",
      "templateCode": "r1 = [10, 20, 30]\nr2 = [40, 50, 60]\ngrid = [r1, r2]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "r1 = [10, 20, 30]\nr2 = [40, 50, 60]\ngrid = [r1, r2]\nprint(grid[0][2] + grid[1][0])",
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
      "prompt_ko": "다음 2차원 리스트 코드의 실행 결과로 알맞은 것을 선택해보세요.",
      "prompt_en": "Select the exact output of the following 2D list code.",
      "hint_ko": "grid[1][0]은 10으로 바뀌고, 반복문은 각 행의 1번 열(2, 4, 6)만 모두 더하므로 12가 됩니다.",
      "hint_en": "grid[1][0] becomes 10, while the loop sums column 1 across all three rows: 2 + 4 + 6 = 12.",
      "targetCode": "grid = [[1, 2], [3, 4], [5, 6]]\ngrid[1][0] = 10\nres = 0\nfor r in range(len(grid)):\n    res += grid[r][1]\nprint(grid[1][0], res)",
      "choices": [
        "10 12",
        "10 19",
        "3 12",
        "10 14"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "10 12"
        }
      ]
    }
  ]
};
