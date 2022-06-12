import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
    followActionCreator,
    getUsersActionCreator,
    getUsersTotalCountActionCreator,
    setCurrentPageActionCreator,
    toggleIsLoadingActionCreator,
    unfollowActionCreator,
} from '../../store/reducers/usersPage-reducer';
import Users from './Users';

class UsersApiComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsLoadingActionCreator(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersCount}`,
                { withCredentials: true }
            )
            .then((data) => {
                this.props.toggleIsLoadingActionCreator(false);
                this.props.getUsersActionCreator(data.data.items);
                this.props.getUsersTotalCountActionCreator(
                    data.data.totalCount
                );
            });
    }
    onPageChange = (page) => {
        this.props.setCurrentPageActionCreator(page);
        this.props.toggleIsLoadingActionCreator(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersCount}`,
                { withCredentials: true }
            )
            .then((data) => {
                this.props.toggleIsLoadingActionCreator(false);
                this.props.getUsersActionCreator(data.data.items);
            });
    };
    render() {
        return (
            <Users
                usersTotalCount={this.props.usersTotalCount}
                usersCount={this.props.usersCount}
                currentPage={this.props.currentPage}
                onPageChange={this.onPageChange}
                users={this.props.users}
                unfollow={this.props.unfollowActionCreator}
                follow={this.props.followActionCreator}
                isLoading={this.props.isLoading}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    usersTotalCount: state.usersPage.usersTotalCount,
    usersCount: state.usersPage.usersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
});
// const mapDispatchToProps = (dispatch) => ({
//     follow: (id) => {
//         dispatch(followActionCreator(id));
//     },
//     unfollow: (id) => {
//         dispatch(unfollowActionCreator(id));
//     },
//     getUsers: (users) => {
//         dispatch(getUsersActionCreator(users));
//     },
//     setCurrentPage: (page) => {
//         dispatch(setCurrentPageActionCreator(page));
//     },
//     getUsersTotalCount: (usersTotalCount) => {
//         dispatch(getUsersTotalCountActionCreator(usersTotalCount));
//     },
//     toggleIsLoading: (isLoading) => {
//         dispatch(toggleIsLoadingActionCreator(isLoading));
//     },
// });
const UsersContainer = connect(mapStateToProps, {
    followActionCreator,
    unfollowActionCreator,
    getUsersActionCreator,
    setCurrentPageActionCreator,
    getUsersTotalCountActionCreator,
    toggleIsLoadingActionCreator,
})(UsersApiComponent);

export default UsersContainer;
