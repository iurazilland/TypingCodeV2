Lv2.
Title_EN: Inline Styling & Links
Title_KO: 인라인 텍스트와 링크
Description_EN: Learn how to group text with span, apply colors, and add target-blank links.
Description_KO: 텍스트 일부를 묶어 꾸며주는 span과 style 속성, 그리고 a 태그의 target="_blank" 옵션을 배웁니다.

1.
Guide_EN: Use two paragraph p tags to establish vertical block alignments.
Guide_KO: 두 개의 p 태그를 사용하여 문단 단위로 세로 정렬(블록 요소)이 되는 기본 구조를 마련합니다.
Template_HTML:
<p>First paragraph.</p>
<p>Second paragraph.</p>

2.
Guide_EN: Wrap key terms in span tags to test transparent inline containers.
Guide_KO: 두 문단 내부의 특정 단어를 각각 <span> 태그로 감싸봅니다. 시각적 변화는 아직 보이지 않습니다.
Template_HTML:
<p>Hello <span>HTML</span></p>
<p>Learn <span>CSS</span></p>

3.
Guide_EN: Apply colors directly to inline span elements.
Guide_KO: <span> 태그에 직접 style 색상 속성을 지정해 핵심 단어만 색을 입혀봅니다.
Template_HTML:
<span style="color:orange;">HTML</span>
<span style="color:skyblue;">CSS</span>

4.
Guide_EN: Set text colors directly on the paragraph p elements.
Guide_KO: <p> 단락 자체에 style 속성을 적용하여 문단 전체의 기본 글자 색상을 바꿉니다.
Template_HTML:
<p style="color:gold;">HTML</p>
<p style="color:cyan;">CSS</p>

5.
Guide_EN: Apply background colors directly to paragraph blocks.
Guide_KO: 문단 전체 영역에 style 배경색(background-color) 옵션을 부여해 영역 범위를 확인합니다.
Template_HTML:
<p style="background-color:navy;">Hi</p>
<p style="background-color:green;">Go</p>

6.
Guide_EN: Emphasize text with strong tags inside paragraphs.
Guide_KO: 문단 본문 내 중요 텍스트를 <strong> 태그로 감싸 진한 굵기로 부각시킵니다.
Template_HTML:
<p>HTML is <strong>fun</strong></p>
<p>CSS is <strong>cool</strong></p>

7.
Guide_EN: Apply bold font weight style to span elements.
Guide_KO: span 태그와 style 속성의 font-weight 옵션을 결합해 글자를 동일하게 굵게 만듭니다.
Template_HTML:
<p>HTML is <span style="font-weight:bold;">fun</span></p>
<p>CSS is <span style="font-weight:bold;">cool</span></p>

8.
Guide_EN: Italicize text with em tags inside paragraphs.
Guide_KO: 본문 안의 특정 단어를 <em> 태그로 감싸 비스듬히 기울여진 텍스트로 연출합니다.
Template_HTML:
<p>HTML is <em>easy</em></p>
<p>CSS is <em>great</em></p>

9.
Guide_EN: Apply italic font style styles to span elements.
Guide_KO: span 태그와 style 속성의 font-style 옵션을 조합해 이탤릭체 효과를 구현해 봅니다.
Template_HTML:
<p>HTML is <span style="font-style:italic;">easy</span></p>
<p>CSS is <span style="font-style:italic;">great</span></p>

10.
Guide_EN: Structure multiple styled span segments sequentially.
Guide_KO: 여러 span 태그 및 스타일 색상을 조립하여 강조할 핵심 키워드를 나열합니다.
Template_HTML:
<p><span>HTML</span> & <span>CSS</span></p>
<p><span style="color:orange;">Web</span> Design</p>

11.
Guide_EN: Set up hyperlinks to external sites using anchor a elements.
Guide_KO: <a> 링크 태그와 href 속성을 매칭하여 클릭 가능한 참조 텍스트를 배치합니다.
Template_HTML:
<a href="https://google.com">Google</a>
<a href="https://naver.com">Naver</a>
<a href="https://github.com">GitHub</a>

12.
Guide_EN: Add target="_blank" to open links in a new browser tab.
Guide_KO: <a> 링크의 속성에 target="_blank" 옵션을 더하여 링크가 새 탭 창으로 실행되게 합니다.
Template_HTML:
<a href="https://google.com" target="_blank">Google</a>
<a href="https://naver.com" target="_blank">Naver</a>

13.
Guide_EN: Create internal anchor links using hashes in href.
Guide_KO: href 주소에 샵(#)을 붙인 페이지 내부 영역 바로 가기 링크 세트를 작성합니다.
Template_HTML:
<a href="#section1">Go Sec 1</a>
<a href="#section2">Go Sec 2</a>

14.
Guide_EN: Group text-only anchors and normal links side-by-side.
Guide_KO: href 속성이 없는 일반 텍스트용 <a> 태그와 실질적 링크 <a> 태그를 나열합니다.
Template_HTML:
<a>No Link</a>
<a href="https://google.com">Google</a>
<a href="#top">Back to Top</a>

15.
Guide_EN: Nest styled span inline blocks inside structured header tags.
Guide_KO: 대제목 h1, h2 태그의 내용 단어 일부분에 주황색/하늘색 span 스타일을 얹어봅니다.
Template_HTML:
<h1>My <span style="color:orange;">Blog</span></h1>
<h2>Our <span style="color:skyblue;">Space</span></h2>

16.
Guide_EN: Set up centered headings containing bold text elements.
Guide_KO: 제목 정렬(text-align: center) 스타일이 들어간 헤더 안에 strong 태그를 얹어 강조합니다.
Template_HTML:
<h2 style="text-align:center;">
  <strong>Rule</strong>
</h2>
<h3 style="text-align:center;">
  <strong>Check</strong>
</h3>

17.
Guide_EN: Put italic text and target blank links inside structured paragraphs.
Guide_KO: 본문 단락 내부에 기울임 em 텍스트와 새 창 타겟 외부 링크를 한데 모아 선언해 봅니다.
Template_HTML:
<p>Read <em>this</em>
  <a href="https://google.com" target="_blank">Link</a></p>
<p>Visit <em>our</em>
  <a href="https://naver.com" target="_blank">Site</a></p>

18.
Guide_EN: Use styling on headings and nested italic elements for mixed review.
Guide_KO: 제목 색상 스타일(color: gold)과 단락 내부 이탤릭 텍스트를 연계 조립해 봅니다.
Template_HTML:
<h2 style="color:gold;">Notice</h2>
<p>Read <em>this</em> now.</p>

19.
Guide_EN: Structure a target blank link inside the document body skeleton.
Guide_KO: <body> 본문 영역 골조 하위에 주황색 스타일 단락과 새 창 외부 링크를 배치합니다.
Template_HTML:
<!DOCTYPE html>
<html>
<head>
  <title>My Site</title>
</head>
<body>
  <p style="color:orange;">Text</p>
  <a href="https://google.com" target="_blank">Link</a>
</body>
</html>

20.
Guide_EN: Structure the complete page layout incorporating styles, italics, and target blank links.
Guide_KO: 제목 색상, 이탤릭 본문, 외부 새 창 타겟 링크를 모두 머금은 완성형 2레벨 문서를 만듭니다.
Template_HTML:
<!DOCTYPE html>
<html>
<head>
  <title>Notice Page</title>
</head>
<body>
  <h2 style="color:gold;">Notice</h2>
  <p>Read <em>this</em> now.</p>
  <a href="https://google.com" target="_blank">Visit</a>
</body>
</html>
