import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ isAuth, login }) => {
    return (
        <>
            <header className={styles.header}>
                Заголовок
                <div className={styles.login}>
                    {isAuth ? (
                        login
                    ) : (
                        <Link to={'/login'} className={styles.link}>
                            Войти
                        </Link>
                    )}
                </div>
            </header>
        </>
    );
};

export default Header;
