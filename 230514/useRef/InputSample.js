import React, { useState, useRef } from 'react';

const InputSample = () => {
    const [inputs, setInputs] = useState({
        name : '',
        nickname : ''
    })

    const nameInput = useRef(); //useRef() : Ref 객체를 만듦

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
        nameInput.current.focus();
    };

    return(
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput} />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {name} ({nickname})</b>
            </div>
        </div>
    );
}

export default InputSample;
