//Prototype (프로토타입)

//객체 생성자
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

//같은 객체 생성자 함수를 사용하는 경우, 특정 함수 또는 값을 재사용할 수 있음(프로토타입)
Animal.prototype.legs = 4;
Animal.prototype.say = function() {
    console.log(this.sound);
}

console.log(dog.legs); //4
console.log(cat.legs); //4
dog.say(); //멍멍
cat.say(); //야옹



