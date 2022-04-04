import styles from './MainInfo.module.css';

const MainInfo = () => {
    return (
        <>
            <img
                className={styles.img}
                src='https://plotnikov.spb.ru/wp-content/uploads/2017/05/all-vk.jpg'
                alt='main'
            />
            <div className={styles.main}>Основная часть</div>
        </>
    );
};

export default MainInfo;
