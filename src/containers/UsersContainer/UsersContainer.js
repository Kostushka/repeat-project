import { connect } from 'react-redux';
import {
    followActionCreator,
    getUsersActionCreator,
    unfollowActionCreator,
} from '../../store/reducers/usersPage-reducer';
import Users from './Users';

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
});
const mapDispatchToProps = (dispatch) => ({
    follow: (id) => {
        dispatch(followActionCreator(id));
    },
    unfollow: (id) => {
        dispatch(unfollowActionCreator(id));
    },
    getUsers: (users) => {
        dispatch(getUsersActionCreator(users));
    },
});
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
