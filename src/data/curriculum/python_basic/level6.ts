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
      prompt_ko: '줄바꿈 기호(\\n)를 사용해 "Hello\\nWorld"를 넣어 두 줄로 출력해보세요.',
      prompt_en: 'Use the newline escape (\\n) to insert "Hello\\nWorld" and print on two lines.',
      hint_ko: '문자열 안에 \\n을 넣으면 그 위치에서 줄이 바뀝니다. print() 슬롯에 "Hello\\nWorld"를 입력하세요.',
      hint_en: 'Inserting \\n inside a string starts a new line. Enter "Hello\\nWorld" in the print() slot.',
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
      prompt_ko: '탭 기호(\\t)를 사용해 "Name\\tScore"를 넣어 넓은 간격으로 출력해보세요.',
      prompt_en: 'Use the tab escape (\\t) to insert "Name\\tScore" and print with tab spacing.',
      hint_ko: '문자열 안에 \\t를 넣으면 키보드의 Tab 키를 누른 것처럼 일정한 간격이 벌어집니다. "Name\\tScore"를 입력하세요.',
      hint_en: 'Inserting \\t adds a horizontal tab gap. Enter "Name\\tScore" in the print() slot.',
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
      prompt_ko: "따옴표 이스케이프(\\')를 사용해 'It\\'s'를 넣어 작은따옴표까지 출력해보세요.",
      prompt_en: "Use an escaped quote (\\') to insert 'It\\'s' and print the apostrophe.",
      hint_ko: "작은따옴표 문자열 안에서 작은따옴표를 글자로 출력하려면 앞에 역슬래시를 붙여 \\'로 작성합니다. 'It\\'s'를 입력하세요.",
      hint_en: "Prefix the inner single quote with a backslash (\\') so Python prints it as a character. Enter 'It\\'s'.",
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
      prompt_ko: '역슬래시를 두 번(\\\\) 사용해 "C:\\\\Python"을 넣어 폴더 경로를 출력해보세요.',
      prompt_en: 'Use a double backslash (\\\\) to insert "C:\\\\Python" and print the folder path.',
      hint_ko: '역슬래시(\\) 자체를 화면에 한 개 출력하려면 \\\\처럼 두 번 연속 적어주어야 합니다.',
      hint_en: 'Writing \\\\ inside a string outputs a single literal backslash (\\).',
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
      prompt_ko: '탭(\\t)과 줄바꿈(\\n)을 사용해 "Item\\tPrice\\nPen\\t500"을 넣어 2줄 가격표를 출력해보세요.',
      prompt_en: 'Use \\t and \\n to insert "Item\\tPrice\\nPen\\t500" and print a two-line price table.',
      hint_ko: '\\t로 항목 사이 간격을 맞추고 \\n으로 다음 줄로 넘어가 깔끔한 표를 출력합니다.',
      hint_en: 'Combine \\t for column spacing and \\n for a new row: "Item\\tPrice\\nPen\\t500".',
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

