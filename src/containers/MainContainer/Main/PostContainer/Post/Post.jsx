import { useFormik } from 'formik';
// import { useRef } from 'react';
import PostItem from './PostItem';

import styles from './Post.module.css';

const Post = ({
    posts,
    newPostText,
    updatePostTextActionCreator,
    addPostActionCreator,
}) => {
    // const ref = useRef();
    const formik = useFormik({
        initialValues: {
            message: '',
        },
        onSubmit: (values, { resetForm }) => {
            addPostActionCreator(values);
            resetForm({ values: '' });
        },
    });

    // const addNewPost = () => {
    //     addPostActionCreator();
    // };
    // const onPostChange = () => {
    //     const value = ref.current.value;
    //     updatePostTextActionCreator(value);
    // };
    return (
        <>
            <form onSubmit={formik.handleSubmit} className={styles.container}>
                <textarea
                    placeholder='Введите текст'
                    name='message'
                    // ref={ref}
                    // value={newPostText}
                    // onChange={onPostChange}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                />
                <div>
                    <button type='submit'>Создать пост</button>
                </div>
            </form>
            <PostItem posts={posts} />
        </>
    );
};

export default Post;
