const {
    InputField,
    TodoHeader,
    TodoList
} = window.App;

class TodoApp extends React.Component {
    render() {
        return (
            <div>
                <TodoHeader
                    title="我的待辦清單"
                    username="Jason"
                    todoCount={99}
                />
                <InputField placeholder="新增待辦清單" />
                <TodoList />
            </div>
        );
    }
}

// 3. 將元件類別 (TodoApp) 定義在 window.App 下：
//    這可以讓其他 JS 檔使用該元件類別
window.App.TodoApp = TodoApp;