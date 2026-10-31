import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 3레벨: 문자열(String)과 따옴표 출력 (13단계)
// - [1~10단계] 블록 ➔ 타이핑 1:1 교차 5쌍 (짝수 타이핑 스포일러 제로)
// - [11단계] 틀린 곳 수정 (fix_bug)
// - [12단계] 예제 아래 한 줄 추가 작성 (one_line)
// - [13단계] 출력 결과 예측 선택 (predict_output)
// ============================================================================
export const PYTHON_LEVEL_3: PracticeRound = {
  id: 'py-basic-r3',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 3,
  title_ko: '3레벨: 문자열(String)과 따옴표 출력',
  title_en: 'Level 3: Strings & Quotes Syntax',
  totalQuestions: 13,
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
      prompt_ko: '쌍따옴표("")를 사용해 "Hello"를 넣어 화면에 출력해보세요.',
      prompt_en: 'Use double quotes ("") to insert "Hello" and print it on the screen.',
      hint_ko: '파이썬에서는 글자나 단어를 쌍따옴표("")로 감싸서 문자열을 만듭니다. print() 괄호 안에 "Hello"를 입력하세요.',
      hint_en: 'In Python, text strings are enclosed in quotes. Enter "Hello" inside the print() slot.',
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
      prompt_ko: '빈칸을 채워 문자열 Hello를 화면에 출력해보세요.',
      prompt_en: 'Fill in the blank to print the string Hello on the screen.',
      hint_ko: '파이썬에서 문자열을 출력할 때는 단어 앞뒤를 따옴표로 감싸 "Hello"와 같이 입력해야 합니다.',
      hint_en: 'Enclose the word in quotes like "Hello" and enter it into the blank.',
      templateCode: 'print(§§§§§§§)',
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
      prompt_ko: "작은따옴표('')를 사용해 'Python'을 넣어 화면에 출력해보세요.",
      prompt_en: "Use single quotes ('') to insert 'Python' and print it on the screen.",
      hint_ko: "파이썬은 쌍따옴표와 작은따옴표를 동일하게 지원합니다. print() 괄호 안에 'Python'을 입력하세요.",
      hint_en: "Python treats single quotes identically to double quotes. Enter 'Python' inside the print() slot.",
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
      prompt_ko: '빈칸을 채워 열려 있는 문자열 Python이 올바르게 닫히도록 완성해보세요.',
      prompt_en: 'Fill in the blank to properly close and complete the string Python.',
      hint_ko: "문자열이 작은따옴표(')로 시작했으므로, 끝부분의 빈칸에도 짝이 맞는 작은따옴표(')를 입력하세요.",
      hint_en: "Since the string starts with a single quote ('), type the matching closing single quote (') in the blank.",
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
      prompt_ko: '두 개의 따옴표를 교차 사용해서 "It\'s"를 넣어 화면에 출력해보세요.',
      prompt_en: 'Alternate the two types of quotes to insert "It\'s" and print it on the screen.',
      hint_ko: '단어 속에 작은따옴표(\')가 들어있을 때는 바깥쪽을 큰따옴표("")로 감싸 교차 사용합니다. "It\'s"를 입력하세요.',
      hint_en: 'When text contains a single quote (\'), enclose the outside with double quotes ("") to alternate them.',
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
      prompt_ko: "문장 안의 기호와 충돌하지 않도록 양쪽 빈칸을 채워 I'm happy를 출력해보세요.",
      prompt_en: "Fill in both outer blanks without conflicting with the inner symbol to print I'm happy.",
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
      prompt_ko: '공백(띄어쓰기)이 포함된 "Coding is fun"을 넣어 화면에 출력해보세요.',
      prompt_en: 'Insert "Coding is fun" with spaces and print it on the screen.',
      hint_ko: '따옴표 안에는 띄어쓰기도 문자열의 일부로 포함됩니다. "Coding is fun"을 입력하세요.',
      hint_en: 'Spaces inside quotes are preserved as part of the string. Enter "Coding is fun" inside the slot.',
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
      prompt_ko: '양쪽 빈칸을 채워 띄어쓰기가 포함된 문장 Coding is fun을 화면에 출력해보세요.',
      prompt_en: 'Fill in both outer blanks to print the sentence Coding is fun on the screen.',
      hint_ko: '공백이 포함된 문장을 하나의 문자열로 묶을 수 있도록 앞뒤 빈칸에 큰따옴표(")를 각각 입력하세요.',
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
      prompt_ko: '쉼표(,)를 사용해 "Score:", 100을 넣어 나란히 출력해보세요.',
      prompt_en: 'Use a comma (,) to insert "Score:", 100 and print them side by side.',
      hint_ko: 'print() 안에 쉼표(,)를 찍으면 문자열과 숫자를 한 줄에 공백을 두고 나란히 출력할 수 있습니다. "Score:", 100을 입력하세요.',
      hint_en: 'Using a comma in print() separates strings and numbers with an automatic space, outputting "Score: 100".',
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
      prompt_ko: '빈칸을 채워 문자열 설명과 계산 결과가 한 줄에 나란히(Result: 50) 출력되도록 해보세요.',
      prompt_en: 'Fill in the blank so the text label and calculated value print side by side (Result: 50).',
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
    // 11~13단계: 실전 응용 3유형 (틀린 곳 수정 / 한 줄 추가 / 출력 결과 선택)
    // ------------------------------------------------------------------------
    {
      id: 11,
      step: 11,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '틀린 곳을 수정하여 문장 Hello Python이 문법 오류 없이 출력되도록 해보세요.',
      prompt_en: 'Fix the error so that the sentence Hello Python prints without a syntax error.',
      hint_ko: '문자열의 시작(")과 끝(\')에 사용된 따옴표의 짝이 맞지 않습니다. 양쪽 따옴표를 같은 종류로 통일해보세요.',
      hint_en: 'The opening quote (") and closing quote (\') do not match. Make both quotes match.',
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
      kind: 'one_line',
      prompt_ko: '예제 코드 아래에 한 줄을 추가하여 문자열 라벨과 숫자를 나란히 연결한 Level: 3을 출력해보세요.',
      prompt_en: 'Type the example code and add a line below to connect the label and number to print Level: 3.',
      hint_ko: '첫째 줄 예제를 입력하고 Enter를 누른 뒤, 둘째 줄에 print("Level:", 3)을 입력하세요.',
      hint_en: 'Type the first line example, press Enter, and write print("Level:", 3) on the second line.',
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
      id: 13,
      step: 13,
      type: 'quiz',
      kind: 'predict_output',
      prompt_ko: '다음 파이썬 코드를 실행했을 때 화면에 출력될 올바른 결과를 선택해보세요.',
      prompt_en: 'Select the exact output that will be printed when the following Python code runs.',
      hint_ko: '바깥 작은따옴표 안의 큰따옴표는 그대로 출력되며, 쉼표(,)로 구분된 문자열과 수식은 공백 한 칸을 사이에 두고 출력됩니다.',
      hint_en: 'Inner double quotes inside single quotes print literally, and a comma separates values with a single space.',
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
