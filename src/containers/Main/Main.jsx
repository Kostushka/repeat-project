import Post from './Post';
import MainInfo from './MainInfo';

import styles from './Main.module.css';

const Main = ({ posts }) => {
    return (
        <main>
            <MainInfo />
            <Post posts={posts} />
        </main>
    );
};

export default Main;
