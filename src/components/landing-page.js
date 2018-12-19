import React from 'react';
import HeaderBar from './header-bar';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div>
            <HeaderBar />
            <div className="home">
                <p>Jabber Jaw is a Messaging app that lets you create your own channel/room.</p>
                <p>Making it easier for you to keep intouch with friends and family whenever or wherever you can.</p>
                <p>Click the Demo Button below to try a demo of Jabber Jaw.</p>
                <button className="button">DEMO</button>
            </div>
        </div >
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
