# Async / Await
- ES8(ES2017) 문법으로, *Promise*를 더 쉽게 사용할 수 있게 해줌
## Async / Await의 사용법

- ### Async
```javascript
// async 함수(비동기 함수) 예시

async function f() {
    return "Hello World!";
}

// 반환값 : Promise.resolve("Hello World!")
```
- 함수 앞에 *async* 키워드를 붙이면 해당 **함수는 항상 *Promise*를 반환**
- *Promise*가 아닌 값은 *fulfilled* 상태의 *Promise*로 값을 감싸 *Promise* 값을 반환
    - *async* 함수의 반환값을 *Promise*.*resolve*()의 인자로 전달
<br><br><br>

- ### Await
```javascript
// await 예시

async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!"), 3000)
  });

  let result = await promise; 
  // await 키워드가 Promise 객체가 처리되기 전까지 async 함수 내의 다른 코드의 실행을 막음

  alert('Hello World!'); //await 키워드에 의해 비동기적으로 실행되지 못하고 3초 후 실행됨
  alert(result); // "완료!"
}

f();
```
- *await* 키워드는 *async* 함수 내에서만 사용할 수 있음 → 일반 함수 내에서 사용할 시 *Syntax error* 발생
- *await* 키워드는 *Promise* 객체가 처리될 때까지 *async* 함수 내의 다른 코드들의 실행을 일시정지함
- *await* 키워드는 ***async* 함수 내의 코드들은 동기적**으로, ***async* 함수 밖의 코드들은 비동기적으로** 실행하게 함