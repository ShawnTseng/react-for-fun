const {
    // 1. 引入 TodoActions 和 TodoStore
    TodoActions,
    TodoStore
} = window.App;

const {
    InputField,
    TodoHeader,
    TodoList
} = window.App;

class TodoApp extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            // 3. 初始資料改為從 TodoStore 中拿取
            todos: TodoStore.getAll()
        };
    }

    /**
     * 更新代辦事項
     * @param {新增、刪除、修改...等行為} updateFn 
     */
    updateTodosBy(updateFn) {
        return (...args) => {
            this.setState({
                todos: updateFn(this.state.todos, ...args)
            })
        }
    }

    render() {
        const { todos } = this.state;
        return (
            <div>
                <TodoHeader
                    title="我的待辦清單"
                    username="Jason"
                    todoCount={todos.filter((todo) => !todo.completed).length}
                />
                <InputField
                    placeholder="新增待辦清單"
                    onSubmitEditing={TodoActions._createTodo}
                />
                <TodoList
                    todos={todos}
                    onUpdateTodo={TodoActions._updateTodo}
                    onToggleTodo={TodoActions._toggleTodo}
                    onDeleteTodo={TodoActions._deleteTodo}
                />
            </div>
        );
    }

    componentDidMount() {
        // 4. 向 Server 請求資料改為調用 TodoActions
        TodoActions.loadTodos();
        // 5. 向 TodoStore 註冊監聽器：
        //    當監聽器被觸發，便讓 state 與 TodoStore 資料同步
        this._removeChangeListener = TodoStore.addChangeListener(
            () => this.setState({ todos: TodoStore.getAll() })
        );
    }

    componentWillUnmount() {
        // 6. 向 TodoStore 註銷監聽器
        this._removeChangeListener();
    }

}

window.App.TodoApp = TodoApp;