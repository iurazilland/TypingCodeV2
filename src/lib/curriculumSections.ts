export interface LevelItem {
  levelNumber: number;
  title_ko: string;
  title_en: string;
  syntaxTags: string[];
  description_ko?: string;
  description_en?: string;
}

export interface LevelSection {
  id: string;
  sectionNumber: number;
  title_ko: string;
  title_en: string;
  levels: LevelItem[];
}

// Python Basic Sections & Levels
const PYTHON_BASIC_SECTIONS: LevelSection[] = [
  {
    id: 'py-sec-1',
    sectionNumber: 1,
    title_ko: '기초 입출력과 연산',
    title_en: 'Foundations & Basic Arithmetic',
    levels: [
      { 
        levelNumber: 1, 
        title_ko: 'print() 함수와 숫자의 기초', 
        title_en: 'print() & Numbers Foundation',
        syntaxTags: ['print()'],
      },
      { 
        levelNumber: 2, 
        title_ko: '쉼표(,)와 여러 수식의 동시 출력', 
        title_en: 'Commas & Multiple Expressions',
        syntaxTags: ['print(a, b)'],
      },
      { 
        levelNumber: 3, 
        title_ko: '문자열(String)과 따옴표 출력', 
        title_en: 'Strings & Quotes Syntax',
        syntaxTags: ['str'],
      },
      { 
        levelNumber: 4, 
        title_ko: '변수(Variable) 선언과 기본 대입', 
        title_en: 'Variables & Assignment',
        syntaxTags: ['variable ='],
      },
      { 
        levelNumber: 5, 
        title_ko: 'input() 사용자 입력과 동적 처리', 
        title_en: 'input() & Dynamic Prompts',
        syntaxTags: ['input()'],
      },
    ],
  },
  {
    id: 'py-sec-2',
    sectionNumber: 2,
    title_ko: '자료형과 연산자',
    title_en: 'Data Types & Operators',
    levels: [
      { 
        levelNumber: 6, 
        title_ko: '정수(int)와 실수(float) 변환', 
        title_en: 'Integer & Float Conversion',
        syntaxTags: ['int()', 'float()', 'str()'],
      },
      { 
        levelNumber: 7, 
        title_ko: '사칙연산과 나머지(%)·몫(//) 연산자', 
        title_en: 'Arithmetic & Modulo Operations',
        syntaxTags: ['+', '-', '*', '/', '%', '//'],
      },
      { 
        levelNumber: 8, 
        title_ko: '문자열 결합(+)과 반복(*)', 
        title_en: 'String Concatenation & Repetition',
        syntaxTags: ['"a" + "b"', '"a" * 3'],
      },
      { 
        levelNumber: 9, 
        title_ko: '불리언(bool)과 비교 연산자', 
        title_en: 'Booleans & Comparison Operators',
        syntaxTags: ['bool', 'True', 'False', '==', '!='],
      },
      { 
        levelNumber: 10, 
        title_ko: '논리 연산자 (and, or, not)', 
        title_en: 'Logical Operators (and, or, not)',
        syntaxTags: ['and', 'or', 'not'],
      },
    ],
  },
  {
    id: 'py-sec-3',
    sectionNumber: 3,
    title_ko: '조건문과 분기 제어',
    title_en: 'Conditionals & Flow Control',
    levels: [
      { 
        levelNumber: 11, 
        title_ko: 'if 기본 조건 분기', 
        title_en: 'if Basic Conditional Branch',
        syntaxTags: ['if condition:', '들여쓰기(Indent)'],
      },
      { 
        levelNumber: 12, 
        title_ko: 'if-else 양방향 분기 제어', 
        title_en: 'if-else Two-Way Branching',
        syntaxTags: ['if ... else:', '양방향 분기'],
      },
      { 
        levelNumber: 13, 
        title_ko: 'if-elif-else 다중 분기문', 
        title_en: 'if-elif-else Multi-Conditionals',
        syntaxTags: ['elif condition:', '다중 조건'],
      },
      { 
        levelNumber: 14, 
        title_ko: '중첩 조건문과 복합 조건식', 
        title_en: 'Nested Conditionals',
        syntaxTags: ['if in if', '복합 논리식'],
      },
      { 
        levelNumber: 15, 
        title_ko: '조건문 종합 실전 챌린지', 
        title_en: 'Conditionals Comprehensive Challenge',
        syntaxTags: ['if / elif / else', '판별 알고리즘'],
      },
    ],
  },
  {
    id: 'py-sec-4',
    sectionNumber: 4,
    title_ko: '반복문과 제어 흐름',
    title_en: 'Loops & Iteration Control',
    levels: [
      { 
        levelNumber: 16, 
        title_ko: 'for 반복문과 range() 기초', 
        title_en: 'for Loops & range() Basics',
        syntaxTags: ['for i in range():', '반복문'],
      },
      { 
        levelNumber: 17, 
        title_ko: 'for 반복문 응용과 누적 합계', 
        title_en: 'for Loops & Accumulator Pattern',
        syntaxTags: ['total += i', '누적 연산'],
      },
      { 
        levelNumber: 18, 
        title_ko: 'while 조건 반복문', 
        title_en: 'while Loops & Condition',
        syntaxTags: ['while condition:', '루프 탈출'],
      },
      { 
        levelNumber: 19, 
        title_ko: 'break와 continue 흐름 제어', 
        title_en: 'break & continue Control',
        syntaxTags: ['break', 'continue'],
      },
      { 
        levelNumber: 20, 
        title_ko: '기초 제어문 마스터 챌린지', 
        title_en: 'Control Flow Master Challenge',
        syntaxTags: ['for', 'while', 'if', '제어문 마스터'],
      },
    ],
  },
];

// Visual Basic Sections & Levels
const VB_BASIC_SECTIONS: LevelSection[] = [
  {
    id: 'vb-sec-1',
    sectionNumber: 1,
    title_ko: '기초 문법과 변수 선언',
    title_en: 'Syntax & Variable Declaration',
    levels: [
      { 
        levelNumber: 1, 
        title_ko: 'Console.WriteLine()과 기본 출력', 
        title_en: 'Console.WriteLine() Basics',
        syntaxTags: ['Console.WriteLine()', '기본 출력'],
      },
      { 
        levelNumber: 2, 
        title_ko: 'Dim 키워드와 정수형(Integer) 변수', 
        title_en: 'Dim & Integer Variables',
        syntaxTags: ['Dim', 'As Integer', '초기화'],
      },
      { 
        levelNumber: 3, 
        title_ko: '문자열(String)과 문자열 결합(&)', 
        title_en: 'String & Ampersand (&) Operator',
        syntaxTags: ['As String', '결합 연산자 &'],
      },
      { 
        levelNumber: 4, 
        title_ko: '실수형(Double)과 사칙연산', 
        title_en: 'Double & Arithmetic Operators',
        syntaxTags: ['As Double', '+', '-', '*', '/'],
      },
      { 
        levelNumber: 5, 
        title_ko: '기본 변수 제어 종합 실습', 
        title_en: 'Variables Comprehensive Practice',
        syntaxTags: ['Dim', 'Console.ReadLine()'],
      },
    ],
  },
  {
    id: 'vb-sec-2',
    sectionNumber: 2,
    title_ko: '조건 분기와 반복 루프',
    title_en: 'Conditionals & Loop Structures',
    levels: [
      { 
        levelNumber: 6, 
        title_ko: 'If...Then...Else 조건 분기', 
        title_en: 'If...Then...Else Control',
        syntaxTags: ['If...Then', 'Else', 'End If'],
      },
      { 
        levelNumber: 7, 
        title_ko: 'Select Case 다중 분기문', 
        title_en: 'Select Case Statements',
        syntaxTags: ['Select Case', 'Case Else'],
      },
      { 
        levelNumber: 8, 
        title_ko: 'For...Next 반복문 카운팅', 
        title_en: 'For...Next Loop Counting',
        syntaxTags: ['For i = 1 To n', 'Next'],
      },
      { 
        levelNumber: 9, 
        title_ko: 'Do While...Loop 조건 반복', 
        title_en: 'Do While...Loop Condition',
        syntaxTags: ['Do While', 'Loop'],
      },
      { 
        levelNumber: 10, 
        title_ko: '제어 흐름 종합 실전 실습', 
        title_en: 'Control Flow Master Challenge',
        syntaxTags: ['Exit For', '제어 흐름 챌린지'],
      },
    ],
  },
  {
    id: 'vb-sec-3',
    sectionNumber: 3,
    title_ko: '프로시저와 함수 모듈화',
    title_en: 'Sub & Function Procedures',
    levels: [
      { 
        levelNumber: 11, 
        title_ko: 'Sub 프로시저 선언과 호출', 
        title_en: 'Sub Procedures & Call',
        syntaxTags: ['Sub ... End Sub', 'Call'],
      },
      { 
        levelNumber: 12, 
        title_ko: '매개변수 전달 (ByVal vs ByRef)', 
        title_en: 'Parameter Passing (ByVal / ByRef)',
        syntaxTags: ['ByVal', 'ByRef'],
      },
      { 
        levelNumber: 13, 
        title_ko: 'Function 반환값 함수 작성', 
        title_en: 'Function Return Values',
        syntaxTags: ['Function ... As', 'Return'],
      },
      { 
        levelNumber: 14, 
        title_ko: '1차원 배열 선언과 순회', 
        title_en: 'Array Declarations & Iteration',
        syntaxTags: ['Dim arr()', 'UBound()'],
      },
      { 
        levelNumber: 15, 
        title_ko: 'Visual Basic & VBA 기초 완성 챌린지', 
        title_en: 'Visual Basic & VBA Master',
        syntaxTags: ['VB & VBA 마스터', '프로시저 완성'],
      },
    ],
  },
];

// C Language Sections & Levels
const C_BASIC_SECTIONS: LevelSection[] = [
  {
    id: 'c-sec-1',
    sectionNumber: 1,
    title_ko: 'C 진입점과 표준 입출력',
    title_en: 'Entry Point & Standard I/O',
    levels: [
      { 
        levelNumber: 1, 
        title_ko: 'main() 함수와 printf() 첫 출력', 
        title_en: 'main() & printf() Basics',
        syntaxTags: ['#include <stdio.h>', 'main()', 'printf()'],
      },
      { 
        levelNumber: 2, 
        title_ko: '서식 지정자(%d, %f)와 개행(\\n)', 
        title_en: 'Format Specifiers & Newlines',
        syntaxTags: ['%d', '%f', '\\n'],
      },
      { 
        levelNumber: 3, 
        title_ko: '기본 정수형(int)과 변수 선언', 
        title_en: 'int Types & Variables',
        syntaxTags: ['int x = 10;', '변수 선언'],
      },
      { 
        levelNumber: 4, 
        title_ko: '기본 사칙연산과 대입 연산자', 
        title_en: 'Basic Arithmetic Operations',
        syntaxTags: ['+', '-', '*', '/', '='],
      },
      { 
        levelNumber: 5, 
        title_ko: 'scanf() 표준 입력과 주소(&)', 
        title_en: 'scanf() & Address Operator',
        syntaxTags: ['scanf("%d", &x)', '주소연산자 &'],
      },
    ],
  },
  {
    id: 'c-sec-2',
    sectionNumber: 2,
    title_ko: '연산자와 조건 분기',
    title_en: 'Operators & Conditionals',
    levels: [
      { 
        levelNumber: 6, 
        title_ko: '실수형(float/double)과 형변환', 
        title_en: 'Float Types & Casting',
        syntaxTags: ['float', 'double', '(int)캐스팅'],
      },
      { 
        levelNumber: 7, 
        title_ko: '비교 연산자와 논리 연산자', 
        title_en: 'Comparison & Logic Operators',
        syntaxTags: ['==', '!=', '&&', '||'],
      },
      { 
        levelNumber: 8, 
        title_ko: 'if - else 조건 분기', 
        title_en: 'if - else Conditional Branch',
        syntaxTags: ['if (cond) { }', 'else { }'],
      },
      { 
        levelNumber: 9, 
        title_ko: 'switch - case 다중 분기', 
        title_en: 'switch - case Statements',
        syntaxTags: ['switch()', 'case', 'break'],
      },
      { 
        levelNumber: 10, 
        title_ko: '조건 분기 종합 판별 챌린지', 
        title_en: 'Conditionals Master Challenge',
        syntaxTags: ['중첩 if', '판별 챌린지'],
      },
    ],
  },
  {
    id: 'c-sec-3',
    sectionNumber: 3,
    title_ko: '반복문과 루프 제어',
    title_en: 'Loops & Iteration',
    levels: [
      { 
        levelNumber: 11, 
        title_ko: 'for 반복문과 인덱스 제어', 
        title_en: 'for Loops & Counter',
        syntaxTags: ['for (i=0; i<n; i++)'],
      },
      { 
        levelNumber: 12, 
        title_ko: 'while 조건 반복문', 
        title_en: 'while Loops',
        syntaxTags: ['while (cond) { }'],
      },
      { 
        levelNumber: 13, 
        title_ko: 'do - while 후조건 반복', 
        title_en: 'do - while Loops',
        syntaxTags: ['do { } while (cond);'],
      },
      { 
        levelNumber: 14, 
        title_ko: '이중 for 루프와 구구단', 
        title_en: 'Nested for Loops',
        syntaxTags: ['이중 for문', '구구단'],
      },
      { 
        levelNumber: 15, 
        title_ko: 'break와 continue 루프 탈출', 
        title_en: 'break & continue Control',
        syntaxTags: ['break', 'continue'],
      },
    ],
  },
  {
    id: 'c-sec-4',
    sectionNumber: 4,
    title_ko: '배열과 포인터 입문',
    title_en: 'Arrays & Pointer Foundations',
    levels: [
      { 
        levelNumber: 16, 
        title_ko: '1차원 배열(Array) 선언과 초기화', 
        title_en: '1D Arrays Declaration',
        syntaxTags: ['int arr[5];', '인덱스 0~n-1'],
      },
      { 
        levelNumber: 17, 
        title_ko: '배열 순회와 최대/최소값 탐색', 
        title_en: 'Array Iteration & Search',
        syntaxTags: ['배열 순회', '최댓값 탐색'],
      },
      { 
        levelNumber: 18, 
        title_ko: '문자 배열(문자열)과 null(\\0)', 
        title_en: 'Strings & Null Terminator',
        syntaxTags: ['char str[]', '\\0 널문자'],
      },
      { 
        levelNumber: 19, 
        title_ko: '포인터(Pointer)와 주소 참조', 
        title_en: 'Pointers & Address Reference',
        syntaxTags: ['int *ptr = &x;', '역참조 *'],
      },
      { 
        levelNumber: 20, 
        title_ko: 'C언어 기초 완성 파이널 챌린지', 
        title_en: 'C Basics Master Challenge',
        syntaxTags: ['C 기초 마스터', '메모리 & 제어'],
      },
    ],
  },
];

// Generic Section Generator for Any Track
export function getCourseSections(trackId: string, moduleId: string, totalLevels: number = 20, skills: string[] = []): LevelSection[] {
  const normTrack = trackId.toLowerCase();
  const normModule = moduleId.toLowerCase();

  if (normTrack === 'python' && (normModule === 'py-basic' || normModule === 'python_basic')) {
    return PYTHON_BASIC_SECTIONS;
  }
  if (normTrack === 'vb' || normModule === 'vb-basic') {
    return VB_BASIC_SECTIONS;
  }
  if (normTrack === 'c' && normModule === 'c-basic') {
    return C_BASIC_SECTIONS;
  }

  // Generic 3-4 sections division
  const sectionCount = Math.max(2, Math.min(4, Math.ceil(totalLevels / 5)));
  const levelsPerSection = Math.ceil(totalLevels / sectionCount);

  const sections: LevelSection[] = [];
  let currentLevel = 1;

  for (let s = 1; s <= sectionCount; s++) {
    const endLevel = Math.min(totalLevels, currentLevel + levelsPerSection - 1);
    if (currentLevel > totalLevels) break;

    const skillTitle = skills[s - 1] || `핵심 프로그래밍 ${s}단계`;
    const levels: LevelItem[] = [];

    for (let l = currentLevel; l <= endLevel; l++) {
      levels.push({
        levelNumber: l,
        title_ko: `${skillTitle} (${l}레벨)`,
        title_en: `${skillTitle} (Level ${l})`,
        syntaxTags: [`${normTrack}`, `${skillTitle.split(' ')[0]}`, `${l}레벨`],
      });
    }

    sections.push({
      id: `${normModule}-sec-${s}`,
      sectionNumber: s,
      title_ko: skillTitle,
      title_en: skillTitle,
      levels,
    });

    currentLevel = endLevel + 1;
  }

  return sections;
}
