import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 3레벨: 문자열(String)과 따옴표 출력 (10단계)
// - 쌍따옴표("")와 작은따옴표('')를 둘 다 사용할 수 있음을 학습
// - 1~5단계: 코드블록 모드 (Block Mode) - 블록으로 개념 체득
//   1. 큰따옴표(쌍따옴표) 문자열 : print("Hello")
//   2. 작은따옴표 문자열 : print('Python') (둘 다 사용 가능)
//   3. 공백 포함 문장 문자열 : print("Coding is fun")
//   4. 따옴표 속 따옴표 포함 : print("I'm happy") (쌍따옴표 안에 작은따옴표)
//   5. 문자열과 숫자 쉼표 출력 : print("Score:", 100) (누적 복습)
// - 6~10단계: 타이핑 모드 (Typing Mode) - 1~5번 유형의 문제 형식 반복
//   6. [유형1] 빈칸 채우기 (문자열 전체 입력: "Hello")
//   7. [유형2] 빈칸 채우기 (따옴표 닫기 짝 맞추기: 'Python')
//   8. [유형3] 오타 수정 (작은따옴표 충돌 해결: "I'm happy")
//   9. [유형4] 빈칸 채우기 (문자열과 숫자 사이 쉼표 입력)
//   10. [유형5] 빈칸 채우기 (문자열 설명과 계산 결과 동시 출력)
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
    // [블록 모드] 1~5단계: 블록 조립으로 개념 잡기
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
      id: 3,
      step: 3,
      type: 'block',
      kind: 'standard',
      prompt_ko: '쌍따옴표("")를 사용해 띄어쓰기가 있는 문장 "Coding is fun"을 넣어 화면에 출력해보세요.',
      prompt_en: 'Use double quotes ("") to insert the sentence "Coding is fun" and print it on the screen.',
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
      id: 4,
      step: 4,
      type: 'block',
      kind: 'standard',
      prompt_ko: '문장 속 작은따옴표를 표현하기 위해 쌍따옴표("")로 "I\'m happy"를 넣어 화면에 출력해보세요.',
      prompt_en: 'Enclose "I\'m happy" in double quotes ("") to preserve the apostrophe and print it on the screen.',
      hint_ko: '문장 안에 작은따옴표(\')가 들어갈 때는 바깥을 쌍따옴표("")로 감싸면 충돌 없이 안전하게 출력됩니다. 두 종류의 따옴표를 모두 지원하는 파이썬의 큰 장점입니다.',
      hint_en: 'When a string contains an apostrophe (\'), wrapping it in double quotes ("") prevents syntax errors. This is why Python supports both quote styles.',
      targetCode: 'print("I\'m happy")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: "I'm happy",
        },
      ],
    },
    {
      id: 5,
      step: 5,
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

    // ------------------------------------------------------------------------
    // [타이핑 모드] 6~10단계: 1~5번 유형의 문제형 반복
    // - 빈칸은 § 기호로 지정 (예: §§은 2글자 빈칸 박스)
    // ------------------------------------------------------------------------
    {
      id: 6,
      step: 6,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸을 채워 문자열 Hello를 화면에 출력해보세요.',
      prompt_en: 'Fill in the blank to print the string Hello on the screen.',
      hint_ko: '문자열 Hello를 만들기 위해 단어 앞뒤를 큰따옴표("")로 감싸 "Hello"를 입력하세요.',
      hint_en: 'To print the string Hello, enclose the word in double quotes like "Hello".',
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
    {
      id: 7,
      step: 7,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸을 채워 문자열 Python의 닫는 따옴표를 완성해보세요.',
      prompt_en: 'Fill in the blank to complete the closing quote for the string Python.',
      hint_ko: '작은따옴표(\')로 시작한 문자열은 끝도 같은 작은따옴표(\')로 닫아야 합니다. 키보드의 따옴표(\') 키를 입력하세요.',
      hint_en: 'A string starting with a single quote (\') must be closed with the same single quote (\').',
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
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '틀린 곳을 수정하여 문장 I\'m happy를 화면에 출력해보세요.',
      prompt_en: 'Fix the error to print the sentence "I\'m happy" on the screen.',
      hint_ko: '문장 안에 작은따옴표(\')가 포함되어 있어 바깥을 작은따옴표로 감싸면 문법 오류(SyntaxError)가 발생합니다. 바깥쪽 양쪽 따옴표를 큰따옴표(")로 수정해보세요.',
      hint_en: 'Since the string contains an apostrophe (\'), enclosing it in single quotes causes a SyntaxError. Change the outer quotes to double quotes (").',
      templateCode: 'print(\'I\'m happy\')',
      targetCode: 'print("I\'m happy")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: "I'm happy",
        },
      ],
    },
    {
      id: 9,
      step: 9,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸을 채워 문자열과 숫자가 나란히 출력되도록 해보세요.',
      prompt_en: 'Fill in the blank to print the string and number side by side.',
      hint_ko: '문자열과 숫자 사이의 빈칸에 쉼표(,)를 입력하면 두 값이 공백으로 구분되어 "Level 3"으로 출력됩니다.',
      hint_en: 'Type a comma (,) between the string and number to print them side by side separated by a space.',
      templateCode: 'print("Level"§ 3)',
      targetCode: 'print("Level", 3)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Level 3',
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸을 채워 화면에 결과(Result: 50)가 출력되도록 해보세요.',
      prompt_en: 'Fill in the blanks to print the result (Result: 50) on the screen.',
      hint_ko: '첫 번째 빈칸에는 문자열과 계산식을 연결하는 쉼표(,), 두 번째 빈칸에는 곱셈 연산자(*)를 입력하세요.',
      hint_en: 'Enter a comma (,) in the first blank and the multiplication operator (*) in the second blank.',
      templateCode: 'print("Result:"§ 10 § 5)',
      targetCode: 'print("Result:", 10 * 5)',
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
