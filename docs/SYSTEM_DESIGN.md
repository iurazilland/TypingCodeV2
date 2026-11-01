# 🏗️ 시스템 설계 사양서 (System Design Specification)

이 문서는 **TypingCode V2**의 아키텍처, Supabase V2 데이터베이스 스키마, 데이터 모델, 0ms 로컬 파이썬 AST 실행기, 캔버스 블록 엔진 및 멀티 언어 런타임 사양을 규정합니다.

---

## 1. 아키텍처 개요 (Architecture Overview)

TypingCode V2는 브라우저 내장 실행 엔진과 Supabase 클라우드 동기화를 결합한 Next.js 14 App Router 아키텍처로 구성됩니다.

```text
+---------------------------------------------------------------------------------------+
|                                   Next.js 14 App Router                               |
|  [Navbar / Footer] (연습실 풀스크린 진입 시 자동 숨김)                                |
|  ├─ / (메인 랜딩 페이지)                                                              |
|  ├─ /languages (단일 통합 탐색: 1행 언어별 선택 + 2행 학습 방향별 추천 6종)           |
|  ├─ /practice/[language] (14섹션 등 챕터별 Syllabus 리스트 & 잠금 커리큘럼 가드)      |
|  ├─ /practice/[language]/[level] (Dual Studio: Visual Block & § Typing / Quiz)        |
|  ├─ /code-typing (25종 예제 순수 타자 속도 CPM·정확도 측정 및 언어별 기록 저장)       |
|  ├─ /problems (26문항 다국어 온라인 저지 & 히든 테스트케이스 자동 채점)               |
|  ├─ /compiler (13개 언어 멀티 샌드박스 IDE & 클라우드 스니펫 저장/불러오기)           |
|  └─ /ranking · /profile · /login (실시간 리더보드 · 내 정보/출석/뱃지 · 인증)         |
+---------------------------------------------------------------------------------------+
                                           │
                      ┌────────────────────┴────────────────────┐
                      ▼                                         ▼
     [Client State & Visual Block Engine]              [Hybrid Execution Runtime]
     - React Context: AuthContext, LanguageContext     - 0ms Local Python AST & Debugger
     - Hybrid Sync: progressSync (localStorage ⇄ DB)     (src/lib/blockEvaluator.ts)
     - SVG Block Renderer & Magnetic Snapping          - Wandbox Multi-Language Cloud API
       (Statement, C-Shape, E-Shape, Method)             (/api/execute & src/lib/runner.ts)
     - Anti-Hardcoding & Anti-Paste Practice Judge     - WebPreview (iframe srcdoc)
                                                       - Client Bash & VB Evaluators
```

---

## 2. 데이터 모델 및 DB 스키마 (Data Models & Schema)

### 2.1 지원 언어 모델 ([`src/lib/types.ts`](file:///d:/Projects/TypingCode_V2/src/lib/types.ts))
```typescript
export type SupportedLanguage =
  | 'python' | 'c' | 'web' | 'javascript' | 'java'
  | 'sql' | 'go' | 'rust' | 'cpp' | 'csharp' | 'swift'
  | 'linux' | 'vb';
```

### 2.2 Supabase Auth & V2 7-Table Schema (`supabase/migrations/`)
- **인증 및 라우트 보호**:
  - 서버 미들웨어([`src/lib/supabase/middleware.ts`](file:///d:/Projects/TypingCode_V2/src/lib/supabase/middleware.ts))에서 세션을 검증해 `/practice/*`, `/code-typing`, `/problems`, `/compiler`, `/profile` 비로그인 접근 시 `/login?next=...`로 연결합니다 (`/` · `/languages` · `/ranking` · `/login`은 공개).
- **V2 핵심 7개 테이블 (전 테이블 RLS 활성화)**:
  1. `public.profiles`: 닉네임, 로그인 ID(`username`), 아바타, 주력 언어, 출석 스트릭, 리더보드 종합 점수(`activity_score`), 최고 타수(`best_typing_cpm`) — 집계 컬럼은 DB 트리거 전용 갱신.
  2. `public.user_cleared_levels`: `(user_id, track_id, level_number)` 코스별 완료 레벨 기록.
  3. `public.user_problem_solves`: `(user_id, problem_id)` 실전 문제풀이(`/problems`) 통과 기록 및 제출 언어.
  4. `public.user_attendance`: `(user_id, attended_date)` KST 기준 일일 출석 기록.
  5. `public.user_speed_records`: `(user_id, snippet_id)` 코드타자(`/code-typing`) 예제·언어별 최고 CPM 및 정확도.
  6. `public.section_feedbacks`: `(user_id, track_id, section_number)` 섹션 완주 시 난이도·별점·의견 설문.
  7. `public.user_saved_snippets`: 자유코딩(`/compiler`) 사용자 클라우드 저장 코드 스니펫(최대 20개).

### 2.3 연습 라운드 및 문항 모델 ([`src/lib/practiceTypes.ts`](file:///d:/Projects/TypingCode_V2/src/lib/practiceTypes.ts))
```typescript
export type ChallengeKind =
  | 'fill_blank'      // § 글자 수 1:1 캡슐 빈칸 채우기
  | 'fix_bug'         // 버그 1곳 정밀 수정
  | 'one_line'        // 빈 한 줄 코드 추가 작성
  | 'predict_output'  // 실행 결과 예측 4지선다 퀴즈
  | 'standard';       // 블록 조립 기본형
```
- `PracticeRound`: `id`, `language`, `trackId`, `moduleId`, `roundNumber`, `title_ko/en`, `totalQuestions`(일반 13 / 종합 10), `unlockedBlocks`, `questions: PracticeQuestion[]`.

### 2.4 캔버스 블록 기하학 모델 ([`src/lib/blockGeometry.ts`](file:///d:/Projects/TypingCode_V2/src/lib/blockGeometry.ts) & [`CanvasBlockItem.tsx`](file:///d:/Projects/TypingCode_V2/src/components/practice/CanvasBlockItem.tsx))
- `BlockType`: Statement(`print`, `variable`, `return`, `raise`, `break`, `continue`, `call` 등), C-Shape(`for_range`, `for_in`, `while`, `def`, `class`), E-Shape(`if`, `try`), 가로 체이닝(`method`), 내장 함수 드롭다운(`type`, `isinstance`, `ord`, `chr` 등).

---

## 3. 캔버스 블록 & 자석 스냅 엔진 설계

1. **상하 스택 결합 (Stack Snapping & Chain Splicing)**: 하단 돌출 탭(Bottom Tab) 접근 시 발광 가이드라인 표시 및 체인 중간 끼워넣기 지원.
2. **ㄷ/E블록 내부 입구 결합 (Mouth Snapping)**:
   - `class` 블록은 최상위(Top-level) 전용이며, `def` 블록은 최상위뿐 아니라 `class` 입구(Mouth) 내부 스냅을 허용해 `__init__`, `__str__` 및 메서드를 조립할 수 있습니다.
3. **가로 메서드 체이닝 결합 (Method Right Snapping)**: 표현식·변수 블록 우측 요철에 `.strip()`, `.append()`, `.items()` 등의 내장 메서드 블록을 직결합합니다.
4. **단일 SVG `<path>` 외곽선 렌더링**: 상단 홈, 수직 기둥, 다단 분기 암, 하단 탭을 단일 닫힌 벡터 경로로 그려 테두리 겹침을 방지합니다.

---

## 4. 런타임 실행 및 채점 엔진

1. **0ms 로컬 파이썬 AST 실행기 및 스텝 디버거 ([`blockEvaluator.ts`](file:///d:/Projects/TypingCode_V2/src/lib/blockEvaluator.ts))**:
   - 외부 패키지 없이 TypeScript로 구현된 파이썬 인터프리터 및 블록 트리 평가기. 실행 스텝별 변수 `scope` 스냅샷과 `stdout`을 생성하여 한 줄씩 디버깅 및 메모리 시각화를 즉시 구동합니다.
2. **구조적 제출 판정기 (`checkSubmissionPass`)**:
   - 다중 `testCases`의 출력·변수 상태와 함께 핵심 요구 문법 사용 여부를 검사해 하드코딩 답안을 반려하고 동치 해법은 허용합니다.
3. **멀티 언어 클라우드 샌드박스 ([`runner.ts`](file:///d:/Projects/TypingCode_V2/src/lib/runner.ts))**:
   - Wandbox REST API (`8초 AbortController` 타임아웃)로 C, C++, JS(Node 20), Java(OpenJDK 22), Python, Go, Rust, C#, Swift, SQL을 실행하며, Web(`iframe srcdoc`), Linux CLI, VB 클라이언트 런타임을 함께 지원합니다.

---

## 5. UI 테마 이원화 원칙

1. **상위 탐색·기능 페이지 (`/`, `/languages`, `/practice/[language]`, `/code-typing`, `/problems`, `/compiler`, `/ranking`, `/profile`, `/login`)**: 눈의 피로를 줄이는 라이트 에디토리얼 테마 (`#e2eff6` 배경 + 화이트 카드).
2. **풀스크린 연습 스튜디오 (`/practice/[language]/[level]`)**: 몰입형 다크 스튜디오 테마 (`#0b1329`, `#0f172a`) + 의미론적 블록 컬러 팔레트 (`BLOCK_THEMES`) + VS Code Dark+ 구문 색상(`TypingStage`).
