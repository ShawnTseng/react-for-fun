const { Container } = FluxUtils;
const { TodoApp, TodoStore, TodoActions } = window.App;

class TodoAppContainer extends React.Component {
    componentDidMount() {
        // 初始資料
        TodoActions.loadTodos();
    }

    // 1. 向 Store 註冊及註銷監聽器
    static getStores() {
        return [TodoStore];
    }

    // 2. 同步 Store 中的狀態至元件的 state 中
    static calculateState(prevState) {
        return {
            todos: TodoStore.getState(),
        };
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

// 3. 使用 create() 建立 Container component
window.App.TodoAppContainer = Container.create(TodoAppContainer);