//Data Type(자료형)

//Number(숫자)
console.log(typeof(1)); //'number'

//Arithmetic operators(산술 연산자)
console.log(3 + 2); //5(+ : 덧셈 연산자)
console.log(3 - 2); //1(- : 뺄셈 연산자)
console.log(3 * 2); //6(* : 곱셈 연산자)
console.log(3 / 2); //1.5(/ : 나눗셈 연산자)
console.log(3 % 2); //1(% : 나머지 연산자)

//String(문자열)
console.log(typeof('Hello World!')); //'String'(작은따옴표 사용)
console.log(typeof("Hello World!")); //'String'(큰따옴표 사용)

console.log("")

//Escape Character(이스케이프 문자)
console.log("I'm\tHappy!") //I'm    happy(\t : 수평 탭)
console.log("I'm\nHappy!") 
/* I'm
 * Happy!
 * (\n : 행 바꿈)
*/
console.log("\\\\"); // \\ (\\ : 역 슬래시)
console.log(" \'\'\' "); // ''' (\' : 작은따옴표)
console.log(" \"\"\" "); // """"""(\" : 큰따옴표)

//bool(불)

//Relational operator(비교 연산자)
console.log(1 < 2); //true (< : 우변이 좌변보다 큼)
console.log(1 > 2); //false (> : 좌변이 우변보다 큼)
console.log(1 <= 2); //true (<= : 우변이 좌변보다 크거나 같음)
console.log(1 >= 2); //false (>= : 좌변이 우변보다 크거나 같음)
console.log(1 == 2); //false (== : 좌변과 우변이 같음)
console.log(1 != 2); //true(!= : 좌변과 우변이 다름)

//Logical operator(논리 연산자)
console.log(!(1 < 2)); //false (! : NOT 연산자, !true > false / !false > true)
console.log((1 > 2) && (2 < 3)); //false (&& : AND 연산자, 두 조건이 모두 참이어야 참)
console.log((1 > 2) || (2 < 3)); //true (|| : OR 연산자, 두 조건 중 하나만 참이면 참)
