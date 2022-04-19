import { connect } from 'react-redux';
import {
    addFriendActionCreator,
    updateNewFriendsNameActionCreator,
} from '../../../store/reducers/friendsPage-reducer';
import Friends from './Friends';

const mapStateToProps = (state) => ({
    friends: state.friendsPage.friends,
    newFriendName: state.friendsPage.newFriendName,
});
const mapDispatchToProps = (dispatch) => ({
    onClickChangeNameButton: () => {
        dispatch(addFriendActionCreator());
    },
    onChangeName: (value) => {
        dispatch(updateNewFriendsNameActionCreator(value));
    },
});
const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
