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
    title_ko: '변수, 자료형과 사용자 입력',
    title_en: 'Variables, Data Types & User Input',
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
        title_ko: '자료형 확인(type)과 형변환 기초', 
        title_en: 'Data Types, type(), & Type Casting',
        syntaxTags: ['type()', 'int(), float(), str()'],
      },
      { 
        levelNumber: 13, 
        title_ko: 'input() 사용자 입력과 숫자 형변환', 
        title_en: 'input() User Input & Type Conversion',
        syntaxTags: ['input()', 'int(input())'],
      },
      { 
        levelNumber: 14, 
        title_ko: '다중 변수 할당과 input().split()', 
        title_en: 'Multiple Assignment & input().split()',
        syntaxTags: ['a, b = 1, 2', 'input().split()'],
      },
      { 
        levelNumber: 15, 
        title_ko: '변수·자료형·입력 종합 문제풀이', 
        title_en: 'Section 2 Comprehensive Review',
        syntaxTags: ['변수·입력 종합', '타이핑 마스터'],
      },
    ],
  },
  {
    id: 'py-sec-3',
    sectionNumber: 3,
    title_ko: '불리언, 논리 연산과 조건문',
    title_en: 'Booleans, Logical Ops & Conditionals',
    levels: [
      { 
        levelNumber: 16, 
        title_ko: '불리언(bool)과 비교 연산자', 
        title_en: 'Booleans (bool) & Comparison Operators',
        syntaxTags: ['True, False', '==, !=, >=, <='],
      },
      { 
        levelNumber: 17, 
        title_ko: '논리 연산자 (and, or, not)', 
        title_en: 'Logical Operators (and, or, not)',
        syntaxTags: ['and, or, not', '논리 조합'],
      },
      { 
        levelNumber: 18, 
        title_ko: 'if 단일 조건문과 들여쓰기', 
        title_en: 'Single if Statements & Indentation',
        syntaxTags: ['if condition:', '들여쓰기(4칸)'],
      },
      { 
        levelNumber: 19, 
        title_ko: 'if - else 양방향 조건 분기', 
        title_en: 'if - else Two-Way Branching',
        syntaxTags: ['if ... else:', '양방향 분기'],
      },
      { 
        levelNumber: 20, 
        title_ko: 'if - elif - else 다중 조건 분기', 
        title_en: 'if - elif - else Multi-Way Branching',
        syntaxTags: ['elif condition:', '다중 분기'],
      },
      { 
        levelNumber: 21, 
        title_ko: '복합 조건문과 중첩 if문', 
        title_en: 'Compound Conditions & Nested if Statements',
        syntaxTags: ['if + and/or', '중첩 if문'],
      },
      { 
        levelNumber: 22, 
        title_ko: '불리언과 조건문 종합 문제풀이', 
        title_en: 'Section 3 Comprehensive Review',
        syntaxTags: ['조건문 종합', '타이핑 마스터'],
      },
    ],
  },
  {
    id: 'py-sec-4',
    sectionNumber: 4,
    title_ko: '반복문과 흐름 제어',
    title_en: 'Loops & Control Flow',
    levels: [
      {
        levelNumber: 23,
        title_ko: 'for 반복문과 range(끝) 기초',
        title_en: 'for Loops & range(stop) Basics',
        syntaxTags: ['for i in range(n):', '0 ~ n-1'],
      },
      {
        levelNumber: 24,
        title_ko: 'range(시작, 끝)과 간격(step) 활용',
        title_en: 'range(start, stop, step) Patterns',
        syntaxTags: ['range(a, b)', 'range(a, b, step)'],
      },
      {
        levelNumber: 25,
        title_ko: 'for 반복문과 누적 연산',
        title_en: 'for Loops & Accumulator Pattern',
        syntaxTags: ['total += i', 'count += 1'],
      },
      {
        levelNumber: 26,
        title_ko: '반복문 안의 if 조건 판별',
        title_en: 'Conditional Filtering Inside Loops',
        syntaxTags: ['for + if', 'i % 2 == 0'],
      },
      {
        levelNumber: 27,
        title_ko: 'while 조건 반복문 기초',
        title_en: 'while Conditional Loops',
        syntaxTags: ['while cond:', '증감식'],
      },
      {
        levelNumber: 28,
        title_ko: 'break와 continue 반복 제어',
        title_en: 'Loop Control with break & continue',
        syntaxTags: ['break', 'continue'],
      },
      {
        levelNumber: 29,
        title_ko: '중첩 for 반복문 기초',
        title_en: 'Nested for Loops',
        syntaxTags: ['이중 for문', '행·열 반복'],
      },
      {
        levelNumber: 30,
        title_ko: '반복문과 흐름 제어 종합 문제풀이',
        title_en: 'Section 4 Comprehensive Review',
        syntaxTags: ['반복문 종합', '타이핑 마스터'],
      },
    ],
  },
  {
    id: 'py-sec-5',
    sectionNumber: 5,
    title_ko: '문자열 포맷팅과 문자열 다루기',
    title_en: 'String Formatting & Manipulation',
    levels: [
      {
        levelNumber: 31,
        title_ko: 'f-string 문자열 포맷팅 기초',
        title_en: 'f-string Formatting Basics',
        syntaxTags: ['f"{var}"', 'f"{a + b}"'],
      },
      {
        levelNumber: 32,
        title_ko: '문자열 길이(len)와 인덱싱',
        title_en: 'String Length (len) & Indexing',
        syntaxTags: ['len(s)', 's[0], s[-1]'],
      },
      {
        levelNumber: 33,
        title_ko: '문자열 슬라이싱',
        title_en: 'String Slicing',
        syntaxTags: ['s[a:b]', 's[:b], s[a:]'],
      },
      {
        levelNumber: 34,
        title_ko: '포함 연산자(in)와 문자열 for 순회',
        title_en: 'Membership (in) & String Iteration',
        syntaxTags: ['in, not in', 'for ch in s:'],
      },
      {
        levelNumber: 35,
        title_ko: '문자열 대소문자 변환과 공백 제거 메서드',
        title_en: 'Case Conversion & Whitespace Stripping',
        syntaxTags: ['.upper(), .lower()', '.strip()'],
      },
      {
        levelNumber: 36,
        title_ko: '문자열 치환과 탐색 메서드',
        title_en: 'String Replace, Count & Find Methods',
        syntaxTags: ['.replace()', '.count(), .find()'],
      },
      {
        levelNumber: 37,
        title_ko: '문자열 다루기 종합 문제풀이',
        title_en: 'Section 5 Comprehensive Review',
        syntaxTags: ['문자열 종합', '타이핑 마스터'],
      },
    ],
  },
  {
    id: 'py-sec-6',
    sectionNumber: 6,
    title_ko: '리스트(List) 기초와 활용',
    title_en: 'Lists Basics & Operations',
    levels: [
      {
        levelNumber: 38,
        title_ko: '리스트 생성과 인덱싱',
        title_en: 'List Creation, Indexing & len()',
        syntaxTags: ['[a, b, c]', 'nums[0], len()'],
      },
      {
        levelNumber: 39,
        title_ko: '리스트 요소 값 변경과 슬라이싱',
        title_en: 'List Element Mutation & Slicing',
        syntaxTags: ['nums[i] = v', 'nums[a:b], +'],
      },
      {
        levelNumber: 40,
        title_ko: '리스트 요소 추가와 삽입',
        title_en: 'Appending & Inserting List Elements',
        syntaxTags: ['.append()', '.insert()'],
      },
      {
        levelNumber: 41,
        title_ko: '리스트 요소 삭제',
        title_en: 'Removing List Elements (.pop, .remove)',
        syntaxTags: ['.pop()', '.remove()'],
      },
      {
        levelNumber: 42,
        title_ko: '리스트 정렬과 위치·개수 찾기',
        title_en: 'Sorting & Searching Lists',
        syntaxTags: ['.sort(), sorted()', '.index(), .count()'],
      },
      {
        levelNumber: 43,
        title_ko: '리스트와 for 반복문 순회',
        title_en: 'Iterating Over Lists with for',
        syntaxTags: ['for x in nums:', '리스트 필터링'],
      },
      {
        levelNumber: 44,
        title_ko: '숫자 리스트 집계 함수와 join() 결합',
        title_en: 'List Aggregations & String join()',
        syntaxTags: ['sum, max, min', '"-".join()'],
      },
      {
        levelNumber: 45,
        title_ko: '2차원 리스트 기초',
        title_en: '2D Nested Lists Basics',
        syntaxTags: ['[[1, 2], [3, 4]]', 'grid[r][c]'],
      },
      {
        levelNumber: 46,
        title_ko: '리스트 종합 문제풀이',
        title_en: 'Section 6 Comprehensive Review',
        syntaxTags: ['리스트 종합', '타이핑 마스터'],
      },
    ],
  },
  {
    id: 'py-sec-7',
    sectionNumber: 7,
    title_ko: '튜플, 딕셔너리, 집합',
    title_en: 'Tuples, Dictionaries & Sets',
    levels: [
      {
        levelNumber: 47,
        title_ko: '튜플(tuple) 기초와 언패킹',
        title_en: 'Tuples & Unpacking',
        syntaxTags: ['(x, y)', 'x, y = pt'],
      },
      {
        levelNumber: 48,
        title_ko: '딕셔너리(dict) 생성과 값 조회',
        title_en: 'Dictionary Creation & Lookup',
        syntaxTags: ['{"k": v}', 'd["k"], .get()'],
      },
      {
        levelNumber: 49,
        title_ko: '딕셔너리 데이터 추가·수정·삭제와 키 확인',
        title_en: 'Dictionary Mutation, Deletion & Key Check',
        syntaxTags: ['d[k] = v', '.pop(), del, in'],
      },
      {
        levelNumber: 50,
        title_ko: '딕셔너리 메서드와 for 순회',
        title_en: 'Dictionary Methods & Iteration',
        syntaxTags: ['.keys(), .values()', '.items()'],
      },
      {
        levelNumber: 51,
        title_ko: '집합(set) 기초와 중복 제거',
        title_en: 'Sets & Removing Duplicates',
        syntaxTags: ['set()', '.add(), .remove()'],
      },
      {
        levelNumber: 52,
        title_ko: '집합 연산과 자료구조 형변환',
        title_en: 'Set Operations & Collection Casting',
        syntaxTags: ['&, |, -', 'list(), tuple(), set()'],
      },
      {
        levelNumber: 53,
        title_ko: '튜플·딕셔너리·집합 종합 문제풀이',
        title_en: 'Section 7 Comprehensive Review',
        syntaxTags: ['자료구조 종합', '타이핑 마스터'],
      },
    ],
  },
  {
    id: 'py-sec-8',
    sectionNumber: 8,
    title_ko: '함수(def)와 실용 내장 함수',
    title_en: 'Functions (def) & Practical Built-ins',
    levels: [
      {
        levelNumber: 54,
        title_ko: '함수 정의(def)와 호출 기초',
        title_en: 'Defining & Calling Functions (def)',
        syntaxTags: ['def fn():', 'fn()'],
      },
      {
        levelNumber: 55,
        title_ko: '매개변수가 있는 함수',
        title_en: 'Functions with Parameters',
        syntaxTags: ['def fn(a, b):', '인자 전달'],
      },
      {
        levelNumber: 56,
        title_ko: 'return으로 결과값 반환하기',
        title_en: 'Returning Values with return',
        syntaxTags: ['return val', '반환값 활용'],
      },
      {
        levelNumber: 57,
        title_ko: '기본값 매개변수와 변수의 유효 범위',
        title_en: 'Default Parameters & Variable Scope',
        syntaxTags: ['def fn(a, b=1):', '지역변수'],
      },
      {
        levelNumber: 58,
        title_ko: '실용 내장 함수 1 — 수학과 순서 묶기',
        title_en: 'Built-ins 1: abs, round, enumerate, zip',
        syntaxTags: ['abs(), round()', 'enumerate(), zip()'],
      },
      {
        levelNumber: 59,
        title_ko: '실용 내장 함수 2 — 일괄 변환과 논리 검사',
        title_en: 'Built-ins 2: map, all & any',
        syntaxTags: ['map(int, ...)', 'all(), any()'],
      },
      {
        levelNumber: 60,
        title_ko: '함수와 파이썬 베이직 종합 문제풀이',
        title_en: 'Section 8 & Python Basic Grand Review',
        syntaxTags: ['함수·기초 종합', '베이직 완주'],
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
