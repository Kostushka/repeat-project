import React from 'react';
import Header from './Header';
import { authThunkCreator } from '../../store/reducers/auth-reducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
    componentDidMount() {
        // usersApi.auth.then((data) => {
        //     if (data.resultCode === 0) {
        //         this.props.setUserAuthActionCreator(data.data);
        //     }
        // });
        this.props.authThunkCreator();
    }
    render() {
        return <Header login={this.props.login} isAuth={this.props.auth} />;
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth.isAuth,
    login: state.auth.login,
});
export default connect(mapStateToProps, { authThunkCreator })(HeaderContainer);
