# *API*

## 기본 개념
- ***Front-end*(프론트엔드)** : 사용자가 보는 화면
- ***Back-end*(백엔드)** : 화면에 보여줄 정보를 처리하는 공간
<p align="center"><img src="https://www.seobility.net/en/wiki/images/0/04/Frontend-vs-Backend.png" width=500 height=375></p>

- *Front-end*는 *Back-end*에게 정보를 달라고 요청을 함 **(요청 : *Request*)**
- *Back-end*는 *DB*에서 정보를 가져와 *Front-end*에 전달 **(응답 : *Response*)**
- *Front-end*는 전달받은 정보를 화면에 표시
- ***API*** : *Front-end*가 *Back-end*에게 정보를 요청할 때 지켜야 하는 규칙
  - *API* 가이드 : *API*의 형식이 작성된 문서

--- 
<br>

## API 가이드
  <img src="https://velog.velcdn.com/images%2Fohmy0418%2Fpost%2F19b2da95-f3d7-49e1-bd21-ed4131b7f327%2Fimage.png">

  - *API* 가이드에는 **요청과 응답에 대한 정보**가 나와 있음
  - 요청
    - **주소** : API 서버 주소
  
    - **전송 방식** : *GET* / *POST*
      - *GET* : 요청 전송 시 요청 전문을 포함할 수 없음
      - *POST* : 요청 전송 시 요청 전문을 포함할 수 있음
  
    - **보낼 것** : *API* 요청에서 필요한 정보들
  - 응답
    - **형식** : 정보가 전달되는 형식
      - 거의 모든 *API에서* *JSON* 형태로 전달됨
        - (*JSON* : *Javascript*의 객체와 같은 형태이지만 )
  
    - **응답 의미 설명** : 응답에 어떤 것이 필요한지 적혀있음
  - *Open API* : 누군가 *Back-end*를 만들어 놓고 주소와 사용 규칙을 공개한것
    - *Open API*를 사용하면 *Front-end*만 만들고 사용할 수도 있음

---<br>
## *fetch()* 함수
- *fetch()* 함수는 첫 번째 인자로 URL, 두 번째 인자로 옵션 객체를 받고, Promise 타입의 객체를 반환
```javascript
fetch(url, options)
  .then((response) => console.log("response:", response))
  // http 요청 성공 시 response 객체 resolve
  .catch((error) => console.log("error:", error));
  // http 요청 실패 시 error 객체 reject
```
- 반환된 *Promise* 객체는 *API* 호출이 성공했을 경우 *response* 객체를 *resolve*하고, 실패했을 경우 *error* 객체를 *reject*함
<br>

### *fetch()* 함수를 이용해 *API* 호출하기
```javascript
// GET 형식으로 요청
fetch('https://jsonplaceholder.typicode.com/posts/1') 
// fetch() 함수의 method 옵션의 기본값이 GET이므로 
// GET 형식으로 요청하고자 할 때는 method 옵션을 지정해주지 않아도 됨
    .then(res => console.log(res.json())) 
    // res.json() : http 요청이 성공할 경우 JSON 형식으로 변환된 응답 본문을 반환하는 Promise 객체를 반환함
    .then(data => console.log(data))
    // res.json()에서 반환된 Promise 객체의 값(JSON 형식으로 변환된 응답 본문)을 반환


// POST 형식으로 요청
fetch('https://jsonplaceholder.typicode.com/posts', {
    method : 'POST', // POST 형식으로 요청하고자 할 때는 method 옵션 지정
    headers : {'Content-Type' : 'application/json'}, // headers 옵션 : http 요청 헤더(http 요청에서 사용되는 부가적 정보를 제공하는 역할) 설정
    // 'Content-Type' : 요청 본문의 데이터 타입을 나타냄
    // 'application/json' : JSON 형식의 데이터를 전송하는 경우 사용
    body : JSON.stringify({ // JSON.stringify() : JS 객체나 값을 JSON 문자열로 변환
        title: 'foo',
        body: 'bar',
        userId: 1,
  })
})
    .then(res => res.json())
    // res.json() : http 요청이 성공할 경우 json 형식으로 변환된 응답 본문을 반환하는 Promise 객체를 반환함
    .then(data => console.log(data));
    // res.json()에서 반환된 Promise 객체의 값(json 형식으로 변환된 응답 본문)을 반환
```


