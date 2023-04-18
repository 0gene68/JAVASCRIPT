# *Promise* 클래스의 정적 메소드

## *Promise.all*
- *Promise* 객체로 이루어진 배열 내의 모든 *Promise가* 처리되면 **'새로운 *Promise*'** 반환 
- 배열 내의 *Promise의* 결괏값을 담은 배열이 '새로운 *Promise*'의 *result* 값이 됨
- '새로운 *Promise*'의 *result* 의 요소 순서는 전달되는 *Promise의* 순서와 같음
<br>
```javascript
let promiseAll = Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(alert); // 모든 Promise가 처리되면 1, 2, 3이 반환됨
```


---
<br>

## *Promise.allSettled*
- *Promise.all*은 모든 *Promise* 중 거절되는 *Promise*가 하나라도 있으면 전체가 거절됨
- 그와 달리, *Promise.allSettled* 는 거절되는 *Promise*가 있더라도 모든 *Promise*가 처리될 때까지 기다림
- 반환되는 배열은 다음과 같은 요소를 가짐
  - 응답이 성공함 : *{status:"fulfilled", value:result}*
  - 에러가 발생함 : *{status:"rejected", reason"error}*
<br>

```javascript
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/Violet-Bora-Lee',
  'https://no-such-url'
];

Promise.allSettled(urls.map(url => fetch(url))) //fetch : js의 Promise 기반의 내장 api, 네트워크를 통해 서버에 http 요청을 보내고 응답을 받아옴
  .then(results => { // (*)
    results.forEach((result, num) => {
      if (result.status == "fulfilled") { 
        alert(`${urls[num]}: ${result.value.status}`);
      } //Promise의 결과값이 성공 상태 → url 주소 : 200(ok를 나타내는 http 응답 코드 중 하나)
      if (result.status == "rejected") {
        alert(`${urls[num]}: ${result.reason}`);
      } //Promise의 결과값이 실패 상태 → url 주소 : 실패한 이유
    });
  });
```
---
<br>

## *Promise.race*
- 가장 먼저 처리되는 *Promise*의 결과 / 에러 반환(*race* : 경주에서 1위를 한 *Promise*가 반환된다는 뜻)
- 아래 코드에서 3번째 *Promise*가 가장 먼저 처리되기 때문에 3번째 *Promise*의 결과 값이 *result* 값이 됨

```javascript
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("에러 발생!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000))
]).then(alert); // 1
```
---
<br>

## *Promise.resolve* / *Promise.reject*
- 성공 상태 / 실패 상태의 *Promise* 생성
- *async* / *await* 문법이 생긴 이후로 잘 사용되지 않음

### *Promise.resolve*
- 결괏값이 *value*인 성공 상태의 *Promise* 생성

### *Promise.reject*
- 결괏값이 *value*인 실패 상태의 *Promise* 생성
```javascript
let promiseFulfilled = new Promise(resolve => resolve(value));
let promiseRejected = new Promise((resolve, reject) => reject(error))
```

