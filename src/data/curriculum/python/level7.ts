import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 7레벨: print()의 sep과 end 옵션 (13단계 표준 구성)
// - [1,3,5,7,9단계] 블록 코딩 개념 도입 (기본 print 블록 우클릭 → sep / end 옵션 개별 추가 및 기본값 확인)
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
      prompt_ko: 'print 블록을 우클릭해 sep 옵션을 추가하고, 세 숫자 2026, 10, 31을 넣은 뒤 구분자(sep)를 " "에서 "-"로 변경하여 2026-10-31을 출력해보세요.',
      prompt_en: 'Right-click the print block to add the sep option, enter 2026, 10, 31, and change the separator (sep) from " " to "-" to print 2026-10-31.',
      hint_ko: '캔버스에 놓은 print 블록을 우클릭하여 [sep 옵션 추가]를 선택한 뒤, 값 칸에 2026, 10, 31을 넣고 sep= 칸의 기본값 " "을 "-"로 바꿔보세요.',
      hint_en: 'Right-click the print block on the canvas, select [Add sep option], enter 2026, 10, 31, and change sep= from " " to "-".',
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
      prompt_ko: '빈칸에 항목 사이를 구분하는 옵션 이름을 채워 세 숫자가 붙임표로 연결된 결과가 출력되도록 해보세요.',
      prompt_en: 'Fill in the blank with the option name that separates items so the three numbers are joined with hyphens.',
      hint_ko: '쉼표로 나열한 항목 사이의 구분 문자열을 지정하는 옵션 이름인 sep을 빈칸에 입력하세요.',
      hint_en: 'Enter sep in the blank to specify the separator string between comma-separated items.',
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
      prompt_ko: 'print 블록에 우클릭으로 sep 옵션을 추가하고, 문자열 "Lv"와 숫자 7 사이의 구분자(sep)를 빈 문자열 ""로 바꾸어 Lv7을 출력해보세요.',
      prompt_en: 'Right-click the print block to add sep, enter "Lv", 7, and change the separator (sep) to an empty string "" to print Lv7.',
      hint_ko: 'print 블록 우클릭 → [sep 옵션 추가] 후 첫째 칸에 "Lv", 7을 입력하고, sep= 칸의 기본 공백을 지워 따옴표 두 개("")만 남겨보세요.',
      hint_en: 'Right-click print → [Add sep option], enter "Lv", 7 in the first slot, and change sep= to two quotes ("") with no space inside.',
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
      hint_ko: '항목 사이의 구분자를 빈 문자열로 지정하는 sep=""를 빈칸에 입력하세요.',
      hint_en: 'Enter sep="" in the blank to set the separator to an empty string.',
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
      prompt_ko: '두 개의 print 블록을 연결하고, 첫째 블록을 우클릭해 end 옵션을 추가한 뒤 "Ready"와 끝맺음 문자 "!"를, 둘째 블록에 "Go"를 넣어 Ready!Go를 출력해보세요.',
      prompt_en: 'Connect two print blocks, right-click the first to add the end option with "Ready" and "!", and put "Go" in the second to print Ready!Go.',
      hint_ko: '첫째 print 블록을 우클릭해 [end 옵션 추가]를 누르면 기본 줄바꿈("\\n")이 보입니다. 값 칸에 "Ready"를 넣고 end= 칸을 "!"로 바꾼 뒤 아래에 print("Go") 블록을 연결하세요.',
      hint_en: 'Right-click the first print block and select [Add end option] (defaults to "\\n"). Enter "Ready", change end= to "!", and snap print("Go") below.',
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
      prompt_ko: '빈칸에 알맞은 끝맺음 옵션 이름을 채워 두 줄의 출력문이 줄바꿈 대신 공백 하나로 이어지도록 해보세요.',
      prompt_en: 'Fill in the blank with the ending option name so the two print statements join on one line with a single space.',
      hint_ko: '출력의 끝(기본값 줄바꿈)을 다른 문자열로 바꾸는 옵션 이름인 end를 빈칸에 입력하세요.',
      hint_en: 'Type end in the blank to replace the trailing newline with a space.',
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
      prompt_ko: '첫째 print 블록에 우클릭으로 end 옵션을 추가해 "Score"와 ":"를 넣고, 둘째 print 블록에서 숫자 100을 출력해 한 줄에 Score:100을 만들어보세요.',
      prompt_en: 'Right-click the first print block to add end with "Score" and ":", and output 100 in a second print block to print Score:100.',
      hint_ko: '첫째 print 블록 우클릭 → [end 옵션 추가] 후 값 칸에 "Score", end= 칸에 ":"를 입력하고, 아래에 연결한 둘째 print 블록에 따옴표 없이 100을 입력하세요.',
      hint_en: 'Right-click the first print block → [Add end option], enter "Score" and set end= to ":", then connect a second print block below with 100.',
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
      prompt_ko: '빈칸을 채워 첫 번째 출력 뒤에 줄을 바꾸지 않고 붙임표 기호로 두 단어가 한 줄에 연결되도록 해보세요.',
      prompt_en: 'Fill in the blank so the first output does not break the line and connects to the second word with a hyphen.',
      hint_ko: '줄바꿈 대신 붙임표를 끝에 출력하도록 빈칸에 end="-"를 입력하세요.',
      hint_en: 'Enter end="-" in the blank to print a hyphen instead of a newline at the end.',
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
      prompt_ko: '첫째 print 블록을 우클릭해 sep과 end 옵션을 모두 추가한 뒤 "A", "B"와 구분자(sep) "-", 끝맺음 "!"를 넣고, 둘째 print 블록에 "OK"를 넣어 A-B!OK를 출력해보세요.',
      prompt_en: 'Right-click the first print block to add both sep and end options, fill in "A", "B" with separator (sep) "-" and "!", and print "OK" in a second block to output A-B!OK.',
      hint_ko: '첫째 print 블록을 우클릭해 [sep 옵션 추가]와 [end 옵션 추가]를 모두 켜고, 값 칸에 "A", "B" / sep= 칸에 "-" / end= 칸에 "!"를 넣은 뒤 아래에 print("OK")를 연결하세요.',
      hint_en: 'Right-click the first print block to enable both [Add sep option] and [Add end option], enter "A", "B", sep="-", end="!", and attach print("OK") below.',
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
      prompt_ko: '두 빈칸에 알맞은 옵션 이름을 각각 채워 숫자 사이에는 슬래시가 들어가고 문장 끝에는 마침표가 찍히도록 해보세요.',
      prompt_en: 'Fill in the two blanks with the option names so slashes appear between numbers and a period appears at the end.',
      hint_ko: '항목 사이를 구분하는 첫째 빈칸에는 sep을, 출력 끝을 지정하는 둘째 빈칸에는 end를 입력하세요.',
      hint_en: 'Enter sep in the first blank for the item separator, and end in the second blank for the ending string.',
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
      prompt_ko: '틀린 곳을 수정하여 세 알파벳이 붙임표로 구분된 한 줄이 문법 오류 없이 출력되도록 해보세요.',
      prompt_en: 'Fix the syntax error so the three letters print on one line separated by hyphens.',
      hint_ko: '파이썬 함수에 옵션을 지정할 때는 콜론(:)이 아니라 등호(=)를 사용해 sep="-"처럼 작성해야 합니다.',
      hint_en: 'Keyword options in Python functions use an equals sign (sep="-"), not a colon (:).',
      templateCode: 'print("A", "B", "C", sep:"-")',
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
      prompt_ko: '날짜를 출력하는 예제 코드 아래에 한 줄을 추가하여 세 숫자 12, 30, 0을 콜론 기호로 구분한 시각 형태를 출력해보세요.',
      prompt_en: 'Type the date example code and add a line below to print the three numbers 12, 30, and 0 separated by colons.',
      hint_ko: '첫째 줄 예제를 입력하고 Enter를 누른 뒤, 둘째 줄에 print(12, 30, 0, sep=":")을 입력하세요.',
      hint_en: 'Type the first line example, press Enter, and write print(12, 30, 0, sep=":") on the second line.',
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
      hint_ko: '첫째 줄에서 "A"와 "B" 사이에는 "-"가 들어가고, 줄바꿈 대신 끝에 ":"가 붙은 뒤 둘째 줄의 "C"가 같은 줄에 이어서 출력됩니다.',
      hint_en: 'Line 1 joins "A" and "B" with "-" and ends with ":" instead of a newline, so "C" prints right after ":" on the same line.',
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
