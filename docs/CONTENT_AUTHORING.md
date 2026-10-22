# ✍️ 콘텐츠 제작 및 커리큘럼 가이드 (Content Authoring)

이 문서는 **TypingCode V2**의 학습 커리큘럼 및 연습 콘텐츠를 제작, 확장, 등록하는 표준 절차를 설명합니다.

> ⚠️ **중요 알림 (Content Folder Preservation)**:  
> `docs/content/` 폴더는 이전 버전에서 작성된 레벨 기획 및 예제 참고용 아카이브(SSOT Reference)입니다.  
> **현재 단계에서는 이 폴더를 직접 수정하거나 삭제하지 않으며**, 향후 신규 레벨 기획 및 레퍼런스로 활용합니다.

---

## 1. V2 콘텐츠 관리 아키텍처 (Content Architecture)

TypingCode V2는 별도의 DB 서버나 동기화 스크립트 없이, 타입 안정성(Type Safety)과 즉각적인 핫 리로딩(HMR)을 보장하는 **TypeScript 모듈 기반 구조**를 채택하고 있습니다.

| 대상 | 파일 경로 | 설명 |
| :--- | :--- | :--- |
| **언어 트랙 & 모듈** | `src/lib/curriculum.ts` | 11개 지원 언어의 트랙 정보, 코스 모듈(입문/중급/심화), 난이도, 스킬셋 메타데이터 |
| **블록 & 듀얼 연습 데이터** | `src/lib/practiceData.ts` | 레벨/라운드별 세부 문항, 사용 가능 블록 조각(`availableBlocks`), 정답 코드, 기대 출력 |
| **기본 텍스트 레벨** | `src/lib/content.ts` | 타이핑 연습용 기본 레벨 데이터 (`LevelData`, `CodeStep`) |

---

## 2. 블록 코딩 & 듀얼 연습 문항 작성 규격 (`practiceData.ts`)

새로운 연습 라운드를 추가할 때는 `PracticeRound` 인터페이스에 맞춰 작성합니다.

### 2.1 라운드 기본 구조
```typescript
export const PYTHON_BASIC_ROUND_1: PracticeRound = {
  id: 'py-basic-r1',
  language: 'python',
  trackId: 'python',
  moduleId: 'py-basic',
  roundNumber: 1,
  title_ko: '1레벨: print() 함수와 사칙연산의 기초',
  title_en: 'Level 1: print() & Basic Arithmetic',
  description_ko: '가장 단순한 숫자 출력부터 시작하여 사칙연산을 단계별로 정복합니다.',
  totalQuestions: 10,
  questions: [
    /* 10개 문항 정의 */
  ],
};
```

### 2.2 단일 문항(Question) 스펙
각 문항은 **10단계 스텝(Step 1 ~ Step 10)**으로 점진적 난이도를 구성합니다:
```typescript
{
  id: 1,
  step: 1,
  title: '숫자 10 출력하기',
  prompt_ko: 'print() 함수를 사용해 숫자 10을 출력해보세요.',
  prompt_en: 'Print the number 10 using print().',
  targetCode: 'print(10)',
  expectedOutput: '10',
  hint_ko: '숫자는 따옴표("") 없이 괄호 안에 10을 그대로 적어줍니다.',
  starterCode: '', // 선택 사항: 미리 주어질 시작 코드
  availableBlocks: [
    { id: 'b1-1', label: 'print', codeSnippet: 'print', category: 'keyword' },
    { id: 'b1-2', label: '(', codeSnippet: '(', category: 'syntax' },
    { id: 'b1-3', label: '10', codeSnippet: '10', category: 'number' },
    { id: 'b1-4', label: ')', codeSnippet: ')', category: 'syntax' },
  ],
}
```

### 2.3 블록 조각(BlockPiece) 카테고리 정의
블록 툴박스에서 렌더링될 때 색상과 형태를 결정하는 카테고리입니다:
- `'keyword'`: 제어문 및 핵심 키워드 (`print`, `if`, `for`, `while`, `def`)
- `'function'`: 내장 함수 (`input`, `range`, `len`, `sum`)
- `'string'`: 따옴표로 감싸진 문자열 리터럴 (`"hello"`, `'python'`)
- `'number'`: 정수/실수 숫자 리터럴 (`10`, `42`, `3.14`)
- `'operator'`: 연산자 (`=`, `+`, `-`, `*`, `/`, `//`, `%`)
- `'variable'`: 변수 식별자 (`x`, `name`, `score`, `item`)
- `'syntax'`: 괄호, 쉼표, 콜론 등 문법 기호 (`(`, `)`, `,`, `:`, `f""`)

---

## 3. 예시 코드 설계 4대 원칙 (Authoring Principles)

### 3.1 누적 복습 (Cumulative Review) — **가장 중요**
- 새로운 개념을 소개하더라도 이전 레벨에서 학습한 변수, 사칙연산, 조건문을 자연스럽게 결합하여 반복 노출시킵니다.
- *나쁜 예*: 반복문 레벨에서 단순 숫자 출력 `for i in range(5): print(i)`만 10문제 반복.
- *좋은 예*: 이전 단계의 변수와 덧셈을 결합하여 `total += i` 형태의 누적합 로직으로 확장.

### 3.2 한 줄 길이 제한 (40자 규칙)
- 타이핑 인터페이스 및 블록 캔버스 가독성을 위해 단일 라인의 코드는 **공백 포함 40자 이내**로 제한합니다.
- 긴 표현식은 중간 변수로 쪼개어 가독성을 확보합니다.

### 3.3 즉각적이고 가시적인 실행 결과 (Visual Feedback)
- 코드가 성공적으로 실행되었을 때 터미널 출력창 또는 WebPreview에 직관적인 결과가 나타나야 합니다.
- 빈 화면이나 아무런 출력이 없는 무응답 코드는 피합니다.

### 3.4 10단계 스케일링 (10-Step Scaffolding)
- Step 1~3: 극단적으로 단순한 기본형 (개념 도입).
- Step 4~7: 파라미터 변경 및 기본 응용.
- Step 8~10: 종합 복습 및 작은 미니 문제 해결.

---

## 4. 커리큘럼 트랙 등록 절차 (`src/lib/curriculum.ts`)

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

## 5. 검증 및 빌드 확인
새로운 콘텐츠를 추가하거나 수정한 후에는 다음 명령으로 타입스크립트 무오류 상태를 확인합니다:
```bash
npx tsc --noEmit
```
오류가 0건이면 앱을 재시작할 필요 없이 브라우저에서 즉시 반영된 콘텐츠를 확인할 수 있습니다.
