import { PracticeRound } from '@/lib/practiceTypes';

// ============================================================================
// 파이썬 기초 7레벨: print()의 sep과 end 옵션 (15단계)
// - [1~10단계] 블록 ➔ 타이핑 1:1 교차 5쌍
// - [11~12단계] 틀린 곳 수정 (fix_bug) 2문항
// - [13~14단계] 한 줄 완성 (one_line) 2문항
// - [15단계] 출력 결과 예측 선택 (predict_output) 1문항
// ============================================================================
export const PYTHON_LEVEL_7: PracticeRound = {
  id: 'py-basic-r7',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 7,
  title_ko: '7레벨: print()의 sep과 end 옵션',
  title_en: 'Level 7: print() Options (sep & end)',
  totalQuestions: 15,
  unlockedBlocks: ['print'],
  questions: [
    // ------------------------------------------------------------------------
    // Pair 1 (1~2단계): sep="구분자" 기본 사용법
    // ------------------------------------------------------------------------
    {
      id: 1,
      step: 1,
      type: 'block',
      kind: 'standard',
      prompt_ko: '[블록 조립] sep="-" 옵션을 지정해 날짜 2026-10-31을 출력해보세요.',
      prompt_en: '[Block] Use the sep="-" option in print() to print the formatted date 2026-10-31.',
      hint_ko: 'sep="-"를 지정하면 쉼표로 나열한 값들 사이가 하이픈으로 연결됩니다.',
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
      prompt_ko: '[빈칸 채우기] 빈칸에 구분자 옵션 이름을 채워 10-20-30이 출력되도록 해보세요.',
      prompt_en: '[Fill Blank] Fill in the blank with the separator option name to print 10-20-30.',
      hint_ko: '영어로 "분리하다"를 뜻하는 separate의 앞 3글자 sep을 입력하세요.',
      hint_en: 'Use the 3-letter option name sep taken from the start of "separate".',
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
      kind: 'standard',
      prompt_ko: '[블록 조립] sep="" 옵션으로 기본 공백을 없애 Lv7을 빈틈없이 출력해보세요.',
      prompt_en: '[Block] Set sep="" to an empty string in print() to output Lv7 without a space.',
      hint_ko: '문자열과 숫자를 빈틈없이 붙여 출력할 때 sep=""를 유용하게 사용합니다.',
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
      prompt_ko: '[빈칸 채우기] 빈칸을 채워 문자열과 숫자 사이의 공백을 없앤 No1을 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the blank to remove the default space so No1 prints without a gap.',
      hint_ko: 'sep 옵션 뒤에 등호(=)와 빈 따옴표("")를 이어 적은 sep=""를 입력하세요.',
      hint_en: 'Write sep="" to set the separator to an empty string.',
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
      kind: 'standard',
      prompt_ko: '[블록 조립] 첫 print()에 end="!"를 지정해 다음 출력과 이어진 Ready!Go를 출력해보세요.',
      prompt_en: '[Block] Use end="!" in the first print() so the next print() continues as Ready!Go.',
      hint_ko: '첫 번째 print()의 end="!" 덕분에 줄이 바뀌지 않고 느낌표 뒤에 두 번째 출력이 이어집니다.',
      hint_en: 'Because the first print() uses end="!", the second print() outputs on the same line.',
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
      prompt_ko: '[빈칸 채우기] 빈칸에 끝맺음 옵션 이름을 채워 한 줄로 Hello Python을 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the ending option name so the two print calls join as Hello Python.',
      hint_ko: '출력의 "끝(마무리)"을 뜻하는 영어 3글자 단어 end를 옵션 이름으로 사용합니다.',
      hint_en: 'Use the 3-letter option name end.',
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
      kind: 'standard',
      prompt_ko: '[블록 조립] 첫 print()에 end=":"를 지정해 Score:100이 한 줄에 이어지도록 조립해보세요.',
      prompt_en: '[Block] Use end=":" in the first print() to join the next output as Score:100.',
      hint_ko: '두 번의 print() 호출이 각각 실행되지만 화면에는 한 줄로 이어져 출력됩니다.',
      hint_en: 'Two separate print() calls execute in sequence, producing a single combined line.',
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
      prompt_ko: '[빈칸 채우기] 빈칸을 채워 줄바꿈 없이 하이픈(-)으로 연결된 Step1-Step2를 출력해보세요.',
      prompt_en: '[Fill Blank] Fill in the blank so the outputs join with a hyphen as Step1-Step2.',
      hint_ko: 'end 옵션에 하이픈 문자열을 지정하는 end="-"를 입력하세요.',
      hint_en: 'Write end="-" to finish the first print call with a hyphen.',
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
      kind: 'standard',
      prompt_ko: '[블록 조립] sep="-"와 end="!"를 동시에 사용해 A-B!OK를 출력해보세요.',
      prompt_en: '[Block] Use both sep="-" and end="!" inside print() to output A-B!OK.',
      hint_ko: 'sep="-"는 첫 줄의 두 문자 사이에 적용되고, end="!"는 첫 줄 끝에 적용됩니다.',
      hint_en: 'sep="-" separates the items in the first print(), while end="!" attaches to the end.',
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
      prompt_ko: '[빈칸 채우기] 두 빈칸에 옵션 이름을 채워 1/2/3.이 출력되도록 해보세요.',
      prompt_en: '[Fill Blank] Fill in the two option names so slashes separate the numbers and a dot ends the line.',
      hint_ko: '첫째 빈칸에는 구분 옵션 sep을, 둘째 빈칸에는 끝맺음 옵션 end를 넣어보세요.',
      hint_en: 'Use sep in the first blank and end in the second blank.',
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
    // 11~15단계: 실전 응용 (fix_bug 2 / one_line 2 / predict_output 1)
    // ------------------------------------------------------------------------
    {
      id: 11,
      step: 11,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '[틀린 곳 수정] 세 알파벳이 하이픈(-)으로 구분된 A-B-C가 출력되도록 옵션을 수정해보세요.',
      prompt_en: '[Fix Bug] Fix the wrong option name so the three letters print separated by hyphens as A-B-C.',
      hint_ko: '항목 사이를 구분하려면 end 대신 sep 옵션을 사용해야 합니다.',
      hint_en: 'Replace end with sep to set the separator between items.',
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
    {
      id: 12,
      step: 12,
      type: 'typing',
      kind: 'fix_bug',
      prompt_ko: '[틀린 곳 수정] 두 출력문이 줄바꿈 없이 Hi All로 이어지도록 옵션 이름을 수정해보세요.',
      prompt_en: '[Fix Bug] Fix the option name so the two print calls join on one line as Hi All.',
      hint_ko: '줄 끝의 줄바꿈을 공백으로 바꾸려면 sep 대신 end 옵션을 사용해야 합니다.',
      hint_en: 'Replace sep with end to change the line ending instead of the item separator.',
      templateCode: 'print("Hi", sep=" ")\nprint("All")',
      targetCode: 'print("Hi", end=" ")\nprint("All")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'Hi All',
        },
      ],
    },
    {
      id: 13,
      step: 13,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '[한 줄 완성] 둘째 줄에 세 숫자 12, 30, 0을 콜론(:)으로 구분한 12:30:0을 출력해보세요.',
      prompt_en: '[Complete Line] Complete line 2 to print 12, 30, and 0 separated by colons as 12:30:0.',
      hint_ko: '첫째 줄 구조를 활용하되 세 숫자를 12, 30, 0으로 바꾸고 sep=":"를 지정해보세요.',
      hint_en: 'Follow line 1 with 12, 30, 0 and set sep=":".',
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
    {
      id: 14,
      step: 14,
      type: 'typing',
      kind: 'one_line',
      prompt_ko: '[한 줄 완성] 둘째 줄에 sep 옵션을 사용해 "X"와 "Y"를 더하기 기호로 연결한 X+Y를 출력해보세요.',
      prompt_en: '[Complete Line] Complete line 2 using sep="+" to print "X" and "Y" joined as X+Y.',
      hint_ko: '첫째 줄처럼 "X", "Y" 뒤에 sep="+" 옵션을 지정해보세요.',
      hint_en: 'Follow line 1 and write print("X", "Y", sep="+") on line 2.',
      templateCode: 'print("A", "B", sep="/")\n§§§§§§§§§§§§§§§§§§§§§§§§',
      targetCode: 'print("A", "B", sep="/")\nprint("X", "Y", sep="+")',
      testCases: [
        {
          id: 1,
          input: '',
          expectedOutput: 'A/B\nX+Y',
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
      hint_ko: '첫째 줄의 sep="-"와 end=":"가 구분자와 줄 끝을 각각 어떻게 바꾸는지 확인해보세요.',
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
