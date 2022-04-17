import {
    addPostActionCreator,
    updatePostTextActionCreator,
} from '../../../store/reducers/mainPage-reducer';
import Post from './Post';

const PostContainer = ({ posts, newPostText, dispatch }) => {
    const onChangePost = (value) => {
        dispatch(updatePostTextActionCreator(value));
    };
    const onClickChangePostButton = () => {
        dispatch(addPostActionCreator());
    };
    return (
        <>
            <Post
                posts={posts}
                newPostText={newPostText}
                onChangePost={onChangePost}
                onClickChangePostButton={onClickChangePostButton}
            />
        </>
    );
};

export default PostContainer;
