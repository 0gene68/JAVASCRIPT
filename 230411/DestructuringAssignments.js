// Destructuring Assignment (비구조화 할당)

//ES6 이전에는 배열의 값을 각각 꺼내어 쓰려면 각각의 값을 직접 지정해주어야 했음
const animals = ['Cat', 'Dog', 'Bird'];

const cat = animals[0];
const dog = animals[1];
const bird = animals[2];

console.log(cat); //Cat
console.log(dog); //Dog
console.log(bird); //Bird

//ES6부터는 비구조화 할당 방식을 선언하여 한번에 배열의 값을 추출하여 변수/상수로 선언할 수 있음
//const [변수명1, 변수명2, ..., 변수명n] = [값1, 값2, ..., 값n];
const [cat1, dog1, bird1] = ['Cat', 'Dog', 'Bird']
console.log(cat1); //Cat
console.log(dog1); //Dog
console.log(bird1); //Bird


//배열의 값을 한번에 할당하기
const animals2 = ['Cat', 'Dog', 'Tiger'];
const [cat2, dog2, bird2] = animals2;
console.log(cat2); //Cat
console.log(dog2); //Dog
console.log(bird2); //Bird


//비구조화 할당에서는 기본값을 지정할 수 있음
//const [변수명1, 변수명2, ..., 변수명n = 기본값] = [값1, 값2, ..., 값n];
const [cat3, dog3, bird3, monkey3 = "Monkey"] = ['Cat', 'Dog', 'Bird'];
console.log(cat3); //Cat
console.log(dog3); //Dog
console.log(bird3); //Bird
console.log(monkey3); //Monkey


//비구조화 할당은 객체에서도 적용됨
const {cat4, dog4, bird4} = {
    cat4 : 'Cat',
    dog4 : 'Dog',
    bird4 : 'Bird'
}

console.log(cat4); //Cat
console.log(dog4); //Dog
console.log(bird4); //Bird

//객체의 깊숙한 곳에 들어있는 값은 비구조화 할당을 2번 사용하는 것으로 추출
const person = {
    name : 'Tom',
    age : 23,
    gender : 'M',
    address : {
        country : 'South Korea',
        city : 'Daejeon'
    }
};

const {name, age, address : {city}} = person;
console.log(`[Name : ${name}, Age : ${age}, City : ${city}]`);
// [Name : Tom, Age : 23, City : Daejeon]
