class InputField extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { value: props.value || '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    render() {
        return <input {...this.props}
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
        />
    }

    /**
     * 更新value
     * @param {元件} e 
     */
    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    /**
     * 按下鍵盤時
     * @param {元件} e 
     */
    handleKeyDown(e) {
        const {
            onKeyDown,
            onSubmitEditing
        } = this.props;
        const { value } = this.state;
        switch (e.keyCode) {
            case 13:
                if (value.trim()) {
                    onSubmitEditing && onSubmitEditing(value);
                }
                this.setState({ value: '' });
                break;
        }
        onKeyDown && onKeyDown(e);
    }
}

InputField.propTypes = {
    onSubmitEditing: React.PropTypes.func
};

window.App.InputField = InputField;