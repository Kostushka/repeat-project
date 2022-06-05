import React from 'react';
import axios from 'axios';
import Header from './Header';
import { setUserAuthActionCreator } from '../../store/reducers/auth-reducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
                withCredentials: true,
            })
            .then((data) => {
                if (data.data.resultCode === 0) {
                    this.props.setUserAuthActionCreator(data.data.data);
                }
            });
    }
    render() {
        return <Header login={this.props.login} isAuth={this.props.auth} />;
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth.isAuth,
    login: state.auth.login,
});
export default connect(mapStateToProps, { setUserAuthActionCreator })(
    HeaderContainer
);
