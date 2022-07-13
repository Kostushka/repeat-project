import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
// import Login from '../containers/Login';

const mapStateToProps = (state) => ({
    auth: state.auth.isAuth,
});

export const withRedirect = (Component) => {
    const redirectContainer = ({ auth }, props) => {
        if (!auth) {
            // return <Login />;
            return <Redirect to='/login' />;
        } else {
            return <Component {...props} />;
        }
    };
    // class redirectContainer extends React.Component {
    //     render() {
    //         if (!this.props.auth) {
    //             return <Login />;
    //         }
    //         return <Component {...this.props} />;
    //     }
    // }
    return connect(mapStateToProps)(redirectContainer);
};
