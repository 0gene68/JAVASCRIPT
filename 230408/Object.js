//Object(객체)

//객체 생성

//객체 리터럴을 활용한 객체 생성
const person = {
    name : 'Tom',
    age : 23,
    gender : 'M'
};

//생성자 함수를 활용한 객체 생성
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender
};

const Person = new Person('Tom', 23, 'M');

//객체 속성에 접근할 때 .을 사용
console.log(person.name); //'Tom'
console.log(person.age); //23
console.log(person.gender); //'M'

//객체 속성에는 배열 요소처럼 다양한 자료형을 입력할 수 있음
const object = {
    number : 273,
    string : 'Hello World',
    boolean : true,
    array : [1, 2, 3, 4, 5],
    func : function () {
        console.log('Nice To Meet You')
    }
};

//객체 속성의 자료형이 함수인 경우에는 특별히 메소드(method)라고 부름
const car = {
    gear : 1,
    color : '검은색',
    drive : function () { //메소드
        console.log(this.color + '차가 ' + this.gear + '단 기어로 갑니다.');
    }
}

car.drive(); //메소드 호출