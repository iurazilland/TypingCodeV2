# 📋 TypingCode V2 커리큘럼 및 기능 검증 보고서 (Verification Report)

본 문서는 **TypingCode V2**의 11개 언어 커리큘럼, 듀얼 연습 모드(블록 코딩 & 타이핑), 그리고 0ms 로컬 AST 실행기 및 런타임의 무결성을 점검·기록하는 공식 검증 보고서입니다.

---

## 1. 종합 검증 요약 (Executive Summary)

- **타입스크립트 정적 검사**: `npx tsc --noEmit` 통과 (**0 errors, 100% Type-Safe**).
- **Python Basic (`py-basic`) 2-Part · 14섹션 · 87레벨 · 1,089문항 전수 검증 통과**:
  - **Part 1 — 핵심 개념 기초편 (`섹션 1 ~ 섹션 10`, `Lv 1 ~ Lv 63`, 789문항)**: 필수 최소 함수·문법만 사용하여 `print`·연산자·변수·`input`·`bool`/`if`·`for`/`while`·`str`·`list`·`None`/`tuple`/`dict`/`set`·`def`·`try-except` 기초·`class` 기초까지 완주 (**Part 2 부가 함수/심화 문법 혼입 0건 검증 완료**).
  - **Part 2 — 반복 심화 & 부가 함수·기능 확장편 (`섹션 11 ~ 섹션 14`, `Lv 64 ~ Lv 87`, 300문항)**: 문자열 부가 메서드·서식(`:.2f`, `:,`, `[::-1]`, `ord`, `chr`) → 컬렉션 부가 메서드·`sorted()`·2차원 리스트·집합 연산자·삼항 연산자·리스트 컴프리헨션 → 실용 내장 함수(`abs`, `round`, `map`, `enumerate`, `zip`, `reversed`, `all`, `any`, `isinstance`)·`*args`·`lambda` → `try-except-else-finally`·`raise`·`__str__`·단일 상속(`class Child(Parent):`) 및 파이널 마스터까지 나선형 2차 복습 완주.
  - **누적 나선형 복습 매트릭스 (Cumulative Spiral Review)**: `+=/-=/*=`(198회), `float/str/bool`(58회), `if/elif/else`(230회), `for`(191회), `while`(57회), `f-string`(176회), `list`(289회), `dict/set/tuple/None`(87회), `def`(149회), `try-except`(47회), `class`(52회) 등 총 **1,534건**의 후속 섹션 누적 복습 분포 검증 통과.
  - **교육학 및 프롬프트 적합성 감사 (`Lv 16 ~ Lv 87`, 900문항)**: `fix_bug`/`fill_blank` 정답 노출 `0건`, 식별자 부분 쪼개기 빈칸 `0건`, 모호한 빈칸 `0건`, 과장 길이 프롬프트 `0건`, `one_line` 한 줄 안내 누락 `0건`, 블록 초기 골격 불일치 `0건`.
- **0ms 로컬 파이썬 AST 엔진 (`blockEvaluator.ts`) & 블록 스튜디오 확장**:
  - 외부 패키지 추가 없이(`0 npm dependencies`) `try / except [Type | (T1, T2) [as e]] / else / finally`, `raise`, `class Name[(Parent)]:`, `__init__`, `self` 속성 읽기/쓰기/복합 대입, 인스턴스 메서드, `__str__`, 단일 상속 및 메서드 오버라이딩, `isinstance()`, `ord()`, `chr()`, `.isalpha()`, `dict(k=v)`, 삼항 조건식, 리스트 컴프리헨션(격리 스코프), `*args`, `lambda`, `sorted/min/max(..., key=...)`, `f-string` 서식(`:.2f`, `:,`, `:,.2f`) 완벽 지원.
  - 블록 캔버스에 `class` C-블록(내부 `def` 메서드 스냅 허용, `class` 중첩은 최상위 가드 유지), `try-except-else-finally` 다단 분기 E-블록, `raise` 블록, 그리고 `isinstance`/`ord`/`chr` 드롭다운 추가.
- **`/languages` 진척도 실데이터 연동**: 하드코딩되어 있던 코스 진척도(`'py-basic': 9` 등)를 제거하고 브라우저 `localStorage` (`unlocked_step_*`) 실제 클리어 레벨 집계와 동기화.

---

## 2. 모듈별 세부 검증 현황

| 모듈 / 영역 | 검증 항목 | 상태 | 비고 |
| :--- | :--- | :---: | :--- |
| **Python Basic Part 1 (`Lv 1~63`)** | 10개 섹션 · 789문항 AST 실행, 블록 골격, Part 1 순수성 게이트 | ✅ 완료 | `Lv 1~15` 베이스라인 100% 보존, Part 2 문법 혼입 0건 |
| **Python Basic Part 2 (`Lv 64~87`)** | 4개 섹션 · 300문항 2차 나선형 복습 및 부가 함수·기능 검증 | ✅ 완료 | 컴프리헨션, `lambda`, `try-finally`/`raise`, 상속 완벽 호환 |
| **제출 판정 (`checkSubmissionPass`)** | 988개 블록/타이핑 정식 해답 통과 + 하드코딩 우회 차단 + 동치 해법 허용 | ✅ 완료 | `for`, `while`, `f-string`, `def`, `return`, `try`, `class`, `lambda` 우회 차단 |
| **블록 코딩 (`class` C-Shape)** | `class [Name]:` / `class [Name]([Parent]):` 및 내부 `def` 스냅 | ✅ 완료 | 최상위 `class` 배치 및 `class` 내부 메서드 스냅 정상 작동 |
| **블록 코딩 (`try` E-Shape & `raise`)** | `try` - `except` - `else` - `finally` 다단 분기 및 `raise` 블록 | ✅ 완료 | 우클릭 분기 추가/제거 및 코드 조립(`getAssembledCode`) 일치 |
| **365개 블록 모드 문항 E2E** | `createInitialCanvasBlocks` 및 `unlockedBlocks` 팔레트 정합성 | ✅ 완료 | `Lv 1~87` 내 365개 전체 블록 문항 100% 라운드트립 통과 |
| **코스 진척도 (`/languages`)** | `localStorage` 실 클리어 레벨 카운트 및 `totalLevels: 87` 동기화 | ✅ 완료 | `curriculum.ts`, `curriculumSections.ts`, `practiceData.ts` 일치 |
| **타이핑 엔진 & Wandbox / 웹 프리뷰** | WPM/정확도 측정, 11개 언어 런타임, `WebPreview.tsx` iframe | ✅ 완료 | 기존 모든 트랙 하위 호환성 100% 유지 |

---

## 3. 지속적 검증 가이드 (Verification Protocol)

1. **정적 타입 검사**:
   ```bash
   npx tsc --noEmit
   ```
2. **신규 커리큘럼 레벨/블록 추가 시 필수 체크리스트**:
   - [ ] 일반 레벨 13문항(홀수 1·3·5·7·9 블록 ⇄ 짝수 2·4·6·8·10 `fill_blank` + 11 `fix_bug` + 12 `one_line` + 13 `predict_output`), 섹션 종합 레벨 10문항(`fill_blank` 3 + `fix_bug` 3 + `one_line` 2 + `predict_output` 2) 규격을 준수하는가?
   - [ ] Part 1(`Lv 1~63`) 문항에 Part 2 전용 부가 함수나 심화 문법이 선행 노출되지 않았는가?
   - [ ] 각 레벨 후반부(Steps 9~13)에 이전 섹션 핵심 개념(`while`, `+=`, 형변환, `f-string`, 컬렉션, `def`, `try-except`, `class`)이 누적 복습으로 자연스럽게 결합되어 있는가?
   - [ ] `templateCode`의 `§` 마스킹 길이·위치가 `targetCode`와 정확히 1:1 일치하며 식별자 중간을 쪼개지 않았는가?
   - [ ] `fix_bug`의 초기 `templateCode`가 그대로 실행될 때 반드시 오답 또는 에러가 발생하는가?
