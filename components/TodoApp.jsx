const {
    TodoHeader,
    InputField,
    TodoList
} = window.App;

/* TodoApp */
class TodoApp extends React.Component {
    render() {
        const {
            todos,
            onCreateTodo,
            onUpdateTodo,
            onToggleTodo,
            onDeleteTodo
        } = this.props;
        return (
            <div>
                <TodoHeader
                    title="我的待辦清單"
                    username="Jason"
                    todoCount={todos.filter((todo) => !todo.completed).length}
                />
                <InputField
                    placeholder="新增待辦清單"
                    onSubmitEditing={onCreateTodo}
                />
                <TodoList
                    todos={todos}
                    onUpdateTodo={onUpdateTodo}
                    onToggleTodo={onToggleTodo}
                    onDeleteTodo={onDeleteTodo}
                />
            </div>
        );
    }
}

window.App.TodoApp = TodoApp;