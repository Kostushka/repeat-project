import UserName from './UserName';
import Message from './Message';

import styles from './Dialogs.module.css';

const Dialogs = ({ dialogs }) => {
    return (
        <div className={styles.wrapper}>
            <h1>Диалоги</h1>
            <div>
                {dialogs.map((el, i) => (
                    <div className={styles.container} key={i}>
                        <UserName name={el.name} id={el.id} />
                        <Message message={el.message} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dialogs;
