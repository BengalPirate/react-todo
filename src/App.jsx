import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
    // Create newTodo state with setNewTodo as the update function
    const [newTodo, setNewTodo] = useState('');

    return (
        <>
            <h1>Todo List</h1>
            <TodoList />
            <AddTodoForm onAddTodo={setNewTodo} />
            {/* Display the value of newTodo */}
            <p>New Todo: {newTodo}</p>
        </>
    );
}

export default App;
