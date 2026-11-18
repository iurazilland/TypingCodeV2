# ✍️ 콘텐츠 제작 및 커리큘럼 가이드 (Content Authoring)

이 문서는 **TypingCode V2**의 학습 커리큘럼 및 연습 콘텐츠를 제작, 확장, 검증하는 공식 표준 규격(SSOT)을 설명합니다.

> 📌 **참고 문서 안내**:
> - 파이썬 베이직(2-Part · 14섹션 · 113레벨 · 1,625문항) 레벨별 세부 문제 설계 및 누적 복습 마스터 로드맵: [`docs/python_curriculum.md`](file:///d:/Projects/TypingCode_V2/docs/python_curriculum.md)
> - 언어별 트랙 및 런타임 로드맵: [`docs/LANGUAGE_ROADMAP.md`](file:///d:/Projects/TypingCode_V2/docs/LANGUAGE_ROADMAP.md)

---

## 1. V2 콘텐츠 관리 아키텍처 (Content Architecture)

TypingCode V2는 각 코스 모듈별로 독립된 TypeScript 모듈 파일(`src/data/curriculum/[course]/level[N].ts`, 예: `python_basic`)을 통해 커리큘럼을 관리합니다.

| 대상 | 파일 경로 | 설명 |
| :--- | :--- | :--- |
| **코스별 레벨 파일** | `src/data/curriculum/[course]/level[N].ts` | 각 레벨 문항(일반 **15문항** / 종합 **10문항**), `unlockedBlocks`, 테스트 케이스 정의 |
| **언어 트랙 & 모듈** | [`src/lib/curriculum.ts`](file:///d:/Projects/TypingCode_V2/src/lib/curriculum.ts) | 13개 지원 언어의 트랙 정보, `totalLevels`, 스킬셋 메타데이터 |
| **챕터(섹션) & 태그** | [`src/lib/curriculumSections.ts`](file:///d:/Projects/TypingCode_V2/src/lib/curriculumSections.ts) | 섹션 그룹화(`LevelSection`) 및 레벨 카드 문법 태그(`syntaxTags`) 정의 |
| **연습 라운드 등록소** | [`src/lib/practiceData.ts`](file:///d:/Projects/TypingCode_V2/src/lib/practiceData.ts) | 레벨별 라운드 매핑(`PRACTICE_ROUNDS`) 및 `getPracticeRound` 제공 |
| **타입 스키마 정의** | [`src/lib/practiceTypes.ts`](file:///d:/Projects/TypingCode_V2/src/lib/practiceTypes.ts) | `PracticeRound`, `PracticeQuestion`, `ChallengeKind`, `TestCase` 인터페이스 |

---

## 2. 2-Part 나선형 커리큘럼 & 다중 계층 누적 복습 원칙 (Cumulative Spiral Architecture)

입문자가 한 레벨에서 과도한 개념에 치이지 않고 천천히 앞 내용을 체화하며 나아갈 수 있도록, **한 레벨당 핵심 개념을 1~2개로 잘게 쪼개고(총 113레벨)**, **전 구간 누적 복습**이 매 레벨마다 자동으로 이루어지도록 설계합니다.

1. **Part 1 — 핵심 개념 기초편 (Python `섹션 1 ~ 섹션 10`, `Lv 1 ~ Lv 82`, 1,180문항)**
   - 부가 메서드나 편의 내장 함수를 배제하고 가장 본질적인 필수 문법만으로 `기초 출력·연산(Sec 1)` ➔ `주석·변수·사용자 입력(Sec 2)` ➔ `불리언·조건문(Sec 3)` ➔ `반복문(Sec 4)` ➔ `리스트 기초(Sec 5)` ➔ `문자열 기초(Sec 6)` ➔ `튜플·None·딕셔너리·집합 기초(Sec 7)` ➔ `함수(def) 기초(Sec 8)` ➔ `클래스(class) 기초(Sec 9)` ➔ `예외 처리(try-except) 기초(Sec 10)`까지 언어의 전체 뼈대를 완주합니다.
   - **시퀀스·구조화 연결 최적화**:
     - `리스트(Sec 5)` ➔ `문자열(Sec 6)`: 시각적으로 요소가 구분되는 리스트에서 `len()`, 인덱싱(`[0]`, `[-1]`), 슬라이싱(`[a:b]`), `in`, `for` 순회를 먼저 익힌 뒤 문자열에서 즉시 복습하고 `.split()`으로 리스트와 재연결합니다.
     - `함수(Sec 8)` ➔ `클래스(Sec 9)` ➔ `예외 처리(Sec 10)`: `def`, 매개변수, `return` 학습 직후 클래스의 `__init__`과 메서드로 직결하고, 마지막 섹션에서 앞선 모든 런타임 에러를 `try-except`로 방어하며 Part 1을 마무리합니다.
2. **Part 2 — 반복 심화 & 부가 함수·기능 확장편 (Python `섹션 11 ~ 섹션 14`, `Lv 83 ~ Lv 113`, 445문항)**
   - Part 1의 순서를 그대로 대칭시켜 **2회독 나선형 복습**을 진행하면서 `컬렉션 심화·복사·컴프리헨션(Sec 11)` ➔ `문자열 심화 메서드·서식(Sec 12)` ➔ `실용 내장 함수·lambda·math 모듈(Sec 13)` ➔ `클래스 상속(super)·예외 확장(else/finally/raise)·파이널 마스터(Sec 14)`를 완성합니다.

---

## 3. V2 레벨 및 문항 구성 규격 (15-Step Regular / 10-Step Finale)

### 3.1 일반 학습 레벨 (`totalQuestions: 15`)
전반부 **8문항(4:4 블록·빈칸 교차)**으로 핵심 개념을 부담 없이 익히고, 후반부 **7문항(복합 빈칸 1 + 오류 수정 2 + 한 줄 완성 2 + 코드 독해 2)**에서 **이전 모든 섹션·레벨의 누적 개념과 현재 개념을 종합 복습**합니다.

| 구간 | 단계 (`step`) | `type` | `kind` | 빈칸/제약 규격 | 구성 및 교육적 역할 |
| :--- | :---: | :---: | :---: | :--- | :--- |
| **전반부**<br>(4:4 개념 학습)<br>**8문항** | **Step 1, 3, 5, 7** | `'block'` | `'standard'` | 블록 조립 | **4단계 세부 개념 블록 조립**:<br>• `Pair 1 (1~2)`: 신규 개념 가장 쉬운 기본형<br>• `Pair 2 (3~4)`: 신규 개념 두 번째 형태/변형<br>• `Pair 3 (5~6)`: 신규 개념 + 직전 레벨 개념 결합<br>• `Pair 4 (7~8)`: 신규 개념 + 이전 섹션 누적 개념 결합 |
| | **Step 2, 4, 6, 8** | `'typing'` | `'fill_blank'` | **단일 빈칸 (1곳)** | **핵심 포인트 단일 빈칸**: 직전 홀수 블록 문제와 짝을 이루며, **이번 레벨에서 배우는 가장 중요한 핵심 포인트 딱 1곳만** `§` 빈칸으로 뚫어 인지 부하 없이 즉각 체화 |
| **후반부**<br>(누적 복습 문제풀이)<br>**7문항** | **Step 9** | `'typing'` | `'fill_blank'` | **복합 빈칸 (2~3곳)** | **누적+현재 결합 복합 빈칸 (1문항)**: **빈칸을 2~3곳** 뚫어 **[이전에 배운 누적 개념 1~2곳] + [현재 레벨 개념 1곳]**을 동시에 채우는 종합 빈칸 문제 |
| | **Step 10 ~ 11** | `'typing'` | `'fix_bug'` | 초기 코드 실행 시 오답/에러 필수 | **오류 수정 (2문항)**:<br>• `Step 10`: 현재 레벨 개념의 핵심 문법 오류 수정 (이전 개념 문맥 포함)<br>• `Step 11`: **이전 누적 개념의 함정 + 현재 레벨 개념**이 결합된 코드의 버그 수정 |
| | **Step 12 ~ 13** | `'typing'` | `'one_line'` | 한 줄 전체 `§` 마스킹 | **한 줄 코드 완성 (2문항)**:<br>• `Step 12`: 이전 개념과 연결된 코드에서 현재 레벨의 핵심 한 줄 작성<br>• `Step 13`: **이전 누적 개념 + 현재 레벨 개념을 한 줄에 결합**한 응용 코드 작성 |
| | **Step 14 ~ 15** | `'quiz'` | `'predict_output'` | **🚫 `input()` 사용 절대 금지** | **순수 코드 독해 4지선다 (2문항)**:<br>• 외부 입력(`input()`) 없이 **변수 리터럴 대입만으로 100% 자급자족**되는 코드로 구성<br>• `Step 14`: 현재 섹션 누적 개념 + 현재 레벨 개념 결합 코드 독해<br>• `Step 15`: **초반~직전 섹션의 주요 누적 개념 + 현재 레벨 개념**을 총동원한 종합 코드 독해 |

#### 🔄 다중 계층 누적 복습 법칙 (Multi-Layered Cumulative Review Rule)
내부 문제를 구성할 때 **단순히 직전 레벨(`Lv.N-1`)의 개념만 넣는 것을 금지**합니다. 뒤에 가서 개념이 복잡해지더라도 앞에서 배운 기초가 몸에 배어 자연스럽게 읽히도록 다음 **3계층 복습 원리**를 모든 레벨의 `Pair 3~4 (Steps 5~8)` 및 `Steps 9~15`에 적용합니다:
1. **근거리 복습 (Near Review)**: 같은 섹션 내 앞선 레벨들의 개념 (예: `+=` 배울 때 변수 재할당·주석 결합)
2. **중거리 복습 (Mid Review)**: 직전 1~2개 섹션의 핵심 문법 (예: 조건문 배울 때 `input("문구")`, `int()`, `+=`, `//, %` 결합)
3. **원거리 상시 복습 (Anchor Review)**: 섹션 1~2에서 배운 기본기(`//, %, **`, 괄호 우선순위, 문자열 `+`/`*`, `\n`/`\t`, `sep`/`end`, 복합 대입 `+=`, 다중 할당 `a, b = b, a`)를 후반부(리스트, 문자열, 딕셔너리, 함수, 클래스, 예외 처리) 문제의 출력 서식과 연산 로직에 끊임없이 재등장시킵니다.

---

### 3.2 섹션 종합 문제풀이 레벨 (`totalQuestions: 10`)
각 섹션의 마지막 레벨(Python `Lv 10, 20, 30, 40, 48, 56, 64, 71, 77, 82, 92, 99, 107, 113`)은 블록 없이 순수 타이핑·코드 독해로 해당 섹션 전체와 이전 모든 섹션의 누적 개념을 검증합니다 (`unlockedBlocks: []`).
- **Steps 1 ~ 3 (3문항)**: `type: 'typing'`, `kind: 'fill_blank'` (**빈칸 2~3곳 복합 빈칸**)
- **Steps 4 ~ 6 (3문항)**: `type: 'typing'`, `kind: 'fix_bug'` (오류 수정)
- **Steps 7 ~ 8 (2문항)**: `type: 'typing'`, `kind: 'one_line'` (한 줄 코드 완성)
- **Steps 9 ~ 10 (2문항)**: `type: 'quiz'`, `kind: 'predict_output'` (**`input()` 없는 순수 코드 독해**)

---

### 3.3 도구함 해금 블록 키 (`unlockedBlocks`)
해당 레벨까지의 진도에 맞춰 필요한 블록 키만 선언합니다.
- **주석 블록(`'comment'`) 상시 해금 규칙**: 주석을 처음 학습하는 레벨(**Lv.11**)부터는 이후 모든 블록 활성 스테이지에서 `'comment'` 블록이 블록 모음창 **최상단**에 기본 배치됩니다.

| 분류 | 블록 키 (`unlockedBlocks`에 지정할 문자열) | 비고 |
| :--- | :--- | :--- |
| **주석 (최상단 고정)** | `'comment'` | Lv.11(주석 학습) 이후 모든 일반 레벨에서 최상단 기본 활성화 |
| **입출력·함수·연산** | `'print'`, `'input'`, `'type'`, `'math'`, `'method'`, `'range'`, `'map'`, `'sorted'`, `'iter'`, `'open'` | `'type'` 해금 시 `type`, `int`, `float`, `str`, `bool`, `isinstance`, `ord`, `chr` 드롭다운 활성화 |
| **클래스 / 함수 정의** | `'def'`, `'return'`, `'class'` | `+ 함수 / 클래스 생성` 모달 및 `def`, `return`, `class` 블록 활성화 |
| **제어·예외** | `'if'`, `'for_range'`, `'for_in'`, `'while'`, `'break'`, `'continue'`, `'try'`, `'raise'` | `'try'` 해금 시 `try-except-else-finally` 다단 블록 활성화 |
| **변수·컬렉션** | `'variable'`, `'list'`, `'tuple'`, `'dict'`, `'set'` | 사용자 변수 생성·재할당·복합 대입 및 컬렉션 블록 |

---

## 4. 학습 프롬프트(Prompt), 힌트(Hint) 및 템플릿 작성 절대 원칙 — ★필수 준수★

모든 연습 문항은 단순 받아쓰기가 아닌 **자기주도 문제 풀이(Problem-Solving Format)**입니다.

### 4.1 🚫 프롬프트 규격 및 정답 스포일러 원천 차단
1. **블록 조립(`block`) 프롬프트**:
   - 어떻게 블록을 조립해 어떤 결과를 만들지 자연스럽고 간결한 한 문장으로 안내합니다.
2. **빈칸(`fill_blank`) & 오류 수정(`fix_bug`) 프롬프트 내 정답 노출 금지**:
   - 빈칸에 들어갈 키워드·연산자·메서드명이나 `fix_bug`에서 고쳐야 할 정답 코드를 `prompt_ko` / `prompt_en`에 그대로 적지 않습니다.
3. **식별자·키워드 부분 쪼개기 빈칸 금지 (No Broken Partial Identifiers)**:
   - `pr§§§(10)`, `whi§§`, `ap§§§§`처럼 하나의 식별자나 키워드 중간만 `§`로 뚫지 않습니다. 키워드·변수명·연산자·리터럴 단위로 온전히 마스킹하며, `templateCode.length === targetCode.length` 및 줄바꿈 위치가 정확히 1:1 일치해야 합니다.
4. **코드 독해(`predict_output`) 문항 내 `input()` 절대 금지**:
   - Step 14, Step 15(및 종합 레벨의 Step 9, Step 10) `predict_output` 문항에서는 터미널 입력 예제를 따로 찾아봐야 하는 `input()`을 절대 넣지 않고, 변수에 값을 직접 대입(`n = 15`, `s = "py"` 등)하여 코드창만 읽고 즉시 풀 수 있도록 작성합니다.

### 4.2 💡 힌트(`hint_ko` / `hint_en`) 작성 절대 원칙 — 1문장 간결성 & 유추 유도
1. **1문장 간결성**: 모든 힌트는 군더더기 없이 **핵심 단서 1문장**으로 명확하게 작성합니다.
2. **초반/일반 레벨 vs 종합 레벨 차별화**:
   - 일반 레벨의 초반부(1~8번)에서는 초보자가 막히지 않도록 직관적인 원리와 작성 단서를 친절히 안내합니다.
   - 후반부(9~15번) 및 섹션 종합 레벨에서는 정답 코드를 직접 불러주지 않고 개념 원리·우선순위·자료형 특성으로 스스로 추론하도록 유도합니다.

---

## 5. 검증 게이트 (Verification Protocol)

신규 레벨을 작성하거나 수정한 뒤에는 반드시 아래 정적·실행 검증을 통과해야 합니다:

1. **TypeScript 정적 타입 검사 (필수)**:
   ```bash
   npx tsc --noEmit
   ```
2. **필수 자동 점검 체크리스트**:
   - [ ] 일반 레벨은 정확히 **15문항**(`block/fill_blank` 4쌍 8문항 + 복합 `fill_blank` 1문항 + `fix_bug` 2문항 + `one_line` 2문항 + `predict_output` 2문항), 종합 레벨은 정확히 **10문항**인가?
   - [ ] Step 2, 4, 6, 8의 `fill_blank`는 **빈칸이 1곳**이고, Step 9의 `fill_blank`는 **빈칸이 2~3곳(이전 개념 + 현재 개념)**인가?
   - [ ] Step 14, 15(종합 레벨 Step 9, 10) `predict_output`의 `targetCode`에 `input(`이 **0건**인가?
   - [ ] 직전 레벨 개념만 편중되지 않고 이전 섹션·레벨들의 누적 개념이 후반부(Steps 9~15)에 고르게 결합되어 있는가?
   - [ ] 모든 문항의 `targetCode` 실행 결과가 `testCases`의 `expectedOutput`과 100% 일치하며, `templateCode.length === targetCode.length`를 만족하는가?
