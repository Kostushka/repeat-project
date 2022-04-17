import MainInfo from './MainInfo';
import PostContainer from './PostContainer/PostContainer';

const Main = ({ posts, newPostText, dispatch }) => {
    return (
        <main>
            <MainInfo />
            <PostContainer
                posts={posts}
                newPostText={newPostText}
                dispatch={dispatch}
            />
        </main>
    );
};

export default Main;
