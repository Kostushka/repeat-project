import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserProfileThunkCreator } from '../../store/reducers/mainPage-reducer';
import {
    updateUserStatusThunkCreator,
    getUserStatusThunkCreator,
} from '../../store/reducers/usersPage-reducer';
import Main from './Main';

class MainContainer extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        if (!id) id = 2;
        // axios
        //     .get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
        //     .then((res) => this.props.setUserProfileActionCreator(res.data));
        this.props.getUserStatusThunkCreator(id);
        this.props.getUserProfileThunkCreator(id);
    }
    render() {
        return (
            <Main
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateUserStatus={this.props.updateUserStatusThunkCreator}
            />
        );
    }
}
const mapStateToProps = (state) => ({
    profile: state.mainPage.profile,
    status: state.usersPage.status,
});

const withDataUrlComponent = withRouter(MainContainer);

export default connect(mapStateToProps, {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    updateUserStatusThunkCreator,
})(withDataUrlComponent);
