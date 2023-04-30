# JSX
- JSX는 공식적인 JS 문법은 아니지만, React로 프로젝트 개발 시에 사용됨
- Babel이라는 JS 컴파일러를 이용해 JS 형태의 코드로 변환됨
- JSX는 하나의 파일에 JS와 HTML을 동시에 작성하여 편리함


## JSX 문법
1. 반드시 부모 요소 하나로 감싸는 형태여야 함
```javascript

// 에러 케이스
const fail = () => {
    return (
        <div>Hello</div>
        <div>Nice To Meet You!</div>
    );
};


// 올바른 케이스
const success = () => {
    return ( // div 태그들을 div 태그로 한번 더 감쌈
        <div>  
            <div>Hello</div>
            <div>Nice To Meet You!</div>
        </div>
    );
};
```

## JS 표현식
- JSX에서 코드를 { }로 감싸주면 JS 표현식을 작성할 수 있음
```javascript
function App() => {
    const name = 'Tom';
    return(
        <div>
            <div>Hello</div>
            <div>{name}!</div>
        </div>
    );
};

function App() => {
    const name = 'Tom';
    return(
        <>
            <div>Hello</div>
            <div>{name}!</div>
        </>
    );
};

```

## if문, for문 대신 삼항 연산자를 사용
- if 문과 for 문은 JS 표현식이 아니기 때문에 JSX 내부 JS 표현식에서 사용할 수 없음
- 조건부에 따라 다른 렌더링을 할 때 JSX 주변 코드에서 if문(for문)을 사용하거나, { } 안에서 삼항 연산자(?)를 사용할 수 있음
```javascript
// 1. 외부에서 if문 사용
function App() {
    const name = 'Tom';
	let desc = '';
	const loginY = 'Y';
	if(loginY === 'Y') {
		desc = <div>어서 오세요. {name}님.</div>;
	} else {
		desc = <div>비회원 입니다.</div>;
	}
	return (
		<>
			{desc}
		</>
	);
}

// 2. 내부에서 사용
function App() {
    const name = 'Tom';
	const loginYn = 'Y';
	return (
		<>
			<div>
				{loginYn === 'Y' ? ( /* 삼항 연산자를 사용함 */
					<div>어서 오세요. {name}님.</div>
				) : (
					<div>비회원 입니다.</div>
				)}
			</div>
		</>
	);
}

// 3. and(&&) 연산자 사용
function App() {
    const name = 'Tom';
	const loginYn = 'Y';
	return (
		<>
			<div>
				{loginYn === 'Y' && <div>어서 오세요. {name}님.</div>}
			</div>
		</>
	);
} 

// 4. 즉시 실행 함수 사용
function App() {
    const name = 'Tom';
	const loginYn = 'Y';
	return (
		<>
			{
			  (() => {
				if(loginYn === "Y"){
				  return (<div>어서 오세요. {name}님.</div>);
				}else{
				  return (<div>비회원 입니다.</div>);
				}
			  })()
			}
		</>
	);
}
```
## JSX에서의 스타일링과 className, 주석
- 스타일 적용 시에 객체 형태로 넣어 주어야 함
- 스타일 적용 시에 스타일명을 camelCase 로 작성해야 함 ex) font-size => fontSize
<br>

- 일반 HTML에서 CSS 클래스를 사용할 때 class라는 속성을 사용함
- JSX에서는 class 대신 className을 사용함 
<br>

- JSX에서 주석은 /* ... */ 의 형식을 사용함
```javascript
function App() {
	const style = {
		backgroundColor: 'green',
		fontSize: '12px'
	}
	return (
		<div className="testClass">Hello, World!</div>
        /* 주석의 내용입니다. */
	);
}
```
