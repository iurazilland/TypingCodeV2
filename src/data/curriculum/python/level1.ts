import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 1레벨: print() 함수와 숫자의 기초 (10단계)
// - 1~5단계: 코드블록 모드 (Block Mode) - 블록으로 개념 체득
// - 6~10단계: 타이핑 모드 (Typing Mode) - 빈칸 채우기, 틀린곳 수정, 한줄 작성
// - 빈칸 기호: 언어 문법과 충돌하지 않는 특수문자 '§' 사용 (연속된 '§'는 하나의 [] 테두리 박스로 렌더링)
// ============================================================================
export const PYTHON_LEVEL_1: PracticeRound = {
  id: 'py-basic-r1',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 1,
  title_ko: '1레벨: print() 함수와 숫자 출력',
  title_en: 'Level 1: print() & Numbers',
  totalQuestions: 10,
  questions: [
    // ------------------------------------------------------------------------
    // [블록 모드] 1~5단계: 블록 조립으로 개념 잡기
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      kind: 'standard',
      title: '숫자 10 출력하기',
      title_en: 'Print Number 10',
      prompt_ko: 'print() 블록을 시작 블록 아래에 연결하고, 숫자 10을 입력하여 화면에 10을 출력해보세요.',
      prompt_en: 'Attach the print() block below start and enter 10 to output 10 on the screen.',
      targetCode: 'print(10)',
      expectedOutput: '10',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '10',
        },
      ],
      hint_ko: '도구 상자에서 print() 블록을 드래그하여 실행 블록 하단에 붙인 뒤 10을 적어보세요.',
      hint_en: 'Drag the print() block from the toolbox and enter 10 into its input.',
    },
    {
      id: 2,
      step: 2,
      type: 'block',
      kind: 'standard',
      title: '한 자리 숫자 5 출력하기',
      title_en: 'Print Number 5',
      prompt_ko: 'print() 블록을 사용해 숫자 5를 출력해보세요.',
      prompt_en: 'Use the print() block to output the number 5.',
      targetCode: 'print(5)',
      expectedOutput: '5',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '5',
        },
      ],
      hint_ko: 'print() 블록의 입력창에 숫자 5를 입력하면 터미널에 5가 나타납니다.',
      hint_en: 'Type 5 into the print() block input field.',
    },
    {
      id: 3,
      step: 3,
      type: 'block',
      kind: 'standard',
      title: '세 자리 큰 숫자 100 출력하기',
      title_en: 'Print 3-digit Number 100',
      prompt_ko: 'print() 블록을 사용해 세 자리 숫자 100을 출력해보세요.',
      prompt_en: 'Output the 3-digit number 100 using print().',
      targetCode: 'print(100)',
      expectedOutput: '100',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '100',
        },
      ],
      hint_ko: '숫자는 따옴표("") 없이 100을 그대로 적어줍니다.',
      hint_en: 'Numbers are written directly without quotes.',
    },
    {
      id: 4,
      step: 4,
      type: 'block',
      kind: 'standard',
      title: '숫자 0 출력하기',
      title_en: 'Print Number 0',
      prompt_ko: 'print() 블록을 사용해 숫자 0을 출력해보세요.',
      prompt_en: 'Print the number 0 using the print() block.',
      targetCode: 'print(0)',
      expectedOutput: '0',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '0',
        },
      ],
      hint_ko: '0 역시 파이썬에서 매우 중요한 정수 숫자입니다. print(0)을 만들어보세요.',
      hint_en: '0 is an integer in Python. Create print(0).',
    },
    {
      id: 5,
      step: 5,
      type: 'block',
      kind: 'standard',
      title: '블록 모드 마스터: 행운의 숫자 7 출력하기',
      title_en: 'Master Block Mode: Print Lucky 7',
      prompt_ko: '앞서 배운 방식을 복습하며, print() 블록으로 숫자 7을 출력해보세요.',
      prompt_en: 'Review what you learned and print the number 7.',
      targetCode: 'print(7)',
      expectedOutput: '7',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '7',
        },
      ],
      hint_ko: 'print() 블록을 붙이고 7을 입력하면 1~5단계 블록 모드가 완성됩니다!',
      hint_en: 'Attach print() and enter 7 to finish block mode!',
    },

    // ------------------------------------------------------------------------
    // [타이핑 모드] 6~10단계: V1 챌린지 모드 (빈칸, 틀린곳 수정, 한줄 작성)
    // - 빈칸은 § 기호로 지정 (예: §§은 2글자 빈칸 박스)
    // ------------------------------------------------------------------------
    {
      id: 6,
      step: 6,
      type: 'typing',
      kind: 'fill_blank',
      title: '빈칸 채우기: 숫자 10 출력',
      title_en: 'Fill in the Blank: Print 10',
      prompt_ko: '괄호 안 빈칸 박스에 숫자 10을 입력하여 화면에 10을 출력해보세요.',
      prompt_en: 'Type 10 into the blank box to output 10 on the screen.',
      templateCode: 'print(§§)',
      targetCode: 'print(10)',
      expectedOutput: '10',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '10',
        },
      ],
      hint_ko: '괄호 안 빈칸 위치에 숫자 10을 적어 print(10)을 완성하세요.',
      hint_en: 'Type 10 into the blank to complete print(10).',
    },
    {
      id: 7,
      step: 7,
      type: 'typing',
      kind: 'fill_blank',
      title: '빈칸 채우기: 숫자 5 출력',
      title_en: 'Fill in the Blank: Print 5',
      prompt_ko: '괄호 안 빈칸 박스에 숫자 5를 입력하여 실행해보세요.',
      prompt_en: 'Type 5 into the blank box and run.',
      templateCode: 'print(§)',
      targetCode: 'print(5)',
      expectedOutput: '5',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '5',
        },
      ],
      hint_ko: '괄호 안의 빈칸에 5를 입력하고 실행 버튼을 누르세요.',
      hint_en: 'Enter 5 into the blank and click Run.',
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'fix_bug',
      title: '틀린 곳 수정: 오타 고치기',
      title_en: 'Fix Bug: Correct the Typo',
      prompt_ko: '코드에 오타(pritn)가 있습니다. 올바른 함수명 print로 수정하여 100을 출력해보세요.',
      prompt_en: 'There is a typo (pritn) in the code. Correct it to print to output 100.',
      templateCode: 'pritn(100)',
      targetCode: 'print(100)',
      expectedOutput: '100',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '100',
        },
      ],
      hint_ko: 'pritn의 t와 n의 순서를 print로 바르게 고쳐줍니다.',
      hint_en: 'Change pritn to print.',
    },
    {
      id: 9,
      step: 9,
      type: 'typing',
      kind: 'fill_blank',
      title: '빈칸 채우기: 숫자 0 출력',
      title_en: 'Fill in the Blank: Print 0',
      prompt_ko: '괄호 안 빈칸 박스에 숫자 0을 입력하여 숫자 0을 출력해보세요.',
      prompt_en: 'Type 0 into the blank box to output 0.',
      templateCode: 'print(§)',
      targetCode: 'print(0)',
      expectedOutput: '0',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '0',
        },
      ],
      hint_ko: '괄호 안 빈칸에 0을 입력합니다: print(0)',
      hint_en: 'Type 0 into the blank: print(0)',
    },
    {
      id: 10,
      step: 10,
      type: 'typing',
      kind: 'one_line',
      title: '한 줄 코드 작성: 숫자 77 출력하기',
      title_en: 'Write One Line: Print 77',
      prompt_ko: '1레벨 마스터 미션! 숫자 77을 화면에 출력하는 한 줄 코드를 직접 작성해보세요.',
      prompt_en: 'Level 1 Master! Write a single line of code to print the number 77.',
      templateCode: '§§§§§§§§§',
      targetCode: 'print(77)',
      expectedOutput: '77',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '77',
        },
      ],
      hint_ko: '소문자 print를 입력하고 괄호 안에 77을 적어줍니다: print(77)',
      hint_en: 'Type print(77) to complete the 1st level!',
    },
  ],
};
