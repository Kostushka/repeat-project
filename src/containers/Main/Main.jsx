import Post from './Post';
import MainInfo from './MainInfo';

import styles from './Main.module.css';

const Main = ({ posts, addPost }) => {
    return (
        <main>
            <MainInfo />
            <Post posts={posts} addPost={addPost} />
        </main>
    );
};

export default Main;
