import { NavLink } from 'react-router-dom';
import Friends from './Friends';

import styles from './Navigation.module.css';

const Navigation = ({ friends, dispatch, newFriendName }) => {
    return (
        <>
            <nav className={styles.nav}>
                <NavLink to='/main'>Главная</NavLink>
                <NavLink to='/dialogs'>Диалоги</NavLink>
                <NavLink to='/news'>Новости</NavLink>
                <NavLink to='/images'>Галерая</NavLink>
                <NavLink to='social'>Группы</NavLink>
                <Friends
                    friends={friends}
                    newFriendName={newFriendName}
                    dispatch={dispatch}
                />
            </nav>
        </>
    );
};

export default Navigation;
