import Post from './Post';

import styles from './Main.module.css';

const Main = () => {
    return (
        <main>
            <img
                className={styles.img}
                src='https://plotnikov.spb.ru/wp-content/uploads/2017/05/all-vk.jpg'
                alt='main'
            />
            <div className={styles.main}>Основная часть</div>
            <Post />
        </main>
    );
};

export default Main;
