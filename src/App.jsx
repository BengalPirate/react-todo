import './App.css'

const todoList = [
  { id: 1, title: "Complete assignment" },
  { id: 2, title: "Read a new book" },
  { id: 3, title: "Exercise for 30 minutes" }
];

function App() {
  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  )
}

export default App;
