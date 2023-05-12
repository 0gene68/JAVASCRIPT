# useState를 이용하여 컴포넌트에서 바뀌는 값 관리
- 컴포넌트에서 보여줘야 하는 내용이 사용자 인터랙션에 따라 바뀌어야 할 때 useState 함수를 사용
```javascript
// 버튼을 누르면 숫자가 바뀌는 Counter 컴포넌트

// Counter.js
import React from 'react';

const Counter = () => {
    const onIncrease = () => {
        console.log('+1');
    }

    const onDecrease = () => {
        console.log('-1');
    }

    return(
        <div>
            <h1>0</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;

// App.js
import React from 'react';
import Counter from './Counter';

const App = () => {
    return(
        <Counter />
    );
}

export default App;
```

## useState로 동적인 값 추가
- 컴포넌트에서 동적인 값을 상태(state)라고 부름
- useState 함수를 사용해서 컴포넌트에서 상태를 관리할 수 있음
- 상태의 기본값을 파라미터로 넣어서 호출함
- useState() 함수를 호출하면 첫 번째 원소로 현재 상태, 두 번째 원소로 Setter 함수를 갖는 배열을 반환함
```javascript
// 리액트 패키지의 useState 함수를 불러옴
import React, { useState } from "react";

const Counter = () => {
    // 배열 비구조화 할당
    const [number, setNumber] = useState(0);

    // h1 태그의 숫자를 변경시키는 onIncrease, onDecrease 함수 생성
    const onIncrease = () => {
        setNumber(number + 1);
    }

    // 기존 값을 업데이트하는 방법을 함수로 표현하여 등록하는 방식으로도 값을 업데이트할 수 있음
    const onIncrease2 = () => {
        setNumber(prevNumber => prevNumber + 1);
    }

    const onDecrease = () => {
        setNumber(number - 1);
    }

    const onDecrease2 = () => {
        setNumber(prevNumber => prevNumber - 1);
    }
    
    return(
        <div>
            <h1>{number}</h1>
            {/* React에서 이벤트 설정 시에 on이벤트이름={실행하고싶은함수이름} 의 형태로 설정함 */}
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;
```

## input 상태 관리하기
- input 태그에서 useState() 함수를 사용할 때에 input 태그의 onChange 이벤트를 사용
- 이벤트 객체 *e*를 파라미터로 받아 사용할 수 있음
- e.target : 이벤트가 발생한 DOM을 가리킴 / e.target.value : 이벤트가 발생한 DOM에 입력한 값

- 여러 개의 input 태그의 상태를 관리할 때는 input에 name을 설정하고 이벤트가 발생했을 때 이 값을 참조하는 방법이 효율적임
- 또한 useState() 함수에서 문자열이 아닌 객체를 파라미터로 받아 상태를 관리해주어야 함

```javascript
// 1개의 input 태그의 상태 관리
import React, { useState } from "react";

const InputSample = () => {
    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
    }

    const onReset = () => {
        setText('');
    }

    return(
        <div>
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {text}</b>
            </div>
        </div>
    )
}

// 여러 개의 input 태그의 상태 관리
import React, { useState } from "react";

const InputSample = () => {
    const [inputs, setInputs] = useState({
        name : '',
        nickname : ''
    });

    const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

    const onChange2 = (e) => {
        // e.target에서 name과 value를 추출
        const {value, name} = e.target;
        setInputs({
            ...inputs, //기존의 inputs 복사
            [name] : value // name 키를 가진 값을 value로 설정
        })
    }

    const onReset2 = () => {
        setInputs({
            name : '',
            nickname : ''
        })
    }

    return(
        <div>
            <input name="name" placeholder="이름" onChange={onChange2} value={name}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange2} value={nickname}/>
            <button onClick={onReset2}>초기화</button>
            <div>
                <b>값: {name} ({nickname})</b>
            </div>
        </div>    
    );
}

export default InputSample;
```