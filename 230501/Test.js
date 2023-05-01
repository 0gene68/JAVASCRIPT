/**
 * 컴포넌트 : 리액트로 만들어진 앱을 이루는 최소한의 단위
 * - 컴포넌트는 데이터(props)를 입력받아 View(state) 상태에 따라 DOM node를 출력함
 * - 컴포넌트 이름은 항상 대문자로 시작함
 * - 컴포넌트에는 함수형과 클래스형이 있음
 */

// 컴포넌트 생성 예시

// React에서 컴포넌트를 만들 때 React를 불러와 주어야 함
import React from 'react';

// 컴포넌트 생성
const Hello = () => {
    return <div>Hello World!</div>
}

// 컴포넌트를 내보냄 : 다른 컴포넌트에서 사용할 수 있음
export default Hello;
