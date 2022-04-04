import UserName from './UserName';
import Message from './Message';

import styles from './Dialogs.module.css';

const Dialogs = () => {
    const data = [
        { id: 1, name: 'Банан', message: 'Привет, Банан!' },
        { id: 2, name: 'Ананас', message: 'Привет, Ананас!' },
        { id: 3, name: 'Вишня', message: 'Привет, Вишня!' },
        { id: 4, name: 'Морковь', message: 'Привет, Морковь!' },
        { id: 5, name: 'Петруха', message: 'Привет, Петруха!' },
        { id: 6, name: 'Огуречный огурец', message: 'Привет, Огурец!' },
    ];
    return (
        <div className={styles.wrapper}>
            <h1>Диалоги</h1>
            <div>
                {data.map((el, i) => (
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
