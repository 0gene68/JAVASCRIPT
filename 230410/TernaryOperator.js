//Ternary operator(삼항 연산자)

const array1 = [];
const array2 = ['a', 'b', 'c'];

//if-else 문을 대신하여 삼항 연산자로 간결하게 표현이 가능
let text1 = array1.length === 0 ? '배열이 비어있습니다.' : '배열이 비어있지 않습니다.';
let text2 = array2.length === 0 ? '배열이 비어있습니다.' : '배열이 비어있지 않습니다.';

console.log(text1); // "배열이 비어있습니다."
console.log(text2); // "배열이 비어있지 않습니다."


const isEvenNumber = (num) => {
    return num % 2 === 0 ? '짝수입니다' : '홀수입니다.';
}
isEvenNumber(4); // "짝수입니다."
isEvenNumber(5); // "홀수입니다."

