import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home">
            <p>Jabber Jaw is a Messaging app that lets you create your own channel/room.</p>
            <p>While keeping you intouch with friends and family whenever you need to.</p>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
