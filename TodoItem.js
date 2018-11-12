const { InputField } = window.App;

class TodoItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { editable: false };
        this.toggleEditMode = this.toggleEditMode.bind(this);
    }

    toggleEditMode() {
        this.setState({ editable: !this.state.editable });
    }

    render() {
        return this.state.editable ? this.renderEditMode() : this.renderViewMode();
    }

    renderViewMode() {
        const { title, completed, onDelete } = this.props;
        return (
            <div>
                <input type="checkbox" checked={completed} />
                <span onDoubleClick={this.toggleEditMode}>{title}</span>
                <button onClick={() => onDelete && onDelete()}>x</button>
            </div>
        );
    }

    renderEditMode() {
        return (
            <InputField
                autoFocus                    // autoFocus 讓使用者切換到編輯模式後，可以立即編打
                placeholder="編輯待辦事項"
                value={this.props.title}
                onBlur={this.toggleEditMode} // 當使用者點擊其他地方，則切換為「瀏覽模式」
                onKeyDown={(e) => {          // 當使用者按下 ESC，則切換為「瀏覽模式」
                    if (e.keyCode === 27) {
                        e.preventDefault();
                        this.toggleEditMode();
                    }
                }}
            />
        );
    }
}

window.App.TodoItem = TodoItem;