import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 6레벨: 특수문자 이스케이프(\n, \t, \', \\) (15단계)
// - [1~10단계] 블록 ➔ 타이핑 1:1 교차 5쌍
// - [11~12단계] 틀린 곳 수정 (fix_bug) 2문항
// - [13~14단계] 한 줄 완성 (one_line) 2문항
// - [15단계] 출력 결과 예측 선택 (predict_output) 1문항
// ============================================================================
export const PYTHON_LEVEL_6: PracticeRound = {
  id: 'py-basic-r6',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 6,
  title_ko: '6레벨: 특수문자 이스케이프(\\n, \\t)',
  title_en: 'Level 6: Escape Characters (\\n, \\t)',
  totalQuestions: 15,
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
      prompt_ko: '[블록 조립] 줄바꿈 문자(\\n)가 포함된 "Hello\\nWorld"를 조립해 두 줄로 출력해보세요.',
      prompt_en: '[Block] Trace "Hello\\nWorld" with the newline escape (\\n) to print on two lines.',
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
      prompt_ko: '[빈칸 채우기] 빈칸을 채워 Python과 Code가 위아래 두 줄로 출력되도록 해보세요.',
      prompt_en: '[Fill Blank] Fill in the blank so Python and Code are printed on two separate lines.',
      hint_ko: '역슬래시(\\) 뒤에 "새 줄(new line)"의 첫 알파벳 n을 붙인 \\n을 입력하세요.',
      hint_en: 'Combine a backslash (\\) with n for a newline.',
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
      prompt_ko: '[블록 조립] 탭 이스케이프 문자(\\t)로 "Name\\tScore"를 조립해 간격을 띄워 출력해보세요.',
      prompt_en: '[Block] Use the tab escape (\\t) in "Name\\tScore" to align the words with a tab space.',
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
      prompt_ko: '[빈칸 채우기] 빈칸을 채워 Lv1과 100 사이에 탭 간격이 벌어지도록 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the blank to insert a tab space between Lv1 and 100.',
      hint_ko: '역슬래시(\\) 뒤에 "탭(tab)"의 첫 알파벳 t를 붙인 \\t를 입력하세요.',
      hint_en: 'Combine a backslash (\\) with t for a tab space.',
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
      prompt_ko: "[블록 조립] 작은따옴표 앞에 역슬래시를 붙인 'It\\'s'를 조립해 It's를 출력해보세요.",
      prompt_en: "[Block] Prefix the inner apostrophe with a backslash (\\') to print It's.",
      hint_ko: '역슬래시 뒤의 따옴표는 문자열을 닫는 기호가 아니라 일반 글자로 취급됩니다.',
      hint_en: 'The backslash tells Python to treat the quote as a literal character.',
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
      prompt_ko: "[빈칸 채우기] 빈칸을 채워 따옴표가 중간에 끊기지 않고 Let's go가 출력되도록 해보세요.",
      prompt_en: "[Fill Blank] Fill in the blank so the string does not break early and prints Let's go.",
      hint_ko: "작은따옴표 문자열 안에 작은따옴표를 넣으려면 역슬래시를 붙인 \\'를 입력하세요.",
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
      prompt_ko: '[블록 조립] 역슬래시를 두 번 연속 적은 "C:\\\\Python"을 조립해 경로를 출력해보세요.',
      prompt_en: '[Block] Write two backslashes (\\\\) in "C:\\\\Python" to print a literal backslash.',
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
      prompt_ko: '[빈칸 채우기] 빈칸을 채워 폴더 경로 D:\\Code가 화면에 그대로 출력되도록 해보세요.',
      prompt_en: '[Fill Blank] Fill in the blank so the folder path D:\\Code prints literally.',
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
      prompt_ko: '[블록 조립] 탭(\\t)과 줄바꿈(\\n)을 함께 사용한 문자열로 정렬된 표를 출력해보세요.',
      prompt_en: '[Block] Combine tab (\\t) and newline (\\n) inside one string to print an aligned table.',
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
      prompt_ko: '[빈칸 채우기] 두 빈칸에 줄바꿈과 탭 이스케이프 문자를 채워 정렬된 표를 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the two blanks with newline and tab escapes to print the table.',
      hint_ko: '첫째 빈칸에는 줄바꿈(\\n)을, 둘째 빈칸에는 탭 간격(\\t)을 넣어보세요.',
      hint_en: 'Use the newline escape (\\n) in the first blank and the tab escape (\\t) in the second.',
      templateCode: 'print("ID\\tScore§§1§§100")',
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
    // 11~15단계: 실전 응용 (fix_bug 2 / one_line 2 / predict_output 1)
    // ------------------------------------------------------------------------
    {
      id: 11,
      step: 11,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '[틀린 곳 수정] Line1과 Line2가 위아래 두 줄로 나뉘어 출력되도록 기호를 수정해보세요.',
      prompt_en: '[Fix Bug] Fix the escape sequence so Line1 and Line2 print on two separate lines.',
      hint_ko: '이스케이프 기호는 슬래시(/)가 아니라 역슬래시(\\)로 시작해야 합니다.',
      hint_en: 'Escape sequences start with a backslash (\\) rather than a forward slash (/).',
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
      kind: 'fix_bug',
      prompt_ko: '[틀린 곳 수정] ID와 Name 사이에 탭 간격이 적용되도록 이스케이프 기호를 수정해보세요.',
      prompt_en: '[Fix Bug] Fix the escape sequence so a tab space is printed between ID and Name.',
      hint_ko: '탭 이스케이프 문자는 슬래시(/t)가 아니라 역슬래시(\\t)로 작성해야 합니다.',
      hint_en: 'Use a backslash (\\t) instead of a forward slash (/t) for the tab escape.',
      templateCode: 'print("ID/tName")',
      targetCode: 'print("ID\\tName")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'ID\tName',
        },
      ],
    },
    {
      id: 13,
      step: 13,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '[한 줄 완성] 둘째 줄에 줄바꿈 문자(\\n)를 사용해 10과 20을 두 줄에 출력해보세요.',
      prompt_en: '[Complete Line] Complete line 2 using \\n to print 10 and 20 on two lines.',
      hint_ko: '첫째 줄처럼 하나의 따옴표 문자열 안에 \\n을 넣어 print("10\\n20")을 작성해보세요.',
      hint_en: 'Like line 1, place both numbers inside one string separated by \\n.',
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
      id: 14,
      step: 14,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '[한 줄 완성] 둘째 줄에 탭 이스케이프(\\t)를 사용해 10과 20을 탭 간격으로 출력해보세요.',
      prompt_en: '[Complete Line] Complete line 2 using \\t to print 10 and 20 separated by a tab.',
      hint_ko: '첫째 줄처럼 하나의 문자열 안에 \\t를 넣어 print("10\\t20")을 작성해보세요.',
      hint_en: 'Follow line 1 and write print("10\\t20") on line 2.',
      templateCode: 'print("A\\tB")\n§§§§§§§§§§§§§§§',
      targetCode: 'print("A\\tB")\nprint("10\\t20")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'A\tB\n10\t20',
        },
      ],
    },
    {
      id: 15,
      step: 15,
      type: 'quiz',
      kind: 'predict_output',
      prompt_ko: '[출력 결과 예측] 다음 파이썬 코드를 실행했을 때 출력될 올바른 결과를 선택해보세요.',
      prompt_en: '[Predict Output] Select the exact output that will be printed when the Python code runs.',
      hint_ko: '\\n은 줄바꿈, \\t는 탭 간격이며, \\\\는 화면에 \\ 한 개로 출력됩니다.',
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
