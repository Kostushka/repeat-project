import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <>
            <nav className={styles.nav}>
                <NavLink to='/main'>Главная</NavLink>
                <NavLink to='/dialogs'>Диалоги</NavLink>
                <NavLink to='/news'>Новости</NavLink>
                <NavLink to='/images'>Галерая</NavLink>
                <NavLink to='social'>Группы</NavLink>
            </nav>
        </>
    );
};

export default Navigation;
