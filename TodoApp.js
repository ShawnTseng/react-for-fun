const {
    InputField,
    TodoHeader,
    TodoList
} = window.App;

class TodoApp extends React.Component {
    render() {
        // 2. 組合元件的觀念，與架構 HTML 元素是一樣的
        return (
            <div>
                <TodoHeader />
                <InputField />
                <TodoList />
            </div>
        );
    }
}

// 3. 將元件類別 (TodoApp) 定義在 window.App 下：
//    這可以讓其他 JS 檔使用該元件類別
window.App.TodoApp = TodoApp;