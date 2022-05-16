import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setUserProfileActionCreator } from '../../store/reducers/mainPage-reducer';
import Main from './Main';

class MainContainer extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((res) => this.props.setUserProfileActionCreator(res.data));
    }
    render() {
        return <Main {...this.props} profile={this.props.profile} />;
    }
}
const mapStateToProps = (state) => ({
    profile: state.mainPage.profile,
});
export default connect(mapStateToProps, { setUserProfileActionCreator })(
    MainContainer
);
