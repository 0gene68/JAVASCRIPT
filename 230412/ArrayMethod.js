//배열명.pop() : 배열에서 마지막 요소를 제거하고 그 요소를 반환
const fruits = ['strawberry', 'orange', 'grape', 'melon', 'watermelon'];
console.log(fruits.pop()); // 'watermelon' 
console.log(fruits); // ['strawberry', 'orange', 'grape', 'melon'] 

//배열명.push(element1[, ...[, elementN]) : 배열의 끝에 하나 이상의 요소를 추가하고 배열의 새로운 길이 반환
const shapes = ['Circle', 'Triangle', 'Square', 'Rectangle', 'Oval'];
console.log(shapes.push('Pentagon')); //6
console.log(shapes); // ['Circle', 'Triangle', 'Square', 'Rectangle', 'Oval', 'Pentagon']

//배열명.shift() : 배열에서 첫 번째 요소를 제거하고, 제거된 요소 반환
const vegetables = ['carrot', 'onion', 'cucumber', 'mushroom', 'paprika'];
console.log(vegetables.shift()); // 'carrot'
console.log(vegetables); // ['onion', 'cucumber', 'mushroom', 'paprika'];

//배열명.unshift([...elementN]) : 배열의 맨 앞에 하나 이상의 요소를 추가하고 배열의 새로운 길이 반환
const birds = ['chicken', 'chick', 'eagle', 'ostrich', 'parrot'];
console.log(birds.unshift('owl')); // 6
console.log(birds); // ['owl', 'chicken', 'chick', 'eagle', 'ostrich', 'parrot']

//배열명.splice(start[, deleteCount[, item1[, item2[, ...]]]]) : 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용 변경
const beverages = ['coke', 'cider', 'coffee', 'tea', 'juice'];
beverages.splice(1, 0); // ['cider']
console.log(beverages); // ['coke', 'coffee', 'tea', 'juice'];

const body = ['hand', 'foot', 'arm', 'leg', 'neck'];
body.splice(2, 2, 'shoulder'); // ['arm', 'leg']
console.log(body); // ['hand', 'foot', 'shoulder', 'neck'];

//배열명.slice([begin[, end]]) : 배열의 begin 번째 인덱스 ~ end-1 번째 인덱스에 대한 복사본을 새로운 배열 객체로 반환
const numbers0 = [1, 2, 3, 4, 5];
console.log(numbers0.slice()); //[1, 2, 3, 4, 5]
console.log(numbers0.slice(1)); //[2, 3, 4, 5]
console.log(numbers0.slice(1, 4)); // [2, 3, 4]

const students = [
    {name : 'Tom', gender : 'M'},
    {name : 'Josh', gender : 'M'},
    {name : 'Lily', gender : 'F'},
    {name : 'Jennifer', gender : 'F'}
];
const onlyGirls = students.slice(2, 4);
const girlsName = [];
for(let i = 0; i < onlyGirls.length; i++){
    girlsName[i] = onlyGirls[i].name;
}
console.log(girlsName); // ['Lily', 'Jennifer']
const onlyBoys = students.slice(0, 2);
const boysName = [];
for(let i = 0; i < onlyBoys.length; i++){
    boysName[i] = onlyBoys[i].name;
}
console.log(boysName); // ['Tom', 'Josh']

//배열명.concat([value1[, value2[, ...valueN]]) : 인자로 주어진 배열이나 값들을 기존 배열 뒤에 합쳐 새 배열 반환
const westernFoods = ['pizza', 'hamburger', 'spaghetti', 'steak', 'sandwich'];
console.log(westernFoods.concat('salad')); // ['pizza', 'hamburger', 'spaghetti', 'steak', 'sandwich', salad];


const family = ['father', 'mother', 'brother', 'sister'];
const anotherFamily = ['grandfather', 'grandmother'];
console.log(family.concat(anotherFamily)); // ['father', 'mother', 'brother', 'sister', 'grandfather', 'grandmother']

//배열명.every(function callbackFn(element[, index[, array]]){...}[, thisArg] : 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트
const numbers2 = [11, 13, 15, 17, 19];
const isBiggerThanTen = (currentValue) => currentValue >= 10;
console.log(numbers2.every(isBiggerThanTen)); //true

const numbers3 = [2, 4, 6, 8];
const context = { factor: 2 };
const result = numbers3.every(function(element) {
  return element * this.factor % 2 === 0;
}, context);
console.log(result); // true

//배열명.some(function callbackFn(element[, index[, array]]){...}[, thisArg] : 배열 안의 적어도 한 개 이상의 요소가 주어진 판별 함수를 통과하는지 테스트
const numbers4 = [1, 3, 5, 7, 11];
const isBiggerThanTen2 = (currentValue) => currentValue >= 10;
console.log(numbers4.some(isBiggerThanTen)); //true

const numbers5 = [1, 3, 6, 9];
const context2 = { factor: 2 };
const result2 = numbers5.some(function(element) {
  return element * this.factor % 2 === 0;
}, context);
console.log(result); // true

//배열명.forEach(function callback(element[, index[, array]]){...}[, thisArg] : 인자로 주어진 함수를 배열 요소 각각에 대해서 실행
const numbers6 = [1, 2, 3, 4, 5];
numbers6.forEach(element => console.log(element)); //1 2 3 4 5

const boys = ['Tom', 'John', 'Steve', 'Paul'];
boys.forEach((name, index) => {
  console.log("index: " + index + ", name: " + name + ", boys[" + index + "]: " + boys[index]);
});
/*
 * index: 0, name: Tom, boys[0]: Tom
 * index: 1, name: John, boys[1]: kiwi
 * index: 2, name: Steve, boys[2]: Steve
 * index: 3, name: Paul, boys[3]: Paul
*/

//배열명.map(callback(currentValue[, index[, array]])[, thisArg] : 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열 반환
const numbers7 = [1, 2, 3, 4, 5];
const square = (x) => x ** 2;
const squareNumbers = numbers7.map(square);
console.log(squareNumbers); // [1, 4, 9, 16, 25]

const easternFoods = ['Bulgogi', 'Kimbap','Sushi', 'Tendong'];
const lengths = fruits.map(function (word){ return word.length});
console.log(lengths); // [7, 6, 5, 7]

//배열명.filter(callback(element[, index[, array]])[, thisArg]) : 배열 내의 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
const numbers8 = [11, 12, 13, 14, 15];
const isOddNumber = (value) => {
    if(value % 2 != 0){
      return value;
    }
}
const oddNumbers = numbers8.filter(isOddNumber);
console.log(oddNumbers); //[11, 13, 15]

// 배열명.fill(value[, start[, end]]) : 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채움
const numbers9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const onlySix = numbers.fill(6); 
console.log(onlySix); //[6, 6, 6, 6, 6, 6, 6, 6, 6, 6]

const ages = [22, 21, 20, 20, 19, 18];
function happyNewYear(func) {
    const be23 = func.fill(23, 0, 1);
    const be22 = be23.fill(22, 1, 2);
    const be21 = be22.fill(21, 2, 4);
    const be20 = be21.fill(20, 4, 5);
    const be19 = be20.fill(19, 5, 6);
    return be19;
};

happyNewYear(ages);

//배열명.includes(valueToFind[, fromIndex]) : 배열이 특정 요소를 포함하고 있는 지 판별
const numbers10 = [1, 2, 3];
numbers10.includes(2);     // true
numbers10.includes(4);     // false
numbers10.includes(3, 3);  // false
numbers10.includes(3, -1); // true

const school = [
  ['M', 'M', 'M', 'M', 'M'],
  ['M', 'M', 'M', 'F', 'M'],
  ['M', 'M', 'M', 'M', 'M'],
  ['M', 'M', 'M', 'M', 'M'],
  ['M', 'M', 'M', 'M', 'M']
];

for(let i = 0; i < school.length; i++){
  if(school[i].includes('F') == true){
    console.log(`여학생은 ${i+1}반에 있습니다.`);
    break;
  }
} // 여학생은 2반에 있습니다.

//배열명.reduce(callback(accumulator, currentValue[, currentIndex, array])[, initialValue]) : 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환
const numbers11 = [1, 2, 3, 4, 5];
const sum = (acc, cur) => acc + cur;

//초기 누적 값이 없는 경우 : 초기 누적값으로 배열의 첫 번째 요소를 사용하고 두 번째 요소부터 함수를 실행
const noInitialValue = numbers.reduce(sum);
console.log(noInitialValue); //15
//initialValue : 지정되지 않음 -> numbers[0] = 1
//acc + cur = 1 + 2 = 3
//acc + cur = 3 + 3 = 6
//acc + cur = 6 + 4 = 10
//acc + cur = 10 + 5 = 15


//초기 누적 값이 있는 경우 : 초기 누적값으로 지정된 값을 사용하고 배열의 첫 번째 요소부터 함수를 실행
const isInitialValue = numbers.reduce(sum, 5); 
console.log(isInitialValue);//20 
//initialValue : 지정됨 -> 5
//acc + cur = 5 + 1 = 6
//acc + cur = 6 + 2 = 8
//acc + cur = 8 + 3 = 11
//acc + cur = 11 + 4 = 15
//acc + cur = 15 + 5 = 20

//배열명.reverse() :  배열의 순서를 반전
const numbers12 = [1, 2, 3, 4, 5];
const reversedNumbers = numbers.reverse();
console.log(reversedNumbers); // [5, 4, 3, 2, 1]

const nameOrder = ['Andy', 'Bob', 'John', 'Tom'];
const nameReverseOrder = nameOrder.reverse();
console.log(nameReverseOrder); // ['Tom', 'John', 'Bob', 'Andy']

//배열명.sort([compareFunction]) : 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환
const numbers13 = [2, 4, 5, 3, 6, 1];
numbers.sort();
console.log(numbers); // [1, 2, 3, 4, 5, 6]

//배열명.toString() : 지정된 배열 및 그 요소를 나타내는 문자열을 반환
const numbers14 = [1, 2, 3, 4, 5, 6];
const numberString = numbers.toString();
console.log(numberString); // 1,2,3,4,5,6

//배열명.toLocaleString([locales[, options]]) : 배열의 요소를 나타내는 문자열을 반환
const numbers = [1, 2, 3, 4, 5, 6];
const numberString2 = numbers.toLocaleString();
console.log(numberString2); // 1,2,3,4,5,6

const prices = [123456.789, 456789.123, 789123.456];
const options = {
    style: "currency", //통화 출력 스타일 지정
    currency: "USD", //미국 달러로 표시
    currencyDisplay: "symbol", //통화 기호 표시
    minimumFractionDigits: 2, //최소 소수점 자릿수 : 2
    maximumFractionDigits: 2, //최대 소수점 자릿수 : 2
}
console.log(prices.toLocaleString("en-US", options)); //$123,456.79,$456,789.12,$789,123.46

//배열명.join([separator]) : 배열의 모든 요소를 연결해 하나의 문자열로 만듦
const words = ["Love", "Peace"];
console.log(words.join()); // Love,Peace
console.log(words.join('')); // LovePeace
console.log(words.join(' ')); // Love Peace
console.log(words.join(' and ')); // Love and Peace

