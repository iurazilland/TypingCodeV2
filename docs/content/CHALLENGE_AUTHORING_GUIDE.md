# 🏆 섹션 종합 문제풀이(챌린지) 레벨 작성 가이드 (Challenge Authoring Guide)

이 문서는 **TypingCode V2**의 각 섹션 마무리 **종합 문제풀이 레벨**(예: Python Basic `Lv 8, 15, 23, 31, 37, 43, 49, 54, 58, 63, 68, 76, 82, 87`)을 설계하고 작성할 때 준수해야 하는 공식 V2 표준 규칙을 정의합니다.

---

## 1. V2 섹션 종합 레벨 문항 구성 원칙 (`3-3-2-2` 10문항 규격)

섹션 종합 레벨은 블록 코딩 보조 바퀴를 제거하고(`unlockedBlocks: []`, `block` 문항 `0개`), 순수 타이핑과 코드 실행 추론만으로 해당 섹션의 핵심 문법과 이전 섹션 누적 개념을 종합 검증합니다 (`totalQuestions: 10`).

| 단계 (`step`) | `type` | `kind` | 문항 수 | 설명 및 표준 프롬프트 원칙 |
| :---: | :---: | :---: | :---: | :--- |
| **Steps 1 ~ 3** | `'typing'` | `'fill_blank'` | **3** | 핵심 키워드·연산자·메서드·조건식을 `§` 캡슐로 비움 (`빈칸을 채워 ...`, 정답 직접 노출 금지) |
| **Steps 4 ~ 6** | `'typing'` | `'fix_bug'` | **3** | 문법 오류나 논리 버그 1곳을 정밀 수정 (`... 오류를 수정해보세요.` / `틀린 곳을 수정하여 ...`, 초기 `templateCode` 실행 시 반드시 실패/오답) |
| **Steps 7 ~ 8** | `'typing'` | `'one_line'` | **2** | 비워진 한 줄(`§...§`)을 스스로 작성하여 전체 로직 완성 (프롬프트 내 `'한 줄을 추가하여'` / `'한 줄의 코드를'` 명시) |
| **Steps 9 ~ 10** | `'quiz'` | `'predict_output'` | **2** | 누적 개념이 결합된 코드의 실행 결과를 추적해 4지선다(`choices` 4개, `correctChoiceIndex`) 선택 |

---

## 2. `§` 제로 변위 빈칸 마스킹 규칙 (`templateCode` ⇄ `targetCode`)

V2 TypeScript 레벨 파일(`src/data/curriculum/[language]/level[N].ts`)에서는 구버전 마크다운의 `^` 대신 **`§` 문자**를 사용합니다.

1. **정확한 글자 수·줄바꿈 1:1 일치**:
   - `templateCode.length === targetCode.length`여야 하며, 모든 개행(`\n`) 인덱스가 `targetCode`와 정확히 일치해야 합니다.
   - 예: `targetCode`의 `else:`(5글자)를 빈칸 처리할 경우 `§§§§§`(5개)로 표기합니다.
2. **식별자·키워드 부분 쪼개기 금지**:
   - `ap§§§§`, `re§§§§`처럼 단어 일부만 마스킹하지 않고 `append`, `return`처럼 온전한 토큰 단위로 마스킹합니다.

---

## 3. 교육적 프롬프트 설계 및 누적 복습 원칙

1. **정답 스포일러 절대 금지**:
   - `prompt_ko` / `prompt_en`에 빈칸 정답이나 `fix_bug`의 수정 정답 토큰을 직접 언급하지 않습니다. 문법 키워드 안내는 `hint_ko` / `hint_en`에만 작성합니다.
2. **구간 순수성(Section Purity) & 누적 나선형 결합**:
   - 아직 배우지 않은 이후 섹션(또는 Part 2) 문법은 단 1건도 사용하지 않습니다.
   - 대신 해당 섹션의 개념을 이전 섹션에서 배운 `while`, 복합 대입(`+=`), 형변환(`float/str/bool`), `f-string`, 컬렉션(`list/dict/set/tuple/None`), `def`, `try-except`, `class`와 입체적으로 결합합니다.
3. **다양한 경계 테스트 케이스 (`testCases`)**:
   - `input()`을 사용하는 문항은 분기별 경계값(예: 양수/0/음수, 정상 입력/예외 발생 입력 등)을 포함한 복수 `testCases`를 제공하여 하드코딩을 방지합니다.

---

## 4. V2 TypeScript 종합 문항 작성 예시

```typescript
{
  id: 4,
  step: 4,
  type: 'typing',
  kind: 'fix_bug',
  prompt_ko: '0으로 나눌 때 에러 메시지 "Zero"가 출력되도록 잘못된 예외 이름을 알맞게 수정해보세요.',
  prompt_en: 'Fix the exception class name so dividing by zero prints "Zero".',
  hint_ko: '0으로 나누기 오류를 잡는 내장 예외 이름은 ZeroDivisionError입니다.',
  hint_en: 'Use ZeroDivisionError in the except clause.',
  templateCode: 'n = int(input())\ntry:\n    print(100 // n)\nexcept ValueError:\n    print("Zero")',
  targetCode: 'n = int(input())\ntry:\n    print(100 // n)\nexcept ZeroDivisionError:\n    print("Zero")',
  testCases: [
    { id: 1, input: '0', expectedOutput: 'Zero' },
    { id: 2, input: '25', expectedOutput: '4' },
  ],
}
```

---

> *참고: `docs/content/Python Basic Levels/` 및 `Web Basic Levels/` 내 구버전 `.md` 아카이브 파일들은 V1 시절의 `^` 빈칸 표기 및 마크다운 포맷을 따르고 있으며, V2 프로덕션 코드는 모두 위 TypeScript `§` 규격 및 [`CONTENT_AUTHORING.md`](file:///d:/Projects/TypingCode_V2/docs/CONTENT_AUTHORING.md)를 단일 표준으로 사용합니다.*
