import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 3레벨: 문자열(String)과 따옴표 출력 (10단계)
// - [블록 ➔ 타이핑 1:1 교차 5쌍(10문제)] 구조
// - 기호와 숫자 사이 공백 제거(Compact) 및 넓은 빈칸 입력 적용
// - 페어 1: 큰따옴표 문자열
//   1. [블록] print("Hello")
//   2. [타이핑: 빈칸] print("Hello") (문자열 전체 빈칸)
// - 페어 2: 작은따옴표 문자열
//   3. [블록] print('Python')
//   4. [타이핑: 빈칸] print('Python') (문자열 전체 빈칸)
// - 페어 3: 따옴표 속 따옴표 포함
//   5. [블록] print('Say "Hello"')
//   6. [타이핑: 빈칸] print("I'm happy") (문자열 전체 빈칸)
// - 페어 4: 공백 포함 문장 출력
//   7. [블록] print("Coding is fun")
//   8. [타이핑: 빈칸] print("Coding is fun") (문장 전체 빈칸)
// - 페어 5: 문자열과 숫자/계산식 연결
//   9. [블록] print("Score:", 100)
//   10. [타이핑: 빈칸] print("Result:", 10*5) (계산식 전체 빈칸)
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
      prompt_ko: '쌍따옴표("")를 사용해 문자열 "Hello"를 넣어 화면에 출력해보세요.',
      prompt_en: 'Use double quotes ("") to insert the string "Hello" and print it on the screen.',
      hint_ko: '파이썬에서는 글자나 단어를 쌍따옴표("") 또는 작은따옴표(\'\')로 감싸서 문자열을 만듭니다. print() 괄호 안에 "Hello"를 입력해보세요.',
      hint_en: 'In Python, text strings must be enclosed in double quotes ("") or single quotes (\'\'). Enter "Hello" inside the print() slot.',
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
      prompt_ko: '빈칸에 쌍따옴표로 감싼 "Hello"를 입력하여 화면에 출력해보세요.',
      prompt_en: 'Fill in the string "Hello" with double quotes to print it on the screen.',
      hint_ko: '단어 앞뒤를 큰따옴표("")로 감싸 "Hello"를 입력하세요.',
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
      prompt_ko: '작은따옴표(\'\')를 사용해 문자열 \'Python\'을 넣어 화면에 출력해보세요.',
      prompt_en: 'Use single quotes (\'\') to insert the string \'Python\' and print it on the screen.',
      hint_ko: '파이썬은 쌍따옴표("")와 작은따옴표(\'\')를 완전히 똑같이 문자열 기호로 지원합니다. 시작과 끝의 따옴표 모양만 맞춰주면 동일하게 동작합니다.',
      hint_en: 'Python treats double quotes ("") and single quotes (\'\') identically. As long as the opening and closing quotes match, it prints correctly.',
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
      prompt_ko: '빈칸에 작은따옴표로 감싼 \'Python\'을 입력하여 화면에 출력해보세요.',
      prompt_en: 'Fill in the string \'Python\' with single quotes to print it on the screen.',
      hint_ko: '단어 앞뒤를 작은따옴표(\'\')로 감싸 \'Python\'을 입력하세요.',
      hint_en: 'Enclose Python in single quotes like \'Python\' into the blank.',
      templateCode: 'print(§§§§§§§§)',
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
      prompt_ko: '작은따옴표(\'\')를 사용해 쌍따옴표가 들어간 \'Say "Hello"\'를 출력해보세요.',
      prompt_en: 'Use single quotes (\'\') to print \'Say "Hello"\' containing double quotes.',
      hint_ko: '문장 안에 쌍따옴표("")를 글자로 표현하고 싶을 때는 바깥쪽을 작은따옴표(\'\')로 감싸주면 충돌 없이 안전하게 출력됩니다.',
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
      prompt_ko: '작은따옴표가 포함된 문장 "I\'m happy"를 큰따옴표로 감싸 빈칸에 입력해보세요.',
      prompt_en: 'Fill in the sentence "I\'m happy" enclosed in double quotes into the blank.',
      hint_ko: '문장 안에 작은따옴표(\')가 있으므로 바깥쪽을 큰따옴표로 감싸 "I\'m happy"를 입력하세요.',
      hint_en: 'Type "I\'m happy" with outer double quotes into the blank.',
      templateCode: 'print(§§§§§§§§§§§)',
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
      prompt_ko: '문자열 "Coding is fun"을 넣어 화면에 출력해보세요.',
      prompt_en: 'Insert the string "Coding is fun" and print it on the screen.',
      hint_ko: '따옴표 안에는 영문, 한글뿐만 아니라 띄어쓰기(공백)도 그대로 문자열의 일부로 포함되어 출력됩니다.',
      hint_en: 'Spaces inside quotes are preserved as part of the string. Enter "Coding is fun" inside the print() slot.',
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
      prompt_ko: '빈칸에 큰따옴표를 포함해 "Coding is fun" 문장 전체를 입력해보세요.',
      prompt_en: 'Fill in the full sentence "Coding is fun" including quotes into the blank.',
      hint_ko: '큰따옴표를 열고 Coding is fun을 적은 뒤 큰따옴표를 닫아주세요 ("Coding is fun").',
      hint_en: 'Type "Coding is fun" with opening and closing quotes into the blank.',
      templateCode: 'print(§§§§§§§§§§§§§§§)',
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
    // 페어 5: 문자열과 숫자 쉼표 연결 (9번 블록 ➔ 10번 타이핑)
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'block',
      kind: 'standard',
      prompt_ko: '문자열 "Score:"와 숫자 100을 쉼표(,)로 연결해 나란히 출력해보세요.',
      prompt_en: 'Connect the string "Score:" and number 100 with a comma (,) to print them side by side.',
      hint_ko: 'print() 안에 쉼표(,)를 찍으면 문자열과 숫자를 한 줄에 공백을 두고 나란히 출력할 수 있습니다. "Score: 100"이 출력됩니다.',
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
      prompt_ko: '빈칸에 계산식 10*5를 입력하여 결과(Result: 50)가 출력되도록 해보세요.',
      prompt_en: 'Fill in the expression 10*5 to print the output Result: 50.',
      hint_ko: '쉼표 뒤의 빈칸에 곱셈식 10*5를 입력하세요.',
      hint_en: 'Type the multiplication expression 10*5 into the blank.',
      templateCode: 'print("Result:", §§§§)',
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
