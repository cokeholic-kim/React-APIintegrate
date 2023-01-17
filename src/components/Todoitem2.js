import React from 'react';
import { useTodoDispatch, useTodoState } from '../context/todoContext';


const Todoitem2 = () => {
    const todos = useTodoState()
    const dispatch = useTodoDispatch()
    const removeTodo = (id)=>{
        dispatch({
            type:'REMOVE',
            id:id
        })
    }
    const toggletodo = (id)=>{
        dispatch({
            type:'TOGGLE',
            id:id
        })
    }
    return (
        <div>
            <ul>
                {todos.map(todo=><li key={todo.id} style={{backgroundColor:todo.done? "#eee":"green"}}>
                    <span onClick={()=>toggletodo(todo.id)}>{todo.text}</span>
                    <button onClick={()=>removeTodo(todo.id)}>삭제</button></li>)}
            </ul>
        </div>
    );
};

export default Todoitem2;