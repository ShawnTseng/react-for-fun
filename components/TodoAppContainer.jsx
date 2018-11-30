const { TodoApp, TodoActions } = window.App;
const { connect } = ReactRedux;

class TodoAppContainer extends React.Component {
    componentDidMount() {
        this.props.loadTodos();
    }

    render() {
        const { todos } = this.props;

        return (
            <TodoApp
                todos={todos}
                onCreateTodo={this.props.createTodo}
                onUpdateTodo={this.props.updateTodo}
                onToggleTodo={this.props.toggleTodo}
                onDeleteTodo={this.props.deleteTodo}
            />
        );
    }
}
// 
const mapStateToProps = (state) => ({ todos: state.todos });
const mapDispatchToProps = {
    loadTodos: TodoActions.loadTodos,
    createTodo: TodoActions.createTodo,
    updateTodo: TodoActions.updateTodo,
    toggleTodo: TodoActions.toggleTodo,
    deleteTodo: TodoActions.deleteTodo
};
window.App.TodoAppContainer = connect(mapStateToProps, mapDispatchToProps)(TodoAppContainer);