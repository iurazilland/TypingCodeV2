# 🗺️ TypingCode V2 언어 지원 현황 및 로드맵 (Language Roadmap)

이 문서는 **TypingCode V2** 플랫폼에서 현재 지원 중인 언어 런타임, 실행 엔진 아키텍처, 그리고 향후 커리큘럼 확장 로드맵을 정의합니다.

---

## 1. 지원 언어 런타임 현황 (11개 언어 완비)

TypingCode V2는 **Wandbox 오픈 샌드박스 API** 및 **브라우저 네이티브 샌드박스**를 연동하여, 고비용의 자체 서버 인프라 구축 없이 **총 11개 프로그래밍 언어의 실시간 컴파일/실행 환경**을 기본 탑재하고 있습니다.

### 1.1 현재 가동 중인 11개 언어 매핑표 (`src/lib/runner.ts`)

| 번호 | 언어 (Language) | 컴파일러 / 런타임 버전 | 실행 방식 | 지원 상태 |
| :--- | :--- | :--- | :--- | :--- |
| 1 | **Python (파이썬)** | `cpython-3.10.15` | Wandbox Cloud Sandbox | ✅ 실시간 실행 중 |
| 2 | **C Language (C언어)** | `gcc-13.2.0-c` | Wandbox Cloud Sandbox | ✅ 실시간 실행 중 |
| 3 | **C++ (모던 C++)** | `gcc-13.2.0` | Wandbox Cloud Sandbox | ✅ 실시간 실행 중 |
| 4 | **JavaScript (자바스크립트)** | `nodejs-20.12.2` | Wandbox Cloud Sandbox | ✅ 실시간 실행 중 |
| 5 | **Web (HTML & CSS)** | Native Browser DOM | `WebPreview.tsx` (iframe) | ✅ 실시간 렌더링 중 |
| 6 | **Java (자바)** | `openjdk-jdk-22+36` | Wandbox Cloud Sandbox | ✅ 실시간 실행 중 |
| 7 | **Go (고언어)** | `go-1.23.2` | Wandbox Cloud Sandbox | ✅ 실시간 실행 중 |
| 8 | **Rust (러스트)** | `rust-1.82.0` | Wandbox Cloud Sandbox | ✅ 실시간 실행 중 |
| 9 | **C# (C샵 & 닷넷)** | `mono-6.12.0.199` | Wandbox Cloud Sandbox | ✅ 실시간 실행 중 |
| 10 | **Swift (스위프트)** | `swift-6.0.1` | Wandbox Cloud Sandbox | ✅ 실시간 실행 중 |
| 11 | **SQL (데이터베이스)** | `sqlite-3.46.1` | Wandbox Cloud Sandbox | ✅ 실시간 실행 중 |

---

## 2. 언어별 커리큘럼 체계 (`src/lib/curriculum.ts`)

각 언어 트랙은 학습자의 성장에 맞춰 **입문(기초) -> 중급(응용) -> 심화(고급/실무)** 3단계 모듈로 분할 설계되어 있습니다.

### 2.1 주요 트랙 요약
1. **Python 트랙**:
   - 베이직 (기초 문법 & 제어문, 25 Lv)
   - 어드밴스 (OOP 객체지향 & 함수형, 20 Lv)
   - 빅데이터 (NumPy, Pandas 데이터 분석, 20 Lv)
   - 인공지능 (AI & 머신러닝 기초, 15 Lv)
2. **C Language 트랙**:
   - 기초 C언어 (표준 입출력, 자료형, 분기/반복, 25 Lv)
   - 포인터와 메모리 (포인터 연산, 동적 할당 malloc, 구조체, 20 Lv)
   - 자료구조 구현 (연결 리스트, 스택, 큐, 15 Lv)
3. **Web (HTML & CSS) 트랙**:
   - HTML 마크업 (시맨틱 태그, 폼, 미디어, 20 Lv)
   - CSS 스타일링 (Flexbox, Grid, 반응형 레이아웃, 25 Lv)
4. **JavaScript 트랙**:
   - 모던 JS 기초 (ES6+ 문법, 제어 흐름, 25 Lv)
   - DOM & 비동기 (이벤트, Fetch, Promise, async/await, 20 Lv)
   - 알고리즘 & 함수형 (고차 함수, 자료구조, 15 Lv)
5. **Java 트랙**:
   - 자바 기초 (기본 문법, 클래스와 인스턴스, 25 Lv)
   - 객체지향 심화 (상속, 다형성, 인터페이스, 예외처리, 20 Lv)
6. **SQL & Database 트랙**:
   - SQL 기초 쿼리 (SELECT, WHERE, ORDER BY, 20 Lv)
   - 조인과 데이터 조작 (JOIN, GROUP BY, INSERT/UPDATE, 20 Lv)
7. **Go / Rust / C++ / C# / Swift 트랙**:
   - 각 언어 고유의 특성(Go 루틴, Rust 소유권, C++ STL, C# LINQ, Swift 옵셔널 등)을 체득할 수 있는 모듈 구성 완료.

---

## 3. 실행 엔진 고도화 계획 (Execution Engine Roadmap)

### 3.1 단기 계획 (Phase 1)
- [x] **11개 언어 Wandbox API 연동**: 전 언어 실시간 컴파일 및 터미널 출력 지원 완료.
- [x] **Web iframe 실시간 미리보기**: HTML/CSS/JS 즉각 렌더링 및 콘솔 캡처 완료.
- [ ] **표준 입력(`stdin`) 대화형 인터페이스 고도화**: 실행 중 사용자 키 입력을 요구하는 코드 지원 강화.

### 3.2 중기 계획 (Phase 2 - 하이브리드 로컬 런타임)
- [ ] **Pyodide 기반 클라이언트 파이썬 런타임 옵션**:
  - 오프라인 환경에서도 파이썬 실행 가능.
  - 브라우저 내에서 NumPy, Pandas, Matplotlib 직접 구동.
- [ ] **WebContainer 기반 Node.js 로컬 실행**:
  - JavaScript/TypeScript를 브라우저 내 가상 환경에서 0ms 지연시간으로 구동.

### 3.3 장기 계획 (Phase 3 - 블록 코딩 지원 언어 확장)
- [x] Python 시각적 블록 코딩 (C-shape, E-shape, Statement, Method 완성).
- [ ] JavaScript 및 C 언어용 블록 템플릿 추가 (중괄호 `{ }` 기반 블록 외곽선 지원).
