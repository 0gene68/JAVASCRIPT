import React from "react";

// map() 함수를  사용하여 동적인 배열을 렌더링함
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
            {users.map((user) => {
                <User user={user} />
            })}
        </div>
    );
}
    
export default UserList;