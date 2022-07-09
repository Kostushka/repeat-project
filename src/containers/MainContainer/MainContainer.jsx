import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserProfileThunkCreator } from '../../store/reducers/mainPage-reducer';
import Main from './Main';

class MainContainer extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        if (!id) id = 2;
        // axios
        //     .get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
        //     .then((res) => this.props.setUserProfileActionCreator(res.data));
        this.props.getUserProfileThunkCreator(id);
    }
    render() {
        return <Main {...this.props} profile={this.props.profile} />;
    }
}
const mapStateToProps = (state) => ({
    profile: state.mainPage.profile,
});

const withDataUrlComponent = withRouter(MainContainer);

export default connect(mapStateToProps, { getUserProfileThunkCreator })(
    withDataUrlComponent
);
