import { useRef } from 'react';
import PostItem from './PostItem';

import styles from './Post.module.css';

const Post = ({
    posts,
    newPostText,
    updatePostTextActionCreator,
    addPostActionCreator,
}) => {
    const ref = useRef();

    const addNewPost = () => {
        addPostActionCreator();
    };
    const onPostChange = () => {
        const value = ref.current.value;
        updatePostTextActionCreator(value);
    };
    return (
        <div className={styles.container}>
            <textarea
                placeholder='Введите текст'
                ref={ref}
                value={newPostText}
                onChange={onPostChange}
            />
            <div>
                <button onClick={addNewPost}>Создать пост</button>
            </div>
            <PostItem posts={posts} />
        </div>
    );
};

export default Post;
