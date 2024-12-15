import TodoListItem from './TodoListItem';

function TodoList({ todoList }) {
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
