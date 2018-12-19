import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken, clearUsername } from '../local-storage';

class Navbar extends React.Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this)
    }
    // handleClick = (e) {
    //     let x = document.getElementById('myLinks');
    //     if (x.style.display === 'block') {
    //         x.style.display = 'none';
    //     } else {
    //         x.style.display = 'block';
    //     }
    // }
    handleClick = (e) => {
        e.preventDefault();
        console.log('The link was clicked.');
    };

    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
        clearUsername();
    }

    // <a href="" className="icon" onClick={() => { this.handleClick }}>
    // <i className="fa fa-bars"></i></a>

    render() {
        let logOutNav;
        const username = localStorage.getItem('username');
        if (this.props.loggedIn) {
            logOutNav = (
                <div className="topnav">
                    <div id="myLinks">
                        <a className="active" href="/"><i className="fa fa-fw fa-home"></i> Dashboard</a>
                        <a><i className="fa fa-fw fa-user"></i> Profile</a>
                        <a><i className="fa fa-fw fa-info-circle"></i>About</a>
                        <a onClick={() => this.logOut()}><i className="fa fa-fw fa-sign-out-alt"></i> Log Out</a>
                        <li className="currentUser"><strong>{username}</strong></li>
                    </div>
                </div>
            );
        };
        let loginNav;
        if (!this.props.loggedIn) {
            loginNav = (
                <div className="topnav">
                    <div id="myLinks">
                        <a className="active" href="/"><i className="fa fa-fw fa-home"></i> Home</a>
                        <a><i className="fa fa-fw fa-info-circle"></i>About</a>
                        <a href="/login"><i className="fa fa-fw fa-sign-in-alt"></i> Login</a>
                    </div>
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
