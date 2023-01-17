import React from 'react';
import { useTodoState } from '../context/todoContext';


const TodoHeader = () => {
    //context를 사용하여 state값 반환
    const todos = useTodoState();
    const undoneTasks = todos.filter(todo=> !todo.done);
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR',{
        year:'numeric',
        month:'long',
        day:'numeric'
    })
    return (
        <div>
            <h1>TodoList</h1>
            <div>{dateString}</div>
            <div>할일 {undoneTasks.length}개 남음</div>
        </div>
    );
};

export default TodoHeader;