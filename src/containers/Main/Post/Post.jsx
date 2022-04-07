import { useRef } from 'react';
import PostItem from './PostItem';

import styles from './Post.module.css';

const Post = ({ posts, addPost }) => {
    const ref = useRef();

    const addNewPost = () => {
        addPost(ref.current.value);
        ref.current.value = '';
    };
    return (
        <div className={styles.container}>
            <textarea ref={ref} />
            <div>
                <button onClick={addNewPost}>Создать пост</button>
            </div>
            <PostItem posts={posts} />
        </div>
    );
};

export default Post;
