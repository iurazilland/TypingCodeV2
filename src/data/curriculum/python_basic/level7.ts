import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 7레벨: print()의 sep과 end 옵션 (13단계 표준 구성)
// - [1,3,5,7,9단계] 블록 코딩 개념 도입 (옵션이 구성된 print 블록 사전 배치 → 기본값 " ", "\n" 확인 및 변경)
// - [2,4,6,8,10단계] 빈칸 채우기 타이핑 실습 (fill_blank)
// - [11단계] 버그 수정 (fix_bug)
// - [12단계] 예제 아래 한 줄 코드 추가 작성 (one_line)
// - [13단계] 출력 결과 예측 4지선다 퀴즈 (predict_output)
// ============================================================================
export const PYTHON_LEVEL_7: PracticeRound = {
  id: 'py-basic-r7',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 7,
  title_ko: '7레벨: print()의 sep과 end 옵션',
  title_en: 'Level 7: print() Options (sep & end)',
  totalQuestions: 13,
  unlockedBlocks: ['print'],
  questions: [
    // ------------------------------------------------------------------------
    // Pair 1 (1~2단계): sep="구분자" 기본 사용법
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      prompt_ko: 'print()의 sep 옵션은 쉼표(,)로 나열한 값들 사이에 들어갈 구분 문자열을 지정합니다. 블록의 코드를 따라 입력해 날짜 형식으로 출력해보세요.',
      prompt_en: 'The sep= option in print() specifies the separator string placed between comma-separated values. Trace the block code to print a formatted date.',
      hint_ko: 'sep 옵션을 생략하면 기본값인 공백(" ")이 들어가지만, sep="-"를 지정하면 값 사이가 하이픈으로 연결됩니다.',
      hint_en: 'Instead of the default space (" "), sep="-" joins the printed items with hyphens.',
      targetCode: 'print(2026, 10, 31, sep="-")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '2026-10-31',
        },
      ],
    },
    {
      id: 2,
      step: 2,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 항목 사이를 구분하는 옵션 이름을 채워 세 숫자가 하이픈(-)으로 연결된 10-20-30이 출력되도록 해보세요.',
      prompt_en: 'Fill in the blank with the option name that separates items so the three numbers print as 10-20-30.',
      hint_ko: '영어로 "분리하다·구분하다"를 뜻하는 단어 separate의 앞 3글자를 따온 옵션 이름을 사용합니다.',
      hint_en: 'Use the 3-letter option name taken from the start of the word "separate".',
      templateCode: 'print(10, 20, 30, §§§="-")',
      targetCode: 'print(10, 20, 30, sep="-")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '10-20-30',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 2 (3~4단계): sep="" 빈 문자열로 기본 공백 없애기
    // ------------------------------------------------------------------------
    {
      id: 3,
      step: 3,
      type: 'block',
      prompt_ko: 'print()의 sep 옵션에 글자가 없는 빈 문자열("")을 지정하면 쉼표로 나열한 값들 사이의 기본 공백을 완전히 없앨 수 있습니다. 블록의 코드를 따라 입력해보세요.',
      prompt_en: 'Setting sep="" to an empty string in print() removes the default space between comma-separated values. Trace the block code.',
      hint_ko: '문자열과 숫자를 형변환 없이 빈틈없이 붙여 출력할 때 sep=""를 유용하게 사용합니다.',
      hint_en: 'Using sep="" joins strings and numbers directly together without spaces.',
      targetCode: 'print("Lv", 7, sep="")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Lv7',
        },
      ],
    },
    {
      id: 4,
      step: 4,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸을 채워 문자열과 숫자 사이의 기본 공백을 없애고 빈틈없이 이어진 No1을 출력해보세요.',
      prompt_en: 'Fill in the blank to remove the default space between the text and number so No1 prints without a gap.',
      hint_ko: '"분리하다(separate)"의 앞 3글자 옵션 이름 뒤에 등호(=)를 쓰고, 그 값으로 안에 글자가 없는 빈 따옴표 한 쌍을 지정해보세요.',
      hint_en: 'Write the 3-letter option from "separate" followed by = and an empty pair of quotes with nothing inside.',
      templateCode: 'print("No", 1, §§§§§§)',
      targetCode: 'print("No", 1, sep="")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'No1',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 3 (5~6단계): end 옵션으로 줄바꿈 대신 한 줄로 이어 출력하기
    // ------------------------------------------------------------------------
    {
      id: 5,
      step: 5,
      type: 'block',
      prompt_ko: 'print()는 기본적으로 출력 끝에 줄바꿈(\\n)을 수행하지만, end 옵션을 지정하면 줄을 바꾸는 대신 원하는 문자열을 끝에 붙이고 다음 출력을 같은 줄에 이어갑니다. 블록의 코드를 따라 입력해보세요.',
      prompt_en: 'By default, print() ends with a newline (\\n), but the end= option replaces that newline with a custom string so the next print() continues on the same line. Trace the block code.',
      hint_ko: '첫 번째 print()의 end="!" 덕분에 줄이 바뀌지 않고 느낌표 바로 뒤에 두 번째 출력값이 이어집니다.',
      hint_en: 'Because the first print() uses end="!", the second print() outputs immediately after the exclamation mark on the same line.',
      targetCode: 'print("Ready", end="!")\nprint("Go")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Ready!Go',
        },
      ],
    },
    {
      id: 6,
      step: 6,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸에 알맞은 끝맺음 옵션 이름을 채워 두 줄의 출력문이 줄바꿈 대신 공백 하나로 이어지도록 해보세요. (결과: Hello Python)',
      prompt_en: 'Fill in the blank with the ending option name so the two print statements join on one line with a single space.',
      hint_ko: '출력의 "끝(마무리)"을 뜻하는 영어 3글자 단어를 옵션 이름으로 사용합니다.',
      hint_en: 'Use the 3-letter English word meaning the "finish" of a line as the option name.',
      templateCode: 'print("Hello", §§§=" ")\nprint("Python")',
      targetCode: 'print("Hello", end=" ")\nprint("Python")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Hello Python',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 4 (7~8단계): end="기호"를 활용한 라벨과 값의 한 줄 연결
    // ------------------------------------------------------------------------
    {
      id: 7,
      step: 7,
      type: 'block',
      prompt_ko: '첫 번째 print()에 end=":"를 지정하면 줄바꿈 대신 콜론 기호로 끝맺어, 다음 줄의 print() 출력값을 한 줄에 자연스럽게 연결할 수 있습니다. 블록의 코드를 따라 입력해보세요.',
      prompt_en: 'Using end=":" in the first print() finishes the output with a colon instead of a newline, joining the next print() call onto the same line. Trace the block code.',
      hint_ko: '두 번의 print() 호출이 각각 실행되지만 화면에는 한 줄로 이어져 출력됩니다.',
      hint_en: 'Two separate print() calls execute in sequence, producing a single combined line of output.',
      targetCode: 'print("Score", end=":")\nprint(100)',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Score:100',
        },
      ],
    },
    {
      id: 8,
      step: 8,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '빈칸을 채워 첫 번째 출력 뒤에 줄을 바꾸지 않고 하이픈(-)으로 연결된 Step1-Step2가 한 줄에 출력되도록 해보세요.',
      prompt_en: 'Fill in the blank so the first output does not break the line and joins with a hyphen (-) to print Step1-Step2.',
      hint_ko: '출력의 "끝"을 뜻하는 3글자 옵션 이름 뒤에 등호(=)를 쓰고, 줄바꿈 대신 들어갈 하이픈 문자열을 지정해보세요.',
      hint_en: 'Write the 3-letter ending option followed by = and a quoted hyphen string.',
      templateCode: 'print("Step1", §§§§§§§)\nprint("Step2")',
      targetCode: 'print("Step1", end="-")\nprint("Step2")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Step1-Step2',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // Pair 5 (9~10단계): sep과 end 동시 활용
    // ------------------------------------------------------------------------
    {
      id: 9,
      step: 9,
      type: 'block',
      prompt_ko: '하나의 print() 안에서 값 사이를 구분하는 sep 옵션과 줄 끝을 지정하는 end 옵션을 동시에 사용할 수도 있습니다. 블록의 코드를 따라 입력해보세요.',
      prompt_en: 'You can use both sep= (between items) and end= (at the end of the print call) together inside a single print() statement. Trace the block code.',
      hint_ko: 'sep="-"는 첫 줄의 두 문자 사이에 적용되고, end="!"는 첫 줄 출력이 끝나는 지점에 적용됩니다.',
      hint_en: 'sep="-" separates the items in the first print(), while end="!" attaches to the end before the second print().',
      targetCode: 'print("A", "B", sep="-", end="!")\nprint("OK")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'A-B!OK',
        },
      ],
    },
    {
      id: 10,
      step: 10,
      type: 'typing',
      kind: 'fill_blank',
      prompt_ko: '두 빈칸에 알맞은 옵션 이름을 각각 채워 숫자 사이에는 슬래시(/)가, 끝에는 마침표(.)가 붙은 1/2/3.이 출력되도록 해보세요.',
      prompt_en: 'Fill in the two blanks with the option names so slashes (/) separate the numbers and a period (.) ends the output as 1/2/3..',
      hint_ko: '첫째 빈칸에는 "분리하다(separate)"의 앞 3글자 옵션을, 둘째 빈칸에는 출력의 "끝"을 뜻하는 3글자 옵션을 넣어보세요.',
      hint_en: 'Use the 3-letter option from "separate" in the first blank and the 3-letter word for "finish" in the second.',
      templateCode: 'print(1, 2, 3, §§§="/", §§§=".")',
      targetCode: 'print(1, 2, 3, sep="/", end=".")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '1/2/3.',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 11단계: 틀린 곳 수정 (fix_bug)
    // ------------------------------------------------------------------------
    {
      id: 11,
      step: 11,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '틀린 옵션 이름을 수정하여 세 알파벳이 하이픈(-)으로 구분된 A-B-C가 출력되도록 해보세요.',
      prompt_en: 'Fix the wrong option name so the three letters print separated by hyphens (-) as A-B-C.',
      hint_ko: '현재 코드에는 출력의 끝을 바꾸는 옵션이 적혀 있습니다. 항목 사이를 "분리하다(separate)"에서 따온 앞 3글자 옵션으로 고쳐보세요.',
      hint_en: 'The current option changes the line ending; replace it with the 3-letter option from "separate" that divides items.',
      templateCode: 'print("A", "B", "C", end="-")',
      targetCode: 'print("A", "B", "C", sep="-")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'A-B-C',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 12단계: 예제 아래 한 줄 추가 작성 (one_line)
    // ------------------------------------------------------------------------
    {
      id: 12,
      step: 12,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '날짜를 출력하는 예제 코드 아래에 한 줄을 추가하여 세 숫자 12, 30, 0을 콜론(:)으로 구분한 12:30:0을 출력해보세요.',
      prompt_en: 'Type the date example code and add a line below to print the three numbers 12, 30, and 0 separated by colons (:) as 12:30:0.',
      hint_ko: '첫째 줄 예제의 구조를 그대로 활용하되 세 숫자를 12, 30, 0으로 바꾸고, 구분자 옵션의 값만 콜론 문자열로 지정해보세요.',
      hint_en: 'Follow the structure of line 1 with the numbers 12, 30, 0 and set the separator option string to a colon.',
      templateCode: 'print(2026, 10, 31, sep="-")\n§§§§§§§§§§§§§§§§§§§§§§§§§',
      targetCode: 'print(2026, 10, 31, sep="-")\nprint(12, 30, 0, sep=":")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: '2026-10-31\n12:30:0',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // 13단계: 출력 결과 예측 선택 (predict_output)
    // ------------------------------------------------------------------------
    {
      id: 13,
      step: 13,
      type: 'quiz',
      kind: 'predict_output',
      prompt_ko: '다음 파이썬 코드를 실행했을 때 화면에 출력될 올바른 결과를 선택해보세요.',
      prompt_en: 'Select the exact output that will be printed when the following Python code runs.',
      hint_ko: '첫째 줄의 두 옵션이 두 문자 사이의 구분자와 줄 끝의 줄바꿈을 각각 무엇으로 바꾸는지 확인한 뒤, 둘째 줄 문자가 어디에 붙을지 생각해보세요.',
      hint_en: 'Check how line 1 replaces the space between items and the trailing newline before line 2 prints.',
      targetCode: 'print("A", "B", sep="-", end=":")\nprint("C")',
      choices: ['A-B\nC', 'A-B:C', 'A:B-C', 'A B:C'],
      correctChoiceIndex: 1,
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'A-B:C',
        },
      ],
    },
  ],
};
