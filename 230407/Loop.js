//Loop(반복문)

//Array(배열)
const primeNumbers = [2, 3, 5, 7, 11];

console.log(primeNumbers[0]); //2
console.log(primeNumbers[1]); //3
console.log(primeNumbers[2]); //5
console.log(primeNumbers[3]); //7
console.log(primeNumbers[4]); //11

//while 반복문

//사용자로부터 두 개의 숫자를 입력받아 1부터 100까지의 숫자가 두 수의 공배수인지 확인한다.
let val1 = prompt('Enter the first number.');
let val2 = prompt('Enter the second number.');
let num = 1;

const isMultiple = () => {
    while(num <= 100){
        if(num % val1 == 0 && num % val2 == 0){
            console.log(num);
        }
        num++;
    }
}

isMultiple();

//사용자에게 1부터 100 사이의 지정된 숫자를 맞히도록 입력받는다.
//입력받은 숫자가 지정된 숫자보다 높거나 낮으면 숫자가 높고 낮음을 알려준다.
//지정된 숫자를 맞히면 정답임을 알려준다.

let answer = 59;
let inputtedValue = null;
while (inputtedValue == answer){
    inputtedValue = prompt('Enter the number(1 ~ 100)');
    if(inputtedValue > answer){
        alert(`${inputtedValue} is bigger than answer.`);
    } else if(inputtedValue < answer) {
        alert(`${inputtedValue} is smaller than answer.`);
    } else {
        alert(`correct.`);
        break;
    }
}

//for 반복문
//배열의 각 인덱스 값을 2배한 새로운 배열을 만들어 값을 함께 출력한다.
const arr = [2, 3, 5, 8, 13, 21, 34];
const arrTwice = new Array(arr.length);
for(let i = 0; i < arr.length; i++){
    arrTwice[i] = arr[i] * 2;
}
for(let i = 0; i < arrTwice.length; i++){
    console.log(`arr[${i}] = ${arr[i]} , arrTwice[${i}] = ${arrTwice[i]}`);
}

//사용자로부터 값을 입력받아 입력받은 수의 1부터 100까지의 배수를 구한다.
let value = prompt('Enter the number.')
for(let i = 1; i <= 100; i++){
    if(i % value == 0){
        console.log(`${value}의 배수 : ${i}`);
    }
}