# **동기와 비동기**

## **데이터 처리 모델**
- 데이터를 받는 방식 
- 동기식 처리 모델과 비동기식 처리 모델이 존재함
<br><br>

### **동기식 처리**
- **동기(Synchronous)** : 데이터의 **요청과 결과가** 한 자리에서 **동시에 일어나는 것**
- 동기식 처리의 장점
  - 설계가 매우 간단하고 직관적임
- 동기식 처리의 단점
  - 결과가 주어질 때까지 아무것도 하지 못하고 대기해야 함
<br><br>

### **비동기식 처리**
- **비동기(Asynchronous)** : 데이터의 **요청과 결과가** 한 자리에서 **동시에 일어나지 않는 것**
- 비동기식 처리의 장점
  - 결과가 반환되는 동안 다른 작업을 수행할 수 있음
- 비동기식 처리의 단점
  - 동기식 처리보다 설계가 복잡함

<div style = "text-align:center">
    <img src = "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fdgzxm2%2Fbtq6gMWpMoE%2F4AlwRpWQMwCqYFIgbKuVG0%2Fimg.png">
</div>

<br><br>

- 동기식 처리와 비동기식 처리를 잘 보여주는 예시 : setTimeOut() 함수
  
```javascript
//setTimeout() 함수는 일정 시간이 지난 후 함수를 실행하는 데 사용됨

//동기적 예시
console.log('시작');

function waitThreeSeconds() {
  const startTime = new Date().getTime();
  while (new Date().getTime() < startTime + 3000);
  console.log('3초 지남');
}

waitThreeSeconds();

console.log('끝');

/*
 * 시작
 * 3초 지남
 * 끝
*/

// 위 코드에서 waitThreeSeconds() 함수를 호출하면 3초간 다음 줄의 코드가 실행되지 않고 대기하게 됨


//비동기적 예시
console.log('시작');

function waitThreeSeconds() {
  console.log('3초 지남');
}

setTimeout(waitThreeSeconds, 3000);

console.log('끝');

/* 
 * 시작
 * 끝
 * 3초 지남
*/

// 위 코드에서 setTimeout() 함수는 waitThreeSecond() 함수를 3초 후에 실행하도록 예약함
//그리고 다음 줄의 코드를 바로 실행함

```
---
<br><br>

# 블록과 논블록

## 블록(Block) : 동기적 코드 실행 방식
- 동기의 개념에서 만들어진 상태
- 코드를 실행할 때 결과가 반환될 때까지 코드의 실행을 중지시키는 방식
- 코드의 실행이 완전히 끝나야 다음 코드를 실행할 수 있기 때문에, 코드 실행이 예측 가능함
- 코드 실행 중 다른 작업을 수행할 수 없어 복잡한 동기화 작업이 필요하지 않음
<br><br>

## 논블록(Non-Block) : 비동기적 코드 실행 방식
- 비동기의 개념에서 만들어진 상태
- 코드를 실행할 때 결과가 반환되지 않아도 다음 코드를 실행할 수 있는 방식
- 복잡한 비동기 작업을 처리하는 데 유용
- 코드 실행 순서를 예측할 수 없어서 실행 순서를 관리하는 데 어려움이 있음

