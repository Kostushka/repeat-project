import styles from './Friends.module.css';

const Friends = ({
    friends,
    newFriendName,
    onChangeName,
    onClickChangeNameButton,
}) => {
    const handleChange = (e) => {
        const value = e.target.value;
        onChangeName(value); //просто функция колбэк
    };
    const handleClick = () => {
        onClickChangeNameButton(); //просто функция колбэк
    };
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Друзья</h1>
            {friends.map((el) => (
                <div className={styles.wrapper} key={el.id}>
                    <img className={styles.img} src={el.img} alt='friend' />
                    {el.name}
                </div>
            ))}
            <textarea
                value={newFriendName}
                onChange={handleChange}
                placeholder='Введите имя друга'
                className={styles.textarea}
            />
            <button className={styles.btn} onClick={handleClick}>
                Добавить друга
            </button>
        </div>
    );
};

export default Friends;
