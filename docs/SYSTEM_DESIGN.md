# 🏗️ 시스템 설계 사양서 (System Design Specification)

이 문서는 **TypingCode V2**의 기술적 설계, 아키텍처, 데이터 모델, 캔버스 블록 엔진 및 런타임 사양을 규정합니다.

---

## 1. 아키텍처 개요 (Architecture Overview)

TypingCode V2는 외부 서버 설치 없이 브라우저 환경에서 동작하는 반응형 SPA(Single Page Application) 구조로 설계되었습니다.

```
+-----------------------------------------------------------------------------------+
|                                  Next.js 14 App Router                            |
|  [Navbar] ----------------------------------------------------------------------  |
|  ├─ / (Home / UnifiedHeroCard / HeroPlayground)                                  |
|  ├─ /practice/[language]/[level] (Dual Mode: Visual Block & Typing Engine)        |
|  ├─ /compiler (11개 언어 멀티 샌드박스 IDE)                                      |
|  ├─ /challenges / /learn / /languages / /problems / /ranking                      |
+-----------------------------------------------------------------------------------+
                                         │
                    ┌────────────────────┴────────────────────┐
                    ▼                                         ▼
   [Client State & DOM Engine]                     [Execution Runtime]
   - Zustand: useTypingStore (WPM, Accuracy)       - Wandbox Multi-Language API
   - React State: CanvasBlocks & Snapping Engine     (Python, C, C++, Go, Rust, Java,
   - SVG Path Renderer (Scratch Puzzle Tabs)          JS, C#, Swift, SQL)
   - WebPreview (iframe srcdoc)                    - Web Preview (HTML/CSS/JS sandbox)
```

---

## 2. 데이터 모델 (Data Models)

### 2.1 공통 언어 및 레벨 모델 (`src/lib/types.ts`)
```typescript
export type SupportedLanguage = 
  | 'python' | 'c' | 'web' | 'javascript' | 'java' 
  | 'sql' | 'go' | 'rust' | 'cpp' | 'csharp' | 'swift';

export interface CodeStep {
  step: number;
  guide_ko: string;
  guide_en: string;
  code: string;
  tip?: string;
  visual_hint?: string;
}

export interface LevelData {
  id: string;
  levelNumber: number;
  language: SupportedLanguage;
  title_ko: string;
  title_en: string;
  description_ko: string;
  description_en: string;
  levelType: 'practice' | 'challenge';
  category: string;
  steps: CodeStep[];
}
```

### 2.2 블록 연습 세션 모델 (`src/lib/practiceTypes.ts`)
```typescript
export type BlockCategory = 
  | 'keyword'   // print, if, for, while, def
  | 'function'  // input, range, len, sum
  | 'string'    // "text", 'text'
  | 'number'    // 10, 42, 3.14
  | 'operator'  // =, +, -, *, /
  | 'variable'  // name, level, score
  | 'syntax';   // (, ), ,, :, f""

export interface BlockPiece {
  id: string;
  label: string;
  codeSnippet: string;
  category: BlockCategory;
}

export interface PracticeQuestion {
  id: number;
  step: number;
  title: string;
  prompt_ko: string;
  prompt_en?: string;
  targetCode: string;
  expectedOutput: string;
  hint_ko: string;
  hint_en?: string;
  starterCode?: string;
  availableBlocks: BlockPiece[];
}
```

### 2.3 캔버스 블록 구조 (`CanvasBlock` in `page.tsx`)
```typescript
export type BlockType = 
  | 'print' | 'variable' | 'for_range' | 'for_in' 
  | 'while' | 'if' | 'def' | 'method' | 'list' | 'dict' | 'tuple' | 'set';

export interface CanvasBlock {
  id: string;
  type: BlockType;
  x: number;
  y: number;
  content?: string;
  varName?: string;
  methodName?: string;
  isIfElse?: boolean;
  prevBlockId?: string;       // 상단 체인 연결
  nextBlockId?: string;       // 하단 체인 연결
  attachedToBlockId?: string; // 메서드 체이닝 대상
  attachedMethodId?: string;  // 우측에 부착된 메서드 블록
  innerBlocks?: CanvasBlock[];// C블록 입구(Mouth) 내부 블록 리스트
  branches?: BranchBlock[];   // E블록(if-elif-else) 다단 분기 리스트
}
```

---

## 3. 캔버스 블록 & 스냅 엔진 설계 (Block & Snapping Engine)

Scratch 및 MakeCode의 블록 결합 원리를 브라우저 DOM과 좌표 기하학으로 재해석하여 구현합니다.

### 3.1 3대 자석 스냅(Magnetic Snapping) 알고리즘
드래그 중인 블록의 위치(`currX`, `currY`)와 보드에 배치된 블록들의 경계 상자(`getBoundingClientRect`)를 비교하여 스냅 타깃(`findSnapTarget`)을 실시간 계산합니다:

1. **상하 스택 결합 (Stack Snapping)**:
   - 타깃 블록의 하단 요철 영역(Bottom Notch)에 도달 시, 노란색 수평 가이드라인 인디케이터 렌더링.
   - 드롭 시 `target.nextBlockId = dropped.id`, `dropped.prevBlockId = target.id`로 양방향 연결.
   - 기존 연결된 하위 체인이 있는 경우, 새 블록이 그 사이에 끼워지는 **중간 삽입(Chain Splicing)** 지원.
2. **ㄷ블록 내부 입구 결합 (Mouth Snapping)**:
   - C블록(`for`, `while`, `def`) 또는 E블록(`if`)의 입구 영역(Mouth) 내부로 진입 시:
     - `mouthTop`, `mouthBottom` 사이의 마우스 Y좌표를 분석하여 삽입 인덱스(`insertIndex`) 결정.
     - 입구 내부에 노란색 삽입선 인디케이터 표시.
     - 드롭 시 `innerBlocks.splice(insertIndex, 0, dropped)`로 구조적 삽입.
     - `def` 블록 등 최상위 전용 블록의 ㄷ블록 내부 삽입은 가드로 원천 차단.
3. **가로 메서드 결합 (Method Right Snapping)**:
   - 부모 블록 우측의 요철(Notch) 근처로 메서드 블록 드래그 시 우측 정렬 부착 (`attachedMethodId`).

### 3.2 체인 드래그 (Stack Chain Dragging)
- 블록을 마우스로 잡고 이동할 때, `getDescendantBlockIds(rootId)` 탐색을 통해 하위에 연결된 모든 자손 블록들을 한 덩어리로 묶어 동일한 오프셋(`deltaX`, `deltaY`)으로 이동시킵니다.

### 3.3 블록 외곽선 렌더링 표준 (SVG Path Standard)
- 복잡한 `div` 누더기(div soup) 및 음수 마진(`-1px`)으로 인한 z-index 테두리 덮어쓰기/요철 소실을 근본 방지하기 위해 단일 SVG `<path d="..." />`를 사용합니다.
- 상단 홈, 기둥, 내부 입구 요철, 마감 암, 하단 돌출 탭을 하나의 닫힌 벡터 패스로 렌더링하여 언제나 완벽한 블록 형태를 유지합니다.

---

## 4. 런타임 실행 엔진 (Execution Engine)

### 4.1 멀티 언어 클라우드 샌드박스 (`src/lib/runner.ts`)
- **API**: Wandbox JSON REST API (`https://wandbox.org/api/compile.json`)
- **타임아웃 제어**: `AbortController`를 통해 8초 초과 시 자동 중단 및 사용자 안내.
- **지원 매핑**:
  - Python: `cpython-3.10.15`
  - C: `gcc-13.2.0-c`
  - C++: `gcc-13.2.0`
  - JavaScript: `nodejs-20.12.2`
  - Java: `openjdk-jdk-22+36`
  - Go: `go-1.23.2`
  - Rust: `rust-1.82.0`
  - C#: `mono-6.12.0.199`
  - Swift: `swift-6.0.1`
  - SQL: `sqlite-3.46.1`

### 4.2 Web 트랙 샌드박스 (`WebPreview.tsx`)
- 브라우저 네이티브 `iframe` 격리 실행.
- HTML, CSS, JS 소스를 `srcdoc`으로 병합 주입하고, `window.addEventListener('message')`를 통해 자바스크립트 콘솔 출력(`console.log`, `console.error`)을 실시간 캡처하여 화면에 표시.

---

## 5. UI/UX 및 디자인 시스템 사양

1. **디자인 테마**: Obsidian Dark Theme (`#0a0e17`, `#0f172a`, `#1e293b`)
2. **액센트 팔레트**:
   - Python/기본: `#3b82f6` (Blue)
   - 통과/완료: `#10b981` (Emerald)
   - 분기/조건: `#f59e0b` (Amber)
   - 반복/루프: `#8b5cf6` (Purple)
   - 삭제/경고: `#ef4444` (Red)
3. **타이포그래피**:
   - 코드/토큰: `Consolas`, `Monaco`, `monospace`
   - UI 텍스트: `Pretendard`, system-ui, sans-serif
4. **접근성 및 반응성**:
   - 분할 화면 반응형 Bento 레이아웃 (툴박스 - 캔버스/에디터 - 터미널/프리뷰).
