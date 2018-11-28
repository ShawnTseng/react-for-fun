const { ReduceStore } = FluxUtils;

const { ActionTypes, AppDispatcher } = window.App;

const _createTodo = (todos, title) => {
    // 1. 每次新增項目，就回傳新陣列
    return [
        ...todos,
        {
            id: todos[todos.length - 1].id + 1,
            title,
            completed: false
        }
    ];
};

const _updateTodo = (todos, id, title) => {
    const idx = todos.findIndex((todo) => todo.id === id);
    if (idx === -1) return todos;

    // 2. 每次修改項目，就回傳新陣列
    const newTodos = [...todos];
    newTodos[idx] = {
        ...todos[idx],
        title
    };
    return newTodos;
};

const _toggleTodo = (todos, id, completed) => {
    const idx = todos.findIndex((todo) => todo.id === id);
    if (idx === -1) return todos;
    // 3. 每次切換狀態，就回傳新陣列
    const newTodos = [...todos];

    newTodos[idx] = {
        ...todos[idx],
        completed
    };
    console.log(newTodos);
    return newTodos;
};

const _deleteTodo = (todos, id) => {
    const idx = todos.findIndex((todo) => todo.id === id);
    if (idx === -1) return todos;

    const newTodos = [...todos];
    newTodos.splice(idx, 1);
    return newTodos;
};

// https://facebook.github.io/flux/docs/flux-utils.html#reducestore-t
class TodoStore extends ReduceStore {
    // 1. 回傳初始狀態
    getInitialState() {
        return [];
    }

    // 2. 實作 reduce()，該函數提供"舊狀態","action"，必須回傳"新狀態"
    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.LOAD_TODOS_SUCCESS:
                return action.todos;
            case ActionTypes.CREATE_TODO:
                return _createTodo(state, action.title);
            case ActionTypes.UPDATE_TODO:
                return _updateTodo(state, action.id, action.title);
            case ActionTypes.TOGGLE_TODO:
                return _toggleTodo(state, action.id, action.completed);
            case ActionTypes.DELETE_TODO:
                return _deleteTodo(state, action.id);
            default:
                return state;
        }
    }
}
window.App.TodoStore = new TodoStore(AppDispatcher);