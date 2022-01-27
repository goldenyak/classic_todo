import './App.css';
import React, {useState} from "react";

function App() {
    const [todos, setTodos] = React.useState([]);
    const [text, setText] = useState('');

    const addTodo = () => {
        if (text.trim().length) {
            setTodos([
                ...todos,
                {
                    id: new Date().toISOString(),
                    text,
                    completed: false,
                }
            ])
            setText('');
        }
    }

    const removeTodo = (todoID) => {
        setTodos(todos.filter(todo => todo.id !== todoID))
    }

    const toggleTodoComplete = (todoID) => {
        setTodos(
            todos.map(todo => {
                    if (todo.id !== todoID) return todo;

                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
            )
        )
    }


    return (
        <div className="App">
            <label>
                <input value={text} onChange={(e) => setText(e.currentTarget.value)} placeholder="Новая задача"/>
                <button onClick={addTodo} className="addButton">Добавить</button>
            </label>
            <ul>
                {todos.map(todo => <li key={todo.id}>
                    <input type="checkbox" checked={todo.completed} onChange={() => toggleTodoComplete(todo.id)}/>
                    <span>{todo.text}</span>
                    <button onClick={() => removeTodo(todo.id)} style={{
                        color: 'red',
                        border: 'none',
                        backgroundColor: 'white',
                        cursor: 'pointer',
                    }}>&times;</button>
                </li>)}
            </ul>
        </div>
    );
}

export default App;
