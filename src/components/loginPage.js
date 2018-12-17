import React from 'react';
import HeaderBar from './header-bar';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import LoginForm from './login-form';

export function LoginPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div>
            <HeaderBar />
            <div className="home">
                <h2>Welcome back to Jabber Jaw</h2>
                <LoginForm />
                <Link to="/register" className="register">Register</Link>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
