import React, { useState } from "react";

const InputSample = () => {
    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
    }

    const onReset = () => {
        setText('');
    }

    //------------------------------------------------------------

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
        <div>
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {text}</b>
            </div>
        </div>
        <br></br>
        <div>
            <input name="name" placeholder="이름" onChange={onChange2} value={name}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange2} value={nickname}/>
            <button onClick={onReset2}>초기화</button>
            <div>
                <b>값: {name} ({nickname})</b>
            </div>
        </div>
    </div>    
    );
}

export default InputSample;