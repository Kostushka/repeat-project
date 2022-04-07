import Post from './Post';
import MainInfo from './MainInfo';

import styles from './Main.module.css';

const Main = ({ posts, newPostText, addPost, updatePostText }) => {
    return (
        <main>
            <MainInfo />
            <Post
                posts={posts}
                newPostText={newPostText}
                addPost={addPost}
                updatePostText={updatePostText}
            />
        </main>
    );
};

export default Main;
