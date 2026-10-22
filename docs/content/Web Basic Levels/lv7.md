Lv7.
Title_EN: HTML Tables
Title_KO: 표(Table) 요소 다루기
Description_EN: Learn how to structure row and column data with table, colspan, and rowspan.
Description_KO: 행과 열로 이루어진 격자 표를 구성하는 table, tr, th, td 태그와 셀 병합(colspan, rowspan) 속성을 배웁니다.

1.
Guide_EN: Use the <table>, <tr>, and <th> tags to create a table with one header cell.
Guide_KO: <table> 태그 내에 행을 만드는 <tr>과 헤더를 뜻하는 <th>를 넣어 표의 첫 칸을 만들어 봅니다.
Template_HTML:
<table>
  <tr>
    <th>Name</th>
  </tr>
</table>

2.
Guide_EN: Add multiple <th> tags to create columns in the header row.
Guide_KO: 헤더 행(<tr>) 내부에 여러 개의 <th> 태그를 나열하여 다열 헤더 구조를 만듭니다.
Template_HTML:
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
</table>

3.
Guide_EN: Add a data row <tr> with a <td> cell below the header row.
Guide_KO: 헤더 행 아래에 일반 데이터를 나타내는 행 <tr>과 셀 <td>를 추가해 봅니다.
Template_HTML:
<table>
  <tr>
    <th>Name</th>
  </tr>
  <tr>
    <td>Alice</td>
  </tr>
</table>

4.
Guide_EN: Create a table with multiple header columns and matching data cells.
Guide_KO: 이름과 나이 헤더 구조에 맞추어 각각 매칭되는 <td> 데이터들을 배치해 봅니다.
Template_HTML:
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>20</td>
  </tr>
</table>

5.
Guide_EN: Add the border="1" attribute to make the table outline visible, and stack multiple data row <tr> blocks.
Guide_KO: 표의 격자 윤곽선을 명확히 보기 위해 <table border="1"> 속성을 추가하고 데이터 행 <tr>을 쌓아 봅니다.
Template_HTML:
<table border="1">
  <tr>
    <th>Name</th>
  </tr>
  <tr>
    <td>Alice</td>
  </tr>
  <tr>
    <td>Bob</td>
  </tr>
</table>

6.
Guide_EN: Nest a <strong> tag inside the <th> header cell (cumulative review).
Guide_KO: 표의 헤더 제목 글자를 더욱 강조하기 위해 <th> 태그 안에 <strong> 태그를 중첩합니다.
Template_HTML:
<table border="1">
  <tr>
    <th><strong>ID</strong></th>
  </tr>
</table>

7.
Guide_EN: Use a <span> tag inside a <td> cell to wrap text for inline styling (cumulative review).
Guide_KO: 특정 데이터의 텍스트에만 속성을 가하기 위해 <td> 내부에 <span> 태그를 감싸봅니다.
Template_HTML:
<table border="1">
  <tr>
    <td><span>Alice</span></td>
  </tr>
</table>

8.
Guide_EN: Place a hyperlink <a> inside a table cell (cumulative review).
Guide_KO: 표 내부의 특정 이름을 클릭 시 이동하게 만들기 위해 <td> 안에 <a> 링크를 배치합니다.
Template_HTML:
<table border="1">
  <tr>
    <td><a href="#">Link</a></td>
  </tr>
</table>

9.
Guide_EN: Wrap the table inside a <div> wrapper to group and structure the layout (cumulative review).
Guide_KO: 표의 크기를 유연하게 조절하기 위해 <table border="1">을 <div> 상자 영역으로 묶어 배치합니다.
Template_HTML:
<div class="wrapper">
  <table border="1">
    <tr>
      <th>Name</th>
    </tr>
  </table>
</div>

10.
Guide_EN: Use the colspan attribute to merge columns horizontally.
Guide_KO: colspan 속성을 사용하여 가로로 인접한 열들을 하나로 합쳐 봅니다.
Template_HTML:
<table border="1">
  <tr>
    <th colspan="2">Info</th>
  </tr>
  <tr>
    <td>Name</td>
    <td>Age</td>
  </tr>
</table>

11.
Guide_EN: Use the rowspan attribute to merge rows vertically.
Guide_KO: rowspan 속성을 지정하여 세로로 인접한 행들을 하나로 합쳐 봅니다.
Template_HTML:
<table border="1">
  <tr>
    <td rowspan="2">ID</td>
    <td>Alice</td>
  </tr>
  <tr>
    <td>Bob</td>
  </tr>
</table>

12.
Guide_EN: Use the <caption> tag inside the table to add a table title.
Guide_KO: 표 내부의 최상단에 표의 전체 제목을 설명하는 <caption> 태그를 지정해 봅니다.
Template_HTML:
<table border="1">
  <caption>Users</caption>
  <tr>
    <th>Name</th>
  </tr>
</table>

13.
Guide_EN: Nest an <img> tag inside a <td> cell (cumulative review).
Guide_KO: 회원의 프로필 이미지를 표 내부에 렌더링하기 위해 <td> 태그 안에 <img> 태그를 삽입합니다.
Template_HTML:
<table border="1">
  <tr>
    <td>
      <img src="photo.svg" width="20">
    </td>
  </tr>
</table>

14.
Guide_EN: Combine an image and a span text side by side inside a table cell.
Guide_KO: 데이터 셀 안에 프로필 이미지 <img>와 텍스트 <span>을 나란히 배열하여 마크업 합니다.
Template_HTML:
<table border="1">
  <tr>
    <td>
      <img src="photo.svg" width="20">
      <span>Alice</span>
    </td>
  </tr>
</table>

15.
Guide_EN: Nest a <ul> list inside a table cell to group nested bullet points (cumulative review).
Guide_KO: 데이터 셀 <td> 내부의 세부 항목 표현을 위해 <ul> 목록 태그를 중첩시켜 봅니다.
Template_HTML:
<table border="1">
  <tr>
    <td>
      <ul>
        <li>Item 1</li>
      </ul>
    </td>
  </tr>
</table>

16.
Guide_EN: Nest multiple list items inside a table cell.
Guide_KO: 표의 한 칸 안에서 여러 기술 목록을 순서대로 나열하는 중첩 구조를 디자인합니다.
Template_HTML:
<table border="1">
  <tr>
    <td>Skills</td>
    <td>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    </td>
  </tr>
</table>

17.
Guide_EN: Place the table inside a structural <section> layout (cumulative review).
Guide_KO: 웹페이지 본문의 특정 논리적 구역을 담당하는 <section> 영역 하단에 테이블 표를 포함시킵니다.
Template_HTML:
<section>
  <h2>Status</h2>
  <table border="1">
    <tr>
      <th>State</th>
    </tr>
  </table>
</section>

18.
Guide_EN: Structure the table inside a <body> layout container.
Guide_KO: <body> 태그 하위에 관리자 패널용 제목 요소와 데이터 표시 표를 구조화합니다.
Template_HTML:
<body>
  <h3>Admin</h3>
  <table border="1">
    <tr>
      <td>User 1</td>
    </tr>
  </table>
</body>

19.
Guide_EN: Place a table inside a card container (cumulative review).
Guide_KO: 요소를 부각시키는 깔끔한 카드 <div class="card"> 컨테이너 내부에 사용자 표 데이터를 장식합니다.
Template_HTML:
<!DOCTYPE html>
<html>
<head>
  <title>Tables</title>
</head>
<body>
  <div class="card">
    <h3>Members</h3>
    <table border="1">
      <tr>
        <td>Alice</td>
      </tr>
    </table>
  </div>
</body>
</html>

20.
Guide_EN: Assemble a complete dashboard layout using card, table, image, and merged columns.
Guide_KO: html 문서 구조 내에 열 병합(colspan)이 들어간 테이블 카드 레이아웃을 종합 완성합니다.
Template_HTML:
<!DOCTYPE html>
<html>
<head>
  <title>Tables</title>
</head>
<body>
  <div class="card">
    <table border="1">
      <tr>
        <th colspan="2">User</th>
      </tr>
      <tr>
        <td>
          <img src="photo.svg" width="20">
        </td>
        <td>Alice</td>
      </tr>
    </table>
  </div>
</body>
</html>
