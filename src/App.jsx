import './App.css'
import TodoList from "./TodoList.jsx";
import TodoForm from "./TodoForm.jsx";
import {useState} from "react";

const todos = [
    {id: 1, title: "My todo 1"},
    {id: 2, title: "My todo 2"},
    {id: 3, title: "My todo 3"},
]


function App() {

    const [todoList, setTodoList] = useState(todos);

    return (
        <div>
            <h1>Todo List</h1>
            <TodoForm/>
            <TodoList todoList={todoList} />
        </div>
    )
}

export default App
