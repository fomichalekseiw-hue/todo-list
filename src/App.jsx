import './App.css'

function App() {

  const todoList = [
    {id: 1, title: "My todo 1"},
    {id: 2, title: "My todo 2"},
    {id: 3, title: "My todo 3"},
  ]

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(todo => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    </div>
  )
}

export default App
