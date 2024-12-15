import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
    // Create todoList state with setTodoList as the update function
    const [todoList, setTodoList] = useState([]);

    // Declare the addTodo function
    const addTodo = (newTodo) => {
        setTodoList([...todoList, newTodo]); // Add new todo while keeping existing todos
    };

    return (
        <>
            <h1>Todo List</h1>
            {/* Pass todoList state as a prop to TodoList */}
            <TodoList todoList={todoList} />
            {/* Pass addTodo as the onAddTodo callback to AddTodoForm */}
            <AddTodoForm onAddTodo={addTodo} />
        </>
    );
}

export default App;
