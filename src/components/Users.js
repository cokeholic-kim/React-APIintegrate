import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Users = () => {
    //요청의 결과 - null
    const[users,setUsers]=useState(null)
    //로딩상태 -false
    const [loading,setLoading] = useState(false)
    //에러 -null
    const [error,setError] = useState(null)
    useEffect(()=>{
        // async aswait
        const fetchUsers = async ()=>{
            try{
                //요청이 시작되면 error 와 users를 초기화
                setError(null);
                setUsers(null);
                //loading상태는 true로 변경
                setLoading(true);
                const response = await axios.get( //await으로 로딩되는시간을 기다려줌 // 없으면 안기다려주고 실행해서 로딩데이터가 저장되지않음
                    'https://jsonplaceholder.typicode.com/users'
                );
                setUsers(response.data);//데이터는 reponse.data안에 있음.
            }
            catch(e){
                setError(e); //에러가 발생하면 에러상태값을 업데이트
            }
            //loading상태를 false로 변경
            setLoading(false);
        };
        fetchUsers();
    },[])
    if(loading) return <div>로딩중...</div>
    if(error) return <div>에러가 발생했습니다.</div> 
    if(!users) return null;
    return (
        <div>
            <ul>
                {users.map(user=><li ket={user.id}>{user.username} {user.name}</li>)}
            </ul>
        </div>
    );
};

export default Users;