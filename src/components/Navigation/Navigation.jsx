import { NavLink } from 'react-router-dom';
import FriendsContainer from './FriendsContainer';

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
                <FriendsContainer
                    friends={friends}
                    newFriendName={newFriendName}
                    dispatch={dispatch}
                />
            </nav>
        </>
    );
};

export default Navigation;
