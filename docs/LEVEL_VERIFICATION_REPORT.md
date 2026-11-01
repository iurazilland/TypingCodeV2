# 📋 TypingCode V2 커리큘럼 및 기능 검증 보고서 (Verification Report)

본 문서는 **TypingCode V2**의 13개 언어/트랙 커리큘럼, 듀얼 연습 모드(시각적 블록 스튜디오 & 타이핑/퀴즈), 그리고 0ms 로컬 파이썬 AST 실행기 및 멀티 언어 런타임의 무결성을 점검·기록하는 공식 검증 보고서입니다.

---

## 1. 종합 검증 요약 (Executive Summary)

- **타입스크립트 정적 검사**: `npx tsc --noEmit` 통과 (**0 errors, 100% Type-Safe**).
- **Python Basic (`py-basic`) 2-Part · 14섹션 · 87레벨 · 1,089문항 전수 검증 통과**:
  - **베이스라인 보존**: `Lv 1 ~ Lv 15` (`level1.ts` ~ `level15.ts`, 섹션 1~2, 189문항) 기존 검증 데이터 100% 무변경 보존.
  - **Part 1 — 핵심 개념 기초편 (`섹션 1 ~ 섹션 10`, `Lv 1 ~ Lv 63`, 789문항)**: 필수 최소 함수·문법만 사용하여 `print`·연산자·변수·`input`·`bool`/`if`·`for`/`while`·`str`·`list`·`None`/`tuple`/`dict`/`set`·`def`·`try-except` 기초·`class` 기초까지 완주 (**Part 2 부가 함수/심화 문법 혼입 0건 검증 완료**).
  - **Part 2 — 반복 심화 & 부가 함수·기능 확장편 (`섹션 11 ~ 섹션 14`, `Lv 64 ~ Lv 87`, 300문항)**: 문자열 부가 메서드·서식(`:.2f`, `:,`, `[::-1]`, `ord`, `chr`) → 컬렉션 부가 메서드·`sorted()`·2차원 리스트·집합 연산자·삼항 연산자·리스트 컴프리헨션 → 실용 내장 함수(`abs`, `round`, `map`, `enumerate`, `zip`, `reversed`, `all`, `any`, `isinstance`)·`*args`·`lambda` → `try-except-else-finally`·`raise`·`__str__`·단일 상속(`class Child(Parent):`) 및 파이널 마스터까지 2회독 나선형 복습 완주.
  - **누적 나선형 복습 매트릭스 (Cumulative Spiral Review)**: 후속 섹션 전반에 걸쳐 `+=/-=/*=`(198회), `float/str/bool`(58회), `if/elif/else`(230회), `for`(191회), `while`(57회), `f-string`(176회), `list`(289회), `dict/set/tuple/None`(87회), `def`(149회), `try-except`(47회), `class`(52회) 등 총 **1,534건**의 교차 섹션 누적 복습 분포 검증 통과.
  - **교육학 및 프롬프트 적합성 감사 (`Lv 16 ~ Lv 87`, 900문항)**: `fix_bug`/`fill_blank` 정답 노출 `0건`, 식별자 부분 쪼개기 빈칸 `0건`, 모호한 빈칸 `0건`, 과장 길이 프롬프트(`>125자`) `0건`, 혼동 공백 리터럴 `0건`, `one_line` 한 줄 안내 누락 `0건`, 블록 초기 골격 불일치 `0건`.
- **0ms 로컬 파이썬 AST 엔진 ([`blockEvaluator.ts`](file:///d:/Projects/TypingCode_V2/src/lib/blockEvaluator.ts)) & 블록 스튜디오 확장**:
  - 외부 패키지 추가 없이(`0 npm dependencies`) `try / except [Type | (T1, T2) [as e]] / else / finally`, `raise`, `class Name[(Parent)]:`, `__init__`, `self` 속성 읽기/쓰기/복합 대입, 인스턴스 메서드, `__str__`, 단일 상속 및 메서드 오버라이딩, `isinstance()`, `ord()`, `chr()`, `.isalpha()`, `dict(k=v)`, 삼항 조건식, 리스트 컴프리헨션(격리 스코프), `*args`, `lambda`, `sorted/min/max(..., key=...)`, `f-string` 서식(`:.2f`, `:,`, `:,.2f`) 완벽 지원.
  - 블록 캔버스([`CanvasBlockItem.tsx`](file:///d:/Projects/TypingCode_V2/src/components/practice/CanvasBlockItem.tsx), [`page.tsx`](file:///d:/Projects/TypingCode_V2/src/app/practice/%5Blanguage%5D/%5Blevel%5D/page.tsx))에 `class` C-블록(내부 `def` 메서드 스냅 허용, `class` 중첩은 최상위 가드 유지), `try-except-else-finally` 다단 분기 E-블록, `raise` 블록, 그리고 `isinstance`/`ord`/`chr` 드롭다운 추가.
- **`/languages` 진척도 실데이터 연동 ([`languages/page.tsx`](file:///d:/Projects/TypingCode_V2/src/app/languages/page.tsx))**: 하드코딩되어 있던 코스 진척도(`'py-basic': 9` 등)를 제거하고 브라우저 `localStorage` (`unlocked_step_*`) 실제 클리어 레벨 집계와 동기화.

---

## 2. Python Basic (`py-basic`) 14섹션 · 87레벨 · 1,089문항 세부 검증 현황

| 구분 | 섹션 | 레벨 범위 | 일반 레벨(13Q) | 종합 레벨(10Q) | 총 문항 수 | 검증 상태 |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: |
| **Part 1** | 섹션 1: 기초 출력과 연산 | `Lv 1 ~ 8` | 7 (`Lv 1~7`) | 1 (`Lv 8`) | 101 | ✅ 통과 (베이스라인 보존) |
| **Part 1** | 섹션 2: 변수, 자료형과 사용자 입력 | `Lv 9 ~ 15` | 6 (`Lv 9~14`) | 1 (`Lv 15`) | 88 | ✅ 통과 (베이스라인 보존) |
| **Part 1** | 섹션 3: 불리언, 논리 연산과 조건문 기초 | `Lv 16 ~ 23` | 7 (`Lv 16~22`) | 1 (`Lv 23`) | 101 | ✅ 통과 (순수성 100%) |
| **Part 1** | 섹션 4: 반복문과 흐름 제어 기초 | `Lv 24 ~ 31` | 7 (`Lv 24~30`) | 1 (`Lv 31`) | 101 | ✅ 통과 (순수성 100%) |
| **Part 1** | 섹션 5: 문자열 필수 기초 | `Lv 32 ~ 37` | 5 (`Lv 32~36`) | 1 (`Lv 37`) | 75 | ✅ 통과 (순수성 100%) |
| **Part 1** | 섹션 6: 리스트(List) 필수 기초 | `Lv 38 ~ 43` | 5 (`Lv 38~42`) | 1 (`Lv 43`) | 75 | ✅ 통과 (순수성 100%) |
| **Part 1** | 섹션 7: `None`, 튜플, 딕셔너리, 집합 필수 기초 | `Lv 44 ~ 49` | 5 (`Lv 44~48`) | 1 (`Lv 49`) | 75 | ✅ 통과 (순수성 100%) |
| **Part 1** | 섹션 8: 함수(`def`) 필수 기초 | `Lv 50 ~ 54` | 4 (`Lv 50~53`) | 1 (`Lv 54`) | 62 | ✅ 통과 (순수성 100%) |
| **Part 1** | 섹션 9: 예외 처리(`try - except`) 필수 기초 | `Lv 55 ~ 58` | 3 (`Lv 55~57`) | 1 (`Lv 58`) | 49 | ✅ 통과 (순수성 100%) |
| **Part 1** | 섹션 10: 클래스와 객체(`class`) 필수 기초 | `Lv 59 ~ 63` | 4 (`Lv 59~62`) | 1 (`Lv 63`) | 62 | ✅ 통과 (Part 1 완주) |
| **Part 2** | 섹션 11: 문자열 반복 복습 & 부가 메서드·서식 확장 | `Lv 64 ~ 68` | 4 (`Lv 64~67`) | 1 (`Lv 68`) | 62 | ✅ 통과 (2회독 확장) |
| **Part 2** | 섹션 12: 컬렉션 부가 메서드·2차원·컴프리헨션 | `Lv 69 ~ 76` | 7 (`Lv 69~75`) | 1 (`Lv 76`) | 101 | ✅ 통과 (2회독 확장) |
| **Part 2** | 섹션 13: 실용 내장 함수 & `*args`·`lambda` 확장 | `Lv 77 ~ 82` | 5 (`Lv 77~81`) | 1 (`Lv 82`) | 75 | ✅ 통과 (2회독 확장) |
| **Part 2** | 섹션 14: 예외·클래스 심화 기초 & 파이널 마스터 | `Lv 83 ~ 87` | 4 (`Lv 83~86`) | 1 (`Lv 87`) | 62 | ✅ 통과 (파이널 종합) |
| **합계** | **총 14개 섹션 (Part 1: 10 / Part 2: 4)** | **`Lv 1 ~ 87`** | **73개 레벨 (949Q)** | **14개 레벨 (140Q)** | **1,089문항** | **✅ 100% 통과** |

- **유형별 문항 분포 (`1,089문항`)**:
  - 시각적 블록 모드 (`type: 'block'`): **365문항** (`73개 일반 레벨 × 5문항`)
  - 타이핑 모드 (`type: 'typing'` — `fill_blank` + `fix_bug` + `one_line`): **623문항** (`73 × 7 + 14 × 8`)
  - 실행 결과 예측 퀴즈 (`type: 'quiz'`, `kind: 'predict_output'`): **101문항** (`73 × 1 + 14 × 2`)

---

## 3. 모듈 및 엔진별 세부 검증 게이트 결과

| 검증 게이트 / 영역 | 검증 항목 | 결과 | 비고 |
| :--- | :--- | :---: | :--- |
| **Gate 1: 정적 타입 검사** | `npx tsc --noEmit` | ✅ `Exit 0` | 전 파일 TypeScript 에러 `0건` |
| **Gate 2: 신규 AST & 블록 엔진** | `try-except-else-finally`, `raise`, `class`/상속, 컴프리헨션, `lambda`, `*args`, `isinstance`, `ord/chr`, `dict(k=v)` | ✅ `11/11 Pass` | 코드 실행 및 `CanvasBlock` 트리 직접 평가 모두 통과 |
| **Gate 3: 87레벨 스키마 & Part 1 순수성** | `Lv 1~87` (1,089문항) `stdout` 일치, `§` 길이/개행 일치, `fix_bug` 오답 보장, Part 1(`Lv 1~63`) 순수성 | ✅ `1,089/1,089 Pass` | Part 1 내 Part 2 문법 누수 `0건` |
| **Gate 4: E2E 라우팅 & 블록 팔레트** | `getPracticeRound`, `curriculumSections.ts`, 365개 블록 문항 `createInitialCanvasBlocks` ⇄ `unlockedBlocks` | ✅ `365/365 Pass` | 미해금 블록 참조 `0건` |
| **Gate 5: 제출 판정 (`checkSubmissionPass`)** | 988개 블록/타이핑 정식 해답 통과 + 하드코딩 우회 반려 + 동치 해법 허용 | ✅ `988/988 Pass` | `for`, `while`, `f-string`, `def`, `return`, `try`, `class`, `lambda` 우회 완벽 차단 |
| **Gate 6: 교육학 감사 & 누적 나선형 복습** | 8대 프롬프트 결함 감사(`Lv 16~87`) + 섹션 3~14 교차 개념 복습 매트릭스 | ✅ `0 Defects` | 프롬프트 결함 `0건` · 교차 섹션 누적 복습 `1,534회` 확인 |
| **멀티 언어 런타임 & 웹 프리뷰** | Wandbox 10개 컴파일러 + `WebPreview.tsx` + Linux/VB 클라이언트 런타임 | ✅ 정상 가동 | 총 13개 언어/트랙 하위 호환성 100% 유지 |

---

## 4. 지속적 검증 가이드 (Verification Protocol)

1. **정적 빌드 검사**:
   ```bash
   npx tsc --noEmit
   ```
2. **신규 커리큘럼 레벨/블록 추가 시 필수 체크리스트**:
   - [ ] 일반 레벨 13문항(홀수 1·3·5·7·9 블록 ⇄ 짝수 2·4·6·8·10 `fill_blank` + 11 `fix_bug` + 12 `one_line` + 13 `predict_output`), 섹션 종합 레벨 10문항(`fill_blank` 3 + `fix_bug` 3 + `one_line` 2 + `predict_output` 2) 규격을 준수하는가?
   - [ ] Part 1(`Lv 1~63`) 문항에 Part 2 전용 부가 함수나 심화 문법이 선행 노출되지 않았는가?
   - [ ] 각 레벨 후반부(Steps 9~13)에 이전 섹션 핵심 개념(`while`, `+=`, 형변환, `f-string`, 컬렉션, `def`, `try-except`, `class`)이 누적 복습으로 자연스럽게 결합되어 있는가?
   - [ ] `templateCode`의 `§` 마스킹 길이·개행 위치가 `targetCode`와 정확히 1:1 일치하며 식별자 중간을 쪼개지 않았는가?
   - [ ] `fix_bug`의 초기 `templateCode`가 그대로 실행될 때 반드시 오답 또는 에러가 발생하는가?
