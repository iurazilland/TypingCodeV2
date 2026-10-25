/**
 * Curriculum UI & Track/Module English Translation Dictionaries
 */

export const TRACK_NAME_EN_MAP: Record<string, string> = {
  python: 'Python',
  c: 'C Language',
  web: 'Web (HTML & CSS)',
  javascript: 'JavaScript',
  java: 'Java',
  sql: 'SQL & Database',
  go: 'Go Language',
  rust: 'Rust',
  cpp: 'C++',
  csharp: 'C# & Unity',
  swift: 'Swift & iOS',
};

export const CATEGORY_EN_MAP: Record<string, string> = {
  '베이직': 'Basics',
  '어드밴스': 'Advanced',
  '빅데이터': 'Big Data',
  '인공지능': 'AI & ML',
  '아두이노': 'Arduino',
  '자료구조': 'Data Structures',
  'HTML': 'HTML',
  'CSS': 'CSS',
  '반응형 UI': 'Responsive UI',
  'ES6+ 기초': 'ES6+ Basics',
  'DOM 조작': 'DOM Scripting',
  '비동기 & API': 'Async & API',
  '캔버스 게임': 'Canvas Games',
  '객체지향 & 컬렉션': 'OOP & Collections',
  'Spring 부트': 'Spring Boot',
  '테이블 & SELECT': 'Tables & SELECT',
  'JOIN & 서브쿼리': 'JOIN & Subqueries',
  '동시성 & 고루틴': 'Concurrency & Goroutines',
  '소유권 & 빌림': 'Ownership & Borrowing',
  'STL & 템플릿': 'STL & Templates',
  'Unity C#': 'Unity C#',
  'SwiftUI': 'SwiftUI',
};

export const SKILLS_EN_MAP: Record<string, string> = {
  // Python
  'print/input 표준 입출력': 'print/input Standard I/O',
  '기본 연산자 & 변수': 'Basic Operators & Variables',
  'if/elif/else 분기': 'if/elif/else Branching',
  'for/while 반복문': 'for/while Loop Iterations',
  'Class & 상속 객체지향': 'OOP Classes & Inheritance',
  '람다식 & 리스트 컴프리헨션': 'Lambdas & List Comprehensions',
  '데코레이터 & 제너레이터': 'Decorators & Generators',
  'try-except 예외처리': 'try-except Exception Handling',
  'NumPy 다차원 배열 연산': 'NumPy N-D Array Operations',
  'Pandas DataFrame 조작': 'Pandas DataFrame Manipulations',
  '데이터 결측치 정제': 'Data Cleaning & Preprocessing',
  '그룹화 통계 집계': 'Grouped Statistical Aggregations',
  '텐서(Tensor) 기본 연산': 'Fundamental Tensor Operations',
  '선형 회귀 모델 구현': 'Linear Regression Modeling',
  '손실 함수 & 경사하강법': 'Loss Functions & Gradient Descent',
  '인공 신경망 Perceptron': 'Artificial Neural Network Perceptron',

  // C
  'main 함수 & 표준 라이브러리': 'main Function & Standard Library',
  '정밀 입출력 printf/scanf': 'Formatted I/O (printf/scanf)',
  '기본 연산 & 형변환': 'Basic Math & Type Casting',
  '반복 제어 for/while': 'Loop Controls (for/while)',
  'digitalRead / digitalWrite 핀 제어': 'digitalRead / digitalWrite Pin I/O',
  '아날로그 센서 ADC 읽기': 'Analog Sensor ADC Reading',
  'PWM 모터 & LED 제어': 'PWM Motor & LED Controls',
  '시리얼 통신 데이터 송수신': 'Serial Communication Transceiving',
  '메모리 주소 & 포인터 연산': 'Memory Addresses & Pointer Math',
  '동적 메모리 malloc/free': 'Dynamic Memory Allocation (malloc/free)',
  '구조체(struct) 설계': 'Data Structures Modeling (struct)',
  '함수 포인터 & 콜백': 'Function Pointers & Callbacks',
  '단방향/양방향 연결 리스트': 'Singly & Doubly Linked Lists',
  '스택(Stack) & 큐(Queue)': 'Stacks & Queues Implementation',
  '이진 탐색 트리(BST)': 'Binary Search Trees (BST)',
  '재귀 알고리즘 최적화': 'Recursive Algorithm Optimization',

  // Web
  '시맨틱 구조 태그(header, section)': 'Semantic Structural Tags (header, section)',
  '사용자 입력 Form & Input': 'User Input Forms & Controls',
  '표(Table) & 리스트 마크업': 'Tables & Lists Markup',
  '웹 표준 & 접근성 원칙': 'Web Standards & Accessibility',
  'Flexbox 주축/교차축 정렬': 'Flexbox Axis Alignment',
  'CSS Grid 2차원 레이아웃': 'CSS Grid 2D Layouts',
  '트랜지션 & 키프레임 애니메이션': 'Transitions & Keyframe Animations',
  '모바일 반응형 미디어쿼리': 'Mobile Responsive Media Queries',
  '모바일 우선(Mobile-First) 디자인': 'Mobile-First Responsive Design',
  'CSS 변수(Custom Properties)': 'CSS Variables (Custom Properties)',
  '다크모드 지원 테마 시스템': 'Dark Mode Theme System',
  'SVG 그래픽 & 키프레임 이펙트': 'SVG Vector Graphics & Effects',

  // JavaScript
  'let/const 변수 & 화살표 함수': 'let/const & Arrow Functions',
  'document DOM 요소 선택/수정': 'document DOM Selection & Updates',
  'addEventListener 이벤트 제어': 'addEventListener Event Handling',
  '배열 고차함수(map, filter)': 'Array Higher-Order Functions (map, filter)',
  'Promise 체이닝 & 에러 처리': 'Promise Chaining & Error Handling',
  'async / await 비동기 제어': 'async / await Asynchronous Flow',
  '클로저(Closure)와 스코프': 'Closures & Lexical Scope',
  'Fetch API 데이터 로드': 'Fetch API HTTP Requests',
  '기본 타입 선언 & 타입 추론': 'Type Annotations & Inference',
  '인터페이스(interface) 모델링': 'Interface Modeling',
  '제네릭(Generics) 재사용성': 'Generic Reusable Functions',
  '유니온 & 제어 흐름 분석': 'Union Types & Narrowing',
  'JSX 컴포넌트 구조화': 'JSX Component Architecture',
  'useState 반응형 상태 관리': 'useState Reactive State',
  'useEffect 부수효과 처리': 'useEffect Lifecycle Hooks',
  'Props 컴포넌트 통신': 'Props Component Communication',
  'Node.js 런타임 & 모듈(ESM)': 'Node.js Runtime & ESM Modules',
  'Express 서버 라우팅': 'Express Server Routing',
  'JSON 요청/응답 처리': 'JSON Request/Response Handling',
  '미들웨어(Middleware) 파이프라인': 'Middleware Processing Pipeline',

  // Java
  '클래스와 객체 인스턴스': 'Classes & Object Instances',
  '캡슐화 getter/setter': 'Encapsulation (getters/setters)',
  '상속(extends)과 다형성': 'Inheritance & Polymorphism',
  '인터페이스(implements)': 'Interfaces & Abstract Classes',
  'ArrayList & HashMap 컬렉션': 'ArrayList & HashMap Collections',
  '제네릭(Generics) 타입 안정성': 'Generics Type Safety',
  '람다식 & 함수형 인터페이스': 'Lambdas & Functional Interfaces',
  'Stream API map/filter/collect': 'Stream API (map/filter/collect)',
  '@RestController & 엔드포인트': '@RestController & Endpoints',
  '제어의 역전(IoC) & DI 주입': 'Inversion of Control (IoC) & DI',
  'DTO 객체 매핑 & JSON 반환': 'DTO Object Mapping & JSON Responses',
  'HTTP 상태 코드 응답': 'HTTP Status Code Standards',

  // SQL
  'SELECT 컬럼 지정 조회': 'SELECT Column Queries',
  'WHERE 조건식 & 비교 연산자': 'WHERE Filtering & Operators',
  'IN / BETWEEN / LIKE 패턴': 'IN / BETWEEN / LIKE Pattern Matching',
  'ORDER BY 오름/내림차순 정렬': 'ORDER BY Sorting (ASC/DESC)',
  'INNER / LEFT OUTER JOIN 결합': 'INNER & LEFT OUTER JOINs',
  'GROUP BY & HAVING 집계 필터': 'GROUP BY & HAVING Aggregations',
  '서브쿼리(Subquery) 중첩 조회': 'Subquery Nested Lookups',
  '집계 함수 COUNT/SUM/AVG': 'Aggregate Functions (COUNT/SUM/AVG)',

  // Go
  'package main & fmt 패키지': 'package main & fmt Package',
  ':= 단축 변수 선언 & 타입': 'Short Variable Declaration (:=)',
  '동적 배열 슬라이스(Slice)': 'Dynamic Slices & Capacity',
  '구조체(struct) 데이터 모델': 'Struct Data Models',
  'net/http 웹 서버 라우팅': 'net/http Server Routing',
  'JSON 인코딩/디코딩 직렬화': 'JSON Encoding/Decoding',
  'HTTP 미들웨어 인터셉터': 'HTTP Middleware Interceptors',
  'RESTful 엔드포인트 설계': 'RESTful Endpoint Design',
  'go 비동기 고루틴 생성': 'Goroutines Concurrent Execution',
  '채널(Channel) 데이터 송수신': 'Channel Communication',
  'select 다중 채널 폴링': 'select Multi-Channel Polling',
  'sync.WaitGroup 동기화': 'sync.WaitGroup Synchronization',

  // Rust
  'let / let mut 변수 가변성': 'let / let mut Immutability',
  '소유권 이동(Move) 규칙': 'Ownership Move Semantics',
  '참조와 대여(&, &mut)': 'Borrowing & References (&, &mut)',
  'match 패턴 매칭 제어': 'match Exhaustive Pattern Matching',
  'Result와 Option 에러 처리': 'Result & Option Error Handling',
  '? 연산자 에러 전파': '? Operator Error Propagation',
  '트레이트(Trait) 다형성': 'Trait Polymorphism',
  '제네릭(Generics) 추상화': 'Generics Abstraction',
  '스마트 포인터 Box<T>': 'Smart Pointers (Box<T>)',
  '스레드 안전 Arc / Mutex': 'Thread Safety (Arc / Mutex)',
  '채널 기반 메시지 패싱': 'Channel-Based Message Passing',
  '무비용 이터레이터 최적화': 'Zero-Cost Iterator Optimizations',

  // C++
  'std::cout / cin 스트림 제어': 'std::cout / cin Stream I/O',
  '생성자 & 소멸자 생명주기': 'Constructors & Destructors Lifecycle',
  '클래스 캡슐화 & 네임스페이스': 'Classes Encapsulation & Namespaces',
  '참조자(Reference &) 문법': 'References (&) Semantics',
  'std::vector 동적 배열': 'std::vector Dynamic Arrays',
  'std::map 딕셔너리 구조': 'std::map Associative Containers',
  '반복자(Iterator) 순회': 'Iterators & Range Traversal',
  'std::sort & 알고리즘 함수': 'std::sort & Algorithms',
  'std::unique_ptr & shared_ptr': 'Smart Pointers (unique_ptr, shared_ptr)',
  'auto 자동 타입 추론': 'auto Type Deduction',
  '인라인 람다 표현식': 'Inline Lambda Expressions',
  '범위 기반 for (Range-for)': 'Range-Based for Loops',

  // C#
  'Console.WriteLine 표준 입출력': 'Console.WriteLine Standard I/O',
  '프로퍼티(get; set;) 문법': 'Auto-Implemented Properties (get; set;)',
  '제네릭 List<T> & Dictionary': 'Generic List<T> & Dictionary',
  'LINQ 컬렉션 쿼리 필터': 'LINQ Queries & Filtering',
  'Start() / Update() 게임 루프': 'Start() / Update() Unity Game Loops',
  'Transform & Vector3 위치 제어': 'Transform & Vector3 Positioning',
  'Rigidbody 물리 및 충돌 처리': 'Rigidbody Physics & Collisions',
  'Instantiate 프리팹 동적 생성': 'Instantiate Prefabs Dynamically',
  'Minimal API 엔드포인트 매핑': 'Minimal API Route Mapping',
  '의존성 주입(DI) 서비스 컨테이너': 'Dependency Injection (DI) Container',
  'async Task<T> 비동기 I/O': 'async Task<T> Asynchronous I/O',
  'Entity Framework Core 연동': 'Entity Framework Core ORM',

  // Swift
  'let/var 변수 & 타입 추론': 'let/var & Type Inference',
  '옵셔널(Optional) 안전성': 'Optional Safety & Unwrapping',
  'guard let 조기 탈출 패턴': 'guard let Early Return Pattern',
  '후행 클로저(Trailing Closure)': 'Trailing Closure Syntax',
  'VStack / HStack / ZStack 뷰 레이아웃': 'VStack / HStack / ZStack Layouts',
  '@State & @Binding 상태 관리': '@State & @Binding State Management',
  'ViewModifier 스타일 체이닝': 'ViewModifier Style Chaining',
  '네비게이션 뷰(NavigationStack)': 'NavigationStack Routing',
  'MVVM ViewModel 설계': 'MVVM ViewModel Architecture',
  'URLSession 비동기 JSON 로드': 'URLSession Asynchronous Data Fetching',
  'Codable 데이터 디코딩': 'Codable JSON Decoding',
  'MainActor UI 스레드 동기화': 'MainActor UI Thread Synchronization',
};

export function getTrackName(track: { id: string; name: string }, isEn: boolean): string {
  if (!isEn) return track.name;
  return TRACK_NAME_EN_MAP[track.id] || track.name.replace(/\s*\([^)]*\)/, '').trim();
}

export function getCategoryName(category: string, isEn: boolean): string {
  if (!isEn) return category;
  return CATEGORY_EN_MAP[category] || category;
}

export function getSkillName(skill: string, isEn: boolean): string {
  if (!isEn) return skill;
  return SKILLS_EN_MAP[skill] || skill;
}
