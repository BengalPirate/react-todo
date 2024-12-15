function AddTodoForm(props) {
    // Define the handleAddTodo function
    const handleAddTodo = (event) => {
        event.preventDefault(); // Prevent the default form submit behavior

        // Retrieve the value of the title element
        const todoTitle = event.target.elements.title.value;

        // Invoke the onAddTodo callback prop and pass todoTitle as an argument
        props.onAddTodo(todoTitle);

        // Reset the form
        event.target.reset();
    };

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input type="text" id="todoTitle" name="title" />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;
