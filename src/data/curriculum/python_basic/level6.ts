import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 6레벨: 특수문자 이스케이프(\n, \t, \", \\) (13단계)
// - [1~10단계] 블록 ➔ 타이핑 1:1 교차 5쌍 (짝수 타이핑 스포일러 제로)
// - [11단계] 틀린 곳 수정 (fix_bug)
// - [12단계] 예제 아래 한 줄 추가 작성 (one_line)
// - [13단계] 출력 결과 예측 선택 (predict_output)
// ============================================================================
export const PYTHON_LEVEL_6: PracticeRound = {
  id: 'py-basic-r6',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 6,
  title_ko: '6레벨: 특수문자 이스케이프(\\n, \\t)',
  title_en: 'Level 6: Escape Characters (\\n, \\t)',
  totalQuestions: 13,
  unlockedBlocks: ['print'],
  questions: [
    // ------------------------------------------------------------------------
    // 페어 1: 줄바꿈 이스케이프(\n)
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      kind: 'standard',
      prompt_ko: '문자열 안에 줄바꿈 이스케이프 문자(\\n)를 넣으면 한 번의 print() 호출로도 그 위치에서 줄을 바꾸어 출력할 수 있습니다. 블록의 문자열을 따라 입력해보세요.',
      prompt_en: 'Inserting the newline escape character (\\n) inside a string breaks the line at that position within a single print() call. Trace the block code.',
      hint_ko: '역슬래시(\\)와 소문자 n을 붙여 쓰면 화면에는 글자 대신 줄바꿈으로 나타납니다.',
      hint_en: 'A backslash (\\) followed by n starts a new line instead of printing literal characters.',
      targetCode: 'print("Hello\\nWorld")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Hello\nWorld',
        },
      ],
    },
    {
      id: 2,
      step: 2,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸을 채워 한 번의 출력으로 Python과 Code가 위아래 두 줄로 나뉘어 출력되도록 해보세요.',
      prompt_en: 'Fill in the blank so Python and Code are printed on two separate lines.',
      hint_ko: '역슬래시(\\) 뒤에 "새 줄(new line)"의 첫 알파벳을 붙인 이스케이프 문자를 사용합니다.',
      hint_en: 'Combine a backslash (\\) with the first letter of "new line".',
      templateCode: 'print("Python§§Code")',
      targetCode: 'print("Python\\nCode")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Python\nCode',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 페어 2: 탭 간격 이스케이프(\t)
    // ------------------------------------------------------------------------
    {
      id: 3,
      step: 3,
      type: 'block',
      kind: 'standard',
      prompt_ko: '문자열 안에 탭 이스케이프 문자(\\t)를 넣으면 키보드의 Tab 키를 누른 것처럼 넓은 간격을 띄워 정렬할 수 있습니다. 블록의 문자열을 따라 입력해보세요.',
      prompt_en: 'Inserting the tab escape character (\\t) inside a string adds a horizontal tab space, just like pressing the Tab key. Trace the block code.',
      hint_ko: '역슬래시(\\)와 소문자 t를 붙여 쓰면 두 단어 사이에 일정한 탭 간격이 벌어집니다.',
      hint_en: 'A backslash (\\) followed by t inserts a tab gap between the two words.',
      targetCode: 'print("Name\\tScore")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Name\tScore',
        },
      ],
    },
    {
      id: 4,
      step: 4,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸을 채워 Lv1과 100 사이에 일정한 탭 간격이 벌어지도록 출력해보세요.',
      prompt_en: 'Fill in the blank to insert a tab space between Lv1 and 100.',
      hint_ko: '역슬래시(\\) 뒤에 "탭(tab)"의 첫 알파벳을 붙인 이스케이프 문자를 사용합니다.',
      hint_en: 'Combine a backslash (\\) with the first letter of "tab".',
      templateCode: 'print("Lv1§§100")',
      targetCode: 'print("Lv1\\t100")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Lv1\t100',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 페어 3: 따옴표 이스케이프(\')
    // ------------------------------------------------------------------------
    {
      id: 5,
      step: 5,
      type: 'block',
      kind: 'standard',
      prompt_ko: "작은따옴표('') 문자열 안에서 작은따옴표를 글자로 넣어야 할 때는 앞에 역슬래시를 붙인 \\' 이스케이프 문자를 사용합니다. 블록의 코드를 따라 입력해보세요.",
      prompt_en: "To include an apostrophe inside a single-quoted ('') string without ending it early, prefix it with a backslash (\\'). Trace the block code.",
      hint_ko: '역슬래시 뒤의 따옴표는 문자열을 닫는 기호가 아니라 일반 글자로 취급됩니다.',
      hint_en: 'The backslash tells Python to treat the quote as a literal character rather than the end of the string.',
      targetCode: "print('It\\'s')",
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: "It's",
        },
      ],
    },
    {
      id: 6,
      step: 6,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: "빈칸을 채워 바깥 따옴표가 중간에 끊기지 않고 Let's go가 출력되도록 해보세요.",
      prompt_en: "Fill in the blank so the string does not break early and prints Let's go.",
      hint_ko: "작은따옴표 문자열 안에 작은따옴표를 글자로 넣으려면 역슬래시를 붙인 \\'를 빈칸에 입력하세요.",
      hint_en: "Type \\' in the blank to escape the apostrophe inside single quotes.",
      templateCode: "print('Let§§s go')",
      targetCode: "print('Let\\'s go')",
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: "Let's go",
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 페어 4: 역슬래시 자체 출력(\\)
    // ------------------------------------------------------------------------
    {
      id: 7,
      step: 7,
      type: 'block',
      kind: 'standard',
      prompt_ko: '역슬래시(\\) 자체를 화면에 글자로 출력하려면 이스케이프 기호로 오인되지 않도록 역슬래시를 두 번 연속(\\\\) 적어야 합니다. 블록의 경로 문자열을 따라 입력해보세요.',
      prompt_en: 'To print a literal backslash (\\) character, write two backslashes (\\\\) in a row so it is not treated as an escape sequence. Trace the folder path in the block.',
      hint_ko: '코드에는 \\\\처럼 두 개를 적지만 실제 출력 결과에는 \\ 한 개만 나타납니다.',
      hint_en: 'Two backslashes (\\\\) in code produce a single backslash (\\) in the output.',
      targetCode: 'print("C:\\\\Python")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'C:\\Python',
        },
      ],
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸을 채워 폴더 경로 D:\\Code가 화면에 그대로 출력되도록 해보세요.',
      prompt_en: 'Fill in the blank so the folder path D:\\Code prints literally on the screen.',
      hint_ko: '역슬래시 기호 하나를 출력하려면 빈칸에 역슬래시를 두 번 연속(\\\\) 입력해야 합니다.',
      hint_en: 'Type two backslashes (\\\\) in the blank to print a single backslash.',
      templateCode: 'print("D:§§Code")',
      targetCode: 'print("D:\\\\Code")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'D:\\Code',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 페어 5: 탭(\t)과 줄바꿈(\n) 복합 표 만들기
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'block',
      kind: 'standard',
      prompt_ko: '하나의 문자열 안에 탭(\\t)과 줄바꿈(\\n) 이스케이프 문자를 함께 조합하면 여러 줄로 정렬된 표를 한 번에 출력할 수 있습니다. 블록의 코드를 따라 입력해보세요.',
      prompt_en: 'Combining tab (\\t) and newline (\\n) escape characters inside one string lets you print a multi-line aligned table at once. Trace the block code.',
      hint_ko: '\\t는 같은 줄의 열 간격을 띄우고, \\n은 다음 행(줄)으로 넘어갑니다.',
      hint_en: '\\t aligns columns on the same line, while \\n moves down to the next row.',
      targetCode: 'print("Item\\tPrice\\nPen\\t500")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Item\tPrice\nPen\t500',
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '세 빈칸을 채워 첫째 줄에 ID와 Score, 둘째 줄에 1과 100이 탭 간격으로 정렬된 표를 출력해보세요.',
      prompt_en: 'Fill in the three blanks to print a two-line tab-aligned table of ID, Score and 1, 100.',
      hint_ko: '같은 줄의 두 항목 사이에는 "tab"의 첫 글자 이스케이프를, 줄이 바뀌는 지점에는 "new line"의 첫 글자 이스케이프를 넣어보세요.',
      hint_en: 'Use the tab escape between columns on the same row and the newline escape where the row breaks.',
      templateCode: 'print("ID§§Score§§1§§100")',
      targetCode: 'print("ID\\tScore\\n1\\t100")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'ID\tScore\n1\t100',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 11~13단계: 실전 응용 3유형 (틀린 곳 수정 / 한 줄 추가 / 출력 결과 선택)
    // ------------------------------------------------------------------------
    {
      id: 11,
      step: 11,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '틀린 곳을 수정하여 Line1과 Line2가 위아래 두 줄로 나뉘어 출력되도록 해보세요.',
      prompt_en: 'Fix the error so that Line1 and Line2 are printed on two separate lines.',
      hint_ko: '이스케이프 기호는 나눗셈 슬래시(/)가 아니라 반대 방향으로 기울어진 역슬래시(키보드 원화 ₩ 키)로 시작해야 합니다.',
      hint_en: 'Escape sequences start with a backslash rather than a forward slash (/).',
      templateCode: 'print("Line1/nLine2")',
      targetCode: 'print("Line1\\nLine2")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Line1\nLine2',
        },
      ],
    },
    {
      id: 12,
      step: 12,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '예제 코드 아래에 한 줄을 추가하여 한 번의 출력 명령으로 10과 20을 위아래 두 줄에 나누어 출력해보세요.',
      prompt_en: 'Type the example code and add a line below to print 10 and 20 on two lines with a single print call.',
      hint_ko: '첫째 줄처럼 하나의 따옴표 문자열 안에 두 숫자를 적고, 사이에 줄바꿈 이스케이프 문자를 넣어보세요.',
      hint_en: 'Like line 1, place both numbers inside one quoted string separated by the newline escape sequence.',
      templateCode: 'print("A\\nB")\n§§§§§§§§§§§§§§§',
      targetCode: 'print("A\\nB")\nprint("10\\n20")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'A\nB\n10\n20',
        },
      ],
    },
    {
      id: 13,
      step: 13,
      type: 'quiz',
      kind: 'predict_output',
      prompt_ko: '다음 파이썬 코드를 실행했을 때 화면에 출력될 올바른 결과를 선택해보세요.',
      prompt_en: 'Select the exact output that will be printed when the following Python code runs.',
      hint_ko: '\\n은 줄바꿈, \\t는 탭 간격으로 변환되며, \\\\처럼 두 번 연속 적은 역슬래시는 화면에 \\ 한 개로 출력됩니다.',
      hint_en: '\\n starts a new line, \\t inserts a tab space, and \\\\ prints a single literal backslash (\\).',
      targetCode: 'print("A\\nB\\tC")\nprint("C:\\\\App")',
      choices: [
        'A\\nB\\tC\nC:\\\\App',
        'A\tB\nC\nC:\\App',
        'A\nB\tC\nC:\\App',
        'AB\tC\nC:App',
      ],
      correctChoiceIndex: 2,
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'A\nB\tC\nC:\\App',
        },
      ],
    },
  ],
};

