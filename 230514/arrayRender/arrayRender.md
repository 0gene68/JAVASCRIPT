# 배열 렌더링하기
```javascript
const users = [
    {
        id : 1,
        username : 'Tom',
        email : 'Tom0608@gmail.com'
    },
    {
        id : 2,
        username : 'Lily',
        email : 'Lily1017@gmail.com'
    },
    {
        id : 3,
        username : 'Jennifer',
        email : 'Jen1008@gmail.com'
    }
]
```

## 1. 그대로 코드를 작성함, 가장 기본적이지만 비효율적인 방법
```javascript
import React from "react";

const UserList = () => {
    const users = [
        ...
    ];
    
    return(
        <div>
            <div>
                <b>{users[0].username}</b> <span>({users[0].email})</span>
            </div>
            <div>
                <b>{users[1].username}</b> <span>({users[1].email})</span>
            </div>
            <div>
                <b>{users[2].username}</b> <span>({users[2].email})</span>
            </div>
        </div>
    )
}
```


## 2. 컴포넌트를 재사용할 수 있도록 새로 만듦
```javascript
const User = ({user}) => {
    return(
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

const UserList = () => {
    const users = [
        ...
    ];

    return(
        <div>
            <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} />
        </div>
    );
}
    
export default UserList;
```

- 동적인 배열을 렌더링해야 할 때는 JS 배열의 내장함수 *map()*을 사용함
  - map() : 배열 내의 각 원소를 콜백함수의 인자로 주어 변환하여 새로운 배열을 만듦
```javascript
const User = ({user}) => {
    return(
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

const UserList = () => {
    const users = [
        ...
    ];

    return(
        <div>
            {users.map((user) => {
                <User user={user} />
            })}
        </div>
    );
}
    
export default UserList;
```

- React에서 배열을 렌더링할 때는 *key*라는 *props*를 설정해야 함
- *key* 값은 각 원소들마다 가지고 있는 고유 값으로 설정해야 함(*users*에서는 *id*)
- 만약 배열 안의 원소가 가지고 있는 고유한 값이 없다며 map() 함수를 사용할 대 설정하는 콜백함수의 두 번째 파라미터부터 index를 key로 사용하면 됨
```javascript
const User = ({user}) => {
    return(
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

const UserList = () => {
    const users = [
        ...
    ];

    // 
    return(
        <div>
            {users.map((user) => {
                <User user={user} key={user.id}/> // key 값 설정
            })}
        </div>
    );

    return(
        <div>
            {users.map((user, index) => {
                <User user={user} key={index}/> // key 값 설정
            })}
        </div>
    );
}
    
export default UserList;
```

## key의 존재유무에 따른 업데이트 방식
- key가 있으면 수정되지 않는 기존의 값을 그대로 두고 원하는 곳에 내용을 삽입하거나 삭제함
- 중복되는 key 값이 있을 경우 렌더링 시에 오류 메시지가 콘솔에 나타나고 업데이트가 제대로 이루어지지 않음
```javascript
// 다음과 같이 배열을 렌더링하는 상황에서는, 배열이 업데이트될 때 배열의 요소가 사라지거나 변경될 수 있음
array.map(item => <div>{item}</div>);

// 다음과 같이 key 값을 설정해서 배열을 렌더링하면, 수정되지 않는 값은 그대로 두고 원하는 곳에 내용을 삽입함
array.map(item => <div key={item.id}>{item.text}</div>);
```
