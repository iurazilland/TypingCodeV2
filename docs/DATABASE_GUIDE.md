# 🗄️ TypingCode V2 데이터베이스(Supabase) 쉬운 가이드

이 문서는 **TypingCode V2**가 Supabase 데이터베이스에 **무엇을, 왜, 어떻게 저장하는지** 전문 용어 없이 한눈에 이해할 수 있도록 정리한 안내서입니다.

---

## 1. 한 줄 핵심 요약

> **문제집(파이썬 87레벨 등)은 이미 앱 코드 안에 들어있고, Supabase DB에는 오직 "회원의 세이브 데이터(명찰 · 책갈피 · 도장판)" 딱 3가지만 저장합니다.**

덕분에 문제를 열거나 코드를 실행할 때 DB를 기다릴 필요가 없어 **속도가 0초(즉시 반응)**로 빠르고, DB 용량과 비용도 거의 들지 않습니다.

---

## 2. 엑셀 시트로 이해하는 테이블 3개 구조

Supabase 왼쪽 메뉴의 **Table Editor**를 열면 아래 **3개의 시트(테이블)**가 보입니다. (+ 로그인 계정을 관리하는 Supabase 기본 `Authentication` 금고가 따로 있습니다.)

```text
[Supabase 기본 회원 금고 (Authentication -> Users)]
  이메일 / 암호화된 비밀번호 / GitHub·Google 연동 정보 (기존 V1 회원 14명 그대로 유지됨)
        │
        ▼ (회원가입 시 자동으로 연결)
┌───────────────────────────────────────────────────────────┐
│ 1. profiles (내 명찰 & 종합 성적표)                        │ ◀ 상단 내 이름, 랭킹(/ranking) 페이지에서 사용
└───────────────────────────────────────────────────────────┘
        │
        ├──▶ 2. user_level_progress (코스별 학습 책갈피)      ◀ 코스 목록(/languages), 연습실(/practice)에서 사용
        │
        └──▶ 3. user_problem_solves (문제풀이 완료 도장판)    ◀ 문제풀이(/problems) 페이지에서 사용
```

---

### ① `profiles` — 내 명찰 & 종합 성적표
화면 우측 상단에 뜨는 **내 닉네임**과 **랭킹(`/ranking`) 순위표**를 보여주기 위한 시트입니다.  
*(누구나 랭킹을 볼 수 있어야 하므로, 이메일 같은 민감한 개인정보는 이 시트에 넣지 않았습니다.)*

| 컬럼 이름 | 쉬운 설명 | 예시 데이터 |
| :--- | :--- | :--- |
| `id` | 회원 고유 번호 (`Authentication` 회원 금고와 동일) | `a1b2-c3d4-...` |
| `display_name` | 화면과 랭킹에 표시되는 **닉네임** | `파이썬마스터` |
| `avatar_emoji` | 프로필 아이콘 이모지 | `🦊` |
| `primary_language` | 가장 많이 깬 **주력 언어** (자동 계산됨) | `Python` |
| `best_cpm` | 지금까지 기록한 **최고 타수(분당 타수)** | `540` |
| `avg_accuracy` | 지금까지 기록한 **평균 정확도(%)** | `98.50` |
| `cleared_levels_count` | 끝까지 완료한 **총 레벨 개수** (자동 계산됨) | `12` |
| `solved_problems_count` | 문제풀이에서 맞힌 **총 문제 개수** (자동 계산됨) | `3` |

---

### ② `user_level_progress` — 코스별 학습 책갈피
**"누가, 어떤 언어의 몇 레벨에서, 몇 번 문제까지 풀었는지"** 적어두는 책갈피 시트입니다.  
이 시트 덕분에 집 컴퓨터에서 풀다가 노트북에서 로그인해도 공부하던 위치가 그대로 이어집니다.

| 컬럼 이름 | 쉬운 설명 | 예시 데이터 |
| :--- | :--- | :--- |
| `user_id` | 누구의 책갈피인지 (회원 번호) | `a1b2-c3d4-...` |
| `track_id` | 공부 중인 언어/코스 이름 | `python` |
| `level_number` | 몇 레벨인지 (`1` ~ `87` 등) | `3` |
| `unlocked_step` | 그 레벨 안에서 몇 단계까지 통과했는지 | `13` |
| `total_steps` | 그 레벨의 전체 문제 수 (일반 13 / 종합 10) | `13` |
| `is_cleared` | 이 레벨을 끝까지 다 깼는지 여부 (`true` / `false`) | `true` |
| `hearts` | 해당 레벨에 남아있는 하트 개수 (`0` ~ `5`) | `4` |
| `best_cpm` | 이 레벨에서 기록한 최고 타수 | `540` |
| `best_accuracy` | 이 레벨에서 기록한 최고 정확도(%) | `99.10` |

---

### ③ `user_problem_solves` — 문제풀이 완료 도장판
상단 메뉴 **문제풀이(`/problems`)**에서 문제를 맞혔을 때 초록색 체크(`✓`) 도장을 찍어두는 시트입니다.

| 컬럼 이름 | 쉬운 설명 | 예시 데이터 |
| :--- | :--- | :--- |
| `user_id` | 문제를 푼 회원 번호 | `a1b2-c3d4-...` |
| `problem_id` | 맞힌 문제 번호 (`#1`, `#2` ...) | `1` |
| `language` | 풀이에 사용한 언어 | `python` |
| `solved_at` | 문제를 통과한 날짜/시간 | `2026-11-01 18:30` |

---

## 3. 사용자가 앱을 쓸 때 자동으로 일어나는 일

1. **회원가입할 때**
   - 이메일이나 GitHub/Google로 가입하면, DB가 알아서 `profiles(명찰)` 시트에 새 줄을 자동으로 만들어 줍니다.
2. **연습실에서 문제를 하나 통과할 때마다**
   - 브라우저에도 즉시 저장되고, 동시에 `user_level_progress(책갈피)` 시트에 통과한 단계와 타수(CPM)·정확도가 저장됩니다.
   - 그러면 DB가 자동으로 `profiles(명찰)` 시트의 **클리어 레벨 수**와 **최고 타수**를 다시 계산해 올려줍니다 → **랭킹(`/ranking`) 순위에 자동 반영!**
3. **자물쇠(보안 규칙) 작동 방식**
   - `profiles(명찰)`: 랭킹에 나와야 하므로 **보는 것은 누구나 가능**, **수정은 본인만 가능**합니다.
   - `user_level_progress(책갈피)` & `user_problem_solves(도장판)`: **오직 본인 계정으로 로그인했을 때만** 읽고 쓸 수 있으며, 다른 사람이나 비로그인 사용자는 절대 볼 수도 수정할 수도 없습니다.

---

## 4. 페이지별 로그인 필요 여부 (보호 라우트)

| 구분 | 해당 페이지 | 비로그인 방문 시 동작 |
| :--- | :--- | :--- |
| **누구나 열람 가능** | 홈(`/`), 코스 탐색(`/languages`, `/learn/*`), 랭킹(`/ranking`) | 자유롭게 구경 가능 |
| **로그인 필수** | 모든 실습(`/practice/*`), 문제풀이(`/problems`), 챌린지(`/challenges`), 자유코딩(`/compiler`) | 자동으로 **로그인 창**이 열리며, 로그인 성공 시 원래 들어가려던 페이지로 즉시 이동 |

---

## 5. Supabase 대시보드에서 자주 쓰는 관리 방법 3가지

1. **가입된 회원 목록 확인하기**
   - Supabase 대시보드 좌측 **`Authentication` → `Users`** 클릭 (기존 V1 회원 및 신규 가입자의 이메일·로그인 방식 확인 가능)
2. **유저별 진도/타수 눈으로 확인하기**
   - Supabase 대시보드 좌측 **`Table Editor`** 클릭 → `profiles` 또는 `user_level_progress` 클릭 (엑셀처럼 표로 바로 확인 가능)
3. **배포 도메인(또는 로컬)에서 GitHub / Google 소셜 로그인 허용하기**
   - Supabase 대시보드 좌측 **`Authentication` → `URL Configuration`** 이동
   - **`Redirect URLs`** 목록에 아래 주소들이 등록되어 있어야 소셜 로그인 후 정상 복귀합니다:
     - 로컬 개발용: `http://localhost:3000/auth/callback`
     - 실제 서비스 도메인 배포 시: `https://내도메인주소/auth/callback`

---

## 6. 관련 코드 파일 위치

- **DB 테이블 생성 원본 SQL**: [`supabase/migrations/20261101000000_v2_initial_schema.sql`](file:///d:/Projects/TypingCode_V2/supabase/migrations/20261101000000_v2_initial_schema.sql)
- **Supabase 연결 키 파일 (Git 업로드 제외됨)**: [`.env.local`](file:///d:/Projects/TypingCode_V2/.env.local)
- **로그인 없을 때 실습 페이지 차단 문지기**: [`src/middleware.ts`](file:///d:/Projects/TypingCode_V2/src/middleware.ts), [`src/lib/supabase/middleware.ts`](file:///d:/Projects/TypingCode_V2/src/lib/supabase/middleware.ts)
- **로그인 상태 전역 관리 & 진도 동기화**: [`src/lib/AuthContext.tsx`](file:///d:/Projects/TypingCode_V2/src/lib/AuthContext.tsx), [`src/lib/progressSync.ts`](file:///d:/Projects/TypingCode_V2/src/lib/progressSync.ts)
- **로그인/회원가입 모달 & 상단바 UI**: [`src/components/AuthModal.tsx`](file:///d:/Projects/TypingCode_V2/src/components/AuthModal.tsx), [`src/components/Navbar.tsx`](file:///d:/Projects/TypingCode_V2/src/components/Navbar.tsx)
