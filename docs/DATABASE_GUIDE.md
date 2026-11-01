# 🗄️ TypingCode V2 데이터베이스(Supabase) 쉬운 가이드

이 문서는 **TypingCode V2**가 Supabase 데이터베이스와 스토리지에 **무엇을, 왜, 어떻게 저장하는지** 한눈에 이해할 수 있도록 정리한 안내서입니다.

---

## 1. 한 줄 핵심 요약

> **학습 문제집(파이썬 87레벨 등), 실전 문제(26문항), 코드타자 예제(25종)는 앱 코드에 내장되어 0초 만에 열리고, Supabase DB에는 오직 "회원 프로필 · 완료한 레벨 · 출석 · 문제풀이 · 코드타자 기록 · 섹션 설문 · 자유코딩 저장 스니펫" 7가지만 저장합니다.**

- **일반 학습(`/practice`)에서는 타수(CPM)와 개별 문제 번호를 저장하지 않습니다.** 하트 5개를 모두 소진하면 1번 문제부터 다시 강제 복습하며, 레벨의 마지막 문제까지 모두 풀었을 때만 해당 레벨을 **완료(`user_cleared_levels`)** 로 기록합니다.
- **타수(CPM) 측정**은 코드 실행을 제외한 순수 타자 연습 메뉴인 **코드타자(`/code-typing`)** 에서만 별도로 측정·기록합니다.

---

## 2. 한눈에 보는 7개 테이블 + 아바타 스토리지 구조

```text
[Supabase 기본 회원 금고 (Authentication -> Users)]
  이메일 / 암호화된 비밀번호 / GitHub·Google 연동 정보 (기존 V1 회원 100% 유지)
        │
        ▼
┌─────────────────────────────────────────────────────────────────┐
│ 1. profiles (내 명찰 · 아바타 · 출석 스트릭 · 리더보드 종합 점수) │
└─────────────────────────────────────────────────────────────────┘
        ├──▶ 2. user_cleared_levels (언어·코스별 완료한 레벨 기록)
        ├──▶ 3. user_problem_solves (문제풀이 /problems 완료 도장판)
        ├──▶ 4. user_attendance     (일일 출석 & 연속 출석일수 스트릭)
        ├──▶ 5. user_speed_records  (코드타자 /code-typing 언어별 최고 타수)
        ├──▶ 6. section_feedbacks   (섹션 완주 시 별점·난이도·건의 설문)
        └──▶ 7. user_saved_snippets (자유코딩 /compiler 클라우드 코드 보관함)

[Supabase Storage -> avatars 버킷]
  사용자가 직접 업로드한 프로필 사진 (브라우저에서 256×256 WebP로 자동 압축 후 저장)
```

---

### ① `profiles` — 내 명찰 & 리더보드 집계판
상단 헤더 프로필, 내 정보 수정(`/profile`), 리더보드(`/ranking`)에 사용되는 핵심 시트입니다.  
*(점수·출석일·완료 레벨 컬럼은 DB 트리거만 자동 계산할 수 있도록 잠겨 있어 사용자가 개발자 도구로 조작할 수 없습니다.)*

| 컬럼 이름 | 쉬운 설명 | 예시 데이터 |
| :--- | :--- | :--- |
| `id` | 회원 고유 번호 (`auth.users.id`) | `a1b2-c3d4-...` |
| `username` | 수동 가입 시 입력한 **로그인 ID** (대소문자 무시 고유값, 가입 후 고정) | `coder_kim` |
| `display_name` | 화면과 리더보드에 표시되는 **닉네임** (언제든 수정 가능) | `파이썬마스터` |
| `avatar_preset` | 내장 기본 프로필 아이콘 키 (12종 중 택1) | `fox` |
| `avatar_url` | 직접 업로드한 압축 아바타(또는 소셜 프로필) 이미지 URL | `https://.../avatar.webp` |
| `primary_language` | 주력 학습 언어 | `Python` |
| `cleared_levels_count` | 완료한 총 학습 레벨 수 (트리거 자동 집계) | `14` |
| `solved_problems_count` | 해결한 총 코딩 문제 수 (트리거 자동 집계) | `5` |
| `current_streak` / `longest_streak` | 현재 연속 출석일수 / 최장 연속 출석일수 | `7` / `12` |
| `total_attendance_days` | 누적 출석일수 | `18` |
| `activity_score` | **종합 학습 리더보드 점수** (`레벨×100 + 문제×150 + 누적출석×30 + 최장연속×50`) | `3690` |
| `best_typing_cpm` / `best_typing_accuracy` | **코드타자** 최고 타수(CPM) / 정확도(%) | `485` / `99.20` |

---

### ② `user_cleared_levels` — 코스별 완료 레벨 기록
어떤 언어 코스의 몇 레벨을 끝까지 클리어했는지만 깔끔하게 저장합니다 (`(user_id, track_id, level_number)`).

### ③ `user_problem_solves` — 문제풀이 완료 도장판
문제풀이(`/problems`)에서 통과한 문제 번호(`problem_id`)와 사용 언어를 기록합니다.

### ④ `user_attendance` — 일일 출석부 (KST 기준)
한국 시간(`Asia/Seoul`) 기준 하루 1회 자동 출석이 기록되며, 과거 날짜 조작 방지를 위해 **오늘 날짜만 등록 가능**하도록 RLS 보안 규칙이 걸려 있습니다.

### ⑤ `user_speed_records` — 코드타자 예제·언어별 최고 기록
코드타자(`/code-typing`)의 25개 언어별 코드 예제(`snippet_id`, `language`)마다 본인의 최고 타수(`best_cpm`)와 정확도(`best_accuracy`)를 갱신하며, 리더보드(`/ranking`)의 언어별 타자 순위 집계에 사용됩니다.

### ⑥ `section_feedbacks` — 섹션 완료 마이크로 설문
각 섹션의 마지막 레벨을 처음 완주했을 때 받는 **별점(`1~5`), 체감 난이도(`easy / just_right / hard`), 빠른 선택 태그(`tags`), 추가 요청사항(`comment`)** 이 저장됩니다. Supabase 대시보드 **Table Editor → `section_feedbacks`** 에서 사용자 피드백을 바로 모아볼 수 있습니다.

### ⑦ `user_saved_snippets` — 자유코딩 클라우드 스니펫 보관함
자유코딩(`/compiler`)에서 작성한 코드를 제목·언어와 함께 계정당 최대 20개까지 클라우드에 저장·덮어쓰기·삭제할 수 있습니다.

---

## 3. 페이지별 로그인 보호 규칙

| 구분 | 경로 | 비로그인 접근 시 동작 |
| :--- | :--- | :--- |
| **공개 페이지** | 홈(`/`), 전체 코스 탐색(`/languages`), 리더보드(`/ranking`), 로그인(`/login`) | 자유롭게 열람 가능 |
| **로그인 필수** | 언어 레벨 목록 및 실습(`/practice/*`), 코드타자(`/code-typing`), 문제풀이(`/problems`), 자유코딩(`/compiler`), 내 정보(`/profile`) | 자동으로 **`/login?next=원래주소`** 로 이동하며, 로그인(또는 회원가입) 완료 시 원래 페이지로 즉시 연결 |

> **회원가입 노출 규칙**: 헤더나 메인에는 `로그인` 버튼만 존재하며, **회원가입은 `/login` 페이지 내부에서만 전환하여 진행**할 수 있습니다.

---

## 4. 주요 코드 및 마이그레이션 파일 위치

- **초기 V2 마이그레이션 SQL**: [20261101000000_v2_initial_schema.sql](file:///d:/Projects/TypingCode_V2/supabase/migrations/20261101000000_v2_initial_schema.sql)
- **V2.1 고도화 마이그레이션 SQL**: [20261101010000_v2_schema_refinement.sql](file:///d:/Projects/TypingCode_V2/supabase/migrations/20261101010000_v2_schema_refinement.sql)
- **V2.2 문제풀이·자유코딩 스니펫·언어별 타자 리더보드 마이그레이션 SQL**: [20261101020000_v2_judge_snippets_speed_leaderboard.sql](file:///d:/Projects/TypingCode_V2/supabase/migrations/20261101020000_v2_judge_snippets_speed_leaderboard.sql)
- **전용 로그인/회원가입 페이지 & ID 로그인 API**: [src/app/login/page.tsx](file:///d:/Projects/TypingCode_V2/src/app/login/page.tsx), [src/app/api/auth/login/route.ts](file:///d:/Projects/TypingCode_V2/src/app/api/auth/login/route.ts)
- **내 정보 수정 & 아바타 자동 압축 업로드**: [src/app/profile/page.tsx](file:///d:/Projects/TypingCode_V2/src/app/profile/page.tsx), [src/lib/avatarCompression.ts](file:///d:/Projects/TypingCode_V2/src/lib/avatarCompression.ts), [src/components/UserAvatar.tsx](file:///d:/Projects/TypingCode_V2/src/components/UserAvatar.tsx)
- **섹션 완료 설문 모달**: [src/components/SectionFeedbackModal.tsx](file:///d:/Projects/TypingCode_V2/src/components/SectionFeedbackModal.tsx)
- **코드타자(25종 예제 로테이션)**: [src/app/code-typing/page.tsx](file:///d:/Projects/TypingCode_V2/src/app/code-typing/page.tsx), [src/data/speedCodingSnippets.ts](file:///d:/Projects/TypingCode_V2/src/data/speedCodingSnippets.ts)
