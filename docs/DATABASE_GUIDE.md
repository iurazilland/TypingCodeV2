# 🗄️ TypingCode V2 데이터베이스(Supabase) 가이드 & LMS·결제 확장 사양서

이 문서는 **TypingCode V2**가 Supabase 데이터베이스와 스토리지에 **무엇을, 왜, 어떻게 저장하는지**, 왜 **비누적(Non-Accumulating In-Place) 구조**로 재정의되었는지, 그리고 **B2B·B2G 강사 LMS 대시보드** 및 **향후 결제·구독 시스템**이 어떻게 연동되는지 정리한 공식 문서입니다.

---

## 1. 핵심 설계 철학 (Non-Accumulating Single-Row Architecture)

> **학습 문제집(파이썬 113레벨 · 1,625문항 등), 실전 문제(26문항), 코드타자 예제(25종)는 앱 코드에 내장되어 0초 만에 열리고, Supabase DB에는 유저의 활동량이 늘어나도 Row 수가 폭증하지 않는 비누적(In-Place) 구조로 저장합니다.**

### 왜 기존 `user_cleared_levels` · `user_attendance` 테이블을 폐지했는가?
1. **기존 누적(Event-Row) 방식의 한계**:
   - `user_cleared_levels`: 레벨 1개를 클리어할 때마다 1개 Row씩 `INSERT`되어 파이썬 기초(113레벨)만 완주해도 유저당 113개 Row가 쌓이고, 전 과목 학습 시 유저 1명당 수백~1,000개 Row로 폭증했습니다.
   - `user_attendance`: 매일 출석할 때마다 1개 Row씩 영구 누적되고, 매 출석 시 과거 전체 날짜 Row를 Window 함수로 풀스캔하여 연속 출석일을 재계산했습니다.
   - `profiles` 중복 생성: 이메일 고유 제약이 없고 중복 아이디 충돌 시 `username = NULL`로 우회 생성하던 트리거로 인해 동일인이 2개의 `profiles` Row를 가지는 현상이 발생했습니다.
2. **V2.4 비누적(In-Place) 재정의**:
   - **일일 출석 (`record_daily_attendance()` RPC)**: 별도 테이블 없이 `profiles`의 `last_attended_date`, `current_streak`, `longest_streak`, `total_attendance_days` 4개 컬럼만 **O(1) 날짜 비교 점화식**으로 단일 Row에서 즉시 갱신합니다 (**출석 Row 누적 0개**).
   - **완료 레벨 (`profiles.cleared_levels` JSONB)**: 별도 테이블 없이 `profiles` 내부의 `cleared_levels` JSONB 컬럼(`{"py-basic": [1, 2, 3], "c-basic": [1]}`) 하나에 트랙별 완료 레벨 번호 배열을 오름차순으로 병합 갱신합니다 (**레벨 클리어 Row 누적 0개**).
   - **회원가입 시 이메일 필수화 & 1인 1프로필 강제**: `profiles.email` 컬럼(소문자 정규화 + Unique Index) 및 가입 단계 이메일 필수 검증(`check_email_available` RPC)을 적용해 중복 계정·유령 프로필 생성을 원천 차단합니다.

---

## 2. 한눈에 보는 전체 DB 테이블 구조 (코어 5종 + B2B·B2G LMS 3종)

```text
[Supabase Authentication -> auth.users]
  이메일(필수) / 암호화된 비밀번호 / GitHub·Google OAuth 연동
        │
        ▼ (1:1 고유 매핑, 이메일·아이디 중복 원천 차단)
┌───────────────────────────────────────────────────────────────────────────┐
│ 1. profiles (유저당 딱 1 Row 고정 — 명찰 · 이메일 · 출석 스트릭 ·         │
│              코스별 완료 레벨 JSONB(cleared_levels) · 리더보드 종합 점수) │
└───────────────────────────────────────────────────────────────────────────┘
        ├──▶ 2. user_problem_solves (문제풀이 /problems 문제별 통과 코드 Upsert)
        ├──▶ 3. user_speed_records  (코드타자 /code-typing 예제·언어별 최고 타수 Upsert)
        ├──▶ 4. section_feedbacks   (섹션 완주 시 별점·난이도·건의 설문 Upsert)
        ├──▶ 5. user_saved_snippets (자유코딩 /compiler 클라우드 코드 보관함, 최대 20개)
        │
        └──▶ [B2B · B2G 강사 LMS 대시보드 도메인]
              ├─ 6. organizations     (학교 · 학원 · 기업 · 공공기관 정보 및 계약 좌석 수)
              ├─ 7. classrooms        (담당 강사별 학급/분반, 초대 코드, 지정 학습 트랙)
              └─ 8. classroom_members (학급 ⇄ 담당 학생 배정 매핑 및 학번/출석번호 라벨)

[Supabase Storage -> avatars 버킷]
  사용자가 직접 업로드한 프로필 사진 (브라우저에서 256×256 WebP로 자동 압축 후 저장)
```

---

## 3. 코어 테이블 상세 명세

### ① `public.profiles` — 내 명찰 · 출석 스트릭 · 코스별 완료 진도 · 리더보드 집계판
유저 1명당 **단 1개의 Row만 존재**하는 핵심 테이블입니다.  
*(점수·출석일·완료 레벨 컬럼은 `SECURITY DEFINER` RPC 및 DB 트리거만 갱신할 수 있도록 잠겨 있어 브라우저 개발자 도구로 조작할 수 없습니다.)*

| 컬럼 이름 | 타입 | 설명 | 예시 데이터 |
| :--- | :--- | :--- | :--- |
| `id` | `uuid (PK)` | 회원 고유 번호 (`auth.users.id`) | `a1b2-c3d4-...` |
| `email` | `text (Unique)` | **가입 시 필수 입력 이메일** (소문자 정규화 고유값) | `student@school.kr` |
| `username` | `text (Unique)` | 로그인 ID (영문 소문자·숫자·`_` 4~20자, 설정 후 변경 불가) | `coder_kim` |
| `display_name` | `text` | 화면·리더보드·LMS에 표시되는 **닉네임/실명** | `김코딩` |
| `role` | `text` | 권한 역할 (`student` \| `instructor` \| `org_admin` \| `super_admin`) | `student` |
| `avatar_preset` | `text` | 내장 기본 프로필 아이콘 키 (12종 중 택1) | `fox` |
| `avatar_url` | `text` | 직접 업로드한 압축 아바타(또는 소셜 프로필) 이미지 URL | `https://.../avatar.webp` |
| `primary_language` | `text` | 주력 학습 언어 (최다 클리어 트랙 기반 자동 보정) | `Python` |
| `active_curriculum_type` | `text` | `/languages`에서 마지막 선택한 뷰 (`'roadmap'` \| `'language'`) | `roadmap` |
| `active_curriculum_id` | `text` | 선택한 추천 커리큘럼 ID(신규 가입 기본값 `'starter'` = 코딩 첫걸음) 또는 언어 ID | `starter` |
| `current_track_id` | `text` | 현재 진행 중인 학습 코스 ID | `py-basic` |
| `current_level` | `integer` | 현재 진행 중인 학습 레벨 번호 | `16` |
| `cleared_levels` | `jsonb` | **트랙별 완료 레벨 번호 배열 맵 (비누적 In-Place 저장)** | `{"py-basic": [1, 2, 3, 10]}` |
| `completed_tracks` | `text[]` | 마지막 레벨까지 100% 완주한 코스 ID 목록 (트리거 자동 계산) | `{"py-basic"}` |
| `cleared_levels_count` | `integer` | `cleared_levels` JSONB 내 전체 완료 레벨 수 합계 (트리거 자동 계산) | `14` |
| `progress_reset_at` | `timestamptz` | 강사/관리자가 학생 진도를 초기화·재지정한 시각 (로컬 캐시 강제 동기화용) | `2026-11-18...` |
| `solved_problems_count` | `integer` | 해결한 총 코딩 문제 수 (트리거 자동 집계) | `5` |
| `current_streak` / `longest_streak` | `integer` | 현재 연속 출석일수 / 최장 연속 출석일수 | `7` / `12` |
| `total_attendance_days` | `integer` | 누적 출석일수 | `18` |
| `last_attended_date` | `date` | 마지막 출석 날짜 (한국 시간 `Asia/Seoul` 기준) | `2026-11-18` |
| `activity_score` | `integer` | **종합 학습 리더보드 점수** (`레벨×100 + 문제×150 + 누적출석×30 + 최장연속×50`) | `3690` |
| `best_typing_cpm` / `best_typing_accuracy` | `integer` / `numeric` | **코드타자** 최고 타수(CPM) / 정확도(%) | `485` / `99.20` |
| `best_typing_language` | `text` | 코드타자 최고 타수를 기록한 언어 | `python` |

#### 비누적 In-Place 핵심 RPC 함수 5종
- **`public.record_daily_attendance()`**:
  - KST 오늘 날짜(`v_today`)와 `profiles.last_attended_date`만 비교하여:
    - 이미 오늘 출석했으면 변경 없음,
    - 어제(`v_today - 1`) 출석했으면 `current_streak + 1`,
    - 하루 이상 건너뛰었으면 `current_streak = 1`로 단일 Row만 O(1) 갱신합니다.
- **`public.record_level_cleared(p_track_id, p_level_number)`**:
  - `profiles.cleared_levels` JSONB 내 해당 트랙 배열에 완료한 레벨 번호를 중복 없이 오름차순으로 병합하고, `current_track_id` 및 `current_level`(다음 레벨 번호)과 오늘 출석까지 한 번의 `UPDATE`로 처리합니다.
- **`public.sync_cleared_levels(p_client_levels, p_ack_reset_at)`**:
  - 로그인 시 브라우저 `localStorage`의 완료 레벨 맵과 DB의 `profiles.cleared_levels`를 양방향 무손실 병합합니다. 단, 강사나 관리자가 `set_student_learning_level`로 진도를 재지정(`progress_reset_at` 갱신)한 경우에는 학생 브라우저의 구형 로컬 캐시를 무시하고 DB 상태를 우선 적용합니다.
- **`public.update_learning_context(p_curriculum_type, p_curriculum_id, p_track_id, p_level)`**:
  - `/languages`에서 선택한 커리큘럼 탭이나 현재 학습 중인 코스·레벨 위치를 즉시 저장합니다.
- **`public.check_email_available(p_email)` & `public.check_username_available(p_username)`**:
  - 회원가입 시 필수 이메일 및 로그인 ID의 형식 유효성과 중복 여부를 대소문자 구분 없이 즉시 검증합니다.

---

### ② `public.user_problem_solves` — 실전 문제풀이(`/problems`) 완료 도장판 및 제출 코드
- 복합 PK `(user_id, problem_id)` 기준으로 문제당 최대 1개 Row만 유지(Upsert)하며, 마지막 통과 코드(`submitted_code`), 실행 시간(`execution_ms`), 언어별 통과 코드 맵(`solutions_by_lang` JSONB)을 저장합니다.

### ③ `public.user_speed_records` — 코드타자(`/code-typing`) 예제·언어별 최고 기록
- 복합 PK `(user_id, snippet_id)` 기준으로 본인의 최고 타수(`best_cpm`)와 정확도(`best_accuracy`)를 갱신할 때만 Upsert되며, `public.speed_language_leaderboard` 뷰(`security_invoker = true`)를 통해 언어별 타자 순위를 제공합니다.

### ④ `public.section_feedbacks` — 섹션 완료 마이크로 설문
- 복합 PK `(user_id, track_id, section_number)` 기준으로 각 섹션 마지막 종합 레벨 완주 시 별점(`1~5`), 체감 난이도(`easy / just_right / hard`), 태그(`tags`), 건의사항(`comment`)을 저장합니다.
- 관리자 설문 대시보드(`/admin/feedbacks`)에서 `public.get_admin_section_feedbacks()` RPC로 전체 응답을 열람할 수 있습니다.

### ⑤ `public.user_saved_snippets` — 자유코딩(`/compiler`) 클라우드 스니펫 보관함
- 자유코딩 IDE에서 작성한 코드를 제목·언어·표준입력(`stdin`)과 함께 클라우드에 저장·수정·삭제합니다.

---

## 4. B2B · B2G 강사 LMS 대시보드 DB 구조

학교(B2G), 학원·기업(B2B) 환경에서 **강사가 담당 학급(반)을 개설하고 담당 학생들을 지정하여 실시간 학습 진도·출석·문제풀이 현황을 모니터링**하는 구조입니다.

### ① `public.organizations` — 학교 / 학원 / 기업 / 공공기관
| 컬럼 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| `id` | `uuid (PK)` | 기관 고유 ID |
| `name` | `text` | 기관명 (예: `'서울코딩고등학교'`, `'OO교육청 AI캠프'`) |
| `org_type` | `text` | `'school'` \| `'academy'` \| `'company'` \| `'government'` |
| `owner_id` | `uuid (FK)` | 기관 대표 관리자 (`profiles.id`) |
| `max_seats` | `integer` | 계약된 최대 학생 라이선스 좌석 수 (기본 30) |
| `is_active` | `boolean` | 기관 활성 상태 |

### ② `public.classrooms` — 담당 강사별 학급 / 분반
| 컬럼 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| `id` | `uuid (PK)` | 학급 고유 ID |
| `org_id` | `uuid (FK)` | 소속 기관 ID (`organizations.id`, 개인 강사는 `null` 가능) |
| `instructor_id` | `uuid (FK)` | **담당 강사 프로필 ID (`profiles.id`)** |
| `name` | `text` | 학급/분반 이름 (예: `'1학년 3반 파이썬 기초'`) |
| `invite_code` | `text (Unique)` | 학생 입장용 6~10자리 고유 초대 코드 |
| `assigned_tracks` | `text[]` | 해당 학급에 배정된 필수 학습 트랙 목록 (기본 `['py-basic']`) |
| `is_active` | `boolean` | 학급 운영 활성 여부 |

### ③ `public.classroom_members` — 학급 소속 담당 학생 배정 매핑
| 컬럼 이름 | 타입 | 설명 |
| :--- | :--- | :--- |
| `classroom_id` | `uuid (PK, FK)` | 학급 ID (`classrooms.id`) |
| `student_id` | `uuid (PK, FK)` | 배정된 담당 학생 ID (`profiles.id`) |
| `student_label` | `text` | 강사 관리용 학번/출석번호/이름 메모 (예: `'10305 김민수'`) |
| `joined_at` | `timestamptz` | 학급 배정 일시 |

### ④ 강사 LMS 전용 RPC 함수
1. **`public.assign_student_to_classroom(p_classroom_id, p_identifier, p_student_label)`**:
   - 담당 강사가 학생의 **로그인 ID(`username`) 또는 필수 가입 이메일(`email`)** 을 입력하여 자신의 반(`classroom_members`)에 즉시 배정합니다.
2. **`public.get_classroom_students_progress(p_classroom_id)`**:
   - 담당 강사가 반 학생 전체의 `active_curriculum_type/id`, `current_track_id`, `current_level`(현재 학습 중인 레벨), `cleared_levels`(코스별 클리어 레벨 JSONB), `completed_tracks`(완주 코스 배열), `cleared_levels_count`, `solved_problems_count`, `current_streak`, `total_attendance_days`, `last_attended_date`, `best_typing_cpm`, `activity_score`를 **단 1회의 쿼리로 즉시 조회**합니다.
   - `profiles.cleared_levels`에 진도가 이미 JSONB로 들어 있으므로 수천 줄의 진도 테이블 Join 없이 30~100명의 학생 현황이 0초 만에 렌더링됩니다.
3. **`public.set_student_learning_level(p_student_id, p_track_id, p_target_level)`**:
   - **관리자(`super_admin`) 또는 담당 강사(`instructor_id`)가 지정 학생의 학습 진도를 초기화하거나 특정 레벨부터 다시 학습하도록 지정**하는 RPC입니다.
   - `p_target_level = 1` 전달 시: 해당 코스의 클리어 기록을 모두 비우고 `1레벨`부터 처음부터 다시 학습하도록 초기화합니다.
   - `p_target_level = K (K > 1)` 전달 시: `1 ~ (K-1)레벨`까지를 클리어 상태로 재설정하고 `current_level = K`로 지정하여, 학생이 즉시 **`K레벨`부터 다시 학습**하도록 맞춥니다 (`progress_reset_at` 타임스탬프가 갱신되어 학생 브라우저의 기존 `localStorage` 진도도 즉시 덮어써집니다).

---

## 5. [추후 진행 로드맵] 결제 및 구독(Subscription) 연동 설계 사양

> **상태**: 설계 확정 · **추후 구현 예정** (현재 코어 및 LMS DB와 100% 호환되도록 설계됨)

추후 유료 구독 모델을 도입할 때 **개인 구독(B2C)** 과 **기관/학교 단체 라이선스(B2B/B2G)** 를 동시에 수용하기 위해 다음 2개 테이블과 단일 권한 판별 함수를 추가합니다.

### ① `public.subscriptions` (구독 주체당 1 Row 고정 · 비누적)
- `id uuid primary key default gen_random_uuid()`
- `user_id uuid unique references public.profiles(id) on delete cascade` (B2C 개인 구독자)
- `org_id uuid unique references public.organizations(id) on delete cascade` (B2B/B2G 기관 라이선스 구독)
- `plan_id text not null check (plan_id in ('free', 'pro_monthly', 'pro_yearly', 'org_seat_plan'))`
- `status text not null check (status in ('active', 'trialing', 'past_due', 'canceled', 'expired'))`
- `current_period_start timestamptz not null`
- `current_period_end timestamptz not null` (만료 시각 — 정기결제 갱신 시 이 날짜만 In-Place `UPDATE`)
- `cancel_at_period_end boolean not null default false`
- `provider text` (`'tosspayments'` \| `'portone'` \| `'stripe'` \| `'b2g_contract'`)
- `billing_key text` / `provider_subscription_id text`

### ② `public.payment_transactions` (결제/환불 영수증 증빙 이력)
- 실제 PG사 결제/웹훅 이벤트 발생 시에만 주문번호(`order_id`), 결제 금액(`amount`), 영수증 URL(`receipt_url`), 결제 시각(`paid_at`)을 기록합니다.

### ③ 통합 구독 접근 권한 판별 로직 (`public.has_active_subscription(p_user_id)`)
유저가 유료 학습 구간에 진입할 때 다음 2가지 중 하나라도 충족하면 즉시 접근을 허용합니다:
1. **B2C 개인 구독 유효**: 본인(`subscriptions.user_id = p_user_id`)의 구독이 `status in ('active', 'trialing')` 이고 `current_period_end > now()`인 경우.
2. **B2B/B2G 학급 배정 학생 유효**: 본인이 소속된 활성 학급(`classroom_members` ➔ `classrooms` ➔ `organizations`)의 기관 구독(`subscriptions.org_id = organizations.id`)이 `current_period_end > now()`인 경우.

---

## 6. 마이그레이션 및 관련 코드 파일 위치

- **통합 단일 마이그레이션 SQL (V2.0 ~ V2.4 전체 일원화 · 1회 실행 완료)**: [20261118000000_typingcode_v2_unified_schema.sql](file:///d:/Projects/TypingCode_V2/supabase/migrations/20261118000000_typingcode_v2_unified_schema.sql)
- **클라이언트 동기화 엔진 & 타입 정의**: [src/lib/progressSync.ts](file:///d:/Projects/TypingCode_V2/src/lib/progressSync.ts), [src/lib/supabase/types.ts](file:///d:/Projects/TypingCode_V2/src/lib/supabase/types.ts)
- **로그인·필수 이메일 회원가입 페이지**: [src/app/login/page.tsx](file:///d:/Projects/TypingCode_V2/src/app/login/page.tsx), [src/app/api/auth/login/route.ts](file:///d:/Projects/TypingCode_V2/src/app/api/auth/login/route.ts)
