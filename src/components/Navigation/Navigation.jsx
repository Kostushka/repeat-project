import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

const Navigation = ({ friends }) => {
    return (
        <>
            <nav className={styles.nav}>
                <NavLink to='/main'>Главная</NavLink>
                <NavLink to='/dialogs'>Диалоги</NavLink>
                <NavLink to='/news'>Новости</NavLink>
                <NavLink to='/images'>Галерая</NavLink>
                <NavLink to='social'>Группы</NavLink>
                <div className={styles.container}>
                    <h1 className={styles.title}>Друзья</h1>
                    {friends.map((el) => (
                        <div className={styles.wrapper} key={el.id}>
                            <img
                                className={styles.img}
                                src={el.img}
                                alt='friend'
                            />
                            {el.name}
                        </div>
                    ))}
                </div>
            </nav>
        </>
    );
};

export default Navigation;
