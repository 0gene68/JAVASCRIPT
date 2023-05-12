// 리액트 패키지의 useState 함수를 불러옴
import React, { useState } from "react";

const Counter = () => {
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