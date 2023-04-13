//DOM(Document Object Model
//프로그래밍 언어에서 HTML 등의 문서를 조작할 수 있도록 문서의 구조를 나타내는 객체 모델

//document 객체 : DOM의 일부로, 현재 로드된 웹 페이지(document)를 나타냄
//웹 페이지의 요소를 선택, 조작하고, 이벤트를 처리하는 등 웹 페이지 제어에 필수적인 객체

//document 객체의 대표적 속성
console.log(document.URL); // 현재 문서의 URL 반환
console.log(document.title); // 현재 문서의 제목 반환
console.log(document.body); // 현재 문서의 body 요소 반환
console.log(document.head); // 현재 문서의 head 요소 반환
console.log(document.documentElement); // 현재 문서의 최상위 요소(html) 반환
console.log(document.domain); // 현재 문서의 도메인 반환
console.log(document.referrer); // 현재 문서를 호출한 문서의 URL 반환

//document 객체의 대표적 메소드

//getElementById(id) : 해당 id를 가진 요소를 반환
const div1 = document.getElementById('div1')
div1.style.color = "blue"; //아이디가 div1인 div 태그의 글꼴 색이 파란색으로 바뀜



//querySelector(selector) : 지정된 CSS 선택자와 일치하는 첫 번째 요소 반환
const firstSpan = document.querySelector('span');
firstSpan.style.color = 'red'; //첫 번째 span 태그의 글꼴 색이 빨간색으로 바뀜



//getElementsByName(name) : 지정된 name 속성과 일치하는 모든 요소 반환
const selectTextarea = document.getElementsByName('textarea');
selectTextarea.forEach(textarea => {
    textarea.style.backgroundColor = 'skyblue';
}) // 모든 name 속성이 textarea인 태그들의 배경색이 하늘색으로 바뀜



//getElementsByClassName(class) : 지정된 class 속성과 일치하는 모든 요소 반환
const paragraphs = document.getElementsByClassName('paragraph');
for(let i = 0; i < paragraphs.length; i++){
    paragraphs[i].style.color = 'red';
} // 모든 class 속성이 paragraph인 태그들의 글꼴 색이 빨간 색으로 바뀜



//querySelectorAll(selector) : 지정된 CSS 선택자와 일치하는 모든 요소를 반환
const allSpan = document.querySelectorAll('span');
allSpan.forEach(span => { //allSpan 은 NodeList 객체이므로 NodeList에서 각각의 요소에 접근하여 스타일을 변경해야 함
    span.style.backgroundColor = 'yellow';
}) // 모든 span 태그의 배경색이 노란색으로 바뀜



//createElement(tagName) : 지정된 태그 이름의 요소 생성
//createTextNode(text) : 지정된 텍스트 *노드를 생성   *노드 : DOM에서 요소, 속성, 텍스트 등의 구성 요소
//appendChild() : 지정한 노드를 부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙임
const newElement = document.createElement('div'); 
const newNode = document.createTextNode('내용 추가');
newElement.appendChild(newNode);
document.body.appendChild(newElement); //웹 페이지의 마지막에 '내용 추가'라는 내용을 담은 div 태그가 추가됨

//addEventListener(event, function) : 문서에서 지정된 이벤트가 발생할 때 실행할 함수를 등록
const redButton = document.querySelector('button');
redButton.addEventListener(
    'click', () => {
        redButton.style.color = 'red';
    }) //버튼을 클릭하면 button 태그의 글꼴 색이 빨간 색으로 바뀜
