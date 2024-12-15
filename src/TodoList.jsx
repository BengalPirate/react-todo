import TodoListItem from './TodoListItem'; // Import TodoListItem

const todoList = [
    { id: 1, title: "Complete assignment" },
    { id: 2, title: "Read a new book" },
    { id: 3, title: "Exercise for 30 minutes" }
];

function TodoList() {
    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todoList.map((todo) => (
                    <TodoListItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;