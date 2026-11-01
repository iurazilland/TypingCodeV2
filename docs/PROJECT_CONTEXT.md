# 📘 TypingCode V2 프로젝트 컨텍스트 및 개발 가이드 (Project Context)

이 문서는 **TypingCode V2** 프로젝트의 아키텍처, 데이터 흐름, 핵심 로직, 그리고 개발 컨벤션을 정리한 공식 컨텍스트 문서입니다.

---

## 1. 프로젝트 개요 (Overview)
- **Goal**: 블록 코딩(Scratch-style Visual Block)과 텍스트 타이핑(Text Coding)의 가교 역할을 하는 듀얼 학습 플랫폼 및 실시간 다국어 코드 실행·문제풀이 환경 제공.
- **Core Tech**: Next.js 14 (App Router), React 18, TypeScript, Supabase (`@supabase/ssr`, Auth, Postgres RLS, Storage), **자체 0ms 로컬 파이썬 AST 실행기 (`blockEvaluator.ts`)**, Wandbox API (Multi-language Sandbox), Vanilla CSS.
- **Key Features**:
  - **Dual Practice Studio (`/practice/[language]/[level]`)**:
    - **Visual Block Mode**: Scratch/MakeCode 스타일 블록 조립형 코딩 (`Statement`, `C-shape` [`for`, `while`, `def`, `class`], `E-shape` [`if-elif-else`, `try-except-else-finally`], `raise`, `Method` 가로 체이닝, 자석 스냅, `unlockedBlocks` 기반 동적 도구함).
    - **Typing & Quiz Mode**: 글자 수 1:1 매칭 `§` 빈칸 캡슐(`fill_blank`), 버그 수정(`fix_bug`), 한 줄 코드 추가(`one_line`), 실행 결과 예측 4지선다(`predict_output`), 붙여넣기·드래그앤드롭 차단 안내, 1레벨 첫 진입 전용 스포트라이트 투어(`SpotlightTour`).
  - **2-Part 나선형 파이썬 베이직 커리큘럼 (`py-basic`)**:
    - **총 14섹션 · 87레벨 · 1,089문항** 구현 및 전수 검증 완료 (`Part 1 핵심 개념 기초편 Lv 1~63` + `Part 2 반복 심화 & 부가 함수·기능 확장편 Lv 64~87`). 미구현 타 코스 모듈은 `isLocked: true` 잠금 및 라우트 가드 적용.
  - **통합 학습 로드맵 탐색 (`/languages`)**:
    - 상단 단일 선택 카드의 **1행 언어별 선택** + **2행 학습 방향별 추천(6종)** 버튼으로 하단 커리큘럼 목록을 13개 언어 기준 또는 `1단계 → 2단계 → 3단계` 추천 순서 기준으로 즉시 재분류.
  - **코드타자 (`/code-typing`) · 실전 문제풀이 (`/problems`) · 자유코딩 (`/compiler`) · 리더보드 (`/ranking`)**:
    - 코드타자 25종 예제 CPM·정확도 측정 및 언어별 최고 기록 저장, 26문항 다국어 온라인 저지 자동 채점, 클라우드 스니펫 저장/불러오기 IDE, 실시간 Supabase 종합·언어별 리더보드 연동.

---

## 2. 기술 스택 상세 (Tech Stack Details)

### 2.1 Frontend & State / Cloud Sync
- **Framework**: Next.js 14.2.23 (App Router), React 18.3.1, TypeScript 5.4.5
- **Styling & Icons**: Vanilla CSS (`src/styles/globals.css`) + `lucide-react` (외부 UI/상태 라이브러리 무의존)
- **Context & Cloud Sync**:
  - [`LanguageContext.tsx`](file:///d:/Projects/TypingCode_V2/src/lib/LanguageContext.tsx): 전역 한/영 다국어 설정.
  - [`AuthContext.tsx`](file:///d:/Projects/TypingCode_V2/src/lib/AuthContext.tsx) & [`middleware.ts`](file:///d:/Projects/TypingCode_V2/src/lib/supabase/middleware.ts): Supabase 세션 검증으로 실습 라우트(`/practice/*`, `/code-typing`, `/problems`, `/compiler`, `/profile`) 보호 및 로그아웃 시 로컬 진도 캐시 격리.
  - [`progressSync.ts`](file:///d:/Projects/TypingCode_V2/src/lib/progressSync.ts): `localStorage`(`cleared_levels_${trackId}`) 0ms 즉시 반영 + Supabase 7개 테이블 양방향 동기화.

### 2.2 Execution Runtime (Hybrid Code Sandbox)
- **0ms Local Python AST & Step-Debugger Engine ([`blockEvaluator.ts`](file:///d:/Projects/TypingCode_V2/src/lib/blockEvaluator.ts))**:
  - 외부 npm 패키지 의존성 **0개**로 구현한 브라우저 내장 파이썬 인터프리터 및 블록 트리 평가기 (`try-except-else-finally`, `raise`, `class`/단일 상속, 리스트 컴프리헨션, `*args`, `lambda`, 라인별 메모리 스냅샷 지원).
- **Multi-language Cloud Sandbox ([`runner.ts`](file:///d:/Projects/TypingCode_V2/src/lib/runner.ts) & [`api/execute/route.ts`](file:///d:/Projects/TypingCode_V2/src/app/api/execute/route.ts))**: Wandbox API 기반 다국어 컴파일·실행 (Node.js ESM 충돌 방지 및 Java `public class` 자동 정규화 포함).
- **Web / Linux / VB Sandbox**: [`WebPreview.tsx`](file:///d:/Projects/TypingCode_V2/src/components/WebPreview.tsx) (`iframe srcdoc`) 및 클라이언트 내장 Linux Bash / VB 실행기.

---

## 3. 디렉토리 구조 (Directory Structure)

```text
TypingCode_V2/
├── .agents/skills/                 # 4대 엔지니어링 하네스 (ponytail, superpowers, caveman, rea)
├── docs/                           # 프로젝트 공식 기술 및 커리큘럼 SSOT 문서
│   ├── PROJECT_CONTEXT.md          # 본 문서 (V2 전체 컨텍스트 및 아키텍처)
│   ├── SYSTEM_DESIGN.md            # 시스템 상세 설계, DB 스키마, AST·블록 엔진 규격
│   ├── DATABASE_GUIDE.md           # Supabase V2 데이터베이스(7개 테이블) 및 인증 가이드
│   ├── visualizer-system.md        # 블록 스튜디오, 메모리 시각화, 타이핑·투어 UI 사양
│   ├── CONTENT_AUTHORING.md        # 2-Part · 13단계/10단계 커리큘럼 및 프롬프트 작성 표준
│   ├── python_curriculum.md        # Python Basic (14섹션 · 87레벨 · 1,089문항) 공식 SSOT
│   ├── html-css-js-course-design.md# Web (HTML/CSS/JS) 코스 설계 사양서
│   ├── LANGUAGE_ROADMAP.md         # 13개 지원 언어 런타임 및 커리큘럼 현황 로드맵
│   └── LEVEL_VERIFICATION_REPORT.md# 커리큘럼 전수 검증 및 정적/실행 게이트 보고서
├── supabase/migrations/            # Supabase V2 스키마·RLS·트리거 마이그레이션 SQL (3종)
└── src/
    ├── app/
    │   ├── page.tsx                # 메인 랜딩 페이지
    │   ├── languages/page.tsx      # 통합 커리큘럼 탐색 (언어별 선택 + 학습 방향별 추천 6종)
    │   ├── practice/[language]/    # 섹션별 레벨 목록 및 [level]/ 풀스크린 블록·타이핑 연습실
    │   ├── code-typing/page.tsx    # 코드타자 (25종 예제 CPM/정확도 측정 및 기록 저장)
    │   ├── problems/page.tsx       # 실전 문제풀이 (26문항 다국어 온라인 저지)
    │   ├── compiler/page.tsx       # 자유코딩 멀티 샌드박스 IDE (클라우드 스니펫 연동)
    │   ├── ranking/page.tsx        # 실시간 종합 학습·언어별 코드타자 리더보드
    │   ├── login/page.tsx          # 로그인·회원가입 페이지
    │   ├── profile/page.tsx        # 내 정보·출석 스트릭·뱃지·아바타 관리
    │   └── api/                    # auth/login (ID 로그인 변환) 및 execute (코드 실행 프록시)
    ├── components/
    │   ├── practice/               # CanvasBlockItem, BlockPuzzleShapes, TypingStage, SpotlightTour
    │   ├── CodeEditorArea.tsx      # 줄번호·구문 하이라이트·탭 지원 코드 에디터
    │   ├── Navbar.tsx / Footer.tsx # 전역 상·하단 네비게이션 (연습실 풀스크린 시 자동 숨김)
    │   ├── SectionFeedbackModal.tsx# 섹션 완주 마이크로 설문 모달
    │   ├── Terminal.tsx / WebPreview.tsx / VirtualKeyboard.tsx
    │   └── LanguageIcon.tsx / UserAvatar.tsx
    ├── data/
    │   ├── curriculum/python_basic/# Python Basic 레벨 모듈 (level1.ts ~ level87.ts, 1,089문항)
    │   ├── problemsBank.ts         # 실전 문제풀이 26문항 및 테스트케이스·스타터 코드
    │   └── speedCodingSnippets.ts  # 코드타자 언어별 실전 코드 예제 25종
    └── lib/
        ├── AuthContext.tsx / LanguageContext.tsx
        ├── progressSync.ts         # Supabase 7개 테이블 및 localStorage 동기화
        ├── blockEvaluator.ts / blockGeometry.ts
        ├── curriculum.ts / curriculumSections.ts / curriculumTranslations.ts
        ├── practiceData.ts / practiceTypes.ts
        ├── badges.ts / avatarPresets.ts / avatarCompression.ts
        └── runner.ts / types.ts / supabase/*
```

---

## 4. 핵심 동작 원칙 요약

1. **연습실 단계 및 레벨 해금 규칙 ([`practice/[language]/[level]/page.tsx`](file:///d:/Projects/TypingCode_V2/src/app/practice/%5Blanguage%5D/%5Blevel%5D/page.tsx))**:
   - 레벨 변경 시 `key` 리마운트로 이전 레벨 상태를 완전 격리하며, 각 문제는 실행·정답 판정(`markStepSolved`)을 통과한 시점에만 다음 단계(`solvedIdx + 1`)가 해금됩니다.
   - 마지막 문제까지 통과해야만 `recordLevelCleared`를 통해 `user_cleared_levels` 및 `cleared_levels_${trackId}`에 완료가 기록됩니다.
   - 타이핑 스테이지([`TypingStage.tsx`](file:///d:/Projects/TypingCode_V2/src/components/practice/TypingStage.tsx))에서는 학습 효과 보호를 위해 클립보드 붙여넣기·드래그앤드롭 입력을 차단하고 상단 바에 2초간 안내 배지를 표시합니다.
   - 화면 둘러보기([`SpotlightTour.tsx`](file:///d:/Projects/TypingCode_V2/src/components/practice/SpotlightTour.tsx))는 계정별 키(`typingcode_tour_seen_v2_${user.id}`)로 관리되며 **1레벨 1단계 첫 진입 시에만** 자동 실행됩니다.
2. **하드코딩 우회 차단 채점 (`checkSubmissionPass`)**:
   - `stdout` 및 변수 메모리 정합성뿐 아니라 문제에서 요구한 핵심 구문(`for`, `while`, `f-string`, `def`, `return`, `try`, `class`, `lambda`, 복합 대입 등) 사용 여부를 함께 검증합니다.

---

## 5. 개발 규칙 및 검증 원칙 (`AGENTS.md` 기준)

1. **🐴 Ponytail 기본 탑재**: YAGNI, 표준 라이브러리 및 네이티브 브라우저 API 우선, 불필요한 외부 패키지 추가 금지.
2. **정적 검증 우선 (`npx tsc --noEmit`)**: 사용자 명시적 요청 없이는 브라우저 테스트를 자의적으로 실행하지 않습니다.
3. **원격 `git push` 자동 실행 금지**: 로컬 커밋(`git add`, `git commit`)까지만 수행하며 원격 푸시는 사용자 요청 시에만 실행합니다.
