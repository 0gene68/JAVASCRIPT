//Function(함수)

//함수 선언문
function add1(a, b){
    return a + b;
}
add1(2, 3);

//이름 없는 선언문
const add2 = function (a, b) {
    return a + b;
}
add2(2, 3);

//화살표 함수
const add3 = (a, b) => a + b;
add3(2, 3);

//매개 변수로 받은 값을 제곱하는 함수
const squareX = (val) => {return val ** 2;}

//콜백 함수 : 매개변수로 전달되는 함수

//times 함수의 인자로 printResult 함수를 주어 times의 결과를 출력
//이 때 printResult 함수는 콜백 함수가 됨
function times(x, y, callback) {
    callback(x * y);
}

function printResult(result) {
    console.log(`함수 실행 결과 : ${result}`);
}

times(10, 20, printResult); //함수 실행 결과 : 200



