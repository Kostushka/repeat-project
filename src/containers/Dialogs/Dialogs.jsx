import { useRef } from 'react';
import UserName from './UserName';
import Message from './Message';

import styles from './Dialogs.module.css';

const Dialogs = ({ dialogs, addMessage, newDialogText, updateMessageText }) => {
    const ref = useRef();

    const addNewMessage = () => {
        addMessage();
    };
    const onMessageChange = () => {
        updateMessageText(ref.current.value);
    };
    return (
        <div className={styles.wrapper}>
            <h1>Диалоги</h1>
            <div>
                {dialogs.map((el, i) => (
                    <div className={styles.container} key={i}>
                        <UserName name={el.name} id={el.id} img={el.img} />
                        <Message message={el.message} />
                    </div>
                ))}
            </div>
            <div>
                <textarea
                    placeholder='Введите текст'
                    ref={ref}
                    value={newDialogText}
                    onChange={onMessageChange}
                />
                <div>
                    <button onClick={addNewMessage}>Добавить сообщение</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
