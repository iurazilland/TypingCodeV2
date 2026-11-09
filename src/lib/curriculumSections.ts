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
    title_ko: '기초 출력과 연산',
    title_en: 'Foundations & Output Arithmetic',
    levels: [
      { 
        levelNumber: 1, 
        title_ko: 'print() 함수와 사칙연산의 기초', 
        title_en: 'print() & Basic Arithmetic',
        syntaxTags: ['print()', '+, -, *, /', '( )'],
      },
      { 
        levelNumber: 2, 
        title_ko: '몫(//), 나머지(%), 거듭제곱(**)과 쉼표(,)', 
        title_en: 'Floor Div (//), Modulo (%), Power (**) & Comma (,)',
        syntaxTags: ['//, %, **', 'print(a, b)'],
      },
      { 
        levelNumber: 3, 
        title_ko: '문자열(String)과 따옴표 출력', 
        title_en: 'Strings & Quotes Syntax',
        syntaxTags: ['" "', "' '", 'print("...")'],
      },
      { 
        levelNumber: 4, 
        title_ko: '수식 출력과 나머지(%)의 실전 활용', 
        title_en: 'Formula Printing & Modulo Usage',
        syntaxTags: ['print("a * b", a * b)', 'n % 2'],
      },
      { 
        levelNumber: 5, 
        title_ko: '문자열 연산(+)과 반복(*)', 
        title_en: 'String Concatenation & Repetition',
        syntaxTags: ['"a" + "b"', '"*" * 10'],
      },
      { 
        levelNumber: 6, 
        title_ko: '특수문자 이스케이프(\\n, \\t)', 
        title_en: 'Escape Characters (\\n, \\t)',
        syntaxTags: ['\\n', '\\t', '\\"'],
      },
      { 
        levelNumber: 7, 
        title_ko: 'print()의 sep과 end 옵션', 
        title_en: 'print() Options (sep & end)',
        syntaxTags: ['sep="-"', 'end=""', 'print(a, b, sep, end)'],
      },
      { 
        levelNumber: 8, 
        title_ko: '기초 출력과 연산 종합 문제풀이', 
        title_en: 'Section 1 Comprehensive Review',
        syntaxTags: ['print() 종합', '타이핑 마스터'],
      },
    ],
  },
  {
    id: 'py-sec-2',
    sectionNumber: 2,
    title_ko: '변수와 사용자 입력',
    title_en: 'Variables & User Input',
    levels: [
      { 
        levelNumber: 9, 
        title_ko: '주석(#)과 변수 선언', 
        title_en: 'Comments (#) & Variable Declaration',
        syntaxTags: ['# comment', 'score = 100'],
      },
      { 
        levelNumber: 10, 
        title_ko: '변수 값 변경과 변수 연산', 
        title_en: 'Variable Reassignment & Operations',
        syntaxTags: ['x = x + 1', 'total = a * b'],
      },
      { 
        levelNumber: 11, 
        title_ko: '복합 대입 연산자 (+=, -=, *=, /=)', 
        title_en: 'Compound Assignment Operators',
        syntaxTags: ['+=, -=', '*=, /='],
      },
      { 
        levelNumber: 12, 
        title_ko: 'input()으로 사용자 입력 받기', 
        title_en: 'Reading User Input with input()',
        syntaxTags: ['input()', '문자열 입력'],
      },
      { 
        levelNumber: 13, 
        title_ko: 'int()로 숫자 입력받아 계산하기', 
        title_en: 'Converting Input to Numbers with int()',
        syntaxTags: ['int()', 'int(input())'],
      },
      { 
        levelNumber: 14, 
        title_ko: '다중 변수 할당과 input().split()', 
        title_en: 'Multiple Assignment & input().split()',
        syntaxTags: ['a, b = 1, 2', 'input().split()'],
      },
      { 
        levelNumber: 15, 
        title_ko: '변수·입력·연산 종합 문제풀이', 
        title_en: 'Section 2 Comprehensive Review',
        syntaxTags: ['변수·입력 종합', '타이핑 마스터'],
      },
    ],
  },
  {
    id: 'py-sec-3',
    sectionNumber: 3,
    title_ko: '불리언, 논리 연산과 조건문 기초',
    title_en: 'Booleans, Logical Ops & Conditionals Basics',
    levels: [
      {
        levelNumber: 16,
        title_ko: '불리언(bool)과 비교 연산자',
        title_en: 'Booleans (bool) & Comparison Operators',
        syntaxTags: ['True, False', '==, !=, >=, <='],
      },
      {
        levelNumber: 17,
        title_ko: 'bool() 형변환과 참·거짓(Truthy / Falsy) 기초',
        title_en: 'bool() Casting & Truthy / Falsy Basics',
        syntaxTags: ['bool()', '0, "" vs 1, "py"'],
      },
      {
        levelNumber: 18,
        title_ko: '논리 연산자 (and, or, not)',
        title_en: 'Logical Operators (and, or, not)',
        syntaxTags: ['and, or, not', '논리 조합'],
      },
      {
        levelNumber: 19,
        title_ko: 'if 단일 조건문과 들여쓰기',
        title_en: 'Single if Statements & Indentation',
        syntaxTags: ['if condition:', '들여쓰기(4칸)'],
      },
      {
        levelNumber: 20,
        title_ko: 'if - else 양방향 조건 분기',
        title_en: 'if - else Two-Way Branching',
        syntaxTags: ['if ... else:', '양방향 분기'],
      },
      {
        levelNumber: 21,
        title_ko: 'if - elif - else 다중 조건 분기',
        title_en: 'if - elif - else Multi-Way Branching',
        syntaxTags: ['elif condition:', '다중 분기'],
      },
      {
        levelNumber: 22,
        title_ko: '복합 조건문, 중첩 if문과 pass 기초',
        title_en: 'Compound Conditions, Nested if & pass',
        syntaxTags: ['중첩 if문', 'pass'],
      },
      {
        levelNumber: 23,
        title_ko: '불리언과 조건문 기초 종합 문제풀이',
        title_en: 'Section 3 Comprehensive Review',
        syntaxTags: ['조건문 종합', '타이핑 마스터'],
      },
    ],
  },
  {
    id: 'py-sec-4',
    sectionNumber: 4,
    title_ko: '반복문과 흐름 제어 기초',
    title_en: 'Loops & Control Flow Basics',
    levels: [
      {
        levelNumber: 24,
        title_ko: 'for 반복문과 range(끝) 기초',
        title_en: 'for Loops & range(stop) Basics',
        syntaxTags: ['for i in range(n):', '0 ~ n-1'],
      },
      {
        levelNumber: 25,
        title_ko: 'range(시작, 끝)과 간격(step) 활용',
        title_en: 'range(start, stop, step) Patterns',
        syntaxTags: ['range(a, b)', 'range(a, b, step)'],
      },
      {
        levelNumber: 26,
        title_ko: 'for 반복문과 누적 연산',
        title_en: 'for Loops & Accumulator Pattern',
        syntaxTags: ['total += i', 'prod *= i'],
      },
      {
        levelNumber: 27,
        title_ko: '반복문 안의 if 조건 판별',
        title_en: 'Conditional Filtering Inside Loops',
        syntaxTags: ['for + if', 'i % 2 == 0'],
      },
      {
        levelNumber: 28,
        title_ko: 'while 조건 반복문 기초',
        title_en: 'while Conditional Loops Basics',
        syntaxTags: ['while cond:', '증감·누적'],
      },
      {
        levelNumber: 29,
        title_ko: 'break와 continue 반복 제어',
        title_en: 'Loop Control with break & continue',
        syntaxTags: ['while True:', 'break, continue'],
      },
      {
        levelNumber: 30,
        title_ko: '중첩 for 반복문 기초',
        title_en: 'Nested for Loops Basics',
        syntaxTags: ['이중 for문', '행·열 출력'],
      },
      {
        levelNumber: 31,
        title_ko: '반복문과 흐름 제어 기초 종합 문제풀이',
        title_en: 'Section 4 Comprehensive Review',
        syntaxTags: ['반복문 종합', '타이핑 마스터'],
      },
    ],
  },
  {
    id: 'py-sec-5',
    sectionNumber: 5,
    title_ko: '문자열 필수 기초',
    title_en: 'Essential String Foundations',
    levels: [
      {
        levelNumber: 32,
        title_ko: 'f-string 기본 문자열 포맷팅',
        title_en: 'f-string Basic String Formatting',
        syntaxTags: ['f"{var}"', 'f"{a + b}"'],
      },
      {
        levelNumber: 33,
        title_ko: '문자열 길이(len)와 인덱싱',
        title_en: 'String Length (len) & Indexing',
        syntaxTags: ['len(s)', 's[0], s[-1]'],
      },
      {
        levelNumber: 34,
        title_ko: '문자열 기본 슬라이싱',
        title_en: 'Basic String Slicing',
        syntaxTags: ['s[a:b]', 's[:b], s[a:]'],
      },
      {
        levelNumber: 35,
        title_ko: '포함 연산자(in, not in)와 문자열 for 순회',
        title_en: 'Membership (in, not in) & String Iteration',
        syntaxTags: ['in, not in', 'for ch in s:'],
      },
      {
        levelNumber: 36,
        title_ko: '필수 문자열 다듬기와 치환',
        title_en: 'Essential String strip(), replace() & split()',
        syntaxTags: ['.strip()', '.replace(), .split()'],
      },
      {
        levelNumber: 37,
        title_ko: '문자열 필수 기초 종합 문제풀이',
        title_en: 'Section 5 Comprehensive Review',
        syntaxTags: ['문자열 기초 종합', '타이핑 마스터'],
      },
    ],
  },
  {
    id: 'py-sec-6',
    sectionNumber: 6,
    title_ko: '리스트(List) 필수 기초',
    title_en: 'Essential List Foundations',
    levels: [
      {
        levelNumber: 38,
        title_ko: '리스트 생성, 길이(len)와 인덱싱',
        title_en: 'List Creation, len() & Indexing',
        syntaxTags: ['[a, b, c]', 'nums[0], nums[-1]'],
      },
      {
        levelNumber: 39,
        title_ko: '리스트 요소 값 변경과 기본 슬라이싱·연결',
        title_en: 'List Element Update, Slicing & Concatenation',
        syntaxTags: ['nums[i] = v', 'nums[a:b], +'],
      },
      {
        levelNumber: 40,
        title_ko: '리스트 필수 추가와 꺼내기 (.append, .pop)',
        title_en: 'Essential List append() & pop()',
        syntaxTags: ['.append()', '.pop()'],
      },
      {
        levelNumber: 41,
        title_ko: '리스트 for 순회와 조건 필터링',
        title_en: 'List for Iteration & Conditional Filtering',
        syntaxTags: ['for x in nums:', '수동 int 변환'],
      },
      {
        levelNumber: 42,
        title_ko: '숫자 리스트 필수 집계와 기본 정렬',
        title_en: 'Essential List Aggregations & Basic sort()',
        syntaxTags: ['sum, max, min', '.sort()'],
      },
      {
        levelNumber: 43,
        title_ko: '리스트 필수 기초 종합 문제풀이',
        title_en: 'Section 6 Comprehensive Review',
        syntaxTags: ['리스트 기초 종합', '타이핑 마스터'],
      },
    ],
  },
  {
    id: 'py-sec-7',
    sectionNumber: 7,
    title_ko: 'None과 튜플·딕셔너리·집합 필수 기초',
    title_en: 'None, Tuples, Dictionaries & Sets Foundations',
    levels: [
      {
        levelNumber: 44,
        title_ko: '튜플(tuple) 기초·언패킹과 빈 값 None',
        title_en: 'Tuples, Unpacking & None (is None)',
        syntaxTags: ['(x, y)', 'None, is None'],
      },
      {
        levelNumber: 45,
        title_ko: '딕셔너리(dict) 생성, 키 조회와 값 추가·수정',
        title_en: 'Dictionary Creation, Key Lookup & Mutation',
        syntaxTags: ['{"k": v}', 'd[k], d[k] = v'],
      },
      {
        levelNumber: 46,
        title_ko: '딕셔너리 삭제(del), 키 확인(in)과 .items() 순회',
        title_en: 'Dictionary del, Key Check (in) & .items() Loop',
        syntaxTags: ['del d[k], in', '.items()'],
      },
      {
        levelNumber: 47,
        title_ko: '집합(set) 기초, 중복 제거와 .add()',
        title_en: 'Sets Basics, Deduplication & .add()',
        syntaxTags: ['set(nums)', '.add(), in'],
      },
      {
        levelNumber: 48,
        title_ko: '필수 자료구조 형변환 (list, tuple, set)',
        title_en: 'Essential Collection Casting (list, tuple, set)',
        syntaxTags: ['list(), tuple()', 'set() 변환'],
      },
      {
        levelNumber: 49,
        title_ko: 'None·튜플·딕셔너리·집합 기초 종합 문제풀이',
        title_en: 'Section 7 Comprehensive Review',
        syntaxTags: ['자료구조 기초 종합', '타이핑 마스터'],
      },
    ],
  },
  {
    id: 'py-sec-8',
    sectionNumber: 8,
    title_ko: '함수(def) 필수 기초',
    title_en: 'Essential Functions (def) Foundations',
    levels: [
      {
        levelNumber: 50,
        title_ko: '함수 정의(def)와 호출 기초',
        title_en: 'Defining & Calling Functions (def)',
        syntaxTags: ['def fn():', 'fn()'],
      },
      {
        levelNumber: 51,
        title_ko: '매개변수가 있는 함수',
        title_en: 'Functions with Parameters',
        syntaxTags: ['def fn(a, b):', '컬렉션 인자'],
      },
      {
        levelNumber: 52,
        title_ko: 'return 결과값 반환과 다중 반환 언패킹',
        title_en: 'Returning Values & Tuple Unpacking Return',
        syntaxTags: ['return val', 'q, r = fn(a, b)'],
      },
      {
        levelNumber: 53,
        title_ko: '기본값 매개변수와 지역변수 유효 범위 기초',
        title_en: 'Default Parameters & Local Variable Scope',
        syntaxTags: ['def fn(a, b=1):', '지역변수'],
      },
      {
        levelNumber: 54,
        title_ko: '함수(def) 필수 기초 종합 문제풀이',
        title_en: 'Section 8 Comprehensive Review',
        syntaxTags: ['함수 기초 종합', '타이핑 마스터'],
      },
    ],
  },
  {
    id: 'py-sec-9',
    sectionNumber: 9,
    title_ko: '예외 처리(try - except) 필수 기초',
    title_en: 'Exception Handling (try - except) Foundations',
    levels: [
      {
        levelNumber: 55,
        title_ko: '런타임 에러의 이해와 try - except 기본 구조',
        title_en: 'Runtime Errors & Basic try - except',
        syntaxTags: ['try:', 'except:'],
      },
      {
        levelNumber: 56,
        title_ko: '대표 에러 타입별 분기 처리',
        title_en: 'Handling Specific Exception Types',
        syntaxTags: ['ValueError, ZeroDivisionError', 'IndexError, KeyError'],
      },
      {
        levelNumber: 57,
        title_ko: '반복문(while)·함수(def)와 안전한 입력·변환 패턴',
        title_en: 'Safe Input & Conversion with while and def',
        syntaxTags: ['while True + try', '안전 반환 함수'],
      },
      {
        levelNumber: 58,
        title_ko: '예외 처리 필수 기초 종합 문제풀이',
        title_en: 'Section 9 Comprehensive Review',
        syntaxTags: ['예외 처리 기초 종합', '타이핑 마스터'],
      },
    ],
  },
  {
    id: 'py-sec-10',
    sectionNumber: 10,
    title_ko: '클래스(class)와 객체 필수 기초',
    title_en: 'Classes (class) & Objects Foundations',
    levels: [
      {
        levelNumber: 59,
        title_ko: '클래스(class) 정의와 인스턴스 객체 생성 첫걸음',
        title_en: 'Defining Classes & Creating Instances',
        syntaxTags: ['class Dog:', 'd = Dog()'],
      },
      {
        levelNumber: 60,
        title_ko: '생성자 __init__과 self로 초기 속성 설정하기',
        title_en: 'Initializer __init__ & self Attributes',
        syntaxTags: ['def __init__(self):', 'self.name'],
      },
      {
        levelNumber: 61,
        title_ko: '인스턴스 메서드로 self 상태 변경·반환하기',
        title_en: 'Instance Methods Mutating & Returning self State',
        syntaxTags: ['self.hp += 10', 'd.method()'],
      },
      {
        levelNumber: 62,
        title_ko: '리스트·딕셔너리 속성을 가진 클래스 다루기',
        title_en: 'Classes with List & Dictionary Attributes',
        syntaxTags: ['self.items = []', '객체 상태 집계'],
      },
      {
        levelNumber: 63,
        title_ko: '클래스 기초 & 핵심 개념 기초편(Part 1) 완주 종합',
        title_en: 'Section 10 & Part 1 Core Foundations Master Review',
        syntaxTags: ['클래스 기초 종합', 'Part 1 완주'],
      },
    ],
  },
  {
    id: 'py-sec-11',
    sectionNumber: 11,
    title_ko: '[반복·확장 1] 문자열 부가 메서드와 서식 확장',
    title_en: '[Review & Expand 1] Extended String Methods & Formatting',
    levels: [
      {
        levelNumber: 64,
        title_ko: '대소문자 변환과 리스트 문자열 결합 (.upper, .lower, .join)',
        title_en: 'Case Conversion & String join()',
        syntaxTags: ['.upper(), .lower()', '" ".join()'],
      },
      {
        levelNumber: 65,
        title_ko: '문자열 위치·개수 탐색과 방향별 공백 제거',
        title_en: 'Finding, Counting & Directional Stripping',
        syntaxTags: ['.find(), .count()', '.lstrip(), .rstrip()'],
      },
      {
        levelNumber: 66,
        title_ko: '접두·접미사 및 문자 종류 판별 메서드',
        title_en: 'Prefix/Suffix & Character Classification Methods',
        syntaxTags: ['.startswith(), .endswith()', '.isdigit(), .isalpha()'],
      },
      {
        levelNumber: 67,
        title_ko: 'f-string 세부 서식, 역순 슬라이싱과 문자 코드(ord, chr)',
        title_en: 'f-string Format Specs, Reverse Slicing & ord/chr',
        syntaxTags: [':.2f, :,', 's[::-1], ord(), chr()'],
      },
      {
        levelNumber: 68,
        title_ko: '문자열 부가 기능 & 누적 복습 종합 문제풀이',
        title_en: 'Section 11 Comprehensive Spiral Review',
        syntaxTags: ['문자열 확장 종합', '2회독 복습'],
      },
    ],
  },
  {
    id: 'py-sec-12',
    sectionNumber: 12,
    title_ko: '[반복·확장 2] 컬렉션 부가 메서드, 2차원 리스트와 컴프리헨션',
    title_en: '[Review & Expand 2] Extended Collections, 2D Lists & Comprehensions',
    levels: [
      {
        levelNumber: 69,
        title_ko: '리스트 부가 추가·삭제 메서드 (.insert, .remove, .extend, .clear)',
        title_en: 'Extended List Insertion, Removal & Extension',
        syntaxTags: ['.insert(), .remove()', '.extend(), .clear()'],
      },
      {
        levelNumber: 70,
        title_ko: '리스트 탐색·역순과 sorted() 사본 정렬',
        title_en: 'List index/count/reverse & sorted() Copy Sorting',
        syntaxTags: ['.index(), .count()', '.reverse(), sorted()'],
      },
      {
        levelNumber: 71,
        title_ko: '2차원 리스트(grid[r][c])와 중첩 for문 실전 활용',
        title_en: '2D Nested Lists & Nested Loop Aggregations',
        syntaxTags: ['grid[r][c]', '행·열 합계'],
      },
      {
        levelNumber: 72,
        title_ko: '딕셔너리 부가 메서드와 dict() 생성자',
        title_en: 'Extended Dictionary Methods & dict() Constructor',
        syntaxTags: ['.get(), .keys(), .values()', '.pop(), .update(), dict()'],
      },
      {
        levelNumber: 73,
        title_ko: '집합 연산자(&, |, -)와 안전 삭제(.discard)',
        title_en: 'Set Algebra (&, |, -) & Safe .discard()',
        syntaxTags: ['&, |, -', '.discard()'],
      },
      {
        levelNumber: 74,
        title_ko: '한 줄 조건 표현식 (삼항 연산자 a if 조건 else b)',
        title_en: 'Inline Conditional Expressions (Ternary)',
        syntaxTags: ['a if cond else b', '한 줄 분기'],
      },
      {
        levelNumber: 75,
        title_ko: '리스트 컴프리헨션 기초 ([식 for 변수 in 시퀀스 if 조건])',
        title_en: 'List Comprehensions Basics',
        syntaxTags: ['[x for x in seq]', '[x for x in seq if cond]'],
      },
      {
        levelNumber: 76,
        title_ko: '컬렉션 부가 기능 & 컴프리헨션 누적 복습 종합',
        title_en: 'Section 12 Comprehensive Spiral Review',
        syntaxTags: ['컬렉션 확장 종합', '2회독 복습'],
      },
    ],
  },
  {
    id: 'py-sec-13',
    sectionNumber: 13,
    title_ko: '[반복·확장 3] 실용·부가 내장 함수와 함수(def) 확장',
    title_en: '[Review & Expand 3] Practical Built-ins & Function Extensions',
    levels: [
      {
        levelNumber: 77,
        title_ko: '수치·수학 내장 함수 (abs, round)',
        title_en: 'Numeric Built-in Functions (abs, round)',
        syntaxTags: ['abs(x)', 'round(x, n)'],
      },
      {
        levelNumber: 78,
        title_ko: '일괄 변환 map()과 인덱스 순회 enumerate()',
        title_en: 'Batch Mapping map() & Indexed Iteration enumerate()',
        syntaxTags: ['map(int, ...)', 'enumerate(seq)'],
      },
      {
        levelNumber: 79,
        title_ko: '병렬 묶기 zip()과 역순 순회 reversed()',
        title_en: 'Parallel Pairing zip() & Reverse Iteration reversed()',
        syntaxTags: ['zip(), dict(zip())', 'reversed()'],
      },
      {
        levelNumber: 80,
        title_ko: '논리 일괄 검사(all, any)와 타입 확인(isinstance)',
        title_en: 'Logical Quantifiers (all, any) & isinstance()',
        syntaxTags: ['all(), any()', 'isinstance(x, T)'],
      },
      {
        levelNumber: 81,
        title_ko: '가변 인자(*args) 기초와 익명 함수 lambda 정렬',
        title_en: 'Variadic *args & Anonymous lambda Key Sorting',
        syntaxTags: ['def fn(*args):', 'sorted(..., key=lambda)'],
      },
      {
        levelNumber: 82,
        title_ko: '실용 내장 함수 & 함수 확장 누적 복습 종합',
        title_en: 'Section 13 Comprehensive Spiral Review',
        syntaxTags: ['내장·함수 확장 종합', '2회독 복습'],
      },
    ],
  },
  {
    id: 'py-sec-14',
    sectionNumber: 14,
    title_ko: '[반복·확장 4] 예외·클래스 확장과 파이썬 베이직 파이널 마스터',
    title_en: '[Review & Expand 4] Exception & OOP Extensions + Final Master',
    levels: [
      {
        levelNumber: 83,
        title_ko: 'try - except - else - finally 완전한 흐름과 raise 기초',
        title_en: 'Full try-except-else-finally Flow & raise Basics',
        syntaxTags: ['else:, finally:', 'raise ValueError'],
      },
      {
        levelNumber: 84,
        title_ko: '객체 문자열 표현(__str__)과 예외 안전 클래스 메서드',
        title_en: 'String Representation (__str__) & Exception-Safe Methods',
        syntaxTags: ['def __str__(self):', 'class + try-except'],
      },
      {
        levelNumber: 85,
        title_ko: '클래스 기초 상속(class Child(Parent):)과 메서드 재정의',
        title_en: 'Single Inheritance & Method Overriding Basics',
        syntaxTags: ['class Child(Parent):', '메서드 오버라이딩'],
      },
      {
        levelNumber: 86,
        title_ko: '객체 리스트와 컴프리헨션·lambda 정렬·예외 통합 실습',
        title_en: 'Object Lists with Comprehensions, lambda Sort & Exceptions',
        syntaxTags: ['객체 리스트', '전 과정 통합'],
      },
      {
        levelNumber: 87,
        title_ko: '파이썬 베이직 전 과정(Part 1 + Part 2) 파이널 마스터 종합',
        title_en: 'Python Basic Complete (Part 1 + Part 2) Final Master Review',
        syntaxTags: ['전 과정 마스터', '베이직 완주'],
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
