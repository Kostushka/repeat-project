import { useRef } from 'react';
import PostItem from './PostItem';

import styles from './Post.module.css';

const Post = ({ posts }) => {
    const ref = useRef();
    const onPostChange = () => {
        console.log(ref.current.value);
    };
    return (
        <div className={styles.container}>
            <textarea ref={ref} onChange={onPostChange} />
            <div>
                <button>Создать пост</button>
            </div>
            <PostItem posts={posts} />
        </div>
    );
};

export default Post;
