import React from 'react';
import styles from './MainStatus.module.css';

class MainStatus extends React.Component {
    state = {
        editMode: false,
        inputText: 'Здравствуй, друг!',
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
    };
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
                        {this.state.inputText}
                    </span>
                )}
            </>
        );
    }
}

export default MainStatus;
