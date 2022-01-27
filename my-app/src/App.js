import './App.css';
import React, {useState} from "react";
import InputField from "./components/InputField";
import TodoItem from "./components/TodoItem";

function App() {
    const [todos, setTodos] = React.useState([]); // стейт для тудушек
    const [text, setText] = useState('');  // стейт для инпута, куда вводим название тудушки (главный инпут)

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
    }  // функция добавления тудушки

    const removeTodo = (todoID) => {
        setTodos(todos.filter(todo => todo.id !== todoID))
    } // функция удаления тудушки

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
    } // функция изменения чекбокса (галочка есть или галочки нету)


    return (
        <div className="App">
            <InputField addTodo={addTodo} text={text} setText={setText}/>
            <ul>
                {todos.map(todo =>
                    <li key={todo.id}>
                        <TodoItem text={todo.text}
                                  completed={todo.completed}
                                  id={todo.id}
                                  removeTodo={removeTodo}
                                  toggleTodoComplete={toggleTodoComplete}
                        />
                    </li>)}
            </ul>
        </div>
    );
}

export default App;
