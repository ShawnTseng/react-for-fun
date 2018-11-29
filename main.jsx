const { createStore, combineReducers, applyMiddleware } = Redux;
const { TodoApp, reducers } = window.App;

const thunkMiddleware = ({ dispatch, getState }) => {
    return (next) => (action) => {
        // 1. 判斷 action 是否為 thunk function，是的話執行它，並將 dispatch 函數傳進去
        if (typeof action === 'function') {
            return action(dispatch, getState);
        }
        // 2. 如果 action 不是 thunk，將 action 交給下一個 middleware
        return next(action);
    };
};

const composedReducer = combineReducers(reducers);
const store = createStore(
    composedReducer,
    // 1. 將 middleware 依序傳遞進 applyMiddleware
    // 2. 將回傳的 enhancer 函數傳遞給 createStore
    applyMiddleware(thunkMiddleware)
);

const { TodoAppContainer } = window.App;
ReactDOM.render(
    <TodoAppContainer />,
    document.getElementById('app')
);
