import { useRef } from 'react';
import PostItem from './PostItem';

import styles from './Post.module.css';

const Post = ({
    posts,
    newPostText,
    onChangePost,
    onClickChangePostButton,
}) => {
    const ref = useRef();

    const addNewPost = () => {
        onClickChangePostButton();
    };
    const onPostChange = () => {
        const value = ref.current.value;
        onChangePost(value);
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
