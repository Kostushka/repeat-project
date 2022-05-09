import { connect } from 'react-redux';
import {
    followActionCreator,
    getUsersActionCreator,
    getUsersTotalCountActionCreator,
    setCurrentPageActionCreator,
    unfollowActionCreator,
} from '../../store/reducers/usersPage-reducer';
import Users from './Users';

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    usersTotalCount: state.usersPage.usersTotalCount,
    usersCount: state.usersPage.usersCount,
    currentPage: state.usersPage.currentPage,
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
    setCurrentPage: (page) => {
        dispatch(setCurrentPageActionCreator(page))
    },
    getUsersTotalCount: (usersTotalCount) => {
        dispatch(getUsersTotalCountActionCreator(usersTotalCount))
    }
});
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
