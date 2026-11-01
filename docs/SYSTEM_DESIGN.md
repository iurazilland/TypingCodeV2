# 🏗️ 시스템 설계 사양서 (System Design Specification)

이 문서는 **TypingCode V2**의 기술적 설계, 아키텍처, 데이터 모델, 0ms 로컬 파이썬 AST 실행기, 캔버스 블록 엔진 및 멀티 언어 런타임 사양을 규정합니다.

---

## 1. 아키텍처 개요 (Architecture Overview)

TypingCode V2는 무거운 백엔드 의존성 없이 브라우저 환경에서 즉각 반응하는 하이브리드 실행 SPA/App Router 아키텍처로 설계되었습니다.

```
+---------------------------------------------------------------------------------------+
|                                   Next.js 14 App Router                               |
|  [Navbar] --------------------------------------------------------------------------  |
|  ├─ / (Home / UnifiedHeroCard / HeroPlayground)                                      |
|  ├─ /languages (13개 언어 트랙 탐색 & localStorage 실시간 클리어 레벨 진척도 집계)    |
|  ├─ /practice/[language] (14섹션 등 챕터별 Bento Syllabus Grid & 문법 태그 카드)     |
|  ├─ /practice/[language]/[level] (Dual Mode: Visual Block Studio & Typing/Quiz)      |
|  └─ /compiler (13개 언어/트랙 멀티 샌드박스 IDE)                                      |
+---------------------------------------------------------------------------------------+
                                           │
                      ┌────────────────────┴────────────────────┐
                      ▼                                         ▼
     [Client State & Visual Block Engine]              [Hybrid Execution Runtime]
     - Zustand: useTypingStore (WPM, Accuracy)         - 0ms Local Python AST & Debugger
     - Block Geometry & SVG Path Renderer                (src/lib/blockEvaluator.ts)
       (Statement, C-Shape, E-Shape, Method)           - Wandbox Multi-Language Cloud API
     - Magnetic Snapping & Mouth Nesting Guards          (Python, C, C++, Go, Rust, Java,
     - Structural Submission Judge                       JS, C#, Swift, SQL)
       (checkSubmissionPass anti-hardcoding)           - WebPreview (iframe srcdoc)
                                                       - Client Bash & VB Evaluators
```

---

## 2. 데이터 모델 (Data Models)

### 2.1 지원 언어 모델 (`src/lib/types.ts`)
```typescript
export type SupportedLanguage =
  | 'python' | 'c' | 'web' | 'javascript' | 'java'
  | 'sql' | 'go' | 'rust' | 'cpp' | 'csharp' | 'swift'
  | 'linux' | 'vb';
```

### 2.3 Supabase Auth & V2 Database Schema (`supabase/migrations/20261101000000_v2_initial_schema.sql`)
- **인증 및 라우트 보호**:
  - V1 프로젝트의 `auth.users`(이메일/비밀번호, GitHub, Google OAuth)를 100% 보존.
  - 서버 사이드 `src/middleware.ts`에서 `supabase.auth.getClaims()`로 JWT 서명을 검증하여 `/practice/*`, `/problems`, `/challenges`, `/compiler` 비로그인 접근을 차단(`/?login=required&next=...`)하고, 공개 페이지(`/`, `/languages`, `/learn/*`, `/ranking`)만 비로그인 조회 허용.
- **V2 핵심 3개 테이블 (전 테이블 RLS 활성화 및 `(select auth.uid())` 정책 적용)**:
  1. `public.profiles`: `auth.users(id)` 1:1 연동 프로필 및 리더보드 집계(`best_cpm`, `avg_accuracy`, `cleared_levels_count`, `solved_problems_count`).
  2. `public.user_level_progress`: `(user_id, track_id, level_number)` 복합 PK 기반 레벨·스텝 진척도, 클리어 여부, 하트, 최고 CPM/정확도 저장.
  3. `public.user_problem_solves`: `(user_id, problem_id)` 복합 PK 기반 `/problems` 해결 기록 저장.

### 2.4 연습 라운드 및 문항 모델 ([`src/lib/practiceTypes.ts`](file:///d:/Projects/TypingCode_V2/src/lib/practiceTypes.ts))
```typescript
export type ChallengeKind =
  | 'fill_blank'      // § 글자 수 1:1 캡슐 빈칸 채우기
  | 'fix_bug'         // 버그 1곳 정밀 수정
  | 'one_line'        // 빈 한 줄 코드 추가 작성
  | 'predict_output'  // 실행 결과 예측 4지선다 퀴즈
  | 'standard';       // 블록 조립 기본형

export interface TestCase {
  id?: string | number;
  input?: string;                          // input() 실행용 표준 입력 (stdin)
  expectedOutput: string;                  // 기대 터미널 출력 (stdout)
  expectedVariables?: Record<string, any>; // 기대 런타임 변수 메모리 상태
  isHidden?: boolean;
}

export interface PracticeQuestion {
  id: number;
  step: number;                            // 일반 레벨 1~13 / 섹션 종합 레벨 1~10
  type?: 'block' | 'typing' | 'quiz';
  kind?: ChallengeKind;
  prompt_ko: string;
  prompt_en?: string;
  hint_ko: string;
  hint_en?: string;
  templateCode?: string;                   // § 빈칸 또는 버그가 포함된 초기 템플릿 코드
  targetCode: string;                      // 정식 정답 코드 (또는 quiz 제시 코드)
  choices?: string[];                      // predict_output 4지선다 보기
  correctChoiceIndex?: number;             // 정답 보기 인덱스 (0~3)
  expectedVariables?: Record<string, any>;
  testCases?: TestCase[];
  initialBlocks?: Partial<CanvasBlock>[];
}

export interface PracticeRound {
  id: string;
  language: SupportedLanguage;
  trackId: string;
  moduleId: string;
  roundNumber: number;
  title_ko: string;
  title_en: string;
  description_ko?: string;
  description_en?: string;
  totalQuestions: number;                  // 일반 13 / 종합 10
  unlockedBlocks?: string[];               // 레벨별 도구함 노출 블록 키 목록
  questions: PracticeQuestion[];
}
```

### 2.3 캔버스 블록 기하학 모델 ([`src/lib/blockGeometry.ts`](file:///d:/Projects/TypingCode_V2/src/lib/blockGeometry.ts) & [`CanvasBlockItem.tsx`](file:///d:/Projects/TypingCode_V2/src/components/practice/CanvasBlockItem.tsx))
```typescript
export type BlockType =
  | 'start' | 'comment' | 'print' | 'variable' | 'assign' | 'aug_assign'
  | 'input' | 'type' | 'isinstance' | 'ord' | 'chr'
  | 'len' | 'sum' | 'max' | 'min' | 'sorted' | 'range' | 'map' | 'enumerate' | 'zip'
  | 'open' | 'method' | 'list' | 'tuple' | 'dict' | 'set'
  | 'if' | 'for_range' | 'for_in' | 'while' | 'break' | 'continue'
  | 'def' | 'return' | 'call'
  | 'class' | 'try' | 'except' | 'finally' | 'raise';

export interface IfBranch {
  id: string;
  kind: 'if' | 'elif' | 'else' | 'try' | 'except' | 'finally';
  condition?: string;          // if/elif 조건식 또는 except 에러 타입 (예: 'ValueError as e')
  children?: CanvasBlock[];    // 해당 분기 Mouth 내부 자식 블록 체인
}
```

---

## 3. 캔버스 블록 & 자석 스냅 엔진 설계 (Block & Snapping Engine)

Scratch 및 MakeCode의 블록 결합 원리를 브라우저 DOM 좌표 기하학과 단일 SVG 벡터 패스로 구현합니다.

### 3.1 3대 자석 스냅(Magnetic Snapping) 및 중첩 가드 규칙
드래그 중인 블록과 보드 위 블록들의 경계 상자(`getBoundingClientRect`)를 비교하여 스냅 타깃(`findSnapTarget`)을 실시간 계산합니다.

1. **상하 스택 결합 (Stack Snapping & Chain Splicing)**:
   - 타깃 블록 하단 요철(Bottom Tab) 접근 시 네온 옐로우 수평 가이드라인 표시 및 양방향 체인 연결(기존 체인 중간 끼워넣기 지원).
2. **ㄷ/E블록 내부 입구 결합 (Mouth Snapping)**:
   - **C-Shape 블록**: `for_range`, `for_in`, `while`, `def`, `class` (`class [Name]:` 및 상속형 `class [Child]([Parent]):`).
   - **E-Shape 다단 블록**: `if - elif - else` 및 예외 처리 `try - except - else - finally`.
   - **중첩 허용·차단 가드**:
     - `class` 블록은 최상위(Top-level) 전용으로 다른 ㄷ/E블록 내부 삽입을 차단합니다.
     - `def` 블록은 최상위 배치뿐 아니라 **`class` 블록의 입구(Mouth) 내부 삽입을 허용**하여 `__init__`, `__str__` 및 인스턴스 메서드를 시각적 블록으로 조립할 수 있습니다 (일반 루프·조건문 내부로의 `def` 삽입은 차단).
3. **가로 메서드 체이닝 결합 (Method Right Snapping)**:
   - 표현식·변수 블록 우측 요철에 `.strip()`, `.replace()`, `.append()`, `.items()` 등의 메서드 블록을 직결합합니다 (`KNOWN_BUILTIN_METHODS`에 속하지 않는 사용자 정의 객체 메서드 호출 `d.bark()` 등은 일반 `call` 블록으로 안전하게 분기).

### 3.2 단일 SVG 외곽선 렌더링 표준 (SVG Path Standard)
- 상단 홈(Top Notch), 수직 기둥(Spine), 다단 분기 암(Branch Bar), 내부 입구 요철, 하단 돌출 탭(Bottom Tab)을 단일 닫힌 `<path d="..." />`로 렌더링하여 테두리 겹침이나 탭 소실을 원천 방지합니다.

---

## 4. 런타임 실행 및 채점 엔진 (Execution & Grading Engine)

### 4.1 0ms 로컬 파이썬 AST 실행기 및 스텝 디버거 ([`src/lib/blockEvaluator.ts`](file:///d:/Projects/TypingCode_V2/src/lib/blockEvaluator.ts))
- **Zero External Dependencies**: 외부 패키지 없이 TypeScript로 직접 구현된 파이썬 코드 파서·인터프리터 및 `CanvasBlock` 트리 직접 평가기(`evaluateBlocksLocally` / `evaluatePythonLocally`).
- **지원 문법 범위**:
  - 기본 자료형(`int`, `float`, `str`, `bool`, `None`), 산술/비교/논리/포함(`in`, `not in`)/식별(`is None`, `is not None`) 및 복합 대입 연산자(`+=`, `-=`, `*=`, `/=`, `//=`).
  - 제어문(`if/elif/else`, `for`, `while`, `break`, `continue`, `pass`), 컬렉션(`list`, `tuple`, `dict`, `set`, 2차원 인덱싱, 슬라이싱 `s[::-1]`, 집합 연산 `|`, `&`, `-`, `^`, `dict(k=v)` 키워드 생성자).
  - 함수(`def`, 기본값·키워드 인자, `*args`, 다중 반환 언패킹, `lambda`, 클로저 스코프) 및 고차 정렬/집계(`sorted/min/max(..., key=..., reverse=...)`, `map`, `enumerate`, `zip`, `reversed`, `all`, `any`).
  - 예외 처리(`try / except [Type | (T1, T2) [as e]] / else / finally`, `raise ValueError(...)`, bare `raise`).
  - 객체지향(`class Name[(Parent)]:`, `__init__`, `self.attr` 읽기/쓰기/복합 대입, 바운드 메서드, `__str__`, 단일 상속 메서드 탐색, `type(inst)` → `<class '__main__.ClassName'>`, `isinstance()`).
  - 표현식 확장: 삼항 조건식(`a if cond else b`), 격리 스코프 리스트 컴프리헨션(`[expr for v in seq if cond]`), `ord()`, `chr()`, `.isalpha()`, `f-string` 포맷 지정자(`:.2f`, `:,`, `:,.2f`).
- **단계별 메모리 트레이스**: 실행 라인별 `scope` 스냅샷과 누적 `stdout`을 기록해 스텝 디버깅 및 메모리 박스 시각화를 즉시 구동합니다.

### 4.2 구조적 제출 판정기 (`checkSubmissionPass` in [`page.tsx`](file:///d:/Projects/TypingCode_V2/src/app/practice/%5Blanguage%5D/%5Blevel%5D/page.tsx))
- 다중 테스트 케이스(`testCases`)의 `stdout` 및 `expectedVariables` 정합성을 검증함과 동시에, `targetCode`가 요구하는 핵심 구조(`for`, `while`, `f-string`, `def`, `return`, `try`, `finally`, `raise`, `class`, `lambda`, 변수 참조, 복합 대입 등)를 우회한 리터럴 하드코딩 답안을 자동 반려하고 동치 해법(예: `score >= 60` ⇄ `score > 59`, 연쇄 비교 ⇄ `and` 결합, 임시 변수명 변경)은 모두 통과시킵니다.

### 4.3 멀티 언어 클라우드 샌드박스 ([`src/lib/runner.ts`](file:///d:/Projects/TypingCode_V2/src/lib/runner.ts)) & 웹 프리뷰 ([`WebPreview.tsx`](file:///d:/Projects/TypingCode_V2/src/components/WebPreview.tsx))
- **Wandbox REST API** (`8초 AbortController` 타임아웃): Python (`cpython-3.10.15`), C (`gcc-13.2.0-c`), C++ (`gcc-13.2.0`), JavaScript (`nodejs-20.12.2`), Java (`openjdk-jdk-22+36`), Go (`go-1.23.2`), Rust (`rust-1.82.0`), C# (`mono-6.12.0.199`), Swift (`swift-6.0.1`), SQL (`sqlite-3.46.1`).
- **클라이언트 샌드박스**: Web (`iframe srcdoc` + `postMessage` 콘솔 캡처), Linux CLI (내장 Bash 에뮬레이터), Visual Basic & VBA.

---

## 5. UI/UX 및 디자인 시스템 사양

1. **디자인 테마**: Obsidian Dark Theme (`#0a0e17`, `#0f172a`, `#1e293b`)
2. **의미론적 블록 컬러 팔레트**:
   - 출력/기본 함수: `#3b82f6` (Blue)
   - 함수 정의(`def`)/통과: `#10b981` (Emerald)
   - 클래스 정의(`class`): `#6366f1` / Indigo-Violet 계열 OOP 컨테이너
   - 분기/조건(`if`): `#f59e0b` (Amber)
   - 예외 처리(`try/except/finally`, `raise`): Rose/Coral 계열 경고·보호 테마
   - 반복/루프(`for`, `while`): `#8b5cf6` (Purple)
3. **타이포그래피 & 레이아웃**:
   - 코드/토큰: `Consolas`, `Monaco`, `monospace` (`§` 제로 변위 빈칸 캡슐 적용)
   - UI 텍스트: `Pretendard`, system-ui, sans-serif
   - 3분할 반응형 Bento 워크스페이스 (동적 압축 블록 툴박스 — 캔버스/타이핑 에디터 — 실시간 메모리 박스 & 터미널/프리뷰).
