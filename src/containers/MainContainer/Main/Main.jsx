import MainInfo from './MainInfo';
import PostContainer from './PostContainer/PostContainer';

const Main = ({ profile, status, updateUserStatus }) => {
    return (
        <main>
            <MainInfo
                profile={profile}
                status={status}
                updateUserStatus={updateUserStatus}
            />
            <PostContainer />
        </main>
    );
};

export default Main;
