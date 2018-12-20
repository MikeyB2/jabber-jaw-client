import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken, clearUsername } from '../local-storage';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class Navbar extends React.Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

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

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }


    render() {
        let logOutNav;
        const username = localStorage.getItem('username');
        if (this.props.loggedIn) {
            logOutNav = (
                <div className="topnav">
                    <div id="myLinks">
                        <a className="active" href="/"><i className="fa fa-fw fa-home"></i> Dashboard</a>
                        <a onClick={this.openModal}><i className="fa fa-fw fa-user"></i> Profile</a>
                        <Modal
                            isOpen={this.state.modalIsOpen}
                            onAfterOpen={this.afterOpenModal}
                            onRequestClose={this.closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        ><h2 ref={subtitle => this.subtitle = subtitle}>Profile</h2>
                            <div>Username: {username}</div>
                            <div>Name: First name last name</div>
                            <div>Email: email@example.com</div>
                            <a href="#"><i class="fas fa-times-circle" onClick={this.closeModal}></i></a>

                        </Modal>

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
                        <a href="#about"><i className="fa fa-fw fa-info-circle"></i>About</a>
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
