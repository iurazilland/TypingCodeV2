import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 1레벨: print() 함수와 숫자의 기초 (10단계)
// - 1~5단계: 코드블록 모드 (Block Mode) - 블록으로 개념 체득
// - 6~10단계: 타이핑 모드 (Typing Mode) - 빈칸 채우기 및 오타 수정
// - prompt: 해당 파트의 문제 및 달성해야 할 학습 목표 제시
// - hint: 정답 코드를 직접 노출하지 않고, 개념적 접근법과 인터페이스 힌트 제공
// - 채점 기준: testCases 배열 내의 expectedOutput을 기준으로 자동 검증
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
      prompt_ko: '화면에 정수 10이 나타나도록 print() 블록을 조립하고 실행해보세요.',
      prompt_en: 'Assemble and run the print() block to display the integer 10 on the screen.',
      hint_ko: '도구 상자의 함수 카테고리에서 출력 블록을 찾아 시작 블록 밑에 홈을 맞춰 끼워보세요.',
      hint_en: 'Find the output block in the toolbox functions category and snap it beneath the start block.',
      targetCode: 'print(10)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '10',
        },
      ],
    },
    {
      id: 2,
      step: 2,
      type: 'block',
      kind: 'standard',
      title: '한 자리 숫자 5 출력하기',
      title_en: 'Print Number 5',
      prompt_ko: 'print() 블록을 활용하여 숫자 5를 터미널 화면에 출력해보세요.',
      prompt_en: 'Use the print() block to output the number 5 to the terminal screen.',
      hint_ko: '블록 안쪽의 흰색 입력 슬롯을 클릭하면 원하는 숫자를 변경할 수 있습니다.',
      hint_en: 'Click on the inner white input slot of the block to change the number.',
      targetCode: 'print(5)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '5',
        },
      ],
    },
    {
      id: 3,
      step: 3,
      type: 'block',
      kind: 'standard',
      title: '세 자리 큰 숫자 100 출력하기',
      title_en: 'Print 3-digit Number 100',
      prompt_ko: '세 자리 숫자 100을 화면에 출력하는 블록 코드를 완성해보세요.',
      prompt_en: 'Complete the block code to display the 3-digit number 100 on the screen.',
      hint_ko: '파이썬에서 숫자는 글자(문자열)와 달리 따옴표("")를 감싸지 않고 숫자 자체로 다룹니다.',
      hint_en: 'In Python, numbers are written directly without quotation marks, unlike text strings.',
      targetCode: 'print(100)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '100',
        },
      ],
    },
    {
      id: 4,
      step: 4,
      type: 'block',
      kind: 'standard',
      title: '숫자 0 출력하기',
      title_en: 'Print Number 0',
      prompt_ko: '컴퓨터 프로그래밍의 기준점이 되는 숫자 0을 화면에 출력해보세요.',
      prompt_en: 'Output the number 0, a fundamental starting value in programming, to the screen.',
      hint_ko: '0 역시 양수나 음수처럼 파이썬에서 유효한 정수(int) 데이터입니다.',
      hint_en: 'Zero is a valid integer (int) data type in Python, just like positive or negative numbers.',
      targetCode: 'print(0)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '0',
        },
      ],
    },
    {
      id: 5,
      step: 5,
      type: 'block',
      kind: 'standard',
      title: '블록 모드 마스터: 행운의 숫자 7 출력하기',
      title_en: 'Master Block Mode: Print Lucky 7',
      prompt_ko: '도움 없이 스스로 print() 블록을 가져와 숫자 7을 화면에 출력해보세요.',
      prompt_en: 'Independently bring in the print() block to output the number 7 on the screen.',
      hint_ko: '시작 블록의 아래쪽 홈에 블록이 자석처럼 딸깍 붙었는지 확인하고 실행 버튼을 눌러보세요.',
      hint_en: 'Make sure the block snaps firmly into the bottom notch of the start block before running.',
      targetCode: 'print(7)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '7',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // [타이핑 모드] 6~10단계: V1 챌린지 모드 (빈칸 채우기, 오타 수정)
    // - 빈칸은 § 기호로 지정 (예: §§은 2글자 빈칸 박스)
    // ------------------------------------------------------------------------
    {
      id: 6,
      step: 6,
      type: 'typing',
      kind: 'fill_blank',
      title: '빈칸 채우기: 숫자 10 출력',
      title_en: 'Fill in the Blank: Print 10',
      prompt_ko: '코드의 빈칸을 채워 터미널에 숫자 10이 출력되도록 만드세요.',
      prompt_en: 'Fill in the code blank so that the number 10 is printed to the terminal.',
      hint_ko: '함수 괄호 () 안에는 화면에 보여주고 싶은 전달값(인자)이 들어갑니다.',
      hint_en: 'The value (argument) you want to display goes inside the function parentheses ().',
      templateCode: 'print(§§)',
      targetCode: 'print(10)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '10',
        },
      ],
    },
    {
      id: 7,
      step: 7,
      type: 'typing',
      kind: 'fill_blank',
      title: '빈칸 채우기: 숫자 5 출력',
      title_en: 'Fill in the Blank: Print 5',
      prompt_ko: '한 자리 숫자 5가 화면에 나타나도록 빈칸을 완성하세요.',
      prompt_en: 'Complete the blank to display the single-digit number 5 on the screen.',
      hint_ko: '빈칸 박스의 길이는 입력해야 할 글자 수와 일치합니다.',
      hint_en: 'The width of the blank box matches the number of characters required.',
      templateCode: 'print(§)',
      targetCode: 'print(5)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '5',
        },
      ],
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'fix_bug',
      title: '틀린 곳 수정: 오타 고치기',
      title_en: 'Fix Bug: Correct the Typo',
      prompt_ko: '잘못 작성된 출력 명령어를 바르게 고쳐 숫자 100을 정상 출력해보세요.',
      prompt_en: 'Correct the misspelled output function to successfully print the number 100.',
      hint_ko: '파이썬의 화면 출력 표준 함수 이름은 영어로 "인쇄하다"라는 뜻의 철자를 가집니다.',
      hint_en: 'The standard Python function name for display is spelled like the English word for "to print".',
      templateCode: 'pritn(100)',
      targetCode: 'print(100)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '100',
        },
      ],
    },
    {
      id: 9,
      step: 9,
      type: 'typing',
      kind: 'fill_blank',
      title: '빈칸 채우기: 숫자 0 출력',
      title_en: 'Fill in the Blank: Print 0',
      prompt_ko: '빈칸을 채워 터미널에 숫자 0이 출력되는 코드를 완성하세요.',
      prompt_en: 'Fill in the blank to complete the code that prints the number 0 to the terminal.',
      hint_ko: '알파벳 대문자 O가 아닌, 키보드 숫자 0 키를 눌러 입력해야 합니다.',
      hint_en: 'Make sure to type the numeric key 0 rather than the uppercase letter O.',
      templateCode: 'print(§)',
      targetCode: 'print(0)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '0',
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'typing',
      kind: 'fill_blank',
      title: '빈칸 채우기: 숫자 77 출력',
      title_en: 'Fill in the Blank: Print 77',
      prompt_ko: '1레벨 종합 도전: 화면에 숫자 77이 출력되도록 빈칸을 채워 실행하세요.',
      prompt_en: 'Level 1 Final Challenge: Fill in the blank to output the number 77 on the screen and run.',
      hint_ko: '두 자리 연속된 동일한 숫자를 빈칸 박스 안에 차례대로 입력하세요.',
      hint_en: 'Type the two consecutive identical digits into the blank box sequentially.',
      templateCode: 'print(§§)',
      targetCode: 'print(77)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '77',
        },
      ],
    },
  ],
};
