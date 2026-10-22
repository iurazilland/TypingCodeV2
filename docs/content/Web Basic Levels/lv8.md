Lv8.
Title_EN: Form Inputs & Textarea
Title_KO: 사용자 입력과 텍스트 에어리어
Description_EN: Learn how to create inputs with value/placeholder, labels, and textarea boxes.
Description_KO: 사용자 입력을 받는 input 태그의 value, placeholder 옵션 차이를 이해하고, label 및 textarea를 배웁니다.

1.
Guide_EN: Use the <input> tag with type="text" to create a single-line input field.
Guide_KO: 사용자가 텍스트를 타이핑해 채울 수 있는 한 줄 입력창 <input type="text"> 태그를 작성해 봅니다.
Template_HTML:
<input type="text">

2.
Guide_EN: Add a value attribute to set a default initial text inside the input.
Guide_KO: 입력창 내부에 디폴트로 쓰여 있을 실제 데이터를 지정하는 value 속성을 할당해 봅니다.
Template_HTML:
<input type="text" value="Hello">

3.
Guide_EN: Use placeholder attribute to show a temporary guide text (compare with value).
Guide_KO: 비어 있을 때 가이드를 보여주고 입력 시 사라지는 placeholder 속성의 차이를 비교해 봅니다.
Template_HTML:
<input type="text" placeholder="Hint">

4.
Guide_EN: Use the <label> tag to display a name or prompt for the input.
Guide_KO: 입력창의 용도가 무엇인지 알려주는 이름표 역할을 수행할 <label> 태그를 생성해 봅니다.
Template_HTML:
<label>Name</label>

5.
Guide_EN: Place the <label> tag and the <input> tag side-by-side.
Guide_KO: 이름표 <label> 태그와 실제 글자를 입력받을 <input> 태그를 나란히 배치해 봅니다.
Template_HTML:
<label>Name</label>
<input type="text">

6.
Guide_EN: Connect the label and input using for and id attributes to make them click-linked.
Guide_KO: label의 for 속성과 input의 id 속성에 동일한 명칭을 할당하여 이름표 클릭 시 입력창이 포커스되게 연동합니다.
Template_HTML:
<label for="uid">ID</label>
<input type="text" id="uid">

7.
Guide_EN: Use the <textarea> tag to represent a multi-line input box.
Guide_KO: 가입 소개서나 본문 의견 등 여러 줄의 긴 문장 텍스트를 입력받을 수 있는 <textarea> 태그를 생성합니다.
Template_HTML:
<textarea>Message</textarea>

8.
Guide_EN: Add a label above the <textarea> tag and connect them using id and for attributes.
Guide_KO: 여러 줄 입력창에도 이름표를 지정하기 위해 for와 id 속성 이름을 매칭시켜 연동해 봅니다.
Template_HTML:
<label for="msg">Message</label>
<textarea id="msg"></textarea>

9.
Guide_EN: Create a password field by setting the input type="password" attribute.
Guide_KO: 사용자가 입력하는 글자를 원이나 별표 등으로 마스킹 보호하는 type="password" 입력창을 만들어 봅니다.
Template_HTML:
<input type="password" value="123">

10.
Guide_EN: Display username and password inputs together with placeholders.
Guide_KO: 아이디와 비밀번호 각각의 이름표와 입력창을 순서대로 정렬하여 로그인 기본 세트를 만듭니다.
Template_HTML:
<label>ID</label>
<input type="text" placeholder="ID">
<label>PW</label>
<input type="password">

11.
Guide_EN: Wrap the input element inside a <form> container to define a submission group.
Guide_KO: 입력 데이터를 한 번에 서버나 로직으로 전달하기 위해 입력 요소를 <form> 태그로 감싸줍니다.
Template_HTML:
<form>
  <input type="text">
</form>

12.
Guide_EN: Nest a submit button inside the form to allow sending input data (cumulative review).
Guide_KO: 폼 양식 전송 버튼 역할을 담당하는 type="submit" 속성의 <button> 태그를 하단에 배치합니다.
Template_HTML:
<form>
  <input type="text">
  <button type="submit">Send</button>
</form>

13.
Guide_EN: Create a password form containing a disabled action button.
Guide_KO: 비밀번호 폼 안에 입력값이 올바를 때까지 비활성화 상태로 멈추어 서는 disabled 버튼을 배치해 봅니다.
Template_HTML:
<form>
  <input type="password">
  <button disabled>Wait</button>
</form>

14.
Guide_EN: Wrap label and input in a <div> block with class "form-group" (cumulative review).
Guide_KO: 영역 구분 및 간격 조절이 편리하게 label과 input 세트를 <div> 상자로 묶어 줍니다.
Template_HTML:
<div class="form-group">
  <label>Name</label>
  <input type="text">
</div>

15.
Guide_EN: Place the grouped form block inside a <form> container.
Guide_KO: <div>로 개별 포장된 폼 필드 그룹을 전송용 <form> 태그 블록 하위 영역에 배치해 봅니다.
Template_HTML:
<form>
  <div class="group">
    <label>ID</label>
    <input type="text">
  </div>
</form>

16.
Guide_EN: Nest an <img> tag above the form inputs as a logo (cumulative review).
Guide_KO: 로그인 폼 최상단에 로고나 심볼로 기능할 photo.svg 에셋 <img> 태그를 결합 배치합니다.
Template_HTML:
<form>
  <img src="photo.svg" width="40">
  <input type="text">
</form>

17.
Guide_EN: Place the entire form inside a semantic <section> layout (cumulative review).
Guide_KO: 웹페이지 본문의 큰 독립적 섹션 영역인 <section> 하위에 전송용 폼 마크업을 구조화합니다.
Template_HTML:
<section>
  <h2>Join Us</h2>
  <form>
    <input type="text">
  </form>
</section>

18.
Guide_EN: Structure inputs, heading, and description text inside a <body> tag.
Guide_KO: <body> 태그 내부 공간에 로그인용 <h2> 제목, <p> 문단 설명, 그리고 입력 폼을 차례로 구성합니다.
Template_HTML:
<body>
  <h2>Login</h2>
  <form>
    <input type="text">
  </form>
</body>

19.
Guide_EN: Place a login form group inside a card container (cumulative review).
Guide_KO: 웹 화면에서 둥글게 도드라지는 로그인 카드 <div class="card"> 안에 폼 태그와 버튼을 포장합니다.
Template_HTML:
<!DOCTYPE html>
<html>
<head>
  <title>Inputs</title>
</head>
<body>
  <div class="card">
    <h3>Login</h3>
    <form>
      <input type="text">
      <button type="submit">OK</button>
    </form>
  </div>
</body>
</html>

20.
Guide_EN: Assemble a complete sign-up card layout using form inputs, textareas, and placeholds.
Guide_KO: <html> 및 <body> 하위에 가입 제목, 이메일 플레이스홀더 인풋, 자기소개 상자, 버튼을 완성합니다.
Template_HTML:
<!DOCTYPE html>
<html>
<head>
  <title>Inputs</title>
</head>
<body>
  <div class="card">
    <h2>Sign Up</h2>
    <form>
      <input type="text" id="email" placeholder="Email"><br>
      <textarea rows="3">Bio</textarea><br>
      <button type="submit">Go</button>
    </form>
  </div>
</body>
</html>
