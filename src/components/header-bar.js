import React from 'react';
import { connect } from 'react-redux';

export class HeaderBar extends React.Component {
    // logOut() {
    //     this.props.dispatch(clearAuth());
    //     clearAuthToken();
    // }

    render() {
        // Only render the log out button if we are logged in
        // let logOutButton;
        // if (this.props.loggedIn) {
        //     logOutButton = (
        //         <button className="button" onClick={() => this.logOut()}>Log out</button>
        //         // <a href="#" onClick={() => this.logOut()}><i class="fa fa-fw fa-user"></i> Log Out</a>
        //     );
        // }
        return (
            <div className="header-bar">
                <h1>Welcome to </h1>
                <img src="jabberJawLogo.png" alt="Jabber Jaw Logo" />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
