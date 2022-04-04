import PostItem from './PostItem';

import styles from './Post.module.css';

const Post = ({ posts }) => {
    return (
        <div className={styles.container}>
            <textarea />
            <div>
                <button>Создать пост</button>
            </div>
            <PostItem posts={posts} />
        </div>
    );
};

export default Post;
