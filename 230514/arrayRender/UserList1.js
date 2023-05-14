import React from "react";

// 방법 1. 코드를 그대로 작성함, 가장 기본적이지만 코드가 반복되어 비효율적임
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

export default UserList;