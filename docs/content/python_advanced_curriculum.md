# 파이썬 타자 연습 커리큘럼 — Advanced (`py-advanced` 심화 과정 로드맵)

> **역할 경계 재정렬 완료**: `py-basic`(2-Part · 14섹션 · 87레벨)에서 **클래스 기초(`class`, `__init__`, `self`, `__str__`, 단일 상속)**, **예외 처리 기초(`try-except-else-finally`, `raise`)**, **리스트 컴프리헨션·삼항식·`*args`·`lambda`**까지 모두 완주하므로, `py-advanced`는 그 위의 **중·고급 아키텍처 및 파이썬 심화 패러다임**에 집중합니다.

---

## 📌 `py-basic`(87레벨) 졸업 후 `py-advanced`(20레벨)에서 다루는 핵심 주제

### 1. 객체지향 아키텍처 심화 (Deep OOP)
- `super().__init__()` 부모 생성자·메서드 위임 및 다중 상속(MRO)
- `@property`와 세터(`@x.setter`)를 활용한 캡슐화
- `@classmethod`, `@staticmethod` 팩토리 패턴
- 심화 매직 메서드 (`__repr__`, `__len__`, `__eq__`, `__lt__`, `__getitem__`)
- 추상 기반 클래스 (`abc.ABC`, `@abstractmethod`) 및 다형성 인터페이스 설계

### 2. 함수형 프로그래밍 & 컴프리헨션 심화
- 키워드 가변 인자 (`**kwargs`) 및 `*args, **kwargs` 완전 언패킹 전달
- 딕셔너리 컴프리헨션 (`{k: v for ...}`) 및 집합 컴프리헨션 (`{expr for ...}`)
- 일급 함수, 클로저(`nonlocal`)와 커스텀 데코레이터(`@decorator`, `functools.wraps`)
- 이터레이터 프로토콜(`__iter__`, `__next__`)과 제너레이터(`yield`, 제너레이터 표현식)

### 3. 고급 예외 설계 & 컨텍스트 매니저
- 사용자 정의 예외 계층 설계 (`class AppError(Exception):`)와 예외 체이닝(`raise ... from e`)
- 컨텍스트 매니저 (`with` 문, `__enter__` / `__exit__`, `contextlib`)
- 파일 입출력 (`with open(...)`), JSON / CSV 직렬화 및 `pathlib` 경로 제어

### 4. 표준 라이브러리 · 모듈/패키지 · 정규표현식
- 모듈 분리(`import`, `from ... import`, `__name__ == "__main__"`)와 패키지 구조
- `collections` (`Counter`, `defaultdict`, `deque`), `itertools`, `functools`
- 정규표현식 (`re` 모듈 패턴 매칭·치환) 및 `datetime` 시간 연산
