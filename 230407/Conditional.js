//Conditional statements(조건문)

//if-else 조건문
const date = new Date(); //date 객체 생성
let hours = date.getHours(); //현재 시를 가져오는 Date 함수

if(hours < 12){
    console.log('오전입니다.');
} else {
    console.log('오후입니다.')
}

//switch 조건문
//현재 월이 몇일까지 있는지를 출력한다.
let month = date.getMonth() + 1; //현재 월을 가져오는 Date 함수
let lastDay;
switch(month) {
    case 2:
        lastDay = 28;
    case 4:
    case 6:
    case 9:
    case 11:
        lastDay = 30;
    default : 
        lastDay = 31;
}
console.log('현재 월은 ' + lastDay + '일 까지입니다.');

