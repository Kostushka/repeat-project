import React from 'react';
import styles from './MainStatus.module.css';

class MainStatus extends React.Component {
    state = {
        editMode: false,
        inputText: this.props.status,
    };
    addInputText(e) {
        this.setState({
            inputText: e.target.value,
        });
    }
    activateMode() {
        this.setState({
            editMode: true,
        });
    }
    deactivateMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateUserStatus(this.state.inputText);
    };
    componentDidUpdate(prevProps) {
        if (prevProps.status !== this.props.status) {
            this.setState({ inputText: this.props.status });
        }
    }
    render() {
        return (
            <>
                {this.state.editMode ? (
                    <input
                        className={styles.input_status}
                        onChange={(e) => this.addInputText(e)}
                        value={this.state.inputText}
                        onBlur={this.deactivateMode}
                        autoFocus={true}
                    />
                ) : (
                    <span
                        onDoubleClick={this.activateMode.bind(this)}
                        className={styles.status}
                    >
                        {this.state.inputText || 'Статуса нет'}
                    </span>
                )}
            </>
        );
    }
}

export default MainStatus;
