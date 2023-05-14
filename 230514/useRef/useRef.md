# useRef 로 특정 DOM 선택하기
- JS에서, 특정 DOM을 선택해야 하는 상황에 *getElementById*, *querySelector*와 같은 *DOM Selector* 함수를 사용해서 *DOM*을 선택함
- React에서도 DOM을 선택해야 하는 상황이 발생하는 경우가 있음
  - 특정 엘리먼트의 크기를 가져오는 상황, 스크롤바 위치를 가져오거나 설정하는 상황, 포커스 설정 등
- 이 때, React에서 *ref*라는 것을 사용함
  
- 함수형 컴포넌트에서 *ref*를 사용할 때는 *useRef()*라는 *Hook* 함수를 사용함 
- 클래스형 컴포넌트에서 *ref*를 사용할 때는 *React.createRef()*라는 함수를 사용함

```javascript
import React, { useState, useRef } from 'react';

const InputSample = () => {
    const [inputs, setInputs] = useState({
        name = '',
        nickname = '';
    })

    const nameInput = useRef(); //useRef() : nameInput이라는 이름의 Ref 객체를 생성함

    const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

    const onChange = (e) => {
        const { value, name } = e.target; // 우선 e.target에서 name과 value를 추출
        setInputs({
            ...inputs, // 기존의 inputs 객체 복사
            [name] : value // name 키를 가진 값을 value로 설정
        });
    };

    const onReset = () => {
        setInputs({
            name : '',
            nickname : '' 
        });
        nameInput.current.focus(); // .current : ref 값이 주어진 DOM 요소를 가리킴, 초기값(ref 값이 주어진 객체가 없는 상태) null
    };

    return(
        <div>
            {/*ref 값을 설정하여 .current가 이 input 태그를 가리키도록 함*/}
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput} /> 
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {name} ({nickname})</b>
            </div>
        </div>
    )
}

export default InputSample;
```

- *useRef()* 함수를 사용하여 *Ref* 객체를 만들고, 이 객체를 선택하고 싶은 *DOM*에 *ref* 값으로 설정해 줌
- *Ref* 객체의 *.current* 프로퍼티가 원하는 *DOM*을 가리킴
