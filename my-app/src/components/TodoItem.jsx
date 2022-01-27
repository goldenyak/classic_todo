import React from 'react';

const TodoItem = ({id, completed, text, removeTodo, toggleTodoComplete}) => {
    return (
        <li>
            <input type="checkbox" checked={completed} onChange={() => toggleTodoComplete(id)}/>
            <span>{text}</span>
            <button onClick={() => removeTodo(id)} style={{
                color: 'red',
                border: 'none',
                backgroundColor: 'white',
                cursor: 'pointer',
            }}>&times;</button>
        </li>
    );
};

export default TodoItem;