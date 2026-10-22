# 📘 TypingCode V2 프로젝트 컨텍스트 및 개발 가이드 (Project Context)

이 문서는 **TypingCode V2** 프로젝트의 아키텍처, 데이터 흐름, 핵심 로직, 그리고 개발 컨벤션을 상세히 기술합니다. 새로운 AI Agent나 개발자는 작업을 시작하기 전에 반드시 이 문서를 정독해야 합니다.

---

## 1. 프로젝트 개요 (Overview)
- **Goal**: 블록 코딩(Scratch-style Visual Block)과 텍스트 타이핑(Text Coding)의 가교 역할을 하는 듀얼 학습 플랫폼 및 실시간 다국어 코드 실행 환경(SaaS) 제공.
- **Core Tech**: Next.js 14 (App Router), React 18, TypeScript, Zustand, Wandbox API (Multi-language Sandbox), Vanilla CSS (High Performance).
- **Key Features**:
  - **Dual Practice Mode**: 
    - **Visual Block Mode**: Scratch/Blockly 스타일의 블록 조립형 코딩 (C-shape, E-shape, Statement, Method 체이닝 블록 지원, 자석 스냅 & 체인 드래그).
    - **Typing Code Mode**: 실시간 WPM, 정확도, 오타 감지 및 가상 키보드 가이드를 결합한 고성능 타이핑 연습.
  - **Multi-Language Sandbox**: Python, C, C++, JavaScript, Java, Go, Rust, C#, Swift, SQL, Web(HTML/CSS) 등 **총 11개 언어**의 실시간 컴파일/실행 지원.
  - **Insight & Curriculum**: 체계적인 언어 트랙(11개 언어, 입문/중급/심화) 및 단계별 인사이트 팁 제공.

---

## 2. 기술 스택 상세 (Tech Stack Details)

### 2.1 Frontend
- **Framework**: Next.js 14.2.23 (App Router)
- **Library**: React 18.3.1, TypeScript 5.4.5
- **Styling**: Vanilla CSS (`src/styles/globals.css`, CSS Scopes) - *외부 무거운 CSS 프레임워크 배제, 네이티브 웹 표준 기반 극대화*
- **Icons**: Lucide React (`lucide-react`)
- **State Management**: Zustand 4.5.2
  - `useTypingStore` (`src/lib/store.ts`): 타이핑 진행률, WPM, 오타수, 정확도, 스텝 전환, 인사이트 락 관리.
  - React Context: `LanguageContext` (`src/lib/LanguageContext.tsx`): 전역 언어 설정 및 다국어 지원.
  - LocalStorage: 브라우저 로컬 저장소를 활용한 클라이언트 사이드 진도율 및 세션 영속화.

### 2.2 Execution Runtime (Code Sandbox)
- **Multi-language Cloud Sandbox**: Wandbox API (`https://wandbox.org/api/compile.json`)
  - `src/lib/runner.ts`의 `executeCode` 함수를 통해 11개 언어의 코드를 컴파일하고 `stdout`, `stderr`, `exitCode`, 실행 시간을 반환.
- **Web Execution**: `WebPreview.tsx`
  - HTML/CSS/JS 코드를 `iframe`의 `srcdoc` 샌드박스로 실시간 렌더링.

---

## 3. 디렉토리 구조 (Directory Structure)

```
TypingCode_V2/
├── .agents/skills/         # 워크스페이스 장착 하네스 (ponytail, superpowers, caveman, rea)
├── docs/                   # 프로젝트 공식 기술 문서
│   ├── PROJECT_CONTEXT.md          # 본 문서 (V2 컨텍스트 및 아키텍처)
│   ├── SYSTEM_DESIGN.md            # 시스템 상세 설계 및 블록/스냅 엔진 규격
│   ├── visualizer-system.md        # 블록 코딩 및 UI 비주얼 인터랙션 사양서
│   ├── CONTENT_AUTHORING.md        # 커리큘럼 및 연습 데이터 작성 가이드
│   ├── LANGUAGE_ROADMAP.md         # 11개 지원 언어 및 런타임 로드맵
│   ├── LEVEL_VERIFICATION_REPORT.md# 레벨/커리큘럼 검증 보고서
│   ├── html-css-js-course-design.md# 웹(HTML/CSS/JS) 코스 설계서
│   └── content/                    # [보존] 기획/레벨 참고용 원천 데이터
├── public/                 # 정적 에셋 (아이콘, 폰트, 파비콘)
├── src/
│   ├── app/
│   │   ├── layout.tsx              # 루트 레이아웃 (Navbar, LanguageProvider 포함)
│   │   ├── page.tsx                # 메인 랜딩 페이지 (통합 히어로, 샌드박스, 코스 카드)
│   │   ├── practice/
│   │   │   └── [language]/
│   │   │       └── [level]/        # 블록 코딩 & 타이핑 코딩 핵심 연습 페이지 (page.tsx)
│   │   ├── challenges/             # 챌린지 문제 모드
│   │   ├── compiler/               # 11개 언어 통합 온라인 컴파일러/샌드박스
│   │   ├── languages/              # 언어별 트랙 탐색 페이지
│   │   ├── learn/                  # 코스 학습 대시보드
│   │   ├── problems/               # 문제 풀이 모음
│   │   └── ranking/                # 랭킹/대시보드
│   ├── components/                 # 공용 UI 컴포넌트
│   │   ├── AuthModal.tsx           # 인증 모달
│   │   ├── HeroPlayground.tsx      # 메인 히어로 인터랙티브 코드/터미널 플레이그라운드
│   │   ├── InsightCard.tsx         # 단계별 학습 인사이트 팁 카드
│   │   ├── LanguageIcon.tsx        # 언어별 SVG/뱃지 아이콘
│   │   ├── Navbar.tsx              # 상단 네비게이션 바
│   │   ├── Terminal.tsx            # 터미널 콘솔 출력 컴포넌트
│   │   ├── UnifiedHeroCard.tsx     # 메인 배너 카드
│   │   ├── VirtualKeyboard.tsx     # 타이핑 모드 가상 키보드 가이드
│   │   └── WebPreview.tsx          # 실시간 웹 iframe 뷰포트
│   ├── lib/                        # 비즈니스 로직, 데이터, 런타임
│   │   ├── content.ts              # 기본 레벨 콘텐츠
│   │   ├── curriculum.ts           # 11개 언어 전체 커리큘럼 트랙 및 모듈 정의
│   │   ├── LanguageContext.tsx     # 언어 선택 컨텍스트
│   │   ├── practiceData.ts         # 연습 라운드/블록/문항 데이터 (Duolingo/MakeCode 스타일)
│   │   ├── practiceTypes.ts        # 블록/연습 전용 타입 정의
│   │   ├── runner.ts               # Wandbox 기반 11개 언어 실시간 코드 실행기
│   │   ├── store.ts                # Zustand 타이핑 스토어
│   │   └── types.ts                # 공통 타입 (SupportedLanguage, LevelData 등)
│   └── styles/
│       └── globals.css             # 전역 스타일 및 디자인 토큰
├── package.json
└── tsconfig.json
```

---

## 4. 핵심 아키텍처 및 로직 상세 (Deep Dive)

### 4.1 블록 코딩 & 자석 스냅 엔진 (Block Snapping Engine)
`src/app/practice/[language]/[level]/page.tsx`에 내장된 Scratch 규격의 시각적 블록 조립 시스템입니다.
1. **블록 유형**:
   - **Statement Block**: 일반 명령문 블록 (상단 홈 Notch + 하단 돌출 탭 Tab).
   - **C-Shape Block (`c-shape-block`)**: 반복문(`for`, `while`) 및 함수 정의(`def`)를 감싸는 ㄷ자형 블록. 내부 입구(Mouth)에 다른 블록들이 중첩 삽입됨.
   - **E-Shape Block (`e-shape-block`)**: 다단 조건문(`if`, `elif`, `else`) 블록. 여러 개의 분기 Mouth를 가짐.
   - **Method Block (`method-block`)**: 우측으로 가로 체이닝 결합되는 메서드 블록 (예: `.split()`).
2. **자석 스냅 (Magnetic Snapping - `findSnapTarget`)**:
   - **하단/상단 스냅**: 기존 블록의 하단 요철 근처로 드래그 시 자석처럼 인디케이터가 뜨며 자동 부착.
   - **ㄷ블록 입구 스냅 (Mouth Snap)**: ㄷ자 블록의 안쪽 공간으로 드래그 시, 내부 인덱스를 자동 계산하여 노란색 삽입선 인디케이터 표시 후 체인에 삽입.
   - **메서드 우측 스냅**: 부모 블록의 우측 탭에 직결합.
   - **체인 드래그 (Stack Chain Dragging)**: 블록을 잡으면 연결된 모든 하위 자손 블록(`getDescendantBlockIds`)이 일체로 이동.
3. **블록 렌더링 표준**:
   - 요철 소실 및 테두리 덮어쓰기 방지를 위한 브라우저 네이티브 SVG `<path>` 외곽선 렌더링.

### 4.2 텍스트 타이핑 엔진 (Typing Engine)
- **Zustand 기반 고성능 반응성**: `src/lib/store.ts`의 `useTypingStore`를 통해 한 타마다 WPM(분당 타자수), 오타수, 정확도를 실시간 계산.
- **가상 키보드 가이드**: `VirtualKeyboard.tsx`와 연동하여 다음에 눌러야 할 키를 시각적으로 하이라이트.

### 4.3 멀티 언어 클라우드 샌드박스 (`runner.ts`)
Wandbox 오픈 컴파일러 API와 직접 통신하여 서버 구축 비용 없이 11개 언어 샌드박스 런타임 제공:
- Python (`cpython-3.10.15`), C (`gcc-13.2.0-c`), C++ (`gcc-13.2.0`), JavaScript (`nodejs-20.12.2`), Java (`openjdk-jdk-22+36`), Go (`go-1.23.2`), Rust (`rust-1.82.0`), C# (`mono-6.12.0.199`), Swift (`swift-6.0.1`), SQL (`sqlite-3.46.1`), Web (`iframe WebPreview`).

---

## 5. 데이터 관리 전략 (Data Management)

- **커리큘럼 메타데이터**: `src/lib/curriculum.ts` (SSOT)
  - 11개 언어 트랙, 각 트랙별 모듈(베이직, 어드밴스, 데이터, 인공지능 등), 난이도, 태그라인 통합 정의.
- **연습 및 블록 문제 데이터**: `src/lib/practiceData.ts`
  - 각 레벨/라운드별 질문(`PracticeQuestion`), 정답 코드(`targetCode`), 기대 출력(`expectedOutput`), 힌트, 제공 블록 조각(`availableBlocks`).
- **기획 및 레벨 참고용 원천 데이터**: `docs/content/`
  - 향후 신규 레벨 기획 및 참고용으로 보존.

---

## 6. 에이전트 하네스 시스템 (Harness System)

본 워크스페이스는 `.agents/skills/`에 4대 핵심 엔지니어링 하네스를 항시 탑재하고 있습니다:
1. **🐴 ponytail**: *"가장 좋은 코드는 작성하지 않은 코드다"* — YAGNI, 네이티브 웹 표준 우선, 불필요한 의존성 원천 차단.
2. **🦸 superpowers**: *"의지보다 규율이 강하다"* — 체계적 계획 및 정적 검증(`npx tsc --noEmit`) 게이트 준수.
3. **🦴 caveman**: *"토큰 낭비 제로, 핵심만 직격"* — 군더더기 없는 초고밀도 커뮤니케이션.
4. **🔍 rea**: *"추측하지 말고 코드로 증명하라"* — 코드 및 아키텍처의 철저한 역공학 기반 작업.

---

## 7. 개발 규칙 및 검증 원칙

1. **정적 검사 최우선**: 브라우저 자동화 도구 대신 `npx tsc --noEmit`을 통한 무오류(0 errors) 정적 검증을 기본으로 합니다.
2. **네이티브 웹 표준 준수**: 불필요한 서드파티 패키지 설치를 지양하고 React/Next.js/SVG/Vanilla CSS의 기본 기능을 최우선 활용합니다.
3. **clickable 마크다운 링크**: 파일 경로 언급 시 GitHub 스타일의 마크다운 링크(`file:///...`)를 제공합니다.
