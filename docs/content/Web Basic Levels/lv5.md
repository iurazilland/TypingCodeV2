Lv5. [Challenge]
Title_EN: HTML Core Structure Review
Title_KO: HTML 기초 구조 복습
Description_EN: Review basic tags, links, images, buttons, and containers from Level 1 to 4.
Description_KO: 1단계부터 4단계까지 학습한 기본 태그, 링크, 이미지, 버튼, 컨테이너 구조를 종합적으로 복습합니다.

### Q1. [Blank] Header Tag / 제목 태그 빈칸 채우기
Guide_EN: Fill in the blank to complete the main heading tag.
Guide_KO: 빈칸을 채워 메인 대제목 태그를 완성하세요.
Template:
<^^>Hello World</^^>
TestCases:
Input: (None)
Output: <h1>Hello World</h1>

### Q2. [Blank] Hyperlink Attribute / 링크 속성 빈칸 채우기
Guide_EN: Fill in the blank to complete the hyperlink reference attribute.
Guide_KO: 빈칸을 채워 하이퍼링크 연결 목적지 속성을 완성하세요.
Template:
<a ^^^^="https://google.com">Click Here</a>
TestCases:
Input: (None)
Output: <a href="https://google.com">Click Here</a>

### Q3. [Blank] Image Source / 이미지 경로 빈칸 채우기
Guide_EN: Fill in the blank to complete the image source attribute.
Guide_KO: 빈칸을 채워 이미지의 파일 소스 경로 속성을 완성하세요.
Template:
<img ^^^="photo.svg" width="100">
TestCases:
Input: (None)
Output: <img src="photo.svg" width="100">

### Q4. [Fix] Closing Tag Error / 닫는 태그 누락 수정
Guide_EN: Fix the closing tag of the paragraph to resolve the markup error.
Guide_KO: 틀린 곳을 수정하여 단락을 닫아주는 마크업 오류를 해결하세요.
Template:
<p>Welcome to Web Coding</d>
TestCases:
Input: (None)
Output: <p>Welcome to Web Coding</p>

### Q5. [Fix] Button Attribute Typo / 버튼 속성 오타 수정
Guide_EN: Fix the typo in the disabled attribute to make the button correctly disabled.
Guide_KO: 틀린 곳을 수정하여 버튼의 비활성화(disabled) 오타를 해결하세요.
Template:
<button dissabled>Submit</button>
TestCases:
Input: (None)
Output: <button disabled>Submit</button>

### Q6. [Fix] Image Width Unit Error / 이미지 크기 속성명 수정
Guide_EN: Fix the typo in the width attribute name.
Guide_KO: 틀린 곳을 수정하여 이미지의 가로 크기(width) 속성명의 오타를 해결하세요.
Template:
<img src="logo.svg" widht="80">
TestCases:
Input: (None)
Output: <img src="logo.svg" width="80">

### Q7. [Line] Navigation Link / 네비게이션 링크 추가
Guide_EN: Write a single hyperlink element with text "Home" linking to "#" in the empty line.
Guide_KO: 비어있는 줄에 "#"으로 연결되는 "Home" 링크 요소를 한 줄로 작성하세요.
Template:
<div class="menu">
  <span>Link:</span>

</div>
TestCases:
Input: (None)
Output:
<div class="menu">
  <span>Link:</span>
  <a href="#">Home</a>
</div>

### Q8. [Line] Main Action Button / 주요 동작 버튼
Guide_EN: Write a disabled button with text "Send" in the empty line.
Guide_KO: 비어있는 줄에 "Send" 글자가 들어간 비활성화된 버튼을 한 줄로 작성하세요.
Template:
<div class="form-group">
  <span>Click to submit:</span>

</div>
TestCases:
Input: (None)
Output:
<div class="form-group">
  <span>Click to submit:</span>
  <button disabled>Send</button>
</div>

### Q9. [Full Code] Simple Bio Card / 간단한 소개 카드
Guide_EN: Create a div container with class name "card" containing an h2 heading "Alice" and a p paragraph "Web Developer".
Guide_KO: 클래스명이 "card"인 div 상자 안에, h2 제목 "Alice"와 p 단락 "Web Developer"를 포함하는 프로필 카드 마크업을 완성하세요.
Template:


TestCases:
Input: (None)
Output:
<div class="card">
  <h2>Alice</h2>
  <p>Web Developer</p>
</div>

### Q10. [Full Code] Simple Contact Box / 간단한 연락처 상자
Guide_EN: Create a div container with class name "box" containing an h3 heading "Contact" and a button "Email Us".
Guide_KO: 클래스명이 "box"인 div 상자 안에, h3 제목 "Contact"와 "Email Us" 버튼을 포함하는 연락처 상자를 완성하세요.
Template:


TestCases:
Input: (None)
Output:
<div class="box">
  <h3>Contact</h3>
  <button>Email Us</button>
</div>
