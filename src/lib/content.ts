import { LanguageMeta, LevelData, SupportedLanguage } from './types';

export const LANGUAGES_LIST: LanguageMeta[] = [
  {
    id: 'python',
    name: 'Python',
    iconName: 'Code2',
    badge: 'CPython 3.10',
    tagline: '세계에서 가장 인기 있는 입문 & 데이터 사이언스 언어',
    description: '직관적인 문법과 강력한 라이브러리를 실제 CPython 샌드박스에서 한 줄씩 실습합니다.',
    totalLevels: 50,
    runtimeType: 'piston-python',
    accentColor: '#10b981',
    gradient: '#10b981',
  },
  {
    id: 'c',
    name: 'C Language',
    iconName: 'Cpu',
    badge: 'GCC 10.2',
    tagline: '하드웨어와 메모리를 지배하는 프로그래밍의 정석',
    description: 'GCC 컴파일러를 통해 실제 바이너리를 빌드하고 포인터, 메모리, 시스템 원리를 체득합니다.',
    totalLevels: 50,
    runtimeType: 'piston-gcc',
    accentColor: '#38bdf8',
    gradient: '#38bdf8',
  },
  {
    id: 'web',
    name: 'Web (HTML/CSS/JS)',
    iconName: 'Globe',
    badge: 'Real-time DOM',
    tagline: '화면이 즉각 살아 움직이는 모던 웹 프론트엔드',
    description: 'HTML 뼈대부터 CSS 디자인, JS 인터랙션까지 브라우저 라이브 뷰포트에서 즉시 확인합니다.',
    totalLevels: 50,
    runtimeType: 'browser-iframe',
    accentColor: '#f59e0b',
    gradient: '#f59e0b',
  },
];

export const INITIAL_LEVELS: Partial<Record<SupportedLanguage, LevelData[]>> = {
  python: [
    {
      id: 'py-1',
      levelNumber: 1,
      language: 'python',
      title_ko: 'Hello World와 출력',
      title_en: 'Hello World & Print',
      description_ko: '화면에 텍스트를 출력하는 가장 기본적인 print() 함수를 배웁니다.',
      description_en: 'Learn the fundamental print() function to display text on screen.',
      levelType: 'practice',
      category: 'Phase 1: 기초 문법',
      steps: [
        {
          step: 1,
          guide_ko: '모든 프로그래밍의 첫걸음! Hello World를 출력해 봅시다.',
          guide_en: 'First step in programming: Print Hello World.',
          code: 'print("Hello, World!")',
          tip: '파이썬의 print()는 괄호 안의 글자(문자열)를 화면에 출력해 줍니다.',
        },
        {
          step: 2,
          guide_ko: '따옴표 안에 원하는 한국어 인사말을 넣어 출력해 보세요.',
          guide_en: 'Print a Korean greeting inside quotes.',
          code: 'print("반갑습니다! TypingCode V2")',
          tip: '작은따옴표(\'\')와 큰따옴표("") 모두 문자열을 감쌀 때 사용할 수 있습니다.',
        },
        {
          step: 3,
          guide_ko: '숫자 연산 결과를 print 안에 넣어 바로 계산 결과를 확인하세요.',
          guide_en: 'Evaluate a mathematical expression directly inside print.',
          code: 'print("10 + 20 =", 10 + 20)',
          tip: '쉼표(,)로 구분하면 텍스트와 숫자를 공백을 두고 함께 출력할 수 있습니다.',
        },
      ],
    },
    {
      id: 'py-2',
      levelNumber: 2,
      language: 'python',
      title_ko: '변수와 기본 연산',
      title_en: 'Variables & Arithmetic',
      description_ko: '데이터를 그릇에 담아 기억하는 변수(Variable)의 개념을 학습합니다.',
      description_en: 'Understand variables to store and manipulate numbers and values.',
      levelType: 'practice',
      category: 'Phase 1: 기초 문법',
      steps: [
        {
          step: 1,
          guide_ko: '변수 x에 100을 담고 출력해 봅시다.',
          guide_en: 'Assign 100 to variable x and print it.',
          code: 'x = 100\nprint("x 값은:", x)',
          tip: '= 기호는 "오른쪽 값을 왼쪽 변수에 대입한다"는 뜻입니다.',
        },
        {
          step: 2,
          guide_ko: '두 개의 숫자를 변수에 담아 더하고 곱해 보세요.',
          guide_en: 'Store two numbers in variables and calculate sum and product.',
          code: 'a = 15\nb = 4\nprint("합:", a + b)\nprint("곱:", a * b)',
          tip: '컴퓨터는 위에서 아래로 한 줄씩 순차적으로 코드를 실행합니다.',
        },
      ],
    },
    {
      id: 'py-5',
      levelNumber: 5,
      language: 'python',
      title_ko: '[Challenge] 기초 입출력 마스터',
      title_en: '[Challenge] Basic I/O Master',
      description_ko: '변수와 출력 개념을 종합하여 평가하는 실전 챌린지입니다.',
      description_en: 'A challenge level testing your mastery of variables and print.',
      levelType: 'challenge',
      category: 'Phase 1: 기초 문법',
      steps: [
        {
          step: 1,
          guide_ko: '변수 name과 score를 선언하고 형식에 맞춰 출력하세요.',
          guide_en: 'Declare name and score, then print them formatted.',
          code: 'name = "CodeMaster"\nscore = 95\nprint(f"Player: {name}, Score: {score}")',
          tip: 'f-string(f"...")을 쓰면 중괄호 {} 안에 변수 이름을 넣어 깔끔하게 출력할 수 있습니다.',
        },
      ],
    },
  ],
  c: [
    {
      id: 'c-1',
      levelNumber: 1,
      language: 'c',
      title_ko: 'Hello World와 main 함수',
      title_en: 'Hello World & main()',
      description_ko: 'C언어의 필수 진입점인 main 함수와 printf 표준 출력을 학습합니다.',
      description_en: 'Learn the C entry point main() and standard printf() function.',
      levelType: 'practice',
      category: 'Phase 1: C 기본 구조',
      steps: [
        {
          step: 1,
          guide_ko: '표준 입출력 헤더를 포함하고 Hello World를 출력합니다.',
          guide_en: 'Include stdio.h and print Hello World.',
          code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, C Language!\\n");\n    return 0;\n}',
          tip: '#include <stdio.h>는 화면 출력(printf)에 필요한 C 표준 헤더입니다.',
        },
        {
          step: 2,
          guide_ko: '줄바꿈 문자(\\n)를 사용하여 두 줄로 메시지를 출력해 봅시다.',
          guide_en: 'Use newline character \\n to print across multiple lines.',
          code: '#include <stdio.h>\n\nint main() {\n    printf("Line 1: Start\\n");\n    printf("Line 2: Ready\\n");\n    return 0;\n}',
          tip: 'C언어의 모든 실행 문장 끝에는 세미콜론(;)이 반드시 필요합니다.',
        },
      ],
    },
    {
      id: 'c-2',
      levelNumber: 2,
      language: 'c',
      title_ko: '정수형 변수와 %d 서식 지정자',
      title_en: 'Integers & %d Specifier',
      description_ko: 'int 자료형과 printf 서식 지정자를 사용하여 숫자를 출력합니다.',
      description_en: 'Learn int variables and format specifier %d in printf.',
      levelType: 'practice',
      category: 'Phase 1: C 기본 구조',
      steps: [
        {
          step: 1,
          guide_ko: '정수형 변수 age를 선언하고 %d로 출력해 보세요.',
          guide_en: 'Declare integer variable age and output with %d.',
          code: '#include <stdio.h>\n\nint main() {\n    int age = 20;\n    printf("나이: %d세\\n", age);\n    return 0;\n}',
          tip: '%d는 10진수 정수(Decimal)를 출력하기 위한 서식 지정자(Specifier)입니다.',
        },
      ],
    },
    {
      id: 'c-5',
      levelNumber: 5,
      language: 'c',
      title_ko: '[Challenge] C언어 연산자 계산기',
      title_en: '[Challenge] Operator Calculator',
      description_ko: '산술 연산자와 변수 출력을 결합한 C언어 기초 챌린지입니다.',
      description_en: 'A challenge testing your knowledge of C integer arithmetic.',
      levelType: 'challenge',
      category: 'Phase 1: C 기본 구조',
      steps: [
        {
          step: 1,
          guide_ko: '두 수의 덧셈과 곱셈을 서식에 맞게 계산하여 출력하세요.',
          guide_en: 'Compute and format sum and product of two numbers.',
          code: '#include <stdio.h>\n\nint main() {\n    int a = 12;\n    int b = 5;\n    printf("Sum: %d\\n", a + b);\n    printf("Mul: %d\\n", a * b);\n    return 0;\n}',
          tip: '컴파일러(GCC)가 코드를 기계어로 번역하여 초고속으로 실행합니다.',
        },
      ],
    },
  ],
  web: [
    {
      id: 'web-1',
      levelNumber: 1,
      language: 'web',
      title_ko: 'HTML 헤딩과 텍스트 문단',
      title_en: 'HTML Headings & Paragraphs',
      description_ko: '웹 페이지의 뼈대를 만드는 h1 제목과 p 문단 태그를 실시간으로 확인합니다.',
      description_en: 'Build web structure with h1 headings and p paragraphs with live preview.',
      levelType: 'practice',
      category: 'Phase 1: HTML 문서 구조',
      steps: [
        {
          step: 1,
          guide_ko: '웹페이지의 대표 제목을 h1 태그로 작성해 봅시다.',
          guide_en: 'Create a main heading using the h1 tag.',
          code: '<h1 style="color: #10b981; font-family: sans-serif;">\n  TypingCode V2 웹 플레이그라운드\n</h1>',
          tip: '<h1>은 HTML 문서에서 가장 중요한 대제목을 나타내는 태그입니다.',
        },
        {
          step: 2,
          guide_ko: '제목 아래에 감각적인 설명 문단과 버튼을 추가해 보세요.',
          guide_en: 'Add a description paragraph and interactive button below.',
          code: '<div style="font-family: sans-serif; padding: 20px; background: #1e293b; color: #fff; border-radius: 12px;">\n  <h2>환영합니다!</h2>\n  <p>실시간으로 타이핑하고 렌더링을 확인하세요.</p>\n  <button style="background: #10b981; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;">\n    시작하기\n  </button>\n</div>',
          tip: '태그는 여는 태그(<tag>)와 닫는 태그(</tag>)로 쌍을 이룹니다.',
        },
      ],
    },
    {
      id: 'web-2',
      levelNumber: 2,
      language: 'web',
      title_ko: 'CSS 스타일링과 플렉스박스',
      title_en: 'CSS Styling & Flexbox',
      description_ko: '모던 웹 레이아웃의 필수 문법인 Flexbox를 익혀 요소를 정렬합니다.',
      description_en: 'Master Flexbox to align and distribute items in modern web UI.',
      levelType: 'practice',
      category: 'Phase 1: HTML 문서 구조',
      steps: [
        {
          step: 1,
          guide_ko: '가로로 나란히 배치되는 카드 그리드를 만들어 봅시다.',
          guide_en: 'Create side-by-side cards using display: flex.',
          code: '<div style="display: flex; gap: 12px; font-family: sans-serif;">\n  <div style="flex: 1; padding: 15px; background: #0f172a; color: #38bdf8; border-radius: 8px;">\n    카드 1: 파이썬\n  </div>\n  <div style="flex: 1; padding: 15px; background: #0f172a; color: #10b981; border-radius: 8px;">\n    카드 2: C언어\n  </div>\n</div>',
          tip: 'display: flex를 지정하면 내부 자식 요소들이 가로 방향으로 정렬됩니다.',
        },
      ],
    },
    {
      id: 'web-5',
      levelNumber: 5,
      language: 'web',
      title_ko: '[Challenge] 프로필 카드 UI 완성하기',
      title_en: '[Challenge] Profile Card UI',
      description_ko: '배운 HTML 태그와 인라인 스타일을 결합하여 완성도 높은 프로필 카드를 만듭니다.',
      description_en: 'A challenge level combining HTML and CSS into a polished profile card.',
      levelType: 'challenge',
      category: 'Phase 1: HTML 문서 구조',
      steps: [
        {
          step: 1,
          guide_ko: '아바타, 이름, 배지가 포함된 모던 프로필 카드를 완성하세요.',
          guide_en: 'Build a modern profile card with avatar, name, and badge.',
          code: '<div style="font-family: sans-serif; background: #0f172a; border: 1px solid #334155; padding: 20px; border-radius: 16px; max-width: 320px; text-align: center; color: white;">\n  <div style="font-size: 32px; margin-bottom: 10px;">⚡</div>\n  <h3 style="margin: 0; color: #f8fafc;">Typing Dev</h3>\n  <p style="color: #94a3b8; font-size: 14px;">Next.js & C Sandbox</p>\n</div>',
          tip: '실제 상용 SaaS에서 쓰이는 카드 UI 컴포넌트의 기본 뼈대입니다.',
        },
      ],
    },
  ],
};

export function getLanguage(id: string): LanguageMeta | undefined {
  return LANGUAGES_LIST.find((lang) => lang.id === id);
}

export function getLevelsForLanguage(language: SupportedLanguage): LevelData[] {
  return INITIAL_LEVELS[language] || [];
}

export function getLevel(language: SupportedLanguage, levelNum: number): LevelData | undefined {
  const levels = INITIAL_LEVELS[language] || [];
  return levels.find((l) => l.levelNumber === levelNum);
}
