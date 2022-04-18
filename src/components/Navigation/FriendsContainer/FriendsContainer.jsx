import {
    addFriendActionCreator,
    updateNewFriendsNameActionCreator,
} from '../../../store/reducers/friendsPage-reducer';
import { StoreContext } from '../../../storeContext';
import Friends from './Friends';

const FriendsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const onChangeName = (value) => {
                    store.dispatch(updateNewFriendsNameActionCreator(value));
                };

                const onClickChangeNameButton = () => {
                    store.dispatch(addFriendActionCreator());
                };
                return (
                    <Friends
                        friends={store.getState().friendsPage.friends}
                        onChangeName={onChangeName}
                        onClickChangeNameButton={onClickChangeNameButton}
                        newFriendName={
                            store.getState().friendsPage.newFriendName
                        }
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};

export default FriendsContainer;
