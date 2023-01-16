import React, { useEffect, useReducer} from 'react';
import axios from 'axios';
import useAsync from '../hooks/useAsync';

async function getUsers(){
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
    )
    return response;
}

const Users = () => {
    const[state,refetch] = useAsync(getUsers,[])
    const {data,loading,error} = state;
    if(loading) return <div>로딩중...</div>
    if(error) return <div>에러가 발생했습니다.</div> 
    if(!data) return null;
    return (
        <div>
            <ul>
                {data.map(user=><li ket={user.id}>{user.username} {user.name}</li>)}
            </ul>
            <button onClick={refetch}>재요청</button>
        </div>
    );
};

export default Users;