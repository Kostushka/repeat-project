import styles from './PostItem.module.css';

const PostItem = ({ posts }) => {
    return (
        <div>
            {posts.map((el) => (
                <div key={el.id}>
                    <img
                        className={styles.img}
                        src='https://abrakadabra.fun/uploads/posts/2022-03/1647337970_2-abrakadabra-fun-p-freid-art-5.jpg'
                        alt='post'
                    />
                    <div>Пост {el.id}</div>
                    <div>{el.message}</div>
                </div>
            ))}
        </div>
    );
};

export default PostItem;
