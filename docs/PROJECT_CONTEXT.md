# 📘 TypingCode V2 프로젝트 컨텍스트 및 개발 가이드 (Project Context)

이 문서는 **TypingCode V2** 프로젝트의 아키텍처, 데이터 흐름, 핵심 로직, 그리고 개발 컨벤션을 상세히 기술합니다. 새로운 AI Agent나 개발자는 작업을 시작하기 전에 반드시 이 문서를 정독해야 합니다.

---

## 1. 프로젝트 개요 (Overview)
- **Goal**: 블록 코딩(Scratch-style Visual Block)과 텍스트 타이핑(Text Coding)의 가교 역할을 하는 듀얼 학습 플랫폼 및 실시간 다국어 코드 실행 환경(SaaS) 제공.
- **Core Tech**: Next.js 14 (App Router), React 18, TypeScript, Zustand, **자체 0ms 로컬 파이썬 AST 실행기 (`blockEvaluator.ts`)**, Wandbox API (Multi-language Sandbox), Vanilla CSS (High Performance).
- **Key Features**:
  - **Dual Practice Mode (교차 체득 & 종합 검증)**:
    - **Visual Block Mode**: Scratch/MakeCode 스타일의 블록 조립형 코딩 (`Statement`, `C-shape` [`for`, `while`, `def`, `class`], `E-shape` [`if-elif-else`, `try-except-else-finally`], `raise`, `Method` 가로 체이닝 블록 지원, 자석 스냅 & 체인 드래그, 커리큘럼별 `unlockedBlocks` 기반 동적 도구함 노출).
    - **Typing & Quiz Mode**: 실시간 WPM·정확도·오타 감지, 글자 수 1:1 매칭 `§` 빈칸 캡슐(`fill_blank`), 버그 수정(`fix_bug`), 한 줄 코드 추가(`one_line`), 실행 결과 예측 4지선다(`predict_output`) 및 가상 키보드 가이드를 결합한 자기주도 문제 해결 학습.
  - **2-Part 나선형 파이썬 베이직 커리큘럼 (`py-basic` 완비)**:
    - **총 14섹션 · 87레벨 · 1,089문항** 구현 및 전수 검증 완료 (`Part 1 핵심 개념 기초편 Lv 1~63` + `Part 2 반복 심화 & 부가 함수·기능 확장편 Lv 64~87`).
  - **Multi-Language Sandbox**: Python(0ms 로컬 AST + CPython 클라우드), C, C++, JavaScript, Java, Go, Rust, C#, Swift, SQL, Web(HTML/CSS/JS), Linux CLI, Visual Basic & VBA 등 **총 13개 언어/트랙**의 실시간 실행 지원.
  - **Concept Syllabus & Live Progress**: 챕터별 섹션 그룹화(`/practice/[language]`), Exercism 스타일 벤토 그리드 레벨 카드, 그리고 `/languages` 트랙 탐색 페이지의 `localStorage` 실시간 클리어 레벨 집계 연동.

---

## 2. 기술 스택 상세 (Tech Stack Details)

### 2.1 Frontend
- **Framework**: Next.js 14.2.23 (App Router)
- **Library**: React 18.3.1, TypeScript 5.4.5
- **Styling**: Vanilla CSS (`src/styles/globals.css`, CSS Scopes) — *외부 무거운 CSS 프레임워크 배제, 네이티브 웹 표준 기반 극대화*
- **Icons**: Lucide React (`lucide-react`)
- **State Management**: Zustand 4.5.2
  - `useTypingStore` (`src/lib/store.ts`): 타이핑 진행률, WPM, 오타수, 정확도, 스텝 전환, 인사이트 락 관리.
  - React Context: `LanguageContext` (`src/lib/LanguageContext.tsx`): 전역 한/영 다국어 설정.
  - LocalStorage: 학습 진도율(`unlocked_step_${lang}_${lvl}`) 영속화 및 `/languages` · `/practice/[language]` 실시간 진척도 동기화.

### 2.2 Execution Runtime (Hybrid Code Sandbox)
- **0ms Local Python AST & Step-Debugger Engine (`src/lib/blockEvaluator.ts`)**:
  - 외부 npm 패키지 의존성 **0개**로 직접 구현한 브라우저 내장 파이썬 인터프리터 및 블록 트리 평가기.
  - 기본 입출력·제어문·컬렉션·`def` 함수부터 `try / except / else / finally`·`raise`, `class`·`__init__`·`self`·`__str__`·단일 상속, 삼항 조건식, 리스트 컴프리헨션, `*args`, `lambda` (`sorted(..., key=...)`), `isinstance()`, `ord()`, `chr()`, `f-string` 세부 서식(`:.2f`, `:,`, `:,.2f`)까지 0ms 지연시간으로 즉시 실행하고 라인별 변수 메모리 스냅샷(`steps`, `scope`)을 생성.
- **Multi-language Cloud Sandbox (`src/lib/runner.ts`)**: Wandbox API (`https://wandbox.org/api/compile.json`)를 통해 다국어 코드를 컴파일하고 `stdout`, `stderr`, `exitCode`, 실행 시간을 반환.
- **Web Execution (`src/components/WebPreview.tsx`)**: HTML/CSS/JS 코드를 `iframe`의 `srcdoc` 샌드박스로 실시간 렌더링 및 콘솔 캡처.
- **Linux & VB Execution**: 클라이언트 내장 Linux Bash 에뮬레이터 및 Visual Basic 인터프리터/Mono 런타임 지원.

---

## 3. 디렉토리 구조 (Directory Structure)

```
TypingCode_V2/
├── .agents/skills/         # 워크스페이스 장착 4대 하네스 (ponytail, superpowers, caveman, rea)
├── docs/                   # 프로젝트 공식 기술 및 커리큘럼 SSOT 문서
│   ├── PROJECT_CONTEXT.md          # 본 문서 (V2 컨텍스트 및 전체 아키텍처)
│   ├── SYSTEM_DESIGN.md            # 시스템 상세 설계, AST 실행기 및 블록/스냅 엔진 규격
│   ├── visualizer-system.md        # 블록 코딩, 메모리 비주얼라이저 및 UI 인터랙션 사양서
│   ├── CONTENT_AUTHORING.md        # 2-Part · 13단계/10단계 커리큘럼 및 프롬프트 작성 표준
│   ├── python_curriculum.md        # Python Basic (2-Part · 14섹션 · 87레벨 · 1,089문항) 공식 SSOT
│   ├── html-css-js-course-design.md# Web (HTML/CSS/JS) 코스 설계 사양서
│   ├── LANGUAGE_ROADMAP.md         # 13개 지원 언어 런타임 및 커리큘럼 현황 로드맵
│   └── LEVEL_VERIFICATION_REPORT.md# 커리큘럼 전수 검증 및 정적/실행 게이트 보고서
├── public/                 # 정적 에셋 (아이콘, 폰트, 파비콘)
├── src/
│   ├── app/
│   │   ├── layout.tsx              # 루트 레이아웃 (Navbar, LanguageProvider 포함)
│   │   ├── page.tsx                # 메인 랜딩 페이지 (통합 히어로, 샌드박스, 코스 카드)
│   │   ├── practice/
│   │   │   └── [language]/
│   │   │       ├── page.tsx        # 챕터(14섹션 등) 그룹화 레벨 선택 페이지 (Bento Syllabus Grid)
│   │   │       └── [level]/        # 블록 코딩 & 타이핑/퀴즈 실전 연습실 (page.tsx)
│   │   ├── compiler/               # 13개 언어/트랙 온라인 컴파일러/샌드박스
│   │   └── languages/              # 언어별 트랙 탐색 페이지 (localStorage 실시간 클리어 진도율 반영)
│   ├── data/
│   │   └── curriculum/
│   │       └── python/             # Python Basic 독립 레벨 모듈 (level1.ts ~ level87.ts, 1,089문항)
│   ├── components/
│   │   ├── practice/
│   │   │   └── CanvasBlockItem.tsx # SVG 패스 기반 블록 렌더링 컴포넌트 (class, try-finally, raise 포함)
│   │   ├── LanguageIcon.tsx        # 언어별 SVG/뱃지 아이콘
│   │   ├── Navbar.tsx              # 상단 네비게이션 바
│   │   ├── VirtualKeyboard.tsx     # 타이핑 모드 가상 키보드 가이드
│   │   └── WebPreview.tsx          # 웹 트랙 실시간 iframe 샌드박스
│   ├── lib/
│   │   ├── blockEvaluator.ts       # 0ms 로컬 파이썬 AST 인터프리터 & 블록 트리 실행기
│   │   ├── blockGeometry.ts        # 블록 타입(BlockType), 테마 색상 및 SVG 외곽선 기하학 유틸
│   │   ├── curriculum.ts           # 13개 언어 트랙 및 코스 모듈 메타데이터 (SSOT)
│   │   ├── curriculumSections.ts   # 코스별 섹션 그룹 및 레벨별 문법 태그(syntaxTags) 구조
│   │   ├── practiceData.ts         # 연습 라운드 등록소 (Lv 1~87 매핑 및 getPracticeRound)
│   │   ├── practiceTypes.ts        # PracticeRound, PracticeQuestion, ChallengeKind 타입 정의
│   │   └── runner.ts               # Wandbox 및 클라이언트 멀티 언어 런타임 실행기
│   └── styles/
│       └── globals.css             # 전역 스타일 및 다크 테마 디자인 토큰
├── package.json
└── tsconfig.json
```

---

## 4. 핵심 아키텍처 및 로직 상세 (Deep Dive)

### 4.1 블록 코딩 & 자석 스냅 엔진 (`blockGeometry.ts`, `CanvasBlockItem.tsx`, `practice/.../page.tsx`)
1. **블록 유형**:
   - **Statement Block**: 일반 명령문 블록 (`print`, `variable`, `return`, `raise`, `break`, `continue`, `call` 등 — 상단 Notch + 하단 Tab).
   - **C-Shape Block**: 반복문(`for_range`, `for_in`, `while`), 함수 정의(`def`), 그리고 객체지향 클래스 정의(`class [Name]:` / `class [Child]([Parent]):`)를 감싸는 ㄷ자형 컨테이너 블록.
   - **E-Shape Block**: 다단 조건 분기(`if - elif - else`) 및 예외 처리 다단 분기(`try - except - else - finally`) 블록. 우클릭 컨텍스트 메뉴로 분기 추가/제거 가능.
   - **Method & Built-in Dropdown Block**: 우측 가로 체이닝 메서드 블록(`.strip()`, `.append()`, `.items()` 등) 및 형변환/검사 드롭다운(`type`, `int`, `float`, `str`, `bool`, `isinstance`, `ord`, `chr`).
2. **자석 스냅 & 중첩 가드 (`findSnapTarget`)**:
   - 상하 스택 스냅(중간 끼워넣기 포함), ㄷ/E블록 내부 입구(Mouth) 인덱스 스냅, 우측 메서드 스냅, 하위 체인 일체 드래그 지원.
   - **구조적 중첩 규칙**: `class` 블록은 최상위(Top-level)에만 배치되며, `def` 블록은 최상위 함수 정의뿐 아니라 **`class` 블록 입구(Mouth) 내부에도 스냅되어 `__init__`, `__str__` 및 인스턴스 메서드를 구성**할 수 있습니다.
3. **코드 역파싱 및 양방향 조립 (`createInitialCanvasBlocks` ⇄ `getAssembledCode`)**:
   - `targetCode`로부터 학습자용 초기 블록 골격(빈 슬롯 포함)을 자동 생성하며, 리스트 컴프리헨션 보호 가드 및 사용자 클래스 메서드 호출(`d.bark()` → `call` 블록) 분리를 지원합니다.

### 4.2 텍스트 타이핑, 구조적 채점(`checkSubmissionPass`) 및 퀴즈 엔진
- **Zustand 실시간 타건 계측**: `useTypingStore`를 통해 WPM, 오타수, 정확도를 실시간 계산하고 `VirtualKeyboard.tsx`와 연동.
- **하드코딩 우회 차단 & 동치 해법 허용 (`checkSubmissionPass`)**:
  - 단순 출력값(`stdout`) 비교에 그치지 않고, 요구된 변수 참조 여부 및 핵심 구문(`for`, `while`, `f-string`, `def`, `return`, `try`, `finally`, `raise`, `class`, `lambda`, 복합 대입 연산자 등) 사용 여부를 AST/토큰 수준에서 검증하여 `print("정답")` 식의 하드코딩 우회를 차단하면서 논리적으로 동등한 다양한 풀이는 폭넓게 허용합니다.

### 4.3 커리큘럼 기반 도구함 동적 노출 (`unlockedBlocks`) 및 실시간 진도율
- `PracticeRound.unlockedBlocks` 배열에 선언된 블록만 팔레트에 노출되며, 미해금 블록과 빈 카테고리는 여백 없이 자동 압축됩니다.
- `/languages` 페이지와 `/practice/[language]` 실러버스 그리드는 브라우저 `localStorage`의 `unlocked_step_${rawLang}_${lvl}` 데이터를 실시간 집계하여 실제 클리어 레벨 수를 정확히 표시합니다.

---

## 5. 데이터 관리 전략 (Data Management)

- **커리큘럼 메타데이터**: [`curriculum.ts`](file:///d:/Projects/TypingCode_V2/src/lib/curriculum.ts) & [`curriculumSections.ts`](file:///d:/Projects/TypingCode_V2/src/lib/curriculumSections.ts)
  - 13개 언어 트랙 및 모듈 정의, Python Basic **14섹션 · 87레벨** 챕터 구성 및 문법 태그(`syntaxTags`) 관리.
- **연습 문제 데이터**: [`practiceData.ts`](file:///d:/Projects/TypingCode_V2/src/lib/practiceData.ts) & `src/data/curriculum/python/level1.ts` ~ `level87.ts`
  - **2-Part 아키텍처**: Part 1(`Lv 1~63`, 789문항) 필수 기초 완주 → Part 2(`Lv 64~87`, 300문항) 2회독 나선형 복습 및 부가 함수·기능 확장 (총 **1,089문항**).
  - **문항 표준**: 일반 레벨 **13문항**(홀수 1·3·5·7·9 블록 ⇄ 짝수 2·4·6·8·10 `fill_blank` + 11 `fix_bug` + 12 `one_line` + 13 `predict_output`), 섹션 종합 레벨 **10문항**(`fill_blank` 3 + `fix_bug` 3 + `one_line` 2 + `predict_output` 2).
  - 상세 작성 규칙은 [`CONTENT_AUTHORING.md`](file:///d:/Projects/TypingCode_V2/docs/CONTENT_AUTHORING.md) 및 [`python_curriculum.md`](file:///d:/Projects/TypingCode_V2/docs/python_curriculum.md)를 따릅니다.

---

## 6. 에이전트 하네스 시스템 (Harness System)

본 워크스페이스는 `.agents/skills/`에 4대 핵심 엔지니어링 하네스를 항시 탑재하고 있습니다:
1. **🐴 ponytail**: *"가장 좋은 코드는 작성하지 않은 코드다"* — YAGNI, 네이티브 웹 표준 우선, 불필요한 외부 의존성 원천 차단.
2. **🦸 superpowers**: *"의지보다 규율이 강하다"* — 스펙 정의 → 단위별 계획 → 정적·실행 검증 게이트 준수.
3. **🦴 caveman**: *"토큰 낭비 제로, 핵심만 직격"* — 군더더기 없는 초고밀도 커뮤니케이션.
4. **🔍 rea**: *"추측하지 말고 코드로 증명하라"* — 코드 및 데이터 흐름의 증거 기반 역공학 분석.

---

## 7. 개발 규칙 및 검증 원칙

1. **정적 및 로컬 AST 검증 최우선**: 자의적 브라우저 자동화 테스트를 금지하고 `npx tsc --noEmit`(0 errors) 및 로컬 AST 검증 스크립트로 무결성을 확인합니다.
2. **원격 `git push` 자동 실행 금지**: 로컬 커밋(`git add`, `git commit`)까지만 수행하며, 원격 저장소 푸시는 사용자의 명시적 요청 시에만 실행합니다.
3. **네이티브 웹 표준 준수 & Clickable 링크**: 서드파티 패키지 추가 없이 React/Next.js/SVG/Vanilla CSS 표준으로 구현하며, 문서 및 응답 내 심볼·파일 참조 시 `file:///...` 마크다운 링크를 제공합니다.
