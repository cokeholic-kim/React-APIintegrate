import React, { useState } from 'react';
import {useTodoDispatch,useTodoNextId} from '../context/todoContext';

const TodoCreate = () => {
    
    const [input,setinput] = useState("");
    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();
    function Addon(){
        dispatch({
            type:'CREATE',
            todo:{id:nextId.current,text:input,done:false}
        })
        setinput("");
        nextId.current += 1;
        console.log(nextId)
    }
    return (
        <div>
            <input value={input} onChange={(e)=>setinput(e.target.value)}></input>
            <button onClick={Addon}>추가</button>
        </div>
    );
};

export default TodoCreate;