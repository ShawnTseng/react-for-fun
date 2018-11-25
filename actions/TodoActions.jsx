const {
    ActionTypes,
    AppDispatcher
} = window.App;

window.App.TodoActions = {
    // 1. 一個 Action Creator 函數做兩件事
    createTodo(title) {
        AppDispatcher.dispatch({ type: ActionTypes.CREATE_TODO, title });
    },
    updateTodo(id, title) {
        AppDispatcher.dispatch({ type: ActionTypes.UPDATE_TODO, id, title });
    },
    toggleTodo(id, completed) {
        AppDispatcher.dispatch({ type: ActionTypes.TOGGLE_TODO, id, completed });
    },
    deleteTodo(id) {
        AppDispatcher.dispatch({ type: ActionTypes.DELETE_TODO, id });
    },

    loadTodos() {
        // 2. 在非同步的狀態中，可以等待有 response 時，在丟 action 物件
        //
        //    註：同一個函數中，可以丟好幾個 action 物件，
        //    例如請求前丟一個，因為我們要將資料狀態改為 loading；
        //    請求成功或失敗，各丟不同的 action！
        fetch('./todos.json')
            .then((response) => response.json())
            .then((todos) => {
                AppDispatcher.dispatch({ type: ActionTypes.LOAD_TODOS_SUCCESS, todos });
            });
    }
}