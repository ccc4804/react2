컴포넌트를 꾸미기 위한 도구들1. Sass2. CSS Module3. styled-components--------------------------------------------------------------------------Sass (Syntactically awesome stylesheets) : 한국말로 '짱 멋있는 스타일 시트'sass의 확장자1) .sass	- 먼저 나온 확장자이지만 괄호를 사용하지 않고 들여쓰기로 구분했다.2) .scss	- css 문법을 적용하였으며 현재 사용되고 있다.	sass 라이브러리 설치하기	터미널에서 $ yarn add node-sass		설치한 라이브러리는 sass로 작성한 코드를 css로 변환하는 작업을 해준다.	classname을 짓는 라이러리	터미널에서 $ yarn add classnames	color 참고 차이트 : https://yeun.github.io/open-color/반복되는 것이 있다면	@mixin xxxx($yyy) {} 로 선언해서	@include xxxx($yyy)로 불러서 사용가능하다.	className이 겹치지 않게 작성하는 팁	1.	컴포넌트의 이름을 고유하게 지정	2.	최상위 엘리먼트의 클래스 이름을 컴포넌트 이름과 똑같게 그 내부에서 셀렉터 사용한다.--------------------------------------------------------------------------CSS Modules	- 확장자 : .module.css	- 사용 할 때 유용한 점 : 레거시 프로젝트에 리액트를 도입 할 때 CSS 클래스 네이밍 규칙 만들기 귀찮을 때	아이콘을 무료로 제공하는 오픈소스 라이브러리 설치	- 명령어 : $ yarn add react-icons	