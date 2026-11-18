# 🏗️ 시스템 설계 사양서 (System Design Specification)

이 문서는 **TypingCode V2**의 아키텍처, Supabase V2.4 비누적(Non-Accumulating) 데이터베이스 및 B2B·B2G 강사 LMS 스키마, 데이터 모델, 0ms 로컬 파이썬 AST 실행기, 캔버스 블록 엔진 및 멀티 언어 런타임 사양을 규정합니다.

---

## 1. 아키텍처 개요 (Architecture Overview)

TypingCode V2는 브라우저 내장 실행 엔진과 Supabase 클라우드 동기화를 결합한 Next.js 14 App Router 아키텍처로 구성됩니다.

```text
+---------------------------------------------------------------------------------------+
|                                   Next.js 14 App Router                               |
|  [Navbar / Footer] (연습실 풀스크린 진입 시 자동 숨김)                                |
|  ├─ / (메인 랜딩 페이지)                                                              |
|  ├─ /languages (단일 통합 탐색: 1행 언어별 선택 + 2행 학습 방향별 추천 6종)           |
|  ├─ /practice/[language] (14섹션 · 113레벨 등 챕터별 Syllabus 리스트 & 잠금 가드)     |
|  ├─ /practice/[language]/[level] (Dual Studio: Visual Block & § Typing / Quiz)        |
|  ├─ /code-typing (25종 예제 순수 타자 속도 CPM·정확도 측정 및 언어별 기록 저장)       |
|  ├─ /problems (26문항 다국어 온라인 저지 & 히든 테스트케이스 자동 채점)               |
|  ├─ /compiler (13개 언어 멀티 샌드박스 IDE & 클라우드 스니펫 저장/불러오기)           |
|  └─ /ranking · /profile · /login (실시간 리더보드 · 내 정보/출석/뱃지 · 필수 이메일 인증) |
+---------------------------------------------------------------------------------------+
                                           │
                      ┌────────────────────┴────────────────────┐
                      ▼                                         ▼
     [Client State & Visual Block Engine]              [Hybrid Execution Runtime]
     - React Context: AuthContext, LanguageContext     - 0ms Local Python AST & Debugger
     - Non-Accumulating Sync: progressSync.ts            (src/lib/blockEvaluator.ts)
       (localStorage ⇄ profiles.cleared_levels JSONB)  - Wandbox Multi-Language Cloud API
     - SVG Block Renderer & Magnetic Snapping            (/api/execute & src/lib/runner.ts)
       (Fixed-Name Var/Def/Class + Ref/Call Pairs)     - WebPreview (iframe srcdoc)
     - Anti-Hardcoding & Anti-Paste Practice Judge     - Client Bash & VB Evaluators
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

### 2.2 Supabase Auth & V2.4 비누적(Non-Accumulating) + B2B·B2G LMS 스키마 (`supabase/migrations/`)
- **인증, 이메일 필수 가입 및 라우트 보호**:
  - 서버 미들웨어([`src/lib/supabase/middleware.ts`](file:///d:/Projects/TypingCode_V2/src/lib/supabase/middleware.ts))에서 세션을 검증해 `/practice/*`, `/code-typing`, `/problems`, `/compiler`, `/profile` 비로그인 접근 시 `/login?next=...`로 연결합니다 (`/` · `/languages` · `/ranking` · `/login`은 공개).
  - 회원가입 시 **아이디(`username`)와 이메일(`email`) 모두 필수 기입 및 고유성 검증(`check_username_available`, `check_email_available` RPC)** 을 거치며, 동일 이메일/동일인 중복 프로필 Row 생성을 DB 고유 인덱스(`profiles_email_lower_uidx`, `profiles_username_lower_uidx`)와 트리거로 원천 차단합니다.
- **코어 5개 테이블 (비누적 In-Place 구조 · 전 테이블 RLS 활성화)**:
  1. `public.profiles`: 유저당 **단 1개의 Row 고정**. `email`(필수 고유값), `username`(로그인 ID), `display_name`, `role`(`student | instructor | org_admin | super_admin`), 아바타, 주력 언어, **현재 선택 커리큘럼(`active_curriculum_type`, `active_curriculum_id`)**, **현재 학습 코스·레벨(`current_track_id`, `current_level`)**, **코스별 완료 레벨 맵(`cleared_levels` JSONB — 예: `{"py-basic": [1,2,3]}`)**, **완주 코스 목록(`completed_tracks`)**, **O(1) 출석 스트릭(`current_streak`, `longest_streak`, `total_attendance_days`, `last_attended_date`)**, 리더보드 종합 점수(`activity_score`), 코드타자 최고 타수(`best_typing_cpm`).
     - *(구형 누적 테이블 `user_cleared_levels` 및 `user_attendance`는 `profiles` 단일 Row로 100% 이관 후 완전 폐지됨)*
  2. `public.user_problem_solves`: `(user_id, problem_id)` 실전 문제풀이(`/problems`) 통과 코드 및 언어별 해답 맵 Upsert.
  3. `public.user_speed_records`: `(user_id, snippet_id)` 코드타자(`/code-typing`) 예제·언어별 최고 CPM 및 정확도 Upsert (+ `speed_language_leaderboard` 뷰).
  4. `public.section_feedbacks`: `(user_id, track_id, section_number)` 섹션 완주 시 난이도·별점·의견 설문 Upsert.
  5. `public.user_saved_snippets`: 자유코딩(`/compiler`) 사용자 클라우드 저장 코드 스니펫(최대 20개).
- **B2B · B2G 강사 LMS 대시보드 3개 테이블**:
  6. `public.organizations`: 학교·학원·기업·공공기관 정보, 대표 관리자(`owner_id`), 계약 좌석 수(`max_seats`).
  7. `public.classrooms`: 담당 강사(`instructor_id`), 학급명, 초대 코드(`invite_code`), 지정 학습 트랙(`assigned_tracks`).
  8. `public.classroom_members`: `(classroom_id, student_id)` 학급별 담당 학생 배정 매핑 및 학번/출석번호 라벨(`student_label`).
     - 강사 전용 RPC `assign_student_to_classroom`, `get_classroom_students_progress`, 그리고 **지정 학생 진도 초기화·특정 레벨 재지정 RPC(`set_student_learning_level`)** 를 통해 담당 학생 지정과 전 과목 진도·출석 현황 조회 및 레벨 조정을 지원합니다.
- **[추후 진행 로드맵] 결제·구독 연동 아키텍처**:
  - `public.subscriptions` (B2C 개인 구독 `user_id` 및 B2B/B2G 기관 구독 `org_id` 단일 Row 상태 관리) 및 `public.payment_transactions` (PG 웹훅 영수증 이력) 상세 설계는 [`docs/DATABASE_GUIDE.md`](file:///d:/Projects/TypingCode_V2/docs/DATABASE_GUIDE.md#L168-L195)에 정의되어 있습니다.

### 2.3 연습 라운드 및 문항 모델 ([`src/lib/practiceTypes.ts`](file:///d:/Projects/TypingCode_V2/src/lib/practiceTypes.ts))
```typescript
export type ChallengeKind =
  | 'fill_blank'      // § 글자 수 1:1 캡슐 빈칸 채우기
  | 'fix_bug'         // 버그 1곳 정밀 수정
  | 'one_line'        // 빈 한 줄 코드 추가 작성
  | 'predict_output'  // 실행 결과 예측 4지선다 퀴즈 (input() 미사용)
  | 'standard';       // 블록 조립 기본형
```
- `PracticeRound`: `id`, `language`, `trackId`, `moduleId`, `roundNumber`, `title_ko/en`, `totalQuestions`(**일반 레벨 15문항 / 섹션 종합 복습 레벨 10문항**), `unlockedBlocks`, `questions: PracticeQuestion[]`.

### 2.4 캔버스 블록 기하학 및 고정 이름 블록 모델 ([`src/lib/blockGeometry.ts`](file:///d:/Projects/TypingCode_V2/src/lib/blockGeometry.ts) & [`CanvasBlockItem.tsx`](file:///d:/Projects/TypingCode_V2/src/components/practice/CanvasBlockItem.tsx))
- `BlockType`: Statement(`comment`, `print`, `variable`, `return`, `raise`, `break`, `continue`, `call` 등), C-Shape(`for_range`, `for_in`, `while`, `def`, `class`), E-Shape(`if`, `try`), 가로 체이닝(`method`), 내장 함수 드롭다운(`type`, `isinstance`, `ord`, `chr` 등).
- **고정 이름 선언 블록 + 참조/호출 블록 동시 생성 (`isVarRef`)**:
  - 변수·컬렉션(`variable`, `list`, `tuple`, `set`, `dict`) 및 함수·클래스(`def`, `class`) 생성 시 해당 이름으로 고정된 **선언/대입 블록**과 **참조/호출 블록(`isVarRef: true` / `type: 'call'`)** 이 동시에 생성되며, 예제 코드에 사용된 블록들은 문제 진입 시 `extractPresetToolboxItems()`로 도구함에 자동 사전 배치됩니다.

---

## 3. 캔버스 블록 & 자석 스냅 엔진 설계

1. **상하 스택 결합 (Stack Snapping & Chain Splicing)**: 하단 돌출 탭(Bottom Tab) 접근 시 발광 가이드라인 표시 및 체인 중간 끼워넣기 지원.
2. **ㄷ/E블록 내부 입구 결합 (Mouth Snapping)**:
   - `class` 블록은 최상위(Top-level) 전용이며, `def` 블록은 최상위뿐 아니라 `class` 입구(Mouth) 내부 스냅을 허용해 `__init__`, `__str__` 및 메서드를 조립할 수 있습니다.
3. **가로 메서드 체이닝 결합 (Method Right Snapping)**: 표현식·변수 블록 우측 요철에 `.strip()`, `.append()`, `.items()` 등의 내장 메서드 블록을 직결합하며, 시각적 좌표(`getBoundingClientRect`) 순 정렬로 `Tab` / `Shift+Tab` 키보드 포커스 이동을 완벽 지원합니다.
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
