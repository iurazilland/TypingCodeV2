Lv9.
Title_EN: Dropdowns & Fieldsets
Title_KO: 드롭다운 선택창과 필드셋
Description_EN: Learn how to create multi-option dropdown select menus and form field groupings.
Description_KO: 여러 옵션 중 하나를 고르는 select(선택 드롭다운), 목록을 묶어 테두리를 두르는 fieldset과 설명 legend를 배웁니다.

1.
Guide_EN: Use <select> and <option> tags to create a dropdown menu with a choice.
Guide_KO: 드롭다운 영역인 <select> 태그 안에 선택지인 <option> 태그를 넣어 메뉴를 만듭니다.
Template_HTML:
<select>
  <option>Yes</option>
</select>

2.
Guide_EN: Add another <option> tag to offer multiple choices.
Guide_KO: <option> 태그를 추가하여 사용자가 고를 수 있는 여러 보기를 제공합니다.
Template_HTML:
<select>
  <option>Yes</option>
  <option>No</option>
</select>

3.
Guide_EN: Add a third <option> to expand the dropdown menu list.
Guide_KO: 세 번째 항목을 추가하여 드롭다운 메뉴의 선택지 목록을 더 확장해 봅니다.
Template_HTML:
<select>
  <option>Yes</option>
  <option>No</option>
  <option>Maybe</option>
</select>

4.
Guide_EN: Set a value attribute on the option element to define data sent to the server.
Guide_KO: 옵션을 선택했을 때 실제로 서버나 변수로 전송할 문자 코드값을 정의하는 value 속성을 할당해 봅니다.
Template_HTML:
<select>
  <option value="y">Yes</option>
</select>

5.
Guide_EN: Pre-select a specific option initially using the selected attribute.
Guide_KO: 페이지 로드 시 특정 항목이 기본으로 선택되어 보이도록 option에 selected 속성을 할당합니다.
Template_HTML:
<select>
  <option value="y">Yes</option>
  <option value="n" selected>No</option>
</select>

6.
Guide_EN: Place a label before the dropdown menu to name the choice group (cumulative review).
Guide_KO: 드롭다운 메뉴가 무엇을 선택하는 곳인지 알려주는 <label> 이름표를 함께 정렬해 봅니다.
Template_HTML:
<label>Choice</label>
<select>
  <option>Yes</option>
</select>

7.
Guide_EN: Use the <fieldset> tag to create a themed border wrapping form controls.
Guide_KO: 폼 입력 요소들을 논리적으로 묶어 얇은 테두리 선을 씌워주는 <fieldset> 태그를 작성합니다.
Template_HTML:
<fieldset></fieldset>

8.
Guide_EN: Nest a <legend> tag inside the <fieldset> to write a border title.
Guide_KO: 테두리 선 위에 걸쳐 정렬되는 제목 영역을 표현하는 <legend> 태그를 fieldset 내부에 작성합니다.
Template_HTML:
<fieldset>
  <legend>Options</legend>
</fieldset>

9.
Guide_EN: Nest a <select> dropdown menu inside the <fieldset> container.
Guide_KO: <fieldset>과 <legend> 테두리 묶음 내부 공간에 select 드롭다운 컴포넌트를 정밀 안착시킵니다.
Template_HTML:
<fieldset>
  <legend>Options</legend>
  <select>
    <option>Yes</option>
  </select>
</fieldset>

10.
Guide_EN: Nest a label and a text input inside the fieldset border (cumulative review).
Guide_KO: fieldset 박스 내부에 인풋 라벨 이름표와 input 입력창 태그를 조화롭게 묶어 봅니다.
Template_HTML:
<fieldset>
  <legend>Info</legend>
  <label>Name</label>
  <input type="text">
</fieldset>

11.
Guide_EN: Group two button elements inside a fieldset container (cumulative review).
Guide_KO: 확인과 초기화 등 연관된 기능의 <button> 요소 2개를 fieldset 영역에 정렬 배치합니다.
Template_HTML:
<fieldset>
  <button>OK</button>
  <button>Reset</button>
</fieldset>

12.
Guide_EN: Wrap the fieldset block inside a <form> container (cumulative review).
Guide_KO: fieldset 전체 영역을 입력 데이터를 제출할 전송 단위인 <form> 태그로 감싸서 패키징합니다.
Template_HTML:
<form>
  <fieldset>
    <legend>Form</legend>
  </fieldset>
</form>

13.
Guide_EN: Place an input field and a select menu inside a form layout.
Guide_KO: 하나의 폼 양식 안에서 한 줄 입력창과 드롭다운 선택 메뉴를 가로 세로로 조합합니다.
Template_HTML:
<form>
  <input type="text">
  <select>
    <option>Color</option>
  </select>
</form>

14.
Guide_EN: Build a complete form grouping input elements, select menus, and save action buttons.
Guide_KO: 설정 그룹 내에 select 선택 옵션과 저장 수행을 담당할 submit 타입 버튼을 조립 완성합니다.
Template_HTML:
<form>
  <fieldset>
    <legend>Settings</legend>
    <select><option>On</option></select>
    <button type="submit">Save</button>
  </fieldset>
</form>

15.
Guide_EN: Nest a list <ul> inside a fieldset zone (cumulative review).
Guide_KO: fieldset 테두리 박스 영역 안에 설명 목록 <ul> 및 <li>를 중첩하여 상세 정보 항목을 나열합니다.
Template_HTML:
<fieldset>
  <legend>Skills</legend>
  <ul>
    <li>HTML</li>
  </ul>
</fieldset>

16.
Guide_EN: Place a select dropdown menu inside a table cell <td> (cumulative review).
Guide_KO: 표의 데이터 셀 <td> 내부 영역 안에 권한 변경용 드롭다운 select 메뉴를 중첩 배치합니다.
Template_HTML:
<table border="1">
  <tr>
    <td>Role</td>
    <td>
      <select>
        <option>Admin</option>
      </select>
    </td>
  </tr>
</table>

17.
Guide_EN: Nest a table grid inside a fieldset wrapper to group stats data.
Guide_KO: fieldset 테두리 블록 공간 내부에 복잡한 <table border="1"> 표 레이아웃을 담아 구조를 장식해 봅니다.
Template_HTML:
<fieldset>
  <legend>Data</legend>
  <table border="1">
    <tr><td>Result</td></tr>
  </table>
</fieldset>

18.
Guide_EN: Structure forms, headings, and dropdown selects inside a <body> tag.
Guide_KO: <body> 태그 내부 공간에 제목, 폼 레이아웃, 그리고 내부에 다크테마 선택 드롭다운을 정렬합니다.
Template_HTML:
<body>
  <h3>Preference</h3>
  <form>
    <select>
      <option>Dark</option>
    </select>
  </form>
</body>

19.
Guide_EN: Create a settings selector inside a card layout (cumulative review).
Guide_KO: 독립형 스타일 영역을 지원하는 카드 <div class="card"> 안에 설정 항목 이름과 드롭다운을 조립합니다.
Template_HTML:
<!DOCTYPE html>
<html>
<head>
  <title>Dropdowns</title>
</head>
<body>
  <div class="card">
    <h3>Theme Settings</h3>
    <select>
      <option>System</option>
    </select>
  </div>
</body>
</html>

20.
Guide_EN: Assemble a complete form structure using body, card, form, fieldset, inputs, and selects.
Guide_KO: <html> 및 <body> 하위에 카드 상자, 폼 테두리, 텍스트 인풋, 셀렉트 옵션을 종합 마크업합니다.
Template_HTML:
<!DOCTYPE html>
<html>
<head>
  <title>Dropdowns</title>
</head>
<body>
  <div class="card">
    <form>
      <fieldset>
        <legend>Profile</legend>
        <input type="text" value="User">
        <select>
          <option>Guest</option>
        </select>
      </fieldset>
    </form>
  </div>
</body>
</html>
