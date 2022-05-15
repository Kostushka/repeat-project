import { connect } from 'react-redux';
import {
    addPostActionCreator,
    updatePostTextActionCreator,
} from '../../../store/reducers/mainPage-reducer';
import Post from './Post';

const mapStateToProps = (state) => ({
    posts: state.mainPage.posts,
    newPostText: state.mainPage.newPostText,
});
// const mapDispatchToProps = (dispatch) => ({
//     onChangePost(value) {
//         dispatch(updatePostTextActionCreator(value));
//     },
//     onClickChangePostButton() {
//         dispatch(addPostActionCreator());
//     },
// });
const PostContainer = connect(mapStateToProps, {
    updatePostTextActionCreator,
    addPostActionCreator,
})(Post);

export default PostContainer;
