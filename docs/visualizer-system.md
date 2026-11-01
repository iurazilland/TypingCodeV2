# 🎨 Visual & Interactive System Specification (V2)

이 문서는 **TypingCode V2**의 시각화 및 인터랙티브 학습 인터페이스 사양을 정의합니다. V2는 **Scratch 스타일 SVG 시각적 블록 스튜디오**, **실시간 변수 메모리 박스 & 스텝 디버거**, **제로 변위(`§`) 타이핑 에디터 & 가상 키보드**, **1레벨 첫 진입 화면 둘러보기 투어(`SpotlightTour`)**, **실시간 WebPreview**가 유기적으로 결합된 하이브리드 비주얼 학습 환경을 제공합니다.

---

## 1. Scratch 스타일 인터랙티브 블록 스튜디오 ([`blockGeometry.ts`](file:///d:/Projects/TypingCode_V2/src/lib/blockGeometry.ts) & [`CanvasBlockItem.tsx`](file:///d:/Projects/TypingCode_V2/src/components/practice/CanvasBlockItem.tsx))

### 1.1 블록 해부학 및 지원 블록 계층 (Block Anatomy & Taxonomy)
- **Statement Blocks (단일 명령 블록)**:
  - 상단 홈(Top Notch, `x: 16px ~ 36px`, 깊이 `4px`) + 하단 돌출 탭(Bottom Tab, 너비 `20px`, 높이 `4px`).
  - 지원 타입: `print`, `variable` / `assign` / `aug_assign`(`+=` 등), `return`, `raise`, `break`, `continue`, `call`, 컬렉션(`list`, `tuple`, `dict`, `set`) 및 내장 함수/형변환 드롭다운(`type`, `int`, `float`, `str`, `bool`, `isinstance`, `ord`, `chr`).
- **C-Shape Blocks (ㄷ자 컨테이너 블록)**:
  - 상단 헤더 암(Top Bar), 수직 기둥(Spine, 두께 `16px`), 자동 확장 입구(Auto-grow Mouth), 하단 마감 암(Bottom Bar)으로 구성.
  - 지원 타입:
    - 반복문: `for_range`, `for_in`, `while`
    - 함수 정의: `def [함수명]([매개변수]):`
    - **클래스 정의 (`class`)**: 기본형 `class [클래스명]:` 및 단일 상속형 `class [자식클래스]([부모클래스]):` 슬롯 지원. `class` 입구(Mouth) 내부에 `def` 블록을 스냅하여 `__init__`, `__str__` 및 인스턴스 메서드를 시각적으로 조립 가능.
- **E-Shape Multi-Branch Blocks (다단 분기 블록)**:
  - 여러 개의 분기 헤더와 독립 입구(Mouth)를 하나의 수직 기둥으로 연결하며, 우클릭 컨텍스트 메뉴로 분기를 동적 추가·제거 가능.
  - 지원 타입:
    - 조건 분기: `if` — `elif` — `else`
    - **예외 처리 분기 (`try`)**: `try:` — `except [에러타입]:` (다중 `except` 가능) — `else:` — `finally:`
- **Right-Chained Method Blocks (가로 체이닝 블록)**:
  - 대상 블록 우측 요철에 직결합되는 메서드 블록 (`.strip()`, `.replace()`, `.split()`, `.append()`, `.pop()`, `.sort()`, `.items()`, `.get()` 등).

### 1.2 SVG 단일 벡터 패스 표준 (Single SVG `<path>` Standard)
사각형 `div` 조각을 음수 마진(`-1px`)으로 이어 붙이던 구 방식 대신 단일 닫힌 `<path d="..." />` 벡터 외곽선으로 블록을 렌더링합니다.
1. `z-index` 간섭이나 테두리 덮어쓰기로 인한 하단 돌출 탭 소실 원천 차단.
2. 선 굵기(`stroke-width`), 그림자(`drop-shadow`), 테마 색상(`BLOCK_THEMES`) 일괄 제어.
3. 중첩 C-블록(`class` 안의 `def` 안의 `try` / `for` / `if`) 확장 시에도 1px 오차 없는 기하학적 정밀도 유지.

### 1.3 자석 스냅 피드백 (Magnetic Snapping Feedback)
- 드래그 중인 블록이 결합 가능 영역(상하 탭, ㄷ/E블록 Mouth 내부, 우측 메서드 홈)에 진입하면 **두께 3px 네온 옐로우(`rgba(234, 179, 8, 1)`) 발광 가이드라인**이 결합 예정 인덱스 위치에 즉시 표시되며, 드롭 시 논리 트리에 자동 흡착됩니다.

---

## 2. 실시간 변수 메모리 박스 & 스텝 디버거 (Memory Visualizer & Step Debugger)

[`blockEvaluator.ts`](file:///d:/Projects/TypingCode_V2/src/lib/blockEvaluator.ts)의 로컬 실행 트레이스(`steps`, `scope`)와 [`page.tsx`](file:///d:/Projects/TypingCode_V2/src/app/practice/%5Blanguage%5D/%5Blevel%5D/page.tsx)의 `getMemoryBoxes`가 연동되어 코드 실행 중 메모리 상태 변화를 시각적으로 보여줍니다.

- **실시간 변수 카드 렌더링**:
  - 기본형(`int`, `float`, `str`, `bool`, `None`), 컬렉션(`list`, `tuple`, `dict`, `set`), 그리고 사용자 정의 클래스 인스턴스(`<ClassName object>` 및 속성 요약)를 자료형 배지와 함께 실시간 카드로 시각화합니다.
- **한 줄씩 스텝 실행 (Progressive Step Debugging)**:
  - 블록 모드와 타이핑 모드 모두에서 각 실행 스텝(`lineIndex` / `blockId`)마다 변수가 생성·갱신되고 터미널 `stdout`이 한 줄씩 쌓이는 과정을 단계별로 추적할 수 있습니다.

---

## 3. 제로 변위(`§`) 타이핑 에디터, 화면 둘러보기 투어 & 가상 키보드

### 3.1 `§` 캡슐 빈칸 에디터, 붙여넣기 방지 & 4지선다 출력 예측 UI ([`TypingStage.tsx`](file:///d:/Projects/TypingCode_V2/src/components/practice/TypingStage.tsx))
- `templateCode` 내 `§` 문자의 개수가 정답 글자 수와 정확히 1:1 매칭되어, 타이핑 중 주변 코드가 밀리지 않는(Zero-displacement) 캡슐 빈칸 박스를 렌더링합니다.
- 클립보드 붙여넣기(`Ctrl+V`/`Cmd+V`/`Shift+Insert`/`onPaste`) 및 드래그앤드롭 텍스트 주입을 차단하고 에디터 상단 `main.py` 헤더 우측에 2초간 `"직접 타이핑해서 입력해 주세요"` 배지를 표시합니다.
- `predict_output` (`type: 'quiz'`) 스텝에서는 코드 리더 뷰와 4지선다 선택 카드 UI로 자동 전환되어 실행 전 논리 추론 능력을 훈련합니다.

### 3.2 스포트라이트 화면 둘러보기 ([`SpotlightTour.tsx`](file:///d:/Projects/TypingCode_V2/src/components/practice/SpotlightTour.tsx)) & 가상 키보드 ([`VirtualKeyboard.tsx`](file:///d:/Projects/TypingCode_V2/src/components/VirtualKeyboard.tsx))
- 계정별 로컬 키(`typingcode_tour_seen_v2_${user.id}`)를 기준으로 **1레벨 1단계 첫 진입 시에만** 10단계 하이라이트 가이드가 자동 실행되며, 마지막 단계에서 `다시 보지 않기`를 지원합니다.
- 가상 키보드는 다음 타건 키(`Shift` 조합 포함) 실시간 네온 하이라이트를 제공합니다.

---

## 4. 실시간 웹 뷰포트 시스템 ([`WebPreview.tsx`](file:///d:/Projects/TypingCode_V2/src/components/WebPreview.tsx))

- `iframe` (`sandbox="allow-scripts"`)의 `srcdoc`에 HTML/CSS/JS를 병합 주입하고, `console.log`·`console.error`·`window.onerror`를 `postMessage`로 후킹하여 하단 터미널에 실시간 출력합니다.

---

## 5. 디자인 원칙 및 의미론적 색상 토큰 (Design Tokens)

1. **Bezel-less Floating Workspace**: 불필요한 이중 테두리를 덜어내고 다크 캔버스 위에 블록과 코드가 또렷이 부각되도록 구성.
2. **Color Semantics (`BLOCK_THEMES`)**:
   - **입출력 / 기본 함수**: `#3b82f6` (Blue)
   - **반복문 (`for`, `while`)**: `#8b5cf6` (Purple)
   - **조건 분기 (`if/elif/else`)**: `#f59e0b` (Amber)
   - **함수 정의 (`def`, `return`)**: `#10b981` (Emerald)
   - **클래스 정의 (`class`)**: `#6366f1` (Indigo)
   - **예외 처리 (`try/except/finally`, `raise`)**: `#f43f5e` (Rose)
   - **문자열 / 컬렉션 / 값**: `#ec4899` (Pink) / `#06b6d4` (Cyan)
