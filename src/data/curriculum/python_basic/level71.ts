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
      "prompt_ko": "2차원 리스트는 리스트 안에 또 다른 리스트를 담은 격자 구조로, grid[행][열]처럼 대괄호를 두 번 연속 써서 특정 위치의 값을 꺼냅니다.",
      "prompt_en": "A 2D list stores inner lists as rows, and double-bracket indexing grid[row][col] accesses the element at a specific row and column.",
      "hint_ko": "앞쪽 대괄호에는 가로줄(행) 번호를, 뒤쪽 대괄호에는 세로칸(열) 번호를 적으며 둘 다 0번부터 시작합니다.",
      "hint_en": "The first bracket selects the outer row index and the second selects the inner column index, both starting at 0.",
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
      "hint_ko": "인덱스는 0부터 시작하므로 두 번째 가로줄(행) 번호를 앞 대괄호에, 첫 번째 세로칸(열) 번호를 뒤 대괄호에 넣으세요.",
      "hint_en": "Using 0-based indexing, put the second row's index in the first bracket and the first column's index in the second.",
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
      "prompt_ko": "grid[행][열] = 값 형태로 특정 칸의 원소를 직접 수정할 수 있으며, len(grid)는 전체 행(안쪽 리스트)의 개수를 반환합니다.",
      "prompt_en": "Assigning to grid[row][col] updates a single cell in place, while len(grid) returns the number of row lists.",
      "hint_ko": "grid[0]처럼 인덱스를 하나만 쓰면 첫 번째 행 리스트 전체를 가리킵니다.",
      "hint_en": "Using a single index like grid[0] refers to the entire first inner row list.",
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
      "hint_ko": "첫 빈칸에는 맨 윗줄에 준비된 변수 이름을 대입하고, 둘째 빈칸에는 '길이(length)'의 앞 세 글자를 딴 내장 함수를 적으세요.",
      "hint_en": "Put the variable name defined on line 1 in the first blank, and the 3-letter function abbreviated from 'length' in the second.",
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
      "prompt_ko": "for row in grid:처럼 2차원 리스트를 바로 순회하면 반복 변수에 각 행(1차원 리스트)이 차례대로 담겨 sum(row)로 행별 합계를 구할 수 있습니다.",
      "prompt_en": "Iterating directly with for row in grid: yields each inner row list one by one, making row-level calculations like sum(row) simple.",
      "hint_ko": "반복 변수 row 자체가 숫자 리스트이므로 내장 함수 sum()에 곧바로 전달할 수 있습니다.",
      "hint_en": "Because row is already a list of numbers on each turn, you can pass it directly into sum().",
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
      "hint_ko": "첫 빈칸은 '~ 안에'를 뜻하는 2글자 순회 키워드를, 둘째 빈칸은 '최댓값(maximum)'의 앞 세 글자를 딴 내장 함수를 쓰세요.",
      "hint_en": "Use the 2-letter iteration keyword meaning 'inside' first, and the 3-letter built-in abbreviated from 'maximum' second.",
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
      "prompt_ko": "바깥 for문으로 행 번호(r)를, 안쪽 for문으로 열 번호(c)를 순회하는 중첩 반복문을 사용하면 2차원 격자의 모든 칸(grid[r][c])을 빠짐없이 검사할 수 있습니다.",
      "prompt_en": "Nested loops over row index r and column index c visit every cell grid[r][c] in a 2D list to test and count matching values.",
      "hint_ko": "range(len(grid))는 행 인덱스 범위를, range(len(grid[r]))는 해당 행의 열 인덱스 범위를 만들어 줍니다.",
      "hint_en": "range(len(grid)) generates row indices while range(len(grid[r])) generates column indices for each row.",
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
      "hint_ko": "연속된 정수 '범위'를 만드는 5글자 내장 함수 안에, 격자의 '길이(length)'를 구하는 앞 세 글자 함수를 넣어 인덱스를 생성하세요.",
      "hint_en": "Wrap the 3-letter function from 'length' inside the 5-letter integer sequence 'span/interval' function.",
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
      "prompt_ko": "함수 안에서 for row in grid: 안에 for item in row:를 중첩하면 인덱스 번호 없이도 2차원 격자의 모든 원소를 하나씩 꺼내 비교할 수 있습니다.",
      "prompt_en": "Nesting for item in row: inside for row in grid: lets a function inspect every element of a 2D list directly without index numbers.",
      "hint_ko": "모든 행과 열의 탐색이 끝난 뒤 바깥 반복문과 같은 들여쓰기 위치에서 누적된 개수를 return으로 반환합니다.",
      "hint_en": "Return the accumulated count after both nested loops finish, aligned with the outer loop indentation.",
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
      "hint_ko": "메서드 안에서 인스턴스 '자기 자신'을 뜻하는 4글자 매개변수로 속성에 접근하고, '합계(summation)'의 앞 세 글자 함수로 각 행을 더하세요.",
      "hint_en": "Access the attribute via the 4-letter 'oneself' instance parameter, and add each row with the 3-letter summation built-in.",
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
      "hint_ko": "바깥 변수 r이 행 번호(0~1), 안쪽 변수 c가 열 번호(0~2)를 돌고 있는데, 격자 대괄호의 행·열 참조 순서가 거꾸로 적혀 있습니다.",
      "hint_en": "The outer loop variable tracks rows (0..1) and the inner tracks columns (0..2), so place the row index before the column index.",
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
      "hint_ko": "격자 변수에 [행][열] 대괄호 인덱싱을 두 번씩 써서 지정된 두 칸의 값을 꺼내 더한 뒤 출력해보세요.",
      "hint_en": "Use double-bracket [row][col] indexing on the grid for both coordinates, add the two values, and print the result.",
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
      "hint_ko": "어느 행·열 칸이 수정되는지 먼저 확인한 뒤, 반복문에서 열 번호가 몇 번으로 고정된 채 모든 행을 더하고 있는지 주의 깊게 살펴보세요.",
      "hint_en": "Check which row and column cell is modified first, then notice which fixed column index the loop sums across all rows.",
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