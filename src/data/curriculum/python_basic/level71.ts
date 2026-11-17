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
  "totalQuestions": 15,
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 2차원 리스트에서 grid[행][열] 대괄호 두 번으로 특정 칸의 값을 꺼내 출력해보세요.",
      "prompt_en": "[Block] Use double-bracket indexing grid[row][col] to print elements from a 2D list.",
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
      "prompt_ko": "[빈칸 채우기] 두 번째 행의 첫 번째 열에 들어 있는 값 30이 출력되도록 행·열 인덱스를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the row and column indices so that 30 (second row, first column) is printed.",
      "hint_ko": "인덱스는 0부터 시작하므로 두 번째 행 번호 1을 앞 대괄호에, 첫 번째 열 번호 0을 뒤 대괄호에 넣으세요.",
      "hint_en": "Using 0-based indexing, put 1 in the first bracket and 0 in the second.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] grid[0][1] = 9로 특정 칸을 수정하고 len(grid)로 전체 행 개수를 출력해보세요.",
      "prompt_en": "[Block] Update grid[0][1] = 9 in place and print the row count len(grid) and first row.",
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
      "prompt_ko": "[빈칸 채우기] 첫째 행 둘째 칸을 변수 mark로 바꾸고, 전체 행 개수와 첫째 행을 출력해보세요.",
      "prompt_en": "[Fill Blank] Assign mark to grid[0][1] and print the row count and first row.",
      "hint_ko": "첫 빈칸에는 변수 이름 mark를 대입하고, 둘째 빈칸에는 길이를 구하는 내장 함수 len을 적으세요.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] for row in grid:로 각 행을 순회하며 sum(row)로 행별 합계를 출력해보세요.",
      "prompt_en": "[Block] Iterate over each row with for row in grid: and print sum(row).",
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
      "prompt_ko": "[빈칸 채우기] 각 행을 순회하면서 행마다 가장 큰 점수만 뽑아 total에 누적해 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the loop keyword and built-in function to sum the highest score from each row.",
      "hint_ko": "첫 빈칸은 순회 키워드 in을, 둘째 빈칸은 최댓값을 구하는 내장 함수 max를 쓰세요.",
      "hint_en": "Use in in the first blank and max in the second blank.",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 중첩 for문으로 모든 행 번호(r)와 열 번호(c)를 돌며 양수 칸의 개수를 세어보세요.",
      "prompt_en": "[Block] Use nested loops over row r and column c to count positive cells in grid.",
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
      "prompt_ko": "[빈칸 채우기] 3x3 격자의 대각선(mat[i][i]) 원소 중 양수만 골라 합을 출력해보세요. (출력 예: Diag:15)",
      "prompt_en": "[Fill Blank] Fill in range and len to sum positive main diagonal elements mat[i][i].",
      "hint_ko": "연속된 정수 범위를 만드는 range 함수 안에 격자 길이를 구하는 len 함수를 넣으세요.",
      "hint_en": "Wrap len(mat) inside range(...).",
      "templateCode": "mat = [[2, -1, 0], [0, 5, 1], [1, 0, 8]]\ndiag = 0\nfor i in §§§§§(§§§(mat)):\n    if mat[i][i] > 0:\n        diag += mat[i][i]\nprint(f\"Diag:{diag}\")",
      "targetCode": "mat = [[2, -1, 0], [0, 5, 1], [1, 0, 8]]\ndiag = 0\nfor i in range(len(mat)):\n    if mat[i][i] > 0:\n        diag += mat[i][i]\nprint(f\"Diag:{diag}\")",
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
      "kind": "standard",
      "prompt_ko": "[블록 조립] 함수 안에서 중첩 for문으로 2차원 격자의 모든 원소를 꺼내 target 개수를 세어보세요.",
      "prompt_en": "[Block] Nest for item in row: inside for row in grid: in count_cell to count matching elements.",
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
      "prompt_ko": "[빈칸 채우기] 2차원 격자에서 양수 원소만 모두 더해 반환하는 함수 sum_positive를 완성해보세요.",
      "prompt_en": "[Fill Blank] Complete sum_positive to iterate over grid rows and return the sum of positive elements.",
      "hint_ko": "바깥 for문에서는 매개변수 grid를 순회하고, 마지막 줄에서는 return으로 누적합 acc를 반환하세요.",
      "hint_en": "Iterate over grid on line 3 and return acc on line 7.",
      "templateCode": "def sum_positive(grid):\n    acc = 0\n    for row in §§§§:\n        for val in row:\n            if val > 0:\n                acc += val\n    §§§§§§ acc\n\nb = [[10, -2], [3, 4]]\nprint(sum_positive(b))",
      "targetCode": "def sum_positive(grid):\n    acc = 0\n    for row in grid:\n        for val in row:\n            if val > 0:\n                acc += val\n    return acc\n\nb = [[10, -2], [3, 4]]\nprint(sum_positive(b))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "17"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 2행 3열 격자에서 행과 열 인덱스 순서가 뒤바뀌어 오류가 나는 버그를 고쳐 합계를 출력해보세요.",
      "prompt_en": "[Fix Bug] Fix the swapped row and column indices causing IndexError on the 2x3 grid.",
      "hint_ko": "바깥 변수 r이 행 번호(0~1), 안쪽 변수 c가 열 번호(0~2)이므로 grid[r][c] 순서로 참조하세요.",
      "hint_en": "Place the row index r before the column index c: grid[r][c].",
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
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 첫 번째 행의 두 번째 열(grid[0][1])을 99로 수정하려다 1부터 센 인덱스를 쓴 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the 1-based indexing bug so the first row, second column (grid[0][1]) is updated to 99.",
      "hint_ko": "0번부터 시작하는 인덱스를 사용해야 하므로 첫째 행 둘째 열은 grid[1][2]가 아니라 grid[0][1]입니다.",
      "hint_en": "Change grid[1][2] = 99 to 0-based grid[0][1] = 99.",
      "templateCode": "grid = [[10, 20], [30, 40]]\ngrid[1][2] = 99\nprint(grid[0][1])",
      "targetCode": "grid = [[10, 20], [30, 40]]\ngrid[0][1] = 99\nprint(grid[0][1])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "99"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 0번 행 2번 열 값과 1번 행 0번 열 값을 더한 결과를 변수 ans에 저장하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Add grid[0][2] and grid[1][0] and assign the sum to ans.",
      "hint_ko": "ans = grid[0][2] + grid[1][0] 형태로 두 칸의 값을 더해 변수 ans에 대입하세요.",
      "hint_en": "Write ans = grid[0][2] + grid[1][0].",
      "templateCode": "r1 = [10, 20, 30]\nr2 = [40, 50, 60]\ngrid = [r1, r2]\n§§§§§§§§§§§§§§§§§§§§§§§§§§§§§\nprint(ans)",
      "targetCode": "r1 = [10, 20, 30]\nr2 = [40, 50, 60]\ngrid = [r1, r2]\nans = grid[0][2] + grid[1][0]\nprint(ans)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "70"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 2차원 리스트 grid의 1번 행 0번 열 값을 30으로 변경하는 한 줄을 완성해보세요.",
      "prompt_en": "[Complete Line] Update row 1, column 0 of grid to 30.",
      "hint_ko": "grid[1][0] = 30 형태로 대괄호 두 번을 사용해 값을 대입하세요.",
      "hint_en": "Write grid[1][0] = 30.",
      "templateCode": "grid = [[1, 2], [3, 4]]\n§§§§§§§§§§§§§§§\nprint(grid[1])",
      "targetCode": "grid = [[1, 2], [3, 4]]\ngrid[1][0] = 30\nprint(grid[1])",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[30, 4]"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 2차원 리스트 수정 및 열 합산 코드의 실행 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output of the following 2D list code.",
      "hint_ko": "grid[1][0]이 10으로 바뀌지만, 반복문에서는 모든 행의 1번 열(2, 4, 6)만 더하고 있는지 확인하세요.",
      "hint_en": "Notice that grid[1][0] becomes 10, while the loop sums column index 1 (2 + 4 + 6 = 12).",
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
