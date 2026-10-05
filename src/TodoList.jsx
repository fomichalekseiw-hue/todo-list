function TodoList() {
    const todoList = [
        {id: 1, title: "My todo 1"},
        {id: 2, title: "My todo 2"},
        {id: 3, title: "My todo 3"},
    ]

    return (
        <ul>
            {todoList.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
    );
}

export default TodoList;