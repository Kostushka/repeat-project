import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';

const Dialogs = () => {
    const data = [
        { id: 1, name: 'Имя1', message: 'Привет 1' },
        { id: 2, name: 'Имя2', message: 'Привет 2' },
        { id: 3, name: 'Имя3', message: 'Привет 3' },
        { id: 4, name: 'Имя4', message: 'Привет 4' },
        { id: 5, name: 'Имя5', message: 'Привет 5' },
        { id: 6, name: 'Имя6', message: 'Привет 6' },
    ];
    return (
        <>
            <h1>Диалоги</h1>
            <div>
                {data.map((el, i) => (
                    <div className={styles.container} key={i}>
                        <NavLink to={`/dialogs/${el.id}`}>{el.name}</NavLink>
                        <div className={styles.message}>{el.message}</div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Dialogs;
