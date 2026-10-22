# 🌐 Web (HTML/CSS/JS) 코스 설계 및 런타임 사양서 (Web Course Design)

이 문서는 **TypingCode V2**의 웹 프로그래밍(HTML, CSS, JavaScript) 학습 트랙 및 실시간 웹 뷰포트(WebPreview) 환경의 아키텍처와 구현 사양을 기술합니다.

---

## 1. 개요 및 설계 목표
- **실시간 웹 렌더링**: 외부 컴파일러나 서버 요청 없이, 브라우저 내부의 격리된 `iframe`을 통해 HTML/CSS/JS 실행 결과를 밀리초(ms) 단위로 즉각 시각화.
- **분할 화면 Bento 레이아웃**: 좌측 학습 정보 및 에디터, 우측 상단 실시간 웹 뷰포트, 우측 하단 브라우저 가상 콘솔(Terminal)의 유기적 배치.
- **통합 콘솔 로깅**: 웹 뷰포트 내의 `console.log`, `console.error` 및 런타임 에러를 부모 창의 터미널 컴포넌트에 실시간 중계.

---

## 2. 레이아웃 및 UI 구성

```
+-----------------------------------------------------------------------------------+
|  Top Navigation Bar (언어 선택, 코스 타이틀, 단계별 진도 배지)                    |
+------------------------------------------+----------------------------------------+
|  Left Pillar (에디터 & 타이핑 영역)      |  Right Pillar (실시간 프리뷰 & 콘솔)   |
|                                          |                                        |
|  +------------------------------------+  |  +----------------------------------+  |
|  | [1] Insight & Step Info Cell       |  |  | [3] Live WebPreview Cell         |  |
|  |     (목표 안내, HTML/CSS/JS 힌트)   |  |  |     (iframe 실시간 뷰포트)       |  |
|  +------------------------------------+  |  +----------------------------------+  |
|  | [2] Code Editor / Canvas           |  |  | [4] Browser Console (Terminal)   |  |
|  |     (HTML/CSS/JS 코드 작성)        |  |  |     (console.log, console.error) |  |
|  +------------------------------------+  |  +----------------------------------+  |
|  | [3] Virtual Keyboard (Typing Mode) |  |                                        |
|  +------------------------------------+  |                                        |
+------------------------------------------+----------------------------------------+
```

---

## 3. 핵심 기술 아키텍처 (`src/components/WebPreview.tsx`)

### 3.1 동적 HTML 샌드박스 주입 (`srcdoc`)
사용자가 작성한 코드를 조합하여 브라우저의 `srcdoc` 속성을 통해 즉각 마운트합니다:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>
      /* CSS Reset & User Custom CSS */
      body {
        margin: 0;
        padding: 16px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        background-color: #ffffff;
        color: #0f172a;
      }
      ${cssCode}
    </style>
  </head>
  <body>
    ${htmlCode}
    <script>
      // Console Hooking Script
      (function() {
        const originalLog = console.log;
        const originalError = console.error;
        
        console.log = function(...args) {
          window.parent.postMessage({ type: 'CONSOLE_LOG', data: args.join(' ') }, '*');
          originalLog.apply(console, args);
        };
        
        console.error = function(...args) {
          window.parent.postMessage({ type: 'CONSOLE_ERROR', data: args.join(' ') }, '*');
          originalError.apply(console, args);
        };
        
        window.onerror = function(message, source, lineno) {
          window.parent.postMessage({ type: 'CONSOLE_ERROR', data: message + ' (line ' + lineno + ')' }, '*');
        };
      })();

      // User Custom JavaScript
      try {
        ${jsCode}
      } catch (err) {
        console.error(err.message);
      }
    </script>
  </body>
</html>
```

### 3.2 런타임 보안 및 격리
- `sandbox="allow-scripts"` 설정을 통해 최상위 페이지 내비게이션 및 잠재적 XSS 위협을 차단.
- `window.addEventListener('message')`를 수신하여 출력을 안전하게 정제한 후 터미널에 전달.

---

## 4. 웹 커리큘럼 로드맵 (`src/lib/curriculum.ts`)

1. **HTML 마크업 (HTML Markup)**:
   - 시맨틱 구조 (`header`, `main`, `footer`, `section`)
   - 텍스트 및 링크 (`h1~h6`, `p`, `a`, `span`)
   - 리스트와 테이블 (`ul`, `ol`, `li`, `table`)
   - 폼 입력 요소 (`input`, `textarea`, `select`, `button`)
2. **CSS 스타일링 (CSS Styling)**:
   - 박스 모델 (`margin`, `padding`, `border`, `box-sizing`)
   - Flexbox 1차원 레이아웃 (`display: flex`, `justify-content`, `align-items`)
   - Grid 2차원 레이아웃 (`display: grid`, `grid-template-columns`)
   - 반응형 미디어 쿼리 (`@media`) 및 애니메이션
3. **JavaScript DOM & 인터랙션**:
   - `document.querySelector` 및 요소 선택
   - 클릭, 입력 이벤트 리스너 (`addEventListener`)
   - 스타일 및 클래스리스트 동적 제어 (`classList.toggle`)
   - Fetch API를 활용한 비동기 데이터 렌더링
