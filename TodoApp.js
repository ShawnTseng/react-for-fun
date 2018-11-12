const {
    InputField,
    TodoHeader,
    TodoList
} = window.App;

class TodoApp extends React.Component {
    render() {
        const todos = [
            {
                id: 0,
                title: 'Item 1',
                completed: false
            },
            // ...
        ];
        return (
            <div>
                <TodoHeader
                    title="我的待辦清單"
                    username="Jason"
                    todoCount={todos.filter((todo) => !todo.completed).length}
                />
                <InputField placeholder="新增待辦清單" />
                <TodoList todos={todos} />
            </div>
        );
    }
}

window.App.TodoApp = TodoApp;