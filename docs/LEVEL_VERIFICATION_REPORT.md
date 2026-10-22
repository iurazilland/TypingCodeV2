# 📋 TypingCode V2 커리큘럼 및 기능 검증 보고서 (Verification Report)

본 문서는 **TypingCode V2**의 11개 언어 커리큘럼, 듀얼 연습 모드(블록 코딩 & 타이핑), 그리고 실행 런타임의 무결성을 정기적으로 점검하고 기록하는 보고서입니다.

---

## 1. 종합 검증 요약 (Executive Summary)

- **타입스크립트 정적 검사**: `npx tsc --noEmit` 통과 (**0 errors, 100% Type-Safe**).
- **런타임 컴파일러 검증**: Wandbox REST API 통신 및 11개 언어 매핑 정상 작동.
- **블록 캔버스 & 스냅 엔진**:
  - 하단 결합 스냅, E-shape 다단 분기 스냅, ㄷ자 블록(Mouth) 내부 인덱스 스냅 및 드롭 정상 작동.
  - SVG 단일 외곽선 패스 표준 적용으로 인한 요철 소실 버그 해결.
- **웹 프리뷰**: `WebPreview.tsx` iframe 동적 주입 및 `console.log` 캡처 프로토콜 정상 작동.

---

## 2. 모듈별 세부 검증 현황

| 모듈 / 영역 | 검증 항목 | 상태 | 비고 |
| :--- | :--- | :---: | :--- |
| **Python Basic (Lv 1~10)** | `practiceData.ts` 10문항 데이터 구조, 블록 조각 매핑 | ✅ 완료 | 사칙연산, 변수, print 함수 정합성 확보 |
| **블록 코딩 (C-Shape)** | 반복문/함수 입구 인디케이터 및 내부 자식 블록 체이닝 | ✅ 완료 | 노란색 삽입선 인디케이터 표시 및 def 내부 삽입 차단 가드 |
| **블록 코딩 (E-Shape)** | 다단 분기 (`if`, `elif`, `else`) 마우스 드롭 및 정합성 | ✅ 완료 | 다단 마감 암 드롭 핸들러 장착 |
| **블록 코딩 (Method)** | 문자열/변수 우측 메서드 체이닝 | ✅ 완료 | `attachedMethodId` 양방향 연결 검증 |
| **타이핑 엔진** | WPM, 오타수, 정확도 실시간 계산 및 가상 키보드 연동 | ✅ 완료 | `useTypingStore` Zustand 상태 기반 |
| **Wandbox 런타임** | Python, C, C++, JS, Java, Go, Rust, C#, Swift, SQL | ✅ 완료 | 8초 타임아웃 및 표준 입출력 포맷팅 |
| **커리큘럼 트랙** | 11개 언어 28개 코스 모듈 정의 (`curriculum.ts`) | ✅ 완료 | 입문/중급/심화 3단계 난이도 및 URL 매핑 |

---

## 3. 지속적 검증 가이드 (Verification Protocol)

1. **정적 빌드 검사**:
   ```bash
   npx tsc --noEmit
   ```
2. **신규 블록/연습 추가 시 필수 체크리스트**:
   - [ ] `availableBlocks`의 모든 블록 조각(`BlockPiece`) 카테고리가 올바르게 지정되었는가?
   - [ ] `targetCode`와 `expectedOutput`이 실제 런타임 결과와 일치하는가?
   - [ ] 단일 라인 코드 길이가 40자 이내를 준수하는가?
   - [ ] ㄷ블록 내부 삽입 시 부모-자식 블록 간의 깊이와 트리 구조가 정상 유지되는가?
