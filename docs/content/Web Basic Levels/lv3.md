Lv3.
Title_EN: Images & Buttons
Title_KO: 이미지와 버튼 삽입
Description_EN: Learn how to insert images and create buttons with width, type, and disabled options.
Description_KO: 웹페이지에 이미지를 삽입하는 img 태그와 button 태그를 알아보고, 크기(width) 및 버튼 제어 속성을 배웁니다.

1.
Guide_EN: Use multiple <img> tags with src attributes to insert distinct pictures.
Guide_KO: 두 개 이상의 서로 다른 이미지 파일을 단독 <img> 태그로 불러와 배치해 봅니다.
Template_HTML:
<img src="photo.svg">
<img src="logo.svg">

2.
Guide_EN: Apply different width attributes to size multiple images.
Guide_KO: 각기 다른 가로 크기(width)를 적용해 여러 이미지의 비율 크기를 한꺼번에 조절합니다.
Template_HTML:
<img src="photo.svg" width="120">
<img src="logo.svg" width="60">
<img src="avatar.png" width="80">

3.
Guide_EN: Specify only the height attributes of multiple images.
Guide_KO: 가로 크기 대신 세로 높이(height) 속성만을 주어 이미지들의 높이를 다르게 지정해 봅니다.
Template_HTML:
<img src="photo.svg" height="90">
<img src="gallery1.png" height="70">
<img src="gallery2.png" height="70">

4.
Guide_EN: Size images with both width and height attributes.
Guide_KO: 이미지 태그에 가로(width)와 세로(height) 옵션을 함께 중첩하여 정확한 사각형 크기를 정합니다.
Template_HTML:
<img src="photo.svg" width="100" height="80">
<img src="gallery3.png" width="120" height="90">

5.
Guide_EN: Display multiple gallery images inline next to each other.
Guide_KO: 다른 고유 색감의 갤러리 일러스트 3개를 나란히 나열해 하나의 목록으로 선언해 봅니다.
Template_HTML:
<img src="gallery1.png" width="80">
<img src="gallery2.png" width="80">
<img src="gallery3.png" width="80">

6.
Guide_EN: Test the visual output of the alt fallback text when images fail to load.
Guide_KO: 일부러 틀린 이미지(broken.png) 경로의 대체글 alt 옵션과 작동하는 프로필 이미지를 비교합니다.
Template_HTML:
<img src="broken.png" alt="Failed">
<img src="avatar.png" alt="Profile">
<img src="gallery1.png" alt="Cloud">

7.
Guide_EN: Create multiple basic button elements.
Guide_KO: 서로 다른 레이블 텍스트를 갖는 독립된 세 개의 단순 단추(<button>)들을 배치해 봅니다.
Template_HTML:
<button>Save</button>
<button>Cancel</button>
<button>Confirm</button>

8.
Guide_EN: Set active and disabled button elements.
Guide_KO: 활성화 상태의 버튼과 비활성화(disabled) 상태 버튼을 결합하여 작동 유무를 표시합니다.
Template_HTML:
<button disabled>Wait</button>
<button>Submit</button>
<button disabled>Block</button>

9.
Guide_EN: Set button action types: submit, button, and reset. All look the same visually — type only affects behavior.
Guide_KO: 버튼 작동 시 브라우저 동작 형태를 결정하는 type="submit", button, reset을 씁니다. 세 버튼의 형태는 모두 같습니다.
Template_HTML:
<button type="submit">Submit</button>
<button type="button">Click</button>
<button type="reset">Reset</button>

10.
Guide_EN: Combine type and disabled attributes together.
Guide_KO: 버튼 작동 방식 정의(type="button")와 비활성화(disabled) 속성을 동시에 적용해 봅니다.
Template_HTML:
<button type="button" disabled>Locked</button>
<button type="submit">Send</button>
<button type="button">Close</button>

11.
Guide_EN: Set up a horizontal button action group.
Guide_KO: 사용자의 동의나 수정을 요구하는 양자택일 구조의 세로/가로형 버튼 그룹을 배치합니다.
Template_HTML:
<button>Yes</button>
<button>No</button>
<button disabled>Later</button>

12.
Guide_EN: Combine a heading and structured image listings.
Guide_KO: 부제목 h2 태그와 다채로운 이미지들을 수직으로 결합하여 작업 공간 섹션을 설계합니다.
Template_HTML:
<h2>Workspaces</h2>
<img src="photo.svg" width="100">
<img src="gallery1.png" width="80">

13.
Guide_EN: Structure a user profile widget with heading, avatar image, and buttons.
Guide_KO: 대제목과 아바타 이미지, 편집 단추 및 로그아웃 단추를 묶어 프로필 카드 골격을 만듭니다.
Template_HTML:
<h3>User Profile</h3>
<img src="avatar.png" width="60">
<button>Edit Profile</button>
<button>Log Out</button>

14.
Guide_EN: Place structured paragraphs above active/disabled buttons.
Guide_KO: 안내 문단 p 하위에 비활성화된 거부 버튼과 활성화된 허가 버튼 세트를 배치합니다.
Template_HTML:
<p>Accept the terms.</p>
<button disabled>Decline</button>
<button>Accept</button>

15.
Guide_EN: Wrap gallery images in hyperlinks.
Guide_KO: <a> 링크 태그 내부에 이미지를 감싸서 클릭하면 외부 주소로 바로 이동하는 이미지 링크를 짭니다.
Template_HTML:
<a href="#">
  <img src="gallery1.png" width="80">
</a>
<a href="#">
  <img src="gallery2.png" width="80">
</a>

16.
Guide_EN: Wrap button elements inside anchor links.
Guide_KO: 버튼 단추 전체를 <a> 링크 태그로 감싸서 마우스 클릭 시 주소 이동을 일으키게 합니다.
Template_HTML:
<a href="#">
  <button>Go to Store</button>
</a>
<a href="#">
  <button>Learn More</button>
</a>

17.
Guide_EN: Style images and buttons with custom colors and borders.
Guide_KO: 이미지 테두리 색상(style) 및 단추 텍스트 색상 옵션을 각각 지정해 개성을 부여합니다.
Template_HTML:
<img src="avatar.png" width="60" style="border:2px solid cyan;">
<button style="color:orange;">Follow</button>
<button style="color:skyblue;">Message</button>

18.
Guide_EN: Nest span or strong elements inside action buttons.
Guide_KO: 버튼 내용물 중 특정 부분만 색상을 입히거나 굵기를 굵게 만들기 위해 내부 태그를 중첩합니다.
Template_HTML:
<button>Save <span>File</span></button>
<button><strong>Delete</strong></button>

19.
Guide_EN: Structure structured gallery lists inside a body tag block.
Guide_KO: <body> 영역 구조 내부에 제목, 두 장의 가로형 갤러리 이미지, 다운로드 버튼을 정렬합니다.
Template_HTML:
<!DOCTYPE html>
<html>
<head>
  <title>Photo Gallery</title>
</head>
<body>
  <h2>Photo Gallery</h2>
  <img src="gallery1.png" width="80">
  <img src="gallery2.png" width="80">
  <button>Download All</button>
</body>
</html>

20.
Guide_EN: Assemble a complete webpage document incorporating all elements.
Guide_KO: 타이틀 메타 정보와 제목, 로고 이미지, 컬러 강조 본문, 버튼 링크를 조립해 최종 완성합니다.
Template_HTML:
<!DOCTYPE html>
<html>
<head>
  <title>App Store</title>
</head>
<body>
  <h1>App <span>Store</span></h1>
  <img src="logo.png" width="100">
  <p style="color:skyblue;">Free App Download</p>
  <a href="#"><button>Get</button></a>
</body>
</html>
