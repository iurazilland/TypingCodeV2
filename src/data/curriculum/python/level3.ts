import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 3레벨: 문자열(String)과 따옴표 출력 (10단계)
// - [블록 ➔ 타이핑 1:1 교차 5쌍(10문제)] 구조
// - 블록 단계: 블록 내부에 넣을 코드 명확 안내
// - 타이핑 단계: 스포일러 없이 연산자/문법 빈칸 스스로 채우기
// - 페어 1: 큰따옴표 문자열
//   1. [블록] print("Hello")
//   2. [타이핑: 빈칸] print("Hello")
// - 페어 2: 작은따옴표 문자열
//   3. [블록] print('Python')
//   4. [타이핑: 빈칸] print('Python')
// - 페어 3: 따옴표 속 따옴표 포함
//   5. [블록] print('Say "Hello"')
//   6. [타이핑: 빈칸] print("I'm happy")
// - 페어 4: 공백 포함 문장 출력
//   7. [블록] print("Coding is fun")
//   8. [타이핑: 빈칸] print("Coding is fun")
// - 페어 5: 문자열과 계산식 연결
//   9. [블록] print("Score:", 100)
//   10. [타이핑: 빈칸] print("Result:", 10*5)
// ============================================================================
export const PYTHON_LEVEL_3: PracticeRound = {
  id: 'py-basic-r3',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 3,
  title_ko: '3레벨: 문자열(String)과 따옴표 출력',
  title_en: 'Level 3: Strings & Quotes Syntax',
  totalQuestions: 10,
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
      hint_en: 'In Python, text strings must be enclosed in double quotes (""). Enter "Hello" inside the print() slot.',
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
      prompt_ko: '빈칸에 쌍따옴표를 사용해 문자열 Hello를 출력해보세요.',
      prompt_en: 'Fill in the blank with double quotes to print the string Hello.',
      hint_ko: '단어 앞뒤를 큰따옴표("")로 감싸 "Hello"를 빈칸에 입력하세요.',
      hint_en: 'Enclose the word in double quotes like "Hello" and enter it into the blank.',
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
      prompt_ko: '작은따옴표(\'\')를 사용해 \'Python\'을 넣어 화면에 출력해보세요.',
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
      prompt_ko: '빈칸에 작은따옴표를 채워 문자열 Python을 완성해보세요.',
      prompt_en: 'Fill in the single quote in the blank to complete the string Python.',
      hint_ko: "작은따옴표로 시작한 문자열을 닫을 수 있도록 빈칸에 작은따옴표(')를 입력하세요.",
      hint_en: "Type the closing single quote (') in the blank.",
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
      prompt_ko: '작은따옴표(\'\')를 사용해 \'Say "Hello"\'를 넣어 화면에 출력해보세요.',
      prompt_en: 'Use single quotes (\'\') to insert \'Say "Hello"\' and print it on the screen.',
      hint_ko: '문장 속에 큰따옴표가 들어있을 때는 바깥쪽을 작은따옴표로 감싸 \'Say "Hello"\'와 같이 작성합니다.',
      hint_en: 'When a string contains double quotes (""), enclosing it in single quotes (\'\') prevents syntax errors.',
      targetCode: 'print(\'Say "Hello"\')',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Say "Hello"',
        },
      ],
    },
    {
      id: 6,
      step: 6,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '문장 속 작은따옴표와의 충돌을 피할 수 있도록 바깥 양쪽 빈칸에 알맞은 따옴표를 입력해보세요.',
      prompt_en: 'Type the appropriate outer quotes in the blanks to avoid conflict with the inner apostrophe.',
      hint_ko: '문장 속에 작은따옴표(\')가 있으므로 바깥 양쪽 빈칸에 큰따옴표(")를 입력하세요.',
      hint_en: 'Enclose with outer double quotes (") so the internal apostrophe does not cause an error.',
      templateCode: 'print(§I\'m happy§)',
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
      prompt_ko: '문장 Coding is fun이 출력되도록 바깥 양쪽 빈칸에 큰따옴표를 입력해보세요.',
      prompt_en: 'Type double quotes into both outer blanks to print the sentence Coding is fun.',
      hint_ko: '문장의 앞과 뒤 빈칸에 큰따옴표(")를 각각 입력하세요.',
      hint_en: 'Type double quotes (") in the opening and closing blanks to enclose the sentence.',
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
    // 페어 5: 문자열과 계산식 연결 (9번 블록 ➔ 10번 타이핑)
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'block',
      kind: 'standard',
      prompt_ko: '쉼표(,)를 사용해 "Score:", 100을 넣어 나란히 출력해보세요.',
      prompt_en: 'Use a comma (,) to insert "Score:", 100 and print them side by side.',
      hint_ko: 'print() 안에 쉼표(,)를 찍으면 문자열과 숫자를 한 줄에 공백을 두고 나란히 출력할 수 있습니다. "Score:", 100 을 입력하세요.',
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
      prompt_ko: '문자열 설명과 계산식을 연결하는 쉼표(,)를 빈칸에 채워 결과(Result: 50)를 출력해보세요.',
      prompt_en: 'Fill in the comma (,) between the label and expression to print the result (Result: 50).',
      hint_ko: '문자열 "Result:" 바로 뒤의 빈칸에 쉼표(,)를 입력하세요.',
      hint_en: 'Enter a comma (,) in the blank after "Result:".',
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
  ],
};
