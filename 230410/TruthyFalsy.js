const print = (person) => {console.log(person.name)};

const person = {
    name : 'Tom'
};

print(person);

//(!) print 함수에서 person 파라미터가 비어진 채로 실행되면 에러가 발생
// const print = (person) => {console.log(person.name)};

// const person = {
//     name : 'Tom'
// };

// print();


//(!) print 함수에서 person 파라미터에 null 값이 전달되면 에러가 발생
// const print = (person) => {console.log(person.name)};

// const person = null;

// print();


// print 함수의 파라미터가 undefined 이거나 null인 경우를 대비하여 코드를 작성해야 함
// undefined와 null은 Falsy한 값이기 때문에, Falsy한 값 앞에 !(부정 연산자)를 붙여줌
print = (person) => {
    if(!person){
        console.log('person을 찾을 수 없습니다.');
        return;
    }
    console.log(person.name);
}

person = null;
print(person); // "person을 찾을 수 없습니다."


//Falsy한 값 : undefined, null, 0, 빈 문자열, NaN
console.log(!undefined); //true
console.log(!null); //true
console.log(!0); //true
console.log(!''); //true
console.log(!NaN); //true

//Truthy한 값 : Falsy한 값을 제외한 모든 값
console.log(!1); //false
console.log(!'Hello'); //false
console.log(![]); //false
const obj = {name : 'Tom'};
console.log(!obj); //false