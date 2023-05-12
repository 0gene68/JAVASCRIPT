# 조건부 렌더링
- 특정 조건에 따라 다른 결과물을 렌더링하는 것
- 주로 **삼항 연산자** ? 를 사용해 조건부 렌더링을 함

```javascript
// App.js
import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';


function App() {
  return (
    <Wrapper>
        /* isSpecial이라는 props를 설정함 */
        <Hello name="react" color="red" isSpecial={true}/>
        <Hello color="pink" isSpecial={false} />
    </Wrapper>
  )
}

export default App;

// Hello.js
import React from 'react';

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
        /* isSpecial의 값이 true이면 '*'표시를 컴포넌트의 좌측에 표시함 */
        /* 이를 <b>삼항 연산자</b>를 이용해 표현 */
        { isSpecial ? <b>*</b> : null }
        안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
  name: 'noName'
}

export default Hello;
```
<p align="center"><img src="https://i.imgur.com/Pmhtt0i.png"></p>

- 단순히 특정 조건이 true이면 원하는 내용을 보여주고, false이면 숨겨주는 상황에서는, && 논리 연산자를 사용하는 것이 더 간편함
```javascript
import React from 'react';

const Hello = ({name, color, isSpecial}) => {
    return(
        <div style = {{color}}>
            {isSpecial && <b>*</b>}
            안녕하세요 {name}
        </div>
    );
} 

Hello.defaultProps = {
    name = '이름없음'
}

export default Hello;
```

## props 값의 생략
- 컴포넌트의 props 값을 설정할 때 props 이름만 작성하고 값을 생략하면, true로 설정한 것으로 간주함
```javascript
import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial /> /* 이 컴포넌트의 isSpecial의 값은 true가 됨 */
      <Hello color="pink"/>
    </Wrapper>
  );
}

export default App;
