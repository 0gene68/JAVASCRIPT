// 클래스형 컴포넌트

import React, {Component} from 'react';

class Class1 extends Component {
    // render() : React.Component 클래스의 메소드 
    // HTML을 웹 페이지에 렌더링함
    // 클래스형 컴포넌트 생성 시에 사용
    render() { 
        return (
            <div>
                <header>
                    <h1>클래스형 컴포넌트 1</h1>
                </header>
            </div>
        );
    }
}

export default Class1;
