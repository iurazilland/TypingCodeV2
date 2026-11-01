# 🤖 피지컬 AI & 로보틱스 코스 설계 사양서 (Physical AI Course Design)

이 문서는 **TypingCode V2**에서 실물 하드웨어 장비 없이 브라우저만으로 **피지컬 AI(Physical AI / Embodied AI)**의 핵심 원리(센서 인지 → 제어·경로 계획 → ROS 2 통신 패턴 → 강화학습·VLA 에이전트 루프)를 학습할 수 있도록 설계한 향후 구현 블루프린트(SSOT)입니다.

---

## 1. 개요 및 설계 철학

### 1.1 피지컬 AI(Physical AI)의 핵심 루프
화면 속 텍스트·이미지만 다루는 디지털 AI와 달리, 피지컬 AI는 현실 물리 공간과 실시간으로 상호작용하는 **`Sense → Think → Act`** 폐루프(Closed-loop) 시스템입니다.

```
[물리 환경 (World / Simulator)]
       │ (거리·속도·영상·관성 데이터 + 노이즈)
       ▼
1. Sense (센서 인지 & 노이즈 필터링)
       │ (정제된 상태 벡터 State s_t)
       ▼
2. Think (경로 계획 · ROS 2 노드 판단 · 강화학습/VLA 정책)
       │ (목표 상태 Target r_t)
       ▼
3. Act   (PID 모터 제어 · 역기구학 관절 토크/PWM 출력 u_t)
       │
       └──────► [물리 상태 업데이트 (s_{t+1})]
```

### 1.2 왜 웹 브라우저만으로 학습할 수 있는가? (Sim-to-Real 패러다임)
- 실제 로보틱스·자율주행 현업에서도 고가의 로봇 하드웨어에 미검증 코드를 바로 올리지 않고 **100% 소프트웨어 시뮬레이션(Sim-to-Real)** 환경에서 제어기와 AI 정책을 먼저 구현·검증합니다.
- TypingCode V2의 **0ms 로컬 파이썬 AST 실행기([`blockEvaluator.ts`](file:///d:/Projects/TypingCode_V2/src/lib/blockEvaluator.ts))**와 결정론적 테스트 케이스(`stdin` 가상 센서 시계열 ➔ `stdout` 제어 명령 검증)를 활용하면 외부 장비나 무거운 패키지 설치 없이 핵심 알고리즘을 체득할 수 있습니다.

---

## 2. 피지컬 AI 5단계 필수 지식 스택 및 V2 모듈 매핑

피지컬 AI를 다루기 위해 필요한 5대 공학 영역과 [`src/lib/curriculum.ts`](file:///d:/Projects/TypingCode_V2/src/lib/curriculum.ts) 내 기존/신규 모듈 간의 매핑은 다음과 같습니다.

| 단계 | 학습 영역 | 핵심 학습 주제 | TypingCode V2 매핑 모듈 |
| :---: | :--- | :--- | :--- |
| **1단계** | **언어 & 시스템 기반** | Python(AI/상위 제어), C/C++(실시간 펌웨어), Linux CLI(로봇 구동 OS) | `py-basic`(완료), `py-advanced`, `c-basic`, `cpp-basic`, `linux-basic`, `linux-shell` |
| **2단계** | **임베디드 I/O & 센서 인지** | 디지털/아날로그 핀 제어, ADC 센서 읽기, PWM 모터 신호, 센서 노이즈 필터링 | `c-arduino` (기존 설계) + **`py-physical-ai` Sec 1** |
| **3단계** | **제어 공학 & 기구학·경로 탐색** | PID 피드백 제어기, 2D 로봇 기구학(좌표·각도 변환), 격자 맵 장애물 회피(`BFS`/`A*`) | **`py-physical-ai` Sec 2 ~ Sec 3** |
| **4단계** | **로봇 미들웨어 아키텍처** | 유한 상태 머신(FSM), 안전 워치독(비상 정지), ROS 2 스타일 `Pub/Sub` 토픽 통신 구조 | **`py-physical-ai` Sec 4** |
| **5단계** | **AI 두뇌 (RL · VLA 기초)** | 텐서·경사하강법 기초, 보상 함수(Reward Shaping), `Q-Learning` 정책, VLA 명령 플래닝 | `py-bigdata`, `py-ai` (기존 설계) + **`py-physical-ai` Sec 5** |

---

## 3. 신규 모듈 상세 커리큘럼 설계 (`py-physical-ai`)

### 3.1 모듈 메타데이터 규격 ([`src/lib/curriculum.ts`](file:///d:/Projects/TypingCode_V2/src/lib/curriculum.ts) 등록용)
- **트랙 위치**: `python` 트랙 내 심화 응용 모듈 (`py-ai` 다음 단계)
- **모듈 ID**: `py-physical-ai`
- **URL 슬러그**: `practiceUrl: '/practice/python_physical_ai'`
- **데이터 디렉토리**: `src/data/curriculum/python_physical_ai/level1.ts` ~ `level25.ts`
- **권장 선수 과정**: `py-basic` (`Lv 1~87`) 완주 (클래스 `class`, 리스트 컴프리헨션, 예외 처리 필수 활용)
- **문항 구성 규격**: [`docs/CONTENT_AUTHORING.md`](file:///d:/Projects/TypingCode_V2/docs/CONTENT_AUTHORING.md) 표준 준수
  - 일반 학습 레벨(20개 레벨 × 13문항 = 260문항): 홀수 `block` ⇄ 짝수 `fill_blank` + `fix_bug` + `one_line` + `predict_output`
  - 섹션 종합 레벨(5개 레벨 × 10문항 = 50문항): `3 fill_blank` + `3 fix_bug` + `2 one_line` + `2 predict_output` (총 **25레벨 · 310문항**)

### 3.2 섹션별 레벨 로드맵 (5섹션 · 25레벨)

#### Section 1: 센서 데이터 인지와 노이즈 필터링 (`Lv 1 ~ Lv 5`)
- **Lv 1**: 거리 센서(LiDAR/초음파) 원시 데이터 읽기와 유효 측정 범위 클리핑(`min`/`max` Clamping)
- **Lv 2**: 센서 결측치·스파이크 이상치(Outlier) 탐지 및 안전 기본값 대체
- **Lv 3**: 슬라이딩 윈도우 이동평균 필터(Moving Average Filter)로 거리 측정값 평활화
- **Lv 4**: 지수이동평균(EMA) 및 1차원 센서 융합(가중치 보정 필터) 구현
- **Lv 5 (섹션 1 종합)**: 노이즈가 섞인 시계열 센서 스트림 정제 및 충돌 위험 경보 판정 (10문항)

#### Section 2: 피드백 제어 공학과 PID 모터 제어 (`Lv 6 ~ Lv 10`)
- **Lv 6**: 목표값(`setpoint`)과 현재값(`measured`)의 오차(`error`) 계산 및 On/Off(Bang-Bang) 제어의 한계
- **Lv 7**: 비례 제어(`P Control`, $u = K_p \cdot e$)와 모터 PWM 출력 포화(Saturation) 제한
- **Lv 8**: 급격한 오버슈트를 억제하는 미분 제어(`PD Control`, 변화율 감쇠) 추가
- **Lv 9**: 정상 상태 오차를 제거하는 적분항과 `PIDController` 클래스 완성 (Integral Windup 방지 포함)
- **Lv 10 (섹션 2 종합)**: 가상 드론 고도 유지 및 자율주행 크루즈 속도 PID 제어 시뮬레이션 (10문항)

#### Section 3: 로봇 기구학과 자율주행 경로 계획 (`Lv 11 ~ Lv 15`)
- **Lv 11**: 2D 평면 로봇 포즈`(x, y, heading)` 표현과 이산 시간(`dt`) 위치 업데이트(오도메트리 기초)
- **Lv 12**: 차동 구동(Differential Drive) 바퀴 로봇의 좌·우 바퀴 속도와 직진·회전 운동 변환
- **Lv 13**: 2관절 로봇 팔 순기구학(Forward Kinematics)과 작업 공간 도달 가능 여부 판정
- **Lv 14**: 2D 격자 맵(Occupancy Grid) 장애물 표현, 맨해튼 거리 휴리스틱, `BFS`/`A*` 최단 경로 탐색
- **Lv 15 (섹션 3 종합)**: 시작점부터 목표 지점까지 장애물을 우회하는 웨이포인트 경로 생성기 (10문항)

#### Section 4: 로봇 상태 머신과 ROS 2 통신 아키텍처 (`Lv 16 ~ Lv 20`)
- **Lv 16**: 로봇 행동 유한 상태 머신(FSM: `IDLE` → `PATROL` → `AVOID` → `DOCKING`) 설계
- **Lv 17**: 하드웨어 안전 공학 — 센서 타임아웃 워치독(Watchdog)과 비상 정지(`EMERGENCY_STOP`) 인터럽트
- **Lv 18**: ROS 2 핵심 패턴 1 — 메시지 패킷 구조와 토픽 브로커(`TopicBus`: `publish` / `subscribe`) 구현
- **Lv 19**: ROS 2 핵심 패턴 2 — `SensorNode` → `PlannerNode` → `MotorNode` 비동기 파이프라인 결합
- **Lv 20 (섹션 4 종합)**: 다중 센서 토픽을 구독해 주행 명령 토픽을 발행하는 자율주행 노드 검증 (10문항)

#### Section 5: 강화학습 정책과 VLA 에이전트 루프 (`Lv 21 ~ Lv 25`)
- **Lv 21**: 물리 에이전트 보상 함수 설계(Reward Shaping: 목표 근접 보너스, 충돌·에너지 페널티)
- **Lv 22**: 격자 로봇 월드 상태-행동 가치표(`Q-Table`)와 벨만 업데이트($Q(s,a) \leftarrow Q(s,a) + \alpha [r + \gamma \max Q(s',a') - Q(s,a)]$)
- **Lv 23**: 탐험과 활용(`epsilon-greedy`) 전략 및 학습된 정책(Policy) 그리디 주행 롤아웃
- **Lv 24**: VLA(Vision-Language-Action) 태스크 플래닝 기초 — 구조화된 자연어 명령과 객체 인식 좌표를 서브태스크 행동 시퀀스(`MOVE_TO` → `GRASP` → `PLACE`)로 변환
- **Lv 25 (파이널 마스터)**: `센서 필터링 → A* 경로 탐색 → PID 추종 제어 → 목표 작업 수행` 전체 피지컬 AI 루프 통합 검증 (10문항)

---

## 4. 런타임 및 시각화 구현 아키텍처 (🐴 Ponytail 단계별 전략)

무거운 외부 3D 엔진(Three.js, WebGL 물리 엔진 등) 의존성을 추가하지 않고 **2단계 점진적 아키텍처**로 구현합니다.

### Phase 1: 기존 0ms 로컬 AST 기반 즉시 구현 (Zero UI/Package Changes)
- **추가 npm 패키지**: `0개`
- **동작 방식**:
  1. 각 문항의 `testCases`에 시계열 가상 센서 입력(`stdin`)과 물리 환경 스텝 루프 코드를 배치합니다.
  2. [`src/lib/blockEvaluator.ts`](file:///d:/Projects/TypingCode_V2/src/lib/blockEvaluator.ts)에 파이썬 표준 `math` 모듈 기본 함수(`math.sqrt`, `math.sin`, `math.cos`, `math.atan2`, `math.pi`, `math.radians`, `math.degrees`) 화이트리스트만 약 15줄 추가합니다.
  3. 정적 채점(`checkSubmissionPass`)에서 출력 결과(`stdout`)와 함께 필수 제어 구조(`class`, 루프, 오차 누적 변수 등) 사용 여부를 검증합니다.

### Phase 2: 경량 2D 로봇 시뮬레이터 뷰포트 확장 (선택 사항 — `RobotSimPreview.tsx`)
- 웹 트랙에서 [`WebPreview.tsx`](file:///d:/Projects/TypingCode_V2/src/components/WebPreview.tsx)를 우측 상단 패널에 마운트하는 것과 동일한 슬롯 구조를 재사용합니다.
- **순수 HTML5 `<canvas>` 2D API (~200줄 내외)**만 사용하여 세 가지 경량 시각 모드를 렌더링합니다:
  1. **1D/시계열 차트 모드 (Sec 1~2)**: 원시 노이즈 센서 점선 vs 필터링 실선, 목표 위치(`setpoint`) 대비 PID 수렴 곡선 시각화
  2. **2D 격자 & 자율주행 로버 모드 (Sec 3~5)**: 장애물 격자 맵, 가상 거리 센서 광선(Ray), `A*` 탐색 경로 및 로봇 이동 애니메이션 재생
  3. **2관절 로봇 팔 모드 (Sec 3 & Sec 5)**: 관절 각도$(\theta_1, \theta_2)$ 출력에 따른 로봇 팔 엔드이펙터(End-Effector) 목표 물체 도달 애니메이션

---

## 5. `/languages` 학습 방향(로드맵) 통합 스펙

향후 구현 시 [`src/lib/curriculum.ts`](file:///d:/Projects/TypingCode_V2/src/lib/curriculum.ts)의 `LEARNING_ROADMAPS` 배열에 아래 **7번째 학습 방향**을 추가하여 기존 모듈들과 유기적으로 연결합니다.

```ts
{
  id: 'physical-ai',
  icon: '🤖',
  color: '#10b981',
  title_ko: '피지컬 AI · 로보틱스',
  title_en: 'Physical AI & Robotics',
  target_ko: '센서 · PID 제어 · ROS 2 · 로봇 AI',
  target_en: 'Sensors, PID, ROS 2 & Embodied AI',
  summary_ko: '파이썬·리눅스 기초부터 C/C++ 하드웨어 제어, 센서 필터링·PID·경로 탐색·로봇 AI 루프까지 단계별로 완성합니다.',
  summary_en: 'Progress from Python & Linux to C/C++ hardware I/O, PID control, path planning, and Embodied AI loops.',
  stages: [
    {
      id: 'pai-1',
      stepNumber: 1,
      title_ko: '1단계 · 파이썬 코어와 리눅스 로봇 OS 환경',
      title_en: 'Stage 1 · Python Core & Linux Robot OS CLI',
      subtitle_ko: '로봇 소프트웨어의 주력 언어인 파이썬과 구동 환경인 리눅스 터미널을 익힙니다.',
      subtitle_en: 'Master Python programming and the Linux CLI environment powering ROS 2.',
      moduleIds: ['py-basic', 'py-advanced', 'linux-basic', 'linux-shell'],
    },
    {
      id: 'pai-2',
      stepNumber: 2,
      title_ko: '2단계 · C/C++ 실시간 하드웨어 & 임베디드 제어',
      title_en: 'Stage 2 · Real-Time C/C++ & Embedded Hardware I/O',
      subtitle_ko: '센서 ADC 입력, PWM 모터 제어, 메모리 안전한 고성능 C/C++ 시스템 제어를 다집니다.',
      subtitle_en: 'Control sensors, PWM actuators, and real-time memory with Embedded C and Modern C++.',
      moduleIds: ['c-basic', 'c-arduino', 'cpp-basic', 'cpp-modern'],
    },
    {
      id: 'pai-3',
      stepNumber: 3,
      title_ko: '3단계 · 로보틱스 제어 공학 & 피지컬 AI 두뇌',
      title_en: 'Stage 3 · Robotics Control, Path Planning & Embodied AI',
      subtitle_ko: '센서 필터링, PID 제어, A* 자율주행 경로 계획, ROS 2 노드 통신과 강화학습·VLA 루프를 구현합니다.',
      subtitle_en: 'Implement sensor filtering, PID, A* path planning, ROS 2 nodes, and RL/VLA agent loops.',
      moduleIds: ['py-bigdata', 'py-ai', 'py-physical-ai'],
    },
  ],
}
```

---

## 6. 향후 구현 착수 체크리스트

1. [ ] [`src/lib/blockEvaluator.ts`](file:///d:/Projects/TypingCode_V2/src/lib/blockEvaluator.ts): `import math` 및 기본 삼각함수·제곱근(`sqrt`, `sin`, `cos`, `atan2`, `pi`, `radians`, `degrees`) 내장 지원 추가
2. [ ] `src/data/curriculum/python_physical_ai/`: `level1.ts` ~ `level25.ts` (5섹션 · 310문항) 작성
3. [ ] [`src/lib/curriculum.ts`](file:///d:/Projects/TypingCode_V2/src/lib/curriculum.ts): `python` 트랙에 `py-physical-ai` 모듈 등록(`isLocked: false`) 및 `LEARNING_ROADMAPS`에 `physical-ai` 추가
4. [ ] [`src/lib/curriculumSections.ts`](file:///d:/Projects/TypingCode_V2/src/lib/curriculumSections.ts) & [`src/lib/practiceData.ts`](file:///d:/Projects/TypingCode_V2/src/lib/practiceData.ts): 5개 섹션 메타데이터 및 `PYTHON_PHYSICAL_AI_ROUND_1~25` 매핑 등록
5. [ ] 검증 게이트 실행: `npx tsc --noEmit --noUnusedLocals` (`0 errors`) 및 전 문항 AST `expectedOutput` 정합성 100% 검증
