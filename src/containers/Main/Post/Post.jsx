import PostItem from './PostItem';

import styles from './Post.module.css';

const Post = () => {
    const data = [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'Hi' },
        { id: 3, message: 'Hey' },
        { id: 4, message: 'Lala' },
    ];
    return (
        <div className={styles.container}>
            <textarea />
            <div>
                <button>Создать пост</button>
            </div>
            <PostItem data={data} />
        </div>
    );
};

export default Post;
