import React from 'react';

class Navbar extends React.Component {
    // logOut() {
    //     this.props.dispatch(clearAuth());
    //     clearAuthToken();
    // }
    render() {
        // let logOutButton;
        // if (this.props.loggedIn) {
        //     logOutButton = (
        //         <button className="button" onClick={() => this.logOut()}>Log out</button>
        //         // <a href="#" onClick={() => this.logOut()}><i className="fa fa-fw fa-user"></i> Log Out</a>
        //     );
        // }
        return (
            <div className="navbar">
                <img src="chatBubble.png" className="chatBubble" alt="" />
                <a className="active" href="/"><i className="fa fa-fw fa-home"></i> Home</a>
                <a href="#"><i className="fa fa-fw fa-user"></i> Profile</a>
                <a href="#"><i className="fa fa-fw fa-info-circle"></i>About</a>
                <a href="#"><i className="fa fa-fw fa-user"></i> Login</a>
            </div>
        )
    }
}


export default Navbar;