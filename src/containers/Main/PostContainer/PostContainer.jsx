import {
    addPostActionCreator,
    updatePostTextActionCreator,
} from '../../../store/reducers/mainPage-reducer';
import { StoreContext } from '../../../storeContext';
import Post from './Post';

const PostContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const onChangePost = (value) => {
                    store.dispatch(updatePostTextActionCreator(value));
                };
                const onClickChangePostButton = () => {
                    store.dispatch(addPostActionCreator());
                };
                return (
                    <Post
                        posts={store.getState().mainPage.posts}
                        newPostText={store.getState().mainPage.newPostText}
                        onChangePost={onChangePost}
                        onClickChangePostButton={onClickChangePostButton}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};

export default PostContainer;
