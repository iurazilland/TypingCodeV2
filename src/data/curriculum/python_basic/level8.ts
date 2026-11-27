import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_8: PracticeRound = {
  "id": "py-basic-r8",
  "language": "python",
  "trackId": "python",
  "moduleId": "py-basic",
  "roundNumber": 8,
  "title_ko": "특수문자 이스케이프 (\\n, \\t, \\\", \\\\)",
  "title_en": "Escape Characters (\\n, \\t, \\\", \\\\)",
  "description_ko": "줄바꿈(\\n), 탭 간격(\\t), 따옴표 이스케이프(\\\", \\'), 역슬래시(\\\\) 특수문자를 익힙니다.",
  "description_en": "Learn escape sequences for newline (\\n), tab (\\t), quotes (\\\", \\'), and backslash (\\\\).",
  "totalQuestions": 15,
  "unlockedBlocks": [
    "print"
  ],
  "questions": [
    {
      "id": 1,
      "step": 1,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 줄바꿈 이스케이프 문자를 사용해 한 번의 출력으로 두 단어를 두 줄에 출력해보세요.",
      "prompt_en": "[Block] Use the newline escape character in a single print() call to display the two words on two lines.",
      "hint_ko": "문자열 안에 \\n을 넣으면 print()를 한 번만 써도 그 위치에서 줄이 바뀝니다.",
      "hint_en": "Placing \\n inside a string starts a new line at that position within a single print() call.",
      "targetCode": "print(\"Hello\\nWorld\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Hello\nWorld"
        }
      ]
    },
    {
      "id": 2,
      "step": 2,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 빈칸에 줄바꿈 제어 문자를 채워 두 알파벳이 위아래 두 줄로 출력되게 해보세요.",
      "prompt_en": "[Fill Blank] Fill in the newline escape sequence so the two letters print on separate lines.",
      "hint_ko": "역슬래시(\\) 뒤에 줄바꿈(new line)을 뜻하는 n을 붙여 \\n을 입력합니다.",
      "hint_en": "Type a backslash followed by the lowercase letter for newline.",
      "templateCode": "print(\"A§§§B\")",
      "targetCode": "print(\"A\\nB\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "A\nB"
        }
      ]
    },
    {
      "id": 3,
      "step": 3,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 탭 간격 이스케이프 문자로 열을 맞춘 헤더와 데이터를 두 줄로 출력해보세요.",
      "prompt_en": "[Block] Use the tab escape character to print the aligned header and row on two lines.",
      "hint_ko": "\\t는 항목 사이에 일정한 탭 간격을 띄워 표처럼 열을 맞춰 정렬해줍니다.",
      "hint_en": "The \\t escape inserts a horizontal tab space to align items in columns.",
      "targetCode": "print(\"Name\\tScore\")\nprint(\"Alice\\t100\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Name\tScore\nAlice\t100"
        }
      ]
    },
    {
      "id": 4,
      "step": 4,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 빈칸에 탭 제어 문자를 채워 두 항목 사이에 탭 간격이 들어가게 해보세요.",
      "prompt_en": "[Fill Blank] Fill in the tab escape sequence to insert a tab space between the two items.",
      "hint_ko": "역슬래시(\\) 뒤에 탭(tab)을 뜻하는 t를 붙여 \\t를 입력합니다.",
      "hint_en": "Type a backslash followed by the lowercase first letter of tab.",
      "templateCode": "print(\"ID§§§Pt\")",
      "targetCode": "print(\"ID\\tPt\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "ID\tPt"
        }
      ]
    },
    {
      "id": 5,
      "step": 5,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 큰따옴표 이스케이프를 사용해 문장 안의 큰따옴표까지 화면에 그대로 출력해보세요.",
      "prompt_en": "[Block] Use escaped double quotes so the inner double quotes are printed on the screen.",
      "hint_ko": "따옴표 바로 앞에 역슬래시(\\)를 붙이면 문자열을 닫는 기호가 아니라 글자 그대로 출력됩니다.",
      "hint_en": "Prefixing a quote with a backslash (\\) prints the quote character literally instead of ending the string.",
      "targetCode": "print(\"Say \\\"Hi\\\"\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Say \"Hi\""
        }
      ]
    },
    {
      "id": 6,
      "step": 6,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 빈칸에 큰따옴표 이스케이프 기호를 채워 문장 안의 큰따옴표가 출력되게 해보세요.",
      "prompt_en": "[Fill Blank] Fill in the escaped double quote so the quoted word is printed with double quotes.",
      "hint_ko": "큰따옴표 문자열 안에서 큰따옴표를 출력하려면 역슬래시와 큰따옴표를 함께 적습니다.",
      "hint_en": "Write a backslash immediately followed by a double quote.",
      "templateCode": "print(\"He said §§§OK\\\"\")",
      "targetCode": "print(\"He said \\\"OK\\\"\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "He said \"OK\""
        }
      ]
    },
    {
      "id": 7,
      "step": 7,
      "type": "block",
      "kind": "standard",
      "prompt_ko": "[블록 조립] 역슬래시 이스케이프로 폴더 경로를 출력하고 그 아래에 등호 8개 구분선을 출력해보세요.",
      "prompt_en": "[Block] Print the folder path using an escaped backslash and an 8-character equals divider below it.",
      "hint_ko": "역슬래시 기호 자체를 한 개 출력하려면 문자열 안에 역슬래시를 두 번(\\\\) 연속 적어야 합니다.",
      "hint_en": "Write two backslashes (\\\\) inside a string to output a single literal backslash.",
      "targetCode": "print(\"C:\\\\work\")\nprint(\"=\" * 8)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "C:\\work\n========"
        }
      ]
    },
    {
      "id": 8,
      "step": 8,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 빈칸에 역슬래시 한 개를 출력하는 이스케이프 기호를 채워 출력 예제와 같이 출력해보세요.",
      "prompt_en": "[Fill Blank] Fill in the escape sequence that prints a single backslash between A and B.",
      "hint_ko": "역슬래시 문자 자체를 화면에 나타내려면 역슬래시 두 개를 나란히 입력합니다.",
      "hint_en": "Type two backslashes side by side to output one literal backslash.",
      "templateCode": "print(\"A§§§B\", 5 ** 2)",
      "targetCode": "print(\"A\\\\B\", 5 ** 2)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "A\\B 25"
        }
      ]
    },
    {
      "id": 9,
      "step": 9,
      "type": "typing",
      "kind": "fill_blank",
      "prompt_ko": "[빈칸 채우기] 출력 예제와 같은 상품 가격표가 출력되도록 코드의 빈칸들을 채워보세요.",
      "prompt_en": "[Fill Blank] Fill in the blanks so the item price table matches the output example.",
      "hint_ko": "첫째 줄에는 탭 제어 문자(\\t)를, 둘째 줄에는 문자열 반복 연산자(*)를 차례로 채웁니다.",
      "hint_en": "Fill in the tab escape sequence on line 1 and the string repetition operator on line 2.",
      "templateCode": "print(\"Item§§§Price\")\nprint(\"-\" §§ 12)\nprint(\"Pen\\t\", 500 * 3)",
      "targetCode": "print(\"Item\\tPrice\")\nprint(\"-\" * 12)\nprint(\"Pen\\t\", 500 * 3)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Item\tPrice\n------------\nPen\t 1500"
        }
      ]
    },
    {
      "id": 10,
      "step": 10,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 슬래시 방향이 잘못 적힌 이스케이프 기호를 고쳐 두 항목이 두 줄로 출력되게 해보세요.",
      "prompt_en": "[Fix Bug] Fix the slash direction in the escape sequence so the two items print on two lines.",
      "hint_ko": "줄바꿈 이스케이프 문자는 일반 나눗셈 슬래시(/)가 아니라 역슬래시(\\)를 사용해야 합니다.",
      "hint_en": "Use a backslash (\\) rather than a forward slash (/) for the newline escape character.",
      "templateCode": "print(\"Step 1/nStep 2\")",
      "targetCode": "print(\"Step 1\\nStep 2\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Step 1\nStep 2"
        }
      ]
    },
    {
      "id": 11,
      "step": 11,
      "type": "typing",
      "kind": "fix_bug",
      "prompt_ko": "[틀린 곳 수정] 탭 간격 기호의 오타를 수정해 과목명과 점수 사이에 탭 간격이 적용되게 해보세요.",
      "prompt_en": "[Fix Bug] Fix the tab escape sequence on line 2 so the subject and score are separated by a tab.",
      "hint_ko": "둘째 줄의 /t를 올바른 역슬래시 탭 제어 문자로 고쳐보세요.",
      "hint_en": "Replace /t on line 2 with the backslash tab escape sequence.",
      "templateCode": "print(\"Sub\\tScore\")\nprint(\"Kor/t\", 90 + 5)",
      "targetCode": "print(\"Sub\\tScore\")\nprint(\"Kor\\t\", 90 + 5)",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Sub\tScore\nKor\t 95"
        }
      ]
    },
    {
      "id": 12,
      "step": 12,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 첫째 줄 헤더 형식에 맞춰 둘째 줄에 Book과 1500을 탭 간격으로 띄워 출력하는 코드를 작성해보세요.",
      "prompt_en": "[Complete Line] Matching the header on line 1, write line 2 to print Book and 1500 separated by a tab escape.",
      "hint_ko": "첫째 줄처럼 단어와 숫자 사이에 탭 이스케이프 문자를 넣어 print() 문을 완성합니다.",
      "hint_en": "Place the tab escape sequence between Book and 1500 inside print().",
      "templateCode": "print(\"Item\\tPrice\")\n§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "print(\"Item\\tPrice\")\nprint(\"Book\\t1500\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Item\tPrice\nBook\t1500"
        }
      ]
    },
    {
      "id": 13,
      "step": 13,
      "type": "typing",
      "kind": "one_line",
      "prompt_ko": "[한 줄 완성] 둘째 줄에서 이스케이프 문자를 사용해 한 번의 출력으로 경로와 완료 문구를 두 줄에 출력해보세요.",
      "prompt_en": "[Complete Line] Write line 2 using escape characters in a single print() to match the output example.",
      "hint_ko": "역슬래시 출력에는 \\\\를, 줄바꿈에는 \\n을 사용하여 한 줄의 print() 문으로 작성합니다.",
      "hint_en": "Use \\\\ for the literal backslash and \\n for the line break inside print().",
      "templateCode": "print(\"=\" * 6)\n§§§§§§§§§§§§§§§§§§§§§§",
      "targetCode": "print(\"=\" * 6)\nprint(\"C:\\\\py\\nDone\")",
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "======\nC:\\py\nDone"
        }
      ]
    },
    {
      "id": 14,
      "step": 14,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 파이썬 코드를 실행했을 때 출력될 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output when the following Python code runs.",
      "hint_ko": "\\n이 있는 위치에서 줄이 바뀌고, 다음 print()에서 별표가 3번 반복 출력됩니다.",
      "hint_en": "\\n breaks the line, and the second print() repeats the star 3 times.",
      "targetCode": "print(\"Lv.1\\nLv.2\")\nprint(\"*\" * 3)",
      "choices": [
        "Lv.1\nLv.2\n***",
        "Lv.1\\nLv.2\n***",
        "Lv.1 Lv.2\n***",
        "Lv.1\nLv.2 ***"
      ],
      "correctChoiceIndex": 0,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "Lv.1\nLv.2\n***"
        }
      ]
    },
    {
      "id": 15,
      "step": 15,
      "type": "quiz",
      "kind": "predict_output",
      "prompt_ko": "[출력 결과 예측] 다음 파이썬 코드를 실행했을 때 출력될 결과를 선택해보세요.",
      "prompt_en": "[Predict Output] Select the exact output when the following Python code runs.",
      "hint_ko": "\\\\는 역슬래시 한 개(\\)로, \\\"는 큰따옴표(\")로 화면에 출력됩니다.",
      "hint_en": "\\\\ prints a single backslash and \\\" prints a literal double quote.",
      "targetCode": "print(\"A\\\\B\")\nprint(\"\\\"Go\\\"\")",
      "choices": [
        "A\\\\B\n\"Go\"",
        "A\\B\n\"Go\"",
        "A\\B\nGo",
        "AB\n\\\"Go\\\""
      ],
      "correctChoiceIndex": 1,
      "testCases": [
        {
          "id": 1,
          "input": "",
          "expectedOutput": "A\\B\n\"Go\""
        }
      ]
    }
  ]
};
