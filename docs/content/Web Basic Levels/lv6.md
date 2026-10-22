Lv6.
Title_EN: Unordered & Ordered Lists
Title_KO: 순서 없는 목록과 순서 있는 목록
Description_EN: Learn how to group items using list tags like ul, ol, and li.
Description_KO: 항목들을 나열하여 그룹화하는 ul(순서 없음), ol(순서 있음), li(항목) 태그를 배웁니다.

1.
Guide_EN: Use the <ul> tag with a nested <li> tag to create a simple bulleted item.
Guide_KO: <ul> 태그 내부에 <li> 태그를 넣어 글머리 기호가 있는 목록의 첫 항목을 만들어 봅니다.
Template_HTML:
<ul>
  <li>Apples</li>
</ul>

2.
Guide_EN: Add multiple <li> tags to list multiple items.
Guide_KO: 여러 개의 <li> 항목 태그를 연속으로 추가하여 리스트를 길게 나열해 봅니다.
Template_HTML:
<ul>
  <li>Apples</li>
  <li>Oranges</li>
</ul>

3.
Guide_EN: Use the <ol> tag with an <li> tag to create a numbered list.
Guide_KO: 번호 순서가 매겨지는 목록을 만들기 위해 <ol> 태그와 <li> 태그를 사용해 봅니다.
Template_HTML:
<ol>
  <li>First</li>
</ol>

4.
Guide_EN: Add multiple <li> tags inside the <ol> tag to display ordered list items.
Guide_KO: <ol> 태그 안에 여러 개의 <li> 태그를 적어 순서대로 숫자가 매겨지는 목록을 만듭니다.
Template_HTML:
<ol>
  <li>First</li>
  <li>Second</li>
</ol>

5.
Guide_EN: Nest a <strong> tag inside the <li> item to emphasize list text (cumulative review).
Guide_KO: 목록 항목의 특정 단어 글자를 두껍게 강조하기 위해 <li> 내에 <strong>을 중첩합니다.
Template_HTML:
<ul>
  <li><strong>Red</strong> Apple</li>
</ul>

6.
Guide_EN: Nest an <em> tag inside the <li> item to italicize list text (cumulative review).
Guide_KO: 목록 항목 글자를 기울여 강조하기 위해 <li> 태그 내부에 <em> 태그를 사용해 봅니다.
Template_HTML:
<ul>
  <li><em>Sweet</em> Orange</li>
</ul>

7.
Guide_EN: Place a hyperlink <a> inside a list item to create a navigation link (cumulative review).
Guide_KO: 클릭하면 이동하는 메뉴를 구현하기 위해 목록 항목 내부에 <a> 링크를 배치합니다.
Template_HTML:
<ul>
  <li><a href="#">Home</a></li>
</ul>

8.
Guide_EN: Create multiple list items containing hyperlinks.
Guide_KO: 웹페이지의 메뉴 바나 사이트맵처럼 여러 개의 링크 목록 항목들을 나열해 봅니다.
Template_HTML:
<ul>
  <li><a href="#">Home</a></li>
  <li><a href="#">Blog</a></li>
</ul>

9.
Guide_EN: Wrap the list inside a <div> container to group it (cumulative review).
Guide_KO: <div> 상자 영역으로 목록 전체를 감싸서 스타일링이 용이한 메뉴 영역을 묶어 봅니다.
Template_HTML:
<div class="menu">
  <ul>
    <li>Home</li>
  </ul>
</div>

10.
Guide_EN: Add an <h2> heading inside the menu container above the list.
Guide_KO: 메뉴 영역 상단에 <h2> 제목을 배치하고 그 아래에 목록이 오도록 조립해 봅니다.
Template_HTML:
<div class="menu">
  <h2>Links</h2>
  <ul>
    <li>Home</li>
  </ul>
</div>

11.
Guide_EN: Nest a <button> tag inside a list item to create an interactive action (cumulative review).
Guide_KO: 각 항목 목록의 오른쪽에 클릭하여 삭제하는 등의 동작을 수행할 <button>을 추가합니다.
Template_HTML:
<ul>
  <li>Item <button>Del</button></li>
</ul>

12.
Guide_EN: Combine a <span> tag and a <button> inside a list item.
Guide_KO: 목록 항목 내부에서 이름을 <span>으로 묶고, 버튼 요소를 나란히 배치해 봅니다.
Template_HTML:
<ul>
  <li>
    <span>Item 1</span>
    <button>Buy</button>
  </li>
</ul>

13.
Guide_EN: Nest a <ul> list inside another <li> element to create a sub-list.
Guide_KO: 목록 항목 <li> 내부 공간에 다시 <ul> 태그를 중첩시켜 하위 목록 구조를 만들어 봅니다.
Template_HTML:
<ul>
  <li>Fruits
    <ul>
      <li>Apple</li>
    </ul>
  </li>
</ul>

14.
Guide_EN: Add multiple sub-items inside the nested unordered list.
Guide_KO: 중첩된 하위 목록 내부에 여러 개의 하위 <li> 태그를 정렬해 봅니다.
Template_HTML:
<ul>
  <li>Fruits
    <ul>
      <li>Apple</li>
      <li>Banana</li>
    </ul>
  </li>
</ul>

15.
Guide_EN: Nest an <img> tag inside a list item to create a rich media list (cumulative review).
Guide_KO: 리스트 항목 안에 작은 크기의 이미지 <img> 태그와 텍스트를 나란히 배치해 봅니다.
Template_HTML:
<ul>
  <li>
    <img src="photo.svg" width="30">
    <span>Photo 1</span>
  </li>
</ul>

16.
Guide_EN: Create multiple list items with images and descriptions.
Guide_KO: 여러 개의 이미지 항목과 설명 텍스트가 들어간 리스트 묶음을 가로 세로 배치합니다.
Template_HTML:
<ul>
  <li>
    <img src="photo.svg" width="30">
    <span>Item A</span>
  </li>
  <li>
    <img src="photo.svg" width="30">
    <span>Item B</span>
  </li>
</ul>

17.
Guide_EN: Nest an ordered list inside a <section> element for structural clarity.
Guide_KO: 논리적 구역을 나누는 <section> 태그 내부에 순서 있는 목록 <ol>을 구조화해 봅니다.
Template_HTML:
<section>
  <h2>Steps</h2>
  <ol>
    <li>Step One</li>
    <li>Step Two</li>
  </ol>
</section>

18.
Guide_EN: Wrap the list structure within a <body> layout container.
Guide_KO: <body> 태그 내부의 메인 레이아웃 구역 하위에 네비게이션용 메뉴 목록들을 감싸줍니다.
Template_HTML:
<body>
  <h2>Nav Menu</h2>
  <ul>
    <li><a href="#">Intro</a></li>
    <li><a href="#">Setup</a></li>
  </ul>
</body>

19.
Guide_EN: Build a complex task list card containing check buttons.
Guide_KO: <div class="card"> 카드 안에 할 일 목록과 완료 <button> 세트를 결합해 봅니다.
Template_HTML:
<!DOCTYPE html>
<html>
<head>
  <title>Lists</title>
</head>
<body>
  <div class="card">
    <h3>Todo List</h3>
    <ul>
      <li>
        Task 1 <button>Done</button>
      </li>
      <li>
        Task 2 <button>Done</button>
      </li>
    </ul>
  </div>
</body>
</html>

20.
Guide_EN: Assemble a complete page containing header, lists, images, bold titles, and buttons.
Guide_KO: <html> 및 <body> 내에 전체 제목, 목록 컨테이너, 이미지와 굵은 링크를 종합 조립합니다.
Template_HTML:
<!DOCTYPE html>
<html>
<head>
  <title>Lists</title>
</head>
<body>
  <h1>Gallery List</h1>
  <div class="list-container">
    <ul>
      <li>
        <img src="photo.svg" width="40">
        <a href="#">
          <strong>View</strong>
        </a>
      </li>
    </ul>
  </div>
</body>
</html>
