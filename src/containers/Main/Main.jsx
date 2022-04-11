import Post from './Post';
import MainInfo from './MainInfo';

import styles from './Main.module.css';

const Main = ({ posts, newPostText, dispatch }) => {
    return (
        <main>
            <MainInfo />
            <Post posts={posts} newPostText={newPostText} dispatch={dispatch} />
        </main>
    );
};

export default Main;
