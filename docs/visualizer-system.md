# 🎨 Visual & Interactive System Specification (V2)

이 문서는 **TypingCode V2**의 시각화 및 인터랙티브 인터페이스 사양을 정의합니다. V2에서는 단순 텍스트 타자나 팝업형 비주얼 모달을 넘어, **Scratch 스타일 인터랙티브 블록 시스템**, **인사이트 카드**, **실시간 WebPreview**, **가상 키보드**가 유기적으로 결합된 하이브리드 비주얼 학습 시스템을 제공합니다.

---

## 1. Scratch 스타일 인터랙티브 블록 시스템 (Visual Block System)

`src/app/practice/[language]/[level]/page.tsx`에서 구동되는 시각적 블록 코딩 인터페이스입니다.

### 1.1 블록 해부학 (Block Anatomy)
- **Top Notch (상단 홈)**: 직전 블록의 하단 돌출 탭과 맞물리는 오목한 홈.
  - 위치: 좌측 기준 `x: 16px ~ 36px`, 깊이 `4px`.
- **Bottom Tab (하단 돌출 탭)**: 다음 블록의 상단 홈에 꽂히는 돌출부.
  - 너비 `20px`, 높이 `4px`, 살짝 경사진 사다리꼴 형태.
- **Mouth (ㄷ자/E자 입구)**:
  - C-Shape (루프/함수): 상단 암(Top Bar), 수직 기둥(Spine), 하단 마감 암(Bottom Bar)으로 구성.
  - 기둥 두께: `16px`.
  - 내부 입구에 블록이 추가될 때마다 컨테이너 높이가 유동적으로 확장(Auto-grow).
- **Right Notch / Tab (가로 결합부)**:
  - 문자열이나 변수 블록의 우측에 메서드(`.split()`, `.strip()`) 블록을 결합할 수 있는 가로형 퍼즐 요철.

### 1.2 SVG 단일 벡터 패스 표준 (The SVG Path Standard)
기존 사각형 `div` 조각들을 음수 마진(`-1px`)으로 덧대던 방식에서 탈피하여, 단일 `<path d="..." />`로 블록 외곽선을 드로잉합니다.
- **장점**:
  1. z-index 간섭이나 `border` 덮어쓰기로 인한 하단 돌출 탭 소실 원천 차단.
  2. 선 굵기(`stroke-width`), 그림자(`filter: drop-shadow`), 배경색(`fill`)을 한 번에 제어.
  3. 창 크기 및 내부 블록 개수 변화에 따른 기하학적 정밀도 유지.

### 1.3 자석 스냅 인터랙션 (Magnetic Snapping Feedback)
- **스냅 가이드 인디케이터**:
  - 드래그 중인 블록이 기존 블록의 결합 가능 영역(요철 부근, ㄷ블록 입구 내부)에 진입하면, **두께 3px의 네온 옐로우(`rgba(234, 179, 8, 1)`) 발광선**이 결합 예정 위치에 즉시 렌더링됩니다.
  - ㄷ블록 입구 내에서는 드래그 위치에 따라 기존 자식 블록들 사이의 정확한 삽입 위치(Index)를 가리킵니다.
- **스냅 릴리즈(Drop)**:
  - 마우스를 놓으면 인디케이터 위치로 블록이 부드럽게 흡착(Snap-in)되며 논리 트리에 결합됩니다.

---

## 2. 인사이트 카드 시스템 (`InsightCard.tsx`)

연습 시작 전 또는 스텝 전환 시 학습자에게 핵심 개념을 시각적으로 주입하는 카드 컴포넌트입니다.

### 2.1 UI/UX 사양
- **배경**: `rgba(15, 23, 42, 0.95)` 기반 글래스모피즘(Glassmorphism) 및 `backdrop-filter: blur(16px)`.
- **테두리**: `1px solid rgba(59, 130, 246, 0.3)`의 은은한 블루 네온 테두리.
- **상단 뱃지**: 문법 카테고리(`함수`, `조건문`, `반복문`, `연산자`) 뱃지 표시.
- **인터랙션**:
  - 스텝 진입 시 가이드 카드가 활성화되어 코드의 핵심 의도와 주의사항을 먼저 정독하도록 유도.
  - '학습 시작' 또는 키 입력 시 부드럽게 축소 및 상단 안착(Focus -> Settle 전환).

---

## 3. 실시간 웹 뷰포트 시스템 (`WebPreview.tsx`)

HTML/CSS/JavaScript 웹 트랙을 위한 실시간 렌더링 엔진입니다.

### 3.1 아키텍처
- **샌드박스 격리**: `iframe`의 `sandbox="allow-scripts"` 속성을 통해 안전한 실행 환경 유지.
- **동적 문서 주입**:
  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <style>${cssContent}</style>
    </head>
    <body>
      ${htmlContent}
      <script>
        ${consoleCaptureScript}
        ${jsContent}
      </script>
    </body>
  </html>
  ```
- **실시간 콘솔 캡처**:
  - `console.log`, `console.error`, `window.onerror`를 후킹하여 `postMessage`로 부모 창에 전달.
  - 브라우저를 벗어나지 않고도 하단 `Terminal` 컴포넌트에서 실시간 JS 실행 결과를 즉시 확인.

---

## 4. 가상 키보드 가이드 (`VirtualKeyboard.tsx`)

타이핑 연습 모드에서 올바른 타건 자세와 다음 입력 키를 시각적으로 유도합니다.

- **실시간 하이라이트**: 사용자가 현재 입력해야 하는 문자의 키캡에 활성 네온 글로우(`accentColor`) 표시.
- **시프트 키 상태 연동**: 대문자나 특수문자 입력 시 Shift 키와 해당 키가 동시에 하이라이트.
- **반응형 렌더링**: 모바일/태블릿 화면 크기에 맞춰 크기가 자동 조절되며 필요 시 토글 접기 지원.

---

## 5. 디자인 원칙 및 토큰 (Design Principles)

1. **Bezel-less & Clean**: 불필요한 이중 박스를 배제하고 다크 공간 속에 블록과 코드가 자연스럽게 떠 있는 느낌(Floating Space)을 구현.
2. **Color Semantics (의미론적 색상 체계)**:
   - **키워드/출력**: `#3b82f6` (Blue)
   - **반복문**: `#8b5cf6` (Purple)
   - **조건문**: `#f59e0b` (Amber)
   - **함수/정의**: `#10b981` (Emerald)
   - **문자열/값**: `#ec4899` (Pink)
3. **Micro-Animations**:
   - 스냅 인디케이터 점멸: `pulse 1.5s infinite`
   - 블록 흡착 애니메이션: 150ms 퀵 트랜지션
   - 오타 발생 시: 즉각적인 레드 하이라이트 및 흔들림(Shake) 효과
