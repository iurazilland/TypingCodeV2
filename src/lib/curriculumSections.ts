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

// Python Basic Sections & Levels (14 Sections, 113 Levels)
const PYTHON_BASIC_SECTIONS: LevelSection[] = [
  {
    id: 'py-sec-1',
    sectionNumber: 1,
    title_ko: '기초 출력과 연산',
    title_en: 'Foundations & Output Arithmetic',
    levels: [
      {
        levelNumber: 1,
        title_ko: 'print() 함수와 정수·실수 출력, 덧셈(+)과 뺄셈(-)',
        title_en: 'print(), Int/Float Output & Addition/Subtraction (+, -)',
        syntaxTags: ['print()', '정수·실수', '+, -'],
      },
      {
        levelNumber: 2,
        title_ko: '곱셈(*), 나눗셈(/)과 소괄호(()) 연산 우선순위',
        title_en: 'Multiplication (*), Division (/) & Parentheses (())',
        syntaxTags: ['*, /', '( ) 우선순위'],
      },
      {
        levelNumber: 3,
        title_ko: '몫(//), 나머지(%)와 거듭제곱(**) 연산자',
        title_en: 'Floor Division (//), Modulo (%) & Power (**)',
        syntaxTags: ['//, %', '**'],
      },
      {
        levelNumber: 4,
        title_ko: 'print(a, b) 쉼표(,) 다중 출력과 빈 줄 출력(print())',
        title_en: 'Comma-Separated print(a, b) & Blank Line print()',
        syntaxTags: ['print(a, b)', 'print() 빈 줄'],
      },
      {
        levelNumber: 5,
        title_ko: '문자열(" ", \' \') 출력과 따옴표 중첩 규칙',
        title_en: 'Strings (" ", \' \') & Nested Quotes Rules',
        syntaxTags: ['" ", \' \'', '따옴표 중첩'],
      },
      {
        levelNumber: 6,
        title_ko: '따옴표 수식("3 + 5")과 계산 결과(3 + 5) 나란히 출력하기',
        title_en: 'Printing Formula Strings ("3 + 5") with Computed Results',
        syntaxTags: ['"a + b ="', 'print("식", 값)'],
      },
      {
        levelNumber: 7,
        title_ko: '문자열 이어붙이기(+)와 문자열 반복(*)',
        title_en: 'String Concatenation (+) & String Repetition (*)',
        syntaxTags: ['"a" + "b"', '"*" * 5'],
      },
      {
        levelNumber: 8,
        title_ko: '특수문자 이스케이프 (\\n, \\t, \\", \\\\)',
        title_en: 'Escape Characters (\\n, \\t, \\", \\\\)',
        syntaxTags: ['\\n, \\t', '\\", \\\\'],
      },
      {
        levelNumber: 9,
        title_ko: 'print()의 구분자(sep)와 줄 끝(end) 옵션',
        title_en: 'print() Separator (sep) & Line End (end) Options',
        syntaxTags: ['sep="-"', 'end=" "'],
      },
      {
        levelNumber: 10,
        title_ko: '기초 출력과 연산 종합 문제풀이',
        title_en: 'Section 1 Comprehensive Review',
        syntaxTags: ['출력·연산 종합', '타이핑 마스터'],
      },
    ],
  },
  {
    id: 'py-sec-2',
    sectionNumber: 2,
    title_ko: '주석, 변수와 사용자 입력',
    title_en: 'Comments, Variables & User Input',
    levels: [
      {
        levelNumber: 11,
        title_ko: '주석(#)으로 메모 남기기와 숫자·문자열 변수 선언(=)',
        title_en: 'Comments (#) & Variable Declaration (=)',
        syntaxTags: ['# 주석', 'x = 10, s = "py"'],
      },
      {
        levelNumber: 12,
        title_ko: '변수 값 덮어쓰기(재할당)와 변수를 활용한 수식 계산',
        title_en: 'Variable Reassignment & Expressions with Variables',
        syntaxTags: ['x = 20', 'x = x + 1'],
      },
      {
        levelNumber: 13,
        title_ko: '누적 덧셈·뺄셈·곱셈 복합 대입 연산자 (+=, -=, *=)',
        title_en: 'Compound Assignment Operators (+=, -=, *=)',
        syntaxTags: ['+=, -=', '*='],
      },
      {
        levelNumber: 14,
        title_ko: '나눗셈·몫·나머지 복합 대입 연산자 (/=, //=, %=)와 문자열 +=',
        title_en: 'Division/Modulo Compound Ops (/=, //=, %=) & String +=',
        syntaxTags: [' /=, //=, %=', 'msg += "!"'],
      },
      {
        levelNumber: 15,
        title_ko: 'input()으로 사용자 문자열 입력받기',
        title_en: 'Reading User String Input with input()',
        syntaxTags: ['s = input()', '문자열 입력'],
      },
      {
        levelNumber: 16,
        title_ko: 'input("안내 문구") 프롬프트 출력과 입력값 활용하기',
        title_en: 'input("Prompt") Message & Using Input Values',
        syntaxTags: ['input("이름: ")', '프롬프트 입력'],
      },
      {
        levelNumber: 17,
        title_ko: '자료형 확인(type())과 정수·실수 형변환 (int(), float())',
        title_en: 'Checking Types with type() & Casting (int(), float())',
        syntaxTags: ['type(x)', 'int(), float()'],
      },
      {
        levelNumber: 18,
        title_ko: '숫자를 문자열로 바꾸는 str()과 형변환 결합 출력',
        title_en: 'Converting Numbers to Strings with str()',
        syntaxTags: ['str(n)', '"Lv." + str(n)'],
      },
      {
        levelNumber: 19,
        title_ko: '다중 변수 할당(a, b = 1, 2), 값 교환(Swap)과 input().split()',
        title_en: 'Multiple Assignment, Swap (a, b = b, a) & input().split()',
        syntaxTags: ['a, b = b, a', 'input().split()'],
      },
      {
        levelNumber: 20,
        title_ko: '변수·자료형·입력 종합 문제풀이',
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
        levelNumber: 21,
        title_ko: '불리언(True, False)과 같음·다름 비교 연산자 (==, !=)',
        title_en: 'Booleans (True, False) & Equality Operators (==, !=)',
        syntaxTags: ['True, False', '==, !='],
      },
      {
        levelNumber: 22,
        title_ko: '크기 비교 연산자 (>, <, >=, <=)와 연쇄 비교 (a <= x <= b)',
        title_en: 'Relational Operators (>, <, >=, <=) & Chained Comparisons',
        syntaxTags: ['>, <, >=, <=', 'a <= x <= b'],
      },
      {
        levelNumber: 23,
        title_ko: 'bool() 형변환과 참·거짓(Truthy / Falsy) 판별',
        title_en: 'bool() Casting & Truthy / Falsy Evaluation',
        syntaxTags: ['bool(x)', '0, "" vs 1, "py"'],
      },
      {
        levelNumber: 24,
        title_ko: '논리 연산자 and(동시 만족)와 or(하나 이상 만족)',
        title_en: 'Logical Operators and & or',
        syntaxTags: ['and', 'or'],
      },
      {
        levelNumber: 25,
        title_ko: '논리 반전 not과 복합 논리식 읽기',
        title_en: 'Logical Negation not & Compound Logical Expressions',
        syntaxTags: ['not', 'not / and / or'],
      },
      {
        levelNumber: 26,
        title_ko: 'if 단일 조건문과 들여쓰기(4칸) 규칙',
        title_en: 'Single if Statements & 4-Space Indentation',
        syntaxTags: ['if 조건:', '들여쓰기 4칸'],
      },
      {
        levelNumber: 27,
        title_ko: 'if - else 양방향 조건 분기',
        title_en: 'if - else Two-Way Branching',
        syntaxTags: ['if ... else:', '양방향 분기'],
      },
      {
        levelNumber: 28,
        title_ko: 'if - elif - else 다중 조건 분기',
        title_en: 'if - elif - else Multi-Way Branching',
        syntaxTags: ['elif 조건:', '다중 분기'],
      },
      {
        levelNumber: 29,
        title_ko: '중첩 if문(Nested if)과 빈 블록 pass',
        title_en: 'Nested if Statements & pass Keyword',
        syntaxTags: ['중첩 if문', 'pass'],
      },
      {
        levelNumber: 30,
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
        levelNumber: 31,
        title_ko: 'for 반복문과 range(끝) 기본 반복 (0 ~ n-1)',
        title_en: 'for Loops & Basic range(stop) (0 to n-1)',
        syntaxTags: ['for i in range(n):', '0 ~ n-1'],
      },
      {
        levelNumber: 32,
        title_ko: 'range(시작, 끝) 구간 반복과 range(시작, 끝, 간격)',
        title_en: 'range(start, stop) & range(start, stop, step)',
        syntaxTags: ['range(a, b)', 'range(a, b, step)'],
      },
      {
        levelNumber: 33,
        title_ko: 'range() 음수 간격(-1)을 활용한 역순 카운트다운',
        title_en: 'Reverse Countdown with Negative Step range(n, 0, -1)',
        syntaxTags: ['range(n, 0, -1)', '역순 반복'],
      },
      {
        levelNumber: 34,
        title_ko: 'for 반복문과 누적 합계(+=)·누적 곱(*=) 패턴',
        title_en: 'for Loops with Sum (+=) & Product (*=) Accumulators',
        syntaxTags: ['total += i', 'prod *= i'],
      },
      {
        levelNumber: 35,
        title_ko: '반복문 안의 if 조건 판별과 개수 세기(count += 1)',
        title_en: 'Conditional Filtering & Counting (count += 1) in Loops',
        syntaxTags: ['for + if', 'count += 1'],
      },
      {
        levelNumber: 36,
        title_ko: 'while 조건 반복문과 증감 변수 제어',
        title_en: 'while Conditional Loops & Step Variable Control',
        syntaxTags: ['while 조건:', '증감 제어'],
      },
      {
        levelNumber: 37,
        title_ko: 'break로 반복 즉시 종료하기와 while True: 무한 루프 패턴',
        title_en: 'Exiting Loops with break & while True: Pattern',
        syntaxTags: ['break', 'while True:'],
      },
      {
        levelNumber: 38,
        title_ko: 'continue로 특정 조건 건너뛰기',
        title_en: 'Skipping Iterations with continue',
        syntaxTags: ['continue', '조건 건너뛰기'],
      },
      {
        levelNumber: 39,
        title_ko: '중첩 for 반복문과 줄 끝 제어(end="", print()) 2차원 출력',
        title_en: 'Nested for Loops & 2D Output with end="" and print()',
        syntaxTags: ['이중 for문', 'end="" + print()'],
      },
      {
        levelNumber: 40,
        title_ko: '반복문과 흐름 제어 기초 종합 문제풀이',
        title_en: 'Section 4 Comprehensive Review',
        syntaxTags: ['반복문 종합', '타이핑 마스터'],
      },
    ],
  },
  {
    id: 'py-sec-5',
    sectionNumber: 5,
    title_ko: '리스트(List) 필수 기초',
    title_en: 'Essential List Foundations',
    levels: [
      {
        levelNumber: 41,
        title_ko: '리스트 생성([ ]), 길이(len())와 양수·음수 인덱싱 (nums[0], nums[-1])',
        title_en: 'List Creation ([ ]), len() & Positive/Negative Indexing',
        syntaxTags: ['[a, b, c]', 'len(), nums[0], nums[-1]'],
      },
      {
        levelNumber: 42,
        title_ko: '리스트 요소 값 변경(nums[i] = v)과 del 키워드 삭제',
        title_en: 'Updating List Elements (nums[i] = v) & Deleting with del',
        syntaxTags: ['nums[i] = v', 'del nums[i]'],
      },
      {
        levelNumber: 43,
        title_ko: '리스트 슬라이싱(nums[a:b])과 리스트 연결(+)·반복(*)',
        title_en: 'List Slicing (nums[a:b]), Concatenation (+) & Repetition (*)',
        syntaxTags: ['nums[a:b]', '리스트 +, *'],
      },
      {
        levelNumber: 44,
        title_ko: '리스트 요소 추가(.append())와 끝 요소 꺼내기(.pop())',
        title_en: 'Adding with .append() & Removing with .pop()',
        syntaxTags: ['.append(x)', '.pop()'],
      },
      {
        levelNumber: 45,
        title_ko: '리스트 포함 검사(in, not in)와 for x in nums: 순회',
        title_en: 'List Membership (in, not in) & for x in nums: Iteration',
        syntaxTags: ['in, not in', 'for x in nums:'],
      },
      {
        levelNumber: 46,
        title_ko: '반복문과 .append()로 조건에 맞는 새 리스트 만들기',
        title_en: 'Building Filtered Lists with Loops & .append()',
        syntaxTags: ['빈 리스트 []', 'for + if + .append()'],
      },
      {
        levelNumber: 47,
        title_ko: '숫자 리스트 필수 집계(sum(), max(), min())와 기본 정렬(.sort())',
        title_en: 'List Aggregations (sum, max, min) & In-Place .sort()',
        syntaxTags: ['sum, max, min', '.sort()'],
      },
      {
        levelNumber: 48,
        title_ko: '리스트 필수 기초 종합 문제풀이',
        title_en: 'Section 5 Comprehensive Review',
        syntaxTags: ['리스트 기초 종합', '타이핑 마스터'],
      },
    ],
  },
  {
    id: 'py-sec-6',
    sectionNumber: 6,
    title_ko: '문자열(String) 필수 기초',
    title_en: 'Essential String Foundations',
    levels: [
      {
        levelNumber: 49,
        title_ko: '여러 줄 문자열("""...""")과 문자열 길이(len())',
        title_en: 'Multi-line Strings ("""...""") & String Length (len())',
        syntaxTags: ['"""..."""', 'len(s)'],
      },
      {
        levelNumber: 50,
        title_ko: '문자열 양수·음수 인덱싱(s[0], s[-1])과 불변성(수정 불가)',
        title_en: 'String Indexing (s[0], s[-1]) & Immutability',
        syntaxTags: ['s[0], s[-1]', '문자열 불변성'],
      },
      {
        levelNumber: 51,
        title_ko: '문자열 기본 슬라이싱 (s[a:b], s[:b], s[a:])',
        title_en: 'Basic String Slicing (s[a:b], s[:b], s[a:])',
        syntaxTags: ['s[a:b]', 's[:b], s[a:]'],
      },
      {
        levelNumber: 52,
        title_ko: '문자열 포함 연산자(in, not in)와 for ch in s: 한 글자씩 순회',
        title_en: 'String Membership (in, not in) & for ch in s: Iteration',
        syntaxTags: ['"a" in s', 'for ch in s:'],
      },
      {
        levelNumber: 53,
        title_ko: 'f-string (f"{변수}", f"{수식}") 기본 문자열 포맷팅',
        title_en: 'Basic f-string Formatting (f"{var}", f"{expr}")',
        syntaxTags: ['f"{var}"', 'f"{a + b}"'],
      },
      {
        levelNumber: 54,
        title_ko: '문자열 공백 제거(.strip())와 특정 글자 치환(.replace())',
        title_en: 'String Trimming (.strip()) & Replacement (.replace())',
        syntaxTags: ['.strip()', '.replace(old, new)'],
      },
      {
        levelNumber: 55,
        title_ko: '문자열을 쪼개어 리스트로 만드는 .split()과 분리된 리스트 활용',
        title_en: 'Splitting Strings into Lists with .split()',
        syntaxTags: ['.split()', '.split(",")'],
      },
      {
        levelNumber: 56,
        title_ko: '문자열 필수 기초 종합 문제풀이',
        title_en: 'Section 6 Comprehensive Review',
        syntaxTags: ['문자열 기초 종합', '타이핑 마스터'],
      },
    ],
  },
  {
    id: 'py-sec-7',
    sectionNumber: 7,
    title_ko: '튜플·None·딕셔너리·집합 필수 기초',
    title_en: 'Tuples, None, Dictionaries & Sets Foundations',
    levels: [
      {
        levelNumber: 57,
        title_ko: '튜플(tuple) 생성, 인덱싱과 튜플 언패킹',
        title_en: 'Tuple Creation, Indexing & Tuple Unpacking',
        syntaxTags: ['(a, b), (a,)', 'x, y = pt'],
      },
      {
        levelNumber: 58,
        title_ko: '빈 값 None 자료형과 is None, is not None 판별',
        title_en: 'The None Type & is None / is not None Checks',
        syntaxTags: ['None', 'is None, is not None'],
      },
      {
        levelNumber: 59,
        title_ko: '딕셔너리(dict) 생성과 키(d[key])로 값 조회하기',
        title_en: 'Dictionary Creation & Key Lookup (d[key])',
        syntaxTags: ['{"k": v}', 'd["k"]'],
      },
      {
        levelNumber: 60,
        title_ko: '딕셔너리 쌍 추가·수정(d[k] = v), 삭제(del)와 키 확인(in)',
        title_en: 'Dictionary Insert/Update (d[k] = v), del & Key Check (in)',
        syntaxTags: ['d[k] = v', 'del d[k], k in d'],
      },
      {
        levelNumber: 61,
        title_ko: '딕셔너리 키 순회와 for k, v in d.items(): 쌍 순회',
        title_en: 'Dictionary Key Loop & for k, v in d.items(): Iteration',
        syntaxTags: ['for k in d:', 'd.items()'],
      },
      {
        levelNumber: 62,
        title_ko: '집합(set) 생성, 중복 제거와 요소 추가(.add())',
        title_en: 'Sets (set), Deduplication & Adding Elements (.add())',
        syntaxTags: ['set(), {1, 2}', '.add(x)'],
      },
      {
        levelNumber: 63,
        title_ko: '필수 자료구조 상호 형변환 (list(), tuple(), set())',
        title_en: 'Collection Type Casting (list(), tuple(), set())',
        syntaxTags: ['list(), tuple()', 'set() 중복 제거'],
      },
      {
        levelNumber: 64,
        title_ko: '튜플·None·딕셔너리·집합 기초 종합 문제풀이',
        title_en: 'Section 7 Comprehensive Review',
        syntaxTags: ['컬렉션 기초 종합', '타이핑 마스터'],
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
        levelNumber: 65,
        title_ko: '매개변수 없는 함수 정의(def)와 함수 호출 기초',
        title_en: 'Defining & Calling Parameterless Functions (def)',
        syntaxTags: ['def fn():', 'fn()'],
      },
      {
        levelNumber: 66,
        title_ko: '매개변수(Parameter)가 있는 함수 정의와 인자 전달',
        title_en: 'Functions with Parameters & Passing Arguments',
        syntaxTags: ['def fn(a, b):', '인자 전달'],
      },
      {
        levelNumber: 67,
        title_ko: 'return으로 결과값 반환하기 (print와 return의 차이)',
        title_en: 'Returning Values with return (print vs return)',
        syntaxTags: ['return 값', '반환값 활용'],
      },
      {
        levelNumber: 68,
        title_ko: '다중 값 반환(return a, b) 언패킹과 조건부 조기 return',
        title_en: 'Multiple Return Unpacking & Early Conditional return',
        syntaxTags: ['return a, b', '조기 return'],
      },
      {
        levelNumber: 69,
        title_ko: '기본값 매개변수(b=1)와 키워드 인자 호출(fn(a=1, b=2))',
        title_en: 'Default Parameters (b=1) & Keyword Arguments',
        syntaxTags: ['def fn(a, b=1):', '키워드 인자'],
      },
      {
        levelNumber: 70,
        title_ko: '지역변수(Local)의 유효 범위와 global 전역변수 기초',
        title_en: 'Local Variable Scope & global Keyword Basics',
        syntaxTags: ['지역변수 범위', 'global'],
      },
      {
        levelNumber: 71,
        title_ko: '함수(def) 필수 기초 종합 문제풀이',
        title_en: 'Section 8 Comprehensive Review',
        syntaxTags: ['함수 기초 종합', '타이핑 마스터'],
      },
    ],
  },
  {
    id: 'py-sec-9',
    sectionNumber: 9,
    title_ko: '클래스(class)와 객체 필수 기초',
    title_en: 'Classes (class) & Objects Foundations',
    levels: [
      {
        levelNumber: 72,
        title_ko: '클래스(class) 정의와 인스턴스 객체 생성 첫걸음',
        title_en: 'Defining Classes (class) & Creating Instances',
        syntaxTags: ['class Dog:', 'd = Dog(), self'],
      },
      {
        levelNumber: 73,
        title_ko: '생성자 __init__과 self로 초기 속성 설정하기',
        title_en: 'Initializer __init__ & Setting self Attributes',
        syntaxTags: ['def __init__(self):', 'self.name = name'],
      },
      {
        levelNumber: 74,
        title_ko: '인스턴스 메서드로 self 속성값 변경하고 출력하기',
        title_en: 'Mutating & Printing self Attributes in Methods',
        syntaxTags: ['self.hp += 10', 'd.method()'],
      },
      {
        levelNumber: 75,
        title_ko: '값을 반환(return)하는 메서드와 다중 인스턴스 독립 상태 비교',
        title_en: 'Methods Returning Values & Independent Instances',
        syntaxTags: ['return self.x', '다중 인스턴스'],
      },
      {
        levelNumber: 76,
        title_ko: '리스트·딕셔너리 속성을 가진 클래스 다루기',
        title_en: 'Classes with List & Dictionary Attributes',
        syntaxTags: ['self.items = []', '객체 컬렉션 집계'],
      },
      {
        levelNumber: 77,
        title_ko: '클래스와 객체 필수 기초 종합 문제풀이',
        title_en: 'Section 9 Comprehensive Review',
        syntaxTags: ['클래스 기초 종합', '타이핑 마스터'],
      },
    ],
  },
  {
    id: 'py-sec-10',
    sectionNumber: 10,
    title_ko: '예외 처리(try - except) 필수 기초',
    title_en: 'Exception Handling (try - except) Foundations',
    levels: [
      {
        levelNumber: 78,
        title_ko: '런타임 에러의 이해와 try - except 기본 구조',
        title_en: 'Understanding Runtime Errors & Basic try - except',
        syntaxTags: ['try:', 'except:'],
      },
      {
        levelNumber: 79,
        title_ko: '수치·변환 에러 잡기 (ValueError, ZeroDivisionError)',
        title_en: 'Catching ValueError & ZeroDivisionError',
        syntaxTags: ['ValueError', 'ZeroDivisionError'],
      },
      {
        levelNumber: 80,
        title_ko: '컬렉션·타입 에러 잡기 (IndexError, KeyError, TypeError)',
        title_en: 'Catching IndexError, KeyError & TypeError',
        syntaxTags: ['IndexError, KeyError', 'TypeError'],
      },
      {
        levelNumber: 81,
        title_ko: '반복문(while)·함수(def)·클래스와 안전한 예외 처리 패턴',
        title_en: 'Safe Exception Patterns with Loops, Functions & Classes',
        syntaxTags: ['for/while + try', '안전 반환 메서드'],
      },
      {
        levelNumber: 82,
        title_ko: '예외 처리 기초 & 핵심 개념 기초편(Part 1) 완주 종합',
        title_en: 'Section 10 & Part 1 Core Foundations Master Review',
        syntaxTags: ['예외 기초 종합', 'Part 1 완주'],
      },
    ],
  },
  {
    id: 'py-sec-11',
    sectionNumber: 11,
    title_ko: '[반복·확장 1] 컬렉션 심화, 복사와 컴프리헨션',
    title_en: '[Review & Expand 1] Extended Collections, Copying & Comprehensions',
    levels: [
      {
        levelNumber: 83,
        title_ko: '리스트 원하는 위치 삽입(.insert())과 값 찾아 삭제(.remove())',
        title_en: 'List Insertion (.insert()) & Value Removal (.remove())',
        syntaxTags: ['.insert(i, x)', '.remove(x)'],
      },
      {
        levelNumber: 84,
        title_ko: '리스트 확장(.extend()), 비우기(.clear())와 사본 복사(.copy(), [:])',
        title_en: 'List .extend(), .clear() & Shallow Copy (.copy(), [:])',
        syntaxTags: ['.extend(), .clear()', '.copy(), a[:]'],
      },
      {
        levelNumber: 85,
        title_ko: '리스트 탐색(.index(), .count()), 뒤집기(.reverse())와 sorted() 사본 정렬',
        title_en: 'List .index(), .count(), .reverse() & sorted() Copy Sorting',
        syntaxTags: ['.index(), .count()', '.reverse(), sorted()'],
      },
      {
        levelNumber: 86,
        title_ko: '2차원 리스트(grid[r][c]) 인덱싱과 중첩 for문 행·열 집계',
        title_en: '2D Lists (grid[r][c]) & Nested Loop Row/Column Aggregations',
        syntaxTags: ['grid[r][c]', '2차원 행·열 집계'],
      },
      {
        levelNumber: 87,
        title_ko: '딕셔너리 안전 조회(.get()), 뷰 메서드(.keys(), .values())와 .pop(), .update()',
        title_en: 'Dictionary .get(), .keys(), .values(), .pop() & .update()',
        syntaxTags: ['.get(k, 기본값)', '.keys(), .values(), .update()'],
      },
      {
        levelNumber: 88,
        title_ko: '집합 연산자(& 교집합, | 합집합, - 차집합)와 안전 삭제(.discard())',
        title_en: 'Set Operators (&, |, -) & Safe .discard()',
        syntaxTags: ['&, |, -', '.discard(x)'],
      },
      {
        levelNumber: 89,
        title_ko: '한 줄 조건 표현식 (삼항 연산자 참값 if 조건 else 거짓값)',
        title_en: 'Inline Conditional Expressions (Ternary Operator)',
        syntaxTags: ['a if 조건 else b', '삼항 연산자'],
      },
      {
        levelNumber: 90,
        title_ko: '리스트 컴프리헨션 기본 ([식 for 변수 in 시퀀스])',
        title_en: 'Basic List Comprehensions ([expr for x in seq])',
        syntaxTags: ['[x * 2 for x in seq]', '컴프리헨션 기본'],
      },
      {
        levelNumber: 91,
        title_ko: '조건부 리스트 컴프리헨션([식 for 변수 in 시퀀스 if 조건])과 딕셔너리 컴프리헨션 기초',
        title_en: 'Conditional List Comprehensions & Dict Comprehensions Basics',
        syntaxTags: ['[x for x in seq if 조건]', '{k: v for ...}'],
      },
      {
        levelNumber: 92,
        title_ko: '컬렉션 심화 & 컴프리헨션 누적 복습 종합',
        title_en: 'Section 11 Comprehensive Spiral Review',
        syntaxTags: ['컬렉션 심화 종합', '2회독 복습'],
      },
    ],
  },
  {
    id: 'py-sec-12',
    sectionNumber: 12,
    title_ko: '[반복·확장 2] 문자열 심화 메서드와 서식',
    title_en: '[Review & Expand 2] Extended String Methods & Formatting',
    levels: [
      {
        levelNumber: 93,
        title_ko: '대소문자 변환 메서드 (.upper(), .lower(), .capitalize())',
        title_en: 'Case Conversion Methods (.upper(), .lower(), .capitalize())',
        syntaxTags: ['.upper(), .lower()', '.capitalize(), .title()'],
      },
      {
        levelNumber: 94,
        title_ko: '문자열 리스트를 하나로 묶는 "구분자".join()과 .split() 결합',
        title_en: 'Joining String Lists with "sep".join() & .split()',
        syntaxTags: ['"-".join(list)', 'split & join'],
      },
      {
        levelNumber: 95,
        title_ko: '문자열 위치·개수 탐색(.find(), .count())과 방향별 공백 제거(.lstrip(), .rstrip())',
        title_en: 'String .find(), .count() & Directional Stripping (.lstrip(), .rstrip())',
        syntaxTags: ['.find(), .count()', '.lstrip(), .rstrip()'],
      },
      {
        levelNumber: 96,
        title_ko: '접두·접미사 검사(.startswith(), .endswith())와 문자 종류 판별(.isdigit(), .isalpha())',
        title_en: 'Prefix/Suffix (.startswith, .endswith) & Character Checks (.isdigit, .isalpha)',
        syntaxTags: ['.startswith(), .endswith()', '.isdigit(), .isalpha()'],
      },
      {
        levelNumber: 97,
        title_ko: 'f-string 세부 서식 지정자 (:.2f 소수점, :, 천 단위 콤마)',
        title_en: 'f-string Format Specifiers (:.2f, :, & :03d)',
        syntaxTags: ['f"{x:.2f}"', 'f"{n:,}", f"{n:03d}"'],
      },
      {
        levelNumber: 98,
        title_ko: '간격·역순 슬라이싱(s[::2], s[::-1])과 아스키 문자 코드(ord(), chr())',
        title_en: 'Step/Reverse Slicing (s[::2], s[::-1]) & Character Codes (ord, chr)',
        syntaxTags: ['s[::2], s[::-1]', 'ord(), chr()'],
      },
      {
        levelNumber: 99,
        title_ko: '문자열 심화 기능 & 누적 복습 종합 문제풀이',
        title_en: 'Section 12 Comprehensive Spiral Review',
        syntaxTags: ['문자열 심화 종합', '2회독 복습'],
      },
    ],
  },
  {
    id: 'py-sec-13',
    sectionNumber: 13,
    title_ko: '[반복·확장 3] 실용 내장 함수, lambda와 표준 모듈',
    title_en: '[Review & Expand 3] Practical Built-ins, lambda & Standard Modules',
    levels: [
      {
        levelNumber: 100,
        title_ko: '수치 내장 함수 (abs(), round(), divmod())',
        title_en: 'Numeric Built-in Functions (abs(), round(), divmod())',
        syntaxTags: ['abs(), round()', 'divmod(a, b)'],
      },
      {
        levelNumber: 101,
        title_ko: 'map() 일괄 변환과 map(int, input().split()) 실전 패턴',
        title_en: 'Batch Mapping with map() & map(int, input().split())',
        syntaxTags: ['map(int, ...)', 'list(map(...))'],
      },
      {
        levelNumber: 102,
        title_ko: '인덱스와 값을 함께 꺼내는 enumerate() 순회',
        title_en: 'Indexed Iteration with enumerate()',
        syntaxTags: ['enumerate(seq)', 'enumerate(seq, 1)'],
      },
      {
        levelNumber: 103,
        title_ko: '병렬 묶기 zip(), dict(zip())과 역순 순회 reversed()',
        title_en: 'Parallel Pairing zip(), dict(zip()) & reversed()',
        syntaxTags: ['zip(), dict(zip())', 'reversed()'],
      },
      {
        levelNumber: 104,
        title_ko: '논리 일괄 검사(all(), any())와 자료형 확인(isinstance())',
        title_en: 'Logical Quantifiers (all(), any()) & isinstance()',
        syntaxTags: ['all(), any()', 'isinstance(x, T)'],
      },
      {
        levelNumber: 105,
        title_ko: '가변 인자(*args, **kwargs)와 익명 함수 lambda 정렬(key=lambda)',
        title_en: 'Variadic (*args, **kwargs) & lambda Key Sorting',
        syntaxTags: ['*args, **kwargs', 'sorted(..., key=lambda)'],
      },
      {
        levelNumber: 106,
        title_ko: '표준 수학 모듈 import math 기초 (math.sqrt(), math.ceil(), math.floor())',
        title_en: 'Standard math Module Basics (sqrt, ceil, floor, gcd)',
        syntaxTags: ['import math', 'sqrt, ceil, floor'],
      },
      {
        levelNumber: 107,
        title_ko: '실용 내장 함수·모듈 & 함수 확장 누적 복습 종합',
        title_en: 'Section 13 Comprehensive Spiral Review',
        syntaxTags: ['내장·모듈 종합', '2회독 복습'],
      },
    ],
  },
  {
    id: 'py-sec-14',
    sectionNumber: 14,
    title_ko: '[반복·확장 4] 클래스 상속·예외 확장과 파이널 마스터',
    title_en: '[Review & Expand 4] Class Inheritance, Exception Extensions & Final Master',
    levels: [
      {
        levelNumber: 108,
        title_ko: '객체 문자열 표현(__str__)과 매직 메서드 기초',
        title_en: 'Object String Representation (__str__) & Magic Methods',
        syntaxTags: ['def __str__(self):', 'print(obj)'],
      },
      {
        levelNumber: 109,
        title_ko: '클래스 상속(class Child(Parent):), 메서드 오버라이딩과 super().__init__()',
        title_en: 'Class Inheritance, Method Overriding & super().__init__()',
        syntaxTags: ['class Child(Parent):', 'super().__init__()'],
      },
      {
        levelNumber: 110,
        title_ko: 'try - except - else - finally 완전한 흐름과 에러 객체(as e)',
        title_en: 'Full try-except-else-finally Flow & Exception Object (as e)',
        syntaxTags: ['else:, finally:', 'except ... as e:'],
      },
      {
        levelNumber: 111,
        title_ko: 'raise로 직접 예외 발생시키기와 클래스·함수 입력 검증',
        title_en: 'Raising Exceptions with raise & Input Validation',
        syntaxTags: ['raise ValueError("...")', '입력 검증'],
      },
      {
        levelNumber: 112,
        title_ko: '객체 리스트와 컴프리헨션·lambda 정렬·예외 통합 실습',
        title_en: 'Object Lists with Comprehensions, lambda Sort & Exceptions',
        syntaxTags: ['객체 리스트 정렬', '전 과정 통합'],
      },
      {
        levelNumber: 113,
        title_ko: '파이썬 베이직 전 과정(Part 1 + Part 2) 마스터 종합',
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
