import React, {useState} from 'react';

const InputField = ({addTodo, text, setText}) => {

    return (
        <label>
            <input value={text} onChange={(e) => setText(e.currentTarget.value)} placeholder="Новая задача"/>
            <button onClick={addTodo} className="addButton">Добавить</button>
        </label>
    )
};

export default InputField;