# ✍️ 콘텐츠 제작 및 커리큘럼 가이드 (Content Authoring)

이 문서는 **TypingCode V2**의 학습 커리큘럼 및 연습 콘텐츠를 제작, 확장, 검증하는 공식 표준 규격(SSOT)을 설명합니다.

> 📌 **참고 문서 안내**:
> - 파이썬 베이직(2-Part · 14섹션 · 87레벨 · 1,089문항) 및 심화(`py-advanced`) 경계 마스터 로드맵: [`docs/python_curriculum.md`](file:///d:/Projects/TypingCode_V2/docs/python_curriculum.md)
> - 언어별 트랙 및 런타임 로드맵: [`docs/LANGUAGE_ROADMAP.md`](file:///d:/Projects/TypingCode_V2/docs/LANGUAGE_ROADMAP.md)

---

## 1. V2 콘텐츠 관리 아키텍처 (Content Architecture)

TypingCode V2는 각 언어별로 독립된 TypeScript 모듈 파일(`src/data/curriculum/[language]/level[N].ts`)을 통해 커리큘럼을 관리합니다.

| 대상 | 파일 경로 | 설명 |
| :--- | :--- | :--- |
| **언어별 레벨 파일** | `src/data/curriculum/[language]/level[N].ts` | 각 레벨 문항(일반 13문항 / 종합 10문항), `unlockedBlocks`, 테스트 케이스 정의 |
| **언어 트랙 & 모듈** | [`src/lib/curriculum.ts`](file:///d:/Projects/TypingCode_V2/src/lib/curriculum.ts) | 13개 지원 언어의 트랙 정보, `totalLevels`, 스킬셋 메타데이터 |
| **챕터(섹션) & 태그** | [`src/lib/curriculumSections.ts`](file:///d:/Projects/TypingCode_V2/src/lib/curriculumSections.ts) | 섹션 그룹화(`CourseSection`) 및 레벨 카드 문법 태그(`syntaxTags`) 정의 |
| **연습 라운드 등록소** | [`src/lib/practiceData.ts`](file:///d:/Projects/TypingCode_V2/src/lib/practiceData.ts) | 레벨별 라운드 매핑(`PRACTICE_ROUNDS`) 및 `getPracticeRound` 제공 |
| **타입 스키마 정의** | [`src/lib/practiceTypes.ts`](file:///d:/Projects/TypingCode_V2/src/lib/practiceTypes.ts) | `PracticeRound`, `PracticeQuestion`, `ChallengeKind`, `TestCase` 인터페이스 |

---

## 2. 2-Part 나선형 커리큘럼 설계 원칙 (2-Part Spiral Curriculum)

입문자가 부가 메서드·보조 내장 함수의 홍수에 빠지지 않도록 커리큘럼을 **Part 1(핵심 개념 기초)**과 **Part 2(반복 복습 & 부가 기능 확장)**로 엄격히 분리합니다 (대표 구현: Python Basic `Lv 1 ~ Lv 87`).

1. **Part 1 — 핵심 개념 기초편 (예: Python `섹션 1 ~ 섹션 10`, `Lv 1 ~ Lv 63`, 789문항)**
   - **최소 필수 함수만 허용**: 부가 메서드나 편의 내장 함수를 **완전히 배제(0건)**하고 가장 본질적인 문법만으로 `입출력` → `변수·입력` → `불리언·조건문` → `반복문(for/while)` → `문자열 기초` → `리스트 기초` → `None·튜플·딕셔너리·집합 기초` → `함수(def) 기초` → `예외 처리(try-except) 기초` → `클래스(class) 기초`까지 언어의 전체 뼈대를 완주합니다.
2. **Part 2 — 반복 심화 & 부가 함수·기능 확장편 (예: Python `섹션 11 ~ 섹션 14`, `Lv 64 ~ Lv 87`, 300문항)**
   - Part 1에서 익힌 전 영역을 **처음부터 다시 2회독 나선형으로 복습**하면서, 부가 문자열·컬렉션 메서드, 2차원 리스트, 삼항 조건식·리스트 컴프리헨션, 실용 내장 함수(`abs`, `round`, `map`, `enumerate`, `zip`, `reversed`, `all`, `any`, `sorted`, `isinstance`, `ord`, `chr`), `*args`·`lambda`, `try-except-else-finally`·`raise`, `__str__`·단일 상속을 단계적으로 확장합니다.

---

## 3. V2 레벨 및 문항 구성 규격 (13-Step Regular / 10-Step Finale)

### 3.1 일반 학습 레벨 (`totalQuestions: 13`)
블록 조작으로 구조를 먼저 직관화한 직후 텍스트 타이핑으로 즉시 체화하도록 **홀수 블록 ⇄ 짝수 타이핑 1:1 교차 구조**와 **마무리 응용 3문항**으로 구성합니다.

| 단계 (`step`) | `type` | `kind` | 구성 및 역할 |
| :---: | :---: | :---: | :--- |
| **Step 1, 3, 5, 7, 9** | `'block'` | `'standard'` (생략 가능) | **사전 배치 블록 모드**: `targetCode` 기반으로 빈 슬롯이 뚫린 블록 골격이 캔버스에 제공되며 조작·조립으로 문법 구조를 습득 |
| **Step 2, 4, 6, 8, 10** | `'typing'` | `'fill_blank'` | **빈칸 채우기 타이핑**: 직전 홀수 블록 문제와 짝을 이루며 `templateCode`의 `§` 캡슐 빈칸을 직접 타이핑하여 완성 |
| **Step 11** | `'typing'` | `'fix_bug'` | **버그 1곳 정밀 수정**: 잘못된 연산자·키워드·인덱스 등 버그가 포함된 `templateCode`(그대로 실행 시 반드시 실패/오답)를 수정 |
| **Step 12** | `'typing'` | `'one_line'` | **한 줄 코드 추가**: 주어진 코드의 `§` 빈 줄 한 줄을 스스로 작성하여 완성 (프롬프트에 `'한 줄을 추가하여'` / `'한 줄의 코드를'` 포함) |
| **Step 13** | `'quiz'` | `'predict_output'` | **실행 결과 예측 4지선다**: `targetCode`를 읽고 실행 결과를 머릿속으로 추적해 `choices`(4개) 중 `correctChoiceIndex` 선택 |

#### 레벨 내 미시 나선형 복습 배치 (Intra-Level Micro-Spiral)
- **Steps 1 ~ 4**: 해당 레벨의 **신규 핵심 개념**만 순수하게 도입 (인지 부하 최소화).
- **Steps 5 ~ 8**: 신규 개념 + **직전 레벨·직전 섹션 개념** 결합.
- **Steps 9 ~ 13**: 신규 개념 + **이전 누적 핵심 개념**(`while`, `+=/-=/*=`, `float()/str()/bool()`, `f-string`, `list`, `tuple/None/dict/set`, `def/return`, `try-except`, `class`)을 골고루 순환 결합하여 망각을 방지.

### 3.2 섹션 종합 문제풀이 레벨 (`totalQuestions: 10`)
각 섹션의 마지막 레벨(예: Python `Lv 8, 15, 23, 31, 37, 43, 49, 54, 58, 63, 68, 76, 82, 87`)은 블록 보조 바퀴를 떼고 순수 타이핑·코드 독해로 섹션 전체와 누적 개념을 검증합니다 (`unlockedBlocks: []`).
- **Steps 1 ~ 3 (3문항)**: `type: 'typing'`, `kind: 'fill_blank'`
- **Steps 4 ~ 6 (3문항)**: `type: 'typing'`, `kind: 'fix_bug'`
- **Steps 7 ~ 8 (2문항)**: `type: 'typing'`, `kind: 'one_line'`
- **Steps 9 ~ 10 (2문항)**: `type: 'quiz'`, `kind: 'predict_output'`

### 3.3 도구함 해금 블록 키 (`unlockedBlocks`)
해당 레벨까지의 진도에 맞춰 필요한 블록 키만 선언합니다.

| 분류 | 블록 키 (`unlockedBlocks`에 지정할 문자열) | 비고 |
| :--- | :--- | :--- |
| **입출력·함수·연산** | `'print'`, `'input'`, `'type'`, `'math'`, `'method'`, `'range'`, `'map'`, `'sorted'`, `'iter'`, `'open'`, `'def'`, `'return'` | `'type'` 해금 시 `type`, `int`, `float`, `str`, `bool`, `isinstance`, `ord`, `chr` 드롭다운 활성화 |
| **제어·예외·클래스** | `'if'`, `'for_range'`, `'for_in'`, `'while'`, `'break'`, `'continue'`, `'try'`, `'raise'`, `'class'` | `'try'` 해금 시 `try-except-else-finally` 다단 블록 활성화; `'class'` 해금 시 내부에 `def` 메서드 스냅 가능 |
| **변수·컬렉션** | `'variable'`, `'list'`, `'tuple'`, `'dict'`, `'set'` | 사용자 변수 생성·재할당·복합 대입 및 컬렉션 블록 |

---

## 4. 학습 프롬프트(Prompt) 및 템플릿 작성 절대 원칙 — ★필수 준수★

모든 연습 문항은 단순 받아쓰기가 아닌 **자기주도 문제 풀이(Problem-Solving Format)**입니다.

### 4.1 🚫 정답 스포일러 원천 차단 (`fill_blank` & `fix_bug`)
1. **`fill_blank` / `fix_bug` 프롬프트 내 정답 노출 금지**:
   - 빈칸에 들어갈 키워드·연산자·메서드명이나 `fix_bug`에서 고쳐야 할 정답 코드를 `prompt_ko` / `prompt_en`에 그대로 적지 않습니다.
   - 구체적인 문법 키워드나 타건 안내는 반드시 팝오버 힌트(`hint_ko`, `hint_en`)로 분리합니다.
   - ❌ *나쁜 예*: `"틀린 곳의 skip을 pass로 수정하여 음수일 때 건너뛰게 해보세요."` (`pass` 정답 직접 노출)
   - ⭕ *좋은 예*: `"음수일 때 아무 동작 없이 넘어가려다 잘못된 단어를 적어 발생한 오류를 올바른 파이썬 키워드로 수정해보세요."`
2. **식별자·키워드 부분 쪼개기 빈칸 금지 (No Broken Partial Identifiers)**:
   - `pr§§§(10)`, `whi§§`, `ap§§§§`처럼 하나의 식별자나 키워드 중간만 `§`로 뚫지 않습니다. 키워드·변수명·연산자·리터럴 단위로 온전히 마스킹하며, `templateCode.length === targetCode.length` 및 줄바꿈 위치가 정확히 1:1 일치해야 합니다.
3. **모호하지 않고 간결한 프롬프트 (`<= 125자`)**:
   - 한국어 프롬프트(`prompt_ko`)는 **125자 이내**로 핵심 조건과 기대 출력을 명료하게 제시합니다.
   - 문자열 앞뒤에 눈에 보이지 않는 공백(`"Hello "` 등)을 강제해 학습자가 헷갈리는 출력을 피하고, 공백 유무가 직관적인 출력값을 설계합니다.

### 4.2 🏷️ 문제 유형별 표준 서두 규격
| 문제 유형 (`kind`) | 표준 표현 (한국어) | 표준 표현 (영문) |
| :--- | :--- | :--- |
| **블록 조립** (`block`) | `... 출력해보세요.` / `... 작성해보세요.` | `... and print ...` |
| **빈칸 채우기** (`fill_blank`) | **`빈칸을 채워 ...`** | `Fill in the blank(s) to ...` |
| **버그 수정** (`fix_bug`) | **`... 오류를 수정해보세요.`** / **`틀린 곳을 수정하여 ...`** | `Fix the bug/error so that ...` |
| **한 줄 추가** (`one_line`) | **`... 한 줄을 추가하여 ...`** / **`한 줄의 코드를 작성하여 ...`** | `Add/Write a single line ...` |
| **결과 예측** (`predict_output`) | **`다음 코드의 실행 결과로 알맞은 것을 골라보세요.`** | `Choose the exact output of the following code.` |

### 4.3 코드 가독성 및 실행 검증 규칙
- **한 줄 코드 길이**: 블록 캔버스와 타이핑 에디터 가독성을 위해 코드 단일 라인은 가급적 **40~52자 이내**로 간결하게 유지합니다.
- **실행 결정성**: `set` 다중 원소 등 출력 순서가 비결정적일 수 있는 자료구조는 `len()`, `sum()`, `in` 검사 또는 `sorted()` / `.sort()`를 거쳐 항상 결정적인 `expectedOutput`을 갖도록 작성합니다.
- **부동소수점 정합성**: 로컬 JS AST 실행기(`blockEvaluator.ts`)와 CPython 간 출력 표기가 1:1 일치하도록 테스트 케이스 입력값을 설계합니다.

---

## 5. 검증 게이트 (Verification Protocol)

신규 레벨을 작성하거나 수정한 뒤에는 반드시 아래 정적·실행 검증을 통과해야 합니다:

1. **TypeScript 정적 타입 검사 (필수)**:
   ```bash
   npx tsc --noEmit
   ```
2. **필수 자동 점검 체크리스트**:
   - [ ] [`curriculumSections.ts`](file:///d:/Projects/TypingCode_V2/src/lib/curriculumSections.ts)의 `levelNumber` 및 `title_ko`와 레벨 파일의 `roundNumber`·`title_ko`가 정확히 일치하는가?
   - [ ] [`practiceData.ts`](file:///d:/Projects/TypingCode_V2/src/lib/practiceData.ts) 및 [`curriculum.ts`](file:///d:/Projects/TypingCode_V2/src/lib/curriculum.ts)의 `totalLevels`에 누락 없이 등록되었는가?
   - [ ] 모든 문항의 `targetCode`가 [`blockEvaluator.ts`](file:///d:/Projects/TypingCode_V2/src/lib/blockEvaluator.ts) 실행 시 모든 `testCases`의 `expectedOutput`과 100% 일치하는가?
   - [ ] `fix_bug` 문항의 초기 `templateCode`를 그대로 실행했을 때 반드시 에러가 나거나 오답이 출력되는가?
   - [ ] 홀수 블록 문항의 `createInitialCanvasBlocks` 블록들이 해당 레벨의 `unlockedBlocks` 범위 내에 있으며, Part 1 레벨에 Part 2 전용 문법이 섞이지 않았는가?
