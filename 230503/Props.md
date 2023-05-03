
# *props* 
- 어떤 값을 컴포넌트에 전달할 때 쓰이는 값
- 컴포넌트의 파라미터로 생각할 수 있음
- 컴포넌트에 전달되는 *props*는 파라미터를 통하여 조회할 수 있음

```javascript
// App 컴포넌트에서 Hello 컴포넌트를 사용할 때, name이라는 값을 전달하는 과정

import React from 'react';
import Hello from './Hello';

function App() {
  return (
    <Hello name="react" /> // Hello 컴포넌트의 name 값 "react"를 전달함
  );
}

export default App;


// Hello 컴포넌트에서 name 값을 사용하는 경우

import React from 'react';

function Hello(props) { // props는 객체 형식으로 전달됨
  return <div>안녕하세요 {props.name}</div> // 객체의 속성에 접근하는 방식과 동일
}

export default Hello;
```
## 비구조화 할당 이용
- *props*는 객체 형식으로 전달됨
- 이를 비구조화 할당 문법을 이용해 더 간결하게 작성할 수 있음
```javascript
// 비구조화 할당 사용 전
import React from 'react';

function Hello(props) {
  return <div style={{ color: props.color }}>안녕하세요 {props.name}</div>
}
// props 내부의 값을 조회할 때마다 props. 을 입력하고 있음

export default Hello;

// 비구조화 할당 사용 후
import React from 'react';

function Hello({ color, name }) { // 비구조화 할당을 사용해 props를 객체 {color, name} 으로 바꿈
  return <div style={{ color }}>안녕하세요 {name}</div>
}

export default Hello;
```

## *defaultProps*
- 컴포넌트에 *props*를 지정하지 않은 경우 기본적으로 사용할 값을 설정하고 싶다면 컴포넌트에 *defaultProps* 값을 설정할 수 있음
```javascript
import React from 'react';

function Hello({ color, name }) {
  return <div style={{ color }}>안녕하세요 {name}</div>
}

// defaultProps를 이용해 Hello 컴포넌트의 name 속성의 기본값 지정
Hello.defaultProps = {
  name: '이름없음'
}

export default Hello;
```
<p align="center"><img src="https://i.imgur.com/WXSoZyf.png" width="500"></p>

## *props.children*
- 컴포넌트 태그 사이에 넣은 값을 조회할 수 있음
```javascript
// Wrapper.js
import React from 'react';

// children : 자식 컴포넌트
const Wrapper = ({children}) => {
  const style = {
    border: '2px solid black',
    padding: '16px',
  };
  return (
    <div style={children}>

    </div>
  )
}

export default Wrapper;

// App.js
import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
    <!--자식 컴포넌트인 Hello 컴포넌트의 color 속성을 Wrapper 컴포넌트의 스타일로 사용함-->
      <Hello name="react" color="red"/>
      <Hello color="pink"/>
    </Wrapper>
  );
}

export default App;
```
<p align="center"><img src="https://i.imgur.com/WEe30dz.png" width="500"></p>
