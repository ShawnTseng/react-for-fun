class TodoHeader extends React.Component {
    render() {
        const { title, username, todoCount } = this.props;
        return (
            <div>
                <h1>{title}</h1>
                <span>哈囉，{username}：你有 {todoCount} 項未完成待辦事項</span>
            </div>
        );
    }
}

// 型別限定
TodoHeader.propTypes = {
    title: React.PropTypes.string,
    username: React.PropTypes.string,
    todoCount: React.PropTypes.number
};

// 預設值
TodoHeader.defaultProps = {
    title: '我的待辦清單',
    username: 'Guest',
    todoCount: 0
};

window.App.TodoHeader = TodoHeader;