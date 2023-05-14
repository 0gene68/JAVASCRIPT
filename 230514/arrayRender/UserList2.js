import React from "react";

// 방법 2. 컴포넌트를 재사용할 수 있도록 새로 만듦
const User = ({user}) => {
    return(
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

const UserList = () => {
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