import MainInfo from './MainInfo';
import PostContainer from './PostContainer/PostContainer';

const Main = ({ profile }) => {
    return (
        <main>
            <MainInfo profile={profile} />
            <PostContainer />
        </main>
    );
};

export default Main;
