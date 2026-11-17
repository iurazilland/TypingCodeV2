import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 3레벨: 문자열(String)과 따옴표 출력 (15단계)
// - [1~10단계] 블록 ➔ 타이핑 1:1 교차 5쌍
// - [11~12단계] 틀린 곳 수정 (fix_bug) 2문항
// - [13~14단계] 한 줄 완성 (one_line) 2문항
// - [15단계] 출력 결과 예측 선택 (predict_output) 1문항
// ============================================================================
export const PYTHON_LEVEL_3: PracticeRound = {
  id: 'py-basic-r3',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 3,
  title_ko: '3레벨: 문자열(String)과 따옴표 출력',
  title_en: 'Level 3: Strings & Quotes Syntax',
  totalQuestions: 15,
  unlockedBlocks: ['print'],
  questions: [
    // ------------------------------------------------------------------------
    // 페어 1: 큰따옴표 문자열
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      kind: 'standard',
      prompt_ko: '[블록 조립] 큰따옴표("")로 감싼 문자열 "Hello"를 조립해 출력해보세요.',
      prompt_en: '[Block] Enclose characters inside double quotes ("") to print "Hello".',
      hint_ko: '화면에 출력될 때는 양쪽의 따옴표 기호가 제외되고 안쪽 글자만 나타납니다.',
      hint_en: 'When printed, the surrounding quotes are not shown—only the text inside appears.',
      targetCode: 'print("Hello")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Hello',
        },
      ],
    },
    {
      id: 2,
      step: 2,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '[빈칸 채우기] 단어 양쪽 빈칸에 큰따옴표를 채워 문자열 Hello를 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in both blanks with double quotes to print the string Hello.',
      hint_ko: '문자열을 출력할 때는 단어 앞뒤 빈칸에 큰따옴표(")를 각각 입력해야 합니다.',
      hint_en: 'Type a double quote (") in both the opening and closing blanks around Hello.',
      templateCode: 'print(§Hello§)',
      targetCode: 'print("Hello")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Hello',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 페어 2: 작은따옴표 문자열
    // ------------------------------------------------------------------------
    {
      id: 3,
      step: 3,
      type: 'block',
      kind: 'standard',
      prompt_ko: "[블록 조립] 작은따옴표('')로 감싼 문자열 'Python'을 조립해 출력해보세요.",
      prompt_en: "[Block] Trace the single-quoted string 'Python' in the block to print it.",
      hint_ko: '열고 닫는 따옴표의 종류만 서로 같게 맞추면 어떤 따옴표든 사용할 수 있습니다.',
      hint_en: 'Either quote style works as long as the opening and closing quotes match.',
      targetCode: "print('Python')",
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Python',
        },
      ],
    },
    {
      id: 4,
      step: 4,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '[빈칸 채우기] 빈칸을 채워 열려 있는 문자열 Python이 올바르게 닫히도록 완성해보세요.',
      prompt_en: '[Fill Blank] Fill in the blank to properly close and complete the string Python.',
      hint_ko: "문자열이 작은따옴표(')로 시작했으므로, 끝부분 빈칸에도 작은따옴표(')를 입력하세요.",
      hint_en: "Since the string starts with a single quote ('), type the matching closing single quote (').",
      templateCode: "print('Python§)",
      targetCode: "print('Python')",
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Python',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 페어 3: 따옴표 속 따옴표 포함
    // ------------------------------------------------------------------------
    {
      id: 5,
      step: 5,
      type: 'block',
      kind: 'standard',
      prompt_ko: '[블록 조립] 작은따옴표가 들어간 문장 "It\'s"를 큰따옴표로 감싸 출력해보세요.',
      prompt_en: '[Block] Wrap the string with outer double quotes ("") to print It\'s.',
      hint_ko: '바깥 따옴표와 다른 종류의 안쪽 따옴표는 일반 글자로 그대로 출력됩니다.',
      hint_en: 'An inner quote of a different type from the outer quotes is printed as a literal character.',
      targetCode: 'print("It\'s")',
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
      prompt_ko: "[빈칸 채우기] 안쪽 기호와 충돌하지 않도록 양쪽 빈칸을 채워 I'm happy를 출력해보세요.",
      prompt_en: "[Fill Blank] Fill in both outer blanks without conflicting with the apostrophe to print I'm happy.",
      hint_ko: "문장 속에 작은따옴표(')가 있으므로 바깥 양쪽 빈칸에는 큰따옴표(\")를 입력하세요.",
      hint_en: 'Enclose the text with outer double quotes (") so the internal apostrophe does not break the string.',
      templateCode: "print(§I'm happy§)",
      targetCode: 'print("I\'m happy")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: "I'm happy",
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 페어 4: 공백 포함 문장 출력
    // ------------------------------------------------------------------------
    {
      id: 7,
      step: 7,
      type: 'block',
      kind: 'standard',
      prompt_ko: '[블록 조립] 띄어쓰기가 포함된 문자열 "Coding is fun"을 조립해 출력해보세요.',
      prompt_en: '[Block] Trace the sentence "Coding is fun" with spaces preserved.',
      hint_ko: '단어 사이의 공백도 한 글자처럼 취급되므로 띄어쓰기를 정확히 맞춰 입력하세요.',
      hint_en: 'Each space between words counts as a character inside the string.',
      targetCode: 'print("Coding is fun")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Coding is fun',
        },
      ],
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '[빈칸 채우기] 양쪽 빈칸을 채워 문장 Coding is fun을 화면에 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in both outer blanks to print the sentence Coding is fun.',
      hint_ko: '공백이 포함된 문장을 하나의 문자열로 묶도록 앞뒤 빈칸에 큰따옴표(")를 입력하세요.',
      hint_en: 'Type quotes (") in both the opening and closing blanks to enclose the sentence.',
      templateCode: 'print(§Coding is fun§)',
      targetCode: 'print("Coding is fun")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Coding is fun',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 페어 5: 문자열과 계산식 연결
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'block',
      kind: 'standard',
      prompt_ko: '[블록 조립] 문자열 "Score:"와 숫자 100을 쉼표(,)로 나열해 Score: 100을 출력해보세요.',
      prompt_en: '[Block] Separate "Score:" and 100 with a comma (,) inside print() to output Score: 100.',
      hint_ko: '설명 라벨은 따옴표로 감싸고, 숫자 값은 따옴표 없이 쉼표 뒤에 이어 적습니다.',
      hint_en: 'Enclose the text label in quotes and write the number without quotes after the comma.',
      targetCode: 'print("Score:", 100)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Score: 100',
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '[빈칸 채우기] 빈칸을 채워 문자열과 계산 결과가 나란히 Result: 50으로 출력되도록 해보세요.',
      prompt_en: '[Fill Blank] Fill in the blank so the label and value print side by side as Result: 50.',
      hint_ko: '문자열 "Result:"와 수식 10*5를 나란히 연결하려면 빈칸에 쉼표(,)를 입력하세요.',
      hint_en: 'Enter a comma (,) in the blank after "Result:" to separate the string and expression.',
      templateCode: 'print("Result:"§ 10*5)',
      targetCode: 'print("Result:", 10*5)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Result: 50',
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
      prompt_ko: '[틀린 곳 수정] 문장 Hello Python이 문법 오류 없이 출력되도록 따옴표를 수정해보세요.',
      prompt_en: '[Fix Bug] Fix the mismatched quote so Hello Python prints without a syntax error.',
      hint_ko: '문자열의 시작(")과 끝(\')에 사용된 따옴표의 짝이 맞지 않습니다. 큰따옴표로 통일해보세요.',
      hint_en: 'The opening quote (") and closing quote (\') do not match. Make both double quotes.',
      templateCode: 'print("Hello Python\')',
      targetCode: 'print("Hello Python")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Hello Python',
        },
      ],
    },
    {
      id: 12,
      step: 12,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '[틀린 곳 수정] 문장 I\'m Ready가 오류 없이 출력되도록 바깥 양쪽 따옴표를 수정해보세요.',
      prompt_en: '[Fix Bug] Fix the outer quotes so that I\'m Ready prints without a syntax error.',
      hint_ko: '문장 안에 작은따옴표(\')가 있으므로 바깥 양쪽을 큰따옴표("")로 감싸보세요.',
      hint_en: 'Wrap the string in outer double quotes ("") so the inner apostrophe does not end the string.',
      templateCode: "print('I'm Ready')",
      targetCode: 'print("I\'m Ready")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: "I'm Ready",
        },
      ],
    },
    {
      id: 13,
      step: 13,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '[한 줄 완성] 둘째 줄에 문자열 라벨과 숫자를 쉼표로 연결해 Level: 3을 출력해보세요.',
      prompt_en: '[Complete Line] Complete line 2 to connect the label and number to print Level: 3.',
      hint_ko: '첫째 줄처럼 라벨 문자열을 따옴표로 감싸고, 쉼표 뒤에 숫자를 따옴표 없이 적어보세요.',
      hint_en: 'Follow line 1 by enclosing the label string in quotes, followed by a comma and the number.',
      templateCode: 'print("Score:", 100)\n§§§§§§§§§§§§§§§§§§',
      targetCode: 'print("Score:", 100)\nprint("Level:", 3)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Score: 100\nLevel: 3',
        },
      ],
    },
    {
      id: 14,
      step: 14,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '[한 줄 완성] 둘째 줄에 큰따옴표를 사용해 문장 I\'m fine을 출력해보세요.',
      prompt_en: '[Complete Line] Complete line 2 using outer double quotes to print I\'m fine.',
      hint_ko: '작은따옴표가 포함된 문장 "I\'m fine"을 print() 안에 작성해보세요.',
      hint_en: 'Write print("I\'m fine") using outer double quotes on line 2.',
      templateCode: 'print("It\'s fun")\n§§§§§§§§§§§§§§§§§',
      targetCode: 'print("It\'s fun")\nprint("I\'m fine")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: "It's fun\nI'm fine",
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
      hint_ko: '작은따옴표 안의 큰따옴표는 그대로 출력되며, 쉼표(,)로 구분된 값들은 공백 한 칸을 두고 출력됩니다.',
      hint_en: 'Inner double quotes inside single quotes print literally, and a comma separates values with a space.',
      targetCode: 'print(\'Say "Hi"\')\nprint("10 + 20", 10+20)',
      choices: [
        'Say "Hi"\n10 + 20 30',
        '\'Say "Hi"\'\n30 30',
        'Say Hi\n10+20 30',
        'Say "Hi"\n10 + 20, 30',
      ],
      correctChoiceIndex: 0,
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Say "Hi"\n10 + 20 30',
        },
      ],
    },
  ],
};
