# ✍️ 콘텐츠 제작 및 커리큘럼 가이드 (Content Authoring)

이 문서는 **TypingCode V2**의 학습 커리큘럼 및 연습 콘텐츠를 제작, 확장, 등록하는 표준 절차를 설명합니다.

> ⚠️ **중요 알림 (Content Folder Preservation)**:  
> `docs/content/` 폴더는 이전 버전에서 작성된 레벨 기획 및 예제 참고용 아카이브(SSOT Reference)입니다.  
> **현재 단계에서는 이 폴더를 직접 수정하거나 삭제하지 않으며**, 향후 신규 레벨 기획 및 레퍼런스로 활용합니다.

---

## 1. V2 콘텐츠 관리 아키텍처 (Content Architecture)

TypingCode V2는 각 언어별로 독립된 모듈 파일(`src/data/curriculum/[language]/level[N].ts`)을 통해 커리큘럼을 작성하고 관리합니다.

| 대상 | 파일 경로 | 설명 |
| :--- | :--- | :--- |
| **언어별 레벨 파일** | `src/data/curriculum/[language]/level[N].ts` | 각 레벨별 10단계 문항, `unlockedBlocks`, 테스트 케이스 정의 (SSOT) |
| **언어 트랙 & 모듈** | `src/lib/curriculum.ts` | 13개 지원 언어의 트랙 정보, 코스 모듈, 스킬셋 메타데이터 |
| **챕터 & 문법 태그** | `src/lib/curriculumSections.ts` | 챕터(섹션) 그룹화 및 레벨 카드 문법 태그(`syntaxTags`) 정의 |
| **연습 라운드 등록소** | `src/lib/practiceData.ts` | 각 언어 및 레벨 라운드 연결 및 `getPracticeRound` 제공 |

---

## 2. V2 커리큘럼 작성 규격 (Curriculum Level Specification)

각 레벨은 **10개 단계(Step 1 ~ Step 10)**로 구성되며, **5단계 블록 모드 + 5단계 타이핑 모드**의 듀얼 모드 표준을 준수합니다.

### 2.1 라운드 기본 구조 (`PracticeRound`)
```typescript
import { PracticeRound } from '@/lib/practiceTypes';

export const PYTHON_LEVEL_1: PracticeRound = {
  id: 'py-basic-r1',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 1,
  title_ko: '1레벨: print() 함수와 숫자 출력',
  title_en: 'Level 1: print() & Numbers',
  totalQuestions: 10,
  unlockedBlocks: ['print'], // 도구함에 노출할 블록 키 목록
  questions: [
    // 1~5단계: 블록 모드
    // 6~10단계: 타이핑 모드 (빈칸 채우기 / 오타 수정)
  ],
};
```

### 2.2 도구함 해금 블록 키 (`unlockedBlocks`)
커리큘럼 진행도에 맞춰 해당 레벨에서 다룰 블록만 배열에 선언합니다. 미선언된 블록은 도구함에서 완전히 숨겨져 여백 없이 밀착 배치됩니다.

| 분류 | 블록 키 (`unlockedBlocks`에 지정할 문자열) |
| :--- | :--- |
| **함수 계열** | `'print'`, `'input'`, `'range'`, `'map'`, `'sorted'`, `'type'`, `'math'`, `'iter'`, `'method'`, `'open'`, `'def'` |
| **제어 계열** | `'if'`, `'for_range'`, `'for_in'`, `'while'`, `'break'`, `'continue'` |
| **변수 계열** | `'variable'` (사용자 정의 변수 생성기 및 변수 블록) |

### 2.3 단계별 문항 스펙

#### [1~5단계] 블록 모드 (Block Mode)
```typescript
{
  id: 1,
  step: 1,
  type: 'block',
  kind: 'standard',
  prompt_ko: '숫자 10을 화면에 출력해보세요.',
  prompt_en: 'Output the number 10 on the screen.',
  hint_ko: '도구 상자의 함수 카테고리에서 출력 블록을 찾아 시작 블록 밑에 홈을 맞춰 끼워보세요.',
  hint_en: 'Find the output block in the toolbox and snap it beneath the start block.',
  targetCode: 'print(10)',
  testCases: [
    {
      id: 1,
      input: '',
      expectedOutput: '10',
    },
  ],
}
```

#### [6~10단계] 타이핑 모드 (Typing Mode - 빈칸 채우기 & 오타 수정)
- 빈칸은 `templateCode` 내에 `§` 기호로 표기합니다.
- `§`의 개수가 사용자가 입력해야 하는 글자 수(Width)와 1:1 일치하여 흔들림 없는 캡슐 박스를 렌더링합니다.
```typescript
{
  id: 6,
  step: 6,
  type: 'typing',
  kind: 'fill_blank', // 또는 'fix_bug'
  prompt_ko: '빈칸을 채워 숫자 10을 출력해보세요.',
  prompt_en: 'Fill in the blank to output the number 10.',
  hint_ko: '함수 괄호 () 안에는 화면에 보여주고 싶은 전달값(인자)이 들어갑니다.',
  hint_en: 'The argument you want to display goes inside the function parentheses ().',
  templateCode: 'print(§§)', // 2글자 빈칸 박스
  targetCode: 'print(10)',
  testCases: [
    {
      id: 1,
      input: '',
      expectedOutput: '10',
    },
  ],
}
```

---

## 3. 학습 프롬프트(Prompt) 작성 표준 원칙 (Prompt Authoring Rules) — ★필수 준수★

TypingCode의 모든 연습 문항은 단순 튜토리얼이 아닌 **학습자의 자기주도 문제 풀이 방식(Problem-Solving Format)**으로 진행됩니다.  
따라서 학습 프롬프트(`prompt_ko`, `prompt_en`)를 작성하거나 번역할 때는 아래 3대 규칙을 반드시 엄수해야 합니다.

### 3.1 🚫 정답 코드/해법 직접 노출 절대 금지 (Never Leak Answers)
- **프롬프트 본문에 정답 코드나 구체적인 연산자, 기호, 괄호 위치를 직접 노출해서는 절대로 안 됩니다.**
- 학습자가 문제를 읽고 "어떤 코드를 작성해야 할지" 스스로 생각하여 해결할 수 있어야 합니다.
- 문법 지침이나 조작 가이드는 프롬프트가 아니라, 사용자가 명시적으로 열어보는 **도움말 팝오버(`hint_ko`, `hint_en`)** 영역에 배치합니다.
- **비교 예시**:
  - ❌ *금지 (정답 노출)*: `"수학 기호 x 대신 파이썬 곱셈 기호(*)를 사용하여 6 * 7의 결과를 출력해보세요."` (정답 기호 `*`를 직접 스포일러)
  - ⭕ *올바름 (문제와 목표만 제시)*: `"틀린 곳을 수정하여 올바른 결과를 출력해보세요."`
  - ❌ *금지 (정답 노출)*: `"빈칸에 괄호 ()를 채워 2 + 3을 먼저 계산한 뒤 4를 곱한 결과(20)를 출력해보세요."` (괄호 기호 `()`와 식을 직접 스포일러)
  - ⭕ *올바름 (골든 표준)*: `"빈칸을 채워 화면에 결과(20)를 출력해보세요."`
  - ❌ *금지 (영문 번역에서 수식 노출)*: `"Fill in the blank to insert the calculation expression 50 + 100 / 2 and print it on the screen."`
  - ⭕ *올바름 (골든 표준 영문)*: `"Fill in the blank to print the result (100.0) on the screen."`

### 3.2 🏷️ 문제 유형별 표준 서두 규격 (Standard Prefixes by Question Type)
학습자가 문항을 마주했을 때 문제의 해결 방식을 즉각 직관적으로 인지할 수 있도록, 문제 유형별 고정 서두를 표준화합니다:

| 문제 유형 | 표준 서두 (한국어) | 표준 서두 (영문) | 작성 예시 |
| :--- | :--- | :--- | :--- |
| **빈칸 채우기** (`fill_blank`) | **`빈칸을 채워 ...`** | `Fill in the blank(s) to ...` | `빈칸을 채워 화면에 결과(20)를 출력해보세요.`<br>`Fill in the blanks to print the result (20) on the screen.` |
| **틀린 곳 수정** (`fix_bug`) | **`틀린 곳을 수정하여 ...`** | `Fix the error to ...` | `틀린 곳을 수정하여 올바른 결과를 출력해보세요.`<br>`Fix the error to print the correct result.` |
| **한 줄 코드 작성** (`single_line`) | **`한 줄의 코드를 작성하여 ...`** | `Write a single line of code to ...` | `한 줄의 코드를 작성하여 화면에 숫자 100을 출력해보세요.`<br>`Write a single line of code to print the number 100 on the screen.` |
| **블록 조립** (`block`) | **`... 넣어 화면에 출력해보세요.`** | `... and print it on the screen.` | `숫자 10을 넣어 화면에 출력해보세요.`<br>`Insert the number 10 and print it on the screen.` |

### 3.3 🎯 골든 표준 템플릿 (9번·10번 표준 규격 — ★필수 인식★)
모든 계산 및 빈칸 프롬프트는 **레벨 1의 9번·10번 문항과 정확히 동일한 형식**으로 작성합니다:
- **한국어 골든 템플릿**:
  > **`빈칸을 채워 화면에 결과([기대값])를 출력해보세요.`**
- **영문 골든 템플릿**:
  > **`Fill in the blank(s) to print the result ([expected]) on the screen.`**
- **실전 기준 예시**:
  - **9번 문항**:
    - `prompt_ko`: `'빈칸을 채워 화면에 결과(100.0)을 출력해보세요.'`
    - `prompt_en`: `'Fill in the blank to print the result (100.0) on the screen.'`
  - **10번 문항**:
    - `prompt_ko`: `'빈칸을 채워 화면에 결과(20)를 출력해보세요.'`
    - `prompt_en`: `'Fill in the blanks to print the result (20) on the screen.'`
- **핵심 원칙 3요소**:
  1. **수식·연산자·괄호 원천 배제**: 어떤 연산자를 쓰는지 수식을 프롬프트에 적지 않고, 오직 목표 결과값 `결과(...)`만 전달.
  2. **장소 명시**: 어디에 나타나야 하는지 `화면에 ... 출력` (`print ... on the screen`)으로 일관성 유지.
  3. **힌트 분리**: 문법/순서 힌트는 오직 `hint_ko` / `hint_en`에만 배치.

---

## 4. 예시 코드 설계 4대 원칙 (Authoring Principles)

### 4.1 누적 복습 (Cumulative Review) — **가장 중요**
- 새로운 개념을 소개하더라도 이전 레벨에서 학습한 변수, 사칙연산, 조건문을 자연스럽게 결합하여 반복 노출시킵니다.
- *나쁜 예*: 반복문 레벨에서 단순 숫자 출력 `for i in range(5): print(i)`만 10문제 반복.
- *좋은 예*: 이전 단계의 변수와 덧셈을 결합하여 `total += i` 형태의 누적합 로직으로 확장.

### 4.2 한 줄 길이 제한 (40자 규칙)
- 타이핑 인터페이스 및 블록 캔버스 가독성을 위해 단일 라인의 코드는 **공백 포함 40자 이내**로 제한합니다.
- 긴 표현식은 중간 변수로 쪼개어 가독성을 확보합니다.

### 4.3 즉각적이고 가시적인 실행 결과 (Visual Feedback)
- 코드가 성공적으로 실행되었을 때 터미널 출력창 또는 WebPreview에 직관적인 결과가 나타나야 합니다.
- 빈 화면이나 아무런 출력이 없는 무응답 코드는 피합니다.

### 4.4 10단계 스케일링 (10-Step Scaffolding)
- Step 1~3: 극단적으로 단순한 기본형 (개념 도입).
- Step 4~7: 파라미터 변경 및 기본 응용.
- Step 8~10: 종합 복습 및 작은 미니 문제 해결.

---

## 5. 커리큘럼 트랙 등록 절차 (`src/lib/curriculum.ts`)

새로운 언어나 코스 모듈을 등록할 때는 `CURRICULUM_TRACKS` 배열에 객체를 추가합니다:
```typescript
{
  id: 'my-language',
  name: '언어 이름',
  icon: '아이콘',
  badge: '버전 정보',
  color: '#색상코드',
  gradient: '그라데이션',
  tagline_ko: '국문 슬로건',
  tagline_en: '영문 슬로건',
  modules: [
    {
      id: 'module-id',
      category: '베이직',
      categoryBadgeColor: '#10b981',
      title_ko: '모듈 제목',
      title_en: 'Module Title',
      difficulty: '입문',
      difficultyColor: '#10b981',
      totalLevels: 20,
      description_ko: '설명',
      description_en: 'Description',
      skills: ['습득 기술 1', '습득 기술 2'],
      practiceUrl: '/practice/my-language/1',
      isPopular: true,
    }
  ]
}
```

---

## 6. 검증 및 빌드 확인
새로운 콘텐츠를 추가하거나 수정한 후에는 다음 명령으로 타입스크립트 무오류 상태를 확인합니다:
```bash
npx tsc --noEmit
```
오류가 0건이면 앱을 재시작할 필요 없이 브라우저에서 즉시 반영된 콘텐츠를 확인할 수 있습니다.
