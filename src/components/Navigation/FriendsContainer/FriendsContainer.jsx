import {
    addFriendActionCreator,
    updateNewFriendsNameActionCreator,
} from '../../../store/reducers/friendsPage-reducer';
import Friends from './Friends';

const FriendsContainer = ({ friends, newFriendName, dispatch }) => {
    const onChangeName = (value) => {
        dispatch(updateNewFriendsNameActionCreator(value));
    };

    const onClickChangeNameButton = () => {
        dispatch(addFriendActionCreator());
    };

    return (
        <>
            <Friends
                friends={friends}
                onChangeName={onChangeName}
                onClickChangeNameButton={onClickChangeNameButton}
                newFriendName={newFriendName}
            />
        </>
    );
};

export default FriendsContainer;
