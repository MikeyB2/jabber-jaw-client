import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken, clearUsername } from '../local-storage';

class Navbar extends React.Component {


    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
        clearUsername();
    }
    render() {
        let logOutNav;
        if (this.props.loggedIn) {
            logOutNav = (
                <div>
                    <a className="active" href="/"><i className="fa fa-fw fa-home"></i> Dashboard</a>
                    <a><i className="fa fa-fw fa-user"></i> Profile</a>
                    <a><i className="fa fa-fw fa-info-circle"></i>About</a>
                    <a onClick={() => this.logOut()}><i className="fa fa-fw fa-sign-out-alt"></i> Log Out</a>
                </div>
            );
        };
        let loginNav;
        if (!this.props.loggedIn) {
            loginNav = (
                <div>
                    <a className="active" href="/"><i className="fa fa-fw fa-home"></i> Home</a>
                    <a><i className="fa fa-fw fa-info-circle"></i>About</a>
                    <a href="/login"><i className="fa fa-fw fa-sign-in-alt"></i> Login</a>
                </div>
            );
        };

        return (
            <div className="navbar">
                <img src="chatBubble.png" className="chatBubble" alt="" />
                {logOutNav}
                {loginNav}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});



export default connect(mapStateToProps)(Navbar);
