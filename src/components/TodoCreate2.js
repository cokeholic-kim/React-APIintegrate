import React, { useState } from 'react';
import { useTodoDispatch,useTodoNextId } from '../context/todoContext';
const TodoCreate2 = () => {
    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();
    const [value,setValue]=useState("");
    const addtodo=()=>{
        dispatch({
            type:'CREATE',
            todo:{id:nextId.current,text:value,done:false}
        })
        nextId.current += 1;
        setValue("")
    }
    return (
        <div>
            <input value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={addtodo}>+</button>
        </div>
    );
};

export default TodoCreate2;