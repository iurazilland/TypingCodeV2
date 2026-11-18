import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_86: PracticeRound = {
  "id": "py-basic-r86",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 86,
  "title_ko": "86레벨: 2차원 리스트(grid[r][c]) 인덱싱과 중첩 for문 행·열 집계",
  "title_en": "Level 86: 2D Lists (grid[r][c]) & Nested Loop Row/Column Aggregations",
  "description_ko": "리스트 안에 리스트가 들어 있는 2차원 격자(grid[r][c])를 다루고 중첩 반복문으로 행·열·대각선 데이터를 집계합니다.",
  "description_en": "Index and update 2D lists with grid[r][c] and aggregate row, column, and diagonal values using nested loops.",
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
      "prompt_ko": "[블록 조립] 2차원 리스트 grid에서 grid[0][1]과 grid[1][0]의 값을 꺼내 나란히 출력해보세요.",
      "prompt_en": "[Block] Use double brackets grid[0][1] and grid[1][0] to print elements from the 2D list.",
      "hint_ko": "2차원 리스트에서 첫 번째 대괄호는 가로줄(행) 번호, 두 번째 대괄호는 세로칸(열) 번호를 뜻합니다.",
      "hint_en": "In a 2D list, the first bracket selects the row index and the second selects the column index.",
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
      "prompt_ko": "[빈칸 채우기] 2차원 리스트의 두 번째 행(1번), 첫 번째 열(0번) 값을 99로 수정하고 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the double-bracket indexing to update row 1, column 0 of grid to 99.",
      "hint_ko": "변수 이름 뒤에 행 인덱스 [1]과 열 인덱스 [0]을 대괄호 두 개로 연달아 적으세요.",
      "hint_en": "Use two consecutive bracket pairs [1][0] on grid.",
      "templateCode": "grid = [[1, 2], [3, 4]]\n§§§§§§§§§§ = 99\nprint(grid)",
      "targetCode": "grid = [[1, 2], [3, 4]]\ngrid[1][0] = 99\nprint(grid)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[[1, 2], [99, 4]]"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] for row in grid:로 각 행 리스트를 순회하며 sum(row)로 행별 합계를 출력해보세요.",
      "prompt_en": "[Block] Iterate over each row with for row in grid: and print sum(row).",
      "hint_ko": "2차원 리스트를 단일 for문으로 순회하면 반복 변수 row에 각 가로줄 리스트가 통째로 담깁니다.",
      "hint_en": "Looping directly over a 2D list yields each inner row list one by one.",
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
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 각 행에서 가장 큰 숫자만 뽑아 total에 누적하도록 내장 함수를 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the built-in function name to add the largest number from each row to total.",
      "hint_ko": "각 행 리스트 row에서 최댓값을 구하는 세 글자 내장 함수를 호출하세요.",
      "hint_en": "Call the three-letter built-in function that returns the maximum value of row.",
      "templateCode": "scores = [[70, 90], [85, 80], [60, 95]]\ntotal = 0\nfor row in scores:\n    total += §§§(row)\nprint(total)",
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
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 중첩 for문(for row in grid: ➔ for val in row:)으로 짝수 원소의 개수를 세어 출력해보세요.",
      "prompt_en": "[Block] Use nested for loops (for row in grid: and for val in row:) to count even numbers in grid.",
      "hint_ko": "바깥 for문에서 행(row)을 꺼내고 안쪽 for문에서 그 행의 개별 원소(val)를 하나씩 꺼내 조건을 검사합니다.",
      "hint_en": "The outer loop picks each row list, and the inner loop inspects each individual value in that row.",
      "targetCode": "grid = [[2, 5, 8], [1, 4, 7]]\ncnt = 0\nfor row in grid:\n    for val in row:\n        if val % 2 == 0:\n            cnt += 1\nprint(cnt)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3"
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 중첩 반복문으로 2차원 격자의 모든 양수 원소를 합산하도록 안쪽 순회 대상을 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the inner for loop header so val iterates over each element in the current inner list.",
      "hint_ko": "바깥 반복문에서 꺼낸 현재 행 리스트 변수를 안쪽 for문의 in 뒤에 적으세요.",
      "hint_en": "Iterate over the outer loop variable inside the inner loop.",
      "templateCode": "mat = [[3, -1], [0, 7], [-2, 5]]\ntotal = 0\nfor row in mat:\n    for val in §§§:\n        if val > 0:\n            total += val\nprint(total)",
      "targetCode": "mat = [[3, -1], [0, 7], [-2, 5]]\ntotal = 0\nfor row in mat:\n    for val in row:\n        if val > 0:\n            total += val\nprint(total)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "15"
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] for i in range(len(grid)):로 행과 열 인덱스가 같은 대각선 원소 grid[i][i]의 합을 구해보세요.",
      "prompt_en": "[Block] Use for i in range(len(grid)): to sum the main diagonal elements grid[i][i].",
      "hint_ko": "정사각형 격자에서 행 번호와 열 번호가 둘 다 i인 grid[i][i]는 왼쪽 위에서 오른쪽 아래로 이어지는 대각선 칸입니다.",
      "hint_en": "In a square grid, grid[i][i] accesses the main diagonal cells where row and column indices match.",
      "targetCode": "grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\ndiag = 0\nfor i in range(len(grid)):\n    diag += grid[i][i]\nprint(diag)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "15"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 모든 행의 첫 번째 열(0번 열) 값들만 세로로 더해 출력하도록 인덱싱 식을 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the 2D indexing expression inside the loop to sum column 0 across all rows.",
      "hint_ko": "i번째 행의 0번 열을 뜻하도록 grid 뒤에 대괄호 두 개로 인덱스를 지정하세요.",
      "hint_en": "Index row i and column 0 on grid using double brackets.",
      "templateCode": "grid = [[10, 2], [20, 4], [30, 6]]\ncol_sum = 0\nfor i in range(len(grid)):\n    col_sum += §§§§§§§§§§\nprint(col_sum)",
      "targetCode": "grid = [[10, 2], [20, 4], [30, 6]]\ncol_sum = 0\nfor i in range(len(grid)):\n    col_sum += grid[i][0]\nprint(col_sum)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "60"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 함수 안에서 2차원 격자의 좌상단(0, 0) 칸을 보정하고 모든 칸의 합계를 반환하도록 세 빈칸을 채워보세요.",
      "prompt_en": "[Fill Blank] Complete the 2D index access, outer loop target, and row total expression inside total_grid.",
      "hint_ko": "첫 번째 행·첫 번째 열 인덱스 번호와 바깥 루프 대상, 그리고 행 합계 내장 함수를 확인하세요.",
      "hint_en": "Check the 0-based index for the top-left cell, the outer loop target, and sum(row).",
      "templateCode": "def total_grid(grid, bonus):\n    §§§§§§§§§§ += bonus\n    ans = 0\n    for row in §§§§:\n        ans += §§§§§§§§\n    return ans\nm = [[1, 2], [3, 4]]\nprint(total_grid(m, 10))",
      "targetCode": "def total_grid(grid, bonus):\n    grid[0][0] += bonus\n    ans = 0\n    for row in grid:\n        ans += sum(row)\n    return ans\nm = [[1, 2], [3, 4]]\nprint(total_grid(m, 10))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "20"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 2차원 리스트에서 원소를 꺼내려다 대괄호 하나 안에 쉼표로 인덱스를 적어 발생한 에러를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the TypeError caused by writing grid[1, 2] with a comma inside single brackets.",
      "hint_ko": "파이썬 2차원 리스트는 [행, 열]이 아니라 대괄호를 두 번 연속으로 쓰는 [행][열] 문법으로 접근해야 합니다.",
      "hint_en": "Use separate bracket pairs grid[1][2] instead of a comma-separated tuple index.",
      "templateCode": "grid = [[1, 2, 3], [4, 5, 6]]\nprint(grid[1, 2])",
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
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 첫 번째 행(0번)의 세 번째 열(2번) 값인 30을 출력하려다 행과 열 인덱스를 반대로 적은 버그를 고쳐보세요.",
      "prompt_en": "[Fix Bug] Fix the IndexError caused by swapping the row and column indices when accessing 30.",
      "hint_ko": "행이 2개이고 열이 3개인 격자이므로 앞쪽 대괄호에 행 번호 0을, 뒤쪽 대괄호에 열 번호 2를 적어야 합니다.",
      "hint_en": "Put the row index 0 in the first bracket and the column index 2 in the second bracket.",
      "templateCode": "board = [[10, 20, 30], [40, 50, 60]]\nprint(board[2][0])",
      "targetCode": "board = [[10, 20, 30], [40, 50, 60]]\nprint(board[0][2])",
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
      "prompt_ko": "[한 줄 완성] 반복문 안에서 각 행 리스트 row의 합계를 출력하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the indented line inside the loop that prints the sum of row.",
      "hint_ko": "들여쓰기 4칸 위치에서 print()와 sum() 함수를 조합해 row의 합계를 출력하세요.",
      "hint_en": "Write print(sum(row)) indented inside the for loop.",
      "templateCode": "grid = [[1, 3, 5], [2, 4, 6]]\nfor row in grid:\n    §§§§§§§§§§§§§§§",
      "targetCode": "grid = [[1, 3, 5], [2, 4, 6]]\nfor row in grid:\n    print(sum(row))",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "9\n12"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 2차원 리스트 seats의 마지막 행(-1), 마지막 열(-1) 값을 1로 변경하는 한 줄을 작성해보세요.",
      "prompt_en": "[Complete Line] Write the line that sets the last element of the last row in seats to 1.",
      "hint_ko": "음수 인덱스 [-1][-1]을 사용해 오른쪽 맨 아래 칸에 1을 대입하세요.",
      "hint_en": "Assign 1 to seats[-1][-1].",
      "templateCode": "seats = [[0, 0], [0, 0]]\n§§§§§§§§§§§§§§§§§\nprint(seats)",
      "targetCode": "seats = [[0, 0], [0, 0]]\nseats[-1][-1] = 1\nprint(seats)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "[[0, 0], [0, 1]]"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 2차원 리스트의 대각선 원소와 마지막 열 원소를 각각 순회해 더한 출력 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the output of the code summing diagonal elements and last-column elements.",
      "hint_ko": "i가 0, 1, 2일 때 m[i][i]는 (1, 5, 9)이고 m[i][-1]은 각 행의 맨 끝 값(3, 6, 9)입니다.",
      "hint_en": "Trace m[i][i] (1 + 5 + 9) and m[i][-1] (3 + 6 + 9) across the three rows.",
      "targetCode": "m = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nd = 0\nlast_col = 0\nfor i in range(len(m)):\n    d += m[i][i]\n    last_col += m[i][-1]\nprint(d, last_col)",
      "choices": [
        "15 18",
        "15 15",
        "12 18",
        "18 15"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "15 18"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 중첩 반복문 안에서 10 이상인 원소만 골라 합계와 개수를 구한 출력 결과를 골라보세요.",
      "prompt_en": "[Predict Output] Select the output when filtering cells >= 10 across a 2D list.",
      "hint_ko": "세 행에서 10 이상인 숫자는 12, 10, 15 총 3개이며 이들의 합이 얼마인지 계산해보세요.",
      "hint_en": "Identify the values >= 10 across all rows (12, 10, and 15) to find their count and sum.",
      "targetCode": "grid = [[5, 12], [10, 3], [8, 15]]\ncnt = 0\ntotal = 0\nfor row in grid:\n    for v in row:\n        if v >= 10:\n            cnt += 1\n            total += v\nprint(cnt, total)",
      "choices": [
        "3 37",
        "3 45",
        "2 27",
        "4 45"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "3 37"
        }
      ]
    }
  ]
};
