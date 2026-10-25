import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 1레벨: print() 함수와 숫자의 기초 (10단계)
// - 1~5단계: 코드블록 모드 (Block Mode) - 블록으로 개념 체득
// - 6~10단계: 타이핑 모드 (Typing Mode) - 빈칸 채우기 및 오타 수정
// - prompt: 사용자가 직관적으로 파악할 수 있는 선명하고 간결한 미션 지시문
// - hint: 정답 코드를 직접 노출하지 않고, 개념적 길잡이 및 인터페이스 힌트 제공
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
      prompt_ko: '숫자 10을 화면에 출력해보세요.',
      prompt_en: 'Output the number 10 on the screen.',
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
      prompt_ko: '한 자리 숫자 5를 출력해보세요.',
      prompt_en: 'Output the single-digit number 5.',
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
      prompt_ko: '세 자리 큰 숫자 100을 출력해보세요.',
      prompt_en: 'Output the 3-digit number 100.',
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
      prompt_ko: '숫자 0을 화면에 출력해보세요.',
      prompt_en: 'Output the number 0 on the screen.',
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
      prompt_ko: '행운의 숫자 7을 출력해보세요.',
      prompt_en: 'Output the lucky number 7.',
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
      prompt_ko: '빈칸을 채워 숫자 10을 출력해보세요.',
      prompt_en: 'Fill in the blank to output the number 10.',
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
      prompt_ko: '빈칸을 채워 숫자 5를 출력해보세요.',
      prompt_en: 'Fill in the blank to output the number 5.',
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
      prompt_ko: '오타를 고쳐 숫자 100을 출력해보세요.',
      prompt_en: 'Fix the typo to output the number 100.',
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
      prompt_ko: '빈칸을 채워 숫자 0을 출력해보세요.',
      prompt_en: 'Fill in the blank to output the number 0.',
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
      prompt_ko: '빈칸을 채워 숫자 77을 출력해보세요.',
      prompt_en: 'Fill in the blank to output the number 77.',
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
