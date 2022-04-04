import Post from './Post';
import MainInfo from './MainInfo';

import styles from './Main.module.css';

const Main = () => {
    return (
        <main>
            <MainInfo />
            <Post />
        </main>
    );
};

export default Main;
