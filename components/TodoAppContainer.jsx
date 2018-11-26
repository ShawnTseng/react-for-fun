const { TodoApp, TodoStore, TodoActions } = window.App;

class TodoAppContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: TodoStore.getAll()
        };
    }

    componentDidMount() {
        TodoActions.loadTodos();
        this._removeChangeListener = TodoStore.addChangeListener(
            () => this.setState({ todos: TodoStore.getAll() })
        );
    }

    componentWillUnmount() {
        this._removeChangeListener();
    }

    render() {
        const { todos } = this.state;

        return (
            <TodoApp
                todos={todos}
                onCreateTodo={TodoActions.createTodo}
                onUpdateTodo={TodoActions.updateTodo}
                onToggleTodo={TodoActions.toggleTodo}
                onDeleteTodo={TodoActions.deleteTodo}
            />
        );
    }
}

window.App.TodoAppContainer = TodoAppContainer;