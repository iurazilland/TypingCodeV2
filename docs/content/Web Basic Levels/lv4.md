Lv4.
Title_EN: Division Containers
Title_KO: 영역 분할과 레이아웃 상자
Description_EN: Learn how to use div and section container elements to group elements.
Description_KO: 여러 요소를 묶어 그룹화하고 웹페이지의 구획을 나누는 div와 section 상자 태그를 배웁니다.

1.
Guide_EN: Create a block container using the <div> tag. It acts as an invisible wrapper by default.
Guide_KO: 여러 요소를 하나로 묶어 정렬할 때 사용하는 <div> 상자 태그를 작성해 봅니다.
Template_HTML:
<div>
  <p>Group One</p>
</div>

2.
Guide_EN: Add a class attribute to the <div> tag to target it for styling later.
Guide_KO: <div> 태그에 class="box" 속성을 지정하여 스타일 적용을 위한 영역 이름을 설정해 봅니다.
Template_HTML:
<div class="box">
  <p>Group One</p>
</div>

3.
Guide_EN: Create two <div> containers to establish stacked blocks on the page.
Guide_KO: 두 개의 <div> 상자를 연속으로 작성하여 세로로 배치되는 독립 상자 영역들을 생성합니다.
Template_HTML:
<div class="box">
  <p>Box 1</p>
</div>
<div class="box">
  <p>Box 2</p>
</div>

4.
Guide_EN: Define a semantic section using the <section> tag to group content.
Guide_KO: 본문의 논리적이고 의미 있는 구획을 정의하는 <section> 태그를 추가해 봅니다.
Template_HTML:
<section>
  <h2>Main Section</h2>
</section>
<section>
  <h2>Sub Section</h2>
</section>

5.
Guide_EN: Nest a <div> block inside the <section> tag to create structured layouts.
Guide_KO: <section> 구역 안에 본문 영역을 의미하는 <div> 상자를 중첩해서 구조화해 봅니다.
Template_HTML:
<section>
  <h2>Theme</h2>
  <div class="box">
  <p>Content</p>
  </div>
</section>

6.
Guide_EN: Add a class name to the <section> tag to define its type.
Guide_KO: <section> 태그에 class="main" 속성을 할당하여 주 섹션의 명칭을 명시해 봅니다.
Template_HTML:
<section class="main">
  <div class="box">
  <p>Content</p>
  </div>
</section>

7.
Guide_EN: Place two divs inside a section to represent columns.
Guide_KO: 하나의 섹션 안에 두 개의 <div> 상자를 나란히 배치하여 다단 레이아웃의 형태를 잡아 봅니다.
Template_HTML:
<section>
  <div class="left">Left</div>
  <div class="right">Right</div>
</section>

8.
Guide_EN: Build an image card by wrapping an <img> inside a <div class="card"> (reusing Level 3 image).
Guide_KO: <div class="card"> 상자 안에 이미지 태그를 감싸넣어 카드형 이미지 영역을 설계합니다 (Level 3 복습).
Template_HTML:
<div class="card">
  <img src="photo.png" width="80">
  <img src="logo.png" width="80">
</div>

9.
Guide_EN: Add a button inside the card container.
Guide_KO: 이미지 카드 상자 안에 보기 동작을 수행할 <button> 태그를 하단에 배치해 봅니다.
Template_HTML:
<div class="card">
  <img src="photo.png" width="80">
  <button>View</button>
  <button>Share</button>
</div>

10.
Guide_EN: Add a styled heading inside the card container (cumulative review).
Guide_KO: 이미지 위에 span 태그를 중첩한 <h2> 제목을 배치하여 카드 요소를 조립합니다.
Template_HTML:
<div class="card">
  <h2>Photo <span>Card</span></h2>
  <img src="photo.png" width="80">
</div>

11.
Guide_EN: Add a descriptive paragraph <p> below the image inside the card block.
Guide_KO: 카드 안의 이미지 아래에 사진을 상세하게 설명하는 단락 <p> 태그를 추가합니다.
Template_HTML:
<div class="card">
  <h2>Photo <span>Card</span></h2>
  <img src="photo.png" width="80">
  <p>Description text.</p>
</div>

12.
Guide_EN: Replace the normal button with a link button inside the card.
Guide_KO: 단락 아래에 링크 <a> 태그로 둘러싸인 조립형 이동 버튼을 배치해 봅니다.
Template_HTML:
<div class="card">
  <h2>Photo <span>Card</span></h2>
  <img src="photo.png" width="80">
  <a href="#"><button>Go</button></a>
</div>

13.
Guide_EN: Create a profile card container with strong bold names.
Guide_KO: 프로필 <div class="profile"> 상자 안에 <strong>으로 강조된 이름과 직업 정보를 정렬합니다.
Template_HTML:
<div class="profile">
  <h2>Name: <strong>User</strong></h2>
  <p>Developer</p>
</div>

14.
Guide_EN: Wrap the profile card inside a <section> container for structural grouping.
Guide_KO: 완성된 프로필 상자를 큰 구획을 정의하는 <section> 태그 블록으로 다시 감싸줍니다.
Template_HTML:
<section>
  <div class="profile">
  <h2>Name: <strong>User</strong></h2>
  <p>Developer</p>
  </div>
</section>

15.
Guide_EN: Place two cards inside a section to represent multiple items in a zone.
Guide_KO: 한 구역의 섹션 안에 동일한 등급의 카드 상자 2개를 나열하여 다중 구조를 만들어 봅니다.
Template_HTML:
<section>
  <div class="card">Card A</div>
  <div class="card">Card B</div>
  <div class="card">Card C</div>
</section>

16.
Guide_EN: Structure the feed section with a card inside.
Guide_KO: 피드 영역(feed) 내부에 카드 상자를 계층 구조로 배치합니다.
Template_HTML:
<section class="feed">
  <div class="card">
  <p>Post content.</p>
  </div>
</section>

17.
Guide_EN: Add a main heading <h1> above the feed section.
Guide_KO: 피드 영역 상단에 페이지 전체 제목 <h1>을 추가하여 정보의 위계를 구성해 봅니다.
Template_HTML:
<h1>My Feed</h1>
<section>
  <div class="card">
  <p>Post content.</p>
  </div>
</section>

18.
Guide_EN: Construct a grid item structure inside a section.
Guide_KO: 섹션 영역 내부에 개별 아이템 상자 구조를 이어서 조립해 봅니다.
Template_HTML:
<section>
  <div class="item">
  <h3>Item 1</h3>
  <p>Desc 1</p>
  </div>
</section>

19.
Guide_EN: Add an interactive button inside the item box layout.
Guide_KO: 개별 아이템 상자 내에 추가적으로 세부 내용을 확인할 수 있는 버튼을 배치합니다.
Template_HTML:
<!DOCTYPE html>
<html>
<head>
  <title>Division Containers</title>
</head>
<body>
  <section>
  <div class="item">
  <h3>Item 1</h3>
  <p>Desc 1</p>
  <button>Detail</button>
  </div>
  </section>
</body>
</html>

20.
Guide_EN: Assemble a complete portfolio layout using html, body, sections, card containers, images, and buttons.
Guide_KO: <html> 내에 포트폴리오 제목, 이미지, 강조 설명, 링크 버튼이 든 카드를 종합 조립합니다.
Template_HTML:
<!DOCTYPE html>
<html>
<head>
  <title>Division Containers</title>
</head>
<body>
  <h1>Portfolio</h1>
  <section>
  <div class="card">
  <h3>Project <span>One</span></h3>
  <img src="photo.png" width="80">
  <p>My <strong>work</strong>.</p>
  <a href="#">
  <button>View</button>
  </a>
  </div>
  </section>
</body>
</html>
