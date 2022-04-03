import styles from './Main.module.css';
import Post from './Post';

const Main = () => {
    return (
        <main>
            <img
                className={styles.img}
                src='https://plotnikov.spb.ru/wp-content/uploads/2017/05/all-vk.jpg'
                alt='main'
            />
            Основная часть
            <Post />
        </main>
    );
};

export default Main;
