import React from 'react';
import { connect } from 'react-redux';
import {
    followActionCreator,
    setCurrentPageActionCreator,
    unfollowActionCreator,
    toggleFollowingProgressActionCreator,
    getUsersThunkCreator,
    postFollowThunkCreator,
    deleteFollowThunkCreator,
} from '../../store/reducers/usersPage-reducer';
import Users from './Users';

class UsersApiComponent extends React.Component {
    componentDidMount() {
        // this.props.toggleIsLoadingActionCreator(true);
        // usersApi
        //     .getUsers(this.props.currentPage, this.props.usersCount)
        //     .then((data) => {
        //         this.props.toggleIsLoadingActionCreator(false);
        //         this.props.getUsersActionCreator(data.items);
        //         this.props.getUsersTotalCountActionCreator(data.totalCount);
        //     });
        this.props.getUsersThunkCreator(
            this.props.currentPage,
            this.props.usersCount
        );
    }
    onPageChange = (page) => {
        this.props.setCurrentPageActionCreator(page);
        // this.props.toggleIsLoadingActionCreator(true);
        // usersApi.getUsers(page, this.props.usersCount).then((data) => {
        //     this.props.toggleIsLoadingActionCreator(false);
        //     this.props.getUsersActionCreator(data.items);
        // });
        this.props.getUsersThunkCreator(page, this.props.usersCount);
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
                isFollowingProgress={this.props.isFollowingProgress}
                toggleFollowingProgress={
                    this.props.toggleFollowingProgressActionCreator
                }
                postFollowThunkCreator={this.props.postFollowThunkCreator}
                deleteFollowThunkCreator={this.props.deleteFollowThunkCreator}
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
    isFollowingProgress: state.usersPage.isFollowingProgress,
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
    setCurrentPageActionCreator,
    toggleFollowingProgressActionCreator,
    getUsersThunkCreator,
    postFollowThunkCreator,
    deleteFollowThunkCreator,
})(UsersApiComponent);

export default UsersContainer;
