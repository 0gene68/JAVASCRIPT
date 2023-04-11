//Spread 연산자

//Spread 연산자를 사용하면 기존에 선언된 객체의 값을 가지고 올 수 있음
const student1 = {
    name : 'Tom'
};

const maleStudent = {
    ...student1, // ... : Spread 연산자, student 객체의 값을 가져옴
    gender : 'M'
};

const maleStudent23 = {
    ...maleStudent, //maleStudent 객체의 값을 가져옴
    age : 23
};

console.log(student1); //{name: 'Tom'}
console.log(maleStudent); //{name: 'Tom', gender: 'M'}
console.log(maleStudent23); //{name: 'Tom', gender: 'M', age: 23}


//Spread 연산자는 배열에서도 사용할 수 있음
const people = ['Tom', 'Lily', 'Jennifer'];
const plusJohn = [...people, 'John'];
console.log(plusJohn); //['Tom', 'Lily', 'Jennifer', 'John']

//Spread 연산자는 여러 번 사용이 가능함
const numbers = [1, 2, 3, 4, 5];

const spreadNumbers = [...numbers, 100, ...numbers];
console.log(spreadNumbers); // [1, 2, 3, 4, 5, 100, 1, 2, 3, 4, 5]


//Rest 연산자

//Rest 연산자는 객체와 배열에서 사용될 때는 비구조 할당 문법과 함께 사용됨
//객체와 배열에서 비구조 할당 문법으로 추출한 값을 제외한 나머지 값을 변수에 저장
const femaleStudent23 = {
    name : 'Jennifer',
    gender : 'F',
    age : 23
};

const {age, ...femaleStudent} = femaleStudent23;
console.log(age); //23
console.log(femaleStudent) // {name: 'Jennifer', gender: 'F'}

const {gender, ...student2} = femaleStudent;
console.log(gender); //'F'
console.log(student2); // {name : 'Tom'}


const numbers2 = [1, 2, 3, 4, 5, 6];
const [one, ...rest] = numbers2;
console.log(one); // 1
console.log(rest); // [2, 3, 4, 5, 6]


//Rest 연산자는 함수의 파라미터로도 사용될 수 있음
function sum(...nums) { // ...nums : 파라미터들로 이루어진 배열
    return nums.reduce((total, num) => total + num, 0); //reduce() : 인자로 주어진 함수를 배열의 모든 요소에 대해 실행
}
  
console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5, 6, 7)); // 22
console.log(sum(10)); // 10

//배열의 원소를 모두 파라미터로 추가하고 싶다면 Spread 연산자를 사용할 수 있음
const number3 = [1, 2, 3, 4, 5, 6];
const result = sum(...number3);
console.log(result); //21 
