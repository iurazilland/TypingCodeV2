# 🗺️ TypingCode V2 언어 지원 현황 및 로드맵 (Language Roadmap)

이 문서는 **TypingCode V2** 플랫폼에서 현재 가동 중인 13개 언어/트랙 런타임, 하이브리드 로컬 AST 실행 아키텍처, 그리고 언어별 커리큘럼 구축 현황 및 확장 로드맵을 정의합니다.

---

## 1. 지원 언어 런타임 현황 (13개 언어/트랙 완비)

TypingCode V2는 **자체 0ms 로컬 파이썬 AST 실행기**, **브라우저 네이티브 샌드박스(`iframe`/클라이언트 에뮬레이터)**, 그리고 **Wandbox 오픈 클라우드 컴파일러 API**를 결합하여 별도 백엔드 인프라 없이 **총 13개 언어/트랙의 실시간 실행 환경**을 제공합니다.

### 1.1 현재 가동 중인 13개 언어 매핑표 ([`src/lib/runner.ts`](file:///d:/Projects/TypingCode_V2/src/lib/runner.ts) & [`src/lib/blockEvaluator.ts`](file:///d:/Projects/TypingCode_V2/src/lib/blockEvaluator.ts))

| 번호 | 언어 / 트랙 (Language) | 컴파일러 / 런타임 엔진 | 실행 방식 | 지원 상태 |
| :---: | :--- | :--- | :--- | :---: |
| 1 | **Python (파이썬)** | 자체 로컬 AST + `cpython-3.10.15` | **0ms Local AST (`blockEvaluator.ts`)** + Wandbox | ✅ 실시간 0ms 실행 중 |
| 2 | **C Language (C언어)** | `gcc-13.2.0-c` | Wandbox Cloud Sandbox | ✅ 실시간 실행 중 |
| 3 | **C++ (모던 C++)** | `gcc-13.2.0` | Wandbox Cloud Sandbox | ✅ 실시간 실행 중 |
| 4 | **JavaScript (자바스크립트)** | `nodejs-20.12.2` | Wandbox Cloud Sandbox | ✅ 실시간 실행 중 |
| 5 | **Web (HTML & CSS & JS)** | Native Browser DOM | [`WebPreview.tsx`](file:///d:/Projects/TypingCode_V2/src/components/WebPreview.tsx) (`iframe srcdoc`) | ✅ 실시간 렌더링 중 |
| 6 | **Java (자바)** | `openjdk-jdk-22+36` | Wandbox Cloud Sandbox | ✅ 실시간 실행 중 |
| 7 | **Go (고언어)** | `go-1.23.2` | Wandbox Cloud Sandbox | ✅ 실시간 실행 중 |
| 8 | **Rust (러스트)** | `rust-1.82.0` | Wandbox Cloud Sandbox | ✅ 실시간 실행 중 |
| 9 | **C# (C샵 & 닷넷)** | `mono-6.12.0.199` | Wandbox Cloud Sandbox | ✅ 실시간 실행 중 |
| 10 | **Swift (스위프트)** | `swift-6.0.1` | Wandbox Cloud Sandbox | ✅ 실시간 실행 중 |
| 11 | **SQL (데이터베이스)** | `sqlite-3.46.1` | Wandbox Cloud Sandbox | ✅ 실시간 실행 중 |
| 12 | **Linux (리눅스 CLI)** | Bash 5.2 / CLI Emulator | Client-side Bash Runner | ✅ 실시간 실행 중 |
| 13 | **Visual Basic (VB & VBA)** | Client VB Evaluator / `mono-6.12` | Client-side VB Runner + Wandbox | ✅ 실시간 실행 중 |

---

## 2. 언어별 커리큘럼 체계 ([`src/lib/curriculum.ts`](file:///d:/Projects/TypingCode_V2/src/lib/curriculum.ts))

각 언어 트랙은 학습자의 성장 단계에 맞춰 **입문(기초) → 중급(응용) → 심화(실무)** 모듈로 설계되며, `/languages` 페이지([`src/app/languages/page.tsx`](file:///d:/Projects/TypingCode_V2/src/app/languages/page.tsx))에서 브라우저 `localStorage` 기반 실시간 클리어 레벨 진척도와 자동 동기화됩니다.

### 2.1 주요 트랙 구축 현황
1. **Python 트랙 (`python`)**:
   - **파이썬 베이직 (`py-basic`, 14섹션 · 87 Lv · 1,089문항 — ✅ 전면 구현 및 검증 완료)**:
     - **Part 1 핵심 개념 기초편 (`섹션 1~10`, `Lv 1~63`, 789문항)**: 필수 최소 함수만으로 입출력·변수·조건·반복·문자열·리스트·`None`/튜플/딕셔너리/집합·`def`·`try-except` 기초·`class` 기초 완주.
     - **Part 2 반복 심화 & 부가 함수·기능 확장편 (`섹션 11~14`, `Lv 64~87`, 300문항)**: 2회독 나선형 누적 복습과 함께 부가 메서드, 2차원 리스트, 삼항식·리스트 컴프리헨션, 실용 내장 함수(`abs`, `round`, `map`, `enumerate`, `zip`, `reversed`, `all`, `any`, `sorted`, `isinstance`, `ord`, `chr`), `*args`·`lambda`, `try-except-else-finally`·`raise`, `__str__`·단일 상속 마스터.
   - **파이썬 어드밴스 (`py-advanced`, 20 Lv — 역할 경계 재정렬 완료)**: `super()`·다중 상속·`@property`·심화 매직 메서드, `**kwargs`·데코레이터(`@`)·제너레이터(`yield`), `with` 컨텍스트 매니저, 딕셔너리/집합 컴프리헨션, 모듈·정규표현식.
   - **파이썬 빅데이터 (`py-bigdata`, 20 Lv)**: NumPy 다차원 배열 및 Pandas DataFrame 정제·집계.
   - **파이썬 인공지능 (`py-ai`, 15 Lv)**: 텐서 연산, 선형 회귀, 경사 하강법 및 신경망 기초.
2. **C Language 트랙 (`c`)**:
   - 기초 C언어 (25 Lv) / 포인터와 메모리 (20 Lv) / 자료구조 구현 (15 Lv).
3. **Web (HTML & CSS) 트랙 (`web`)**:
   - HTML 마크업 (20 Lv) / CSS 스타일링 (25 Lv).
4. **JavaScript 트랙 (`javascript`)**:
   - 모던 JS 기초 (25 Lv) / DOM & 비동기 (20 Lv) / 알고리즘 & 함수형 (15 Lv).
5. **Java / SQL / Go / Rust / C++ / C# / Swift / Linux CLI / Visual Basic 트랙**:
   - 각 언어 고유 패러다임(객체지향, 쿼리 조인, 고루틴, 소유권, STL, LINQ, iOS async/await, 쉘 파이프라인, VBA 프로시저 등)별 2~3단계 코스 모듈 메타데이터 구성 완료.

---

## 3. 실행 엔진 및 커리큘럼 고도화 로드맵 (Roadmap Status)

### 3.1 완료된 마일스톤 (Completed)
- [x] **13개 언어/트랙 런타임 연동**: Wandbox 클라우드 + Web `iframe` + Linux/VB 클라이언트 실행기 통합 완료.
- [x] **0ms 로컬 파이썬 AST 실행기 & 스텝 디버거 (`blockEvaluator.ts`)**: 외부 패키지 추가 없이 오프라인/온라인 즉시 실행, `try-except-else-finally`/`raise`, `class`/상속, 컴프리헨션, `lambda`, `*args`, 라인별 변수 메모리 추적 구현 완료.
- [x] **Python 시각적 블록 스튜디오 전 문법 확장**: Statement, C-shape (`for`, `while`, `def`, `class` 및 내부 `def` 메서드 스냅), E-shape (`if-elif-else`, `try-except-else-finally`), `raise`, `Method` 체이닝 및 `isinstance/ord/chr` 드롭다운 구현 완료.
- [x] **Python Basic 2-Part · 14섹션 · 87레벨 · 1,089문항 구축 및 6종 검증 게이트 통과**.
- [x] **`/languages` 실시간 학습 진도율 연동**: 하드코딩 진도율을 제거하고 `localStorage` 실 클리어 레벨 카운트 연동 완료.

### 3.2 차기 확장 계획 (Upcoming)
- [ ] **Python Advanced (`py-advanced`, 20 Lv) V2 커리큘럼 구현**: [`python_advanced_curriculum.md`](file:///d:/Projects/TypingCode_V2/docs/content/python_advanced_curriculum.md) 스펙에 맞춘 심화 OOP·데코레이터·제너레이터·모듈 레벨 구축.
- [ ] **Pyodide 선택적 런타임 연동 (`py-bigdata` / `py-ai`)**: 브라우저 내 NumPy, Pandas 데이터 분석 트랙 로컬 실행 지원.
- [ ] **C / JavaScript / Web 트랙 V2 2-Part 교차 학습 레벨 확장**: 중괄호(`{ }`) 및 태그 기반 시각적 블록 템플릿과 13단계/10단계 표준 문항 구조 확대 적용.
