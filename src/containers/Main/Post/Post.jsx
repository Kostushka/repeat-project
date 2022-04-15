import { useRef } from 'react';
import PostItem from './PostItem';
import {
    addPostActionCreator,
    updatePostTextActionCreator,
} from '../../../store/reducers/mainPage-reducer';

import styles from './Post.module.css';

const Post = ({ posts, newPostText, dispatch }) => {
    const ref = useRef();

    const addNewPost = () => {
        dispatch(addPostActionCreator());
    };
    const onPostChange = () => {
        dispatch(updatePostTextActionCreator(ref.current.value));
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
