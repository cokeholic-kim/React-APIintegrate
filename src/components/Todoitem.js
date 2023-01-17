import React from 'react';
import { useTodoState,useTodoDispatch } from '../context/todoContext';

const Todoitem = () => {
    const todos = useTodoState();
    const dispatch = useTodoDispatch();


    return (
        <div>
            <ul>
                {todos.map(todo=><li key={todo.id} style={{color:todo.done? "#eee":"#333"}}>
                    <span onClick={()=>dispatch({
                        type:'TOGGLE',
                        id:todo.id
                    })}>{todo.text}</span>
                    <button
                    onClick={()=>dispatch({
                        type:"REMOVE",
                        id:todo.id
                    })}>삭제</button></li>)}
            </ul>
        </div>
    );
};

export default Todoitem;