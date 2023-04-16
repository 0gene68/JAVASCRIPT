# Promise
- 비동기 작업을 조금 더 편하게 처리할 수 있도록 ES6에 도입된 기능
- 비동기 작업 처리 시에 콜백 함수로 처리해야 했음 -> ***비동기 작업이 많아지면 코드가 쉽게 난잡해질 수 있음***

```javascript
// 숫자 n을 매개변수로 받아, 다섯 번에 걸쳐 1초마다 1씩 더해서 출력하는 작업을
// setTimeout()을 통해 구현
function increaseAndPrint(n, callback) {
  setTimeout(() => {
    const increased = n + 1;
    console.log(increased);
    if (callback) {
      callback(increased);
    }
  }, 1000);
}

increaseAndPrint(0, n => {
  increaseAndPrint(n, n => {
    increaseAndPrint(n, n => {
      increaseAndPrint(n, n => {
        increaseAndPrint(n, n => {
          console.log('끝!');
        });
      });
    });
  });
});

//5번이 아니라, 100번, 1000번이라면...?
```
- **콜백 지옥(callback hell)** : 비동기로 처리해야 하는 일이 많아질수록, 코드의 깊이가 계속 깊어지는 현상
- 이러한 콜백 지옥을 Promise를 사용해 방지할 수 있음

<br>

## Promise의 단점
  - 에러가 발생했을 경우, 어디서 에러가 발생했는지 알아내기 어려움
  - 특정 값을 공유해가면서 작업을 처리하기 까다로움<br>
  → async/await 를 사용하면 해결 가능<br><br>
  ---
  
## Promise 만들기
```javascript
const myPromise = new Promise((resolve, reject)) => { //Promise 성공 시 resolve 메소드, 실패 시 reject 메소드 호출
    //메소드 구현..
}
```
- resolve/reject 메소드 : Promise 객체의 상태를 결정하는 데 사용
  - resolve : Promise 객체가 성공 상태(fulfilled)가 되도록 함
  - reject : Promise 객체가 실패 상태(rejected)가 되도록 함

- ### Promise의 성공/실패
```javascript

// Promise가 성공 상태가 되는 경우
const myPromiseSuccess = new Promise((resolve, reject) => { 
    setTimeout(() => {
        resolve(1);
    }, 1000);
})

myPromiseSuccess.then(n => {
    console.log(n);
})

// Promise가 실패 상태가 되는 경우
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    Error reject(new Error());
  }, 1000);
});

myPromise
  .then(n => { //무시됨
    console.log(n);
  })
  .catch(error => {//실행됨
    console.log(error);
  });

```
- **.then()** : Promise 객체가 성공 상태가 되었을 때 호출되는 메소드
  - .then() 메소드는 2개의 argument를 받음
    - **fulfilled 상태일 때의 콜백함수** : Promise 객체가 성공 상태일 때 실행
    - **rejected 상태일 때의 콜백함수** : Promise 객체가 실패 상태일 때 실행
<br><br>
  
- **.catch()** : Promise 객체가 실패 상태가 되었을 때 호출되는 메소드
  - .then() 메소드는 1개의 argument를 받음
    - **rejected 상태일 때의 콜백함수** : Promise 객체가 실패 상태일 때 실행

